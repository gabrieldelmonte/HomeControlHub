function Nm(r,l){for(var u=0;u<l.length;u++){const c=l[u];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in r)){const h=Object.getOwnPropertyDescriptor(c,f);h&&Object.defineProperty(r,f,h.get?h:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function u(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=u(f);fetch(f.href,h)}})();function Gf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pa={exports:{}},Uo={},Ta={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function Im(){if(Vd)return ve;Vd=1;var r=Symbol.for("react.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),P=Symbol.iterator;function b(w){return w===null||typeof w!="object"?null:(w=P&&w[P]||w["@@iterator"],typeof w=="function"?w:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,N={};function D(w,z,ue){this.props=w,this.context=z,this.refs=N,this.updater=ue||L}D.prototype.isReactComponent={},D.prototype.setState=function(w,z){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,z,"setState")},D.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function V(){}V.prototype=D.prototype;function B(w,z,ue){this.props=w,this.context=z,this.refs=N,this.updater=ue||L}var F=B.prototype=new V;F.constructor=B,H(F,D.prototype),F.isPureReactComponent=!0;var M=Array.isArray,oe=Object.prototype.hasOwnProperty,re={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function Y(w,z,ue){var se,pe={},ce=null,we=null;if(z!=null)for(se in z.ref!==void 0&&(we=z.ref),z.key!==void 0&&(ce=""+z.key),z)oe.call(z,se)&&!Z.hasOwnProperty(se)&&(pe[se]=z[se]);var de=arguments.length-2;if(de===1)pe.children=ue;else if(1<de){for(var xe=Array(de),Qe=0;Qe<de;Qe++)xe[Qe]=arguments[Qe+2];pe.children=xe}if(w&&w.defaultProps)for(se in de=w.defaultProps,de)pe[se]===void 0&&(pe[se]=de[se]);return{$$typeof:r,type:w,key:ce,ref:we,props:pe,_owner:re.current}}function ee(w,z){return{$$typeof:r,type:w.type,key:z,ref:w.ref,props:w.props,_owner:w._owner}}function ye(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function me(w){var z={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ue){return z[ue]})}var fe=/\/+/g;function Pe(w,z){return typeof w=="object"&&w!==null&&w.key!=null?me(""+w.key):z.toString(36)}function _e(w,z,ue,se,pe){var ce=typeof w;(ce==="undefined"||ce==="boolean")&&(w=null);var we=!1;if(w===null)we=!0;else switch(ce){case"string":case"number":we=!0;break;case"object":switch(w.$$typeof){case r:case l:we=!0}}if(we)return we=w,pe=pe(we),w=se===""?"."+Pe(we,0):se,M(pe)?(ue="",w!=null&&(ue=w.replace(fe,"$&/")+"/"),_e(pe,z,ue,"",function(Qe){return Qe})):pe!=null&&(ye(pe)&&(pe=ee(pe,ue+(!pe.key||we&&we.key===pe.key?"":(""+pe.key).replace(fe,"$&/")+"/")+w)),z.push(pe)),1;if(we=0,se=se===""?".":se+":",M(w))for(var de=0;de<w.length;de++){ce=w[de];var xe=se+Pe(ce,de);we+=_e(ce,z,ue,xe,pe)}else if(xe=b(w),typeof xe=="function")for(w=xe.call(w),de=0;!(ce=w.next()).done;)ce=ce.value,xe=se+Pe(ce,de++),we+=_e(ce,z,ue,xe,pe);else if(ce==="object")throw z=String(w),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return we}function lt(w,z,ue){if(w==null)return w;var se=[],pe=0;return _e(w,se,"","",function(ce){return z.call(ue,ce,pe++)}),se}function Ve(w){if(w._status===-1){var z=w._result;z=z(),z.then(function(ue){(w._status===0||w._status===-1)&&(w._status=1,w._result=ue)},function(ue){(w._status===0||w._status===-1)&&(w._status=2,w._result=ue)}),w._status===-1&&(w._status=0,w._result=z)}if(w._status===1)return w._result.default;throw w._result}var Ce={current:null},U={transition:null},q={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:U,ReactCurrentOwner:re};function W(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:lt,forEach:function(w,z,ue){lt(w,function(){z.apply(this,arguments)},ue)},count:function(w){var z=0;return lt(w,function(){z++}),z},toArray:function(w){return lt(w,function(z){return z})||[]},only:function(w){if(!ye(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ve.Component=D,ve.Fragment=u,ve.Profiler=f,ve.PureComponent=B,ve.StrictMode=c,ve.Suspense=x,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ve.act=W,ve.cloneElement=function(w,z,ue){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var se=H({},w.props),pe=w.key,ce=w.ref,we=w._owner;if(z!=null){if(z.ref!==void 0&&(ce=z.ref,we=re.current),z.key!==void 0&&(pe=""+z.key),w.type&&w.type.defaultProps)var de=w.type.defaultProps;for(xe in z)oe.call(z,xe)&&!Z.hasOwnProperty(xe)&&(se[xe]=z[xe]===void 0&&de!==void 0?de[xe]:z[xe])}var xe=arguments.length-2;if(xe===1)se.children=ue;else if(1<xe){de=Array(xe);for(var Qe=0;Qe<xe;Qe++)de[Qe]=arguments[Qe+2];se.children=de}return{$$typeof:r,type:w.type,key:pe,ref:ce,props:se,_owner:we}},ve.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:h,_context:w},w.Consumer=w},ve.createElement=Y,ve.createFactory=function(w){var z=Y.bind(null,w);return z.type=w,z},ve.createRef=function(){return{current:null}},ve.forwardRef=function(w){return{$$typeof:y,render:w}},ve.isValidElement=ye,ve.lazy=function(w){return{$$typeof:_,_payload:{_status:-1,_result:w},_init:Ve}},ve.memo=function(w,z){return{$$typeof:T,type:w,compare:z===void 0?null:z}},ve.startTransition=function(w){var z=U.transition;U.transition={};try{w()}finally{U.transition=z}},ve.unstable_act=W,ve.useCallback=function(w,z){return Ce.current.useCallback(w,z)},ve.useContext=function(w){return Ce.current.useContext(w)},ve.useDebugValue=function(){},ve.useDeferredValue=function(w){return Ce.current.useDeferredValue(w)},ve.useEffect=function(w,z){return Ce.current.useEffect(w,z)},ve.useId=function(){return Ce.current.useId()},ve.useImperativeHandle=function(w,z,ue){return Ce.current.useImperativeHandle(w,z,ue)},ve.useInsertionEffect=function(w,z){return Ce.current.useInsertionEffect(w,z)},ve.useLayoutEffect=function(w,z){return Ce.current.useLayoutEffect(w,z)},ve.useMemo=function(w,z){return Ce.current.useMemo(w,z)},ve.useReducer=function(w,z,ue){return Ce.current.useReducer(w,z,ue)},ve.useRef=function(w){return Ce.current.useRef(w)},ve.useState=function(w){return Ce.current.useState(w)},ve.useSyncExternalStore=function(w,z,ue){return Ce.current.useSyncExternalStore(w,z,ue)},ve.useTransition=function(){return Ce.current.useTransition()},ve.version="18.3.1",ve}var Qd;function Za(){return Qd||(Qd=1,Ta.exports=Im()),Ta.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Rm(){if(Yd)return Uo;Yd=1;var r=Za(),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(y,x,T){var _,P={},b=null,L=null;T!==void 0&&(b=""+T),x.key!==void 0&&(b=""+x.key),x.ref!==void 0&&(L=x.ref);for(_ in x)c.call(x,_)&&!h.hasOwnProperty(_)&&(P[_]=x[_]);if(y&&y.defaultProps)for(_ in x=y.defaultProps,x)P[_]===void 0&&(P[_]=x[_]);return{$$typeof:l,type:y,key:b,ref:L,props:P,_owner:f.current}}return Uo.Fragment=u,Uo.jsx=m,Uo.jsxs=m,Uo}var Kd;function Lm(){return Kd||(Kd=1,Pa.exports=Rm()),Pa.exports}var a=Lm(),E=Za();const gt=Gf(E),Dm=Nm({__proto__:null,default:gt},[E]);var gl={},_a={exports:{}},ht={},za={exports:{}},ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function Om(){return Gd||(Gd=1,function(r){function l(U,q){var W=U.length;U.push(q);e:for(;0<W;){var w=W-1>>>1,z=U[w];if(0<f(z,q))U[w]=q,U[W]=z,W=w;else break e}}function u(U){return U.length===0?null:U[0]}function c(U){if(U.length===0)return null;var q=U[0],W=U.pop();if(W!==q){U[0]=W;e:for(var w=0,z=U.length,ue=z>>>1;w<ue;){var se=2*(w+1)-1,pe=U[se],ce=se+1,we=U[ce];if(0>f(pe,W))ce<z&&0>f(we,pe)?(U[w]=we,U[ce]=W,w=ce):(U[w]=pe,U[se]=W,w=se);else if(ce<z&&0>f(we,W))U[w]=we,U[ce]=W,w=ce;else break e}}return q}function f(U,q){var W=U.sortIndex-q.sortIndex;return W!==0?W:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var m=Date,y=m.now();r.unstable_now=function(){return m.now()-y}}var x=[],T=[],_=1,P=null,b=3,L=!1,H=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(U){for(var q=u(T);q!==null;){if(q.callback===null)c(T);else if(q.startTime<=U)c(T),q.sortIndex=q.expirationTime,l(x,q);else break;q=u(T)}}function M(U){if(N=!1,F(U),!H)if(u(x)!==null)H=!0,Ve(oe);else{var q=u(T);q!==null&&Ce(M,q.startTime-U)}}function oe(U,q){H=!1,N&&(N=!1,V(Y),Y=-1),L=!0;var W=b;try{for(F(q),P=u(x);P!==null&&(!(P.expirationTime>q)||U&&!me());){var w=P.callback;if(typeof w=="function"){P.callback=null,b=P.priorityLevel;var z=w(P.expirationTime<=q);q=r.unstable_now(),typeof z=="function"?P.callback=z:P===u(x)&&c(x),F(q)}else c(x);P=u(x)}if(P!==null)var ue=!0;else{var se=u(T);se!==null&&Ce(M,se.startTime-q),ue=!1}return ue}finally{P=null,b=W,L=!1}}var re=!1,Z=null,Y=-1,ee=5,ye=-1;function me(){return!(r.unstable_now()-ye<ee)}function fe(){if(Z!==null){var U=r.unstable_now();ye=U;var q=!0;try{q=Z(!0,U)}finally{q?Pe():(re=!1,Z=null)}}else re=!1}var Pe;if(typeof B=="function")Pe=function(){B(fe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,lt=_e.port2;_e.port1.onmessage=fe,Pe=function(){lt.postMessage(null)}}else Pe=function(){D(fe,0)};function Ve(U){Z=U,re||(re=!0,Pe())}function Ce(U,q){Y=D(function(){U(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_continueExecution=function(){H||L||(H=!0,Ve(oe))},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return u(x)},r.unstable_next=function(U){switch(b){case 1:case 2:case 3:var q=3;break;default:q=b}var W=b;b=q;try{return U()}finally{b=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=b;b=U;try{return q()}finally{b=W}},r.unstable_scheduleCallback=function(U,q,W){var w=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?w+W:w):W=w,U){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=W+z,U={id:_++,callback:q,priorityLevel:U,startTime:W,expirationTime:z,sortIndex:-1},W>w?(U.sortIndex=W,l(T,U),u(x)===null&&U===u(T)&&(N?(V(Y),Y=-1):N=!0,Ce(M,W-w))):(U.sortIndex=z,l(x,U),H||L||(H=!0,Ve(oe))),U},r.unstable_shouldYield=me,r.unstable_wrapCallback=function(U){var q=b;return function(){var W=b;b=q;try{return U.apply(this,arguments)}finally{b=W}}}}(ba)),ba}var qd;function $m(){return qd||(qd=1,za.exports=Om()),za.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function Am(){if(Jd)return ht;Jd=1;var r=Za(),l=$m();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},P={};function b(e){return x.call(P,e)?!0:x.call(_,e)?!1:T.test(e)?P[e]=!0:(_[e]=!0,!1)}function L(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,t,n,o){if(t===null||typeof t>"u"||L(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function N(e,t,n,o,i,s,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=d}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new N(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var V=/[\-:]([a-z])/g;function B(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(V,B);D[t]=new N(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(V,B);D[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(V,B);D[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function F(e,t,n,o){var i=D.hasOwnProperty(t)?D[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H(t,n,i,o)&&(n=null),o||i===null?b(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var M=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),re=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),me=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Ce=Symbol.for("react.offscreen"),U=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,w;function z(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var ue=!1;function se(e,t){if(!e||ue)return"";ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var o=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){o=C}e.call(t.prototype)}else{try{throw Error()}catch(C){o=C}e()}}catch(C){if(C&&o&&typeof C.stack=="string"){for(var i=C.stack.split(`
`),s=o.stack.split(`
`),d=i.length-1,p=s.length-1;1<=d&&0<=p&&i[d]!==s[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==s[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==s[p]){var g=`
`+i[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=p);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function pe(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case re:return"Portal";case ee:return"Profiler";case Y:return"StrictMode";case Pe:return"Suspense";case _e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case me:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lt:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function we(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qe(e){var t=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){o=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vt(e){e._valueTracker||(e._valueTracker=Qe(e))}function Ze(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=xe(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yr(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rn(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=de(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oi(e,t){t=t.checked,t!=null&&F(e,"checked",t,!1)}function Hn(e,t){oi(e,t);var n=de(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?to(e,t.type,n):t.hasOwnProperty("defaultValue")&&to(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function to(e,t,n){(t!=="number"||Bn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function vn(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+de(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function no(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ii(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Wn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:de(n)}}function yn(e,t){var n=de(t.value),o=de(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function li(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function si(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?si(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,ai=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){A.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function ae(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function ge(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=ae(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Re=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Te(e,t){if(t){if(Re[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Fe(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var on=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,wr=null,Sr=null;function au(e){if(e=Po(e)){if(typeof Bl!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Ni(t),Bl(e.stateNode,e.type,t))}}function uu(e){wr?Sr?Sr.push(e):Sr=[e]:wr=e}function cu(){if(wr){var e=wr,t=Sr;if(Sr=wr=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function du(e,t){return e(t)}function fu(){}var Hl=!1;function pu(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return du(e,t,n)}finally{Hl=!1,(wr!==null||Sr!==null)&&(fu(),cu())}}function oo(e,t){var n=e.stateNode;if(n===null)return null;var o=Ni(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Wl=!1;if(y)try{var io={};Object.defineProperty(io,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Wl=!1}function $p(e,t,n,o,i,s,d,p,g){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(R){this.onError(R)}}var lo=!1,ui=null,ci=!1,Vl=null,Ap={onError:function(e){lo=!0,ui=e}};function Fp(e,t,n,o,i,s,d,p,g){lo=!1,ui=null,$p.apply(Ap,arguments)}function Mp(e,t,n,o,i,s,d,p,g){if(Fp.apply(this,arguments),lo){if(lo){var C=ui;lo=!1,ui=null}else throw Error(u(198));ci||(ci=!0,Vl=C)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mu(e){if(Yn(e)!==e)throw Error(u(188))}function Up(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return mu(i),e;if(s===o)return mu(i),t;s=s.sibling}throw Error(u(188))}if(n.return!==o.return)n=i,o=s;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,o=s;break}if(p===o){d=!0,o=i,n=s;break}p=p.sibling}if(!d){for(p=s.child;p;){if(p===n){d=!0,n=s,o=i;break}if(p===o){d=!0,o=s,n=i;break}p=p.sibling}if(!d)throw Error(u(189))}}if(n.alternate!==o)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function gu(e){return e=Up(e),e!==null?vu(e):null}function vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vu(e);if(t!==null)return t;e=e.sibling}return null}var yu=l.unstable_scheduleCallback,xu=l.unstable_cancelCallback,Bp=l.unstable_shouldYield,Hp=l.unstable_requestPaint,Me=l.unstable_now,Wp=l.unstable_getCurrentPriorityLevel,Ql=l.unstable_ImmediatePriority,wu=l.unstable_UserBlockingPriority,di=l.unstable_NormalPriority,Vp=l.unstable_LowPriority,Su=l.unstable_IdlePriority,fi=null,Qt=null;function Qp(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(fi,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Gp,Yp=Math.log,Kp=Math.LN2;function Gp(e){return e>>>=0,e===0?32:31-(Yp(e)/Kp|0)|0}var pi=64,hi=4194304;function so(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~i;p!==0?o=so(p):(s&=d,s!==0&&(o=so(s)))}else d=n&~i,d!==0?o=so(d):s!==0&&(o=so(s));if(o===0)return 0;if(t!==0&&t!==o&&(t&i)===0&&(i=o&-o,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-$t(t),i=1<<n,o|=e[n],t&=~i;return o}function qp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-$t(s),p=1<<d,g=i[d];g===-1?((p&n)===0||(p&o)!==0)&&(i[d]=qp(p,t)):g<=t&&(e.expiredLanes|=p),s&=~p}}function Yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ju(){var e=pi;return pi<<=1,(pi&4194240)===0&&(pi=64),e}function Kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function Xp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function Gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-$t(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var Ee=0;function ku(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Cu,ql,Eu,Pu,Tu,Jl=!1,gi=[],xn=null,wn=null,Sn=null,uo=new Map,co=new Map,jn=[],Zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _u(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":uo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(t.pointerId)}}function fo(e,t,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Po(t),t!==null&&ql(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function eh(e,t,n,o,i){switch(t){case"focusin":return xn=fo(xn,e,t,n,o,i),!0;case"dragenter":return wn=fo(wn,e,t,n,o,i),!0;case"mouseover":return Sn=fo(Sn,e,t,n,o,i),!0;case"pointerover":var s=i.pointerId;return uo.set(s,fo(uo.get(s)||null,e,t,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,co.set(s,fo(co.get(s)||null,e,t,n,o,i)),!0}return!1}function zu(e){var t=Kn(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=hu(n),t!==null){e.blockedOn=t,Tu(e.priority,function(){Eu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);on=o,n.target.dispatchEvent(o),on=null}else return t=Po(n),t!==null&&ql(t),e.blockedOn=n,!1;t.shift()}return!0}function bu(e,t,n){vi(e)&&n.delete(t)}function th(){Jl=!1,xn!==null&&vi(xn)&&(xn=null),wn!==null&&vi(wn)&&(wn=null),Sn!==null&&vi(Sn)&&(Sn=null),uo.forEach(bu),co.forEach(bu)}function po(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,th)))}function ho(e){function t(i){return po(i,e)}if(0<gi.length){po(gi[0],e);for(var n=1;n<gi.length;n++){var o=gi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(xn!==null&&po(xn,e),wn!==null&&po(wn,e),Sn!==null&&po(Sn,e),uo.forEach(t),co.forEach(t),n=0;n<jn.length;n++)o=jn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)zu(n),n.blockedOn===null&&jn.shift()}var jr=M.ReactCurrentBatchConfig,yi=!0;function nh(e,t,n,o){var i=Ee,s=jr.transition;jr.transition=null;try{Ee=1,Xl(e,t,n,o)}finally{Ee=i,jr.transition=s}}function rh(e,t,n,o){var i=Ee,s=jr.transition;jr.transition=null;try{Ee=4,Xl(e,t,n,o)}finally{Ee=i,jr.transition=s}}function Xl(e,t,n,o){if(yi){var i=Zl(e,t,n,o);if(i===null)gs(e,t,o,xi,n),_u(e,o);else if(eh(i,e,t,n,o))o.stopPropagation();else if(_u(e,o),t&4&&-1<Zp.indexOf(e)){for(;i!==null;){var s=Po(i);if(s!==null&&Cu(s),s=Zl(e,t,n,o),s===null&&gs(e,t,o,xi,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else gs(e,t,o,null,n)}}var xi=null;function Zl(e,t,n,o){if(xi=null,e=ln(o),e=Kn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function Nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wp()){case Ql:return 1;case wu:return 4;case di:case Vp:return 16;case Su:return 536870912;default:return 16}default:return 16}}var kn=null,es=null,wi=null;function Iu(){if(wi)return wi;var e,t=es,n=t.length,o,i="value"in kn?kn.value:kn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===i[s-o];o++);return wi=i.slice(e,1<o?1-o:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function Ru(){return!1}function yt(e){function t(n,o,i,s,d){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ji:Ru,this.isPropagationStopped=Ru,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=yt(kr),mo=W({},kr,{view:0,detail:0}),oh=yt(mo),ns,rs,go,ki=W({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(ns=e.screenX-go.screenX,rs=e.screenY-go.screenY):rs=ns=0,go=e),ns)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),Lu=yt(ki),ih=W({},ki,{dataTransfer:0}),lh=yt(ih),sh=W({},mo,{relatedTarget:0}),os=yt(sh),ah=W({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),uh=yt(ah),ch=W({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dh=yt(ch),fh=W({},kr,{data:0}),Du=yt(fh),ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mh[e])?!!t[e]:!1}function is(){return gh}var vh=W({},mo,{key:function(e){if(e.key){var t=ph[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yh=yt(vh),xh=W({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=yt(xh),wh=W({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Sh=yt(wh),jh=W({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=yt(jh),Ch=W({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eh=yt(Ch),Ph=[9,13,27,32],ls=y&&"CompositionEvent"in window,vo=null;y&&"documentMode"in document&&(vo=document.documentMode);var Th=y&&"TextEvent"in window&&!vo,$u=y&&(!ls||vo&&8<vo&&11>=vo),Au=" ",Fu=!1;function Mu(e,t){switch(e){case"keyup":return Ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function _h(e,t){switch(e){case"compositionend":return Uu(t);case"keypress":return t.which!==32?null:(Fu=!0,Au);case"textInput":return e=t.data,e===Au&&Fu?null:e;default:return null}}function zh(e,t){if(Cr)return e==="compositionend"||!ls&&Mu(e,t)?(e=Iu(),wi=es=kn=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bh[e.type]:t==="textarea"}function Hu(e,t,n,o){uu(o),t=_i(t,"onChange"),0<t.length&&(n=new ts("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var yo=null,xo=null;function Nh(e){sc(e,0)}function Ci(e){var t=zr(e);if(Ze(t))return e}function Ih(e,t){if(e==="change")return t}var Wu=!1;if(y){var ss;if(y){var as="oninput"in document;if(!as){var Vu=document.createElement("div");Vu.setAttribute("oninput","return;"),as=typeof Vu.oninput=="function"}ss=as}else ss=!1;Wu=ss&&(!document.documentMode||9<document.documentMode)}function Qu(){yo&&(yo.detachEvent("onpropertychange",Yu),xo=yo=null)}function Yu(e){if(e.propertyName==="value"&&Ci(xo)){var t=[];Hu(t,xo,e,ln(e)),pu(Nh,t)}}function Rh(e,t,n){e==="focusin"?(Qu(),yo=t,xo=n,yo.attachEvent("onpropertychange",Yu)):e==="focusout"&&Qu()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(xo)}function Dh(e,t){if(e==="click")return Ci(t)}function Oh(e,t){if(e==="input"||e==="change")return Ci(t)}function $h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:$h;function wo(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!x.call(t,i)||!At(e[i],t[i]))return!1}return!0}function Ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gu(e,t){var n=Ku(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ku(n)}}function qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=Bn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bn(e.document)}return t}function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ah(e){var t=Ju(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qu(n.ownerDocument.documentElement,n)){if(o!==null&&us(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=Gu(n,s);var d=Gu(n,o);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fh=y&&"documentMode"in document&&11>=document.documentMode,Er=null,cs=null,So=null,ds=!1;function Xu(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ds||Er==null||Er!==Bn(o)||(o=Er,"selectionStart"in o&&us(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),So&&wo(So,o)||(So=o,o=_i(cs,"onSelect"),0<o.length&&(t=new ts("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Er)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},fs={},Zu={};y&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Pi(e){if(fs[e])return fs[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zu)return fs[e]=t[n];return e}var ec=Pi("animationend"),tc=Pi("animationiteration"),nc=Pi("animationstart"),rc=Pi("transitionend"),oc=new Map,ic="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){oc.set(e,t),h(t,[e])}for(var ps=0;ps<ic.length;ps++){var hs=ic[ps],Mh=hs.toLowerCase(),Uh=hs[0].toUpperCase()+hs.slice(1);Cn(Mh,"on"+Uh)}Cn(ec,"onAnimationEnd"),Cn(tc,"onAnimationIteration"),Cn(nc,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(rc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bh=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function lc(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Mp(o,t,void 0,e),e.currentTarget=null}function sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var d=o.length-1;0<=d;d--){var p=o[d],g=p.instance,C=p.currentTarget;if(p=p.listener,g!==s&&i.isPropagationStopped())break e;lc(i,p,C),s=g}else for(d=0;d<o.length;d++){if(p=o[d],g=p.instance,C=p.currentTarget,p=p.listener,g!==s&&i.isPropagationStopped())break e;lc(i,p,C),s=g}}}if(ci)throw e=Vl,ci=!1,Vl=null,e}function be(e,t){var n=t[js];n===void 0&&(n=t[js]=new Set);var o=e+"__bubble";n.has(o)||(ac(t,e,2,!1),n.add(o))}function ms(e,t,n){var o=0;t&&(o|=4),ac(n,e,o,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[Ti]){e[Ti]=!0,c.forEach(function(n){n!=="selectionchange"&&(Bh.has(n)||ms(n,!1,e),ms(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,ms("selectionchange",!1,t))}}function ac(e,t,n,o){switch(Nu(t)){case 1:var i=nh;break;case 4:i=rh;break;default:i=Xl}n=i.bind(null,t,n,e),i=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gs(e,t,n,o,i){var s=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=o.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===i||g.nodeType===8&&g.parentNode===i))return;d=d.return}for(;p!==null;){if(d=Kn(p),d===null)return;if(g=d.tag,g===5||g===6){o=s=d;continue e}p=p.parentNode}}o=o.return}pu(function(){var C=s,R=ln(n),O=[];e:{var I=oc.get(e);if(I!==void 0){var Q=ts,G=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":Q=yh;break;case"focusin":G="focus",Q=os;break;case"focusout":G="blur",Q=os;break;case"beforeblur":case"afterblur":Q=os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Sh;break;case ec:case tc:case nc:Q=uh;break;case rc:Q=kh;break;case"scroll":Q=oh;break;case"wheel":Q=Eh;break;case"copy":case"cut":case"paste":Q=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Ou}var J=(t&4)!==0,Ue=!J&&e==="scroll",j=J?I!==null?I+"Capture":null:I;J=[];for(var v=C,k;v!==null;){k=v;var $=k.stateNode;if(k.tag===5&&$!==null&&(k=$,j!==null&&($=oo(v,j),$!=null&&J.push(Co(v,$,k)))),Ue)break;v=v.return}0<J.length&&(I=new Q(I,G,null,n,R),O.push({event:I,listeners:J}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",I&&n!==on&&(G=n.relatedTarget||n.fromElement)&&(Kn(G)||G[sn]))break e;if((Q||I)&&(I=R.window===R?R:(I=R.ownerDocument)?I.defaultView||I.parentWindow:window,Q?(G=n.relatedTarget||n.toElement,Q=C,G=G?Kn(G):null,G!==null&&(Ue=Yn(G),G!==Ue||G.tag!==5&&G.tag!==6)&&(G=null)):(Q=null,G=C),Q!==G)){if(J=Lu,$="onMouseLeave",j="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(J=Ou,$="onPointerLeave",j="onPointerEnter",v="pointer"),Ue=Q==null?I:zr(Q),k=G==null?I:zr(G),I=new J($,v+"leave",Q,n,R),I.target=Ue,I.relatedTarget=k,$=null,Kn(R)===C&&(J=new J(j,v+"enter",G,n,R),J.target=k,J.relatedTarget=Ue,$=J),Ue=$,Q&&G)t:{for(J=Q,j=G,v=0,k=J;k;k=Tr(k))v++;for(k=0,$=j;$;$=Tr($))k++;for(;0<v-k;)J=Tr(J),v--;for(;0<k-v;)j=Tr(j),k--;for(;v--;){if(J===j||j!==null&&J===j.alternate)break t;J=Tr(J),j=Tr(j)}J=null}else J=null;Q!==null&&uc(O,I,Q,J,!1),G!==null&&Ue!==null&&uc(O,Ue,G,J,!0)}}e:{if(I=C?zr(C):window,Q=I.nodeName&&I.nodeName.toLowerCase(),Q==="select"||Q==="input"&&I.type==="file")var X=Ih;else if(Bu(I))if(Wu)X=Oh;else{X=Lh;var te=Rh}else(Q=I.nodeName)&&Q.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(X=Dh);if(X&&(X=X(e,C))){Hu(O,X,n,R);break e}te&&te(e,I,C),e==="focusout"&&(te=I._wrapperState)&&te.controlled&&I.type==="number"&&to(I,"number",I.value)}switch(te=C?zr(C):window,e){case"focusin":(Bu(te)||te.contentEditable==="true")&&(Er=te,cs=C,So=null);break;case"focusout":So=cs=Er=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,Xu(O,n,R);break;case"selectionchange":if(Fh)break;case"keydown":case"keyup":Xu(O,n,R)}var ne;if(ls)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Cr?Mu(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&($u&&n.locale!=="ko"&&(Cr||le!=="onCompositionStart"?le==="onCompositionEnd"&&Cr&&(ne=Iu()):(kn=R,es="value"in kn?kn.value:kn.textContent,Cr=!0)),te=_i(C,le),0<te.length&&(le=new Du(le,e,null,n,R),O.push({event:le,listeners:te}),ne?le.data=ne:(ne=Uu(n),ne!==null&&(le.data=ne)))),(ne=Th?_h(e,n):zh(e,n))&&(C=_i(C,"onBeforeInput"),0<C.length&&(R=new Du("onBeforeInput","beforeinput",null,n,R),O.push({event:R,listeners:C}),R.data=ne))}sc(O,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _i(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oo(e,n),s!=null&&o.unshift(Co(e,s,i)),s=oo(e,t),s!=null&&o.push(Co(e,s,i))),e=e.return}return o}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uc(e,t,n,o,i){for(var s=t._reactName,d=[];n!==null&&n!==o;){var p=n,g=p.alternate,C=p.stateNode;if(g!==null&&g===o)break;p.tag===5&&C!==null&&(p=C,i?(g=oo(n,s),g!=null&&d.unshift(Co(n,g,p))):i||(g=oo(n,s),g!=null&&d.push(Co(n,g,p)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Hh=/\r\n?/g,Wh=/\u0000|\uFFFD/g;function cc(e){return(typeof e=="string"?e:""+e).replace(Hh,`
`).replace(Wh,"")}function zi(e,t,n){if(t=cc(t),cc(e)!==t&&n)throw Error(u(425))}function bi(){}var vs=null,ys=null;function xs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ws=typeof setTimeout=="function"?setTimeout:void 0,Vh=typeof clearTimeout=="function"?clearTimeout:void 0,dc=typeof Promise=="function"?Promise:void 0,Qh=typeof queueMicrotask=="function"?queueMicrotask:typeof dc<"u"?function(e){return dc.resolve(null).then(e).catch(Yh)}:ws;function Yh(e){setTimeout(function(){throw e})}function Ss(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),ho(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);ho(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Yt="__reactFiber$"+_r,Eo="__reactProps$"+_r,sn="__reactContainer$"+_r,js="__reactEvents$"+_r,Kh="__reactListeners$"+_r,Gh="__reactHandles$"+_r;function Kn(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fc(e);e!==null;){if(n=e[Yt])return n;e=fc(e)}return t}e=n,n=e.parentNode}return null}function Po(e){return e=e[Yt]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Ni(e){return e[Eo]||null}var ks=[],br=-1;function Pn(e){return{current:e}}function Ne(e){0>br||(e.current=ks[br],ks[br]=null,br--)}function ze(e,t){br++,ks[br]=e.current,e.current=t}var Tn={},nt=Pn(Tn),ut=Pn(!1),Gn=Tn;function Nr(e,t){var n=e.type.contextTypes;if(!n)return Tn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function Ii(){Ne(ut),Ne(nt)}function pc(e,t,n){if(nt.current!==Tn)throw Error(u(168));ze(nt,t),ze(ut,n)}function hc(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(u(108,we(e)||"Unknown",i));return W({},n,o)}function Ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Gn=nt.current,ze(nt,e),ze(ut,ut.current),!0}function mc(e,t,n){var o=e.stateNode;if(!o)throw Error(u(169));n?(e=hc(e,t,Gn),o.__reactInternalMemoizedMergedChildContext=e,Ne(ut),Ne(nt),ze(nt,e)):Ne(ut),ze(ut,n)}var an=null,Li=!1,Cs=!1;function gc(e){an===null?an=[e]:an.push(e)}function qh(e){Li=!0,gc(e)}function _n(){if(!Cs&&an!==null){Cs=!0;var e=0,t=Ee;try{var n=an;for(Ee=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}an=null,Li=!1}catch(i){throw an!==null&&(an=an.slice(e+1)),yu(Ql,_n),i}finally{Ee=t,Cs=!1}}return null}var Ir=[],Rr=0,Di=null,Oi=0,kt=[],Ct=0,qn=null,un=1,cn="";function Jn(e,t){Ir[Rr++]=Oi,Ir[Rr++]=Di,Di=e,Oi=t}function vc(e,t,n){kt[Ct++]=un,kt[Ct++]=cn,kt[Ct++]=qn,qn=e;var o=un;e=cn;var i=32-$t(o)-1;o&=~(1<<i),n+=1;var s=32-$t(t)+i;if(30<s){var d=i-i%5;s=(o&(1<<d)-1).toString(32),o>>=d,i-=d,un=1<<32-$t(t)+i|n<<i|o,cn=s+e}else un=1<<s|n<<i|o,cn=e}function Es(e){e.return!==null&&(Jn(e,1),vc(e,1,0))}function Ps(e){for(;e===Di;)Di=Ir[--Rr],Ir[Rr]=null,Oi=Ir[--Rr],Ir[Rr]=null;for(;e===qn;)qn=kt[--Ct],kt[Ct]=null,cn=kt[--Ct],kt[Ct]=null,un=kt[--Ct],kt[Ct]=null}var xt=null,wt=null,Le=!1,Ft=null;function yc(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,wt=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:un,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,wt=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _s(e){if(Le){var t=wt;if(t){var n=t;if(!xc(e,t)){if(Ts(e))throw Error(u(418));t=En(n.nextSibling);var o=xt;t&&xc(e,t)?yc(o,n):(e.flags=e.flags&-4097|2,Le=!1,xt=e)}}else{if(Ts(e))throw Error(u(418));e.flags=e.flags&-4097|2,Le=!1,xt=e}}}function wc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function $i(e){if(e!==xt)return!1;if(!Le)return wc(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xs(e.type,e.memoizedProps)),t&&(t=wt)){if(Ts(e))throw Sc(),Error(u(418));for(;t;)yc(e,t),t=En(t.nextSibling)}if(wc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=xt?En(e.stateNode.nextSibling):null;return!0}function Sc(){for(var e=wt;e;)e=En(e.nextSibling)}function Lr(){wt=xt=null,Le=!1}function zs(e){Ft===null?Ft=[e]:Ft.push(e)}var Jh=M.ReactCurrentBatchConfig;function To(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var o=n.stateNode}if(!o)throw Error(u(147,e));var i=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(d){var p=i.refs;d===null?delete p[s]:p[s]=d},t._stringRef=s,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function Ai(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jc(e){var t=e._init;return t(e._payload)}function kc(e){function t(j,v){if(e){var k=j.deletions;k===null?(j.deletions=[v],j.flags|=16):k.push(v)}}function n(j,v){if(!e)return null;for(;v!==null;)t(j,v),v=v.sibling;return null}function o(j,v){for(j=new Map;v!==null;)v.key!==null?j.set(v.key,v):j.set(v.index,v),v=v.sibling;return j}function i(j,v){return j=On(j,v),j.index=0,j.sibling=null,j}function s(j,v,k){return j.index=k,e?(k=j.alternate,k!==null?(k=k.index,k<v?(j.flags|=2,v):k):(j.flags|=2,v)):(j.flags|=1048576,v)}function d(j){return e&&j.alternate===null&&(j.flags|=2),j}function p(j,v,k,$){return v===null||v.tag!==6?(v=wa(k,j.mode,$),v.return=j,v):(v=i(v,k),v.return=j,v)}function g(j,v,k,$){var X=k.type;return X===Z?R(j,v,k.props.children,$,k.key):v!==null&&(v.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ve&&jc(X)===v.type)?($=i(v,k.props),$.ref=To(j,v,k),$.return=j,$):($=al(k.type,k.key,k.props,null,j.mode,$),$.ref=To(j,v,k),$.return=j,$)}function C(j,v,k,$){return v===null||v.tag!==4||v.stateNode.containerInfo!==k.containerInfo||v.stateNode.implementation!==k.implementation?(v=Sa(k,j.mode,$),v.return=j,v):(v=i(v,k.children||[]),v.return=j,v)}function R(j,v,k,$,X){return v===null||v.tag!==7?(v=ir(k,j.mode,$,X),v.return=j,v):(v=i(v,k),v.return=j,v)}function O(j,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wa(""+v,j.mode,k),v.return=j,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oe:return k=al(v.type,v.key,v.props,null,j.mode,k),k.ref=To(j,null,v),k.return=j,k;case re:return v=Sa(v,j.mode,k),v.return=j,v;case Ve:var $=v._init;return O(j,$(v._payload),k)}if(Wn(v)||q(v))return v=ir(v,j.mode,k,null),v.return=j,v;Ai(j,v)}return null}function I(j,v,k,$){var X=v!==null?v.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return X!==null?null:p(j,v,""+k,$);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case oe:return k.key===X?g(j,v,k,$):null;case re:return k.key===X?C(j,v,k,$):null;case Ve:return X=k._init,I(j,v,X(k._payload),$)}if(Wn(k)||q(k))return X!==null?null:R(j,v,k,$,null);Ai(j,k)}return null}function Q(j,v,k,$,X){if(typeof $=="string"&&$!==""||typeof $=="number")return j=j.get(k)||null,p(v,j,""+$,X);if(typeof $=="object"&&$!==null){switch($.$$typeof){case oe:return j=j.get($.key===null?k:$.key)||null,g(v,j,$,X);case re:return j=j.get($.key===null?k:$.key)||null,C(v,j,$,X);case Ve:var te=$._init;return Q(j,v,k,te($._payload),X)}if(Wn($)||q($))return j=j.get(k)||null,R(v,j,$,X,null);Ai(v,$)}return null}function G(j,v,k,$){for(var X=null,te=null,ne=v,le=v=0,Je=null;ne!==null&&le<k.length;le++){ne.index>le?(Je=ne,ne=null):Je=ne.sibling;var je=I(j,ne,k[le],$);if(je===null){ne===null&&(ne=Je);break}e&&ne&&je.alternate===null&&t(j,ne),v=s(je,v,le),te===null?X=je:te.sibling=je,te=je,ne=Je}if(le===k.length)return n(j,ne),Le&&Jn(j,le),X;if(ne===null){for(;le<k.length;le++)ne=O(j,k[le],$),ne!==null&&(v=s(ne,v,le),te===null?X=ne:te.sibling=ne,te=ne);return Le&&Jn(j,le),X}for(ne=o(j,ne);le<k.length;le++)Je=Q(ne,j,le,k[le],$),Je!==null&&(e&&Je.alternate!==null&&ne.delete(Je.key===null?le:Je.key),v=s(Je,v,le),te===null?X=Je:te.sibling=Je,te=Je);return e&&ne.forEach(function($n){return t(j,$n)}),Le&&Jn(j,le),X}function J(j,v,k,$){var X=q(k);if(typeof X!="function")throw Error(u(150));if(k=X.call(k),k==null)throw Error(u(151));for(var te=X=null,ne=v,le=v=0,Je=null,je=k.next();ne!==null&&!je.done;le++,je=k.next()){ne.index>le?(Je=ne,ne=null):Je=ne.sibling;var $n=I(j,ne,je.value,$);if($n===null){ne===null&&(ne=Je);break}e&&ne&&$n.alternate===null&&t(j,ne),v=s($n,v,le),te===null?X=$n:te.sibling=$n,te=$n,ne=Je}if(je.done)return n(j,ne),Le&&Jn(j,le),X;if(ne===null){for(;!je.done;le++,je=k.next())je=O(j,je.value,$),je!==null&&(v=s(je,v,le),te===null?X=je:te.sibling=je,te=je);return Le&&Jn(j,le),X}for(ne=o(j,ne);!je.done;le++,je=k.next())je=Q(ne,j,le,je.value,$),je!==null&&(e&&je.alternate!==null&&ne.delete(je.key===null?le:je.key),v=s(je,v,le),te===null?X=je:te.sibling=je,te=je);return e&&ne.forEach(function(bm){return t(j,bm)}),Le&&Jn(j,le),X}function Ue(j,v,k,$){if(typeof k=="object"&&k!==null&&k.type===Z&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case oe:e:{for(var X=k.key,te=v;te!==null;){if(te.key===X){if(X=k.type,X===Z){if(te.tag===7){n(j,te.sibling),v=i(te,k.props.children),v.return=j,j=v;break e}}else if(te.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ve&&jc(X)===te.type){n(j,te.sibling),v=i(te,k.props),v.ref=To(j,te,k),v.return=j,j=v;break e}n(j,te);break}else t(j,te);te=te.sibling}k.type===Z?(v=ir(k.props.children,j.mode,$,k.key),v.return=j,j=v):($=al(k.type,k.key,k.props,null,j.mode,$),$.ref=To(j,v,k),$.return=j,j=$)}return d(j);case re:e:{for(te=k.key;v!==null;){if(v.key===te)if(v.tag===4&&v.stateNode.containerInfo===k.containerInfo&&v.stateNode.implementation===k.implementation){n(j,v.sibling),v=i(v,k.children||[]),v.return=j,j=v;break e}else{n(j,v);break}else t(j,v);v=v.sibling}v=Sa(k,j.mode,$),v.return=j,j=v}return d(j);case Ve:return te=k._init,Ue(j,v,te(k._payload),$)}if(Wn(k))return G(j,v,k,$);if(q(k))return J(j,v,k,$);Ai(j,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,v!==null&&v.tag===6?(n(j,v.sibling),v=i(v,k),v.return=j,j=v):(n(j,v),v=wa(k,j.mode,$),v.return=j,j=v),d(j)):n(j,v)}return Ue}var Dr=kc(!0),Cc=kc(!1),Fi=Pn(null),Mi=null,Or=null,bs=null;function Ns(){bs=Or=Mi=null}function Is(e){var t=Fi.current;Ne(Fi),e._currentValue=t}function Rs(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){Mi=e,bs=Or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(dt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(bs!==e)if(e={context:e,memoizedValue:t,next:null},Or===null){if(Mi===null)throw Error(u(308));Or=e,Mi.dependencies={lanes:0,firstContext:e}}else Or=Or.next=e;return t}var Xn=null;function Ls(e){Xn===null?Xn=[e]:Xn.push(e)}function Ec(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,Ls(t)):(n.next=i.next,i.next=n),t.interleaved=n,dn(e,o)}function dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Se&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,dn(e,n)}return i=o.interleaved,i===null?(t.next=t,Ls(o)):(t.next=i.next,i.next=t),o.interleaved=t,dn(e,n)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Gl(e,n)}}function Tc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bi(e,t,n,o){var i=e.updateQueue;zn=!1;var s=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var g=p,C=g.next;g.next=null,d===null?s=C:d.next=C,d=g;var R=e.alternate;R!==null&&(R=R.updateQueue,p=R.lastBaseUpdate,p!==d&&(p===null?R.firstBaseUpdate=C:p.next=C,R.lastBaseUpdate=g))}if(s!==null){var O=i.baseState;d=0,R=C=g=null,p=s;do{var I=p.lane,Q=p.eventTime;if((o&I)===I){R!==null&&(R=R.next={eventTime:Q,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var G=e,J=p;switch(I=t,Q=n,J.tag){case 1:if(G=J.payload,typeof G=="function"){O=G.call(Q,O,I);break e}O=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=J.payload,I=typeof G=="function"?G.call(Q,O,I):G,I==null)break e;O=W({},O,I);break e;case 2:zn=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,I=i.effects,I===null?i.effects=[p]:I.push(p))}else Q={eventTime:Q,lane:I,tag:p.tag,payload:p.payload,callback:p.callback,next:null},R===null?(C=R=Q,g=O):R=R.next=Q,d|=I;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;I=p,p=I.next,I.next=null,i.lastBaseUpdate=I,i.shared.pending=null}}while(!0);if(R===null&&(g=O),i.baseState=g,i.firstBaseUpdate=C,i.lastBaseUpdate=R,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);tr|=d,e.lanes=d,e.memoizedState=O}}function _c(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(u(191,i));i.call(o)}}}var _o={},Kt=Pn(_o),zo=Pn(_o),bo=Pn(_o);function Zn(e){if(e===_o)throw Error(u(174));return e}function Os(e,t){switch(ze(bo,t),ze(zo,e),ze(Kt,_o),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ro(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ro(t,e)}Ne(Kt),ze(Kt,t)}function Ar(){Ne(Kt),Ne(zo),Ne(bo)}function zc(e){Zn(bo.current);var t=Zn(Kt.current),n=ro(t,e.type);t!==n&&(ze(zo,e),ze(Kt,n))}function $s(e){zo.current===e&&(Ne(Kt),Ne(zo))}var De=Pn(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var As=[];function Fs(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var Wi=M.ReactCurrentDispatcher,Ms=M.ReactCurrentBatchConfig,er=0,Oe=null,Ye=null,Ge=null,Vi=!1,No=!1,Io=0,Xh=0;function rt(){throw Error(u(321))}function Us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Bs(e,t,n,o,i,s){if(er=s,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wi.current=e===null||e.memoizedState===null?nm:rm,e=n(o,i),No){s=0;do{if(No=!1,Io=0,25<=s)throw Error(u(301));s+=1,Ge=Ye=null,t.updateQueue=null,Wi.current=om,e=n(o,i)}while(No)}if(Wi.current=Ki,t=Ye!==null&&Ye.next!==null,er=0,Ge=Ye=Oe=null,Vi=!1,t)throw Error(u(300));return e}function Hs(){var e=Io!==0;return Io=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Oe.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Pt(){if(Ye===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=Ge===null?Oe.memoizedState:Ge.next;if(t!==null)Ge=t,Ye=e;else{if(e===null)throw Error(u(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Ge===null?Oe.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ro(e,t){return typeof t=="function"?t(e):t}function Ws(e){var t=Pt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var o=Ye,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var d=i.next;i.next=s.next,s.next=d}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var p=d=null,g=null,C=s;do{var R=C.lane;if((er&R)===R)g!==null&&(g=g.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),o=C.hasEagerState?C.eagerState:e(o,C.action);else{var O={lane:R,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};g===null?(p=g=O,d=o):g=g.next=O,Oe.lanes|=R,tr|=R}C=C.next}while(C!==null&&C!==s);g===null?d=o:g.next=p,At(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=g,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Oe.lanes|=s,tr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vs(e){var t=Pt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do s=e(s,d.action),d=d.next;while(d!==i);At(s,t.memoizedState)||(dt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function bc(){}function Nc(e,t){var n=Oe,o=Pt(),i=t(),s=!At(o.memoizedState,i);if(s&&(o.memoizedState=i,dt=!0),o=o.queue,Qs(Lc.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Lo(9,Rc.bind(null,n,o,i,t),void 0,null),qe===null)throw Error(u(349));(er&30)!==0||Ic(n,t,i)}return i}function Ic(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rc(e,t,n,o){t.value=n,t.getSnapshot=o,Dc(t)&&Oc(e)}function Lc(e,t,n){return n(function(){Dc(t)&&Oc(e)})}function Dc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function Oc(e){var t=dn(e,1);t!==null&&Ht(t,e,1,-1)}function $c(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t.queue=e,e=e.dispatch=tm.bind(null,Oe,e),[t.memoizedState,e]}function Lo(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Ac(){return Pt().memoizedState}function Qi(e,t,n,o){var i=Gt();Oe.flags|=e,i.memoizedState=Lo(1|t,n,void 0,o===void 0?null:o)}function Yi(e,t,n,o){var i=Pt();o=o===void 0?null:o;var s=void 0;if(Ye!==null){var d=Ye.memoizedState;if(s=d.destroy,o!==null&&Us(o,d.deps)){i.memoizedState=Lo(t,n,s,o);return}}Oe.flags|=e,i.memoizedState=Lo(1|t,n,s,o)}function Fc(e,t){return Qi(8390656,8,e,t)}function Qs(e,t){return Yi(2048,8,e,t)}function Mc(e,t){return Yi(4,2,e,t)}function Uc(e,t){return Yi(4,4,e,t)}function Bc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hc(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4,4,Bc.bind(null,t,e),n)}function Ys(){}function Wc(e,t){var n=Pt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Us(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Vc(e,t){var n=Pt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Us(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Qc(e,t,n){return(er&21)===0?(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n):(At(n,t)||(n=ju(),Oe.lanes|=n,tr|=n,e.baseState=!0),t)}function Zh(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var o=Ms.transition;Ms.transition={};try{e(!1),t()}finally{Ee=n,Ms.transition=o}}function Yc(){return Pt().memoizedState}function em(e,t,n){var o=Ln(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Kc(e))Gc(t,n);else if(n=Ec(e,t,n,o),n!==null){var i=at();Ht(n,e,o,i),qc(n,t,o)}}function tm(e,t,n){var o=Ln(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kc(e))Gc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,p=s(d,n);if(i.hasEagerState=!0,i.eagerState=p,At(p,d)){var g=t.interleaved;g===null?(i.next=i,Ls(t)):(i.next=g.next,g.next=i),t.interleaved=i;return}}catch{}finally{}n=Ec(e,t,i,o),n!==null&&(i=at(),Ht(n,e,o,i),qc(n,t,o))}}function Kc(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function Gc(e,t){No=Vi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qc(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Gl(e,n)}}var Ki={readContext:Et,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},nm={readContext:Et,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4194308,4,Bc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qi(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Gt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=em.bind(null,Oe,e),[o.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:$c,useDebugValue:Ys,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=$c(!1),t=e[0];return e=Zh.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Oe,i=Gt();if(Le){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),qe===null)throw Error(u(349));(er&30)!==0||Ic(o,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Fc(Lc.bind(null,o,s,e),[e]),o.flags|=2048,Lo(9,Rc.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=Gt(),t=qe.identifierPrefix;if(Le){var n=cn,o=un;n=(o&~(1<<32-$t(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Io++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rm={readContext:Et,useCallback:Wc,useContext:Et,useEffect:Qs,useImperativeHandle:Hc,useInsertionEffect:Mc,useLayoutEffect:Uc,useMemo:Vc,useReducer:Ws,useRef:Ac,useState:function(){return Ws(Ro)},useDebugValue:Ys,useDeferredValue:function(e){var t=Pt();return Qc(t,Ye.memoizedState,e)},useTransition:function(){var e=Ws(Ro)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:bc,useSyncExternalStore:Nc,useId:Yc,unstable_isNewReconciler:!1},om={readContext:Et,useCallback:Wc,useContext:Et,useEffect:Qs,useImperativeHandle:Hc,useInsertionEffect:Mc,useLayoutEffect:Uc,useMemo:Vc,useReducer:Vs,useRef:Ac,useState:function(){return Vs(Ro)},useDebugValue:Ys,useDeferredValue:function(e){var t=Pt();return Ye===null?t.memoizedState=e:Qc(t,Ye.memoizedState,e)},useTransition:function(){var e=Vs(Ro)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:bc,useSyncExternalStore:Nc,useId:Yc,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ks(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gi={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=at(),i=Ln(e),s=fn(o,i);s.payload=t,n!=null&&(s.callback=n),t=bn(e,s,i),t!==null&&(Ht(t,e,i,o),Ui(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=at(),i=Ln(e),s=fn(o,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=bn(e,s,i),t!==null&&(Ht(t,e,i,o),Ui(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),o=Ln(e),i=fn(n,o);i.tag=2,t!=null&&(i.callback=t),t=bn(e,i,o),t!==null&&(Ht(t,e,o,n),Ui(t,e,o))}};function Jc(e,t,n,o,i,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,d):t.prototype&&t.prototype.isPureReactComponent?!wo(n,o)||!wo(i,s):!0}function Xc(e,t,n){var o=!1,i=Tn,s=t.contextType;return typeof s=="object"&&s!==null?s=Et(s):(i=ct(t)?Gn:nt.current,o=t.contextTypes,s=(o=o!=null)?Nr(e,i):Tn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Zc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Gi.enqueueReplaceState(t,t.state,null)}function Gs(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ds(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Et(s):(s=ct(t)?Gn:nt.current,i.context=Nr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ks(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Gi.enqueueReplaceState(i,i.state,null),Bi(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t){try{var n="",o=t;do n+=pe(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function qs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Js(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var im=typeof WeakMap=="function"?WeakMap:Map;function ed(e,t,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){nl||(nl=!0,fa=o),Js(e,t)},n}function td(e,t,n){n=fn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){Js(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Js(e,t),typeof o!="function"&&(In===null?In=new Set([this]):In.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function nd(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new im;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=xm.bind(null,e,t,n),t.then(e,e))}function rd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function od(e,t,n,o,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=fn(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var lm=M.ReactCurrentOwner,dt=!1;function st(e,t,n,o){t.child=e===null?Cc(t,null,n,o):Dr(t,e.child,n,o)}function id(e,t,n,o,i){n=n.render;var s=t.ref;return $r(t,i),o=Bs(e,t,n,o,s,i),n=Hs(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(Le&&n&&Es(t),t.flags|=1,st(e,t,o,i),t.child)}function ld(e,t,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!xa(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,sd(e,t,s,o,i)):(e=al(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(d,o)&&e.ref===t.ref)return pn(e,t,i)}return t.flags|=1,e=On(s,o),e.ref=t.ref,e.return=t,t.child=e}function sd(e,t,n,o,i){if(e!==null){var s=e.memoizedProps;if(wo(s,o)&&e.ref===t.ref)if(dt=!1,t.pendingProps=o=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,pn(e,t,i)}return Xs(e,t,n,o,i)}function ad(e,t,n){var o=t.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(Ur,St),St|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ze(Ur,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,ze(Ur,St),St|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,ze(Ur,St),St|=o;return st(e,t,i,n),t.child}function ud(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xs(e,t,n,o,i){var s=ct(n)?Gn:nt.current;return s=Nr(t,s),$r(t,i),n=Bs(e,t,n,o,s,i),o=Hs(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(Le&&o&&Es(t),t.flags|=1,st(e,t,n,i),t.child)}function cd(e,t,n,o,i){if(ct(n)){var s=!0;Ri(t)}else s=!1;if($r(t,i),t.stateNode===null)Ji(e,t),Xc(t,n,o),Gs(t,n,o,i),o=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var g=d.context,C=n.contextType;typeof C=="object"&&C!==null?C=Et(C):(C=ct(n)?Gn:nt.current,C=Nr(t,C));var R=n.getDerivedStateFromProps,O=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function";O||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||g!==C)&&Zc(t,d,o,C),zn=!1;var I=t.memoizedState;d.state=I,Bi(t,o,d,i),g=t.memoizedState,p!==o||I!==g||ut.current||zn?(typeof R=="function"&&(Ks(t,n,R,o),g=t.memoizedState),(p=zn||Jc(t,n,p,o,I,g,C))?(O||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=g),d.props=o,d.state=g,d.context=C,o=p):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Pc(e,t),p=t.memoizedProps,C=t.type===t.elementType?p:Mt(t.type,p),d.props=C,O=t.pendingProps,I=d.context,g=n.contextType,typeof g=="object"&&g!==null?g=Et(g):(g=ct(n)?Gn:nt.current,g=Nr(t,g));var Q=n.getDerivedStateFromProps;(R=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==O||I!==g)&&Zc(t,d,o,g),zn=!1,I=t.memoizedState,d.state=I,Bi(t,o,d,i);var G=t.memoizedState;p!==O||I!==G||ut.current||zn?(typeof Q=="function"&&(Ks(t,n,Q,o),G=t.memoizedState),(C=zn||Jc(t,n,C,o,I,G,g)||!1)?(R||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,G,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,G,g)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=G),d.props=o,d.state=G,d.context=g,o=C):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),o=!1)}return Zs(e,t,n,o,s,i)}function Zs(e,t,n,o,i,s){ud(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return i&&mc(t,n,!1),pn(e,t,s);o=t.stateNode,lm.current=t;var p=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=Dr(t,e.child,null,s),t.child=Dr(t,null,p,s)):st(e,t,p,s),t.memoizedState=o.state,i&&mc(t,n,!0),t.child}function dd(e){var t=e.stateNode;t.pendingContext?pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pc(e,t.context,!1),Os(e,t.containerInfo)}function fd(e,t,n,o,i){return Lr(),zs(i),t.flags|=256,st(e,t,n,o),t.child}var ea={dehydrated:null,treeContext:null,retryLane:0};function ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function pd(e,t,n){var o=t.pendingProps,i=De.current,s=!1,d=(t.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ze(De,i&1),e===null)return _s(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,e=o.fallback,s?(o=t.mode,s=t.child,d={mode:"hidden",children:d},(o&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=ul(d,o,0,null),e=ir(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ta(n),t.memoizedState=ea,e):na(t,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return sm(e,t,d,o,p,i,n);if(s){s=o.fallback,d=t.mode,i=e.child,p=i.sibling;var g={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=g,t.deletions=null):(o=On(i,g),o.subtreeFlags=i.subtreeFlags&14680064),p!==null?s=On(p,s):(s=ir(s,d,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,d=e.child.memoizedState,d=d===null?ta(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~n,t.memoizedState=ea,o}return s=e.child,e=s.sibling,o=On(s,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function na(e,t){return t=ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qi(e,t,n,o){return o!==null&&zs(o),Dr(t,e.child,null,n),e=na(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sm(e,t,n,o,i,s,d){if(n)return t.flags&256?(t.flags&=-257,o=qs(Error(u(422))),qi(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,i=t.mode,o=ul({mode:"visible",children:o.children},i,0,null),s=ir(s,i,d,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,(t.mode&1)!==0&&Dr(t,e.child,null,d),t.child.memoizedState=ta(d),t.memoizedState=ea,s);if((t.mode&1)===0)return qi(e,t,d,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var p=o.dgst;return o=p,s=Error(u(419)),o=qs(s,o,void 0),qi(e,t,d,o)}if(p=(d&e.childLanes)!==0,dt||p){if(o=qe,o!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|d))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dn(e,i),Ht(o,e,i,-1))}return ya(),o=qs(Error(u(421))),qi(e,t,d,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,wt=En(i.nextSibling),xt=t,Le=!0,Ft=null,e!==null&&(kt[Ct++]=un,kt[Ct++]=cn,kt[Ct++]=qn,un=e.id,cn=e.overflow,qn=t),t=na(t,o.children),t.flags|=4096,t)}function hd(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Rs(e.return,t,n)}function ra(e,t,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function md(e,t,n){var o=t.pendingProps,i=o.revealOrder,s=o.tail;if(st(e,t,o.children,n),o=De.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,n,t);else if(e.tag===19)hd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ze(De,o),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ra(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Hi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ra(t,!0,n,null,s);break;case"together":ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ji(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function am(e,t,n){switch(t.tag){case 3:dd(t),Lr();break;case 5:zc(t);break;case 1:ct(t.type)&&Ri(t);break;case 4:Os(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;ze(Fi,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ze(De,De.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?pd(e,t,n):(ze(De,De.current&1),e=pn(e,t,n),e!==null?e.sibling:null);ze(De,De.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return md(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ze(De,De.current),o)break;return null;case 22:case 23:return t.lanes=0,ad(e,t,n)}return pn(e,t,n)}var gd,oa,vd,yd;gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},oa=function(){},vd=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Zn(Kt.current);var s=null;switch(n){case"input":i=yr(e,i),o=yr(e,o),s=[];break;case"select":i=W({},i,{value:void 0}),o=W({},o,{value:void 0}),s=[];break;case"textarea":i=no(e,i),o=no(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=bi)}Te(n,o);var d;n=null;for(C in i)if(!o.hasOwnProperty(C)&&i.hasOwnProperty(C)&&i[C]!=null)if(C==="style"){var p=i[C];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(f.hasOwnProperty(C)?s||(s=[]):(s=s||[]).push(C,null));for(C in o){var g=o[C];if(p=i!=null?i[C]:void 0,o.hasOwnProperty(C)&&g!==p&&(g!=null||p!=null))if(C==="style")if(p){for(d in p)!p.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in g)g.hasOwnProperty(d)&&p[d]!==g[d]&&(n||(n={}),n[d]=g[d])}else n||(s||(s=[]),s.push(C,n)),n=g;else C==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(s=s||[]).push(C,g)):C==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(C,""+g):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(f.hasOwnProperty(C)?(g!=null&&C==="onScroll"&&be("scroll",e),s||p===g||(s=[])):(s=s||[]).push(C,g))}n&&(s=s||[]).push("style",n);var C=s;(t.updateQueue=C)&&(t.flags|=4)}},yd=function(e,t,n,o){n!==o&&(t.flags|=4)};function Do(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function um(e,t,n){var o=t.pendingProps;switch(Ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return ct(t.type)&&Ii(),ot(t),null;case 3:return o=t.stateNode,Ar(),Ne(ut),Ne(nt),Fs(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ft!==null&&(ma(Ft),Ft=null))),oa(e,t),ot(t),null;case 5:$s(t);var i=Zn(bo.current);if(n=t.type,e!==null&&t.stateNode!=null)vd(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(u(166));return ot(t),null}if(e=Zn(Kt.current),$i(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[Yt]=t,o[Eo]=s,e=(t.mode&1)!==0,n){case"dialog":be("cancel",o),be("close",o);break;case"iframe":case"object":case"embed":be("load",o);break;case"video":case"audio":for(i=0;i<jo.length;i++)be(jo[i],o);break;case"source":be("error",o);break;case"img":case"image":case"link":be("error",o),be("load",o);break;case"details":be("toggle",o);break;case"input":rn(o,s),be("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},be("invalid",o);break;case"textarea":ii(o,s),be("invalid",o)}Te(n,s),i=null;for(var d in s)if(s.hasOwnProperty(d)){var p=s[d];d==="children"?typeof p=="string"?o.textContent!==p&&(s.suppressHydrationWarning!==!0&&zi(o.textContent,p,e),i=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&zi(o.textContent,p,e),i=["children",""+p]):f.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&be("scroll",o)}switch(n){case"input":vt(o),eo(o,s,!0);break;case"textarea":vt(o),li(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=bi)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=si(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Yt]=t,e[Eo]=o,gd(e,t,!1,!1),t.stateNode=e;e:{switch(d=Fe(n,o),n){case"dialog":be("cancel",e),be("close",e),i=o;break;case"iframe":case"object":case"embed":be("load",e),i=o;break;case"video":case"audio":for(i=0;i<jo.length;i++)be(jo[i],e);i=o;break;case"source":be("error",e),i=o;break;case"img":case"image":case"link":be("error",e),be("load",e),i=o;break;case"details":be("toggle",e),i=o;break;case"input":rn(e,o),i=yr(e,o),be("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=W({},o,{value:void 0}),be("invalid",e);break;case"textarea":ii(e,o),i=no(e,o),be("invalid",e);break;default:i=o}Te(n,i),p=i;for(s in p)if(p.hasOwnProperty(s)){var g=p[s];s==="style"?ge(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&ai(e,g)):s==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&Vn(e,g):typeof g=="number"&&Vn(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(f.hasOwnProperty(s)?g!=null&&s==="onScroll"&&be("scroll",e):g!=null&&F(e,s,g,d))}switch(n){case"input":vt(e),eo(e,o,!1);break;case"textarea":vt(e),li(e);break;case"option":o.value!=null&&e.setAttribute("value",""+de(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?vn(e,!!o.multiple,s,!1):o.defaultValue!=null&&vn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)yd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(u(166));if(n=Zn(bo.current),Zn(Kt.current),$i(t)){if(o=t.stateNode,n=t.memoizedProps,o[Yt]=t,(s=o.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:zi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Yt]=t,t.stateNode=o}return ot(t),null;case 13:if(Ne(De),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Sc(),Lr(),t.flags|=98560,s=!1;else if(s=$i(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(u(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(u(317));s[Yt]=t}else Lr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ot(t),s=!1}else Ft!==null&&(ma(Ft),Ft=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(De.current&1)!==0?Ke===0&&(Ke=3):ya())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return Ar(),oa(e,t),e===null&&ko(t.stateNode.containerInfo),ot(t),null;case 10:return Is(t.type._context),ot(t),null;case 17:return ct(t.type)&&Ii(),ot(t),null;case 19:if(Ne(De),s=t.memoizedState,s===null)return ot(t),null;if(o=(t.flags&128)!==0,d=s.rendering,d===null)if(o)Do(s,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Hi(e),d!==null){for(t.flags|=128,Do(s,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ze(De,De.current&1|2),t.child}e=e.sibling}s.tail!==null&&Me()>Br&&(t.flags|=128,o=!0,Do(s,!1),t.lanes=4194304)}else{if(!o)if(e=Hi(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!Le)return ot(t),null}else 2*Me()-s.renderingStartTime>Br&&n!==1073741824&&(t.flags|=128,o=!0,Do(s,!1),t.lanes=4194304);s.isBackwards?(d.sibling=t.child,t.child=d):(n=s.last,n!==null?n.sibling=d:t.child=d,s.last=d)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Me(),t.sibling=null,n=De.current,ze(De,o?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return va(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(St&1073741824)!==0&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function cm(e,t){switch(Ps(t),t.tag){case 1:return ct(t.type)&&Ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ar(),Ne(ut),Ne(nt),Fs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return $s(t),null;case 13:if(Ne(De),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(De),null;case 4:return Ar(),null;case 10:return Is(t.type._context),null;case 22:case 23:return va(),null;case 24:return null;default:return null}}var Xi=!1,it=!1,dm=typeof WeakSet=="function"?WeakSet:Set,K=null;function Mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ae(e,t,o)}else n.current=null}function ia(e,t,n){try{n()}catch(o){Ae(e,t,o)}}var xd=!1;function fm(e,t){if(vs=yi,e=Ju(),us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,p=-1,g=-1,C=0,R=0,O=e,I=null;t:for(;;){for(var Q;O!==n||i!==0&&O.nodeType!==3||(p=d+i),O!==s||o!==0&&O.nodeType!==3||(g=d+o),O.nodeType===3&&(d+=O.nodeValue.length),(Q=O.firstChild)!==null;)I=O,O=Q;for(;;){if(O===e)break t;if(I===n&&++C===i&&(p=d),I===s&&++R===o&&(g=d),(Q=O.nextSibling)!==null)break;O=I,I=O.parentNode}O=Q}n=p===-1||g===-1?null:{start:p,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(ys={focusedElem:e,selectionRange:n},yi=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var G=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var J=G.memoizedProps,Ue=G.memoizedState,j=t.stateNode,v=j.getSnapshotBeforeUpdate(t.elementType===t.type?J:Mt(t.type,J),Ue);j.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch($){Ae(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return G=xd,xd=!1,G}function Oo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ia(t,n,s)}i=i.next}while(i!==o)}}function Zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function la(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wd(e){var t=e.alternate;t!==null&&(e.alternate=null,wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[Eo],delete t[js],delete t[Kh],delete t[Gh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sa(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bi));else if(o!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}function aa(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}var et=null,Ut=!1;function Nn(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(fi,n)}catch{}switch(n.tag){case 5:it||Mr(n,t);case 6:var o=et,i=Ut;et=null,Nn(e,t,n),et=o,Ut=i,et!==null&&(Ut?(e=et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Ut?(e=et,n=n.stateNode,e.nodeType===8?Ss(e.parentNode,n):e.nodeType===1&&Ss(e,n),ho(e)):Ss(et,n.stateNode));break;case 4:o=et,i=Ut,et=n.stateNode.containerInfo,Ut=!0,Nn(e,t,n),et=o,Ut=i;break;case 0:case 11:case 14:case 15:if(!it&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&ia(n,t,d),i=i.next}while(i!==o)}Nn(e,t,n);break;case 1:if(!it&&(Mr(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(p){Ae(n,t,p)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(it=(o=it)||n.memoizedState!==null,Nn(e,t,n),it=o):Nn(e,t,n);break;default:Nn(e,t,n)}}function Cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dm),t.forEach(function(o){var i=Sm.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Bt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 5:et=p.stateNode,Ut=!1;break e;case 3:et=p.stateNode.containerInfo,Ut=!0;break e;case 4:et=p.stateNode.containerInfo,Ut=!0;break e}p=p.return}if(et===null)throw Error(u(160));kd(s,d,i),et=null,Ut=!1;var g=i.alternate;g!==null&&(g.return=null),i.return=null}catch(C){Ae(i,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ed(t,e),t=t.sibling}function Ed(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(t,e),qt(e),o&4){try{Oo(3,e,e.return),Zi(3,e)}catch(J){Ae(e,e.return,J)}try{Oo(5,e,e.return)}catch(J){Ae(e,e.return,J)}}break;case 1:Bt(t,e),qt(e),o&512&&n!==null&&Mr(n,n.return);break;case 5:if(Bt(t,e),qt(e),o&512&&n!==null&&Mr(n,n.return),e.flags&32){var i=e.stateNode;try{Vn(i,"")}catch(J){Ae(e,e.return,J)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,d=n!==null?n.memoizedProps:s,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&oi(i,s),Fe(p,d);var C=Fe(p,s);for(d=0;d<g.length;d+=2){var R=g[d],O=g[d+1];R==="style"?ge(i,O):R==="dangerouslySetInnerHTML"?ai(i,O):R==="children"?Vn(i,O):F(i,R,O,C)}switch(p){case"input":Hn(i,s);break;case"textarea":yn(i,s);break;case"select":var I=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var Q=s.value;Q!=null?vn(i,!!s.multiple,Q,!1):I!==!!s.multiple&&(s.defaultValue!=null?vn(i,!!s.multiple,s.defaultValue,!0):vn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(J){Ae(e,e.return,J)}}break;case 6:if(Bt(t,e),qt(e),o&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(J){Ae(e,e.return,J)}}break;case 3:if(Bt(t,e),qt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(t.containerInfo)}catch(J){Ae(e,e.return,J)}break;case 4:Bt(t,e),qt(e);break;case 13:Bt(t,e),qt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(da=Me())),o&4&&Cd(e);break;case 22:if(R=n!==null&&n.memoizedState!==null,e.mode&1?(it=(C=it)||R,Bt(t,e),it=C):Bt(t,e),qt(e),o&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!R&&(e.mode&1)!==0)for(K=e,R=e.child;R!==null;){for(O=K=R;K!==null;){switch(I=K,Q=I.child,I.tag){case 0:case 11:case 14:case 15:Oo(4,I,I.return);break;case 1:Mr(I,I.return);var G=I.stateNode;if(typeof G.componentWillUnmount=="function"){o=I,n=I.return;try{t=o,G.props=t.memoizedProps,G.state=t.memoizedState,G.componentWillUnmount()}catch(J){Ae(o,n,J)}}break;case 5:Mr(I,I.return);break;case 22:if(I.memoizedState!==null){_d(O);continue}}Q!==null?(Q.return=I,K=Q):_d(O)}R=R.sibling}e:for(R=null,O=e;;){if(O.tag===5){if(R===null){R=O;try{i=O.stateNode,C?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=O.stateNode,g=O.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=ae("display",d))}catch(J){Ae(e,e.return,J)}}}else if(O.tag===6){if(R===null)try{O.stateNode.nodeValue=C?"":O.memoizedProps}catch(J){Ae(e,e.return,J)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;R===O&&(R=null),O=O.return}R===O&&(R=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Bt(t,e),qt(e),o&4&&Cd(e);break;case 21:break;default:Bt(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sd(n)){var o=n;break e}n=n.return}throw Error(u(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Vn(i,""),o.flags&=-33);var s=jd(e);aa(e,s,i);break;case 3:case 4:var d=o.stateNode.containerInfo,p=jd(e);sa(e,p,d);break;default:throw Error(u(161))}}catch(g){Ae(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pm(e,t,n){K=e,Pd(e)}function Pd(e,t,n){for(var o=(e.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&o){var d=i.memoizedState!==null||Xi;if(!d){var p=i.alternate,g=p!==null&&p.memoizedState!==null||it;p=Xi;var C=it;if(Xi=d,(it=g)&&!C)for(K=i;K!==null;)d=K,g=d.child,d.tag===22&&d.memoizedState!==null?zd(i):g!==null?(g.return=d,K=g):zd(i);for(;s!==null;)K=s,Pd(s),s=s.sibling;K=i,Xi=p,it=C}Td(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,K=s):Td(e)}}function Td(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:it||Zi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!it)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&_c(t,s,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_c(t,d,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var R=C.memoizedState;if(R!==null){var O=R.dehydrated;O!==null&&ho(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}it||t.flags&512&&la(t)}catch(I){Ae(t,t.return,I)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function _d(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function zd(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zi(4,t)}catch(g){Ae(t,n,g)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(g){Ae(t,i,g)}}var s=t.return;try{la(t)}catch(g){Ae(t,s,g)}break;case 5:var d=t.return;try{la(t)}catch(g){Ae(t,d,g)}}}catch(g){Ae(t,t.return,g)}if(t===e){K=null;break}var p=t.sibling;if(p!==null){p.return=t.return,K=p;break}K=t.return}}var hm=Math.ceil,el=M.ReactCurrentDispatcher,ua=M.ReactCurrentOwner,Tt=M.ReactCurrentBatchConfig,Se=0,qe=null,Be=null,tt=0,St=0,Ur=Pn(0),Ke=0,$o=null,tr=0,tl=0,ca=0,Ao=null,ft=null,da=0,Br=1/0,hn=null,nl=!1,fa=null,In=null,rl=!1,Rn=null,ol=0,Fo=0,pa=null,il=-1,ll=0;function at(){return(Se&6)!==0?Me():il!==-1?il:il=Me()}function Ln(e){return(e.mode&1)===0?1:(Se&2)!==0&&tt!==0?tt&-tt:Jh.transition!==null?(ll===0&&(ll=ju()),ll):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Nu(e.type)),e)}function Ht(e,t,n,o){if(50<Fo)throw Fo=0,pa=null,Error(u(185));ao(e,n,o),((Se&2)===0||e!==qe)&&(e===qe&&((Se&2)===0&&(tl|=n),Ke===4&&Dn(e,tt)),pt(e,o),n===1&&Se===0&&(t.mode&1)===0&&(Br=Me()+500,Li&&_n()))}function pt(e,t){var n=e.callbackNode;Jp(e,t);var o=mi(e,e===qe?tt:0);if(o===0)n!==null&&xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&xu(n),t===1)e.tag===0?qh(Nd.bind(null,e)):gc(Nd.bind(null,e)),Qh(function(){(Se&6)===0&&_n()}),n=null;else{switch(ku(o)){case 1:n=Ql;break;case 4:n=wu;break;case 16:n=di;break;case 536870912:n=Su;break;default:n=di}n=Fd(n,bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bd(e,t){if(il=-1,ll=0,(Se&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Hr()&&e.callbackNode!==n)return null;var o=mi(e,e===qe?tt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=sl(e,o);else{t=o;var i=Se;Se|=2;var s=Rd();(qe!==e||tt!==t)&&(hn=null,Br=Me()+500,rr(e,t));do try{vm();break}catch(p){Id(e,p)}while(!0);Ns(),el.current=s,Se=i,Be!==null?t=0:(qe=null,tt=0,t=Ke)}if(t!==0){if(t===2&&(i=Yl(e),i!==0&&(o=i,t=ha(e,i))),t===1)throw n=$o,rr(e,0),Dn(e,o),pt(e,Me()),n;if(t===6)Dn(e,o);else{if(i=e.current.alternate,(o&30)===0&&!mm(i)&&(t=sl(e,o),t===2&&(s=Yl(e),s!==0&&(o=s,t=ha(e,s))),t===1))throw n=$o,rr(e,0),Dn(e,o),pt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(u(345));case 2:or(e,ft,hn);break;case 3:if(Dn(e,o),(o&130023424)===o&&(t=da+500-Me(),10<t)){if(mi(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){at(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ws(or.bind(null,e,ft,hn),t);break}or(e,ft,hn);break;case 4:if(Dn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var d=31-$t(o);s=1<<d,d=t[d],d>i&&(i=d),o&=~s}if(o=i,o=Me()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*hm(o/1960))-o,10<o){e.timeoutHandle=ws(or.bind(null,e,ft,hn),o);break}or(e,ft,hn);break;case 5:or(e,ft,hn);break;default:throw Error(u(329))}}}return pt(e,Me()),e.callbackNode===n?bd.bind(null,e):null}function ha(e,t){var n=Ao;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=sl(e,t),e!==2&&(t=ft,ft=n,t!==null&&ma(t)),e}function ma(e){ft===null?ft=e:ft.push.apply(ft,e)}function mm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t){for(t&=~ca,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),o=1<<n;e[n]=-1,t&=~o}}function Nd(e){if((Se&6)!==0)throw Error(u(327));Hr();var t=mi(e,0);if((t&1)===0)return pt(e,Me()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var o=Yl(e);o!==0&&(t=o,n=ha(e,o))}if(n===1)throw n=$o,rr(e,0),Dn(e,t),pt(e,Me()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,ft,hn),pt(e,Me()),null}function ga(e,t){var n=Se;Se|=1;try{return e(t)}finally{Se=n,Se===0&&(Br=Me()+500,Li&&_n())}}function nr(e){Rn!==null&&Rn.tag===0&&(Se&6)===0&&Hr();var t=Se;Se|=1;var n=Tt.transition,o=Ee;try{if(Tt.transition=null,Ee=1,e)return e()}finally{Ee=o,Tt.transition=n,Se=t,(Se&6)===0&&_n()}}function va(){St=Ur.current,Ne(Ur)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vh(n)),Be!==null)for(n=Be.return;n!==null;){var o=n;switch(Ps(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ii();break;case 3:Ar(),Ne(ut),Ne(nt),Fs();break;case 5:$s(o);break;case 4:Ar();break;case 13:Ne(De);break;case 19:Ne(De);break;case 10:Is(o.type._context);break;case 22:case 23:va()}n=n.return}if(qe=e,Be=e=On(e.current,null),tt=St=t,Ke=0,$o=null,ca=tl=tr=0,ft=Ao=null,Xn!==null){for(t=0;t<Xn.length;t++)if(n=Xn[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var d=s.next;s.next=i,o.next=d}n.pending=o}Xn=null}return e}function Id(e,t){do{var n=Be;try{if(Ns(),Wi.current=Ki,Vi){for(var o=Oe.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Vi=!1}if(er=0,Ge=Ye=Oe=null,No=!1,Io=0,ua.current=null,n===null||n.return===null){Ke=1,$o=t,Be=null;break}e:{var s=e,d=n.return,p=n,g=t;if(t=tt,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var C=g,R=p,O=R.tag;if((R.mode&1)===0&&(O===0||O===11||O===15)){var I=R.alternate;I?(R.updateQueue=I.updateQueue,R.memoizedState=I.memoizedState,R.lanes=I.lanes):(R.updateQueue=null,R.memoizedState=null)}var Q=rd(d);if(Q!==null){Q.flags&=-257,od(Q,d,p,s,t),Q.mode&1&&nd(s,C,t),t=Q,g=C;var G=t.updateQueue;if(G===null){var J=new Set;J.add(g),t.updateQueue=J}else G.add(g);break e}else{if((t&1)===0){nd(s,C,t),ya();break e}g=Error(u(426))}}else if(Le&&p.mode&1){var Ue=rd(d);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),od(Ue,d,p,s,t),zs(Fr(g,p));break e}}s=g=Fr(g,p),Ke!==4&&(Ke=2),Ao===null?Ao=[s]:Ao.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var j=ed(s,g,t);Tc(s,j);break e;case 1:p=g;var v=s.type,k=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(In===null||!In.has(k)))){s.flags|=65536,t&=-t,s.lanes|=t;var $=td(s,p,t);Tc(s,$);break e}}s=s.return}while(s!==null)}Dd(n)}catch(X){t=X,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function Rd(){var e=el.current;return el.current=Ki,e===null?Ki:e}function ya(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),qe===null||(tr&268435455)===0&&(tl&268435455)===0||Dn(qe,tt)}function sl(e,t){var n=Se;Se|=2;var o=Rd();(qe!==e||tt!==t)&&(hn=null,rr(e,t));do try{gm();break}catch(i){Id(e,i)}while(!0);if(Ns(),Se=n,el.current=o,Be!==null)throw Error(u(261));return qe=null,tt=0,Ke}function gm(){for(;Be!==null;)Ld(Be)}function vm(){for(;Be!==null&&!Bp();)Ld(Be)}function Ld(e){var t=Ad(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?Dd(e):Be=t,ua.current=null}function Dd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=um(n,t,St),n!==null){Be=n;return}}else{if(n=cm(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,Be=null;return}}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ke===0&&(Ke=5)}function or(e,t,n){var o=Ee,i=Tt.transition;try{Tt.transition=null,Ee=1,ym(e,t,n,o)}finally{Tt.transition=i,Ee=o}return null}function ym(e,t,n,o){do Hr();while(Rn!==null);if((Se&6)!==0)throw Error(u(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xp(e,s),e===qe&&(Be=qe=null,tt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||rl||(rl=!0,Fd(di,function(){return Hr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Tt.transition,Tt.transition=null;var d=Ee;Ee=1;var p=Se;Se|=4,ua.current=null,fm(e,n),Ed(n,e),Ah(ys),yi=!!vs,ys=vs=null,e.current=n,pm(n),Hp(),Se=p,Ee=d,Tt.transition=s}else e.current=n;if(rl&&(rl=!1,Rn=e,ol=i),s=e.pendingLanes,s===0&&(In=null),Qp(n.stateNode),pt(e,Me()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,e=fa,fa=null,e;return(ol&1)!==0&&e.tag!==0&&Hr(),s=e.pendingLanes,(s&1)!==0?e===pa?Fo++:(Fo=0,pa=e):Fo=0,_n(),null}function Hr(){if(Rn!==null){var e=ku(ol),t=Tt.transition,n=Ee;try{if(Tt.transition=null,Ee=16>e?16:e,Rn===null)var o=!1;else{if(e=Rn,Rn=null,ol=0,(Se&6)!==0)throw Error(u(331));var i=Se;for(Se|=4,K=e.current;K!==null;){var s=K,d=s.child;if((K.flags&16)!==0){var p=s.deletions;if(p!==null){for(var g=0;g<p.length;g++){var C=p[g];for(K=C;K!==null;){var R=K;switch(R.tag){case 0:case 11:case 15:Oo(8,R,s)}var O=R.child;if(O!==null)O.return=R,K=O;else for(;K!==null;){R=K;var I=R.sibling,Q=R.return;if(wd(R),R===C){K=null;break}if(I!==null){I.return=Q,K=I;break}K=Q}}}var G=s.alternate;if(G!==null){var J=G.child;if(J!==null){G.child=null;do{var Ue=J.sibling;J.sibling=null,J=Ue}while(J!==null)}}K=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,K=d;else e:for(;K!==null;){if(s=K,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var j=s.sibling;if(j!==null){j.return=s.return,K=j;break e}K=s.return}}var v=e.current;for(K=v;K!==null;){d=K;var k=d.child;if((d.subtreeFlags&2064)!==0&&k!==null)k.return=d,K=k;else e:for(d=v;K!==null;){if(p=K,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Zi(9,p)}}catch(X){Ae(p,p.return,X)}if(p===d){K=null;break e}var $=p.sibling;if($!==null){$.return=p.return,K=$;break e}K=p.return}}if(Se=i,_n(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(fi,e)}catch{}o=!0}return o}finally{Ee=n,Tt.transition=t}}return!1}function Od(e,t,n){t=Fr(n,t),t=ed(e,t,1),e=bn(e,t,1),t=at(),e!==null&&(ao(e,1,t),pt(e,t))}function Ae(e,t,n){if(e.tag===3)Od(e,e,n);else for(;t!==null;){if(t.tag===3){Od(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(In===null||!In.has(o))){e=Fr(n,e),e=td(t,e,1),t=bn(t,e,1),e=at(),t!==null&&(ao(t,1,e),pt(t,e));break}}t=t.return}}function xm(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(tt&n)===n&&(Ke===4||Ke===3&&(tt&130023424)===tt&&500>Me()-da?rr(e,0):ca|=n),pt(e,t)}function $d(e,t){t===0&&((e.mode&1)===0?t=1:(t=hi,hi<<=1,(hi&130023424)===0&&(hi=4194304)));var n=at();e=dn(e,t),e!==null&&(ao(e,t,n),pt(e,n))}function wm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$d(e,n)}function Sm(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(u(314))}o!==null&&o.delete(t),$d(e,n)}var Ad;Ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)dt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return dt=!1,am(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,Le&&(t.flags&1048576)!==0&&vc(t,Oi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ji(e,t),e=t.pendingProps;var i=Nr(t,nt.current);$r(t,n),i=Bs(null,t,o,e,i,n);var s=Hs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(o)?(s=!0,Ri(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ds(t),i.updater=Gi,t.stateNode=i,i._reactInternals=t,Gs(t,o,e,n),t=Zs(null,t,o,!0,s,n)):(t.tag=0,Le&&s&&Es(t),st(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ji(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=km(o),e=Mt(o,e),i){case 0:t=Xs(null,t,o,e,n);break e;case 1:t=cd(null,t,o,e,n);break e;case 11:t=id(null,t,o,e,n);break e;case 14:t=ld(null,t,o,Mt(o.type,e),n);break e}throw Error(u(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Mt(o,i),Xs(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Mt(o,i),cd(e,t,o,i,n);case 3:e:{if(dd(t),e===null)throw Error(u(387));o=t.pendingProps,s=t.memoizedState,i=s.element,Pc(e,t),Bi(t,o,null,n);var d=t.memoizedState;if(o=d.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Fr(Error(u(423)),t),t=fd(e,t,o,n,i);break e}else if(o!==i){i=Fr(Error(u(424)),t),t=fd(e,t,o,n,i);break e}else for(wt=En(t.stateNode.containerInfo.firstChild),xt=t,Le=!0,Ft=null,n=Cc(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),o===i){t=pn(e,t,n);break e}st(e,t,o,n)}t=t.child}return t;case 5:return zc(t),e===null&&_s(t),o=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,d=i.children,xs(o,i)?d=null:s!==null&&xs(o,s)&&(t.flags|=32),ud(e,t),st(e,t,d,n),t.child;case 6:return e===null&&_s(t),null;case 13:return pd(e,t,n);case 4:return Os(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Dr(t,null,o,n):st(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Mt(o,i),id(e,t,o,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,s=t.memoizedProps,d=i.value,ze(Fi,o._currentValue),o._currentValue=d,s!==null)if(At(s.value,d)){if(s.children===i.children&&!ut.current){t=pn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){d=s.child;for(var g=p.firstContext;g!==null;){if(g.context===o){if(s.tag===1){g=fn(-1,n&-n),g.tag=2;var C=s.updateQueue;if(C!==null){C=C.shared;var R=C.pending;R===null?g.next=g:(g.next=R.next,R.next=g),C.pending=g}}s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Rs(s.return,n,t),p.lanes|=n;break}g=g.next}}else if(s.tag===10)d=s.type===t.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(u(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),Rs(d,n,t),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,$r(t,n),i=Et(i),o=o(i),t.flags|=1,st(e,t,o,n),t.child;case 14:return o=t.type,i=Mt(o,t.pendingProps),i=Mt(o.type,i),ld(e,t,o,i,n);case 15:return sd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Mt(o,i),Ji(e,t),t.tag=1,ct(o)?(e=!0,Ri(t)):e=!1,$r(t,n),Xc(t,o,i),Gs(t,o,i,n),Zs(null,t,o,!0,e,n);case 19:return md(e,t,n);case 22:return ad(e,t,n)}throw Error(u(156,t.tag))};function Fd(e,t){return yu(e,t)}function jm(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,o){return new jm(e,t,n,o)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function km(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===lt)return 14}return 2}function On(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function al(e,t,n,o,i,s){var d=2;if(o=e,typeof e=="function")xa(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Z:return ir(n.children,i,s,t);case Y:d=8,i|=8;break;case ee:return e=_t(12,n,t,i|2),e.elementType=ee,e.lanes=s,e;case Pe:return e=_t(13,n,t,i),e.elementType=Pe,e.lanes=s,e;case _e:return e=_t(19,n,t,i),e.elementType=_e,e.lanes=s,e;case Ce:return ul(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:d=10;break e;case me:d=9;break e;case fe:d=11;break e;case lt:d=14;break e;case Ve:d=16,o=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=_t(d,n,t,i),t.elementType=e,t.type=o,t.lanes=s,t}function ir(e,t,n,o){return e=_t(7,e,o,t),e.lanes=n,e}function ul(e,t,n,o){return e=_t(22,e,o,t),e.elementType=Ce,e.lanes=n,e.stateNode={isHidden:!1},e}function wa(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cm(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ja(e,t,n,o,i,s,d,p,g){return e=new Cm(e,t,n,p,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=_t(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ds(s),e}function Em(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Md(e){if(!e)return Tn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(ct(n))return hc(e,n,t)}return t}function Ud(e,t,n,o,i,s,d,p,g){return e=ja(n,o,!0,e,i,s,d,p,g),e.context=Md(null),n=e.current,o=at(),i=Ln(n),s=fn(o,i),s.callback=t??null,bn(n,s,i),e.current.lanes=i,ao(e,i,o),pt(e,o),e}function cl(e,t,n,o){var i=t.current,s=at(),d=Ln(i);return n=Md(n),t.context===null?t.context=n:t.pendingContext=n,t=fn(s,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=bn(i,t,d),e!==null&&(Ht(e,i,d,s),Ui(e,i,d)),d}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ka(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Pm(){return null}var Hd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}fl.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));cl(e,t,null,null)},fl.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){cl(null,e,null,null)}),t[sn]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&zu(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wd(){}function Tm(e,t,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var C=dl(d);s.call(C)}}var d=Ud(t,o,e,0,null,!1,!1,"",Wd);return e._reactRootContainer=d,e[sn]=d.current,ko(e.nodeType===8?e.parentNode:e),nr(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var p=o;o=function(){var C=dl(g);p.call(C)}}var g=ja(e,0,!1,null,null,!1,!1,"",Wd);return e._reactRootContainer=g,e[sn]=g.current,ko(e.nodeType===8?e.parentNode:e),nr(function(){cl(t,g,n,o)}),g}function hl(e,t,n,o,i){var s=n._reactRootContainer;if(s){var d=s;if(typeof i=="function"){var p=i;i=function(){var g=dl(d);p.call(g)}}cl(t,d,e,i)}else d=Tm(n,t,e,i,o);return dl(d)}Cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=so(t.pendingLanes);n!==0&&(Gl(t,n|1),pt(t,Me()),(Se&6)===0&&(Br=Me()+500,_n()))}break;case 13:nr(function(){var o=dn(e,1);if(o!==null){var i=at();Ht(o,e,1,i)}}),ka(e,1)}},ql=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var n=at();Ht(t,e,134217728,n)}ka(e,134217728)}},Eu=function(e){if(e.tag===13){var t=Ln(e),n=dn(e,t);if(n!==null){var o=at();Ht(n,e,t,o)}ka(e,t)}},Pu=function(){return Ee},Tu=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}},Bl=function(e,t,n){switch(t){case"input":if(Hn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=Ni(o);if(!i)throw Error(u(90));Ze(o),Hn(o,i)}}}break;case"textarea":yn(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}},du=ga,fu=nr;var _m={usingClientEntryPoint:!1,Events:[Po,zr,Ni,uu,cu,ga]},Mo={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zm={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:M.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||Pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{fi=ml.inject(zm),Qt=ml}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m,ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(u(200));return Em(e,t,null,n)},ht.createRoot=function(e,t){if(!Ea(e))throw Error(u(299));var n=!1,o="",i=Hd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ja(e,1,!1,null,null,n,!1,o,i),e[sn]=t.current,ko(e.nodeType===8?e.parentNode:e),new Ca(t)},ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=gu(t),e=e===null?null:e.stateNode,e},ht.flushSync=function(e){return nr(e)},ht.hydrate=function(e,t,n){if(!pl(t))throw Error(u(200));return hl(null,e,t,!0,n)},ht.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(u(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",d=Hd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Ud(t,null,e,1,n??null,i,!1,s,d),e[sn]=t.current,ko(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fl(t)},ht.render=function(e,t,n){if(!pl(t))throw Error(u(200));return hl(null,e,t,!1,n)},ht.unmountComponentAtNode=function(e){if(!pl(e))throw Error(u(40));return e._reactRootContainer?(nr(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1},ht.unstable_batchedUpdates=ga,ht.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!pl(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return hl(e,t,n,!1,o)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var Xd;function qf(){if(Xd)return _a.exports;Xd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),_a.exports=Am(),_a.exports}var Zd;function Fm(){if(Zd)return gl;Zd=1;var r=qf();return gl.createRoot=r.createRoot,gl.hydrateRoot=r.hydrateRoot,gl}var Mm=Fm();const Um=Gf(Mm);qf();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(r[c]=u[c])}return r},qo.apply(this,arguments)}var Fn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Fn||(Fn={}));const ef="popstate";function Bm(r){r===void 0&&(r={});function l(c,f){let{pathname:h,search:m,hash:y}=c.location;return Ba("",{pathname:h,search:m,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(c,f){return typeof f=="string"?f:Tl(f)}return Wm(l,u,null,r)}function We(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function Jf(r,l){if(!r){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Hm(){return Math.random().toString(36).substr(2,8)}function tf(r,l){return{usr:r.state,key:r.key,idx:l}}function Ba(r,l,u,c){return u===void 0&&(u=null),qo({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof l=="string"?Xr(l):l,{state:u,key:l&&l.key||c||Hm()})}function Tl(r){let{pathname:l="/",search:u="",hash:c=""}=r;return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Xr(r){let l={};if(r){let u=r.indexOf("#");u>=0&&(l.hash=r.substr(u),r=r.substr(0,u));let c=r.indexOf("?");c>=0&&(l.search=r.substr(c),r=r.substr(0,c)),r&&(l.pathname=r)}return l}function Wm(r,l,u,c){c===void 0&&(c={});let{window:f=document.defaultView,v5Compat:h=!1}=c,m=f.history,y=Fn.Pop,x=null,T=_();T==null&&(T=0,m.replaceState(qo({},m.state,{idx:T}),""));function _(){return(m.state||{idx:null}).idx}function P(){y=Fn.Pop;let D=_(),V=D==null?null:D-T;T=D,x&&x({action:y,location:N.location,delta:V})}function b(D,V){y=Fn.Push;let B=Ba(N.location,D,V);T=_()+1;let F=tf(B,T),M=N.createHref(B);try{m.pushState(F,"",M)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;f.location.assign(M)}h&&x&&x({action:y,location:N.location,delta:1})}function L(D,V){y=Fn.Replace;let B=Ba(N.location,D,V);T=_();let F=tf(B,T),M=N.createHref(B);m.replaceState(F,"",M),h&&x&&x({action:y,location:N.location,delta:0})}function H(D){let V=f.location.origin!=="null"?f.location.origin:f.location.href,B=typeof D=="string"?D:Tl(D);return B=B.replace(/ $/,"%20"),We(V,"No window.location.(origin|href) available to create URL for href: "+B),new URL(B,V)}let N={get action(){return y},get location(){return r(f,m)},listen(D){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(ef,P),x=D,()=>{f.removeEventListener(ef,P),x=null}},createHref(D){return l(f,D)},createURL:H,encodeLocation(D){let V=H(D);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:b,replace:L,go(D){return m.go(D)}};return N}var nf;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(nf||(nf={}));function Vm(r,l,u){return u===void 0&&(u="/"),Qm(r,l,u)}function Qm(r,l,u,c){let f=typeof l=="string"?Xr(l):l,h=eu(f.pathname||"/",u);if(h==null)return null;let m=Xf(r);Ym(m);let y=null;for(let x=0;y==null&&x<m.length;++x){let T=i0(h);y=n0(m[x],T)}return y}function Xf(r,l,u,c){l===void 0&&(l=[]),u===void 0&&(u=[]),c===void 0&&(c="");let f=(h,m,y)=>{let x={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};x.relativePath.startsWith("/")&&(We(x.relativePath.startsWith(c),'Absolute route path "'+x.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),x.relativePath=x.relativePath.slice(c.length));let T=Mn([c,x.relativePath]),_=u.concat(x);h.children&&h.children.length>0&&(We(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+T+'".')),Xf(h.children,l,_,T)),!(h.path==null&&!h.index)&&l.push({path:T,score:e0(T,h.index),routesMeta:_})};return r.forEach((h,m)=>{var y;if(h.path===""||!((y=h.path)!=null&&y.includes("?")))f(h,m);else for(let x of Zf(h.path))f(h,m,x)}),l}function Zf(r){let l=r.split("/");if(l.length===0)return[];let[u,...c]=l,f=u.endsWith("?"),h=u.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let m=Zf(c.join("/")),y=[];return y.push(...m.map(x=>x===""?h:[h,x].join("/"))),f&&y.push(...m),y.map(x=>r.startsWith("/")&&x===""?"/":x)}function Ym(r){r.sort((l,u)=>l.score!==u.score?u.score-l.score:t0(l.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}const Km=/^:[\w-]+$/,Gm=3,qm=2,Jm=1,Xm=10,Zm=-2,rf=r=>r==="*";function e0(r,l){let u=r.split("/"),c=u.length;return u.some(rf)&&(c+=Zm),l&&(c+=qm),u.filter(f=>!rf(f)).reduce((f,h)=>f+(Km.test(h)?Gm:h===""?Jm:Xm),c)}function t0(r,l){return r.length===l.length&&r.slice(0,-1).every((c,f)=>c===l[f])?r[r.length-1]-l[l.length-1]:0}function n0(r,l,u){let{routesMeta:c}=r,f={},h="/",m=[];for(let y=0;y<c.length;++y){let x=c[y],T=y===c.length-1,_=h==="/"?l:l.slice(h.length)||"/",P=r0({path:x.relativePath,caseSensitive:x.caseSensitive,end:T},_),b=x.route;if(!P)return null;Object.assign(f,P.params),m.push({params:f,pathname:Mn([h,P.pathname]),pathnameBase:u0(Mn([h,P.pathnameBase])),route:b}),P.pathnameBase!=="/"&&(h=Mn([h,P.pathnameBase]))}return m}function r0(r,l){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,c]=o0(r.path,r.caseSensitive,r.end),f=l.match(u);if(!f)return null;let h=f[0],m=h.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:c.reduce((T,_,P)=>{let{paramName:b,isOptional:L}=_;if(b==="*"){let N=y[P]||"";m=h.slice(0,h.length-N.length).replace(/(.)\/+$/,"$1")}const H=y[P];return L&&!H?T[b]=void 0:T[b]=(H||"").replace(/%2F/g,"/"),T},{}),pathname:h,pathnameBase:m,pattern:r}}function o0(r,l,u){l===void 0&&(l=!1),u===void 0&&(u=!0),Jf(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let c=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,x)=>(c.push({paramName:y,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,l?void 0:"i"),c]}function i0(r){try{return r.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Jf(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),r}}function eu(r,l){if(l==="/")return r;if(!r.toLowerCase().startsWith(l.toLowerCase()))return null;let u=l.endsWith("/")?l.length-1:l.length,c=r.charAt(u);return c&&c!=="/"?null:r.slice(u)||"/"}function l0(r,l){l===void 0&&(l="/");let{pathname:u,search:c="",hash:f=""}=typeof r=="string"?Xr(r):r;return{pathname:u?u.startsWith("/")?u:s0(u,l):l,search:c0(c),hash:d0(f)}}function s0(r,l){let u=l.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Na(r,l,u,c){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+u+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function a0(r){return r.filter((l,u)=>u===0||l.route.path&&l.route.path.length>0)}function ep(r,l){let u=a0(r);return l?u.map((c,f)=>f===u.length-1?c.pathname:c.pathnameBase):u.map(c=>c.pathnameBase)}function tp(r,l,u,c){c===void 0&&(c=!1);let f;typeof r=="string"?f=Xr(r):(f=qo({},r),We(!f.pathname||!f.pathname.includes("?"),Na("?","pathname","search",f)),We(!f.pathname||!f.pathname.includes("#"),Na("#","pathname","hash",f)),We(!f.search||!f.search.includes("#"),Na("#","search","hash",f)));let h=r===""||f.pathname==="",m=h?"/":f.pathname,y;if(m==null)y=u;else{let P=l.length-1;if(!c&&m.startsWith("..")){let b=m.split("/");for(;b[0]==="..";)b.shift(),P-=1;f.pathname=b.join("/")}y=P>=0?l[P]:"/"}let x=l0(f,y),T=m&&m!=="/"&&m.endsWith("/"),_=(h||m===".")&&u.endsWith("/");return!x.pathname.endsWith("/")&&(T||_)&&(x.pathname+="/"),x}const Mn=r=>r.join("/").replace(/\/\/+/g,"/"),u0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),c0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,d0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function f0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const np=["post","put","patch","delete"];new Set(np);const p0=["get",...np];new Set(p0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(r[c]=u[c])}return r},Jo.apply(this,arguments)}const tu=E.createContext(null),h0=E.createContext(null),vr=E.createContext(null),Ll=E.createContext(null),Un=E.createContext({outlet:null,matches:[],isDataRoute:!1}),rp=E.createContext(null);function m0(r,l){let{relative:u}=l===void 0?{}:l;ni()||We(!1);let{basename:c,navigator:f}=E.useContext(vr),{hash:h,pathname:m,search:y}=ip(r,{relative:u}),x=m;return c!=="/"&&(x=m==="/"?c:Mn([c,m])),f.createHref({pathname:x,search:y,hash:h})}function ni(){return E.useContext(Ll)!=null}function Dl(){return ni()||We(!1),E.useContext(Ll).location}function op(r){E.useContext(vr).static||E.useLayoutEffect(r)}function gn(){let{isDataRoute:r}=E.useContext(Un);return r?z0():g0()}function g0(){ni()||We(!1);let r=E.useContext(tu),{basename:l,future:u,navigator:c}=E.useContext(vr),{matches:f}=E.useContext(Un),{pathname:h}=Dl(),m=JSON.stringify(ep(f,u.v7_relativeSplatPath)),y=E.useRef(!1);return op(()=>{y.current=!0}),E.useCallback(function(T,_){if(_===void 0&&(_={}),!y.current)return;if(typeof T=="number"){c.go(T);return}let P=tp(T,JSON.parse(m),h,_.relative==="path");r==null&&l!=="/"&&(P.pathname=P.pathname==="/"?l:Mn([l,P.pathname])),(_.replace?c.replace:c.push)(P,_.state,_)},[l,c,m,h,r])}function v0(){let{matches:r}=E.useContext(Un),l=r[r.length-1];return l?l.params:{}}function ip(r,l){let{relative:u}=l===void 0?{}:l,{future:c}=E.useContext(vr),{matches:f}=E.useContext(Un),{pathname:h}=Dl(),m=JSON.stringify(ep(f,c.v7_relativeSplatPath));return E.useMemo(()=>tp(r,JSON.parse(m),h,u==="path"),[r,m,h,u])}function y0(r,l){return x0(r,l)}function x0(r,l,u,c){ni()||We(!1);let{navigator:f}=E.useContext(vr),{matches:h}=E.useContext(Un),m=h[h.length-1],y=m?m.params:{};m&&m.pathname;let x=m?m.pathnameBase:"/";m&&m.route;let T=Dl(),_;if(l){var P;let D=typeof l=="string"?Xr(l):l;x==="/"||(P=D.pathname)!=null&&P.startsWith(x)||We(!1),_=D}else _=T;let b=_.pathname||"/",L=b;if(x!=="/"){let D=x.replace(/^\//,"").split("/");L="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let H=Vm(r,{pathname:L}),N=C0(H&&H.map(D=>Object.assign({},D,{params:Object.assign({},y,D.params),pathname:Mn([x,f.encodeLocation?f.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?x:Mn([x,f.encodeLocation?f.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),h,u,c);return l&&N?E.createElement(Ll.Provider,{value:{location:Jo({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Fn.Pop}},N):N}function w0(){let r=_0(),l=f0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,f={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},l),u?E.createElement("pre",{style:f},u):null,null)}const S0=E.createElement(w0,null);class j0 extends E.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){console.error("React Router caught the following error during render",l,u)}render(){return this.state.error!==void 0?E.createElement(Un.Provider,{value:this.props.routeContext},E.createElement(rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k0(r){let{routeContext:l,match:u,children:c}=r,f=E.useContext(tu);return f&&f.static&&f.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=u.route.id),E.createElement(Un.Provider,{value:l},c)}function C0(r,l,u,c){var f;if(l===void 0&&(l=[]),u===void 0&&(u=null),c===void 0&&(c=null),r==null){var h;if(!u)return null;if(u.errors)r=u.matches;else if((h=c)!=null&&h.v7_partialHydration&&l.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let m=r,y=(f=u)==null?void 0:f.errors;if(y!=null){let _=m.findIndex(P=>P.route.id&&(y==null?void 0:y[P.route.id])!==void 0);_>=0||We(!1),m=m.slice(0,Math.min(m.length,_+1))}let x=!1,T=-1;if(u&&c&&c.v7_partialHydration)for(let _=0;_<m.length;_++){let P=m[_];if((P.route.HydrateFallback||P.route.hydrateFallbackElement)&&(T=_),P.route.id){let{loaderData:b,errors:L}=u,H=P.route.loader&&b[P.route.id]===void 0&&(!L||L[P.route.id]===void 0);if(P.route.lazy||H){x=!0,T>=0?m=m.slice(0,T+1):m=[m[0]];break}}}return m.reduceRight((_,P,b)=>{let L,H=!1,N=null,D=null;u&&(L=y&&P.route.id?y[P.route.id]:void 0,N=P.route.errorElement||S0,x&&(T<0&&b===0?(b0("route-fallback"),H=!0,D=null):T===b&&(H=!0,D=P.route.hydrateFallbackElement||null)));let V=l.concat(m.slice(0,b+1)),B=()=>{let F;return L?F=N:H?F=D:P.route.Component?F=E.createElement(P.route.Component,null):P.route.element?F=P.route.element:F=_,E.createElement(k0,{match:P,routeContext:{outlet:_,matches:V,isDataRoute:u!=null},children:F})};return u&&(P.route.ErrorBoundary||P.route.errorElement||b===0)?E.createElement(j0,{location:u.location,revalidation:u.revalidation,component:N,error:L,children:B(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):B()},null)}var lp=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(lp||{}),sp=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(sp||{});function E0(r){let l=E.useContext(tu);return l||We(!1),l}function P0(r){let l=E.useContext(h0);return l||We(!1),l}function T0(r){let l=E.useContext(Un);return l||We(!1),l}function ap(r){let l=T0(),u=l.matches[l.matches.length-1];return u.route.id||We(!1),u.route.id}function _0(){var r;let l=E.useContext(rp),u=P0(),c=ap();return l!==void 0?l:(r=u.errors)==null?void 0:r[c]}function z0(){let{router:r}=E0(lp.UseNavigateStable),l=ap(sp.UseNavigateStable),u=E.useRef(!1);return op(()=>{u.current=!0}),E.useCallback(function(f,h){h===void 0&&(h={}),u.current&&(typeof f=="number"?r.navigate(f):r.navigate(f,Jo({fromRouteId:l},h)))},[r,l])}const of={};function b0(r,l,u){of[r]||(of[r]=!0)}function N0(r,l){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function en(r){We(!1)}function I0(r){let{basename:l="/",children:u=null,location:c,navigationType:f=Fn.Pop,navigator:h,static:m=!1,future:y}=r;ni()&&We(!1);let x=l.replace(/^\/*/,"/"),T=E.useMemo(()=>({basename:x,navigator:h,static:m,future:Jo({v7_relativeSplatPath:!1},y)}),[x,y,h,m]);typeof c=="string"&&(c=Xr(c));let{pathname:_="/",search:P="",hash:b="",state:L=null,key:H="default"}=c,N=E.useMemo(()=>{let D=eu(_,x);return D==null?null:{location:{pathname:D,search:P,hash:b,state:L,key:H},navigationType:f}},[x,_,P,b,L,H,f]);return N==null?null:E.createElement(vr.Provider,{value:T},E.createElement(Ll.Provider,{children:u,value:N}))}function R0(r){let{children:l,location:u}=r;return y0(Ha(l),u)}new Promise(()=>{});function Ha(r,l){l===void 0&&(l=[]);let u=[];return E.Children.forEach(r,(c,f)=>{if(!E.isValidElement(c))return;let h=[...l,f];if(c.type===E.Fragment){u.push.apply(u,Ha(c.props.children,h));return}c.type!==en&&We(!1),!c.props.index||!c.props.children||We(!1);let m={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=Ha(c.props.children,h)),u.push(m)}),u}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(r[c]=u[c])}return r},Wa.apply(this,arguments)}function L0(r,l){if(r==null)return{};var u={},c=Object.keys(r),f,h;for(h=0;h<c.length;h++)f=c[h],!(l.indexOf(f)>=0)&&(u[f]=r[f]);return u}function D0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function O0(r,l){return r.button===0&&(!l||l==="_self")&&!D0(r)}const $0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],A0="6";try{window.__reactRouterVersion=A0}catch{}const F0="startTransition",lf=Dm[F0];function M0(r){let{basename:l,children:u,future:c,window:f}=r,h=E.useRef();h.current==null&&(h.current=Bm({window:f,v5Compat:!0}));let m=h.current,[y,x]=E.useState({action:m.action,location:m.location}),{v7_startTransition:T}=c||{},_=E.useCallback(P=>{T&&lf?lf(()=>x(P)):x(P)},[x,T]);return E.useLayoutEffect(()=>m.listen(_),[m,_]),E.useEffect(()=>N0(c),[c]),E.createElement(I0,{basename:l,children:u,location:y.location,navigationType:y.action,navigator:m,future:c})}const U0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,up=E.forwardRef(function(l,u){let{onClick:c,relative:f,reloadDocument:h,replace:m,state:y,target:x,to:T,preventScrollReset:_,viewTransition:P}=l,b=L0(l,$0),{basename:L}=E.useContext(vr),H,N=!1;if(typeof T=="string"&&B0.test(T)&&(H=T,U0))try{let F=new URL(window.location.href),M=T.startsWith("//")?new URL(F.protocol+T):new URL(T),oe=eu(M.pathname,L);M.origin===F.origin&&oe!=null?T=oe+M.search+M.hash:N=!0}catch{}let D=m0(T,{relative:f}),V=H0(T,{replace:m,state:y,target:x,preventScrollReset:_,relative:f,viewTransition:P});function B(F){c&&c(F),F.defaultPrevented||V(F)}return E.createElement("a",Wa({},b,{href:H||D,onClick:N||h?c:B,ref:u,target:x}))});var sf;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(sf||(sf={}));var af;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(af||(af={}));function H0(r,l){let{target:u,replace:c,state:f,preventScrollReset:h,relative:m,viewTransition:y}=l===void 0?{}:l,x=gn(),T=Dl(),_=ip(r,{relative:m});return E.useCallback(P=>{if(O0(P,u)){P.preventDefault();let b=c!==void 0?c:Tl(T)===Tl(_);x(r,{replace:b,state:f,preventScrollReset:h,relative:m,viewTransition:y})}},[T,x,_,c,f,u,r,h,m,y])}var cp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},uf=gt.createContext&&gt.createContext(cp),W0=["attr","size","title"];function V0(r,l){if(r==null)return{};var u=Q0(r,l),c,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(f=0;f<h.length;f++)c=h[f],!(l.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(u[c]=r[c])}return u}function Q0(r,l){if(r==null)return{};var u={};for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){if(l.indexOf(c)>=0)continue;u[c]=r[c]}return u}function _l(){return _l=Object.assign?Object.assign.bind():function(r){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(r[c]=u[c])}return r},_l.apply(this,arguments)}function cf(r,l){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);l&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable})),u.push.apply(u,c)}return u}function zl(r){for(var l=1;l<arguments.length;l++){var u=arguments[l]!=null?arguments[l]:{};l%2?cf(Object(u),!0).forEach(function(c){Y0(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):cf(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function Y0(r,l,u){return l=K0(l),l in r?Object.defineProperty(r,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[l]=u,r}function K0(r){var l=G0(r,"string");return typeof l=="symbol"?l:l+""}function G0(r,l){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var c=u.call(r,l);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(r)}function dp(r){return r&&r.map((l,u)=>gt.createElement(l.tag,zl({key:u},l.attr),dp(l.child)))}function Vt(r){return l=>gt.createElement(q0,_l({attr:zl({},r.attr)},l),dp(r.child))}function q0(r){var l=u=>{var{attr:c,size:f,title:h}=r,m=V0(r,W0),y=f||u.size||"1em",x;return u.className&&(x=u.className),r.className&&(x=(x?x+" ":"")+r.className),gt.createElement("svg",_l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,c,m,{className:x,style:zl(zl({color:r.color||u.color},u.style),r.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),h&&gt.createElement("title",null,h),r.children)};return uf!==void 0?gt.createElement(uf.Consumer,null,u=>l(u)):l(cp)}function df(r){return Vt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(r)}function J0(r){return Vt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(r)}function ff(r){return Vt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function Xo(r){return Vt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(r)}function Zo(r){return Vt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(r)}function X0(r){return Vt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(r)}function Z0(r){return Vt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}function eg(r){return Vt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(r)}function tg(r){return Vt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"},child:[]}]})(r)}function ng(r){return Vt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function pf(r){return Vt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(r)}var mt=function(){return mt=Object.assign||function(l){for(var u,c=1,f=arguments.length;c<f;c++){u=arguments[c];for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(l[h]=u[h])}return l},mt.apply(this,arguments)};function bl(r,l,u){if(u||arguments.length===2)for(var c=0,f=l.length,h;c<f;c++)(h||!(c in l))&&(h||(h=Array.prototype.slice.call(l,0,c)),h[c]=l[c]);return r.concat(h||Array.prototype.slice.call(l))}var Ie="-ms-",Go="-moz-",ke="-webkit-",fp="comm",Ol="rule",nu="decl",rg="@import",pp="@keyframes",og="@layer",hp=Math.abs,ru=String.fromCharCode,Va=Object.assign;function ig(r,l){return Xe(r,0)^45?(((l<<2^Xe(r,0))<<2^Xe(r,1))<<2^Xe(r,2))<<2^Xe(r,3):0}function mp(r){return r.trim()}function mn(r,l){return(r=l.exec(r))?r[0]:r}function he(r,l,u){return r.replace(l,u)}function jl(r,l,u){return r.indexOf(l,u)}function Xe(r,l){return r.charCodeAt(l)|0}function Yr(r,l,u){return r.slice(l,u)}function tn(r){return r.length}function gp(r){return r.length}function Ko(r,l){return l.push(r),r}function lg(r,l){return r.map(l).join("")}function hf(r,l){return r.filter(function(u){return!mn(u,l)})}var $l=1,Kr=1,vp=0,Ot=0,He=0,Zr="";function Al(r,l,u,c,f,h,m,y){return{value:r,root:l,parent:u,type:c,props:f,children:h,line:$l,column:Kr,length:m,return:"",siblings:y}}function An(r,l){return Va(Al("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},l)}function Wr(r){for(;r.root;)r=An(r.root,{children:[r]});Ko(r,r.siblings)}function sg(){return He}function ag(){return He=Ot>0?Xe(Zr,--Ot):0,Kr--,He===10&&(Kr=1,$l--),He}function Wt(){return He=Ot<vp?Xe(Zr,Ot++):0,Kr++,He===10&&(Kr=1,$l++),He}function mr(){return Xe(Zr,Ot)}function kl(){return Ot}function Fl(r,l){return Yr(Zr,r,l)}function Qa(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ug(r){return $l=Kr=1,vp=tn(Zr=r),Ot=0,[]}function cg(r){return Zr="",r}function Ia(r){return mp(Fl(Ot-1,Ya(r===91?r+2:r===40?r+1:r)))}function dg(r){for(;(He=mr())&&He<33;)Wt();return Qa(r)>2||Qa(He)>3?"":" "}function fg(r,l){for(;--l&&Wt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Fl(r,kl()+(l<6&&mr()==32&&Wt()==32))}function Ya(r){for(;Wt();)switch(He){case r:return Ot;case 34:case 39:r!==34&&r!==39&&Ya(He);break;case 40:r===41&&Ya(r);break;case 92:Wt();break}return Ot}function pg(r,l){for(;Wt()&&r+He!==57;)if(r+He===84&&mr()===47)break;return"/*"+Fl(l,Ot-1)+"*"+ru(r===47?r:Wt())}function hg(r){for(;!Qa(mr());)Wt();return Fl(r,Ot)}function mg(r){return cg(Cl("",null,null,null,[""],r=ug(r),0,[0],r))}function Cl(r,l,u,c,f,h,m,y,x){for(var T=0,_=0,P=m,b=0,L=0,H=0,N=1,D=1,V=1,B=0,F="",M=f,oe=h,re=c,Z=F;D;)switch(H=B,B=Wt()){case 40:if(H!=108&&Xe(Z,P-1)==58){jl(Z+=he(Ia(B),"&","&\f"),"&\f",hp(T?y[T-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:Z+=Ia(B);break;case 9:case 10:case 13:case 32:Z+=dg(H);break;case 92:Z+=fg(kl()-1,7);continue;case 47:switch(mr()){case 42:case 47:Ko(gg(pg(Wt(),kl()),l,u,x),x);break;default:Z+="/"}break;case 123*N:y[T++]=tn(Z)*V;case 125*N:case 59:case 0:switch(B){case 0:case 125:D=0;case 59+_:V==-1&&(Z=he(Z,/\f/g,"")),L>0&&tn(Z)-P&&Ko(L>32?gf(Z+";",c,u,P-1,x):gf(he(Z," ","")+";",c,u,P-2,x),x);break;case 59:Z+=";";default:if(Ko(re=mf(Z,l,u,T,_,f,y,F,M=[],oe=[],P,h),h),B===123)if(_===0)Cl(Z,l,re,re,M,h,P,y,oe);else switch(b===99&&Xe(Z,3)===110?100:b){case 100:case 108:case 109:case 115:Cl(r,re,re,c&&Ko(mf(r,re,re,0,0,f,y,F,f,M=[],P,oe),oe),f,oe,P,y,c?M:oe);break;default:Cl(Z,re,re,re,[""],oe,0,y,oe)}}T=_=L=0,N=V=1,F=Z="",P=m;break;case 58:P=1+tn(Z),L=H;default:if(N<1){if(B==123)--N;else if(B==125&&N++==0&&ag()==125)continue}switch(Z+=ru(B),B*N){case 38:V=_>0?1:(Z+="\f",-1);break;case 44:y[T++]=(tn(Z)-1)*V,V=1;break;case 64:mr()===45&&(Z+=Ia(Wt())),b=mr(),_=P=tn(F=Z+=hg(kl())),B++;break;case 45:H===45&&tn(Z)==2&&(N=0)}}return h}function mf(r,l,u,c,f,h,m,y,x,T,_,P){for(var b=f-1,L=f===0?h:[""],H=gp(L),N=0,D=0,V=0;N<c;++N)for(var B=0,F=Yr(r,b+1,b=hp(D=m[N])),M=r;B<H;++B)(M=mp(D>0?L[B]+" "+F:he(F,/&\f/g,L[B])))&&(x[V++]=M);return Al(r,l,u,f===0?Ol:y,x,T,_,P)}function gg(r,l,u,c){return Al(r,l,u,fp,ru(sg()),Yr(r,2,-2),0,c)}function gf(r,l,u,c,f){return Al(r,l,u,nu,Yr(r,0,c),Yr(r,c+1,-1),c,f)}function yp(r,l,u){switch(ig(r,l)){case 5103:return ke+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+r+r;case 4789:return Go+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+r+Go+r+Ie+r+r;case 5936:switch(Xe(r,l+11)){case 114:return ke+r+Ie+he(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return ke+r+Ie+he(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return ke+r+Ie+he(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return ke+r+Ie+r+r;case 6165:return ke+r+Ie+"flex-"+r+r;case 5187:return ke+r+he(r,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Ie+"flex-$1$2")+r;case 5443:return ke+r+Ie+"flex-item-"+he(r,/flex-|-self/g,"")+(mn(r,/flex-|baseline/)?"":Ie+"grid-row-"+he(r,/flex-|-self/g,""))+r;case 4675:return ke+r+Ie+"flex-line-pack"+he(r,/align-content|flex-|-self/g,"")+r;case 5548:return ke+r+Ie+he(r,"shrink","negative")+r;case 5292:return ke+r+Ie+he(r,"basis","preferred-size")+r;case 6060:return ke+"box-"+he(r,"-grow","")+ke+r+Ie+he(r,"grow","positive")+r;case 4554:return ke+he(r,/([^-])(transform)/g,"$1"+ke+"$2")+r;case 6187:return he(he(he(r,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),r,"")+r;case 5495:case 3959:return he(r,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return he(he(r,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+r+r;case 4200:if(!mn(r,/flex-|baseline/))return Ie+"grid-column-align"+Yr(r,l)+r;break;case 2592:case 3360:return Ie+he(r,"template-","")+r;case 4384:case 3616:return u&&u.some(function(c,f){return l=f,mn(c.props,/grid-\w+-end/)})?~jl(r+(u=u[l].value),"span",0)?r:Ie+he(r,"-start","")+r+Ie+"grid-row-span:"+(~jl(u,"span",0)?mn(u,/\d+/):+mn(u,/\d+/)-+mn(r,/\d+/))+";":Ie+he(r,"-start","")+r;case 4896:case 4128:return u&&u.some(function(c){return mn(c.props,/grid-\w+-start/)})?r:Ie+he(he(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return he(r,/(.+)-inline(.+)/,ke+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(r)-1-l>6)switch(Xe(r,l+1)){case 109:if(Xe(r,l+4)!==45)break;case 102:return he(r,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Go+(Xe(r,l+3)==108?"$3":"$2-$3"))+r;case 115:return~jl(r,"stretch",0)?yp(he(r,"stretch","fill-available"),l,u)+r:r}break;case 5152:case 5920:return he(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,h,m,y,x,T){return Ie+f+":"+h+T+(m?Ie+f+"-span:"+(y?x:+x-+h)+T:"")+r});case 4949:if(Xe(r,l+6)===121)return he(r,":",":"+ke)+r;break;case 6444:switch(Xe(r,Xe(r,14)===45?18:11)){case 120:return he(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(Xe(r,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Ie+"$2box$3")+r;case 100:return he(r,":",":"+Ie)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(r,"scroll-","scroll-snap-")+r}return r}function Nl(r,l){for(var u="",c=0;c<r.length;c++)u+=l(r[c],c,r,l)||"";return u}function vg(r,l,u,c){switch(r.type){case og:if(r.children.length)break;case rg:case nu:return r.return=r.return||r.value;case fp:return"";case pp:return r.return=r.value+"{"+Nl(r.children,c)+"}";case Ol:if(!tn(r.value=r.props.join(",")))return""}return tn(u=Nl(r.children,c))?r.return=r.value+"{"+u+"}":""}function yg(r){var l=gp(r);return function(u,c,f,h){for(var m="",y=0;y<l;y++)m+=r[y](u,c,f,h)||"";return m}}function xg(r){return function(l){l.root||(l=l.return)&&r(l)}}function wg(r,l,u,c){if(r.length>-1&&!r.return)switch(r.type){case nu:r.return=yp(r.value,r.length,u);return;case pp:return Nl([An(r,{value:he(r.value,"@","@"+ke)})],c);case Ol:if(r.length)return lg(u=r.props,function(f){switch(mn(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wr(An(r,{props:[he(f,/:(read-\w+)/,":"+Go+"$1")]})),Wr(An(r,{props:[f]})),Va(r,{props:hf(u,c)});break;case"::placeholder":Wr(An(r,{props:[he(f,/:(plac\w+)/,":"+ke+"input-$1")]})),Wr(An(r,{props:[he(f,/:(plac\w+)/,":"+Go+"$1")]})),Wr(An(r,{props:[he(f,/:(plac\w+)/,Ie+"input-$1")]})),Wr(An(r,{props:[f]})),Va(r,{props:hf(u,c)});break}return""})}}var Sg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jt={},Gr=typeof process<"u"&&jt!==void 0&&(jt.REACT_APP_SC_ATTR||jt.SC_ATTR)||"data-styled",xp="active",wp="data-styled-version",Ml="6.1.18",ou=`/*!sc*/
`,Il=typeof window<"u"&&typeof document<"u",jg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&jt!==void 0&&jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&jt.REACT_APP_SC_DISABLE_SPEEDY!==""?jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&jt!==void 0&&jt.SC_DISABLE_SPEEDY!==void 0&&jt.SC_DISABLE_SPEEDY!==""&&jt.SC_DISABLE_SPEEDY!=="false"&&jt.SC_DISABLE_SPEEDY),Ul=Object.freeze([]),qr=Object.freeze({});function kg(r,l,u){return u===void 0&&(u=qr),r.theme!==u.theme&&r.theme||l||u.theme}var Sp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Eg=/(^-|-$)/g;function vf(r){return r.replace(Cg,"-").replace(Eg,"")}var Pg=/(a)(d)/gi,vl=52,yf=function(r){return String.fromCharCode(r+(r>25?39:97))};function Ka(r){var l,u="";for(l=Math.abs(r);l>vl;l=l/vl|0)u=yf(l%vl)+u;return(yf(l%vl)+u).replace(Pg,"$1-$2")}var Ra,jp=5381,Qr=function(r,l){for(var u=l.length;u;)r=33*r^l.charCodeAt(--u);return r},kp=function(r){return Qr(jp,r)};function Tg(r){return Ka(kp(r)>>>0)}function _g(r){return r.displayName||r.name||"Component"}function La(r){return typeof r=="string"&&!0}var Cp=typeof Symbol=="function"&&Symbol.for,Ep=Cp?Symbol.for("react.memo"):60115,zg=Cp?Symbol.for("react.forward_ref"):60112,bg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ng={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ig=((Ra={})[zg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ra[Ep]=Pp,Ra);function xf(r){return("type"in(l=r)&&l.type.$$typeof)===Ep?Pp:"$$typeof"in r?Ig[r.$$typeof]:bg;var l}var Rg=Object.defineProperty,Lg=Object.getOwnPropertyNames,wf=Object.getOwnPropertySymbols,Dg=Object.getOwnPropertyDescriptor,Og=Object.getPrototypeOf,Sf=Object.prototype;function Tp(r,l,u){if(typeof l!="string"){if(Sf){var c=Og(l);c&&c!==Sf&&Tp(r,c,u)}var f=Lg(l);wf&&(f=f.concat(wf(l)));for(var h=xf(r),m=xf(l),y=0;y<f.length;++y){var x=f[y];if(!(x in Ng||u&&u[x]||m&&x in m||h&&x in h)){var T=Dg(l,x);try{Rg(r,x,T)}catch{}}}}return r}function Jr(r){return typeof r=="function"}function iu(r){return typeof r=="object"&&"styledComponentId"in r}function hr(r,l){return r&&l?"".concat(r," ").concat(l):r||l||""}function jf(r,l){if(r.length===0)return"";for(var u=r[0],c=1;c<r.length;c++)u+=r[c];return u}function ei(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Ga(r,l,u){if(u===void 0&&(u=!1),!u&&!ei(r)&&!Array.isArray(r))return l;if(Array.isArray(l))for(var c=0;c<l.length;c++)r[c]=Ga(r[c],l[c]);else if(ei(l))for(var c in l)r[c]=Ga(r[c],l[c]);return r}function lu(r,l){Object.defineProperty(r,"toString",{value:l})}function ri(r){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var $g=function(){function r(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return r.prototype.indexOfGroup=function(l){for(var u=0,c=0;c<l;c++)u+=this.groupSizes[c];return u},r.prototype.insertRules=function(l,u){if(l>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,h=f;l>=h;)if((h<<=1)<0)throw ri(16,"".concat(l));this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(var m=f;m<h;m++)this.groupSizes[m]=0}for(var y=this.indexOfGroup(l+1),x=(m=0,u.length);m<x;m++)this.tag.insertRule(y,u[m])&&(this.groupSizes[l]++,y++)},r.prototype.clearGroup=function(l){if(l<this.length){var u=this.groupSizes[l],c=this.indexOfGroup(l),f=c+u;this.groupSizes[l]=0;for(var h=c;h<f;h++)this.tag.deleteRule(c)}},r.prototype.getGroup=function(l){var u="";if(l>=this.length||this.groupSizes[l]===0)return u;for(var c=this.groupSizes[l],f=this.indexOfGroup(l),h=f+c,m=f;m<h;m++)u+="".concat(this.tag.getRule(m)).concat(ou);return u},r}(),El=new Map,Rl=new Map,Pl=1,yl=function(r){if(El.has(r))return El.get(r);for(;Rl.has(Pl);)Pl++;var l=Pl++;return El.set(r,l),Rl.set(l,r),l},Ag=function(r,l){Pl=l+1,El.set(r,l),Rl.set(l,r)},Fg="style[".concat(Gr,"][").concat(wp,'="').concat(Ml,'"]'),Mg=new RegExp("^".concat(Gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ug=function(r,l,u){for(var c,f=u.split(","),h=0,m=f.length;h<m;h++)(c=f[h])&&r.registerName(l,c)},Bg=function(r,l){for(var u,c=((u=l.textContent)!==null&&u!==void 0?u:"").split(ou),f=[],h=0,m=c.length;h<m;h++){var y=c[h].trim();if(y){var x=y.match(Mg);if(x){var T=0|parseInt(x[1],10),_=x[2];T!==0&&(Ag(_,T),Ug(r,_,x[3]),r.getTag().insertRules(T,f)),f.length=0}else f.push(y)}}},kf=function(r){for(var l=document.querySelectorAll(Fg),u=0,c=l.length;u<c;u++){var f=l[u];f&&f.getAttribute(Gr)!==xp&&(Bg(r,f),f.parentNode&&f.parentNode.removeChild(f))}};function Hg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _p=function(r){var l=document.head,u=r||l,c=document.createElement("style"),f=function(y){var x=Array.from(y.querySelectorAll("style[".concat(Gr,"]")));return x[x.length-1]}(u),h=f!==void 0?f.nextSibling:null;c.setAttribute(Gr,xp),c.setAttribute(wp,Ml);var m=Hg();return m&&c.setAttribute("nonce",m),u.insertBefore(c,h),c},Wg=function(){function r(l){this.element=_p(l),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,f=0,h=c.length;f<h;f++){var m=c[f];if(m.ownerNode===u)return m}throw ri(17)}(this.element),this.length=0}return r.prototype.insertRule=function(l,u){try{return this.sheet.insertRule(u,l),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},r.prototype.getRule=function(l){var u=this.sheet.cssRules[l];return u&&u.cssText?u.cssText:""},r}(),Vg=function(){function r(l){this.element=_p(l),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(l,u){if(l<=this.length&&l>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[l]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},r.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},r}(),Qg=function(){function r(l){this.rules=[],this.length=0}return r.prototype.insertRule=function(l,u){return l<=this.length&&(this.rules.splice(l,0,u),this.length++,!0)},r.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},r.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},r}(),Cf=Il,Yg={isServer:!Il,useCSSOMInjection:!jg},zp=function(){function r(l,u,c){l===void 0&&(l=qr),u===void 0&&(u={});var f=this;this.options=mt(mt({},Yg),l),this.gs=u,this.names=new Map(c),this.server=!!l.isServer,!this.server&&Il&&Cf&&(Cf=!1,kf(this)),lu(this,function(){return function(h){for(var m=h.getTag(),y=m.length,x="",T=function(P){var b=function(V){return Rl.get(V)}(P);if(b===void 0)return"continue";var L=h.names.get(b),H=m.getGroup(P);if(L===void 0||!L.size||H.length===0)return"continue";var N="".concat(Gr,".g").concat(P,'[id="').concat(b,'"]'),D="";L!==void 0&&L.forEach(function(V){V.length>0&&(D+="".concat(V,","))}),x+="".concat(H).concat(N,'{content:"').concat(D,'"}').concat(ou)},_=0;_<y;_++)T(_);return x}(f)})}return r.registerId=function(l){return yl(l)},r.prototype.rehydrate=function(){!this.server&&Il&&kf(this)},r.prototype.reconstructWithOptions=function(l,u){return u===void 0&&(u=!0),new r(mt(mt({},this.options),l),this.gs,u&&this.names||void 0)},r.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(l=function(u){var c=u.useCSSOMInjection,f=u.target;return u.isServer?new Qg(f):c?new Wg(f):new Vg(f)}(this.options),new $g(l)));var l},r.prototype.hasNameForId=function(l,u){return this.names.has(l)&&this.names.get(l).has(u)},r.prototype.registerName=function(l,u){if(yl(l),this.names.has(l))this.names.get(l).add(u);else{var c=new Set;c.add(u),this.names.set(l,c)}},r.prototype.insertRules=function(l,u,c){this.registerName(l,u),this.getTag().insertRules(yl(l),c)},r.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},r.prototype.clearRules=function(l){this.getTag().clearGroup(yl(l)),this.clearNames(l)},r.prototype.clearTag=function(){this.tag=void 0},r}(),Kg=/&/g,Gg=/^\s*\/\/.*$/gm;function bp(r,l){return r.map(function(u){return u.type==="rule"&&(u.value="".concat(l," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(l," ")),u.props=u.props.map(function(c){return"".concat(l," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=bp(u.children,l)),u})}function qg(r){var l,u,c,f=qr,h=f.options,m=h===void 0?qr:h,y=f.plugins,x=y===void 0?Ul:y,T=function(b,L,H){return H.startsWith(u)&&H.endsWith(u)&&H.replaceAll(u,"").length>0?".".concat(l):b},_=x.slice();_.push(function(b){b.type===Ol&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(Kg,u).replace(c,T))}),m.prefix&&_.push(wg),_.push(vg);var P=function(b,L,H,N){L===void 0&&(L=""),H===void 0&&(H=""),N===void 0&&(N="&"),l=N,u=L,c=new RegExp("\\".concat(u,"\\b"),"g");var D=b.replace(Gg,""),V=mg(H||L?"".concat(H," ").concat(L," { ").concat(D," }"):D);m.namespace&&(V=bp(V,m.namespace));var B=[];return Nl(V,yg(_.concat(xg(function(F){return B.push(F)})))),B};return P.hash=x.length?x.reduce(function(b,L){return L.name||ri(15),Qr(b,L.name)},jp).toString():"",P}var Jg=new zp,qa=qg(),Np=gt.createContext({shouldForwardProp:void 0,styleSheet:Jg,stylis:qa});Np.Consumer;gt.createContext(void 0);function Ef(){return E.useContext(Np)}var Xg=function(){function r(l,u){var c=this;this.inject=function(f,h){h===void 0&&(h=qa);var m=c.name+h.hash;f.hasNameForId(c.id,m)||f.insertRules(c.id,m,h(c.rules,m,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=u,lu(this,function(){throw ri(12,String(c.name))})}return r.prototype.getName=function(l){return l===void 0&&(l=qa),this.name+l.hash},r}(),Zg=function(r){return r>="A"&&r<="Z"};function Pf(r){for(var l="",u=0;u<r.length;u++){var c=r[u];if(u===1&&c==="-"&&r[0]==="-")return r;Zg(c)?l+="-"+c.toLowerCase():l+=c}return l.startsWith("ms-")?"-"+l:l}var Ip=function(r){return r==null||r===!1||r===""},Rp=function(r){var l,u,c=[];for(var f in r){var h=r[f];r.hasOwnProperty(f)&&!Ip(h)&&(Array.isArray(h)&&h.isCss||Jr(h)?c.push("".concat(Pf(f),":"),h,";"):ei(h)?c.push.apply(c,bl(bl(["".concat(f," {")],Rp(h),!1),["}"],!1)):c.push("".concat(Pf(f),": ").concat((l=f,(u=h)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||l in Sg||l.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function gr(r,l,u,c){if(Ip(r))return[];if(iu(r))return[".".concat(r.styledComponentId)];if(Jr(r)){if(!Jr(h=r)||h.prototype&&h.prototype.isReactComponent||!l)return[r];var f=r(l);return gr(f,l,u,c)}var h;return r instanceof Xg?u?(r.inject(u,c),[r.getName(c)]):[r]:ei(r)?Rp(r):Array.isArray(r)?Array.prototype.concat.apply(Ul,r.map(function(m){return gr(m,l,u,c)})):[r.toString()]}function e1(r){for(var l=0;l<r.length;l+=1){var u=r[l];if(Jr(u)&&!iu(u))return!1}return!0}var t1=kp(Ml),n1=function(){function r(l,u,c){this.rules=l,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&e1(l),this.componentId=u,this.baseHash=Qr(t1,u),this.baseStyle=c,zp.registerId(u)}return r.prototype.generateAndInjectStyles=function(l,u,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=hr(f,this.staticRulesId);else{var h=jf(gr(this.rules,l,u,c)),m=Ka(Qr(this.baseHash,h)>>>0);if(!u.hasNameForId(this.componentId,m)){var y=c(h,".".concat(m),void 0,this.componentId);u.insertRules(this.componentId,m,y)}f=hr(f,m),this.staticRulesId=m}else{for(var x=Qr(this.baseHash,c.hash),T="",_=0;_<this.rules.length;_++){var P=this.rules[_];if(typeof P=="string")T+=P;else if(P){var b=jf(gr(P,l,u,c));x=Qr(x,b+_),T+=b}}if(T){var L=Ka(x>>>0);u.hasNameForId(this.componentId,L)||u.insertRules(this.componentId,L,c(T,".".concat(L),void 0,this.componentId)),f=hr(f,L)}}return f},r}(),Lp=gt.createContext(void 0);Lp.Consumer;var Da={};function r1(r,l,u){var c=iu(r),f=r,h=!La(r),m=l.attrs,y=m===void 0?Ul:m,x=l.componentId,T=x===void 0?function(M,oe){var re=typeof M!="string"?"sc":vf(M);Da[re]=(Da[re]||0)+1;var Z="".concat(re,"-").concat(Tg(Ml+re+Da[re]));return oe?"".concat(oe,"-").concat(Z):Z}(l.displayName,l.parentComponentId):x,_=l.displayName,P=_===void 0?function(M){return La(M)?"styled.".concat(M):"Styled(".concat(_g(M),")")}(r):_,b=l.displayName&&l.componentId?"".concat(vf(l.displayName),"-").concat(l.componentId):l.componentId||T,L=c&&f.attrs?f.attrs.concat(y).filter(Boolean):y,H=l.shouldForwardProp;if(c&&f.shouldForwardProp){var N=f.shouldForwardProp;if(l.shouldForwardProp){var D=l.shouldForwardProp;H=function(M,oe){return N(M,oe)&&D(M,oe)}}else H=N}var V=new n1(u,b,c?f.componentStyle:void 0);function B(M,oe){return function(re,Z,Y){var ee=re.attrs,ye=re.componentStyle,me=re.defaultProps,fe=re.foldedComponentIds,Pe=re.styledComponentId,_e=re.target,lt=gt.useContext(Lp),Ve=Ef(),Ce=re.shouldForwardProp||Ve.shouldForwardProp,U=kg(Z,lt,me)||qr,q=function(pe,ce,we){for(var de,xe=mt(mt({},ce),{className:void 0,theme:we}),Qe=0;Qe<pe.length;Qe+=1){var vt=Jr(de=pe[Qe])?de(xe):de;for(var Ze in vt)xe[Ze]=Ze==="className"?hr(xe[Ze],vt[Ze]):Ze==="style"?mt(mt({},xe[Ze]),vt[Ze]):vt[Ze]}return ce.className&&(xe.className=hr(xe.className,ce.className)),xe}(ee,Z,U),W=q.as||_e,w={};for(var z in q)q[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&q.theme===U||(z==="forwardedAs"?w.as=q.forwardedAs:Ce&&!Ce(z,W)||(w[z]=q[z]));var ue=function(pe,ce){var we=Ef(),de=pe.generateAndInjectStyles(ce,we.styleSheet,we.stylis);return de}(ye,q),se=hr(fe,Pe);return ue&&(se+=" "+ue),q.className&&(se+=" "+q.className),w[La(W)&&!Sp.has(W)?"class":"className"]=se,Y&&(w.ref=Y),E.createElement(W,w)}(F,M,oe)}B.displayName=P;var F=gt.forwardRef(B);return F.attrs=L,F.componentStyle=V,F.displayName=P,F.shouldForwardProp=H,F.foldedComponentIds=c?hr(f.foldedComponentIds,f.styledComponentId):"",F.styledComponentId=b,F.target=c?f.target:r,Object.defineProperty(F,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(M){this._foldedDefaultProps=c?function(oe){for(var re=[],Z=1;Z<arguments.length;Z++)re[Z-1]=arguments[Z];for(var Y=0,ee=re;Y<ee.length;Y++)Ga(oe,ee[Y],!0);return oe}({},f.defaultProps,M):M}}),lu(F,function(){return".".concat(F.styledComponentId)}),h&&Tp(F,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),F}function Tf(r,l){for(var u=[r[0]],c=0,f=l.length;c<f;c+=1)u.push(l[c],r[c+1]);return u}var _f=function(r){return Object.assign(r,{isCss:!0})};function o1(r){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];if(Jr(r)||ei(r))return _f(gr(Tf(Ul,bl([r],l,!0))));var c=r;return l.length===0&&c.length===1&&typeof c[0]=="string"?gr(c):_f(gr(Tf(c,l)))}function Ja(r,l,u){if(u===void 0&&(u=qr),!l)throw ri(1,l);var c=function(f){for(var h=[],m=1;m<arguments.length;m++)h[m-1]=arguments[m];return r(l,u,o1.apply(void 0,bl([f],h,!1)))};return c.attrs=function(f){return Ja(r,l,mt(mt({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return Ja(r,l,mt(mt({},u),f))},c}var Dp=function(r){return Ja(r1,r)},S=Dp;Sp.forEach(function(r){S[r]=Dp(r)});const i1=S.div`
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
`,zf=S.p`
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
`,bf=S.div`
  margin-bottom: 1.5rem;
`,Nf=S.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`,p1=S.div`
  position: relative;
`,If=S.input`
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
`,Rf=()=>{const r=gn(),[l,u]=E.useState({email:"",password:""}),[c,f]=E.useState(!1),[h,m]=E.useState(""),[y,x]=E.useState(""),[T,_]=E.useState(!1);E.useEffect(()=>(localStorage.removeItem("token"),document.body.classList.add("auth-page"),()=>{document.body.classList.remove("auth-page")}),[]);const P=V=>{const{name:B,value:F}=V.target;u(M=>({...M,[B]:F})),h&&m("")},b=V=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V),L=()=>!l.email||!l.password?(m("Email and password are required"),!1):b(l.email)?l.password.length<6?(m("Password must be at least 6 characters long"),!1):!0:(m("Please enter a valid email address"),!1),H=()=>l.email.trim()!==""&&l.password.trim()!==""&&b(l.email)&&l.password.length>=6,N=async V=>{if(V.preventDefault(),m(""),x(""),!!L()){_(!0);try{const B=await fetch("http://localhost:8080/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.email,password:l.password})});if(B.ok){const F=await B.json();localStorage.setItem("token",F.token),localStorage.setItem("user",JSON.stringify(F.user)),x("Login successful!"),setTimeout(()=>{r("/dashboard")},1e3)}else{const F=await B.json();m(F.message||"Login failed. Please check your credentials.")}}catch(B){console.error("Login error:",B),m("Unable to connect to server. Please try again later.")}finally{_(!1)}}},D=()=>{m(""),x("Password reset functionality coming soon.")};return a.jsx(i1,{children:a.jsxs(l1,{children:[a.jsxs(s1,{children:[a.jsxs(a1,{children:[a.jsx(u1,{children:"🏠"}),"Home Control Hub"]}),a.jsx(zf,{children:"Welcome back!"}),a.jsx(zf,{children:"Please log in to access your smart home dashboard."})]}),a.jsxs(c1,{children:[a.jsxs(d1,{children:[a.jsx(f1,{children:"Login"}),h&&a.jsx(y1,{children:h}),y&&a.jsx(x1,{children:y}),a.jsxs("form",{onSubmit:N,children:[a.jsxs(bf,{children:[a.jsx(Nf,{htmlFor:"email",children:"Your email"}),a.jsx(If,{type:"email",id:"email",name:"email",value:l.email,onChange:P,placeholder:"Enter your email",required:!0})]}),a.jsxs(bf,{children:[a.jsxs(Nf,{htmlFor:"password",children:["Your password",a.jsxs(h1,{type:"button",onClick:()=>f(!c),children:[c?a.jsx(Xo,{}):a.jsx(Zo,{}),a.jsx("span",{children:"Show"})]})]}),a.jsx(p1,{children:a.jsx(If,{type:c?"text":"password",id:"password",name:"password",value:l.password,onChange:P,placeholder:"Enter your password",required:!0})})]}),a.jsx(m1,{type:"submit",disabled:T,isComplete:H(),children:T?"Please wait...":"Log in"}),a.jsx(g1,{onClick:D,children:"Forget your password?"})]})]}),a.jsx(v1,{as:up,to:"/register",children:"Create an account"})]})]})})},w1=S.div`
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
`,j1=S.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`,k1=S.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  white-space: nowrap;
`,C1=S.span`
  font-size: 3rem;
`,Lf=S.p`
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
`,T1=S.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,Bo=S.div`
  margin-bottom: 1.5rem;
`,Ho=S.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`,Df=S.div`
  position: relative;
`,Wo=S.input`
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
`,Of=S.button`
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
`,_1=S.button`
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
`,b1=S.div`
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,N1=S.div`
  background-color: #efe;
  color: #3c3;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,I1=()=>{const r=gn(),[l,u]=E.useState({fullName:"",username:"",email:"",password:"",confirmPassword:""}),[c,f]=E.useState(!1),[h,m]=E.useState(!1),[y,x]=E.useState(""),[T,_]=E.useState(""),[P,b]=E.useState(!1);E.useEffect(()=>(document.body.classList.add("auth-page"),()=>{document.body.classList.remove("auth-page")}),[]);const L=B=>{const{name:F,value:M}=B.target;u(oe=>({...oe,[F]:M})),y&&x("")},H=B=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(B),N=()=>!l.fullName||!l.username||!l.email||!l.password||!l.confirmPassword?(x("All fields are required"),!1):H(l.email)?l.password.length<6?(x("Password must be at least 6 characters long"),!1):l.password!==l.confirmPassword?(x("Passwords do not match"),!1):!0:(x("Please enter a valid email address"),!1),D=()=>l.fullName.trim()!==""&&l.username.trim()!==""&&l.email.trim()!==""&&l.password.trim()!==""&&l.confirmPassword.trim()!==""&&H(l.email)&&l.password.length>=6&&l.password===l.confirmPassword,V=async B=>{if(B.preventDefault(),x(""),_(""),!!N()){b(!0);try{const F=await fetch("http://localhost:8080/api/v1/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:l.username,email:l.email,password:l.password})});if(F.ok){const M=await F.json();_("Registration successful! Redirecting to login..."),setTimeout(()=>{r("/login")},2e3)}else{const M=await F.json();x(M.message||"Registration failed. Please try again.")}}catch(F){console.error("Registration error:",F),x("Unable to connect to server. Please try again later.")}finally{b(!1)}}};return a.jsx(w1,{children:a.jsxs(S1,{children:[a.jsxs(j1,{children:[a.jsxs(k1,{children:[a.jsx(C1,{children:"🏠"}),"Home Control Hub"]}),a.jsx(Lf,{children:"Welcome!"}),a.jsx(Lf,{children:"Register to access your smart home dashboard."})]}),a.jsxs(E1,{children:[a.jsxs(P1,{children:[a.jsx(T1,{children:"Create an account"}),y&&a.jsx(b1,{children:y}),T&&a.jsx(N1,{children:T}),a.jsxs("form",{onSubmit:V,children:[a.jsxs(Bo,{children:[a.jsx(Ho,{htmlFor:"fullName",children:"Full name"}),a.jsx(Wo,{type:"text",id:"fullName",name:"fullName",value:l.fullName,onChange:L,placeholder:"Enter your full name",required:!0})]}),a.jsxs(Bo,{children:[a.jsx(Ho,{htmlFor:"username",children:"Username"}),a.jsx(Wo,{type:"text",id:"username",name:"username",value:l.username,onChange:L,placeholder:"Enter your username",required:!0})]}),a.jsxs(Bo,{children:[a.jsx(Ho,{htmlFor:"email",children:"E-mail"}),a.jsx(Wo,{type:"email",id:"email",name:"email",value:l.email,onChange:L,placeholder:"Enter your email",required:!0})]}),a.jsxs(Bo,{children:[a.jsxs(Ho,{htmlFor:"password",children:["Password",a.jsxs(Of,{type:"button",onClick:()=>f(!c),children:[c?a.jsx(Xo,{}):a.jsx(Zo,{}),a.jsx("span",{children:"Show"})]})]}),a.jsx(Df,{children:a.jsx(Wo,{type:c?"text":"password",id:"password",name:"password",value:l.password,onChange:L,placeholder:"Enter your password",required:!0})})]}),a.jsxs(Bo,{children:[a.jsxs(Ho,{htmlFor:"confirmPassword",children:["Confirm password",a.jsxs(Of,{type:"button",onClick:()=>m(!h),children:[h?a.jsx(Xo,{}):a.jsx(Zo,{}),a.jsx("span",{children:"Show"})]})]}),a.jsx(Df,{children:a.jsx(Wo,{type:h?"text":"password",id:"confirmPassword",name:"confirmPassword",value:l.confirmPassword,onChange:L,placeholder:"Confirm your password",required:!0})})]}),a.jsx(_1,{type:"submit",disabled:P,isComplete:D(),children:P?"Please wait...":"Register"})]})]}),a.jsx(z1,{as:up,to:"/login",children:"Login"})]})]})})},zt=S.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`,bt=S.header`
  background: linear-gradient(270deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`,Nt=S.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,It=S.span`
  font-size: 1.5rem;
`,Rt=S.h1`
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
`,nn=S.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,su=S.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;
  font-weight: 600;
`,Oa=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`,$a=S.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,Xa=S.button`
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
`,$f=S.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
`,Af=S.thead`
  background-color: #f8f9fa;
`,Vo=S.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`,$e=S.td`
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
`;const Ff=S.button`
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
`,Op=S.button`
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
`,R1=S.div`
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

  ${Xa} {
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
`,B1=()=>{const r=gn(),[l,u]=E.useState([]),[c,f]=E.useState([]),[h,m]=E.useState(!0),[y,x]=E.useState(null),[T,_]=E.useState(null),[P,b]=E.useState(!1),[L,H]=E.useState(null);E.useEffect(()=>{document.body.classList.remove("auth-page");const Y=localStorage.getItem("user");if(Y)try{const ee=JSON.parse(Y);_(ee.role),H(ee),!localStorage.getItem(`welcomed_${ee.id}`)&&ee.role==="STANDARD_USER"&&b(!0)}catch(ee){console.error("Error parsing user data:",ee)}},[]),E.useEffect(()=>{T!==null&&(async()=>{try{const ee=localStorage.getItem("token");if(!ee){r("/login");return}const ye=await fetch("http://localhost:8080/api/v1/devices",{method:"GET",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"}});if(ye.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),r("/login");return}if(!ye.ok)throw new Error(`HTTP error! status: ${ye.status}`);const me=await ye.json();if(u(me),T==="STANDARD_USER"){const fe=await fetch("http://localhost:8080/api/v1/notifications",{method:"GET",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"}});if(fe.ok){const Pe=await fe.json();f(Pe)}}}catch(ee){console.error("Error fetching data:",ee),x("Failed to load data. Please try again.")}finally{m(!1)}})()},[r,T]);const N=T==="ADMIN",D=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),r("/login")},V=()=>{r("/add-device")},B=Y=>{r(`/device/${Y}`)},F=async Y=>{try{const ee=localStorage.getItem("token");if(!ee){r("/login");return}const ye=l.find(Pe=>Pe.id===Y);if(!ye)return;const me=!ye.status;if(u(Pe=>Pe.map(_e=>_e.id===Y?{..._e,status:me}:_e)),!(await fetch(`http://localhost:8080/api/v1/devices/${Y}/status`,{method:"PUT",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"},body:JSON.stringify({status:me})})).ok)throw u(Pe=>Pe.map(_e=>_e.id===Y?{..._e,status:!me}:_e)),new Error("Failed to update device status");localStorage.setItem(`device_updated_${Y}`,Date.now().toString()),setTimeout(()=>{localStorage.removeItem(`device_updated_${Y}`)},1e3)}catch(ee){console.error("Error toggling device status:",ee)}},M=async Y=>{try{const ee=localStorage.getItem("token");if(!ee){r("/login");return}if(f(me=>me.map(fe=>fe.id===Y?{...fe,read:!0}:fe)),!(await fetch(`http://localhost:8080/api/v1/notifications/${Y}/read`,{method:"PUT",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"}})).ok)throw f(me=>me.map(fe=>fe.id===Y?{...fe,read:!1}:fe)),new Error("Failed to mark notification as read")}catch(ee){console.error("Error marking notification as read:",ee)}},oe=()=>{L&&(localStorage.setItem(`welcomed_${L.id}`,"true"),b(!1))},re=Y=>{if(!Y)return"Unknown";switch(Y){case"DEVICE_ADDED":return"Device added";case"WELCOME":return"Welcome";case"CRITICAL":return"Critical";case"SYSTEM":return"System";case"ADMIN":return"Admin";default:return Y.toLowerCase().replace(/_/g," ")}},Z=Y=>{const ee=new Date(Y),me=Math.floor((new Date().getTime()-ee.getTime())/(1e3*60*60));return me<1?"Just now":me<24?`${me}h ago`:`${Math.floor(me/24)}d ago`};return h?a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{selected:!0,onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:D,children:"Logout"})]})]}),a.jsx(R1,{children:"Loading your devices..."})]}):y?a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{selected:!0,onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:D,children:"Logout"})]})]}),a.jsx(L1,{children:a.jsxs("div",{children:[a.jsx("h3",{children:"Oops! Something went wrong"}),a.jsx("p",{children:y}),a.jsx("button",{onClick:()=>window.location.reload(),children:"Try Again"})]})})]}):a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{selected:!0,onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:D,children:"Logout"})]})]}),a.jsxs(nn,{children:[P&&L&&a.jsx(O1,{children:a.jsxs($1,{children:[a.jsxs(A1,{children:[a.jsxs(F1,{children:["Welcome to Home Control Hub, ",L.username,"! 🎉"]}),a.jsx(M1,{children:"You can now manage and monitor all your smart devices from this dashboard. Add your devices, check their status, and receive important notifications all in one place."})]}),a.jsx(U1,{onClick:oe,children:"Got it, thanks!"})]})}),l.length===0?a.jsxs(a.Fragment,{children:[a.jsxs(Oa,{children:[a.jsx($a,{children:N?"System Overview":"Interactive dashboard"}),!N&&a.jsx("div",{})]}),a.jsx(D1,{children:N?a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"No devices in the system"}),a.jsx("p",{children:"There are currently no devices registered in the Home Control Hub system. Users can add devices to start monitoring and controlling them."})]}):a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"No devices found"}),a.jsx("p",{children:"You haven't added any devices yet. Get started by adding your first smart device!"}),a.jsx(Xa,{onClick:V,children:"Add your first device"})]})})]}):a.jsxs(a.Fragment,{children:[a.jsxs(Oa,{children:[a.jsx($a,{children:N?"All System Devices":"Your Devices"}),!N&&a.jsx(Xa,{onClick:V,children:"Add Device"})]}),a.jsxs($f,{children:[a.jsx(Af,{children:a.jsxs(Vo,{children:[a.jsx($e,{as:"th",children:"Device name"}),a.jsx($e,{as:"th",children:"ID"}),a.jsx($e,{as:"th",children:"Type"}),a.jsx($e,{as:"th",children:"Location"}),a.jsx($e,{as:"th",children:"Status"}),a.jsx($e,{as:"th",children:"Actions"})]})}),a.jsx("tbody",{children:l.map(Y=>a.jsxs(Vo,{children:[a.jsx($e,{children:Y.name}),a.jsx($e,{children:Y.id}),a.jsx($e,{children:Y.type}),a.jsx($e,{children:Y.location}),a.jsx($e,{children:N?a.jsx("span",{style:{color:Y.status?"#4CAF50":"#f44336",fontWeight:"bold"},children:Y.status?"ON":"OFF"}):a.jsx(Op,{checked:Y.status,onClick:()=>F(Y.id),"aria-label":`Toggle ${Y.name}`})}),a.jsx($e,{children:a.jsx(Ff,{onClick:()=>B(Y.id),children:N?"View Details":"Details"})})]},Y.id))})]})]}),!N&&a.jsxs(a.Fragment,{children:[a.jsx(Oa,{style:{marginTop:"3rem"},children:a.jsx($a,{children:"Your notifications"})}),a.jsxs($f,{children:[a.jsx(Af,{children:a.jsxs(Vo,{children:[a.jsx($e,{as:"th",children:"Message"}),a.jsx($e,{as:"th",children:"Type"}),a.jsx($e,{as:"th",children:"Time"}),a.jsx($e,{as:"th",children:"Status"}),a.jsx($e,{as:"th",children:"Actions"})]})}),a.jsx("tbody",{children:c.length===0?a.jsx(Vo,{children:a.jsx($e,{colSpan:5,style:{textAlign:"center",padding:"2rem",color:"#666"},children:"No notifications yet. You'll see important updates about your devices here."})}):c.map(Y=>a.jsxs(Vo,{children:[a.jsx($e,{style:{fontWeight:Y.read?"normal":"bold",color:Y.read?"#666":"#333"},children:Y.message}),a.jsx($e,{style:{textTransform:"capitalize"},children:re(Y.type)}),a.jsx($e,{children:Z(Y.createdAt)}),a.jsx($e,{children:a.jsx("span",{style:{color:Y.read?"#4CAF50":"#ff9800",fontWeight:"bold",fontSize:"0.8rem"},children:Y.read?"READ":"UNREAD"})}),a.jsx($e,{children:!Y.read&&a.jsx(Ff,{onClick:()=>M(Y.id),children:"Mark as Read"})})]},Y.id))})]})]})]})]})},H1=S.div`
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
`,K1=[{question:"What is Home Control Hub?",answer:"Home Control Hub is a platform that allows you to manage and monitor your smart home devices from a single dashboard."},{question:"How do I add a new device?",answer:"Go to the Dashboard page and click on 'Add a device'. Follow the instructions to connect your new device."},{question:"Is my data secure?",answer:"Yes, we use industry-standard encryption and security practices to keep your data safe."},{question:"Can I control my devices remotely?",answer:"Absolutely! As long as you have an internet connection, you can control your devices from anywhere."},{question:"Who can I contact for support?",answer:"You can reach our support team via the 'Support' link in the header navigation."},{question:"How do I reset my password?",answer:"Go to the login page and click on 'Forget your password?'. Follow the instructions to reset your password."}],G1=()=>{const[r,l]=E.useState([]),u=gn(),c=h=>{l(m=>m.includes(h)?m.filter(y=>y!==h):[...m,h])},f=()=>{localStorage.removeItem("token"),u("/login")};return a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{onClick:()=>u("/profile"),children:"Profile"}),a.jsx(ie,{onClick:()=>u("/dashboard"),children:"Dashboard"}),a.jsx(ie,{selected:!0,onClick:()=>u("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>u("/support"),children:"Support"}),a.jsx(Dt,{onClick:f,children:"Logout"})]})]}),a.jsxs(nn,{children:[a.jsx(su,{children:"Frequently Asked Questions"}),a.jsx(H1,{children:K1.map((h,m)=>{const y=r.includes(m);return a.jsxs(W1,{children:[a.jsxs(V1,{onClick:()=>c(m),isOpen:y,"aria-expanded":y,children:[h.question,a.jsx(Q1,{isOpen:y,children:y?"−":"+"})]}),a.jsx(Y1,{isOpen:y,children:y&&h.answer})]},m)})})]})]})},q1=S.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Aa=S.div`
  display: flex;
  flex-direction: column;
`,Fa=S.label`
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
`,ov=["Login Issue","Device Not Responding","Billing Question","Feature Request","Other"],iv=()=>{const[r,l]=E.useState(""),[u,c]=E.useState(""),[f,h]=E.useState(""),[m,y]=E.useState(null),[x,T]=E.useState(!1),_=gn(),P=N=>{l(N.target.value),N.target.value!=="Other"&&c("")},b=N=>{y(N.target.files)},L=N=>{N.preventDefault(),T(!0)},H=()=>{localStorage.removeItem("token"),_("/login")};return a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{onClick:()=>_("/profile"),children:"Profile"}),a.jsx(ie,{onClick:()=>_("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>_("/faq"),children:"FAQ"}),a.jsx(ie,{selected:!0,onClick:()=>_("/support"),children:"Support"}),a.jsx(Dt,{onClick:H,children:"Logout"})]})]}),a.jsxs(nn,{children:[a.jsx(su,{children:"Contact Support"}),a.jsxs(q1,{onSubmit:L,children:[a.jsxs(Aa,{children:[a.jsx(Fa,{htmlFor:"subject",children:"Subject"}),a.jsxs(J1,{id:"subject",value:r,onChange:P,required:!0,children:[a.jsx("option",{value:"",disabled:!0,children:"Select a subject"}),ov.map(N=>a.jsx("option",{value:N,children:N},N))]}),r==="Other"&&a.jsx(X1,{type:"text",placeholder:"Enter your subject",value:u,onChange:N=>c(N.target.value),required:!0})]}),a.jsxs(Aa,{children:[a.jsx(Fa,{htmlFor:"message",children:"Describe your problem"}),a.jsx(Z1,{id:"message",value:f,onChange:N=>h(N.target.value),required:!0,rows:7})]}),a.jsxs(Aa,{children:[a.jsx(Fa,{children:"Attach files (optional)"}),a.jsx(ev,{type:"file",multiple:!0,onChange:b}),m&&m.length>0&&a.jsx(tv,{children:Array.from(m).map((N,D)=>a.jsx("li",{children:N.name},D))})]}),a.jsx(nv,{type:"submit",disabled:f.trim()==="",children:"Send"}),x&&a.jsx(rv,{children:"Your message has been sent! Our support team will contact you soon."})]})]})]})},lv=S.div`
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
`,lr=S.td`
  font-weight: 600;
  color: ${({disabled:r})=>r?"#888":"#222"};
  width: 160px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  background: ${({disabled:r})=>r?"#f8f9fa":"white"};
`,sr=S.td`
  color: ${({disabled:r})=>r?"#888":"#222"};
  background: ${({disabled:r})=>r?"#f8f9fa":"white"};
  padding: 1rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  border-bottom: 1px solid #e9ecef;
`,xl=S.input`
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
`,Mf=S.button`
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
`,Uf=S.div`
  position: relative;
  flex: 1;
`,Bf=S.button`
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
`;const vv=()=>{const r=gn(),[l,u]=E.useState(null),[c,f]=E.useState(!0),[h,m]=E.useState(null),[y,x]=E.useState({username:"",email:"",password:"",confirmPassword:""}),[T,_]=E.useState(!1),[P,b]=E.useState(!1),[L,H]=E.useState(!1),[N,D]=E.useState(!1);E.useEffect(()=>{(async()=>{try{const ye=localStorage.getItem("token");if(!ye){r("/login");return}const me=await fetch("http://localhost:8080/api/v1/users/profile",{method:"GET",headers:{Authorization:`Bearer ${ye}`,"Content-Type":"application/json"}});if(me.status===401){localStorage.removeItem("token"),r("/login");return}if(!me.ok)throw new Error(`HTTP error! status: ${me.status}`);const fe=await me.json();u(fe),x({username:fe.username,email:fe.email,password:"",confirmPassword:""}),m(null)}catch(ye){console.error("Error fetching user profile:",ye),m("Failed to load user profile")}finally{f(!1)}})()},[r]);const V=ee=>new Date(ee).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),B=()=>l?y.username!==l.username||y.email!==l.email||L&&y.password.length>0&&y.password===y.confirmPassword:!1,F=()=>y.password===y.confirmPassword,M=()=>y.password.length>=6,oe=()=>{localStorage.removeItem("token"),r("/login")},re=ee=>{x({...y,[ee.target.name]:ee.target.value})},Z=async()=>{if(!(!l||!B())){D(!0);try{const ee=localStorage.getItem("token");if(!ee){r("/login");return}const ye={};if(y.username!==l.username&&(ye.username=y.username),y.email!==l.email&&(ye.email=y.email),L&&y.password.trim()!==""){if(!F()){m("Passwords do not match");return}if(!M()){m("Password must be at least 6 characters long");return}ye.password=y.password}const me=await fetch("http://localhost:8080/api/v1/users/profile",{method:"PUT",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"},body:JSON.stringify(ye)});if(me.status===401){localStorage.removeItem("token"),r("/login");return}if(!me.ok){const Pe=await me.json();throw new Error(Pe.message||`HTTP error! status: ${me.status}`)}const fe=await me.json();u(fe),x({username:fe.username,email:fe.email,password:"",confirmPassword:""}),H(!1),_(!1),m(null)}catch(ee){console.error("Error updating profile:",ee),m(ee.message||"Failed to update profile")}finally{D(!1)}}},Y=()=>{H(!1),x({...y,password:"",confirmPassword:""}),_(!1),b(!1)};return c?a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{selected:!0,onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:oe,children:"Logout"})]})]}),a.jsx(nn,{children:a.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:a.jsx("p",{children:"Loading profile..."})})})]}):h||!l?a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{selected:!0,onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:oe,children:"Logout"})]})]}),a.jsx(nn,{children:a.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[a.jsx("p",{style:{color:"red"},children:h||"Failed to load user profile"}),a.jsx("button",{onClick:()=>window.location.reload(),children:"Retry"})]})})]}):a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{selected:!0,onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:oe,children:"Logout"})]})]}),a.jsxs(nn,{children:[a.jsx(lv,{children:a.jsx(sv,{children:"Personal information"})}),a.jsxs(dv,{children:[a.jsx(fv,{children:l.username}),a.jsx(pv,{children:l.email})]}),h&&a.jsx("div",{style:{backgroundColor:"#fee",color:"#c33",padding:"1rem",borderRadius:"4px",margin:"1rem 0",border:"1px solid #fcc"},children:h}),a.jsxs(hv,{onSubmit:ee=>{ee.preventDefault(),Z()},children:[a.jsx(av,{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx(lr,{disabled:!0,children:"Creation date"}),a.jsx(sr,{disabled:!0,children:V(l.createdAt)})]}),a.jsxs("tr",{children:[a.jsx(lr,{disabled:!0,children:"Last updated"}),a.jsx(sr,{disabled:!0,children:V(l.updatedAt)})]}),a.jsxs("tr",{children:[a.jsx(lr,{disabled:!0,children:"User ID"}),a.jsx(sr,{disabled:!0,children:l.id})]}),a.jsxs("tr",{children:[a.jsx(lr,{disabled:!0,children:"Role"}),a.jsx(sr,{disabled:!0,style:{textTransform:"capitalize"},children:l.role.toLowerCase().replace("_"," ")})]}),a.jsxs("tr",{children:[a.jsx(lr,{children:"Username"}),a.jsx(sr,{children:a.jsx(xl,{type:"text",name:"username",value:y.username,onChange:re})})]}),a.jsxs("tr",{children:[a.jsx(lr,{children:"E-mail"}),a.jsx(sr,{children:a.jsx(xl,{type:"email",name:"email",value:y.email,onChange:re})})]}),a.jsxs("tr",{children:[a.jsx(lr,{children:"Password"}),a.jsx(sr,{children:a.jsxs(cv,{children:[L?a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[a.jsxs(Uf,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx(xl,{type:T?"text":"password",name:"password",value:y.password,onChange:re,placeholder:"Enter new password",style:{borderColor:L&&y.password&&!M()?"#dc3545":void 0,flex:1}}),a.jsx(Bf,{type:"button",onClick:()=>_(!T),children:T?a.jsx(Xo,{}):a.jsx(Zo,{})}),a.jsx("div",{style:{width:"104px",visibility:"hidden"}})]}),a.jsxs(Uf,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx(xl,{type:P?"text":"password",name:"confirmPassword",value:y.confirmPassword,onChange:re,placeholder:"Confirm new password",style:{borderColor:L&&y.confirmPassword&&!F()?"#dc3545":L&&y.confirmPassword&&F()?"#28a745":void 0,flex:1}}),a.jsx(Bf,{type:"button",onClick:()=>b(!P),children:P?a.jsx(Xo,{}):a.jsx(Zo,{})}),a.jsx(Mf,{type:"button",onClick:Y,style:{background:"#f5f5f5",color:"#333"},children:"Cancel"})]}),L&&y.password&&!M()&&a.jsx("div",{style:{color:"#dc3545",fontSize:"0.8rem"},children:"Password must be at least 6 characters long"}),L&&y.confirmPassword&&!F()&&a.jsx("div",{style:{color:"#dc3545",fontSize:"0.8rem"},children:"Passwords do not match"}),L&&y.confirmPassword&&F()&&M()&&a.jsx("div",{style:{color:"#28a745",fontSize:"0.8rem"},children:"✓ Passwords match"})]}):a.jsx(gv,{isVisible:!1,children:"********"}),!L&&a.jsx(Mf,{type:"button",onClick:()=>H(!0),children:"Change password"})]})})]})]})}),a.jsx(mv,{children:a.jsx(uv,{type:"submit",isEnabled:B()&&!N,children:N?"Saving...":"Save changes"})})]})]})]})},yv=S.form`
  flex: 2;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,xv=S.div`
  margin-bottom: 2rem;
`,Hf=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ar=S.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`,ur=S.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`,Ma=S.input`
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
`,Ua=S.select`
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
`,jv=S.button`
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
`,kv=S.button`
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
`,cr=S.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`,dr=S.span`
  font-weight: 600;
  color: #666;
  min-width: 80px;
  font-size: 0.9rem;
`,fr=S.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`,Tv=S.div`
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`,_v=S.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`,zv=["Smart Light","Smart Switch","Smart Thermostat","Smart Lock","Smart Camera","Smart Sensor","Smart Speaker","Smart TV","Smart Plug","Other"],bv=["Living Room","Bedroom","Kitchen","Bathroom","Office","Garage","Garden","Basement","Attic","Other"],Nv=()=>{const r=gn(),[l,u]=E.useState({name:"",type:"",location:"",description:"",mqttTopic:"",aesKey:"",status:!1}),[c,f]=E.useState(!1),[h,m]=E.useState(null),y=()=>{localStorage.removeItem("token"),r("/login")},x=b=>{const{name:L,value:H}=b.target;u(N=>({...N,[L]:H}))},T=async b=>{b.preventDefault(),f(!0),m(null);try{const L=localStorage.getItem("token");if(!L){m("error"),f(!1);return}const H=await fetch("http://localhost:8080/api/v1/devices",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${L}`},body:JSON.stringify({name:l.name,type:l.type,description:l.description,location:l.location,mqttTopic:l.mqttTopic,aesKey:l.aesKey,status:l.status})});if(H.ok)m("success"),localStorage.removeItem("deviceCache"),setTimeout(()=>{r("/dashboard")},2e3);else{const N=await H.json().catch(()=>({}));console.error("Error response:",N),m("error")}}catch(L){console.error("Error creating device:",L),m("error")}finally{f(!1)}},_=()=>{r("/dashboard")},P=()=>l.name.trim()&&l.type&&l.location&&l.mqttTopic.trim()&&l.aesKey.trim();return a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:y,children:"Logout"})]})]}),a.jsxs(nn,{children:[a.jsx(su,{children:"Add New Device"}),a.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[a.jsxs(yv,{onSubmit:T,children:[a.jsxs(xv,{children:[a.jsx("h3",{style:{margin:"0 0 1.5rem 0",color:"#333",fontSize:"1.3rem"},children:"Device Information"}),a.jsxs(Hf,{children:[a.jsxs(ar,{children:[a.jsx(ur,{htmlFor:"name",children:"Device Name *"}),a.jsx(Ma,{type:"text",id:"name",name:"name",value:l.name,onChange:x,placeholder:"e.g., Living Room Light",required:!0})]}),a.jsxs(ar,{children:[a.jsx(ur,{htmlFor:"type",children:"Device Type *"}),a.jsxs(Ua,{id:"type",name:"type",value:l.type,onChange:x,required:!0,children:[a.jsx("option",{value:"",children:"Select device type"}),zv.map(b=>a.jsx("option",{value:b,children:b},b))]})]})]}),a.jsxs(Hf,{children:[a.jsxs(ar,{children:[a.jsx(ur,{htmlFor:"location",children:"Location *"}),a.jsxs(Ua,{id:"location",name:"location",value:l.location,onChange:x,required:!0,children:[a.jsx("option",{value:"",children:"Select location"}),bv.map(b=>a.jsx("option",{value:b,children:b},b))]})]}),a.jsxs(ar,{children:[a.jsx(ur,{htmlFor:"status",children:"Current Status"}),a.jsxs(Ua,{id:"status",name:"status",value:l.status.toString(),onChange:b=>u(L=>({...L,status:b.target.value==="true"})),children:[a.jsx("option",{value:"false",children:"Off"}),a.jsx("option",{value:"true",children:"On"})]})]})]}),a.jsxs(ar,{children:[a.jsx(ur,{htmlFor:"mqttTopic",children:"MQTT Topic *"}),a.jsx(Ma,{type:"text",id:"mqttTopic",name:"mqttTopic",value:l.mqttTopic,onChange:x,placeholder:"e.g., devices/livingroom/lamp",required:!0})]}),a.jsxs(ar,{children:[a.jsx(ur,{htmlFor:"aesKey",children:"Device AES Key *"}),a.jsx(Ma,{type:"password",id:"aesKey",name:"aesKey",value:l.aesKey,onChange:x,placeholder:"Secure encryption key for device communication",required:!0})]}),a.jsxs(ar,{children:[a.jsx(ur,{htmlFor:"description",children:"Description"}),a.jsx(wv,{id:"description",name:"description",value:l.description,onChange:x,placeholder:"Optional description of the device...",rows:4})]})]}),h==="success"&&a.jsx(Tv,{children:"✅ Device added successfully! Redirecting to dashboard..."}),h==="error"&&a.jsx(_v,{children:"❌ Failed to add device. Please check your information and try again."}),a.jsxs(Sv,{children:[a.jsx(kv,{type:"button",onClick:_,children:"Cancel"}),a.jsx(jv,{type:"submit",disabled:!P()||c,children:c?"Adding Device...":"Add Device"})]})]}),a.jsx(Cv,{children:a.jsxs(Ev,{children:[a.jsx(Pv,{children:"Device Preview"}),a.jsxs(cr,{children:[a.jsx(dr,{children:"Name:"}),a.jsx(fr,{children:l.name||"Not specified"})]}),a.jsxs(cr,{children:[a.jsx(dr,{children:"Type:"}),a.jsx(fr,{children:l.type||"Not specified"})]}),a.jsxs(cr,{children:[a.jsx(dr,{children:"Location:"}),a.jsx(fr,{children:l.location||"Not specified"})]}),a.jsxs(cr,{children:[a.jsx(dr,{children:"Status:"}),a.jsx(fr,{children:l.status?"On":"Off"})]}),a.jsxs(cr,{children:[a.jsx(dr,{children:"MQTT Topic:"}),a.jsx(fr,{children:l.mqttTopic||"Not specified"})]}),a.jsxs(cr,{children:[a.jsx(dr,{children:"AES Key:"}),a.jsx(fr,{children:l.aesKey?"••••••••••••":"Not specified"})]}),l.description&&a.jsxs(cr,{children:[a.jsx(dr,{children:"Description:"}),a.jsx(fr,{children:l.description})]})]})})]})]})]})},Iv=S.div`
  margin-top: 2rem;
`,Wf=S.button`
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
`,Rv=S.div`
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
`,pr=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({variant:r})=>r==="success"?"#28a745":r==="cancel"||r==="danger"?"#dc3545":"linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"};
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,$v=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ti=S.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;S(ti)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;const Av=S(ti)`
  grid-column: 1 / -1;
`,Vr=S.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f3f4;
`,Vf=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Jt=S.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f3f4;

  &:last-child {
    border-bottom: none;
  }
`,Xt=S.span`
  font-weight: 600;
  color: #666;
  min-width: 120px;
  font-size: 0.95rem;
`,Zt=S.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`,Qo=S.input`
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
`,Vv=S(ti)`
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
`,Qf=S.button`
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
`,wl=S.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Yo=S.input`
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
`,Yf=S.button`
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
`,Kf=S.div`
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
`,Sl=r=>{if(!r||r===null||r===void 0)return"Unknown";try{const l=r instanceof Date?r:new Date(r);return isNaN(l.getTime())?"Unknown":l.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"Unknown"}},iy=()=>{const r=gn(),{deviceId:l}=v0(),[u,c]=E.useState(null),[f,h]=E.useState(!1),[m,y]=E.useState({}),[x,T]=E.useState([]),[_,P]=E.useState(!0),[b,L]=E.useState(!1),[H,N]=E.useState(""),[D,V]=E.useState(null),[B,F]=E.useState(null),[M,oe]=E.useState(null),[re,Z]=E.useState(null),[Y,ee]=E.useState(!1),[ye,me]=E.useState("terminal"),[fe,Pe]=E.useState(""),[_e,lt]=E.useState(""),[Ve,Ce]=E.useState([]),[U,q]=E.useState([]),[W,w]=E.useState(""),[z,ue]=E.useState(""),[se,pe]=E.useState(""),[ce,we]=E.useState(!1),[de,xe]=E.useState(!1),[Qe,vt]=E.useState(!1),[Ze,Bn]=E.useState(!1);E.useEffect(()=>{const A=localStorage.getItem("user");if(A)try{const ae=JSON.parse(A);F(ae.role),oe(ae)}catch(ae){console.error("Error parsing user data:",ae)}},[]);const yr=async()=>{try{const A=localStorage.getItem("token");if(!A||!l)return;const ae=await fetch(`http://localhost:8080/api/v1/devices/${l}/logs?limit=20`,{method:"GET",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"}});if(ae.ok){const Re=(await ae.json()).map(Te=>({id:Te.id,message:Te.message,type:Te.type,source:Te.source,createdAt:Te.createdAt,user:Te.user}));T(Re),ee(!0)}}catch(A){console.error("Error fetching device logs:",A)}},rn=async(A=!0,ae=!1)=>{try{A?P(!0):L(!0);const ge=localStorage.getItem("token");if(!ge){r("/login");return}const Re=await fetch(`http://localhost:8080/api/v1/devices/${l}`,{method:"GET",headers:{Authorization:`Bearer ${ge}`,"Content-Type":"application/json"}});if(Re.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),r("/login");return}if(Re.status===404){V("Device not found");return}if(!Re.ok)throw new Error(`HTTP error! status: ${Re.status}`);const Te=await Re.json();c(Te),y(Te),Z(Te.status),!Y&&!ae&&await yr(),await li(),A||N(new Date().toLocaleTimeString())}catch(ge){console.error("Error fetching device data:",ge),A&&V("Failed to load device data")}finally{A?P(!1):L(!1)}};E.useEffect(()=>{l&&rn()},[l,r]),E.useEffect(()=>{const A=setInterval(()=>{l&&!f&&rn(!1,!0)},5e3);return()=>clearInterval(A)},[l,f]),E.useEffect(()=>{const A=()=>{l&&!f&&rn(!1,!0)},ae=ge=>{ge.key===`device_updated_${l}`&&l&&!f&&setTimeout(()=>rn(!1,!0),100)};return window.addEventListener("focus",A),window.addEventListener("storage",ae),document.addEventListener("visibilitychange",()=>{!document.hidden&&l&&!f&&rn(!1,!0)}),()=>{window.removeEventListener("focus",A),window.removeEventListener("storage",ae),document.removeEventListener("visibilitychange",A)}},[l,f]);const oi=()=>{rn(!1,!0),yr()},Hn=()=>{localStorage.removeItem("token"),r("/login")},eo=()=>{r("/dashboard")},to=()=>{B!=="ADMIN"&&h(!0)},Wn=async()=>{try{const A=localStorage.getItem("token");if(!A){r("/login");return}const ae=await fetch(`http://localhost:8080/api/v1/devices/${l}`,{method:"PUT",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"},body:JSON.stringify({name:m.name,type:m.type,description:m.description,location:m.location,mqttTopic:m.mqttTopic})});if(!ae.ok)throw new Error("Failed to update device");const ge=await ae.json();c(ge),h(!1);const Re=M.username,Te={id:Date.now().toString(),message:`Device '${ge.name}' information updated by ${Re}`,type:"INFO",source:"DEVICE",createdAt:new Date().toISOString()};T(Fe=>[Te,...Fe])}catch(A){console.error("Error saving device:",A),V("Failed to save changes")}},vn=()=>{y(u||{}),h(!1)},no=async()=>{if(!(!u||B==="ADMIN"))try{const A=localStorage.getItem("token");if(!A){r("/login");return}const ae=!u.status;if(c(Fe=>Fe?{...Fe,status:ae}:null),!(await fetch(`http://localhost:8080/api/v1/devices/${l}/status`,{method:"PUT",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"},body:JSON.stringify({status:ae})})).ok)throw c(Fe=>Fe?{...Fe,status:!ae}:null),new Error("Failed to update device status");const Re=M.username,Te={id:Date.now().toString(),message:`Device '${u.name}' status changed to ${ae?"ON":"OFF"} by ${Re}`,type:"INFO",source:"DEVICE",createdAt:new Date().toISOString()};T(Fe=>[Te,...Fe]),localStorage.setItem(`device_updated_${l}`,Date.now().toString()),setTimeout(()=>{localStorage.removeItem(`device_updated_${l}`)},1e3)}catch(A){console.error("Error toggling device status:",A),V("Failed to toggle device status")}},ii=(A,ae)=>{y(ge=>({...ge,[A]:ae}))},yn=A=>ae=>{ii(A,ae.target.value)},li=async()=>{try{const A=localStorage.getItem("token");if(!A||!l)return;const ae=await fetch(`http://localhost:8080/api/v1/automation/devices/${l}/rules`,{method:"GET",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"}});if(ae.ok){const ge=await ae.json();q(ge)}}catch(A){console.error("Error fetching automation rules:",A)}},si=async()=>{if(!(!fe.trim()||!l||ce)){we(!0);try{const A=localStorage.getItem("token");if(!A){r("/login");return}let ae;try{ae=_e.trim()?JSON.parse(_e):{}}catch{ae={value:_e}}const ge=await fetch(`http://localhost:8080/api/v1/automation/devices/${l}/commands`,{method:"POST",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"},body:JSON.stringify({command:{name:fe,payload:ae}})});if(ge.ok){const Re=await ge.json(),Te={id:Date.now().toString(),timestamp:new Date().toISOString(),type:"sent",content:`${fe}: ${JSON.stringify(ae)}`};Ce(ln=>[Te,...ln.slice(0,49)]),Pe(""),lt("");const Fe=(M==null?void 0:M.username)||"Unknown User",on={id:Date.now().toString(),message:`MQTT command '${fe}' sent to device '${u==null?void 0:u.name}' by ${Fe}`,type:"INFO",source:"MQTT",createdAt:new Date().toISOString()};T(ln=>[on,...ln])}else{const Re=await ge.text();throw new Error(Re)}}catch(A){console.error("Error sending MQTT command:",A);const ae={id:Date.now().toString(),timestamp:new Date().toISOString(),type:"error",content:`Failed to send ${fe}: ${A}`};Ce(ge=>[ae,...ge.slice(0,49)])}finally{we(!1)}}},ro=async()=>{if(!(!W.trim()||!z.trim()||!se.trim()||!l||de)){xe(!0);try{const A=localStorage.getItem("token");if(!A){r("/login");return}const ae=await fetch(`http://localhost:8080/api/v1/automation/devices/${l}/rules`,{method:"POST",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"},body:JSON.stringify({name:W,triggerCondition:z,action:se})});if(ae.ok){const ge=await ae.json();q(Fe=>[ge,...Fe]),w(""),ue(""),pe("");const Re=(M==null?void 0:M.username)||"Unknown User",Te={id:Date.now().toString(),message:`Automation rule '${ge.name}' created for device '${u==null?void 0:u.name}' by ${Re}`,type:"INFO",source:"AUTOMATION",createdAt:new Date().toISOString()};T(Fe=>[Te,...Fe])}else{const ge=await ae.text();throw new Error(ge)}}catch(A){console.error("Error creating automation rule:",A),V("Failed to create automation rule")}finally{xe(!1)}}},xr=async(A,ae)=>{try{const ge=localStorage.getItem("token");if(!ge){r("/login");return}const Re=await fetch(`http://localhost:8080/api/v1/automation/rules/${A}`,{method:"DELETE",headers:{Authorization:`Bearer ${ge}`,"Content-Type":"application/json"}});if(Re.ok){q(on=>on.filter(ln=>ln.id!==A));const Te=(M==null?void 0:M.username)||"Unknown User",Fe={id:Date.now().toString(),message:`Automation rule '${ae}' deleted from device '${u==null?void 0:u.name}' by ${Te}`,type:"INFO",source:"AUTOMATION",createdAt:new Date().toISOString()};T(on=>[Fe,...on])}else{const Te=await Re.text();throw new Error(Te)}}catch(ge){console.error("Error deleting automation rule:",ge),V("Failed to delete automation rule")}},ai=()=>{vt(!0)},Vn=async()=>{if(u){Bn(!0);try{const A=localStorage.getItem("token");if(!A){r("/login");return}const ae=await fetch(`http://localhost:8080/api/v1/devices/${u.id}`,{method:"DELETE",headers:{Authorization:`Bearer ${A}`,"Content-Type":"application/json"}});if(ae.ok){const ge=(M==null?void 0:M.username)||"Unknown User",Re={id:Date.now().toString(),message:`Device "${u.name}" was deleted by ${ge}`,type:"INFO",source:"DEVICE",createdAt:new Date().toISOString()};T(Te=>[Re,...Te]),r("/dashboard")}else{const ge=await ae.text();throw new Error(ge||"Failed to delete device")}}catch(A){console.error("Error deleting device:",A),V("Failed to delete device. Please try again.")}finally{Bn(!1),vt(!1)}}},Qn=()=>{vt(!1)};return _?a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:Hn,children:"Logout"})]})]}),a.jsx(nn,{children:a.jsx(Hv,{children:"Loading device details..."})})]}):D||!u?a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:Hn,children:"Logout"})]})]}),a.jsxs(nn,{children:[a.jsx(Wv,{children:D||"Device not found"}),a.jsxs(Wf,{onClick:eo,children:[a.jsx(df,{})," Back to Dashboard"]})]})]}):a.jsxs(zt,{children:[a.jsxs(bt,{children:[a.jsxs(Nt,{children:[a.jsx(It,{children:"🏠"}),a.jsx(Rt,{children:"Home Control Hub"})]}),a.jsxs(Lt,{children:[a.jsx(ie,{onClick:()=>r("/profile"),children:"Profile"}),a.jsx(ie,{onClick:()=>r("/dashboard"),children:"Dashboard"}),a.jsx(ie,{onClick:()=>r("/faq"),children:"FAQ"}),a.jsx(ie,{onClick:()=>r("/support"),children:"Support"}),a.jsx(Dt,{onClick:Hn,children:"Logout"})]})]}),a.jsxs(nn,{children:[a.jsxs(Wf,{onClick:eo,children:[a.jsx(df,{})," Back to Dashboard"]}),a.jsxs(Rv,{children:[a.jsxs("div",{children:[a.jsx(Lv,{children:f?a.jsx(Qo,{value:m.name||"",onChange:yn("name")}):u.name}),a.jsxs(Dv,{children:["Device ID: ",u.id]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[a.jsx(Ov,{status:u.status?"On":"Off",children:u.status?"On":"Off"}),!f&&B!=="ADMIN"?a.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[a.jsxs(pr,{onClick:to,children:[a.jsx(J0,{})," Edit"]}),a.jsxs(pr,{onClick:ai,variant:"danger",disabled:Ze,children:[a.jsx(pf,{})," ",Ze?"Deleting...":"Delete"]})]}):f?a.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[a.jsxs(pr,{onClick:Wn,variant:"success",children:[a.jsx(eg,{})," Save"]}),a.jsxs(pr,{onClick:vn,variant:"cancel",children:[a.jsx(ng,{})," Cancel"]})]}):a.jsx("span",{style:{color:"#666",fontSize:"0.9rem"},children:B==="ADMIN"?"View Only":""})]})]}),Qe&&a.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:a.jsxs("div",{style:{backgroundColor:"white",padding:"2rem",borderRadius:"8px",maxWidth:"400px",width:"90%",textAlign:"center"},children:[a.jsxs("div",{style:{marginBottom:"1rem"},children:[a.jsx(ff,{style:{color:"#f44336",fontSize:"3rem",marginBottom:"1rem"}}),a.jsx("h3",{style:{margin:"0 0 1rem 0",color:"#333"},children:"Delete Device"}),a.jsxs("p",{style:{margin:"0 0 1rem 0",color:"#666"},children:["Are you sure you want to delete ",a.jsx("strong",{children:u==null?void 0:u.name}),"?"]}),a.jsx("p",{style:{margin:"0 0 1rem 0",color:"#666",fontSize:"0.9rem"},children:"This action will:"}),a.jsxs("ul",{style:{margin:"0 0 1rem 0",paddingLeft:"1.5rem",textAlign:"left",color:"#666",fontSize:"0.9rem"},children:[a.jsx("li",{children:"Permanently remove the device from your account"}),a.jsx("li",{children:"Unsubscribe from all MQTT topics for this device"}),a.jsx("li",{children:"Delete all associated automation rules"}),a.jsx("li",{children:"Remove all device logs and history"})]}),a.jsx("p",{style:{margin:"0",color:"#f44336",fontSize:"0.9rem",fontWeight:"bold"},children:"This action cannot be undone!"})]}),a.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[a.jsx(pr,{onClick:Qn,variant:"cancel",disabled:Ze,style:{minWidth:"100px"},children:"Cancel"}),a.jsx(pr,{onClick:Vn,variant:"danger",disabled:Ze,style:{minWidth:"100px"},children:Ze?"Deleting...":"Delete Device"})]})]})}),a.jsx(Iv,{children:a.jsxs($v,{children:[a.jsxs(ti,{children:[a.jsx(Vr,{children:"Device Information"}),a.jsxs(Vf,{children:[a.jsxs(Jt,{children:[a.jsx(Xt,{children:"Type:"}),a.jsx(Zt,{children:f&&B!=="ADMIN"?a.jsx(Qo,{value:m.type||"",onChange:yn("type")}):u.type})]}),a.jsxs(Jt,{children:[a.jsx(Xt,{children:"Location:"}),a.jsx(Zt,{children:f&&B!=="ADMIN"?a.jsx(Qo,{value:m.location||"",onChange:yn("location")}):u.location})]}),a.jsxs(Jt,{children:[a.jsx(Xt,{children:"MQTT Topic:"}),a.jsx(Zt,{children:f&&B!=="ADMIN"?a.jsx(Qo,{value:m.mqttTopic||"",onChange:yn("mqttTopic")}):u.mqttTopic})]}),a.jsxs(Jt,{children:[a.jsx(Xt,{children:"Description:"}),a.jsx(Zt,{children:f&&B!=="ADMIN"?a.jsx(Qo,{value:m.description||"",onChange:yn("description"),as:"textarea",rows:3}):u.description||"No description"})]}),a.jsxs(Jt,{children:[a.jsx(Xt,{children:"Status Control:"}),a.jsx(Zt,{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:B==="ADMIN"?a.jsx("span",{style:{color:u.status?"#4CAF50":"#f44336",fontWeight:"bold"},children:u.status?"ON":"OFF"}):a.jsx(Op,{checked:u.status,onClick:no,"aria-label":`Toggle ${u.name}`})})]})]})]}),a.jsxs(ti,{children:[a.jsx(Vr,{children:"System Information"}),a.jsxs(Vf,{children:[a.jsxs(Jt,{children:[a.jsx(Xt,{children:"Device ID:"}),a.jsx(Zt,{children:u.id})]}),a.jsxs(Jt,{children:[a.jsx(Xt,{children:"Owner:"}),a.jsx(Zt,{children:M?`${M.username} (${M.email})`:"Unknown User"})]}),a.jsxs(Jt,{children:[a.jsx(Xt,{children:"Created:"}),a.jsx(Zt,{children:Sl(u.createdAt)})]}),a.jsxs(Jt,{children:[a.jsx(Xt,{children:"Last Updated:"}),a.jsx(Zt,{children:u.updatedAt&&u.createdAt&&new Date(u.updatedAt).getTime()!==new Date(u.createdAt).getTime()?Sl(u.updatedAt):"Never edited"})]}),a.jsxs(Jt,{children:[a.jsx(Xt,{children:"Connection Status:"}),a.jsx(Zt,{children:a.jsx(Fv,{online:u.status,children:u.status?"Online":"Offline"})})]})]})]}),a.jsxs(Av,{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[a.jsx(Vr,{children:"Recent Activity"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[H&&a.jsxs("span",{style:{fontSize:"0.7rem",color:"#666"},children:["Last updated: ",H]}),a.jsxs(pr,{onClick:oi,style:{fontSize:"0.8rem",padding:"0.5rem"},disabled:b,children:[a.jsx(tg,{style:{animation:b?"spin 1s linear infinite":"none",marginRight:"0.5rem"}}),b?"Refreshing...":"Refresh"]})]})]}),a.jsx("style",{children:`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}),a.jsx("div",{style:{maxHeight:"300px",overflowY:"auto"},children:x.map(A=>a.jsxs(Mv,{type:A.type.toLowerCase(),children:[a.jsx(Uv,{children:Sl(A.createdAt)}),a.jsxs(Bv,{children:[A.type==="WARNING"&&a.jsx(ff,{}),A.message,A.user&&a.jsxs("span",{style:{marginLeft:"0.5rem"},children:["by ",A.user.username]})]})]},A.id))})]}),a.jsxs(Vv,{children:[a.jsx(Vr,{children:"MQTT Terminal & Automation"}),a.jsxs(Qv,{children:[a.jsxs(Yv,{children:[a.jsx(Qf,{active:ye==="terminal",onClick:()=>me("terminal"),children:"Terminal"}),a.jsxs(Qf,{active:ye==="rules",onClick:()=>me("rules"),children:["Automation Rules ",U.length>0&&`(${U.length})`]})]}),a.jsxs(oy,{connected:(u==null?void 0:u.status)||!1,children:["MQTT: ",u!=null&&u.status?"Connected":"Disconnected"]})]}),a.jsx(Kv,{children:ye==="terminal"?a.jsxs("div",{children:[a.jsxs(wl,{children:[a.jsx(Yo,{value:fe,onChange:A=>Pe(A.target.value),placeholder:"Command Name (e.g., turnOn, setColor)",disabled:ce}),a.jsx(Yo,{value:_e,onChange:A=>lt(A.target.value),placeholder:"Payload (JSON or string)",disabled:ce}),a.jsxs(Yf,{onClick:si,disabled:ce,children:[a.jsx(X0,{})," ",ce?"Sending...":"Send Command"]})]}),a.jsxs("div",{style:{marginTop:"1.5rem"},children:[a.jsxs("div",{style:{marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{color:"rgba(255, 255, 255, 0.9)",fontWeight:600},children:"Command History"}),a.jsxs("span",{style:{color:"rgba(255, 255, 255, 0.6)",fontSize:"0.8rem"},children:["Topic: ",u==null?void 0:u.mqttTopic]})]}),a.jsx(ny,{children:Ve.length===0?a.jsx(Kf,{children:"No commands sent yet. Start by sending a command above."}):Ve.map(A=>a.jsxs(ry,{type:A.type,children:[Sl(A.timestamp)," - ",A.content]},A.id))})]})]}):a.jsxs("div",{children:[a.jsx(Vr,{children:"Automation Rules"}),a.jsxs(Gv,{children:[a.jsx(qv,{children:U.length===0?a.jsx(Kf,{children:"No automation rules found."}):U.map(A=>a.jsxs(Jv,{children:[a.jsxs(Xv,{children:[a.jsx(Zv,{children:A.name}),a.jsxs(ey,{children:[A.triggerCondition," → ",A.action]})]}),a.jsx(ty,{onClick:()=>xr(A.id,A.name),children:a.jsx(pf,{})})]},A.id))}),a.jsxs("div",{style:{marginTop:"1.5rem"},children:[a.jsx(Vr,{children:"Create New Rule"}),a.jsx(wl,{children:a.jsx(Yo,{value:W,onChange:A=>w(A.target.value),placeholder:"Rule Name",disabled:de})}),a.jsx(wl,{children:a.jsx(Yo,{value:z,onChange:A=>ue(A.target.value),placeholder:"Trigger Condition (e.g., status == true)",disabled:de})}),a.jsxs(wl,{children:[a.jsx(Yo,{value:se,onChange:A=>pe(A.target.value),placeholder:"Action (e.g., {command: 'turnOn', payload: {}})",disabled:de}),a.jsxs(Yf,{onClick:ro,disabled:de||!W.trim()||!z.trim()||!se.trim(),children:[a.jsx(Z0,{})," ",de?"Creating...":"Create Rule"]})]})]})]})]})})]})]})})]})]})},ly=()=>a.jsx(M0,{children:a.jsxs(R0,{children:[a.jsx(en,{path:"/login",element:a.jsx(Rf,{})}),a.jsx(en,{path:"/register",element:a.jsx(I1,{})}),a.jsx(en,{path:"/dashboard",element:a.jsx(B1,{})}),a.jsx(en,{path:"/faq",element:a.jsx(G1,{})}),a.jsx(en,{path:"/support",element:a.jsx(iv,{})}),a.jsx(en,{path:"/profile",element:a.jsx(vv,{})}),a.jsx(en,{path:"/add-device",element:a.jsx(Nv,{})}),a.jsx(en,{path:"/device/:deviceId",element:a.jsx(iy,{})}),a.jsx(en,{path:"/",element:a.jsx(Rf,{})})]})});Um.createRoot(document.getElementById("root")).render(a.jsx(gt.StrictMode,{children:a.jsx(ly,{})}));
