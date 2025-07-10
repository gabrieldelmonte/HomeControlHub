function zm(r,l){for(var a=0;a<l.length;a++){const c=l[a];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in r)){const h=Object.getOwnPropertyDescriptor(c,f);h&&Object.defineProperty(r,f,h.get?h:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=a(f);fetch(f.href,h)}})();function Qf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ja={exports:{}},Io={},Ca={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function Nm(){if(Wd)return ge;Wd=1;var r=Symbol.for("react.element"),l=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.iterator;function N(w){return w===null||typeof w!="object"?null:(w=P&&w[P]||w["@@iterator"],typeof w=="function"?w:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,b={};function D(w,z,ae){this.props=w,this.context=z,this.refs=b,this.updater=ae||L}D.prototype.isReactComponent={},D.prototype.setState=function(w,z){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,z,"setState")},D.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function V(){}V.prototype=D.prototype;function U(w,z,ae){this.props=w,this.context=z,this.refs=b,this.updater=ae||L}var F=U.prototype=new V;F.constructor=U,B(F,D.prototype),F.isPureReactComponent=!0;var H=Array.isArray,oe=Object.prototype.hasOwnProperty,re={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function Y(w,z,ae){var se,pe={},ue=null,we=null;if(z!=null)for(se in z.ref!==void 0&&(we=z.ref),z.key!==void 0&&(ue=""+z.key),z)oe.call(z,se)&&!Z.hasOwnProperty(se)&&(pe[se]=z[se]);var de=arguments.length-2;if(de===1)pe.children=ae;else if(1<de){for(var ye=Array(de),Be=0;Be<de;Be++)ye[Be]=arguments[Be+2];pe.children=ye}if(w&&w.defaultProps)for(se in de=w.defaultProps,de)pe[se]===void 0&&(pe[se]=de[se]);return{$$typeof:r,type:w,key:ue,ref:we,props:pe,_owner:re.current}}function ee(w,z){return{$$typeof:r,type:w.type,key:z,ref:w.ref,props:w.props,_owner:w._owner}}function ve(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function me(w){var z={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ae){return z[ae]})}var fe=/\/+/g;function Pe(w,z){return typeof w=="object"&&w!==null&&w.key!=null?me(""+w.key):z.toString(36)}function _e(w,z,ae,se,pe){var ue=typeof w;(ue==="undefined"||ue==="boolean")&&(w=null);var we=!1;if(w===null)we=!0;else switch(ue){case"string":case"number":we=!0;break;case"object":switch(w.$$typeof){case r:case l:we=!0}}if(we)return we=w,pe=pe(we),w=se===""?"."+Pe(we,0):se,H(pe)?(ae="",w!=null&&(ae=w.replace(fe,"$&/")+"/"),_e(pe,z,ae,"",function(Be){return Be})):pe!=null&&(ve(pe)&&(pe=ee(pe,ae+(!pe.key||we&&we.key===pe.key?"":(""+pe.key).replace(fe,"$&/")+"/")+w)),z.push(pe)),1;if(we=0,se=se===""?".":se+":",H(w))for(var de=0;de<w.length;de++){ue=w[de];var ye=se+Pe(ue,de);we+=_e(ue,z,ae,ye,pe)}else if(ye=N(w),typeof ye=="function")for(w=ye.call(w),de=0;!(ue=w.next()).done;)ue=ue.value,ye=se+Pe(ue,de++),we+=_e(ue,z,ae,ye,pe);else if(ue==="object")throw z=String(w),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return we}function lt(w,z,ae){if(w==null)return w;var se=[],pe=0;return _e(w,se,"","",function(ue){return z.call(ae,ue,pe++)}),se}function Qe(w){if(w._status===-1){var z=w._result;z=z(),z.then(function(ae){(w._status===0||w._status===-1)&&(w._status=1,w._result=ae)},function(ae){(w._status===0||w._status===-1)&&(w._status=2,w._result=ae)}),w._status===-1&&(w._status=0,w._result=z)}if(w._status===1)return w._result.default;throw w._result}var Ce={current:null},M={transition:null},q={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:M,ReactCurrentOwner:re};function W(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:lt,forEach:function(w,z,ae){lt(w,function(){z.apply(this,arguments)},ae)},count:function(w){var z=0;return lt(w,function(){z++}),z},toArray:function(w){return lt(w,function(z){return z})||[]},only:function(w){if(!ve(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ge.Component=D,ge.Fragment=a,ge.Profiler=f,ge.PureComponent=U,ge.StrictMode=c,ge.Suspense=x,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ge.act=W,ge.cloneElement=function(w,z,ae){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var se=B({},w.props),pe=w.key,ue=w.ref,we=w._owner;if(z!=null){if(z.ref!==void 0&&(ue=z.ref,we=re.current),z.key!==void 0&&(pe=""+z.key),w.type&&w.type.defaultProps)var de=w.type.defaultProps;for(ye in z)oe.call(z,ye)&&!Z.hasOwnProperty(ye)&&(se[ye]=z[ye]===void 0&&de!==void 0?de[ye]:z[ye])}var ye=arguments.length-2;if(ye===1)se.children=ae;else if(1<ye){de=Array(ye);for(var Be=0;Be<ye;Be++)de[Be]=arguments[Be+2];se.children=de}return{$$typeof:r,type:w.type,key:pe,ref:ue,props:se,_owner:we}},ge.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:h,_context:w},w.Consumer=w},ge.createElement=Y,ge.createFactory=function(w){var z=Y.bind(null,w);return z.type=w,z},ge.createRef=function(){return{current:null}},ge.forwardRef=function(w){return{$$typeof:y,render:w}},ge.isValidElement=ve,ge.lazy=function(w){return{$$typeof:T,_payload:{_status:-1,_result:w},_init:Qe}},ge.memo=function(w,z){return{$$typeof:_,type:w,compare:z===void 0?null:z}},ge.startTransition=function(w){var z=M.transition;M.transition={};try{w()}finally{M.transition=z}},ge.unstable_act=W,ge.useCallback=function(w,z){return Ce.current.useCallback(w,z)},ge.useContext=function(w){return Ce.current.useContext(w)},ge.useDebugValue=function(){},ge.useDeferredValue=function(w){return Ce.current.useDeferredValue(w)},ge.useEffect=function(w,z){return Ce.current.useEffect(w,z)},ge.useId=function(){return Ce.current.useId()},ge.useImperativeHandle=function(w,z,ae){return Ce.current.useImperativeHandle(w,z,ae)},ge.useInsertionEffect=function(w,z){return Ce.current.useInsertionEffect(w,z)},ge.useLayoutEffect=function(w,z){return Ce.current.useLayoutEffect(w,z)},ge.useMemo=function(w,z){return Ce.current.useMemo(w,z)},ge.useReducer=function(w,z,ae){return Ce.current.useReducer(w,z,ae)},ge.useRef=function(w){return Ce.current.useRef(w)},ge.useState=function(w){return Ce.current.useState(w)},ge.useSyncExternalStore=function(w,z,ae){return Ce.current.useSyncExternalStore(w,z,ae)},ge.useTransition=function(){return Ce.current.useTransition()},ge.version="18.3.1",ge}var Vd;function qa(){return Vd||(Vd=1,Ca.exports=Nm()),Ca.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function bm(){if(Qd)return Io;Qd=1;var r=qa(),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(y,x,_){var T,P={},N=null,L=null;_!==void 0&&(N=""+_),x.key!==void 0&&(N=""+x.key),x.ref!==void 0&&(L=x.ref);for(T in x)c.call(x,T)&&!h.hasOwnProperty(T)&&(P[T]=x[T]);if(y&&y.defaultProps)for(T in x=y.defaultProps,x)P[T]===void 0&&(P[T]=x[T]);return{$$typeof:l,type:y,key:N,ref:L,props:P,_owner:f.current}}return Io.Fragment=a,Io.jsx=m,Io.jsxs=m,Io}var Yd;function Rm(){return Yd||(Yd=1,ja.exports=bm()),ja.exports}var u=Rm(),E=qa();const gt=Qf(E),Im=zm({__proto__:null,default:gt},[E]);var al={},Ea={exports:{}},ht={},Pa={exports:{}},_a={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function Lm(){return Kd||(Kd=1,function(r){function l(M,q){var W=M.length;M.push(q);e:for(;0<W;){var w=W-1>>>1,z=M[w];if(0<f(z,q))M[w]=q,M[W]=z,W=w;else break e}}function a(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var q=M[0],W=M.pop();if(W!==q){M[0]=W;e:for(var w=0,z=M.length,ae=z>>>1;w<ae;){var se=2*(w+1)-1,pe=M[se],ue=se+1,we=M[ue];if(0>f(pe,W))ue<z&&0>f(we,pe)?(M[w]=we,M[ue]=W,w=ue):(M[w]=pe,M[se]=W,w=se);else if(ue<z&&0>f(we,W))M[w]=we,M[ue]=W,w=ue;else break e}}return q}function f(M,q){var W=M.sortIndex-q.sortIndex;return W!==0?W:M.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var m=Date,y=m.now();r.unstable_now=function(){return m.now()-y}}var x=[],_=[],T=1,P=null,N=3,L=!1,B=!1,b=!1,D=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(M){for(var q=a(_);q!==null;){if(q.callback===null)c(_);else if(q.startTime<=M)c(_),q.sortIndex=q.expirationTime,l(x,q);else break;q=a(_)}}function H(M){if(b=!1,F(M),!B)if(a(x)!==null)B=!0,Qe(oe);else{var q=a(_);q!==null&&Ce(H,q.startTime-M)}}function oe(M,q){B=!1,b&&(b=!1,V(Y),Y=-1),L=!0;var W=N;try{for(F(q),P=a(x);P!==null&&(!(P.expirationTime>q)||M&&!me());){var w=P.callback;if(typeof w=="function"){P.callback=null,N=P.priorityLevel;var z=w(P.expirationTime<=q);q=r.unstable_now(),typeof z=="function"?P.callback=z:P===a(x)&&c(x),F(q)}else c(x);P=a(x)}if(P!==null)var ae=!0;else{var se=a(_);se!==null&&Ce(H,se.startTime-q),ae=!1}return ae}finally{P=null,N=W,L=!1}}var re=!1,Z=null,Y=-1,ee=5,ve=-1;function me(){return!(r.unstable_now()-ve<ee)}function fe(){if(Z!==null){var M=r.unstable_now();ve=M;var q=!0;try{q=Z(!0,M)}finally{q?Pe():(re=!1,Z=null)}}else re=!1}var Pe;if(typeof U=="function")Pe=function(){U(fe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,lt=_e.port2;_e.port1.onmessage=fe,Pe=function(){lt.postMessage(null)}}else Pe=function(){D(fe,0)};function Qe(M){Z=M,re||(re=!0,Pe())}function Ce(M,q){Y=D(function(){M(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_continueExecution=function(){B||L||(B=!0,Qe(oe))},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_getFirstCallbackNode=function(){return a(x)},r.unstable_next=function(M){switch(N){case 1:case 2:case 3:var q=3;break;default:q=N}var W=N;N=q;try{return M()}finally{N=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=N;N=M;try{return q()}finally{N=W}},r.unstable_scheduleCallback=function(M,q,W){var w=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?w+W:w):W=w,M){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=W+z,M={id:T++,callback:q,priorityLevel:M,startTime:W,expirationTime:z,sortIndex:-1},W>w?(M.sortIndex=W,l(_,M),a(x)===null&&M===a(_)&&(b?(V(Y),Y=-1):b=!0,Ce(H,W-w))):(M.sortIndex=z,l(x,M),B||L||(B=!0,Qe(oe))),M},r.unstable_shouldYield=me,r.unstable_wrapCallback=function(M){var q=N;return function(){var W=N;N=q;try{return M.apply(this,arguments)}finally{N=W}}}}(_a)),_a}var Gd;function Dm(){return Gd||(Gd=1,Pa.exports=Lm()),Pa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Om(){if(qd)return ht;qd=1;var r=qa(),l=Dm();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},P={};function N(e){return x.call(P,e)?!0:x.call(T,e)?!1:_.test(e)?P[e]=!0:(T[e]=!0,!1)}function L(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,n,o){if(t===null||typeof t>"u"||L(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,n,o,i,s,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=d}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(V,U);D[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(V,U);D[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(V,U);D[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function F(e,t,n,o){var i=D.hasOwnProperty(t)?D[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,n,i,o)&&(n=null),o||i===null?N(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var H=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),re=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),me=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Ce=Symbol.for("react.offscreen"),M=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,w;function z(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var ae=!1;function se(e,t){if(!e||ae)return"";ae=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var o=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){o=C}e.call(t.prototype)}else{try{throw Error()}catch(C){o=C}e()}}catch(C){if(C&&o&&typeof C.stack=="string"){for(var i=C.stack.split(`
`),s=o.stack.split(`
`),d=i.length-1,p=s.length-1;1<=d&&0<=p&&i[d]!==s[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==s[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==s[p]){var g=`
`+i[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=p);break}}}finally{ae=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function pe(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case re:return"Portal";case ee:return"Profiler";case Y:return"StrictMode";case Pe:return"Suspense";case _e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case me:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lt:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function we(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Be(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){o=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tt(e){e._valueTracker||(e._valueTracker=Be(e))}function vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=ye(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fr(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qo(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=de(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jo(e,t){t=t.checked,t!=null&&F(e,"checked",t,!1)}function Yr(e,t){Jo(e,t);var n=de(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kr(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kr(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kr(e,t,n){(t!=="number"||gn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $t=Array.isArray;function vn(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+de(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if($t(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:de(n)}}function ei(e,t){var n=de(t.value),o=de(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function A(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ce(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ce(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ze,Ne=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ze=ze||document.createElement("div"),ze.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ze.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function De(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var At={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Un=["Webkit","ms","Moz","O"];Object.keys(At).forEach(function(e){Un.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),At[t]=At[e]})});function iu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||At.hasOwnProperty(e)&&At[e]?(""+t).trim():t+"px"}function lu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=iu(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Lp=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(Lp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Ol(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,pr=null,hr=null;function su(e){if(e=yo(e)){if(typeof Fl!="function")throw Error(a(280));var t=e.stateNode;t&&(t=ji(t),Fl(e.stateNode,e.type,t))}}function au(e){pr?hr?hr.push(e):hr=[e]:pr=e}function uu(){if(pr){var e=pr,t=hr;if(hr=pr=null,su(e),t)for(e=0;e<t.length;e++)su(t[e])}}function cu(e,t){return e(t)}function du(){}var Ml=!1;function fu(e,t,n){if(Ml)return e(t,n);Ml=!0;try{return cu(e,t,n)}finally{Ml=!1,(pr!==null||hr!==null)&&(du(),uu())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var o=ji(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Ul=!1;if(y)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Ul=!1}function Dp(e,t,n,o,i,s,d,p,g){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(I){this.onError(I)}}var Xr=!1,ti=null,ni=!1,Bl=null,Op={onError:function(e){Xr=!0,ti=e}};function $p(e,t,n,o,i,s,d,p,g){Xr=!1,ti=null,Dp.apply(Op,arguments)}function Ap(e,t,n,o,i,s,d,p,g){if($p.apply(this,arguments),Xr){if(Xr){var C=ti;Xr=!1,ti=null}else throw Error(a(198));ni||(ni=!0,Bl=C)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hu(e){if(Bn(e)!==e)throw Error(a(188))}function Fp(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hu(i),e;if(s===o)return hu(i),t;s=s.sibling}throw Error(a(188))}if(n.return!==o.return)n=i,o=s;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,o=s;break}if(p===o){d=!0,o=i,n=s;break}p=p.sibling}if(!d){for(p=s.child;p;){if(p===n){d=!0,n=s,o=i;break}if(p===o){d=!0,o=s,n=i;break}p=p.sibling}if(!d)throw Error(a(189))}}if(n.alternate!==o)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function mu(e){return e=Fp(e),e!==null?gu(e):null}function gu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gu(e);if(t!==null)return t;e=e.sibling}return null}var vu=l.unstable_scheduleCallback,yu=l.unstable_cancelCallback,Mp=l.unstable_shouldYield,Up=l.unstable_requestPaint,Me=l.unstable_now,Bp=l.unstable_getCurrentPriorityLevel,Hl=l.unstable_ImmediatePriority,xu=l.unstable_UserBlockingPriority,ri=l.unstable_NormalPriority,Hp=l.unstable_LowPriority,wu=l.unstable_IdlePriority,oi=null,Kt=null;function Wp(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(oi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Yp,Vp=Math.log,Qp=Math.LN2;function Yp(e){return e>>>=0,e===0?32:31-(Vp(e)/Qp|0)|0}var ii=64,li=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~i;p!==0?o=Zr(p):(s&=d,s!==0&&(o=Zr(s)))}else d=n&~i,d!==0?o=Zr(d):s!==0&&(o=Zr(s));if(o===0)return 0;if(t!==0&&t!==o&&(t&i)===0&&(i=o&-o,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Ft(t),i=1<<n,o|=e[n],t&=~i;return o}function Kp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-Ft(s),p=1<<d,g=i[d];g===-1?((p&n)===0||(p&o)!==0)&&(i[d]=Kp(p,t)):g<=t&&(e.expiredLanes|=p),s&=~p}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Su(){var e=ii;return ii<<=1,(ii&4194240)===0&&(ii=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function qp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function Ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Ft(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var Ee=0;function ku(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ju,Yl,Cu,Eu,Pu,Kl=!1,ai=[],yn=null,xn=null,wn=null,to=new Map,no=new Map,Sn=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _u(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function ro(e,t,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},t!==null&&(t=yo(t),t!==null&&Yl(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xp(e,t,n,o,i){switch(t){case"focusin":return yn=ro(yn,e,t,n,o,i),!0;case"dragenter":return xn=ro(xn,e,t,n,o,i),!0;case"mouseover":return wn=ro(wn,e,t,n,o,i),!0;case"pointerover":var s=i.pointerId;return to.set(s,ro(to.get(s)||null,e,t,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,no.set(s,ro(no.get(s)||null,e,t,n,o,i)),!0}return!1}function Tu(e){var t=Hn(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=pu(n),t!==null){e.blockedOn=t,Pu(e.priority,function(){Cu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);$l=o,n.target.dispatchEvent(o),$l=null}else return t=yo(n),t!==null&&Yl(t),e.blockedOn=n,!1;t.shift()}return!0}function zu(e,t,n){ui(e)&&n.delete(t)}function Zp(){Kl=!1,yn!==null&&ui(yn)&&(yn=null),xn!==null&&ui(xn)&&(xn=null),wn!==null&&ui(wn)&&(wn=null),to.forEach(zu),no.forEach(zu)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,Kl||(Kl=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Zp)))}function io(e){function t(i){return oo(i,e)}if(0<ai.length){oo(ai[0],e);for(var n=1;n<ai.length;n++){var o=ai[n];o.blockedOn===e&&(o.blockedOn=null)}}for(yn!==null&&oo(yn,e),xn!==null&&oo(xn,e),wn!==null&&oo(wn,e),to.forEach(t),no.forEach(t),n=0;n<Sn.length;n++)o=Sn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)Tu(n),n.blockedOn===null&&Sn.shift()}var mr=H.ReactCurrentBatchConfig,ci=!0;function eh(e,t,n,o){var i=Ee,s=mr.transition;mr.transition=null;try{Ee=1,Gl(e,t,n,o)}finally{Ee=i,mr.transition=s}}function th(e,t,n,o){var i=Ee,s=mr.transition;mr.transition=null;try{Ee=4,Gl(e,t,n,o)}finally{Ee=i,mr.transition=s}}function Gl(e,t,n,o){if(ci){var i=ql(e,t,n,o);if(i===null)ps(e,t,o,di,n),_u(e,o);else if(Xp(i,e,t,n,o))o.stopPropagation();else if(_u(e,o),t&4&&-1<Jp.indexOf(e)){for(;i!==null;){var s=yo(i);if(s!==null&&ju(s),s=ql(e,t,n,o),s===null&&ps(e,t,o,di,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else ps(e,t,o,null,n)}}var di=null;function ql(e,t,n,o){if(di=null,e=Al(o),e=Hn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return di=e,null}function Nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bp()){case Hl:return 1;case xu:return 4;case ri:case Hp:return 16;case wu:return 536870912;default:return 16}default:return 16}}var kn=null,Jl=null,fi=null;function bu(){if(fi)return fi;var e,t=Jl,n=t.length,o,i="value"in kn?kn.value:kn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===i[s-o];o++);return fi=i.slice(e,1<o?1-o:void 0)}function pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function Ru(){return!1}function yt(e){function t(n,o,i,s,d){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hi:Ru,this.isPropagationStopped=Ru,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=yt(gr),lo=W({},gr,{view:0,detail:0}),nh=yt(lo),Zl,es,so,mi=W({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Zl=e.screenX-so.screenX,es=e.screenY-so.screenY):es=Zl=0,so=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:es}}),Iu=yt(mi),rh=W({},mi,{dataTransfer:0}),oh=yt(rh),ih=W({},lo,{relatedTarget:0}),ts=yt(ih),lh=W({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),sh=yt(lh),ah=W({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=yt(ah),ch=W({},gr,{data:0}),Lu=yt(ch),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ph[e])?!!t[e]:!1}function ns(){return hh}var mh=W({},lo,{key:function(e){if(e.key){var t=dh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gh=yt(mh),vh=W({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=yt(vh),yh=W({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),xh=yt(yh),wh=W({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=yt(wh),kh=W({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jh=yt(kh),Ch=[9,13,27,32],rs=y&&"CompositionEvent"in window,ao=null;y&&"documentMode"in document&&(ao=document.documentMode);var Eh=y&&"TextEvent"in window&&!ao,Ou=y&&(!rs||ao&&8<ao&&11>=ao),$u=" ",Au=!1;function Fu(e,t){switch(e){case"keyup":return Ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function Ph(e,t){switch(e){case"compositionend":return Mu(t);case"keypress":return t.which!==32?null:(Au=!0,$u);case"textInput":return e=t.data,e===$u&&Au?null:e;default:return null}}function _h(e,t){if(vr)return e==="compositionend"||!rs&&Fu(e,t)?(e=bu(),fi=Jl=kn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ou&&t.locale!=="ko"?null:t.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Th[e.type]:t==="textarea"}function Bu(e,t,n,o){au(o),t=wi(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var uo=null,co=null;function zh(e){lc(e,0)}function gi(e){var t=kr(e);if(vt(t))return e}function Nh(e,t){if(e==="change")return t}var Hu=!1;if(y){var os;if(y){var is="oninput"in document;if(!is){var Wu=document.createElement("div");Wu.setAttribute("oninput","return;"),is=typeof Wu.oninput=="function"}os=is}else os=!1;Hu=os&&(!document.documentMode||9<document.documentMode)}function Vu(){uo&&(uo.detachEvent("onpropertychange",Qu),co=uo=null)}function Qu(e){if(e.propertyName==="value"&&gi(co)){var t=[];Bu(t,co,e,Al(e)),fu(zh,t)}}function bh(e,t,n){e==="focusin"?(Vu(),uo=t,co=n,uo.attachEvent("onpropertychange",Qu)):e==="focusout"&&Vu()}function Rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(co)}function Ih(e,t){if(e==="click")return gi(t)}function Lh(e,t){if(e==="input"||e==="change")return gi(t)}function Dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Dh;function fo(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!x.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function Yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ku(e,t){var n=Yu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yu(n)}}function Gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qu(){for(var e=window,t=gn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gn(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Oh(e){var t=qu(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gu(n.ownerDocument.documentElement,n)){if(o!==null&&ls(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=Ku(n,s);var d=Ku(n,o);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $h=y&&"documentMode"in document&&11>=document.documentMode,yr=null,ss=null,po=null,as=!1;function Ju(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;as||yr==null||yr!==gn(o)||(o=yr,"selectionStart"in o&&ls(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&fo(po,o)||(po=o,o=wi(ss,"onSelect"),0<o.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=yr)))}function vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},us={},Xu={};y&&(Xu=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function yi(e){if(us[e])return us[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xu)return us[e]=t[n];return e}var Zu=yi("animationend"),ec=yi("animationiteration"),tc=yi("animationstart"),nc=yi("transitionend"),rc=new Map,oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){rc.set(e,t),h(t,[e])}for(var cs=0;cs<oc.length;cs++){var ds=oc[cs],Ah=ds.toLowerCase(),Fh=ds[0].toUpperCase()+ds.slice(1);jn(Ah,"on"+Fh)}jn(Zu,"onAnimationEnd"),jn(ec,"onAnimationIteration"),jn(tc,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(nc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function ic(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Ap(o,t,void 0,e),e.currentTarget=null}function lc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var d=o.length-1;0<=d;d--){var p=o[d],g=p.instance,C=p.currentTarget;if(p=p.listener,g!==s&&i.isPropagationStopped())break e;ic(i,p,C),s=g}else for(d=0;d<o.length;d++){if(p=o[d],g=p.instance,C=p.currentTarget,p=p.listener,g!==s&&i.isPropagationStopped())break e;ic(i,p,C),s=g}}}if(ni)throw e=Bl,ni=!1,Bl=null,e}function be(e,t){var n=t[xs];n===void 0&&(n=t[xs]=new Set);var o=e+"__bubble";n.has(o)||(sc(t,e,2,!1),n.add(o))}function fs(e,t,n){var o=0;t&&(o|=4),sc(n,e,o,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[xi]){e[xi]=!0,c.forEach(function(n){n!=="selectionchange"&&(Mh.has(n)||fs(n,!1,e),fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,fs("selectionchange",!1,t))}}function sc(e,t,n,o){switch(Nu(t)){case 1:var i=eh;break;case 4:i=th;break;default:i=Gl}n=i.bind(null,t,n,e),i=void 0,!Ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ps(e,t,n,o,i){var s=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=o.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===i||g.nodeType===8&&g.parentNode===i))return;d=d.return}for(;p!==null;){if(d=Hn(p),d===null)return;if(g=d.tag,g===5||g===6){o=s=d;continue e}p=p.parentNode}}o=o.return}fu(function(){var C=s,I=Al(n),O=[];e:{var R=rc.get(e);if(R!==void 0){var Q=Xl,G=e;switch(e){case"keypress":if(pi(n)===0)break e;case"keydown":case"keyup":Q=gh;break;case"focusin":G="focus",Q=ts;break;case"focusout":G="blur",Q=ts;break;case"beforeblur":case"afterblur":Q=ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=xh;break;case Zu:case ec:case tc:Q=sh;break;case nc:Q=Sh;break;case"scroll":Q=nh;break;case"wheel":Q=jh;break;case"copy":case"cut":case"paste":Q=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Du}var J=(t&4)!==0,Ue=!J&&e==="scroll",k=J?R!==null?R+"Capture":null:R;J=[];for(var v=C,j;v!==null;){j=v;var $=j.stateNode;if(j.tag===5&&$!==null&&(j=$,k!==null&&($=qr(v,k),$!=null&&J.push(go(v,$,j)))),Ue)break;v=v.return}0<J.length&&(R=new Q(R,G,null,n,I),O.push({event:R,listeners:J}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",R&&n!==$l&&(G=n.relatedTarget||n.fromElement)&&(Hn(G)||G[ln]))break e;if((Q||R)&&(R=I.window===I?I:(R=I.ownerDocument)?R.defaultView||R.parentWindow:window,Q?(G=n.relatedTarget||n.toElement,Q=C,G=G?Hn(G):null,G!==null&&(Ue=Bn(G),G!==Ue||G.tag!==5&&G.tag!==6)&&(G=null)):(Q=null,G=C),Q!==G)){if(J=Iu,$="onMouseLeave",k="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(J=Du,$="onPointerLeave",k="onPointerEnter",v="pointer"),Ue=Q==null?R:kr(Q),j=G==null?R:kr(G),R=new J($,v+"leave",Q,n,I),R.target=Ue,R.relatedTarget=j,$=null,Hn(I)===C&&(J=new J(k,v+"enter",G,n,I),J.target=j,J.relatedTarget=Ue,$=J),Ue=$,Q&&G)t:{for(J=Q,k=G,v=0,j=J;j;j=wr(j))v++;for(j=0,$=k;$;$=wr($))j++;for(;0<v-j;)J=wr(J),v--;for(;0<j-v;)k=wr(k),j--;for(;v--;){if(J===k||k!==null&&J===k.alternate)break t;J=wr(J),k=wr(k)}J=null}else J=null;Q!==null&&ac(O,R,Q,J,!1),G!==null&&Ue!==null&&ac(O,Ue,G,J,!0)}}e:{if(R=C?kr(C):window,Q=R.nodeName&&R.nodeName.toLowerCase(),Q==="select"||Q==="input"&&R.type==="file")var X=Nh;else if(Uu(R))if(Hu)X=Lh;else{X=Rh;var te=bh}else(Q=R.nodeName)&&Q.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(X=Ih);if(X&&(X=X(e,C))){Bu(O,X,n,I);break e}te&&te(e,R,C),e==="focusout"&&(te=R._wrapperState)&&te.controlled&&R.type==="number"&&Kr(R,"number",R.value)}switch(te=C?kr(C):window,e){case"focusin":(Uu(te)||te.contentEditable==="true")&&(yr=te,ss=C,po=null);break;case"focusout":po=ss=yr=null;break;case"mousedown":as=!0;break;case"contextmenu":case"mouseup":case"dragend":as=!1,Ju(O,n,I);break;case"selectionchange":if($h)break;case"keydown":case"keyup":Ju(O,n,I)}var ne;if(rs)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else vr?Fu(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(Ou&&n.locale!=="ko"&&(vr||le!=="onCompositionStart"?le==="onCompositionEnd"&&vr&&(ne=bu()):(kn=I,Jl="value"in kn?kn.value:kn.textContent,vr=!0)),te=wi(C,le),0<te.length&&(le=new Lu(le,e,null,n,I),O.push({event:le,listeners:te}),ne?le.data=ne:(ne=Mu(n),ne!==null&&(le.data=ne)))),(ne=Eh?Ph(e,n):_h(e,n))&&(C=wi(C,"onBeforeInput"),0<C.length&&(I=new Lu("onBeforeInput","beforeinput",null,n,I),O.push({event:I,listeners:C}),I.data=ne))}lc(O,t)})}function go(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wi(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qr(e,n),s!=null&&o.unshift(go(e,s,i)),s=qr(e,t),s!=null&&o.push(go(e,s,i))),e=e.return}return o}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ac(e,t,n,o,i){for(var s=t._reactName,d=[];n!==null&&n!==o;){var p=n,g=p.alternate,C=p.stateNode;if(g!==null&&g===o)break;p.tag===5&&C!==null&&(p=C,i?(g=qr(n,s),g!=null&&d.unshift(go(n,g,p))):i||(g=qr(n,s),g!=null&&d.push(go(n,g,p)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Uh=/\r\n?/g,Bh=/\u0000|\uFFFD/g;function uc(e){return(typeof e=="string"?e:""+e).replace(Uh,`
`).replace(Bh,"")}function Si(e,t,n){if(t=uc(t),uc(e)!==t&&n)throw Error(a(425))}function ki(){}var hs=null,ms=null;function gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vs=typeof setTimeout=="function"?setTimeout:void 0,Hh=typeof clearTimeout=="function"?clearTimeout:void 0,cc=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof cc<"u"?function(e){return cc.resolve(null).then(e).catch(Vh)}:vs;function Vh(e){setTimeout(function(){throw e})}function ys(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),io(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);io(t)}function Cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Sr,vo="__reactProps$"+Sr,ln="__reactContainer$"+Sr,xs="__reactEvents$"+Sr,Qh="__reactListeners$"+Sr,Yh="__reactHandles$"+Sr;function Hn(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dc(e);e!==null;){if(n=e[Gt])return n;e=dc(e)}return t}e=n,n=e.parentNode}return null}function yo(e){return e=e[Gt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function ji(e){return e[vo]||null}var ws=[],jr=-1;function En(e){return{current:e}}function Re(e){0>jr||(e.current=ws[jr],ws[jr]=null,jr--)}function Te(e,t){jr++,ws[jr]=e.current,e.current=t}var Pn={},nt=En(Pn),ut=En(!1),Wn=Pn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function Ci(){Re(ut),Re(nt)}function fc(e,t,n){if(nt.current!==Pn)throw Error(a(168));Te(nt,t),Te(ut,n)}function pc(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(a(108,we(e)||"Unknown",i));return W({},n,o)}function Ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Wn=nt.current,Te(nt,e),Te(ut,ut.current),!0}function hc(e,t,n){var o=e.stateNode;if(!o)throw Error(a(169));n?(e=pc(e,t,Wn),o.__reactInternalMemoizedMergedChildContext=e,Re(ut),Re(nt),Te(nt,e)):Re(ut),Te(ut,n)}var sn=null,Pi=!1,Ss=!1;function mc(e){sn===null?sn=[e]:sn.push(e)}function Kh(e){Pi=!0,mc(e)}function _n(){if(!Ss&&sn!==null){Ss=!0;var e=0,t=Ee;try{var n=sn;for(Ee=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}sn=null,Pi=!1}catch(i){throw sn!==null&&(sn=sn.slice(e+1)),vu(Hl,_n),i}finally{Ee=t,Ss=!1}}return null}var Er=[],Pr=0,_i=null,Ti=0,jt=[],Ct=0,Vn=null,an=1,un="";function Qn(e,t){Er[Pr++]=Ti,Er[Pr++]=_i,_i=e,Ti=t}function gc(e,t,n){jt[Ct++]=an,jt[Ct++]=un,jt[Ct++]=Vn,Vn=e;var o=an;e=un;var i=32-Ft(o)-1;o&=~(1<<i),n+=1;var s=32-Ft(t)+i;if(30<s){var d=i-i%5;s=(o&(1<<d)-1).toString(32),o>>=d,i-=d,an=1<<32-Ft(t)+i|n<<i|o,un=s+e}else an=1<<s|n<<i|o,un=e}function ks(e){e.return!==null&&(Qn(e,1),gc(e,1,0))}function js(e){for(;e===_i;)_i=Er[--Pr],Er[Pr]=null,Ti=Er[--Pr],Er[Pr]=null;for(;e===Vn;)Vn=jt[--Ct],jt[Ct]=null,un=jt[--Ct],jt[Ct]=null,an=jt[--Ct],jt[Ct]=null}var xt=null,wt=null,Le=!1,Ut=null;function vc(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,wt=Cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:an,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,wt=null,!0):!1;default:return!1}}function Cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Es(e){if(Le){var t=wt;if(t){var n=t;if(!yc(e,t)){if(Cs(e))throw Error(a(418));t=Cn(n.nextSibling);var o=xt;t&&yc(e,t)?vc(o,n):(e.flags=e.flags&-4097|2,Le=!1,xt=e)}}else{if(Cs(e))throw Error(a(418));e.flags=e.flags&-4097|2,Le=!1,xt=e}}}function xc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function zi(e){if(e!==xt)return!1;if(!Le)return xc(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gs(e.type,e.memoizedProps)),t&&(t=wt)){if(Cs(e))throw wc(),Error(a(418));for(;t;)vc(e,t),t=Cn(t.nextSibling)}if(xc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=Cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=xt?Cn(e.stateNode.nextSibling):null;return!0}function wc(){for(var e=wt;e;)e=Cn(e.nextSibling)}function _r(){wt=xt=null,Le=!1}function Ps(e){Ut===null?Ut=[e]:Ut.push(e)}var Gh=H.ReactCurrentBatchConfig;function xo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var o=n.stateNode}if(!o)throw Error(a(147,e));var i=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(d){var p=i.refs;d===null?delete p[s]:p[s]=d},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sc(e){var t=e._init;return t(e._payload)}function kc(e){function t(k,v){if(e){var j=k.deletions;j===null?(k.deletions=[v],k.flags|=16):j.push(v)}}function n(k,v){if(!e)return null;for(;v!==null;)t(k,v),v=v.sibling;return null}function o(k,v){for(k=new Map;v!==null;)v.key!==null?k.set(v.key,v):k.set(v.index,v),v=v.sibling;return k}function i(k,v){return k=Dn(k,v),k.index=0,k.sibling=null,k}function s(k,v,j){return k.index=j,e?(j=k.alternate,j!==null?(j=j.index,j<v?(k.flags|=2,v):j):(k.flags|=2,v)):(k.flags|=1048576,v)}function d(k){return e&&k.alternate===null&&(k.flags|=2),k}function p(k,v,j,$){return v===null||v.tag!==6?(v=va(j,k.mode,$),v.return=k,v):(v=i(v,j),v.return=k,v)}function g(k,v,j,$){var X=j.type;return X===Z?I(k,v,j.props.children,$,j.key):v!==null&&(v.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Qe&&Sc(X)===v.type)?($=i(v,j.props),$.ref=xo(k,v,j),$.return=k,$):($=el(j.type,j.key,j.props,null,k.mode,$),$.ref=xo(k,v,j),$.return=k,$)}function C(k,v,j,$){return v===null||v.tag!==4||v.stateNode.containerInfo!==j.containerInfo||v.stateNode.implementation!==j.implementation?(v=ya(j,k.mode,$),v.return=k,v):(v=i(v,j.children||[]),v.return=k,v)}function I(k,v,j,$,X){return v===null||v.tag!==7?(v=er(j,k.mode,$,X),v.return=k,v):(v=i(v,j),v.return=k,v)}function O(k,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return v=va(""+v,k.mode,j),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oe:return j=el(v.type,v.key,v.props,null,k.mode,j),j.ref=xo(k,null,v),j.return=k,j;case re:return v=ya(v,k.mode,j),v.return=k,v;case Qe:var $=v._init;return O(k,$(v._payload),j)}if($t(v)||q(v))return v=er(v,k.mode,j,null),v.return=k,v;Ni(k,v)}return null}function R(k,v,j,$){var X=v!==null?v.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return X!==null?null:p(k,v,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case oe:return j.key===X?g(k,v,j,$):null;case re:return j.key===X?C(k,v,j,$):null;case Qe:return X=j._init,R(k,v,X(j._payload),$)}if($t(j)||q(j))return X!==null?null:I(k,v,j,$,null);Ni(k,j)}return null}function Q(k,v,j,$,X){if(typeof $=="string"&&$!==""||typeof $=="number")return k=k.get(j)||null,p(v,k,""+$,X);if(typeof $=="object"&&$!==null){switch($.$$typeof){case oe:return k=k.get($.key===null?j:$.key)||null,g(v,k,$,X);case re:return k=k.get($.key===null?j:$.key)||null,C(v,k,$,X);case Qe:var te=$._init;return Q(k,v,j,te($._payload),X)}if($t($)||q($))return k=k.get(j)||null,I(v,k,$,X,null);Ni(v,$)}return null}function G(k,v,j,$){for(var X=null,te=null,ne=v,le=v=0,Je=null;ne!==null&&le<j.length;le++){ne.index>le?(Je=ne,ne=null):Je=ne.sibling;var ke=R(k,ne,j[le],$);if(ke===null){ne===null&&(ne=Je);break}e&&ne&&ke.alternate===null&&t(k,ne),v=s(ke,v,le),te===null?X=ke:te.sibling=ke,te=ke,ne=Je}if(le===j.length)return n(k,ne),Le&&Qn(k,le),X;if(ne===null){for(;le<j.length;le++)ne=O(k,j[le],$),ne!==null&&(v=s(ne,v,le),te===null?X=ne:te.sibling=ne,te=ne);return Le&&Qn(k,le),X}for(ne=o(k,ne);le<j.length;le++)Je=Q(ne,k,le,j[le],$),Je!==null&&(e&&Je.alternate!==null&&ne.delete(Je.key===null?le:Je.key),v=s(Je,v,le),te===null?X=Je:te.sibling=Je,te=Je);return e&&ne.forEach(function(On){return t(k,On)}),Le&&Qn(k,le),X}function J(k,v,j,$){var X=q(j);if(typeof X!="function")throw Error(a(150));if(j=X.call(j),j==null)throw Error(a(151));for(var te=X=null,ne=v,le=v=0,Je=null,ke=j.next();ne!==null&&!ke.done;le++,ke=j.next()){ne.index>le?(Je=ne,ne=null):Je=ne.sibling;var On=R(k,ne,ke.value,$);if(On===null){ne===null&&(ne=Je);break}e&&ne&&On.alternate===null&&t(k,ne),v=s(On,v,le),te===null?X=On:te.sibling=On,te=On,ne=Je}if(ke.done)return n(k,ne),Le&&Qn(k,le),X;if(ne===null){for(;!ke.done;le++,ke=j.next())ke=O(k,ke.value,$),ke!==null&&(v=s(ke,v,le),te===null?X=ke:te.sibling=ke,te=ke);return Le&&Qn(k,le),X}for(ne=o(k,ne);!ke.done;le++,ke=j.next())ke=Q(ne,k,le,ke.value,$),ke!==null&&(e&&ke.alternate!==null&&ne.delete(ke.key===null?le:ke.key),v=s(ke,v,le),te===null?X=ke:te.sibling=ke,te=ke);return e&&ne.forEach(function(Tm){return t(k,Tm)}),Le&&Qn(k,le),X}function Ue(k,v,j,$){if(typeof j=="object"&&j!==null&&j.type===Z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case oe:e:{for(var X=j.key,te=v;te!==null;){if(te.key===X){if(X=j.type,X===Z){if(te.tag===7){n(k,te.sibling),v=i(te,j.props.children),v.return=k,k=v;break e}}else if(te.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Qe&&Sc(X)===te.type){n(k,te.sibling),v=i(te,j.props),v.ref=xo(k,te,j),v.return=k,k=v;break e}n(k,te);break}else t(k,te);te=te.sibling}j.type===Z?(v=er(j.props.children,k.mode,$,j.key),v.return=k,k=v):($=el(j.type,j.key,j.props,null,k.mode,$),$.ref=xo(k,v,j),$.return=k,k=$)}return d(k);case re:e:{for(te=j.key;v!==null;){if(v.key===te)if(v.tag===4&&v.stateNode.containerInfo===j.containerInfo&&v.stateNode.implementation===j.implementation){n(k,v.sibling),v=i(v,j.children||[]),v.return=k,k=v;break e}else{n(k,v);break}else t(k,v);v=v.sibling}v=ya(j,k.mode,$),v.return=k,k=v}return d(k);case Qe:return te=j._init,Ue(k,v,te(j._payload),$)}if($t(j))return G(k,v,j,$);if(q(j))return J(k,v,j,$);Ni(k,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,v!==null&&v.tag===6?(n(k,v.sibling),v=i(v,j),v.return=k,k=v):(n(k,v),v=va(j,k.mode,$),v.return=k,k=v),d(k)):n(k,v)}return Ue}var Tr=kc(!0),jc=kc(!1),bi=En(null),Ri=null,zr=null,_s=null;function Ts(){_s=zr=Ri=null}function zs(e){var t=bi.current;Re(bi),e._currentValue=t}function Ns(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Nr(e,t){Ri=e,_s=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(dt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(_s!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(Ri===null)throw Error(a(308));zr=e,Ri.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var Yn=null;function bs(e){Yn===null?Yn=[e]:Yn.push(e)}function Cc(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,bs(t)):(n.next=i.next,i.next=n),t.interleaved=n,cn(e,o)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tn=!1;function Rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Se&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,cn(e,n)}return i=o.interleaved,i===null?(t.next=t,bs(o)):(t.next=i.next,i.next=t),o.interleaved=t,cn(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ql(e,n)}}function Pc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Li(e,t,n,o){var i=e.updateQueue;Tn=!1;var s=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var g=p,C=g.next;g.next=null,d===null?s=C:d.next=C,d=g;var I=e.alternate;I!==null&&(I=I.updateQueue,p=I.lastBaseUpdate,p!==d&&(p===null?I.firstBaseUpdate=C:p.next=C,I.lastBaseUpdate=g))}if(s!==null){var O=i.baseState;d=0,I=C=g=null,p=s;do{var R=p.lane,Q=p.eventTime;if((o&R)===R){I!==null&&(I=I.next={eventTime:Q,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var G=e,J=p;switch(R=t,Q=n,J.tag){case 1:if(G=J.payload,typeof G=="function"){O=G.call(Q,O,R);break e}O=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=J.payload,R=typeof G=="function"?G.call(Q,O,R):G,R==null)break e;O=W({},O,R);break e;case 2:Tn=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,R=i.effects,R===null?i.effects=[p]:R.push(p))}else Q={eventTime:Q,lane:R,tag:p.tag,payload:p.payload,callback:p.callback,next:null},I===null?(C=I=Q,g=O):I=I.next=Q,d|=R;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;R=p,p=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);if(I===null&&(g=O),i.baseState=g,i.firstBaseUpdate=C,i.lastBaseUpdate=I,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);qn|=d,e.lanes=d,e.memoizedState=O}}function _c(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(a(191,i));i.call(o)}}}var wo={},qt=En(wo),So=En(wo),ko=En(wo);function Kn(e){if(e===wo)throw Error(a(174));return e}function Is(e,t){switch(Te(ko,t),Te(So,e),Te(qt,wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xe(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xe(t,e)}Re(qt),Te(qt,t)}function br(){Re(qt),Re(So),Re(ko)}function Tc(e){Kn(ko.current);var t=Kn(qt.current),n=xe(t,e.type);t!==n&&(Te(So,e),Te(qt,n))}function Ls(e){So.current===e&&(Re(qt),Re(So))}var Oe=En(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ds=[];function Os(){for(var e=0;e<Ds.length;e++)Ds[e]._workInProgressVersionPrimary=null;Ds.length=0}var Oi=H.ReactCurrentDispatcher,$s=H.ReactCurrentBatchConfig,Gn=0,$e=null,Ye=null,Ge=null,$i=!1,jo=!1,Co=0,qh=0;function rt(){throw Error(a(321))}function As(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function Fs(e,t,n,o,i,s){if(Gn=s,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?em:tm,e=n(o,i),jo){s=0;do{if(jo=!1,Co=0,25<=s)throw Error(a(301));s+=1,Ge=Ye=null,t.updateQueue=null,Oi.current=nm,e=n(o,i)}while(jo)}if(Oi.current=Mi,t=Ye!==null&&Ye.next!==null,Gn=0,Ge=Ye=$e=null,$i=!1,t)throw Error(a(300));return e}function Ms(){var e=Co!==0;return Co=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?$e.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Pt(){if(Ye===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=Ge===null?$e.memoizedState:Ge.next;if(t!==null)Ge=t,Ye=e;else{if(e===null)throw Error(a(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Ge===null?$e.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Eo(e,t){return typeof t=="function"?t(e):t}function Us(e){var t=Pt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var o=Ye,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var d=i.next;i.next=s.next,s.next=d}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var p=d=null,g=null,C=s;do{var I=C.lane;if((Gn&I)===I)g!==null&&(g=g.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),o=C.hasEagerState?C.eagerState:e(o,C.action);else{var O={lane:I,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};g===null?(p=g=O,d=o):g=g.next=O,$e.lanes|=I,qn|=I}C=C.next}while(C!==null&&C!==s);g===null?d=o:g.next=p,Mt(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=g,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,$e.lanes|=s,qn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bs(e){var t=Pt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do s=e(s,d.action),d=d.next;while(d!==i);Mt(s,t.memoizedState)||(dt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function zc(){}function Nc(e,t){var n=$e,o=Pt(),i=t(),s=!Mt(o.memoizedState,i);if(s&&(o.memoizedState=i,dt=!0),o=o.queue,Hs(Ic.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Po(9,Rc.bind(null,n,o,i,t),void 0,null),qe===null)throw Error(a(349));(Gn&30)!==0||bc(n,t,i)}return i}function bc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rc(e,t,n,o){t.value=n,t.getSnapshot=o,Lc(t)&&Dc(e)}function Ic(e,t,n){return n(function(){Lc(t)&&Dc(e)})}function Lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function Dc(e){var t=cn(e,1);t!==null&&Vt(t,e,1,-1)}function Oc(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:e},t.queue=e,e=e.dispatch=Zh.bind(null,$e,e),[t.memoizedState,e]}function Po(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function $c(){return Pt().memoizedState}function Ai(e,t,n,o){var i=Jt();$e.flags|=e,i.memoizedState=Po(1|t,n,void 0,o===void 0?null:o)}function Fi(e,t,n,o){var i=Pt();o=o===void 0?null:o;var s=void 0;if(Ye!==null){var d=Ye.memoizedState;if(s=d.destroy,o!==null&&As(o,d.deps)){i.memoizedState=Po(t,n,s,o);return}}$e.flags|=e,i.memoizedState=Po(1|t,n,s,o)}function Ac(e,t){return Ai(8390656,8,e,t)}function Hs(e,t){return Fi(2048,8,e,t)}function Fc(e,t){return Fi(4,2,e,t)}function Mc(e,t){return Fi(4,4,e,t)}function Uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bc(e,t,n){return n=n!=null?n.concat([e]):null,Fi(4,4,Uc.bind(null,t,e),n)}function Ws(){}function Hc(e,t){var n=Pt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&As(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Wc(e,t){var n=Pt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&As(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Vc(e,t,n){return(Gn&21)===0?(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n):(Mt(n,t)||(n=Su(),$e.lanes|=n,qn|=n,e.baseState=!0),t)}function Jh(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var o=$s.transition;$s.transition={};try{e(!1),t()}finally{Ee=n,$s.transition=o}}function Qc(){return Pt().memoizedState}function Xh(e,t,n){var o=In(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Yc(e))Kc(t,n);else if(n=Cc(e,t,n,o),n!==null){var i=at();Vt(n,e,o,i),Gc(n,t,o)}}function Zh(e,t,n){var o=In(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yc(e))Kc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,p=s(d,n);if(i.hasEagerState=!0,i.eagerState=p,Mt(p,d)){var g=t.interleaved;g===null?(i.next=i,bs(t)):(i.next=g.next,g.next=i),t.interleaved=i;return}}catch{}finally{}n=Cc(e,t,i,o),n!==null&&(i=at(),Vt(n,e,o,i),Gc(n,t,o))}}function Yc(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function Kc(e,t){jo=$i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gc(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ql(e,n)}}var Mi={readContext:Et,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},em={readContext:Et,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,Uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=Jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Jt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Xh.bind(null,$e,e),[o.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:Oc,useDebugValue:Ws,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Oc(!1),t=e[0];return e=Jh.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=$e,i=Jt();if(Le){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),qe===null)throw Error(a(349));(Gn&30)!==0||bc(o,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ac(Ic.bind(null,o,s,e),[e]),o.flags|=2048,Po(9,Rc.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=Jt(),t=qe.identifierPrefix;if(Le){var n=un,o=an;n=(o&~(1<<32-Ft(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tm={readContext:Et,useCallback:Hc,useContext:Et,useEffect:Hs,useImperativeHandle:Bc,useInsertionEffect:Fc,useLayoutEffect:Mc,useMemo:Wc,useReducer:Us,useRef:$c,useState:function(){return Us(Eo)},useDebugValue:Ws,useDeferredValue:function(e){var t=Pt();return Vc(t,Ye.memoizedState,e)},useTransition:function(){var e=Us(Eo)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:zc,useSyncExternalStore:Nc,useId:Qc,unstable_isNewReconciler:!1},nm={readContext:Et,useCallback:Hc,useContext:Et,useEffect:Hs,useImperativeHandle:Bc,useInsertionEffect:Fc,useLayoutEffect:Mc,useMemo:Wc,useReducer:Bs,useRef:$c,useState:function(){return Bs(Eo)},useDebugValue:Ws,useDeferredValue:function(e){var t=Pt();return Ye===null?t.memoizedState=e:Vc(t,Ye.memoizedState,e)},useTransition:function(){var e=Bs(Eo)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:zc,useSyncExternalStore:Nc,useId:Qc,unstable_isNewReconciler:!1};function Bt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vs(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ui={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=at(),i=In(e),s=dn(o,i);s.payload=t,n!=null&&(s.callback=n),t=zn(e,s,i),t!==null&&(Vt(t,e,i,o),Ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=at(),i=In(e),s=dn(o,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=zn(e,s,i),t!==null&&(Vt(t,e,i,o),Ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),o=In(e),i=dn(n,o);i.tag=2,t!=null&&(i.callback=t),t=zn(e,i,o),t!==null&&(Vt(t,e,o,n),Ii(t,e,o))}};function qc(e,t,n,o,i,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,d):t.prototype&&t.prototype.isPureReactComponent?!fo(n,o)||!fo(i,s):!0}function Jc(e,t,n){var o=!1,i=Pn,s=t.contextType;return typeof s=="object"&&s!==null?s=Et(s):(i=ct(t)?Wn:nt.current,o=t.contextTypes,s=(o=o!=null)?Cr(e,i):Pn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ui,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Xc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Ui.enqueueReplaceState(t,t.state,null)}function Qs(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Rs(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Et(s):(s=ct(t)?Wn:nt.current,i.context=Cr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Vs(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ui.enqueueReplaceState(i,i.state,null),Li(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",o=t;do n+=pe(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ys(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ks(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rm=typeof WeakMap=="function"?WeakMap:Map;function Zc(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Ki||(Ki=!0,ua=o),Ks(e,t)},n}function ed(e,t,n){n=dn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){Ks(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ks(e,t),typeof o!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function td(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new rm;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=vm.bind(null,e,t,n),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,o,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,zn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var om=H.ReactCurrentOwner,dt=!1;function st(e,t,n,o){t.child=e===null?jc(t,null,n,o):Tr(t,e.child,n,o)}function od(e,t,n,o,i){n=n.render;var s=t.ref;return Nr(t,i),o=Fs(e,t,n,o,s,i),n=Ms(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,fn(e,t,i)):(Le&&n&&ks(t),t.flags|=1,st(e,t,o,i),t.child)}function id(e,t,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!ga(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ld(e,t,s,o,i)):(e=el(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(d,o)&&e.ref===t.ref)return fn(e,t,i)}return t.flags|=1,e=Dn(s,o),e.ref=t.ref,e.return=t,t.child=e}function ld(e,t,n,o,i){if(e!==null){var s=e.memoizedProps;if(fo(s,o)&&e.ref===t.ref)if(dt=!1,t.pendingProps=o=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,fn(e,t,i)}return Gs(e,t,n,o,i)}function sd(e,t,n){var o=t.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Lr,St),St|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(Lr,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,Te(Lr,St),St|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,Te(Lr,St),St|=o;return st(e,t,i,n),t.child}function ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,o,i){var s=ct(n)?Wn:nt.current;return s=Cr(t,s),Nr(t,i),n=Fs(e,t,n,o,s,i),o=Ms(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,fn(e,t,i)):(Le&&o&&ks(t),t.flags|=1,st(e,t,n,i),t.child)}function ud(e,t,n,o,i){if(ct(n)){var s=!0;Ei(t)}else s=!1;if(Nr(t,i),t.stateNode===null)Hi(e,t),Jc(t,n,o),Qs(t,n,o,i),o=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var g=d.context,C=n.contextType;typeof C=="object"&&C!==null?C=Et(C):(C=ct(n)?Wn:nt.current,C=Cr(t,C));var I=n.getDerivedStateFromProps,O=typeof I=="function"||typeof d.getSnapshotBeforeUpdate=="function";O||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||g!==C)&&Xc(t,d,o,C),Tn=!1;var R=t.memoizedState;d.state=R,Li(t,o,d,i),g=t.memoizedState,p!==o||R!==g||ut.current||Tn?(typeof I=="function"&&(Vs(t,n,I,o),g=t.memoizedState),(p=Tn||qc(t,n,p,o,R,g,C))?(O||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=g),d.props=o,d.state=g,d.context=C,o=p):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Ec(e,t),p=t.memoizedProps,C=t.type===t.elementType?p:Bt(t.type,p),d.props=C,O=t.pendingProps,R=d.context,g=n.contextType,typeof g=="object"&&g!==null?g=Et(g):(g=ct(n)?Wn:nt.current,g=Cr(t,g));var Q=n.getDerivedStateFromProps;(I=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==O||R!==g)&&Xc(t,d,o,g),Tn=!1,R=t.memoizedState,d.state=R,Li(t,o,d,i);var G=t.memoizedState;p!==O||R!==G||ut.current||Tn?(typeof Q=="function"&&(Vs(t,n,Q,o),G=t.memoizedState),(C=Tn||qc(t,n,C,o,R,G,g)||!1)?(I||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,G,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,G,g)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=G),d.props=o,d.state=G,d.context=g,o=C):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),o=!1)}return qs(e,t,n,o,s,i)}function qs(e,t,n,o,i,s){ad(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return i&&hc(t,n,!1),fn(e,t,s);o=t.stateNode,om.current=t;var p=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=Tr(t,e.child,null,s),t.child=Tr(t,null,p,s)):st(e,t,p,s),t.memoizedState=o.state,i&&hc(t,n,!0),t.child}function cd(e){var t=e.stateNode;t.pendingContext?fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fc(e,t.context,!1),Is(e,t.containerInfo)}function dd(e,t,n,o,i){return _r(),Ps(i),t.flags|=256,st(e,t,n,o),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function fd(e,t,n){var o=t.pendingProps,i=Oe.current,s=!1,d=(t.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Te(Oe,i&1),e===null)return Es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,e=o.fallback,s?(o=t.mode,s=t.child,d={mode:"hidden",children:d},(o&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=tl(d,o,0,null),e=er(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Xs(n),t.memoizedState=Js,e):Zs(t,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return im(e,t,d,o,p,i,n);if(s){s=o.fallback,d=t.mode,i=e.child,p=i.sibling;var g={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=g,t.deletions=null):(o=Dn(i,g),o.subtreeFlags=i.subtreeFlags&14680064),p!==null?s=Dn(p,s):(s=er(s,d,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,d=e.child.memoizedState,d=d===null?Xs(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~n,t.memoizedState=Js,o}return s=e.child,e=s.sibling,o=Dn(s,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Zs(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bi(e,t,n,o){return o!==null&&Ps(o),Tr(t,e.child,null,n),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,n,o,i,s,d){if(n)return t.flags&256?(t.flags&=-257,o=Ys(Error(a(422))),Bi(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,i=t.mode,o=tl({mode:"visible",children:o.children},i,0,null),s=er(s,i,d,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,(t.mode&1)!==0&&Tr(t,e.child,null,d),t.child.memoizedState=Xs(d),t.memoizedState=Js,s);if((t.mode&1)===0)return Bi(e,t,d,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var p=o.dgst;return o=p,s=Error(a(419)),o=Ys(s,o,void 0),Bi(e,t,d,o)}if(p=(d&e.childLanes)!==0,dt||p){if(o=qe,o!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|d))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cn(e,i),Vt(o,e,i,-1))}return ma(),o=Ys(Error(a(421))),Bi(e,t,d,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ym.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,wt=Cn(i.nextSibling),xt=t,Le=!0,Ut=null,e!==null&&(jt[Ct++]=an,jt[Ct++]=un,jt[Ct++]=Vn,an=e.id,un=e.overflow,Vn=t),t=Zs(t,o.children),t.flags|=4096,t)}function pd(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ns(e.return,t,n)}function ea(e,t,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function hd(e,t,n){var o=t.pendingProps,i=o.revealOrder,s=o.tail;if(st(e,t,o.children,n),o=Oe.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pd(e,n,t);else if(e.tag===19)pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Te(Oe,o),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Di(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ea(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Di(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ea(t,!0,n,null,s);break;case"together":ea(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lm(e,t,n){switch(t.tag){case 3:cd(t),_r();break;case 5:Tc(t);break;case 1:ct(t.type)&&Ei(t);break;case 4:Is(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;Te(bi,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Te(Oe,Oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?fd(e,t,n):(Te(Oe,Oe.current&1),e=fn(e,t,n),e!==null?e.sibling:null);Te(Oe,Oe.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return hd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Oe,Oe.current),o)break;return null;case 22:case 23:return t.lanes=0,sd(e,t,n)}return fn(e,t,n)}var md,ta,gd,vd;md=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ta=function(){},gd=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Kn(qt.current);var s=null;switch(n){case"input":i=fr(e,i),o=fr(e,o),s=[];break;case"select":i=W({},i,{value:void 0}),o=W({},o,{value:void 0}),s=[];break;case"textarea":i=Gr(e,i),o=Gr(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ki)}Dl(n,o);var d;n=null;for(C in i)if(!o.hasOwnProperty(C)&&i.hasOwnProperty(C)&&i[C]!=null)if(C==="style"){var p=i[C];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(f.hasOwnProperty(C)?s||(s=[]):(s=s||[]).push(C,null));for(C in o){var g=o[C];if(p=i!=null?i[C]:void 0,o.hasOwnProperty(C)&&g!==p&&(g!=null||p!=null))if(C==="style")if(p){for(d in p)!p.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in g)g.hasOwnProperty(d)&&p[d]!==g[d]&&(n||(n={}),n[d]=g[d])}else n||(s||(s=[]),s.push(C,n)),n=g;else C==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(s=s||[]).push(C,g)):C==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(C,""+g):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(f.hasOwnProperty(C)?(g!=null&&C==="onScroll"&&be("scroll",e),s||p===g||(s=[])):(s=s||[]).push(C,g))}n&&(s=s||[]).push("style",n);var C=s;(t.updateQueue=C)&&(t.flags|=4)}},vd=function(e,t,n,o){n!==o&&(t.flags|=4)};function _o(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function sm(e,t,n){var o=t.pendingProps;switch(js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return ct(t.type)&&Ci(),ot(t),null;case 3:return o=t.stateNode,br(),Re(ut),Re(nt),Os(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ut!==null&&(fa(Ut),Ut=null))),ta(e,t),ot(t),null;case 5:Ls(t);var i=Kn(ko.current);if(n=t.type,e!==null&&t.stateNode!=null)gd(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(a(166));return ot(t),null}if(e=Kn(qt.current),zi(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[Gt]=t,o[vo]=s,e=(t.mode&1)!==0,n){case"dialog":be("cancel",o),be("close",o);break;case"iframe":case"object":case"embed":be("load",o);break;case"video":case"audio":for(i=0;i<ho.length;i++)be(ho[i],o);break;case"source":be("error",o);break;case"img":case"image":case"link":be("error",o),be("load",o);break;case"details":be("toggle",o);break;case"input":qo(o,s),be("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},be("invalid",o);break;case"textarea":Zo(o,s),be("invalid",o)}Dl(n,s),i=null;for(var d in s)if(s.hasOwnProperty(d)){var p=s[d];d==="children"?typeof p=="string"?o.textContent!==p&&(s.suppressHydrationWarning!==!0&&Si(o.textContent,p,e),i=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&Si(o.textContent,p,e),i=["children",""+p]):f.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&be("scroll",o)}switch(n){case"input":tt(o),Xo(o,s,!0);break;case"textarea":tt(o),A(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=ki)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ce(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Gt]=t,e[vo]=o,md(e,t,!1,!1),t.stateNode=e;e:{switch(d=Ol(n,o),n){case"dialog":be("cancel",e),be("close",e),i=o;break;case"iframe":case"object":case"embed":be("load",e),i=o;break;case"video":case"audio":for(i=0;i<ho.length;i++)be(ho[i],e);i=o;break;case"source":be("error",e),i=o;break;case"img":case"image":case"link":be("error",e),be("load",e),i=o;break;case"details":be("toggle",e),i=o;break;case"input":qo(e,o),i=fr(e,o),be("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=W({},o,{value:void 0}),be("invalid",e);break;case"textarea":Zo(e,o),i=Gr(e,o),be("invalid",e);break;default:i=o}Dl(n,i),p=i;for(s in p)if(p.hasOwnProperty(s)){var g=p[s];s==="style"?lu(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Ne(e,g)):s==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&De(e,g):typeof g=="number"&&De(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(f.hasOwnProperty(s)?g!=null&&s==="onScroll"&&be("scroll",e):g!=null&&F(e,s,g,d))}switch(n){case"input":tt(e),Xo(e,o,!1);break;case"textarea":tt(e),A(e);break;case"option":o.value!=null&&e.setAttribute("value",""+de(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?vn(e,!!o.multiple,s,!1):o.defaultValue!=null&&vn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ki)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)vd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(a(166));if(n=Kn(ko.current),Kn(qt.current),zi(t)){if(o=t.stateNode,n=t.memoizedProps,o[Gt]=t,(s=o.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:Si(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Gt]=t,t.stateNode=o}return ot(t),null;case 13:if(Re(Oe),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)wc(),_r(),t.flags|=98560,s=!1;else if(s=zi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[Gt]=t}else _r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ot(t),s=!1}else Ut!==null&&(fa(Ut),Ut=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Oe.current&1)!==0?Ke===0&&(Ke=3):ma())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return br(),ta(e,t),e===null&&mo(t.stateNode.containerInfo),ot(t),null;case 10:return zs(t.type._context),ot(t),null;case 17:return ct(t.type)&&Ci(),ot(t),null;case 19:if(Re(Oe),s=t.memoizedState,s===null)return ot(t),null;if(o=(t.flags&128)!==0,d=s.rendering,d===null)if(o)_o(s,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Di(e),d!==null){for(t.flags|=128,_o(s,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Te(Oe,Oe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Me()>Dr&&(t.flags|=128,o=!0,_o(s,!1),t.lanes=4194304)}else{if(!o)if(e=Di(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!Le)return ot(t),null}else 2*Me()-s.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,o=!0,_o(s,!1),t.lanes=4194304);s.isBackwards?(d.sibling=t.child,t.child=d):(n=s.last,n!==null?n.sibling=d:t.child=d,s.last=d)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Me(),t.sibling=null,n=Oe.current,Te(Oe,o?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return ha(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(St&1073741824)!==0&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function am(e,t){switch(js(t),t.tag){case 1:return ct(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),Re(ut),Re(nt),Os(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ls(t),null;case 13:if(Re(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(Oe),null;case 4:return br(),null;case 10:return zs(t.type._context),null;case 22:case 23:return ha(),null;case 24:return null;default:return null}}var Wi=!1,it=!1,um=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Fe(e,t,o)}else n.current=null}function na(e,t,n){try{n()}catch(o){Fe(e,t,o)}}var yd=!1;function cm(e,t){if(hs=ci,e=qu(),ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,p=-1,g=-1,C=0,I=0,O=e,R=null;t:for(;;){for(var Q;O!==n||i!==0&&O.nodeType!==3||(p=d+i),O!==s||o!==0&&O.nodeType!==3||(g=d+o),O.nodeType===3&&(d+=O.nodeValue.length),(Q=O.firstChild)!==null;)R=O,O=Q;for(;;){if(O===e)break t;if(R===n&&++C===i&&(p=d),R===s&&++I===o&&(g=d),(Q=O.nextSibling)!==null)break;O=R,R=O.parentNode}O=Q}n=p===-1||g===-1?null:{start:p,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(ms={focusedElem:e,selectionRange:n},ci=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var G=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var J=G.memoizedProps,Ue=G.memoizedState,k=t.stateNode,v=k.getSnapshotBeforeUpdate(t.elementType===t.type?J:Bt(t.type,J),Ue);k.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch($){Fe(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return G=yd,yd=!1,G}function To(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&na(t,n,s)}i=i.next}while(i!==o)}}function Vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xd(e){var t=e.alternate;t!==null&&(e.alternate=null,xd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[vo],delete t[xs],delete t[Qh],delete t[Yh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wd(e){return e.tag===5||e.tag===3||e.tag===4}function Sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oa(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ki));else if(o!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}function ia(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ia(e,t,n),e=e.sibling;e!==null;)ia(e,t,n),e=e.sibling}var Ze=null,Ht=!1;function Nn(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(oi,n)}catch{}switch(n.tag){case 5:it||Ir(n,t);case 6:var o=Ze,i=Ht;Ze=null,Nn(e,t,n),Ze=o,Ht=i,Ze!==null&&(Ht?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Ht?(e=Ze,n=n.stateNode,e.nodeType===8?ys(e.parentNode,n):e.nodeType===1&&ys(e,n),io(e)):ys(Ze,n.stateNode));break;case 4:o=Ze,i=Ht,Ze=n.stateNode.containerInfo,Ht=!0,Nn(e,t,n),Ze=o,Ht=i;break;case 0:case 11:case 14:case 15:if(!it&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&na(n,t,d),i=i.next}while(i!==o)}Nn(e,t,n);break;case 1:if(!it&&(Ir(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(p){Fe(n,t,p)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(it=(o=it)||n.memoizedState!==null,Nn(e,t,n),it=o):Nn(e,t,n);break;default:Nn(e,t,n)}}function jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new um),t.forEach(function(o){var i=xm.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Wt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 5:Ze=p.stateNode,Ht=!1;break e;case 3:Ze=p.stateNode.containerInfo,Ht=!0;break e;case 4:Ze=p.stateNode.containerInfo,Ht=!0;break e}p=p.return}if(Ze===null)throw Error(a(160));kd(s,d,i),Ze=null,Ht=!1;var g=i.alternate;g!==null&&(g.return=null),i.return=null}catch(C){Fe(i,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cd(t,e),t=t.sibling}function Cd(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),Xt(e),o&4){try{To(3,e,e.return),Vi(3,e)}catch(J){Fe(e,e.return,J)}try{To(5,e,e.return)}catch(J){Fe(e,e.return,J)}}break;case 1:Wt(t,e),Xt(e),o&512&&n!==null&&Ir(n,n.return);break;case 5:if(Wt(t,e),Xt(e),o&512&&n!==null&&Ir(n,n.return),e.flags&32){var i=e.stateNode;try{De(i,"")}catch(J){Fe(e,e.return,J)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,d=n!==null?n.memoizedProps:s,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&Jo(i,s),Ol(p,d);var C=Ol(p,s);for(d=0;d<g.length;d+=2){var I=g[d],O=g[d+1];I==="style"?lu(i,O):I==="dangerouslySetInnerHTML"?Ne(i,O):I==="children"?De(i,O):F(i,I,O,C)}switch(p){case"input":Yr(i,s);break;case"textarea":ei(i,s);break;case"select":var R=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var Q=s.value;Q!=null?vn(i,!!s.multiple,Q,!1):R!==!!s.multiple&&(s.defaultValue!=null?vn(i,!!s.multiple,s.defaultValue,!0):vn(i,!!s.multiple,s.multiple?[]:"",!1))}i[vo]=s}catch(J){Fe(e,e.return,J)}}break;case 6:if(Wt(t,e),Xt(e),o&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(J){Fe(e,e.return,J)}}break;case 3:if(Wt(t,e),Xt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{io(t.containerInfo)}catch(J){Fe(e,e.return,J)}break;case 4:Wt(t,e),Xt(e);break;case 13:Wt(t,e),Xt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(aa=Me())),o&4&&jd(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?(it=(C=it)||I,Wt(t,e),it=C):Wt(t,e),Xt(e),o&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!I&&(e.mode&1)!==0)for(K=e,I=e.child;I!==null;){for(O=K=I;K!==null;){switch(R=K,Q=R.child,R.tag){case 0:case 11:case 14:case 15:To(4,R,R.return);break;case 1:Ir(R,R.return);var G=R.stateNode;if(typeof G.componentWillUnmount=="function"){o=R,n=R.return;try{t=o,G.props=t.memoizedProps,G.state=t.memoizedState,G.componentWillUnmount()}catch(J){Fe(o,n,J)}}break;case 5:Ir(R,R.return);break;case 22:if(R.memoizedState!==null){_d(O);continue}}Q!==null?(Q.return=R,K=Q):_d(O)}I=I.sibling}e:for(I=null,O=e;;){if(O.tag===5){if(I===null){I=O;try{i=O.stateNode,C?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=O.stateNode,g=O.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=iu("display",d))}catch(J){Fe(e,e.return,J)}}}else if(O.tag===6){if(I===null)try{O.stateNode.nodeValue=C?"":O.memoizedProps}catch(J){Fe(e,e.return,J)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;I===O&&(I=null),O=O.return}I===O&&(I=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Wt(t,e),Xt(e),o&4&&jd(e);break;case 21:break;default:Wt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wd(n)){var o=n;break e}n=n.return}throw Error(a(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(De(i,""),o.flags&=-33);var s=Sd(e);ia(e,s,i);break;case 3:case 4:var d=o.stateNode.containerInfo,p=Sd(e);oa(e,p,d);break;default:throw Error(a(161))}}catch(g){Fe(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dm(e,t,n){K=e,Ed(e)}function Ed(e,t,n){for(var o=(e.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&o){var d=i.memoizedState!==null||Wi;if(!d){var p=i.alternate,g=p!==null&&p.memoizedState!==null||it;p=Wi;var C=it;if(Wi=d,(it=g)&&!C)for(K=i;K!==null;)d=K,g=d.child,d.tag===22&&d.memoizedState!==null?Td(i):g!==null?(g.return=d,K=g):Td(i);for(;s!==null;)K=s,Ed(s),s=s.sibling;K=i,Wi=p,it=C}Pd(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,K=s):Pd(e)}}function Pd(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:it||Vi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!it)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Bt(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&_c(t,s,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_c(t,d,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var I=C.memoizedState;if(I!==null){var O=I.dehydrated;O!==null&&io(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}it||t.flags&512&&ra(t)}catch(R){Fe(t,t.return,R)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function _d(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Td(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vi(4,t)}catch(g){Fe(t,n,g)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(g){Fe(t,i,g)}}var s=t.return;try{ra(t)}catch(g){Fe(t,s,g)}break;case 5:var d=t.return;try{ra(t)}catch(g){Fe(t,d,g)}}}catch(g){Fe(t,t.return,g)}if(t===e){K=null;break}var p=t.sibling;if(p!==null){p.return=t.return,K=p;break}K=t.return}}var fm=Math.ceil,Qi=H.ReactCurrentDispatcher,la=H.ReactCurrentOwner,_t=H.ReactCurrentBatchConfig,Se=0,qe=null,He=null,et=0,St=0,Lr=En(0),Ke=0,zo=null,qn=0,Yi=0,sa=0,No=null,ft=null,aa=0,Dr=1/0,pn=null,Ki=!1,ua=null,bn=null,Gi=!1,Rn=null,qi=0,bo=0,ca=null,Ji=-1,Xi=0;function at(){return(Se&6)!==0?Me():Ji!==-1?Ji:Ji=Me()}function In(e){return(e.mode&1)===0?1:(Se&2)!==0&&et!==0?et&-et:Gh.transition!==null?(Xi===0&&(Xi=Su()),Xi):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Nu(e.type)),e)}function Vt(e,t,n,o){if(50<bo)throw bo=0,ca=null,Error(a(185));eo(e,n,o),((Se&2)===0||e!==qe)&&(e===qe&&((Se&2)===0&&(Yi|=n),Ke===4&&Ln(e,et)),pt(e,o),n===1&&Se===0&&(t.mode&1)===0&&(Dr=Me()+500,Pi&&_n()))}function pt(e,t){var n=e.callbackNode;Gp(e,t);var o=si(e,e===qe?et:0);if(o===0)n!==null&&yu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&yu(n),t===1)e.tag===0?Kh(Nd.bind(null,e)):mc(Nd.bind(null,e)),Wh(function(){(Se&6)===0&&_n()}),n=null;else{switch(ku(o)){case 1:n=Hl;break;case 4:n=xu;break;case 16:n=ri;break;case 536870912:n=wu;break;default:n=ri}n=Ad(n,zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zd(e,t){if(Ji=-1,Xi=0,(Se&6)!==0)throw Error(a(327));var n=e.callbackNode;if(Or()&&e.callbackNode!==n)return null;var o=si(e,e===qe?et:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Zi(e,o);else{t=o;var i=Se;Se|=2;var s=Rd();(qe!==e||et!==t)&&(pn=null,Dr=Me()+500,Xn(e,t));do try{mm();break}catch(p){bd(e,p)}while(!0);Ts(),Qi.current=s,Se=i,He!==null?t=0:(qe=null,et=0,t=Ke)}if(t!==0){if(t===2&&(i=Wl(e),i!==0&&(o=i,t=da(e,i))),t===1)throw n=zo,Xn(e,0),Ln(e,o),pt(e,Me()),n;if(t===6)Ln(e,o);else{if(i=e.current.alternate,(o&30)===0&&!pm(i)&&(t=Zi(e,o),t===2&&(s=Wl(e),s!==0&&(o=s,t=da(e,s))),t===1))throw n=zo,Xn(e,0),Ln(e,o),pt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(a(345));case 2:Zn(e,ft,pn);break;case 3:if(Ln(e,o),(o&130023424)===o&&(t=aa+500-Me(),10<t)){if(si(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){at(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vs(Zn.bind(null,e,ft,pn),t);break}Zn(e,ft,pn);break;case 4:if(Ln(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var d=31-Ft(o);s=1<<d,d=t[d],d>i&&(i=d),o&=~s}if(o=i,o=Me()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*fm(o/1960))-o,10<o){e.timeoutHandle=vs(Zn.bind(null,e,ft,pn),o);break}Zn(e,ft,pn);break;case 5:Zn(e,ft,pn);break;default:throw Error(a(329))}}}return pt(e,Me()),e.callbackNode===n?zd.bind(null,e):null}function da(e,t){var n=No;return e.current.memoizedState.isDehydrated&&(Xn(e,t).flags|=256),e=Zi(e,t),e!==2&&(t=ft,ft=n,t!==null&&fa(t)),e}function fa(e){ft===null?ft=e:ft.push.apply(ft,e)}function pm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Mt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~sa,t&=~Yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),o=1<<n;e[n]=-1,t&=~o}}function Nd(e){if((Se&6)!==0)throw Error(a(327));Or();var t=si(e,0);if((t&1)===0)return pt(e,Me()),null;var n=Zi(e,t);if(e.tag!==0&&n===2){var o=Wl(e);o!==0&&(t=o,n=da(e,o))}if(n===1)throw n=zo,Xn(e,0),Ln(e,t),pt(e,Me()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zn(e,ft,pn),pt(e,Me()),null}function pa(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(Dr=Me()+500,Pi&&_n())}}function Jn(e){Rn!==null&&Rn.tag===0&&(Se&6)===0&&Or();var t=Se;Se|=1;var n=_t.transition,o=Ee;try{if(_t.transition=null,Ee=1,e)return e()}finally{Ee=o,_t.transition=n,Se=t,(Se&6)===0&&_n()}}function ha(){St=Lr.current,Re(Lr)}function Xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hh(n)),He!==null)for(n=He.return;n!==null;){var o=n;switch(js(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ci();break;case 3:br(),Re(ut),Re(nt),Os();break;case 5:Ls(o);break;case 4:br();break;case 13:Re(Oe);break;case 19:Re(Oe);break;case 10:zs(o.type._context);break;case 22:case 23:ha()}n=n.return}if(qe=e,He=e=Dn(e.current,null),et=St=t,Ke=0,zo=null,sa=Yi=qn=0,ft=No=null,Yn!==null){for(t=0;t<Yn.length;t++)if(n=Yn[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var d=s.next;s.next=i,o.next=d}n.pending=o}Yn=null}return e}function bd(e,t){do{var n=He;try{if(Ts(),Oi.current=Mi,$i){for(var o=$e.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}$i=!1}if(Gn=0,Ge=Ye=$e=null,jo=!1,Co=0,la.current=null,n===null||n.return===null){Ke=1,zo=t,He=null;break}e:{var s=e,d=n.return,p=n,g=t;if(t=et,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var C=g,I=p,O=I.tag;if((I.mode&1)===0&&(O===0||O===11||O===15)){var R=I.alternate;R?(I.updateQueue=R.updateQueue,I.memoizedState=R.memoizedState,I.lanes=R.lanes):(I.updateQueue=null,I.memoizedState=null)}var Q=nd(d);if(Q!==null){Q.flags&=-257,rd(Q,d,p,s,t),Q.mode&1&&td(s,C,t),t=Q,g=C;var G=t.updateQueue;if(G===null){var J=new Set;J.add(g),t.updateQueue=J}else G.add(g);break e}else{if((t&1)===0){td(s,C,t),ma();break e}g=Error(a(426))}}else if(Le&&p.mode&1){var Ue=nd(d);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),rd(Ue,d,p,s,t),Ps(Rr(g,p));break e}}s=g=Rr(g,p),Ke!==4&&(Ke=2),No===null?No=[s]:No.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var k=Zc(s,g,t);Pc(s,k);break e;case 1:p=g;var v=s.type,j=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(bn===null||!bn.has(j)))){s.flags|=65536,t&=-t,s.lanes|=t;var $=ed(s,p,t);Pc(s,$);break e}}s=s.return}while(s!==null)}Ld(n)}catch(X){t=X,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function Rd(){var e=Qi.current;return Qi.current=Mi,e===null?Mi:e}function ma(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),qe===null||(qn&268435455)===0&&(Yi&268435455)===0||Ln(qe,et)}function Zi(e,t){var n=Se;Se|=2;var o=Rd();(qe!==e||et!==t)&&(pn=null,Xn(e,t));do try{hm();break}catch(i){bd(e,i)}while(!0);if(Ts(),Se=n,Qi.current=o,He!==null)throw Error(a(261));return qe=null,et=0,Ke}function hm(){for(;He!==null;)Id(He)}function mm(){for(;He!==null&&!Mp();)Id(He)}function Id(e){var t=$d(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?Ld(e):He=t,la.current=null}function Ld(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=sm(n,t,St),n!==null){He=n;return}}else{if(n=am(n,t),n!==null){n.flags&=32767,He=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,He=null;return}}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);Ke===0&&(Ke=5)}function Zn(e,t,n){var o=Ee,i=_t.transition;try{_t.transition=null,Ee=1,gm(e,t,n,o)}finally{_t.transition=i,Ee=o}return null}function gm(e,t,n,o){do Or();while(Rn!==null);if((Se&6)!==0)throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(qp(e,s),e===qe&&(He=qe=null,et=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Gi||(Gi=!0,Ad(ri,function(){return Or(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=_t.transition,_t.transition=null;var d=Ee;Ee=1;var p=Se;Se|=4,la.current=null,cm(e,n),Cd(n,e),Oh(ms),ci=!!hs,ms=hs=null,e.current=n,dm(n),Up(),Se=p,Ee=d,_t.transition=s}else e.current=n;if(Gi&&(Gi=!1,Rn=e,qi=i),s=e.pendingLanes,s===0&&(bn=null),Wp(n.stateNode),pt(e,Me()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ki)throw Ki=!1,e=ua,ua=null,e;return(qi&1)!==0&&e.tag!==0&&Or(),s=e.pendingLanes,(s&1)!==0?e===ca?bo++:(bo=0,ca=e):bo=0,_n(),null}function Or(){if(Rn!==null){var e=ku(qi),t=_t.transition,n=Ee;try{if(_t.transition=null,Ee=16>e?16:e,Rn===null)var o=!1;else{if(e=Rn,Rn=null,qi=0,(Se&6)!==0)throw Error(a(331));var i=Se;for(Se|=4,K=e.current;K!==null;){var s=K,d=s.child;if((K.flags&16)!==0){var p=s.deletions;if(p!==null){for(var g=0;g<p.length;g++){var C=p[g];for(K=C;K!==null;){var I=K;switch(I.tag){case 0:case 11:case 15:To(8,I,s)}var O=I.child;if(O!==null)O.return=I,K=O;else for(;K!==null;){I=K;var R=I.sibling,Q=I.return;if(xd(I),I===C){K=null;break}if(R!==null){R.return=Q,K=R;break}K=Q}}}var G=s.alternate;if(G!==null){var J=G.child;if(J!==null){G.child=null;do{var Ue=J.sibling;J.sibling=null,J=Ue}while(J!==null)}}K=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,K=d;else e:for(;K!==null;){if(s=K,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,K=k;break e}K=s.return}}var v=e.current;for(K=v;K!==null;){d=K;var j=d.child;if((d.subtreeFlags&2064)!==0&&j!==null)j.return=d,K=j;else e:for(d=v;K!==null;){if(p=K,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Vi(9,p)}}catch(X){Fe(p,p.return,X)}if(p===d){K=null;break e}var $=p.sibling;if($!==null){$.return=p.return,K=$;break e}K=p.return}}if(Se=i,_n(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(oi,e)}catch{}o=!0}return o}finally{Ee=n,_t.transition=t}}return!1}function Dd(e,t,n){t=Rr(n,t),t=Zc(e,t,1),e=zn(e,t,1),t=at(),e!==null&&(eo(e,1,t),pt(e,t))}function Fe(e,t,n){if(e.tag===3)Dd(e,e,n);else for(;t!==null;){if(t.tag===3){Dd(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(bn===null||!bn.has(o))){e=Rr(n,e),e=ed(t,e,1),t=zn(t,e,1),e=at(),t!==null&&(eo(t,1,e),pt(t,e));break}}t=t.return}}function vm(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(et&n)===n&&(Ke===4||Ke===3&&(et&130023424)===et&&500>Me()-aa?Xn(e,0):sa|=n),pt(e,t)}function Od(e,t){t===0&&((e.mode&1)===0?t=1:(t=li,li<<=1,(li&130023424)===0&&(li=4194304)));var n=at();e=cn(e,t),e!==null&&(eo(e,t,n),pt(e,n))}function ym(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Od(e,n)}function xm(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(a(314))}o!==null&&o.delete(t),Od(e,n)}var $d;$d=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)dt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return dt=!1,lm(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,Le&&(t.flags&1048576)!==0&&gc(t,Ti,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Hi(e,t),e=t.pendingProps;var i=Cr(t,nt.current);Nr(t,n),i=Fs(null,t,o,e,i,n);var s=Ms();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(o)?(s=!0,Ei(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rs(t),i.updater=Ui,t.stateNode=i,i._reactInternals=t,Qs(t,o,e,n),t=qs(null,t,o,!0,s,n)):(t.tag=0,Le&&s&&ks(t),st(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=Sm(o),e=Bt(o,e),i){case 0:t=Gs(null,t,o,e,n);break e;case 1:t=ud(null,t,o,e,n);break e;case 11:t=od(null,t,o,e,n);break e;case 14:t=id(null,t,o,Bt(o.type,e),n);break e}throw Error(a(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Bt(o,i),Gs(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Bt(o,i),ud(e,t,o,i,n);case 3:e:{if(cd(t),e===null)throw Error(a(387));o=t.pendingProps,s=t.memoizedState,i=s.element,Ec(e,t),Li(t,o,null,n);var d=t.memoizedState;if(o=d.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Rr(Error(a(423)),t),t=dd(e,t,o,n,i);break e}else if(o!==i){i=Rr(Error(a(424)),t),t=dd(e,t,o,n,i);break e}else for(wt=Cn(t.stateNode.containerInfo.firstChild),xt=t,Le=!0,Ut=null,n=jc(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),o===i){t=fn(e,t,n);break e}st(e,t,o,n)}t=t.child}return t;case 5:return Tc(t),e===null&&Es(t),o=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,d=i.children,gs(o,i)?d=null:s!==null&&gs(o,s)&&(t.flags|=32),ad(e,t),st(e,t,d,n),t.child;case 6:return e===null&&Es(t),null;case 13:return fd(e,t,n);case 4:return Is(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Tr(t,null,o,n):st(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Bt(o,i),od(e,t,o,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,s=t.memoizedProps,d=i.value,Te(bi,o._currentValue),o._currentValue=d,s!==null)if(Mt(s.value,d)){if(s.children===i.children&&!ut.current){t=fn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){d=s.child;for(var g=p.firstContext;g!==null;){if(g.context===o){if(s.tag===1){g=dn(-1,n&-n),g.tag=2;var C=s.updateQueue;if(C!==null){C=C.shared;var I=C.pending;I===null?g.next=g:(g.next=I.next,I.next=g),C.pending=g}}s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Ns(s.return,n,t),p.lanes|=n;break}g=g.next}}else if(s.tag===10)d=s.type===t.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(a(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),Ns(d,n,t),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,Nr(t,n),i=Et(i),o=o(i),t.flags|=1,st(e,t,o,n),t.child;case 14:return o=t.type,i=Bt(o,t.pendingProps),i=Bt(o.type,i),id(e,t,o,i,n);case 15:return ld(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Bt(o,i),Hi(e,t),t.tag=1,ct(o)?(e=!0,Ei(t)):e=!1,Nr(t,n),Jc(t,o,i),Qs(t,o,i,n),qs(null,t,o,!0,e,n);case 19:return hd(e,t,n);case 22:return sd(e,t,n)}throw Error(a(156,t.tag))};function Ad(e,t){return vu(e,t)}function wm(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,o){return new wm(e,t,n,o)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sm(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===lt)return 14}return 2}function Dn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,o,i,s){var d=2;if(o=e,typeof e=="function")ga(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Z:return er(n.children,i,s,t);case Y:d=8,i|=8;break;case ee:return e=Tt(12,n,t,i|2),e.elementType=ee,e.lanes=s,e;case Pe:return e=Tt(13,n,t,i),e.elementType=Pe,e.lanes=s,e;case _e:return e=Tt(19,n,t,i),e.elementType=_e,e.lanes=s,e;case Ce:return tl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:d=10;break e;case me:d=9;break e;case fe:d=11;break e;case lt:d=14;break e;case Qe:d=16,o=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=Tt(d,n,t,i),t.elementType=e,t.type=o,t.lanes=s,t}function er(e,t,n,o){return e=Tt(7,e,o,t),e.lanes=n,e}function tl(e,t,n,o){return e=Tt(22,e,o,t),e.elementType=Ce,e.lanes=n,e.stateNode={isHidden:!1},e}function va(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function ya(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function km(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xa(e,t,n,o,i,s,d,p,g){return e=new km(e,t,n,p,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Tt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rs(s),e}function jm(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Fd(e){if(!e)return Pn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(ct(n))return pc(e,n,t)}return t}function Md(e,t,n,o,i,s,d,p,g){return e=xa(n,o,!0,e,i,s,d,p,g),e.context=Fd(null),n=e.current,o=at(),i=In(n),s=dn(o,i),s.callback=t??null,zn(n,s,i),e.current.lanes=i,eo(e,i,o),pt(e,o),e}function nl(e,t,n,o){var i=t.current,s=at(),d=In(i);return n=Fd(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(s,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=zn(i,t,d),e!==null&&(Vt(e,i,d,s),Ii(e,i,d)),d}function rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wa(e,t){Ud(e,t),(e=e.alternate)&&Ud(e,t)}function Cm(){return null}var Bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sa(e){this._internalRoot=e}ol.prototype.render=Sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));nl(e,t,null,null)},ol.prototype.unmount=Sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){nl(null,e,null,null)}),t[ln]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sn.length&&t!==0&&t<Sn[n].priority;n++);Sn.splice(n,0,e),n===0&&Tu(e)}};function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hd(){}function Em(e,t,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var C=rl(d);s.call(C)}}var d=Md(t,o,e,0,null,!1,!1,"",Hd);return e._reactRootContainer=d,e[ln]=d.current,mo(e.nodeType===8?e.parentNode:e),Jn(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var p=o;o=function(){var C=rl(g);p.call(C)}}var g=xa(e,0,!1,null,null,!1,!1,"",Hd);return e._reactRootContainer=g,e[ln]=g.current,mo(e.nodeType===8?e.parentNode:e),Jn(function(){nl(t,g,n,o)}),g}function ll(e,t,n,o,i){var s=n._reactRootContainer;if(s){var d=s;if(typeof i=="function"){var p=i;i=function(){var g=rl(d);p.call(g)}}nl(t,d,e,i)}else d=Em(n,t,e,i,o);return rl(d)}ju=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zr(t.pendingLanes);n!==0&&(Ql(t,n|1),pt(t,Me()),(Se&6)===0&&(Dr=Me()+500,_n()))}break;case 13:Jn(function(){var o=cn(e,1);if(o!==null){var i=at();Vt(o,e,1,i)}}),wa(e,1)}},Yl=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=at();Vt(t,e,134217728,n)}wa(e,134217728)}},Cu=function(e){if(e.tag===13){var t=In(e),n=cn(e,t);if(n!==null){var o=at();Vt(n,e,t,o)}wa(e,t)}},Eu=function(){return Ee},Pu=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}},Fl=function(e,t,n){switch(t){case"input":if(Yr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=ji(o);if(!i)throw Error(a(90));vt(o),Yr(o,i)}}}break;case"textarea":ei(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}},cu=pa,du=Jn;var Pm={usingClientEntryPoint:!1,Events:[yo,kr,ji,au,uu,pa]},Ro={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_m={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||Cm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{oi=sl.inject(_m),Kt=sl}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm,ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ka(t))throw Error(a(200));return jm(e,t,null,n)},ht.createRoot=function(e,t){if(!ka(e))throw Error(a(299));var n=!1,o="",i=Bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xa(e,1,!1,null,null,n,!1,o,i),e[ln]=t.current,mo(e.nodeType===8?e.parentNode:e),new Sa(t)},ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=mu(t),e=e===null?null:e.stateNode,e},ht.flushSync=function(e){return Jn(e)},ht.hydrate=function(e,t,n){if(!il(t))throw Error(a(200));return ll(null,e,t,!0,n)},ht.hydrateRoot=function(e,t,n){if(!ka(e))throw Error(a(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",d=Bd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Md(t,null,e,1,n??null,i,!1,s,d),e[ln]=t.current,mo(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ol(t)},ht.render=function(e,t,n){if(!il(t))throw Error(a(200));return ll(null,e,t,!1,n)},ht.unmountComponentAtNode=function(e){if(!il(e))throw Error(a(40));return e._reactRootContainer?(Jn(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1},ht.unstable_batchedUpdates=pa,ht.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!il(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return ll(e,t,n,!1,o)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var Jd;function Yf(){if(Jd)return Ea.exports;Jd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),Ea.exports=Om(),Ea.exports}var Xd;function $m(){if(Xd)return al;Xd=1;var r=Yf();return al.createRoot=r.createRoot,al.hydrateRoot=r.hydrateRoot,al}var Am=$m();const Fm=Qf(Am);Yf();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(r[c]=a[c])}return r},Bo.apply(this,arguments)}var An;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(An||(An={}));const Zd="popstate";function Mm(r){r===void 0&&(r={});function l(c,f){let{pathname:h,search:m,hash:y}=c.location;return Fa("",{pathname:h,search:m,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function a(c,f){return typeof f=="string"?f:wl(f)}return Bm(l,a,null,r)}function Ve(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function Kf(r,l){if(!r){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Um(){return Math.random().toString(36).substr(2,8)}function ef(r,l){return{usr:r.state,key:r.key,idx:l}}function Fa(r,l,a,c){return a===void 0&&(a=null),Bo({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof l=="string"?Vr(l):l,{state:a,key:l&&l.key||c||Um()})}function wl(r){let{pathname:l="/",search:a="",hash:c=""}=r;return a&&a!=="?"&&(l+=a.charAt(0)==="?"?a:"?"+a),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Vr(r){let l={};if(r){let a=r.indexOf("#");a>=0&&(l.hash=r.substr(a),r=r.substr(0,a));let c=r.indexOf("?");c>=0&&(l.search=r.substr(c),r=r.substr(0,c)),r&&(l.pathname=r)}return l}function Bm(r,l,a,c){c===void 0&&(c={});let{window:f=document.defaultView,v5Compat:h=!1}=c,m=f.history,y=An.Pop,x=null,_=T();_==null&&(_=0,m.replaceState(Bo({},m.state,{idx:_}),""));function T(){return(m.state||{idx:null}).idx}function P(){y=An.Pop;let D=T(),V=D==null?null:D-_;_=D,x&&x({action:y,location:b.location,delta:V})}function N(D,V){y=An.Push;let U=Fa(b.location,D,V);_=T()+1;let F=ef(U,_),H=b.createHref(U);try{m.pushState(F,"",H)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;f.location.assign(H)}h&&x&&x({action:y,location:b.location,delta:1})}function L(D,V){y=An.Replace;let U=Fa(b.location,D,V);_=T();let F=ef(U,_),H=b.createHref(U);m.replaceState(F,"",H),h&&x&&x({action:y,location:b.location,delta:0})}function B(D){let V=f.location.origin!=="null"?f.location.origin:f.location.href,U=typeof D=="string"?D:wl(D);return U=U.replace(/ $/,"%20"),Ve(V,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,V)}let b={get action(){return y},get location(){return r(f,m)},listen(D){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(Zd,P),x=D,()=>{f.removeEventListener(Zd,P),x=null}},createHref(D){return l(f,D)},createURL:B,encodeLocation(D){let V=B(D);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:N,replace:L,go(D){return m.go(D)}};return b}var tf;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(tf||(tf={}));function Hm(r,l,a){return a===void 0&&(a="/"),Wm(r,l,a)}function Wm(r,l,a,c){let f=typeof l=="string"?Vr(l):l,h=Ja(f.pathname||"/",a);if(h==null)return null;let m=Gf(r);Vm(m);let y=null;for(let x=0;y==null&&x<m.length;++x){let _=r0(h);y=e0(m[x],_)}return y}function Gf(r,l,a,c){l===void 0&&(l=[]),a===void 0&&(a=[]),c===void 0&&(c="");let f=(h,m,y)=>{let x={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};x.relativePath.startsWith("/")&&(Ve(x.relativePath.startsWith(c),'Absolute route path "'+x.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),x.relativePath=x.relativePath.slice(c.length));let _=Fn([c,x.relativePath]),T=a.concat(x);h.children&&h.children.length>0&&(Ve(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),Gf(h.children,l,T,_)),!(h.path==null&&!h.index)&&l.push({path:_,score:Xm(_,h.index),routesMeta:T})};return r.forEach((h,m)=>{var y;if(h.path===""||!((y=h.path)!=null&&y.includes("?")))f(h,m);else for(let x of qf(h.path))f(h,m,x)}),l}function qf(r){let l=r.split("/");if(l.length===0)return[];let[a,...c]=l,f=a.endsWith("?"),h=a.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let m=qf(c.join("/")),y=[];return y.push(...m.map(x=>x===""?h:[h,x].join("/"))),f&&y.push(...m),y.map(x=>r.startsWith("/")&&x===""?"/":x)}function Vm(r){r.sort((l,a)=>l.score!==a.score?a.score-l.score:Zm(l.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}const Qm=/^:[\w-]+$/,Ym=3,Km=2,Gm=1,qm=10,Jm=-2,nf=r=>r==="*";function Xm(r,l){let a=r.split("/"),c=a.length;return a.some(nf)&&(c+=Jm),l&&(c+=Km),a.filter(f=>!nf(f)).reduce((f,h)=>f+(Qm.test(h)?Ym:h===""?Gm:qm),c)}function Zm(r,l){return r.length===l.length&&r.slice(0,-1).every((c,f)=>c===l[f])?r[r.length-1]-l[l.length-1]:0}function e0(r,l,a){let{routesMeta:c}=r,f={},h="/",m=[];for(let y=0;y<c.length;++y){let x=c[y],_=y===c.length-1,T=h==="/"?l:l.slice(h.length)||"/",P=t0({path:x.relativePath,caseSensitive:x.caseSensitive,end:_},T),N=x.route;if(!P)return null;Object.assign(f,P.params),m.push({params:f,pathname:Fn([h,P.pathname]),pathnameBase:s0(Fn([h,P.pathnameBase])),route:N}),P.pathnameBase!=="/"&&(h=Fn([h,P.pathnameBase]))}return m}function t0(r,l){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[a,c]=n0(r.path,r.caseSensitive,r.end),f=l.match(a);if(!f)return null;let h=f[0],m=h.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:c.reduce((_,T,P)=>{let{paramName:N,isOptional:L}=T;if(N==="*"){let b=y[P]||"";m=h.slice(0,h.length-b.length).replace(/(.)\/+$/,"$1")}const B=y[P];return L&&!B?_[N]=void 0:_[N]=(B||"").replace(/%2F/g,"/"),_},{}),pathname:h,pathnameBase:m,pattern:r}}function n0(r,l,a){l===void 0&&(l=!1),a===void 0&&(a=!0),Kf(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let c=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,x)=>(c.push({paramName:y,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,l?void 0:"i"),c]}function r0(r){try{return r.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Kf(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),r}}function Ja(r,l){if(l==="/")return r;if(!r.toLowerCase().startsWith(l.toLowerCase()))return null;let a=l.endsWith("/")?l.length-1:l.length,c=r.charAt(a);return c&&c!=="/"?null:r.slice(a)||"/"}function o0(r,l){l===void 0&&(l="/");let{pathname:a,search:c="",hash:f=""}=typeof r=="string"?Vr(r):r;return{pathname:a?a.startsWith("/")?a:i0(a,l):l,search:a0(c),hash:u0(f)}}function i0(r,l){let a=l.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?a.length>1&&a.pop():f!=="."&&a.push(f)}),a.length>1?a.join("/"):"/"}function Ta(r,l,a,c){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l0(r){return r.filter((l,a)=>a===0||l.route.path&&l.route.path.length>0)}function Jf(r,l){let a=l0(r);return l?a.map((c,f)=>f===a.length-1?c.pathname:c.pathnameBase):a.map(c=>c.pathnameBase)}function Xf(r,l,a,c){c===void 0&&(c=!1);let f;typeof r=="string"?f=Vr(r):(f=Bo({},r),Ve(!f.pathname||!f.pathname.includes("?"),Ta("?","pathname","search",f)),Ve(!f.pathname||!f.pathname.includes("#"),Ta("#","pathname","hash",f)),Ve(!f.search||!f.search.includes("#"),Ta("#","search","hash",f)));let h=r===""||f.pathname==="",m=h?"/":f.pathname,y;if(m==null)y=a;else{let P=l.length-1;if(!c&&m.startsWith("..")){let N=m.split("/");for(;N[0]==="..";)N.shift(),P-=1;f.pathname=N.join("/")}y=P>=0?l[P]:"/"}let x=o0(f,y),_=m&&m!=="/"&&m.endsWith("/"),T=(h||m===".")&&a.endsWith("/");return!x.pathname.endsWith("/")&&(_||T)&&(x.pathname+="/"),x}const Fn=r=>r.join("/").replace(/\/\/+/g,"/"),s0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),a0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,u0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function c0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Zf=["post","put","patch","delete"];new Set(Zf);const d0=["get",...Zf];new Set(d0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(r[c]=a[c])}return r},Ho.apply(this,arguments)}const Xa=E.createContext(null),f0=E.createContext(null),dr=E.createContext(null),_l=E.createContext(null),Mn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),ep=E.createContext(null);function p0(r,l){let{relative:a}=l===void 0?{}:l;Ko()||Ve(!1);let{basename:c,navigator:f}=E.useContext(dr),{hash:h,pathname:m,search:y}=np(r,{relative:a}),x=m;return c!=="/"&&(x=m==="/"?c:Fn([c,m])),f.createHref({pathname:x,search:y,hash:h})}function Ko(){return E.useContext(_l)!=null}function Tl(){return Ko()||Ve(!1),E.useContext(_l).location}function tp(r){E.useContext(dr).static||E.useLayoutEffect(r)}function mn(){let{isDataRoute:r}=E.useContext(Mn);return r?_0():h0()}function h0(){Ko()||Ve(!1);let r=E.useContext(Xa),{basename:l,future:a,navigator:c}=E.useContext(dr),{matches:f}=E.useContext(Mn),{pathname:h}=Tl(),m=JSON.stringify(Jf(f,a.v7_relativeSplatPath)),y=E.useRef(!1);return tp(()=>{y.current=!0}),E.useCallback(function(_,T){if(T===void 0&&(T={}),!y.current)return;if(typeof _=="number"){c.go(_);return}let P=Xf(_,JSON.parse(m),h,T.relative==="path");r==null&&l!=="/"&&(P.pathname=P.pathname==="/"?l:Fn([l,P.pathname])),(T.replace?c.replace:c.push)(P,T.state,T)},[l,c,m,h,r])}function m0(){let{matches:r}=E.useContext(Mn),l=r[r.length-1];return l?l.params:{}}function np(r,l){let{relative:a}=l===void 0?{}:l,{future:c}=E.useContext(dr),{matches:f}=E.useContext(Mn),{pathname:h}=Tl(),m=JSON.stringify(Jf(f,c.v7_relativeSplatPath));return E.useMemo(()=>Xf(r,JSON.parse(m),h,a==="path"),[r,m,h,a])}function g0(r,l){return v0(r,l)}function v0(r,l,a,c){Ko()||Ve(!1);let{navigator:f}=E.useContext(dr),{matches:h}=E.useContext(Mn),m=h[h.length-1],y=m?m.params:{};m&&m.pathname;let x=m?m.pathnameBase:"/";m&&m.route;let _=Tl(),T;if(l){var P;let D=typeof l=="string"?Vr(l):l;x==="/"||(P=D.pathname)!=null&&P.startsWith(x)||Ve(!1),T=D}else T=_;let N=T.pathname||"/",L=N;if(x!=="/"){let D=x.replace(/^\//,"").split("/");L="/"+N.replace(/^\//,"").split("/").slice(D.length).join("/")}let B=Hm(r,{pathname:L}),b=k0(B&&B.map(D=>Object.assign({},D,{params:Object.assign({},y,D.params),pathname:Fn([x,f.encodeLocation?f.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?x:Fn([x,f.encodeLocation?f.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),h,a,c);return l&&b?E.createElement(_l.Provider,{value:{location:Ho({pathname:"/",search:"",hash:"",state:null,key:"default"},T),navigationType:An.Pop}},b):b}function y0(){let r=P0(),l=c0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),a=r instanceof Error?r.stack:null,f={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},l),a?E.createElement("pre",{style:f},a):null,null)}const x0=E.createElement(y0,null);class w0 extends E.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,a){return a.location!==l.location||a.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:a.error,location:a.location,revalidation:l.revalidation||a.revalidation}}componentDidCatch(l,a){console.error("React Router caught the following error during render",l,a)}render(){return this.state.error!==void 0?E.createElement(Mn.Provider,{value:this.props.routeContext},E.createElement(ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S0(r){let{routeContext:l,match:a,children:c}=r,f=E.useContext(Xa);return f&&f.static&&f.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=a.route.id),E.createElement(Mn.Provider,{value:l},c)}function k0(r,l,a,c){var f;if(l===void 0&&(l=[]),a===void 0&&(a=null),c===void 0&&(c=null),r==null){var h;if(!a)return null;if(a.errors)r=a.matches;else if((h=c)!=null&&h.v7_partialHydration&&l.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let m=r,y=(f=a)==null?void 0:f.errors;if(y!=null){let T=m.findIndex(P=>P.route.id&&(y==null?void 0:y[P.route.id])!==void 0);T>=0||Ve(!1),m=m.slice(0,Math.min(m.length,T+1))}let x=!1,_=-1;if(a&&c&&c.v7_partialHydration)for(let T=0;T<m.length;T++){let P=m[T];if((P.route.HydrateFallback||P.route.hydrateFallbackElement)&&(_=T),P.route.id){let{loaderData:N,errors:L}=a,B=P.route.loader&&N[P.route.id]===void 0&&(!L||L[P.route.id]===void 0);if(P.route.lazy||B){x=!0,_>=0?m=m.slice(0,_+1):m=[m[0]];break}}}return m.reduceRight((T,P,N)=>{let L,B=!1,b=null,D=null;a&&(L=y&&P.route.id?y[P.route.id]:void 0,b=P.route.errorElement||x0,x&&(_<0&&N===0?(T0("route-fallback"),B=!0,D=null):_===N&&(B=!0,D=P.route.hydrateFallbackElement||null)));let V=l.concat(m.slice(0,N+1)),U=()=>{let F;return L?F=b:B?F=D:P.route.Component?F=E.createElement(P.route.Component,null):P.route.element?F=P.route.element:F=T,E.createElement(S0,{match:P,routeContext:{outlet:T,matches:V,isDataRoute:a!=null},children:F})};return a&&(P.route.ErrorBoundary||P.route.errorElement||N===0)?E.createElement(w0,{location:a.location,revalidation:a.revalidation,component:b,error:L,children:U(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):U()},null)}var rp=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(rp||{}),op=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(op||{});function j0(r){let l=E.useContext(Xa);return l||Ve(!1),l}function C0(r){let l=E.useContext(f0);return l||Ve(!1),l}function E0(r){let l=E.useContext(Mn);return l||Ve(!1),l}function ip(r){let l=E0(),a=l.matches[l.matches.length-1];return a.route.id||Ve(!1),a.route.id}function P0(){var r;let l=E.useContext(ep),a=C0(),c=ip();return l!==void 0?l:(r=a.errors)==null?void 0:r[c]}function _0(){let{router:r}=j0(rp.UseNavigateStable),l=ip(op.UseNavigateStable),a=E.useRef(!1);return tp(()=>{a.current=!0}),E.useCallback(function(f,h){h===void 0&&(h={}),a.current&&(typeof f=="number"?r.navigate(f):r.navigate(f,Ho({fromRouteId:l},h)))},[r,l])}const rf={};function T0(r,l,a){rf[r]||(rf[r]=!0)}function z0(r,l){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function nn(r){Ve(!1)}function N0(r){let{basename:l="/",children:a=null,location:c,navigationType:f=An.Pop,navigator:h,static:m=!1,future:y}=r;Ko()&&Ve(!1);let x=l.replace(/^\/*/,"/"),_=E.useMemo(()=>({basename:x,navigator:h,static:m,future:Ho({v7_relativeSplatPath:!1},y)}),[x,y,h,m]);typeof c=="string"&&(c=Vr(c));let{pathname:T="/",search:P="",hash:N="",state:L=null,key:B="default"}=c,b=E.useMemo(()=>{let D=Ja(T,x);return D==null?null:{location:{pathname:D,search:P,hash:N,state:L,key:B},navigationType:f}},[x,T,P,N,L,B,f]);return b==null?null:E.createElement(dr.Provider,{value:_},E.createElement(_l.Provider,{children:a,value:b}))}function b0(r){let{children:l,location:a}=r;return g0(Ma(l),a)}new Promise(()=>{});function Ma(r,l){l===void 0&&(l=[]);let a=[];return E.Children.forEach(r,(c,f)=>{if(!E.isValidElement(c))return;let h=[...l,f];if(c.type===E.Fragment){a.push.apply(a,Ma(c.props.children,h));return}c.type!==nn&&Ve(!1),!c.props.index||!c.props.children||Ve(!1);let m={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=Ma(c.props.children,h)),a.push(m)}),a}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(r[c]=a[c])}return r},Ua.apply(this,arguments)}function R0(r,l){if(r==null)return{};var a={},c=Object.keys(r),f,h;for(h=0;h<c.length;h++)f=c[h],!(l.indexOf(f)>=0)&&(a[f]=r[f]);return a}function I0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function L0(r,l){return r.button===0&&(!l||l==="_self")&&!I0(r)}const D0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],O0="6";try{window.__reactRouterVersion=O0}catch{}const $0="startTransition",of=Im[$0];function A0(r){let{basename:l,children:a,future:c,window:f}=r,h=E.useRef();h.current==null&&(h.current=Mm({window:f,v5Compat:!0}));let m=h.current,[y,x]=E.useState({action:m.action,location:m.location}),{v7_startTransition:_}=c||{},T=E.useCallback(P=>{_&&of?of(()=>x(P)):x(P)},[x,_]);return E.useLayoutEffect(()=>m.listen(T),[m,T]),E.useEffect(()=>z0(c),[c]),E.createElement(N0,{basename:l,children:a,location:y.location,navigationType:y.action,navigator:m,future:c})}const F0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lp=E.forwardRef(function(l,a){let{onClick:c,relative:f,reloadDocument:h,replace:m,state:y,target:x,to:_,preventScrollReset:T,viewTransition:P}=l,N=R0(l,D0),{basename:L}=E.useContext(dr),B,b=!1;if(typeof _=="string"&&M0.test(_)&&(B=_,F0))try{let F=new URL(window.location.href),H=_.startsWith("//")?new URL(F.protocol+_):new URL(_),oe=Ja(H.pathname,L);H.origin===F.origin&&oe!=null?_=oe+H.search+H.hash:b=!0}catch{}let D=p0(_,{relative:f}),V=U0(_,{replace:m,state:y,target:x,preventScrollReset:T,relative:f,viewTransition:P});function U(F){c&&c(F),F.defaultPrevented||V(F)}return E.createElement("a",Ua({},N,{href:B||D,onClick:b||h?c:U,ref:a,target:x}))});var lf;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(lf||(lf={}));var sf;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(sf||(sf={}));function U0(r,l){let{target:a,replace:c,state:f,preventScrollReset:h,relative:m,viewTransition:y}=l===void 0?{}:l,x=mn(),_=Tl(),T=np(r,{relative:m});return E.useCallback(P=>{if(L0(P,a)){P.preventDefault();let N=c!==void 0?c:wl(_)===wl(T);x(r,{replace:N,state:f,preventScrollReset:h,relative:m,viewTransition:y})}},[_,x,T,c,f,a,r,h,m,y])}var sp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},af=gt.createContext&&gt.createContext(sp),B0=["attr","size","title"];function H0(r,l){if(r==null)return{};var a=W0(r,l),c,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(f=0;f<h.length;f++)c=h[f],!(l.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(a[c]=r[c])}return a}function W0(r,l){if(r==null)return{};var a={};for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){if(l.indexOf(c)>=0)continue;a[c]=r[c]}return a}function Sl(){return Sl=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(r[c]=a[c])}return r},Sl.apply(this,arguments)}function uf(r,l){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);l&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable})),a.push.apply(a,c)}return a}function kl(r){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?uf(Object(a),!0).forEach(function(c){V0(r,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):uf(Object(a)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(a,c))})}return r}function V0(r,l,a){return l=Q0(l),l in r?Object.defineProperty(r,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[l]=a,r}function Q0(r){var l=Y0(r,"string");return typeof l=="symbol"?l:l+""}function Y0(r,l){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var c=a.call(r,l);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(r)}function ap(r){return r&&r.map((l,a)=>gt.createElement(l.tag,kl({key:a},l.attr),ap(l.child)))}function Yt(r){return l=>gt.createElement(K0,Sl({attr:kl({},r.attr)},l),ap(r.child))}function K0(r){var l=a=>{var{attr:c,size:f,title:h}=r,m=H0(r,B0),y=f||a.size||"1em",x;return a.className&&(x=a.className),r.className&&(x=(x?x+" ":"")+r.className),gt.createElement("svg",Sl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,c,m,{className:x,style:kl(kl({color:r.color||a.color},a.style),r.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),h&&gt.createElement("title",null,h),r.children)};return af!==void 0?gt.createElement(af.Consumer,null,a=>l(a)):l(sp)}function cf(r){return Yt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(r)}function G0(r){return Yt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(r)}function q0(r){return Yt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function Wo(r){return Yt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(r)}function Vo(r){return Yt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(r)}function J0(r){return Yt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(r)}function X0(r){return Yt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}function Z0(r){return Yt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(r)}function eg(r){return Yt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"},child:[]}]})(r)}function tg(r){return Yt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function ng(r){return Yt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(r)}var mt=function(){return mt=Object.assign||function(l){for(var a,c=1,f=arguments.length;c<f;c++){a=arguments[c];for(var h in a)Object.prototype.hasOwnProperty.call(a,h)&&(l[h]=a[h])}return l},mt.apply(this,arguments)};function jl(r,l,a){if(a||arguments.length===2)for(var c=0,f=l.length,h;c<f;c++)(h||!(c in l))&&(h||(h=Array.prototype.slice.call(l,0,c)),h[c]=l[c]);return r.concat(h||Array.prototype.slice.call(l))}var Ie="-ms-",Uo="-moz-",je="-webkit-",up="comm",zl="rule",Za="decl",rg="@import",cp="@keyframes",og="@layer",dp=Math.abs,eu=String.fromCharCode,Ba=Object.assign;function ig(r,l){return Xe(r,0)^45?(((l<<2^Xe(r,0))<<2^Xe(r,1))<<2^Xe(r,2))<<2^Xe(r,3):0}function fp(r){return r.trim()}function hn(r,l){return(r=l.exec(r))?r[0]:r}function he(r,l,a){return r.replace(l,a)}function ml(r,l,a){return r.indexOf(l,a)}function Xe(r,l){return r.charCodeAt(l)|0}function Mr(r,l,a){return r.slice(l,a)}function rn(r){return r.length}function pp(r){return r.length}function Mo(r,l){return l.push(r),r}function lg(r,l){return r.map(l).join("")}function df(r,l){return r.filter(function(a){return!hn(a,l)})}var Nl=1,Ur=1,hp=0,Ot=0,We=0,Qr="";function bl(r,l,a,c,f,h,m,y){return{value:r,root:l,parent:a,type:c,props:f,children:h,line:Nl,column:Ur,length:m,return:"",siblings:y}}function $n(r,l){return Ba(bl("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},l)}function $r(r){for(;r.root;)r=$n(r.root,{children:[r]});Mo(r,r.siblings)}function sg(){return We}function ag(){return We=Ot>0?Xe(Qr,--Ot):0,Ur--,We===10&&(Ur=1,Nl--),We}function Qt(){return We=Ot<hp?Xe(Qr,Ot++):0,Ur++,We===10&&(Ur=1,Nl++),We}function ur(){return Xe(Qr,Ot)}function gl(){return Ot}function Rl(r,l){return Mr(Qr,r,l)}function Ha(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ug(r){return Nl=Ur=1,hp=rn(Qr=r),Ot=0,[]}function cg(r){return Qr="",r}function za(r){return fp(Rl(Ot-1,Wa(r===91?r+2:r===40?r+1:r)))}function dg(r){for(;(We=ur())&&We<33;)Qt();return Ha(r)>2||Ha(We)>3?"":" "}function fg(r,l){for(;--l&&Qt()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Rl(r,gl()+(l<6&&ur()==32&&Qt()==32))}function Wa(r){for(;Qt();)switch(We){case r:return Ot;case 34:case 39:r!==34&&r!==39&&Wa(We);break;case 40:r===41&&Wa(r);break;case 92:Qt();break}return Ot}function pg(r,l){for(;Qt()&&r+We!==57;)if(r+We===84&&ur()===47)break;return"/*"+Rl(l,Ot-1)+"*"+eu(r===47?r:Qt())}function hg(r){for(;!Ha(ur());)Qt();return Rl(r,Ot)}function mg(r){return cg(vl("",null,null,null,[""],r=ug(r),0,[0],r))}function vl(r,l,a,c,f,h,m,y,x){for(var _=0,T=0,P=m,N=0,L=0,B=0,b=1,D=1,V=1,U=0,F="",H=f,oe=h,re=c,Z=F;D;)switch(B=U,U=Qt()){case 40:if(B!=108&&Xe(Z,P-1)==58){ml(Z+=he(za(U),"&","&\f"),"&\f",dp(_?y[_-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:Z+=za(U);break;case 9:case 10:case 13:case 32:Z+=dg(B);break;case 92:Z+=fg(gl()-1,7);continue;case 47:switch(ur()){case 42:case 47:Mo(gg(pg(Qt(),gl()),l,a,x),x);break;default:Z+="/"}break;case 123*b:y[_++]=rn(Z)*V;case 125*b:case 59:case 0:switch(U){case 0:case 125:D=0;case 59+T:V==-1&&(Z=he(Z,/\f/g,"")),L>0&&rn(Z)-P&&Mo(L>32?pf(Z+";",c,a,P-1,x):pf(he(Z," ","")+";",c,a,P-2,x),x);break;case 59:Z+=";";default:if(Mo(re=ff(Z,l,a,_,T,f,y,F,H=[],oe=[],P,h),h),U===123)if(T===0)vl(Z,l,re,re,H,h,P,y,oe);else switch(N===99&&Xe(Z,3)===110?100:N){case 100:case 108:case 109:case 115:vl(r,re,re,c&&Mo(ff(r,re,re,0,0,f,y,F,f,H=[],P,oe),oe),f,oe,P,y,c?H:oe);break;default:vl(Z,re,re,re,[""],oe,0,y,oe)}}_=T=L=0,b=V=1,F=Z="",P=m;break;case 58:P=1+rn(Z),L=B;default:if(b<1){if(U==123)--b;else if(U==125&&b++==0&&ag()==125)continue}switch(Z+=eu(U),U*b){case 38:V=T>0?1:(Z+="\f",-1);break;case 44:y[_++]=(rn(Z)-1)*V,V=1;break;case 64:ur()===45&&(Z+=za(Qt())),N=ur(),T=P=rn(F=Z+=hg(gl())),U++;break;case 45:B===45&&rn(Z)==2&&(b=0)}}return h}function ff(r,l,a,c,f,h,m,y,x,_,T,P){for(var N=f-1,L=f===0?h:[""],B=pp(L),b=0,D=0,V=0;b<c;++b)for(var U=0,F=Mr(r,N+1,N=dp(D=m[b])),H=r;U<B;++U)(H=fp(D>0?L[U]+" "+F:he(F,/&\f/g,L[U])))&&(x[V++]=H);return bl(r,l,a,f===0?zl:y,x,_,T,P)}function gg(r,l,a,c){return bl(r,l,a,up,eu(sg()),Mr(r,2,-2),0,c)}function pf(r,l,a,c,f){return bl(r,l,a,Za,Mr(r,0,c),Mr(r,c+1,-1),c,f)}function mp(r,l,a){switch(ig(r,l)){case 5103:return je+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return je+r+r;case 4789:return Uo+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return je+r+Uo+r+Ie+r+r;case 5936:switch(Xe(r,l+11)){case 114:return je+r+Ie+he(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return je+r+Ie+he(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return je+r+Ie+he(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return je+r+Ie+r+r;case 6165:return je+r+Ie+"flex-"+r+r;case 5187:return je+r+he(r,/(\w+).+(:[^]+)/,je+"box-$1$2"+Ie+"flex-$1$2")+r;case 5443:return je+r+Ie+"flex-item-"+he(r,/flex-|-self/g,"")+(hn(r,/flex-|baseline/)?"":Ie+"grid-row-"+he(r,/flex-|-self/g,""))+r;case 4675:return je+r+Ie+"flex-line-pack"+he(r,/align-content|flex-|-self/g,"")+r;case 5548:return je+r+Ie+he(r,"shrink","negative")+r;case 5292:return je+r+Ie+he(r,"basis","preferred-size")+r;case 6060:return je+"box-"+he(r,"-grow","")+je+r+Ie+he(r,"grow","positive")+r;case 4554:return je+he(r,/([^-])(transform)/g,"$1"+je+"$2")+r;case 6187:return he(he(he(r,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),r,"")+r;case 5495:case 3959:return he(r,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return he(he(r,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+je+r+r;case 4200:if(!hn(r,/flex-|baseline/))return Ie+"grid-column-align"+Mr(r,l)+r;break;case 2592:case 3360:return Ie+he(r,"template-","")+r;case 4384:case 3616:return a&&a.some(function(c,f){return l=f,hn(c.props,/grid-\w+-end/)})?~ml(r+(a=a[l].value),"span",0)?r:Ie+he(r,"-start","")+r+Ie+"grid-row-span:"+(~ml(a,"span",0)?hn(a,/\d+/):+hn(a,/\d+/)-+hn(r,/\d+/))+";":Ie+he(r,"-start","")+r;case 4896:case 4128:return a&&a.some(function(c){return hn(c.props,/grid-\w+-start/)})?r:Ie+he(he(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return he(r,/(.+)-inline(.+)/,je+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(r)-1-l>6)switch(Xe(r,l+1)){case 109:if(Xe(r,l+4)!==45)break;case 102:return he(r,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+Uo+(Xe(r,l+3)==108?"$3":"$2-$3"))+r;case 115:return~ml(r,"stretch",0)?mp(he(r,"stretch","fill-available"),l,a)+r:r}break;case 5152:case 5920:return he(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,h,m,y,x,_){return Ie+f+":"+h+_+(m?Ie+f+"-span:"+(y?x:+x-+h)+_:"")+r});case 4949:if(Xe(r,l+6)===121)return he(r,":",":"+je)+r;break;case 6444:switch(Xe(r,Xe(r,14)===45?18:11)){case 120:return he(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+(Xe(r,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Ie+"$2box$3")+r;case 100:return he(r,":",":"+Ie)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(r,"scroll-","scroll-snap-")+r}return r}function Cl(r,l){for(var a="",c=0;c<r.length;c++)a+=l(r[c],c,r,l)||"";return a}function vg(r,l,a,c){switch(r.type){case og:if(r.children.length)break;case rg:case Za:return r.return=r.return||r.value;case up:return"";case cp:return r.return=r.value+"{"+Cl(r.children,c)+"}";case zl:if(!rn(r.value=r.props.join(",")))return""}return rn(a=Cl(r.children,c))?r.return=r.value+"{"+a+"}":""}function yg(r){var l=pp(r);return function(a,c,f,h){for(var m="",y=0;y<l;y++)m+=r[y](a,c,f,h)||"";return m}}function xg(r){return function(l){l.root||(l=l.return)&&r(l)}}function wg(r,l,a,c){if(r.length>-1&&!r.return)switch(r.type){case Za:r.return=mp(r.value,r.length,a);return;case cp:return Cl([$n(r,{value:he(r.value,"@","@"+je)})],c);case zl:if(r.length)return lg(a=r.props,function(f){switch(hn(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$r($n(r,{props:[he(f,/:(read-\w+)/,":"+Uo+"$1")]})),$r($n(r,{props:[f]})),Ba(r,{props:df(a,c)});break;case"::placeholder":$r($n(r,{props:[he(f,/:(plac\w+)/,":"+je+"input-$1")]})),$r($n(r,{props:[he(f,/:(plac\w+)/,":"+Uo+"$1")]})),$r($n(r,{props:[he(f,/:(plac\w+)/,Ie+"input-$1")]})),$r($n(r,{props:[f]})),Ba(r,{props:df(a,c)});break}return""})}}var Sg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kt={},Br=typeof process<"u"&&kt!==void 0&&(kt.REACT_APP_SC_ATTR||kt.SC_ATTR)||"data-styled",gp="active",vp="data-styled-version",Il="6.1.18",tu=`/*!sc*/
`,El=typeof window<"u"&&typeof document<"u",kg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==""?kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.SC_DISABLE_SPEEDY!==void 0&&kt.SC_DISABLE_SPEEDY!==""&&kt.SC_DISABLE_SPEEDY!=="false"&&kt.SC_DISABLE_SPEEDY),Ll=Object.freeze([]),Hr=Object.freeze({});function jg(r,l,a){return a===void 0&&(a=Hr),r.theme!==a.theme&&r.theme||l||a.theme}var yp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Eg=/(^-|-$)/g;function hf(r){return r.replace(Cg,"-").replace(Eg,"")}var Pg=/(a)(d)/gi,ul=52,mf=function(r){return String.fromCharCode(r+(r>25?39:97))};function Va(r){var l,a="";for(l=Math.abs(r);l>ul;l=l/ul|0)a=mf(l%ul)+a;return(mf(l%ul)+a).replace(Pg,"$1-$2")}var Na,xp=5381,Fr=function(r,l){for(var a=l.length;a;)r=33*r^l.charCodeAt(--a);return r},wp=function(r){return Fr(xp,r)};function _g(r){return Va(wp(r)>>>0)}function Tg(r){return r.displayName||r.name||"Component"}function ba(r){return typeof r=="string"&&!0}var Sp=typeof Symbol=="function"&&Symbol.for,kp=Sp?Symbol.for("react.memo"):60115,zg=Sp?Symbol.for("react.forward_ref"):60112,Ng={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rg=((Na={})[zg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Na[kp]=jp,Na);function gf(r){return("type"in(l=r)&&l.type.$$typeof)===kp?jp:"$$typeof"in r?Rg[r.$$typeof]:Ng;var l}var Ig=Object.defineProperty,Lg=Object.getOwnPropertyNames,vf=Object.getOwnPropertySymbols,Dg=Object.getOwnPropertyDescriptor,Og=Object.getPrototypeOf,yf=Object.prototype;function Cp(r,l,a){if(typeof l!="string"){if(yf){var c=Og(l);c&&c!==yf&&Cp(r,c,a)}var f=Lg(l);vf&&(f=f.concat(vf(l)));for(var h=gf(r),m=gf(l),y=0;y<f.length;++y){var x=f[y];if(!(x in bg||a&&a[x]||m&&x in m||h&&x in h)){var _=Dg(l,x);try{Ig(r,x,_)}catch{}}}}return r}function Wr(r){return typeof r=="function"}function nu(r){return typeof r=="object"&&"styledComponentId"in r}function ar(r,l){return r&&l?"".concat(r," ").concat(l):r||l||""}function xf(r,l){if(r.length===0)return"";for(var a=r[0],c=1;c<r.length;c++)a+=r[c];return a}function Qo(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Qa(r,l,a){if(a===void 0&&(a=!1),!a&&!Qo(r)&&!Array.isArray(r))return l;if(Array.isArray(l))for(var c=0;c<l.length;c++)r[c]=Qa(r[c],l[c]);else if(Qo(l))for(var c in l)r[c]=Qa(r[c],l[c]);return r}function ru(r,l){Object.defineProperty(r,"toString",{value:l})}function Go(r){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var $g=function(){function r(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return r.prototype.indexOfGroup=function(l){for(var a=0,c=0;c<l;c++)a+=this.groupSizes[c];return a},r.prototype.insertRules=function(l,a){if(l>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,h=f;l>=h;)if((h<<=1)<0)throw Go(16,"".concat(l));this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(var m=f;m<h;m++)this.groupSizes[m]=0}for(var y=this.indexOfGroup(l+1),x=(m=0,a.length);m<x;m++)this.tag.insertRule(y,a[m])&&(this.groupSizes[l]++,y++)},r.prototype.clearGroup=function(l){if(l<this.length){var a=this.groupSizes[l],c=this.indexOfGroup(l),f=c+a;this.groupSizes[l]=0;for(var h=c;h<f;h++)this.tag.deleteRule(c)}},r.prototype.getGroup=function(l){var a="";if(l>=this.length||this.groupSizes[l]===0)return a;for(var c=this.groupSizes[l],f=this.indexOfGroup(l),h=f+c,m=f;m<h;m++)a+="".concat(this.tag.getRule(m)).concat(tu);return a},r}(),yl=new Map,Pl=new Map,xl=1,cl=function(r){if(yl.has(r))return yl.get(r);for(;Pl.has(xl);)xl++;var l=xl++;return yl.set(r,l),Pl.set(l,r),l},Ag=function(r,l){xl=l+1,yl.set(r,l),Pl.set(l,r)},Fg="style[".concat(Br,"][").concat(vp,'="').concat(Il,'"]'),Mg=new RegExp("^".concat(Br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ug=function(r,l,a){for(var c,f=a.split(","),h=0,m=f.length;h<m;h++)(c=f[h])&&r.registerName(l,c)},Bg=function(r,l){for(var a,c=((a=l.textContent)!==null&&a!==void 0?a:"").split(tu),f=[],h=0,m=c.length;h<m;h++){var y=c[h].trim();if(y){var x=y.match(Mg);if(x){var _=0|parseInt(x[1],10),T=x[2];_!==0&&(Ag(T,_),Ug(r,T,x[3]),r.getTag().insertRules(_,f)),f.length=0}else f.push(y)}}},wf=function(r){for(var l=document.querySelectorAll(Fg),a=0,c=l.length;a<c;a++){var f=l[a];f&&f.getAttribute(Br)!==gp&&(Bg(r,f),f.parentNode&&f.parentNode.removeChild(f))}};function Hg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ep=function(r){var l=document.head,a=r||l,c=document.createElement("style"),f=function(y){var x=Array.from(y.querySelectorAll("style[".concat(Br,"]")));return x[x.length-1]}(a),h=f!==void 0?f.nextSibling:null;c.setAttribute(Br,gp),c.setAttribute(vp,Il);var m=Hg();return m&&c.setAttribute("nonce",m),a.insertBefore(c,h),c},Wg=function(){function r(l){this.element=Ep(l),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var c=document.styleSheets,f=0,h=c.length;f<h;f++){var m=c[f];if(m.ownerNode===a)return m}throw Go(17)}(this.element),this.length=0}return r.prototype.insertRule=function(l,a){try{return this.sheet.insertRule(a,l),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},r.prototype.getRule=function(l){var a=this.sheet.cssRules[l];return a&&a.cssText?a.cssText:""},r}(),Vg=function(){function r(l){this.element=Ep(l),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(l,a){if(l<=this.length&&l>=0){var c=document.createTextNode(a);return this.element.insertBefore(c,this.nodes[l]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},r.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},r}(),Qg=function(){function r(l){this.rules=[],this.length=0}return r.prototype.insertRule=function(l,a){return l<=this.length&&(this.rules.splice(l,0,a),this.length++,!0)},r.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},r.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},r}(),Sf=El,Yg={isServer:!El,useCSSOMInjection:!kg},Pp=function(){function r(l,a,c){l===void 0&&(l=Hr),a===void 0&&(a={});var f=this;this.options=mt(mt({},Yg),l),this.gs=a,this.names=new Map(c),this.server=!!l.isServer,!this.server&&El&&Sf&&(Sf=!1,wf(this)),ru(this,function(){return function(h){for(var m=h.getTag(),y=m.length,x="",_=function(P){var N=function(V){return Pl.get(V)}(P);if(N===void 0)return"continue";var L=h.names.get(N),B=m.getGroup(P);if(L===void 0||!L.size||B.length===0)return"continue";var b="".concat(Br,".g").concat(P,'[id="').concat(N,'"]'),D="";L!==void 0&&L.forEach(function(V){V.length>0&&(D+="".concat(V,","))}),x+="".concat(B).concat(b,'{content:"').concat(D,'"}').concat(tu)},T=0;T<y;T++)_(T);return x}(f)})}return r.registerId=function(l){return cl(l)},r.prototype.rehydrate=function(){!this.server&&El&&wf(this)},r.prototype.reconstructWithOptions=function(l,a){return a===void 0&&(a=!0),new r(mt(mt({},this.options),l),this.gs,a&&this.names||void 0)},r.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(l=function(a){var c=a.useCSSOMInjection,f=a.target;return a.isServer?new Qg(f):c?new Wg(f):new Vg(f)}(this.options),new $g(l)));var l},r.prototype.hasNameForId=function(l,a){return this.names.has(l)&&this.names.get(l).has(a)},r.prototype.registerName=function(l,a){if(cl(l),this.names.has(l))this.names.get(l).add(a);else{var c=new Set;c.add(a),this.names.set(l,c)}},r.prototype.insertRules=function(l,a,c){this.registerName(l,a),this.getTag().insertRules(cl(l),c)},r.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},r.prototype.clearRules=function(l){this.getTag().clearGroup(cl(l)),this.clearNames(l)},r.prototype.clearTag=function(){this.tag=void 0},r}(),Kg=/&/g,Gg=/^\s*\/\/.*$/gm;function _p(r,l){return r.map(function(a){return a.type==="rule"&&(a.value="".concat(l," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(l," ")),a.props=a.props.map(function(c){return"".concat(l," ").concat(c)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=_p(a.children,l)),a})}function qg(r){var l,a,c,f=Hr,h=f.options,m=h===void 0?Hr:h,y=f.plugins,x=y===void 0?Ll:y,_=function(N,L,B){return B.startsWith(a)&&B.endsWith(a)&&B.replaceAll(a,"").length>0?".".concat(l):N},T=x.slice();T.push(function(N){N.type===zl&&N.value.includes("&")&&(N.props[0]=N.props[0].replace(Kg,a).replace(c,_))}),m.prefix&&T.push(wg),T.push(vg);var P=function(N,L,B,b){L===void 0&&(L=""),B===void 0&&(B=""),b===void 0&&(b="&"),l=b,a=L,c=new RegExp("\\".concat(a,"\\b"),"g");var D=N.replace(Gg,""),V=mg(B||L?"".concat(B," ").concat(L," { ").concat(D," }"):D);m.namespace&&(V=_p(V,m.namespace));var U=[];return Cl(V,yg(T.concat(xg(function(F){return U.push(F)})))),U};return P.hash=x.length?x.reduce(function(N,L){return L.name||Go(15),Fr(N,L.name)},xp).toString():"",P}var Jg=new Pp,Ya=qg(),Tp=gt.createContext({shouldForwardProp:void 0,styleSheet:Jg,stylis:Ya});Tp.Consumer;gt.createContext(void 0);function kf(){return E.useContext(Tp)}var Xg=function(){function r(l,a){var c=this;this.inject=function(f,h){h===void 0&&(h=Ya);var m=c.name+h.hash;f.hasNameForId(c.id,m)||f.insertRules(c.id,m,h(c.rules,m,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=a,ru(this,function(){throw Go(12,String(c.name))})}return r.prototype.getName=function(l){return l===void 0&&(l=Ya),this.name+l.hash},r}(),Zg=function(r){return r>="A"&&r<="Z"};function jf(r){for(var l="",a=0;a<r.length;a++){var c=r[a];if(a===1&&c==="-"&&r[0]==="-")return r;Zg(c)?l+="-"+c.toLowerCase():l+=c}return l.startsWith("ms-")?"-"+l:l}var zp=function(r){return r==null||r===!1||r===""},Np=function(r){var l,a,c=[];for(var f in r){var h=r[f];r.hasOwnProperty(f)&&!zp(h)&&(Array.isArray(h)&&h.isCss||Wr(h)?c.push("".concat(jf(f),":"),h,";"):Qo(h)?c.push.apply(c,jl(jl(["".concat(f," {")],Np(h),!1),["}"],!1)):c.push("".concat(jf(f),": ").concat((l=f,(a=h)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||l in Sg||l.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return c};function cr(r,l,a,c){if(zp(r))return[];if(nu(r))return[".".concat(r.styledComponentId)];if(Wr(r)){if(!Wr(h=r)||h.prototype&&h.prototype.isReactComponent||!l)return[r];var f=r(l);return cr(f,l,a,c)}var h;return r instanceof Xg?a?(r.inject(a,c),[r.getName(c)]):[r]:Qo(r)?Np(r):Array.isArray(r)?Array.prototype.concat.apply(Ll,r.map(function(m){return cr(m,l,a,c)})):[r.toString()]}function e1(r){for(var l=0;l<r.length;l+=1){var a=r[l];if(Wr(a)&&!nu(a))return!1}return!0}var t1=wp(Il),n1=function(){function r(l,a,c){this.rules=l,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&e1(l),this.componentId=a,this.baseHash=Fr(t1,a),this.baseStyle=c,Pp.registerId(a)}return r.prototype.generateAndInjectStyles=function(l,a,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,a,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))f=ar(f,this.staticRulesId);else{var h=xf(cr(this.rules,l,a,c)),m=Va(Fr(this.baseHash,h)>>>0);if(!a.hasNameForId(this.componentId,m)){var y=c(h,".".concat(m),void 0,this.componentId);a.insertRules(this.componentId,m,y)}f=ar(f,m),this.staticRulesId=m}else{for(var x=Fr(this.baseHash,c.hash),_="",T=0;T<this.rules.length;T++){var P=this.rules[T];if(typeof P=="string")_+=P;else if(P){var N=xf(cr(P,l,a,c));x=Fr(x,N+T),_+=N}}if(_){var L=Va(x>>>0);a.hasNameForId(this.componentId,L)||a.insertRules(this.componentId,L,c(_,".".concat(L),void 0,this.componentId)),f=ar(f,L)}}return f},r}(),bp=gt.createContext(void 0);bp.Consumer;var Ra={};function r1(r,l,a){var c=nu(r),f=r,h=!ba(r),m=l.attrs,y=m===void 0?Ll:m,x=l.componentId,_=x===void 0?function(H,oe){var re=typeof H!="string"?"sc":hf(H);Ra[re]=(Ra[re]||0)+1;var Z="".concat(re,"-").concat(_g(Il+re+Ra[re]));return oe?"".concat(oe,"-").concat(Z):Z}(l.displayName,l.parentComponentId):x,T=l.displayName,P=T===void 0?function(H){return ba(H)?"styled.".concat(H):"Styled(".concat(Tg(H),")")}(r):T,N=l.displayName&&l.componentId?"".concat(hf(l.displayName),"-").concat(l.componentId):l.componentId||_,L=c&&f.attrs?f.attrs.concat(y).filter(Boolean):y,B=l.shouldForwardProp;if(c&&f.shouldForwardProp){var b=f.shouldForwardProp;if(l.shouldForwardProp){var D=l.shouldForwardProp;B=function(H,oe){return b(H,oe)&&D(H,oe)}}else B=b}var V=new n1(a,N,c?f.componentStyle:void 0);function U(H,oe){return function(re,Z,Y){var ee=re.attrs,ve=re.componentStyle,me=re.defaultProps,fe=re.foldedComponentIds,Pe=re.styledComponentId,_e=re.target,lt=gt.useContext(bp),Qe=kf(),Ce=re.shouldForwardProp||Qe.shouldForwardProp,M=jg(Z,lt,me)||Hr,q=function(pe,ue,we){for(var de,ye=mt(mt({},ue),{className:void 0,theme:we}),Be=0;Be<pe.length;Be+=1){var tt=Wr(de=pe[Be])?de(ye):de;for(var vt in tt)ye[vt]=vt==="className"?ar(ye[vt],tt[vt]):vt==="style"?mt(mt({},ye[vt]),tt[vt]):tt[vt]}return ue.className&&(ye.className=ar(ye.className,ue.className)),ye}(ee,Z,M),W=q.as||_e,w={};for(var z in q)q[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&q.theme===M||(z==="forwardedAs"?w.as=q.forwardedAs:Ce&&!Ce(z,W)||(w[z]=q[z]));var ae=function(pe,ue){var we=kf(),de=pe.generateAndInjectStyles(ue,we.styleSheet,we.stylis);return de}(ve,q),se=ar(fe,Pe);return ae&&(se+=" "+ae),q.className&&(se+=" "+q.className),w[ba(W)&&!yp.has(W)?"class":"className"]=se,Y&&(w.ref=Y),E.createElement(W,w)}(F,H,oe)}U.displayName=P;var F=gt.forwardRef(U);return F.attrs=L,F.componentStyle=V,F.displayName=P,F.shouldForwardProp=B,F.foldedComponentIds=c?ar(f.foldedComponentIds,f.styledComponentId):"",F.styledComponentId=N,F.target=c?f.target:r,Object.defineProperty(F,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(H){this._foldedDefaultProps=c?function(oe){for(var re=[],Z=1;Z<arguments.length;Z++)re[Z-1]=arguments[Z];for(var Y=0,ee=re;Y<ee.length;Y++)Qa(oe,ee[Y],!0);return oe}({},f.defaultProps,H):H}}),ru(F,function(){return".".concat(F.styledComponentId)}),h&&Cp(F,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),F}function Cf(r,l){for(var a=[r[0]],c=0,f=l.length;c<f;c+=1)a.push(l[c],r[c+1]);return a}var Ef=function(r){return Object.assign(r,{isCss:!0})};function o1(r){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];if(Wr(r)||Qo(r))return Ef(cr(Cf(Ll,jl([r],l,!0))));var c=r;return l.length===0&&c.length===1&&typeof c[0]=="string"?cr(c):Ef(cr(Cf(c,l)))}function Ka(r,l,a){if(a===void 0&&(a=Hr),!l)throw Go(1,l);var c=function(f){for(var h=[],m=1;m<arguments.length;m++)h[m-1]=arguments[m];return r(l,a,o1.apply(void 0,jl([f],h,!1)))};return c.attrs=function(f){return Ka(r,l,mt(mt({},a),{attrs:Array.prototype.concat(a.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return Ka(r,l,mt(mt({},a),f))},c}var Rp=function(r){return Ka(r1,r)},S=Rp;yp.forEach(function(r){S[r]=Rp(r)});const i1=S.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(315deg, #ff7f50 0%,rgb(255, 157, 53) 50%, #40e0d0 100%);
`,l1=S.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  height: 100vh;
`,s1=S.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`,a1=S.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  white-space: nowrap;
`,u1=S.span`
  font-size: 3rem;
`,Pf=S.p`
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
`,c1=S.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`,d1=S.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,f1=S.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,_f=S.div`
  margin-bottom: 1.5rem;
`,Tf=S.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`,p1=S.div`
  position: relative;
`,zf=S.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
  }

  &::placeholder {
    color: #999;
  }
`,h1=S.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;

  &:hover {
    color: #333;
  }
`,m1=S.button`
  width: 100%;
  padding: 0.875rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 1rem;

  background-color: ${r=>r.isComplete?"#ff7f50":"#999"};
  color: white;

  &:hover {
    background-color: ${r=>r.isComplete?"#ff6b35":"#888"};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,g1=S.button`
  background: none;
  border: none;
  color: #666;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.875rem;
  display: block;
  margin: 0 auto;

  &:hover {
    color: #333;
  }
`,v1=S.button`
  width: 100%;
  max-width: 400px;
  padding: 0.875rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.2s,
    background-color 0.2s;

  &:hover {
    border-color: #ccc;
    background-color: #f9f9f9;
  }
`,y1=S.div`
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,x1=S.div`
  background-color: #efe;
  color: #3c3;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,Nf=()=>{const r=mn(),[l,a]=E.useState({email:"",password:""}),[c,f]=E.useState(!1),[h,m]=E.useState(""),[y,x]=E.useState(""),[_,T]=E.useState(!1);E.useEffect(()=>(localStorage.removeItem("token"),document.body.classList.add("auth-page"),()=>{document.body.classList.remove("auth-page")}),[]);const P=V=>{const{name:U,value:F}=V.target;a(H=>({...H,[U]:F})),h&&m("")},N=V=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V),L=()=>!l.email||!l.password?(m("Email and password are required"),!1):N(l.email)?l.password.length<6?(m("Password must be at least 6 characters long"),!1):!0:(m("Please enter a valid email address"),!1),B=()=>l.email.trim()!==""&&l.password.trim()!==""&&N(l.email)&&l.password.length>=6,b=async V=>{if(V.preventDefault(),m(""),x(""),!!L()){T(!0);try{const U=await fetch("http://localhost:8080/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.email,password:l.password})});if(U.ok){const F=await U.json();localStorage.setItem("token",F.token),localStorage.setItem("user",JSON.stringify(F.user)),x("Login successful!"),setTimeout(()=>{r("/dashboard")},1e3)}else{const F=await U.json();m(F.message||"Login failed. Please check your credentials.")}}catch(U){console.error("Login error:",U),m("Unable to connect to server. Please try again later.")}finally{T(!1)}}},D=()=>{m(""),x("Password reset functionality coming soon.")};return u.jsx(i1,{children:u.jsxs(l1,{children:[u.jsxs(s1,{children:[u.jsxs(a1,{children:[u.jsx(u1,{children:"🏠"}),"Home Control Hub"]}),u.jsx(Pf,{children:"Welcome back!"}),u.jsx(Pf,{children:"Please log in to access your smart home dashboard."})]}),u.jsxs(c1,{children:[u.jsxs(d1,{children:[u.jsx(f1,{children:"Login"}),h&&u.jsx(y1,{children:h}),y&&u.jsx(x1,{children:y}),u.jsxs("form",{onSubmit:b,children:[u.jsxs(_f,{children:[u.jsx(Tf,{htmlFor:"email",children:"Your email"}),u.jsx(zf,{type:"email",id:"email",name:"email",value:l.email,onChange:P,placeholder:"Enter your email",required:!0})]}),u.jsxs(_f,{children:[u.jsxs(Tf,{htmlFor:"password",children:["Your password",u.jsxs(h1,{type:"button",onClick:()=>f(!c),children:[c?u.jsx(Wo,{}):u.jsx(Vo,{}),u.jsx("span",{children:"Show"})]})]}),u.jsx(p1,{children:u.jsx(zf,{type:c?"text":"password",id:"password",name:"password",value:l.password,onChange:P,placeholder:"Enter your password",required:!0})})]}),u.jsx(m1,{type:"submit",disabled:_,isComplete:B(),children:_?"Please wait...":"Log in"}),u.jsx(g1,{onClick:D,children:"Forget your password?"})]})]}),u.jsx(v1,{as:lp,to:"/register",children:"Create an account"})]})]})})},w1=S.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(315deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
`,S1=S.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  height: 100vh;
`,k1=S.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`,j1=S.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  white-space: nowrap;
`,C1=S.span`
  font-size: 3rem;
`,bf=S.p`
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
`,E1=S.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`,P1=S.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,_1=S.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,Lo=S.div`
  margin-bottom: 1.5rem;
`,Do=S.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`,Rf=S.div`
  position: relative;
`,Oo=S.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
  }

  &::placeholder {
    color: #999;
  }
`,If=S.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;

  &:hover {
    color: #333;
  }
`,T1=S.button`
  width: 100%;
  padding: 0.875rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 1rem;

  background-color: ${r=>r.isComplete?"#ff7f50":"#999"};
  color: white;

  &:hover {
    background-color: ${r=>r.isComplete?"#ff6b35":"#888"};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,z1=S.button`
  width: 100%;
  max-width: 400px;
  padding: 0.875rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.2s,
    background-color 0.2s;

  &:hover {
    border-color: #ccc;
    background-color: #f9f9f9;
  }
`,N1=S.div`
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,b1=S.div`
  background-color: #efe;
  color: #3c3;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,R1=()=>{const r=mn(),[l,a]=E.useState({fullName:"",username:"",email:"",password:"",confirmPassword:""}),[c,f]=E.useState(!1),[h,m]=E.useState(!1),[y,x]=E.useState(""),[_,T]=E.useState(""),[P,N]=E.useState(!1);E.useEffect(()=>(document.body.classList.add("auth-page"),()=>{document.body.classList.remove("auth-page")}),[]);const L=U=>{const{name:F,value:H}=U.target;a(oe=>({...oe,[F]:H})),y&&x("")},B=U=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(U),b=()=>!l.fullName||!l.username||!l.email||!l.password||!l.confirmPassword?(x("All fields are required"),!1):B(l.email)?l.password.length<6?(x("Password must be at least 6 characters long"),!1):l.password!==l.confirmPassword?(x("Passwords do not match"),!1):!0:(x("Please enter a valid email address"),!1),D=()=>l.fullName.trim()!==""&&l.username.trim()!==""&&l.email.trim()!==""&&l.password.trim()!==""&&l.confirmPassword.trim()!==""&&B(l.email)&&l.password.length>=6&&l.password===l.confirmPassword,V=async U=>{if(U.preventDefault(),x(""),T(""),!!b()){N(!0);try{const F=await fetch("http://localhost:8080/api/v1/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:l.username,email:l.email,password:l.password})});if(F.ok){const H=await F.json();T("Registration successful! Redirecting to login..."),setTimeout(()=>{r("/login")},2e3)}else{const H=await F.json();x(H.message||"Registration failed. Please try again.")}}catch(F){console.error("Registration error:",F),x("Unable to connect to server. Please try again later.")}finally{N(!1)}}};return u.jsx(w1,{children:u.jsxs(S1,{children:[u.jsxs(k1,{children:[u.jsxs(j1,{children:[u.jsx(C1,{children:"🏠"}),"Home Control Hub"]}),u.jsx(bf,{children:"Welcome!"}),u.jsx(bf,{children:"Register to access your smart home dashboard."})]}),u.jsxs(E1,{children:[u.jsxs(P1,{children:[u.jsx(_1,{children:"Create an account"}),y&&u.jsx(N1,{children:y}),_&&u.jsx(b1,{children:_}),u.jsxs("form",{onSubmit:V,children:[u.jsxs(Lo,{children:[u.jsx(Do,{htmlFor:"fullName",children:"Full name"}),u.jsx(Oo,{type:"text",id:"fullName",name:"fullName",value:l.fullName,onChange:L,placeholder:"Enter your full name",required:!0})]}),u.jsxs(Lo,{children:[u.jsx(Do,{htmlFor:"username",children:"Username"}),u.jsx(Oo,{type:"text",id:"username",name:"username",value:l.username,onChange:L,placeholder:"Enter your username",required:!0})]}),u.jsxs(Lo,{children:[u.jsx(Do,{htmlFor:"email",children:"E-mail"}),u.jsx(Oo,{type:"email",id:"email",name:"email",value:l.email,onChange:L,placeholder:"Enter your email",required:!0})]}),u.jsxs(Lo,{children:[u.jsxs(Do,{htmlFor:"password",children:["Password",u.jsxs(If,{type:"button",onClick:()=>f(!c),children:[c?u.jsx(Wo,{}):u.jsx(Vo,{}),u.jsx("span",{children:"Show"})]})]}),u.jsx(Rf,{children:u.jsx(Oo,{type:c?"text":"password",id:"password",name:"password",value:l.password,onChange:L,placeholder:"Enter your password",required:!0})})]}),u.jsxs(Lo,{children:[u.jsxs(Do,{htmlFor:"confirmPassword",children:["Confirm password",u.jsxs(If,{type:"button",onClick:()=>m(!h),children:[h?u.jsx(Wo,{}):u.jsx(Vo,{}),u.jsx("span",{children:"Show"})]})]}),u.jsx(Rf,{children:u.jsx(Oo,{type:h?"text":"password",id:"confirmPassword",name:"confirmPassword",value:l.confirmPassword,onChange:L,placeholder:"Confirm your password",required:!0})})]}),u.jsx(T1,{type:"submit",disabled:P,isComplete:D(),children:P?"Please wait...":"Register"})]})]}),u.jsx(z1,{as:lp,to:"/login",children:"Login"})]})]})})},zt=S.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`,Nt=S.header`
  background: linear-gradient(270deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`,bt=S.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Rt=S.span`
  font-size: 1.5rem;
`,It=S.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`,Lt=S.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,ie=S.button`
  background: ${({selected:r})=>r?"rgba(255,255,255,0.2)":"none"};
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.5s, box-shadow 1s cubic-bezier(.4,2,.3,1), transform 1s cubic-bezier(.4,2,.3,1);
  box-shadow: ${({selected:r})=>r?"0 4px 16px 0 rgba(0,0,0,0.10)":"none"};
  z-index: 1;

  &:hover {
    background-color: ${({selected:r})=>r?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.15)"};
    box-shadow: ${({selected:r})=>r?"0 4px 16px 0 rgba(0,0,0,0.10)":"0 8px 24px 0 rgba(0,0,0,0.18)"};
    transform: ${({selected:r})=>r?"none":"translateY(-4px) scale(1.04)"};
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`,Dt=S.button`
  background: none;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`,on=S.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,ou=S.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;
  font-weight: 600;
`,Ia=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`,La=S.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,Ga=S.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`,Lf=S.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
`,Df=S.thead`
  background-color: #f8f9fa;
`,$o=S.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`,Ae=S.td`
  padding: 1.25rem;
  text-align: center;
  color: #333;
  font-size: 0.875rem;

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }

  &[as="th"] {
    font-weight: 600;
    color: #666;
    background-color: #f8f9fa;
    text-align: center;
  }
`;S.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  background-color: ${r=>r.status==="On"?"#28a745":"#dc3545"};
`;const Of=S.button`
  background-color: #ff7f50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff6b35;
  }
`,Ip=S.button`
  width: 44px;
  height: 24px;
  border-radius: 12px;
  border: none;
  background: ${({checked:r})=>r?"#28a745":"#dc3545"};
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  outline: none;
  margin-left: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: ${({checked:r})=>r?"22px":"2px"};
    top: 2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    transition: left 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  }
`,I1=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.125rem;
  color: #666;
  font-weight: 500;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid #e9ecef;
    border-top: 2px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 0.75rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,L1=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  div {
    text-align: center;
    max-width: 400px;

    h3 {
      color: #dc3545;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      color: #666;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }

    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`,D1=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 3rem 2rem;
  text-align: center;

  h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    max-width: 400px;
  }

  ${Ga} {
    margin-top: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  &::before {
    content: "📱";
    font-size: 4rem;
    margin-bottom: 1.5rem;
    opacity: 0.6;
  }
`,O1=S.div`
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 123, 255, 0.1);
`,$1=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,A1=S.div`
  flex: 1;
`,F1=S.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: white;
`,M1=S.p`
  font-size: 1rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
`,U1=S.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    align-self: flex-end;
  }
`,B1=()=>{const r=mn(),[l,a]=E.useState([]),[c,f]=E.useState([]),[h,m]=E.useState(!0),[y,x]=E.useState(null),[_,T]=E.useState(null),[P,N]=E.useState(!1),[L,B]=E.useState(null);E.useEffect(()=>{document.body.classList.remove("auth-page");const Y=localStorage.getItem("user");if(Y)try{const ee=JSON.parse(Y);T(ee.role),B(ee),!localStorage.getItem(`welcomed_${ee.id}`)&&ee.role==="STANDARD_USER"&&N(!0)}catch(ee){console.error("Error parsing user data:",ee)}},[]),E.useEffect(()=>{_!==null&&(async()=>{try{const ee=localStorage.getItem("token");if(!ee){r("/login");return}const ve=await fetch("http://localhost:8080/api/v1/devices",{method:"GET",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"}});if(ve.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),r("/login");return}if(!ve.ok)throw new Error(`HTTP error! status: ${ve.status}`);const me=await ve.json();if(a(me),_==="STANDARD_USER"){const fe=await fetch("http://localhost:8080/api/v1/notifications",{method:"GET",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"}});if(fe.ok){const Pe=await fe.json();f(Pe)}}}catch(ee){console.error("Error fetching data:",ee),x("Failed to load data. Please try again.")}finally{m(!1)}})()},[r,_]);const b=_==="ADMIN",D=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),r("/login")},V=()=>{r("/add-device")},U=Y=>{r(`/device/${Y}`)},F=async Y=>{try{const ee=localStorage.getItem("token");if(!ee){r("/login");return}const ve=l.find(Pe=>Pe.id===Y);if(!ve)return;const me=!ve.status;if(a(Pe=>Pe.map(_e=>_e.id===Y?{..._e,status:me}:_e)),!(await fetch(`http://localhost:8080/api/v1/devices/${Y}/status`,{method:"PUT",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"},body:JSON.stringify({status:me})})).ok)throw a(Pe=>Pe.map(_e=>_e.id===Y?{..._e,status:!me}:_e)),new Error("Failed to update device status");localStorage.setItem(`device_updated_${Y}`,Date.now().toString()),setTimeout(()=>{localStorage.removeItem(`device_updated_${Y}`)},1e3)}catch(ee){console.error("Error toggling device status:",ee)}},H=async Y=>{try{const ee=localStorage.getItem("token");if(!ee){r("/login");return}if(f(me=>me.map(fe=>fe.id===Y?{...fe,read:!0}:fe)),!(await fetch(`http://localhost:8080/api/v1/notifications/${Y}/read`,{method:"PUT",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"}})).ok)throw f(me=>me.map(fe=>fe.id===Y?{...fe,read:!1}:fe)),new Error("Failed to mark notification as read")}catch(ee){console.error("Error marking notification as read:",ee)}},oe=()=>{L&&(localStorage.setItem(`welcomed_${L.id}`,"true"),N(!1))},re=Y=>{if(!Y)return"Unknown";switch(Y){case"DEVICE_ADDED":return"Device added";case"WELCOME":return"Welcome";case"CRITICAL":return"Critical";case"SYSTEM":return"System";case"ADMIN":return"Admin";default:return Y.toLowerCase().replace(/_/g," ")}},Z=Y=>{const ee=new Date(Y),me=Math.floor((new Date().getTime()-ee.getTime())/(1e3*60*60));return me<1?"Just now":me<24?`${me}h ago`:`${Math.floor(me/24)}d ago`};return h?u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{selected:!0,onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:D,children:"Logout"})]})]}),u.jsx(I1,{children:"Loading your devices..."})]}):y?u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{selected:!0,onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:D,children:"Logout"})]})]}),u.jsx(L1,{children:u.jsxs("div",{children:[u.jsx("h3",{children:"Oops! Something went wrong"}),u.jsx("p",{children:y}),u.jsx("button",{onClick:()=>window.location.reload(),children:"Try Again"})]})})]}):u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{selected:!0,onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:D,children:"Logout"})]})]}),u.jsxs(on,{children:[P&&L&&u.jsx(O1,{children:u.jsxs($1,{children:[u.jsxs(A1,{children:[u.jsxs(F1,{children:["Welcome to Home Control Hub, ",L.username,"! 🎉"]}),u.jsx(M1,{children:"You can now manage and monitor all your smart devices from this dashboard. Add your devices, check their status, and receive important notifications all in one place."})]}),u.jsx(U1,{onClick:oe,children:"Got it, thanks!"})]})}),l.length===0?u.jsxs(u.Fragment,{children:[u.jsxs(Ia,{children:[u.jsx(La,{children:b?"System Overview":"Interactive dashboard"}),!b&&u.jsx("div",{})]}),u.jsx(D1,{children:b?u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"No devices in the system"}),u.jsx("p",{children:"There are currently no devices registered in the Home Control Hub system. Users can add devices to start monitoring and controlling them."})]}):u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"No devices found"}),u.jsx("p",{children:"You haven't added any devices yet. Get started by adding your first smart device!"}),u.jsx(Ga,{onClick:V,children:"Add your first device"})]})})]}):u.jsxs(u.Fragment,{children:[u.jsxs(Ia,{children:[u.jsx(La,{children:b?"All System Devices":"Your Devices"}),!b&&u.jsx(Ga,{onClick:V,children:"Add Device"})]}),u.jsxs(Lf,{children:[u.jsx(Df,{children:u.jsxs($o,{children:[u.jsx(Ae,{as:"th",children:"Device name"}),u.jsx(Ae,{as:"th",children:"ID"}),u.jsx(Ae,{as:"th",children:"Type"}),u.jsx(Ae,{as:"th",children:"Location"}),u.jsx(Ae,{as:"th",children:"Status"}),u.jsx(Ae,{as:"th",children:"Actions"})]})}),u.jsx("tbody",{children:l.map(Y=>u.jsxs($o,{children:[u.jsx(Ae,{children:Y.name}),u.jsx(Ae,{children:Y.id}),u.jsx(Ae,{children:Y.type}),u.jsx(Ae,{children:Y.location}),u.jsx(Ae,{children:b?u.jsx("span",{style:{color:Y.status?"#4CAF50":"#f44336",fontWeight:"bold"},children:Y.status?"ON":"OFF"}):u.jsx(Ip,{checked:Y.status,onClick:()=>F(Y.id),"aria-label":`Toggle ${Y.name}`})}),u.jsx(Ae,{children:u.jsx(Of,{onClick:()=>U(Y.id),children:b?"View Details":"Details"})})]},Y.id))})]})]}),!b&&u.jsxs(u.Fragment,{children:[u.jsx(Ia,{style:{marginTop:"3rem"},children:u.jsx(La,{children:"Your notifications"})}),u.jsxs(Lf,{children:[u.jsx(Df,{children:u.jsxs($o,{children:[u.jsx(Ae,{as:"th",children:"Message"}),u.jsx(Ae,{as:"th",children:"Type"}),u.jsx(Ae,{as:"th",children:"Time"}),u.jsx(Ae,{as:"th",children:"Status"}),u.jsx(Ae,{as:"th",children:"Actions"})]})}),u.jsx("tbody",{children:c.length===0?u.jsx($o,{children:u.jsx(Ae,{colSpan:5,style:{textAlign:"center",padding:"2rem",color:"#666"},children:"No notifications yet. You'll see important updates about your devices here."})}):c.map(Y=>u.jsxs($o,{children:[u.jsx(Ae,{style:{fontWeight:Y.read?"normal":"bold",color:Y.read?"#666":"#333"},children:Y.message}),u.jsx(Ae,{style:{textTransform:"capitalize"},children:re(Y.type)}),u.jsx(Ae,{children:Z(Y.createdAt)}),u.jsx(Ae,{children:u.jsx("span",{style:{color:Y.read?"#4CAF50":"#ff9800",fontWeight:"bold",fontSize:"0.8rem"},children:Y.read?"READ":"UNREAD"})}),u.jsx(Ae,{children:!Y.read&&u.jsx(Of,{onClick:()=>H(Y.id),children:"Mark as Read"})})]},Y.id))})]})]})]})]})},H1=S.div`
  max-width: 700px;
  margin: 0 auto;
`,W1=S.div`
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background: #fff;
`,V1=S.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.25rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({isOpen:r})=>r?"1px solid #eee":"none"};
  border-radius: ${({isOpen:r})=>r?"8px 8px 0 0":"8px"};
  transition: background 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`,Q1=S.span`
  font-size: 1.5rem;
  margin-left: 12px;
  transition: transform 0.3s;
  transform: ${({isOpen:r})=>"rotate(0deg)"};
`,Y1=S.div`
  max-height: ${({isOpen:r})=>r?"200px":"0"};
  opacity: ${({isOpen:r})=>r?"1":"0"};
  overflow: hidden;
  transition: max-height 0.8s cubic-bezier(0.4, 2, 0.3, 1), opacity 0.6s;
  padding: ${({isOpen:r})=>r?"1.25rem 1.5rem":"0 1.5rem"};
  font-size: 1rem;
  color: #444;
  background: #fafbfc;
  border-radius: 0 0 8px 8px;
  border-top: ${({isOpen:r})=>r?"1px solid #eee":"none"};
`,K1=[{question:"What is Home Control Hub?",answer:"Home Control Hub is a platform that allows you to manage and monitor your smart home devices from a single dashboard."},{question:"How do I add a new device?",answer:"Go to the Dashboard page and click on 'Add a device'. Follow the instructions to connect your new device."},{question:"Is my data secure?",answer:"Yes, we use industry-standard encryption and security practices to keep your data safe."},{question:"Can I control my devices remotely?",answer:"Absolutely! As long as you have an internet connection, you can control your devices from anywhere."},{question:"Who can I contact for support?",answer:"You can reach our support team via the 'Support' link in the header navigation."},{question:"How do I reset my password?",answer:"Go to the login page and click on 'Forget your password?'. Follow the instructions to reset your password."}],G1=()=>{const[r,l]=E.useState([]),a=mn(),c=h=>{l(m=>m.includes(h)?m.filter(y=>y!==h):[...m,h])},f=()=>{localStorage.removeItem("token"),a("/login")};return u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{onClick:()=>a("/profile"),children:"Profile"}),u.jsx(ie,{onClick:()=>a("/dashboard"),children:"Dashboard"}),u.jsx(ie,{selected:!0,onClick:()=>a("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>a("/support"),children:"Support"}),u.jsx(Dt,{onClick:f,children:"Logout"})]})]}),u.jsxs(on,{children:[u.jsx(ou,{children:"Frequently Asked Questions"}),u.jsx(H1,{children:K1.map((h,m)=>{const y=r.includes(m);return u.jsxs(W1,{children:[u.jsxs(V1,{onClick:()=>c(m),isOpen:y,"aria-expanded":y,children:[h.question,u.jsx(Q1,{isOpen:y,children:y?"−":"+"})]}),u.jsx(Y1,{isOpen:y,children:y&&h.answer})]},m)})})]})]})},q1=S.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Da=S.div`
  display: flex;
  flex-direction: column;
`,Oa=S.label`
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: #333;
`,J1=S.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`,X1=S.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  margin-top: 8px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`,Z1=S.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`,ev=S.input`
  font-size: 1rem;
  color: #333;

  &::-webkit-file-upload-button {
    background: linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 0.9rem;
  }
`,tv=S.ul`
  margin-top: 8px;
  font-size: 0.95rem;
  color: #555;
  list-style-type: disc;
  padding-left: 1.5rem;
`,nv=S.button`
  background: ${({disabled:r})=>r?"#ccc":"linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: ${({disabled:r})=>r?"not-allowed":"pointer"};
  margin-top: 8px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    transform: ${({disabled:r})=>r?"none":"translateY(-2px)"};
  }

  &:active {
    transform: ${({disabled:r})=>r?"none":"translateY(0)"};
  }
`,rv=S.div`
  color: #28a745;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  padding: 1rem;
  background-color: #d4edda;
  border-radius: 6px;
  border: 1px solid #c3e6cb;
`,ov=["Login Issue","Device Not Responding","Billing Question","Feature Request","Other"],iv=()=>{const[r,l]=E.useState(""),[a,c]=E.useState(""),[f,h]=E.useState(""),[m,y]=E.useState(null),[x,_]=E.useState(!1),T=mn(),P=b=>{l(b.target.value),b.target.value!=="Other"&&c("")},N=b=>{y(b.target.files)},L=b=>{b.preventDefault(),_(!0)},B=()=>{localStorage.removeItem("token"),T("/login")};return u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{onClick:()=>T("/profile"),children:"Profile"}),u.jsx(ie,{onClick:()=>T("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>T("/faq"),children:"FAQ"}),u.jsx(ie,{selected:!0,onClick:()=>T("/support"),children:"Support"}),u.jsx(Dt,{onClick:B,children:"Logout"})]})]}),u.jsxs(on,{children:[u.jsx(ou,{children:"Contact Support"}),u.jsxs(q1,{onSubmit:L,children:[u.jsxs(Da,{children:[u.jsx(Oa,{htmlFor:"subject",children:"Subject"}),u.jsxs(J1,{id:"subject",value:r,onChange:P,required:!0,children:[u.jsx("option",{value:"",disabled:!0,children:"Select a subject"}),ov.map(b=>u.jsx("option",{value:b,children:b},b))]}),r==="Other"&&u.jsx(X1,{type:"text",placeholder:"Enter your subject",value:a,onChange:b=>c(b.target.value),required:!0})]}),u.jsxs(Da,{children:[u.jsx(Oa,{htmlFor:"message",children:"Describe your problem"}),u.jsx(Z1,{id:"message",value:f,onChange:b=>h(b.target.value),required:!0,rows:7})]}),u.jsxs(Da,{children:[u.jsx(Oa,{children:"Attach files (optional)"}),u.jsx(ev,{type:"file",multiple:!0,onChange:N}),m&&m.length>0&&u.jsx(tv,{children:Array.from(m).map((b,D)=>u.jsx("li",{children:b.name},D))})]}),u.jsx(nv,{type:"submit",disabled:f.trim()==="",children:"Send"}),x&&u.jsx(rv,{children:"Your message has been sent! Our support team will contact you soon."})]})]})]})},lv=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`,sv=S.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;S.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;S.h2`
  text-align: left;
  margin-bottom: 2.5rem;
  font-weight: 700;
  font-size: 2.1rem;
  color: #222;
`;const av=S.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  /* Remove border from last row */
  tr:last-child td {
    border-bottom: none;
  }
`,tr=S.td`
  font-weight: 600;
  color: ${({disabled:r})=>r?"#888":"#222"};
  width: 160px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  background: ${({disabled:r})=>r?"#f8f9fa":"white"};
`,nr=S.td`
  color: ${({disabled:r})=>r?"#888":"#222"};
  background: ${({disabled:r})=>r?"#f8f9fa":"white"};
  padding: 1rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  border-bottom: 1px solid #e9ecef;
`,dl=S.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 1.05rem;
  color: #222;
  font-weight: 500;
`,uv=S.button`
  background: ${({isEnabled:r=!0})=>r?"linear-gradient(135deg, #ff7f50 0%, #ff6b35 50%, #40e0d0 100%)":"#999"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: ${({isEnabled:r=!0})=>r?"pointer":"not-allowed"};
  margin-top: 18px;
  align-self: flex-end;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  opacity: ${({isEnabled:r=!0})=>r?1:.7};

  &:hover {
    background: ${({isEnabled:r=!0})=>r?"linear-gradient(135deg, #ff6b35 0%, #ff5722 50%, #39d3c7 100%)":"#888"};
  }
`,$f=S.button`
  background: linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 12px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  }
`,cv=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,Af=S.div`
  position: relative;
  flex: 1;
`,Ff=S.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: #333;
    background-color: #f5f5f5;
  }
`,dv=S.div`
  width: 100%;
  margin: 0 auto 2rem auto;
  text-align: left;
`,fv=S.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
`,pv=S.div`
  color: #888;
  font-size: 1.05rem;
  font-weight: 500;
`,hv=S.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,mv=S.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`,gv=S.span`
  letter-spacing: ${({isVisible:r})=>r?"normal":"2px"};
  color: #222;
  font-weight: 500;
  flex: 1;
  font-family: ${({isVisible:r})=>r?"inherit":"monospace"};
`;S.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  color: #856404;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;S.button`
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #6c757d;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 12px;
  transition: all 0.2s;

  &:hover {
    background: #e9ecef;
    border-color: #adb5bd;
    color: #495057;
  }
`;const vv=()=>{const r=mn(),[l,a]=E.useState(null),[c,f]=E.useState(!0),[h,m]=E.useState(null),[y,x]=E.useState({username:"",email:"",password:"",confirmPassword:""}),[_,T]=E.useState(!1),[P,N]=E.useState(!1),[L,B]=E.useState(!1),[b,D]=E.useState(!1);E.useEffect(()=>{(async()=>{try{const ve=localStorage.getItem("token");if(!ve){r("/login");return}const me=await fetch("http://localhost:8080/api/v1/users/profile",{method:"GET",headers:{Authorization:`Bearer ${ve}`,"Content-Type":"application/json"}});if(me.status===401){localStorage.removeItem("token"),r("/login");return}if(!me.ok)throw new Error(`HTTP error! status: ${me.status}`);const fe=await me.json();a(fe),x({username:fe.username,email:fe.email,password:"",confirmPassword:""}),m(null)}catch(ve){console.error("Error fetching user profile:",ve),m("Failed to load user profile")}finally{f(!1)}})()},[r]);const V=ee=>new Date(ee).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),U=()=>l?y.username!==l.username||y.email!==l.email||L&&y.password.length>0&&y.password===y.confirmPassword:!1,F=()=>y.password===y.confirmPassword,H=()=>y.password.length>=6,oe=()=>{localStorage.removeItem("token"),r("/login")},re=ee=>{x({...y,[ee.target.name]:ee.target.value})},Z=async()=>{if(!(!l||!U())){D(!0);try{const ee=localStorage.getItem("token");if(!ee){r("/login");return}const ve={};if(y.username!==l.username&&(ve.username=y.username),y.email!==l.email&&(ve.email=y.email),L&&y.password.trim()!==""){if(!F()){m("Passwords do not match");return}if(!H()){m("Password must be at least 6 characters long");return}ve.password=y.password}const me=await fetch("http://localhost:8080/api/v1/users/profile",{method:"PUT",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"},body:JSON.stringify(ve)});if(me.status===401){localStorage.removeItem("token"),r("/login");return}if(!me.ok){const Pe=await me.json();throw new Error(Pe.message||`HTTP error! status: ${me.status}`)}const fe=await me.json();a(fe),x({username:fe.username,email:fe.email,password:"",confirmPassword:""}),B(!1),T(!1),m(null)}catch(ee){console.error("Error updating profile:",ee),m(ee.message||"Failed to update profile")}finally{D(!1)}}},Y=()=>{B(!1),x({...y,password:"",confirmPassword:""}),T(!1),N(!1)};return c?u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{selected:!0,onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:oe,children:"Logout"})]})]}),u.jsx(on,{children:u.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:u.jsx("p",{children:"Loading profile..."})})})]}):h||!l?u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{selected:!0,onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:oe,children:"Logout"})]})]}),u.jsx(on,{children:u.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[u.jsx("p",{style:{color:"red"},children:h||"Failed to load user profile"}),u.jsx("button",{onClick:()=>window.location.reload(),children:"Retry"})]})})]}):u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{selected:!0,onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:oe,children:"Logout"})]})]}),u.jsxs(on,{children:[u.jsx(lv,{children:u.jsx(sv,{children:"Personal information"})}),u.jsxs(dv,{children:[u.jsx(fv,{children:l.username}),u.jsx(pv,{children:l.email})]}),h&&u.jsx("div",{style:{backgroundColor:"#fee",color:"#c33",padding:"1rem",borderRadius:"4px",margin:"1rem 0",border:"1px solid #fcc"},children:h}),u.jsxs(hv,{onSubmit:ee=>{ee.preventDefault(),Z()},children:[u.jsx(av,{children:u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx(tr,{disabled:!0,children:"Creation date"}),u.jsx(nr,{disabled:!0,children:V(l.createdAt)})]}),u.jsxs("tr",{children:[u.jsx(tr,{disabled:!0,children:"Last updated"}),u.jsx(nr,{disabled:!0,children:V(l.updatedAt)})]}),u.jsxs("tr",{children:[u.jsx(tr,{disabled:!0,children:"User ID"}),u.jsx(nr,{disabled:!0,children:l.id})]}),u.jsxs("tr",{children:[u.jsx(tr,{disabled:!0,children:"Role"}),u.jsx(nr,{disabled:!0,style:{textTransform:"capitalize"},children:l.role.toLowerCase().replace("_"," ")})]}),u.jsxs("tr",{children:[u.jsx(tr,{children:"Username"}),u.jsx(nr,{children:u.jsx(dl,{type:"text",name:"username",value:y.username,onChange:re})})]}),u.jsxs("tr",{children:[u.jsx(tr,{children:"E-mail"}),u.jsx(nr,{children:u.jsx(dl,{type:"email",name:"email",value:y.email,onChange:re})})]}),u.jsxs("tr",{children:[u.jsx(tr,{children:"Password"}),u.jsx(nr,{children:u.jsxs(cv,{children:[L?u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[u.jsxs(Af,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(dl,{type:_?"text":"password",name:"password",value:y.password,onChange:re,placeholder:"Enter new password",style:{borderColor:L&&y.password&&!H()?"#dc3545":void 0,flex:1}}),u.jsx(Ff,{type:"button",onClick:()=>T(!_),children:_?u.jsx(Wo,{}):u.jsx(Vo,{})}),u.jsx("div",{style:{width:"104px",visibility:"hidden"}})]}),u.jsxs(Af,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(dl,{type:P?"text":"password",name:"confirmPassword",value:y.confirmPassword,onChange:re,placeholder:"Confirm new password",style:{borderColor:L&&y.confirmPassword&&!F()?"#dc3545":L&&y.confirmPassword&&F()?"#28a745":void 0,flex:1}}),u.jsx(Ff,{type:"button",onClick:()=>N(!P),children:P?u.jsx(Wo,{}):u.jsx(Vo,{})}),u.jsx($f,{type:"button",onClick:Y,style:{background:"#f5f5f5",color:"#333"},children:"Cancel"})]}),L&&y.password&&!H()&&u.jsx("div",{style:{color:"#dc3545",fontSize:"0.8rem"},children:"Password must be at least 6 characters long"}),L&&y.confirmPassword&&!F()&&u.jsx("div",{style:{color:"#dc3545",fontSize:"0.8rem"},children:"Passwords do not match"}),L&&y.confirmPassword&&F()&&H()&&u.jsx("div",{style:{color:"#28a745",fontSize:"0.8rem"},children:"✓ Passwords match"})]}):u.jsx(gv,{isVisible:!1,children:"********"}),!L&&u.jsx($f,{type:"button",onClick:()=>B(!0),children:"Change password"})]})})]})]})}),u.jsx(mv,{children:u.jsx(uv,{type:"submit",isEnabled:U()&&!b,children:b?"Saving...":"Save changes"})})]})]})]})},yv=S.form`
  flex: 2;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,xv=S.div`
  margin-bottom: 2rem;
`,Mf=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rr=S.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`,or=S.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`,$a=S.input`
  padding: 0.875rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`,Aa=S.select`
  padding: 0.875rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`,wv=S.textarea`
  padding: 0.875rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`,Sv=S.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e1e5e9;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,kv=S.button`
  background: ${({disabled:r})=>r?"#ccc":"linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({disabled:r})=>r?"not-allowed":"pointer"};
  transition: all 0.2s;
  opacity: ${({disabled:r})=>r?.6:1};

  &:hover {
    transform: ${({disabled:r})=>r?"none":"translateY(-2px)"};
    box-shadow: ${({disabled:r})=>r?"none":"0 4px 12px rgba(255, 127, 80, 0.3)"};
  }

  &:active {
    transform: ${({disabled:r})=>r?"none":"translateY(0)"};
  }
`,jv=S.button`
  background: #f8f9fa;
  color: #6c757d;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e9ecef;
    border-color: #adb5bd;
    color: #495057;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,Cv=S.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 1024px) {
    display: none;
  }
`,Ev=S.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 2rem;
`,Pv=S.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f3f4;
`,ir=S.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`,lr=S.span`
  font-weight: 600;
  color: #666;
  min-width: 80px;
  font-size: 0.9rem;
`,sr=S.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`,_v=S.div`
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`,Tv=S.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`,zv=["Smart Light","Smart Switch","Smart Thermostat","Smart Lock","Smart Camera","Smart Sensor","Smart Speaker","Smart TV","Smart Plug","Other"],Nv=["Living Room","Bedroom","Kitchen","Bathroom","Office","Garage","Garden","Basement","Attic","Other"],bv=()=>{const r=mn(),[l,a]=E.useState({name:"",type:"",location:"",description:"",mqttTopic:"",aesKey:"",status:!1}),[c,f]=E.useState(!1),[h,m]=E.useState(null),y=()=>{localStorage.removeItem("token"),r("/login")},x=N=>{const{name:L,value:B}=N.target;a(b=>({...b,[L]:B}))},_=async N=>{N.preventDefault(),f(!0),m(null);try{const L=localStorage.getItem("token");if(!L){m("error"),f(!1);return}const B=await fetch("http://localhost:8080/api/v1/devices",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${L}`},body:JSON.stringify({name:l.name,type:l.type,description:l.description,location:l.location,mqttTopic:l.mqttTopic,aesKey:l.aesKey,status:l.status})});if(B.ok)m("success"),localStorage.removeItem("deviceCache"),setTimeout(()=>{r("/dashboard")},2e3);else{const b=await B.json().catch(()=>({}));console.error("Error response:",b),m("error")}}catch(L){console.error("Error creating device:",L),m("error")}finally{f(!1)}},T=()=>{r("/dashboard")},P=()=>l.name.trim()&&l.type&&l.location&&l.mqttTopic.trim()&&l.aesKey.trim();return u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:y,children:"Logout"})]})]}),u.jsxs(on,{children:[u.jsx(ou,{children:"Add New Device"}),u.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[u.jsxs(yv,{onSubmit:_,children:[u.jsxs(xv,{children:[u.jsx("h3",{style:{margin:"0 0 1.5rem 0",color:"#333",fontSize:"1.3rem"},children:"Device Information"}),u.jsxs(Mf,{children:[u.jsxs(rr,{children:[u.jsx(or,{htmlFor:"name",children:"Device Name *"}),u.jsx($a,{type:"text",id:"name",name:"name",value:l.name,onChange:x,placeholder:"e.g., Living Room Light",required:!0})]}),u.jsxs(rr,{children:[u.jsx(or,{htmlFor:"type",children:"Device Type *"}),u.jsxs(Aa,{id:"type",name:"type",value:l.type,onChange:x,required:!0,children:[u.jsx("option",{value:"",children:"Select device type"}),zv.map(N=>u.jsx("option",{value:N,children:N},N))]})]})]}),u.jsxs(Mf,{children:[u.jsxs(rr,{children:[u.jsx(or,{htmlFor:"location",children:"Location *"}),u.jsxs(Aa,{id:"location",name:"location",value:l.location,onChange:x,required:!0,children:[u.jsx("option",{value:"",children:"Select location"}),Nv.map(N=>u.jsx("option",{value:N,children:N},N))]})]}),u.jsxs(rr,{children:[u.jsx(or,{htmlFor:"status",children:"Current Status"}),u.jsxs(Aa,{id:"status",name:"status",value:l.status.toString(),onChange:N=>a(L=>({...L,status:N.target.value==="true"})),children:[u.jsx("option",{value:"false",children:"Off"}),u.jsx("option",{value:"true",children:"On"})]})]})]}),u.jsxs(rr,{children:[u.jsx(or,{htmlFor:"mqttTopic",children:"MQTT Topic *"}),u.jsx($a,{type:"text",id:"mqttTopic",name:"mqttTopic",value:l.mqttTopic,onChange:x,placeholder:"e.g., devices/livingroom/lamp",required:!0})]}),u.jsxs(rr,{children:[u.jsx(or,{htmlFor:"aesKey",children:"Device AES Key *"}),u.jsx($a,{type:"password",id:"aesKey",name:"aesKey",value:l.aesKey,onChange:x,placeholder:"Secure encryption key for device communication",required:!0})]}),u.jsxs(rr,{children:[u.jsx(or,{htmlFor:"description",children:"Description"}),u.jsx(wv,{id:"description",name:"description",value:l.description,onChange:x,placeholder:"Optional description of the device...",rows:4})]})]}),h==="success"&&u.jsx(_v,{children:"✅ Device added successfully! Redirecting to dashboard..."}),h==="error"&&u.jsx(Tv,{children:"❌ Failed to add device. Please check your information and try again."}),u.jsxs(Sv,{children:[u.jsx(jv,{type:"button",onClick:T,children:"Cancel"}),u.jsx(kv,{type:"submit",disabled:!P()||c,children:c?"Adding Device...":"Add Device"})]})]}),u.jsx(Cv,{children:u.jsxs(Ev,{children:[u.jsx(Pv,{children:"Device Preview"}),u.jsxs(ir,{children:[u.jsx(lr,{children:"Name:"}),u.jsx(sr,{children:l.name||"Not specified"})]}),u.jsxs(ir,{children:[u.jsx(lr,{children:"Type:"}),u.jsx(sr,{children:l.type||"Not specified"})]}),u.jsxs(ir,{children:[u.jsx(lr,{children:"Location:"}),u.jsx(sr,{children:l.location||"Not specified"})]}),u.jsxs(ir,{children:[u.jsx(lr,{children:"Status:"}),u.jsx(sr,{children:l.status?"On":"Off"})]}),u.jsxs(ir,{children:[u.jsx(lr,{children:"MQTT Topic:"}),u.jsx(sr,{children:l.mqttTopic||"Not specified"})]}),u.jsxs(ir,{children:[u.jsx(lr,{children:"AES Key:"}),u.jsx(sr,{children:l.aesKey?"••••••••••••":"Not specified"})]}),l.description&&u.jsxs(ir,{children:[u.jsx(lr,{children:"Description:"}),u.jsx(sr,{children:l.description})]})]})})]})]})]})},Rv=S.div`
  margin-top: 2rem;
`,Uf=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  color: #6c757d;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 2rem;

  &:hover {
    background: #e9ecef;
    border-color: #adb5bd;
    color: #495057;
    transform: translateY(-2px);
  }
`,Iv=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
`,Lv=S.h1`
  color: #333;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
`,Dv=S.p`
  color: #666;
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
  font-weight: 500;
`,Ov=S.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background-color: ${r=>r.status==="On"?"#28a745":"#dc3545"};
`,fl=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({variant:r})=>r==="success"?"#28a745":r==="cancel"?"#dc3545":"linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`,$v=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Yo=S.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;S(Yo)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;const Av=S(Yo)`
  grid-column: 1 / -1;
`,Ar=S.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f3f4;
`,Bf=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Zt=S.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f3f4;

  &:last-child {
    border-bottom: none;
  }
`,en=S.span`
  font-weight: 600;
  color: #666;
  min-width: 120px;
  font-size: 0.95rem;
`,tn=S.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`,Ao=S.input`
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`;S.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background: white;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #ff7f50;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 127, 80, 0.2);
  }
`;S.div`
  width: 50px;
  height: 26px;
  border-radius: 13px;
  background: ${({checked:r})=>r?"#28a745":"#dc3545"};
  position: relative;
  cursor: pointer;
  transition: background 0.2s;

  &::before {
    content: "";
    position: absolute;
    left: ${({checked:r})=>r?"26px":"2px"};
    top: 2px;
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 50%;
    transition: left 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;const Fv=S.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({online:r})=>r?"#28a745":"#dc3545"};
  font-weight: 600;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({online:r})=>r?"#28a745":"#dc3545"};
  }
`,Mv=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  border-left: 4px solid ${({type:r})=>r==="error"?"#dc3545":r==="warning"?"#ffc107":"#007bff"};
  background: ${({type:r})=>r==="error"?"#f8d7da":r==="warning"?"#fff3cd":"#d1ecf1"};
  border-radius: 0 8px 8px 0;
  margin-bottom: 0.5rem;
`,Uv=S.span`
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
`,Bv=S.span`
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Hv=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #666;
`,Wv=S.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
`,Vv=S(Yo)`
  grid-column: 1 / -1;
  background: white;
  border: 2px solid #e1e5e9;
`,Qv=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,Yv=S.div`
  display: flex;
  gap: 1rem;
`,Hf=S.button`
  background: ${({active:r})=>r?"linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)":"#f8f9fa"};
  color: ${({active:r})=>r?"white":"#666"};
  border: 2px solid ${({active:r})=>r?"transparent":"#e1e5e9"};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({active:r})=>r?"linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)":"#e9ecef"};
    border-color: ${({active:r})=>r?"transparent":"#adb5bd"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,Kv=S.div`
  background: white;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 300px;
`,pl=S.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Fo=S.input`
  flex: 1;
  background: white;
  border: 2px solid #e1e5e9;
  color: #333;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;

  &::placeholder {
    color: #6c757d;
  }

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`,Wf=S.button`
  background: linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: #adb5bd;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Gv=S.div`
  margin-top: 2rem;
`,qv=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 200px;
  overflow-y: auto;
`,Jv=S.div`
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    border-color: #adb5bd;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`,Xv=S.div`
  flex: 1;
`,Zv=S.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
`,ey=S.div`
  font-size: 0.85rem;
  color: #666;
`,ty=S.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #c82333;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`,ny=S.div`
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  padding: 1rem;
  max-height: 150px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
`,ry=S.div`
  margin-bottom: 0.5rem;
  color: ${({type:r})=>r==="sent"?"#28a745":r==="received"?"#007bff":r==="error"?"#dc3545":"#333"};
  font-weight: 500;
  
  &::before {
    content: ${({type:r})=>r==="sent"?'"[SENT] "':r==="received"?'"[RECV] "':r==="error"?'"[ERROR] "':'""'};
    font-weight: bold;
  }
`,Vf=S.div`
  text-align: center;
  color: #6c757d;
  font-style: italic;
  padding: 2rem;
`,oy=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
  
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({connected:r})=>r?"#28a745":"#dc3545"};
    animation: ${({connected:r})=>r?"pulse 2s infinite":"none"};
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`,hl=r=>{if(!r||r===null||r===void 0)return"Unknown";try{const l=r instanceof Date?r:new Date(r);return isNaN(l.getTime())?"Unknown":l.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"Unknown"}},iy=()=>{const r=mn(),{deviceId:l}=m0(),[a,c]=E.useState(null),[f,h]=E.useState(!1),[m,y]=E.useState({}),[x,_]=E.useState([]),[T,P]=E.useState(!0),[N,L]=E.useState(!1),[B,b]=E.useState(""),[D,V]=E.useState(null),[U,F]=E.useState(null),[H,oe]=E.useState(null),[re,Z]=E.useState(null),[Y,ee]=E.useState(!1),[ve,me]=E.useState("terminal"),[fe,Pe]=E.useState(""),[_e,lt]=E.useState(""),[Qe,Ce]=E.useState([]),[M,q]=E.useState([]),[W,w]=E.useState(""),[z,ae]=E.useState(""),[se,pe]=E.useState(""),[ue,we]=E.useState(!1),[de,ye]=E.useState(!1);E.useEffect(()=>{const A=localStorage.getItem("user");if(A)try{const ce=JSON.parse(A);F(ce.role),oe(ce)}catch(ce){console.error("Error parsing user data:",ce)}},[]);const Be=async()=>{try{const A=localStorage.getItem("token");if(!A||!l)return;const ce=await fetch(`http://localhost:8080/api/v1/devices/${l}/logs?limit=20`,{method:"GET",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"}});if(ce.ok){const ze=(await ce.json()).map(Ne=>({id:Ne.id,message:Ne.message,type:Ne.type,source:Ne.source,createdAt:Ne.createdAt,user:Ne.user}));_(ze),ee(!0)}}catch(A){console.error("Error fetching device logs:",A)}},tt=async(A=!0,ce=!1)=>{try{A?P(!0):L(!0);const xe=localStorage.getItem("token");if(!xe){r("/login");return}const ze=await fetch(`http://localhost:8080/api/v1/devices/${l}`,{method:"GET",headers:{Authorization:`Bearer ${xe}`,"Content-Type":"application/json"}});if(ze.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),r("/login");return}if(ze.status===404){V("Device not found");return}if(!ze.ok)throw new Error(`HTTP error! status: ${ze.status}`);const Ne=await ze.json();c(Ne),y(Ne),Z(Ne.status),!Y&&!ce&&await Be(),await vn(),A||b(new Date().toLocaleTimeString())}catch(xe){console.error("Error fetching device data:",xe),A&&V("Failed to load device data")}finally{A?P(!1):L(!1)}};E.useEffect(()=>{l&&tt()},[l,r]),E.useEffect(()=>{const A=setInterval(()=>{l&&!f&&tt(!1,!0)},5e3);return()=>clearInterval(A)},[l,f]),E.useEffect(()=>{const A=()=>{l&&!f&&tt(!1,!0)},ce=xe=>{xe.key===`device_updated_${l}`&&l&&!f&&setTimeout(()=>tt(!1,!0),100)};return window.addEventListener("focus",A),window.addEventListener("storage",ce),document.addEventListener("visibilitychange",()=>{!document.hidden&&l&&!f&&tt(!1,!0)}),()=>{window.removeEventListener("focus",A),window.removeEventListener("storage",ce),document.removeEventListener("visibilitychange",A)}},[l,f]);const vt=()=>{tt(!1,!0),Be()},gn=()=>{localStorage.removeItem("token"),r("/login")},fr=()=>{r("/dashboard")},qo=()=>{U!=="ADMIN"&&h(!0)},Jo=async()=>{try{const A=localStorage.getItem("token");if(!A){r("/login");return}const ce=await fetch(`http://localhost:8080/api/v1/devices/${l}`,{method:"PUT",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"},body:JSON.stringify({name:m.name,type:m.type,description:m.description,location:m.location,mqttTopic:m.mqttTopic})});if(!ce.ok)throw new Error("Failed to update device");const xe=await ce.json();c(xe),h(!1);const ze=H.username,Ne={id:Date.now().toString(),message:`Device '${xe.name}' information updated by ${ze}`,type:"INFO",source:"DEVICE",createdAt:new Date().toISOString()};_(De=>[Ne,...De])}catch(A){console.error("Error saving device:",A),V("Failed to save changes")}},Yr=()=>{y(a||{}),h(!1)},Xo=async()=>{if(!(!a||U==="ADMIN"))try{const A=localStorage.getItem("token");if(!A){r("/login");return}const ce=!a.status;if(c(De=>De?{...De,status:ce}:null),!(await fetch(`http://localhost:8080/api/v1/devices/${l}/status`,{method:"PUT",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"},body:JSON.stringify({status:ce})})).ok)throw c(De=>De?{...De,status:!ce}:null),new Error("Failed to update device status");const ze=H.username,Ne={id:Date.now().toString(),message:`Device '${a.name}' status changed to ${ce?"ON":"OFF"} by ${ze}`,type:"INFO",source:"DEVICE",createdAt:new Date().toISOString()};_(De=>[Ne,...De]),localStorage.setItem(`device_updated_${l}`,Date.now().toString()),setTimeout(()=>{localStorage.removeItem(`device_updated_${l}`)},1e3)}catch(A){console.error("Error toggling device status:",A),V("Failed to toggle device status")}},Kr=(A,ce)=>{y(xe=>({...xe,[A]:ce}))},$t=A=>ce=>{Kr(A,ce.target.value)},vn=async()=>{try{const A=localStorage.getItem("token");if(!A||!l)return;const ce=await fetch(`http://localhost:8080/api/v1/automation/devices/${l}/rules`,{method:"GET",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"}});if(ce.ok){const xe=await ce.json();q(xe)}}catch(A){console.error("Error fetching automation rules:",A)}},Gr=async()=>{if(!(!fe.trim()||!l||ue)){we(!0);try{const A=localStorage.getItem("token");if(!A){r("/login");return}let ce;try{ce=_e.trim()?JSON.parse(_e):{}}catch{ce={value:_e}}const xe=await fetch(`http://localhost:8080/api/v1/automation/devices/${l}/commands`,{method:"POST",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"},body:JSON.stringify({command:{name:fe,payload:ce}})});if(xe.ok){const ze=await xe.json(),Ne={id:Date.now().toString(),timestamp:new Date().toISOString(),type:"sent",content:`${fe}: ${JSON.stringify(ce)}`};Ce(Un=>[Ne,...Un.slice(0,49)]),Pe(""),lt("");const De=(H==null?void 0:H.username)||"Unknown User",At={id:Date.now().toString(),message:`MQTT command '${fe}' sent to device '${a==null?void 0:a.name}' by ${De}`,type:"INFO",source:"MQTT",createdAt:new Date().toISOString()};_(Un=>[At,...Un])}else{const ze=await xe.text();throw new Error(ze)}}catch(A){console.error("Error sending MQTT command:",A);const ce={id:Date.now().toString(),timestamp:new Date().toISOString(),type:"error",content:`Failed to send ${fe}: ${A}`};Ce(xe=>[ce,...xe.slice(0,49)])}finally{we(!1)}}},Zo=async()=>{if(!(!W.trim()||!z.trim()||!se.trim()||!l||de)){ye(!0);try{const A=localStorage.getItem("token");if(!A){r("/login");return}const ce=await fetch(`http://localhost:8080/api/v1/automation/devices/${l}/rules`,{method:"POST",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"},body:JSON.stringify({name:W,triggerCondition:z,action:se})});if(ce.ok){const xe=await ce.json();q(De=>[xe,...De]),w(""),ae(""),pe("");const ze=(H==null?void 0:H.username)||"Unknown User",Ne={id:Date.now().toString(),message:`Automation rule '${xe.name}' created for device '${a==null?void 0:a.name}' by ${ze}`,type:"INFO",source:"AUTOMATION",createdAt:new Date().toISOString()};_(De=>[Ne,...De])}else{const xe=await ce.text();throw new Error(xe)}}catch(A){console.error("Error creating automation rule:",A),V("Failed to create automation rule")}finally{ye(!1)}}},ei=async(A,ce)=>{try{const xe=localStorage.getItem("token");if(!xe){r("/login");return}const ze=await fetch(`http://localhost:8080/api/v1/automation/rules/${A}`,{method:"DELETE",headers:{Authorization:`Bearer ${xe}`,"Content-Type":"application/json"}});if(ze.ok){q(At=>At.filter(Un=>Un.id!==A));const Ne=(H==null?void 0:H.username)||"Unknown User",De={id:Date.now().toString(),message:`Automation rule '${ce}' deleted from device '${a==null?void 0:a.name}' by ${Ne}`,type:"INFO",source:"AUTOMATION",createdAt:new Date().toISOString()};_(At=>[De,...At])}else{const Ne=await ze.text();throw new Error(Ne)}}catch(xe){console.error("Error deleting automation rule:",xe),V("Failed to delete automation rule")}};return T?u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:gn,children:"Logout"})]})]}),u.jsx(on,{children:u.jsx(Hv,{children:"Loading device details..."})})]}):D||!a?u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:gn,children:"Logout"})]})]}),u.jsxs(on,{children:[u.jsx(Wv,{children:D||"Device not found"}),u.jsxs(Uf,{onClick:fr,children:[u.jsx(cf,{})," Back to Dashboard"]})]})]}):u.jsxs(zt,{children:[u.jsxs(Nt,{children:[u.jsxs(bt,{children:[u.jsx(Rt,{children:"🏠"}),u.jsx(It,{children:"Home Control Hub"})]}),u.jsxs(Lt,{children:[u.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),u.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),u.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),u.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),u.jsx(Dt,{onClick:gn,children:"Logout"})]})]}),u.jsxs(on,{children:[u.jsxs(Uf,{onClick:fr,children:[u.jsx(cf,{})," Back to Dashboard"]}),u.jsxs(Iv,{children:[u.jsxs("div",{children:[u.jsx(Lv,{children:f?u.jsx(Ao,{value:m.name||"",onChange:$t("name")}):a.name}),u.jsxs(Dv,{children:["Device ID: ",a.id]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[u.jsx(Ov,{status:a.status?"On":"Off",children:a.status?"On":"Off"}),!f&&U!=="ADMIN"?u.jsxs(fl,{onClick:qo,children:[u.jsx(G0,{})," Edit"]}):f?u.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[u.jsxs(fl,{onClick:Jo,variant:"success",children:[u.jsx(Z0,{})," Save"]}),u.jsxs(fl,{onClick:Yr,variant:"cancel",children:[u.jsx(tg,{})," Cancel"]})]}):u.jsx("span",{style:{color:"#666",fontSize:"0.9rem"},children:U==="ADMIN"?"View Only":""})]})]}),u.jsx(Rv,{children:u.jsxs($v,{children:[u.jsxs(Yo,{children:[u.jsx(Ar,{children:"Device Information"}),u.jsxs(Bf,{children:[u.jsxs(Zt,{children:[u.jsx(en,{children:"Type:"}),u.jsx(tn,{children:f&&U!=="ADMIN"?u.jsx(Ao,{value:m.type||"",onChange:$t("type")}):a.type})]}),u.jsxs(Zt,{children:[u.jsx(en,{children:"Location:"}),u.jsx(tn,{children:f&&U!=="ADMIN"?u.jsx(Ao,{value:m.location||"",onChange:$t("location")}):a.location})]}),u.jsxs(Zt,{children:[u.jsx(en,{children:"MQTT Topic:"}),u.jsx(tn,{children:f&&U!=="ADMIN"?u.jsx(Ao,{value:m.mqttTopic||"",onChange:$t("mqttTopic")}):a.mqttTopic})]}),u.jsxs(Zt,{children:[u.jsx(en,{children:"Description:"}),u.jsx(tn,{children:f&&U!=="ADMIN"?u.jsx(Ao,{value:m.description||"",onChange:$t("description"),as:"textarea",rows:3}):a.description||"No description"})]}),u.jsxs(Zt,{children:[u.jsx(en,{children:"Status Control:"}),u.jsx(tn,{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:U==="ADMIN"?u.jsx("span",{style:{color:a.status?"#4CAF50":"#f44336",fontWeight:"bold"},children:a.status?"ON":"OFF"}):u.jsx(Ip,{checked:a.status,onClick:Xo,"aria-label":`Toggle ${a.name}`})})]})]})]}),u.jsxs(Yo,{children:[u.jsx(Ar,{children:"System Information"}),u.jsxs(Bf,{children:[u.jsxs(Zt,{children:[u.jsx(en,{children:"Device ID:"}),u.jsx(tn,{children:a.id})]}),u.jsxs(Zt,{children:[u.jsx(en,{children:"Owner:"}),u.jsx(tn,{children:H?`${H.username} (${H.email})`:"Unknown User"})]}),u.jsxs(Zt,{children:[u.jsx(en,{children:"Created:"}),u.jsx(tn,{children:hl(a.createdAt)})]}),u.jsxs(Zt,{children:[u.jsx(en,{children:"Last Updated:"}),u.jsx(tn,{children:a.updatedAt&&a.createdAt&&new Date(a.updatedAt).getTime()!==new Date(a.createdAt).getTime()?hl(a.updatedAt):"Never edited"})]}),u.jsxs(Zt,{children:[u.jsx(en,{children:"Connection Status:"}),u.jsx(tn,{children:u.jsx(Fv,{online:a.status,children:a.status?"Online":"Offline"})})]})]})]}),u.jsxs(Av,{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[u.jsx(Ar,{children:"Recent Activity"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[B&&u.jsxs("span",{style:{fontSize:"0.7rem",color:"#666"},children:["Last updated: ",B]}),u.jsxs(fl,{onClick:vt,style:{fontSize:"0.8rem",padding:"0.5rem"},disabled:N,children:[u.jsx(eg,{style:{animation:N?"spin 1s linear infinite":"none",marginRight:"0.5rem"}}),N?"Refreshing...":"Refresh"]})]})]}),u.jsx("style",{children:`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}),u.jsx("div",{style:{maxHeight:"300px",overflowY:"auto"},children:x.map(A=>u.jsxs(Mv,{type:A.type.toLowerCase(),children:[u.jsx(Uv,{children:hl(A.createdAt)}),u.jsxs(Bv,{children:[A.type==="WARNING"&&u.jsx(q0,{}),A.message,A.user&&u.jsxs("span",{style:{marginLeft:"0.5rem"},children:["by ",A.user.username]})]})]},A.id))})]}),u.jsxs(Vv,{children:[u.jsx(Ar,{children:"MQTT Terminal & Automation"}),u.jsxs(Qv,{children:[u.jsxs(Yv,{children:[u.jsx(Hf,{active:ve==="terminal",onClick:()=>me("terminal"),children:"Terminal"}),u.jsxs(Hf,{active:ve==="rules",onClick:()=>me("rules"),children:["Automation Rules ",M.length>0&&`(${M.length})`]})]}),u.jsxs(oy,{connected:(a==null?void 0:a.status)||!1,children:["MQTT: ",a!=null&&a.status?"Connected":"Disconnected"]})]}),u.jsx(Kv,{children:ve==="terminal"?u.jsxs("div",{children:[u.jsxs(pl,{children:[u.jsx(Fo,{value:fe,onChange:A=>Pe(A.target.value),placeholder:"Command Name (e.g., turnOn, setColor)",disabled:ue}),u.jsx(Fo,{value:_e,onChange:A=>lt(A.target.value),placeholder:"Payload (JSON or string)",disabled:ue}),u.jsxs(Wf,{onClick:Gr,disabled:ue,children:[u.jsx(J0,{})," ",ue?"Sending...":"Send Command"]})]}),u.jsxs("div",{style:{marginTop:"1.5rem"},children:[u.jsxs("div",{style:{marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{style:{color:"rgba(255, 255, 255, 0.9)",fontWeight:600},children:"Command History"}),u.jsxs("span",{style:{color:"rgba(255, 255, 255, 0.6)",fontSize:"0.8rem"},children:["Topic: ",a==null?void 0:a.mqttTopic]})]}),u.jsx(ny,{children:Qe.length===0?u.jsx(Vf,{children:"No commands sent yet. Start by sending a command above."}):Qe.map(A=>u.jsxs(ry,{type:A.type,children:[hl(A.timestamp)," - ",A.content]},A.id))})]})]}):u.jsxs("div",{children:[u.jsx(Ar,{children:"Automation Rules"}),u.jsxs(Gv,{children:[u.jsx(qv,{children:M.length===0?u.jsx(Vf,{children:"No automation rules found."}):M.map(A=>u.jsxs(Jv,{children:[u.jsxs(Xv,{children:[u.jsx(Zv,{children:A.name}),u.jsxs(ey,{children:[A.triggerCondition," → ",A.action]})]}),u.jsx(ty,{onClick:()=>ei(A.id,A.name),children:u.jsx(ng,{})})]},A.id))}),u.jsxs("div",{style:{marginTop:"1.5rem"},children:[u.jsx(Ar,{children:"Create New Rule"}),u.jsx(pl,{children:u.jsx(Fo,{value:W,onChange:A=>w(A.target.value),placeholder:"Rule Name",disabled:de})}),u.jsx(pl,{children:u.jsx(Fo,{value:z,onChange:A=>ae(A.target.value),placeholder:"Trigger Condition (e.g., status == true)",disabled:de})}),u.jsxs(pl,{children:[u.jsx(Fo,{value:se,onChange:A=>pe(A.target.value),placeholder:"Action (e.g., {command: 'turnOn', payload: {}})",disabled:de}),u.jsxs(Wf,{onClick:Zo,disabled:de||!W.trim()||!z.trim()||!se.trim(),children:[u.jsx(X0,{})," ",de?"Creating...":"Create Rule"]})]})]})]})]})})]})]})})]})]})},ly=()=>u.jsx(A0,{children:u.jsxs(b0,{children:[u.jsx(nn,{path:"/login",element:u.jsx(Nf,{})}),u.jsx(nn,{path:"/register",element:u.jsx(R1,{})}),u.jsx(nn,{path:"/dashboard",element:u.jsx(B1,{})}),u.jsx(nn,{path:"/faq",element:u.jsx(G1,{})}),u.jsx(nn,{path:"/support",element:u.jsx(iv,{})}),u.jsx(nn,{path:"/profile",element:u.jsx(vv,{})}),u.jsx(nn,{path:"/add-device",element:u.jsx(bv,{})}),u.jsx(nn,{path:"/device/:deviceId",element:u.jsx(iy,{})}),u.jsx(nn,{path:"/",element:u.jsx(Nf,{})})]})});Fm.createRoot(document.getElementById("root")).render(u.jsx(gt.StrictMode,{children:u.jsx(ly,{})}));
