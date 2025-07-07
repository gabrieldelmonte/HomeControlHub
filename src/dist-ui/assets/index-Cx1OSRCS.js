function pm(o,l){for(var a=0;a<l.length;a++){const c=l[a];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in o)){const h=Object.getOwnPropertyDescriptor(c,f);h&&Object.defineProperty(o,f,h.get?h:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=a(f);fetch(f.href,h)}})();function Lf(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ua={exports:{}},ko={},ca={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function hm(){if(Dd)return se;Dd=1;var o=Symbol.for("react.element"),l=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function N(x){return x===null||typeof x!="object"?null:(x=E&&x[E]||x["@@iterator"],typeof x=="function"?x:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function D(x,z,re){this.props=x,this.context=z,this.refs=R,this.updater=re||$}D.prototype.isReactComponent={},D.prototype.setState=function(x,z){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,z,"setState")},D.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function G(){}G.prototype=D.prototype;function H(x,z,re){this.props=x,this.context=z,this.refs=R,this.updater=re||$}var M=H.prototype=new G;M.constructor=H,A(M,D.prototype),M.isPureReactComponent=!0;var J=Array.isArray,Z=Object.prototype.hasOwnProperty,V={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function ve(x,z,re){var oe,ae={},le=null,he=null;if(z!=null)for(oe in z.ref!==void 0&&(he=z.ref),z.key!==void 0&&(le=""+z.key),z)Z.call(z,oe)&&!K.hasOwnProperty(oe)&&(ae[oe]=z[oe]);var ue=arguments.length-2;if(ue===1)ae.children=re;else if(1<ue){for(var de=Array(ue),be=0;be<ue;be++)de[be]=arguments[be+2];ae.children=de}if(x&&x.defaultProps)for(oe in ue=x.defaultProps,ue)ae[oe]===void 0&&(ae[oe]=ue[oe]);return{$$typeof:o,type:x,key:le,ref:he,props:ae,_owner:V.current}}function Qe(x,z){return{$$typeof:o,type:x.type,key:z,ref:x.ref,props:x.props,_owner:x._owner}}function xt(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function $t(x){var z={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(re){return z[re]})}var ct=/\/+/g;function Ye(x,z){return typeof x=="object"&&x!==null&&x.key!=null?$t(""+x.key):z.toString(36)}function ot(x,z,re,oe,ae){var le=typeof x;(le==="undefined"||le==="boolean")&&(x=null);var he=!1;if(x===null)he=!0;else switch(le){case"string":case"number":he=!0;break;case"object":switch(x.$$typeof){case o:case l:he=!0}}if(he)return he=x,ae=ae(he),x=oe===""?"."+Ye(he,0):oe,J(ae)?(re="",x!=null&&(re=x.replace(ct,"$&/")+"/"),ot(ae,z,re,"",function(be){return be})):ae!=null&&(xt(ae)&&(ae=Qe(ae,re+(!ae.key||he&&he.key===ae.key?"":(""+ae.key).replace(ct,"$&/")+"/")+x)),z.push(ae)),1;if(he=0,oe=oe===""?".":oe+":",J(x))for(var ue=0;ue<x.length;ue++){le=x[ue];var de=oe+Ye(le,ue);he+=ot(le,z,re,de,ae)}else if(de=N(x),typeof de=="function")for(x=de.call(x),ue=0;!(le=x.next()).done;)le=le.value,de=oe+Ye(le,ue++),he+=ot(le,z,re,de,ae);else if(le==="object")throw z=String(x),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return he}function dt(x,z,re){if(x==null)return x;var oe=[],ae=0;return ot(x,oe,"","",function(le){return z.call(re,le,ae++)}),oe}function Ue(x){if(x._status===-1){var z=x._result;z=z(),z.then(function(re){(x._status===0||x._status===-1)&&(x._status=1,x._result=re)},function(re){(x._status===0||x._status===-1)&&(x._status=2,x._result=re)}),x._status===-1&&(x._status=0,x._result=z)}if(x._status===1)return x._result.default;throw x._result}var ye={current:null},b={transition:null},X={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:b,ReactCurrentOwner:V};function U(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:dt,forEach:function(x,z,re){dt(x,function(){z.apply(this,arguments)},re)},count:function(x){var z=0;return dt(x,function(){z++}),z},toArray:function(x){return dt(x,function(z){return z})||[]},only:function(x){if(!xt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},se.Component=D,se.Fragment=a,se.Profiler=f,se.PureComponent=H,se.StrictMode=c,se.Suspense=y,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,se.act=U,se.cloneElement=function(x,z,re){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var oe=A({},x.props),ae=x.key,le=x.ref,he=x._owner;if(z!=null){if(z.ref!==void 0&&(le=z.ref,he=V.current),z.key!==void 0&&(ae=""+z.key),x.type&&x.type.defaultProps)var ue=x.type.defaultProps;for(de in z)Z.call(z,de)&&!K.hasOwnProperty(de)&&(oe[de]=z[de]===void 0&&ue!==void 0?ue[de]:z[de])}var de=arguments.length-2;if(de===1)oe.children=re;else if(1<de){ue=Array(de);for(var be=0;be<de;be++)ue[be]=arguments[be+2];oe.children=ue}return{$$typeof:o,type:x.type,key:ae,ref:le,props:oe,_owner:he}},se.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:h,_context:x},x.Consumer=x},se.createElement=ve,se.createFactory=function(x){var z=ve.bind(null,x);return z.type=x,z},se.createRef=function(){return{current:null}},se.forwardRef=function(x){return{$$typeof:w,render:x}},se.isValidElement=xt,se.lazy=function(x){return{$$typeof:_,_payload:{_status:-1,_result:x},_init:Ue}},se.memo=function(x,z){return{$$typeof:P,type:x,compare:z===void 0?null:z}},se.startTransition=function(x){var z=b.transition;b.transition={};try{x()}finally{b.transition=z}},se.unstable_act=U,se.useCallback=function(x,z){return ye.current.useCallback(x,z)},se.useContext=function(x){return ye.current.useContext(x)},se.useDebugValue=function(){},se.useDeferredValue=function(x){return ye.current.useDeferredValue(x)},se.useEffect=function(x,z){return ye.current.useEffect(x,z)},se.useId=function(){return ye.current.useId()},se.useImperativeHandle=function(x,z,re){return ye.current.useImperativeHandle(x,z,re)},se.useInsertionEffect=function(x,z){return ye.current.useInsertionEffect(x,z)},se.useLayoutEffect=function(x,z){return ye.current.useLayoutEffect(x,z)},se.useMemo=function(x,z){return ye.current.useMemo(x,z)},se.useReducer=function(x,z,re){return ye.current.useReducer(x,z,re)},se.useRef=function(x){return ye.current.useRef(x)},se.useState=function(x){return ye.current.useState(x)},se.useSyncExternalStore=function(x,z,re){return ye.current.useSyncExternalStore(x,z,re)},se.useTransition=function(){return ye.current.useTransition()},se.version="18.3.1",se}var Fd;function Oa(){return Fd||(Fd=1,ca.exports=hm()),ca.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function mm(){if($d)return ko;$d=1;var o=Oa(),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function m(w,y,P){var _,E={},N=null,$=null;P!==void 0&&(N=""+P),y.key!==void 0&&(N=""+y.key),y.ref!==void 0&&($=y.ref);for(_ in y)c.call(y,_)&&!h.hasOwnProperty(_)&&(E[_]=y[_]);if(w&&w.defaultProps)for(_ in y=w.defaultProps,y)E[_]===void 0&&(E[_]=y[_]);return{$$typeof:l,type:w,key:N,ref:$,props:E,_owner:f.current}}return ko.Fragment=a,ko.jsx=m,ko.jsxs=m,ko}var bd;function gm(){return bd||(bd=1,ua.exports=mm()),ua.exports}var u=gm(),T=Oa();const rt=Lf(T),vm=pm({__proto__:null,default:rt},[T]);var Bi={},da={exports:{}},tt={},fa={exports:{}},pa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function ym(){return Ad||(Ad=1,function(o){function l(b,X){var U=b.length;b.push(X);e:for(;0<U;){var x=U-1>>>1,z=b[x];if(0<f(z,X))b[x]=X,b[U]=z,U=x;else break e}}function a(b){return b.length===0?null:b[0]}function c(b){if(b.length===0)return null;var X=b[0],U=b.pop();if(U!==X){b[0]=U;e:for(var x=0,z=b.length,re=z>>>1;x<re;){var oe=2*(x+1)-1,ae=b[oe],le=oe+1,he=b[le];if(0>f(ae,U))le<z&&0>f(he,ae)?(b[x]=he,b[le]=U,x=le):(b[x]=ae,b[oe]=U,x=oe);else if(le<z&&0>f(he,U))b[x]=he,b[le]=U,x=le;else break e}}return X}function f(b,X){var U=b.sortIndex-X.sortIndex;return U!==0?U:b.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var m=Date,w=m.now();o.unstable_now=function(){return m.now()-w}}var y=[],P=[],_=1,E=null,N=3,$=!1,A=!1,R=!1,D=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(b){for(var X=a(P);X!==null;){if(X.callback===null)c(P);else if(X.startTime<=b)c(P),X.sortIndex=X.expirationTime,l(y,X);else break;X=a(P)}}function J(b){if(R=!1,M(b),!A)if(a(y)!==null)A=!0,Ue(Z);else{var X=a(P);X!==null&&ye(J,X.startTime-b)}}function Z(b,X){A=!1,R&&(R=!1,G(ve),ve=-1),$=!0;var U=N;try{for(M(X),E=a(y);E!==null&&(!(E.expirationTime>X)||b&&!$t());){var x=E.callback;if(typeof x=="function"){E.callback=null,N=E.priorityLevel;var z=x(E.expirationTime<=X);X=o.unstable_now(),typeof z=="function"?E.callback=z:E===a(y)&&c(y),M(X)}else c(y);E=a(y)}if(E!==null)var re=!0;else{var oe=a(P);oe!==null&&ye(J,oe.startTime-X),re=!1}return re}finally{E=null,N=U,$=!1}}var V=!1,K=null,ve=-1,Qe=5,xt=-1;function $t(){return!(o.unstable_now()-xt<Qe)}function ct(){if(K!==null){var b=o.unstable_now();xt=b;var X=!0;try{X=K(!0,b)}finally{X?Ye():(V=!1,K=null)}}else V=!1}var Ye;if(typeof H=="function")Ye=function(){H(ct)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=ct,Ye=function(){dt.postMessage(null)}}else Ye=function(){D(ct,0)};function Ue(b){K=b,V||(V=!0,Ye())}function ye(b,X){ve=D(function(){b(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(b){b.callback=null},o.unstable_continueExecution=function(){A||$||(A=!0,Ue(Z))},o.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<b?Math.floor(1e3/b):5},o.unstable_getCurrentPriorityLevel=function(){return N},o.unstable_getFirstCallbackNode=function(){return a(y)},o.unstable_next=function(b){switch(N){case 1:case 2:case 3:var X=3;break;default:X=N}var U=N;N=X;try{return b()}finally{N=U}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(b,X){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var U=N;N=b;try{return X()}finally{N=U}},o.unstable_scheduleCallback=function(b,X,U){var x=o.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?x+U:x):U=x,b){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=U+z,b={id:_++,callback:X,priorityLevel:b,startTime:U,expirationTime:z,sortIndex:-1},U>x?(b.sortIndex=U,l(P,b),a(y)===null&&b===a(P)&&(R?(G(ve),ve=-1):R=!0,ye(J,U-x))):(b.sortIndex=z,l(y,b),A||$||(A=!0,Ue(Z))),b},o.unstable_shouldYield=$t,o.unstable_wrapCallback=function(b){var X=N;return function(){var U=N;N=X;try{return b.apply(this,arguments)}finally{N=U}}}}(pa)),pa}var Md;function xm(){return Md||(Md=1,fa.exports=ym()),fa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function wm(){if(Ud)return tt;Ud=1;var o=Oa(),l=xm();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function N(e){return y.call(E,e)?!0:y.call(_,e)?!1:P.test(e)?E[e]=!0:(_[e]=!0,!1)}function $(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,t,n,r){if(t===null||typeof t>"u"||$(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,n,r,i,s,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=d}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(G,H);D[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(G,H);D[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(G,H);D[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,t,n,r){var i=D.hasOwnProperty(t)?D[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A(t,n,i,r)&&(n=null),r||i===null?N(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var J=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),V=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),$t=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),b=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=b&&e[b]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,x;function z(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var re=!1;function oe(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var r=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){r=j}e.call(t.prototype)}else{try{throw Error()}catch(j){r=j}e()}}catch(j){if(j&&r&&typeof j.stack=="string"){for(var i=j.stack.split(`
`),s=r.stack.split(`
`),d=i.length-1,p=s.length-1;1<=d&&0<=p&&i[d]!==s[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==s[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==s[p]){var g=`
`+i[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=p);break}}}finally{re=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?z(e):""}function ae(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case V:return"Portal";case Qe:return"Profiler";case ve:return"StrictMode";case Ye:return"Suspense";case ot:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $t:return(e.displayName||"Context")+".Consumer";case xt:return(e._context.displayName||"Context")+".Provider";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function be(e){var t=de(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){r=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bt(e){e._valueTracker||(e._valueTracker=be(e))}function wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=de(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ha(e,t){t=t.checked,t!=null&&M(e,"checked",t,!1)}function vl(e,t){Ha(e,t);var n=ue(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(Fr(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function Qa(e,t){var n=ue(t.value),r=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ya(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ga(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ga(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Io,Ka=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vp=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){vp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),br[t]=br[e]})});function qa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||br.hasOwnProperty(e)&&br[e]?(""+t).trim():t+"px"}function Xa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yp=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(yp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function Cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,Kn=null,qn=null;function Ja(e){if(e=lo(e)){if(typeof El!="function")throw Error(a(280));var t=e.stateNode;t&&(t=ri(t),El(e.stateNode,e.type,t))}}function Za(e){Kn?qn?qn.push(e):qn=[e]:Kn=e}function eu(){if(Kn){var e=Kn,t=qn;if(qn=Kn=null,Ja(e),t)for(e=0;e<t.length;e++)Ja(t[e])}}function tu(e,t){return e(t)}function nu(){}var Pl=!1;function ru(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return tu(e,t,n)}finally{Pl=!1,(Kn!==null||qn!==null)&&(nu(),eu())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var _l=!1;if(w)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){_l=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{_l=!1}function xp(e,t,n,r,i,s,d,p,g){var j=Array.prototype.slice.call(arguments,3);try{t.apply(n,j)}catch(O){this.onError(O)}}var Ur=!1,Do=null,Fo=!1,zl=null,wp={onError:function(e){Ur=!0,Do=e}};function Sp(e,t,n,r,i,s,d,p,g){Ur=!1,Do=null,xp.apply(wp,arguments)}function kp(e,t,n,r,i,s,d,p,g){if(Sp.apply(this,arguments),Ur){if(Ur){var j=Do;Ur=!1,Do=null}else throw Error(a(198));Fo||(Fo=!0,zl=j)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ou(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iu(e){if(Rn(e)!==e)throw Error(a(188))}function jp(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return iu(i),e;if(s===r)return iu(i),t;s=s.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=s;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,r=s;break}if(p===r){d=!0,r=i,n=s;break}p=p.sibling}if(!d){for(p=s.child;p;){if(p===n){d=!0,n=s,r=i;break}if(p===r){d=!0,r=s,n=i;break}p=p.sibling}if(!d)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function lu(e){return e=jp(e),e!==null?su(e):null}function su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=su(e);if(t!==null)return t;e=e.sibling}return null}var au=l.unstable_scheduleCallback,uu=l.unstable_cancelCallback,Cp=l.unstable_shouldYield,Ep=l.unstable_requestPaint,_e=l.unstable_now,Pp=l.unstable_getCurrentPriorityLevel,Nl=l.unstable_ImmediatePriority,cu=l.unstable_UserBlockingPriority,$o=l.unstable_NormalPriority,_p=l.unstable_LowPriority,du=l.unstable_IdlePriority,bo=null,Nt=null;function zp(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Rp,Np=Math.log,Lp=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Np(e)/Lp|0)|0}var Ao=64,Mo=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~i;p!==0?r=Br(p):(s&=d,s!==0&&(r=Br(s)))}else d=n&~i,d!==0?r=Br(d):s!==0&&(r=Br(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-St(t),i=1<<n,r|=e[n],t&=~i;return r}function Tp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Op(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-St(s),p=1<<d,g=i[d];g===-1?((p&n)===0||(p&r)!==0)&&(i[d]=Tp(p,t)):g<=t&&(e.expiredLanes|=p),s&=~p}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=Ao;return Ao<<=1,(Ao&4194240)===0&&(Ao=64),e}function Rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=n}function Ip(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-St(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Tl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-St(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function pu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hu,Ol,mu,gu,vu,Il=!1,Bo=[],Jt=null,Zt=null,en=null,Wr=new Map,Vr=new Map,tn=[],Dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function Qr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=lo(t),t!==null&&Ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fp(e,t,n,r,i){switch(t){case"focusin":return Jt=Qr(Jt,e,t,n,r,i),!0;case"dragenter":return Zt=Qr(Zt,e,t,n,r,i),!0;case"mouseover":return en=Qr(en,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wr.set(s,Qr(Wr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vr.set(s,Qr(Vr.get(s)||null,e,t,n,r,i)),!0}return!1}function xu(e){var t=Tn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=ou(n),t!==null){e.blockedOn=t,vu(e.priority,function(){mu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jl=r,n.target.dispatchEvent(r),jl=null}else return t=lo(n),t!==null&&Ol(t),e.blockedOn=n,!1;t.shift()}return!0}function wu(e,t,n){Ho(e)&&n.delete(t)}function $p(){Il=!1,Jt!==null&&Ho(Jt)&&(Jt=null),Zt!==null&&Ho(Zt)&&(Zt=null),en!==null&&Ho(en)&&(en=null),Wr.forEach(wu),Vr.forEach(wu)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Il||(Il=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,$p)))}function Gr(e){function t(i){return Yr(i,e)}if(0<Bo.length){Yr(Bo[0],e);for(var n=1;n<Bo.length;n++){var r=Bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Yr(Jt,e),Zt!==null&&Yr(Zt,e),en!==null&&Yr(en,e),Wr.forEach(t),Vr.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)xu(n),n.blockedOn===null&&tn.shift()}var Xn=J.ReactCurrentBatchConfig,Wo=!0;function bp(e,t,n,r){var i=ge,s=Xn.transition;Xn.transition=null;try{ge=1,Dl(e,t,n,r)}finally{ge=i,Xn.transition=s}}function Ap(e,t,n,r){var i=ge,s=Xn.transition;Xn.transition=null;try{ge=4,Dl(e,t,n,r)}finally{ge=i,Xn.transition=s}}function Dl(e,t,n,r){if(Wo){var i=Fl(e,t,n,r);if(i===null)Zl(e,t,r,Vo,n),yu(e,r);else if(Fp(i,e,t,n,r))r.stopPropagation();else if(yu(e,r),t&4&&-1<Dp.indexOf(e)){for(;i!==null;){var s=lo(i);if(s!==null&&hu(s),s=Fl(e,t,n,r),s===null&&Zl(e,t,r,Vo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var Vo=null;function Fl(e,t,n,r){if(Vo=null,e=Cl(r),e=Tn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ou(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function Su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pp()){case Nl:return 1;case cu:return 4;case $o:case _p:return 16;case du:return 536870912;default:return 16}default:return 16}}var nn=null,$l=null,Qo=null;function ku(){if(Qo)return Qo;var e,t=$l,n=t.length,r,i="value"in nn?nn.value:nn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===i[s-r];r++);return Qo=i.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function ju(){return!1}function it(e){function t(n,r,i,s,d){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:ju,this.isPropagationStopped=ju,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=it(Jn),Kr=U({},Jn,{view:0,detail:0}),Mp=it(Kr),Al,Ml,qr,Ko=U({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(Al=e.screenX-qr.screenX,Ml=e.screenY-qr.screenY):Ml=Al=0,qr=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),Cu=it(Ko),Up=U({},Ko,{dataTransfer:0}),Bp=it(Up),Hp=U({},Kr,{relatedTarget:0}),Ul=it(Hp),Wp=U({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=it(Wp),Qp=U({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=it(Qp),Gp=U({},Jn,{data:0}),Eu=it(Gp),Kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xp[e])?!!t[e]:!1}function Bl(){return Jp}var Zp=U({},Kr,{key:function(e){if(e.key){var t=Kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eh=it(Zp),th=U({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=it(th),nh=U({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),rh=it(nh),oh=U({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ih=it(oh),lh=U({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sh=it(lh),ah=[9,13,27,32],Hl=w&&"CompositionEvent"in window,Xr=null;w&&"documentMode"in document&&(Xr=document.documentMode);var uh=w&&"TextEvent"in window&&!Xr,_u=w&&(!Hl||Xr&&8<Xr&&11>=Xr),zu=" ",Nu=!1;function Lu(e,t){switch(e){case"keyup":return ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function ch(e,t){switch(e){case"compositionend":return Ru(t);case"keypress":return t.which!==32?null:(Nu=!0,zu);case"textInput":return e=t.data,e===zu&&Nu?null:e;default:return null}}function dh(e,t){if(Zn)return e==="compositionend"||!Hl&&Lu(e,t)?(e=ku(),Qo=$l=nn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fh[e.type]:t==="textarea"}function Ou(e,t,n,r){Za(r),t=ei(t,"onChange"),0<t.length&&(n=new bl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jr=null,Zr=null;function ph(e){Xu(e,0)}function qo(e){var t=or(e);if(wt(t))return e}function hh(e,t){if(e==="change")return t}var Iu=!1;if(w){var Wl;if(w){var Vl="oninput"in document;if(!Vl){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),Vl=typeof Du.oninput=="function"}Wl=Vl}else Wl=!1;Iu=Wl&&(!document.documentMode||9<document.documentMode)}function Fu(){Jr&&(Jr.detachEvent("onpropertychange",$u),Zr=Jr=null)}function $u(e){if(e.propertyName==="value"&&qo(Zr)){var t=[];Ou(t,Zr,e,Cl(e)),ru(ph,t)}}function mh(e,t,n){e==="focusin"?(Fu(),Jr=t,Zr=n,Jr.attachEvent("onpropertychange",$u)):e==="focusout"&&Fu()}function gh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Zr)}function vh(e,t){if(e==="click")return qo(t)}function yh(e,t){if(e==="input"||e==="change")return qo(t)}function xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:xh;function eo(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!y.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uu(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function Ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wh(e){var t=Uu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&Ql(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Au(n,s);var d=Au(n,r);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sh=w&&"documentMode"in document&&11>=document.documentMode,er=null,Yl=null,to=null,Gl=!1;function Bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||er==null||er!==Oo(r)||(r=er,"selectionStart"in r&&Ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&eo(to,r)||(to=r,r=ei(Yl,"onSelect"),0<r.length&&(t=new bl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function Xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},Kl={},Hu={};w&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Jo(e){if(Kl[e])return Kl[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hu)return Kl[e]=t[n];return e}var Wu=Jo("animationend"),Vu=Jo("animationiteration"),Qu=Jo("animationstart"),Yu=Jo("transitionend"),Gu=new Map,Ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Gu.set(e,t),h(t,[e])}for(var ql=0;ql<Ku.length;ql++){var Xl=Ku[ql],kh=Xl.toLowerCase(),jh=Xl[0].toUpperCase()+Xl.slice(1);rn(kh,"on"+jh)}rn(Wu,"onAnimationEnd"),rn(Vu,"onAnimationIteration"),rn(Qu,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(Yu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kp(r,t,void 0,e),e.currentTarget=null}function Xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var d=r.length-1;0<=d;d--){var p=r[d],g=p.instance,j=p.currentTarget;if(p=p.listener,g!==s&&i.isPropagationStopped())break e;qu(i,p,j),s=g}else for(d=0;d<r.length;d++){if(p=r[d],g=p.instance,j=p.currentTarget,p=p.listener,g!==s&&i.isPropagationStopped())break e;qu(i,p,j),s=g}}}if(Fo)throw e=zl,Fo=!1,zl=null,e}function we(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var r=e+"__bubble";n.has(r)||(Ju(t,e,2,!1),n.add(r))}function Jl(e,t,n){var r=0;t&&(r|=4),Ju(n,e,r,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[Zo]){e[Zo]=!0,c.forEach(function(n){n!=="selectionchange"&&(Ch.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,Jl("selectionchange",!1,t))}}function Ju(e,t,n,r){switch(Su(t)){case 1:var i=bp;break;case 4:i=Ap;break;default:i=Dl}n=i.bind(null,t,n,e),i=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var p=r.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=r.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===i||g.nodeType===8&&g.parentNode===i))return;d=d.return}for(;p!==null;){if(d=Tn(p),d===null)return;if(g=d.tag,g===5||g===6){r=s=d;continue e}p=p.parentNode}}r=r.return}ru(function(){var j=s,O=Cl(n),I=[];e:{var L=Gu.get(e);if(L!==void 0){var B=bl,Q=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":B=eh;break;case"focusin":Q="focus",B=Ul;break;case"focusout":Q="blur",B=Ul;break;case"beforeblur":case"afterblur":B=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=rh;break;case Wu:case Vu:case Qu:B=Vp;break;case Yu:B=ih;break;case"scroll":B=Mp;break;case"wheel":B=sh;break;case"copy":case"cut":case"paste":B=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Pu}var Y=(t&4)!==0,ze=!Y&&e==="scroll",S=Y?L!==null?L+"Capture":null:L;Y=[];for(var v=j,k;v!==null;){k=v;var F=k.stateNode;if(k.tag===5&&F!==null&&(k=F,S!==null&&(F=Ar(v,S),F!=null&&Y.push(oo(v,F,k)))),ze)break;v=v.return}0<Y.length&&(L=new B(L,Q,null,n,O),I.push({event:L,listeners:Y}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",L&&n!==jl&&(Q=n.relatedTarget||n.fromElement)&&(Tn(Q)||Q[At]))break e;if((B||L)&&(L=O.window===O?O:(L=O.ownerDocument)?L.defaultView||L.parentWindow:window,B?(Q=n.relatedTarget||n.toElement,B=j,Q=Q?Tn(Q):null,Q!==null&&(ze=Rn(Q),Q!==ze||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(B=null,Q=j),B!==Q)){if(Y=Cu,F="onMouseLeave",S="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(Y=Pu,F="onPointerLeave",S="onPointerEnter",v="pointer"),ze=B==null?L:or(B),k=Q==null?L:or(Q),L=new Y(F,v+"leave",B,n,O),L.target=ze,L.relatedTarget=k,F=null,Tn(O)===j&&(Y=new Y(S,v+"enter",Q,n,O),Y.target=k,Y.relatedTarget=ze,F=Y),ze=F,B&&Q)t:{for(Y=B,S=Q,v=0,k=Y;k;k=nr(k))v++;for(k=0,F=S;F;F=nr(F))k++;for(;0<v-k;)Y=nr(Y),v--;for(;0<k-v;)S=nr(S),k--;for(;v--;){if(Y===S||S!==null&&Y===S.alternate)break t;Y=nr(Y),S=nr(S)}Y=null}else Y=null;B!==null&&Zu(I,L,B,Y,!1),Q!==null&&ze!==null&&Zu(I,ze,Q,Y,!0)}}e:{if(L=j?or(j):window,B=L.nodeName&&L.nodeName.toLowerCase(),B==="select"||B==="input"&&L.type==="file")var q=hh;else if(Tu(L))if(Iu)q=yh;else{q=gh;var ee=mh}else(B=L.nodeName)&&B.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(q=vh);if(q&&(q=q(e,j))){Ou(I,q,n,O);break e}ee&&ee(e,L,j),e==="focusout"&&(ee=L._wrapperState)&&ee.controlled&&L.type==="number"&&yl(L,"number",L.value)}switch(ee=j?or(j):window,e){case"focusin":(Tu(ee)||ee.contentEditable==="true")&&(er=ee,Yl=j,to=null);break;case"focusout":to=Yl=er=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,Bu(I,n,O);break;case"selectionchange":if(Sh)break;case"keydown":case"keyup":Bu(I,n,O)}var te;if(Hl)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else Zn?Lu(e,n)&&(ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ne="onCompositionStart");ne&&(_u&&n.locale!=="ko"&&(Zn||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Zn&&(te=ku()):(nn=O,$l="value"in nn?nn.value:nn.textContent,Zn=!0)),ee=ei(j,ne),0<ee.length&&(ne=new Eu(ne,e,null,n,O),I.push({event:ne,listeners:ee}),te?ne.data=te:(te=Ru(n),te!==null&&(ne.data=te)))),(te=uh?ch(e,n):dh(e,n))&&(j=ei(j,"onBeforeInput"),0<j.length&&(O=new Eu("onBeforeInput","beforeinput",null,n,O),I.push({event:O,listeners:j}),O.data=te))}Xu(I,t)})}function oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ar(e,n),s!=null&&r.unshift(oo(e,s,i)),s=Ar(e,t),s!=null&&r.push(oo(e,s,i))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zu(e,t,n,r,i){for(var s=t._reactName,d=[];n!==null&&n!==r;){var p=n,g=p.alternate,j=p.stateNode;if(g!==null&&g===r)break;p.tag===5&&j!==null&&(p=j,i?(g=Ar(n,s),g!=null&&d.unshift(oo(n,g,p))):i||(g=Ar(n,s),g!=null&&d.push(oo(n,g,p)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Eh=/\r\n?/g,Ph=/\u0000|\uFFFD/g;function ec(e){return(typeof e=="string"?e:""+e).replace(Eh,`
`).replace(Ph,"")}function ti(e,t,n){if(t=ec(t),ec(e)!==t&&n)throw Error(a(425))}function ni(){}var es=null,ts=null;function ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rs=typeof setTimeout=="function"?setTimeout:void 0,_h=typeof clearTimeout=="function"?clearTimeout:void 0,tc=typeof Promise=="function"?Promise:void 0,zh=typeof queueMicrotask=="function"?queueMicrotask:typeof tc<"u"?function(e){return tc.resolve(null).then(e).catch(Nh)}:rs;function Nh(e){setTimeout(function(){throw e})}function os(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gr(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),Lt="__reactFiber$"+rr,io="__reactProps$"+rr,At="__reactContainer$"+rr,is="__reactEvents$"+rr,Lh="__reactListeners$"+rr,Rh="__reactHandles$"+rr;function Tn(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nc(e);e!==null;){if(n=e[Lt])return n;e=nc(e)}return t}e=n,n=e.parentNode}return null}function lo(e){return e=e[Lt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function ri(e){return e[io]||null}var ls=[],ir=-1;function ln(e){return{current:e}}function Se(e){0>ir||(e.current=ls[ir],ls[ir]=null,ir--)}function xe(e,t){ir++,ls[ir]=e.current,e.current=t}var sn={},Be=ln(sn),qe=ln(!1),On=sn;function lr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function oi(){Se(qe),Se(Be)}function rc(e,t,n){if(Be.current!==sn)throw Error(a(168));xe(Be,t),xe(qe,n)}function oc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(a(108,he(e)||"Unknown",i));return U({},n,r)}function ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,On=Be.current,xe(Be,e),xe(qe,qe.current),!0}function ic(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=oc(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,Se(qe),Se(Be),xe(Be,e)):Se(qe),xe(qe,n)}var Mt=null,li=!1,ss=!1;function lc(e){Mt===null?Mt=[e]:Mt.push(e)}function Th(e){li=!0,lc(e)}function an(){if(!ss&&Mt!==null){ss=!0;var e=0,t=ge;try{var n=Mt;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,li=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),au(Nl,an),i}finally{ge=t,ss=!1}}return null}var sr=[],ar=0,si=null,ai=0,ft=[],pt=0,In=null,Ut=1,Bt="";function Dn(e,t){sr[ar++]=ai,sr[ar++]=si,si=e,ai=t}function sc(e,t,n){ft[pt++]=Ut,ft[pt++]=Bt,ft[pt++]=In,In=e;var r=Ut;e=Bt;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(t)+i;if(30<s){var d=i-i%5;s=(r&(1<<d)-1).toString(32),r>>=d,i-=d,Ut=1<<32-St(t)+i|n<<i|r,Bt=s+e}else Ut=1<<s|n<<i|r,Bt=e}function as(e){e.return!==null&&(Dn(e,1),sc(e,1,0))}function us(e){for(;e===si;)si=sr[--ar],sr[ar]=null,ai=sr[--ar],sr[ar]=null;for(;e===In;)In=ft[--pt],ft[pt]=null,Bt=ft[--pt],ft[pt]=null,Ut=ft[--pt],ft[pt]=null}var lt=null,st=null,je=!1,jt=null;function ac(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,st=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Ut,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,st=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(je){var t=st;if(t){var n=t;if(!uc(e,t)){if(cs(e))throw Error(a(418));t=on(n.nextSibling);var r=lt;t&&uc(e,t)?ac(r,n):(e.flags=e.flags&-4097|2,je=!1,lt=e)}}else{if(cs(e))throw Error(a(418));e.flags=e.flags&-4097|2,je=!1,lt=e}}}function cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function ui(e){if(e!==lt)return!1;if(!je)return cc(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ns(e.type,e.memoizedProps)),t&&(t=st)){if(cs(e))throw dc(),Error(a(418));for(;t;)ac(e,t),t=on(t.nextSibling)}if(cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=lt?on(e.stateNode.nextSibling):null;return!0}function dc(){for(var e=st;e;)e=on(e.nextSibling)}function ur(){st=lt=null,je=!1}function fs(e){jt===null?jt=[e]:jt.push(e)}var Oh=J.ReactCurrentBatchConfig;function so(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(d){var p=i.refs;d===null?delete p[s]:p[s]=d},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ci(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fc(e){var t=e._init;return t(e._payload)}function pc(e){function t(S,v){if(e){var k=S.deletions;k===null?(S.deletions=[v],S.flags|=16):k.push(v)}}function n(S,v){if(!e)return null;for(;v!==null;)t(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=gn(S,v),S.index=0,S.sibling=null,S}function s(S,v,k){return S.index=k,e?(k=S.alternate,k!==null?(k=k.index,k<v?(S.flags|=2,v):k):(S.flags|=2,v)):(S.flags|=1048576,v)}function d(S){return e&&S.alternate===null&&(S.flags|=2),S}function p(S,v,k,F){return v===null||v.tag!==6?(v=ra(k,S.mode,F),v.return=S,v):(v=i(v,k),v.return=S,v)}function g(S,v,k,F){var q=k.type;return q===K?O(S,v,k.props.children,F,k.key):v!==null&&(v.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ue&&fc(q)===v.type)?(F=i(v,k.props),F.ref=so(S,v,k),F.return=S,F):(F=Ii(k.type,k.key,k.props,null,S.mode,F),F.ref=so(S,v,k),F.return=S,F)}function j(S,v,k,F){return v===null||v.tag!==4||v.stateNode.containerInfo!==k.containerInfo||v.stateNode.implementation!==k.implementation?(v=oa(k,S.mode,F),v.return=S,v):(v=i(v,k.children||[]),v.return=S,v)}function O(S,v,k,F,q){return v===null||v.tag!==7?(v=Hn(k,S.mode,F,q),v.return=S,v):(v=i(v,k),v.return=S,v)}function I(S,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ra(""+v,S.mode,k),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:return k=Ii(v.type,v.key,v.props,null,S.mode,k),k.ref=so(S,null,v),k.return=S,k;case V:return v=oa(v,S.mode,k),v.return=S,v;case Ue:var F=v._init;return I(S,F(v._payload),k)}if(Fr(v)||X(v))return v=Hn(v,S.mode,k,null),v.return=S,v;ci(S,v)}return null}function L(S,v,k,F){var q=v!==null?v.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return q!==null?null:p(S,v,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Z:return k.key===q?g(S,v,k,F):null;case V:return k.key===q?j(S,v,k,F):null;case Ue:return q=k._init,L(S,v,q(k._payload),F)}if(Fr(k)||X(k))return q!==null?null:O(S,v,k,F,null);ci(S,k)}return null}function B(S,v,k,F,q){if(typeof F=="string"&&F!==""||typeof F=="number")return S=S.get(k)||null,p(v,S,""+F,q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Z:return S=S.get(F.key===null?k:F.key)||null,g(v,S,F,q);case V:return S=S.get(F.key===null?k:F.key)||null,j(v,S,F,q);case Ue:var ee=F._init;return B(S,v,k,ee(F._payload),q)}if(Fr(F)||X(F))return S=S.get(k)||null,O(v,S,F,q,null);ci(v,F)}return null}function Q(S,v,k,F){for(var q=null,ee=null,te=v,ne=v=0,Fe=null;te!==null&&ne<k.length;ne++){te.index>ne?(Fe=te,te=null):Fe=te.sibling;var fe=L(S,te,k[ne],F);if(fe===null){te===null&&(te=Fe);break}e&&te&&fe.alternate===null&&t(S,te),v=s(fe,v,ne),ee===null?q=fe:ee.sibling=fe,ee=fe,te=Fe}if(ne===k.length)return n(S,te),je&&Dn(S,ne),q;if(te===null){for(;ne<k.length;ne++)te=I(S,k[ne],F),te!==null&&(v=s(te,v,ne),ee===null?q=te:ee.sibling=te,ee=te);return je&&Dn(S,ne),q}for(te=r(S,te);ne<k.length;ne++)Fe=B(te,S,ne,k[ne],F),Fe!==null&&(e&&Fe.alternate!==null&&te.delete(Fe.key===null?ne:Fe.key),v=s(Fe,v,ne),ee===null?q=Fe:ee.sibling=Fe,ee=Fe);return e&&te.forEach(function(vn){return t(S,vn)}),je&&Dn(S,ne),q}function Y(S,v,k,F){var q=X(k);if(typeof q!="function")throw Error(a(150));if(k=q.call(k),k==null)throw Error(a(151));for(var ee=q=null,te=v,ne=v=0,Fe=null,fe=k.next();te!==null&&!fe.done;ne++,fe=k.next()){te.index>ne?(Fe=te,te=null):Fe=te.sibling;var vn=L(S,te,fe.value,F);if(vn===null){te===null&&(te=Fe);break}e&&te&&vn.alternate===null&&t(S,te),v=s(vn,v,ne),ee===null?q=vn:ee.sibling=vn,ee=vn,te=Fe}if(fe.done)return n(S,te),je&&Dn(S,ne),q;if(te===null){for(;!fe.done;ne++,fe=k.next())fe=I(S,fe.value,F),fe!==null&&(v=s(fe,v,ne),ee===null?q=fe:ee.sibling=fe,ee=fe);return je&&Dn(S,ne),q}for(te=r(S,te);!fe.done;ne++,fe=k.next())fe=B(te,S,ne,fe.value,F),fe!==null&&(e&&fe.alternate!==null&&te.delete(fe.key===null?ne:fe.key),v=s(fe,v,ne),ee===null?q=fe:ee.sibling=fe,ee=fe);return e&&te.forEach(function(fm){return t(S,fm)}),je&&Dn(S,ne),q}function ze(S,v,k,F){if(typeof k=="object"&&k!==null&&k.type===K&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Z:e:{for(var q=k.key,ee=v;ee!==null;){if(ee.key===q){if(q=k.type,q===K){if(ee.tag===7){n(S,ee.sibling),v=i(ee,k.props.children),v.return=S,S=v;break e}}else if(ee.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ue&&fc(q)===ee.type){n(S,ee.sibling),v=i(ee,k.props),v.ref=so(S,ee,k),v.return=S,S=v;break e}n(S,ee);break}else t(S,ee);ee=ee.sibling}k.type===K?(v=Hn(k.props.children,S.mode,F,k.key),v.return=S,S=v):(F=Ii(k.type,k.key,k.props,null,S.mode,F),F.ref=so(S,v,k),F.return=S,S=F)}return d(S);case V:e:{for(ee=k.key;v!==null;){if(v.key===ee)if(v.tag===4&&v.stateNode.containerInfo===k.containerInfo&&v.stateNode.implementation===k.implementation){n(S,v.sibling),v=i(v,k.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else t(S,v);v=v.sibling}v=oa(k,S.mode,F),v.return=S,S=v}return d(S);case Ue:return ee=k._init,ze(S,v,ee(k._payload),F)}if(Fr(k))return Q(S,v,k,F);if(X(k))return Y(S,v,k,F);ci(S,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,v!==null&&v.tag===6?(n(S,v.sibling),v=i(v,k),v.return=S,S=v):(n(S,v),v=ra(k,S.mode,F),v.return=S,S=v),d(S)):n(S,v)}return ze}var cr=pc(!0),hc=pc(!1),di=ln(null),fi=null,dr=null,ps=null;function hs(){ps=dr=fi=null}function ms(e){var t=di.current;Se(di),e._currentValue=t}function gs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){fi=e,ps=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Je=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(ps!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(fi===null)throw Error(a(308));dr=e,fi.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Fn=null;function vs(e){Fn===null?Fn=[e]:Fn.push(e)}function mc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,vs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var un=!1;function ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ce&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ht(e,n)}return i=r.interleaved,i===null?(t.next=t,vs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ht(e,n)}function pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tl(e,n)}}function vc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hi(e,t,n,r){var i=e.updateQueue;un=!1;var s=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var g=p,j=g.next;g.next=null,d===null?s=j:d.next=j,d=g;var O=e.alternate;O!==null&&(O=O.updateQueue,p=O.lastBaseUpdate,p!==d&&(p===null?O.firstBaseUpdate=j:p.next=j,O.lastBaseUpdate=g))}if(s!==null){var I=i.baseState;d=0,O=j=g=null,p=s;do{var L=p.lane,B=p.eventTime;if((r&L)===L){O!==null&&(O=O.next={eventTime:B,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var Q=e,Y=p;switch(L=t,B=n,Y.tag){case 1:if(Q=Y.payload,typeof Q=="function"){I=Q.call(B,I,L);break e}I=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=Y.payload,L=typeof Q=="function"?Q.call(B,I,L):Q,L==null)break e;I=U({},I,L);break e;case 2:un=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,L=i.effects,L===null?i.effects=[p]:L.push(p))}else B={eventTime:B,lane:L,tag:p.tag,payload:p.payload,callback:p.callback,next:null},O===null?(j=O=B,g=I):O=O.next=B,d|=L;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;L=p,p=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);if(O===null&&(g=I),i.baseState=g,i.firstBaseUpdate=j,i.lastBaseUpdate=O,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);An|=d,e.lanes=d,e.memoizedState=I}}function yc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var ao={},Rt=ln(ao),uo=ln(ao),co=ln(ao);function $n(e){if(e===ao)throw Error(a(174));return e}function xs(e,t){switch(xe(co,t),xe(uo,e),xe(Rt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}Se(Rt),xe(Rt,t)}function pr(){Se(Rt),Se(uo),Se(co)}function xc(e){$n(co.current);var t=$n(Rt.current),n=wl(t,e.type);t!==n&&(xe(uo,e),xe(Rt,n))}function ws(e){uo.current===e&&(Se(Rt),Se(uo))}var Ce=ln(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ss=[];function ks(){for(var e=0;e<Ss.length;e++)Ss[e]._workInProgressVersionPrimary=null;Ss.length=0}var gi=J.ReactCurrentDispatcher,js=J.ReactCurrentBatchConfig,bn=0,Ee=null,Te=null,Ie=null,vi=!1,fo=!1,po=0,Ih=0;function He(){throw Error(a(321))}function Cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function Es(e,t,n,r,i,s){if(bn=s,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gi.current=e===null||e.memoizedState===null?bh:Ah,e=n(r,i),fo){s=0;do{if(fo=!1,po=0,25<=s)throw Error(a(301));s+=1,Ie=Te=null,t.updateQueue=null,gi.current=Mh,e=n(r,i)}while(fo)}if(gi.current=wi,t=Te!==null&&Te.next!==null,bn=0,Ie=Te=Ee=null,vi=!1,t)throw Error(a(300));return e}function Ps(){var e=po!==0;return po=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Ee.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function mt(){if(Te===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ie===null?Ee.memoizedState:Ie.next;if(t!==null)Ie=t,Te=e;else{if(e===null)throw Error(a(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ie===null?Ee.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function ho(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=mt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var d=i.next;i.next=s.next,s.next=d}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var p=d=null,g=null,j=s;do{var O=j.lane;if((bn&O)===O)g!==null&&(g=g.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),r=j.hasEagerState?j.eagerState:e(r,j.action);else{var I={lane:O,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};g===null?(p=g=I,d=r):g=g.next=I,Ee.lanes|=O,An|=O}j=j.next}while(j!==null&&j!==s);g===null?d=r:g.next=p,kt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=d,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ee.lanes|=s,An|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zs(e){var t=mt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do s=e(s,d.action),d=d.next;while(d!==i);kt(s,t.memoizedState)||(Je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function wc(){}function Sc(e,t){var n=Ee,r=mt(),i=t(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,Je=!0),r=r.queue,Ns(Cc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,mo(9,jc.bind(null,n,r,i,t),void 0,null),De===null)throw Error(a(349));(bn&30)!==0||kc(n,t,i)}return i}function kc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jc(e,t,n,r){t.value=n,t.getSnapshot=r,Ec(t)&&Pc(e)}function Cc(e,t,n){return n(function(){Ec(t)&&Pc(e)})}function Ec(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Pc(e){var t=Ht(e,1);t!==null&&_t(t,e,1,-1)}function _c(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:e},t.queue=e,e=e.dispatch=$h.bind(null,Ee,e),[t.memoizedState,e]}function mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zc(){return mt().memoizedState}function yi(e,t,n,r){var i=Tt();Ee.flags|=e,i.memoizedState=mo(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var i=mt();r=r===void 0?null:r;var s=void 0;if(Te!==null){var d=Te.memoizedState;if(s=d.destroy,r!==null&&Cs(r,d.deps)){i.memoizedState=mo(t,n,s,r);return}}Ee.flags|=e,i.memoizedState=mo(1|t,n,s,r)}function Nc(e,t){return yi(8390656,8,e,t)}function Ns(e,t){return xi(2048,8,e,t)}function Lc(e,t){return xi(4,2,e,t)}function Rc(e,t){return xi(4,4,e,t)}function Tc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oc(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,Tc.bind(null,t,e),n)}function Ls(){}function Ic(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dc(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fc(e,t,n){return(bn&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n):(kt(n,t)||(n=fu(),Ee.lanes|=n,An|=n,e.baseState=!0),t)}function Dh(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=js.transition;js.transition={};try{e(!1),t()}finally{ge=n,js.transition=r}}function $c(){return mt().memoizedState}function Fh(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bc(e))Ac(t,n);else if(n=mc(e,t,n,r),n!==null){var i=Ke();_t(n,e,r,i),Mc(n,t,r)}}function $h(e,t,n){var r=hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bc(e))Ac(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,p=s(d,n);if(i.hasEagerState=!0,i.eagerState=p,kt(p,d)){var g=t.interleaved;g===null?(i.next=i,vs(t)):(i.next=g.next,g.next=i),t.interleaved=i;return}}catch{}finally{}n=mc(e,t,i,r),n!==null&&(i=Ke(),_t(n,e,r,i),Mc(n,t,r))}}function bc(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Ac(e,t){fo=vi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tl(e,n)}}var wi={readContext:ht,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},bh={readContext:ht,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Nc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yi(4194308,4,Tc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return yi(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fh.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:Ls,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=Dh.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Tt();if(je){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),De===null)throw Error(a(349));(bn&30)!==0||kc(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Nc(Cc.bind(null,r,s,e),[e]),r.flags|=2048,mo(9,jc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Tt(),t=De.identifierPrefix;if(je){var n=Bt,r=Ut;n=(r&~(1<<32-St(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=po++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ih++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ah={readContext:ht,useCallback:Ic,useContext:ht,useEffect:Ns,useImperativeHandle:Oc,useInsertionEffect:Lc,useLayoutEffect:Rc,useMemo:Dc,useReducer:_s,useRef:zc,useState:function(){return _s(ho)},useDebugValue:Ls,useDeferredValue:function(e){var t=mt();return Fc(t,Te.memoizedState,e)},useTransition:function(){var e=_s(ho)[0],t=mt().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:Sc,useId:$c,unstable_isNewReconciler:!1},Mh={readContext:ht,useCallback:Ic,useContext:ht,useEffect:Ns,useImperativeHandle:Oc,useInsertionEffect:Lc,useLayoutEffect:Rc,useMemo:Dc,useReducer:zs,useRef:zc,useState:function(){return zs(ho)},useDebugValue:Ls,useDeferredValue:function(e){var t=mt();return Te===null?t.memoizedState=e:Fc(t,Te.memoizedState,e)},useTransition:function(){var e=zs(ho)[0],t=mt().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:Sc,useId:$c,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=hn(e),s=Wt(r,i);s.payload=t,n!=null&&(s.callback=n),t=cn(e,s,i),t!==null&&(_t(t,e,i,r),pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=hn(e),s=Wt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=cn(e,s,i),t!==null&&(_t(t,e,i,r),pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=hn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=cn(e,i,r),t!==null&&(_t(t,e,r,n),pi(t,e,r))}};function Uc(e,t,n,r,i,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,d):t.prototype&&t.prototype.isPureReactComponent?!eo(n,r)||!eo(i,s):!0}function Bc(e,t,n){var r=!1,i=sn,s=t.contextType;return typeof s=="object"&&s!==null?s=ht(s):(i=Xe(t)?On:Be.current,r=t.contextTypes,s=(r=r!=null)?lr(e,i):sn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Hc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function Ts(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ys(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ht(s):(s=Xe(t)?On:Be.current,i.context=lr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Rs(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Si.enqueueReplaceState(i,i.state,null),hi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t){try{var n="",r=t;do n+=ae(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uh=typeof WeakMap=="function"?WeakMap:Map;function Wc(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,Ks=r),Is(e,t)},n}function Vc(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Is(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Is(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function Qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=tm.bind(null,e,t,n),t.then(e,e))}function Yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Bh=J.ReactCurrentOwner,Je=!1;function Ge(e,t,n,r){t.child=e===null?hc(t,null,n,r):cr(t,e.child,n,r)}function Kc(e,t,n,r,i){n=n.render;var s=t.ref;return fr(t,i),r=Es(e,t,n,r,s,i),n=Ps(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(je&&n&&as(t),t.flags|=1,Ge(e,t,r,i),t.child)}function qc(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!na(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Xc(e,t,s,r,i)):(e=Ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(d,r)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=gn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Xc(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(eo(s,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return Ds(e,t,n,r,i)}function Jc(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(gr,at),at|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(gr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,xe(gr,at),at|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,xe(gr,at),at|=r;return Ge(e,t,i,n),t.child}function Zc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ds(e,t,n,r,i){var s=Xe(n)?On:Be.current;return s=lr(t,s),fr(t,i),n=Es(e,t,n,r,s,i),r=Ps(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(je&&r&&as(t),t.flags|=1,Ge(e,t,n,i),t.child)}function ed(e,t,n,r,i){if(Xe(n)){var s=!0;ii(t)}else s=!1;if(fr(t,i),t.stateNode===null)ji(e,t),Bc(t,n,r),Ts(t,n,r,i),r=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var g=d.context,j=n.contextType;typeof j=="object"&&j!==null?j=ht(j):(j=Xe(n)?On:Be.current,j=lr(t,j));var O=n.getDerivedStateFromProps,I=typeof O=="function"||typeof d.getSnapshotBeforeUpdate=="function";I||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==r||g!==j)&&Hc(t,d,r,j),un=!1;var L=t.memoizedState;d.state=L,hi(t,r,d,i),g=t.memoizedState,p!==r||L!==g||qe.current||un?(typeof O=="function"&&(Rs(t,n,O,r),g=t.memoizedState),(p=un||Uc(t,n,p,r,L,g,j))?(I||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),d.props=r,d.state=g,d.context=j,r=p):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{d=t.stateNode,gc(e,t),p=t.memoizedProps,j=t.type===t.elementType?p:Ct(t.type,p),d.props=j,I=t.pendingProps,L=d.context,g=n.contextType,typeof g=="object"&&g!==null?g=ht(g):(g=Xe(n)?On:Be.current,g=lr(t,g));var B=n.getDerivedStateFromProps;(O=typeof B=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==I||L!==g)&&Hc(t,d,r,g),un=!1,L=t.memoizedState,d.state=L,hi(t,r,d,i);var Q=t.memoizedState;p!==I||L!==Q||qe.current||un?(typeof B=="function"&&(Rs(t,n,B,r),Q=t.memoizedState),(j=un||Uc(t,n,j,r,L,Q,g)||!1)?(O||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,Q,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,Q,g)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Q),d.props=r,d.state=Q,d.context=g,r=j):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),r=!1)}return Fs(e,t,n,r,s,i)}function Fs(e,t,n,r,i,s){Zc(e,t);var d=(t.flags&128)!==0;if(!r&&!d)return i&&ic(t,n,!1),Vt(e,t,s);r=t.stateNode,Bh.current=t;var p=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&d?(t.child=cr(t,e.child,null,s),t.child=cr(t,null,p,s)):Ge(e,t,p,s),t.memoizedState=r.state,i&&ic(t,n,!0),t.child}function td(e){var t=e.stateNode;t.pendingContext?rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rc(e,t.context,!1),xs(e,t.containerInfo)}function nd(e,t,n,r,i){return ur(),fs(i),t.flags|=256,Ge(e,t,n,r),t.child}var $s={dehydrated:null,treeContext:null,retryLane:0};function bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,t,n){var r=t.pendingProps,i=Ce.current,s=!1,d=(t.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(Ce,i&1),e===null)return ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=r.children,e=r.fallback,s?(r=t.mode,s=t.child,d={mode:"hidden",children:d},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=Di(d,r,0,null),e=Hn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=bs(n),t.memoizedState=$s,e):As(t,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Hh(e,t,d,r,p,i,n);if(s){s=r.fallback,d=t.mode,i=e.child,p=i.sibling;var g={mode:"hidden",children:r.children};return(d&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=gn(i,g),r.subtreeFlags=i.subtreeFlags&14680064),p!==null?s=gn(p,s):(s=Hn(s,d,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,d=e.child.memoizedState,d=d===null?bs(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~n,t.memoizedState=$s,r}return s=e.child,e=s.sibling,r=gn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function As(e,t){return t=Di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&fs(r),cr(t,e.child,null,n),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hh(e,t,n,r,i,s,d){if(n)return t.flags&256?(t.flags&=-257,r=Os(Error(a(422))),ki(e,t,d,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Di({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,d,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&cr(t,e.child,null,d),t.child.memoizedState=bs(d),t.memoizedState=$s,s);if((t.mode&1)===0)return ki(e,t,d,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var p=r.dgst;return r=p,s=Error(a(419)),r=Os(s,r,void 0),ki(e,t,d,r)}if(p=(d&e.childLanes)!==0,Je||p){if(r=De,r!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|d))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ht(e,i),_t(r,e,i,-1))}return ta(),r=Os(Error(a(421))),ki(e,t,d,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,st=on(i.nextSibling),lt=t,je=!0,jt=null,e!==null&&(ft[pt++]=Ut,ft[pt++]=Bt,ft[pt++]=In,Ut=e.id,Bt=e.overflow,In=t),t=As(t,r.children),t.flags|=4096,t)}function od(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gs(e.return,t,n)}function Ms(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function id(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(e,t,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&od(e,n,t);else if(e.tag===19)od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(Ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ms(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ms(t,!0,n,null,s);break;case"together":Ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wh(e,t,n){switch(t.tag){case 3:td(t),ur();break;case 5:xc(t);break;case 1:Xe(t.type)&&ii(t);break;case 4:xs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xe(di,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(Ce,Ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?rd(e,t,n):(xe(Ce,Ce.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);xe(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return id(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Jc(e,t,n)}return Vt(e,t,n)}var ld,Us,sd,ad;ld=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Us=function(){},sd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Rt.current);var s=null;switch(n){case"input":i=gl(e,i),r=gl(e,r),s=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),s=[];break;case"textarea":i=xl(e,i),r=xl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ni)}Sl(n,r);var d;n=null;for(j in i)if(!r.hasOwnProperty(j)&&i.hasOwnProperty(j)&&i[j]!=null)if(j==="style"){var p=i[j];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(f.hasOwnProperty(j)?s||(s=[]):(s=s||[]).push(j,null));for(j in r){var g=r[j];if(p=i!=null?i[j]:void 0,r.hasOwnProperty(j)&&g!==p&&(g!=null||p!=null))if(j==="style")if(p){for(d in p)!p.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in g)g.hasOwnProperty(d)&&p[d]!==g[d]&&(n||(n={}),n[d]=g[d])}else n||(s||(s=[]),s.push(j,n)),n=g;else j==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(s=s||[]).push(j,g)):j==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(j,""+g):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(f.hasOwnProperty(j)?(g!=null&&j==="onScroll"&&we("scroll",e),s||p===g||(s=[])):(s=s||[]).push(j,g))}n&&(s=s||[]).push("style",n);var j=s;(t.updateQueue=j)&&(t.flags|=4)}},ad=function(e,t,n,r){n!==r&&(t.flags|=4)};function go(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vh(e,t,n){var r=t.pendingProps;switch(us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return Xe(t.type)&&oi(),We(t),null;case 3:return r=t.stateNode,pr(),Se(qe),Se(Be),ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jt!==null&&(Js(jt),jt=null))),Us(e,t),We(t),null;case 5:ws(t);var i=$n(co.current);if(n=t.type,e!==null&&t.stateNode!=null)sd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return We(t),null}if(e=$n(Rt.current),ui(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Lt]=t,r[io]=s,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)we(no[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Ba(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Va(r,s),we("invalid",r)}Sl(n,s),i=null;for(var d in s)if(s.hasOwnProperty(d)){var p=s[d];d==="children"?typeof p=="string"?r.textContent!==p&&(s.suppressHydrationWarning!==!0&&ti(r.textContent,p,e),i=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&ti(r.textContent,p,e),i=["children",""+p]):f.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&we("scroll",r)}switch(n){case"input":bt(r),Wa(r,s,!0);break;case"textarea":bt(r),Ya(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ni)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ga(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(n,{is:r.is}):(e=d.createElement(n),n==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,n),e[Lt]=t,e[io]=r,ld(e,t,!1,!1),t.stateNode=e;e:{switch(d=kl(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)we(no[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":Ba(e,r),i=gl(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),we("invalid",e);break;case"textarea":Va(e,r),i=xl(e,r),we("invalid",e);break;default:i=r}Sl(n,i),p=i;for(s in p)if(p.hasOwnProperty(s)){var g=p[s];s==="style"?Xa(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Ka(e,g)):s==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&$r(e,g):typeof g=="number"&&$r(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(f.hasOwnProperty(s)?g!=null&&s==="onScroll"&&we("scroll",e):g!=null&&M(e,s,g,d))}switch(n){case"input":bt(e),Wa(e,r,!1);break;case"textarea":bt(e),Ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Gn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ni)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)ad(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=$n(co.current),$n(Rt.current),ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(s=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ti(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return We(t),null;case 13:if(Se(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&st!==null&&(t.mode&1)!==0&&(t.flags&128)===0)dc(),ur(),t.flags|=98560,s=!1;else if(s=ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[Lt]=t}else ur(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),s=!1}else jt!==null&&(Js(jt),jt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Oe===0&&(Oe=3):ta())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return pr(),Us(e,t),e===null&&ro(t.stateNode.containerInfo),We(t),null;case 10:return ms(t.type._context),We(t),null;case 17:return Xe(t.type)&&oi(),We(t),null;case 19:if(Se(Ce),s=t.memoizedState,s===null)return We(t),null;if(r=(t.flags&128)!==0,d=s.rendering,d===null)if(r)go(s,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=mi(e),d!==null){for(t.flags|=128,go(s,!1),r=d.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(Ce,Ce.current&1|2),t.child}e=e.sibling}s.tail!==null&&_e()>vr&&(t.flags|=128,r=!0,go(s,!1),t.lanes=4194304)}else{if(!r)if(e=mi(d),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!je)return We(t),null}else 2*_e()-s.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,go(s,!1),t.lanes=4194304);s.isBackwards?(d.sibling=t.child,t.child=d):(n=s.last,n!==null?n.sibling=d:t.child=d,s.last=d)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=_e(),t.sibling=null,n=Ce.current,xe(Ce,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return ea(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Qh(e,t){switch(us(t),t.tag){case 1:return Xe(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),Se(qe),Se(Be),ks(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ws(t),null;case 13:if(Se(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ce),null;case 4:return pr(),null;case 10:return ms(t.type._context),null;case 22:case 23:return ea(),null;case 24:return null;default:return null}}var Ci=!1,Ve=!1,Yh=typeof WeakSet=="function"?WeakSet:Set,W=null;function mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Bs(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var ud=!1;function Gh(e,t){if(es=Wo,e=Uu(),Ql(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,p=-1,g=-1,j=0,O=0,I=e,L=null;t:for(;;){for(var B;I!==n||i!==0&&I.nodeType!==3||(p=d+i),I!==s||r!==0&&I.nodeType!==3||(g=d+r),I.nodeType===3&&(d+=I.nodeValue.length),(B=I.firstChild)!==null;)L=I,I=B;for(;;){if(I===e)break t;if(L===n&&++j===i&&(p=d),L===s&&++O===r&&(g=d),(B=I.nextSibling)!==null)break;I=L,L=I.parentNode}I=B}n=p===-1||g===-1?null:{start:p,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(ts={focusedElem:e,selectionRange:n},Wo=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var Q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var Y=Q.memoizedProps,ze=Q.memoizedState,S=t.stateNode,v=S.getSnapshotBeforeUpdate(t.elementType===t.type?Y:Ct(t.type,Y),ze);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(F){Pe(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return Q=ud,ud=!1,Q}function vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bs(t,n,s)}i=i.next}while(i!==r)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cd(e){var t=e.alternate;t!==null&&(e.alternate=null,cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[io],delete t[is],delete t[Lh],delete t[Rh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dd(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ni));else if(r!==4&&(e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}function Vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}var Ae=null,Et=!1;function dn(e,t,n){for(n=n.child;n!==null;)pd(e,t,n),n=n.sibling}function pd(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 5:Ve||mr(n,t);case 6:var r=Ae,i=Et;Ae=null,dn(e,t,n),Ae=r,Et=i,Ae!==null&&(Et?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(Et?(e=Ae,n=n.stateNode,e.nodeType===8?os(e.parentNode,n):e.nodeType===1&&os(e,n),Gr(e)):os(Ae,n.stateNode));break;case 4:r=Ae,i=Et,Ae=n.stateNode.containerInfo,Et=!0,dn(e,t,n),Ae=r,Et=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&Bs(n,t,d),i=i.next}while(i!==r)}dn(e,t,n);break;case 1:if(!Ve&&(mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Pe(n,t,p)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,dn(e,t,n),Ve=r):dn(e,t,n);break;default:dn(e,t,n)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yh),t.forEach(function(r){var i=rm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 5:Ae=p.stateNode,Et=!1;break e;case 3:Ae=p.stateNode.containerInfo,Et=!0;break e;case 4:Ae=p.stateNode.containerInfo,Et=!0;break e}p=p.return}if(Ae===null)throw Error(a(160));pd(s,d,i),Ae=null,Et=!1;var g=i.alternate;g!==null&&(g.return=null),i.return=null}catch(j){Pe(i,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)md(t,e),t=t.sibling}function md(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Ot(e),r&4){try{vo(3,e,e.return),Ei(3,e)}catch(Y){Pe(e,e.return,Y)}try{vo(5,e,e.return)}catch(Y){Pe(e,e.return,Y)}}break;case 1:Pt(t,e),Ot(e),r&512&&n!==null&&mr(n,n.return);break;case 5:if(Pt(t,e),Ot(e),r&512&&n!==null&&mr(n,n.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(Y){Pe(e,e.return,Y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,d=n!==null?n.memoizedProps:s,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&Ha(i,s),kl(p,d);var j=kl(p,s);for(d=0;d<g.length;d+=2){var O=g[d],I=g[d+1];O==="style"?Xa(i,I):O==="dangerouslySetInnerHTML"?Ka(i,I):O==="children"?$r(i,I):M(i,O,I,j)}switch(p){case"input":vl(i,s);break;case"textarea":Qa(i,s);break;case"select":var L=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var B=s.value;B!=null?Gn(i,!!s.multiple,B,!1):L!==!!s.multiple&&(s.defaultValue!=null?Gn(i,!!s.multiple,s.defaultValue,!0):Gn(i,!!s.multiple,s.multiple?[]:"",!1))}i[io]=s}catch(Y){Pe(e,e.return,Y)}}break;case 6:if(Pt(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(Y){Pe(e,e.return,Y)}}break;case 3:if(Pt(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(Y){Pe(e,e.return,Y)}break;case 4:Pt(t,e),Ot(e);break;case 13:Pt(t,e),Ot(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gs=_e())),r&4&&hd(e);break;case 22:if(O=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(j=Ve)||O,Pt(t,e),Ve=j):Pt(t,e),Ot(e),r&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!O&&(e.mode&1)!==0)for(W=e,O=e.child;O!==null;){for(I=W=O;W!==null;){switch(L=W,B=L.child,L.tag){case 0:case 11:case 14:case 15:vo(4,L,L.return);break;case 1:mr(L,L.return);var Q=L.stateNode;if(typeof Q.componentWillUnmount=="function"){r=L,n=L.return;try{t=r,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch(Y){Pe(r,n,Y)}}break;case 5:mr(L,L.return);break;case 22:if(L.memoizedState!==null){yd(I);continue}}B!==null?(B.return=L,W=B):yd(I)}O=O.sibling}e:for(O=null,I=e;;){if(I.tag===5){if(O===null){O=I;try{i=I.stateNode,j?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=I.stateNode,g=I.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=qa("display",d))}catch(Y){Pe(e,e.return,Y)}}}else if(I.tag===6){if(O===null)try{I.stateNode.nodeValue=j?"":I.memoizedProps}catch(Y){Pe(e,e.return,Y)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;O===I&&(O=null),I=I.return}O===I&&(O=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:Pt(t,e),Ot(e),r&4&&hd(e);break;case 21:break;default:Pt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dd(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($r(i,""),r.flags&=-33);var s=fd(e);Vs(e,s,i);break;case 3:case 4:var d=r.stateNode.containerInfo,p=fd(e);Ws(e,p,d);break;default:throw Error(a(161))}}catch(g){Pe(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kh(e,t,n){W=e,gd(e)}function gd(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var d=i.memoizedState!==null||Ci;if(!d){var p=i.alternate,g=p!==null&&p.memoizedState!==null||Ve;p=Ci;var j=Ve;if(Ci=d,(Ve=g)&&!j)for(W=i;W!==null;)d=W,g=d.child,d.tag===22&&d.memoizedState!==null?xd(i):g!==null?(g.return=d,W=g):xd(i);for(;s!==null;)W=s,gd(s),s=s.sibling;W=i,Ci=p,Ve=j}vd(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,W=s):vd(e)}}function vd(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||Ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&yc(t,s,r);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yc(t,d,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var O=j.memoizedState;if(O!==null){var I=O.dehydrated;I!==null&&Gr(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ve||t.flags&512&&Hs(t)}catch(L){Pe(t,t.return,L)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function yd(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function xd(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ei(4,t)}catch(g){Pe(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(g){Pe(t,i,g)}}var s=t.return;try{Hs(t)}catch(g){Pe(t,s,g)}break;case 5:var d=t.return;try{Hs(t)}catch(g){Pe(t,d,g)}}}catch(g){Pe(t,t.return,g)}if(t===e){W=null;break}var p=t.sibling;if(p!==null){p.return=t.return,W=p;break}W=t.return}}var qh=Math.ceil,Pi=J.ReactCurrentDispatcher,Qs=J.ReactCurrentOwner,gt=J.ReactCurrentBatchConfig,ce=0,De=null,Ne=null,Me=0,at=0,gr=ln(0),Oe=0,yo=null,An=0,_i=0,Ys=0,xo=null,Ze=null,Gs=0,vr=1/0,Qt=null,zi=!1,Ks=null,fn=null,Ni=!1,pn=null,Li=0,wo=0,qs=null,Ri=-1,Ti=0;function Ke(){return(ce&6)!==0?_e():Ri!==-1?Ri:Ri=_e()}function hn(e){return(e.mode&1)===0?1:(ce&2)!==0&&Me!==0?Me&-Me:Oh.transition!==null?(Ti===0&&(Ti=fu()),Ti):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Su(e.type)),e)}function _t(e,t,n,r){if(50<wo)throw wo=0,qs=null,Error(a(185));Hr(e,n,r),((ce&2)===0||e!==De)&&(e===De&&((ce&2)===0&&(_i|=n),Oe===4&&mn(e,Me)),et(e,r),n===1&&ce===0&&(t.mode&1)===0&&(vr=_e()+500,li&&an()))}function et(e,t){var n=e.callbackNode;Op(e,t);var r=Uo(e,e===De?Me:0);if(r===0)n!==null&&uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uu(n),t===1)e.tag===0?Th(Sd.bind(null,e)):lc(Sd.bind(null,e)),zh(function(){(ce&6)===0&&an()}),n=null;else{switch(pu(r)){case 1:n=Nl;break;case 4:n=cu;break;case 16:n=$o;break;case 536870912:n=du;break;default:n=$o}n=Nd(n,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wd(e,t){if(Ri=-1,Ti=0,(ce&6)!==0)throw Error(a(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=Uo(e,e===De?Me:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Oi(e,r);else{t=r;var i=ce;ce|=2;var s=jd();(De!==e||Me!==t)&&(Qt=null,vr=_e()+500,Un(e,t));do try{Zh();break}catch(p){kd(e,p)}while(!0);hs(),Pi.current=s,ce=i,Ne!==null?t=0:(De=null,Me=0,t=Oe)}if(t!==0){if(t===2&&(i=Ll(e),i!==0&&(r=i,t=Xs(e,i))),t===1)throw n=yo,Un(e,0),mn(e,r),et(e,_e()),n;if(t===6)mn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Xh(i)&&(t=Oi(e,r),t===2&&(s=Ll(e),s!==0&&(r=s,t=Xs(e,s))),t===1))throw n=yo,Un(e,0),mn(e,r),et(e,_e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:Bn(e,Ze,Qt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=Gs+500-_e(),10<t)){if(Uo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(Bn.bind(null,e,Ze,Qt),t);break}Bn(e,Ze,Qt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var d=31-St(r);s=1<<d,d=t[d],d>i&&(i=d),r&=~s}if(r=i,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qh(r/1960))-r,10<r){e.timeoutHandle=rs(Bn.bind(null,e,Ze,Qt),r);break}Bn(e,Ze,Qt);break;case 5:Bn(e,Ze,Qt);break;default:throw Error(a(329))}}}return et(e,_e()),e.callbackNode===n?wd.bind(null,e):null}function Xs(e,t){var n=xo;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Js(t)),e}function Js(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Xh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~Ys,t&=~_i,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-St(t),r=1<<n;e[n]=-1,t&=~r}}function Sd(e){if((ce&6)!==0)throw Error(a(327));yr();var t=Uo(e,0);if((t&1)===0)return et(e,_e()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=Ll(e);r!==0&&(t=r,n=Xs(e,r))}if(n===1)throw n=yo,Un(e,0),mn(e,t),et(e,_e()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,Ze,Qt),et(e,_e()),null}function Zs(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(vr=_e()+500,li&&an())}}function Mn(e){pn!==null&&pn.tag===0&&(ce&6)===0&&yr();var t=ce;ce|=1;var n=gt.transition,r=ge;try{if(gt.transition=null,ge=1,e)return e()}finally{ge=r,gt.transition=n,ce=t,(ce&6)===0&&an()}}function ea(){at=gr.current,Se(gr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_h(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:pr(),Se(qe),Se(Be),ks();break;case 5:ws(r);break;case 4:pr();break;case 13:Se(Ce);break;case 19:Se(Ce);break;case 10:ms(r.type._context);break;case 22:case 23:ea()}n=n.return}if(De=e,Ne=e=gn(e.current,null),Me=at=t,Oe=0,yo=null,Ys=_i=An=0,Ze=xo=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var d=s.next;s.next=i,r.next=d}n.pending=r}Fn=null}return e}function kd(e,t){do{var n=Ne;try{if(hs(),gi.current=wi,vi){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vi=!1}if(bn=0,Ie=Te=Ee=null,fo=!1,po=0,Qs.current=null,n===null||n.return===null){Oe=1,yo=t,Ne=null;break}e:{var s=e,d=n.return,p=n,g=t;if(t=Me,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var j=g,O=p,I=O.tag;if((O.mode&1)===0&&(I===0||I===11||I===15)){var L=O.alternate;L?(O.updateQueue=L.updateQueue,O.memoizedState=L.memoizedState,O.lanes=L.lanes):(O.updateQueue=null,O.memoizedState=null)}var B=Yc(d);if(B!==null){B.flags&=-257,Gc(B,d,p,s,t),B.mode&1&&Qc(s,j,t),t=B,g=j;var Q=t.updateQueue;if(Q===null){var Y=new Set;Y.add(g),t.updateQueue=Y}else Q.add(g);break e}else{if((t&1)===0){Qc(s,j,t),ta();break e}g=Error(a(426))}}else if(je&&p.mode&1){var ze=Yc(d);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),Gc(ze,d,p,s,t),fs(hr(g,p));break e}}s=g=hr(g,p),Oe!==4&&(Oe=2),xo===null?xo=[s]:xo.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var S=Wc(s,g,t);vc(s,S);break e;case 1:p=g;var v=s.type,k=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(fn===null||!fn.has(k)))){s.flags|=65536,t&=-t,s.lanes|=t;var F=Vc(s,p,t);vc(s,F);break e}}s=s.return}while(s!==null)}Ed(n)}catch(q){t=q,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function jd(){var e=Pi.current;return Pi.current=wi,e===null?wi:e}function ta(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),De===null||(An&268435455)===0&&(_i&268435455)===0||mn(De,Me)}function Oi(e,t){var n=ce;ce|=2;var r=jd();(De!==e||Me!==t)&&(Qt=null,Un(e,t));do try{Jh();break}catch(i){kd(e,i)}while(!0);if(hs(),ce=n,Pi.current=r,Ne!==null)throw Error(a(261));return De=null,Me=0,Oe}function Jh(){for(;Ne!==null;)Cd(Ne)}function Zh(){for(;Ne!==null&&!Cp();)Cd(Ne)}function Cd(e){var t=zd(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?Ed(e):Ne=t,Qs.current=null}function Ed(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Vh(n,t,at),n!==null){Ne=n;return}}else{if(n=Qh(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Ne=null;return}}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Oe===0&&(Oe=5)}function Bn(e,t,n){var r=ge,i=gt.transition;try{gt.transition=null,ge=1,em(e,t,n,r)}finally{gt.transition=i,ge=r}return null}function em(e,t,n,r){do yr();while(pn!==null);if((ce&6)!==0)throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ip(e,s),e===De&&(Ne=De=null,Me=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ni||(Ni=!0,Nd($o,function(){return yr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=gt.transition,gt.transition=null;var d=ge;ge=1;var p=ce;ce|=4,Qs.current=null,Gh(e,n),md(n,e),wh(ts),Wo=!!es,ts=es=null,e.current=n,Kh(n),Ep(),ce=p,ge=d,gt.transition=s}else e.current=n;if(Ni&&(Ni=!1,pn=e,Li=i),s=e.pendingLanes,s===0&&(fn=null),zp(n.stateNode),et(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zi)throw zi=!1,e=Ks,Ks=null,e;return(Li&1)!==0&&e.tag!==0&&yr(),s=e.pendingLanes,(s&1)!==0?e===qs?wo++:(wo=0,qs=e):wo=0,an(),null}function yr(){if(pn!==null){var e=pu(Li),t=gt.transition,n=ge;try{if(gt.transition=null,ge=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,Li=0,(ce&6)!==0)throw Error(a(331));var i=ce;for(ce|=4,W=e.current;W!==null;){var s=W,d=s.child;if((W.flags&16)!==0){var p=s.deletions;if(p!==null){for(var g=0;g<p.length;g++){var j=p[g];for(W=j;W!==null;){var O=W;switch(O.tag){case 0:case 11:case 15:vo(8,O,s)}var I=O.child;if(I!==null)I.return=O,W=I;else for(;W!==null;){O=W;var L=O.sibling,B=O.return;if(cd(O),O===j){W=null;break}if(L!==null){L.return=B,W=L;break}W=B}}}var Q=s.alternate;if(Q!==null){var Y=Q.child;if(Y!==null){Q.child=null;do{var ze=Y.sibling;Y.sibling=null,Y=ze}while(Y!==null)}}W=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,W=d;else e:for(;W!==null;){if(s=W,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,W=S;break e}W=s.return}}var v=e.current;for(W=v;W!==null;){d=W;var k=d.child;if((d.subtreeFlags&2064)!==0&&k!==null)k.return=d,W=k;else e:for(d=v;W!==null;){if(p=W,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Ei(9,p)}}catch(q){Pe(p,p.return,q)}if(p===d){W=null;break e}var F=p.sibling;if(F!==null){F.return=p.return,W=F;break e}W=p.return}}if(ce=i,an(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{ge=n,gt.transition=t}}return!1}function Pd(e,t,n){t=hr(n,t),t=Wc(e,t,1),e=cn(e,t,1),t=Ke(),e!==null&&(Hr(e,1,t),et(e,t))}function Pe(e,t,n){if(e.tag===3)Pd(e,e,n);else for(;t!==null;){if(t.tag===3){Pd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=hr(n,e),e=Vc(t,e,1),t=cn(t,e,1),e=Ke(),t!==null&&(Hr(t,1,e),et(t,e));break}}t=t.return}}function tm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Me&n)===n&&(Oe===4||Oe===3&&(Me&130023424)===Me&&500>_e()-Gs?Un(e,0):Ys|=n),et(e,t)}function _d(e,t){t===0&&((e.mode&1)===0?t=1:(t=Mo,Mo<<=1,(Mo&130023424)===0&&(Mo=4194304)));var n=Ke();e=Ht(e,t),e!==null&&(Hr(e,t,n),et(e,n))}function nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_d(e,n)}function rm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),_d(e,n)}var zd;zd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Je=!1,Wh(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,je&&(t.flags&1048576)!==0&&sc(t,ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ji(e,t),e=t.pendingProps;var i=lr(t,Be.current);fr(t,n),i=Es(null,t,r,e,i,n);var s=Ps();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(s=!0,ii(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ys(t),i.updater=Si,t.stateNode=i,i._reactInternals=t,Ts(t,r,e,n),t=Fs(null,t,r,!0,s,n)):(t.tag=0,je&&s&&as(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=im(r),e=Ct(r,e),i){case 0:t=Ds(null,t,r,e,n);break e;case 1:t=ed(null,t,r,e,n);break e;case 11:t=Kc(null,t,r,e,n);break e;case 14:t=qc(null,t,r,Ct(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Ds(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),ed(e,t,r,i,n);case 3:e:{if(td(t),e===null)throw Error(a(387));r=t.pendingProps,s=t.memoizedState,i=s.element,gc(e,t),hi(t,r,null,n);var d=t.memoizedState;if(r=d.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=hr(Error(a(423)),t),t=nd(e,t,r,n,i);break e}else if(r!==i){i=hr(Error(a(424)),t),t=nd(e,t,r,n,i);break e}else for(st=on(t.stateNode.containerInfo.firstChild),lt=t,je=!0,jt=null,n=hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){t=Vt(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return xc(t),e===null&&ds(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,d=i.children,ns(r,i)?d=null:s!==null&&ns(r,s)&&(t.flags|=32),Zc(e,t),Ge(e,t,d,n),t.child;case 6:return e===null&&ds(t),null;case 13:return rd(e,t,n);case 4:return xs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Kc(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,d=i.value,xe(di,r._currentValue),r._currentValue=d,s!==null)if(kt(s.value,d)){if(s.children===i.children&&!qe.current){t=Vt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){d=s.child;for(var g=p.firstContext;g!==null;){if(g.context===r){if(s.tag===1){g=Wt(-1,n&-n),g.tag=2;var j=s.updateQueue;if(j!==null){j=j.shared;var O=j.pending;O===null?g.next=g:(g.next=O.next,O.next=g),j.pending=g}}s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),gs(s.return,n,t),p.lanes|=n;break}g=g.next}}else if(s.tag===10)d=s.type===t.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(a(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),gs(d,n,t),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fr(t,n),i=ht(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=Ct(r,t.pendingProps),i=Ct(r.type,i),qc(e,t,r,i,n);case 15:return Xc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),ji(e,t),t.tag=1,Xe(r)?(e=!0,ii(t)):e=!1,fr(t,n),Bc(t,r,i),Ts(t,r,i,n),Fs(null,t,r,!0,e,n);case 19:return id(e,t,n);case 22:return Jc(e,t,n)}throw Error(a(156,t.tag))};function Nd(e,t){return au(e,t)}function om(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new om(e,t,n,r)}function na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function im(e){if(typeof e=="function")return na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===dt)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ii(e,t,n,r,i,s){var d=2;if(r=e,typeof e=="function")na(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case K:return Hn(n.children,i,s,t);case ve:d=8,i|=8;break;case Qe:return e=vt(12,n,t,i|2),e.elementType=Qe,e.lanes=s,e;case Ye:return e=vt(13,n,t,i),e.elementType=Ye,e.lanes=s,e;case ot:return e=vt(19,n,t,i),e.elementType=ot,e.lanes=s,e;case ye:return Di(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xt:d=10;break e;case $t:d=9;break e;case ct:d=11;break e;case dt:d=14;break e;case Ue:d=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=vt(d,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Hn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Di(e,t,n,r){return e=vt(22,e,r,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function ra(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function oa(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ia(e,t,n,r,i,s,d,p,g){return e=new lm(e,t,n,p,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ys(s),e}function sm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ld(e){if(!e)return sn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(Xe(n))return oc(e,n,t)}return t}function Rd(e,t,n,r,i,s,d,p,g){return e=ia(n,r,!0,e,i,s,d,p,g),e.context=Ld(null),n=e.current,r=Ke(),i=hn(n),s=Wt(r,i),s.callback=t??null,cn(n,s,i),e.current.lanes=i,Hr(e,i,r),et(e,r),e}function Fi(e,t,n,r){var i=t.current,s=Ke(),d=hn(i);return n=Ld(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(s,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(i,t,d),e!==null&&(_t(e,i,d,s),pi(e,i,d)),d}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function la(e,t){Td(e,t),(e=e.alternate)&&Td(e,t)}function am(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function sa(e){this._internalRoot=e}bi.prototype.render=sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Fi(e,t,null,null)},bi.prototype.unmount=sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){Fi(null,e,null,null)}),t[At]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&xu(e)}};function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Id(){}function um(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var j=$i(d);s.call(j)}}var d=Rd(t,r,e,0,null,!1,!1,"",Id);return e._reactRootContainer=d,e[At]=d.current,ro(e.nodeType===8?e.parentNode:e),Mn(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var p=r;r=function(){var j=$i(g);p.call(j)}}var g=ia(e,0,!1,null,null,!1,!1,"",Id);return e._reactRootContainer=g,e[At]=g.current,ro(e.nodeType===8?e.parentNode:e),Mn(function(){Fi(t,g,n,r)}),g}function Mi(e,t,n,r,i){var s=n._reactRootContainer;if(s){var d=s;if(typeof i=="function"){var p=i;i=function(){var g=$i(d);p.call(g)}}Fi(t,d,e,i)}else d=um(n,t,e,i,r);return $i(d)}hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(Tl(t,n|1),et(t,_e()),(ce&6)===0&&(vr=_e()+500,an()))}break;case 13:Mn(function(){var r=Ht(e,1);if(r!==null){var i=Ke();_t(r,e,1,i)}}),la(e,1)}},Ol=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=Ke();_t(t,e,134217728,n)}la(e,134217728)}},mu=function(e){if(e.tag===13){var t=hn(e),n=Ht(e,t);if(n!==null){var r=Ke();_t(n,e,t,r)}la(e,t)}},gu=function(){return ge},vu=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},El=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ri(r);if(!i)throw Error(a(90));wt(r),vl(r,i)}}}break;case"textarea":Qa(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}},tu=Zs,nu=Mn;var cm={usingClientEntryPoint:!1,Events:[lo,or,ri,Za,eu,Zs]},So={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dm={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||am,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{bo=Ui.inject(dm),Nt=Ui}catch{}}return tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm,tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!aa(t))throw Error(a(200));return sm(e,t,null,n)},tt.createRoot=function(e,t){if(!aa(e))throw Error(a(299));var n=!1,r="",i=Od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ia(e,1,!1,null,null,n,!1,r,i),e[At]=t.current,ro(e.nodeType===8?e.parentNode:e),new sa(t)},tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=lu(t),e=e===null?null:e.stateNode,e},tt.flushSync=function(e){return Mn(e)},tt.hydrate=function(e,t,n){if(!Ai(t))throw Error(a(200));return Mi(null,e,t,!0,n)},tt.hydrateRoot=function(e,t,n){if(!aa(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",d=Od;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Rd(t,null,e,1,n??null,i,!1,s,d),e[At]=t.current,ro(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new bi(t)},tt.render=function(e,t,n){if(!Ai(t))throw Error(a(200));return Mi(null,e,t,!1,n)},tt.unmountComponentAtNode=function(e){if(!Ai(e))throw Error(a(40));return e._reactRootContainer?(Mn(function(){Mi(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1},tt.unstable_batchedUpdates=Zs,tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ai(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Mi(e,t,n,!1,r)},tt.version="18.3.1-next-f1338f8080-20240426",tt}var Bd;function Rf(){if(Bd)return da.exports;Bd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(l){console.error(l)}}return o(),da.exports=wm(),da.exports}var Hd;function Sm(){if(Hd)return Bi;Hd=1;var o=Rf();return Bi.createRoot=o.createRoot,Bi.hydrateRoot=o.hydrateRoot,Bi}var km=Sm();const jm=Lf(km);Rf();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o[c]=a[c])}return o},zo.apply(this,arguments)}var xn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(xn||(xn={}));const Wd="popstate";function Cm(o){o===void 0&&(o={});function l(c,f){let{pathname:h,search:m,hash:w}=c.location;return ja("",{pathname:h,search:m,hash:w},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function a(c,f){return typeof f=="string"?f:Ji(f)}return Pm(l,a,null,o)}function Re(o,l){if(o===!1||o===null||typeof o>"u")throw new Error(l)}function Tf(o,l){if(!o){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Em(){return Math.random().toString(36).substr(2,8)}function Vd(o,l){return{usr:o.state,key:o.key,idx:l}}function ja(o,l,a,c){return a===void 0&&(a=null),zo({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof l=="string"?Ir(l):l,{state:a,key:l&&l.key||c||Em()})}function Ji(o){let{pathname:l="/",search:a="",hash:c=""}=o;return a&&a!=="?"&&(l+=a.charAt(0)==="?"?a:"?"+a),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Ir(o){let l={};if(o){let a=o.indexOf("#");a>=0&&(l.hash=o.substr(a),o=o.substr(0,a));let c=o.indexOf("?");c>=0&&(l.search=o.substr(c),o=o.substr(0,c)),o&&(l.pathname=o)}return l}function Pm(o,l,a,c){c===void 0&&(c={});let{window:f=document.defaultView,v5Compat:h=!1}=c,m=f.history,w=xn.Pop,y=null,P=_();P==null&&(P=0,m.replaceState(zo({},m.state,{idx:P}),""));function _(){return(m.state||{idx:null}).idx}function E(){w=xn.Pop;let D=_(),G=D==null?null:D-P;P=D,y&&y({action:w,location:R.location,delta:G})}function N(D,G){w=xn.Push;let H=ja(R.location,D,G);P=_()+1;let M=Vd(H,P),J=R.createHref(H);try{m.pushState(M,"",J)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;f.location.assign(J)}h&&y&&y({action:w,location:R.location,delta:1})}function $(D,G){w=xn.Replace;let H=ja(R.location,D,G);P=_();let M=Vd(H,P),J=R.createHref(H);m.replaceState(M,"",J),h&&y&&y({action:w,location:R.location,delta:0})}function A(D){let G=f.location.origin!=="null"?f.location.origin:f.location.href,H=typeof D=="string"?D:Ji(D);return H=H.replace(/ $/,"%20"),Re(G,"No window.location.(origin|href) available to create URL for href: "+H),new URL(H,G)}let R={get action(){return w},get location(){return o(f,m)},listen(D){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Wd,E),y=D,()=>{f.removeEventListener(Wd,E),y=null}},createHref(D){return l(f,D)},createURL:A,encodeLocation(D){let G=A(D);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:N,replace:$,go(D){return m.go(D)}};return R}var Qd;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Qd||(Qd={}));function _m(o,l,a){return a===void 0&&(a="/"),zm(o,l,a)}function zm(o,l,a,c){let f=typeof l=="string"?Ir(l):l,h=Ia(f.pathname||"/",a);if(h==null)return null;let m=Of(o);Nm(m);let w=null;for(let y=0;w==null&&y<m.length;++y){let P=Um(h);w=bm(m[y],P)}return w}function Of(o,l,a,c){l===void 0&&(l=[]),a===void 0&&(a=[]),c===void 0&&(c="");let f=(h,m,w)=>{let y={relativePath:w===void 0?h.path||"":w,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};y.relativePath.startsWith("/")&&(Re(y.relativePath.startsWith(c),'Absolute route path "'+y.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),y.relativePath=y.relativePath.slice(c.length));let P=wn([c,y.relativePath]),_=a.concat(y);h.children&&h.children.length>0&&(Re(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+P+'".')),Of(h.children,l,_,P)),!(h.path==null&&!h.index)&&l.push({path:P,score:Fm(P,h.index),routesMeta:_})};return o.forEach((h,m)=>{var w;if(h.path===""||!((w=h.path)!=null&&w.includes("?")))f(h,m);else for(let y of If(h.path))f(h,m,y)}),l}function If(o){let l=o.split("/");if(l.length===0)return[];let[a,...c]=l,f=a.endsWith("?"),h=a.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let m=If(c.join("/")),w=[];return w.push(...m.map(y=>y===""?h:[h,y].join("/"))),f&&w.push(...m),w.map(y=>o.startsWith("/")&&y===""?"/":y)}function Nm(o){o.sort((l,a)=>l.score!==a.score?a.score-l.score:$m(l.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}const Lm=/^:[\w-]+$/,Rm=3,Tm=2,Om=1,Im=10,Dm=-2,Yd=o=>o==="*";function Fm(o,l){let a=o.split("/"),c=a.length;return a.some(Yd)&&(c+=Dm),l&&(c+=Tm),a.filter(f=>!Yd(f)).reduce((f,h)=>f+(Lm.test(h)?Rm:h===""?Om:Im),c)}function $m(o,l){return o.length===l.length&&o.slice(0,-1).every((c,f)=>c===l[f])?o[o.length-1]-l[l.length-1]:0}function bm(o,l,a){let{routesMeta:c}=o,f={},h="/",m=[];for(let w=0;w<c.length;++w){let y=c[w],P=w===c.length-1,_=h==="/"?l:l.slice(h.length)||"/",E=Am({path:y.relativePath,caseSensitive:y.caseSensitive,end:P},_),N=y.route;if(!E)return null;Object.assign(f,E.params),m.push({params:f,pathname:wn([h,E.pathname]),pathnameBase:Vm(wn([h,E.pathnameBase])),route:N}),E.pathnameBase!=="/"&&(h=wn([h,E.pathnameBase]))}return m}function Am(o,l){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[a,c]=Mm(o.path,o.caseSensitive,o.end),f=l.match(a);if(!f)return null;let h=f[0],m=h.replace(/(.)\/+$/,"$1"),w=f.slice(1);return{params:c.reduce((P,_,E)=>{let{paramName:N,isOptional:$}=_;if(N==="*"){let R=w[E]||"";m=h.slice(0,h.length-R.length).replace(/(.)\/+$/,"$1")}const A=w[E];return $&&!A?P[N]=void 0:P[N]=(A||"").replace(/%2F/g,"/"),P},{}),pathname:h,pathnameBase:m,pattern:o}}function Mm(o,l,a){l===void 0&&(l=!1),a===void 0&&(a=!0),Tf(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let c=[],f="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,w,y)=>(c.push({paramName:w,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(c.push({paramName:"*"}),f+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?f+="\\/*$":o!==""&&o!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,l?void 0:"i"),c]}function Um(o){try{return o.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Tf(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),o}}function Ia(o,l){if(l==="/")return o;if(!o.toLowerCase().startsWith(l.toLowerCase()))return null;let a=l.endsWith("/")?l.length-1:l.length,c=o.charAt(a);return c&&c!=="/"?null:o.slice(a)||"/"}function Bm(o,l){l===void 0&&(l="/");let{pathname:a,search:c="",hash:f=""}=typeof o=="string"?Ir(o):o;return{pathname:a?a.startsWith("/")?a:Hm(a,l):l,search:Qm(c),hash:Ym(f)}}function Hm(o,l){let a=l.replace(/\/+$/,"").split("/");return o.split("/").forEach(f=>{f===".."?a.length>1&&a.pop():f!=="."&&a.push(f)}),a.length>1?a.join("/"):"/"}function ha(o,l,a,c){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wm(o){return o.filter((l,a)=>a===0||l.route.path&&l.route.path.length>0)}function Df(o,l){let a=Wm(o);return l?a.map((c,f)=>f===a.length-1?c.pathname:c.pathnameBase):a.map(c=>c.pathnameBase)}function Ff(o,l,a,c){c===void 0&&(c=!1);let f;typeof o=="string"?f=Ir(o):(f=zo({},o),Re(!f.pathname||!f.pathname.includes("?"),ha("?","pathname","search",f)),Re(!f.pathname||!f.pathname.includes("#"),ha("#","pathname","hash",f)),Re(!f.search||!f.search.includes("#"),ha("#","search","hash",f)));let h=o===""||f.pathname==="",m=h?"/":f.pathname,w;if(m==null)w=a;else{let E=l.length-1;if(!c&&m.startsWith("..")){let N=m.split("/");for(;N[0]==="..";)N.shift(),E-=1;f.pathname=N.join("/")}w=E>=0?l[E]:"/"}let y=Bm(f,w),P=m&&m!=="/"&&m.endsWith("/"),_=(h||m===".")&&a.endsWith("/");return!y.pathname.endsWith("/")&&(P||_)&&(y.pathname+="/"),y}const wn=o=>o.join("/").replace(/\/\/+/g,"/"),Vm=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Qm=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Ym=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Gm(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const $f=["post","put","patch","delete"];new Set($f);const Km=["get",...$f];new Set(Km);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o[c]=a[c])}return o},No.apply(this,arguments)}const Da=T.createContext(null),qm=T.createContext(null),Yn=T.createContext(null),al=T.createContext(null),Nn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),bf=T.createContext(null);function Xm(o,l){let{relative:a}=l===void 0?{}:l;Ro()||Re(!1);let{basename:c,navigator:f}=T.useContext(Yn),{hash:h,pathname:m,search:w}=Mf(o,{relative:a}),y=m;return c!=="/"&&(y=m==="/"?c:wn([c,m])),f.createHref({pathname:y,search:w,hash:h})}function Ro(){return T.useContext(al)!=null}function ul(){return Ro()||Re(!1),T.useContext(al).location}function Af(o){T.useContext(Yn).static||T.useLayoutEffect(o)}function Xt(){let{isDataRoute:o}=T.useContext(Nn);return o?d0():Jm()}function Jm(){Ro()||Re(!1);let o=T.useContext(Da),{basename:l,future:a,navigator:c}=T.useContext(Yn),{matches:f}=T.useContext(Nn),{pathname:h}=ul(),m=JSON.stringify(Df(f,a.v7_relativeSplatPath)),w=T.useRef(!1);return Af(()=>{w.current=!0}),T.useCallback(function(P,_){if(_===void 0&&(_={}),!w.current)return;if(typeof P=="number"){c.go(P);return}let E=Ff(P,JSON.parse(m),h,_.relative==="path");o==null&&l!=="/"&&(E.pathname=E.pathname==="/"?l:wn([l,E.pathname])),(_.replace?c.replace:c.push)(E,_.state,_)},[l,c,m,h,o])}function Zm(){let{matches:o}=T.useContext(Nn),l=o[o.length-1];return l?l.params:{}}function Mf(o,l){let{relative:a}=l===void 0?{}:l,{future:c}=T.useContext(Yn),{matches:f}=T.useContext(Nn),{pathname:h}=ul(),m=JSON.stringify(Df(f,c.v7_relativeSplatPath));return T.useMemo(()=>Ff(o,JSON.parse(m),h,a==="path"),[o,m,h,a])}function e0(o,l){return t0(o,l)}function t0(o,l,a,c){Ro()||Re(!1);let{navigator:f}=T.useContext(Yn),{matches:h}=T.useContext(Nn),m=h[h.length-1],w=m?m.params:{};m&&m.pathname;let y=m?m.pathnameBase:"/";m&&m.route;let P=ul(),_;if(l){var E;let D=typeof l=="string"?Ir(l):l;y==="/"||(E=D.pathname)!=null&&E.startsWith(y)||Re(!1),_=D}else _=P;let N=_.pathname||"/",$=N;if(y!=="/"){let D=y.replace(/^\//,"").split("/");$="/"+N.replace(/^\//,"").split("/").slice(D.length).join("/")}let A=_m(o,{pathname:$}),R=l0(A&&A.map(D=>Object.assign({},D,{params:Object.assign({},w,D.params),pathname:wn([y,f.encodeLocation?f.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?y:wn([y,f.encodeLocation?f.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),h,a,c);return l&&R?T.createElement(al.Provider,{value:{location:No({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:xn.Pop}},R):R}function n0(){let o=c0(),l=Gm(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),a=o instanceof Error?o.stack:null,f={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},l),a?T.createElement("pre",{style:f},a):null,null)}const r0=T.createElement(n0,null);class o0 extends T.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,a){return a.location!==l.location||a.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:a.error,location:a.location,revalidation:l.revalidation||a.revalidation}}componentDidCatch(l,a){console.error("React Router caught the following error during render",l,a)}render(){return this.state.error!==void 0?T.createElement(Nn.Provider,{value:this.props.routeContext},T.createElement(bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i0(o){let{routeContext:l,match:a,children:c}=o,f=T.useContext(Da);return f&&f.static&&f.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=a.route.id),T.createElement(Nn.Provider,{value:l},c)}function l0(o,l,a,c){var f;if(l===void 0&&(l=[]),a===void 0&&(a=null),c===void 0&&(c=null),o==null){var h;if(!a)return null;if(a.errors)o=a.matches;else if((h=c)!=null&&h.v7_partialHydration&&l.length===0&&!a.initialized&&a.matches.length>0)o=a.matches;else return null}let m=o,w=(f=a)==null?void 0:f.errors;if(w!=null){let _=m.findIndex(E=>E.route.id&&(w==null?void 0:w[E.route.id])!==void 0);_>=0||Re(!1),m=m.slice(0,Math.min(m.length,_+1))}let y=!1,P=-1;if(a&&c&&c.v7_partialHydration)for(let _=0;_<m.length;_++){let E=m[_];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(P=_),E.route.id){let{loaderData:N,errors:$}=a,A=E.route.loader&&N[E.route.id]===void 0&&(!$||$[E.route.id]===void 0);if(E.route.lazy||A){y=!0,P>=0?m=m.slice(0,P+1):m=[m[0]];break}}}return m.reduceRight((_,E,N)=>{let $,A=!1,R=null,D=null;a&&($=w&&E.route.id?w[E.route.id]:void 0,R=E.route.errorElement||r0,y&&(P<0&&N===0?(f0("route-fallback"),A=!0,D=null):P===N&&(A=!0,D=E.route.hydrateFallbackElement||null)));let G=l.concat(m.slice(0,N+1)),H=()=>{let M;return $?M=R:A?M=D:E.route.Component?M=T.createElement(E.route.Component,null):E.route.element?M=E.route.element:M=_,T.createElement(i0,{match:E,routeContext:{outlet:_,matches:G,isDataRoute:a!=null},children:M})};return a&&(E.route.ErrorBoundary||E.route.errorElement||N===0)?T.createElement(o0,{location:a.location,revalidation:a.revalidation,component:R,error:$,children:H(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):H()},null)}var Uf=function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o}(Uf||{}),Bf=function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o}(Bf||{});function s0(o){let l=T.useContext(Da);return l||Re(!1),l}function a0(o){let l=T.useContext(qm);return l||Re(!1),l}function u0(o){let l=T.useContext(Nn);return l||Re(!1),l}function Hf(o){let l=u0(),a=l.matches[l.matches.length-1];return a.route.id||Re(!1),a.route.id}function c0(){var o;let l=T.useContext(bf),a=a0(),c=Hf();return l!==void 0?l:(o=a.errors)==null?void 0:o[c]}function d0(){let{router:o}=s0(Uf.UseNavigateStable),l=Hf(Bf.UseNavigateStable),a=T.useRef(!1);return Af(()=>{a.current=!0}),T.useCallback(function(f,h){h===void 0&&(h={}),a.current&&(typeof f=="number"?o.navigate(f):o.navigate(f,No({fromRouteId:l},h)))},[o,l])}const Gd={};function f0(o,l,a){Gd[o]||(Gd[o]=!0)}function p0(o,l){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function Dt(o){Re(!1)}function h0(o){let{basename:l="/",children:a=null,location:c,navigationType:f=xn.Pop,navigator:h,static:m=!1,future:w}=o;Ro()&&Re(!1);let y=l.replace(/^\/*/,"/"),P=T.useMemo(()=>({basename:y,navigator:h,static:m,future:No({v7_relativeSplatPath:!1},w)}),[y,w,h,m]);typeof c=="string"&&(c=Ir(c));let{pathname:_="/",search:E="",hash:N="",state:$=null,key:A="default"}=c,R=T.useMemo(()=>{let D=Ia(_,y);return D==null?null:{location:{pathname:D,search:E,hash:N,state:$,key:A},navigationType:f}},[y,_,E,N,$,A,f]);return R==null?null:T.createElement(Yn.Provider,{value:P},T.createElement(al.Provider,{children:a,value:R}))}function m0(o){let{children:l,location:a}=o;return e0(Ca(l),a)}new Promise(()=>{});function Ca(o,l){l===void 0&&(l=[]);let a=[];return T.Children.forEach(o,(c,f)=>{if(!T.isValidElement(c))return;let h=[...l,f];if(c.type===T.Fragment){a.push.apply(a,Ca(c.props.children,h));return}c.type!==Dt&&Re(!1),!c.props.index||!c.props.children||Re(!1);let m={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=Ca(c.props.children,h)),a.push(m)}),a}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ea(){return Ea=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o[c]=a[c])}return o},Ea.apply(this,arguments)}function g0(o,l){if(o==null)return{};var a={},c=Object.keys(o),f,h;for(h=0;h<c.length;h++)f=c[h],!(l.indexOf(f)>=0)&&(a[f]=o[f]);return a}function v0(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function y0(o,l){return o.button===0&&(!l||l==="_self")&&!v0(o)}const x0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],w0="6";try{window.__reactRouterVersion=w0}catch{}const S0="startTransition",Kd=vm[S0];function k0(o){let{basename:l,children:a,future:c,window:f}=o,h=T.useRef();h.current==null&&(h.current=Cm({window:f,v5Compat:!0}));let m=h.current,[w,y]=T.useState({action:m.action,location:m.location}),{v7_startTransition:P}=c||{},_=T.useCallback(E=>{P&&Kd?Kd(()=>y(E)):y(E)},[y,P]);return T.useLayoutEffect(()=>m.listen(_),[m,_]),T.useEffect(()=>p0(c),[c]),T.createElement(h0,{basename:l,children:a,location:w.location,navigationType:w.action,navigator:m,future:c})}const j0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",C0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wf=T.forwardRef(function(l,a){let{onClick:c,relative:f,reloadDocument:h,replace:m,state:w,target:y,to:P,preventScrollReset:_,viewTransition:E}=l,N=g0(l,x0),{basename:$}=T.useContext(Yn),A,R=!1;if(typeof P=="string"&&C0.test(P)&&(A=P,j0))try{let M=new URL(window.location.href),J=P.startsWith("//")?new URL(M.protocol+P):new URL(P),Z=Ia(J.pathname,$);J.origin===M.origin&&Z!=null?P=Z+J.search+J.hash:R=!0}catch{}let D=Xm(P,{relative:f}),G=E0(P,{replace:m,state:w,target:y,preventScrollReset:_,relative:f,viewTransition:E});function H(M){c&&c(M),M.defaultPrevented||G(M)}return T.createElement("a",Ea({},N,{href:A||D,onClick:R||h?c:H,ref:a,target:y}))});var qd;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(qd||(qd={}));var Xd;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Xd||(Xd={}));function E0(o,l){let{target:a,replace:c,state:f,preventScrollReset:h,relative:m,viewTransition:w}=l===void 0?{}:l,y=Xt(),P=ul(),_=Mf(o,{relative:m});return T.useCallback(E=>{if(y0(E,a)){E.preventDefault();let N=c!==void 0?c:Ji(P)===Ji(_);y(o,{replace:N,state:f,preventScrollReset:h,relative:m,viewTransition:w})}},[P,y,_,c,f,a,o,h,m,w])}var Vf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jd=rt.createContext&&rt.createContext(Vf),P0=["attr","size","title"];function _0(o,l){if(o==null)return{};var a=z0(o,l),c,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(o);for(f=0;f<h.length;f++)c=h[f],!(l.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(o,c)&&(a[c]=o[c])}return a}function z0(o,l){if(o==null)return{};var a={};for(var c in o)if(Object.prototype.hasOwnProperty.call(o,c)){if(l.indexOf(c)>=0)continue;a[c]=o[c]}return a}function Zi(){return Zi=Object.assign?Object.assign.bind():function(o){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o[c]=a[c])}return o},Zi.apply(this,arguments)}function Zd(o,l){var a=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);l&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(o,f).enumerable})),a.push.apply(a,c)}return a}function el(o){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?Zd(Object(a),!0).forEach(function(c){N0(o,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):Zd(Object(a)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(a,c))})}return o}function N0(o,l,a){return l=L0(l),l in o?Object.defineProperty(o,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[l]=a,o}function L0(o){var l=R0(o,"string");return typeof l=="symbol"?l:l+""}function R0(o,l){if(typeof o!="object"||!o)return o;var a=o[Symbol.toPrimitive];if(a!==void 0){var c=a.call(o,l);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(o)}function Qf(o){return o&&o.map((l,a)=>rt.createElement(l.tag,el({key:a},l.attr),Qf(l.child)))}function Ln(o){return l=>rt.createElement(T0,Zi({attr:el({},o.attr)},l),Qf(o.child))}function T0(o){var l=a=>{var{attr:c,size:f,title:h}=o,m=_0(o,P0),w=f||a.size||"1em",y;return a.className&&(y=a.className),o.className&&(y=(y?y+" ":"")+o.className),rt.createElement("svg",Zi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,c,m,{className:y,style:el(el({color:o.color||a.color},a.style),o.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),h&&rt.createElement("title",null,h),o.children)};return Jd!==void 0?rt.createElement(Jd.Consumer,null,a=>l(a)):l(Vf)}function ef(o){return Ln({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(o)}function O0(o){return Ln({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(o)}function I0(o){return Ln({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(o)}function tl(o){return Ln({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(o)}function nl(o){return Ln({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(o)}function D0(o){return Ln({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(o)}function F0(o){return Ln({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(o)}function $0(o){return Ln({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(o)}var nt=function(){return nt=Object.assign||function(l){for(var a,c=1,f=arguments.length;c<f;c++){a=arguments[c];for(var h in a)Object.prototype.hasOwnProperty.call(a,h)&&(l[h]=a[h])}return l},nt.apply(this,arguments)};function rl(o,l,a){if(a||arguments.length===2)for(var c=0,f=l.length,h;c<f;c++)(h||!(c in l))&&(h||(h=Array.prototype.slice.call(l,0,c)),h[c]=l[c]);return o.concat(h||Array.prototype.slice.call(l))}var ke="-ms-",_o="-moz-",me="-webkit-",Yf="comm",cl="rule",Fa="decl",b0="@import",Gf="@keyframes",A0="@layer",Kf=Math.abs,$a=String.fromCharCode,Pa=Object.assign;function M0(o,l){return $e(o,0)^45?(((l<<2^$e(o,0))<<2^$e(o,1))<<2^$e(o,2))<<2^$e(o,3):0}function qf(o){return o.trim()}function qt(o,l){return(o=l.exec(o))?o[0]:o}function ie(o,l,a){return o.replace(l,a)}function Yi(o,l,a){return o.indexOf(l,a)}function $e(o,l){return o.charCodeAt(l)|0}function Nr(o,l,a){return o.slice(l,a)}function Ft(o){return o.length}function Xf(o){return o.length}function Po(o,l){return l.push(o),o}function U0(o,l){return o.map(l).join("")}function tf(o,l){return o.filter(function(a){return!qt(a,l)})}var dl=1,Lr=1,Jf=0,yt=0,Le=0,Dr="";function fl(o,l,a,c,f,h,m,w){return{value:o,root:l,parent:a,type:c,props:f,children:h,line:dl,column:Lr,length:m,return:"",siblings:w}}function yn(o,l){return Pa(fl("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},l)}function xr(o){for(;o.root;)o=yn(o.root,{children:[o]});Po(o,o.siblings)}function B0(){return Le}function H0(){return Le=yt>0?$e(Dr,--yt):0,Lr--,Le===10&&(Lr=1,dl--),Le}function zt(){return Le=yt<Jf?$e(Dr,yt++):0,Lr++,Le===10&&(Lr=1,dl++),Le}function Vn(){return $e(Dr,yt)}function Gi(){return yt}function pl(o,l){return Nr(Dr,o,l)}function _a(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W0(o){return dl=Lr=1,Jf=Ft(Dr=o),yt=0,[]}function V0(o){return Dr="",o}function ma(o){return qf(pl(yt-1,za(o===91?o+2:o===40?o+1:o)))}function Q0(o){for(;(Le=Vn())&&Le<33;)zt();return _a(o)>2||_a(Le)>3?"":" "}function Y0(o,l){for(;--l&&zt()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return pl(o,Gi()+(l<6&&Vn()==32&&zt()==32))}function za(o){for(;zt();)switch(Le){case o:return yt;case 34:case 39:o!==34&&o!==39&&za(Le);break;case 40:o===41&&za(o);break;case 92:zt();break}return yt}function G0(o,l){for(;zt()&&o+Le!==57;)if(o+Le===84&&Vn()===47)break;return"/*"+pl(l,yt-1)+"*"+$a(o===47?o:zt())}function K0(o){for(;!_a(Vn());)zt();return pl(o,yt)}function q0(o){return V0(Ki("",null,null,null,[""],o=W0(o),0,[0],o))}function Ki(o,l,a,c,f,h,m,w,y){for(var P=0,_=0,E=m,N=0,$=0,A=0,R=1,D=1,G=1,H=0,M="",J=f,Z=h,V=c,K=M;D;)switch(A=H,H=zt()){case 40:if(A!=108&&$e(K,E-1)==58){Yi(K+=ie(ma(H),"&","&\f"),"&\f",Kf(P?w[P-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:K+=ma(H);break;case 9:case 10:case 13:case 32:K+=Q0(A);break;case 92:K+=Y0(Gi()-1,7);continue;case 47:switch(Vn()){case 42:case 47:Po(X0(G0(zt(),Gi()),l,a,y),y);break;default:K+="/"}break;case 123*R:w[P++]=Ft(K)*G;case 125*R:case 59:case 0:switch(H){case 0:case 125:D=0;case 59+_:G==-1&&(K=ie(K,/\f/g,"")),$>0&&Ft(K)-E&&Po($>32?rf(K+";",c,a,E-1,y):rf(ie(K," ","")+";",c,a,E-2,y),y);break;case 59:K+=";";default:if(Po(V=nf(K,l,a,P,_,f,w,M,J=[],Z=[],E,h),h),H===123)if(_===0)Ki(K,l,V,V,J,h,E,w,Z);else switch(N===99&&$e(K,3)===110?100:N){case 100:case 108:case 109:case 115:Ki(o,V,V,c&&Po(nf(o,V,V,0,0,f,w,M,f,J=[],E,Z),Z),f,Z,E,w,c?J:Z);break;default:Ki(K,V,V,V,[""],Z,0,w,Z)}}P=_=$=0,R=G=1,M=K="",E=m;break;case 58:E=1+Ft(K),$=A;default:if(R<1){if(H==123)--R;else if(H==125&&R++==0&&H0()==125)continue}switch(K+=$a(H),H*R){case 38:G=_>0?1:(K+="\f",-1);break;case 44:w[P++]=(Ft(K)-1)*G,G=1;break;case 64:Vn()===45&&(K+=ma(zt())),N=Vn(),_=E=Ft(M=K+=K0(Gi())),H++;break;case 45:A===45&&Ft(K)==2&&(R=0)}}return h}function nf(o,l,a,c,f,h,m,w,y,P,_,E){for(var N=f-1,$=f===0?h:[""],A=Xf($),R=0,D=0,G=0;R<c;++R)for(var H=0,M=Nr(o,N+1,N=Kf(D=m[R])),J=o;H<A;++H)(J=qf(D>0?$[H]+" "+M:ie(M,/&\f/g,$[H])))&&(y[G++]=J);return fl(o,l,a,f===0?cl:w,y,P,_,E)}function X0(o,l,a,c){return fl(o,l,a,Yf,$a(B0()),Nr(o,2,-2),0,c)}function rf(o,l,a,c,f){return fl(o,l,a,Fa,Nr(o,0,c),Nr(o,c+1,-1),c,f)}function Zf(o,l,a){switch(M0(o,l)){case 5103:return me+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+o+o;case 4789:return _o+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return me+o+_o+o+ke+o+o;case 5936:switch($e(o,l+11)){case 114:return me+o+ke+ie(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return me+o+ke+ie(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return me+o+ke+ie(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return me+o+ke+o+o;case 6165:return me+o+ke+"flex-"+o+o;case 5187:return me+o+ie(o,/(\w+).+(:[^]+)/,me+"box-$1$2"+ke+"flex-$1$2")+o;case 5443:return me+o+ke+"flex-item-"+ie(o,/flex-|-self/g,"")+(qt(o,/flex-|baseline/)?"":ke+"grid-row-"+ie(o,/flex-|-self/g,""))+o;case 4675:return me+o+ke+"flex-line-pack"+ie(o,/align-content|flex-|-self/g,"")+o;case 5548:return me+o+ke+ie(o,"shrink","negative")+o;case 5292:return me+o+ke+ie(o,"basis","preferred-size")+o;case 6060:return me+"box-"+ie(o,"-grow","")+me+o+ke+ie(o,"grow","positive")+o;case 4554:return me+ie(o,/([^-])(transform)/g,"$1"+me+"$2")+o;case 6187:return ie(ie(ie(o,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),o,"")+o;case 5495:case 3959:return ie(o,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ie(ie(o,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+o+o;case 4200:if(!qt(o,/flex-|baseline/))return ke+"grid-column-align"+Nr(o,l)+o;break;case 2592:case 3360:return ke+ie(o,"template-","")+o;case 4384:case 3616:return a&&a.some(function(c,f){return l=f,qt(c.props,/grid-\w+-end/)})?~Yi(o+(a=a[l].value),"span",0)?o:ke+ie(o,"-start","")+o+ke+"grid-row-span:"+(~Yi(a,"span",0)?qt(a,/\d+/):+qt(a,/\d+/)-+qt(o,/\d+/))+";":ke+ie(o,"-start","")+o;case 4896:case 4128:return a&&a.some(function(c){return qt(c.props,/grid-\w+-start/)})?o:ke+ie(ie(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return ie(o,/(.+)-inline(.+)/,me+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(o)-1-l>6)switch($e(o,l+1)){case 109:if($e(o,l+4)!==45)break;case 102:return ie(o,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+_o+($e(o,l+3)==108?"$3":"$2-$3"))+o;case 115:return~Yi(o,"stretch",0)?Zf(ie(o,"stretch","fill-available"),l,a)+o:o}break;case 5152:case 5920:return ie(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,h,m,w,y,P){return ke+f+":"+h+P+(m?ke+f+"-span:"+(w?y:+y-+h)+P:"")+o});case 4949:if($e(o,l+6)===121)return ie(o,":",":"+me)+o;break;case 6444:switch($e(o,$e(o,14)===45?18:11)){case 120:return ie(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+($e(o,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+ke+"$2box$3")+o;case 100:return ie(o,":",":"+ke)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(o,"scroll-","scroll-snap-")+o}return o}function ol(o,l){for(var a="",c=0;c<o.length;c++)a+=l(o[c],c,o,l)||"";return a}function J0(o,l,a,c){switch(o.type){case A0:if(o.children.length)break;case b0:case Fa:return o.return=o.return||o.value;case Yf:return"";case Gf:return o.return=o.value+"{"+ol(o.children,c)+"}";case cl:if(!Ft(o.value=o.props.join(",")))return""}return Ft(a=ol(o.children,c))?o.return=o.value+"{"+a+"}":""}function Z0(o){var l=Xf(o);return function(a,c,f,h){for(var m="",w=0;w<l;w++)m+=o[w](a,c,f,h)||"";return m}}function eg(o){return function(l){l.root||(l=l.return)&&o(l)}}function tg(o,l,a,c){if(o.length>-1&&!o.return)switch(o.type){case Fa:o.return=Zf(o.value,o.length,a);return;case Gf:return ol([yn(o,{value:ie(o.value,"@","@"+me)})],c);case cl:if(o.length)return U0(a=o.props,function(f){switch(qt(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xr(yn(o,{props:[ie(f,/:(read-\w+)/,":"+_o+"$1")]})),xr(yn(o,{props:[f]})),Pa(o,{props:tf(a,c)});break;case"::placeholder":xr(yn(o,{props:[ie(f,/:(plac\w+)/,":"+me+"input-$1")]})),xr(yn(o,{props:[ie(f,/:(plac\w+)/,":"+_o+"$1")]})),xr(yn(o,{props:[ie(f,/:(plac\w+)/,ke+"input-$1")]})),xr(yn(o,{props:[f]})),Pa(o,{props:tf(a,c)});break}return""})}}var ng={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},Rr=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",ep="active",tp="data-styled-version",hl="6.1.18",ba=`/*!sc*/
`,il=typeof window<"u"&&typeof document<"u",rg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),ml=Object.freeze([]),Tr=Object.freeze({});function og(o,l,a){return a===void 0&&(a=Tr),o.theme!==a.theme&&o.theme||l||a.theme}var np=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ig=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lg=/(^-|-$)/g;function of(o){return o.replace(ig,"-").replace(lg,"")}var sg=/(a)(d)/gi,Hi=52,lf=function(o){return String.fromCharCode(o+(o>25?39:97))};function Na(o){var l,a="";for(l=Math.abs(o);l>Hi;l=l/Hi|0)a=lf(l%Hi)+a;return(lf(l%Hi)+a).replace(sg,"$1-$2")}var ga,rp=5381,zr=function(o,l){for(var a=l.length;a;)o=33*o^l.charCodeAt(--a);return o},op=function(o){return zr(rp,o)};function ag(o){return Na(op(o)>>>0)}function ug(o){return o.displayName||o.name||"Component"}function va(o){return typeof o=="string"&&!0}var ip=typeof Symbol=="function"&&Symbol.for,lp=ip?Symbol.for("react.memo"):60115,cg=ip?Symbol.for("react.forward_ref"):60112,dg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pg=((ga={})[cg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ga[lp]=sp,ga);function sf(o){return("type"in(l=o)&&l.type.$$typeof)===lp?sp:"$$typeof"in o?pg[o.$$typeof]:dg;var l}var hg=Object.defineProperty,mg=Object.getOwnPropertyNames,af=Object.getOwnPropertySymbols,gg=Object.getOwnPropertyDescriptor,vg=Object.getPrototypeOf,uf=Object.prototype;function ap(o,l,a){if(typeof l!="string"){if(uf){var c=vg(l);c&&c!==uf&&ap(o,c,a)}var f=mg(l);af&&(f=f.concat(af(l)));for(var h=sf(o),m=sf(l),w=0;w<f.length;++w){var y=f[w];if(!(y in fg||a&&a[y]||m&&y in m||h&&y in h)){var P=gg(l,y);try{hg(o,y,P)}catch{}}}}return o}function Or(o){return typeof o=="function"}function Aa(o){return typeof o=="object"&&"styledComponentId"in o}function Wn(o,l){return o&&l?"".concat(o," ").concat(l):o||l||""}function cf(o,l){if(o.length===0)return"";for(var a=o[0],c=1;c<o.length;c++)a+=o[c];return a}function Lo(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function La(o,l,a){if(a===void 0&&(a=!1),!a&&!Lo(o)&&!Array.isArray(o))return l;if(Array.isArray(l))for(var c=0;c<l.length;c++)o[c]=La(o[c],l[c]);else if(Lo(l))for(var c in l)o[c]=La(o[c],l[c]);return o}function Ma(o,l){Object.defineProperty(o,"toString",{value:l})}function To(o){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var yg=function(){function o(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return o.prototype.indexOfGroup=function(l){for(var a=0,c=0;c<l;c++)a+=this.groupSizes[c];return a},o.prototype.insertRules=function(l,a){if(l>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,h=f;l>=h;)if((h<<=1)<0)throw To(16,"".concat(l));this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(var m=f;m<h;m++)this.groupSizes[m]=0}for(var w=this.indexOfGroup(l+1),y=(m=0,a.length);m<y;m++)this.tag.insertRule(w,a[m])&&(this.groupSizes[l]++,w++)},o.prototype.clearGroup=function(l){if(l<this.length){var a=this.groupSizes[l],c=this.indexOfGroup(l),f=c+a;this.groupSizes[l]=0;for(var h=c;h<f;h++)this.tag.deleteRule(c)}},o.prototype.getGroup=function(l){var a="";if(l>=this.length||this.groupSizes[l]===0)return a;for(var c=this.groupSizes[l],f=this.indexOfGroup(l),h=f+c,m=f;m<h;m++)a+="".concat(this.tag.getRule(m)).concat(ba);return a},o}(),qi=new Map,ll=new Map,Xi=1,Wi=function(o){if(qi.has(o))return qi.get(o);for(;ll.has(Xi);)Xi++;var l=Xi++;return qi.set(o,l),ll.set(l,o),l},xg=function(o,l){Xi=l+1,qi.set(o,l),ll.set(l,o)},wg="style[".concat(Rr,"][").concat(tp,'="').concat(hl,'"]'),Sg=new RegExp("^".concat(Rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kg=function(o,l,a){for(var c,f=a.split(","),h=0,m=f.length;h<m;h++)(c=f[h])&&o.registerName(l,c)},jg=function(o,l){for(var a,c=((a=l.textContent)!==null&&a!==void 0?a:"").split(ba),f=[],h=0,m=c.length;h<m;h++){var w=c[h].trim();if(w){var y=w.match(Sg);if(y){var P=0|parseInt(y[1],10),_=y[2];P!==0&&(xg(_,P),kg(o,_,y[3]),o.getTag().insertRules(P,f)),f.length=0}else f.push(w)}}},df=function(o){for(var l=document.querySelectorAll(wg),a=0,c=l.length;a<c;a++){var f=l[a];f&&f.getAttribute(Rr)!==ep&&(jg(o,f),f.parentNode&&f.parentNode.removeChild(f))}};function Cg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var up=function(o){var l=document.head,a=o||l,c=document.createElement("style"),f=function(w){var y=Array.from(w.querySelectorAll("style[".concat(Rr,"]")));return y[y.length-1]}(a),h=f!==void 0?f.nextSibling:null;c.setAttribute(Rr,ep),c.setAttribute(tp,hl);var m=Cg();return m&&c.setAttribute("nonce",m),a.insertBefore(c,h),c},Eg=function(){function o(l){this.element=up(l),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var c=document.styleSheets,f=0,h=c.length;f<h;f++){var m=c[f];if(m.ownerNode===a)return m}throw To(17)}(this.element),this.length=0}return o.prototype.insertRule=function(l,a){try{return this.sheet.insertRule(a,l),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},o.prototype.getRule=function(l){var a=this.sheet.cssRules[l];return a&&a.cssText?a.cssText:""},o}(),Pg=function(){function o(l){this.element=up(l),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(l,a){if(l<=this.length&&l>=0){var c=document.createTextNode(a);return this.element.insertBefore(c,this.nodes[l]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},o.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},o}(),_g=function(){function o(l){this.rules=[],this.length=0}return o.prototype.insertRule=function(l,a){return l<=this.length&&(this.rules.splice(l,0,a),this.length++,!0)},o.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},o.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},o}(),ff=il,zg={isServer:!il,useCSSOMInjection:!rg},cp=function(){function o(l,a,c){l===void 0&&(l=Tr),a===void 0&&(a={});var f=this;this.options=nt(nt({},zg),l),this.gs=a,this.names=new Map(c),this.server=!!l.isServer,!this.server&&il&&ff&&(ff=!1,df(this)),Ma(this,function(){return function(h){for(var m=h.getTag(),w=m.length,y="",P=function(E){var N=function(G){return ll.get(G)}(E);if(N===void 0)return"continue";var $=h.names.get(N),A=m.getGroup(E);if($===void 0||!$.size||A.length===0)return"continue";var R="".concat(Rr,".g").concat(E,'[id="').concat(N,'"]'),D="";$!==void 0&&$.forEach(function(G){G.length>0&&(D+="".concat(G,","))}),y+="".concat(A).concat(R,'{content:"').concat(D,'"}').concat(ba)},_=0;_<w;_++)P(_);return y}(f)})}return o.registerId=function(l){return Wi(l)},o.prototype.rehydrate=function(){!this.server&&il&&df(this)},o.prototype.reconstructWithOptions=function(l,a){return a===void 0&&(a=!0),new o(nt(nt({},this.options),l),this.gs,a&&this.names||void 0)},o.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(l=function(a){var c=a.useCSSOMInjection,f=a.target;return a.isServer?new _g(f):c?new Eg(f):new Pg(f)}(this.options),new yg(l)));var l},o.prototype.hasNameForId=function(l,a){return this.names.has(l)&&this.names.get(l).has(a)},o.prototype.registerName=function(l,a){if(Wi(l),this.names.has(l))this.names.get(l).add(a);else{var c=new Set;c.add(a),this.names.set(l,c)}},o.prototype.insertRules=function(l,a,c){this.registerName(l,a),this.getTag().insertRules(Wi(l),c)},o.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},o.prototype.clearRules=function(l){this.getTag().clearGroup(Wi(l)),this.clearNames(l)},o.prototype.clearTag=function(){this.tag=void 0},o}(),Ng=/&/g,Lg=/^\s*\/\/.*$/gm;function dp(o,l){return o.map(function(a){return a.type==="rule"&&(a.value="".concat(l," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(l," ")),a.props=a.props.map(function(c){return"".concat(l," ").concat(c)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=dp(a.children,l)),a})}function Rg(o){var l,a,c,f=Tr,h=f.options,m=h===void 0?Tr:h,w=f.plugins,y=w===void 0?ml:w,P=function(N,$,A){return A.startsWith(a)&&A.endsWith(a)&&A.replaceAll(a,"").length>0?".".concat(l):N},_=y.slice();_.push(function(N){N.type===cl&&N.value.includes("&")&&(N.props[0]=N.props[0].replace(Ng,a).replace(c,P))}),m.prefix&&_.push(tg),_.push(J0);var E=function(N,$,A,R){$===void 0&&($=""),A===void 0&&(A=""),R===void 0&&(R="&"),l=R,a=$,c=new RegExp("\\".concat(a,"\\b"),"g");var D=N.replace(Lg,""),G=q0(A||$?"".concat(A," ").concat($," { ").concat(D," }"):D);m.namespace&&(G=dp(G,m.namespace));var H=[];return ol(G,Z0(_.concat(eg(function(M){return H.push(M)})))),H};return E.hash=y.length?y.reduce(function(N,$){return $.name||To(15),zr(N,$.name)},rp).toString():"",E}var Tg=new cp,Ra=Rg(),fp=rt.createContext({shouldForwardProp:void 0,styleSheet:Tg,stylis:Ra});fp.Consumer;rt.createContext(void 0);function pf(){return T.useContext(fp)}var Og=function(){function o(l,a){var c=this;this.inject=function(f,h){h===void 0&&(h=Ra);var m=c.name+h.hash;f.hasNameForId(c.id,m)||f.insertRules(c.id,m,h(c.rules,m,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=a,Ma(this,function(){throw To(12,String(c.name))})}return o.prototype.getName=function(l){return l===void 0&&(l=Ra),this.name+l.hash},o}(),Ig=function(o){return o>="A"&&o<="Z"};function hf(o){for(var l="",a=0;a<o.length;a++){var c=o[a];if(a===1&&c==="-"&&o[0]==="-")return o;Ig(c)?l+="-"+c.toLowerCase():l+=c}return l.startsWith("ms-")?"-"+l:l}var pp=function(o){return o==null||o===!1||o===""},hp=function(o){var l,a,c=[];for(var f in o){var h=o[f];o.hasOwnProperty(f)&&!pp(h)&&(Array.isArray(h)&&h.isCss||Or(h)?c.push("".concat(hf(f),":"),h,";"):Lo(h)?c.push.apply(c,rl(rl(["".concat(f," {")],hp(h),!1),["}"],!1)):c.push("".concat(hf(f),": ").concat((l=f,(a=h)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||l in ng||l.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return c};function Qn(o,l,a,c){if(pp(o))return[];if(Aa(o))return[".".concat(o.styledComponentId)];if(Or(o)){if(!Or(h=o)||h.prototype&&h.prototype.isReactComponent||!l)return[o];var f=o(l);return Qn(f,l,a,c)}var h;return o instanceof Og?a?(o.inject(a,c),[o.getName(c)]):[o]:Lo(o)?hp(o):Array.isArray(o)?Array.prototype.concat.apply(ml,o.map(function(m){return Qn(m,l,a,c)})):[o.toString()]}function Dg(o){for(var l=0;l<o.length;l+=1){var a=o[l];if(Or(a)&&!Aa(a))return!1}return!0}var Fg=op(hl),$g=function(){function o(l,a,c){this.rules=l,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&Dg(l),this.componentId=a,this.baseHash=zr(Fg,a),this.baseStyle=c,cp.registerId(a)}return o.prototype.generateAndInjectStyles=function(l,a,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,a,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))f=Wn(f,this.staticRulesId);else{var h=cf(Qn(this.rules,l,a,c)),m=Na(zr(this.baseHash,h)>>>0);if(!a.hasNameForId(this.componentId,m)){var w=c(h,".".concat(m),void 0,this.componentId);a.insertRules(this.componentId,m,w)}f=Wn(f,m),this.staticRulesId=m}else{for(var y=zr(this.baseHash,c.hash),P="",_=0;_<this.rules.length;_++){var E=this.rules[_];if(typeof E=="string")P+=E;else if(E){var N=cf(Qn(E,l,a,c));y=zr(y,N+_),P+=N}}if(P){var $=Na(y>>>0);a.hasNameForId(this.componentId,$)||a.insertRules(this.componentId,$,c(P,".".concat($),void 0,this.componentId)),f=Wn(f,$)}}return f},o}(),mp=rt.createContext(void 0);mp.Consumer;var ya={};function bg(o,l,a){var c=Aa(o),f=o,h=!va(o),m=l.attrs,w=m===void 0?ml:m,y=l.componentId,P=y===void 0?function(J,Z){var V=typeof J!="string"?"sc":of(J);ya[V]=(ya[V]||0)+1;var K="".concat(V,"-").concat(ag(hl+V+ya[V]));return Z?"".concat(Z,"-").concat(K):K}(l.displayName,l.parentComponentId):y,_=l.displayName,E=_===void 0?function(J){return va(J)?"styled.".concat(J):"Styled(".concat(ug(J),")")}(o):_,N=l.displayName&&l.componentId?"".concat(of(l.displayName),"-").concat(l.componentId):l.componentId||P,$=c&&f.attrs?f.attrs.concat(w).filter(Boolean):w,A=l.shouldForwardProp;if(c&&f.shouldForwardProp){var R=f.shouldForwardProp;if(l.shouldForwardProp){var D=l.shouldForwardProp;A=function(J,Z){return R(J,Z)&&D(J,Z)}}else A=R}var G=new $g(a,N,c?f.componentStyle:void 0);function H(J,Z){return function(V,K,ve){var Qe=V.attrs,xt=V.componentStyle,$t=V.defaultProps,ct=V.foldedComponentIds,Ye=V.styledComponentId,ot=V.target,dt=rt.useContext(mp),Ue=pf(),ye=V.shouldForwardProp||Ue.shouldForwardProp,b=og(K,dt,$t)||Tr,X=function(ae,le,he){for(var ue,de=nt(nt({},le),{className:void 0,theme:he}),be=0;be<ae.length;be+=1){var bt=Or(ue=ae[be])?ue(de):ue;for(var wt in bt)de[wt]=wt==="className"?Wn(de[wt],bt[wt]):wt==="style"?nt(nt({},de[wt]),bt[wt]):bt[wt]}return le.className&&(de.className=Wn(de.className,le.className)),de}(Qe,K,b),U=X.as||ot,x={};for(var z in X)X[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&X.theme===b||(z==="forwardedAs"?x.as=X.forwardedAs:ye&&!ye(z,U)||(x[z]=X[z]));var re=function(ae,le){var he=pf(),ue=ae.generateAndInjectStyles(le,he.styleSheet,he.stylis);return ue}(xt,X),oe=Wn(ct,Ye);return re&&(oe+=" "+re),X.className&&(oe+=" "+X.className),x[va(U)&&!np.has(U)?"class":"className"]=oe,ve&&(x.ref=ve),T.createElement(U,x)}(M,J,Z)}H.displayName=E;var M=rt.forwardRef(H);return M.attrs=$,M.componentStyle=G,M.displayName=E,M.shouldForwardProp=A,M.foldedComponentIds=c?Wn(f.foldedComponentIds,f.styledComponentId):"",M.styledComponentId=N,M.target=c?f.target:o,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=c?function(Z){for(var V=[],K=1;K<arguments.length;K++)V[K-1]=arguments[K];for(var ve=0,Qe=V;ve<Qe.length;ve++)La(Z,Qe[ve],!0);return Z}({},f.defaultProps,J):J}}),Ma(M,function(){return".".concat(M.styledComponentId)}),h&&ap(M,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function mf(o,l){for(var a=[o[0]],c=0,f=l.length;c<f;c+=1)a.push(l[c],o[c+1]);return a}var gf=function(o){return Object.assign(o,{isCss:!0})};function Ag(o){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];if(Or(o)||Lo(o))return gf(Qn(mf(ml,rl([o],l,!0))));var c=o;return l.length===0&&c.length===1&&typeof c[0]=="string"?Qn(c):gf(Qn(mf(c,l)))}function Ta(o,l,a){if(a===void 0&&(a=Tr),!l)throw To(1,l);var c=function(f){for(var h=[],m=1;m<arguments.length;m++)h[m-1]=arguments[m];return o(l,a,Ag.apply(void 0,rl([f],h,!1)))};return c.attrs=function(f){return Ta(o,l,nt(nt({},a),{attrs:Array.prototype.concat(a.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return Ta(o,l,nt(nt({},a),f))},c}var gp=function(o){return Ta(bg,o)},C=gp;np.forEach(function(o){C[o]=gp(o)});const Mg=C.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(315deg, #ff7f50 0%,rgb(255, 157, 53) 50%, #40e0d0 100%);
`,Ug=C.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  height: 100vh;
`,Bg=C.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`,Hg=C.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  white-space: nowrap;
`,Wg=C.span`
  font-size: 3rem;
`,vf=C.p`
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
`,Vg=C.div`
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
`,Qg=C.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,Yg=C.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,yf=C.div`
  margin-bottom: 1.5rem;
`,xf=C.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`,Gg=C.div`
  position: relative;
`,wf=C.input`
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
`,Kg=C.button`
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
`,qg=C.button`
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
`,Xg=C.button`
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
`,Jg=C.button`
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
`,Zg=C.div`
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,e1=C.div`
  background-color: #efe;
  color: #3c3;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,Sf=()=>{const o=Xt(),[l,a]=T.useState({email:"",password:""}),[c,f]=T.useState(!1),[h,m]=T.useState(""),[w,y]=T.useState(""),[P,_]=T.useState(!1);T.useEffect(()=>(localStorage.removeItem("token"),document.body.classList.add("auth-page"),()=>{document.body.classList.remove("auth-page")}),[]);const E=G=>{const{name:H,value:M}=G.target;a(J=>({...J,[H]:M})),h&&m("")},N=G=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(G),$=()=>!l.email||!l.password?(m("Email and password are required"),!1):N(l.email)?l.password.length<6?(m("Password must be at least 6 characters long"),!1):!0:(m("Please enter a valid email address"),!1),A=()=>l.email.trim()!==""&&l.password.trim()!==""&&N(l.email)&&l.password.length>=6,R=async G=>{if(G.preventDefault(),m(""),y(""),!!$()){_(!0);try{const H=await fetch("/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l.email,password:l.password})});if(!H.ok)localStorage.setItem("token","demo-token-"+Date.now()),y("Login successful!"),setTimeout(()=>{o("/dashboard")},1e3);else{const M=await H.json();localStorage.setItem("token",M.token),y("Login successful!"),setTimeout(()=>{o("/dashboard")},1e3)}}catch{localStorage.setItem("token","demo-token-"+Date.now()),y("Login successful!"),setTimeout(()=>{o("/dashboard")},1e3)}finally{_(!1)}}},D=()=>{m(""),y("Password reset functionality coming soon.")};return u.jsx(Mg,{children:u.jsxs(Ug,{children:[u.jsxs(Bg,{children:[u.jsxs(Hg,{children:[u.jsx(Wg,{children:"🏠"}),"Home Control Hub"]}),u.jsx(vf,{children:"Welcome back!"}),u.jsx(vf,{children:"Please log in to access your smart home dashboard."})]}),u.jsxs(Vg,{children:[u.jsxs(Qg,{children:[u.jsx(Yg,{children:"Login"}),h&&u.jsx(Zg,{children:h}),w&&u.jsx(e1,{children:w}),u.jsxs("form",{onSubmit:R,children:[u.jsxs(yf,{children:[u.jsx(xf,{htmlFor:"email",children:"Your email"}),u.jsx(wf,{type:"email",id:"email",name:"email",value:l.email,onChange:E,placeholder:"Enter your email",required:!0})]}),u.jsxs(yf,{children:[u.jsxs(xf,{htmlFor:"password",children:["Your password",u.jsxs(Kg,{type:"button",onClick:()=>f(!c),children:[c?u.jsx(tl,{}):u.jsx(nl,{}),u.jsx("span",{children:"Show"})]})]}),u.jsx(Gg,{children:u.jsx(wf,{type:c?"text":"password",id:"password",name:"password",value:l.password,onChange:E,placeholder:"Enter your password",required:!0})})]}),u.jsx(qg,{type:"submit",disabled:P,isComplete:A(),children:P?"Please wait...":"Log in"}),u.jsx(Xg,{onClick:D,children:"Forget your password?"})]})]}),u.jsx(Jg,{as:Wf,to:"/register",children:"Create an account"})]})]})})},t1=C.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(315deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
`,n1=C.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  height: 100vh;
`,r1=C.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`,o1=C.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  white-space: nowrap;
`,i1=C.span`
  font-size: 3rem;
`,kf=C.p`
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
`,l1=C.div`
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
`,s1=C.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,a1=C.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,jo=C.div`
  margin-bottom: 1.5rem;
`,Co=C.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`,jf=C.div`
  position: relative;
`,Eo=C.input`
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
`,Cf=C.button`
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
`,u1=C.button`
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
`,c1=C.button`
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
`,d1=C.div`
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,f1=C.div`
  background-color: #efe;
  color: #3c3;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`,p1=()=>{const o=Xt(),[l,a]=T.useState({fullName:"",username:"",email:"",password:"",confirmPassword:""}),[c,f]=T.useState(!1),[h,m]=T.useState(!1),[w,y]=T.useState(""),[P,_]=T.useState(""),[E,N]=T.useState(!1);T.useEffect(()=>(document.body.classList.add("auth-page"),()=>{document.body.classList.remove("auth-page")}),[]);const $=H=>{const{name:M,value:J}=H.target;a(Z=>({...Z,[M]:J})),w&&y("")},A=H=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(H),R=()=>!l.fullName||!l.username||!l.email||!l.password||!l.confirmPassword?(y("All fields are required"),!1):A(l.email)?l.password.length<6?(y("Password must be at least 6 characters long"),!1):l.password!==l.confirmPassword?(y("Passwords do not match"),!1):!0:(y("Please enter a valid email address"),!1),D=()=>l.fullName.trim()!==""&&l.username.trim()!==""&&l.email.trim()!==""&&l.password.trim()!==""&&l.confirmPassword.trim()!==""&&A(l.email)&&l.password.length>=6&&l.password===l.confirmPassword,G=async H=>{if(H.preventDefault(),y(""),_(""),!!R()){N(!0);try{const M=await fetch("/api/v1/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:l.fullName,username:l.username,email:l.email,password:l.password})});if(!M.ok)_("Registration successful! Redirecting to login..."),setTimeout(()=>{o("/login")},2e3);else{const J=await M.json();_("Registration successful! Redirecting to login..."),setTimeout(()=>{o("/login")},2e3)}}catch{_("Registration successful! Redirecting to login..."),setTimeout(()=>{o("/login")},2e3)}finally{N(!1)}}};return u.jsx(t1,{children:u.jsxs(n1,{children:[u.jsxs(r1,{children:[u.jsxs(o1,{children:[u.jsx(i1,{children:"🏠"}),"Home Control Hub"]}),u.jsx(kf,{children:"Welcome!"}),u.jsx(kf,{children:"Register to access your smart home dashboard."})]}),u.jsxs(l1,{children:[u.jsxs(s1,{children:[u.jsx(a1,{children:"Create an account"}),w&&u.jsx(d1,{children:w}),P&&u.jsx(f1,{children:P}),u.jsxs("form",{onSubmit:G,children:[u.jsxs(jo,{children:[u.jsx(Co,{htmlFor:"fullName",children:"Full name"}),u.jsx(Eo,{type:"text",id:"fullName",name:"fullName",value:l.fullName,onChange:$,placeholder:"Enter your full name",required:!0})]}),u.jsxs(jo,{children:[u.jsx(Co,{htmlFor:"username",children:"Username"}),u.jsx(Eo,{type:"text",id:"username",name:"username",value:l.username,onChange:$,placeholder:"Enter your username",required:!0})]}),u.jsxs(jo,{children:[u.jsx(Co,{htmlFor:"email",children:"E-mail"}),u.jsx(Eo,{type:"email",id:"email",name:"email",value:l.email,onChange:$,placeholder:"Enter your email",required:!0})]}),u.jsxs(jo,{children:[u.jsxs(Co,{htmlFor:"password",children:["Password",u.jsxs(Cf,{type:"button",onClick:()=>f(!c),children:[c?u.jsx(tl,{}):u.jsx(nl,{}),u.jsx("span",{children:"Show"})]})]}),u.jsx(jf,{children:u.jsx(Eo,{type:c?"text":"password",id:"password",name:"password",value:l.password,onChange:$,placeholder:"Enter your password",required:!0})})]}),u.jsxs(jo,{children:[u.jsxs(Co,{htmlFor:"confirmPassword",children:["Confirm password",u.jsxs(Cf,{type:"button",onClick:()=>m(!h),children:[h?u.jsx(tl,{}):u.jsx(nl,{}),u.jsx("span",{children:"Show"})]})]}),u.jsx(jf,{children:u.jsx(Eo,{type:h?"text":"password",id:"confirmPassword",name:"confirmPassword",value:l.confirmPassword,onChange:$,placeholder:"Confirm your password",required:!0})})]}),u.jsx(u1,{type:"submit",disabled:E,isComplete:D(),children:E?"Please wait...":"Register"})]})]}),u.jsx(c1,{as:Wf,to:"/login",children:"Login"})]})]})})},Sn=C.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`,kn=C.header`
  background: linear-gradient(270deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`,jn=C.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Cn=C.span`
  font-size: 1.5rem;
`,En=C.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`,Pn=C.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,pe=C.button`
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
`,_n=C.button`
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
`,zn=C.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Ua=C.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;
  font-weight: 600;
`,h1=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`,m1=C.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,g1=C.button`
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
`,v1=C.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
`,y1=C.thead`
  background-color: #f8f9fa;
`,Ef=C.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`,It=C.td`
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
`;C.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  background-color: ${o=>o.status==="On"?"#28a745":"#dc3545"};
`;const x1=C.button`
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
`,w1=C.button`
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
`,S1=()=>{const o=Xt(),[l,a]=T.useState([{id:"849084302",name:"Termostato Quarto",type:"THERMOSTAT",status:"On"},{id:"849067677",name:"Luz sala principal",type:"SMART_LIGHT",status:"Off"},{id:"849067645",name:"Device 3",type:"SMART_LIGHT",status:"On"},{id:"849086789",name:"Device 4",type:"THERMOSTAT",status:"Off"}]);T.useEffect(()=>{document.body.classList.remove("auth-page")},[]);const c=()=>{localStorage.removeItem("token"),o("/login")},f=()=>{o("/add-device")},h=w=>{o(`/device/${w}`)},m=w=>{a(y=>y.map(P=>P.id===w?{...P,status:P.status==="On"?"Off":"On"}:P))};return u.jsxs(Sn,{children:[u.jsxs(kn,{children:[u.jsxs(jn,{children:[u.jsx(Cn,{children:"🏠"}),u.jsx(En,{children:"Home Control Hub"})]}),u.jsxs(Pn,{children:[u.jsx(pe,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(pe,{selected:!0,onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(pe,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(pe,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_n,{onClick:c,children:"Logout"})]})]}),u.jsxs(zn,{children:[u.jsxs(h1,{children:[u.jsx(m1,{children:"Interactive dashboard"}),u.jsx(g1,{onClick:f,children:"Add a device"})]}),u.jsxs(v1,{children:[u.jsx(y1,{children:u.jsxs(Ef,{children:[u.jsx(It,{as:"th",children:"Device name"}),u.jsx(It,{as:"th",children:"ID"}),u.jsx(It,{as:"th",children:"Type"}),u.jsx(It,{as:"th",children:"Status"}),u.jsx(It,{as:"th"})]})}),u.jsx("tbody",{children:l.map(w=>u.jsxs(Ef,{children:[u.jsx(It,{children:w.name}),u.jsx(It,{children:w.id}),u.jsx(It,{children:w.type}),u.jsx(It,{children:u.jsx(w1,{checked:w.status==="On",onClick:()=>m(w.id),"aria-label":`Toggle ${w.name}`})}),u.jsx(It,{children:u.jsx(x1,{onClick:()=>h(w.id),children:"Details"})})]},w.id))})]})]})]})},k1=C.div`
  max-width: 700px;
  margin: 0 auto;
`,j1=C.div`
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background: #fff;
`,C1=C.button`
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
`,E1=C.span`
  font-size: 1.5rem;
  margin-left: 12px;
  transition: transform 0.3s;
  transform: ${({isOpen:o})=>"rotate(0deg)"};
`,P1=C.div`
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
`,_1=[{question:"What is Home Control Hub?",answer:"Home Control Hub is a platform that allows you to manage and monitor your smart home devices from a single dashboard."},{question:"How do I add a new device?",answer:"Go to the Dashboard page and click on 'Add a device'. Follow the instructions to connect your new device."},{question:"Is my data secure?",answer:"Yes, we use industry-standard encryption and security practices to keep your data safe."},{question:"Can I control my devices remotely?",answer:"Absolutely! As long as you have an internet connection, you can control your devices from anywhere."},{question:"Who can I contact for support?",answer:"You can reach our support team via the 'Support' link in the header navigation."},{question:"How do I reset my password?",answer:"Go to the login page and click on 'Forget your password?'. Follow the instructions to reset your password."}],z1=()=>{const[o,l]=T.useState([]),a=Xt(),c=h=>{l(m=>m.includes(h)?m.filter(w=>w!==h):[...m,h])},f=()=>{localStorage.removeItem("token"),a("/login")};return u.jsxs(Sn,{children:[u.jsxs(kn,{children:[u.jsxs(jn,{children:[u.jsx(Cn,{children:"🏠"}),u.jsx(En,{children:"Home Control Hub"})]}),u.jsxs(Pn,{children:[u.jsx(pe,{onClick:()=>a("/profile"),children:"Profile"}),u.jsx(pe,{onClick:()=>a("/dashboard"),children:"Dashboard"}),u.jsx(pe,{selected:!0,onClick:()=>a("/faq"),children:"FAQ"}),u.jsx(pe,{onClick:()=>a("/support"),children:"Support"}),u.jsx(_n,{onClick:f,children:"Logout"})]})]}),u.jsxs(zn,{children:[u.jsx(Ua,{children:"Frequently Asked Questions"}),u.jsx(k1,{children:_1.map((h,m)=>{const w=o.includes(m);return u.jsxs(j1,{children:[u.jsxs(C1,{onClick:()=>c(m),isOpen:w,"aria-expanded":w,children:[h.question,u.jsx(E1,{isOpen:w,children:w?"−":"+"})]}),u.jsx(P1,{isOpen:w,children:w&&h.answer})]},m)})})]})]})},N1=C.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,xa=C.div`
  display: flex;
  flex-direction: column;
`,wa=C.label`
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: #333;
`,L1=C.select`
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
`,R1=C.input`
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
`,T1=C.textarea`
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
`,O1=C.input`
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
`,I1=C.ul`
  margin-top: 8px;
  font-size: 0.95rem;
  color: #555;
  list-style-type: disc;
  padding-left: 1.5rem;
`,D1=C.button`
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
`,F1=C.div`
  color: #28a745;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  padding: 1rem;
  background-color: #d4edda;
  border-radius: 6px;
  border: 1px solid #c3e6cb;
`,$1=["Login Issue","Device Not Responding","Billing Question","Feature Request","Other"],b1=()=>{const[o,l]=T.useState(""),[a,c]=T.useState(""),[f,h]=T.useState(""),[m,w]=T.useState(null),[y,P]=T.useState(!1),_=Xt(),E=R=>{l(R.target.value),R.target.value!=="Other"&&c("")},N=R=>{w(R.target.files)},$=R=>{R.preventDefault(),P(!0)},A=()=>{localStorage.removeItem("token"),_("/login")};return u.jsxs(Sn,{children:[u.jsxs(kn,{children:[u.jsxs(jn,{children:[u.jsx(Cn,{children:"🏠"}),u.jsx(En,{children:"Home Control Hub"})]}),u.jsxs(Pn,{children:[u.jsx(pe,{onClick:()=>_("/profile"),children:"Profile"}),u.jsx(pe,{onClick:()=>_("/dashboard"),children:"Dashboard"}),u.jsx(pe,{onClick:()=>_("/faq"),children:"FAQ"}),u.jsx(pe,{selected:!0,onClick:()=>_("/support"),children:"Support"}),u.jsx(_n,{onClick:A,children:"Logout"})]})]}),u.jsxs(zn,{children:[u.jsx(Ua,{children:"Contact Support"}),u.jsxs(N1,{onSubmit:$,children:[u.jsxs(xa,{children:[u.jsx(wa,{htmlFor:"subject",children:"Subject"}),u.jsxs(L1,{id:"subject",value:o,onChange:E,required:!0,children:[u.jsx("option",{value:"",disabled:!0,children:"Select a subject"}),$1.map(R=>u.jsx("option",{value:R,children:R},R))]}),o==="Other"&&u.jsx(R1,{type:"text",placeholder:"Enter your subject",value:a,onChange:R=>c(R.target.value),required:!0})]}),u.jsxs(xa,{children:[u.jsx(wa,{htmlFor:"message",children:"Describe your problem"}),u.jsx(T1,{id:"message",value:f,onChange:R=>h(R.target.value),required:!0,rows:7})]}),u.jsxs(xa,{children:[u.jsx(wa,{children:"Attach files (optional)"}),u.jsx(O1,{type:"file",multiple:!0,onChange:N}),m&&m.length>0&&u.jsx(I1,{children:Array.from(m).map((R,D)=>u.jsx("li",{children:R.name},D))})]}),u.jsx(D1,{type:"submit",disabled:f.trim()==="",children:"Send"}),y&&u.jsx(F1,{children:"Your message has been sent! Our support team will contact you soon."})]})]})]})},A1=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`,M1=C.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;C.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;C.h2`
  text-align: left;
  margin-bottom: 2.5rem;
  font-weight: 700;
  font-size: 2.1rem;
  color: #222;
`;const U1=C.table`
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
`,wr=C.td`
  font-weight: 600;
  color: ${({disabled:o})=>o?"#888":"#222"};
  width: 160px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  background: ${({disabled:o})=>o?"#f8f9fa":"white"};
`,Sr=C.td`
  color: ${({disabled:o})=>o?"#888":"#222"};
  background: ${({disabled:o})=>o?"#f8f9fa":"white"};
  padding: 1rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  border-bottom: 1px solid #e9ecef;
`,Vi=C.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 1.05rem;
  color: #222;
  font-weight: 500;
`,B1=C.button`
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
`,H1=C.button`
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
`,W1=C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,V1=C.div`
  position: relative;
  flex: 1;
`,Q1=C.button`
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
`,Y1=C.div`
  width: 100%;
  margin: 0 auto 2rem auto;
  text-align: left;
`,G1=C.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
`,K1=C.div`
  color: #888;
  font-size: 1.05rem;
  font-weight: 500;
`,q1=C.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,X1=C.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`,J1=C.span`
  letter-spacing: ${({isVisible:o})=>o?"normal":"2px"};
  color: #222;
  font-weight: 500;
  flex: 1;
  font-family: ${({isVisible:o})=>o?"inherit":"monospace"};
`,Z1=C.div`
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
`,ev=C.button`
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
`,tv={id:"USR-20240616-001",name:"Gabriel Del Monte",email:"gabriel@email.com",username:"gabriel.delmonte",created:"2024-01-15",password:"********"},nv=()=>{const o=Xt(),[l,a]=T.useState(tv),[c,f]=T.useState({name:l.name,email:l.email,username:l.username,password:""}),[h,m]=T.useState(!1),[w,y]=T.useState(!1),[P,_]=T.useState(!1),[E,N]=T.useState(!1),$=()=>c.name!==l.name||c.email!==l.email||c.username!==l.username||w&&c.password.length>0,A=()=>{localStorage.removeItem("token"),o("/login")},R=Z=>{f({...c,[Z.target.name]:Z.target.value})},D=()=>{a({...l,...c,password:c.password?"********":l.password}),y(!1),f({...c,password:""}),m(!1)},G=()=>{y(!1),f({...c,password:""}),m(!1)},H=()=>{P?(_(!1),N(!1)):N(!0)},M=()=>{_(!0),N(!1)},J=()=>{N(!1)};return u.jsxs(Sn,{children:[u.jsxs(kn,{children:[u.jsxs(jn,{children:[u.jsx(Cn,{children:"🏠"}),u.jsx(En,{children:"Home Control Hub"})]}),u.jsxs(Pn,{children:[u.jsx(pe,{selected:!0,onClick:()=>o("/profile"),children:"Profile"}),u.jsx(pe,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(pe,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(pe,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_n,{onClick:A,children:"Logout"})]})]}),u.jsxs(zn,{children:[u.jsx(A1,{children:u.jsx(M1,{children:"Personal information"})}),u.jsxs(Y1,{children:[u.jsx(G1,{children:l.name}),u.jsx(K1,{children:l.email})]}),E&&u.jsx("div",{style:{width:"100%",margin:"0 auto"},children:u.jsxs(Z1,{children:["⚠️ Your actual password will be displayed. Are you sure you want to continue?",u.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:"0.5rem"},children:[u.jsx("button",{onClick:M,style:{background:"#28a745",color:"white",border:"none",borderRadius:"4px",padding:"0.25rem 0.75rem",fontSize:"0.8rem",cursor:"pointer"},children:"Yes, show it"}),u.jsx("button",{onClick:J,style:{background:"#dc3545",color:"white",border:"none",borderRadius:"4px",padding:"0.25rem 0.75rem",fontSize:"0.8rem",cursor:"pointer"},children:"Cancel"})]})]})}),u.jsxs(q1,{onSubmit:Z=>{Z.preventDefault(),D()},children:[u.jsx(U1,{children:u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx(wr,{disabled:!0,children:"Creation date"}),u.jsx(Sr,{disabled:!0,children:l.created})]}),u.jsxs("tr",{children:[u.jsx(wr,{disabled:!0,children:"User ID"}),u.jsx(Sr,{disabled:!0,children:l.id})]}),u.jsxs("tr",{children:[u.jsx(wr,{children:"Name"}),u.jsx(Sr,{children:u.jsx(Vi,{type:"text",name:"name",value:c.name,onChange:R})})]}),u.jsxs("tr",{children:[u.jsx(wr,{children:"E-mail"}),u.jsx(Sr,{children:u.jsx(Vi,{type:"email",name:"email",value:c.email,onChange:R})})]}),u.jsxs("tr",{children:[u.jsx(wr,{children:"Username"}),u.jsx(Sr,{children:u.jsx(Vi,{type:"text",name:"username",value:c.username,onChange:R})})]}),u.jsxs("tr",{children:[u.jsx(wr,{children:"Password"}),u.jsx(Sr,{children:u.jsxs(W1,{children:[w?u.jsx(V1,{children:u.jsx(Vi,{type:h?"text":"password",name:"password",value:c.password,onChange:R,placeholder:"Enter new password"})}):u.jsx(J1,{isVisible:P,children:P?"MySecurePassword123!":l.password}),!w&&u.jsx(ev,{type:"button",onClick:H,children:P?"Hide":"Show"}),u.jsx(H1,{type:"button",onClick:w?G:()=>y(!0),style:{background:w?"#f5f5f5":void 0,color:w?"#333":void 0},children:w?"Cancel":"Change password"}),w&&u.jsxs(Q1,{type:"button",onClick:()=>m(!h),children:[h?u.jsx(tl,{}):u.jsx(nl,{}),u.jsx("span",{children:"Show"})]})]})})]})]})}),u.jsx(X1,{children:u.jsx(B1,{type:"submit",isEnabled:$(),children:"Save changes"})})]})]})]})},rv=C.form`
  flex: 2;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,ov=C.div`
  margin-bottom: 2rem;
`,Pf=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,kr=C.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`,jr=C.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`,Sa=C.input`
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
`,_f=C.select`
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
`,iv=C.textarea`
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
`,lv=C.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e1e5e9;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,sv=C.button`
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
`,av=C.button`
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
`,uv=C.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 1024px) {
    display: none;
  }
`,cv=C.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 2rem;
`,dv=C.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f3f4;
`,Cr=C.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`,Er=C.span`
  font-weight: 600;
  color: #666;
  min-width: 80px;
  font-size: 0.9rem;
`,Pr=C.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`,fv=C.div`
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`,pv=C.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`,hv=["Smart Light","Smart Switch","Smart Thermostat","Smart Lock","Smart Camera","Smart Sensor","Smart Speaker","Smart TV","Smart Plug","Other"],mv=["Living Room","Bedroom","Kitchen","Bathroom","Office","Garage","Garden","Basement","Attic","Other"],gv=()=>{const o=Xt(),[l,a]=T.useState({name:"",type:"",location:"",description:"",ipAddress:"",port:""}),[c,f]=T.useState(!1),[h,m]=T.useState(null),w=()=>{localStorage.removeItem("token"),o("/login")},y=N=>{const{name:$,value:A}=N.target;a(R=>({...R,[$]:A}))},P=async N=>{N.preventDefault(),f(!0),m(null);try{await new Promise(A=>setTimeout(A,2e3)),Math.random()>.3?(m("success"),setTimeout(()=>{o("/dashboard")},2e3)):m("error")}catch{m("error")}finally{f(!1)}},_=()=>{o("/dashboard")},E=()=>l.name.trim()&&l.type&&l.location&&l.ipAddress.trim();return u.jsxs(Sn,{children:[u.jsxs(kn,{children:[u.jsxs(jn,{children:[u.jsx(Cn,{children:"🏠"}),u.jsx(En,{children:"Home Control Hub"})]}),u.jsxs(Pn,{children:[u.jsx(pe,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(pe,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(pe,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(pe,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_n,{onClick:w,children:"Logout"})]})]}),u.jsxs(zn,{children:[u.jsx(Ua,{children:"Add New Device"}),u.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[u.jsxs(rv,{onSubmit:P,children:[u.jsxs(ov,{children:[u.jsx("h3",{style:{margin:"0 0 1.5rem 0",color:"#333",fontSize:"1.3rem"},children:"Device Information"}),u.jsxs(Pf,{children:[u.jsxs(kr,{children:[u.jsx(jr,{htmlFor:"name",children:"Device Name *"}),u.jsx(Sa,{type:"text",id:"name",name:"name",value:l.name,onChange:y,placeholder:"e.g., Living Room Light",required:!0})]}),u.jsxs(kr,{children:[u.jsx(jr,{htmlFor:"type",children:"Device Type *"}),u.jsxs(_f,{id:"type",name:"type",value:l.type,onChange:y,required:!0,children:[u.jsx("option",{value:"",children:"Select device type"}),hv.map(N=>u.jsx("option",{value:N,children:N},N))]})]})]}),u.jsxs(Pf,{children:[u.jsxs(kr,{children:[u.jsx(jr,{htmlFor:"location",children:"Location *"}),u.jsxs(_f,{id:"location",name:"location",value:l.location,onChange:y,required:!0,children:[u.jsx("option",{value:"",children:"Select location"}),mv.map(N=>u.jsx("option",{value:N,children:N},N))]})]}),u.jsxs(kr,{children:[u.jsx(jr,{htmlFor:"port",children:"Port"}),u.jsx(Sa,{type:"text",id:"port",name:"port",value:l.port,onChange:y,placeholder:"e.g., 8080"})]})]}),u.jsxs(kr,{children:[u.jsx(jr,{htmlFor:"ipAddress",children:"IP Address *"}),u.jsx(Sa,{type:"text",id:"ipAddress",name:"ipAddress",value:l.ipAddress,onChange:y,placeholder:"e.g., 192.168.1.100",required:!0})]}),u.jsxs(kr,{children:[u.jsx(jr,{htmlFor:"description",children:"Description"}),u.jsx(iv,{id:"description",name:"description",value:l.description,onChange:y,placeholder:"Optional description of the device...",rows:4})]})]}),h==="success"&&u.jsx(fv,{children:"✅ Device added successfully! Redirecting to dashboard..."}),h==="error"&&u.jsx(pv,{children:"❌ Failed to add device. Please check your information and try again."}),u.jsxs(lv,{children:[u.jsx(av,{type:"button",onClick:_,children:"Cancel"}),u.jsx(sv,{type:"submit",disabled:!E()||c,children:c?"Adding Device...":"Add Device"})]})]}),u.jsx(uv,{children:u.jsxs(cv,{children:[u.jsx(dv,{children:"Device Preview"}),u.jsxs(Cr,{children:[u.jsx(Er,{children:"Name:"}),u.jsx(Pr,{children:l.name||"Not specified"})]}),u.jsxs(Cr,{children:[u.jsx(Er,{children:"Type:"}),u.jsx(Pr,{children:l.type||"Not specified"})]}),u.jsxs(Cr,{children:[u.jsx(Er,{children:"Location:"}),u.jsx(Pr,{children:l.location||"Not specified"})]}),u.jsxs(Cr,{children:[u.jsx(Er,{children:"IP Address:"}),u.jsx(Pr,{children:l.ipAddress||"Not specified"})]}),l.port&&u.jsxs(Cr,{children:[u.jsx(Er,{children:"Port:"}),u.jsx(Pr,{children:l.port})]}),l.description&&u.jsxs(Cr,{children:[u.jsx(Er,{children:"Description:"}),u.jsx(Pr,{children:l.description})]})]})})]})]})]})},vv=C.div`
  margin-top: 2rem;
`,zf=C.button`
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
`,yv=C.div`
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
`,xv=C.h1`
  color: #333;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
`,wv=C.p`
  color: #666;
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
  font-weight: 500;
`,Sv=C.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background-color: ${o=>o.status==="On"?"#28a745":"#dc3545"};
`,ka=C.button`
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
`,kv=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,sl=C.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,jv=C(sl)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`,Cv=C(sl)`
  grid-column: 1 / -1;
`,Qi=C.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f3f4;
`,Nf=C.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Yt=C.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f3f4;

  &:last-child {
    border-bottom: none;
  }
`,Gt=C.span`
  font-weight: 600;
  color: #666;
  min-width: 120px;
  font-size: 0.95rem;
`,Kt=C.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`,_r=C.input`
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
`,Ev=C.button`
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
`,Pv=C.div`
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
`,_v=C.span`
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
`,zv=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  border-left: 4px solid ${({type:o})=>o==="error"?"#dc3545":o==="warning"?"#ffc107":"#007bff"};
  background: ${({type:o})=>o==="error"?"#f8d7da":o==="warning"?"#fff3cd":"#d1ecf1"};
  border-radius: 0 8px 8px 0;
  margin-bottom: 0.5rem;
`,Nv=C.span`
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
`,Lv=C.span`
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Rv=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #666;
`,Tv=C.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
`,Ov=()=>{const o=Xt(),{deviceId:l}=Zm(),[a,c]=T.useState(null),[f,h]=T.useState(!1),[m,w]=T.useState({}),[y,P]=T.useState([]),[_,E]=T.useState(!0),[N,$]=T.useState(null);T.useEffect(()=>{(async()=>{try{E(!0),await new Promise(Qe=>setTimeout(Qe,1e3));const K={id:l||"DEV-001",name:"Living Room Smart Light",type:"Smart Light",location:"Living Room",status:"On",ipAddress:"192.168.1.105",port:"8080",description:"Main lighting control for the living room area",lastSeen:"2 minutes ago",uptime:"5 days, 12 hours",firmwareVersion:"v2.1.4",signalStrength:85},ve=[{id:"1",timestamp:"2025-07-07 18:45:12",message:"Device status changed to ON",type:"info"},{id:"2",timestamp:"2025-07-07 15:30:45",message:"Firmware updated to v2.1.4",type:"info"},{id:"3",timestamp:"2025-07-07 12:15:20",message:"Connection timeout detected",type:"warning"},{id:"4",timestamp:"2025-07-07 09:00:10",message:"Device restarted",type:"info"}];c(K),w(K),P(ve)}catch{$("Failed to load device data")}finally{E(!1)}})()},[l]);const A=()=>{localStorage.removeItem("token"),o("/login")},R=()=>{o("/dashboard")},D=()=>{h(!0)},G=async()=>{try{await new Promise(V=>setTimeout(V,1e3)),c(V=>V?{...V,...m}:null),h(!1)}catch{$("Failed to save changes")}},H=()=>{w(a||{}),h(!1)},M=async()=>{if(a)try{const V=a.status==="On"?"Off":"On";c(ve=>ve?{...ve,status:V}:null);const K={id:Date.now().toString(),timestamp:new Date().toLocaleString(),message:`Device status changed to ${V}`,type:"info"};P(ve=>[K,...ve])}catch{$("Failed to toggle device status")}},J=(V,K)=>{w(ve=>({...ve,[V]:K}))},Z=V=>K=>{J(V,K.target.value)};return _?u.jsxs(Sn,{children:[u.jsxs(kn,{children:[u.jsxs(jn,{children:[u.jsx(Cn,{children:"🏠"}),u.jsx(En,{children:"Home Control Hub"})]}),u.jsxs(Pn,{children:[u.jsx(pe,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(pe,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(pe,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(pe,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_n,{onClick:A,children:"Logout"})]})]}),u.jsx(zn,{children:u.jsx(Rv,{children:"Loading device details..."})})]}):N||!a?u.jsxs(Sn,{children:[u.jsxs(kn,{children:[u.jsxs(jn,{children:[u.jsx(Cn,{children:"🏠"}),u.jsx(En,{children:"Home Control Hub"})]}),u.jsxs(Pn,{children:[u.jsx(pe,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(pe,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(pe,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(pe,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_n,{onClick:A,children:"Logout"})]})]}),u.jsxs(zn,{children:[u.jsx(Tv,{children:N||"Device not found"}),u.jsxs(zf,{onClick:R,children:[u.jsx(ef,{})," Back to Dashboard"]})]})]}):u.jsxs(Sn,{children:[u.jsxs(kn,{children:[u.jsxs(jn,{children:[u.jsx(Cn,{children:"🏠"}),u.jsx(En,{children:"Home Control Hub"})]}),u.jsxs(Pn,{children:[u.jsx(pe,{onClick:()=>o("/profile"),children:"Profile"}),u.jsx(pe,{onClick:()=>o("/dashboard"),children:"Dashboard"}),u.jsx(pe,{onClick:()=>o("/faq"),children:"FAQ"}),u.jsx(pe,{onClick:()=>o("/support"),children:"Support"}),u.jsx(_n,{onClick:A,children:"Logout"})]})]}),u.jsxs(zn,{children:[u.jsxs(zf,{onClick:R,children:[u.jsx(ef,{})," Back to Dashboard"]}),u.jsxs(yv,{children:[u.jsxs("div",{children:[u.jsx(xv,{children:f?u.jsx(_r,{value:m.name||"",onChange:Z("name")}):a.name}),u.jsxs(wv,{children:["Device ID: ",a.id]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[u.jsx(Sv,{status:a.status,children:a.status}),f?u.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[u.jsxs(ka,{onClick:G,variant:"success",children:[u.jsx(D0,{})," Save"]}),u.jsxs(ka,{onClick:H,variant:"cancel",children:[u.jsx(F0,{})," Cancel"]})]}):u.jsxs(ka,{onClick:D,children:[u.jsx(O0,{})," Edit"]})]})]}),u.jsx(vv,{children:u.jsxs(kv,{children:[u.jsxs(sl,{children:[u.jsx(Qi,{children:"Device Information"}),u.jsxs(Nf,{children:[u.jsxs(Yt,{children:[u.jsx(Gt,{children:"Type:"}),u.jsx(Kt,{children:f?u.jsx(_r,{value:m.type||"",onChange:Z("type")}):a.type})]}),u.jsxs(Yt,{children:[u.jsx(Gt,{children:"Location:"}),u.jsx(Kt,{children:f?u.jsx(_r,{value:m.location||"",onChange:Z("location")}):a.location})]}),u.jsxs(Yt,{children:[u.jsx(Gt,{children:"IP Address:"}),u.jsx(Kt,{children:f?u.jsx(_r,{value:m.ipAddress||"",onChange:Z("ipAddress")}):a.ipAddress})]}),a.port&&u.jsxs(Yt,{children:[u.jsx(Gt,{children:"Port:"}),u.jsx(Kt,{children:f?u.jsx(_r,{value:m.port||"",onChange:Z("port")}):a.port})]}),u.jsxs(Yt,{children:[u.jsx(Gt,{children:"Description:"}),u.jsx(Kt,{children:f?u.jsx(_r,{value:m.description||"",onChange:Z("description"),as:"textarea",rows:3}):a.description||"No description"})]})]})]}),u.jsxs(jv,{children:[u.jsx(Qi,{children:"Device Controls"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[u.jsxs(Ev,{onClick:M,children:[u.jsx("span",{children:"⚡"}),u.jsxs("span",{children:["Turn ",a.status==="On"?"Off":"On"]}),u.jsx(Pv,{checked:a.status==="On"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",background:"#f8f9fa",borderRadius:"8px"},children:[u.jsx($0,{}),u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:"600",color:"#333"},children:"Signal Strength"}),u.jsxs("div",{style:{color:"#666",fontSize:"0.9rem"},children:[a.signalStrength,"%"]})]}),u.jsx("div",{style:{marginLeft:"auto",width:"100px",height:"8px",background:"#e0e0e0",borderRadius:"4px",overflow:"hidden"},children:u.jsx("div",{style:{width:`${a.signalStrength}%`,height:"100%",background:a.signalStrength>70?"#28a745":a.signalStrength>40?"#ffc107":"#dc3545",transition:"width 0.3s"}})})]})]})]}),u.jsxs(sl,{children:[u.jsx(Qi,{children:"System Information"}),u.jsxs(Nf,{children:[u.jsxs(Yt,{children:[u.jsx(Gt,{children:"Last Seen:"}),u.jsx(Kt,{children:a.lastSeen})]}),u.jsxs(Yt,{children:[u.jsx(Gt,{children:"Uptime:"}),u.jsx(Kt,{children:a.uptime})]}),u.jsxs(Yt,{children:[u.jsx(Gt,{children:"Firmware:"}),u.jsx(Kt,{children:a.firmwareVersion})]}),u.jsxs(Yt,{children:[u.jsx(Gt,{children:"Status:"}),u.jsx(Kt,{children:u.jsx(_v,{online:a.status==="On",children:a.status==="On"?"Online":"Offline"})})]})]})]}),u.jsxs(Cv,{children:[u.jsx(Qi,{children:"Recent Activity"}),u.jsx("div",{style:{maxHeight:"300px",overflowY:"auto"},children:y.map(V=>u.jsxs(zv,{type:V.type,children:[u.jsx(Nv,{children:V.timestamp}),u.jsxs(Lv,{children:[V.type==="warning"&&u.jsx(I0,{}),V.message]})]},V.id))})]})]})})]})]})},Iv=()=>u.jsx(k0,{children:u.jsxs(m0,{children:[u.jsx(Dt,{path:"/login",element:u.jsx(Sf,{})}),u.jsx(Dt,{path:"/register",element:u.jsx(p1,{})}),u.jsx(Dt,{path:"/dashboard",element:u.jsx(S1,{})}),u.jsx(Dt,{path:"/faq",element:u.jsx(z1,{})}),u.jsx(Dt,{path:"/support",element:u.jsx(b1,{})}),u.jsx(Dt,{path:"/profile",element:u.jsx(nv,{})}),u.jsx(Dt,{path:"/add-device",element:u.jsx(gv,{})}),u.jsx(Dt,{path:"/device/:deviceId",element:u.jsx(Ov,{})}),u.jsx(Dt,{path:"/",element:u.jsx(Sf,{})})]})});jm.createRoot(document.getElementById("root")).render(u.jsx(rt.StrictMode,{children:u.jsx(Iv,{})}));
