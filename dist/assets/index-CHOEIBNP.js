function qE(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function YE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var F0={exports:{}},Uu={},B0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),JE=Symbol.for("react.portal"),ZE=Symbol.for("react.fragment"),QE=Symbol.for("react.strict_mode"),eM=Symbol.for("react.profiler"),tM=Symbol.for("react.provider"),nM=Symbol.for("react.context"),iM=Symbol.for("react.forward_ref"),rM=Symbol.for("react.suspense"),sM=Symbol.for("react.memo"),oM=Symbol.for("react.lazy"),gg=Symbol.iterator;function aM(n){return n===null||typeof n!="object"?null:(n=gg&&n[gg]||n["@@iterator"],typeof n=="function"?n:null)}var z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,V0={};function Vo(n,e,t){this.props=n,this.context=e,this.refs=V0,this.updater=t||z0}Vo.prototype.isReactComponent={};Vo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Vo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function G0(){}G0.prototype=Vo.prototype;function Lp(n,e,t){this.props=n,this.context=e,this.refs=V0,this.updater=t||z0}var Dp=Lp.prototype=new G0;Dp.constructor=Lp;H0(Dp,Vo.prototype);Dp.isPureReactComponent=!0;var _g=Array.isArray,W0=Object.prototype.hasOwnProperty,Up={current:null},j0={key:!0,ref:!0,__self:!0,__source:!0};function X0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W0.call(e,i)&&!j0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_l,type:n,key:s,ref:o,props:r,_owner:Up.current}}function lM(n,e){return{$$typeof:_l,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Op(n){return typeof n=="object"&&n!==null&&n.$$typeof===_l}function cM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var vg=/\/+/g;function gd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?cM(""+n.key):e.toString(36)}function Ac(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case _l:case JE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+gd(o,0):i,_g(r)?(t="",n!=null&&(t=n.replace(vg,"$&/")+"/"),Ac(r,e,t,"",function(c){return c})):r!=null&&(Op(r)&&(r=lM(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",_g(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+gd(s,a);o+=Ac(s,e,t,l,r)}else if(l=aM(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+gd(s,a++),o+=Ac(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ul(n,e,t){if(n==null)return n;var i=[],r=0;return Ac(n,i,"","",function(s){return e.call(t,s,r++)}),i}function uM(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var un={current:null},bc={transition:null},dM={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:bc,ReactCurrentOwner:Up};function $0(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Ul,forEach:function(n,e,t){Ul(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ul(n,function(){e++}),e},toArray:function(n){return Ul(n,function(e){return e})||[]},only:function(n){if(!Op(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};je.Component=Vo;je.Fragment=ZE;je.Profiler=eM;je.PureComponent=Lp;je.StrictMode=QE;je.Suspense=rM;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dM;je.act=$0;je.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=H0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Up.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)W0.call(e,l)&&!j0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_l,type:n.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(n){return n={$$typeof:nM,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:tM,_context:n},n.Consumer=n};je.createElement=X0;je.createFactory=function(n){var e=X0.bind(null,n);return e.type=n,e};je.createRef=function(){return{current:null}};je.forwardRef=function(n){return{$$typeof:iM,render:n}};je.isValidElement=Op;je.lazy=function(n){return{$$typeof:oM,_payload:{_status:-1,_result:n},_init:uM}};je.memo=function(n,e){return{$$typeof:sM,type:n,compare:e===void 0?null:e}};je.startTransition=function(n){var e=bc.transition;bc.transition={};try{n()}finally{bc.transition=e}};je.unstable_act=$0;je.useCallback=function(n,e){return un.current.useCallback(n,e)};je.useContext=function(n){return un.current.useContext(n)};je.useDebugValue=function(){};je.useDeferredValue=function(n){return un.current.useDeferredValue(n)};je.useEffect=function(n,e){return un.current.useEffect(n,e)};je.useId=function(){return un.current.useId()};je.useImperativeHandle=function(n,e,t){return un.current.useImperativeHandle(n,e,t)};je.useInsertionEffect=function(n,e){return un.current.useInsertionEffect(n,e)};je.useLayoutEffect=function(n,e){return un.current.useLayoutEffect(n,e)};je.useMemo=function(n,e){return un.current.useMemo(n,e)};je.useReducer=function(n,e,t){return un.current.useReducer(n,e,t)};je.useRef=function(n){return un.current.useRef(n)};je.useState=function(n){return un.current.useState(n)};je.useSyncExternalStore=function(n,e,t){return un.current.useSyncExternalStore(n,e,t)};je.useTransition=function(){return un.current.useTransition()};je.version="18.3.1";B0.exports=je;var G=B0.exports;const K0=YE(G),fM=qE({__proto__:null,default:K0},[G]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hM=G,pM=Symbol.for("react.element"),mM=Symbol.for("react.fragment"),gM=Object.prototype.hasOwnProperty,_M=hM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vM={key:!0,ref:!0,__self:!0,__source:!0};function q0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)gM.call(e,i)&&!vM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:pM,type:n,key:s,ref:o,props:r,_owner:_M.current}}Uu.Fragment=mM;Uu.jsx=q0;Uu.jsxs=q0;F0.exports=Uu;var P=F0.exports,Uf={},Y0={exports:{}},Rn={},J0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,K){var Z=D.length;D.push(K);e:for(;0<Z;){var ae=Z-1>>>1,Me=D[ae];if(0<r(Me,K))D[ae]=K,D[Z]=Me,Z=ae;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],Z=D.pop();if(Z!==K){D[0]=Z;e:for(var ae=0,Me=D.length,Ye=Me>>>1;ae<Ye;){var $=2*(ae+1)-1,oe=D[$],_e=$+1,ue=D[_e];if(0>r(oe,Z))_e<Me&&0>r(ue,oe)?(D[ae]=ue,D[_e]=Z,ae=_e):(D[ae]=oe,D[$]=Z,ae=$);else if(_e<Me&&0>r(ue,Z))D[ae]=ue,D[_e]=Z,ae=_e;else break e}}return K}function r(D,K){var Z=D.sortIndex-K.sortIndex;return Z!==0?Z:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,f=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var K=t(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=D)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(c)}}function x(D){if(v=!1,y(D),!g)if(t(l)!==null)g=!0,j(b);else{var K=t(c);K!==null&&ee(x,K.startTime-D)}}function b(D,K){g=!1,v&&(v=!1,h(R),R=-1),p=!0;var Z=f;try{for(y(K),u=t(l);u!==null&&(!(u.expirationTime>K)||D&&!I());){var ae=u.callback;if(typeof ae=="function"){u.callback=null,f=u.priorityLevel;var Me=ae(u.expirationTime<=K);K=n.unstable_now(),typeof Me=="function"?u.callback=Me:u===t(l)&&i(l),y(K)}else i(l);u=t(l)}if(u!==null)var Ye=!0;else{var $=t(c);$!==null&&ee(x,$.startTime-K),Ye=!1}return Ye}finally{u=null,f=Z,p=!1}}var A=!1,w=null,R=-1,M=5,S=-1;function I(){return!(n.unstable_now()-S<M)}function B(){if(w!==null){var D=n.unstable_now();S=D;var K=!0;try{K=w(!0,D)}finally{K?F():(A=!1,w=null)}}else A=!1}var F;if(typeof _=="function")F=function(){_(B)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Y=W.port2;W.port1.onmessage=B,F=function(){Y.postMessage(null)}}else F=function(){m(B,0)};function j(D){w=D,A||(A=!0,F())}function ee(D,K){R=m(function(){D(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,j(b))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var Z=f;f=K;try{return D()}finally{f=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=f;f=D;try{return K()}finally{f=Z}},n.unstable_scheduleCallback=function(D,K,Z){var ae=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,D){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Z+Me,D={id:d++,callback:K,priorityLevel:D,startTime:Z,expirationTime:Me,sortIndex:-1},Z>ae?(D.sortIndex=Z,e(c,D),t(l)===null&&D===t(c)&&(v?(h(R),R=-1):v=!0,ee(x,Z-ae))):(D.sortIndex=Me,e(l,D),g||p||(g=!0,j(b))),D},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(D){var K=f;return function(){var Z=f;f=K;try{return D.apply(this,arguments)}finally{f=Z}}}})(Z0);J0.exports=Z0;var yM=J0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xM=G,bn=yM;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q0=new Set,Ba={};function Rs(n,e){Mo(n,e),Mo(n+"Capture",e)}function Mo(n,e){for(Ba[n]=e,n=0;n<e.length;n++)Q0.add(e[n])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,SM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yg={},xg={};function EM(n){return Of.call(xg,n)?!0:Of.call(yg,n)?!1:SM.test(n)?xg[n]=!0:(yg[n]=!0,!1)}function MM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function TM(n,e,t,i){if(e===null||typeof e>"u"||MM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Xt[n]=new dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Xt[e]=new dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Xt[n]=new dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Xt[n]=new dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Xt[n]=new dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Xt[n]=new dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Xt[n]=new dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Xt[n]=new dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Xt[n]=new dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var kp=/[\-:]([a-z])/g;function Fp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(kp,Fp);Xt[e]=new dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(kp,Fp);Xt[e]=new dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(kp,Fp);Xt[e]=new dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Xt[n]=new dn(n,1,!1,n.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Xt[n]=new dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Bp(n,e,t,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TM(e,t,r,i)&&(t=null),i||r===null?EM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Zi=xM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ol=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),ey=Symbol.for("react.provider"),ty=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Vp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),ny=Symbol.for("react.offscreen"),Sg=Symbol.iterator;function ea(n){return n===null||typeof n!="object"?null:(n=Sg&&n[Sg]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,_d;function _a(n){if(_d===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);_d=e&&e[1]||""}return`
`+_d+n}var vd=!1;function yd(n,e){if(!n||vd)return"";vd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{vd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?_a(n):""}function wM(n){switch(n.tag){case 5:return _a(n.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return n=yd(n.type,!1),n;case 11:return n=yd(n.type.render,!1),n;case 1:return n=yd(n.type,!0),n;default:return""}}function zf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case qs:return"Fragment";case Ks:return"Portal";case kf:return"Profiler";case zp:return"StrictMode";case Ff:return"Suspense";case Bf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ty:return(n.displayName||"Context")+".Consumer";case ey:return(n._context.displayName||"Context")+".Provider";case Hp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Vp:return e=n.displayName||null,e!==null?e:zf(n.type)||"Memo";case dr:e=n._payload,n=n._init;try{return zf(n(e))}catch{}}return null}function AM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zf(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Br(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function iy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bM(n){var e=iy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function kl(n){n._valueTracker||(n._valueTracker=bM(n))}function ry(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=iy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Yc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Hf(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Eg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Br(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sy(n,e){e=e.checked,e!=null&&Bp(n,"checked",e,!1)}function Vf(n,e){sy(n,e);var t=Br(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Gf(n,e.type,Br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Mg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Gf(n,e,t){(e!=="number"||Yc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var va=Array.isArray;function lo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Br(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Wf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Tg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(va(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Br(t)}}function oy(n,e){var t=Br(e.value),i=Br(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function wg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ay(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ay(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fl,ly=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function za(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RM=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(n){RM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),wa[e]=wa[n]})});function cy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||wa.hasOwnProperty(n)&&wa[n]?(""+e).trim():e+"px"}function uy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=cy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var CM=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(n,e){if(e){if(CM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function $f(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function Gp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var qf=null,co=null,uo=null;function Ag(n){if(n=xl(n)){if(typeof qf!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=zu(e),qf(n.stateNode,n.type,e))}}function dy(n){co?uo?uo.push(n):uo=[n]:co=n}function fy(){if(co){var n=co,e=uo;if(uo=co=null,Ag(n),e)for(n=0;n<e.length;n++)Ag(e[n])}}function hy(n,e){return n(e)}function py(){}var xd=!1;function my(n,e,t){if(xd)return n(e,t);xd=!0;try{return hy(n,e,t)}finally{xd=!1,(co!==null||uo!==null)&&(py(),fy())}}function Ha(n,e){var t=n.stateNode;if(t===null)return null;var i=zu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var Yf=!1;if(Wi)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){Yf=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{Yf=!1}function IM(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var Aa=!1,Jc=null,Zc=!1,Jf=null,PM={onError:function(n){Aa=!0,Jc=n}};function NM(n,e,t,i,r,s,o,a,l){Aa=!1,Jc=null,IM.apply(PM,arguments)}function LM(n,e,t,i,r,s,o,a,l){if(NM.apply(this,arguments),Aa){if(Aa){var c=Jc;Aa=!1,Jc=null}else throw Error(ie(198));Zc||(Zc=!0,Jf=c)}}function Cs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function gy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function bg(n){if(Cs(n)!==n)throw Error(ie(188))}function DM(n){var e=n.alternate;if(!e){if(e=Cs(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return bg(r),n;if(s===i)return bg(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function _y(n){return n=DM(n),n!==null?vy(n):null}function vy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=vy(n);if(e!==null)return e;n=n.sibling}return null}var yy=bn.unstable_scheduleCallback,Rg=bn.unstable_cancelCallback,UM=bn.unstable_shouldYield,OM=bn.unstable_requestPaint,Rt=bn.unstable_now,kM=bn.unstable_getCurrentPriorityLevel,Wp=bn.unstable_ImmediatePriority,xy=bn.unstable_UserBlockingPriority,Qc=bn.unstable_NormalPriority,FM=bn.unstable_LowPriority,Sy=bn.unstable_IdlePriority,Ou=null,pi=null;function BM(n){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Ou,n,void 0,(n.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:VM,zM=Math.log,HM=Math.LN2;function VM(n){return n>>>=0,n===0?32:31-(zM(n)/HM|0)|0}var Bl=64,zl=4194304;function ya(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function eu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ya(a):(s&=o,s!==0&&(i=ya(s)))}else o=t&~r,o!==0?i=ya(o):s!==0&&(i=ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ri(e),r=1<<t,i|=n[t],e&=~r;return i}function GM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=GM(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Zf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ey(){var n=Bl;return Bl<<=1,!(Bl&4194240)&&(Bl=64),n}function Sd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function vl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ri(e),n[e]=t}function jM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ri(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function jp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ri(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var lt=0;function My(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ty,Xp,wy,Ay,by,Qf=!1,Hl=[],Ar=null,br=null,Rr=null,Va=new Map,Ga=new Map,hr=[],XM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cg(n,e){switch(n){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function na(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xl(e),e!==null&&Xp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function $M(n,e,t,i,r){switch(e){case"focusin":return Ar=na(Ar,n,e,t,i,r),!0;case"dragenter":return br=na(br,n,e,t,i,r),!0;case"mouseover":return Rr=na(Rr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Va.set(s,na(Va.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ga.set(s,na(Ga.get(s)||null,n,e,t,i,r)),!0}return!1}function Ry(n){var e=hs(n.target);if(e!==null){var t=Cs(e);if(t!==null){if(e=t.tag,e===13){if(e=gy(t),e!==null){n.blockedOn=e,by(n.priority,function(){wy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Rc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=eh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Kf=i,t.target.dispatchEvent(i),Kf=null}else return e=xl(t),e!==null&&Xp(e),n.blockedOn=t,!1;e.shift()}return!0}function Ig(n,e,t){Rc(n)&&t.delete(e)}function KM(){Qf=!1,Ar!==null&&Rc(Ar)&&(Ar=null),br!==null&&Rc(br)&&(br=null),Rr!==null&&Rc(Rr)&&(Rr=null),Va.forEach(Ig),Ga.forEach(Ig)}function ia(n,e){n.blockedOn===e&&(n.blockedOn=null,Qf||(Qf=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,KM)))}function Wa(n){function e(r){return ia(r,n)}if(0<Hl.length){ia(Hl[0],n);for(var t=1;t<Hl.length;t++){var i=Hl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ar!==null&&ia(Ar,n),br!==null&&ia(br,n),Rr!==null&&ia(Rr,n),Va.forEach(e),Ga.forEach(e),t=0;t<hr.length;t++)i=hr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<hr.length&&(t=hr[0],t.blockedOn===null);)Ry(t),t.blockedOn===null&&hr.shift()}var fo=Zi.ReactCurrentBatchConfig,tu=!0;function qM(n,e,t,i){var r=lt,s=fo.transition;fo.transition=null;try{lt=1,$p(n,e,t,i)}finally{lt=r,fo.transition=s}}function YM(n,e,t,i){var r=lt,s=fo.transition;fo.transition=null;try{lt=4,$p(n,e,t,i)}finally{lt=r,fo.transition=s}}function $p(n,e,t,i){if(tu){var r=eh(n,e,t,i);if(r===null)Pd(n,e,i,nu,t),Cg(n,i);else if($M(r,n,e,t,i))i.stopPropagation();else if(Cg(n,i),e&4&&-1<XM.indexOf(n)){for(;r!==null;){var s=xl(r);if(s!==null&&Ty(s),s=eh(n,e,t,i),s===null&&Pd(n,e,i,nu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pd(n,e,i,null,t)}}var nu=null;function eh(n,e,t,i){if(nu=null,n=Gp(i),n=hs(n),n!==null)if(e=Cs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=gy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return nu=n,null}function Cy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kM()){case Wp:return 1;case xy:return 4;case Qc:case FM:return 16;case Sy:return 536870912;default:return 16}default:return 16}}var xr=null,Kp=null,Cc=null;function Iy(){if(Cc)return Cc;var n,e=Kp,t=e.length,i,r="value"in xr?xr.value:xr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Cc=r.slice(n,1<i?1-i:void 0)}function Ic(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Vl(){return!0}function Pg(){return!1}function Cn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vl:Pg,this.isPropagationStopped=Pg,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qp=Cn(Go),yl=wt({},Go,{view:0,detail:0}),JM=Cn(yl),Ed,Md,ra,ku=wt({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ra&&(ra&&n.type==="mousemove"?(Ed=n.screenX-ra.screenX,Md=n.screenY-ra.screenY):Md=Ed=0,ra=n),Ed)},movementY:function(n){return"movementY"in n?n.movementY:Md}}),Ng=Cn(ku),ZM=wt({},ku,{dataTransfer:0}),QM=Cn(ZM),eT=wt({},yl,{relatedTarget:0}),Td=Cn(eT),tT=wt({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),nT=Cn(tT),iT=wt({},Go,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rT=Cn(iT),sT=wt({},Go,{data:0}),Lg=Cn(sT),oT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=lT[n])?!!e[n]:!1}function Yp(){return cT}var uT=wt({},yl,{key:function(n){if(n.key){var e=oT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ic(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?aT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yp,charCode:function(n){return n.type==="keypress"?Ic(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ic(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),dT=Cn(uT),fT=wt({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dg=Cn(fT),hT=wt({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yp}),pT=Cn(hT),mT=wt({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),gT=Cn(mT),_T=wt({},ku,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),vT=Cn(_T),yT=[9,13,27,32],Jp=Wi&&"CompositionEvent"in window,ba=null;Wi&&"documentMode"in document&&(ba=document.documentMode);var xT=Wi&&"TextEvent"in window&&!ba,Py=Wi&&(!Jp||ba&&8<ba&&11>=ba),Ug=" ",Og=!1;function Ny(n,e){switch(n){case"keyup":return yT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ly(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function ST(n,e){switch(n){case"compositionend":return Ly(e);case"keypress":return e.which!==32?null:(Og=!0,Ug);case"textInput":return n=e.data,n===Ug&&Og?null:n;default:return null}}function ET(n,e){if(Ys)return n==="compositionend"||!Jp&&Ny(n,e)?(n=Iy(),Cc=Kp=xr=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Py&&e.locale!=="ko"?null:e.data;default:return null}}var MT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!MT[n.type]:e==="textarea"}function Dy(n,e,t,i){dy(i),e=iu(e,"onChange"),0<e.length&&(t=new qp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ra=null,ja=null;function TT(n){jy(n,0)}function Fu(n){var e=Qs(n);if(ry(e))return n}function wT(n,e){if(n==="change")return e}var Uy=!1;if(Wi){var wd;if(Wi){var Ad="oninput"in document;if(!Ad){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),Ad=typeof Fg.oninput=="function"}wd=Ad}else wd=!1;Uy=wd&&(!document.documentMode||9<document.documentMode)}function Bg(){Ra&&(Ra.detachEvent("onpropertychange",Oy),ja=Ra=null)}function Oy(n){if(n.propertyName==="value"&&Fu(ja)){var e=[];Dy(e,ja,n,Gp(n)),my(TT,e)}}function AT(n,e,t){n==="focusin"?(Bg(),Ra=e,ja=t,Ra.attachEvent("onpropertychange",Oy)):n==="focusout"&&Bg()}function bT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fu(ja)}function RT(n,e){if(n==="click")return Fu(e)}function CT(n,e){if(n==="input"||n==="change")return Fu(e)}function IT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ai=typeof Object.is=="function"?Object.is:IT;function Xa(n,e){if(ai(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Of.call(e,r)||!ai(n[r],e[r]))return!1}return!0}function zg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hg(n,e){var t=zg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=zg(t)}}function ky(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ky(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Fy(){for(var n=window,e=Yc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Yc(n.document)}return e}function Zp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function PT(n){var e=Fy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&ky(t.ownerDocument.documentElement,t)){if(i!==null&&Zp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Hg(t,s);var o=Hg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var NT=Wi&&"documentMode"in document&&11>=document.documentMode,Js=null,th=null,Ca=null,nh=!1;function Vg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;nh||Js==null||Js!==Yc(i)||(i=Js,"selectionStart"in i&&Zp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ca&&Xa(Ca,i)||(Ca=i,i=iu(th,"onSelect"),0<i.length&&(e=new qp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Js)))}function Gl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Zs={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},bd={},By={};Wi&&(By=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Bu(n){if(bd[n])return bd[n];if(!Zs[n])return n;var e=Zs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in By)return bd[n]=e[t];return n}var zy=Bu("animationend"),Hy=Bu("animationiteration"),Vy=Bu("animationstart"),Gy=Bu("transitionend"),Wy=new Map,Gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(n,e){Wy.set(n,e),Rs(e,[n])}for(var Rd=0;Rd<Gg.length;Rd++){var Cd=Gg[Rd],LT=Cd.toLowerCase(),DT=Cd[0].toUpperCase()+Cd.slice(1);Vr(LT,"on"+DT)}Vr(zy,"onAnimationEnd");Vr(Hy,"onAnimationIteration");Vr(Vy,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(Gy,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);Rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UT=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function Wg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,LM(i,e,void 0,n),n.currentTarget=null}function jy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wg(r,a,c),s=l}}}if(Zc)throw n=Jf,Zc=!1,Jf=null,n}function pt(n,e){var t=e[ah];t===void 0&&(t=e[ah]=new Set);var i=n+"__bubble";t.has(i)||(Xy(e,n,2,!1),t.add(i))}function Id(n,e,t){var i=0;e&&(i|=4),Xy(t,n,i,e)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function $a(n){if(!n[Wl]){n[Wl]=!0,Q0.forEach(function(t){t!=="selectionchange"&&(UT.has(t)||Id(t,!1,n),Id(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Wl]||(e[Wl]=!0,Id("selectionchange",!1,e))}}function Xy(n,e,t,i){switch(Cy(e)){case 1:var r=qM;break;case 4:r=YM;break;default:r=$p}t=r.bind(null,e,t,n),r=void 0,!Yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Pd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}my(function(){var c=s,d=Gp(t),u=[];e:{var f=Wy.get(n);if(f!==void 0){var p=qp,g=n;switch(n){case"keypress":if(Ic(t)===0)break e;case"keydown":case"keyup":p=dT;break;case"focusin":g="focus",p=Td;break;case"focusout":g="blur",p=Td;break;case"beforeblur":case"afterblur":p=Td;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=QM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pT;break;case zy:case Hy:case Vy:p=nT;break;case Gy:p=gT;break;case"scroll":p=JM;break;case"wheel":p=vT;break;case"copy":case"cut":case"paste":p=rT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dg}var v=(e&4)!==0,m=!v&&n==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var _=c,y;_!==null;){y=_;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=Ha(_,h),x!=null&&v.push(Ka(_,x,y)))),m)break;_=_.return}0<v.length&&(f=new p(f,g,null,t,d),u.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Kf&&(g=t.relatedTarget||t.fromElement)&&(hs(g)||g[ji]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?hs(g):null,g!==null&&(m=Cs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=Ng,x="onMouseLeave",h="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(v=Dg,x="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?f:Qs(p),y=g==null?f:Qs(g),f=new v(x,_+"leave",p,t,d),f.target=m,f.relatedTarget=y,x=null,hs(d)===c&&(v=new v(h,_+"enter",g,t,d),v.target=y,v.relatedTarget=m,x=v),m=x,p&&g)t:{for(v=p,h=g,_=0,y=v;y;y=Ns(y))_++;for(y=0,x=h;x;x=Ns(x))y++;for(;0<_-y;)v=Ns(v),_--;for(;0<y-_;)h=Ns(h),y--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=Ns(v),h=Ns(h)}v=null}else v=null;p!==null&&jg(u,f,p,v,!1),g!==null&&m!==null&&jg(u,m,g,v,!0)}}e:{if(f=c?Qs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=wT;else if(kg(f))if(Uy)b=CT;else{b=bT;var A=AT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=RT);if(b&&(b=b(n,c))){Dy(u,b,t,d);break e}A&&A(n,f,c),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Gf(f,"number",f.value)}switch(A=c?Qs(c):window,n){case"focusin":(kg(A)||A.contentEditable==="true")&&(Js=A,th=c,Ca=null);break;case"focusout":Ca=th=Js=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,Vg(u,t,d);break;case"selectionchange":if(NT)break;case"keydown":case"keyup":Vg(u,t,d)}var w;if(Jp)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ys?Ny(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Py&&t.locale!=="ko"&&(Ys||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ys&&(w=Iy()):(xr=d,Kp="value"in xr?xr.value:xr.textContent,Ys=!0)),A=iu(c,R),0<A.length&&(R=new Lg(R,n,null,t,d),u.push({event:R,listeners:A}),w?R.data=w:(w=Ly(t),w!==null&&(R.data=w)))),(w=xT?ST(n,t):ET(n,t))&&(c=iu(c,"onBeforeInput"),0<c.length&&(d=new Lg("onBeforeInput","beforeinput",null,t,d),u.push({event:d,listeners:c}),d.data=w))}jy(u,e)})}function Ka(n,e,t){return{instance:n,listener:e,currentTarget:t}}function iu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ha(n,t),s!=null&&i.unshift(Ka(n,s,r)),s=Ha(n,e),s!=null&&i.push(Ka(n,s,r))),n=n.return}return i}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ha(t,s),l!=null&&o.unshift(Ka(t,l,a))):r||(l=Ha(t,s),l!=null&&o.push(Ka(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var OT=/\r\n?/g,kT=/\u0000|\uFFFD/g;function Xg(n){return(typeof n=="string"?n:""+n).replace(OT,`
`).replace(kT,"")}function jl(n,e,t){if(e=Xg(e),Xg(n)!==e&&t)throw Error(ie(425))}function ru(){}var ih=null,rh=null;function sh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,FT=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,BT=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(n){return $g.resolve(null).then(n).catch(zT)}:oh;function zT(n){setTimeout(function(){throw n})}function Nd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Wa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Wa(e)}function Cr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Kg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Wo=Math.random().toString(36).slice(2),hi="__reactFiber$"+Wo,qa="__reactProps$"+Wo,ji="__reactContainer$"+Wo,ah="__reactEvents$"+Wo,HT="__reactListeners$"+Wo,VT="__reactHandles$"+Wo;function hs(n){var e=n[hi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ji]||t[hi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Kg(n);n!==null;){if(t=n[hi])return t;n=Kg(n)}return e}n=t,t=n.parentNode}return null}function xl(n){return n=n[hi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function zu(n){return n[qa]||null}var lh=[],eo=-1;function Gr(n){return{current:n}}function mt(n){0>eo||(n.current=lh[eo],lh[eo]=null,eo--)}function ft(n,e){eo++,lh[eo]=n.current,n.current=e}var zr={},Zt=Gr(zr),gn=Gr(!1),ys=zr;function To(n,e){var t=n.type.contextTypes;if(!t)return zr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function _n(n){return n=n.childContextTypes,n!=null}function su(){mt(gn),mt(Zt)}function qg(n,e,t){if(Zt.current!==zr)throw Error(ie(168));ft(Zt,e),ft(gn,t)}function $y(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,AM(n)||"Unknown",r));return wt({},t,i)}function ou(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,ys=Zt.current,ft(Zt,n),ft(gn,gn.current),!0}function Yg(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=$y(n,e,ys),i.__reactInternalMemoizedMergedChildContext=n,mt(gn),mt(Zt),ft(Zt,n)):mt(gn),ft(gn,t)}var Di=null,Hu=!1,Ld=!1;function Ky(n){Di===null?Di=[n]:Di.push(n)}function GT(n){Hu=!0,Ky(n)}function Wr(){if(!Ld&&Di!==null){Ld=!0;var n=0,e=lt;try{var t=Di;for(lt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Di=null,Hu=!1}catch(r){throw Di!==null&&(Di=Di.slice(n+1)),yy(Wp,Wr),r}finally{lt=e,Ld=!1}}return null}var to=[],no=0,au=null,lu=0,Un=[],On=0,xs=null,Ui=1,Oi="";function os(n,e){to[no++]=lu,to[no++]=au,au=n,lu=e}function qy(n,e,t){Un[On++]=Ui,Un[On++]=Oi,Un[On++]=xs,xs=n;var i=Ui;n=Oi;var r=32-ri(i)-1;i&=~(1<<r),t+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-ri(e)+r|t<<r|i,Oi=s+n}else Ui=1<<s|t<<r|i,Oi=n}function Qp(n){n.return!==null&&(os(n,1),qy(n,1,0))}function em(n){for(;n===au;)au=to[--no],to[no]=null,lu=to[--no],to[no]=null;for(;n===xs;)xs=Un[--On],Un[On]=null,Oi=Un[--On],Un[On]=null,Ui=Un[--On],Un[On]=null}var An=null,Tn=null,_t=!1,Yn=null;function Yy(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Jg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,An=n,Tn=Cr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,An=n,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=xs!==null?{id:Ui,overflow:Oi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,An=n,Tn=null,!0):!1;default:return!1}}function ch(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uh(n){if(_t){var e=Tn;if(e){var t=e;if(!Jg(n,e)){if(ch(n))throw Error(ie(418));e=Cr(t.nextSibling);var i=An;e&&Jg(n,e)?Yy(i,t):(n.flags=n.flags&-4097|2,_t=!1,An=n)}}else{if(ch(n))throw Error(ie(418));n.flags=n.flags&-4097|2,_t=!1,An=n}}}function Zg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;An=n}function Xl(n){if(n!==An)return!1;if(!_t)return Zg(n),_t=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!sh(n.type,n.memoizedProps)),e&&(e=Tn)){if(ch(n))throw Jy(),Error(ie(418));for(;e;)Yy(n,e),e=Cr(e.nextSibling)}if(Zg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Tn=Cr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Tn=null}}else Tn=An?Cr(n.stateNode.nextSibling):null;return!0}function Jy(){for(var n=Tn;n;)n=Cr(n.nextSibling)}function wo(){Tn=An=null,_t=!1}function tm(n){Yn===null?Yn=[n]:Yn.push(n)}var WT=Zi.ReactCurrentBatchConfig;function sa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function $l(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Qg(n){var e=n._init;return e(n._payload)}function Zy(n){function e(h,_){if(n){var y=h.deletions;y===null?(h.deletions=[_],h.flags|=16):y.push(_)}}function t(h,_){if(!n)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Lr(h,_),h.index=0,h.sibling=null,h}function s(h,_,y){return h.index=y,n?(y=h.alternate,y!==null?(y=y.index,y<_?(h.flags|=2,_):y):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,_,y,x){return _===null||_.tag!==6?(_=zd(y,h.mode,x),_.return=h,_):(_=r(_,y),_.return=h,_)}function l(h,_,y,x){var b=y.type;return b===qs?d(h,_,y.props.children,x,y.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dr&&Qg(b)===_.type)?(x=r(_,y.props),x.ref=sa(h,_,y),x.return=h,x):(x=kc(y.type,y.key,y.props,null,h.mode,x),x.ref=sa(h,_,y),x.return=h,x)}function c(h,_,y,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Hd(y,h.mode,x),_.return=h,_):(_=r(_,y.children||[]),_.return=h,_)}function d(h,_,y,x,b){return _===null||_.tag!==7?(_=vs(y,h.mode,x,b),_.return=h,_):(_=r(_,y),_.return=h,_)}function u(h,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=zd(""+_,h.mode,y),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ol:return y=kc(_.type,_.key,_.props,null,h.mode,y),y.ref=sa(h,null,_),y.return=h,y;case Ks:return _=Hd(_,h.mode,y),_.return=h,_;case dr:var x=_._init;return u(h,x(_._payload),y)}if(va(_)||ea(_))return _=vs(_,h.mode,y,null),_.return=h,_;$l(h,_)}return null}function f(h,_,y,x){var b=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(h,_,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ol:return y.key===b?l(h,_,y,x):null;case Ks:return y.key===b?c(h,_,y,x):null;case dr:return b=y._init,f(h,_,b(y._payload),x)}if(va(y)||ea(y))return b!==null?null:d(h,_,y,x,null);$l(h,y)}return null}function p(h,_,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(_,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ol:return h=h.get(x.key===null?y:x.key)||null,l(_,h,x,b);case Ks:return h=h.get(x.key===null?y:x.key)||null,c(_,h,x,b);case dr:var A=x._init;return p(h,_,y,A(x._payload),b)}if(va(x)||ea(x))return h=h.get(y)||null,d(_,h,x,b,null);$l(_,x)}return null}function g(h,_,y,x){for(var b=null,A=null,w=_,R=_=0,M=null;w!==null&&R<y.length;R++){w.index>R?(M=w,w=null):M=w.sibling;var S=f(h,w,y[R],x);if(S===null){w===null&&(w=M);break}n&&w&&S.alternate===null&&e(h,w),_=s(S,_,R),A===null?b=S:A.sibling=S,A=S,w=M}if(R===y.length)return t(h,w),_t&&os(h,R),b;if(w===null){for(;R<y.length;R++)w=u(h,y[R],x),w!==null&&(_=s(w,_,R),A===null?b=w:A.sibling=w,A=w);return _t&&os(h,R),b}for(w=i(h,w);R<y.length;R++)M=p(w,h,R,y[R],x),M!==null&&(n&&M.alternate!==null&&w.delete(M.key===null?R:M.key),_=s(M,_,R),A===null?b=M:A.sibling=M,A=M);return n&&w.forEach(function(I){return e(h,I)}),_t&&os(h,R),b}function v(h,_,y,x){var b=ea(y);if(typeof b!="function")throw Error(ie(150));if(y=b.call(y),y==null)throw Error(ie(151));for(var A=b=null,w=_,R=_=0,M=null,S=y.next();w!==null&&!S.done;R++,S=y.next()){w.index>R?(M=w,w=null):M=w.sibling;var I=f(h,w,S.value,x);if(I===null){w===null&&(w=M);break}n&&w&&I.alternate===null&&e(h,w),_=s(I,_,R),A===null?b=I:A.sibling=I,A=I,w=M}if(S.done)return t(h,w),_t&&os(h,R),b;if(w===null){for(;!S.done;R++,S=y.next())S=u(h,S.value,x),S!==null&&(_=s(S,_,R),A===null?b=S:A.sibling=S,A=S);return _t&&os(h,R),b}for(w=i(h,w);!S.done;R++,S=y.next())S=p(w,h,R,S.value,x),S!==null&&(n&&S.alternate!==null&&w.delete(S.key===null?R:S.key),_=s(S,_,R),A===null?b=S:A.sibling=S,A=S);return n&&w.forEach(function(B){return e(h,B)}),_t&&os(h,R),b}function m(h,_,y,x){if(typeof y=="object"&&y!==null&&y.type===qs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ol:e:{for(var b=y.key,A=_;A!==null;){if(A.key===b){if(b=y.type,b===qs){if(A.tag===7){t(h,A.sibling),_=r(A,y.props.children),_.return=h,h=_;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dr&&Qg(b)===A.type){t(h,A.sibling),_=r(A,y.props),_.ref=sa(h,A,y),_.return=h,h=_;break e}t(h,A);break}else e(h,A);A=A.sibling}y.type===qs?(_=vs(y.props.children,h.mode,x,y.key),_.return=h,h=_):(x=kc(y.type,y.key,y.props,null,h.mode,x),x.ref=sa(h,_,y),x.return=h,h=x)}return o(h);case Ks:e:{for(A=y.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){t(h,_.sibling),_=r(_,y.children||[]),_.return=h,h=_;break e}else{t(h,_);break}else e(h,_);_=_.sibling}_=Hd(y,h.mode,x),_.return=h,h=_}return o(h);case dr:return A=y._init,m(h,_,A(y._payload),x)}if(va(y))return g(h,_,y,x);if(ea(y))return v(h,_,y,x);$l(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(t(h,_.sibling),_=r(_,y),_.return=h,h=_):(t(h,_),_=zd(y,h.mode,x),_.return=h,h=_),o(h)):t(h,_)}return m}var Ao=Zy(!0),Qy=Zy(!1),cu=Gr(null),uu=null,io=null,nm=null;function im(){nm=io=uu=null}function rm(n){var e=cu.current;mt(cu),n._currentValue=e}function dh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ho(n,e){uu=n,nm=io=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function zn(n){var e=n._currentValue;if(nm!==n)if(n={context:n,memoizedValue:e,next:null},io===null){if(uu===null)throw Error(ie(308));io=n,uu.dependencies={lanes:0,firstContext:n}}else io=io.next=n;return e}var ps=null;function sm(n){ps===null?ps=[n]:ps.push(n)}function ex(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,sm(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xi(n,i)}function Xi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var fr=!1;function om(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(n,t)}return r=i.interleaved,r===null?(e.next=e,sm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(n,t)}function Pc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,jp(n,t)}}function e_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function du(n,e,t,i){var r=n.updateQueue;fr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,v=a;switch(f=e,p=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){u=g.call(p,u,f);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,u,f):g,f==null)break e;u=wt({},u,f);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=u):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Es|=o,n.lanes=o,n.memoizedState=u}}function t_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Sl={},mi=Gr(Sl),Ya=Gr(Sl),Ja=Gr(Sl);function ms(n){if(n===Sl)throw Error(ie(174));return n}function am(n,e){switch(ft(Ja,e),ft(Ya,n),ft(mi,Sl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=jf(e,n)}mt(mi),ft(mi,e)}function bo(){mt(mi),mt(Ya),mt(Ja)}function nx(n){ms(Ja.current);var e=ms(mi.current),t=jf(e,n.type);e!==t&&(ft(Ya,n),ft(mi,t))}function lm(n){Ya.current===n&&(mt(mi),mt(Ya))}var St=Gr(0);function fu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dd=[];function cm(){for(var n=0;n<Dd.length;n++)Dd[n]._workInProgressVersionPrimary=null;Dd.length=0}var Nc=Zi.ReactCurrentDispatcher,Ud=Zi.ReactCurrentBatchConfig,Ss=0,Et=null,Nt=null,kt=null,hu=!1,Ia=!1,Za=0,jT=0;function $t(){throw Error(ie(321))}function um(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ai(n[t],e[t]))return!1;return!0}function dm(n,e,t,i,r,s){if(Ss=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nc.current=n===null||n.memoizedState===null?qT:YT,n=t(i,r),Ia){s=0;do{if(Ia=!1,Za=0,25<=s)throw Error(ie(301));s+=1,kt=Nt=null,e.updateQueue=null,Nc.current=JT,n=t(i,r)}while(Ia)}if(Nc.current=pu,e=Nt!==null&&Nt.next!==null,Ss=0,kt=Nt=Et=null,hu=!1,e)throw Error(ie(300));return n}function fm(){var n=Za!==0;return Za=0,n}function di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Et.memoizedState=kt=n:kt=kt.next=n,kt}function Hn(){if(Nt===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=Nt.next;var e=kt===null?Et.memoizedState:kt.next;if(e!==null)kt=e,Nt=n;else{if(n===null)throw Error(ie(310));Nt=n,n={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},kt===null?Et.memoizedState=kt=n:kt=kt.next=n}return kt}function Qa(n,e){return typeof e=="function"?e(n):e}function Od(n){var e=Hn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=Nt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ss&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=i):l=l.next=u,Et.lanes|=d,Es|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Et.lanes|=s,Es|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function kd(n){var e=Hn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function ix(){}function rx(n,e){var t=Et,i=Hn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,hm(ax.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(t.flags|=2048,el(9,ox.bind(null,t,i,r,e),void 0,null),Bt===null)throw Error(ie(349));Ss&30||sx(t,e,r)}return r}function sx(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ox(n,e,t,i){e.value=t,e.getSnapshot=i,lx(e)&&cx(n)}function ax(n,e,t){return t(function(){lx(e)&&cx(n)})}function lx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ai(n,t)}catch{return!0}}function cx(n){var e=Xi(n,1);e!==null&&si(e,n,1,-1)}function n_(n){var e=di();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:n},e.queue=n,n=n.dispatch=KT.bind(null,Et,n),[e.memoizedState,n]}function el(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function ux(){return Hn().memoizedState}function Lc(n,e,t,i){var r=di();Et.flags|=n,r.memoizedState=el(1|e,t,void 0,i===void 0?null:i)}function Vu(n,e,t,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&um(i,o.deps)){r.memoizedState=el(e,t,s,i);return}}Et.flags|=n,r.memoizedState=el(1|e,t,s,i)}function i_(n,e){return Lc(8390656,8,n,e)}function hm(n,e){return Vu(2048,8,n,e)}function dx(n,e){return Vu(4,2,n,e)}function fx(n,e){return Vu(4,4,n,e)}function hx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function px(n,e,t){return t=t!=null?t.concat([n]):null,Vu(4,4,hx.bind(null,e,n),t)}function pm(){}function mx(n,e){var t=Hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&um(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function gx(n,e){var t=Hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&um(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function _x(n,e,t){return Ss&21?(ai(t,e)||(t=Ey(),Et.lanes|=t,Es|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function XT(n,e){var t=lt;lt=t!==0&&4>t?t:4,n(!0);var i=Ud.transition;Ud.transition={};try{n(!1),e()}finally{lt=t,Ud.transition=i}}function vx(){return Hn().memoizedState}function $T(n,e,t){var i=Nr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},yx(n))xx(e,t);else if(t=ex(n,e,t,i),t!==null){var r=sn();si(t,n,i,r),Sx(t,e,i)}}function KT(n,e,t){var i=Nr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(yx(n))xx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,sm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=ex(n,e,r,i),t!==null&&(r=sn(),si(t,n,i,r),Sx(t,e,i))}}function yx(n){var e=n.alternate;return n===Et||e!==null&&e===Et}function xx(n,e){Ia=hu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Sx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,jp(n,t)}}var pu={readContext:zn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},qT={readContext:zn,useCallback:function(n,e){return di().memoizedState=[n,e===void 0?null:e],n},useContext:zn,useEffect:i_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Lc(4194308,4,hx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Lc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Lc(4,2,n,e)},useMemo:function(n,e){var t=di();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=di();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=$T.bind(null,Et,n),[i.memoizedState,n]},useRef:function(n){var e=di();return n={current:n},e.memoizedState=n},useState:n_,useDebugValue:pm,useDeferredValue:function(n){return di().memoizedState=n},useTransition:function(){var n=n_(!1),e=n[0];return n=XT.bind(null,n[1]),di().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Et,r=di();if(_t){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),Bt===null)throw Error(ie(349));Ss&30||sx(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,i_(ax.bind(null,i,s,n),[n]),i.flags|=2048,el(9,ox.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=di(),e=Bt.identifierPrefix;if(_t){var t=Oi,i=Ui;t=(i&~(1<<32-ri(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Za++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},YT={readContext:zn,useCallback:mx,useContext:zn,useEffect:hm,useImperativeHandle:px,useInsertionEffect:dx,useLayoutEffect:fx,useMemo:gx,useReducer:Od,useRef:ux,useState:function(){return Od(Qa)},useDebugValue:pm,useDeferredValue:function(n){var e=Hn();return _x(e,Nt.memoizedState,n)},useTransition:function(){var n=Od(Qa)[0],e=Hn().memoizedState;return[n,e]},useMutableSource:ix,useSyncExternalStore:rx,useId:vx,unstable_isNewReconciler:!1},JT={readContext:zn,useCallback:mx,useContext:zn,useEffect:hm,useImperativeHandle:px,useInsertionEffect:dx,useLayoutEffect:fx,useMemo:gx,useReducer:kd,useRef:ux,useState:function(){return kd(Qa)},useDebugValue:pm,useDeferredValue:function(n){var e=Hn();return Nt===null?e.memoizedState=n:_x(e,Nt.memoizedState,n)},useTransition:function(){var n=kd(Qa)[0],e=Hn().memoizedState;return[n,e]},useMutableSource:ix,useSyncExternalStore:rx,useId:vx,unstable_isNewReconciler:!1};function Kn(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function fh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Gu={isMounted:function(n){return(n=n._reactInternals)?Cs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=sn(),r=Nr(n),s=Hi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ir(n,s,r),e!==null&&(si(e,n,r,i),Pc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=sn(),r=Nr(n),s=Hi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ir(n,s,r),e!==null&&(si(e,n,r,i),Pc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=sn(),i=Nr(n),r=Hi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ir(n,r,i),e!==null&&(si(e,n,i,t),Pc(e,n,i))}};function r_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xa(t,i)||!Xa(r,s):!0}function Ex(n,e,t){var i=!1,r=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=_n(e)?ys:Zt.current,i=e.contextTypes,s=(i=i!=null)?To(n,r):zr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function s_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Gu.enqueueReplaceState(e,e.state,null)}function hh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},om(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=_n(e)?ys:Zt.current,r.context=To(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gu.enqueueReplaceState(r,r.state,null),du(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ro(n,e){try{var t="",i=e;do t+=wM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Fd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ph(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ZT=typeof WeakMap=="function"?WeakMap:Map;function Mx(n,e,t){t=Hi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){gu||(gu=!0,Th=i),ph(n,e)},t}function Tx(n,e,t){t=Hi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ph(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ph(n,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function o_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new ZT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=fw.bind(null,n,e,t),e.then(n,n))}function a_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function l_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hi(-1,1),e.tag=2,Ir(t,e,1))),t.lanes|=1),n)}var QT=Zi.ReactCurrentOwner,mn=!1;function rn(n,e,t,i){e.child=n===null?Qy(e,null,t,i):Ao(e,n.child,t,i)}function c_(n,e,t,i,r){t=t.render;var s=e.ref;return ho(e,r),i=dm(n,e,t,i,s,r),t=fm(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$i(n,e,r)):(_t&&t&&Qp(e),e.flags|=1,rn(n,e,i,r),e.child)}function u_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Em(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,wx(n,e,s,i,r)):(n=kc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Xa,t(o,i)&&n.ref===e.ref)return $i(n,e,r)}return e.flags|=1,n=Lr(s,i),n.ref=e.ref,n.return=e,e.child=n}function wx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Xa(s,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,$i(n,e,r)}return mh(n,e,t,i,r)}function Ax(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(so,Mn),Mn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ft(so,Mn),Mn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ft(so,Mn),Mn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ft(so,Mn),Mn|=i;return rn(n,e,r,t),e.child}function bx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function mh(n,e,t,i,r){var s=_n(t)?ys:Zt.current;return s=To(e,s),ho(e,r),t=dm(n,e,t,i,s,r),i=fm(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$i(n,e,r)):(_t&&i&&Qp(e),e.flags|=1,rn(n,e,t,r),e.child)}function d_(n,e,t,i,r){if(_n(t)){var s=!0;ou(e)}else s=!1;if(ho(e,r),e.stateNode===null)Dc(n,e),Ex(e,t,i),hh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=_n(t)?ys:Zt.current,c=To(e,c));var d=t.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&s_(e,o,i,c),fr=!1;var f=e.memoizedState;o.state=f,du(e,i,o,r),l=e.memoizedState,a!==i||f!==l||gn.current||fr?(typeof d=="function"&&(fh(e,t,d,i),l=e.memoizedState),(a=fr||r_(e,t,a,i,f,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,tx(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),o.props=c,u=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=_n(t)?ys:Zt.current,l=To(e,l));var p=t.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||f!==l)&&s_(e,o,i,l),fr=!1,f=e.memoizedState,o.state=f,du(e,i,o,r);var g=e.memoizedState;a!==u||f!==g||gn.current||fr?(typeof p=="function"&&(fh(e,t,p,i),g=e.memoizedState),(c=fr||r_(e,t,c,i,f,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return gh(n,e,t,i,s,r)}function gh(n,e,t,i,r,s){bx(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yg(e,t,!1),$i(n,e,s);i=e.stateNode,QT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ao(e,n.child,null,s),e.child=Ao(e,null,a,s)):rn(n,e,a,s),e.memoizedState=i.state,r&&Yg(e,t,!0),e.child}function Rx(n){var e=n.stateNode;e.pendingContext?qg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&qg(n,e.context,!1),am(n,e.containerInfo)}function f_(n,e,t,i,r){return wo(),tm(r),e.flags|=256,rn(n,e,t,i),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cx(n,e,t){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ft(St,r&1),n===null)return uh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xu(o,i,0,null),n=vs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=vh(t),e.memoizedState=_h,n):mm(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ew(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=vs(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?vh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=_h,i}return s=n.child,n=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function mm(n,e){return e=Xu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Kl(n,e,t,i){return i!==null&&tm(i),Ao(e,n.child,null,t),n=mm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ew(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Fd(Error(ie(422))),Kl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xu({mode:"visible",children:i.children},r,0,null),s=vs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ao(e,n.child,null,o),e.child.memoizedState=vh(o),e.memoizedState=_h,s);if(!(e.mode&1))return Kl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Fd(s,i,void 0),Kl(n,e,o,i)}if(a=(o&n.childLanes)!==0,mn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(n,r),si(i,n,r,-1))}return Sm(),i=Fd(Error(ie(421))),Kl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=hw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Tn=Cr(r.nextSibling),An=e,_t=!0,Yn=null,n!==null&&(Un[On++]=Ui,Un[On++]=Oi,Un[On++]=xs,Ui=n.id,Oi=n.overflow,xs=e),e=mm(e,i.children),e.flags|=4096,e)}function h_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),dh(n.return,e,t)}function Bd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Ix(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(n,e,i.children,t),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&h_(n,t,e);else if(n.tag===19)h_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ft(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&fu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Bd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&fu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Bd(e,!0,t,null,s);break;case"together":Bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function $i(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Es|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=Lr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Lr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function tw(n,e,t){switch(e.tag){case 3:Rx(e),wo();break;case 5:nx(e);break;case 1:_n(e.type)&&ou(e);break;case 4:am(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(cu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(St,St.current&1),e.flags|=128,null):t&e.child.childLanes?Cx(n,e,t):(ft(St,St.current&1),n=$i(n,e,t),n!==null?n.sibling:null);ft(St,St.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Ix(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Ax(n,e,t)}return $i(n,e,t)}var Px,yh,Nx,Lx;Px=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};yh=function(){};Nx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ms(mi.current);var s=null;switch(t){case"input":r=Hf(n,r),i=Hf(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Wf(n,r),i=Wf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ru)}Xf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ba.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ba.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lx=function(n,e,t,i){t!==i&&(e.flags|=4)};function oa(n,e){if(!_t)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function nw(n,e,t){var i=e.pendingProps;switch(em(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return _n(e.type)&&su(),Kt(e),null;case 3:return i=e.stateNode,bo(),mt(gn),mt(Zt),cm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Xl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(bh(Yn),Yn=null))),yh(n,e),Kt(e),null;case 5:lm(e);var r=ms(Ja.current);if(t=e.type,n!==null&&e.stateNode!=null)Nx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Kt(e),null}if(n=ms(mi.current),Xl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[qa]=s,n=(e.mode&1)!==0,t){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)pt(xa[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Eg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Tg(i,s),pt("invalid",i)}Xf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&jl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jl(i.textContent,a,n),r=["children",""+a]):Ba.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(t){case"input":kl(i),Mg(i,s,!0);break;case"textarea":kl(i),wg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ru)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ay(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[hi]=e,n[qa]=i,Px(n,e,!1,!1),e.stateNode=n;e:{switch(o=$f(t,i),t){case"dialog":pt("cancel",n),pt("close",n),r=i;break;case"iframe":case"object":case"embed":pt("load",n),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)pt(xa[r],n);r=i;break;case"source":pt("error",n),r=i;break;case"img":case"image":case"link":pt("error",n),pt("load",n),r=i;break;case"details":pt("toggle",n),r=i;break;case"input":Eg(n,i),r=Hf(n,i),pt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),pt("invalid",n);break;case"textarea":Tg(n,i),r=Wf(n,i),pt("invalid",n);break;default:r=i}Xf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ly(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&za(n,l):typeof l=="number"&&za(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",n):l!=null&&Bp(n,s,l,o))}switch(t){case"input":kl(n),Mg(n,i,!1);break;case"textarea":kl(n),wg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Br(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?lo(n,!!i.multiple,s,!1):i.defaultValue!=null&&lo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ru)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(n&&e.stateNode!=null)Lx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=ms(Ja.current),ms(mi.current),Xl(e)){if(i=e.stateNode,t=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==t)&&(n=An,n!==null))switch(n.tag){case 3:jl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return Kt(e),null;case 13:if(mt(St),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(_t&&Tn!==null&&e.mode&1&&!(e.flags&128))Jy(),wo(),e.flags|=98560,s=!1;else if(s=Xl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[hi]=e}else wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else Yn!==null&&(bh(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||St.current&1?Lt===0&&(Lt=3):Sm())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return bo(),yh(n,e),n===null&&$a(e.stateNode.containerInfo),Kt(e),null;case 10:return rm(e.type._context),Kt(e),null;case 17:return _n(e.type)&&su(),Kt(e),null;case 19:if(mt(St),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)oa(s,!1);else{if(Lt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=fu(n),o!==null){for(e.flags|=128,oa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ft(St,St.current&1|2),e.child}n=n.sibling}s.tail!==null&&Rt()>Co&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304)}else{if(!i)if(n=fu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Kt(e),null}else 2*Rt()-s.renderingStartTime>Co&&t!==1073741824&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,t=St.current,ft(St,i?t&1|2:t&1),e):(Kt(e),null);case 22:case 23:return xm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function iw(n,e){switch(em(e),e.tag){case 1:return _n(e.type)&&su(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return bo(),mt(gn),mt(Zt),cm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return lm(e),null;case 13:if(mt(St),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));wo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return mt(St),null;case 4:return bo(),null;case 10:return rm(e.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var ql=!1,Jt=!1,rw=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ro(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){bt(n,e,i)}else t.current=null}function xh(n,e,t){try{t()}catch(i){bt(n,e,i)}}var p_=!1;function sw(n,e){if(ih=tu,n=Fy(),Zp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=n,f=null;t:for(;;){for(var p;u!==t||r!==0&&u.nodeType!==3||(a=o+r),u!==s||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)f=u,u=p;for(;;){if(u===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(p=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(rh={focusedElem:n,selectionRange:t},tu=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Kn(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(x){bt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return g=p_,p_=!1,g}function Pa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&xh(e,t,s)}r=r.next}while(r!==i)}}function Wu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Sh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Dx(n){var e=n.alternate;e!==null&&(n.alternate=null,Dx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[hi],delete e[qa],delete e[ah],delete e[HT],delete e[VT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ux(n){return n.tag===5||n.tag===3||n.tag===4}function m_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ux(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Eh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ru));else if(i!==4&&(n=n.child,n!==null))for(Eh(n,e,t),n=n.sibling;n!==null;)Eh(n,e,t),n=n.sibling}function Mh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Mh(n,e,t),n=n.sibling;n!==null;)Mh(n,e,t),n=n.sibling}var Gt=null,qn=!1;function tr(n,e,t){for(t=t.child;t!==null;)Ox(n,e,t),t=t.sibling}function Ox(n,e,t){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Ou,t)}catch{}switch(t.tag){case 5:Jt||ro(t,e);case 6:var i=Gt,r=qn;Gt=null,tr(n,e,t),Gt=i,qn=r,Gt!==null&&(qn?(n=Gt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Gt.removeChild(t.stateNode));break;case 18:Gt!==null&&(qn?(n=Gt,t=t.stateNode,n.nodeType===8?Nd(n.parentNode,t):n.nodeType===1&&Nd(n,t),Wa(n)):Nd(Gt,t.stateNode));break;case 4:i=Gt,r=qn,Gt=t.stateNode.containerInfo,qn=!0,tr(n,e,t),Gt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xh(t,e,o),r=r.next}while(r!==i)}tr(n,e,t);break;case 1:if(!Jt&&(ro(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){bt(t,e,a)}tr(n,e,t);break;case 21:tr(n,e,t);break;case 22:t.mode&1?(Jt=(i=Jt)||t.memoizedState!==null,tr(n,e,t),Jt=i):tr(n,e,t);break;default:tr(n,e,t)}}function g_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new rw),e.forEach(function(i){var r=pw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Wn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,qn=!1;break e;case 3:Gt=a.stateNode.containerInfo,qn=!0;break e;case 4:Gt=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Gt===null)throw Error(ie(160));Ox(s,o,r),Gt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kx(e,n),e=e.sibling}function kx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wn(e,n),ui(n),i&4){try{Pa(3,n,n.return),Wu(3,n)}catch(v){bt(n,n.return,v)}try{Pa(5,n,n.return)}catch(v){bt(n,n.return,v)}}break;case 1:Wn(e,n),ui(n),i&512&&t!==null&&ro(t,t.return);break;case 5:if(Wn(e,n),ui(n),i&512&&t!==null&&ro(t,t.return),n.flags&32){var r=n.stateNode;try{za(r,"")}catch(v){bt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sy(r,s),$f(a,o);var c=$f(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?uy(r,u):d==="dangerouslySetInnerHTML"?ly(r,u):d==="children"?za(r,u):Bp(r,d,u,c)}switch(a){case"input":Vf(r,s);break;case"textarea":oy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[qa]=s}catch(v){bt(n,n.return,v)}}break;case 6:if(Wn(e,n),ui(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){bt(n,n.return,v)}}break;case 3:if(Wn(e,n),ui(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(v){bt(n,n.return,v)}break;case 4:Wn(e,n),ui(n);break;case 13:Wn(e,n),ui(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vm=Rt())),i&4&&g_(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Jt=(c=Jt)||d,Wn(e,n),Jt=c):Wn(e,n),ui(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(pe=n,d=n.child;d!==null;){for(u=pe=d;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Pa(4,f,f.return);break;case 1:ro(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){bt(i,t,v)}}break;case 5:ro(f,f.return);break;case 22:if(f.memoizedState!==null){v_(u);continue}}p!==null?(p.return=f,pe=p):v_(u)}d=d.sibling}e:for(d=null,u=n;;){if(u.tag===5){if(d===null){d=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cy("display",o))}catch(v){bt(n,n.return,v)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(v){bt(n,n.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===n)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Wn(e,n),ui(n),i&4&&g_(n);break;case 21:break;default:Wn(e,n),ui(n)}}function ui(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Ux(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(za(r,""),i.flags&=-33);var s=m_(n);Mh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=m_(n);Eh(n,a,o);break;default:throw Error(ie(161))}}catch(l){bt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ow(n,e,t){pe=n,Fx(n)}function Fx(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ql;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=ql;var c=Jt;if(ql=o,(Jt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?y_(r):l!==null?(l.return=o,pe=l):y_(r);for(;s!==null;)pe=s,Fx(s),s=s.sibling;pe=r,ql=a,Jt=c}__(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):__(n)}}function __(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Kn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&t_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}t_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Wa(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Jt||e.flags&512&&Sh(e)}catch(f){bt(e,e.return,f)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function v_(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function y_(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Wu(4,e)}catch(l){bt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Sh(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{Sh(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var aw=Math.ceil,mu=Zi.ReactCurrentDispatcher,gm=Zi.ReactCurrentOwner,Bn=Zi.ReactCurrentBatchConfig,qe=0,Bt=null,It=null,jt=0,Mn=0,so=Gr(0),Lt=0,tl=null,Es=0,ju=0,_m=0,Na=null,hn=null,vm=0,Co=1/0,Ni=null,gu=!1,Th=null,Pr=null,Yl=!1,Sr=null,_u=0,La=0,wh=null,Uc=-1,Oc=0;function sn(){return qe&6?Rt():Uc!==-1?Uc:Uc=Rt()}function Nr(n){return n.mode&1?qe&2&&jt!==0?jt&-jt:WT.transition!==null?(Oc===0&&(Oc=Ey()),Oc):(n=lt,n!==0||(n=window.event,n=n===void 0?16:Cy(n.type)),n):1}function si(n,e,t,i){if(50<La)throw La=0,wh=null,Error(ie(185));vl(n,t,i),(!(qe&2)||n!==Bt)&&(n===Bt&&(!(qe&2)&&(ju|=t),Lt===4&&pr(n,jt)),vn(n,i),t===1&&qe===0&&!(e.mode&1)&&(Co=Rt()+500,Hu&&Wr()))}function vn(n,e){var t=n.callbackNode;WM(n,e);var i=eu(n,n===Bt?jt:0);if(i===0)t!==null&&Rg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Rg(t),e===1)n.tag===0?GT(x_.bind(null,n)):Ky(x_.bind(null,n)),BT(function(){!(qe&6)&&Wr()}),t=null;else{switch(My(i)){case 1:t=Wp;break;case 4:t=xy;break;case 16:t=Qc;break;case 536870912:t=Sy;break;default:t=Qc}t=Xx(t,Bx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Bx(n,e){if(Uc=-1,Oc=0,qe&6)throw Error(ie(327));var t=n.callbackNode;if(po()&&n.callbackNode!==t)return null;var i=eu(n,n===Bt?jt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=vu(n,i);else{e=i;var r=qe;qe|=2;var s=Hx();(Bt!==n||jt!==e)&&(Ni=null,Co=Rt()+500,_s(n,e));do try{uw();break}catch(a){zx(n,a)}while(!0);im(),mu.current=s,qe=r,It!==null?e=0:(Bt=null,jt=0,e=Lt)}if(e!==0){if(e===2&&(r=Zf(n),r!==0&&(i=r,e=Ah(n,r))),e===1)throw t=tl,_s(n,0),pr(n,i),vn(n,Rt()),t;if(e===6)pr(n,i);else{if(r=n.current.alternate,!(i&30)&&!lw(r)&&(e=vu(n,i),e===2&&(s=Zf(n),s!==0&&(i=s,e=Ah(n,s))),e===1))throw t=tl,_s(n,0),pr(n,i),vn(n,Rt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:as(n,hn,Ni);break;case 3:if(pr(n,i),(i&130023424)===i&&(e=vm+500-Rt(),10<e)){if(eu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=oh(as.bind(null,n,hn,Ni),e);break}as(n,hn,Ni);break;case 4:if(pr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aw(i/1960))-i,10<i){n.timeoutHandle=oh(as.bind(null,n,hn,Ni),i);break}as(n,hn,Ni);break;case 5:as(n,hn,Ni);break;default:throw Error(ie(329))}}}return vn(n,Rt()),n.callbackNode===t?Bx.bind(null,n):null}function Ah(n,e){var t=Na;return n.current.memoizedState.isDehydrated&&(_s(n,e).flags|=256),n=vu(n,e),n!==2&&(e=hn,hn=t,e!==null&&bh(e)),n}function bh(n){hn===null?hn=n:hn.push.apply(hn,n)}function lw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(n,e){for(e&=~_m,e&=~ju,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ri(e),i=1<<t;n[t]=-1,e&=~i}}function x_(n){if(qe&6)throw Error(ie(327));po();var e=eu(n,0);if(!(e&1))return vn(n,Rt()),null;var t=vu(n,e);if(n.tag!==0&&t===2){var i=Zf(n);i!==0&&(e=i,t=Ah(n,i))}if(t===1)throw t=tl,_s(n,0),pr(n,e),vn(n,Rt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,as(n,hn,Ni),vn(n,Rt()),null}function ym(n,e){var t=qe;qe|=1;try{return n(e)}finally{qe=t,qe===0&&(Co=Rt()+500,Hu&&Wr())}}function Ms(n){Sr!==null&&Sr.tag===0&&!(qe&6)&&po();var e=qe;qe|=1;var t=Bn.transition,i=lt;try{if(Bn.transition=null,lt=1,n)return n()}finally{lt=i,Bn.transition=t,qe=e,!(qe&6)&&Wr()}}function xm(){Mn=so.current,mt(so)}function _s(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,FT(t)),It!==null)for(t=It.return;t!==null;){var i=t;switch(em(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&su();break;case 3:bo(),mt(gn),mt(Zt),cm();break;case 5:lm(i);break;case 4:bo();break;case 13:mt(St);break;case 19:mt(St);break;case 10:rm(i.type._context);break;case 22:case 23:xm()}t=t.return}if(Bt=n,It=n=Lr(n.current,null),jt=Mn=e,Lt=0,tl=null,_m=ju=Es=0,hn=Na=null,ps!==null){for(e=0;e<ps.length;e++)if(t=ps[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ps=null}return n}function zx(n,e){do{var t=It;try{if(im(),Nc.current=pu,hu){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hu=!1}if(Ss=0,kt=Nt=Et=null,Ia=!1,Za=0,gm.current=null,t===null||t.return===null){Lt=1,tl=e,It=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=a_(o);if(p!==null){p.flags&=-257,l_(p,o,a,s,e),p.mode&1&&o_(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){o_(s,c,e),Sm();break e}l=Error(ie(426))}}else if(_t&&a.mode&1){var m=a_(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),l_(m,o,a,s,e),tm(Ro(l,a));break e}}s=l=Ro(l,a),Lt!==4&&(Lt=2),Na===null?Na=[s]:Na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Mx(s,l,e);e_(s,h);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Pr===null||!Pr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Tx(s,a,e);e_(s,x);break e}}s=s.return}while(s!==null)}Gx(t)}catch(b){e=b,It===t&&t!==null&&(It=t=t.return);continue}break}while(!0)}function Hx(){var n=mu.current;return mu.current=pu,n===null?pu:n}function Sm(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Bt===null||!(Es&268435455)&&!(ju&268435455)||pr(Bt,jt)}function vu(n,e){var t=qe;qe|=2;var i=Hx();(Bt!==n||jt!==e)&&(Ni=null,_s(n,e));do try{cw();break}catch(r){zx(n,r)}while(!0);if(im(),qe=t,mu.current=i,It!==null)throw Error(ie(261));return Bt=null,jt=0,Lt}function cw(){for(;It!==null;)Vx(It)}function uw(){for(;It!==null&&!UM();)Vx(It)}function Vx(n){var e=jx(n.alternate,n,Mn);n.memoizedProps=n.pendingProps,e===null?Gx(n):It=e,gm.current=null}function Gx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=iw(t,e),t!==null){t.flags&=32767,It=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Lt=6,It=null;return}}else if(t=nw(t,e,Mn),t!==null){It=t;return}if(e=e.sibling,e!==null){It=e;return}It=e=n}while(e!==null);Lt===0&&(Lt=5)}function as(n,e,t){var i=lt,r=Bn.transition;try{Bn.transition=null,lt=1,dw(n,e,t,i)}finally{Bn.transition=r,lt=i}return null}function dw(n,e,t,i){do po();while(Sr!==null);if(qe&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(jM(n,s),n===Bt&&(It=Bt=null,jt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Yl||(Yl=!0,Xx(Qc,function(){return po(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var o=lt;lt=1;var a=qe;qe|=4,gm.current=null,sw(n,t),kx(t,n),PT(rh),tu=!!ih,rh=ih=null,n.current=t,ow(t),OM(),qe=a,lt=o,Bn.transition=s}else n.current=t;if(Yl&&(Yl=!1,Sr=n,_u=r),s=n.pendingLanes,s===0&&(Pr=null),BM(t.stateNode),vn(n,Rt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(gu)throw gu=!1,n=Th,Th=null,n;return _u&1&&n.tag!==0&&po(),s=n.pendingLanes,s&1?n===wh?La++:(La=0,wh=n):La=0,Wr(),null}function po(){if(Sr!==null){var n=My(_u),e=Bn.transition,t=lt;try{if(Bn.transition=null,lt=16>n?16:n,Sr===null)var i=!1;else{if(n=Sr,Sr=null,_u=0,qe&6)throw Error(ie(331));var r=qe;for(qe|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:Pa(8,d,s)}var u=d.child;if(u!==null)u.return=d,pe=u;else for(;pe!==null;){d=pe;var f=d.sibling,p=d.return;if(Dx(d),d===c){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var _=n.current;for(pe=_;pe!==null;){o=pe;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,pe=y;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wu(9,a)}}catch(b){bt(a,a.return,b)}if(a===o){pe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,pe=x;break e}pe=a.return}}if(qe=r,Wr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Ou,n)}catch{}i=!0}return i}finally{lt=t,Bn.transition=e}}return!1}function S_(n,e,t){e=Ro(t,e),e=Mx(n,e,1),n=Ir(n,e,1),e=sn(),n!==null&&(vl(n,1,e),vn(n,e))}function bt(n,e,t){if(n.tag===3)S_(n,n,t);else for(;e!==null;){if(e.tag===3){S_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){n=Ro(t,n),n=Tx(e,n,1),e=Ir(e,n,1),n=sn(),e!==null&&(vl(e,1,n),vn(e,n));break}}e=e.return}}function fw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=sn(),n.pingedLanes|=n.suspendedLanes&t,Bt===n&&(jt&t)===t&&(Lt===4||Lt===3&&(jt&130023424)===jt&&500>Rt()-vm?_s(n,0):_m|=t),vn(n,e)}function Wx(n,e){e===0&&(n.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var t=sn();n=Xi(n,e),n!==null&&(vl(n,e,t),vn(n,t))}function hw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Wx(n,t)}function pw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Wx(n,t)}var jx;jx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,tw(n,e,t);mn=!!(n.flags&131072)}else mn=!1,_t&&e.flags&1048576&&qy(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Dc(n,e),n=e.pendingProps;var r=To(e,Zt.current);ho(e,t),r=dm(null,e,i,n,r,t);var s=fm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,ou(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,om(e),r.updater=Gu,e.stateNode=r,r._reactInternals=e,hh(e,i,n,t),e=gh(null,e,i,!0,s,t)):(e.tag=0,_t&&s&&Qp(e),rn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Dc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gw(i),n=Kn(i,n),r){case 0:e=mh(null,e,i,n,t);break e;case 1:e=d_(null,e,i,n,t);break e;case 11:e=c_(null,e,i,n,t);break e;case 14:e=u_(null,e,i,Kn(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),mh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),d_(n,e,i,r,t);case 3:e:{if(Rx(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,tx(n,e),du(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ro(Error(ie(423)),e),e=f_(n,e,i,t,r);break e}else if(i!==r){r=Ro(Error(ie(424)),e),e=f_(n,e,i,t,r);break e}else for(Tn=Cr(e.stateNode.containerInfo.firstChild),An=e,_t=!0,Yn=null,t=Qy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(wo(),i===r){e=$i(n,e,t);break e}rn(n,e,i,t)}e=e.child}return e;case 5:return nx(e),n===null&&uh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,sh(i,r)?o=null:s!==null&&sh(i,s)&&(e.flags|=32),bx(n,e),rn(n,e,o,t),e.child;case 6:return n===null&&uh(e),null;case 13:return Cx(n,e,t);case 4:return am(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ao(e,null,i,t):rn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),c_(n,e,i,r,t);case 7:return rn(n,e,e.pendingProps,t),e.child;case 8:return rn(n,e,e.pendingProps.children,t),e.child;case 12:return rn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(cu,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!gn.current){e=$i(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),dh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),dh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,t),r=zn(r),i=i(r),e.flags|=1,rn(n,e,i,t),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),u_(n,e,i,r,t);case 15:return wx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Dc(n,e),e.tag=1,_n(i)?(n=!0,ou(e)):n=!1,ho(e,t),Ex(e,i,r),hh(e,i,r,t),gh(null,e,i,!0,n,t);case 19:return Ix(n,e,t);case 22:return Ax(n,e,t)}throw Error(ie(156,e.tag))};function Xx(n,e){return yy(n,e)}function mw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,i){return new mw(n,e,t,i)}function Em(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gw(n){if(typeof n=="function")return Em(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Hp)return 11;if(n===Vp)return 14}return 2}function Lr(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function kc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Em(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case qs:return vs(t.children,r,s,e);case zp:o=8,r|=8;break;case kf:return n=kn(12,t,e,r|2),n.elementType=kf,n.lanes=s,n;case Ff:return n=kn(13,t,e,r),n.elementType=Ff,n.lanes=s,n;case Bf:return n=kn(19,t,e,r),n.elementType=Bf,n.lanes=s,n;case ny:return Xu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ey:o=10;break e;case ty:o=9;break e;case Hp:o=11;break e;case Vp:o=14;break e;case dr:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=kn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function vs(n,e,t,i){return n=kn(7,n,i,e),n.lanes=t,n}function Xu(n,e,t,i){return n=kn(22,n,i,e),n.elementType=ny,n.lanes=t,n.stateNode={isHidden:!1},n}function zd(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function Hd(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function _w(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sd(0),this.expirationTimes=Sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Mm(n,e,t,i,r,s,o,a,l){return n=new _w(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},om(s),n}function vw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function $x(n){if(!n)return zr;n=n._reactInternals;e:{if(Cs(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(_n(t))return $y(n,t,e)}return e}function Kx(n,e,t,i,r,s,o,a,l){return n=Mm(t,i,!0,n,r,s,o,a,l),n.context=$x(null),t=n.current,i=sn(),r=Nr(t),s=Hi(i,r),s.callback=e??null,Ir(t,s,r),n.current.lanes=r,vl(n,r,i),vn(n,i),n}function $u(n,e,t,i){var r=e.current,s=sn(),o=Nr(r);return t=$x(t),e.context===null?e.context=t:e.pendingContext=t,e=Hi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ir(r,e,o),n!==null&&(si(n,r,o,s),Pc(n,r,o)),o}function yu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function E_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Tm(n,e){E_(n,e),(n=n.alternate)&&E_(n,e)}function yw(){return null}var qx=typeof reportError=="function"?reportError:function(n){console.error(n)};function wm(n){this._internalRoot=n}Ku.prototype.render=wm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));$u(n,e,null,null)};Ku.prototype.unmount=wm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ms(function(){$u(null,n,null,null)}),e[ji]=null}};function Ku(n){this._internalRoot=n}Ku.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ay();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hr.length&&e!==0&&e<hr[t].priority;t++);hr.splice(t,0,n),t===0&&Ry(n)}};function Am(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function M_(){}function xw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=yu(o);s.call(c)}}var o=Kx(e,i,n,0,null,!1,!1,"",M_);return n._reactRootContainer=o,n[ji]=o.current,$a(n.nodeType===8?n.parentNode:n),Ms(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=yu(l);a.call(c)}}var l=Mm(n,0,!1,null,null,!1,!1,"",M_);return n._reactRootContainer=l,n[ji]=l.current,$a(n.nodeType===8?n.parentNode:n),Ms(function(){$u(e,l,t,i)}),l}function Yu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yu(o);a.call(l)}}$u(e,o,n,r)}else o=xw(t,e,n,r,i);return yu(o)}Ty=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ya(e.pendingLanes);t!==0&&(jp(e,t|1),vn(e,Rt()),!(qe&6)&&(Co=Rt()+500,Wr()))}break;case 13:Ms(function(){var i=Xi(n,1);if(i!==null){var r=sn();si(i,n,1,r)}}),Tm(n,1)}};Xp=function(n){if(n.tag===13){var e=Xi(n,134217728);if(e!==null){var t=sn();si(e,n,134217728,t)}Tm(n,134217728)}};wy=function(n){if(n.tag===13){var e=Nr(n),t=Xi(n,e);if(t!==null){var i=sn();si(t,n,e,i)}Tm(n,e)}};Ay=function(){return lt};by=function(n,e){var t=lt;try{return lt=n,e()}finally{lt=t}};qf=function(n,e,t){switch(e){case"input":if(Vf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=zu(i);if(!r)throw Error(ie(90));ry(i),Vf(i,r)}}}break;case"textarea":oy(n,t);break;case"select":e=t.value,e!=null&&lo(n,!!t.multiple,e,!1)}};hy=ym;py=Ms;var Sw={usingClientEntryPoint:!1,Events:[xl,Qs,zu,dy,fy,ym]},aa={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ew={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_y(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||yw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{Ou=Jl.inject(Ew),pi=Jl}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw;Rn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(e))throw Error(ie(200));return vw(n,e,null,t)};Rn.createRoot=function(n,e){if(!Am(n))throw Error(ie(299));var t=!1,i="",r=qx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Mm(n,1,!1,null,null,t,!1,i,r),n[ji]=e.current,$a(n.nodeType===8?n.parentNode:n),new wm(e)};Rn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=_y(e),n=n===null?null:n.stateNode,n};Rn.flushSync=function(n){return Ms(n)};Rn.hydrate=function(n,e,t){if(!qu(e))throw Error(ie(200));return Yu(null,n,e,!0,t)};Rn.hydrateRoot=function(n,e,t){if(!Am(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=qx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Kx(e,null,n,1,t??null,r,!1,s,o),n[ji]=e.current,$a(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ku(e)};Rn.render=function(n,e,t){if(!qu(e))throw Error(ie(200));return Yu(null,n,e,!1,t)};Rn.unmountComponentAtNode=function(n){if(!qu(n))throw Error(ie(40));return n._reactRootContainer?(Ms(function(){Yu(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1};Rn.unstable_batchedUpdates=ym;Rn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!qu(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return Yu(n,e,t,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function Yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yx)}catch(n){console.error(n)}}Yx(),Y0.exports=Rn;var Mw=Y0.exports,T_=Mw;Uf.createRoot=T_.createRoot,Uf.hydrateRoot=T_.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},nl.apply(this,arguments)}var Er;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Er||(Er={}));const w_="popstate";function Tw(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Rh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:xu(r)}return Aw(e,t,null,n)}function Mt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function bm(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ww(){return Math.random().toString(36).substr(2,8)}function A_(n,e){return{usr:n.state,key:n.key,idx:e}}function Rh(n,e,t,i){return t===void 0&&(t=null),nl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?jo(e):e,{state:t,key:e&&e.key||i||ww()})}function xu(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function jo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function Aw(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Er.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(nl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function u(){a=Er.Pop;let m=d(),h=m==null?null:m-c;c=m,l&&l({action:a,location:v.location,delta:h})}function f(m,h){a=Er.Push;let _=Rh(v.location,m,h);c=d()+1;let y=A_(_,c),x=v.createHref(_);try{o.pushState(y,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(x)}s&&l&&l({action:a,location:v.location,delta:1})}function p(m,h){a=Er.Replace;let _=Rh(v.location,m,h);c=d();let y=A_(_,c),x=v.createHref(_);o.replaceState(y,"",x),s&&l&&l({action:a,location:v.location,delta:0})}function g(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:xu(m);return _=_.replace(/ $/,"%20"),Mt(h,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,h)}let v={get action(){return a},get location(){return n(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(w_,u),l=m,()=>{r.removeEventListener(w_,u),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(m){return o.go(m)}};return v}var b_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(b_||(b_={}));function bw(n,e,t){return t===void 0&&(t="/"),Rw(n,e,t)}function Rw(n,e,t,i){let r=typeof e=="string"?jo(e):e,s=Io(r.pathname||"/",t);if(s==null)return null;let o=Jx(n);Cw(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=zw(s);a=Fw(o[l],c)}return a}function Jx(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Dr([i,l.relativePath]),d=t.concat(l);s.children&&s.children.length>0&&(Mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Jx(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ow(c,s.index),routesMeta:d})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Zx(s.path))r(s,o,l)}),e}function Zx(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Zx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function Cw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:kw(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const Iw=/^:[\w-]+$/,Pw=3,Nw=2,Lw=1,Dw=10,Uw=-2,R_=n=>n==="*";function Ow(n,e){let t=n.split("/"),i=t.length;return t.some(R_)&&(i+=Uw),e&&(i+=Nw),t.filter(r=>!R_(r)).reduce((r,s)=>r+(Iw.test(s)?Pw:s===""?Lw:Dw),i)}function kw(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function Fw(n,e,t){let{routesMeta:i}=n,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",u=Ch({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!u)return null;Object.assign(r,u.params),o.push({params:r,pathname:Dr([s,u.pathname]),pathnameBase:jw(Dr([s,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(s=Dr([s,u.pathnameBase]))}return o}function Ch(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Bw(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,u)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let v=a[u]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=a[u];return p&&!g?c[f]=void 0:c[f]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:n}}function Bw(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),bm(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function zw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bm(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Io(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const Hw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vw=n=>Hw.test(n);function Gw(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?jo(n):n,s;if(t)if(Vw(t))s=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),bm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?s=C_(t.substring(1),"/"):s=C_(t,e)}else s=e;return{pathname:s,search:Xw(i),hash:$w(r)}}function C_(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Vd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ww(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Rm(n,e){let t=Ww(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Cm(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=jo(n):(r=nl({},n),Mt(!r.pathname||!r.pathname.includes("?"),Vd("?","pathname","search",r)),Mt(!r.pathname||!r.pathname.includes("#"),Vd("#","pathname","hash",r)),Mt(!r.search||!r.search.includes("#"),Vd("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=t;else{let u=e.length-1;if(!i&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),u-=1;r.pathname=f.join("/")}a=u>=0?e[u]:"/"}let l=Gw(r,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Dr=n=>n.join("/").replace(/\/\/+/g,"/"),jw=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Xw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,$w=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Kw(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Qx=["post","put","patch","delete"];new Set(Qx);const qw=["get",...Qx];new Set(qw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},il.apply(this,arguments)}const Ju=G.createContext(null),eS=G.createContext(null),Qi=G.createContext(null),Zu=G.createContext(null),jr=G.createContext({outlet:null,matches:[],isDataRoute:!1}),tS=G.createContext(null);function Yw(n,e){let{relative:t}=e===void 0?{}:e;Xo()||Mt(!1);let{basename:i,navigator:r}=G.useContext(Qi),{hash:s,pathname:o,search:a}=ed(n,{relative:t}),l=o;return i!=="/"&&(l=o==="/"?i:Dr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Xo(){return G.useContext(Zu)!=null}function Xr(){return Xo()||Mt(!1),G.useContext(Zu).location}function nS(n){G.useContext(Qi).static||G.useLayoutEffect(n)}function Qu(){let{isDataRoute:n}=G.useContext(jr);return n?cA():Jw()}function Jw(){Xo()||Mt(!1);let n=G.useContext(Ju),{basename:e,future:t,navigator:i}=G.useContext(Qi),{matches:r}=G.useContext(jr),{pathname:s}=Xr(),o=JSON.stringify(Rm(r,t.v7_relativeSplatPath)),a=G.useRef(!1);return nS(()=>{a.current=!0}),G.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let u=Cm(c,JSON.parse(o),s,d.relative==="path");n==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Dr([e,u.pathname])),(d.replace?i.replace:i.push)(u,d.state,d)},[e,i,o,s,n])}function ed(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=G.useContext(Qi),{matches:r}=G.useContext(jr),{pathname:s}=Xr(),o=JSON.stringify(Rm(r,i.v7_relativeSplatPath));return G.useMemo(()=>Cm(n,JSON.parse(o),s,t==="path"),[n,o,s,t])}function Zw(n,e){return Qw(n,e)}function Qw(n,e,t,i){Xo()||Mt(!1);let{navigator:r}=G.useContext(Qi),{matches:s}=G.useContext(jr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Xr(),d;if(e){var u;let m=typeof e=="string"?jo(e):e;l==="/"||(u=m.pathname)!=null&&u.startsWith(l)||Mt(!1),d=m}else d=c;let f=d.pathname||"/",p=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=bw(n,{pathname:p}),v=rA(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Dr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Dr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,t,i);return e&&v?G.createElement(Zu.Provider,{value:{location:il({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Er.Pop}},v):v}function eA(){let n=lA(),e=Kw(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),t?G.createElement("pre",{style:r},t):null,null)}const tA=G.createElement(eA,null);class nA extends G.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?G.createElement(jr.Provider,{value:this.props.routeContext},G.createElement(tS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iA(n){let{routeContext:e,match:t,children:i}=n,r=G.useContext(Ju);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),G.createElement(jr.Provider,{value:e},i)}function rA(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=(r=t)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);d>=0||Mt(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(t&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:f,errors:p}=t,g=u.route.loader&&f[u.route.id]===void 0&&(!p||p[u.route.id]===void 0);if(u.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,f)=>{let p,g=!1,v=null,m=null;t&&(p=a&&u.route.id?a[u.route.id]:void 0,v=u.route.errorElement||tA,l&&(c<0&&f===0?(uA("route-fallback"),g=!0,m=null):c===f&&(g=!0,m=u.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,f+1)),_=()=>{let y;return p?y=v:g?y=m:u.route.Component?y=G.createElement(u.route.Component,null):u.route.element?y=u.route.element:y=d,G.createElement(iA,{match:u,routeContext:{outlet:d,matches:h,isDataRoute:t!=null},children:y})};return t&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?G.createElement(nA,{location:t.location,revalidation:t.revalidation,component:v,error:p,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var iS=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(iS||{}),rS=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(rS||{});function sA(n){let e=G.useContext(Ju);return e||Mt(!1),e}function oA(n){let e=G.useContext(eS);return e||Mt(!1),e}function aA(n){let e=G.useContext(jr);return e||Mt(!1),e}function sS(n){let e=aA(),t=e.matches[e.matches.length-1];return t.route.id||Mt(!1),t.route.id}function lA(){var n;let e=G.useContext(tS),t=oA(),i=sS();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function cA(){let{router:n}=sA(iS.UseNavigateStable),e=sS(rS.UseNavigateStable),t=G.useRef(!1);return nS(()=>{t.current=!0}),G.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,il({fromRouteId:e},s)))},[n,e])}const I_={};function uA(n,e,t){I_[n]||(I_[n]=!0)}function dA(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function oS(n){let{to:e,replace:t,state:i,relative:r}=n;Xo()||Mt(!1);let{future:s,static:o}=G.useContext(Qi),{matches:a}=G.useContext(jr),{pathname:l}=Xr(),c=Qu(),d=Cm(e,Rm(a,s.v7_relativeSplatPath),l,r==="path"),u=JSON.stringify(d);return G.useEffect(()=>c(JSON.parse(u),{replace:t,state:i,relative:r}),[c,u,r,t,i]),null}function ur(n){Mt(!1)}function fA(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Er.Pop,navigator:s,static:o=!1,future:a}=n;Xo()&&Mt(!1);let l=e.replace(/^\/*/,"/"),c=G.useMemo(()=>({basename:l,navigator:s,static:o,future:il({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=jo(i));let{pathname:d="/",search:u="",hash:f="",state:p=null,key:g="default"}=i,v=G.useMemo(()=>{let m=Io(d,l);return m==null?null:{location:{pathname:m,search:u,hash:f,state:p,key:g},navigationType:r}},[l,d,u,f,p,g,r]);return v==null?null:G.createElement(Qi.Provider,{value:c},G.createElement(Zu.Provider,{children:t,value:v}))}function hA(n){let{children:e,location:t}=n;return Zw(Ih(e),t)}new Promise(()=>{});function Ih(n,e){e===void 0&&(e=[]);let t=[];return G.Children.forEach(n,(i,r)=>{if(!G.isValidElement(i))return;let s=[...e,r];if(i.type===G.Fragment){t.push.apply(t,Ih(i.props.children,s));return}i.type!==ur&&Mt(!1),!i.props.index||!i.props.children||Mt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ih(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Su(){return Su=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Su.apply(this,arguments)}function aS(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function pA(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function mA(n,e){return n.button===0&&(!e||e==="_self")&&!pA(n)}const gA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_A=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],vA="6";try{window.__reactRouterVersion=vA}catch{}const yA=G.createContext({isTransitioning:!1}),xA="startTransition",P_=fM[xA];function SA(n){let{basename:e,children:t,future:i,window:r}=n,s=G.useRef();s.current==null&&(s.current=Tw({window:r,v5Compat:!0}));let o=s.current,[a,l]=G.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=G.useCallback(u=>{c&&P_?P_(()=>l(u)):l(u)},[l,c]);return G.useLayoutEffect(()=>o.listen(d),[o,d]),G.useEffect(()=>dA(i),[i]),G.createElement(fA,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,future:i})}const EA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",MA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,td=G.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:u}=e,f=aS(e,gA),{basename:p}=G.useContext(Qi),g,v=!1;if(typeof c=="string"&&MA.test(c)&&(g=c,EA))try{let y=new URL(window.location.href),x=c.startsWith("//")?new URL(y.protocol+c):new URL(c),b=Io(x.pathname,p);x.origin===y.origin&&b!=null?c=b+x.search+x.hash:v=!0}catch{}let m=Yw(c,{relative:r}),h=wA(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:r,viewTransition:u});function _(y){i&&i(y),y.defaultPrevented||h(y)}return G.createElement("a",Su({},f,{href:g||m,onClick:v||s?i:_,ref:t,target:l}))}),N_=G.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:d}=e,u=aS(e,_A),f=ed(l,{relative:u.relative}),p=Xr(),g=G.useContext(eS),{navigator:v,basename:m}=G.useContext(Qi),h=g!=null&&AA(f)&&c===!0,_=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,y=p.pathname,x=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(y=y.toLowerCase(),x=x?x.toLowerCase():null,_=_.toLowerCase()),x&&m&&(x=Io(x,m)||x);const b=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let A=y===_||!o&&y.startsWith(_)&&y.charAt(b)==="/",w=x!=null&&(x===_||!o&&x.startsWith(_)&&x.charAt(_.length)==="/"),R={isActive:A,isPending:w,isTransitioning:h},M=A?i:void 0,S;typeof s=="function"?S=s(R):S=[s,A?"active":null,w?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(R):a;return G.createElement(td,Su({},u,{"aria-current":M,className:S,ref:t,style:I,to:l,viewTransition:c}),typeof d=="function"?d(R):d)});var Ph;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ph||(Ph={}));var L_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(L_||(L_={}));function TA(n){let e=G.useContext(Ju);return e||Mt(!1),e}function wA(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Qu(),c=Xr(),d=ed(n,{relative:o});return G.useCallback(u=>{if(mA(u,t)){u.preventDefault();let f=i!==void 0?i:xu(c)===xu(d);l(n,{replace:f,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,i,r,t,n,s,o,a])}function AA(n,e){e===void 0&&(e={});let t=G.useContext(yA);t==null&&Mt(!1);let{basename:i}=TA(Ph.useViewTransitionState),r=ed(n,{relative:e.relative});if(!t.isTransitioning)return!1;let s=Io(t.currentLocation.pathname,i)||t.currentLocation.pathname,o=Io(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Ch(r.pathname,o)!=null||Ch(r.pathname,s)!=null}const bA=()=>{};var D_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},RA=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),i.push(t[d],t[u],t[f],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(lS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):RA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||c==null||u==null)throw new CA;const f=s<<2|a>>4;if(i.push(f),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class CA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IA=function(n){const e=lS(n);return cS.encodeByteArray(e,!0)},uS=function(n){return IA(n).replace(/\./g,"")},dS=function(n){try{return cS.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=()=>PA().__FIREBASE_DEFAULTS__,LA=()=>{if(typeof process>"u"||typeof D_>"u")return;const n=D_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},DA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&dS(n[1]);return e&&JSON.parse(e)},Im=()=>{try{return bA()||NA()||LA()||DA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},UA=n=>{var e,t;return(t=(e=Im())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fS=()=>{var n;return(n=Im())===null||n===void 0?void 0:n.config},hS=n=>{var e;return(e=Im())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kA(n){return(await fetch(n,{credentials:"include"})).ok}const Da={};function FA(){const n={prod:[],emulator:[]};for(const e of Object.keys(Da))Da[e]?n.emulator.push(e):n.prod.push(e);return n}function BA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let U_=!1;function zA(n,e){if(typeof window>"u"||typeof document>"u"||!nd(window.location.host)||Da[n]===e||Da[n]||U_)return;Da[n]=e;function t(f){return`__firebase__banner__${f}`}const i="__firebase__banner",s=FA().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,p){f.setAttribute("width","24"),f.setAttribute("id",p),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{U_=!0,o()},f}function d(f,p){f.setAttribute("id",p),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function u(){const f=BA(i),p=t("text"),g=document.getElementById(p)||document.createElement("span"),v=t("learnmore"),m=document.getElementById(v)||document.createElement("a"),h=t("preprendIcon"),_=document.getElementById(h)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const y=f.element;a(y),d(m,v);const x=c();l(_,h),y.append(_,g,m,x),document.body.appendChild(y)}s?(g.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function VA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function WA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jA(){const n=ln();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function XA(){try{return typeof indexedDB=="object"}catch{return!1}}function $A(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="FirebaseError";class $r extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=KA,Object.setPrototypeOf(this,$r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,El.prototype.create)}}class El{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?qA(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $r(r,a,i)}}function qA(n,e){return n.replace(YA,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const YA=/\{\$([^}]+)}/g;function JA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Po(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(O_(s)&&O_(o)){if(!Po(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function O_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Sa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Ea(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ZA(n,e){const t=new QA(n,e);return t.subscribe.bind(t)}class QA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");e1(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Gd),r.error===void 0&&(r.error=Gd),r.complete===void 0&&(r.complete=Gd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n){return n&&n._delegate?n._delegate:n}class No{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new OA;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i1(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:n1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n1(n){return n===ls?void 0:n}function i1(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new t1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ut||(ut={}));const s1={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},o1=ut.INFO,a1={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},l1=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=a1[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pS{constructor(e){this.name=e,this._logLevel=o1,this._logHandler=l1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ut))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...e),this._logHandler(this,ut.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...e),this._logHandler(this,ut.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...e),this._logHandler(this,ut.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...e),this._logHandler(this,ut.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...e),this._logHandler(this,ut.ERROR,...e)}}const c1=(n,e)=>e.some(t=>n instanceof t);let k_,F_;function u1(){return k_||(k_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d1(){return F_||(F_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mS=new WeakMap,Nh=new WeakMap,gS=new WeakMap,Wd=new WeakMap,Pm=new WeakMap;function f1(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ur(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&mS.set(t,n)}).catch(()=>{}),Pm.set(e,n),e}function h1(n){if(Nh.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Nh.set(n,e)}let Lh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Nh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gS.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ur(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function p1(n){Lh=n(Lh)}function m1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(jd(this),e,...t);return gS.set(i,e.sort?e.sort():[e]),Ur(i)}:d1().includes(n)?function(...e){return n.apply(jd(this),e),Ur(mS.get(this))}:function(...e){return Ur(n.apply(jd(this),e))}}function g1(n){return typeof n=="function"?m1(n):(n instanceof IDBTransaction&&h1(n),c1(n,u1())?new Proxy(n,Lh):n)}function Ur(n){if(n instanceof IDBRequest)return f1(n);if(Wd.has(n))return Wd.get(n);const e=g1(n);return e!==n&&(Wd.set(n,e),Pm.set(e,n)),e}const jd=n=>Pm.get(n);function _1(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=Ur(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ur(o.result),l.oldVersion,l.newVersion,Ur(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const v1=["get","getKey","getAll","getAllKeys","count"],y1=["put","add","delete","clear"],Xd=new Map;function B_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=y1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||v1.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return Xd.set(e,s),s}p1(n=>({...n,get:(e,t,i)=>B_(e,t)||n.get(e,t,i),has:(e,t)=>!!B_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(S1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function S1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dh="@firebase/app",z_="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new pS("@firebase/app"),E1="@firebase/app-compat",M1="@firebase/analytics-compat",T1="@firebase/analytics",w1="@firebase/app-check-compat",A1="@firebase/app-check",b1="@firebase/auth",R1="@firebase/auth-compat",C1="@firebase/database",I1="@firebase/data-connect",P1="@firebase/database-compat",N1="@firebase/functions",L1="@firebase/functions-compat",D1="@firebase/installations",U1="@firebase/installations-compat",O1="@firebase/messaging",k1="@firebase/messaging-compat",F1="@firebase/performance",B1="@firebase/performance-compat",z1="@firebase/remote-config",H1="@firebase/remote-config-compat",V1="@firebase/storage",G1="@firebase/storage-compat",W1="@firebase/firestore",j1="@firebase/ai",X1="@firebase/firestore-compat",$1="firebase",K1="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="[DEFAULT]",q1={[Dh]:"fire-core",[E1]:"fire-core-compat",[T1]:"fire-analytics",[M1]:"fire-analytics-compat",[A1]:"fire-app-check",[w1]:"fire-app-check-compat",[b1]:"fire-auth",[R1]:"fire-auth-compat",[C1]:"fire-rtdb",[I1]:"fire-data-connect",[P1]:"fire-rtdb-compat",[N1]:"fire-fn",[L1]:"fire-fn-compat",[D1]:"fire-iid",[U1]:"fire-iid-compat",[O1]:"fire-fcm",[k1]:"fire-fcm-compat",[F1]:"fire-perf",[B1]:"fire-perf-compat",[z1]:"fire-rc",[H1]:"fire-rc-compat",[V1]:"fire-gcs",[G1]:"fire-gcs-compat",[W1]:"fire-fst",[X1]:"fire-fst-compat",[j1]:"fire-vertex","fire-js":"fire-js",[$1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Map,Y1=new Map,Oh=new Map;function H_(n,e){try{n.container.addComponent(e)}catch(t){Ki.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sl(n){const e=n.name;if(Oh.has(e))return Ki.debug(`There were multiple attempts to register component ${e}.`),!1;Oh.set(e,n);for(const t of rl.values())H_(t,n);for(const t of Y1.values())H_(t,n);return!0}function _S(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Jn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new El("app","Firebase",J1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new No("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=K1;function vS(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Uh,automaticDataCollectionEnabled:!0},e),r=i.name;if(typeof r!="string"||!r)throw Or.create("bad-app-name",{appName:String(r)});if(t||(t=fS()),!t)throw Or.create("no-options");const s=rl.get(r);if(s){if(Po(t,s.options)&&Po(i,s.config))return s;throw Or.create("duplicate-app",{appName:r})}const o=new r1(r);for(const l of Oh.values())o.addComponent(l);const a=new Z1(t,i,o);return rl.set(r,a),a}function Q1(n=Uh){const e=rl.get(n);if(!e&&n===Uh&&fS())return vS();if(!e)throw Or.create("no-app",{appName:n});return e}function V_(){return Array.from(rl.values())}function mo(n,e,t){var i;let r=(i=q1[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ki.warn(a.join(" "));return}sl(new No(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="firebase-heartbeat-database",tb=1,ol="firebase-heartbeat-store";let $d=null;function yS(){return $d||($d=_1(eb,tb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ol)}catch(t){console.warn(t)}}}}).catch(n=>{throw Or.create("idb-open",{originalErrorMessage:n.message})})),$d}async function nb(n){try{const t=(await yS()).transaction(ol),i=await t.objectStore(ol).get(xS(n));return await t.done,i}catch(e){if(e instanceof $r)Ki.warn(e.message);else{const t=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ki.warn(t.message)}}}async function G_(n,e){try{const i=(await yS()).transaction(ol,"readwrite");await i.objectStore(ol).put(e,xS(n)),await i.done}catch(t){if(t instanceof $r)Ki.warn(t.message);else{const i=Or.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ki.warn(i.message)}}}function xS(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=1024,rb=30;class sb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ab(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=W_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>rb){const o=lb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ki.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=W_(),{heartbeatsToSend:i,unsentEntries:r}=ob(this._heartbeatsCache.heartbeats),s=uS(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ki.warn(t),""}}}function W_(){return new Date().toISOString().substring(0,10)}function ob(n,e=ib){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),j_(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),j_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ab{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XA()?$A().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return G_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return G_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function j_(n){return uS(JSON.stringify({version:2,heartbeats:n})).length}function lb(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(n){sl(new No("platform-logger",e=>new x1(e),"PRIVATE")),sl(new No("heartbeat",e=>new sb(e),"PRIVATE")),mo(Dh,z_,n),mo(Dh,z_,"esm2017"),mo("fire-js","")}cb("");function Nm(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function SS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ub=SS,ES=new El("auth","Firebase",SS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new pS("@firebase/auth");function db(n,...e){Eu.logLevel<=ut.WARN&&Eu.warn(`Auth (${Tl}): ${n}`,...e)}function Fc(n,...e){Eu.logLevel<=ut.ERROR&&Eu.error(`Auth (${Tl}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,...e){throw Lm(n,...e)}function gi(n,...e){return Lm(n,...e)}function MS(n,e,t){const i=Object.assign(Object.assign({},ub()),{[e]:t});return new El("auth","Firebase",i).create(e,{appName:n.name})}function Vi(n){return MS(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lm(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ES.create(n,...e)}function Pe(n,e,...t){if(!n)throw Lm(e,...t)}function ki(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fc(e),new Error(e)}function qi(n,e){n||ki(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fb(){return X_()==="http:"||X_()==="https:"}function X_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fb()||GA()||"connection"in navigator)?navigator.onLine:!0}function pb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t){this.shortDelay=e,this.longDelay=t,qi(t>e,"Short delay should be less than long delay!"),this.isMobile=HA()||WA()}get(){return hb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n,e){qi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_b=new wl(3e4,6e4);function Kr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qr(n,e,t,i,r={}){return wS(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Ml(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},s);return VA()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&nd(n.emulatorConfig.host)&&(c.credentials="include"),TS.fetch()(await AS(n,n.config.apiHost,t,a),c)})}async function wS(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},mb),e);try{const r=new yb(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zl(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zl(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zl(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zl(n,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw MS(n,d,c);li(n,d)}}catch(r){if(r instanceof $r)throw r;li(n,"network-request-failed",{message:String(r)})}}async function Al(n,e,t,i,r={}){const s=await qr(n,e,t,i,r);return"mfaPendingCredential"in s&&li(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function AS(n,e,t,i){const r=`${e}${t}?${i}`,s=n,o=s.config.emulator?Dm(n.config,r):`${n.config.apiScheme}://${r}`;return gb.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function vb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(gi(this.auth,"network-request-failed")),_b.get())})}}function Zl(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=gi(n,e,i);return r.customData._tokenResponse=t,r}function $_(n){return n!==void 0&&n.enterprise!==void 0}class xb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return vb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sb(n,e){return qr(n,"GET","/v2/recaptchaConfig",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(n,e){return qr(n,"POST","/v1/accounts:delete",e)}async function Mu(n,e){return qr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mb(n,e=!1){const t=er(n),i=await t.getIdToken(e),r=Um(i);Pe(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ua(Kd(r.auth_time)),issuedAtTime:Ua(Kd(r.iat)),expirationTime:Ua(Kd(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kd(n){return Number(n)*1e3}function Um(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Fc("JWT malformed, contained fewer than 3 sections"),null;try{const r=dS(t);return r?JSON.parse(r):(Fc("Failed to decode base64 JWT payload"),null)}catch(r){return Fc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function K_(n){const e=Um(n);return Pe(e,"internal-error"),Pe(typeof e.exp<"u","internal-error"),Pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof $r&&Tb(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Tb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(n){var e;const t=n.auth,i=await n.getIdToken(),r=await al(n,Mu(t,{idToken:i}));Pe(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bS(s.providerUserInfo):[],a=bb(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fh(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Ab(n){const e=er(n);await Tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bb(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function bS(n){return n.map(e=>{var{providerId:t}=e,i=Nm(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(n,e){const t=await wS(n,{},async()=>{const i=Ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=await AS(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return n.emulatorConfig&&nd(n.emulatorConfig.host)&&(l.credentials="include"),TS.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Cb(n,e){return qr(n,"POST","/v2/accounts:revokeToken",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Pe(e.idToken,"internal-error"),Pe(typeof e.idToken<"u","internal-error"),Pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):K_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Pe(e.length!==0,"internal-error");const t=K_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Rb(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new go;return i&&(Pe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Pe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Pe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return ki("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n,e){Pe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ti{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Nm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await al(this,this.stsTokenManager.getToken(this.auth,e));return Pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mb(this,e)}reload(){return Ab(this)}_assign(e){this!==e&&(Pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Tu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(Vi(this.auth));const e=await this.getIdToken();return await al(this,Eb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,c,d;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(r=t.email)!==null&&r!==void 0?r:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,h=(c=t.createdAt)!==null&&c!==void 0?c:void 0,_=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:x,isAnonymous:b,providerData:A,stsTokenManager:w}=t;Pe(y&&w,e,"internal-error");const R=go.fromJSON(this.name,w);Pe(typeof y=="string",e,"internal-error"),nr(u,e.name),nr(f,e.name),Pe(typeof x=="boolean",e,"internal-error"),Pe(typeof b=="boolean",e,"internal-error"),nr(p,e.name),nr(g,e.name),nr(v,e.name),nr(m,e.name),nr(h,e.name),nr(_,e.name);const M=new ti({uid:y,auth:e,email:f,emailVerified:x,displayName:u,isAnonymous:b,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:R,createdAt:h,lastLoginAt:_});return A&&Array.isArray(A)&&(M.providerData=A.map(S=>Object.assign({},S))),m&&(M._redirectEventId=m),M}static async _fromIdTokenResponse(e,t,i=!1){const r=new go;r.updateFromServerResponse(t);const s=new ti({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Tu(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];Pe(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?bS(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new go;a.updateFromIdToken(i);const l=new ti({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Fh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new Map;function Fi(n){qi(n instanceof Function,"Expected a class definition");let e=q_.get(n);return e?(qi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,q_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}RS.type="NONE";const Y_=RS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n,e,t){return`firebase:${n}:${e}:${t}`}class _o{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Bc(this.userKey,r.apiKey,s),this.fullPersistenceKey=Bc("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Mu(this.auth,{idToken:e}).catch(()=>{});return t?ti._fromGetAccountInfoResponse(this.auth,t,e):null}return ti._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new _o(Fi(Y_),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Fi(Y_);const o=Bc(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){let u;if(typeof d=="string"){const f=await Mu(e,{idToken:d}).catch(()=>{});if(!f)break;u=await ti._fromGetAccountInfoResponse(e,f,d)}else u=ti._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new _o(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new _o(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DS(e))return"Blackberry";if(US(e))return"Webos";if(IS(e))return"Safari";if((e.includes("chrome/")||PS(e))&&!e.includes("edge/"))return"Chrome";if(LS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function CS(n=ln()){return/firefox\//i.test(n)}function IS(n=ln()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PS(n=ln()){return/crios\//i.test(n)}function NS(n=ln()){return/iemobile/i.test(n)}function LS(n=ln()){return/android/i.test(n)}function DS(n=ln()){return/blackberry/i.test(n)}function US(n=ln()){return/webos/i.test(n)}function Om(n=ln()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ib(n=ln()){var e;return Om(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pb(){return jA()&&document.documentMode===10}function OS(n=ln()){return Om(n)||LS(n)||US(n)||DS(n)||/windows phone/i.test(n)||NS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(n,e=[]){let t;switch(n){case"Browser":t=J_(ln());break;case"Worker":t=`${J_(ln())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tl}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(n,e={}){return qr(n,"GET","/v2/passwordPolicy",Kr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=6;class Ub{constructor(e){var t,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Db,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Z_(this),this.idTokenSubscription=new Z_(this),this.beforeStateQueue=new Nb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ES,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fi(t)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mu(this,{idToken:e}),i=await ti._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Jn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Tu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(Vi(this));const t=e?er(e):null;return t&&Pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(Vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(Vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lb(this),t=new Ub(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new El("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Cb(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fi(e)||this._popupRedirectResolver;Pe(t,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[Fi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Pe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&db(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Is(n){return er(n)}class Z_{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZA(t=>this.observer=t)}get next(){return Pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kb(n){id=n}function FS(n){return id.loadJS(n)}function Fb(){return id.recaptchaEnterpriseScript}function Bb(){return id.gapiScript}function zb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Hb{constructor(){this.enterprise=new Vb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Vb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Gb="recaptcha-enterprise",BS="NO_RECAPTCHA";class Wb{constructor(e){this.type=Gb,this.auth=Is(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Sb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new xb(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;$_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(BS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Hb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&$_(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Fb();l.length!==0&&(l+=a),FS(l).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Q_(n,e,t,i=!1,r=!1){const s=new Wb(n);let o;if(r)o=BS;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Bh(n,e,t,i,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Q_(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Q_(n,e,t,t==="getOobCode");return i(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(n,e){const t=_S(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Po(s,e??{}))return r;li(r,"already-initialized")}return t.initialize({options:e})}function Xb(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Fi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function $b(n,e,t){const i=Is(n);Pe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=zS(e),{host:o,port:a}=Kb(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){Pe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Pe(Po(c,i.config.emulator)&&Po(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,nd(o)?(kA(`${s}//${o}${l}`),zA("Auth",!0)):qb()}function zS(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Kb(n){const e=zS(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:ev(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:ev(o)}}}function ev(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ki("not implemented")}_getIdTokenResponse(e){return ki("not implemented")}_linkToIdToken(e,t){return ki("not implemented")}_getReauthenticationResolver(e){return ki("not implemented")}}async function Yb(n,e){return qr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(n,e){return Al(n,"POST","/v1/accounts:signInWithPassword",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(n,e){return Al(n,"POST","/v1/accounts:signInWithEmailLink",Kr(n,e))}async function Qb(n,e){return Al(n,"POST","/v1/accounts:signInWithEmailLink",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends km{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ll(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ll(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bh(e,t,"signInWithPassword",Jb);case"emailLink":return Zb(e,{email:this._email,oobCode:this._password});default:li(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bh(e,i,"signUpPassword",Yb);case"emailLink":return Qb(e,{idToken:t,email:this._email,oobCode:this._password});default:li(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(n,e){return Al(n,"POST","/v1/accounts:signInWithIdp",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="http://localhost";class Ts extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):li("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Nm(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Ts(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,vo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vo(e,t)}buildRequest(){const e={requestUri:eR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ml(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nR(n){const e=Sa(Ea(n)).link,t=e?Sa(Ea(e)).deep_link_id:null,i=Sa(Ea(n)).deep_link_id;return(i?Sa(Ea(i)).link:null)||i||t||e||n}class Fm{constructor(e){var t,i,r,s,o,a;const l=Sa(Ea(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,d=(i=l.oobCode)!==null&&i!==void 0?i:null,u=tR((r=l.mode)!==null&&r!==void 0?r:null);Pe(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=nR(e);try{return new Fm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,t){return ll._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Fm.parseLink(t);return Pe(i,"argument-error"),ll._fromEmailAndCode(e,i.code,i.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends HS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends bl{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ts._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return gr.credential(t,i)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends bl{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends bl{constructor(){super("twitter.com")}static credential(e,t){return Ts._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vr.credential(t,i)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(n,e){return Al(n,"POST","/v1/accounts:signUp",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await ti._fromIdTokenResponse(e,i,r),o=tv(i);return new ws({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=tv(i);return new ws({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function tv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends $r{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new wu(e,t,i,r)}}function VS(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(n,s,e,i):s})}async function rR(n,e,t=!1){const i=await al(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ws._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(n,e,t=!1){const{auth:i}=n;if(Jn(i.app))return Promise.reject(Vi(i));const r="reauthenticate";try{const s=await al(n,VS(i,r,e,n),t);Pe(s.idToken,i,"internal-error");const o=Um(s.idToken);Pe(o,i,"internal-error");const{sub:a}=o;return Pe(n.uid===a,i,"user-mismatch"),ws._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&li(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(n,e,t=!1){if(Jn(n.app))return Promise.reject(Vi(n));const i="signIn",r=await VS(n,i,e),s=await ws._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function oR(n,e){return GS(Is(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(n){const e=Is(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aR(n,e,t){if(Jn(n.app))return Promise.reject(Vi(n));const i=Is(n),o=await Bh(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&WS(n),l}),a=await ws._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function lR(n,e,t){return Jn(n.app)?Promise.reject(Vi(n)):oR(er(n),$o.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&WS(n),i})}function cR(n,e,t,i){return er(n).onIdTokenChanged(e,t,i)}function uR(n,e,t){return er(n).beforeAuthStateChanged(e,t)}function dR(n,e,t,i){return er(n).onAuthStateChanged(e,t,i)}function fR(n){return er(n).signOut()}const Au="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=1e3,pR=10;class XS extends jS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Pb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,pR):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},hR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}XS.type="LOCAL";const mR=XS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S extends jS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$S.type="SESSION";const KS=$S;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new rd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await gR(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Bm("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}function vR(n){_i().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function yR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function SR(){return qS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="firebaseLocalStorageDb",ER=1,bu="firebaseLocalStorage",JS="fbase_key";class Rl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sd(n,e){return n.transaction([bu],e?"readwrite":"readonly").objectStore(bu)}function MR(){const n=indexedDB.deleteDatabase(YS);return new Rl(n).toPromise()}function zh(){const n=indexedDB.open(YS,ER);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(bu,{keyPath:JS})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(bu)?e(i):(i.close(),await MR(),e(await zh()))})})}async function nv(n,e,t){const i=sd(n,!0).put({[JS]:e,value:t});return new Rl(i).toPromise()}async function TR(n,e){const t=sd(n,!1).get(e),i=await new Rl(t).toPromise();return i===void 0?null:i.value}function iv(n,e){const t=sd(n,!0).delete(e);return new Rl(t).toPromise()}const wR=800,AR=3;class ZS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>AR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rd._getInstance(SR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yR(),!this.activeServiceWorker)return;this.sender=new _R(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zh();return await nv(e,Au,"1"),await iv(e,Au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>nv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>TR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>iv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=sd(r,!1).getAll();return new Rl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZS.type="LOCAL";const bR=ZS;new wl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(n,e){return e?Fi(e):(Pe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm extends km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CR(n){return GS(n.auth,new zm(n),n.bypassAuthState)}function IR(n){const{auth:e,user:t}=n;return Pe(t,e,"internal-error"),sR(t,new zm(n),n.bypassAuthState)}async function PR(n){const{auth:e,user:t}=n;return Pe(t,e,"internal-error"),rR(t,new zm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CR;case"linkViaPopup":case"linkViaRedirect":return PR;case"reauthViaPopup":case"reauthViaRedirect":return IR;default:li(this.auth,"internal-error")}}resolve(e){qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new wl(2e3,1e4);class oo extends QS{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Pe(e,this.auth,"internal-error"),e}async onExecution(){qi(this.filter.length===1,"Popup operations only handle one event");const e=Bm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NR.get())};e()}}oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="pendingRedirect",zc=new Map;class DR extends QS{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const i=await UR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UR(n,e){const t=FR(e),i=kR(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function OR(n,e){zc.set(n._key(),e)}function kR(n){return Fi(n._redirectPersistence)}function FR(n){return Bc(LR,n.config.apiKey,n.name)}async function BR(n,e,t=!1){if(Jn(n.app))return Promise.reject(Vi(n));const i=Is(n),r=RR(i,e),o=await new DR(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=10*60*1e3;class HR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!eE(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(gi(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zR&&this.cachedEventUids.clear(),this.cachedEventUids.has(rv(e))}saveEventToCache(e){this.cachedEventUids.add(rv(e)),this.lastProcessedEventTime=Date.now()}}function rv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function eE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(n,e={}){return qr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jR=/^https?/;async function XR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await GR(n);for(const t of e)try{if($R(t))return}catch{}li(n,"unauthorized-domain")}function $R(n){const e=kh(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!jR.test(t))return!1;if(WR.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=new wl(3e4,6e4);function sv(){const n=_i().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qR(n){return new Promise((e,t)=>{var i,r,s;function o(){sv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sv(),t(gi(n,"network-request-failed"))},timeout:KR.get()})}if(!((r=(i=_i().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=_i().gapi)===null||s===void 0)&&s.load)o();else{const a=zb("iframefcb");return _i()[a]=()=>{gapi.load?o():t(gi(n,"network-request-failed"))},FS(`${Bb()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Hc=null,e})}let Hc=null;function YR(n){return Hc=Hc||qR(n),Hc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new wl(5e3,15e3),ZR="__/auth/iframe",QR="emulator/auth/iframe",eC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nC(n){const e=n.config;Pe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Dm(e,QR):`https://${n.config.authDomain}/${ZR}`,i={apiKey:e.apiKey,appName:n.name,v:Tl},r=tC.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Ml(i).slice(1)}`}async function iC(n){const e=await YR(n),t=_i().gapi;return Pe(t,n,"internal-error"),e.open({where:document.body,url:nC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eC,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=gi(n,"network-request-failed"),a=_i().setTimeout(()=>{s(o)},JR.get());function l(){_i().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sC=500,oC=600,aC="_blank",lC="http://localhost";class ov{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cC(n,e,t,i=sC,r=oC){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rC),{width:i.toString(),height:r.toString(),top:s,left:o}),c=ln().toLowerCase();t&&(a=PS(c)?aC:t),CS(c)&&(e=e||lC,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(Ib(c)&&a!=="_self")return uC(e||"",a),new ov(null);const u=window.open(e||"",a,d);Pe(u,n,"popup-blocked");try{u.focus()}catch{}return new ov(u)}function uC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="__/auth/handler",fC="emulator/auth/handler",hC=encodeURIComponent("fac");async function av(n,e,t,i,r,s){Pe(n.config.authDomain,n,"auth-domain-config-required"),Pe(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Tl,eventId:r};if(e instanceof HS){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",JA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof bl){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${hC}=${encodeURIComponent(l)}`:"";return`${pC(n)}?${Ml(a).slice(1)}${c}`}function pC({config:n}){return n.emulator?Dm(n,fC):`https://${n.authDomain}/${dC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="webStorageSupport";class mC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KS,this._completeRedirectFn=BR,this._overrideRedirectResult=OR}async _openPopup(e,t,i,r){var s;qi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await av(e,t,i,kh(),r);return cC(e,o,Bm())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await av(e,t,i,kh(),r);return vR(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(qi(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await iC(e),i=new HR(e);return t.register("authEvent",r=>(Pe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qd,{type:qd},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[qd];o!==void 0&&t(!!o),li(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return OS()||IS()||Om()}}const gC=mC;var lv="@firebase/auth",cv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yC(n){sl(new No("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Pe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kS(n)},c=new Ob(i,r,s,l);return Xb(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),sl(new No("auth-internal",e=>{const t=Is(e.getProvider("auth").getImmediate());return(i=>new _C(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mo(lv,cv,vC(n)),mo(lv,cv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=5*60,SC=hS("authIdTokenMaxAge")||xC;let uv=null;const EC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>SC)return;const r=t==null?void 0:t.token;uv!==r&&(uv=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function MC(n=Q1()){const e=_S(n,"auth");if(e.isInitialized())return e.getImmediate();const t=jb(n,{popupRedirectResolver:gC,persistence:[bR,mR,KS]}),i=hS("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=EC(s.toString());uR(t,o,()=>o(t.currentUser)),cR(t,a=>o(a))}}const r=UA("auth");return r&&$b(t,`http://${r}`),t}function TC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kb({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=gi("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",TC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yC("Browser");var wC="firebase",AC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mo(wC,AC,"app");const tE={apiKey:"your-api-key",authDomain:"your-project.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project.appspot.com",messagingSenderId:"your-sender-id",appId:"your-app-id"};function bC(n){return!!(n.apiKey&&n.authDomain&&n.projectId&&n.appId&&n.apiKey!=="your-api-key")}const Cl=bC(tE);let Yi=null;if(Cl){const n=V_().length>0?V_()[0]:vS(tE);Yi=MC(n)}const Hh="auraar_demo_user";function RC(){const n=localStorage.getItem(Hh);return n?JSON.parse(n):null}function Hm(n){n?localStorage.setItem(Hh,JSON.stringify(n)):localStorage.removeItem(Hh)}function CC(n){return Cl&&Yi?dR(Yi,n):(n(RC()),()=>{})}async function IC(n,e){if(Cl&&Yi)return(await lR(Yi,n,e)).user;const t={uid:`demo-${Date.now()}`,email:n,displayName:n.split("@")[0],authMode:"demo"};return Hm(t),t}async function PC(n,e){if(Cl&&Yi)return(await aR(Yi,n,e)).user;const t={uid:`demo-${Date.now()}`,email:n,displayName:n.split("@")[0],authMode:"demo"};return Hm(t),t}async function NC(){if(Cl&&Yi){await fR(Yi);return}Hm(null)}const nE=G.createContext(null);function LC({children:n}){const[e,t]=G.useState(null),[i,r]=G.useState(!0);G.useEffect(()=>CC(a=>{t(a),r(!1)}),[]);const s=G.useMemo(()=>({user:e,authLoading:i,isAuthenticated:!!e,login:IC,signup:PC,logout:NC}),[i,e]);return P.jsx(nE.Provider,{value:s,children:n})}function od(){const n=G.useContext(nE);if(!n)throw new Error("useAuth must be used inside AuthProvider");return n}const DC=[{to:"/",label:"Home"},{to:"/shop",label:"Shop"},{to:"/tryon",label:"Try On"},{to:"/about",label:"About"},{to:"/profile",label:"Profile"}];function UC(){const{isAuthenticated:n,logout:e,user:t}=od(),i=Qu();async function r(){await e(),i("/auth")}return P.jsx("header",{className:"sticky top-0 z-30 border-b border-rose-100 bg-white/90 backdrop-blur",children:P.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",children:[P.jsxs("div",{children:[P.jsx("p",{className:"font-display text-2xl font-bold text-aura-primary",children:"AuraAR"}),P.jsx("p",{className:"text-sm text-stone-500",children:"Virtual accessories try-on"})]}),P.jsxs("nav",{className:"flex flex-wrap items-center gap-2",children:[DC.map(s=>P.jsx(N_,{to:s.to,className:({isActive:o})=>["rounded-full px-4 py-2 text-sm font-medium transition",o?"bg-aura-primary text-white":"text-stone-600 hover:bg-rose-50 hover:text-aura-primary"].join(" "),children:s.label},s.to)),n?P.jsxs(P.Fragment,{children:[P.jsx("span",{className:"px-2 text-sm text-stone-500",children:t==null?void 0:t.email}),P.jsx("button",{type:"button",onClick:r,className:"rounded-full bg-aura-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-95",children:"Logout"})]}):P.jsx(N_,{to:"/auth",className:({isActive:s})=>["rounded-full px-4 py-2 text-sm font-medium transition",s?"bg-aura-accent text-white":"bg-aura-secondary/20 text-aura-primary hover:bg-aura-secondary/35"].join(" "),children:"Login / Sign Up"})]})]})})}function OC({children:n}){const{authLoading:e,isAuthenticated:t}=od(),i=Xr();return e?P.jsx("main",{className:"mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8",children:P.jsx("div",{className:"rounded-[2rem] bg-white p-8 text-center shadow-aura",children:"Checking your session..."})}):t?n:P.jsx(oS,{to:"/auth",replace:!0,state:{from:i.pathname}})}const kC=["I think that I would like to use AuraAR frequently.","I found AuraAR unnecessarily complex.","I thought AuraAR was easy to use.","I think that I would need technical support to use AuraAR.","I found the AR try-on features well integrated.","I thought there was too much inconsistency in the system.","I would imagine that most users would learn to use AuraAR quickly.","I found the system cumbersome to use.","I felt confident using the AR try-on experience.","I needed to learn a lot of things before I could get going with AuraAR."];function FC(){return P.jsxs("section",{className:"rounded-[2rem] border border-rose-100 bg-white p-8 shadow-aura",children:[P.jsxs("div",{className:"mb-6",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-accent",children:"Evaluation"}),P.jsx("h2",{className:"mt-3 font-display text-3xl text-aura-primary",children:"SUS Survey Outline"}),P.jsx("p",{className:"mt-3 max-w-3xl text-stone-600",children:"This section prepares the System Usability Scale for the evaluation phase of the thesis. Participants can rate each statement from 1 to 5 after using the live try-on flow."})]}),P.jsx("div",{className:"space-y-3",children:kC.map((n,e)=>P.jsxs("div",{className:"rounded-2xl border border-aura-secondary/30 bg-aura-secondary/8 p-4",children:[P.jsxs("p",{className:"text-sm font-semibold text-aura-primary",children:["Q",e+1,". ",n]}),P.jsx("p",{className:"mt-2 text-sm text-stone-500",children:"Scale: 1 = Strongly disagree, 5 = Strongly agree"})]},n))})]})}function BC(){return P.jsxs("main",{className:"mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",children:[P.jsxs("section",{className:"rounded-[2rem] bg-white p-8 shadow-aura",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-accent",children:"About"}),P.jsx("h1",{className:"mt-3 font-display text-4xl text-aura-primary",children:"Research Context"}),P.jsx("p",{className:"mt-4 max-w-4xl text-stone-600",children:"AuraAR is a thesis-oriented augmented reality web application focused on improving confidence in online accessory shopping for females aged 18 to 25 in Kathmandu, Nepal. The system combines MediaPipe face tracking, a responsive shopping interface, and local-only facial processing to create a privacy-aware virtual try-on experience."}),P.jsxs("div",{className:"mt-8 grid gap-6 lg:grid-cols-2",children:[P.jsxs("article",{className:"rounded-3xl border border-aura-secondary/35 bg-aura-secondary/10 p-6",children:[P.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Research Questions"}),P.jsxs("div",{className:"mt-4 space-y-3 text-stone-600",children:[P.jsx("p",{children:"RQ1: Will AR increase confidence in online accessory purchasing?"}),P.jsx("p",{children:"RQ2: How does AR realism influence buying decisions?"}),P.jsx("p",{children:"RQ3: Will virtual fitting reduce hesitance and return rates?"})]})]}),P.jsxs("article",{className:"rounded-3xl border border-aura-secondary/35 bg-aura-secondary/10 p-6",children:[P.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Hypotheses"}),P.jsxs("div",{className:"mt-4 space-y-3 text-stone-600",children:[P.jsx("p",{children:"H1: AR try-on increases user confidence before purchase."}),P.jsx("p",{children:"H2: Live tracking improves perceived realism over static previews."}),P.jsx("p",{children:"H3: Faster decision-making leads to greater purchase intent."})]})]}),P.jsxs("article",{className:"rounded-3xl border border-aura-secondary/35 bg-white p-6",children:[P.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Methodology"}),P.jsxs("div",{className:"mt-4 space-y-3 text-stone-600",children:[P.jsx("p",{children:"Approach: Desk-Based Agile development"}),P.jsx("p",{children:"Sprints: Research to Prototype to Testing to Refinement"}),P.jsx("p",{children:"Evaluation: usability observation, SUS survey, and feature validation"})]})]}),P.jsxs("article",{className:"rounded-3xl border border-aura-secondary/35 bg-white p-6",children:[P.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Project Team"}),P.jsxs("div",{className:"mt-4 space-y-3 text-stone-600",children:[P.jsx("p",{children:"Researcher: Bishruti Koirala"}),P.jsx("p",{children:"Supervisor: Manoj Shrestha"}),P.jsx("p",{children:"Institution: Coventry University / Softwarica College"})]})]})]})]}),P.jsx("div",{className:"mt-8",children:P.jsx(FC,{})})]})}function zC(){var m;const[n,e]=G.useState("login"),[t,i]=G.useState(""),[r,s]=G.useState(""),[o,a]=G.useState(""),[l,c]=G.useState(!1),{login:d,signup:u}=od(),f=Qu(),g=((m=Xr().state)==null?void 0:m.from)||"/profile";async function v(h){h.preventDefault(),a(""),c(!0);try{n==="login"?await d(t,r):await u(t,r),f(g,{replace:!0})}catch(_){a(_.message||"Authentication failed. Please try again.")}finally{c(!1)}}return P.jsx("main",{className:"mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",children:P.jsxs("section",{className:"grid overflow-hidden rounded-[2rem] bg-white shadow-aura lg:grid-cols-[1.1fr_0.9fr]",children:[P.jsxs("div",{className:"bg-aura-primary px-8 py-12 text-white sm:px-10",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-secondary",children:"AuraAR Access"}),P.jsx("h1",{className:"mt-4 font-display text-4xl",children:"Login or create your account"}),P.jsx("p",{className:"mt-4 max-w-md text-sm text-white/85",children:"Use authentication to save wishlists, personalize your profile, and continue building the full academic prototype. If Firebase is not configured yet, the app will use demo auth locally."}),P.jsxs("div",{className:"mt-8 space-y-3 text-sm text-white/85",children:[P.jsx("p",{children:"Save items to wishlist"}),P.jsx("p",{children:"Protect the profile page"}),P.jsx("p",{children:"Prepare for Firebase Auth integration"})]})]}),P.jsxs("div",{className:"px-8 py-12 sm:px-10",children:[P.jsxs("div",{className:"mb-8 flex gap-3",children:[P.jsx("button",{type:"button",onClick:()=>e("login"),className:["rounded-full px-5 py-2 text-sm font-semibold transition",n==="login"?"bg-aura-accent text-white":"bg-aura-secondary/20 text-aura-primary"].join(" "),children:"Login"}),P.jsx("button",{type:"button",onClick:()=>e("signup"),className:["rounded-full px-5 py-2 text-sm font-semibold transition",n==="signup"?"bg-aura-accent text-white":"bg-aura-secondary/20 text-aura-primary"].join(" "),children:"Sign Up"})]}),P.jsxs("form",{onSubmit:v,className:"space-y-5",children:[P.jsxs("div",{children:[P.jsx("label",{className:"mb-2 block text-sm font-medium text-aura-primary",children:"Email"}),P.jsx("input",{type:"email",value:t,onChange:h=>i(h.target.value),placeholder:"you@example.com",required:!0,className:"w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"})]}),P.jsxs("div",{children:[P.jsx("label",{className:"mb-2 block text-sm font-medium text-aura-primary",children:"Password"}),P.jsx("input",{type:"password",value:r,onChange:h=>s(h.target.value),placeholder:"Minimum 6 characters",minLength:6,required:!0,className:"w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"})]}),o?P.jsx("div",{className:"rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700",children:o}):null,P.jsx("button",{type:"submit",disabled:l,className:"w-full rounded-full bg-aura-primary px-6 py-3 font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70",children:l?"Please wait...":n==="login"?"Login":"Create Account"})]}),P.jsxs("p",{className:"mt-6 text-sm text-stone-500",children:["Back to"," ",P.jsx(td,{to:"/tryon",className:"font-semibold text-aura-accent",children:"AR Try-On"})]})]})]})})}function HC({product:n}){return P.jsxs("article",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[P.jsx("div",{className:"mb-4 rounded-2xl bg-aura-secondary/14 p-4",children:P.jsx("img",{src:n.thumbnailUrl,alt:n.name,className:"mx-auto h-32 w-32 object-contain"})}),P.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:n.category}),P.jsx("span",{className:["rounded-full px-3 py-1 text-xs font-semibold",n.arSupported?"bg-emerald-50 text-emerald-700":"bg-stone-100 text-stone-500"].join(" "),children:n.arSupported?"AR Ready":"Planned"})]}),P.jsx("h3",{className:"font-display text-xl text-aura-charcoal",children:n.name}),P.jsxs("p",{className:"mt-2 text-stone-600",children:["NPR ",n.price]}),P.jsx("p",{className:"mt-2 text-sm text-stone-500",children:"Designed for a mobile-friendly try-on journey with local landmark processing."}),P.jsxs("div",{className:"mt-4 flex gap-3",children:[P.jsx(td,{to:"/tryon",className:"rounded-full bg-aura-primary px-4 py-2 text-sm font-semibold text-white",children:"Try in AR"}),P.jsx("button",{className:"rounded-full border border-aura-secondary/50 px-4 py-2 text-sm font-semibold text-aura-primary",children:"Save"})]})]})}async function VC(){return[{id:"earring-01",name:"Earring 01",category:"earrings",price:1999,currency:"NPR",thumbnailUrl:"/assets/products/earring-01.svg",tryOnImageUrl:"/assets/products/earring-01.svg",modelUrl:"/assets/earring_01.glb",arSupported:!0},{id:"earring-02",name:"Earring 02",category:"earrings",price:1499,currency:"NPR",thumbnailUrl:"/assets/products/earring-02.svg",tryOnImageUrl:"/assets/products/earring-02.svg",modelUrl:"/assets/earring_02.glb",arSupported:!0},{id:"earring-03",name:"Earring 03",category:"earrings",price:2299,currency:"NPR",thumbnailUrl:"/assets/products/earring-03.svg",tryOnImageUrl:"/assets/products/earring-03.svg",modelUrl:"/assets/earring_03.glb",arSupported:!0},{id:"earring-stoned",name:"Stoned Earring",category:"earrings",price:1799,currency:"NPR",thumbnailUrl:"/assets/products/earring-stoned.svg",tryOnImageUrl:"/assets/products/earring-stoned.svg",modelUrl:"/assets/earring_stoned.glb",arSupported:!0},{id:"glasses-01",name:"Glasses 01",category:"sunglasses",price:1299,currency:"NPR",thumbnailUrl:"/assets/products/glasses-01.svg",tryOnImageUrl:"/assets/products/glasses-01.svg",modelUrl:"/assets/glasses_01.glb",arSupported:!0},{id:"pendant-01",name:"Pendant 01",category:"necklace",price:3199,currency:"NPR",thumbnailUrl:"/assets/products/pendant-01.svg",tryOnImageUrl:"/assets/products/pendant-01.svg",modelUrl:"/assets/pendant_01.glb",arSupported:!0},{id:"necklace-woman-01",name:"Woman Necklace 01",category:"necklace",price:2899,currency:"NPR",thumbnailUrl:"/assets/products/necklace-woman-01.svg",tryOnImageUrl:"/assets/products/necklace-woman-01.svg",modelUrl:"/assets/necklace_woman_01.glb",arSupported:!0}]}const GC=["all","earrings","sunglasses","necklace"];function WC(){const[n,e]=G.useState([]),[t,i]=G.useState("all");G.useEffect(()=>{VC().then(e)},[]);const r=G.useMemo(()=>t==="all"?n:n.filter(s=>s.category===t),[t,n]);return P.jsxs("main",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",children:[P.jsxs("div",{className:"mb-8",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-accent",children:"Shop"}),P.jsx("h1",{className:"font-display text-4xl text-aura-primary",children:"Accessory Catalog"}),P.jsx("p",{className:"mt-4 max-w-3xl text-stone-600",children:"Browse the academic product catalog by accessory type. This page is structured to support future Firestore integration, AR-supported item tagging, and purchase-confidence evaluation."})]}),P.jsx("div",{className:"mb-8 flex flex-wrap gap-3",children:GC.map(s=>{const o=t===s;return P.jsx("button",{type:"button",onClick:()=>i(s),className:["rounded-full px-5 py-2 text-sm font-semibold capitalize transition",o?"bg-aura-primary text-white":"bg-white text-aura-primary border border-aura-secondary/45 hover:bg-aura-secondary/10"].join(" "),children:s},s)})}),P.jsx("section",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-3",children:r.map(s=>P.jsx(HC,{product:s},s.id))})]})}function jC(){return P.jsx("main",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",children:P.jsxs("section",{className:"rounded-[2rem] bg-white p-10 shadow-aura",children:[P.jsx("p",{className:"mb-3 text-sm uppercase tracking-[0.3em] text-aura-accent",children:"Kathmandu-ready AR accessories"}),P.jsx("h1",{className:"max-w-3xl font-display text-5xl text-aura-primary",children:"Try earrings and other accessories on your face before you buy."}),P.jsx("p",{className:"mt-6 max-w-2xl text-lg text-stone-600",children:"AuraAR is an academic prototype focused on confidence, realism, and better online accessory decisions for young women in Kathmandu."}),P.jsx(td,{to:"/tryon",className:"mt-8 inline-flex rounded-full bg-aura-primary px-6 py-3 font-semibold text-white",children:"Start AR Try-On"})]})})}function XC(){const{user:n}=od();return P.jsx("main",{className:"mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8",children:P.jsxs("section",{className:"rounded-[2rem] bg-white p-8 shadow-aura",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-accent",children:"Profile"}),P.jsx("h1",{className:"mt-3 font-display text-4xl text-aura-primary",children:"User Summary"}),P.jsxs("div",{className:"mt-4 rounded-3xl bg-aura-secondary/15 p-5 text-sm text-stone-600",children:["Signed in as ",P.jsx("span",{className:"font-semibold text-aura-primary",children:n==null?void 0:n.email})]}),P.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-3",children:[P.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-5",children:[P.jsx("p",{className:"text-sm text-stone-500",children:"Try-ons"}),P.jsx("p",{className:"mt-2 font-display text-3xl text-aura-charcoal",children:"0"})]}),P.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-5",children:[P.jsx("p",{className:"text-sm text-stone-500",children:"Wishlisted"}),P.jsx("p",{className:"mt-2 font-display text-3xl text-aura-charcoal",children:"0"})]}),P.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-5",children:[P.jsx("p",{className:"text-sm text-stone-500",children:"Purchased"}),P.jsx("p",{className:"mt-2 font-display text-3xl text-aura-charcoal",children:"0"})]})]})]})})}function $C({accessories:n,selectedAccessoryId:e,onSelectAccessory:t}){return P.jsxs("section",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[P.jsxs("div",{className:"mb-4",children:[P.jsx("h2",{className:"font-display text-2xl text-aura-charcoal",children:"Jewelry"}),P.jsx("p",{className:"text-sm text-stone-600",children:"Select a piece to preview with the live try-on camera."})]}),P.jsx("div",{className:"space-y-3",children:n.map(i=>{const r=i.id===e;return P.jsxs("button",{type:"button",onClick:()=>t(i.id),className:["flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition",r?"border-aura-primary bg-rose-50":"border-rose-100 bg-white hover:border-rose-200 hover:bg-rose-50/50"].join(" "),children:[P.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-2xl bg-aura-cream",children:P.jsx("img",{src:i.thumbnailUrl,alt:i.name,className:"max-h-12 max-w-12 object-contain"})}),P.jsxs("div",{children:[P.jsx("p",{className:"font-semibold text-aura-charcoal",children:i.name}),P.jsx("p",{className:"text-sm text-stone-500",children:i.category})]})]},i.id)})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vm="177",KC=0,dv=1,qC=2,iE=1,YC=2,Pi=3,Ji=0,yn=1,Zn=2,kr=0,yo=1,fv=2,hv=3,pv=4,JC=5,ds=100,ZC=101,QC=102,eI=103,tI=104,nI=200,iI=201,rI=202,sI=203,Vh=204,Gh=205,oI=206,aI=207,lI=208,cI=209,uI=210,dI=211,fI=212,hI=213,pI=214,Wh=0,jh=1,Xh=2,Lo=3,$h=4,Kh=5,qh=6,Yh=7,rE=0,mI=1,gI=2,Fr=0,_I=1,vI=2,yI=3,xI=4,SI=5,EI=6,MI=7,mv="attached",TI="detached",sE=300,Do=301,Uo=302,Jh=303,Zh=304,ad=306,Oo=1e3,Mr=1001,Ru=1002,on=1003,oE=1004,Ma=1005,wn=1006,Vc=1007,Bi=1008,yi=1009,aE=1010,lE=1011,cl=1012,Gm=1013,As=1014,ni=1015,Il=1016,Wm=1017,jm=1018,ul=1020,cE=35902,uE=1021,dE=1022,Fn=1023,dl=1026,fl=1027,Xm=1028,$m=1029,fE=1030,Km=1031,qm=1033,Gc=33776,Wc=33777,jc=33778,Xc=33779,Qh=35840,ep=35841,tp=35842,np=35843,ip=36196,rp=37492,sp=37496,op=37808,ap=37809,lp=37810,cp=37811,up=37812,dp=37813,fp=37814,hp=37815,pp=37816,mp=37817,gp=37818,_p=37819,vp=37820,yp=37821,$c=36492,xp=36494,Sp=36495,hE=36283,Ep=36284,Mp=36285,Tp=36286,hl=2300,pl=2301,Yd=2302,gv=2400,_v=2401,vv=2402,wI=2500,AI=0,pE=1,wp=2,bI=3200,RI=3201,mE=0,CI=1,yr="",Wt="srgb",cn="srgb-linear",Cu="linear",ct="srgb",Ls=7680,yv=519,II=512,PI=513,NI=514,gE=515,LI=516,DI=517,UI=518,OI=519,Ap=35044,xv="300 es",zi=2e3,Iu=2001;class Ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sv=1234567;const Oa=Math.PI/180,ko=180/Math.PI;function oi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function Ym(n,e){return(n%e+e)%e}function kI(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function FI(n,e,t){return n!==e?(t-n)/(e-n):0}function ka(n,e,t){return(1-t)*n+t*e}function BI(n,e,t,i){return ka(n,e,1-Math.exp(-t*i))}function zI(n,e=1){return e-Math.abs(Ym(n,e*2)-e)}function HI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function VI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function GI(n,e){return n+Math.floor(Math.random()*(e-n+1))}function WI(n,e){return n+Math.random()*(e-n)}function jI(n){return n*(.5-Math.random())}function XI(n){n!==void 0&&(Sv=n);let e=Sv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $I(n){return n*Oa}function KI(n){return n*ko}function qI(n){return(n&n-1)===0&&n!==0}function YI(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function JI(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ZI(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),d=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*d,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*d,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const QI={DEG2RAD:Oa,RAD2DEG:ko,generateUUID:oi,clamp:Ge,euclideanModulo:Ym,mapLinear:kI,inverseLerp:FI,lerp:ka,damp:BI,pingpong:zI,smoothstep:HI,smootherstep:VI,randInt:GI,randFloat:WI,randFloatSpread:jI,seededRandom:XI,degToRad:$I,radToDeg:KI,isPowerOfTwo:qI,ceilPowerOfTwo:YI,floorPowerOfTwo:JI,setQuaternionFromProperEuler:ZI,normalize:ot,denormalize:Qn};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],u=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||d!==g){let m=1-a;const h=l*f+c*p+d*g+u*v,_=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,h*_);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*_;if(l=l*m+f*x,c=c*m+p*x,d=d*m+g*x,u=u*m+v*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=b,c*=b,d*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+d*u+l*p-c*f,e[t+1]=l*g+d*f+c*u-a*p,e[t+2]=c*g+d*p+a*f-l*u,e[t+3]=d*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),u=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"YZX":this._x=f*d*u+c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u-f*p*g;break;case"XZY":this._x=f*d*u-c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ev.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ev.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*d,this.y=i+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jd.copy(this).projectOnVector(e),this.sub(Jd)}reflect(e){return this.sub(Jd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jd=new U,Ev=new Yr;class Be{constructor(e,t,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],_=r[1],y=r[4],x=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*v+a*_+l*b,s[3]=o*m+a*y+l*A,s[6]=o*h+a*x+l*w,s[1]=c*v+d*_+u*b,s[4]=c*m+d*y+u*A,s[7]=c*h+d*x+u*w,s[2]=f*v+p*_+g*b,s[5]=f*m+p*y+g*A,s[8]=f*h+p*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*s,p=c*s-o*l,g=t*u+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*c-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(d*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zd.makeScale(e,t)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new Be;function _E(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ml(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eP(){const n=ml("canvas");return n.style.display="block",n}const Mv={};function xo(n){n in Mv||(Mv[n]=!0,console.warn(n))}function tP(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function nP(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iP(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tv=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wv=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rP(){const n={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=So(r.r),r.g=So(r.g),r.b=So(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Cu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cn]:{primaries:e,whitePoint:i,transfer:Cu,toXYZ:Tv,fromXYZ:wv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Tv,fromXYZ:wv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const Ke=rP();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function So(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ds;class sP{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=ml("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ml("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oP=0;class Jm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oP++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qd(r[o].image)):s.push(Qd(r[o]))}else s=Qd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sP.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aP=0;const ef=new U;class zt extends Ko{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Mr,r=Mr,s=wn,o=Bi,a=Fn,l=yi,c=zt.DEFAULT_ANISOTROPY,d=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aP++}),this.uuid=oi(),this.name="",this.source=new Jm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ef).x}get height(){return this.source.getSize(ef).y}get depth(){return this.source.getSize(ef).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case Ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case Ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=sE;zt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,b=(h+1)/2,A=(d+f)/4,w=(u+v)/4,R=(g+m)/4;return y>x&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=w/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=R/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(f-d)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lP extends Ko{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new zt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends lP{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vE extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cP extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ql.copy(i.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),ec.subVectors(this.max,la),Us.subVectors(e.a,la),Os.subVectors(e.b,la),ks.subVectors(e.c,la),ir.subVectors(Os,Us),rr.subVectors(ks,Os),Qr.subVectors(Us,ks);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Qr.z,Qr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Qr.z,0,-Qr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Qr.y,Qr.x,0];return!tf(t,Us,Os,ks,ec)||(t=[1,0,0,0,1,0,0,0,1],!tf(t,Us,Os,ks,ec))?!1:(tc.crossVectors(ir,rr),t=[tc.x,tc.y,tc.z],tf(t,Us,Os,ks,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new U,new U,new U,new U,new U,new U,new U,new U],jn=new U,Ql=new Si,Us=new U,Os=new U,ks=new U,ir=new U,rr=new U,Qr=new U,la=new U,ec=new U,tc=new U,es=new U;function tf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){es.fromArray(n,s);const a=r.x*Math.abs(es.x)+r.y*Math.abs(es.y)+r.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),d=i.dot(es);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const uP=new Si,ca=new U,nf=new U;class Ei{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const t=ca.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(nf)),this.expandByPoint(ca.copy(e.center).sub(nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ai=new U,rf=new U,nc=new U,sr=new U,sf=new U,ic=new U,of=new U;class ld{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){rf.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(rf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(nc),a=sr.dot(this.direction),l=-sr.dot(nc),c=sr.lengthSq(),d=Math.abs(1-o*o);let u,f,p,g;if(d>0)if(u=o*l-a,f=o*a-l,g=s*d,u>=0)if(f>=-g)if(f<=g){const v=1/d;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(rf).addScaledVector(nc,f),p}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,r,s){sf.subVectors(t,e),ic.subVectors(i,e),of.crossVectors(sf,ic);let o=this.direction.dot(of),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(ic.crossVectors(sr,ic));if(l<0)return null;const c=a*this.direction.dot(sf.cross(sr));if(c<0||l+c>o)return null;const d=-a*sr.dot(of);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,i,r,s,o,a,l,c,d,u,f,p,g,v,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,u,f,p,g,v,m)}set(e,t,i,r,s,o,a,l,c,d,u,f,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fs.setFromMatrixColumn(e,0).length(),s=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*u,g=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*u,g=c*d,v=c*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*u,g=c*d,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*u,g=a*d,v=a*u;t[0]=l*d,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+v,t[5]=o*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dP,e,fP)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),or.crossVectors(i,Sn),or.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),or.crossVectors(i,Sn)),or.normalize(),rc.crossVectors(Sn,or),r[0]=or.x,r[4]=rc.x,r[8]=Sn.x,r[1]=or.y,r[5]=rc.y,r[9]=Sn.y,r[2]=or.z,r[6]=rc.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],_=i[3],y=i[7],x=i[11],b=i[15],A=r[0],w=r[4],R=r[8],M=r[12],S=r[1],I=r[5],B=r[9],F=r[13],W=r[2],Y=r[6],j=r[10],ee=r[14],D=r[3],K=r[7],Z=r[11],ae=r[15];return s[0]=o*A+a*S+l*W+c*D,s[4]=o*w+a*I+l*Y+c*K,s[8]=o*R+a*B+l*j+c*Z,s[12]=o*M+a*F+l*ee+c*ae,s[1]=d*A+u*S+f*W+p*D,s[5]=d*w+u*I+f*Y+p*K,s[9]=d*R+u*B+f*j+p*Z,s[13]=d*M+u*F+f*ee+p*ae,s[2]=g*A+v*S+m*W+h*D,s[6]=g*w+v*I+m*Y+h*K,s[10]=g*R+v*B+m*j+h*Z,s[14]=g*M+v*F+m*ee+h*ae,s[3]=_*A+y*S+x*W+b*D,s[7]=_*w+y*I+x*Y+b*K,s[11]=_*R+y*B+x*j+b*Z,s[15]=_*M+y*F+x*ee+b*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*u-r*c*u-s*a*f+i*c*f+r*a*p-i*l*p)+v*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*d-s*l*d)+m*(+t*c*u-t*a*p-s*o*u+i*o*p+s*a*d-i*c*d)+h*(-r*a*d-t*l*u+t*a*f+r*o*u-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],_=u*m*c-v*f*c+v*l*p-a*m*p-u*l*h+a*f*h,y=g*f*c-d*m*c-g*l*p+o*m*p+d*l*h-o*f*h,x=d*v*c-g*u*c+g*a*p-o*v*p-d*a*h+o*u*h,b=g*u*l-d*v*l-g*a*f+o*v*f+d*a*m-o*u*m,A=t*_+i*y+r*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(v*f*s-u*m*s-v*r*p+i*m*p+u*r*h-i*f*h)*w,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*w,e[3]=(u*l*s-a*f*s-u*r*c+i*f*c+a*r*p-i*l*p)*w,e[4]=y*w,e[5]=(d*m*s-g*f*s+g*r*p-t*m*p-d*r*h+t*f*h)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*w,e[7]=(o*f*s-d*l*s+d*r*c-t*f*c-o*r*p+t*l*p)*w,e[8]=x*w,e[9]=(g*u*s-d*v*s-g*i*p+t*v*p+d*i*h-t*u*h)*w,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*h+t*a*h)*w,e[11]=(d*a*s-o*u*s-d*i*c+t*u*c+o*i*p-t*a*p)*w,e[12]=b*w,e[13]=(d*v*r-g*u*r+g*i*f-t*v*f-d*i*m+t*u*m)*w,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*w,e[15]=(o*u*r-d*a*r+d*i*l-t*u*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,f=s*c,p=s*d,g=s*u,v=o*d,m=o*u,h=a*u,_=l*c,y=l*d,x=l*u,b=i.x,A=i.y,w=i.z;return r[0]=(1-(v+h))*b,r[1]=(p+x)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(f+h))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+y)*w,r[9]=(m-_)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fs.set(r[0],r[1],r[2]).length();const o=Fs.set(r[4],r[5],r[6]).length(),a=Fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const c=1/s,d=1/o,u=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zi){const l=this.elements,c=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===zi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Iu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zi){const l=this.elements,c=1/(t-e),d=1/(i-r),u=1/(o-s),f=(t+e)*c,p=(i+r)*d;let g,v;if(a===zi)g=(o+s)*u,v=-2*u;else if(a===Iu)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fs=new U,Xn=new ze,dP=new U(0,0,0),fP=new U(1,1,1),or=new U,rc=new U,Sn=new U,Av=new ze,bv=new Yr;class xi{constructor(e=0,t=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Av.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Av,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bv.setFromEuler(this),this.setFromQuaternion(bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class yE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hP=0;const Rv=new U,Bs=new Yr,bi=new ze,sc=new U,ua=new U,pP=new U,mP=new Yr,Cv=new U(1,0,0),Iv=new U(0,1,0),Pv=new U(0,0,1),Nv={type:"added"},gP={type:"removed"},zs={type:"childadded",child:null},af={type:"childremoved",child:null};class Tt extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hP++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new U,t=new xi,i=new Yr,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ze},normalMatrix:{value:new Be}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(Iv,e)}rotateZ(e){return this.rotateOnAxis(Pv,e)}translateOnAxis(e,t){return Rv.copy(e).applyQuaternion(this.quaternion),this.position.add(Rv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(Iv,e)}translateZ(e){return this.translateOnAxis(Pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sc.copy(e):sc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ua,sc,this.up):bi.lookAt(sc,ua,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Bs.setFromRotationMatrix(bi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nv),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gP),af.child=e,this.dispatchEvent(af),af.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nv),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,pP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,mP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new U(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new U,Ri=new U,lf=new U,Ci=new U,Hs=new U,Vs=new U,Lv=new U,cf=new U,uf=new U,df=new U,ff=new nt,hf=new nt,pf=new nt;class ei{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$n.subVectors(r,t),Ri.subVectors(i,t),lf.subVectors(e,t);const o=$n.dot($n),a=$n.dot(Ri),l=$n.dot(lf),c=Ri.dot(Ri),d=Ri.dot(lf),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-a*d)*f,g=(o*d-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ff.setScalar(0),hf.setScalar(0),pf.setScalar(0),ff.fromBufferAttribute(e,t),hf.fromBufferAttribute(e,i),pf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ff,s.x),o.addScaledVector(hf,s.y),o.addScaledVector(pf,s.z),o}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),Ri.subVectors(e,t),$n.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),$n.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Hs.subVectors(r,i),Vs.subVectors(s,i),cf.subVectors(e,i);const l=Hs.dot(cf),c=Vs.dot(cf);if(l<=0&&c<=0)return t.copy(i);uf.subVectors(e,r);const d=Hs.dot(uf),u=Vs.dot(uf);if(d>=0&&u<=d)return t.copy(r);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Hs,o);df.subVectors(e,s);const p=Hs.dot(df),g=Vs.dot(df);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Vs,a);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return Lv.subVectors(s,r),a=(u-d)/(u-d+(p-g)),t.copy(r).addScaledVector(Lv,a);const h=1/(m+v+f);return o=v*h,a=f*h,t.copy(i).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},oc={h:0,s:0,l:0};function mf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Ym(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=mf(o,s,e+1/3),this.g=mf(o,s,e),this.b=mf(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=xE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Ke.workingToColorSpace(Yt.copy(this),e),Math.round(Ge(Yt.r*255,0,255))*65536+Math.round(Ge(Yt.g*255,0,255))*256+Math.round(Ge(Yt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Wt){Ke.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(oc);const i=ka(ar.h,oc.h,t),r=ka(ar.s,oc.s,t),s=ka(ar.l,oc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Fe;Fe.NAMES=xE;let _P=0;class vi extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_P++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=yo,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Gh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vh&&(i.blendSrc=this.blendSrc),this.blendDst!==Gh&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gs extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=rE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new U,ac=new $e;let vP=0;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vP++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ap,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}}class SE extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class EE extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ht extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yP=0;const Ln=new ze,gf=new Tt,Gs=new U,En=new Si,da=new Si,Ot=new U;class In extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yP++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_E(e)?EE:SE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return gf.lookAt(e),gf.updateMatrix(),this.applyMatrix4(gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];da.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(En.min,da.min),En.expandByPoint(Ot),Ot.addVectors(En.max,da.max),En.expandByPoint(Ot)):(En.expandByPoint(da.min),En.expandByPoint(da.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(e,c),Ot.add(Gs)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new U,l[R]=new U;const c=new U,d=new U,u=new U,f=new $e,p=new $e,g=new $e,v=new U,m=new U;function h(R,M,S){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),d.sub(c),u.sub(c),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(I),a[R].add(v),a[M].add(v),a[S].add(v),l[R].add(m),l[M].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,M=_.length;R<M;++R){const S=_[R],I=S.start,B=S.count;for(let F=I,W=I+B;F<W;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new U,x=new U,b=new U,A=new U;function w(R){b.fromBufferAttribute(r,R),A.copy(b);const M=a[R];y.copy(M),y.sub(b.multiplyScalar(b.dot(M))).normalize(),x.crossVectors(A,M);const I=x.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,I)}for(let R=0,M=_.length;R<M;++R){const S=_[R],I=S.start,B=S.count;for(let F=I,W=I+B;F<W;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,d=new U,u=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*d;for(let h=0;h<d;h++)f[g++]=c[p++]}return new an(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dv=new ze,ts=new ld,lc=new Ei,Uv=new U,cc=new U,uc=new U,dc=new U,_f=new U,fc=new U,Ov=new U,hc=new U;class Ft extends Tt{constructor(e=new In,t=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],u=s[l];d!==0&&(_f.fromBufferAttribute(u,e),o?fc.addScaledVector(_f,d):fc.addScaledVector(_f.sub(t),d))}t.add(fc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(lc.containsPoint(ts.origin)===!1&&(ts.intersectSphere(lc,Uv)===null||ts.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Dv.copy(s).invert(),ts.copy(e.ray).applyMatrix4(Dv),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=y;x<b;x+=3){const A=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);r=pc(this,h,e,i,c,d,u,A,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=pc(this,o,e,i,c,d,u,_,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=y;x<b;x+=3){const A=x,w=x+1,R=x+2;r=pc(this,h,e,i,c,d,u,A,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=m,y=m+1,x=m+2;r=pc(this,o,e,i,c,d,u,_,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function xP(n,e,t,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;hc.copy(a),hc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(hc);return c<t.near||c>t.far?null:{distance:c,point:hc.clone(),object:n}}function pc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,cc),n.getVertexPosition(l,uc),n.getVertexPosition(c,dc);const d=xP(n,e,t,i,cc,uc,dc,Ov);if(d){const u=new U;ei.getBarycoord(Ov,cc,uc,dc,u),r&&(d.uv=ei.getInterpolatedAttribute(r,a,l,c,u,new $e)),s&&(d.uv1=ei.getInterpolatedAttribute(s,a,l,c,u,new $e)),o&&(d.normal=ei.getInterpolatedAttribute(o,a,l,c,u,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};ei.getNormal(cc,uc,dc,f.normal),d.face=f,d.barycoord=u}return d}class Pl extends In{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(u,2));function g(v,m,h,_,y,x,b,A,w,R,M){const S=x/w,I=b/R,B=x/2,F=b/2,W=A/2,Y=w+1,j=R+1;let ee=0,D=0;const K=new U;for(let Z=0;Z<j;Z++){const ae=Z*I-F;for(let Me=0;Me<Y;Me++){const Ye=Me*S-B;K[v]=Ye*_,K[m]=ae*y,K[h]=W,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[h]=A>0?1:-1,d.push(K.x,K.y,K.z),u.push(Me/w),u.push(1-Z/R),ee+=1}}for(let Z=0;Z<R;Z++)for(let ae=0;ae<w;ae++){const Me=f+ae+Y*Z,Ye=f+ae+Y*(Z+1),$=f+(ae+1)+Y*(Z+1),oe=f+(ae+1)+Y*Z;l.push(Me,Ye,oe),l.push(Ye,$,oe),D+=6}a.addGroup(p,D,M),p+=D,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Fo(n[t]);for(const r in i)e[r]=i[r]}return e}function SP(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ME(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const EP={clone:Fo,merge:nn};var MP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hr extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MP,this.fragmentShader=TP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=SP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class TE extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new U,kv=new $e,Fv=new $e;class pn extends TE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,kv,Fv),t.subVectors(Fv,kv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,js=1;class wP extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Ws,js,e,t);r.layers=this.layers,this.add(r);const s=new pn(Ws,js,e,t);s.layers=this.layers,this.add(s);const o=new pn(Ws,js,e,t);o.layers=this.layers,this.add(o);const a=new pn(Ws,js,e,t);a.layers=this.layers,this.add(a);const l=new pn(Ws,js,e,t);l.layers=this.layers,this.add(l);const c=new pn(Ws,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Iu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wE extends zt{constructor(e=[],t=Do,i,r,s,o,a,l,c,d){super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AP extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wE(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pl(5,5,5),s=new Hr({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:kr});s.uniforms.tEquirect.value=t;const o=new Ft(r,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=wn),new wP(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class ii extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bP={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class RP extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class CP{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ap,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new U;class Zm{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zm(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bv=new U,zv=new nt,Hv=new nt,IP=new U,Vv=new ze,mc=new U,yf=new Ei,Gv=new ze,xf=new ld;class PP extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mv,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,mc),this.boundingBox.expandByPoint(mc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,mc),this.boundingSphere.expandByPoint(mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yf.copy(this.boundingSphere),yf.applyMatrix4(r),e.ray.intersectsSphere(yf)!==!1&&(Gv.copy(r).invert(),xf.copy(e.ray).applyMatrix4(Gv),!(this.boundingBox!==null&&xf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===TI?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;zv.fromBufferAttribute(r.attributes.skinIndex,e),Hv.fromBufferAttribute(r.attributes.skinWeight,e),Bv.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Hv.getComponent(s);if(o!==0){const a=zv.getComponent(s);Vv.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(IP.copy(Bv).applyMatrix4(Vv),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class AE extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bE extends zt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=on,d=on,u,f){super(null,o,a,l,c,d,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wv=new ze,NP=new ze;class Qm{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:NP;Wv.multiplyMatrices(a,t[s]),Wv.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Qm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new bE(t,e,e,Fn,ni);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new AE),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class bp extends an{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new ze,jv=new ze,gc=[],Xv=new Si,LP=new ze,fa=new Ft,ha=new Ei;class DP extends Ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bp(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,LP)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),Xv.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Xv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),ha.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(i),e.ray.intersectsSphere(ha)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xs),jv.multiplyMatrices(i,Xs),fa.matrixWorld=jv,fa.raycast(e,gc);for(let o=0,a=gc.length;o<a;o++){const l=gc[o];l.instanceId=s,l.object=this,t.push(l)}gc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new bE(new Float32Array(r*this.count),r,this.count,Xm,ni));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sf=new U,UP=new U,OP=new Be;class cs{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sf.subVectors(i,t).cross(UP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||OP.getNormalMatrix(e),r=this.coplanarPoint(Sf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Ei,_c=new U;class eg{constructor(e=new cs,t=new cs,i=new cs,r=new cs,s=new cs,o=new cs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],u=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],_=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-h).normalize(),i[1].setComponents(l+s,f+c,m+p,x+h).normalize(),i[2].setComponents(l+o,f+d,m+g,x+_).normalize(),i[3].setComponents(l-o,f-d,m-g,x-_).normalize(),i[4].setComponents(l-a,f-u,m-v,x-y).normalize(),t===zi)i[5].setComponents(l+a,f+u,m+v,x+y).normalize();else if(t===Iu)i[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_c.x=r.normal.x>0?e.max.x:e.min.x,_c.y=r.normal.y>0?e.max.y:e.min.y,_c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class RE extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pu=new U,Nu=new U,$v=new ze,pa=new ld,vc=new Ei,Ef=new U,Kv=new U;class tg extends Tt{constructor(e=new In,t=new RE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Pu.fromBufferAttribute(t,r-1),Nu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Pu.distanceTo(Nu);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(r),vc.radius+=s,e.ray.intersectsSphere(vc)===!1)return;$v.copy(r).invert(),pa.copy(e.ray).applyMatrix4($v);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=d.getX(v),_=d.getX(v+1),y=yc(this,e,pa,l,h,_,v);y&&t.push(y)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(p),h=yc(this,e,pa,l,v,m,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=yc(this,e,pa,l,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=yc(this,e,pa,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Pu.fromBufferAttribute(a,r),Nu.fromBufferAttribute(a,s),t.distanceSqToSegment(Pu,Nu,Ef,Kv)>i)return;Ef.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ef);if(!(c<e.near||c>e.far))return{distance:c,point:Kv.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const qv=new U,Yv=new U;class kP extends tg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)qv.fromBufferAttribute(t,r),Yv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qv.distanceTo(Yv);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class FP extends tg{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class CE extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jv=new ze,Rp=new ld,xc=new Ei,Sc=new U;class BP extends Tt{constructor(e=new In,t=new CE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(r),xc.radius+=s,e.ray.intersectsSphere(xc)===!1)return;Jv.copy(r).invert(),Rp.copy(e.ray).applyMatrix4(Jv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);Sc.fromBufferAttribute(u,m),Zv(Sc,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,v=p;g<v;g++)Sc.fromBufferAttribute(u,g),Zv(Sc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zv(n,e,t,i,r,s,o){const a=Rp.distanceSqToPoint(n);if(a<t){const l=new U;Rp.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class IE extends zt{constructor(e,t,i=As,r,s,o,a=on,l=on,c,d=dl,u=1){if(d!==dl&&d!==fl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cd extends In{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],f=[],p=[];let g=0;const v=[],m=i/2;let h=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function _(){const x=new U,b=new U;let A=0;const w=(t-e)/i;for(let R=0;R<=s;R++){const M=[],S=R/s,I=S*(t-e)+e;for(let B=0;B<=r;B++){const F=B/r,W=F*l+a,Y=Math.sin(W),j=Math.cos(W);b.x=I*Y,b.y=-S*i+m,b.z=I*j,u.push(b.x,b.y,b.z),x.set(Y,w,j).normalize(),f.push(x.x,x.y,x.z),p.push(F,1-S),M.push(g++)}v.push(M)}for(let R=0;R<r;R++)for(let M=0;M<s;M++){const S=v[M][R],I=v[M+1][R],B=v[M+1][R+1],F=v[M][R+1];(e>0||M!==0)&&(d.push(S,I,F),A+=3),(t>0||M!==s-1)&&(d.push(I,B,F),A+=3)}c.addGroup(h,A,0),h+=A}function y(x){const b=g,A=new $e,w=new U;let R=0;const M=x===!0?e:t,S=x===!0?1:-1;for(let B=1;B<=r;B++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const I=g;for(let B=0;B<=r;B++){const W=B/r*l+a,Y=Math.cos(W),j=Math.sin(W);w.x=M*j,w.y=m*S,w.z=M*Y,u.push(w.x,w.y,w.z),f.push(0,S,0),A.x=Y*.5+.5,A.y=j*.5*S+.5,p.push(A.x,A.y),g++}for(let B=0;B<r;B++){const F=b+B,W=I+B;x===!0?d.push(W,W+1,F):d.push(W+1,W,F),R+=3}c.addGroup(h,R,x===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ng extends cd{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ng(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ud extends In{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,u=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<d;h++){const _=h*f-o;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const y=_+c*h,x=_+c*(h+1),b=_+1+c*(h+1),A=_+1+c*h;p.push(y,x,A),p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lu extends In{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new U,f=new U,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const _=[],y=h/i;let x=0;h===0&&o===0?x=.5/t:h===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const A=b/t;u.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+x,1-y),_.push(c++)}d.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const y=d[h][_+1],x=d[h][_],b=d[h+1][_],A=d[h+1][_+1];(h!==0||o>0)&&p.push(y,x,A),(h!==i-1||l<Math.PI)&&p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ig extends In{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new U,u=new U,f=new U;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,_=(r+1)*p+g;o.push(v,m,_),o.push(m,h,_)}this.setIndex(o),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ig(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gl extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mE,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mi extends gl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zP extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HP extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ec(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function VP(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function GP(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Qv(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function PE(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Nl{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class WP extends Nl{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gv,endingEnd:gv}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case _v:s=e,a=2*t-i;break;case vv:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _v:o=e,l=2*i-t;break;case vv:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,h=-f*m+2*f*v-f*g,_=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*v+.5*g,x=p*m-p*v;for(let b=0;b!==a;++b)s[b]=h*o[d+b]+_*o[c+b]+y*o[l+b]+x*o[u+b];return s}}class jP extends Nl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(r-t),u=1-d;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*d;return s}}class XP extends Nl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ci{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ec(t,this.TimeBufferType),this.values=Ec(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ec(e.times,Array),values:Ec(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new XP(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jP(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new WP(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hl:t=this.InterpolantFactoryMethodDiscrete;break;case pl:t=this.InterpolantFactoryMethodLinear;break;case Yd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hl;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return Yd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&VP(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Yd,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{const u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){const v=t[u+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=pl;class qo extends ci{constructor(e,t,i){super(e,t,i)}}qo.prototype.ValueTypeName="bool";qo.prototype.ValueBufferType=Array;qo.prototype.DefaultInterpolation=hl;qo.prototype.InterpolantFactoryMethodLinear=void 0;qo.prototype.InterpolantFactoryMethodSmooth=void 0;class NE extends ci{constructor(e,t,i,r){super(e,t,i,r)}}NE.prototype.ValueTypeName="color";class Bo extends ci{constructor(e,t,i,r){super(e,t,i,r)}}Bo.prototype.ValueTypeName="number";class $P extends Nl{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let d=c+a;c!==d;c+=4)Yr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class zo extends ci{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new $P(this.times,this.values,this.getValueSize(),e)}}zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;class Yo extends ci{constructor(e,t,i){super(e,t,i)}}Yo.prototype.ValueTypeName="string";Yo.prototype.ValueBufferType=Array;Yo.prototype.DefaultInterpolation=hl;Yo.prototype.InterpolantFactoryMethodLinear=void 0;Yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends ci{constructor(e,t,i,r){super(e,t,i,r)}}Ho.prototype.ValueTypeName="vector";class KP{constructor(e="",t=-1,i=[],r=wI){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(YP(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ci.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=GP(l);l=Qv(l,1,d),c=Qv(c,1,d),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Bo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(s);if(d&&d.length>1){const u=d[1];let f=r[u];f||(r[u]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,f,p,g,v){if(p.length!==0){const m=[],h=[];PE(p,m,h,g),m.length!==0&&v.push(new u(f,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)p[f[g].morphTargets[v]]=-1;for(const v in p){const m=[],h=[];for(let _=0;_!==f[g].morphTargets.length;++_){const y=f[g];m.push(y.time),h.push(y.morphTarget===v?1:0)}r.push(new Bo(".morphTargetInfluence["+v+"]",m,h))}l=p.length*o}else{const p=".bones["+t[u].name+"]";i(Ho,p+".position",f,"pos",r),i(zo,p+".quaternion",f,"rot",r),i(Ho,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qP(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bo;case"vector":case"vector2":case"vector3":case"vector4":return Ho;case"color":return NE;case"quaternion":return zo;case"bool":case"boolean":return qo;case"string":return Yo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function YP(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qP(n.type);if(n.times===void 0){const t=[],i=[];PE(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Tr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class JP{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const ZP=new JP;class Jo{constructor(e){this.manager=e!==void 0?e:ZP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class QP extends Error{constructor(e,t){super(e),this.response=t}}class LE extends Jo{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Tr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:i,onError:r});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Ii[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let v=0;const m=new ReadableStream({start(h){_();function _(){u.read().then(({done:y,value:x})=>{if(y)h.close();else{v+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let A=0,w=d.length;A<w;A++){const R=d[A];R.onProgress&&R.onProgress(b)}h.enqueue(x),_()}},y=>{h.error(y)})}}});return new Response(m)}else throw new QP(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Tr.add(e,c);const d=Ii[e];delete Ii[e];for(let u=0,f=d.length;u<f;u++){const p=d[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=Ii[e];if(d===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let u=0,f=d.length;u<f;u++){const p=d[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class eN extends Jo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Tr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ml("img");function l(){d(),Tr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){d(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class tN extends Jo{constructor(e){super(e)}load(e,t,i,r){const s=new zt,o=new eN(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class dd extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Mf=new ze,e0=new U,t0=new U;class rg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eg,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;e0.setFromMatrixPosition(e.matrixWorld),t.position.copy(e0),t0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(t0),t.updateMatrixWorld(),Mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nN extends rg{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ko*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class iN extends dd{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new nN}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const n0=new ze,ma=new U,Tf=new U;class rN extends rg{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ma.setFromMatrixPosition(e.matrixWorld),i.position.copy(ma),Tf.copy(i.position),Tf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Tf),i.updateMatrixWorld(),r.makeTranslation(-ma.x,-ma.y,-ma.z),n0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(n0)}}class sN extends dd{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new rN}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fd extends TE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class oN extends rg{constructor(){super(new fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cp extends dd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new oN}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aN extends dd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const wf=new WeakMap;class lN extends Jo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Tr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(wf.has(o)===!0)r&&r(wf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Tr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),wf.set(l,c),Tr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Tr.add(e,l),s.manager.itemStart(e)}}class cN extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sg="\\[\\]\\.:\\/",uN=new RegExp("["+sg+"]","g"),og="[^"+sg+"]",dN="[^"+sg.replace("\\.","")+"]",fN=/((?:WC+[\/:])*)/.source.replace("WC",og),hN=/(WCOD+)?/.source.replace("WCOD",dN),pN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",og),mN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",og),gN=new RegExp("^"+fN+hN+pN+mN+"$"),_N=["material","materials","bones","map"];class vN{constructor(e,t,i){const r=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uN,"")}static parseTrackName(e){const t=gN.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);_N.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=vN;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function i0(n,e,t,i){const r=yN(i);switch(t){case uE:return n*e;case Xm:return n*e/r.components*r.byteLength;case $m:return n*e/r.components*r.byteLength;case fE:return n*e*2/r.components*r.byteLength;case Km:return n*e*2/r.components*r.byteLength;case dE:return n*e*3/r.components*r.byteLength;case Fn:return n*e*4/r.components*r.byteLength;case qm:return n*e*4/r.components*r.byteLength;case Gc:case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jc:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(n,16)*Math.max(e,8)/4;case Qh:case tp:return Math.max(n,8)*Math.max(e,8)/2;case ip:case rp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case dp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $c:case xp:case Sp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hE:case Ep:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mp:case Tp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yN(n){switch(n){case yi:case aE:return{byteLength:1,components:1};case cl:case lE:case Il:return{byteLength:2,components:1};case Wm:case jm:return{byteLength:2,components:4};case As:case Gm:case ni:return{byteLength:4,components:1};case cE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function DE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xN(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var SN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EN=`#ifdef USE_ALPHAHASH
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
#endif`,MN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bN=`#ifdef USE_AOMAP
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
#endif`,RN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CN=`#ifdef USE_BATCHING
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
#endif`,IN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DN=`#ifdef USE_IRIDESCENCE
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
#endif`,UN=`#ifdef USE_BUMPMAP
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
#endif`,ON=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GN=`#if defined( USE_COLOR_ALPHA )
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
#endif`,WN=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,jN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XN=`vec3 transformedNormal = objectNormal;
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
#endif`,$N=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JN="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QN=`#ifdef USE_ENVMAP
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
#endif`,eL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tL=`#ifdef USE_ENVMAP
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
#endif`,nL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iL=`#ifdef USE_ENVMAP
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
#endif`,rL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lL=`#ifdef USE_GRADIENTMAP
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
}`,cL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fL=`uniform bool receiveShadow;
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
#endif`,hL=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,pL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_L=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,yL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xL=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,SL=`#if defined( RE_IndirectDiffuse )
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
#endif`,EL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ML=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TL=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wL=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AL=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IL=`#if defined( USE_POINTS_UV )
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
#endif`,PL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OL=`#ifdef USE_MORPHTARGETS
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
#endif`,kL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GL=`#ifdef USE_NORMALMAP
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
#endif`,WL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$L=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sD=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,oD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aD=`#ifdef USE_SKINNING
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
#endif`,lD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cD=`#ifdef USE_SKINNING
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
#endif`,uD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pD=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mD=`#ifdef USE_TRANSMISSION
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
#endif`,gD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SD=`uniform sampler2D t2D;
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
}`,ED=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AD=`#include <common>
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
}`,bD=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RD=`#define DISTANCE
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
}`,CD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,ID=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ND=`uniform float scale;
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
}`,LD=`uniform vec3 diffuse;
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
}`,DD=`#include <common>
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
}`,UD=`uniform vec3 diffuse;
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
}`,OD=`#define LAMBERT
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
}`,kD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,FD=`#define MATCAP
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
}`,BD=`#define MATCAP
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
}`,zD=`#define NORMAL
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
}`,HD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VD=`#define PHONG
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
}`,GD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,WD=`#define STANDARD
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
}`,jD=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,XD=`#define TOON
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
}`,$D=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,KD=`uniform float size;
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
}`,qD=`uniform vec3 diffuse;
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
}`,YD=`#include <common>
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
}`,JD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ZD=`uniform float rotation;
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
}`,QD=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:SN,alphahash_pars_fragment:EN,alphamap_fragment:MN,alphamap_pars_fragment:TN,alphatest_fragment:wN,alphatest_pars_fragment:AN,aomap_fragment:bN,aomap_pars_fragment:RN,batching_pars_vertex:CN,batching_vertex:IN,begin_vertex:PN,beginnormal_vertex:NN,bsdfs:LN,iridescence_fragment:DN,bumpmap_pars_fragment:UN,clipping_planes_fragment:ON,clipping_planes_pars_fragment:kN,clipping_planes_pars_vertex:FN,clipping_planes_vertex:BN,color_fragment:zN,color_pars_fragment:HN,color_pars_vertex:VN,color_vertex:GN,common:WN,cube_uv_reflection_fragment:jN,defaultnormal_vertex:XN,displacementmap_pars_vertex:$N,displacementmap_vertex:KN,emissivemap_fragment:qN,emissivemap_pars_fragment:YN,colorspace_fragment:JN,colorspace_pars_fragment:ZN,envmap_fragment:QN,envmap_common_pars_fragment:eL,envmap_pars_fragment:tL,envmap_pars_vertex:nL,envmap_physical_pars_fragment:hL,envmap_vertex:iL,fog_vertex:rL,fog_pars_vertex:sL,fog_fragment:oL,fog_pars_fragment:aL,gradientmap_pars_fragment:lL,lightmap_pars_fragment:cL,lights_lambert_fragment:uL,lights_lambert_pars_fragment:dL,lights_pars_begin:fL,lights_toon_fragment:pL,lights_toon_pars_fragment:mL,lights_phong_fragment:gL,lights_phong_pars_fragment:_L,lights_physical_fragment:vL,lights_physical_pars_fragment:yL,lights_fragment_begin:xL,lights_fragment_maps:SL,lights_fragment_end:EL,logdepthbuf_fragment:ML,logdepthbuf_pars_fragment:TL,logdepthbuf_pars_vertex:wL,logdepthbuf_vertex:AL,map_fragment:bL,map_pars_fragment:RL,map_particle_fragment:CL,map_particle_pars_fragment:IL,metalnessmap_fragment:PL,metalnessmap_pars_fragment:NL,morphinstance_vertex:LL,morphcolor_vertex:DL,morphnormal_vertex:UL,morphtarget_pars_vertex:OL,morphtarget_vertex:kL,normal_fragment_begin:FL,normal_fragment_maps:BL,normal_pars_fragment:zL,normal_pars_vertex:HL,normal_vertex:VL,normalmap_pars_fragment:GL,clearcoat_normal_fragment_begin:WL,clearcoat_normal_fragment_maps:jL,clearcoat_pars_fragment:XL,iridescence_pars_fragment:$L,opaque_fragment:KL,packing:qL,premultiplied_alpha_fragment:YL,project_vertex:JL,dithering_fragment:ZL,dithering_pars_fragment:QL,roughnessmap_fragment:eD,roughnessmap_pars_fragment:tD,shadowmap_pars_fragment:nD,shadowmap_pars_vertex:iD,shadowmap_vertex:rD,shadowmask_pars_fragment:sD,skinbase_vertex:oD,skinning_pars_vertex:aD,skinning_vertex:lD,skinnormal_vertex:cD,specularmap_fragment:uD,specularmap_pars_fragment:dD,tonemapping_fragment:fD,tonemapping_pars_fragment:hD,transmission_fragment:pD,transmission_pars_fragment:mD,uv_pars_fragment:gD,uv_pars_vertex:_D,uv_vertex:vD,worldpos_vertex:yD,background_vert:xD,background_frag:SD,backgroundCube_vert:ED,backgroundCube_frag:MD,cube_vert:TD,cube_frag:wD,depth_vert:AD,depth_frag:bD,distanceRGBA_vert:RD,distanceRGBA_frag:CD,equirect_vert:ID,equirect_frag:PD,linedashed_vert:ND,linedashed_frag:LD,meshbasic_vert:DD,meshbasic_frag:UD,meshlambert_vert:OD,meshlambert_frag:kD,meshmatcap_vert:FD,meshmatcap_frag:BD,meshnormal_vert:zD,meshnormal_frag:HD,meshphong_vert:VD,meshphong_frag:GD,meshphysical_vert:WD,meshphysical_frag:jD,meshtoon_vert:XD,meshtoon_frag:$D,points_vert:KD,points_frag:qD,shadow_vert:YD,shadow_frag:JD,sprite_vert:ZD,sprite_frag:QD},ce={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},fi={basic:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:nn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:nn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:nn([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:nn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:nn([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:nn([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:nn([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:nn([ce.lights,ce.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fi.physical={uniforms:nn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Mc={r:0,b:0,g:0},is=new xi,e2=new ze;function t2(n,e,t,i,r,s,o){const a=new Fe(0);let l=s===!0?0:1,c,d,u=null,f=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const b=g(y);b===null?h(a,l):b&&b.isColor&&(h(b,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===ad)?(d===void 0&&(d=new Ft(new Pl(1,1,1),new Hr({name:"BackgroundCubeMaterial",uniforms:Fo(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),is.copy(x.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(e2.makeRotationFromEuler(is)),d.material.toneMapped=Ke.getTransfer(b.colorSpace)!==ct,(u!==b||f!==b.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=b,f=b.version,p=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ft(new ud(2,2),new Hr({name:"BackgroundMaterial",uniforms:Fo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,x){y.getRGB(Mc,ME(n)),i.buffers.color.setClear(Mc.r,Mc.g,Mc.b,x,o)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:v,addToRenderList:m,dispose:_}}function n2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,I,B,F,W){let Y=!1;const j=u(F,B,I);s!==j&&(s=j,c(s.object)),Y=p(S,F,B,W),Y&&g(S,F,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(S,I,B,F),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function d(S){return n.deleteVertexArray(S)}function u(S,I,B){const F=B.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let Y=W[I.id];Y===void 0&&(Y={},W[I.id]=Y);let j=Y[F];return j===void 0&&(j=f(l()),Y[F]=j),j}function f(S){const I=[],B=[],F=[];for(let W=0;W<t;W++)I[W]=0,B[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,I,B,F){const W=s.attributes,Y=I.attributes;let j=0;const ee=B.getAttributes();for(const D in ee)if(ee[D].location>=0){const Z=W[D];let ae=Y[D];if(ae===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;j++}return s.attributesNum!==j||s.index!==F}function g(S,I,B,F){const W={},Y=I.attributes;let j=0;const ee=B.getAttributes();for(const D in ee)if(ee[D].location>=0){let Z=Y[D];Z===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),W[D]=ae,j++}s.attributes=W,s.attributesNum=j,s.index=F}function v(){const S=s.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function m(S){h(S,0)}function h(S,I){const B=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;B[S]=1,F[S]===0&&(n.enableVertexAttribArray(S),F[S]=1),W[S]!==I&&(n.vertexAttribDivisor(S,I),W[S]=I)}function _(){const S=s.newAttributes,I=s.enabledAttributes;for(let B=0,F=I.length;B<F;B++)I[B]!==S[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function y(S,I,B,F,W,Y,j){j===!0?n.vertexAttribIPointer(S,I,B,W,Y):n.vertexAttribPointer(S,I,B,F,W,Y)}function x(S,I,B,F){v();const W=F.attributes,Y=B.getAttributes(),j=I.defaultAttributeValues;for(const ee in Y){const D=Y[ee];if(D.location>=0){let K=W[ee];if(K===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const Z=K.normalized,ae=K.itemSize,Me=e.get(K);if(Me===void 0)continue;const Ye=Me.buffer,$=Me.type,oe=Me.bytesPerElement,_e=$===n.INT||$===n.UNSIGNED_INT||K.gpuType===Gm;if(K.isInterleavedBufferAttribute){const ue=K.data,Ae=ue.stride,Qe=K.offset;if(ue.isInstancedInterleavedBuffer){for(let Le=0;Le<D.locationSize;Le++)h(D.location+Le,ue.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Le=0;Le<D.locationSize;Le++)m(D.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Le=0;Le<D.locationSize;Le++)y(D.location+Le,ae/D.locationSize,$,Z,Ae*oe,(Qe+ae/D.locationSize*Le)*oe,_e)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)h(D.location+ue,K.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<D.locationSize;ue++)m(D.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ue=0;ue<D.locationSize;ue++)y(D.location+ue,ae/D.locationSize,$,Z,ae*oe,ae/D.locationSize*ue*oe,_e)}}else if(j!==void 0){const Z=j[ee];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(D.location,Z);break;case 3:n.vertexAttrib3fv(D.location,Z);break;case 4:n.vertexAttrib4fv(D.location,Z);break;default:n.vertexAttrib1fv(D.location,Z)}}}}_()}function b(){R();for(const S in i){const I=i[S];for(const B in I){const F=I[B];for(const W in F)d(F[W].object),delete F[W];delete I[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const B in I){const F=I[B];for(const W in F)d(F[W].object),delete F[W];delete I[B]}delete i[S.id]}function w(S){for(const I in i){const B=i[I];if(B[S.id]===void 0)continue;const F=B[S.id];for(const W in F)d(F[W].object),delete F[W];delete B[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function i2(n,e,t){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,i,1)}function l(c,d,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Fn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==yi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ni&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function s2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new cs,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||r;return r=f,i=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,y=_*4;let x=h.clippingState||null;l.value=x,x=d(g,f,y,p);for(let b=0;b!==y;++b)x[b]=t[b];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function o2(n){let e=new WeakMap;function t(o,a){return a===Jh?o.mapping=Do:a===Zh&&(o.mapping=Uo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jh||a===Zh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new AP(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ao=4,r0=[.125,.215,.35,.446,.526,.582],fs=20,Af=new fd,s0=new Fe;let bf=null,Rf=0,Cf=0,If=!1;const us=(1+Math.sqrt(5))/2,$s=1/us,o0=[new U(-us,$s,0),new U(us,$s,0),new U(-$s,0,us),new U($s,0,us),new U(0,us,-$s),new U(0,us,$s),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],a2=new U;class a0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=a2}=s;bf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Rf,Cf),this._renderer.xr.enabled=If,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Do||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Il,format:Fn,colorSpace:cn,depthBuffer:!1},r=l0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l2(s)),this._blurMaterial=c2(s,e,t)}return r}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Af)}_sceneToCubeUV(e,t,i,r,s){const l=new pn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(s0),u.toneMapping=Fr,u.autoClear=!1;const g=new gs({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),v=new Ft(new Pl,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(s0),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const x=this._cubeSize;Tc(r,y*x,_>2?x:0,x,x),u.setRenderTarget(r),m&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Do||e.mapping===Uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Af)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=o0[(r-s-1)%o0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ft(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fs-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):fs;m>fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const h=[];let _=0;for(let w=0;w<fs;++w){const R=w/v,M=Math.exp(-R*R/2);h.push(M),w===0?_+=M:w<m&&(_+=2*M)}for(let w=0;w<h.length;w++)h[w]=h[w]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[r],b=3*x*(r>y-ao?r-y+ao:0),A=4*(this._cubeSize-x);Tc(t,b,A,3*x,2*x),l.setRenderTarget(t),l.render(u,Af)}}function l2(n){const e=[],t=[],i=[];let r=n;const s=n-ao+1+r0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ao?l=r0[o-n+ao-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,v=3,m=2,h=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,R=A>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];_.set(M,v*g*A),y.set(f,m*g*A);const S=[A,A,A,A,A,A];x.set(S,h*g*A)}const b=new In;b.setAttribute("position",new an(_,v)),b.setAttribute("uv",new an(y,m)),b.setAttribute("faceIndex",new an(x,h)),e.push(b),r>ao&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function l0(n,e,t){const i=new bs(n,e,t);return i.texture.mapping=ad,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function c2(n,e,t){const i=new Float32Array(fs),r=new U(0,1,0);return new Hr({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ag(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function c0(){return new Hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ag(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function u0(){return new Hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ag(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function ag(){return`

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
	`}function u2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jh||l===Zh,d=l===Do||l===Uo;if(c||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new a0(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new a0(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function d2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&xo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function f2(n,e,t,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){const b=_[y+0],A=_[y+1],w=_[y+2];f.push(b,A,A,w,w,b)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const b=y+0,A=y+1,w=y+2;f.push(b,A,A,w,w,b)}}else return;const m=new(_E(f)?EE:SE)(f,1);m.version=v;const h=s.get(u);h&&e.remove(h),s.set(u,m)}function d(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function h2(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function u(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_]*v[_];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function p2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function m2(n,e,t){const i=new WeakMap,r=new nt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*A*4*u),R=new vE(w,b,A,u);R.type=ni,R.needsUpdate=!0;const M=x*4;for(let I=0;I<u;I++){const B=h[I],F=_[I],W=y[I],Y=b*A*4*I;for(let j=0;j<B.count;j++){const ee=j*M;g===!0&&(r.fromBufferAttribute(B,j),w[Y+ee+0]=r.x,w[Y+ee+1]=r.y,w[Y+ee+2]=r.z,w[Y+ee+3]=0),v===!0&&(r.fromBufferAttribute(F,j),w[Y+ee+4]=r.x,w[Y+ee+5]=r.y,w[Y+ee+6]=r.z,w[Y+ee+7]=0),m===!0&&(r.fromBufferAttribute(W,j),w[Y+ee+8]=r.x,w[Y+ee+9]=r.y,w[Y+ee+10]=r.z,w[Y+ee+11]=W.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new $e(b,A)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function g2(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const UE=new zt,d0=new IE(1,1),OE=new vE,kE=new cP,FE=new wE,f0=[],h0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function Zo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=f0[r];if(s===void 0&&(s=new Float32Array(r),f0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hd(n,e){let t=h0[e];t===void 0&&(t=new Int32Array(e),h0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function v2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function x2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function S2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;g0.set(i),n.uniformMatrix2fv(this.addr,!1,g0),Ut(t,i)}}function E2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;m0.set(i),n.uniformMatrix3fv(this.addr,!1,m0),Ut(t,i)}}function M2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;p0.set(i),n.uniformMatrix4fv(this.addr,!1,p0),Ut(t,i)}}function T2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function b2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function R2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function N2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(d0.compareFunction=gE,s=d0):s=UE,t.setTexture2D(e||s,r)}function L2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||kE,r)}function D2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||FE,r)}function U2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||OE,r)}function O2(n){switch(n){case 5126:return _2;case 35664:return v2;case 35665:return y2;case 35666:return x2;case 35674:return S2;case 35675:return E2;case 35676:return M2;case 5124:case 35670:return T2;case 35667:case 35671:return w2;case 35668:case 35672:return A2;case 35669:case 35673:return b2;case 5125:return R2;case 36294:return C2;case 36295:return I2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return N2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return U2}}function k2(n,e){n.uniform1fv(this.addr,e)}function F2(n,e){const t=Zo(e,this.size,2);n.uniform2fv(this.addr,t)}function B2(n,e){const t=Zo(e,this.size,3);n.uniform3fv(this.addr,t)}function z2(n,e){const t=Zo(e,this.size,4);n.uniform4fv(this.addr,t)}function H2(n,e){const t=Zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V2(n,e){const t=Zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function G2(n,e){const t=Zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function W2(n,e){n.uniform1iv(this.addr,e)}function j2(n,e){n.uniform2iv(this.addr,e)}function X2(n,e){n.uniform3iv(this.addr,e)}function $2(n,e){n.uniform4iv(this.addr,e)}function K2(n,e){n.uniform1uiv(this.addr,e)}function q2(n,e){n.uniform2uiv(this.addr,e)}function Y2(n,e){n.uniform3uiv(this.addr,e)}function J2(n,e){n.uniform4uiv(this.addr,e)}function Z2(n,e,t){const i=this.cache,r=e.length,s=hd(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||UE,s[o])}function Q2(n,e,t){const i=this.cache,r=e.length,s=hd(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||kE,s[o])}function eU(n,e,t){const i=this.cache,r=e.length,s=hd(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||FE,s[o])}function tU(n,e,t){const i=this.cache,r=e.length,s=hd(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||OE,s[o])}function nU(n){switch(n){case 5126:return k2;case 35664:return F2;case 35665:return B2;case 35666:return z2;case 35674:return H2;case 35675:return V2;case 35676:return G2;case 5124:case 35670:return W2;case 35667:case 35671:return j2;case 35668:case 35672:return X2;case 35669:case 35673:return $2;case 5125:return K2;case 36294:return q2;case 36295:return Y2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return eU;case 36289:case 36303:case 36311:case 36292:return tU}}class iU{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=O2(t.type)}}class rU{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nU(t.type)}}class sU{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Pf=/(\w+)(\])?(\[|\.)?/g;function _0(n,e){n.seq.push(e),n.map[e.id]=e}function oU(n,e,t){const i=n.name,r=i.length;for(Pf.lastIndex=0;;){const s=Pf.exec(i),o=Pf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_0(t,c===void 0?new iU(a,n,e):new rU(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new sU(a),_0(t,u)),t=u}}}class Kc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);oU(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function v0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const aU=37297;let lU=0;function cU(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const y0=new Be;function uU(n){Ke._getMatrix(y0,Ke.workingColorSpace,n);const e=`mat3( ${y0.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Cu:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function x0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cU(n.getShaderSource(e),o)}else return r}function dU(n,e){const t=uU(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fU(n,e){let t;switch(e){case _I:t="Linear";break;case vI:t="Reinhard";break;case yI:t="Cineon";break;case xI:t="ACESFilmic";break;case EI:t="AgX";break;case MI:t="Neutral";break;case SI:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wc=new U;function hU(){Ke.getLuminanceCoefficients(wc);const n=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pU(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function mU(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gU(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ta(n){return n!==""}function S0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _U=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(n){return n.replace(_U,yU)}const vU=new Map;function yU(n,e){let t=Ve[e];if(t===void 0){const i=vU.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ip(t)}const xU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(n){return n.replace(xU,SU)}function SU(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function T0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EU(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===YC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function MU(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Do:case Uo:e="ENVMAP_TYPE_CUBE";break;case ad:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TU(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function wU(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rE:e="ENVMAP_BLENDING_MULTIPLY";break;case mI:e="ENVMAP_BLENDING_MIX";break;case gI:e="ENVMAP_BLENDING_ADD";break}return e}function AU(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bU(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=EU(t),c=MU(t),d=TU(t),u=wU(t),f=AU(t),p=pU(t),g=mU(s),v=r.createProgram();let m,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ta).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ta).join(`
`),h.length>0&&(h+=`
`)):(m=[T0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),h=[T0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Fr?fU("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,dU("linearToOutputTexel",t.outputColorSpace),hU(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),o=Ip(o),o=S0(o,t),o=E0(o,t),a=Ip(a),a=S0(a,t),a=E0(a,t),o=M0(o),a=M0(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=_+m+o,x=_+h+a,b=v0(r,r.VERTEX_SHADER,y),A=v0(r,r.FRAGMENT_SHADER,x);r.attachShader(v,b),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(I){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(A).trim();let Y=!0,j=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,b,A);else{const ee=x0(r,b,"vertex"),D=x0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ee+`
`+D)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||W==="")&&(j=!1);j&&(I.diagnostics={runnable:Y,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:h}})}r.deleteShader(b),r.deleteShader(A),R=new Kc(r,v),M=gU(r,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,aU)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lU++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}let RU=0;class CU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new IU(e),t.set(e,i)),i}}class IU{constructor(e){this.id=RU++,this.code=e,this.usedTimes=0}}function PU(n,e,t,i,r,s,o){const a=new yE,l=new CU,c=new Set,d=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,B,F){const W=B.fog,Y=F.geometry,j=M.isMeshStandardMaterial?B.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),D=ee&&ee.mapping===ad?ee.image.height:null,K=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ae=Z!==void 0?Z.length:0;let Me=0;Y.morphAttributes.position!==void 0&&(Me=1),Y.morphAttributes.normal!==void 0&&(Me=2),Y.morphAttributes.color!==void 0&&(Me=3);let Ye,$,oe,_e;if(K){const rt=fi[K];Ye=rt.vertexShader,$=rt.fragmentShader}else Ye=M.vertexShader,$=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const ue=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Qe=F.isInstancedMesh===!0,Le=F.isBatchedMesh===!0,vt=!!M.map,yt=!!M.matcap,et=!!ee,N=!!M.aoMap,Qt=!!M.lightMap,tt=!!M.bumpMap,dt=!!M.normalMap,Ee=!!M.displacementMap,Je=!!M.emissiveMap,Re=!!M.metalnessMap,He=!!M.roughnessMap,Pt=M.anisotropy>0,C=M.clearcoat>0,E=M.dispersion>0,z=M.iridescence>0,q=M.sheen>0,Q=M.transmission>0,X=Pt&&!!M.anisotropyMap,Te=C&&!!M.clearcoatMap,de=C&&!!M.clearcoatNormalMap,Se=C&&!!M.clearcoatRoughnessMap,we=z&&!!M.iridescenceMap,te=z&&!!M.iridescenceThicknessMap,me=q&&!!M.sheenColorMap,Ne=q&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,le=!!M.specularColorMap,Oe=!!M.specularIntensityMap,L=Q&&!!M.transmissionMap,fe=Q&&!!M.thicknessMap,ne=!!M.gradientMap,ve=!!M.alphaMap,re=M.alphaTest>0,J=!!M.alphaHash,ye=!!M.extensions;let ke=Fr;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ke=n.toneMapping);const ht={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Ye,fragmentShader:$,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Le,batchingColor:Le&&F._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&F.instanceColor!==null,instancingMorph:Qe&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:cn,alphaToCoverage:!!M.alphaToCoverage,map:vt,matcap:yt,envMap:et,envMapMode:et&&ee.mapping,envMapCubeUVHeight:D,aoMap:N,lightMap:Qt,bumpMap:tt,normalMap:dt,displacementMap:f&&Ee,emissiveMap:Je,normalMapObjectSpace:dt&&M.normalMapType===CI,normalMapTangentSpace:dt&&M.normalMapType===mE,metalnessMap:Re,roughnessMap:He,anisotropy:Pt,anisotropyMap:X,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:de,clearcoatRoughnessMap:Se,dispersion:E,iridescence:z,iridescenceMap:we,iridescenceThicknessMap:te,sheen:q,sheenColorMap:me,sheenRoughnessMap:Ne,specularMap:Ie,specularColorMap:le,specularIntensityMap:Oe,transmission:Q,transmissionMap:L,thicknessMap:fe,gradientMap:ne,opaque:M.transparent===!1&&M.blending===yo&&M.alphaToCoverage===!1,alphaMap:ve,alphaTest:re,alphaHash:J,combine:M.combine,mapUv:vt&&v(M.map.channel),aoMapUv:N&&v(M.aoMap.channel),lightMapUv:Qt&&v(M.lightMap.channel),bumpMapUv:tt&&v(M.bumpMap.channel),normalMapUv:dt&&v(M.normalMap.channel),displacementMapUv:Ee&&v(M.displacementMap.channel),emissiveMapUv:Je&&v(M.emissiveMap.channel),metalnessMapUv:Re&&v(M.metalnessMap.channel),roughnessMapUv:He&&v(M.roughnessMap.channel),anisotropyMapUv:X&&v(M.anisotropyMap.channel),clearcoatMapUv:Te&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(M.sheenRoughnessMap.channel),specularMapUv:Ie&&v(M.specularMap.channel),specularColorMapUv:le&&v(M.specularColorMap.channel),specularIntensityMapUv:Oe&&v(M.specularIntensityMap.channel),transmissionMapUv:L&&v(M.transmissionMap.channel),thicknessMapUv:fe&&v(M.thicknessMap.channel),alphaMapUv:ve&&v(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(dt||Pt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(vt||ve),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ae,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:vt&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:Je&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zn,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ye&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&M.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const S=g[M.type];let I;if(S){const B=fi[S];I=EP.clone(B.uniforms)}else I=M.uniforms;return I}function b(M,S){let I;for(let B=0,F=d.length;B<F;B++){const W=d[B];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new bU(n,S,M,s),d.push(I)),I}function A(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function w(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:R}}function NU(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function LU(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function w0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function A0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,f,p,g,v,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=v,h.group=m),e++,h}function a(u,f,p,g,v,m){const h=o(u,f,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(u,f,p,g,v,m){const h=o(u,f,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||LU),i.length>1&&i.sort(f||w0),r.length>1&&r.sort(f||w0)}function d(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function DU(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new A0,n.set(i,[o])):r>=s.length?(o=new A0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function UU(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function OU(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kU=0;function FU(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BU(n){const e=new UU,t=OU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new ze,o=new ze;function a(c){let d=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,_=0,y=0,x=0,b=0,A=0,w=0;c.sort(FU);for(let M=0,S=c.length;M<S;M++){const I=c[M],B=I.color,F=I.intensity,W=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=B.r*F,u+=B.g*F,f+=B.b*F;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],F);w++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,D=t.get(I);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=j,p++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(B).multiplyScalar(F),j.distance=W,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[v]=j;const ee=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,ee.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=ee.matrix,I.castShadow){const D=t.get(I);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,i.spotShadow[v]=D,i.spotShadowMap[v]=Y,x++}v++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(B).multiplyScalar(F),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=j,m++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const ee=I.shadow,D=t.get(I);D.shadowIntensity=ee.intensity,D.shadowBias=ee.bias,D.shadowNormalBias=ee.normalBias,D.shadowRadius=ee.radius,D.shadowMapSize=ee.mapSize,D.shadowCameraNear=ee.camera.near,D.shadowCameraFar=ee.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=j,g++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(F),j.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[h]=j,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==_||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=_,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=w,i.version=kU++)}function l(c,d){let u=0,f=0,p=0,g=0,v=0;const m=d.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const y=c[h];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function b0(n){const e=new BU(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zU(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new b0(n),e.set(r,[a])):s>=o.length?(a=new b0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const HU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GU(n,e,t){let i=new eg;const r=new $e,s=new $e,o=new nt,a=new zP({depthPacking:RI}),l=new HP,c={},d=t.maxTextureSize,u={[Ji]:yn,[yn]:Ji,[Zn]:Zn},f=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:HU,fragmentShader:VU}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iE;let h=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(kr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=h!==Pi&&this.type===Pi,W=h===Pi&&this.type!==Pi;for(let Y=0,j=A.length;Y<j;Y++){const ee=A[Y],D=ee.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||F===!0||W===!0){const ae=this.type!==Pi?{minFilter:on,magFilter:on}:{};D.map!==null&&D.map.dispose(),D.map=new bs(r.x,r.y,ae),D.map.texture.name=ee.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const Z=D.getViewportCount();for(let ae=0;ae<Z;ae++){const Me=D.getViewport(ae);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),B.viewport(o),D.updateMatrices(ee,ae),i=D.getFrustum(),x(w,R,D.camera,ee,this.type)}D.isPointLightShadow!==!0&&this.type===Pi&&_(D,R),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,I)};function _(A,w){const R=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bs(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,R,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,R,p,v,null)}function y(A,w,R,M){let S=null;const I=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=S.uuid,F=w.uuid;let W=c[B];W===void 0&&(W={},c[B]=W);let Y=W[F];Y===void 0&&(Y=S.clone(),W[F]=Y,w.addEventListener("dispose",b)),S=Y}if(S.visible=w.visible,S.wireframe=w.wireframe,M===Pi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=R}return S}function x(A,w,R,M,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const F=e.update(A),W=A.material;if(Array.isArray(W)){const Y=F.groups;for(let j=0,ee=Y.length;j<ee;j++){const D=Y[j],K=W[D.materialIndex];if(K&&K.visible){const Z=y(A,K,M,S);A.onBeforeShadow(n,A,w,R,F,Z,D),n.renderBufferDirect(R,null,F,Z,A,D),A.onAfterShadow(n,A,w,R,F,Z,D)}}}else if(W.visible){const Y=y(A,W,M,S);A.onBeforeShadow(n,A,w,R,F,Y,null),n.renderBufferDirect(R,null,F,Y,A,null),A.onAfterShadow(n,A,w,R,F,Y,null)}}const B=A.children;for(let F=0,W=B.length;F<W;F++)x(B[F],w,R,M,S)}function b(A){A.target.removeEventListener("dispose",b);for(const R in c){const M=c[R],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const WU={[Wh]:jh,[Xh]:qh,[$h]:Yh,[Lo]:Kh,[jh]:Wh,[qh]:Xh,[Yh]:$h,[Kh]:Lo};function jU(n,e){function t(){let L=!1;const fe=new nt;let ne=null;const ve=new nt(0,0,0,0);return{setMask:function(re){ne!==re&&!L&&(n.colorMask(re,re,re,re),ne=re)},setLocked:function(re){L=re},setClear:function(re,J,ye,ke,ht){ht===!0&&(re*=ke,J*=ke,ye*=ke),fe.set(re,J,ye,ke),ve.equals(fe)===!1&&(n.clearColor(re,J,ye,ke),ve.copy(fe))},reset:function(){L=!1,ne=null,ve.set(-1,0,0,0)}}}function i(){let L=!1,fe=!1,ne=null,ve=null,re=null;return{setReversed:function(J){if(fe!==J){const ye=e.get("EXT_clip_control");J?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),fe=J;const ke=re;re=null,this.setClear(ke)}},getReversed:function(){return fe},setTest:function(J){J?ue(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(J){ne!==J&&!L&&(n.depthMask(J),ne=J)},setFunc:function(J){if(fe&&(J=WU[J]),ve!==J){switch(J){case Wh:n.depthFunc(n.NEVER);break;case jh:n.depthFunc(n.ALWAYS);break;case Xh:n.depthFunc(n.LESS);break;case Lo:n.depthFunc(n.LEQUAL);break;case $h:n.depthFunc(n.EQUAL);break;case Kh:n.depthFunc(n.GEQUAL);break;case qh:n.depthFunc(n.GREATER);break;case Yh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=J}},setLocked:function(J){L=J},setClear:function(J){re!==J&&(fe&&(J=1-J),n.clearDepth(J),re=J)},reset:function(){L=!1,ne=null,ve=null,re=null,fe=!1}}}function r(){let L=!1,fe=null,ne=null,ve=null,re=null,J=null,ye=null,ke=null,ht=null;return{setTest:function(rt){L||(rt?ue(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!L&&(n.stencilMask(rt),fe=rt)},setFunc:function(rt,Vn,Ti){(ne!==rt||ve!==Vn||re!==Ti)&&(n.stencilFunc(rt,Vn,Ti),ne=rt,ve=Vn,re=Ti)},setOp:function(rt,Vn,Ti){(J!==rt||ye!==Vn||ke!==Ti)&&(n.stencilOp(rt,Vn,Ti),J=rt,ye=Vn,ke=Ti)},setLocked:function(rt){L=rt},setClear:function(rt){ht!==rt&&(n.clearStencil(rt),ht=rt)},reset:function(){L=!1,fe=null,ne=null,ve=null,re=null,J=null,ye=null,ke=null,ht=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,h=null,_=null,y=null,x=null,b=null,A=null,w=new Fe(0,0,0),R=0,M=!1,S=null,I=null,B=null,F=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ee=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(D)[1]),j=ee>=1):D.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),j=ee>=2);let K=null,Z={};const ae=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),Ye=new nt().fromArray(ae),$=new nt().fromArray(Me);function oe(L,fe,ne,ve){const re=new Uint8Array(4),J=n.createTexture();n.bindTexture(L,J),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<ne;ye++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(fe+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return J}const _e={};_e[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(Lo),tt(!1),dt(dv),ue(n.CULL_FACE),N(kr);function ue(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Ae(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Qe(L,fe){return u[L]!==fe?(n.bindFramebuffer(L,fe),u[L]=fe,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=fe),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Le(L,fe){let ne=p,ve=!1;if(L){ne=f.get(fe),ne===void 0&&(ne=[],f.set(fe,ne));const re=L.textures;if(ne.length!==re.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let J=0,ye=re.length;J<ye;J++)ne[J]=n.COLOR_ATTACHMENT0+J;ne.length=re.length,ve=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,ve=!0);ve&&n.drawBuffers(ne)}function vt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const yt={[ds]:n.FUNC_ADD,[ZC]:n.FUNC_SUBTRACT,[QC]:n.FUNC_REVERSE_SUBTRACT};yt[eI]=n.MIN,yt[tI]=n.MAX;const et={[nI]:n.ZERO,[iI]:n.ONE,[rI]:n.SRC_COLOR,[Vh]:n.SRC_ALPHA,[uI]:n.SRC_ALPHA_SATURATE,[lI]:n.DST_COLOR,[oI]:n.DST_ALPHA,[sI]:n.ONE_MINUS_SRC_COLOR,[Gh]:n.ONE_MINUS_SRC_ALPHA,[cI]:n.ONE_MINUS_DST_COLOR,[aI]:n.ONE_MINUS_DST_ALPHA,[dI]:n.CONSTANT_COLOR,[fI]:n.ONE_MINUS_CONSTANT_COLOR,[hI]:n.CONSTANT_ALPHA,[pI]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,fe,ne,ve,re,J,ye,ke,ht,rt){if(L===kr){v===!0&&(Ae(n.BLEND),v=!1);return}if(v===!1&&(ue(n.BLEND),v=!0),L!==JC){if(L!==m||rt!==M){if((h!==ds||x!==ds)&&(n.blendEquation(n.FUNC_ADD),h=ds,x=ds),rt)switch(L){case yo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fv:n.blendFunc(n.ONE,n.ONE);break;case hv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,y=null,b=null,A=null,w.set(0,0,0),R=0,m=L,M=rt}return}re=re||fe,J=J||ne,ye=ye||ve,(fe!==h||re!==x)&&(n.blendEquationSeparate(yt[fe],yt[re]),h=fe,x=re),(ne!==_||ve!==y||J!==b||ye!==A)&&(n.blendFuncSeparate(et[ne],et[ve],et[J],et[ye]),_=ne,y=ve,b=J,A=ye),(ke.equals(w)===!1||ht!==R)&&(n.blendColor(ke.r,ke.g,ke.b,ht),w.copy(ke),R=ht),m=L,M=!1}function Qt(L,fe){L.side===Zn?Ae(n.CULL_FACE):ue(n.CULL_FACE);let ne=L.side===yn;fe&&(ne=!ne),tt(ne),L.blending===yo&&L.transparent===!1?N(kr):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const ve=L.stencilWrite;a.setTest(ve),ve&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Je(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function dt(L){L!==KC?(ue(n.CULL_FACE),L!==I&&(L===dv?n.cullFace(n.BACK):L===qC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),I=L}function Ee(L){L!==B&&(j&&n.lineWidth(L),B=L)}function Je(L,fe,ne){L?(ue(n.POLYGON_OFFSET_FILL),(F!==fe||W!==ne)&&(n.polygonOffset(fe,ne),F=fe,W=ne)):Ae(n.POLYGON_OFFSET_FILL)}function Re(L){L?ue(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function He(L){L===void 0&&(L=n.TEXTURE0+Y-1),K!==L&&(n.activeTexture(L),K=L)}function Pt(L,fe,ne){ne===void 0&&(K===null?ne=n.TEXTURE0+Y-1:ne=K);let ve=Z[ne];ve===void 0&&(ve={type:void 0,texture:void 0},Z[ne]=ve),(ve.type!==L||ve.texture!==fe)&&(K!==ne&&(n.activeTexture(ne),K=ne),n.bindTexture(L,fe||_e[L]),ve.type=L,ve.texture=fe)}function C(){const L=Z[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(L){Ye.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function Ne(L){$.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function Ie(L,fe){let ne=c.get(fe);ne===void 0&&(ne=new WeakMap,c.set(fe,ne));let ve=ne.get(L);ve===void 0&&(ve=n.getUniformBlockIndex(fe,L.name),ne.set(L,ve))}function le(L,fe){const ve=c.get(fe).get(L);l.get(fe)!==ve&&(n.uniformBlockBinding(fe,ve,L.__bindingPointIndex),l.set(fe,ve))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},K=null,Z={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,h=null,_=null,y=null,x=null,b=null,A=null,w=new Fe(0,0,0),R=0,M=!1,S=null,I=null,B=null,F=null,W=null,Ye.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Ae,bindFramebuffer:Qe,drawBuffers:Le,useProgram:vt,setBlending:N,setMaterial:Qt,setFlipSided:tt,setCullFace:dt,setLineWidth:Ee,setPolygonOffset:Je,setScissorTest:Re,activeTexture:He,bindTexture:Pt,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:z,texImage2D:we,texImage3D:te,updateUBOMapping:Ie,uniformBlockBinding:le,texStorage2D:de,texStorage3D:Se,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:Te,scissor:me,viewport:Ne,reset:Oe}}function XU(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return p?new OffscreenCanvas(C,E):ml("canvas")}function v(C,E,z){let q=1;const Q=Pt(C);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(q*Q.width),Te=Math.floor(q*Q.height);u===void 0&&(u=g(X,Te));const de=E?g(X,Te):u;return de.width=X,de.height=Te,de.getContext("2d").drawImage(C,0,0,X,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+Te+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function h(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,E,z,q,Q=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=E;if(E===n.RED&&(z===n.FLOAT&&(X=n.R32F),z===n.HALF_FLOAT&&(X=n.R16F),z===n.UNSIGNED_BYTE&&(X=n.R8)),E===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.R8UI),z===n.UNSIGNED_SHORT&&(X=n.R16UI),z===n.UNSIGNED_INT&&(X=n.R32UI),z===n.BYTE&&(X=n.R8I),z===n.SHORT&&(X=n.R16I),z===n.INT&&(X=n.R32I)),E===n.RG&&(z===n.FLOAT&&(X=n.RG32F),z===n.HALF_FLOAT&&(X=n.RG16F),z===n.UNSIGNED_BYTE&&(X=n.RG8)),E===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RG8UI),z===n.UNSIGNED_SHORT&&(X=n.RG16UI),z===n.UNSIGNED_INT&&(X=n.RG32UI),z===n.BYTE&&(X=n.RG8I),z===n.SHORT&&(X=n.RG16I),z===n.INT&&(X=n.RG32I)),E===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGB8UI),z===n.UNSIGNED_SHORT&&(X=n.RGB16UI),z===n.UNSIGNED_INT&&(X=n.RGB32UI),z===n.BYTE&&(X=n.RGB8I),z===n.SHORT&&(X=n.RGB16I),z===n.INT&&(X=n.RGB32I)),E===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),z===n.UNSIGNED_INT&&(X=n.RGBA32UI),z===n.BYTE&&(X=n.RGBA8I),z===n.SHORT&&(X=n.RGBA16I),z===n.INT&&(X=n.RGBA32I)),E===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),E===n.RGBA){const Te=Q?Cu:Ke.getTransfer(q);z===n.FLOAT&&(X=n.RGBA32F),z===n.HALF_FLOAT&&(X=n.RGBA16F),z===n.UNSIGNED_BYTE&&(X=Te===ct?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(C,E){let z;return C?E===null||E===As||E===ul?z=n.DEPTH24_STENCIL8:E===ni?z=n.DEPTH32F_STENCIL8:E===cl&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===As||E===ul?z=n.DEPTH_COMPONENT24:E===ni?z=n.DEPTH_COMPONENT32F:E===cl&&(z=n.DEPTH_COMPONENT16),z}function b(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&d.delete(E)}function w(C){const E=C.target;E.removeEventListener("dispose",w),S(E)}function R(C){const E=i.get(C);if(E.__webglInit===void 0)return;const z=C.source,q=f.get(z);if(q){const Q=q[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys(q).length===0&&f.delete(z)}i.remove(C)}function M(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const z=C.source,q=f.get(z);delete q[E.__cacheKey],o.memory.textures--}function S(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let Q=0;Q<E.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)n.deleteFramebuffer(E.__webglFramebuffer[q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=C.textures;for(let q=0,Q=z.length;q<Q;q++){const X=i.get(z[q]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(z[q])}i.remove(C)}let I=0;function B(){I=0}function F(){const C=I;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function W(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Y(C,E){const z=i.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(z,C,E);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+E)}function j(C,E){const z=i.get(C);if(C.version>0&&z.__version!==C.version){_e(z,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+E)}function ee(C,E){const z=i.get(C);if(C.version>0&&z.__version!==C.version){_e(z,C,E);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+E)}function D(C,E){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ue(z,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+E)}const K={[Oo]:n.REPEAT,[Mr]:n.CLAMP_TO_EDGE,[Ru]:n.MIRRORED_REPEAT},Z={[on]:n.NEAREST,[oE]:n.NEAREST_MIPMAP_NEAREST,[Ma]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Vc]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},ae={[II]:n.NEVER,[OI]:n.ALWAYS,[PI]:n.LESS,[gE]:n.LEQUAL,[NI]:n.EQUAL,[UI]:n.GEQUAL,[LI]:n.GREATER,[DI]:n.NOTEQUAL};function Me(C,E){if(E.type===ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===Vc||E.magFilter===Ma||E.magFilter===Bi||E.minFilter===wn||E.minFilter===Vc||E.minFilter===Ma||E.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,K[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,K[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,K[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Z[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===on||E.minFilter!==Ma&&E.minFilter!==Bi||E.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ye(C,E){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const q=E.source;let Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));const X=W(E);if(X!==C.__cacheKey){Q[X]===void 0&&(Q[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[X].usedTimes++;const Te=Q[C.__cacheKey];Te!==void 0&&(Q[C.__cacheKey].usedTimes--,Te.usedTimes===0&&M(E)),C.__cacheKey=X,C.__webglTexture=Q[X].texture}return z}function $(C,E,z){return Math.floor(Math.floor(C/z)/E)}function oe(C,E,z,q){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,z,q,E.data);else{X.sort((te,me)=>te.start-me.start);let Te=0;for(let te=1;te<X.length;te++){const me=X[Te],Ne=X[te],Ie=me.start+me.count,le=$(Ne.start,E.width,4),Oe=$(me.start,E.width,4);Ne.start<=Ie+1&&le===Oe&&$(Ne.start+Ne.count-1,E.width,4)===le?me.count=Math.max(me.count,Ne.start+Ne.count-me.start):(++Te,X[Te]=Ne)}X.length=Te+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let te=0,me=X.length;te<me;te++){const Ne=X[te],Ie=Math.floor(Ne.start/4),le=Math.ceil(Ne.count/4),Oe=Ie%E.width,L=Math.floor(Ie/E.width),fe=le,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Oe,L,fe,ne,z,q,E.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function _e(C,E,z){let q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=n.TEXTURE_3D);const Q=Ye(C,E),X=E.source;t.bindTexture(q,C.__webglTexture,n.TEXTURE0+z);const Te=i.get(X);if(X.version!==Te.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);const de=Ke.getPrimaries(Ke.workingColorSpace),Se=E.colorSpace===yr?null:Ke.getPrimaries(E.colorSpace),we=E.colorSpace===yr||de===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let te=v(E.image,!1,r.maxTextureSize);te=He(E,te);const me=s.convert(E.format,E.colorSpace),Ne=s.convert(E.type);let Ie=y(E.internalFormat,me,Ne,E.colorSpace,E.isVideoTexture);Me(q,E);let le;const Oe=E.mipmaps,L=E.isVideoTexture!==!0,fe=Te.__version===void 0||Q===!0,ne=X.dataReady,ve=b(E,te);if(E.isDepthTexture)Ie=x(E.format===fl,E.type),fe&&(L?t.texStorage2D(n.TEXTURE_2D,1,Ie,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ie,te.width,te.height,0,me,Ne,null));else if(E.isDataTexture)if(Oe.length>0){L&&fe&&t.texStorage2D(n.TEXTURE_2D,ve,Ie,Oe[0].width,Oe[0].height);for(let re=0,J=Oe.length;re<J;re++)le=Oe[re],L?ne&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,le.width,le.height,me,Ne,le.data):t.texImage2D(n.TEXTURE_2D,re,Ie,le.width,le.height,0,me,Ne,le.data);E.generateMipmaps=!1}else L?(fe&&t.texStorage2D(n.TEXTURE_2D,ve,Ie,te.width,te.height),ne&&oe(E,te,me,Ne)):t.texImage2D(n.TEXTURE_2D,0,Ie,te.width,te.height,0,me,Ne,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){L&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ie,Oe[0].width,Oe[0].height,te.depth);for(let re=0,J=Oe.length;re<J;re++)if(le=Oe[re],E.format!==Fn)if(me!==null)if(L){if(ne)if(E.layerUpdates.size>0){const ye=i0(le.width,le.height,E.format,E.type);for(const ke of E.layerUpdates){const ht=le.data.subarray(ke*ye/le.data.BYTES_PER_ELEMENT,(ke+1)*ye/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ke,le.width,le.height,1,me,ht)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,te.depth,me,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ie,le.width,le.height,te.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,te.depth,me,Ne,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ie,le.width,le.height,te.depth,0,me,Ne,le.data)}else{L&&fe&&t.texStorage2D(n.TEXTURE_2D,ve,Ie,Oe[0].width,Oe[0].height);for(let re=0,J=Oe.length;re<J;re++)le=Oe[re],E.format!==Fn?me!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,le.width,le.height,me,le.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ie,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,le.width,le.height,me,Ne,le.data):t.texImage2D(n.TEXTURE_2D,re,Ie,le.width,le.height,0,me,Ne,le.data)}else if(E.isDataArrayTexture)if(L){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ie,te.width,te.height,te.depth),ne)if(E.layerUpdates.size>0){const re=i0(te.width,te.height,E.format,E.type);for(const J of E.layerUpdates){const ye=te.data.subarray(J*re/te.data.BYTES_PER_ELEMENT,(J+1)*re/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,me,Ne,ye)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Ne,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,te.width,te.height,te.depth,0,me,Ne,te.data);else if(E.isData3DTexture)L?(fe&&t.texStorage3D(n.TEXTURE_3D,ve,Ie,te.width,te.height,te.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Ne,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,te.width,te.height,te.depth,0,me,Ne,te.data);else if(E.isFramebufferTexture){if(fe)if(L)t.texStorage2D(n.TEXTURE_2D,ve,Ie,te.width,te.height);else{let re=te.width,J=te.height;for(let ye=0;ye<ve;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ie,re,J,0,me,Ne,null),re>>=1,J>>=1}}else if(Oe.length>0){if(L&&fe){const re=Pt(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ve,Ie,re.width,re.height)}for(let re=0,J=Oe.length;re<J;re++)le=Oe[re],L?ne&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,me,Ne,le):t.texImage2D(n.TEXTURE_2D,re,Ie,me,Ne,le);E.generateMipmaps=!1}else if(L){if(fe){const re=Pt(te);t.texStorage2D(n.TEXTURE_2D,ve,Ie,re.width,re.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ne,te)}else t.texImage2D(n.TEXTURE_2D,0,Ie,me,Ne,te);m(E)&&h(q),Te.__version=X.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ue(C,E,z){if(E.image.length!==6)return;const q=Ye(C,E),Q=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const X=i.get(Q);if(Q.version!==X.__version||q===!0){t.activeTexture(n.TEXTURE0+z);const Te=Ke.getPrimaries(Ke.workingColorSpace),de=E.colorSpace===yr?null:Ke.getPrimaries(E.colorSpace),Se=E.colorSpace===yr||Te===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,te=E.image[0]&&E.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!we&&!te?me[J]=v(E.image[J],!0,r.maxCubemapSize):me[J]=te?E.image[J].image:E.image[J],me[J]=He(E,me[J]);const Ne=me[0],Ie=s.convert(E.format,E.colorSpace),le=s.convert(E.type),Oe=y(E.internalFormat,Ie,le,E.colorSpace),L=E.isVideoTexture!==!0,fe=X.__version===void 0||q===!0,ne=Q.dataReady;let ve=b(E,Ne);Me(n.TEXTURE_CUBE_MAP,E);let re;if(we){L&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Oe,Ne.width,Ne.height);for(let J=0;J<6;J++){re=me[J].mipmaps;for(let ye=0;ye<re.length;ye++){const ke=re[ye];E.format!==Fn?Ie!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,ke.width,ke.height,Ie,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,Oe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,ke.width,ke.height,Ie,le,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,Oe,ke.width,ke.height,0,Ie,le,ke.data)}}}else{if(re=E.mipmaps,L&&fe){re.length>0&&ve++;const J=Pt(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Oe,J.width,J.height)}for(let J=0;J<6;J++)if(te){L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Ie,le,me[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Oe,me[J].width,me[J].height,0,Ie,le,me[J].data);for(let ye=0;ye<re.length;ye++){const ht=re[ye].image[J].image;L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,ht.width,ht.height,Ie,le,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,Oe,ht.width,ht.height,0,Ie,le,ht.data)}}else{L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,le,me[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Oe,Ie,le,me[J]);for(let ye=0;ye<re.length;ye++){const ke=re[ye];L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Ie,le,ke.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,Oe,Ie,le,ke.image[J])}}}m(E)&&h(n.TEXTURE_CUBE_MAP),X.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ae(C,E,z,q,Q,X){const Te=s.convert(z.format,z.colorSpace),de=s.convert(z.type),Se=y(z.internalFormat,Te,de,z.colorSpace),we=i.get(E),te=i.get(z);if(te.__renderTarget=E,!we.__hasExternalTextures){const me=Math.max(1,E.width>>X),Ne=Math.max(1,E.height>>X);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,X,Se,me,Ne,E.depth,0,Te,de,null):t.texImage2D(Q,X,Se,me,Ne,0,Te,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Je(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,te.__webglTexture,0,Ee(E)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,te.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(C,E,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){const q=E.depthTexture,Q=q&&q.isDepthTexture?q.type:null,X=x(E.stencilBuffer,Q),Te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Ee(E);Je(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,X,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,X,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,X,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,C)}else{const q=E.textures;for(let Q=0;Q<q.length;Q++){const X=q[Q],Te=s.convert(X.format,X.colorSpace),de=s.convert(X.type),Se=y(X.internalFormat,Te,de,X.colorSpace),we=Ee(E);z&&Je(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Se,E.width,E.height):Je(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Se,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Se,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(E.depthTexture);q.__renderTarget=E,(!q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const Q=q.__webglTexture,X=Ee(E);if(E.depthTexture.format===dl)Je(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(E.depthTexture.format===fl)Je(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function vt(C){const E=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=q}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=C.texture.mipmaps;q&&q.length>0?Le(E.__webglFramebuffer[0],C):Le(E.__webglFramebuffer,C)}else if(z){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=n.createRenderbuffer(),Qe(E.__webglDepthbuffer[q],C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,X)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Qe(E.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(C,E,z){const q=i.get(C);E!==void 0&&Ae(q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&vt(C)}function et(C){const E=C.texture,z=i.get(C),q=i.get(E);C.addEventListener("dispose",w);const Q=C.textures,X=C.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=E.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let Se=0;Se<E.mipmaps.length;Se++)z.__webglFramebuffer[de][Se]=n.createFramebuffer()}else z.__webglFramebuffer[de]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)z.__webglFramebuffer[de]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Te)for(let de=0,Se=Q.length;de<Se;de++){const we=i.get(Q[de]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Je(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const Se=Q[de];z.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const we=s.convert(Se.format,Se.colorSpace),te=s.convert(Se.type),me=y(Se.internalFormat,we,te,Se.colorSpace,C.isXRRenderTarget===!0),Ne=Ee(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,z.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Me(n.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)Ae(z.__webglFramebuffer[de][Se],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else Ae(z.__webglFramebuffer[de],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(E)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,Se=Q.length;de<Se;de++){const we=Q[de],te=i.get(we);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),Me(n.TEXTURE_2D,we),Ae(z.__webglFramebuffer,C,we,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(we)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,q.__webglTexture),Me(de,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)Ae(z.__webglFramebuffer[Se],C,E,n.COLOR_ATTACHMENT0,de,Se);else Ae(z.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,de,0);m(E)&&h(de),t.unbindTexture()}C.depthBuffer&&vt(C)}function N(C){const E=C.textures;for(let z=0,q=E.length;z<q;z++){const Q=E[z];if(m(Q)){const X=_(C),Te=i.get(Q).__webglTexture;t.bindTexture(X,Te),h(X),t.unbindTexture()}}}const Qt=[],tt=[];function dt(C){if(C.samples>0){if(Je(C)===!1){const E=C.textures,z=C.width,q=C.height;let Q=n.COLOR_BUFFER_BIT;const X=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(C),de=E.length>1;if(de)for(let we=0;we<E.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=C.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let we=0;we<E.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[we]);const te=i.get(E[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,q,0,0,z,q,Q,n.NEAREST),l===!0&&(Qt.length=0,tt.length=0,Qt.push(n.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Qt.push(X),tt.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<E.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Te.__webglColorRenderbuffer[we]);const te=i.get(E[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ee(C){return Math.min(r.maxSamples,C.samples)}function Je(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(C){const E=o.render.frame;d.get(C)!==E&&(d.set(C,E),C.update())}function He(C,E){const z=C.colorSpace,q=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==cn&&z!==yr&&(Ke.getTransfer(z)===ct?(q!==Fn||Q!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=D,this.rebindTextures=yt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Je}function $U(n,e){function t(i,r=yr){let s;const o=Ke.getTransfer(r);if(i===yi)return n.UNSIGNED_BYTE;if(i===Wm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===aE)return n.BYTE;if(i===lE)return n.SHORT;if(i===cl)return n.UNSIGNED_SHORT;if(i===Gm)return n.INT;if(i===As)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Il)return n.HALF_FLOAT;if(i===uE)return n.ALPHA;if(i===dE)return n.RGB;if(i===Fn)return n.RGBA;if(i===dl)return n.DEPTH_COMPONENT;if(i===fl)return n.DEPTH_STENCIL;if(i===Xm)return n.RED;if(i===$m)return n.RED_INTEGER;if(i===fE)return n.RG;if(i===Km)return n.RG_INTEGER;if(i===qm)return n.RGBA_INTEGER;if(i===Gc||i===Wc||i===jc||i===Xc)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===np)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ip||i===rp||i===sp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ip||i===rp)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===op||i===ap||i===lp||i===cp||i===up||i===dp||i===fp||i===hp||i===pp||i===mp||i===gp||i===_p||i===vp||i===yp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===op)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ap)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===up)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_p)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yp)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$c||i===xp||i===Sp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$c)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hE||i===Ep||i===Mp||i===Tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$c)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ep)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ul?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const KU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qU=`
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

}`;class YU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hr({vertexShader:KU,fragmentShader:qU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new ud(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JU extends Ko{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,g=null;const v=new YU,m=t.getContextAttributes();let h=null,_=null;const y=[],x=[],b=new $e;let A=null;const w=new pn;w.viewport=new nt;const R=new pn;R.viewport=new nt;const M=[w,R],S=new cN;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=y[$];return oe===void 0&&(oe=new vf,y[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=y[$];return oe===void 0&&(oe=new vf,y[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=y[$];return oe===void 0&&(oe=new vf,y[$]=oe),oe.getHandSpace()};function F($){const oe=x.indexOf($.inputSource);if(oe===-1)return;const _e=y[oe];_e!==void 0&&(_e.update($.inputSource,$.frame,c||o),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Y);for(let $=0;$<y.length;$++){const oe=x[$];oe!==null&&(x[$]=null,y[$].disconnect(oe))}I=null,B=null,v.reset(),e.setRenderTarget(h),p=null,f=null,u=null,r=null,_=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ue=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?fl:dl,ue=m.stencil?ul:As);const Qe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Qe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new bs(f.textureWidth,f.textureHeight,{format:Fn,type:yi,depthTexture:new IE(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new bs(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y($){for(let oe=0;oe<$.removed.length;oe++){const _e=$.removed[oe],ue=x.indexOf(_e);ue>=0&&(x[ue]=null,y[ue].disconnect(_e))}for(let oe=0;oe<$.added.length;oe++){const _e=$.added[oe];let ue=x.indexOf(_e);if(ue===-1){for(let Qe=0;Qe<y.length;Qe++)if(Qe>=x.length){x.push(_e),ue=Qe;break}else if(x[Qe]===null){x[Qe]=_e,ue=Qe;break}if(ue===-1)break}const Ae=y[ue];Ae&&Ae.connect(_e)}}const j=new U,ee=new U;function D($,oe,_e){j.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const ue=j.distanceTo(ee),Ae=oe.projectionMatrix.elements,Qe=_e.projectionMatrix.elements,Le=Ae[14]/(Ae[10]-1),vt=Ae[14]/(Ae[10]+1),yt=(Ae[9]+1)/Ae[5],et=(Ae[9]-1)/Ae[5],N=(Ae[8]-1)/Ae[0],Qt=(Qe[8]+1)/Qe[0],tt=Le*N,dt=Le*Qt,Ee=ue/(-N+Qt),Je=Ee*-N;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Je),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Re=Le+Ee,He=vt+Ee,Pt=tt-Je,C=dt+(ue-Je),E=yt*vt/He*Re,z=et*vt/He*Re;$.projectionMatrix.makePerspective(Pt,C,E,z,Re,He),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let oe=$.near,_e=$.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),S.near=R.near=w.near=oe,S.far=R.far=w.far=_e,(I!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,B=S.far),w.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,S.layers.mask=w.layers.mask|R.layers.mask;const ue=$.parent,Ae=S.cameras;K(S,ue);for(let Qe=0;Qe<Ae.length;Qe++)K(Ae[Qe],ue);Ae.length===2?D(S,w,R):S.projectionMatrix.copy(w.projectionMatrix),Z($,S,ue)};function Z($,oe,_e){_e===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ko*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ae=null;function Me($,oe){if(d=oe.getViewerPose(c||o),g=oe,d!==null){const _e=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;_e.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Le=0;Le<_e.length;Le++){const vt=_e[Le];let yt=null;if(p!==null)yt=p.getViewport(vt);else{const N=u.getViewSubImage(f,vt);yt=N.viewport,Le===0&&(e.setRenderTargetTextures(_,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(_))}let et=M[Le];et===void 0&&(et=new pn,et.layers.enable(Le),et.viewport=new nt,M[Le]=et),et.matrix.fromArray(vt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(vt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(yt.x,yt.y,yt.width,yt.height),Le===0&&(S.matrix.copy(et.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(et)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Le=u.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,r.renderState)}}for(let _e=0;_e<y.length;_e++){const ue=x[_e],Ae=y[_e];ue!==null&&Ae!==void 0&&Ae.update(ue,oe,c||o)}ae&&ae($,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ye=new DE;Ye.setAnimationLoop(Me),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}}const rs=new xi,ZU=new ze;function QU(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ME(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===yn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===yn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,rs.copy(x),rs.x*=-1,rs.y*=-1,rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(ZU.makeRotationFromEuler(rs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===yn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function e3(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function c(_,y){let x=r[_.id];x===void 0&&(g(_),x=d(_),r[_.id]=x,_.addEventListener("dispose",m));const b=y.program;i.updateUBOMapping(_,b);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function d(_){const y=u();_.__bindingPointIndex=y;const x=n.createBuffer(),b=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=r[_.id],x=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,w=x.length;A<w;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,S=R.length;M<S;M++){const I=R[M];if(p(I,A,M,b)===!0){const B=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let Y=0;Y<F.length;Y++){const j=F[Y],ee=v(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,B+W,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,y,x,b){const A=_.value,w=y+"_"+x;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const R=b[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return b[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(_){const y=_.uniforms;let x=0;const b=16;for(let w=0,R=y.length;w<R;w++){const M=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,I=M.length;S<I;S++){const B=M[S],F=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Y=F.length;W<Y;W++){const j=F[W],ee=v(j),D=x%b,K=D%ee.boundary,Z=D+K;x+=K,Z!==0&&b-Z<ee.storage&&(x+=b-Z),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=ee.storage}}}const A=x%b;return A>0&&(x+=b-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class t3{constructor(e={}){const{canvas:t=eP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=Wt;let A=0,w=0,R=null,M=-1,S=null;const I=new nt,B=new nt;let F=null;const W=new Fe(0);let Y=0,j=t.width,ee=t.height,D=1,K=null,Z=null;const ae=new nt(0,0,j,ee),Me=new nt(0,0,j,ee);let Ye=!1;const $=new eg;let oe=!1,_e=!1;const ue=new ze,Ae=new ze,Qe=new U,Le=new nt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function et(){return R===null?D:1}let N=i;function Qt(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vm}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",J,!1),N===null){const O="webgl2";if(N=Qt(O,T),N===null)throw Qt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let tt,dt,Ee,Je,Re,He,Pt,C,E,z,q,Q,X,Te,de,Se,we,te,me,Ne,Ie,le,Oe,L;function fe(){tt=new d2(N),tt.init(),le=new $U(N,tt),dt=new r2(N,tt,e,le),Ee=new jU(N,tt),dt.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),Je=new p2(N),Re=new NU,He=new XU(N,tt,Ee,Re,dt,le,Je),Pt=new o2(x),C=new u2(x),E=new xN(N),Oe=new n2(N,E),z=new f2(N,E,Je,Oe),q=new g2(N,z,E,Je),me=new m2(N,dt,He),Se=new s2(Re),Q=new PU(x,Pt,C,tt,dt,Oe,Se),X=new QU(x,Re),Te=new DU,de=new zU(tt),te=new t2(x,Pt,C,Ee,q,p,l),we=new GU(x,q,dt),L=new e3(N,Je,dt,Ee),Ne=new i2(N,tt,Je),Ie=new h2(N,tt,Je),Je.programs=Q.programs,x.capabilities=dt,x.extensions=tt,x.properties=Re,x.renderLists=Te,x.shadowMap=we,x.state=Ee,x.info=Je}fe();const ne=new JU(x,N);this.xr=ne,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(j,ee,!1))},this.getSize=function(T){return T.set(j,ee)},this.setSize=function(T,O,H=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,ee=O,t.width=Math.floor(T*D),t.height=Math.floor(O*D),H===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(j*D,ee*D).floor()},this.setDrawingBufferSize=function(T,O,H){j=T,ee=O,D=H,t.width=Math.floor(T*H),t.height=Math.floor(O*H),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,O,H,V){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,O,H,V),Ee.viewport(I.copy(ae).multiplyScalar(D).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,O,H,V){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,O,H,V),Ee.scissor(B.copy(Me).multiplyScalar(D).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(T){Ee.setScissorTest(Ye=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,H=!0){let V=0;if(T){let k=!1;if(R!==null){const se=R.texture.format;k=se===qm||se===Km||se===$m}if(k){const se=R.texture.type,he=se===yi||se===As||se===cl||se===ul||se===Wm||se===jm,xe=te.getClearColor(),ge=te.getClearAlpha(),De=xe.r,Ue=xe.g,be=xe.b;he?(g[0]=De,g[1]=Ue,g[2]=be,g[3]=ge,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=De,v[1]=Ue,v[2]=be,v[3]=ge,N.clearBufferiv(N.COLOR,0,v))}else V|=N.COLOR_BUFFER_BIT}O&&(V|=N.DEPTH_BUFFER_BIT),H&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",J,!1),te.dispose(),Te.dispose(),de.dispose(),Re.dispose(),Pt.dispose(),C.dispose(),q.dispose(),Oe.dispose(),L.dispose(),Q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",cg),ne.removeEventListener("sessionend",ug),Jr.stop()};function ve(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=Je.autoReset,O=we.enabled,H=we.autoUpdate,V=we.needsUpdate,k=we.type;fe(),Je.autoReset=T,we.enabled=O,we.autoUpdate=H,we.needsUpdate=V,we.type=k}function J(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ye(T){const O=T.target;O.removeEventListener("dispose",ye),ke(O)}function ke(T){ht(T),Re.remove(T)}function ht(T){const O=Re.get(T).programs;O!==void 0&&(O.forEach(function(H){Q.releaseProgram(H)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,H,V,k,se){O===null&&(O=vt);const he=k.isMesh&&k.matrixWorld.determinant()<0,xe=GE(T,O,H,V,k);Ee.setMaterial(V,he);let ge=H.index,De=1;if(V.wireframe===!0){if(ge=z.getWireframeAttribute(H),ge===void 0)return;De=2}const Ue=H.drawRange,be=H.attributes.position;let Xe=Ue.start*De,st=(Ue.start+Ue.count)*De;se!==null&&(Xe=Math.max(Xe,se.start*De),st=Math.min(st,(se.start+se.count)*De)),ge!==null?(Xe=Math.max(Xe,0),st=Math.min(st,ge.count)):be!=null&&(Xe=Math.max(Xe,0),st=Math.min(st,be.count));const xt=st-Xe;if(xt<0||xt===1/0)return;Oe.setup(k,V,xe,H,ge);let At,Ze=Ne;if(ge!==null&&(At=E.get(ge),Ze=Ie,Ze.setIndex(At)),k.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*et()),Ze.setMode(N.LINES)):Ze.setMode(N.TRIANGLES);else if(k.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),Ee.setLineWidth(Ce*et()),k.isLineSegments?Ze.setMode(N.LINES):k.isLineLoop?Ze.setMode(N.LINE_LOOP):Ze.setMode(N.LINE_STRIP)}else k.isPoints?Ze.setMode(N.POINTS):k.isSprite&&Ze.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Ze.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ce=k._multiDrawStarts,Vt=k._multiDrawCounts,it=k._multiDrawCount,Gn=ge?E.get(ge).bytesPerElement:1,Ps=Re.get(V).currentProgram.getUniforms();for(let xn=0;xn<it;xn++)Ps.setValue(N,"_gl_DrawID",xn),Ze.render(Ce[xn]/Gn,Vt[xn])}else if(k.isInstancedMesh)Ze.renderInstances(Xe,xt,k.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Vt=Math.min(H.instanceCount,Ce);Ze.renderInstances(Xe,xt,Vt)}else Ze.render(Xe,xt)};function rt(T,O,H){T.transparent===!0&&T.side===Zn&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,Dl(T,O,H),T.side=Ji,T.needsUpdate=!0,Dl(T,O,H),T.side=Zn):Dl(T,O,H)}this.compile=function(T,O,H=null){H===null&&(H=T),h=de.get(H),h.init(O),y.push(h),H.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),T!==H&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights();const V=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let he=0;he<se.length;he++){const xe=se[he];rt(xe,H,k),V.add(xe)}else rt(se,H,k),V.add(se)}),h=y.pop(),V},this.compileAsync=function(T,O,H=null){const V=this.compile(T,O,H);return new Promise(k=>{function se(){if(V.forEach(function(he){Re.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){k(T);return}setTimeout(se,10)}tt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Vn=null;function Ti(T){Vn&&Vn(T)}function cg(){Jr.stop()}function ug(){Jr.start()}const Jr=new DE;Jr.setAnimationLoop(Ti),typeof self<"u"&&Jr.setContext(self),this.setAnimationLoop=function(T){Vn=T,ne.setAnimationLoop(T),T===null?Jr.stop():Jr.start()},ne.addEventListener("sessionstart",cg),ne.addEventListener("sessionend",ug),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(O),O=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,R),h=de.get(T,y.length),h.init(O),y.push(h),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Ae),_e=this.localClippingEnabled,oe=Se.init(this.clippingPlanes,_e),m=Te.get(T,_.length),m.init(),_.push(m),ne.enabled===!0&&ne.isPresenting===!0){const se=x.xr.getDepthSensingMesh();se!==null&&pd(se,O,-1/0,x.sortObjects)}pd(T,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(K,Z),yt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,yt&&te.addToRenderList(m,T),this.info.render.frame++,oe===!0&&Se.beginShadows();const H=h.state.shadowsArray;we.render(H,T,O),oe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,k=m.transmissive;if(h.setupLights(),O.isArrayCamera){const se=O.cameras;if(k.length>0)for(let he=0,xe=se.length;he<xe;he++){const ge=se[he];fg(V,k,T,ge)}yt&&te.render(T);for(let he=0,xe=se.length;he<xe;he++){const ge=se[he];dg(m,T,ge,ge.viewport)}}else k.length>0&&fg(V,k,T,O),yt&&te.render(T),dg(m,T,O);R!==null&&w===0&&(He.updateMultisampleRenderTarget(R),He.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,O),Oe.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(h=y[y.length-1],oe===!0&&Se.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function pd(T,O,H,V){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){V&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);const he=q.update(T),xe=T.material;xe.visible&&m.push(T,he,xe,H,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const he=q.update(T),xe=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Le.copy(he.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(xe)){const ge=he.groups;for(let De=0,Ue=ge.length;De<Ue;De++){const be=ge[De],Xe=xe[be.materialIndex];Xe&&Xe.visible&&m.push(T,he,Xe,H,Le.z,be)}}else xe.visible&&m.push(T,he,xe,H,Le.z,null)}}const se=T.children;for(let he=0,xe=se.length;he<xe;he++)pd(se[he],O,H,V)}function dg(T,O,H,V){const k=T.opaque,se=T.transmissive,he=T.transparent;h.setupLightsView(H),oe===!0&&Se.setGlobalState(x.clippingPlanes,H),V&&Ee.viewport(I.copy(V)),k.length>0&&Ll(k,O,H),se.length>0&&Ll(se,O,H),he.length>0&&Ll(he,O,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function fg(T,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new bs(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Il:yi,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const se=h.state.transmissionRenderTarget[V.id],he=V.viewport||I;se.setSize(he.z*x.transmissionResolutionScale,he.w*x.transmissionResolutionScale);const xe=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),yt&&te.render(H);const ge=x.toneMapping;x.toneMapping=Fr;const De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),oe===!0&&Se.setGlobalState(x.clippingPlanes,V),Ll(T,H,V),He.updateMultisampleRenderTarget(se),He.updateRenderTargetMipmap(se),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let be=0,Xe=O.length;be<Xe;be++){const st=O[be],xt=st.object,At=st.geometry,Ze=st.material,Ce=st.group;if(Ze.side===Zn&&xt.layers.test(V.layers)){const Vt=Ze.side;Ze.side=yn,Ze.needsUpdate=!0,hg(xt,H,V,At,Ze,Ce),Ze.side=Vt,Ze.needsUpdate=!0,Ue=!0}}Ue===!0&&(He.updateMultisampleRenderTarget(se),He.updateRenderTargetMipmap(se))}x.setRenderTarget(xe),x.setClearColor(W,Y),De!==void 0&&(V.viewport=De),x.toneMapping=ge}function Ll(T,O,H){const V=O.isScene===!0?O.overrideMaterial:null;for(let k=0,se=T.length;k<se;k++){const he=T[k],xe=he.object,ge=he.geometry,De=he.group;let Ue=he.material;Ue.allowOverride===!0&&V!==null&&(Ue=V),xe.layers.test(H.layers)&&hg(xe,O,H,ge,Ue,De)}}function hg(T,O,H,V,k,se){T.onBeforeRender(x,O,H,V,k,se),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,O,H,V,T,se),k.transparent===!0&&k.side===Zn&&k.forceSinglePass===!1?(k.side=yn,k.needsUpdate=!0,x.renderBufferDirect(H,O,V,k,T,se),k.side=Ji,k.needsUpdate=!0,x.renderBufferDirect(H,O,V,k,T,se),k.side=Zn):x.renderBufferDirect(H,O,V,k,T,se),T.onAfterRender(x,O,H,V,k,se)}function Dl(T,O,H){O.isScene!==!0&&(O=vt);const V=Re.get(T),k=h.state.lights,se=h.state.shadowsArray,he=k.state.version,xe=Q.getParameters(T,k.state,se,O,H),ge=Q.getProgramCacheKey(xe);let De=V.programs;V.environment=T.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(T.isMeshStandardMaterial?C:Pt).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",ye),De=new Map,V.programs=De);let Ue=De.get(ge);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===he)return mg(T,xe),Ue}else xe.uniforms=Q.getUniforms(T),T.onBeforeCompile(xe,x),Ue=Q.acquireProgram(xe,ge),De.set(ge,Ue),V.uniforms=xe.uniforms;const be=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=Se.uniform),mg(T,xe),V.needsLights=jE(T),V.lightsStateVersion=he,V.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function pg(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Kc.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function mg(T,O){const H=Re.get(T);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function GE(T,O,H,V,k){O.isScene!==!0&&(O=vt),He.resetTextureUnits();const se=O.fog,he=V.isMeshStandardMaterial?O.environment:null,xe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:cn,ge=(V.isMeshStandardMaterial?C:Pt).get(V.envMap||he),De=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!H.morphAttributes.position,Xe=!!H.morphAttributes.normal,st=!!H.morphAttributes.color;let xt=Fr;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xt=x.toneMapping);const At=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ze=At!==void 0?At.length:0,Ce=Re.get(V),Vt=h.state.lights;if(oe===!0&&(_e===!0||T!==S)){const en=T===S&&V.id===M;Se.setState(V,T,en)}let it=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Vt.state.version||Ce.outputColorSpace!==xe||k.isBatchedMesh&&Ce.batching===!1||!k.isBatchedMesh&&Ce.batching===!0||k.isBatchedMesh&&Ce.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ce.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ce.instancing===!1||!k.isInstancedMesh&&Ce.instancing===!0||k.isSkinnedMesh&&Ce.skinning===!1||!k.isSkinnedMesh&&Ce.skinning===!0||k.isInstancedMesh&&Ce.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ce.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ce.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ce.instancingMorph===!1&&k.morphTexture!==null||Ce.envMap!==ge||V.fog===!0&&Ce.fog!==se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Se.numPlanes||Ce.numIntersection!==Se.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Ue||Ce.morphTargets!==be||Ce.morphNormals!==Xe||Ce.morphColors!==st||Ce.toneMapping!==xt||Ce.morphTargetsCount!==Ze)&&(it=!0):(it=!0,Ce.__version=V.version);let Gn=Ce.currentProgram;it===!0&&(Gn=Dl(V,O,k));let Ps=!1,xn=!1,Qo=!1;const gt=Gn.getUniforms(),Pn=Ce.uniforms;if(Ee.useProgram(Gn.program)&&(Ps=!0,xn=!0,Qo=!0),V.id!==M&&(M=V.id,xn=!0),Ps||S!==T){Ee.buffers.depth.getReversed()?(ue.copy(T.projectionMatrix),nP(ue),iP(ue),gt.setValue(N,"projectionMatrix",ue)):gt.setValue(N,"projectionMatrix",T.projectionMatrix),gt.setValue(N,"viewMatrix",T.matrixWorldInverse);const fn=gt.map.cameraPosition;fn!==void 0&&fn.setValue(N,Qe.setFromMatrixPosition(T.matrixWorld)),dt.logarithmicDepthBuffer&&gt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,xn=!0,Qo=!0)}if(k.isSkinnedMesh){gt.setOptional(N,k,"bindMatrix"),gt.setOptional(N,k,"bindMatrixInverse");const en=k.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),gt.setValue(N,"boneTexture",en.boneTexture,He))}k.isBatchedMesh&&(gt.setOptional(N,k,"batchingTexture"),gt.setValue(N,"batchingTexture",k._matricesTexture,He),gt.setOptional(N,k,"batchingIdTexture"),gt.setValue(N,"batchingIdTexture",k._indirectTexture,He),gt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&gt.setValue(N,"batchingColorTexture",k._colorsTexture,He));const Nn=H.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&me.update(k,H,Gn),(xn||Ce.receiveShadow!==k.receiveShadow)&&(Ce.receiveShadow=k.receiveShadow,gt.setValue(N,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Pn.envMap.value=ge,Pn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Pn.envMapIntensity.value=O.environmentIntensity),xn&&(gt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&WE(Pn,Qo),se&&V.fog===!0&&X.refreshFogUniforms(Pn,se),X.refreshMaterialUniforms(Pn,V,D,ee,h.state.transmissionRenderTarget[T.id]),Kc.upload(N,pg(Ce),Pn,He)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Kc.upload(N,pg(Ce),Pn,He),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(N,"center",k.center),gt.setValue(N,"modelViewMatrix",k.modelViewMatrix),gt.setValue(N,"normalMatrix",k.normalMatrix),gt.setValue(N,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const en=V.uniformsGroups;for(let fn=0,md=en.length;fn<md;fn++){const Zr=en[fn];L.update(Zr,Gn),L.bind(Zr,Gn)}}return Gn}function WE(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function jE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,O,H){const V=Re.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Re.get(T.texture).__webglTexture=O,Re.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const H=Re.get(T);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const XE=N.createFramebuffer();this.setRenderTarget=function(T,O=0,H=0){R=T,A=O,w=H;let V=!0,k=null,se=!1,he=!1;if(T){const ge=Re.get(T);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(ge.__webglFramebuffer===void 0)He.setupRenderTarget(T);else if(ge.__hasExternalTextures)He.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(ge.__boundDepthTexture!==be){if(be!==null&&Re.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(T)}}const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(he=!0);const Ue=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?k=Ue[O][H]:k=Ue[O],se=!0):T.samples>0&&He.useMultisampledRTT(T)===!1?k=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[H]:k=Ue,I.copy(T.viewport),B.copy(T.scissor),F=T.scissorTest}else I.copy(ae).multiplyScalar(D).floor(),B.copy(Me).multiplyScalar(D).floor(),F=Ye;if(H!==0&&(k=XE),Ee.bindFramebuffer(N.FRAMEBUFFER,k)&&V&&Ee.drawBuffers(T,k),Ee.viewport(I),Ee.scissor(B),Ee.setScissorTest(F),se){const ge=Re.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,H)}else if(he){const ge=Re.get(T.texture),De=O;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,H,De)}else if(T!==null&&H!==0){const ge=Re.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(T,O,H,V,k,se,he,xe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){Ee.bindFramebuffer(N.FRAMEBUFFER,ge);try{const De=T.textures[xe],Ue=De.format,be=De.type;if(!dt.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-V&&H>=0&&H<=T.height-k&&(T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),N.readPixels(O,H,V,k,le.convert(Ue),le.convert(be),se))}finally{const De=R!==null?Re.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,O,H,V,k,se,he,xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge)if(O>=0&&O<=T.width-V&&H>=0&&H<=T.height-k){Ee.bindFramebuffer(N.FRAMEBUFFER,ge);const De=T.textures[xe],Ue=De.format,be=De.type;if(!dt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),N.readPixels(O,H,V,k,le.convert(Ue),le.convert(be),0);const st=R!==null?Re.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,st);const xt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await tP(N,xt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(Xe),N.deleteSync(xt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,H=0){const V=Math.pow(2,-H),k=Math.floor(T.image.width*V),se=Math.floor(T.image.height*V),he=O!==null?O.x:0,xe=O!==null?O.y:0;He.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,he,xe,k,se),Ee.unbindTexture()};const $E=N.createFramebuffer(),KE=N.createFramebuffer();this.copyTextureToTexture=function(T,O,H=null,V=null,k=0,se=null){se===null&&(k!==0?(xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=k,k=0):se=0);let he,xe,ge,De,Ue,be,Xe,st,xt;const At=T.isCompressedTexture?T.mipmaps[se]:T.image;if(H!==null)he=H.max.x-H.min.x,xe=H.max.y-H.min.y,ge=H.isBox3?H.max.z-H.min.z:1,De=H.min.x,Ue=H.min.y,be=H.isBox3?H.min.z:0;else{const Nn=Math.pow(2,-k);he=Math.floor(At.width*Nn),xe=Math.floor(At.height*Nn),T.isDataArrayTexture?ge=At.depth:T.isData3DTexture?ge=Math.floor(At.depth*Nn):ge=1,De=0,Ue=0,be=0}V!==null?(Xe=V.x,st=V.y,xt=V.z):(Xe=0,st=0,xt=0);const Ze=le.convert(O.format),Ce=le.convert(O.type);let Vt;O.isData3DTexture?(He.setTexture3D(O,0),Vt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(He.setTexture2DArray(O,0),Vt=N.TEXTURE_2D_ARRAY):(He.setTexture2D(O,0),Vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const it=N.getParameter(N.UNPACK_ROW_LENGTH),Gn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ps=N.getParameter(N.UNPACK_SKIP_PIXELS),xn=N.getParameter(N.UNPACK_SKIP_ROWS),Qo=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,De),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,be);const gt=T.isDataArrayTexture||T.isData3DTexture,Pn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Nn=Re.get(T),en=Re.get(O),fn=Re.get(Nn.__renderTarget),md=Re.get(en.__renderTarget);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,md.__webglFramebuffer);for(let Zr=0;Zr<ge;Zr++)gt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(T).__webglTexture,k,be+Zr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,se,xt+Zr)),N.blitFramebuffer(De,Ue,he,xe,Xe,st,he,xe,N.DEPTH_BUFFER_BIT,N.NEAREST);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||Re.has(T)){const Nn=Re.get(T),en=Re.get(O);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,$E),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,KE);for(let fn=0;fn<ge;fn++)gt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nn.__webglTexture,k,be+fn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Nn.__webglTexture,k),Pn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,en.__webglTexture,se,xt+fn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,en.__webglTexture,se),k!==0?N.blitFramebuffer(De,Ue,he,xe,Xe,st,he,xe,N.COLOR_BUFFER_BIT,N.NEAREST):Pn?N.copyTexSubImage3D(Vt,se,Xe,st,xt+fn,De,Ue,he,xe):N.copyTexSubImage2D(Vt,se,Xe,st,De,Ue,he,xe);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Pn?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Vt,se,Xe,st,xt,he,xe,ge,Ze,Ce,At.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Vt,se,Xe,st,xt,he,xe,ge,Ze,At.data):N.texSubImage3D(Vt,se,Xe,st,xt,he,xe,ge,Ze,Ce,At):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,Xe,st,he,xe,Ze,Ce,At.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,Xe,st,At.width,At.height,Ze,At.data):N.texSubImage2D(N.TEXTURE_2D,se,Xe,st,he,xe,Ze,Ce,At);N.pixelStorei(N.UNPACK_ROW_LENGTH,it),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Gn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ps),N.pixelStorei(N.UNPACK_SKIP_ROWS,xn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qo),se===0&&O.generateMipmaps&&N.generateMipmap(Vt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,O,H=null,V=null,k=0){return xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,H,V,k)},this.initRenderTarget=function(T){Re.get(T).__webglFramebuffer===void 0&&He.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?He.setTextureCube(T,0):T.isData3DTexture?He.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?He.setTexture2DArray(T,0):He.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,Ee.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function R0(n,e){if(e===AI)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===wp||e===pE){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===wp)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class n3 extends Jo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new a3(t)}),this.register(function(t){return new l3(t)}),this.register(function(t){return new _3(t)}),this.register(function(t){return new v3(t)}),this.register(function(t){return new y3(t)}),this.register(function(t){return new u3(t)}),this.register(function(t){return new d3(t)}),this.register(function(t){return new f3(t)}),this.register(function(t){return new h3(t)}),this.register(function(t){return new o3(t)}),this.register(function(t){return new p3(t)}),this.register(function(t){return new c3(t)}),this.register(function(t){return new g3(t)}),this.register(function(t){return new m3(t)}),this.register(function(t){return new r3(t)}),this.register(function(t){return new x3(t)}),this.register(function(t){return new S3(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Fa.extractUrlBase(e);o=Fa.resolveURL(c,this.path)}else o=Fa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new LE(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(d){t(d),s.manager.itemEnd(e)},a)}catch(d){a(d)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===BE){try{o[We.KHR_BINARY_GLTF]=new E3(e)}catch(u){r&&r(u);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new U3(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const u=s.extensionsUsed[d],f=s.extensionsRequired||[];switch(u){case We.KHR_MATERIALS_UNLIT:o[u]=new s3;break;case We.KHR_DRACO_MESH_COMPRESSION:o[u]=new M3(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[u]=new T3;break;case We.KHR_MESH_QUANTIZATION:o[u]=new w3;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function i3(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class r3{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const d=new Fe(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],cn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Cp(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sN(d),c.distance=u;break;case"spot":c=new iN(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Li(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class s3{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return gs}extendParams(e,t,i){const r=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Wt))}return Promise.all(r)}}class o3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class a3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(s)}}class l3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class c3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class u3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],cn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Wt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class d3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class f3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],cn),Promise.all(s)}}class h3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class p3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],cn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Wt)),Promise.all(s)}}class m3{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class g3{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class _3{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class v3{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class y3{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class x3{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,d=r.count,u=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,u,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(d*u);return o.decodeGltfBuffer(new Uint8Array(p),d,u,f,r.mode,r.filter),p})})}else return null}}class S3{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Dn.TRIANGLES&&c.mode!==Dn.TRIANGLE_STRIP&&c.mode!==Dn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],f=c[0].count,p=[];for(const g of u){const v=new ze,m=new U,h=new Yr,_=new U(1,1,1),y=new DP(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,v.compose(m,h,_));for(const x in l)if(x==="_COLOR_0"){const b=l[x];y.instanceColor=new bp(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Tt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const BE="glTF",ga=12,C0={JSON:1313821514,BIN:5130562};class E3{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ga),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==BE)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ga,s=new DataView(e,ga);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===C0.JSON){const c=new Uint8Array(e,ga+o,a);this.content=i.decode(c)}else if(l===C0.BIN){const c=ga+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class M3{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const u=Pp[d]||d.toLowerCase();a[u]=o[d]}for(const d in e.attributes){const u=Pp[d]||d.toLowerCase();if(o[d]!==void 0){const f=i.accessors[e.attributes[d]],p=Eo[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(u,f){r.decodeDracoFile(d,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(p)},a,c,cn,f)})})}}class T3{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class w3{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class zE extends Nl{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=r-t,u=(i-t)/d,f=u*u,p=f*u,g=e*c,v=g-c,m=-2*p+3*f,h=p-f,_=1-m,y=h-f+u;for(let x=0;x!==a;x++){const b=o[v+x+a],A=o[v+x+l]*d,w=o[g+x+a],R=o[g+x]*d;s[x]=_*b+y*A+m*w+h*R}return s}}const A3=new Yr;class b3 extends zE{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return A3.fromArray(s).normalize().toArray(s),s}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},I0={9728:on,9729:wn,9984:oE,9985:Vc,9986:Ma,9987:Bi},P0={33071:Mr,33648:Ru,10497:Oo},Nf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},R3={CUBICSPLINE:void 0,LINEAR:pl,STEP:hl},Lf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function C3(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new gl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),n.DefaultMaterial}function ss(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Li(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function I3(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(i){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(f)}if(r){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],f=c[2];return i&&(n.morphAttributes.position=d),r&&(n.morphAttributes.normal=u),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function P3(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function N3(n){let e;const t=n.extensions&&n.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Df(t.attributes):e=n.indices+":"+Df(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Df(n.targets[i]);return e}function Df(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Np(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function L3(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const D3=new ze;class U3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new tN(this.options.manager):this.textureLoader=new lN(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new LE(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return ss(s,a,r),Li(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())s(d,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Fa.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Nf[r.type],a=Eo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new an(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Nf[r.type],c=Eo[r.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(p&&p!==u){const h=Math.floor(f/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let y=t.cache.get(_);y||(v=new c(a,h*p,r.count*p/d),y=new CP(v,p/d),t.cache.add(_,y)),m=new Zm(y,l,f%p/d,g)}else a===null?v=new c(r.count*l):v=new c(a,f,r.count*l),m=new an(v,l,g);if(r.sparse!==void 0){const h=Nf.SCALAR,_=Eo[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,b=new _(o[1],y,r.sparse.count*h),A=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new an(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,R=b.length;w<R;w++){const M=b[w];if(m.setX(M,A[w*l]),l>=2&&m.setY(M,A[w*l+1]),l>=3&&m.setZ(M,A[w*l+2]),l>=4&&m.setW(M,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return d.magFilter=I0[f.magFilter]||wn,d.minFilter=I0[f.minFilter]||Bi,d.wrapS=P0[f.wrapS]||Oo,d.wrapT=P0[f.wrapT]||Oo,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==on&&d.minFilter!==wn,r.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){const m=new zt(v);m.needsUpdate=!0,f(m)}),t.load(Fa.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Li(u,o),u.userData.mimeType=o.mimeType||L3(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new CE,vi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new RE,vi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return gl}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const u=r[We.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],cn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Zn);const d=s.alphaMode||Lf.OPAQUE;if(d===Lf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Lf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==gs&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $e(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==gs&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==gs){const u=s.emissiveFactor;a.emissive=new Fe().setRGB(u[0],u[1],u[2],cn)}return s.emissiveTexture!==void 0&&o!==gs&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Wt)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Li(u,s),t.associations.set(u,{materials:e}),s.extensions&&ss(r,u,s),u})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return N0(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=N3(c),u=r[d];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=N0(new In,c,t),r[d]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?C3(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let p=0,g=d.length;p<g;p++){const v=d[p],m=o[p];let h;const _=c[p];if(m.mode===Dn.TRIANGLES||m.mode===Dn.TRIANGLE_STRIP||m.mode===Dn.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new PP(v,_):new Ft(v,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Dn.TRIANGLE_STRIP?h.geometry=R0(h.geometry,pE):m.mode===Dn.TRIANGLE_FAN&&(h.geometry=R0(h.geometry,wp));else if(m.mode===Dn.LINES)h=new kP(v,_);else if(m.mode===Dn.LINE_STRIP)h=new tg(v,_);else if(m.mode===Dn.LINE_LOOP)h=new FP(v,_);else if(m.mode===Dn.POINTS)h=new BP(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&P3(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),Li(h,s),m.extensions&&ss(r,h,m),t.assignFinalMaterial(h),u.push(h)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&ss(r,u[0],s),u[0];const f=new ii;s.extensions&&ss(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new pn(QI.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new fd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Li(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const u=o[c];if(u){a.push(u);const f=new ze;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Qm(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let u=0,f=r.channels.length;u<f;u++){const p=r.channels[u],g=r.samplers[p.sampler],v=p.target,m=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",_)),c.push(g),d.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const f=u[0],p=u[1],g=u[2],v=u[3],m=u[4],h=[];for(let _=0,y=f.length;_<y;_++){const x=f[_],b=p[_],A=g[_],w=v[_],R=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=i._createAnimationTracks(x,b,A,w,R);if(M)for(let S=0;S<M.length;S++)h.push(M[S])}return new KP(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,d=a.length;c<d;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const d=c[0],u=c[1],f=c[2];f!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(f,D3)});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new AE:c.length>1?d=new ii:c.length===1?d=c[0]:d=new Tt,d!==c[0])for(let u=0,f=c.length;u<f;u++)d.add(c[u]);if(s.name&&(d.userData.name=s.name,d.name=o),Li(d,s),s.extensions&&ss(i,d,s),s.matrix!==void 0){const u=new ze;u.fromArray(s.matrix),d.applyMatrix4(u)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);if(!r.associations.has(d))r.associations.set(d,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const u=r.associations.get(d);r.associations.set(d,{...u})}return r.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new ii;i.name&&(s.name=r.createUniqueName(i.name)),Li(s,i),i.extensions&&ss(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,u=l.length;d<u;d++)s.add(l[d]);const c=d=>{const u=new Map;for(const[f,p]of r.associations)(f instanceof vi||f instanceof zt)&&u.set(f,p);return d.traverse(f=>{const p=r.associations.get(f);p!=null&&u.set(f,p)}),u};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];cr[s.path]===cr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(cr[s.path]){case cr.weights:c=Bo;break;case cr.rotation:c=zo;break;case cr.translation:case cr.scale:c=Ho;break;default:switch(i.itemSize){case 1:c=Bo;break;case 2:case 3:default:c=Ho;break}break}const d=r.interpolation!==void 0?R3[r.interpolation]:pl,u=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const g=new c(l[f]+"."+cr[s.path],t.array,u,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Np(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof zo?b3:zE;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function O3(n,e,t){const i=e.attributes,r=new Si;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const d=Np(Eo[a.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new U,l=new U;for(let c=0,d=s.length;c<d;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const v=Np(Eo[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Ei;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function N0(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Pp[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ke.workingColorSpace!==cn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Li(n,e),O3(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?I3(n,e.targets,t):n})}const Du=[{id:"earring-01",name:"Earring 01",category:"earrings",thumbnailUrl:"/assets/products/earring-01.svg",tryOnImageUrl:"/assets/products/earring-01.svg",modelUrl:"/assets/earring_01.glb",placement:"ears",modelScale:.9,yOffset:.3},{id:"earring-02",name:"Earring 02",category:"earrings",thumbnailUrl:"/assets/products/earring-02.svg",tryOnImageUrl:"/assets/products/earring-02.svg",modelUrl:"/assets/earring_02.glb",placement:"ears",modelScale:.82,yOffset:.28},{id:"earring-03",name:"Earring 03",category:"earrings",thumbnailUrl:"/assets/products/earring-03.svg",tryOnImageUrl:"/assets/products/earring-03.svg",modelUrl:"/assets/earring_03.glb",placement:"ears",modelScale:1.05,yOffset:.34},{id:"earring-stoned",name:"Stoned Earring",category:"earrings",thumbnailUrl:"/assets/products/earring-stoned.svg",tryOnImageUrl:"/assets/products/earring-stoned.svg",modelUrl:"/assets/earring_stoned.glb",placement:"ears",modelScale:.92,yOffset:.3},{id:"glasses-01",name:"Glasses 01",category:"sunglasses",thumbnailUrl:"/assets/products/glasses-01.svg",tryOnImageUrl:"/assets/products/glasses-01.svg",modelUrl:"/assets/glasses_01.glb",placement:"eyes",modelScale:.62,yOffset:-.03},{id:"pendant-01",name:"Pendant 01",category:"necklace",thumbnailUrl:"/assets/products/pendant-01.svg",tryOnImageUrl:"/assets/products/pendant-01.svg",modelUrl:"/assets/pendant_01.glb",placement:"neck",modelScale:1,yOffset:0},{id:"necklace-woman-01",name:"Woman Necklace 01",category:"necklace",thumbnailUrl:"/assets/products/necklace-woman-01.svg",tryOnImageUrl:"/assets/products/necklace-woman-01.svg",modelUrl:"/assets/necklace_woman_01.glb",placement:"neck",modelScale:.95,yOffset:0}];function HE(n){return Du.find(e=>e.id===n)??Du[0]}function k3(n){const e=G.useRef(null),t=G.useRef(!1),[i,r]=G.useState("user"),[s,o]=G.useState(!1),[a,l]=G.useState(""),[c,d]=G.useState(!1),u=G.useCallback(()=>{const m=e.current;m&&(m.getTracks().forEach(h=>h.stop()),e.current=null),n.current&&(n.current.pause(),n.current.srcObject=null,n.current.onloadedmetadata=null),o(!1)},[n]),f=G.useCallback(m=>{var h;return window.isSecureContext?(h=navigator.mediaDevices)!=null&&h.getUserMedia?(m==null?void 0:m.name)==="NotAllowedError"||(m==null?void 0:m.name)==="SecurityError"?"Camera permission was blocked. Allow camera access in your browser settings, then try again.":(m==null?void 0:m.name)==="NotFoundError"||(m==null?void 0:m.name)==="DevicesNotFoundError"?"No camera was found on this device.":(m==null?void 0:m.name)==="NotReadableError"||(m==null?void 0:m.name)==="TrackStartError"?"The camera is already in use by another app or browser tab.":"Unable to access the camera. Please allow permission and try again.":"Camera access is not available in this browser. Use Chrome, Edge, or Safari on HTTPS or localhost.":"Camera access requires HTTPS or localhost. Open the app at https:// or http://localhost."},[]),p=G.useCallback(async m=>{n.current&&(n.current.srcObject=m,await new Promise(h=>{if(n.current.readyState>=1){h();return}n.current.onloadedmetadata=h}),await n.current.play())},[n]),g=G.useCallback(async()=>{var h;if(t.current)return;let m;try{if(t.current=!0,d(!0),u(),l(""),!((h=navigator.mediaDevices)!=null&&h.getUserMedia)||!window.isSecureContext)throw new Error("Camera unavailable");try{m=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:i},width:{ideal:960},height:{ideal:720}},audio:!1})}catch(_){if((_==null?void 0:_.name)!=="OverconstrainedError"&&(_==null?void 0:_.name)!=="ConstraintNotSatisfiedError")throw _;m=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1})}e.current=m,await p(m),o(!0)}catch(_){m==null||m.getTracks().forEach(y=>y.stop()),e.current=null,l(f(_)),o(!1)}finally{t.current=!1,d(!1)}},[p,i,f,u]),v=G.useCallback(()=>{r(m=>m==="user"?"environment":"user")},[]);return{cameraError:a,facingMode:i,isCameraReady:s,isStartingCamera:c,startCamera:g,stopCamera:u,switchFacingMode:v}}const L0="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22",F3="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task";function B3({videoRef:n,enabled:e,onResults:t}){const i=G.useRef(null),r=G.useRef(null),[s,o]=G.useState(!1),[a,l]=G.useState(0),[c,d]=G.useState("Idle");return G.useEffect(()=>{let u=!1;return(async()=>{d("Loading detector");try{const{FaceLandmarker:p,FilesetResolver:g}=await import(L0),v=await g.forVisionTasks(`${L0}/wasm`),m=await p.createFromOptions(v,{baseOptions:{modelAssetPath:F3,delegate:"GPU"},numFaces:1,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",minFaceDetectionConfidence:.6,minFacePresenceConfidence:.6,minTrackingConfidence:.6});if(u){m.close();return}i.current=m,o(!0),d("Searching")}catch{d("Detector failed")}})(),()=>{var p;u=!0,cancelAnimationFrame(r.current),(p=i.current)==null||p.close(),i.current=null,o(!1)}},[]),G.useEffect(()=>{if(!e||!s||!n.current||!i.current)return;let u=!1;const f=async()=>{var p;if(!(u||!n.current||!i.current)){if(n.current.readyState>=2){const g=i.current.detectForVideo(n.current,performance.now()),v=(p=g.faceLandmarks)==null?void 0:p[0];l(v?v.length:0),d(v?"Tracking":"Searching"),t==null||t({...g,multiFaceLandmarks:g.faceLandmarks})}r.current=requestAnimationFrame(f)}};return f(),()=>{u=!0,cancelAnimationFrame(r.current)}},[e,s,t,n]),{landmarkCount:a,trackingStatus:c}}function z3(n,e,t,i){n.fillStyle="#C2185B";for(const r of e)n.beginPath(),n.arc(r.x*t,r.y*i,1.6,0,Math.PI*2),n.fill()}function lg(n,e,t,i){const r=n[234],s=n[454],o=n[127]??r,a=n[356]??s,l=n[1]??n[4]??r,c=n[152]??l,d=r.x*e,u=r.y*t,f=s.x*e,p=s.y*t,g=Math.hypot(a.x*e-o.x*e,a.y*t-o.y*t),v=Math.atan2(p-u,f-d);if(i.placement==="eyes"){const _=n[33]??r,y=n[263]??s,x=(_.x+y.x)/2*e,b=(_.y+y.y)/2*t,A=Math.atan2(y.y*t-_.y*t,y.x*e-_.x*e);return[{x:x-e/2,y:t/2-b+g*(i.yOffset??0),drawWidth:wr(g*.9*i.modelScale,150,330),rotation:-A,mirror:1,holder:"center"}]}if(i.placement==="neck"){const _=c.y*t+g*.24;return[{x:l.x*e-e/2,y:t/2-_,drawWidth:wr(g*.72*i.modelScale,110,260),rotation:-v*.35,mirror:1,holder:"center"}]}if(i.placement==="nose"){const _=n[1]??n[4]??l,y=n[98]??_,x=n[327]??_,b=i.xOffset<0?y:x,A=Math.hypot(x.x*e-y.x*e,x.y*t-y.y*t),w=b.x*e+g*(i.xOffset??0),R=b.y*t+g*(i.yOffset??0);return[{x:w-e/2,y:t/2-R,drawWidth:wr(A*.95*i.modelScale,24,58),rotation:-v*.2,mirror:1,holder:"center"}]}const m=wr(g*.32*i.modelScale,44,124),h=m*i.yOffset;return[{x:d-e/2,y:t/2-u-h,drawHeight:m,rotation:-v,mirror:-1,holder:"left",crop:"left"},{x:f-e/2,y:t/2-p-h,drawHeight:m,rotation:-v,mirror:1,holder:"right",crop:"right"}]}function wr(n,e,t){return Math.min(Math.max(n,e),t)}function H3(n,e){return e==="left"?{sx:0,sy:0,sw:n.naturalWidth/2,sh:n.naturalHeight}:e==="right"?{sx:n.naturalWidth/2,sy:0,sw:n.naturalWidth/2,sh:n.naturalHeight}:{sx:0,sy:0,sw:n.naturalWidth,sh:n.naturalHeight}}function qc(n,e,t){const i=H3(e,t.crop),r=i.sw/i.sh,s=t.drawWidth??t.drawHeight*r,o=t.drawHeight??s/r;n.save(),n.translate(t.x,t.y),n.rotate(t.rotation),n.scale(t.mirror,1),n.drawImage(e,i.sx,i.sy,i.sw,i.sh,-s/2,-o/2,s,o),n.restore()}function V3(){const n=new ii,e=new gl({color:"#D9A441",metalness:.85,roughness:.22}),t=new gl({color:"#B3164F",metalness:.15,roughness:.14}),i=new Ft(new Lu(9,32,16),t);i.position.y=38,n.add(i);const r=new Ft(new ig(28,3.2,24,80),e);r.position.y=9,n.add(r);const s=new Ft(new cd(1.6,1.6,34,16),e);s.position.y=-18,n.add(s);const o=new Ft(new Lu(11,32,16),t);o.position.y=-39,o.scale.set(.78,1.18,.78),n.add(o);const a=new Ft(new ng(11,14,32),e);return a.position.y=-27,a.rotation.x=Math.PI,n.add(a),n.traverse(l=>{l.isMesh&&(l.castShadow=!1,l.receiveShadow=!1)}),n}function D0(n,e=100){const t=new Si().setFromObject(n),i=t.getSize(new U),r=t.getCenter(new U),s=i.y||1;n.position.sub(r),n.scale.multiplyScalar(e/s)}function U0(n){n.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1,e.material&&(e.material.needsUpdate=!0,e.material.side=Zn))})}function G3(n){const e=new t3({canvas:n,alpha:!0,antialias:!0});e.setClearColor(0,0),e.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const t=new RP,i=new fd(-480,480,360,-360,-1e3,1e3);i.position.z=500;const r=new ii,s=new ii,o=new ii;r.visible=!1,s.visible=!1,o.visible=!1,t.add(r,s,o);const a=new Cp(16777215,2.8);a.position.set(140,180,320),t.add(a);const l=new Cp(16767462,1.2);return l.position.set(-180,-80,160),t.add(l),t.add(new aN(16777215,1.35)),{renderer:e,scene:t,camera:i,centerAccessory:o,earrings:{left:r,right:s}}}function O0(n,e){const t=e.clone(!0),i=e.clone(!0);n.earrings.left.clear(),n.earrings.right.clear(),n.earrings.left.add(t),n.earrings.right.add(i)}function W3(n,e){const t=e.clone(!0);n.centerAccessory.clear(),n.centerAccessory.add(t)}function k0(n,e,t){const{renderer:i,camera:r}=n;i.setSize(e,t,!1),r.left=-e/2,r.right=e/2,r.top=t/2,r.bottom=-t/2,r.updateProjectionMatrix()}function VE(n,e,t){const i=n[234],r=n[454],s=n[33]??i,o=n[263]??r,a=n[1]??n[4]??i,l=Math.max(Math.abs(r.x-i.x),.001),c=(i.x+r.x)/2,d=Math.atan2(r.y*t-i.y*t,r.x*e-i.x*e),u=wr((a.x-c)/l,-.65,.65),f=wr((a.y-(s.y+o.y)/2)/l-.24,-.35,.35);return{roll:d,yaw:u,pitch:f}}function j3(n,e,t,i,r){const s=lg(e,t,i,r),o=VE(e,t,i);for(const a of["left","right"]){const l=n.earrings[a],c=s.find(u=>u.holder===a);if(!c){l.visible=!1;continue}const d=(c.drawHeight??88)/100;l.visible=!0,l.position.set(c.x,c.y,0),l.scale.set(d*c.mirror,d,d),l.rotation.set(o.pitch*.6,o.yaw*c.mirror*.9,c.rotation)}n.renderer.render(n.scene,n.camera)}function X3(n,e,t,i,r){if(r.placement==="ears"){n.centerAccessory.visible=!1,j3(n,e,t,i,r);return}const s=lg(e,t,i,r)[0],o=VE(e,t,i);if(n.earrings.left.visible=!1,n.earrings.right.visible=!1,!s){n.centerAccessory.visible=!1,n.renderer.render(n.scene,n.camera);return}const a=(s.drawHeight??s.drawWidth??88)/100;n.centerAccessory.visible=!0,n.centerAccessory.position.set(s.x,s.y,0),n.centerAccessory.scale.set(a*s.mirror,a,a),n.centerAccessory.rotation.set(o.pitch*.35,o.yaw*.45,s.rotation),n.renderer.render(n.scene,n.camera)}function $3(n){return n.placement==="ears"?1.05*n.modelScale:n.placement==="eyes"?2.35*n.modelScale:n.placement==="neck"?2.1*n.modelScale:1.4*n.modelScale}function K3(n,e,t,i){const r=$3(i);if(i.placement==="ears"){const s=Math.min(e*.18,120);n.centerAccessory.visible=!1,n.earrings.left.visible=!0,n.earrings.right.visible=!0,n.earrings.left.position.set(-s,0,0),n.earrings.right.position.set(s,0,0),n.earrings.left.scale.set(-r,r,r),n.earrings.right.scale.set(r,r,r),n.earrings.left.rotation.set(0,-.18,0),n.earrings.right.rotation.set(0,.18,0)}else{const s=i.placement==="neck"?-t*.08:0;n.earrings.left.visible=!1,n.earrings.right.visible=!1,n.centerAccessory.visible=!0,n.centerAccessory.position.set(0,s,0),n.centerAccessory.scale.set(r,r,r),n.centerAccessory.rotation.set(0,0,0)}n.renderer.render(n.scene,n.camera)}function q3(n,e,t,i,r){if(!e)return;const s=t*.6,o=r.placement==="ears"?null:{x:0,y:r.placement==="neck"?-i*.08:0,drawWidth:wr(s*r.modelScale,140,360),rotation:0,mirror:1};if(n.save(),n.translate(t/2,i/2),o)qc(n,e,o);else{const a=Math.min(t*.18,120),l=wr(i*.2*r.modelScale,70,150);qc(n,e,{x:-a,y:0,drawHeight:l,rotation:0,mirror:-1,crop:"left"}),qc(n,e,{x:a,y:0,drawHeight:l,rotation:0,mirror:1,crop:"right"})}n.restore()}function Y3({selectedAccessoryId:n,onStatsChange:e}){const t=G.useRef(null),i=G.useRef(null),r=G.useRef(null),s=G.useRef(null),o=G.useRef(!1),a=G.useRef(null),[l,c]=G.useState("Loading product photo"),d=G.useRef({lastFrameTime:performance.now(),frameCount:0,fps:0}),u=G.useMemo(()=>HE(n),[n]),{cameraError:f,isCameraReady:p,isStartingCamera:g,startCamera:v,stopCamera:m,switchFacingMode:h,facingMode:_}=k3(t);G.useEffect(()=>{if(!r.current)return;const R=G3(r.current);return s.current=R,()=>{R.renderer.dispose(),R.scene.traverse(M=>{var S,I,B,F;(I=(S=M.geometry)==null?void 0:S.dispose)==null||I.call(S),(F=(B=M.material)==null?void 0:B.dispose)==null||F.call(B)}),s.current=null}},[]),G.useEffect(()=>{let R=!1;const M=new Image;if(M.crossOrigin="anonymous",M.decoding="async",a.current=null,o.current=!1,c(u.modelUrl?"Loading 3D jewelry asset":"Loading product photo"),u.modelUrl){const S=s.current,I=new n3,B=()=>{if(!S||R||u.placement!=="ears"){c("3D asset missing, using product preview");return}const F=V3();D0(F),U0(F),O0(S,F),o.current=!0,c(`${u.name} placeholder 3D active`)};!u.modelUrl||!S?B():I.load(u.modelUrl,F=>{if(R)return;const W=F.scene;D0(W),U0(W),u.placement==="ears"?O0(S,W):W3(S,W),o.current=!0,c(`${u.name} GLB active`)},void 0,B)}return M.onload=()=>{R||(a.current=M,(!u.modelUrl||!o.current)&&c(`${u.name} product photo active`))},M.onerror=()=>{R||c("Product photo could not load")},M.src=u.tryOnImageUrl??u.thumbnailUrl,()=>{R=!0}},[u]);const y=G.useCallback((R,M,S,I)=>{const B=a.current;B&&(R.save(),R.translate(S/2,I/2),lg(M,S,I,u).forEach(F=>{qc(R,B,F)}),R.restore())},[u]),x=G.useCallback(()=>{const R=i.current,M=t.current;if(!R||!M)return;const S=M.videoWidth||R.clientWidth||960,I=M.videoHeight||R.clientHeight||720;(R.width!==S||R.height!==I)&&(R.width=S,R.height=I);const B=R.getContext("2d");B.clearRect(0,0,S,I),s.current&&(k0(s.current,S,I),s.current.renderer.clear()),o.current&&s.current?K3(s.current,S,I,u):q3(B,a.current,S,I,u)},[u]),b=G.useCallback(R=>{var j;const M=i.current,S=t.current;if(!M||!S)return;const I=S.videoWidth||960,B=S.videoHeight||720;(M.width!==I||M.height!==B)&&(M.width=I,M.height=B);const F=M.getContext("2d");F.clearRect(0,0,I,B),s.current&&(k0(s.current,I,B),s.current.renderer.clear());const W=(j=R.multiFaceLandmarks)==null?void 0:j[0];if(!W){p&&x();return}z3(F,W,I,B),o.current&&s.current?X3(s.current,W,I,B,u):y(F,W,I,B);const Y=performance.now();d.current.frameCount+=1,Y-d.current.lastFrameTime>=1e3&&(d.current.fps=d.current.frameCount,d.current.frameCount=0,d.current.lastFrameTime=Y,e==null||e({fps:d.current.fps,landmarkCount:W.length,trackingStatus:"Tracking"}))},[p,e,x,y,u]),{landmarkCount:A,trackingStatus:w}=B3({videoRef:t,enabled:p,onResults:b});return G.useEffect(()=>(v(),()=>m()),[v,m]),G.useEffect(()=>{e==null||e({fps:d.current.fps,landmarkCount:A,trackingStatus:f?"Camera blocked":w})},[f,A,e,w]),G.useEffect(()=>{p&&x()},[p,l,x]),P.jsxs("section",{className:"overflow-hidden rounded-[2rem] border border-rose-100 bg-[#1C1117] p-4 shadow-aura",children:[P.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3 text-white",children:[P.jsxs("div",{children:[P.jsx("p",{className:"font-display text-2xl",children:"Live AR Preview"}),P.jsx("p",{className:"text-sm text-rose-100/80",children:"Facial data is processed only on this device."})]}),P.jsxs("button",{type:"button",onClick:h,className:"rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10",children:["Camera: ",_==="user"?"Front":"Rear"]})]}),P.jsxs("div",{className:"relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-black sm:aspect-video",children:[P.jsx("video",{ref:t,autoPlay:!0,muted:!0,playsInline:!0,className:"absolute inset-0 h-full w-full scale-x-[-1] object-cover"}),P.jsx("canvas",{ref:i,className:"absolute inset-0 h-full w-full scale-x-[-1]"}),P.jsx("canvas",{ref:r,className:"pointer-events-none absolute inset-0 h-full w-full scale-x-[-1]"}),p?P.jsx("div",{className:"absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white",children:l}):null,!p&&!f?P.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/45 px-6 text-center text-white",children:g?"Starting camera...":"Camera is ready to start."}):null,f?P.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/65 px-6 text-center text-white",children:P.jsxs("div",{className:"max-w-md",children:[P.jsx("p",{children:f}),P.jsx("button",{type:"button",onClick:v,className:"mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-aura-primary transition hover:bg-rose-50",children:"Try Again"})]})}):null]})]})}function J3(){const[n,e]=G.useState(!1),[t,i]=G.useState(Du[0].id),[r,s]=G.useState({fps:0,landmarkCount:0,trackingStatus:"Idle"}),o=HE(t),a=G.useMemo(()=>[{label:"FPS",value:r.fps},{label:"Landmarks",value:r.landmarkCount||0},{label:"Tracking",value:r.trackingStatus},{label:"Accessory",value:o.name}],[o.name,r]);return P.jsxs("main",{className:"mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",children:[P.jsxs("section",{className:"mb-8 rounded-[2rem] bg-white p-8 shadow-aura",children:[P.jsx("p",{className:"mb-3 text-sm uppercase tracking-[0.3em] text-aura-accent",children:"AR Try-On"}),P.jsx("h1",{className:"font-display text-4xl text-aura-primary",children:"Real-time accessory preview with local face tracking"}),P.jsx("p",{className:"mt-4 max-w-3xl text-stone-600",children:"Privacy notice: AuraAR processes facial landmarks only on your device. No images, videos, or landmark points are stored or sent to any server."}),P.jsxs("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:[P.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-4",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:"Target"}),P.jsx("p",{className:"mt-2 font-display text-2xl text-aura-primary",children:"30 FPS"})]}),P.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-4",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:"Processing"}),P.jsx("p",{className:"mt-2 font-display text-2xl text-aura-primary",children:"Local Only"})]}),P.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-4",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:"Current Mode"}),P.jsx("p",{className:"mt-2 font-display text-2xl text-aura-primary",children:"Product Try-On"})]})]}),n?null:P.jsx("button",{type:"button",onClick:()=>e(!0),className:"mt-6 rounded-full bg-aura-primary px-6 py-3 font-semibold text-white",children:"I Understand, Start Camera"})]}),P.jsxs("section",{className:"grid gap-8 xl:grid-cols-[minmax(0,1.6fr)_380px]",children:[P.jsxs("div",{className:"space-y-6",children:[n?P.jsx(Y3,{selectedAccessoryId:t,onStatsChange:s}):P.jsx("div",{className:"flex min-h-[540px] items-center justify-center rounded-[2rem] border border-dashed border-rose-200 bg-white p-8 text-center shadow-aura",children:P.jsxs("div",{children:[P.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Camera permission required"}),P.jsx("p",{className:"mt-3 max-w-lg text-stone-600",children:"Accept the privacy notice to enable the live try-on view. The webcam is only activated on this page."})]})}),P.jsx("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:a.map(l=>P.jsxs("article",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[P.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:l.label}),P.jsx("p",{className:"mt-3 font-display text-3xl text-aura-charcoal",children:l.value})]},l.label))})]}),P.jsxs("div",{className:"space-y-6",children:[P.jsx($C,{accessories:Du,selectedAccessoryId:t,onSelectAccessory:i}),P.jsxs("section",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[P.jsx("h2",{className:"font-display text-2xl text-aura-charcoal",children:"Current scope"}),P.jsxs("ul",{className:"mt-4 space-y-2 text-sm text-stone-600",children:[P.jsx("li",{children:"Webcam access with front and rear camera toggle"}),P.jsx("li",{children:"468 MediaPipe face landmarks drawn on top of the video"}),P.jsx("li",{children:"Three.js 3D earrings anchored to ear-side face landmarks"}),P.jsx("li",{children:"Head roll, yaw, and pitch estimates mapped to the earring model"}),P.jsx("li",{children:"Product photo fallback for glasses and necklace placements"}),P.jsx("li",{children:"Live FPS counter for quick performance feedback"})]})]}),P.jsxs("section",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[P.jsx("h2",{className:"font-display text-2xl text-aura-charcoal",children:"Why this matters"}),P.jsx("p",{className:"mt-4 text-sm leading-6 text-stone-600",children:"This page is the core experimental artifact of the thesis. It demonstrates how responsive AR feedback, accessory fit visualization, and local privacy handling can influence confidence and purchase intention in online accessory shopping."})]})]})]})]})}function Z3(){return P.jsx(LC,{children:P.jsxs("div",{className:"min-h-screen bg-aura-cream",children:[P.jsx(UC,{}),P.jsxs(hA,{children:[P.jsx(ur,{path:"/",element:P.jsx(jC,{})}),P.jsx(ur,{path:"/shop",element:P.jsx(WC,{})}),P.jsx(ur,{path:"/tryon",element:P.jsx(J3,{})}),P.jsx(ur,{path:"/about",element:P.jsx(BC,{})}),P.jsx(ur,{path:"/auth",element:P.jsx(zC,{})}),P.jsx(ur,{path:"/profile",element:P.jsx(OC,{children:P.jsx(XC,{})})}),P.jsx(ur,{path:"*",element:P.jsx(oS,{to:"/tryon",replace:!0})})]})]})})}Uf.createRoot(document.getElementById("root")).render(P.jsx(K0.StrictMode,{children:P.jsx(SA,{children:P.jsx(Z3,{})})}));
