function Dx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var ld=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ux(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ov={exports:{}},Pu={},kv={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),Ox=Symbol.for("react.portal"),kx=Symbol.for("react.fragment"),Fx=Symbol.for("react.strict_mode"),Bx=Symbol.for("react.profiler"),zx=Symbol.for("react.provider"),Hx=Symbol.for("react.context"),Vx=Symbol.for("react.forward_ref"),Gx=Symbol.for("react.suspense"),Wx=Symbol.for("react.memo"),jx=Symbol.for("react.lazy"),Hm=Symbol.iterator;function Xx(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var Fv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bv=Object.assign,zv={};function ta(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||Fv}ta.prototype.isReactComponent={};ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hv(){}Hv.prototype=ta.prototype;function gp(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||Fv}var vp=gp.prototype=new Hv;vp.constructor=gp;Bv(vp,ta.prototype);vp.isPureReactComponent=!0;var Vm=Array.isArray,Vv=Object.prototype.hasOwnProperty,_p={current:null},Gv={key:!0,ref:!0,__self:!0,__source:!0};function Wv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vv.call(e,i)&&!Gv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_l,type:t,key:s,ref:o,props:r,_owner:_p.current}}function $x(t,e){return{$$typeof:_l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===_l}function Yx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gm=/\/+/g;function cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yx(""+t.key):e.toString(36)}function Tc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _l:case Ox:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+cd(o,0):i,Vm(r)?(n="",t!=null&&(n=t.replace(Gm,"$&/")+"/"),Tc(r,e,n,"",function(c){return c})):r!=null&&(yp(r)&&(r=$x(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Gm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Vm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+cd(s,a);o+=Tc(s,e,n,l,r)}else if(l=Xx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+cd(s,a++),o+=Tc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zl(t,e,n){if(t==null)return t;var i=[],r=0;return Tc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dn={current:null},Ac={transition:null},Kx={ReactCurrentDispatcher:Dn,ReactCurrentBatchConfig:Ac,ReactCurrentOwner:_p};function jv(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:zl,forEach:function(t,e,n){zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zl(t,function(){e++}),e},toArray:function(t){return zl(t,function(e){return e})||[]},only:function(t){if(!yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ct.Component=ta;ct.Fragment=kx;ct.Profiler=Bx;ct.PureComponent=gp;ct.StrictMode=Fx;ct.Suspense=Gx;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;ct.act=jv;ct.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_p.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Vv.call(e,l)&&!Gv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_l,type:t.type,key:r,ref:s,props:i,_owner:o}};ct.createContext=function(t){return t={$$typeof:Hx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zx,_context:t},t.Consumer=t};ct.createElement=Wv;ct.createFactory=function(t){var e=Wv.bind(null,t);return e.type=t,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(t){return{$$typeof:Vx,render:t}};ct.isValidElement=yp;ct.lazy=function(t){return{$$typeof:jx,_payload:{_status:-1,_result:t},_init:qx}};ct.memo=function(t,e){return{$$typeof:Wx,type:t,compare:e===void 0?null:e}};ct.startTransition=function(t){var e=Ac.transition;Ac.transition={};try{t()}finally{Ac.transition=e}};ct.unstable_act=jv;ct.useCallback=function(t,e){return Dn.current.useCallback(t,e)};ct.useContext=function(t){return Dn.current.useContext(t)};ct.useDebugValue=function(){};ct.useDeferredValue=function(t){return Dn.current.useDeferredValue(t)};ct.useEffect=function(t,e){return Dn.current.useEffect(t,e)};ct.useId=function(){return Dn.current.useId()};ct.useImperativeHandle=function(t,e,n){return Dn.current.useImperativeHandle(t,e,n)};ct.useInsertionEffect=function(t,e){return Dn.current.useInsertionEffect(t,e)};ct.useLayoutEffect=function(t,e){return Dn.current.useLayoutEffect(t,e)};ct.useMemo=function(t,e){return Dn.current.useMemo(t,e)};ct.useReducer=function(t,e,n){return Dn.current.useReducer(t,e,n)};ct.useRef=function(t){return Dn.current.useRef(t)};ct.useState=function(t){return Dn.current.useState(t)};ct.useSyncExternalStore=function(t,e,n){return Dn.current.useSyncExternalStore(t,e,n)};ct.useTransition=function(){return Dn.current.useTransition()};ct.version="18.3.1";kv.exports=ct;var J=kv.exports;const Xv=Ux(J),Jx=Dx({__proto__:null,default:Xv},[J]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx=J,Qx=Symbol.for("react.element"),e2=Symbol.for("react.fragment"),t2=Object.prototype.hasOwnProperty,n2=Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i2={key:!0,ref:!0,__self:!0,__source:!0};function $v(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)t2.call(e,i)&&!i2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Qx,type:t,key:s,ref:o,props:r,_owner:n2.current}}Pu.Fragment=e2;Pu.jsx=$v;Pu.jsxs=$v;Ov.exports=Pu;var O=Ov.exports,Ef={},Yv={exports:{}},Qn={},qv={exports:{}},Kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,re){var oe=F.length;F.push(re);e:for(;0<oe;){var ge=oe-1>>>1,Oe=F[ge];if(0<r(Oe,re))F[ge]=re,F[oe]=Oe,oe=ge;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var re=F[0],oe=F.pop();if(oe!==re){F[0]=oe;e:for(var ge=0,Oe=F.length,ht=Oe>>>1;ge<ht;){var Q=2*(ge+1)-1,me=F[Q],Pe=Q+1,_e=F[Pe];if(0>r(me,oe))Pe<Oe&&0>r(_e,me)?(F[ge]=_e,F[Pe]=oe,ge=Pe):(F[ge]=me,F[Q]=oe,ge=Q);else if(Pe<Oe&&0>r(_e,oe))F[ge]=_e,F[Pe]=oe,ge=Pe;else break e}}return re}function r(F,re){var oe=F.sortIndex-re.sortIndex;return oe!==0?oe:F.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,p=3,v=!1,x=!1,E=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(F){for(var re=n(c);re!==null;){if(re.callback===null)i(c);else if(re.startTime<=F)i(c),re.sortIndex=re.expirationTime,e(l,re);else break;re=n(c)}}function M(F){if(E=!1,S(F),!x)if(n(l)!==null)x=!0,ee(P);else{var re=n(c);re!==null&&le(M,re.startTime-F)}}function P(F,re){x=!1,E&&(E=!1,u(N),N=-1),v=!0;var oe=p;try{for(S(re),h=n(l);h!==null&&(!(h.expirationTime>re)||F&&!D());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,p=h.priorityLevel;var Oe=ge(h.expirationTime<=re);re=t.unstable_now(),typeof Oe=="function"?h.callback=Oe:h===n(l)&&i(l),S(re)}else i(l);h=n(l)}if(h!==null)var ht=!0;else{var Q=n(c);Q!==null&&le(M,Q.startTime-re),ht=!1}return ht}finally{h=null,p=oe,v=!1}}var b=!1,R=null,N=-1,A=5,w=-1;function D(){return!(t.unstable_now()-w<A)}function Y(){if(R!==null){var F=t.unstable_now();w=F;var re=!0;try{re=R(!0,F)}finally{re?V():(b=!1,R=null)}}else b=!1}var V;if(typeof y=="function")V=function(){y(Y)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,se=Z.port2;Z.port1.onmessage=Y,V=function(){se.postMessage(null)}}else V=function(){m(Y,0)};function ee(F){R=F,b||(b=!0,V())}function le(F,re){N=m(function(){F(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,ee(P))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(p){case 1:case 2:case 3:var re=3;break;default:re=p}var oe=p;p=re;try{return F()}finally{p=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,re){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var oe=p;p=F;try{return re()}finally{p=oe}},t.unstable_scheduleCallback=function(F,re,oe){var ge=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?ge+oe:ge):oe=ge,F){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=oe+Oe,F={id:d++,callback:re,priorityLevel:F,startTime:oe,expirationTime:Oe,sortIndex:-1},oe>ge?(F.sortIndex=oe,e(c,F),n(l)===null&&F===n(c)&&(E?(u(N),N=-1):E=!0,le(M,oe-ge))):(F.sortIndex=Oe,e(l,F),x||v||(x=!0,ee(P))),F},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(F){var re=p;return function(){var oe=p;p=re;try{return F.apply(this,arguments)}finally{p=oe}}}})(Kv);qv.exports=Kv;var r2=qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s2=J,Zn=r2;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jv=new Set,Wa={};function Gs(t,e){zo(t,e),zo(t+"Capture",e)}function zo(t,e){for(Wa[t]=e,t=0;t<e.length;t++)Jv.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,o2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},jm={};function a2(t){return Mf.call(jm,t)?!0:Mf.call(Wm,t)?!1:o2.test(t)?jm[t]=!0:(Wm[t]=!0,!1)}function l2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function c2(t,e,n,i){if(e===null||typeof e>"u"||l2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){vn[t]=new Un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];vn[e]=new Un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){vn[t]=new Un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){vn[t]=new Un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){vn[t]=new Un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){vn[t]=new Un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){vn[t]=new Un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){vn[t]=new Un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){vn[t]=new Un(t,5,!1,t.toLowerCase(),null,!1,!1)});var xp=/[\-:]([a-z])/g;function Sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xp,Sp);vn[e]=new Un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xp,Sp);vn[e]=new Un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xp,Sp);vn[e]=new Un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){vn[t]=new Un(t,1,!1,t.toLowerCase(),null,!1,!1)});vn.xlinkHref=new Un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){vn[t]=new Un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ep(t,e,n,i){var r=vn.hasOwnProperty(e)?vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(c2(e,n,r,i)&&(n=null),i||r===null?a2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gr=s2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hl=Symbol.for("react.element"),ho=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),Mp=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Af=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),e_=Symbol.for("react.offscreen"),Xm=Symbol.iterator;function da(t){return t===null||typeof t!="object"?null:(t=Xm&&t[Xm]||t["@@iterator"],typeof t=="function"?t:null)}var jt=Object.assign,ud;function wa(t){if(ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ud=e&&e[1]||""}return`
`+ud+t}var dd=!1;function fd(t,e){if(!t||dd)return"";dd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wa(t):""}function u2(t){switch(t.tag){case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return t=fd(t.type,!1),t;case 11:return t=fd(t.type.render,!1),t;case 1:return t=fd(t.type,!0),t;default:return""}}function Cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case po:return"Fragment";case ho:return"Portal";case wf:return"Profiler";case Mp:return"StrictMode";case Tf:return"Suspense";case Af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qv:return(t.displayName||"Context")+".Consumer";case Zv:return(t._context.displayName||"Context")+".Provider";case wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tp:return e=t.displayName||null,e!==null?e:Cf(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Cf(t(e))}catch{}}return null}function d2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cf(e);case 8:return e===Mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ts(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function t_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f2(t){var e=t_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vl(t){t._valueTracker||(t._valueTracker=f2(t))}function n_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=t_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rf(t,e){var n=e.checked;return jt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $m(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ts(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function i_(t,e){e=e.checked,e!=null&&Ep(t,"checked",e,!1)}function bf(t,e){i_(t,e);var n=ts(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pf(t,e.type,ts(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pf(t,e,n){(e!=="number"||$c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ta=Array.isArray;function Co(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ts(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function If(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return jt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(Ta(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ts(n)}}function r_(t,e){var n=ts(e.value),i=ts(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gl,o_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gl=Gl||document.createElement("div"),Gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h2=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(t){h2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),La[e]=La[t]})});function a_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||La.hasOwnProperty(t)&&La[t]?(""+e).trim():e+"px"}function l_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=a_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var p2=jt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nf(t,e){if(e){if(p2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function Df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function Ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,Ro=null,bo=null;function Jm(t){if(t=Sl(t)){if(typeof Of!="function")throw Error(he(280));var e=t.stateNode;e&&(e=Uu(e),Of(t.stateNode,t.type,e))}}function c_(t){Ro?bo?bo.push(t):bo=[t]:Ro=t}function u_(){if(Ro){var t=Ro,e=bo;if(bo=Ro=null,Jm(t),e)for(t=0;t<e.length;t++)Jm(e[t])}}function d_(t,e){return t(e)}function f_(){}var hd=!1;function h_(t,e,n){if(hd)return t(e,n);hd=!0;try{return d_(t,e,n)}finally{hd=!1,(Ro!==null||bo!==null)&&(f_(),u_())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var i=Uu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var kf=!1;if(cr)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){kf=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{kf=!1}function m2(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Na=!1,Yc=null,qc=!1,Ff=null,g2={onError:function(t){Na=!0,Yc=t}};function v2(t,e,n,i,r,s,o,a,l){Na=!1,Yc=null,m2.apply(g2,arguments)}function _2(t,e,n,i,r,s,o,a,l){if(v2.apply(this,arguments),Na){if(Na){var c=Yc;Na=!1,Yc=null}else throw Error(he(198));qc||(qc=!0,Ff=c)}}function Ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zm(t){if(Ws(t)!==t)throw Error(he(188))}function y2(t){var e=t.alternate;if(!e){if(e=Ws(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Zm(r),t;if(s===i)return Zm(r),e;s=s.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function m_(t){return t=y2(t),t!==null?g_(t):null}function g_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=g_(t);if(e!==null)return e;t=t.sibling}return null}var v_=Zn.unstable_scheduleCallback,Qm=Zn.unstable_cancelCallback,x2=Zn.unstable_shouldYield,S2=Zn.unstable_requestPaint,Jt=Zn.unstable_now,E2=Zn.unstable_getCurrentPriorityLevel,Cp=Zn.unstable_ImmediatePriority,__=Zn.unstable_UserBlockingPriority,Kc=Zn.unstable_NormalPriority,M2=Zn.unstable_LowPriority,y_=Zn.unstable_IdlePriority,Iu=null,Di=null;function w2(t){if(Di&&typeof Di.onCommitFiberRoot=="function")try{Di.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ei=Math.clz32?Math.clz32:C2,T2=Math.log,A2=Math.LN2;function C2(t){return t>>>=0,t===0?32:31-(T2(t)/A2|0)|0}var Wl=64,jl=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Aa(a):(s&=o,s!==0&&(i=Aa(s)))}else o=n&~r,o!==0?i=Aa(o):s!==0&&(i=Aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ei(e),r=1<<n,i|=t[n],e&=~r;return i}function R2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=R2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function x_(){var t=Wl;return Wl<<=1,!(Wl&4194240)&&(Wl=64),t}function pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ei(e),t[e]=n}function P2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Rp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var bt=0;function S_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E_,bp,M_,w_,T_,zf=!1,Xl=[],Vr=null,Gr=null,Wr=null,$a=new Map,Ya=new Map,Lr=[],I2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eg(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(e.pointerId)}}function ha(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Sl(e),e!==null&&bp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function L2(t,e,n,i,r){switch(e){case"focusin":return Vr=ha(Vr,t,e,n,i,r),!0;case"dragenter":return Gr=ha(Gr,t,e,n,i,r),!0;case"mouseover":return Wr=ha(Wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $a.set(s,ha($a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ya.set(s,ha(Ya.get(s)||null,t,e,n,i,r)),!0}return!1}function A_(t){var e=Cs(t.target);if(e!==null){var n=Ws(e);if(n!==null){if(e=n.tag,e===13){if(e=p_(n),e!==null){t.blockedOn=e,T_(t.priority,function(){M_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uf=i,n.target.dispatchEvent(i),Uf=null}else return e=Sl(n),e!==null&&bp(e),t.blockedOn=n,!1;e.shift()}return!0}function tg(t,e,n){Cc(t)&&n.delete(e)}function N2(){zf=!1,Vr!==null&&Cc(Vr)&&(Vr=null),Gr!==null&&Cc(Gr)&&(Gr=null),Wr!==null&&Cc(Wr)&&(Wr=null),$a.forEach(tg),Ya.forEach(tg)}function pa(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,Zn.unstable_scheduleCallback(Zn.unstable_NormalPriority,N2)))}function qa(t){function e(r){return pa(r,t)}if(0<Xl.length){pa(Xl[0],t);for(var n=1;n<Xl.length;n++){var i=Xl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vr!==null&&pa(Vr,t),Gr!==null&&pa(Gr,t),Wr!==null&&pa(Wr,t),$a.forEach(e),Ya.forEach(e),n=0;n<Lr.length;n++)i=Lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Lr.length&&(n=Lr[0],n.blockedOn===null);)A_(n),n.blockedOn===null&&Lr.shift()}var Po=gr.ReactCurrentBatchConfig,Zc=!0;function D2(t,e,n,i){var r=bt,s=Po.transition;Po.transition=null;try{bt=1,Pp(t,e,n,i)}finally{bt=r,Po.transition=s}}function U2(t,e,n,i){var r=bt,s=Po.transition;Po.transition=null;try{bt=4,Pp(t,e,n,i)}finally{bt=r,Po.transition=s}}function Pp(t,e,n,i){if(Zc){var r=Hf(t,e,n,i);if(r===null)wd(t,e,i,Qc,n),eg(t,i);else if(L2(r,t,e,n,i))i.stopPropagation();else if(eg(t,i),e&4&&-1<I2.indexOf(t)){for(;r!==null;){var s=Sl(r);if(s!==null&&E_(s),s=Hf(t,e,n,i),s===null&&wd(t,e,i,Qc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else wd(t,e,i,null,n)}}var Qc=null;function Hf(t,e,n,i){if(Qc=null,t=Ap(i),t=Cs(t),t!==null)if(e=Ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=p_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qc=t,null}function C_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E2()){case Cp:return 1;case __:return 4;case Kc:case M2:return 16;case y_:return 536870912;default:return 16}default:return 16}}var Br=null,Ip=null,Rc=null;function R_(){if(Rc)return Rc;var t,e=Ip,n=e.length,i,r="value"in Br?Br.value:Br.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Rc=r.slice(t,1<i?1-i:void 0)}function bc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function ng(){return!1}function ei(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:ng,this.isPropagationStopped=ng,this}return jt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lp=ei(na),xl=jt({},na,{view:0,detail:0}),O2=ei(xl),md,gd,ma,Lu=jt({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ma&&(ma&&t.type==="mousemove"?(md=t.screenX-ma.screenX,gd=t.screenY-ma.screenY):gd=md=0,ma=t),md)},movementY:function(t){return"movementY"in t?t.movementY:gd}}),ig=ei(Lu),k2=jt({},Lu,{dataTransfer:0}),F2=ei(k2),B2=jt({},xl,{relatedTarget:0}),vd=ei(B2),z2=jt({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),H2=ei(z2),V2=jt({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G2=ei(V2),W2=jt({},na,{data:0}),rg=ei(W2),j2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$2[t])?!!e[t]:!1}function Np(){return Y2}var q2=jt({},xl,{key:function(t){if(t.key){var e=j2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Np,charCode:function(t){return t.type==="keypress"?bc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K2=ei(q2),J2=jt({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sg=ei(J2),Z2=jt({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Np}),Q2=ei(Z2),eS=jt({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=ei(eS),nS=jt({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iS=ei(nS),rS=[9,13,27,32],Dp=cr&&"CompositionEvent"in window,Da=null;cr&&"documentMode"in document&&(Da=document.documentMode);var sS=cr&&"TextEvent"in window&&!Da,b_=cr&&(!Dp||Da&&8<Da&&11>=Da),og=" ",ag=!1;function P_(t,e){switch(t){case"keyup":return rS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mo=!1;function oS(t,e){switch(t){case"compositionend":return I_(e);case"keypress":return e.which!==32?null:(ag=!0,og);case"textInput":return t=e.data,t===og&&ag?null:t;default:return null}}function aS(t,e){if(mo)return t==="compositionend"||!Dp&&P_(t,e)?(t=R_(),Rc=Ip=Br=null,mo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b_&&e.locale!=="ko"?null:e.data;default:return null}}var lS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lS[t.type]:e==="textarea"}function L_(t,e,n,i){c_(i),e=eu(e,"onChange"),0<e.length&&(n=new Lp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ua=null,Ka=null;function cS(t){G_(t,0)}function Nu(t){var e=_o(t);if(n_(e))return t}function uS(t,e){if(t==="change")return e}var N_=!1;if(cr){var _d;if(cr){var yd="oninput"in document;if(!yd){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),yd=typeof cg.oninput=="function"}_d=yd}else _d=!1;N_=_d&&(!document.documentMode||9<document.documentMode)}function ug(){Ua&&(Ua.detachEvent("onpropertychange",D_),Ka=Ua=null)}function D_(t){if(t.propertyName==="value"&&Nu(Ka)){var e=[];L_(e,Ka,t,Ap(t)),h_(cS,e)}}function dS(t,e,n){t==="focusin"?(ug(),Ua=e,Ka=n,Ua.attachEvent("onpropertychange",D_)):t==="focusout"&&ug()}function fS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nu(Ka)}function hS(t,e){if(t==="click")return Nu(e)}function pS(t,e){if(t==="input"||t==="change")return Nu(e)}function mS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ti=typeof Object.is=="function"?Object.is:mS;function Ja(t,e){if(Ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mf.call(e,r)||!Ti(t[r],e[r]))return!1}return!0}function dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fg(t,e){var n=dg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dg(n)}}function U_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O_(){for(var t=window,e=$c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$c(t.document)}return e}function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gS(t){var e=O_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U_(n.ownerDocument.documentElement,n)){if(i!==null&&Up(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=fg(n,s);var o=fg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vS=cr&&"documentMode"in document&&11>=document.documentMode,go=null,Vf=null,Oa=null,Gf=!1;function hg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gf||go==null||go!==$c(i)||(i=go,"selectionStart"in i&&Up(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oa&&Ja(Oa,i)||(Oa=i,i=eu(Vf,"onSelect"),0<i.length&&(e=new Lp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=go)))}function Yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vo={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionend:Yl("Transition","TransitionEnd")},xd={},k_={};cr&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function Du(t){if(xd[t])return xd[t];if(!vo[t])return t;var e=vo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return xd[t]=e[n];return t}var F_=Du("animationend"),B_=Du("animationiteration"),z_=Du("animationstart"),H_=Du("transitionend"),V_=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ss(t,e){V_.set(t,e),Gs(e,[t])}for(var Sd=0;Sd<pg.length;Sd++){var Ed=pg[Sd],_S=Ed.toLowerCase(),yS=Ed[0].toUpperCase()+Ed.slice(1);ss(_S,"on"+yS)}ss(F_,"onAnimationEnd");ss(B_,"onAnimationIteration");ss(z_,"onAnimationStart");ss("dblclick","onDoubleClick");ss("focusin","onFocus");ss("focusout","onBlur");ss(H_,"onTransitionEnd");zo("onMouseEnter",["mouseout","mouseover"]);zo("onMouseLeave",["mouseout","mouseover"]);zo("onPointerEnter",["pointerout","pointerover"]);zo("onPointerLeave",["pointerout","pointerover"]);Gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function mg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_2(i,e,void 0,t),t.currentTarget=null}function G_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;mg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;mg(r,a,c),s=l}}}if(qc)throw t=Ff,qc=!1,Ff=null,t}function Bt(t,e){var n=e[Yf];n===void 0&&(n=e[Yf]=new Set);var i=t+"__bubble";n.has(i)||(W_(e,t,2,!1),n.add(i))}function Md(t,e,n){var i=0;e&&(i|=4),W_(n,t,i,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[ql]){t[ql]=!0,Jv.forEach(function(n){n!=="selectionchange"&&(xS.has(n)||Md(n,!1,t),Md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,Md("selectionchange",!1,e))}}function W_(t,e,n,i){switch(C_(e)){case 1:var r=D2;break;case 4:r=U2;break;default:r=Pp}n=r.bind(null,e,n,t),r=void 0,!kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}h_(function(){var c=s,d=Ap(n),h=[];e:{var p=V_.get(t);if(p!==void 0){var v=Lp,x=t;switch(t){case"keypress":if(bc(n)===0)break e;case"keydown":case"keyup":v=K2;break;case"focusin":x="focus",v=vd;break;case"focusout":x="blur",v=vd;break;case"beforeblur":case"afterblur":v=vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=F2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Q2;break;case F_:case B_:case z_:v=H2;break;case H_:v=tS;break;case"scroll":v=O2;break;case"wheel":v=iS;break;case"copy":case"cut":case"paste":v=G2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sg}var E=(e&4)!==0,m=!E&&t==="scroll",u=E?p!==null?p+"Capture":null:p;E=[];for(var y=c,S;y!==null;){S=y;var M=S.stateNode;if(S.tag===5&&M!==null&&(S=M,u!==null&&(M=Xa(y,u),M!=null&&E.push(Qa(y,M,S)))),m)break;y=y.return}0<E.length&&(p=new v(p,x,null,n,d),h.push({event:p,listeners:E}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==Uf&&(x=n.relatedTarget||n.fromElement)&&(Cs(x)||x[ur]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?Cs(x):null,x!==null&&(m=Ws(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(E=ig,M="onMouseLeave",u="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(E=sg,M="onPointerLeave",u="onPointerEnter",y="pointer"),m=v==null?p:_o(v),S=x==null?p:_o(x),p=new E(M,y+"leave",v,n,d),p.target=m,p.relatedTarget=S,M=null,Cs(d)===c&&(E=new E(u,y+"enter",x,n,d),E.target=S,E.relatedTarget=m,M=E),m=M,v&&x)t:{for(E=v,u=x,y=0,S=E;S;S=Js(S))y++;for(S=0,M=u;M;M=Js(M))S++;for(;0<y-S;)E=Js(E),y--;for(;0<S-y;)u=Js(u),S--;for(;y--;){if(E===u||u!==null&&E===u.alternate)break t;E=Js(E),u=Js(u)}E=null}else E=null;v!==null&&gg(h,p,v,E,!1),x!==null&&m!==null&&gg(h,m,x,E,!0)}}e:{if(p=c?_o(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var P=uS;else if(lg(p))if(N_)P=pS;else{P=fS;var b=dS}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=hS);if(P&&(P=P(t,c))){L_(h,P,n,d);break e}b&&b(t,p,c),t==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&Pf(p,"number",p.value)}switch(b=c?_o(c):window,t){case"focusin":(lg(b)||b.contentEditable==="true")&&(go=b,Vf=c,Oa=null);break;case"focusout":Oa=Vf=go=null;break;case"mousedown":Gf=!0;break;case"contextmenu":case"mouseup":case"dragend":Gf=!1,hg(h,n,d);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":hg(h,n,d)}var R;if(Dp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else mo?P_(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(b_&&n.locale!=="ko"&&(mo||N!=="onCompositionStart"?N==="onCompositionEnd"&&mo&&(R=R_()):(Br=d,Ip="value"in Br?Br.value:Br.textContent,mo=!0)),b=eu(c,N),0<b.length&&(N=new rg(N,t,null,n,d),h.push({event:N,listeners:b}),R?N.data=R:(R=I_(n),R!==null&&(N.data=R)))),(R=sS?oS(t,n):aS(t,n))&&(c=eu(c,"onBeforeInput"),0<c.length&&(d=new rg("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=R))}G_(h,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xa(t,n),s!=null&&i.unshift(Qa(t,s,r)),s=Xa(t,e),s!=null&&i.push(Qa(t,s,r))),t=t.return}return i}function Js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Xa(n,s),l!=null&&o.unshift(Qa(n,l,a))):r||(l=Xa(n,s),l!=null&&o.push(Qa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SS=/\r\n?/g,ES=/\u0000|\uFFFD/g;function vg(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(ES,"")}function Kl(t,e,n){if(e=vg(e),vg(t)!==e&&n)throw Error(he(425))}function tu(){}var Wf=null,jf=null;function Xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(TS)}:$f;function TS(t){setTimeout(function(){throw t})}function Td(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qa(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ia=Math.random().toString(36).slice(2),Li="__reactFiber$"+ia,el="__reactProps$"+ia,ur="__reactContainer$"+ia,Yf="__reactEvents$"+ia,AS="__reactListeners$"+ia,CS="__reactHandles$"+ia;function Cs(t){var e=t[Li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yg(t);t!==null;){if(n=t[Li])return n;t=yg(t)}return e}t=n,n=t.parentNode}return null}function Sl(t){return t=t[Li]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _o(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function Uu(t){return t[el]||null}var qf=[],yo=-1;function os(t){return{current:t}}function zt(t){0>yo||(t.current=qf[yo],qf[yo]=null,yo--)}function kt(t,e){yo++,qf[yo]=t.current,t.current=e}var ns={},Tn=os(ns),Hn=os(!1),Ds=ns;function Ho(t,e){var n=t.type.contextTypes;if(!n)return ns;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Vn(t){return t=t.childContextTypes,t!=null}function nu(){zt(Hn),zt(Tn)}function xg(t,e,n){if(Tn.current!==ns)throw Error(he(168));kt(Tn,e),kt(Hn,n)}function j_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,d2(t)||"Unknown",r));return jt({},n,i)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ns,Ds=Tn.current,kt(Tn,t),kt(Hn,Hn.current),!0}function Sg(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=j_(t,e,Ds),i.__reactInternalMemoizedMergedChildContext=t,zt(Hn),zt(Tn),kt(Tn,t)):zt(Hn),kt(Hn,n)}var Zi=null,Ou=!1,Ad=!1;function X_(t){Zi===null?Zi=[t]:Zi.push(t)}function RS(t){Ou=!0,X_(t)}function as(){if(!Ad&&Zi!==null){Ad=!0;var t=0,e=bt;try{var n=Zi;for(bt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Zi=null,Ou=!1}catch(r){throw Zi!==null&&(Zi=Zi.slice(t+1)),v_(Cp,as),r}finally{bt=e,Ad=!1}}return null}var xo=[],So=0,ru=null,su=0,ii=[],ri=0,Us=null,er=1,tr="";function xs(t,e){xo[So++]=su,xo[So++]=ru,ru=t,su=e}function $_(t,e,n){ii[ri++]=er,ii[ri++]=tr,ii[ri++]=Us,Us=t;var i=er;t=tr;var r=32-Ei(i)-1;i&=~(1<<r),n+=1;var s=32-Ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,er=1<<32-Ei(e)+r|n<<r|i,tr=s+t}else er=1<<s|n<<r|i,tr=t}function Op(t){t.return!==null&&(xs(t,1),$_(t,1,0))}function kp(t){for(;t===ru;)ru=xo[--So],xo[So]=null,su=xo[--So],xo[So]=null;for(;t===Us;)Us=ii[--ri],ii[ri]=null,tr=ii[--ri],ii[ri]=null,er=ii[--ri],ii[ri]=null}var Jn=null,Kn=null,Ht=!1,gi=null;function Y_(t,e){var n=si(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jn=t,Kn=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jn=t,Kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Us!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=si(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jn=t,Kn=null,!0):!1;default:return!1}}function Kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jf(t){if(Ht){var e=Kn;if(e){var n=e;if(!Eg(t,e)){if(Kf(t))throw Error(he(418));e=jr(n.nextSibling);var i=Jn;e&&Eg(t,e)?Y_(i,n):(t.flags=t.flags&-4097|2,Ht=!1,Jn=t)}}else{if(Kf(t))throw Error(he(418));t.flags=t.flags&-4097|2,Ht=!1,Jn=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jn=t}function Jl(t){if(t!==Jn)return!1;if(!Ht)return Mg(t),Ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xf(t.type,t.memoizedProps)),e&&(e=Kn)){if(Kf(t))throw q_(),Error(he(418));for(;e;)Y_(t,e),e=jr(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kn=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kn=null}}else Kn=Jn?jr(t.stateNode.nextSibling):null;return!0}function q_(){for(var t=Kn;t;)t=jr(t.nextSibling)}function Vo(){Kn=Jn=null,Ht=!1}function Fp(t){gi===null?gi=[t]:gi.push(t)}var bS=gr.ReactCurrentBatchConfig;function ga(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Zl(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wg(t){var e=t._init;return e(t._payload)}function K_(t){function e(u,y){if(t){var S=u.deletions;S===null?(u.deletions=[y],u.flags|=16):S.push(y)}}function n(u,y){if(!t)return null;for(;y!==null;)e(u,y),y=y.sibling;return null}function i(u,y){for(u=new Map;y!==null;)y.key!==null?u.set(y.key,y):u.set(y.index,y),y=y.sibling;return u}function r(u,y){return u=qr(u,y),u.index=0,u.sibling=null,u}function s(u,y,S){return u.index=S,t?(S=u.alternate,S!==null?(S=S.index,S<y?(u.flags|=2,y):S):(u.flags|=2,y)):(u.flags|=1048576,y)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,y,S,M){return y===null||y.tag!==6?(y=Nd(S,u.mode,M),y.return=u,y):(y=r(y,S),y.return=u,y)}function l(u,y,S,M){var P=S.type;return P===po?d(u,y,S.props.children,M,S.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Pr&&wg(P)===y.type)?(M=r(y,S.props),M.ref=ga(u,y,S),M.return=u,M):(M=Oc(S.type,S.key,S.props,null,u.mode,M),M.ref=ga(u,y,S),M.return=u,M)}function c(u,y,S,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Dd(S,u.mode,M),y.return=u,y):(y=r(y,S.children||[]),y.return=u,y)}function d(u,y,S,M,P){return y===null||y.tag!==7?(y=Ns(S,u.mode,M,P),y.return=u,y):(y=r(y,S),y.return=u,y)}function h(u,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Nd(""+y,u.mode,S),y.return=u,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Hl:return S=Oc(y.type,y.key,y.props,null,u.mode,S),S.ref=ga(u,null,y),S.return=u,S;case ho:return y=Dd(y,u.mode,S),y.return=u,y;case Pr:var M=y._init;return h(u,M(y._payload),S)}if(Ta(y)||da(y))return y=Ns(y,u.mode,S,null),y.return=u,y;Zl(u,y)}return null}function p(u,y,S,M){var P=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return P!==null?null:a(u,y,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Hl:return S.key===P?l(u,y,S,M):null;case ho:return S.key===P?c(u,y,S,M):null;case Pr:return P=S._init,p(u,y,P(S._payload),M)}if(Ta(S)||da(S))return P!==null?null:d(u,y,S,M,null);Zl(u,S)}return null}function v(u,y,S,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(S)||null,a(y,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Hl:return u=u.get(M.key===null?S:M.key)||null,l(y,u,M,P);case ho:return u=u.get(M.key===null?S:M.key)||null,c(y,u,M,P);case Pr:var b=M._init;return v(u,y,S,b(M._payload),P)}if(Ta(M)||da(M))return u=u.get(S)||null,d(y,u,M,P,null);Zl(y,M)}return null}function x(u,y,S,M){for(var P=null,b=null,R=y,N=y=0,A=null;R!==null&&N<S.length;N++){R.index>N?(A=R,R=null):A=R.sibling;var w=p(u,R,S[N],M);if(w===null){R===null&&(R=A);break}t&&R&&w.alternate===null&&e(u,R),y=s(w,y,N),b===null?P=w:b.sibling=w,b=w,R=A}if(N===S.length)return n(u,R),Ht&&xs(u,N),P;if(R===null){for(;N<S.length;N++)R=h(u,S[N],M),R!==null&&(y=s(R,y,N),b===null?P=R:b.sibling=R,b=R);return Ht&&xs(u,N),P}for(R=i(u,R);N<S.length;N++)A=v(R,u,N,S[N],M),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?N:A.key),y=s(A,y,N),b===null?P=A:b.sibling=A,b=A);return t&&R.forEach(function(D){return e(u,D)}),Ht&&xs(u,N),P}function E(u,y,S,M){var P=da(S);if(typeof P!="function")throw Error(he(150));if(S=P.call(S),S==null)throw Error(he(151));for(var b=P=null,R=y,N=y=0,A=null,w=S.next();R!==null&&!w.done;N++,w=S.next()){R.index>N?(A=R,R=null):A=R.sibling;var D=p(u,R,w.value,M);if(D===null){R===null&&(R=A);break}t&&R&&D.alternate===null&&e(u,R),y=s(D,y,N),b===null?P=D:b.sibling=D,b=D,R=A}if(w.done)return n(u,R),Ht&&xs(u,N),P;if(R===null){for(;!w.done;N++,w=S.next())w=h(u,w.value,M),w!==null&&(y=s(w,y,N),b===null?P=w:b.sibling=w,b=w);return Ht&&xs(u,N),P}for(R=i(u,R);!w.done;N++,w=S.next())w=v(R,u,N,w.value,M),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?N:w.key),y=s(w,y,N),b===null?P=w:b.sibling=w,b=w);return t&&R.forEach(function(Y){return e(u,Y)}),Ht&&xs(u,N),P}function m(u,y,S,M){if(typeof S=="object"&&S!==null&&S.type===po&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Hl:e:{for(var P=S.key,b=y;b!==null;){if(b.key===P){if(P=S.type,P===po){if(b.tag===7){n(u,b.sibling),y=r(b,S.props.children),y.return=u,u=y;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Pr&&wg(P)===b.type){n(u,b.sibling),y=r(b,S.props),y.ref=ga(u,b,S),y.return=u,u=y;break e}n(u,b);break}else e(u,b);b=b.sibling}S.type===po?(y=Ns(S.props.children,u.mode,M,S.key),y.return=u,u=y):(M=Oc(S.type,S.key,S.props,null,u.mode,M),M.ref=ga(u,y,S),M.return=u,u=M)}return o(u);case ho:e:{for(b=S.key;y!==null;){if(y.key===b)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(u,y.sibling),y=r(y,S.children||[]),y.return=u,u=y;break e}else{n(u,y);break}else e(u,y);y=y.sibling}y=Dd(S,u.mode,M),y.return=u,u=y}return o(u);case Pr:return b=S._init,m(u,y,b(S._payload),M)}if(Ta(S))return x(u,y,S,M);if(da(S))return E(u,y,S,M);Zl(u,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(u,y.sibling),y=r(y,S),y.return=u,u=y):(n(u,y),y=Nd(S,u.mode,M),y.return=u,u=y),o(u)):n(u,y)}return m}var Go=K_(!0),J_=K_(!1),ou=os(null),au=null,Eo=null,Bp=null;function zp(){Bp=Eo=au=null}function Hp(t){var e=ou.current;zt(ou),t._currentValue=e}function Zf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Io(t,e){au=t,Bp=Eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zn=!0),t.firstContext=null)}function ai(t){var e=t._currentValue;if(Bp!==t)if(t={context:t,memoizedValue:e,next:null},Eo===null){if(au===null)throw Error(he(308));Eo=t,au.dependencies={lanes:0,firstContext:t}}else Eo=Eo.next=t;return e}var Rs=null;function Vp(t){Rs===null?Rs=[t]:Rs.push(t)}function Z_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Vp(e)):(n.next=r.next,r.next=n),e.interleaved=n,dr(t,i)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function Gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,yt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,dr(t,n)}return r=i.interleaved,r===null?(e.next=e,Vp(i)):(e.next=r.next,r.next=e),i.interleaved=e,dr(t,n)}function Pc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rp(t,n)}}function Tg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,i){var r=t.updateQueue;Ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,v=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,E=a;switch(p=e,v=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){h=x.call(v,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,p=typeof x=="function"?x.call(v,h,p):x,p==null)break e;h=jt({},h,p);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=h):d=d.next=v,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ks|=o,t.lanes=o,t.memoizedState=h}}function Ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var El={},Ui=os(El),tl=os(El),nl=os(El);function bs(t){if(t===El)throw Error(he(174));return t}function Wp(t,e){switch(kt(nl,e),kt(tl,t),kt(Ui,El),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lf(e,t)}zt(Ui),kt(Ui,e)}function Wo(){zt(Ui),zt(tl),zt(nl)}function e1(t){bs(nl.current);var e=bs(Ui.current),n=Lf(e,t.type);e!==n&&(kt(tl,t),kt(Ui,n))}function jp(t){tl.current===t&&(zt(Ui),zt(tl))}var Vt=os(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cd=[];function Xp(){for(var t=0;t<Cd.length;t++)Cd[t]._workInProgressVersionPrimary=null;Cd.length=0}var Ic=gr.ReactCurrentDispatcher,Rd=gr.ReactCurrentBatchConfig,Os=0,Gt=null,rn=null,fn=null,uu=!1,ka=!1,il=0,PS=0;function _n(){throw Error(he(321))}function $p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ti(t[n],e[n]))return!1;return!0}function Yp(t,e,n,i,r,s){if(Os=s,Gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ic.current=t===null||t.memoizedState===null?DS:US,t=n(i,r),ka){s=0;do{if(ka=!1,il=0,25<=s)throw Error(he(301));s+=1,fn=rn=null,e.updateQueue=null,Ic.current=OS,t=n(i,r)}while(ka)}if(Ic.current=du,e=rn!==null&&rn.next!==null,Os=0,fn=rn=Gt=null,uu=!1,e)throw Error(he(300));return t}function qp(){var t=il!==0;return il=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Gt.memoizedState=fn=t:fn=fn.next=t,fn}function li(){if(rn===null){var t=Gt.alternate;t=t!==null?t.memoizedState:null}else t=rn.next;var e=fn===null?Gt.memoizedState:fn.next;if(e!==null)fn=e,rn=t;else{if(t===null)throw Error(he(310));rn=t,t={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},fn===null?Gt.memoizedState=fn=t:fn=fn.next=t}return fn}function rl(t,e){return typeof e=="function"?e(t):e}function bd(t){var e=li(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=rn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Os&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Gt.lanes|=d,ks|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ti(i,e.memoizedState)||(zn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Gt.lanes|=s,ks|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pd(t){var e=li(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ti(s,e.memoizedState)||(zn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function t1(){}function n1(t,e){var n=Gt,i=li(),r=e(),s=!Ti(i.memoizedState,r);if(s&&(i.memoizedState=r,zn=!0),i=i.queue,Kp(s1.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||fn!==null&&fn.memoizedState.tag&1){if(n.flags|=2048,sl(9,r1.bind(null,n,i,r,e),void 0,null),hn===null)throw Error(he(349));Os&30||i1(n,e,r)}return r}function i1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Gt.updateQueue,e===null?(e={lastEffect:null,stores:null},Gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r1(t,e,n,i){e.value=n,e.getSnapshot=i,o1(e)&&a1(t)}function s1(t,e,n){return n(function(){o1(e)&&a1(t)})}function o1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ti(t,n)}catch{return!0}}function a1(t){var e=dr(t,1);e!==null&&Mi(e,t,1,-1)}function Cg(t){var e=Pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:t},e.queue=t,t=t.dispatch=NS.bind(null,Gt,t),[e.memoizedState,t]}function sl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Gt.updateQueue,e===null?(e={lastEffect:null,stores:null},Gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function l1(){return li().memoizedState}function Lc(t,e,n,i){var r=Pi();Gt.flags|=t,r.memoizedState=sl(1|e,n,void 0,i===void 0?null:i)}function ku(t,e,n,i){var r=li();i=i===void 0?null:i;var s=void 0;if(rn!==null){var o=rn.memoizedState;if(s=o.destroy,i!==null&&$p(i,o.deps)){r.memoizedState=sl(e,n,s,i);return}}Gt.flags|=t,r.memoizedState=sl(1|e,n,s,i)}function Rg(t,e){return Lc(8390656,8,t,e)}function Kp(t,e){return ku(2048,8,t,e)}function c1(t,e){return ku(4,2,t,e)}function u1(t,e){return ku(4,4,t,e)}function d1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f1(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,d1.bind(null,e,t),n)}function Jp(){}function h1(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$p(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function p1(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$p(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function m1(t,e,n){return Os&21?(Ti(n,e)||(n=x_(),Gt.lanes|=n,ks|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zn=!0),t.memoizedState=n)}function IS(t,e){var n=bt;bt=n!==0&&4>n?n:4,t(!0);var i=Rd.transition;Rd.transition={};try{t(!1),e()}finally{bt=n,Rd.transition=i}}function g1(){return li().memoizedState}function LS(t,e,n){var i=Yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},v1(t))_1(e,n);else if(n=Z_(t,e,n,i),n!==null){var r=Ln();Mi(n,t,i,r),y1(n,e,i)}}function NS(t,e,n){var i=Yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(v1(t))_1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ti(a,o)){var l=e.interleaved;l===null?(r.next=r,Vp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Z_(t,e,r,i),n!==null&&(r=Ln(),Mi(n,t,i,r),y1(n,e,i))}}function v1(t){var e=t.alternate;return t===Gt||e!==null&&e===Gt}function _1(t,e){ka=uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y1(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rp(t,n)}}var du={readContext:ai,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},DS={readContext:ai,useCallback:function(t,e){return Pi().memoizedState=[t,e===void 0?null:e],t},useContext:ai,useEffect:Rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4194308,4,d1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=Pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=LS.bind(null,Gt,t),[i.memoizedState,t]},useRef:function(t){var e=Pi();return t={current:t},e.memoizedState=t},useState:Cg,useDebugValue:Jp,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=Cg(!1),e=t[0];return t=IS.bind(null,t[1]),Pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Gt,r=Pi();if(Ht){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),hn===null)throw Error(he(349));Os&30||i1(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Rg(s1.bind(null,i,s,t),[t]),i.flags|=2048,sl(9,r1.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Pi(),e=hn.identifierPrefix;if(Ht){var n=tr,i=er;n=(i&~(1<<32-Ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},US={readContext:ai,useCallback:h1,useContext:ai,useEffect:Kp,useImperativeHandle:f1,useInsertionEffect:c1,useLayoutEffect:u1,useMemo:p1,useReducer:bd,useRef:l1,useState:function(){return bd(rl)},useDebugValue:Jp,useDeferredValue:function(t){var e=li();return m1(e,rn.memoizedState,t)},useTransition:function(){var t=bd(rl)[0],e=li().memoizedState;return[t,e]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1},OS={readContext:ai,useCallback:h1,useContext:ai,useEffect:Kp,useImperativeHandle:f1,useInsertionEffect:c1,useLayoutEffect:u1,useMemo:p1,useReducer:Pd,useRef:l1,useState:function(){return Pd(rl)},useDebugValue:Jp,useDeferredValue:function(t){var e=li();return rn===null?e.memoizedState=t:m1(e,rn.memoizedState,t)},useTransition:function(){var t=Pd(rl)[0],e=li().memoizedState;return[t,e]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1};function pi(t,e){if(t&&t.defaultProps){e=jt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:jt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={isMounted:function(t){return(t=t._reactInternals)?Ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Ln(),r=Yr(t),s=or(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,r),e!==null&&(Mi(e,t,r,i),Pc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Ln(),r=Yr(t),s=or(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,r),e!==null&&(Mi(e,t,r,i),Pc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ln(),i=Yr(t),r=or(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xr(t,r,i),e!==null&&(Mi(e,t,i,n),Pc(e,t,i))}};function bg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,i)||!Ja(r,s):!0}function x1(t,e,n){var i=!1,r=ns,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=Vn(e)?Ds:Tn.current,i=e.contextTypes,s=(i=i!=null)?Ho(t,r):ns),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function eh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Gp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=Vn(e)?Ds:Tn.current,r.context=Ho(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fu.enqueueReplaceState(r,r.state,null),lu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function jo(t,e){try{var n="",i=e;do n+=u2(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Id(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function S1(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hu||(hu=!0,dh=i),th(t,e)},n}function E1(t,e,n){n=or(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){th(t,e),typeof i!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new kS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=JS.bind(null,t,e,n),e.then(t,t))}function Lg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ng(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t)}var FS=gr.ReactCurrentOwner,zn=!1;function In(t,e,n,i){e.child=t===null?J_(e,null,n,i):Go(e,t.child,n,i)}function Dg(t,e,n,i,r){n=n.render;var s=e.ref;return Io(e,r),i=Yp(t,e,n,i,s,r),n=qp(),t!==null&&!zn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):(Ht&&n&&Op(e),e.flags|=1,In(t,e,i,r),e.child)}function Ug(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!sm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M1(t,e,s,i,r)):(t=Oc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(o,i)&&t.ref===e.ref)return fr(t,e,r)}return e.flags|=1,t=qr(s,i),t.ref=e.ref,t.return=e,e.child=t}function M1(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ja(s,i)&&t.ref===e.ref)if(zn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(zn=!0);else return e.lanes=t.lanes,fr(t,e,r)}return nh(t,e,n,i,r)}function w1(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(wo,qn),qn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,kt(wo,qn),qn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,kt(wo,qn),qn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,kt(wo,qn),qn|=i;return In(t,e,r,n),e.child}function T1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nh(t,e,n,i,r){var s=Vn(n)?Ds:Tn.current;return s=Ho(e,s),Io(e,r),n=Yp(t,e,n,i,s,r),i=qp(),t!==null&&!zn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):(Ht&&i&&Op(e),e.flags|=1,In(t,e,n,r),e.child)}function Og(t,e,n,i,r){if(Vn(n)){var s=!0;iu(e)}else s=!1;if(Io(e,r),e.stateNode===null)Nc(t,e),x1(e,n,i),eh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ai(c):(c=Vn(n)?Ds:Tn.current,c=Ho(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Pg(e,o,i,c),Ir=!1;var p=e.memoizedState;o.state=p,lu(e,i,o,r),l=e.memoizedState,a!==i||p!==l||Hn.current||Ir?(typeof d=="function"&&(Qf(e,n,d,i),l=e.memoizedState),(a=Ir||bg(e,n,a,i,p,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Q_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:pi(e.type,a),o.props=c,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=Vn(n)?Ds:Tn.current,l=Ho(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&Pg(e,o,i,l),Ir=!1,p=e.memoizedState,o.state=p,lu(e,i,o,r);var x=e.memoizedState;a!==h||p!==x||Hn.current||Ir?(typeof v=="function"&&(Qf(e,n,v,i),x=e.memoizedState),(c=Ir||bg(e,n,c,i,p,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return ih(t,e,n,i,s,r)}function ih(t,e,n,i,r,s){T1(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Sg(e,n,!1),fr(t,e,s);i=e.stateNode,FS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Go(e,t.child,null,s),e.child=Go(e,null,a,s)):In(t,e,a,s),e.memoizedState=i.state,r&&Sg(e,n,!0),e.child}function A1(t){var e=t.stateNode;e.pendingContext?xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xg(t,e.context,!1),Wp(t,e.containerInfo)}function kg(t,e,n,i,r){return Vo(),Fp(r),e.flags|=256,In(t,e,n,i),e.child}var rh={dehydrated:null,treeContext:null,retryLane:0};function sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function C1(t,e,n){var i=e.pendingProps,r=Vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),kt(Vt,r&1),t===null)return Jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Hu(o,i,0,null),t=Ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sh(n),e.memoizedState=rh,t):Zp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return BS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=qr(a,s):(s=Ns(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rh,i}return s=t.child,t=s.sibling,i=qr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zp(t,e){return e=Hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ql(t,e,n,i){return i!==null&&Fp(i),Go(e,t.child,null,n),t=Zp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Id(Error(he(422))),Ql(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Hu({mode:"visible",children:i.children},r,0,null),s=Ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Go(e,t.child,null,o),e.child.memoizedState=sh(o),e.memoizedState=rh,s);if(!(e.mode&1))return Ql(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(he(419)),i=Id(s,i,void 0),Ql(t,e,o,i)}if(a=(o&t.childLanes)!==0,zn||a){if(i=hn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,dr(t,r),Mi(i,t,r,-1))}return rm(),i=Id(Error(he(421))),Ql(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ZS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Kn=jr(r.nextSibling),Jn=e,Ht=!0,gi=null,t!==null&&(ii[ri++]=er,ii[ri++]=tr,ii[ri++]=Us,er=t.id,tr=t.overflow,Us=e),e=Zp(e,i.children),e.flags|=4096,e)}function Fg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zf(t.return,e,n)}function Ld(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function R1(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(In(t,e,i.children,n),i=Vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,n,e);else if(t.tag===19)Fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(kt(Vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ld(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ld(e,!0,n,null,s);break;case"together":Ld(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ks|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zS(t,e,n){switch(e.tag){case 3:A1(e),Vo();break;case 5:e1(e);break;case 1:Vn(e.type)&&iu(e);break;case 4:Wp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;kt(ou,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(kt(Vt,Vt.current&1),e.flags|=128,null):n&e.child.childLanes?C1(t,e,n):(kt(Vt,Vt.current&1),t=fr(t,e,n),t!==null?t.sibling:null);kt(Vt,Vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return R1(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),kt(Vt,Vt.current),i)break;return null;case 22:case 23:return e.lanes=0,w1(t,e,n)}return fr(t,e,n)}var b1,oh,P1,I1;b1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oh=function(){};P1=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,bs(Ui.current);var s=null;switch(n){case"input":r=Rf(t,r),i=Rf(t,i),s=[];break;case"select":r=jt({},r,{value:void 0}),i=jt({},i,{value:void 0}),s=[];break;case"textarea":r=If(t,r),i=If(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tu)}Nf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Bt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I1=function(t,e,n,i){n!==i&&(e.flags|=4)};function va(t,e){if(!Ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function yn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function HS(t,e,n){var i=e.pendingProps;switch(kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(e),null;case 1:return Vn(e.type)&&nu(),yn(e),null;case 3:return i=e.stateNode,Wo(),zt(Hn),zt(Tn),Xp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Jl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gi!==null&&(ph(gi),gi=null))),oh(t,e),yn(e),null;case 5:jp(e);var r=bs(nl.current);if(n=e.type,t!==null&&e.stateNode!=null)P1(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return yn(e),null}if(t=bs(Ui.current),Jl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Li]=e,i[el]=s,t=(e.mode&1)!==0,n){case"dialog":Bt("cancel",i),Bt("close",i);break;case"iframe":case"object":case"embed":Bt("load",i);break;case"video":case"audio":for(r=0;r<Ca.length;r++)Bt(Ca[r],i);break;case"source":Bt("error",i);break;case"img":case"image":case"link":Bt("error",i),Bt("load",i);break;case"details":Bt("toggle",i);break;case"input":$m(i,s),Bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Bt("invalid",i);break;case"textarea":qm(i,s),Bt("invalid",i)}Nf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Kl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Kl(i.textContent,a,t),r=["children",""+a]):Wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Bt("scroll",i)}switch(n){case"input":Vl(i),Ym(i,s,!0);break;case"textarea":Vl(i),Km(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Li]=e,t[el]=i,b1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Df(n,i),n){case"dialog":Bt("cancel",t),Bt("close",t),r=i;break;case"iframe":case"object":case"embed":Bt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ca.length;r++)Bt(Ca[r],t);r=i;break;case"source":Bt("error",t),r=i;break;case"img":case"image":case"link":Bt("error",t),Bt("load",t),r=i;break;case"details":Bt("toggle",t),r=i;break;case"input":$m(t,i),r=Rf(t,i),Bt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=jt({},i,{value:void 0}),Bt("invalid",t);break;case"textarea":qm(t,i),r=If(t,i),Bt("invalid",t);break;default:r=i}Nf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?l_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&o_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ja(t,l):typeof l=="number"&&ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Bt("scroll",t):l!=null&&Ep(t,s,l,o))}switch(n){case"input":Vl(t),Ym(t,i,!1);break;case"textarea":Vl(t),Km(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ts(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Co(t,!!i.multiple,s,!1):i.defaultValue!=null&&Co(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yn(e),null;case 6:if(t&&e.stateNode!=null)I1(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=bs(nl.current),bs(Ui.current),Jl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Li]=e,(s=i.nodeValue!==n)&&(t=Jn,t!==null))switch(t.tag){case 3:Kl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Kl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=e,e.stateNode=i}return yn(e),null;case 13:if(zt(Vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Kn!==null&&e.mode&1&&!(e.flags&128))q_(),Vo(),e.flags|=98560,s=!1;else if(s=Jl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[Li]=e}else Vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yn(e),s=!1}else gi!==null&&(ph(gi),gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Vt.current&1?sn===0&&(sn=3):rm())),e.updateQueue!==null&&(e.flags|=4),yn(e),null);case 4:return Wo(),oh(t,e),t===null&&Za(e.stateNode.containerInfo),yn(e),null;case 10:return Hp(e.type._context),yn(e),null;case 17:return Vn(e.type)&&nu(),yn(e),null;case 19:if(zt(Vt),s=e.memoizedState,s===null)return yn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)va(s,!1);else{if(sn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cu(t),o!==null){for(e.flags|=128,va(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return kt(Vt,Vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Jt()>Xo&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304)}else{if(!i)if(t=cu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ht)return yn(e),null}else 2*Jt()-s.renderingStartTime>Xo&&n!==1073741824&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Jt(),e.sibling=null,n=Vt.current,kt(Vt,i?n&1|2:n&1),e):(yn(e),null);case 22:case 23:return im(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?qn&1073741824&&(yn(e),e.subtreeFlags&6&&(e.flags|=8192)):yn(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function VS(t,e){switch(kp(e),e.tag){case 1:return Vn(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wo(),zt(Hn),zt(Tn),Xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jp(e),null;case 13:if(zt(Vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));Vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return zt(Vt),null;case 4:return Wo(),null;case 10:return Hp(e.type._context),null;case 22:case 23:return im(),null;case 24:return null;default:return null}}var ec=!1,En=!1,GS=typeof WeakSet=="function"?WeakSet:Set,be=null;function Mo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){$t(t,e,i)}else n.current=null}function ah(t,e,n){try{n()}catch(i){$t(t,e,i)}}var Bg=!1;function WS(t,e){if(Wf=Zc,t=O_(),Up(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var v;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)p=h,h=v;for(;;){if(h===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++d===i&&(l=o),(v=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jf={focusedElem:t,selectionRange:n},Zc=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,m=x.memoizedState,u=e.stateNode,y=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:pi(e.type,E),m);u.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(M){$t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return x=Bg,Bg=!1,x}function Fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ah(e,n,s)}r=r.next}while(r!==i)}}function Bu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L1(t){var e=t.alternate;e!==null&&(t.alternate=null,L1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Li],delete e[el],delete e[Yf],delete e[AS],delete e[CS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N1(t){return t.tag===5||t.tag===3||t.tag===4}function zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ch(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(i!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}function uh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}var mn=null,mi=!1;function Sr(t,e,n){for(n=n.child;n!==null;)D1(t,e,n),n=n.sibling}function D1(t,e,n){if(Di&&typeof Di.onCommitFiberUnmount=="function")try{Di.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:En||Mo(n,e);case 6:var i=mn,r=mi;mn=null,Sr(t,e,n),mn=i,mi=r,mn!==null&&(mi?(t=mn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mn.removeChild(n.stateNode));break;case 18:mn!==null&&(mi?(t=mn,n=n.stateNode,t.nodeType===8?Td(t.parentNode,n):t.nodeType===1&&Td(t,n),qa(t)):Td(mn,n.stateNode));break;case 4:i=mn,r=mi,mn=n.stateNode.containerInfo,mi=!0,Sr(t,e,n),mn=i,mi=r;break;case 0:case 11:case 14:case 15:if(!En&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ah(n,e,o),r=r.next}while(r!==i)}Sr(t,e,n);break;case 1:if(!En&&(Mo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){$t(n,e,a)}Sr(t,e,n);break;case 21:Sr(t,e,n);break;case 22:n.mode&1?(En=(i=En)||n.memoizedState!==null,Sr(t,e,n),En=i):Sr(t,e,n);break;default:Sr(t,e,n)}}function Hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GS),e.forEach(function(i){var r=QS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ui(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mn=a.stateNode,mi=!1;break e;case 3:mn=a.stateNode.containerInfo,mi=!0;break e;case 4:mn=a.stateNode.containerInfo,mi=!0;break e}a=a.return}if(mn===null)throw Error(he(160));D1(s,o,r),mn=null,mi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){$t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U1(e,t),e=e.sibling}function U1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ui(e,t),bi(t),i&4){try{Fa(3,t,t.return),Bu(3,t)}catch(E){$t(t,t.return,E)}try{Fa(5,t,t.return)}catch(E){$t(t,t.return,E)}}break;case 1:ui(e,t),bi(t),i&512&&n!==null&&Mo(n,n.return);break;case 5:if(ui(e,t),bi(t),i&512&&n!==null&&Mo(n,n.return),t.flags&32){var r=t.stateNode;try{ja(r,"")}catch(E){$t(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&i_(r,s),Df(a,o);var c=Df(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?l_(r,h):d==="dangerouslySetInnerHTML"?o_(r,h):d==="children"?ja(r,h):Ep(r,d,h,c)}switch(a){case"input":bf(r,s);break;case"textarea":r_(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Co(r,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?Co(r,!!s.multiple,s.defaultValue,!0):Co(r,!!s.multiple,s.multiple?[]:"",!1))}r[el]=s}catch(E){$t(t,t.return,E)}}break;case 6:if(ui(e,t),bi(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){$t(t,t.return,E)}}break;case 3:if(ui(e,t),bi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(E){$t(t,t.return,E)}break;case 4:ui(e,t),bi(t);break;case 13:ui(e,t),bi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(tm=Jt())),i&4&&Hg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(En=(c=En)||d,ui(e,t),En=c):ui(e,t),bi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(be=t,d=t.child;d!==null;){for(h=be=d;be!==null;){switch(p=be,v=p.child,p.tag){case 0:case 11:case 14:case 15:Fa(4,p,p.return);break;case 1:Mo(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(E){$t(i,n,E)}}break;case 5:Mo(p,p.return);break;case 22:if(p.memoizedState!==null){Gg(h);continue}}v!==null?(v.return=p,be=v):Gg(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=a_("display",o))}catch(E){$t(t,t.return,E)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){$t(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ui(e,t),bi(t),i&4&&Hg(t);break;case 21:break;default:ui(e,t),bi(t)}}function bi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N1(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ja(r,""),i.flags&=-33);var s=zg(t);uh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=zg(t);ch(t,a,o);break;default:throw Error(he(161))}}catch(l){$t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jS(t,e,n){be=t,O1(t)}function O1(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ec;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||En;a=ec;var c=En;if(ec=o,(En=l)&&!c)for(be=r;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?Wg(r):l!==null?(l.return=o,be=l):Wg(r);for(;s!==null;)be=s,O1(s),s=s.sibling;be=r,ec=a,En=c}Vg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Vg(t)}}function Vg(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:En||Bu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!En)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:pi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ag(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ag(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&qa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}En||e.flags&512&&lh(e)}catch(p){$t(e,e.return,p)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Gg(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Wg(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bu(4,e)}catch(l){$t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){$t(e,r,l)}}var s=e.return;try{lh(e)}catch(l){$t(e,s,l)}break;case 5:var o=e.return;try{lh(e)}catch(l){$t(e,o,l)}}}catch(l){$t(e,e.return,l)}if(e===t){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var XS=Math.ceil,fu=gr.ReactCurrentDispatcher,Qp=gr.ReactCurrentOwner,oi=gr.ReactCurrentBatchConfig,yt=0,hn=null,en=null,gn=0,qn=0,wo=os(0),sn=0,ol=null,ks=0,zu=0,em=0,Ba=null,Fn=null,tm=0,Xo=1/0,Ji=null,hu=!1,dh=null,$r=null,tc=!1,zr=null,pu=0,za=0,fh=null,Dc=-1,Uc=0;function Ln(){return yt&6?Jt():Dc!==-1?Dc:Dc=Jt()}function Yr(t){return t.mode&1?yt&2&&gn!==0?gn&-gn:bS.transition!==null?(Uc===0&&(Uc=x_()),Uc):(t=bt,t!==0||(t=window.event,t=t===void 0?16:C_(t.type)),t):1}function Mi(t,e,n,i){if(50<za)throw za=0,fh=null,Error(he(185));yl(t,n,i),(!(yt&2)||t!==hn)&&(t===hn&&(!(yt&2)&&(zu|=n),sn===4&&Nr(t,gn)),Gn(t,i),n===1&&yt===0&&!(e.mode&1)&&(Xo=Jt()+500,Ou&&as()))}function Gn(t,e){var n=t.callbackNode;b2(t,e);var i=Jc(t,t===hn?gn:0);if(i===0)n!==null&&Qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Qm(n),e===1)t.tag===0?RS(jg.bind(null,t)):X_(jg.bind(null,t)),wS(function(){!(yt&6)&&as()}),n=null;else{switch(S_(i)){case 1:n=Cp;break;case 4:n=__;break;case 16:n=Kc;break;case 536870912:n=y_;break;default:n=Kc}n=W1(n,k1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k1(t,e){if(Dc=-1,Uc=0,yt&6)throw Error(he(327));var n=t.callbackNode;if(Lo()&&t.callbackNode!==n)return null;var i=Jc(t,t===hn?gn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mu(t,i);else{e=i;var r=yt;yt|=2;var s=B1();(hn!==t||gn!==e)&&(Ji=null,Xo=Jt()+500,Ls(t,e));do try{qS();break}catch(a){F1(t,a)}while(!0);zp(),fu.current=s,yt=r,en!==null?e=0:(hn=null,gn=0,e=sn)}if(e!==0){if(e===2&&(r=Bf(t),r!==0&&(i=r,e=hh(t,r))),e===1)throw n=ol,Ls(t,0),Nr(t,i),Gn(t,Jt()),n;if(e===6)Nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!$S(r)&&(e=mu(t,i),e===2&&(s=Bf(t),s!==0&&(i=s,e=hh(t,s))),e===1))throw n=ol,Ls(t,0),Nr(t,i),Gn(t,Jt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:Ss(t,Fn,Ji);break;case 3:if(Nr(t,i),(i&130023424)===i&&(e=tm+500-Jt(),10<e)){if(Jc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$f(Ss.bind(null,t,Fn,Ji),e);break}Ss(t,Fn,Ji);break;case 4:if(Nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*XS(i/1960))-i,10<i){t.timeoutHandle=$f(Ss.bind(null,t,Fn,Ji),i);break}Ss(t,Fn,Ji);break;case 5:Ss(t,Fn,Ji);break;default:throw Error(he(329))}}}return Gn(t,Jt()),t.callbackNode===n?k1.bind(null,t):null}function hh(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(Ls(t,e).flags|=256),t=mu(t,e),t!==2&&(e=Fn,Fn=n,e!==null&&ph(e)),t}function ph(t){Fn===null?Fn=t:Fn.push.apply(Fn,t)}function $S(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~em,e&=~zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ei(e),i=1<<n;t[n]=-1,e&=~i}}function jg(t){if(yt&6)throw Error(he(327));Lo();var e=Jc(t,0);if(!(e&1))return Gn(t,Jt()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var i=Bf(t);i!==0&&(e=i,n=hh(t,i))}if(n===1)throw n=ol,Ls(t,0),Nr(t,e),Gn(t,Jt()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ss(t,Fn,Ji),Gn(t,Jt()),null}function nm(t,e){var n=yt;yt|=1;try{return t(e)}finally{yt=n,yt===0&&(Xo=Jt()+500,Ou&&as())}}function Fs(t){zr!==null&&zr.tag===0&&!(yt&6)&&Lo();var e=yt;yt|=1;var n=oi.transition,i=bt;try{if(oi.transition=null,bt=1,t)return t()}finally{bt=i,oi.transition=n,yt=e,!(yt&6)&&as()}}function im(){qn=wo.current,zt(wo)}function Ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MS(n)),en!==null)for(n=en.return;n!==null;){var i=n;switch(kp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nu();break;case 3:Wo(),zt(Hn),zt(Tn),Xp();break;case 5:jp(i);break;case 4:Wo();break;case 13:zt(Vt);break;case 19:zt(Vt);break;case 10:Hp(i.type._context);break;case 22:case 23:im()}n=n.return}if(hn=t,en=t=qr(t.current,null),gn=qn=e,sn=0,ol=null,em=zu=ks=0,Fn=Ba=null,Rs!==null){for(e=0;e<Rs.length;e++)if(n=Rs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Rs=null}return t}function F1(t,e){do{var n=en;try{if(zp(),Ic.current=du,uu){for(var i=Gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uu=!1}if(Os=0,fn=rn=Gt=null,ka=!1,il=0,Qp.current=null,n===null||n.return===null){sn=1,ol=e,en=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=gn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Lg(o);if(v!==null){v.flags&=-257,Ng(v,o,a,s,e),v.mode&1&&Ig(s,c,e),e=v,l=c;var x=e.updateQueue;if(x===null){var E=new Set;E.add(l),e.updateQueue=E}else x.add(l);break e}else{if(!(e&1)){Ig(s,c,e),rm();break e}l=Error(he(426))}}else if(Ht&&a.mode&1){var m=Lg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ng(m,o,a,s,e),Fp(jo(l,a));break e}}s=l=jo(l,a),sn!==4&&(sn=2),Ba===null?Ba=[s]:Ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=S1(s,l,e);Tg(s,u);break e;case 1:a=l;var y=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&($r===null||!$r.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=E1(s,a,e);Tg(s,M);break e}}s=s.return}while(s!==null)}H1(n)}catch(P){e=P,en===n&&n!==null&&(en=n=n.return);continue}break}while(!0)}function B1(){var t=fu.current;return fu.current=du,t===null?du:t}function rm(){(sn===0||sn===3||sn===2)&&(sn=4),hn===null||!(ks&268435455)&&!(zu&268435455)||Nr(hn,gn)}function mu(t,e){var n=yt;yt|=2;var i=B1();(hn!==t||gn!==e)&&(Ji=null,Ls(t,e));do try{YS();break}catch(r){F1(t,r)}while(!0);if(zp(),yt=n,fu.current=i,en!==null)throw Error(he(261));return hn=null,gn=0,sn}function YS(){for(;en!==null;)z1(en)}function qS(){for(;en!==null&&!x2();)z1(en)}function z1(t){var e=G1(t.alternate,t,qn);t.memoizedProps=t.pendingProps,e===null?H1(t):en=e,Qp.current=null}function H1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VS(n,e),n!==null){n.flags&=32767,en=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{sn=6,en=null;return}}else if(n=HS(n,e,qn),n!==null){en=n;return}if(e=e.sibling,e!==null){en=e;return}en=e=t}while(e!==null);sn===0&&(sn=5)}function Ss(t,e,n){var i=bt,r=oi.transition;try{oi.transition=null,bt=1,KS(t,e,n,i)}finally{oi.transition=r,bt=i}return null}function KS(t,e,n,i){do Lo();while(zr!==null);if(yt&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(P2(t,s),t===hn&&(en=hn=null,gn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tc||(tc=!0,W1(Kc,function(){return Lo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=oi.transition,oi.transition=null;var o=bt;bt=1;var a=yt;yt|=4,Qp.current=null,WS(t,n),U1(n,t),gS(jf),Zc=!!Wf,jf=Wf=null,t.current=n,jS(n),S2(),yt=a,bt=o,oi.transition=s}else t.current=n;if(tc&&(tc=!1,zr=t,pu=r),s=t.pendingLanes,s===0&&($r=null),w2(n.stateNode),Gn(t,Jt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hu)throw hu=!1,t=dh,dh=null,t;return pu&1&&t.tag!==0&&Lo(),s=t.pendingLanes,s&1?t===fh?za++:(za=0,fh=t):za=0,as(),null}function Lo(){if(zr!==null){var t=S_(pu),e=oi.transition,n=bt;try{if(oi.transition=null,bt=16>t?16:t,zr===null)var i=!1;else{if(t=zr,zr=null,pu=0,yt&6)throw Error(he(331));var r=yt;for(yt|=4,be=t.current;be!==null;){var s=be,o=s.child;if(be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(be=c;be!==null;){var d=be;switch(d.tag){case 0:case 11:case 15:Fa(8,d,s)}var h=d.child;if(h!==null)h.return=d,be=h;else for(;be!==null;){d=be;var p=d.sibling,v=d.return;if(L1(d),d===c){be=null;break}if(p!==null){p.return=v,be=p;break}be=v}}}var x=s.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var m=E.sibling;E.sibling=null,E=m}while(E!==null)}}be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,be=o;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var y=t.current;for(be=y;be!==null;){o=be;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,be=S;else e:for(o=y;be!==null;){if(a=be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bu(9,a)}}catch(P){$t(a,a.return,P)}if(a===o){be=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,be=M;break e}be=a.return}}if(yt=r,as(),Di&&typeof Di.onPostCommitFiberRoot=="function")try{Di.onPostCommitFiberRoot(Iu,t)}catch{}i=!0}return i}finally{bt=n,oi.transition=e}}return!1}function Xg(t,e,n){e=jo(n,e),e=S1(t,e,1),t=Xr(t,e,1),e=Ln(),t!==null&&(yl(t,1,e),Gn(t,e))}function $t(t,e,n){if(t.tag===3)Xg(t,t,n);else for(;e!==null;){if(e.tag===3){Xg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($r===null||!$r.has(i))){t=jo(n,t),t=E1(e,t,1),e=Xr(e,t,1),t=Ln(),e!==null&&(yl(e,1,t),Gn(e,t));break}}e=e.return}}function JS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Ln(),t.pingedLanes|=t.suspendedLanes&n,hn===t&&(gn&n)===n&&(sn===4||sn===3&&(gn&130023424)===gn&&500>Jt()-tm?Ls(t,0):em|=n),Gn(t,e)}function V1(t,e){e===0&&(t.mode&1?(e=jl,jl<<=1,!(jl&130023424)&&(jl=4194304)):e=1);var n=Ln();t=dr(t,e),t!==null&&(yl(t,e,n),Gn(t,n))}function ZS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V1(t,n)}function QS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),V1(t,n)}var G1;G1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Hn.current)zn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zn=!1,zS(t,e,n);zn=!!(t.flags&131072)}else zn=!1,Ht&&e.flags&1048576&&$_(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nc(t,e),t=e.pendingProps;var r=Ho(e,Tn.current);Io(e,n),r=Yp(null,e,i,t,r,n);var s=qp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vn(i)?(s=!0,iu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gp(e),r.updater=Fu,e.stateNode=r,r._reactInternals=e,eh(e,i,t,n),e=ih(null,e,i,!0,s,n)):(e.tag=0,Ht&&s&&Op(e),In(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tE(i),t=pi(i,t),r){case 0:e=nh(null,e,i,t,n);break e;case 1:e=Og(null,e,i,t,n);break e;case 11:e=Dg(null,e,i,t,n);break e;case 14:e=Ug(null,e,i,pi(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),nh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),Og(t,e,i,r,n);case 3:e:{if(A1(e),t===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Q_(t,e),lu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=jo(Error(he(423)),e),e=kg(t,e,i,n,r);break e}else if(i!==r){r=jo(Error(he(424)),e),e=kg(t,e,i,n,r);break e}else for(Kn=jr(e.stateNode.containerInfo.firstChild),Jn=e,Ht=!0,gi=null,n=J_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vo(),i===r){e=fr(t,e,n);break e}In(t,e,i,n)}e=e.child}return e;case 5:return e1(e),t===null&&Jf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xf(i,r)?o=null:s!==null&&Xf(i,s)&&(e.flags|=32),T1(t,e),In(t,e,o,n),e.child;case 6:return t===null&&Jf(e),null;case 13:return C1(t,e,n);case 4:return Wp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Go(e,null,i,n):In(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),Dg(t,e,i,r,n);case 7:return In(t,e,e.pendingProps,n),e.child;case 8:return In(t,e,e.pendingProps.children,n),e.child;case 12:return In(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,kt(ou,i._currentValue),i._currentValue=o,s!==null)if(Ti(s.value,o)){if(s.children===r.children&&!Hn.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=or(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(he(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}In(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Io(e,n),r=ai(r),i=i(r),e.flags|=1,In(t,e,i,n),e.child;case 14:return i=e.type,r=pi(i,e.pendingProps),r=pi(i.type,r),Ug(t,e,i,r,n);case 15:return M1(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),Nc(t,e),e.tag=1,Vn(i)?(t=!0,iu(e)):t=!1,Io(e,n),x1(e,i,r),eh(e,i,r,n),ih(null,e,i,!0,t,n);case 19:return R1(t,e,n);case 22:return w1(t,e,n)}throw Error(he(156,e.tag))};function W1(t,e){return v_(t,e)}function eE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,e,n,i){return new eE(t,e,n,i)}function sm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tE(t){if(typeof t=="function")return sm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wp)return 11;if(t===Tp)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=si(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")sm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case po:return Ns(n.children,r,s,e);case Mp:o=8,r|=8;break;case wf:return t=si(12,n,e,r|2),t.elementType=wf,t.lanes=s,t;case Tf:return t=si(13,n,e,r),t.elementType=Tf,t.lanes=s,t;case Af:return t=si(19,n,e,r),t.elementType=Af,t.lanes=s,t;case e_:return Hu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zv:o=10;break e;case Qv:o=9;break e;case wp:o=11;break e;case Tp:o=14;break e;case Pr:o=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=si(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ns(t,e,n,i){return t=si(7,t,i,e),t.lanes=n,t}function Hu(t,e,n,i){return t=si(22,t,i,e),t.elementType=e_,t.lanes=n,t.stateNode={isHidden:!1},t}function Nd(t,e,n){return t=si(6,t,null,e),t.lanes=n,t}function Dd(t,e,n){return e=si(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pd(0),this.expirationTimes=pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function om(t,e,n,i,r,s,o,a,l){return t=new nE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=si(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gp(s),t}function iE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ho,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function j1(t){if(!t)return ns;t=t._reactInternals;e:{if(Ws(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(Vn(n))return j_(t,n,e)}return e}function X1(t,e,n,i,r,s,o,a,l){return t=om(n,i,!0,t,r,s,o,a,l),t.context=j1(null),n=t.current,i=Ln(),r=Yr(n),s=or(i,r),s.callback=e??null,Xr(n,s,r),t.current.lanes=r,yl(t,r,i),Gn(t,i),t}function Vu(t,e,n,i){var r=e.current,s=Ln(),o=Yr(r);return n=j1(n),e.context===null?e.context=n:e.pendingContext=n,e=or(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xr(r,e,o),t!==null&&(Mi(t,r,o,s),Pc(t,r,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function am(t,e){$g(t,e),(t=t.alternate)&&$g(t,e)}function rE(){return null}var $1=typeof reportError=="function"?reportError:function(t){console.error(t)};function lm(t){this._internalRoot=t}Gu.prototype.render=lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));Vu(t,e,null,null)};Gu.prototype.unmount=lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fs(function(){Vu(null,t,null,null)}),e[ur]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=w_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Lr.length&&e!==0&&e<Lr[n].priority;n++);Lr.splice(n,0,t),n===0&&A_(t)}};function cm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function sE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=gu(o);s.call(c)}}var o=X1(e,i,t,0,null,!1,!1,"",Yg);return t._reactRootContainer=o,t[ur]=o.current,Za(t.nodeType===8?t.parentNode:t),Fs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=gu(l);a.call(c)}}var l=om(t,0,!1,null,null,!1,!1,"",Yg);return t._reactRootContainer=l,t[ur]=l.current,Za(t.nodeType===8?t.parentNode:t),Fs(function(){Vu(e,l,n,i)}),l}function ju(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gu(o);a.call(l)}}Vu(e,o,t,r)}else o=sE(n,e,t,r,i);return gu(o)}E_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(Rp(e,n|1),Gn(e,Jt()),!(yt&6)&&(Xo=Jt()+500,as()))}break;case 13:Fs(function(){var i=dr(t,1);if(i!==null){var r=Ln();Mi(i,t,1,r)}}),am(t,1)}};bp=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=Ln();Mi(e,t,134217728,n)}am(t,134217728)}};M_=function(t){if(t.tag===13){var e=Yr(t),n=dr(t,e);if(n!==null){var i=Ln();Mi(n,t,e,i)}am(t,e)}};w_=function(){return bt};T_=function(t,e){var n=bt;try{return bt=t,e()}finally{bt=n}};Of=function(t,e,n){switch(e){case"input":if(bf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Uu(i);if(!r)throw Error(he(90));n_(i),bf(i,r)}}}break;case"textarea":r_(t,n);break;case"select":e=n.value,e!=null&&Co(t,!!n.multiple,e,!1)}};d_=nm;f_=Fs;var oE={usingClientEntryPoint:!1,Events:[Sl,_o,Uu,c_,u_,nm]},_a={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aE={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=m_(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||rE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{Iu=nc.inject(aE),Di=nc}catch{}}Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE;Qn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cm(e))throw Error(he(200));return iE(t,e,null,n)};Qn.createRoot=function(t,e){if(!cm(t))throw Error(he(299));var n=!1,i="",r=$1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=om(t,1,!1,null,null,n,!1,i,r),t[ur]=e.current,Za(t.nodeType===8?t.parentNode:t),new lm(e)};Qn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=m_(e),t=t===null?null:t.stateNode,t};Qn.flushSync=function(t){return Fs(t)};Qn.hydrate=function(t,e,n){if(!Wu(e))throw Error(he(200));return ju(null,t,e,!0,n)};Qn.hydrateRoot=function(t,e,n){if(!cm(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=$1;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=X1(e,null,t,1,n??null,r,!1,s,o),t[ur]=e.current,Za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gu(e)};Qn.render=function(t,e,n){if(!Wu(e))throw Error(he(200));return ju(null,t,e,!1,n)};Qn.unmountComponentAtNode=function(t){if(!Wu(t))throw Error(he(40));return t._reactRootContainer?(Fs(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};Qn.unstable_batchedUpdates=nm;Qn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wu(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return ju(t,e,n,!1,i)};Qn.version="18.3.1-next-f1338f8080-20240426";function Y1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y1)}catch(t){console.error(t)}}Y1(),Yv.exports=Qn;var lE=Yv.exports,qg=lE;Ef.createRoot=qg.createRoot,Ef.hydrateRoot=qg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},al.apply(this,arguments)}var Hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hr||(Hr={}));const Kg="popstate";function cE(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return mh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:vu(r)}return dE(e,n,null,t)}function Wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function um(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uE(){return Math.random().toString(36).substr(2,8)}function Jg(t,e){return{usr:t.state,key:t.key,idx:e}}function mh(t,e,n,i){return n===void 0&&(n=null),al({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ra(e):e,{state:n,key:e&&e.key||i||uE()})}function vu(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ra(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function dE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Hr.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(al({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Hr.Pop;let m=d(),u=m==null?null:m-c;c=m,l&&l({action:a,location:E.location,delta:u})}function p(m,u){a=Hr.Push;let y=mh(E.location,m,u);c=d()+1;let S=Jg(y,c),M=E.createHref(y);try{o.pushState(S,"",M)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(M)}s&&l&&l({action:a,location:E.location,delta:1})}function v(m,u){a=Hr.Replace;let y=mh(E.location,m,u);c=d();let S=Jg(y,c),M=E.createHref(y);o.replaceState(S,"",M),s&&l&&l({action:a,location:E.location,delta:0})}function x(m){let u=r.location.origin!=="null"?r.location.origin:r.location.href,y=typeof m=="string"?m:vu(m);return y=y.replace(/ $/,"%20"),Wt(u,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,u)}let E={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Kg,h),l=m,()=>{r.removeEventListener(Kg,h),l=null}},createHref(m){return e(r,m)},createURL:x,encodeLocation(m){let u=x(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:p,replace:v,go(m){return o.go(m)}};return E}var Zg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zg||(Zg={}));function fE(t,e,n){return n===void 0&&(n="/"),hE(t,e,n)}function hE(t,e,n,i){let r=typeof e=="string"?ra(e):e,s=$o(r.pathname||"/",n);if(s==null)return null;let o=q1(t);pE(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=TE(s);a=ME(o[l],c)}return a}function q1(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Wt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Kr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Wt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),q1(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:SE(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of K1(s.path))r(s,o,l)}),e}function K1(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=K1(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:EE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const mE=/^:[\w-]+$/,gE=3,vE=2,_E=1,yE=10,xE=-2,Qg=t=>t==="*";function SE(t,e){let n=t.split("/"),i=n.length;return n.some(Qg)&&(i+=xE),e&&(i+=vE),n.filter(r=>!Qg(r)).reduce((r,s)=>r+(mE.test(s)?gE:s===""?_E:yE),i)}function EE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function ME(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=gh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:Kr([s,h.pathname]),pathnameBase:PE(Kr([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=Kr([s,h.pathnameBase]))}return o}function gh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=wE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,h)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let E=a[h]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const x=a[h];return v&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function wE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),um(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function TE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return um(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $o(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const AE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,CE=t=>AE.test(t);function RE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ra(t):t,s;if(n)if(CE(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),um(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=e0(n.substring(1),"/"):s=e0(n,e)}else s=e;return{pathname:s,search:IE(i),hash:LE(r)}}function e0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Ud(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dm(t,e){let n=bE(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function fm(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ra(t):(r=al({},t),Wt(!r.pathname||!r.pathname.includes("?"),Ud("?","pathname","search",r)),Wt(!r.pathname||!r.pathname.includes("#"),Ud("#","pathname","hash",r)),Wt(!r.search||!r.search.includes("#"),Ud("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;r.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=RE(r,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Kr=t=>t.join("/").replace(/\/\/+/g,"/"),PE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function NE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const J1=["post","put","patch","delete"];new Set(J1);const DE=["get",...J1];new Set(DE);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ll.apply(this,arguments)}const Xu=J.createContext(null),Z1=J.createContext(null),vr=J.createContext(null),$u=J.createContext(null),ls=J.createContext({outlet:null,matches:[],isDataRoute:!1}),Q1=J.createContext(null);function UE(t,e){let{relative:n}=e===void 0?{}:e;sa()||Wt(!1);let{basename:i,navigator:r}=J.useContext(vr),{hash:s,pathname:o,search:a}=qu(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Kr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function sa(){return J.useContext($u)!=null}function cs(){return sa()||Wt(!1),J.useContext($u).location}function ey(t){J.useContext(vr).static||J.useLayoutEffect(t)}function Yu(){let{isDataRoute:t}=J.useContext(ls);return t?YE():OE()}function OE(){sa()||Wt(!1);let t=J.useContext(Xu),{basename:e,future:n,navigator:i}=J.useContext(vr),{matches:r}=J.useContext(ls),{pathname:s}=cs(),o=JSON.stringify(dm(r,n.v7_relativeSplatPath)),a=J.useRef(!1);return ey(()=>{a.current=!0}),J.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let h=fm(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Kr([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,o,s,t])}function qu(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=J.useContext(vr),{matches:r}=J.useContext(ls),{pathname:s}=cs(),o=JSON.stringify(dm(r,i.v7_relativeSplatPath));return J.useMemo(()=>fm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function kE(t,e){return FE(t,e)}function FE(t,e,n,i){sa()||Wt(!1);let{navigator:r}=J.useContext(vr),{matches:s}=J.useContext(ls),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=cs(),d;if(e){var h;let m=typeof e=="string"?ra(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Wt(!1),d=m}else d=c;let p=d.pathname||"/",v=p;if(l!=="/"){let m=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=fE(t,{pathname:v}),E=GE(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Kr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Kr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&E?J.createElement($u.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Hr.Pop}},E):E}function BE(){let t=$E(),e=NE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),n?J.createElement("pre",{style:r},n):null,null)}const zE=J.createElement(BE,null);class HE extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?J.createElement(ls.Provider,{value:this.props.routeContext},J.createElement(Q1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VE(t){let{routeContext:e,match:n,children:i}=t,r=J.useContext(Xu);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),J.createElement(ls.Provider,{value:e},i)}function GE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||Wt(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:p,errors:v}=n,x=h.route.loader&&p[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let v,x=!1,E=null,m=null;n&&(v=a&&h.route.id?a[h.route.id]:void 0,E=h.route.errorElement||zE,l&&(c<0&&p===0?(qE("route-fallback"),x=!0,m=null):c===p&&(x=!0,m=h.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,p+1)),y=()=>{let S;return v?S=E:x?S=m:h.route.Component?S=J.createElement(h.route.Component,null):h.route.element?S=h.route.element:S=d,J.createElement(VE,{match:h,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:S})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?J.createElement(HE,{location:n.location,revalidation:n.revalidation,component:E,error:v,children:y(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):y()},null)}var ty=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ty||{}),ny=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ny||{});function WE(t){let e=J.useContext(Xu);return e||Wt(!1),e}function jE(t){let e=J.useContext(Z1);return e||Wt(!1),e}function XE(t){let e=J.useContext(ls);return e||Wt(!1),e}function iy(t){let e=XE(),n=e.matches[e.matches.length-1];return n.route.id||Wt(!1),n.route.id}function $E(){var t;let e=J.useContext(Q1),n=jE(),i=iy();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function YE(){let{router:t}=WE(ty.UseNavigateStable),e=iy(ny.UseNavigateStable),n=J.useRef(!1);return ey(()=>{n.current=!0}),J.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ll({fromRouteId:e},s)))},[t,e])}const t0={};function qE(t,e,n){t0[t]||(t0[t]=!0)}function KE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ry(t){let{to:e,replace:n,state:i,relative:r}=t;sa()||Wt(!1);let{future:s,static:o}=J.useContext(vr),{matches:a}=J.useContext(ls),{pathname:l}=cs(),c=Yu(),d=fm(e,dm(a,s.v7_relativeSplatPath),l,r==="path"),h=JSON.stringify(d);return J.useEffect(()=>c(JSON.parse(h),{replace:n,state:i,relative:r}),[c,h,r,n,i]),null}function br(t){Wt(!1)}function JE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Hr.Pop,navigator:s,static:o=!1,future:a}=t;sa()&&Wt(!1);let l=e.replace(/^\/*/,"/"),c=J.useMemo(()=>({basename:l,navigator:s,static:o,future:ll({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=ra(i));let{pathname:d="/",search:h="",hash:p="",state:v=null,key:x="default"}=i,E=J.useMemo(()=>{let m=$o(d,l);return m==null?null:{location:{pathname:m,search:h,hash:p,state:v,key:x},navigationType:r}},[l,d,h,p,v,x,r]);return E==null?null:J.createElement(vr.Provider,{value:c},J.createElement($u.Provider,{children:n,value:E}))}function ZE(t){let{children:e,location:n}=t;return kE(vh(e),n)}new Promise(()=>{});function vh(t,e){e===void 0&&(e=[]);let n=[];return J.Children.forEach(t,(i,r)=>{if(!J.isValidElement(i))return;let s=[...e,r];if(i.type===J.Fragment){n.push.apply(n,vh(i.props.children,s));return}i.type!==br&&Wt(!1),!i.props.index||!i.props.children||Wt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=vh(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _u(){return _u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_u.apply(this,arguments)}function sy(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function QE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function e3(t,e){return t.button===0&&(!e||e==="_self")&&!QE(t)}const t3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],n3=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],i3="6";try{window.__reactRouterVersion=i3}catch{}const r3=J.createContext({isTransitioning:!1}),s3="startTransition",n0=Jx[s3];function o3(t){let{basename:e,children:n,future:i,window:r}=t,s=J.useRef();s.current==null&&(s.current=cE({window:r,v5Compat:!0}));let o=s.current,[a,l]=J.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=J.useCallback(h=>{c&&n0?n0(()=>l(h)):l(h)},[l,c]);return J.useLayoutEffect(()=>o.listen(d),[o,d]),J.useEffect(()=>KE(i),[i]),J.createElement(JE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const a3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ku=J.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:h}=e,p=sy(e,t3),{basename:v}=J.useContext(vr),x,E=!1;if(typeof c=="string"&&l3.test(c)&&(x=c,a3))try{let S=new URL(window.location.href),M=c.startsWith("//")?new URL(S.protocol+c):new URL(c),P=$o(M.pathname,v);M.origin===S.origin&&P!=null?c=P+M.search+M.hash:E=!0}catch{}let m=UE(c,{relative:r}),u=u3(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:r,viewTransition:h});function y(S){i&&i(S),S.defaultPrevented||u(S)}return J.createElement("a",_u({},p,{href:x||m,onClick:E||s?i:y,ref:n,target:l}))}),i0=J.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:d}=e,h=sy(e,n3),p=qu(l,{relative:h.relative}),v=cs(),x=J.useContext(Z1),{navigator:E,basename:m}=J.useContext(vr),u=x!=null&&d3(p)&&c===!0,y=E.encodeLocation?E.encodeLocation(p).pathname:p.pathname,S=v.pathname,M=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;r||(S=S.toLowerCase(),M=M?M.toLowerCase():null,y=y.toLowerCase()),M&&m&&(M=$o(M,m)||M);const P=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let b=S===y||!o&&S.startsWith(y)&&S.charAt(P)==="/",R=M!=null&&(M===y||!o&&M.startsWith(y)&&M.charAt(y.length)==="/"),N={isActive:b,isPending:R,isTransitioning:u},A=b?i:void 0,w;typeof s=="function"?w=s(N):w=[s,b?"active":null,R?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(N):a;return J.createElement(Ku,_u({},h,{"aria-current":A,className:w,ref:n,style:D,to:l,viewTransition:c}),typeof d=="function"?d(N):d)});var _h;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_h||(_h={}));var r0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(r0||(r0={}));function c3(t){let e=J.useContext(Xu);return e||Wt(!1),e}function u3(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Yu(),c=cs(),d=qu(t,{relative:o});return J.useCallback(h=>{if(e3(h,n)){h.preventDefault();let p=i!==void 0?i:vu(c)===vu(d);l(t,{replace:p,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,i,r,n,t,s,o,a])}function d3(t,e){e===void 0&&(e={});let n=J.useContext(r3);n==null&&Wt(!1);let{basename:i}=c3(_h.useViewTransitionState),r=qu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=$o(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=$o(n.nextLocation.pathname,i)||n.nextLocation.pathname;return gh(r.pathname,o)!=null||gh(r.pathname,s)!=null}const f3=()=>{};var s0={};/**
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
 */const oy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},h3=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ay={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(p=64)),i.push(n[d],n[h],n[p],n[v])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):h3(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new p3;const p=s<<2|a>>4;if(i.push(p),c!==64){const v=a<<4&240|c>>2;if(i.push(v),h!==64){const x=c<<6&192|h;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class p3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m3=function(t){const e=oy(t);return ay.encodeByteArray(e,!0)},ly=function(t){return m3(t).replace(/\./g,"")},cy=function(t){try{return ay.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function g3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const v3=()=>g3().__FIREBASE_DEFAULTS__,_3=()=>{if(typeof process>"u"||typeof s0>"u")return;const t=s0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},y3=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cy(t[1]);return e&&JSON.parse(e)},hm=()=>{try{return f3()||v3()||_3()||y3()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x3=t=>{var e,n;return(n=(e=hm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uy=()=>{var t;return(t=hm())===null||t===void 0?void 0:t.config},dy=t=>{var e;return(e=hm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class S3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ju(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function E3(t){return(await fetch(t,{credentials:"include"})).ok}const Ha={};function M3(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ha))Ha[e]?t.emulator.push(e):t.prod.push(e);return t}function w3(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let o0=!1;function T3(t,e){if(typeof window>"u"||typeof document>"u"||!Ju(window.location.host)||Ha[t]===e||Ha[t]||o0)return;Ha[t]=e;function n(p){return`__firebase__banner__${p}`}const i="__firebase__banner",s=M3().prod.length>0;function o(){const p=document.getElementById(i);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,v){p.setAttribute("width","24"),p.setAttribute("id",v),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{o0=!0,o()},p}function d(p,v){p.setAttribute("id",v),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function h(){const p=w3(i),v=n("text"),x=document.getElementById(v)||document.createElement("span"),E=n("learnmore"),m=document.getElementById(E)||document.createElement("a"),u=n("preprendIcon"),y=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const S=p.element;a(S),d(m,E);const M=c();l(y,u),S.append(y,x,m,M),document.body.appendChild(S)}s?(x.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A3(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nn())}function C3(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function R3(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function b3(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P3(){const t=Nn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function I3(){try{return typeof indexedDB=="object"}catch{return!1}}function L3(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const N3="FirebaseError";class us extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=N3,Object.setPrototypeOf(this,us.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ml.prototype.create)}}class Ml{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?D3(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new us(r,a,i)}}function D3(t,e){return t.replace(U3,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const U3=/\{\$([^}]+)}/g;function O3(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(a0(s)&&a0(o)){if(!Yo(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function a0(t){return t!==null&&typeof t=="object"}/**
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
 */function wl(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ra(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function k3(t,e){const n=new F3(t,e);return n.subscribe.bind(n)}class F3{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");B3(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Od),r.error===void 0&&(r.error=Od),r.complete===void 0&&(r.complete=Od);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B3(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Od(){}/**
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
 */function _r(t){return t&&t._delegate?t._delegate:t}class qo{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class z3{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new S3;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(V3(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:H3(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H3(t){return t===Es?void 0:t}function V3(t){return t.instantiationMode==="EAGER"}/**
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
 */class G3{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new z3(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Nt;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Nt||(Nt={}));const W3={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},j3=Nt.INFO,X3={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},$3=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=X3[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fy{constructor(e){this.name=e,this._logLevel=j3,this._logHandler=$3,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Nt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W3[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...e),this._logHandler(this,Nt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...e),this._logHandler(this,Nt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...e),this._logHandler(this,Nt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...e),this._logHandler(this,Nt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...e),this._logHandler(this,Nt.ERROR,...e)}}const Y3=(t,e)=>e.some(n=>t instanceof n);let l0,c0;function q3(){return l0||(l0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K3(){return c0||(c0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,yh=new WeakMap,py=new WeakMap,kd=new WeakMap,pm=new WeakMap;function J3(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hy.set(n,t)}).catch(()=>{}),pm.set(e,t),e}function Z3(t){if(yh.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yh.set(t,e)}let xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||py.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Q3(t){xh=t(xh)}function eM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Fd(this),e,...n);return py.set(i,e.sort?e.sort():[e]),Jr(i)}:K3().includes(t)?function(...e){return t.apply(Fd(this),e),Jr(hy.get(this))}:function(...e){return Jr(t.apply(Fd(this),e))}}function tM(t){return typeof t=="function"?eM(t):(t instanceof IDBTransaction&&Z3(t),Y3(t,q3())?new Proxy(t,xh):t)}function Jr(t){if(t instanceof IDBRequest)return J3(t);if(kd.has(t))return kd.get(t);const e=tM(t);return e!==t&&(kd.set(t,e),pm.set(e,t)),e}const Fd=t=>pm.get(t);function nM(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Jr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const iM=["get","getKey","getAll","getAllKeys","count"],rM=["put","add","delete","clear"],Bd=new Map;function u0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bd.get(e))return Bd.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=rM.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||iM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Bd.set(e,s),s}Q3(t=>({...t,get:(e,n,i)=>u0(e,n)||t.get(e,n,i),has:(e,n)=>!!u0(e,n)||t.has(e,n)}));/**
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
 */class sM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oM(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function oM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",d0="0.13.2";/**
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
 */const hr=new fy("@firebase/app"),aM="@firebase/app-compat",lM="@firebase/analytics-compat",cM="@firebase/analytics",uM="@firebase/app-check-compat",dM="@firebase/app-check",fM="@firebase/auth",hM="@firebase/auth-compat",pM="@firebase/database",mM="@firebase/data-connect",gM="@firebase/database-compat",vM="@firebase/functions",_M="@firebase/functions-compat",yM="@firebase/installations",xM="@firebase/installations-compat",SM="@firebase/messaging",EM="@firebase/messaging-compat",MM="@firebase/performance",wM="@firebase/performance-compat",TM="@firebase/remote-config",AM="@firebase/remote-config-compat",CM="@firebase/storage",RM="@firebase/storage-compat",bM="@firebase/firestore",PM="@firebase/ai",IM="@firebase/firestore-compat",LM="firebase",NM="11.10.0";/**
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
 */const Eh="[DEFAULT]",DM={[Sh]:"fire-core",[aM]:"fire-core-compat",[cM]:"fire-analytics",[lM]:"fire-analytics-compat",[dM]:"fire-app-check",[uM]:"fire-app-check-compat",[fM]:"fire-auth",[hM]:"fire-auth-compat",[pM]:"fire-rtdb",[mM]:"fire-data-connect",[gM]:"fire-rtdb-compat",[vM]:"fire-fn",[_M]:"fire-fn-compat",[yM]:"fire-iid",[xM]:"fire-iid-compat",[SM]:"fire-fcm",[EM]:"fire-fcm-compat",[MM]:"fire-perf",[wM]:"fire-perf-compat",[TM]:"fire-rc",[AM]:"fire-rc-compat",[CM]:"fire-gcs",[RM]:"fire-gcs-compat",[bM]:"fire-fst",[IM]:"fire-fst-compat",[PM]:"fire-vertex","fire-js":"fire-js",[LM]:"fire-js-all"};/**
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
 */const cl=new Map,UM=new Map,Mh=new Map;function f0(t,e){try{t.container.addComponent(e)}catch(n){hr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ul(t){const e=t.name;if(Mh.has(e))return hr.debug(`There were multiple attempts to register component ${e}.`),!1;Mh.set(e,t);for(const n of cl.values())f0(n,t);for(const n of UM.values())f0(n,t);return!0}function my(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _i(t){return t==null?!1:t.settings!==void 0}/**
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
 */const OM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new Ml("app","Firebase",OM);/**
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
 */class kM{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
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
 */const Tl=NM;function gy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Eh,automaticDataCollectionEnabled:!0},e),r=i.name;if(typeof r!="string"||!r)throw Zr.create("bad-app-name",{appName:String(r)});if(n||(n=uy()),!n)throw Zr.create("no-options");const s=cl.get(r);if(s){if(Yo(n,s.options)&&Yo(i,s.config))return s;throw Zr.create("duplicate-app",{appName:r})}const o=new G3(r);for(const l of Mh.values())o.addComponent(l);const a=new kM(n,i,o);return cl.set(r,a),a}function FM(t=Eh){const e=cl.get(t);if(!e&&t===Eh&&uy())return gy();if(!e)throw Zr.create("no-app",{appName:t});return e}function h0(){return Array.from(cl.values())}function No(t,e,n){var i;let r=(i=DM[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hr.warn(a.join(" "));return}ul(new qo(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const BM="firebase-heartbeat-database",zM=1,dl="firebase-heartbeat-store";let zd=null;function vy(){return zd||(zd=nM(BM,zM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(dl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zr.create("idb-open",{originalErrorMessage:t.message})})),zd}async function HM(t){try{const n=(await vy()).transaction(dl),i=await n.objectStore(dl).get(_y(t));return await n.done,i}catch(e){if(e instanceof us)hr.warn(e.message);else{const n=Zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hr.warn(n.message)}}}async function p0(t,e){try{const i=(await vy()).transaction(dl,"readwrite");await i.objectStore(dl).put(e,_y(t)),await i.done}catch(n){if(n instanceof us)hr.warn(n.message);else{const i=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hr.warn(i.message)}}}function _y(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VM=1024,GM=30;class WM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XM(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=m0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>GM){const o=$M(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){hr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=m0(),{heartbeatsToSend:i,unsentEntries:r}=jM(this._heartbeatsCache.heartbeats),s=ly(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return hr.warn(n),""}}}function m0(){return new Date().toISOString().substring(0,10)}function jM(t,e=VM){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),g0(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),g0(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class XM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return I3()?L3().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return p0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return p0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function g0(t){return ly(JSON.stringify({version:2,heartbeats:t})).length}function $M(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function YM(t){ul(new qo("platform-logger",e=>new sM(e),"PRIVATE")),ul(new qo("heartbeat",e=>new WM(e),"PRIVATE")),No(Sh,d0,t),No(Sh,d0,"esm2017"),No("fire-js","")}YM("");function mm(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function yy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qM=yy,xy=new Ml("auth","Firebase",yy());/**
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
 */const yu=new fy("@firebase/auth");function KM(t,...e){yu.logLevel<=Nt.WARN&&yu.warn(`Auth (${Tl}): ${t}`,...e)}function kc(t,...e){yu.logLevel<=Nt.ERROR&&yu.error(`Auth (${Tl}): ${t}`,...e)}/**
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
 */function Ai(t,...e){throw gm(t,...e)}function Oi(t,...e){return gm(t,...e)}function Sy(t,e,n){const i=Object.assign(Object.assign({},qM()),{[e]:n});return new Ml("auth","Firebase",i).create(e,{appName:t.name})}function ar(t){return Sy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gm(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return xy.create(t,...e)}function Xe(t,e,...n){if(!t)throw gm(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kc(e),new Error(e)}function pr(t,e){t||nr(e)}/**
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
 */function wh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JM(){return v0()==="http:"||v0()==="https:"}function v0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ZM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JM()||R3()||"connection"in navigator)?navigator.onLine:!0}function QM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Al{constructor(e,n){this.shortDelay=e,this.longDelay=n,pr(n>e,"Short delay should be less than long delay!"),this.isMobile=A3()||b3()}get(){return ZM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vm(t,e){pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ey{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ew={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nw=new Al(3e4,6e4);function ds(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fs(t,e,n,i,r={}){return My(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=wl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return C3()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ju(t.emulatorConfig.host)&&(c.credentials="include"),Ey.fetch()(await wy(t,t.config.apiHost,n,a),c)})}async function My(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ew),e);try{const r=new rw(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ic(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ic(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ic(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ic(t,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sy(t,d,c);Ai(t,d)}}catch(r){if(r instanceof us)throw r;Ai(t,"network-request-failed",{message:String(r)})}}async function Cl(t,e,n,i,r={}){const s=await fs(t,e,n,i,r);return"mfaPendingCredential"in s&&Ai(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function wy(t,e,n,i){const r=`${e}${n}?${i}`,s=t,o=s.config.emulator?vm(t.config,r):`${t.config.apiScheme}://${r}`;return tw.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function iw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Oi(this.auth,"network-request-failed")),nw.get())})}}function ic(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Oi(t,e,i);return r.customData._tokenResponse=n,r}function _0(t){return t!==void 0&&t.enterprise!==void 0}class sw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ow(t,e){return fs(t,"GET","/v2/recaptchaConfig",ds(t,e))}/**
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
 */async function aw(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function xu(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lw(t,e=!1){const n=_r(t),i=await n.getIdToken(e),r=_m(i);Xe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Va(Hd(r.auth_time)),issuedAtTime:Va(Hd(r.iat)),expirationTime:Va(Hd(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hd(t){return Number(t)*1e3}function _m(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return kc("JWT malformed, contained fewer than 3 sections"),null;try{const r=cy(n);return r?JSON.parse(r):(kc("Failed to decode base64 JWT payload"),null)}catch(r){return kc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function y0(t){const e=_m(t);return Xe(e,"internal-error"),Xe(typeof e.exp<"u","internal-error"),Xe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof us&&cw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function cw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Th{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Su(t){var e;const n=t.auth,i=await t.getIdToken(),r=await fl(t,xu(n,{idToken:i}));Xe(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ty(s.providerUserInfo):[],a=fw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Th(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function dw(t){const e=_r(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fw(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Ty(t){return t.map(e=>{var{providerId:n}=e,i=mm(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function hw(t,e){const n=await My(t,{},async()=>{const i=wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=await wy(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Ju(t.emulatorConfig.host)&&(l.credentials="include"),Ey.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pw(t,e){return fs(t,"POST","/v2/accounts:revokeToken",ds(t,e))}/**
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
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Xe(e.idToken,"internal-error"),Xe(typeof e.idToken<"u","internal-error"),Xe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):y0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Xe(e.length!==0,"internal-error");const n=y0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Xe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await hw(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Do;return i&&(Xe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Xe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Xe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function Er(t,e){Xe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xi{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Th(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fl(this,this.stsTokenManager.getToken(this.auth,e));return Xe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lw(this,e)}reload(){return dw(this)}_assign(e){this!==e&&(Xe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_i(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await fl(this,aw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,d;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,u=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:M,isAnonymous:P,providerData:b,stsTokenManager:R}=n;Xe(S&&R,e,"internal-error");const N=Do.fromJSON(this.name,R);Xe(typeof S=="string",e,"internal-error"),Er(h,e.name),Er(p,e.name),Xe(typeof M=="boolean",e,"internal-error"),Xe(typeof P=="boolean",e,"internal-error"),Er(v,e.name),Er(x,e.name),Er(E,e.name),Er(m,e.name),Er(u,e.name),Er(y,e.name);const A=new xi({uid:S,auth:e,email:p,emailVerified:M,displayName:h,isAnonymous:P,photoURL:x,phoneNumber:v,tenantId:E,stsTokenManager:N,createdAt:u,lastLoginAt:y});return b&&Array.isArray(b)&&(A.providerData=b.map(w=>Object.assign({},w))),m&&(A._redirectEventId=m),A}static async _fromIdTokenResponse(e,n,i=!1){const r=new Do;r.updateFromServerResponse(n);const s=new xi({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Su(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];Xe(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Ty(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Do;a.updateFromIdToken(i);const l=new xi({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Th(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const x0=new Map;function ir(t){pr(t instanceof Function,"Expected a class definition");let e=x0.get(t);return e?(pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,x0.set(t,e),e)}/**
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
 */class Ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ay.type="NONE";const S0=Ay;/**
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
 */function Fc(t,e,n){return`firebase:${t}:${e}:${n}`}class Uo{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Fc(this.userKey,r.apiKey,s),this.fullPersistenceKey=Fc("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xu(this.auth,{idToken:e}).catch(()=>{});return n?xi._fromGetAccountInfoResponse(this.auth,n,e):null}return xi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Uo(ir(S0),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||ir(S0);const o=Fc(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){let h;if(typeof d=="string"){const p=await xu(e,{idToken:d}).catch(()=>{});if(!p)break;h=await xi._fromGetAccountInfoResponse(e,p,d)}else h=xi._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Uo(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Uo(s,e,i))}}/**
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
 */function E0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Py(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ly(e))return"Blackberry";if(Ny(e))return"Webos";if(Ry(e))return"Safari";if((e.includes("chrome/")||by(e))&&!e.includes("edge/"))return"Chrome";if(Iy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Cy(t=Nn()){return/firefox\//i.test(t)}function Ry(t=Nn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function by(t=Nn()){return/crios\//i.test(t)}function Py(t=Nn()){return/iemobile/i.test(t)}function Iy(t=Nn()){return/android/i.test(t)}function Ly(t=Nn()){return/blackberry/i.test(t)}function Ny(t=Nn()){return/webos/i.test(t)}function ym(t=Nn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mw(t=Nn()){var e;return ym(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gw(){return P3()&&document.documentMode===10}function Dy(t=Nn()){return ym(t)||Iy(t)||Ny(t)||Ly(t)||/windows phone/i.test(t)||Py(t)}/**
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
 */function Uy(t,e=[]){let n;switch(t){case"Browser":n=E0(Nn());break;case"Worker":n=`${E0(Nn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tl}/${i}`}/**
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
 */class vw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function _w(t,e={}){return fs(t,"GET","/v2/passwordPolicy",ds(t,e))}/**
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
 */const yw=6;class xw{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Sw{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new M0(this),this.idTokenSubscription=new M0(this),this.beforeStateQueue=new vw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ir(n)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted&&(this.persistenceManager=await Uo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xu(this,{idToken:e}),i=await xi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_i(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_i(this.app))return Promise.reject(ar(this));const n=e?_r(e):null;return n&&Xe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Xe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _i(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _i(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _w(this),n=new xw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ml("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await pw(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ir(e)||this._popupRedirectResolver;Xe(n,this,"argument-error"),this.redirectPersistenceManager=await Uo.create(this,[ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Xe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(_i(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function js(t){return _r(t)}class M0{constructor(e){this.auth=e,this.observer=null,this.addObserver=k3(n=>this.observer=n)}get next(){return Xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ew(t){Zu=t}function Oy(t){return Zu.loadJS(t)}function Mw(){return Zu.recaptchaEnterpriseScript}function ww(){return Zu.gapiScript}function Tw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Aw{constructor(){this.enterprise=new Cw}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Cw{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Rw="recaptcha-enterprise",ky="NO_RECAPTCHA";class bw{constructor(e){this.type=Rw,this.auth=js(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ow(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new sw(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;_0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ky)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Aw().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&_0(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Mw();l.length!==0&&(l+=a),Oy(l).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function w0(t,e,n,i=!1,r=!1){const s=new bw(t);let o;if(r)o=ky;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ah(t,e,n,i,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await w0(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await w0(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(o)})}/**
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
 */function Pw(t,e){const n=my(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Yo(s,e??{}))return r;Ai(r,"already-initialized")}return n.initialize({options:e})}function Iw(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Lw(t,e,n){const i=js(t);Xe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Fy(e),{host:o,port:a}=Nw(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){Xe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Xe(Yo(c,i.config.emulator)&&Yo(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Ju(o)?(E3(`${s}//${o}${l}`),T3("Auth",!0)):Dw()}function Fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nw(t){const e=Fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:T0(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:T0(o)}}}function T0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class xm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function Uw(t,e){return fs(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ow(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",ds(t,e))}/**
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
 */async function kw(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",ds(t,e))}async function Fw(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",ds(t,e))}/**
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
 */class hl extends xm{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new hl(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new hl(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ah(e,n,"signInWithPassword",Ow);case"emailLink":return kw(e,{email:this._email,oobCode:this._password});default:Ai(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ah(e,i,"signUpPassword",Uw);case"emailLink":return Fw(e,{idToken:n,email:this._email,oobCode:this._password});default:Ai(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Oo(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",ds(t,e))}/**
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
 */const Bw="http://localhost";class Bs extends xm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ai("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=mm(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Bs(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Oo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oo(e,n)}buildRequest(){const e={requestUri:Bw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wl(n)}return e}}/**
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
 */function zw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hw(t){const e=Ra(ba(t)).link,n=e?Ra(ba(e)).deep_link_id:null,i=Ra(ba(t)).deep_link_id;return(i?Ra(ba(i)).link:null)||i||n||e||t}class Sm{constructor(e){var n,i,r,s,o,a;const l=Ra(ba(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(i=l.oobCode)!==null&&i!==void 0?i:null,h=zw((r=l.mode)!==null&&r!==void 0?r:null);Xe(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Hw(e);try{return new Sm(n)}catch{return null}}}/**
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
 */class oa{constructor(){this.providerId=oa.PROVIDER_ID}static credential(e,n){return hl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Sm.parseLink(n);return Xe(i,"argument-error"),hl._fromEmailAndCode(e,i.code,i.tenantId)}}oa.PROVIDER_ID="password";oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class By{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rl extends By{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dr extends Rl{constructor(){super("facebook.com")}static credential(e){return Bs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
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
 */class Ur extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ur.credential(n,i)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
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
 */class Or extends Rl{constructor(){super("github.com")}static credential(e){return Bs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
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
 */class kr extends Rl{constructor(){super("twitter.com")}static credential(e,n){return Bs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return kr.credential(n,i)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
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
 */async function Vw(t,e){return Cl(t,"POST","/v1/accounts:signUp",ds(t,e))}/**
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
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await xi._fromIdTokenResponse(e,i,r),o=A0(i);return new zs({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=A0(i);return new zs({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function A0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Eu extends us{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Eu(e,n,i,r)}}function zy(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(t,s,e,i):s})}async function Gw(t,e,n=!1){const i=await fl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",i)}/**
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
 */async function Ww(t,e,n=!1){const{auth:i}=t;if(_i(i.app))return Promise.reject(ar(i));const r="reauthenticate";try{const s=await fl(t,zy(i,r,e,t),n);Xe(s.idToken,i,"internal-error");const o=_m(s.idToken);Xe(o,i,"internal-error");const{sub:a}=o;return Xe(t.uid===a,i,"user-mismatch"),zs._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ai(i,"user-mismatch"),s}}/**
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
 */async function Hy(t,e,n=!1){if(_i(t.app))return Promise.reject(ar(t));const i="signIn",r=await zy(t,i,e),s=await zs._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function jw(t,e){return Hy(js(t),e)}/**
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
 */async function Vy(t){const e=js(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Xw(t,e,n){if(_i(t.app))return Promise.reject(ar(t));const i=js(t),o=await Ah(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Vy(t),l}),a=await zs._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function $w(t,e,n){return _i(t.app)?Promise.reject(ar(t)):jw(_r(t),oa.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Vy(t),i})}function Yw(t,e,n,i){return _r(t).onIdTokenChanged(e,n,i)}function qw(t,e,n){return _r(t).beforeAuthStateChanged(e,n)}function Kw(t,e,n,i){return _r(t).onAuthStateChanged(e,n,i)}function Jw(t){return _r(t).signOut()}const Mu="__sak";/**
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
 */class Gy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mu,"1"),this.storage.removeItem(Mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Zw=1e3,Qw=10;class Wy extends Gy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);gw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Qw):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Zw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wy.type="LOCAL";const eT=Wy;/**
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
 */class jy extends Gy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jy.type="SESSION";const Xy=jy;/**
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
 */function tT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Qu(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await tT(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qu.receivers=[];/**
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
 */function Em(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Em("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ki(){return window}function iT(t){ki().location.href=t}/**
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
 */function $y(){return typeof ki().WorkerGlobalScope<"u"&&typeof ki().importScripts=="function"}async function rT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oT(){return $y()?self:null}/**
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
 */const Yy="firebaseLocalStorageDb",aT=1,wu="firebaseLocalStorage",qy="fbase_key";class bl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ed(t,e){return t.transaction([wu],e?"readwrite":"readonly").objectStore(wu)}function lT(){const t=indexedDB.deleteDatabase(Yy);return new bl(t).toPromise()}function Ch(){const t=indexedDB.open(Yy,aT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(wu,{keyPath:qy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(wu)?e(i):(i.close(),await lT(),e(await Ch()))})})}async function C0(t,e,n){const i=ed(t,!0).put({[qy]:e,value:n});return new bl(i).toPromise()}async function cT(t,e){const n=ed(t,!1).get(e),i=await new bl(n).toPromise();return i===void 0?null:i.value}function R0(t,e){const n=ed(t,!0).delete(e);return new bl(n).toPromise()}const uT=800,dT=3;class Ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ch(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>dT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qu._getInstance(oT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new nT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ch();return await C0(e,Mu,"1"),await R0(e,Mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>C0(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>cT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>R0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ed(r,!1).getAll();return new bl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ky.type="LOCAL";const fT=Ky;new Al(3e4,6e4);/**
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
 */function hT(t,e){return e?ir(e):(Xe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mm extends xm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pT(t){return Hy(t.auth,new Mm(t),t.bypassAuthState)}function mT(t){const{auth:e,user:n}=t;return Xe(n,e,"internal-error"),Ww(n,new Mm(t),t.bypassAuthState)}async function gT(t){const{auth:e,user:n}=t;return Xe(n,e,"internal-error"),Gw(n,new Mm(t),t.bypassAuthState)}/**
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
 */class Jy{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pT;case"linkViaPopup":case"linkViaRedirect":return gT;case"reauthViaPopup":case"reauthViaRedirect":return mT;default:Ai(this.auth,"internal-error")}}resolve(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vT=new Al(2e3,1e4);class To extends Jy{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,To.currentPopupAction&&To.currentPopupAction.cancel(),To.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Xe(e,this.auth,"internal-error"),e}async onExecution(){pr(this.filter.length===1,"Popup operations only handle one event");const e=Em();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Oi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Oi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,To.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vT.get())};e()}}To.currentPopupAction=null;/**
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
 */const _T="pendingRedirect",Bc=new Map;class yT extends Jy{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Bc.get(this.auth._key());if(!e){try{const i=await xT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Bc.set(this.auth._key(),e)}return this.bypassAuthState||Bc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xT(t,e){const n=MT(e),i=ET(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function ST(t,e){Bc.set(t._key(),e)}function ET(t){return ir(t._redirectPersistence)}function MT(t){return Fc(_T,t.config.apiKey,t.name)}async function wT(t,e,n=!1){if(_i(t.app))return Promise.reject(ar(t));const i=js(t),r=hT(i,e),o=await new yT(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const TT=10*60*1e3;class AT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Zy(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Oi(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TT&&this.cachedEventUids.clear(),this.cachedEventUids.has(b0(e))}saveEventToCache(e){this.cachedEventUids.add(b0(e)),this.lastProcessedEventTime=Date.now()}}function b0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zy(t);default:return!1}}/**
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
 */async function RT(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
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
 */const bT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PT=/^https?/;async function IT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RT(t);for(const n of e)try{if(LT(n))return}catch{}Ai(t,"unauthorized-domain")}function LT(t){const e=wh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!PT.test(n))return!1;if(bT.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const NT=new Al(3e4,6e4);function P0(){const t=ki().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DT(t){return new Promise((e,n)=>{var i,r,s;function o(){P0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{P0(),n(Oi(t,"network-request-failed"))},timeout:NT.get()})}if(!((r=(i=ki().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ki().gapi)===null||s===void 0)&&s.load)o();else{const a=Tw("iframefcb");return ki()[a]=()=>{gapi.load?o():n(Oi(t,"network-request-failed"))},Oy(`${ww()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zc=null,e})}let zc=null;function UT(t){return zc=zc||DT(t),zc}/**
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
 */const OT=new Al(5e3,15e3),kT="__/auth/iframe",FT="emulator/auth/iframe",BT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HT(t){const e=t.config;Xe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vm(e,FT):`https://${t.config.authDomain}/${kT}`,i={apiKey:e.apiKey,appName:t.name,v:Tl},r=zT.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${wl(i).slice(1)}`}async function VT(t){const e=await UT(t),n=ki().gapi;return Xe(n,t,"internal-error"),e.open({where:document.body,url:HT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BT,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Oi(t,"network-request-failed"),a=ki().setTimeout(()=>{s(o)},OT.get());function l(){ki().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const GT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WT=500,jT=600,XT="_blank",$T="http://localhost";class I0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YT(t,e,n,i=WT,r=jT){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},GT),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Nn().toLowerCase();n&&(a=by(c)?XT:n),Cy(c)&&(e=e||$T,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[v,x])=>`${p}${v}=${x},`,"");if(mw(c)&&a!=="_self")return qT(e||"",a),new I0(null);const h=window.open(e||"",a,d);Xe(h,t,"popup-blocked");try{h.focus()}catch{}return new I0(h)}function qT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const KT="__/auth/handler",JT="emulator/auth/handler",ZT=encodeURIComponent("fac");async function L0(t,e,n,i,r,s){Xe(t.config.authDomain,t,"auth-domain-config-required"),Xe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Tl,eventId:r};if(e instanceof By){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",O3(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Rl){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${ZT}=${encodeURIComponent(l)}`:"";return`${QT(t)}?${wl(a).slice(1)}${c}`}function QT({config:t}){return t.emulator?vm(t,JT):`https://${t.authDomain}/${KT}`}/**
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
 */const Vd="webStorageSupport";class eA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xy,this._completeRedirectFn=wT,this._overrideRedirectResult=ST}async _openPopup(e,n,i,r){var s;pr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await L0(e,n,i,wh(),r);return YT(e,o,Em())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await L0(e,n,i,wh(),r);return iT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(pr(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await VT(e),i=new AT(e);return n.register("authEvent",r=>(Xe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vd,{type:Vd},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Vd];o!==void 0&&n(!!o),Ai(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dy()||Ry()||ym()}}const tA=eA;var N0="@firebase/auth",D0="1.10.8";/**
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
 */class nA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rA(t){ul(new qo("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Xe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uy(t)},c=new Sw(i,r,s,l);return Iw(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ul(new qo("auth-internal",e=>{const n=js(e.getProvider("auth").getImmediate());return(i=>new nA(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),No(N0,D0,iA(t)),No(N0,D0,"esm2017")}/**
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
 */const sA=5*60,oA=dy("authIdTokenMaxAge")||sA;let U0=null;const aA=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>oA)return;const r=n==null?void 0:n.token;U0!==r&&(U0=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function lA(t=FM()){const e=my(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pw(t,{popupRedirectResolver:tA,persistence:[fT,eT,Xy]}),i=dy("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=aA(s.toString());qw(n,o,()=>o(n.currentUser)),Yw(n,a=>o(a))}}const r=x3("auth");return r&&Lw(n,`http://${r}`),n}function cA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ew({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Oi("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",cA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rA("Browser");var uA="firebase",dA="11.10.0";/**
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
 */No(uA,dA,"app");const Qy={apiKey:"your-api-key",authDomain:"your-project.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project.appspot.com",messagingSenderId:"your-sender-id",appId:"your-app-id"};function fA(t){return!!(t.apiKey&&t.authDomain&&t.projectId&&t.appId&&t.apiKey!=="your-api-key")}const Pl=fA(Qy);let mr=null;if(Pl){const t=h0().length>0?h0()[0]:gy(Qy);mr=lA(t)}const Rh="auraar_demo_user";function hA(){const t=localStorage.getItem(Rh);return t?JSON.parse(t):null}function wm(t){t?localStorage.setItem(Rh,JSON.stringify(t)):localStorage.removeItem(Rh)}function pA(t){return Pl&&mr?Kw(mr,t):(t(hA()),()=>{})}async function mA(t,e){if(Pl&&mr)return(await $w(mr,t,e)).user;const n={uid:`demo-${Date.now()}`,email:t,displayName:t.split("@")[0],authMode:"demo"};return wm(n),n}async function gA(t,e){if(Pl&&mr)return(await Xw(mr,t,e)).user;const n={uid:`demo-${Date.now()}`,email:t,displayName:t.split("@")[0],authMode:"demo"};return wm(n),n}async function vA(){if(Pl&&mr){await Jw(mr);return}wm(null)}const ex=J.createContext(null);function _A({children:t}){const[e,n]=J.useState(null),[i,r]=J.useState(!0);J.useEffect(()=>pA(a=>{n(a),r(!1)}),[]);const s=J.useMemo(()=>({user:e,authLoading:i,isAuthenticated:!!e,login:mA,signup:gA,logout:vA}),[i,e]);return O.jsx(ex.Provider,{value:s,children:t})}function td(){const t=J.useContext(ex);if(!t)throw new Error("useAuth must be used inside AuthProvider");return t}const yA=[{to:"/",label:"Home"},{to:"/shop",label:"Shop"},{to:"/tryon",label:"Try On"},{to:"/about",label:"About"},{to:"/profile",label:"Profile"}];function xA(){const{isAuthenticated:t,logout:e,user:n}=td(),i=Yu();async function r(){await e(),i("/auth")}return O.jsx("header",{className:"sticky top-0 z-30 border-b border-rose-100 bg-white/90 backdrop-blur",children:O.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",children:[O.jsxs("div",{children:[O.jsx("p",{className:"font-display text-2xl font-bold text-aura-primary",children:"AuraAR"}),O.jsx("p",{className:"text-sm text-stone-500",children:"Virtual accessories try-on"})]}),O.jsxs("nav",{className:"flex flex-wrap items-center gap-2",children:[yA.map(s=>O.jsx(i0,{to:s.to,className:({isActive:o})=>["rounded-full px-4 py-2 text-sm font-medium transition",o?"bg-aura-primary text-white":"text-stone-600 hover:bg-rose-50 hover:text-aura-primary"].join(" "),children:s.label},s.to)),t?O.jsxs(O.Fragment,{children:[O.jsx("span",{className:"px-2 text-sm text-stone-500",children:n==null?void 0:n.email}),O.jsx("button",{type:"button",onClick:r,className:"rounded-full bg-aura-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-95",children:"Logout"})]}):O.jsx(i0,{to:"/auth",className:({isActive:s})=>["rounded-full px-4 py-2 text-sm font-medium transition",s?"bg-aura-accent text-white":"bg-aura-secondary/20 text-aura-primary hover:bg-aura-secondary/35"].join(" "),children:"Login / Sign Up"})]})]})})}function SA({children:t}){const{authLoading:e,isAuthenticated:n}=td(),i=cs();return e?O.jsx("main",{className:"mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8",children:O.jsx("div",{className:"rounded-[2rem] bg-white p-8 text-center shadow-aura",children:"Checking your session..."})}):n?t:O.jsx(ry,{to:"/auth",replace:!0,state:{from:i.pathname}})}const EA=["I think that I would like to use AuraAR frequently.","I found AuraAR unnecessarily complex.","I thought AuraAR was easy to use.","I think that I would need technical support to use AuraAR.","I found the AR try-on features well integrated.","I thought there was too much inconsistency in the system.","I would imagine that most users would learn to use AuraAR quickly.","I found the system cumbersome to use.","I felt confident using the AR try-on experience.","I needed to learn a lot of things before I could get going with AuraAR."];function MA(){return O.jsxs("section",{className:"rounded-[2rem] border border-rose-100 bg-white p-8 shadow-aura",children:[O.jsxs("div",{className:"mb-6",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-accent",children:"Evaluation"}),O.jsx("h2",{className:"mt-3 font-display text-3xl text-aura-primary",children:"SUS Survey Outline"}),O.jsx("p",{className:"mt-3 max-w-3xl text-stone-600",children:"This section prepares the System Usability Scale for the evaluation phase of the thesis. Participants can rate each statement from 1 to 5 after using the live try-on flow."})]}),O.jsx("div",{className:"space-y-3",children:EA.map((t,e)=>O.jsxs("div",{className:"rounded-2xl border border-aura-secondary/30 bg-aura-secondary/8 p-4",children:[O.jsxs("p",{className:"text-sm font-semibold text-aura-primary",children:["Q",e+1,". ",t]}),O.jsx("p",{className:"mt-2 text-sm text-stone-500",children:"Scale: 1 = Strongly disagree, 5 = Strongly agree"})]},t))})]})}function wA(){return O.jsxs("main",{className:"mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",children:[O.jsxs("section",{className:"rounded-[2rem] bg-white p-8 shadow-aura",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-accent",children:"About"}),O.jsx("h1",{className:"mt-3 font-display text-4xl text-aura-primary",children:"Research Context"}),O.jsx("p",{className:"mt-4 max-w-4xl text-stone-600",children:"AuraAR is a thesis-oriented augmented reality web application focused on improving confidence in online accessory shopping for females aged 18 to 25 in Kathmandu, Nepal. The system combines MediaPipe face tracking, a responsive shopping interface, and local-only facial processing to create a privacy-aware virtual try-on experience."}),O.jsxs("div",{className:"mt-8 grid gap-6 lg:grid-cols-2",children:[O.jsxs("article",{className:"rounded-3xl border border-aura-secondary/35 bg-aura-secondary/10 p-6",children:[O.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Research Questions"}),O.jsxs("div",{className:"mt-4 space-y-3 text-stone-600",children:[O.jsx("p",{children:"RQ1: Will AR increase confidence in online accessory purchasing?"}),O.jsx("p",{children:"RQ2: How does AR realism influence buying decisions?"}),O.jsx("p",{children:"RQ3: Will virtual fitting reduce hesitance and return rates?"})]})]}),O.jsxs("article",{className:"rounded-3xl border border-aura-secondary/35 bg-aura-secondary/10 p-6",children:[O.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Hypotheses"}),O.jsxs("div",{className:"mt-4 space-y-3 text-stone-600",children:[O.jsx("p",{children:"H1: AR try-on increases user confidence before purchase."}),O.jsx("p",{children:"H2: Live tracking improves perceived realism over static previews."}),O.jsx("p",{children:"H3: Faster decision-making leads to greater purchase intent."})]})]}),O.jsxs("article",{className:"rounded-3xl border border-aura-secondary/35 bg-white p-6",children:[O.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Methodology"}),O.jsxs("div",{className:"mt-4 space-y-3 text-stone-600",children:[O.jsx("p",{children:"Approach: Desk-Based Agile development"}),O.jsx("p",{children:"Sprints: Research to Prototype to Testing to Refinement"}),O.jsx("p",{children:"Evaluation: usability observation, SUS survey, and feature validation"})]})]}),O.jsxs("article",{className:"rounded-3xl border border-aura-secondary/35 bg-white p-6",children:[O.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Project Team"}),O.jsxs("div",{className:"mt-4 space-y-3 text-stone-600",children:[O.jsx("p",{children:"Researcher: Bishruti Koirala"}),O.jsx("p",{children:"Supervisor: Manoj Shrestha"}),O.jsx("p",{children:"Institution: Coventry University / Softwarica College"})]})]})]})]}),O.jsx("div",{className:"mt-8",children:O.jsx(MA,{})})]})}function TA(){var m;const[t,e]=J.useState("login"),[n,i]=J.useState(""),[r,s]=J.useState(""),[o,a]=J.useState(""),[l,c]=J.useState(!1),{login:d,signup:h}=td(),p=Yu(),x=((m=cs().state)==null?void 0:m.from)||"/profile";async function E(u){u.preventDefault(),a(""),c(!0);try{t==="login"?await d(n,r):await h(n,r),p(x,{replace:!0})}catch(y){a(y.message||"Authentication failed. Please try again.")}finally{c(!1)}}return O.jsx("main",{className:"mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",children:O.jsxs("section",{className:"grid overflow-hidden rounded-[2rem] bg-white shadow-aura lg:grid-cols-[1.1fr_0.9fr]",children:[O.jsxs("div",{className:"bg-aura-primary px-8 py-12 text-white sm:px-10",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-secondary",children:"AuraAR Access"}),O.jsx("h1",{className:"mt-4 font-display text-4xl",children:"Login or create your account"}),O.jsx("p",{className:"mt-4 max-w-md text-sm text-white/85",children:"Use authentication to save wishlists, personalize your profile, and continue building the full academic prototype. If Firebase is not configured yet, the app will use demo auth locally."}),O.jsxs("div",{className:"mt-8 space-y-3 text-sm text-white/85",children:[O.jsx("p",{children:"Save items to wishlist"}),O.jsx("p",{children:"Protect the profile page"}),O.jsx("p",{children:"Prepare for Firebase Auth integration"})]})]}),O.jsxs("div",{className:"px-8 py-12 sm:px-10",children:[O.jsxs("div",{className:"mb-8 flex gap-3",children:[O.jsx("button",{type:"button",onClick:()=>e("login"),className:["rounded-full px-5 py-2 text-sm font-semibold transition",t==="login"?"bg-aura-accent text-white":"bg-aura-secondary/20 text-aura-primary"].join(" "),children:"Login"}),O.jsx("button",{type:"button",onClick:()=>e("signup"),className:["rounded-full px-5 py-2 text-sm font-semibold transition",t==="signup"?"bg-aura-accent text-white":"bg-aura-secondary/20 text-aura-primary"].join(" "),children:"Sign Up"})]}),O.jsxs("form",{onSubmit:E,className:"space-y-5",children:[O.jsxs("div",{children:[O.jsx("label",{className:"mb-2 block text-sm font-medium text-aura-primary",children:"Email"}),O.jsx("input",{type:"email",value:n,onChange:u=>i(u.target.value),placeholder:"you@example.com",required:!0,className:"w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"})]}),O.jsxs("div",{children:[O.jsx("label",{className:"mb-2 block text-sm font-medium text-aura-primary",children:"Password"}),O.jsx("input",{type:"password",value:r,onChange:u=>s(u.target.value),placeholder:"Minimum 6 characters",minLength:6,required:!0,className:"w-full rounded-2xl border border-aura-secondary/50 bg-white px-4 py-3 outline-none transition focus:border-aura-accent"})]}),o?O.jsx("div",{className:"rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700",children:o}):null,O.jsx("button",{type:"submit",disabled:l,className:"w-full rounded-full bg-aura-primary px-6 py-3 font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70",children:l?"Please wait...":t==="login"?"Login":"Create Account"})]}),O.jsxs("p",{className:"mt-6 text-sm text-stone-500",children:["Back to"," ",O.jsx(Ku,{to:"/tryon",className:"font-semibold text-aura-accent",children:"AR Try-On"})]})]})]})})}function AA({product:t}){return O.jsxs("article",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[O.jsx("div",{className:"mb-4 rounded-2xl bg-aura-secondary/14 p-4",children:O.jsx("img",{src:t.thumbnailUrl,alt:t.name,className:"mx-auto h-32 w-32 object-contain"})}),O.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:t.category}),O.jsx("span",{className:["rounded-full px-3 py-1 text-xs font-semibold",t.arSupported?"bg-emerald-50 text-emerald-700":"bg-stone-100 text-stone-500"].join(" "),children:t.arSupported?"AR Ready":"Planned"})]}),O.jsx("h3",{className:"font-display text-xl text-aura-charcoal",children:t.name}),O.jsxs("p",{className:"mt-2 text-stone-600",children:["NPR ",t.price]}),O.jsx("p",{className:"mt-2 text-sm text-stone-500",children:"Designed for a mobile-friendly try-on journey with local landmark processing."}),O.jsxs("div",{className:"mt-4 flex gap-3",children:[O.jsx(Ku,{to:"/tryon",className:"rounded-full bg-aura-primary px-4 py-2 text-sm font-semibold text-white",children:"Try in AR"}),O.jsx("button",{className:"rounded-full border border-aura-secondary/50 px-4 py-2 text-sm font-semibold text-aura-primary",children:"Save"})]})]})}async function CA(){return[{id:"rose-drop-earrings",name:"Chandbali Gold Earrings",category:"earrings",price:1999,currency:"NPR",thumbnailUrl:"https://upload.wikimedia.org/wikipedia/commons/4/40/Chandbali_Earrings.jpg",tryOnImageUrl:"https://upload.wikimedia.org/wikipedia/commons/4/40/Chandbali_Earrings.jpg",arSupported:!0},{id:"midnight-sunglasses",name:"Oakley Shield Sunglasses",category:"sunglasses",price:2499,currency:"NPR",thumbnailUrl:"https://upload.wikimedia.org/wikipedia/commons/7/71/Oakley_sunglasses.jpg",tryOnImageUrl:"https://upload.wikimedia.org/wikipedia/commons/7/71/Oakley_sunglasses.jpg",arSupported:!0},{id:"gold-pendant-necklace",name:"Extendible Gold Necklace",category:"necklace",price:3199,currency:"NPR",thumbnailUrl:"https://upload.wikimedia.org/wikipedia/commons/0/08/Extendible_gold_necklace_with_two_clasps.jpg",tryOnImageUrl:"https://upload.wikimedia.org/wikipedia/commons/0/08/Extendible_gold_necklace_with_two_clasps.jpg",arSupported:!0},{id:"minimalist-watch",name:"Minimalist Watch",category:"watch",price:4299,currency:"NPR",modelKind:"watch",thumbnailUrl:"/assets/earrings/sample-earring.png",arSupported:!1}]}const RA=["all","earrings","sunglasses","necklace","watch"];function bA(){const[t,e]=J.useState([]),[n,i]=J.useState("all");J.useEffect(()=>{CA().then(e)},[]);const r=J.useMemo(()=>n==="all"?t:t.filter(s=>s.category===n),[n,t]);return O.jsxs("main",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",children:[O.jsxs("div",{className:"mb-8",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-accent",children:"Shop"}),O.jsx("h1",{className:"font-display text-4xl text-aura-primary",children:"Accessory Catalog"}),O.jsx("p",{className:"mt-4 max-w-3xl text-stone-600",children:"Browse the academic product catalog by accessory type. This page is structured to support future Firestore integration, AR-supported item tagging, and purchase-confidence evaluation."})]}),O.jsx("div",{className:"mb-8 flex flex-wrap gap-3",children:RA.map(s=>{const o=n===s;return O.jsx("button",{type:"button",onClick:()=>i(s),className:["rounded-full px-5 py-2 text-sm font-semibold capitalize transition",o?"bg-aura-primary text-white":"bg-white text-aura-primary border border-aura-secondary/45 hover:bg-aura-secondary/10"].join(" "),children:s},s)})}),O.jsx("section",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-3",children:r.map(s=>O.jsx(AA,{product:s},s.id))})]})}function PA(){return O.jsx("main",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",children:O.jsxs("section",{className:"rounded-[2rem] bg-white p-10 shadow-aura",children:[O.jsx("p",{className:"mb-3 text-sm uppercase tracking-[0.3em] text-aura-accent",children:"Kathmandu-ready AR accessories"}),O.jsx("h1",{className:"max-w-3xl font-display text-5xl text-aura-primary",children:"Try earrings and other accessories on your face before you buy."}),O.jsx("p",{className:"mt-6 max-w-2xl text-lg text-stone-600",children:"AuraAR is an academic prototype focused on confidence, realism, and better online accessory decisions for young women in Kathmandu."}),O.jsx(Ku,{to:"/tryon",className:"mt-8 inline-flex rounded-full bg-aura-primary px-6 py-3 font-semibold text-white",children:"Start AR Try-On"})]})})}function IA(){const{user:t}=td();return O.jsx("main",{className:"mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8",children:O.jsxs("section",{className:"rounded-[2rem] bg-white p-8 shadow-aura",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-aura-accent",children:"Profile"}),O.jsx("h1",{className:"mt-3 font-display text-4xl text-aura-primary",children:"User Summary"}),O.jsxs("div",{className:"mt-4 rounded-3xl bg-aura-secondary/15 p-5 text-sm text-stone-600",children:["Signed in as ",O.jsx("span",{className:"font-semibold text-aura-primary",children:t==null?void 0:t.email})]}),O.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-3",children:[O.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-5",children:[O.jsx("p",{className:"text-sm text-stone-500",children:"Try-ons"}),O.jsx("p",{className:"mt-2 font-display text-3xl text-aura-charcoal",children:"0"})]}),O.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-5",children:[O.jsx("p",{className:"text-sm text-stone-500",children:"Wishlisted"}),O.jsx("p",{className:"mt-2 font-display text-3xl text-aura-charcoal",children:"0"})]}),O.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-5",children:[O.jsx("p",{className:"text-sm text-stone-500",children:"Purchased"}),O.jsx("p",{className:"mt-2 font-display text-3xl text-aura-charcoal",children:"0"})]})]})]})})}function LA({accessories:t,selectedAccessoryId:e,onSelectAccessory:n}){return O.jsxs("section",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[O.jsxs("div",{className:"mb-4",children:[O.jsx("h2",{className:"font-display text-2xl text-aura-charcoal",children:"Accessories"}),O.jsx("p",{className:"text-sm text-stone-600",children:"Select a product photo to place on the face landmarks."})]}),O.jsx("div",{className:"space-y-3",children:t.map(i=>{const r=i.id===e;return O.jsxs("button",{type:"button",onClick:()=>n(i.id),className:["flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition",r?"border-aura-primary bg-rose-50":"border-rose-100 bg-white hover:border-rose-200 hover:bg-rose-50/50"].join(" "),children:[O.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-2xl bg-aura-cream",children:O.jsx("img",{src:i.thumbnailUrl,alt:i.name,className:"max-h-12 max-w-12 object-contain"})}),O.jsxs("div",{children:[O.jsx("p",{className:"font-semibold text-aura-charcoal",children:i.name}),O.jsx("p",{className:"text-sm text-stone-500",children:i.category})]})]},i.id)})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tm="177",NA=0,O0=1,DA=2,tx=1,UA=2,Ki=3,is=0,Wn=1,Qi=2,Qr=0,ko=1,k0=2,F0=3,B0=4,OA=5,Ts=100,kA=101,FA=102,BA=103,zA=104,HA=200,VA=201,GA=202,WA=203,bh=204,Ph=205,jA=206,XA=207,$A=208,YA=209,qA=210,KA=211,JA=212,ZA=213,QA=214,Ih=0,Lh=1,Nh=2,Ko=3,Dh=4,Uh=5,Oh=6,kh=7,nx=0,e4=1,t4=2,es=0,n4=1,i4=2,r4=3,s4=4,o4=5,a4=6,l4=7,ix=300,Jo=301,Zo=302,Fh=303,Bh=304,nd=306,zh=1e3,Ps=1001,Hh=1002,wi=1003,c4=1004,rc=1005,Ni=1006,Gd=1007,Is=1008,Bi=1009,rx=1010,sx=1011,pl=1012,Am=1013,Hs=1014,rr=1015,Il=1016,Cm=1017,Rm=1018,ml=1020,ox=35902,ax=1021,lx=1022,Si=1023,gl=1026,vl=1027,cx=1028,bm=1029,ux=1030,Pm=1031,Im=1033,Hc=33776,Vc=33777,Gc=33778,Wc=33779,Vh=35840,Gh=35841,Wh=35842,jh=35843,Xh=36196,$h=37492,Yh=37496,qh=37808,Kh=37809,Jh=37810,Zh=37811,Qh=37812,ep=37813,tp=37814,np=37815,ip=37816,rp=37817,sp=37818,op=37819,ap=37820,lp=37821,jc=36492,cp=36494,up=36495,dx=36283,dp=36284,fp=36285,hp=36286,u4=3200,d4=3201,fx=0,f4=1,Fr="",ni="srgb",Qo="srgb-linear",Tu="linear",Lt="srgb",Zs=7680,z0=519,h4=512,p4=513,m4=514,hx=515,g4=516,v4=517,_4=518,y4=519,H0=35044,V0="300 es",sr=2e3,Au=2001;class aa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=Math.PI/180,pp=180/Math.PI;function Ll(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[t&255]+xn[t>>8&255]+xn[t>>16&255]+xn[t>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function ft(t,e,n){return Math.max(e,Math.min(n,t))}function x4(t,e){return(t%e+e)%e}function jd(t,e,n){return(1-n)*t+n*e}function ya(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ft(this.x,e.x,n.x),this.y=ft(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ft(this.x,e,n),this.y=ft(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const p=s[o+0],v=s[o+1],x=s[o+2],E=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=p,e[n+1]=v,e[n+2]=x,e[n+3]=E;return}if(h!==E||l!==p||c!==v||d!==x){let m=1-a;const u=l*p+c*v+d*x+h*E,y=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const P=Math.sqrt(S),b=Math.atan2(P,u*y);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}const M=a*y;if(l=l*m+p*M,c=c*m+v*M,d=d*m+x*M,h=h*m+E*M,m===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=P,c*=P,d*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],p=s[o+1],v=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*v-c*p,e[n+1]=l*x+d*p+c*h-a*v,e[n+2]=c*x+d*v+a*p-l*h,e[n+3]=d*x-a*h-l*p-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),p=l(i/2),v=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*d*h+c*v*x,this._y=c*v*h-p*d*x,this._z=c*d*x+p*v*h,this._w=c*d*h-p*v*x;break;case"YXZ":this._x=p*d*h+c*v*x,this._y=c*v*h-p*d*x,this._z=c*d*x-p*v*h,this._w=c*d*h+p*v*x;break;case"ZXY":this._x=p*d*h-c*v*x,this._y=c*v*h+p*d*x,this._z=c*d*x+p*v*h,this._w=c*d*h-p*v*x;break;case"ZYX":this._x=p*d*h-c*v*x,this._y=c*v*h+p*d*x,this._z=c*d*x-p*v*h,this._w=c*d*h+p*v*x;break;case"YZX":this._x=p*d*h+c*v*x,this._y=c*v*h+p*d*x,this._z=c*d*x-p*v*h,this._w=c*d*h-p*v*x;break;case"XZY":this._x=p*d*h-c*v*x,this._y=c*v*h-p*d*x,this._z=c*d*x+p*v*h,this._w=c*d*h+p*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],p=i+a+h;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(d-l)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(i>a&&i>h){const v=2*Math.sqrt(1+i-a-h);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>h){const v=2*Math.sqrt(1+a-i-h);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+h-i-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*o+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(G0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(G0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ft(this.x,e.x,n.x),this.y=ft(this.y,e.y,n.y),this.z=ft(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ft(this.x,e,n),this.y=ft(this.y,e,n),this.z=ft(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xd=new j,G0=new Nl;class tt{constructor(e,n,i,r,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],p=i[2],v=i[5],x=i[8],E=r[0],m=r[3],u=r[6],y=r[1],S=r[4],M=r[7],P=r[2],b=r[5],R=r[8];return s[0]=o*E+a*y+l*P,s[3]=o*m+a*S+l*b,s[6]=o*u+a*M+l*R,s[1]=c*E+d*y+h*P,s[4]=c*m+d*S+h*b,s[7]=c*u+d*M+h*R,s[2]=p*E+v*y+x*P,s[5]=p*m+v*S+x*b,s[8]=p*u+v*M+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,p=a*l-d*s,v=c*s-o*l,x=n*h+i*p+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=h*E,e[1]=(r*c-d*i)*E,e[2]=(a*i-r*o)*E,e[3]=p*E,e[4]=(d*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=v*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply($d.makeScale(e,n)),this}rotate(e){return this.premultiply($d.makeRotation(-e)),this}translate(e,n){return this.premultiply($d.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $d=new tt;function px(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function S4(){const t=Cu("canvas");return t.style.display="block",t}const W0={};function Fo(t){t in W0||(W0[t]=!0,console.warn(t))}function E4(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function M4(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function w4(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const j0=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X0=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T4(){const t={enabled:!0,workingColorSpace:Qo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Lt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(r.r=Bo(r.r),r.g=Bo(r.g),r.b=Bo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fr?Tu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qo]:{primaries:e,whitePoint:i,transfer:Tu,toXYZ:j0,fromXYZ:X0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:j0,fromXYZ:X0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),t}const Mt=T4();function lr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qs;class A4{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qs===void 0&&(Qs=Cu("canvas")),Qs.width=e.width,Qs.height=e.height;const r=Qs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(lr(n[i]/255)*255):n[i]=lr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C4=0;class Lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C4++}),this.uuid=Ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yd(r[o].image)):s.push(Yd(r[o]))}else s=Yd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?A4.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R4=0;const qd=new j;class jn extends aa{constructor(e=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,i=Ps,r=Ps,s=Ni,o=Is,a=Si,l=Bi,c=jn.DEFAULT_ANISOTROPY,d=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R4++}),this.uuid=Ll(),this.name="",this.source=new Lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case Ps:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case Ps:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=ix;jn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,n=0,i=0,r=1){Yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],v=l[5],x=l[9],E=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-E)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+E)<.1&&Math.abs(x+m)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,M=(v+1)/2,P=(u+1)/2,b=(d+p)/4,R=(h+E)/4,N=(x+m)/4;return S>M&&S>P?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=b/i,s=R/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=N/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-x)*(m-x)+(h-E)*(h-E)+(p-d)*(p-d));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(h-E)/y,this.z=(p-d)/y,this.w=Math.acos((c+v+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ft(this.x,e.x,n.x),this.y=ft(this.y,e.y,n.y),this.z=ft(this.z,e.z,n.z),this.w=ft(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ft(this.x,e,n),this.y=ft(this.y,e,n),this.z=ft(this.z,e,n),this.w=ft(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ft(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b4 extends aa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new jn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Lm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vs extends b4{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mx extends jn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P4 extends jn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dl{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sc.copy(i.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),oc.subVectors(this.max,xa),eo.subVectors(e.a,xa),to.subVectors(e.b,xa),no.subVectors(e.c,xa),Mr.subVectors(to,eo),wr.subVectors(no,to),ps.subVectors(eo,no);let n=[0,-Mr.z,Mr.y,0,-wr.z,wr.y,0,-ps.z,ps.y,Mr.z,0,-Mr.x,wr.z,0,-wr.x,ps.z,0,-ps.x,-Mr.y,Mr.x,0,-wr.y,wr.x,0,-ps.y,ps.x,0];return!Kd(n,eo,to,no,oc)||(n=[1,0,0,0,1,0,0,0,1],!Kd(n,eo,to,no,oc))?!1:(ac.crossVectors(Mr,wr),n=[ac.x,ac.y,ac.z],Kd(n,eo,to,no,oc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new j,new j,new j,new j,new j,new j,new j,new j],di=new j,sc=new Dl,eo=new j,to=new j,no=new j,Mr=new j,wr=new j,ps=new j,xa=new j,oc=new j,ac=new j,ms=new j;function Kd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ms.fromArray(t,s);const a=r.x*Math.abs(ms.x)+r.y*Math.abs(ms.y)+r.z*Math.abs(ms.z),l=e.dot(ms),c=n.dot(ms),d=i.dot(ms);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const I4=new Dl,Sa=new j,Jd=new j;class Nm{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):I4.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const n=Sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Jd)),this.expandByPoint(Sa.copy(e.center).sub(Jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new j,Zd=new j,lc=new j,Tr=new j,Qd=new j,cc=new j,ef=new j;class L4{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zd.copy(e).add(n).multiplyScalar(.5),lc.copy(n).sub(e).normalize(),Tr.copy(this.origin).sub(Zd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(lc),a=Tr.dot(this.direction),l=-Tr.dot(lc),c=Tr.lengthSq(),d=Math.abs(1-o*o);let h,p,v,x;if(d>0)if(h=o*l-a,p=o*a-l,x=s*d,h>=0)if(p>=-x)if(p<=x){const E=1/d;h*=E,p*=E,v=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),v=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),v=-h*h+p*(p+2*l)+c;else p<=-x?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),v=-h*h+p*(p+2*l)+c):p<=x?(h=0,p=Math.min(Math.max(-s,-l),s),v=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),v=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),v=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zd).addScaledVector(lc,p),v}intersectSphere(e,n){Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),r=Xi.dot(Xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,i,r,s){Qd.subVectors(n,e),cc.subVectors(i,e),ef.crossVectors(Qd,cc);let o=this.direction.dot(ef),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,e);const l=a*this.direction.dot(cc.crossVectors(Tr,cc));if(l<0)return null;const c=a*this.direction.dot(Qd.cross(Tr));if(c<0||l+c>o)return null;const d=-a*Tr.dot(ef);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,i,r,s,o,a,l,c,d,h,p,v,x,E,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,p,v,x,E,m)}set(e,n,i,r,s,o,a,l,c,d,h,p,v,x,E,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=v,u[7]=x,u[11]=E,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/io.setFromMatrixColumn(e,0).length(),s=1/io.setFromMatrixColumn(e,1).length(),o=1/io.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*d,v=o*h,x=a*d,E=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=v+x*c,n[5]=p-E*c,n[9]=-a*l,n[2]=E-p*c,n[6]=x+v*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*d,v=l*h,x=c*d,E=c*h;n[0]=p+E*a,n[4]=x*a-v,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=v*a-x,n[6]=E+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*d,v=l*h,x=c*d,E=c*h;n[0]=p-E*a,n[4]=-o*h,n[8]=x+v*a,n[1]=v+x*a,n[5]=o*d,n[9]=E-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*d,v=o*h,x=a*d,E=a*h;n[0]=l*d,n[4]=x*c-v,n[8]=p*c+E,n[1]=l*h,n[5]=E*c+p,n[9]=v*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,v=o*c,x=a*l,E=a*c;n[0]=l*d,n[4]=E-p*h,n[8]=x*h+v,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=v*h+x,n[10]=p-E*h}else if(e.order==="XZY"){const p=o*l,v=o*c,x=a*l,E=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=p*h+E,n[5]=o*d,n[9]=v*h-x,n[2]=x*h-v,n[6]=a*d,n[10]=E*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N4,e,D4)}lookAt(e,n,i){const r=this.elements;return $n.subVectors(e,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ar.crossVectors(i,$n),Ar.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ar.crossVectors(i,$n)),Ar.normalize(),uc.crossVectors($n,Ar),r[0]=Ar.x,r[4]=uc.x,r[8]=$n.x,r[1]=Ar.y,r[5]=uc.y,r[9]=$n.y,r[2]=Ar.z,r[6]=uc.z,r[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],p=i[9],v=i[13],x=i[2],E=i[6],m=i[10],u=i[14],y=i[3],S=i[7],M=i[11],P=i[15],b=r[0],R=r[4],N=r[8],A=r[12],w=r[1],D=r[5],Y=r[9],V=r[13],Z=r[2],se=r[6],ee=r[10],le=r[14],F=r[3],re=r[7],oe=r[11],ge=r[15];return s[0]=o*b+a*w+l*Z+c*F,s[4]=o*R+a*D+l*se+c*re,s[8]=o*N+a*Y+l*ee+c*oe,s[12]=o*A+a*V+l*le+c*ge,s[1]=d*b+h*w+p*Z+v*F,s[5]=d*R+h*D+p*se+v*re,s[9]=d*N+h*Y+p*ee+v*oe,s[13]=d*A+h*V+p*le+v*ge,s[2]=x*b+E*w+m*Z+u*F,s[6]=x*R+E*D+m*se+u*re,s[10]=x*N+E*Y+m*ee+u*oe,s[14]=x*A+E*V+m*le+u*ge,s[3]=y*b+S*w+M*Z+P*F,s[7]=y*R+S*D+M*se+P*re,s[11]=y*N+S*Y+M*ee+P*oe,s[15]=y*A+S*V+M*le+P*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],v=e[14],x=e[3],E=e[7],m=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*p+i*c*p+r*a*v-i*l*v)+E*(+n*l*v-n*c*p+s*o*p-r*o*v+r*c*d-s*l*d)+m*(+n*c*h-n*a*v-s*o*h+i*o*v+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*p+r*o*h-i*o*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],v=e[11],x=e[12],E=e[13],m=e[14],u=e[15],y=h*m*c-E*p*c+E*l*v-a*m*v-h*l*u+a*p*u,S=x*p*c-d*m*c-x*l*v+o*m*v+d*l*u-o*p*u,M=d*E*c-x*h*c+x*a*v-o*E*v-d*a*u+o*h*u,P=x*h*l-d*E*l-x*a*p+o*E*p+d*a*m-o*h*m,b=n*y+i*S+r*M+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=y*R,e[1]=(E*p*s-h*m*s-E*r*v+i*m*v+h*r*u-i*p*u)*R,e[2]=(a*m*s-E*l*s+E*r*c-i*m*c-a*r*u+i*l*u)*R,e[3]=(h*l*s-a*p*s-h*r*c+i*p*c+a*r*v-i*l*v)*R,e[4]=S*R,e[5]=(d*m*s-x*p*s+x*r*v-n*m*v-d*r*u+n*p*u)*R,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*u-n*l*u)*R,e[7]=(o*p*s-d*l*s+d*r*c-n*p*c-o*r*v+n*l*v)*R,e[8]=M*R,e[9]=(x*h*s-d*E*s-x*i*v+n*E*v+d*i*u-n*h*u)*R,e[10]=(o*E*s-x*a*s+x*i*c-n*E*c-o*i*u+n*a*u)*R,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*v-n*a*v)*R,e[12]=P*R,e[13]=(d*E*r-x*h*r+x*i*p-n*E*p-d*i*m+n*h*m)*R,e[14]=(x*a*r-o*E*r-x*i*l+n*E*l+o*i*m-n*a*m)*R,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*p+n*a*p)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,p=s*c,v=s*d,x=s*h,E=o*d,m=o*h,u=a*h,y=l*c,S=l*d,M=l*h,P=i.x,b=i.y,R=i.z;return r[0]=(1-(E+u))*P,r[1]=(v+M)*P,r[2]=(x-S)*P,r[3]=0,r[4]=(v-M)*b,r[5]=(1-(p+u))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(x+S)*R,r[9]=(m-y)*R,r[10]=(1-(p+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=io.set(r[0],r[1],r[2]).length();const o=io.set(r[4],r[5],r[6]).length(),a=io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fi.copy(this);const c=1/s,d=1/o,h=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=d,fi.elements[5]*=d,fi.elements[6]*=d,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,n.setFromRotationMatrix(fi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=sr){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let v,x;if(a===sr)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Au)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=sr){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),p=(n+e)*c,v=(i+r)*d;let x,E;if(a===sr)x=(o+s)*h,E=-2*h;else if(a===Au)x=s*h,E=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=E,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const io=new j,fi=new qt,N4=new j(0,0,0),D4=new j(1,1,1),Ar=new j,uc=new j,$n=new j,$0=new qt,Y0=new Nl;class zi{constructor(e=0,n=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],p=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $0.makeRotationFromQuaternion(e),this.setFromRotationMatrix($0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Y0.setFromEuler(this),this.setFromQuaternion(Y0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U4=0;const q0=new j,ro=new Nl,$i=new qt,dc=new j,Ea=new j,O4=new j,k4=new Nl,K0=new j(1,0,0),J0=new j(0,1,0),Z0=new j(0,0,1),Q0={type:"added"},F4={type:"removed"},so={type:"childadded",child:null},tf={type:"childremoved",child:null};class Mn extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U4++}),this.uuid=Ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new j,n=new zi,i=new Nl,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new tt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(K0,e)}rotateY(e){return this.rotateOnAxis(J0,e)}rotateZ(e){return this.rotateOnAxis(Z0,e)}translateOnAxis(e,n){return q0.copy(e).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(K0,e)}translateY(e){return this.translateOnAxis(J0,e)}translateZ(e){return this.translateOnAxis(Z0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?dc.copy(e):dc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ea,dc,this.up):$i.lookAt(dc,Ea,this.up),this.quaternion.setFromRotationMatrix($i),r&&($i.extractRotation(r.matrixWorld),ro.setFromRotationMatrix($i),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Q0),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(F4),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Q0),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,O4),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,k4,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),p=o(e.skeletons),v=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),v.length>0&&(i.animations=v),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mn.DEFAULT_UP=new j(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new j,Yi=new j,nf=new j,qi=new j,oo=new j,ao=new j,ev=new j,rf=new j,sf=new j,of=new j,af=new Yt,lf=new Yt,cf=new Yt;class yi{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),hi.subVectors(e,n),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){hi.subVectors(r,n),Yi.subVectors(i,n),nf.subVectors(e,n);const o=hi.dot(hi),a=hi.dot(Yi),l=hi.dot(nf),c=Yi.dot(Yi),d=Yi.dot(nf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,v=(c*l-a*d)*p,x=(o*d-a*l)*p;return s.set(1-v-x,x,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return af.setScalar(0),lf.setScalar(0),cf.setScalar(0),af.fromBufferAttribute(e,n),lf.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(af,s.x),o.addScaledVector(lf,s.y),o.addScaledVector(cf,s.z),o}static isFrontFacing(e,n,i,r){return hi.subVectors(i,n),Yi.subVectors(e,n),hi.cross(Yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),hi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return yi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;oo.subVectors(r,i),ao.subVectors(s,i),rf.subVectors(e,i);const l=oo.dot(rf),c=ao.dot(rf);if(l<=0&&c<=0)return n.copy(i);sf.subVectors(e,r);const d=oo.dot(sf),h=ao.dot(sf);if(d>=0&&h<=d)return n.copy(r);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(oo,o);of.subVectors(e,s);const v=oo.dot(of),x=ao.dot(of);if(x>=0&&v<=x)return n.copy(s);const E=v*c-l*x;if(E<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(ao,a);const m=d*x-v*h;if(m<=0&&h-d>=0&&v-x>=0)return ev.subVectors(s,r),a=(h-d)/(h-d+(v-x)),n.copy(r).addScaledVector(ev,a);const u=1/(m+E+p);return o=E*u,a=p*u,n.copy(i).addScaledVector(oo,o).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},fc={h:0,s:0,l:0};function uf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Mt.workingColorSpace){if(e=x4(e,1),n=ft(n,0,1),i=ft(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=uf(o,s,e+1/3),this.g=uf(o,s,e),this.b=uf(o,s,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,n=ni){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ni){const i=vx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Mt.workingToColorSpace(Sn.copy(this),e),Math.round(ft(Sn.r*255,0,255))*65536+Math.round(ft(Sn.g*255,0,255))*256+Math.round(ft(Sn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.workingToColorSpace(Sn.copy(this),n);const i=Sn.r,r=Sn.g,s=Sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Mt.workingColorSpace){return Mt.workingToColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ni){Mt.workingToColorSpace(Sn.copy(this),e);const n=Sn.r,i=Sn.g,r=Sn.b;return e!==ni?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+n,Cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Cr),e.getHSL(fc);const i=jd(Cr.h,fc.h,n),r=jd(Cr.s,fc.s,n),s=jd(Cr.l,fc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Tt;Tt.NAMES=vx;let B4=0;class Ul extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B4++}),this.uuid=Ll(),this.name="",this.type="Material",this.blending=ko,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Ph,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ko&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Ph&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _x extends Ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new j,hc=new At;let z4=0;class Fi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z4++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=H0,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hc.fromBufferAttribute(this,n),hc.applyMatrix3(e),this.setXY(n,hc.x,hc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ya(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ya(n,this.array)),n}setX(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ya(n,this.array)),n}setY(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ya(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ya(n,this.array)),n}setW(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array),r=kn(r,this.array),s=kn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==H0&&(e.usage=this.usage),e}}class yx extends Fi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xx extends Fi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wn extends Fi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let H4=0;const ti=new qt,df=new Mn,lo=new j,Yn=new Dl,Ma=new Dl,dn=new j;class Hi extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H4++}),this.uuid=Ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(px(e)?xx:yx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,i){return ti.makeTranslation(e,n,i),this.applyMatrix4(ti),this}scale(e,n,i){return ti.makeScale(e,n,i),this.applyMatrix4(ti),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ma.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Yn.min,Ma.min),Yn.expandByPoint(dn),dn.addVectors(Yn.max,Ma.max),Yn.expandByPoint(dn)):(Yn.expandByPoint(Ma.min),Yn.expandByPoint(Ma.max))}Yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)dn.fromBufferAttribute(a,c),l&&(lo.fromBufferAttribute(e,c),dn.add(lo)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new j,l[N]=new j;const c=new j,d=new j,h=new j,p=new At,v=new At,x=new At,E=new j,m=new j;function u(N,A,w){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,w),p.fromBufferAttribute(s,N),v.fromBufferAttribute(s,A),x.fromBufferAttribute(s,w),d.sub(c),h.sub(c),v.sub(p),x.sub(p);const D=1/(v.x*x.y-x.x*v.y);isFinite(D)&&(E.copy(d).multiplyScalar(x.y).addScaledVector(h,-v.y).multiplyScalar(D),m.copy(h).multiplyScalar(v.x).addScaledVector(d,-x.x).multiplyScalar(D),a[N].add(E),a[A].add(E),a[w].add(E),l[N].add(m),l[A].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,A=y.length;N<A;++N){const w=y[N],D=w.start,Y=w.count;for(let V=D,Z=D+Y;V<Z;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const S=new j,M=new j,P=new j,b=new j;function R(N){P.fromBufferAttribute(r,N),b.copy(P);const A=a[N];S.copy(A),S.sub(P.multiplyScalar(P.dot(A))).normalize(),M.crossVectors(b,A);const D=M.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,D)}for(let N=0,A=y.length;N<A;++N){const w=y[N],D=w.start,Y=w.count;for(let V=D,Z=D+Y;V<Z;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,v=i.count;p<v;p++)i.setXYZ(p,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,d=new j,h=new j;if(e)for(let p=0,v=e.count;p<v;p+=3){const x=e.getX(p+0),E=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,v=n.count;p<v;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)dn.fromBufferAttribute(e,n),dn.normalize(),e.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,p=new c.constructor(l.length*d);let v=0,x=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?v=l[E]*a.data.stride+a.offset:v=l[E]*d;for(let u=0;u<d;u++)p[x++]=c[v++]}return new Fi(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const p=c[d],v=e(p,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const v=c[h];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let p=0,v=h.length;p<v;p++)d.push(h[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tv=new qt,gs=new L4,pc=new Nm,nv=new j,mc=new j,gc=new j,vc=new j,ff=new j,_c=new j,iv=new j,yc=new j;class Bn extends Mn{constructor(e=new Hi,n=new _x){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_c.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(ff.fromBufferAttribute(h,e),o?_c.addScaledVector(ff,d):_c.addScaledVector(ff.sub(n),d))}n.add(_c)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(s),gs.copy(e.ray).recast(e.near),!(pc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(pc,nv)===null||gs.origin.distanceToSquared(nv)>(e.far-e.near)**2))&&(tv.copy(s).invert(),gs.copy(e.ray).applyMatrix4(tv),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,E=p.length;x<E;x++){const m=p[x],u=o[m.materialIndex],y=Math.max(m.start,v.start),S=Math.min(a.count,Math.min(m.start+m.count,v.start+v.count));for(let M=y,P=S;M<P;M+=3){const b=a.getX(M),R=a.getX(M+1),N=a.getX(M+2);r=xc(this,u,e,i,c,d,h,b,R,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,v.start),E=Math.min(a.count,v.start+v.count);for(let m=x,u=E;m<u;m+=3){const y=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);r=xc(this,o,e,i,c,d,h,y,S,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,E=p.length;x<E;x++){const m=p[x],u=o[m.materialIndex],y=Math.max(m.start,v.start),S=Math.min(l.count,Math.min(m.start+m.count,v.start+v.count));for(let M=y,P=S;M<P;M+=3){const b=M,R=M+1,N=M+2;r=xc(this,u,e,i,c,d,h,b,R,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,v.start),E=Math.min(l.count,v.start+v.count);for(let m=x,u=E;m<u;m+=3){const y=m,S=m+1,M=m+2;r=xc(this,o,e,i,c,d,h,y,S,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function V4(t,e,n,i,r,s,o,a){let l;if(e.side===Wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===is,a),l===null)return null;yc.copy(a),yc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(yc);return c<n.near||c>n.far?null:{distance:c,point:yc.clone(),object:t}}function xc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,mc),t.getVertexPosition(l,gc),t.getVertexPosition(c,vc);const d=V4(t,e,n,i,mc,gc,vc,iv);if(d){const h=new j;yi.getBarycoord(iv,mc,gc,vc,h),r&&(d.uv=yi.getInterpolatedAttribute(r,a,l,c,h,new At)),s&&(d.uv1=yi.getInterpolatedAttribute(s,a,l,c,h,new At)),o&&(d.normal=yi.getInterpolatedAttribute(o,a,l,c,h,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new j,materialIndex:0};yi.getNormal(mc,gc,vc,p.normal),d.face=p,d.barycoord=h}return d}class Ol extends Hi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let p=0,v=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(h,2));function x(E,m,u,y,S,M,P,b,R,N,A){const w=M/R,D=P/N,Y=M/2,V=P/2,Z=b/2,se=R+1,ee=N+1;let le=0,F=0;const re=new j;for(let oe=0;oe<ee;oe++){const ge=oe*D-V;for(let Oe=0;Oe<se;Oe++){const ht=Oe*w-Y;re[E]=ht*y,re[m]=ge*S,re[u]=Z,c.push(re.x,re.y,re.z),re[E]=0,re[m]=0,re[u]=b>0?1:-1,d.push(re.x,re.y,re.z),h.push(Oe/R),h.push(1-oe/N),le+=1}}for(let oe=0;oe<N;oe++)for(let ge=0;ge<R;ge++){const Oe=p+ge+se*oe,ht=p+ge+se*(oe+1),Q=p+(ge+1)+se*(oe+1),me=p+(ge+1)+se*oe;l.push(Oe,ht,me),l.push(ht,Q,me),F+=6}a.addGroup(v,F,A),v+=F,p+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Pn(t){const e={};for(let n=0;n<t.length;n++){const i=ea(t[n]);for(const r in i)e[r]=i[r]}return e}function G4(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Sx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const W4={clone:ea,merge:Pn};var j4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j4,this.fragmentShader=X4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=G4(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ex extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=sr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new j,rv=new At,sv=new At;class vi extends Ex{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pp*2*Math.atan(Math.tan(Wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,n){return this.getViewBounds(e,rv,sv),n.subVectors(sv,rv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const co=-90,uo=1;class $4 extends Mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vi(co,uo,e,n);r.layers=this.layers,this.add(r);const s=new vi(co,uo,e,n);s.layers=this.layers,this.add(s);const o=new vi(co,uo,e,n);o.layers=this.layers,this.add(o);const a=new vi(co,uo,e,n);a.layers=this.layers,this.add(a);const l=new vi(co,uo,e,n);l.layers=this.layers,this.add(l);const c=new vi(co,uo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===sr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,p,v),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Mx extends jn{constructor(e=[],n=Jo,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y4 extends Vs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ol(5,5,5),s=new rs({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wn,blending:Qr});s.uniforms.tEquirect.value=n;const o=new Bn(r,s),a=n.minFilter;return n.minFilter===Is&&(n.minFilter=Ni),new $4(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Pa extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q4={type:"move"};class hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),u=this._getHandJoint(c,E);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),v=.02,x=.005;c.inputState.pinching&&p>v+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=v-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q4)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class K4 extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const pf=new j,J4=new j,Z4=new tt;class Ms{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pf.subVectors(i,n).cross(J4.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Z4.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Nm,Sc=new j;class Dm{constructor(e=new Ms,n=new Ms,i=new Ms,r=new Ms,s=new Ms,o=new Ms){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=sr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],p=r[7],v=r[8],x=r[9],E=r[10],m=r[11],u=r[12],y=r[13],S=r[14],M=r[15];if(i[0].setComponents(l-s,p-c,m-v,M-u).normalize(),i[1].setComponents(l+s,p+c,m+v,M+u).normalize(),i[2].setComponents(l+o,p+d,m+x,M+y).normalize(),i[3].setComponents(l-o,p-d,m-x,M-y).normalize(),i[4].setComponents(l-a,p-h,m-E,M-S).normalize(),n===sr)i[5].setComponents(l+a,p+h,m+E,M+S).normalize();else if(n===Au)i[5].setComponents(a,h,E,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sc.x=r.normal.x>0?e.max.x:e.min.x,Sc.y=r.normal.y>0?e.max.y:e.min.y,Sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wx extends jn{constructor(e,n,i=Hs,r,s,o,a=wi,l=wi,c,d=gl,h=1){if(d!==gl&&d!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:n,depth:h};super(p,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class id extends Hi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],p=[],v=[];let x=0;const E=[],m=i/2;let u=0;y(),o===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(p,3)),this.setAttribute("uv",new wn(v,2));function y(){const M=new j,P=new j;let b=0;const R=(n-e)/i;for(let N=0;N<=s;N++){const A=[],w=N/s,D=w*(n-e)+e;for(let Y=0;Y<=r;Y++){const V=Y/r,Z=V*l+a,se=Math.sin(Z),ee=Math.cos(Z);P.x=D*se,P.y=-w*i+m,P.z=D*ee,h.push(P.x,P.y,P.z),M.set(se,R,ee).normalize(),p.push(M.x,M.y,M.z),v.push(V,1-w),A.push(x++)}E.push(A)}for(let N=0;N<r;N++)for(let A=0;A<s;A++){const w=E[A][N],D=E[A+1][N],Y=E[A+1][N+1],V=E[A][N+1];(e>0||A!==0)&&(d.push(w,D,V),b+=3),(n>0||A!==s-1)&&(d.push(D,Y,V),b+=3)}c.addGroup(u,b,0),u+=b}function S(M){const P=x,b=new At,R=new j;let N=0;const A=M===!0?e:n,w=M===!0?1:-1;for(let Y=1;Y<=r;Y++)h.push(0,m*w,0),p.push(0,w,0),v.push(.5,.5),x++;const D=x;for(let Y=0;Y<=r;Y++){const Z=Y/r*l+a,se=Math.cos(Z),ee=Math.sin(Z);R.x=A*ee,R.y=m*w,R.z=A*se,h.push(R.x,R.y,R.z),p.push(0,w,0),b.x=se*.5+.5,b.y=ee*.5*w+.5,v.push(b.x,b.y),x++}for(let Y=0;Y<r;Y++){const V=P+Y,Z=D+Y;M===!0?d.push(Z,Z+1,V):d.push(Z+1,Z,V),N+=3}c.addGroup(u,N,M===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new id(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Um extends id{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Um(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rd extends Hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,p=n/l,v=[],x=[],E=[],m=[];for(let u=0;u<d;u++){const y=u*p-o;for(let S=0;S<c;S++){const M=S*h-s;x.push(M,-y,0),E.push(0,0,1),m.push(S/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){const S=y+c*u,M=y+c*(u+1),P=y+1+c*(u+1),b=y+1+c*u;v.push(S,M,b),v.push(M,P,b)}this.setIndex(v),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(E,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rd(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ru extends Hi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new j,p=new j,v=[],x=[],E=[],m=[];for(let u=0;u<=i;u++){const y=[],S=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const b=P/n;h.x=-e*Math.cos(r+b*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(r+b*s)*Math.sin(o+S*a),x.push(h.x,h.y,h.z),p.copy(h).normalize(),E.push(p.x,p.y,p.z),m.push(b+M,1-S),y.push(c++)}d.push(y)}for(let u=0;u<i;u++)for(let y=0;y<n;y++){const S=d[u][y+1],M=d[u][y],P=d[u+1][y],b=d[u+1][y+1];(u!==0||o>0)&&v.push(S,M,b),(u!==i-1||l<Math.PI)&&v.push(M,P,b)}this.setIndex(v),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(E,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Om extends Hi{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new j,h=new j,p=new j;for(let v=0;v<=i;v++)for(let x=0;x<=r;x++){const E=x/r*s,m=v/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(E),h.y=(e+n*Math.cos(m))*Math.sin(E),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(E),d.y=e*Math.sin(E),p.subVectors(h,d).normalize(),l.push(p.x,p.y,p.z),c.push(x/r),c.push(v/i)}for(let v=1;v<=i;v++)for(let x=1;x<=r;x++){const E=(r+1)*v+x-1,m=(r+1)*(v-1)+x-1,u=(r+1)*(v-1)+x,y=(r+1)*v+x;o.push(E,m,y),o.push(m,u,y)}this.setIndex(o),this.setAttribute("position",new wn(a,3)),this.setAttribute("normal",new wn(l,3)),this.setAttribute("uv",new wn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Om(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ov extends Ul{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fx,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Q4 extends Ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u4,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eC extends Ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tx extends Mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const mf=new qt,av=new j,lv=new j;class tC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dm,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;av.setFromMatrixPosition(e.matrixWorld),n.position.copy(av),lv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(lv),n.updateMatrixWorld(),mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class km extends Ex{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class nC extends tC{constructor(){super(new km(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cv extends Tx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new nC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iC extends Tx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rC extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function uv(t,e,n,i){const r=sC(i);switch(n){case ax:return t*e;case cx:return t*e/r.components*r.byteLength;case bm:return t*e/r.components*r.byteLength;case ux:return t*e*2/r.components*r.byteLength;case Pm:return t*e*2/r.components*r.byteLength;case lx:return t*e*3/r.components*r.byteLength;case Si:return t*e*4/r.components*r.byteLength;case Im:return t*e*4/r.components*r.byteLength;case Hc:case Vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gh:case jh:return Math.max(t,16)*Math.max(e,8)/4;case Vh:case Wh:return Math.max(t,8)*Math.max(e,8)/2;case Xh:case $h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ep:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case tp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case np:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ip:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ap:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case jc:case cp:case up:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dx:case dp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case fp:case hp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sC(t){switch(t){case Bi:case rx:return{byteLength:1,components:1};case pl:case sx:case Il:return{byteLength:2,components:1};case Cm:case Rm:return{byteLength:2,components:4};case Hs:case Am:case rr:return{byteLength:4,components:1};case ox:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ax(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oC(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),a.onUploadCallback();let v;if(c instanceof Float32Array)v=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?v=t.HALF_FLOAT:v=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=t.SHORT;else if(c instanceof Uint32Array)v=t.UNSIGNED_INT;else if(c instanceof Int32Array)v=t.INT;else if(c instanceof Int8Array)v=t.BYTE;else if(c instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((v,x)=>v.start-x.start);let p=0;for(let v=1;v<h.length;v++){const x=h[p],E=h[v];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++p,h[p]=E)}h.length=p+1;for(let v=0,x=h.length;v<x;v++){const E=h[v];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var aC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lC=`#ifdef USE_ALPHAHASH
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
#endif`,cC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hC=`#ifdef USE_AOMAP
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
#endif`,pC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mC=`#ifdef USE_BATCHING
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
#endif`,gC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_C=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xC=`#ifdef USE_IRIDESCENCE
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
#endif`,SC=`#ifdef USE_BUMPMAP
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
#endif`,EC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PC=`#define PI 3.141592653589793
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
} // validated`,IC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LC=`vec3 transformedNormal = objectNormal;
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
#endif`,NC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kC="gl_FragColor = linearToOutputTexel( gl_FragColor );",FC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BC=`#ifdef USE_ENVMAP
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
#endif`,zC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HC=`#ifdef USE_ENVMAP
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
#endif`,VC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GC=`#ifdef USE_ENVMAP
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
#endif`,WC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$C=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YC=`#ifdef USE_GRADIENTMAP
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
}`,qC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZC=`uniform bool receiveShadow;
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
#endif`,QC=`#ifdef USE_ENVMAP
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
#endif`,eR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rR=`PhysicalMaterial material;
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
#endif`,sR=`struct PhysicalMaterial {
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
}`,oR=`
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
#endif`,aR=`#if defined( RE_IndirectDiffuse )
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
#endif`,lR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gR=`#if defined( USE_POINTS_UV )
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
#endif`,vR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_R=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ER=`#ifdef USE_MORPHTARGETS
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
#endif`,MR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bR=`#ifdef USE_NORMALMAP
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
#endif`,PR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jR=`float getShadowMask() {
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
}`,XR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$R=`#ifdef USE_SKINNING
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
#endif`,YR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qR=`#ifdef USE_SKINNING
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
#endif`,KR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`#include <common>
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
}`,hb=`#if DEPTH_PACKING == 3200
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
}`,pb=`#define DISTANCE
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
}`,mb=`#define DISTANCE
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`uniform float scale;
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
}`,yb=`uniform vec3 diffuse;
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
}`,xb=`#include <common>
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Eb=`#define LAMBERT
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
}`,Mb=`#define LAMBERT
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
}`,wb=`#define MATCAP
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
}`,Tb=`#define MATCAP
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
}`,Ab=`#define NORMAL
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
}`,Cb=`#define NORMAL
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
}`,Rb=`#define PHONG
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
}`,bb=`#define PHONG
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
}`,Pb=`#define STANDARD
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
}`,Ib=`#define STANDARD
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
}`,Lb=`#define TOON
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
}`,Nb=`#define TOON
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
}`,Db=`uniform float size;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,kb=`uniform vec3 color;
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
}`,Fb=`uniform float rotation;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:aC,alphahash_pars_fragment:lC,alphamap_fragment:cC,alphamap_pars_fragment:uC,alphatest_fragment:dC,alphatest_pars_fragment:fC,aomap_fragment:hC,aomap_pars_fragment:pC,batching_pars_vertex:mC,batching_vertex:gC,begin_vertex:vC,beginnormal_vertex:_C,bsdfs:yC,iridescence_fragment:xC,bumpmap_pars_fragment:SC,clipping_planes_fragment:EC,clipping_planes_pars_fragment:MC,clipping_planes_pars_vertex:wC,clipping_planes_vertex:TC,color_fragment:AC,color_pars_fragment:CC,color_pars_vertex:RC,color_vertex:bC,common:PC,cube_uv_reflection_fragment:IC,defaultnormal_vertex:LC,displacementmap_pars_vertex:NC,displacementmap_vertex:DC,emissivemap_fragment:UC,emissivemap_pars_fragment:OC,colorspace_fragment:kC,colorspace_pars_fragment:FC,envmap_fragment:BC,envmap_common_pars_fragment:zC,envmap_pars_fragment:HC,envmap_pars_vertex:VC,envmap_physical_pars_fragment:QC,envmap_vertex:GC,fog_vertex:WC,fog_pars_vertex:jC,fog_fragment:XC,fog_pars_fragment:$C,gradientmap_pars_fragment:YC,lightmap_pars_fragment:qC,lights_lambert_fragment:KC,lights_lambert_pars_fragment:JC,lights_pars_begin:ZC,lights_toon_fragment:eR,lights_toon_pars_fragment:tR,lights_phong_fragment:nR,lights_phong_pars_fragment:iR,lights_physical_fragment:rR,lights_physical_pars_fragment:sR,lights_fragment_begin:oR,lights_fragment_maps:aR,lights_fragment_end:lR,logdepthbuf_fragment:cR,logdepthbuf_pars_fragment:uR,logdepthbuf_pars_vertex:dR,logdepthbuf_vertex:fR,map_fragment:hR,map_pars_fragment:pR,map_particle_fragment:mR,map_particle_pars_fragment:gR,metalnessmap_fragment:vR,metalnessmap_pars_fragment:_R,morphinstance_vertex:yR,morphcolor_vertex:xR,morphnormal_vertex:SR,morphtarget_pars_vertex:ER,morphtarget_vertex:MR,normal_fragment_begin:wR,normal_fragment_maps:TR,normal_pars_fragment:AR,normal_pars_vertex:CR,normal_vertex:RR,normalmap_pars_fragment:bR,clearcoat_normal_fragment_begin:PR,clearcoat_normal_fragment_maps:IR,clearcoat_pars_fragment:LR,iridescence_pars_fragment:NR,opaque_fragment:DR,packing:UR,premultiplied_alpha_fragment:OR,project_vertex:kR,dithering_fragment:FR,dithering_pars_fragment:BR,roughnessmap_fragment:zR,roughnessmap_pars_fragment:HR,shadowmap_pars_fragment:VR,shadowmap_pars_vertex:GR,shadowmap_vertex:WR,shadowmask_pars_fragment:jR,skinbase_vertex:XR,skinning_pars_vertex:$R,skinning_vertex:YR,skinnormal_vertex:qR,specularmap_fragment:KR,specularmap_pars_fragment:JR,tonemapping_fragment:ZR,tonemapping_pars_fragment:QR,transmission_fragment:eb,transmission_pars_fragment:tb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:rb,worldpos_vertex:sb,background_vert:ob,background_frag:ab,backgroundCube_vert:lb,backgroundCube_frag:cb,cube_vert:ub,cube_frag:db,depth_vert:fb,depth_frag:hb,distanceRGBA_vert:pb,distanceRGBA_frag:mb,equirect_vert:gb,equirect_frag:vb,linedashed_vert:_b,linedashed_frag:yb,meshbasic_vert:xb,meshbasic_frag:Sb,meshlambert_vert:Eb,meshlambert_frag:Mb,meshmatcap_vert:wb,meshmatcap_frag:Tb,meshnormal_vert:Ab,meshnormal_frag:Cb,meshphong_vert:Rb,meshphong_frag:bb,meshphysical_vert:Pb,meshphysical_frag:Ib,meshtoon_vert:Lb,meshtoon_frag:Nb,points_vert:Db,points_frag:Ub,shadow_vert:Ob,shadow_frag:kb,sprite_vert:Fb,sprite_frag:Bb},Ee={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Ii={basic:{uniforms:Pn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Pn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Tt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Pn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Pn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Pn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Tt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Pn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Pn([Ee.points,Ee.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Pn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Pn([Ee.common,Ee.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Pn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Pn([Ee.sprite,Ee.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Pn([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Pn([Ee.lights,Ee.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ii.physical={uniforms:Pn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ec={r:0,b:0,g:0},_s=new zi,zb=new qt;function Hb(t,e,n,i,r,s,o){const a=new Tt(0);let l=s===!0?0:1,c,d,h=null,p=0,v=null;function x(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?n:e).get(M)),M}function E(S){let M=!1;const P=x(S);P===null?u(a,l):P&&P.isColor&&(u(P,1),M=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,M){const P=x(M);P&&(P.isCubeTexture||P.mapping===nd)?(d===void 0&&(d=new Bn(new Ol(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:ea(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),_s.copy(M.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(zb.makeRotationFromEuler(_s)),d.material.toneMapped=Mt.getTransfer(P.colorSpace)!==Lt,(h!==P||p!==P.version||v!==t.toneMapping)&&(d.material.needsUpdate=!0,h=P,p=P.version,v=t.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Bn(new rd(2,2),new rs({name:"BackgroundMaterial",uniforms:ea(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||p!==P.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,h=P,p=P.version,v=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,M){S.getRGB(Ec,Sx(t)),i.buffers.color.setClear(Ec.r,Ec.g,Ec.b,M,o)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(a,l)},render:E,addToRenderList:m,dispose:y}}function Vb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(w,D,Y,V,Z){let se=!1;const ee=h(V,Y,D);s!==ee&&(s=ee,c(s.object)),se=v(w,V,Y,Z),se&&x(w,V,Y,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,M(w,D,Y,V),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function d(w){return t.deleteVertexArray(w)}function h(w,D,Y){const V=Y.wireframe===!0;let Z=i[w.id];Z===void 0&&(Z={},i[w.id]=Z);let se=Z[D.id];se===void 0&&(se={},Z[D.id]=se);let ee=se[V];return ee===void 0&&(ee=p(l()),se[V]=ee),ee}function p(w){const D=[],Y=[],V=[];for(let Z=0;Z<n;Z++)D[Z]=0,Y[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Y,attributeDivisors:V,object:w,attributes:{},index:null}}function v(w,D,Y,V){const Z=s.attributes,se=D.attributes;let ee=0;const le=Y.getAttributes();for(const F in le)if(le[F].location>=0){const oe=Z[F];let ge=se[F];if(ge===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),oe===void 0||oe.attribute!==ge||ge&&oe.data!==ge.data)return!0;ee++}return s.attributesNum!==ee||s.index!==V}function x(w,D,Y,V){const Z={},se=D.attributes;let ee=0;const le=Y.getAttributes();for(const F in le)if(le[F].location>=0){let oe=se[F];oe===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor));const ge={};ge.attribute=oe,oe&&oe.data&&(ge.data=oe.data),Z[F]=ge,ee++}s.attributes=Z,s.attributesNum=ee,s.index=V}function E(){const w=s.newAttributes;for(let D=0,Y=w.length;D<Y;D++)w[D]=0}function m(w){u(w,0)}function u(w,D){const Y=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;Y[w]=1,V[w]===0&&(t.enableVertexAttribArray(w),V[w]=1),Z[w]!==D&&(t.vertexAttribDivisor(w,D),Z[w]=D)}function y(){const w=s.newAttributes,D=s.enabledAttributes;for(let Y=0,V=D.length;Y<V;Y++)D[Y]!==w[Y]&&(t.disableVertexAttribArray(Y),D[Y]=0)}function S(w,D,Y,V,Z,se,ee){ee===!0?t.vertexAttribIPointer(w,D,Y,Z,se):t.vertexAttribPointer(w,D,Y,V,Z,se)}function M(w,D,Y,V){E();const Z=V.attributes,se=Y.getAttributes(),ee=D.defaultAttributeValues;for(const le in se){const F=se[le];if(F.location>=0){let re=Z[le];if(re===void 0&&(le==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),le==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),re!==void 0){const oe=re.normalized,ge=re.itemSize,Oe=e.get(re);if(Oe===void 0)continue;const ht=Oe.buffer,Q=Oe.type,me=Oe.bytesPerElement,Pe=Q===t.INT||Q===t.UNSIGNED_INT||re.gpuType===Am;if(re.isInterleavedBufferAttribute){const _e=re.data,Fe=_e.stride,Qe=re.offset;if(_e.isInstancedInterleavedBuffer){for(let Be=0;Be<F.locationSize;Be++)u(F.location+Be,_e.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Be=0;Be<F.locationSize;Be++)m(F.location+Be);t.bindBuffer(t.ARRAY_BUFFER,ht);for(let Be=0;Be<F.locationSize;Be++)S(F.location+Be,ge/F.locationSize,Q,oe,Fe*me,(Qe+ge/F.locationSize*Be)*me,Pe)}else{if(re.isInstancedBufferAttribute){for(let _e=0;_e<F.locationSize;_e++)u(F.location+_e,re.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let _e=0;_e<F.locationSize;_e++)m(F.location+_e);t.bindBuffer(t.ARRAY_BUFFER,ht);for(let _e=0;_e<F.locationSize;_e++)S(F.location+_e,ge/F.locationSize,Q,oe,ge*me,ge/F.locationSize*_e*me,Pe)}}else if(ee!==void 0){const oe=ee[le];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(F.location,oe);break;case 3:t.vertexAttrib3fv(F.location,oe);break;case 4:t.vertexAttrib4fv(F.location,oe);break;default:t.vertexAttrib1fv(F.location,oe)}}}}y()}function P(){N();for(const w in i){const D=i[w];for(const Y in D){const V=D[Y];for(const Z in V)d(V[Z].object),delete V[Z];delete D[Y]}delete i[w]}}function b(w){if(i[w.id]===void 0)return;const D=i[w.id];for(const Y in D){const V=D[Y];for(const Z in V)d(V[Z].object),delete V[Z];delete D[Y]}delete i[w.id]}function R(w){for(const D in i){const Y=i[D];if(Y[w.id]===void 0)continue;const V=Y[w.id];for(const Z in V)d(V[Z].object),delete V[Z];delete Y[w.id]}}function N(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:m,disableUnusedAttributes:y}}function Gb(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];n.update(v,i,1)}function l(c,d,h,p){if(h===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<c.length;x++)o(c[x],d[x],p[x]);else{v.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,h);let x=0;for(let E=0;E<h;E++)x+=d[E]*p[E];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Si&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===Il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Bi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==rr&&!N)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:v,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:P,maxSamples:b}}function jb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ms,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const v=h.length!==0||p||i!==0||r;return r=p,i=h.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=d(h,p,0)},this.setState=function(h,p,v){const x=h.clippingPlanes,E=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!m)s?d(null):c();else{const y=s?0:i,S=y*4;let M=u.clippingState||null;l.value=M,M=d(x,p,S,v);for(let P=0;P!==S;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,p,v,x){const E=h!==null?h.length:0;let m=null;if(E!==0){if(m=l.value,x!==!0||m===null){const u=v+E*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,M=v;S!==E;++S,M+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function Xb(t){let e=new WeakMap;function n(o,a){return a===Fh?o.mapping=Jo:a===Bh&&(o.mapping=Zo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fh||a===Bh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Y4(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ao=4,dv=[.125,.215,.35,.446,.526,.582],As=20,gf=new km,fv=new Tt;let vf=null,_f=0,yf=0,xf=!1;const ws=(1+Math.sqrt(5))/2,fo=1/ws,hv=[new j(-ws,fo,0),new j(ws,fo,0),new j(-fo,0,ws),new j(fo,0,ws),new j(0,ws,-fo),new j(0,ws,fo),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],$b=new j;class pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=$b}=s;vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,_f,yf),this._renderer.xr.enabled=xf,e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jo||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Il,format:Si,colorSpace:Qo,depthBuffer:!1},r=mv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yb(s)),this._blurMaterial=qb(s,e,n)}return r}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,gf)}_sceneToCubeUV(e,n,i,r,s){const l=new vi(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,v=h.toneMapping;h.getClearColor(fv),h.toneMapping=es,h.autoClear=!1;const x=new _x({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),E=new Bn(new Ol,x);let m=!1;const u=e.background;u?u.isColor&&(x.color.copy(u),e.background=null,m=!0):(x.color.copy(fv),m=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[y]));const M=this._cubeSize;Mc(r,S*M,y>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(E,l),h.render(e,l)}E.geometry.dispose(),E.material.dispose(),h.toneMapping=v,h.autoClear=p,e.background=u}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jo||e.mapping===Zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Mc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hv[(r-s-1)%hv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Bn(this._lodPlanes[r],c),p=c.uniforms,v=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*As-1),E=s/x,m=isFinite(s)?1+Math.floor(d*E):As;m>As&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);const u=[];let y=0;for(let R=0;R<As;++R){const N=R/E,A=Math.exp(-N*N/2);u.push(A),R===0?y+=A:R<m&&(y+=2*A)}for(let R=0;R<u.length;R++)u[R]=u[R]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=x,p.mipInt.value=S-i;const M=this._sizeLods[r],P=3*M*(r>S-Ao?r-S+Ao:0),b=4*(this._cubeSize-M);Mc(n,P,b,3*M,2*M),l.setRenderTarget(n),l.render(h,gf)}}function Yb(t){const e=[],n=[],i=[];let r=t;const s=t-Ao+1+dv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ao?l=dv[o-t+Ao-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,x=6,E=3,m=2,u=1,y=new Float32Array(E*x*v),S=new Float32Array(m*x*v),M=new Float32Array(u*x*v);for(let b=0;b<v;b++){const R=b%3*2/3-1,N=b>2?0:-1,A=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];y.set(A,E*x*b),S.set(p,m*x*b);const w=[b,b,b,b,b,b];M.set(w,u*x*b)}const P=new Hi;P.setAttribute("position",new Fi(y,E)),P.setAttribute("uv",new Fi(S,m)),P.setAttribute("faceIndex",new Fi(M,u)),e.push(P),r>Ao&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function mv(t,e,n){const i=new Vs(t,e,n);return i.texture.mapping=nd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qb(t,e,n){const i=new Float32Array(As),r=new j(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fm(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function gv(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fm(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function vv(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Fm(){return`

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
	`}function Kb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fh||l===Bh,d=l===Jo||l===Zo;if(c||d){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new pv(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const v=a.image;return c&&v&&v.height>0||d&&v&&r(v)?(n===null&&(n=new pv(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Jb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zb(t,e,n,i){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete r[p.id];const v=s.get(p);v&&(e.remove(v),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(h){const p=h.attributes;for(const v in p)e.update(p[v],t.ARRAY_BUFFER)}function c(h){const p=[],v=h.index,x=h.attributes.position;let E=0;if(v!==null){const y=v.array;E=v.version;for(let S=0,M=y.length;S<M;S+=3){const P=y[S+0],b=y[S+1],R=y[S+2];p.push(P,b,b,R,R,P)}}else if(x!==void 0){const y=x.array;E=x.version;for(let S=0,M=y.length/3-1;S<M;S+=3){const P=S+0,b=S+1,R=S+2;p.push(P,b,b,R,R,P)}}else return;const m=new(px(p)?xx:yx)(p,1);m.version=E;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const p=s.get(h);if(p){const v=h.index;v!==null&&p.version<v.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Qb(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,v){t.drawElements(i,v,s,p*o),n.update(v,i,1)}function c(p,v,x){x!==0&&(t.drawElementsInstanced(i,v,s,p*o,x),n.update(v,i,x))}function d(p,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,s,p,0,x);let m=0;for(let u=0;u<x;u++)m+=v[u];n.update(m,i,1)}function h(p,v,x,E){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/o,v[u],E[u]);else{m.multiDrawElementsInstancedWEBGL(i,v,0,s,p,0,E,0,x);let u=0;for(let y=0;y<x;y++)u+=v[y]*E[y];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function eP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tP(t,e,n){const i=new WeakMap,r=new Yt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==h){let w=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var v=w;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),E===!0&&(M=2),m===!0&&(M=3);let P=a.attributes.position.count*M,b=1;P>e.maxTextureSize&&(b=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*b*4*h),N=new mx(R,P,b,h);N.type=rr,N.needsUpdate=!0;const A=M*4;for(let D=0;D<h;D++){const Y=u[D],V=y[D],Z=S[D],se=P*b*4*D;for(let ee=0;ee<Y.count;ee++){const le=ee*A;x===!0&&(r.fromBufferAttribute(Y,ee),R[se+le+0]=r.x,R[se+le+1]=r.y,R[se+le+2]=r.z,R[se+le+3]=0),E===!0&&(r.fromBufferAttribute(V,ee),R[se+le+4]=r.x,R[se+le+5]=r.y,R[se+le+6]=r.z,R[se+le+7]=0),m===!0&&(r.fromBufferAttribute(Z,ee),R[se+le+8]=r.x,R[se+le+9]=r.y,R[se+le+10]=r.z,R[se+le+11]=Z.itemSize===4?r.w:1)}}p={count:h,texture:N,size:new At(P,b)},i.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const E=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function nP(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Cx=new jn,_v=new wx(1,1),Rx=new mx,bx=new P4,Px=new Mx,yv=[],xv=[],Sv=new Float32Array(16),Ev=new Float32Array(9),Mv=new Float32Array(4);function la(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=yv[r];if(s===void 0&&(s=new Float32Array(r),yv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function on(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function an(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sd(t,e){let n=xv[e];n===void 0&&(n=new Int32Array(e),xv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2fv(this.addr,e),an(n,e)}}function sP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(on(n,e))return;t.uniform3fv(this.addr,e),an(n,e)}}function oP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4fv(this.addr,e),an(n,e)}}function aP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),an(n,e)}else{if(on(n,i))return;Mv.set(i),t.uniformMatrix2fv(this.addr,!1,Mv),an(n,i)}}function lP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),an(n,e)}else{if(on(n,i))return;Ev.set(i),t.uniformMatrix3fv(this.addr,!1,Ev),an(n,i)}}function cP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),an(n,e)}else{if(on(n,i))return;Sv.set(i),t.uniformMatrix4fv(this.addr,!1,Sv),an(n,i)}}function uP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2iv(this.addr,e),an(n,e)}}function fP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;t.uniform3iv(this.addr,e),an(n,e)}}function hP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4iv(this.addr,e),an(n,e)}}function pP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2uiv(this.addr,e),an(n,e)}}function gP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;t.uniform3uiv(this.addr,e),an(n,e)}}function vP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4uiv(this.addr,e),an(n,e)}}function _P(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(_v.compareFunction=hx,s=_v):s=Cx,n.setTexture2D(e||s,r)}function yP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||bx,r)}function xP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Px,r)}function SP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rx,r)}function EP(t){switch(t){case 5126:return iP;case 35664:return rP;case 35665:return sP;case 35666:return oP;case 35674:return aP;case 35675:return lP;case 35676:return cP;case 5124:case 35670:return uP;case 35667:case 35671:return dP;case 35668:case 35672:return fP;case 35669:case 35673:return hP;case 5125:return pP;case 36294:return mP;case 36295:return gP;case 36296:return vP;case 35678:case 36198:case 36298:case 36306:case 35682:return _P;case 35679:case 36299:case 36307:return yP;case 35680:case 36300:case 36308:case 36293:return xP;case 36289:case 36303:case 36311:case 36292:return SP}}function MP(t,e){t.uniform1fv(this.addr,e)}function wP(t,e){const n=la(e,this.size,2);t.uniform2fv(this.addr,n)}function TP(t,e){const n=la(e,this.size,3);t.uniform3fv(this.addr,n)}function AP(t,e){const n=la(e,this.size,4);t.uniform4fv(this.addr,n)}function CP(t,e){const n=la(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RP(t,e){const n=la(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bP(t,e){const n=la(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PP(t,e){t.uniform1iv(this.addr,e)}function IP(t,e){t.uniform2iv(this.addr,e)}function LP(t,e){t.uniform3iv(this.addr,e)}function NP(t,e){t.uniform4iv(this.addr,e)}function DP(t,e){t.uniform1uiv(this.addr,e)}function UP(t,e){t.uniform2uiv(this.addr,e)}function OP(t,e){t.uniform3uiv(this.addr,e)}function kP(t,e){t.uniform4uiv(this.addr,e)}function FP(t,e,n){const i=this.cache,r=e.length,s=sd(n,r);on(i,s)||(t.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Cx,s[o])}function BP(t,e,n){const i=this.cache,r=e.length,s=sd(n,r);on(i,s)||(t.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||bx,s[o])}function zP(t,e,n){const i=this.cache,r=e.length,s=sd(n,r);on(i,s)||(t.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Px,s[o])}function HP(t,e,n){const i=this.cache,r=e.length,s=sd(n,r);on(i,s)||(t.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Rx,s[o])}function VP(t){switch(t){case 5126:return MP;case 35664:return wP;case 35665:return TP;case 35666:return AP;case 35674:return CP;case 35675:return RP;case 35676:return bP;case 5124:case 35670:return PP;case 35667:case 35671:return IP;case 35668:case 35672:return LP;case 35669:case 35673:return NP;case 5125:return DP;case 36294:return UP;case 36295:return OP;case 36296:return kP;case 35678:case 36198:case 36298:case 36306:case 35682:return FP;case 35679:case 36299:case 36307:return BP;case 35680:case 36300:case 36308:case 36293:return zP;case 36289:case 36303:case 36311:case 36292:return HP}}class GP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=EP(n.type)}}class WP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VP(n.type)}}class jP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Sf=/(\w+)(\])?(\[|\.)?/g;function wv(t,e){t.seq.push(e),t.map[e.id]=e}function XP(t,e,n){const i=t.name,r=i.length;for(Sf.lastIndex=0;;){const s=Sf.exec(i),o=Sf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wv(n,c===void 0?new GP(a,t,e):new WP(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new jP(a),wv(n,h)),n=h}}}class Xc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);XP(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Tv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $P=37297;let YP=0;function qP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Av=new tt;function KP(t){Mt._getMatrix(Av,Mt.workingColorSpace,t);const e=`mat3( ${Av.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(t)){case Tu:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Cv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qP(t.getShaderSource(e),o)}else return r}function JP(t,e){const n=KP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ZP(t,e){let n;switch(e){case n4:n="Linear";break;case i4:n="Reinhard";break;case r4:n="Cineon";break;case s4:n="ACESFilmic";break;case a4:n="AgX";break;case l4:n="Neutral";break;case o4:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wc=new j;function QP(){Mt.getLuminanceCoefficients(wc);const t=wc.x.toFixed(4),e=wc.y.toFixed(4),n=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function tI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ia(t){return t!==""}function Rv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iI=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(t){return t.replace(iI,sI)}const rI=new Map;function sI(t,e){let n=it[e];if(n===void 0){const i=rI.get(e);if(i!==void 0)n=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mp(n)}const oI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(t){return t.replace(oI,aI)}function aI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Iv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lI(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===UA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function cI(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jo:case Zo:e="ENVMAP_TYPE_CUBE";break;case nd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uI(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zo:e="ENVMAP_MODE_REFRACTION";break}return e}function dI(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case nx:e="ENVMAP_BLENDING_MULTIPLY";break;case e4:e="ENVMAP_BLENDING_MIX";break;case t4:e="ENVMAP_BLENDING_ADD";break}return e}function fI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hI(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=lI(n),c=cI(n),d=uI(n),h=dI(n),p=fI(n),v=eI(n),x=tI(s),E=r.createProgram();let m,u,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ia).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ia).join(`
`),u.length>0&&(u+=`
`)):(m=[Iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),u=[Iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==es?"#define TONE_MAPPING":"",n.toneMapping!==es?it.tonemapping_pars_fragment:"",n.toneMapping!==es?ZP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,JP("linearToOutputTexel",n.outputColorSpace),QP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ia).join(`
`)),o=mp(o),o=Rv(o,n),o=bv(o,n),a=mp(a),a=Rv(a,n),a=bv(a,n),o=Pv(o),a=Pv(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===V0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===V0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=y+m+o,M=y+u+a,P=Tv(r,r.VERTEX_SHADER,S),b=Tv(r,r.FRAGMENT_SHADER,M);r.attachShader(E,P),r.attachShader(E,b),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(D){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(E).trim(),V=r.getShaderInfoLog(P).trim(),Z=r.getShaderInfoLog(b).trim();let se=!0,ee=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,P,b);else{const le=Cv(r,P,"vertex"),F=Cv(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+le+`
`+F)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(V===""||Z==="")&&(ee=!1);ee&&(D.diagnostics={runnable:se,programLog:Y,vertexShader:{log:V,prefix:m},fragmentShader:{log:Z,prefix:u}})}r.deleteShader(P),r.deleteShader(b),N=new Xc(r,E),A=nI(r,E)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(E,$P)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YP++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=b,this}let pI=0;class mI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gI(e),n.set(e,i)),i}}class gI{constructor(e){this.id=pI++,this.code=e,this.usedTimes=0}}function vI(t,e,n,i,r,s,o){const a=new gx,l=new mI,c=new Set,d=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,w,D,Y,V){const Z=Y.fog,se=V.geometry,ee=A.isMeshStandardMaterial?Y.environment:null,le=(A.isMeshStandardMaterial?n:e).get(A.envMap||ee),F=le&&le.mapping===nd?le.image.height:null,re=x[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const oe=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ge=oe!==void 0?oe.length:0;let Oe=0;se.morphAttributes.position!==void 0&&(Oe=1),se.morphAttributes.normal!==void 0&&(Oe=2),se.morphAttributes.color!==void 0&&(Oe=3);let ht,Q,me,Pe;if(re){const St=Ii[re];ht=St.vertexShader,Q=St.fragmentShader}else ht=A.vertexShader,Q=A.fragmentShader,l.update(A),me=l.getVertexShaderID(A),Pe=l.getFragmentShaderID(A);const _e=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),Qe=V.isInstancedMesh===!0,Be=V.isBatchedMesh===!0,Ct=!!A.map,Dt=!!A.matcap,ut=!!le,k=!!A.aoMap,Zt=!!A.lightMap,nt=!!A.bumpMap,xt=!!A.normalMap,Ae=!!A.displacementMap,rt=!!A.emissiveMap,ze=!!A.metalnessMap,Ve=!!A.roughnessMap,Xt=A.anisotropy>0,L=A.clearcoat>0,T=A.dispersion>0,G=A.iridescence>0,te=A.sheen>0,ae=A.transmission>0,K=Xt&&!!A.anisotropyMap,De=L&&!!A.clearcoatMap,ye=L&&!!A.clearcoatNormalMap,Ne=L&&!!A.clearcoatRoughnessMap,ke=G&&!!A.iridescenceMap,ue=G&&!!A.iridescenceThicknessMap,Me=te&&!!A.sheenColorMap,We=te&&!!A.sheenRoughnessMap,Te=!!A.specularMap,ve=!!A.specularColorMap,qe=!!A.specularIntensityMap,U=ae&&!!A.transmissionMap,xe=ae&&!!A.thicknessMap,de=!!A.gradientMap,we=!!A.alphaMap,ce=A.alphaTest>0,X=!!A.alphaHash,Ie=!!A.extensions;let $e=es;A.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&($e=t.toneMapping);const Pt={shaderID:re,shaderType:A.type,shaderName:A.name,vertexShader:ht,fragmentShader:Q,defines:A.defines,customVertexShaderID:me,customFragmentShaderID:Pe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Be,batchingColor:Be&&V._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&V.instanceColor!==null,instancingMorph:Qe&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Qo,alphaToCoverage:!!A.alphaToCoverage,map:Ct,matcap:Dt,envMap:ut,envMapMode:ut&&le.mapping,envMapCubeUVHeight:F,aoMap:k,lightMap:Zt,bumpMap:nt,normalMap:xt,displacementMap:p&&Ae,emissiveMap:rt,normalMapObjectSpace:xt&&A.normalMapType===f4,normalMapTangentSpace:xt&&A.normalMapType===fx,metalnessMap:ze,roughnessMap:Ve,anisotropy:Xt,anisotropyMap:K,clearcoat:L,clearcoatMap:De,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ne,dispersion:T,iridescence:G,iridescenceMap:ke,iridescenceThicknessMap:ue,sheen:te,sheenColorMap:Me,sheenRoughnessMap:We,specularMap:Te,specularColorMap:ve,specularIntensityMap:qe,transmission:ae,transmissionMap:U,thicknessMap:xe,gradientMap:de,opaque:A.transparent===!1&&A.blending===ko&&A.alphaToCoverage===!1,alphaMap:we,alphaTest:ce,alphaHash:X,combine:A.combine,mapUv:Ct&&E(A.map.channel),aoMapUv:k&&E(A.aoMap.channel),lightMapUv:Zt&&E(A.lightMap.channel),bumpMapUv:nt&&E(A.bumpMap.channel),normalMapUv:xt&&E(A.normalMap.channel),displacementMapUv:Ae&&E(A.displacementMap.channel),emissiveMapUv:rt&&E(A.emissiveMap.channel),metalnessMapUv:ze&&E(A.metalnessMap.channel),roughnessMapUv:Ve&&E(A.roughnessMap.channel),anisotropyMapUv:K&&E(A.anisotropyMap.channel),clearcoatMapUv:De&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:ye&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:We&&E(A.sheenRoughnessMap.channel),specularMapUv:Te&&E(A.specularMap.channel),specularColorMapUv:ve&&E(A.specularColorMap.channel),specularIntensityMapUv:qe&&E(A.specularIntensityMap.channel),transmissionMapUv:U&&E(A.transmissionMap.channel),thicknessMapUv:xe&&E(A.thicknessMap.channel),alphaMapUv:we&&E(A.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(xt||Xt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!se.attributes.uv&&(Ct||we),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Fe,skinning:V.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ct&&A.map.isVideoTexture===!0&&Mt.getTransfer(A.map.colorSpace)===Lt,decodeVideoTextureEmissive:rt&&A.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(A.emissiveMap.colorSpace)===Lt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Qi,flipSided:A.side===Wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ie&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&A.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function u(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const D in A.defines)w.push(D),w.push(A.defines[D]);return A.isRawShaderMaterial===!1&&(y(w,A),S(w,A),w.push(t.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function y(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function S(A,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),A.push(a.mask)}function M(A){const w=x[A.type];let D;if(w){const Y=Ii[w];D=W4.clone(Y.uniforms)}else D=A.uniforms;return D}function P(A,w){let D;for(let Y=0,V=d.length;Y<V;Y++){const Z=d[Y];if(Z.cacheKey===w){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new hI(t,w,A,s),d.push(D)),D}function b(A){if(--A.usedTimes===0){const w=d.indexOf(A);d[w]=d[d.length-1],d.pop(),A.destroy()}}function R(A){l.remove(A)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:P,releaseProgram:b,releaseShaderCache:R,programs:d,dispose:N}}function _I(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function yI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,p,v,x,E,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:p,material:v,groupOrder:x,renderOrder:h.renderOrder,z:E,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=v,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=E,u.group=m),e++,u}function a(h,p,v,x,E,m){const u=o(h,p,v,x,E,m);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(h,p,v,x,E,m){const u=o(h,p,v,x,E,m);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,p){n.length>1&&n.sort(h||yI),i.length>1&&i.sort(p||Lv),r.length>1&&r.sort(p||Lv)}function d(){for(let h=e,p=t.length;h<p;h++){const v=t[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function xI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Nv,t.set(i,[o])):r>=s.length?(o=new Nv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function SI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Tt};break;case"SpotLight":n={position:new j,direction:new j,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function EI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MI=0;function wI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function TI(t){const e=new SI,n=EI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new qt,o=new qt;function a(c){let d=0,h=0,p=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let v=0,x=0,E=0,m=0,u=0,y=0,S=0,M=0,P=0,b=0,R=0;c.sort(wI);for(let A=0,w=c.length;A<w;A++){const D=c[A],Y=D.color,V=D.intensity,Z=D.distance,se=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=Y.r*V,h+=Y.g*V,p+=Y.b*V;else if(D.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(D.sh.coefficients[ee],V);R++}else if(D.isDirectionalLight){const ee=e.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const le=D.shadow,F=n.get(D);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize=le.mapSize,i.directionalShadow[v]=F,i.directionalShadowMap[v]=se,i.directionalShadowMatrix[v]=D.shadow.matrix,y++}i.directional[v]=ee,v++}else if(D.isSpotLight){const ee=e.get(D);ee.position.setFromMatrixPosition(D.matrixWorld),ee.color.copy(Y).multiplyScalar(V),ee.distance=Z,ee.coneCos=Math.cos(D.angle),ee.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ee.decay=D.decay,i.spot[E]=ee;const le=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,le.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[E]=le.matrix,D.castShadow){const F=n.get(D);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize=le.mapSize,i.spotShadow[E]=F,i.spotShadowMap[E]=se,M++}E++}else if(D.isRectAreaLight){const ee=e.get(D);ee.color.copy(Y).multiplyScalar(V),ee.halfWidth.set(D.width*.5,0,0),ee.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=ee,m++}else if(D.isPointLight){const ee=e.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity),ee.distance=D.distance,ee.decay=D.decay,D.castShadow){const le=D.shadow,F=n.get(D);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize=le.mapSize,F.shadowCameraNear=le.camera.near,F.shadowCameraFar=le.camera.far,i.pointShadow[x]=F,i.pointShadowMap[x]=se,i.pointShadowMatrix[x]=D.shadow.matrix,S++}i.point[x]=ee,x++}else if(D.isHemisphereLight){const ee=e.get(D);ee.skyColor.copy(D.color).multiplyScalar(V),ee.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[u]=ee,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=p;const N=i.hash;(N.directionalLength!==v||N.pointLength!==x||N.spotLength!==E||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==y||N.numPointShadows!==S||N.numSpotShadows!==M||N.numSpotMaps!==P||N.numLightProbes!==R)&&(i.directional.length=v,i.spot.length=E,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,N.directionalLength=v,N.pointLength=x,N.spotLength=E,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=y,N.numPointShadows=S,N.numSpotShadows=M,N.numSpotMaps=P,N.numLightProbes=R,i.version=MI++)}function l(c,d){let h=0,p=0,v=0,x=0,E=0;const m=d.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){const S=c[u];if(S.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(S.isSpotLight){const M=i.spot[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),v++}else if(S.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Dv(t){const e=new TI(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AI(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Dv(t),e.set(r,[a])):s>=o.length?(a=new Dv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const CI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RI=`uniform sampler2D shadow_pass;
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
}`;function bI(t,e,n){let i=new Dm;const r=new At,s=new At,o=new Yt,a=new Q4({depthPacking:d4}),l=new eC,c={},d=n.maxTextureSize,h={[is]:Wn,[Wn]:is,[Qi]:Qi},p=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:CI,fragmentShader:RI}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const x=new Hi;x.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Bn(x,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tx;let u=this.type;this.render=function(b,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const A=t.getRenderTarget(),w=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Qr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const V=u!==Ki&&this.type===Ki,Z=u===Ki&&this.type!==Ki;for(let se=0,ee=b.length;se<ee;se++){const le=b[se],F=le.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const re=F.getFrameExtents();if(r.multiply(re),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/re.x),r.x=s.x*re.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/re.y),r.y=s.y*re.y,F.mapSize.y=s.y)),F.map===null||V===!0||Z===!0){const ge=this.type!==Ki?{minFilter:wi,magFilter:wi}:{};F.map!==null&&F.map.dispose(),F.map=new Vs(r.x,r.y,ge),F.map.texture.name=le.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const oe=F.getViewportCount();for(let ge=0;ge<oe;ge++){const Oe=F.getViewport(ge);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),Y.viewport(o),F.updateMatrices(le,ge),i=F.getFrustum(),M(R,N,F.camera,le,this.type)}F.isPointLightShadow!==!0&&this.type===Ki&&y(F,N),F.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(A,w,D)};function y(b,R){const N=e.update(E);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,v.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vs(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(R,null,N,p,E,null),v.uniforms.shadow_pass.value=b.mapPass.texture,v.uniforms.resolution.value=b.mapSize,v.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(R,null,N,v,E,null)}function S(b,R,N,A){let w=null;const D=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)w=D;else if(w=N.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const Y=w.uuid,V=R.uuid;let Z=c[Y];Z===void 0&&(Z={},c[Y]=Z);let se=Z[V];se===void 0&&(se=w.clone(),Z[V]=se,R.addEventListener("dispose",P)),w=se}if(w.visible=R.visible,w.wireframe=R.wireframe,A===Ki?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=t.properties.get(w);Y.light=N}return w}function M(b,R,N,A,w){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Ki)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const V=e.update(b),Z=b.material;if(Array.isArray(Z)){const se=V.groups;for(let ee=0,le=se.length;ee<le;ee++){const F=se[ee],re=Z[F.materialIndex];if(re&&re.visible){const oe=S(b,re,A,w);b.onBeforeShadow(t,b,R,N,V,oe,F),t.renderBufferDirect(N,null,V,oe,b,F),b.onAfterShadow(t,b,R,N,V,oe,F)}}}else if(Z.visible){const se=S(b,Z,A,w);b.onBeforeShadow(t,b,R,N,V,se,null),t.renderBufferDirect(N,null,V,se,b,null),b.onAfterShadow(t,b,R,N,V,se,null)}}const Y=b.children;for(let V=0,Z=Y.length;V<Z;V++)M(Y[V],R,N,A,w)}function P(b){b.target.removeEventListener("dispose",P);for(const N in c){const A=c[N],w=b.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const PI={[Ih]:Lh,[Nh]:Oh,[Dh]:kh,[Ko]:Uh,[Lh]:Ih,[Oh]:Nh,[kh]:Dh,[Uh]:Ko};function II(t,e){function n(){let U=!1;const xe=new Yt;let de=null;const we=new Yt(0,0,0,0);return{setMask:function(ce){de!==ce&&!U&&(t.colorMask(ce,ce,ce,ce),de=ce)},setLocked:function(ce){U=ce},setClear:function(ce,X,Ie,$e,Pt){Pt===!0&&(ce*=$e,X*=$e,Ie*=$e),xe.set(ce,X,Ie,$e),we.equals(xe)===!1&&(t.clearColor(ce,X,Ie,$e),we.copy(xe))},reset:function(){U=!1,de=null,we.set(-1,0,0,0)}}}function i(){let U=!1,xe=!1,de=null,we=null,ce=null;return{setReversed:function(X){if(xe!==X){const Ie=e.get("EXT_clip_control");X?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),xe=X;const $e=ce;ce=null,this.setClear($e)}},getReversed:function(){return xe},setTest:function(X){X?_e(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(X){de!==X&&!U&&(t.depthMask(X),de=X)},setFunc:function(X){if(xe&&(X=PI[X]),we!==X){switch(X){case Ih:t.depthFunc(t.NEVER);break;case Lh:t.depthFunc(t.ALWAYS);break;case Nh:t.depthFunc(t.LESS);break;case Ko:t.depthFunc(t.LEQUAL);break;case Dh:t.depthFunc(t.EQUAL);break;case Uh:t.depthFunc(t.GEQUAL);break;case Oh:t.depthFunc(t.GREATER);break;case kh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}we=X}},setLocked:function(X){U=X},setClear:function(X){ce!==X&&(xe&&(X=1-X),t.clearDepth(X),ce=X)},reset:function(){U=!1,de=null,we=null,ce=null,xe=!1}}}function r(){let U=!1,xe=null,de=null,we=null,ce=null,X=null,Ie=null,$e=null,Pt=null;return{setTest:function(St){U||(St?_e(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(St){xe!==St&&!U&&(t.stencilMask(St),xe=St)},setFunc:function(St,tn,Xn){(de!==St||we!==tn||ce!==Xn)&&(t.stencilFunc(St,tn,Xn),de=St,we=tn,ce=Xn)},setOp:function(St,tn,Xn){(X!==St||Ie!==tn||$e!==Xn)&&(t.stencilOp(St,tn,Xn),X=St,Ie=tn,$e=Xn)},setLocked:function(St){U=St},setClear:function(St){Pt!==St&&(t.clearStencil(St),Pt=St)},reset:function(){U=!1,xe=null,de=null,we=null,ce=null,X=null,Ie=null,$e=null,Pt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,v=[],x=null,E=!1,m=null,u=null,y=null,S=null,M=null,P=null,b=null,R=new Tt(0,0,0),N=0,A=!1,w=null,D=null,Y=null,V=null,Z=null;const se=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,le=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(F)[1]),ee=le>=1):F.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),ee=le>=2);let re=null,oe={};const ge=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),ht=new Yt().fromArray(ge),Q=new Yt().fromArray(Oe);function me(U,xe,de,we){const ce=new Uint8Array(4),X=t.createTexture();t.bindTexture(U,X),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<de;Ie++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(xe+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return X}const Pe={};Pe[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(t.DEPTH_TEST),o.setFunc(Ko),nt(!1),xt(O0),_e(t.CULL_FACE),k(Qr);function _e(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function Fe(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Qe(U,xe){return h[U]!==xe?(t.bindFramebuffer(U,xe),h[U]=xe,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=xe),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function Be(U,xe){let de=v,we=!1;if(U){de=p.get(xe),de===void 0&&(de=[],p.set(xe,de));const ce=U.textures;if(de.length!==ce.length||de[0]!==t.COLOR_ATTACHMENT0){for(let X=0,Ie=ce.length;X<Ie;X++)de[X]=t.COLOR_ATTACHMENT0+X;de.length=ce.length,we=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,we=!0);we&&t.drawBuffers(de)}function Ct(U){return x!==U?(t.useProgram(U),x=U,!0):!1}const Dt={[Ts]:t.FUNC_ADD,[kA]:t.FUNC_SUBTRACT,[FA]:t.FUNC_REVERSE_SUBTRACT};Dt[BA]=t.MIN,Dt[zA]=t.MAX;const ut={[HA]:t.ZERO,[VA]:t.ONE,[GA]:t.SRC_COLOR,[bh]:t.SRC_ALPHA,[qA]:t.SRC_ALPHA_SATURATE,[$A]:t.DST_COLOR,[jA]:t.DST_ALPHA,[WA]:t.ONE_MINUS_SRC_COLOR,[Ph]:t.ONE_MINUS_SRC_ALPHA,[YA]:t.ONE_MINUS_DST_COLOR,[XA]:t.ONE_MINUS_DST_ALPHA,[KA]:t.CONSTANT_COLOR,[JA]:t.ONE_MINUS_CONSTANT_COLOR,[ZA]:t.CONSTANT_ALPHA,[QA]:t.ONE_MINUS_CONSTANT_ALPHA};function k(U,xe,de,we,ce,X,Ie,$e,Pt,St){if(U===Qr){E===!0&&(Fe(t.BLEND),E=!1);return}if(E===!1&&(_e(t.BLEND),E=!0),U!==OA){if(U!==m||St!==A){if((u!==Ts||M!==Ts)&&(t.blendEquation(t.FUNC_ADD),u=Ts,M=Ts),St)switch(U){case ko:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case k0:t.blendFunc(t.ONE,t.ONE);break;case F0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case B0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ko:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case k0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case F0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case B0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,S=null,P=null,b=null,R.set(0,0,0),N=0,m=U,A=St}return}ce=ce||xe,X=X||de,Ie=Ie||we,(xe!==u||ce!==M)&&(t.blendEquationSeparate(Dt[xe],Dt[ce]),u=xe,M=ce),(de!==y||we!==S||X!==P||Ie!==b)&&(t.blendFuncSeparate(ut[de],ut[we],ut[X],ut[Ie]),y=de,S=we,P=X,b=Ie),($e.equals(R)===!1||Pt!==N)&&(t.blendColor($e.r,$e.g,$e.b,Pt),R.copy($e),N=Pt),m=U,A=!1}function Zt(U,xe){U.side===Qi?Fe(t.CULL_FACE):_e(t.CULL_FACE);let de=U.side===Wn;xe&&(de=!de),nt(de),U.blending===ko&&U.transparent===!1?k(Qr):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const we=U.stencilWrite;a.setTest(we),we&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),rt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function xt(U){U!==NA?(_e(t.CULL_FACE),U!==D&&(U===O0?t.cullFace(t.BACK):U===DA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),D=U}function Ae(U){U!==Y&&(ee&&t.lineWidth(U),Y=U)}function rt(U,xe,de){U?(_e(t.POLYGON_OFFSET_FILL),(V!==xe||Z!==de)&&(t.polygonOffset(xe,de),V=xe,Z=de)):Fe(t.POLYGON_OFFSET_FILL)}function ze(U){U?_e(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function Ve(U){U===void 0&&(U=t.TEXTURE0+se-1),re!==U&&(t.activeTexture(U),re=U)}function Xt(U,xe,de){de===void 0&&(re===null?de=t.TEXTURE0+se-1:de=re);let we=oe[de];we===void 0&&(we={type:void 0,texture:void 0},oe[de]=we),(we.type!==U||we.texture!==xe)&&(re!==de&&(t.activeTexture(de),re=de),t.bindTexture(U,xe||Pe[U]),we.type=U,we.texture=xe)}function L(){const U=oe[re];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function T(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(U){ht.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ht.copy(U))}function We(U){Q.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Te(U,xe){let de=c.get(xe);de===void 0&&(de=new WeakMap,c.set(xe,de));let we=de.get(U);we===void 0&&(we=t.getUniformBlockIndex(xe,U.name),de.set(U,we))}function ve(U,xe){const we=c.get(xe).get(U);l.get(xe)!==we&&(t.uniformBlockBinding(xe,we,U.__bindingPointIndex),l.set(xe,we))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},re=null,oe={},h={},p=new WeakMap,v=[],x=null,E=!1,m=null,u=null,y=null,S=null,M=null,P=null,b=null,R=new Tt(0,0,0),N=0,A=!1,w=null,D=null,Y=null,V=null,Z=null,ht.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_e,disable:Fe,bindFramebuffer:Qe,drawBuffers:Be,useProgram:Ct,setBlending:k,setMaterial:Zt,setFlipSided:nt,setCullFace:xt,setLineWidth:Ae,setPolygonOffset:rt,setScissorTest:ze,activeTexture:Ve,bindTexture:Xt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:ke,texImage3D:ue,updateUBOMapping:Te,uniformBlockBinding:ve,texStorage2D:ye,texStorage3D:Ne,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:K,compressedTexSubImage3D:De,scissor:Me,viewport:We,reset:qe}}function LI(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,d=new WeakMap;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return v?new OffscreenCanvas(L,T):Cu("canvas")}function E(L,T,G){let te=1;const ae=Xt(L);if((ae.width>G||ae.height>G)&&(te=G/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor(te*ae.width),De=Math.floor(te*ae.height);h===void 0&&(h=x(K,De));const ye=T?x(K,De):h;return ye.width=K,ye.height=De,ye.getContext("2d").drawImage(L,0,0,K,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+K+"x"+De+")."),ye}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function m(L){return L.generateMipmaps}function u(L){t.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(L,T,G,te,ae=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=T;if(T===t.RED&&(G===t.FLOAT&&(K=t.R32F),G===t.HALF_FLOAT&&(K=t.R16F),G===t.UNSIGNED_BYTE&&(K=t.R8)),T===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(K=t.R8UI),G===t.UNSIGNED_SHORT&&(K=t.R16UI),G===t.UNSIGNED_INT&&(K=t.R32UI),G===t.BYTE&&(K=t.R8I),G===t.SHORT&&(K=t.R16I),G===t.INT&&(K=t.R32I)),T===t.RG&&(G===t.FLOAT&&(K=t.RG32F),G===t.HALF_FLOAT&&(K=t.RG16F),G===t.UNSIGNED_BYTE&&(K=t.RG8)),T===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(K=t.RG8UI),G===t.UNSIGNED_SHORT&&(K=t.RG16UI),G===t.UNSIGNED_INT&&(K=t.RG32UI),G===t.BYTE&&(K=t.RG8I),G===t.SHORT&&(K=t.RG16I),G===t.INT&&(K=t.RG32I)),T===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(K=t.RGB8UI),G===t.UNSIGNED_SHORT&&(K=t.RGB16UI),G===t.UNSIGNED_INT&&(K=t.RGB32UI),G===t.BYTE&&(K=t.RGB8I),G===t.SHORT&&(K=t.RGB16I),G===t.INT&&(K=t.RGB32I)),T===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),G===t.UNSIGNED_INT&&(K=t.RGBA32UI),G===t.BYTE&&(K=t.RGBA8I),G===t.SHORT&&(K=t.RGBA16I),G===t.INT&&(K=t.RGBA32I)),T===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),T===t.RGBA){const De=ae?Tu:Mt.getTransfer(te);G===t.FLOAT&&(K=t.RGBA32F),G===t.HALF_FLOAT&&(K=t.RGBA16F),G===t.UNSIGNED_BYTE&&(K=De===Lt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(L,T){let G;return L?T===null||T===Hs||T===ml?G=t.DEPTH24_STENCIL8:T===rr?G=t.DEPTH32F_STENCIL8:T===pl&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hs||T===ml?G=t.DEPTH_COMPONENT24:T===rr?G=t.DEPTH_COMPONENT32F:T===pl&&(G=t.DEPTH_COMPONENT16),G}function P(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==wi&&L.minFilter!==Ni?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function b(L){const T=L.target;T.removeEventListener("dispose",b),N(T),T.isVideoTexture&&d.delete(T)}function R(L){const T=L.target;T.removeEventListener("dispose",R),w(T)}function N(L){const T=i.get(L);if(T.__webglInit===void 0)return;const G=L.source,te=p.get(G);if(te){const ae=te[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(L),Object.keys(te).length===0&&p.delete(G)}i.remove(L)}function A(L){const T=i.get(L);t.deleteTexture(T.__webglTexture);const G=L.source,te=p.get(G);delete te[T.__cacheKey],o.memory.textures--}function w(L){const T=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let ae=0;ae<T.__webglFramebuffer[te].length;ae++)t.deleteFramebuffer(T.__webglFramebuffer[te][ae]);else t.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)t.deleteFramebuffer(T.__webglFramebuffer[te]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=L.textures;for(let te=0,ae=G.length;te<ae;te++){const K=i.get(G[te]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(G[te])}i.remove(L)}let D=0;function Y(){D=0}function V(){const L=D;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),D+=1,L}function Z(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function se(L,T){const G=i.get(L);if(L.isVideoTexture&&ze(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(G,L,T);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+T)}function ee(L,T){const G=i.get(L);if(L.version>0&&G.__version!==L.version){Pe(G,L,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+T)}function le(L,T){const G=i.get(L);if(L.version>0&&G.__version!==L.version){Pe(G,L,T);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+T)}function F(L,T){const G=i.get(L);if(L.version>0&&G.__version!==L.version){_e(G,L,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+T)}const re={[zh]:t.REPEAT,[Ps]:t.CLAMP_TO_EDGE,[Hh]:t.MIRRORED_REPEAT},oe={[wi]:t.NEAREST,[c4]:t.NEAREST_MIPMAP_NEAREST,[rc]:t.NEAREST_MIPMAP_LINEAR,[Ni]:t.LINEAR,[Gd]:t.LINEAR_MIPMAP_NEAREST,[Is]:t.LINEAR_MIPMAP_LINEAR},ge={[h4]:t.NEVER,[y4]:t.ALWAYS,[p4]:t.LESS,[hx]:t.LEQUAL,[m4]:t.EQUAL,[_4]:t.GEQUAL,[g4]:t.GREATER,[v4]:t.NOTEQUAL};function Oe(L,T){if(T.type===rr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ni||T.magFilter===Gd||T.magFilter===rc||T.magFilter===Is||T.minFilter===Ni||T.minFilter===Gd||T.minFilter===rc||T.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,re[T.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,re[T.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,re[T.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,oe[T.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wi||T.minFilter!==rc&&T.minFilter!==Is||T.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ht(L,T){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",b));const te=T.source;let ae=p.get(te);ae===void 0&&(ae={},p.set(te,ae));const K=Z(T);if(K!==L.__cacheKey){ae[K]===void 0&&(ae[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ae[K].usedTimes++;const De=ae[L.__cacheKey];De!==void 0&&(ae[L.__cacheKey].usedTimes--,De.usedTimes===0&&A(T)),L.__cacheKey=K,L.__webglTexture=ae[K].texture}return G}function Q(L,T,G){return Math.floor(Math.floor(L/G)/T)}function me(L,T,G,te){const K=L.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,G,te,T.data);else{K.sort((ue,Me)=>ue.start-Me.start);let De=0;for(let ue=1;ue<K.length;ue++){const Me=K[De],We=K[ue],Te=Me.start+Me.count,ve=Q(We.start,T.width,4),qe=Q(Me.start,T.width,4);We.start<=Te+1&&ve===qe&&Q(We.start+We.count-1,T.width,4)===ve?Me.count=Math.max(Me.count,We.start+We.count-Me.start):(++De,K[De]=We)}K.length=De+1;const ye=t.getParameter(t.UNPACK_ROW_LENGTH),Ne=t.getParameter(t.UNPACK_SKIP_PIXELS),ke=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let ue=0,Me=K.length;ue<Me;ue++){const We=K[ue],Te=Math.floor(We.start/4),ve=Math.ceil(We.count/4),qe=Te%T.width,U=Math.floor(Te/T.width),xe=ve,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,qe,U,xe,de,G,te,T.data)}L.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ye),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,ke)}}function Pe(L,T,G){let te=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=t.TEXTURE_3D);const ae=ht(L,T),K=T.source;n.bindTexture(te,L.__webglTexture,t.TEXTURE0+G);const De=i.get(K);if(K.version!==De.__version||ae===!0){n.activeTexture(t.TEXTURE0+G);const ye=Mt.getPrimaries(Mt.workingColorSpace),Ne=T.colorSpace===Fr?null:Mt.getPrimaries(T.colorSpace),ke=T.colorSpace===Fr||ye===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ue=E(T.image,!1,r.maxTextureSize);ue=Ve(T,ue);const Me=s.convert(T.format,T.colorSpace),We=s.convert(T.type);let Te=S(T.internalFormat,Me,We,T.colorSpace,T.isVideoTexture);Oe(te,T);let ve;const qe=T.mipmaps,U=T.isVideoTexture!==!0,xe=De.__version===void 0||ae===!0,de=K.dataReady,we=P(T,ue);if(T.isDepthTexture)Te=M(T.format===vl,T.type),xe&&(U?n.texStorage2D(t.TEXTURE_2D,1,Te,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Te,ue.width,ue.height,0,Me,We,null));else if(T.isDataTexture)if(qe.length>0){U&&xe&&n.texStorage2D(t.TEXTURE_2D,we,Te,qe[0].width,qe[0].height);for(let ce=0,X=qe.length;ce<X;ce++)ve=qe[ce],U?de&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ve.width,ve.height,Me,We,ve.data):n.texImage2D(t.TEXTURE_2D,ce,Te,ve.width,ve.height,0,Me,We,ve.data);T.generateMipmaps=!1}else U?(xe&&n.texStorage2D(t.TEXTURE_2D,we,Te,ue.width,ue.height),de&&me(T,ue,Me,We)):n.texImage2D(t.TEXTURE_2D,0,Te,ue.width,ue.height,0,Me,We,ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){U&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Te,qe[0].width,qe[0].height,ue.depth);for(let ce=0,X=qe.length;ce<X;ce++)if(ve=qe[ce],T.format!==Si)if(Me!==null)if(U){if(de)if(T.layerUpdates.size>0){const Ie=uv(ve.width,ve.height,T.format,T.type);for(const $e of T.layerUpdates){const Pt=ve.data.subarray($e*Ie/ve.data.BYTES_PER_ELEMENT,($e+1)*Ie/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,$e,ve.width,ve.height,1,Me,Pt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,ue.depth,Me,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,Te,ve.width,ve.height,ue.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,ve.width,ve.height,ue.depth,Me,We,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,Te,ve.width,ve.height,ue.depth,0,Me,We,ve.data)}else{U&&xe&&n.texStorage2D(t.TEXTURE_2D,we,Te,qe[0].width,qe[0].height);for(let ce=0,X=qe.length;ce<X;ce++)ve=qe[ce],T.format!==Si?Me!==null?U?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,ve.width,ve.height,Me,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,Te,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?de&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ve.width,ve.height,Me,We,ve.data):n.texImage2D(t.TEXTURE_2D,ce,Te,ve.width,ve.height,0,Me,We,ve.data)}else if(T.isDataArrayTexture)if(U){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Te,ue.width,ue.height,ue.depth),de)if(T.layerUpdates.size>0){const ce=uv(ue.width,ue.height,T.format,T.type);for(const X of T.layerUpdates){const Ie=ue.data.subarray(X*ce/ue.data.BYTES_PER_ELEMENT,(X+1)*ce/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,X,ue.width,ue.height,1,Me,We,Ie)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,We,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ue.width,ue.height,ue.depth,0,Me,We,ue.data);else if(T.isData3DTexture)U?(xe&&n.texStorage3D(t.TEXTURE_3D,we,Te,ue.width,ue.height,ue.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,We,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ue.width,ue.height,ue.depth,0,Me,We,ue.data);else if(T.isFramebufferTexture){if(xe)if(U)n.texStorage2D(t.TEXTURE_2D,we,Te,ue.width,ue.height);else{let ce=ue.width,X=ue.height;for(let Ie=0;Ie<we;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Te,ce,X,0,Me,We,null),ce>>=1,X>>=1}}else if(qe.length>0){if(U&&xe){const ce=Xt(qe[0]);n.texStorage2D(t.TEXTURE_2D,we,Te,ce.width,ce.height)}for(let ce=0,X=qe.length;ce<X;ce++)ve=qe[ce],U?de&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Me,We,ve):n.texImage2D(t.TEXTURE_2D,ce,Te,Me,We,ve);T.generateMipmaps=!1}else if(U){if(xe){const ce=Xt(ue);n.texStorage2D(t.TEXTURE_2D,we,Te,ce.width,ce.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,We,ue)}else n.texImage2D(t.TEXTURE_2D,0,Te,Me,We,ue);m(T)&&u(te),De.__version=K.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function _e(L,T,G){if(T.image.length!==6)return;const te=ht(L,T),ae=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+G);const K=i.get(ae);if(ae.version!==K.__version||te===!0){n.activeTexture(t.TEXTURE0+G);const De=Mt.getPrimaries(Mt.workingColorSpace),ye=T.colorSpace===Fr?null:Mt.getPrimaries(T.colorSpace),Ne=T.colorSpace===Fr||De===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,ue=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let X=0;X<6;X++)!ke&&!ue?Me[X]=E(T.image[X],!0,r.maxCubemapSize):Me[X]=ue?T.image[X].image:T.image[X],Me[X]=Ve(T,Me[X]);const We=Me[0],Te=s.convert(T.format,T.colorSpace),ve=s.convert(T.type),qe=S(T.internalFormat,Te,ve,T.colorSpace),U=T.isVideoTexture!==!0,xe=K.__version===void 0||te===!0,de=ae.dataReady;let we=P(T,We);Oe(t.TEXTURE_CUBE_MAP,T);let ce;if(ke){U&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,we,qe,We.width,We.height);for(let X=0;X<6;X++){ce=Me[X].mipmaps;for(let Ie=0;Ie<ce.length;Ie++){const $e=ce[Ie];T.format!==Si?Te!==null?U?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie,0,0,$e.width,$e.height,Te,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie,qe,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie,0,0,$e.width,$e.height,Te,ve,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie,qe,$e.width,$e.height,0,Te,ve,$e.data)}}}else{if(ce=T.mipmaps,U&&xe){ce.length>0&&we++;const X=Xt(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,we,qe,X.width,X.height)}for(let X=0;X<6;X++)if(ue){U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Me[X].width,Me[X].height,Te,ve,Me[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,qe,Me[X].width,Me[X].height,0,Te,ve,Me[X].data);for(let Ie=0;Ie<ce.length;Ie++){const Pt=ce[Ie].image[X].image;U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie+1,0,0,Pt.width,Pt.height,Te,ve,Pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie+1,qe,Pt.width,Pt.height,0,Te,ve,Pt.data)}}else{U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Te,ve,Me[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,qe,Te,ve,Me[X]);for(let Ie=0;Ie<ce.length;Ie++){const $e=ce[Ie];U?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie+1,0,0,Te,ve,$e.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie+1,qe,Te,ve,$e.image[X])}}}m(T)&&u(t.TEXTURE_CUBE_MAP),K.__version=ae.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Fe(L,T,G,te,ae,K){const De=s.convert(G.format,G.colorSpace),ye=s.convert(G.type),Ne=S(G.internalFormat,De,ye,G.colorSpace),ke=i.get(T),ue=i.get(G);if(ue.__renderTarget=T,!ke.__hasExternalTextures){const Me=Math.max(1,T.width>>K),We=Math.max(1,T.height>>K);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,K,Ne,Me,We,T.depth,0,De,ye,null):n.texImage2D(ae,K,Ne,Me,We,0,De,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),rt(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ae,ue.__webglTexture,0,Ae(T)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ae,ue.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(L,T,G){if(t.bindRenderbuffer(t.RENDERBUFFER,L),T.depthBuffer){const te=T.depthTexture,ae=te&&te.isDepthTexture?te.type:null,K=M(T.stencilBuffer,ae),De=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=Ae(T);rt(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,K,T.width,T.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,K,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,K,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,L)}else{const te=T.textures;for(let ae=0;ae<te.length;ae++){const K=te[ae],De=s.convert(K.format,K.colorSpace),ye=s.convert(K.type),Ne=S(K.internalFormat,De,ye,K.colorSpace),ke=Ae(T);G&&rt(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Ne,T.width,T.height):rt(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,Ne,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Ne,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Be(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(T.depthTexture);te.__renderTarget=T,(!te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),se(T.depthTexture,0);const ae=te.__webglTexture,K=Ae(T);if(T.depthTexture.format===gl)rt(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(T.depthTexture.format===vl)rt(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ct(L){const T=i.get(L),G=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const te=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),te){const ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=te}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const te=L.texture.mipmaps;te&&te.length>0?Be(T.__webglFramebuffer[0],L):Be(T.__webglFramebuffer,L)}else if(G){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]===void 0)T.__webglDepthbuffer[te]=t.createRenderbuffer(),Qe(T.__webglDepthbuffer[te],L,!1);else{const ae=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,K)}}else{const te=L.texture.mipmaps;if(te&&te.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),Qe(T.__webglDepthbuffer,L,!1);else{const ae=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Dt(L,T,G){const te=i.get(L);T!==void 0&&Fe(te.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ct(L)}function ut(L){const T=L.texture,G=i.get(L),te=i.get(T);L.addEventListener("dispose",R);const ae=L.textures,K=L.isWebGLCubeRenderTarget===!0,De=ae.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=T.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ye]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)G.__webglFramebuffer[ye][Ne]=t.createFramebuffer()}else G.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)G.__webglFramebuffer[ye]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(De)for(let ye=0,Ne=ae.length;ye<Ne;ye++){const ke=i.get(ae[ye]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&rt(L)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ye=0;ye<ae.length;ye++){const Ne=ae[ye];G.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ye]);const ke=s.convert(Ne.format,Ne.colorSpace),ue=s.convert(Ne.type),Me=S(Ne.internalFormat,ke,ue,Ne.colorSpace,L.isXRRenderTarget===!0),We=Ae(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Me,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,G.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Qe(G.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,T);for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Fe(G.__webglFramebuffer[ye][Ne],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne);else Fe(G.__webglFramebuffer[ye],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(T)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let ye=0,Ne=ae.length;ye<Ne;ye++){const ke=ae[ye],ue=i.get(ke);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),Oe(t.TEXTURE_2D,ke),Fe(G.__webglFramebuffer,L,ke,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),m(ke)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ye=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,te.__webglTexture),Oe(ye,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Fe(G.__webglFramebuffer[Ne],L,T,t.COLOR_ATTACHMENT0,ye,Ne);else Fe(G.__webglFramebuffer,L,T,t.COLOR_ATTACHMENT0,ye,0);m(T)&&u(ye),n.unbindTexture()}L.depthBuffer&&Ct(L)}function k(L){const T=L.textures;for(let G=0,te=T.length;G<te;G++){const ae=T[G];if(m(ae)){const K=y(L),De=i.get(ae).__webglTexture;n.bindTexture(K,De),u(K),n.unbindTexture()}}}const Zt=[],nt=[];function xt(L){if(L.samples>0){if(rt(L)===!1){const T=L.textures,G=L.width,te=L.height;let ae=t.COLOR_BUFFER_BIT;const K=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(L),ye=T.length>1;if(ye)for(let ke=0;ke<T.length;ke++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Ne=L.texture.mipmaps;Ne&&Ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),ye){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[ke]);const ue=i.get(T[ke]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,G,te,0,0,G,te,ae,t.NEAREST),l===!0&&(Zt.length=0,nt.length=0,Zt.push(t.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Zt.push(K),nt.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,nt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Zt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let ke=0;ke<T.length;ke++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,De.__webglColorRenderbuffer[ke]);const ue=i.get(T[ke]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Ae(L){return Math.min(r.maxSamples,L.samples)}function rt(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ze(L){const T=o.render.frame;d.get(L)!==T&&(d.set(L,T),L.update())}function Ve(L,T){const G=L.colorSpace,te=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Qo&&G!==Fr&&(Mt.getTransfer(G)===Lt?(te!==Si||ae!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=Y,this.setTexture2D=se,this.setTexture2DArray=ee,this.setTexture3D=le,this.setTextureCube=F,this.rebindTextures=Dt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=rt}function NI(t,e){function n(i,r=Fr){let s;const o=Mt.getTransfer(r);if(i===Bi)return t.UNSIGNED_BYTE;if(i===Cm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Rm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ox)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===rx)return t.BYTE;if(i===sx)return t.SHORT;if(i===pl)return t.UNSIGNED_SHORT;if(i===Am)return t.INT;if(i===Hs)return t.UNSIGNED_INT;if(i===rr)return t.FLOAT;if(i===Il)return t.HALF_FLOAT;if(i===ax)return t.ALPHA;if(i===lx)return t.RGB;if(i===Si)return t.RGBA;if(i===gl)return t.DEPTH_COMPONENT;if(i===vl)return t.DEPTH_STENCIL;if(i===cx)return t.RED;if(i===bm)return t.RED_INTEGER;if(i===ux)return t.RG;if(i===Pm)return t.RG_INTEGER;if(i===Im)return t.RGBA_INTEGER;if(i===Hc||i===Vc||i===Gc||i===Wc)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vh||i===Gh||i===Wh||i===jh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xh||i===$h||i===Yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xh||i===$h)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yh)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qh||i===Kh||i===Jh||i===Zh||i===Qh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===lp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qh)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kh)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jh)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zh)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qh)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ep)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tp)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===np)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ip)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rp)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sp)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===op)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ap)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lp)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===cp||i===up)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===jc)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===up)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dx||i===dp||i===fp||i===hp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ml?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const DI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UI=`
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

}`;class OI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rs({vertexShader:DI,fragmentShader:UI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bn(new rd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kI extends aa{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,p=null,v=null,x=null;const E=new OI,m=n.getContextAttributes();let u=null,y=null;const S=[],M=[],P=new At;let b=null;const R=new vi;R.viewport=new Yt;const N=new vi;N.viewport=new Yt;const A=[R,N],w=new rC;let D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=S[Q];return me===void 0&&(me=new hf,S[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=S[Q];return me===void 0&&(me=new hf,S[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=S[Q];return me===void 0&&(me=new hf,S[Q]=me),me.getHandSpace()};function V(Q){const me=M.indexOf(Q.inputSource);if(me===-1)return;const Pe=S[me];Pe!==void 0&&(Pe.update(Q.inputSource,Q.frame,c||o),Pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",se);for(let Q=0;Q<S.length;Q++){const me=M[Q];me!==null&&(M[Q]=null,S[Q].disconnect(me))}D=null,Y=null,E.reset(),e.setRenderTarget(u),v=null,p=null,h=null,r=null,y=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,_e=null,Fe=null;m.depth&&(Fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Pe=m.stencil?vl:gl,_e=m.stencil?ml:Hs);const Qe={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(Qe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Vs(p.textureWidth,p.textureHeight,{format:Si,type:Bi,depthTexture:new wx(p.textureWidth,p.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,Pe),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),y=new Vs(v.framebufferWidth,v.framebufferHeight,{format:Si,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function se(Q){for(let me=0;me<Q.removed.length;me++){const Pe=Q.removed[me],_e=M.indexOf(Pe);_e>=0&&(M[_e]=null,S[_e].disconnect(Pe))}for(let me=0;me<Q.added.length;me++){const Pe=Q.added[me];let _e=M.indexOf(Pe);if(_e===-1){for(let Qe=0;Qe<S.length;Qe++)if(Qe>=M.length){M.push(Pe),_e=Qe;break}else if(M[Qe]===null){M[Qe]=Pe,_e=Qe;break}if(_e===-1)break}const Fe=S[_e];Fe&&Fe.connect(Pe)}}const ee=new j,le=new j;function F(Q,me,Pe){ee.setFromMatrixPosition(me.matrixWorld),le.setFromMatrixPosition(Pe.matrixWorld);const _e=ee.distanceTo(le),Fe=me.projectionMatrix.elements,Qe=Pe.projectionMatrix.elements,Be=Fe[14]/(Fe[10]-1),Ct=Fe[14]/(Fe[10]+1),Dt=(Fe[9]+1)/Fe[5],ut=(Fe[9]-1)/Fe[5],k=(Fe[8]-1)/Fe[0],Zt=(Qe[8]+1)/Qe[0],nt=Be*k,xt=Be*Zt,Ae=_e/(-k+Zt),rt=Ae*-k;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(rt),Q.translateZ(Ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const ze=Be+Ae,Ve=Ct+Ae,Xt=nt-rt,L=xt+(_e-rt),T=Dt*Ct/Ve*ze,G=ut*Ct/Ve*ze;Q.projectionMatrix.makePerspective(Xt,L,T,G,ze,Ve),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function re(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let me=Q.near,Pe=Q.far;E.texture!==null&&(E.depthNear>0&&(me=E.depthNear),E.depthFar>0&&(Pe=E.depthFar)),w.near=N.near=R.near=me,w.far=N.far=R.far=Pe,(D!==w.near||Y!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,Y=w.far),R.layers.mask=Q.layers.mask|2,N.layers.mask=Q.layers.mask|4,w.layers.mask=R.layers.mask|N.layers.mask;const _e=Q.parent,Fe=w.cameras;re(w,_e);for(let Qe=0;Qe<Fe.length;Qe++)re(Fe[Qe],_e);Fe.length===2?F(w,R,N):w.projectionMatrix.copy(R.projectionMatrix),oe(Q,w,_e)};function oe(Q,me,Pe){Pe===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(Pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=pp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&v===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(w)};let ge=null;function Oe(Q,me){if(d=me.getViewerPose(c||o),x=me,d!==null){const Pe=d.views;v!==null&&(e.setRenderTargetFramebuffer(y,v.framebuffer),e.setRenderTarget(y));let _e=!1;Pe.length!==w.cameras.length&&(w.cameras.length=0,_e=!0);for(let Be=0;Be<Pe.length;Be++){const Ct=Pe[Be];let Dt=null;if(v!==null)Dt=v.getViewport(Ct);else{const k=h.getViewSubImage(p,Ct);Dt=k.viewport,Be===0&&(e.setRenderTargetTextures(y,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(y))}let ut=A[Be];ut===void 0&&(ut=new vi,ut.layers.enable(Be),ut.viewport=new Yt,A[Be]=ut),ut.matrix.fromArray(Ct.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Ct.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Be===0&&(w.matrix.copy(ut.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),_e===!0&&w.cameras.push(ut)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Be=h.getDepthInformation(Pe[0]);Be&&Be.isValid&&Be.texture&&E.init(e,Be,r.renderState)}}for(let Pe=0;Pe<S.length;Pe++){const _e=M[Pe],Fe=S[Pe];_e!==null&&Fe!==void 0&&Fe.update(_e,me,c||o)}ge&&ge(Q,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),x=null}const ht=new Ax;ht.setAnimationLoop(Oe),this.setAnimationLoop=function(Q){ge=Q},this.dispose=function(){}}}const ys=new zi,FI=new qt;function BI(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Sx(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,y,S,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&v(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),E(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,y,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Wn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Wn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=e.get(u),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,ys.copy(M),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.envMapRotation.value.setFromMatrix4(FI.makeRotationFromEuler(ys)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=S*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function v(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Wn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function E(m,u){const y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zI(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const M=S.program;i.uniformBlockBinding(y,M)}function c(y,S){let M=r[y.id];M===void 0&&(x(y),M=d(y),r[y.id]=M,y.addEventListener("dispose",m));const P=S.program;i.updateUBOMapping(y,P);const b=e.render.frame;s[y.id]!==b&&(p(y),s[y.id]=b)}function d(y){const S=h();y.__bindingPointIndex=S;const M=t.createBuffer(),P=y.__size,b=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const S=r[y.id],M=y.uniforms,P=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let b=0,R=M.length;b<R;b++){const N=Array.isArray(M[b])?M[b]:[M[b]];for(let A=0,w=N.length;A<w;A++){const D=N[A];if(v(D,b,A,P)===!0){const Y=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let se=0;se<V.length;se++){const ee=V[se],le=E(ee);typeof ee=="number"||typeof ee=="boolean"?(D.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,Y+Z,D.__data)):ee.isMatrix3?(D.__data[0]=ee.elements[0],D.__data[1]=ee.elements[1],D.__data[2]=ee.elements[2],D.__data[3]=0,D.__data[4]=ee.elements[3],D.__data[5]=ee.elements[4],D.__data[6]=ee.elements[5],D.__data[7]=0,D.__data[8]=ee.elements[6],D.__data[9]=ee.elements[7],D.__data[10]=ee.elements[8],D.__data[11]=0):(ee.toArray(D.__data,Z),Z+=le.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(y,S,M,P){const b=y.value,R=S+"_"+M;if(P[R]===void 0)return typeof b=="number"||typeof b=="boolean"?P[R]=b:P[R]=b.clone(),!0;{const N=P[R];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return P[R]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function x(y){const S=y.uniforms;let M=0;const P=16;for(let R=0,N=S.length;R<N;R++){const A=Array.isArray(S[R])?S[R]:[S[R]];for(let w=0,D=A.length;w<D;w++){const Y=A[w],V=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,se=V.length;Z<se;Z++){const ee=V[Z],le=E(ee),F=M%P,re=F%le.boundary,oe=F+re;M+=re,oe!==0&&P-oe<le.storage&&(M+=P-oe),Y.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=le.storage}}}const b=M%P;return b>0&&(M+=P-b),y.__size=M,y.__cache={},this}function E(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class HI{constructor(e={}){const{canvas:n=S4(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const x=new Uint32Array(4),E=new Int32Array(4);let m=null,u=null;const y=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let P=!1;this._outputColorSpace=ni;let b=0,R=0,N=null,A=-1,w=null;const D=new Yt,Y=new Yt;let V=null;const Z=new Tt(0);let se=0,ee=n.width,le=n.height,F=1,re=null,oe=null;const ge=new Yt(0,0,ee,le),Oe=new Yt(0,0,ee,le);let ht=!1;const Q=new Dm;let me=!1,Pe=!1;const _e=new qt,Fe=new qt,Qe=new j,Be=new Yt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function ut(){return N===null?F:1}let k=i;function Zt(C,B){return n.getContext(C,B)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tm}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",X,!1),k===null){const B="webgl2";if(k=Zt(B,C),k===null)throw Zt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let nt,xt,Ae,rt,ze,Ve,Xt,L,T,G,te,ae,K,De,ye,Ne,ke,ue,Me,We,Te,ve,qe,U;function xe(){nt=new Jb(k),nt.init(),ve=new NI(k,nt),xt=new Wb(k,nt,e,ve),Ae=new II(k,nt),xt.reverseDepthBuffer&&p&&Ae.buffers.depth.setReversed(!0),rt=new eP(k),ze=new _I,Ve=new LI(k,nt,Ae,ze,xt,ve,rt),Xt=new Xb(M),L=new Kb(M),T=new oC(k),qe=new Vb(k,T),G=new Zb(k,T,rt,qe),te=new nP(k,G,T,rt),Me=new tP(k,xt,Ve),Ne=new jb(ze),ae=new vI(M,Xt,L,nt,xt,qe,Ne),K=new BI(M,ze),De=new xI,ye=new AI(nt),ue=new Hb(M,Xt,L,Ae,te,v,l),ke=new bI(M,te,xt),U=new zI(k,rt,xt,Ae),We=new Gb(k,nt,rt),Te=new Qb(k,nt,rt),rt.programs=ae.programs,M.capabilities=xt,M.extensions=nt,M.properties=ze,M.renderLists=De,M.shadowMap=ke,M.state=Ae,M.info=rt}xe();const de=new kI(M,k);this.xr=de,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(ee,le,!1))},this.getSize=function(C){return C.set(ee,le)},this.setSize=function(C,B,$=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,le=B,n.width=Math.floor(C*F),n.height=Math.floor(B*F),$===!0&&(n.style.width=C+"px",n.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(ee*F,le*F).floor()},this.setDrawingBufferSize=function(C,B,$){ee=C,le=B,F=$,n.width=Math.floor(C*$),n.height=Math.floor(B*$),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(ge)},this.setViewport=function(C,B,$,q){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,B,$,q),Ae.viewport(D.copy(ge).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(Oe)},this.setScissor=function(C,B,$,q){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,B,$,q),Ae.scissor(Y.copy(Oe).multiplyScalar(F).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){Ae.setScissorTest(ht=C)},this.setOpaqueSort=function(C){re=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(C=!0,B=!0,$=!0){let q=0;if(C){let z=!1;if(N!==null){const fe=N.texture.format;z=fe===Im||fe===Pm||fe===bm}if(z){const fe=N.texture.type,Se=fe===Bi||fe===Hs||fe===pl||fe===ml||fe===Cm||fe===Rm,Le=ue.getClearColor(),Ce=ue.getClearAlpha(),je=Le.r,Ye=Le.g,He=Le.b;Se?(x[0]=je,x[1]=Ye,x[2]=He,x[3]=Ce,k.clearBufferuiv(k.COLOR,0,x)):(E[0]=je,E[1]=Ye,E[2]=He,E[3]=Ce,k.clearBufferiv(k.COLOR,0,E))}else q|=k.COLOR_BUFFER_BIT}B&&(q|=k.DEPTH_BUFFER_BIT),$&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",X,!1),ue.dispose(),De.dispose(),ye.dispose(),ze.dispose(),Xt.dispose(),L.dispose(),te.dispose(),qe.dispose(),U.dispose(),ae.dispose(),de.dispose(),de.removeEventListener("sessionstart",ci),de.removeEventListener("sessionend",Ci),Vi.stop()};function we(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=rt.autoReset,B=ke.enabled,$=ke.autoUpdate,q=ke.needsUpdate,z=ke.type;xe(),rt.autoReset=C,ke.enabled=B,ke.autoUpdate=$,ke.needsUpdate=q,ke.type=z}function X(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){const B=C.target;B.removeEventListener("dispose",Ie),$e(B)}function $e(C){Pt(C),ze.remove(C)}function Pt(C){const B=ze.get(C).programs;B!==void 0&&(B.forEach(function($){ae.releaseProgram($)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,$,q,z,fe){B===null&&(B=Ct);const Se=z.isMesh&&z.matrixWorld.determinant()<0,Le=Fl(C,B,$,q,z);Ae.setMaterial(q,Se);let Ce=$.index,je=1;if(q.wireframe===!0){if(Ce=G.getWireframeAttribute($),Ce===void 0)return;je=2}const Ye=$.drawRange,He=$.attributes.position;let ot=Ye.start*je,wt=(Ye.start+Ye.count)*je;fe!==null&&(ot=Math.max(ot,fe.start*je),wt=Math.min(wt,(fe.start+fe.count)*je)),Ce!==null?(ot=Math.max(ot,0),wt=Math.min(wt,Ce.count)):He!=null&&(ot=Math.max(ot,0),wt=Math.min(wt,He.count));const Ft=wt-ot;if(Ft<0||Ft===1/0)return;qe.setup(z,q,Le,$,Ce);let Ut,pt=We;if(Ce!==null&&(Ut=T.get(Ce),pt=Te,pt.setIndex(Ut)),z.isMesh)q.wireframe===!0?(Ae.setLineWidth(q.wireframeLinewidth*ut()),pt.setMode(k.LINES)):pt.setMode(k.TRIANGLES);else if(z.isLine){let Ge=q.linewidth;Ge===void 0&&(Ge=1),Ae.setLineWidth(Ge*ut()),z.isLineSegments?pt.setMode(k.LINES):z.isLineLoop?pt.setMode(k.LINE_LOOP):pt.setMode(k.LINE_STRIP)}else z.isPoints?pt.setMode(k.POINTS):z.isSprite&&pt.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Fo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))pt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ge=z._multiDrawStarts,nn=z._multiDrawCounts,Et=z._multiDrawCount,An=Ce?T.get(Ce).bytesPerElement:1,xr=ze.get(q).currentProgram.getUniforms();for(let Cn=0;Cn<Et;Cn++)xr.setValue(k,"_gl_DrawID",Cn),pt.render(Ge[Cn]/An,nn[Cn])}else if(z.isInstancedMesh)pt.renderInstances(ot,Ft,z.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,nn=Math.min($.instanceCount,Ge);pt.renderInstances(ot,Ft,nn)}else pt.render(ot,Ft)};function St(C,B,$){C.transparent===!0&&C.side===Qi&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Ys(C,B,$),C.side=is,C.needsUpdate=!0,Ys(C,B,$),C.side=Qi):Ys(C,B,$)}this.compile=function(C,B,$=null){$===null&&($=C),u=ye.get($),u.init(B),S.push(u),$.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),C!==$&&C.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();const q=new Set;return C.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const Le=fe[Se];St(Le,$,z),q.add(Le)}else St(fe,$,z),q.add(fe)}),u=S.pop(),q},this.compileAsync=function(C,B,$=null){const q=this.compile(C,B,$);return new Promise(z=>{function fe(){if(q.forEach(function(Se){ze.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){z(C);return}setTimeout(fe,10)}nt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let tn=null;function Xn(C){tn&&tn(C)}function ci(){Vi.stop()}function Ci(){Vi.start()}const Vi=new Ax;Vi.setAnimationLoop(Xn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(C){tn=C,de.setAnimationLoop(C),C===null?Vi.stop():Vi.start()},de.addEventListener("sessionstart",ci),de.addEventListener("sessionend",Ci),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(B),B=de.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,B,N),u=ye.get(C,S.length),u.init(B),S.push(u),Fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(Fe),Pe=this.localClippingEnabled,me=Ne.init(this.clippingPlanes,Pe),m=De.get(C,y.length),m.init(),y.push(m),de.enabled===!0&&de.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&ca(fe,B,-1/0,M.sortObjects)}ca(C,B,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(re,oe),Dt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Dt&&ue.addToRenderList(m,C),this.info.render.frame++,me===!0&&Ne.beginShadows();const $=u.state.shadowsArray;ke.render($,C,B),me===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(u.setupLights(),B.isArrayCamera){const fe=B.cameras;if(z.length>0)for(let Se=0,Le=fe.length;Se<Le;Se++){const Ce=fe[Se];yr(q,z,C,Ce)}Dt&&ue.render(C);for(let Se=0,Le=fe.length;Se<Le;Se++){const Ce=fe[Se];ln(m,C,Ce,Ce.viewport)}}else z.length>0&&yr(q,z,C,B),Dt&&ue.render(C),ln(m,C,B);N!==null&&R===0&&(Ve.updateMultisampleRenderTarget(N),Ve.updateRenderTargetMipmap(N)),C.isScene===!0&&C.onAfterRender(M,C,B),qe.resetDefaultState(),A=-1,w=null,S.pop(),S.length>0?(u=S[S.length-1],me===!0&&Ne.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ca(C,B,$,q){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){q&&Be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Fe);const Se=te.update(C),Le=C.material;Le.visible&&m.push(C,Se,Le,$,Be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const Se=te.update(C),Le=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Be.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Be.copy(Se.boundingSphere.center)),Be.applyMatrix4(C.matrixWorld).applyMatrix4(Fe)),Array.isArray(Le)){const Ce=Se.groups;for(let je=0,Ye=Ce.length;je<Ye;je++){const He=Ce[je],ot=Le[He.materialIndex];ot&&ot.visible&&m.push(C,Se,ot,$,Be.z,He)}}else Le.visible&&m.push(C,Se,Le,$,Be.z,null)}}const fe=C.children;for(let Se=0,Le=fe.length;Se<Le;Se++)ca(fe[Se],B,$,q)}function ln(C,B,$,q){const z=C.opaque,fe=C.transmissive,Se=C.transparent;u.setupLightsView($),me===!0&&Ne.setGlobalState(M.clippingPlanes,$),q&&Ae.viewport(D.copy(q)),z.length>0&&Xs(z,B,$),fe.length>0&&Xs(fe,B,$),Se.length>0&&Xs(Se,B,$),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function yr(C,B,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new Vs(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Il:Bi,minFilter:Is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const fe=u.state.transmissionRenderTarget[q.id],Se=q.viewport||D;fe.setSize(Se.z*M.transmissionResolutionScale,Se.w*M.transmissionResolutionScale);const Le=M.getRenderTarget();M.setRenderTarget(fe),M.getClearColor(Z),se=M.getClearAlpha(),se<1&&M.setClearColor(16777215,.5),M.clear(),Dt&&ue.render($);const Ce=M.toneMapping;M.toneMapping=es;const je=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),me===!0&&Ne.setGlobalState(M.clippingPlanes,q),Xs(C,$,q),Ve.updateMultisampleRenderTarget(fe),Ve.updateRenderTargetMipmap(fe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let He=0,ot=B.length;He<ot;He++){const wt=B[He],Ft=wt.object,Ut=wt.geometry,pt=wt.material,Ge=wt.group;if(pt.side===Qi&&Ft.layers.test(q.layers)){const nn=pt.side;pt.side=Wn,pt.needsUpdate=!0,$s(Ft,$,q,Ut,pt,Ge),pt.side=nn,pt.needsUpdate=!0,Ye=!0}}Ye===!0&&(Ve.updateMultisampleRenderTarget(fe),Ve.updateRenderTargetMipmap(fe))}M.setRenderTarget(Le),M.setClearColor(Z,se),je!==void 0&&(q.viewport=je),M.toneMapping=Ce}function Xs(C,B,$){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,fe=C.length;z<fe;z++){const Se=C[z],Le=Se.object,Ce=Se.geometry,je=Se.group;let Ye=Se.material;Ye.allowOverride===!0&&q!==null&&(Ye=q),Le.layers.test($.layers)&&$s(Le,B,$,Ce,Ye,je)}}function $s(C,B,$,q,z,fe){C.onBeforeRender(M,B,$,q,z,fe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(M,B,$,q,C,fe),z.transparent===!0&&z.side===Qi&&z.forceSinglePass===!1?(z.side=Wn,z.needsUpdate=!0,M.renderBufferDirect($,B,q,z,C,fe),z.side=is,z.needsUpdate=!0,M.renderBufferDirect($,B,q,z,C,fe),z.side=Qi):M.renderBufferDirect($,B,q,z,C,fe),C.onAfterRender(M,B,$,q,z,fe)}function Ys(C,B,$){B.isScene!==!0&&(B=Ct);const q=ze.get(C),z=u.state.lights,fe=u.state.shadowsArray,Se=z.state.version,Le=ae.getParameters(C,z.state,fe,B,$),Ce=ae.getProgramCacheKey(Le);let je=q.programs;q.environment=C.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(C.isMeshStandardMaterial?L:Xt).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,je===void 0&&(C.addEventListener("dispose",Ie),je=new Map,q.programs=je);let Ye=je.get(Ce);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===Se)return kl(C,Le),Ye}else Le.uniforms=ae.getUniforms(C),C.onBeforeCompile(Le,M),Ye=ae.acquireProgram(Le,Ce),je.set(Ce,Ye),q.uniforms=Le.uniforms;const He=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Ne.uniform),kl(C,Le),q.needsLights=od(C),q.lightsStateVersion=Se,q.needsLights&&(He.ambientLightColor.value=z.state.ambient,He.lightProbe.value=z.state.probe,He.directionalLights.value=z.state.directional,He.directionalLightShadows.value=z.state.directionalShadow,He.spotLights.value=z.state.spot,He.spotLightShadows.value=z.state.spotShadow,He.rectAreaLights.value=z.state.rectArea,He.ltc_1.value=z.state.rectAreaLTC1,He.ltc_2.value=z.state.rectAreaLTC2,He.pointLights.value=z.state.point,He.pointLightShadows.value=z.state.pointShadow,He.hemisphereLights.value=z.state.hemi,He.directionalShadowMap.value=z.state.directionalShadowMap,He.directionalShadowMatrix.value=z.state.directionalShadowMatrix,He.spotShadowMap.value=z.state.spotShadowMap,He.spotLightMatrix.value=z.state.spotLightMatrix,He.spotLightMap.value=z.state.spotLightMap,He.pointShadowMap.value=z.state.pointShadowMap,He.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ye,q.uniformsList=null,Ye}function Gi(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Xc.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function kl(C,B){const $=ze.get(C);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Fl(C,B,$,q,z){B.isScene!==!0&&(B=Ct),Ve.resetTextureUnits();const fe=B.fog,Se=q.isMeshStandardMaterial?B.environment:null,Le=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Qo,Ce=(q.isMeshStandardMaterial?L:Xt).get(q.envMap||Se),je=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color;let Ft=es;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ft=M.toneMapping);const Ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pt=Ut!==void 0?Ut.length:0,Ge=ze.get(q),nn=u.state.lights;if(me===!0&&(Pe===!0||C!==w)){const cn=C===w&&q.id===A;Ne.setState(q,C,cn)}let Et=!1;q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==nn.state.version||Ge.outputColorSpace!==Le||z.isBatchedMesh&&Ge.batching===!1||!z.isBatchedMesh&&Ge.batching===!0||z.isBatchedMesh&&Ge.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ge.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ge.instancing===!1||!z.isInstancedMesh&&Ge.instancing===!0||z.isSkinnedMesh&&Ge.skinning===!1||!z.isSkinnedMesh&&Ge.skinning===!0||z.isInstancedMesh&&Ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ge.instancingMorph===!1&&z.morphTexture!==null||Ge.envMap!==Ce||q.fog===!0&&Ge.fog!==fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ne.numPlanes||Ge.numIntersection!==Ne.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==Ye||Ge.morphTargets!==He||Ge.morphNormals!==ot||Ge.morphColors!==wt||Ge.toneMapping!==Ft||Ge.morphTargetsCount!==pt)&&(Et=!0):(Et=!0,Ge.__version=q.version);let An=Ge.currentProgram;Et===!0&&(An=Ys(q,B,z));let xr=!1,Cn=!1,hs=!1;const Ot=An.getUniforms(),On=Ge.uniforms;if(Ae.useProgram(An.program)&&(xr=!0,Cn=!0,hs=!0),q.id!==A&&(A=q.id,Cn=!0),xr||w!==C){Ae.buffers.depth.getReversed()?(_e.copy(C.projectionMatrix),M4(_e),w4(_e),Ot.setValue(k,"projectionMatrix",_e)):Ot.setValue(k,"projectionMatrix",C.projectionMatrix),Ot.setValue(k,"viewMatrix",C.matrixWorldInverse);const pn=Ot.map.cameraPosition;pn!==void 0&&pn.setValue(k,Qe.setFromMatrixPosition(C.matrixWorld)),xt.logarithmicDepthBuffer&&Ot.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ot.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Cn=!0,hs=!0)}if(z.isSkinnedMesh){Ot.setOptional(k,z,"bindMatrix"),Ot.setOptional(k,z,"bindMatrixInverse");const cn=z.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ot.setValue(k,"boneTexture",cn.boneTexture,Ve))}z.isBatchedMesh&&(Ot.setOptional(k,z,"batchingTexture"),Ot.setValue(k,"batchingTexture",z._matricesTexture,Ve),Ot.setOptional(k,z,"batchingIdTexture"),Ot.setValue(k,"batchingIdTexture",z._indirectTexture,Ve),Ot.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&Ot.setValue(k,"batchingColorTexture",z._colorsTexture,Ve));const Rn=$.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Me.update(z,$,An),(Cn||Ge.receiveShadow!==z.receiveShadow)&&(Ge.receiveShadow=z.receiveShadow,Ot.setValue(k,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(On.envMap.value=Ce,On.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(On.envMapIntensity.value=B.environmentIntensity),Cn&&(Ot.setValue(k,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&Bl(On,hs),fe&&q.fog===!0&&K.refreshFogUniforms(On,fe),K.refreshMaterialUniforms(On,q,F,le,u.state.transmissionRenderTarget[C.id]),Xc.upload(k,Gi(Ge),On,Ve)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xc.upload(k,Gi(Ge),On,Ve),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ot.setValue(k,"center",z.center),Ot.setValue(k,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(k,"normalMatrix",z.normalMatrix),Ot.setValue(k,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const cn=q.uniformsGroups;for(let pn=0,qs=cn.length;pn<qs;pn++){const Ri=cn[pn];U.update(Ri,An),U.bind(Ri,An)}}return An}function Bl(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function od(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,B,$){const q=ze.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ze.get(C.texture).__webglTexture=B,ze.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,B){const $=ze.get(C);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0};const ua=k.createFramebuffer();this.setRenderTarget=function(C,B=0,$=0){N=C,b=B,R=$;let q=!0,z=null,fe=!1,Se=!1;if(C){const Ce=ze.get(C);if(Ce.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Ce.__webglFramebuffer===void 0)Ve.setupRenderTarget(C);else if(Ce.__hasExternalTextures)Ve.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const He=C.depthTexture;if(Ce.__boundDepthTexture!==He){if(He!==null&&ze.has(He)&&(C.width!==He.image.width||C.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(C)}}const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Se=!0);const Ye=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[B])?z=Ye[B][$]:z=Ye[B],fe=!0):C.samples>0&&Ve.useMultisampledRTT(C)===!1?z=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?z=Ye[$]:z=Ye,D.copy(C.viewport),Y.copy(C.scissor),V=C.scissorTest}else D.copy(ge).multiplyScalar(F).floor(),Y.copy(Oe).multiplyScalar(F).floor(),V=ht;if($!==0&&(z=ua),Ae.bindFramebuffer(k.FRAMEBUFFER,z)&&q&&Ae.drawBuffers(C,z),Ae.viewport(D),Ae.scissor(Y),Ae.setScissorTest(V),fe){const Ce=ze.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,$)}else if(Se){const Ce=ze.get(C.texture),je=B;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,$,je)}else if(C!==null&&$!==0){const Ce=ze.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ce.__webglTexture,$)}A=-1},this.readRenderTargetPixels=function(C,B,$,q,z,fe,Se,Le=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){Ae.bindFramebuffer(k.FRAMEBUFFER,Ce);try{const je=C.textures[Le],Ye=je.format,He=je.type;if(!xt.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-q&&$>=0&&$<=C.height-z&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le),k.readPixels(B,$,q,z,ve.convert(Ye),ve.convert(He),fe))}finally{const je=N!==null?ze.get(N).__webglFramebuffer:null;Ae.bindFramebuffer(k.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(C,B,$,q,z,fe,Se,Le=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce)if(B>=0&&B<=C.width-q&&$>=0&&$<=C.height-z){Ae.bindFramebuffer(k.FRAMEBUFFER,Ce);const je=C.textures[Le],Ye=je.format,He=je.type;if(!xt.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Le),k.readPixels(B,$,q,z,ve.convert(Ye),ve.convert(He),0);const wt=N!==null?ze.get(N).__webglFramebuffer:null;Ae.bindFramebuffer(k.FRAMEBUFFER,wt);const Ft=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await E4(k,Ft,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe),k.deleteBuffer(ot),k.deleteSync(Ft),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,B=null,$=0){const q=Math.pow(2,-$),z=Math.floor(C.image.width*q),fe=Math.floor(C.image.height*q),Se=B!==null?B.x:0,Le=B!==null?B.y:0;Ve.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,Se,Le,z,fe),Ae.unbindTexture()};const Wi=k.createFramebuffer(),ad=k.createFramebuffer();this.copyTextureToTexture=function(C,B,$=null,q=null,z=0,fe=null){fe===null&&(z!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=z,z=0):fe=0);let Se,Le,Ce,je,Ye,He,ot,wt,Ft;const Ut=C.isCompressedTexture?C.mipmaps[fe]:C.image;if($!==null)Se=$.max.x-$.min.x,Le=$.max.y-$.min.y,Ce=$.isBox3?$.max.z-$.min.z:1,je=$.min.x,Ye=$.min.y,He=$.isBox3?$.min.z:0;else{const Rn=Math.pow(2,-z);Se=Math.floor(Ut.width*Rn),Le=Math.floor(Ut.height*Rn),C.isDataArrayTexture?Ce=Ut.depth:C.isData3DTexture?Ce=Math.floor(Ut.depth*Rn):Ce=1,je=0,Ye=0,He=0}q!==null?(ot=q.x,wt=q.y,Ft=q.z):(ot=0,wt=0,Ft=0);const pt=ve.convert(B.format),Ge=ve.convert(B.type);let nn;B.isData3DTexture?(Ve.setTexture3D(B,0),nn=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ve.setTexture2DArray(B,0),nn=k.TEXTURE_2D_ARRAY):(Ve.setTexture2D(B,0),nn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const Et=k.getParameter(k.UNPACK_ROW_LENGTH),An=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xr=k.getParameter(k.UNPACK_SKIP_PIXELS),Cn=k.getParameter(k.UNPACK_SKIP_ROWS),hs=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,je),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ye),k.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const Ot=C.isDataArrayTexture||C.isData3DTexture,On=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){const Rn=ze.get(C),cn=ze.get(B),pn=ze.get(Rn.__renderTarget),qs=ze.get(cn.__renderTarget);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let Ri=0;Ri<Ce;Ri++)Ot&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(C).__webglTexture,z,He+Ri),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(B).__webglTexture,fe,Ft+Ri)),k.blitFramebuffer(je,Ye,Se,Le,ot,wt,Se,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(z!==0||C.isRenderTargetTexture||ze.has(C)){const Rn=ze.get(C),cn=ze.get(B);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,Wi),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,ad);for(let pn=0;pn<Ce;pn++)Ot?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rn.__webglTexture,z,He+pn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rn.__webglTexture,z),On?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,cn.__webglTexture,fe,Ft+pn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,cn.__webglTexture,fe),z!==0?k.blitFramebuffer(je,Ye,Se,Le,ot,wt,Se,Le,k.COLOR_BUFFER_BIT,k.NEAREST):On?k.copyTexSubImage3D(nn,fe,ot,wt,Ft+pn,je,Ye,Se,Le):k.copyTexSubImage2D(nn,fe,ot,wt,je,Ye,Se,Le);Ae.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else On?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(nn,fe,ot,wt,Ft,Se,Le,Ce,pt,Ge,Ut.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(nn,fe,ot,wt,Ft,Se,Le,Ce,pt,Ut.data):k.texSubImage3D(nn,fe,ot,wt,Ft,Se,Le,Ce,pt,Ge,Ut):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,fe,ot,wt,Se,Le,pt,Ge,Ut.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,fe,ot,wt,Ut.width,Ut.height,pt,Ut.data):k.texSubImage2D(k.TEXTURE_2D,fe,ot,wt,Se,Le,pt,Ge,Ut);k.pixelStorei(k.UNPACK_ROW_LENGTH,Et),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,An),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xr),k.pixelStorei(k.UNPACK_SKIP_ROWS,Cn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hs),fe===0&&B.generateMipmaps&&k.generateMipmap(nn),Ae.unbindTexture()},this.copyTextureToTexture3D=function(C,B,$=null,q=null,z=0){return Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,B,$,q,z)},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&Ve.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ve.setTextureCube(C,0):C.isData3DTexture?Ve.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ve.setTexture2DArray(C,0):Ve.setTexture2D(C,0),Ae.unbindTexture()},this.resetState=function(){b=0,R=0,N=null,Ae.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const bu=[{id:"rose-drop-earrings",name:"Chandbali Gold Earrings",category:"earrings",thumbnailUrl:"https://upload.wikimedia.org/wikipedia/commons/4/40/Chandbali_Earrings.jpg",tryOnImageUrl:"https://upload.wikimedia.org/wikipedia/commons/4/40/Chandbali_Earrings.jpg",placement:"ears",modelScale:.9,yOffset:.3},{id:"midnight-sunglasses",name:"Oakley Shield Sunglasses",category:"sunglasses",thumbnailUrl:"https://upload.wikimedia.org/wikipedia/commons/7/71/Oakley_sunglasses.jpg",tryOnImageUrl:"https://upload.wikimedia.org/wikipedia/commons/7/71/Oakley_sunglasses.jpg",placement:"eyes",modelScale:1.05,yOffset:-.02},{id:"gold-pendant-necklace",name:"Extendible Gold Necklace",category:"necklace",thumbnailUrl:"https://upload.wikimedia.org/wikipedia/commons/0/08/Extendible_gold_necklace_with_two_clasps.jpg",tryOnImageUrl:"https://upload.wikimedia.org/wikipedia/commons/0/08/Extendible_gold_necklace_with_two_clasps.jpg",placement:"neck",modelScale:1.1,yOffset:0}];function Ix(t){return bu.find(e=>e.id===t)??bu[0]}function VI(t){const e=J.useRef(null),n=J.useRef(!1),[i,r]=J.useState("user"),[s,o]=J.useState(!1),[a,l]=J.useState(""),[c,d]=J.useState(!1),h=J.useCallback(()=>{const m=e.current;m&&(m.getTracks().forEach(u=>u.stop()),e.current=null),t.current&&(t.current.pause(),t.current.srcObject=null,t.current.onloadedmetadata=null),o(!1)},[t]),p=J.useCallback(m=>{var u;return window.isSecureContext?(u=navigator.mediaDevices)!=null&&u.getUserMedia?(m==null?void 0:m.name)==="NotAllowedError"||(m==null?void 0:m.name)==="SecurityError"?"Camera permission was blocked. Allow camera access in your browser settings, then try again.":(m==null?void 0:m.name)==="NotFoundError"||(m==null?void 0:m.name)==="DevicesNotFoundError"?"No camera was found on this device.":(m==null?void 0:m.name)==="NotReadableError"||(m==null?void 0:m.name)==="TrackStartError"?"The camera is already in use by another app or browser tab.":"Unable to access the camera. Please allow permission and try again.":"Camera access is not available in this browser. Use Chrome, Edge, or Safari on HTTPS or localhost.":"Camera access requires HTTPS or localhost. Open the app at https:// or http://localhost."},[]),v=J.useCallback(async m=>{t.current&&(t.current.srcObject=m,await new Promise(u=>{if(t.current.readyState>=1){u();return}t.current.onloadedmetadata=u}),await t.current.play())},[t]),x=J.useCallback(async()=>{var u;if(n.current)return;let m;try{if(n.current=!0,d(!0),h(),l(""),!((u=navigator.mediaDevices)!=null&&u.getUserMedia)||!window.isSecureContext)throw new Error("Camera unavailable");try{m=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:i},width:{ideal:960},height:{ideal:720}},audio:!1})}catch(y){if((y==null?void 0:y.name)!=="OverconstrainedError"&&(y==null?void 0:y.name)!=="ConstraintNotSatisfiedError")throw y;m=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1})}e.current=m,await v(m),o(!0)}catch(y){m==null||m.getTracks().forEach(S=>S.stop()),e.current=null,l(p(y)),o(!1)}finally{n.current=!1,d(!1)}},[v,i,p,h]),E=J.useCallback(()=>{r(m=>m==="user"?"environment":"user")},[]);return{cameraError:a,facingMode:i,isCameraReady:s,isStartingCamera:c,startCamera:x,stopCamera:h,switchFacingMode:E}}var GI={};(function(){var t;function e(f){var g=0;return function(){return g<f.length?{done:!1,value:f[g++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,g,_){return f==Array.prototype||f==Object.prototype||(f[g]=_.value),f};function i(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof ld=="object"&&ld];for(var g=0;g<f.length;++g){var _=f[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=i(this);function s(f,g){if(g)e:{var _=r;f=f.split(".");for(var I=0;I<f.length-1;I++){var H=f[I];if(!(H in _))break e;_=_[H]}f=f[f.length-1],I=_[f],g=g(I),g!=I&&g!=null&&n(_,f,{configurable:!0,writable:!0,value:g})}}s("Symbol",function(f){function g(ne){if(this instanceof g)throw new TypeError("Symbol is not a constructor");return new _(I+(ne||"")+"_"+H++,ne)}function _(ne,W){this.g=ne,n(this,"description",{configurable:!0,writable:!0,value:W})}if(f)return f;_.prototype.toString=function(){return this.g};var I="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",H=0;return g}),s("Symbol.iterator",function(f){if(f)return f;f=Symbol("Symbol.iterator");for(var g="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),_=0;_<g.length;_++){var I=r[g[_]];typeof I=="function"&&typeof I.prototype[f]!="function"&&n(I.prototype,f,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return f});function o(f){return f={next:f},f[Symbol.iterator]=function(){return this},f}function a(f){var g=typeof Symbol<"u"&&Symbol.iterator&&f[Symbol.iterator];return g?g.call(f):{next:e(f)}}function l(f){if(!(f instanceof Array)){f=a(f);for(var g,_=[];!(g=f.next()).done;)_.push(g.value);f=_}return f}var c=typeof Object.create=="function"?Object.create:function(f){function g(){}return g.prototype=f,new g},d;if(typeof Object.setPrototypeOf=="function")d=Object.setPrototypeOf;else{var h;e:{var p={a:!0},v={};try{v.__proto__=p,h=v.a;break e}catch{}h=!1}d=h?function(f,g){if(f.__proto__=g,f.__proto__!==g)throw new TypeError(f+" is not extensible");return f}:null}var x=d;function E(f,g){if(f.prototype=c(g.prototype),f.prototype.constructor=f,x)x(f,g);else for(var _ in g)if(_!="prototype")if(Object.defineProperties){var I=Object.getOwnPropertyDescriptor(g,_);I&&Object.defineProperty(f,_,I)}else f[_]=g[_];f.ea=g.prototype}function m(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function u(f){if(f.l)throw new TypeError("Generator is already running");f.l=!0}m.prototype.o=function(f){this.h=f};function y(f,g){f.j={U:g,V:!0},f.g=f.m||f.s}m.prototype.return=function(f){this.j={return:f},this.g=this.s};function S(f,g,_){return f.g=_,{value:g}}function M(f){this.g=new m,this.h=f}function P(f,g){u(f.g);var _=f.g.i;return _?b(f,"return"in _?_.return:function(I){return{value:I,done:!0}},g,f.g.return):(f.g.return(g),R(f))}function b(f,g,_,I){try{var H=g.call(f.g.i,_);if(!(H instanceof Object))throw new TypeError("Iterator result "+H+" is not an object");if(!H.done)return f.g.l=!1,H;var ne=H.value}catch(W){return f.g.i=null,y(f.g,W),R(f)}return f.g.i=null,I.call(f.g,ne),R(f)}function R(f){for(;f.g.g;)try{var g=f.h(f.g);if(g)return f.g.l=!1,{value:g.value,done:!1}}catch(_){f.g.h=void 0,y(f.g,_)}if(f.g.l=!1,f.g.j){if(g=f.g.j,f.g.j=null,g.V)throw g.U;return{value:g.return,done:!0}}return{value:void 0,done:!0}}function N(f){this.next=function(g){return u(f.g),f.g.i?g=b(f,f.g.i.next,g,f.g.o):(f.g.o(g),g=R(f)),g},this.throw=function(g){return u(f.g),f.g.i?g=b(f,f.g.i.throw,g,f.g.o):(y(f.g,g),g=R(f)),g},this.return=function(g){return P(f,g)},this[Symbol.iterator]=function(){return this}}function A(f,g){return g=new N(new M(g)),x&&f.prototype&&x(g,f.prototype),g}function w(f,g){f instanceof String&&(f+="");var _=0,I=!1,H={next:function(){if(!I&&_<f.length){var ne=_++;return{value:g(ne,f[ne]),done:!1}}return I=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}var D=typeof Object.assign=="function"?Object.assign:function(f,g){for(var _=1;_<arguments.length;_++){var I=arguments[_];if(I)for(var H in I)Object.prototype.hasOwnProperty.call(I,H)&&(f[H]=I[H])}return f};s("Object.assign",function(f){return f||D}),s("Promise",function(f){function g(W){this.h=0,this.i=void 0,this.g=[],this.o=!1;var ie=this.j();try{W(ie.resolve,ie.reject)}catch(pe){ie.reject(pe)}}function _(){this.g=null}function I(W){return W instanceof g?W:new g(function(ie){ie(W)})}if(f)return f;_.prototype.h=function(W){if(this.g==null){this.g=[];var ie=this;this.i(function(){ie.l()})}this.g.push(W)};var H=r.setTimeout;_.prototype.i=function(W){H(W,0)},_.prototype.l=function(){for(;this.g&&this.g.length;){var W=this.g;this.g=[];for(var ie=0;ie<W.length;++ie){var pe=W[ie];W[ie]=null;try{pe()}catch(Re){this.j(Re)}}}this.g=null},_.prototype.j=function(W){this.i(function(){throw W})},g.prototype.j=function(){function W(Re){return function(Ke){pe||(pe=!0,Re.call(ie,Ke))}}var ie=this,pe=!1;return{resolve:W(this.C),reject:W(this.l)}},g.prototype.C=function(W){if(W===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(W instanceof g)this.F(W);else{e:switch(typeof W){case"object":var ie=W!=null;break e;case"function":ie=!0;break e;default:ie=!1}ie?this.u(W):this.m(W)}},g.prototype.u=function(W){var ie=void 0;try{ie=W.then}catch(pe){this.l(pe);return}typeof ie=="function"?this.G(ie,W):this.m(W)},g.prototype.l=function(W){this.s(2,W)},g.prototype.m=function(W){this.s(1,W)},g.prototype.s=function(W,ie){if(this.h!=0)throw Error("Cannot settle("+W+", "+ie+"): Promise already settled in state"+this.h);this.h=W,this.i=ie,this.h===2&&this.D(),this.A()},g.prototype.D=function(){var W=this;H(function(){if(W.B()){var ie=r.console;typeof ie<"u"&&ie.error(W.i)}},1)},g.prototype.B=function(){if(this.o)return!1;var W=r.CustomEvent,ie=r.Event,pe=r.dispatchEvent;return typeof pe>"u"?!0:(typeof W=="function"?W=new W("unhandledrejection",{cancelable:!0}):typeof ie=="function"?W=new ie("unhandledrejection",{cancelable:!0}):(W=r.document.createEvent("CustomEvent"),W.initCustomEvent("unhandledrejection",!1,!0,W)),W.promise=this,W.reason=this.i,pe(W))},g.prototype.A=function(){if(this.g!=null){for(var W=0;W<this.g.length;++W)ne.h(this.g[W]);this.g=null}};var ne=new _;return g.prototype.F=function(W){var ie=this.j();W.J(ie.resolve,ie.reject)},g.prototype.G=function(W,ie){var pe=this.j();try{W.call(ie,pe.resolve,pe.reject)}catch(Re){pe.reject(Re)}},g.prototype.then=function(W,ie){function pe(at,Ze){return typeof at=="function"?function(Ue){try{Re(at(Ue))}catch(Je){Ke(Je)}}:Ze}var Re,Ke,Rt=new g(function(at,Ze){Re=at,Ke=Ze});return this.J(pe(W,Re),pe(ie,Ke)),Rt},g.prototype.catch=function(W){return this.then(void 0,W)},g.prototype.J=function(W,ie){function pe(){switch(Re.h){case 1:W(Re.i);break;case 2:ie(Re.i);break;default:throw Error("Unexpected state: "+Re.h)}}var Re=this;this.g==null?ne.h(pe):this.g.push(pe),this.o=!0},g.resolve=I,g.reject=function(W){return new g(function(ie,pe){pe(W)})},g.race=function(W){return new g(function(ie,pe){for(var Re=a(W),Ke=Re.next();!Ke.done;Ke=Re.next())I(Ke.value).J(ie,pe)})},g.all=function(W){var ie=a(W),pe=ie.next();return pe.done?I([]):new g(function(Re,Ke){function Rt(Ue){return function(Je){at[Ue]=Je,Ze--,Ze==0&&Re(at)}}var at=[],Ze=0;do at.push(void 0),Ze++,I(pe.value).J(Rt(at.length-1),Ke),pe=ie.next();while(!pe.done)})},g}),s("Object.is",function(f){return f||function(g,_){return g===_?g!==0||1/g===1/_:g!==g&&_!==_}}),s("Array.prototype.includes",function(f){return f||function(g,_){var I=this;I instanceof String&&(I=String(I));var H=I.length;for(_=_||0,0>_&&(_=Math.max(_+H,0));_<H;_++){var ne=I[_];if(ne===g||Object.is(ne,g))return!0}return!1}}),s("String.prototype.includes",function(f){return f||function(g,_){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(g instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(g,_||0)!==-1}}),s("Array.prototype.keys",function(f){return f||function(){return w(this,function(g){return g})}});var Y=this||self;function V(f,g){f=f.split(".");var _=Y;f[0]in _||typeof _.execScript>"u"||_.execScript("var "+f[0]);for(var I;f.length&&(I=f.shift());)f.length||g===void 0?_[I]&&_[I]!==Object.prototype[I]?_=_[I]:_=_[I]={}:_[I]=g}function Z(f,g){return g=String.fromCharCode.apply(null,g),f==null?g:f+g}var se,ee=typeof TextDecoder<"u",le,F=typeof TextEncoder<"u";function re(f){if(F)f=(le||(le=new TextEncoder)).encode(f);else{var g=void 0;g=g===void 0?!1:g;for(var _=0,I=new Uint8Array(3*f.length),H=0;H<f.length;H++){var ne=f.charCodeAt(H);if(128>ne)I[_++]=ne;else{if(2048>ne)I[_++]=ne>>6|192;else{if(55296<=ne&&57343>=ne){if(56319>=ne&&H<f.length){var W=f.charCodeAt(++H);if(56320<=W&&57343>=W){ne=1024*(ne-55296)+W-56320+65536,I[_++]=ne>>18|240,I[_++]=ne>>12&63|128,I[_++]=ne>>6&63|128,I[_++]=ne&63|128;continue}else H--}if(g)throw Error("Found an unpaired surrogate");ne=65533}I[_++]=ne>>12|224,I[_++]=ne>>6&63|128}I[_++]=ne&63|128}}f=I.subarray(0,_)}return f}var oe={},ge=null;function Oe(f,g){g===void 0&&(g=0),me(),g=oe[g];for(var _=Array(Math.floor(f.length/3)),I=g[64]||"",H=0,ne=0;H<f.length-2;H+=3){var W=f[H],ie=f[H+1],pe=f[H+2],Re=g[W>>2];W=g[(W&3)<<4|ie>>4],ie=g[(ie&15)<<2|pe>>6],pe=g[pe&63],_[ne++]=Re+W+ie+pe}switch(Re=0,pe=I,f.length-H){case 2:Re=f[H+1],pe=g[(Re&15)<<2]||I;case 1:f=f[H],_[ne]=g[f>>2]+g[(f&3)<<4|Re>>4]+pe+I}return _.join("")}function ht(f){var g=f.length,_=3*g/4;_%3?_=Math.floor(_):"=.".indexOf(f[g-1])!=-1&&(_="=.".indexOf(f[g-2])!=-1?_-2:_-1);var I=new Uint8Array(_),H=0;return Q(f,function(ne){I[H++]=ne}),I.subarray(0,H)}function Q(f,g){function _(pe){for(;I<f.length;){var Re=f.charAt(I++),Ke=ge[Re];if(Ke!=null)return Ke;if(!/^[\s\xa0]*$/.test(Re))throw Error("Unknown base64 encoding at char: "+Re)}return pe}me();for(var I=0;;){var H=_(-1),ne=_(0),W=_(64),ie=_(64);if(ie===64&&H===-1)break;g(H<<2|ne>>4),W!=64&&(g(ne<<4&240|W>>2),ie!=64&&g(W<<6&192|ie))}}function me(){if(!ge){ge={};for(var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],_=0;5>_;_++){var I=f.concat(g[_].split(""));oe[_]=I;for(var H=0;H<I.length;H++){var ne=I[H];ge[ne]===void 0&&(ge[ne]=H)}}}}var Pe=typeof Uint8Array.prototype.slice=="function",_e;function Fe(f,g,_){return g===_?_e||(_e=new Uint8Array(0)):Pe?f.slice(g,_):new Uint8Array(f.subarray(g,_))}var Qe=0,Be=0;function Ct(f,g){g=g===void 0?{}:g,g=g.v===void 0?!1:g.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=g,f&&Dt(this,f)}function Dt(f,g){g=g.constructor===Uint8Array?g:g.constructor===ArrayBuffer?new Uint8Array(g):g.constructor===Array?new Uint8Array(g):g.constructor===String?ht(g):g instanceof Uint8Array?new Uint8Array(g.buffer,g.byteOffset,g.byteLength):new Uint8Array(0),f.h=g,f.l=0,f.j=f.h.length,f.g=f.l}Ct.prototype.reset=function(){this.g=this.l};function ut(f){for(var g=128,_=0,I=0,H=0;4>H&&128<=g;H++)g=f.h[f.g++],_|=(g&127)<<7*H;if(128<=g&&(g=f.h[f.g++],_|=(g&127)<<28,I|=(g&127)>>4),128<=g)for(H=0;5>H&&128<=g;H++)g=f.h[f.g++],I|=(g&127)<<7*H+3;if(128>g)return f=_>>>0,g=I>>>0,(I=g&2147483648)&&(f=~f+1>>>0,g=~g>>>0,f==0&&(g=g+1>>>0)),f=4294967296*g+(f>>>0),I?-f:f;f.m=!0}Ct.prototype.i=function(){var f=this.h,g=f[this.g],_=g&127;return 128>g?(this.g+=1,_):(g=f[this.g+1],_|=(g&127)<<7,128>g?(this.g+=2,_):(g=f[this.g+2],_|=(g&127)<<14,128>g?(this.g+=3,_):(g=f[this.g+3],_|=(g&127)<<21,128>g?(this.g+=4,_):(g=f[this.g+4],_|=(g&15)<<28,128>g?(this.g+=5,_>>>0):(this.g+=5,128<=f[this.g++]&&128<=f[this.g++]&&128<=f[this.g++]&&128<=f[this.g++]&&this.g++,_)))))},Ct.prototype.o=function(){var f=this.h[this.g],g=this.h[this.g+1],_=this.h[this.g+2],I=this.h[this.g+3];return this.g+=4,_=(f<<0|g<<8|_<<16|I<<24)>>>0,f=2*(_>>31)+1,g=_>>>23&255,_&=8388607,g==255?_?NaN:1/0*f:g==0?f*Math.pow(2,-149)*_:f*Math.pow(2,g-150)*(_+Math.pow(2,23))};var k=[];function Zt(){this.g=new Uint8Array(64),this.h=0}Zt.prototype.push=function(f){if(!(this.h+1<this.g.length)){var g=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(g)}this.g[this.h++]=f},Zt.prototype.length=function(){return this.h},Zt.prototype.end=function(){var f=this.g,g=this.h;return this.h=0,Fe(f,0,g)};function nt(f,g){for(;127<g;)f.push(g&127|128),g>>>=7;f.push(g)}function xt(f){var g={},_=g.N===void 0?!1:g.N;this.o={v:g.v===void 0?!1:g.v},this.N=_,g=this.o,k.length?(_=k.pop(),g&&(_.v=g.v),f&&Dt(_,f),f=_):f=new Ct(f,g),this.g=f,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}xt.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function Ae(f){var g=f.g;if((g=g.g==g.j)||(g=f.j)||(g=f.g,g=g.m||0>g.g||g.g>g.j),g)return!1;f.m=f.g.g,g=f.g.i();var _=g&7;return _!=0&&_!=5&&_!=1&&_!=2&&_!=3&&_!=4?(f.j=!0,!1):(f.i=g,f.l=g>>>3,f.h=_,!0)}function rt(f){switch(f.h){case 0:if(f.h!=0)rt(f);else{for(f=f.g;f.h[f.g]&128;)f.g++;f.g++}break;case 1:f.h!=1?rt(f):(f=f.g,f.g+=8);break;case 2:if(f.h!=2)rt(f);else{var g=f.g.i();f=f.g,f.g+=g}break;case 5:f.h!=5?rt(f):(f=f.g,f.g+=4);break;case 3:g=f.l;do{if(!Ae(f)){f.j=!0;break}if(f.h==4){f.l!=g&&(f.j=!0);break}rt(f)}while(!0);break;default:f.j=!0}}function ze(f,g,_){var I=f.g.j,H=f.g.i(),ne=f.g.g+H;if(f.g.j=ne,_(g,f),_=ne-f.g.g,_!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+H+" bytes, instead read "+(H-_)+" bytes, either the data ended unexpectedly or the message misreported its own length");return f.g.g=ne,f.g.j=I,g}function Ve(f){return f.g.o()}function Xt(f){var g=f.g.i();f=f.g;var _=f.g;f.g+=g,f=f.h;var I;if(ee)(I=se)||(I=se=new TextDecoder("utf-8",{fatal:!1})),I=I.decode(f.subarray(_,_+g));else{g=_+g;for(var H=[],ne=null,W,ie,pe;_<g;)W=f[_++],128>W?H.push(W):224>W?_>=g?H.push(65533):(ie=f[_++],194>W||(ie&192)!==128?(_--,H.push(65533)):H.push((W&31)<<6|ie&63)):240>W?_>=g-1?H.push(65533):(ie=f[_++],(ie&192)!==128||W===224&&160>ie||W===237&&160<=ie||((I=f[_++])&192)!==128?(_--,H.push(65533)):H.push((W&15)<<12|(ie&63)<<6|I&63)):244>=W?_>=g-2?H.push(65533):(ie=f[_++],(ie&192)!==128||(W<<28)+(ie-144)>>30||((I=f[_++])&192)!==128||((pe=f[_++])&192)!==128?(_--,H.push(65533)):(W=(W&7)<<18|(ie&63)<<12|(I&63)<<6|pe&63,W-=65536,H.push((W>>10&1023)+55296,(W&1023)+56320))):H.push(65533),8192<=H.length&&(ne=Z(ne,H),H.length=0);I=Z(ne,H)}return I}function L(f,g,_){var I=f.g.i();for(I=f.g.g+I;f.g.g<I;)_.push(g.call(f.g))}function T(f,g){f.h==2?L(f,Ct.prototype.o,g):g.push(Ve(f))}function G(){this.h=[],this.i=0,this.g=new Zt}function te(f,g){g.length!==0&&(f.h.push(g),f.i+=g.length)}function ae(f){var g=f.i+f.g.length();if(g===0)return new Uint8Array(0);g=new Uint8Array(g);for(var _=f.h,I=_.length,H=0,ne=0;ne<I;ne++){var W=_[ne];W.length!==0&&(g.set(W,H),H+=W.length)}return _=f.g,I=_.h,I!==0&&(g.set(_.g.subarray(0,I),H),_.h=0),f.h=[g],g}function K(f,g,_){if(_!=null){nt(f.g,8*g+5),f=f.g;var I=_;I=(_=0>I?1:0)?-I:I,I===0?0<1/I?Qe=Be=0:(Be=0,Qe=2147483648):isNaN(I)?(Be=0,Qe=2147483647):34028234663852886e22<I?(Be=0,Qe=(_<<31|2139095040)>>>0):11754943508222875e-54>I?(I=Math.round(I/Math.pow(2,-149)),Be=0,Qe=(_<<31|I)>>>0):(g=Math.floor(Math.log(I)/Math.LN2),I*=Math.pow(2,-g),I=Math.round(8388608*I),16777216<=I&&++g,Be=0,Qe=(_<<31|g+127<<23|I&8388607)>>>0),_=Qe,f.push(_>>>0&255),f.push(_>>>8&255),f.push(_>>>16&255),f.push(_>>>24&255)}}var De=typeof Uint8Array=="function";function ye(f,g,_){if(f!=null)return typeof f=="object"?De&&f instanceof Uint8Array?_(f):Ne(f,g,_):g(f)}function Ne(f,g,_){if(Array.isArray(f)){for(var I=Array(f.length),H=0;H<f.length;H++)I[H]=ye(f[H],g,_);return Array.isArray(f)&&f.W&&Me(I),I}I={};for(H in f)I[H]=ye(f[H],g,_);return I}function ke(f){return typeof f=="number"?isFinite(f)?f:String(f):f}var ue={W:{value:!0,configurable:!0}};function Me(f){return Array.isArray(f)&&!Object.isFrozen(f)&&Object.defineProperties(f,ue),f}var We;function Te(f,g,_){var I=We;We=null,f||(f=I),I=this.constructor.ca,f||(f=I?[I]:[]),this.j=I?0:-1,this.m=this.g=null,this.h=f;e:{if(I=this.h.length,f=I-1,I&&(I=this.h[f],!(I===null||typeof I!="object"||Array.isArray(I)||De&&I instanceof Uint8Array))){this.l=f-this.j,this.i=I;break e}g!==void 0&&-1<g?(this.l=Math.max(g,f+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(_)for(g=0;g<_.length;g++)f=_[g],f<this.l?(f+=this.j,(I=this.h[f])?Me(I):this.h[f]=ve):(qe(this),(I=this.i[f])?Me(I):this.i[f]=ve)}var ve=Object.freeze(Me([]));function qe(f){var g=f.l+f.j;f.h[g]||(f.i=f.h[g]={})}function U(f,g,_){return g===-1?null:_!==void 0&&_||g>=f.l?f.i?f.i[g]:void 0:f.h[g+f.j]}function xe(f,g){var _=_===void 0?!1:_,I=U(f,g,_);return I==null&&(I=ve),I===ve&&(I=Me([]),X(f,g,I,_)),I}function de(f){var g=xe(f,3);if(f.m||(f.m={}),!f.m[3]){for(var _=0;_<g.length;_++)g[_]=+g[_];f.m[3]=!0}return g}function we(f,g,_){return f=U(f,g),f??_}function ce(f,g,_){return f=U(f,g),f=f==null?f:+f,f??(_===void 0?0:_)}function X(f,g,_,I){I!==void 0&&I||g>=f.l?(qe(f),f.i[g]=_):f.h[g+f.j]=_}function Ie(f,g,_){if(_===-1)return null;if(f.g||(f.g={}),!f.g[_]){var I=U(f,_,!1);I&&(f.g[_]=new g(I))}return f.g[_]}function $e(f,g){f.g||(f.g={});var _=f.g[1];if(!_){var I=xe(f,1);_=[];for(var H=0;H<I.length;H++)_[H]=new g(I[H]);f.g[1]=_}return _}function Pt(f,g,_){var I=I===void 0?!1:I;f.g||(f.g={});var H=_&&tn(_);f.g[g]=_,X(f,g,H,I)}function St(f,g,_,I){var H=$e(f,_);g=g||new _,f=xe(f,1),I!=null?(H.splice(I,0,g),f.splice(I,0,tn(g))):(H.push(g),f.push(tn(g)))}Te.prototype.toJSON=function(){var f=tn(this);return Ne(f,ke,Oe)};function tn(f,g){if(f.g)for(var _ in f.g){var I=f.g[_];if(Array.isArray(I))for(var H=0;H<I.length;H++)I[H]&&tn(I[H]);else I&&tn(I)}return f.h}Te.prototype.toString=function(){return tn(this).toString()};function Xn(f,g){if(f=f.o){te(g,g.g.end());for(var _=0;_<f.length;_++)te(g,f[_])}}function ci(f,g){if(g.h==4)return!1;var _=g.m;return rt(g),g.N||(g=Fe(g.g.h,_,g.g.g),(_=f.o)?_.push(g):f.o=[g]),!0}function Ci(f){Te.call(this,f,-1,ca)}E(Ci,Te),Ci.prototype.getRows=function(){return U(this,1)},Ci.prototype.getCols=function(){return U(this,2)},Ci.prototype.getPackedDataList=function(){return de(this)},Ci.prototype.getLayout=function(){return we(this,4,0)};function Vi(f,g){for(;Ae(g);)switch(g.i){case 8:var _=g.g.i();X(f,1,_);break;case 16:_=g.g.i(),X(f,2,_);break;case 29:case 26:T(g,f.getPackedDataList());break;case 32:_=ut(g.g),X(f,4,_);break;default:if(!ci(f,g))return f}return f}var ca=[3];function ln(f,g){var _=void 0;return new(_||(_=Promise))(function(I,H){function ne(pe){try{ie(g.next(pe))}catch(Re){H(Re)}}function W(pe){try{ie(g.throw(pe))}catch(Re){H(Re)}}function ie(pe){pe.done?I(pe.value):new _(function(Re){Re(pe.value)}).then(ne,W)}ie((g=g.apply(f,void 0)).next())})}function yr(f){Te.call(this,f)}E(yr,Te);function Xs(f,g){for(;Ae(g);)switch(g.i){case 8:var _=g.g.i();X(f,1,_);break;case 21:_=Ve(g),X(f,2,_);break;case 26:_=Xt(g),X(f,3,_);break;case 34:_=Xt(g),X(f,4,_);break;default:if(!ci(f,g))return f}return f}function $s(f){Te.call(this,f,-1,Ys)}E($s,Te),$s.prototype.addClassification=function(f,g){return St(this,f,yr,g),this};var Ys=[1];function Gi(f){Te.call(this,f)}E(Gi,Te);function kl(f,g){for(;Ae(g);)switch(g.i){case 13:var _=Ve(g);X(f,1,_);break;case 21:_=Ve(g),X(f,2,_);break;case 29:_=Ve(g),X(f,3,_);break;case 37:_=Ve(g),X(f,4,_);break;case 45:_=Ve(g),X(f,5,_);break;default:if(!ci(f,g))return f}return f}function Fl(f){Te.call(this,f,-1,od)}E(Fl,Te);function Bl(f){e:{var g=new Fl;for(f=new xt(f);Ae(f);)switch(f.i){case 10:var _=ze(f,new Gi,kl);St(g,_,Gi,void 0);break;default:if(!ci(g,f))break e}}return g}var od=[1];function ua(f){Te.call(this,f)}E(ua,Te);function Wi(f){Te.call(this,f,-1,C)}E(Wi,Te),Wi.prototype.getVertexType=function(){return we(this,1,0)},Wi.prototype.getPrimitiveType=function(){return we(this,2,0)},Wi.prototype.getVertexBufferList=function(){return de(this)},Wi.prototype.getIndexBufferList=function(){return xe(this,4)};function ad(f,g){for(;Ae(g);)switch(g.i){case 8:var _=ut(g.g);X(f,1,_);break;case 16:_=ut(g.g),X(f,2,_);break;case 29:case 26:T(g,f.getVertexBufferList());break;case 32:case 34:_=g;var I=f.getIndexBufferList();_.h==2?L(_,Ct.prototype.i,I):I.push(_.g.i());break;default:if(!ci(f,g))return f}return f}var C=[3,4];function B(f){Te.call(this,f)}E(B,Te),B.prototype.getMesh=function(){return Ie(this,Wi,1)},B.prototype.getPoseTransformMatrix=function(){return Ie(this,Ci,2)};function $(f){e:{var g=new B;for(f=new xt(f);Ae(f);)switch(f.i){case 10:var _=ze(f,new Wi,ad);Pt(g,1,_);break;case 18:_=ze(f,new Ci,Vi),Pt(g,2,_);break;default:if(!ci(g,f))break e}}return g}function q(f,g,_){if(_=f.createShader(_===0?f.VERTEX_SHADER:f.FRAGMENT_SHADER),f.shaderSource(_,g),f.compileShader(_),!f.getShaderParameter(_,f.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+f.getShaderInfoLog(_));return _}function z(f){return $e(f,yr).map(function(g){return{index:we(g,1,0),Y:ce(g,2),label:U(g,3)!=null?we(g,3,""):void 0,displayName:U(g,4)!=null?we(g,4,""):void 0}})}function fe(f){return{x:ce(f,1),y:ce(f,2),z:ce(f,3),visibility:U(f,4)!=null?ce(f,4):void 0}}function Se(f,g){this.h=f,this.g=g,this.l=0}function Le(f,g,_){return Ce(f,g),typeof f.g.canvas.transferToImageBitmap=="function"?Promise.resolve(f.g.canvas.transferToImageBitmap()):_?Promise.resolve(f.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(f.g.canvas):(f.i===void 0&&(f.i=document.createElement("canvas")),new Promise(function(I){f.i.height=f.g.canvas.height,f.i.width=f.g.canvas.width,f.i.getContext("2d",{}).drawImage(f.g.canvas,0,0,f.g.canvas.width,f.g.canvas.height),I(f.i)}))}function Ce(f,g){var _=f.g;if(f.m===void 0){var I=q(_,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),H=q(_,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),ne=_.createProgram();if(_.attachShader(ne,I),_.attachShader(ne,H),_.linkProgram(ne),!_.getProgramParameter(ne,_.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+_.getProgramInfoLog(ne));I=f.m=ne,_.useProgram(I),H=_.getUniformLocation(I,"sampler0"),f.j={I:_.getAttribLocation(I,"aVertex"),H:_.getAttribLocation(I,"aTex"),da:H},f.s=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,f.s),_.enableVertexAttribArray(f.j.I),_.vertexAttribPointer(f.j.I,2,_.FLOAT,!1,0,0),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),_.STATIC_DRAW),_.bindBuffer(_.ARRAY_BUFFER,null),f.o=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,f.o),_.enableVertexAttribArray(f.j.H),_.vertexAttribPointer(f.j.H,2,_.FLOAT,!1,0,0),_.bufferData(_.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),_.STATIC_DRAW),_.bindBuffer(_.ARRAY_BUFFER,null),_.uniform1i(H,0)}I=f.j,_.useProgram(f.m),_.canvas.width=g.width,_.canvas.height=g.height,_.viewport(0,0,g.width,g.height),_.activeTexture(_.TEXTURE0),f.h.bindTexture2d(g.glName),_.enableVertexAttribArray(I.I),_.bindBuffer(_.ARRAY_BUFFER,f.s),_.vertexAttribPointer(I.I,2,_.FLOAT,!1,0,0),_.enableVertexAttribArray(I.H),_.bindBuffer(_.ARRAY_BUFFER,f.o),_.vertexAttribPointer(I.H,2,_.FLOAT,!1,0,0),_.bindFramebuffer(_.DRAW_FRAMEBUFFER?_.DRAW_FRAMEBUFFER:_.FRAMEBUFFER,null),_.clearColor(0,0,0,0),_.clear(_.COLOR_BUFFER_BIT),_.colorMask(!0,!0,!0,!0),_.drawArrays(_.TRIANGLE_FAN,0,4),_.disableVertexAttribArray(I.I),_.disableVertexAttribArray(I.H),_.bindBuffer(_.ARRAY_BUFFER,null),f.h.bindTexture2d(0)}function je(f){this.g=f}var Ye=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function He(f,g){return g+f}function ot(f,g){window[f]=g}function wt(f){var g=document.createElement("script");return g.setAttribute("src",f),g.setAttribute("crossorigin","anonymous"),new Promise(function(_){g.addEventListener("load",function(){_()},!1),g.addEventListener("error",function(){_()},!1),document.body.appendChild(g)})}function Ft(){return ln(this,function f(){return A(f,function(g){switch(g.g){case 1:return g.m=2,S(g,WebAssembly.instantiate(Ye),4);case 4:g.g=3,g.m=0;break;case 2:return g.m=0,g.j=null,g.return(!1);case 3:return g.return(!0)}})})}function Ut(f){if(this.g=f,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=f&&f.locateFile||He,typeof window=="object")var g=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")g=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=g,f.options){g=a(Object.keys(f.options));for(var _=g.next();!_.done;_=g.next()){_=_.value;var I=f.options[_].default;I!==void 0&&(this.j[_]=typeof I=="function"?I():I)}}}t=Ut.prototype,t.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function pt(f,g){return f.g.files===void 0?[]:typeof f.g.files=="function"?f.g.files(g):f.g.files}function Ge(f){return ln(f,function g(){var _=this,I,H,ne,W,ie,pe,Re,Ke,Rt,at,Ze;return A(g,function(Ue){switch(Ue.g){case 1:return I=_,_.R?(H=pt(_,_.j),S(Ue,Ft(),2)):Ue.return();case 2:if(ne=Ue.h,typeof window=="object")return ot("createMediapipeSolutionsWasm",{locateFile:_.locateFile}),ot("createMediapipeSolutionsPackedAssets",{locateFile:_.locateFile}),pe=H.filter(function(Je){return Je.data!==void 0}),Re=H.filter(function(Je){return Je.data===void 0}),Ke=Promise.all(pe.map(function(Je){var st=An(I,Je.url);if(Je.path!==void 0){var dt=Je.path;st=st.then(function(un){return I.overrideFile(dt,un),Promise.resolve(un)})}return st})),Rt=Promise.all(Re.map(function(Je){return Je.simd===void 0||Je.simd&&ne||!Je.simd&&!ne?wt(I.locateFile(Je.url,I.S)):Promise.resolve()})).then(function(){return ln(I,function Je(){var st,dt,un=this;return A(Je,function(It){if(It.g==1)return st=window.createMediapipeSolutionsWasm,dt=window.createMediapipeSolutionsPackedAssets,S(It,st(dt),2);un.h=It.h,It.g=0})})}),at=function(){return ln(I,function Je(){var st=this;return A(Je,function(dt){return st.g.graph&&st.g.graph.url?dt=S(dt,An(st,st.g.graph.url),0):(dt.g=0,dt=void 0),dt})})}(),S(Ue,Promise.all([Rt,Ke,at]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return W=H.filter(function(Je){return Je.simd===void 0||Je.simd&&ne||!Je.simd&&!ne}).map(function(Je){return I.locateFile(Je.url,I.S)}),importScripts.apply(null,l(W)),S(Ue,createMediapipeSolutionsWasm(Module),6);case 6:_.h=Ue.h,_.l=new OffscreenCanvas(1,1),_.h.canvas=_.l,ie=_.h.GL.createContext(_.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),_.h.GL.makeContextCurrent(ie),Ue.g=4;break;case 7:if(_.l=document.createElement("canvas"),Ze=_.l.getContext("webgl2",{}),!Ze&&(Ze=_.l.getContext("webgl",{}),!Ze))return alert("Failed to create WebGL canvas context when passing video frame."),Ue.return();_.D=Ze,_.h.canvas=_.l,_.h.createContext(_.l,!0,!0,{});case 4:_.i=new _.h.SolutionWasm,_.R=!1,Ue.g=0}})})}function nn(f){return ln(f,function g(){var _=this,I,H,ne,W,ie,pe,Re,Ke;return A(g,function(Rt){if(Rt.g==1){if(_.g.graph&&_.g.graph.url&&_.P===_.g.graph.url)return Rt.return();if(_.o=!0,!_.g.graph||!_.g.graph.url){Rt.g=2;return}return _.P=_.g.graph.url,S(Rt,An(_,_.g.graph.url),3)}for(Rt.g!=2&&(I=Rt.h,_.i.loadGraph(I)),H=a(Object.keys(_.B)),ne=H.next();!ne.done;ne=H.next())W=ne.value,_.i.overrideFile(W,_.B[W]);if(_.B={},_.g.listeners)for(ie=a(_.g.listeners),pe=ie.next();!pe.done;pe=ie.next())Re=pe.value,hs(_,Re);Ke=_.j,_.j={},_.setOptions(Ke),Rt.g=0})})}t.reset=function(){return ln(this,function f(){var g=this;return A(f,function(_){g.i&&(g.i.reset(),g.m={},g.s={}),_.g=0})})},t.setOptions=function(f,g){var _=this;if(g=g||this.g.options){for(var I=[],H=[],ne={},W=a(Object.keys(f)),ie=W.next();!ie.done;ne={K:ne.K,L:ne.L},ie=W.next()){var pe=ie.value;pe in this.j&&this.j[pe]===f[pe]||(this.j[pe]=f[pe],ie=g[pe],ie!==void 0&&(ie.onChange&&(ne.K=ie.onChange,ne.L=f[pe],I.push(function(Re){return function(){return ln(_,function Ke(){var Rt,at=this;return A(Ke,function(Ze){if(Ze.g==1)return S(Ze,Re.K(Re.L),2);Rt=Ze.h,Rt===!0&&(at.o=!0),Ze.g=0})})}}(ne))),ie.graphOptionXref&&(pe={valueNumber:ie.type===1?f[pe]:0,valueBoolean:ie.type===0?f[pe]:!1,valueString:ie.type===2?f[pe]:""},ie=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),ie.graphOptionXref),pe),H.push(ie))))}(I.length!==0||H.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(H),this.u=(this.u===void 0?[]:this.u).concat(I))}};function Et(f){return ln(f,function g(){var _=this,I,H,ne,W,ie,pe,Re;return A(g,function(Ke){switch(Ke.g){case 1:if(!_.o)return Ke.return();if(!_.u){Ke.g=2;break}I=a(_.u),H=I.next();case 3:if(H.done){Ke.g=5;break}return ne=H.value,S(Ke,ne(),4);case 4:H=I.next(),Ke.g=3;break;case 5:_.u=void 0;case 2:if(_.A){for(W=new _.h.GraphOptionChangeRequestList,ie=a(_.A),pe=ie.next();!pe.done;pe=ie.next())Re=pe.value,W.push_back(Re);_.i.changeOptions(W),W.delete(),_.A=void 0}_.o=!1,Ke.g=0}})})}t.initialize=function(){return ln(this,function f(){var g=this;return A(f,function(_){return _.g==1?S(_,Ge(g),2):_.g!=3?S(_,nn(g),3):S(_,Et(g),0)})})};function An(f,g){return ln(f,function _(){var I=this,H,ne;return A(_,function(W){return g in I.F?W.return(I.F[g]):(H=I.locateFile(g,""),ne=fetch(H).then(function(ie){return ie.arrayBuffer()}),I.F[g]=ne,W.return(ne))})})}t.overrideFile=function(f,g){this.i?this.i.overrideFile(f,g):this.B[f]=g},t.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},t.send=function(f,g){return ln(this,function _(){var I=this,H,ne,W,ie,pe,Re,Ke,Rt,at;return A(_,function(Ze){switch(Ze.g){case 1:return I.g.inputs?(H=1e3*(g??performance.now()),S(Ze,I.C,2)):Ze.return();case 2:return S(Ze,I.initialize(),3);case 3:for(ne=new I.h.PacketDataList,W=a(Object.keys(f)),ie=W.next();!ie.done;ie=W.next())if(pe=ie.value,Re=I.g.inputs[pe]){e:{var Ue=I,Je=f[pe];switch(Re.type){case"video":var st=Ue.m[Re.stream];if(st||(st=new Se(Ue.h,Ue.D),Ue.m[Re.stream]=st),Ue=st,Ue.l===0&&(Ue.l=Ue.h.createTexture()),typeof HTMLVideoElement<"u"&&Je instanceof HTMLVideoElement){var dt=Je.videoWidth;st=Je.videoHeight}else typeof HTMLImageElement<"u"&&Je instanceof HTMLImageElement?(dt=Je.naturalWidth,st=Je.naturalHeight):(dt=Je.width,st=Je.height);st={glName:Ue.l,width:dt,height:st},dt=Ue.g,dt.canvas.width=st.width,dt.canvas.height=st.height,dt.activeTexture(dt.TEXTURE0),Ue.h.bindTexture2d(Ue.l),dt.texImage2D(dt.TEXTURE_2D,0,dt.RGBA,dt.RGBA,dt.UNSIGNED_BYTE,Je),Ue.h.bindTexture2d(0),Ue=st;break e;case"detections":for(st=Ue.m[Re.stream],st||(st=new je(Ue.h),Ue.m[Re.stream]=st),Ue=st,Ue.data||(Ue.data=new Ue.g.DetectionListData),Ue.data.reset(Je.length),st=0;st<Je.length;++st){dt=Je[st];var un=Ue.data,It=un.setBoundingBox,bn=st,Kt=dt.T,et=new ua;X(et,1,Kt.Z),X(et,2,Kt.$),X(et,3,Kt.height),X(et,4,Kt.width),X(et,5,Kt.rotation),X(et,6,Kt.X);var mt=Kt=new G;K(mt,1,U(et,1)),K(mt,2,U(et,2)),K(mt,3,U(et,3)),K(mt,4,U(et,4)),K(mt,5,U(et,5));var vt=U(et,6);if(vt!=null&&vt!=null){nt(mt.g,48);var lt=mt.g,gt=vt;vt=0>gt,gt=Math.abs(gt);var _t=gt>>>0;for(gt=Math.floor((gt-_t)/4294967296),gt>>>=0,vt&&(gt=~gt>>>0,_t=(~_t>>>0)+1,4294967295<_t&&(_t=0,gt++,4294967295<gt&&(gt=0))),Qe=_t,Be=gt,vt=Qe,_t=Be;0<_t||127<vt;)lt.push(vt&127|128),vt=(vt>>>7|_t<<25)>>>0,_t>>>=7;lt.push(vt)}if(Xn(et,mt),Kt=ae(Kt),It.call(un,bn,Kt),dt.O)for(un=0;un<dt.O.length;++un)et=dt.O[un],mt=!!et.visibility,It=Ue.data,bn=It.addNormalizedLandmark,Kt=st,et=Object.assign(Object.assign({},et),{visibility:mt?et.visibility:0}),mt=new Gi,X(mt,1,et.x),X(mt,2,et.y),X(mt,3,et.z),et.visibility&&X(mt,4,et.visibility),lt=et=new G,K(lt,1,U(mt,1)),K(lt,2,U(mt,2)),K(lt,3,U(mt,3)),K(lt,4,U(mt,4)),K(lt,5,U(mt,5)),Xn(mt,lt),et=ae(et),bn.call(It,Kt,et);if(dt.M)for(un=0;un<dt.M.length;++un){if(It=Ue.data,bn=It.addClassification,Kt=st,et=dt.M[un],mt=new yr,X(mt,2,et.Y),et.index&&X(mt,1,et.index),et.label&&X(mt,3,et.label),et.displayName&&X(mt,4,et.displayName),lt=et=new G,_t=U(mt,1),_t!=null&&_t!=null)if(nt(lt.g,8),vt=lt.g,0<=_t)nt(vt,_t);else{for(gt=0;9>gt;gt++)vt.push(_t&127|128),_t>>=7;vt.push(1)}K(lt,2,U(mt,2)),vt=U(mt,3),vt!=null&&(vt=re(vt),nt(lt.g,26),nt(lt.g,vt.length),te(lt,lt.g.end()),te(lt,vt)),vt=U(mt,4),vt!=null&&(vt=re(vt),nt(lt.g,34),nt(lt.g,vt.length),te(lt,lt.g.end()),te(lt,vt)),Xn(mt,lt),et=ae(et),bn.call(It,Kt,et)}}Ue=Ue.data;break e;default:Ue={}}}switch(Ke=Ue,Rt=Re.stream,Re.type){case"video":ne.pushTexture2d(Object.assign(Object.assign({},Ke),{stream:Rt,timestamp:H}));break;case"detections":at=Ke,at.stream=Rt,at.timestamp=H,ne.pushDetectionList(at);break;default:throw Error("Unknown input config type: '"+Re.type+"'")}}return I.i.send(ne),S(Ze,I.C,4);case 4:ne.delete(),Ze.g=0}})})};function xr(f,g,_){return ln(f,function I(){var H,ne,W,ie,pe,Re,Ke=this,Rt,at,Ze,Ue,Je,st,dt,un;return A(I,function(It){switch(It.g){case 1:if(!_)return It.return(g);for(H={},ne=0,W=a(Object.keys(_)),ie=W.next();!ie.done;ie=W.next())pe=ie.value,Re=_[pe],typeof Re!="string"&&Re.type==="texture"&&g[Re.stream]!==void 0&&++ne;1<ne&&(Ke.G=!1),Rt=a(Object.keys(_)),ie=Rt.next();case 2:if(ie.done){It.g=4;break}if(at=ie.value,Ze=_[at],typeof Ze=="string")return dt=H,un=at,S(It,Cn(Ke,at,g[Ze]),14);if(Ue=g[Ze.stream],Ze.type==="detection_list"){if(Ue){for(var bn=Ue.getRectList(),Kt=Ue.getLandmarksList(),et=Ue.getClassificationsList(),mt=[],vt=0;vt<bn.size();++vt){var lt=bn.get(vt);e:{var gt=new ua;for(lt=new xt(lt);Ae(lt);)switch(lt.i){case 13:var _t=Ve(lt);X(gt,1,_t);break;case 21:_t=Ve(lt),X(gt,2,_t);break;case 29:_t=Ve(lt),X(gt,3,_t);break;case 37:_t=Ve(lt),X(gt,4,_t);break;case 45:_t=Ve(lt),X(gt,5,_t);break;case 48:_t=ut(lt.g),X(gt,6,_t);break;default:if(!ci(gt,lt))break e}}gt={Z:ce(gt,1),$:ce(gt,2),height:ce(gt,3),width:ce(gt,4),rotation:ce(gt,5,0),X:we(gt,6,0)},lt=$e(Bl(Kt.get(vt)),Gi).map(fe);var Ks=et.get(vt);e:for(_t=new $s,Ks=new xt(Ks);Ae(Ks);)switch(Ks.i){case 10:_t.addClassification(ze(Ks,new yr,Xs));break;default:if(!ci(_t,Ks))break e}gt={T:gt,O:lt,M:z(_t)},mt.push(gt)}bn=mt}else bn=[];H[at]=bn,It.g=7;break}if(Ze.type==="proto_list"){if(Ue){for(bn=Array(Ue.size()),Kt=0;Kt<Ue.size();Kt++)bn[Kt]=Ue.get(Kt);Ue.delete()}else bn=[];H[at]=bn,It.g=7;break}if(Ue===void 0){It.g=3;break}if(Ze.type==="float_list"){H[at]=Ue,It.g=7;break}if(Ze.type==="proto"){H[at]=Ue,It.g=7;break}if(Ze.type!=="texture")throw Error("Unknown output config type: '"+Ze.type+"'");return Je=Ke.s[at],Je||(Je=new Se(Ke.h,Ke.D),Ke.s[at]=Je),S(It,Le(Je,Ue,Ke.G),13);case 13:st=It.h,H[at]=st;case 7:Ze.transform&&H[at]&&(H[at]=Ze.transform(H[at])),It.g=3;break;case 14:dt[un]=It.h;case 3:ie=Rt.next(),It.g=2;break;case 4:return It.return(H)}})})}function Cn(f,g,_){return ln(f,function I(){var H=this,ne;return A(I,function(W){return typeof _=="number"||_ instanceof Uint8Array||_ instanceof H.h.Uint8BlobList?W.return(_):_ instanceof H.h.Texture2dDataOut?(ne=H.s[g],ne||(ne=new Se(H.h,H.D),H.s[g]=ne),W.return(Le(ne,_,H.G))):W.return(void 0)})})}function hs(f,g){for(var _=g.name||"$",I=[].concat(l(g.wants)),H=new f.h.StringList,ne=a(g.wants),W=ne.next();!W.done;W=ne.next())H.push_back(W.value);ne=f.h.PacketListener.implement({onResults:function(ie){for(var pe={},Re=0;Re<g.wants.length;++Re)pe[I[Re]]=ie.get(Re);var Ke=f.listeners[_];Ke&&(f.C=xr(f,pe,g.outs).then(function(Rt){Rt=Ke(Rt);for(var at=0;at<g.wants.length;++at){var Ze=pe[I[at]];typeof Ze=="object"&&Ze.hasOwnProperty&&Ze.hasOwnProperty("delete")&&Ze.delete()}Rt&&(f.C=Rt)}))}}),f.i.attachMultiListener(H,ne),H.delete()}t.onResults=function(f,g){this.listeners[g||"$"]=f},V("Solution",Ut),V("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ot(f){f=$(f);var g=f.getMesh();if(!g)return f;var _=new Float32Array(g.getVertexBufferList());g.getVertexBufferList=function(){return _};var I=new Uint32Array(g.getIndexBufferList());return g.getIndexBufferList=function(){return I},f}var On={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(f){return f.map(Ot)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(f){return f.map(function(g){return $e(Bl(g),Gi).map(fe)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},Rn=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],cn=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],pn=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],qs=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Ri=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Bm=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Nx=[].concat(l(Rn),l(cn),l(pn),l(qs),l(Ri),l(Bm));function zm(f){f=f||{},f=Object.assign(Object.assign({},On),f),this.g=new Ut(f)}t=zm.prototype,t.close=function(){return this.g.close(),Promise.resolve()},t.onResults=function(f){this.g.onResults(f)},t.initialize=function(){return ln(this,function f(){var g=this;return A(f,function(_){return S(_,g.g.initialize(),0)})})},t.reset=function(){this.g.reset()},t.send=function(f){return ln(this,function g(){var _=this;return A(g,function(I){return S(I,_.g.send(f),0)})})},t.setOptions=function(f){this.g.setOptions(f)},V("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),V("FaceMesh",zm),V("FACEMESH_LIPS",Rn),V("FACEMESH_LEFT_EYE",cn),V("FACEMESH_LEFT_EYEBROW",pn),V("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),V("FACEMESH_RIGHT_EYE",qs),V("FACEMESH_RIGHT_EYEBROW",Ri),V("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),V("FACEMESH_FACE_OVAL",Bm),V("FACEMESH_CONTOURS",Nx),V("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),V("matrixDataToMatrix",function(f){for(var g=f.getCols(),_=f.getRows(),I=f.getPackedDataList(),H=[],ne=0;ne<_;ne++)H.push(Array(g));for(ne=0;ne<_;ne++)for(var W=0;W<g;W++){var ie=f.getLayout()===1?ne*g+W:W*_+ne;H[ne][W]=I[ie]}return H}),V("VERSION","0.4.1633559619")}).call(ld);function WI({videoRef:t,enabled:e,onResults:n}){const i=J.useRef(null),r=J.useRef(null),[s,o]=J.useState(0),[a,l]=J.useState("Idle");return J.useEffect(()=>{const c=new GI.FaceMesh({locateFile:d=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${d}`});return c.setOptions({maxNumFaces:1,refineLandmarks:!0,minDetectionConfidence:.6,minTrackingConfidence:.6}),c.onResults(d=>{var p;const h=(p=d.multiFaceLandmarks)==null?void 0:p[0];o(h?h.length:0),l(h?"Tracking":"Searching"),n==null||n(d)}),i.current=c,()=>{var d;cancelAnimationFrame(r.current),(d=i.current)==null||d.close(),i.current=null}},[n]),J.useEffect(()=>{if(!e||!t.current||!i.current)return;let c=!1;const d=async()=>{c||!t.current||!i.current||(t.current.readyState>=2&&await i.current.send({image:t.current}),r.current=requestAnimationFrame(d))};return d(),()=>{c=!0,cancelAnimationFrame(r.current)}},[e,t]),{landmarkCount:s,trackingStatus:a}}function jI(t,e,n,i){t.fillStyle="#C2185B";for(const r of e)t.beginPath(),t.arc(r.x*n,r.y*i,1.6,0,Math.PI*2),t.fill()}function Lx(t,e,n,i){const r=t[234],s=t[454],o=t[127]??r,a=t[356]??s,l=t[1]??t[4]??r,c=t[152]??l,d=r.x*e,h=r.y*n,p=s.x*e,v=s.y*n,x=Math.hypot(a.x*e-o.x*e,a.y*n-o.y*n),E=Math.atan2(v-h,p-d);if(i.placement==="eyes"){const y=t[33]??r,S=t[263]??s,M=(y.x+S.x)/2*e,P=(y.y+S.y)/2*n,b=Math.atan2(S.y*n-y.y*n,S.x*e-y.x*e);return[{x:M-e/2,y:n/2-P+x*(i.yOffset??0),drawWidth:Ga(x*.9*i.modelScale,150,330),rotation:-b,mirror:1,holder:"center"}]}if(i.placement==="neck"){const y=c.y*n+x*.24;return[{x:l.x*e-e/2,y:n/2-y,drawWidth:Ga(x*.72*i.modelScale,110,260),rotation:-E*.35,mirror:1,holder:"center"}]}const m=Ga(x*.32*i.modelScale,44,124),u=m*i.yOffset;return[{x:d-e/2,y:n/2-h-u,drawHeight:m,rotation:-E,mirror:-1,holder:"left",crop:"left"},{x:p-e/2,y:n/2-v-u,drawHeight:m,rotation:-E,mirror:1,holder:"right",crop:"right"}]}function Ga(t,e,n){return Math.min(Math.max(t,e),n)}function XI(t,e){return e==="left"?{sx:0,sy:0,sw:t.naturalWidth/2,sh:t.naturalHeight}:e==="right"?{sx:t.naturalWidth/2,sy:0,sw:t.naturalWidth/2,sh:t.naturalHeight}:{sx:0,sy:0,sw:t.naturalWidth,sh:t.naturalHeight}}function $I(t,e,n){const i=XI(e,n.crop),r=i.sw/i.sh,s=n.drawWidth??n.drawHeight*r,o=n.drawHeight??s/r;t.save(),t.translate(n.x,n.y),t.rotate(n.rotation),t.scale(n.mirror,1),t.drawImage(e,i.sx,i.sy,i.sw,i.sh,-s/2,-o/2,s,o),t.restore()}function Uv(){const t=new Pa,e=new ov({color:"#D9A441",metalness:.85,roughness:.22}),n=new ov({color:"#B3164F",metalness:.15,roughness:.14}),i=new Bn(new Ru(9,32,16),n);i.position.y=38,t.add(i);const r=new Bn(new Om(28,3.2,24,80),e);r.position.y=9,t.add(r);const s=new Bn(new id(1.6,1.6,34,16),e);s.position.y=-18,t.add(s);const o=new Bn(new Ru(11,32,16),n);o.position.y=-39,o.scale.set(.78,1.18,.78),t.add(o);const a=new Bn(new Um(11,14,32),e);return a.position.y=-27,a.rotation.x=Math.PI,t.add(a),t.traverse(l=>{l.isMesh&&(l.castShadow=!1,l.receiveShadow=!1)}),t}function YI(t){const e=new HI({canvas:t,alpha:!0,antialias:!0});e.setClearColor(0,0),e.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const n=new K4,i=new km(-480,480,360,-360,-1e3,1e3);i.position.z=500;const r=Uv(),s=Uv();n.add(r,s);const o=new cv(16777215,2.8);o.position.set(140,180,320),n.add(o);const a=new cv(16767462,1.2);return a.position.set(-180,-80,160),n.add(a),n.add(new iC(16777215,1.35)),{renderer:e,scene:n,camera:i,earrings:{left:r,right:s}}}function qI(t,e,n){const{renderer:i,camera:r}=t;i.setSize(e,n,!1),r.left=-e/2,r.right=e/2,r.top=n/2,r.bottom=-n/2,r.updateProjectionMatrix()}function KI(t,e,n){const i=t[234],r=t[454],s=t[33]??i,o=t[263]??r,a=t[1]??t[4]??i,l=Math.max(Math.abs(r.x-i.x),.001),c=(i.x+r.x)/2,d=Math.atan2(r.y*n-i.y*n,r.x*e-i.x*e),h=Ga((a.x-c)/l,-.65,.65),p=Ga((a.y-(s.y+o.y)/2)/l-.24,-.35,.35);return{roll:d,yaw:h,pitch:p}}function JI(t,e,n,i,r){const s=Lx(e,n,i,r),o=KI(e,n,i);for(const a of["left","right"]){const l=t.earrings[a],c=s.find(h=>h.holder===a);if(!c){l.visible=!1;continue}const d=(c.drawHeight??88)/100;l.visible=!0,l.position.set(c.x,c.y,0),l.scale.set(d*c.mirror,d,d),l.rotation.set(o.pitch*.6,o.yaw*c.mirror*.9,c.rotation)}t.renderer.render(t.scene,t.camera)}function ZI({selectedAccessoryId:t,onStatsChange:e}){const n=J.useRef(null),i=J.useRef(null),r=J.useRef(null),s=J.useRef(null),o=J.useRef(null),[a,l]=J.useState("Loading product photo"),c=J.useRef({lastFrameTime:performance.now(),frameCount:0,fps:0}),d=J.useMemo(()=>Ix(t),[t]),{cameraError:h,isCameraReady:p,isStartingCamera:v,startCamera:x,stopCamera:E,switchFacingMode:m,facingMode:u}=VI(n);J.useEffect(()=>{if(!r.current)return;const b=YI(r.current);return s.current=b,()=>{b.renderer.dispose(),b.scene.traverse(R=>{var N,A,w,D;(A=(N=R.geometry)==null?void 0:N.dispose)==null||A.call(N),(D=(w=R.material)==null?void 0:w.dispose)==null||D.call(w)}),s.current=null}},[]),J.useEffect(()=>{let b=!1;const R=new Image;return R.crossOrigin="anonymous",R.decoding="async",o.current=null,l(d.placement==="ears"?"Loading 3D earring model":"Loading product photo"),R.onload=()=>{b||(o.current=R,l(d.placement==="ears"?`${d.name} 3D model active`:`${d.name} product photo active`))},R.onerror=()=>{b||l("Product photo could not load")},R.src=d.tryOnImageUrl??d.thumbnailUrl,()=>{b=!0}},[d]);const y=J.useCallback((b,R,N,A)=>{const w=o.current;w&&(b.save(),b.translate(N/2,A/2),Lx(R,N,A,d).forEach(D=>{$I(b,w,D)}),b.restore())},[d]),S=J.useCallback(b=>{var Z;const R=i.current,N=n.current;if(!R||!N)return;const A=N.videoWidth||960,w=N.videoHeight||720;(R.width!==A||R.height!==w)&&(R.width=A,R.height=w);const D=R.getContext("2d");D.clearRect(0,0,A,w),s.current&&(qI(s.current,A,w),s.current.renderer.clear());const Y=(Z=b.multiFaceLandmarks)==null?void 0:Z[0];if(!Y)return;jI(D,Y,A,w),d.placement==="ears"&&s.current?JI(s.current,Y,A,w,d):y(D,Y,A,w);const V=performance.now();c.current.frameCount+=1,V-c.current.lastFrameTime>=1e3&&(c.current.fps=c.current.frameCount,c.current.frameCount=0,c.current.lastFrameTime=V,e==null||e({fps:c.current.fps,landmarkCount:Y.length,trackingStatus:"Tracking"}))},[e,y,d]),{landmarkCount:M,trackingStatus:P}=WI({videoRef:n,enabled:p,onResults:S});return J.useEffect(()=>(x(),()=>E()),[x,E]),J.useEffect(()=>{e==null||e({fps:c.current.fps,landmarkCount:M,trackingStatus:h?"Camera blocked":P})},[h,M,e,P]),O.jsxs("section",{className:"overflow-hidden rounded-[2rem] border border-rose-100 bg-[#1C1117] p-4 shadow-aura",children:[O.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3 text-white",children:[O.jsxs("div",{children:[O.jsx("p",{className:"font-display text-2xl",children:"Live AR Preview"}),O.jsx("p",{className:"text-sm text-rose-100/80",children:"Facial data is processed only on this device."})]}),O.jsxs("button",{type:"button",onClick:m,className:"rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10",children:["Camera: ",u==="user"?"Front":"Rear"]})]}),O.jsxs("div",{className:"relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-black sm:aspect-video",children:[O.jsx("video",{ref:n,autoPlay:!0,muted:!0,playsInline:!0,className:"absolute inset-0 h-full w-full scale-x-[-1] object-cover"}),O.jsx("canvas",{ref:i,className:"absolute inset-0 h-full w-full scale-x-[-1]"}),O.jsx("canvas",{ref:r,className:"pointer-events-none absolute inset-0 h-full w-full scale-x-[-1]"}),p?O.jsx("div",{className:"absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white",children:a}):null,!p&&!h?O.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/45 px-6 text-center text-white",children:v?"Starting camera...":"Camera is ready to start."}):null,h?O.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/65 px-6 text-center text-white",children:O.jsxs("div",{className:"max-w-md",children:[O.jsx("p",{children:h}),O.jsx("button",{type:"button",onClick:x,className:"mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-aura-primary transition hover:bg-rose-50",children:"Try Again"})]})}):null]})]})}function QI(){const[t,e]=J.useState(!1),[n,i]=J.useState(bu[0].id),[r,s]=J.useState({fps:0,landmarkCount:0,trackingStatus:"Idle"}),o=Ix(n),a=J.useMemo(()=>[{label:"FPS",value:r.fps},{label:"Landmarks",value:r.landmarkCount||0},{label:"Tracking",value:r.trackingStatus},{label:"Accessory",value:o.name}],[o.name,r]);return O.jsxs("main",{className:"mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",children:[O.jsxs("section",{className:"mb-8 rounded-[2rem] bg-white p-8 shadow-aura",children:[O.jsx("p",{className:"mb-3 text-sm uppercase tracking-[0.3em] text-aura-accent",children:"AR Try-On"}),O.jsx("h1",{className:"font-display text-4xl text-aura-primary",children:"Real-time accessory preview with local face tracking"}),O.jsx("p",{className:"mt-4 max-w-3xl text-stone-600",children:"Privacy notice: AuraAR processes facial landmarks only on your device. No images, videos, or landmark points are stored or sent to any server."}),O.jsxs("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:[O.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-4",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:"Target"}),O.jsx("p",{className:"mt-2 font-display text-2xl text-aura-primary",children:"30 FPS"})]}),O.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-4",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:"Processing"}),O.jsx("p",{className:"mt-2 font-display text-2xl text-aura-primary",children:"Local Only"})]}),O.jsxs("div",{className:"rounded-3xl bg-aura-secondary/12 p-4",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:"Current Mode"}),O.jsx("p",{className:"mt-2 font-display text-2xl text-aura-primary",children:"Product Try-On"})]})]}),t?null:O.jsx("button",{type:"button",onClick:()=>e(!0),className:"mt-6 rounded-full bg-aura-primary px-6 py-3 font-semibold text-white",children:"I Understand, Start Camera"})]}),O.jsxs("section",{className:"grid gap-8 xl:grid-cols-[minmax(0,1.6fr)_380px]",children:[O.jsxs("div",{className:"space-y-6",children:[t?O.jsx(ZI,{selectedAccessoryId:n,onStatsChange:s}):O.jsx("div",{className:"flex min-h-[540px] items-center justify-center rounded-[2rem] border border-dashed border-rose-200 bg-white p-8 text-center shadow-aura",children:O.jsxs("div",{children:[O.jsx("h2",{className:"font-display text-2xl text-aura-primary",children:"Camera permission required"}),O.jsx("p",{className:"mt-3 max-w-lg text-stone-600",children:"Accept the privacy notice to enable the live try-on view. The webcam is only activated on this page."})]})}),O.jsx("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:a.map(l=>O.jsxs("article",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[O.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-aura-accent",children:l.label}),O.jsx("p",{className:"mt-3 font-display text-3xl text-aura-charcoal",children:l.value})]},l.label))})]}),O.jsxs("div",{className:"space-y-6",children:[O.jsx(LA,{accessories:bu,selectedAccessoryId:n,onSelectAccessory:i}),O.jsxs("section",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[O.jsx("h2",{className:"font-display text-2xl text-aura-charcoal",children:"Current scope"}),O.jsxs("ul",{className:"mt-4 space-y-2 text-sm text-stone-600",children:[O.jsx("li",{children:"Webcam access with front and rear camera toggle"}),O.jsx("li",{children:"468 MediaPipe face landmarks drawn on top of the video"}),O.jsx("li",{children:"Three.js 3D earrings anchored to ear-side face landmarks"}),O.jsx("li",{children:"Head roll, yaw, and pitch estimates mapped to the earring model"}),O.jsx("li",{children:"Product photo fallback for glasses and necklace placements"}),O.jsx("li",{children:"Live FPS counter for quick performance feedback"})]})]}),O.jsxs("section",{className:"rounded-3xl border border-rose-100 bg-white p-5 shadow-aura",children:[O.jsx("h2",{className:"font-display text-2xl text-aura-charcoal",children:"Why this matters"}),O.jsx("p",{className:"mt-4 text-sm leading-6 text-stone-600",children:"This page is the core experimental artifact of the thesis. It demonstrates how responsive AR feedback, accessory fit visualization, and local privacy handling can influence confidence and purchase intention in online accessory shopping."})]})]})]})]})}function eL(){return O.jsx(_A,{children:O.jsxs("div",{className:"min-h-screen bg-aura-cream",children:[O.jsx(xA,{}),O.jsxs(ZE,{children:[O.jsx(br,{path:"/",element:O.jsx(PA,{})}),O.jsx(br,{path:"/shop",element:O.jsx(bA,{})}),O.jsx(br,{path:"/tryon",element:O.jsx(QI,{})}),O.jsx(br,{path:"/about",element:O.jsx(wA,{})}),O.jsx(br,{path:"/auth",element:O.jsx(TA,{})}),O.jsx(br,{path:"/profile",element:O.jsx(SA,{children:O.jsx(IA,{})})}),O.jsx(br,{path:"*",element:O.jsx(ry,{to:"/tryon",replace:!0})})]})]})})}Ef.createRoot(document.getElementById("root")).render(O.jsx(Xv.StrictMode,{children:O.jsx(o3,{children:O.jsx(eL,{})})}));
