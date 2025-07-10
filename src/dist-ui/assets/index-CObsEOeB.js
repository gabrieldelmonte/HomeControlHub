function Cm(o,l){for(var a=0;a<l.length;a++){const c=l[a];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in o)){const h=Object.getOwnPropertyDescriptor(c,f);h&&Object.defineProperty(o,f,h.get?h:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=a(f);fetch(f.href,h)}})();function Mf(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ca={exports:{}},So={},da={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function Em(){if(Ud)return fe;Ud=1;var o=Symbol.for("react.element"),l=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),P=Symbol.iterator;function T(g){return g===null||typeof g!="object"?null:(g=P&&g[P]||g["@@iterator"],typeof g=="function"?g:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,L={};function O(g,E,Z){this.props=g,this.context=E,this.refs=L,this.updater=Z||D}O.prototype.isReactComponent={},O.prototype.setState=function(g,E){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,E,"setState")},O.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Q(){}Q.prototype=O.prototype;function A(g,E,Z){this.props=g,this.context=E,this.refs=L,this.updater=Z||D}var $=A.prototype=new Q;$.constructor=A,M($,O.prototype),$.isPureReactComponent=!0;var W=Array.isArray,le=Object.prototype.hasOwnProperty,ie={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function V(g,E,Z){var te,ne={},se=null,xe=null;if(E!=null)for(te in E.ref!==void 0&&(xe=E.ref),E.key!==void 0&&(se=""+E.key),E)le.call(E,te)&&!X.hasOwnProperty(te)&&(ne[te]=E[te]);var me=arguments.length-2;if(me===1)ne.children=Z;else if(1<me){for(var ve=Array(me),Qe=0;Qe<me;Qe++)ve[Qe]=arguments[Qe+2];ne.children=ve}if(g&&g.defaultProps)for(te in me=g.defaultProps,me)ne[te]===void 0&&(ne[te]=me[te]);return{$$typeof:o,type:g,key:se,ref:xe,props:ne,_owner:ie.current}}function ee(g,E){return{$$typeof:o,type:g.type,key:E,ref:g.ref,props:g.props,_owner:g._owner}}function pe(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function ce(g){var E={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Z){return E[Z]})}var he=/\/+/g;function Se(g,E){return typeof g=="object"&&g!==null&&g.key!=null?ce(""+g.key):E.toString(36)}function ze(g,E,Z,te,ne){var se=typeof g;(se==="undefined"||se==="boolean")&&(g=null);var xe=!1;if(g===null)xe=!0;else switch(se){case"string":case"number":xe=!0;break;case"object":switch(g.$$typeof){case o:case l:xe=!0}}if(xe)return xe=g,ne=ne(xe),g=te===""?"."+Se(xe,0):te,W(ne)?(Z="",g!=null&&(Z=g.replace(he,"$&/")+"/"),ze(ne,E,Z,"",function(Qe){return Qe})):ne!=null&&(pe(ne)&&(ne=ee(ne,Z+(!ne.key||xe&&xe.key===ne.key?"":(""+ne.key).replace(he,"$&/")+"/")+g)),E.push(ne)),1;if(xe=0,te=te===""?".":te+":",W(g))for(var me=0;me<g.length;me++){se=g[me];var ve=te+Se(se,me);xe+=ze(se,E,Z,ve,ne)}else if(ve=T(g),typeof ve=="function")for(g=ve.call(g),me=0;!(se=g.next()).done;)se=se.value,ve=te+Se(se,me++),xe+=ze(se,E,Z,ve,ne);else if(se==="object")throw E=String(g),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return xe}function tt(g,E,Z){if(g==null)return g;var te=[],ne=0;return ze(g,te,"","",function(se){return E.call(Z,se,ne++)}),te}function Ue(g){if(g._status===-1){var E=g._result;E=E(),E.then(function(Z){(g._status===0||g._status===-1)&&(g._status=1,g._result=Z)},function(Z){(g._status===0||g._status===-1)&&(g._status=2,g._result=Z)}),g._status===-1&&(g._status=0,g._result=E)}if(g._status===1)return g._result.default;throw g._result}var je={current:null},U={transition:null},q={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:U,ReactCurrentOwner:ie};function B(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:tt,forEach:function(g,E,Z){tt(g,function(){E.apply(this,arguments)},Z)},count:function(g){var E=0;return tt(g,function(){E++}),E},toArray:function(g){return tt(g,function(E){return E})||[]},only:function(g){if(!pe(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},fe.Component=O,fe.Fragment=a,fe.Profiler=f,fe.PureComponent=A,fe.StrictMode=c,fe.Suspense=w,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,fe.act=B,fe.cloneElement=function(g,E,Z){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var te=M({},g.props),ne=g.key,se=g.ref,xe=g._owner;if(E!=null){if(E.ref!==void 0&&(se=E.ref,xe=ie.current),E.key!==void 0&&(ne=""+E.key),g.type&&g.type.defaultProps)var me=g.type.defaultProps;for(ve in E)le.call(E,ve)&&!X.hasOwnProperty(ve)&&(te[ve]=E[ve]===void 0&&me!==void 0?me[ve]:E[ve])}var ve=arguments.length-2;if(ve===1)te.children=Z;else if(1<ve){me=Array(ve);for(var Qe=0;Qe<ve;Qe++)me[Qe]=arguments[Qe+2];te.children=me}return{$$typeof:o,type:g.type,key:ne,ref:se,props:te,_owner:xe}},fe.createContext=function(g){return g={$$typeof:m,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:h,_context:g},g.Consumer=g},fe.createElement=V,fe.createFactory=function(g){var E=V.bind(null,g);return E.type=g,E},fe.createRef=function(){return{current:null}},fe.forwardRef=function(g){return{$$typeof:x,render:g}},fe.isValidElement=pe,fe.lazy=function(g){return{$$typeof:N,_payload:{_status:-1,_result:g},_init:Ue}},fe.memo=function(g,E){return{$$typeof:_,type:g,compare:E===void 0?null:E}},fe.startTransition=function(g){var E=U.transition;U.transition={};try{g()}finally{U.transition=E}},fe.unstable_act=B,fe.useCallback=function(g,E){return je.current.useCallback(g,E)},fe.useContext=function(g){return je.current.useContext(g)},fe.useDebugValue=function(){},fe.useDeferredValue=function(g){return je.current.useDeferredValue(g)},fe.useEffect=function(g,E){return je.current.useEffect(g,E)},fe.useId=function(){return je.current.useId()},fe.useImperativeHandle=function(g,E,Z){return je.current.useImperativeHandle(g,E,Z)},fe.useInsertionEffect=function(g,E){return je.current.useInsertionEffect(g,E)},fe.useLayoutEffect=function(g,E){return je.current.useLayoutEffect(g,E)},fe.useMemo=function(g,E){return je.current.useMemo(g,E)},fe.useReducer=function(g,E,Z){return je.current.useReducer(g,E,Z)},fe.useRef=function(g){return je.current.useRef(g)},fe.useState=function(g){return je.current.useState(g)},fe.useSyncExternalStore=function(g,E,Z){return je.current.useSyncExternalStore(g,E,Z)},fe.useTransition=function(){return je.current.useTransition()},fe.version="18.3.1",fe}var Bd;function Aa(){return Bd||(Bd=1,da.exports=Em()),da.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Pm(){if(Hd)return So;Hd=1;var o=Aa(),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(x,w,_){var N,P={},T=null,D=null;_!==void 0&&(T=""+_),w.key!==void 0&&(T=""+w.key),w.ref!==void 0&&(D=w.ref);for(N in w)c.call(w,N)&&!h.hasOwnProperty(N)&&(P[N]=w[N]);if(x&&x.defaultProps)for(N in w=x.defaultProps,w)P[N]===void 0&&(P[N]=w[N]);return{$$typeof:l,type:x,key:T,ref:D,props:P,_owner:f.current}}return So.Fragment=a,So.jsx=m,So.jsxs=m,So}var Wd;function _m(){return Wd||(Wd=1,ca.exports=Pm()),ca.exports}var u=_m(),z=Aa();const ut=Mf(z),zm=Cm({__proto__:null,default:ut},[z]);var Vi={},fa={exports:{}},st={},pa={exports:{}},ha={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function Nm(){return Vd||(Vd=1,function(o){function l(U,q){var B=U.length;U.push(q);e:for(;0<B;){var g=B-1>>>1,E=U[g];if(0<f(E,q))U[g]=q,U[B]=E,B=g;else break e}}function a(U){return U.length===0?null:U[0]}function c(U){if(U.length===0)return null;var q=U[0],B=U.pop();if(B!==q){U[0]=B;e:for(var g=0,E=U.length,Z=E>>>1;g<Z;){var te=2*(g+1)-1,ne=U[te],se=te+1,xe=U[se];if(0>f(ne,B))se<E&&0>f(xe,ne)?(U[g]=xe,U[se]=B,g=se):(U[g]=ne,U[te]=B,g=te);else if(se<E&&0>f(xe,B))U[g]=xe,U[se]=B,g=se;else break e}}return q}function f(U,q){var B=U.sortIndex-q.sortIndex;return B!==0?B:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var m=Date,x=m.now();o.unstable_now=function(){return m.now()-x}}var w=[],_=[],N=1,P=null,T=3,D=!1,M=!1,L=!1,O=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(U){for(var q=a(_);q!==null;){if(q.callback===null)c(_);else if(q.startTime<=U)c(_),q.sortIndex=q.expirationTime,l(w,q);else break;q=a(_)}}function W(U){if(L=!1,$(U),!M)if(a(w)!==null)M=!0,Ue(le);else{var q=a(_);q!==null&&je(W,q.startTime-U)}}function le(U,q){M=!1,L&&(L=!1,Q(V),V=-1),D=!0;var B=T;try{for($(q),P=a(w);P!==null&&(!(P.expirationTime>q)||U&&!ce());){var g=P.callback;if(typeof g=="function"){P.callback=null,T=P.priorityLevel;var E=g(P.expirationTime<=q);q=o.unstable_now(),typeof E=="function"?P.callback=E:P===a(w)&&c(w),$(q)}else c(w);P=a(w)}if(P!==null)var Z=!0;else{var te=a(_);te!==null&&je(W,te.startTime-q),Z=!1}return Z}finally{P=null,T=B,D=!1}}var ie=!1,X=null,V=-1,ee=5,pe=-1;function ce(){return!(o.unstable_now()-pe<ee)}function he(){if(X!==null){var U=o.unstable_now();pe=U;var q=!0;try{q=X(!0,U)}finally{q?Se():(ie=!1,X=null)}}else ie=!1}var Se;if(typeof A=="function")Se=function(){A(he)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,tt=ze.port2;ze.port1.onmessage=he,Se=function(){tt.postMessage(null)}}else Se=function(){O(he,0)};function Ue(U){X=U,ie||(ie=!0,Se())}function je(U,q){V=O(function(){U(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_continueExecution=function(){M||D||(M=!0,Ue(le))},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return T},o.unstable_getFirstCallbackNode=function(){return a(w)},o.unstable_next=function(U){switch(T){case 1:case 2:case 3:var q=3;break;default:q=T}var B=T;T=q;try{return U()}finally{T=B}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var B=T;T=U;try{return q()}finally{T=B}},o.unstable_scheduleCallback=function(U,q,B){var g=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?g+B:g):B=g,U){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=B+E,U={id:N++,callback:q,priorityLevel:U,startTime:B,expirationTime:E,sortIndex:-1},B>g?(U.sortIndex=B,l(_,U),a(w)===null&&U===a(_)&&(L?(Q(V),V=-1):L=!0,je(W,B-g))):(U.sortIndex=E,l(w,U),M||D||(M=!0,Ue(le))),U},o.unstable_shouldYield=ce,o.unstable_wrapCallback=function(U){var q=T;return function(){var B=T;T=q;try{return U.apply(this,arguments)}finally{T=B}}}}(ha)),ha}var Qd;function Tm(){return Qd||(Qd=1,pa.exports=Nm()),pa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Lm(){if(Yd)return st;Yd=1;var o=Aa(),l=Tm();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},P={};function T(e){return w.call(P,e)?!0:w.call(N,e)?!1:_.test(e)?P[e]=!0:(N[e]=!0,!1)}function D(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,n,r){if(t===null||typeof t>"u"||D(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,n,r,i,s,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=d}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];O[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function A(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,A);O[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,A);O[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,A);O[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function $(e,t,n,r){var i=O.hasOwnProperty(t)?O[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,n,i,r)&&(n=null),r||i===null?T(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var W=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),ie=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),pe=Symbol.for("react.provider"),ce=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),U=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,g;function E(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var Z=!1;function te(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var r=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){r=C}e.call(t.prototype)}else{try{throw Error()}catch(C){r=C}e()}}catch(C){if(C&&r&&typeof C.stack=="string"){for(var i=C.stack.split(`
`),s=r.stack.split(`
`),d=i.length-1,p=s.length-1;1<=d&&0<=p&&i[d]!==s[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==s[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==s[p]){var v=`
`+i[d].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=d&&0<=p);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?E(e):""}function ne(e){switch(e.tag){case 5:return E(e.type);case 16:return E("Lazy");case 13:return E("Suspense");case 19:return E("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case ie:return"Portal";case ee:return"Profiler";case V:return"StrictMode";case Se:return"Suspense";case ze:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ce:return(e.displayName||"Context")+".Consumer";case pe:return(e._context.displayName||"Context")+".Provider";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tt:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qe(e){var t=ve(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){r=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){e._valueTracker||(e._valueTracker=Qe(e))}function Nt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ve(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ka(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=me(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ga(e,t){t=t.checked,t!=null&&$(e,"checked",t,!1)}function yl(e,t){Ga(e,t);var n=me(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&xl(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xl(e,t,n){(t!=="number"||bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Or=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ja(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(Or(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:me(n)}}function Xa(e,t){var n=me(t.value),r=me(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Za(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?eu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fo,tu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zp=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){zp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function nu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function ru(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Np=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(Np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function El(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,nr=null,rr=null;function ou(e){if(e=io(e)){if(typeof Pl!="function")throw Error(a(280));var t=e.stateNode;t&&(t=li(t),Pl(e.stateNode,e.type,t))}}function iu(e){nr?rr?rr.push(e):rr=[e]:nr=e}function lu(){if(nr){var e=nr,t=rr;if(rr=nr=null,ou(e),t)for(e=0;e<t.length;e++)ou(t[e])}}function su(e,t){return e(t)}function au(){}var _l=!1;function uu(e,t,n){if(_l)return e(t,n);_l=!0;try{return su(e,t,n)}finally{_l=!1,(nr!==null||rr!==null)&&(au(),lu())}}function $r(e,t){var n=e.stateNode;if(n===null)return null;var r=li(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var zl=!1;if(x)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){zl=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{zl=!1}function Tp(e,t,n,r,i,s,d,p,v){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(R){this.onError(R)}}var Mr=!1,$o=null,Ao=!1,Nl=null,Lp={onError:function(e){Mr=!0,$o=e}};function Ip(e,t,n,r,i,s,d,p,v){Mr=!1,$o=null,Tp.apply(Lp,arguments)}function Rp(e,t,n,r,i,s,d,p,v){if(Ip.apply(this,arguments),Mr){if(Mr){var C=$o;Mr=!1,$o=null}else throw Error(a(198));Ao||(Ao=!0,Nl=C)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function du(e){if(Ln(e)!==e)throw Error(a(188))}function Dp(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return du(i),e;if(s===r)return du(i),t;s=s.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=s;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,r=s;break}if(p===r){d=!0,r=i,n=s;break}p=p.sibling}if(!d){for(p=s.child;p;){if(p===n){d=!0,n=s,r=i;break}if(p===r){d=!0,r=s,n=i;break}p=p.sibling}if(!d)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function fu(e){return e=Dp(e),e!==null?pu(e):null}function pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pu(e);if(t!==null)return t;e=e.sibling}return null}var hu=l.unstable_scheduleCallback,mu=l.unstable_cancelCallback,Op=l.unstable_shouldYield,bp=l.unstable_requestPaint,De=l.unstable_now,Fp=l.unstable_getCurrentPriorityLevel,Tl=l.unstable_ImmediatePriority,gu=l.unstable_UserBlockingPriority,Mo=l.unstable_NormalPriority,$p=l.unstable_LowPriority,vu=l.unstable_IdlePriority,Uo=null,$t=null;function Ap(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Uo,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Bp,Mp=Math.log,Up=Math.LN2;function Bp(e){return e>>>=0,e===0?32:31-(Mp(e)/Up|0)|0}var Bo=64,Ho=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~i;p!==0?r=Ur(p):(s&=d,s!==0&&(r=Ur(s)))}else d=n&~i,d!==0?r=Ur(d):s!==0&&(r=Ur(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Hp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-Tt(s),p=1<<d,v=i[d];v===-1?((p&n)===0||(p&r)!==0)&&(i[d]=Hp(p,t)):v<=t&&(e.expiredLanes|=p),s&=~p}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=Bo;return Bo<<=1,(Bo&4194240)===0&&(Bo=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Rl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ke=0;function xu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wu,Dl,Su,ku,ju,Ol=!1,Vo=[],sn=null,an=null,un=null,Hr=new Map,Wr=new Map,cn=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cu(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Vr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=io(t),t!==null&&Dl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yp(e,t,n,r,i){switch(t){case"focusin":return sn=Vr(sn,e,t,n,r,i),!0;case"dragenter":return an=Vr(an,e,t,n,r,i),!0;case"mouseover":return un=Vr(un,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hr.set(s,Vr(Hr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wr.set(s,Vr(Wr.get(s)||null,e,t,n,r,i)),!0}return!1}function Eu(e){var t=In(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=cu(n),t!==null){e.blockedOn=t,ju(e.priority,function(){Su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=io(n),t!==null&&Dl(t),e.blockedOn=n,!1;t.shift()}return!0}function Pu(e,t,n){Qo(e)&&n.delete(t)}function Kp(){Ol=!1,sn!==null&&Qo(sn)&&(sn=null),an!==null&&Qo(an)&&(an=null),un!==null&&Qo(un)&&(un=null),Hr.forEach(Pu),Wr.forEach(Pu)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ol||(Ol=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Kp)))}function Yr(e){function t(i){return Qr(i,e)}if(0<Vo.length){Qr(Vo[0],e);for(var n=1;n<Vo.length;n++){var r=Vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Qr(sn,e),an!==null&&Qr(an,e),un!==null&&Qr(un,e),Hr.forEach(t),Wr.forEach(t),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)Eu(n),n.blockedOn===null&&cn.shift()}var or=W.ReactCurrentBatchConfig,Yo=!0;function Gp(e,t,n,r){var i=ke,s=or.transition;or.transition=null;try{ke=1,bl(e,t,n,r)}finally{ke=i,or.transition=s}}function qp(e,t,n,r){var i=ke,s=or.transition;or.transition=null;try{ke=4,bl(e,t,n,r)}finally{ke=i,or.transition=s}}function bl(e,t,n,r){if(Yo){var i=Fl(e,t,n,r);if(i===null)es(e,t,r,Ko,n),Cu(e,r);else if(Yp(i,e,t,n,r))r.stopPropagation();else if(Cu(e,r),t&4&&-1<Qp.indexOf(e)){for(;i!==null;){var s=io(i);if(s!==null&&wu(s),s=Fl(e,t,n,r),s===null&&es(e,t,r,Ko,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else es(e,t,r,null,n)}}var Ko=null;function Fl(e,t,n,r){if(Ko=null,e=El(r),e=In(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ko=e,null}function _u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fp()){case Tl:return 1;case gu:return 4;case Mo:case $p:return 16;case vu:return 536870912;default:return 16}default:return 16}}var dn=null,$l=null,Go=null;function zu(){if(Go)return Go;var e,t=$l,n=t.length,r,i="value"in dn?dn.value:dn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===i[s-r];r++);return Go=i.slice(e,1<r?1-r:void 0)}function qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Nu(){return!1}function ct(e){function t(n,r,i,s,d){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:Nu,this.isPropagationStopped=Nu,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=ct(ir),Kr=B({},ir,{view:0,detail:0}),Jp=ct(Kr),Ml,Ul,Gr,Xo=B({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(Ml=e.screenX-Gr.screenX,Ul=e.screenY-Gr.screenY):Ul=Ml=0,Gr=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Ul}}),Tu=ct(Xo),Xp=B({},Xo,{dataTransfer:0}),Zp=ct(Xp),eh=B({},Kr,{relatedTarget:0}),Bl=ct(eh),th=B({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=ct(th),rh=B({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oh=ct(rh),ih=B({},ir,{data:0}),Lu=ct(ih),lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ah[e])?!!t[e]:!1}function Hl(){return uh}var ch=B({},Kr,{key:function(e){if(e.key){var t=lh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dh=ct(ch),fh=B({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=ct(fh),ph=B({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),hh=ct(ph),mh=B({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),gh=ct(mh),vh=B({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=ct(vh),xh=[9,13,27,32],Wl=x&&"CompositionEvent"in window,qr=null;x&&"documentMode"in document&&(qr=document.documentMode);var wh=x&&"TextEvent"in window&&!qr,Ru=x&&(!Wl||qr&&8<qr&&11>=qr),Du=" ",Ou=!1;function bu(e,t){switch(e){case"keyup":return xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function Sh(e,t){switch(e){case"compositionend":return Fu(t);case"keypress":return t.which!==32?null:(Ou=!0,Du);case"textInput":return e=t.data,e===Du&&Ou?null:e;default:return null}}function kh(e,t){if(lr)return e==="compositionend"||!Wl&&bu(e,t)?(e=zu(),Go=$l=dn=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ru&&t.locale!=="ko"?null:t.data;default:return null}}var jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jh[e.type]:t==="textarea"}function Au(e,t,n,r){iu(r),t=ri(t,"onChange"),0<t.length&&(n=new Al("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jr=null,Xr=null;function Ch(e){rc(e,0)}function Zo(e){var t=dr(e);if(Nt(t))return e}function Eh(e,t){if(e==="change")return t}var Mu=!1;if(x){var Vl;if(x){var Ql="oninput"in document;if(!Ql){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Ql=typeof Uu.oninput=="function"}Vl=Ql}else Vl=!1;Mu=Vl&&(!document.documentMode||9<document.documentMode)}function Bu(){Jr&&(Jr.detachEvent("onpropertychange",Hu),Xr=Jr=null)}function Hu(e){if(e.propertyName==="value"&&Zo(Xr)){var t=[];Au(t,Xr,e,El(e)),uu(Ch,t)}}function Ph(e,t,n){e==="focusin"?(Bu(),Jr=t,Xr=n,Jr.attachEvent("onpropertychange",Hu)):e==="focusout"&&Bu()}function _h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(Xr)}function zh(e,t){if(e==="click")return Zo(t)}function Nh(e,t){if(e==="input"||e==="change")return Zo(t)}function Th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Th;function Zr(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!w.call(t,i)||!Lt(e[i],t[i]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vu(e,t){var n=Wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wu(n)}}function Qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yu(){for(var e=window,t=bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bo(e.document)}return t}function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lh(e){var t=Yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qu(n.ownerDocument.documentElement,n)){if(r!==null&&Yl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Vu(n,s);var d=Vu(n,r);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ih=x&&"documentMode"in document&&11>=document.documentMode,sr=null,Kl=null,eo=null,Gl=!1;function Ku(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||sr==null||sr!==bo(r)||(r=sr,"selectionStart"in r&&Yl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&Zr(eo,r)||(eo=r,r=ri(Kl,"onSelect"),0<r.length&&(t=new Al("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},ql={},Gu={};x&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function ti(e){if(ql[e])return ql[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gu)return ql[e]=t[n];return e}var qu=ti("animationend"),Ju=ti("animationiteration"),Xu=ti("animationstart"),Zu=ti("transitionend"),ec=new Map,tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){ec.set(e,t),h(t,[e])}for(var Jl=0;Jl<tc.length;Jl++){var Xl=tc[Jl],Rh=Xl.toLowerCase(),Dh=Xl[0].toUpperCase()+Xl.slice(1);fn(Rh,"on"+Dh)}fn(qu,"onAnimationEnd"),fn(Ju,"onAnimationIteration"),fn(Xu,"onAnimationStart"),fn("dblclick","onDoubleClick"),fn("focusin","onFocus"),fn("focusout","onBlur"),fn(Zu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oh=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rp(r,t,void 0,e),e.currentTarget=null}function rc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var d=r.length-1;0<=d;d--){var p=r[d],v=p.instance,C=p.currentTarget;if(p=p.listener,v!==s&&i.isPropagationStopped())break e;nc(i,p,C),s=v}else for(d=0;d<r.length;d++){if(p=r[d],v=p.instance,C=p.currentTarget,p=p.listener,v!==s&&i.isPropagationStopped())break e;nc(i,p,C),s=v}}}if(Ao)throw e=Nl,Ao=!1,Nl=null,e}function Ee(e,t){var n=t[ls];n===void 0&&(n=t[ls]=new Set);var r=e+"__bubble";n.has(r)||(oc(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),oc(n,e,r,t)}var ni="_reactListening"+Math.random().toString(36).slice(2);function no(e){if(!e[ni]){e[ni]=!0,c.forEach(function(n){n!=="selectionchange"&&(Oh.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ni]||(t[ni]=!0,Zl("selectionchange",!1,t))}}function oc(e,t,n,r){switch(_u(t)){case 1:var i=Gp;break;case 4:i=qp;break;default:i=bl}n=i.bind(null,t,n,e),i=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function es(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var p=r.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=r.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===i||v.nodeType===8&&v.parentNode===i))return;d=d.return}for(;p!==null;){if(d=In(p),d===null)return;if(v=d.tag,v===5||v===6){r=s=d;continue e}p=p.parentNode}}r=r.return}uu(function(){var C=s,R=El(n),b=[];e:{var I=ec.get(e);if(I!==void 0){var H=Al,K=e;switch(e){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":H=dh;break;case"focusin":K="focus",H=Bl;break;case"focusout":K="blur",H=Bl;break;case"beforeblur":case"afterblur":H=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=hh;break;case qu:case Ju:case Xu:H=nh;break;case Zu:H=gh;break;case"scroll":H=Jp;break;case"wheel":H=yh;break;case"copy":case"cut":case"paste":H=oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Iu}var G=(t&4)!==0,Oe=!G&&e==="scroll",S=G?I!==null?I+"Capture":null:I;G=[];for(var y=C,k;y!==null;){k=y;var F=k.stateNode;if(k.tag===5&&F!==null&&(k=F,S!==null&&(F=$r(y,S),F!=null&&G.push(ro(y,F,k)))),Oe)break;y=y.return}0<G.length&&(I=new H(I,K,null,n,R),b.push({event:I,listeners:G}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",I&&n!==Cl&&(K=n.relatedTarget||n.fromElement)&&(In(K)||K[qt]))break e;if((H||I)&&(I=R.window===R?R:(I=R.ownerDocument)?I.defaultView||I.parentWindow:window,H?(K=n.relatedTarget||n.toElement,H=C,K=K?In(K):null,K!==null&&(Oe=Ln(K),K!==Oe||K.tag!==5&&K.tag!==6)&&(K=null)):(H=null,K=C),H!==K)){if(G=Tu,F="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(G=Iu,F="onPointerLeave",S="onPointerEnter",y="pointer"),Oe=H==null?I:dr(H),k=K==null?I:dr(K),I=new G(F,y+"leave",H,n,R),I.target=Oe,I.relatedTarget=k,F=null,In(R)===C&&(G=new G(S,y+"enter",K,n,R),G.target=k,G.relatedTarget=Oe,F=G),Oe=F,H&&K)t:{for(G=H,S=K,y=0,k=G;k;k=ur(k))y++;for(k=0,F=S;F;F=ur(F))k++;for(;0<y-k;)G=ur(G),y--;for(;0<k-y;)S=ur(S),k--;for(;y--;){if(G===S||S!==null&&G===S.alternate)break t;G=ur(G),S=ur(S)}G=null}else G=null;H!==null&&ic(b,I,H,G,!1),K!==null&&Oe!==null&&ic(b,Oe,K,G,!0)}}e:{if(I=C?dr(C):window,H=I.nodeName&&I.nodeName.toLowerCase(),H==="select"||H==="input"&&I.type==="file")var J=Eh;else if($u(I))if(Mu)J=Nh;else{J=_h;var re=Ph}else(H=I.nodeName)&&H.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(J=zh);if(J&&(J=J(e,C))){Au(b,J,n,R);break e}re&&re(e,I,C),e==="focusout"&&(re=I._wrapperState)&&re.controlled&&I.type==="number"&&xl(I,"number",I.value)}switch(re=C?dr(C):window,e){case"focusin":($u(re)||re.contentEditable==="true")&&(sr=re,Kl=C,eo=null);break;case"focusout":eo=Kl=sr=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,Ku(b,n,R);break;case"selectionchange":if(Ih)break;case"keydown":case"keyup":Ku(b,n,R)}var oe;if(Wl)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else lr?bu(e,n)&&(ue="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ue="onCompositionStart");ue&&(Ru&&n.locale!=="ko"&&(lr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&lr&&(oe=zu()):(dn=R,$l="value"in dn?dn.value:dn.textContent,lr=!0)),re=ri(C,ue),0<re.length&&(ue=new Lu(ue,e,null,n,R),b.push({event:ue,listeners:re}),oe?ue.data=oe:(oe=Fu(n),oe!==null&&(ue.data=oe)))),(oe=wh?Sh(e,n):kh(e,n))&&(C=ri(C,"onBeforeInput"),0<C.length&&(R=new Lu("onBeforeInput","beforeinput",null,n,R),b.push({event:R,listeners:C}),R.data=oe))}rc(b,t)})}function ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$r(e,n),s!=null&&r.unshift(ro(e,s,i)),s=$r(e,t),s!=null&&r.push(ro(e,s,i))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ic(e,t,n,r,i){for(var s=t._reactName,d=[];n!==null&&n!==r;){var p=n,v=p.alternate,C=p.stateNode;if(v!==null&&v===r)break;p.tag===5&&C!==null&&(p=C,i?(v=$r(n,s),v!=null&&d.unshift(ro(n,v,p))):i||(v=$r(n,s),v!=null&&d.push(ro(n,v,p)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var bh=/\r\n?/g,Fh=/\u0000|\uFFFD/g;function lc(e){return(typeof e=="string"?e:""+e).replace(bh,`
`).replace(Fh,"")}function oi(e,t,n){if(t=lc(t),lc(e)!==t&&n)throw Error(a(425))}function ii(){}var ts=null,ns=null;function rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,sc=typeof Promise=="function"?Promise:void 0,Ah=typeof queueMicrotask=="function"?queueMicrotask:typeof sc<"u"?function(e){return sc.resolve(null).then(e).catch(Mh)}:os;function Mh(e){setTimeout(function(){throw e})}function is(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yr(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ac(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),At="__reactFiber$"+cr,oo="__reactProps$"+cr,qt="__reactContainer$"+cr,ls="__reactEvents$"+cr,Uh="__reactListeners$"+cr,Bh="__reactHandles$"+cr;function In(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ac(e);e!==null;){if(n=e[At])return n;e=ac(e)}return t}e=n,n=e.parentNode}return null}function io(e){return e=e[At]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function li(e){return e[oo]||null}var ss=[],fr=-1;function hn(e){return{current:e}}function Pe(e){0>fr||(e.current=ss[fr],ss[fr]=null,fr--)}function Ce(e,t){fr++,ss[fr]=e.current,e.current=t}var mn={},Ge=hn(mn),nt=hn(!1),Rn=mn;function pr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function si(){Pe(nt),Pe(Ge)}function uc(e,t,n){if(Ge.current!==mn)throw Error(a(168));Ce(Ge,t),Ce(nt,n)}function cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(a(108,xe(e)||"Unknown",i));return B({},n,r)}function ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Rn=Ge.current,Ce(Ge,e),Ce(nt,nt.current),!0}function dc(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=cc(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,Pe(nt),Pe(Ge),Ce(Ge,e)):Pe(nt),Ce(nt,n)}var Jt=null,ui=!1,as=!1;function fc(e){Jt===null?Jt=[e]:Jt.push(e)}function Hh(e){ui=!0,fc(e)}function gn(){if(!as&&Jt!==null){as=!0;var e=0,t=ke;try{var n=Jt;for(ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,ui=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(e+1)),hu(Tl,gn),i}finally{ke=t,as=!1}}return null}var hr=[],mr=0,ci=null,di=0,mt=[],gt=0,Dn=null,Xt=1,Zt="";function On(e,t){hr[mr++]=di,hr[mr++]=ci,ci=e,di=t}function pc(e,t,n){mt[gt++]=Xt,mt[gt++]=Zt,mt[gt++]=Dn,Dn=e;var r=Xt;e=Zt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var s=32-Tt(t)+i;if(30<s){var d=i-i%5;s=(r&(1<<d)-1).toString(32),r>>=d,i-=d,Xt=1<<32-Tt(t)+i|n<<i|r,Zt=s+e}else Xt=1<<s|n<<i|r,Zt=e}function us(e){e.return!==null&&(On(e,1),pc(e,1,0))}function cs(e){for(;e===ci;)ci=hr[--mr],hr[mr]=null,di=hr[--mr],hr[mr]=null;for(;e===Dn;)Dn=mt[--gt],mt[gt]=null,Zt=mt[--gt],mt[gt]=null,Xt=mt[--gt],mt[gt]=null}var dt=null,ft=null,Ne=!1,It=null;function hc(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ft=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:Xt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ft=null,!0):!1;default:return!1}}function ds(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fs(e){if(Ne){var t=ft;if(t){var n=t;if(!mc(e,t)){if(ds(e))throw Error(a(418));t=pn(n.nextSibling);var r=dt;t&&mc(e,t)?hc(r,n):(e.flags=e.flags&-4097|2,Ne=!1,dt=e)}}else{if(ds(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ne=!1,dt=e}}}function gc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function fi(e){if(e!==dt)return!1;if(!Ne)return gc(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rs(e.type,e.memoizedProps)),t&&(t=ft)){if(ds(e))throw vc(),Error(a(418));for(;t;)hc(e,t),t=pn(t.nextSibling)}if(gc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=dt?pn(e.stateNode.nextSibling):null;return!0}function vc(){for(var e=ft;e;)e=pn(e.nextSibling)}function gr(){ft=dt=null,Ne=!1}function ps(e){It===null?It=[e]:It.push(e)}var Wh=W.ReactCurrentBatchConfig;function lo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(d){var p=i.refs;d===null?delete p[s]:p[s]=d},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yc(e){var t=e._init;return t(e._payload)}function xc(e){function t(S,y){if(e){var k=S.deletions;k===null?(S.deletions=[y],S.flags|=16):k.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function r(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function i(S,y){return S=Cn(S,y),S.index=0,S.sibling=null,S}function s(S,y,k){return S.index=k,e?(k=S.alternate,k!==null?(k=k.index,k<y?(S.flags|=2,y):k):(S.flags|=2,y)):(S.flags|=1048576,y)}function d(S){return e&&S.alternate===null&&(S.flags|=2),S}function p(S,y,k,F){return y===null||y.tag!==6?(y=oa(k,S.mode,F),y.return=S,y):(y=i(y,k),y.return=S,y)}function v(S,y,k,F){var J=k.type;return J===X?R(S,y,k.props.children,F,k.key):y!==null&&(y.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ue&&yc(J)===y.type)?(F=i(y,k.props),F.ref=lo(S,y,k),F.return=S,F):(F=Fi(k.type,k.key,k.props,null,S.mode,F),F.ref=lo(S,y,k),F.return=S,F)}function C(S,y,k,F){return y===null||y.tag!==4||y.stateNode.containerInfo!==k.containerInfo||y.stateNode.implementation!==k.implementation?(y=ia(k,S.mode,F),y.return=S,y):(y=i(y,k.children||[]),y.return=S,y)}function R(S,y,k,F,J){return y===null||y.tag!==7?(y=Hn(k,S.mode,F,J),y.return=S,y):(y=i(y,k),y.return=S,y)}function b(S,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return y=oa(""+y,S.mode,k),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case le:return k=Fi(y.type,y.key,y.props,null,S.mode,k),k.ref=lo(S,null,y),k.return=S,k;case ie:return y=ia(y,S.mode,k),y.return=S,y;case Ue:var F=y._init;return b(S,F(y._payload),k)}if(Or(y)||q(y))return y=Hn(y,S.mode,k,null),y.return=S,y;pi(S,y)}return null}function I(S,y,k,F){var J=y!==null?y.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return J!==null?null:p(S,y,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case le:return k.key===J?v(S,y,k,F):null;case ie:return k.key===J?C(S,y,k,F):null;case Ue:return J=k._init,I(S,y,J(k._payload),F)}if(Or(k)||q(k))return J!==null?null:R(S,y,k,F,null);pi(S,k)}return null}function H(S,y,k,F,J){if(typeof F=="string"&&F!==""||typeof F=="number")return S=S.get(k)||null,p(y,S,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case le:return S=S.get(F.key===null?k:F.key)||null,v(y,S,F,J);case ie:return S=S.get(F.key===null?k:F.key)||null,C(y,S,F,J);case Ue:var re=F._init;return H(S,y,k,re(F._payload),J)}if(Or(F)||q(F))return S=S.get(k)||null,R(y,S,F,J,null);pi(y,F)}return null}function K(S,y,k,F){for(var J=null,re=null,oe=y,ue=y=0,We=null;oe!==null&&ue<k.length;ue++){oe.index>ue?(We=oe,oe=null):We=oe.sibling;var ye=I(S,oe,k[ue],F);if(ye===null){oe===null&&(oe=We);break}e&&oe&&ye.alternate===null&&t(S,oe),y=s(ye,y,ue),re===null?J=ye:re.sibling=ye,re=ye,oe=We}if(ue===k.length)return n(S,oe),Ne&&On(S,ue),J;if(oe===null){for(;ue<k.length;ue++)oe=b(S,k[ue],F),oe!==null&&(y=s(oe,y,ue),re===null?J=oe:re.sibling=oe,re=oe);return Ne&&On(S,ue),J}for(oe=r(S,oe);ue<k.length;ue++)We=H(oe,S,ue,k[ue],F),We!==null&&(e&&We.alternate!==null&&oe.delete(We.key===null?ue:We.key),y=s(We,y,ue),re===null?J=We:re.sibling=We,re=We);return e&&oe.forEach(function(En){return t(S,En)}),Ne&&On(S,ue),J}function G(S,y,k,F){var J=q(k);if(typeof J!="function")throw Error(a(150));if(k=J.call(k),k==null)throw Error(a(151));for(var re=J=null,oe=y,ue=y=0,We=null,ye=k.next();oe!==null&&!ye.done;ue++,ye=k.next()){oe.index>ue?(We=oe,oe=null):We=oe.sibling;var En=I(S,oe,ye.value,F);if(En===null){oe===null&&(oe=We);break}e&&oe&&En.alternate===null&&t(S,oe),y=s(En,y,ue),re===null?J=En:re.sibling=En,re=En,oe=We}if(ye.done)return n(S,oe),Ne&&On(S,ue),J;if(oe===null){for(;!ye.done;ue++,ye=k.next())ye=b(S,ye.value,F),ye!==null&&(y=s(ye,y,ue),re===null?J=ye:re.sibling=ye,re=ye);return Ne&&On(S,ue),J}for(oe=r(S,oe);!ye.done;ue++,ye=k.next())ye=H(oe,S,ue,ye.value,F),ye!==null&&(e&&ye.alternate!==null&&oe.delete(ye.key===null?ue:ye.key),y=s(ye,y,ue),re===null?J=ye:re.sibling=ye,re=ye);return e&&oe.forEach(function(jm){return t(S,jm)}),Ne&&On(S,ue),J}function Oe(S,y,k,F){if(typeof k=="object"&&k!==null&&k.type===X&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case le:e:{for(var J=k.key,re=y;re!==null;){if(re.key===J){if(J=k.type,J===X){if(re.tag===7){n(S,re.sibling),y=i(re,k.props.children),y.return=S,S=y;break e}}else if(re.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ue&&yc(J)===re.type){n(S,re.sibling),y=i(re,k.props),y.ref=lo(S,re,k),y.return=S,S=y;break e}n(S,re);break}else t(S,re);re=re.sibling}k.type===X?(y=Hn(k.props.children,S.mode,F,k.key),y.return=S,S=y):(F=Fi(k.type,k.key,k.props,null,S.mode,F),F.ref=lo(S,y,k),F.return=S,S=F)}return d(S);case ie:e:{for(re=k.key;y!==null;){if(y.key===re)if(y.tag===4&&y.stateNode.containerInfo===k.containerInfo&&y.stateNode.implementation===k.implementation){n(S,y.sibling),y=i(y,k.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else t(S,y);y=y.sibling}y=ia(k,S.mode,F),y.return=S,S=y}return d(S);case Ue:return re=k._init,Oe(S,y,re(k._payload),F)}if(Or(k))return K(S,y,k,F);if(q(k))return G(S,y,k,F);pi(S,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,y!==null&&y.tag===6?(n(S,y.sibling),y=i(y,k),y.return=S,S=y):(n(S,y),y=oa(k,S.mode,F),y.return=S,S=y),d(S)):n(S,y)}return Oe}var vr=xc(!0),wc=xc(!1),hi=hn(null),mi=null,yr=null,hs=null;function ms(){hs=yr=mi=null}function gs(e){var t=hi.current;Pe(hi),e._currentValue=t}function vs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){mi=e,hs=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(hs!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(mi===null)throw Error(a(308));yr=e,mi.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var bn=null;function ys(e){bn===null?bn=[e]:bn.push(e)}function Sc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ys(t)):(n.next=i.next,i.next=n),t.interleaved=n,en(e,r)}function en(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ge&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,en(e,n)}return i=r.interleaved,i===null?(t.next=t,ys(r)):(t.next=i.next,i.next=t),r.interleaved=t,en(e,n)}function gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rl(e,n)}}function jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vi(e,t,n,r){var i=e.updateQueue;vn=!1;var s=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var v=p,C=v.next;v.next=null,d===null?s=C:d.next=C,d=v;var R=e.alternate;R!==null&&(R=R.updateQueue,p=R.lastBaseUpdate,p!==d&&(p===null?R.firstBaseUpdate=C:p.next=C,R.lastBaseUpdate=v))}if(s!==null){var b=i.baseState;d=0,R=C=v=null,p=s;do{var I=p.lane,H=p.eventTime;if((r&I)===I){R!==null&&(R=R.next={eventTime:H,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var K=e,G=p;switch(I=t,H=n,G.tag){case 1:if(K=G.payload,typeof K=="function"){b=K.call(H,b,I);break e}b=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=G.payload,I=typeof K=="function"?K.call(H,b,I):K,I==null)break e;b=B({},b,I);break e;case 2:vn=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,I=i.effects,I===null?i.effects=[p]:I.push(p))}else H={eventTime:H,lane:I,tag:p.tag,payload:p.payload,callback:p.callback,next:null},R===null?(C=R=H,v=b):R=R.next=H,d|=I;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;I=p,p=I.next,I.next=null,i.lastBaseUpdate=I,i.shared.pending=null}}while(!0);if(R===null&&(v=b),i.baseState=v,i.firstBaseUpdate=C,i.lastBaseUpdate=R,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);An|=d,e.lanes=d,e.memoizedState=b}}function Cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var so={},Mt=hn(so),ao=hn(so),uo=hn(so);function Fn(e){if(e===so)throw Error(a(174));return e}function ws(e,t){switch(Ce(uo,t),Ce(ao,e),Ce(Mt,so),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}Pe(Mt),Ce(Mt,t)}function wr(){Pe(Mt),Pe(ao),Pe(uo)}function Ec(e){Fn(uo.current);var t=Fn(Mt.current),n=Sl(t,e.type);t!==n&&(Ce(ao,e),Ce(Mt,n))}function Ss(e){ao.current===e&&(Pe(Mt),Pe(ao))}var Te=hn(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ks=[];function js(){for(var e=0;e<ks.length;e++)ks[e]._workInProgressVersionPrimary=null;ks.length=0}var xi=W.ReactCurrentDispatcher,Cs=W.ReactCurrentBatchConfig,$n=0,Le=null,Ae=null,Be=null,wi=!1,co=!1,fo=0,Vh=0;function qe(){throw Error(a(321))}function Es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function Ps(e,t,n,r,i,s){if($n=s,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?Gh:qh,e=n(r,i),co){s=0;do{if(co=!1,fo=0,25<=s)throw Error(a(301));s+=1,Be=Ae=null,t.updateQueue=null,xi.current=Jh,e=n(r,i)}while(co)}if(xi.current=ji,t=Ae!==null&&Ae.next!==null,$n=0,Be=Ae=Le=null,wi=!1,t)throw Error(a(300));return e}function _s(){var e=fo!==0;return fo=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Le.memoizedState=Be=e:Be=Be.next=e,Be}function yt(){if(Ae===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Be===null?Le.memoizedState:Be.next;if(t!==null)Be=t,Ae=e;else{if(e===null)throw Error(a(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Be===null?Le.memoizedState=Be=e:Be=Be.next=e}return Be}function po(e,t){return typeof t=="function"?t(e):t}function zs(e){var t=yt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var d=i.next;i.next=s.next,s.next=d}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var p=d=null,v=null,C=s;do{var R=C.lane;if(($n&R)===R)v!==null&&(v=v.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),r=C.hasEagerState?C.eagerState:e(r,C.action);else{var b={lane:R,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};v===null?(p=v=b,d=r):v=v.next=b,Le.lanes|=R,An|=R}C=C.next}while(C!==null&&C!==s);v===null?d=r:v.next=p,Lt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=d,t.baseQueue=v,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Le.lanes|=s,An|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ns(e){var t=yt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do s=e(s,d.action),d=d.next;while(d!==i);Lt(s,t.memoizedState)||(ot=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Pc(){}function _c(e,t){var n=Le,r=yt(),i=t(),s=!Lt(r.memoizedState,i);if(s&&(r.memoizedState=i,ot=!0),r=r.queue,Ts(Tc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,ho(9,Nc.bind(null,n,r,i,t),void 0,null),He===null)throw Error(a(349));($n&30)!==0||zc(n,t,i)}return i}function zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nc(e,t,n,r){t.value=n,t.getSnapshot=r,Lc(t)&&Ic(e)}function Tc(e,t,n){return n(function(){Lc(t)&&Ic(e)})}function Lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Ic(e){var t=en(e,1);t!==null&&bt(t,e,1,-1)}function Rc(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:e},t.queue=e,e=e.dispatch=Kh.bind(null,Le,e),[t.memoizedState,e]}function ho(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dc(){return yt().memoizedState}function Si(e,t,n,r){var i=Ut();Le.flags|=e,i.memoizedState=ho(1|t,n,void 0,r===void 0?null:r)}function ki(e,t,n,r){var i=yt();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var d=Ae.memoizedState;if(s=d.destroy,r!==null&&Es(r,d.deps)){i.memoizedState=ho(t,n,s,r);return}}Le.flags|=e,i.memoizedState=ho(1|t,n,s,r)}function Oc(e,t){return Si(8390656,8,e,t)}function Ts(e,t){return ki(2048,8,e,t)}function bc(e,t){return ki(4,2,e,t)}function Fc(e,t){return ki(4,4,e,t)}function $c(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ac(e,t,n){return n=n!=null?n.concat([e]):null,ki(4,4,$c.bind(null,t,e),n)}function Ls(){}function Mc(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uc(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Es(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bc(e,t,n){return($n&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(Lt(n,t)||(n=yu(),Le.lanes|=n,An|=n,e.baseState=!0),t)}function Qh(e,t){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var r=Cs.transition;Cs.transition={};try{e(!1),t()}finally{ke=n,Cs.transition=r}}function Hc(){return yt().memoizedState}function Yh(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wc(e))Vc(t,n);else if(n=Sc(e,t,n,r),n!==null){var i=et();bt(n,e,r,i),Qc(n,t,r)}}function Kh(e,t,n){var r=kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wc(e))Vc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,p=s(d,n);if(i.hasEagerState=!0,i.eagerState=p,Lt(p,d)){var v=t.interleaved;v===null?(i.next=i,ys(t)):(i.next=v.next,v.next=i),t.interleaved=i;return}}catch{}finally{}n=Sc(e,t,i,r),n!==null&&(i=et(),bt(n,e,r,i),Qc(n,t,r))}}function Wc(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function Vc(e,t){co=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rl(e,n)}}var ji={readContext:vt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Gh={readContext:vt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Si(4194308,4,$c.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){return Si(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yh.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Rc,useDebugValue:Ls,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Rc(!1),t=e[0];return e=Qh.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,i=Ut();if(Ne){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),He===null)throw Error(a(349));($n&30)!==0||zc(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Oc(Tc.bind(null,r,s,e),[e]),r.flags|=2048,ho(9,Nc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ut(),t=He.identifierPrefix;if(Ne){var n=Zt,r=Xt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qh={readContext:vt,useCallback:Mc,useContext:vt,useEffect:Ts,useImperativeHandle:Ac,useInsertionEffect:bc,useLayoutEffect:Fc,useMemo:Uc,useReducer:zs,useRef:Dc,useState:function(){return zs(po)},useDebugValue:Ls,useDeferredValue:function(e){var t=yt();return Bc(t,Ae.memoizedState,e)},useTransition:function(){var e=zs(po)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Pc,useSyncExternalStore:_c,useId:Hc,unstable_isNewReconciler:!1},Jh={readContext:vt,useCallback:Mc,useContext:vt,useEffect:Ts,useImperativeHandle:Ac,useInsertionEffect:bc,useLayoutEffect:Fc,useMemo:Uc,useReducer:Ns,useRef:Dc,useState:function(){return Ns(po)},useDebugValue:Ls,useDeferredValue:function(e){var t=yt();return Ae===null?t.memoizedState=e:Bc(t,Ae.memoizedState,e)},useTransition:function(){var e=Ns(po)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Pc,useSyncExternalStore:_c,useId:Hc,unstable_isNewReconciler:!1};function Rt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ci={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),i=kn(e),s=tn(r,i);s.payload=t,n!=null&&(s.callback=n),t=yn(e,s,i),t!==null&&(bt(t,e,i,r),gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),i=kn(e),s=tn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=yn(e,s,i),t!==null&&(bt(t,e,i,r),gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=kn(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=yn(e,i,r),t!==null&&(bt(t,e,r,n),gi(t,e,r))}};function Yc(e,t,n,r,i,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,d):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(i,s):!0}function Kc(e,t,n){var r=!1,i=mn,s=t.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=rt(t)?Rn:Ge.current,r=t.contextTypes,s=(r=r!=null)?pr(e,i):mn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ci.enqueueReplaceState(t,t.state,null)}function Rs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xs(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=rt(t)?Rn:Ge.current,i.context=pr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Is(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ci.enqueueReplaceState(i,i.state,null),vi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var n="",r=t;do n+=ne(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Os(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xh=typeof WeakMap=="function"?WeakMap:Map;function qc(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Li||(Li=!0,qs=r),Os(e,t)},n}function Jc(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Os(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Os(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function Xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fm.bind(null,e,t,n),t.then(e,e))}function Zc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ed(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,yn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Zh=W.ReactCurrentOwner,ot=!1;function Ze(e,t,n,r){t.child=e===null?wc(t,null,n,r):vr(t,e.child,n,r)}function td(e,t,n,r,i){n=n.render;var s=t.ref;return xr(t,i),r=Ps(e,t,n,r,s,i),n=_s(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ne&&n&&us(t),t.flags|=1,Ze(e,t,r,i),t.child)}function nd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ra(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,rd(e,t,s,r,i)):(e=Fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(d,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=Cn(s,r),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Zr(s,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,nn(e,t,i)}return bs(e,t,n,r,i)}function od(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(jr,pt),pt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(jr,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(jr,pt),pt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ce(jr,pt),pt|=r;return Ze(e,t,i,n),t.child}function id(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bs(e,t,n,r,i){var s=rt(n)?Rn:Ge.current;return s=pr(t,s),xr(t,i),n=Ps(e,t,n,r,s,i),r=_s(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ne&&r&&us(t),t.flags|=1,Ze(e,t,n,i),t.child)}function ld(e,t,n,r,i){if(rt(n)){var s=!0;ai(t)}else s=!1;if(xr(t,i),t.stateNode===null)Pi(e,t),Kc(t,n,r),Rs(t,n,r,i),r=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var v=d.context,C=n.contextType;typeof C=="object"&&C!==null?C=vt(C):(C=rt(n)?Rn:Ge.current,C=pr(t,C));var R=n.getDerivedStateFromProps,b=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function";b||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==r||v!==C)&&Gc(t,d,r,C),vn=!1;var I=t.memoizedState;d.state=I,vi(t,r,d,i),v=t.memoizedState,p!==r||I!==v||nt.current||vn?(typeof R=="function"&&(Is(t,n,R,r),v=t.memoizedState),(p=vn||Yc(t,n,p,r,I,v,C))?(b||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=v),d.props=r,d.state=v,d.context=C,r=p):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{d=t.stateNode,kc(e,t),p=t.memoizedProps,C=t.type===t.elementType?p:Rt(t.type,p),d.props=C,b=t.pendingProps,I=d.context,v=n.contextType,typeof v=="object"&&v!==null?v=vt(v):(v=rt(n)?Rn:Ge.current,v=pr(t,v));var H=n.getDerivedStateFromProps;(R=typeof H=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==b||I!==v)&&Gc(t,d,r,v),vn=!1,I=t.memoizedState,d.state=I,vi(t,r,d,i);var K=t.memoizedState;p!==b||I!==K||nt.current||vn?(typeof H=="function"&&(Is(t,n,H,r),K=t.memoizedState),(C=vn||Yc(t,n,C,r,I,K,v)||!1)?(R||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,K,v),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,K,v)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=K),d.props=r,d.state=K,d.context=v,r=C):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),r=!1)}return Fs(e,t,n,r,s,i)}function Fs(e,t,n,r,i,s){id(e,t);var d=(t.flags&128)!==0;if(!r&&!d)return i&&dc(t,n,!1),nn(e,t,s);r=t.stateNode,Zh.current=t;var p=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&d?(t.child=vr(t,e.child,null,s),t.child=vr(t,null,p,s)):Ze(e,t,p,s),t.memoizedState=r.state,i&&dc(t,n,!0),t.child}function sd(e){var t=e.stateNode;t.pendingContext?uc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uc(e,t.context,!1),ws(e,t.containerInfo)}function ad(e,t,n,r,i){return gr(),ps(i),t.flags|=256,Ze(e,t,n,r),t.child}var $s={dehydrated:null,treeContext:null,retryLane:0};function As(e){return{baseLanes:e,cachePool:null,transitions:null}}function ud(e,t,n){var r=t.pendingProps,i=Te.current,s=!1,d=(t.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(Te,i&1),e===null)return fs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=r.children,e=r.fallback,s?(r=t.mode,s=t.child,d={mode:"hidden",children:d},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=$i(d,r,0,null),e=Hn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=As(n),t.memoizedState=$s,e):Ms(t,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return em(e,t,d,r,p,i,n);if(s){s=r.fallback,d=t.mode,i=e.child,p=i.sibling;var v={mode:"hidden",children:r.children};return(d&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=v,t.deletions=null):(r=Cn(i,v),r.subtreeFlags=i.subtreeFlags&14680064),p!==null?s=Cn(p,s):(s=Hn(s,d,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,d=e.child.memoizedState,d=d===null?As(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~n,t.memoizedState=$s,r}return s=e.child,e=s.sibling,r=Cn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ms(e,t){return t=$i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ei(e,t,n,r){return r!==null&&ps(r),vr(t,e.child,null,n),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,n,r,i,s,d){if(n)return t.flags&256?(t.flags&=-257,r=Ds(Error(a(422))),Ei(e,t,d,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=$i({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,d,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&vr(t,e.child,null,d),t.child.memoizedState=As(d),t.memoizedState=$s,s);if((t.mode&1)===0)return Ei(e,t,d,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var p=r.dgst;return r=p,s=Error(a(419)),r=Ds(s,r,void 0),Ei(e,t,d,r)}if(p=(d&e.childLanes)!==0,ot||p){if(r=He,r!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|d))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,en(e,i),bt(r,e,i,-1))}return na(),r=Ds(Error(a(421))),Ei(e,t,d,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=pm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ft=pn(i.nextSibling),dt=t,Ne=!0,It=null,e!==null&&(mt[gt++]=Xt,mt[gt++]=Zt,mt[gt++]=Dn,Xt=e.id,Zt=e.overflow,Dn=t),t=Ms(t,r.children),t.flags|=4096,t)}function cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vs(e.return,t,n)}function Us(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dd(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(e,t,r.children,n),r=Te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,n,t);else if(e.tag===19)cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Te,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Us(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Us(t,!0,n,null,s);break;case"together":Us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tm(e,t,n){switch(t.tag){case 3:sd(t),gr();break;case 5:Ec(t);break;case 1:rt(t.type)&&ai(t);break;case 4:ws(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ce(hi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ud(e,t,n):(Ce(Te,Te.current&1),e=nn(e,t,n),e!==null?e.sibling:null);Ce(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return dd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,od(e,t,n)}return nn(e,t,n)}var fd,Bs,pd,hd;fd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Bs=function(){},pd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(Mt.current);var s=null;switch(n){case"input":i=vl(e,i),r=vl(e,r),s=[];break;case"select":i=B({},i,{value:void 0}),r=B({},r,{value:void 0}),s=[];break;case"textarea":i=wl(e,i),r=wl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ii)}kl(n,r);var d;n=null;for(C in i)if(!r.hasOwnProperty(C)&&i.hasOwnProperty(C)&&i[C]!=null)if(C==="style"){var p=i[C];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(f.hasOwnProperty(C)?s||(s=[]):(s=s||[]).push(C,null));for(C in r){var v=r[C];if(p=i!=null?i[C]:void 0,r.hasOwnProperty(C)&&v!==p&&(v!=null||p!=null))if(C==="style")if(p){for(d in p)!p.hasOwnProperty(d)||v&&v.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in v)v.hasOwnProperty(d)&&p[d]!==v[d]&&(n||(n={}),n[d]=v[d])}else n||(s||(s=[]),s.push(C,n)),n=v;else C==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,p=p?p.__html:void 0,v!=null&&p!==v&&(s=s||[]).push(C,v)):C==="children"?typeof v!="string"&&typeof v!="number"||(s=s||[]).push(C,""+v):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(f.hasOwnProperty(C)?(v!=null&&C==="onScroll"&&Ee("scroll",e),s||p===v||(s=[])):(s=s||[]).push(C,v))}n&&(s=s||[]).push("style",n);var C=s;(t.updateQueue=C)&&(t.flags|=4)}},hd=function(e,t,n,r){n!==r&&(t.flags|=4)};function mo(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nm(e,t,n){var r=t.pendingProps;switch(cs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return rt(t.type)&&si(),Je(t),null;case 3:return r=t.stateNode,wr(),Pe(nt),Pe(Ge),js(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,It!==null&&(Zs(It),It=null))),Bs(e,t),Je(t),null;case 5:Ss(t);var i=Fn(uo.current);if(n=t.type,e!==null&&t.stateNode!=null)pd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Je(t),null}if(e=Fn(Mt.current),fi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[At]=t,r[oo]=s,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<to.length;i++)Ee(to[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Ka(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":Ja(r,s),Ee("invalid",r)}kl(n,s),i=null;for(var d in s)if(s.hasOwnProperty(d)){var p=s[d];d==="children"?typeof p=="string"?r.textContent!==p&&(s.suppressHydrationWarning!==!0&&oi(r.textContent,p,e),i=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&oi(r.textContent,p,e),i=["children",""+p]):f.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Gt(r),qa(r,s,!0);break;case"textarea":Gt(r),Za(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ii)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(n,{is:r.is}):(e=d.createElement(n),n==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,n),e[At]=t,e[oo]=r,fd(e,t,!1,!1),t.stateNode=e;e:{switch(d=jl(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),i=r;break;case"iframe":case"object":case"embed":Ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<to.length;i++)Ee(to[i],e);i=r;break;case"source":Ee("error",e),i=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),i=r;break;case"details":Ee("toggle",e),i=r;break;case"input":Ka(e,r),i=vl(e,r),Ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=B({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":Ja(e,r),i=wl(e,r),Ee("invalid",e);break;default:i=r}kl(n,i),p=i;for(s in p)if(p.hasOwnProperty(s)){var v=p[s];s==="style"?ru(e,v):s==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&tu(e,v)):s==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&br(e,v):typeof v=="number"&&br(e,""+v):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(f.hasOwnProperty(s)?v!=null&&s==="onScroll"&&Ee("scroll",e):v!=null&&$(e,s,v,d))}switch(n){case"input":Gt(e),qa(e,r,!1);break;case"textarea":Gt(e),Za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+me(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?tr(e,!!r.multiple,s,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ii)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)hd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=Fn(uo.current),Fn(Mt.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(s=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:oi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Je(t),null;case 13:if(Pe(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)vc(),gr(),t.flags|=98560,s=!1;else if(s=fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[At]=t}else gr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),s=!1}else It!==null&&(Zs(It),It=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?Me===0&&(Me=3):na())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return wr(),Bs(e,t),e===null&&no(t.stateNode.containerInfo),Je(t),null;case 10:return gs(t.type._context),Je(t),null;case 17:return rt(t.type)&&si(),Je(t),null;case 19:if(Pe(Te),s=t.memoizedState,s===null)return Je(t),null;if(r=(t.flags&128)!==0,d=s.rendering,d===null)if(r)mo(s,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=yi(e),d!==null){for(t.flags|=128,mo(s,!1),r=d.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Te,Te.current&1|2),t.child}e=e.sibling}s.tail!==null&&De()>Cr&&(t.flags|=128,r=!0,mo(s,!1),t.lanes=4194304)}else{if(!r)if(e=yi(d),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!Ne)return Je(t),null}else 2*De()-s.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,mo(s,!1),t.lanes=4194304);s.isBackwards?(d.sibling=t.child,t.child=d):(n=s.last,n!==null?n.sibling=d:t.child=d,s.last=d)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=De(),t.sibling=null,n=Te.current,Ce(Te,r?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(pt&1073741824)!==0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function rm(e,t){switch(cs(t),t.tag){case 1:return rt(t.type)&&si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),Pe(nt),Pe(Ge),js(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(Pe(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Te),null;case 4:return wr(),null;case 10:return gs(t.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var _i=!1,Xe=!1,om=typeof WeakSet=="function"?WeakSet:Set,Y=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function Hs(e,t,n){try{n()}catch(r){Re(e,t,r)}}var md=!1;function im(e,t){if(ts=Yo,e=Yu(),Yl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,p=-1,v=-1,C=0,R=0,b=e,I=null;t:for(;;){for(var H;b!==n||i!==0&&b.nodeType!==3||(p=d+i),b!==s||r!==0&&b.nodeType!==3||(v=d+r),b.nodeType===3&&(d+=b.nodeValue.length),(H=b.firstChild)!==null;)I=b,b=H;for(;;){if(b===e)break t;if(I===n&&++C===i&&(p=d),I===s&&++R===r&&(v=d),(H=b.nextSibling)!==null)break;b=I,I=b.parentNode}b=H}n=p===-1||v===-1?null:{start:p,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(ns={focusedElem:e,selectionRange:n},Yo=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var K=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var G=K.memoizedProps,Oe=K.memoizedState,S=t.stateNode,y=S.getSnapshotBeforeUpdate(t.elementType===t.type?G:Rt(t.type,G),Oe);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(F){Re(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return K=md,md=!1,K}function go(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hs(t,n,s)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ws(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gd(e){var t=e.alternate;t!==null&&(e.alternate=null,gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[oo],delete t[ls],delete t[Uh],delete t[Bh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vd(e){return e.tag===5||e.tag===3||e.tag===4}function yd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ii));else if(r!==4&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}function Qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qs(e,t,n),e=e.sibling;e!==null;)Qs(e,t,n),e=e.sibling}var Ye=null,Dt=!1;function xn(e,t,n){for(n=n.child;n!==null;)xd(e,t,n),n=n.sibling}function xd(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Uo,n)}catch{}switch(n.tag){case 5:Xe||kr(n,t);case 6:var r=Ye,i=Dt;Ye=null,xn(e,t,n),Ye=r,Dt=i,Ye!==null&&(Dt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Dt?(e=Ye,n=n.stateNode,e.nodeType===8?is(e.parentNode,n):e.nodeType===1&&is(e,n),Yr(e)):is(Ye,n.stateNode));break;case 4:r=Ye,i=Dt,Ye=n.stateNode.containerInfo,Dt=!0,xn(e,t,n),Ye=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&Hs(n,t,d),i=i.next}while(i!==r)}xn(e,t,n);break;case 1:if(!Xe&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Re(n,t,p)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,xn(e,t,n),Xe=r):xn(e,t,n);break;default:xn(e,t,n)}}function wd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new om),t.forEach(function(r){var i=hm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 5:Ye=p.stateNode,Dt=!1;break e;case 3:Ye=p.stateNode.containerInfo,Dt=!0;break e;case 4:Ye=p.stateNode.containerInfo,Dt=!0;break e}p=p.return}if(Ye===null)throw Error(a(160));xd(s,d,i),Ye=null,Dt=!1;var v=i.alternate;v!==null&&(v.return=null),i.return=null}catch(C){Re(i,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sd(t,e),t=t.sibling}function Sd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Bt(e),r&4){try{go(3,e,e.return),zi(3,e)}catch(G){Re(e,e.return,G)}try{go(5,e,e.return)}catch(G){Re(e,e.return,G)}}break;case 1:Ot(t,e),Bt(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(Ot(t,e),Bt(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var i=e.stateNode;try{br(i,"")}catch(G){Re(e,e.return,G)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,d=n!==null?n.memoizedProps:s,p=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&Ga(i,s),jl(p,d);var C=jl(p,s);for(d=0;d<v.length;d+=2){var R=v[d],b=v[d+1];R==="style"?ru(i,b):R==="dangerouslySetInnerHTML"?tu(i,b):R==="children"?br(i,b):$(i,R,b,C)}switch(p){case"input":yl(i,s);break;case"textarea":Xa(i,s);break;case"select":var I=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var H=s.value;H!=null?tr(i,!!s.multiple,H,!1):I!==!!s.multiple&&(s.defaultValue!=null?tr(i,!!s.multiple,s.defaultValue,!0):tr(i,!!s.multiple,s.multiple?[]:"",!1))}i[oo]=s}catch(G){Re(e,e.return,G)}}break;case 6:if(Ot(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(G){Re(e,e.return,G)}}break;case 3:if(Ot(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(G){Re(e,e.return,G)}break;case 4:Ot(t,e),Bt(e);break;case 13:Ot(t,e),Bt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gs=De())),r&4&&wd(e);break;case 22:if(R=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(C=Xe)||R,Ot(t,e),Xe=C):Ot(t,e),Bt(e),r&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!R&&(e.mode&1)!==0)for(Y=e,R=e.child;R!==null;){for(b=Y=R;Y!==null;){switch(I=Y,H=I.child,I.tag){case 0:case 11:case 14:case 15:go(4,I,I.return);break;case 1:kr(I,I.return);var K=I.stateNode;if(typeof K.componentWillUnmount=="function"){r=I,n=I.return;try{t=r,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(G){Re(r,n,G)}}break;case 5:kr(I,I.return);break;case 22:if(I.memoizedState!==null){Cd(b);continue}}H!==null?(H.return=I,Y=H):Cd(b)}R=R.sibling}e:for(R=null,b=e;;){if(b.tag===5){if(R===null){R=b;try{i=b.stateNode,C?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=b.stateNode,v=b.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null,p.style.display=nu("display",d))}catch(G){Re(e,e.return,G)}}}else if(b.tag===6){if(R===null)try{b.stateNode.nodeValue=C?"":b.memoizedProps}catch(G){Re(e,e.return,G)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;R===b&&(R=null),b=b.return}R===b&&(R=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Ot(t,e),Bt(e),r&4&&wd(e);break;case 21:break;default:Ot(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vd(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(br(i,""),r.flags&=-33);var s=yd(e);Qs(e,s,i);break;case 3:case 4:var d=r.stateNode.containerInfo,p=yd(e);Vs(e,p,d);break;default:throw Error(a(161))}}catch(v){Re(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lm(e,t,n){Y=e,kd(e)}function kd(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var d=i.memoizedState!==null||_i;if(!d){var p=i.alternate,v=p!==null&&p.memoizedState!==null||Xe;p=_i;var C=Xe;if(_i=d,(Xe=v)&&!C)for(Y=i;Y!==null;)d=Y,v=d.child,d.tag===22&&d.memoizedState!==null?Ed(i):v!==null?(v.return=d,Y=v):Ed(i);for(;s!==null;)Y=s,kd(s),s=s.sibling;Y=i,_i=p,Xe=C}jd(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,Y=s):jd(e)}}function jd(e){for(;Y!==null;){var t=Y;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Cc(t,s,r);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cc(t,d,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var R=C.memoizedState;if(R!==null){var b=R.dehydrated;b!==null&&Yr(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Xe||t.flags&512&&Ws(t)}catch(I){Re(t,t.return,I)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Cd(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Ed(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(v){Re(t,n,v)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(v){Re(t,i,v)}}var s=t.return;try{Ws(t)}catch(v){Re(t,s,v)}break;case 5:var d=t.return;try{Ws(t)}catch(v){Re(t,d,v)}}}catch(v){Re(t,t.return,v)}if(t===e){Y=null;break}var p=t.sibling;if(p!==null){p.return=t.return,Y=p;break}Y=t.return}}var sm=Math.ceil,Ni=W.ReactCurrentDispatcher,Ys=W.ReactCurrentOwner,xt=W.ReactCurrentBatchConfig,ge=0,He=null,be=null,Ke=0,pt=0,jr=hn(0),Me=0,vo=null,An=0,Ti=0,Ks=0,yo=null,it=null,Gs=0,Cr=1/0,rn=null,Li=!1,qs=null,wn=null,Ii=!1,Sn=null,Ri=0,xo=0,Js=null,Di=-1,Oi=0;function et(){return(ge&6)!==0?De():Di!==-1?Di:Di=De()}function kn(e){return(e.mode&1)===0?1:(ge&2)!==0&&Ke!==0?Ke&-Ke:Wh.transition!==null?(Oi===0&&(Oi=yu()),Oi):(e=ke,e!==0||(e=window.event,e=e===void 0?16:_u(e.type)),e)}function bt(e,t,n,r){if(50<xo)throw xo=0,Js=null,Error(a(185));Br(e,n,r),((ge&2)===0||e!==He)&&(e===He&&((ge&2)===0&&(Ti|=n),Me===4&&jn(e,Ke)),lt(e,r),n===1&&ge===0&&(t.mode&1)===0&&(Cr=De()+500,ui&&gn()))}function lt(e,t){var n=e.callbackNode;Wp(e,t);var r=Wo(e,e===He?Ke:0);if(r===0)n!==null&&mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mu(n),t===1)e.tag===0?Hh(_d.bind(null,e)):fc(_d.bind(null,e)),Ah(function(){(ge&6)===0&&gn()}),n=null;else{switch(xu(r)){case 1:n=Tl;break;case 4:n=gu;break;case 16:n=Mo;break;case 536870912:n=vu;break;default:n=Mo}n=Od(n,Pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pd(e,t){if(Di=-1,Oi=0,(ge&6)!==0)throw Error(a(327));var n=e.callbackNode;if(Er()&&e.callbackNode!==n)return null;var r=Wo(e,e===He?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=bi(e,r);else{t=r;var i=ge;ge|=2;var s=Nd();(He!==e||Ke!==t)&&(rn=null,Cr=De()+500,Un(e,t));do try{cm();break}catch(p){zd(e,p)}while(!0);ms(),Ni.current=s,ge=i,be!==null?t=0:(He=null,Ke=0,t=Me)}if(t!==0){if(t===2&&(i=Ll(e),i!==0&&(r=i,t=Xs(e,i))),t===1)throw n=vo,Un(e,0),jn(e,r),lt(e,De()),n;if(t===6)jn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!am(i)&&(t=bi(e,r),t===2&&(s=Ll(e),s!==0&&(r=s,t=Xs(e,s))),t===1))throw n=vo,Un(e,0),jn(e,r),lt(e,De()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:Bn(e,it,rn);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=Gs+500-De(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=os(Bn.bind(null,e,it,rn),t);break}Bn(e,it,rn);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var d=31-Tt(r);s=1<<d,d=t[d],d>i&&(i=d),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sm(r/1960))-r,10<r){e.timeoutHandle=os(Bn.bind(null,e,it,rn),r);break}Bn(e,it,rn);break;case 5:Bn(e,it,rn);break;default:throw Error(a(329))}}}return lt(e,De()),e.callbackNode===n?Pd.bind(null,e):null}function Xs(e,t){var n=yo;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=bi(e,t),e!==2&&(t=it,it=n,t!==null&&Zs(t)),e}function Zs(e){it===null?it=e:it.push.apply(it,e)}function am(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Lt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~Ks,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function _d(e){if((ge&6)!==0)throw Error(a(327));Er();var t=Wo(e,0);if((t&1)===0)return lt(e,De()),null;var n=bi(e,t);if(e.tag!==0&&n===2){var r=Ll(e);r!==0&&(t=r,n=Xs(e,r))}if(n===1)throw n=vo,Un(e,0),jn(e,t),lt(e,De()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,it,rn),lt(e,De()),null}function ea(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Cr=De()+500,ui&&gn())}}function Mn(e){Sn!==null&&Sn.tag===0&&(ge&6)===0&&Er();var t=ge;ge|=1;var n=xt.transition,r=ke;try{if(xt.transition=null,ke=1,e)return e()}finally{ke=r,xt.transition=n,ge=t,(ge&6)===0&&gn()}}function ta(){pt=jr.current,Pe(jr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$h(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(cs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&si();break;case 3:wr(),Pe(nt),Pe(Ge),js();break;case 5:Ss(r);break;case 4:wr();break;case 13:Pe(Te);break;case 19:Pe(Te);break;case 10:gs(r.type._context);break;case 22:case 23:ta()}n=n.return}if(He=e,be=e=Cn(e.current,null),Ke=pt=t,Me=0,vo=null,Ks=Ti=An=0,it=yo=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var d=s.next;s.next=i,r.next=d}n.pending=r}bn=null}return e}function zd(e,t){do{var n=be;try{if(ms(),xi.current=ji,wi){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wi=!1}if($n=0,Be=Ae=Le=null,co=!1,fo=0,Ys.current=null,n===null||n.return===null){Me=1,vo=t,be=null;break}e:{var s=e,d=n.return,p=n,v=t;if(t=Ke,p.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var C=v,R=p,b=R.tag;if((R.mode&1)===0&&(b===0||b===11||b===15)){var I=R.alternate;I?(R.updateQueue=I.updateQueue,R.memoizedState=I.memoizedState,R.lanes=I.lanes):(R.updateQueue=null,R.memoizedState=null)}var H=Zc(d);if(H!==null){H.flags&=-257,ed(H,d,p,s,t),H.mode&1&&Xc(s,C,t),t=H,v=C;var K=t.updateQueue;if(K===null){var G=new Set;G.add(v),t.updateQueue=G}else K.add(v);break e}else{if((t&1)===0){Xc(s,C,t),na();break e}v=Error(a(426))}}else if(Ne&&p.mode&1){var Oe=Zc(d);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),ed(Oe,d,p,s,t),ps(Sr(v,p));break e}}s=v=Sr(v,p),Me!==4&&(Me=2),yo===null?yo=[s]:yo.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var S=qc(s,v,t);jc(s,S);break e;case 1:p=v;var y=s.type,k=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(wn===null||!wn.has(k)))){s.flags|=65536,t&=-t,s.lanes|=t;var F=Jc(s,p,t);jc(s,F);break e}}s=s.return}while(s!==null)}Ld(n)}catch(J){t=J,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Nd(){var e=Ni.current;return Ni.current=ji,e===null?ji:e}function na(){(Me===0||Me===3||Me===2)&&(Me=4),He===null||(An&268435455)===0&&(Ti&268435455)===0||jn(He,Ke)}function bi(e,t){var n=ge;ge|=2;var r=Nd();(He!==e||Ke!==t)&&(rn=null,Un(e,t));do try{um();break}catch(i){zd(e,i)}while(!0);if(ms(),ge=n,Ni.current=r,be!==null)throw Error(a(261));return He=null,Ke=0,Me}function um(){for(;be!==null;)Td(be)}function cm(){for(;be!==null&&!Op();)Td(be)}function Td(e){var t=Dd(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Ld(e):be=t,Ys.current=null}function Ld(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=nm(n,t,pt),n!==null){be=n;return}}else{if(n=rm(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,be=null;return}}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Me===0&&(Me=5)}function Bn(e,t,n){var r=ke,i=xt.transition;try{xt.transition=null,ke=1,dm(e,t,n,r)}finally{xt.transition=i,ke=r}return null}function dm(e,t,n,r){do Er();while(Sn!==null);if((ge&6)!==0)throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Vp(e,s),e===He&&(be=He=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ii||(Ii=!0,Od(Mo,function(){return Er(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=xt.transition,xt.transition=null;var d=ke;ke=1;var p=ge;ge|=4,Ys.current=null,im(e,n),Sd(n,e),Lh(ns),Yo=!!ts,ns=ts=null,e.current=n,lm(n),bp(),ge=p,ke=d,xt.transition=s}else e.current=n;if(Ii&&(Ii=!1,Sn=e,Ri=i),s=e.pendingLanes,s===0&&(wn=null),Ap(n.stateNode),lt(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Li)throw Li=!1,e=qs,qs=null,e;return(Ri&1)!==0&&e.tag!==0&&Er(),s=e.pendingLanes,(s&1)!==0?e===Js?xo++:(xo=0,Js=e):xo=0,gn(),null}function Er(){if(Sn!==null){var e=xu(Ri),t=xt.transition,n=ke;try{if(xt.transition=null,ke=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,Ri=0,(ge&6)!==0)throw Error(a(331));var i=ge;for(ge|=4,Y=e.current;Y!==null;){var s=Y,d=s.child;if((Y.flags&16)!==0){var p=s.deletions;if(p!==null){for(var v=0;v<p.length;v++){var C=p[v];for(Y=C;Y!==null;){var R=Y;switch(R.tag){case 0:case 11:case 15:go(8,R,s)}var b=R.child;if(b!==null)b.return=R,Y=b;else for(;Y!==null;){R=Y;var I=R.sibling,H=R.return;if(gd(R),R===C){Y=null;break}if(I!==null){I.return=H,Y=I;break}Y=H}}}var K=s.alternate;if(K!==null){var G=K.child;if(G!==null){K.child=null;do{var Oe=G.sibling;G.sibling=null,G=Oe}while(G!==null)}}Y=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,Y=d;else e:for(;Y!==null;){if(s=Y,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,Y=S;break e}Y=s.return}}var y=e.current;for(Y=y;Y!==null;){d=Y;var k=d.child;if((d.subtreeFlags&2064)!==0&&k!==null)k.return=d,Y=k;else e:for(d=y;Y!==null;){if(p=Y,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:zi(9,p)}}catch(J){Re(p,p.return,J)}if(p===d){Y=null;break e}var F=p.sibling;if(F!==null){F.return=p.return,Y=F;break e}Y=p.return}}if(ge=i,gn(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Uo,e)}catch{}r=!0}return r}finally{ke=n,xt.transition=t}}return!1}function Id(e,t,n){t=Sr(n,t),t=qc(e,t,1),e=yn(e,t,1),t=et(),e!==null&&(Br(e,1,t),lt(e,t))}function Re(e,t,n){if(e.tag===3)Id(e,e,n);else for(;t!==null;){if(t.tag===3){Id(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Sr(n,e),e=Jc(t,e,1),t=yn(t,e,1),e=et(),t!==null&&(Br(t,1,e),lt(t,e));break}}t=t.return}}function fm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ke&n)===n&&(Me===4||Me===3&&(Ke&130023424)===Ke&&500>De()-Gs?Un(e,0):Ks|=n),lt(e,t)}function Rd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ho,Ho<<=1,(Ho&130023424)===0&&(Ho=4194304)));var n=et();e=en(e,t),e!==null&&(Br(e,t,n),lt(e,n))}function pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function hm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Rd(e,n)}var Dd;Dd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,tm(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,Ne&&(t.flags&1048576)!==0&&pc(t,di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pi(e,t),e=t.pendingProps;var i=pr(t,Ge.current);xr(t,n),i=Ps(null,t,r,e,i,n);var s=_s();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(s=!0,ai(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xs(t),i.updater=Ci,t.stateNode=i,i._reactInternals=t,Rs(t,r,e,n),t=Fs(null,t,r,!0,s,n)):(t.tag=0,Ne&&s&&us(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gm(r),e=Rt(r,e),i){case 0:t=bs(null,t,r,e,n);break e;case 1:t=ld(null,t,r,e,n);break e;case 11:t=td(null,t,r,e,n);break e;case 14:t=nd(null,t,r,Rt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),bs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),ld(e,t,r,i,n);case 3:e:{if(sd(t),e===null)throw Error(a(387));r=t.pendingProps,s=t.memoizedState,i=s.element,kc(e,t),vi(t,r,null,n);var d=t.memoizedState;if(r=d.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Sr(Error(a(423)),t),t=ad(e,t,r,n,i);break e}else if(r!==i){i=Sr(Error(a(424)),t),t=ad(e,t,r,n,i);break e}else for(ft=pn(t.stateNode.containerInfo.firstChild),dt=t,Ne=!0,It=null,n=wc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===i){t=nn(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return Ec(t),e===null&&fs(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,d=i.children,rs(r,i)?d=null:s!==null&&rs(r,s)&&(t.flags|=32),id(e,t),Ze(e,t,d,n),t.child;case 6:return e===null&&fs(t),null;case 13:return ud(e,t,n);case 4:return ws(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),td(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,d=i.value,Ce(hi,r._currentValue),r._currentValue=d,s!==null)if(Lt(s.value,d)){if(s.children===i.children&&!nt.current){t=nn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){d=s.child;for(var v=p.firstContext;v!==null;){if(v.context===r){if(s.tag===1){v=tn(-1,n&-n),v.tag=2;var C=s.updateQueue;if(C!==null){C=C.shared;var R=C.pending;R===null?v.next=v:(v.next=R.next,R.next=v),C.pending=v}}s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),vs(s.return,n,t),p.lanes|=n;break}v=v.next}}else if(s.tag===10)d=s.type===t.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(a(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),vs(d,n,t),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=vt(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),nd(e,t,r,i,n);case 15:return rd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Pi(e,t),t.tag=1,rt(r)?(e=!0,ai(t)):e=!1,xr(t,n),Kc(t,r,i),Rs(t,r,i,n),Fs(null,t,r,!0,e,n);case 19:return dd(e,t,n);case 22:return od(e,t,n)}throw Error(a(156,t.tag))};function Od(e,t){return hu(e,t)}function mm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new mm(e,t,n,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gm(e){if(typeof e=="function")return ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===he)return 11;if(e===tt)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fi(e,t,n,r,i,s){var d=2;if(r=e,typeof e=="function")ra(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case X:return Hn(n.children,i,s,t);case V:d=8,i|=8;break;case ee:return e=wt(12,n,t,i|2),e.elementType=ee,e.lanes=s,e;case Se:return e=wt(13,n,t,i),e.elementType=Se,e.lanes=s,e;case ze:return e=wt(19,n,t,i),e.elementType=ze,e.lanes=s,e;case je:return $i(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pe:d=10;break e;case ce:d=9;break e;case he:d=11;break e;case tt:d=14;break e;case Ue:d=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=wt(d,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Hn(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function $i(e,t,n,r){return e=wt(22,e,r,t),e.elementType=je,e.lanes=n,e.stateNode={isHidden:!1},e}function oa(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function ia(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function la(e,t,n,r,i,s,d,p,v){return e=new vm(e,t,n,p,v),t===1?(t=1,s===!0&&(t|=8)):t=0,s=wt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(s),e}function ym(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bd(e){if(!e)return mn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(rt(n))return cc(e,n,t)}return t}function Fd(e,t,n,r,i,s,d,p,v){return e=la(n,r,!0,e,i,s,d,p,v),e.context=bd(null),n=e.current,r=et(),i=kn(n),s=tn(r,i),s.callback=t??null,yn(n,s,i),e.current.lanes=i,Br(e,i,r),lt(e,r),e}function Ai(e,t,n,r){var i=t.current,s=et(),d=kn(i);return n=bd(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(s,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yn(i,t,d),e!==null&&(bt(e,i,d,s),gi(e,i,d)),d}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sa(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function xm(){return null}var Ad=typeof reportError=="function"?reportError:function(e){console.error(e)};function aa(e){this._internalRoot=e}Ui.prototype.render=aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Ai(e,t,null,null)},Ui.prototype.unmount=aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){Ai(null,e,null,null)}),t[qt]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&Eu(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function wm(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var C=Mi(d);s.call(C)}}var d=Fd(t,r,e,0,null,!1,!1,"",Md);return e._reactRootContainer=d,e[qt]=d.current,no(e.nodeType===8?e.parentNode:e),Mn(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var p=r;r=function(){var C=Mi(v);p.call(C)}}var v=la(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=v,e[qt]=v.current,no(e.nodeType===8?e.parentNode:e),Mn(function(){Ai(t,v,n,r)}),v}function Hi(e,t,n,r,i){var s=n._reactRootContainer;if(s){var d=s;if(typeof i=="function"){var p=i;i=function(){var v=Mi(d);p.call(v)}}Ai(t,d,e,i)}else d=wm(n,t,e,i,r);return Mi(d)}wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ur(t.pendingLanes);n!==0&&(Rl(t,n|1),lt(t,De()),(ge&6)===0&&(Cr=De()+500,gn()))}break;case 13:Mn(function(){var r=en(e,1);if(r!==null){var i=et();bt(r,e,1,i)}}),sa(e,1)}},Dl=function(e){if(e.tag===13){var t=en(e,134217728);if(t!==null){var n=et();bt(t,e,134217728,n)}sa(e,134217728)}},Su=function(e){if(e.tag===13){var t=kn(e),n=en(e,t);if(n!==null){var r=et();bt(n,e,t,r)}sa(e,t)}},ku=function(){return ke},ju=function(e,t){var n=ke;try{return ke=e,t()}finally{ke=n}},Pl=function(e,t,n){switch(t){case"input":if(yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=li(r);if(!i)throw Error(a(90));Nt(r),yl(r,i)}}}break;case"textarea":Xa(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}},su=ea,au=Mn;var Sm={usingClientEntryPoint:!1,Events:[io,dr,li,iu,lu,ea]},wo={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},km={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fu(e),e===null?null:e.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Uo=Wi.inject(km),$t=Wi}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm,st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(a(200));return ym(e,t,null,n)},st.createRoot=function(e,t){if(!ua(e))throw Error(a(299));var n=!1,r="",i=Ad;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=la(e,1,!1,null,null,n,!1,r,i),e[qt]=t.current,no(e.nodeType===8?e.parentNode:e),new aa(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=fu(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return Mn(e)},st.hydrate=function(e,t,n){if(!Bi(t))throw Error(a(200));return Hi(null,e,t,!0,n)},st.hydrateRoot=function(e,t,n){if(!ua(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",d=Ad;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Fd(t,null,e,1,n??null,i,!1,s,d),e[qt]=t.current,no(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ui(t)},st.render=function(e,t,n){if(!Bi(t))throw Error(a(200));return Hi(null,e,t,!1,n)},st.unmountComponentAtNode=function(e){if(!Bi(e))throw Error(a(40));return e._reactRootContainer?(Mn(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1},st.unstable_batchedUpdates=ea,st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bi(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Hi(e,t,n,!1,r)},st.version="18.3.1-next-f1338f8080-20240426",st}var Kd;function Uf(){if(Kd)return fa.exports;Kd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),fa.exports=Lm(),fa.exports}var Gd;function Im(){if(Gd)return Vi;Gd=1;var o=Uf();return Vi.createRoot=o.createRoot,Vi.hydrateRoot=o.hydrateRoot,Vi}var Rm=Im();const Dm=Mf(Rm);Uf();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o[c]=a[c])}return o},No.apply(this,arguments)}var _n;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(_n||(_n={}));const qd="popstate";function Om(o){o===void 0&&(o={});function l(c,f){let{pathname:h,search:m,hash:x}=c.location;return za("",{pathname:h,search:m,hash:x},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function a(c,f){return typeof f=="string"?f:tl(f)}return Fm(l,a,null,o)}function $e(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function Bf(o,l){if(!o){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function bm(){return Math.random().toString(36).substr(2,8)}function Jd(o,l){return{usr:o.state,key:o.key,idx:l}}function za(o,l,a,c){return a===void 0&&(a=null),No({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof l=="string"?Rr(l):l,{state:a,key:l&&l.key||c||bm()})}function tl(o){let{pathname:l="/",search:a="",hash:c=""}=o;return a&&a!=="?"&&(l+=a.charAt(0)==="?"?a:"?"+a),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Rr(o){let l={};if(o){let a=o.indexOf("#");a>=0&&(l.hash=o.substr(a),o=o.substr(0,a));let c=o.indexOf("?");c>=0&&(l.search=o.substr(c),o=o.substr(0,c)),o&&(l.pathname=o)}return l}function Fm(o,l,a,c){c===void 0&&(c={});let{window:f=document.defaultView,v5Compat:h=!1}=c,m=f.history,x=_n.Pop,w=null,_=N();_==null&&(_=0,m.replaceState(No({},m.state,{idx:_}),""));function N(){return(m.state||{idx:null}).idx}function P(){x=_n.Pop;let O=N(),Q=O==null?null:O-_;_=O,w&&w({action:x,location:L.location,delta:Q})}function T(O,Q){x=_n.Push;let A=za(L.location,O,Q);_=N()+1;let $=Jd(A,_),W=L.createHref(A);try{m.pushState($,"",W)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;f.location.assign(W)}h&&w&&w({action:x,location:L.location,delta:1})}function D(O,Q){x=_n.Replace;let A=za(L.location,O,Q);_=N();let $=Jd(A,_),W=L.createHref(A);m.replaceState($,"",W),h&&w&&w({action:x,location:L.location,delta:0})}function M(O){let Q=f.location.origin!=="null"?f.location.origin:f.location.href,A=typeof O=="string"?O:tl(O);return A=A.replace(/ $/,"%20"),$e(Q,"No window.location.(origin|href) available to create URL for href: "+A),new URL(A,Q)}let L={get action(){return x},get location(){return o(f,m)},listen(O){if(w)throw new Error("A history only accepts one active listener");return f.addEventListener(qd,P),w=O,()=>{f.removeEventListener(qd,P),w=null}},createHref(O){return l(f,O)},createURL:M,encodeLocation(O){let Q=M(O);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:T,replace:D,go(O){return m.go(O)}};return L}var Xd;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Xd||(Xd={}));function $m(o,l,a){return a===void 0&&(a="/"),Am(o,l,a)}function Am(o,l,a,c){let f=typeof l=="string"?Rr(l):l,h=Ma(f.pathname||"/",a);if(h==null)return null;let m=Hf(o);Mm(m);let x=null;for(let w=0;x==null&&w<m.length;++w){let _=Xm(h);x=Gm(m[w],_)}return x}function Hf(o,l,a,c){l===void 0&&(l=[]),a===void 0&&(a=[]),c===void 0&&(c="");let f=(h,m,x)=>{let w={relativePath:x===void 0?h.path||"":x,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};w.relativePath.startsWith("/")&&($e(w.relativePath.startsWith(c),'Absolute route path "'+w.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),w.relativePath=w.relativePath.slice(c.length));let _=zn([c,w.relativePath]),N=a.concat(w);h.children&&h.children.length>0&&($e(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),Hf(h.children,l,N,_)),!(h.path==null&&!h.index)&&l.push({path:_,score:Ym(_,h.index),routesMeta:N})};return o.forEach((h,m)=>{var x;if(h.path===""||!((x=h.path)!=null&&x.includes("?")))f(h,m);else for(let w of Wf(h.path))f(h,m,w)}),l}function Wf(o){let l=o.split("/");if(l.length===0)return[];let[a,...c]=l,f=a.endsWith("?"),h=a.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let m=Wf(c.join("/")),x=[];return x.push(...m.map(w=>w===""?h:[h,w].join("/"))),f&&x.push(...m),x.map(w=>o.startsWith("/")&&w===""?"/":w)}function Mm(o){o.sort((l,a)=>l.score!==a.score?a.score-l.score:Km(l.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}const Um=/^:[\w-]+$/,Bm=3,Hm=2,Wm=1,Vm=10,Qm=-2,Zd=o=>o==="*";function Ym(o,l){let a=o.split("/"),c=a.length;return a.some(Zd)&&(c+=Qm),l&&(c+=Hm),a.filter(f=>!Zd(f)).reduce((f,h)=>f+(Um.test(h)?Bm:h===""?Wm:Vm),c)}function Km(o,l){return o.length===l.length&&o.slice(0,-1).every((c,f)=>c===l[f])?o[o.length-1]-l[l.length-1]:0}function Gm(o,l,a){let{routesMeta:c}=o,f={},h="/",m=[];for(let x=0;x<c.length;++x){let w=c[x],_=x===c.length-1,N=h==="/"?l:l.slice(h.length)||"/",P=qm({path:w.relativePath,caseSensitive:w.caseSensitive,end:_},N),T=w.route;if(!P)return null;Object.assign(f,P.params),m.push({params:f,pathname:zn([h,P.pathname]),pathnameBase:n0(zn([h,P.pathnameBase])),route:T}),P.pathnameBase!=="/"&&(h=zn([h,P.pathnameBase]))}return m}function qm(o,l){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[a,c]=Jm(o.path,o.caseSensitive,o.end),f=l.match(a);if(!f)return null;let h=f[0],m=h.replace(/(.)\/+$/,"$1"),x=f.slice(1);return{params:c.reduce((_,N,P)=>{let{paramName:T,isOptional:D}=N;if(T==="*"){let L=x[P]||"";m=h.slice(0,h.length-L.length).replace(/(.)\/+$/,"$1")}const M=x[P];return D&&!M?_[T]=void 0:_[T]=(M||"").replace(/%2F/g,"/"),_},{}),pathname:h,pathnameBase:m,pattern:o}}function Jm(o,l,a){l===void 0&&(l=!1),a===void 0&&(a=!0),Bf(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let c=[],f="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,x,w)=>(c.push({paramName:x,isOptional:w!=null}),w?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(c.push({paramName:"*"}),f+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?f+="\\/*$":o!==""&&o!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,l?void 0:"i"),c]}function Xm(o){try{return o.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Bf(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),o}}function Ma(o,l){if(l==="/")return o;if(!o.toLowerCase().startsWith(l.toLowerCase()))return null;let a=l.endsWith("/")?l.length-1:l.length,c=o.charAt(a);return c&&c!=="/"?null:o.slice(a)||"/"}function Zm(o,l){l===void 0&&(l="/");let{pathname:a,search:c="",hash:f=""}=typeof o=="string"?Rr(o):o;return{pathname:a?a.startsWith("/")?a:e0(a,l):l,search:r0(c),hash:o0(f)}}function e0(o,l){let a=l.replace(/\/+$/,"").split("/");return o.split("/").forEach(f=>{f===".."?a.length>1&&a.pop():f!=="."&&a.push(f)}),a.length>1?a.join("/"):"/"}function ma(o,l,a,c){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t0(o){return o.filter((l,a)=>a===0||l.route.path&&l.route.path.length>0)}function Vf(o,l){let a=t0(o);return l?a.map((c,f)=>f===a.length-1?c.pathname:c.pathnameBase):a.map(c=>c.pathnameBase)}function Qf(o,l,a,c){c===void 0&&(c=!1);let f;typeof o=="string"?f=Rr(o):(f=No({},o),$e(!f.pathname||!f.pathname.includes("?"),ma("?","pathname","search",f)),$e(!f.pathname||!f.pathname.includes("#"),ma("#","pathname","hash",f)),$e(!f.search||!f.search.includes("#"),ma("#","search","hash",f)));let h=o===""||f.pathname==="",m=h?"/":f.pathname,x;if(m==null)x=a;else{let P=l.length-1;if(!c&&m.startsWith("..")){let T=m.split("/");for(;T[0]==="..";)T.shift(),P-=1;f.pathname=T.join("/")}x=P>=0?l[P]:"/"}let w=Zm(f,x),_=m&&m!=="/"&&m.endsWith("/"),N=(h||m===".")&&a.endsWith("/");return!w.pathname.endsWith("/")&&(_||N)&&(w.pathname+="/"),w}const zn=o=>o.join("/").replace(/\/\/+/g,"/"),n0=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),r0=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,o0=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function i0(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Yf=["post","put","patch","delete"];new Set(Yf);const l0=["get",...Yf];new Set(l0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o[c]=a[c])}return o},To.apply(this,arguments)}const Ua=z.createContext(null),s0=z.createContext(null),er=z.createContext(null),ul=z.createContext(null),Nn=z.createContext({outlet:null,matches:[],isDataRoute:!1}),Kf=z.createContext(null);function a0(o,l){let{relative:a}=l===void 0?{}:l;Do()||$e(!1);let{basename:c,navigator:f}=z.useContext(er),{hash:h,pathname:m,search:x}=qf(o,{relative:a}),w=m;return c!=="/"&&(w=m==="/"?c:zn([c,m])),f.createHref({pathname:w,search:x,hash:h})}function Do(){return z.useContext(ul)!=null}function cl(){return Do()||$e(!1),z.useContext(ul).location}function Gf(o){z.useContext(er).static||z.useLayoutEffect(o)}function ln(){let{isDataRoute:o}=z.useContext(Nn);return o?k0():u0()}function u0(){Do()||$e(!1);let o=z.useContext(Ua),{basename:l,future:a,navigator:c}=z.useContext(er),{matches:f}=z.useContext(Nn),{pathname:h}=cl(),m=JSON.stringify(Vf(f,a.v7_relativeSplatPath)),x=z.useRef(!1);return Gf(()=>{x.current=!0}),z.useCallback(function(_,N){if(N===void 0&&(N={}),!x.current)return;if(typeof _=="number"){c.go(_);return}let P=Qf(_,JSON.parse(m),h,N.relative==="path");o==null&&l!=="/"&&(P.pathname=P.pathname==="/"?l:zn([l,P.pathname])),(N.replace?c.replace:c.push)(P,N.state,N)},[l,c,m,h,o])}function c0(){let{matches:o}=z.useContext(Nn),l=o[o.length-1];return l?l.params:{}}function qf(o,l){let{relative:a}=l===void 0?{}:l,{future:c}=z.useContext(er),{matches:f}=z.useContext(Nn),{pathname:h}=cl(),m=JSON.stringify(Vf(f,c.v7_relativeSplatPath));return z.useMemo(()=>Qf(o,JSON.parse(m),h,a==="path"),[o,m,h,a])}function d0(o,l){return f0(o,l)}function f0(o,l,a,c){Do()||$e(!1);let{navigator:f}=z.useContext(er),{matches:h}=z.useContext(Nn),m=h[h.length-1],x=m?m.params:{};m&&m.pathname;let w=m?m.pathnameBase:"/";m&&m.route;let _=cl(),N;if(l){var P;let O=typeof l=="string"?Rr(l):l;w==="/"||(P=O.pathname)!=null&&P.startsWith(w)||$e(!1),N=O}else N=_;let T=N.pathname||"/",D=T;if(w!=="/"){let O=w.replace(/^\//,"").split("/");D="/"+T.replace(/^\//,"").split("/").slice(O.length).join("/")}let M=$m(o,{pathname:D}),L=v0(M&&M.map(O=>Object.assign({},O,{params:Object.assign({},x,O.params),pathname:zn([w,f.encodeLocation?f.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?w:zn([w,f.encodeLocation?f.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),h,a,c);return l&&L?z.createElement(ul.Provider,{value:{location:To({pathname:"/",search:"",hash:"",state:null,key:"default"},N),navigationType:_n.Pop}},L):L}function p0(){let o=S0(),l=i0(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),a=o instanceof Error?o.stack:null,f={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},l),a?z.createElement("pre",{style:f},a):null,null)}const h0=z.createElement(p0,null);class m0 extends z.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,a){return a.location!==l.location||a.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:a.error,location:a.location,revalidation:l.revalidation||a.revalidation}}componentDidCatch(l,a){console.error("React Router caught the following error during render",l,a)}render(){return this.state.error!==void 0?z.createElement(Nn.Provider,{value:this.props.routeContext},z.createElement(Kf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g0(o){let{routeContext:l,match:a,children:c}=o,f=z.useContext(Ua);return f&&f.static&&f.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=a.route.id),z.createElement(Nn.Provider,{value:l},c)}function v0(o,l,a,c){var f;if(l===void 0&&(l=[]),a===void 0&&(a=null),c===void 0&&(c=null),o==null){var h;if(!a)return null;if(a.errors)o=a.matches;else if((h=c)!=null&&h.v7_partialHydration&&l.length===0&&!a.initialized&&a.matches.length>0)o=a.matches;else return null}let m=o,x=(f=a)==null?void 0:f.errors;if(x!=null){let N=m.findIndex(P=>P.route.id&&(x==null?void 0:x[P.route.id])!==void 0);N>=0||$e(!1),m=m.slice(0,Math.min(m.length,N+1))}let w=!1,_=-1;if(a&&c&&c.v7_partialHydration)for(let N=0;N<m.length;N++){let P=m[N];if((P.route.HydrateFallback||P.route.hydrateFallbackElement)&&(_=N),P.route.id){let{loaderData:T,errors:D}=a,M=P.route.loader&&T[P.route.id]===void 0&&(!D||D[P.route.id]===void 0);if(P.route.lazy||M){w=!0,_>=0?m=m.slice(0,_+1):m=[m[0]];break}}}return m.reduceRight((N,P,T)=>{let D,M=!1,L=null,O=null;a&&(D=x&&P.route.id?x[P.route.id]:void 0,L=P.route.errorElement||h0,w&&(_<0&&T===0?(j0("route-fallback"),M=!0,O=null):_===T&&(M=!0,O=P.route.hydrateFallbackElement||null)));let Q=l.concat(m.slice(0,T+1)),A=()=>{let $;return D?$=L:M?$=O:P.route.Component?$=z.createElement(P.route.Component,null):P.route.element?$=P.route.element:$=N,z.createElement(g0,{match:P,routeContext:{outlet:N,matches:Q,isDataRoute:a!=null},children:$})};return a&&(P.route.ErrorBoundary||P.route.errorElement||T===0)?z.createElement(m0,{location:a.location,revalidation:a.revalidation,component:L,error:D,children:A(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):A()},null)}var Jf=function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o}(Jf||{}),Xf=function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o}(Xf||{});function y0(o){let l=z.useContext(Ua);return l||$e(!1),l}function x0(o){let l=z.useContext(s0);return l||$e(!1),l}function w0(o){let l=z.useContext(Nn);return l||$e(!1),l}function Zf(o){let l=w0(),a=l.matches[l.matches.length-1];return a.route.id||$e(!1),a.route.id}function S0(){var o;let l=z.useContext(Kf),a=x0(),c=Zf();return l!==void 0?l:(o=a.errors)==null?void 0:o[c]}function k0(){let{router:o}=y0(Jf.UseNavigateStable),l=Zf(Xf.UseNavigateStable),a=z.useRef(!1);return Gf(()=>{a.current=!0}),z.useCallback(function(f,h){h===void 0&&(h={}),a.current&&(typeof f=="number"?o.navigate(f):o.navigate(f,To({fromRouteId:l},h)))},[o,l])}const ef={};function j0(o,l,a){ef[o]||(ef[o]=!0)}function C0(o,l){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function Qt(o){$e(!1)}function E0(o){let{basename:l="/",children:a=null,location:c,navigationType:f=_n.Pop,navigator:h,static:m=!1,future:x}=o;Do()&&$e(!1);let w=l.replace(/^\/*/,"/"),_=z.useMemo(()=>({basename:w,navigator:h,static:m,future:To({v7_relativeSplatPath:!1},x)}),[w,x,h,m]);typeof c=="string"&&(c=Rr(c));let{pathname:N="/",search:P="",hash:T="",state:D=null,key:M="default"}=c,L=z.useMemo(()=>{let O=Ma(N,w);return O==null?null:{location:{pathname:O,search:P,hash:T,state:D,key:M},navigationType:f}},[w,N,P,T,D,M,f]);return L==null?null:z.createElement(er.Provider,{value:_},z.createElement(ul.Provider,{children:a,value:L}))}function P0(o){let{children:l,location:a}=o;return d0(Na(l),a)}new Promise(()=>{});function Na(o,l){l===void 0&&(l=[]);let a=[];return z.Children.forEach(o,(c,f)=>{if(!z.isValidElement(c))return;let h=[...l,f];if(c.type===z.Fragment){a.push.apply(a,Na(c.props.children,h));return}c.type!==Qt&&$e(!1),!c.props.index||!c.props.children||$e(!1);let m={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=Na(c.props.children,h)),a.push(m)}),a}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o[c]=a[c])}return o},Ta.apply(this,arguments)}function _0(o,l){if(o==null)return{};var a={},c=Object.keys(o),f,h;for(h=0;h<c.length;h++)f=c[h],!(l.indexOf(f)>=0)&&(a[f]=o[f]);return a}function z0(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function N0(o,l){return o.button===0&&(!l||l==="_self")&&!z0(o)}const T0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],L0="6";try{window.__reactRouterVersion=L0}catch{}const I0="startTransition",tf=zm[I0];function R0(o){let{basename:l,children:a,future:c,window:f}=o,h=z.useRef();h.current==null&&(h.current=Om({window:f,v5Compat:!0}));let m=h.current,[x,w]=z.useState({action:m.action,location:m.location}),{v7_startTransition:_}=c||{},N=z.useCallback(P=>{_&&tf?tf(()=>w(P)):w(P)},[w,_]);return z.useLayoutEffect(()=>m.listen(N),[m,N]),z.useEffect(()=>C0(c),[c]),z.createElement(E0,{basename:l,children:a,location:x.location,navigationType:x.action,navigator:m,future:c})}const D0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ep=z.forwardRef(function(l,a){let{onClick:c,relative:f,reloadDocument:h,replace:m,state:x,target:w,to:_,preventScrollReset:N,viewTransition:P}=l,T=_0(l,T0),{basename:D}=z.useContext(er),M,L=!1;if(typeof _=="string"&&O0.test(_)&&(M=_,D0))try{let $=new URL(window.location.href),W=_.startsWith("//")?new URL($.protocol+_):new URL(_),le=Ma(W.pathname,D);W.origin===$.origin&&le!=null?_=le+W.search+W.hash:L=!0}catch{}let O=a0(_,{relative:f}),Q=b0(_,{replace:m,state:x,target:w,preventScrollReset:N,relative:f,viewTransition:P});function A($){c&&c($),$.defaultPrevented||Q($)}return z.createElement("a",Ta({},T,{href:M||O,onClick:L||h?c:A,ref:a,target:w}))});var nf;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(nf||(nf={}));var rf;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(rf||(rf={}));function b0(o,l){let{target:a,replace:c,state:f,preventScrollReset:h,relative:m,viewTransition:x}=l===void 0?{}:l,w=ln(),_=cl(),N=qf(o,{relative:m});return z.useCallback(P=>{if(N0(P,a)){P.preventDefault();let T=c!==void 0?c:tl(_)===tl(N);w(o,{replace:T,state:f,preventScrollReset:h,relative:m,viewTransition:x})}},[_,w,N,c,f,a,o,h,m,x])}var tp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},of=ut.createContext&&ut.createContext(tp),F0=["attr","size","title"];function $0(o,l){if(o==null)return{};var a=A0(o,l),c,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(o);for(f=0;f<h.length;f++)c=h[f],!(l.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(o,c)&&(a[c]=o[c])}return a}function A0(o,l){if(o==null)return{};var a={};for(var c in o)if(Object.prototype.hasOwnProperty.call(o,c)){if(l.indexOf(c)>=0)continue;a[c]=o[c]}return a}function nl(){return nl=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o[c]=a[c])}return o},nl.apply(this,arguments)}function lf(o,l){var a=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);l&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(o,f).enumerable})),a.push.apply(a,c)}return a}function rl(o){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?lf(Object(a),!0).forEach(function(c){M0(o,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):lf(Object(a)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(a,c))})}return o}function M0(o,l,a){return l=U0(l),l in o?Object.defineProperty(o,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[l]=a,o}function U0(o){var l=B0(o,"string");return typeof l=="symbol"?l:l+""}function B0(o,l){if(typeof o!="object"||!o)return o;var a=o[Symbol.toPrimitive];if(a!==void 0){var c=a.call(o,l);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(o)}function np(o){return o&&o.map((l,a)=>ut.createElement(l.tag,rl({key:a},l.attr),np(l.child)))}function Tn(o){return l=>ut.createElement(H0,nl({attr:rl({},o.attr)},l),np(o.child))}function H0(o){var l=a=>{var{attr:c,size:f,title:h}=o,m=$0(o,F0),x=f||a.size||"1em",w;return a.className&&(w=a.className),o.className&&(w=(w?w+" ":"")+o.className),ut.createElement("svg",nl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,c,m,{className:w,style:rl(rl({color:o.color||a.color},a.style),o.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),h&&ut.createElement("title",null,h),o.children)};return of!==void 0?ut.createElement(of.Consumer,null,a=>l(a)):l(tp)}function sf(o){return Tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(o)}function W0(o){return Tn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(o)}function V0(o){return Tn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(o)}function Lo(o){return Tn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(o)}function Io(o){return Tn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(o)}function Q0(o){return Tn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(o)}function Y0(o){return Tn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"},child:[]}]})(o)}function K0(o){return Tn({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(o)}var at=function(){return at=Object.assign||function(l){for(var a,c=1,f=arguments.length;c<f;c++){a=arguments[c];for(var h in a)Object.prototype.hasOwnProperty.call(a,h)&&(l[h]=a[h])}return l},at.apply(this,arguments)};function ol(o,l,a){if(a||arguments.length===2)for(var c=0,f=l.length,h;c<f;c++)(h||!(c in l))&&(h||(h=Array.prototype.slice.call(l,0,c)),h[c]=l[c]);return o.concat(h||Array.prototype.slice.call(l))}var _e="-ms-",zo="-moz-",we="-webkit-",rp="comm",dl="rule",Ba="decl",G0="@import",op="@keyframes",q0="@layer",ip=Math.abs,Ha=String.fromCharCode,La=Object.assign;function J0(o,l){return Ve(o,0)^45?(((l<<2^Ve(o,0))<<2^Ve(o,1))<<2^Ve(o,2))<<2^Ve(o,3):0}function lp(o){return o.trim()}function on(o,l){return(o=l.exec(o))?o[0]:o}function de(o,l,a){return o.replace(l,a)}function qi(o,l,a){return o.indexOf(l,a)}function Ve(o,l){return o.charCodeAt(l)|0}function zr(o,l,a){return o.slice(l,a)}function Yt(o){return o.length}function sp(o){return o.length}function _o(o,l){return l.push(o),o}function X0(o,l){return o.map(l).join("")}function af(o,l){return o.filter(function(a){return!on(a,l)})}var fl=1,Nr=1,ap=0,zt=0,Fe=0,Dr="";function pl(o,l,a,c,f,h,m,x){return{value:o,root:l,parent:a,type:c,props:f,children:h,line:fl,column:Nr,length:m,return:"",siblings:x}}function Pn(o,l){return La(pl("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},l)}function Pr(o){for(;o.root;)o=Pn(o.root,{children:[o]});_o(o,o.siblings)}function Z0(){return Fe}function eg(){return Fe=zt>0?Ve(Dr,--zt):0,Nr--,Fe===10&&(Nr=1,fl--),Fe}function Ft(){return Fe=zt<ap?Ve(Dr,zt++):0,Nr++,Fe===10&&(Nr=1,fl++),Fe}function Xn(){return Ve(Dr,zt)}function Ji(){return zt}function hl(o,l){return zr(Dr,o,l)}function Ia(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tg(o){return fl=Nr=1,ap=Yt(Dr=o),zt=0,[]}function ng(o){return Dr="",o}function ga(o){return lp(hl(zt-1,Ra(o===91?o+2:o===40?o+1:o)))}function rg(o){for(;(Fe=Xn())&&Fe<33;)Ft();return Ia(o)>2||Ia(Fe)>3?"":" "}function og(o,l){for(;--l&&Ft()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return hl(o,Ji()+(l<6&&Xn()==32&&Ft()==32))}function Ra(o){for(;Ft();)switch(Fe){case o:return zt;case 34:case 39:o!==34&&o!==39&&Ra(Fe);break;case 40:o===41&&Ra(o);break;case 92:Ft();break}return zt}function ig(o,l){for(;Ft()&&o+Fe!==57;)if(o+Fe===84&&Xn()===47)break;return"/*"+hl(l,zt-1)+"*"+Ha(o===47?o:Ft())}function lg(o){for(;!Ia(Xn());)Ft();return hl(o,zt)}function sg(o){return ng(Xi("",null,null,null,[""],o=tg(o),0,[0],o))}function Xi(o,l,a,c,f,h,m,x,w){for(var _=0,N=0,P=m,T=0,D=0,M=0,L=1,O=1,Q=1,A=0,$="",W=f,le=h,ie=c,X=$;O;)switch(M=A,A=Ft()){case 40:if(M!=108&&Ve(X,P-1)==58){qi(X+=de(ga(A),"&","&\f"),"&\f",ip(_?x[_-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:X+=ga(A);break;case 9:case 10:case 13:case 32:X+=rg(M);break;case 92:X+=og(Ji()-1,7);continue;case 47:switch(Xn()){case 42:case 47:_o(ag(ig(Ft(),Ji()),l,a,w),w);break;default:X+="/"}break;case 123*L:x[_++]=Yt(X)*Q;case 125*L:case 59:case 0:switch(A){case 0:case 125:O=0;case 59+N:Q==-1&&(X=de(X,/\f/g,"")),D>0&&Yt(X)-P&&_o(D>32?cf(X+";",c,a,P-1,w):cf(de(X," ","")+";",c,a,P-2,w),w);break;case 59:X+=";";default:if(_o(ie=uf(X,l,a,_,N,f,x,$,W=[],le=[],P,h),h),A===123)if(N===0)Xi(X,l,ie,ie,W,h,P,x,le);else switch(T===99&&Ve(X,3)===110?100:T){case 100:case 108:case 109:case 115:Xi(o,ie,ie,c&&_o(uf(o,ie,ie,0,0,f,x,$,f,W=[],P,le),le),f,le,P,x,c?W:le);break;default:Xi(X,ie,ie,ie,[""],le,0,x,le)}}_=N=D=0,L=Q=1,$=X="",P=m;break;case 58:P=1+Yt(X),D=M;default:if(L<1){if(A==123)--L;else if(A==125&&L++==0&&eg()==125)continue}switch(X+=Ha(A),A*L){case 38:Q=N>0?1:(X+="\f",-1);break;case 44:x[_++]=(Yt(X)-1)*Q,Q=1;break;case 64:Xn()===45&&(X+=ga(Ft())),T=Xn(),N=P=Yt($=X+=lg(Ji())),A++;break;case 45:M===45&&Yt(X)==2&&(L=0)}}return h}function uf(o,l,a,c,f,h,m,x,w,_,N,P){for(var T=f-1,D=f===0?h:[""],M=sp(D),L=0,O=0,Q=0;L<c;++L)for(var A=0,$=zr(o,T+1,T=ip(O=m[L])),W=o;A<M;++A)(W=lp(O>0?D[A]+" "+$:de($,/&\f/g,D[A])))&&(w[Q++]=W);return pl(o,l,a,f===0?dl:x,w,_,N,P)}function ag(o,l,a,c){return pl(o,l,a,rp,Ha(Z0()),zr(o,2,-2),0,c)}function cf(o,l,a,c,f){return pl(o,l,a,Ba,zr(o,0,c),zr(o,c+1,-1),c,f)}function up(o,l,a){switch(J0(o,l)){case 5103:return we+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+o+o;case 4789:return zo+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return we+o+zo+o+_e+o+o;case 5936:switch(Ve(o,l+11)){case 114:return we+o+_e+de(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return we+o+_e+de(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return we+o+_e+de(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return we+o+_e+o+o;case 6165:return we+o+_e+"flex-"+o+o;case 5187:return we+o+de(o,/(\w+).+(:[^]+)/,we+"box-$1$2"+_e+"flex-$1$2")+o;case 5443:return we+o+_e+"flex-item-"+de(o,/flex-|-self/g,"")+(on(o,/flex-|baseline/)?"":_e+"grid-row-"+de(o,/flex-|-self/g,""))+o;case 4675:return we+o+_e+"flex-line-pack"+de(o,/align-content|flex-|-self/g,"")+o;case 5548:return we+o+_e+de(o,"shrink","negative")+o;case 5292:return we+o+_e+de(o,"basis","preferred-size")+o;case 6060:return we+"box-"+de(o,"-grow","")+we+o+_e+de(o,"grow","positive")+o;case 4554:return we+de(o,/([^-])(transform)/g,"$1"+we+"$2")+o;case 6187:return de(de(de(o,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),o,"")+o;case 5495:case 3959:return de(o,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return de(de(o,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+o+o;case 4200:if(!on(o,/flex-|baseline/))return _e+"grid-column-align"+zr(o,l)+o;break;case 2592:case 3360:return _e+de(o,"template-","")+o;case 4384:case 3616:return a&&a.some(function(c,f){return l=f,on(c.props,/grid-\w+-end/)})?~qi(o+(a=a[l].value),"span",0)?o:_e+de(o,"-start","")+o+_e+"grid-row-span:"+(~qi(a,"span",0)?on(a,/\d+/):+on(a,/\d+/)-+on(o,/\d+/))+";":_e+de(o,"-start","")+o;case 4896:case 4128:return a&&a.some(function(c){return on(c.props,/grid-\w+-start/)})?o:_e+de(de(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return de(o,/(.+)-inline(.+)/,we+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(o)-1-l>6)switch(Ve(o,l+1)){case 109:if(Ve(o,l+4)!==45)break;case 102:return de(o,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+zo+(Ve(o,l+3)==108?"$3":"$2-$3"))+o;case 115:return~qi(o,"stretch",0)?up(de(o,"stretch","fill-available"),l,a)+o:o}break;case 5152:case 5920:return de(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,h,m,x,w,_){return _e+f+":"+h+_+(m?_e+f+"-span:"+(x?w:+w-+h)+_:"")+o});case 4949:if(Ve(o,l+6)===121)return de(o,":",":"+we)+o;break;case 6444:switch(Ve(o,Ve(o,14)===45?18:11)){case 120:return de(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(Ve(o,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+_e+"$2box$3")+o;case 100:return de(o,":",":"+_e)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(o,"scroll-","scroll-snap-")+o}return o}function il(o,l){for(var a="",c=0;c<o.length;c++)a+=l(o[c],c,o,l)||"";return a}function ug(o,l,a,c){switch(o.type){case q0:if(o.children.length)break;case G0:case Ba:return o.return=o.return||o.value;case rp:return"";case op:return o.return=o.value+"{"+il(o.children,c)+"}";case dl:if(!Yt(o.value=o.props.join(",")))return""}return Yt(a=il(o.children,c))?o.return=o.value+"{"+a+"}":""}function cg(o){var l=sp(o);return function(a,c,f,h){for(var m="",x=0;x<l;x++)m+=o[x](a,c,f,h)||"";return m}}function dg(o){return function(l){l.root||(l=l.return)&&o(l)}}function fg(o,l,a,c){if(o.length>-1&&!o.return)switch(o.type){case Ba:o.return=up(o.value,o.length,a);return;case op:return il([Pn(o,{value:de(o.value,"@","@"+we)})],c);case dl:if(o.length)return X0(a=o.props,function(f){switch(on(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pr(Pn(o,{props:[de(f,/:(read-\w+)/,":"+zo+"$1")]})),Pr(Pn(o,{props:[f]})),La(o,{props:af(a,c)});break;case"::placeholder":Pr(Pn(o,{props:[de(f,/:(plac\w+)/,":"+we+"input-$1")]})),Pr(Pn(o,{props:[de(f,/:(plac\w+)/,":"+zo+"$1")]})),Pr(Pn(o,{props:[de(f,/:(plac\w+)/,_e+"input-$1")]})),Pr(Pn(o,{props:[f]})),La(o,{props:af(a,c)});break}return""})}}var pg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ht={},Tr=typeof process<"u"&&ht!==void 0&&(ht.REACT_APP_SC_ATTR||ht.SC_ATTR)||"data-styled",cp="active",dp="data-styled-version",ml="6.1.18",Wa=`/*!sc*/
`,ll=typeof window<"u"&&typeof document<"u",hg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ht!==void 0&&ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ht.REACT_APP_SC_DISABLE_SPEEDY!==""?ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ht!==void 0&&ht.SC_DISABLE_SPEEDY!==void 0&&ht.SC_DISABLE_SPEEDY!==""&&ht.SC_DISABLE_SPEEDY!=="false"&&ht.SC_DISABLE_SPEEDY),gl=Object.freeze([]),Lr=Object.freeze({});function mg(o,l,a){return a===void 0&&(a=Lr),o.theme!==a.theme&&o.theme||l||a.theme}var fp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vg=/(^-|-$)/g;function df(o){return o.replace(gg,"-").replace(vg,"")}var yg=/(a)(d)/gi,Qi=52,ff=function(o){return String.fromCharCode(o+(o>25?39:97))};function Da(o){var l,a="";for(l=Math.abs(o);l>Qi;l=l/Qi|0)a=ff(l%Qi)+a;return(ff(l%Qi)+a).replace(yg,"$1-$2")}var va,pp=5381,_r=function(o,l){for(var a=l.length;a;)o=33*o^l.charCodeAt(--a);return o},hp=function(o){return _r(pp,o)};function xg(o){return Da(hp(o)>>>0)}function wg(o){return o.displayName||o.name||"Component"}function ya(o){return typeof o=="string"&&!0}var mp=typeof Symbol=="function"&&Symbol.for,gp=mp?Symbol.for("react.memo"):60115,Sg=mp?Symbol.for("react.forward_ref"):60112,kg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cg=((va={})[Sg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},va[gp]=vp,va);function pf(o){return("type"in(l=o)&&l.type.$$typeof)===gp?vp:"$$typeof"in o?Cg[o.$$typeof]:kg;var l}var Eg=Object.defineProperty,Pg=Object.getOwnPropertyNames,hf=Object.getOwnPropertySymbols,_g=Object.getOwnPropertyDescriptor,zg=Object.getPrototypeOf,mf=Object.prototype;function yp(o,l,a){if(typeof l!="string"){if(mf){var c=zg(l);c&&c!==mf&&yp(o,c,a)}var f=Pg(l);hf&&(f=f.concat(hf(l)));for(var h=pf(o),m=pf(l),x=0;x<f.length;++x){var w=f[x];if(!(w in jg||a&&a[w]||m&&w in m||h&&w in h)){var _=_g(l,w);try{Eg(o,w,_)}catch{}}}}return o}function Ir(o){return typeof o=="function"}function Va(o){return typeof o=="object"&&"styledComponentId"in o}function Jn(o,l){return o&&l?"".concat(o," ").concat(l):o||l||""}function gf(o,l){if(o.length===0)return"";for(var a=o[0],c=1;c<o.length;c++)a+=o[c];return a}function Ro(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Oa(o,l,a){if(a===void 0&&(a=!1),!a&&!Ro(o)&&!Array.isArray(o))return l;if(Array.isArray(l))for(var c=0;c<l.length;c++)o[c]=Oa(o[c],l[c]);else if(Ro(l))for(var c in l)o[c]=Oa(o[c],l[c]);return o}function Qa(o,l){Object.defineProperty(o,"toString",{value:l})}function Oo(o){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var Ng=function(){function o(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return o.prototype.indexOfGroup=function(l){for(var a=0,c=0;c<l;c++)a+=this.groupSizes[c];return a},o.prototype.insertRules=function(l,a){if(l>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,h=f;l>=h;)if((h<<=1)<0)throw Oo(16,"".concat(l));this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(var m=f;m<h;m++)this.groupSizes[m]=0}for(var x=this.indexOfGroup(l+1),w=(m=0,a.length);m<w;m++)this.tag.insertRule(x,a[m])&&(this.groupSizes[l]++,x++)},o.prototype.clearGroup=function(l){if(l<this.length){var a=this.groupSizes[l],c=this.indexOfGroup(l),f=c+a;this.groupSizes[l]=0;for(var h=c;h<f;h++)this.tag.deleteRule(c)}},o.prototype.getGroup=function(l){var a="";if(l>=this.length||this.groupSizes[l]===0)return a;for(var c=this.groupSizes[l],f=this.indexOfGroup(l),h=f+c,m=f;m<h;m++)a+="".concat(this.tag.getRule(m)).concat(Wa);return a},o}(),Zi=new Map,sl=new Map,el=1,Yi=function(o){if(Zi.has(o))return Zi.get(o);for(;sl.has(el);)el++;var l=el++;return Zi.set(o,l),sl.set(l,o),l},Tg=function(o,l){el=l+1,Zi.set(o,l),sl.set(l,o)},Lg="style[".concat(Tr,"][").concat(dp,'="').concat(ml,'"]'),Ig=new RegExp("^".concat(Tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rg=function(o,l,a){for(var c,f=a.split(","),h=0,m=f.length;h<m;h++)(c=f[h])&&o.registerName(l,c)},Dg=function(o,l){for(var a,c=((a=l.textContent)!==null&&a!==void 0?a:"").split(Wa),f=[],h=0,m=c.length;h<m;h++){var x=c[h].trim();if(x){var w=x.match(Ig);if(w){var _=0|parseInt(w[1],10),N=w[2];_!==0&&(Tg(N,_),Rg(o,N,w[3]),o.getTag().insertRules(_,f)),f.length=0}else f.push(x)}}},vf=function(o){for(var l=document.querySelectorAll(Lg),a=0,c=l.length;a<c;a++){var f=l[a];f&&f.getAttribute(Tr)!==cp&&(Dg(o,f),f.parentNode&&f.parentNode.removeChild(f))}};function Og(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xp=function(o){var l=document.head,a=o||l,c=document.createElement("style"),f=function(x){var w=Array.from(x.querySelectorAll("style[".concat(Tr,"]")));return w[w.length-1]}(a),h=f!==void 0?f.nextSibling:null;c.setAttribute(Tr,cp),c.setAttribute(dp,ml);var m=Og();return m&&c.setAttribute("nonce",m),a.insertBefore(c,h),c},bg=function(){function o(l){this.element=xp(l),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var c=document.styleSheets,f=0,h=c.length;f<h;f++){var m=c[f];if(m.ownerNode===a)return m}throw Oo(17)}(this.element),this.length=0}return o.prototype.insertRule=function(l,a){try{return this.sheet.insertRule(a,l),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},o.prototype.getRule=function(l){var a=this.sheet.cssRules[l];return a&&a.cssText?a.cssText:""},o}(),Fg=function(){function o(l){this.element=xp(l),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(l,a){if(l<=this.length&&l>=0){var c=document.createTextNode(a);return this.element.insertBefore(c,this.nodes[l]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},o.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},o}(),$g=function(){function o(l){this.rules=[],this.length=0}return o.prototype.insertRule=function(l,a){return l<=this.length&&(this.rules.splice(l,0,a),this.length++,!0)},o.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},o.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},o}(),yf=ll,Ag={isServer:!ll,useCSSOMInjection:!hg},wp=function(){function o(l,a,c){l===void 0&&(l=Lr),a===void 0&&(a={});var f=this;this.options=at(at({},Ag),l),this.gs=a,this.names=new Map(c),this.server=!!l.isServer,!this.server&&ll&&yf&&(yf=!1,vf(this)),Qa(this,function(){return function(h){for(var m=h.getTag(),x=m.length,w="",_=function(P){var T=function(Q){return sl.get(Q)}(P);if(T===void 0)return"continue";var D=h.names.get(T),M=m.getGroup(P);if(D===void 0||!D.size||M.length===0)return"continue";var L="".concat(Tr,".g").concat(P,'[id="').concat(T,'"]'),O="";D!==void 0&&D.forEach(function(Q){Q.length>0&&(O+="".concat(Q,","))}),w+="".concat(M).concat(L,'{content:"').concat(O,'"}').concat(Wa)},N=0;N<x;N++)_(N);return w}(f)})}return o.registerId=function(l){return Yi(l)},o.prototype.rehydrate=function(){!this.server&&ll&&vf(this)},o.prototype.reconstructWithOptions=function(l,a){return a===void 0&&(a=!0),new o(at(at({},this.options),l),this.gs,a&&this.names||void 0)},o.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(l=function(a){var c=a.useCSSOMInjection,f=a.target;return a.isServer?new $g(f):c?new bg(f):new Fg(f)}(this.options),new Ng(l)));var l},o.prototype.hasNameForId=function(l,a){return this.names.has(l)&&this.names.get(l).has(a)},o.prototype.registerName=function(l,a){if(Yi(l),this.names.has(l))this.names.get(l).add(a);else{var c=new Set;c.add(a),this.names.set(l,c)}},o.prototype.insertRules=function(l,a,c){this.registerName(l,a),this.getTag().insertRules(Yi(l),c)},o.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},o.prototype.clearRules=function(l){this.getTag().clearGroup(Yi(l)),this.clearNames(l)},o.prototype.clearTag=function(){this.tag=void 0},o}(),Mg=/&/g,Ug=/^\s*\/\/.*$/gm;function Sp(o,l){return o.map(function(a){return a.type==="rule"&&(a.value="".concat(l," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(l," ")),a.props=a.props.map(function(c){return"".concat(l," ").concat(c)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Sp(a.children,l)),a})}function Bg(o){var l,a,c,f=Lr,h=f.options,m=h===void 0?Lr:h,x=f.plugins,w=x===void 0?gl:x,_=function(T,D,M){return M.startsWith(a)&&M.endsWith(a)&&M.replaceAll(a,"").length>0?".".concat(l):T},N=w.slice();N.push(function(T){T.type===dl&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(Mg,a).replace(c,_))}),m.prefix&&N.push(fg),N.push(ug);var P=function(T,D,M,L){D===void 0&&(D=""),M===void 0&&(M=""),L===void 0&&(L="&"),l=L,a=D,c=new RegExp("\\".concat(a,"\\b"),"g");var O=T.replace(Ug,""),Q=sg(M||D?"".concat(M," ").concat(D," { ").concat(O," }"):O);m.namespace&&(Q=Sp(Q,m.namespace));var A=[];return il(Q,cg(N.concat(dg(function($){return A.push($)})))),A};return P.hash=w.length?w.reduce(function(T,D){return D.name||Oo(15),_r(T,D.name)},pp).toString():"",P}var Hg=new wp,ba=Bg(),kp=ut.createContext({shouldForwardProp:void 0,styleSheet:Hg,stylis:ba});kp.Consumer;ut.createContext(void 0);function xf(){return z.useContext(kp)}var Wg=function(){function o(l,a){var c=this;this.inject=function(f,h){h===void 0&&(h=ba);var m=c.name+h.hash;f.hasNameForId(c.id,m)||f.insertRules(c.id,m,h(c.rules,m,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=a,Qa(this,function(){throw Oo(12,String(c.name))})}return o.prototype.getName=function(l){return l===void 0&&(l=ba),this.name+l.hash},o}(),Vg=function(o){return o>="A"&&o<="Z"};function wf(o){for(var l="",a=0;a<o.length;a++){var c=o[a];if(a===1&&c==="-"&&o[0]==="-")return o;Vg(c)?l+="-"+c.toLowerCase():l+=c}return l.startsWith("ms-")?"-"+l:l}var jp=function(o){return o==null||o===!1||o===""},Cp=function(o){var l,a,c=[];for(var f in o){var h=o[f];o.hasOwnProperty(f)&&!jp(h)&&(Array.isArray(h)&&h.isCss||Ir(h)?c.push("".concat(wf(f),":"),h,";"):Ro(h)?c.push.apply(c,ol(ol(["".concat(f," {")],Cp(h),!1),["}"],!1)):c.push("".concat(wf(f),": ").concat((l=f,(a=h)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||l in pg||l.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return c};function Zn(o,l,a,c){if(jp(o))return[];if(Va(o))return[".".concat(o.styledComponentId)];if(Ir(o)){if(!Ir(h=o)||h.prototype&&h.prototype.isReactComponent||!l)return[o];var f=o(l);return Zn(f,l,a,c)}var h;return o instanceof Wg?a?(o.inject(a,c),[o.getName(c)]):[o]:Ro(o)?Cp(o):Array.isArray(o)?Array.prototype.concat.apply(gl,o.map(function(m){return Zn(m,l,a,c)})):[o.toString()]}function Qg(o){for(var l=0;l<o.length;l+=1){var a=o[l];if(Ir(a)&&!Va(a))return!1}return!0}var Yg=hp(ml),Kg=function(){function o(l,a,c){this.rules=l,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&Qg(l),this.componentId=a,this.baseHash=_r(Yg,a),this.baseStyle=c,wp.registerId(a)}return o.prototype.generateAndInjectStyles=function(l,a,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,a,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))f=Jn(f,this.staticRulesId);else{var h=gf(Zn(this.rules,l,a,c)),m=Da(_r(this.baseHash,h)>>>0);if(!a.hasNameForId(this.componentId,m)){var x=c(h,".".concat(m),void 0,this.componentId);a.insertRules(this.componentId,m,x)}f=Jn(f,m),this.staticRulesId=m}else{for(var w=_r(this.baseHash,c.hash),_="",N=0;N<this.rules.length;N++){var P=this.rules[N];if(typeof P=="string")_+=P;else if(P){var T=gf(Zn(P,l,a,c));w=_r(w,T+N),_+=T}}if(_){var D=Da(w>>>0);a.hasNameForId(this.componentId,D)||a.insertRules(this.componentId,D,c(_,".".concat(D),void 0,this.componentId)),f=Jn(f,D)}}return f},o}(),Ep=ut.createContext(void 0);Ep.Consumer;var xa={};function Gg(o,l,a){var c=Va(o),f=o,h=!ya(o),m=l.attrs,x=m===void 0?gl:m,w=l.componentId,_=w===void 0?function(W,le){var ie=typeof W!="string"?"sc":df(W);xa[ie]=(xa[ie]||0)+1;var X="".concat(ie,"-").concat(xg(ml+ie+xa[ie]));return le?"".concat(le,"-").concat(X):X}(l.displayName,l.parentComponentId):w,N=l.displayName,P=N===void 0?function(W){return ya(W)?"styled.".concat(W):"Styled(".concat(wg(W),")")}(o):N,T=l.displayName&&l.componentId?"".concat(df(l.displayName),"-").concat(l.componentId):l.componentId||_,D=c&&f.attrs?f.attrs.concat(x).filter(Boolean):x,M=l.shouldForwardProp;if(c&&f.shouldForwardProp){var L=f.shouldForwardProp;if(l.shouldForwardProp){var O=l.shouldForwardProp;M=function(W,le){return L(W,le)&&O(W,le)}}else M=L}var Q=new Kg(a,T,c?f.componentStyle:void 0);function A(W,le){return function(ie,X,V){var ee=ie.attrs,pe=ie.componentStyle,ce=ie.defaultProps,he=ie.foldedComponentIds,Se=ie.styledComponentId,ze=ie.target,tt=ut.useContext(Ep),Ue=xf(),je=ie.shouldForwardProp||Ue.shouldForwardProp,U=mg(X,tt,ce)||Lr,q=function(ne,se,xe){for(var me,ve=at(at({},se),{className:void 0,theme:xe}),Qe=0;Qe<ne.length;Qe+=1){var Gt=Ir(me=ne[Qe])?me(ve):me;for(var Nt in Gt)ve[Nt]=Nt==="className"?Jn(ve[Nt],Gt[Nt]):Nt==="style"?at(at({},ve[Nt]),Gt[Nt]):Gt[Nt]}return se.className&&(ve.className=Jn(ve.className,se.className)),ve}(ee,X,U),B=q.as||ze,g={};for(var E in q)q[E]===void 0||E[0]==="$"||E==="as"||E==="theme"&&q.theme===U||(E==="forwardedAs"?g.as=q.forwardedAs:je&&!je(E,B)||(g[E]=q[E]));var Z=function(ne,se){var xe=xf(),me=ne.generateAndInjectStyles(se,xe.styleSheet,xe.stylis);return me}(pe,q),te=Jn(he,Se);return Z&&(te+=" "+Z),q.className&&(te+=" "+q.className),g[ya(B)&&!fp.has(B)?"class":"className"]=te,V&&(g.ref=V),z.createElement(B,g)}($,W,le)}A.displayName=P;var $=ut.forwardRef(A);return $.attrs=D,$.componentStyle=Q,$.displayName=P,$.shouldForwardProp=M,$.foldedComponentIds=c?Jn(f.foldedComponentIds,f.styledComponentId):"",$.styledComponentId=T,$.target=c?f.target:o,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=c?function(le){for(var ie=[],X=1;X<arguments.length;X++)ie[X-1]=arguments[X];for(var V=0,ee=ie;V<ee.length;V++)Oa(le,ee[V],!0);return le}({},f.defaultProps,W):W}}),Qa($,function(){return".".concat($.styledComponentId)}),h&&yp($,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function Sf(o,l){for(var a=[o[0]],c=0,f=l.length;c<f;c+=1)a.push(l[c],o[c+1]);return a}var kf=function(o){return Object.assign(o,{isCss:!0})};function qg(o){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];if(Ir(o)||Ro(o))return kf(Zn(Sf(gl,ol([o],l,!0))));var c=o;return l.length===0&&c.length===1&&typeof c[0]=="string"?Zn(c):kf(Zn(Sf(c,l)))}function Fa(o,l,a){if(a===void 0&&(a=Lr),!l)throw Oo(1,l);var c=function(f){for(var h=[],m=1;m<arguments.length;m++)h[m-1]=arguments[m];return o(l,a,qg.apply(void 0,ol([f],h,!1)))};return c.attrs=function(f){return Fa(o,l,at(at({},a),{attrs:Array.prototype.concat(a.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return Fa(o,l,at(at({},a),f))},c}var Pp=function(o){return Fa(Gg,o)},j=Pp;fp.forEach(function(o){j[o]=Pp(o)});const Jg=j.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(315deg, #ff7f50 0%,rgb(255, 157, 53) 50%, #40e0d0 100%);
`,Xg=j.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  height: 100vh;
`,Zg=j.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`,e1=j.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  white-space: nowrap;
`,t1=j.span`
  font-size: 3rem;
`,jf=j.p`
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
`,n1=j.div`
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
`,r1=j.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,o1=j.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,Cf=j.div`
  margin-bottom: 1.5rem;
`,Ef=j.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`,i1=j.div`
  position: relative;
`,Pf=j.input`
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
`,l1=j.button`
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
`,s1=j.button`
  width: 100%;
  padding: 0.875rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 1rem;

  background-color: ${o=>o.isComplete?"#ff7f50":"#999"};
  color: white;

  &:hover {
    background-color: ${o=>o.isComplete?"#ff6b35":"#888"};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,a1=j.button`
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
`,u1=j.button`
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
`,c1=j.div`
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,d1=j.div`
  background-color: #efe;
  color: #3c3;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,_f=()=>{const o=ln(),[l,a]=z.useState({email:"",password:""}),[c,f]=z.useState(!1),[h,m]=z.useState(""),[x,w]=z.useState(""),[_,N]=z.useState(!1);z.useEffect(()=>(localStorage.removeItem("token"),document.body.classList.add("auth-page"),()=>{document.body.classList.remove("auth-page")}),[]);const P=Q=>{const{name:A,value:$}=Q.target;a(W=>({...W,[A]:$})),h&&m("")},T=Q=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Q),D=()=>!l.email||!l.password?(m("Email and password are required"),!1):T(l.email)?l.password.length<6?(m("Password must be at least 6 characters long"),!1):!0:(m("Please enter a valid email address"),!1),M=()=>l.email.trim()!==""&&l.password.trim()!==""&&T(l.email)&&l.password.length>=6,L=async Q=>{if(Q.preventDefault(),m(""),w(""),!!D()){N(!0);try{const A=await fetch("http://localhost:8080/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.email,password:l.password})});if(A.ok){const $=await A.json();localStorage.setItem("token",$.token),localStorage.setItem("user",JSON.stringify($.user)),w("Login successful!"),setTimeout(()=>{o("/dashboard")},1e3)}else{const $=await A.json();m($.message||"Login failed. Please check your credentials.")}}catch(A){console.error("Login error:",A),m("Unable to connect to server. Please try again later.")}finally{N(!1)}}},O=()=>{m(""),w("Password reset functionality coming soon.")};return u.jsx(Jg,{children:u.jsxs(Xg,{children:[u.jsxs(Zg,{children:[u.jsxs(e1,{children:[u.jsx(t1,{children:"🏠"}),"Home Control Hub"]}),u.jsx(jf,{children:"Welcome back!"}),u.jsx(jf,{children:"Please log in to access your smart home dashboard."})]}),u.jsxs(n1,{children:[u.jsxs(r1,{children:[u.jsx(o1,{children:"Login"}),h&&u.jsx(c1,{children:h}),x&&u.jsx(d1,{children:x}),u.jsxs("form",{onSubmit:L,children:[u.jsxs(Cf,{children:[u.jsx(Ef,{htmlFor:"email",children:"Your email"}),u.jsx(Pf,{type:"email",id:"email",name:"email",value:l.email,onChange:P,placeholder:"Enter your email",required:!0})]}),u.jsxs(Cf,{children:[u.jsxs(Ef,{htmlFor:"password",children:["Your password",u.jsxs(l1,{type:"button",onClick:()=>f(!c),children:[c?u.jsx(Lo,{}):u.jsx(Io,{}),u.jsx("span",{children:"Show"})]})]}),u.jsx(i1,{children:u.jsx(Pf,{type:c?"text":"password",id:"password",name:"password",value:l.password,onChange:P,placeholder:"Enter your password",required:!0})})]}),u.jsx(s1,{type:"submit",disabled:_,isComplete:M(),children:_?"Please wait...":"Log in"}),u.jsx(a1,{onClick:O,children:"Forget your password?"})]})]}),u.jsx(u1,{as:ep,to:"/register",children:"Create an account"})]})]})})},f1=j.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(315deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
`,p1=j.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  height: 100vh;
`,h1=j.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`,m1=j.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  white-space: nowrap;
`,g1=j.span`
  font-size: 3rem;
`,zf=j.p`
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
`,v1=j.div`
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
`,y1=j.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,x1=j.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,ko=j.div`
  margin-bottom: 1.5rem;
`,jo=j.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`,Nf=j.div`
  position: relative;
`,Co=j.input`
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
`,Tf=j.button`
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
`,w1=j.button`
  width: 100%;
  padding: 0.875rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 1rem;

  background-color: ${o=>o.isComplete?"#ff7f50":"#999"};
  color: white;

  &:hover {
    background-color: ${o=>o.isComplete?"#ff6b35":"#888"};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,S1=j.button`
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
`,k1=j.div`
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,j1=j.div`
  background-color: #efe;
  color: #3c3;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,C1=()=>{const o=ln(),[l,a]=z.useState({fullName:"",username:"",email:"",password:"",confirmPassword:""}),[c,f]=z.useState(!1),[h,m]=z.useState(!1),[x,w]=z.useState(""),[_,N]=z.useState(""),[P,T]=z.useState(!1);z.useEffect(()=>(document.body.classList.add("auth-page"),()=>{document.body.classList.remove("auth-page")}),[]);const D=A=>{const{name:$,value:W}=A.target;a(le=>({...le,[$]:W})),x&&w("")},M=A=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A),L=()=>!l.fullName||!l.username||!l.email||!l.password||!l.confirmPassword?(w("All fields are required"),!1):M(l.email)?l.password.length<6?(w("Password must be at least 6 characters long"),!1):l.password!==l.confirmPassword?(w("Passwords do not match"),!1):!0:(w("Please enter a valid email address"),!1),O=()=>l.fullName.trim()!==""&&l.username.trim()!==""&&l.email.trim()!==""&&l.password.trim()!==""&&l.confirmPassword.trim()!==""&&M(l.email)&&l.password.length>=6&&l.password===l.confirmPassword,Q=async A=>{if(A.preventDefault(),w(""),N(""),!!L()){T(!0);try{const $=await fetch("http://localhost:8080/api/v1/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:l.username,email:l.email,password:l.password})});if($.ok){const W=await $.json();N("Registration successful! Redirecting to login..."),setTimeout(()=>{o("/login")},2e3)}else{const W=await $.json();w(W.message||"Registration failed. Please try again.")}}catch($){console.error("Registration error:",$),w("Unable to connect to server. Please try again later.")}finally{T(!1)}}};return u.jsx(f1,{children:u.jsxs(p1,{children:[u.jsxs(h1,{children:[u.jsxs(m1,{children:[u.jsx(g1,{children:"🏠"}),"Home Control Hub"]}),u.jsx(zf,{children:"Welcome!"}),u.jsx(zf,{children:"Register to access your smart home dashboard."})]}),u.jsxs(v1,{children:[u.jsxs(y1,{children:[u.jsx(x1,{children:"Create an account"}),x&&u.jsx(k1,{children:x}),_&&u.jsx(j1,{children:_}),u.jsxs("form",{onSubmit:Q,children:[u.jsxs(ko,{children:[u.jsx(jo,{htmlFor:"fullName",children:"Full name"}),u.jsx(Co,{type:"text",id:"fullName",name:"fullName",value:l.fullName,onChange:D,placeholder:"Enter your full name",required:!0})]}),u.jsxs(ko,{children:[u.jsx(jo,{htmlFor:"username",children:"Username"}),u.jsx(Co,{type:"text",id:"username",name:"username",value:l.username,onChange:D,placeholder:"Enter your username",required:!0})]}),u.jsxs(ko,{children:[u.jsx(jo,{htmlFor:"email",children:"E-mail"}),u.jsx(Co,{type:"email",id:"email",name:"email",value:l.email,onChange:D,placeholder:"Enter your email",required:!0})]}),u.jsxs(ko,{children:[u.jsxs(jo,{htmlFor:"password",children:["Password",u.jsxs(Tf,{type:"button",onClick:()=>f(!c),children:[c?u.jsx(Lo,{}):u.jsx(Io,{}),u.jsx("span",{children:"Show"})]})]}),u.jsx(Nf,{children:u.jsx(Co,{type:c?"text":"password",id:"password",name:"password",value:l.password,onChange:D,placeholder:"Enter your password",required:!0})})]}),u.jsxs(ko,{children:[u.jsxs(jo,{htmlFor:"confirmPassword",children:["Confirm password",u.jsxs(Tf,{type:"button",onClick:()=>m(!h),children:[h?u.jsx(Lo,{}):u.jsx(Io,{}),u.jsx("span",{children:"Show"})]})]}),u.jsx(Nf,{children:u.jsx(Co,{type:h?"text":"password",id:"confirmPassword",name:"confirmPassword",value:l.confirmPassword,onChange:D,placeholder:"Confirm your password",required:!0})})]}),u.jsx(w1,{type:"submit",disabled:P,isComplete:O(),children:P?"Please wait...":"Register"})]})]}),u.jsx(S1,{as:ep,to:"/login",children:"Login"})]})]})})},St=j.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`,kt=j.header`
  background: linear-gradient(270deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`,jt=j.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Ct=j.span`
  font-size: 1.5rem;
`,Et=j.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`,Pt=j.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,ae=j.button`
  background: ${({selected:o})=>o?"rgba(255,255,255,0.2)":"none"};
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.5s, box-shadow 1s cubic-bezier(.4,2,.3,1), transform 1s cubic-bezier(.4,2,.3,1);
  box-shadow: ${({selected:o})=>o?"0 4px 16px 0 rgba(0,0,0,0.10)":"none"};
  z-index: 1;

  &:hover {
    background-color: ${({selected:o})=>o?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.15)"};
    box-shadow: ${({selected:o})=>o?"0 4px 16px 0 rgba(0,0,0,0.10)":"0 8px 24px 0 rgba(0,0,0,0.18)"};
    transform: ${({selected:o})=>o?"none":"translateY(-4px) scale(1.04)"};
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`,_t=j.button`
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
`,Kt=j.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Ya=j.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;
  font-weight: 600;
`,wa=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`,Sa=j.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,$a=j.button`
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
`,Lf=j.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
`,If=j.thead`
  background-color: #f8f9fa;
`,Eo=j.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`,Ie=j.td`
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
`;j.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  background-color: ${o=>o.status==="On"?"#28a745":"#dc3545"};
`;const Rf=j.button`
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
`,_p=j.button`
  width: 44px;
  height: 24px;
  border-radius: 12px;
  border: none;
  background: ${({checked:o})=>o?"#28a745":"#dc3545"};
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  outline: none;
  margin-left: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: ${({checked:o})=>o?"22px":"2px"};
    top: 2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    transition: left 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  }
`,E1=j.div`
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
`,P1=j.div`
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
`,_1=j.div`
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

  ${$a} {
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
`,z1=j.div`
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 123, 255, 0.1);
`,N1=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,T1=j.div`
  flex: 1;
`,L1=j.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: white;
`,I1=j.p`
  font-size: 1rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
`,R1=j.button`
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
`,D1=()=>{const o=ln(),[l,a]=z.useState([]),[c,f]=z.useState([]),[h,m]=z.useState(!0),[x,w]=z.useState(null),[_,N]=z.useState(null),[P,T]=z.useState(!1),[D,M]=z.useState(null);z.useEffect(()=>{document.body.classList.remove("auth-page");const V=localStorage.getItem("user");if(V)try{const ee=JSON.parse(V);N(ee.role),M(ee),!localStorage.getItem(`welcomed_${ee.id}`)&&ee.role==="STANDARD_USER"&&T(!0)}catch(ee){console.error("Error parsing user data:",ee)}},[]),z.useEffect(()=>{_!==null&&(async()=>{try{const ee=localStorage.getItem("token");if(!ee){o("/login");return}const pe=await fetch("http://localhost:8080/api/v1/devices",{method:"GET",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"}});if(pe.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),o("/login");return}if(!pe.ok)throw new Error(`HTTP error! status: ${pe.status}`);const ce=await pe.json();if(a(ce),_==="STANDARD_USER"){const he=await fetch("http://localhost:8080/api/v1/notifications",{method:"GET",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"}});if(he.ok){const Se=await he.json();f(Se)}}}catch(ee){console.error("Error fetching data:",ee),w("Failed to load data. Please try again.")}finally{m(!1)}})()},[o,_]);const L=_==="ADMIN",O=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),o("/login")},Q=()=>{o("/add-device")},A=V=>{o(`/device/${V}`)},$=async V=>{try{const ee=localStorage.getItem("token");if(!ee){o("/login");return}const pe=l.find(Se=>Se.id===V);if(!pe)return;const ce=!pe.status;if(a(Se=>Se.map(ze=>ze.id===V?{...ze,status:ce}:ze)),!(await fetch(`http://localhost:8080/api/v1/devices/${V}/status`,{method:"PUT",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"},body:JSON.stringify({status:ce})})).ok)throw a(Se=>Se.map(ze=>ze.id===V?{...ze,status:!ce}:ze)),new Error("Failed to update device status");localStorage.setItem(`device_updated_${V}`,Date.now().toString()),setTimeout(()=>{localStorage.removeItem(`device_updated_${V}`)},1e3)}catch(ee){console.error("Error toggling device status:",ee)}},W=async V=>{try{const ee=localStorage.getItem("token");if(!ee){o("/login");return}if(f(ce=>ce.map(he=>he.id===V?{...he,read:!0}:he)),!(await fetch(`http://localhost:8080/api/v1/notifications/${V}/read`,{method:"PUT",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"}})).ok)throw f(ce=>ce.map(he=>he.id===V?{...he,read:!1}:he)),new Error("Failed to mark notification as read")}catch(ee){console.error("Error marking notification as read:",ee)}},le=()=>{D&&(localStorage.setItem(`welcomed_${D.id}`,"true"),T(!1))},ie=V=>{if(!V)return"Unknown";switch(V){case"DEVICE_ADDED":return"Device added";case"WELCOME":return"Welcome";case"CRITICAL":return"Critical";case"SYSTEM":return"System";case"ADMIN":return"Admin";default:return V.toLowerCase().replace(/_/g," ")}},X=V=>{const ee=new Date(V),ce=Math.floor((new Date().getTime()-ee.getTime())/(1e3*60*60));return ce<1?"Just now":ce<24?`${ce}h ago`:`${Math.floor(ce/24)}d ago`};return h?u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{selected:!0,onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:O,children:"Logout"})]})]}),u.jsx(E1,{children:"Loading your devices..."})]}):x?u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{selected:!0,onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:O,children:"Logout"})]})]}),u.jsx(P1,{children:u.jsxs("div",{children:[u.jsx("h3",{children:"Oops! Something went wrong"}),u.jsx("p",{children:x}),u.jsx("button",{onClick:()=>window.location.reload(),children:"Try Again"})]})})]}):u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{selected:!0,onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:O,children:"Logout"})]})]}),u.jsxs(Kt,{children:[P&&D&&u.jsx(z1,{children:u.jsxs(N1,{children:[u.jsxs(T1,{children:[u.jsxs(L1,{children:["Welcome to Home Control Hub, ",D.username,"! 🎉"]}),u.jsx(I1,{children:"You can now manage and monitor all your smart devices from this dashboard. Add your devices, check their status, and receive important notifications all in one place."})]}),u.jsx(R1,{onClick:le,children:"Got it, thanks!"})]})}),l.length===0?u.jsxs(u.Fragment,{children:[u.jsxs(wa,{children:[u.jsx(Sa,{children:L?"System Overview":"Interactive dashboard"}),!L&&u.jsx("div",{})]}),u.jsx(_1,{children:L?u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"No devices in the system"}),u.jsx("p",{children:"There are currently no devices registered in the Home Control Hub system. Users can add devices to start monitoring and controlling them."})]}):u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"No devices found"}),u.jsx("p",{children:"You haven't added any devices yet. Get started by adding your first smart device!"}),u.jsx($a,{onClick:Q,children:"Add your first device"})]})})]}):u.jsxs(u.Fragment,{children:[u.jsxs(wa,{children:[u.jsx(Sa,{children:L?"All System Devices":"Your Devices"}),!L&&u.jsx($a,{onClick:Q,children:"Add Device"})]}),u.jsxs(Lf,{children:[u.jsx(If,{children:u.jsxs(Eo,{children:[u.jsx(Ie,{as:"th",children:"Device name"}),u.jsx(Ie,{as:"th",children:"ID"}),u.jsx(Ie,{as:"th",children:"Type"}),u.jsx(Ie,{as:"th",children:"Location"}),u.jsx(Ie,{as:"th",children:"Status"}),u.jsx(Ie,{as:"th",children:"Actions"})]})}),u.jsx("tbody",{children:l.map(V=>u.jsxs(Eo,{children:[u.jsx(Ie,{children:V.name}),u.jsx(Ie,{children:V.id}),u.jsx(Ie,{children:V.type}),u.jsx(Ie,{children:V.location}),u.jsx(Ie,{children:L?u.jsx("span",{style:{color:V.status?"#4CAF50":"#f44336",fontWeight:"bold"},children:V.status?"ON":"OFF"}):u.jsx(_p,{checked:V.status,onClick:()=>$(V.id),"aria-label":`Toggle ${V.name}`})}),u.jsx(Ie,{children:u.jsx(Rf,{onClick:()=>A(V.id),children:L?"View Details":"Details"})})]},V.id))})]})]}),!L&&u.jsxs(u.Fragment,{children:[u.jsx(wa,{style:{marginTop:"3rem"},children:u.jsx(Sa,{children:"Your notifications"})}),u.jsxs(Lf,{children:[u.jsx(If,{children:u.jsxs(Eo,{children:[u.jsx(Ie,{as:"th",children:"Message"}),u.jsx(Ie,{as:"th",children:"Type"}),u.jsx(Ie,{as:"th",children:"Time"}),u.jsx(Ie,{as:"th",children:"Status"}),u.jsx(Ie,{as:"th",children:"Actions"})]})}),u.jsx("tbody",{children:c.length===0?u.jsx(Eo,{children:u.jsx(Ie,{colSpan:5,style:{textAlign:"center",padding:"2rem",color:"#666"},children:"No notifications yet. You'll see important updates about your devices here."})}):c.map(V=>u.jsxs(Eo,{children:[u.jsx(Ie,{style:{fontWeight:V.read?"normal":"bold",color:V.read?"#666":"#333"},children:V.message}),u.jsx(Ie,{style:{textTransform:"capitalize"},children:ie(V.type)}),u.jsx(Ie,{children:X(V.createdAt)}),u.jsx(Ie,{children:u.jsx("span",{style:{color:V.read?"#4CAF50":"#ff9800",fontWeight:"bold",fontSize:"0.8rem"},children:V.read?"READ":"UNREAD"})}),u.jsx(Ie,{children:!V.read&&u.jsx(Rf,{onClick:()=>W(V.id),children:"Mark as Read"})})]},V.id))})]})]})]})]})},O1=j.div`
  max-width: 700px;
  margin: 0 auto;
`,b1=j.div`
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background: #fff;
`,F1=j.button`
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
  border-bottom: ${({isOpen:o})=>o?"1px solid #eee":"none"};
  border-radius: ${({isOpen:o})=>o?"8px 8px 0 0":"8px"};
  transition: background 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`,$1=j.span`
  font-size: 1.5rem;
  margin-left: 12px;
  transition: transform 0.3s;
  transform: ${({isOpen:o})=>"rotate(0deg)"};
`,A1=j.div`
  max-height: ${({isOpen:o})=>o?"200px":"0"};
  opacity: ${({isOpen:o})=>o?"1":"0"};
  overflow: hidden;
  transition: max-height 0.8s cubic-bezier(0.4, 2, 0.3, 1), opacity 0.6s;
  padding: ${({isOpen:o})=>o?"1.25rem 1.5rem":"0 1.5rem"};
  font-size: 1rem;
  color: #444;
  background: #fafbfc;
  border-radius: 0 0 8px 8px;
  border-top: ${({isOpen:o})=>o?"1px solid #eee":"none"};
`,M1=[{question:"What is Home Control Hub?",answer:"Home Control Hub is a platform that allows you to manage and monitor your smart home devices from a single dashboard."},{question:"How do I add a new device?",answer:"Go to the Dashboard page and click on 'Add a device'. Follow the instructions to connect your new device."},{question:"Is my data secure?",answer:"Yes, we use industry-standard encryption and security practices to keep your data safe."},{question:"Can I control my devices remotely?",answer:"Absolutely! As long as you have an internet connection, you can control your devices from anywhere."},{question:"Who can I contact for support?",answer:"You can reach our support team via the 'Support' link in the header navigation."},{question:"How do I reset my password?",answer:"Go to the login page and click on 'Forget your password?'. Follow the instructions to reset your password."}],U1=()=>{const[o,l]=z.useState([]),a=ln(),c=h=>{l(m=>m.includes(h)?m.filter(x=>x!==h):[...m,h])},f=()=>{localStorage.removeItem("token"),a("/login")};return u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{onClick:()=>a("/profile"),children:"Profile"}),u.jsx(ae,{onClick:()=>a("/dashboard"),children:"Dashboard"}),u.jsx(ae,{selected:!0,onClick:()=>a("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>a("/support"),children:"Support"}),u.jsx(_t,{onClick:f,children:"Logout"})]})]}),u.jsxs(Kt,{children:[u.jsx(Ya,{children:"Frequently Asked Questions"}),u.jsx(O1,{children:M1.map((h,m)=>{const x=o.includes(m);return u.jsxs(b1,{children:[u.jsxs(F1,{onClick:()=>c(m),isOpen:x,"aria-expanded":x,children:[h.question,u.jsx($1,{isOpen:x,children:x?"−":"+"})]}),u.jsx(A1,{isOpen:x,children:x&&h.answer})]},m)})})]})]})},B1=j.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ka=j.div`
  display: flex;
  flex-direction: column;
`,ja=j.label`
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: #333;
`,H1=j.select`
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
`,W1=j.input`
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
`,V1=j.textarea`
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
`,Q1=j.input`
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
`,Y1=j.ul`
  margin-top: 8px;
  font-size: 0.95rem;
  color: #555;
  list-style-type: disc;
  padding-left: 1.5rem;
`,K1=j.button`
  background: ${({disabled:o})=>o?"#ccc":"linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
  margin-top: 8px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    transform: ${({disabled:o})=>o?"none":"translateY(-2px)"};
  }

  &:active {
    transform: ${({disabled:o})=>o?"none":"translateY(0)"};
  }
`,G1=j.div`
  color: #28a745;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  padding: 1rem;
  background-color: #d4edda;
  border-radius: 6px;
  border: 1px solid #c3e6cb;
`,q1=["Login Issue","Device Not Responding","Billing Question","Feature Request","Other"],J1=()=>{const[o,l]=z.useState(""),[a,c]=z.useState(""),[f,h]=z.useState(""),[m,x]=z.useState(null),[w,_]=z.useState(!1),N=ln(),P=L=>{l(L.target.value),L.target.value!=="Other"&&c("")},T=L=>{x(L.target.files)},D=L=>{L.preventDefault(),_(!0)},M=()=>{localStorage.removeItem("token"),N("/login")};return u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{onClick:()=>N("/profile"),children:"Profile"}),u.jsx(ae,{onClick:()=>N("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>N("/faq"),children:"FAQ"}),u.jsx(ae,{selected:!0,onClick:()=>N("/support"),children:"Support"}),u.jsx(_t,{onClick:M,children:"Logout"})]})]}),u.jsxs(Kt,{children:[u.jsx(Ya,{children:"Contact Support"}),u.jsxs(B1,{onSubmit:D,children:[u.jsxs(ka,{children:[u.jsx(ja,{htmlFor:"subject",children:"Subject"}),u.jsxs(H1,{id:"subject",value:o,onChange:P,required:!0,children:[u.jsx("option",{value:"",disabled:!0,children:"Select a subject"}),q1.map(L=>u.jsx("option",{value:L,children:L},L))]}),o==="Other"&&u.jsx(W1,{type:"text",placeholder:"Enter your subject",value:a,onChange:L=>c(L.target.value),required:!0})]}),u.jsxs(ka,{children:[u.jsx(ja,{htmlFor:"message",children:"Describe your problem"}),u.jsx(V1,{id:"message",value:f,onChange:L=>h(L.target.value),required:!0,rows:7})]}),u.jsxs(ka,{children:[u.jsx(ja,{children:"Attach files (optional)"}),u.jsx(Q1,{type:"file",multiple:!0,onChange:T}),m&&m.length>0&&u.jsx(Y1,{children:Array.from(m).map((L,O)=>u.jsx("li",{children:L.name},O))})]}),u.jsx(K1,{type:"submit",disabled:f.trim()==="",children:"Send"}),w&&u.jsx(G1,{children:"Your message has been sent! Our support team will contact you soon."})]})]})]})},X1=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`,Z1=j.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;j.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;j.h2`
  text-align: left;
  margin-bottom: 2.5rem;
  font-weight: 700;
  font-size: 2.1rem;
  color: #222;
`;const ev=j.table`
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
`,Wn=j.td`
  font-weight: 600;
  color: ${({disabled:o})=>o?"#888":"#222"};
  width: 160px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  background: ${({disabled:o})=>o?"#f8f9fa":"white"};
`,Vn=j.td`
  color: ${({disabled:o})=>o?"#888":"#222"};
  background: ${({disabled:o})=>o?"#f8f9fa":"white"};
  padding: 1rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  border-bottom: 1px solid #e9ecef;
`,Ki=j.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 1.05rem;
  color: #222;
  font-weight: 500;
`,tv=j.button`
  background: ${({isEnabled:o=!0})=>o?"linear-gradient(135deg, #ff7f50 0%, #ff6b35 50%, #40e0d0 100%)":"#999"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: ${({isEnabled:o=!0})=>o?"pointer":"not-allowed"};
  margin-top: 18px;
  align-self: flex-end;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  opacity: ${({isEnabled:o=!0})=>o?1:.7};

  &:hover {
    background: ${({isEnabled:o=!0})=>o?"linear-gradient(135deg, #ff6b35 0%, #ff5722 50%, #39d3c7 100%)":"#888"};
  }
`,Df=j.button`
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
`,nv=j.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,Of=j.div`
  position: relative;
  flex: 1;
`,bf=j.button`
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
`,rv=j.div`
  width: 100%;
  margin: 0 auto 2rem auto;
  text-align: left;
`,ov=j.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
`,iv=j.div`
  color: #888;
  font-size: 1.05rem;
  font-weight: 500;
`,lv=j.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,sv=j.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`,av=j.span`
  letter-spacing: ${({isVisible:o})=>o?"normal":"2px"};
  color: #222;
  font-weight: 500;
  flex: 1;
  font-family: ${({isVisible:o})=>o?"inherit":"monospace"};
`;j.div`
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
`;j.button`
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
`;const uv=()=>{const o=ln(),[l,a]=z.useState(null),[c,f]=z.useState(!0),[h,m]=z.useState(null),[x,w]=z.useState({username:"",email:"",password:"",confirmPassword:""}),[_,N]=z.useState(!1),[P,T]=z.useState(!1),[D,M]=z.useState(!1),[L,O]=z.useState(!1);z.useEffect(()=>{(async()=>{try{const pe=localStorage.getItem("token");if(!pe){o("/login");return}const ce=await fetch("http://localhost:8080/api/v1/users/profile",{method:"GET",headers:{Authorization:`Bearer ${pe}`,"Content-Type":"application/json"}});if(ce.status===401){localStorage.removeItem("token"),o("/login");return}if(!ce.ok)throw new Error(`HTTP error! status: ${ce.status}`);const he=await ce.json();a(he),w({username:he.username,email:he.email,password:"",confirmPassword:""}),m(null)}catch(pe){console.error("Error fetching user profile:",pe),m("Failed to load user profile")}finally{f(!1)}})()},[o]);const Q=ee=>new Date(ee).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),A=()=>l?x.username!==l.username||x.email!==l.email||D&&x.password.length>0&&x.password===x.confirmPassword:!1,$=()=>x.password===x.confirmPassword,W=()=>x.password.length>=6,le=()=>{localStorage.removeItem("token"),o("/login")},ie=ee=>{w({...x,[ee.target.name]:ee.target.value})},X=async()=>{if(!(!l||!A())){O(!0);try{const ee=localStorage.getItem("token");if(!ee){o("/login");return}const pe={};if(x.username!==l.username&&(pe.username=x.username),x.email!==l.email&&(pe.email=x.email),D&&x.password.trim()!==""){if(!$()){m("Passwords do not match");return}if(!W()){m("Password must be at least 6 characters long");return}pe.password=x.password}const ce=await fetch("http://localhost:8080/api/v1/users/profile",{method:"PUT",headers:{Authorization:`Bearer ${ee}`,"Content-Type":"application/json"},body:JSON.stringify(pe)});if(ce.status===401){localStorage.removeItem("token"),o("/login");return}if(!ce.ok){const Se=await ce.json();throw new Error(Se.message||`HTTP error! status: ${ce.status}`)}const he=await ce.json();a(he),w({username:he.username,email:he.email,password:"",confirmPassword:""}),M(!1),N(!1),m(null)}catch(ee){console.error("Error updating profile:",ee),m(ee.message||"Failed to update profile")}finally{O(!1)}}},V=()=>{M(!1),w({...x,password:"",confirmPassword:""}),N(!1),T(!1)};return c?u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{selected:!0,onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:le,children:"Logout"})]})]}),u.jsx(Kt,{children:u.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:u.jsx("p",{children:"Loading profile..."})})})]}):h||!l?u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{selected:!0,onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:le,children:"Logout"})]})]}),u.jsx(Kt,{children:u.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[u.jsx("p",{style:{color:"red"},children:h||"Failed to load user profile"}),u.jsx("button",{onClick:()=>window.location.reload(),children:"Retry"})]})})]}):u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{selected:!0,onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:le,children:"Logout"})]})]}),u.jsxs(Kt,{children:[u.jsx(X1,{children:u.jsx(Z1,{children:"Personal information"})}),u.jsxs(rv,{children:[u.jsx(ov,{children:l.username}),u.jsx(iv,{children:l.email})]}),h&&u.jsx("div",{style:{backgroundColor:"#fee",color:"#c33",padding:"1rem",borderRadius:"4px",margin:"1rem 0",border:"1px solid #fcc"},children:h}),u.jsxs(lv,{onSubmit:ee=>{ee.preventDefault(),X()},children:[u.jsx(ev,{children:u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx(Wn,{disabled:!0,children:"Creation date"}),u.jsx(Vn,{disabled:!0,children:Q(l.createdAt)})]}),u.jsxs("tr",{children:[u.jsx(Wn,{disabled:!0,children:"Last updated"}),u.jsx(Vn,{disabled:!0,children:Q(l.updatedAt)})]}),u.jsxs("tr",{children:[u.jsx(Wn,{disabled:!0,children:"User ID"}),u.jsx(Vn,{disabled:!0,children:l.id})]}),u.jsxs("tr",{children:[u.jsx(Wn,{disabled:!0,children:"Role"}),u.jsx(Vn,{disabled:!0,style:{textTransform:"capitalize"},children:l.role.toLowerCase().replace("_"," ")})]}),u.jsxs("tr",{children:[u.jsx(Wn,{children:"Username"}),u.jsx(Vn,{children:u.jsx(Ki,{type:"text",name:"username",value:x.username,onChange:ie})})]}),u.jsxs("tr",{children:[u.jsx(Wn,{children:"E-mail"}),u.jsx(Vn,{children:u.jsx(Ki,{type:"email",name:"email",value:x.email,onChange:ie})})]}),u.jsxs("tr",{children:[u.jsx(Wn,{children:"Password"}),u.jsx(Vn,{children:u.jsxs(nv,{children:[D?u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[u.jsxs(Of,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Ki,{type:_?"text":"password",name:"password",value:x.password,onChange:ie,placeholder:"Enter new password",style:{borderColor:D&&x.password&&!W()?"#dc3545":void 0,flex:1}}),u.jsx(bf,{type:"button",onClick:()=>N(!_),children:_?u.jsx(Lo,{}):u.jsx(Io,{})}),u.jsx("div",{style:{width:"104px",visibility:"hidden"}})]}),u.jsxs(Of,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[u.jsx(Ki,{type:P?"text":"password",name:"confirmPassword",value:x.confirmPassword,onChange:ie,placeholder:"Confirm new password",style:{borderColor:D&&x.confirmPassword&&!$()?"#dc3545":D&&x.confirmPassword&&$()?"#28a745":void 0,flex:1}}),u.jsx(bf,{type:"button",onClick:()=>T(!P),children:P?u.jsx(Lo,{}):u.jsx(Io,{})}),u.jsx(Df,{type:"button",onClick:V,style:{background:"#f5f5f5",color:"#333"},children:"Cancel"})]}),D&&x.password&&!W()&&u.jsx("div",{style:{color:"#dc3545",fontSize:"0.8rem"},children:"Password must be at least 6 characters long"}),D&&x.confirmPassword&&!$()&&u.jsx("div",{style:{color:"#dc3545",fontSize:"0.8rem"},children:"Passwords do not match"}),D&&x.confirmPassword&&$()&&W()&&u.jsx("div",{style:{color:"#28a745",fontSize:"0.8rem"},children:"✓ Passwords match"})]}):u.jsx(av,{isVisible:!1,children:"********"}),!D&&u.jsx(Df,{type:"button",onClick:()=>M(!0),children:"Change password"})]})})]})]})}),u.jsx(sv,{children:u.jsx(tv,{type:"submit",isEnabled:A()&&!L,children:L?"Saving...":"Save changes"})})]})]})]})},cv=j.form`
  flex: 2;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,dv=j.div`
  margin-bottom: 2rem;
`,Ff=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Qn=j.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`,Yn=j.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`,Ca=j.input`
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
`,Ea=j.select`
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
`,fv=j.textarea`
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
`,pv=j.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e1e5e9;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,hv=j.button`
  background: ${({disabled:o})=>o?"#ccc":"linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
  transition: all 0.2s;
  opacity: ${({disabled:o})=>o?.6:1};

  &:hover {
    transform: ${({disabled:o})=>o?"none":"translateY(-2px)"};
    box-shadow: ${({disabled:o})=>o?"none":"0 4px 12px rgba(255, 127, 80, 0.3)"};
  }

  &:active {
    transform: ${({disabled:o})=>o?"none":"translateY(0)"};
  }
`,mv=j.button`
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
`,gv=j.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 1024px) {
    display: none;
  }
`,vv=j.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 2rem;
`,yv=j.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f3f4;
`,Kn=j.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`,Gn=j.span`
  font-weight: 600;
  color: #666;
  min-width: 80px;
  font-size: 0.9rem;
`,qn=j.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`,xv=j.div`
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`,wv=j.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`,Sv=["Smart Light","Smart Switch","Smart Thermostat","Smart Lock","Smart Camera","Smart Sensor","Smart Speaker","Smart TV","Smart Plug","Other"],kv=["Living Room","Bedroom","Kitchen","Bathroom","Office","Garage","Garden","Basement","Attic","Other"],jv=()=>{const o=ln(),[l,a]=z.useState({name:"",type:"",location:"",description:"",mqttTopic:"",aesKey:"",status:!1}),[c,f]=z.useState(!1),[h,m]=z.useState(null),x=()=>{localStorage.removeItem("token"),o("/login")},w=T=>{const{name:D,value:M}=T.target;a(L=>({...L,[D]:M}))},_=async T=>{T.preventDefault(),f(!0),m(null);try{const D=localStorage.getItem("token");if(!D){m("error"),f(!1);return}const M=await fetch("http://localhost:8080/api/v1/devices",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${D}`},body:JSON.stringify({name:l.name,type:l.type,description:l.description,location:l.location,mqttTopic:l.mqttTopic,aesKey:l.aesKey,status:l.status})});if(M.ok)m("success"),localStorage.removeItem("deviceCache"),setTimeout(()=>{o("/dashboard")},2e3);else{const L=await M.json().catch(()=>({}));console.error("Error response:",L),m("error")}}catch(D){console.error("Error creating device:",D),m("error")}finally{f(!1)}},N=()=>{o("/dashboard")},P=()=>l.name.trim()&&l.type&&l.location&&l.mqttTopic.trim()&&l.aesKey.trim();return u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:x,children:"Logout"})]})]}),u.jsxs(Kt,{children:[u.jsx(Ya,{children:"Add New Device"}),u.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[u.jsxs(cv,{onSubmit:_,children:[u.jsxs(dv,{children:[u.jsx("h3",{style:{margin:"0 0 1.5rem 0",color:"#333",fontSize:"1.3rem"},children:"Device Information"}),u.jsxs(Ff,{children:[u.jsxs(Qn,{children:[u.jsx(Yn,{htmlFor:"name",children:"Device Name *"}),u.jsx(Ca,{type:"text",id:"name",name:"name",value:l.name,onChange:w,placeholder:"e.g., Living Room Light",required:!0})]}),u.jsxs(Qn,{children:[u.jsx(Yn,{htmlFor:"type",children:"Device Type *"}),u.jsxs(Ea,{id:"type",name:"type",value:l.type,onChange:w,required:!0,children:[u.jsx("option",{value:"",children:"Select device type"}),Sv.map(T=>u.jsx("option",{value:T,children:T},T))]})]})]}),u.jsxs(Ff,{children:[u.jsxs(Qn,{children:[u.jsx(Yn,{htmlFor:"location",children:"Location *"}),u.jsxs(Ea,{id:"location",name:"location",value:l.location,onChange:w,required:!0,children:[u.jsx("option",{value:"",children:"Select location"}),kv.map(T=>u.jsx("option",{value:T,children:T},T))]})]}),u.jsxs(Qn,{children:[u.jsx(Yn,{htmlFor:"status",children:"Current Status"}),u.jsxs(Ea,{id:"status",name:"status",value:l.status.toString(),onChange:T=>a(D=>({...D,status:T.target.value==="true"})),children:[u.jsx("option",{value:"false",children:"Off"}),u.jsx("option",{value:"true",children:"On"})]})]})]}),u.jsxs(Qn,{children:[u.jsx(Yn,{htmlFor:"mqttTopic",children:"MQTT Topic *"}),u.jsx(Ca,{type:"text",id:"mqttTopic",name:"mqttTopic",value:l.mqttTopic,onChange:w,placeholder:"e.g., devices/livingroom/lamp",required:!0})]}),u.jsxs(Qn,{children:[u.jsx(Yn,{htmlFor:"aesKey",children:"Device AES Key *"}),u.jsx(Ca,{type:"password",id:"aesKey",name:"aesKey",value:l.aesKey,onChange:w,placeholder:"Secure encryption key for device communication",required:!0})]}),u.jsxs(Qn,{children:[u.jsx(Yn,{htmlFor:"description",children:"Description"}),u.jsx(fv,{id:"description",name:"description",value:l.description,onChange:w,placeholder:"Optional description of the device...",rows:4})]})]}),h==="success"&&u.jsx(xv,{children:"✅ Device added successfully! Redirecting to dashboard..."}),h==="error"&&u.jsx(wv,{children:"❌ Failed to add device. Please check your information and try again."}),u.jsxs(pv,{children:[u.jsx(mv,{type:"button",onClick:N,children:"Cancel"}),u.jsx(hv,{type:"submit",disabled:!P()||c,children:c?"Adding Device...":"Add Device"})]})]}),u.jsx(gv,{children:u.jsxs(vv,{children:[u.jsx(yv,{children:"Device Preview"}),u.jsxs(Kn,{children:[u.jsx(Gn,{children:"Name:"}),u.jsx(qn,{children:l.name||"Not specified"})]}),u.jsxs(Kn,{children:[u.jsx(Gn,{children:"Type:"}),u.jsx(qn,{children:l.type||"Not specified"})]}),u.jsxs(Kn,{children:[u.jsx(Gn,{children:"Location:"}),u.jsx(qn,{children:l.location||"Not specified"})]}),u.jsxs(Kn,{children:[u.jsx(Gn,{children:"Status:"}),u.jsx(qn,{children:l.status?"On":"Off"})]}),u.jsxs(Kn,{children:[u.jsx(Gn,{children:"MQTT Topic:"}),u.jsx(qn,{children:l.mqttTopic||"Not specified"})]}),u.jsxs(Kn,{children:[u.jsx(Gn,{children:"AES Key:"}),u.jsx(qn,{children:l.aesKey?"••••••••••••":"Not specified"})]}),l.description&&u.jsxs(Kn,{children:[u.jsx(Gn,{children:"Description:"}),u.jsx(qn,{children:l.description})]})]})})]})]})]})},Cv=j.div`
  margin-top: 2rem;
`,$f=j.button`
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
`,Ev=j.div`
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
`,Pv=j.h1`
  color: #333;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
`,_v=j.p`
  color: #666;
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
  font-weight: 500;
`,zv=j.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background-color: ${o=>o.status==="On"?"#28a745":"#dc3545"};
`,Gi=j.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({variant:o})=>o==="success"?"#28a745":o==="cancel"?"#dc3545":"linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"};
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
`,Nv=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,al=j.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;j(al)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;const Tv=j(al)`
  grid-column: 1 / -1;
`,Pa=j.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f3f4;
`,Af=j.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ht=j.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f3f4;

  &:last-child {
    border-bottom: none;
  }
`,Wt=j.span`
  font-weight: 600;
  color: #666;
  min-width: 120px;
  font-size: 0.95rem;
`,Vt=j.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`,Po=j.input`
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
`;j.button`
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
`;j.div`
  width: 50px;
  height: 26px;
  border-radius: 13px;
  background: ${({checked:o})=>o?"#28a745":"#dc3545"};
  position: relative;
  cursor: pointer;
  transition: background 0.2s;

  &::before {
    content: "";
    position: absolute;
    left: ${({checked:o})=>o?"26px":"2px"};
    top: 2px;
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 50%;
    transition: left 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;const Lv=j.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({online:o})=>o?"#28a745":"#dc3545"};
  font-weight: 600;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({online:o})=>o?"#28a745":"#dc3545"};
  }
`,Iv=j.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  border-left: 4px solid ${({type:o})=>o==="error"?"#dc3545":o==="warning"?"#ffc107":"#007bff"};
  background: ${({type:o})=>o==="error"?"#f8d7da":o==="warning"?"#fff3cd":"#d1ecf1"};
  border-radius: 0 8px 8px 0;
  margin-bottom: 0.5rem;
`,Rv=j.span`
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
`,Dv=j.span`
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ov=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #666;
`,bv=j.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
`,_a=o=>{if(!o||o===null||o===void 0)return"Unknown";try{const l=o instanceof Date?o:new Date(o);return isNaN(l.getTime())?"Unknown":l.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"Unknown"}},Fv=()=>{const o=ln(),{deviceId:l}=c0(),[a,c]=z.useState(null),[f,h]=z.useState(!1),[m,x]=z.useState({}),[w,_]=z.useState([]),[N,P]=z.useState(!0),[T,D]=z.useState(!1),[M,L]=z.useState(""),[O,Q]=z.useState(null),[A,$]=z.useState(null),[W,le]=z.useState(null),[ie,X]=z.useState(null),[V,ee]=z.useState(!1);z.useEffect(()=>{const g=localStorage.getItem("user");if(g)try{const E=JSON.parse(g);$(E.role),le(E)}catch(E){console.error("Error parsing user data:",E)}},[]);const pe=async()=>{try{const g=localStorage.getItem("token");if(!g||!l)return;const E=await fetch(`http://localhost:8080/api/v1/devices/${l}/logs?limit=20`,{method:"GET",headers:{Authorization:`Bearer ${g}`,"Content-Type":"application/json"}});if(E.ok){const te=(await E.json()).map(ne=>({id:ne.id,message:ne.message,type:ne.type,source:ne.source,createdAt:ne.createdAt,user:ne.user}));_(te),ee(!0)}}catch(g){console.error("Error fetching device logs:",g)}},ce=async(g=!0,E=!1)=>{try{g?P(!0):D(!0);const Z=localStorage.getItem("token");if(!Z){o("/login");return}const te=await fetch(`http://localhost:8080/api/v1/devices/${l}`,{method:"GET",headers:{Authorization:`Bearer ${Z}`,"Content-Type":"application/json"}});if(te.status===401){localStorage.removeItem("token"),localStorage.removeItem("user"),o("/login");return}if(te.status===404){Q("Device not found");return}if(!te.ok)throw new Error(`HTTP error! status: ${te.status}`);const ne=await te.json();c(ne),x(ne),X(ne.status),!V&&!E&&await pe(),g||L(new Date().toLocaleTimeString())}catch(Z){console.error("Error fetching device data:",Z),g&&Q("Failed to load device data")}finally{g?P(!1):D(!1)}};z.useEffect(()=>{l&&ce()},[l,o]),z.useEffect(()=>{const g=setInterval(()=>{l&&!f&&ce(!1,!0)},5e3);return()=>clearInterval(g)},[l,f]),z.useEffect(()=>{const g=()=>{l&&!f&&ce(!1,!0)},E=Z=>{Z.key===`device_updated_${l}`&&l&&!f&&setTimeout(()=>ce(!1,!0),100)};return window.addEventListener("focus",g),window.addEventListener("storage",E),document.addEventListener("visibilitychange",()=>{!document.hidden&&l&&!f&&ce(!1,!0)}),()=>{window.removeEventListener("focus",g),window.removeEventListener("storage",E),document.removeEventListener("visibilitychange",g)}},[l,f]);const he=()=>{ce(!1,!0),pe()},Se=()=>{localStorage.removeItem("token"),o("/login")},ze=()=>{o("/dashboard")},tt=()=>{A!=="ADMIN"&&h(!0)},Ue=async()=>{try{const g=localStorage.getItem("token");if(!g){o("/login");return}const E=await fetch(`http://localhost:8080/api/v1/devices/${l}`,{method:"PUT",headers:{Authorization:`Bearer ${g}`,"Content-Type":"application/json"},body:JSON.stringify({name:m.name,type:m.type,description:m.description,location:m.location,mqttTopic:m.mqttTopic})});if(!E.ok)throw new Error("Failed to update device");const Z=await E.json();c(Z),h(!1);const te=W.username,ne={id:Date.now().toString(),message:`Device '${Z.name}' information updated by ${te}`,type:"INFO",source:"DEVICE",createdAt:new Date().toISOString()};_(se=>[ne,...se])}catch(g){console.error("Error saving device:",g),Q("Failed to save changes")}},je=()=>{x(a||{}),h(!1)},U=async()=>{if(!(!a||A==="ADMIN"))try{const g=localStorage.getItem("token");if(!g){o("/login");return}const E=!a.status;if(c(se=>se?{...se,status:E}:null),!(await fetch(`http://localhost:8080/api/v1/devices/${l}/status`,{method:"PUT",headers:{Authorization:`Bearer ${g}`,"Content-Type":"application/json"},body:JSON.stringify({status:E})})).ok)throw c(se=>se?{...se,status:!E}:null),new Error("Failed to update device status");const te=W.username,ne={id:Date.now().toString(),message:`Device '${a.name}' status changed to ${E?"ON":"OFF"} by ${te}`,type:"INFO",source:"DEVICE",createdAt:new Date().toISOString()};_(se=>[ne,...se]),localStorage.setItem(`device_updated_${l}`,Date.now().toString()),setTimeout(()=>{localStorage.removeItem(`device_updated_${l}`)},1e3)}catch(g){console.error("Error toggling device status:",g),Q("Failed to toggle device status")}},q=(g,E)=>{x(Z=>({...Z,[g]:E}))},B=g=>E=>{q(g,E.target.value)};return N?u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:Se,children:"Logout"})]})]}),u.jsx(Kt,{children:u.jsx(Ov,{children:"Loading device details..."})})]}):O||!a?u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:Se,children:"Logout"})]})]}),u.jsxs(Kt,{children:[u.jsx(bv,{children:O||"Device not found"}),u.jsxs($f,{onClick:ze,children:[u.jsx(sf,{})," Back to Dashboard"]})]})]}):u.jsxs(St,{children:[u.jsxs(kt,{children:[u.jsxs(jt,{children:[u.jsx(Ct,{children:"🏠"}),u.jsx(Et,{children:"Home Control Hub"})]}),u.jsxs(Pt,{children:[u.jsx(ae,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(ae,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(ae,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(ae,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_t,{onClick:Se,children:"Logout"})]})]}),u.jsxs(Kt,{children:[u.jsxs($f,{onClick:ze,children:[u.jsx(sf,{})," Back to Dashboard"]}),u.jsxs(Ev,{children:[u.jsxs("div",{children:[u.jsx(Pv,{children:f?u.jsx(Po,{value:m.name||"",onChange:B("name")}):a.name}),u.jsxs(_v,{children:["Device ID: ",a.id]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[u.jsx(zv,{status:a.status?"On":"Off",children:a.status?"On":"Off"}),!f&&A!=="ADMIN"?u.jsxs(Gi,{onClick:tt,children:[u.jsx(W0,{})," Edit"]}):f?u.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[u.jsxs(Gi,{onClick:Ue,variant:"success",children:[u.jsx(Q0,{})," Save"]}),u.jsxs(Gi,{onClick:je,variant:"cancel",children:[u.jsx(K0,{})," Cancel"]})]}):u.jsx("span",{style:{color:"#666",fontSize:"0.9rem"},children:A==="ADMIN"?"View Only":""})]})]}),u.jsx(Cv,{children:u.jsxs(Nv,{children:[u.jsxs(al,{children:[u.jsx(Pa,{children:"Device Information"}),u.jsxs(Af,{children:[u.jsxs(Ht,{children:[u.jsx(Wt,{children:"Type:"}),u.jsx(Vt,{children:f&&A!=="ADMIN"?u.jsx(Po,{value:m.type||"",onChange:B("type")}):a.type})]}),u.jsxs(Ht,{children:[u.jsx(Wt,{children:"Location:"}),u.jsx(Vt,{children:f&&A!=="ADMIN"?u.jsx(Po,{value:m.location||"",onChange:B("location")}):a.location})]}),u.jsxs(Ht,{children:[u.jsx(Wt,{children:"MQTT Topic:"}),u.jsx(Vt,{children:f&&A!=="ADMIN"?u.jsx(Po,{value:m.mqttTopic||"",onChange:B("mqttTopic")}):a.mqttTopic})]}),u.jsxs(Ht,{children:[u.jsx(Wt,{children:"Description:"}),u.jsx(Vt,{children:f&&A!=="ADMIN"?u.jsx(Po,{value:m.description||"",onChange:B("description"),as:"textarea",rows:3}):a.description||"No description"})]}),u.jsxs(Ht,{children:[u.jsx(Wt,{children:"Status Control:"}),u.jsx(Vt,{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:A==="ADMIN"?u.jsx("span",{style:{color:a.status?"#4CAF50":"#f44336",fontWeight:"bold"},children:a.status?"ON":"OFF"}):u.jsx(_p,{checked:a.status,onClick:U,"aria-label":`Toggle ${a.name}`})})]})]})]}),u.jsxs(al,{children:[u.jsx(Pa,{children:"System Information"}),u.jsxs(Af,{children:[u.jsxs(Ht,{children:[u.jsx(Wt,{children:"Device ID:"}),u.jsx(Vt,{children:a.id})]}),u.jsxs(Ht,{children:[u.jsx(Wt,{children:"Owner:"}),u.jsx(Vt,{children:W?`${W.username} (${W.email})`:"Unknown User"})]}),u.jsxs(Ht,{children:[u.jsx(Wt,{children:"Created:"}),u.jsx(Vt,{children:_a(a.createdAt)})]}),u.jsxs(Ht,{children:[u.jsx(Wt,{children:"Last Updated:"}),u.jsx(Vt,{children:a.updatedAt&&a.createdAt&&new Date(a.updatedAt).getTime()!==new Date(a.createdAt).getTime()?_a(a.updatedAt):"Never edited"})]}),u.jsxs(Ht,{children:[u.jsx(Wt,{children:"Connection Status:"}),u.jsx(Vt,{children:u.jsx(Lv,{online:a.status,children:a.status?"Online":"Offline"})})]})]})]}),u.jsxs(Tv,{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[u.jsx(Pa,{children:"Recent Activity"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[M&&u.jsxs("span",{style:{fontSize:"0.7rem",color:"#666"},children:["Last updated: ",M]}),u.jsxs(Gi,{onClick:he,style:{fontSize:"0.8rem",padding:"0.5rem"},disabled:T,children:[u.jsx(Y0,{style:{animation:T?"spin 1s linear infinite":"none",marginRight:"0.5rem"}}),T?"Refreshing...":"Refresh"]})]})]}),u.jsx("style",{children:`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}),u.jsx("div",{style:{maxHeight:"300px",overflowY:"auto"},children:w.map(g=>u.jsxs(Iv,{type:g.type.toLowerCase(),children:[u.jsx(Rv,{children:_a(g.createdAt)}),u.jsxs(Dv,{children:[g.type==="WARNING"&&u.jsx(V0,{}),g.message,g.user&&u.jsxs("span",{style:{marginLeft:"0.5rem"},children:["by ",g.user.username]})]})]},g.id))})]})]})})]})]})},$v=()=>u.jsx(R0,{children:u.jsxs(P0,{children:[u.jsx(Qt,{path:"/login",element:u.jsx(_f,{})}),u.jsx(Qt,{path:"/register",element:u.jsx(C1,{})}),u.jsx(Qt,{path:"/dashboard",element:u.jsx(D1,{})}),u.jsx(Qt,{path:"/faq",element:u.jsx(U1,{})}),u.jsx(Qt,{path:"/support",element:u.jsx(J1,{})}),u.jsx(Qt,{path:"/profile",element:u.jsx(uv,{})}),u.jsx(Qt,{path:"/add-device",element:u.jsx(jv,{})}),u.jsx(Qt,{path:"/device/:deviceId",element:u.jsx(Fv,{})}),u.jsx(Qt,{path:"/",element:u.jsx(_f,{})})]})});Dm.createRoot(document.getElementById("root")).render(u.jsx(ut.StrictMode,{children:u.jsx($v,{})}));
