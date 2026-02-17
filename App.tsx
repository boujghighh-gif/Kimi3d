import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Hands } from '@mediapipe/hands';
import type { Results } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import './App.css';

// GPGPU Particle System Configuration
const PARTICLE_COUNT = 50000;
const TEXTURE_SIZE = 256; // 256x256 = 65536 particles max
const REPULSION_RADIUS = 2.5;
const REPULSION_STRENGTH = 3.0;
const DAMPING = 0.96;
const RETURN_STRENGTH = 0.02;

// Vertex Shader for Particles
const particleVertexShader = `
  uniform sampler2D positionTexture;
  uniform sampler2D velocityTexture;
  uniform float pointSize;
  uniform float time;
  
  varying vec3 vVelocity;
  varying float vSpeed;
  
  void main() {
    vec2 uv = position.xy;
    vec4 posData = texture2D(positionTexture, uv);
    vec4 velData = texture2D(velocityTexture, uv);
    
    vec3 position = posData.xyz;
    vec3 velocity = velData.xyz;
    
    vVelocity = velocity;
    vSpeed = length(velocity);
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation based on distance and speed
    float size = pointSize * (1.0 + vSpeed * 0.5);
    gl_PointSize = size * (300.0 / -mvPosition.z);
  }
`;

// Fragment Shader for Particles
const particleFragmentShader = `
  varying vec3 vVelocity;
  varying float vSpeed;
  uniform float time;
  
  void main() {
    // Circular particle
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;
    
    // Glow effect based on speed
    float glow = 1.0 - dist * 2.0;
    glow = pow(glow, 1.5);
    
    // Color: white base with slight blue tint at high speeds
    vec3 color = vec3(1.0, 1.0, 1.0);
    color += vec3(0.0, 0.2, 0.4) * vSpeed * 0.3;
    
    // Alpha based on speed for trail effect
    float alpha = glow * (0.6 + vSpeed * 0.4);
    
    gl_FragColor = vec4(color, alpha);
  }
`;

// Position Update Shader (GPGPU)
const positionUpdateShader = `
  uniform sampler2D positionTexture;
  uniform sampler2D velocityTexture;
  uniform float deltaTime;
  uniform vec2 resolution;
  
  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    
    vec4 pos = texture2D(positionTexture, uv);
    vec4 vel = texture2D(velocityTexture, uv);
    
    // Update position
    pos.xyz += vel.xyz * deltaTime;
    
    // Boundary check - soft bounce
    float bound = 15.0;
    if (abs(pos.x) > bound) pos.x *= 0.95;
    if (abs(pos.y) > bound) pos.y *= 0.95;
    if (abs(pos.z) > bound) pos.z *= 0.95;
    
    gl_FragColor = pos;
  }
`;

// Velocity Update Shader (GPGPU)
const velocityUpdateShader = `
  uniform sampler2D positionTexture;
  uniform sampler2D velocityTexture;
  uniform vec3 handPositions[4];
  uniform int handCount;
  uniform float deltaTime;
  uniform float time;
  uniform float repulsionRadius;
  uniform float repulsionStrength;
  uniform float returnStrength;
  uniform float damping;
  uniform vec2 resolution;
  
  // Simplex noise function for turbulence
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    
    vec4 pos = texture2D(positionTexture, uv);
    vec4 vel = texture2D(velocityTexture, uv);
    
    // Spherical distribution target position
    float angle = uv.x * 6.28318 * 2.0;
    float phi = uv.y * 3.14159;
    vec3 targetPos = vec3(
      sin(phi) * cos(angle) * 8.0,
      cos(phi) * 8.0,
      sin(phi) * sin(angle) * 8.0
    );
    
    // Turbulence
    vec3 turbulence = vec3(
      snoise(pos.xyz * 0.15 + time * 0.1),
      snoise(pos.xyz * 0.15 + time * 0.1 + 100.0),
      snoise(pos.xyz * 0.15 + time * 0.1 + 200.0)
    ) * 0.02;
    
    // Hand repulsion
    vec3 repulsion = vec3(0.0);
    for (int i = 0; i < 4; i++) {
      if (i >= handCount) break;
      
      vec3 toHand = pos.xyz - handPositions[i];
      float dist = length(toHand);
      
      if (dist < repulsionRadius && dist > 0.001) {
        float force = (1.0 - dist / repulsionRadius) * repulsionStrength;
        repulsion += normalize(toHand) * force * (1.0 + (repulsionRadius - dist) * 2.0);
      }
    }
    
    // Return force to original position
    vec3 toTarget = targetPos - pos.xyz;
    vec3 returnForce = toTarget * returnStrength;
    
    // Update velocity
    vel.xyz += repulsion;
    vel.xyz += returnForce;
    vel.xyz += turbulence;
    vel.xyz *= damping;
    
    // Speed limit
    float maxSpeed = 15.0;
    if (length(vel.xyz) > maxSpeed) {
      vel.xyz = normalize(vel.xyz) * maxSpeed;
    }
    
    gl_FragColor = vel;
  }
`;

// Trail Shader
const trailVertexShader = `
  attribute float alpha;
  varying float vAlpha;
  
  void main() {
    vAlpha = alpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const trailFragmentShader = `
  varying float vAlpha;
  
  void main() {
    vec3 color = vec3(1.0, 1.0, 1.0);
    float glow = vAlpha * 0.8;
    gl_FragColor = vec4(color, glow);
  }
`;

class GPGPUParticleSystem {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  
  // FBO variables
  positionFBO!: THREE.WebGLRenderTarget;
  velocityFBO!: THREE.WebGLRenderTarget;
  positionFBO2!: THREE.WebGLRenderTarget;
  velocityFBO2!: THREE.WebGLRenderTarget;
  
  // Materials
  positionMaterial!: THREE.ShaderMaterial;
  velocityMaterial!: THREE.ShaderMaterial;
  particleMaterial!: THREE.ShaderMaterial;
  
  // Geometry
  particleGeometry!: THREE.BufferGeometry;
  particles!: THREE.Points;
  
  // Scene for FBO
  fboScene: THREE.Scene;
  fboCamera: THREE.OrthographicCamera;
  
  // Hand positions
  handPositions: THREE.Vector3[] = [];
  
  // Trails
  trailLines: THREE.Line[] = [];
  trailPositions: THREE.Vector3[][] = [[], [], [], []];
  maxTrailLength = 30;
  
  // Time
  clock = new THREE.Clock();
  
  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    
    this.fboScene = new THREE.Scene();
    this.fboCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    this.fboCamera.position.z = 1;
    
    this.initFBOs();
    this.initParticles();
    this.initTrails();
  }
  
  initFBOs() {
    const size = TEXTURE_SIZE;
    
    // Create render targets with float precision
    const options: THREE.RenderTargetOptions = {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      depthBuffer: false,
      stencilBuffer: false
    };
    
    this.positionFBO = new THREE.WebGLRenderTarget(size, size, options);
    this.velocityFBO = new THREE.WebGLRenderTarget(size, size, options);
    this.positionFBO2 = new THREE.WebGLRenderTarget(size, size, options);
    this.velocityFBO2 = new THREE.WebGLRenderTarget(size, size, options);
    
    // Initialize position data
    const positionData = new Float32Array(size * size * 4);
    const velocityData = new Float32Array(size * size * 4);
    
    for (let i = 0; i < size * size; i++) {
      const i4 = i * 4;
      
      // Spherical distribution
      const phi = Math.acos(-1 + (2 * (i % size)) / size);
      const theta = Math.sqrt(size * Math.PI) * phi;
      const radius = 8.0;
      
      positionData[i4] = radius * Math.cos(theta) * Math.sin(phi);
      positionData[i4 + 1] = radius * Math.cos(phi);
      positionData[i4 + 2] = radius * Math.sin(theta) * Math.sin(phi);
      positionData[i4 + 3] = 1.0;
      
      velocityData[i4] = 0;
      velocityData[i4 + 1] = 0;
      velocityData[i4 + 2] = 0;
      velocityData[i4 + 3] = 0;
    }
    
    // Create data textures
    const positionTexture = new THREE.DataTexture(positionData, size, size, THREE.RGBAFormat, THREE.FloatType);
    const velocityTexture = new THREE.DataTexture(velocityData, size, size, THREE.RGBAFormat, THREE.FloatType);
    positionTexture.needsUpdate = true;
    velocityTexture.needsUpdate = true;
    
    // Initialize FBOs with data
    this.renderer.setRenderTarget(this.positionFBO);
    const posQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.MeshBasicMaterial({ map: positionTexture })
    );
    this.fboScene.add(posQuad);
    this.renderer.render(this.fboScene, this.fboCamera);
    this.fboScene.remove(posQuad);
    
    this.renderer.setRenderTarget(this.velocityFBO);
    const velQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.MeshBasicMaterial({ map: velocityTexture })
    );
    this.fboScene.add(velQuad);
    this.renderer.render(this.fboScene, this.fboCamera);
    this.fboScene.remove(velQuad);
    
    this.renderer.setRenderTarget(null);
    
    // Create shader materials
    this.positionMaterial = new THREE.ShaderMaterial({
      uniforms: {
        positionTexture: { value: null },
        velocityTexture: { value: null },
        deltaTime: { value: 0.016 },
        resolution: { value: new THREE.Vector2(TEXTURE_SIZE, TEXTURE_SIZE) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: positionUpdateShader
    });
    
    this.velocityMaterial = new THREE.ShaderMaterial({
      uniforms: {
        positionTexture: { value: null },
        velocityTexture: { value: null },
        handPositions: { value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] },
        handCount: { value: 0 },
        deltaTime: { value: 0.016 },
        time: { value: 0 },
        repulsionRadius: { value: REPULSION_RADIUS },
        repulsionStrength: { value: REPULSION_STRENGTH },
        returnStrength: { value: RETURN_STRENGTH },
        damping: { value: DAMPING },
        resolution: { value: new THREE.Vector2(TEXTURE_SIZE, TEXTURE_SIZE) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: velocityUpdateShader
    });
  }
  
  initParticles() {
    // Create particle geometry with UVs
    const uvs = new Float32Array(PARTICLE_COUNT * 2);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (i % TEXTURE_SIZE) / TEXTURE_SIZE;
      const y = Math.floor(i / TEXTURE_SIZE) / TEXTURE_SIZE;
      uvs[i * 2] = x;
      uvs[i * 2 + 1] = y;
    }
    
    this.particleGeometry = new THREE.BufferGeometry();
    this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(uvs, 2));
    
    this.particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        positionTexture: { value: this.positionFBO.texture },
        velocityTexture: { value: this.velocityFBO.texture },
        pointSize: { value: 3.0 },
        time: { value: 0 }
      },
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    this.particles = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.scene.add(this.particles);
  }
  
  initTrails() {
    // Create trail lines for up to 4 hand points
    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(this.maxTrailLength * 3);
      const alphas = new Float32Array(this.maxTrailLength);
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
      geometry.setDrawRange(0, 0);
      
      const material = new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: trailVertexShader,
        fragmentShader: trailFragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      
      const line = new THREE.Line(geometry, material);
      line.frustumCulled = false;
      this.scene.add(line);
      this.trailLines.push(line);
    }
  }
  
  updateHandPositions(positions: THREE.Vector3[]) {
    this.handPositions = positions;
    
    // Update trails
    positions.forEach((pos, index) => {
      if (index < 4) {
        this.trailPositions[index].push(pos.clone());
        if (this.trailPositions[index].length > this.maxTrailLength) {
          this.trailPositions[index].shift();
        }
        this.updateTrailGeometry(index);
      }
    });
  }
  
  updateTrailGeometry(index: number) {
    const trail = this.trailPositions[index];
    const line = this.trailLines[index];
    const positions = line.geometry.attributes.position.array as Float32Array;
    const alphas = line.geometry.attributes.alpha.array as Float32Array;
    
    for (let i = 0; i < trail.length; i++) {
      const i3 = i * 3;
      positions[i3] = trail[i].x;
      positions[i3 + 1] = trail[i].y;
      positions[i3 + 2] = trail[i].z;
      
      // Fade out older points
      alphas[i] = (i / trail.length) * 0.8;
    }
    
    line.geometry.attributes.position.needsUpdate = true;
    line.geometry.attributes.alpha.needsUpdate = true;
    line.geometry.setDrawRange(0, trail.length);
  }
  
  update() {
    const deltaTime = Math.min(this.clock.getDelta(), 0.033);
    const time = this.clock.getElapsedTime();
    
    // Update velocity
    this.velocityMaterial.uniforms.positionTexture.value = this.positionFBO.texture;
    this.velocityMaterial.uniforms.velocityTexture.value = this.velocityFBO.texture;
    this.velocityMaterial.uniforms.deltaTime.value = deltaTime;
    this.velocityMaterial.uniforms.time.value = time;
    this.velocityMaterial.uniforms.handCount.value = this.handPositions.length;
    
    // Update hand positions in shader
    for (let i = 0; i < 4; i++) {
      if (i < this.handPositions.length) {
        this.velocityMaterial.uniforms.handPositions.value[i] = this.handPositions[i];
      }
    }
    
    const velQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.velocityMaterial);
    this.fboScene.add(velQuad);
    this.renderer.setRenderTarget(this.velocityFBO2);
    this.renderer.render(this.fboScene, this.fboCamera);
    this.fboScene.remove(velQuad);
    
    // Update position
    this.positionMaterial.uniforms.positionTexture.value = this.positionFBO.texture;
    this.positionMaterial.uniforms.velocityTexture.value = this.velocityFBO2.texture;
    this.positionMaterial.uniforms.deltaTime.value = deltaTime;
    
    const posQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.positionMaterial);
    this.fboScene.add(posQuad);
    this.renderer.setRenderTarget(this.positionFBO2);
    this.renderer.render(this.fboScene, this.fboCamera);
    this.fboScene.remove(posQuad);
    
    this.renderer.setRenderTarget(null);
    
    // Swap FBOs
    const tempPos = this.positionFBO;
    this.positionFBO = this.positionFBO2;
    this.positionFBO2 = tempPos;
    
    const tempVel = this.velocityFBO;
    this.velocityFBO = this.velocityFBO2;
    this.velocityFBO2 = tempVel;
    
    // Update particle material
    this.particleMaterial.uniforms.positionTexture.value = this.positionFBO.texture;
    this.particleMaterial.uniforms.velocityTexture.value = this.velocityFBO.texture;
    this.particleMaterial.uniforms.time.value = time;
  }
  
  dispose() {
    this.positionFBO.dispose();
    this.velocityFBO.dispose();
    this.positionFBO2.dispose();
    this.velocityFBO2.dispose();
    this.particleGeometry.dispose();
    this.particleMaterial.dispose();
    this.positionMaterial.dispose();
    this.velocityMaterial.dispose();
    this.trailLines.forEach(line => {
      line.geometry.dispose();
      (line.material as THREE.Material).dispose();
    });
  }
}

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleSystemRef = useRef<GPGPUParticleSystem | null>(null);
  const handsRef = useRef<Hands | null>(null);
  const cameraRef = useRef<Camera | null>(null);
  const rafRef = useRef<number>(0);
  const handSpheresRef = useRef<THREE.Mesh[]>([]);
  const sceneRef = useRef<THREE.Scene | null>(null);
  
  const [error, setError] = useState<string>('');
  const [handDetected, setHandDetected] = useState(false);
  const [fps, setFps] = useState(0);
  
  // FPS counter
  const fpsRef = useRef({ frames: 0, lastTime: performance.now() });
  
  // Initialize Three.js scene
  const initThreeJS = useCallback(() => {
    if (!containerRef.current) return () => {};
    
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;
    
    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a0a);
    container.appendChild(renderer.domElement);
    
    // Add vignette effect using a large sphere
    const vignetteGeometry = new THREE.SphereGeometry(50, 32, 32);
    const vignetteMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x1a1a1a) },
        color2: { value: new THREE.Color(0x050505) }
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vPosition;
        void main() {
          float dist = length(vPosition) / 50.0;
          float t = smoothstep(0.3, 1.0, dist);
          gl_FragColor = vec4(mix(color1, color2, t), 1.0);
        }
      `,
      side: THREE.BackSide
    });
    const vignette = new THREE.Mesh(vignetteGeometry, vignetteMaterial);
    scene.add(vignette);
    
    // Create hand spheres (visual representation)
    const sphereGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff3333,
      transparent: true,
      opacity: 0.8
    });
    
    for (let i = 0; i < 4; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
      sphere.visible = false;
      scene.add(sphere);
      handSpheresRef.current.push(sphere);
    }
    
    // Create particle system
    const particleSystem = new GPGPUParticleSystem(renderer, scene, camera);
    particleSystemRef.current = particleSystem;
    
    // Animation loop
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      
      particleSystem.update();
      renderer.render(scene, camera);
      
      // FPS counter
      fpsRef.current.frames++;
      const now = performance.now();
      if (now - fpsRef.current.lastTime >= 1000) {
        setFps(fpsRef.current.frames);
        fpsRef.current.frames = 0;
        fpsRef.current.lastTime = now;
      }
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafRef.current);
      particleSystem.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);
  
  // Initialize MediaPipe Hands
  const initMediaPipe = useCallback(async () => {
    if (!videoRef.current) return;
    
    try {
      const hands = new Hands({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
      });
      
      hands.setOptions({
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });
      
      hands.onResults((results: Results) => {
        if (!particleSystemRef.current || !sceneRef.current) return;
        
        const handPositions: THREE.Vector3[] = [];
        
        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
          setHandDetected(true);
          
          results.multiHandLandmarks.forEach((landmarks) => {
            // Get index finger tip (8) and thumb tip (4)
            const indexTip = landmarks[8];
            const thumbTip = landmarks[4];
            const middleTip = landmarks[12];
            const ringTip = landmarks[16];
            
            // Convert to 3D world coordinates
            // MediaPipe coords: x [0,1], y [0,1], z [-1,1]
            // Map to our scene: x [-15,15], y [-10,10], z [-5,5]
            const convertToWorld = (lm: typeof indexTip) => {
              return new THREE.Vector3(
                (lm.x - 0.5) * 30,
                -(lm.y - 0.5) * 20,
                lm.z * 5
              );
            };
            
            handPositions.push(convertToWorld(indexTip));
            handPositions.push(convertToWorld(thumbTip));
            handPositions.push(convertToWorld(middleTip));
            handPositions.push(convertToWorld(ringTip));
          });
        } else {
          setHandDetected(false);
        }
        
        // Update particle system with hand positions
        particleSystemRef.current.updateHandPositions(handPositions);
        
        // Update visual spheres
        handSpheresRef.current.forEach((sphere, i) => {
          if (i < handPositions.length) {
            sphere.position.copy(handPositions[i]);
            sphere.visible = true;
          } else {
            sphere.visible = false;
          }
        });
      });
      
      handsRef.current = hands;
      
      // Initialize camera
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current! });
        },
        width: 640,
        height: 480
      });
      
      cameraRef.current = camera;
      await camera.start();
      
    } catch (err) {
      console.error('MediaPipe initialization error:', err);
      setError('Failed to initialize camera. Please allow camera access.');
    }
  }, []);
  
  useEffect(() => {
    const cleanup = initThreeJS();
    initMediaPipe();
    
    return () => {
      cleanup();
      cameraRef.current?.stop();
      handsRef.current?.close();
    };
  }, [initThreeJS, initMediaPipe]);
  
  return (
    <div className="app">
      {/* Hidden video element for MediaPipe */}
      <video
        ref={videoRef}
        className="input-video"
        playsInline
        muted
        style={{ display: 'none' }}
      />
      
      {/* Main 3D container */}
      <div ref={containerRef} className="canvas-container" />
      
      {/* UI Overlay */}
      <div className="ui-overlay">
        <div className="header">
          <h1>Particle Destroyer</h1>
          <p>Move your hands to repel particles</p>
        </div>
        
        <div className="stats">
          <div className="stat">
            <span className="stat-label">Particles:</span>
            <span className="stat-value">{PARTICLE_COUNT.toLocaleString()}</span>
          </div>
          <div className="stat">
            <span className="stat-label">FPS:</span>
            <span className="stat-value">{fps}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Hand:</span>
            <span className={`stat-value ${handDetected ? 'detected' : ''}`}>
              {handDetected ? 'Detected' : 'Searching...'}
            </span>
          </div>
        </div>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <div className="instructions">
          <p>Show your hands to the camera</p>
          <p>Move fingers to destroy & repel particles</p>
        </div>
      </div>
      
      {/* Hidden canvas for MediaPipe drawing (if needed) */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default App;
