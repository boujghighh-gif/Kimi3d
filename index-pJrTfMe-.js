(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ed={exports:{}},Tl={};var cv;function Ty(){if(cv)return Tl;cv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Tl.Fragment=e,Tl.jsx=i,Tl.jsxs=i,Tl}var fv;function by(){return fv||(fv=1,ed.exports=Ty()),ed.exports}var _n=by(),nd={exports:{}},Ee={};var hv;function Ay(){if(hv)return Ee;hv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),E=Symbol.iterator;function R(H){return H===null||typeof H!="object"?null:(H=E&&H[E]||H["@@iterator"],typeof H=="function"?H:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,T={};function M(H,ot,Tt){this.props=H,this.context=ot,this.refs=T,this.updater=Tt||D}M.prototype.isReactComponent={},M.prototype.setState=function(H,ot){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ot,"setState")},M.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function G(){}G.prototype=M.prototype;function V(H,ot,Tt){this.props=H,this.context=ot,this.refs=T,this.updater=Tt||D}var F=V.prototype=new G;F.constructor=V,O(F,M.prototype),F.isPureReactComponent=!0;var q=Array.isArray;function Y(){}var X={H:null,A:null,T:null,S:null},at=Object.prototype.hasOwnProperty;function L(H,ot,Tt){var Pt=Tt.ref;return{$$typeof:o,type:H,key:ot,ref:Pt!==void 0?Pt:null,props:Tt}}function b(H,ot){return L(H.type,ot,H.props)}function P(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function tt(H){var ot={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Tt){return ot[Tt]})}var K=/\/+/g;function dt(H,ot){return typeof H=="object"&&H!==null&&H.key!=null?tt(""+H.key):ot.toString(36)}function pt(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(Y,Y):(H.status="pending",H.then(function(ot){H.status==="pending"&&(H.status="fulfilled",H.value=ot)},function(ot){H.status==="pending"&&(H.status="rejected",H.reason=ot)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function N(H,ot,Tt,Pt,qt){var ht=typeof H;(ht==="undefined"||ht==="boolean")&&(H=null);var yt=!1;if(H===null)yt=!0;else switch(ht){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(H.$$typeof){case o:case e:yt=!0;break;case S:return yt=H._init,N(yt(H._payload),ot,Tt,Pt,qt)}}if(yt)return qt=qt(H),yt=Pt===""?"."+dt(H,0):Pt,q(qt)?(Tt="",yt!=null&&(Tt=yt.replace(K,"$&/")+"/"),N(qt,ot,Tt,"",function(Jt){return Jt})):qt!=null&&(P(qt)&&(qt=b(qt,Tt+(qt.key==null||H&&H.key===qt.key?"":(""+qt.key).replace(K,"$&/")+"/")+yt)),ot.push(qt)),1;yt=0;var Vt=Pt===""?".":Pt+":";if(q(H))for(var te=0;te<H.length;te++)Pt=H[te],ht=Vt+dt(Pt,te),yt+=N(Pt,ot,Tt,ht,qt);else if(te=R(H),typeof te=="function")for(H=te.call(H),te=0;!(Pt=H.next()).done;)Pt=Pt.value,ht=Vt+dt(Pt,te++),yt+=N(Pt,ot,Tt,ht,qt);else if(ht==="object"){if(typeof H.then=="function")return N(pt(H),ot,Tt,Pt,qt);throw ot=String(H),Error("Objects are not valid as a React child (found: "+(ot==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ot)+"). If you meant to render a collection of children, use an array instead.")}return yt}function I(H,ot,Tt){if(H==null)return H;var Pt=[],qt=0;return N(H,Pt,"","",function(ht){return ot.call(Tt,ht,qt++)}),Pt}function nt(H){if(H._status===-1){var ot=H._result;ot=ot(),ot.then(function(Tt){(H._status===0||H._status===-1)&&(H._status=1,H._result=Tt)},function(Tt){(H._status===0||H._status===-1)&&(H._status=2,H._result=Tt)}),H._status===-1&&(H._status=0,H._result=ot)}if(H._status===1)return H._result.default;throw H._result}var Et=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ot=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(ot))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)},At={map:I,forEach:function(H,ot,Tt){I(H,function(){ot.apply(this,arguments)},Tt)},count:function(H){var ot=0;return I(H,function(){ot++}),ot},toArray:function(H){return I(H,function(ot){return ot})||[]},only:function(H){if(!P(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return Ee.Activity=x,Ee.Children=At,Ee.Component=M,Ee.Fragment=i,Ee.Profiler=l,Ee.PureComponent=V,Ee.StrictMode=r,Ee.Suspense=v,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(H){return X.H.useMemoCache(H)}},Ee.cache=function(H){return function(){return H.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(H,ot,Tt){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var Pt=O({},H.props),qt=H.key;if(ot!=null)for(ht in ot.key!==void 0&&(qt=""+ot.key),ot)!at.call(ot,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&ot.ref===void 0||(Pt[ht]=ot[ht]);var ht=arguments.length-2;if(ht===1)Pt.children=Tt;else if(1<ht){for(var yt=Array(ht),Vt=0;Vt<ht;Vt++)yt[Vt]=arguments[Vt+2];Pt.children=yt}return L(H.type,qt,Pt)},Ee.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:u,_context:H},H},Ee.createElement=function(H,ot,Tt){var Pt,qt={},ht=null;if(ot!=null)for(Pt in ot.key!==void 0&&(ht=""+ot.key),ot)at.call(ot,Pt)&&Pt!=="key"&&Pt!=="__self"&&Pt!=="__source"&&(qt[Pt]=ot[Pt]);var yt=arguments.length-2;if(yt===1)qt.children=Tt;else if(1<yt){for(var Vt=Array(yt),te=0;te<yt;te++)Vt[te]=arguments[te+2];qt.children=Vt}if(H&&H.defaultProps)for(Pt in yt=H.defaultProps,yt)qt[Pt]===void 0&&(qt[Pt]=yt[Pt]);return L(H,ht,qt)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(H){return{$$typeof:p,render:H}},Ee.isValidElement=P,Ee.lazy=function(H){return{$$typeof:S,_payload:{_status:-1,_result:H},_init:nt}},Ee.memo=function(H,ot){return{$$typeof:m,type:H,compare:ot===void 0?null:ot}},Ee.startTransition=function(H){var ot=X.T,Tt={};X.T=Tt;try{var Pt=H(),qt=X.S;qt!==null&&qt(Tt,Pt),typeof Pt=="object"&&Pt!==null&&typeof Pt.then=="function"&&Pt.then(Y,Et)}catch(ht){Et(ht)}finally{ot!==null&&Tt.types!==null&&(ot.types=Tt.types),X.T=ot}},Ee.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},Ee.use=function(H){return X.H.use(H)},Ee.useActionState=function(H,ot,Tt){return X.H.useActionState(H,ot,Tt)},Ee.useCallback=function(H,ot){return X.H.useCallback(H,ot)},Ee.useContext=function(H){return X.H.useContext(H)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(H,ot){return X.H.useDeferredValue(H,ot)},Ee.useEffect=function(H,ot){return X.H.useEffect(H,ot)},Ee.useEffectEvent=function(H){return X.H.useEffectEvent(H)},Ee.useId=function(){return X.H.useId()},Ee.useImperativeHandle=function(H,ot,Tt){return X.H.useImperativeHandle(H,ot,Tt)},Ee.useInsertionEffect=function(H,ot){return X.H.useInsertionEffect(H,ot)},Ee.useLayoutEffect=function(H,ot){return X.H.useLayoutEffect(H,ot)},Ee.useMemo=function(H,ot){return X.H.useMemo(H,ot)},Ee.useOptimistic=function(H,ot){return X.H.useOptimistic(H,ot)},Ee.useReducer=function(H,ot,Tt){return X.H.useReducer(H,ot,Tt)},Ee.useRef=function(H){return X.H.useRef(H)},Ee.useState=function(H){return X.H.useState(H)},Ee.useSyncExternalStore=function(H,ot,Tt){return X.H.useSyncExternalStore(H,ot,Tt)},Ee.useTransition=function(){return X.H.useTransition()},Ee.version="19.2.3",Ee}var dv;function Bp(){return dv||(dv=1,nd.exports=Ay()),nd.exports}var ai=Bp(),id={exports:{}},bl={},ad={exports:{}},rd={};var pv;function Ry(){return pv||(pv=1,(function(o){function e(N,I){var nt=N.length;N.push(I);t:for(;0<nt;){var Et=nt-1>>>1,At=N[Et];if(0<l(At,I))N[Et]=I,N[nt]=At,nt=Et;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],nt=N.pop();if(nt!==I){N[0]=nt;t:for(var Et=0,At=N.length,H=At>>>1;Et<H;){var ot=2*(Et+1)-1,Tt=N[ot],Pt=ot+1,qt=N[Pt];if(0>l(Tt,nt))Pt<At&&0>l(qt,Tt)?(N[Et]=qt,N[Pt]=nt,Et=Pt):(N[Et]=Tt,N[ot]=nt,Et=ot);else if(Pt<At&&0>l(qt,nt))N[Et]=qt,N[Pt]=nt,Et=Pt;else break t}}return I}function l(N,I){var nt=N.sortIndex-I.sortIndex;return nt!==0?nt:N.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var v=[],m=[],S=1,x=null,E=3,R=!1,D=!1,O=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function F(N){for(var I=i(m);I!==null;){if(I.callback===null)r(m);else if(I.startTime<=N)r(m),I.sortIndex=I.expirationTime,e(v,I);else break;I=i(m)}}function q(N){if(O=!1,F(N),!D)if(i(v)!==null)D=!0,Y||(Y=!0,tt());else{var I=i(m);I!==null&&pt(q,I.startTime-N)}}var Y=!1,X=-1,at=5,L=-1;function b(){return T?!0:!(o.unstable_now()-L<at)}function P(){if(T=!1,Y){var N=o.unstable_now();L=N;var I=!0;try{t:{D=!1,O&&(O=!1,G(X),X=-1),R=!0;var nt=E;try{e:{for(F(N),x=i(v);x!==null&&!(x.expirationTime>N&&b());){var Et=x.callback;if(typeof Et=="function"){x.callback=null,E=x.priorityLevel;var At=Et(x.expirationTime<=N);if(N=o.unstable_now(),typeof At=="function"){x.callback=At,F(N),I=!0;break e}x===i(v)&&r(v),F(N)}else r(v);x=i(v)}if(x!==null)I=!0;else{var H=i(m);H!==null&&pt(q,H.startTime-N),I=!1}}break t}finally{x=null,E=nt,R=!1}I=void 0}}finally{I?tt():Y=!1}}}var tt;if(typeof V=="function")tt=function(){V(P)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,dt=K.port2;K.port1.onmessage=P,tt=function(){dt.postMessage(null)}}else tt=function(){M(P,0)};function pt(N,I){X=M(function(){N(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):at=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(N){switch(E){case 1:case 2:case 3:var I=3;break;default:I=E}var nt=E;E=I;try{return N()}finally{E=nt}},o.unstable_requestPaint=function(){T=!0},o.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var nt=E;E=N;try{return I()}finally{E=nt}},o.unstable_scheduleCallback=function(N,I,nt){var Et=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?Et+nt:Et):nt=Et,N){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=nt+At,N={id:S++,callback:I,priorityLevel:N,startTime:nt,expirationTime:At,sortIndex:-1},nt>Et?(N.sortIndex=nt,e(m,N),i(v)===null&&N===i(m)&&(O?(G(X),X=-1):O=!0,pt(q,nt-Et))):(N.sortIndex=At,e(v,N),D||R||(D=!0,Y||(Y=!0,tt()))),N},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(N){var I=E;return function(){var nt=E;E=I;try{return N.apply(this,arguments)}finally{E=nt}}}})(rd)),rd}var mv;function Cy(){return mv||(mv=1,ad.exports=Ry()),ad.exports}var sd={exports:{}},oi={};var gv;function wy(){if(gv)return oi;gv=1;var o=Bp();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(v,m,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:v,containerInfo:m,implementation:S}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return oi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,oi.createPortal=function(v,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(v,m,null,S)},oi.flushSync=function(v){var m=d.T,S=r.p;try{if(d.T=null,r.p=2,v)return v()}finally{d.T=m,r.p=S,r.d.f()}},oi.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(v,m))},oi.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},oi.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var S=m.as,x=p(S,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,R=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?r.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:R}):S==="script"&&r.d.X(v,{crossOrigin:x,integrity:E,fetchPriority:R,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},oi.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=p(m.as,m.crossOrigin);r.d.M(v,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(v)},oi.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,x=p(S,m.crossOrigin);r.d.L(v,S,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},oi.preloadModule=function(v,m){if(typeof v=="string")if(m){var S=p(m.as,m.crossOrigin);r.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(v)},oi.requestFormReset=function(v){r.d.r(v)},oi.unstable_batchedUpdates=function(v,m){return v(m)},oi.useFormState=function(v,m,S){return d.H.useFormState(v,m,S)},oi.useFormStatus=function(){return d.H.useHostTransitionStatus()},oi.version="19.2.3",oi}var vv;function Dy(){if(vv)return sd.exports;vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sd.exports=wy(),sd.exports}var _v;function Uy(){if(_v)return bl;_v=1;var o=Cy(),e=Bp(),i=Dy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return v(c),t;if(h===s)return v(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=h;else{for(var y=!1,U=c.child;U;){if(U===a){y=!0,a=c,s=h;break}if(U===s){y=!0,s=c,a=h;break}U=U.sibling}if(!y){for(U=h.child;U;){if(U===a){y=!0,a=h,s=c;break}if(U===s){y=!0,s=h,a=c;break}U=U.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,E=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),V=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),b=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=P&&t[P]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case q:return"Suspense";case Y:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case V:return t.displayName||"Context";case G:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case at:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var pt=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},Et=[],At=-1;function H(t){return{current:t}}function ot(t){0>At||(t.current=Et[At],Et[At]=null,At--)}function Tt(t,n){At++,Et[At]=t.current,t.current=n}var Pt=H(null),qt=H(null),ht=H(null),yt=H(null);function Vt(t,n){switch(Tt(ht,n),Tt(qt,t),Tt(Pt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?N0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=N0(n),t=O0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ot(Pt),Tt(Pt,t)}function te(){ot(Pt),ot(qt),ot(ht)}function Jt(t){t.memoizedState!==null&&Tt(yt,t);var n=Pt.current,a=O0(n,t.type);n!==a&&(Tt(qt,t),Tt(Pt,a))}function Te(t){qt.current===t&&(ot(Pt),ot(qt)),yt.current===t&&(ot(yt),yl._currentValue=nt)}var gn,ce;function de(t){if(gn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);gn=n&&n[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gn+t+ce}var Ie=!1;function ye(t,n){if(!t||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(_t){var mt=_t}Reflect.construct(t,[],Ct)}else{try{Ct.call()}catch(_t){mt=_t}t.call(Ct.prototype)}}else{try{throw Error()}catch(_t){mt=_t}(Ct=t())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(_t){if(_t&&mt&&typeof _t.stack=="string")return[_t.stack,mt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),y=h[0],U=h[1];if(y&&U){var j=y.split(`
`),ct=U.split(`
`);for(c=s=0;s<j.length&&!j[s].includes("DetermineComponentFrameRoot");)s++;for(;c<ct.length&&!ct[c].includes("DetermineComponentFrameRoot");)c++;if(s===j.length||c===ct.length)for(s=j.length-1,c=ct.length-1;1<=s&&0<=c&&j[s]!==ct[c];)c--;for(;1<=s&&0<=c;s--,c--)if(j[s]!==ct[c]){if(s!==1||c!==1)do if(s--,c--,0>c||j[s]!==ct[c]){var Mt=`
`+j[s].replace(" at new "," at ");return t.displayName&&Mt.includes("<anonymous>")&&(Mt=Mt.replace("<anonymous>",t.displayName)),Mt}while(1<=s&&0<=c);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?de(a):""}function dn(t,n){switch(t.tag){case 26:case 27:case 5:return de(t.type);case 16:return de("Lazy");case 13:return t.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return ye(t.type,!1);case 11:return ye(t.type.render,!1);case 1:return ye(t.type,!0);case 31:return de("Activity");default:return""}}function Z(t){try{var n="",a=null;do n+=dn(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var un=Object.prototype.hasOwnProperty,Ue=o.unstable_scheduleCallback,Ve=o.unstable_cancelCallback,ee=o.unstable_shouldYield,B=o.unstable_requestPaint,A=o.unstable_now,et=o.unstable_getCurrentPriorityLevel,St=o.unstable_ImmediatePriority,wt=o.unstable_UserBlockingPriority,xt=o.unstable_NormalPriority,se=o.unstable_LowPriority,zt=o.unstable_IdlePriority,ne=o.log,me=o.unstable_setDisableYieldValue,Ut=null,Nt=null;function Zt(t){if(typeof ne=="function"&&me(t),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Ut,t)}catch{}}var Yt=Math.clz32?Math.clz32:J,Bt=Math.log,Se=Math.LN2;function J(t){return t>>>=0,t===0?32:31-(Bt(t)/Se|0)|0}var It=256,Ot=262144,Wt=4194304;function Dt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Rt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var U=s&134217727;return U!==0?(s=U&~h,s!==0?c=Dt(s):(y&=U,y!==0?c=Dt(y):a||(a=U&~t,a!==0&&(c=Dt(a))))):(U=s&~h,U!==0?c=Dt(U):y!==0?c=Dt(y):a||(a=s&~t,a!==0&&(c=Dt(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ve(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qe(){var t=Wt;return Wt<<=1,(Wt&62914560)===0&&(Wt=4194304),t}function De(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Di(t,n,a,s,c,h){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var U=t.entanglements,j=t.expirationTimes,ct=t.hiddenUpdates;for(a=y&~a;0<a;){var Mt=31-Yt(a),Ct=1<<Mt;U[Mt]=0,j[Mt]=-1;var mt=ct[Mt];if(mt!==null)for(ct[Mt]=null,Mt=0;Mt<mt.length;Mt++){var _t=mt[Mt];_t!==null&&(_t.lane&=-536870913)}a&=~Ct}s!==0&&la(t,s,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~n))}function la(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Yt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Kr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Yt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ri(t,n){var a=n&-n;return a=(a&42)!==0?1:Ui(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ui(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Da(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function cn(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:iv(t.type))}function wn(t,n){var a=I.p;try{return I.p=t,n()}finally{I.p=a}}var si=Math.random().toString(36).slice(2),yn="__reactFiber$"+si,Sn="__reactProps$"+si,fi="__reactContainer$"+si,ua="__reactEvents$"+si,Wi="__reactListeners$"+si,Qr="__reactHandles$"+si,Ua="__reactResources$"+si,ca="__reactMarker$"+si;function cr(t){delete t[yn],delete t[Sn],delete t[ua],delete t[Wi],delete t[Qr]}function Nn(t){var n=t[yn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[fi]||a[yn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=G0(t);t!==null;){if(a=t[yn])return a;t=G0(t)}return n}t=a,a=t.parentNode}return null}function Xn(t){if(t=t[yn]||t[fi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Li(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function qi(t){var n=t[Ua];return n||(n=t[Ua]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(t){t[ca]=!0}var it=new Set,gt={};function lt(t,n){st(t,n),st(t+"Capture",n)}function st(t,n){for(gt[t]=n,t=0;t<n.length;t++)it.add(n[t])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},Xt={};function $t(t){return un.call(Xt,t)?!0:un.call(kt,t)?!1:Ht.test(t)?Xt[t]=!0:(kt[t]=!0,!1)}function ie(t,n,a){if($t(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ue(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function re(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function He(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fn(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function tn(t){if(!t._valueTracker){var n=He(t)?"checked":"value";t._valueTracker=fn(t,n,""+t[n])}}function Xe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=He(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ge=/[\n"\\]/g;function xe(t){return t.replace(Ge,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,a,s,c,h,y,U){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pe(n)):t.value!==""+pe(n)&&(t.value=""+pe(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?On(t,y,pe(n)):a!=null?On(t,y,pe(a)):s!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?t.name=""+pe(U):t.removeAttribute("name")}function Yi(t,n,a,s,c,h,y,U){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){tn(t);return}a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,U||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=U?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),tn(t)}function On(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xi(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Qe(t,n,a){if(n!=null&&(n=""+pe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+pe(a):""}function Pn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(pt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=pe(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),tn(t)}function En(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function La(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Fn(t,c,s)}else for(var h in n)n.hasOwnProperty(h)&&Fn(t,h,n[h])}function Qn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ds(t){return Qc.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function fa(){}var Jr=null;function Na(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fr=null,hr=null;function ql(t){var n=Xn(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Sn]||null;if(!c)throw Error(r(90));Mn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Xe(s)}break t;case"textarea":Qe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xi(t,!!a.multiple,n,!1)}}}var zo=!1;function Us(t,n,a){if(zo)return t(n,a);zo=!0;try{var s=t(n);return s}finally{if(zo=!1,(fr!==null||hr!==null)&&(Hu(),fr&&(n=fr,t=hr,hr=fr=null,ql(n),t)))for(n=0;n<t.length;n++)ql(t[n])}}function dr(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Sn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=!1;if(ji)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Oa=!1}var ya=null,Bo=null,$r=null;function Io(){if($r)return $r;var t,n=Bo,a=n.length,s,c="value"in ya?ya.value:ya.textContent,h=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===c[h-s];s++);return $r=c.slice(t,1<s?1-s:void 0)}function pr(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function mr(){return!0}function Pa(){return!1}function $n(t){function n(a,s,c,h,y){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?mr:Pa,this.isPropagationStopped=Pa,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),n}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=$n(ha),gr=x({},ha,{view:0,detail:0}),vr=$n(gr),Ns,Os,ts,es=x({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Go,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ts&&(ts&&t.type==="mousemove"?(Ns=t.screenX-ts.screenX,Os=t.screenY-ts.screenY):Os=Ns=0,ts=t),Ns)},movementY:function(t){return"movementY"in t?t.movementY:Os}}),ns=$n(es),Yl=x({},es,{dataTransfer:0}),Jc=$n(Yl),jl=x({},gr,{relatedTarget:0}),Ps=$n(jl),Zl=x({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Kl=$n(Zl),Ho=x({},ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ql=$n(Ho),$c=x({},ha,{data:0}),Jl=$n($c),tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$l={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=$l[t])?!!n[t]:!1}function Go(){return nf}var Vo=x({},gr,{key:function(t){if(t.key){var n=tf[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=pr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ef[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Go,charCode:function(t){return t.type==="keypress"?pr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),af=$n(Vo),rf=x({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=$n(rf),Fs=x({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Go}),sf=$n(Fs),of=x({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),lf=$n(of),eu=x({},es,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nu=$n(eu),f=x({},ha,{newState:0,oldState:0}),g=$n(f),_=[9,13,27,32],C=ji&&"CompositionEvent"in window,z=null;ji&&"documentMode"in document&&(z=document.documentMode);var W=ji&&"TextEvent"in window&&!z,k=ji&&(!C||z&&8<z&&11>=z),$=" ",vt=!1;function Lt(t,n){switch(t){case"keyup":return _.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gt(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fe=!1;function le(t,n){switch(t){case"compositionend":return Gt(n);case"keypress":return n.which!==32?null:(vt=!0,$);case"textInput":return t=n.data,t===$&&vt?null:t;default:return null}}function Kt(t,n){if(fe)return t==="compositionend"||!C&&Lt(t,n)?(t=Io(),$r=Bo=ya=null,fe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return k&&n.locale!=="ko"?null:n.data;default:return null}}var _e={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function be(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_e[t.type]:n==="textarea"}function rn(t,n,a,s){fr?hr?hr.push(s):hr=[s]:fr=s,n=Yu(n,"onChange"),0<n.length&&(a=new Ls("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ye=null,xn=null;function yi(t){R0(t,0)}function kn(t){var n=Li(t);if(Xe(n))return t}function Fe(t,n){if(t==="change")return n}var zn=!1;if(ji){var Zi;if(ji){var Xo="oninput"in document;if(!Xo){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),Xo=typeof iu.oninput=="function"}Zi=Xo}else Zi=!1;zn=Zi&&(!document.documentMode||9<document.documentMode)}function au(){Ye&&(Ye.detachEvent("onpropertychange",ru),xn=Ye=null)}function ru(t){if(t.propertyName==="value"&&kn(xn)){var n=[];rn(n,xn,t,Na(t)),Us(yi,n)}}function uf(t,n,a){t==="focusin"?(au(),Ye=n,xn=a,Ye.attachEvent("onpropertychange",ru)):t==="focusout"&&au()}function zs(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kn(xn)}function tx(t,n){if(t==="click")return kn(n)}function ex(t,n){if(t==="input"||t==="change")return kn(n)}function nx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ni=typeof Object.is=="function"?Object.is:nx;function ko(t,n){if(Ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!un.call(n,c)||!Ni(t[c],n[c]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,n){var a=Qp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qp(a)}}function $p(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?$p(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function tm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function cf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ix=ji&&"documentMode"in document&&11>=document.documentMode,Bs=null,ff=null,Wo=null,hf=!1;function em(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hf||Bs==null||Bs!==Qt(s)||(s=Bs,"selectionStart"in s&&cf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Wo&&ko(Wo,s)||(Wo=s,s=Yu(ff,"onSelect"),0<s.length&&(n=new Ls("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Bs)))}function is(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Is={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},df={},nm={};ji&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function as(t){if(df[t])return df[t];if(!Is[t])return t;var n=Is[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in nm)return df[t]=n[a];return t}var im=as("animationend"),am=as("animationiteration"),rm=as("animationstart"),ax=as("transitionrun"),rx=as("transitionstart"),sx=as("transitioncancel"),sm=as("transitionend"),om=new Map,pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pf.push("scrollEnd");function da(t,n){om.set(t,n),lt(n,[t])}var su=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ki=[],Hs=0,mf=0;function ou(){for(var t=Hs,n=mf=Hs=0;n<t;){var a=Ki[n];Ki[n++]=null;var s=Ki[n];Ki[n++]=null;var c=Ki[n];Ki[n++]=null;var h=Ki[n];if(Ki[n++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}h!==0&&lm(a,c,h)}}function lu(t,n,a,s){Ki[Hs++]=t,Ki[Hs++]=n,Ki[Hs++]=a,Ki[Hs++]=s,mf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function gf(t,n,a,s){return lu(t,n,a,s),uu(t)}function rs(t,n){return lu(t,null,null,n),uu(t)}function lm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Yt(a),t=h.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),h):null}function uu(t){if(50<dl)throw dl=0,bh=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function ox(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(t,n,a,s){return new ox(t,n,a,s)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fa(t,n){var a=t.alternate;return a===null?(a=Oi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function um(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cu(t,n,a,s,c,h){var y=0;if(s=t,typeof t=="function")vf(t)&&(y=1);else if(typeof t=="string")y=hy(t,a,Pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case L:return t=Oi(31,a,n,c),t.elementType=L,t.lanes=h,t;case O:return ss(a.children,c,h,n);case T:y=8,c|=24;break;case M:return t=Oi(12,a,n,c|2),t.elementType=M,t.lanes=h,t;case q:return t=Oi(13,a,n,c),t.elementType=q,t.lanes=h,t;case Y:return t=Oi(19,a,n,c),t.elementType=Y,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V:y=10;break t;case G:y=9;break t;case F:y=11;break t;case X:y=14;break t;case at:y=16,s=null;break t}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Oi(y,a,n,c),n.elementType=t,n.type=s,n.lanes=h,n}function ss(t,n,a,s){return t=Oi(7,t,s,n),t.lanes=a,t}function _f(t,n,a){return t=Oi(6,t,null,n),t.lanes=a,t}function cm(t){var n=Oi(18,null,null,0);return n.stateNode=t,n}function xf(t,n,a){return n=Oi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var fm=new WeakMap;function Qi(t,n){if(typeof t=="object"&&t!==null){var a=fm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Z(n)},fm.set(t,n),n)}return{value:t,source:n,stack:Z(n)}}var Vs=[],Xs=0,fu=null,qo=0,Ji=[],$i=0,_r=null,Sa=1,Ma="";function za(t,n){Vs[Xs++]=qo,Vs[Xs++]=fu,fu=t,qo=n}function hm(t,n,a){Ji[$i++]=Sa,Ji[$i++]=Ma,Ji[$i++]=_r,_r=t;var s=Sa;t=Ma;var c=32-Yt(s)-1;s&=~(1<<c),a+=1;var h=32-Yt(n)+c;if(30<h){var y=c-c%5;h=(s&(1<<y)-1).toString(32),s>>=y,c-=y,Sa=1<<32-Yt(n)+c|a<<c|s,Ma=h+t}else Sa=1<<h|a<<c|s,Ma=t}function yf(t){t.return!==null&&(za(t,1),hm(t,1,0))}function Sf(t){for(;t===fu;)fu=Vs[--Xs],Vs[Xs]=null,qo=Vs[--Xs],Vs[Xs]=null;for(;t===_r;)_r=Ji[--$i],Ji[$i]=null,Ma=Ji[--$i],Ji[$i]=null,Sa=Ji[--$i],Ji[$i]=null}function dm(t,n){Ji[$i++]=Sa,Ji[$i++]=Ma,Ji[$i++]=_r,Sa=n.id,Ma=n.overflow,_r=t}var ti=null,pn=null,ze=!1,xr=null,ta=!1,Mf=Error(r(519));function yr(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yo(Qi(n,t)),Mf}function pm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[yn]=t,n[Sn]=s,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<ml.length;a++)Ne(ml[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),Yi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),Pn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||U0(n.textContent,a)?(s.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),s.onScroll!=null&&Ne("scroll",n),s.onScrollEnd!=null&&Ne("scrollend",n),s.onClick!=null&&(n.onclick=fa),n=!0):n=!1,n||yr(t,!0)}function mm(t){for(ti=t.return;ti;)switch(ti.tag){case 5:case 31:case 13:ta=!1;return;case 27:case 3:ta=!0;return;default:ti=ti.return}}function ks(t){if(t!==ti)return!1;if(!ze)return mm(t),ze=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hh(t.type,t.memoizedProps)),a=!a),a&&pn&&yr(t),mm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));pn=H0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));pn=H0(t)}else n===27?(n=pn,Or(t.type)?(t=Wh,Wh=null,pn=t):pn=n):pn=ti?na(t.stateNode.nextSibling):null;return!0}function os(){pn=ti=null,ze=!1}function Ef(){var t=xr;return t!==null&&(Ti===null?Ti=t:Ti.push.apply(Ti,t),xr=null),t}function Yo(t){xr===null?xr=[t]:xr.push(t)}var Tf=H(null),ls=null,Ba=null;function Sr(t,n,a){Tt(Tf,n._currentValue),n._currentValue=a}function Ia(t){t._currentValue=Tf.current,ot(Tf)}function bf(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Af(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var y=c.child;h=h.firstContext;t:for(;h!==null;){var U=h;h=c;for(var j=0;j<n.length;j++)if(U.context===n[j]){h.lanes|=a,U=h.alternate,U!==null&&(U.lanes|=a),bf(h.return,a,t),s||(y=null);break t}h=U.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),bf(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Ws(t,n,a,s){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var U=c.type;Ni(c.pendingProps.value,y.value)||(t!==null?t.push(U):t=[U])}}else if(c===yt.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yl):t=[yl])}c=c.return}t!==null&&Af(n,t,a,s),n.flags|=262144}function hu(t){for(t=t.firstContext;t!==null;){if(!Ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function us(t){ls=t,Ba=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ei(t){return gm(ls,t)}function du(t,n){return ls===null&&us(t),gm(t,n)}function gm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ba===null){if(t===null)throw Error(r(308));Ba=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ba=Ba.next=n;return a}var lx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ux=o.unstable_scheduleCallback,cx=o.unstable_NormalPriority,Bn={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new lx,data:new Map,refCount:0}}function jo(t){t.refCount--,t.refCount===0&&ux(cx,function(){t.controller.abort()})}var Zo=null,Cf=0,qs=0,Ys=null;function fx(t,n){if(Zo===null){var a=Zo=[];Cf=0,qs=Uh(),Ys={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Cf++,n.then(vm,vm),n}function vm(){if(--Cf===0&&Zo!==null){Ys!==null&&(Ys.status="fulfilled");var t=Zo;Zo=null,qs=0,Ys=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function hx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var _m=N.S;N.S=function(t,n){e0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fx(t,n),_m!==null&&_m(t,n)};var cs=H(null);function wf(){var t=cs.current;return t!==null?t:hn.pooledCache}function pu(t,n){n===null?Tt(cs,cs.current):Tt(cs,n.pool)}function xm(){var t=wf();return t===null?null:{parent:Bn._currentValue,pool:t}}var js=Error(r(460)),Df=Error(r(474)),mu=Error(r(542)),gu={then:function(){}};function ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(fa,fa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Em(t),t;default:if(typeof n.status=="string")n.then(fa,fa);else{if(t=hn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Em(t),t}throw hs=n,js}}function fs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hs=a,js):a}}var hs=null;function Mm(){if(hs===null)throw Error(r(459));var t=hs;return hs=null,t}function Em(t){if(t===js||t===mu)throw Error(r(483))}var Zs=null,Ko=0;function vu(t){var n=Ko;return Ko+=1,Zs===null&&(Zs=[]),Sm(Zs,t,n)}function Qo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function _u(t,n){throw n.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Tm(t){function n(rt,Q){if(t){var ut=rt.deletions;ut===null?(rt.deletions=[Q],rt.flags|=16):ut.push(Q)}}function a(rt,Q){if(!t)return null;for(;Q!==null;)n(rt,Q),Q=Q.sibling;return null}function s(rt){for(var Q=new Map;rt!==null;)rt.key!==null?Q.set(rt.key,rt):Q.set(rt.index,rt),rt=rt.sibling;return Q}function c(rt,Q){return rt=Fa(rt,Q),rt.index=0,rt.sibling=null,rt}function h(rt,Q,ut){return rt.index=ut,t?(ut=rt.alternate,ut!==null?(ut=ut.index,ut<Q?(rt.flags|=67108866,Q):ut):(rt.flags|=67108866,Q)):(rt.flags|=1048576,Q)}function y(rt){return t&&rt.alternate===null&&(rt.flags|=67108866),rt}function U(rt,Q,ut,bt){return Q===null||Q.tag!==6?(Q=_f(ut,rt.mode,bt),Q.return=rt,Q):(Q=c(Q,ut),Q.return=rt,Q)}function j(rt,Q,ut,bt){var he=ut.type;return he===O?Mt(rt,Q,ut.props.children,bt,ut.key):Q!==null&&(Q.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===at&&fs(he)===Q.type)?(Q=c(Q,ut.props),Qo(Q,ut),Q.return=rt,Q):(Q=cu(ut.type,ut.key,ut.props,null,rt.mode,bt),Qo(Q,ut),Q.return=rt,Q)}function ct(rt,Q,ut,bt){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ut.containerInfo||Q.stateNode.implementation!==ut.implementation?(Q=xf(ut,rt.mode,bt),Q.return=rt,Q):(Q=c(Q,ut.children||[]),Q.return=rt,Q)}function Mt(rt,Q,ut,bt,he){return Q===null||Q.tag!==7?(Q=ss(ut,rt.mode,bt,he),Q.return=rt,Q):(Q=c(Q,ut),Q.return=rt,Q)}function Ct(rt,Q,ut){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=_f(""+Q,rt.mode,ut),Q.return=rt,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case R:return ut=cu(Q.type,Q.key,Q.props,null,rt.mode,ut),Qo(ut,Q),ut.return=rt,ut;case D:return Q=xf(Q,rt.mode,ut),Q.return=rt,Q;case at:return Q=fs(Q),Ct(rt,Q,ut)}if(pt(Q)||tt(Q))return Q=ss(Q,rt.mode,ut,null),Q.return=rt,Q;if(typeof Q.then=="function")return Ct(rt,vu(Q),ut);if(Q.$$typeof===V)return Ct(rt,du(rt,Q),ut);_u(rt,Q)}return null}function mt(rt,Q,ut,bt){var he=Q!==null?Q.key:null;if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return he!==null?null:U(rt,Q,""+ut,bt);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case R:return ut.key===he?j(rt,Q,ut,bt):null;case D:return ut.key===he?ct(rt,Q,ut,bt):null;case at:return ut=fs(ut),mt(rt,Q,ut,bt)}if(pt(ut)||tt(ut))return he!==null?null:Mt(rt,Q,ut,bt,null);if(typeof ut.then=="function")return mt(rt,Q,vu(ut),bt);if(ut.$$typeof===V)return mt(rt,Q,du(rt,ut),bt);_u(rt,ut)}return null}function _t(rt,Q,ut,bt,he){if(typeof bt=="string"&&bt!==""||typeof bt=="number"||typeof bt=="bigint")return rt=rt.get(ut)||null,U(Q,rt,""+bt,he);if(typeof bt=="object"&&bt!==null){switch(bt.$$typeof){case R:return rt=rt.get(bt.key===null?ut:bt.key)||null,j(Q,rt,bt,he);case D:return rt=rt.get(bt.key===null?ut:bt.key)||null,ct(Q,rt,bt,he);case at:return bt=fs(bt),_t(rt,Q,ut,bt,he)}if(pt(bt)||tt(bt))return rt=rt.get(ut)||null,Mt(Q,rt,bt,he,null);if(typeof bt.then=="function")return _t(rt,Q,ut,vu(bt),he);if(bt.$$typeof===V)return _t(rt,Q,ut,du(Q,bt),he);_u(Q,bt)}return null}function ae(rt,Q,ut,bt){for(var he=null,je=null,oe=Q,Re=Q=0,Pe=null;oe!==null&&Re<ut.length;Re++){oe.index>Re?(Pe=oe,oe=null):Pe=oe.sibling;var Ze=mt(rt,oe,ut[Re],bt);if(Ze===null){oe===null&&(oe=Pe);break}t&&oe&&Ze.alternate===null&&n(rt,oe),Q=h(Ze,Q,Re),je===null?he=Ze:je.sibling=Ze,je=Ze,oe=Pe}if(Re===ut.length)return a(rt,oe),ze&&za(rt,Re),he;if(oe===null){for(;Re<ut.length;Re++)oe=Ct(rt,ut[Re],bt),oe!==null&&(Q=h(oe,Q,Re),je===null?he=oe:je.sibling=oe,je=oe);return ze&&za(rt,Re),he}for(oe=s(oe);Re<ut.length;Re++)Pe=_t(oe,rt,Re,ut[Re],bt),Pe!==null&&(t&&Pe.alternate!==null&&oe.delete(Pe.key===null?Re:Pe.key),Q=h(Pe,Q,Re),je===null?he=Pe:je.sibling=Pe,je=Pe);return t&&oe.forEach(function(Ir){return n(rt,Ir)}),ze&&za(rt,Re),he}function ge(rt,Q,ut,bt){if(ut==null)throw Error(r(151));for(var he=null,je=null,oe=Q,Re=Q=0,Pe=null,Ze=ut.next();oe!==null&&!Ze.done;Re++,Ze=ut.next()){oe.index>Re?(Pe=oe,oe=null):Pe=oe.sibling;var Ir=mt(rt,oe,Ze.value,bt);if(Ir===null){oe===null&&(oe=Pe);break}t&&oe&&Ir.alternate===null&&n(rt,oe),Q=h(Ir,Q,Re),je===null?he=Ir:je.sibling=Ir,je=Ir,oe=Pe}if(Ze.done)return a(rt,oe),ze&&za(rt,Re),he;if(oe===null){for(;!Ze.done;Re++,Ze=ut.next())Ze=Ct(rt,Ze.value,bt),Ze!==null&&(Q=h(Ze,Q,Re),je===null?he=Ze:je.sibling=Ze,je=Ze);return ze&&za(rt,Re),he}for(oe=s(oe);!Ze.done;Re++,Ze=ut.next())Ze=_t(oe,rt,Re,Ze.value,bt),Ze!==null&&(t&&Ze.alternate!==null&&oe.delete(Ze.key===null?Re:Ze.key),Q=h(Ze,Q,Re),je===null?he=Ze:je.sibling=Ze,je=Ze);return t&&oe.forEach(function(Ey){return n(rt,Ey)}),ze&&za(rt,Re),he}function ln(rt,Q,ut,bt){if(typeof ut=="object"&&ut!==null&&ut.type===O&&ut.key===null&&(ut=ut.props.children),typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case R:t:{for(var he=ut.key;Q!==null;){if(Q.key===he){if(he=ut.type,he===O){if(Q.tag===7){a(rt,Q.sibling),bt=c(Q,ut.props.children),bt.return=rt,rt=bt;break t}}else if(Q.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===at&&fs(he)===Q.type){a(rt,Q.sibling),bt=c(Q,ut.props),Qo(bt,ut),bt.return=rt,rt=bt;break t}a(rt,Q);break}else n(rt,Q);Q=Q.sibling}ut.type===O?(bt=ss(ut.props.children,rt.mode,bt,ut.key),bt.return=rt,rt=bt):(bt=cu(ut.type,ut.key,ut.props,null,rt.mode,bt),Qo(bt,ut),bt.return=rt,rt=bt)}return y(rt);case D:t:{for(he=ut.key;Q!==null;){if(Q.key===he)if(Q.tag===4&&Q.stateNode.containerInfo===ut.containerInfo&&Q.stateNode.implementation===ut.implementation){a(rt,Q.sibling),bt=c(Q,ut.children||[]),bt.return=rt,rt=bt;break t}else{a(rt,Q);break}else n(rt,Q);Q=Q.sibling}bt=xf(ut,rt.mode,bt),bt.return=rt,rt=bt}return y(rt);case at:return ut=fs(ut),ln(rt,Q,ut,bt)}if(pt(ut))return ae(rt,Q,ut,bt);if(tt(ut)){if(he=tt(ut),typeof he!="function")throw Error(r(150));return ut=he.call(ut),ge(rt,Q,ut,bt)}if(typeof ut.then=="function")return ln(rt,Q,vu(ut),bt);if(ut.$$typeof===V)return ln(rt,Q,du(rt,ut),bt);_u(rt,ut)}return typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint"?(ut=""+ut,Q!==null&&Q.tag===6?(a(rt,Q.sibling),bt=c(Q,ut),bt.return=rt,rt=bt):(a(rt,Q),bt=_f(ut,rt.mode,bt),bt.return=rt,rt=bt),y(rt)):a(rt,Q)}return function(rt,Q,ut,bt){try{Ko=0;var he=ln(rt,Q,ut,bt);return Zs=null,he}catch(oe){if(oe===js||oe===mu)throw oe;var je=Oi(29,oe,null,rt.mode);return je.lanes=bt,je.return=rt,je}}}var ds=Tm(!0),bm=Tm(!1),Mr=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Er(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Tr(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Je&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=uu(t),lm(t,null,a),n}return lu(t,s,n,a),uu(t)}function Jo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Kr(t,a)}}function Nf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Of=!1;function $o(){if(Of){var t=Ys;if(t!==null)throw t}}function tl(t,n,a,s){Of=!1;var c=t.updateQueue;Mr=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,U=c.shared.pending;if(U!==null){c.shared.pending=null;var j=U,ct=j.next;j.next=null,y===null?h=ct:y.next=ct,y=j;var Mt=t.alternate;Mt!==null&&(Mt=Mt.updateQueue,U=Mt.lastBaseUpdate,U!==y&&(U===null?Mt.firstBaseUpdate=ct:U.next=ct,Mt.lastBaseUpdate=j))}if(h!==null){var Ct=c.baseState;y=0,Mt=ct=j=null,U=h;do{var mt=U.lane&-536870913,_t=mt!==U.lane;if(_t?(Oe&mt)===mt:(s&mt)===mt){mt!==0&&mt===qs&&(Of=!0),Mt!==null&&(Mt=Mt.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var ae=t,ge=U;mt=n;var ln=a;switch(ge.tag){case 1:if(ae=ge.payload,typeof ae=="function"){Ct=ae.call(ln,Ct,mt);break t}Ct=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ge.payload,mt=typeof ae=="function"?ae.call(ln,Ct,mt):ae,mt==null)break t;Ct=x({},Ct,mt);break t;case 2:Mr=!0}}mt=U.callback,mt!==null&&(t.flags|=64,_t&&(t.flags|=8192),_t=c.callbacks,_t===null?c.callbacks=[mt]:_t.push(mt))}else _t={lane:mt,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Mt===null?(ct=Mt=_t,j=Ct):Mt=Mt.next=_t,y|=mt;if(U=U.next,U===null){if(U=c.shared.pending,U===null)break;_t=U,U=_t.next,_t.next=null,c.lastBaseUpdate=_t,c.shared.pending=null}}while(!0);Mt===null&&(j=Ct),c.baseState=j,c.firstBaseUpdate=ct,c.lastBaseUpdate=Mt,h===null&&(c.shared.lanes=0),wr|=y,t.lanes=y,t.memoizedState=Ct}}function Am(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Rm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Am(a[t],n)}var Ks=H(null),xu=H(0);function Cm(t,n){t=ja,Tt(xu,t),Tt(Ks,n),ja=t|n.baseLanes}function Pf(){Tt(xu,ja),Tt(Ks,Ks.current)}function Ff(){ja=xu.current,ot(Ks),ot(xu)}var Pi=H(null),ea=null;function br(t){var n=t.alternate;Tt(Dn,Dn.current&1),Tt(Pi,t),ea===null&&(n===null||Ks.current!==null||n.memoizedState!==null)&&(ea=t)}function zf(t){Tt(Dn,Dn.current),Tt(Pi,t),ea===null&&(ea=t)}function wm(t){t.tag===22?(Tt(Dn,Dn.current),Tt(Pi,t),ea===null&&(ea=t)):Ar()}function Ar(){Tt(Dn,Dn.current),Tt(Pi,Pi.current)}function Fi(t){ot(Pi),ea===t&&(ea=null),ot(Dn)}var Dn=H(0);function yu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xh(a)||kh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ha=0,Ae=null,sn=null,In=null,Su=!1,Qs=!1,ps=!1,Mu=0,el=0,Js=null,dx=0;function bn(){throw Error(r(321))}function Bf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Ni(t[a],n[a]))return!1;return!0}function If(t,n,a,s,c,h){return Ha=h,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?hg:th,ps=!1,h=a(s,c),ps=!1,Qs&&(h=Um(n,a,s,c)),Dm(t),h}function Dm(t){N.H=al;var n=sn!==null&&sn.next!==null;if(Ha=0,In=sn=Ae=null,Su=!1,el=0,Js=null,n)throw Error(r(300));t===null||Hn||(t=t.dependencies,t!==null&&hu(t)&&(Hn=!0))}function Um(t,n,a,s){Ae=t;var c=0;do{if(Qs&&(Js=null),el=0,Qs=!1,25<=c)throw Error(r(301));if(c+=1,In=sn=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}N.H=dg,h=n(a,s)}while(Qs);return h}function px(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?nl(n):n,t=t.useState()[0],(sn!==null?sn.memoizedState:null)!==t&&(Ae.flags|=1024),n}function Hf(){var t=Mu!==0;return Mu=0,t}function Gf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vf(t){if(Su){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Su=!1}Ha=0,In=sn=Ae=null,Qs=!1,el=Mu=0,Js=null}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?Ae.memoizedState=In=t:In=In.next=t,In}function Un(){if(sn===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=sn.next;var n=In===null?Ae.memoizedState:In.next;if(n!==null)In=n,sn=t;else{if(t===null)throw Ae.alternate===null?Error(r(467)):Error(r(310));sn=t,t={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},In===null?Ae.memoizedState=In=t:In=In.next=t}return In}function Eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(t){var n=el;return el+=1,Js===null&&(Js=[]),t=Sm(Js,t,n),n=Ae,(In===null?n.memoizedState:In.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?hg:th),t}function Tu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nl(t);if(t.$$typeof===V)return ei(t)}throw Error(r(438,String(t)))}function Xf(t){var n=null,a=Ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Ae.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Eu(),Ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=b;return n.index++,a}function Ga(t,n){return typeof n=="function"?n(t):n}function bu(t){var n=Un();return kf(n,sn,t)}function kf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,h=s.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}n.baseQueue=c=h,s.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var U=y=null,j=null,ct=n,Mt=!1;do{var Ct=ct.lane&-536870913;if(Ct!==ct.lane?(Oe&Ct)===Ct:(Ha&Ct)===Ct){var mt=ct.revertLane;if(mt===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null}),Ct===qs&&(Mt=!0);else if((Ha&mt)===mt){ct=ct.next,mt===qs&&(Mt=!0);continue}else Ct={lane:0,revertLane:ct.revertLane,gesture:null,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null},j===null?(U=j=Ct,y=h):j=j.next=Ct,Ae.lanes|=mt,wr|=mt;Ct=ct.action,ps&&a(h,Ct),h=ct.hasEagerState?ct.eagerState:a(h,Ct)}else mt={lane:Ct,revertLane:ct.revertLane,gesture:ct.gesture,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null},j===null?(U=j=mt,y=h):j=j.next=mt,Ae.lanes|=Ct,wr|=Ct;ct=ct.next}while(ct!==null&&ct!==n);if(j===null?y=h:j.next=U,!Ni(h,t.memoizedState)&&(Hn=!0,Mt&&(a=Ys,a!==null)))throw a;t.memoizedState=h,t.baseState=y,t.baseQueue=j,s.lastRenderedState=h}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Wf(t){var n=Un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do h=t(h,y.action),y=y.next;while(y!==c);Ni(h,n.memoizedState)||(Hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function Lm(t,n,a){var s=Ae,c=Un(),h=ze;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Ni((sn||c).memoizedState,a);if(y&&(c.memoizedState=a,Hn=!0),c=c.queue,jf(Pm.bind(null,s,c,t),[t]),c.getSnapshot!==n||y||In!==null&&In.memoizedState.tag&1){if(s.flags|=2048,$s(9,{destroy:void 0},Om.bind(null,s,c,a,n),null),hn===null)throw Error(r(349));h||(Ha&127)!==0||Nm(s,n,a)}return a}function Nm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ae.updateQueue,n===null?(n=Eu(),Ae.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Om(t,n,a,s){n.value=a,n.getSnapshot=s,Fm(n)&&zm(t)}function Pm(t,n,a){return a(function(){Fm(n)&&zm(t)})}function Fm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Ni(t,a)}catch{return!0}}function zm(t){var n=rs(t,2);n!==null&&bi(n,t,2)}function qf(t){var n=hi();if(typeof t=="function"){var a=t;if(t=a(),ps){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},n}function Bm(t,n,a,s){return t.baseState=a,kf(t,sn,typeof s=="function"?s:Ga)}function mx(t,n,a,s,c){if(Cu(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};N.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,Im(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Im(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var h=N.T,y={};N.T=y;try{var U=a(c,s),j=N.S;j!==null&&j(y,U),Hm(t,n,U)}catch(ct){Yf(t,n,ct)}finally{h!==null&&y.types!==null&&(h.types=y.types),N.T=h}}else try{h=a(c,s),Hm(t,n,h)}catch(ct){Yf(t,n,ct)}}function Hm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Gm(t,n,s)},function(s){return Yf(t,n,s)}):Gm(t,n,a)}function Gm(t,n,a){n.status="fulfilled",n.value=a,Vm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function Yf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Vm(n),n=n.next;while(n!==s)}t.action=null}function Vm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Xm(t,n){return n}function km(t,n){if(ze){var a=hn.formState;if(a!==null){t:{var s=Ae;if(ze){if(pn){e:{for(var c=pn,h=ta;c.nodeType!==8;){if(!h){c=null;break e}if(c=na(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){pn=na(c.nextSibling),s=c.data==="F!";break t}}yr(s)}s=!1}s&&(n=a[0])}}return a=hi(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:n},a.queue=s,a=ug.bind(null,Ae,s),s.dispatch=a,s=qf(!1),h=$f.bind(null,Ae,!1,s.queue),s=hi(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=mx.bind(null,Ae,c,h,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Wm(t){var n=Un();return qm(n,sn,t)}function qm(t,n,a){if(n=kf(t,n,Xm)[0],t=bu(Ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=nl(n)}catch(y){throw y===js?mu:y}else s=n;n=Un();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(Ae.flags|=2048,$s(9,{destroy:void 0},gx.bind(null,c,a),null)),[s,h,t]}function gx(t,n){t.action=n}function Ym(t){var n=Un(),a=sn;if(a!==null)return qm(n,a,t);Un(),n=n.memoizedState,a=Un();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function $s(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=Ae.updateQueue,n===null&&(n=Eu(),Ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function jm(){return Un().memoizedState}function Au(t,n,a,s){var c=hi();Ae.flags|=t,c.memoizedState=$s(1|n,{destroy:void 0},a,s===void 0?null:s)}function Ru(t,n,a,s){var c=Un();s=s===void 0?null:s;var h=c.memoizedState.inst;sn!==null&&s!==null&&Bf(s,sn.memoizedState.deps)?c.memoizedState=$s(n,h,a,s):(Ae.flags|=t,c.memoizedState=$s(1|n,h,a,s))}function Zm(t,n){Au(8390656,8,t,n)}function jf(t,n){Ru(2048,8,t,n)}function vx(t){Ae.flags|=4;var n=Ae.updateQueue;if(n===null)n=Eu(),Ae.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Km(t){var n=Un().memoizedState;return vx({ref:n,nextImpl:t}),function(){if((Je&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Qm(t,n){return Ru(4,2,t,n)}function Jm(t,n){return Ru(4,4,t,n)}function $m(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function tg(t,n,a){a=a!=null?a.concat([t]):null,Ru(4,4,$m.bind(null,n,t),a)}function Zf(){}function eg(t,n){var a=Un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Bf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function ng(t,n){var a=Un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Bf(n,s[1]))return s[0];if(s=t(),ps){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[s,n],s}function Kf(t,n,a){return a===void 0||(Ha&1073741824)!==0&&(Oe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=i0(),Ae.lanes|=t,wr|=t,a)}function ig(t,n,a,s){return Ni(a,n)?a:Ks.current!==null?(t=Kf(t,a,s),Ni(t,n)||(Hn=!0),t):(Ha&42)===0||(Ha&1073741824)!==0&&(Oe&261930)===0?(Hn=!0,t.memoizedState=a):(t=i0(),Ae.lanes|=t,wr|=t,n)}function ag(t,n,a,s,c){var h=I.p;I.p=h!==0&&8>h?h:8;var y=N.T,U={};N.T=U,$f(t,!1,n,a);try{var j=c(),ct=N.S;if(ct!==null&&ct(U,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Mt=hx(j,s);il(t,n,Mt,Ii(t))}else il(t,n,s,Ii(t))}catch(Ct){il(t,n,{then:function(){},status:"rejected",reason:Ct},Ii())}finally{I.p=h,y!==null&&U.types!==null&&(y.types=U.types),N.T=y}}function _x(){}function Qf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=rg(t).queue;ag(t,c,n,nt,a===null?_x:function(){return sg(t),a(s)})}function rg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function sg(t){var n=rg(t);n.next===null&&(n=t.alternate.memoizedState),il(t,n.next.queue,{},Ii())}function Jf(){return ei(yl)}function og(){return Un().memoizedState}function lg(){return Un().memoizedState}function xx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ii();t=Er(a);var s=Tr(n,t,a);s!==null&&(bi(s,n,a),Jo(s,n,a)),n={cache:Rf()},t.payload=n;return}n=n.return}}function yx(t,n,a){var s=Ii();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(t)?cg(n,a):(a=gf(t,n,a,s),a!==null&&(bi(a,t,s),fg(a,n,s)))}function ug(t,n,a){var s=Ii();il(t,n,a,s)}function il(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(t))cg(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,U=h(y,a);if(c.hasEagerState=!0,c.eagerState=U,Ni(U,y))return lu(t,n,c,0),hn===null&&ou(),!1}catch{}if(a=gf(t,n,c,s),a!==null)return bi(a,t,s),fg(a,n,s),!0}return!1}function $f(t,n,a,s){if(s={lane:2,revertLane:Uh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Cu(t)){if(n)throw Error(r(479))}else n=gf(t,a,s,2),n!==null&&bi(n,t,2)}function Cu(t){var n=t.alternate;return t===Ae||n!==null&&n===Ae}function cg(t,n){Qs=Su=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function fg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Kr(t,a)}}var al={readContext:ei,use:Tu,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useLayoutEffect:bn,useInsertionEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useSyncExternalStore:bn,useId:bn,useHostTransitionStatus:bn,useFormState:bn,useActionState:bn,useOptimistic:bn,useMemoCache:bn,useCacheRefresh:bn};al.useEffectEvent=bn;var hg={readContext:ei,use:Tu,useCallback:function(t,n){return hi().memoizedState=[t,n===void 0?null:n],t},useContext:ei,useEffect:Zm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Au(4194308,4,$m.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Au(4194308,4,t,n)},useInsertionEffect:function(t,n){Au(4,2,t,n)},useMemo:function(t,n){var a=hi();n=n===void 0?null:n;var s=t();if(ps){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=hi();if(a!==void 0){var c=a(n);if(ps){Zt(!0);try{a(n)}finally{Zt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=yx.bind(null,Ae,t),[s.memoizedState,t]},useRef:function(t){var n=hi();return t={current:t},n.memoizedState=t},useState:function(t){t=qf(t);var n=t.queue,a=ug.bind(null,Ae,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zf,useDeferredValue:function(t,n){var a=hi();return Kf(a,t,n)},useTransition:function(){var t=qf(!1);return t=ag.bind(null,Ae,t.queue,!0,!1),hi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Ae,c=hi();if(ze){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),hn===null)throw Error(r(349));(Oe&127)!==0||Nm(s,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,Zm(Pm.bind(null,s,h,t),[t]),s.flags|=2048,$s(9,{destroy:void 0},Om.bind(null,s,h,a,n),null),a},useId:function(){var t=hi(),n=hn.identifierPrefix;if(ze){var a=Ma,s=Sa;a=(s&~(1<<32-Yt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Mu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Jf,useFormState:km,useActionState:km,useOptimistic:function(t){var n=hi();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$f.bind(null,Ae,!0,a),a.dispatch=n,[t,n]},useMemoCache:Xf,useCacheRefresh:function(){return hi().memoizedState=xx.bind(null,Ae)},useEffectEvent:function(t){var n=hi(),a={impl:t};return n.memoizedState=a,function(){if((Je&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},th={readContext:ei,use:Tu,useCallback:eg,useContext:ei,useEffect:jf,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ng,useReducer:bu,useRef:jm,useState:function(){return bu(Ga)},useDebugValue:Zf,useDeferredValue:function(t,n){var a=Un();return ig(a,sn.memoizedState,t,n)},useTransition:function(){var t=bu(Ga)[0],n=Un().memoizedState;return[typeof t=="boolean"?t:nl(t),n]},useSyncExternalStore:Lm,useId:og,useHostTransitionStatus:Jf,useFormState:Wm,useActionState:Wm,useOptimistic:function(t,n){var a=Un();return Bm(a,sn,t,n)},useMemoCache:Xf,useCacheRefresh:lg};th.useEffectEvent=Km;var dg={readContext:ei,use:Tu,useCallback:eg,useContext:ei,useEffect:jf,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ng,useReducer:Wf,useRef:jm,useState:function(){return Wf(Ga)},useDebugValue:Zf,useDeferredValue:function(t,n){var a=Un();return sn===null?Kf(a,t,n):ig(a,sn.memoizedState,t,n)},useTransition:function(){var t=Wf(Ga)[0],n=Un().memoizedState;return[typeof t=="boolean"?t:nl(t),n]},useSyncExternalStore:Lm,useId:og,useHostTransitionStatus:Jf,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,n){var a=Un();return sn!==null?Bm(a,sn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xf,useCacheRefresh:lg};dg.useEffectEvent=Km;function eh(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Ii(),c=Er(s);c.payload=n,a!=null&&(c.callback=a),n=Tr(t,c,s),n!==null&&(bi(n,t,s),Jo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Ii(),c=Er(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Tr(t,c,s),n!==null&&(bi(n,t,s),Jo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ii(),s=Er(a);s.tag=2,n!=null&&(s.callback=n),n=Tr(t,s,a),n!==null&&(bi(n,t,a),Jo(n,t,a))}};function pg(t,n,a,s,c,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,y):n.prototype&&n.prototype.isPureReactComponent?!ko(a,s)||!ko(c,h):!0}function mg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&nh.enqueueReplaceState(n,n.state,null)}function ms(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function gg(t){su(t)}function vg(t){console.error(t)}function _g(t){su(t)}function wu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function xg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ih(t,n,a){return a=Er(a),a.tag=3,a.payload={element:null},a.callback=function(){wu(t,n)},a}function yg(t){return t=Er(t),t.tag=3,t}function Sg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=s.value;t.payload=function(){return c(h)},t.callback=function(){xg(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){xg(n,a,s),typeof c!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var U=s.stack;this.componentDidCatch(s.value,{componentStack:U!==null?U:""})})}function Sx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=Pi.current,a!==null){switch(a.tag){case 31:case 13:return ea===null?Gu():a.alternate===null&&An===0&&(An=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ch(t,s,c)),!1;case 22:return a.flags|=65536,s===gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ch(t,s,c)),!1}throw Error(r(435,a.tag))}return Ch(t,s,c),Gu(),!1}if(ze)return n=Pi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Mf&&(t=Error(r(422),{cause:s}),Yo(Qi(t,a)))):(s!==Mf&&(n=Error(r(423),{cause:s}),Yo(Qi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Qi(s,a),c=ih(t.stateNode,s,c),Nf(t,c),An!==4&&(An=2)),!1;var h=Error(r(520),{cause:s});if(h=Qi(h,a),hl===null?hl=[h]:hl.push(h),An!==4&&(An=2),n===null)return!0;s=Qi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ih(a.stateNode,s,t),Nf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dr===null||!Dr.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=yg(c),Sg(c,t,a,s),Nf(a,c),!1}a=a.return}while(a!==null);return!1}var ah=Error(r(461)),Hn=!1;function ni(t,n,a,s){n.child=t===null?bm(n,null,a,s):ds(n,t.child,a,s)}function Mg(t,n,a,s,c){a=a.render;var h=n.ref;if("ref"in s){var y={};for(var U in s)U!=="ref"&&(y[U]=s[U])}else y=s;return us(n),s=If(t,n,a,y,h,c),U=Hf(),t!==null&&!Hn?(Gf(t,n,c),Va(t,n,c)):(ze&&U&&yf(n),n.flags|=1,ni(t,n,s,c),n.child)}function Eg(t,n,a,s,c){if(t===null){var h=a.type;return typeof h=="function"&&!vf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Tg(t,n,h,s,c)):(t=cu(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!hh(t,c)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(y,s)&&t.ref===n.ref)return Va(t,n,c)}return n.flags|=1,t=Fa(h,s),t.ref=n.ref,t.return=n,n.child=t}function Tg(t,n,a,s,c){if(t!==null){var h=t.memoizedProps;if(ko(h,s)&&t.ref===n.ref)if(Hn=!1,n.pendingProps=s=h,hh(t,c))(t.flags&131072)!==0&&(Hn=!0);else return n.lanes=t.lanes,Va(t,n,c)}return rh(t,n,a,s,c)}function bg(t,n,a,s){var c=s.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~h}else s=0,n.child=null;return Ag(t,n,h,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pu(n,h!==null?h.cachePool:null),h!==null?Cm(n,h):Pf(),wm(n);else return s=n.lanes=536870912,Ag(t,n,h!==null?h.baseLanes|a:a,a,s)}else h!==null?(pu(n,h.cachePool),Cm(n,h),Ar(),n.memoizedState=null):(t!==null&&pu(n,null),Pf(),Ar());return ni(t,n,c,a),n.child}function rl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ag(t,n,a,s,c){var h=wf();return h=h===null?null:{parent:Bn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&pu(n,null),Pf(),wm(n),t!==null&&Ws(t,n,s,!0),n.childLanes=c,null}function Du(t,n){return n=Lu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Rg(t,n,a){return ds(n,t.child,null,a),t=Du(n,n.pendingProps),t.flags|=2,Fi(n),n.memoizedState=null,t}function Mx(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ze){if(s.mode==="hidden")return t=Du(n,s),n.lanes=536870912,rl(null,t);if(zf(n),(t=pn)?(t=I0(t,ta),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_r!==null?{id:Sa,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,ti=n,pn=null)):t=null,t===null)throw yr(n);return n.lanes=536870912,null}return Du(n,s)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(zf(n),c)if(n.flags&256)n.flags&=-257,n=Rg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Hn||Ws(t,n,a,!1),c=(a&t.childLanes)!==0,Hn||c){if(s=hn,s!==null&&(y=ri(s,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,rs(t,y),bi(s,t,y),ah;Gu(),n=Rg(t,n,a)}else t=h.treeContext,pn=na(y.nextSibling),ti=n,ze=!0,xr=null,ta=!1,t!==null&&dm(n,t),n=Du(n,s),n.flags|=4096;return n}return t=Fa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Uu(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rh(t,n,a,s,c){return us(n),a=If(t,n,a,s,void 0,c),s=Hf(),t!==null&&!Hn?(Gf(t,n,c),Va(t,n,c)):(ze&&s&&yf(n),n.flags|=1,ni(t,n,a,c),n.child)}function Cg(t,n,a,s,c,h){return us(n),n.updateQueue=null,a=Um(n,s,a,c),Dm(t),s=Hf(),t!==null&&!Hn?(Gf(t,n,h),Va(t,n,h)):(ze&&s&&yf(n),n.flags|=1,ni(t,n,a,h),n.child)}function wg(t,n,a,s,c){if(us(n),n.stateNode===null){var h=Gs,y=a.contextType;typeof y=="object"&&y!==null&&(h=ei(y)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=nh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},Uf(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?ei(y):Gs,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(eh(n,a,y,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&nh.enqueueReplaceState(h,h.state,null),tl(n,s,h,c),$o(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){h=n.stateNode;var U=n.memoizedProps,j=ms(a,U);h.props=j;var ct=h.context,Mt=a.contextType;y=Gs,typeof Mt=="object"&&Mt!==null&&(y=ei(Mt));var Ct=a.getDerivedStateFromProps;Mt=typeof Ct=="function"||typeof h.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,Mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(U||ct!==y)&&mg(n,h,s,y),Mr=!1;var mt=n.memoizedState;h.state=mt,tl(n,s,h,c),$o(),ct=n.memoizedState,U||mt!==ct||Mr?(typeof Ct=="function"&&(eh(n,a,Ct,s),ct=n.memoizedState),(j=Mr||pg(n,a,j,s,mt,ct,y))?(Mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ct),h.props=s,h.state=ct,h.context=y,s=j):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,Lf(t,n),y=n.memoizedProps,Mt=ms(a,y),h.props=Mt,Ct=n.pendingProps,mt=h.context,ct=a.contextType,j=Gs,typeof ct=="object"&&ct!==null&&(j=ei(ct)),U=a.getDerivedStateFromProps,(ct=typeof U=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==Ct||mt!==j)&&mg(n,h,s,j),Mr=!1,mt=n.memoizedState,h.state=mt,tl(n,s,h,c),$o();var _t=n.memoizedState;y!==Ct||mt!==_t||Mr||t!==null&&t.dependencies!==null&&hu(t.dependencies)?(typeof U=="function"&&(eh(n,a,U,s),_t=n.memoizedState),(Mt=Mr||pg(n,a,Mt,s,mt,_t,j)||t!==null&&t.dependencies!==null&&hu(t.dependencies))?(ct||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,_t,j),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,_t,j)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&mt===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&mt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=_t),h.props=s,h.state=_t,h.context=j,s=Mt):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&mt===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&mt===t.memoizedState||(n.flags|=1024),s=!1)}return h=s,Uu(t,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&s?(n.child=ds(n,t.child,null,c),n.child=ds(n,null,a,c)):ni(t,n,a,c),n.memoizedState=h.state,t=n.child):t=Va(t,n,c),t}function Dg(t,n,a,s){return os(),n.flags|=256,ni(t,n,a,s),n.child}var sh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oh(t){return{baseLanes:t,cachePool:xm()}}function lh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Bi),t}function Ug(t,n,a){var s=n.pendingProps,c=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(ze){if(c?br(n):Ar(),(t=pn)?(t=I0(t,ta),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_r!==null?{id:Sa,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,ti=n,pn=null)):t=null,t===null)throw yr(n);return kh(t)?n.lanes=32:n.lanes=536870912,null}var U=s.children;return s=s.fallback,c?(Ar(),c=n.mode,U=Lu({mode:"hidden",children:U},c),s=ss(s,c,a,null),U.return=n,s.return=n,U.sibling=s,n.child=U,s=n.child,s.memoizedState=oh(a),s.childLanes=lh(t,y,a),n.memoizedState=sh,rl(null,s)):(br(n),uh(n,U))}var j=t.memoizedState;if(j!==null&&(U=j.dehydrated,U!==null)){if(h)n.flags&256?(br(n),n.flags&=-257,n=ch(t,n,a)):n.memoizedState!==null?(Ar(),n.child=t.child,n.flags|=128,n=null):(Ar(),U=s.fallback,c=n.mode,s=Lu({mode:"visible",children:s.children},c),U=ss(U,c,a,null),U.flags|=2,s.return=n,U.return=n,s.sibling=U,n.child=s,ds(n,t.child,null,a),s=n.child,s.memoizedState=oh(a),s.childLanes=lh(t,y,a),n.memoizedState=sh,n=rl(null,s));else if(br(n),kh(U)){if(y=U.nextSibling&&U.nextSibling.dataset,y)var ct=y.dgst;y=ct,s=Error(r(419)),s.stack="",s.digest=y,Yo({value:s,source:null,stack:null}),n=ch(t,n,a)}else if(Hn||Ws(t,n,a,!1),y=(a&t.childLanes)!==0,Hn||y){if(y=hn,y!==null&&(s=ri(y,a),s!==0&&s!==j.retryLane))throw j.retryLane=s,rs(t,s),bi(y,t,s),ah;Xh(U)||Gu(),n=ch(t,n,a)}else Xh(U)?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,pn=na(U.nextSibling),ti=n,ze=!0,xr=null,ta=!1,t!==null&&dm(n,t),n=uh(n,s.children),n.flags|=4096);return n}return c?(Ar(),U=s.fallback,c=n.mode,j=t.child,ct=j.sibling,s=Fa(j,{mode:"hidden",children:s.children}),s.subtreeFlags=j.subtreeFlags&65011712,ct!==null?U=Fa(ct,U):(U=ss(U,c,a,null),U.flags|=2),U.return=n,s.return=n,s.sibling=U,n.child=s,rl(null,s),s=n.child,U=t.child.memoizedState,U===null?U=oh(a):(c=U.cachePool,c!==null?(j=Bn._currentValue,c=c.parent!==j?{parent:j,pool:j}:c):c=xm(),U={baseLanes:U.baseLanes|a,cachePool:c}),s.memoizedState=U,s.childLanes=lh(t,y,a),n.memoizedState=sh,rl(t.child,s)):(br(n),a=t.child,t=a.sibling,a=Fa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function uh(t,n){return n=Lu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Lu(t,n){return t=Oi(22,t,null,n),t.lanes=0,t}function ch(t,n,a){return ds(n,t.child,null,a),t=uh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Lg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),bf(t.return,n,a)}function fh(t,n,a,s,c,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=s,y.tail=a,y.tailMode=c,y.treeForkCount=h)}function Ng(t,n,a){var s=n.pendingProps,c=s.revealOrder,h=s.tail;s=s.children;var y=Dn.current,U=(y&2)!==0;if(U?(y=y&1|2,n.flags|=128):y&=1,Tt(Dn,y),ni(t,n,s,a),s=ze?qo:0,!U&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,a,n);else if(t.tag===19)Lg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&yu(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),fh(n,!1,c,a,h,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&yu(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}fh(n,!0,a,null,h,s);break;case"together":fh(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Va(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),wr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Fa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hu(t)))}function Ex(t,n,a){switch(n.tag){case 3:Vt(n,n.stateNode.containerInfo),Sr(n,Bn,t.memoizedState.cache),os();break;case 27:case 5:Jt(n);break;case 4:Vt(n,n.stateNode.containerInfo);break;case 10:Sr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zf(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(br(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ug(t,n,a):(br(n),t=Va(t,n,a),t!==null?t.sibling:null);br(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ws(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Ng(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Tt(Dn,Dn.current),s)break;return null;case 22:return n.lanes=0,bg(t,n,a,n.pendingProps);case 24:Sr(n,Bn,t.memoizedState.cache)}return Va(t,n,a)}function Og(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Hn=!0;else{if(!hh(t,a)&&(n.flags&128)===0)return Hn=!1,Ex(t,n,a);Hn=(t.flags&131072)!==0}else Hn=!1,ze&&(n.flags&1048576)!==0&&hm(n,qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=fs(n.elementType),n.type=t,typeof t=="function")vf(t)?(s=ms(t,s),n.tag=1,n=wg(null,n,t,s,a)):(n.tag=0,n=rh(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===F){n.tag=11,n=Mg(null,n,t,s,a);break t}else if(c===X){n.tag=14,n=Eg(null,n,t,s,a);break t}}throw n=dt(t)||t,Error(r(306,n,""))}}return n;case 0:return rh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ms(s,n.pendingProps),wg(t,n,s,c,a);case 3:t:{if(Vt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var h=n.memoizedState;c=h.element,Lf(t,n),tl(n,s,null,a);var y=n.memoizedState;if(s=y.cache,Sr(n,Bn,s),s!==h.cache&&Af(n,[Bn],a,!0),$o(),s=y.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Dg(t,n,s,a);break t}else if(s!==c){c=Qi(Error(r(424)),n),Yo(c),n=Dg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,pn=na(t.firstChild),ti=n,ze=!0,xr=null,ta=!0,a=bm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(os(),s===c){n=Va(t,n,a);break t}ni(t,n,s,a)}n=n.child}return n;case 26:return Uu(t,n),t===null?(a=W0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,t=n.pendingProps,s=ju(ht.current).createElement(a),s[yn]=n,s[Sn]=t,ii(s,a,t),w(s),n.stateNode=s):n.memoizedState=W0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Jt(n),t===null&&ze&&(s=n.stateNode=V0(n.type,n.pendingProps,ht.current),ti=n,ta=!0,c=pn,Or(n.type)?(Wh=c,pn=na(s.firstChild)):pn=c),ni(t,n,n.pendingProps.children,a),Uu(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ze&&((c=s=pn)&&(s=$x(s,n.type,n.pendingProps,ta),s!==null?(n.stateNode=s,ti=n,pn=na(s.firstChild),ta=!1,c=!0):c=!1),c||yr(n)),Jt(n),c=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,s=h.children,Hh(c,h)?s=null:y!==null&&Hh(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=If(t,n,px,null,null,a),yl._currentValue=c),Uu(t,n),ni(t,n,s,a),n.child;case 6:return t===null&&ze&&((t=a=pn)&&(a=ty(a,n.pendingProps,ta),a!==null?(n.stateNode=a,ti=n,pn=null,t=!0):t=!1),t||yr(n)),null;case 13:return Ug(t,n,a);case 4:return Vt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ds(n,null,s,a):ni(t,n,s,a),n.child;case 11:return Mg(t,n,n.type,n.pendingProps,a);case 7:return ni(t,n,n.pendingProps,a),n.child;case 8:return ni(t,n,n.pendingProps.children,a),n.child;case 12:return ni(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Sr(n,n.type,s.value),ni(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,us(n),c=ei(c),s=s(c),n.flags|=1,ni(t,n,s,a),n.child;case 14:return Eg(t,n,n.type,n.pendingProps,a);case 15:return Tg(t,n,n.type,n.pendingProps,a);case 19:return Ng(t,n,a);case 31:return Mx(t,n,a);case 22:return bg(t,n,a,n.pendingProps);case 24:return us(n),s=ei(Bn),t===null?(c=wf(),c===null&&(c=hn,h=Rf(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:s,cache:c},Uf(n),Sr(n,Bn,c)):((t.lanes&a)!==0&&(Lf(t,n),tl(n,null,null,a),$o()),c=t.memoizedState,h=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sr(n,Bn,s)):(s=h.cache,Sr(n,Bn,s),s!==c.cache&&Af(n,[Bn],a,!0))),ni(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xa(t){t.flags|=4}function dh(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(o0())t.flags|=8192;else throw hs=gu,Df}else t.flags&=-16777217}function Pg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K0(n))if(o0())t.flags|=8192;else throw hs=gu,Df}function Nu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?qe():536870912,t.lanes|=n,io|=n)}function sl(t,n){if(!ze)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function mn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Tx(t,n,a){var s=n.pendingProps;switch(Sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(n),null;case 1:return mn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ia(Bn),te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ks(n)?Xa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ef())),mn(n),null;case 26:var c=n.type,h=n.memoizedState;return t===null?(Xa(n),h!==null?(mn(n),Pg(n,h)):(mn(n),dh(n,c,null,s,a))):h?h!==t.memoizedState?(Xa(n),mn(n),Pg(n,h)):(mn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Xa(n),mn(n),dh(n,c,t,s,a)),null;case 27:if(Te(n),a=ht.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return mn(n),null}t=Pt.current,ks(n)?pm(n):(t=V0(c,s,a),n.stateNode=t,Xa(n))}return mn(n),null;case 5:if(Te(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return mn(n),null}if(h=Pt.current,ks(n))pm(n);else{var y=ju(ht.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof s.is=="string"?y.createElement("select",{is:s.is}):y.createElement("select"),s.multiple?h.multiple=!0:s.size&&(h.size=s.size);break;default:h=typeof s.is=="string"?y.createElement(c,{is:s.is}):y.createElement(c)}}h[yn]=n,h[Sn]=s;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(ii(h,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Xa(n)}}return mn(n),dh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ht.current,ks(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=ti,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[yn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||U0(t.nodeValue,a)),t||yr(n,!0)}else t=ju(t).createTextNode(s),t[yn]=n,n.stateNode=t}return mn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=ks(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[yn]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),t=!1}else a=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Fi(n),n):(Fi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return mn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ks(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[yn]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),c=!1}else c=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}return Fi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),h=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nu(n,n.updateQueue),mn(n),null);case 4:return te(),t===null&&Ph(n.stateNode.containerInfo),mn(n),null;case 10:return Ia(n.type),mn(n),null;case 19:if(ot(Dn),s=n.memoizedState,s===null)return mn(n),null;if(c=(n.flags&128)!==0,h=s.rendering,h===null)if(c)sl(s,!1);else{if(An!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=yu(t),h!==null){for(n.flags|=128,sl(s,!1),t=h.updateQueue,n.updateQueue=t,Nu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)um(a,t),a=a.sibling;return Tt(Dn,Dn.current&1|2),ze&&za(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&A()>Bu&&(n.flags|=128,c=!0,sl(s,!1),n.lanes=4194304)}else{if(!c)if(t=yu(h),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Nu(n,t),sl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!h.alternate&&!ze)return mn(n),null}else 2*A()-s.renderingStartTime>Bu&&a!==536870912&&(n.flags|=128,c=!0,sl(s,!1),n.lanes=4194304);s.isBackwards?(h.sibling=n.child,n.child=h):(t=s.last,t!==null?t.sibling=h:n.child=h,s.last=h)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=A(),t.sibling=null,a=Dn.current,Tt(Dn,c?a&1|2:a&1),ze&&za(n,s.treeForkCount),t):(mn(n),null);case 22:case 23:return Fi(n),Ff(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(mn(n),n.subtreeFlags&6&&(n.flags|=8192)):mn(n),a=n.updateQueue,a!==null&&Nu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ot(cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ia(Bn),mn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function bx(t,n){switch(Sf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ia(Bn),te(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Te(n),null;case 31:if(n.memoizedState!==null){if(Fi(n),n.alternate===null)throw Error(r(340));os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Fi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ot(Dn),null;case 4:return te(),null;case 10:return Ia(n.type),null;case 22:case 23:return Fi(n),Ff(),t!==null&&ot(cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ia(Bn),null;case 25:return null;default:return null}}function Fg(t,n){switch(Sf(n),n.tag){case 3:Ia(Bn),te();break;case 26:case 27:case 5:Te(n);break;case 4:te();break;case 31:n.memoizedState!==null&&Fi(n);break;case 13:Fi(n);break;case 19:ot(Dn);break;case 10:Ia(n.type);break;case 22:case 23:Fi(n),Ff(),t!==null&&ot(cs);break;case 24:Ia(Bn)}}function ol(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var h=a.create,y=a.inst;s=h(),y.destroy=s}a=a.next}while(a!==c)}}catch(U){nn(n,n.return,U)}}function Rr(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&t)===t){var y=s.inst,U=y.destroy;if(U!==void 0){y.destroy=void 0,c=n;var j=a,ct=U;try{ct()}catch(Mt){nn(c,j,Mt)}}}s=s.next}while(s!==h)}}catch(Mt){nn(n,n.return,Mt)}}function zg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Rm(n,a)}catch(s){nn(t,t.return,s)}}}function Bg(t,n,a){a.props=ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){nn(t,n,s)}}function ll(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){nn(t,n,c)}}function Ea(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){nn(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){nn(t,n,c)}else a.current=null}function Ig(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){nn(t,t.return,c)}}function ph(t,n,a){try{var s=t.stateNode;Yx(s,t.type,a,n),s[Sn]=n}catch(c){nn(t,t.return,c)}}function Hg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Or(t.type)||t.tag===4}function mh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Or(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gh(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=fa));else if(s!==4&&(s===27&&Or(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(gh(t,n,a),t=t.sibling;t!==null;)gh(t,n,a),t=t.sibling}function Ou(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Or(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ou(t,n,a),t=t.sibling;t!==null;)Ou(t,n,a),t=t.sibling}function Gg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);ii(n,s,a),n[yn]=t,n[Sn]=a}catch(h){nn(t,t.return,h)}}var ka=!1,Gn=!1,vh=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,Zn=null;function Ax(t,n){if(t=t.containerInfo,Bh=ec,t=tm(t),cf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,U=-1,j=-1,ct=0,Mt=0,Ct=t,mt=null;e:for(;;){for(var _t;Ct!==a||c!==0&&Ct.nodeType!==3||(U=y+c),Ct!==h||s!==0&&Ct.nodeType!==3||(j=y+s),Ct.nodeType===3&&(y+=Ct.nodeValue.length),(_t=Ct.firstChild)!==null;)mt=Ct,Ct=_t;for(;;){if(Ct===t)break e;if(mt===a&&++ct===c&&(U=y),mt===h&&++Mt===s&&(j=y),(_t=Ct.nextSibling)!==null)break;Ct=mt,mt=Ct.parentNode}Ct=_t}a=U===-1||j===-1?null:{start:U,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ih={focusedElem:t,selectionRange:a},ec=!1,Zn=n;Zn!==null;)if(n=Zn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Zn=t;else for(;Zn!==null;){switch(n=Zn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var ae=ms(a.type,c);t=s.getSnapshotBeforeUpdate(ae,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(ge){nn(a,a.return,ge)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Vh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Zn=t;break}Zn=n.return}}function Xg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qa(t,a),s&4&&ol(5,a);break;case 1:if(qa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){nn(a,a.return,y)}else{var c=ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){nn(a,a.return,y)}}s&64&&zg(a),s&512&&ll(a,a.return);break;case 3:if(qa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rm(t,n)}catch(y){nn(a,a.return,y)}}break;case 27:n===null&&s&4&&Gg(a);case 26:case 5:qa(t,a),n===null&&s&4&&Ig(a),s&512&&ll(a,a.return);break;case 12:qa(t,a);break;case 31:qa(t,a),s&4&&qg(t,a);break;case 13:qa(t,a),s&4&&Yg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Px.bind(null,a),ey(t,a))));break;case 22:if(s=a.memoizedState!==null||ka,!s){n=n!==null&&n.memoizedState!==null||Gn,c=ka;var h=Gn;ka=s,(Gn=n)&&!h?Ya(t,a,(a.subtreeFlags&8772)!==0):qa(t,a),ka=c,Gn=h}break;case 30:break;default:qa(t,a)}}function kg(t){var n=t.alternate;n!==null&&(t.alternate=null,kg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&cr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vn=null,Si=!1;function Wa(t,n,a){for(a=a.child;a!==null;)Wg(t,n,a),a=a.sibling}function Wg(t,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ut,a)}catch{}switch(a.tag){case 26:Gn||Ea(a,n),Wa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Gn||Ea(a,n);var s=vn,c=Si;Or(a.type)&&(vn=a.stateNode,Si=!1),Wa(t,n,a),vl(a.stateNode),vn=s,Si=c;break;case 5:Gn||Ea(a,n);case 6:if(s=vn,c=Si,vn=null,Wa(t,n,a),vn=s,Si=c,vn!==null)if(Si)try{(vn.nodeType===9?vn.body:vn.nodeName==="HTML"?vn.ownerDocument.body:vn).removeChild(a.stateNode)}catch(h){nn(a,n,h)}else try{vn.removeChild(a.stateNode)}catch(h){nn(a,n,h)}break;case 18:vn!==null&&(Si?(t=vn,z0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fo(t)):z0(vn,a.stateNode));break;case 4:s=vn,c=Si,vn=a.stateNode.containerInfo,Si=!0,Wa(t,n,a),vn=s,Si=c;break;case 0:case 11:case 14:case 15:Rr(2,a,n),Gn||Rr(4,a,n),Wa(t,n,a);break;case 1:Gn||(Ea(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Bg(a,n,s)),Wa(t,n,a);break;case 21:Wa(t,n,a);break;case 22:Gn=(s=Gn)||a.memoizedState!==null,Wa(t,n,a),Gn=s;break;default:Wa(t,n,a)}}function qg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fo(t)}catch(a){nn(n,n.return,a)}}}function Yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fo(t)}catch(a){nn(n,n.return,a)}}function Rx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Vg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Vg),n;default:throw Error(r(435,t.tag))}}function Pu(t,n){var a=Rx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Fx.bind(null,t,s);s.then(c,c)}})}function Mi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],h=t,y=n,U=y;t:for(;U!==null;){switch(U.tag){case 27:if(Or(U.type)){vn=U.stateNode,Si=!1;break t}break;case 5:vn=U.stateNode,Si=!1;break t;case 3:case 4:vn=U.stateNode.containerInfo,Si=!0;break t}U=U.return}if(vn===null)throw Error(r(160));Wg(h,y,c),vn=null,Si=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jg(n,t),n=n.sibling}var pa=null;function jg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mi(n,t),Ei(t),s&4&&(Rr(3,t,t.return),ol(3,t),Rr(5,t,t.return));break;case 1:Mi(n,t),Ei(t),s&512&&(Gn||a===null||Ea(a,a.return)),s&64&&ka&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=pa;if(Mi(n,t),Ei(t),s&512&&(Gn||a===null||Ea(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":h=c.getElementsByTagName("title")[0],(!h||h[ca]||h[yn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(s),c.head.insertBefore(h,c.querySelector("head > title"))),ii(h,s,a),h[yn]=t,w(h),s=h;break t;case"link":var y=j0("link","href",c).get(s+(a.href||""));if(y){for(var U=0;U<y.length;U++)if(h=y[U],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(U,1);break e}}h=c.createElement(s),ii(h,s,a),c.head.appendChild(h);break;case"meta":if(y=j0("meta","content",c).get(s+(a.content||""))){for(U=0;U<y.length;U++)if(h=y[U],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(U,1);break e}}h=c.createElement(s),ii(h,s,a),c.head.appendChild(h);break;default:throw Error(r(468,s))}h[yn]=t,w(h),s=h}t.stateNode=s}else Z0(c,t.type,t.stateNode);else t.stateNode=Y0(c,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?Z0(c,t.type,t.stateNode):Y0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&ph(t,t.memoizedProps,a.memoizedProps)}break;case 27:Mi(n,t),Ei(t),s&512&&(Gn||a===null||Ea(a,a.return)),a!==null&&s&4&&ph(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Mi(n,t),Ei(t),s&512&&(Gn||a===null||Ea(a,a.return)),t.flags&32){c=t.stateNode;try{En(c,"")}catch(ae){nn(t,t.return,ae)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,ph(t,c,a!==null?a.memoizedProps:c)),s&1024&&(vh=!0);break;case 6:if(Mi(n,t),Ei(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ae){nn(t,t.return,ae)}}break;case 3:if(Qu=null,c=pa,pa=Zu(n.containerInfo),Mi(n,t),pa=c,Ei(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fo(n.containerInfo)}catch(ae){nn(t,t.return,ae)}vh&&(vh=!1,Zg(t));break;case 4:s=pa,pa=Zu(t.stateNode.containerInfo),Mi(n,t),Ei(t),pa=s;break;case 12:Mi(n,t),Ei(t);break;case 31:Mi(n,t),Ei(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pu(t,s)));break;case 13:Mi(n,t),Ei(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zu=A()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pu(t,s)));break;case 22:c=t.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,ct=ka,Mt=Gn;if(ka=ct||c,Gn=Mt||j,Mi(n,t),Gn=Mt,ka=ct,Ei(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||j||ka||Gn||gs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(h=j.stateNode,c)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{U=j.stateNode;var Ct=j.memoizedProps.style,mt=Ct!=null&&Ct.hasOwnProperty("display")?Ct.display:null;U.style.display=mt==null||typeof mt=="boolean"?"":(""+mt).trim()}}catch(ae){nn(j,j.return,ae)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=c?"":j.memoizedProps}catch(ae){nn(j,j.return,ae)}}}else if(n.tag===18){if(a===null){j=n;try{var _t=j.stateNode;c?B0(_t,!0):B0(j.stateNode,!1)}catch(ae){nn(j,j.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Pu(t,a))));break;case 19:Mi(n,t),Ei(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pu(t,s)));break;case 30:break;case 21:break;default:Mi(n,t),Ei(t)}}function Ei(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Hg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=mh(t);Ou(t,h,c);break;case 5:var y=a.stateNode;a.flags&32&&(En(y,""),a.flags&=-33);var U=mh(t);Ou(t,U,y);break;case 3:case 4:var j=a.stateNode.containerInfo,ct=mh(t);gh(t,ct,j);break;default:throw Error(r(161))}}catch(Mt){nn(t,t.return,Mt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Zg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Zg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xg(t,n.alternate,n),n=n.sibling}function gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Rr(4,n,n.return),gs(n);break;case 1:Ea(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bg(n,n.return,a),gs(n);break;case 27:vl(n.stateNode);case 26:case 5:Ea(n,n.return),gs(n);break;case 22:n.memoizedState===null&&gs(n);break;case 30:gs(n);break;default:gs(n)}t=t.sibling}}function Ya(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:Ya(c,h,a),ol(4,h);break;case 1:if(Ya(c,h,a),s=h,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ct){nn(s,s.return,ct)}if(s=h,c=s.updateQueue,c!==null){var U=s.stateNode;try{var j=c.shared.hiddenCallbacks;if(j!==null)for(c.shared.hiddenCallbacks=null,c=0;c<j.length;c++)Am(j[c],U)}catch(ct){nn(s,s.return,ct)}}a&&y&64&&zg(h),ll(h,h.return);break;case 27:Gg(h);case 26:case 5:Ya(c,h,a),a&&s===null&&y&4&&Ig(h),ll(h,h.return);break;case 12:Ya(c,h,a);break;case 31:Ya(c,h,a),a&&y&4&&qg(c,h);break;case 13:Ya(c,h,a),a&&y&4&&Yg(c,h);break;case 22:h.memoizedState===null&&Ya(c,h,a),ll(h,h.return);break;case 30:break;default:Ya(c,h,a)}n=n.sibling}}function _h(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&jo(a))}function xh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jo(t))}function ma(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Kg(t,n,a,s),n=n.sibling}function Kg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ma(t,n,a,s),c&2048&&ol(9,n);break;case 1:ma(t,n,a,s);break;case 3:ma(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jo(t)));break;case 12:if(c&2048){ma(t,n,a,s),t=n.stateNode;try{var h=n.memoizedProps,y=h.id,U=h.onPostCommit;typeof U=="function"&&U(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){nn(n,n.return,j)}}else ma(t,n,a,s);break;case 31:ma(t,n,a,s);break;case 13:ma(t,n,a,s);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?ma(t,n,a,s):ul(t,n):h._visibility&2?ma(t,n,a,s):(h._visibility|=2,to(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&_h(y,n);break;case 24:ma(t,n,a,s),c&2048&&xh(n.alternate,n);break;default:ma(t,n,a,s)}}function to(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,y=n,U=a,j=s,ct=y.flags;switch(y.tag){case 0:case 11:case 15:to(h,y,U,j,c),ol(8,y);break;case 23:break;case 22:var Mt=y.stateNode;y.memoizedState!==null?Mt._visibility&2?to(h,y,U,j,c):ul(h,y):(Mt._visibility|=2,to(h,y,U,j,c)),c&&ct&2048&&_h(y.alternate,y);break;case 24:to(h,y,U,j,c),c&&ct&2048&&xh(y.alternate,y);break;default:to(h,y,U,j,c)}n=n.sibling}}function ul(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:ul(a,s),c&2048&&_h(s.alternate,s);break;case 24:ul(a,s),c&2048&&xh(s.alternate,s);break;default:ul(a,s)}n=n.sibling}}var cl=8192;function eo(t,n,a){if(t.subtreeFlags&cl)for(t=t.child;t!==null;)Qg(t,n,a),t=t.sibling}function Qg(t,n,a){switch(t.tag){case 26:eo(t,n,a),t.flags&cl&&t.memoizedState!==null&&dy(a,pa,t.memoizedState,t.memoizedProps);break;case 5:eo(t,n,a);break;case 3:case 4:var s=pa;pa=Zu(t.stateNode.containerInfo),eo(t,n,a),pa=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=cl,cl=16777216,eo(t,n,a),cl=s):eo(t,n,a));break;default:eo(t,n,a)}}function Jg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,t0(s,t)}Jg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$g(t),t=t.sibling}function $g(t){switch(t.tag){case 0:case 11:case 15:fl(t),t.flags&2048&&Rr(9,t,t.return);break;case 3:fl(t);break;case 12:fl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fu(t)):fl(t);break;default:fl(t)}}function Fu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Zn=s,t0(s,t)}Jg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Rr(8,n,n.return),Fu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fu(n));break;default:Fu(n)}t=t.sibling}}function t0(t,n){for(;Zn!==null;){var a=Zn;switch(a.tag){case 0:case 11:case 15:Rr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:jo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Zn=s;else t:for(a=t;Zn!==null;){s=Zn;var c=s.sibling,h=s.return;if(kg(s),s===a){Zn=null;break t}if(c!==null){c.return=h,Zn=c;break t}Zn=h}}}var Cx={getCacheForType:function(t){var n=ei(Bn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return ei(Bn).controller.signal}},wx=typeof WeakMap=="function"?WeakMap:Map,Je=0,hn=null,Le=null,Oe=0,en=0,zi=null,Cr=!1,no=!1,yh=!1,ja=0,An=0,wr=0,vs=0,Sh=0,Bi=0,io=0,hl=null,Ti=null,Mh=!1,zu=0,e0=0,Bu=1/0,Iu=null,Dr=null,Wn=0,Ur=null,ao=null,Za=0,Eh=0,Th=null,n0=null,dl=0,bh=null;function Ii(){return(Je&2)!==0&&Oe!==0?Oe&-Oe:N.T!==null?Uh():cn()}function i0(){if(Bi===0)if((Oe&536870912)===0||ze){var t=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),Bi=t}else Bi=536870912;return t=Pi.current,t!==null&&(t.flags|=32),Bi}function bi(t,n,a){(t===hn&&(en===2||en===9)||t.cancelPendingCommit!==null)&&(ro(t,0),Lr(t,Oe,Bi,!1)),Cn(t,a),((Je&2)===0||t!==hn)&&(t===hn&&((Je&2)===0&&(vs|=a),An===4&&Lr(t,Oe,Bi,!1)),Ta(t))}function a0(t,n,a){if((Je&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),c=s?Lx(t,n):Rh(t,n,!0),h=s;do{if(c===0){no&&!s&&Lr(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Dx(a)){c=Rh(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var U=t;c=hl;var j=U.current.memoizedState.isDehydrated;if(j&&(ro(U,y).flags|=256),y=Rh(U,y,!1),y!==2){if(yh&&!j){U.errorRecoveryDisabledLanes|=h,vs|=h,c=4;break t}h=Ti,Ti=c,h!==null&&(Ti===null?Ti=h:Ti.push.apply(Ti,h))}c=y}if(h=!1,c!==2)continue}}if(c===1){ro(t,0),Lr(t,n,0,!0);break}t:{switch(s=t,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Lr(s,n,Bi,!Cr);break t;case 2:Ti=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=zu+300-A(),10<c)){if(Lr(s,n,Bi,!Cr),Rt(s,0,!0)!==0)break t;Za=n,s.timeoutHandle=P0(r0.bind(null,s,a,Ti,Iu,Mh,n,Bi,vs,io,Cr,h,"Throttled",-0,0),c);break t}r0(s,a,Ti,Iu,Mh,n,Bi,vs,io,Cr,h,null,-0,0)}}break}while(!0);Ta(t)}function r0(t,n,a,s,c,h,y,U,j,ct,Mt,Ct,mt,_t){if(t.timeoutHandle=-1,Ct=n.subtreeFlags,Ct&8192||(Ct&16785408)===16785408){Ct={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},Qg(n,h,Ct);var ae=(h&62914560)===h?zu-A():(h&4194048)===h?e0-A():0;if(ae=py(Ct,ae),ae!==null){Za=h,t.cancelPendingCommit=ae(d0.bind(null,t,n,h,a,s,c,y,U,j,Mt,Ct,null,mt,_t)),Lr(t,h,y,!ct);return}}d0(t,n,h,a,s,c,y,U,j)}function Dx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],h=c.getSnapshot;c=c.value;try{if(!Ni(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Lr(t,n,a,s){n&=~Sh,n&=~vs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var h=31-Yt(c),y=1<<h;s[h]=-1,c&=~y}a!==0&&la(t,a,n)}function Hu(){return(Je&6)===0?(pl(0),!1):!0}function Ah(){if(Le!==null){if(en===0)var t=Le.return;else t=Le,Ba=ls=null,Vf(t),Zs=null,Ko=0,t=Le;for(;t!==null;)Fg(t.alternate,t),t=t.return;Le=null}}function ro(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Kx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Za=0,Ah(),hn=t,Le=a=Fa(t.current,null),Oe=n,en=0,zi=null,Cr=!1,no=Ft(t,n),yh=!1,io=Bi=Sh=vs=wr=An=0,Ti=hl=null,Mh=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Yt(s),h=1<<c;n|=t[c],s&=~h}return ja=n,ou(),a}function s0(t,n){Ae=null,N.H=al,n===js||n===mu?(n=Mm(),en=3):n===Df?(n=Mm(),en=4):en=n===ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,zi=n,Le===null&&(An=1,wu(t,Qi(n,t.current)))}function o0(){var t=Pi.current;return t===null?!0:(Oe&4194048)===Oe?ea===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?t===ea:!1}function l0(){var t=N.H;return N.H=al,t===null?al:t}function u0(){var t=N.A;return N.A=Cx,t}function Gu(){An=4,Cr||(Oe&4194048)!==Oe&&Pi.current!==null||(no=!0),(wr&134217727)===0&&(vs&134217727)===0||hn===null||Lr(hn,Oe,Bi,!1)}function Rh(t,n,a){var s=Je;Je|=2;var c=l0(),h=u0();(hn!==t||Oe!==n)&&(Iu=null,ro(t,n)),n=!1;var y=An;t:do try{if(en!==0&&Le!==null){var U=Le,j=zi;switch(en){case 8:Ah(),y=6;break t;case 3:case 2:case 9:case 6:Pi.current===null&&(n=!0);var ct=en;if(en=0,zi=null,so(t,U,j,ct),a&&no){y=0;break t}break;default:ct=en,en=0,zi=null,so(t,U,j,ct)}}Ux(),y=An;break}catch(Mt){s0(t,Mt)}while(!0);return n&&t.shellSuspendCounter++,Ba=ls=null,Je=s,N.H=c,N.A=h,Le===null&&(hn=null,Oe=0,ou()),y}function Ux(){for(;Le!==null;)c0(Le)}function Lx(t,n){var a=Je;Je|=2;var s=l0(),c=u0();hn!==t||Oe!==n?(Iu=null,Bu=A()+500,ro(t,n)):no=Ft(t,n);t:do try{if(en!==0&&Le!==null){n=Le;var h=zi;e:switch(en){case 1:en=0,zi=null,so(t,n,h,1);break;case 2:case 9:if(ym(h)){en=0,zi=null,f0(n);break}n=function(){en!==2&&en!==9||hn!==t||(en=7),Ta(t)},h.then(n,n);break t;case 3:en=7;break t;case 4:en=5;break t;case 7:ym(h)?(en=0,zi=null,f0(n)):(en=0,zi=null,so(t,n,h,7));break;case 5:var y=null;switch(Le.tag){case 26:y=Le.memoizedState;case 5:case 27:var U=Le;if(y?K0(y):U.stateNode.complete){en=0,zi=null;var j=U.sibling;if(j!==null)Le=j;else{var ct=U.return;ct!==null?(Le=ct,Vu(ct)):Le=null}break e}}en=0,zi=null,so(t,n,h,5);break;case 6:en=0,zi=null,so(t,n,h,6);break;case 8:Ah(),An=6;break t;default:throw Error(r(462))}}Nx();break}catch(Mt){s0(t,Mt)}while(!0);return Ba=ls=null,N.H=s,N.A=c,Je=a,Le!==null?0:(hn=null,Oe=0,ou(),An)}function Nx(){for(;Le!==null&&!ee();)c0(Le)}function c0(t){var n=Og(t.alternate,t,ja);t.memoizedProps=t.pendingProps,n===null?Vu(t):Le=n}function f0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cg(a,n,n.pendingProps,n.type,void 0,Oe);break;case 11:n=Cg(a,n,n.pendingProps,n.type.render,n.ref,Oe);break;case 5:Vf(n);default:Fg(a,n),n=Le=um(n,ja),n=Og(a,n,ja)}t.memoizedProps=t.pendingProps,n===null?Vu(t):Le=n}function so(t,n,a,s){Ba=ls=null,Vf(n),Zs=null,Ko=0;var c=n.return;try{if(Sx(t,c,n,a,Oe)){An=1,wu(t,Qi(a,t.current)),Le=null;return}}catch(h){if(c!==null)throw Le=c,h;An=1,wu(t,Qi(a,t.current)),Le=null;return}n.flags&32768?(ze||s===1?t=!0:no||(Oe&536870912)!==0?t=!1:(Cr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Pi.current,s!==null&&s.tag===13&&(s.flags|=16384))),h0(n,t)):Vu(n)}function Vu(t){var n=t;do{if((n.flags&32768)!==0){h0(n,Cr);return}t=n.return;var a=Tx(n.alternate,n,ja);if(a!==null){Le=a;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=t}while(n!==null);An===0&&(An=5)}function h0(t,n){do{var a=bx(t.alternate,t);if(a!==null){a.flags&=32767,Le=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Le=t;return}Le=t=a}while(t!==null);An=6,Le=null}function d0(t,n,a,s,c,h,y,U,j){t.cancelPendingCommit=null;do Xu();while(Wn!==0);if((Je&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=mf,Di(t,a,h,y,U,j),t===hn&&(Le=hn=null,Oe=0),ao=n,Ur=t,Za=a,Eh=h,Th=c,n0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zx(xt,function(){return _0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,c=I.p,I.p=2,y=Je,Je|=4;try{Ax(t,n,a)}finally{Je=y,I.p=c,N.T=s}}Wn=1,p0(),m0(),g0()}}function p0(){if(Wn===1){Wn=0;var t=Ur,n=ao,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=I.p;I.p=2;var c=Je;Je|=4;try{jg(n,t);var h=Ih,y=tm(t.containerInfo),U=h.focusedElem,j=h.selectionRange;if(y!==U&&U&&U.ownerDocument&&$p(U.ownerDocument.documentElement,U)){if(j!==null&&cf(U)){var ct=j.start,Mt=j.end;if(Mt===void 0&&(Mt=ct),"selectionStart"in U)U.selectionStart=ct,U.selectionEnd=Math.min(Mt,U.value.length);else{var Ct=U.ownerDocument||document,mt=Ct&&Ct.defaultView||window;if(mt.getSelection){var _t=mt.getSelection(),ae=U.textContent.length,ge=Math.min(j.start,ae),ln=j.end===void 0?ge:Math.min(j.end,ae);!_t.extend&&ge>ln&&(y=ln,ln=ge,ge=y);var rt=Jp(U,ge),Q=Jp(U,ln);if(rt&&Q&&(_t.rangeCount!==1||_t.anchorNode!==rt.node||_t.anchorOffset!==rt.offset||_t.focusNode!==Q.node||_t.focusOffset!==Q.offset)){var ut=Ct.createRange();ut.setStart(rt.node,rt.offset),_t.removeAllRanges(),ge>ln?(_t.addRange(ut),_t.extend(Q.node,Q.offset)):(ut.setEnd(Q.node,Q.offset),_t.addRange(ut))}}}}for(Ct=[],_t=U;_t=_t.parentNode;)_t.nodeType===1&&Ct.push({element:_t,left:_t.scrollLeft,top:_t.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<Ct.length;U++){var bt=Ct[U];bt.element.scrollLeft=bt.left,bt.element.scrollTop=bt.top}}ec=!!Bh,Ih=Bh=null}finally{Je=c,I.p=s,N.T=a}}t.current=n,Wn=2}}function m0(){if(Wn===2){Wn=0;var t=Ur,n=ao,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=I.p;I.p=2;var c=Je;Je|=4;try{Xg(t,n.alternate,n)}finally{Je=c,I.p=s,N.T=a}}Wn=3}}function g0(){if(Wn===4||Wn===3){Wn=0,B();var t=Ur,n=ao,a=Za,s=n0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Wn=5:(Wn=0,ao=Ur=null,v0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Dr=null),Da(a),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ut,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,c=I.p,I.p=2,N.T=null;try{for(var h=t.onRecoverableError,y=0;y<s.length;y++){var U=s[y];h(U.value,{componentStack:U.stack})}}finally{N.T=n,I.p=c}}(Za&3)!==0&&Xu(),Ta(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===bh?dl++:(dl=0,bh=t):dl=0,pl(0)}}function v0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,jo(n)))}function Xu(){return p0(),m0(),g0(),_0()}function _0(){if(Wn!==5)return!1;var t=Ur,n=Eh;Eh=0;var a=Da(Za),s=N.T,c=I.p;try{I.p=32>a?32:a,N.T=null,a=Th,Th=null;var h=Ur,y=Za;if(Wn=0,ao=Ur=null,Za=0,(Je&6)!==0)throw Error(r(331));var U=Je;if(Je|=4,$g(h.current),Kg(h,h.current,y,a),Je=U,pl(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ut,h)}catch{}return!0}finally{I.p=c,N.T=s,v0(t,n)}}function x0(t,n,a){n=Qi(a,n),n=ih(t.stateNode,n,2),t=Tr(t,n,2),t!==null&&(Cn(t,2),Ta(t))}function nn(t,n,a){if(t.tag===3)x0(t,t,a);else for(;n!==null;){if(n.tag===3){x0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Dr===null||!Dr.has(s))){t=Qi(a,t),a=yg(2),s=Tr(n,a,2),s!==null&&(Sg(a,s,n,t),Cn(s,2),Ta(s));break}}n=n.return}}function Ch(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new wx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(yh=!0,c.add(a),t=Ox.bind(null,t,n,a),n.then(t,t))}function Ox(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,hn===t&&(Oe&a)===a&&(An===4||An===3&&(Oe&62914560)===Oe&&300>A()-zu?(Je&2)===0&&ro(t,0):Sh|=a,io===Oe&&(io=0)),Ta(t)}function y0(t,n){n===0&&(n=qe()),t=rs(t,n),t!==null&&(Cn(t,n),Ta(t))}function Px(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),y0(t,a)}function Fx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),y0(t,a)}function zx(t,n){return Ue(t,n)}var ku=null,oo=null,wh=!1,Wu=!1,Dh=!1,Nr=0;function Ta(t){t!==oo&&t.next===null&&(oo===null?ku=oo=t:oo=oo.next=t),Wu=!0,wh||(wh=!0,Ix())}function pl(t,n){if(!Dh&&Wu){Dh=!0;do for(var a=!1,s=ku;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var h=0;else{var y=s.suspendedLanes,U=s.pingedLanes;h=(1<<31-Yt(42|t)+1)-1,h&=c&~(y&~U),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,T0(s,h))}else h=Oe,h=Rt(s,s===hn?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||Ft(s,h)||(a=!0,T0(s,h));s=s.next}while(a);Dh=!1}}function Bx(){S0()}function S0(){Wu=wh=!1;var t=0;Nr!==0&&Zx()&&(t=Nr);for(var n=A(),a=null,s=ku;s!==null;){var c=s.next,h=M0(s,n);h===0?(s.next=null,a===null?ku=c:a.next=c,c===null&&(oo=a)):(a=s,(t!==0||(h&3)!==0)&&(Wu=!0)),s=c}Wn!==0&&Wn!==5||pl(t),Nr!==0&&(Nr=0)}function M0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-Yt(h),U=1<<y,j=c[y];j===-1?((U&a)===0||(U&s)!==0)&&(c[y]=ve(U,n)):j<=n&&(t.expiredLanes|=U),h&=~U}if(n=hn,a=Oe,a=Rt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(en===2||en===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ve(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ve(s),Da(a)){case 2:case 8:a=wt;break;case 32:a=xt;break;case 268435456:a=zt;break;default:a=xt}return s=E0.bind(null,t),a=Ue(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ve(s),t.callbackPriority=2,t.callbackNode=null,2}function E0(t,n){if(Wn!==0&&Wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xu()&&t.callbackNode!==a)return null;var s=Oe;return s=Rt(t,t===hn?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(a0(t,s,n),M0(t,A()),t.callbackNode!=null&&t.callbackNode===a?E0.bind(null,t):null)}function T0(t,n){if(Xu())return null;a0(t,n,!0)}function Ix(){Qx(function(){(Je&6)!==0?Ue(St,Bx):S0()})}function Uh(){if(Nr===0){var t=qs;t===0&&(t=It,It<<=1,(It&261888)===0&&(It=256)),Nr=t}return Nr}function b0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ds(""+t)}function A0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Hx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var h=b0((c[Sn]||null).action),y=s.submitter;y&&(n=(n=y[Sn]||null)?b0(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var U=new Ls("action","action",null,s,c);t.push({event:U,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Nr!==0){var j=y?A0(c,y):new FormData(c);Qf(a,{pending:!0,data:j,method:c.method,action:h},null,j)}}else typeof h=="function"&&(U.preventDefault(),j=y?A0(c,y):new FormData(c),Qf(a,{pending:!0,data:j,method:c.method,action:h},h,j))},currentTarget:c}]})}}for(var Lh=0;Lh<pf.length;Lh++){var Nh=pf[Lh],Gx=Nh.toLowerCase(),Vx=Nh[0].toUpperCase()+Nh.slice(1);da(Gx,"on"+Vx)}da(im,"onAnimationEnd"),da(am,"onAnimationIteration"),da(rm,"onAnimationStart"),da("dblclick","onDoubleClick"),da("focusin","onFocus"),da("focusout","onBlur"),da(ax,"onTransitionRun"),da(rx,"onTransitionStart"),da(sx,"onTransitionCancel"),da(sm,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function R0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var h=void 0;if(n)for(var y=s.length-1;0<=y;y--){var U=s[y],j=U.instance,ct=U.currentTarget;if(U=U.listener,j!==h&&c.isPropagationStopped())break t;h=U,c.currentTarget=ct;try{h(c)}catch(Mt){su(Mt)}c.currentTarget=null,h=j}else for(y=0;y<s.length;y++){if(U=s[y],j=U.instance,ct=U.currentTarget,U=U.listener,j!==h&&c.isPropagationStopped())break t;h=U,c.currentTarget=ct;try{h(c)}catch(Mt){su(Mt)}c.currentTarget=null,h=j}}}}function Ne(t,n){var a=n[ua];a===void 0&&(a=n[ua]=new Set);var s=t+"__bubble";a.has(s)||(C0(n,t,2,!1),a.add(s))}function Oh(t,n,a){var s=0;n&&(s|=4),C0(a,t,s,n)}var qu="_reactListening"+Math.random().toString(36).slice(2);function Ph(t){if(!t[qu]){t[qu]=!0,it.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Oh(a,!1,t),Oh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[qu]||(n[qu]=!0,Oh("selectionchange",!1,n))}}function C0(t,n,a,s){switch(iv(n)){case 2:var c=vy;break;case 8:c=_y;break;default:c=Kh}a=c.bind(null,n,a,t),c=void 0,!Oa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Fh(t,n,a,s,c){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var U=s.stateNode.containerInfo;if(U===c)break;if(y===4)for(y=s.return;y!==null;){var j=y.tag;if((j===3||j===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;U!==null;){if(y=Nn(U),y===null)return;if(j=y.tag,j===5||j===6||j===26||j===27){s=h=y;continue t}U=U.parentNode}}s=s.return}Us(function(){var ct=h,Mt=Na(a),Ct=[];t:{var mt=om.get(t);if(mt!==void 0){var _t=Ls,ae=t;switch(t){case"keypress":if(pr(a)===0)break t;case"keydown":case"keyup":_t=af;break;case"focusin":ae="focus",_t=Ps;break;case"focusout":ae="blur",_t=Ps;break;case"beforeblur":case"afterblur":_t=Ps;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_t=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_t=Jc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_t=sf;break;case im:case am:case rm:_t=Kl;break;case sm:_t=lf;break;case"scroll":case"scrollend":_t=vr;break;case"wheel":_t=nu;break;case"copy":case"cut":case"paste":_t=Ql;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_t=tu;break;case"toggle":case"beforetoggle":_t=g}var ge=(n&4)!==0,ln=!ge&&(t==="scroll"||t==="scrollend"),rt=ge?mt!==null?mt+"Capture":null:mt;ge=[];for(var Q=ct,ut;Q!==null;){var bt=Q;if(ut=bt.stateNode,bt=bt.tag,bt!==5&&bt!==26&&bt!==27||ut===null||rt===null||(bt=dr(Q,rt),bt!=null&&ge.push(gl(Q,bt,ut))),ln)break;Q=Q.return}0<ge.length&&(mt=new _t(mt,ae,null,a,Mt),Ct.push({event:mt,listeners:ge}))}}if((n&7)===0){t:{if(mt=t==="mouseover"||t==="pointerover",_t=t==="mouseout"||t==="pointerout",mt&&a!==Jr&&(ae=a.relatedTarget||a.fromElement)&&(Nn(ae)||ae[fi]))break t;if((_t||mt)&&(mt=Mt.window===Mt?Mt:(mt=Mt.ownerDocument)?mt.defaultView||mt.parentWindow:window,_t?(ae=a.relatedTarget||a.toElement,_t=ct,ae=ae?Nn(ae):null,ae!==null&&(ln=u(ae),ge=ae.tag,ae!==ln||ge!==5&&ge!==27&&ge!==6)&&(ae=null)):(_t=null,ae=ct),_t!==ae)){if(ge=ns,bt="onMouseLeave",rt="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(ge=tu,bt="onPointerLeave",rt="onPointerEnter",Q="pointer"),ln=_t==null?mt:Li(_t),ut=ae==null?mt:Li(ae),mt=new ge(bt,Q+"leave",_t,a,Mt),mt.target=ln,mt.relatedTarget=ut,bt=null,Nn(Mt)===ct&&(ge=new ge(rt,Q+"enter",ae,a,Mt),ge.target=ut,ge.relatedTarget=ln,bt=ge),ln=bt,_t&&ae)e:{for(ge=kx,rt=_t,Q=ae,ut=0,bt=rt;bt;bt=ge(bt))ut++;bt=0;for(var he=Q;he;he=ge(he))bt++;for(;0<ut-bt;)rt=ge(rt),ut--;for(;0<bt-ut;)Q=ge(Q),bt--;for(;ut--;){if(rt===Q||Q!==null&&rt===Q.alternate){ge=rt;break e}rt=ge(rt),Q=ge(Q)}ge=null}else ge=null;_t!==null&&w0(Ct,mt,_t,ge,!1),ae!==null&&ln!==null&&w0(Ct,ln,ae,ge,!0)}}t:{if(mt=ct?Li(ct):window,_t=mt.nodeName&&mt.nodeName.toLowerCase(),_t==="select"||_t==="input"&&mt.type==="file")var je=Fe;else if(be(mt))if(zn)je=ex;else{je=zs;var oe=uf}else _t=mt.nodeName,!_t||_t.toLowerCase()!=="input"||mt.type!=="checkbox"&&mt.type!=="radio"?ct&&Qn(ct.elementType)&&(je=Fe):je=tx;if(je&&(je=je(t,ct))){rn(Ct,je,a,Mt);break t}oe&&oe(t,mt,ct),t==="focusout"&&ct&&mt.type==="number"&&ct.memoizedProps.value!=null&&On(mt,"number",mt.value)}switch(oe=ct?Li(ct):window,t){case"focusin":(be(oe)||oe.contentEditable==="true")&&(Bs=oe,ff=ct,Wo=null);break;case"focusout":Wo=ff=Bs=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,em(Ct,a,Mt);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":em(Ct,a,Mt)}var Re;if(C)t:{switch(t){case"compositionstart":var Pe="onCompositionStart";break t;case"compositionend":Pe="onCompositionEnd";break t;case"compositionupdate":Pe="onCompositionUpdate";break t}Pe=void 0}else fe?Lt(t,a)&&(Pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(k&&a.locale!=="ko"&&(fe||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&fe&&(Re=Io()):(ya=Mt,Bo="value"in ya?ya.value:ya.textContent,fe=!0)),oe=Yu(ct,Pe),0<oe.length&&(Pe=new Jl(Pe,t,null,a,Mt),Ct.push({event:Pe,listeners:oe}),Re?Pe.data=Re:(Re=Gt(a),Re!==null&&(Pe.data=Re)))),(Re=W?le(t,a):Kt(t,a))&&(Pe=Yu(ct,"onBeforeInput"),0<Pe.length&&(oe=new Jl("onBeforeInput","beforeinput",null,a,Mt),Ct.push({event:oe,listeners:Pe}),oe.data=Re)),Hx(Ct,t,ct,a,Mt)}R0(Ct,n)})}function gl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yu(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=dr(t,a),c!=null&&s.unshift(gl(t,c,h)),c=dr(t,n),c!=null&&s.push(gl(t,c,h))),t.tag===3)return s;t=t.return}return[]}function kx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function w0(t,n,a,s,c){for(var h=n._reactName,y=[];a!==null&&a!==s;){var U=a,j=U.alternate,ct=U.stateNode;if(U=U.tag,j!==null&&j===s)break;U!==5&&U!==26&&U!==27||ct===null||(j=ct,c?(ct=dr(a,h),ct!=null&&y.unshift(gl(a,ct,j))):c||(ct=dr(a,h),ct!=null&&y.push(gl(a,ct,j)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function D0(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(qx,"")}function U0(t,n){return n=D0(n),D0(t)===n}function on(t,n,a,s,c,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||En(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&En(t,""+s);break;case"className":ue(t,"class",s);break;case"tabIndex":ue(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ue(t,a,s);break;case"style":La(t,s,h);break;case"data":if(n!=="object"){ue(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ds(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&on(t,n,"name",c.name,c,null),on(t,n,"formEncType",c.formEncType,c,null),on(t,n,"formMethod",c.formMethod,c,null),on(t,n,"formTarget",c.formTarget,c,null)):(on(t,n,"encType",c.encType,c,null),on(t,n,"method",c.method,c,null),on(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ds(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=fa);break;case"onScroll":s!=null&&Ne("scroll",t);break;case"onScrollEnd":s!=null&&Ne("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ds(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ne("beforetoggle",t),Ne("toggle",t),ie(t,"popover",s);break;case"xlinkActuate":re(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":re(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":re(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":re(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":re(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":re(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":re(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":re(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":re(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ie(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kc.get(a)||a,ie(t,a,s))}}function zh(t,n,a,s,c,h){switch(a){case"style":La(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?En(t,s):(typeof s=="number"||typeof s=="bigint")&&En(t,""+s);break;case"onScroll":s!=null&&Ne("scroll",t);break;case"onScrollEnd":s!=null&&Ne("scrollend",t);break;case"onClick":s!=null&&(t.onclick=fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=t[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ie(t,a,s)}}}function ii(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",t),Ne("load",t);var s=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:on(t,n,h,y,a,null)}}c&&on(t,n,"srcSet",a.srcSet,a,null),s&&on(t,n,"src",a.src,a,null);return;case"input":Ne("invalid",t);var U=h=y=c=null,j=null,ct=null;for(s in a)if(a.hasOwnProperty(s)){var Mt=a[s];if(Mt!=null)switch(s){case"name":c=Mt;break;case"type":y=Mt;break;case"checked":j=Mt;break;case"defaultChecked":ct=Mt;break;case"value":h=Mt;break;case"defaultValue":U=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(r(137,n));break;default:on(t,n,s,Mt,a,null)}}Yi(t,h,U,j,ct,y,c,!1);return;case"select":Ne("invalid",t),s=y=h=null;for(c in a)if(a.hasOwnProperty(c)&&(U=a[c],U!=null))switch(c){case"value":h=U;break;case"defaultValue":y=U;break;case"multiple":s=U;default:on(t,n,c,U,a,null)}n=h,a=y,t.multiple=!!s,n!=null?xi(t,!!s,n,!1):a!=null&&xi(t,!!s,a,!0);return;case"textarea":Ne("invalid",t),h=c=s=null;for(y in a)if(a.hasOwnProperty(y)&&(U=a[y],U!=null))switch(y){case"value":s=U;break;case"defaultValue":c=U;break;case"children":h=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(91));break;default:on(t,n,y,U,a,null)}Pn(t,s,c,h);return;case"option":for(j in a)a.hasOwnProperty(j)&&(s=a[j],s!=null)&&(j==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":on(t,n,j,s,a,null));return;case"dialog":Ne("beforetoggle",t),Ne("toggle",t),Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":Ne("load",t);break;case"video":case"audio":for(s=0;s<ml.length;s++)Ne(ml[s],t);break;case"image":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"embed":case"source":case"link":Ne("error",t),Ne("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ct in a)if(a.hasOwnProperty(ct)&&(s=a[ct],s!=null))switch(ct){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:on(t,n,ct,s,a,null)}return;default:if(Qn(n)){for(Mt in a)a.hasOwnProperty(Mt)&&(s=a[Mt],s!==void 0&&zh(t,n,Mt,s,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(s=a[U],s!=null&&on(t,n,U,s,a,null))}function Yx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,y=null,U=null,j=null,ct=null,Mt=null;for(_t in a){var Ct=a[_t];if(a.hasOwnProperty(_t)&&Ct!=null)switch(_t){case"checked":break;case"value":break;case"defaultValue":j=Ct;default:s.hasOwnProperty(_t)||on(t,n,_t,null,s,Ct)}}for(var mt in s){var _t=s[mt];if(Ct=a[mt],s.hasOwnProperty(mt)&&(_t!=null||Ct!=null))switch(mt){case"type":h=_t;break;case"name":c=_t;break;case"checked":ct=_t;break;case"defaultChecked":Mt=_t;break;case"value":y=_t;break;case"defaultValue":U=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(r(137,n));break;default:_t!==Ct&&on(t,n,mt,_t,s,Ct)}}Mn(t,y,U,j,ct,Mt,h,c);return;case"select":_t=y=U=mt=null;for(h in a)if(j=a[h],a.hasOwnProperty(h)&&j!=null)switch(h){case"value":break;case"multiple":_t=j;default:s.hasOwnProperty(h)||on(t,n,h,null,s,j)}for(c in s)if(h=s[c],j=a[c],s.hasOwnProperty(c)&&(h!=null||j!=null))switch(c){case"value":mt=h;break;case"defaultValue":U=h;break;case"multiple":y=h;default:h!==j&&on(t,n,c,h,s,j)}n=U,a=y,s=_t,mt!=null?xi(t,!!a,mt,!1):!!s!=!!a&&(n!=null?xi(t,!!a,n,!0):xi(t,!!a,a?[]:"",!1));return;case"textarea":_t=mt=null;for(U in a)if(c=a[U],a.hasOwnProperty(U)&&c!=null&&!s.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:on(t,n,U,null,s,c)}for(y in s)if(c=s[y],h=a[y],s.hasOwnProperty(y)&&(c!=null||h!=null))switch(y){case"value":mt=c;break;case"defaultValue":_t=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&on(t,n,y,c,s,h)}Qe(t,mt,_t);return;case"option":for(var ae in a)mt=a[ae],a.hasOwnProperty(ae)&&mt!=null&&!s.hasOwnProperty(ae)&&(ae==="selected"?t.selected=!1:on(t,n,ae,null,s,mt));for(j in s)mt=s[j],_t=a[j],s.hasOwnProperty(j)&&mt!==_t&&(mt!=null||_t!=null)&&(j==="selected"?t.selected=mt&&typeof mt!="function"&&typeof mt!="symbol":on(t,n,j,mt,s,_t));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)mt=a[ge],a.hasOwnProperty(ge)&&mt!=null&&!s.hasOwnProperty(ge)&&on(t,n,ge,null,s,mt);for(ct in s)if(mt=s[ct],_t=a[ct],s.hasOwnProperty(ct)&&mt!==_t&&(mt!=null||_t!=null))switch(ct){case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:on(t,n,ct,mt,s,_t)}return;default:if(Qn(n)){for(var ln in a)mt=a[ln],a.hasOwnProperty(ln)&&mt!==void 0&&!s.hasOwnProperty(ln)&&zh(t,n,ln,void 0,s,mt);for(Mt in s)mt=s[Mt],_t=a[Mt],!s.hasOwnProperty(Mt)||mt===_t||mt===void 0&&_t===void 0||zh(t,n,Mt,mt,s,_t);return}}for(var rt in a)mt=a[rt],a.hasOwnProperty(rt)&&mt!=null&&!s.hasOwnProperty(rt)&&on(t,n,rt,null,s,mt);for(Ct in s)mt=s[Ct],_t=a[Ct],!s.hasOwnProperty(Ct)||mt===_t||mt==null&&_t==null||on(t,n,Ct,mt,s,_t)}function L0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],h=c.transferSize,y=c.initiatorType,U=c.duration;if(h&&U&&L0(y)){for(y=0,U=c.responseEnd,s+=1;s<a.length;s++){var j=a[s],ct=j.startTime;if(ct>U)break;var Mt=j.transferSize,Ct=j.initiatorType;Mt&&L0(Ct)&&(j=j.responseEnd,y+=Mt*(j<U?1:(U-ct)/(j-ct)))}if(--s,n+=8*(h+y)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bh=null,Ih=null;function ju(t){return t.nodeType===9?t:t.ownerDocument}function N0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gh=null;function Zx(){var t=window.event;return t&&t.type==="popstate"?t===Gh?!1:(Gh=t,!0):(Gh=null,!1)}var P0=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(t){return F0.resolve(null).then(t).catch(Jx)}:P0;function Jx(t){setTimeout(function(){throw t})}function Or(t){return t==="head"}function z0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),fo(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")vl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,vl(a);for(var h=a.firstChild;h;){var y=h.nextSibling,U=h.nodeName;h[ca]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&vl(t.ownerDocument.body);a=c}while(a);fo(n)}function B0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Vh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vh(a),cr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $x(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ca])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=na(t.nextSibling),t===null)break}return null}function ty(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=na(t.nextSibling),t===null))return null;return t}function I0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=na(t.nextSibling),t===null))return null;return t}function Xh(t){return t.data==="$?"||t.data==="$~"}function kh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ey(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function na(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Wh=null;function H0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return na(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function G0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function V0(t,n,a){switch(n=ju(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);cr(t)}var ia=new Map,X0=new Set;function Zu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ka=I.d;I.d={f:ny,r:iy,D:ay,C:ry,L:sy,m:oy,X:uy,S:ly,M:cy};function ny(){var t=Ka.f(),n=Hu();return t||n}function iy(t){var n=Xn(t);n!==null&&n.tag===5&&n.type==="form"?sg(n):Ka.r(t)}var lo=typeof document>"u"?null:document;function k0(t,n,a){var s=lo;if(s&&typeof n=="string"&&n){var c=xe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),X0.has(c)||(X0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),ii(n,"link",t),w(n),s.head.appendChild(n)))}}function ay(t){Ka.D(t),k0("dns-prefetch",t,null)}function ry(t,n){Ka.C(t,n),k0("preconnect",t,n)}function sy(t,n,a){Ka.L(t,n,a);var s=lo;if(s&&t&&n){var c='link[rel="preload"][as="'+xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xe(a.imageSizes)+'"]')):c+='[href="'+xe(t)+'"]';var h=c;switch(n){case"style":h=uo(t);break;case"script":h=co(t)}ia.has(h)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ia.set(h,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(_l(h))||n==="script"&&s.querySelector(xl(h))||(n=s.createElement("link"),ii(n,"link",t),w(n),s.head.appendChild(n)))}}function oy(t,n){Ka.m(t,n);var a=lo;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xe(s)+'"][href="'+xe(t)+'"]',h=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=co(t)}if(!ia.has(h)&&(t=x({rel:"modulepreload",href:t},n),ia.set(h,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xl(h)))return}s=a.createElement("link"),ii(s,"link",t),w(s),a.head.appendChild(s)}}}function ly(t,n,a){Ka.S(t,n,a);var s=lo;if(s&&t){var c=qi(s).hoistableStyles,h=uo(t);n=n||"default";var y=c.get(h);if(!y){var U={loading:0,preload:null};if(y=s.querySelector(_l(h)))U.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ia.get(h))&&qh(t,a);var j=y=s.createElement("link");w(j),ii(j,"link",t),j._p=new Promise(function(ct,Mt){j.onload=ct,j.onerror=Mt}),j.addEventListener("load",function(){U.loading|=1}),j.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Ku(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:U},c.set(h,y)}}}function uy(t,n){Ka.X(t,n);var a=lo;if(a&&t){var s=qi(a).hoistableScripts,c=co(t),h=s.get(c);h||(h=a.querySelector(xl(c)),h||(t=x({src:t,async:!0},n),(n=ia.get(c))&&Yh(t,n),h=a.createElement("script"),w(h),ii(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(c,h))}}function cy(t,n){Ka.M(t,n);var a=lo;if(a&&t){var s=qi(a).hoistableScripts,c=co(t),h=s.get(c);h||(h=a.querySelector(xl(c)),h||(t=x({src:t,async:!0,type:"module"},n),(n=ia.get(c))&&Yh(t,n),h=a.createElement("script"),w(h),ii(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(c,h))}}function W0(t,n,a,s){var c=(c=ht.current)?Zu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=uo(a.href),a=qi(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=uo(a.href);var h=qi(c).hoistableStyles,y=h.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=c.querySelector(_l(t)))&&!h._p&&(y.instance=h,y.state.loading=5),ia.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ia.set(t,a),h||fy(c,t,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=co(a),a=qi(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function uo(t){return'href="'+xe(t)+'"'}function _l(t){return'link[rel="stylesheet"]['+t+"]"}function q0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function fy(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),ii(n,"link",a),w(n),t.head.appendChild(n))}function co(t){return'[src="'+xe(t)+'"]'}function xl(t){return"script[async]"+t}function Y0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+xe(a.href)+'"]');if(s)return n.instance=s,w(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),w(s),ii(s,"style",c),Ku(s,a.precedence,t),n.instance=s;case"stylesheet":c=uo(a.href);var h=t.querySelector(_l(c));if(h)return n.state.loading|=4,n.instance=h,w(h),h;s=q0(a),(c=ia.get(c))&&qh(s,c),h=(t.ownerDocument||t).createElement("link"),w(h);var y=h;return y._p=new Promise(function(U,j){y.onload=U,y.onerror=j}),ii(h,"link",s),n.state.loading|=4,Ku(h,a.precedence,t),n.instance=h;case"script":return h=co(a.src),(c=t.querySelector(xl(h)))?(n.instance=c,w(c),c):(s=a,(c=ia.get(h))&&(s=x({},a),Yh(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),w(c),ii(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ku(s,a.precedence,t));return n.instance}function Ku(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,h=c,y=0;y<s.length;y++){var U=s[y];if(U.dataset.precedence===n)h=U;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function qh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Qu=null;function j0(t,n,a){if(Qu===null){var s=new Map,c=Qu=new Map;c.set(a,s)}else c=Qu,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var h=a[c];if(!(h[ca]||h[yn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=t+y;var U=s.get(y);U?U.push(h):s.set(y,[h])}}return s}function Z0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function hy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function K0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=uo(s.href),h=n.querySelector(_l(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ju.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,w(h);return}h=n.ownerDocument||n,s=q0(s),(c=ia.get(c))&&qh(s,c),h=h.createElement("link"),w(h);var y=h;y._p=new Promise(function(U,j){y.onload=U,y.onerror=j}),ii(h,"link",s),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ju.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var jh=0;function py(t,n){return t.stylesheets&&t.count===0&&tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&jh===0&&(jh=62500*jx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>jh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $u=null;function tc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$u=new Map,n.forEach(my,t),$u=null,Ju.call(t))}function my(t,n){if(!(n.state.loading&4)){var a=$u.get(t);if(a)var s=a.get(null);else{a=new Map,$u.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var y=c[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}c=n.instance,y=c.getAttribute("data-precedence"),h=a.get(y)||s,h===s&&a.set(null,c),a.set(y,c),this.count++,s=Ju.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yl={$$typeof:V,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function gy(t,n,a,s,c,h,y,U,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Q0(t,n,a,s,c,h,y,U,j,ct,Mt,Ct){return t=new gy(t,n,a,y,j,ct,Mt,Ct,U),n=1,h===!0&&(n|=24),h=Oi(3,null,null,n),t.current=h,h.stateNode=t,n=Rf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},Uf(h),t}function J0(t){return t?(t=Gs,t):Gs}function $0(t,n,a,s,c,h){c=J0(c),s.context===null?s.context=c:s.pendingContext=c,s=Er(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=Tr(t,s,n),a!==null&&(bi(a,t,n),Jo(a,t,n))}function tv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zh(t,n){tv(t,n),(t=t.alternate)&&tv(t,n)}function ev(t){if(t.tag===13||t.tag===31){var n=rs(t,67108864);n!==null&&bi(n,t,67108864),Zh(t,67108864)}}function nv(t){if(t.tag===13||t.tag===31){var n=Ii();n=Ui(n);var a=rs(t,n);a!==null&&bi(a,t,n),Zh(t,n)}}var ec=!0;function vy(t,n,a,s){var c=N.T;N.T=null;var h=I.p;try{I.p=2,Kh(t,n,a,s)}finally{I.p=h,N.T=c}}function _y(t,n,a,s){var c=N.T;N.T=null;var h=I.p;try{I.p=8,Kh(t,n,a,s)}finally{I.p=h,N.T=c}}function Kh(t,n,a,s){if(ec){var c=Qh(s);if(c===null)Fh(t,n,s,nc,a),av(t,s);else if(yy(c,t,n,a,s))s.stopPropagation();else if(av(t,s),n&4&&-1<xy.indexOf(t)){for(;c!==null;){var h=Xn(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Dt(h.pendingLanes);if(y!==0){var U=h;for(U.pendingLanes|=2,U.entangledLanes|=2;y;){var j=1<<31-Yt(y);U.entanglements[1]|=j,y&=~j}Ta(h),(Je&6)===0&&(Bu=A()+500,pl(0))}}break;case 31:case 13:U=rs(h,2),U!==null&&bi(U,h,2),Hu(),Zh(h,2)}if(h=Qh(s),h===null&&Fh(t,n,s,nc,a),h===c)break;c=h}c!==null&&s.stopPropagation()}else Fh(t,n,s,null,a)}}function Qh(t){return t=Na(t),Jh(t)}var nc=null;function Jh(t){if(nc=null,t=Nn(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nc=t,null}function iv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(et()){case St:return 2;case wt:return 8;case xt:case se:return 32;case zt:return 268435456;default:return 32}default:return 32}}var $h=!1,Pr=null,Fr=null,zr=null,Sl=new Map,Ml=new Map,Br=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function av(t,n){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(n.pointerId)}}function El(t,n,a,s,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Xn(n),n!==null&&ev(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function yy(t,n,a,s,c){switch(n){case"focusin":return Pr=El(Pr,t,n,a,s,c),!0;case"dragenter":return Fr=El(Fr,t,n,a,s,c),!0;case"mouseover":return zr=El(zr,t,n,a,s,c),!0;case"pointerover":var h=c.pointerId;return Sl.set(h,El(Sl.get(h)||null,t,n,a,s,c)),!0;case"gotpointercapture":return h=c.pointerId,Ml.set(h,El(Ml.get(h)||null,t,n,a,s,c)),!0}return!1}function rv(t){var n=Nn(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,wn(t.priority,function(){nv(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,wn(t.priority,function(){nv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Qh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Jr=s,a.target.dispatchEvent(s),Jr=null}else return n=Xn(a),n!==null&&ev(n),t.blockedOn=a,!1;n.shift()}return!0}function sv(t,n,a){ic(t)&&a.delete(n)}function Sy(){$h=!1,Pr!==null&&ic(Pr)&&(Pr=null),Fr!==null&&ic(Fr)&&(Fr=null),zr!==null&&ic(zr)&&(zr=null),Sl.forEach(sv),Ml.forEach(sv)}function ac(t,n){t.blockedOn===n&&(t.blockedOn=null,$h||($h=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Sy)))}var rc=null;function ov(t){rc!==t&&(rc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===t&&(rc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Jh(s||a)===null)continue;break}var h=Xn(a);h!==null&&(t.splice(n,3),n-=3,Qf(h,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function fo(t){function n(j){return ac(j,t)}Pr!==null&&ac(Pr,t),Fr!==null&&ac(Fr,t),zr!==null&&ac(zr,t),Sl.forEach(n),Ml.forEach(n);for(var a=0;a<Br.length;a++){var s=Br[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Br.length&&(a=Br[0],a.blockedOn===null);)rv(a),a.blockedOn===null&&Br.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],h=a[s+1],y=c[Sn]||null;if(typeof h=="function")y||ov(a);else if(y){var U=null;if(h&&h.hasAttribute("formAction")){if(c=h,y=h[Sn]||null)U=y.formAction;else if(Jh(c)!==null)continue}else U=y.action;typeof U=="function"?a[s+1]=U:(a.splice(s,3),s-=3),ov(a)}}}function lv(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function td(t){this._internalRoot=t}sc.prototype.render=td.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Ii();$0(a,s,t,n,null,null)},sc.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;$0(t.current,2,null,t,null,null),Hu(),n[fi]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=cn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Br.length&&n!==0&&n<Br[a].priority;a++);Br.splice(a,0,t),a===0&&rv(t)}};var uv=e.version;if(uv!=="19.2.3")throw Error(r(527,uv,"19.2.3"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var My={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{Ut=oc.inject(My),Nt=oc}catch{}}return bl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=gg,h=vg,y=_g;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Q0(t,1,!1,null,null,a,s,null,c,h,y,lv),t[fi]=n.current,Ph(t),new td(n)},bl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",h=gg,y=vg,U=_g,j=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),n=Q0(t,1,!0,n,a??null,s,c,j,h,y,U,lv),n.context=J0(null),a=n.current,s=Ii(),s=Ui(s),c=Er(s),c.callback=null,Tr(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ta(n),t[fi]=n.current,Ph(t),new sc(n)},bl.version="19.2.3",bl}var xv;function Ly(){if(xv)return id.exports;xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),id.exports=Uy(),id.exports}var Ny=Ly();const Ip="182",Oy=0,yv=1,Py=2,Nc=1,Fy=2,Ol=3,Zr=0,gi=1,ir=2,rr=0,Ro=1,Hc=2,Sv=3,Mv=4,zy=5,bs=100,By=101,Iy=102,Hy=103,Gy=104,Vy=200,Xy=201,ky=202,Wy=203,Gd=204,Vd=205,qy=206,Yy=207,jy=208,Zy=209,Ky=210,Qy=211,Jy=212,$y=213,tS=214,Xd=0,kd=1,Wd=2,wo=3,qd=4,Yd=5,jd=6,Zd=7,y_=0,eS=1,nS=2,Ca=0,S_=1,M_=2,E_=3,T_=4,b_=5,A_=6,R_=7,C_=300,ws=301,Do=302,Kd=303,Qd=304,Yc=306,Jd=1e3,ar=1001,$d=1002,qn=1003,iS=1004,lc=1005,ci=1006,od=1007,Rs=1008,oa=1009,w_=1010,D_=1011,Fl=1012,Hp=1013,wa=1014,Vi=1015,or=1016,Gp=1017,Vp=1018,zl=1020,U_=35902,L_=35899,N_=1021,O_=1022,Ri=1023,lr=1026,Cs=1027,P_=1028,Xp=1029,Uo=1030,kp=1031,Wp=1033,Oc=33776,Pc=33777,Fc=33778,zc=33779,tp=35840,ep=35841,np=35842,ip=35843,ap=36196,rp=37492,sp=37496,op=37488,lp=37489,up=37490,cp=37491,fp=37808,hp=37809,dp=37810,pp=37811,mp=37812,gp=37813,vp=37814,_p=37815,xp=37816,yp=37817,Sp=37818,Mp=37819,Ep=37820,Tp=37821,bp=36492,Ap=36494,Rp=36495,Cp=36283,wp=36284,Dp=36285,Up=36286,aS=3200,rS=0,sS=1,qr="",ra="srgb",Lo="srgb-linear",Gc="linear",an="srgb",ho=7680,Ev=519,oS=512,lS=513,uS=514,qp=515,cS=516,fS=517,Yp=518,hS=519,Tv=35044,bv="300 es",Ra=2e3,Vc=2001;function F_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dS(){const o=Xc("canvas");return o.style.display="block",o}const Av={};function Rv(...o){const e="THREE."+o.shift();console.log(e,...o)}function Me(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ke(...o){const e="THREE."+o.shift();console.error(e,...o)}function Bl(...o){const e=o.join(" ");e in Av||(Av[e]=!0,Me(...o))}function pS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Oo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,Lp=180/Math.PI;function Gl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(li[o&255]+li[o>>8&255]+li[o>>16&255]+li[o>>24&255]+"-"+li[e&255]+li[e>>8&255]+"-"+li[e>>16&15|64]+li[e>>24&255]+"-"+li[i&63|128]+li[i>>8&255]+"-"+li[i>>16&255]+li[i>>24&255]+li[r&255]+li[r>>8&255]+li[r>>16&255]+li[r>>24&255]).toLowerCase()}function Be(o,e,i){return Math.max(e,Math.min(i,o))}function mS(o,e){return(o%e+e)%e}function ud(o,e,i){return(1-i)*o+i*e}function Al(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ai(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,i=0){$e.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Be(this.x,e.x,i.x),this.y=Be(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Be(this.x,e,i),this.y=Be(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Be(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,p){let v=r[l+0],m=r[l+1],S=r[l+2],x=r[l+3],E=u[d+0],R=u[d+1],D=u[d+2],O=u[d+3];if(p<=0){e[i+0]=v,e[i+1]=m,e[i+2]=S,e[i+3]=x;return}if(p>=1){e[i+0]=E,e[i+1]=R,e[i+2]=D,e[i+3]=O;return}if(x!==O||v!==E||m!==R||S!==D){let T=v*E+m*R+S*D+x*O;T<0&&(E=-E,R=-R,D=-D,O=-O,T=-T);let M=1-p;if(T<.9995){const G=Math.acos(T),V=Math.sin(G);M=Math.sin(M*G)/V,p=Math.sin(p*G)/V,v=v*M+E*p,m=m*M+R*p,S=S*M+D*p,x=x*M+O*p}else{v=v*M+E*p,m=m*M+R*p,S=S*M+D*p,x=x*M+O*p;const G=1/Math.sqrt(v*v+m*m+S*S+x*x);v*=G,m*=G,S*=G,x*=G}}e[i]=v,e[i+1]=m,e[i+2]=S,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,d){const p=r[l],v=r[l+1],m=r[l+2],S=r[l+3],x=u[d],E=u[d+1],R=u[d+2],D=u[d+3];return e[i]=p*D+S*x+v*R-m*E,e[i+1]=v*D+S*E+m*x-p*R,e[i+2]=m*D+S*R+p*E-v*x,e[i+3]=S*D-p*x-v*E-m*R,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,v=Math.sin,m=p(r/2),S=p(l/2),x=p(u/2),E=v(r/2),R=v(l/2),D=v(u/2);switch(d){case"XYZ":this._x=E*S*x+m*R*D,this._y=m*R*x-E*S*D,this._z=m*S*D+E*R*x,this._w=m*S*x-E*R*D;break;case"YXZ":this._x=E*S*x+m*R*D,this._y=m*R*x-E*S*D,this._z=m*S*D-E*R*x,this._w=m*S*x+E*R*D;break;case"ZXY":this._x=E*S*x-m*R*D,this._y=m*R*x+E*S*D,this._z=m*S*D+E*R*x,this._w=m*S*x-E*R*D;break;case"ZYX":this._x=E*S*x-m*R*D,this._y=m*R*x+E*S*D,this._z=m*S*D-E*R*x,this._w=m*S*x+E*R*D;break;case"YZX":this._x=E*S*x+m*R*D,this._y=m*R*x+E*S*D,this._z=m*S*D-E*R*x,this._w=m*S*x-E*R*D;break;case"XZY":this._x=E*S*x-m*R*D,this._y=m*R*x-E*S*D,this._z=m*S*D+E*R*x,this._w=m*S*x+E*R*D;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],p=i[5],v=i[9],m=i[2],S=i[6],x=i[10],E=r+p+x;if(E>0){const R=.5/Math.sqrt(E+1);this._w=.25/R,this._x=(S-v)*R,this._y=(u-m)*R,this._z=(d-l)*R}else if(r>p&&r>x){const R=2*Math.sqrt(1+r-p-x);this._w=(S-v)/R,this._x=.25*R,this._y=(l+d)/R,this._z=(u+m)/R}else if(p>x){const R=2*Math.sqrt(1+p-r-x);this._w=(u-m)/R,this._x=(l+d)/R,this._y=.25*R,this._z=(v+S)/R}else{const R=2*Math.sqrt(1+x-r-p);this._w=(d-l)/R,this._x=(u+m)/R,this._y=(v+S)/R,this._z=.25*R}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,p=i._x,v=i._y,m=i._z,S=i._w;return this._x=r*S+d*p+l*m-u*v,this._y=l*S+d*v+u*p-r*m,this._z=u*S+d*m+r*v-l*p,this._w=d*S-r*p-l*v-u*m,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,u=-u,d=-d,p=-p);let v=1-i;if(p<.9995){const m=Math.acos(p),S=Math.sin(m);v=Math.sin(v*m)/S,i=Math.sin(i*m)/S,this._x=this._x*v+r*i,this._y=this._y*v+l*i,this._z=this._z*v+u*i,this._w=this._w*v+d*i,this._onChangeCallback()}else this._x=this._x*v+r*i,this._y=this._y*v+l*i,this._z=this._z*v+u*i,this._w=this._w*v+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ft{constructor(e=0,i=0,r=0){ft.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Cv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Cv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,p=e.z,v=e.w,m=2*(d*l-p*r),S=2*(p*i-u*l),x=2*(u*r-d*i);return this.x=i+v*m+d*x-p*S,this.y=r+v*S+p*m-u*x,this.z=l+v*x+u*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Be(this.x,e.x,i.x),this.y=Be(this.y,e.y,i.y),this.z=Be(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Be(this.x,e,i),this.y=Be(this.y,e,i),this.z=Be(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,p=i.y,v=i.z;return this.x=l*v-u*p,this.y=u*d-r*v,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Be(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new ft,Cv=new Vl;class Ce{constructor(e,i,r,l,u,d,p,v,m){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,v,m)}set(e,i,r,l,u,d,p,v,m){const S=this.elements;return S[0]=e,S[1]=l,S[2]=p,S[3]=i,S[4]=u,S[5]=v,S[6]=r,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[3],v=r[6],m=r[1],S=r[4],x=r[7],E=r[2],R=r[5],D=r[8],O=l[0],T=l[3],M=l[6],G=l[1],V=l[4],F=l[7],q=l[2],Y=l[5],X=l[8];return u[0]=d*O+p*G+v*q,u[3]=d*T+p*V+v*Y,u[6]=d*M+p*F+v*X,u[1]=m*O+S*G+x*q,u[4]=m*T+S*V+x*Y,u[7]=m*M+S*F+x*X,u[2]=E*O+R*G+D*q,u[5]=E*T+R*V+D*Y,u[8]=E*M+R*F+D*X,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],v=e[6],m=e[7],S=e[8];return i*d*S-i*p*m-r*u*S+r*p*v+l*u*m-l*d*v}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],v=e[6],m=e[7],S=e[8],x=S*d-p*m,E=p*v-S*u,R=m*u-d*v,D=i*x+r*E+l*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=x*O,e[1]=(l*m-S*r)*O,e[2]=(p*r-l*d)*O,e[3]=E*O,e[4]=(S*i-l*v)*O,e[5]=(l*u-p*i)*O,e[6]=R*O,e[7]=(r*v-m*i)*O,e[8]=(d*i-r*u)*O,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,p){const v=Math.cos(u),m=Math.sin(u);return this.set(r*v,r*m,-r*(v*d+m*p)+d+e,-l*m,l*v,-l*(-m*d+v*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(fd.makeScale(e,i)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,i){return this.premultiply(fd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new Ce,wv=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dv=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gS(){const o={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===an&&(l.r=sr(l.r),l.g=sr(l.g),l.b=sr(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===an&&(l.r=Co(l.r),l.g=Co(l.g),l.b=Co(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qr?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Bl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Bl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Lo]:{primaries:e,whitePoint:r,transfer:Gc,toXYZ:wv,fromXYZ:Dv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ra},outputColorSpaceConfig:{drawingBufferColorSpace:ra}},[ra]:{primaries:e,whitePoint:r,transfer:an,toXYZ:wv,fromXYZ:Dv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ra}}}),o}const ke=gS();function sr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let po;class vS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{po===void 0&&(po=Xc("canvas")),po.width=e.width,po.height=e.height;const l=po.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=po}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=sr(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(sr(i[r]/255)*255):i[r]=sr(i[r]);return{data:i,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _S=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(hd(l[d].image)):u.push(hd(l[d]))}else u=hd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function hd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?vS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let xS=0;const dd=new ft;class vi extends Oo{constructor(e=vi.DEFAULT_IMAGE,i=vi.DEFAULT_MAPPING,r=ar,l=ar,u=ci,d=Rs,p=Ri,v=oa,m=vi.DEFAULT_ANISOTROPY,S=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Gl(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=v,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){Me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jd:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jd:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=C_;vi.DEFAULT_ANISOTROPY=1;class Ln{constructor(e=0,i=0,r=0,l=1){Ln.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const v=e.elements,m=v[0],S=v[4],x=v[8],E=v[1],R=v[5],D=v[9],O=v[2],T=v[6],M=v[10];if(Math.abs(S-E)<.01&&Math.abs(x-O)<.01&&Math.abs(D-T)<.01){if(Math.abs(S+E)<.1&&Math.abs(x+O)<.1&&Math.abs(D+T)<.1&&Math.abs(m+R+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const V=(m+1)/2,F=(R+1)/2,q=(M+1)/2,Y=(S+E)/4,X=(x+O)/4,at=(D+T)/4;return V>F&&V>q?V<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(V),l=Y/r,u=X/r):F>q?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=Y/l,u=at/l):q<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),r=X/u,l=at/u),this.set(r,l,u,i),this}let G=Math.sqrt((T-D)*(T-D)+(x-O)*(x-O)+(E-S)*(E-S));return Math.abs(G)<.001&&(G=1),this.x=(T-D)/G,this.y=(x-O)/G,this.z=(E-S)/G,this.w=Math.acos((m+R+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Be(this.x,e.x,i.x),this.y=Be(this.y,e.y,i.y),this.z=Be(this.z,e.z,i.z),this.w=Be(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Be(this.x,e,i),this.y=Be(this.y,e,i),this.z=Be(this.z,e,i),this.w=Be(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yS extends Oo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Ln(0,0,e,i),this.scissorTest=!1,this.viewport=new Ln(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new vi(l);this.textures=[];const d=r.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends yS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class z_ extends vi{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=qn,this.minFilter=qn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SS extends vi{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=qn,this.minFilter=qn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xl{constructor(e=new ft(1/0,1/0,1/0),i=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ga.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ga.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ga.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,ga):ga.fromBufferAttribute(u,d),ga.applyMatrix4(e.matrixWorld),this.expandByPoint(ga);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ga),ga.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rl),cc.subVectors(this.max,Rl),mo.subVectors(e.a,Rl),go.subVectors(e.b,Rl),vo.subVectors(e.c,Rl),Hr.subVectors(go,mo),Gr.subVectors(vo,go),_s.subVectors(mo,vo);let i=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-_s.z,_s.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,_s.z,0,-_s.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-_s.y,_s.x,0];return!pd(i,mo,go,vo,cc)||(i=[1,0,0,0,1,0,0,0,1],!pd(i,mo,go,vo,cc))?!1:(fc.crossVectors(Hr,Gr),i=[fc.x,fc.y,fc.z],pd(i,mo,go,vo,cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ga).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ga).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qa=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],ga=new ft,uc=new Xl,mo=new ft,go=new ft,vo=new ft,Hr=new ft,Gr=new ft,_s=new ft,Rl=new ft,cc=new ft,fc=new ft,xs=new ft;function pd(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){xs.fromArray(o,u);const p=l.x*Math.abs(xs.x)+l.y*Math.abs(xs.y)+l.z*Math.abs(xs.z),v=e.dot(xs),m=i.dot(xs),S=r.dot(xs);if(Math.max(-Math.max(v,m,S),Math.min(v,m,S))>p)return!1}return!0}const MS=new Xl,Cl=new ft,md=new ft;class kl{constructor(e=new ft,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):MS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const i=Cl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Cl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(md)),this.expandByPoint(Cl.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ja=new ft,gd=new ft,hc=new ft,Vr=new ft,vd=new ft,dc=new ft,_d=new ft;class Zp{constructor(e=new ft,i=new ft(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ja)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ja.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ja.copy(this.origin).addScaledVector(this.direction,i),Ja.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){gd.copy(e).add(i).multiplyScalar(.5),hc.copy(i).sub(e).normalize(),Vr.copy(this.origin).sub(gd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(hc),p=Vr.dot(this.direction),v=-Vr.dot(hc),m=Vr.lengthSq(),S=Math.abs(1-d*d);let x,E,R,D;if(S>0)if(x=d*v-p,E=d*p-v,D=u*S,x>=0)if(E>=-D)if(E<=D){const O=1/S;x*=O,E*=O,R=x*(x+d*E+2*p)+E*(d*x+E+2*v)+m}else E=u,x=Math.max(0,-(d*E+p)),R=-x*x+E*(E+2*v)+m;else E=-u,x=Math.max(0,-(d*E+p)),R=-x*x+E*(E+2*v)+m;else E<=-D?(x=Math.max(0,-(-d*u+p)),E=x>0?-u:Math.min(Math.max(-u,-v),u),R=-x*x+E*(E+2*v)+m):E<=D?(x=0,E=Math.min(Math.max(-u,-v),u),R=E*(E+2*v)+m):(x=Math.max(0,-(d*u+p)),E=x>0?u:Math.min(Math.max(-u,-v),u),R=-x*x+E*(E+2*v)+m);else E=d>0?-u:u,x=Math.max(0,-(d*E+p)),R=-x*x+E*(E+2*v)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(gd).addScaledVector(hc,E),R}intersectSphere(e,i){Ja.subVectors(e.center,this.origin);const r=Ja.dot(this.direction),l=Ja.dot(Ja)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=r-d,v=r+d;return v<0?null:p<0?this.at(v,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,p,v;const m=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,E=this.origin;return m>=0?(r=(e.min.x-E.x)*m,l=(e.max.x-E.x)*m):(r=(e.max.x-E.x)*m,l=(e.min.x-E.x)*m),S>=0?(u=(e.min.y-E.y)*S,d=(e.max.y-E.y)*S):(u=(e.max.y-E.y)*S,d=(e.min.y-E.y)*S),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(p=(e.min.z-E.z)*x,v=(e.max.z-E.z)*x):(p=(e.max.z-E.z)*x,v=(e.min.z-E.z)*x),r>v||p>l)||((p>r||r!==r)&&(r=p),(v<l||l!==l)&&(l=v),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ja)!==null}intersectTriangle(e,i,r,l,u){vd.subVectors(i,e),dc.subVectors(r,e),_d.crossVectors(vd,dc);let d=this.direction.dot(_d),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Vr.subVectors(this.origin,e);const v=p*this.direction.dot(dc.crossVectors(Vr,dc));if(v<0)return null;const m=p*this.direction.dot(vd.cross(Vr));if(m<0||v+m>d)return null;const S=-p*Vr.dot(_d);return S<0?null:this.at(S/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn{constructor(e,i,r,l,u,d,p,v,m,S,x,E,R,D,O,T){Rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,v,m,S,x,E,R,D,O,T)}set(e,i,r,l,u,d,p,v,m,S,x,E,R,D,O,T){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=u,M[5]=d,M[9]=p,M[13]=v,M[2]=m,M[6]=S,M[10]=x,M[14]=E,M[3]=R,M[7]=D,M[11]=O,M[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/_o.setFromMatrixColumn(e,0).length(),u=1/_o.setFromMatrixColumn(e,1).length(),d=1/_o.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),p=Math.sin(r),v=Math.cos(l),m=Math.sin(l),S=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const E=d*S,R=d*x,D=p*S,O=p*x;i[0]=v*S,i[4]=-v*x,i[8]=m,i[1]=R+D*m,i[5]=E-O*m,i[9]=-p*v,i[2]=O-E*m,i[6]=D+R*m,i[10]=d*v}else if(e.order==="YXZ"){const E=v*S,R=v*x,D=m*S,O=m*x;i[0]=E+O*p,i[4]=D*p-R,i[8]=d*m,i[1]=d*x,i[5]=d*S,i[9]=-p,i[2]=R*p-D,i[6]=O+E*p,i[10]=d*v}else if(e.order==="ZXY"){const E=v*S,R=v*x,D=m*S,O=m*x;i[0]=E-O*p,i[4]=-d*x,i[8]=D+R*p,i[1]=R+D*p,i[5]=d*S,i[9]=O-E*p,i[2]=-d*m,i[6]=p,i[10]=d*v}else if(e.order==="ZYX"){const E=d*S,R=d*x,D=p*S,O=p*x;i[0]=v*S,i[4]=D*m-R,i[8]=E*m+O,i[1]=v*x,i[5]=O*m+E,i[9]=R*m-D,i[2]=-m,i[6]=p*v,i[10]=d*v}else if(e.order==="YZX"){const E=d*v,R=d*m,D=p*v,O=p*m;i[0]=v*S,i[4]=O-E*x,i[8]=D*x+R,i[1]=x,i[5]=d*S,i[9]=-p*S,i[2]=-m*S,i[6]=R*x+D,i[10]=E-O*x}else if(e.order==="XZY"){const E=d*v,R=d*m,D=p*v,O=p*m;i[0]=v*S,i[4]=-x,i[8]=m*S,i[1]=E*x+O,i[5]=d*S,i[9]=R*x-D,i[2]=D*x-R,i[6]=p*S,i[10]=O*x+E}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,TS)}lookAt(e,i,r){const l=this.elements;return Hi.subVectors(e,i),Hi.lengthSq()===0&&(Hi.z=1),Hi.normalize(),Xr.crossVectors(r,Hi),Xr.lengthSq()===0&&(Math.abs(r.z)===1?Hi.x+=1e-4:Hi.z+=1e-4,Hi.normalize(),Xr.crossVectors(r,Hi)),Xr.normalize(),pc.crossVectors(Hi,Xr),l[0]=Xr.x,l[4]=pc.x,l[8]=Hi.x,l[1]=Xr.y,l[5]=pc.y,l[9]=Hi.y,l[2]=Xr.z,l[6]=pc.z,l[10]=Hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[4],v=r[8],m=r[12],S=r[1],x=r[5],E=r[9],R=r[13],D=r[2],O=r[6],T=r[10],M=r[14],G=r[3],V=r[7],F=r[11],q=r[15],Y=l[0],X=l[4],at=l[8],L=l[12],b=l[1],P=l[5],tt=l[9],K=l[13],dt=l[2],pt=l[6],N=l[10],I=l[14],nt=l[3],Et=l[7],At=l[11],H=l[15];return u[0]=d*Y+p*b+v*dt+m*nt,u[4]=d*X+p*P+v*pt+m*Et,u[8]=d*at+p*tt+v*N+m*At,u[12]=d*L+p*K+v*I+m*H,u[1]=S*Y+x*b+E*dt+R*nt,u[5]=S*X+x*P+E*pt+R*Et,u[9]=S*at+x*tt+E*N+R*At,u[13]=S*L+x*K+E*I+R*H,u[2]=D*Y+O*b+T*dt+M*nt,u[6]=D*X+O*P+T*pt+M*Et,u[10]=D*at+O*tt+T*N+M*At,u[14]=D*L+O*K+T*I+M*H,u[3]=G*Y+V*b+F*dt+q*nt,u[7]=G*X+V*P+F*pt+q*Et,u[11]=G*at+V*tt+F*N+q*At,u[15]=G*L+V*K+F*I+q*H,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],p=e[5],v=e[9],m=e[13],S=e[2],x=e[6],E=e[10],R=e[14],D=e[3],O=e[7],T=e[11],M=e[15],G=v*R-m*E,V=p*R-m*x,F=p*E-v*x,q=d*R-m*S,Y=d*E-v*S,X=d*x-p*S;return i*(O*G-T*V+M*F)-r*(D*G-T*q+M*Y)+l*(D*V-O*q+M*X)-u*(D*F-O*Y+T*X)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],v=e[6],m=e[7],S=e[8],x=e[9],E=e[10],R=e[11],D=e[12],O=e[13],T=e[14],M=e[15],G=x*T*m-O*E*m+O*v*R-p*T*R-x*v*M+p*E*M,V=D*E*m-S*T*m-D*v*R+d*T*R+S*v*M-d*E*M,F=S*O*m-D*x*m+D*p*R-d*O*R-S*p*M+d*x*M,q=D*x*v-S*O*v-D*p*E+d*O*E+S*p*T-d*x*T,Y=i*G+r*V+l*F+u*q;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/Y;return e[0]=G*X,e[1]=(O*E*u-x*T*u-O*l*R+r*T*R+x*l*M-r*E*M)*X,e[2]=(p*T*u-O*v*u+O*l*m-r*T*m-p*l*M+r*v*M)*X,e[3]=(x*v*u-p*E*u-x*l*m+r*E*m+p*l*R-r*v*R)*X,e[4]=V*X,e[5]=(S*T*u-D*E*u+D*l*R-i*T*R-S*l*M+i*E*M)*X,e[6]=(D*v*u-d*T*u-D*l*m+i*T*m+d*l*M-i*v*M)*X,e[7]=(d*E*u-S*v*u+S*l*m-i*E*m-d*l*R+i*v*R)*X,e[8]=F*X,e[9]=(D*x*u-S*O*u-D*r*R+i*O*R+S*r*M-i*x*M)*X,e[10]=(d*O*u-D*p*u+D*r*m-i*O*m-d*r*M+i*p*M)*X,e[11]=(S*p*u-d*x*u-S*r*m+i*x*m+d*r*R-i*p*R)*X,e[12]=q*X,e[13]=(S*O*l-D*x*l+D*r*E-i*O*E-S*r*T+i*x*T)*X,e[14]=(D*p*l-d*O*l-D*r*v+i*O*v+d*r*T-i*p*T)*X,e[15]=(d*x*l-S*p*l+S*r*v-i*x*v-d*r*E+i*p*E)*X,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,p=e.y,v=e.z,m=u*d,S=u*p;return this.set(m*d+r,m*p-l*v,m*v+l*p,0,m*p+l*v,S*p+r,S*v-l*d,0,m*v-l*p,S*v+l*d,u*v*v+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,p=i._z,v=i._w,m=u+u,S=d+d,x=p+p,E=u*m,R=u*S,D=u*x,O=d*S,T=d*x,M=p*x,G=v*m,V=v*S,F=v*x,q=r.x,Y=r.y,X=r.z;return l[0]=(1-(O+M))*q,l[1]=(R+F)*q,l[2]=(D-V)*q,l[3]=0,l[4]=(R-F)*Y,l[5]=(1-(E+M))*Y,l[6]=(T+G)*Y,l[7]=0,l[8]=(D+V)*X,l[9]=(T-G)*X,l[10]=(1-(E+O))*X,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=_o.set(l[0],l[1],l[2]).length();const d=_o.set(l[4],l[5],l[6]).length(),p=_o.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),va.copy(this);const m=1/u,S=1/d,x=1/p;return va.elements[0]*=m,va.elements[1]*=m,va.elements[2]*=m,va.elements[4]*=S,va.elements[5]*=S,va.elements[6]*=S,va.elements[8]*=x,va.elements[9]*=x,va.elements[10]*=x,i.setFromRotationMatrix(va),r.x=u,r.y=d,r.z=p,this}makePerspective(e,i,r,l,u,d,p=Ra,v=!1){const m=this.elements,S=2*u/(i-e),x=2*u/(r-l),E=(i+e)/(i-e),R=(r+l)/(r-l);let D,O;if(v)D=u/(d-u),O=d*u/(d-u);else if(p===Ra)D=-(d+u)/(d-u),O=-2*d*u/(d-u);else if(p===Vc)D=-d/(d-u),O=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=S,m[4]=0,m[8]=E,m[12]=0,m[1]=0,m[5]=x,m[9]=R,m[13]=0,m[2]=0,m[6]=0,m[10]=D,m[14]=O,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,p=Ra,v=!1){const m=this.elements,S=2/(i-e),x=2/(r-l),E=-(i+e)/(i-e),R=-(r+l)/(r-l);let D,O;if(v)D=1/(d-u),O=d/(d-u);else if(p===Ra)D=-2/(d-u),O=-(d+u)/(d-u);else if(p===Vc)D=-1/(d-u),O=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=S,m[4]=0,m[8]=0,m[12]=E,m[1]=0,m[5]=x,m[9]=0,m[13]=R,m[2]=0,m[6]=0,m[10]=D,m[14]=O,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _o=new ft,va=new Rn,ES=new ft(0,0,0),TS=new ft(1,1,1),Xr=new ft,pc=new ft,Hi=new ft,Uv=new Rn,Lv=new Vl;class ur{constructor(e=0,i=0,r=0,l=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],v=l[1],m=l[5],S=l[9],x=l[2],E=l[6],R=l[10];switch(i){case"XYZ":this._y=Math.asin(Be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,R),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(E,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,R),this._z=Math.atan2(v,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Be(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-x,R),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(v,u));break;case"ZYX":this._y=Math.asin(-Be(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(E,R),this._z=Math.atan2(v,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(p,R));break;case"XZY":this._z=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(E,m),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-S,R),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Uv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Lv.setFromEuler(this),this.setFromQuaternion(Lv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class B_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bS=0;const Nv=new ft,xo=new Vl,$a=new Rn,mc=new ft,wl=new ft,AS=new ft,RS=new Vl,Ov=new ft(1,0,0),Pv=new ft(0,1,0),Fv=new ft(0,0,1),zv={type:"added"},CS={type:"removed"},yo={type:"childadded",child:null},xd={type:"childremoved",child:null};class _i extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_i.DEFAULT_UP.clone();const e=new ft,i=new ur,r=new Vl,l=new ft(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Rn},normalMatrix:{value:new Ce}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=_i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return xo.setFromAxisAngle(e,i),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,i){return xo.setFromAxisAngle(e,i),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(Ov,e)}rotateY(e){return this.rotateOnAxis(Pv,e)}rotateZ(e){return this.rotateOnAxis(Fv,e)}translateOnAxis(e,i){return Nv.copy(e).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ov,e)}translateY(e){return this.translateOnAxis(Pv,e)}translateZ(e){return this.translateOnAxis(Fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($a.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?mc.copy(e):mc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$a.lookAt(wl,mc,this.up):$a.lookAt(mc,wl,this.up),this.quaternion.setFromRotationMatrix($a),l&&($a.extractRotation(l.matrixWorld),xo.setFromRotationMatrix($a),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zv),yo.child=e,this.dispatchEvent(yo),yo.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(CS),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$a.multiply(e.parent.matrixWorld)),e.applyMatrix4($a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zv),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,RS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,v){return p[v.uuid]===void 0&&(p[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const v=p.shapes;if(Array.isArray(v))for(let m=0,S=v.length;m<S;m++){const x=v[m];u(e.shapes,x)}else u(e.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let v=0,m=this.material.length;v<m;v++)p.push(u(e.materials,this.material[v]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const v=this.animations[p];l.animations.push(u(e.animations,v))}}if(i){const p=d(e.geometries),v=d(e.materials),m=d(e.textures),S=d(e.images),x=d(e.shapes),E=d(e.skeletons),R=d(e.animations),D=d(e.nodes);p.length>0&&(r.geometries=p),v.length>0&&(r.materials=v),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),x.length>0&&(r.shapes=x),E.length>0&&(r.skeletons=E),R.length>0&&(r.animations=R),D.length>0&&(r.nodes=D)}return r.object=l,r;function d(p){const v=[];for(const m in p){const S=p[m];delete S.metadata,v.push(S)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}_i.DEFAULT_UP=new ft(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _a=new ft,tr=new ft,yd=new ft,er=new ft,So=new ft,Mo=new ft,Bv=new ft,Sd=new ft,Md=new ft,Ed=new ft,Td=new Ln,bd=new Ln,Ad=new Ln;class xa{constructor(e=new ft,i=new ft,r=new ft){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),_a.subVectors(e,i),l.cross(_a);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){_a.subVectors(l,i),tr.subVectors(r,i),yd.subVectors(e,i);const d=_a.dot(_a),p=_a.dot(tr),v=_a.dot(yd),m=tr.dot(tr),S=tr.dot(yd),x=d*m-p*p;if(x===0)return u.set(0,0,0),null;const E=1/x,R=(m*v-p*S)*E,D=(d*S-p*v)*E;return u.set(1-R-D,D,R)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,i,r,l,u,d,p,v){return this.getBarycoord(e,i,r,l,er)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(u,er.x),v.addScaledVector(d,er.y),v.addScaledVector(p,er.z),v)}static getInterpolatedAttribute(e,i,r,l,u,d){return Td.setScalar(0),bd.setScalar(0),Ad.setScalar(0),Td.fromBufferAttribute(e,i),bd.fromBufferAttribute(e,r),Ad.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Td,u.x),d.addScaledVector(bd,u.y),d.addScaledVector(Ad,u.z),d}static isFrontFacing(e,i,r,l){return _a.subVectors(r,i),tr.subVectors(e,i),_a.cross(tr).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _a.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),_a.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return xa.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return xa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,p;So.subVectors(l,r),Mo.subVectors(u,r),Sd.subVectors(e,r);const v=So.dot(Sd),m=Mo.dot(Sd);if(v<=0&&m<=0)return i.copy(r);Md.subVectors(e,l);const S=So.dot(Md),x=Mo.dot(Md);if(S>=0&&x<=S)return i.copy(l);const E=v*x-S*m;if(E<=0&&v>=0&&S<=0)return d=v/(v-S),i.copy(r).addScaledVector(So,d);Ed.subVectors(e,u);const R=So.dot(Ed),D=Mo.dot(Ed);if(D>=0&&R<=D)return i.copy(u);const O=R*m-v*D;if(O<=0&&m>=0&&D<=0)return p=m/(m-D),i.copy(r).addScaledVector(Mo,p);const T=S*D-R*x;if(T<=0&&x-S>=0&&R-D>=0)return Bv.subVectors(u,l),p=(x-S)/(x-S+(R-D)),i.copy(l).addScaledVector(Bv,p);const M=1/(T+O+E);return d=O*M,p=E*M,i.copy(r).addScaledVector(So,d).addScaledVector(Mo,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Rd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class We{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ra){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=ke.workingColorSpace){return this.r=e,this.g=i,this.b=r,ke.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=ke.workingColorSpace){if(e=mS(e,1),i=Be(i,0,1),r=Be(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Rd(d,u,e+1/3),this.g=Rd(d,u,e),this.b=Rd(d,u,e-1/3)}return ke.colorSpaceToWorking(this,l),this}setStyle(e,i=ra){function r(u){u!==void 0&&parseFloat(u)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:Me("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ra){const r=I_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ra){return ke.workingToColorSpace(ui.copy(this),e),Math.round(Be(ui.r*255,0,255))*65536+Math.round(Be(ui.g*255,0,255))*256+Math.round(Be(ui.b*255,0,255))}getHexString(e=ra){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ke.workingColorSpace){ke.workingToColorSpace(ui.copy(this),i);const r=ui.r,l=ui.g,u=ui.b,d=Math.max(r,l,u),p=Math.min(r,l,u);let v,m;const S=(p+d)/2;if(p===d)v=0,m=0;else{const x=d-p;switch(m=S<=.5?x/(d+p):x/(2-d-p),d){case r:v=(l-u)/x+(l<u?6:0);break;case l:v=(u-r)/x+2;break;case u:v=(r-l)/x+4;break}v/=6}return e.h=v,e.s=m,e.l=S,e}getRGB(e,i=ke.workingColorSpace){return ke.workingToColorSpace(ui.copy(this),i),e.r=ui.r,e.g=ui.g,e.b=ui.b,e}getStyle(e=ra){ke.workingToColorSpace(ui.copy(this),e);const i=ui.r,r=ui.g,l=ui.b;return e!==ra?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+i,kr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(kr),e.getHSL(gc);const r=ud(kr.h,gc.h,i),l=ud(kr.s,gc.s,i),u=ud(kr.l,gc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ui=new We;We.NAMES=I_;let wS=0;class Po extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Gl(),this.name="",this.type="Material",this.blending=Ro,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Vd,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){Me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(r.blending=this.blending),this.side!==Zr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gd&&(r.blendSrc=this.blendSrc),this.blendDst!==Vd&&(r.blendDst=this.blendDst),this.blendEquation!==bs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ev&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const p in u){const v=u[p];delete v.metadata,d.push(v)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Il extends Po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vn=new ft,vc=new $e;let DS=0;class Xi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Tv,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix3(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Al(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Ai(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Al(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ai(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Al(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ai(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Al(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ai(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Al(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ai(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Ai(i,this.array),r=Ai(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Ai(i,this.array),r=Ai(r,this.array),l=Ai(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Ai(i,this.array),r=Ai(r,this.array),l=Ai(l,this.array),u=Ai(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tv&&(e.usage=this.usage),e}}class H_ extends Xi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class G_ extends Xi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ki extends Xi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let US=0;const aa=new Rn,Cd=new _i,Eo=new ft,Gi=new Xl,Dl=new Xl,Kn=new ft;class wi extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?G_:H_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Ce().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return aa.makeRotationFromQuaternion(e),this.applyMatrix4(aa),this}rotateX(e){return aa.makeRotationX(e),this.applyMatrix4(aa),this}rotateY(e){return aa.makeRotationY(e),this.applyMatrix4(aa),this}rotateZ(e){return aa.makeRotationZ(e),this.applyMatrix4(aa),this}translate(e,i,r){return aa.makeTranslation(e,i,r),this.applyMatrix4(aa),this}scale(e,i,r){return aa.makeScale(e,i,r),this.applyMatrix4(aa),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ki(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Gi.setFromBufferAttribute(u),this.morphTargetsRelative?(Kn.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint(Kn),Kn.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint(Kn)):(this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(e){const r=this.boundingSphere.center;if(Gi.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Dl.setFromBufferAttribute(p),this.morphTargetsRelative?(Kn.addVectors(Gi.min,Dl.min),Gi.expandByPoint(Kn),Kn.addVectors(Gi.max,Dl.max),Gi.expandByPoint(Kn)):(Gi.expandByPoint(Dl.min),Gi.expandByPoint(Dl.max))}Gi.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Kn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Kn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],v=this.morphTargetsRelative;for(let m=0,S=p.count;m<S;m++)Kn.fromBufferAttribute(p,m),v&&(Eo.fromBufferAttribute(e,m),Kn.add(Eo)),l=Math.max(l,r.distanceToSquared(Kn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],v=[];for(let at=0;at<r.count;at++)p[at]=new ft,v[at]=new ft;const m=new ft,S=new ft,x=new ft,E=new $e,R=new $e,D=new $e,O=new ft,T=new ft;function M(at,L,b){m.fromBufferAttribute(r,at),S.fromBufferAttribute(r,L),x.fromBufferAttribute(r,b),E.fromBufferAttribute(u,at),R.fromBufferAttribute(u,L),D.fromBufferAttribute(u,b),S.sub(m),x.sub(m),R.sub(E),D.sub(E);const P=1/(R.x*D.y-D.x*R.y);isFinite(P)&&(O.copy(S).multiplyScalar(D.y).addScaledVector(x,-R.y).multiplyScalar(P),T.copy(x).multiplyScalar(R.x).addScaledVector(S,-D.x).multiplyScalar(P),p[at].add(O),p[L].add(O),p[b].add(O),v[at].add(T),v[L].add(T),v[b].add(T))}let G=this.groups;G.length===0&&(G=[{start:0,count:e.count}]);for(let at=0,L=G.length;at<L;++at){const b=G[at],P=b.start,tt=b.count;for(let K=P,dt=P+tt;K<dt;K+=3)M(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const V=new ft,F=new ft,q=new ft,Y=new ft;function X(at){q.fromBufferAttribute(l,at),Y.copy(q);const L=p[at];V.copy(L),V.sub(q.multiplyScalar(q.dot(L))).normalize(),F.crossVectors(Y,L);const P=F.dot(v[at])<0?-1:1;d.setXYZW(at,V.x,V.y,V.z,P)}for(let at=0,L=G.length;at<L;++at){const b=G[at],P=b.start,tt=b.count;for(let K=P,dt=P+tt;K<dt;K+=3)X(e.getX(K+0)),X(e.getX(K+1)),X(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let E=0,R=r.count;E<R;E++)r.setXYZ(E,0,0,0);const l=new ft,u=new ft,d=new ft,p=new ft,v=new ft,m=new ft,S=new ft,x=new ft;if(e)for(let E=0,R=e.count;E<R;E+=3){const D=e.getX(E+0),O=e.getX(E+1),T=e.getX(E+2);l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,O),d.fromBufferAttribute(i,T),S.subVectors(d,u),x.subVectors(l,u),S.cross(x),p.fromBufferAttribute(r,D),v.fromBufferAttribute(r,O),m.fromBufferAttribute(r,T),p.add(S),v.add(S),m.add(S),r.setXYZ(D,p.x,p.y,p.z),r.setXYZ(O,v.x,v.y,v.z),r.setXYZ(T,m.x,m.y,m.z)}else for(let E=0,R=i.count;E<R;E+=3)l.fromBufferAttribute(i,E+0),u.fromBufferAttribute(i,E+1),d.fromBufferAttribute(i,E+2),S.subVectors(d,u),x.subVectors(l,u),S.cross(x),r.setXYZ(E+0,S.x,S.y,S.z),r.setXYZ(E+1,S.x,S.y,S.z),r.setXYZ(E+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Kn.fromBufferAttribute(e,i),Kn.normalize(),e.setXYZ(i,Kn.x,Kn.y,Kn.z)}toNonIndexed(){function e(p,v){const m=p.array,S=p.itemSize,x=p.normalized,E=new m.constructor(v.length*S);let R=0,D=0;for(let O=0,T=v.length;O<T;O++){p.isInterleavedBufferAttribute?R=v[O]*p.data.stride+p.offset:R=v[O]*S;for(let M=0;M<S;M++)E[D++]=m[R++]}return new Xi(E,S,x)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wi,r=this.index.array,l=this.attributes;for(const p in l){const v=l[p],m=e(v,r);i.setAttribute(p,m)}const u=this.morphAttributes;for(const p in u){const v=[],m=u[p];for(let S=0,x=m.length;S<x;S++){const E=m[S],R=e(E,r);v.push(R)}i.morphAttributes[p]=v}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,v=d.length;p<v;p++){const m=d[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const m in v)v[m]!==void 0&&(e[m]=v[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const v in r){const m=r[v];e.data.attributes[v]=m.toJSON(e.data)}const l={};let u=!1;for(const v in this.morphAttributes){const m=this.morphAttributes[v],S=[];for(let x=0,E=m.length;x<E;x++){const R=m[x];S.push(R.toJSON(e.data))}S.length>0&&(l[v]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const u=e.morphAttributes;for(const m in u){const S=[],x=u[m];for(let E=0,R=x.length;E<R;E++)S.push(x[E].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iv=new Rn,ys=new Zp,_c=new kl,Hv=new ft,xc=new ft,yc=new ft,Sc=new ft,wd=new ft,Mc=new ft,Gv=new ft,Ec=new ft;class pi extends _i{constructor(e=new wi,i=new Il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Mc.set(0,0,0);for(let v=0,m=u.length;v<m;v++){const S=p[v],x=u[v];S!==0&&(wd.fromBufferAttribute(x,e),d?Mc.addScaledVector(wd,S):Mc.addScaledVector(wd.sub(i),S))}i.add(Mc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(u),ys.copy(e.ray).recast(e.near),!(_c.containsPoint(ys.origin)===!1&&(ys.intersectSphere(_c,Hv)===null||ys.origin.distanceToSquared(Hv)>(e.far-e.near)**2))&&(Iv.copy(u).invert(),ys.copy(e.ray).applyMatrix4(Iv),!(r.boundingBox!==null&&ys.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ys)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,p=u.index,v=u.attributes.position,m=u.attributes.uv,S=u.attributes.uv1,x=u.attributes.normal,E=u.groups,R=u.drawRange;if(p!==null)if(Array.isArray(d))for(let D=0,O=E.length;D<O;D++){const T=E[D],M=d[T.materialIndex],G=Math.max(T.start,R.start),V=Math.min(p.count,Math.min(T.start+T.count,R.start+R.count));for(let F=G,q=V;F<q;F+=3){const Y=p.getX(F),X=p.getX(F+1),at=p.getX(F+2);l=Tc(this,M,e,r,m,S,x,Y,X,at),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const D=Math.max(0,R.start),O=Math.min(p.count,R.start+R.count);for(let T=D,M=O;T<M;T+=3){const G=p.getX(T),V=p.getX(T+1),F=p.getX(T+2);l=Tc(this,d,e,r,m,S,x,G,V,F),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(d))for(let D=0,O=E.length;D<O;D++){const T=E[D],M=d[T.materialIndex],G=Math.max(T.start,R.start),V=Math.min(v.count,Math.min(T.start+T.count,R.start+R.count));for(let F=G,q=V;F<q;F+=3){const Y=F,X=F+1,at=F+2;l=Tc(this,M,e,r,m,S,x,Y,X,at),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const D=Math.max(0,R.start),O=Math.min(v.count,R.start+R.count);for(let T=D,M=O;T<M;T+=3){const G=T,V=T+1,F=T+2;l=Tc(this,d,e,r,m,S,x,G,V,F),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}}}function LS(o,e,i,r,l,u,d,p){let v;if(e.side===gi?v=r.intersectTriangle(d,u,l,!0,p):v=r.intersectTriangle(l,u,d,e.side===Zr,p),v===null)return null;Ec.copy(p),Ec.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Ec);return m<i.near||m>i.far?null:{distance:m,point:Ec.clone(),object:o}}function Tc(o,e,i,r,l,u,d,p,v,m){o.getVertexPosition(p,xc),o.getVertexPosition(v,yc),o.getVertexPosition(m,Sc);const S=LS(o,e,i,r,xc,yc,Sc,Gv);if(S){const x=new ft;xa.getBarycoord(Gv,xc,yc,Sc,x),l&&(S.uv=xa.getInterpolatedAttribute(l,p,v,m,x,new $e)),u&&(S.uv1=xa.getInterpolatedAttribute(u,p,v,m,x,new $e)),d&&(S.normal=xa.getInterpolatedAttribute(d,p,v,m,x,new ft),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const E={a:p,b:v,c:m,normal:new ft,materialIndex:0};xa.getNormal(xc,yc,Sc,E.normal),S.face=E,S.barycoord=x}return S}class Wl extends wi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const v=[],m=[],S=[],x=[];let E=0,R=0;D("z","y","x",-1,-1,r,i,e,d,u,0),D("z","y","x",1,-1,r,i,-e,d,u,1),D("x","z","y",1,1,e,r,i,l,d,2),D("x","z","y",1,-1,e,r,-i,l,d,3),D("x","y","z",1,-1,e,i,r,l,u,4),D("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(v),this.setAttribute("position",new ki(m,3)),this.setAttribute("normal",new ki(S,3)),this.setAttribute("uv",new ki(x,2));function D(O,T,M,G,V,F,q,Y,X,at,L){const b=F/X,P=q/at,tt=F/2,K=q/2,dt=Y/2,pt=X+1,N=at+1;let I=0,nt=0;const Et=new ft;for(let At=0;At<N;At++){const H=At*P-K;for(let ot=0;ot<pt;ot++){const Tt=ot*b-tt;Et[O]=Tt*G,Et[T]=H*V,Et[M]=dt,m.push(Et.x,Et.y,Et.z),Et[O]=0,Et[T]=0,Et[M]=Y>0?1:-1,S.push(Et.x,Et.y,Et.z),x.push(ot/X),x.push(1-At/at),I+=1}}for(let At=0;At<at;At++)for(let H=0;H<X;H++){const ot=E+H+pt*At,Tt=E+H+pt*(At+1),Pt=E+(H+1)+pt*(At+1),qt=E+(H+1)+pt*At;v.push(ot,Tt,qt),v.push(Tt,Pt,qt),nt+=6}p.addGroup(R,nt,L),R+=nt,E+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function No(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function di(o){const e={};for(let i=0;i<o.length;i++){const r=No(o[i]);for(const l in r)e[l]=r[l]}return e}function NS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function V_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const OS={clone:No,merge:di};var PS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PS,this.fragmentShader=FS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=NS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class X_ extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=Ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new ft,Vv=new $e,Xv=new $e;class sa extends X_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,i){return this.getViewBounds(e,Vv,Xv),i.subVectors(Xv,Vv)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ld*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const v=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/v,i-=d.offsetY*r/m,l*=d.width/v,r*=d.height/m}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const To=-90,bo=1;class zS extends _i{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new sa(To,bo,e,i);l.layers=this.layers,this.add(l);const u=new sa(To,bo,e,i);u.layers=this.layers,this.add(u);const d=new sa(To,bo,e,i);d.layers=this.layers,this.add(d);const p=new sa(To,bo,e,i);p.layers=this.layers,this.add(p);const v=new sa(To,bo,e,i);v.layers=this.layers,this.add(v);const m=new sa(To,bo,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,p,v]=i;for(const m of i)this.remove(m);if(e===Ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===Vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,v,m,S]=this.children,x=e.getRenderTarget(),E=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),D=e.xr.enabled;e.xr.enabled=!1;const O=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,p),e.setRenderTarget(r,3,l),e.render(i,v),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=O,e.setRenderTarget(r,5,l),e.render(i,S),e.setRenderTarget(x,E,R),e.xr.enabled=D,r.texture.needsPMREMUpdate=!0}}class k_ extends vi{constructor(e=[],i=ws,r,l,u,d,p,v,m,S){super(e,i,r,l,u,d,p,v,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W_ extends Ci{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new k_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Wl(5,5,5),u=new mi({name:"CubemapFromEquirect",uniforms:No(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gi,blending:rr});u.uniforms.tEquirect.value=i;const d=new pi(l,u),p=i.minFilter;return i.minFilter===Rs&&(i.minFilter=ci),new zS(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class bc extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BS={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const p=this._targetRay,v=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const O of e.hand.values()){const T=i.getJointPose(O,r),M=this._getHandJoint(m,O);T!==null&&(M.matrix.fromArray(T.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=T.radius),M.visible=T!==null}const S=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],E=S.position.distanceTo(x.position),R=.02,D=.005;m.inputState.pinching&&E>R+D?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&E<=R-D&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(v.matrix.fromArray(u.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,u.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(u.linearVelocity)):v.hasLinearVelocity=!1,u.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(u.angularVelocity)):v.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(BS)))}return p!==null&&(p.visible=l!==null),v!==null&&(v.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new bc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class q_ extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Np extends vi{constructor(e=null,i=1,r=1,l,u,d,p,v,m=qn,S=qn,x,E){super(null,d,p,v,m,S,l,u,x,E),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ud=new ft,IS=new ft,HS=new Ce;class Ts{constructor(e=new ft(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ud.subVectors(r,i).cross(IS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Ud),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||HS.getNormalMatrix(e),l=this.coplanarPoint(Ud).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new kl,GS=new $e(.5,.5),Ac=new ft;class Y_{constructor(e=new Ts,i=new Ts,r=new Ts,l=new Ts,u=new Ts,d=new Ts){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ra,r=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],v=u[2],m=u[3],S=u[4],x=u[5],E=u[6],R=u[7],D=u[8],O=u[9],T=u[10],M=u[11],G=u[12],V=u[13],F=u[14],q=u[15];if(l[0].setComponents(m-d,R-S,M-D,q-G).normalize(),l[1].setComponents(m+d,R+S,M+D,q+G).normalize(),l[2].setComponents(m+p,R+x,M+O,q+V).normalize(),l[3].setComponents(m-p,R-x,M-O,q-V).normalize(),r)l[4].setComponents(v,E,T,F).normalize(),l[5].setComponents(m-v,R-E,M-T,q-F).normalize();else if(l[4].setComponents(m-v,R-E,M-T,q-F).normalize(),i===Ra)l[5].setComponents(m+v,R+E,M+T,q+F).normalize();else if(i===Vc)l[5].setComponents(v,E,T,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const i=GS.distanceTo(e.center);return Ss.radius=.7071067811865476+i,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ac.x=l.normal.x>0?e.max.x:e.min.x,Ac.y=l.normal.y>0?e.max.y:e.min.y,Ac.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class VS extends Po{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new ft,Wc=new ft,kv=new Rn,Ul=new Zp,Rc=new kl,Ld=new ft,Wv=new ft;class XS extends _i{constructor(e=new wi,i=new VS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)kc.fromBufferAttribute(i,l-1),Wc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=kc.distanceTo(Wc);e.setAttribute("lineDistance",new ki(r,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=u,e.ray.intersectsSphere(Rc)===!1)return;kv.copy(l).invert(),Ul.copy(e.ray).applyMatrix4(kv);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),v=p*p,m=this.isLineSegments?2:1,S=r.index,E=r.attributes.position;if(S!==null){const R=Math.max(0,d.start),D=Math.min(S.count,d.start+d.count);for(let O=R,T=D-1;O<T;O+=m){const M=S.getX(O),G=S.getX(O+1),V=Cc(this,e,Ul,v,M,G,O);V&&i.push(V)}if(this.isLineLoop){const O=S.getX(D-1),T=S.getX(R),M=Cc(this,e,Ul,v,O,T,D-1);M&&i.push(M)}}else{const R=Math.max(0,d.start),D=Math.min(E.count,d.start+d.count);for(let O=R,T=D-1;O<T;O+=m){const M=Cc(this,e,Ul,v,O,O+1,O);M&&i.push(M)}if(this.isLineLoop){const O=Cc(this,e,Ul,v,D-1,R,D-1);O&&i.push(O)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function Cc(o,e,i,r,l,u,d){const p=o.geometry.attributes.position;if(kc.fromBufferAttribute(p,l),Wc.fromBufferAttribute(p,u),i.distanceSqToSegment(kc,Wc,Ld,Wv)>r)return;Ld.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Ld);if(!(m<e.near||m>e.far))return{distance:m,point:Wv.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class kS extends Po{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qv=new Rn,Op=new Zp,wc=new kl,Dc=new ft;class WS extends _i{constructor(e=new wi,i=new kS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(l),wc.radius+=u,e.ray.intersectsSphere(wc)===!1)return;qv.copy(l).invert(),Op.copy(e.ray).applyMatrix4(qv);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),v=p*p,m=r.index,x=r.attributes.position;if(m!==null){const E=Math.max(0,d.start),R=Math.min(m.count,d.start+d.count);for(let D=E,O=R;D<O;D++){const T=m.getX(D);Dc.fromBufferAttribute(x,T),Yv(Dc,T,v,l,e,i,this)}}else{const E=Math.max(0,d.start),R=Math.min(x.count,d.start+d.count);for(let D=E,O=R;D<O;D++)Dc.fromBufferAttribute(x,D),Yv(Dc,D,v,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function Yv(o,e,i,r,l,u,d){const p=Op.distanceSqToPoint(o);if(p<i){const v=new ft;Op.closestPointToPoint(o,v),v.applyMatrix4(r);const m=l.ray.origin.distanceTo(v);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(p),point:v,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Hl extends vi{constructor(e,i,r=wa,l,u,d,p=qn,v=qn,m,S=lr,x=1){if(S!==lr&&S!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const E={width:e,height:i,depth:x};super(E,l,u,d,p,v,S,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qS extends Hl{constructor(e,i=wa,r=ws,l,u,d=qn,p=qn,v,m=lr){const S={width:e,height:e,depth:1},x=[S,S,S,S,S,S];super(e,e,i,r,l,u,d,p,v,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class j_ extends vi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yr extends wi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(r),v=Math.floor(l),m=p+1,S=v+1,x=e/p,E=i/v,R=[],D=[],O=[],T=[];for(let M=0;M<S;M++){const G=M*E-d;for(let V=0;V<m;V++){const F=V*x-u;D.push(F,-G,0),O.push(0,0,1),T.push(V/p),T.push(1-M/v)}}for(let M=0;M<v;M++)for(let G=0;G<p;G++){const V=G+m*M,F=G+m*(M+1),q=G+1+m*(M+1),Y=G+1+m*M;R.push(V,F,Y),R.push(F,q,Y)}this.setIndex(R),this.setAttribute("position",new ki(D,3)),this.setAttribute("normal",new ki(O,3)),this.setAttribute("uv",new ki(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class qc extends wi{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const v=Math.min(d+p,Math.PI);let m=0;const S=[],x=new ft,E=new ft,R=[],D=[],O=[],T=[];for(let M=0;M<=r;M++){const G=[],V=M/r;let F=0;M===0&&d===0?F=.5/i:M===r&&v===Math.PI&&(F=-.5/i);for(let q=0;q<=i;q++){const Y=q/i;x.x=-e*Math.cos(l+Y*u)*Math.sin(d+V*p),x.y=e*Math.cos(d+V*p),x.z=e*Math.sin(l+Y*u)*Math.sin(d+V*p),D.push(x.x,x.y,x.z),E.copy(x).normalize(),O.push(E.x,E.y,E.z),T.push(Y+F,1-V),G.push(m++)}S.push(G)}for(let M=0;M<r;M++)for(let G=0;G<i;G++){const V=S[M][G+1],F=S[M][G],q=S[M+1][G],Y=S[M+1][G+1];(M!==0||d>0)&&R.push(V,F,Y),(M!==r-1||v<Math.PI)&&R.push(F,q,Y)}this.setIndex(R),this.setAttribute("position",new ki(D,3)),this.setAttribute("normal",new ki(O,3)),this.setAttribute("uv",new ki(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class YS extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jS extends Po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZS extends Po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kp extends X_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,p=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,p-=S*this.view.offsetY,v=p-S*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class KS extends sa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class QS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function jv(o,e,i,r){const l=JS(r);switch(i){case N_:return o*e;case P_:return o*e/l.components*l.byteLength;case Xp:return o*e/l.components*l.byteLength;case Uo:return o*e*2/l.components*l.byteLength;case kp:return o*e*2/l.components*l.byteLength;case O_:return o*e*3/l.components*l.byteLength;case Ri:return o*e*4/l.components*l.byteLength;case Wp:return o*e*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Fc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ep:case ip:return Math.max(o,16)*Math.max(e,8)/4;case tp:case np:return Math.max(o,8)*Math.max(e,8)/2;case ap:case rp:case op:case lp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case sp:case up:case cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case dp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case pp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case mp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case gp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case _p:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case xp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Tp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bp:case Ap:case Rp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Cp:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Dp:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JS(o){switch(o){case oa:case w_:return{byteLength:1,components:1};case Fl:case D_:case or:return{byteLength:2,components:1};case Gp:case Vp:return{byteLength:2,components:4};case wa:case Hp:case Vi:return{byteLength:4,components:1};case U_:case L_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);function Z_(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function $S(o){const e=new WeakMap;function i(p,v){const m=p.array,S=p.usage,x=m.byteLength,E=o.createBuffer();o.bindBuffer(v,E),o.bufferData(v,m,S),p.onUploadCallback();let R;if(m instanceof Float32Array)R=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)R=o.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?R=o.HALF_FLOAT:R=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)R=o.SHORT;else if(m instanceof Uint32Array)R=o.UNSIGNED_INT;else if(m instanceof Int32Array)R=o.INT;else if(m instanceof Int8Array)R=o.BYTE;else if(m instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:E,type:R,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,v,m){const S=v.array,x=v.updateRanges;if(o.bindBuffer(m,p),x.length===0)o.bufferSubData(m,0,S);else{x.sort((R,D)=>R.start-D.start);let E=0;for(let R=1;R<x.length;R++){const D=x[E],O=x[R];O.start<=D.start+D.count+1?D.count=Math.max(D.count,O.start+O.count-D.start):(++E,x[E]=O)}x.length=E+1;for(let R=0,D=x.length;R<D;R++){const O=x[R];o.bufferSubData(m,O.start*S.BYTES_PER_ELEMENT,S,O.start,O.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const v=e.get(p);v&&(o.deleteBuffer(v.buffer),e.delete(p))}function d(p,v){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=e.get(p);(!S||S.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=e.get(p);if(m===void 0)e.set(p,i(p,v));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,p,v),m.version=p.version}}return{get:l,remove:u,update:d}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,EM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_T=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ST=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,UT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,we={alphahash_fragment:tM,alphahash_pars_fragment:eM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:aM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:oM,batching_pars_vertex:lM,batching_vertex:uM,begin_vertex:cM,beginnormal_vertex:fM,bsdfs:hM,iridescence_fragment:dM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:vM,clipping_planes_vertex:_M,color_fragment:xM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:MM,common:EM,cube_uv_reflection_fragment:TM,defaultnormal_vertex:bM,displacementmap_pars_vertex:AM,displacementmap_vertex:RM,emissivemap_fragment:CM,emissivemap_pars_fragment:wM,colorspace_fragment:DM,colorspace_pars_fragment:UM,envmap_fragment:LM,envmap_common_pars_fragment:NM,envmap_pars_fragment:OM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:qM,envmap_vertex:FM,fog_vertex:zM,fog_pars_vertex:BM,fog_fragment:IM,fog_pars_fragment:HM,gradientmap_pars_fragment:GM,lightmap_pars_fragment:VM,lights_lambert_fragment:XM,lights_lambert_pars_fragment:kM,lights_pars_begin:WM,lights_toon_fragment:YM,lights_toon_pars_fragment:jM,lights_phong_fragment:ZM,lights_phong_pars_fragment:KM,lights_physical_fragment:QM,lights_physical_pars_fragment:JM,lights_fragment_begin:$M,lights_fragment_maps:tE,lights_fragment_end:eE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:oE,map_particle_fragment:lE,map_particle_pars_fragment:uE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:fE,morphinstance_vertex:hE,morphcolor_vertex:dE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:vE,normal_fragment_maps:_E,normal_pars_fragment:xE,normal_pars_vertex:yE,normal_vertex:SE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:AE,opaque_fragment:RE,packing:CE,premultiplied_alpha_fragment:wE,project_vertex:DE,dithering_fragment:UE,dithering_pars_fragment:LE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:FE,shadowmap_vertex:zE,shadowmask_pars_fragment:BE,skinbase_vertex:IE,skinning_pars_vertex:HE,skinning_vertex:GE,skinnormal_vertex:VE,specularmap_fragment:XE,specularmap_pars_fragment:kE,tonemapping_fragment:WE,tonemapping_pars_fragment:qE,transmission_fragment:YE,transmission_pars_fragment:jE,uv_pars_fragment:ZE,uv_pars_vertex:KE,uv_vertex:QE,worldpos_vertex:JE,background_vert:$E,background_frag:tT,backgroundCube_vert:eT,backgroundCube_frag:nT,cube_vert:iT,cube_frag:aT,depth_vert:rT,depth_frag:sT,distance_vert:oT,distance_frag:lT,equirect_vert:uT,equirect_frag:cT,linedashed_vert:fT,linedashed_frag:hT,meshbasic_vert:dT,meshbasic_frag:pT,meshlambert_vert:mT,meshlambert_frag:gT,meshmatcap_vert:vT,meshmatcap_frag:_T,meshnormal_vert:xT,meshnormal_frag:yT,meshphong_vert:ST,meshphong_frag:MT,meshphysical_vert:ET,meshphysical_frag:TT,meshtoon_vert:bT,meshtoon_frag:AT,points_vert:RT,points_frag:CT,shadow_vert:wT,shadow_frag:DT,sprite_vert:UT,sprite_frag:LT},jt={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Aa={basic:{uniforms:di([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:di([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new We(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:di([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:di([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:di([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new We(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:di([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:di([jt.points,jt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:di([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:di([jt.common,jt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:di([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:di([jt.sprite,jt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distance:{uniforms:di([jt.common,jt.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distance_vert,fragmentShader:we.distance_frag},shadow:{uniforms:di([jt.lights,jt.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Aa.physical={uniforms:di([Aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Uc={r:0,b:0,g:0},Ms=new ur,NT=new Rn;function OT(o,e,i,r,l,u,d){const p=new We(0);let v=u===!0?0:1,m,S,x=null,E=0,R=null;function D(V){let F=V.isScene===!0?V.background:null;return F&&F.isTexture&&(F=(V.backgroundBlurriness>0?i:e).get(F)),F}function O(V){let F=!1;const q=D(V);q===null?M(p,v):q&&q.isColor&&(M(q,1),F=!0);const Y=o.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,d):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function T(V,F){const q=D(F);q&&(q.isCubeTexture||q.mapping===Yc)?(S===void 0&&(S=new pi(new Wl(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:No(Aa.backgroundCube.uniforms),vertexShader:Aa.backgroundCube.vertexShader,fragmentShader:Aa.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(Y,X,at){this.matrixWorld.copyPosition(at.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),Ms.copy(F.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),S.material.uniforms.envMap.value=q,S.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(NT.makeRotationFromEuler(Ms)),S.material.toneMapped=ke.getTransfer(q.colorSpace)!==an,(x!==q||E!==q.version||R!==o.toneMapping)&&(S.material.needsUpdate=!0,x=q,E=q.version,R=o.toneMapping),S.layers.enableAll(),V.unshift(S,S.geometry,S.material,0,0,null)):q&&q.isTexture&&(m===void 0&&(m=new pi(new Yr(2,2),new mi({name:"BackgroundMaterial",uniforms:No(Aa.background.uniforms),vertexShader:Aa.background.vertexShader,fragmentShader:Aa.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=q,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=ke.getTransfer(q.colorSpace)!==an,q.matrixAutoUpdate===!0&&q.updateMatrix(),m.material.uniforms.uvTransform.value.copy(q.matrix),(x!==q||E!==q.version||R!==o.toneMapping)&&(m.material.needsUpdate=!0,x=q,E=q.version,R=o.toneMapping),m.layers.enableAll(),V.unshift(m,m.geometry,m.material,0,0,null))}function M(V,F){V.getRGB(Uc,V_(o)),r.buffers.color.setClear(Uc.r,Uc.g,Uc.b,F,d)}function G(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return p},setClearColor:function(V,F=1){p.set(V),v=F,M(p,v)},getClearAlpha:function(){return v},setClearAlpha:function(V){v=V,M(p,v)},render:O,addToRenderList:T,dispose:G}}function PT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=E(null);let u=l,d=!1;function p(b,P,tt,K,dt){let pt=!1;const N=x(K,tt,P);u!==N&&(u=N,m(u.object)),pt=R(b,K,tt,dt),pt&&D(b,K,tt,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(pt||d)&&(d=!1,F(b,P,tt,K),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function v(){return o.createVertexArray()}function m(b){return o.bindVertexArray(b)}function S(b){return o.deleteVertexArray(b)}function x(b,P,tt){const K=tt.wireframe===!0;let dt=r[b.id];dt===void 0&&(dt={},r[b.id]=dt);let pt=dt[P.id];pt===void 0&&(pt={},dt[P.id]=pt);let N=pt[K];return N===void 0&&(N=E(v()),pt[K]=N),N}function E(b){const P=[],tt=[],K=[];for(let dt=0;dt<i;dt++)P[dt]=0,tt[dt]=0,K[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:tt,attributeDivisors:K,object:b,attributes:{},index:null}}function R(b,P,tt,K){const dt=u.attributes,pt=P.attributes;let N=0;const I=tt.getAttributes();for(const nt in I)if(I[nt].location>=0){const At=dt[nt];let H=pt[nt];if(H===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),At===void 0||At.attribute!==H||H&&At.data!==H.data)return!0;N++}return u.attributesNum!==N||u.index!==K}function D(b,P,tt,K){const dt={},pt=P.attributes;let N=0;const I=tt.getAttributes();for(const nt in I)if(I[nt].location>=0){let At=pt[nt];At===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(At=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(At=b.instanceColor));const H={};H.attribute=At,At&&At.data&&(H.data=At.data),dt[nt]=H,N++}u.attributes=dt,u.attributesNum=N,u.index=K}function O(){const b=u.newAttributes;for(let P=0,tt=b.length;P<tt;P++)b[P]=0}function T(b){M(b,0)}function M(b,P){const tt=u.newAttributes,K=u.enabledAttributes,dt=u.attributeDivisors;tt[b]=1,K[b]===0&&(o.enableVertexAttribArray(b),K[b]=1),dt[b]!==P&&(o.vertexAttribDivisor(b,P),dt[b]=P)}function G(){const b=u.newAttributes,P=u.enabledAttributes;for(let tt=0,K=P.length;tt<K;tt++)P[tt]!==b[tt]&&(o.disableVertexAttribArray(tt),P[tt]=0)}function V(b,P,tt,K,dt,pt,N){N===!0?o.vertexAttribIPointer(b,P,tt,dt,pt):o.vertexAttribPointer(b,P,tt,K,dt,pt)}function F(b,P,tt,K){O();const dt=K.attributes,pt=tt.getAttributes(),N=P.defaultAttributeValues;for(const I in pt){const nt=pt[I];if(nt.location>=0){let Et=dt[I];if(Et===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor)),Et!==void 0){const At=Et.normalized,H=Et.itemSize,ot=e.get(Et);if(ot===void 0)continue;const Tt=ot.buffer,Pt=ot.type,qt=ot.bytesPerElement,ht=Pt===o.INT||Pt===o.UNSIGNED_INT||Et.gpuType===Hp;if(Et.isInterleavedBufferAttribute){const yt=Et.data,Vt=yt.stride,te=Et.offset;if(yt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<nt.locationSize;Jt++)M(nt.location+Jt,yt.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Jt=0;Jt<nt.locationSize;Jt++)T(nt.location+Jt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Jt=0;Jt<nt.locationSize;Jt++)V(nt.location+Jt,H/nt.locationSize,Pt,At,Vt*qt,(te+H/nt.locationSize*Jt)*qt,ht)}else{if(Et.isInstancedBufferAttribute){for(let yt=0;yt<nt.locationSize;yt++)M(nt.location+yt,Et.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let yt=0;yt<nt.locationSize;yt++)T(nt.location+yt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let yt=0;yt<nt.locationSize;yt++)V(nt.location+yt,H/nt.locationSize,Pt,At,H*qt,H/nt.locationSize*yt*qt,ht)}}else if(N!==void 0){const At=N[I];if(At!==void 0)switch(At.length){case 2:o.vertexAttrib2fv(nt.location,At);break;case 3:o.vertexAttrib3fv(nt.location,At);break;case 4:o.vertexAttrib4fv(nt.location,At);break;default:o.vertexAttrib1fv(nt.location,At)}}}}G()}function q(){at();for(const b in r){const P=r[b];for(const tt in P){const K=P[tt];for(const dt in K)S(K[dt].object),delete K[dt];delete P[tt]}delete r[b]}}function Y(b){if(r[b.id]===void 0)return;const P=r[b.id];for(const tt in P){const K=P[tt];for(const dt in K)S(K[dt].object),delete K[dt];delete P[tt]}delete r[b.id]}function X(b){for(const P in r){const tt=r[P];if(tt[b.id]===void 0)continue;const K=tt[b.id];for(const dt in K)S(K[dt].object),delete K[dt];delete tt[b.id]}}function at(){L(),d=!0,u!==l&&(u=l,m(u.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:at,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:Y,releaseStatesOfProgram:X,initAttributes:O,enableAttribute:T,disableUnusedAttributes:G}}function FT(o,e,i){let r;function l(m){r=m}function u(m,S){o.drawArrays(r,m,S),i.update(S,r,1)}function d(m,S,x){x!==0&&(o.drawArraysInstanced(r,m,S,x),i.update(S,r,x))}function p(m,S,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,S,0,x);let R=0;for(let D=0;D<x;D++)R+=S[D];i.update(R,r,1)}function v(m,S,x,E){if(x===0)return;const R=e.get("WEBGL_multi_draw");if(R===null)for(let D=0;D<m.length;D++)d(m[D],S[D],E[D]);else{R.multiDrawArraysInstancedWEBGL(r,m,0,S,0,E,0,x);let D=0;for(let O=0;O<x;O++)D+=S[O]*E[O];i.update(D,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function zT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(X){return!(X!==Ri&&r.convert(X)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(X){const at=X===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(X!==oa&&r.convert(X)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&X!==Vi&&!at)}function v(X){if(X==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";X="mediump"}return X==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=v(m);S!==m&&(Me("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const x=i.logarithmicDepthBuffer===!0,E=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),R=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),O=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),G=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),V=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),q=o.getParameter(o.MAX_SAMPLES),Y=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:v,textureFormatReadable:d,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:E,maxTextures:R,maxVertexTextures:D,maxTextureSize:O,maxCubemapSize:T,maxAttributes:M,maxVertexUniforms:G,maxVaryings:V,maxFragmentUniforms:F,maxSamples:q,samples:Y}}function BT(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Ts,p=new Ce,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(x,E){const R=x.length!==0||E||r!==0||l;return l=E,r=x.length,R},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,E){i=S(x,E,0)},this.setState=function(x,E,R){const D=x.clippingPlanes,O=x.clipIntersection,T=x.clipShadows,M=o.get(x);if(!l||D===null||D.length===0||u&&!T)u?S(null):m();else{const G=u?0:r,V=G*4;let F=M.clippingState||null;v.value=F,F=S(D,E,V,R);for(let q=0;q!==V;++q)F[q]=i[q];M.clippingState=F,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=G}};function m(){v.value!==i&&(v.value=i,v.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(x,E,R,D){const O=x!==null?x.length:0;let T=null;if(O!==0){if(T=v.value,D!==!0||T===null){const M=R+O*4,G=E.matrixWorldInverse;p.getNormalMatrix(G),(T===null||T.length<M)&&(T=new Float32Array(M));for(let V=0,F=R;V!==O;++V,F+=4)d.copy(x[V]).applyMatrix4(G,p),d.normal.toArray(T,F),T[F+3]=d.constant}v.value=T,v.needsUpdate=!0}return e.numPlanes=O,e.numIntersection=0,T}}function IT(o){let e=new WeakMap;function i(d,p){return p===Kd?d.mapping=ws:p===Qd&&(d.mapping=Do),d}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Kd||p===Qd)if(e.has(d)){const v=e.get(d).texture;return i(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const m=new W_(v.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const p=d.target;p.removeEventListener("dispose",l);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const jr=4,Zv=[.125,.215,.35,.446,.526,.582],As=20,HT=256,Ll=new Kp,Kv=new We;let Nd=null,Od=0,Pd=0,Fd=!1;const GT=new ft;class Qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:p=GT}=u;Nd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,r,l,v,p),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Od,Pd),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ws||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:or,format:Ri,colorSpace:Lo,depthBuffer:!1},l=Jv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jv(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VT(u)),this._blurMaterial=kT(u,e,i),this._ggxMaterial=XT(u,e,i)}return l}_compileMaterial(e){const i=new pi(new wi,e);this._renderer.compile(i,Ll)}_sceneToCubeUV(e,i,r,l,u){const v=new sa(90,1,i,r),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,E=x.autoClear,R=x.toneMapping;x.getClearColor(Kv),x.toneMapping=Ca,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new Wl,new Il({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const O=this._backgroundBox,T=O.material;let M=!1;const G=e.background;G?G.isColor&&(T.color.copy(G),e.background=null,M=!0):(T.color.copy(Kv),M=!0);for(let V=0;V<6;V++){const F=V%3;F===0?(v.up.set(0,m[V],0),v.position.set(u.x,u.y,u.z),v.lookAt(u.x+S[V],u.y,u.z)):F===1?(v.up.set(0,0,m[V]),v.position.set(u.x,u.y,u.z),v.lookAt(u.x,u.y+S[V],u.z)):(v.up.set(0,m[V],0),v.position.set(u.x,u.y,u.z),v.lookAt(u.x,u.y,u.z+S[V]));const q=this._cubeSize;Ao(l,F*q,V>2?q:0,q,q),x.setRenderTarget(l),M&&x.render(O,v),x.render(e,v)}x.toneMapping=R,x.autoClear=E,e.background=G}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ws||e.mapping===Do;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=t_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$v());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const v=this._cubeSize;Ao(i,0,0,3*v,2*v),r.setRenderTarget(i),r.render(d,Ll)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const v=d.uniforms,m=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),x=Math.sqrt(m*m-S*S),E=0+m*1.25,R=x*E,{_lodMax:D}=this,O=this._sizeLods[r],T=3*O*(r>D-jr?r-D+jr:0),M=4*(this._cubeSize-O);v.envMap.value=e.texture,v.roughness.value=R,v.mipInt.value=D-i,Ao(u,T,M,3*O,2*O),l.setRenderTarget(u),l.render(p,Ll),v.envMap.value=u.texture,v.roughness.value=0,v.mipInt.value=D-r,Ao(e,T,M,3*O,2*O),l.setRenderTarget(e),l.render(p,Ll)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,p){const v=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const S=3,x=this._lodMeshes[l];x.material=m;const E=m.uniforms,R=this._sizeLods[r]-1,D=isFinite(u)?Math.PI/(2*R):2*Math.PI/(2*As-1),O=u/D,T=isFinite(u)?1+Math.floor(S*O):As;T>As&&Me(`sigmaRadians, ${u}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${As}`);const M=[];let G=0;for(let X=0;X<As;++X){const at=X/O,L=Math.exp(-at*at/2);M.push(L),X===0?G+=L:X<T&&(G+=2*L)}for(let X=0;X<M.length;X++)M[X]=M[X]/G;E.envMap.value=e.texture,E.samples.value=T,E.weights.value=M,E.latitudinal.value=d==="latitudinal",p&&(E.poleAxis.value=p);const{_lodMax:V}=this;E.dTheta.value=D,E.mipInt.value=V-r;const F=this._sizeLods[l],q=3*F*(l>V-jr?l-V+jr:0),Y=4*(this._cubeSize-F);Ao(i,q,Y,3*F,2*F),v.setRenderTarget(i),v.render(x,Ll)}}function VT(o){const e=[],i=[],r=[];let l=o;const u=o-jr+1+Zv.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let v=1/p;d>o-jr?v=Zv[d-o+jr-1]:d===0&&(v=0),i.push(v);const m=1/(p-2),S=-m,x=1+m,E=[S,S,x,S,x,x,S,S,x,x,S,x],R=6,D=6,O=3,T=2,M=1,G=new Float32Array(O*D*R),V=new Float32Array(T*D*R),F=new Float32Array(M*D*R);for(let Y=0;Y<R;Y++){const X=Y%3*2/3-1,at=Y>2?0:-1,L=[X,at,0,X+2/3,at,0,X+2/3,at+1,0,X,at,0,X+2/3,at+1,0,X,at+1,0];G.set(L,O*D*Y),V.set(E,T*D*Y);const b=[Y,Y,Y,Y,Y,Y];F.set(b,M*D*Y)}const q=new wi;q.setAttribute("position",new Xi(G,O)),q.setAttribute("uv",new Xi(V,T)),q.setAttribute("faceIndex",new Xi(F,M)),r.push(new pi(q,null)),l>jr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Jv(o,e,i){const r=new Ci(o,e,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ao(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function XT(o,e,i){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function kT(o,e,i){const r=new Float32Array(As),l=new ft(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function $v(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function t_(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WT(o){let e=new WeakMap,i=null;function r(p){if(p&&p.isTexture){const v=p.mapping,m=v===Kd||v===Qd,S=v===ws||v===Do;if(m||S){let x=e.get(p);const E=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==E)return i===null&&(i=new Qv(o)),x=m?i.fromEquirectangular(p,x):i.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),x.texture;if(x!==void 0)return x.texture;{const R=p.image;return m&&R&&R.height>0||S&&R&&l(R)?(i===null&&(i=new Qv(o)),x=m?i.fromEquirectangular(p):i.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),p.addEventListener("dispose",u),x.texture):null}}}return p}function l(p){let v=0;const m=6;for(let S=0;S<m;S++)p[S]!==void 0&&v++;return v===m}function u(p){const v=p.target;v.removeEventListener("dispose",u);const m=e.get(v);m!==void 0&&(e.delete(v),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function qT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Bl("WebGLRenderer: "+r+" extension not supported."),l}}}function YT(o,e,i,r){const l={},u=new WeakMap;function d(x){const E=x.target;E.index!==null&&e.remove(E.index);for(const D in E.attributes)e.remove(E.attributes[D]);E.removeEventListener("dispose",d),delete l[E.id];const R=u.get(E);R&&(e.remove(R),u.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,i.memory.geometries--}function p(x,E){return l[E.id]===!0||(E.addEventListener("dispose",d),l[E.id]=!0,i.memory.geometries++),E}function v(x){const E=x.attributes;for(const R in E)e.update(E[R],o.ARRAY_BUFFER)}function m(x){const E=[],R=x.index,D=x.attributes.position;let O=0;if(R!==null){const G=R.array;O=R.version;for(let V=0,F=G.length;V<F;V+=3){const q=G[V+0],Y=G[V+1],X=G[V+2];E.push(q,Y,Y,X,X,q)}}else if(D!==void 0){const G=D.array;O=D.version;for(let V=0,F=G.length/3-1;V<F;V+=3){const q=V+0,Y=V+1,X=V+2;E.push(q,Y,Y,X,X,q)}}else return;const T=new(F_(E)?G_:H_)(E,1);T.version=O;const M=u.get(x);M&&e.remove(M),u.set(x,T)}function S(x){const E=u.get(x);if(E){const R=x.index;R!==null&&E.version<R.version&&m(x)}else m(x);return u.get(x)}return{get:p,update:v,getWireframeAttribute:S}}function jT(o,e,i){let r;function l(E){r=E}let u,d;function p(E){u=E.type,d=E.bytesPerElement}function v(E,R){o.drawElements(r,R,u,E*d),i.update(R,r,1)}function m(E,R,D){D!==0&&(o.drawElementsInstanced(r,R,u,E*d,D),i.update(R,r,D))}function S(E,R,D){if(D===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,R,0,u,E,0,D);let T=0;for(let M=0;M<D;M++)T+=R[M];i.update(T,r,1)}function x(E,R,D,O){if(D===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let M=0;M<E.length;M++)m(E[M]/d,R[M],O[M]);else{T.multiDrawElementsInstancedWEBGL(r,R,0,u,E,0,O,0,D);let M=0;for(let G=0;G<D;G++)M+=R[G]*O[G];i.update(M,r,1)}}this.setMode=l,this.setIndex=p,this.render=v,this.renderInstances=m,this.renderMultiDraw=S,this.renderMultiDrawInstances=x}function ZT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:Ke("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function KT(o,e,i){const r=new WeakMap,l=new Ln;function u(d,p,v){const m=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=S!==void 0?S.length:0;let E=r.get(p);if(E===void 0||E.count!==x){let b=function(){at.dispose(),r.delete(p),p.removeEventListener("dispose",b)};var R=b;E!==void 0&&E.texture.dispose();const D=p.morphAttributes.position!==void 0,O=p.morphAttributes.normal!==void 0,T=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],G=p.morphAttributes.normal||[],V=p.morphAttributes.color||[];let F=0;D===!0&&(F=1),O===!0&&(F=2),T===!0&&(F=3);let q=p.attributes.position.count*F,Y=1;q>e.maxTextureSize&&(Y=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const X=new Float32Array(q*Y*4*x),at=new z_(X,q,Y,x);at.type=Vi,at.needsUpdate=!0;const L=F*4;for(let P=0;P<x;P++){const tt=M[P],K=G[P],dt=V[P],pt=q*Y*4*P;for(let N=0;N<tt.count;N++){const I=N*L;D===!0&&(l.fromBufferAttribute(tt,N),X[pt+I+0]=l.x,X[pt+I+1]=l.y,X[pt+I+2]=l.z,X[pt+I+3]=0),O===!0&&(l.fromBufferAttribute(K,N),X[pt+I+4]=l.x,X[pt+I+5]=l.y,X[pt+I+6]=l.z,X[pt+I+7]=0),T===!0&&(l.fromBufferAttribute(dt,N),X[pt+I+8]=l.x,X[pt+I+9]=l.y,X[pt+I+10]=l.z,X[pt+I+11]=dt.itemSize===4?l.w:1)}}E={count:x,texture:at,size:new $e(q,Y)},r.set(p,E),p.addEventListener("dispose",b)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let D=0;for(let T=0;T<m.length;T++)D+=m[T];const O=p.morphTargetsRelative?1:1-D;v.getUniforms().setValue(o,"morphTargetBaseInfluence",O),v.getUniforms().setValue(o,"morphTargetInfluences",m)}v.getUniforms().setValue(o,"morphTargetsTexture",E.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",E.size)}return{update:u}}function QT(o,e,i,r){let l=new WeakMap;function u(v){const m=r.render.frame,S=v.geometry,x=e.get(v,S);if(l.get(x)!==m&&(e.update(x),l.set(x,m)),v.isInstancedMesh&&(v.hasEventListener("dispose",p)===!1&&v.addEventListener("dispose",p),l.get(v)!==m&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),l.set(v,m))),v.isSkinnedMesh){const E=v.skeleton;l.get(E)!==m&&(E.update(),l.set(E,m))}return x}function d(){l=new WeakMap}function p(v){const m=v.target;m.removeEventListener("dispose",p),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}const JT={[S_]:"LINEAR_TONE_MAPPING",[M_]:"REINHARD_TONE_MAPPING",[E_]:"CINEON_TONE_MAPPING",[T_]:"ACES_FILMIC_TONE_MAPPING",[A_]:"AGX_TONE_MAPPING",[R_]:"NEUTRAL_TONE_MAPPING",[b_]:"CUSTOM_TONE_MAPPING"};function $T(o,e,i,r,l){const u=new Ci(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Ci(e,i,{type:or,depthBuffer:!1,stencilBuffer:!1}),p=new wi;p.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ki([0,2,0,0,2,0],2));const v=new YS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new pi(p,v),S=new Kp(-1,1,1,-1,0,1);let x=null,E=null,R=!1,D,O=null,T=[],M=!1;this.setSize=function(G,V){u.setSize(G,V),d.setSize(G,V);for(let F=0;F<T.length;F++){const q=T[F];q.setSize&&q.setSize(G,V)}},this.setEffects=function(G){T=G,M=T.length>0&&T[0].isRenderPass===!0;const V=u.width,F=u.height;for(let q=0;q<T.length;q++){const Y=T[q];Y.setSize&&Y.setSize(V,F)}},this.begin=function(G,V){if(R||G.toneMapping===Ca&&T.length===0)return!1;if(O=V,V!==null){const F=V.width,q=V.height;(u.width!==F||u.height!==q)&&this.setSize(F,q)}return M===!1&&G.setRenderTarget(u),D=G.toneMapping,G.toneMapping=Ca,!0},this.hasRenderPass=function(){return M},this.end=function(G,V){G.toneMapping=D,R=!0;let F=u,q=d;for(let Y=0;Y<T.length;Y++){const X=T[Y];if(X.enabled!==!1&&(X.render(G,q,F,V),X.needsSwap!==!1)){const at=F;F=q,q=at}}if(x!==G.outputColorSpace||E!==G.toneMapping){x=G.outputColorSpace,E=G.toneMapping,v.defines={},ke.getTransfer(x)===an&&(v.defines.SRGB_TRANSFER="");const Y=JT[E];Y&&(v.defines[Y]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=F.texture,G.setRenderTarget(O),G.render(m,S),O=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),d.dispose(),p.dispose(),v.dispose()}}const K_=new vi,Pp=new Hl(1,1),Q_=new z_,J_=new SS,$_=new k_,e_=[],n_=[],i_=new Float32Array(16),a_=new Float32Array(9),r_=new Float32Array(4);function Fo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=e_[l];if(u===void 0&&(u=new Float32Array(l),e_[l]=u),e!==0){r.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(u,p)}return u}function Yn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function jn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Zc(o,e){let i=n_[e];i===void 0&&(i=new Int32Array(e),n_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function t1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function e1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Yn(i,e))return;o.uniform2fv(this.addr,e),jn(i,e)}}function n1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Yn(i,e))return;o.uniform3fv(this.addr,e),jn(i,e)}}function i1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Yn(i,e))return;o.uniform4fv(this.addr,e),jn(i,e)}}function a1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Yn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),jn(i,e)}else{if(Yn(i,r))return;r_.set(r),o.uniformMatrix2fv(this.addr,!1,r_),jn(i,r)}}function r1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Yn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),jn(i,e)}else{if(Yn(i,r))return;a_.set(r),o.uniformMatrix3fv(this.addr,!1,a_),jn(i,r)}}function s1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Yn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),jn(i,e)}else{if(Yn(i,r))return;i_.set(r),o.uniformMatrix4fv(this.addr,!1,i_),jn(i,r)}}function o1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function l1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Yn(i,e))return;o.uniform2iv(this.addr,e),jn(i,e)}}function u1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Yn(i,e))return;o.uniform3iv(this.addr,e),jn(i,e)}}function c1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Yn(i,e))return;o.uniform4iv(this.addr,e),jn(i,e)}}function f1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function h1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Yn(i,e))return;o.uniform2uiv(this.addr,e),jn(i,e)}}function d1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Yn(i,e))return;o.uniform3uiv(this.addr,e),jn(i,e)}}function p1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Yn(i,e))return;o.uniform4uiv(this.addr,e),jn(i,e)}}function m1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Pp.compareFunction=i.isReversedDepthBuffer()?Yp:qp,u=Pp):u=K_,i.setTexture2D(e||u,l)}function g1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||J_,l)}function v1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||$_,l)}function _1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Q_,l)}function x1(o){switch(o){case 5126:return t1;case 35664:return e1;case 35665:return n1;case 35666:return i1;case 35674:return a1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return u1;case 35669:case 35673:return c1;case 5125:return f1;case 36294:return h1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return _1}}function y1(o,e){o.uniform1fv(this.addr,e)}function S1(o,e){const i=Fo(e,this.size,2);o.uniform2fv(this.addr,i)}function M1(o,e){const i=Fo(e,this.size,3);o.uniform3fv(this.addr,i)}function E1(o,e){const i=Fo(e,this.size,4);o.uniform4fv(this.addr,i)}function T1(o,e){const i=Fo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function b1(o,e){const i=Fo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function A1(o,e){const i=Fo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function R1(o,e){o.uniform1iv(this.addr,e)}function C1(o,e){o.uniform2iv(this.addr,e)}function w1(o,e){o.uniform3iv(this.addr,e)}function D1(o,e){o.uniform4iv(this.addr,e)}function U1(o,e){o.uniform1uiv(this.addr,e)}function L1(o,e){o.uniform2uiv(this.addr,e)}function N1(o,e){o.uniform3uiv(this.addr,e)}function O1(o,e){o.uniform4uiv(this.addr,e)}function P1(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Yn(r,u)||(o.uniform1iv(this.addr,u),jn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Pp:d=K_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,u[p])}function F1(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Yn(r,u)||(o.uniform1iv(this.addr,u),jn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||J_,u[d])}function z1(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Yn(r,u)||(o.uniform1iv(this.addr,u),jn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||$_,u[d])}function B1(o,e,i){const r=this.cache,l=e.length,u=Zc(i,l);Yn(r,u)||(o.uniform1iv(this.addr,u),jn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Q_,u[d])}function I1(o){switch(o){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return T1;case 35675:return b1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return w1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return L1;case 36295:return N1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return B1}}class H1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=x1(i.type)}}class G1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=I1(i.type)}}class V1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],r)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function s_(o,e){o.seq.push(e),o.map[e.id]=e}function X1(o,e,i){const r=o.name,l=r.length;for(zd.lastIndex=0;;){const u=zd.exec(r),d=zd.lastIndex;let p=u[1];const v=u[2]==="]",m=u[3];if(v&&(p=p|0),m===void 0||m==="["&&d+2===l){s_(i,m===void 0?new H1(p,o,e):new G1(p,o,e));break}else{let x=i.map[p];x===void 0&&(x=new V1(p),s_(i,x)),i=x}}}class Bc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),v=e.getUniformLocation(i,p.name);X1(p,v,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],v=r[p.id];v.needsUpdate!==!1&&p.setValue(e,v.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function o_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const k1=37297;let W1=0;function q1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const l_=new Ce;function Y1(o){ke._getMatrix(l_,ke.workingColorSpace,o);const e=`mat3( ${l_.elements.map(i=>i.toFixed(4))} )`;switch(ke.getTransfer(o)){case Gc:return[e,"LinearTransferOETF"];case an:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function u_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+q1(o.getShaderSource(e),p)}else return u}function j1(o,e){const i=Y1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Z1={[S_]:"Linear",[M_]:"Reinhard",[E_]:"Cineon",[T_]:"ACESFilmic",[A_]:"AgX",[R_]:"Neutral",[b_]:"Custom"};function K1(o,e){const i=Z1[e];return i===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new ft;function Q1(){ke.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),e=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function $1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function tb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function Pl(o){return o!==""}function c_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(o){return o.replace(eb,ib)}const nb=new Map;function ib(o,e){let i=we[e];if(i===void 0){const r=nb.get(e);if(r!==void 0)i=we[r],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Fp(i)}const ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h_(o){return o.replace(ab,rb)}function rb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function d_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sb={[Nc]:"SHADOWMAP_TYPE_PCF",[Ol]:"SHADOWMAP_TYPE_VSM"};function ob(o){return sb[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lb={[ws]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function ub(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":lb[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const cb={[Do]:"ENVMAP_MODE_REFRACTION"};function fb(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":cb[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hb={[y_]:"ENVMAP_BLENDING_MULTIPLY",[eS]:"ENVMAP_BLENDING_MIX",[nS]:"ENVMAP_BLENDING_ADD"};function db(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":hb[o.combine]||"ENVMAP_BLENDING_NONE"}function pb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function mb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const v=ob(i),m=ub(i),S=fb(i),x=db(i),E=pb(i),R=J1(i),D=$1(u),O=l.createProgram();let T,M,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(T=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Pl).join(`
`),T.length>0&&(T+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D].filter(Pl).join(`
`),M.length>0&&(M+=`
`)):(T=[d_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),M=[d_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,D,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ca?"#define TONE_MAPPING":"",i.toneMapping!==Ca?we.tonemapping_pars_fragment:"",i.toneMapping!==Ca?K1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,j1("linearToOutputTexel",i.outputColorSpace),Q1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Pl).join(`
`)),d=Fp(d),d=c_(d,i),d=f_(d,i),p=Fp(p),p=c_(p,i),p=f_(p,i),d=h_(d),p=h_(p),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,T=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,M=["#define varying in",i.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const V=G+T+d,F=G+M+p,q=o_(l,l.VERTEX_SHADER,V),Y=o_(l,l.FRAGMENT_SHADER,F);l.attachShader(O,q),l.attachShader(O,Y),i.index0AttributeName!==void 0?l.bindAttribLocation(O,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(O,0,"position"),l.linkProgram(O);function X(P){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(O)||"",K=l.getShaderInfoLog(q)||"",dt=l.getShaderInfoLog(Y)||"",pt=tt.trim(),N=K.trim(),I=dt.trim();let nt=!0,Et=!0;if(l.getProgramParameter(O,l.LINK_STATUS)===!1)if(nt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,O,q,Y);else{const At=u_(l,q,"vertex"),H=u_(l,Y,"fragment");Ke("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(O,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+pt+`
`+At+`
`+H)}else pt!==""?Me("WebGLProgram: Program Info Log:",pt):(N===""||I==="")&&(Et=!1);Et&&(P.diagnostics={runnable:nt,programLog:pt,vertexShader:{log:N,prefix:T},fragmentShader:{log:I,prefix:M}})}l.deleteShader(q),l.deleteShader(Y),at=new Bc(l,O),L=tb(l,O)}let at;this.getUniforms=function(){return at===void 0&&X(this),at};let L;this.getAttributes=function(){return L===void 0&&X(this),L};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(O,k1)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(O),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=O,this.vertexShader=q,this.fragmentShader=Y,this}let gb=0;class vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new _b(e),i.set(e,r)),r}}class _b{constructor(e){this.id=gb++,this.code=e,this.usedTimes=0}}function xb(o,e,i,r,l,u,d){const p=new B_,v=new vb,m=new Set,S=[],x=new Map,E=l.logarithmicDepthBuffer;let R=l.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(L){return m.add(L),L===0?"uv":`uv${L}`}function T(L,b,P,tt,K){const dt=tt.fog,pt=K.geometry,N=L.isMeshStandardMaterial?tt.environment:null,I=(L.isMeshStandardMaterial?i:e).get(L.envMap||N),nt=I&&I.mapping===Yc?I.image.height:null,Et=D[L.type];L.precision!==null&&(R=l.getMaxPrecision(L.precision),R!==L.precision&&Me("WebGLProgram.getParameters:",L.precision,"not supported, using",R,"instead."));const At=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,H=At!==void 0?At.length:0;let ot=0;pt.morphAttributes.position!==void 0&&(ot=1),pt.morphAttributes.normal!==void 0&&(ot=2),pt.morphAttributes.color!==void 0&&(ot=3);let Tt,Pt,qt,ht;if(Et){const De=Aa[Et];Tt=De.vertexShader,Pt=De.fragmentShader}else Tt=L.vertexShader,Pt=L.fragmentShader,v.update(L),qt=v.getVertexShaderID(L),ht=v.getFragmentShaderID(L);const yt=o.getRenderTarget(),Vt=o.state.buffers.depth.getReversed(),te=K.isInstancedMesh===!0,Jt=K.isBatchedMesh===!0,Te=!!L.map,gn=!!L.matcap,ce=!!I,de=!!L.aoMap,Ie=!!L.lightMap,ye=!!L.bumpMap,dn=!!L.normalMap,Z=!!L.displacementMap,un=!!L.emissiveMap,Ue=!!L.metalnessMap,Ve=!!L.roughnessMap,ee=L.anisotropy>0,B=L.clearcoat>0,A=L.dispersion>0,et=L.iridescence>0,St=L.sheen>0,wt=L.transmission>0,xt=ee&&!!L.anisotropyMap,se=B&&!!L.clearcoatMap,zt=B&&!!L.clearcoatNormalMap,ne=B&&!!L.clearcoatRoughnessMap,me=et&&!!L.iridescenceMap,Ut=et&&!!L.iridescenceThicknessMap,Nt=St&&!!L.sheenColorMap,Zt=St&&!!L.sheenRoughnessMap,Yt=!!L.specularMap,Bt=!!L.specularColorMap,Se=!!L.specularIntensityMap,J=wt&&!!L.transmissionMap,It=wt&&!!L.thicknessMap,Ot=!!L.gradientMap,Wt=!!L.alphaMap,Dt=L.alphaTest>0,Rt=!!L.alphaHash,Ft=!!L.extensions;let ve=Ca;L.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ve=o.toneMapping);const qe={shaderID:Et,shaderType:L.type,shaderName:L.name,vertexShader:Tt,fragmentShader:Pt,defines:L.defines,customVertexShaderID:qt,customFragmentShaderID:ht,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:R,batching:Jt,batchingColor:Jt&&K._colorsTexture!==null,instancing:te,instancingColor:te&&K.instanceColor!==null,instancingMorph:te&&K.morphTexture!==null,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Lo,alphaToCoverage:!!L.alphaToCoverage,map:Te,matcap:gn,envMap:ce,envMapMode:ce&&I.mapping,envMapCubeUVHeight:nt,aoMap:de,lightMap:Ie,bumpMap:ye,normalMap:dn,displacementMap:Z,emissiveMap:un,normalMapObjectSpace:dn&&L.normalMapType===sS,normalMapTangentSpace:dn&&L.normalMapType===rS,metalnessMap:Ue,roughnessMap:Ve,anisotropy:ee,anisotropyMap:xt,clearcoat:B,clearcoatMap:se,clearcoatNormalMap:zt,clearcoatRoughnessMap:ne,dispersion:A,iridescence:et,iridescenceMap:me,iridescenceThicknessMap:Ut,sheen:St,sheenColorMap:Nt,sheenRoughnessMap:Zt,specularMap:Yt,specularColorMap:Bt,specularIntensityMap:Se,transmission:wt,transmissionMap:J,thicknessMap:It,gradientMap:Ot,opaque:L.transparent===!1&&L.blending===Ro&&L.alphaToCoverage===!1,alphaMap:Wt,alphaTest:Dt,alphaHash:Rt,combine:L.combine,mapUv:Te&&O(L.map.channel),aoMapUv:de&&O(L.aoMap.channel),lightMapUv:Ie&&O(L.lightMap.channel),bumpMapUv:ye&&O(L.bumpMap.channel),normalMapUv:dn&&O(L.normalMap.channel),displacementMapUv:Z&&O(L.displacementMap.channel),emissiveMapUv:un&&O(L.emissiveMap.channel),metalnessMapUv:Ue&&O(L.metalnessMap.channel),roughnessMapUv:Ve&&O(L.roughnessMap.channel),anisotropyMapUv:xt&&O(L.anisotropyMap.channel),clearcoatMapUv:se&&O(L.clearcoatMap.channel),clearcoatNormalMapUv:zt&&O(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&O(L.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&O(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&O(L.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&O(L.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&O(L.sheenRoughnessMap.channel),specularMapUv:Yt&&O(L.specularMap.channel),specularColorMapUv:Bt&&O(L.specularColorMap.channel),specularIntensityMapUv:Se&&O(L.specularIntensityMap.channel),transmissionMapUv:J&&O(L.transmissionMap.channel),thicknessMapUv:It&&O(L.thicknessMap.channel),alphaMapUv:Wt&&O(L.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(dn||ee),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!pt.attributes.uv&&(Te||Wt),fog:!!dt,useFog:L.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:Vt,skinning:K.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:L.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:ve,decodeVideoTexture:Te&&L.map.isVideoTexture===!0&&ke.getTransfer(L.map.colorSpace)===an,decodeVideoTextureEmissive:un&&L.emissiveMap.isVideoTexture===!0&&ke.getTransfer(L.emissiveMap.colorSpace)===an,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===ir,flipSided:L.side===gi,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Ft&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&L.extensions.multiDraw===!0||Jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function M(L){const b=[];if(L.shaderID?b.push(L.shaderID):(b.push(L.customVertexShaderID),b.push(L.customFragmentShaderID)),L.defines!==void 0)for(const P in L.defines)b.push(P),b.push(L.defines[P]);return L.isRawShaderMaterial===!1&&(G(b,L),V(b,L),b.push(o.outputColorSpace)),b.push(L.customProgramCacheKey),b.join()}function G(L,b){L.push(b.precision),L.push(b.outputColorSpace),L.push(b.envMapMode),L.push(b.envMapCubeUVHeight),L.push(b.mapUv),L.push(b.alphaMapUv),L.push(b.lightMapUv),L.push(b.aoMapUv),L.push(b.bumpMapUv),L.push(b.normalMapUv),L.push(b.displacementMapUv),L.push(b.emissiveMapUv),L.push(b.metalnessMapUv),L.push(b.roughnessMapUv),L.push(b.anisotropyMapUv),L.push(b.clearcoatMapUv),L.push(b.clearcoatNormalMapUv),L.push(b.clearcoatRoughnessMapUv),L.push(b.iridescenceMapUv),L.push(b.iridescenceThicknessMapUv),L.push(b.sheenColorMapUv),L.push(b.sheenRoughnessMapUv),L.push(b.specularMapUv),L.push(b.specularColorMapUv),L.push(b.specularIntensityMapUv),L.push(b.transmissionMapUv),L.push(b.thicknessMapUv),L.push(b.combine),L.push(b.fogExp2),L.push(b.sizeAttenuation),L.push(b.morphTargetsCount),L.push(b.morphAttributeCount),L.push(b.numDirLights),L.push(b.numPointLights),L.push(b.numSpotLights),L.push(b.numSpotLightMaps),L.push(b.numHemiLights),L.push(b.numRectAreaLights),L.push(b.numDirLightShadows),L.push(b.numPointLightShadows),L.push(b.numSpotLightShadows),L.push(b.numSpotLightShadowsWithMaps),L.push(b.numLightProbes),L.push(b.shadowMapType),L.push(b.toneMapping),L.push(b.numClippingPlanes),L.push(b.numClipIntersection),L.push(b.depthPacking)}function V(L,b){p.disableAll(),b.instancing&&p.enable(0),b.instancingColor&&p.enable(1),b.instancingMorph&&p.enable(2),b.matcap&&p.enable(3),b.envMap&&p.enable(4),b.normalMapObjectSpace&&p.enable(5),b.normalMapTangentSpace&&p.enable(6),b.clearcoat&&p.enable(7),b.iridescence&&p.enable(8),b.alphaTest&&p.enable(9),b.vertexColors&&p.enable(10),b.vertexAlphas&&p.enable(11),b.vertexUv1s&&p.enable(12),b.vertexUv2s&&p.enable(13),b.vertexUv3s&&p.enable(14),b.vertexTangents&&p.enable(15),b.anisotropy&&p.enable(16),b.alphaHash&&p.enable(17),b.batching&&p.enable(18),b.dispersion&&p.enable(19),b.batchingColor&&p.enable(20),b.gradientMap&&p.enable(21),L.push(p.mask),p.disableAll(),b.fog&&p.enable(0),b.useFog&&p.enable(1),b.flatShading&&p.enable(2),b.logarithmicDepthBuffer&&p.enable(3),b.reversedDepthBuffer&&p.enable(4),b.skinning&&p.enable(5),b.morphTargets&&p.enable(6),b.morphNormals&&p.enable(7),b.morphColors&&p.enable(8),b.premultipliedAlpha&&p.enable(9),b.shadowMapEnabled&&p.enable(10),b.doubleSided&&p.enable(11),b.flipSided&&p.enable(12),b.useDepthPacking&&p.enable(13),b.dithering&&p.enable(14),b.transmission&&p.enable(15),b.sheen&&p.enable(16),b.opaque&&p.enable(17),b.pointsUvs&&p.enable(18),b.decodeVideoTexture&&p.enable(19),b.decodeVideoTextureEmissive&&p.enable(20),b.alphaToCoverage&&p.enable(21),L.push(p.mask)}function F(L){const b=D[L.type];let P;if(b){const tt=Aa[b];P=OS.clone(tt.uniforms)}else P=L.uniforms;return P}function q(L,b){let P=x.get(b);return P!==void 0?++P.usedTimes:(P=new mb(o,b,L,u),S.push(P),x.set(b,P)),P}function Y(L){if(--L.usedTimes===0){const b=S.indexOf(L);S[b]=S[S.length-1],S.pop(),x.delete(L.cacheKey),L.destroy()}}function X(L){v.remove(L)}function at(){v.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:F,acquireProgram:q,releaseProgram:Y,releaseShaderCache:X,programs:S,dispose:at}}function yb(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function r(d){o.delete(d)}function l(d,p,v){o.get(d)[p]=v}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Sb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function p_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function m_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(x,E,R,D,O,T){let M=o[e];return M===void 0?(M={id:x.id,object:x,geometry:E,material:R,groupOrder:D,renderOrder:x.renderOrder,z:O,group:T},o[e]=M):(M.id=x.id,M.object=x,M.geometry=E,M.material=R,M.groupOrder=D,M.renderOrder=x.renderOrder,M.z=O,M.group=T),e++,M}function p(x,E,R,D,O,T){const M=d(x,E,R,D,O,T);R.transmission>0?r.push(M):R.transparent===!0?l.push(M):i.push(M)}function v(x,E,R,D,O,T){const M=d(x,E,R,D,O,T);R.transmission>0?r.unshift(M):R.transparent===!0?l.unshift(M):i.unshift(M)}function m(x,E){i.length>1&&i.sort(x||Sb),r.length>1&&r.sort(E||p_),l.length>1&&l.sort(E||p_)}function S(){for(let x=e,E=o.length;x<E;x++){const R=o[x];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:v,finish:S,sort:m}}function Mb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new m_,o.set(r,[d])):l>=u.length?(d=new m_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Eb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ft,color:new We};break;case"SpotLight":i={position:new ft,direction:new ft,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ft,color:new We,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ft,skyColor:new We,groundColor:new We};break;case"RectAreaLight":i={color:new We,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return o[e.id]=i,i}}}function Tb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let bb=0;function Ab(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Rb(o){const e=new Eb,i=Tb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ft);const l=new ft,u=new Rn,d=new Rn;function p(m){let S=0,x=0,E=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let R=0,D=0,O=0,T=0,M=0,G=0,V=0,F=0,q=0,Y=0,X=0;m.sort(Ab);for(let L=0,b=m.length;L<b;L++){const P=m[L],tt=P.color,K=P.intensity,dt=P.distance;let pt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Uo?pt=P.shadow.map.texture:pt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)S+=tt.r*K,x+=tt.g*K,E+=tt.b*K;else if(P.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(P.sh.coefficients[N],K);X++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const I=P.shadow,nt=i.get(P);nt.shadowIntensity=I.intensity,nt.shadowBias=I.bias,nt.shadowNormalBias=I.normalBias,nt.shadowRadius=I.radius,nt.shadowMapSize=I.mapSize,r.directionalShadow[R]=nt,r.directionalShadowMap[R]=pt,r.directionalShadowMatrix[R]=P.shadow.matrix,G++}r.directional[R]=N,R++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(tt).multiplyScalar(K),N.distance=dt,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,r.spot[O]=N;const I=P.shadow;if(P.map&&(r.spotLightMap[q]=P.map,q++,I.updateMatrices(P),P.castShadow&&Y++),r.spotLightMatrix[O]=I.matrix,P.castShadow){const nt=i.get(P);nt.shadowIntensity=I.intensity,nt.shadowBias=I.bias,nt.shadowNormalBias=I.normalBias,nt.shadowRadius=I.radius,nt.shadowMapSize=I.mapSize,r.spotShadow[O]=nt,r.spotShadowMap[O]=pt,F++}O++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(tt).multiplyScalar(K),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),r.rectArea[T]=N,T++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const I=P.shadow,nt=i.get(P);nt.shadowIntensity=I.intensity,nt.shadowBias=I.bias,nt.shadowNormalBias=I.normalBias,nt.shadowRadius=I.radius,nt.shadowMapSize=I.mapSize,nt.shadowCameraNear=I.camera.near,nt.shadowCameraFar=I.camera.far,r.pointShadow[D]=nt,r.pointShadowMap[D]=pt,r.pointShadowMatrix[D]=P.shadow.matrix,V++}r.point[D]=N,D++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(K),N.groundColor.copy(P.groundColor).multiplyScalar(K),r.hemi[M]=N,M++}}T>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=jt.LTC_FLOAT_1,r.rectAreaLTC2=jt.LTC_FLOAT_2):(r.rectAreaLTC1=jt.LTC_HALF_1,r.rectAreaLTC2=jt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=x,r.ambient[2]=E;const at=r.hash;(at.directionalLength!==R||at.pointLength!==D||at.spotLength!==O||at.rectAreaLength!==T||at.hemiLength!==M||at.numDirectionalShadows!==G||at.numPointShadows!==V||at.numSpotShadows!==F||at.numSpotMaps!==q||at.numLightProbes!==X)&&(r.directional.length=R,r.spot.length=O,r.rectArea.length=T,r.point.length=D,r.hemi.length=M,r.directionalShadow.length=G,r.directionalShadowMap.length=G,r.pointShadow.length=V,r.pointShadowMap.length=V,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=G,r.pointShadowMatrix.length=V,r.spotLightMatrix.length=F+q-Y,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=X,at.directionalLength=R,at.pointLength=D,at.spotLength=O,at.rectAreaLength=T,at.hemiLength=M,at.numDirectionalShadows=G,at.numPointShadows=V,at.numSpotShadows=F,at.numSpotMaps=q,at.numLightProbes=X,r.version=bb++)}function v(m,S){let x=0,E=0,R=0,D=0,O=0;const T=S.matrixWorldInverse;for(let M=0,G=m.length;M<G;M++){const V=m[M];if(V.isDirectionalLight){const F=r.directional[x];F.direction.setFromMatrixPosition(V.matrixWorld),l.setFromMatrixPosition(V.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(T),x++}else if(V.isSpotLight){const F=r.spot[R];F.position.setFromMatrixPosition(V.matrixWorld),F.position.applyMatrix4(T),F.direction.setFromMatrixPosition(V.matrixWorld),l.setFromMatrixPosition(V.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(T),R++}else if(V.isRectAreaLight){const F=r.rectArea[D];F.position.setFromMatrixPosition(V.matrixWorld),F.position.applyMatrix4(T),d.identity(),u.copy(V.matrixWorld),u.premultiply(T),d.extractRotation(u),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),D++}else if(V.isPointLight){const F=r.point[E];F.position.setFromMatrixPosition(V.matrixWorld),F.position.applyMatrix4(T),E++}else if(V.isHemisphereLight){const F=r.hemi[O];F.direction.setFromMatrixPosition(V.matrixWorld),F.direction.transformDirection(T),O++}}}return{setup:p,setupView:v,state:r}}function g_(o){const e=new Rb(o),i=[],r=[];function l(S){m.camera=S,i.length=0,r.length=0}function u(S){i.push(S)}function d(S){r.push(S)}function p(){e.setup(i)}function v(S){e.setupView(i,S)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:d}}function Cb(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new g_(o),e.set(l,[p])):u>=d.length?(p=new g_(o),d.push(p)):p=d[u],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ub=[new ft(1,0,0),new ft(-1,0,0),new ft(0,1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1)],Lb=[new ft(0,-1,0),new ft(0,-1,0),new ft(0,0,1),new ft(0,0,-1),new ft(0,-1,0),new ft(0,-1,0)],v_=new Rn,Nl=new ft,Bd=new ft;function Nb(o,e,i){let r=new Y_;const l=new $e,u=new $e,d=new Ln,p=new jS,v=new ZS,m={},S=i.maxTextureSize,x={[Zr]:gi,[gi]:Zr,[ir]:ir},E=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:wb,fragmentShader:Db}),R=E.clone();R.defines.HORIZONTAL_PASS=1;const D=new wi;D.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const O=new pi(D,E),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let M=this.type;this.render=function(Y,X,at){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||Y.length===0)return;Y.type===Fy&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),Y.type=Nc);const L=o.getRenderTarget(),b=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(rr),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const K=M!==this.type;K&&X.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(pt=>pt.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,pt=Y.length;dt<pt;dt++){const N=Y[dt],I=N.shadow;if(I===void 0){Me("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const nt=I.getFrameExtents();if(l.multiply(nt),u.copy(I.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/nt.x),l.x=u.x*nt.x,I.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/nt.y),l.y=u.y*nt.y,I.mapSize.y=u.y)),I.map===null||K===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Ol){if(N.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Ci(l.x,l.y,{format:Uo,type:or,minFilter:ci,magFilter:ci,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new Hl(l.x,l.y,Vi),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=lr,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=qn,I.map.depthTexture.magFilter=qn}else{N.isPointLight?(I.map=new W_(l.x),I.map.depthTexture=new qS(l.x,wa)):(I.map=new Ci(l.x,l.y),I.map.depthTexture=new Hl(l.x,l.y,wa)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=lr;const At=o.state.buffers.depth.getReversed();this.type===Nc?(I.map.depthTexture.compareFunction=At?Yp:qp,I.map.depthTexture.minFilter=ci,I.map.depthTexture.magFilter=ci):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=qn,I.map.depthTexture.magFilter=qn)}I.camera.updateProjectionMatrix()}const Et=I.map.isWebGLCubeRenderTarget?6:1;for(let At=0;At<Et;At++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,At),o.clear();else{At===0&&(o.setRenderTarget(I.map),o.clear());const H=I.getViewport(At);d.set(u.x*H.x,u.y*H.y,u.x*H.z,u.y*H.w),tt.viewport(d)}if(N.isPointLight){const H=I.camera,ot=I.matrix,Tt=N.distance||H.far;Tt!==H.far&&(H.far=Tt,H.updateProjectionMatrix()),Nl.setFromMatrixPosition(N.matrixWorld),H.position.copy(Nl),Bd.copy(H.position),Bd.add(Ub[At]),H.up.copy(Lb[At]),H.lookAt(Bd),H.updateMatrixWorld(),ot.makeTranslation(-Nl.x,-Nl.y,-Nl.z),v_.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),I._frustum.setFromProjectionMatrix(v_,H.coordinateSystem,H.reversedDepth)}else I.updateMatrices(N);r=I.getFrustum(),F(X,at,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Ol&&G(I,at),I.needsUpdate=!1}M=this.type,T.needsUpdate=!1,o.setRenderTarget(L,b,P)};function G(Y,X){const at=e.update(O);E.defines.VSM_SAMPLES!==Y.blurSamples&&(E.defines.VSM_SAMPLES=Y.blurSamples,R.defines.VSM_SAMPLES=Y.blurSamples,E.needsUpdate=!0,R.needsUpdate=!0),Y.mapPass===null&&(Y.mapPass=new Ci(l.x,l.y,{format:Uo,type:or})),E.uniforms.shadow_pass.value=Y.map.depthTexture,E.uniforms.resolution.value=Y.mapSize,E.uniforms.radius.value=Y.radius,o.setRenderTarget(Y.mapPass),o.clear(),o.renderBufferDirect(X,null,at,E,O,null),R.uniforms.shadow_pass.value=Y.mapPass.texture,R.uniforms.resolution.value=Y.mapSize,R.uniforms.radius.value=Y.radius,o.setRenderTarget(Y.map),o.clear(),o.renderBufferDirect(X,null,at,R,O,null)}function V(Y,X,at,L){let b=null;const P=at.isPointLight===!0?Y.customDistanceMaterial:Y.customDepthMaterial;if(P!==void 0)b=P;else if(b=at.isPointLight===!0?v:p,o.localClippingEnabled&&X.clipShadows===!0&&Array.isArray(X.clippingPlanes)&&X.clippingPlanes.length!==0||X.displacementMap&&X.displacementScale!==0||X.alphaMap&&X.alphaTest>0||X.map&&X.alphaTest>0||X.alphaToCoverage===!0){const tt=b.uuid,K=X.uuid;let dt=m[tt];dt===void 0&&(dt={},m[tt]=dt);let pt=dt[K];pt===void 0&&(pt=b.clone(),dt[K]=pt,X.addEventListener("dispose",q)),b=pt}if(b.visible=X.visible,b.wireframe=X.wireframe,L===Ol?b.side=X.shadowSide!==null?X.shadowSide:X.side:b.side=X.shadowSide!==null?X.shadowSide:x[X.side],b.alphaMap=X.alphaMap,b.alphaTest=X.alphaToCoverage===!0?.5:X.alphaTest,b.map=X.map,b.clipShadows=X.clipShadows,b.clippingPlanes=X.clippingPlanes,b.clipIntersection=X.clipIntersection,b.displacementMap=X.displacementMap,b.displacementScale=X.displacementScale,b.displacementBias=X.displacementBias,b.wireframeLinewidth=X.wireframeLinewidth,b.linewidth=X.linewidth,at.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const tt=o.properties.get(b);tt.light=at}return b}function F(Y,X,at,L,b){if(Y.visible===!1)return;if(Y.layers.test(X.layers)&&(Y.isMesh||Y.isLine||Y.isPoints)&&(Y.castShadow||Y.receiveShadow&&b===Ol)&&(!Y.frustumCulled||r.intersectsObject(Y))){Y.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,Y.matrixWorld);const K=e.update(Y),dt=Y.material;if(Array.isArray(dt)){const pt=K.groups;for(let N=0,I=pt.length;N<I;N++){const nt=pt[N],Et=dt[nt.materialIndex];if(Et&&Et.visible){const At=V(Y,Et,L,b);Y.onBeforeShadow(o,Y,X,at,K,At,nt),o.renderBufferDirect(at,null,K,At,Y,nt),Y.onAfterShadow(o,Y,X,at,K,At,nt)}}}else if(dt.visible){const pt=V(Y,dt,L,b);Y.onBeforeShadow(o,Y,X,at,K,pt,null),o.renderBufferDirect(at,null,K,pt,Y,null),Y.onAfterShadow(o,Y,X,at,K,pt,null)}}const tt=Y.children;for(let K=0,dt=tt.length;K<dt;K++)F(tt[K],X,at,L,b)}function q(Y){Y.target.removeEventListener("dispose",q);for(const at in m){const L=m[at],b=Y.target.uuid;b in L&&(L[b].dispose(),delete L[b])}}}const Ob={[Xd]:kd,[Wd]:jd,[qd]:Zd,[wo]:Yd,[kd]:Xd,[jd]:Wd,[Zd]:qd,[Yd]:wo};function Pb(o,e){function i(){let J=!1;const It=new Ln;let Ot=null;const Wt=new Ln(0,0,0,0);return{setMask:function(Dt){Ot!==Dt&&!J&&(o.colorMask(Dt,Dt,Dt,Dt),Ot=Dt)},setLocked:function(Dt){J=Dt},setClear:function(Dt,Rt,Ft,ve,qe){qe===!0&&(Dt*=ve,Rt*=ve,Ft*=ve),It.set(Dt,Rt,Ft,ve),Wt.equals(It)===!1&&(o.clearColor(Dt,Rt,Ft,ve),Wt.copy(It))},reset:function(){J=!1,Ot=null,Wt.set(-1,0,0,0)}}}function r(){let J=!1,It=!1,Ot=null,Wt=null,Dt=null;return{setReversed:function(Rt){if(It!==Rt){const Ft=e.get("EXT_clip_control");Rt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),It=Rt;const ve=Dt;Dt=null,this.setClear(ve)}},getReversed:function(){return It},setTest:function(Rt){Rt?yt(o.DEPTH_TEST):Vt(o.DEPTH_TEST)},setMask:function(Rt){Ot!==Rt&&!J&&(o.depthMask(Rt),Ot=Rt)},setFunc:function(Rt){if(It&&(Rt=Ob[Rt]),Wt!==Rt){switch(Rt){case Xd:o.depthFunc(o.NEVER);break;case kd:o.depthFunc(o.ALWAYS);break;case Wd:o.depthFunc(o.LESS);break;case wo:o.depthFunc(o.LEQUAL);break;case qd:o.depthFunc(o.EQUAL);break;case Yd:o.depthFunc(o.GEQUAL);break;case jd:o.depthFunc(o.GREATER);break;case Zd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Wt=Rt}},setLocked:function(Rt){J=Rt},setClear:function(Rt){Dt!==Rt&&(It&&(Rt=1-Rt),o.clearDepth(Rt),Dt=Rt)},reset:function(){J=!1,Ot=null,Wt=null,Dt=null,It=!1}}}function l(){let J=!1,It=null,Ot=null,Wt=null,Dt=null,Rt=null,Ft=null,ve=null,qe=null;return{setTest:function(De){J||(De?yt(o.STENCIL_TEST):Vt(o.STENCIL_TEST))},setMask:function(De){It!==De&&!J&&(o.stencilMask(De),It=De)},setFunc:function(De,Cn,Di){(Ot!==De||Wt!==Cn||Dt!==Di)&&(o.stencilFunc(De,Cn,Di),Ot=De,Wt=Cn,Dt=Di)},setOp:function(De,Cn,Di){(Rt!==De||Ft!==Cn||ve!==Di)&&(o.stencilOp(De,Cn,Di),Rt=De,Ft=Cn,ve=Di)},setLocked:function(De){J=De},setClear:function(De){qe!==De&&(o.clearStencil(De),qe=De)},reset:function(){J=!1,It=null,Ot=null,Wt=null,Dt=null,Rt=null,Ft=null,ve=null,qe=null}}}const u=new i,d=new r,p=new l,v=new WeakMap,m=new WeakMap;let S={},x={},E=new WeakMap,R=[],D=null,O=!1,T=null,M=null,G=null,V=null,F=null,q=null,Y=null,X=new We(0,0,0),at=0,L=!1,b=null,P=null,tt=null,K=null,dt=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const nt=o.getParameter(o.VERSION);nt.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(nt)[1]),N=I>=1):nt.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),N=I>=2);let Et=null,At={};const H=o.getParameter(o.SCISSOR_BOX),ot=o.getParameter(o.VIEWPORT),Tt=new Ln().fromArray(H),Pt=new Ln().fromArray(ot);function qt(J,It,Ot,Wt){const Dt=new Uint8Array(4),Rt=o.createTexture();o.bindTexture(J,Rt),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Ot;Ft++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(It,0,o.RGBA,1,1,Wt,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(It+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return Rt}const ht={};ht[o.TEXTURE_2D]=qt(o.TEXTURE_2D,o.TEXTURE_2D,1),ht[o.TEXTURE_CUBE_MAP]=qt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[o.TEXTURE_2D_ARRAY]=qt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ht[o.TEXTURE_3D]=qt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),yt(o.DEPTH_TEST),d.setFunc(wo),ye(!1),dn(yv),yt(o.CULL_FACE),de(rr);function yt(J){S[J]!==!0&&(o.enable(J),S[J]=!0)}function Vt(J){S[J]!==!1&&(o.disable(J),S[J]=!1)}function te(J,It){return x[J]!==It?(o.bindFramebuffer(J,It),x[J]=It,J===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=It),J===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=It),!0):!1}function Jt(J,It){let Ot=R,Wt=!1;if(J){Ot=E.get(It),Ot===void 0&&(Ot=[],E.set(It,Ot));const Dt=J.textures;if(Ot.length!==Dt.length||Ot[0]!==o.COLOR_ATTACHMENT0){for(let Rt=0,Ft=Dt.length;Rt<Ft;Rt++)Ot[Rt]=o.COLOR_ATTACHMENT0+Rt;Ot.length=Dt.length,Wt=!0}}else Ot[0]!==o.BACK&&(Ot[0]=o.BACK,Wt=!0);Wt&&o.drawBuffers(Ot)}function Te(J){return D!==J?(o.useProgram(J),D=J,!0):!1}const gn={[bs]:o.FUNC_ADD,[By]:o.FUNC_SUBTRACT,[Iy]:o.FUNC_REVERSE_SUBTRACT};gn[Hy]=o.MIN,gn[Gy]=o.MAX;const ce={[Vy]:o.ZERO,[Xy]:o.ONE,[ky]:o.SRC_COLOR,[Gd]:o.SRC_ALPHA,[Ky]:o.SRC_ALPHA_SATURATE,[jy]:o.DST_COLOR,[qy]:o.DST_ALPHA,[Wy]:o.ONE_MINUS_SRC_COLOR,[Vd]:o.ONE_MINUS_SRC_ALPHA,[Zy]:o.ONE_MINUS_DST_COLOR,[Yy]:o.ONE_MINUS_DST_ALPHA,[Qy]:o.CONSTANT_COLOR,[Jy]:o.ONE_MINUS_CONSTANT_COLOR,[$y]:o.CONSTANT_ALPHA,[tS]:o.ONE_MINUS_CONSTANT_ALPHA};function de(J,It,Ot,Wt,Dt,Rt,Ft,ve,qe,De){if(J===rr){O===!0&&(Vt(o.BLEND),O=!1);return}if(O===!1&&(yt(o.BLEND),O=!0),J!==zy){if(J!==T||De!==L){if((M!==bs||F!==bs)&&(o.blendEquation(o.FUNC_ADD),M=bs,F=bs),De)switch(J){case Ro:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hc:o.blendFunc(o.ONE,o.ONE);break;case Sv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ke("WebGLState: Invalid blending: ",J);break}else switch(J){case Ro:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Sv:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mv:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",J);break}G=null,V=null,q=null,Y=null,X.set(0,0,0),at=0,T=J,L=De}return}Dt=Dt||It,Rt=Rt||Ot,Ft=Ft||Wt,(It!==M||Dt!==F)&&(o.blendEquationSeparate(gn[It],gn[Dt]),M=It,F=Dt),(Ot!==G||Wt!==V||Rt!==q||Ft!==Y)&&(o.blendFuncSeparate(ce[Ot],ce[Wt],ce[Rt],ce[Ft]),G=Ot,V=Wt,q=Rt,Y=Ft),(ve.equals(X)===!1||qe!==at)&&(o.blendColor(ve.r,ve.g,ve.b,qe),X.copy(ve),at=qe),T=J,L=!1}function Ie(J,It){J.side===ir?Vt(o.CULL_FACE):yt(o.CULL_FACE);let Ot=J.side===gi;It&&(Ot=!Ot),ye(Ot),J.blending===Ro&&J.transparent===!1?de(rr):de(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),u.setMask(J.colorWrite);const Wt=J.stencilWrite;p.setTest(Wt),Wt&&(p.setMask(J.stencilWriteMask),p.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),p.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),un(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):Vt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(J){b!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),b=J)}function dn(J){J!==Oy?(yt(o.CULL_FACE),J!==P&&(J===yv?o.cullFace(o.BACK):J===Py?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Vt(o.CULL_FACE),P=J}function Z(J){J!==tt&&(N&&o.lineWidth(J),tt=J)}function un(J,It,Ot){J?(yt(o.POLYGON_OFFSET_FILL),(K!==It||dt!==Ot)&&(o.polygonOffset(It,Ot),K=It,dt=Ot)):Vt(o.POLYGON_OFFSET_FILL)}function Ue(J){J?yt(o.SCISSOR_TEST):Vt(o.SCISSOR_TEST)}function Ve(J){J===void 0&&(J=o.TEXTURE0+pt-1),Et!==J&&(o.activeTexture(J),Et=J)}function ee(J,It,Ot){Ot===void 0&&(Et===null?Ot=o.TEXTURE0+pt-1:Ot=Et);let Wt=At[Ot];Wt===void 0&&(Wt={type:void 0,texture:void 0},At[Ot]=Wt),(Wt.type!==J||Wt.texture!==It)&&(Et!==Ot&&(o.activeTexture(Ot),Et=Ot),o.bindTexture(J,It||ht[J]),Wt.type=J,Wt.texture=It)}function B(){const J=At[Et];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(J){Ke("WebGLState:",J)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(J){Ke("WebGLState:",J)}}function St(){try{o.texSubImage2D(...arguments)}catch(J){Ke("WebGLState:",J)}}function wt(){try{o.texSubImage3D(...arguments)}catch(J){Ke("WebGLState:",J)}}function xt(){try{o.compressedTexSubImage2D(...arguments)}catch(J){Ke("WebGLState:",J)}}function se(){try{o.compressedTexSubImage3D(...arguments)}catch(J){Ke("WebGLState:",J)}}function zt(){try{o.texStorage2D(...arguments)}catch(J){Ke("WebGLState:",J)}}function ne(){try{o.texStorage3D(...arguments)}catch(J){Ke("WebGLState:",J)}}function me(){try{o.texImage2D(...arguments)}catch(J){Ke("WebGLState:",J)}}function Ut(){try{o.texImage3D(...arguments)}catch(J){Ke("WebGLState:",J)}}function Nt(J){Tt.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),Tt.copy(J))}function Zt(J){Pt.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),Pt.copy(J))}function Yt(J,It){let Ot=m.get(It);Ot===void 0&&(Ot=new WeakMap,m.set(It,Ot));let Wt=Ot.get(J);Wt===void 0&&(Wt=o.getUniformBlockIndex(It,J.name),Ot.set(J,Wt))}function Bt(J,It){const Wt=m.get(It).get(J);v.get(It)!==Wt&&(o.uniformBlockBinding(It,Wt,J.__bindingPointIndex),v.set(It,Wt))}function Se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},Et=null,At={},x={},E=new WeakMap,R=[],D=null,O=!1,T=null,M=null,G=null,V=null,F=null,q=null,Y=null,X=new We(0,0,0),at=0,L=!1,b=null,P=null,tt=null,K=null,dt=null,Tt.set(0,0,o.canvas.width,o.canvas.height),Pt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:yt,disable:Vt,bindFramebuffer:te,drawBuffers:Jt,useProgram:Te,setBlending:de,setMaterial:Ie,setFlipSided:ye,setCullFace:dn,setLineWidth:Z,setPolygonOffset:un,setScissorTest:Ue,activeTexture:Ve,bindTexture:ee,unbindTexture:B,compressedTexImage2D:A,compressedTexImage3D:et,texImage2D:me,texImage3D:Ut,updateUBOMapping:Yt,uniformBlockBinding:Bt,texStorage2D:zt,texStorage3D:ne,texSubImage2D:St,texSubImage3D:wt,compressedTexSubImage2D:xt,compressedTexSubImage3D:se,scissor:Nt,viewport:Zt,reset:Se}}function Fb(o,e,i,r,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new $e,S=new WeakMap;let x;const E=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(B,A){return R?new OffscreenCanvas(B,A):Xc("canvas")}function O(B,A,et){let St=1;const wt=ee(B);if((wt.width>et||wt.height>et)&&(St=et/Math.max(wt.width,wt.height)),St<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const xt=Math.floor(St*wt.width),se=Math.floor(St*wt.height);x===void 0&&(x=D(xt,se));const zt=A?D(xt,se):x;return zt.width=xt,zt.height=se,zt.getContext("2d").drawImage(B,0,0,xt,se),Me("WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+xt+"x"+se+")."),zt}else return"data"in B&&Me("WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),B;return B}function T(B){return B.generateMipmaps}function M(B){o.generateMipmap(B)}function G(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function V(B,A,et,St,wt=!1){if(B!==null){if(o[B]!==void 0)return o[B];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let xt=A;if(A===o.RED&&(et===o.FLOAT&&(xt=o.R32F),et===o.HALF_FLOAT&&(xt=o.R16F),et===o.UNSIGNED_BYTE&&(xt=o.R8)),A===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(xt=o.R8UI),et===o.UNSIGNED_SHORT&&(xt=o.R16UI),et===o.UNSIGNED_INT&&(xt=o.R32UI),et===o.BYTE&&(xt=o.R8I),et===o.SHORT&&(xt=o.R16I),et===o.INT&&(xt=o.R32I)),A===o.RG&&(et===o.FLOAT&&(xt=o.RG32F),et===o.HALF_FLOAT&&(xt=o.RG16F),et===o.UNSIGNED_BYTE&&(xt=o.RG8)),A===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(xt=o.RG8UI),et===o.UNSIGNED_SHORT&&(xt=o.RG16UI),et===o.UNSIGNED_INT&&(xt=o.RG32UI),et===o.BYTE&&(xt=o.RG8I),et===o.SHORT&&(xt=o.RG16I),et===o.INT&&(xt=o.RG32I)),A===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(xt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(xt=o.RGB16UI),et===o.UNSIGNED_INT&&(xt=o.RGB32UI),et===o.BYTE&&(xt=o.RGB8I),et===o.SHORT&&(xt=o.RGB16I),et===o.INT&&(xt=o.RGB32I)),A===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(xt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(xt=o.RGBA16UI),et===o.UNSIGNED_INT&&(xt=o.RGBA32UI),et===o.BYTE&&(xt=o.RGBA8I),et===o.SHORT&&(xt=o.RGBA16I),et===o.INT&&(xt=o.RGBA32I)),A===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(xt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(xt=o.R11F_G11F_B10F)),A===o.RGBA){const se=wt?Gc:ke.getTransfer(St);et===o.FLOAT&&(xt=o.RGBA32F),et===o.HALF_FLOAT&&(xt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(xt=se===an?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(xt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(xt=o.RGB5_A1)}return(xt===o.R16F||xt===o.R32F||xt===o.RG16F||xt===o.RG32F||xt===o.RGBA16F||xt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),xt}function F(B,A){let et;return B?A===null||A===wa||A===zl?et=o.DEPTH24_STENCIL8:A===Vi?et=o.DEPTH32F_STENCIL8:A===Fl&&(et=o.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===wa||A===zl?et=o.DEPTH_COMPONENT24:A===Vi?et=o.DEPTH_COMPONENT32F:A===Fl&&(et=o.DEPTH_COMPONENT16),et}function q(B,A){return T(B)===!0||B.isFramebufferTexture&&B.minFilter!==qn&&B.minFilter!==ci?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function Y(B){const A=B.target;A.removeEventListener("dispose",Y),at(A),A.isVideoTexture&&S.delete(A)}function X(B){const A=B.target;A.removeEventListener("dispose",X),b(A)}function at(B){const A=r.get(B);if(A.__webglInit===void 0)return;const et=B.source,St=E.get(et);if(St){const wt=St[A.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&L(B),Object.keys(St).length===0&&E.delete(et)}r.remove(B)}function L(B){const A=r.get(B);o.deleteTexture(A.__webglTexture);const et=B.source,St=E.get(et);delete St[A.__cacheKey],d.memory.textures--}function b(B){const A=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(A.__webglFramebuffer[St]))for(let wt=0;wt<A.__webglFramebuffer[St].length;wt++)o.deleteFramebuffer(A.__webglFramebuffer[St][wt]);else o.deleteFramebuffer(A.__webglFramebuffer[St]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[St])}else{if(Array.isArray(A.__webglFramebuffer))for(let St=0;St<A.__webglFramebuffer.length;St++)o.deleteFramebuffer(A.__webglFramebuffer[St]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let St=0;St<A.__webglColorRenderbuffer.length;St++)A.__webglColorRenderbuffer[St]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[St]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const et=B.textures;for(let St=0,wt=et.length;St<wt;St++){const xt=r.get(et[St]);xt.__webglTexture&&(o.deleteTexture(xt.__webglTexture),d.memory.textures--),r.remove(et[St])}r.remove(B)}let P=0;function tt(){P=0}function K(){const B=P;return B>=l.maxTextures&&Me("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),P+=1,B}function dt(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function pt(B,A){const et=r.get(B);if(B.isVideoTexture&&Ue(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&et.__version!==B.version){const St=B.image;if(St===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(et,B,A);return}}else B.isExternalTexture&&(et.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+A)}function N(B,A){const et=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&et.__version!==B.version){ht(et,B,A);return}else B.isExternalTexture&&(et.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+A)}function I(B,A){const et=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&et.__version!==B.version){ht(et,B,A);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+A)}function nt(B,A){const et=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&et.__version!==B.version){yt(et,B,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+A)}const Et={[Jd]:o.REPEAT,[ar]:o.CLAMP_TO_EDGE,[$d]:o.MIRRORED_REPEAT},At={[qn]:o.NEAREST,[iS]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[ci]:o.LINEAR,[od]:o.LINEAR_MIPMAP_NEAREST,[Rs]:o.LINEAR_MIPMAP_LINEAR},H={[oS]:o.NEVER,[hS]:o.ALWAYS,[lS]:o.LESS,[qp]:o.LEQUAL,[uS]:o.EQUAL,[Yp]:o.GEQUAL,[cS]:o.GREATER,[fS]:o.NOTEQUAL};function ot(B,A){if(A.type===Vi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ci||A.magFilter===od||A.magFilter===lc||A.magFilter===Rs||A.minFilter===ci||A.minFilter===od||A.minFilter===lc||A.minFilter===Rs)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,Et[A.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,Et[A.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,Et[A.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,At[A.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,At[A.minFilter]),A.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,H[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qn||A.minFilter!==lc&&A.minFilter!==Rs||A.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(B,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Tt(B,A){let et=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",Y));const St=A.source;let wt=E.get(St);wt===void 0&&(wt={},E.set(St,wt));const xt=dt(A);if(xt!==B.__cacheKey){wt[xt]===void 0&&(wt[xt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),wt[xt].usedTimes++;const se=wt[B.__cacheKey];se!==void 0&&(wt[B.__cacheKey].usedTimes--,se.usedTimes===0&&L(A)),B.__cacheKey=xt,B.__webglTexture=wt[xt].texture}return et}function Pt(B,A,et){return Math.floor(Math.floor(B/et)/A)}function qt(B,A,et,St){const xt=B.updateRanges;if(xt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,et,St,A.data);else{xt.sort((Ut,Nt)=>Ut.start-Nt.start);let se=0;for(let Ut=1;Ut<xt.length;Ut++){const Nt=xt[se],Zt=xt[Ut],Yt=Nt.start+Nt.count,Bt=Pt(Zt.start,A.width,4),Se=Pt(Nt.start,A.width,4);Zt.start<=Yt+1&&Bt===Se&&Pt(Zt.start+Zt.count-1,A.width,4)===Bt?Nt.count=Math.max(Nt.count,Zt.start+Zt.count-Nt.start):(++se,xt[se]=Zt)}xt.length=se+1;const zt=o.getParameter(o.UNPACK_ROW_LENGTH),ne=o.getParameter(o.UNPACK_SKIP_PIXELS),me=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let Ut=0,Nt=xt.length;Ut<Nt;Ut++){const Zt=xt[Ut],Yt=Math.floor(Zt.start/4),Bt=Math.ceil(Zt.count/4),Se=Yt%A.width,J=Math.floor(Yt/A.width),It=Bt,Ot=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Se),o.pixelStorei(o.UNPACK_SKIP_ROWS,J),i.texSubImage2D(o.TEXTURE_2D,0,Se,J,It,Ot,et,St,A.data)}B.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,zt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,me)}}function ht(B,A,et){let St=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(St=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(St=o.TEXTURE_3D);const wt=Tt(B,A),xt=A.source;i.bindTexture(St,B.__webglTexture,o.TEXTURE0+et);const se=r.get(xt);if(xt.version!==se.__version||wt===!0){i.activeTexture(o.TEXTURE0+et);const zt=ke.getPrimaries(ke.workingColorSpace),ne=A.colorSpace===qr?null:ke.getPrimaries(A.colorSpace),me=A.colorSpace===qr||zt===ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ut=O(A.image,!1,l.maxTextureSize);Ut=Ve(A,Ut);const Nt=u.convert(A.format,A.colorSpace),Zt=u.convert(A.type);let Yt=V(A.internalFormat,Nt,Zt,A.colorSpace,A.isVideoTexture);ot(St,A);let Bt;const Se=A.mipmaps,J=A.isVideoTexture!==!0,It=se.__version===void 0||wt===!0,Ot=xt.dataReady,Wt=q(A,Ut);if(A.isDepthTexture)Yt=F(A.format===Cs,A.type),It&&(J?i.texStorage2D(o.TEXTURE_2D,1,Yt,Ut.width,Ut.height):i.texImage2D(o.TEXTURE_2D,0,Yt,Ut.width,Ut.height,0,Nt,Zt,null));else if(A.isDataTexture)if(Se.length>0){J&&It&&i.texStorage2D(o.TEXTURE_2D,Wt,Yt,Se[0].width,Se[0].height);for(let Dt=0,Rt=Se.length;Dt<Rt;Dt++)Bt=Se[Dt],J?Ot&&i.texSubImage2D(o.TEXTURE_2D,Dt,0,0,Bt.width,Bt.height,Nt,Zt,Bt.data):i.texImage2D(o.TEXTURE_2D,Dt,Yt,Bt.width,Bt.height,0,Nt,Zt,Bt.data);A.generateMipmaps=!1}else J?(It&&i.texStorage2D(o.TEXTURE_2D,Wt,Yt,Ut.width,Ut.height),Ot&&qt(A,Ut,Nt,Zt)):i.texImage2D(o.TEXTURE_2D,0,Yt,Ut.width,Ut.height,0,Nt,Zt,Ut.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){J&&It&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Wt,Yt,Se[0].width,Se[0].height,Ut.depth);for(let Dt=0,Rt=Se.length;Dt<Rt;Dt++)if(Bt=Se[Dt],A.format!==Ri)if(Nt!==null)if(J){if(Ot)if(A.layerUpdates.size>0){const Ft=jv(Bt.width,Bt.height,A.format,A.type);for(const ve of A.layerUpdates){const qe=Bt.data.subarray(ve*Ft/Bt.data.BYTES_PER_ELEMENT,(ve+1)*Ft/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Dt,0,0,ve,Bt.width,Bt.height,1,Nt,qe)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Dt,0,0,0,Bt.width,Bt.height,Ut.depth,Nt,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Dt,Yt,Bt.width,Bt.height,Ut.depth,0,Bt.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Ot&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Dt,0,0,0,Bt.width,Bt.height,Ut.depth,Nt,Zt,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Dt,Yt,Bt.width,Bt.height,Ut.depth,0,Nt,Zt,Bt.data)}else{J&&It&&i.texStorage2D(o.TEXTURE_2D,Wt,Yt,Se[0].width,Se[0].height);for(let Dt=0,Rt=Se.length;Dt<Rt;Dt++)Bt=Se[Dt],A.format!==Ri?Nt!==null?J?Ot&&i.compressedTexSubImage2D(o.TEXTURE_2D,Dt,0,0,Bt.width,Bt.height,Nt,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Dt,Yt,Bt.width,Bt.height,0,Bt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Ot&&i.texSubImage2D(o.TEXTURE_2D,Dt,0,0,Bt.width,Bt.height,Nt,Zt,Bt.data):i.texImage2D(o.TEXTURE_2D,Dt,Yt,Bt.width,Bt.height,0,Nt,Zt,Bt.data)}else if(A.isDataArrayTexture)if(J){if(It&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Wt,Yt,Ut.width,Ut.height,Ut.depth),Ot)if(A.layerUpdates.size>0){const Dt=jv(Ut.width,Ut.height,A.format,A.type);for(const Rt of A.layerUpdates){const Ft=Ut.data.subarray(Rt*Dt/Ut.data.BYTES_PER_ELEMENT,(Rt+1)*Dt/Ut.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Rt,Ut.width,Ut.height,1,Nt,Zt,Ft)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ut.width,Ut.height,Ut.depth,Nt,Zt,Ut.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,Ut.width,Ut.height,Ut.depth,0,Nt,Zt,Ut.data);else if(A.isData3DTexture)J?(It&&i.texStorage3D(o.TEXTURE_3D,Wt,Yt,Ut.width,Ut.height,Ut.depth),Ot&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ut.width,Ut.height,Ut.depth,Nt,Zt,Ut.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,Ut.width,Ut.height,Ut.depth,0,Nt,Zt,Ut.data);else if(A.isFramebufferTexture){if(It)if(J)i.texStorage2D(o.TEXTURE_2D,Wt,Yt,Ut.width,Ut.height);else{let Dt=Ut.width,Rt=Ut.height;for(let Ft=0;Ft<Wt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Yt,Dt,Rt,0,Nt,Zt,null),Dt>>=1,Rt>>=1}}else if(Se.length>0){if(J&&It){const Dt=ee(Se[0]);i.texStorage2D(o.TEXTURE_2D,Wt,Yt,Dt.width,Dt.height)}for(let Dt=0,Rt=Se.length;Dt<Rt;Dt++)Bt=Se[Dt],J?Ot&&i.texSubImage2D(o.TEXTURE_2D,Dt,0,0,Nt,Zt,Bt):i.texImage2D(o.TEXTURE_2D,Dt,Yt,Nt,Zt,Bt);A.generateMipmaps=!1}else if(J){if(It){const Dt=ee(Ut);i.texStorage2D(o.TEXTURE_2D,Wt,Yt,Dt.width,Dt.height)}Ot&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Nt,Zt,Ut)}else i.texImage2D(o.TEXTURE_2D,0,Yt,Nt,Zt,Ut);T(A)&&M(St),se.__version=xt.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function yt(B,A,et){if(A.image.length!==6)return;const St=Tt(B,A),wt=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+et);const xt=r.get(wt);if(wt.version!==xt.__version||St===!0){i.activeTexture(o.TEXTURE0+et);const se=ke.getPrimaries(ke.workingColorSpace),zt=A.colorSpace===qr?null:ke.getPrimaries(A.colorSpace),ne=A.colorSpace===qr||se===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,Ut=A.image[0]&&A.image[0].isDataTexture,Nt=[];for(let Rt=0;Rt<6;Rt++)!me&&!Ut?Nt[Rt]=O(A.image[Rt],!0,l.maxCubemapSize):Nt[Rt]=Ut?A.image[Rt].image:A.image[Rt],Nt[Rt]=Ve(A,Nt[Rt]);const Zt=Nt[0],Yt=u.convert(A.format,A.colorSpace),Bt=u.convert(A.type),Se=V(A.internalFormat,Yt,Bt,A.colorSpace),J=A.isVideoTexture!==!0,It=xt.__version===void 0||St===!0,Ot=wt.dataReady;let Wt=q(A,Zt);ot(o.TEXTURE_CUBE_MAP,A);let Dt;if(me){J&&It&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Wt,Se,Zt.width,Zt.height);for(let Rt=0;Rt<6;Rt++){Dt=Nt[Rt].mipmaps;for(let Ft=0;Ft<Dt.length;Ft++){const ve=Dt[Ft];A.format!==Ri?Yt!==null?J?Ot&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft,0,0,ve.width,ve.height,Yt,ve.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft,Se,ve.width,ve.height,0,ve.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft,0,0,ve.width,ve.height,Yt,Bt,ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft,Se,ve.width,ve.height,0,Yt,Bt,ve.data)}}}else{if(Dt=A.mipmaps,J&&It){Dt.length>0&&Wt++;const Rt=ee(Nt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Wt,Se,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(Ut){J?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Nt[Rt].width,Nt[Rt].height,Yt,Bt,Nt[Rt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Se,Nt[Rt].width,Nt[Rt].height,0,Yt,Bt,Nt[Rt].data);for(let Ft=0;Ft<Dt.length;Ft++){const qe=Dt[Ft].image[Rt].image;J?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft+1,0,0,qe.width,qe.height,Yt,Bt,qe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft+1,Se,qe.width,qe.height,0,Yt,Bt,qe.data)}}else{J?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Yt,Bt,Nt[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Se,Yt,Bt,Nt[Rt]);for(let Ft=0;Ft<Dt.length;Ft++){const ve=Dt[Ft];J?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft+1,0,0,Yt,Bt,ve.image[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ft+1,Se,Yt,Bt,ve.image[Rt])}}}T(A)&&M(o.TEXTURE_CUBE_MAP),xt.__version=wt.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Vt(B,A,et,St,wt,xt){const se=u.convert(et.format,et.colorSpace),zt=u.convert(et.type),ne=V(et.internalFormat,se,zt,et.colorSpace),me=r.get(A),Ut=r.get(et);if(Ut.__renderTarget=A,!me.__hasExternalTextures){const Nt=Math.max(1,A.width>>xt),Zt=Math.max(1,A.height>>xt);wt===o.TEXTURE_3D||wt===o.TEXTURE_2D_ARRAY?i.texImage3D(wt,xt,ne,Nt,Zt,A.depth,0,se,zt,null):i.texImage2D(wt,xt,ne,Nt,Zt,0,se,zt,null)}i.bindFramebuffer(o.FRAMEBUFFER,B),un(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,wt,Ut.__webglTexture,0,Z(A)):(wt===o.TEXTURE_2D||wt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,St,wt,Ut.__webglTexture,xt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function te(B,A,et){if(o.bindRenderbuffer(o.RENDERBUFFER,B),A.depthBuffer){const St=A.depthTexture,wt=St&&St.isDepthTexture?St.type:null,xt=F(A.stencilBuffer,wt),se=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;un(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Z(A),xt,A.width,A.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Z(A),xt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,xt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,se,o.RENDERBUFFER,B)}else{const St=A.textures;for(let wt=0;wt<St.length;wt++){const xt=St[wt],se=u.convert(xt.format,xt.colorSpace),zt=u.convert(xt.type),ne=V(xt.internalFormat,se,zt,xt.colorSpace);un(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Z(A),ne,A.width,A.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Z(A),ne,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ne,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Jt(B,A,et){const St=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const wt=r.get(A.depthTexture);if(wt.__renderTarget=A,(!wt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),St){if(wt.__webglInit===void 0&&(wt.__webglInit=!0,A.depthTexture.addEventListener("dispose",Y)),wt.__webglTexture===void 0){wt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,wt.__webglTexture),ot(o.TEXTURE_CUBE_MAP,A.depthTexture);const me=u.convert(A.depthTexture.format),Ut=u.convert(A.depthTexture.type);let Nt;A.depthTexture.format===lr?Nt=o.DEPTH_COMPONENT24:A.depthTexture.format===Cs&&(Nt=o.DEPTH24_STENCIL8);for(let Zt=0;Zt<6;Zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,Nt,A.width,A.height,0,me,Ut,null)}}else pt(A.depthTexture,0);const xt=wt.__webglTexture,se=Z(A),zt=St?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,ne=A.depthTexture.format===Cs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===lr)un(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ne,zt,xt,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,ne,zt,xt,0);else if(A.depthTexture.format===Cs)un(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ne,zt,xt,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,ne,zt,xt,0);else throw new Error("Unknown depthTexture format")}function Te(B){const A=r.get(B),et=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const St=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),St){const wt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,St.removeEventListener("dispose",wt)};St.addEventListener("dispose",wt),A.__depthDisposeCallback=wt}A.__boundDepthTexture=St}if(B.depthTexture&&!A.__autoAllocateDepthBuffer)if(et)for(let St=0;St<6;St++)Jt(A.__webglFramebuffer[St],B,St);else{const St=B.texture.mipmaps;St&&St.length>0?Jt(A.__webglFramebuffer[0],B,0):Jt(A.__webglFramebuffer,B,0)}else if(et){A.__webglDepthbuffer=[];for(let St=0;St<6;St++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[St]),A.__webglDepthbuffer[St]===void 0)A.__webglDepthbuffer[St]=o.createRenderbuffer(),te(A.__webglDepthbuffer[St],B,!1);else{const wt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=A.__webglDepthbuffer[St];o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,wt,o.RENDERBUFFER,xt)}}else{const St=B.texture.mipmaps;if(St&&St.length>0?i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),te(A.__webglDepthbuffer,B,!1);else{const wt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,wt,o.RENDERBUFFER,xt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function gn(B,A,et){const St=r.get(B);A!==void 0&&Vt(St.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Te(B)}function ce(B){const A=B.texture,et=r.get(B),St=r.get(A);B.addEventListener("dispose",X);const wt=B.textures,xt=B.isWebGLCubeRenderTarget===!0,se=wt.length>1;if(se||(St.__webglTexture===void 0&&(St.__webglTexture=o.createTexture()),St.__version=A.version,d.memory.textures++),xt){et.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer[zt]=[];for(let ne=0;ne<A.mipmaps.length;ne++)et.__webglFramebuffer[zt][ne]=o.createFramebuffer()}else et.__webglFramebuffer[zt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer=[];for(let zt=0;zt<A.mipmaps.length;zt++)et.__webglFramebuffer[zt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(se)for(let zt=0,ne=wt.length;zt<ne;zt++){const me=r.get(wt[zt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),d.memory.textures++)}if(B.samples>0&&un(B)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let zt=0;zt<wt.length;zt++){const ne=wt[zt];et.__webglColorRenderbuffer[zt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[zt]);const me=u.convert(ne.format,ne.colorSpace),Ut=u.convert(ne.type),Nt=V(ne.internalFormat,me,Ut,ne.colorSpace,B.isXRRenderTarget===!0),Zt=Z(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Nt,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,et.__webglColorRenderbuffer[zt])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),te(et.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xt){i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),ot(o.TEXTURE_CUBE_MAP,A);for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)Vt(et.__webglFramebuffer[zt][ne],B,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,ne);else Vt(et.__webglFramebuffer[zt],B,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);T(A)&&M(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(se){for(let zt=0,ne=wt.length;zt<ne;zt++){const me=wt[zt],Ut=r.get(me);let Nt=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Nt=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Ut.__webglTexture),ot(Nt,me),Vt(et.__webglFramebuffer,B,me,o.COLOR_ATTACHMENT0+zt,Nt,0),T(me)&&M(Nt)}i.unbindTexture()}else{let zt=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(zt=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,St.__webglTexture),ot(zt,A),A.mipmaps&&A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)Vt(et.__webglFramebuffer[ne],B,A,o.COLOR_ATTACHMENT0,zt,ne);else Vt(et.__webglFramebuffer,B,A,o.COLOR_ATTACHMENT0,zt,0);T(A)&&M(zt),i.unbindTexture()}B.depthBuffer&&Te(B)}function de(B){const A=B.textures;for(let et=0,St=A.length;et<St;et++){const wt=A[et];if(T(wt)){const xt=G(B),se=r.get(wt).__webglTexture;i.bindTexture(xt,se),M(xt),i.unbindTexture()}}}const Ie=[],ye=[];function dn(B){if(B.samples>0){if(un(B)===!1){const A=B.textures,et=B.width,St=B.height;let wt=o.COLOR_BUFFER_BIT;const xt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,se=r.get(B),zt=A.length>1;if(zt)for(let me=0;me<A.length;me++)i.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+me,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,se.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+me,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ne=B.texture.mipmaps;ne&&ne.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let me=0;me<A.length;me++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(wt|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(wt|=o.STENCIL_BUFFER_BIT)),zt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,se.__webglColorRenderbuffer[me]);const Ut=r.get(A[me]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ut,0)}o.blitFramebuffer(0,0,et,St,0,0,et,St,wt,o.NEAREST),v===!0&&(Ie.length=0,ye.length=0,Ie.push(o.COLOR_ATTACHMENT0+me),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Ie.push(xt),ye.push(xt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ye)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),zt)for(let me=0;me<A.length;me++){i.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+me,o.RENDERBUFFER,se.__webglColorRenderbuffer[me]);const Ut=r.get(A[me]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,se.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+me,o.TEXTURE_2D,Ut,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&v){const A=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Z(B){return Math.min(l.maxSamples,B.samples)}function un(B){const A=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ue(B){const A=d.render.frame;S.get(B)!==A&&(S.set(B,A),B.update())}function Ve(B,A){const et=B.colorSpace,St=B.format,wt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||et!==Lo&&et!==qr&&(ke.getTransfer(et)===an?(St!==Ri||wt!==oa)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",et)),A}function ee(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=tt,this.setTexture2D=pt,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=nt,this.rebindTextures=gn,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=un,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function zb(o,e){function i(r,l=qr){let u;const d=ke.getTransfer(l);if(r===oa)return o.UNSIGNED_BYTE;if(r===Gp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Vp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===U_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===L_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===w_)return o.BYTE;if(r===D_)return o.SHORT;if(r===Fl)return o.UNSIGNED_SHORT;if(r===Hp)return o.INT;if(r===wa)return o.UNSIGNED_INT;if(r===Vi)return o.FLOAT;if(r===or)return o.HALF_FLOAT;if(r===N_)return o.ALPHA;if(r===O_)return o.RGB;if(r===Ri)return o.RGBA;if(r===lr)return o.DEPTH_COMPONENT;if(r===Cs)return o.DEPTH_STENCIL;if(r===P_)return o.RED;if(r===Xp)return o.RED_INTEGER;if(r===Uo)return o.RG;if(r===kp)return o.RG_INTEGER;if(r===Wp)return o.RGBA_INTEGER;if(r===Oc||r===Pc||r===Fc||r===zc)if(d===an)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Oc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Oc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tp||r===ep||r===np||r===ip)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===tp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ep)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===np)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ip)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ap||r===rp||r===sp||r===op||r===lp||r===up||r===cp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===ap||r===rp)return d===an?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===sp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===op)return u.COMPRESSED_R11_EAC;if(r===lp)return u.COMPRESSED_SIGNED_R11_EAC;if(r===up)return u.COMPRESSED_RG11_EAC;if(r===cp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===fp||r===hp||r===dp||r===pp||r===mp||r===gp||r===vp||r===_p||r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===Tp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===fp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_p)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ep)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tp)return d===an?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bp||r===Ap||r===Rp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===bp)return d===an?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ap)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cp||r===wp||r===Dp||r===Up)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Cp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===wp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Up)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new j_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new mi({vertexShader:Bb,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new Yr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gb extends Oo{constructor(e,i){super();const r=this;let l=null,u=1,d=null,p="local-floor",v=1,m=null,S=null,x=null,E=null,R=null,D=null;const O=typeof XRWebGLBinding<"u",T=new Hb,M={},G=i.getContextAttributes();let V=null,F=null;const q=[],Y=[],X=new $e;let at=null;const L=new sa;L.viewport=new Ln;const b=new sa;b.viewport=new Ln;const P=[L,b],tt=new KS;let K=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ht){let yt=q[ht];return yt===void 0&&(yt=new Dd,q[ht]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(ht){let yt=q[ht];return yt===void 0&&(yt=new Dd,q[ht]=yt),yt.getGripSpace()},this.getHand=function(ht){let yt=q[ht];return yt===void 0&&(yt=new Dd,q[ht]=yt),yt.getHandSpace()};function pt(ht){const yt=Y.indexOf(ht.inputSource);if(yt===-1)return;const Vt=q[yt];Vt!==void 0&&(Vt.update(ht.inputSource,ht.frame,m||d),Vt.dispatchEvent({type:ht.type,data:ht.inputSource}))}function N(){l.removeEventListener("select",pt),l.removeEventListener("selectstart",pt),l.removeEventListener("selectend",pt),l.removeEventListener("squeeze",pt),l.removeEventListener("squeezestart",pt),l.removeEventListener("squeezeend",pt),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",I);for(let ht=0;ht<q.length;ht++){const yt=Y[ht];yt!==null&&(Y[ht]=null,q[ht].disconnect(yt))}K=null,dt=null,T.reset();for(const ht in M)delete M[ht];e.setRenderTarget(V),R=null,E=null,x=null,l=null,F=null,qt.stop(),r.isPresenting=!1,e.setPixelRatio(at),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ht){u=ht,r.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ht){p=ht,r.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ht){m=ht},this.getBaseLayer=function(){return E!==null?E:R},this.getBinding=function(){return x===null&&O&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return D},this.getSession=function(){return l},this.setSession=async function(ht){if(l=ht,l!==null){if(V=e.getRenderTarget(),l.addEventListener("select",pt),l.addEventListener("selectstart",pt),l.addEventListener("selectend",pt),l.addEventListener("squeeze",pt),l.addEventListener("squeezestart",pt),l.addEventListener("squeezeend",pt),l.addEventListener("end",N),l.addEventListener("inputsourceschange",I),G.xrCompatible!==!0&&await i.makeXRCompatible(),at=e.getPixelRatio(),e.getSize(X),O&&"createProjectionLayer"in XRWebGLBinding.prototype){let Vt=null,te=null,Jt=null;G.depth&&(Jt=G.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Vt=G.stencil?Cs:lr,te=G.stencil?zl:wa);const Te={colorFormat:i.RGBA8,depthFormat:Jt,scaleFactor:u};x=this.getBinding(),E=x.createProjectionLayer(Te),l.updateRenderState({layers:[E]}),e.setPixelRatio(1),e.setSize(E.textureWidth,E.textureHeight,!1),F=new Ci(E.textureWidth,E.textureHeight,{format:Ri,type:oa,depthTexture:new Hl(E.textureWidth,E.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Vt),stencilBuffer:G.stencil,colorSpace:e.outputColorSpace,samples:G.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const Vt={antialias:G.antialias,alpha:!0,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:u};R=new XRWebGLLayer(l,i,Vt),l.updateRenderState({baseLayer:R}),e.setPixelRatio(1),e.setSize(R.framebufferWidth,R.framebufferHeight,!1),F=new Ci(R.framebufferWidth,R.framebufferHeight,{format:Ri,type:oa,colorSpace:e.outputColorSpace,stencilBuffer:G.stencil,resolveDepthBuffer:R.ignoreDepthValues===!1,resolveStencilBuffer:R.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(v),m=null,d=await l.requestReferenceSpace(p),qt.setContext(l),qt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function I(ht){for(let yt=0;yt<ht.removed.length;yt++){const Vt=ht.removed[yt],te=Y.indexOf(Vt);te>=0&&(Y[te]=null,q[te].disconnect(Vt))}for(let yt=0;yt<ht.added.length;yt++){const Vt=ht.added[yt];let te=Y.indexOf(Vt);if(te===-1){for(let Te=0;Te<q.length;Te++)if(Te>=Y.length){Y.push(Vt),te=Te;break}else if(Y[Te]===null){Y[Te]=Vt,te=Te;break}if(te===-1)break}const Jt=q[te];Jt&&Jt.connect(Vt)}}const nt=new ft,Et=new ft;function At(ht,yt,Vt){nt.setFromMatrixPosition(yt.matrixWorld),Et.setFromMatrixPosition(Vt.matrixWorld);const te=nt.distanceTo(Et),Jt=yt.projectionMatrix.elements,Te=Vt.projectionMatrix.elements,gn=Jt[14]/(Jt[10]-1),ce=Jt[14]/(Jt[10]+1),de=(Jt[9]+1)/Jt[5],Ie=(Jt[9]-1)/Jt[5],ye=(Jt[8]-1)/Jt[0],dn=(Te[8]+1)/Te[0],Z=gn*ye,un=gn*dn,Ue=te/(-ye+dn),Ve=Ue*-ye;if(yt.matrixWorld.decompose(ht.position,ht.quaternion,ht.scale),ht.translateX(Ve),ht.translateZ(Ue),ht.matrixWorld.compose(ht.position,ht.quaternion,ht.scale),ht.matrixWorldInverse.copy(ht.matrixWorld).invert(),Jt[10]===-1)ht.projectionMatrix.copy(yt.projectionMatrix),ht.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const ee=gn+Ue,B=ce+Ue,A=Z-Ve,et=un+(te-Ve),St=de*ce/B*ee,wt=Ie*ce/B*ee;ht.projectionMatrix.makePerspective(A,et,St,wt,ee,B),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert()}}function H(ht,yt){yt===null?ht.matrixWorld.copy(ht.matrix):ht.matrixWorld.multiplyMatrices(yt.matrixWorld,ht.matrix),ht.matrixWorldInverse.copy(ht.matrixWorld).invert()}this.updateCamera=function(ht){if(l===null)return;let yt=ht.near,Vt=ht.far;T.texture!==null&&(T.depthNear>0&&(yt=T.depthNear),T.depthFar>0&&(Vt=T.depthFar)),tt.near=b.near=L.near=yt,tt.far=b.far=L.far=Vt,(K!==tt.near||dt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),K=tt.near,dt=tt.far),tt.layers.mask=ht.layers.mask|6,L.layers.mask=tt.layers.mask&3,b.layers.mask=tt.layers.mask&5;const te=ht.parent,Jt=tt.cameras;H(tt,te);for(let Te=0;Te<Jt.length;Te++)H(Jt[Te],te);Jt.length===2?At(tt,L,b):tt.projectionMatrix.copy(L.projectionMatrix),ot(ht,tt,te)};function ot(ht,yt,Vt){Vt===null?ht.matrix.copy(yt.matrixWorld):(ht.matrix.copy(Vt.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(yt.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(yt.projectionMatrix),ht.projectionMatrixInverse.copy(yt.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=Lp*2*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(E===null&&R===null))return v},this.setFoveation=function(ht){v=ht,E!==null&&(E.fixedFoveation=ht),R!==null&&R.fixedFoveation!==void 0&&(R.fixedFoveation=ht)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(tt)},this.getCameraTexture=function(ht){return M[ht]};let Tt=null;function Pt(ht,yt){if(S=yt.getViewerPose(m||d),D=yt,S!==null){const Vt=S.views;R!==null&&(e.setRenderTargetFramebuffer(F,R.framebuffer),e.setRenderTarget(F));let te=!1;Vt.length!==tt.cameras.length&&(tt.cameras.length=0,te=!0);for(let ce=0;ce<Vt.length;ce++){const de=Vt[ce];let Ie=null;if(R!==null)Ie=R.getViewport(de);else{const dn=x.getViewSubImage(E,de);Ie=dn.viewport,ce===0&&(e.setRenderTargetTextures(F,dn.colorTexture,dn.depthStencilTexture),e.setRenderTarget(F))}let ye=P[ce];ye===void 0&&(ye=new sa,ye.layers.enable(ce),ye.viewport=new Ln,P[ce]=ye),ye.matrix.fromArray(de.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(de.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ce===0&&(tt.matrix.copy(ye.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),te===!0&&tt.cameras.push(ye)}const Jt=l.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&O){x=r.getBinding();const ce=x.getDepthInformation(Vt[0]);ce&&ce.isValid&&ce.texture&&T.init(ce,l.renderState)}if(Jt&&Jt.includes("camera-access")&&O){e.state.unbindTexture(),x=r.getBinding();for(let ce=0;ce<Vt.length;ce++){const de=Vt[ce].camera;if(de){let Ie=M[de];Ie||(Ie=new j_,M[de]=Ie);const ye=x.getCameraImage(de);Ie.sourceTexture=ye}}}}for(let Vt=0;Vt<q.length;Vt++){const te=Y[Vt],Jt=q[Vt];te!==null&&Jt!==void 0&&Jt.update(te,yt,m||d)}Tt&&Tt(ht,yt),yt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:yt}),D=null}const qt=new Z_;qt.setAnimationLoop(Pt),this.setAnimationLoop=function(ht){Tt=ht},this.dispose=function(){}}}const Es=new ur,Vb=new Rn;function Xb(o,e){function i(T,M){T.matrixAutoUpdate===!0&&T.updateMatrix(),M.value.copy(T.matrix)}function r(T,M){M.color.getRGB(T.fogColor.value,V_(o)),M.isFog?(T.fogNear.value=M.near,T.fogFar.value=M.far):M.isFogExp2&&(T.fogDensity.value=M.density)}function l(T,M,G,V,F){M.isMeshBasicMaterial||M.isMeshLambertMaterial?u(T,M):M.isMeshToonMaterial?(u(T,M),x(T,M)):M.isMeshPhongMaterial?(u(T,M),S(T,M)):M.isMeshStandardMaterial?(u(T,M),E(T,M),M.isMeshPhysicalMaterial&&R(T,M,F)):M.isMeshMatcapMaterial?(u(T,M),D(T,M)):M.isMeshDepthMaterial?u(T,M):M.isMeshDistanceMaterial?(u(T,M),O(T,M)):M.isMeshNormalMaterial?u(T,M):M.isLineBasicMaterial?(d(T,M),M.isLineDashedMaterial&&p(T,M)):M.isPointsMaterial?v(T,M,G,V):M.isSpriteMaterial?m(T,M):M.isShadowMaterial?(T.color.value.copy(M.color),T.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function u(T,M){T.opacity.value=M.opacity,M.color&&T.diffuse.value.copy(M.color),M.emissive&&T.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.bumpMap&&(T.bumpMap.value=M.bumpMap,i(M.bumpMap,T.bumpMapTransform),T.bumpScale.value=M.bumpScale,M.side===gi&&(T.bumpScale.value*=-1)),M.normalMap&&(T.normalMap.value=M.normalMap,i(M.normalMap,T.normalMapTransform),T.normalScale.value.copy(M.normalScale),M.side===gi&&T.normalScale.value.negate()),M.displacementMap&&(T.displacementMap.value=M.displacementMap,i(M.displacementMap,T.displacementMapTransform),T.displacementScale.value=M.displacementScale,T.displacementBias.value=M.displacementBias),M.emissiveMap&&(T.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,T.emissiveMapTransform)),M.specularMap&&(T.specularMap.value=M.specularMap,i(M.specularMap,T.specularMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest);const G=e.get(M),V=G.envMap,F=G.envMapRotation;V&&(T.envMap.value=V,Es.copy(F),Es.x*=-1,Es.y*=-1,Es.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),T.envMapRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(Es)),T.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=M.reflectivity,T.ior.value=M.ior,T.refractionRatio.value=M.refractionRatio),M.lightMap&&(T.lightMap.value=M.lightMap,T.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,T.lightMapTransform)),M.aoMap&&(T.aoMap.value=M.aoMap,T.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,T.aoMapTransform))}function d(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform))}function p(T,M){T.dashSize.value=M.dashSize,T.totalSize.value=M.dashSize+M.gapSize,T.scale.value=M.scale}function v(T,M,G,V){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.size.value=M.size*G,T.scale.value=V*.5,M.map&&(T.map.value=M.map,i(M.map,T.uvTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function m(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.rotation.value=M.rotation,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function S(T,M){T.specular.value.copy(M.specular),T.shininess.value=Math.max(M.shininess,1e-4)}function x(T,M){M.gradientMap&&(T.gradientMap.value=M.gradientMap)}function E(T,M){T.metalness.value=M.metalness,M.metalnessMap&&(T.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,T.metalnessMapTransform)),T.roughness.value=M.roughness,M.roughnessMap&&(T.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,T.roughnessMapTransform)),M.envMap&&(T.envMapIntensity.value=M.envMapIntensity)}function R(T,M,G){T.ior.value=M.ior,M.sheen>0&&(T.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),T.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(T.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,T.sheenColorMapTransform)),M.sheenRoughnessMap&&(T.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,T.sheenRoughnessMapTransform))),M.clearcoat>0&&(T.clearcoat.value=M.clearcoat,T.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(T.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,T.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(T.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===gi&&T.clearcoatNormalScale.value.negate())),M.dispersion>0&&(T.dispersion.value=M.dispersion),M.iridescence>0&&(T.iridescence.value=M.iridescence,T.iridescenceIOR.value=M.iridescenceIOR,T.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(T.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,T.iridescenceMapTransform)),M.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),M.transmission>0&&(T.transmission.value=M.transmission,T.transmissionSamplerMap.value=G.texture,T.transmissionSamplerSize.value.set(G.width,G.height),M.transmissionMap&&(T.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,T.transmissionMapTransform)),T.thickness.value=M.thickness,M.thicknessMap&&(T.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=M.attenuationDistance,T.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(T.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(T.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=M.specularIntensity,T.specularColor.value.copy(M.specularColor),M.specularColorMap&&(T.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,T.specularColorMapTransform)),M.specularIntensityMap&&(T.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,T.specularIntensityMapTransform))}function D(T,M){M.matcap&&(T.matcap.value=M.matcap)}function O(T,M){const G=e.get(M).light;T.referencePosition.value.setFromMatrixPosition(G.matrixWorld),T.nearDistance.value=G.shadow.camera.near,T.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function kb(o,e,i,r){let l={},u={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(G,V){const F=V.program;r.uniformBlockBinding(G,F)}function m(G,V){let F=l[G.id];F===void 0&&(D(G),F=S(G),l[G.id]=F,G.addEventListener("dispose",T));const q=V.program;r.updateUBOMapping(G,q);const Y=e.render.frame;u[G.id]!==Y&&(E(G),u[G.id]=Y)}function S(G){const V=x();G.__bindingPointIndex=V;const F=o.createBuffer(),q=G.__size,Y=G.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,q,Y),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,V,F),F}function x(){for(let G=0;G<p;G++)if(d.indexOf(G)===-1)return d.push(G),G;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(G){const V=l[G.id],F=G.uniforms,q=G.__cache;o.bindBuffer(o.UNIFORM_BUFFER,V);for(let Y=0,X=F.length;Y<X;Y++){const at=Array.isArray(F[Y])?F[Y]:[F[Y]];for(let L=0,b=at.length;L<b;L++){const P=at[L];if(R(P,Y,L,q)===!0){const tt=P.__offset,K=Array.isArray(P.value)?P.value:[P.value];let dt=0;for(let pt=0;pt<K.length;pt++){const N=K[pt],I=O(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,tt+dt,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,dt),dt+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function R(G,V,F,q){const Y=G.value,X=V+"_"+F;if(q[X]===void 0)return typeof Y=="number"||typeof Y=="boolean"?q[X]=Y:q[X]=Y.clone(),!0;{const at=q[X];if(typeof Y=="number"||typeof Y=="boolean"){if(at!==Y)return q[X]=Y,!0}else if(at.equals(Y)===!1)return at.copy(Y),!0}return!1}function D(G){const V=G.uniforms;let F=0;const q=16;for(let X=0,at=V.length;X<at;X++){const L=Array.isArray(V[X])?V[X]:[V[X]];for(let b=0,P=L.length;b<P;b++){const tt=L[b],K=Array.isArray(tt.value)?tt.value:[tt.value];for(let dt=0,pt=K.length;dt<pt;dt++){const N=K[dt],I=O(N),nt=F%q,Et=nt%I.boundary,At=nt+Et;F+=Et,At!==0&&q-At<I.storage&&(F+=q-At),tt.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=F,F+=I.storage}}}const Y=F%q;return Y>0&&(F+=q-Y),G.__size=F,G.__cache={},this}function O(G){const V={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(V.boundary=4,V.storage=4):G.isVector2?(V.boundary=8,V.storage=8):G.isVector3||G.isColor?(V.boundary=16,V.storage=12):G.isVector4?(V.boundary=16,V.storage=16):G.isMatrix3?(V.boundary=48,V.storage=48):G.isMatrix4?(V.boundary=64,V.storage=64):G.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",G),V}function T(G){const V=G.target;V.removeEventListener("dispose",T);const F=d.indexOf(V.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[V.id]),delete l[V.id],delete u[V.id]}function M(){for(const G in l)o.deleteBuffer(l[G]);d=[],l={},u={}}return{bind:v,update:m,dispose:M}}const Wb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ba=null;function qb(){return ba===null&&(ba=new Np(Wb,16,16,Uo,or),ba.name="DFG_LUT",ba.minFilter=ci,ba.magFilter=ci,ba.wrapS=ar,ba.wrapT=ar,ba.generateMipmaps=!1,ba.needsUpdate=!0),ba}class Yb{constructor(e={}){const{canvas:i=dS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:E=!1,outputBufferType:R=oa}=e;this.isWebGLRenderer=!0;let D;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");D=r.getContextAttributes().alpha}else D=d;const O=R,T=new Set([Wp,kp,Xp]),M=new Set([oa,wa,Fl,zl,Gp,Vp]),G=new Uint32Array(4),V=new Int32Array(4);let F=null,q=null;const Y=[],X=[];let at=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let b=!1;this._outputColorSpace=ra;let P=0,tt=0,K=null,dt=-1,pt=null;const N=new Ln,I=new Ln;let nt=null;const Et=new We(0);let At=0,H=i.width,ot=i.height,Tt=1,Pt=null,qt=null;const ht=new Ln(0,0,H,ot),yt=new Ln(0,0,H,ot);let Vt=!1;const te=new Y_;let Jt=!1,Te=!1;const gn=new Rn,ce=new ft,de=new Ln,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function dn(){return K===null?Tt:1}let Z=r;function un(w,it){return i.getContext(w,it)}try{const w={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:v,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ip}`),i.addEventListener("webglcontextlost",ve,!1),i.addEventListener("webglcontextrestored",qe,!1),i.addEventListener("webglcontextcreationerror",De,!1),Z===null){const it="webgl2";if(Z=un(it,w),Z===null)throw un(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ke("WebGLRenderer: "+w.message),w}let Ue,Ve,ee,B,A,et,St,wt,xt,se,zt,ne,me,Ut,Nt,Zt,Yt,Bt,Se,J,It,Ot,Wt,Dt;function Rt(){Ue=new qT(Z),Ue.init(),Ot=new zb(Z,Ue),Ve=new zT(Z,Ue,e,Ot),ee=new Pb(Z,Ue),Ve.reversedDepthBuffer&&E&&ee.buffers.depth.setReversed(!0),B=new ZT(Z),A=new yb,et=new Fb(Z,Ue,ee,A,Ve,Ot,B),St=new IT(L),wt=new WT(L),xt=new $S(Z),Wt=new PT(Z,xt),se=new YT(Z,xt,B,Wt),zt=new QT(Z,se,xt,B),Se=new KT(Z,Ve,et),Zt=new BT(A),ne=new xb(L,St,wt,Ue,Ve,Wt,Zt),me=new Xb(L,A),Ut=new Mb,Nt=new Cb(Ue),Bt=new OT(L,St,wt,ee,zt,D,v),Yt=new Nb(L,zt,Ve),Dt=new kb(Z,B,Ve,ee),J=new FT(Z,Ue,B),It=new jT(Z,Ue,B),B.programs=ne.programs,L.capabilities=Ve,L.extensions=Ue,L.properties=A,L.renderLists=Ut,L.shadowMap=Yt,L.state=ee,L.info=B}Rt(),O!==oa&&(at=new $T(O,i.width,i.height,l,u));const Ft=new Gb(L,Z);this.xr=Ft,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const w=Ue.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ue.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(w){w!==void 0&&(Tt=w,this.setSize(H,ot,!1))},this.getSize=function(w){return w.set(H,ot)},this.setSize=function(w,it,gt=!0){if(Ft.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,ot=it,i.width=Math.floor(w*Tt),i.height=Math.floor(it*Tt),gt===!0&&(i.style.width=w+"px",i.style.height=it+"px"),at!==null&&at.setSize(i.width,i.height),this.setViewport(0,0,w,it)},this.getDrawingBufferSize=function(w){return w.set(H*Tt,ot*Tt).floor()},this.setDrawingBufferSize=function(w,it,gt){H=w,ot=it,Tt=gt,i.width=Math.floor(w*gt),i.height=Math.floor(it*gt),this.setViewport(0,0,w,it)},this.setEffects=function(w){if(O===oa){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let it=0;it<w.length;it++)if(w[it].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}at.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(ht)},this.setViewport=function(w,it,gt,lt){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,it,gt,lt),ee.viewport(N.copy(ht).multiplyScalar(Tt).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,it,gt,lt){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,it,gt,lt),ee.scissor(I.copy(yt).multiplyScalar(Tt).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(w){ee.setScissorTest(Vt=w)},this.setOpaqueSort=function(w){Pt=w},this.setTransparentSort=function(w){qt=w},this.getClearColor=function(w){return w.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(w=!0,it=!0,gt=!0){let lt=0;if(w){let st=!1;if(K!==null){const Ht=K.texture.format;st=T.has(Ht)}if(st){const Ht=K.texture.type,kt=M.has(Ht),Xt=Bt.getClearColor(),$t=Bt.getClearAlpha(),ie=Xt.r,ue=Xt.g,re=Xt.b;kt?(G[0]=ie,G[1]=ue,G[2]=re,G[3]=$t,Z.clearBufferuiv(Z.COLOR,0,G)):(V[0]=ie,V[1]=ue,V[2]=re,V[3]=$t,Z.clearBufferiv(Z.COLOR,0,V))}else lt|=Z.COLOR_BUFFER_BIT}it&&(lt|=Z.DEPTH_BUFFER_BIT),gt&&(lt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ve,!1),i.removeEventListener("webglcontextrestored",qe,!1),i.removeEventListener("webglcontextcreationerror",De,!1),Bt.dispose(),Ut.dispose(),Nt.dispose(),A.dispose(),St.dispose(),wt.dispose(),zt.dispose(),Wt.dispose(),Dt.dispose(),ne.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Da),Ft.removeEventListener("sessionend",cn),wn.stop()};function ve(w){w.preventDefault(),Rv("WebGLRenderer: Context Lost."),b=!0}function qe(){Rv("WebGLRenderer: Context Restored."),b=!1;const w=B.autoReset,it=Yt.enabled,gt=Yt.autoUpdate,lt=Yt.needsUpdate,st=Yt.type;Rt(),B.autoReset=w,Yt.enabled=it,Yt.autoUpdate=gt,Yt.needsUpdate=lt,Yt.type=st}function De(w){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Cn(w){const it=w.target;it.removeEventListener("dispose",Cn),Di(it)}function Di(w){la(w),A.remove(w)}function la(w){const it=A.get(w).programs;it!==void 0&&(it.forEach(function(gt){ne.releaseProgram(gt)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,it,gt,lt,st,Ht){it===null&&(it=Ie);const kt=st.isMesh&&st.matrixWorld.determinant()<0,Xt=ca(w,it,gt,lt,st);ee.setMaterial(lt,kt);let $t=gt.index,ie=1;if(lt.wireframe===!0){if($t=se.getWireframeAttribute(gt),$t===void 0)return;ie=2}const ue=gt.drawRange,re=gt.attributes.position;let pe=ue.start*ie,He=(ue.start+ue.count)*ie;Ht!==null&&(pe=Math.max(pe,Ht.start*ie),He=Math.min(He,(Ht.start+Ht.count)*ie)),$t!==null?(pe=Math.max(pe,0),He=Math.min(He,$t.count)):re!=null&&(pe=Math.max(pe,0),He=Math.min(He,re.count));const fn=He-pe;if(fn<0||fn===1/0)return;Wt.setup(st,lt,Xt,gt,$t);let tn,Xe=J;if($t!==null&&(tn=xt.get($t),Xe=It,Xe.setIndex(tn)),st.isMesh)lt.wireframe===!0?(ee.setLineWidth(lt.wireframeLinewidth*dn()),Xe.setMode(Z.LINES)):Xe.setMode(Z.TRIANGLES);else if(st.isLine){let Qt=lt.linewidth;Qt===void 0&&(Qt=1),ee.setLineWidth(Qt*dn()),st.isLineSegments?Xe.setMode(Z.LINES):st.isLineLoop?Xe.setMode(Z.LINE_LOOP):Xe.setMode(Z.LINE_STRIP)}else st.isPoints?Xe.setMode(Z.POINTS):st.isSprite&&Xe.setMode(Z.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)Bl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xe.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Xe.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const Qt=st._multiDrawStarts,Ge=st._multiDrawCounts,xe=st._multiDrawCount,Mn=$t?xt.get($t).bytesPerElement:1,Yi=A.get(lt).currentProgram.getUniforms();for(let On=0;On<xe;On++)Yi.setValue(Z,"_gl_DrawID",On),Xe.render(Qt[On]/Mn,Ge[On])}else if(st.isInstancedMesh)Xe.renderInstances(pe,fn,st.count);else if(gt.isInstancedBufferGeometry){const Qt=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Ge=Math.min(gt.instanceCount,Qt);Xe.renderInstances(pe,fn,Ge)}else Xe.render(pe,fn)};function Kr(w,it,gt){w.transparent===!0&&w.side===ir&&w.forceSinglePass===!1?(w.side=gi,w.needsUpdate=!0,Wi(w,it,gt),w.side=Zr,w.needsUpdate=!0,Wi(w,it,gt),w.side=ir):Wi(w,it,gt)}this.compile=function(w,it,gt=null){gt===null&&(gt=w),q=Nt.get(gt),q.init(it),X.push(q),gt.traverseVisible(function(st){st.isLight&&st.layers.test(it.layers)&&(q.pushLight(st),st.castShadow&&q.pushShadow(st))}),w!==gt&&w.traverseVisible(function(st){st.isLight&&st.layers.test(it.layers)&&(q.pushLight(st),st.castShadow&&q.pushShadow(st))}),q.setupLights();const lt=new Set;return w.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Ht=st.material;if(Ht)if(Array.isArray(Ht))for(let kt=0;kt<Ht.length;kt++){const Xt=Ht[kt];Kr(Xt,gt,st),lt.add(Xt)}else Kr(Ht,gt,st),lt.add(Ht)}),q=X.pop(),lt},this.compileAsync=function(w,it,gt=null){const lt=this.compile(w,it,gt);return new Promise(st=>{function Ht(){if(lt.forEach(function(kt){A.get(kt).currentProgram.isReady()&&lt.delete(kt)}),lt.size===0){st(w);return}setTimeout(Ht,10)}Ue.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let ri=null;function Ui(w){ri&&ri(w)}function Da(){wn.stop()}function cn(){wn.start()}const wn=new Z_;wn.setAnimationLoop(Ui),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(w){ri=w,Ft.setAnimationLoop(w),w===null?wn.stop():wn.start()},Ft.addEventListener("sessionstart",Da),Ft.addEventListener("sessionend",cn),this.render=function(w,it){if(it!==void 0&&it.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const gt=Ft.enabled===!0&&Ft.isPresenting===!0,lt=at!==null&&(K===null||gt)&&at.begin(L,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(at===null||at.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(it),it=Ft.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,it,K),q=Nt.get(w,X.length),q.init(it),X.push(q),gn.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),te.setFromProjectionMatrix(gn,Ra,it.reversedDepth),Te=this.localClippingEnabled,Jt=Zt.init(this.clippingPlanes,Te),F=Ut.get(w,Y.length),F.init(),Y.push(F),Ft.enabled===!0&&Ft.isPresenting===!0){const kt=L.xr.getDepthSensingMesh();kt!==null&&si(kt,it,-1/0,L.sortObjects)}si(w,it,0,L.sortObjects),F.finish(),L.sortObjects===!0&&F.sort(Pt,qt),ye=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,ye&&Bt.addToRenderList(F,w),this.info.render.frame++,Jt===!0&&Zt.beginShadows();const st=q.state.shadowsArray;if(Yt.render(st,w,it),Jt===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&at.hasRenderPass())===!1){const kt=F.opaque,Xt=F.transmissive;if(q.setupLights(),it.isArrayCamera){const $t=it.cameras;if(Xt.length>0)for(let ie=0,ue=$t.length;ie<ue;ie++){const re=$t[ie];Sn(kt,Xt,w,re)}ye&&Bt.render(w);for(let ie=0,ue=$t.length;ie<ue;ie++){const re=$t[ie];yn(F,w,re,re.viewport)}}else Xt.length>0&&Sn(kt,Xt,w,it),ye&&Bt.render(w),yn(F,w,it)}K!==null&&tt===0&&(et.updateMultisampleRenderTarget(K),et.updateRenderTargetMipmap(K)),lt&&at.end(L),w.isScene===!0&&w.onAfterRender(L,w,it),Wt.resetDefaultState(),dt=-1,pt=null,X.pop(),X.length>0?(q=X[X.length-1],Jt===!0&&Zt.setGlobalState(L.clippingPlanes,q.state.camera)):q=null,Y.pop(),Y.length>0?F=Y[Y.length-1]:F=null};function si(w,it,gt,lt){if(w.visible===!1)return;if(w.layers.test(it.layers)){if(w.isGroup)gt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(it);else if(w.isLight)q.pushLight(w),w.castShadow&&q.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){lt&&de.setFromMatrixPosition(w.matrixWorld).applyMatrix4(gn);const kt=zt.update(w),Xt=w.material;Xt.visible&&F.push(w,kt,Xt,gt,de.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||te.intersectsObject(w))){const kt=zt.update(w),Xt=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),de.copy(w.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),de.copy(kt.boundingSphere.center)),de.applyMatrix4(w.matrixWorld).applyMatrix4(gn)),Array.isArray(Xt)){const $t=kt.groups;for(let ie=0,ue=$t.length;ie<ue;ie++){const re=$t[ie],pe=Xt[re.materialIndex];pe&&pe.visible&&F.push(w,kt,pe,gt,de.z,re)}}else Xt.visible&&F.push(w,kt,Xt,gt,de.z,null)}}const Ht=w.children;for(let kt=0,Xt=Ht.length;kt<Xt;kt++)si(Ht[kt],it,gt,lt)}function yn(w,it,gt,lt){const{opaque:st,transmissive:Ht,transparent:kt}=w;q.setupLightsView(gt),Jt===!0&&Zt.setGlobalState(L.clippingPlanes,gt),lt&&ee.viewport(N.copy(lt)),st.length>0&&fi(st,it,gt),Ht.length>0&&fi(Ht,it,gt),kt.length>0&&fi(kt,it,gt),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Sn(w,it,gt,lt){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(q.state.transmissionRenderTarget[lt.id]===void 0){const pe=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");q.state.transmissionRenderTarget[lt.id]=new Ci(1,1,{generateMipmaps:!0,type:pe?or:oa,minFilter:Rs,samples:Ve.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const Ht=q.state.transmissionRenderTarget[lt.id],kt=lt.viewport||N;Ht.setSize(kt.z*L.transmissionResolutionScale,kt.w*L.transmissionResolutionScale);const Xt=L.getRenderTarget(),$t=L.getActiveCubeFace(),ie=L.getActiveMipmapLevel();L.setRenderTarget(Ht),L.getClearColor(Et),At=L.getClearAlpha(),At<1&&L.setClearColor(16777215,.5),L.clear(),ye&&Bt.render(gt);const ue=L.toneMapping;L.toneMapping=Ca;const re=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),q.setupLightsView(lt),Jt===!0&&Zt.setGlobalState(L.clippingPlanes,lt),fi(w,gt,lt),et.updateMultisampleRenderTarget(Ht),et.updateRenderTargetMipmap(Ht),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let He=0,fn=it.length;He<fn;He++){const tn=it[He],{object:Xe,geometry:Qt,material:Ge,group:xe}=tn;if(Ge.side===ir&&Xe.layers.test(lt.layers)){const Mn=Ge.side;Ge.side=gi,Ge.needsUpdate=!0,ua(Xe,gt,lt,Qt,Ge,xe),Ge.side=Mn,Ge.needsUpdate=!0,pe=!0}}pe===!0&&(et.updateMultisampleRenderTarget(Ht),et.updateRenderTargetMipmap(Ht))}L.setRenderTarget(Xt,$t,ie),L.setClearColor(Et,At),re!==void 0&&(lt.viewport=re),L.toneMapping=ue}function fi(w,it,gt){const lt=it.isScene===!0?it.overrideMaterial:null;for(let st=0,Ht=w.length;st<Ht;st++){const kt=w[st],{object:Xt,geometry:$t,group:ie}=kt;let ue=kt.material;ue.allowOverride===!0&&lt!==null&&(ue=lt),Xt.layers.test(gt.layers)&&ua(Xt,it,gt,$t,ue,ie)}}function ua(w,it,gt,lt,st,Ht){w.onBeforeRender(L,it,gt,lt,st,Ht),w.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),st.onBeforeRender(L,it,gt,lt,w,Ht),st.transparent===!0&&st.side===ir&&st.forceSinglePass===!1?(st.side=gi,st.needsUpdate=!0,L.renderBufferDirect(gt,it,lt,st,w,Ht),st.side=Zr,st.needsUpdate=!0,L.renderBufferDirect(gt,it,lt,st,w,Ht),st.side=ir):L.renderBufferDirect(gt,it,lt,st,w,Ht),w.onAfterRender(L,it,gt,lt,st,Ht)}function Wi(w,it,gt){it.isScene!==!0&&(it=Ie);const lt=A.get(w),st=q.state.lights,Ht=q.state.shadowsArray,kt=st.state.version,Xt=ne.getParameters(w,st.state,Ht,it,gt),$t=ne.getProgramCacheKey(Xt);let ie=lt.programs;lt.environment=w.isMeshStandardMaterial?it.environment:null,lt.fog=it.fog,lt.envMap=(w.isMeshStandardMaterial?wt:St).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?it.environmentRotation:w.envMapRotation,ie===void 0&&(w.addEventListener("dispose",Cn),ie=new Map,lt.programs=ie);let ue=ie.get($t);if(ue!==void 0){if(lt.currentProgram===ue&&lt.lightsStateVersion===kt)return Ua(w,Xt),ue}else Xt.uniforms=ne.getUniforms(w),w.onBeforeCompile(Xt,L),ue=ne.acquireProgram(Xt,$t),ie.set($t,ue),lt.uniforms=Xt.uniforms;const re=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(re.clippingPlanes=Zt.uniform),Ua(w,Xt),lt.needsLights=Nn(w),lt.lightsStateVersion=kt,lt.needsLights&&(re.ambientLightColor.value=st.state.ambient,re.lightProbe.value=st.state.probe,re.directionalLights.value=st.state.directional,re.directionalLightShadows.value=st.state.directionalShadow,re.spotLights.value=st.state.spot,re.spotLightShadows.value=st.state.spotShadow,re.rectAreaLights.value=st.state.rectArea,re.ltc_1.value=st.state.rectAreaLTC1,re.ltc_2.value=st.state.rectAreaLTC2,re.pointLights.value=st.state.point,re.pointLightShadows.value=st.state.pointShadow,re.hemisphereLights.value=st.state.hemi,re.directionalShadowMap.value=st.state.directionalShadowMap,re.directionalShadowMatrix.value=st.state.directionalShadowMatrix,re.spotShadowMap.value=st.state.spotShadowMap,re.spotLightMatrix.value=st.state.spotLightMatrix,re.spotLightMap.value=st.state.spotLightMap,re.pointShadowMap.value=st.state.pointShadowMap,re.pointShadowMatrix.value=st.state.pointShadowMatrix),lt.currentProgram=ue,lt.uniformsList=null,ue}function Qr(w){if(w.uniformsList===null){const it=w.currentProgram.getUniforms();w.uniformsList=Bc.seqWithValue(it.seq,w.uniforms)}return w.uniformsList}function Ua(w,it){const gt=A.get(w);gt.outputColorSpace=it.outputColorSpace,gt.batching=it.batching,gt.batchingColor=it.batchingColor,gt.instancing=it.instancing,gt.instancingColor=it.instancingColor,gt.instancingMorph=it.instancingMorph,gt.skinning=it.skinning,gt.morphTargets=it.morphTargets,gt.morphNormals=it.morphNormals,gt.morphColors=it.morphColors,gt.morphTargetsCount=it.morphTargetsCount,gt.numClippingPlanes=it.numClippingPlanes,gt.numIntersection=it.numClipIntersection,gt.vertexAlphas=it.vertexAlphas,gt.vertexTangents=it.vertexTangents,gt.toneMapping=it.toneMapping}function ca(w,it,gt,lt,st){it.isScene!==!0&&(it=Ie),et.resetTextureUnits();const Ht=it.fog,kt=lt.isMeshStandardMaterial?it.environment:null,Xt=K===null?L.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Lo,$t=(lt.isMeshStandardMaterial?wt:St).get(lt.envMap||kt),ie=lt.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,ue=!!gt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),re=!!gt.morphAttributes.position,pe=!!gt.morphAttributes.normal,He=!!gt.morphAttributes.color;let fn=Ca;lt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(fn=L.toneMapping);const tn=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,Xe=tn!==void 0?tn.length:0,Qt=A.get(lt),Ge=q.state.lights;if(Jt===!0&&(Te===!0||w!==pt)){const Tn=w===pt&&lt.id===dt;Zt.setState(lt,w,Tn)}let xe=!1;lt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ge.state.version||Qt.outputColorSpace!==Xt||st.isBatchedMesh&&Qt.batching===!1||!st.isBatchedMesh&&Qt.batching===!0||st.isBatchedMesh&&Qt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&Qt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&Qt.instancing===!1||!st.isInstancedMesh&&Qt.instancing===!0||st.isSkinnedMesh&&Qt.skinning===!1||!st.isSkinnedMesh&&Qt.skinning===!0||st.isInstancedMesh&&Qt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Qt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Qt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Qt.instancingMorph===!1&&st.morphTexture!==null||Qt.envMap!==$t||lt.fog===!0&&Qt.fog!==Ht||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Zt.numPlanes||Qt.numIntersection!==Zt.numIntersection)||Qt.vertexAlphas!==ie||Qt.vertexTangents!==ue||Qt.morphTargets!==re||Qt.morphNormals!==pe||Qt.morphColors!==He||Qt.toneMapping!==fn||Qt.morphTargetsCount!==Xe)&&(xe=!0):(xe=!0,Qt.__version=lt.version);let Mn=Qt.currentProgram;xe===!0&&(Mn=Wi(lt,it,st));let Yi=!1,On=!1,xi=!1;const Qe=Mn.getUniforms(),Pn=Qt.uniforms;if(ee.useProgram(Mn.program)&&(Yi=!0,On=!0,xi=!0),lt.id!==dt&&(dt=lt.id,On=!0),Yi||pt!==w){ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Qe.setValue(Z,"projectionMatrix",w.projectionMatrix),Qe.setValue(Z,"viewMatrix",w.matrixWorldInverse);const Fn=Qe.map.cameraPosition;Fn!==void 0&&Fn.setValue(Z,ce.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&Qe.setValue(Z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Qe.setValue(Z,"isOrthographic",w.isOrthographicCamera===!0),pt!==w&&(pt=w,On=!0,xi=!0)}if(Qt.needsLights&&(Ge.state.directionalShadowMap.length>0&&Qe.setValue(Z,"directionalShadowMap",Ge.state.directionalShadowMap,et),Ge.state.spotShadowMap.length>0&&Qe.setValue(Z,"spotShadowMap",Ge.state.spotShadowMap,et),Ge.state.pointShadowMap.length>0&&Qe.setValue(Z,"pointShadowMap",Ge.state.pointShadowMap,et)),st.isSkinnedMesh){Qe.setOptional(Z,st,"bindMatrix"),Qe.setOptional(Z,st,"bindMatrixInverse");const Tn=st.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Qe.setValue(Z,"boneTexture",Tn.boneTexture,et))}st.isBatchedMesh&&(Qe.setOptional(Z,st,"batchingTexture"),Qe.setValue(Z,"batchingTexture",st._matricesTexture,et),Qe.setOptional(Z,st,"batchingIdTexture"),Qe.setValue(Z,"batchingIdTexture",st._indirectTexture,et),Qe.setOptional(Z,st,"batchingColorTexture"),st._colorsTexture!==null&&Qe.setValue(Z,"batchingColorTexture",st._colorsTexture,et));const En=gt.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Se.update(st,gt,Mn),(On||Qt.receiveShadow!==st.receiveShadow)&&(Qt.receiveShadow=st.receiveShadow,Qe.setValue(Z,"receiveShadow",st.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Pn.envMap.value=$t,Pn.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&it.environment!==null&&(Pn.envMapIntensity.value=it.environmentIntensity),Pn.dfgLUT!==void 0&&(Pn.dfgLUT.value=qb()),On&&(Qe.setValue(Z,"toneMappingExposure",L.toneMappingExposure),Qt.needsLights&&cr(Pn,xi),Ht&&lt.fog===!0&&me.refreshFogUniforms(Pn,Ht),me.refreshMaterialUniforms(Pn,lt,Tt,ot,q.state.transmissionRenderTarget[w.id]),Bc.upload(Z,Qr(Qt),Pn,et)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Bc.upload(Z,Qr(Qt),Pn,et),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Qe.setValue(Z,"center",st.center),Qe.setValue(Z,"modelViewMatrix",st.modelViewMatrix),Qe.setValue(Z,"normalMatrix",st.normalMatrix),Qe.setValue(Z,"modelMatrix",st.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Tn=lt.uniformsGroups;for(let Fn=0,La=Tn.length;Fn<La;Fn++){const Qn=Tn[Fn];Dt.update(Qn,Mn),Dt.bind(Qn,Mn)}}return Mn}function cr(w,it){w.ambientLightColor.needsUpdate=it,w.lightProbe.needsUpdate=it,w.directionalLights.needsUpdate=it,w.directionalLightShadows.needsUpdate=it,w.pointLights.needsUpdate=it,w.pointLightShadows.needsUpdate=it,w.spotLights.needsUpdate=it,w.spotLightShadows.needsUpdate=it,w.rectAreaLights.needsUpdate=it,w.hemisphereLights.needsUpdate=it}function Nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,it,gt){const lt=A.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=it,A.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:gt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,it){const gt=A.get(w);gt.__webglFramebuffer=it,gt.__useDefaultFramebuffer=it===void 0};const Xn=Z.createFramebuffer();this.setRenderTarget=function(w,it=0,gt=0){K=w,P=it,tt=gt;let lt=null,st=!1,Ht=!1;if(w){const Xt=A.get(w);if(Xt.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(Z.FRAMEBUFFER,Xt.__webglFramebuffer),N.copy(w.viewport),I.copy(w.scissor),nt=w.scissorTest,ee.viewport(N),ee.scissor(I),ee.setScissorTest(nt),dt=-1;return}else if(Xt.__webglFramebuffer===void 0)et.setupRenderTarget(w);else if(Xt.__hasExternalTextures)et.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ue=w.depthTexture;if(Xt.__boundDepthTexture!==ue){if(ue!==null&&A.has(ue)&&(w.width!==ue.image.width||w.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ht=!0);const ie=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ie[it])?lt=ie[it][gt]:lt=ie[it],st=!0):w.samples>0&&et.useMultisampledRTT(w)===!1?lt=A.get(w).__webglMultisampledFramebuffer:Array.isArray(ie)?lt=ie[gt]:lt=ie,N.copy(w.viewport),I.copy(w.scissor),nt=w.scissorTest}else N.copy(ht).multiplyScalar(Tt).floor(),I.copy(yt).multiplyScalar(Tt).floor(),nt=Vt;if(gt!==0&&(lt=Xn),ee.bindFramebuffer(Z.FRAMEBUFFER,lt)&&ee.drawBuffers(w,lt),ee.viewport(N),ee.scissor(I),ee.setScissorTest(nt),st){const Xt=A.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+it,Xt.__webglTexture,gt)}else if(Ht){const Xt=it;for(let $t=0;$t<w.textures.length;$t++){const ie=A.get(w.textures[$t]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+$t,ie.__webglTexture,gt,Xt)}}else if(w!==null&&gt!==0){const Xt=A.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Xt.__webglTexture,gt)}dt=-1},this.readRenderTargetPixels=function(w,it,gt,lt,st,Ht,kt,Xt=0){if(!(w&&w.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&($t=$t[kt]),$t){ee.bindFramebuffer(Z.FRAMEBUFFER,$t);try{const ie=w.textures[Xt],ue=ie.format,re=ie.type;if(!Ve.textureFormatReadable(ue)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(re)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=w.width-lt&&gt>=0&&gt<=w.height-st&&(w.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Xt),Z.readPixels(it,gt,lt,st,Ot.convert(ue),Ot.convert(re),Ht))}finally{const ie=K!==null?A.get(K).__webglFramebuffer:null;ee.bindFramebuffer(Z.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(w,it,gt,lt,st,Ht,kt,Xt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&($t=$t[kt]),$t)if(it>=0&&it<=w.width-lt&&gt>=0&&gt<=w.height-st){ee.bindFramebuffer(Z.FRAMEBUFFER,$t);const ie=w.textures[Xt],ue=ie.format,re=ie.type;if(!Ve.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,pe),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ht.byteLength,Z.STREAM_READ),w.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Xt),Z.readPixels(it,gt,lt,st,Ot.convert(ue),Ot.convert(re),0);const He=K!==null?A.get(K).__webglFramebuffer:null;ee.bindFramebuffer(Z.FRAMEBUFFER,He);const fn=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await pS(Z,fn,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,pe),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ht),Z.deleteBuffer(pe),Z.deleteSync(fn),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,it=null,gt=0){const lt=Math.pow(2,-gt),st=Math.floor(w.image.width*lt),Ht=Math.floor(w.image.height*lt),kt=it!==null?it.x:0,Xt=it!==null?it.y:0;et.setTexture2D(w,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,gt,0,0,kt,Xt,st,Ht),ee.unbindTexture()};const Li=Z.createFramebuffer(),qi=Z.createFramebuffer();this.copyTextureToTexture=function(w,it,gt=null,lt=null,st=0,Ht=null){Ht===null&&(st!==0?(Bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ht=st,st=0):Ht=0);let kt,Xt,$t,ie,ue,re,pe,He,fn;const tn=w.isCompressedTexture?w.mipmaps[Ht]:w.image;if(gt!==null)kt=gt.max.x-gt.min.x,Xt=gt.max.y-gt.min.y,$t=gt.isBox3?gt.max.z-gt.min.z:1,ie=gt.min.x,ue=gt.min.y,re=gt.isBox3?gt.min.z:0;else{const En=Math.pow(2,-st);kt=Math.floor(tn.width*En),Xt=Math.floor(tn.height*En),w.isDataArrayTexture?$t=tn.depth:w.isData3DTexture?$t=Math.floor(tn.depth*En):$t=1,ie=0,ue=0,re=0}lt!==null?(pe=lt.x,He=lt.y,fn=lt.z):(pe=0,He=0,fn=0);const Xe=Ot.convert(it.format),Qt=Ot.convert(it.type);let Ge;it.isData3DTexture?(et.setTexture3D(it,0),Ge=Z.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(et.setTexture2DArray(it,0),Ge=Z.TEXTURE_2D_ARRAY):(et.setTexture2D(it,0),Ge=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,it.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,it.unpackAlignment);const xe=Z.getParameter(Z.UNPACK_ROW_LENGTH),Mn=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Yi=Z.getParameter(Z.UNPACK_SKIP_PIXELS),On=Z.getParameter(Z.UNPACK_SKIP_ROWS),xi=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,tn.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,tn.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,ie),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ue),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,re);const Qe=w.isDataArrayTexture||w.isData3DTexture,Pn=it.isDataArrayTexture||it.isData3DTexture;if(w.isDepthTexture){const En=A.get(w),Tn=A.get(it),Fn=A.get(En.__renderTarget),La=A.get(Tn.__renderTarget);ee.bindFramebuffer(Z.READ_FRAMEBUFFER,Fn.__webglFramebuffer),ee.bindFramebuffer(Z.DRAW_FRAMEBUFFER,La.__webglFramebuffer);for(let Qn=0;Qn<$t;Qn++)Qe&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,A.get(w).__webglTexture,st,re+Qn),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,A.get(it).__webglTexture,Ht,fn+Qn)),Z.blitFramebuffer(ie,ue,kt,Xt,pe,He,kt,Xt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);ee.bindFramebuffer(Z.READ_FRAMEBUFFER,null),ee.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(st!==0||w.isRenderTargetTexture||A.has(w)){const En=A.get(w),Tn=A.get(it);ee.bindFramebuffer(Z.READ_FRAMEBUFFER,Li),ee.bindFramebuffer(Z.DRAW_FRAMEBUFFER,qi);for(let Fn=0;Fn<$t;Fn++)Qe?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,En.__webglTexture,st,re+Fn):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,En.__webglTexture,st),Pn?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Tn.__webglTexture,Ht,fn+Fn):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Tn.__webglTexture,Ht),st!==0?Z.blitFramebuffer(ie,ue,kt,Xt,pe,He,kt,Xt,Z.COLOR_BUFFER_BIT,Z.NEAREST):Pn?Z.copyTexSubImage3D(Ge,Ht,pe,He,fn+Fn,ie,ue,kt,Xt):Z.copyTexSubImage2D(Ge,Ht,pe,He,ie,ue,kt,Xt);ee.bindFramebuffer(Z.READ_FRAMEBUFFER,null),ee.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Pn?w.isDataTexture||w.isData3DTexture?Z.texSubImage3D(Ge,Ht,pe,He,fn,kt,Xt,$t,Xe,Qt,tn.data):it.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ge,Ht,pe,He,fn,kt,Xt,$t,Xe,tn.data):Z.texSubImage3D(Ge,Ht,pe,He,fn,kt,Xt,$t,Xe,Qt,tn):w.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ht,pe,He,kt,Xt,Xe,Qt,tn.data):w.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ht,pe,He,tn.width,tn.height,Xe,tn.data):Z.texSubImage2D(Z.TEXTURE_2D,Ht,pe,He,kt,Xt,Xe,Qt,tn);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,xe),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Mn),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Yi),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,On),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,xi),Ht===0&&it.generateMipmaps&&Z.generateMipmap(Ge),ee.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&et.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?et.setTextureCube(w,0):w.isData3DTexture?et.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?et.setTexture2DArray(w,0):et.setTexture2D(w,0),ee.unbindTexture()},this.resetState=function(){P=0,tt=0,K=null,ee.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),i.unpackColorSpace=ke._getUnpackColorSpace()}}var Id={},__;function jb(){return __||(__=1,(function(){var o;function e(f){var g=0;return function(){return g<f.length?{done:!1,value:f[g++]}:{done:!0}}}var i=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,g,_){return f==Array.prototype||f==Object.prototype||(f[g]=_.value),f};function r(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ic=="object"&&Ic];for(var g=0;g<f.length;++g){var _=f[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var l=r(this);function u(f,g){if(g)t:{var _=l;f=f.split(".");for(var C=0;C<f.length-1;C++){var z=f[C];if(!(z in _))break t;_=_[z]}f=f[f.length-1],C=_[f],g=g(C),g!=C&&g!=null&&i(_,f,{configurable:!0,writable:!0,value:g})}}u("Symbol",function(f){function g(W){if(this instanceof g)throw new TypeError("Symbol is not a constructor");return new _(C+(W||"")+"_"+z++,W)}function _(W,k){this.h=W,i(this,"description",{configurable:!0,writable:!0,value:k})}if(f)return f;_.prototype.toString=function(){return this.h};var C="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",z=0;return g}),u("Symbol.iterator",function(f){if(f)return f;f=Symbol("Symbol.iterator");for(var g="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),_=0;_<g.length;_++){var C=l[g[_]];typeof C=="function"&&typeof C.prototype[f]!="function"&&i(C.prototype,f,{configurable:!0,writable:!0,value:function(){return d(e(this))}})}return f});function d(f){return f={next:f},f[Symbol.iterator]=function(){return this},f}function p(f){var g=typeof Symbol<"u"&&Symbol.iterator&&f[Symbol.iterator];return g?g.call(f):{next:e(f)}}function v(f){if(!(f instanceof Array)){f=p(f);for(var g,_=[];!(g=f.next()).done;)_.push(g.value);f=_}return f}var m=typeof Object.assign=="function"?Object.assign:function(f,g){for(var _=1;_<arguments.length;_++){var C=arguments[_];if(C)for(var z in C)Object.prototype.hasOwnProperty.call(C,z)&&(f[z]=C[z])}return f};u("Object.assign",function(f){return f||m});var S=typeof Object.create=="function"?Object.create:function(f){function g(){}return g.prototype=f,new g},x;if(typeof Object.setPrototypeOf=="function")x=Object.setPrototypeOf;else{var E;t:{var R={a:!0},D={};try{D.__proto__=R,E=D.a;break t}catch{}E=!1}x=E?function(f,g){if(f.__proto__=g,f.__proto__!==g)throw new TypeError(f+" is not extensible");return f}:null}var O=x;function T(f,g){if(f.prototype=S(g.prototype),f.prototype.constructor=f,O)O(f,g);else for(var _ in g)if(_!="prototype")if(Object.defineProperties){var C=Object.getOwnPropertyDescriptor(g,_);C&&Object.defineProperty(f,_,C)}else f[_]=g[_];f.ya=g.prototype}function M(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function G(f){if(f.m)throw new TypeError("Generator is already running");f.m=!0}M.prototype.u=function(f){this.i=f};function V(f,g){f.l={ma:g,na:!0},f.h=f.s||f.v}M.prototype.return=function(f){this.l={return:f},this.h=this.v};function F(f,g,_){return f.h=_,{value:g}}function q(f){this.h=new M,this.i=f}function Y(f,g){G(f.h);var _=f.h.j;return _?X(f,"return"in _?_.return:function(C){return{value:C,done:!0}},g,f.h.return):(f.h.return(g),at(f))}function X(f,g,_,C){try{var z=g.call(f.h.j,_);if(!(z instanceof Object))throw new TypeError("Iterator result "+z+" is not an object");if(!z.done)return f.h.m=!1,z;var W=z.value}catch(k){return f.h.j=null,V(f.h,k),at(f)}return f.h.j=null,C.call(f.h,W),at(f)}function at(f){for(;f.h.h;)try{var g=f.i(f.h);if(g)return f.h.m=!1,{value:g.value,done:!1}}catch(_){f.h.i=void 0,V(f.h,_)}if(f.h.m=!1,f.h.l){if(g=f.h.l,f.h.l=null,g.na)throw g.ma;return{value:g.return,done:!0}}return{value:void 0,done:!0}}function L(f){this.next=function(g){return G(f.h),f.h.j?g=X(f,f.h.j.next,g,f.h.u):(f.h.u(g),g=at(f)),g},this.throw=function(g){return G(f.h),f.h.j?g=X(f,f.h.j.throw,g,f.h.u):(V(f.h,g),g=at(f)),g},this.return=function(g){return Y(f,g)},this[Symbol.iterator]=function(){return this}}function b(f){function g(C){return f.next(C)}function _(C){return f.throw(C)}return new Promise(function(C,z){function W(k){k.done?C(k.value):Promise.resolve(k.value).then(g,_).then(W,z)}W(f.next())})}function P(f){return b(new L(new q(f)))}u("Promise",function(f){function g(k){this.i=0,this.j=void 0,this.h=[],this.u=!1;var $=this.l();try{k($.resolve,$.reject)}catch(vt){$.reject(vt)}}function _(){this.h=null}function C(k){return k instanceof g?k:new g(function($){$(k)})}if(f)return f;_.prototype.i=function(k){if(this.h==null){this.h=[];var $=this;this.j(function(){$.m()})}this.h.push(k)};var z=l.setTimeout;_.prototype.j=function(k){z(k,0)},_.prototype.m=function(){for(;this.h&&this.h.length;){var k=this.h;this.h=[];for(var $=0;$<k.length;++$){var vt=k[$];k[$]=null;try{vt()}catch(Lt){this.l(Lt)}}}this.h=null},_.prototype.l=function(k){this.j(function(){throw k})},g.prototype.l=function(){function k(Lt){return function(Gt){vt||(vt=!0,Lt.call($,Gt))}}var $=this,vt=!1;return{resolve:k(this.I),reject:k(this.m)}},g.prototype.I=function(k){if(k===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof g)this.L(k);else{t:switch(typeof k){case"object":var $=k!=null;break t;case"function":$=!0;break t;default:$=!1}$?this.F(k):this.s(k)}},g.prototype.F=function(k){var $=void 0;try{$=k.then}catch(vt){this.m(vt);return}typeof $=="function"?this.M($,k):this.s(k)},g.prototype.m=function(k){this.v(2,k)},g.prototype.s=function(k){this.v(1,k)},g.prototype.v=function(k,$){if(this.i!=0)throw Error("Cannot settle("+k+", "+$+"): Promise already settled in state"+this.i);this.i=k,this.j=$,this.i===2&&this.K(),this.H()},g.prototype.K=function(){var k=this;z(function(){if(k.D()){var $=l.console;typeof $<"u"&&$.error(k.j)}},1)},g.prototype.D=function(){if(this.u)return!1;var k=l.CustomEvent,$=l.Event,vt=l.dispatchEvent;return typeof vt>"u"?!0:(typeof k=="function"?k=new k("unhandledrejection",{cancelable:!0}):typeof $=="function"?k=new $("unhandledrejection",{cancelable:!0}):(k=l.document.createEvent("CustomEvent"),k.initCustomEvent("unhandledrejection",!1,!0,k)),k.promise=this,k.reason=this.j,vt(k))},g.prototype.H=function(){if(this.h!=null){for(var k=0;k<this.h.length;++k)W.i(this.h[k]);this.h=null}};var W=new _;return g.prototype.L=function(k){var $=this.l();k.T($.resolve,$.reject)},g.prototype.M=function(k,$){var vt=this.l();try{k.call($,vt.resolve,vt.reject)}catch(Lt){vt.reject(Lt)}},g.prototype.then=function(k,$){function vt(le,Kt){return typeof le=="function"?function(_e){try{Lt(le(_e))}catch(be){Gt(be)}}:Kt}var Lt,Gt,fe=new g(function(le,Kt){Lt=le,Gt=Kt});return this.T(vt(k,Lt),vt($,Gt)),fe},g.prototype.catch=function(k){return this.then(void 0,k)},g.prototype.T=function(k,$){function vt(){switch(Lt.i){case 1:k(Lt.j);break;case 2:$(Lt.j);break;default:throw Error("Unexpected state: "+Lt.i)}}var Lt=this;this.h==null?W.i(vt):this.h.push(vt),this.u=!0},g.resolve=C,g.reject=function(k){return new g(function($,vt){vt(k)})},g.race=function(k){return new g(function($,vt){for(var Lt=p(k),Gt=Lt.next();!Gt.done;Gt=Lt.next())C(Gt.value).T($,vt)})},g.all=function(k){var $=p(k),vt=$.next();return vt.done?C([]):new g(function(Lt,Gt){function fe(_e){return function(be){le[_e]=be,Kt--,Kt==0&&Lt(le)}}var le=[],Kt=0;do le.push(void 0),Kt++,C(vt.value).T(fe(le.length-1),Gt),vt=$.next();while(!vt.done)})},g});function tt(f,g){f instanceof String&&(f+="");var _=0,C=!1,z={next:function(){if(!C&&_<f.length){var W=_++;return{value:g(W,f[W]),done:!1}}return C=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}u("Array.prototype.keys",function(f){return f||function(){return tt(this,function(g){return g})}}),u("Array.prototype.fill",function(f){return f||function(g,_,C){var z=this.length||0;for(0>_&&(_=Math.max(0,z+_)),(C==null||C>z)&&(C=z),C=Number(C),0>C&&(C=Math.max(0,z+C)),_=Number(_||0);_<C;_++)this[_]=g;return this}});function K(f){return f||Array.prototype.fill}u("Int8Array.prototype.fill",K),u("Uint8Array.prototype.fill",K),u("Uint8ClampedArray.prototype.fill",K),u("Int16Array.prototype.fill",K),u("Uint16Array.prototype.fill",K),u("Int32Array.prototype.fill",K),u("Uint32Array.prototype.fill",K),u("Float32Array.prototype.fill",K),u("Float64Array.prototype.fill",K),u("Object.is",function(f){return f||function(g,_){return g===_?g!==0||1/g===1/_:g!==g&&_!==_}}),u("Array.prototype.includes",function(f){return f||function(g,_){var C=this;C instanceof String&&(C=String(C));var z=C.length;for(_=_||0,0>_&&(_=Math.max(_+z,0));_<z;_++){var W=C[_];if(W===g||Object.is(W,g))return!0}return!1}}),u("String.prototype.includes",function(f){return f||function(g,_){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(g instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(g,_||0)!==-1}});var dt=this||self;function pt(f,g){f=f.split(".");var _=dt;f[0]in _||typeof _.execScript>"u"||_.execScript("var "+f[0]);for(var C;f.length&&(C=f.shift());)f.length||g===void 0?_[C]&&_[C]!==Object.prototype[C]?_=_[C]:_=_[C]={}:_[C]=g}function N(f){var g;t:{if((g=dt.navigator)&&(g=g.userAgent))break t;g=""}return g.indexOf(f)!=-1}var I=Array.prototype.map?function(f,g){return Array.prototype.map.call(f,g,void 0)}:function(f,g){for(var _=f.length,C=Array(_),z=typeof f=="string"?f.split(""):f,W=0;W<_;W++)W in z&&(C[W]=g.call(void 0,z[W],W,f));return C},nt={},Et=null;function At(f){var g=f.length,_=3*g/4;_%3?_=Math.floor(_):"=.".indexOf(f[g-1])!=-1&&(_="=.".indexOf(f[g-2])!=-1?_-2:_-1);var C=new Uint8Array(_),z=0;return H(f,function(W){C[z++]=W}),z!==_?C.subarray(0,z):C}function H(f,g){function _(vt){for(;C<f.length;){var Lt=f.charAt(C++),Gt=Et[Lt];if(Gt!=null)return Gt;if(!/^[\s\xa0]*$/.test(Lt))throw Error("Unknown base64 encoding at char: "+Lt)}return vt}ot();for(var C=0;;){var z=_(-1),W=_(0),k=_(64),$=_(64);if($===64&&z===-1)break;g(z<<2|W>>4),k!=64&&(g(W<<4&240|k>>2),$!=64&&g(k<<6&192|$))}}function ot(){if(!Et){Et={};for(var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],_=0;5>_;_++){var C=f.concat(g[_].split(""));nt[_]=C;for(var z=0;z<C.length;z++){var W=C[z];Et[W]===void 0&&(Et[W]=z)}}}}var Tt=typeof Uint8Array<"u",Pt=!(N("Trident")||N("MSIE"))&&typeof dt.btoa=="function";function qt(f){if(!Pt){var g;g===void 0&&(g=0),ot(),g=nt[g];for(var _=Array(Math.floor(f.length/3)),C=g[64]||"",z=0,W=0;z<f.length-2;z+=3){var k=f[z],$=f[z+1],vt=f[z+2],Lt=g[k>>2];k=g[(k&3)<<4|$>>4],$=g[($&15)<<2|vt>>6],vt=g[vt&63],_[W++]=Lt+k+$+vt}switch(Lt=0,vt=C,f.length-z){case 2:Lt=f[z+1],vt=g[(Lt&15)<<2]||C;case 1:f=f[z],_[W]=g[f>>2]+g[(f&3)<<4|Lt>>4]+vt+C}return _.join("")}for(g="";10240<f.length;)g+=String.fromCharCode.apply(null,f.subarray(0,10240)),f=f.subarray(10240);return g+=String.fromCharCode.apply(null,f),btoa(g)}var ht=RegExp("[-_.]","g");function yt(f){switch(f){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Vt(f){if(!Pt)return At(f);ht.test(f)&&(f=f.replace(ht,yt)),f=atob(f);for(var g=new Uint8Array(f.length),_=0;_<f.length;_++)g[_]=f.charCodeAt(_);return g}var te;function Jt(){return te||(te=new Uint8Array(0))}var Te={},gn=typeof Uint8Array.prototype.slice=="function",ce=0,de=0;function Ie(f){var g=0>f;f=Math.abs(f);var _=f>>>0;f=Math.floor((f-_)/4294967296),g&&(_=p(dn(_,f)),g=_.next().value,f=_.next().value,_=g),ce=_>>>0,de=f>>>0}var ye=typeof BigInt=="function";function dn(f,g){return g=~g,f?f=~f+1:g+=1,[f,g]}function Z(f,g){this.i=f>>>0,this.h=g>>>0}function un(f){if(!f)return Ue||(Ue=new Z(0,0));if(!/^-?\d+$/.test(f))return null;if(16>f.length)Ie(Number(f));else if(ye)f=BigInt(f),ce=Number(f&BigInt(4294967295))>>>0,de=Number(f>>BigInt(32)&BigInt(4294967295));else{var g=+(f[0]==="-");de=ce=0;for(var _=f.length,C=g,z=(_-g)%6+g;z<=_;C=z,z+=6)C=Number(f.slice(C,z)),de*=1e6,ce=1e6*ce+C,4294967296<=ce&&(de+=ce/4294967296|0,ce%=4294967296);g&&(g=p(dn(ce,de)),f=g.next().value,g=g.next().value,ce=f,de=g)}return new Z(ce,de)}var Ue;function Ve(f,g){return Error("Invalid wire type: "+f+" (at position "+g+")")}function ee(){return Error("Failed to read varint, encoding is invalid.")}function B(f,g){return Error("Tried to read past the end of the data "+g+" > "+f)}function A(){throw Error("Invalid UTF8")}function et(f,g){return g=String.fromCharCode.apply(null,g),f==null?g:f+g}var St=void 0,wt,xt=typeof TextDecoder<"u",se,zt=typeof TextEncoder<"u",ne;function me(f){if(f!==Te)throw Error("illegal external caller")}function Ut(f,g){if(me(g),this.V=f,f!=null&&f.length===0)throw Error("ByteString should be constructed with non-empty values")}function Nt(){return ne||(ne=new Ut(null,Te))}function Zt(f){me(Te);var g=f.V;return g=g==null||Tt&&g!=null&&g instanceof Uint8Array?g:typeof g=="string"?Vt(g):null,g==null?g:f.V=g}function Yt(f){if(typeof f=="string")return{buffer:Vt(f),C:!1};if(Array.isArray(f))return{buffer:new Uint8Array(f),C:!1};if(f.constructor===Uint8Array)return{buffer:f,C:!1};if(f.constructor===ArrayBuffer)return{buffer:new Uint8Array(f),C:!1};if(f.constructor===Ut)return{buffer:Zt(f)||Jt(),C:!0};if(f instanceof Uint8Array)return{buffer:new Uint8Array(f.buffer,f.byteOffset,f.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Bt(f,g){this.i=null,this.m=!1,this.h=this.j=this.l=0,Se(this,f,g)}function Se(f,g,_){_=_===void 0?{}:_,f.S=_.S===void 0?!1:_.S,g&&(g=Yt(g),f.i=g.buffer,f.m=g.C,f.l=0,f.j=f.i.length,f.h=f.l)}Bt.prototype.reset=function(){this.h=this.l};function J(f,g){if(f.h=g,g>f.j)throw B(f.j,g)}function It(f){var g=f.i,_=f.h,C=g[_++],z=C&127;if(C&128&&(C=g[_++],z|=(C&127)<<7,C&128&&(C=g[_++],z|=(C&127)<<14,C&128&&(C=g[_++],z|=(C&127)<<21,C&128&&(C=g[_++],z|=C<<28,C&128&&g[_++]&128&&g[_++]&128&&g[_++]&128&&g[_++]&128&&g[_++]&128)))))throw ee();return J(f,_),z}function Ot(f,g){if(0>g)throw Error("Tried to read a negative byte length: "+g);var _=f.h,C=_+g;if(C>f.j)throw B(g,f.j-_);return f.h=C,_}var Wt=[];function Dt(){this.h=[]}Dt.prototype.length=function(){return this.h.length},Dt.prototype.end=function(){var f=this.h;return this.h=[],f};function Rt(f,g,_){for(;0<_||127<g;)f.h.push(g&127|128),g=(g>>>7|_<<25)>>>0,_>>>=7;f.h.push(g)}function Ft(f,g){for(;127<g;)f.h.push(g&127|128),g>>>=7;f.h.push(g)}function ve(f,g){if(Wt.length){var _=Wt.pop();Se(_,f,g),f=_}else f=new Bt(f,g);this.h=f,this.j=this.h.h,this.i=this.l=-1,this.setOptions(g)}ve.prototype.setOptions=function(f){f=f===void 0?{}:f,this.ca=f.ca===void 0?!1:f.ca},ve.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function qe(f){var g=f.h;if(g.h==g.j)return!1;f.j=f.h.h;var _=It(f.h)>>>0;if(g=_>>>3,_&=7,!(0<=_&&5>=_))throw Ve(_,f.j);if(1>g)throw Error("Invalid field number: "+g+" (at position "+f.j+")");return f.l=g,f.i=_,!0}function De(f){switch(f.i){case 0:if(f.i!=0)De(f);else t:{f=f.h;for(var g=f.h,_=g+10,C=f.i;g<_;)if((C[g++]&128)===0){J(f,g);break t}throw ee()}break;case 1:f=f.h,J(f,f.h+8);break;case 2:f.i!=2?De(f):(g=It(f.h)>>>0,f=f.h,J(f,f.h+g));break;case 5:f=f.h,J(f,f.h+4);break;case 3:g=f.l;do{if(!qe(f))throw Error("Unmatched start-group tag: stream EOF");if(f.i==4){if(f.l!=g)throw Error("Unmatched end-group tag");break}De(f)}while(!0);break;default:throw Ve(f.i,f.j)}}var Cn=[];function Di(){this.j=[],this.i=0,this.h=new Dt}function la(f,g){g.length!==0&&(f.j.push(g),f.i+=g.length)}function Kr(f,g){if(g=g.R){la(f,f.h.end());for(var _=0;_<g.length;_++)la(f,Zt(g[_])||Jt())}}var ri=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Ui(f,g){return ri?f[ri]|=g:f.A!==void 0?f.A|=g:(Object.defineProperties(f,{A:{value:g,configurable:!0,writable:!0,enumerable:!1}}),g)}function Da(f,g){ri?f[ri]&&(f[ri]&=~g):f.A!==void 0&&(f.A&=~g)}function cn(f){var g;return ri?g=f[ri]:g=f.A,g??0}function wn(f,g){ri?f[ri]=g:f.A!==void 0?f.A=g:Object.defineProperties(f,{A:{value:g,configurable:!0,writable:!0,enumerable:!1}})}function si(f){return Ui(f,1),f}function yn(f,g){wn(g,(f|0)&-51)}function Sn(f,g){wn(g,(f|18)&-41)}var fi={};function ua(f){return f!==null&&typeof f=="object"&&!Array.isArray(f)&&f.constructor===Object}var Wi,Qr=[];wn(Qr,23),Wi=Object.freeze(Qr);function Ua(f){if(cn(f.o)&2)throw Error("Cannot mutate an immutable Message")}function ca(f){var g=f.length;(g=g?f[g-1]:void 0)&&ua(g)?g.g=1:(g={},f.push((g.g=1,g)))}function cr(f){var g=f.i+f.G;return f.B||(f.B=f.o[g]={})}function Nn(f,g){return g===-1?null:g>=f.i?f.B?f.B[g]:void 0:f.o[g+f.G]}function Xn(f,g,_,C){Ua(f),Li(f,g,_,C)}function Li(f,g,_,C){f.j&&(f.j=void 0),g>=f.i||C?cr(f)[g]=_:(f.o[g+f.G]=_,(f=f.B)&&g in f&&delete f[g])}function qi(f,g,_,C){var z=Nn(f,g);Array.isArray(z)||(z=Wi);var W=cn(z);if(W&1||si(z),C)W&2||Ui(z,2),_&1||Object.freeze(z);else{C=!(_&2);var k=W&2;_&1||!k?C&&W&16&&!k&&Da(z,16):(z=si(Array.prototype.slice.call(z)),Li(f,g,z))}return z}function w(f,g){var _=Nn(f,g),C=_==null?_:typeof _=="number"||_==="NaN"||_==="Infinity"||_==="-Infinity"?Number(_):void 0;return C!=null&&C!==_&&Li(f,g,C),C}function it(f,g,_,C,z){f.h||(f.h={});var W=f.h[_],k=qi(f,_,3,z);if(!W){var $=k;W=[];var vt=!!(cn(f.o)&16);k=!!(cn($)&2);var Lt=$;!z&&k&&($=Array.prototype.slice.call($));for(var Gt=k,fe=0;fe<$.length;fe++){var le=$[fe],Kt=g,_e=!1;if(_e=_e===void 0?!1:_e,le=Array.isArray(le)?new Kt(le):_e?new Kt:void 0,le!==void 0){Kt=le.o;var be=_e=cn(Kt);k&&(be|=2),vt&&(be|=16),be!=_e&&wn(Kt,be),Kt=be,Gt=Gt||!!(2&Kt),W.push(le)}}return f.h[_]=W,vt=cn($),g=vt|33,g=Gt?g&-9:g|8,vt!=g&&(Gt=$,Object.isFrozen(Gt)&&(Gt=Array.prototype.slice.call(Gt)),wn(Gt,g),$=Gt),Lt!==$&&Li(f,_,$),(z||C&&k)&&Ui(W,2),C&&Object.freeze(W),W}return z||(z=Object.isFrozen(W),C&&!z?Object.freeze(W):!C&&z&&(W=Array.prototype.slice.call(W),f.h[_]=W)),W}function gt(f,g,_){var C=!!(cn(f.o)&2);if(g=it(f,g,_,C,C),f=qi(f,_,3,C),!(C||cn(f)&8)){for(C=0;C<g.length;C++){if(_=g[C],cn(_.o)&2){var z=Xe(_,!1);z.j=_}else z=_;_!==z&&(g[C]=z,f[C]=z.o)}Ui(f,8)}return g}function lt(f,g,_){if(_!=null&&typeof _!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof _+": "+_);Xn(f,g,_)}function st(f,g,_,C,z){Ua(f);var W=it(f,_,g,!1,!1);return _=C??new _,f=qi(f,g,2,!1),z!=null?(W.splice(z,0,_),f.splice(z,0,_.o)):(W.push(_),f.push(_.o)),_.C()&&Da(f,8),_}function Ht(f,g){return f??g}function kt(f,g,_){return _=_===void 0?0:_,Ht(w(f,g),_)}var Xt;function $t(f){switch(typeof f){case"number":return isFinite(f)?f:String(f);case"object":if(f)if(Array.isArray(f)){if((cn(f)&128)!==0)return f=Array.prototype.slice.call(f),ca(f),f}else{if(Tt&&f!=null&&f instanceof Uint8Array)return qt(f);if(f instanceof Ut){var g=f.V;return g==null?"":typeof g=="string"?g:f.V=qt(g)}}}return f}function ie(f,g,_,C){if(f!=null){if(Array.isArray(f))f=ue(f,g,_,C!==void 0);else if(ua(f)){var z={},W;for(W in f)z[W]=ie(f[W],g,_,C);f=z}else f=g(f,C);return f}}function ue(f,g,_,C){var z=cn(f);C=C?!!(z&16):void 0,f=Array.prototype.slice.call(f);for(var W=0;W<f.length;W++)f[W]=ie(f[W],g,_,C);return _(z,f),f}function re(f){return f.ja===fi?f.toJSON():$t(f)}function pe(f,g){f&128&&ca(g)}function He(f,g,_){if(_=_===void 0?Sn:_,f!=null){if(Tt&&f instanceof Uint8Array)return f.length?new Ut(new Uint8Array(f),Te):Nt();if(Array.isArray(f)){var C=cn(f);return C&2?f:g&&!(C&32)&&(C&16||C===0)?(wn(f,C|2),f):(f=ue(f,He,C&4?Sn:_,!0),g=cn(f),g&4&&g&2&&Object.freeze(f),f)}return f.ja===fi?tn(f):f}}function fn(f,g,_,C,z,W,k){if(f=f.h&&f.h[_]){if(C=cn(f),C&2?C=f:(W=I(f,tn),Sn(C,W),Object.freeze(W),C=W),Ua(g),k=C==null?Wi:si([]),C!=null){for(W=!!C.length,f=0;f<C.length;f++){var $=C[f];W=W&&!(cn($.o)&2),k[f]=$.o}W=(W?8:0)|1,f=cn(k),(f&W)!==W&&(Object.isFrozen(k)&&(k=Array.prototype.slice.call(k)),wn(k,f|W)),g.h||(g.h={}),g.h[_]=C}else g.h&&(g.h[_]=void 0);Li(g,_,k,z)}else Xn(g,_,He(C,W,k),z)}function tn(f){return cn(f.o)&2||(f=Xe(f,!0),Ui(f.o,2)),f}function Xe(f,g){var _=f.o,C=[];Ui(C,16);var z=f.constructor.h;if(z&&C.push(z),z=f.B,z){C.length=_.length,C.fill(void 0,C.length,_.length);var W={};C[C.length-1]=W}(cn(_)&128)!==0&&ca(C),g=g||f.C()?Sn:yn,W=f.constructor,Xt=C,C=new W(C),Xt=void 0,f.R&&(C.R=f.R.slice()),W=!!(cn(_)&16);for(var k=z?_.length-1:_.length,$=0;$<k;$++)fn(f,C,$-f.G,_[$],!1,W,g);if(z)for(var vt in z)fn(f,C,+vt,z[vt],!0,W,g);return C}function Qt(f,g,_){f==null&&(f=Xt),Xt=void 0;var C=this.constructor.i||0,z=0<C,W=this.constructor.h,k=!1;if(f==null){f=W?[W]:[];var $=48,vt=!0;z&&(C=0,$|=128),wn(f,$)}else{if(!Array.isArray(f)||W&&W!==f[0])throw Error();var Lt=$=Ui(f,0);if((vt=(16&Lt)!==0)&&((k=(32&Lt)!==0)||(Lt|=32)),z){if(128&Lt)C=0;else if(0<f.length){var Gt=f[f.length-1];if(ua(Gt)&&"g"in Gt){C=0,Lt|=128,delete Gt.g;var fe=!0,le;for(le in Gt){fe=!1;break}fe&&f.pop()}}}else if(128&Lt)throw Error();$!==Lt&&wn(f,Lt)}this.G=(W?0:-1)-C,this.h=void 0,this.o=f;t:{if(W=this.o.length,C=W-1,W&&(W=this.o[C],ua(W))){this.B=W,this.i=C-this.G;break t}g!==void 0&&-1<g?(this.i=Math.max(g,C+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!z&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(_){g=vt&&!k&&!0,z=this.i;var Kt;for(vt=0;vt<_.length;vt++)k=_[vt],k<z?(k+=this.G,(C=f[k])?Ge(C,g):f[k]=Wi):(Kt||(Kt=cr(this)),(C=Kt[k])?Ge(C,g):Kt[k]=Wi)}}Qt.prototype.toJSON=function(){return ue(this.o,re,pe)},Qt.prototype.C=function(){return!!(cn(this.o)&2)};function Ge(f,g){if(Array.isArray(f)){var _=cn(f),C=1;!g||_&2||(C|=16),(_&C)!==C&&wn(f,_|C)}}Qt.prototype.ja=fi,Qt.prototype.toString=function(){return this.o.toString()};function xe(f,g,_){if(_){var C={},z;for(z in _){var W=_[z],k=W.qa;k||(C.J=W.wa||W.oa.W,W.ia?(C.aa=Fn(W.ia),k=(function($){return function(vt,Lt,Gt){return $.J(vt,Lt,Gt,$.aa)}})(C)):W.ka?(C.Z=La(W.da.P,W.ka),k=(function($){return function(vt,Lt,Gt){return $.J(vt,Lt,Gt,$.Z)}})(C)):k=C.J,W.qa=k),k(g,f,W.da),C={J:C.J,aa:C.aa,Z:C.Z}}}Kr(g,f)}var Mn=Symbol();function Yi(f,g,_){return f[Mn]||(f[Mn]=function(C,z){return g(C,z,_)})}function On(f){var g=f[Mn];if(!g){var _=Us(f);g=function(C,z){return dr(C,z,_)},f[Mn]=g}return g}function xi(f){var g=f.ia;if(g)return On(g);if(g=f.va)return Yi(f.da.P,g,f.ka)}function Qe(f){var g=xi(f),_=f.da,C=f.oa.U;return g?function(z,W){return C(z,W,_,g)}:function(z,W){return C(z,W,_)}}function Pn(f,g){var _=f[g];return typeof _=="function"&&_.length===0&&(_=_(),f[g]=_),Array.isArray(_)&&(Na in _||Qn in _||0<_.length&&typeof _[0]=="function")?_:void 0}function En(f,g,_,C,z,W){g.P=f[0];var k=1;if(f.length>k&&typeof f[k]!="number"){var $=f[k++];_(g,$)}for(;k<f.length;){_=f[k++];for(var vt=k+1;vt<f.length&&typeof f[vt]!="number";)vt++;switch($=f[k++],vt-=k,vt){case 0:C(g,_,$);break;case 1:(vt=Pn(f,k))?(k++,z(g,_,$,vt)):C(g,_,$,f[k++]);break;case 2:vt=k++,vt=Pn(f,vt),z(g,_,$,vt,f[k++]);break;case 3:W(g,_,$,f[k++],f[k++],f[k++]);break;case 4:W(g,_,$,f[k++],f[k++],f[k++],f[k++]);break;default:throw Error("unexpected number of binary field arguments: "+vt)}}return g}var Tn=Symbol();function Fn(f){var g=f[Tn];if(!g){var _=Jr(f);g=function(C,z){return ji(C,z,_)},f[Tn]=g}return g}function La(f,g){var _=f[Tn];return _||(_=function(C,z){return xe(C,z,g)},f[Tn]=_),_}var Qn=Symbol();function Kc(f,g){f.push(g)}function Qc(f,g,_){f.push(g,_.W)}function Ds(f,g,_,C){var z=Fn(C),W=Jr(C).P,k=_.W;f.push(g,function($,vt,Lt){return k($,vt,Lt,W,z)})}function fa(f,g,_,C,z,W){var k=La(C,W),$=_.W;f.push(g,function(vt,Lt,Gt){return $(vt,Lt,Gt,C,k)})}function Jr(f){var g=f[Qn];return g||(g=En(f,f[Qn]=[],Kc,Qc,Ds,fa),Na in f&&Qn in f&&(f.length=0),g)}var Na=Symbol();function fr(f,g){f[0]=g}function hr(f,g,_,C){var z=_.U;f[g]=C?function(W,k,$){return z(W,k,$,C)}:z}function ql(f,g,_,C,z){var W=_.U,k=On(C),$=Us(C).P;f[g]=function(vt,Lt,Gt){return W(vt,Lt,Gt,$,k,z)}}function zo(f,g,_,C,z,W,k){var $=_.U,vt=Yi(C,z,W);f[g]=function(Lt,Gt,fe){return $(Lt,Gt,fe,C,vt,k)}}function Us(f){var g=f[Na];return g||(g=En(f,f[Na]={},fr,hr,ql,zo),Na in f&&Qn in f&&(f.length=0),g)}function dr(f,g,_){for(;qe(g)&&g.i!=4;){var C=g.l,z=_[C];if(!z){var W=_[0];W&&(W=W[C])&&(z=_[C]=Qe(W))}if(!z||!z(g,f,C)){z=g,C=f,W=z.j,De(z);var k=z;if(!k.ca){if(z=k.h.h-W,k.h.h=W,k=k.h,z==0)z=Nt();else{if(W=Ot(k,z),k.S&&k.m)z=k.i.subarray(W,W+z);else{k=k.i;var $=W;z=W+z,z=$===z?Jt():gn?k.slice($,z):new Uint8Array(k.subarray($,z))}z=z.length==0?Nt():new Ut(z,Te)}(W=C.R)?W.push(z):C.R=[z]}}}return f}function ji(f,g,_){for(var C=_.length,z=C%2==1,W=z?1:0;W<C;W+=2)(0,_[W+1])(g,f,_[W]);xe(f,g,z?_[0]:void 0)}function Oa(f,g){return{U:f,W:g}}var Jn=Oa(function(f,g,_){if(f.i!==5)return!1;f=f.h;var C=f.i,z=f.h,W=C[z],k=C[z+1],$=C[z+2];return C=C[z+3],J(f,f.h+4),k=(W<<0|k<<8|$<<16|C<<24)>>>0,f=2*(k>>31)+1,W=k>>>23&255,k&=8388607,Xn(g,_,W==255?k?NaN:1/0*f:W==0?f*Math.pow(2,-149)*k:f*Math.pow(2,W-150)*(k+Math.pow(2,23))),!0},function(f,g,_){if(g=w(g,_),g!=null){Ft(f.h,8*_+5),f=f.h;var C=+g;C===0?0<1/C?ce=de=0:(de=0,ce=2147483648):isNaN(C)?(de=0,ce=2147483647):(C=(_=0>C?-2147483648:0)?-C:C,34028234663852886e22<C?(de=0,ce=(_|2139095040)>>>0):11754943508222875e-54>C?(C=Math.round(C/Math.pow(2,-149)),de=0,ce=(_|C)>>>0):(g=Math.floor(Math.log(C)/Math.LN2),C*=Math.pow(2,-g),C=Math.round(8388608*C),16777216<=C&&++g,de=0,ce=(_|g+127<<23|C&8388607)>>>0)),_=ce,f.h.push(_>>>0&255),f.h.push(_>>>8&255),f.h.push(_>>>16&255),f.h.push(_>>>24&255)}}),ya=Oa(function(f,g,_){if(f.i!==0)return!1;var C=f.h,z=0,W=f=0,k=C.i,$=C.h;do{var vt=k[$++];z|=(vt&127)<<W,W+=7}while(32>W&&vt&128);for(32<W&&(f|=(vt&127)>>4),W=3;32>W&&vt&128;W+=7)vt=k[$++],f|=(vt&127)<<W;if(J(C,$),128>vt)C=z>>>0,vt=f>>>0,(f=vt&2147483648)&&(C=~C+1>>>0,vt=~vt>>>0,C==0&&(vt=vt+1>>>0)),C=4294967296*vt+(C>>>0);else throw ee();return Xn(g,_,f?-C:C),!0},function(f,g,_){g=Nn(g,_),g!=null&&(typeof g=="string"&&un(g),g!=null&&(Ft(f.h,8*_),typeof g=="number"?(f=f.h,Ie(g),Rt(f,ce,de)):(_=un(g),Rt(f.h,_.i,_.h))))}),Bo=Oa(function(f,g,_){return f.i!==0?!1:(Xn(g,_,It(f.h)),!0)},function(f,g,_){if(g=Nn(g,_),g!=null&&g!=null)if(Ft(f.h,8*_),f=f.h,_=g,0<=_)Ft(f,_);else{for(g=0;9>g;g++)f.h.push(_&127|128),_>>=7;f.h.push(1)}}),$r=Oa(function(f,g,_){if(f.i!==2)return!1;var C=It(f.h)>>>0;f=f.h;var z=Ot(f,C);if(f=f.i,xt){var W=f,k;(k=wt)||(k=wt=new TextDecoder("utf-8",{fatal:!0})),f=z+C,W=z===0&&f===W.length?W:W.subarray(z,f);try{var $=k.decode(W)}catch(fe){if(St===void 0){try{k.decode(new Uint8Array([128]))}catch{}try{k.decode(new Uint8Array([97])),St=!0}catch{St=!1}}throw!St&&(wt=void 0),fe}}else{$=z,C=$+C,z=[];for(var vt=null,Lt,Gt;$<C;)Lt=f[$++],128>Lt?z.push(Lt):224>Lt?$>=C?A():(Gt=f[$++],194>Lt||(Gt&192)!==128?($--,A()):z.push((Lt&31)<<6|Gt&63)):240>Lt?$>=C-1?A():(Gt=f[$++],(Gt&192)!==128||Lt===224&&160>Gt||Lt===237&&160<=Gt||((W=f[$++])&192)!==128?($--,A()):z.push((Lt&15)<<12|(Gt&63)<<6|W&63)):244>=Lt?$>=C-2?A():(Gt=f[$++],(Gt&192)!==128||(Lt<<28)+(Gt-144)>>30!==0||((W=f[$++])&192)!==128||((k=f[$++])&192)!==128?($--,A()):(Lt=(Lt&7)<<18|(Gt&63)<<12|(W&63)<<6|k&63,Lt-=65536,z.push((Lt>>10&1023)+55296,(Lt&1023)+56320))):A(),8192<=z.length&&(vt=et(vt,z),z.length=0);$=et(vt,z)}return Xn(g,_,$),!0},function(f,g,_){if(g=Nn(g,_),g!=null){var C=!1;if(C=C===void 0?!1:C,zt){if(C&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(g))throw Error("Found an unpaired surrogate");g=(se||(se=new TextEncoder)).encode(g)}else{for(var z=0,W=new Uint8Array(3*g.length),k=0;k<g.length;k++){var $=g.charCodeAt(k);if(128>$)W[z++]=$;else{if(2048>$)W[z++]=$>>6|192;else{if(55296<=$&&57343>=$){if(56319>=$&&k<g.length){var vt=g.charCodeAt(++k);if(56320<=vt&&57343>=vt){$=1024*($-55296)+vt-56320+65536,W[z++]=$>>18|240,W[z++]=$>>12&63|128,W[z++]=$>>6&63|128,W[z++]=$&63|128;continue}else k--}if(C)throw Error("Found an unpaired surrogate");$=65533}W[z++]=$>>12|224,W[z++]=$>>6&63|128}W[z++]=$&63|128}}g=z===W.length?W:W.subarray(0,z)}Ft(f.h,8*_+2),Ft(f.h,g.length),la(f,f.h.end()),la(f,g)}}),Io=Oa(function(f,g,_,C,z){if(f.i!==2)return!1;g=st(g,_,C),_=f.h.j,C=It(f.h)>>>0;var W=f.h.h+C,k=W-_;if(0>=k&&(f.h.j=W,z(g,f,void 0,void 0,void 0),k=W-f.h.h),k)throw Error("Message parsing ended unexpectedly. Expected to read "+(C+" bytes, instead read "+(C-k)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return f.h.h=W,f.h.j=_,!0},function(f,g,_,C,z){if(g=gt(g,C,_),g!=null)for(C=0;C<g.length;C++){var W=f;Ft(W.h,8*_+2);var k=W.h.end();la(W,k),k.push(W.i),W=k,z(g[C],f),k=f;var $=W.pop();for($=k.i+k.h.length()-$;127<$;)W.push($&127|128),$>>>=7,k.i++;W.push($),k.i++}});function pr(f){return function(g,_){t:{if(Cn.length){var C=Cn.pop();C.setOptions(_),Se(C.h,g,_),g=C}else g=new ve(g,_);try{var z=Us(f),W=dr(new z.P,g,z);break t}finally{z=g.h,z.i=null,z.m=!1,z.l=0,z.j=0,z.h=0,z.S=!1,g.l=-1,g.i=-1,100>Cn.length&&Cn.push(g)}W=void 0}return W}}function mr(f){return function(){var g=new Di;ji(this,g,Jr(f)),la(g,g.h.end());for(var _=new Uint8Array(g.i),C=g.j,z=C.length,W=0,k=0;k<z;k++){var $=C[k];_.set($,W),W+=$.length}return g.j=[_],_}}function Pa(f){Qt.call(this,f)}T(Pa,Qt);var $n=[Pa,1,Bo,2,Jn,3,$r,4,$r];Pa.prototype.l=mr($n);function ha(f){Qt.call(this,f,-1,Ls)}T(ha,Qt),ha.prototype.addClassification=function(f,g){return st(this,1,Pa,f,g),this};var Ls=[1],gr=pr([ha,1,Io,$n]);function vr(f){Qt.call(this,f)}T(vr,Qt);var Ns=[vr,1,Jn,2,Jn,3,Jn,4,Jn,5,Jn];vr.prototype.l=mr(Ns);function Os(f){Qt.call(this,f,-1,ts)}T(Os,Qt);var ts=[1],es=pr([Os,1,Io,Ns]);function ns(f){Qt.call(this,f)}T(ns,Qt);var Yl=[ns,1,Jn,2,Jn,3,Jn,4,Jn,5,Jn,6,ya],Jc=pr(Yl);ns.prototype.l=mr(Yl);function jl(f,g,_){if(_=f.createShader(_===0?f.VERTEX_SHADER:f.FRAGMENT_SHADER),f.shaderSource(_,g),f.compileShader(_),!f.getShaderParameter(_,f.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+f.getShaderInfoLog(_));return _}function Ps(f){return gt(f,Pa,1).map(function(g){var _=Nn(g,1);return{index:_??0,score:kt(g,2),label:Nn(g,3)!=null?Ht(Nn(g,3),""):void 0,displayName:Nn(g,4)!=null?Ht(Nn(g,4),""):void 0}})}function Zl(f){return{x:kt(f,1),y:kt(f,2),z:kt(f,3),visibility:w(f,4)!=null?kt(f,4):void 0}}function Kl(f){return f.map(function(g){return gt(es(g),vr,1).map(Zl)})}function Ho(f,g){this.i=f,this.h=g,this.m=0}function Ql(f,g,_){return $c(f,g),typeof f.h.canvas.transferToImageBitmap=="function"?Promise.resolve(f.h.canvas.transferToImageBitmap()):_?Promise.resolve(f.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(f.h.canvas):(f.j===void 0&&(f.j=document.createElement("canvas")),new Promise(function(C){f.j.height=f.h.canvas.height,f.j.width=f.h.canvas.width,f.j.getContext("2d",{}).drawImage(f.h.canvas,0,0,f.h.canvas.width,f.h.canvas.height),C(f.j)}))}function $c(f,g){var _=f.h;if(f.s===void 0){var C=jl(_,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),z=jl(_,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),W=_.createProgram();if(_.attachShader(W,C),_.attachShader(W,z),_.linkProgram(W),!_.getProgramParameter(W,_.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+_.getProgramInfoLog(W));C=f.s=W,_.useProgram(C),z=_.getUniformLocation(C,"sampler0"),f.l={O:_.getAttribLocation(C,"aVertex"),N:_.getAttribLocation(C,"aTex"),xa:z},f.v=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,f.v),_.enableVertexAttribArray(f.l.O),_.vertexAttribPointer(f.l.O,2,_.FLOAT,!1,0,0),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),_.STATIC_DRAW),_.bindBuffer(_.ARRAY_BUFFER,null),f.u=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,f.u),_.enableVertexAttribArray(f.l.N),_.vertexAttribPointer(f.l.N,2,_.FLOAT,!1,0,0),_.bufferData(_.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),_.STATIC_DRAW),_.bindBuffer(_.ARRAY_BUFFER,null),_.uniform1i(z,0)}C=f.l,_.useProgram(f.s),_.canvas.width=g.width,_.canvas.height=g.height,_.viewport(0,0,g.width,g.height),_.activeTexture(_.TEXTURE0),f.i.bindTexture2d(g.glName),_.enableVertexAttribArray(C.O),_.bindBuffer(_.ARRAY_BUFFER,f.v),_.vertexAttribPointer(C.O,2,_.FLOAT,!1,0,0),_.enableVertexAttribArray(C.N),_.bindBuffer(_.ARRAY_BUFFER,f.u),_.vertexAttribPointer(C.N,2,_.FLOAT,!1,0,0),_.bindFramebuffer(_.DRAW_FRAMEBUFFER?_.DRAW_FRAMEBUFFER:_.FRAMEBUFFER,null),_.clearColor(0,0,0,0),_.clear(_.COLOR_BUFFER_BIT),_.colorMask(!0,!0,!0,!0),_.drawArrays(_.TRIANGLE_FAN,0,4),_.disableVertexAttribArray(C.O),_.disableVertexAttribArray(C.N),_.bindBuffer(_.ARRAY_BUFFER,null),f.i.bindTexture2d(0)}function Jl(f){this.h=f}var tf=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function ef(f,g){return g+f}function $l(f,g){window[f]=g}function nf(f){var g=document.createElement("script");return g.setAttribute("src",f),g.setAttribute("crossorigin","anonymous"),new Promise(function(_){g.addEventListener("load",function(){_()},!1),g.addEventListener("error",function(){_()},!1),document.body.appendChild(g)})}function Go(){return P(function(f){switch(f.h){case 1:return f.s=2,F(f,WebAssembly.instantiate(tf),4);case 4:f.h=3,f.s=0;break;case 2:return f.s=0,f.l=null,f.return(!1);case 3:return f.return(!0)}})}function Vo(f){if(this.h=f,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=f&&f.locateFile||ef,typeof window=="object")var g=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")g=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=g,f.options){g=p(Object.keys(f.options));for(var _=g.next();!_.done;_=g.next()){_=_.value;var C=f.options[_].default;C!==void 0&&(this.l[_]=typeof C=="function"?C():C)}}}o=Vo.prototype,o.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function af(f){var g,_,C,z,W,k,$,vt,Lt,Gt,fe;return P(function(le){switch(le.h){case 1:return f.ga?(g=f.h.files===void 0?[]:typeof f.h.files=="function"?f.h.files(f.l):f.h.files,F(le,Go(),2)):le.return();case 2:if(_=le.i,typeof window=="object")return $l("createMediapipeSolutionsWasm",{locateFile:f.locateFile}),$l("createMediapipeSolutionsPackedAssets",{locateFile:f.locateFile}),k=g.filter(function(Kt){return Kt.data!==void 0}),$=g.filter(function(Kt){return Kt.data===void 0}),vt=Promise.all(k.map(function(Kt){var _e=Fs(f,Kt.url);if(Kt.path!==void 0){var be=Kt.path;_e=_e.then(function(rn){return f.overrideFile(be,rn),Promise.resolve(rn)})}return _e})),Lt=Promise.all($.map(function(Kt){return Kt.simd===void 0||Kt.simd&&_||!Kt.simd&&!_?nf(f.locateFile(Kt.url,f.ha)):Promise.resolve()})).then(function(){var Kt,_e,be;return P(function(rn){if(rn.h==1)return Kt=window.createMediapipeSolutionsWasm,_e=window.createMediapipeSolutionsPackedAssets,be=f,F(rn,Kt(_e),2);be.i=rn.i,rn.h=0})}),Gt=(function(){return P(function(Kt){return f.h.graph&&f.h.graph.url?Kt=F(Kt,Fs(f,f.h.graph.url),0):(Kt.h=0,Kt=void 0),Kt})})(),F(le,Promise.all([Lt,vt,Gt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return C=g.filter(function(Kt){return Kt.simd===void 0||Kt.simd&&_||!Kt.simd&&!_}).map(function(Kt){return f.locateFile(Kt.url,f.ha)}),importScripts.apply(null,v(C)),z=f,F(le,createMediapipeSolutionsWasm(Module),6);case 6:z.i=le.i,f.m=new OffscreenCanvas(1,1),f.i.canvas=f.m,W=f.i.GL.createContext(f.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),f.i.GL.makeContextCurrent(W),le.h=4;break;case 7:if(f.m=document.createElement("canvas"),fe=f.m.getContext("webgl2",{}),!fe&&(fe=f.m.getContext("webgl",{}),!fe))return alert("Failed to create WebGL canvas context when passing video frame."),le.return();f.K=fe,f.i.canvas=f.m,f.i.createContext(f.m,!0,!0,{});case 4:f.j=new f.i.SolutionWasm,f.ga=!1,le.h=0}})}function rf(f){var g,_,C,z,W,k,$,vt;return P(function(Lt){if(Lt.h==1){if(f.h.graph&&f.h.graph.url&&f.fa===f.h.graph.url)return Lt.return();if(f.u=!0,!f.h.graph||!f.h.graph.url){Lt.h=2;return}return f.fa=f.h.graph.url,F(Lt,Fs(f,f.h.graph.url),3)}for(Lt.h!=2&&(g=Lt.i,f.j.loadGraph(g)),_=p(Object.keys(f.D)),C=_.next();!C.done;C=_.next())z=C.value,f.j.overrideFile(z,f.D[z]);if(f.D={},f.h.listeners)for(W=p(f.h.listeners),k=W.next();!k.done;k=W.next())$=k.value,lf(f,$);vt=f.l,f.l={},f.setOptions(vt),Lt.h=0})}o.reset=function(){var f=this;return P(function(g){f.j&&(f.j.reset(),f.s={},f.v={}),g.h=0})},o.setOptions=function(f,g){var _=this;if(g=g||this.h.options){for(var C=[],z=[],W={},k=p(Object.keys(f)),$=k.next();!$.done;W={X:W.X,Y:W.Y},$=k.next())if($=$.value,!($ in this.l&&this.l[$]===f[$])){this.l[$]=f[$];var vt=g[$];vt!==void 0&&(vt.onChange&&(W.X=vt.onChange,W.Y=f[$],C.push((function(Lt){return function(){var Gt;return P(function(fe){if(fe.h==1)return F(fe,Lt.X(Lt.Y),2);Gt=fe.i,Gt===!0&&(_.u=!0),fe.h=0})}})(W))),vt.graphOptionXref&&($=Object.assign({},{calculatorName:"",calculatorIndex:0},vt.graphOptionXref,{valueNumber:vt.type===1?f[$]:0,valueBoolean:vt.type===0?f[$]:!1,valueString:vt.type===2?f[$]:""}),z.push($)))}(C.length!==0||z.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(z),this.F=(this.F===void 0?[]:this.F).concat(C))}};function tu(f){var g,_,C,z,W,k,$;return P(function(vt){switch(vt.h){case 1:if(!f.u)return vt.return();if(!f.F){vt.h=2;break}g=p(f.F),_=g.next();case 3:if(_.done){vt.h=5;break}return C=_.value,F(vt,C(),4);case 4:_=g.next(),vt.h=3;break;case 5:f.F=void 0;case 2:if(f.H){for(z=new f.i.GraphOptionChangeRequestList,W=p(f.H),k=W.next();!k.done;k=W.next())$=k.value,z.push_back($);f.j.changeOptions(z),z.delete(),f.H=void 0}f.u=!1,vt.h=0}})}o.initialize=function(){var f=this;return P(function(g){return g.h==1?F(g,af(f),2):g.h!=3?F(g,rf(f),3):F(g,tu(f),0)})};function Fs(f,g){var _,C;return P(function(z){return g in f.L?z.return(f.L[g]):(_=f.locateFile(g,""),C=fetch(_).then(function(W){return W.arrayBuffer()}),f.L[g]=C,z.return(C))})}o.overrideFile=function(f,g){this.j?this.j.overrideFile(f,g):this.D[f]=g},o.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},o.send=function(f,g){var _=this,C,z,W,k,$,vt,Lt,Gt,fe;return P(function(le){switch(le.h){case 1:return _.h.inputs?(C=1e3*(g??performance.now()),F(le,_.I,2)):le.return();case 2:return F(le,_.initialize(),3);case 3:for(z=new _.i.PacketDataList,W=p(Object.keys(f)),k=W.next();!k.done;k=W.next())if($=k.value,vt=_.h.inputs[$]){t:{var Kt=f[$];switch(vt.type){case"video":var _e=_.s[vt.stream];if(_e||(_e=new Ho(_.i,_.K),_.s[vt.stream]=_e),_e.m===0&&(_e.m=_e.i.createTexture()),typeof HTMLVideoElement<"u"&&Kt instanceof HTMLVideoElement)var be=Kt.videoWidth,rn=Kt.videoHeight;else typeof HTMLImageElement<"u"&&Kt instanceof HTMLImageElement?(be=Kt.naturalWidth,rn=Kt.naturalHeight):(be=Kt.width,rn=Kt.height);rn={glName:_e.m,width:be,height:rn},be=_e.h,be.canvas.width=rn.width,be.canvas.height=rn.height,be.activeTexture(be.TEXTURE0),_e.i.bindTexture2d(_e.m),be.texImage2D(be.TEXTURE_2D,0,be.RGBA,be.RGBA,be.UNSIGNED_BYTE,Kt),_e.i.bindTexture2d(0),_e=rn;break t;case"detections":for(_e=_.s[vt.stream],_e||(_e=new Jl(_.i),_.s[vt.stream]=_e),_e.data||(_e.data=new _e.h.DetectionListData),_e.data.reset(Kt.length),rn=0;rn<Kt.length;++rn){be=Kt[rn];var Ye=_e.data,xn=Ye.setBoundingBox,yi=rn,kn=be.la,Fe=new ns;if(lt(Fe,1,kn.ra),lt(Fe,2,kn.sa),lt(Fe,3,kn.height),lt(Fe,4,kn.width),lt(Fe,5,kn.rotation),Xn(Fe,6,kn.pa),kn=Fe.l(),xn.call(Ye,yi,kn),be.ea)for(Ye=0;Ye<be.ea.length;++Ye){Fe=be.ea[Ye],xn=_e.data,yi=xn.addNormalizedLandmark,kn=rn,Fe=Object.assign({},Fe,{visibility:Fe.visibility?Fe.visibility:0});var zn=new vr;lt(zn,1,Fe.x),lt(zn,2,Fe.y),lt(zn,3,Fe.z),Fe.visibility&&lt(zn,4,Fe.visibility),Fe=zn.l(),yi.call(xn,kn,Fe)}if(be.ba)for(Ye=0;Ye<be.ba.length;++Ye)xn=_e.data,yi=xn.addClassification,kn=rn,Fe=be.ba[Ye],zn=new Pa,lt(zn,2,Fe.score),Fe.index&&Xn(zn,1,Fe.index),Fe.label&&Xn(zn,3,Fe.label),Fe.displayName&&Xn(zn,4,Fe.displayName),Fe=zn.l(),yi.call(xn,kn,Fe)}_e=_e.data;break t;default:_e={}}}switch(Lt=_e,Gt=vt.stream,vt.type){case"video":z.pushTexture2d(Object.assign({},Lt,{stream:Gt,timestamp:C}));break;case"detections":fe=Lt,fe.stream=Gt,fe.timestamp=C,z.pushDetectionList(fe);break;default:throw Error("Unknown input config type: '"+vt.type+"'")}}return _.j.send(z),F(le,_.I,4);case 4:z.delete(),le.h=0}})};function sf(f,g,_){var C,z,W,k,$,vt,Lt,Gt,fe,le,Kt,_e,be,rn;return P(function(Ye){switch(Ye.h){case 1:if(!_)return Ye.return(g);for(C={},z=0,W=p(Object.keys(_)),k=W.next();!k.done;k=W.next())$=k.value,vt=_[$],typeof vt!="string"&&vt.type==="texture"&&g[vt.stream]!==void 0&&++z;1<z&&(f.M=!1),Lt=p(Object.keys(_)),k=Lt.next();case 2:if(k.done){Ye.h=4;break}if(Gt=k.value,fe=_[Gt],typeof fe=="string")return be=C,rn=Gt,F(Ye,of(f,Gt,g[fe]),14);if(le=g[fe.stream],fe.type==="detection_list"){if(le){for(var xn=le.getRectList(),yi=le.getLandmarksList(),kn=le.getClassificationsList(),Fe=[],zn=0;zn<xn.size();++zn){var Zi=Jc(xn.get(zn)),Xo=kt(Zi,1),iu=kt(Zi,2),au=kt(Zi,3),ru=kt(Zi,4),uf=kt(Zi,5,0),zs=void 0;zs=zs===void 0?0:zs,Zi={la:{ra:Xo,sa:iu,height:au,width:ru,rotation:uf,pa:Ht(Nn(Zi,6),zs)},ea:gt(es(yi.get(zn)),vr,1).map(Zl),ba:Ps(gr(kn.get(zn)))},Fe.push(Zi)}xn=Fe}else xn=[];C[Gt]=xn,Ye.h=7;break}if(fe.type==="proto_list"){if(le){for(xn=Array(le.size()),yi=0;yi<le.size();yi++)xn[yi]=le.get(yi);le.delete()}else xn=[];C[Gt]=xn,Ye.h=7;break}if(le===void 0){Ye.h=3;break}if(fe.type==="float_list"){C[Gt]=le,Ye.h=7;break}if(fe.type==="proto"){C[Gt]=le,Ye.h=7;break}if(fe.type!=="texture")throw Error("Unknown output config type: '"+fe.type+"'");return Kt=f.v[Gt],Kt||(Kt=new Ho(f.i,f.K),f.v[Gt]=Kt),F(Ye,Ql(Kt,le,f.M),13);case 13:_e=Ye.i,C[Gt]=_e;case 7:fe.transform&&C[Gt]&&(C[Gt]=fe.transform(C[Gt])),Ye.h=3;break;case 14:be[rn]=Ye.i;case 3:k=Lt.next(),Ye.h=2;break;case 4:return Ye.return(C)}})}function of(f,g,_){var C;return P(function(z){return typeof _=="number"||_ instanceof Uint8Array||_ instanceof f.i.Uint8BlobList?z.return(_):_ instanceof f.i.Texture2dDataOut?(C=f.v[g],C||(C=new Ho(f.i,f.K),f.v[g]=C),z.return(Ql(C,_,f.M))):z.return(void 0)})}function lf(f,g){for(var _=g.name||"$",C=[].concat(v(g.wants)),z=new f.i.StringList,W=p(g.wants),k=W.next();!k.done;k=W.next())z.push_back(k.value);W=f.i.PacketListener.implement({onResults:function($){for(var vt={},Lt=0;Lt<g.wants.length;++Lt)vt[C[Lt]]=$.get(Lt);var Gt=f.listeners[_];Gt&&(f.I=sf(f,vt,g.outs).then(function(fe){fe=Gt(fe);for(var le=0;le<g.wants.length;++le){var Kt=vt[C[le]];typeof Kt=="object"&&Kt.hasOwnProperty&&Kt.hasOwnProperty("delete")&&Kt.delete()}fe&&(f.I=fe)}))}}),f.j.attachMultiListener(z,W),z.delete()}o.onResults=function(f,g){this.listeners[g||"$"]=f},pt("Solution",Vo),pt("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function eu(f){return f===void 0&&(f=0),f===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function nu(f){var g=this;f=f||{},this.h=new Vo({locateFile:f.locateFile,files:function(_){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:eu(_.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Kl},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Kl},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(_){return _.map(function(C){return Ps(gr(C))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(_){var C,z,W;return P(function(k){return k.h==1?(C=eu(_),z="third_party/mediapipe/modules/hand_landmark/"+C,F(k,Fs(g.h,C),2)):(W=k.i,g.h.overrideFile(z,W),k.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}o=nu.prototype,o.close=function(){return this.h.close(),Promise.resolve()},o.onResults=function(f){this.h.onResults(f)},o.initialize=function(){var f=this;return P(function(g){return F(g,f.h.initialize(),0)})},o.reset=function(){this.h.reset()},o.send=function(f){var g=this;return P(function(_){return F(_,g.h.send(f),0)})},o.setOptions=function(f){this.h.setOptions(f)},pt("Hands",nu),pt("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),pt("VERSION","0.4.1675469240")}).call(Id)),Id}var Zb=jb(),Hd={},x_;function Kb(){return x_||(x_=1,(function(){function o(b){var P=0;return function(){return P<b.length?{done:!1,value:b[P++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(b,P,tt){return b==Array.prototype||b==Object.prototype||(b[P]=tt.value),b};function i(b){b=[typeof globalThis=="object"&&globalThis,b,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ic=="object"&&Ic];for(var P=0;P<b.length;++P){var tt=b[P];if(tt&&tt.Math==Math)return tt}throw Error("Cannot find global object")}var r=i(this);function l(b,P){if(P)t:{var tt=r;b=b.split(".");for(var K=0;K<b.length-1;K++){var dt=b[K];if(!(dt in tt))break t;tt=tt[dt]}b=b[b.length-1],K=tt[b],P=P(K),P!=K&&P!=null&&e(tt,b,{configurable:!0,writable:!0,value:P})}}l("Symbol",function(b){function P(pt){if(this instanceof P)throw new TypeError("Symbol is not a constructor");return new tt(K+(pt||"")+"_"+dt++,pt)}function tt(pt,N){this.g=pt,e(this,"description",{configurable:!0,writable:!0,value:N})}if(b)return b;tt.prototype.toString=function(){return this.g};var K="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",dt=0;return P}),l("Symbol.iterator",function(b){if(b)return b;b=Symbol("Symbol.iterator");for(var P="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),tt=0;tt<P.length;tt++){var K=r[P[tt]];typeof K=="function"&&typeof K.prototype[b]!="function"&&e(K.prototype,b,{configurable:!0,writable:!0,value:function(){return u(o(this))}})}return b});function u(b){return b={next:b},b[Symbol.iterator]=function(){return this},b}function d(b){var P=typeof Symbol<"u"&&Symbol.iterator&&b[Symbol.iterator];return P?P.call(b):{next:o(b)}}function p(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function v(b){if(b.i)throw new TypeError("Generator is already running");b.i=!0}p.prototype.l=function(b){this.o=b};function m(b,P){b.h={F:P,G:!0},b.j=b.m}p.prototype.return=function(b){this.h={return:b},this.j=this.m};function S(b){this.g=new p,this.h=b}function x(b,P){v(b.g);var tt=b.g.g;return tt?E(b,"return"in tt?tt.return:function(K){return{value:K,done:!0}},P,b.g.return):(b.g.return(P),R(b))}function E(b,P,tt,K){try{var dt=P.call(b.g.g,tt);if(!(dt instanceof Object))throw new TypeError("Iterator result "+dt+" is not an object");if(!dt.done)return b.g.i=!1,dt;var pt=dt.value}catch(N){return b.g.g=null,m(b.g,N),R(b)}return b.g.g=null,K.call(b.g,pt),R(b)}function R(b){for(;b.g.j;)try{var P=b.h(b.g);if(P)return b.g.i=!1,{value:P.value,done:!1}}catch(tt){b.g.o=void 0,m(b.g,tt)}if(b.g.i=!1,b.g.h){if(P=b.g.h,b.g.h=null,P.G)throw P.F;return{value:P.return,done:!0}}return{value:void 0,done:!0}}function D(b){this.next=function(P){return v(b.g),b.g.g?P=E(b,b.g.g.next,P,b.g.l):(b.g.l(P),P=R(b)),P},this.throw=function(P){return v(b.g),b.g.g?P=E(b,b.g.g.throw,P,b.g.l):(m(b.g,P),P=R(b)),P},this.return=function(P){return x(b,P)},this[Symbol.iterator]=function(){return this}}function O(b){function P(K){return b.next(K)}function tt(K){return b.throw(K)}return new Promise(function(K,dt){function pt(N){N.done?K(N.value):Promise.resolve(N.value).then(P,tt).then(pt,dt)}pt(b.next())})}l("Promise",function(b){function P(N){this.h=0,this.i=void 0,this.g=[],this.o=!1;var I=this.j();try{N(I.resolve,I.reject)}catch(nt){I.reject(nt)}}function tt(){this.g=null}function K(N){return N instanceof P?N:new P(function(I){I(N)})}if(b)return b;tt.prototype.h=function(N){if(this.g==null){this.g=[];var I=this;this.i(function(){I.l()})}this.g.push(N)};var dt=r.setTimeout;tt.prototype.i=function(N){dt(N,0)},tt.prototype.l=function(){for(;this.g&&this.g.length;){var N=this.g;this.g=[];for(var I=0;I<N.length;++I){var nt=N[I];N[I]=null;try{nt()}catch(Et){this.j(Et)}}}this.g=null},tt.prototype.j=function(N){this.i(function(){throw N})},P.prototype.j=function(){function N(Et){return function(At){nt||(nt=!0,Et.call(I,At))}}var I=this,nt=!1;return{resolve:N(this.A),reject:N(this.l)}},P.prototype.A=function(N){if(N===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(N instanceof P)this.C(N);else{t:switch(typeof N){case"object":var I=N!=null;break t;case"function":I=!0;break t;default:I=!1}I?this.v(N):this.m(N)}},P.prototype.v=function(N){var I=void 0;try{I=N.then}catch(nt){this.l(nt);return}typeof I=="function"?this.D(I,N):this.m(N)},P.prototype.l=function(N){this.u(2,N)},P.prototype.m=function(N){this.u(1,N)},P.prototype.u=function(N,I){if(this.h!=0)throw Error("Cannot settle("+N+", "+I+"): Promise already settled in state"+this.h);this.h=N,this.i=I,this.h===2&&this.B(),this.H()},P.prototype.B=function(){var N=this;dt(function(){if(N.I()){var I=r.console;typeof I<"u"&&I.error(N.i)}},1)},P.prototype.I=function(){if(this.o)return!1;var N=r.CustomEvent,I=r.Event,nt=r.dispatchEvent;return typeof nt>"u"?!0:(typeof N=="function"?N=new N("unhandledrejection",{cancelable:!0}):typeof I=="function"?N=new I("unhandledrejection",{cancelable:!0}):(N=r.document.createEvent("CustomEvent"),N.initCustomEvent("unhandledrejection",!1,!0,N)),N.promise=this,N.reason=this.i,nt(N))},P.prototype.H=function(){if(this.g!=null){for(var N=0;N<this.g.length;++N)pt.h(this.g[N]);this.g=null}};var pt=new tt;return P.prototype.C=function(N){var I=this.j();N.s(I.resolve,I.reject)},P.prototype.D=function(N,I){var nt=this.j();try{N.call(I,nt.resolve,nt.reject)}catch(Et){nt.reject(Et)}},P.prototype.then=function(N,I){function nt(ot,Tt){return typeof ot=="function"?function(Pt){try{Et(ot(Pt))}catch(qt){At(qt)}}:Tt}var Et,At,H=new P(function(ot,Tt){Et=ot,At=Tt});return this.s(nt(N,Et),nt(I,At)),H},P.prototype.catch=function(N){return this.then(void 0,N)},P.prototype.s=function(N,I){function nt(){switch(Et.h){case 1:N(Et.i);break;case 2:I(Et.i);break;default:throw Error("Unexpected state: "+Et.h)}}var Et=this;this.g==null?pt.h(nt):this.g.push(nt),this.o=!0},P.resolve=K,P.reject=function(N){return new P(function(I,nt){nt(N)})},P.race=function(N){return new P(function(I,nt){for(var Et=d(N),At=Et.next();!At.done;At=Et.next())K(At.value).s(I,nt)})},P.all=function(N){var I=d(N),nt=I.next();return nt.done?K([]):new P(function(Et,At){function H(Pt){return function(qt){ot[Pt]=qt,Tt--,Tt==0&&Et(ot)}}var ot=[],Tt=0;do ot.push(void 0),Tt++,K(nt.value).s(H(ot.length-1),At),nt=I.next();while(!nt.done)})},P});var T=typeof Object.assign=="function"?Object.assign:function(b,P){for(var tt=1;tt<arguments.length;tt++){var K=arguments[tt];if(K)for(var dt in K)Object.prototype.hasOwnProperty.call(K,dt)&&(b[dt]=K[dt])}return b};l("Object.assign",function(b){return b||T});var M=this||self,G={facingMode:"user",width:640,height:480};function V(b,P){this.video=b,this.i=0,this.h=Object.assign(Object.assign({},G),P)}V.prototype.stop=function(){var b=this,P,tt,K,dt;return O(new D(new S(function(pt){if(b.g){for(P=b.g.getTracks(),tt=d(P),K=tt.next();!K.done;K=tt.next())dt=K.value,dt.stop();b.g=void 0}pt.j=0})))},V.prototype.start=function(){var b=this,P;return O(new D(new S(function(tt){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),P=b.h,tt.return(navigator.mediaDevices.getUserMedia({video:{facingMode:P.facingMode,width:P.width,height:P.height}}).then(function(K){q(b,K)}).catch(function(K){var dt="Failed to acquire camera feed: "+K;throw console.error(dt),alert(dt),K}))})))};function F(b){window.requestAnimationFrame(function(){Y(b)})}function q(b,P){b.g=P,b.video.srcObject=P,b.video.onloadedmetadata=function(){b.video.play(),F(b)}}function Y(b){var P=null;b.video.paused||b.video.currentTime===b.i||(b.i=b.video.currentTime,P=b.h.onFrame()),P?P.then(function(){F(b)}):F(b)}var X=["Camera"],at=M;X[0]in at||typeof at.execScript>"u"||at.execScript("var "+X[0]);for(var L;X.length&&(L=X.shift());)X.length||V===void 0?at[L]&&at[L]!==Object.prototype[L]?at=at[L]:at=at[L]={}:at[L]=V}).call(Hd)),Hd}var Qb=Kb();const zp=5e4,nr=256,Jb=2.5,$b=3,tA=.96,eA=.02,nA=`
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
`,iA=`
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
`,aA=`
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
`,rA=`
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
`,sA=`
  attribute float alpha;
  varying float vAlpha;
  
  void main() {
    vAlpha = alpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,oA=`
  varying float vAlpha;
  
  void main() {
    vec3 color = vec3(1.0, 1.0, 1.0);
    float glow = vAlpha * 0.8;
    gl_FragColor = vec4(color, glow);
  }
`;class lA{renderer;scene;camera;positionFBO;velocityFBO;positionFBO2;velocityFBO2;positionMaterial;velocityMaterial;particleMaterial;particleGeometry;particles;fboScene;fboCamera;handPositions=[];trailLines=[];trailPositions=[[],[],[],[]];maxTrailLength=30;clock=new QS;constructor(e,i,r){this.renderer=e,this.scene=i,this.camera=r,this.fboScene=new q_,this.fboCamera=new Kp(-1,1,1,-1,.1,10),this.fboCamera.position.z=1,this.initFBOs(),this.initParticles(),this.initTrails()}initFBOs(){const e=nr,i={minFilter:qn,magFilter:qn,format:Ri,type:Vi,depthBuffer:!1,stencilBuffer:!1};this.positionFBO=new Ci(e,e,i),this.velocityFBO=new Ci(e,e,i),this.positionFBO2=new Ci(e,e,i),this.velocityFBO2=new Ci(e,e,i);const r=new Float32Array(e*e*4),l=new Float32Array(e*e*4);for(let m=0;m<e*e;m++){const S=m*4,x=Math.acos(-1+2*(m%e)/e),E=Math.sqrt(e*Math.PI)*x,R=8;r[S]=R*Math.cos(E)*Math.sin(x),r[S+1]=R*Math.cos(x),r[S+2]=R*Math.sin(E)*Math.sin(x),r[S+3]=1,l[S]=0,l[S+1]=0,l[S+2]=0,l[S+3]=0}const u=new Np(r,e,e,Ri,Vi),d=new Np(l,e,e,Ri,Vi);u.needsUpdate=!0,d.needsUpdate=!0,this.renderer.setRenderTarget(this.positionFBO);const p=new pi(new Yr(2,2),new Il({map:u}));this.fboScene.add(p),this.renderer.render(this.fboScene,this.fboCamera),this.fboScene.remove(p),this.renderer.setRenderTarget(this.velocityFBO);const v=new pi(new Yr(2,2),new Il({map:d}));this.fboScene.add(v),this.renderer.render(this.fboScene,this.fboCamera),this.fboScene.remove(v),this.renderer.setRenderTarget(null),this.positionMaterial=new mi({uniforms:{positionTexture:{value:null},velocityTexture:{value:null},deltaTime:{value:.016},resolution:{value:new $e(nr,nr)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:aA}),this.velocityMaterial=new mi({uniforms:{positionTexture:{value:null},velocityTexture:{value:null},handPositions:{value:[new ft,new ft,new ft,new ft]},handCount:{value:0},deltaTime:{value:.016},time:{value:0},repulsionRadius:{value:Jb},repulsionStrength:{value:$b},returnStrength:{value:eA},damping:{value:tA},resolution:{value:new $e(nr,nr)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:rA})}initParticles(){const e=new Float32Array(zp*2);for(let i=0;i<zp;i++){const r=i%nr/nr,l=Math.floor(i/nr)/nr;e[i*2]=r,e[i*2+1]=l}this.particleGeometry=new wi,this.particleGeometry.setAttribute("position",new Xi(e,2)),this.particleMaterial=new mi({uniforms:{positionTexture:{value:this.positionFBO.texture},velocityTexture:{value:this.velocityFBO.texture},pointSize:{value:3},time:{value:0}},vertexShader:nA,fragmentShader:iA,transparent:!0,depthWrite:!1,blending:Hc}),this.particles=new WS(this.particleGeometry,this.particleMaterial),this.scene.add(this.particles)}initTrails(){for(let e=0;e<4;e++){const i=new wi,r=new Float32Array(this.maxTrailLength*3),l=new Float32Array(this.maxTrailLength);i.setAttribute("position",new Xi(r,3)),i.setAttribute("alpha",new Xi(l,1)),i.setDrawRange(0,0);const u=new mi({uniforms:{},vertexShader:sA,fragmentShader:oA,transparent:!0,depthWrite:!1,blending:Hc}),d=new XS(i,u);d.frustumCulled=!1,this.scene.add(d),this.trailLines.push(d)}}updateHandPositions(e){this.handPositions=e,e.forEach((i,r)=>{r<4&&(this.trailPositions[r].push(i.clone()),this.trailPositions[r].length>this.maxTrailLength&&this.trailPositions[r].shift(),this.updateTrailGeometry(r))})}updateTrailGeometry(e){const i=this.trailPositions[e],r=this.trailLines[e],l=r.geometry.attributes.position.array,u=r.geometry.attributes.alpha.array;for(let d=0;d<i.length;d++){const p=d*3;l[p]=i[d].x,l[p+1]=i[d].y,l[p+2]=i[d].z,u[d]=d/i.length*.8}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.setDrawRange(0,i.length)}update(){const e=Math.min(this.clock.getDelta(),.033),i=this.clock.getElapsedTime();this.velocityMaterial.uniforms.positionTexture.value=this.positionFBO.texture,this.velocityMaterial.uniforms.velocityTexture.value=this.velocityFBO.texture,this.velocityMaterial.uniforms.deltaTime.value=e,this.velocityMaterial.uniforms.time.value=i,this.velocityMaterial.uniforms.handCount.value=this.handPositions.length;for(let p=0;p<4;p++)p<this.handPositions.length&&(this.velocityMaterial.uniforms.handPositions.value[p]=this.handPositions[p]);const r=new pi(new Yr(2,2),this.velocityMaterial);this.fboScene.add(r),this.renderer.setRenderTarget(this.velocityFBO2),this.renderer.render(this.fboScene,this.fboCamera),this.fboScene.remove(r),this.positionMaterial.uniforms.positionTexture.value=this.positionFBO.texture,this.positionMaterial.uniforms.velocityTexture.value=this.velocityFBO2.texture,this.positionMaterial.uniforms.deltaTime.value=e;const l=new pi(new Yr(2,2),this.positionMaterial);this.fboScene.add(l),this.renderer.setRenderTarget(this.positionFBO2),this.renderer.render(this.fboScene,this.fboCamera),this.fboScene.remove(l),this.renderer.setRenderTarget(null);const u=this.positionFBO;this.positionFBO=this.positionFBO2,this.positionFBO2=u;const d=this.velocityFBO;this.velocityFBO=this.velocityFBO2,this.velocityFBO2=d,this.particleMaterial.uniforms.positionTexture.value=this.positionFBO.texture,this.particleMaterial.uniforms.velocityTexture.value=this.velocityFBO.texture,this.particleMaterial.uniforms.time.value=i}dispose(){this.positionFBO.dispose(),this.velocityFBO.dispose(),this.positionFBO2.dispose(),this.velocityFBO2.dispose(),this.particleGeometry.dispose(),this.particleMaterial.dispose(),this.positionMaterial.dispose(),this.velocityMaterial.dispose(),this.trailLines.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}}function uA(){const o=ai.useRef(null),e=ai.useRef(null),i=ai.useRef(null),r=ai.useRef(null),l=ai.useRef(null),u=ai.useRef(null),d=ai.useRef(0),p=ai.useRef([]),v=ai.useRef(null),[m,S]=ai.useState(""),[x,E]=ai.useState(!1),[R,D]=ai.useState(0),O=ai.useRef({frames:0,lastTime:performance.now()}),T=ai.useCallback(()=>{if(!o.current)return()=>{};const G=o.current,V=G.clientWidth,F=G.clientHeight,q=new q_;q.background=new We(657930),v.current=q;const Y=new sa(60,V/F,.1,100);Y.position.z=25;const X=new Yb({antialias:!1,powerPreference:"high-performance"});X.setSize(V,F),X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.setClearColor(657930),G.appendChild(X.domElement);const at=new qc(50,32,32),L=new mi({uniforms:{color1:{value:new We(1710618)},color2:{value:new We(328965)}},vertexShader:`
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vPosition;
        void main() {
          float dist = length(vPosition) / 50.0;
          float t = smoothstep(0.3, 1.0, dist);
          gl_FragColor = vec4(mix(color1, color2, t), 1.0);
        }
      `,side:gi}),b=new pi(at,L);q.add(b);const P=new qc(.4,16,16),tt=new Il({color:16724787,transparent:!0,opacity:.8});for(let N=0;N<4;N++){const I=new pi(P,tt.clone());I.visible=!1,q.add(I),p.current.push(I)}const K=new lA(X,q,Y);r.current=K;const dt=()=>{d.current=requestAnimationFrame(dt),K.update(),X.render(q,Y),O.current.frames++;const N=performance.now();N-O.current.lastTime>=1e3&&(D(O.current.frames),O.current.frames=0,O.current.lastTime=N)};dt();const pt=()=>{const N=G.clientWidth,I=G.clientHeight;Y.aspect=N/I,Y.updateProjectionMatrix(),X.setSize(N,I)};return window.addEventListener("resize",pt),()=>{window.removeEventListener("resize",pt),cancelAnimationFrame(d.current),K.dispose(),X.dispose(),G.removeChild(X.domElement)}},[]),M=ai.useCallback(async()=>{if(e.current)try{const G=new Zb.Hands({locateFile:F=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${F}`});G.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),G.onResults(F=>{if(!r.current||!v.current)return;const q=[];F.multiHandLandmarks&&F.multiHandLandmarks.length>0?(E(!0),F.multiHandLandmarks.forEach(Y=>{const X=Y[8],at=Y[4],L=Y[12],b=Y[16],P=tt=>new ft((tt.x-.5)*30,-(tt.y-.5)*20,tt.z*5);q.push(P(X)),q.push(P(at)),q.push(P(L)),q.push(P(b))})):E(!1),r.current.updateHandPositions(q),p.current.forEach((Y,X)=>{X<q.length?(Y.position.copy(q[X]),Y.visible=!0):Y.visible=!1})}),l.current=G;const V=new Qb.Camera(e.current,{onFrame:async()=>{await G.send({image:e.current})},width:640,height:480});u.current=V,await V.start()}catch(G){console.error("MediaPipe initialization error:",G),S("Failed to initialize camera. Please allow camera access.")}},[]);return ai.useEffect(()=>{const G=T();return M(),()=>{G(),u.current?.stop(),l.current?.close()}},[T,M]),_n.jsxs("div",{"code-path":"src/App.tsx:809:5",className:"app",children:[_n.jsx("video",{"code-path":"src/App.tsx:811:7",ref:e,className:"input-video",playsInline:!0,muted:!0,style:{display:"none"}}),_n.jsx("div",{"code-path":"src/App.tsx:820:7",ref:o,className:"canvas-container"}),_n.jsxs("div",{"code-path":"src/App.tsx:823:7",className:"ui-overlay",children:[_n.jsxs("div",{"code-path":"src/App.tsx:824:9",className:"header",children:[_n.jsx("h1",{"code-path":"src/App.tsx:825:11",children:"Particle Destroyer"}),_n.jsx("p",{"code-path":"src/App.tsx:826:11",children:"Move your hands to repel particles"})]}),_n.jsxs("div",{"code-path":"src/App.tsx:829:9",className:"stats",children:[_n.jsxs("div",{"code-path":"src/App.tsx:830:11",className:"stat",children:[_n.jsx("span",{"code-path":"src/App.tsx:831:13",className:"stat-label",children:"Particles:"}),_n.jsx("span",{"code-path":"src/App.tsx:832:13",className:"stat-value",children:zp.toLocaleString()})]}),_n.jsxs("div",{"code-path":"src/App.tsx:834:11",className:"stat",children:[_n.jsx("span",{"code-path":"src/App.tsx:835:13",className:"stat-label",children:"FPS:"}),_n.jsx("span",{"code-path":"src/App.tsx:836:13",className:"stat-value",children:R})]}),_n.jsxs("div",{"code-path":"src/App.tsx:838:11",className:"stat",children:[_n.jsx("span",{"code-path":"src/App.tsx:839:13",className:"stat-label",children:"Hand:"}),_n.jsx("span",{"code-path":"src/App.tsx:840:13",className:`stat-value ${x?"detected":""}`,children:x?"Detected":"Searching..."})]})]}),m&&_n.jsx("div",{"code-path":"src/App.tsx:847:11",className:"error-message",children:m}),_n.jsxs("div",{"code-path":"src/App.tsx:852:9",className:"instructions",children:[_n.jsx("p",{"code-path":"src/App.tsx:853:11",children:"Show your hands to the camera"}),_n.jsx("p",{"code-path":"src/App.tsx:854:11",children:"Move fingers to destroy & repel particles"})]})]}),_n.jsx("canvas",{"code-path":"src/App.tsx:859:7",ref:i,style:{display:"none"}})]})}Ny.createRoot(document.getElementById("root")).render(_n.jsx(ai.StrictMode,{"code-path":"src/main.tsx:7:3",children:_n.jsx(uA,{"code-path":"src/main.tsx:8:5"})}));
