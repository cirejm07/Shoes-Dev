const Sy=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}};Sy();function Gr(t,e){const a=Object.create(null),n=t.split(",");for(let r=0;r<n.length;r++)a[n[r]]=!0;return e?r=>!!a[r.toLowerCase()]:r=>!!a[r]}const xy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ny=Gr(xy);function QC(t){return!!t||t===""}function Kr(t){if(p1(t)){const e={};for(let a=0;a<t.length;a++){const n=t[a],r=M2(n)?Ey(n):Kr(n);if(r)for(const i in r)e[i]=r[i]}return e}else{if(M2(t))return t;if(i2(t))return t}}const _y=/;(?![^(]*\))/g,Ay=/:(.+)/;function Ey(t){const e={};return t.split(_y).forEach(a=>{if(a){const n=a.split(Ay);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Yr(t){let e="";if(M2(t))e=t;else if(p1(t))for(let a=0;a<t.length;a++){const n=Yr(t[a]);n&&(e+=n+" ")}else if(i2(t))for(const a in t)t[a]&&(e+=a+" ");return e.trim()}function ky(t,e){if(t.length!==e.length)return!1;let a=!0;for(let n=0;a&&n<t.length;n++)a=y0(t[n],e[n]);return a}function y0(t,e){if(t===e)return!0;let a=co(t),n=co(e);if(a||n)return a&&n?t.getTime()===e.getTime():!1;if(a=e0(t),n=e0(e),a||n)return t===e;if(a=p1(t),n=p1(e),a||n)return a&&n?ky(t,e):!1;if(a=i2(t),n=i2(e),a||n){if(!a||!n)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const c in t){const s=t.hasOwnProperty(c),o=e.hasOwnProperty(c);if(s&&!o||!s&&o||!y0(t[c],e[c]))return!1}}return String(t)===String(e)}function Xr(t,e){return t.findIndex(a=>y0(a,e))}const On=t=>M2(t)?t:t==null?"":p1(t)||i2(t)&&(t.toString===ef||!A1(t.toString))?JSON.stringify(t,JC,2):String(t),JC=(t,e)=>e&&e.__v_isRef?JC(t,e.value):p6(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[n,r])=>(a[`${n} =>`]=r,a),{})}:q6(e)?{[`Set(${e.size})`]:[...e.values()]}:i2(e)&&!p1(e)&&!tf(e)?String(e):e,Y1={},m6=[],b3=()=>{},Ty=()=>!1,Iy=/^on[^a-z]/,fe=t=>Iy.test(t),Qr=t=>t.startsWith("onUpdate:"),W2=Object.assign,Jr=(t,e)=>{const a=t.indexOf(e);a>-1&&t.splice(a,1)},Py=Object.prototype.hasOwnProperty,B1=(t,e)=>Py.call(t,e),p1=Array.isArray,p6=t=>w0(t)==="[object Map]",q6=t=>w0(t)==="[object Set]",co=t=>w0(t)==="[object Date]",A1=t=>typeof t=="function",M2=t=>typeof t=="string",e0=t=>typeof t=="symbol",i2=t=>t!==null&&typeof t=="object",ZC=t=>i2(t)&&A1(t.then)&&A1(t.catch),ef=Object.prototype.toString,w0=t=>ef.call(t),Dy=t=>w0(t).slice(8,-1),tf=t=>w0(t)==="[object Object]",Zr=t=>M2(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,C9=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ue=t=>{const e=Object.create(null);return a=>e[a]||(e[a]=t(a))},Ry=/-(\w)/g,q3=ue(t=>t.replace(Ry,(e,a)=>a?a.toUpperCase():"")),Oy=/\B([A-Z])/g,j6=ue(t=>t.replace(Oy,"-$1").toLowerCase()),he=ue(t=>t.charAt(0).toUpperCase()+t.slice(1)),fn=ue(t=>t?`on${he(t)}`:""),t0=(t,e)=>!Object.is(t,e),f9=(t,e)=>{for(let a=0;a<t.length;a++)t[a](e)},N9=(t,e,a)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:a})},_9=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let so;const By=()=>so||(so=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let P3;class Fy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&P3&&(this.parent=P3,this.index=(P3.scopes||(P3.scopes=[])).push(this)-1)}run(e){if(this.active){const a=P3;try{return P3=this,e()}finally{P3=a}}}on(){P3=this}off(){P3=this.parent}stop(e){if(this.active){let a,n;for(a=0,n=this.effects.length;a<n;a++)this.effects[a].stop();for(a=0,n=this.cleanups.length;a<n;a++)this.cleanups[a]();if(this.scopes)for(a=0,n=this.scopes.length;a<n;a++)this.scopes[a].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Uy(t,e=P3){e&&e.active&&e.effects.push(t)}const ei=t=>{const e=new Set(t);return e.w=0,e.n=0,e},af=t=>(t.w&K4)>0,nf=t=>(t.n&K4)>0,$y=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=K4},qy=t=>{const{deps:e}=t;if(e.length){let a=0;for(let n=0;n<e.length;n++){const r=e[n];af(r)&&!nf(r)?r.delete(t):e[a++]=r,r.w&=~K4,r.n&=~K4}e.length=a}},Bn=new WeakMap;let x8=0,K4=1;const Fn=30;let L3;const H5=Symbol(""),Un=Symbol("");class ti{constructor(e,a=null,n){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,Uy(this,n)}run(){if(!this.active)return this.fn();let e=L3,a=U4;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=L3,L3=this,U4=!0,K4=1<<++x8,x8<=Fn?$y(this):oo(this),this.fn()}finally{x8<=Fn&&qy(this),K4=1<<--x8,L3=this.parent,U4=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){L3===this?this.deferStop=!0:this.active&&(oo(this),this.onStop&&this.onStop(),this.active=!1)}}function oo(t){const{deps:e}=t;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(t);e.length=0}}let U4=!0;const rf=[];function W6(){rf.push(U4),U4=!1}function G6(){const t=rf.pop();U4=t===void 0?!0:t}function r3(t,e,a){if(U4&&L3){let n=Bn.get(t);n||Bn.set(t,n=new Map);let r=n.get(a);r||n.set(a,r=ei()),cf(r)}}function cf(t,e){let a=!1;x8<=Fn?nf(t)||(t.n|=K4,a=!af(t)):a=!t.has(L3),a&&(t.add(L3),L3.deps.push(t))}function s4(t,e,a,n,r,i){const c=Bn.get(t);if(!c)return;let s=[];if(e==="clear")s=[...c.values()];else if(a==="length"&&p1(t))c.forEach((o,u)=>{(u==="length"||u>=n)&&s.push(o)});else switch(a!==void 0&&s.push(c.get(a)),e){case"add":p1(t)?Zr(a)&&s.push(c.get("length")):(s.push(c.get(H5)),p6(t)&&s.push(c.get(Un)));break;case"delete":p1(t)||(s.push(c.get(H5)),p6(t)&&s.push(c.get(Un)));break;case"set":p6(t)&&s.push(c.get(H5));break}if(s.length===1)s[0]&&$n(s[0]);else{const o=[];for(const u of s)u&&o.push(...u);$n(ei(o))}}function $n(t,e){const a=p1(t)?t:[...t];for(const n of a)n.computed&&lo(n);for(const n of a)n.computed||lo(n)}function lo(t,e){(t!==L3||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const jy=Gr("__proto__,__v_isRef,__isVue"),sf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(e0)),Wy=ai(),Gy=ai(!1,!0),Ky=ai(!0),Co=Yy();function Yy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...a){const n=j1(this);for(let i=0,c=this.length;i<c;i++)r3(n,"get",i+"");const r=n[e](...a);return r===-1||r===!1?n[e](...a.map(j1)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...a){W6();const n=j1(this)[e].apply(this,a);return G6(),n}}),t}function ai(t=!1,e=!1){return function(n,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?fw:uf:e?ff:Cf).get(n))return n;const c=p1(n);if(!t&&c&&B1(Co,r))return Reflect.get(Co,r,i);const s=Reflect.get(n,r,i);return(e0(r)?sf.has(r):jy(r))||(t||r3(n,"get",r),e)?s:I2(s)?c&&Zr(r)?s:s.value:i2(s)?t?hf(s):S0(s):s}}const Xy=of(),Qy=of(!0);function of(t=!1){return function(a,n,r,i){let c=a[n];if(a0(c)&&I2(c)&&!I2(r))return!1;if(!t&&!a0(r)&&(qn(r)||(r=j1(r),c=j1(c)),!p1(a)&&I2(c)&&!I2(r)))return c.value=r,!0;const s=p1(a)&&Zr(n)?Number(n)<a.length:B1(a,n),o=Reflect.set(a,n,r,i);return a===j1(i)&&(s?t0(r,c)&&s4(a,"set",n,r):s4(a,"add",n,r)),o}}function Jy(t,e){const a=B1(t,e);t[e];const n=Reflect.deleteProperty(t,e);return n&&a&&s4(t,"delete",e,void 0),n}function Zy(t,e){const a=Reflect.has(t,e);return(!e0(e)||!sf.has(e))&&r3(t,"has",e),a}function ew(t){return r3(t,"iterate",p1(t)?"length":H5),Reflect.ownKeys(t)}const lf={get:Wy,set:Xy,deleteProperty:Jy,has:Zy,ownKeys:ew},tw={get:Ky,set(t,e){return!0},deleteProperty(t,e){return!0}},aw=W2({},lf,{get:Gy,set:Qy}),ni=t=>t,de=t=>Reflect.getPrototypeOf(t);function Y7(t,e,a=!1,n=!1){t=t.__v_raw;const r=j1(t),i=j1(e);a||(e!==i&&r3(r,"get",e),r3(r,"get",i));const{has:c}=de(r),s=n?ni:a?ci:n0;if(c.call(r,e))return s(t.get(e));if(c.call(r,i))return s(t.get(i));t!==r&&t.get(e)}function X7(t,e=!1){const a=this.__v_raw,n=j1(a),r=j1(t);return e||(t!==r&&r3(n,"has",t),r3(n,"has",r)),t===r?a.has(t):a.has(t)||a.has(r)}function Q7(t,e=!1){return t=t.__v_raw,!e&&r3(j1(t),"iterate",H5),Reflect.get(t,"size",t)}function fo(t){t=j1(t);const e=j1(this);return de(e).has.call(e,t)||(e.add(t),s4(e,"add",t,t)),this}function uo(t,e){e=j1(e);const a=j1(this),{has:n,get:r}=de(a);let i=n.call(a,t);i||(t=j1(t),i=n.call(a,t));const c=r.call(a,t);return a.set(t,e),i?t0(e,c)&&s4(a,"set",t,e):s4(a,"add",t,e),this}function ho(t){const e=j1(this),{has:a,get:n}=de(e);let r=a.call(e,t);r||(t=j1(t),r=a.call(e,t)),n&&n.call(e,t);const i=e.delete(t);return r&&s4(e,"delete",t,void 0),i}function mo(){const t=j1(this),e=t.size!==0,a=t.clear();return e&&s4(t,"clear",void 0,void 0),a}function J7(t,e){return function(n,r){const i=this,c=i.__v_raw,s=j1(c),o=e?ni:t?ci:n0;return!t&&r3(s,"iterate",H5),c.forEach((u,h)=>n.call(r,o(u),o(h),i))}}function Z7(t,e,a){return function(...n){const r=this.__v_raw,i=j1(r),c=p6(i),s=t==="entries"||t===Symbol.iterator&&c,o=t==="keys"&&c,u=r[t](...n),h=a?ni:e?ci:n0;return!e&&r3(i,"iterate",o?Un:H5),{next(){const{value:p,done:v}=u.next();return v?{value:p,done:v}:{value:s?[h(p[0]),h(p[1])]:h(p),done:v}},[Symbol.iterator](){return this}}}}function N4(t){return function(...e){return t==="delete"?!1:this}}function nw(){const t={get(i){return Y7(this,i)},get size(){return Q7(this)},has:X7,add:fo,set:uo,delete:ho,clear:mo,forEach:J7(!1,!1)},e={get(i){return Y7(this,i,!1,!0)},get size(){return Q7(this)},has:X7,add:fo,set:uo,delete:ho,clear:mo,forEach:J7(!1,!0)},a={get(i){return Y7(this,i,!0)},get size(){return Q7(this,!0)},has(i){return X7.call(this,i,!0)},add:N4("add"),set:N4("set"),delete:N4("delete"),clear:N4("clear"),forEach:J7(!0,!1)},n={get(i){return Y7(this,i,!0,!0)},get size(){return Q7(this,!0)},has(i){return X7.call(this,i,!0)},add:N4("add"),set:N4("set"),delete:N4("delete"),clear:N4("clear"),forEach:J7(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Z7(i,!1,!1),a[i]=Z7(i,!0,!1),e[i]=Z7(i,!1,!0),n[i]=Z7(i,!0,!0)}),[t,a,e,n]}const[rw,iw,cw,sw]=nw();function ri(t,e){const a=e?t?sw:cw:t?iw:rw;return(n,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?n:Reflect.get(B1(a,r)&&r in n?a:n,r,i)}const ow={get:ri(!1,!1)},lw={get:ri(!1,!0)},Cw={get:ri(!0,!1)},Cf=new WeakMap,ff=new WeakMap,uf=new WeakMap,fw=new WeakMap;function uw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hw(t){return t.__v_skip||!Object.isExtensible(t)?0:uw(Dy(t))}function S0(t){return a0(t)?t:ii(t,!1,lf,ow,Cf)}function dw(t){return ii(t,!1,aw,lw,ff)}function hf(t){return ii(t,!0,tw,Cw,uf)}function ii(t,e,a,n,r){if(!i2(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const c=hw(t);if(c===0)return t;const s=new Proxy(t,c===2?n:a);return r.set(t,s),s}function v6(t){return a0(t)?v6(t.__v_raw):!!(t&&t.__v_isReactive)}function a0(t){return!!(t&&t.__v_isReadonly)}function qn(t){return!!(t&&t.__v_isShallow)}function df(t){return v6(t)||a0(t)}function j1(t){const e=t&&t.__v_raw;return e?j1(e):t}function mf(t){return N9(t,"__v_skip",!0),t}const n0=t=>i2(t)?S0(t):t,ci=t=>i2(t)?hf(t):t;function pf(t){U4&&L3&&(t=j1(t),cf(t.dep||(t.dep=ei())))}function vf(t,e){t=j1(t),t.dep&&$n(t.dep)}function I2(t){return!!(t&&t.__v_isRef===!0)}function e4(t){return gf(t,!1)}function mw(t){return gf(t,!0)}function gf(t,e){return I2(t)?t:new pw(t,e)}class pw{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:j1(e),this._value=a?e:n0(e)}get value(){return pf(this),this._value}set value(e){e=this.__v_isShallow?e:j1(e),t0(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:n0(e),vf(this))}}function g6(t){return I2(t)?t.value:t}const vw={get:(t,e,a)=>g6(Reflect.get(t,e,a)),set:(t,e,a,n)=>{const r=t[e];return I2(r)&&!I2(a)?(r.value=a,!0):Reflect.set(t,e,a,n)}};function Lf(t){return v6(t)?t:new Proxy(t,vw)}class gw{constructor(e,a,n,r){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ti(e,()=>{this._dirty||(this._dirty=!0,vf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=j1(this);return pf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Lw(t,e,a=!1){let n,r;const i=A1(t);return i?(n=t,r=b3):(n=t.get,r=t.set),new gw(n,r,i||!r,a)}function $4(t,e,a,n){let r;try{r=n?t(...n):t()}catch(i){me(i,e,a)}return r}function y3(t,e,a,n){if(A1(t)){const i=$4(t,e,a,n);return i&&ZC(i)&&i.catch(c=>{me(c,e,a)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(y3(t[i],e,a,n));return r}function me(t,e,a,n=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const c=e.proxy,s=a;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,c,s)===!1)return}i=i.parent}const o=e.appContext.config.errorHandler;if(o){$4(o,null,10,[t,c,s]);return}}zw(t,a,r,n)}function zw(t,e,a,n=!0){console.error(t)}let A9=!1,jn=!1;const n3=[];let t4=0;const P8=[];let N8=null,c6=0;const D8=[];let T4=null,s6=0;const zf=Promise.resolve();let si=null,Wn=null;function Mf(t){const e=si||zf;return t?e.then(this?t.bind(this):t):e}function Mw(t){let e=t4+1,a=n3.length;for(;e<a;){const n=e+a>>>1;r0(n3[n])<t?e=n+1:a=n}return e}function Hf(t){(!n3.length||!n3.includes(t,A9&&t.allowRecurse?t4+1:t4))&&t!==Wn&&(t.id==null?n3.push(t):n3.splice(Mw(t.id),0,t),Vf())}function Vf(){!A9&&!jn&&(jn=!0,si=zf.then(wf))}function Hw(t){const e=n3.indexOf(t);e>t4&&n3.splice(e,1)}function bf(t,e,a,n){p1(t)?a.push(...t):(!e||!e.includes(t,t.allowRecurse?n+1:n))&&a.push(t),Vf()}function Vw(t){bf(t,N8,P8,c6)}function bw(t){bf(t,T4,D8,s6)}function pe(t,e=null){if(P8.length){for(Wn=e,N8=[...new Set(P8)],P8.length=0,c6=0;c6<N8.length;c6++)N8[c6]();N8=null,c6=0,Wn=null,pe(t,e)}}function yf(t){if(pe(),D8.length){const e=[...new Set(D8)];if(D8.length=0,T4){T4.push(...e);return}for(T4=e,T4.sort((a,n)=>r0(a)-r0(n)),s6=0;s6<T4.length;s6++)T4[s6]();T4=null,s6=0}}const r0=t=>t.id==null?1/0:t.id;function wf(t){jn=!1,A9=!0,pe(t),n3.sort((a,n)=>r0(a)-r0(n));const e=b3;try{for(t4=0;t4<n3.length;t4++){const a=n3[t4];a&&a.active!==!1&&$4(a,null,14)}}finally{t4=0,n3.length=0,yf(),A9=!1,si=null,(n3.length||P8.length||D8.length)&&wf(t)}}function yw(t,e,...a){if(t.isUnmounted)return;const n=t.vnode.props||Y1;let r=a;const i=e.startsWith("update:"),c=i&&e.slice(7);if(c&&c in n){const h=`${c==="modelValue"?"model":c}Modifiers`,{number:p,trim:v}=n[h]||Y1;v&&(r=a.map(L=>L.trim())),p&&(r=a.map(_9))}let s,o=n[s=fn(e)]||n[s=fn(q3(e))];!o&&i&&(o=n[s=fn(j6(e))]),o&&y3(o,t,6,r);const u=n[s+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,y3(u,t,6,r)}}function Sf(t,e,a=!1){const n=e.emitsCache,r=n.get(t);if(r!==void 0)return r;const i=t.emits;let c={},s=!1;if(!A1(t)){const o=u=>{const h=Sf(u,e,!0);h&&(s=!0,W2(c,h))};!a&&e.mixins.length&&e.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!i&&!s?(n.set(t,null),null):(p1(i)?i.forEach(o=>c[o]=null):W2(c,i),n.set(t,c),c)}function ve(t,e){return!t||!fe(e)?!1:(e=e.slice(2).replace(/Once$/,""),B1(t,e[0].toLowerCase()+e.slice(1))||B1(t,j6(e))||B1(t,e))}let M3=null,ge=null;function E9(t){const e=M3;return M3=t,ge=t&&t.type.__scopeId||null,e}function oi(t){ge=t}function li(){ge=null}function w2(t,e=M3,a){if(!e||t._n)return t;const n=(...r)=>{n._d&&yo(-1);const i=E9(e),c=t(...r);return E9(i),n._d&&yo(1),c};return n._n=!0,n._c=!0,n._d=!0,n}function un(t){const{type:e,vnode:a,proxy:n,withProxy:r,props:i,propsOptions:[c],slots:s,attrs:o,emit:u,render:h,renderCache:p,data:v,setupState:L,ctx:w,inheritAttrs:E}=t;let x,y;const A=E9(t);try{if(a.shapeFlag&4){const F=r||n;x=D3(h.call(F,F,p,i,L,v,w)),y=o}else{const F=e;x=D3(F.length>1?F(i,{attrs:o,slots:s,emit:u}):F(i,null)),y=e.props?o:ww(o)}}catch(F){O8.length=0,me(F,t,1),x=_1(S5)}let B=x;if(y&&E!==!1){const F=Object.keys(y),{shapeFlag:Q}=B;F.length&&Q&7&&(c&&F.some(Qr)&&(y=Sw(y,c)),B=b6(B,y))}return a.dirs&&(B=b6(B),B.dirs=B.dirs?B.dirs.concat(a.dirs):a.dirs),a.transition&&(B.transition=a.transition),x=B,E9(A),x}const ww=t=>{let e;for(const a in t)(a==="class"||a==="style"||fe(a))&&((e||(e={}))[a]=t[a]);return e},Sw=(t,e)=>{const a={};for(const n in t)(!Qr(n)||!(n.slice(9)in e))&&(a[n]=t[n]);return a};function xw(t,e,a){const{props:n,children:r,component:i}=t,{props:c,children:s,patchFlag:o}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return n?po(n,c,u):!!c;if(o&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const v=h[p];if(c[v]!==n[v]&&!ve(u,v))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:n===c?!1:n?c?po(n,c,u):!0:!!c;return!1}function po(t,e,a){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let r=0;r<n.length;r++){const i=n[r];if(e[i]!==t[i]&&!ve(a,i))return!0}return!1}function Nw({vnode:t,parent:e},a){for(;e&&e.subTree===t;)(t=e.vnode).el=a,e=e.parent}const _w=t=>t.__isSuspense;function Aw(t,e){e&&e.pendingBranch?p1(t)?e.effects.push(...t):e.effects.push(t):bw(t)}function u9(t,e){if(x2){let a=x2.provides;const n=x2.parent&&x2.parent.provides;n===a&&(a=x2.provides=Object.create(n)),a[t]=e}}function O3(t,e,a=!1){const n=x2||M3;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return a&&A1(e)?e.call(n.proxy):e}}const vo={};function R8(t,e,a){return xf(t,e,a)}function xf(t,e,{immediate:a,deep:n,flush:r,onTrack:i,onTrigger:c}=Y1){const s=x2;let o,u=!1,h=!1;if(I2(t)?(o=()=>t.value,u=qn(t)):v6(t)?(o=()=>t,n=!0):p1(t)?(h=!0,u=t.some(y=>v6(y)||qn(y)),o=()=>t.map(y=>{if(I2(y))return y.value;if(v6(y))return v5(y);if(A1(y))return $4(y,s,2)})):A1(t)?e?o=()=>$4(t,s,2):o=()=>{if(!(s&&s.isUnmounted))return p&&p(),y3(t,s,3,[v])}:o=b3,e&&n){const y=o;o=()=>v5(y())}let p,v=y=>{p=x.onStop=()=>{$4(y,s,4)}};if(c0)return v=b3,e?a&&y3(e,s,3,[o(),h?[]:void 0,v]):o(),b3;let L=h?[]:vo;const w=()=>{if(!!x.active)if(e){const y=x.run();(n||u||(h?y.some((A,B)=>t0(A,L[B])):t0(y,L)))&&(p&&p(),y3(e,s,3,[y,L===vo?void 0:L,v]),L=y)}else x.run()};w.allowRecurse=!!e;let E;r==="sync"?E=w:r==="post"?E=()=>Y2(w,s&&s.suspense):E=()=>Vw(w);const x=new ti(o,E);return e?a?w():L=x.run():r==="post"?Y2(x.run.bind(x),s&&s.suspense):x.run(),()=>{x.stop(),s&&s.scope&&Jr(s.scope.effects,x)}}function Ew(t,e,a){const n=this.proxy,r=M2(t)?t.includes(".")?Nf(n,t):()=>n[t]:t.bind(n,n);let i;A1(e)?i=e:(i=e.handler,a=e);const c=x2;y6(this);const s=xf(r,i.bind(n),a);return c?y6(c):V5(),s}function Nf(t,e){const a=e.split(".");return()=>{let n=t;for(let r=0;r<a.length&&n;r++)n=n[a[r]];return n}}function v5(t,e){if(!i2(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),I2(t))v5(t.value,e);else if(p1(t))for(let a=0;a<t.length;a++)v5(t[a],e);else if(q6(t)||p6(t))t.forEach(a=>{v5(a,e)});else if(tf(t))for(const a in t)v5(t[a],e);return t}function x0(t){return A1(t)?{setup:t,name:t.name}:t}const h9=t=>!!t.type.__asyncLoader,_f=t=>t.type.__isKeepAlive;function kw(t,e){Af(t,"a",e)}function Tw(t,e){Af(t,"da",e)}function Af(t,e,a=x2){const n=t.__wdc||(t.__wdc=()=>{let r=a;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Le(e,n,a),a){let r=a.parent;for(;r&&r.parent;)_f(r.parent.vnode)&&Iw(n,e,a,r),r=r.parent}}function Iw(t,e,a,n){const r=Le(e,t,n,!0);kf(()=>{Jr(n[e],r)},a)}function Le(t,e,a=x2,n=!1){if(a){const r=a[t]||(a[t]=[]),i=e.__weh||(e.__weh=(...c)=>{if(a.isUnmounted)return;W6(),y6(a);const s=y3(e,a,t,c);return V5(),G6(),s});return n?r.unshift(i):r.push(i),i}}const m4=t=>(e,a=x2)=>(!c0||t==="sp")&&Le(t,e,a),Ci=m4("bm"),Ef=m4("m"),Pw=m4("bu"),Dw=m4("u"),Rw=m4("bum"),kf=m4("um"),Ow=m4("sp"),Bw=m4("rtg"),Fw=m4("rtc");function Uw(t,e=x2){Le("ec",t,e)}function mh1(t,e){const a=M3;if(a===null)return t;const n=Me(a)||a.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[c,s,o,u=Y1]=e[i];A1(c)&&(c={mounted:c,updated:c}),c.deep&&v5(s),r.push({dir:c,instance:n,value:s,oldValue:void 0,arg:o,modifiers:u})}return t}function u5(t,e,a,n){const r=t.dirs,i=e&&e.dirs;for(let c=0;c<r.length;c++){const s=r[c];i&&(s.oldValue=i[c].value);let o=s.dir[n];o&&(W6(),y3(o,a,8,[t.el,s,t,e]),G6())}}const Tf="components";function Q2(t,e){return qw(Tf,t,!0,e)||t}const $w=Symbol();function qw(t,e,a=!0,n=!1){const r=M3||x2;if(r){const i=r.type;if(t===Tf){const s=MS(i,!1);if(s&&(s===e||s===q3(e)||s===he(q3(e))))return i}const c=go(r[t]||i[t],e)||go(r.appContext[t],e);return!c&&n?i:c}}function go(t,e){return t&&(t[e]||t[q3(e)]||t[he(q3(e))])}function jw(t,e,a,n){let r;const i=a&&a[n];if(p1(t)||M2(t)){r=new Array(t.length);for(let c=0,s=t.length;c<s;c++)r[c]=e(t[c],c,void 0,i&&i[c])}else if(typeof t=="number"){r=new Array(t);for(let c=0;c<t;c++)r[c]=e(c+1,c,void 0,i&&i[c])}else if(i2(t))if(t[Symbol.iterator])r=Array.from(t,(c,s)=>e(c,s,void 0,i&&i[s]));else{const c=Object.keys(t);r=new Array(c.length);for(let s=0,o=c.length;s<o;s++){const u=c[s];r[s]=e(t[u],u,s,i&&i[s])}}else r=[];return a&&(a[n]=r),r}const Gn=t=>t?Gf(t)?Me(t)||t.proxy:Gn(t.parent):null,k9=W2(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gn(t.parent),$root:t=>Gn(t.root),$emit:t=>t.emit,$options:t=>Pf(t),$forceUpdate:t=>t.f||(t.f=()=>Hf(t.update)),$nextTick:t=>t.n||(t.n=Mf.bind(t.proxy)),$watch:t=>Ew.bind(t)}),Ww={get({_:t},e){const{ctx:a,setupState:n,data:r,props:i,accessCache:c,type:s,appContext:o}=t;let u;if(e[0]!=="$"){const L=c[e];if(L!==void 0)switch(L){case 1:return n[e];case 2:return r[e];case 4:return a[e];case 3:return i[e]}else{if(n!==Y1&&B1(n,e))return c[e]=1,n[e];if(r!==Y1&&B1(r,e))return c[e]=2,r[e];if((u=t.propsOptions[0])&&B1(u,e))return c[e]=3,i[e];if(a!==Y1&&B1(a,e))return c[e]=4,a[e];Kn&&(c[e]=0)}}const h=k9[e];let p,v;if(h)return e==="$attrs"&&r3(t,"get",e),h(t);if((p=s.__cssModules)&&(p=p[e]))return p;if(a!==Y1&&B1(a,e))return c[e]=4,a[e];if(v=o.config.globalProperties,B1(v,e))return v[e]},set({_:t},e,a){const{data:n,setupState:r,ctx:i}=t;return r!==Y1&&B1(r,e)?(r[e]=a,!0):n!==Y1&&B1(n,e)?(n[e]=a,!0):B1(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=a,!0)},has({_:{data:t,setupState:e,accessCache:a,ctx:n,appContext:r,propsOptions:i}},c){let s;return!!a[c]||t!==Y1&&B1(t,c)||e!==Y1&&B1(e,c)||(s=i[0])&&B1(s,c)||B1(n,c)||B1(k9,c)||B1(r.config.globalProperties,c)},defineProperty(t,e,a){return a.get!=null?t._.accessCache[e]=0:B1(a,"value")&&this.set(t,e,a.value,null),Reflect.defineProperty(t,e,a)}};let Kn=!0;function Gw(t){const e=Pf(t),a=t.proxy,n=t.ctx;Kn=!1,e.beforeCreate&&Lo(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:c,watch:s,provide:o,inject:u,created:h,beforeMount:p,mounted:v,beforeUpdate:L,updated:w,activated:E,deactivated:x,beforeDestroy:y,beforeUnmount:A,destroyed:B,unmounted:F,render:Q,renderTracked:r1,renderTriggered:s1,errorCaptured:T1,serverPrefetch:C1,expose:H1,inheritAttrs:E1,components:S,directives:$1,filters:F1}=e;if(u&&Kw(u,n,null,t.appContext.config.unwrapInjectedRef),c)for(const Z in c){const w1=c[Z];A1(w1)&&(n[Z]=w1.bind(a))}if(r){const Z=r.call(a,a);i2(Z)&&(t.data=S0(Z))}if(Kn=!0,i)for(const Z in i){const w1=i[Z],G1=A1(w1)?w1.bind(a,a):A1(w1.get)?w1.get.bind(a,a):b3,g2=!A1(w1)&&A1(w1.set)?w1.set.bind(a):b3,h2=a2({get:G1,set:g2});Object.defineProperty(n,Z,{enumerable:!0,configurable:!0,get:()=>h2.value,set:r2=>h2.value=r2})}if(s)for(const Z in s)If(s[Z],n,a,Z);if(o){const Z=A1(o)?o.call(a):o;Reflect.ownKeys(Z).forEach(w1=>{u9(w1,Z[w1])})}h&&Lo(h,t,"c");function v1(Z,w1){p1(w1)?w1.forEach(G1=>Z(G1.bind(a))):w1&&Z(w1.bind(a))}if(v1(Ci,p),v1(Ef,v),v1(Pw,L),v1(Dw,w),v1(kw,E),v1(Tw,x),v1(Uw,T1),v1(Fw,r1),v1(Bw,s1),v1(Rw,A),v1(kf,F),v1(Ow,C1),p1(H1))if(H1.length){const Z=t.exposed||(t.exposed={});H1.forEach(w1=>{Object.defineProperty(Z,w1,{get:()=>a[w1],set:G1=>a[w1]=G1})})}else t.exposed||(t.exposed={});Q&&t.render===b3&&(t.render=Q),E1!=null&&(t.inheritAttrs=E1),S&&(t.components=S),$1&&(t.directives=$1)}function Kw(t,e,a=b3,n=!1){p1(t)&&(t=Yn(t));for(const r in t){const i=t[r];let c;i2(i)?"default"in i?c=O3(i.from||r,i.default,!0):c=O3(i.from||r):c=O3(i),I2(c)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:s=>c.value=s}):e[r]=c}}function Lo(t,e,a){y3(p1(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,a)}function If(t,e,a,n){const r=n.includes(".")?Nf(a,n):()=>a[n];if(M2(t)){const i=e[t];A1(i)&&R8(r,i)}else if(A1(t))R8(r,t.bind(a));else if(i2(t))if(p1(t))t.forEach(i=>If(i,e,a,n));else{const i=A1(t.handler)?t.handler.bind(a):e[t.handler];A1(i)&&R8(r,i,t)}}function Pf(t){const e=t.type,{mixins:a,extends:n}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:c}}=t.appContext,s=i.get(e);let o;return s?o=s:!r.length&&!a&&!n?o=e:(o={},r.length&&r.forEach(u=>T9(o,u,c,!0)),T9(o,e,c)),i.set(e,o),o}function T9(t,e,a,n=!1){const{mixins:r,extends:i}=e;i&&T9(t,i,a,!0),r&&r.forEach(c=>T9(t,c,a,!0));for(const c in e)if(!(n&&c==="expose")){const s=Yw[c]||a&&a[c];t[c]=s?s(t[c],e[c]):e[c]}return t}const Yw={data:zo,props:d5,emits:d5,methods:d5,computed:d5,beforeCreate:O2,created:O2,beforeMount:O2,mounted:O2,beforeUpdate:O2,updated:O2,beforeDestroy:O2,beforeUnmount:O2,destroyed:O2,unmounted:O2,activated:O2,deactivated:O2,errorCaptured:O2,serverPrefetch:O2,components:d5,directives:d5,watch:Qw,provide:zo,inject:Xw};function zo(t,e){return e?t?function(){return W2(A1(t)?t.call(this,this):t,A1(e)?e.call(this,this):e)}:e:t}function Xw(t,e){return d5(Yn(t),Yn(e))}function Yn(t){if(p1(t)){const e={};for(let a=0;a<t.length;a++)e[t[a]]=t[a];return e}return t}function O2(t,e){return t?[...new Set([].concat(t,e))]:e}function d5(t,e){return t?W2(W2(Object.create(null),t),e):e}function Qw(t,e){if(!t)return e;if(!e)return t;const a=W2(Object.create(null),t);for(const n in e)a[n]=O2(t[n],e[n]);return a}function Jw(t,e,a,n=!1){const r={},i={};N9(i,ze,1),t.propsDefaults=Object.create(null),Df(t,e,r,i);for(const c in t.propsOptions[0])c in r||(r[c]=void 0);a?t.props=n?r:dw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Zw(t,e,a,n){const{props:r,attrs:i,vnode:{patchFlag:c}}=t,s=j1(r),[o]=t.propsOptions;let u=!1;if((n||c>0)&&!(c&16)){if(c&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let v=h[p];if(ve(t.emitsOptions,v))continue;const L=e[v];if(o)if(B1(i,v))L!==i[v]&&(i[v]=L,u=!0);else{const w=q3(v);r[w]=Xn(o,s,w,L,t,!1)}else L!==i[v]&&(i[v]=L,u=!0)}}}else{Df(t,e,r,i)&&(u=!0);let h;for(const p in s)(!e||!B1(e,p)&&((h=j6(p))===p||!B1(e,h)))&&(o?a&&(a[p]!==void 0||a[h]!==void 0)&&(r[p]=Xn(o,s,p,void 0,t,!0)):delete r[p]);if(i!==s)for(const p in i)(!e||!B1(e,p)&&!0)&&(delete i[p],u=!0)}u&&s4(t,"set","$attrs")}function Df(t,e,a,n){const[r,i]=t.propsOptions;let c=!1,s;if(e)for(let o in e){if(C9(o))continue;const u=e[o];let h;r&&B1(r,h=q3(o))?!i||!i.includes(h)?a[h]=u:(s||(s={}))[h]=u:ve(t.emitsOptions,o)||(!(o in n)||u!==n[o])&&(n[o]=u,c=!0)}if(i){const o=j1(a),u=s||Y1;for(let h=0;h<i.length;h++){const p=i[h];a[p]=Xn(r,o,p,u[p],t,!B1(u,p))}}return c}function Xn(t,e,a,n,r,i){const c=t[a];if(c!=null){const s=B1(c,"default");if(s&&n===void 0){const o=c.default;if(c.type!==Function&&A1(o)){const{propsDefaults:u}=r;a in u?n=u[a]:(y6(r),n=u[a]=o.call(null,e),V5())}else n=o}c[0]&&(i&&!s?n=!1:c[1]&&(n===""||n===j6(a))&&(n=!0))}return n}function Rf(t,e,a=!1){const n=e.propsCache,r=n.get(t);if(r)return r;const i=t.props,c={},s=[];let o=!1;if(!A1(t)){const h=p=>{o=!0;const[v,L]=Rf(p,e,!0);W2(c,v),L&&s.push(...L)};!a&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!o)return n.set(t,m6),m6;if(p1(i))for(let h=0;h<i.length;h++){const p=q3(i[h]);Mo(p)&&(c[p]=Y1)}else if(i)for(const h in i){const p=q3(h);if(Mo(p)){const v=i[h],L=c[p]=p1(v)||A1(v)?{type:v}:v;if(L){const w=bo(Boolean,L.type),E=bo(String,L.type);L[0]=w>-1,L[1]=E<0||w<E,(w>-1||B1(L,"default"))&&s.push(p)}}}const u=[c,s];return n.set(t,u),u}function Mo(t){return t[0]!=="$"}function Ho(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Vo(t,e){return Ho(t)===Ho(e)}function bo(t,e){return p1(e)?e.findIndex(a=>Vo(a,t)):A1(e)&&Vo(e,t)?0:-1}const Of=t=>t[0]==="_"||t==="$stable",fi=t=>p1(t)?t.map(D3):[D3(t)],eS=(t,e,a)=>{if(e._n)return e;const n=w2((...r)=>fi(e(...r)),a);return n._c=!1,n},Bf=(t,e,a)=>{const n=t._ctx;for(const r in t){if(Of(r))continue;const i=t[r];if(A1(i))e[r]=eS(r,i,n);else if(i!=null){const c=fi(i);e[r]=()=>c}}},Ff=(t,e)=>{const a=fi(e);t.slots.default=()=>a},tS=(t,e)=>{if(t.vnode.shapeFlag&32){const a=e._;a?(t.slots=j1(e),N9(e,"_",a)):Bf(e,t.slots={})}else t.slots={},e&&Ff(t,e);N9(t.slots,ze,1)},aS=(t,e,a)=>{const{vnode:n,slots:r}=t;let i=!0,c=Y1;if(n.shapeFlag&32){const s=e._;s?a&&s===1?i=!1:(W2(r,e),!a&&s===1&&delete r._):(i=!e.$stable,Bf(e,r)),c=e}else e&&(Ff(t,e),c={default:1});if(i)for(const s in r)!Of(s)&&!(s in c)&&delete r[s]};function Uf(){return{app:null,config:{isNativeTag:Ty,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nS=0;function rS(t,e){return function(n,r=null){A1(n)||(n=Object.assign({},n)),r!=null&&!i2(r)&&(r=null);const i=Uf(),c=new Set;let s=!1;const o=i.app={_uid:nS++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:VS,get config(){return i.config},set config(u){},use(u,...h){return c.has(u)||(u&&A1(u.install)?(c.add(u),u.install(o,...h)):A1(u)&&(c.add(u),u(o,...h))),o},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),o},component(u,h){return h?(i.components[u]=h,o):i.components[u]},directive(u,h){return h?(i.directives[u]=h,o):i.directives[u]},mount(u,h,p){if(!s){const v=_1(n,r);return v.appContext=i,h&&e?e(v,u):t(v,u,p),s=!0,o._container=u,u.__vue_app__=o,Me(v.component)||v.component.proxy}},unmount(){s&&(t(null,o._container),delete o._container.__vue_app__)},provide(u,h){return i.provides[u]=h,o}};return o}}function Qn(t,e,a,n,r=!1){if(p1(t)){t.forEach((v,L)=>Qn(v,e&&(p1(e)?e[L]:e),a,n,r));return}if(h9(n)&&!r)return;const i=n.shapeFlag&4?Me(n.component)||n.component.proxy:n.el,c=r?null:i,{i:s,r:o}=t,u=e&&e.r,h=s.refs===Y1?s.refs={}:s.refs,p=s.setupState;if(u!=null&&u!==o&&(M2(u)?(h[u]=null,B1(p,u)&&(p[u]=null)):I2(u)&&(u.value=null)),A1(o))$4(o,s,12,[c,h]);else{const v=M2(o),L=I2(o);if(v||L){const w=()=>{if(t.f){const E=v?h[o]:o.value;r?p1(E)&&Jr(E,i):p1(E)?E.includes(i)||E.push(i):v?(h[o]=[i],B1(p,o)&&(p[o]=h[o])):(o.value=[i],t.k&&(h[t.k]=o.value))}else v?(h[o]=c,B1(p,o)&&(p[o]=c)):L&&(o.value=c,t.k&&(h[t.k]=c))};c?(w.id=-1,Y2(w,a)):w()}}}const Y2=Aw;function iS(t){return cS(t)}function cS(t,e){const a=By();a.__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:c,createText:s,createComment:o,setText:u,setElementText:h,parentNode:p,nextSibling:v,setScopeId:L=b3,cloneNode:w,insertStaticContent:E}=t,x=(g,b,_,D=null,I=null,U=null,j=!1,P=null,G=!!b.dynamicChildren)=>{if(g===b)return;g&&!y8(g,b)&&(D=J(g),Z1(g,I,U,!0),g=null),b.patchFlag===-2&&(G=!1,b.dynamicChildren=null);const{type:R,ref:i1,shapeFlag:t1}=b;switch(R){case ui:y(g,b,_,D);break;case S5:A(g,b,_,D);break;case d9:g==null&&B(b,_,D,j);break;case u3:$1(g,b,_,D,I,U,j,P,G);break;default:t1&1?r1(g,b,_,D,I,U,j,P,G):t1&6?F1(g,b,_,D,I,U,j,P,G):(t1&64||t1&128)&&R.process(g,b,_,D,I,U,j,P,G,R1)}i1!=null&&I&&Qn(i1,g&&g.ref,U,b||g,!b)},y=(g,b,_,D)=>{if(g==null)n(b.el=s(b.children),_,D);else{const I=b.el=g.el;b.children!==g.children&&u(I,b.children)}},A=(g,b,_,D)=>{g==null?n(b.el=o(b.children||""),_,D):b.el=g.el},B=(g,b,_,D)=>{[g.el,g.anchor]=E(g.children,b,_,D,g.el,g.anchor)},F=({el:g,anchor:b},_,D)=>{let I;for(;g&&g!==b;)I=v(g),n(g,_,D),g=I;n(b,_,D)},Q=({el:g,anchor:b})=>{let _;for(;g&&g!==b;)_=v(g),r(g),g=_;r(b)},r1=(g,b,_,D,I,U,j,P,G)=>{j=j||b.type==="svg",g==null?s1(b,_,D,I,U,j,P,G):H1(g,b,I,U,j,P,G)},s1=(g,b,_,D,I,U,j,P)=>{let G,R;const{type:i1,props:t1,shapeFlag:c1,transition:Y,patchFlag:m1,dirs:S1}=g;if(g.el&&w!==void 0&&m1===-1)G=g.el=w(g.el);else{if(G=g.el=c(g.type,U,t1&&t1.is,t1),c1&8?h(G,g.children):c1&16&&C1(g.children,G,null,D,I,U&&i1!=="foreignObject",j,P),S1&&u5(g,null,D,"created"),t1){for(const L1 in t1)L1!=="value"&&!C9(L1)&&i(G,L1,null,t1[L1],U,g.children,D,I,$);"value"in t1&&i(G,"value",null,t1.value),(R=t1.onVnodeBeforeMount)&&I3(R,D,g)}T1(G,g,g.scopeId,j,D)}S1&&u5(g,null,D,"beforeMount");const k1=(!I||I&&!I.pendingBranch)&&Y&&!Y.persisted;k1&&Y.beforeEnter(G),n(G,b,_),((R=t1&&t1.onVnodeMounted)||k1||S1)&&Y2(()=>{R&&I3(R,D,g),k1&&Y.enter(G),S1&&u5(g,null,D,"mounted")},I)},T1=(g,b,_,D,I)=>{if(_&&L(g,_),D)for(let U=0;U<D.length;U++)L(g,D[U]);if(I){let U=I.subTree;if(b===U){const j=I.vnode;T1(g,j,j.scopeId,j.slotScopeIds,I.parent)}}},C1=(g,b,_,D,I,U,j,P,G=0)=>{for(let R=G;R<g.length;R++){const i1=g[R]=P?I4(g[R]):D3(g[R]);x(null,i1,b,_,D,I,U,j,P)}},H1=(g,b,_,D,I,U,j)=>{const P=b.el=g.el;let{patchFlag:G,dynamicChildren:R,dirs:i1}=b;G|=g.patchFlag&16;const t1=g.props||Y1,c1=b.props||Y1;let Y;_&&h5(_,!1),(Y=c1.onVnodeBeforeUpdate)&&I3(Y,_,b,g),i1&&u5(b,g,_,"beforeUpdate"),_&&h5(_,!0);const m1=I&&b.type!=="foreignObject";if(R?E1(g.dynamicChildren,R,P,_,D,m1,U):j||G1(g,b,P,null,_,D,m1,U,!1),G>0){if(G&16)S(P,b,t1,c1,_,D,I);else if(G&2&&t1.class!==c1.class&&i(P,"class",null,c1.class,I),G&4&&i(P,"style",t1.style,c1.style,I),G&8){const S1=b.dynamicProps;for(let k1=0;k1<S1.length;k1++){const L1=S1[k1],W1=t1[L1],m3=c1[L1];(m3!==W1||L1==="value")&&i(P,L1,W1,m3,I,g.children,_,D,$)}}G&1&&g.children!==b.children&&h(P,b.children)}else!j&&R==null&&S(P,b,t1,c1,_,D,I);((Y=c1.onVnodeUpdated)||i1)&&Y2(()=>{Y&&I3(Y,_,b,g),i1&&u5(b,g,_,"updated")},D)},E1=(g,b,_,D,I,U,j)=>{for(let P=0;P<b.length;P++){const G=g[P],R=b[P],i1=G.el&&(G.type===u3||!y8(G,R)||G.shapeFlag&70)?p(G.el):_;x(G,R,i1,null,D,I,U,j,!0)}},S=(g,b,_,D,I,U,j)=>{if(_!==D){for(const P in D){if(C9(P))continue;const G=D[P],R=_[P];G!==R&&P!=="value"&&i(g,P,R,G,j,b.children,I,U,$)}if(_!==Y1)for(const P in _)!C9(P)&&!(P in D)&&i(g,P,_[P],null,j,b.children,I,U,$);"value"in D&&i(g,"value",_.value,D.value)}},$1=(g,b,_,D,I,U,j,P,G)=>{const R=b.el=g?g.el:s(""),i1=b.anchor=g?g.anchor:s("");let{patchFlag:t1,dynamicChildren:c1,slotScopeIds:Y}=b;Y&&(P=P?P.concat(Y):Y),g==null?(n(R,_,D),n(i1,_,D),C1(b.children,_,i1,I,U,j,P,G)):t1>0&&t1&64&&c1&&g.dynamicChildren?(E1(g.dynamicChildren,c1,_,I,U,j,P),(b.key!=null||I&&b===I.subTree)&&$f(g,b,!0)):G1(g,b,_,i1,I,U,j,P,G)},F1=(g,b,_,D,I,U,j,P,G)=>{b.slotScopeIds=P,g==null?b.shapeFlag&512?I.ctx.activate(b,_,D,j,G):c2(b,_,D,I,U,j,G):v1(g,b,G)},c2=(g,b,_,D,I,U,j)=>{const P=g.component=pS(g,D,I);if(_f(g)&&(P.ctx.renderer=R1),vS(P),P.asyncDep){if(I&&I.registerDep(P,Z),!g.el){const G=P.subTree=_1(S5);A(null,G,b,_)}return}Z(P,g,b,_,I,U,j)},v1=(g,b,_)=>{const D=b.component=g.component;if(xw(g,b,_))if(D.asyncDep&&!D.asyncResolved){w1(D,b,_);return}else D.next=b,Hw(D.update),D.update();else b.el=g.el,D.vnode=b},Z=(g,b,_,D,I,U,j)=>{const P=()=>{if(g.isMounted){let{next:i1,bu:t1,u:c1,parent:Y,vnode:m1}=g,S1=i1,k1;h5(g,!1),i1?(i1.el=m1.el,w1(g,i1,j)):i1=m1,t1&&f9(t1),(k1=i1.props&&i1.props.onVnodeBeforeUpdate)&&I3(k1,Y,i1,m1),h5(g,!0);const L1=un(g),W1=g.subTree;g.subTree=L1,x(W1,L1,p(W1.el),J(W1),g,I,U),i1.el=L1.el,S1===null&&Nw(g,L1.el),c1&&Y2(c1,I),(k1=i1.props&&i1.props.onVnodeUpdated)&&Y2(()=>I3(k1,Y,i1,m1),I)}else{let i1;const{el:t1,props:c1}=b,{bm:Y,m:m1,parent:S1}=g,k1=h9(b);if(h5(g,!1),Y&&f9(Y),!k1&&(i1=c1&&c1.onVnodeBeforeMount)&&I3(i1,S1,b),h5(g,!0),t1&&h1){const L1=()=>{g.subTree=un(g),h1(t1,g.subTree,g,I,null)};k1?b.type.__asyncLoader().then(()=>!g.isUnmounted&&L1()):L1()}else{const L1=g.subTree=un(g);x(null,L1,_,D,g,I,U),b.el=L1.el}if(m1&&Y2(m1,I),!k1&&(i1=c1&&c1.onVnodeMounted)){const L1=b;Y2(()=>I3(i1,S1,L1),I)}(b.shapeFlag&256||S1&&h9(S1.vnode)&&S1.vnode.shapeFlag&256)&&g.a&&Y2(g.a,I),g.isMounted=!0,b=_=D=null}},G=g.effect=new ti(P,()=>Hf(R),g.scope),R=g.update=()=>G.run();R.id=g.uid,h5(g,!0),R()},w1=(g,b,_)=>{b.component=g;const D=g.vnode.props;g.vnode=b,g.next=null,Zw(g,b.props,D,_),aS(g,b.children,_),W6(),pe(void 0,g.update),G6()},G1=(g,b,_,D,I,U,j,P,G=!1)=>{const R=g&&g.children,i1=g?g.shapeFlag:0,t1=b.children,{patchFlag:c1,shapeFlag:Y}=b;if(c1>0){if(c1&128){h2(R,t1,_,D,I,U,j,P,G);return}else if(c1&256){g2(R,t1,_,D,I,U,j,P,G);return}}Y&8?(i1&16&&$(R,I,U),t1!==R&&h(_,t1)):i1&16?Y&16?h2(R,t1,_,D,I,U,j,P,G):$(R,I,U,!0):(i1&8&&h(_,""),Y&16&&C1(t1,_,D,I,U,j,P,G))},g2=(g,b,_,D,I,U,j,P,G)=>{g=g||m6,b=b||m6;const R=g.length,i1=b.length,t1=Math.min(R,i1);let c1;for(c1=0;c1<t1;c1++){const Y=b[c1]=G?I4(b[c1]):D3(b[c1]);x(g[c1],Y,_,null,I,U,j,P,G)}R>i1?$(g,I,U,!0,!1,t1):C1(b,_,D,I,U,j,P,G,t1)},h2=(g,b,_,D,I,U,j,P,G)=>{let R=0;const i1=b.length;let t1=g.length-1,c1=i1-1;for(;R<=t1&&R<=c1;){const Y=g[R],m1=b[R]=G?I4(b[R]):D3(b[R]);if(y8(Y,m1))x(Y,m1,_,null,I,U,j,P,G);else break;R++}for(;R<=t1&&R<=c1;){const Y=g[t1],m1=b[c1]=G?I4(b[c1]):D3(b[c1]);if(y8(Y,m1))x(Y,m1,_,null,I,U,j,P,G);else break;t1--,c1--}if(R>t1){if(R<=c1){const Y=c1+1,m1=Y<i1?b[Y].el:D;for(;R<=c1;)x(null,b[R]=G?I4(b[R]):D3(b[R]),_,m1,I,U,j,P,G),R++}}else if(R>c1)for(;R<=t1;)Z1(g[R],I,U,!0),R++;else{const Y=R,m1=R,S1=new Map;for(R=m1;R<=c1;R++){const L2=b[R]=G?I4(b[R]):D3(b[R]);L2.key!=null&&S1.set(L2.key,R)}let k1,L1=0;const W1=c1-m1+1;let m3=!1,G3=0;const s2=new Array(W1);for(R=0;R<W1;R++)s2[R]=0;for(R=Y;R<=t1;R++){const L2=g[R];if(L1>=W1){Z1(L2,I,U,!0);continue}let d2;if(L2.key!=null)d2=S1.get(L2.key);else for(k1=m1;k1<=c1;k1++)if(s2[k1-m1]===0&&y8(L2,b[k1])){d2=k1;break}d2===void 0?Z1(L2,I,U,!0):(s2[d2-m1]=R+1,d2>=G3?G3=d2:m3=!0,x(L2,b[d2],_,null,I,U,j,P,G),L1++)}const r5=m3?sS(s2):m6;for(k1=r5.length-1,R=W1-1;R>=0;R--){const L2=m1+R,d2=b[L2],V1=L2+1<i1?b[L2+1].el:D;s2[R]===0?x(null,d2,_,V1,I,U,j,P,G):m3&&(k1<0||R!==r5[k1]?r2(d2,_,V1,2):k1--)}}},r2=(g,b,_,D,I=null)=>{const{el:U,type:j,transition:P,children:G,shapeFlag:R}=g;if(R&6){r2(g.component.subTree,b,_,D);return}if(R&128){g.suspense.move(b,_,D);return}if(R&64){j.move(g,b,_,R1);return}if(j===u3){n(U,b,_);for(let t1=0;t1<G.length;t1++)r2(G[t1],b,_,D);n(g.anchor,b,_);return}if(j===d9){F(g,b,_);return}if(D!==2&&R&1&&P)if(D===0)P.beforeEnter(U),n(U,b,_),Y2(()=>P.enter(U),I);else{const{leave:t1,delayLeave:c1,afterLeave:Y}=P,m1=()=>n(U,b,_),S1=()=>{t1(U,()=>{m1(),Y&&Y()})};c1?c1(U,m1,S1):S1()}else n(U,b,_)},Z1=(g,b,_,D=!1,I=!1)=>{const{type:U,props:j,ref:P,children:G,dynamicChildren:R,shapeFlag:i1,patchFlag:t1,dirs:c1}=g;if(P!=null&&Qn(P,null,_,g,!0),i1&256){b.ctx.deactivate(g);return}const Y=i1&1&&c1,m1=!h9(g);let S1;if(m1&&(S1=j&&j.onVnodeBeforeUnmount)&&I3(S1,b,g),i1&6)e1(g.component,_,D);else{if(i1&128){g.suspense.unmount(_,D);return}Y&&u5(g,null,b,"beforeUnmount"),i1&64?g.type.remove(g,b,_,I,R1,D):R&&(U!==u3||t1>0&&t1&64)?$(R,b,_,!1,!0):(U===u3&&t1&384||!I&&i1&16)&&$(G,b,_),D&&X1(g)}(m1&&(S1=j&&j.onVnodeUnmounted)||Y)&&Y2(()=>{S1&&I3(S1,b,g),Y&&u5(g,null,b,"unmounted")},_)},X1=g=>{const{type:b,el:_,anchor:D,transition:I}=g;if(b===u3){k(_,D);return}if(b===d9){Q(g);return}const U=()=>{r(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(g.shapeFlag&1&&I&&!I.persisted){const{leave:j,delayLeave:P}=I,G=()=>j(_,U);P?P(g.el,U,G):G()}else U()},k=(g,b)=>{let _;for(;g!==b;)_=v(g),r(g),g=_;r(b)},e1=(g,b,_)=>{const{bum:D,scope:I,update:U,subTree:j,um:P}=g;D&&f9(D),I.stop(),U&&(U.active=!1,Z1(j,g,b,_)),P&&Y2(P,b),Y2(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},$=(g,b,_,D=!1,I=!1,U=0)=>{for(let j=U;j<g.length;j++)Z1(g[j],b,_,D,I)},J=g=>g.shapeFlag&6?J(g.component.subTree):g.shapeFlag&128?g.suspense.next():v(g.anchor||g.el),I1=(g,b,_)=>{g==null?b._vnode&&Z1(b._vnode,null,null,!0):x(b._vnode||null,g,b,null,null,null,_),yf(),b._vnode=g},R1={p:x,um:Z1,m:r2,r:X1,mt:c2,mc:C1,pc:G1,pbc:E1,n:J,o:t};let N,h1;return e&&([N,h1]=e(R1)),{render:I1,hydrate:N,createApp:rS(I1,N)}}function h5({effect:t,update:e},a){t.allowRecurse=e.allowRecurse=a}function $f(t,e,a=!1){const n=t.children,r=e.children;if(p1(n)&&p1(r))for(let i=0;i<n.length;i++){const c=n[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=I4(r[i]),s.el=c.el),a||$f(c,s))}}function sS(t){const e=t.slice(),a=[0];let n,r,i,c,s;const o=t.length;for(n=0;n<o;n++){const u=t[n];if(u!==0){if(r=a[a.length-1],t[r]<u){e[n]=r,a.push(n);continue}for(i=0,c=a.length-1;i<c;)s=i+c>>1,t[a[s]]<u?i=s+1:c=s;u<t[a[i]]&&(i>0&&(e[n]=a[i-1]),a[i]=n)}}for(i=a.length,c=a[i-1];i-- >0;)a[i]=c,c=e[c];return a}const oS=t=>t.__isTeleport,u3=Symbol(void 0),ui=Symbol(void 0),S5=Symbol(void 0),d9=Symbol(void 0),O8=[];let H3=null;function P2(t=!1){O8.push(H3=t?null:[])}function lS(){O8.pop(),H3=O8[O8.length-1]||null}let i0=1;function yo(t){i0+=t}function qf(t){return t.dynamicChildren=i0>0?H3||m6:null,lS(),i0>0&&H3&&H3.push(t),t}function $2(t,e,a,n,r,i){return qf(V(t,e,a,n,r,i,!0))}function CS(t,e,a,n,r){return qf(_1(t,e,a,n,r,!0))}function Jn(t){return t?t.__v_isVNode===!0:!1}function y8(t,e){return t.type===e.type&&t.key===e.key}const ze="__vInternal",jf=({key:t})=>t!=null?t:null,m9=({ref:t,ref_key:e,ref_for:a})=>t!=null?M2(t)||I2(t)||A1(t)?{i:M3,r:t,k:e,f:!!a}:t:null;function V(t,e=null,a=null,n=0,r=null,i=t===u3?0:1,c=!1,s=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jf(e),ref:e&&m9(e),scopeId:ge,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return s?(di(o,a),i&128&&t.normalize(o)):a&&(o.shapeFlag|=M2(a)?8:16),i0>0&&!c&&H3&&(o.patchFlag>0||i&6)&&o.patchFlag!==32&&H3.push(o),o}const _1=fS;function fS(t,e=null,a=null,n=0,r=null,i=!1){if((!t||t===$w)&&(t=S5),Jn(t)){const s=b6(t,e,!0);return a&&di(s,a),i0>0&&!i&&H3&&(s.shapeFlag&6?H3[H3.indexOf(t)]=s:H3.push(s)),s.patchFlag|=-2,s}if(HS(t)&&(t=t.__vccOpts),e){e=uS(e);let{class:s,style:o}=e;s&&!M2(s)&&(e.class=Yr(s)),i2(o)&&(df(o)&&!p1(o)&&(o=W2({},o)),e.style=Kr(o))}const c=M2(t)?1:_w(t)?128:oS(t)?64:i2(t)?4:A1(t)?2:0;return V(t,e,a,n,r,c,i,!0)}function uS(t){return t?df(t)||ze in t?W2({},t):t:null}function b6(t,e,a=!1){const{props:n,ref:r,patchFlag:i,children:c}=t,s=e?hS(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&jf(s),ref:e&&e.ref?a&&r?p1(r)?r.concat(m9(e)):[r,m9(e)]:m9(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==u3?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&b6(t.ssContent),ssFallback:t.ssFallback&&b6(t.ssFallback),el:t.el,anchor:t.anchor}}function n2(t=" ",e=0){return _1(ui,null,t,e)}function hi(t,e){const a=_1(d9,null,t);return a.staticCount=e,a}function Wf(t="",e=!1){return e?(P2(),CS(S5,null,t)):_1(S5,null,t)}function D3(t){return t==null||typeof t=="boolean"?_1(S5):p1(t)?_1(u3,null,t.slice()):typeof t=="object"?I4(t):_1(ui,null,String(t))}function I4(t){return t.el===null||t.memo?t:b6(t)}function di(t,e){let a=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(p1(e))a=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),di(t,r()),r._c&&(r._d=!0));return}else{a=32;const r=e._;!r&&!(ze in e)?e._ctx=M3:r===3&&M3&&(M3.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else A1(e)?(e={default:e,_ctx:M3},a=32):(e=String(e),n&64?(a=16,e=[n2(e)]):a=8);t.children=e,t.shapeFlag|=a}function hS(...t){const e={};for(let a=0;a<t.length;a++){const n=t[a];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Yr([e.class,n.class]));else if(r==="style")e.style=Kr([e.style,n.style]);else if(fe(r)){const i=e[r],c=n[r];c&&i!==c&&!(p1(i)&&i.includes(c))&&(e[r]=i?[].concat(i,c):c)}else r!==""&&(e[r]=n[r])}return e}function I3(t,e,a,n=null){y3(t,e,7,[a,n])}const dS=Uf();let mS=0;function pS(t,e,a){const n=t.type,r=(e?e.appContext:t.appContext)||dS,i={uid:mS++,vnode:t,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rf(n,r),emitsOptions:Sf(n,r),emit:null,emitted:null,propsDefaults:Y1,inheritAttrs:n.inheritAttrs,ctx:Y1,data:Y1,props:Y1,attrs:Y1,slots:Y1,refs:Y1,setupState:Y1,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yw.bind(null,i),t.ce&&t.ce(i),i}let x2=null;const y6=t=>{x2=t,t.scope.on()},V5=()=>{x2&&x2.scope.off(),x2=null};function Gf(t){return t.vnode.shapeFlag&4}let c0=!1;function vS(t,e=!1){c0=e;const{props:a,children:n}=t.vnode,r=Gf(t);Jw(t,a,r,e),tS(t,n);const i=r?gS(t,e):void 0;return c0=!1,i}function gS(t,e){const a=t.type;t.accessCache=Object.create(null),t.proxy=mf(new Proxy(t.ctx,Ww));const{setup:n}=a;if(n){const r=t.setupContext=n.length>1?zS(t):null;y6(t),W6();const i=$4(n,t,0,[t.props,r]);if(G6(),V5(),ZC(i)){if(i.then(V5,V5),e)return i.then(c=>{wo(t,c,e)}).catch(c=>{me(c,t,0)});t.asyncDep=i}else wo(t,i,e)}else Kf(t,e)}function wo(t,e,a){A1(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:i2(e)&&(t.setupState=Lf(e)),Kf(t,a)}let So;function Kf(t,e,a){const n=t.type;if(!t.render){if(!e&&So&&!n.render){const r=n.template;if(r){const{isCustomElement:i,compilerOptions:c}=t.appContext.config,{delimiters:s,compilerOptions:o}=n,u=W2(W2({isCustomElement:i,delimiters:s},c),o);n.render=So(r,u)}}t.render=n.render||b3}y6(t),W6(),Gw(t),G6(),V5()}function LS(t){return new Proxy(t.attrs,{get(e,a){return r3(t,"get","$attrs"),e[a]}})}function zS(t){const e=n=>{t.exposed=n||{}};let a;return{get attrs(){return a||(a=LS(t))},slots:t.slots,emit:t.emit,expose:e}}function Me(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lf(mf(t.exposed)),{get(e,a){if(a in e)return e[a];if(a in k9)return k9[a](t)}}))}function MS(t,e=!0){return A1(t)?t.displayName||t.name:t.name||e&&t.__name}function HS(t){return A1(t)&&"__vccOpts"in t}const a2=(t,e)=>Lw(t,e,c0);function He(t,e,a){const n=arguments.length;return n===2?i2(e)&&!p1(e)?Jn(e)?_1(t,null,[e]):_1(t,e):_1(t,null,e):(n>3?a=Array.prototype.slice.call(arguments,2):n===3&&Jn(a)&&(a=[a]),_1(t,e,a))}const VS="3.2.37",bS="http://www.w3.org/2000/svg",p5=typeof document<"u"?document:null,xo=p5&&p5.createElement("template"),yS={insert:(t,e,a)=>{e.insertBefore(t,a||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,a,n)=>{const r=e?p5.createElementNS(bS,t):p5.createElement(t,a?{is:a}:void 0);return t==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:t=>p5.createTextNode(t),createComment:t=>p5.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>p5.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,a,n,r,i){const c=a?a.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),a),!(r===i||!(r=r.nextSibling)););else{xo.innerHTML=n?`<svg>${t}</svg>`:t;const s=xo.content;if(n){const o=s.firstChild;for(;o.firstChild;)s.appendChild(o.firstChild);s.removeChild(o)}e.insertBefore(s,a)}return[c?c.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}};function wS(t,e,a){const n=t._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):a?t.setAttribute("class",e):t.className=e}function SS(t,e,a){const n=t.style,r=M2(a);if(a&&!r){for(const i in a)Zn(n,i,a[i]);if(e&&!M2(e))for(const i in e)a[i]==null&&Zn(n,i,"")}else{const i=n.display;r?e!==a&&(n.cssText=a):e&&t.removeAttribute("style"),"_vod"in t&&(n.display=i)}}const No=/\s*!important$/;function Zn(t,e,a){if(p1(a))a.forEach(n=>Zn(t,e,n));else if(a==null&&(a=""),e.startsWith("--"))t.setProperty(e,a);else{const n=xS(t,e);No.test(a)?t.setProperty(j6(n),a.replace(No,""),"important"):t[n]=a}}const _o=["Webkit","Moz","ms"],hn={};function xS(t,e){const a=hn[e];if(a)return a;let n=q3(e);if(n!=="filter"&&n in t)return hn[e]=n;n=he(n);for(let r=0;r<_o.length;r++){const i=_o[r]+n;if(i in t)return hn[e]=i}return e}const Ao="http://www.w3.org/1999/xlink";function NS(t,e,a,n,r){if(n&&e.startsWith("xlink:"))a==null?t.removeAttributeNS(Ao,e.slice(6,e.length)):t.setAttributeNS(Ao,e,a);else{const i=Ny(e);a==null||i&&!QC(a)?t.removeAttribute(e):t.setAttribute(e,i?"":a)}}function _S(t,e,a,n,r,i,c){if(e==="innerHTML"||e==="textContent"){n&&c(n,r,i),t[e]=a==null?"":a;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=a;const o=a==null?"":a;(t.value!==o||t.tagName==="OPTION")&&(t.value=o),a==null&&t.removeAttribute(e);return}let s=!1;if(a===""||a==null){const o=typeof t[e];o==="boolean"?a=QC(a):a==null&&o==="string"?(a="",s=!0):o==="number"&&(a=0,s=!0)}try{t[e]=a}catch{}s&&t.removeAttribute(e)}const[Yf,AS]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const a=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(a&&Number(a[1])<=53)}return[t,e]})();let er=0;const ES=Promise.resolve(),kS=()=>{er=0},TS=()=>er||(ES.then(kS),er=Yf());function D4(t,e,a,n){t.addEventListener(e,a,n)}function IS(t,e,a,n){t.removeEventListener(e,a,n)}function PS(t,e,a,n,r=null){const i=t._vei||(t._vei={}),c=i[e];if(n&&c)c.value=n;else{const[s,o]=DS(e);if(n){const u=i[e]=RS(n,r);D4(t,s,u,o)}else c&&(IS(t,s,c,o),i[e]=void 0)}}const Eo=/(?:Once|Passive|Capture)$/;function DS(t){let e;if(Eo.test(t)){e={};let a;for(;a=t.match(Eo);)t=t.slice(0,t.length-a[0].length),e[a[0].toLowerCase()]=!0}return[j6(t.slice(2)),e]}function RS(t,e){const a=n=>{const r=n.timeStamp||Yf();(AS||r>=a.attached-1)&&y3(OS(n,a.value),e,5,[n])};return a.value=t,a.attached=TS(),a}function OS(t,e){if(p1(e)){const a=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{a.call(t),t._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const ko=/^on[a-z]/,BS=(t,e,a,n,r=!1,i,c,s,o)=>{e==="class"?wS(t,n,r):e==="style"?SS(t,a,n):fe(e)?Qr(e)||PS(t,e,a,n,c):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):FS(t,e,n,r))?_S(t,e,n,i,c,s,o):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),NS(t,e,n,r))};function FS(t,e,a,n){return n?!!(e==="innerHTML"||e==="textContent"||e in t&&ko.test(e)&&A1(a)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ko.test(e)&&M2(a)?!1:e in t}const w6=t=>{const e=t.props["onUpdate:modelValue"]||!1;return p1(e)?a=>f9(e,a):e};function US(t){t.target.composing=!0}function To(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ph1={created(t,{modifiers:{lazy:e,trim:a,number:n}},r){t._assign=w6(r);const i=n||r.props&&r.props.type==="number";D4(t,e?"change":"input",c=>{if(c.target.composing)return;let s=t.value;a&&(s=s.trim()),i&&(s=_9(s)),t._assign(s)}),a&&D4(t,"change",()=>{t.value=t.value.trim()}),e||(D4(t,"compositionstart",US),D4(t,"compositionend",To),D4(t,"change",To))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:a,trim:n,number:r}},i){if(t._assign=w6(i),t.composing||document.activeElement===t&&t.type!=="range"&&(a||n&&t.value.trim()===e||(r||t.type==="number")&&_9(t.value)===e))return;const c=e==null?"":e;t.value!==c&&(t.value=c)}},vh1={deep:!0,created(t,e,a){t._assign=w6(a),D4(t,"change",()=>{const n=t._modelValue,r=s0(t),i=t.checked,c=t._assign;if(p1(n)){const s=Xr(n,r),o=s!==-1;if(i&&!o)c(n.concat(r));else if(!i&&o){const u=[...n];u.splice(s,1),c(u)}}else if(q6(n)){const s=new Set(n);i?s.add(r):s.delete(r),c(s)}else c(Xf(t,i))})},mounted:Io,beforeUpdate(t,e,a){t._assign=w6(a),Io(t,e,a)}};function Io(t,{value:e,oldValue:a},n){t._modelValue=e,p1(e)?t.checked=Xr(e,n.props.value)>-1:q6(e)?t.checked=e.has(n.props.value):e!==a&&(t.checked=y0(e,Xf(t,!0)))}const gh1={deep:!0,created(t,{value:e,modifiers:{number:a}},n){const r=q6(e);D4(t,"change",()=>{const i=Array.prototype.filter.call(t.options,c=>c.selected).map(c=>a?_9(s0(c)):s0(c));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=w6(n)},mounted(t,{value:e}){Po(t,e)},beforeUpdate(t,e,a){t._assign=w6(a)},updated(t,{value:e}){Po(t,e)}};function Po(t,e){const a=t.multiple;if(!(a&&!p1(e)&&!q6(e))){for(let n=0,r=t.options.length;n<r;n++){const i=t.options[n],c=s0(i);if(a)p1(e)?i.selected=Xr(e,c)>-1:i.selected=e.has(c);else if(y0(s0(i),e)){t.selectedIndex!==n&&(t.selectedIndex=n);return}}!a&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function s0(t){return"_value"in t?t._value:t.value}function Xf(t,e){const a=e?"_trueValue":"_falseValue";return a in t?t[a]:e}const $S=["ctrl","shift","alt","meta"],qS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$S.some(a=>t[`${a}Key`]&&!e.includes(a))},Lh1=(t,e)=>(a,...n)=>{for(let r=0;r<e.length;r++){const i=qS[e[r]];if(i&&i(a,e))return}return t(a,...n)},jS=W2({patchProp:BS},yS);let Do;function WS(){return Do||(Do=iS(jS))}const GS=(...t)=>{const e=WS().createApp(...t),{mount:a}=e;return e.mount=n=>{const r=KS(n);if(!r)return;const i=e._component;!A1(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const c=a(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),c},e};function KS(t){return M2(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const o6=typeof window<"u";function YS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const K1=Object.assign;function dn(t,e){const a={};for(const n in e){const r=e[n];a[n]=S3(r)?r.map(t):t(r)}return a}const B8=()=>{},S3=Array.isArray,XS=/\/$/,QS=t=>t.replace(XS,"");function mn(t,e,a="/"){let n,r={},i="",c="";const s=e.indexOf("#");let o=e.indexOf("?");return s<o&&s>=0&&(o=-1),o>-1&&(n=e.slice(0,o),i=e.slice(o+1,s>-1?s:e.length),r=t(i)),s>-1&&(n=n||e.slice(0,s),c=e.slice(s,e.length)),n=tx(n!=null?n:e,a),{fullPath:n+(i&&"?")+i+c,path:n,query:r,hash:c}}function JS(t,e){const a=e.query?t(e.query):"";return e.path+(a&&"?")+a+(e.hash||"")}function Ro(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ZS(t,e,a){const n=e.matched.length-1,r=a.matched.length-1;return n>-1&&n===r&&S6(e.matched[n],a.matched[r])&&Qf(e.params,a.params)&&t(e.query)===t(a.query)&&e.hash===a.hash}function S6(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const a in t)if(!ex(t[a],e[a]))return!1;return!0}function ex(t,e){return S3(t)?Oo(t,e):S3(e)?Oo(e,t):t===e}function Oo(t,e){return S3(e)?t.length===e.length&&t.every((a,n)=>a===e[n]):t.length===1&&t[0]===e}function tx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const a=e.split("/"),n=t.split("/");let r=a.length-1,i,c;for(i=0;i<n.length;i++)if(c=n[i],c!==".")if(c==="..")r>1&&r--;else break;return a.slice(0,r).join("/")+"/"+n.slice(i-(i===n.length?1:0)).join("/")}var o0;(function(t){t.pop="pop",t.push="push"})(o0||(o0={}));var F8;(function(t){t.back="back",t.forward="forward",t.unknown=""})(F8||(F8={}));function ax(t){if(!t)if(o6){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QS(t)}const nx=/^[^#]+#/;function rx(t,e){return t.replace(nx,"#")+e}function ix(t,e){const a=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{behavior:e.behavior,left:n.left-a.left-(e.left||0),top:n.top-a.top-(e.top||0)}}const Ve=()=>({left:window.pageXOffset,top:window.pageYOffset});function cx(t){let e;if("el"in t){const a=t.el,n=typeof a=="string"&&a.startsWith("#"),r=typeof a=="string"?n?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!r)return;e=ix(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Bo(t,e){return(history.state?history.state.position-e:-1)+t}const tr=new Map;function sx(t,e){tr.set(t,e)}function ox(t){const e=tr.get(t);return tr.delete(t),e}let lx=()=>location.protocol+"//"+location.host;function Jf(t,e){const{pathname:a,search:n,hash:r}=e,i=t.indexOf("#");if(i>-1){let s=r.includes(t.slice(i))?t.slice(i).length:1,o=r.slice(s);return o[0]!=="/"&&(o="/"+o),Ro(o,"")}return Ro(a,t)+n+r}function Cx(t,e,a,n){let r=[],i=[],c=null;const s=({state:v})=>{const L=Jf(t,location),w=a.value,E=e.value;let x=0;if(v){if(a.value=L,e.value=v,c&&c===w){c=null;return}x=E?v.position-E.position:0}else n(L);r.forEach(y=>{y(a.value,w,{delta:x,type:o0.pop,direction:x?x>0?F8.forward:F8.back:F8.unknown})})};function o(){c=a.value}function u(v){r.push(v);const L=()=>{const w=r.indexOf(v);w>-1&&r.splice(w,1)};return i.push(L),L}function h(){const{history:v}=window;!v.state||v.replaceState(K1({},v.state,{scroll:Ve()}),"")}function p(){for(const v of i)v();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",h),{pauseListeners:o,listen:u,destroy:p}}function Fo(t,e,a,n=!1,r=!1){return{back:t,current:e,forward:a,replaced:n,position:window.history.length,scroll:r?Ve():null}}function fx(t){const{history:e,location:a}=window,n={value:Jf(t,a)},r={value:e.state};r.value||i(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(o,u,h){const p=t.indexOf("#"),v=p>-1?(a.host&&document.querySelector("base")?t:t.slice(p))+o:lx()+t+o;try{e[h?"replaceState":"pushState"](u,"",v),r.value=u}catch(L){console.error(L),a[h?"replace":"assign"](v)}}function c(o,u){const h=K1({},e.state,Fo(r.value.back,o,r.value.forward,!0),u,{position:r.value.position});i(o,h,!0),n.value=o}function s(o,u){const h=K1({},r.value,e.state,{forward:o,scroll:Ve()});i(h.current,h,!0);const p=K1({},Fo(n.value,o,null),{position:h.position+1},u);i(o,p,!1),n.value=o}return{location:n,state:r,push:s,replace:c}}function ux(t){t=ax(t);const e=fx(t),a=Cx(t,e.state,e.location,e.replace);function n(i,c=!0){c||a.pauseListeners(),history.go(i)}const r=K1({location:"",base:t,go:n,createHref:rx.bind(null,t)},e,a);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function hx(t){return typeof t=="string"||t&&typeof t=="object"}function Zf(t){return typeof t=="string"||typeof t=="symbol"}const _4={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},eu=Symbol("");var Uo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Uo||(Uo={}));function x6(t,e){return K1(new Error,{type:t,[eu]:!0},e)}function Z3(t,e){return t instanceof Error&&eu in t&&(e==null||!!(t.type&e))}const $o="[^/]+?",dx={sensitive:!1,strict:!1,start:!0,end:!0},mx=/[.+*?^${}()[\]/\\]/g;function px(t,e){const a=K1({},dx,e),n=[];let r=a.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];a.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const v=u[p];let L=40+(a.sensitive?.25:0);if(v.type===0)p||(r+="/"),r+=v.value.replace(mx,"\\$&"),L+=40;else if(v.type===1){const{value:w,repeatable:E,optional:x,regexp:y}=v;i.push({name:w,repeatable:E,optional:x});const A=y||$o;if(A!==$o){L+=10;try{new RegExp(`(${A})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${w}" (${A}): `+F.message)}}let B=E?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;p||(B=x&&u.length<2?`(?:/${B})`:"/"+B),x&&(B+="?"),r+=B,L+=20,x&&(L+=-8),E&&(L+=-20),A===".*"&&(L+=-50)}h.push(L)}n.push(h)}if(a.strict&&a.end){const u=n.length-1;n[u][n[u].length-1]+=.7000000000000001}a.strict||(r+="/?"),a.end?r+="$":a.strict&&(r+="(?:/|$)");const c=new RegExp(r,a.sensitive?"":"i");function s(u){const h=u.match(c),p={};if(!h)return null;for(let v=1;v<h.length;v++){const L=h[v]||"",w=i[v-1];p[w.name]=L&&w.repeatable?L.split("/"):L}return p}function o(u){let h="",p=!1;for(const v of t){(!p||!h.endsWith("/"))&&(h+="/"),p=!1;for(const L of v)if(L.type===0)h+=L.value;else if(L.type===1){const{value:w,repeatable:E,optional:x}=L,y=w in u?u[w]:"";if(S3(y)&&!E)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const A=S3(y)?y.join("/"):y;if(!A)if(x)v.length<2&&(h.endsWith("/")?h=h.slice(0,-1):p=!0);else throw new Error(`Missing required param "${w}"`);h+=A}}return h||"/"}return{re:c,score:n,keys:i,parse:s,stringify:o}}function vx(t,e){let a=0;for(;a<t.length&&a<e.length;){const n=e[a]-t[a];if(n)return n;a++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gx(t,e){let a=0;const n=t.score,r=e.score;for(;a<n.length&&a<r.length;){const i=vx(n[a],r[a]);if(i)return i;a++}if(Math.abs(r.length-n.length)===1){if(qo(n))return 1;if(qo(r))return-1}return r.length-n.length}function qo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Lx={type:0,value:""},zx=/[a-zA-Z0-9_]/;function Mx(t){if(!t)return[[]];if(t==="/")return[[Lx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(L){throw new Error(`ERR (${a})/"${u}": ${L}`)}let a=0,n=a;const r=[];let i;function c(){i&&r.push(i),i=[]}let s=0,o,u="",h="";function p(){!u||(a===0?i.push({type:0,value:u}):a===1||a===2||a===3?(i.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),u="")}function v(){u+=o}for(;s<t.length;){if(o=t[s++],o==="\\"&&a!==2){n=a,a=4;continue}switch(a){case 0:o==="/"?(u&&p(),c()):o===":"?(p(),a=1):v();break;case 4:v(),a=n;break;case 1:o==="("?a=2:zx.test(o)?v():(p(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&s--);break;case 2:o===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+o:a=3:h+=o;break;case 3:p(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&s--,h="";break;default:e("Unknown state");break}}return a===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),c(),r}function Hx(t,e,a){const n=px(Mx(t.path),a),r=K1(n,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Vx(t,e){const a=[],n=new Map;e=Wo({strict:!1,end:!0,sensitive:!1},e);function r(h){return n.get(h)}function i(h,p,v){const L=!v,w=yx(h);w.aliasOf=v&&v.record;const E=Wo(e,h),x=[w];if("alias"in h){const B=typeof h.alias=="string"?[h.alias]:h.alias;for(const F of B)x.push(K1({},w,{components:v?v.record.components:w.components,path:F,aliasOf:v?v.record:w}))}let y,A;for(const B of x){const{path:F}=B;if(p&&F[0]!=="/"){const Q=p.record.path,r1=Q[Q.length-1]==="/"?"":"/";B.path=p.record.path+(F&&r1+F)}if(y=Hx(B,p,E),v?v.alias.push(y):(A=A||y,A!==y&&A.alias.push(y),L&&h.name&&!jo(y)&&c(h.name)),w.children){const Q=w.children;for(let r1=0;r1<Q.length;r1++)i(Q[r1],y,v&&v.children[r1])}v=v||y,o(y)}return A?()=>{c(A)}:B8}function c(h){if(Zf(h)){const p=n.get(h);p&&(n.delete(h),a.splice(a.indexOf(p),1),p.children.forEach(c),p.alias.forEach(c))}else{const p=a.indexOf(h);p>-1&&(a.splice(p,1),h.record.name&&n.delete(h.record.name),h.children.forEach(c),h.alias.forEach(c))}}function s(){return a}function o(h){let p=0;for(;p<a.length&&gx(h,a[p])>=0&&(h.record.path!==a[p].record.path||!tu(h,a[p]));)p++;a.splice(p,0,h),h.record.name&&!jo(h)&&n.set(h.record.name,h)}function u(h,p){let v,L={},w,E;if("name"in h&&h.name){if(v=n.get(h.name),!v)throw x6(1,{location:h});E=v.record.name,L=K1(bx(p.params,v.keys.filter(A=>!A.optional).map(A=>A.name)),h.params),w=v.stringify(L)}else if("path"in h)w=h.path,v=a.find(A=>A.re.test(w)),v&&(L=v.parse(w),E=v.record.name);else{if(v=p.name?n.get(p.name):a.find(A=>A.re.test(p.path)),!v)throw x6(1,{location:h,currentLocation:p});E=v.record.name,L=K1({},p.params,h.params),w=v.stringify(L)}const x=[];let y=v;for(;y;)x.unshift(y.record),y=y.parent;return{name:E,path:w,params:L,matched:x,meta:Sx(x)}}return t.forEach(h=>i(h)),{addRoute:i,resolve:u,removeRoute:c,getRoutes:s,getRecordMatcher:r}}function bx(t,e){const a={};for(const n of e)n in t&&(a[n]=t[n]);return a}function yx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wx(t){const e={},a=t.props||!1;if("component"in t)e.default=a;else for(const n in t.components)e[n]=typeof a=="boolean"?a:a[n];return e}function jo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Sx(t){return t.reduce((e,a)=>K1(e,a.meta),{})}function Wo(t,e){const a={};for(const n in t)a[n]=n in e?e[n]:t[n];return a}function tu(t,e){return e.children.some(a=>a===t||tu(t,a))}const au=/#/g,xx=/&/g,Nx=/\//g,_x=/=/g,Ax=/\?/g,nu=/\+/g,Ex=/%5B/g,kx=/%5D/g,ru=/%5E/g,Tx=/%60/g,iu=/%7B/g,Ix=/%7C/g,cu=/%7D/g,Px=/%20/g;function mi(t){return encodeURI(""+t).replace(Ix,"|").replace(Ex,"[").replace(kx,"]")}function Dx(t){return mi(t).replace(iu,"{").replace(cu,"}").replace(ru,"^")}function ar(t){return mi(t).replace(nu,"%2B").replace(Px,"+").replace(au,"%23").replace(xx,"%26").replace(Tx,"`").replace(iu,"{").replace(cu,"}").replace(ru,"^")}function Rx(t){return ar(t).replace(_x,"%3D")}function Ox(t){return mi(t).replace(au,"%23").replace(Ax,"%3F")}function Bx(t){return t==null?"":Ox(t).replace(Nx,"%2F")}function I9(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Fx(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(nu," "),c=i.indexOf("="),s=I9(c<0?i:i.slice(0,c)),o=c<0?null:I9(i.slice(c+1));if(s in e){let u=e[s];S3(u)||(u=e[s]=[u]),u.push(o)}else e[s]=o}return e}function Go(t){let e="";for(let a in t){const n=t[a];if(a=Rx(a),n==null){n!==void 0&&(e+=(e.length?"&":"")+a);continue}(S3(n)?n.map(i=>i&&ar(i)):[n&&ar(n)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+a,i!=null&&(e+="="+i))})}return e}function Ux(t){const e={};for(const a in t){const n=t[a];n!==void 0&&(e[a]=S3(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const $x=Symbol(""),Ko=Symbol(""),be=Symbol(""),pi=Symbol(""),nr=Symbol("");function w8(){let t=[];function e(n){return t.push(n),()=>{const r=t.indexOf(n);r>-1&&t.splice(r,1)}}function a(){t=[]}return{add:e,list:()=>t,reset:a}}function P4(t,e,a,n,r){const i=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((c,s)=>{const o=p=>{p===!1?s(x6(4,{from:a,to:e})):p instanceof Error?s(p):hx(p)?s(x6(2,{from:e,to:p})):(i&&n.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),c())},u=t.call(n&&n.instances[r],e,a,o);let h=Promise.resolve(u);t.length<3&&(h=h.then(o)),h.catch(p=>s(p))})}function pn(t,e,a,n){const r=[];for(const i of t)for(const c in i.components){let s=i.components[c];if(!(e!=="beforeRouteEnter"&&!i.instances[c]))if(qx(s)){const u=(s.__vccOpts||s)[e];u&&r.push(P4(u,a,n,i,c))}else{let o=s();r.push(()=>o.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));const h=YS(u)?u.default:u;i.components[c]=h;const v=(h.__vccOpts||h)[e];return v&&P4(v,a,n,i,c)()}))}}return r}function qx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yo(t){const e=O3(be),a=O3(pi),n=a2(()=>e.resolve(g6(t.to))),r=a2(()=>{const{matched:o}=n.value,{length:u}=o,h=o[u-1],p=a.matched;if(!h||!p.length)return-1;const v=p.findIndex(S6.bind(null,h));if(v>-1)return v;const L=Xo(o[u-2]);return u>1&&Xo(h)===L&&p[p.length-1].path!==L?p.findIndex(S6.bind(null,o[u-2])):v}),i=a2(()=>r.value>-1&&Kx(a.params,n.value.params)),c=a2(()=>r.value>-1&&r.value===a.matched.length-1&&Qf(a.params,n.value.params));function s(o={}){return Gx(o)?e[g6(t.replace)?"replace":"push"](g6(t.to)).catch(B8):Promise.resolve()}return{route:n,href:a2(()=>n.value.href),isActive:i,isExactActive:c,navigate:s}}const jx=x0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yo,setup(t,{slots:e}){const a=S0(Yo(t)),{options:n}=O3(be),r=a2(()=>({[Qo(t.activeClass,n.linkActiveClass,"router-link-active")]:a.isActive,[Qo(t.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const i=e.default&&e.default(a);return t.custom?i:He("a",{"aria-current":a.isExactActive?t.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:r.value},i)}}}),Wx=jx;function Gx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kx(t,e){for(const a in e){const n=e[a],r=t[a];if(typeof n=="string"){if(n!==r)return!1}else if(!S3(r)||r.length!==n.length||n.some((i,c)=>i!==r[c]))return!1}return!0}function Xo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qo=(t,e,a)=>t!=null?t:e!=null?e:a,Yx=x0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:a}){const n=O3(nr),r=a2(()=>t.route||n.value),i=O3(Ko,0),c=a2(()=>{let u=g6(i);const{matched:h}=r.value;let p;for(;(p=h[u])&&!p.components;)u++;return u}),s=a2(()=>r.value.matched[c.value]);u9(Ko,a2(()=>c.value+1)),u9($x,s),u9(nr,r);const o=e4();return R8(()=>[o.value,s.value,t.name],([u,h,p],[v,L,w])=>{h&&(h.instances[p]=u,L&&L!==h&&u&&u===v&&(h.leaveGuards.size||(h.leaveGuards=L.leaveGuards),h.updateGuards.size||(h.updateGuards=L.updateGuards))),u&&h&&(!L||!S6(h,L)||!v)&&(h.enterCallbacks[p]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,p=s.value,v=p&&p.components[h];if(!v)return Jo(a.default,{Component:v,route:u});const L=p.props[h],w=L?L===!0?u.params:typeof L=="function"?L(u):L:null,x=He(v,K1({},w,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(p.instances[h]=null)},ref:o}));return Jo(a.default,{Component:x,route:u})||x}}});function Jo(t,e){if(!t)return null;const a=t(e);return a.length===1?a[0]:a}const Xx=Yx;function Qx(t){const e=Vx(t.routes,t),a=t.parseQuery||Fx,n=t.stringifyQuery||Go,r=t.history,i=w8(),c=w8(),s=w8(),o=mw(_4);let u=_4;o6&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=dn.bind(null,k=>""+k),p=dn.bind(null,Bx),v=dn.bind(null,I9);function L(k,e1){let $,J;return Zf(k)?($=e.getRecordMatcher(k),J=e1):J=k,e.addRoute(J,$)}function w(k){const e1=e.getRecordMatcher(k);e1&&e.removeRoute(e1)}function E(){return e.getRoutes().map(k=>k.record)}function x(k){return!!e.getRecordMatcher(k)}function y(k,e1){if(e1=K1({},e1||o.value),typeof k=="string"){const h1=mn(a,k,e1.path),g=e.resolve({path:h1.path},e1),b=r.createHref(h1.fullPath);return K1(h1,g,{params:v(g.params),hash:I9(h1.hash),redirectedFrom:void 0,href:b})}let $;if("path"in k)$=K1({},k,{path:mn(a,k.path,e1.path).path});else{const h1=K1({},k.params);for(const g in h1)h1[g]==null&&delete h1[g];$=K1({},k,{params:p(k.params)}),e1.params=p(e1.params)}const J=e.resolve($,e1),I1=k.hash||"";J.params=h(v(J.params));const R1=JS(n,K1({},k,{hash:Dx(I1),path:J.path})),N=r.createHref(R1);return K1({fullPath:R1,hash:I1,query:n===Go?Ux(k.query):k.query||{}},J,{redirectedFrom:void 0,href:N})}function A(k){return typeof k=="string"?mn(a,k,o.value.path):K1({},k)}function B(k,e1){if(u!==k)return x6(8,{from:e1,to:k})}function F(k){return s1(k)}function Q(k){return F(K1(A(k),{replace:!0}))}function r1(k){const e1=k.matched[k.matched.length-1];if(e1&&e1.redirect){const{redirect:$}=e1;let J=typeof $=="function"?$(k):$;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=A(J):{path:J},J.params={}),K1({query:k.query,hash:k.hash,params:"path"in J?{}:k.params},J)}}function s1(k,e1){const $=u=y(k),J=o.value,I1=k.state,R1=k.force,N=k.replace===!0,h1=r1($);if(h1)return s1(K1(A(h1),{state:I1,force:R1,replace:N}),e1||$);const g=$;g.redirectedFrom=e1;let b;return!R1&&ZS(n,J,$)&&(b=x6(16,{to:g,from:J}),g2(J,J,!0,!1)),(b?Promise.resolve(b):C1(g,J)).catch(_=>Z3(_)?Z3(_,2)?_:G1(_):Z(_,g,J)).then(_=>{if(_){if(Z3(_,2))return s1(K1({replace:N},A(_.to),{state:I1,force:R1}),e1||g)}else _=E1(g,J,!0,N,I1);return H1(g,J,_),_})}function T1(k,e1){const $=B(k,e1);return $?Promise.reject($):Promise.resolve()}function C1(k,e1){let $;const[J,I1,R1]=Jx(k,e1);$=pn(J.reverse(),"beforeRouteLeave",k,e1);for(const h1 of J)h1.leaveGuards.forEach(g=>{$.push(P4(g,k,e1))});const N=T1.bind(null,k,e1);return $.push(N),r6($).then(()=>{$=[];for(const h1 of i.list())$.push(P4(h1,k,e1));return $.push(N),r6($)}).then(()=>{$=pn(I1,"beforeRouteUpdate",k,e1);for(const h1 of I1)h1.updateGuards.forEach(g=>{$.push(P4(g,k,e1))});return $.push(N),r6($)}).then(()=>{$=[];for(const h1 of k.matched)if(h1.beforeEnter&&!e1.matched.includes(h1))if(S3(h1.beforeEnter))for(const g of h1.beforeEnter)$.push(P4(g,k,e1));else $.push(P4(h1.beforeEnter,k,e1));return $.push(N),r6($)}).then(()=>(k.matched.forEach(h1=>h1.enterCallbacks={}),$=pn(R1,"beforeRouteEnter",k,e1),$.push(N),r6($))).then(()=>{$=[];for(const h1 of c.list())$.push(P4(h1,k,e1));return $.push(N),r6($)}).catch(h1=>Z3(h1,8)?h1:Promise.reject(h1))}function H1(k,e1,$){for(const J of s.list())J(k,e1,$)}function E1(k,e1,$,J,I1){const R1=B(k,e1);if(R1)return R1;const N=e1===_4,h1=o6?history.state:{};$&&(J||N?r.replace(k.fullPath,K1({scroll:N&&h1&&h1.scroll},I1)):r.push(k.fullPath,I1)),o.value=k,g2(k,e1,$,N),G1()}let S;function $1(){S||(S=r.listen((k,e1,$)=>{if(!X1.listening)return;const J=y(k),I1=r1(J);if(I1){s1(K1(I1,{replace:!0}),J).catch(B8);return}u=J;const R1=o.value;o6&&sx(Bo(R1.fullPath,$.delta),Ve()),C1(J,R1).catch(N=>Z3(N,12)?N:Z3(N,2)?(s1(N.to,J).then(h1=>{Z3(h1,20)&&!$.delta&&$.type===o0.pop&&r.go(-1,!1)}).catch(B8),Promise.reject()):($.delta&&r.go(-$.delta,!1),Z(N,J,R1))).then(N=>{N=N||E1(J,R1,!1),N&&($.delta&&!Z3(N,8)?r.go(-$.delta,!1):$.type===o0.pop&&Z3(N,20)&&r.go(-1,!1)),H1(J,R1,N)}).catch(B8)}))}let F1=w8(),c2=w8(),v1;function Z(k,e1,$){G1(k);const J=c2.list();return J.length?J.forEach(I1=>I1(k,e1,$)):console.error(k),Promise.reject(k)}function w1(){return v1&&o.value!==_4?Promise.resolve():new Promise((k,e1)=>{F1.add([k,e1])})}function G1(k){return v1||(v1=!k,$1(),F1.list().forEach(([e1,$])=>k?$(k):e1()),F1.reset()),k}function g2(k,e1,$,J){const{scrollBehavior:I1}=t;if(!o6||!I1)return Promise.resolve();const R1=!$&&ox(Bo(k.fullPath,0))||(J||!$)&&history.state&&history.state.scroll||null;return Mf().then(()=>I1(k,e1,R1)).then(N=>N&&cx(N)).catch(N=>Z(N,k,e1))}const h2=k=>r.go(k);let r2;const Z1=new Set,X1={currentRoute:o,listening:!0,addRoute:L,removeRoute:w,hasRoute:x,getRoutes:E,resolve:y,options:t,push:F,replace:Q,go:h2,back:()=>h2(-1),forward:()=>h2(1),beforeEach:i.add,beforeResolve:c.add,afterEach:s.add,onError:c2.add,isReady:w1,install(k){const e1=this;k.component("RouterLink",Wx),k.component("RouterView",Xx),k.config.globalProperties.$router=e1,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>g6(o)}),o6&&!r2&&o.value===_4&&(r2=!0,F(r.location).catch(I1=>{}));const $={};for(const I1 in _4)$[I1]=a2(()=>o.value[I1]);k.provide(be,e1),k.provide(pi,S0($)),k.provide(nr,o);const J=k.unmount;Z1.add(k),k.unmount=function(){Z1.delete(k),Z1.size<1&&(u=_4,S&&S(),S=null,o.value=_4,r2=!1,v1=!1),J()}}};return X1}function r6(t){return t.reduce((e,a)=>e.then(()=>a()),Promise.resolve())}function Jx(t,e){const a=[],n=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let c=0;c<i;c++){const s=e.matched[c];s&&(t.matched.find(u=>S6(u,s))?n.push(s):a.push(s));const o=t.matched[c];o&&(e.matched.find(u=>S6(u,o))||r.push(o))}return[a,n,r]}function Zo(){return O3(be)}function Zx(){return O3(pi)}/**
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
 *//**
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
 */const su=function(t){const e=[];let a=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e[a++]=r:r<2048?(e[a++]=r>>6|192,e[a++]=r&63|128):(r&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++n)&1023),e[a++]=r>>18|240,e[a++]=r>>12&63|128,e[a++]=r>>6&63|128,e[a++]=r&63|128):(e[a++]=r>>12|224,e[a++]=r>>6&63|128,e[a++]=r&63|128)}return e},eN=function(t){const e=[];let a=0,n=0;for(;a<t.length;){const r=t[a++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[a++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[a++],c=t[a++],s=t[a++],o=((r&7)<<18|(i&63)<<12|(c&63)<<6|s&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const i=t[a++],c=t[a++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|c&63)}}return e.join("")},ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<t.length;r+=3){const i=t[r],c=r+1<t.length,s=c?t[r+1]:0,o=r+2<t.length,u=o?t[r+2]:0,h=i>>2,p=(i&3)<<4|s>>4;let v=(s&15)<<2|u>>6,L=u&63;o||(L=64,c||(v=64)),n.push(a[h],a[p],a[v],a[L])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(su(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const a=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<t.length;){const i=a[t.charAt(r++)],s=r<t.length?a[t.charAt(r)]:0;++r;const u=r<t.length?a[t.charAt(r)]:64;++r;const p=r<t.length?a[t.charAt(r)]:64;if(++r,i==null||s==null||u==null||p==null)throw Error();const v=i<<2|s>>4;if(n.push(v),u!==64){const L=s<<4&240|u>>2;if(n.push(L),p!==64){const w=u<<6&192|p;n.push(w)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},tN=function(t){const e=su(t);return ou.encodeByteArray(e,!0)},lu=function(t){return tN(t).replace(/\./g,"")},aN=function(t){try{return ou.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class nN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}wrapCallback(e){return(a,n)=>{a?this.reject(a):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(a):e(a,n))}}}/**
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
 */function H2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H2())}function fu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rN(){return H2().indexOf("Electron/")>=0}function hu(){const t=H2();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iN(){return H2().indexOf("MSAppHost/")>=0}function cN(){return typeof indexedDB=="object"}function sN(){return new Promise((t,e)=>{try{let a=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),a||self.indexedDB.deleteDatabase(n),t(!0)},r.onupgradeneeded=()=>{a=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(a){e(a)}})}/**
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
 */const oN="FirebaseError";class F5 extends Error{constructor(e,a,n){super(a),this.code=e,this.customData=n,this.name=oN,Object.setPrototypeOf(this,F5.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N0.prototype.create)}}class N0{constructor(e,a,n){this.service=e,this.serviceName=a,this.errors=n}create(e,...a){const n=a[0]||{},r=`${this.service}/${e}`,i=this.errors[e],c=i?lN(i,n):"Error",s=`${this.serviceName}: ${c} (${r}).`;return new F5(r,s,n)}}function lN(t,e){return t.replace(CN,(a,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const CN=/\{\$([^}]+)}/g;function fN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function P9(t,e){if(t===e)return!0;const a=Object.keys(t),n=Object.keys(e);for(const r of a){if(!n.includes(r))return!1;const i=t[r],c=e[r];if(el(i)&&el(c)){if(!P9(i,c))return!1}else if(i!==c)return!1}for(const r of n)if(!a.includes(r))return!1;return!0}function el(t){return t!==null&&typeof t=="object"}/**
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
 */function _0(t){const e=[];for(const[a,n]of Object.entries(t))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(a)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(a)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function _8(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function A8(t){const e=t.indexOf("?");if(!e)return"";const a=t.indexOf("#",e);return t.substring(e,a>0?a:void 0)}function uN(t,e){const a=new hN(t,e);return a.subscribe.bind(a)}class hN{constructor(e,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(a=>{a.next(e)})}error(e){this.forEachObserver(a=>{a.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,a,n){let r;if(e===void 0&&a===void 0&&n===void 0)throw new Error("Missing Observer.");dN(e,["next","error","complete"])?r=e:r={next:e,error:a,complete:n},r.next===void 0&&(r.next=vn),r.error===void 0&&(r.error=vn),r.complete===void 0&&(r.complete=vn);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,e)}sendOne(e,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{a(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dN(t,e){if(typeof t!="object"||t===null)return!1;for(const a of e)if(a in t&&typeof t[a]=="function")return!0;return!1}function vn(){}/**
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
 */function i3(t){return t&&t._delegate?t._delegate:t}class x5{constructor(e,a,n){this.name=e,this.instanceFactory=a,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const m5="[DEFAULT]";/**
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
 */class mN{constructor(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){const n=new nN;if(this.instancesDeferred.set(a,n),this.isInitialized(a)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:a});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(e){var a;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(a=e==null?void 0:e.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vN(e))try{this.getOrInitializeService({instanceIdentifier:m5})}catch{}for(const[a,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(a);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=m5){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...e.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=m5){return this.instances.has(e)}getOptions(e=m5){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:a={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:a});for(const[i,c]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);n===s&&c.resolve(r)}return r}onInit(e,a){var n;const r=this.normalizeInstanceIdentifier(a),i=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const c=this.instances.get(r);return c&&e(c,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,a){const n=this.onInitCallbacks.get(a);if(!!n)for(const r of n)try{r(e,a)}catch{}}getOrInitializeService({instanceIdentifier:e,options:a={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:pN(e),options:a}),this.instances.set(e,n),this.instancesOptions.set(e,a),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=m5){return this.component?this.component.multipleInstances?e:m5:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pN(t){return t===m5?void 0:t}function vN(t){return t.instantiationMode==="EAGER"}/**
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
 */class gN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const a=this.getProvider(e.name);if(a.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);a.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const a=new mN(e,this);return this.providers.set(e,a),a}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U1;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U1||(U1={}));const LN={debug:U1.DEBUG,verbose:U1.VERBOSE,info:U1.INFO,warn:U1.WARN,error:U1.ERROR,silent:U1.SILENT},zN=U1.INFO,MN={[U1.DEBUG]:"log",[U1.VERBOSE]:"log",[U1.INFO]:"info",[U1.WARN]:"warn",[U1.ERROR]:"error"},HN=(t,e,...a)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),r=MN[e];if(r)console[r](`[${n}]  ${t.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vi{constructor(e){this.name=e,this._logLevel=zN,this._logHandler=HN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U1))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U1.DEBUG,...e),this._logHandler(this,U1.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U1.VERBOSE,...e),this._logHandler(this,U1.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U1.INFO,...e),this._logHandler(this,U1.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U1.WARN,...e),this._logHandler(this,U1.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U1.ERROR,...e),this._logHandler(this,U1.ERROR,...e)}}const VN=(t,e)=>e.some(a=>t instanceof a);let tl,al;function bN(){return tl||(tl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yN(){return al||(al=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const du=new WeakMap,rr=new WeakMap,mu=new WeakMap,gn=new WeakMap,gi=new WeakMap;function wN(t){const e=new Promise((a,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",c)},i=()=>{a(q4(t.result)),r()},c=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",c)});return e.then(a=>{a instanceof IDBCursor&&du.set(a,t)}).catch(()=>{}),gi.set(e,t),e}function SN(t){if(rr.has(t))return;const e=new Promise((a,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",c),t.removeEventListener("abort",c)},i=()=>{a(),r()},c=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",c),t.addEventListener("abort",c)});rr.set(t,e)}let ir={get(t,e,a){if(t instanceof IDBTransaction){if(e==="done")return rr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mu.get(t);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return q4(t[e])},set(t,e,a){return t[e]=a,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xN(t){ir=t(ir)}function NN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const n=t.call(Ln(this),e,...a);return mu.set(n,e.sort?e.sort():[e]),q4(n)}:yN().includes(t)?function(...e){return t.apply(Ln(this),e),q4(du.get(this))}:function(...e){return q4(t.apply(Ln(this),e))}}function _N(t){return typeof t=="function"?NN(t):(t instanceof IDBTransaction&&SN(t),VN(t,bN())?new Proxy(t,ir):t)}function q4(t){if(t instanceof IDBRequest)return wN(t);if(gn.has(t))return gn.get(t);const e=_N(t);return e!==t&&(gn.set(t,e),gi.set(e,t)),e}const Ln=t=>gi.get(t);function AN(t,e,{blocked:a,upgrade:n,blocking:r,terminated:i}={}){const c=indexedDB.open(t,e),s=q4(c);return n&&c.addEventListener("upgradeneeded",o=>{n(q4(c.result),o.oldVersion,o.newVersion,q4(c.transaction))}),a&&c.addEventListener("blocked",()=>a()),s.then(o=>{i&&o.addEventListener("close",()=>i()),r&&o.addEventListener("versionchange",()=>r())}).catch(()=>{}),s}const EN=["get","getKey","getAll","getAllKeys","count"],kN=["put","add","delete","clear"],zn=new Map;function nl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zn.get(e))return zn.get(e);const a=e.replace(/FromIndex$/,""),n=e!==a,r=kN.includes(a);if(!(a in(n?IDBIndex:IDBObjectStore).prototype)||!(r||EN.includes(a)))return;const i=async function(c,...s){const o=this.transaction(c,r?"readwrite":"readonly");let u=o.store;return n&&(u=u.index(s.shift())),(await Promise.all([u[a](...s),r&&o.done]))[0]};return zn.set(e,i),i}xN(t=>({...t,get:(e,a,n)=>nl(e,a)||t.get(e,a,n),has:(e,a)=>!!nl(e,a)||t.has(e,a)}));/**
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
 */class TN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(IN(a)){const n=a.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(a=>a).join(" ")}}function IN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cr="@firebase/app",rl="0.7.29";/**
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
 */const Li=new vi("@firebase/app"),PN="@firebase/app-compat",DN="@firebase/analytics-compat",RN="@firebase/analytics",ON="@firebase/app-check-compat",BN="@firebase/app-check",FN="@firebase/auth",UN="@firebase/auth-compat",$N="@firebase/database",qN="@firebase/database-compat",jN="@firebase/functions",WN="@firebase/functions-compat",GN="@firebase/installations",KN="@firebase/installations-compat",YN="@firebase/messaging",XN="@firebase/messaging-compat",QN="@firebase/performance",JN="@firebase/performance-compat",ZN="@firebase/remote-config",e_="@firebase/remote-config-compat",t_="@firebase/storage",a_="@firebase/storage-compat",n_="@firebase/firestore",r_="@firebase/firestore-compat",i_="firebase",c_="9.9.1";/**
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
 */const pu="[DEFAULT]",s_={[cr]:"fire-core",[PN]:"fire-core-compat",[RN]:"fire-analytics",[DN]:"fire-analytics-compat",[BN]:"fire-app-check",[ON]:"fire-app-check-compat",[FN]:"fire-auth",[UN]:"fire-auth-compat",[$N]:"fire-rtdb",[qN]:"fire-rtdb-compat",[jN]:"fire-fn",[WN]:"fire-fn-compat",[GN]:"fire-iid",[KN]:"fire-iid-compat",[YN]:"fire-fcm",[XN]:"fire-fcm-compat",[QN]:"fire-perf",[JN]:"fire-perf-compat",[ZN]:"fire-rc",[e_]:"fire-rc-compat",[t_]:"fire-gcs",[a_]:"fire-gcs-compat",[n_]:"fire-fst",[r_]:"fire-fst-compat","fire-js":"fire-js",[i_]:"fire-js-all"};/**
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
 */const D9=new Map,sr=new Map;function o_(t,e){try{t.container.addComponent(e)}catch(a){Li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,a)}}function N6(t){const e=t.name;if(sr.has(e))return Li.debug(`There were multiple attempts to register component ${e}.`),!1;sr.set(e,t);for(const a of D9.values())o_(a,t);return!0}function zi(t,e){const a=t.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const l_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},N5=new N0("app","Firebase",l_);/**
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
 */class C_{constructor(e,a,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new x5("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw N5.create("app-deleted",{appName:this._name})}}/**
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
 */const A0=c_;function f_(t,e={}){typeof e!="object"&&(e={name:e});const a=Object.assign({name:pu,automaticDataCollectionEnabled:!1},e),n=a.name;if(typeof n!="string"||!n)throw N5.create("bad-app-name",{appName:String(n)});const r=D9.get(n);if(r){if(P9(t,r.options)&&P9(a,r.config))return r;throw N5.create("duplicate-app",{appName:n})}const i=new gN(n);for(const s of sr.values())i.addComponent(s);const c=new C_(t,a,i);return D9.set(n,c),c}function vu(t=pu){const e=D9.get(t);if(!e)throw N5.create("no-app",{appName:t});return e}function j4(t,e,a){var n;let r=(n=s_[t])!==null&&n!==void 0?n:t;a&&(r+=`-${a}`);const i=r.match(/\s|\//),c=e.match(/\s|\//);if(i||c){const s=[`Unable to register library "${r}" with version "${e}":`];i&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&c&&s.push("and"),c&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Li.warn(s.join(" "));return}N6(new x5(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const u_="firebase-heartbeat-database",h_=1,l0="firebase-heartbeat-store";let Mn=null;function gu(){return Mn||(Mn=AN(u_,h_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(l0)}}}).catch(t=>{throw N5.create("storage-open",{originalErrorMessage:t.message})})),Mn}async function d_(t){var e;try{return(await gu()).transaction(l0).objectStore(l0).get(Lu(t))}catch(a){throw N5.create("storage-get",{originalErrorMessage:(e=a)===null||e===void 0?void 0:e.message})}}async function il(t,e){var a;try{const r=(await gu()).transaction(l0,"readwrite");return await r.objectStore(l0).put(e,Lu(t)),r.done}catch(n){throw N5.create("storage-set",{originalErrorMessage:(a=n)===null||a===void 0?void 0:a.message})}}function Lu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const m_=1024,p_=30*24*60*60*1e3;class v_{constructor(e){this.container=e,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new L_(a),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=cl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(r=>r.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=p_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cl(),{heartbeatsToSend:a,unsentEntries:n}=g_(this._heartbeatsCache.heartbeats),r=lu(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function cl(){return new Date().toISOString().substring(0,10)}function g_(t,e=m_){const a=[];let n=t.slice();for(const r of t){const i=a.find(c=>c.agent===r.agent);if(i){if(i.dates.push(r.date),sl(a)>e){i.dates.pop();break}}else if(a.push({agent:r.agent,dates:[r.date]}),sl(a)>e){a.pop();break}n=n.slice(1)}return{heartbeatsToSend:a,unsentEntries:n}}class L_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cN()?sN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await d_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var a;if(await this._canUseIndexedDBPromise){const r=await this.read();return il(this.app,{lastSentHeartbeatDate:(a=e.lastSentHeartbeatDate)!==null&&a!==void 0?a:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var a;if(await this._canUseIndexedDBPromise){const r=await this.read();return il(this.app,{lastSentHeartbeatDate:(a=e.lastSentHeartbeatDate)!==null&&a!==void 0?a:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sl(t){return lu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function z_(t){N6(new x5("platform-logger",e=>new TN(e),"PRIVATE")),N6(new x5("heartbeat",e=>new v_(e),"PRIVATE")),j4(cr,rl,t),j4(cr,rl,"esm2017"),j4("fire-js","")}z_("");var M_="firebase",H_="9.9.1";/**
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
 */j4(M_,H_,"app");var V_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n1,Mi=Mi||{},M1=V_||self;function R9(){}function or(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function E0(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function b_(t){return Object.prototype.hasOwnProperty.call(t,Hn)&&t[Hn]||(t[Hn]=++y_)}var Hn="closure_uid_"+(1e9*Math.random()>>>0),y_=0;function w_(t,e,a){return t.call.apply(t.bind,arguments)}function S_(t,e,a){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function N2(t,e,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?N2=w_:N2=S_,N2.apply(null,arguments)}function e9(t,e){var a=Array.prototype.slice.call(arguments,1);return function(){var n=a.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function E2(t,e){function a(){}a.prototype=e.prototype,t.Z=e.prototype,t.prototype=new a,t.prototype.constructor=t,t.Vb=function(n,r,i){for(var c=Array(arguments.length-2),s=2;s<arguments.length;s++)c[s-2]=arguments[s];return e.prototype[r].apply(n,c)}}function t5(){this.s=this.s,this.o=this.o}var x_=0;t5.prototype.s=!1;t5.prototype.na=function(){!this.s&&(this.s=!0,this.M(),x_!=0)&&b_(this)};t5.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let a=0;a<t.length;a++)if(a in t&&t[a]===e)return a;return-1},Mu=Array.prototype.forEach?function(t,e,a){Array.prototype.forEach.call(t,e,a)}:function(t,e,a){const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)i in r&&e.call(a,r[i],i,t)};function N_(t){e:{var e=zA;const a=t.length,n=typeof t=="string"?t.split(""):t;for(let r=0;r<a;r++)if(r in n&&e.call(void 0,n[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function ol(t){return Array.prototype.concat.apply([],arguments)}function Hi(t){const e=t.length;if(0<e){const a=Array(e);for(let n=0;n<e;n++)a[n]=t[n];return a}return[]}function O9(t){return/^[\s\xa0]*$/.test(t)}var ll=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function B2(t,e){return t.indexOf(e)!=-1}function Vn(t,e){return t<e?-1:t>e?1:0}var F2;e:{var Cl=M1.navigator;if(Cl){var fl=Cl.userAgent;if(fl){F2=fl;break e}}F2=""}function Vi(t,e,a){for(const n in t)e.call(a,t[n],n,t)}function Hu(t){const e={};for(const a in t)e[a]=t[a];return e}var ul="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vu(t,e){let a,n;for(let r=1;r<arguments.length;r++){n=arguments[r];for(a in n)t[a]=n[a];for(let i=0;i<ul.length;i++)a=ul[i],Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}}function bi(t){return bi[" "](t),t}bi[" "]=R9;function __(t){var e=k_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var A_=B2(F2,"Opera"),_6=B2(F2,"Trident")||B2(F2,"MSIE"),bu=B2(F2,"Edge"),lr=bu||_6,yu=B2(F2,"Gecko")&&!(B2(F2.toLowerCase(),"webkit")&&!B2(F2,"Edge"))&&!(B2(F2,"Trident")||B2(F2,"MSIE"))&&!B2(F2,"Edge"),E_=B2(F2.toLowerCase(),"webkit")&&!B2(F2,"Edge");function wu(){var t=M1.document;return t?t.documentMode:void 0}var B9;e:{var bn="",yn=function(){var t=F2;if(yu)return/rv:([^\);]+)(\)|;)/.exec(t);if(bu)return/Edge\/([\d\.]+)/.exec(t);if(_6)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(E_)return/WebKit\/(\S+)/.exec(t);if(A_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yn&&(bn=yn?yn[1]:""),_6){var wn=wu();if(wn!=null&&wn>parseFloat(bn)){B9=String(wn);break e}}B9=bn}var k_={};function T_(){return __(function(){let t=0;const e=ll(String(B9)).split("."),a=ll("9").split("."),n=Math.max(e.length,a.length);for(let c=0;t==0&&c<n;c++){var r=e[c]||"",i=a[c]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Vn(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Vn(r[2].length==0,i[2].length==0)||Vn(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Cr;if(M1.document&&_6){var hl=wu();Cr=hl||parseInt(B9,10)||void 0}else Cr=void 0;var I_=Cr,P_=function(){if(!M1.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M1.addEventListener("test",R9,e),M1.removeEventListener("test",R9,e)}catch{}return t}();function D2(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}D2.prototype.h=function(){this.defaultPrevented=!0};function C0(t,e){if(D2.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yu){e:{try{bi(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else a=="mouseover"?e=t.fromElement:a=="mouseout"&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:D_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&C0.Z.h.call(this)}}E2(C0,D2);var D_={2:"touch",3:"pen",4:"mouse"};C0.prototype.h=function(){C0.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var k0="closure_listenable_"+(1e6*Math.random()|0),R_=0;function O_(t,e,a,n,r){this.listener=t,this.proxy=null,this.src=e,this.type=a,this.capture=!!n,this.ia=r,this.key=++R_,this.ca=this.fa=!1}function ye(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function we(t){this.src=t,this.g={},this.h=0}we.prototype.add=function(t,e,a,n,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var c=ur(t,e,n,r);return-1<c?(e=t[c],a||(e.fa=!1)):(e=new O_(e,this.src,i,!!n,r),e.fa=a,t.push(e)),e};function fr(t,e){var a=e.type;if(a in t.g){var n=t.g[a],r=zu(n,e),i;(i=0<=r)&&Array.prototype.splice.call(n,r,1),i&&(ye(e),t.g[a].length==0&&(delete t.g[a],t.h--))}}function ur(t,e,a,n){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!a&&i.ia==n)return r}return-1}var yi="closure_lm_"+(1e6*Math.random()|0),Sn={};function Su(t,e,a,n,r){if(n&&n.once)return Nu(t,e,a,n,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Su(t,e[i],a,n,r);return null}return a=xi(a),t&&t[k0]?t.N(e,a,E0(n)?!!n.capture:!!n,r):xu(t,e,a,!1,n,r)}function xu(t,e,a,n,r,i){if(!e)throw Error("Invalid event type");var c=E0(r)?!!r.capture:!!r,s=Si(t);if(s||(t[yi]=s=new we(t)),a=s.add(e,a,n,c,i),a.proxy)return a;if(n=B_(),a.proxy=n,n.src=t,n.listener=a,t.addEventListener)P_||(r=c),r===void 0&&(r=!1),t.addEventListener(e.toString(),n,r);else if(t.attachEvent)t.attachEvent(Au(e.toString()),n);else if(t.addListener&&t.removeListener)t.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return a}function B_(){function t(a){return e.call(t.src,t.listener,a)}var e=F_;return t}function Nu(t,e,a,n,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Nu(t,e[i],a,n,r);return null}return a=xi(a),t&&t[k0]?t.O(e,a,E0(n)?!!n.capture:!!n,r):xu(t,e,a,!0,n,r)}function _u(t,e,a,n,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)_u(t,e[i],a,n,r);else n=E0(n)?!!n.capture:!!n,a=xi(a),t&&t[k0]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],a=ur(i,a,n,r),-1<a&&(ye(i[a]),Array.prototype.splice.call(i,a,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Si(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ur(e,a,n,r)),(a=-1<t?e[t]:null)&&wi(a))}function wi(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[k0])fr(e.i,t);else{var a=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(a,n,t.capture):e.detachEvent?e.detachEvent(Au(a),n):e.addListener&&e.removeListener&&e.removeListener(n),(a=Si(e))?(fr(a,t),a.h==0&&(a.src=null,e[yi]=null)):ye(t)}}}function Au(t){return t in Sn?Sn[t]:Sn[t]="on"+t}function F_(t,e){if(t.ca)t=!0;else{e=new C0(e,this);var a=t.listener,n=t.ia||t.src;t.fa&&wi(t),t=a.call(n,e)}return t}function Si(t){return t=t[yi],t instanceof we?t:null}var xn="__closure_events_fn_"+(1e9*Math.random()>>>0);function xi(t){return typeof t=="function"?t:(t[xn]||(t[xn]=function(e){return t.handleEvent(e)}),t[xn])}function V2(){t5.call(this),this.i=new we(this),this.P=this,this.I=null}E2(V2,t5);V2.prototype[k0]=!0;V2.prototype.removeEventListener=function(t,e,a,n){_u(this,t,e,a,n)};function _2(t,e){var a,n=t.I;if(n)for(a=[];n;n=n.I)a.push(n);if(t=t.P,n=e.type||e,typeof e=="string")e=new D2(e,t);else if(e instanceof D2)e.target=e.target||t;else{var r=e;e=new D2(n,t),Vu(e,r)}if(r=!0,a)for(var i=a.length-1;0<=i;i--){var c=e.g=a[i];r=t9(c,n,!0,e)&&r}if(c=e.g=t,r=t9(c,n,!0,e)&&r,r=t9(c,n,!1,e)&&r,a)for(i=0;i<a.length;i++)c=e.g=a[i],r=t9(c,n,!1,e)&&r}V2.prototype.M=function(){if(V2.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var a=t.g[e],n=0;n<a.length;n++)ye(a[n]);delete t.g[e],t.h--}}this.I=null};V2.prototype.N=function(t,e,a,n){return this.i.add(String(t),e,!1,a,n)};V2.prototype.O=function(t,e,a,n){return this.i.add(String(t),e,!0,a,n)};function t9(t,e,a,n){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var c=e[i];if(c&&!c.ca&&c.capture==a){var s=c.listener,o=c.ia||c.src;c.fa&&fr(t.i,c),r=s.call(o,n)!==!1&&r}}return r&&!n.defaultPrevented}var Ni=M1.JSON.stringify;function U_(){var t=ku;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $_{constructor(){this.h=this.g=null}add(e,a){const n=Eu.get();n.set(e,a),this.h?this.h.next=n:this.g=n,this.h=n}}var Eu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new q_,t=>t.reset());class q_{constructor(){this.next=this.g=this.h=null}set(e,a){this.h=e,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function j_(t){M1.setTimeout(()=>{throw t},0)}function _i(t,e){hr||W_(),dr||(hr(),dr=!0),ku.add(t,e)}var hr;function W_(){var t=M1.Promise.resolve(void 0);hr=function(){t.then(G_)}}var dr=!1,ku=new $_;function G_(){for(var t;t=U_();){try{t.h.call(t.g)}catch(a){j_(a)}var e=Eu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dr=!1}function Se(t,e){V2.call(this),this.h=t||1,this.g=e||M1,this.j=N2(this.kb,this),this.l=Date.now()}E2(Se,V2);n1=Se.prototype;n1.da=!1;n1.S=null;n1.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),_2(this,"tick"),this.da&&(Ai(this),this.start()))}};n1.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ai(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}n1.M=function(){Se.Z.M.call(this),Ai(this),delete this.g};function Ei(t,e,a){if(typeof t=="function")a&&(t=N2(t,a));else if(t&&typeof t.handleEvent=="function")t=N2(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M1.setTimeout(t,e||0)}function Tu(t){t.g=Ei(()=>{t.g=null,t.i&&(t.i=!1,Tu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class K_ extends t5{constructor(e,a){super(),this.m=e,this.j=a,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tu(this)}M(){super.M(),this.g&&(M1.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function f0(t){t5.call(this),this.h=t,this.g={}}E2(f0,t5);var dl=[];function Iu(t,e,a,n){Array.isArray(a)||(a&&(dl[0]=a.toString()),a=dl);for(var r=0;r<a.length;r++){var i=Su(e,a[r],n||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Pu(t){Vi(t.g,function(e,a){this.g.hasOwnProperty(a)&&wi(e)},t),t.g={}}f0.prototype.M=function(){f0.Z.M.call(this),Pu(this)};f0.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xe(){this.g=!0}xe.prototype.Aa=function(){this.g=!1};function Y_(t,e,a,n,r,i){t.info(function(){if(t.g)if(i)for(var c="",s=i.split("&"),o=0;o<s.length;o++){var u=s[o].split("=");if(1<u.length){var h=u[0];u=u[1];var p=h.split("_");c=2<=p.length&&p[1]=="type"?c+(h+"="+u+"&"):c+(h+"=redacted&")}}else c=null;else c=i;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+e+`
`+a+`
`+c})}function X_(t,e,a,n,r,i,c){t.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+e+`
`+a+`
`+i+" "+c})}function C6(t,e,a,n){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+J_(t,a)+(n?" "+n:"")})}function Q_(t,e){t.info(function(){return"TIMEOUT: "+e})}xe.prototype.info=function(){};function J_(t,e){if(!t.g)return e;if(!e)return null;try{var a=JSON.parse(e);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var n=a[t];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var c=1;c<r.length;c++)r[c]=""}}}}return Ni(a)}catch{return e}}var U5={},ml=null;function Ne(){return ml=ml||new V2}U5.Ma="serverreachability";function Du(t){D2.call(this,U5.Ma,t)}E2(Du,D2);function u0(t){const e=Ne();_2(e,new Du(e))}U5.STAT_EVENT="statevent";function Ru(t,e){D2.call(this,U5.STAT_EVENT,t),this.stat=e}E2(Ru,D2);function U2(t){const e=Ne();_2(e,new Ru(e,t))}U5.Na="timingevent";function Ou(t,e){D2.call(this,U5.Na,t),this.size=e}E2(Ou,D2);function T0(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M1.setTimeout(function(){t()},e)}var _e={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Bu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ki(){}ki.prototype.h=null;function pl(t){return t.h||(t.h=t.i())}function Fu(){}var I0={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ti(){D2.call(this,"d")}E2(Ti,D2);function Ii(){D2.call(this,"c")}E2(Ii,D2);var mr;function Ae(){}E2(Ae,ki);Ae.prototype.g=function(){return new XMLHttpRequest};Ae.prototype.i=function(){return{}};mr=new Ae;function P0(t,e,a,n){this.l=t,this.j=e,this.m=a,this.X=n||1,this.V=new f0(this),this.P=Z_,t=lr?125:void 0,this.W=new Se(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Uu}function Uu(){this.i=null,this.g="",this.h=!1}var Z_=45e3,pr={},F9={};n1=P0.prototype;n1.setTimeout=function(t){this.P=t};function vr(t,e,a){t.K=1,t.v=ke(o4(e)),t.s=a,t.U=!0,$u(t,null)}function $u(t,e){t.F=Date.now(),D0(t),t.A=o4(t.v);var a=t.A,n=t.X;Array.isArray(n)||(n=[String(n)]),Xu(a.h,"t",n),t.C=0,a=t.l.H,t.h=new Uu,t.g=ph(t.l,a?e:null,!t.s),0<t.O&&(t.L=new K_(N2(t.Ia,t,t.g),t.O)),Iu(t.V,t.g,"readystatechange",t.gb),e=t.H?Hu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),u0(),Y_(t.j,t.u,t.A,t.m,t.X,t.s)}n1.gb=function(t){t=t.target;const e=this.L;e&&a4(t)==3?e.l():this.Ia(t)};n1.Ia=function(t){try{if(t==this.g)e:{const h=a4(this.g);var e=this.g.Da();const p=this.g.ba();if(!(3>h)&&(h!=3||lr||this.g&&(this.h.h||this.g.ga()||zl(this.g)))){this.I||h!=4||e==7||(e==8||0>=p?u0(3):u0(2)),Ee(this);var a=this.g.ba();this.N=a;t:if(qu(this)){var n=zl(this.g);t="";var r=n.length,i=a4(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){g5(this),U8(this);var c="";break t}this.h.i=new M1.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:i&&e==r-1});n.splice(0,r),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=a==200,X_(this.j,this.u,this.A,this.m,this.X,h,a),this.i){if(this.$&&!this.J){t:{if(this.g){var s,o=this.g;if((s=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O9(s)){var u=s;break t}}u=null}if(a=u)C6(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gr(this,a);else{this.i=!1,this.o=3,U2(12),g5(this),U8(this);break e}}this.U?(ju(this,h,c),lr&&this.i&&h==3&&(Iu(this.V,this.W,"tick",this.fb),this.W.start())):(C6(this.j,this.m,c,null),gr(this,c)),h==4&&g5(this),this.i&&!this.I&&(h==4?uh(this.l,this):(this.i=!1,D0(this)))}else a==400&&0<c.indexOf("Unknown SID")?(this.o=3,U2(12)):(this.o=0,U2(13)),g5(this),U8(this)}}}catch{}finally{}};function qu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ju(t,e,a){let n=!0,r;for(;!t.I&&t.C<a.length;)if(r=eA(t,a),r==F9){e==4&&(t.o=4,U2(14),n=!1),C6(t.j,t.m,null,"[Incomplete Response]");break}else if(r==pr){t.o=4,U2(15),C6(t.j,t.m,a,"[Invalid Chunk]"),n=!1;break}else C6(t.j,t.m,r,null),gr(t,r);qu(t)&&r!=F9&&r!=pr&&(t.h.g="",t.C=0),e!=4||a.length!=0||t.h.h||(t.o=1,U2(16),n=!1),t.i=t.i&&n,n?0<a.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+a.length),qi(e),e.L=!0,U2(11))):(C6(t.j,t.m,a,"[Invalid Chunked Response]"),g5(t),U8(t))}n1.fb=function(){if(this.g){var t=a4(this.g),e=this.g.ga();this.C<e.length&&(Ee(this),ju(this,t,e),this.i&&t!=4&&D0(this))}};function eA(t,e){var a=t.C,n=e.indexOf(`
`,a);return n==-1?F9:(a=Number(e.substring(a,n)),isNaN(a)?pr:(n+=1,n+a>e.length?F9:(e=e.substr(n,a),t.C=n+a,e)))}n1.cancel=function(){this.I=!0,g5(this)};function D0(t){t.Y=Date.now()+t.P,Wu(t,t.P)}function Wu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=T0(N2(t.eb,t),e)}function Ee(t){t.B&&(M1.clearTimeout(t.B),t.B=null)}n1.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Q_(this.j,this.A),this.K!=2&&(u0(),U2(17)),g5(this),this.o=2,U8(this)):Wu(this,this.Y-t)};function U8(t){t.l.G==0||t.I||uh(t.l,t)}function g5(t){Ee(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ai(t.W),Pu(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gr(t,e){try{var a=t.l;if(a.G!=0&&(a.g==t||Lr(a.i,t))){if(a.I=t.N,!t.J&&Lr(a.i,t)&&a.G==3){try{var n=a.Ca.g.parse(e)}catch{n=null}if(Array.isArray(n)&&n.length==3){var r=n;if(r[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)j9(a),Pe(a);else break e;$i(a),U2(18)}}else a.ta=r[1],0<a.ta-a.U&&37500>r[2]&&a.N&&a.A==0&&!a.v&&(a.v=T0(N2(a.ab,a),6e3));if(1>=Zu(a.i)&&a.ka){try{a.ka()}catch{}a.ka=void 0}}else L5(a,11)}else if((t.J||a.g==t)&&j9(a),!O9(e))for(r=a.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(a.U=u[0],u=u[1],a.G==2)if(u[0]=="c"){a.J=u[1],a.la=u[2];const h=u[3];h!=null&&(a.ma=h,a.h.info("VER="+a.ma));const p=u[4];p!=null&&(a.za=p,a.h.info("SVER="+a.za));const v=u[5];v!=null&&typeof v=="number"&&0<v&&(n=1.5*v,a.K=n,a.h.info("backChannelRequestTimeoutMs_="+n)),n=a;const L=t.g;if(L){const w=L.g?L.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=n.i;!i.g&&(B2(w,"spdy")||B2(w,"quic")||B2(w,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Ri(i,i.h),i.h=null))}if(n.D){const E=L.g?L.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(n.sa=E,e2(n.F,n.D,E))}}a.G=3,a.j&&a.j.xa(),a.$&&(a.O=Date.now()-t.F,a.h.info("Handshake RTT: "+a.O+"ms")),n=a;var c=t;if(n.oa=mh(n,n.H?n.la:null,n.W),c.J){eh(n.i,c);var s=c,o=n.K;o&&s.setTimeout(o),s.B&&(Ee(s),D0(s)),n.g=c}else Ch(n);0<a.l.length&&De(a)}else u[0]!="stop"&&u[0]!="close"||L5(a,7);else a.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?L5(a,7):Ui(a):u[0]!="noop"&&a.j&&a.j.wa(u),a.A=0)}}u0(4)}catch{}}function tA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(or(t)){for(var e=[],a=t.length,n=0;n<a;n++)e.push(t[n]);return e}e=[],a=0;for(n in t)e[a++]=t[n];return e}function Pi(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(or(t)||typeof t=="string")Mu(t,e,void 0);else{if(t.T&&typeof t.T=="function")var a=t.T();else if(t.R&&typeof t.R=="function")a=void 0;else if(or(t)||typeof t=="string"){a=[];for(var n=t.length,r=0;r<n;r++)a.push(r)}else for(r in a=[],n=0,t)a[n++]=r;n=tA(t),r=n.length;for(var i=0;i<r;i++)e.call(void 0,n[i],a&&a[i],t)}}function K6(t,e){this.h={},this.g=[],this.i=0;var a=arguments.length;if(1<a){if(a%2)throw Error("Uneven number of arguments");for(var n=0;n<a;n+=2)this.set(arguments[n],arguments[n+1])}else if(t)if(t instanceof K6)for(a=t.T(),n=0;n<a.length;n++)this.set(a[n],t.get(a[n]));else for(n in t)this.set(n,t[n])}n1=K6.prototype;n1.R=function(){Di(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};n1.T=function(){return Di(this),this.g.concat()};function Di(t){if(t.i!=t.g.length){for(var e=0,a=0;e<t.g.length;){var n=t.g[e];_5(t.h,n)&&(t.g[a++]=n),e++}t.g.length=a}if(t.i!=t.g.length){var r={};for(a=e=0;e<t.g.length;)n=t.g[e],_5(r,n)||(t.g[a++]=n,r[n]=1),e++;t.g.length=a}}n1.get=function(t,e){return _5(this.h,t)?this.h[t]:e};n1.set=function(t,e){_5(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};n1.forEach=function(t,e){for(var a=this.T(),n=0;n<a.length;n++){var r=a[n],i=this.get(r);t.call(e,i,r,this)}};function _5(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Gu=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function aA(t,e){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var n=t[a].indexOf("="),r=null;if(0<=n){var i=t[a].substring(0,n);r=t[a].substring(n+1)}else i=t[a];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function A5(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof A5){this.g=e!==void 0?e:t.g,U9(this,t.j),this.s=t.s,$9(this,t.i),q9(this,t.m),this.l=t.l,e=t.h;var a=new h0;a.i=e.i,e.g&&(a.g=new K6(e.g),a.h=e.h),vl(this,a),this.o=t.o}else t&&(a=String(t).match(Gu))?(this.g=!!e,U9(this,a[1]||"",!0),this.s=$8(a[2]||""),$9(this,a[3]||"",!0),q9(this,a[4]),this.l=$8(a[5]||"",!0),vl(this,a[6]||"",!0),this.o=$8(a[7]||"")):(this.g=!!e,this.h=new h0(null,this.g))}A5.prototype.toString=function(){var t=[],e=this.j;e&&t.push(E8(e,gl,!0),":");var a=this.i;return(a||e=="file")&&(t.push("//"),(e=this.s)&&t.push(E8(e,gl,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.i&&a.charAt(0)!="/"&&t.push("/"),t.push(E8(a,a.charAt(0)=="/"?sA:cA,!0))),(a=this.h.toString())&&t.push("?",a),(a=this.o)&&t.push("#",E8(a,lA)),t.join("")};function o4(t){return new A5(t)}function U9(t,e,a){t.j=a?$8(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $9(t,e,a){t.i=a?$8(e,!0):e}function q9(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vl(t,e,a){e instanceof h0?(t.h=e,CA(t.h,t.g)):(a||(e=E8(e,oA)),t.h=new h0(e,t.g))}function e2(t,e,a){t.h.set(e,a)}function ke(t){return e2(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nA(t){return t instanceof A5?o4(t):new A5(t,void 0)}function rA(t,e,a,n){var r=new A5(null,void 0);return t&&U9(r,t),e&&$9(r,e),a&&q9(r,a),n&&(r.l=n),r}function $8(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function E8(t,e,a){return typeof t=="string"?(t=encodeURI(t).replace(e,iA),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gl=/[#\/\?@]/g,cA=/[#\?:]/g,sA=/[#\?]/g,oA=/[#\?@]/g,lA=/#/g;function h0(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function a5(t){t.g||(t.g=new K6,t.h=0,t.i&&aA(t.i,function(e,a){t.add(decodeURIComponent(e.replace(/\+/g," ")),a)}))}n1=h0.prototype;n1.add=function(t,e){a5(this),this.i=null,t=Y6(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(e),this.h+=1,this};function Ku(t,e){a5(t),e=Y6(t,e),_5(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,_5(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Di(t)))}function Yu(t,e){return a5(t),e=Y6(t,e),_5(t.g.h,e)}n1.forEach=function(t,e){a5(this),this.g.forEach(function(a,n){Mu(a,function(r){t.call(e,r,n,this)},this)},this)};n1.T=function(){a5(this);for(var t=this.g.R(),e=this.g.T(),a=[],n=0;n<e.length;n++)for(var r=t[n],i=0;i<r.length;i++)a.push(e[n]);return a};n1.R=function(t){a5(this);var e=[];if(typeof t=="string")Yu(this,t)&&(e=ol(e,this.g.get(Y6(this,t))));else{t=this.g.R();for(var a=0;a<t.length;a++)e=ol(e,t[a])}return e};n1.set=function(t,e){return a5(this),this.i=null,t=Y6(this,t),Yu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};n1.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Xu(t,e,a){Ku(t,e),0<a.length&&(t.i=null,t.g.set(Y6(t,e),Hi(a)),t.h+=a.length)}n1.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),a=0;a<e.length;a++){var n=e[a],r=encodeURIComponent(String(n));n=this.R(n);for(var i=0;i<n.length;i++){var c=r;n[i]!==""&&(c+="="+encodeURIComponent(String(n[i]))),t.push(c)}}return this.i=t.join("&")};function Y6(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CA(t,e){e&&!t.j&&(a5(t),t.i=null,t.g.forEach(function(a,n){var r=n.toLowerCase();n!=r&&(Ku(this,n),Xu(this,r,a))},t)),t.j=e}var fA=class{constructor(t,e){this.h=t,this.g=e}};function Qu(t){this.l=t||uA,M1.PerformanceNavigationTiming?(t=M1.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M1.g&&M1.g.Ea&&M1.g.Ea()&&M1.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uA=10;function Ju(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zu(t){return t.h?1:t.g?t.g.size:0}function Lr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ri(t,e){t.g?t.g.add(e):t.h=e}function eh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Qu.prototype.cancel=function(){if(this.i=th(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function th(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const a of t.g.values())e=e.concat(a.D);return e}return Hi(t.i)}function Oi(){}Oi.prototype.stringify=function(t){return M1.JSON.stringify(t,void 0)};Oi.prototype.parse=function(t){return M1.JSON.parse(t,void 0)};function hA(){this.g=new Oi}function dA(t,e,a){const n=a||"";try{Pi(t,function(r,i){let c=r;E0(r)&&(c=Ni(r)),e.push(n+i+"="+encodeURIComponent(c))})}catch(r){throw e.push(n+"type="+encodeURIComponent("_badmap")),r}}function mA(t,e){const a=new xe;if(M1.Image){const n=new Image;n.onload=e9(a9,a,n,"TestLoadImage: loaded",!0,e),n.onerror=e9(a9,a,n,"TestLoadImage: error",!1,e),n.onabort=e9(a9,a,n,"TestLoadImage: abort",!1,e),n.ontimeout=e9(a9,a,n,"TestLoadImage: timeout",!1,e),M1.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=t}else e(!1)}function a9(t,e,a,n,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(n)}catch{}}function R0(t){this.l=t.$b||null,this.j=t.ib||!1}E2(R0,ki);R0.prototype.g=function(){return new Te(this.l,this.j)};R0.prototype.i=function(t){return function(){return t}}({});function Te(t,e){V2.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Bi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}E2(Te,V2);var Bi=0;n1=Te.prototype;n1.open=function(t,e){if(this.readyState!=Bi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,d0(this)};n1.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||M1).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};n1.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,O0(this)),this.readyState=Bi};n1.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,d0(this)),this.g&&(this.readyState=3,d0(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof M1.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ah(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ah(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}n1.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?O0(this):d0(this),this.readyState==3&&ah(this)}};n1.Ua=function(t){this.g&&(this.response=this.responseText=t,O0(this))};n1.Ta=function(t){this.g&&(this.response=t,O0(this))};n1.ha=function(){this.g&&O0(this)};function O0(t){t.readyState=4,t.l=null,t.j=null,t.A=null,d0(t)}n1.setRequestHeader=function(t,e){this.v.append(t,e)};n1.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};n1.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var a=e.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=e.next();return t.join(`\r
`)};function d0(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Te.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pA=M1.JSON.parse;function u2(t){V2.call(this),this.headers=new K6,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nh,this.K=this.L=!1}E2(u2,V2);var nh="",vA=/^https?$/i,gA=["POST","PUT"];n1=u2.prototype;n1.ea=function(t,e,a,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mr.g(),this.C=this.u?pl(this.u):pl(mr),this.g.onreadystatechange=N2(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ll(this,i);return}t=a||"";const r=new K6(this.headers);n&&Pi(n,function(i,c){r.set(c,i)}),n=N_(r.T()),a=M1.FormData&&t instanceof M1.FormData,!(0<=zu(gA,e))||n||a||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,c){this.g.setRequestHeader(c,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ch(this),0<this.B&&((this.K=LA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=N2(this.pa,this)):this.A=Ei(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ll(this,i)}};function LA(t){return _6&&T_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function zA(t){return t.toLowerCase()=="content-type"}n1.pa=function(){typeof Mi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_2(this,"timeout"),this.abort(8))};function Ll(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rh(t),Ie(t)}function rh(t){t.D||(t.D=!0,_2(t,"complete"),_2(t,"error"))}n1.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_2(this,"complete"),_2(this,"abort"),Ie(this))};n1.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ie(this,!0)),u2.Z.M.call(this)};n1.Fa=function(){this.s||(this.F||this.v||this.l?ih(this):this.cb())};n1.cb=function(){ih(this)};function ih(t){if(t.h&&typeof Mi<"u"&&(!t.C[1]||a4(t)!=4||t.ba()!=2)){if(t.v&&a4(t)==4)Ei(t.Fa,0,t);else if(_2(t,"readystatechange"),a4(t)==4){t.h=!1;try{const s=t.ba();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var a;if(!(a=e)){var n;if(n=s===0){var r=String(t.H).match(Gu)[1]||null;if(!r&&M1.self&&M1.self.location){var i=M1.self.location.protocol;r=i.substr(0,i.length-1)}n=!vA.test(r?r.toLowerCase():"")}a=n}if(a)_2(t,"complete"),_2(t,"success");else{t.m=6;try{var c=2<a4(t)?t.g.statusText:""}catch{c=""}t.j=c+" ["+t.ba()+"]",rh(t)}}finally{Ie(t)}}}}function Ie(t,e){if(t.g){ch(t);const a=t.g,n=t.C[0]?R9:null;t.g=null,t.C=null,e||_2(t,"ready");try{a.onreadystatechange=n}catch{}}}function ch(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(M1.clearTimeout(t.A),t.A=null)}function a4(t){return t.g?t.g.readyState:0}n1.ba=function(){try{return 2<a4(this)?this.g.status:-1}catch{return-1}};n1.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};n1.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pA(e)}};function zl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case nh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}n1.Da=function(){return this.m};n1.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function MA(t){let e="";return Vi(t,function(a,n){e+=n,e+=":",e+=a,e+=`\r
`}),e}function Fi(t,e,a){e:{for(n in a){var n=!1;break e}n=!0}n||(a=MA(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):e2(t,e,a))}function S8(t,e,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||e}function sh(t){this.za=0,this.l=[],this.h=new xe,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=S8("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=S8("baseRetryDelayMs",5e3,t),this.$a=S8("retryDelaySeedMs",1e4,t),this.Ya=S8("forwardChannelMaxRetries",2,t),this.ra=S8("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Qu(t&&t.concurrentRequestLimit),this.Ca=new hA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}n1=sh.prototype;n1.ma=8;n1.G=1;function Ui(t){if(oh(t),t.G==3){var e=t.V++,a=o4(t.F);e2(a,"SID",t.J),e2(a,"RID",e),e2(a,"TYPE","terminate"),B0(t,a),e=new P0(t,t.h,e,void 0),e.K=2,e.v=ke(o4(a)),a=!1,M1.navigator&&M1.navigator.sendBeacon&&(a=M1.navigator.sendBeacon(e.v.toString(),"")),!a&&M1.Image&&(new Image().src=e.v,a=!0),a||(e.g=ph(e.l,null),e.g.ea(e.v)),e.F=Date.now(),D0(e)}dh(t)}n1.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Pe(t){t.g&&(qi(t),t.g.cancel(),t.g=null)}function oh(t){Pe(t),t.u&&(M1.clearTimeout(t.u),t.u=null),j9(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&M1.clearTimeout(t.m),t.m=null)}function Nn(t,e){t.l.push(new fA(t.Za++,e)),t.G==3&&De(t)}function De(t){Ju(t.i)||t.m||(t.m=!0,_i(t.Ha,t),t.C=0)}function HA(t,e){return Zu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=T0(N2(t.Ha,t,e),hh(t,t.C)),t.C++,!0)}n1.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new P0(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Hu(i),Vu(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,a=0;a<this.l.length;a++){t:{var n=this.l[a];if("__data__"in n.g&&(n=n.g.__data__,typeof n=="string")){n=n.length;break t}n=void 0}if(n===void 0)break;if(e+=n,4096<e){e=a;break e}if(e===4096||a===this.l.length-1){e=a+1;break e}}e=1e3}else e=1e3;e=lh(this,r,e),a=o4(this.F),e2(a,"RID",t),e2(a,"CVER",22),this.D&&e2(a,"X-HTTP-Session-Id",this.D),B0(this,a),this.o&&i&&Fi(a,this.o,i),Ri(this.i,r),this.Ra&&e2(a,"TYPE","init"),this.ja?(e2(a,"$req",e),e2(a,"SID","null"),r.$=!0,vr(r,a,null)):vr(r,a,e),this.G=2}}else this.G==3&&(t?Ml(this,t):this.l.length==0||Ju(this.i)||Ml(this))};function Ml(t,e){var a;e?a=e.m:a=t.V++;const n=o4(t.F);e2(n,"SID",t.J),e2(n,"RID",a),e2(n,"AID",t.U),B0(t,n),t.o&&t.s&&Fi(n,t.o,t.s),a=new P0(t,t.h,a,t.C+1),t.o===null&&(a.H=t.s),e&&(t.l=e.D.concat(t.l)),e=lh(t,a,1e3),a.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ri(t.i,a),vr(a,n,e)}function B0(t,e){t.j&&Pi({},function(a,n){e2(e,n,a)})}function lh(t,e,a){a=Math.min(t.l.length,a);var n=t.j?N2(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const c=["count="+a];i==-1?0<a?(i=r[0].h,c.push("ofs="+i)):i=0:c.push("ofs="+i);let s=!0;for(let o=0;o<a;o++){let u=r[o].h;const h=r[o].g;if(u-=i,0>u)i=Math.max(0,r[o].h-100),s=!1;else try{dA(h,c,"req"+u+"_")}catch{n&&n(h)}}if(s){n=c.join("&");break e}}}return t=t.l.splice(0,a),e.D=t,n}function Ch(t){t.g||t.u||(t.Y=1,_i(t.Ga,t),t.A=0)}function $i(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=T0(N2(t.Ga,t),hh(t,t.A)),t.A++,!0)}n1.Ga=function(){if(this.u=null,fh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=T0(N2(this.bb,this),t)}};n1.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,U2(10),Pe(this),fh(this))};function qi(t){t.B!=null&&(M1.clearTimeout(t.B),t.B=null)}function fh(t){t.g=new P0(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=o4(t.oa);e2(e,"RID","rpc"),e2(e,"SID",t.J),e2(e,"CI",t.N?"0":"1"),e2(e,"AID",t.U),B0(t,e),e2(e,"TYPE","xmlhttp"),t.o&&t.s&&Fi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var a=t.g;t=t.la,a.K=1,a.v=ke(o4(e)),a.s=null,a.U=!0,$u(a,t)}n1.ab=function(){this.v!=null&&(this.v=null,Pe(this),$i(this),U2(19))};function j9(t){t.v!=null&&(M1.clearTimeout(t.v),t.v=null)}function uh(t,e){var a=null;if(t.g==e){j9(t),qi(t),t.g=null;var n=2}else if(Lr(t.i,e))a=e.D,eh(t.i,e),n=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(n==1){a=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;n=Ne(),_2(n,new Ou(n,a)),De(t)}else Ch(t);else if(r=e.o,r==3||r==0&&0<t.I||!(n==1&&HA(t,e)||n==2&&$i(t)))switch(a&&0<a.length&&(e=t.i,e.i=e.i.concat(a)),r){case 1:L5(t,5);break;case 4:L5(t,10);break;case 3:L5(t,6);break;default:L5(t,2)}}}function hh(t,e){let a=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(a*=2),a*e}function L5(t,e){if(t.h.info("Error code "+e),e==2){var a=null;t.j&&(a=null);var n=N2(t.jb,t);a||(a=new A5("//www.google.com/images/cleardot.gif"),M1.location&&M1.location.protocol=="http"||U9(a,"https"),ke(a)),mA(a.toString(),n)}else U2(2);t.G=0,t.j&&t.j.va(e),dh(t),oh(t)}n1.jb=function(t){t?(this.h.info("Successfully pinged google.com"),U2(2)):(this.h.info("Failed to ping google.com"),U2(1))};function dh(t){t.G=0,t.I=-1,t.j&&((th(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Hi(t.l),t.l.length=0),t.j.ua())}function mh(t,e,a){let n=nA(a);if(n.i!="")e&&$9(n,e+"."+n.i),q9(n,n.m);else{const r=M1.location;n=rA(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,a)}return t.aa&&Vi(t.aa,function(r,i){e2(n,i,r)}),e=t.D,a=t.sa,e&&a&&e2(n,e,a),e2(n,"VER",t.ma),B0(t,n),n}function ph(t,e,a){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=a&&t.Ba&&!t.qa?new u2(new R0({ib:!0})):new u2(t.qa),e.L=t.H,e}function vh(){}n1=vh.prototype;n1.xa=function(){};n1.wa=function(){};n1.va=function(){};n1.ua=function(){};n1.Oa=function(){};function W9(){if(_6&&!(10<=Number(I_)))throw Error("Environmental error: no available transport.")}W9.prototype.g=function(t,e){return new c3(t,e)};function c3(t,e){V2.call(this),this.g=new sh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O9(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O9(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new X6(this)}E2(c3,V2);c3.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,a=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),_i(N2(t.hb,t,e))),U2(0),t.W=e,t.aa=a||{},t.N=t.X,t.F=mh(t,null,t.W),De(t)};c3.prototype.close=function(){Ui(this.g)};c3.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Nn(this.g,e)}else this.v?(e={},e.__data__=Ni(t),Nn(this.g,e)):Nn(this.g,t)};c3.prototype.M=function(){this.g.j=null,delete this.j,Ui(this.g),delete this.g,c3.Z.M.call(this)};function gh(t){Ti.call(this);var e=t.__sm__;if(e){e:{for(const a in e){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}E2(gh,Ti);function Lh(){Ii.call(this),this.status=1}E2(Lh,Ii);function X6(t){this.g=t}E2(X6,vh);X6.prototype.xa=function(){_2(this.g,"a")};X6.prototype.wa=function(t){_2(this.g,new gh(t))};X6.prototype.va=function(t){_2(this.g,new Lh)};X6.prototype.ua=function(){_2(this.g,"b")};W9.prototype.createWebChannel=W9.prototype.g;c3.prototype.send=c3.prototype.u;c3.prototype.open=c3.prototype.m;c3.prototype.close=c3.prototype.close;_e.NO_ERROR=0;_e.TIMEOUT=8;_e.HTTP_ERROR=6;Bu.COMPLETE="complete";Fu.EventType=I0;I0.OPEN="a";I0.CLOSE="b";I0.ERROR="c";I0.MESSAGE="d";V2.prototype.listen=V2.prototype.N;u2.prototype.listenOnce=u2.prototype.O;u2.prototype.getLastError=u2.prototype.La;u2.prototype.getLastErrorCode=u2.prototype.Da;u2.prototype.getStatus=u2.prototype.ba;u2.prototype.getResponseJson=u2.prototype.Qa;u2.prototype.getResponseText=u2.prototype.ga;u2.prototype.send=u2.prototype.ea;var VA=function(){return new W9},bA=function(){return Ne()},_n=_e,yA=Bu,wA=U5,Hl={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},SA=R0,n9=Fu,xA=u2;const Vl="@firebase/firestore";/**
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
 */class X2{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X2.UNAUTHENTICATED=new X2(null),X2.GOOGLE_CREDENTIALS=new X2("google-credentials-uid"),X2.FIRST_PARTY=new X2("first-party-uid"),X2.MOCK_USER=new X2("mock-user");/**
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
 */let Q6="9.9.1";/**
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
 */const E5=new vi("@firebase/firestore");function bl(){return E5.logLevel}function o1(t,...e){if(E5.logLevel<=U1.DEBUG){const a=e.map(ji);E5.debug(`Firestore (${Q6}): ${t}`,...a)}}function Y4(t,...e){if(E5.logLevel<=U1.ERROR){const a=e.map(ji);E5.error(`Firestore (${Q6}): ${t}`,...a)}}function yl(t,...e){if(E5.logLevel<=U1.WARN){const a=e.map(ji);E5.warn(`Firestore (${Q6}): ${t}`,...a)}}function ji(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function b1(t="Unexpected state"){const e=`FIRESTORE (${Q6}) INTERNAL ASSERTION FAILED: `+t;throw Y4(e),new Error(e)}function Q1(t,e){t||b1()}function y1(t,e){return t}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class d1 extends F5{constructor(e,a){super(e,a),this.code=e,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class W4{constructor(){this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}}/**
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
 */class NA{constructor(e,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,a){e.enqueueRetryable(()=>a(X2.UNAUTHENTICATED))}shutdown(){}}class AA{constructor(e){this.t=e,this.currentUser=X2.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,a){let n=this.i;const r=o=>this.i!==n?(n=this.i,a(o)):Promise.resolve();let i=new W4;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new W4,e.enqueueRetryable(()=>r(this.currentUser))};const c=()=>{const o=i;e.enqueueRetryable(async()=>{await o.promise,await r(this.currentUser)})},s=o=>{o1("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit(o=>s(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?s(o):(o1("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new W4)}},0),c()}getToken(){const e=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(n=>this.i!==e?(o1("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q1(typeof n.accessToken=="string"),new NA(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Q1(e===null||typeof e=="string"),new X2(e)}}class EA{constructor(e,a,n){this.type="FirstParty",this.user=X2.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",a);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class kA{constructor(e,a,n){this.h=e,this.l=a,this.m=n}getToken(){return Promise.resolve(new EA(this.h,this.l,this.m))}start(e,a){e.enqueueRetryable(()=>a(X2.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,a){const n=i=>{i.error!=null&&o1("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const c=i.token!==this.p;return this.p=i.token,o1("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?a(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const r=i=>{o1("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):o1("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(a=>a?(Q1(typeof a.token=="string"),this.p=a.token,new TA(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function PA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(a);else for(let n=0;n<t;n++)a[n]=Math.floor(256*Math.random());return a}/**
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
 */class zh{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=PA(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<a&&(n+=e.charAt(r[i]%e.length))}return n}}function q1(t,e){return t<e?-1:t>e?1:0}function A6(t,e,a){return t.length===e.length&&t.every((n,r)=>a(n,e[r]))}/**
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
 */class m2{constructor(e,a){if(this.seconds=e,this.nanoseconds=a,a<0)throw new d1(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new d1(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(e<-62135596800)throw new d1(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new d1(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return m2.fromMillis(Date.now())}static fromDate(e){return m2.fromMillis(e.getTime())}static fromMillis(e){const a=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*a));return new m2(a,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q1(this.nanoseconds,e.nanoseconds):q1(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P1{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P1(e)}static min(){return new P1(new m2(0,0))}static max(){return new P1(new m2(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class m0{constructor(e,a,n){a===void 0?a=0:a>e.length&&b1(),n===void 0?n=e.length-a:n>e.length-a&&b1(),this.segments=e,this.offset=a,this.len=n}get length(){return this.len}isEqual(e){return m0.comparator(this,e)===0}child(e){const a=this.segments.slice(this.offset,this.limit());return e instanceof m0?e.forEach(n=>{a.push(n)}):a.push(e),this.construct(a)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==e.get(a))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==e.get(a))return!1;return!0}forEach(e){for(let a=this.offset,n=this.limit();a<n;a++)e(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,a){const n=Math.min(e.length,a.length);for(let r=0;r<n;r++){const i=e.get(r),c=a.get(r);if(i<c)return-1;if(i>c)return 1}return e.length<a.length?-1:e.length>a.length?1:0}}class t2 extends m0{construct(e,a,n){return new t2(e,a,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const a=[];for(const n of e){if(n.indexOf("//")>=0)throw new d1(W.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);a.push(...n.split("/").filter(r=>r.length>0))}return new t2(a)}static emptyPath(){return new t2([])}}const DA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class T2 extends m0{construct(e,a,n){return new T2(e,a,n)}static isValidIdentifier(e){return DA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),T2.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new T2(["__name__"])}static fromServerFormat(e){const a=[];let n="",r=0;const i=()=>{if(n.length===0)throw new d1(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(n),n=""};let c=!1;for(;r<e.length;){const s=e[r];if(s==="\\"){if(r+1===e.length)throw new d1(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const o=e[r+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new d1(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,r+=2}else s==="`"?(c=!c,r++):s!=="."||c?(n+=s,r++):(i(),r++)}if(i(),c)throw new d1(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new T2(a)}static emptyPath(){return new T2([])}}/**
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
 */class u1{constructor(e){this.path=e}static fromPath(e){return new u1(t2.fromString(e))}static fromName(e){return new u1(t2.fromString(e).popFirst(5))}static empty(){return new u1(t2.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&t2.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,a){return t2.comparator(e.path,a.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new u1(new t2(e.slice()))}}function RA(t,e){const a=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,r=P1.fromTimestamp(n===1e9?new m2(a+1,0):new m2(a,n));return new X4(r,u1.empty(),e)}function OA(t){return new X4(t.readTime,t.key,-1)}class X4{constructor(e,a,n){this.readTime=e,this.documentKey=a,this.largestBatchId=n}static min(){return new X4(P1.min(),u1.empty(),-1)}static max(){return new X4(P1.max(),u1.empty(),-1)}}function BA(t,e){let a=t.readTime.compareTo(e.readTime);return a!==0?a:(a=u1.comparator(t.documentKey,e.documentKey),a!==0?a:q1(t.largestBatchId,e.largestBatchId))}/**
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
 */const FA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function F0(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==FA)throw t;o1("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(e){return this.next(void 0,e)}next(e,a){return this.callbackAttached&&b1(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(e,this.result):new q((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(a,i).next(n,r)}})}toPromise(){return new Promise((e,a)=>{this.next(e,a)})}wrapUserFunction(e){try{const a=e();return a instanceof q?a:q.resolve(a)}catch(a){return q.reject(a)}}wrapSuccess(e,a){return e?this.wrapUserFunction(()=>e(a)):q.resolve(a)}wrapFailure(e,a){return e?this.wrapUserFunction(()=>e(a)):q.reject(a)}static resolve(e){return new q((a,n)=>{a(e)})}static reject(e){return new q((a,n)=>{n(e)})}static waitFor(e){return new q((a,n)=>{let r=0,i=0,c=!1;e.forEach(s=>{++r,s.next(()=>{++i,c&&i===r&&a()},o=>n(o))}),c=!0,i===r&&a()})}static or(e){let a=q.resolve(!1);for(const n of e)a=a.next(r=>r?q.resolve(r):n());return a}static forEach(e,a){const n=[];return e.forEach((r,i)=>{n.push(a.call(this,r,i))}),this.waitFor(n)}static mapArray(e,a){return new q((n,r)=>{const i=e.length,c=new Array(i);let s=0;for(let o=0;o<i;o++){const u=o;a(e[u]).next(h=>{c[u]=h,++s,s===i&&n(c)},h=>r(h))}})}static doWhile(e,a){return new q((n,r)=>{const i=()=>{e()===!0?a().next(()=>{i()},r):n()};i()})}}function U0(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Wi{constructor(e,a){this.previousValue=e,a&&(a.sequenceNumberHandler=n=>this.it(n),this.rt=n=>a.writeSequenceNumber(n))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function wl(t){let e=0;for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&e++;return e}function J6(t,e){for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&e(a,t[a])}function Mh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Wi.ot=-1;class v2{constructor(e,a){this.comparator=e,this.root=a||y2.EMPTY}insert(e,a){return new v2(this.comparator,this.root.insert(e,a,this.comparator).copy(null,null,y2.BLACK,null,null))}remove(e){return new v2(this.comparator,this.root.remove(e,this.comparator).copy(null,null,y2.BLACK,null,null))}get(e){let a=this.root;for(;!a.isEmpty();){const n=this.comparator(e,a.key);if(n===0)return a.value;n<0?a=a.left:n>0&&(a=a.right)}return null}indexOf(e){let a=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return a+n.left.size;r<0?n=n.left:(a+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((a,n)=>(e(a,n),!1))}toString(){const e=[];return this.inorderTraversal((a,n)=>(e.push(`${a}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new r9(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new r9(this.root,e,this.comparator,!1)}getReverseIterator(){return new r9(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new r9(this.root,e,this.comparator,!0)}}class r9{constructor(e,a,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=a?n(e.key,a):1,a&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const a={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class y2{constructor(e,a,n,r,i){this.key=e,this.value=a,this.color=n!=null?n:y2.RED,this.left=r!=null?r:y2.EMPTY,this.right=i!=null?i:y2.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,a,n,r,i){return new y2(e!=null?e:this.key,a!=null?a:this.value,n!=null?n:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,a,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,a,n),null):i===0?r.copy(null,a,null,null,null):r.copy(null,null,null,null,r.right.insert(e,a,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return y2.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,a){let n,r=this;if(a(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,a),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),a(e,r.key)===0){if(r.right.isEmpty())return y2.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,a))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,y2.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,y2.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,a)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b1();const e=this.left.check();if(e!==this.right.check())throw b1();return e+(this.isRed()?0:1)}}y2.EMPTY=null,y2.RED=!0,y2.BLACK=!1;y2.EMPTY=new class{constructor(){this.size=0}get key(){throw b1()}get value(){throw b1()}get color(){throw b1()}get left(){throw b1()}get right(){throw b1()}copy(t,e,a,n,r){return this}insert(t,e,a){return new y2(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class p2{constructor(e){this.comparator=e,this.data=new v2(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((a,n)=>(e(a),!1))}forEachInRange(e,a){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;a(r.key)}}forEachWhile(e,a){let n;for(n=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const a=this.data.getIteratorFrom(e);return a.hasNext()?a.getNext().key:null}getIterator(){return new Sl(this.data.getIterator())}getIteratorFrom(e){return new Sl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let a=this;return a.size<e.size&&(a=e,e=this),e.forEach(n=>{a=a.add(n)}),a}isEqual(e){if(!(e instanceof p2)||this.size!==e.size)return!1;const a=this.data.getIterator(),n=e.data.getIterator();for(;a.hasNext();){const r=a.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(a=>{e.push(a)}),e}toString(){const e=[];return this.forEach(a=>e.push(a)),"SortedSet("+e.toString()+")"}copy(e){const a=new p2(this.comparator);return a.data=e,a}}class Sl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class B3{constructor(e){this.fields=e,e.sort(T2.comparator)}static empty(){return new B3([])}unionWith(e){let a=new p2(T2.comparator);for(const n of this.fields)a=a.add(n);for(const n of e)a=a.add(n);return new B3(a.toArray())}covers(e){for(const a of this.fields)if(a.isPrefixOf(e))return!0;return!1}isEqual(e){return A6(this.fields,e.fields,(a,n)=>a.isEqual(n))}}/**
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
 */class A2{constructor(e){this.binaryString=e}static fromBase64String(e){const a=atob(e);return new A2(a)}static fromUint8Array(e){const a=function(n){let r="";for(let i=0;i<n.length;++i)r+=String.fromCharCode(n[i]);return r}(e);return new A2(a)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const a=new Uint8Array(e.length);for(let n=0;n<e.length;n++)a[n]=e.charCodeAt(n);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q1(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}A2.EMPTY_BYTE_STRING=new A2("");const $A=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Q4(t){if(Q1(!!t),typeof t=="string"){let e=0;const a=$A.exec(t);if(Q1(!!a),a[1]){let r=a[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:f2(t.seconds),nanos:f2(t.nanos)}}function f2(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function E6(t){return typeof t=="string"?A2.fromBase64String(t):A2.fromUint8Array(t)}/**
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
 */function Hh(t){var e,a;return((a=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function Vh(t){const e=t.mapValue.fields.__previous_value__;return Hh(e)?Vh(e):e}function p0(t){const e=Q4(t.mapValue.fields.__local_write_time__.timestampValue);return new m2(e.seconds,e.nanos)}/**
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
 */class qA{constructor(e,a,n,r,i,c,s,o){this.databaseId=e,this.appId=a,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=c,this.autoDetectLongPolling=s,this.useFetchStreams=o}}class k6{constructor(e,a){this.projectId=e,this.database=a||"(default)"}static empty(){return new k6("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof k6&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Re(t){return t==null}function G9(t){return t===0&&1/t==-1/0}function jA(t){return typeof t=="number"&&Number.isInteger(t)&&!G9(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const i9={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function k5(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hh(t)?4:WA(t)?9007199254740991:10:b1()}function j3(t,e){if(t===e)return!0;const a=k5(t);if(a!==k5(e))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return p0(t).isEqual(p0(e));case 3:return function(n,r){if(typeof n.timestampValue=="string"&&typeof r.timestampValue=="string"&&n.timestampValue.length===r.timestampValue.length)return n.timestampValue===r.timestampValue;const i=Q4(n.timestampValue),c=Q4(r.timestampValue);return i.seconds===c.seconds&&i.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(n,r){return E6(n.bytesValue).isEqual(E6(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(n,r){return f2(n.geoPointValue.latitude)===f2(r.geoPointValue.latitude)&&f2(n.geoPointValue.longitude)===f2(r.geoPointValue.longitude)}(t,e);case 2:return function(n,r){if("integerValue"in n&&"integerValue"in r)return f2(n.integerValue)===f2(r.integerValue);if("doubleValue"in n&&"doubleValue"in r){const i=f2(n.doubleValue),c=f2(r.doubleValue);return i===c?G9(i)===G9(c):isNaN(i)&&isNaN(c)}return!1}(t,e);case 9:return A6(t.arrayValue.values||[],e.arrayValue.values||[],j3);case 10:return function(n,r){const i=n.mapValue.fields||{},c=r.mapValue.fields||{};if(wl(i)!==wl(c))return!1;for(const s in i)if(i.hasOwnProperty(s)&&(c[s]===void 0||!j3(i[s],c[s])))return!1;return!0}(t,e);default:return b1()}}function v0(t,e){return(t.values||[]).find(a=>j3(a,e))!==void 0}function T6(t,e){if(t===e)return 0;const a=k5(t),n=k5(e);if(a!==n)return q1(a,n);switch(a){case 0:case 9007199254740991:return 0;case 1:return q1(t.booleanValue,e.booleanValue);case 2:return function(r,i){const c=f2(r.integerValue||r.doubleValue),s=f2(i.integerValue||i.doubleValue);return c<s?-1:c>s?1:c===s?0:isNaN(c)?isNaN(s)?0:-1:1}(t,e);case 3:return xl(t.timestampValue,e.timestampValue);case 4:return xl(p0(t),p0(e));case 5:return q1(t.stringValue,e.stringValue);case 6:return function(r,i){const c=E6(r),s=E6(i);return c.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const c=r.split("/"),s=i.split("/");for(let o=0;o<c.length&&o<s.length;o++){const u=q1(c[o],s[o]);if(u!==0)return u}return q1(c.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const c=q1(f2(r.latitude),f2(i.latitude));return c!==0?c:q1(f2(r.longitude),f2(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const c=r.values||[],s=i.values||[];for(let o=0;o<c.length&&o<s.length;++o){const u=T6(c[o],s[o]);if(u)return u}return q1(c.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===i9.mapValue&&i===i9.mapValue)return 0;if(r===i9.mapValue)return 1;if(i===i9.mapValue)return-1;const c=r.fields||{},s=Object.keys(c),o=i.fields||{},u=Object.keys(o);s.sort(),u.sort();for(let h=0;h<s.length&&h<u.length;++h){const p=q1(s[h],u[h]);if(p!==0)return p;const v=T6(c[s[h]],o[u[h]]);if(v!==0)return v}return q1(s.length,u.length)}(t.mapValue,e.mapValue);default:throw b1()}}function xl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q1(t,e);const a=Q4(t),n=Q4(e),r=q1(a.seconds,n.seconds);return r!==0?r:q1(a.nanos,n.nanos)}function L6(t){return zr(t)}function zr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Q4(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?E6(t.bytesValue).toBase64():"referenceValue"in t?(a=t.referenceValue,u1.fromName(a).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(n){let r="[",i=!0;for(const c of n.values||[])i?i=!1:r+=",",r+=zr(c);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",c=!0;for(const s of r)c?c=!1:i+=",",i+=`${s}:${zr(n.fields[s])}`;return i+"}"}(t.mapValue):b1();var e,a}function Mr(t){return!!t&&"integerValue"in t}function Gi(t){return!!t&&"arrayValue"in t}function Nl(t){return!!t&&"nullValue"in t}function _l(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function p9(t){return!!t&&"mapValue"in t}function q8(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return J6(t.mapValue.fields,(a,n)=>e.mapValue.fields[a]=q8(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let a=0;a<(t.arrayValue.values||[]).length;++a)e.arrayValue.values[a]=q8(t.arrayValue.values[a]);return e}return Object.assign({},t)}function WA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class h3{constructor(e){this.value=e}static empty(){return new h3({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let a=this.value;for(let n=0;n<e.length-1;++n)if(a=(a.mapValue.fields||{})[e.get(n)],!p9(a))return null;return a=(a.mapValue.fields||{})[e.lastSegment()],a||null}}set(e,a){this.getFieldsMap(e.popLast())[e.lastSegment()]=q8(a)}setAll(e){let a=T2.emptyPath(),n={},r=[];e.forEach((c,s)=>{if(!a.isImmediateParentOf(s)){const o=this.getFieldsMap(a);this.applyChanges(o,n,r),n={},r=[],a=s.popLast()}c?n[s.lastSegment()]=q8(c):r.push(s.lastSegment())});const i=this.getFieldsMap(a);this.applyChanges(i,n,r)}delete(e){const a=this.field(e.popLast());p9(a)&&a.mapValue.fields&&delete a.mapValue.fields[e.lastSegment()]}isEqual(e){return j3(this.value,e.value)}getFieldsMap(e){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=a.mapValue.fields[e.get(n)];p9(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},a.mapValue.fields[e.get(n)]=r),a=r}return a.mapValue.fields}applyChanges(e,a,n){J6(a,(r,i)=>e[r]=i);for(const r of n)delete e[r]}clone(){return new h3(q8(this.value))}}function bh(t){const e=[];return J6(t.fields,(a,n)=>{const r=new T2([a]);if(p9(n)){const i=bh(n.mapValue).fields;if(i.length===0)e.push(r);else for(const c of i)e.push(r.child(c))}else e.push(r)}),new B3(e)}/**
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
 */class S2{constructor(e,a,n,r,i,c){this.key=e,this.documentType=a,this.version=n,this.readTime=r,this.data=i,this.documentState=c}static newInvalidDocument(e){return new S2(e,0,P1.min(),P1.min(),h3.empty(),0)}static newFoundDocument(e,a,n){return new S2(e,1,a,P1.min(),n,0)}static newNoDocument(e,a){return new S2(e,2,a,P1.min(),h3.empty(),0)}static newUnknownDocument(e,a){return new S2(e,3,a,P1.min(),h3.empty(),2)}convertToFoundDocument(e,a){return this.version=e,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=h3.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=h3.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P1.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof S2&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new S2(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class GA{constructor(e,a=null,n=[],r=[],i=null,c=null,s=null){this.path=e,this.collectionGroup=a,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=c,this.endAt=s,this.ut=null}}function Al(t,e=null,a=[],n=[],r=null,i=null,c=null){return new GA(t,e,a,n,r,i,c)}function Ki(t){const e=y1(t);if(e.ut===null){let a=e.path.canonicalString();e.collectionGroup!==null&&(a+="|cg:"+e.collectionGroup),a+="|f:",a+=e.filters.map(n=>{return(r=n).field.canonicalString()+r.op.toString()+L6(r.value);var r}).join(","),a+="|ob:",a+=e.orderBy.map(n=>function(r){return r.field.canonicalString()+r.dir}(n)).join(","),Re(e.limit)||(a+="|l:",a+=e.limit),e.startAt&&(a+="|lb:",a+=e.startAt.inclusive?"b:":"a:",a+=e.startAt.position.map(n=>L6(n)).join(",")),e.endAt&&(a+="|ub:",a+=e.endAt.inclusive?"a:":"b:",a+=e.endAt.position.map(n=>L6(n)).join(",")),e.ut=a}return e.ut}function KA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(a=>{return`${(n=a).field.canonicalString()} ${n.op} ${L6(n.value)}`;var n}).join(", ")}]`),Re(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(a=>function(n){return`${n.field.canonicalString()} (${n.dir})`}(a)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(a=>L6(a)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(a=>L6(a)).join(",")),`Target(${e})`}function Yi(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!aE(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(a=t.filters[r],n=e.filters[r],a.op!==n.op||!a.field.isEqual(n.field)||!j3(a.value,n.value))return!1;var a,n;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kl(t.startAt,e.startAt)&&kl(t.endAt,e.endAt)}function Hr(t){return u1.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class J2 extends class{}{constructor(e,a,n){super(),this.field=e,this.op=a,this.value=n}static create(e,a,n){return e.isKeyField()?a==="in"||a==="not-in"?this.ct(e,a,n):new YA(e,a,n):a==="array-contains"?new JA(e,n):a==="in"?new ZA(e,n):a==="not-in"?new eE(e,n):a==="array-contains-any"?new tE(e,n):new J2(e,a,n)}static ct(e,a,n){return a==="in"?new XA(e,n):new QA(e,n)}matches(e){const a=e.data.field(this.field);return this.op==="!="?a!==null&&this.at(T6(a,this.value)):a!==null&&k5(this.value)===k5(a)&&this.at(T6(a,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b1()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class YA extends J2{constructor(e,a,n){super(e,a,n),this.key=u1.fromName(n.referenceValue)}matches(e){const a=u1.comparator(e.key,this.key);return this.at(a)}}class XA extends J2{constructor(e,a){super(e,"in",a),this.keys=yh("in",a)}matches(e){return this.keys.some(a=>a.isEqual(e.key))}}class QA extends J2{constructor(e,a){super(e,"not-in",a),this.keys=yh("not-in",a)}matches(e){return!this.keys.some(a=>a.isEqual(e.key))}}function yh(t,e){var a;return(((a=e.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(n=>u1.fromName(n.referenceValue))}class JA extends J2{constructor(e,a){super(e,"array-contains",a)}matches(e){const a=e.data.field(this.field);return Gi(a)&&v0(a.arrayValue,this.value)}}class ZA extends J2{constructor(e,a){super(e,"in",a)}matches(e){const a=e.data.field(this.field);return a!==null&&v0(this.value.arrayValue,a)}}class eE extends J2{constructor(e,a){super(e,"not-in",a)}matches(e){if(v0(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=e.data.field(this.field);return a!==null&&!v0(this.value.arrayValue,a)}}class tE extends J2{constructor(e,a){super(e,"array-contains-any",a)}matches(e){const a=e.data.field(this.field);return!(!Gi(a)||!a.arrayValue.values)&&a.arrayValue.values.some(n=>v0(this.value.arrayValue,n))}}class K9{constructor(e,a){this.position=e,this.inclusive=a}}class j8{constructor(e,a="asc"){this.field=e,this.dir=a}}function aE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function El(t,e,a){let n=0;for(let r=0;r<t.position.length;r++){const i=e[r],c=t.position[r];if(i.field.isKeyField()?n=u1.comparator(u1.fromName(c.referenceValue),a.key):n=T6(c,a.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function kl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let a=0;a<t.position.length;a++)if(!j3(t.position[a],e.position[a]))return!1;return!0}/**
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
 */class Oe{constructor(e,a=null,n=[],r=[],i=null,c="F",s=null,o=null){this.path=e,this.collectionGroup=a,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=c,this.startAt=s,this.endAt=o,this.lt=null,this.ft=null,this.startAt,this.endAt}}function nE(t,e,a,n,r,i,c,s){return new Oe(t,e,a,n,r,i,c,s)}function Be(t){return new Oe(t)}function rE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function cE(t){for(const e of t.filters)if(e.ht())return e.field;return null}function sE(t){return t.collectionGroup!==null}function g0(t){const e=y1(t);if(e.lt===null){e.lt=[];const a=cE(e),n=iE(e);if(a!==null&&n===null)a.isKeyField()||e.lt.push(new j8(a)),e.lt.push(new j8(T2.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new j8(T2.keyField(),i))}}}return e.lt}function T5(t){const e=y1(t);if(!e.ft)if(e.limitType==="F")e.ft=Al(e.path,e.collectionGroup,g0(e),e.filters,e.limit,e.startAt,e.endAt);else{const a=[];for(const i of g0(e)){const c=i.dir==="desc"?"asc":"desc";a.push(new j8(i.field,c))}const n=e.endAt?new K9(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new K9(e.startAt.position,e.startAt.inclusive):null;e.ft=Al(e.path,e.collectionGroup,a,e.filters,e.limit,n,r)}return e.ft}function oE(t,e,a){return new Oe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,a,t.startAt,t.endAt)}function Fe(t,e){return Yi(T5(t),T5(e))&&t.limitType===e.limitType}function wh(t){return`${Ki(T5(t))}|lt:${t.limitType}`}function Vr(t){return`Query(target=${KA(T5(t))}; limitType=${t.limitType})`}function Xi(t,e){return e.isFoundDocument()&&function(a,n){const r=n.key.path;return a.collectionGroup!==null?n.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(r):u1.isDocumentKey(a.path)?a.path.isEqual(r):a.path.isImmediateParentOf(r)}(t,e)&&function(a,n){for(const r of a.explicitOrderBy)if(!r.field.isKeyField()&&n.data.field(r.field)===null)return!1;return!0}(t,e)&&function(a,n){for(const r of a.filters)if(!r.matches(n))return!1;return!0}(t,e)&&function(a,n){return!(a.startAt&&!function(r,i,c){const s=El(r,i,c);return r.inclusive?s<=0:s<0}(a.startAt,g0(a),n)||a.endAt&&!function(r,i,c){const s=El(r,i,c);return r.inclusive?s>=0:s>0}(a.endAt,g0(a),n))}(t,e)}function lE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sh(t){return(e,a)=>{let n=!1;for(const r of g0(t)){const i=CE(r,e,a);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function CE(t,e,a){const n=t.field.isKeyField()?u1.comparator(e.key,a.key):function(r,i,c){const s=i.data.field(r),o=c.data.field(r);return s!==null&&o!==null?T6(s,o):b1()}(t.field,e,a);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return b1()}}/**
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
 */function xh(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:G9(e)?"-0":e}}function Nh(t){return{integerValue:""+t}}function fE(t,e){return jA(e)?Nh(e):xh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ue{constructor(){this._=void 0}}function uE(t,e,a){return t instanceof Y9?function(n,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(a,e):t instanceof L0?Ah(t,e):t instanceof z0?Eh(t,e):function(n,r){const i=_h(n,r),c=Tl(i)+Tl(n._t);return Mr(i)&&Mr(n._t)?Nh(c):xh(n.wt,c)}(t,e)}function hE(t,e,a){return t instanceof L0?Ah(t,e):t instanceof z0?Eh(t,e):a}function _h(t,e){return t instanceof X9?Mr(a=e)||function(n){return!!n&&"doubleValue"in n}(a)?e:{integerValue:0}:null;var a}class Y9 extends Ue{}class L0 extends Ue{constructor(e){super(),this.elements=e}}function Ah(t,e){const a=kh(e);for(const n of t.elements)a.some(r=>j3(r,n))||a.push(n);return{arrayValue:{values:a}}}class z0 extends Ue{constructor(e){super(),this.elements=e}}function Eh(t,e){let a=kh(e);for(const n of t.elements)a=a.filter(r=>!j3(r,n));return{arrayValue:{values:a}}}class X9 extends Ue{constructor(e,a){super(),this.wt=e,this._t=a}}function Tl(t){return f2(t.integerValue||t.doubleValue)}function kh(t){return Gi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dE(t,e){return t.field.isEqual(e.field)&&function(a,n){return a instanceof L0&&n instanceof L0||a instanceof z0&&n instanceof z0?A6(a.elements,n.elements,j3):a instanceof X9&&n instanceof X9?j3(a._t,n._t):a instanceof Y9&&n instanceof Y9}(t.transform,e.transform)}class mE{constructor(e,a){this.version=e,this.transformResults=a}}class w3{constructor(e,a){this.updateTime=e,this.exists=a}static none(){return new w3}static exists(e){return new w3(void 0,e)}static updateTime(e){return new w3(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function v9(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $e{}function Th(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qi(t.key,w3.none()):new $0(t.key,t.data,w3.none());{const a=t.data,n=h3.empty();let r=new p2(T2.comparator);for(let i of e.fields)if(!r.has(i)){let c=a.field(i);c===null&&i.length>1&&(i=i.popLast(),c=a.field(i)),c===null?n.delete(i):n.set(i,c),r=r.add(i)}return new $5(t.key,n,new B3(r.toArray()),w3.none())}}function pE(t,e,a){t instanceof $0?function(n,r,i){const c=n.value.clone(),s=Pl(n.fieldTransforms,r,i.transformResults);c.setAll(s),r.convertToFoundDocument(i.version,c).setHasCommittedMutations()}(t,e,a):t instanceof $5?function(n,r,i){if(!v9(n.precondition,r))return void r.convertToUnknownDocument(i.version);const c=Pl(n.fieldTransforms,r,i.transformResults),s=r.data;s.setAll(Ih(n)),s.setAll(c),r.convertToFoundDocument(i.version,s).setHasCommittedMutations()}(t,e,a):function(n,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,a)}function W8(t,e,a,n){return t instanceof $0?function(r,i,c,s){if(!v9(r.precondition,i))return c;const o=r.value.clone(),u=Dl(r.fieldTransforms,s,i);return o.setAll(u),i.convertToFoundDocument(i.version,o).setHasLocalMutations(),null}(t,e,a,n):t instanceof $5?function(r,i,c,s){if(!v9(r.precondition,i))return c;const o=Dl(r.fieldTransforms,s,i),u=i.data;return u.setAll(Ih(r)),u.setAll(o),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,a,n):function(r,i,c){return v9(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):c}(t,e,a)}function vE(t,e){let a=null;for(const n of t.fieldTransforms){const r=e.data.field(n.field),i=_h(n.transform,r||null);i!=null&&(a===null&&(a=h3.empty()),a.set(n.field,i))}return a||null}function Il(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(a,n){return a===void 0&&n===void 0||!(!a||!n)&&A6(a,n,(r,i)=>dE(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $0 extends $e{constructor(e,a,n,r=[]){super(),this.key=e,this.value=a,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class $5 extends $e{constructor(e,a,n,r,i=[]){super(),this.key=e,this.data=a,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ih(t){const e=new Map;return t.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const n=t.data.field(a);e.set(a,n)}}),e}function Pl(t,e,a){const n=new Map;Q1(t.length===a.length);for(let r=0;r<a.length;r++){const i=t[r],c=i.transform,s=e.data.field(i.field);n.set(i.field,hE(c,s,a[r]))}return n}function Dl(t,e,a){const n=new Map;for(const r of t){const i=r.transform,c=a.data.field(r.field);n.set(r.field,uE(i,c,e))}return n}class Qi extends $e{constructor(e,a){super(),this.key=e,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gE extends $e{constructor(e,a){super(),this.key=e,this.precondition=a,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LE{constructor(e){this.count=e}}/**
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
 */var C2,O1;function zE(t){switch(t){default:return b1();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function Ph(t){if(t===void 0)return Y4("GRPC error has no .code"),W.UNKNOWN;switch(t){case C2.OK:return W.OK;case C2.CANCELLED:return W.CANCELLED;case C2.UNKNOWN:return W.UNKNOWN;case C2.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case C2.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case C2.INTERNAL:return W.INTERNAL;case C2.UNAVAILABLE:return W.UNAVAILABLE;case C2.UNAUTHENTICATED:return W.UNAUTHENTICATED;case C2.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case C2.NOT_FOUND:return W.NOT_FOUND;case C2.ALREADY_EXISTS:return W.ALREADY_EXISTS;case C2.PERMISSION_DENIED:return W.PERMISSION_DENIED;case C2.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case C2.ABORTED:return W.ABORTED;case C2.OUT_OF_RANGE:return W.OUT_OF_RANGE;case C2.UNIMPLEMENTED:return W.UNIMPLEMENTED;case C2.DATA_LOSS:return W.DATA_LOSS;default:return b1()}}(O1=C2||(C2={}))[O1.OK=0]="OK",O1[O1.CANCELLED=1]="CANCELLED",O1[O1.UNKNOWN=2]="UNKNOWN",O1[O1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O1[O1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O1[O1.NOT_FOUND=5]="NOT_FOUND",O1[O1.ALREADY_EXISTS=6]="ALREADY_EXISTS",O1[O1.PERMISSION_DENIED=7]="PERMISSION_DENIED",O1[O1.UNAUTHENTICATED=16]="UNAUTHENTICATED",O1[O1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O1[O1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O1[O1.ABORTED=10]="ABORTED",O1[O1.OUT_OF_RANGE=11]="OUT_OF_RANGE",O1[O1.UNIMPLEMENTED=12]="UNIMPLEMENTED",O1[O1.INTERNAL=13]="INTERNAL",O1[O1.UNAVAILABLE=14]="UNAVAILABLE",O1[O1.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Z6{constructor(e,a){this.mapKeyFn=e,this.equalsFn=a,this.inner={},this.innerSize=0}get(e){const a=this.mapKeyFn(e),n=this.inner[a];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,a){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,a]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,a]);r.push([e,a]),this.innerSize++}delete(e){const a=this.mapKeyFn(e),n=this.inner[a];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[a]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){J6(this.inner,(a,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return Mh(this.inner)}size(){return this.innerSize}}/**
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
 */const ME=new v2(u1.comparator);function l4(){return ME}const Dh=new v2(u1.comparator);function k8(...t){let e=Dh;for(const a of t)e=e.insert(a.key,a);return e}function Rh(t){let e=Dh;return t.forEach((a,n)=>e=e.insert(a,n.overlayedDocument)),e}function z5(){return G8()}function Oh(){return G8()}function G8(){return new Z6(t=>t.toString(),(t,e)=>t.isEqual(e))}const HE=new v2(u1.comparator),VE=new p2(u1.comparator);function D1(...t){let e=VE;for(const a of t)e=e.add(a);return e}const bE=new p2(q1);function Bh(){return bE}/**
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
 */class qe{constructor(e,a,n,r,i){this.snapshotVersion=e,this.targetChanges=a,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,a){const n=new Map;return n.set(e,q0.createSynthesizedTargetChangeForCurrentChange(e,a)),new qe(P1.min(),n,Bh(),l4(),D1())}}class q0{constructor(e,a,n,r,i){this.resumeToken=e,this.current=a,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,a){return new q0(A2.EMPTY_BYTE_STRING,a,D1(),D1(),D1())}}/**
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
 */class g9{constructor(e,a,n,r){this.gt=e,this.removedTargetIds=a,this.key=n,this.yt=r}}class Fh{constructor(e,a){this.targetId=e,this.It=a}}class Uh{constructor(e,a,n=A2.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=a,this.resumeToken=n,this.cause=r}}class Rl{constructor(){this.Tt=0,this.Et=Bl(),this.At=A2.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=D1(),a=D1(),n=D1();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:a=a.add(r);break;case 1:n=n.add(r);break;default:b1()}}),new q0(this.At,this.Rt,e,a,n)}Dt(){this.bt=!1,this.Et=Bl()}Ct(e,a){this.bt=!0,this.Et=this.Et.insert(e,a)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class yE{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=l4(),this.Bt=Ol(),this.Lt=new p2(q1)}Ut(e){for(const a of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(a,e.yt):this.Kt(a,e.key,e.yt);for(const a of e.removedTargetIds)this.Kt(a,e.key,e.yt)}Gt(e){this.forEachTarget(e,a=>{const n=this.Qt(a);switch(e.state){case 0:this.jt(a)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(a);break;case 3:this.jt(a)&&(n.Ot(),n.Vt(e.resumeToken));break;case 4:this.jt(a)&&(this.Wt(a),n.Vt(e.resumeToken));break;default:b1()}})}forEachTarget(e,a){e.targetIds.length>0?e.targetIds.forEach(a):this.Ft.forEach((n,r)=>{this.jt(r)&&a(r)})}zt(e){const a=e.targetId,n=e.It.count,r=this.Ht(a);if(r){const i=r.target;if(Hr(i))if(n===0){const c=new u1(i.path);this.Kt(a,c,S2.newNoDocument(c,P1.min()))}else Q1(n===1);else this.Jt(a)!==n&&(this.Wt(a),this.Lt=this.Lt.add(a))}}Yt(e){const a=new Map;this.Ft.forEach((i,c)=>{const s=this.Ht(c);if(s){if(i.current&&Hr(s.target)){const o=new u1(s.target.path);this.$t.get(o)!==null||this.Xt(c,o)||this.Kt(c,o,S2.newNoDocument(o,e))}i.vt&&(a.set(c,i.St()),i.Dt())}});let n=D1();this.Bt.forEach((i,c)=>{let s=!0;c.forEachWhile(o=>{const u=this.Ht(o);return!u||u.purpose===2||(s=!1,!1)}),s&&(n=n.add(i))}),this.$t.forEach((i,c)=>c.setReadTime(e));const r=new qe(e,a,this.Lt,this.$t,n);return this.$t=l4(),this.Bt=Ol(),this.Lt=new p2(q1),r}qt(e,a){if(!this.jt(e))return;const n=this.Xt(e,a.key)?2:0;this.Qt(e).Ct(a.key,n),this.$t=this.$t.insert(a.key,a),this.Bt=this.Bt.insert(a.key,this.Zt(a.key).add(e))}Kt(e,a,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,a)?r.Ct(a,1):r.xt(a),this.Bt=this.Bt.insert(a,this.Zt(a).delete(e)),n&&(this.$t=this.$t.insert(a,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const a=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+a.addedDocuments.size-a.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let a=this.Ft.get(e);return a||(a=new Rl,this.Ft.set(e,a)),a}Zt(e){let a=this.Bt.get(e);return a||(a=new p2(q1),this.Bt=this.Bt.insert(e,a)),a}jt(e){const a=this.Ht(e)!==null;return a||o1("WatchChangeAggregator","Detected inactive target",e),a}Ht(e){const a=this.Ft.get(e);return a&&a.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new Rl),this.Mt.getRemoteKeysForTarget(e).forEach(a=>{this.Kt(e,a,null)})}Xt(e,a){return this.Mt.getRemoteKeysForTarget(e).has(a)}}function Ol(){return new v2(u1.comparator)}function Bl(){return new v2(u1.comparator)}/**
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
 */const wE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),SE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class xE{constructor(e,a){this.databaseId=e,this.dt=a}}function Q9(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $h(t,e){return t.dt?e.toBase64():e.toUint8Array()}function NE(t,e){return Q9(t,e.toTimestamp())}function i4(t){return Q1(!!t),P1.fromTimestamp(function(e){const a=Q4(e);return new m2(a.seconds,a.nanos)}(t))}function Ji(t,e){return function(a){return new t2(["projects",a.projectId,"databases",a.database])}(t).child("documents").child(e).canonicalString()}function qh(t){const e=t2.fromString(t);return Q1(Gh(e)),e}function br(t,e){return Ji(t.databaseId,e.path)}function An(t,e){const a=qh(e);if(a.get(1)!==t.databaseId.projectId)throw new d1(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+t.databaseId.projectId);if(a.get(3)!==t.databaseId.database)throw new d1(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+t.databaseId.database);return new u1(jh(a))}function yr(t,e){return Ji(t.databaseId,e)}function _E(t){const e=qh(t);return e.length===4?t2.emptyPath():jh(e)}function wr(t){return new t2(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jh(t){return Q1(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fl(t,e,a){return{name:br(t,e),fields:a.value.mapValue.fields}}function AE(t,e){let a;if("targetChange"in e){e.targetChange;const n=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:b1()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(o,u){return o.dt?(Q1(u===void 0||typeof u=="string"),A2.fromBase64String(u||"")):(Q1(u===void 0||u instanceof Uint8Array),A2.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,s=c&&function(o){const u=o.code===void 0?W.UNKNOWN:Ph(o.code);return new d1(u,o.message||"")}(c);a=new Uh(n,r,i,s||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=An(t,n.document.name),i=i4(n.document.updateTime),c=new h3({mapValue:{fields:n.document.fields}}),s=S2.newFoundDocument(r,i,c),o=n.targetIds||[],u=n.removedTargetIds||[];a=new g9(o,u,s.key,s)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=An(t,n.document),i=n.readTime?i4(n.readTime):P1.min(),c=S2.newNoDocument(r,i),s=n.removedTargetIds||[];a=new g9([],s,c.key,c)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=An(t,n.document),i=n.removedTargetIds||[];a=new g9([],i,r,null)}else{if(!("filter"in e))return b1();{e.filter;const n=e.filter;n.targetId;const r=n.count||0,i=new LE(r),c=n.targetId;a=new Fh(c,i)}}return a}function EE(t,e){let a;if(e instanceof $0)a={update:Fl(t,e.key,e.value)};else if(e instanceof Qi)a={delete:br(t,e.key)};else if(e instanceof $5)a={update:Fl(t,e.key,e.data),updateMask:UE(e.fieldMask)};else{if(!(e instanceof gE))return b1();a={verify:br(t,e.key)}}return e.fieldTransforms.length>0&&(a.updateTransforms=e.fieldTransforms.map(n=>function(r,i){const c=i.transform;if(c instanceof Y9)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof L0)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof z0)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof X9)return{fieldPath:i.field.canonicalString(),increment:c._t};throw b1()}(0,n))),e.precondition.isNone||(a.currentDocument=function(n,r){return r.updateTime!==void 0?{updateTime:NE(n,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:b1()}(t,e.precondition)),a}function kE(t,e){return t&&t.length>0?(Q1(e!==void 0),t.map(a=>function(n,r){let i=n.updateTime?i4(n.updateTime):i4(r);return i.isEqual(P1.min())&&(i=i4(r)),new mE(i,n.transformResults||[])}(a,e))):[]}function TE(t,e){return{documents:[yr(t,e.path)]}}function IE(t,e){const a={structuredQuery:{}},n=e.path;e.collectionGroup!==null?(a.parent=yr(t,n),a.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a.parent=yr(t,n.popLast()),a.structuredQuery.from=[{collectionId:n.lastSegment()}]);const r=function(o){if(o.length===0)return;const u=o.map(h=>function(p){if(p.op==="=="){if(_l(p.value))return{unaryFilter:{field:i6(p.field),op:"IS_NAN"}};if(Nl(p.value))return{unaryFilter:{field:i6(p.field),op:"IS_NULL"}}}else if(p.op==="!="){if(_l(p.value))return{unaryFilter:{field:i6(p.field),op:"IS_NOT_NAN"}};if(Nl(p.value))return{unaryFilter:{field:i6(p.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:i6(p.field),op:OE(p.op),value:p.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(a.structuredQuery.where=r);const i=function(o){if(o.length!==0)return o.map(u=>function(h){return{field:i6(h.field),direction:RE(h.dir)}}(u))}(e.orderBy);i&&(a.structuredQuery.orderBy=i);const c=function(o,u){return o.dt||Re(u)?u:{value:u}}(t,e.limit);var s;return c!==null&&(a.structuredQuery.limit=c),e.startAt&&(a.structuredQuery.startAt={before:(s=e.startAt).inclusive,values:s.position}),e.endAt&&(a.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),a}function PE(t){let e=_E(t.parent);const a=t.structuredQuery,n=a.from?a.from.length:0;let r=null;if(n>0){Q1(n===1);const h=a.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];a.where&&(i=Wh(a.where));let c=[];a.orderBy&&(c=a.orderBy.map(h=>function(p){return new j8(f6(p.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(h)));let s=null;a.limit&&(s=function(h){let p;return p=typeof h=="object"?h.value:h,Re(p)?null:p}(a.limit));let o=null;a.startAt&&(o=function(h){const p=!!h.before,v=h.values||[];return new K9(v,p)}(a.startAt));let u=null;return a.endAt&&(u=function(h){const p=!h.before,v=h.values||[];return new K9(v,p)}(a.endAt)),nE(e,r,c,i,s,"F",o,u)}function DE(t,e){const a=function(n,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b1()}}(0,e.purpose);return a==null?null:{"goog-listen-tags":a}}function Wh(t){return t?t.unaryFilter!==void 0?[FE(t)]:t.fieldFilter!==void 0?[BE(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Wh(e)).reduce((e,a)=>e.concat(a)):b1():[]}function RE(t){return wE[t]}function OE(t){return SE[t]}function i6(t){return{fieldPath:t.canonicalString()}}function f6(t){return T2.fromServerFormat(t.fieldPath)}function BE(t){return J2.create(f6(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b1()}}(t.fieldFilter.op),t.fieldFilter.value)}function FE(t){switch(t.unaryFilter.op){case"IS_NAN":const e=f6(t.unaryFilter.field);return J2.create(e,"==",{doubleValue:NaN});case"IS_NULL":const a=f6(t.unaryFilter.field);return J2.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=f6(t.unaryFilter.field);return J2.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=f6(t.unaryFilter.field);return J2.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b1()}}function UE(t){const e=[];return t.fields.forEach(a=>e.push(a.canonicalString())),{fieldPaths:e}}function Gh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $E{constructor(e,a,n,r){this.batchId=e,this.localWriteTime=a,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,a){const n=a.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&pE(i,e,n[r])}}applyToLocalView(e,a){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(a=W8(n,e,a,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(a=W8(n,e,a,this.localWriteTime));return a}applyToLocalDocumentSet(e,a){const n=Oh();return this.mutations.forEach(r=>{const i=e.get(r.key),c=i.overlayedDocument;let s=this.applyToLocalView(c,i.mutatedFields);s=a.has(r.key)?null:s;const o=Th(c,s);o!==null&&n.set(r.key,o),c.isValidDocument()||c.convertToNoDocument(P1.min())}),n}keys(){return this.mutations.reduce((e,a)=>e.add(a.key),D1())}isEqual(e){return this.batchId===e.batchId&&A6(this.mutations,e.mutations,(a,n)=>Il(a,n))&&A6(this.baseMutations,e.baseMutations,(a,n)=>Il(a,n))}}class Zi{constructor(e,a,n,r){this.batch=e,this.commitVersion=a,this.mutationResults=n,this.docVersions=r}static from(e,a,n){Q1(e.mutations.length===n.length);let r=HE;const i=e.mutations;for(let c=0;c<i.length;c++)r=r.insert(i[c].key,n[c].version);return new Zi(e,a,n,r)}}/**
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
 */class qE{constructor(e,a){this.largestBatchId=e,this.mutation=a}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class b5{constructor(e,a,n,r,i=P1.min(),c=P1.min(),s=A2.EMPTY_BYTE_STRING){this.target=e,this.targetId=a,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=s}withSequenceNumber(e){return new b5(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,a){return new b5(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new b5(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class jE{constructor(e){this.ne=e}}function WE(t){const e=PE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oE(e,e.limit,"L"):e}/**
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
 */class GE{constructor(){this.ze=new KE}addToCollectionParentIndex(e,a){return this.ze.add(a),q.resolve()}getCollectionParents(e,a){return q.resolve(this.ze.getEntries(a))}addFieldIndex(e,a){return q.resolve()}deleteFieldIndex(e,a){return q.resolve()}getDocumentsMatchingTarget(e,a){return q.resolve(null)}getIndexType(e,a){return q.resolve(0)}getFieldIndexes(e,a){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,a){return q.resolve(X4.min())}getMinOffsetFromCollectionGroup(e,a){return q.resolve(X4.min())}updateCollectionGroup(e,a,n){return q.resolve()}updateIndexEntries(e,a){return q.resolve()}}class KE{constructor(){this.index={}}add(e){const a=e.lastSegment(),n=e.popLast(),r=this.index[a]||new p2(t2.comparator),i=!r.has(n);return this.index[a]=r.add(n),i}has(e){const a=e.lastSegment(),n=e.popLast(),r=this.index[a];return r&&r.has(n)}getEntries(e){return(this.index[e]||new p2(t2.comparator)).toArray()}}/**
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
 */class I6{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new I6(0)}static Rn(){return new I6(-1)}}/**
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
 */class YE{constructor(){this.changes=new Z6(e=>e.toString(),(e,a)=>e.isEqual(a)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,a){this.assertNotApplied(),this.changes.set(e,S2.newInvalidDocument(e).setReadTime(a))}getEntry(e,a){this.assertNotApplied();const n=this.changes.get(a);return n!==void 0?q.resolve(n):this.getFromCache(e,a)}getEntries(e,a){return this.getAllFromCache(e,a)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XE{constructor(e,a){this.overlayedDocument=e,this.mutatedFields=a}}/**
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
 */class QE{constructor(e,a,n,r){this.remoteDocumentCache=e,this.mutationQueue=a,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,a){let n=null;return this.documentOverlayCache.getOverlay(e,a).next(r=>(n=r,this.getBaseDocument(e,a,n))).next(r=>(n!==null&&W8(n.mutation,r,B3.empty(),m2.now()),r))}getDocuments(e,a){return this.remoteDocumentCache.getEntries(e,a).next(n=>this.getLocalViewOfDocuments(e,n,D1()).next(()=>n))}getLocalViewOfDocuments(e,a,n=D1()){const r=z5();return this.populateOverlays(e,r,a).next(()=>this.computeViews(e,a,r,n).next(i=>{let c=k8();return i.forEach((s,o)=>{c=c.insert(s,o.overlayedDocument)}),c}))}getOverlayedDocuments(e,a){const n=z5();return this.populateOverlays(e,n,a).next(()=>this.computeViews(e,a,n,D1()))}populateOverlays(e,a,n){const r=[];return n.forEach(i=>{a.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((c,s)=>{a.set(c,s)})})}computeViews(e,a,n,r){let i=l4();const c=G8(),s=G8();return a.forEach((o,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof $5)?i=i.insert(u.key,u):h!==void 0&&(c.set(u.key,h.mutation.getFieldMask()),W8(h.mutation,u,h.mutation.getFieldMask(),m2.now()))}),this.recalculateAndSaveOverlays(e,i).next(o=>(o.forEach((u,h)=>c.set(u,h)),a.forEach((u,h)=>{var p;return s.set(u,new XE(h,(p=c.get(u))!==null&&p!==void 0?p:null))}),s))}recalculateAndSaveOverlays(e,a){const n=G8();let r=new v2((c,s)=>c-s),i=D1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,a).next(c=>{for(const s of c)s.keys().forEach(o=>{const u=a.get(o);if(u===null)return;let h=n.get(o)||B3.empty();h=s.applyToLocalView(u,h),n.set(o,h);const p=(r.get(s.batchId)||D1()).add(o);r=r.insert(s.batchId,p)})}).next(()=>{const c=[],s=r.getReverseIterator();for(;s.hasNext();){const o=s.getNext(),u=o.key,h=o.value,p=Oh();h.forEach(v=>{if(!i.has(v)){const L=Th(a.get(v),n.get(v));L!==null&&p.set(v,L),i=i.add(v)}}),c.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(c)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,a){return this.remoteDocumentCache.getEntries(e,a).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,a,n){return function(r){return u1.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(a)?this.getDocumentsMatchingDocumentQuery(e,a.path):sE(a)?this.getDocumentsMatchingCollectionGroupQuery(e,a,n):this.getDocumentsMatchingCollectionQuery(e,a,n)}getNextDocuments(e,a,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,a,n,r).next(i=>{const c=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,a,n.largestBatchId,r-i.size):q.resolve(z5());let s=-1,o=i;return c.next(u=>q.forEach(u,(h,p)=>(s<p.largestBatchId&&(s=p.largestBatchId),i.get(h)?q.resolve():this.getBaseDocument(e,h,p).next(v=>{o=o.insert(h,v)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,o,u,D1())).next(h=>({batchId:s,changes:Rh(h)})))})}getDocumentsMatchingDocumentQuery(e,a){return this.getDocument(e,new u1(a)).next(n=>{let r=k8();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(e,a,n){const r=a.collectionGroup;let i=k8();return this.indexManager.getCollectionParents(e,r).next(c=>q.forEach(c,s=>{const o=function(u,h){return new Oe(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(a,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(u=>{u.forEach((h,p)=>{i=i.insert(h,p)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,a,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,a.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,a.path,n.largestBatchId))).next(i=>{i.forEach((s,o)=>{const u=o.getKey();r.get(u)===null&&(r=r.insert(u,S2.newInvalidDocument(u)))});let c=k8();return r.forEach((s,o)=>{const u=i.get(s);u!==void 0&&W8(u.mutation,o,B3.empty(),m2.now()),Xi(a,o)&&(c=c.insert(s,o))}),c})}getBaseDocument(e,a,n){return n===null||n.mutation.type===1?this.remoteDocumentCache.getEntry(e,a):q.resolve(S2.newInvalidDocument(a))}}/**
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
 */class JE{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,a){return q.resolve(this.Jn.get(a))}saveBundleMetadata(e,a){var n;return this.Jn.set(a.id,{id:(n=a).id,version:n.version,createTime:i4(n.createTime)}),q.resolve()}getNamedQuery(e,a){return q.resolve(this.Yn.get(a))}saveNamedQuery(e,a){return this.Yn.set(a.name,function(n){return{name:n.name,query:WE(n.bundledQuery),readTime:i4(n.readTime)}}(a)),q.resolve()}}/**
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
 */class ZE{constructor(){this.overlays=new v2(u1.comparator),this.Xn=new Map}getOverlay(e,a){return q.resolve(this.overlays.get(a))}getOverlays(e,a){const n=z5();return q.forEach(a,r=>this.getOverlay(e,r).next(i=>{i!==null&&n.set(r,i)})).next(()=>n)}saveOverlays(e,a,n){return n.forEach((r,i)=>{this.ie(e,a,i)}),q.resolve()}removeOverlaysForBatchId(e,a,n){const r=this.Xn.get(n);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(n)),q.resolve()}getOverlaysForCollection(e,a,n){const r=z5(),i=a.length+1,c=new u1(a.child("")),s=this.overlays.getIteratorFrom(c);for(;s.hasNext();){const o=s.getNext().value,u=o.getKey();if(!a.isPrefixOf(u.path))break;u.path.length===i&&o.largestBatchId>n&&r.set(o.getKey(),o)}return q.resolve(r)}getOverlaysForCollectionGroup(e,a,n,r){let i=new v2((u,h)=>u-h);const c=this.overlays.getIterator();for(;c.hasNext();){const u=c.getNext().value;if(u.getKey().getCollectionGroup()===a&&u.largestBatchId>n){let h=i.get(u.largestBatchId);h===null&&(h=z5(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const s=z5(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((u,h)=>s.set(u,h)),!(s.size()>=r)););return q.resolve(s)}ie(e,a,n){const r=this.overlays.get(n.key);if(r!==null){const c=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,c)}this.overlays=this.overlays.insert(n.key,new qE(a,n));let i=this.Xn.get(a);i===void 0&&(i=D1(),this.Xn.set(a,i)),this.Xn.set(a,i.add(n.key))}}/**
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
 */class ec{constructor(){this.Zn=new p2(z2.ts),this.es=new p2(z2.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,a){const n=new z2(e,a);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,a){e.forEach(n=>this.addReference(n,a))}removeReference(e,a){this.rs(new z2(e,a))}os(e,a){e.forEach(n=>this.removeReference(n,a))}us(e){const a=new u1(new t2([])),n=new z2(a,e),r=new z2(a,e+1),i=[];return this.es.forEachInRange([n,r],c=>{this.rs(c),i.push(c.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const a=new u1(new t2([])),n=new z2(a,e),r=new z2(a,e+1);let i=D1();return this.es.forEachInRange([n,r],c=>{i=i.add(c.key)}),i}containsKey(e){const a=new z2(e,0),n=this.Zn.firstAfterOrEqual(a);return n!==null&&e.isEqual(n.key)}}class z2{constructor(e,a){this.key=e,this.ls=a}static ts(e,a){return u1.comparator(e.key,a.key)||q1(e.ls,a.ls)}static ns(e,a){return q1(e.ls,a.ls)||u1.comparator(e.key,a.key)}}/**
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
 */class ek{constructor(e,a){this.indexManager=e,this.referenceDelegate=a,this.mutationQueue=[],this.fs=1,this.ds=new p2(z2.ts)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,a,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new $E(i,a,n,r);this.mutationQueue.push(c);for(const s of r)this.ds=this.ds.add(new z2(s.key,i)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return q.resolve(c)}lookupMutationBatch(e,a){return q.resolve(this._s(a))}getNextMutationBatchAfterBatchId(e,a){const n=a+1,r=this.ws(n),i=r<0?0:r;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,a){const n=new z2(a,0),r=new z2(a,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],c=>{const s=this._s(c.ls);i.push(s)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,a){let n=new p2(q1);return a.forEach(r=>{const i=new z2(r,0),c=new z2(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,c],s=>{n=n.add(s.ls)})}),q.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,a){const n=a.path,r=n.length+1;let i=n;u1.isDocumentKey(i)||(i=i.child(""));const c=new z2(new u1(i),0);let s=new p2(q1);return this.ds.forEachWhile(o=>{const u=o.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(s=s.add(o.ls)),!0)},c),q.resolve(this.gs(s))}gs(e){const a=[];return e.forEach(n=>{const r=this._s(n);r!==null&&a.push(r)}),a}removeMutationBatch(e,a){Q1(this.ys(a.batchId,"removed")===0),this.mutationQueue.shift();let n=this.ds;return q.forEach(a.mutations,r=>{const i=new z2(r.key,a.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=n})}In(e){}containsKey(e,a){const n=new z2(a,0),r=this.ds.firstAfterOrEqual(n);return q.resolve(a.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ys(e,a){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const a=this.ws(e);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
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
 */class tk{constructor(e){this.ps=e,this.docs=new v2(u1.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,a){const n=a.key,r=this.docs.get(n),i=r?r.size:0,c=this.ps(a);return this.docs=this.docs.insert(n,{document:a.mutableCopy(),size:c}),this.size+=c-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const a=this.docs.get(e);a&&(this.docs=this.docs.remove(e),this.size-=a.size)}getEntry(e,a){const n=this.docs.get(a);return q.resolve(n?n.document.mutableCopy():S2.newInvalidDocument(a))}getEntries(e,a){let n=l4();return a.forEach(r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():S2.newInvalidDocument(r))}),q.resolve(n)}getAllFromCollection(e,a,n){let r=l4();const i=new u1(a.child("")),c=this.docs.getIteratorFrom(i);for(;c.hasNext();){const{key:s,value:{document:o}}=c.getNext();if(!a.isPrefixOf(s.path))break;s.path.length>a.length+1||BA(OA(o),n)<=0||(r=r.insert(o.key,o.mutableCopy()))}return q.resolve(r)}getAllFromCollectionGroup(e,a,n,r){b1()}Is(e,a){return q.forEach(this.docs,n=>a(n))}newChangeBuffer(e){return new ak(this)}getSize(e){return q.resolve(this.size)}}class ak extends YE{constructor(e){super(),this.zn=e}applyChanges(e){const a=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?a.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)}),q.waitFor(a)}getFromCache(e,a){return this.zn.getEntry(e,a)}getAllFromCache(e,a){return this.zn.getEntries(e,a)}}/**
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
 */class nk{constructor(e){this.persistence=e,this.Ts=new Z6(a=>Ki(a),Yi),this.lastRemoteSnapshotVersion=P1.min(),this.highestTargetId=0,this.Es=0,this.As=new ec,this.targetCount=0,this.Rs=I6.An()}forEachTarget(e,a){return this.Ts.forEach((n,r)=>a(r)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,a,n){return n&&(this.lastRemoteSnapshotVersion=n),a>this.Es&&(this.Es=a),q.resolve()}vn(e){this.Ts.set(e.target,e);const a=e.targetId;a>this.highestTargetId&&(this.Rs=new I6(a),this.highestTargetId=a),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,a){return this.vn(a),this.targetCount+=1,q.resolve()}updateTargetData(e,a){return this.vn(a),q.resolve()}removeTargetData(e,a){return this.Ts.delete(a.target),this.As.us(a.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,a,n){let r=0;const i=[];return this.Ts.forEach((c,s)=>{s.sequenceNumber<=a&&n.get(s.targetId)===null&&(this.Ts.delete(c),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)}),q.waitFor(i).next(()=>r)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,a){const n=this.Ts.get(a)||null;return q.resolve(n)}addMatchingKeys(e,a,n){return this.As.ss(a,n),q.resolve()}removeMatchingKeys(e,a,n){this.As.os(a,n);const r=this.persistence.referenceDelegate,i=[];return r&&a.forEach(c=>{i.push(r.markPotentiallyOrphaned(e,c))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,a){return this.As.us(a),q.resolve()}getMatchingKeysForTargetId(e,a){const n=this.As.hs(a);return q.resolve(n)}containsKey(e,a){return q.resolve(this.As.containsKey(a))}}/**
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
 */class rk{constructor(e,a){this.bs={},this.overlays={},this.Ps=new Wi(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new nk(this),this.indexManager=new GE,this.remoteDocumentCache=function(n){return new tk(n)}(n=>this.referenceDelegate.Ss(n)),this.wt=new jE(a),this.Ds=new JE(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let a=this.overlays[e.toKey()];return a||(a=new ZE,this.overlays[e.toKey()]=a),a}getMutationQueue(e,a){let n=this.bs[e.toKey()];return n||(n=new ek(a,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,a,n){o1("MemoryPersistence","Starting transaction:",e);const r=new ik(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,a){return q.or(Object.values(this.bs).map(n=>()=>n.containsKey(e,a)))}}class ik extends UA{constructor(e){super(),this.currentSequenceNumber=e}}class tc{constructor(e){this.persistence=e,this.ks=new ec,this.Os=null}static Ms(e){return new tc(e)}get Fs(){if(this.Os)return this.Os;throw b1()}addReference(e,a,n){return this.ks.addReference(n,a),this.Fs.delete(n.toString()),q.resolve()}removeReference(e,a,n){return this.ks.removeReference(n,a),this.Fs.add(n.toString()),q.resolve()}markPotentiallyOrphaned(e,a){return this.Fs.add(a.toString()),q.resolve()}removeTarget(e,a){this.ks.us(a.targetId).forEach(r=>this.Fs.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,a.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>n.removeTargetData(e,a))}Cs(){this.Os=new Set}xs(e){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Fs,n=>{const r=u1.fromPath(n);return this.$s(e,r).next(i=>{i||a.removeEntry(r,P1.min())})}).next(()=>(this.Os=null,a.apply(e)))}updateLimboDocument(e,a){return this.$s(e,a).next(n=>{n?this.Fs.delete(a.toString()):this.Fs.add(a.toString())})}Ss(e){return 0}$s(e,a){return q.or([()=>q.resolve(this.ks.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(e,a),()=>this.persistence.Ns(e,a)])}}/**
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
 */class ac{constructor(e,a,n,r){this.targetId=e,this.fromCache=a,this.Pi=n,this.vi=r}static Vi(e,a){let n=D1(),r=D1();for(const i of a.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ac(e,a.fromCache,n,r)}}/**
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
 */class ck{constructor(){this.Si=!1}initialize(e,a){this.Di=e,this.indexManager=a,this.Si=!0}getDocumentsMatchingQuery(e,a,n,r){return this.Ci(e,a).next(i=>i||this.xi(e,a,r,n)).next(i=>i||this.Ni(e,a))}Ci(e,a){return q.resolve(null)}xi(e,a,n,r){return rE(a)||r.isEqual(P1.min())?this.Ni(e,a):this.Di.getDocuments(e,n).next(i=>{const c=this.ki(a,i);return this.Oi(a,c,n,r)?this.Ni(e,a):(bl()<=U1.DEBUG&&o1("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vr(a)),this.Mi(e,c,a,RA(r,-1)))})}ki(e,a){let n=new p2(Sh(e));return a.forEach((r,i)=>{Xi(e,i)&&(n=n.add(i))}),n}Oi(e,a,n,r){if(e.limit===null)return!1;if(n.size!==a.size)return!0;const i=e.limitType==="F"?a.last():a.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,a){return bl()<=U1.DEBUG&&o1("QueryEngine","Using full collection scan to execute query:",Vr(a)),this.Di.getDocumentsMatchingQuery(e,a,X4.min())}Mi(e,a,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next(i=>(a.forEach(c=>{i=i.insert(c.key,c)}),i))}}/**
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
 */class sk{constructor(e,a,n,r){this.persistence=e,this.Fi=a,this.wt=r,this.$i=new v2(q1),this.Bi=new Z6(i=>Ki(i),Yi),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QE(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",a=>e.collect(a,this.$i))}}function ok(t,e,a,n){return new sk(t,e,a,n)}async function Kh(t,e){const a=y1(t);return await a.persistence.runTransaction("Handle user change","readonly",n=>{let r;return a.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,a.qi(e),a.mutationQueue.getAllMutationBatches(n))).next(i=>{const c=[],s=[];let o=D1();for(const u of r){c.push(u.batchId);for(const h of u.mutations)o=o.add(h.key)}for(const u of i){s.push(u.batchId);for(const h of u.mutations)o=o.add(h.key)}return a.localDocuments.getDocuments(n,o).next(u=>({Ki:u,removedBatchIds:c,addedBatchIds:s}))})})}function lk(t,e){const a=y1(t);return a.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=e.batch.keys(),i=a.Ui.newChangeBuffer({trackRemovals:!0});return function(c,s,o,u){const h=o.batch,p=h.keys();let v=q.resolve();return p.forEach(L=>{v=v.next(()=>u.getEntry(s,L)).next(w=>{const E=o.docVersions.get(L);Q1(E!==null),w.version.compareTo(E)<0&&(h.applyToRemoteDocument(w,o),w.isValidDocument()&&(w.setReadTime(o.commitVersion),u.addEntry(w)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(s,h))}(a,n,e,i).next(()=>i.apply(n)).next(()=>a.mutationQueue.performConsistencyCheck(n)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let s=D1();for(let o=0;o<c.mutationResults.length;++o)c.mutationResults[o].transformResults.length>0&&(s=s.add(c.batch.mutations[o].key));return s}(e))).next(()=>a.localDocuments.getDocuments(n,r))})}function Yh(t){const e=y1(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",a=>e.Vs.getLastRemoteSnapshotVersion(a))}function Ck(t,e){const a=y1(t),n=e.snapshotVersion;let r=a.$i;return a.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const c=a.Ui.newChangeBuffer({trackRemovals:!0});r=a.$i;const s=[];e.targetChanges.forEach((h,p)=>{const v=r.get(p);if(!v)return;s.push(a.Vs.removeMatchingKeys(i,h.removedDocuments,p).next(()=>a.Vs.addMatchingKeys(i,h.addedDocuments,p)));let L=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(p)?L=L.withResumeToken(A2.EMPTY_BYTE_STRING,P1.min()).withLastLimboFreeSnapshotVersion(P1.min()):h.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(h.resumeToken,n)),r=r.insert(p,L),function(w,E,x){return w.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(v,L,h)&&s.push(a.Vs.updateTargetData(i,L))});let o=l4(),u=D1();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&s.push(a.persistence.referenceDelegate.updateLimboDocument(i,h))}),s.push(fk(i,c,e.documentUpdates).next(h=>{o=h.Gi,u=h.Qi})),!n.isEqual(P1.min())){const h=a.Vs.getLastRemoteSnapshotVersion(i).next(p=>a.Vs.setTargetsMetadata(i,i.currentSequenceNumber,n));s.push(h)}return q.waitFor(s).next(()=>c.apply(i)).next(()=>a.localDocuments.getLocalViewOfDocuments(i,o,u)).next(()=>o)}).then(i=>(a.$i=r,i))}function fk(t,e,a){let n=D1(),r=D1();return a.forEach(i=>n=n.add(i)),e.getEntries(t,n).next(i=>{let c=l4();return a.forEach((s,o)=>{const u=i.get(s);o.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(s)),o.isNoDocument()&&o.version.isEqual(P1.min())?(e.removeEntry(s,o.readTime),c=c.insert(s,o)):!u.isValidDocument()||o.version.compareTo(u.version)>0||o.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(o),c=c.insert(s,o)):o1("LocalStore","Ignoring outdated watch update for ",s,". Current version:",u.version," Watch version:",o.version)}),{Gi:c,Qi:r}})}function uk(t,e){const a=y1(t);return a.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),a.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function hk(t,e){const a=y1(t);return a.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return a.Vs.getTargetData(n,e).next(i=>i?(r=i,q.resolve(r)):a.Vs.allocateTargetId(n).next(c=>(r=new b5(e,c,0,n.currentSequenceNumber),a.Vs.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=a.$i.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(a.$i=a.$i.insert(n.targetId,n),a.Bi.set(e,n.targetId)),n})}async function Sr(t,e,a){const n=y1(t),r=n.$i.get(e),i=a?"readwrite":"readwrite-primary";try{a||await n.persistence.runTransaction("Release target",i,c=>n.persistence.referenceDelegate.removeTarget(c,r))}catch(c){if(!U0(c))throw c;o1("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}n.$i=n.$i.remove(e),n.Bi.delete(r.target)}function Ul(t,e,a){const n=y1(t);let r=P1.min(),i=D1();return n.persistence.runTransaction("Execute query","readonly",c=>function(s,o,u){const h=y1(s),p=h.Bi.get(u);return p!==void 0?q.resolve(h.$i.get(p)):h.Vs.getTargetData(o,u)}(n,c,T5(e)).next(s=>{if(s)return r=s.lastLimboFreeSnapshotVersion,n.Vs.getMatchingKeysForTargetId(c,s.targetId).next(o=>{i=o})}).next(()=>n.Fi.getDocumentsMatchingQuery(c,e,a?r:P1.min(),a?i:D1())).next(s=>(dk(n,lE(e),s),{documents:s,ji:i})))}function dk(t,e,a){let n=P1.min();a.forEach((r,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),t.Li.set(e,n)}class $l{constructor(){this.activeTargetIds=Bh()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mk{constructor(){this.Fr=new $l,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,a,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,a,n){this.$r[e]=a}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new $l,Promise.resolve()}handleUserChange(e,a,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pk{Br(e){}shutdown(){}}/**
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
 */class ql{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){o1("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){o1("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const vk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class gk{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class Lk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const a=e.ssl?"https":"http";this.so=a+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,a,n,r,i){const c=this.oo(e,a);o1("RestConnection","Sending: ",c,n);const s={};return this.uo(s,r,i),this.co(e,c,s,n).then(o=>(o1("RestConnection","Received: ",o),o),o=>{throw yl("RestConnection",`${e} failed with error: `,o,"url: ",c,"request:",n),o})}ao(e,a,n,r,i,c){return this.ro(e,a,n,r,i)}uo(e,a,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Q6,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach((r,i)=>e[i]=r),n&&n.headers.forEach((r,i)=>e[i]=r)}oo(e,a){const n=vk[e];return`${this.so}/v1/${a}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,a,n,r){return new Promise((i,c)=>{const s=new xA;s.listenOnce(yA.COMPLETE,()=>{try{switch(s.getLastErrorCode()){case _n.NO_ERROR:const u=s.getResponseJson();o1("Connection","XHR received:",JSON.stringify(u)),i(u);break;case _n.TIMEOUT:o1("Connection",'RPC "'+e+'" timed out'),c(new d1(W.DEADLINE_EXCEEDED,"Request time out"));break;case _n.HTTP_ERROR:const h=s.getStatus();if(o1("Connection",'RPC "'+e+'" failed with status:',h,"response text:",s.getResponseText()),h>0){const p=s.getResponseJson().error;if(p&&p.status&&p.message){const v=function(L){const w=L.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(w)>=0?w:W.UNKNOWN}(p.status);c(new d1(v,p.message))}else c(new d1(W.UNKNOWN,"Server responded with status "+s.getStatus()))}else c(new d1(W.UNAVAILABLE,"Connection failed."));break;default:b1()}}finally{o1("Connection",'RPC "'+e+'" completed.')}});const o=JSON.stringify(r);s.send(a,"POST",o,n,15)})}ho(e,a,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=VA(),c=bA(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new SA({})),this.uo(s.initMessageHeaders,a,n),Cu()||uu()||rN()||hu()||iN()||fu()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=r.join("");o1("Connection","Creating WebChannel: "+o,s);const u=i.createWebChannel(o,s);let h=!1,p=!1;const v=new gk({jr:w=>{p?o1("Connection","Not sending because WebChannel is closed:",w):(h||(o1("Connection","Opening WebChannel transport."),u.open(),h=!0),o1("Connection","WebChannel sending:",w),u.send(w))},Wr:()=>u.close()}),L=(w,E,x)=>{w.listen(E,y=>{try{x(y)}catch(A){setTimeout(()=>{throw A},0)}})};return L(u,n9.EventType.OPEN,()=>{p||o1("Connection","WebChannel transport opened.")}),L(u,n9.EventType.CLOSE,()=>{p||(p=!0,o1("Connection","WebChannel transport closed"),v.eo())}),L(u,n9.EventType.ERROR,w=>{p||(p=!0,yl("Connection","WebChannel transport errored:",w),v.eo(new d1(W.UNAVAILABLE,"The operation could not be completed")))}),L(u,n9.EventType.MESSAGE,w=>{var E;if(!p){const x=w.data[0];Q1(!!x);const y=x,A=y.error||((E=y[0])===null||E===void 0?void 0:E.error);if(A){o1("Connection","WebChannel received error:",A);const B=A.status;let F=function(r1){const s1=C2[r1];if(s1!==void 0)return Ph(s1)}(B),Q=A.message;F===void 0&&(F=W.INTERNAL,Q="Unknown error status: "+B+" with message "+A.message),p=!0,v.eo(new d1(F,Q)),u.close()}else o1("Connection","WebChannel received:",x),v.no(x)}}),L(c,wA.STAT_EVENT,w=>{w.stat===Hl.PROXY?o1("Connection","Detected buffering proxy"):w.stat===Hl.NOPROXY&&o1("Connection","Detected no buffering proxy")}),setTimeout(()=>{v.Zr()},0),v}}function En(){return typeof document<"u"?document:null}/**
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
 */function je(t){return new xE(t,!0)}class Xh{constructor(e,a,n=1e3,r=1.5,i=6e4){this.js=e,this.timerId=a,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const a=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,a-n);r>0&&o1("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${a} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Qh{constructor(e,a,n,r,i,c,s,o){this.js=e,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=s,this.listener=o,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Xh(e,a)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,a){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():a&&a.code===W.RESOURCE_EXHAUSTED?(Y4(a.toString()),Y4("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):a&&a.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(a)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),a=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Po===a&&this.Uo(n,r)},n=>{e(()=>{const r=new d1(W.UNKNOWN,"Fetching auth token failed: "+n.message);return this.qo(r)})})}Uo(e,a){const n=this.Lo(this.Po);this.stream=this.Ko(e,a),this.stream.zr(()=>{n(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{n(()=>this.qo(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return o1("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return a=>{this.js.enqueueAndForget(()=>this.Po===e?a():(o1("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zk extends Qh{constructor(e,a,n,r,i,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,n,r,c),this.wt=i}Ko(e,a){return this.bo.ho("Listen",e,a)}onMessage(e){this.So.reset();const a=AE(this.wt,e),n=function(r){if(!("targetChange"in r))return P1.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?P1.min():i.readTime?i4(i.readTime):P1.min()}(e);return this.listener.Go(a,n)}Qo(e){const a={};a.database=wr(this.wt),a.addTarget=function(r,i){let c;const s=i.target;return c=Hr(s)?{documents:TE(r,s)}:{query:IE(r,s)},c.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?c.resumeToken=$h(r,i.resumeToken):i.snapshotVersion.compareTo(P1.min())>0&&(c.readTime=Q9(r,i.snapshotVersion.toTimestamp())),c}(this.wt,e);const n=DE(this.wt,e);n&&(a.labels=n),this.Mo(a)}jo(e){const a={};a.database=wr(this.wt),a.removeTarget=e,this.Mo(a)}}class Mk extends Qh{constructor(e,a,n,r,i,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",a,n,r,c),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,a){return this.bo.ho("Write",e,a)}onMessage(e){if(Q1(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const a=kE(e.writeResults,e.commitTime),n=i4(e.commitTime);return this.listener.Jo(n,a)}return Q1(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=wr(this.wt),this.Mo(e)}Ho(e){const a={streamToken:this.lastStreamToken,writes:e.map(n=>EE(this.wt,n))};this.Mo(a)}}/**
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
 */class Hk extends class{}{constructor(e,a,n,r){super(),this.authCredentials=e,this.appCheckCredentials=a,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new d1(W.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,a,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,a,n,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new d1(W.UNKNOWN,r.toString())})}ao(e,a,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,c])=>this.bo.ao(e,a,n,i,c,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new d1(W.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class Vk{constructor(e,a){this.asyncQueue=e,this.onlineStateHandler=a,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const a=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Y4(a),this.su=!1):o1("OnlineStateTracker",a)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class bk{constructor(e,a,n,r,i){this.localStore=e,this.datastore=a,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(c=>{n.enqueueAndForget(async()=>{q5(this)&&(o1("RemoteStore","Restarting streams for network reachability change."),await async function(s){const o=y1(s);o.lu.add(4),await j0(o),o._u.set("Unknown"),o.lu.delete(4),await We(o)}(this))})}),this._u=new Vk(n,r)}}async function We(t){if(q5(t))for(const e of t.fu)await e(!0)}async function j0(t){for(const e of t.fu)await e(!1)}function Jh(t,e){const a=y1(t);a.hu.has(e.targetId)||(a.hu.set(e.targetId,e),ic(a)?rc(a):e8(a).Co()&&nc(a,e))}function Zh(t,e){const a=y1(t),n=e8(a);a.hu.delete(e),n.Co()&&ed(a,e),a.hu.size===0&&(n.Co()?n.ko():q5(a)&&a._u.set("Unknown"))}function nc(t,e){t.wu.Nt(e.targetId),e8(t).Qo(e)}function ed(t,e){t.wu.Nt(e),e8(t).jo(e)}function rc(t){t.wu=new yE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),e8(t).start(),t._u.iu()}function ic(t){return q5(t)&&!e8(t).Do()&&t.hu.size>0}function q5(t){return y1(t).lu.size===0}function td(t){t.wu=void 0}async function yk(t){t.hu.forEach((e,a)=>{nc(t,e)})}async function wk(t,e){td(t),ic(t)?(t._u.uu(e),rc(t)):t._u.set("Unknown")}async function Sk(t,e,a){if(t._u.set("Online"),e instanceof Uh&&e.state===2&&e.cause)try{await async function(n,r){const i=r.cause;for(const c of r.targetIds)n.hu.has(c)&&(await n.remoteSyncer.rejectListen(c,i),n.hu.delete(c),n.wu.removeTarget(c))}(t,e)}catch(n){o1("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await J9(t,n)}else if(e instanceof g9?t.wu.Ut(e):e instanceof Fh?t.wu.zt(e):t.wu.Gt(e),!a.isEqual(P1.min()))try{const n=await Yh(t.localStore);a.compareTo(n)>=0&&await function(r,i){const c=r.wu.Yt(i);return c.targetChanges.forEach((s,o)=>{if(s.resumeToken.approximateByteSize()>0){const u=r.hu.get(o);u&&r.hu.set(o,u.withResumeToken(s.resumeToken,i))}}),c.targetMismatches.forEach(s=>{const o=r.hu.get(s);if(!o)return;r.hu.set(s,o.withResumeToken(A2.EMPTY_BYTE_STRING,o.snapshotVersion)),ed(r,s);const u=new b5(o.target,s,1,o.sequenceNumber);nc(r,u)}),r.remoteSyncer.applyRemoteEvent(c)}(t,a)}catch(n){o1("RemoteStore","Failed to raise snapshot:",n),await J9(t,n)}}async function J9(t,e,a){if(!U0(e))throw e;t.lu.add(1),await j0(t),t._u.set("Offline"),a||(a=()=>Yh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{o1("RemoteStore","Retrying IndexedDB access"),await a(),t.lu.delete(1),await We(t)})}function ad(t,e){return e().catch(a=>J9(t,a,e))}async function Ge(t){const e=y1(t),a=J4(e);let n=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;xk(e);)try{const r=await uk(e.localStore,n);if(r===null){e.au.length===0&&a.ko();break}n=r.batchId,Nk(e,r)}catch(r){await J9(e,r)}nd(e)&&rd(e)}function xk(t){return q5(t)&&t.au.length<10}function Nk(t,e){t.au.push(e);const a=J4(t);a.Co()&&a.zo&&a.Ho(e.mutations)}function nd(t){return q5(t)&&!J4(t).Do()&&t.au.length>0}function rd(t){J4(t).start()}async function _k(t){J4(t).Xo()}async function Ak(t){const e=J4(t);for(const a of t.au)e.Ho(a.mutations)}async function Ek(t,e,a){const n=t.au.shift(),r=Zi.from(n,e,a);await ad(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ge(t)}async function kk(t,e){e&&J4(t).zo&&await async function(a,n){if(r=n.code,zE(r)&&r!==W.ABORTED){const i=a.au.shift();J4(a).No(),await ad(a,()=>a.remoteSyncer.rejectFailedWrite(i.batchId,n)),await Ge(a)}var r}(t,e),nd(t)&&rd(t)}async function jl(t,e){const a=y1(t);a.asyncQueue.verifyOperationInProgress(),o1("RemoteStore","RemoteStore received new credentials");const n=q5(a);a.lu.add(3),await j0(a),n&&a._u.set("Unknown"),await a.remoteSyncer.handleCredentialChange(e),a.lu.delete(3),await We(a)}async function Tk(t,e){const a=y1(t);e?(a.lu.delete(2),await We(a)):e||(a.lu.add(2),await j0(a),a._u.set("Unknown"))}function e8(t){return t.mu||(t.mu=function(e,a,n){const r=y1(e);return r.tu(),new zk(a,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:yk.bind(null,t),Jr:wk.bind(null,t),Go:Sk.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),ic(t)?rc(t):t._u.set("Unknown")):(await t.mu.stop(),td(t))})),t.mu}function J4(t){return t.gu||(t.gu=function(e,a,n){const r=y1(e);return r.tu(),new Mk(a,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:_k.bind(null,t),Jr:kk.bind(null,t),Yo:Ak.bind(null,t),Jo:Ek.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ge(t)):(await t.gu.stop(),t.au.length>0&&(o1("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class cc{constructor(e,a,n,r,i){this.asyncQueue=e,this.timerId=a,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new W4,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}static createAndSchedule(e,a,n,r,i){const c=Date.now()+n,s=new cc(e,a,c,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new d1(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sc(t,e){if(Y4("AsyncQueue",`${e}: ${t}`),U0(t))return new d1(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class z6{constructor(e){this.comparator=e?(a,n)=>e(a,n)||u1.comparator(a.key,n.key):(a,n)=>u1.comparator(a.key,n.key),this.keyedMap=k8(),this.sortedSet=new v2(this.comparator)}static emptySet(e){return new z6(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const a=this.keyedMap.get(e);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((a,n)=>(e(a),!1))}add(e){const a=this.delete(e.key);return a.copy(a.keyedMap.insert(e.key,e),a.sortedSet.insert(e,null))}delete(e){const a=this.get(e);return a?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(a)):this}isEqual(e){if(!(e instanceof z6)||this.size!==e.size)return!1;const a=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;a.hasNext();){const r=a.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(a=>{e.push(a.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,a){const n=new z6;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=a,n}}/**
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
 */class Wl{constructor(){this.yu=new v2(u1.comparator)}track(e){const a=e.doc.key,n=this.yu.get(a);n?e.type!==0&&n.type===3?this.yu=this.yu.insert(a,e):e.type===3&&n.type!==1?this.yu=this.yu.insert(a,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.yu=this.yu.insert(a,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.yu=this.yu.insert(a,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.yu=this.yu.remove(a):e.type===1&&n.type===2?this.yu=this.yu.insert(a,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.yu=this.yu.insert(a,{type:2,doc:e.doc}):b1():this.yu=this.yu.insert(a,e)}pu(){const e=[];return this.yu.inorderTraversal((a,n)=>{e.push(n)}),e}}class P6{constructor(e,a,n,r,i,c,s,o){this.query=e,this.docs=a,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=c,this.syncStateChanged=s,this.excludesMetadataChanges=o}static fromInitialDocuments(e,a,n,r){const i=[];return a.forEach(c=>{i.push({type:0,doc:c})}),new P6(e,a,z6.emptySet(a),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fe(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const a=this.docChanges,n=e.docChanges;if(a.length!==n.length)return!1;for(let r=0;r<a.length;r++)if(a[r].type!==n[r].type||!a[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class Ik{constructor(){this.Iu=void 0,this.listeners=[]}}class Pk{constructor(){this.queries=new Z6(e=>wh(e),Fe),this.onlineState="Unknown",this.Tu=new Set}}async function id(t,e){const a=y1(t),n=e.query;let r=!1,i=a.queries.get(n);if(i||(r=!0,i=new Ik),r)try{i.Iu=await a.onListen(n)}catch(c){const s=sc(c,`Initialization of query '${Vr(e.query)}' failed`);return void e.onError(s)}a.queries.set(n,i),i.listeners.push(e),e.Eu(a.onlineState),i.Iu&&e.Au(i.Iu)&&oc(a)}async function cd(t,e){const a=y1(t),n=e.query;let r=!1;const i=a.queries.get(n);if(i){const c=i.listeners.indexOf(e);c>=0&&(i.listeners.splice(c,1),r=i.listeners.length===0)}if(r)return a.queries.delete(n),a.onUnlisten(n)}function Dk(t,e){const a=y1(t);let n=!1;for(const r of e){const i=r.query,c=a.queries.get(i);if(c){for(const s of c.listeners)s.Au(r)&&(n=!0);c.Iu=r}}n&&oc(a)}function Rk(t,e,a){const n=y1(t),r=n.queries.get(e);if(r)for(const i of r.listeners)i.onError(a);n.queries.delete(e)}function oc(t){t.Tu.forEach(e=>{e.next()})}class sd{constructor(e,a,n){this.query=e,this.Ru=a,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new P6(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let a=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),a=!0):this.Vu(e,this.onlineState)&&(this.Su(e),a=!0),this.Pu=e,a}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let a=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),a=!0),a}Vu(e,a){if(!e.fromCache)return!0;const n=a!=="Offline";return(!this.options.Du||!n)&&(!e.docs.isEmpty()||a==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const a=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}Su(e){e=P6.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class od{constructor(e){this.key=e}}class ld{constructor(e){this.key=e}}class Ok{constructor(e,a){this.query=e,this.Fu=a,this.$u=null,this.current=!1,this.Bu=D1(),this.mutatedKeys=D1(),this.Lu=Sh(e),this.Uu=new z6(this.Lu)}get qu(){return this.Fu}Ku(e,a){const n=a?a.Gu:new Wl,r=a?a.Uu:this.Uu;let i=a?a.mutatedKeys:this.mutatedKeys,c=r,s=!1;const o=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,p)=>{const v=r.get(h),L=Xi(this.query,p)?p:null,w=!!v&&this.mutatedKeys.has(v.key),E=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let x=!1;v&&L?v.data.isEqual(L.data)?w!==E&&(n.track({type:3,doc:L}),x=!0):this.Qu(v,L)||(n.track({type:2,doc:L}),x=!0,(o&&this.Lu(L,o)>0||u&&this.Lu(L,u)<0)&&(s=!0)):!v&&L?(n.track({type:0,doc:L}),x=!0):v&&!L&&(n.track({type:1,doc:v}),x=!0,(o||u)&&(s=!0)),x&&(L?(c=c.add(L),i=E?i.add(h):i.delete(h)):(c=c.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const h=this.query.limitType==="F"?c.last():c.first();c=c.delete(h.key),i=i.delete(h.key),n.track({type:1,doc:h})}return{Uu:c,Gu:n,Oi:s,mutatedKeys:i}}Qu(e,a){return e.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(e,a,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((u,h)=>function(p,v){const L=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b1()}};return L(p)-L(v)}(u.type,h.type)||this.Lu(u.doc,h.doc)),this.ju(n);const c=a?this.Wu():[],s=this.Bu.size===0&&this.current?1:0,o=s!==this.$u;return this.$u=s,i.length!==0||o?{snapshot:new P6(this.query,e.Uu,r,i,e.mutatedKeys,s===0,o,!1),zu:c}:{zu:c}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Wl,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(a=>this.Fu=this.Fu.add(a)),e.modifiedDocuments.forEach(a=>{}),e.removedDocuments.forEach(a=>this.Fu=this.Fu.delete(a)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=D1(),this.Uu.forEach(n=>{this.Hu(n.key)&&(this.Bu=this.Bu.add(n.key))});const a=[];return e.forEach(n=>{this.Bu.has(n)||a.push(new ld(n))}),this.Bu.forEach(n=>{e.has(n)||a.push(new od(n))}),a}Ju(e){this.Fu=e.ji,this.Bu=D1();const a=this.Ku(e.documents);return this.applyChanges(a,!0)}Yu(){return P6.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Bk{constructor(e,a,n){this.query=e,this.targetId=a,this.view=n}}class Fk{constructor(e){this.key=e,this.Xu=!1}}class Uk{constructor(e,a,n,r,i,c){this.localStore=e,this.remoteStore=a,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=c,this.Zu={},this.tc=new Z6(s=>wh(s),Fe),this.ec=new Map,this.nc=new Set,this.sc=new v2(u1.comparator),this.ic=new Map,this.rc=new ec,this.oc={},this.uc=new Map,this.cc=I6.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function $k(t,e){const a=Zk(t);let n,r;const i=a.tc.get(e);if(i)n=i.targetId,a.sharedClientState.addLocalQueryTarget(n),r=i.view.Yu();else{const c=await hk(a.localStore,T5(e));a.isPrimaryClient&&Jh(a.remoteStore,c);const s=a.sharedClientState.addLocalQueryTarget(c.targetId);n=c.targetId,r=await qk(a,e,n,s==="current")}return r}async function qk(t,e,a,n){t.hc=(h,p,v)=>async function(L,w,E,x){let y=w.view.Ku(E);y.Oi&&(y=await Ul(L.localStore,w.query,!1).then(({documents:F})=>w.view.Ku(F,y)));const A=x&&x.targetChanges.get(w.targetId),B=w.view.applyChanges(y,L.isPrimaryClient,A);return Kl(L,w.targetId,B.zu),B.snapshot}(t,h,p,v);const r=await Ul(t.localStore,e,!0),i=new Ok(e,r.ji),c=i.Ku(r.documents),s=q0.createSynthesizedTargetChangeForCurrentChange(a,n&&t.onlineState!=="Offline"),o=i.applyChanges(c,t.isPrimaryClient,s);Kl(t,a,o.zu);const u=new Bk(e,a,i);return t.tc.set(e,u),t.ec.has(a)?t.ec.get(a).push(e):t.ec.set(a,[e]),o.snapshot}async function jk(t,e){const a=y1(t),n=a.tc.get(e),r=a.ec.get(n.targetId);if(r.length>1)return a.ec.set(n.targetId,r.filter(i=>!Fe(i,e))),void a.tc.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(n.targetId),a.sharedClientState.isActiveQueryTarget(n.targetId)||await Sr(a.localStore,n.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(n.targetId),Zh(a.remoteStore,n.targetId),xr(a,n.targetId)}).catch(F0)):(xr(a,n.targetId),await Sr(a.localStore,n.targetId,!0))}async function Wk(t,e,a){const n=eT(t);try{const r=await function(i,c){const s=y1(i),o=m2.now(),u=c.reduce((v,L)=>v.add(L.key),D1());let h,p;return s.persistence.runTransaction("Locally write mutations","readwrite",v=>{let L=l4(),w=D1();return s.Ui.getEntries(v,u).next(E=>{L=E,L.forEach((x,y)=>{y.isValidDocument()||(w=w.add(x))})}).next(()=>s.localDocuments.getOverlayedDocuments(v,L)).next(E=>{h=E;const x=[];for(const y of c){const A=vE(y,h.get(y.key).overlayedDocument);A!=null&&x.push(new $5(y.key,A,bh(A.value.mapValue),w3.exists(!0)))}return s.mutationQueue.addMutationBatch(v,o,x,c)}).next(E=>{p=E;const x=E.applyToLocalDocumentSet(h,w);return s.documentOverlayCache.saveOverlays(v,E.batchId,x)})}).then(()=>({batchId:p.batchId,changes:Rh(h)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),function(i,c,s){let o=i.oc[i.currentUser.toKey()];o||(o=new v2(q1)),o=o.insert(c,s),i.oc[i.currentUser.toKey()]=o}(n,r.batchId,a),await W0(n,r.changes),await Ge(n.remoteStore)}catch(r){const i=sc(r,"Failed to persist write");a.reject(i)}}async function Cd(t,e){const a=y1(t);try{const n=await Ck(a.localStore,e);e.targetChanges.forEach((r,i)=>{const c=a.ic.get(i);c&&(Q1(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?c.Xu=!0:r.modifiedDocuments.size>0?Q1(c.Xu):r.removedDocuments.size>0&&(Q1(c.Xu),c.Xu=!1))}),await W0(a,n,e)}catch(n){await F0(n)}}function Gl(t,e,a){const n=y1(t);if(n.isPrimaryClient&&a===0||!n.isPrimaryClient&&a===1){const r=[];n.tc.forEach((i,c)=>{const s=c.view.Eu(e);s.snapshot&&r.push(s.snapshot)}),function(i,c){const s=y1(i);s.onlineState=c;let o=!1;s.queries.forEach((u,h)=>{for(const p of h.listeners)p.Eu(c)&&(o=!0)}),o&&oc(s)}(n.eventManager,e),r.length&&n.Zu.Go(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Gk(t,e,a){const n=y1(t);n.sharedClientState.updateQueryState(e,"rejected",a);const r=n.ic.get(e),i=r&&r.key;if(i){let c=new v2(u1.comparator);c=c.insert(i,S2.newNoDocument(i,P1.min()));const s=D1().add(i),o=new qe(P1.min(),new Map,new p2(q1),c,s);await Cd(n,o),n.sc=n.sc.remove(i),n.ic.delete(e),lc(n)}else await Sr(n.localStore,e,!1).then(()=>xr(n,e,a)).catch(F0)}async function Kk(t,e){const a=y1(t),n=e.batch.batchId;try{const r=await lk(a.localStore,e);ud(a,n,null),fd(a,n),a.sharedClientState.updateMutationState(n,"acknowledged"),await W0(a,r)}catch(r){await F0(r)}}async function Yk(t,e,a){const n=y1(t);try{const r=await function(i,c){const s=y1(i);return s.persistence.runTransaction("Reject batch","readwrite-primary",o=>{let u;return s.mutationQueue.lookupMutationBatch(o,c).next(h=>(Q1(h!==null),u=h.keys(),s.mutationQueue.removeMutationBatch(o,h))).next(()=>s.mutationQueue.performConsistencyCheck(o)).next(()=>s.documentOverlayCache.removeOverlaysForBatchId(o,u,c)).next(()=>s.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(o,u)).next(()=>s.localDocuments.getDocuments(o,u))})}(n.localStore,e);ud(n,e,a),fd(n,e),n.sharedClientState.updateMutationState(e,"rejected",a),await W0(n,r)}catch(r){await F0(r)}}function fd(t,e){(t.uc.get(e)||[]).forEach(a=>{a.resolve()}),t.uc.delete(e)}function ud(t,e,a){const n=y1(t);let r=n.oc[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(a?i.reject(a):i.resolve(),r=r.remove(e)),n.oc[n.currentUser.toKey()]=r}}function xr(t,e,a=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.ec.get(e))t.tc.delete(n),a&&t.Zu.lc(n,a);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(n=>{t.rc.containsKey(n)||hd(t,n)})}function hd(t,e){t.nc.delete(e.path.canonicalString());const a=t.sc.get(e);a!==null&&(Zh(t.remoteStore,a),t.sc=t.sc.remove(e),t.ic.delete(a),lc(t))}function Kl(t,e,a){for(const n of a)n instanceof od?(t.rc.addReference(n.key,e),Xk(t,n)):n instanceof ld?(o1("SyncEngine","Document no longer in limbo: "+n.key),t.rc.removeReference(n.key,e),t.rc.containsKey(n.key)||hd(t,n.key)):b1()}function Xk(t,e){const a=e.key,n=a.path.canonicalString();t.sc.get(a)||t.nc.has(n)||(o1("SyncEngine","New document in limbo: "+a),t.nc.add(n),lc(t))}function lc(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const a=new u1(t2.fromString(e)),n=t.cc.next();t.ic.set(n,new Fk(a)),t.sc=t.sc.insert(a,n),Jh(t.remoteStore,new b5(T5(Be(a.path)),n,2,Wi.ot))}}async function W0(t,e,a){const n=y1(t),r=[],i=[],c=[];n.tc.isEmpty()||(n.tc.forEach((s,o)=>{c.push(n.hc(o,e,a).then(u=>{if(u){n.isPrimaryClient&&n.sharedClientState.updateQueryState(o.targetId,u.fromCache?"not-current":"current"),r.push(u);const h=ac.Vi(o.targetId,u);i.push(h)}}))}),await Promise.all(c),n.Zu.Go(r),await async function(s,o){const u=y1(s);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>q.forEach(o,p=>q.forEach(p.Pi,v=>u.persistence.referenceDelegate.addReference(h,p.targetId,v)).next(()=>q.forEach(p.vi,v=>u.persistence.referenceDelegate.removeReference(h,p.targetId,v)))))}catch(h){if(!U0(h))throw h;o1("LocalStore","Failed to update sequence numbers: "+h)}for(const h of o){const p=h.targetId;if(!h.fromCache){const v=u.$i.get(p),L=v.snapshotVersion,w=v.withLastLimboFreeSnapshotVersion(L);u.$i=u.$i.insert(p,w)}}}(n.localStore,i))}async function Qk(t,e){const a=y1(t);if(!a.currentUser.isEqual(e)){o1("SyncEngine","User change. New user:",e.toKey());const n=await Kh(a.localStore,e);a.currentUser=e,function(r,i){r.uc.forEach(c=>{c.forEach(s=>{s.reject(new d1(W.CANCELLED,i))})}),r.uc.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await W0(a,n.Ki)}}function Jk(t,e){const a=y1(t),n=a.ic.get(e);if(n&&n.Xu)return D1().add(n.key);{let r=D1();const i=a.ec.get(e);if(!i)return r;for(const c of i){const s=a.tc.get(c);r=r.unionWith(s.view.qu)}return r}}function Zk(t){const e=y1(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gk.bind(null,e),e.Zu.Go=Dk.bind(null,e.eventManager),e.Zu.lc=Rk.bind(null,e.eventManager),e}function eT(t){const e=y1(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yk.bind(null,e),e}class tT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=je(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,a){return null}gc(e,a){return null}wc(e){return ok(this.persistence,new ck,e.initialUser,this.wt)}_c(e){return new rk(tc.Ms,this.wt)}dc(e){return new mk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aT{async initialize(e,a){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Gl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qk.bind(null,this.syncEngine),await Tk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Pk}createDatastore(e){const a=je(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Lk(r));var r;return function(i,c,s,o){return new Hk(i,c,s,o)}(e.authCredentials,e.appCheckCredentials,n,a)}createRemoteStore(e){return a=this.localStore,n=this.datastore,r=e.asyncQueue,i=s=>Gl(this.syncEngine,s,0),c=ql.V()?new ql:new pk,new bk(a,n,r,i,c);var a,n,r,i,c}createSyncEngine(e,a){return function(n,r,i,c,s,o,u){const h=new Uk(n,r,i,c,s,o);return u&&(h.ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,a)}terminate(){return async function(e){const a=y1(e);o1("RemoteStore","RemoteStore shutting down."),a.lu.add(5),await j0(a),a.du.shutdown(),a._u.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class dd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,a){this.muted||setTimeout(()=>{this.muted||e(a)},0)}}/**
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
 */class nT{constructor(e,a,n,r){this.authCredentials=e,this.appCheckCredentials=a,this.asyncQueue=n,this.databaseInfo=r,this.user=X2.UNAUTHENTICATED,this.clientId=zh.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async i=>{o1("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(n,i=>(o1("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new d1(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new W4;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(a){const n=sc(a,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function rT(t,e){t.asyncQueue.verifyOperationInProgress(),o1("FirestoreClient","Initializing OfflineComponentProvider");const a=await t.getConfiguration();await e.initialize(a);let n=a.initialUser;t.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Kh(e.localStore,r),n=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function iT(t,e){t.asyncQueue.verifyOperationInProgress();const a=await cT(t);o1("FirestoreClient","Initializing OnlineComponentProvider");const n=await t.getConfiguration();await e.initialize(a,n),t.setCredentialChangeListener(r=>jl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>jl(e.remoteStore,i)),t.onlineComponents=e}async function cT(t){return t.offlineComponents||(o1("FirestoreClient","Using default OfflineComponentProvider"),await rT(t,new tT)),t.offlineComponents}async function md(t){return t.onlineComponents||(o1("FirestoreClient","Using default OnlineComponentProvider"),await iT(t,new aT)),t.onlineComponents}function sT(t){return md(t).then(e=>e.syncEngine)}async function Nr(t){const e=await md(t),a=e.eventManager;return a.onListen=$k.bind(null,e.syncEngine),a.onUnlisten=jk.bind(null,e.syncEngine),a}function oT(t,e,a={}){const n=new W4;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,c,s,o){const u=new dd({next:p=>{i.enqueueAndForget(()=>cd(r,h));const v=p.docs.has(c);!v&&p.fromCache?o.reject(new d1(W.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&s&&s.source==="server"?o.reject(new d1(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(p)},error:p=>o.reject(p)}),h=new sd(Be(c.path),u,{includeMetadataChanges:!0,Du:!0});return id(r,h)}(await Nr(t),t.asyncQueue,e,a,n)),n.promise}const Yl=new Map;/**
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
 */function pd(t,e,a){if(!a)throw new d1(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lT(t,e,a,n){if(e===!0&&n===!0)throw new d1(W.INVALID_ARGUMENT,`${t} and ${a} cannot be used together.`)}function Xl(t){if(!u1.isDocumentKey(t))throw new d1(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ql(t){if(u1.isDocumentKey(t))throw new d1(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b1()}function c4(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new d1(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=Cc(t);throw new d1(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${a}`)}}return t}/**
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
 */class Jl{constructor(e){var a;if(e.host===void 0){if(e.ssl!==void 0)throw new d1(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(a=e.ssl)===null||a===void 0||a;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new d1(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,lT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class fc{constructor(e,a,n){this._authCredentials=a,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jl({}),this._settingsFrozen=!1,e instanceof k6?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new d1(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new k6(r.options.projectId)}(e))}get app(){if(!this._app)throw new d1(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new d1(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jl(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new _A;switch(a.type){case"gapi":const n=a.client;return Q1(!(typeof n!="object"||n===null||!n.auth||!n.auth.getAuthHeaderValueForFirstParty)),new kA(n,a.sessionIndex||"0",a.iamToken||null);case"provider":return a.client;default:throw new d1(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const a=Yl.get(e);a&&(o1("ComponentProvider","Removing Datastore"),Yl.delete(e),a.terminate())}(this),Promise.resolve()}}/**
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
 */class Z2{constructor(e,a,n){this.converter=a,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new G4(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Z2(this.firestore,e,this._key)}}class Ke{constructor(e,a,n){this.converter=a,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ke(this.firestore,e,this._query)}}class G4 extends Ke{constructor(e,a,n){super(e,a,Be(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Z2(this.firestore,null,new u1(e))}withConverter(e){return new G4(this.firestore,e,this._path)}}function CT(t,e,...a){if(t=i3(t),pd("collection","path",e),t instanceof fc){const n=t2.fromString(e,...a);return Ql(n),new G4(t,null,n)}{if(!(t instanceof Z2||t instanceof G4))throw new d1(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(t2.fromString(e,...a));return Ql(n),new G4(t.firestore,null,n)}}function vd(t,e,...a){if(t=i3(t),arguments.length===1&&(e=zh.I()),pd("doc","path",e),t instanceof fc){const n=t2.fromString(e,...a);return Xl(n),new Z2(t,null,new u1(n))}{if(!(t instanceof Z2||t instanceof G4))throw new d1(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(t2.fromString(e,...a));return Xl(n),new Z2(t.firestore,t instanceof G4?t.converter:null,new u1(n))}}/**
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
 */class fT{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Xh(this,"async_queue_retry"),this.Kc=()=>{const a=En();a&&o1("AsyncQueue","Visibility state changed to "+a.visibilityState),this.So.Eo()};const e=En();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const a=En();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const a=new W4;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!U0(e))throw e;o1("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const a=this.Oc.then(()=>(this.Lc=!0,e().catch(n=>{this.Bc=n,this.Lc=!1;const r=function(i){let c=i.message||"";return i.stack&&(c=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),c}(n);throw Y4("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.Lc=!1,n))));return this.Oc=a,a}enqueueAfterDelay(e,a,n){this.Gc(),this.qc.indexOf(e)>-1&&(a=0);const r=cc.createAndSchedule(this,e,a,n,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&b1()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const a of this.$c)if(a.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((a,n)=>a.targetTimeMs-n.targetTimeMs);for(const a of this.$c)if(a.skipDelay(),e!=="all"&&a.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const a=this.$c.indexOf(e);this.$c.splice(a,1)}}function Zl(t){return function(e,a){if(typeof e!="object"||e===null)return!1;const n=e;for(const r of a)if(r in n&&typeof n[r]=="function")return!0;return!1}(t,["next","error","complete"])}class I5 extends fc{constructor(e,a,n){super(e,a,n),this.type="firestore",this._queue=new fT,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gd(this),this._firestoreClient.terminate()}}function uT(t=vu()){return zi(t,"firestore").getImmediate()}function uc(t){return t._firestoreClient||gd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gd(t){var e;const a=t._freezeSettings(),n=function(r,i,c,s){return new qA(r,i,c,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,a);t._firestoreClient=new nT(t._authCredentials,t._appCheckCredentials,t._queue,n)}/**
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
 *//**
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
 */class hc{constructor(...e){for(let a=0;a<e.length;++a)if(e[a].length===0)throw new d1(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new T2(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class D6{constructor(e){this._byteString=e}static fromBase64String(e){try{return new D6(A2.fromBase64String(e))}catch(a){throw new d1(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(e){return new D6(A2.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ld{constructor(e){this._methodName=e}}/**
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
 */class dc{constructor(e,a){if(!isFinite(e)||e<-90||e>90)throw new d1(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(a)||a<-180||a>180)throw new d1(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=e,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q1(this._lat,e._lat)||q1(this._long,e._long)}}/**
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
 */const hT=/^__.*__$/;class dT{constructor(e,a,n){this.data=e,this.fieldMask=a,this.fieldTransforms=n}toMutation(e,a){return this.fieldMask!==null?new $5(e,this.data,this.fieldMask,a,this.fieldTransforms):new $0(e,this.data,a,this.fieldTransforms)}}function zd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b1()}}class mc{constructor(e,a,n,r,i,c){this.settings=e,this.databaseId=a,this.wt=n,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new mc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var a;const n=(a=this.path)===null||a===void 0?void 0:a.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var a;const n=(a=this.path)===null||a===void 0?void 0:a.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Z9(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(a=>e.isPrefixOf(a))!==void 0||this.fieldTransforms.find(a=>e.isPrefixOf(a.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(zd(this.Zc)&&hT.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class mT{constructor(e,a,n){this.databaseId=e,this.ignoreUndefinedProperties=a,this.wt=n||je(e)}aa(e,a,n,r=!1){return new mc({Zc:e,methodName:a,ca:n,path:T2.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Md(t){const e=t._freezeSettings(),a=je(t._databaseId);return new mT(t._databaseId,!!e.ignoreUndefinedProperties,a)}function Hd(t,e,a,n,r,i={}){const c=t.aa(i.merge||i.mergeFields?2:0,e,a,r);wd("Data must be an object, but it was:",c,n);const s=bd(n,c);let o,u;if(i.merge)o=new B3(c.fieldMask),u=c.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const v=pT(e,p,a);if(!c.contains(v))throw new d1(W.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);gT(h,v)||h.push(v)}o=new B3(h),u=c.fieldTransforms.filter(p=>o.covers(p.field))}else o=null,u=c.fieldTransforms;return new dT(new h3(s),o,u)}function Vd(t,e){if(yd(t=i3(t)))return wd("Unsupported field value:",e,t),bd(t,e);if(t instanceof Ld)return function(a,n){if(!zd(n.Zc))throw n.oa(`${a._methodName}() can only be used with update() and set()`);if(!n.path)throw n.oa(`${a._methodName}() is not currently supported inside arrays`);const r=a._toFieldTransform(n);r&&n.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(a,n){const r=[];let i=0;for(const c of a){let s=Vd(c,n.ra(i));s==null&&(s={nullValue:"NULL_VALUE"}),r.push(s),i++}return{arrayValue:{values:r}}}(t,e)}return function(a,n){if((a=i3(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return fE(n.wt,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const r=m2.fromDate(a);return{timestampValue:Q9(n.wt,r)}}if(a instanceof m2){const r=new m2(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Q9(n.wt,r)}}if(a instanceof dc)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof D6)return{bytesValue:$h(n.wt,a._byteString)};if(a instanceof Z2){const r=n.databaseId,i=a.firestore._databaseId;if(!i.isEqual(r))throw n.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ji(a.firestore._databaseId||n.databaseId,a._key.path)}}throw n.oa(`Unsupported field value: ${Cc(a)}`)}(t,e)}function bd(t,e){const a={};return Mh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):J6(t,(n,r)=>{const i=Vd(r,e.ea(n));i!=null&&(a[n]=i)}),{mapValue:{fields:a}}}function yd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof m2||t instanceof dc||t instanceof D6||t instanceof Z2||t instanceof Ld)}function wd(t,e,a){if(!yd(a)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(a)){const n=Cc(a);throw n==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+n)}}function pT(t,e,a){if((e=i3(e))instanceof hc)return e._internalPath;if(typeof e=="string")return Sd(t,e);throw Z9("Field path arguments must be of type string or ",t,!1,void 0,a)}const vT=new RegExp("[~\\*/\\[\\]]");function Sd(t,e,a){if(e.search(vT)>=0)throw Z9(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,a);try{return new hc(...e.split("."))._internalPath}catch{throw Z9(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,a)}}function Z9(t,e,a,n,r){const i=n&&!n.isEmpty(),c=r!==void 0;let s=`Function ${e}() called with invalid data`;a&&(s+=" (via `toFirestore()`)"),s+=". ";let o="";return(i||c)&&(o+=" (found",i&&(o+=` in field ${n}`),c&&(o+=` in document ${r}`),o+=")"),new d1(W.INVALID_ARGUMENT,s+t+o)}function gT(t,e){return t.some(a=>a.isEqual(e))}/**
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
 */class xd{constructor(e,a,n,r,i){this._firestore=e,this._userDataWriter=a,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Z2(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const a=this._document.data.field(Nd("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a)}}}class LT extends xd{data(){return super.data()}}function Nd(t,e){return typeof e=="string"?Sd(t,e):e instanceof hc?e._internalPath:e._delegate._internalPath}/**
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
 */class T8{constructor(e,a){this.hasPendingWrites=e,this.fromCache=a}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _d extends xd{constructor(e,a,n,r,i,c){super(e,a,n,r,c),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const a=new L9(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,a={}){if(this._document){const n=this._document.data.field(Nd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,a.serverTimestamps)}}}class L9 extends _d{data(e={}){return super.data(e)}}class zT{constructor(e,a,n,r){this._firestore=e,this._userDataWriter=a,this._snapshot=r,this.metadata=new T8(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(a=>e.push(a)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,a){this._snapshot.docs.forEach(n=>{e.call(a,new L9(this._firestore,this._userDataWriter,n.key,n,new T8(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const a=!!e.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new d1(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(n,r){if(n._snapshot.oldDocs.isEmpty()){let i=0;return n._snapshot.docChanges.map(c=>({type:"added",doc:new L9(n._firestore,n._userDataWriter,c.doc.key,c.doc,new T8(n._snapshot.mutatedKeys.has(c.doc.key),n._snapshot.fromCache),n.query.converter),oldIndex:-1,newIndex:i++}))}{let i=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(c=>r||c.type!==3).map(c=>{const s=new L9(n._firestore,n._userDataWriter,c.doc.key,c.doc,new T8(n._snapshot.mutatedKeys.has(c.doc.key),n._snapshot.fromCache),n.query.converter);let o=-1,u=-1;return c.type!==0&&(o=i.indexOf(c.doc.key),i=i.delete(c.doc.key)),c.type!==1&&(i=i.add(c.doc),u=i.indexOf(c.doc.key)),{type:MT(c.type),doc:s,oldIndex:o,newIndex:u}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function MT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b1()}}/**
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
 */function HT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new d1(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class VT{convertValue(e,a="none"){switch(k5(e)){case 0:return null;case 1:return e.booleanValue;case 2:return f2(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,a);case 5:return e.stringValue;case 6:return this.convertBytes(E6(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,a);case 10:return this.convertObject(e.mapValue,a);default:throw b1()}}convertObject(e,a){const n={};return J6(e.fields,(r,i)=>{n[r]=this.convertValue(i,a)}),n}convertGeoPoint(e){return new dc(f2(e.latitude),f2(e.longitude))}convertArray(e,a){return(e.values||[]).map(n=>this.convertValue(n,a))}convertServerTimestamp(e,a){switch(a){case"previous":const n=Vh(e);return n==null?null:this.convertValue(n,a);case"estimate":return this.convertTimestamp(p0(e));default:return null}}convertTimestamp(e){const a=Q4(e);return new m2(a.seconds,a.nanos)}convertDocumentKey(e,a){const n=t2.fromString(e);Q1(Gh(n));const r=new k6(n.get(1),n.get(3)),i=new u1(n.popFirst(5));return r.isEqual(a)||Y4(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),i}}/**
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
 */function Ad(t,e,a){let n;return n=t?a&&(a.merge||a.mergeFields)?t.toFirestore(e,a):t.toFirestore(e):e,n}/**
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
 *//**
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
 */function zh1(t){t=c4(t,Z2);const e=c4(t.firestore,I5);return oT(uc(e),t._key).then(a=>kd(e,t,a))}class Ed extends VT{constructor(e){super(),this.firestore=e}convertBytes(e){return new D6(e)}convertReference(e){const a=this.convertDocumentKey(e,this.firestore._databaseId);return new Z2(this.firestore,null,a)}}function Mh1(t,e,a){t=c4(t,Z2);const n=c4(t.firestore,I5),r=Ad(t.converter,e,a);return pc(n,[Hd(Md(n),"setDoc",t._key,r,t.converter!==null,a).toMutation(t._key,w3.none())])}function bT(t){return pc(c4(t.firestore,I5),[new Qi(t._key,w3.none())])}function Hh1(t,e){const a=c4(t.firestore,I5),n=vd(t),r=Ad(t.converter,e);return pc(a,[Hd(Md(t.firestore),"addDoc",n._key,r,t.converter!==null,{}).toMutation(n._key,w3.exists(!1))]).then(()=>n)}function yT(t,...e){var a,n,r;t=i3(t);let i={includeMetadataChanges:!1},c=0;typeof e[c]!="object"||Zl(e[c])||(i=e[c],c++);const s={includeMetadataChanges:i.includeMetadataChanges};if(Zl(e[c])){const p=e[c];e[c]=(a=p.next)===null||a===void 0?void 0:a.bind(p),e[c+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[c+2]=(r=p.complete)===null||r===void 0?void 0:r.bind(p)}let o,u,h;if(t instanceof Z2)u=c4(t.firestore,I5),h=Be(t._key.path),o={next:p=>{e[c]&&e[c](kd(u,t,p))},error:e[c+1],complete:e[c+2]};else{const p=c4(t,Ke);u=c4(p.firestore,I5),h=p._query;const v=new Ed(u);o={next:L=>{e[c]&&e[c](new zT(u,v,p,L))},error:e[c+1],complete:e[c+2]},HT(t._query)}return function(p,v,L,w){const E=new dd(w),x=new sd(v,E,L);return p.asyncQueue.enqueueAndForget(async()=>id(await Nr(p),x)),()=>{E.Tc(),p.asyncQueue.enqueueAndForget(async()=>cd(await Nr(p),x))}}(uc(u),h,s,o)}function pc(t,e){return function(a,n){const r=new W4;return a.asyncQueue.enqueueAndForget(async()=>Wk(await sT(a),n,r)),r.promise}(uc(t),e)}function kd(t,e,a){const n=a.docs.get(e._key),r=new Ed(t);return new _d(t,r,e._key,n,new T8(a.hasPendingWrites,a.fromCache),e.converter)}(function(t,e=!0){(function(a){Q6=a})(A0),N6(new x5("firestore",(a,{options:n})=>{const r=a.getProvider("app").getImmediate(),i=new I5(r,new AA(a.getProvider("auth-internal")),new IA(a.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),j4(Vl,"3.4.13",t),j4(Vl,"3.4.13","esm2017")})();function vc(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]]);return a}function Td(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wT=Td,Id=new N0("auth","Firebase",Td());/**
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
 */const eC=new vi("@firebase/auth");function z9(t,...e){eC.logLevel<=U1.ERROR&&eC.error(`Auth (${A0}): ${t}`,...e)}/**
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
 */function x3(t,...e){throw gc(t,...e)}function F3(t,...e){return gc(t,...e)}function ST(t,e,a){const n=Object.assign(Object.assign({},wT()),{[e]:a});return new N0("auth","Firebase",n).create(e,{appName:t.name})}function gc(t,...e){if(typeof t!="string"){const a=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(a,...n)}return Id.create(t,...e)}function z1(t,e,...a){if(!t)throw gc(e,...a)}function n4(t){const e="INTERNAL ASSERTION FAILED: "+t;throw z9(e),new Error(e)}function C4(t,e){t||n4(e)}/**
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
 */const tC=new Map;function r4(t){C4(t instanceof Function,"Expected a class definition");let e=tC.get(t);return e?(C4(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tC.set(t,e),e)}/**
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
 */function xT(t,e){const a=zi(t,"auth");if(a.isInitialized()){const r=a.getImmediate(),i=a.getOptions();if(P9(i,e!=null?e:{}))return r;x3(r,"already-initialized")}return a.initialize({options:e})}function NT(t,e){const a=(e==null?void 0:e.persistence)||[],n=(Array.isArray(a)?a:[a]).map(r4);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function _r(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _T(){return aC()==="http:"||aC()==="https:"}function aC(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function AT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_T()||fu()||"connection"in navigator)?navigator.onLine:!0}function ET(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class G0{constructor(e,a){this.shortDelay=e,this.longDelay=a,C4(a>e,"Short delay should be less than long delay!"),this.isMobile=Cu()||uu()}get(){return AT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lc(t,e){C4(t.emulator,"Emulator should always be set here");const{url:a}=t.emulator;return e?`${a}${e.startsWith("/")?e.slice(1):e}`:a}/**
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
 */class Pd{static initialize(e,a,n){this.fetchImpl=e,a&&(this.headersImpl=a),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;n4("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;n4("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;n4("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const TT=new G0(3e4,6e4);function K0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Y0(t,e,a,n,r={}){return Dd(t,r,async()=>{let i={},c={};n&&(e==="GET"?c=n:i={body:JSON.stringify(n)});const s=_0(Object.assign({key:t.config.apiKey},c)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),Pd.fetch()(Rd(t,t.config.apiHost,a,s),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},i))})}async function Dd(t,e,a){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},kT),e);try{const r=new IT(t),i=await Promise.race([a(),r.promise]);r.clearNetworkTimeout();const c=await i.json();if("needConfirmation"in c)throw c9(t,"account-exists-with-different-credential",c);if(i.ok&&!("errorMessage"in c))return c;{const s=i.ok?c.errorMessage:c.error.message,[o,u]=s.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw c9(t,"credential-already-in-use",c);if(o==="EMAIL_EXISTS")throw c9(t,"email-already-in-use",c);if(o==="USER_DISABLED")throw c9(t,"user-disabled",c);const h=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ST(t,h,u);x3(t,h)}}catch(r){if(r instanceof F5)throw r;x3(t,"network-request-failed")}}async function X0(t,e,a,n,r={}){const i=await Y0(t,e,a,n,r);return"mfaPendingCredential"in i&&x3(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rd(t,e,a,n){const r=`${e}${a}?${n}`;return t.config.emulator?Lc(t.config,r):`${t.config.apiScheme}://${r}`}class IT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((a,n)=>{this.timer=setTimeout(()=>n(F3(this.auth,"network-request-failed")),TT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function c9(t,e,a){const n={appName:t.name};a.email&&(n.email=a.email),a.phoneNumber&&(n.phoneNumber=a.phoneNumber);const r=F3(t,e,n);return r.customData._tokenResponse=a,r}/**
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
 */async function PT(t,e){return Y0(t,"POST","/v1/accounts:delete",e)}async function DT(t,e){return Y0(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function K8(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RT(t,e=!1){const a=i3(t),n=await a.getIdToken(e),r=zc(n);z1(r&&r.exp&&r.auth_time&&r.iat,a.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,c=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:K8(kn(r.auth_time)),issuedAtTime:K8(kn(r.iat)),expirationTime:K8(kn(r.exp)),signInProvider:c||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kn(t){return Number(t)*1e3}function zc(t){var e;const[a,n,r]=t.split(".");if(a===void 0||n===void 0||r===void 0)return z9("JWT malformed, contained fewer than 3 sections"),null;try{const i=aN(n);return i?JSON.parse(i):(z9("Failed to decode base64 JWT payload"),null)}catch(i){return z9("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function OT(t){const e=zc(t);return z1(e,"internal-error"),z1(typeof e.exp<"u","internal-error"),z1(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function M0(t,e,a=!1){if(a)return e;try{return await e}catch(n){throw n instanceof F5&&BT(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function BT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var a;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=((a=this.user.stsTokenManager.expirationTime)!==null&&a!==void 0?a:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const a=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(a){((e=a)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Od{constructor(e,a){this.createdAt=e,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=K8(this.lastLoginAt),this.creationTime=K8(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ee(t){var e;const a=t.auth,n=await t.getIdToken(),r=await M0(t,DT(a,{idToken:n}));z1(r==null?void 0:r.users.length,a,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const c=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qT(i.providerUserInfo):[],s=$T(t.providerData,c),o=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(s!=null&&s.length),h=o?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Od(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function UT(t){const e=i3(t);await ee(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $T(t,e){return[...t.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function qT(t){return t.map(e=>{var{providerId:a}=e,n=vc(e,["providerId"]);return{providerId:a,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function jT(t,e){const a=await Dd(t,{},async()=>{const n=_0({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,c=Rd(t,r,"/v1/token",`key=${i}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Pd.fetch()(c,{method:"POST",headers:s,body:n})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}/**
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
 */class H0{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z1(e.idToken,"internal-error"),z1(typeof e.idToken<"u","internal-error"),z1(typeof e.refreshToken<"u","internal-error");const a="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,a)}async getToken(e,a=!1){return z1(!this.accessToken||this.refreshToken,e,"user-token-expired"),!a&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,a){const{accessToken:n,refreshToken:r,expiresIn:i}=await jT(e,a);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,a,n){this.refreshToken=a||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,a){const{refreshToken:n,accessToken:r,expirationTime:i}=a,c=new H0;return n&&(z1(typeof n=="string","internal-error",{appName:e}),c.refreshToken=n),r&&(z1(typeof r=="string","internal-error",{appName:e}),c.accessToken=r),i&&(z1(typeof i=="number","internal-error",{appName:e}),c.expirationTime=i),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new H0,this.toJSON())}_performRefresh(){return n4("not implemented")}}/**
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
 */function A4(t,e){z1(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class y5{constructor(e){var{uid:a,auth:n,stsTokenManager:r}=e,i=vc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Od(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const a=await M0(this,this.stsTokenManager.getToken(this.auth,e));return z1(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(e){return RT(this,e)}reload(){return UT(this)}_assign(e){this!==e&&(z1(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(a=>Object.assign({},a)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new y5(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z1(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,a=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),a&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await M0(this,PT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,a){var n,r,i,c,s,o,u,h;const p=(n=a.displayName)!==null&&n!==void 0?n:void 0,v=(r=a.email)!==null&&r!==void 0?r:void 0,L=(i=a.phoneNumber)!==null&&i!==void 0?i:void 0,w=(c=a.photoURL)!==null&&c!==void 0?c:void 0,E=(s=a.tenantId)!==null&&s!==void 0?s:void 0,x=(o=a._redirectEventId)!==null&&o!==void 0?o:void 0,y=(u=a.createdAt)!==null&&u!==void 0?u:void 0,A=(h=a.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:B,emailVerified:F,isAnonymous:Q,providerData:r1,stsTokenManager:s1}=a;z1(B&&s1,e,"internal-error");const T1=H0.fromJSON(this.name,s1);z1(typeof B=="string",e,"internal-error"),A4(p,e.name),A4(v,e.name),z1(typeof F=="boolean",e,"internal-error"),z1(typeof Q=="boolean",e,"internal-error"),A4(L,e.name),A4(w,e.name),A4(E,e.name),A4(x,e.name),A4(y,e.name),A4(A,e.name);const C1=new y5({uid:B,auth:e,email:v,emailVerified:F,displayName:p,isAnonymous:Q,photoURL:w,phoneNumber:L,tenantId:E,stsTokenManager:T1,createdAt:y,lastLoginAt:A});return r1&&Array.isArray(r1)&&(C1.providerData=r1.map(H1=>Object.assign({},H1))),x&&(C1._redirectEventId=x),C1}static async _fromIdTokenResponse(e,a,n=!1){const r=new H0;r.updateFromServerResponse(a);const i=new y5({uid:a.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}}/**
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
 */class Bd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,a){this.storage[e]=a}async _get(e){const a=this.storage[e];return a===void 0?null:a}async _remove(e){delete this.storage[e]}_addListener(e,a){}_removeListener(e,a){}}Bd.type="NONE";const nC=Bd;/**
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
 */function M9(t,e,a){return`firebase:${t}:${e}:${a}`}class M6{constructor(e,a,n){this.persistence=e,this.auth=a,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=M9(this.userKey,r.apiKey,i),this.fullPersistenceKey=M9("persistence",r.apiKey,i),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?y5._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,a,n="authUser"){if(!a.length)return new M6(r4(nC),e,n);const r=(await Promise.all(a.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||r4(nC);const c=M9(n,e.config.apiKey,e.name);let s=null;for(const u of a)try{const h=await u._get(c);if(h){const p=y5._fromJSON(e,h);u!==i&&(s=p),i=u;break}}catch{}const o=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!o.length?new M6(i,e,n):(i=o[0],s&&await i._set(c,s.toJSON()),await Promise.all(a.map(async u=>{if(u!==i)try{await u._remove(c)}catch{}})),new M6(i,e,n))}}/**
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
 */function rC(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jd(e))return"Blackberry";if(Wd(e))return"Webos";if(Mc(e))return"Safari";if((e.includes("chrome/")||Ud(e))&&!e.includes("edge/"))return"Chrome";if(qd(e))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(a);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Fd(t=H2()){return/firefox\//i.test(t)}function Mc(t=H2()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ud(t=H2()){return/crios\//i.test(t)}function $d(t=H2()){return/iemobile/i.test(t)}function qd(t=H2()){return/android/i.test(t)}function jd(t=H2()){return/blackberry/i.test(t)}function Wd(t=H2()){return/webos/i.test(t)}function Ye(t=H2()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WT(t=H2()){var e;return Ye(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GT(){return hu()&&document.documentMode===10}function Gd(t=H2()){return Ye(t)||qd(t)||Wd(t)||jd(t)||/windows phone/i.test(t)||$d(t)}function KT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kd(t,e=[]){let a;switch(t){case"Browser":a=rC(H2());break;case"Worker":a=`${rC(H2())}-${t}`;break;default:a=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${a}/JsCore/${A0}/${n}`}/**
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
 */class YT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,a){const n=i=>new Promise((c,s)=>{try{const o=e(i);c(o)}catch(o){s(o)}});n.onAbort=a,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var a;if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(a=r)===null||a===void 0?void 0:a.message})}}}/**
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
 */class XT{constructor(e,a,n){this.app=e,this.heartbeatServiceProvider=a,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iC(this),this.idTokenSubscription=new iC(this),this.beforeStateQueue=new YT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Id,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,a){return a&&(this._popupRedirectResolver=r4(a)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await M6.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var a;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!c||c===s)&&(o==null?void 0:o.user)&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z1(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(e){var a;try{await ee(e)}catch(n){if(((a=n)===null||a===void 0?void 0:a.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ET()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const a=e?i3(e):null;return a&&z1(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(e,a=!1){if(!this._deleted)return e&&z1(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(r4(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new N0("auth","Firebase",e())}onAuthStateChanged(e,a,n){return this.registerStateListener(this.authStateSubscription,e,a,n)}beforeAuthStateChanged(e,a){return this.beforeStateQueue.pushCallback(e,a)}onIdTokenChanged(e,a,n){return this.registerStateListener(this.idTokenSubscription,e,a,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,a){const n=await this.getOrInitRedirectPersistenceManager(a);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const a=e&&r4(e)||this._popupRedirectResolver;z1(a,this,"argument-error"),this.redirectPersistenceManager=await M6.create(this,[r4(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var a,n;return this._isInitialized&&await this.queue(async()=>{}),((a=this._currentUser)===null||a===void 0?void 0:a._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(a=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&a!==void 0?a:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,a,n,r){if(this._deleted)return()=>{};const i=typeof a=="function"?a:a.next.bind(a),c=this._isInitialized?Promise.resolve():this._initializationPromise;return z1(c,this,"internal-error"),c.then(()=>i(this.currentUser)),typeof a=="function"?e.addObserver(a,n,r):e.addObserver(a)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z1(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const a={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return n&&(a["X-Firebase-Client"]=n),a}}function Xe(t){return i3(t)}class iC{constructor(e){this.auth=e,this.observer=null,this.addObserver=uN(a=>this.observer=a)}get next(){return z1(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Hc{constructor(e,a){this.providerId=e,this.signInMethod=a}toJSON(){return n4("not implemented")}_getIdTokenResponse(e){return n4("not implemented")}_linkToIdToken(e,a){return n4("not implemented")}_getReauthenticationResolver(e){return n4("not implemented")}}async function QT(t,e){return Y0(t,"POST","/v1/accounts:update",e)}/**
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
 */async function JT(t,e){return X0(t,"POST","/v1/accounts:signInWithPassword",K0(t,e))}/**
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
 */async function ZT(t,e){return X0(t,"POST","/v1/accounts:signInWithEmailLink",K0(t,e))}async function eI(t,e){return X0(t,"POST","/v1/accounts:signInWithEmailLink",K0(t,e))}/**
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
 */class V0 extends Hc{constructor(e,a,n,r=null){super("password",n),this._email=e,this._password=a,this._tenantId=r}static _fromEmailAndPassword(e,a){return new V0(e,a,"password")}static _fromEmailAndCode(e,a,n=null){return new V0(e,a,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e;if((a==null?void 0:a.email)&&(a==null?void 0:a.password)){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return JT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ZT(e,{email:this._email,oobCode:this._password});default:x3(e,"internal-error")}}async _linkToIdToken(e,a){switch(this.signInMethod){case"password":return QT(e,{idToken:a,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eI(e,{idToken:a,email:this._email,oobCode:this._password});default:x3(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function H6(t,e){return X0(t,"POST","/v1/accounts:signInWithIdp",K0(t,e))}/**
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
 */const tI="http://localhost";class P5 extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const a=new P5(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(a.idToken=e.idToken),e.accessToken&&(a.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(a.nonce=e.nonce),e.pendingToken&&(a.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(a.accessToken=e.oauthToken,a.secret=e.oauthTokenSecret):x3("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r}=a,i=vc(a,["providerId","signInMethod"]);if(!n||!r)return null;const c=new P5(n,r);return c.idToken=i.idToken||void 0,c.accessToken=i.accessToken||void 0,c.secret=i.secret,c.nonce=i.nonce,c.pendingToken=i.pendingToken||null,c}_getIdTokenResponse(e){const a=this.buildRequest();return H6(e,a)}_linkToIdToken(e,a){const n=this.buildRequest();return n.idToken=a,H6(e,n)}_getReauthenticationResolver(e){const a=this.buildRequest();return a.autoCreate=!1,H6(e,a)}buildRequest(){const e={requestUri:tI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),e.postBody=_0(a)}return e}}/**
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
 */function aI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nI(t){const e=_8(A8(t)).link,a=e?_8(A8(e)).deep_link_id:null,n=_8(A8(t)).deep_link_id;return(n?_8(A8(n)).link:null)||n||a||e||t}class Vc{constructor(e){var a,n,r,i,c,s;const o=_8(A8(e)),u=(a=o.apiKey)!==null&&a!==void 0?a:null,h=(n=o.oobCode)!==null&&n!==void 0?n:null,p=aI((r=o.mode)!==null&&r!==void 0?r:null);z1(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=o.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(c=o.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(s=o.tenantId)!==null&&s!==void 0?s:null}static parseLink(e){const a=nI(e);try{return new Vc(a)}catch{return null}}}/**
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
 */class t8{constructor(){this.providerId=t8.PROVIDER_ID}static credential(e,a){return V0._fromEmailAndPassword(e,a)}static credentialWithLink(e,a){const n=Vc.parseLink(a);return z1(n,"argument-error"),V0._fromEmailAndCode(e,n.code,n.tenantId)}}t8.PROVIDER_ID="password";t8.EMAIL_PASSWORD_SIGN_IN_METHOD="password";t8.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Q0 extends Yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class R4 extends Q0{constructor(){super("facebook.com")}static credential(e){return P5._fromParams({providerId:R4.PROVIDER_ID,signInMethod:R4.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return R4.credentialFromTaggedObject(e)}static credentialFromError(e){return R4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return R4.credential(e.oauthAccessToken)}catch{return null}}}R4.FACEBOOK_SIGN_IN_METHOD="facebook.com";R4.PROVIDER_ID="facebook.com";/**
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
 */class O4 extends Q0{constructor(){super("google.com"),this.addScope("profile")}static credential(e,a){return P5._fromParams({providerId:O4.PROVIDER_ID,signInMethod:O4.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:a})}static credentialFromResult(e){return O4.credentialFromTaggedObject(e)}static credentialFromError(e){return O4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:a,oauthAccessToken:n}=e;if(!a&&!n)return null;try{return O4.credential(a,n)}catch{return null}}}O4.GOOGLE_SIGN_IN_METHOD="google.com";O4.PROVIDER_ID="google.com";/**
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
 */class B4 extends Q0{constructor(){super("github.com")}static credential(e){return P5._fromParams({providerId:B4.PROVIDER_ID,signInMethod:B4.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return B4.credentialFromTaggedObject(e)}static credentialFromError(e){return B4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return B4.credential(e.oauthAccessToken)}catch{return null}}}B4.GITHUB_SIGN_IN_METHOD="github.com";B4.PROVIDER_ID="github.com";/**
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
 */class F4 extends Q0{constructor(){super("twitter.com")}static credential(e,a){return P5._fromParams({providerId:F4.PROVIDER_ID,signInMethod:F4.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:a})}static credentialFromResult(e){return F4.credentialFromTaggedObject(e)}static credentialFromError(e){return F4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:a,oauthTokenSecret:n}=e;if(!a||!n)return null;try{return F4.credential(a,n)}catch{return null}}}F4.TWITTER_SIGN_IN_METHOD="twitter.com";F4.PROVIDER_ID="twitter.com";/**
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
 */async function rI(t,e){return X0(t,"POST","/v1/accounts:signUp",K0(t,e))}/**
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
 */class D5{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,a,n,r=!1){const i=await y5._fromIdTokenResponse(e,n,r),c=cC(n);return new D5({user:i,providerId:c,_tokenResponse:n,operationType:a})}static async _forOperation(e,a,n){await e._updateTokensIfNecessary(n,!0);const r=cC(n);return new D5({user:e,providerId:r,_tokenResponse:n,operationType:a})}}function cC(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class te extends F5{constructor(e,a,n,r){var i;super(a.code,a.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,te.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:a.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,a,n,r){return new te(e,a,n,r)}}function Xd(t,e,a,n){return(e==="reauthenticate"?a._getReauthenticationResolver(t):a._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?te._fromErrorAndOperation(t,i,e,n):i})}async function iI(t,e,a=!1){const n=await M0(t,e._linkToIdToken(t.auth,await t.getIdToken()),a);return D5._forOperation(t,"link",n)}/**
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
 */async function cI(t,e,a=!1){var n;const{auth:r}=t,i="reauthenticate";try{const c=await M0(t,Xd(r,i,e,t),a);z1(c.idToken,r,"internal-error");const s=zc(c.idToken);z1(s,r,"internal-error");const{sub:o}=s;return z1(t.uid===o,r,"user-mismatch"),D5._forOperation(t,i,c)}catch(c){throw((n=c)===null||n===void 0?void 0:n.code)==="auth/user-not-found"&&x3(r,"user-mismatch"),c}}/**
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
 */async function Qd(t,e,a=!1){const n="signIn",r=await Xd(t,n,e),i=await D5._fromIdTokenResponse(t,n,r);return a||await t._updateCurrentUser(i.user),i}async function sI(t,e){return Qd(Xe(t),e)}async function Vh1(t,e,a){const n=Xe(t),r=await rI(n,{returnSecureToken:!0,email:e,password:a}),i=await D5._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function bh1(t,e,a){return sI(i3(t),t8.credential(e,a))}function oI(t,e,a,n){return i3(t).onAuthStateChanged(e,a,n)}function lI(t){return i3(t).signOut()}const ae="__sak";/**
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
 */class Jd{constructor(e,a){this.storageRetriever=e,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(ae,"1"),this.storage.removeItem(ae),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,a){return this.storage.setItem(e,JSON.stringify(a)),Promise.resolve()}_get(e){const a=this.storage.getItem(e);return Promise.resolve(a?JSON.parse(a):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function CI(){const t=H2();return Mc(t)||Ye(t)}const fI=1e3,uI=10;class Zd extends Jd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,a)=>this.onStorageEvent(e,a),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CI()&&KT(),this.fallbackToPolling=Gd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const a of Object.keys(this.listeners)){const n=this.storage.getItem(a),r=this.localCache[a];n!==r&&e(a,r,n)}}onStorageEvent(e,a=!1){if(!e.key){this.forAllChangedKeys((c,s,o)=>{this.notifyListeners(c,o)});return}const n=e.key;if(a?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(n);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!a)return}const r=()=>{const c=this.storage.getItem(n);!a&&this.localCache[n]===c||this.notifyListeners(n,c)},i=this.storage.getItem(n);GT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,uI):r()}notifyListeners(e,a){this.localCache[e]=a;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,a,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:a,newValue:n}),!0)})},fI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,a){await super._set(e,a),this.localCache[e]=JSON.stringify(a)}async _get(e){const a=await super._get(e);return this.localCache[e]=JSON.stringify(a),a}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zd.type="LOCAL";const hI=Zd;/**
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
 */class em extends Jd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,a){}_removeListener(e,a){}}em.type="SESSION";const tm=em;/**
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
 */function dI(t){return Promise.all(t.map(async e=>{try{const a=await e;return{fulfilled:!0,value:a}}catch(a){return{fulfilled:!1,reason:a}}}))}/**
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
 */class Qe{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const a=this.receivers.find(r=>r.isListeningto(e));if(a)return a;const n=new Qe(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const a=e,{eventId:n,eventType:r,data:i}=a.data,c=this.handlersMap[r];if(!(c!=null&&c.size))return;a.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(c).map(async u=>u(a.origin,i)),o=await dI(s);a.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(a)}_unsubscribe(e,a){this.handlersMap[e]&&a&&this.handlersMap[e].delete(a),(!a||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qe.receivers=[];/**
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
 */function bc(t="",e=10){let a="";for(let n=0;n<e;n++)a+=Math.floor(Math.random()*10);return t+a}/**
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
 */class mI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,a,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,c;return new Promise((s,o)=>{const u=bc("",20);r.port1.start();const h=setTimeout(()=>{o(new Error("unsupported_event"))},n);c={messageChannel:r,onMessage(p){const v=p;if(v.data.eventId===u)switch(v.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(v.data.response);break;default:clearTimeout(h),clearTimeout(i),o(new Error("invalid_response"));break}}},this.handlers.add(c),r.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:u,data:a},[r.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function U3(){return window}function pI(t){U3().location.href=t}/**
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
 */function am(){return typeof U3().WorkerGlobalScope<"u"&&typeof U3().importScripts=="function"}async function vI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LI(){return am()?self:null}/**
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
 */const nm="firebaseLocalStorageDb",zI=1,ne="firebaseLocalStorage",rm="fbase_key";class J0{constructor(e){this.request=e}toPromise(){return new Promise((e,a)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function Je(t,e){return t.transaction([ne],e?"readwrite":"readonly").objectStore(ne)}function MI(){const t=indexedDB.deleteDatabase(nm);return new J0(t).toPromise()}function Ar(){const t=indexedDB.open(nm,zI);return new Promise((e,a)=>{t.addEventListener("error",()=>{a(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(ne,{keyPath:rm})}catch(r){a(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(ne)?e(n):(n.close(),await MI(),e(await Ar()))})})}async function sC(t,e,a){const n=Je(t,!0).put({[rm]:e,value:a});return new J0(n).toPromise()}async function HI(t,e){const a=Je(t,!1).get(e),n=await new J0(a).toPromise();return n===void 0?null:n.value}function oC(t,e){const a=Je(t,!0).delete(e);return new J0(a).toPromise()}const VI=800,bI=3;class im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ar(),this.db)}async _withRetries(e){let a=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(a++>bI)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qe._getInstance(LI()),this.receiver._subscribe("keyChanged",async(e,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(e,a)=>["keyChanged"])}async initializeSender(){var e,a;if(this.activeServiceWorker=await vI(),!this.activeServiceWorker)return;this.sender=new mI(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((a=n[0])===null||a===void 0?void 0:a.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ar();return await sC(e,ae,"1"),await oC(e,ae),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,a){return this._withPendingWrite(async()=>(await this._withRetries(n=>sC(n,e,a)),this.localCache[e]=a,this.notifyServiceWorker(e)))}async _get(e){const a=await this._withRetries(n=>HI(n,e));return this.localCache[e]=a,a}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(a=>oC(a,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Je(r,!1).getAll();return new J0(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const a=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),a.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),a.push(r));return a}notifyListeners(e,a){this.localCache[e]=a;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}im.type="LOCAL";const yI=im;/**
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
 */function wI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function SI(t){return new Promise((e,a)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=r=>{const i=F3("internal-error");i.customData=r,a(i)},n.type="text/javascript",n.charset="UTF-8",wI().appendChild(n)})}function xI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new G0(3e4,6e4);/**
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
 */function NI(t,e){return e?r4(e):(z1(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yc extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return H6(e,this._buildIdpRequest())}_linkToIdToken(e,a){return H6(e,this._buildIdpRequest(a))}_getReauthenticationResolver(e){return H6(e,this._buildIdpRequest())}_buildIdpRequest(e){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(a.idToken=e),a}}function _I(t){return Qd(t.auth,new yc(t),t.bypassAuthState)}function AI(t){const{auth:e,user:a}=t;return z1(a,e,"internal-error"),cI(a,new yc(t),t.bypassAuthState)}async function EI(t){const{auth:e,user:a}=t;return z1(a,e,"internal-error"),iI(a,new yc(t),t.bypassAuthState)}/**
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
 */class cm{constructor(e,a,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(e,a)=>{this.pendingPromise={resolve:e,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:a,sessionId:n,postBody:r,tenantId:i,error:c,type:s}=e;if(c){this.reject(c);return}const o={auth:this.auth,requestUri:a,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _I;case"linkViaPopup":case"linkViaRedirect":return EI;case"reauthViaPopup":case"reauthViaRedirect":return AI;default:x3(this.auth,"internal-error")}}resolve(e){C4(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C4(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kI=new G0(2e3,1e4);class u6 extends cm{constructor(e,a,n,r,i){super(e,a,r,i),this.provider=n,this.authWindow=null,this.pollId=null,u6.currentPopupAction&&u6.currentPopupAction.cancel(),u6.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z1(e,this.auth,"internal-error"),e}async onExecution(){C4(this.filter.length===1,"Popup operations only handle one event");const e=bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(F3(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(F3(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,u6.currentPopupAction=null}pollUserCancellation(){const e=()=>{var a,n;if(!((n=(a=this.authWindow)===null||a===void 0?void 0:a.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(F3(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kI.get())};e()}}u6.currentPopupAction=null;/**
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
 */const TI="pendingRedirect",H9=new Map;class II extends cm{constructor(e,a,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,n),this.eventId=null}async execute(){let e=H9.get(this.auth._key());if(!e){try{const n=await PI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(a){e=()=>Promise.reject(a)}H9.set(this.auth._key(),e)}return this.bypassAuthState||H9.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const a=await this.auth._redirectUserForId(e.eventId);if(a)return this.user=a,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PI(t,e){const a=OI(e),n=RI(t);if(!await n._isAvailable())return!1;const r=await n._get(a)==="true";return await n._remove(a),r}function DI(t,e){H9.set(t._key(),e)}function RI(t){return r4(t._redirectPersistence)}function OI(t){return M9(TI,t.config.apiKey,t.name)}async function BI(t,e,a=!1){const n=Xe(t),r=NI(n,e),c=await new II(n,r,a).execute();return c&&!a&&(delete c.user._redirectEventId,await n._persistUserIfCurrent(c.user),await n._setRedirectUser(null,e)),c}/**
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
 */const FI=10*60*1e3;class UI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let a=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(a=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$I(e)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=e,a=!0)),a}sendToConsumer(e,a){var n;if(e.error&&!sm(e)){const r=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";a.onError(F3(this.auth,r))}else a.onAuthEvent(e)}isEventForConsumer(e,a){const n=a.eventId===null||!!e.eventId&&e.eventId===a.eventId;return a.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FI&&this.cachedEventUids.clear(),this.cachedEventUids.has(lC(e))}saveEventToCache(e){this.cachedEventUids.add(lC(e)),this.lastProcessedEventTime=Date.now()}}function lC(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $I(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sm(t);default:return!1}}/**
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
 */async function qI(t,e={}){return Y0(t,"GET","/v1/projects",e)}/**
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
 */const jI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WI=/^https?/;async function GI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qI(t);for(const a of e)try{if(KI(a))return}catch{}x3(t,"unauthorized-domain")}function KI(t){const e=_r(),{protocol:a,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&n===""?a==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):a==="chrome-extension:"&&c.hostname===n}if(!WI.test(a))return!1;if(jI.test(t))return n===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const YI=new G0(3e4,6e4);function CC(){const t=U3().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let a=0;a<t.CP.length;a++)t.CP[a]=null}}function XI(t){return new Promise((e,a)=>{var n,r,i;function c(){CC(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{CC(),a(F3(t,"network-request-failed"))},timeout:YI.get()})}if(!((r=(n=U3().gapi)===null||n===void 0?void 0:n.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=U3().gapi)===null||i===void 0)&&i.load)c();else{const s=xI("iframefcb");return U3()[s]=()=>{gapi.load?c():a(F3(t,"network-request-failed"))},SI(`https://apis.google.com/js/api.js?onload=${s}`).catch(o=>a(o))}}).catch(e=>{throw V9=null,e})}let V9=null;function QI(t){return V9=V9||XI(t),V9}/**
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
 */const JI=new G0(5e3,15e3),ZI="__/auth/iframe",eP="emulator/auth/iframe",tP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nP(t){const e=t.config;z1(e.authDomain,t,"auth-domain-config-required");const a=e.emulator?Lc(e,eP):`https://${t.config.authDomain}/${ZI}`,n={apiKey:e.apiKey,appName:t.name,v:A0},r=aP.get(t.config.apiHost);r&&(n.eid=r);const i=t._getFrameworks();return i.length&&(n.fw=i.join(",")),`${a}?${_0(n).slice(1)}`}async function rP(t){const e=await QI(t),a=U3().gapi;return z1(a,t,"internal-error"),e.open({where:document.body,url:nP(t),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tP,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const c=F3(t,"network-request-failed"),s=U3().setTimeout(()=>{i(c)},JI.get());function o(){U3().clearTimeout(s),r(n)}n.ping(o).then(o,()=>{i(c)})}))}/**
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
 */const iP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cP=500,sP=600,oP="_blank",lP="http://localhost";class fC{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CP(t,e,a,n=cP,r=sP){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),c=Math.max((window.screen.availWidth-n)/2,0).toString();let s="";const o=Object.assign(Object.assign({},iP),{width:n.toString(),height:r.toString(),top:i,left:c}),u=H2().toLowerCase();a&&(s=Ud(u)?oP:a),Fd(u)&&(e=e||lP,o.scrollbars="yes");const h=Object.entries(o).reduce((v,[L,w])=>`${v}${L}=${w},`,"");if(WT(u)&&s!=="_self")return fP(e||"",s),new fC(null);const p=window.open(e||"",s,h);z1(p,t,"popup-blocked");try{p.focus()}catch{}return new fC(p)}function fP(t,e){const a=document.createElement("a");a.href=t,a.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(n)}/**
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
 */const uP="__/auth/handler",hP="emulator/auth/handler";function uC(t,e,a,n,r,i){z1(t.config.authDomain,t,"auth-domain-config-required"),z1(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:a,redirectUrl:n,v:A0,eventId:r};if(e instanceof Yd){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",fN(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[o,u]of Object.entries(i||{}))c[o]=u}if(e instanceof Q0){const o=e.getScopes().filter(u=>u!=="");o.length>0&&(c.scopes=o.join(","))}t.tenantId&&(c.tid=t.tenantId);const s=c;for(const o of Object.keys(s))s[o]===void 0&&delete s[o];return`${dP(t)}?${_0(s).slice(1)}`}function dP({config:t}){return t.emulator?Lc(t,hP):`https://${t.authDomain}/${uP}`}/**
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
 */const Tn="webStorageSupport";class mP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tm,this._completeRedirectFn=BI,this._overrideRedirectResult=DI}async _openPopup(e,a,n,r){var i;C4((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const c=uC(e,a,n,_r(),r);return CP(e,c,bc())}async _openRedirect(e,a,n,r){return await this._originValidation(e),pI(uC(e,a,n,_r(),r)),new Promise(()=>{})}_initialize(e){const a=e._key();if(this.eventManagers[a]){const{manager:r,promise:i}=this.eventManagers[a];return r?Promise.resolve(r):(C4(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[a]={promise:n},n.catch(()=>{delete this.eventManagers[a]}),n}async initAndGetManager(e){const a=await rP(e),n=new UI(e);return a.register("authEvent",r=>(z1(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=a,n}_isIframeWebStorageSupported(e,a){this.iframes[e._key()].send(Tn,{type:Tn},r=>{var i;const c=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Tn];c!==void 0&&a(!!c),x3(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const a=e._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=GI(e)),this.originValidationPromises[a]}get _shouldInitProactively(){return Gd()||Mc()||Ye()}}const pP=mP;var hC="@firebase/auth",dC="0.20.5";/**
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
 */class vP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const a=this.auth.onIdTokenChanged(n=>{var r;e(((r=n)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,a),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const a=this.internalListeners.get(e);!a||(this.internalListeners.delete(e),a(),this.updateProactiveRefresh())}assertAuthConfigured(){z1(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LP(t){N6(new x5("auth",(e,{options:a})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:c}=n.options;return((s,o)=>{z1(i&&!i.includes(":"),"invalid-api-key",{appName:s.name}),z1(!(c!=null&&c.includes(":")),"argument-error",{appName:s.name});const u={apiKey:i,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kd(t)},h=new XT(s,o,u);return NT(h,a),h})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,a,n)=>{e.getProvider("auth-internal").initialize()})),N6(new x5("auth-internal",e=>{const a=Xe(e.getProvider("auth").getImmediate());return(n=>new vP(n))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),j4(hC,dC,gP(t)),j4(hC,dC,"esm2017")}/**
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
 */function zP(t=vu()){const e=zi(t,"auth");return e.isInitialized()?e.getImmediate():xT(t,{popupRedirectResolver:pP,persistence:[yI,hI,tm]})}LP("Browser");const MP={apiKey:"AIzaSyCtgLnAtYwgw26hCbdNp92fAmgV7eEevkM",authDomain:"auth-example-1d31d.firebaseapp.com",projectId:"auth-example-1d31d",storageBucket:"auth-example-1d31d.appspot.com",messagingSenderId:"951751810777",appId:"1:951751810777:web:a66cce8c7bd165f89e28c8"},om=f_(MP),b9=zP(om),HP=uT(om),mC=CT(HP,"shoes");const j5=(t,e)=>{const a=t.__vccOpts||t;for(const[n,r]of e)a[n]=r;return a},VP={name:"AdminNav",props:["user","signoutHandler"],setup(){}},bP={class:"nav my-3"},yP=n2("Admin"),wP=n2(" \xA0 \xA0 "),SP=n2("Add");function xP(t,e,a,n,r,i){const c=Q2("router-link");return P2(),$2("div",bP,[_1(c,{to:"/admin"},{default:w2(()=>[yP]),_:1}),wP,_1(c,{to:"/add"},{default:w2(()=>[SP]),_:1})])}const lm=j5(VP,[["render",xP],["__scopeId","data-v-3a051916"]]);const NP={name:"CustomerNav",props:["user","signoutHandler"]},wc=t=>(oi("data-v-742b7dc9"),t=t(),li(),t),_P={class:"d-md-flex justify-content-center align-items-center"},AP=wc(()=>V("div",{class:"me-auto"},null,-1)),EP={class:"text-center ms-auto my-3"},kP={class:"py-3 px-4 mx-auto max-w-screen-xl md:px-6"},TP={class:"flex items-center"},IP={class:"flex flex-row mt-0 mr-6 space-x-8 text-lg font-medium"},PP=n2("Home"),DP=n2("Men's"),RP=n2("Women's"),OP=n2("Unisex's"),BP=n2("About"),FP=n2("Contact"),UP=n2("Blog"),$P={class:"text-center my-3 ms-auto"},qP={class:"search border-bottom"},jP=wc(()=>V("input",{type:"text",placeholder:"Search"},null,-1)),WP={class:"cart"},GP=wc(()=>V("span",null,null,-1));function KP(t,e,a,n,r,i){const c=Q2("router-link"),s=Q2("fa");return P2(),$2("div",_P,[AP,V("div",EP,[V("div",kP,[V("div",TP,[V("ul",IP,[V("li",null,[_1(c,{to:"/",class:"text-gray-900 dark:text-white uppercase","aria-current":"page"},{default:w2(()=>[PP]),_:1})]),V("li",null,[_1(c,{to:"/men",class:"text-gray-900 dark:text-white uppercase"},{default:w2(()=>[DP]),_:1})]),V("li",null,[_1(c,{to:"/women",class:"text-gray-900 dark:text-white uppercase"},{default:w2(()=>[RP]),_:1})]),V("li",null,[_1(c,{to:"/unisex",class:"text-gray-900 dark:text-white uppercase"},{default:w2(()=>[OP]),_:1})]),V("li",null,[_1(c,{to:"/about",class:"text-gray-900 dark:text-white uppercase"},{default:w2(()=>[BP]),_:1})]),V("li",null,[_1(c,{to:"/contact",class:"text-gray-900 dark:text-white uppercase"},{default:w2(()=>[FP]),_:1})]),V("li",null,[_1(c,{to:"/blog",class:"text-gray-900 dark:text-white uppercase"},{default:w2(()=>[UP]),_:1})])])])])]),V("div",$P,[V("div",qP,[_1(s,{icon:"search",class:"me-1"}),jP])]),V("div",WP,[_1(s,{icon:"cart-shopping",class:"mt-2 mx-3"}),GP])])}const Cm=j5(NP,[["render",KP],["__scopeId","data-v-742b7dc9"]]);const YP={name:"WelcomeNav",props:["user","signoutHandler","title"],setup(){}},fm=t=>(oi("data-v-20590a64"),t=t(),li(),t),XP={class:"navbar navbar-expand-lg bg-light"},QP={class:"container-fluid"},JP=n2("SHOES "),ZP=fm(()=>V("span",{class:"italic lowercase"},"Athletic",-1)),eD=fm(()=>V("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[V("span",{class:"navbar-toggler-icon"})],-1)),tD={key:0,class:"collapse navbar-collapse",id:"navbarSupportedContent"},aD={class:"btn-group dropstart ms-auto"},nD={type:"button",class:"btn btn-light dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown","aria-expanded":"false"},rD={type:"button",class:"btn btn-light dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown","aria-expanded":"false"},iD={class:"dropdown-menu"},cD={key:1,class:"nav-right collapse navbar-collapse",id:"navbarSupportedContent"},sD={class:"ms-auto"},oD=n2(" Signup "),lD=n2(" | "),CD=n2("Login");function fD(t,e,a,n,r,i){const c=Q2("router-link"),s=Q2("fa");return P2(),$2("nav",XP,[V("div",QP,[_1(c,{class:"uppercase font-bold text-3xl font-serif text-blue-500",to:"/"},{default:w2(()=>[JP,ZP]),_:1}),eD,a.user?(P2(),$2("div",tD,[V("div",aD,[V("button",nD,[V("span",null,On(a.title)+", "+On(a.user),1)]),V("button",rD,[_1(s,{icon:"user"}),V("ul",iD,[V("li",null,[V("button",{onClick:e[0]||(e[0]=(...o)=>a.signoutHandler&&a.signoutHandler(...o)),class:"dropdown-item"}," Sign out ")])])])])])):(P2(),$2("div",cD,[V("div",sD,[_1(c,{to:"/register","aria-expanded":"false"},{default:w2(()=>[oD]),_:1}),lD,_1(c,{to:"/login"},{default:w2(()=>[CD]),_:1})])]))])])}const um=j5(YP,[["render",fD],["__scopeId","data-v-20590a64"]]),uD={name:"FooterView"},hD={class:"text-center lg:text-left bg-gray-100 text-gray-600"},dD=V("div",{class:"flex justify-center items-center lg:justify-between p-6 border-b border-gray-300"},[V("div",{class:"mr-12 hidden lg:block"},[V("span",null,"Get connected with us on social networks:")]),V("div",{class:"flex justify-center"},[V("a",{href:"#!",class:"mr-6 text-gray-600"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",class:"w-2.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[V("path",{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})])]),V("a",{href:"#!",class:"mr-6 text-gray-600"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",class:"w-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[V("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})])]),V("a",{href:"#!",class:"mr-6 text-gray-600"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"google",class:"w-3.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512"},[V("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})])]),V("a",{href:"#!",class:"mr-6 text-gray-600"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",class:"w-3.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[V("path",{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})])]),V("a",{href:"#!",class:"mr-6 text-gray-600"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",class:"w-3.5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[V("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})])]),V("a",{href:"#!",class:"text-gray-600"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",class:"w-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},[V("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})])])])],-1),mD=V("div",{class:"mx-6 py-10 text-center md:text-left"},[V("div",{class:"grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},[V("div",{class:""},[V("h6",{class:"uppercase font-semibold mb-4 flex items-center justify-center md:justify-start"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"cubes",class:"w-4 mr-3",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[V("path",{fill:"currentColor",d:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"})]),n2(" Tailwind ELEMENTS ")]),V("p",null," Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")]),V("div",{class:""},[V("h6",{class:"uppercase font-semibold mb-4 flex justify-center md:justify-start"}," Products "),V("p",{class:"mb-4"},[V("a",{href:"#!",class:"text-gray-600"},"Angular")]),V("p",{class:"mb-4"},[V("a",{href:"#!",class:"text-gray-600"},"React")]),V("p",{class:"mb-4"},[V("a",{href:"#!",class:"text-gray-600"},"Vue")]),V("p",null,[V("a",{href:"#!",class:"text-gray-600"},"Laravel")])]),V("div",{class:""},[V("h6",{class:"uppercase font-semibold mb-4 flex justify-center md:justify-start"}," Useful links "),V("p",{class:"mb-4"},[V("a",{href:"#!",class:"text-gray-600"},"Pricing")]),V("p",{class:"mb-4"},[V("a",{href:"#!",class:"text-gray-600"},"Settings")]),V("p",{class:"mb-4"},[V("a",{href:"#!",class:"text-gray-600"},"Orders")]),V("p",null,[V("a",{href:"#!",class:"text-gray-600"},"Help")])]),V("div",{class:""},[V("h6",{class:"uppercase font-semibold mb-4 flex justify-center md:justify-start"}," Contact "),V("p",{class:"flex items-center justify-center md:justify-start mb-4"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"home",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})]),n2(" New York, NY 10012, US ")]),V("p",{class:"flex items-center justify-center md:justify-start mb-4"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"envelope",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[V("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})]),n2(" info@example.com ")]),V("p",{class:"flex items-center justify-center md:justify-start mb-4"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"phone",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[V("path",{fill:"currentColor",d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"})]),n2(" + 01 234 567 88 ")]),V("p",{class:"flex items-center justify-center md:justify-start"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"print",class:"w-4 mr-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[V("path",{fill:"currentColor",d:"M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"})]),n2(" + 01 234 567 89 ")])])])],-1),pD=V("div",{class:"text-center p-6 bg-gray-200"},[V("span",null,"\xA9 2021 Copyright:"),V("a",{class:"text-gray-600 font-semibold",href:"https://tailwind-elements.com/"},"Tailwind Elements")],-1),vD=[dD,mD,pD];function gD(t,e,a,n,r,i){return P2(),$2("footer",hD,vD)}const LD=j5(uD,[["render",gD]]),zD={name:"ReusableNav",components:{AdminNav:lm,CustomerNavVue:Cm,WelcomeNav:um}},MD={key:0},HD={key:1};function VD(t,e,a,n,r,i){const c=Q2("WelcomeNav"),s=Q2("AdminNav"),o=Q2("CustomerNavVue");return P2(),$2(u3,null,[_1(c,{title:t.getId==="7W29HGeCdfPpqASfWeHlZkOY9t63"?"Admin":"Hi",user:t.userName,signoutHandler:t.signoutHandler},null,8,["title","user","signoutHandler"]),t.isShow&&t.getId==="7W29HGeCdfPpqASfWeHlZkOY9t63"?(P2(),$2("div",MD,[_1(s,{user:t.userName,signoutHandler:t.signoutHandler},null,8,["user","signoutHandler"])])):t.getId!=="7W29HGeCdfPpqASfWeHlZkOY9t63"?(P2(),$2("div",HD,[_1(o,{user:t.userName,signoutHandler:t.signoutHandler},null,8,["user","signoutHandler"])])):Wf("",!0)],64)}const bD=j5(zD,[["render",VD]]);const yD={name:"App",components:{AdminNav:lm,CustomerNavVue:Cm,WelcomeNav:um,FooterView:LD,ReusableNav:bD},setup(){const t=e4(""),e=e4(!1),a=Zo(),n=e4(null),r=Zx();return Ci(()=>{oI(b9,i=>{if(!i)console.log("there is no user"),a.replace("/login");else if(i&&r.path=="/login"||i&&r.path=="/register")a.replace("/"),e.value=!0;else if(i&&n.value==="7W29HGeCdfPpqASfWeHlZkOY9t63")e.value=!0,a.replace("/admin"),t.value=i.email.split("@")[0];else if(r.path=="/admin"&&i.uid!="7W29HGeCdfPpqASfWeHlZkOY9t63"||r.path=="/add"&&i.uid!="7W29HGeCdfPpqASfWeHlZkOY9t63")a.replace("/");else{console.log("there is a user"),e.value=!0;const c=b9.currentUser;console.log(c),console.log(c.uid),n.value=c.uid,t.value=c.email.split("@")[0]}})}),{isShow:e,userName:t,getId:n}},methods:{signoutHandler(){const t=Zo();lI(b9).then(()=>{this.$swal({position:"top-end",icon:"success",title:"Logged out successfully",showConfirmButton:!1,timer:1500}),setTimeout(()=>{window.location.reload()},1500),t.replace("/login")}).catch(e=>console.log(e.message))}}},wD={key:0},SD={key:1};function xD(t,e,a,n,r,i){const c=Q2("WelcomeNav"),s=Q2("AdminNav"),o=Q2("CustomerNavVue"),u=Q2("router-view"),h=Q2("FooterView");return P2(),$2(u3,null,[_1(c,{title:n.getId==="7W29HGeCdfPpqASfWeHlZkOY9t63"?"Admin":"Hi",user:n.userName,signoutHandler:i.signoutHandler},null,8,["title","user","signoutHandler"]),n.isShow&&n.getId==="7W29HGeCdfPpqASfWeHlZkOY9t63"?(P2(),$2("div",wD,[_1(s,{user:n.userName,signoutHandler:i.signoutHandler},null,8,["user","signoutHandler"])])):n.getId!=="7W29HGeCdfPpqASfWeHlZkOY9t63"?(P2(),$2("div",SD,[_1(o,{user:n.userName,signoutHandler:i.signoutHandler},null,8,["user","signoutHandler"])])):Wf("",!0),_1(u),_1(h)],64)}const ND=j5(yD,[["render",xD]]),_D="modulepreload",AD=function(t){return"/"+t},pC={},f3=function(e,a,n){return!a||a.length===0?e():Promise.all(a.map(r=>{if(r=AD(r),r in pC)return;pC[r]=!0;const i=r.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":_D,i||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),i)return new Promise((o,u)=>{s.addEventListener("load",o),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const ED={name:"TheHomePage",components:{},setup(){const t=e4(""),e=e4([]),a=e4([]),n=e4([]),r=e4([]);return Ci(()=>{let c=b9.currentUser;c&&(t.value=c.email.split("@")[0])}),Ef(()=>{yT(mC,c=>{const s=[];c.forEach(o=>{const u={id:o.id,category:o.data().category,description:o.data().description,gender:o.data().gender,imageUrl:o.data().imageUrl,name:o.data().name,price:o.data().price,size:o.data().size};s.push(u)}),e.value=s.filter((o,u)=>o.gender==="Male"&&Math.ceil(u*Math.random()<<0)).slice(0,1),a.value=s.filter((o,u)=>o.gender==="Female"&&Math.ceil(u*Math.random()<<0)).slice(0,1),n.value=s.filter((o,u)=>o.gender==="Unisex"&&Math.ceil(u*Math.random()<<0)).slice(0,1),r.value=s.filter((o,u)=>Math.floor(Math.random()*Math.floor(Math.random()*u))).slice(0,1)}),fetch("https://www.healthcare.gov/:post-title.json").then(c=>console.log(c.data))}),{name:t,menShoe:e,womenShoe:a,uniSexShoe:n,deleteHandler:async c=>{try{let s=vd(mC,c);await bT(s),alert("shoe deleted")}catch(s){console.log(s)}},trendingShoe:r}}},N3=t=>(oi("data-v-533a453b"),t=t(),li(),t),kD={class:"bg-gray-200 font-sans leading-normal tracking-normal"},TD=hi('<div class="w-full m-0 p-0 bg-cover bg-bottom object-cover" style="background-image:url(&#39;https://cdn.shopify.com/s/files/1/0276/9879/0535/files/Hero-2_7b518bd5-fc42-4b95-8726-19ea0c91d066_2048x2048.jpg?v=1585570565&#39;);height:60vh;max-height:450px;background-position:center;background-repeat:no-repeat;background-size:cover;" data-v-533a453b><div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal block" data-v-533a453b><p class="text-xl md:text-xl text-blue-700 font-bold" data-v-533a453b>Limited Time Offer, Online Purchase Only!</p><p class="text-blue-700 font-extrabold text-3xl md:text-5xl uppercase italic" data-v-533a453b> Shoes Unlimited Offer </p><p class="text-xl md:text-2xl text-blue-700 font-bold" data-v-533a453b>Take 20% Off &#39;Sale Must Haves&#39;</p><button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full" data-v-533a453b>Buy Now!</button></div></div>',1),ID={class:"container px-4 md:px-0 max-w-6xl mx-auto -mt-32"},PD={class:"mx-0 sm:mx-6"},DD=N3(()=>V("nav",{class:"mt-0 w-full"},[V("div",{class:"container mx-auto flex items-center"},[V("div",{class:"mb-5 flex w-1/2 justify-end content-center"})])],-1)),RD={class:"bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t"},OD={class:"w-full md:w-2/3 rounded-t"},BD=["src"],FD={class:"w-full md:w-1/3 flex flex-col flex-grow flex-shrink"},UD={class:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"},$D=N3(()=>V("div",{class:"mt-3 w-full font-bold text-xl text-blue-700 px-6 uppercase"},"Trending",-1)),qD={class:"w-full mt-2 text-gray-800 font-serif text-base px-6 mb-5"},jD=N3(()=>V("p",{class:"w-100 text-gray-800 font-serif text-base px-6 mb-5"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nemo natus quis sunt ducimus suscipit eius corporis nulla, nostrum perspiciatis explicabo perferendis, dolore magnam? Incidunt ex fuga soluta eligendi veniam. ",-1)),WD=N3(()=>V("div",{class:"flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"},[V("div",{class:"flex items-center justify-between"},[V("img",{class:"w-8 h-8 rounded-full mr-4 avatar","data-tippy-content":"Author Name",src:"http://i.pravatar.cc/300",alt:"Avatar of Author"}),V("p",{class:"text-gray-600 text-xs md:text-sm"},"1 MIN READ")])],-1)),GD={class:"flex flex-wrap justify-between pt-12 -mx-6"},KD={class:"h-50 w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},YD={class:"card-container flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"},XD=N3(()=>V("img",{src:"https://images.unsplash.com/photo-1582274528667-1e8a10ded835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",class:"h-64 w-full rounded-t"},null,-1)),QD=N3(()=>V("p",{class:"gender-card w-full text-gray-600 text-xs md:text-sm px-6"},"Men",-1)),JD={class:"h-50 w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},ZD={class:"card-container flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"},eR=N3(()=>V("img",{src:"https://images.unsplash.com/photo-1616847220575-31b062a4cd05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",class:"h-64 w-full rounded-t"},null,-1)),tR=N3(()=>V("p",{class:"gender-card w-full text-gray-600 text-xs md:text-sm px-6"},"Women",-1)),aR={class:"w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},nR={class:"card-container flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"},rR=N3(()=>V("img",{src:"https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",class:"h-64 w-full rounded-t"},null,-1)),iR=N3(()=>V("p",{class:"gender-card w-full text-gray-600 text-xs md:text-sm px-6"},"Unisex",-1)),cR=hi('<div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink" data-v-533a453b><div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg" data-v-533a453b><a href="#" class="flex flex-wrap no-underline hover:no-underline" data-v-533a453b><img src="https://source.unsplash.com/collection/3657445/800x600" class="h-full w-full rounded-t pb-6" data-v-533a453b><p class="w-full text-gray-600 text-xs md:text-sm px-6" data-v-533a453b>GETTING STARTED</p><div class="w-full font-bold text-xl text-gray-900 px-6" data-v-533a453b>Lorem ipsum dolor sit amet.</div><p class="text-gray-800 font-serif text-base px-6 mb-5" data-v-533a453b> Lorem ipsum eu nunc commodo posuere et sit amet ligula. </p></a></div><div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6" data-v-533a453b><div class="flex items-center justify-between" data-v-533a453b><img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" data-v-533a453b><p class="text-gray-600 text-xs md:text-sm" data-v-533a453b>1 MIN READ</p></div></div></div><div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink" data-v-533a453b><div class="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg" data-v-533a453b><a href="#" class="flex flex-wrap no-underline hover:no-underline" data-v-533a453b><img src="https://source.unsplash.com/collection/764827/800x600" class="h-full w-full rounded-t pb-6" data-v-533a453b><p class="w-full text-gray-600 text-xs md:text-sm px-6" data-v-533a453b>GETTING STARTED</p><div class="w-full font-bold text-xl text-gray-900 px-6" data-v-533a453b>Lorem ipsum dolor sit amet.</div><p class="text-gray-800 font-serif text-base px-6 mb-5" data-v-533a453b> Lorem ipsum eu nunc commodo posuere et sit amet ligula. </p></a></div><div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6" data-v-533a453b><div class="flex items-center justify-between" data-v-533a453b><img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" data-v-533a453b><p class="text-gray-600 text-xs md:text-sm" data-v-533a453b>1 MIN READ</p></div></div></div>',2),sR=N3(()=>V("section",{class:"mt-12 mb-20 text-gray-700"},[V("div",{class:"text-center md:max-w-xl lg:max-w-3xl mx-auto"},[V("h3",{class:"text-3xl font-bold mb-6 text-blue-800 uppercase"},"Testimonials"),V("p",{class:"mb-6 pb-2 md:mb-12 md:pb-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam. ")]),V("div",{class:"grid md:grid-cols-3 gap-6 lg:gap-12 text-center"},[V("div",{class:"mb-12 md:mb-0"},[V("div",{class:"flex justify-center mb-6"},[V("img",{src:"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",class:"rounded-full shadow-lg w-32"})]),V("h5",{class:"text-xl font-semibold mb-4"},"Maria Smantha"),V("h6",{class:"font-semibold text-blue-600 mb-4"},"Web Developer"),V("p",{class:"mb-4"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[V("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),n2(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur. ")]),V("ul",{class:"flex justify-center mb-0"},[V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star-half-alt",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 536 512"},[V("path",{fill:"currentColor",d:"M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"})])])])]),V("div",{class:"mb-12 md:mb-0"},[V("div",{class:"flex justify-center mb-6"},[V("img",{src:"https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg",class:"rounded-full shadow-lg w-32"})]),V("h5",{class:"text-xl font-semibold mb-4"},"Lisa Cudrow"),V("h6",{class:"font-semibold text-blue-600 mb-4"},"Graphic Designer"),V("p",{class:"mb-4"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[V("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),n2("Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi. ")]),V("ul",{class:"flex justify-center mb-0"},[V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])])])]),V("div",{class:"mb-0"},[V("div",{class:"flex justify-center mb-6"},[V("img",{src:"https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg",class:"rounded-full shadow-lg w-32"})]),V("h5",{class:"text-xl font-semibold mb-4"},"John Smith"),V("h6",{class:"font-semibold text-blue-600 mb-4"},"Marketing Specialist"),V("p",{class:"mb-4"},[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"quote-left",class:"w-6 pr-2 inline-block",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[V("path",{fill:"currentColor",d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"})]),n2("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti. ")]),V("ul",{class:"flex justify-center mb-0"},[V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})])]),V("li",null,[V("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"star",class:"w-4 text-yellow-500",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[V("path",{fill:"currentColor",d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"})])])])])])],-1)),oR=hi('<div class="container my-24 px-6 mx-auto border-t-2 border-gray-400" data-v-533a453b><section class="mb-32 text-gray-800 text-center lg:text-left mt-5" data-v-533a453b><div class="flex flex-wrap justify-center" data-v-533a453b><div class="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3" data-v-533a453b><div class="grid lg:grid-cols-2 gap-x-6 items-center" data-v-533a453b><div class="mb-10 lg:mb-0" data-v-533a453b><h2 class="text-3xl font-bold" data-v-533a453b> Do not miss any updates. <br data-v-533a453b><span class="text-blue-600" data-v-533a453b>Subscribe to the newsletter</span></h2></div><div class="mb-6 md:mb-0" data-v-533a453b><div class="md:flex flex-row" data-v-533a453b><input type="text" class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter your email" data-v-533a453b><button type="submit" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" data-v-533a453b> Subscribe </button></div></div></div></div></div></section></div>',1);function lR(t,e,a,n,r,i){const c=Q2("router-link");return P2(),$2("body",kD,[TD,V("div",ID,[V("div",PD,[DD,V("div",RD,[(P2(!0),$2(u3,null,jw(n.trendingShoe,s=>(P2(),$2("div",{key:s.id,class:"flex h-full bg-white rounded overflow-hidden shadow-lg"},[_1(c,{to:{path:`/shoe/${s.id}`},class:"flex flex-wrap no-underline hover:no-underline"},{default:w2(()=>[V("div",OD,[V("img",{style:{height:"500px",width:"100%"},src:s.imageUrl,class:"h-full w-full shadow"},null,8,BD)]),V("div",FD,[V("div",UD,[$D,V("p",qD,On(s.name),1),jD]),WD])]),_:2},1032,["to"])]))),128)),V("div",GD,[V("div",KD,[V("div",YD,[_1(c,{to:"/men",class:"flex flex-wrap no-underline hover:no-underline"},{default:w2(()=>[XD,QD]),_:1})])]),V("div",JD,[V("div",ZD,[_1(c,{to:"/women",class:"flex flex-wrap no-underline hover:no-underline"},{default:w2(()=>[eR,tR]),_:1})])]),V("div",aR,[V("div",nR,[_1(c,{to:"/unisex",class:"flex flex-wrap no-underline hover:no-underline"},{default:w2(()=>[rR,iR]),_:1})])]),cR,sR])]),oR])])])}const CR=j5(ED,[["render",lR],["__scopeId","data-v-533a453b"]]),fR=[{path:"/",name:"TheHomePage",component:CR},{path:"/about",name:"TheTeamPage",component:()=>f3(()=>import("./TheTeamPage.5e7b46d5.js"),["assets/TheTeamPage.5e7b46d5.js","assets/TheTeamPage.33718cd8.css"])},{path:"/login",name:"MyLoginPage",component:()=>f3(()=>import("./MyLoginPage.3412532f.js"),["assets/MyLoginPage.3412532f.js","assets/MyLoginPage.51156f63.css","assets/brandlogo.8a9cdd62.js"])},{path:"/register",name:"MyRegisterPage",component:()=>f3(()=>import("./MyRegisterPage.e76ff038.js"),["assets/MyRegisterPage.e76ff038.js","assets/MyRegisterPage.f7054103.css","assets/brandlogo.8a9cdd62.js"])},{path:"/men",name:"TheMenPage",component:()=>f3(()=>import("./TheMenPage.79ce29be.js"),["assets/TheMenPage.79ce29be.js","assets/TheMenPage.43b6cdcb.css","assets/MenNav.354fbecc.js","assets/MenNav.b78cd1eb.css"])},{path:"/women",name:"TheWomenPage",component:()=>f3(()=>import("./TheWomenPage.7ca829b0.js"),["assets/TheWomenPage.7ca829b0.js","assets/TheWomenPage.56922114.css","assets/MenNav.354fbecc.js","assets/MenNav.b78cd1eb.css"])},{path:"/unisex",name:"TheUnisexPage",component:()=>f3(()=>import("./TheUnisexPage.df70d4a0.js"),["assets/TheUnisexPage.df70d4a0.js","assets/TheUnisexPage.e2b9b6a7.css","assets/MenNav.354fbecc.js","assets/MenNav.b78cd1eb.css"])},{path:"/add",name:"AdminAdd",component:()=>f3(()=>import("./AdminAdd.b642f9bb.js"),["assets/AdminAdd.b642f9bb.js","assets/AdminAdd.39b8b1f1.css"])},{path:"/contact",name:"TheContactPage",component:()=>f3(()=>import("./TheContactPage.3f471c69.js"),[])},{name:"PageNotFound",path:"/:pathMatch(.*)*",component:()=>f3(()=>import("./PageNotFound.929dc8a6.js"),[])},{path:"/shoe/:id",name:"AdminShoeById",component:()=>f3(()=>import("./AdminShoeById.17e3d1db.js"),["assets/AdminShoeById.17e3d1db.js","assets/AdminShoeById.b887c30d.css"])},{path:"/edit/:id",name:"AdminEdit",component:()=>f3(()=>import("./AdminEdit.56fe38bb.js"),["assets/AdminEdit.56fe38bb.js","assets/AdminEdit.c43673fa.css"])},{path:"/admin",name:"AdminView",component:()=>f3(()=>import("./AdminView.0afeaf9c.js"),["assets/AdminView.0afeaf9c.js","assets/AdminView.07beb060.css"])}],uR=Qx({history:ux(),routes:fR});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function vC(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function a1(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?vC(Object(a),!0).forEach(function(n){mR(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):vC(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function re(t){return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(t)}function hR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gC(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function dR(t,e,a){return e&&gC(t.prototype,e),a&&gC(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function mR(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Sc(t,e){return vR(t)||LR(t,e)||hm(t,e)||MR()}function Ze(t){return pR(t)||gR(t)||hm(t)||zR()}function pR(t){if(Array.isArray(t))return Er(t)}function vR(t){if(Array.isArray(t))return t}function gR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function LR(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n=[],r=!0,i=!1,c,s;try{for(a=a.call(t);!(r=(c=a.next()).done)&&(n.push(c.value),!(e&&n.length===e));r=!0);}catch(o){i=!0,s=o}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return n}}function hm(t,e){if(!!t){if(typeof t=="string")return Er(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Er(t,e)}}function Er(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function zR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var LC=function(){},xc={},dm={},mm=null,pm={mark:LC,measure:LC};try{typeof window<"u"&&(xc=window),typeof document<"u"&&(dm=document),typeof MutationObserver<"u"&&(mm=MutationObserver),typeof performance<"u"&&(pm=performance)}catch{}var HR=xc.navigator||{},zC=HR.userAgent,MC=zC===void 0?"":zC,Z4=xc,J1=dm,HC=mm,s9=pm;Z4.document;var p4=!!J1.documentElement&&!!J1.head&&typeof J1.addEventListener=="function"&&typeof J1.createElement=="function",vm=~MC.indexOf("MSIE")||~MC.indexOf("Trident/"),f4="___FONT_AWESOME___",kr=16,gm="fa",Lm="svg-inline--fa",R5="data-fa-i2svg",Tr="data-fa-pseudo-element",VR="data-fa-pseudo-element-pending",Nc="data-prefix",_c="data-icon",VC="fontawesome-i2svg",bR="async",yR=["HTML","HEAD","STYLE","SCRIPT"],zm=function(){try{return!0}catch{return!1}}(),Ac={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ie={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Mm={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},wR={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},SR=/fa[srltdbk]?[\-\ ]/,Hm="fa-layers-text",xR=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,NR={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Vm=[1,2,3,4,5,6,7,8,9,10],_R=Vm.concat([11,12,13,14,15,16,17,18,19,20]),AR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],M5={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ER=[].concat(Ze(Object.keys(ie)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",M5.GROUP,M5.SWAP_OPACITY,M5.PRIMARY,M5.SECONDARY]).concat(Vm.map(function(t){return"".concat(t,"x")})).concat(_R.map(function(t){return"w-".concat(t)})),bm=Z4.FontAwesomeConfig||{};function kR(t){var e=J1.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function TR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(J1&&typeof J1.querySelector=="function"){var IR=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];IR.forEach(function(t){var e=Sc(t,2),a=e[0],n=e[1],r=TR(kR(a));r!=null&&(bm[n]=r)})}var PR={familyPrefix:gm,styleDefault:"solid",replacementClass:Lm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Y8=a1(a1({},PR),bm);Y8.autoReplaceSvg||(Y8.observeMutations=!1);var f1={};Object.keys(Y8).forEach(function(t){Object.defineProperty(f1,t,{enumerable:!0,set:function(a){Y8[t]=a,y9.forEach(function(n){return n(f1)})},get:function(){return Y8[t]}})});Z4.FontAwesomeConfig=f1;var y9=[];function DR(t){return y9.push(t),function(){y9.splice(y9.indexOf(t),1)}}var E4=kr,R3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function RR(t){if(!(!t||!p4)){var e=J1.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=J1.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],c=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(n=i)}return J1.head.insertBefore(e,n),t}}var OR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b0(){for(var t=12,e="";t-- >0;)e+=OR[Math.random()*62|0];return e}function a8(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function Ec(t){return t.classList?a8(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ym(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function BR(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(ym(t[a]),'" ')},"").trim()}function et(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function kc(t){return t.size!==R3.size||t.x!==R3.x||t.y!==R3.y||t.rotate!==R3.rotate||t.flipX||t.flipY}function FR(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(i," ").concat(c," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:o,path:u}}function UR(t){var e=t.transform,a=t.width,n=a===void 0?kr:a,r=t.height,i=r===void 0?kr:r,c=t.startCentered,s=c===void 0?!1:c,o="";return s&&vm?o+="translate(".concat(e.x/E4-n/2,"em, ").concat(e.y/E4-i/2,"em) "):s?o+="translate(calc(-50% + ".concat(e.x/E4,"em), calc(-50% + ").concat(e.y/E4,"em)) "):o+="translate(".concat(e.x/E4,"em, ").concat(e.y/E4,"em) "),o+="scale(".concat(e.size/E4*(e.flipX?-1:1),", ").concat(e.size/E4*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var $R=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wm(){var t=gm,e=Lm,a=f1.familyPrefix,n=f1.replacementClass,r=$R;if(a!==t||n!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),c=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(a,"-")).replace(c,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var bC=!1;function In(){f1.autoAddCss&&!bC&&(RR(wm()),bC=!0)}var qR={mixout:function(){return{dom:{css:wm,insertCss:In}}},hooks:function(){return{beforeDOMElementCreation:function(){In()},beforeI2svg:function(){In()}}}},u4=Z4||{};u4[f4]||(u4[f4]={});u4[f4].styles||(u4[f4].styles={});u4[f4].hooks||(u4[f4].hooks={});u4[f4].shims||(u4[f4].shims=[]);var V3=u4[f4],Sm=[],jR=function t(){J1.removeEventListener("DOMContentLoaded",t),ce=1,Sm.map(function(e){return e()})},ce=!1;p4&&(ce=(J1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J1.readyState),ce||J1.addEventListener("DOMContentLoaded",jR));function WR(t){!p4||(ce?setTimeout(t,0):Sm.push(t))}function Z0(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ym(t):"<".concat(e," ").concat(BR(n),">").concat(i.map(Z0).join(""),"</").concat(e,">")}function yC(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var GR=function(e,a){return function(n,r,i,c){return e.call(a,n,r,i,c)}},Pn=function(e,a,n,r){var i=Object.keys(e),c=i.length,s=r!==void 0?GR(a,r):a,o,u,h;for(n===void 0?(o=1,h=e[i[0]]):(o=0,h=n);o<c;o++)u=i[o],h=s(h,e[u],u,e);return h};function KR(t){for(var e=[],a=0,n=t.length;a<n;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var i=t.charCodeAt(a++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),a--)}else e.push(r)}return e}function Ir(t){var e=KR(t);return e.length===1?e[0].toString(16):null}function YR(t,e){var a=t.length,n=t.charCodeAt(e),r;return n>=55296&&n<=56319&&a>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function wC(t){return Object.keys(t).reduce(function(e,a){var n=t[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function Pr(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=wC(e);typeof V3.hooks.addPack=="function"&&!r?V3.hooks.addPack(t,wC(e)):V3.styles[t]=a1(a1({},V3.styles[t]||{}),i),t==="fas"&&Pr("fa",e)}var X8=V3.styles,XR=V3.shims,QR=Object.values(Mm),Tc=null,xm={},Nm={},_m={},Am={},Em={},JR=Object.keys(Ac);function ZR(t){return~ER.indexOf(t)}function eO(t,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===t&&r!==""&&!ZR(r)?r:null}var km=function(){var e=function(i){return Pn(X8,function(c,s,o){return c[o]=Pn(s,i,{}),c},{})};xm=e(function(r,i,c){if(i[3]&&(r[i[3]]=c),i[2]){var s=i[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){r[o.toString(16)]=c})}return r}),Nm=e(function(r,i,c){if(r[c]=c,i[2]){var s=i[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){r[o]=c})}return r}),Em=e(function(r,i,c){var s=i[2];return r[c]=c,s.forEach(function(o){r[o]=c}),r});var a="far"in X8||f1.autoFetchSvg,n=Pn(XR,function(r,i){var c=i[0],s=i[1],o=i[2];return s==="far"&&!a&&(s="fas"),typeof c=="string"&&(r.names[c]={prefix:s,iconName:o}),typeof c=="number"&&(r.unicodes[c.toString(16)]={prefix:s,iconName:o}),r},{names:{},unicodes:{}});_m=n.names,Am=n.unicodes,Tc=tt(f1.styleDefault)};DR(function(t){Tc=tt(t.styleDefault)});km();function Ic(t,e){return(xm[t]||{})[e]}function tO(t,e){return(Nm[t]||{})[e]}function h6(t,e){return(Em[t]||{})[e]}function Tm(t){return _m[t]||{prefix:null,iconName:null}}function aO(t){var e=Am[t],a=Ic("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function e5(){return Tc}var Pc=function(){return{prefix:null,iconName:null,rest:[]}};function tt(t){var e=Ac[t],a=ie[t]||ie[e],n=t in V3.styles?t:null;return a||n||null}function at(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,n=a===void 0?!1:a,r=null,i=t.reduce(function(c,s){var o=eO(f1.familyPrefix,s);if(X8[s]?(s=QR.includes(s)?wR[s]:s,r=s,c.prefix=s):JR.indexOf(s)>-1?(r=s,c.prefix=tt(s)):o?c.iconName=o:s!==f1.replacementClass&&c.rest.push(s),!n&&c.prefix&&c.iconName){var u=r==="fa"?Tm(c.iconName):{},h=h6(c.prefix,c.iconName);u.prefix&&(r=null),c.iconName=u.iconName||h||c.iconName,c.prefix=u.prefix||c.prefix,c.prefix==="far"&&!X8.far&&X8.fas&&!f1.autoFetchSvg&&(c.prefix="fas")}return c},Pc());return(i.prefix==="fa"||r==="fa")&&(i.prefix=e5()||"fas"),i}var nO=function(){function t(){hR(this,t),this.definitions={}}return dR(t,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var c=r.reduce(this._pullDefinitions,{});Object.keys(c).forEach(function(s){a.definitions[s]=a1(a1({},a.definitions[s]||{}),c[s]),Pr(s,c[s]);var o=Mm[s];o&&Pr(o,c[s]),km()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var c=r[i],s=c.prefix,o=c.iconName,u=c.icon,h=u[2];a[s]||(a[s]={}),h.length>0&&h.forEach(function(p){typeof p=="string"&&(a[s][p]=u)}),a[s][o]=u}),a}}]),t}(),SC=[],d6={},V6={},rO=Object.keys(V6);function iO(t,e){var a=e.mixoutsTo;return SC=t,d6={},Object.keys(V6).forEach(function(n){rO.indexOf(n)===-1&&delete V6[n]}),SC.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(c){typeof r[c]=="function"&&(a[c]=r[c]),re(r[c])==="object"&&Object.keys(r[c]).forEach(function(s){a[c]||(a[c]={}),a[c][s]=r[c][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(c){d6[c]||(d6[c]=[]),d6[c].push(i[c])})}n.provides&&n.provides(V6)}),a}function Dr(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=d6[t]||[];return i.forEach(function(c){e=c.apply(null,[e].concat(n))}),e}function O5(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=d6[t]||[];r.forEach(function(i){i.apply(null,a)})}function h4(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return V6[t]?V6[t].apply(null,e):void 0}function Rr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||e5();if(!!e)return e=h6(a,e)||e,yC(Im.definitions,a,e)||yC(V3.styles,a,e)}var Im=new nO,cO=function(){f1.autoReplaceSvg=!1,f1.observeMutations=!1,O5("noAuto")},sO={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return p4?(O5("beforeI2svg",e),h4("pseudoElements2svg",e),h4("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;f1.autoReplaceSvg===!1&&(f1.autoReplaceSvg=!0),f1.observeMutations=!0,WR(function(){lO({autoReplaceSvgRoot:a}),O5("watch",e)})}},oO={icon:function(e){if(e===null)return null;if(re(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:h6(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=tt(e[0]);return{prefix:n,iconName:h6(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(f1.familyPrefix,"-"))>-1||e.match(SR))){var r=at(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||e5(),iconName:h6(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=e5();return{prefix:i,iconName:h6(i,e)||e}}}},l3={noAuto:cO,config:f1,dom:sO,parse:oO,library:Im,findIconDefinition:Rr,toHtml:Z0},lO=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?J1:a;(Object.keys(V3.styles).length>0||f1.autoFetchSvg)&&p4&&f1.autoReplaceSvg&&l3.dom.i2svg({node:n})};function nt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return Z0(n)})}}),Object.defineProperty(t,"node",{get:function(){if(!!p4){var n=J1.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function CO(t){var e=t.children,a=t.main,n=t.mask,r=t.attributes,i=t.styles,c=t.transform;if(kc(c)&&a.found&&!n.found){var s=a.width,o=a.height,u={x:s/o/2,y:.5};r.style=et(a1(a1({},i),{},{"transform-origin":"".concat(u.x+c.x/16,"em ").concat(u.y+c.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function fO(t){var e=t.prefix,a=t.iconName,n=t.children,r=t.attributes,i=t.symbol,c=i===!0?"".concat(e,"-").concat(f1.familyPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:a1(a1({},r),{},{id:c}),children:n}]}]}function Dc(t){var e=t.icons,a=e.main,n=e.mask,r=t.prefix,i=t.iconName,c=t.transform,s=t.symbol,o=t.title,u=t.maskId,h=t.titleId,p=t.extra,v=t.watchable,L=v===void 0?!1:v,w=n.found?n:a,E=w.width,x=w.height,y=r==="fak",A=[f1.replacementClass,i?"".concat(f1.familyPrefix,"-").concat(i):""].filter(function(C1){return p.classes.indexOf(C1)===-1}).filter(function(C1){return C1!==""||!!C1}).concat(p.classes).join(" "),B={children:[],attributes:a1(a1({},p.attributes),{},{"data-prefix":r,"data-icon":i,class:A,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(x)})},F=y&&!~p.classes.indexOf("fa-fw")?{width:"".concat(E/x*16*.0625,"em")}:{};L&&(B.attributes[R5]=""),o&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(h||b0())},children:[o]}),delete B.attributes.title);var Q=a1(a1({},B),{},{prefix:r,iconName:i,main:a,mask:n,maskId:u,transform:c,symbol:s,styles:a1(a1({},F),p.styles)}),r1=n.found&&a.found?h4("generateAbstractMask",Q)||{children:[],attributes:{}}:h4("generateAbstractIcon",Q)||{children:[],attributes:{}},s1=r1.children,T1=r1.attributes;return Q.children=s1,Q.attributes=T1,s?fO(Q):CO(Q)}function xC(t){var e=t.content,a=t.width,n=t.height,r=t.transform,i=t.title,c=t.extra,s=t.watchable,o=s===void 0?!1:s,u=a1(a1(a1({},c.attributes),i?{title:i}:{}),{},{class:c.classes.join(" ")});o&&(u[R5]="");var h=a1({},c.styles);kc(r)&&(h.transform=UR({transform:r,startCentered:!0,width:a,height:n}),h["-webkit-transform"]=h.transform);var p=et(h);p.length>0&&(u.style=p);var v=[];return v.push({tag:"span",attributes:u,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function uO(t){var e=t.content,a=t.title,n=t.extra,r=a1(a1(a1({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=et(n.styles);i.length>0&&(r.style=i);var c=[];return c.push({tag:"span",attributes:r,children:[e]}),a&&c.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),c}var Dn=V3.styles;function Or(t){var e=t[0],a=t[1],n=t.slice(4),r=Sc(n,1),i=r[0],c=null;return Array.isArray(i)?c={tag:"g",attributes:{class:"".concat(f1.familyPrefix,"-").concat(M5.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f1.familyPrefix,"-").concat(M5.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(f1.familyPrefix,"-").concat(M5.PRIMARY),fill:"currentColor",d:i[1]}}]}:c={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:c}}var hO={found:!1,width:512,height:512};function dO(t,e){!zm&&!f1.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Br(t,e){var a=e;return e==="fa"&&f1.styleDefault!==null&&(e=e5()),new Promise(function(n,r){if(h4("missingIconAbstract"),a==="fa"){var i=Tm(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Dn[e]&&Dn[e][t]){var c=Dn[e][t];return n(Or(c))}dO(t,e),n(a1(a1({},hO),{},{icon:f1.showMissingIcons&&t?h4("missingIconAbstract")||{}:{}}))})}var NC=function(){},Fr=f1.measurePerformance&&s9&&s9.mark&&s9.measure?s9:{mark:NC,measure:NC},I8='FA "6.1.2"',mO=function(e){return Fr.mark("".concat(I8," ").concat(e," begins")),function(){return Pm(e)}},Pm=function(e){Fr.mark("".concat(I8," ").concat(e," ends")),Fr.measure("".concat(I8," ").concat(e),"".concat(I8," ").concat(e," begins"),"".concat(I8," ").concat(e," ends"))},Rc={begin:mO,end:Pm},w9=function(){};function _C(t){var e=t.getAttribute?t.getAttribute(R5):null;return typeof e=="string"}function pO(t){var e=t.getAttribute?t.getAttribute(Nc):null,a=t.getAttribute?t.getAttribute(_c):null;return e&&a}function vO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f1.replacementClass)}function gO(){if(f1.autoReplaceSvg===!0)return S9.replace;var t=S9[f1.autoReplaceSvg];return t||S9.replace}function LO(t){return J1.createElementNS("http://www.w3.org/2000/svg",t)}function zO(t){return J1.createElement(t)}function Dm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?LO:zO:a;if(typeof t=="string")return J1.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(c){r.setAttribute(c,t.attributes[c])});var i=t.children||[];return i.forEach(function(c){r.appendChild(Dm(c,{ceFn:n}))}),r}function MO(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var S9={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(Dm(r),a)}),a.getAttribute(R5)===null&&f1.keepOriginalSource){var n=J1.createComment(MO(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~Ec(a).indexOf(f1.replacementClass))return S9.replace(e);var r=new RegExp("".concat(f1.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,o){return o===f1.replacementClass||o.match(r)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var c=n.map(function(s){return Z0(s)}).join(`
`);a.setAttribute(R5,""),a.innerHTML=c}};function AC(t){t()}function Rm(t,e){var a=typeof e=="function"?e:w9;if(t.length===0)a();else{var n=AC;f1.mutateApproach===bR&&(n=Z4.requestAnimationFrame||AC),n(function(){var r=gO(),i=Rc.begin("mutate");t.map(r),i(),a()})}}var Oc=!1;function Om(){Oc=!0}function Ur(){Oc=!1}var se=null;function EC(t){if(!!HC&&!!f1.observeMutations){var e=t.treeCallback,a=e===void 0?w9:e,n=t.nodeCallback,r=n===void 0?w9:n,i=t.pseudoElementsCallback,c=i===void 0?w9:i,s=t.observeMutationsRoot,o=s===void 0?J1:s;se=new HC(function(u){if(!Oc){var h=e5();a8(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!_C(p.addedNodes[0])&&(f1.searchPseudoElements&&c(p.target),a(p.target)),p.type==="attributes"&&p.target.parentNode&&f1.searchPseudoElements&&c(p.target.parentNode),p.type==="attributes"&&_C(p.target)&&~AR.indexOf(p.attributeName))if(p.attributeName==="class"&&pO(p.target)){var v=at(Ec(p.target)),L=v.prefix,w=v.iconName;p.target.setAttribute(Nc,L||h),w&&p.target.setAttribute(_c,w)}else vO(p.target)&&r(p.target)})}}),p4&&se.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function HO(){!se||se.disconnect()}function VO(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var i=r.split(":"),c=i[0],s=i.slice(1);return c&&s.length>0&&(n[c]=s.join(":").trim()),n},{})),a}function bO(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=at(Ec(t));return r.prefix||(r.prefix=e5()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=tO(r.prefix,t.innerText)||Ic(r.prefix,Ir(t.innerText))),!r.iconName&&f1.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function yO(t){var e=a8(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return f1.autoA11y&&(a?e["aria-labelledby"]="".concat(f1.replacementClass,"-title-").concat(n||b0()):(e["aria-hidden"]="true",e.focusable="false")),e}function wO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=bO(t),n=a.iconName,r=a.prefix,i=a.rest,c=yO(t),s=Dr("parseNodeAttributes",{},t),o=e.styleParser?VO(t):[];return a1({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:R3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:c}},s)}var SO=V3.styles;function Bm(t){var e=f1.autoReplaceSvg==="nest"?kC(t,{styleParser:!1}):kC(t);return~e.extra.classes.indexOf(Hm)?h4("generateLayersText",t,e):h4("generateSvgReplacementMutation",t,e)}function TC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!p4)return Promise.resolve();var a=J1.documentElement.classList,n=function(p){return a.add("".concat(VC,"-").concat(p))},r=function(p){return a.remove("".concat(VC,"-").concat(p))},i=f1.autoFetchSvg?Object.keys(Ac):Object.keys(SO);i.includes("fa")||i.push("fa");var c=[".".concat(Hm,":not([").concat(R5,"])")].concat(i.map(function(h){return".".concat(h,":not([").concat(R5,"])")})).join(", ");if(c.length===0)return Promise.resolve();var s=[];try{s=a8(t.querySelectorAll(c))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var o=Rc.begin("onTree"),u=s.reduce(function(h,p){try{var v=Bm(p);v&&h.push(v)}catch(L){zm||L.name==="MissingIcon"&&console.error(L)}return h},[]);return new Promise(function(h,p){Promise.all(u).then(function(v){Rm(v,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),o(),h()})}).catch(function(v){o(),p(v)})})}function xO(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bm(t).then(function(a){a&&Rm([a],e)})}function NO(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Rr(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Rr(r||{})),t(n,a1(a1({},a),{},{mask:r}))}}var _O=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?R3:n,i=a.symbol,c=i===void 0?!1:i,s=a.mask,o=s===void 0?null:s,u=a.maskId,h=u===void 0?null:u,p=a.title,v=p===void 0?null:p,L=a.titleId,w=L===void 0?null:L,E=a.classes,x=E===void 0?[]:E,y=a.attributes,A=y===void 0?{}:y,B=a.styles,F=B===void 0?{}:B;if(!!e){var Q=e.prefix,r1=e.iconName,s1=e.icon;return nt(a1({type:"icon"},e),function(){return O5("beforeDOMElementCreation",{iconDefinition:e,params:a}),f1.autoA11y&&(v?A["aria-labelledby"]="".concat(f1.replacementClass,"-title-").concat(w||b0()):(A["aria-hidden"]="true",A.focusable="false")),Dc({icons:{main:Or(s1),mask:o?Or(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Q,iconName:r1,transform:a1(a1({},R3),r),symbol:c,title:v,maskId:h,titleId:w,extra:{attributes:A,styles:F,classes:x}})})}},AO={mixout:function(){return{icon:NO(_O)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=TC,a.nodeCallback=xO,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,r=n===void 0?J1:n,i=a.callback,c=i===void 0?function(){}:i;return TC(r,c)},e.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.title,c=n.titleId,s=n.prefix,o=n.transform,u=n.symbol,h=n.mask,p=n.maskId,v=n.extra;return new Promise(function(L,w){Promise.all([Br(r,s),h.iconName?Br(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var x=Sc(E,2),y=x[0],A=x[1];L([a,Dc({icons:{main:y,mask:A},prefix:s,iconName:r,transform:o,symbol:u,maskId:p,title:i,titleId:c,extra:v,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,c=a.transform,s=a.styles,o=et(s);o.length>0&&(r.style=o);var u;return kc(c)&&(u=h4("generateAbstractTransformGrouping",{main:i,transform:c,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},EO={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return nt({type:"layer"},function(){O5("beforeDOMElementCreation",{assembler:a,params:n});var c=[];return a(function(s){Array.isArray(s)?s.map(function(o){c=c.concat(o.abstract)}):c=c.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(f1.familyPrefix,"-layers")].concat(Ze(i)).join(" ")},children:c}]})}}}},kO={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,c=n.classes,s=c===void 0?[]:c,o=n.attributes,u=o===void 0?{}:o,h=n.styles,p=h===void 0?{}:h;return nt({type:"counter",content:a},function(){return O5("beforeDOMElementCreation",{content:a,params:n}),uO({content:a.toString(),title:i,extra:{attributes:u,styles:p,classes:["".concat(f1.familyPrefix,"-layers-counter")].concat(Ze(s))}})})}}}},TO={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?R3:r,c=n.title,s=c===void 0?null:c,o=n.classes,u=o===void 0?[]:o,h=n.attributes,p=h===void 0?{}:h,v=n.styles,L=v===void 0?{}:v;return nt({type:"text",content:a},function(){return O5("beforeDOMElementCreation",{content:a,params:n}),xC({content:a,transform:a1(a1({},R3),i),title:s,extra:{attributes:p,styles:L,classes:["".concat(f1.familyPrefix,"-layers-text")].concat(Ze(u))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var r=n.title,i=n.transform,c=n.extra,s=null,o=null;if(vm){var u=parseInt(getComputedStyle(a).fontSize,10),h=a.getBoundingClientRect();s=h.width/u,o=h.height/u}return f1.autoA11y&&!r&&(c.attributes["aria-hidden"]="true"),Promise.resolve([a,xC({content:a.innerHTML,width:s,height:o,transform:i,title:r,extra:c,watchable:!0})])}}},IO=new RegExp('"',"ug"),IC=[1105920,1112319];function PO(t){var e=t.replace(IO,""),a=YR(e,0),n=a>=IC[0]&&a<=IC[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ir(r?e[0]:e),isSecondary:n||r}}function PC(t,e){var a="".concat(VR).concat(e.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(a)!==null)return n();var i=a8(t.children),c=i.filter(function(r1){return r1.getAttribute(Tr)===e})[0],s=Z4.getComputedStyle(t,e),o=s.getPropertyValue("font-family").match(xR),u=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(c&&!o)return t.removeChild(c),n();if(o&&h!=="none"&&h!==""){var p=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?ie[o[2].toLowerCase()]:NR[u],L=PO(p),w=L.value,E=L.isSecondary,x=o[0].startsWith("FontAwesome"),y=Ic(v,w),A=y;if(x){var B=aO(w);B.iconName&&B.prefix&&(y=B.iconName,v=B.prefix)}if(y&&!E&&(!c||c.getAttribute(Nc)!==v||c.getAttribute(_c)!==A)){t.setAttribute(a,A),c&&t.removeChild(c);var F=wO(),Q=F.extra;Q.attributes[Tr]=e,Br(y,v).then(function(r1){var s1=Dc(a1(a1({},F),{},{icons:{main:r1,mask:Pc()},prefix:v,iconName:A,extra:Q,watchable:!0})),T1=J1.createElement("svg");e==="::before"?t.insertBefore(T1,t.firstChild):t.appendChild(T1),T1.outerHTML=s1.map(function(C1){return Z0(C1)}).join(`
`),t.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function DO(t){return Promise.all([PC(t,"::before"),PC(t,"::after")])}function RO(t){return t.parentNode!==document.head&&!~yR.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Tr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function DC(t){if(!!p4)return new Promise(function(e,a){var n=a8(t.querySelectorAll("*")).filter(RO).map(DO),r=Rc.begin("searchPseudoElements");Om(),Promise.all(n).then(function(){r(),Ur(),e()}).catch(function(){r(),Ur(),a()})})}var OO={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=DC,a}}},provides:function(e){e.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?J1:n;f1.searchPseudoElements&&DC(r)}}},RC=!1,BO={mixout:function(){return{dom:{unwatch:function(){Om(),RC=!0}}}},hooks:function(){return{bootstrap:function(){EC(Dr("mutationObserverCallbacks",{}))},noAuto:function(){HO()},watch:function(a){var n=a.observeMutationsRoot;RC?Ur():EC(Dr("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},OC=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),c=i[0],s=i.slice(1).join("-");if(c&&s==="h")return n.flipX=!0,n;if(c&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(c){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},FO={mixout:function(){return{parse:{transform:function(a){return OC(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=OC(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,c=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),h="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(o," ").concat(u," ").concat(h)},v={transform:"translate(".concat(c/2*-1," -256)")},L={outer:s,inner:p,path:v};return{tag:"g",attributes:a1({},L.outer),children:[{tag:"g",attributes:a1({},L.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:a1(a1({},n.icon.attributes),L.path)}]}]}}}},Rn={x:0,y:0,width:"100%",height:"100%"};function BC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function UO(t){return t.tag==="g"?t.children:[t]}var $O={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?at(r.split(" ").map(function(c){return c.trim()})):Pc();return i.prefix||(i.prefix=e5()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,c=a.mask,s=a.maskId,o=a.transform,u=i.width,h=i.icon,p=c.width,v=c.icon,L=FR({transform:o,containerWidth:p,iconWidth:u}),w={tag:"rect",attributes:a1(a1({},Rn),{},{fill:"white"})},E=h.children?{children:h.children.map(BC)}:{},x={tag:"g",attributes:a1({},L.inner),children:[BC(a1({tag:h.tag,attributes:a1(a1({},h.attributes),L.path)},E))]},y={tag:"g",attributes:a1({},L.outer),children:[x]},A="mask-".concat(s||b0()),B="clip-".concat(s||b0()),F={tag:"mask",attributes:a1(a1({},Rn),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,y]},Q={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:UO(v)},F]};return n.push(Q,{tag:"rect",attributes:a1({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat(A,")")},Rn)}),{children:n,attributes:r}}}},qO={provides:function(e){var a=!1;Z4.matchMedia&&(a=Z4.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:a1(a1({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var c=a1(a1({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:a1(a1({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:a1(a1({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:a1(a1({},c),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:a1(a1({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:a1(a1({},c),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:a1(a1({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:a1(a1({},c),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},jO={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},WO=[qR,AO,EO,kO,TO,OO,BO,FO,$O,qO,jO];iO(WO,{mixoutsTo:l3});l3.noAuto;var Fm=l3.config,GO=l3.library;l3.dom;var oe=l3.parse;l3.findIconDefinition;l3.toHtml;var KO=l3.icon;l3.layer;var YO=l3.text;l3.counter;function FC(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function z3(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?FC(Object(a),!0).forEach(function(n){K2(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):FC(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function le(t){return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(t)}function K2(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function XO(t,e){if(t==null)return{};var a={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(e.indexOf(r)>=0)&&(a[r]=t[r]);return a}function QO(t,e){if(t==null)return{};var a=XO(t,e),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(a[n]=t[n]))}return a}function $r(t){return JO(t)||ZO(t)||eB(t)||tB()}function JO(t){if(Array.isArray(t))return qr(t)}function ZO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function eB(t,e){if(!!t){if(typeof t=="string")return qr(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return qr(t,e)}}function qr(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function tB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var aB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Um={exports:{}};(function(t){(function(e){var a=function(y,A,B){if(!u(A)||p(A)||v(A)||L(A)||o(A))return A;var F,Q=0,r1=0;if(h(A))for(F=[],r1=A.length;Q<r1;Q++)F.push(a(y,A[Q],B));else{F={};for(var s1 in A)Object.prototype.hasOwnProperty.call(A,s1)&&(F[y(s1,B)]=a(y,A[s1],B))}return F},n=function(y,A){A=A||{};var B=A.separator||"_",F=A.split||/(?=[A-Z])/;return y.split(F).join(B)},r=function(y){return w(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(A,B){return B?B.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var A=r(y);return A.substr(0,1).toUpperCase()+A.substr(1)},c=function(y,A){return n(y,A).toLowerCase()},s=Object.prototype.toString,o=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},h=function(y){return s.call(y)=="[object Array]"},p=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},L=function(y){return s.call(y)=="[object Boolean]"},w=function(y){return y=y-0,y===y},E=function(y,A){var B=A&&"process"in A?A.process:A;return typeof B!="function"?y:function(F,Q){return B(F,y,Q)}},x={camelize:r,decamelize:c,pascalize:i,depascalize:c,camelizeKeys:function(y,A){return a(E(r,A),y)},decamelizeKeys:function(y,A){return a(E(c,A),y,A)},pascalizeKeys:function(y,A){return a(E(i,A),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(aB)})(Um);var nB=Um.exports,rB=["class","style"];function iB(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,a){var n=a.indexOf(":"),r=nB.camelize(a.slice(0,n)),i=a.slice(n+1).trim();return e[r]=i,e},{})}function cB(t){return t.split(/\s+/).reduce(function(e,a){return e[a]=!0,e},{})}function Bc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(o){return Bc(o)}),r=Object.keys(t.attributes||{}).reduce(function(o,u){var h=t.attributes[u];switch(u){case"class":o.class=cB(h);break;case"style":o.style=iB(h);break;default:o.attrs[u]=h}return o},{attrs:{},class:{},style:{}});a.class;var i=a.style,c=i===void 0?{}:i,s=QO(a,rB);return He(t.tag,z3(z3(z3({},e),{},{class:r.class,style:z3(z3({},r.style),c)},r.attrs),s),n)}var $m=!1;try{$m=!0}catch{}function sB(){if(!$m&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Q8(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?K2({},t,e):{}}function oB(t){var e,a=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},K2(e,"fa-".concat(t.size),t.size!==null),K2(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),K2(e,"fa-pull-".concat(t.pull),t.pull!==null),K2(e,"fa-swap-opacity",t.swapOpacity),K2(e,"fa-bounce",t.bounce),K2(e,"fa-shake",t.shake),K2(e,"fa-beat",t.beat),K2(e,"fa-fade",t.fade),K2(e,"fa-beat-fade",t.beatFade),K2(e,"fa-flash",t.flash),K2(e,"fa-spin-pulse",t.spinPulse),K2(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(a).map(function(n){return a[n]?n:null}).filter(function(n){return n})}function UC(t){if(t&&le(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(oe.icon)return oe.icon(t);if(t===null)return null;if(le(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var lB=x0({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,a){var n=a.attrs,r=a2(function(){return UC(e.icon)}),i=a2(function(){return Q8("classes",oB(e))}),c=a2(function(){return Q8("transform",typeof e.transform=="string"?oe.transform(e.transform):e.transform)}),s=a2(function(){return Q8("mask",UC(e.mask))}),o=a2(function(){return KO(r.value,z3(z3(z3(z3({},i.value),c.value),s.value),{},{symbol:e.symbol,title:e.title}))});R8(o,function(h){if(!h)return sB("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=a2(function(){return o.value?Bc(o.value.abstract[0],{},n):null});return function(){return u.value}}});x0({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,a){var n=a.slots,r=Fm.familyPrefix,i=a2(function(){return["".concat(r,"-layers")].concat($r(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return He("div",{class:i.value},n.default?n.default():[])}}});x0({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,a){var n=a.attrs,r=Fm.familyPrefix,i=a2(function(){return Q8("classes",[].concat($r(e.counter?["".concat(r,"-layers-counter")]:[]),$r(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),c=a2(function(){return Q8("transform",typeof e.transform=="string"?oe.transform(e.transform):e.transform)}),s=a2(function(){var u=YO(e.value.toString(),z3(z3({},c.value),i.value)),h=u.abstract;return e.counter&&(h[0].attributes.class=h[0].attributes.class.replace("fa-layers-text","")),h[0]}),o=a2(function(){return Bc(s.value,{},n)});return function(){return o.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(t,e){(function(a,n){t.exports=n()})(k4,function(){const a="SweetAlert2:",n=C=>{const f=[];for(let d=0;d<C.length;d++)f.indexOf(C[d])===-1&&f.push(C[d]);return f},r=C=>C.charAt(0).toUpperCase()+C.slice(1),i=C=>Array.prototype.slice.call(C),c=C=>{console.warn("".concat(a," ").concat(typeof C=="object"?C.join(" "):C))},s=C=>{console.error("".concat(a," ").concat(C))},o=[],u=C=>{o.includes(C)||(o.push(C),c(C))},h=(C,f)=>{u('"'.concat(C,'" is deprecated and will be removed in the next major release. Please use "').concat(f,'" instead.'))},p=C=>typeof C=="function"?C():C,v=C=>C&&typeof C.toPromise=="function",L=C=>v(C)?C.toPromise():Promise.resolve(C),w=C=>C&&Promise.resolve(C)===C,E={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},x=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],y={},A=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],B=C=>Object.prototype.hasOwnProperty.call(E,C),F=C=>x.indexOf(C)!==-1,Q=C=>y[C],r1=C=>{B(C)||c('Unknown parameter "'.concat(C,'"'))},s1=C=>{A.includes(C)&&c('The parameter "'.concat(C,'" is incompatible with toasts'))},T1=C=>{Q(C)&&h(C,Q(C))},C1=C=>{!C.backdrop&&C.allowOutsideClick&&c('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const f in C)r1(f),C.toast&&s1(f),T1(f)},H1="swal2-",E1=C=>{const f={};for(const d in C)f[C[d]]=H1+C[d];return f},S=E1(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),$1=E1(["success","warning","info","question","error"]),F1=()=>document.body.querySelector(".".concat(S.container)),c2=C=>{const f=F1();return f?f.querySelector(C):null},v1=C=>c2(".".concat(C)),Z=()=>v1(S.popup),w1=()=>v1(S.icon),G1=()=>v1(S.title),g2=()=>v1(S["html-container"]),h2=()=>v1(S.image),r2=()=>v1(S["progress-steps"]),Z1=()=>v1(S["validation-message"]),X1=()=>c2(".".concat(S.actions," .").concat(S.confirm)),k=()=>c2(".".concat(S.actions," .").concat(S.deny)),e1=()=>v1(S["input-label"]),$=()=>c2(".".concat(S.loader)),J=()=>c2(".".concat(S.actions," .").concat(S.cancel)),I1=()=>v1(S.actions),R1=()=>v1(S.footer),N=()=>v1(S["timer-progress-bar"]),h1=()=>v1(S.close),g=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,b=()=>{const C=i(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((d,z)=>{const O=parseInt(d.getAttribute("tabindex")),l1=parseInt(z.getAttribute("tabindex"));return O>l1?1:O<l1?-1:0}),f=i(Z().querySelectorAll(g)).filter(d=>d.getAttribute("tabindex")!=="-1");return n(C.concat(f)).filter(d=>s2(d))},_=()=>!P(document.body,S["toast-shown"])&&!P(document.body,S["no-backdrop"]),D=()=>Z()&&P(Z(),S.toast),I=()=>Z().hasAttribute("data-loading"),U={previousBodyPadding:null},j=(C,f)=>{if(C.textContent="",f){const z=new DOMParser().parseFromString(f,"text/html");i(z.querySelector("head").childNodes).forEach(O=>{C.appendChild(O)}),i(z.querySelector("body").childNodes).forEach(O=>{C.appendChild(O)})}},P=(C,f)=>{if(!f)return!1;const d=f.split(/\s+/);for(let z=0;z<d.length;z++)if(!C.classList.contains(d[z]))return!1;return!0},G=(C,f)=>{i(C.classList).forEach(d=>{!Object.values(S).includes(d)&&!Object.values($1).includes(d)&&!Object.values(f.showClass).includes(d)&&C.classList.remove(d)})},R=(C,f,d)=>{if(G(C,f),f.customClass&&f.customClass[d]){if(typeof f.customClass[d]!="string"&&!f.customClass[d].forEach)return c("Invalid type of customClass.".concat(d,'! Expected string or iterable object, got "').concat(typeof f.customClass[d],'"'));Y(C,f.customClass[d])}},i1=(C,f)=>{if(!f)return null;switch(f){case"select":case"textarea":case"file":return C.querySelector(".".concat(S.popup," > .").concat(S[f]));case"checkbox":return C.querySelector(".".concat(S.popup," > .").concat(S.checkbox," input"));case"radio":return C.querySelector(".".concat(S.popup," > .").concat(S.radio," input:checked"))||C.querySelector(".".concat(S.popup," > .").concat(S.radio," input:first-child"));case"range":return C.querySelector(".".concat(S.popup," > .").concat(S.range," input"));default:return C.querySelector(".".concat(S.popup," > .").concat(S.input))}},t1=C=>{if(C.focus(),C.type!=="file"){const f=C.value;C.value="",C.value=f}},c1=(C,f,d)=>{!C||!f||(typeof f=="string"&&(f=f.split(/\s+/).filter(Boolean)),f.forEach(z=>{Array.isArray(C)?C.forEach(O=>{d?O.classList.add(z):O.classList.remove(z)}):d?C.classList.add(z):C.classList.remove(z)}))},Y=(C,f)=>{c1(C,f,!0)},m1=(C,f)=>{c1(C,f,!1)},S1=(C,f)=>{const d=i(C.childNodes);for(let z=0;z<d.length;z++)if(P(d[z],f))return d[z]},k1=(C,f,d)=>{d==="".concat(parseInt(d))&&(d=parseInt(d)),d||parseInt(d)===0?C.style[f]=typeof d=="number"?"".concat(d,"px"):d:C.style.removeProperty(f)},L1=function(C){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";C.style.display=f},W1=C=>{C.style.display="none"},m3=(C,f,d,z)=>{const O=C.querySelector(f);O&&(O.style[d]=z)},G3=(C,f,d)=>{f?L1(C,d):W1(C)},s2=C=>!!(C&&(C.offsetWidth||C.offsetHeight||C.getClientRects().length)),r5=()=>!s2(X1())&&!s2(k())&&!s2(J()),L2=C=>C.scrollHeight>C.clientHeight,d2=C=>{const f=window.getComputedStyle(C),d=parseFloat(f.getPropertyValue("animation-duration")||"0"),z=parseFloat(f.getPropertyValue("transition-duration")||"0");return d>0||z>0},V1=function(C){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const d=N();s2(d)&&(f&&(d.style.transition="none",d.style.width="100%"),setTimeout(()=>{d.style.transition="width ".concat(C/1e3,"s linear"),d.style.width="0%"},10))},Vt=()=>{const C=N(),f=parseInt(window.getComputedStyle(C).width);C.style.removeProperty("transition"),C.style.width="100%";const d=parseInt(window.getComputedStyle(C).width),z=f/d*100;C.style.removeProperty("transition"),C.style.width="".concat(z,"%")},K3=()=>typeof window>"u"||typeof document>"u",bt=100,g1={},yt=()=>{g1.previousActiveElement&&g1.previousActiveElement.focus?(g1.previousActiveElement.focus(),g1.previousActiveElement=null):document.body&&document.body.focus()},wt=C=>new Promise(f=>{if(!C)return f();const d=window.scrollX,z=window.scrollY;g1.restoreFocusTimeout=setTimeout(()=>{yt(),f()},bt),window.scrollTo(d,z)}),St=`
 <div aria-labelledby="`.concat(S.title,'" aria-describedby="').concat(S["html-container"],'" class="').concat(S.popup,`" tabindex="-1">
   <button type="button" class="`).concat(S.close,`"></button>
   <ul class="`).concat(S["progress-steps"],`"></ul>
   <div class="`).concat(S.icon,`"></div>
   <img class="`).concat(S.image,`" />
   <h2 class="`).concat(S.title,'" id="').concat(S.title,`"></h2>
   <div class="`).concat(S["html-container"],'" id="').concat(S["html-container"],`"></div>
   <input class="`).concat(S.input,`" />
   <input type="file" class="`).concat(S.file,`" />
   <div class="`).concat(S.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(S.select,`"></select>
   <div class="`).concat(S.radio,`"></div>
   <label for="`).concat(S.checkbox,'" class="').concat(S.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(S.label,`"></span>
   </label>
   <textarea class="`).concat(S.textarea,`"></textarea>
   <div class="`).concat(S["validation-message"],'" id="').concat(S["validation-message"],`"></div>
   <div class="`).concat(S.actions,`">
     <div class="`).concat(S.loader,`"></div>
     <button type="button" class="`).concat(S.confirm,`"></button>
     <button type="button" class="`).concat(S.deny,`"></button>
     <button type="button" class="`).concat(S.cancel,`"></button>
   </div>
   <div class="`).concat(S.footer,`"></div>
   <div class="`).concat(S["timer-progress-bar-container"],`">
     <div class="`).concat(S["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),xt=()=>{const C=F1();return C?(C.remove(),m1([document.documentElement,document.body],[S["no-backdrop"],S["toast-shown"],S["has-column"]]),!0):!1},Y3=()=>{g1.currentInstance.resetValidationMessage()},Nt=()=>{const C=Z(),f=S1(C,S.input),d=S1(C,S.file),z=C.querySelector(".".concat(S.range," input")),O=C.querySelector(".".concat(S.range," output")),l1=S1(C,S.select),o2=C.querySelector(".".concat(S.checkbox," input")),R2=S1(C,S.textarea);f.oninput=Y3,d.onchange=Y3,l1.onchange=Y3,o2.onchange=Y3,R2.oninput=Y3,z.oninput=()=>{Y3(),O.value=z.value},z.onchange=()=>{Y3(),z.nextSibling.value=z.value}},_t=C=>typeof C=="string"?document.querySelector(C):C,At=C=>{const f=Z();f.setAttribute("role",C.toast?"alert":"dialog"),f.setAttribute("aria-live",C.toast?"polite":"assertive"),C.toast||f.setAttribute("aria-modal","true")},Et=C=>{window.getComputedStyle(C).direction==="rtl"&&Y(F1(),S.rtl)},W5=C=>{const f=xt();if(K3()){s("SweetAlert2 requires document to initialize");return}const d=document.createElement("div");d.className=S.container,f&&Y(d,S["no-transition"]),j(d,St);const z=_t(C.target);z.appendChild(d),At(C),Et(z),Nt()},r8=(C,f)=>{C instanceof HTMLElement?f.appendChild(C):typeof C=="object"?Ws(C,f):C&&j(f,C)},Ws=(C,f)=>{C.jquery?A3(f,C):j(f,C.toString())},A3=(C,f)=>{if(C.textContent="",0 in f)for(let d=0;d in f;d++)C.appendChild(f[d].cloneNode(!0));else C.appendChild(f.cloneNode(!0))},v4=(()=>{if(K3())return!1;const C=document.createElement("div"),f={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&typeof C.style[d]<"u")return f[d];return!1})(),kt=()=>{const C=document.createElement("div");C.className=S["scrollbar-measure"],document.body.appendChild(C);const f=C.getBoundingClientRect().width-C.clientWidth;return document.body.removeChild(C),f},Tt=(C,f)=>{const d=I1(),z=$();!f.showConfirmButton&&!f.showDenyButton&&!f.showCancelButton?W1(d):L1(d),R(d,f,"actions"),It(d,z,f),j(z,f.loaderHtml),R(z,f,"loader")};function It(C,f,d){const z=X1(),O=k(),l1=J();E3(z,"confirm",d),E3(O,"deny",d),E3(l1,"cancel",d),i5(z,O,l1,d),d.reverseButtons&&(d.toast?(C.insertBefore(l1,z),C.insertBefore(O,z)):(C.insertBefore(l1,f),C.insertBefore(O,f),C.insertBefore(z,f)))}function i5(C,f,d,z){if(!z.buttonsStyling)return m1([C,f,d],S.styled);Y([C,f,d],S.styled),z.confirmButtonColor&&(C.style.backgroundColor=z.confirmButtonColor,Y(C,S["default-outline"])),z.denyButtonColor&&(f.style.backgroundColor=z.denyButtonColor,Y(f,S["default-outline"])),z.cancelButtonColor&&(d.style.backgroundColor=z.cancelButtonColor,Y(d,S["default-outline"]))}function E3(C,f,d){G3(C,d["show".concat(r(f),"Button")],"inline-block"),j(C,d["".concat(f,"ButtonText")]),C.setAttribute("aria-label",d["".concat(f,"ButtonAriaLabel")]),C.className=S[f],R(C,d,"".concat(f,"Button")),Y(C,d["".concat(f,"ButtonClass")])}function g4(C,f){typeof f=="string"?C.style.background=f:f||Y([document.documentElement,document.body],S["no-backdrop"])}function G5(C,f){f in S?Y(C,S[f]):(c('The "position" parameter is not valid, defaulting to "center"'),Y(C,S.center))}function Pt(C,f){if(f&&typeof f=="string"){const d="grow-".concat(f);d in S&&Y(C,S[d])}}const i8=(C,f)=>{const d=F1();!d||(g4(d,f.backdrop),G5(d,f.position),Pt(d,f.grow),R(d,f,"container"))};var x1={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Dt=["input","file","range","select","radio","checkbox","textarea"],Rt=(C,f)=>{const d=Z(),z=x1.innerParams.get(C),O=!z||f.input!==z.input;Dt.forEach(l1=>{const o2=S[l1],R2=S1(d,o2);Ft(l1,f.inputAttributes),R2.className=o2,O&&W1(R2)}),f.input&&(O&&Ot(f),c7(f))},Ot=C=>{if(!k2[C.input])return s('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(C.input,'"'));const f=s7(C.input),d=k2[C.input](f,C);L1(d),setTimeout(()=>{t1(d)})},Bt=C=>{for(let f=0;f<C.attributes.length;f++){const d=C.attributes[f].name;["type","value","style"].includes(d)||C.removeAttribute(d)}},Ft=(C,f)=>{const d=i1(Z(),C);if(!!d){Bt(d);for(const z in f)d.setAttribute(z,f[z])}},c7=C=>{const f=s7(C.input);C.customClass&&Y(f,C.customClass.input)},L4=(C,f)=>{(!C.placeholder||f.inputPlaceholder)&&(C.placeholder=f.inputPlaceholder)},c5=(C,f,d)=>{if(d.inputLabel){C.id=S.input;const z=document.createElement("label"),O=S["input-label"];z.setAttribute("for",C.id),z.className=O,Y(z,d.customClass.inputLabel),z.innerText=d.inputLabel,f.insertAdjacentElement("beforebegin",z)}},s7=C=>{const f=S[C]?S[C]:S.input;return S1(Z(),f)},k2={};k2.text=k2.email=k2.password=k2.number=k2.tel=k2.url=(C,f)=>(typeof f.inputValue=="string"||typeof f.inputValue=="number"?C.value=f.inputValue:w(f.inputValue)||c('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof f.inputValue,'"')),c5(C,C,f),L4(C,f),C.type=f.input,C),k2.file=(C,f)=>(c5(C,C,f),L4(C,f),C),k2.range=(C,f)=>{const d=C.querySelector("input"),z=C.querySelector("output");return d.value=f.inputValue,d.type=f.input,z.value=f.inputValue,c5(d,C,f),C},k2.select=(C,f)=>{if(C.textContent="",f.inputPlaceholder){const d=document.createElement("option");j(d,f.inputPlaceholder),d.value="",d.disabled=!0,d.selected=!0,C.appendChild(d)}return c5(C,C,f),C},k2.radio=C=>(C.textContent="",C),k2.checkbox=(C,f)=>{const d=i1(Z(),"checkbox");d.value="1",d.id=S.checkbox,d.checked=Boolean(f.inputValue);const z=C.querySelector("span");return j(z,f.inputPlaceholder),C},k2.textarea=(C,f)=>{C.value=f.inputValue,L4(C,f),c5(C,C,f);const d=z=>parseInt(window.getComputedStyle(z).marginLeft)+parseInt(window.getComputedStyle(z).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const z=parseInt(window.getComputedStyle(Z()).width),O=()=>{const l1=C.offsetWidth+d(C);l1>z?Z().style.width="".concat(l1,"px"):Z().style.width=null};new MutationObserver(O).observe(C,{attributes:!0,attributeFilter:["style"]})}}),C};const Ut=(C,f)=>{const d=g2();R(d,f,"htmlContainer"),f.html?(r8(f.html,d),L1(d,"block")):f.text?(d.textContent=f.text,L1(d,"block")):W1(d),Rt(C,f)},$t=(C,f)=>{const d=R1();G3(d,f.footer),f.footer&&r8(f.footer,d),R(d,f,"footer")},o7=(C,f)=>{const d=h1();j(d,f.closeButtonHtml),R(d,f,"closeButton"),G3(d,f.showCloseButton),d.setAttribute("aria-label",f.closeButtonAriaLabel)},l7=(C,f)=>{const d=x1.innerParams.get(C),z=w1();if(d&&f.icon===d.icon){f7(z,f),C7(z,f);return}if(!f.icon&&!f.iconHtml)return W1(z);if(f.icon&&Object.keys($1).indexOf(f.icon)===-1)return s('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(f.icon,'"')),W1(z);L1(z),f7(z,f),C7(z,f),Y(z,f.showClass.icon)},C7=(C,f)=>{for(const d in $1)f.icon!==d&&m1(C,$1[d]);Y(C,$1[f.icon]),Gt(C,f),qt(),R(C,f,"icon")},qt=()=>{const C=Z(),f=window.getComputedStyle(C).getPropertyValue("background-color"),d=C.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let z=0;z<d.length;z++)d[z].style.backgroundColor=f},jt=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Wt=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,f7=(C,f)=>{C.textContent="",f.iconHtml?j(C,u7(f.iconHtml)):f.icon==="success"?j(C,jt):f.icon==="error"?j(C,Wt):j(C,u7({question:"?",warning:"!",info:"i"}[f.icon]))},Gt=(C,f)=>{if(!!f.iconColor){C.style.color=f.iconColor,C.style.borderColor=f.iconColor;for(const d of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])m3(C,d,"backgroundColor",f.iconColor);m3(C,".swal2-success-ring","borderColor",f.iconColor)}},u7=C=>'<div class="'.concat(S["icon-content"],'">').concat(C,"</div>"),Kt=(C,f)=>{const d=h2();if(!f.imageUrl)return W1(d);L1(d,""),d.setAttribute("src",f.imageUrl),d.setAttribute("alt",f.imageAlt),k1(d,"width",f.imageWidth),k1(d,"height",f.imageHeight),d.className=S.image,R(d,f,"image")},z4=C=>{const f=document.createElement("li");return Y(f,S["progress-step"]),j(f,C),f},Yt=C=>{const f=document.createElement("li");return Y(f,S["progress-step-line"]),C.progressStepsDistance&&(f.style.width=C.progressStepsDistance),f},Gs=(C,f)=>{const d=r2();if(!f.progressSteps||f.progressSteps.length===0)return W1(d);L1(d),d.textContent="",f.currentProgressStep>=f.progressSteps.length&&c("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),f.progressSteps.forEach((z,O)=>{const l1=z4(z);if(d.appendChild(l1),O===f.currentProgressStep&&Y(l1,S["active-progress-step"]),O!==f.progressSteps.length-1){const o2=Yt(f);d.appendChild(o2)}})},s5=(C,f)=>{const d=G1();G3(d,f.title||f.titleText,"block"),f.title&&r8(f.title,d),f.titleText&&(d.innerText=f.titleText),R(d,f,"title")},Xt=(C,f)=>{const d=F1(),z=Z();f.toast?(k1(d,"width",f.width),z.style.width="100%",z.insertBefore($(),w1())):k1(z,"width",f.width),k1(z,"padding",f.padding),f.color&&(z.style.color=f.color),f.background&&(z.style.background=f.background),W1(Z1()),Qt(z,f)},Qt=(C,f)=>{C.className="".concat(S.popup," ").concat(s2(C)?f.showClass.popup:""),f.toast?(Y([document.documentElement,document.body],S["toast-shown"]),Y(C,S.toast)):Y(C,S.modal),R(C,f,"popup"),typeof f.customClass=="string"&&Y(C,f.customClass),f.icon&&Y(C,S["icon-".concat(f.icon)])},h7=(C,f)=>{Xt(C,f),i8(C,f),Gs(C,f),l7(C,f),Kt(C,f),s5(C,f),o7(C,f),Ut(C,f),Tt(C,f),$t(C,f),typeof f.didRender=="function"&&f.didRender(Z())},M4=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Jt=()=>{i(document.body.children).forEach(f=>{f===F1()||f.contains(F1())||(f.hasAttribute("aria-hidden")&&f.setAttribute("data-previous-aria-hidden",f.getAttribute("aria-hidden")),f.setAttribute("aria-hidden","true"))})},d7=()=>{i(document.body.children).forEach(f=>{f.hasAttribute("data-previous-aria-hidden")?(f.setAttribute("aria-hidden",f.getAttribute("data-previous-aria-hidden")),f.removeAttribute("data-previous-aria-hidden")):f.removeAttribute("aria-hidden")})},K5=["swal-title","swal-html","swal-footer"],H4=C=>{const f=typeof C.template=="string"?document.querySelector(C.template):C.template;if(!f)return{};const d=f.content;return ra(d),Object.assign(Y5(d),Zt(d),ea(d),ta(d),aa(d),na(d,K5))},Y5=C=>{const f={};return i(C.querySelectorAll("swal-param")).forEach(d=>{p3(d,["name","value"]);const z=d.getAttribute("name"),O=d.getAttribute("value");typeof E[z]=="boolean"&&O==="false"&&(f[z]=!1),typeof E[z]=="object"&&(f[z]=JSON.parse(O))}),f},Zt=C=>{const f={};return i(C.querySelectorAll("swal-button")).forEach(d=>{p3(d,["type","color","aria-label"]);const z=d.getAttribute("type");f["".concat(z,"ButtonText")]=d.innerHTML,f["show".concat(r(z),"Button")]=!0,d.hasAttribute("color")&&(f["".concat(z,"ButtonColor")]=d.getAttribute("color")),d.hasAttribute("aria-label")&&(f["".concat(z,"ButtonAriaLabel")]=d.getAttribute("aria-label"))}),f},ea=C=>{const f={},d=C.querySelector("swal-image");return d&&(p3(d,["src","width","height","alt"]),d.hasAttribute("src")&&(f.imageUrl=d.getAttribute("src")),d.hasAttribute("width")&&(f.imageWidth=d.getAttribute("width")),d.hasAttribute("height")&&(f.imageHeight=d.getAttribute("height")),d.hasAttribute("alt")&&(f.imageAlt=d.getAttribute("alt"))),f},ta=C=>{const f={},d=C.querySelector("swal-icon");return d&&(p3(d,["type","color"]),d.hasAttribute("type")&&(f.icon=d.getAttribute("type")),d.hasAttribute("color")&&(f.iconColor=d.getAttribute("color")),f.iconHtml=d.innerHTML),f},aa=C=>{const f={},d=C.querySelector("swal-input");d&&(p3(d,["type","label","placeholder","value"]),f.input=d.getAttribute("type")||"text",d.hasAttribute("label")&&(f.inputLabel=d.getAttribute("label")),d.hasAttribute("placeholder")&&(f.inputPlaceholder=d.getAttribute("placeholder")),d.hasAttribute("value")&&(f.inputValue=d.getAttribute("value")));const z=C.querySelectorAll("swal-input-option");return z.length&&(f.inputOptions={},i(z).forEach(O=>{p3(O,["value"]);const l1=O.getAttribute("value"),o2=O.innerHTML;f.inputOptions[l1]=o2})),f},na=(C,f)=>{const d={};for(const z in f){const O=f[z],l1=C.querySelector(O);l1&&(p3(l1,[]),d[O.replace(/^swal-/,"")]=l1.innerHTML.trim())}return d},ra=C=>{const f=K5.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);i(C.children).forEach(d=>{const z=d.tagName.toLowerCase();f.indexOf(z)===-1&&c("Unrecognized element <".concat(z,">"))})},p3=(C,f)=>{i(C.attributes).forEach(d=>{f.indexOf(d.name)===-1&&c(['Unrecognized attribute "'.concat(d.name,'" on <').concat(C.tagName.toLowerCase(),">."),"".concat(f.length?"Allowed attributes are: ".concat(f.join(", ")):"To set the value, use HTML within the element.")])})};var m7={email:(C,f)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(C)?Promise.resolve():Promise.resolve(f||"Invalid email address"),url:(C,f)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(C)?Promise.resolve():Promise.resolve(f||"Invalid URL")};function ia(C){C.inputValidator||Object.keys(m7).forEach(f=>{C.input===f&&(C.inputValidator=m7[f])})}function V4(C){(!C.target||typeof C.target=="string"&&!document.querySelector(C.target)||typeof C.target!="string"&&!C.target.appendChild)&&(c('Target parameter is not valid, defaulting to "body"'),C.target="body")}function p7(C){ia(C),C.showLoaderOnConfirm&&!C.preConfirm&&c(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),V4(C),typeof C.title=="string"&&(C.title=C.title.split(`
`).join("<br />")),W5(C)}class Ks{constructor(f,d){this.callback=f,this.remaining=d,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(f){const d=this.running;return d&&this.stop(),this.remaining+=f,d&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const X3=()=>{U.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(U.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(U.previousBodyPadding+kt(),"px"))},c8=()=>{U.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(U.previousBodyPadding,"px"),U.previousBodyPadding=null)},ca=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!P(document.body,S.iosfix)){const f=document.body.scrollTop;document.body.style.top="".concat(f*-1,"px"),Y(document.body,S.iosfix),sa(),v7()}},v7=()=>{const C=navigator.userAgent,f=!!C.match(/iPad/i)||!!C.match(/iPhone/i),d=!!C.match(/WebKit/i);f&&d&&!C.match(/CriOS/i)&&Z().scrollHeight>window.innerHeight-44&&(F1().style.paddingBottom="".concat(44,"px"))},sa=()=>{const C=F1();let f;C.ontouchstart=d=>{f=g7(d)},C.ontouchmove=d=>{f&&(d.preventDefault(),d.stopPropagation())}},g7=C=>{const f=C.target,d=F1();return oa(C)||la(C)?!1:f===d||!L2(d)&&f.tagName!=="INPUT"&&f.tagName!=="TEXTAREA"&&!(L2(g2())&&g2().contains(f))},oa=C=>C.touches&&C.touches.length&&C.touches[0].touchType==="stylus",la=C=>C.touches&&C.touches.length>1,Ca=()=>{if(P(document.body,S.iosfix)){const C=parseInt(document.body.style.top,10);m1(document.body,S.iosfix),document.body.style.top="",document.body.scrollTop=C*-1}},L7=10,fa=C=>{const f=F1(),d=Z();typeof C.willOpen=="function"&&C.willOpen(d);const O=window.getComputedStyle(document.body).overflowY;b4(f,d,C),setTimeout(()=>{z7(f,d)},L7),_()&&(ua(f,C.scrollbarPadding,O),Jt()),!D()&&!g1.previousActiveElement&&(g1.previousActiveElement=document.activeElement),typeof C.didOpen=="function"&&setTimeout(()=>C.didOpen(d)),m1(f,S["no-transition"])},s8=C=>{const f=Z();if(C.target!==f)return;const d=F1();f.removeEventListener(v4,s8),d.style.overflowY="auto"},z7=(C,f)=>{v4&&d2(f)?(C.style.overflowY="hidden",f.addEventListener(v4,s8)):C.style.overflowY="auto"},ua=(C,f,d)=>{ca(),f&&d!=="hidden"&&X3(),setTimeout(()=>{C.scrollTop=0})},b4=(C,f,d)=>{Y(C,d.showClass.backdrop),f.style.setProperty("opacity","0","important"),L1(f,"grid"),setTimeout(()=>{Y(f,d.showClass.popup),f.style.removeProperty("opacity")},L7),Y([document.documentElement,document.body],S.shown),d.heightAuto&&d.backdrop&&!d.toast&&Y([document.documentElement,document.body],S["height-auto"])},y4=C=>{let f=Z();f||new t6,f=Z();const d=$();D()?W1(w1()):ha(f,C),L1(d),f.setAttribute("data-loading",!0),f.setAttribute("aria-busy",!0),f.focus()},ha=(C,f)=>{const d=I1(),z=$();!f&&s2(X1())&&(f=X1()),L1(d),f&&(W1(f),z.setAttribute("data-button-to-replace",f.className)),z.parentNode.insertBefore(z,f),Y([C,d],S.loading)},da=(C,f)=>{f.input==="select"||f.input==="radio"?M7(C,f):["text","email","number","tel","textarea"].includes(f.input)&&(v(f.inputValue)||w(f.inputValue))&&(y4(X1()),ga(C,f))},ma=(C,f)=>{const d=C.getInput();if(!d)return null;switch(f.input){case"checkbox":return pa(d);case"radio":return X5(d);case"file":return va(d);default:return f.inputAutoTrim?d.value.trim():d.value}},pa=C=>C.checked?1:0,X5=C=>C.checked?C.value:null,va=C=>C.files.length?C.getAttribute("multiple")!==null?C.files:C.files[0]:null,M7=(C,f)=>{const d=Z(),z=O=>La[f.input](d,o8(O),f);v(f.inputOptions)||w(f.inputOptions)?(y4(X1()),L(f.inputOptions).then(O=>{C.hideLoading(),z(O)})):typeof f.inputOptions=="object"?z(f.inputOptions):s("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof f.inputOptions))},ga=(C,f)=>{const d=C.getInput();W1(d),L(f.inputValue).then(z=>{d.value=f.input==="number"?parseFloat(z)||0:"".concat(z),L1(d),d.focus(),C.hideLoading()}).catch(z=>{s("Error in inputValue promise: ".concat(z)),d.value="",L1(d),d.focus(),C.hideLoading()})},La={select:(C,f,d)=>{const z=S1(C,S.select),O=(l1,o2,R2)=>{const b2=document.createElement("option");b2.value=R2,j(b2,o2),b2.selected=H7(R2,d.inputValue),l1.appendChild(b2)};f.forEach(l1=>{const o2=l1[0],R2=l1[1];if(Array.isArray(R2)){const b2=document.createElement("optgroup");b2.label=o2,b2.disabled=!1,z.appendChild(b2),R2.forEach(k3=>O(b2,k3[1],k3[0]))}else O(z,R2,o2)}),z.focus()},radio:(C,f,d)=>{const z=S1(C,S.radio);f.forEach(l1=>{const o2=l1[0],R2=l1[1],b2=document.createElement("input"),k3=document.createElement("label");b2.type="radio",b2.name=S.radio,b2.value=o2,H7(o2,d.inputValue)&&(b2.checked=!0);const z8=document.createElement("span");j(z8,R2),z8.className=S.label,k3.appendChild(b2),k3.appendChild(z8),z.appendChild(k3)});const O=z.querySelectorAll("input");O.length&&O[0].focus()}},o8=C=>{const f=[];return typeof Map<"u"&&C instanceof Map?C.forEach((d,z)=>{let O=d;typeof O=="object"&&(O=o8(O)),f.push([z,O])}):Object.keys(C).forEach(d=>{let z=C[d];typeof z=="object"&&(z=o8(z)),f.push([d,z])}),f},H7=(C,f)=>f&&f.toString()===C.toString(),za=C=>{const f=x1.innerParams.get(C);C.disableButtons(),f.input?V7(C,"confirm"):C8(C,!0)},Ma=C=>{const f=x1.innerParams.get(C);C.disableButtons(),f.returnInputValueOnDeny?V7(C,"deny"):l8(C,!1)},Ha=(C,f)=>{C.disableButtons(),f(M4.cancel)},V7=(C,f)=>{const d=x1.innerParams.get(C);if(!d.input)return s('The "input" parameter is needed to be set when using returnInputValueOn'.concat(r(f)));const z=ma(C,d);d.inputValidator?Va(C,z,f):C.getInput().checkValidity()?f==="deny"?l8(C,z):C8(C,z):(C.enableButtons(),C.showValidationMessage(d.validationMessage))},Va=(C,f,d)=>{const z=x1.innerParams.get(C);C.disableInput(),Promise.resolve().then(()=>L(z.inputValidator(f,z.validationMessage))).then(l1=>{C.enableButtons(),C.enableInput(),l1?C.showValidationMessage(l1):d==="deny"?l8(C,f):C8(C,f)})},l8=(C,f)=>{const d=x1.innerParams.get(C||void 0);d.showLoaderOnDeny&&y4(k()),d.preDeny?(x1.awaitingPromise.set(C||void 0,!0),Promise.resolve().then(()=>L(d.preDeny(f,d.validationMessage))).then(O=>{O===!1?C.hideLoading():C.closePopup({isDenied:!0,value:typeof O>"u"?f:O})}).catch(O=>y7(C||void 0,O))):C.closePopup({isDenied:!0,value:f})},b7=(C,f)=>{C.closePopup({isConfirmed:!0,value:f})},y7=(C,f)=>{C.rejectPromise(f)},C8=(C,f)=>{const d=x1.innerParams.get(C||void 0);d.showLoaderOnConfirm&&y4(),d.preConfirm?(C.resetValidationMessage(),x1.awaitingPromise.set(C||void 0,!0),Promise.resolve().then(()=>L(d.preConfirm(f,d.validationMessage))).then(O=>{s2(Z1())||O===!1?C.hideLoading():b7(C,typeof O>"u"?f:O)}).catch(O=>y7(C||void 0,O))):b7(C,f)},e3=(C,f,d)=>{x1.innerParams.get(C).toast?w7(C,f,d):(x7(f),f8(f),N7(C,f,d))},w7=(C,f,d)=>{f.popup.onclick=()=>{const z=x1.innerParams.get(C);z&&(S7(z)||z.timer||z.input)||d(M4.close)}},S7=C=>C.showConfirmButton||C.showDenyButton||C.showCancelButton||C.showCloseButton;let Q3=!1;const x7=C=>{C.popup.onmousedown=()=>{C.container.onmouseup=function(f){C.container.onmouseup=void 0,f.target===C.container&&(Q3=!0)}}},f8=C=>{C.container.onmousedown=()=>{C.popup.onmouseup=function(f){C.popup.onmouseup=void 0,(f.target===C.popup||C.popup.contains(f.target))&&(Q3=!0)}}},N7=(C,f,d)=>{f.container.onclick=z=>{const O=x1.innerParams.get(C);if(Q3){Q3=!1;return}z.target===f.container&&p(O.allowOutsideClick)&&d(M4.backdrop)}},ba=()=>s2(Z()),u8=()=>X1()&&X1().click(),_7=()=>k()&&k().click(),ya=()=>J()&&J().click(),wa=(C,f,d,z)=>{f.keydownTarget&&f.keydownHandlerAdded&&(f.keydownTarget.removeEventListener("keydown",f.keydownHandler,{capture:f.keydownListenerCapture}),f.keydownHandlerAdded=!1),d.toast||(f.keydownHandler=O=>J5(C,O,z),f.keydownTarget=d.keydownListenerCapture?window:Z(),f.keydownListenerCapture=d.keydownListenerCapture,f.keydownTarget.addEventListener("keydown",f.keydownHandler,{capture:f.keydownListenerCapture}),f.keydownHandlerAdded=!0)},Q5=(C,f,d)=>{const z=b();if(z.length)return f=f+d,f===z.length?f=0:f===-1&&(f=z.length-1),z[f].focus();Z().focus()},A7=["ArrowRight","ArrowDown"],Ys=["ArrowLeft","ArrowUp"],J5=(C,f,d)=>{const z=x1.innerParams.get(C);!z||(z.stopKeydownPropagation&&f.stopPropagation(),f.key==="Enter"?Sa(C,f,z):f.key==="Tab"?xa(f,z):[...A7,...Ys].includes(f.key)?Na(f.key):f.key==="Escape"&&_a(f,z,d))},Sa=(C,f,d)=>{if(!(!p(d.allowEnterKey)||f.isComposing)&&f.target&&C.getInput()&&f.target.outerHTML===C.getInput().outerHTML){if(["textarea","file"].includes(d.input))return;u8(),f.preventDefault()}},xa=(C,f)=>{const d=C.target,z=b();let O=-1;for(let l1=0;l1<z.length;l1++)if(d===z[l1]){O=l1;break}C.shiftKey?Q5(f,O,-1):Q5(f,O,1),C.stopPropagation(),C.preventDefault()},Na=C=>{const f=X1(),d=k(),z=J();if(![f,d,z].includes(document.activeElement))return;const O=A7.includes(C)?"nextElementSibling":"previousElementSibling",l1=document.activeElement[O];l1 instanceof HTMLElement&&l1.focus()},_a=(C,f,d)=>{p(f.allowEscapeKey)&&(C.preventDefault(),d(M4.esc))},E7=C=>typeof C=="object"&&C.jquery,k7=C=>C instanceof Element||E7(C),Aa=C=>{const f={};return typeof C[0]=="object"&&!k7(C[0])?Object.assign(f,C[0]):["title","html","icon"].forEach((d,z)=>{const O=C[z];typeof O=="string"||k7(O)?f[d]=O:O!==void 0&&s("Unexpected type of ".concat(d,'! Expected "string" or "Element", got ').concat(typeof O))}),f};function T7(){const C=this;for(var f=arguments.length,d=new Array(f),z=0;z<f;z++)d[z]=arguments[z];return new C(...d)}function Ea(C){class f extends this{_main(z,O){return super._main(z,Object.assign({},C,O))}}return f}const Xs=()=>g1.timeout&&g1.timeout.getTimerLeft(),t3=()=>{if(g1.timeout)return Vt(),g1.timeout.stop()},I7=()=>{if(g1.timeout){const C=g1.timeout.start();return V1(C),C}},ka=()=>{const C=g1.timeout;return C&&(C.running?t3():I7())},Ta=C=>{if(g1.timeout){const f=g1.timeout.increase(C);return V1(f,!0),f}},Ia=()=>g1.timeout&&g1.timeout.isRunning();let h8=!1;const Z5={};function Pa(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Z5[C]=this,h8||(document.body.addEventListener("click",Da),h8=!0)}const Da=C=>{for(let f=C.target;f&&f!==document;f=f.parentNode)for(const d in Z5){const z=f.getAttribute(d);if(z){Z5[d].fire({template:z});return}}};var Ra=Object.freeze({isValidParameter:B,isUpdatableParameter:F,isDeprecatedParameter:Q,argsToParams:Aa,isVisible:ba,clickConfirm:u8,clickDeny:_7,clickCancel:ya,getContainer:F1,getPopup:Z,getTitle:G1,getHtmlContainer:g2,getImage:h2,getIcon:w1,getInputLabel:e1,getCloseButton:h1,getActions:I1,getConfirmButton:X1,getDenyButton:k,getCancelButton:J,getLoader:$,getFooter:R1,getTimerProgressBar:N,getFocusableElements:b,getValidationMessage:Z1,isLoading:I,fire:T7,mixin:Ea,showLoading:y4,enableLoading:y4,getTimerLeft:Xs,stopTimer:t3,resumeTimer:I7,toggleTimer:ka,increaseTimer:Ta,isTimerRunning:Ia,bindClickHandler:Pa});function P7(){const C=x1.innerParams.get(this);if(!C)return;const f=x1.domCache.get(this);W1(f.loader),D()?C.icon&&L1(w1()):Oa(f),m1([f.popup,f.actions],S.loading),f.popup.removeAttribute("aria-busy"),f.popup.removeAttribute("data-loading"),f.confirmButton.disabled=!1,f.denyButton.disabled=!1,f.cancelButton.disabled=!1}const Oa=C=>{const f=C.popup.getElementsByClassName(C.loader.getAttribute("data-button-to-replace"));f.length?L1(f[0],"inline-block"):r5()&&W1(C.actions)};function D7(C){const f=x1.innerParams.get(C||this),d=x1.domCache.get(C||this);return d?i1(d.popup,f.input):null}var o5={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function d8(C,f,d,z){D()?ja(C,z):(wt(d).then(()=>ja(C,z)),g1.keydownTarget.removeEventListener("keydown",g1.keydownHandler,{capture:g1.keydownListenerCapture}),g1.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(f.setAttribute("style","display:none !important"),f.removeAttribute("class"),f.innerHTML=""):f.remove(),_()&&(c8(),Ca(),d7()),m8()}function m8(){m1([document.documentElement,document.body],[S.shown,S["height-auto"],S["no-backdrop"],S["toast-shown"]])}function e6(C){C=$a(C);const f=o5.swalPromiseResolve.get(this),d=Fa(this);this.isAwaitingPromise()?C.isDismissed||(R7(this),f(C)):d&&f(C)}function Ba(){return!!x1.awaitingPromise.get(this)}const Fa=C=>{const f=Z();if(!f)return!1;const d=x1.innerParams.get(C);if(!d||P(f,d.hideClass.popup))return!1;m1(f,d.showClass.popup),Y(f,d.hideClass.popup);const z=F1();return m1(z,d.showClass.backdrop),Y(z,d.hideClass.backdrop),J3(C,f,d),!0};function Ua(C){const f=o5.swalPromiseReject.get(this);R7(this),f&&f(C)}const R7=C=>{C.isAwaitingPromise()&&(x1.awaitingPromise.delete(C),x1.innerParams.get(C)||C._destroy())},$a=C=>typeof C>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},C),J3=(C,f,d)=>{const z=F1(),O=v4&&d2(f);typeof d.willClose=="function"&&d.willClose(f),O?qa(C,f,z,d.returnFocus,d.didClose):d8(C,z,d.returnFocus,d.didClose)},qa=(C,f,d,z,O)=>{g1.swalCloseEventFinishedCallback=d8.bind(null,C,d,z,O),f.addEventListener(v4,function(l1){l1.target===f&&(g1.swalCloseEventFinishedCallback(),delete g1.swalCloseEventFinishedCallback)})},ja=(C,f)=>{setTimeout(()=>{typeof f=="function"&&f.bind(C.params)(),C._destroy()})};function C3(C,f,d){const z=x1.domCache.get(C);f.forEach(O=>{z[O].disabled=d})}function p8(C,f){if(!C)return!1;if(C.type==="radio"){const z=C.parentNode.parentNode.querySelectorAll("input");for(let O=0;O<z.length;O++)z[O].disabled=f}else C.disabled=f}function Wa(){C3(this,["confirmButton","denyButton","cancelButton"],!1)}function Ga(){C3(this,["confirmButton","denyButton","cancelButton"],!0)}function O7(){return p8(this.getInput(),!1)}function B7(){return p8(this.getInput(),!0)}function F7(C){const f=x1.domCache.get(this),d=x1.innerParams.get(this);j(f.validationMessage,C),f.validationMessage.className=S["validation-message"],d.customClass&&d.customClass.validationMessage&&Y(f.validationMessage,d.customClass.validationMessage),L1(f.validationMessage);const z=this.getInput();z&&(z.setAttribute("aria-invalid",!0),z.setAttribute("aria-describedby",S["validation-message"]),t1(z),Y(z,S.inputerror))}function Ka(){const C=x1.domCache.get(this);C.validationMessage&&W1(C.validationMessage);const f=this.getInput();f&&(f.removeAttribute("aria-invalid"),f.removeAttribute("aria-describedby"),m1(f,S.inputerror))}function U7(){return x1.domCache.get(this).progressSteps}function Ya(C){const f=Z(),d=x1.innerParams.get(this);if(!f||P(f,d.hideClass.popup))return c("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const z=Xa(C),O=Object.assign({},d,z);h7(this,O),x1.innerParams.set(this,O),Object.defineProperties(this,{params:{value:Object.assign({},this.params,C),writable:!1,enumerable:!0}})}const Xa=C=>{const f={};return Object.keys(C).forEach(d=>{F(d)?f[d]=C[d]:c('Invalid parameter to update: "'.concat(d,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),f};function Qa(){const C=x1.domCache.get(this),f=x1.innerParams.get(this);if(!f){v8(this);return}C.popup&&g1.swalCloseEventFinishedCallback&&(g1.swalCloseEventFinishedCallback(),delete g1.swalCloseEventFinishedCallback),g1.deferDisposalTimer&&(clearTimeout(g1.deferDisposalTimer),delete g1.deferDisposalTimer),typeof f.didDestroy=="function"&&f.didDestroy(),$7(this)}const $7=C=>{v8(C),delete C.params,delete g1.keydownHandler,delete g1.keydownTarget,delete g1.currentInstance},v8=C=>{C.isAwaitingPromise()?(g8(x1,C),x1.awaitingPromise.set(C,!0)):(g8(o5,C),g8(x1,C))},g8=(C,f)=>{for(const d in C)C[d].delete(f)};var q7=Object.freeze({hideLoading:P7,disableLoading:P7,getInput:D7,close:e6,isAwaitingPromise:Ba,rejectPromise:Ua,closePopup:e6,closeModal:e6,closeToast:e6,enableButtons:Wa,disableButtons:Ga,enableInput:O7,disableInput:B7,showValidationMessage:F7,resetValidationMessage:Ka,getProgressSteps:U7,update:Ya,_destroy:Qa});let L8;class w4{constructor(){if(typeof window>"u")return;L8=this;for(var f=arguments.length,d=new Array(f),z=0;z<f;z++)d[z]=arguments[z];const O=Object.freeze(this.constructor.argsToParams(d));Object.defineProperties(this,{params:{value:O,writable:!1,enumerable:!0,configurable:!0}});const l1=this._main(this.params);x1.promise.set(this,l1)}_main(f){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};C1(Object.assign({},d,f)),g1.currentInstance&&(g1.currentInstance._destroy(),_()&&d7()),g1.currentInstance=this;const z=Za(f,d);p7(z),Object.freeze(z),g1.timeout&&(g1.timeout.stop(),delete g1.timeout),clearTimeout(g1.restoreFocusTimeout);const O=v3(this);return h7(this,z),x1.innerParams.set(this,z),Ja(this,O,z)}then(f){return x1.promise.get(this).then(f)}finally(f){return x1.promise.get(this).finally(f)}}const Ja=(C,f,d)=>new Promise((z,O)=>{const l1=o2=>{C.closePopup({isDismissed:!0,dismiss:o2})};o5.swalPromiseResolve.set(C,z),o5.swalPromiseReject.set(C,O),f.confirmButton.onclick=()=>za(C),f.denyButton.onclick=()=>Ma(C),f.cancelButton.onclick=()=>Ha(C,l1),f.closeButton.onclick=()=>l1(M4.close),e3(C,f,l1),wa(C,g1,d,l1),da(C,d),fa(d),en(g1,d,l1),tn(f,d),setTimeout(()=>{f.container.scrollTop=0})}),Za=(C,f)=>{const d=H4(C),z=Object.assign({},E,f,d,C);return z.showClass=Object.assign({},E.showClass,z.showClass),z.hideClass=Object.assign({},E.hideClass,z.hideClass),z},v3=C=>{const f={popup:Z(),container:F1(),actions:I1(),confirmButton:X1(),denyButton:k(),cancelButton:J(),loader:$(),closeButton:h1(),validationMessage:Z1(),progressSteps:r2()};return x1.domCache.set(C,f),f},en=(C,f,d)=>{const z=N();W1(z),f.timer&&(C.timeout=new Ks(()=>{d("timer"),delete C.timeout},f.timer),f.timerProgressBar&&(L1(z),R(z,f,"timerProgressBar"),setTimeout(()=>{C.timeout&&C.timeout.running&&V1(f.timer)})))},tn=(C,f)=>{if(!f.toast){if(!p(f.allowEnterKey))return nn();an(C,f)||Q5(f,-1,1)}},an=(C,f)=>f.focusDeny&&s2(C.denyButton)?(C.denyButton.focus(),!0):f.focusCancel&&s2(C.cancelButton)?(C.cancelButton.focus(),!0):f.focusConfirm&&s2(C.confirmButton)?(C.confirmButton.focus(),!0):!1,nn=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(w4.prototype,q7),Object.assign(w4,Ra),Object.keys(q7).forEach(C=>{w4[C]=function(){if(L8)return L8[C](...arguments)}}),w4.DismissReason=M4,w4.version="11.4.0";const t6=w4;return t6.default=t6,t6}),typeof k4<"u"&&k4.Sweetalert2&&(k4.swal=k4.sweetAlert=k4.Swal=k4.SweetAlert=k4.Sweetalert2)})(GV);var o9=GV.exports;class pu1{static install(e,a={}){var n;const r=o9.mixin(a),i=function(...c){return r.fire.call(r,...c)};Object.assign(i,o9),Object.keys(o9).filter(c=>typeof o9[c]=="function").forEach(c=>{i[c]=r[c].bind(r)}),((n=e.config)==null?void 0:n.globalProperties)&&!e.config.globalProperties.$swal?(e.config.globalProperties.$swal=i,e.provide("$swal",i)):Object.prototype.hasOwnProperty.call(e,"$swal")||(e.prototype.$swal=i,e.swal=i)}}var vu1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gu1(t){var e=t.default;if(typeof e=="function"){var a=function(){return e.apply(this,arguments)};a.prototype=e.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(a,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),a}var Lu1={exports:{}},q2="top",s3="bottom",o3="right",j2="left",zt="auto",n8=[q2,s3,o3,j2],B5="start",R6="end",KV="clippingParents",Ts="viewport",l6="popper",YV="reference",jr=n8.reduce(function(t,e){return t.concat([e+"-"+B5,e+"-"+R6])},[]),Is=[].concat(n8,[zt]).reduce(function(t,e){return t.concat([e,e+"-"+B5,e+"-"+R6])},[]),XV="beforeRead",QV="read",JV="afterRead",ZV="beforeMain",eb="main",tb="afterMain",ab="beforeWrite",nb="write",rb="afterWrite",ib=[XV,QV,JV,ZV,eb,tb,ab,nb,rb];function W3(t){return t?(t.nodeName||"").toLowerCase():null}function _3(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function O6(t){var e=_3(t).Element;return t instanceof e||t instanceof Element}function d3(t){var e=_3(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ps(t){if(typeof ShadowRoot>"u")return!1;var e=_3(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function zu1(t){var e=t.state;Object.keys(e.elements).forEach(function(a){var n=e.styles[a]||{},r=e.attributes[a]||{},i=e.elements[a];!d3(i)||!W3(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(c){var s=r[c];s===!1?i.removeAttribute(c):i.setAttribute(c,s===!0?"":s)}))})}function Mu1(t){var e=t.state,a={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,a.popper),e.styles=a,e.elements.arrow&&Object.assign(e.elements.arrow.style,a.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],i=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:a[n]),s=c.reduce(function(o,u){return o[u]="",o},{});!d3(r)||!W3(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){r.removeAttribute(o)}))})}}const Ds={name:"applyStyles",enabled:!0,phase:"write",fn:zu1,effect:Mu1,requires:["computeStyles"]};function $3(t){return t.split("-")[0]}var w5=Math.max,Ce=Math.min,B6=Math.round;function F6(t,e){e===void 0&&(e=!1);var a=t.getBoundingClientRect(),n=1,r=1;if(d3(t)&&e){var i=t.offsetHeight,c=t.offsetWidth;c>0&&(n=B6(a.width)/c||1),i>0&&(r=B6(a.height)/i||1)}return{width:a.width/n,height:a.height/r,top:a.top/r,right:a.right/n,bottom:a.bottom/r,left:a.left/n,x:a.left/n,y:a.top/r}}function Rs(t){var e=F6(t),a=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-a)<=1&&(a=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:a,height:n}}function cb(t,e){var a=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(a&&Ps(a)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function d4(t){return _3(t).getComputedStyle(t)}function Hu1(t){return["table","td","th"].indexOf(W3(t))>=0}function n5(t){return((O6(t)?t.ownerDocument:t.document)||window.document).documentElement}function Mt(t){return W3(t)==="html"?t:t.assignedSlot||t.parentNode||(Ps(t)?t.host:null)||n5(t)}function $C(t){return!d3(t)||d4(t).position==="fixed"?null:t.offsetParent}function Vu1(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,a=navigator.userAgent.indexOf("Trident")!==-1;if(a&&d3(t)){var n=d4(t);if(n.position==="fixed")return null}var r=Mt(t);for(Ps(r)&&(r=r.host);d3(r)&&["html","body"].indexOf(W3(r))<0;){var i=d4(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function i7(t){for(var e=_3(t),a=$C(t);a&&Hu1(a)&&d4(a).position==="static";)a=$C(a);return a&&(W3(a)==="html"||W3(a)==="body"&&d4(a).position==="static")?e:a||Vu1(t)||e}function Os(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function J8(t,e,a){return w5(t,Ce(e,a))}function bu1(t,e,a){var n=J8(t,e,a);return n>a?a:n}function sb(){return{top:0,right:0,bottom:0,left:0}}function ob(t){return Object.assign({},sb(),t)}function lb(t,e){return e.reduce(function(a,n){return a[n]=t,a},{})}var yu1=function(e,a){return e=typeof e=="function"?e(Object.assign({},a.rects,{placement:a.placement})):e,ob(typeof e!="number"?e:lb(e,n8))};function wu1(t){var e,a=t.state,n=t.name,r=t.options,i=a.elements.arrow,c=a.modifiersData.popperOffsets,s=$3(a.placement),o=Os(s),u=[j2,o3].indexOf(s)>=0,h=u?"height":"width";if(!(!i||!c)){var p=yu1(r.padding,a),v=Rs(i),L=o==="y"?q2:j2,w=o==="y"?s3:o3,E=a.rects.reference[h]+a.rects.reference[o]-c[o]-a.rects.popper[h],x=c[o]-a.rects.reference[o],y=i7(i),A=y?o==="y"?y.clientHeight||0:y.clientWidth||0:0,B=E/2-x/2,F=p[L],Q=A-v[h]-p[w],r1=A/2-v[h]/2+B,s1=J8(F,r1,Q),T1=o;a.modifiersData[n]=(e={},e[T1]=s1,e.centerOffset=s1-r1,e)}}function Su1(t){var e=t.state,a=t.options,n=a.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||!cb(e.elements.popper,r)||(e.elements.arrow=r))}const Cb={name:"arrow",enabled:!0,phase:"main",fn:wu1,effect:Su1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function U6(t){return t.split("-")[1]}var xu1={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Nu1(t){var e=t.x,a=t.y,n=window,r=n.devicePixelRatio||1;return{x:B6(e*r)/r||0,y:B6(a*r)/r||0}}function qC(t){var e,a=t.popper,n=t.popperRect,r=t.placement,i=t.variation,c=t.offsets,s=t.position,o=t.gpuAcceleration,u=t.adaptive,h=t.roundOffsets,p=t.isFixed,v=c.x,L=v===void 0?0:v,w=c.y,E=w===void 0?0:w,x=typeof h=="function"?h({x:L,y:E}):{x:L,y:E};L=x.x,E=x.y;var y=c.hasOwnProperty("x"),A=c.hasOwnProperty("y"),B=j2,F=q2,Q=window;if(u){var r1=i7(a),s1="clientHeight",T1="clientWidth";if(r1===_3(a)&&(r1=n5(a),d4(r1).position!=="static"&&s==="absolute"&&(s1="scrollHeight",T1="scrollWidth")),r1=r1,r===q2||(r===j2||r===o3)&&i===R6){F=s3;var C1=p&&r1===Q&&Q.visualViewport?Q.visualViewport.height:r1[s1];E-=C1-n.height,E*=o?1:-1}if(r===j2||(r===q2||r===s3)&&i===R6){B=o3;var H1=p&&r1===Q&&Q.visualViewport?Q.visualViewport.width:r1[T1];L-=H1-n.width,L*=o?1:-1}}var E1=Object.assign({position:s},u&&xu1),S=h===!0?Nu1({x:L,y:E}):{x:L,y:E};if(L=S.x,E=S.y,o){var $1;return Object.assign({},E1,($1={},$1[F]=A?"0":"",$1[B]=y?"0":"",$1.transform=(Q.devicePixelRatio||1)<=1?"translate("+L+"px, "+E+"px)":"translate3d("+L+"px, "+E+"px, 0)",$1))}return Object.assign({},E1,(e={},e[F]=A?E+"px":"",e[B]=y?L+"px":"",e.transform="",e))}function _u1(t){var e=t.state,a=t.options,n=a.gpuAcceleration,r=n===void 0?!0:n,i=a.adaptive,c=i===void 0?!0:i,s=a.roundOffsets,o=s===void 0?!0:s,u={placement:$3(e.placement),variation:U6(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,qC(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:o})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,qC(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Bs={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_u1,data:{}};var l9={passive:!0};function Au1(t){var e=t.state,a=t.instance,n=t.options,r=n.scroll,i=r===void 0?!0:r,c=n.resize,s=c===void 0?!0:c,o=_3(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(h){h.addEventListener("scroll",a.update,l9)}),s&&o.addEventListener("resize",a.update,l9),function(){i&&u.forEach(function(h){h.removeEventListener("scroll",a.update,l9)}),s&&o.removeEventListener("resize",a.update,l9)}}const Fs={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Au1,data:{}};var Eu1={left:"right",right:"left",bottom:"top",top:"bottom"};function x9(t){return t.replace(/left|right|bottom|top/g,function(e){return Eu1[e]})}var ku1={start:"end",end:"start"};function jC(t){return t.replace(/start|end/g,function(e){return ku1[e]})}function Us(t){var e=_3(t),a=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:a,scrollTop:n}}function $s(t){return F6(n5(t)).left+Us(t).scrollLeft}function Tu1(t){var e=_3(t),a=n5(t),n=e.visualViewport,r=a.clientWidth,i=a.clientHeight,c=0,s=0;return n&&(r=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=n.offsetLeft,s=n.offsetTop)),{width:r,height:i,x:c+$s(t),y:s}}function Iu1(t){var e,a=n5(t),n=Us(t),r=(e=t.ownerDocument)==null?void 0:e.body,i=w5(a.scrollWidth,a.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),c=w5(a.scrollHeight,a.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+$s(t),o=-n.scrollTop;return d4(r||a).direction==="rtl"&&(s+=w5(a.clientWidth,r?r.clientWidth:0)-i),{width:i,height:c,x:s,y:o}}function qs(t){var e=d4(t),a=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(a+r+n)}function fb(t){return["html","body","#document"].indexOf(W3(t))>=0?t.ownerDocument.body:d3(t)&&qs(t)?t:fb(Mt(t))}function Z8(t,e){var a;e===void 0&&(e=[]);var n=fb(t),r=n===((a=t.ownerDocument)==null?void 0:a.body),i=_3(n),c=r?[i].concat(i.visualViewport||[],qs(n)?n:[]):n,s=e.concat(c);return r?s:s.concat(Z8(Mt(c)))}function Wr(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Pu1(t){var e=F6(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function WC(t,e){return e===Ts?Wr(Tu1(t)):O6(e)?Pu1(e):Wr(Iu1(n5(t)))}function Du1(t){var e=Z8(Mt(t)),a=["absolute","fixed"].indexOf(d4(t).position)>=0,n=a&&d3(t)?i7(t):t;return O6(n)?e.filter(function(r){return O6(r)&&cb(r,n)&&W3(r)!=="body"}):[]}function Ru1(t,e,a){var n=e==="clippingParents"?Du1(t):[].concat(e),r=[].concat(n,[a]),i=r[0],c=r.reduce(function(s,o){var u=WC(t,o);return s.top=w5(u.top,s.top),s.right=Ce(u.right,s.right),s.bottom=Ce(u.bottom,s.bottom),s.left=w5(u.left,s.left),s},WC(t,i));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function ub(t){var e=t.reference,a=t.element,n=t.placement,r=n?$3(n):null,i=n?U6(n):null,c=e.x+e.width/2-a.width/2,s=e.y+e.height/2-a.height/2,o;switch(r){case q2:o={x:c,y:e.y-a.height};break;case s3:o={x:c,y:e.y+e.height};break;case o3:o={x:e.x+e.width,y:s};break;case j2:o={x:e.x-a.width,y:s};break;default:o={x:e.x,y:e.y}}var u=r?Os(r):null;if(u!=null){var h=u==="y"?"height":"width";switch(i){case B5:o[u]=o[u]-(e[h]/2-a[h]/2);break;case R6:o[u]=o[u]+(e[h]/2-a[h]/2);break}}return o}function $6(t,e){e===void 0&&(e={});var a=e,n=a.placement,r=n===void 0?t.placement:n,i=a.boundary,c=i===void 0?KV:i,s=a.rootBoundary,o=s===void 0?Ts:s,u=a.elementContext,h=u===void 0?l6:u,p=a.altBoundary,v=p===void 0?!1:p,L=a.padding,w=L===void 0?0:L,E=ob(typeof w!="number"?w:lb(w,n8)),x=h===l6?YV:l6,y=t.rects.popper,A=t.elements[v?x:h],B=Ru1(O6(A)?A:A.contextElement||n5(t.elements.popper),c,o),F=F6(t.elements.reference),Q=ub({reference:F,element:y,strategy:"absolute",placement:r}),r1=Wr(Object.assign({},y,Q)),s1=h===l6?r1:F,T1={top:B.top-s1.top+E.top,bottom:s1.bottom-B.bottom+E.bottom,left:B.left-s1.left+E.left,right:s1.right-B.right+E.right},C1=t.modifiersData.offset;if(h===l6&&C1){var H1=C1[r];Object.keys(T1).forEach(function(E1){var S=[o3,s3].indexOf(E1)>=0?1:-1,$1=[q2,s3].indexOf(E1)>=0?"y":"x";T1[E1]+=H1[$1]*S})}return T1}function Ou1(t,e){e===void 0&&(e={});var a=e,n=a.placement,r=a.boundary,i=a.rootBoundary,c=a.padding,s=a.flipVariations,o=a.allowedAutoPlacements,u=o===void 0?Is:o,h=U6(n),p=h?s?jr:jr.filter(function(w){return U6(w)===h}):n8,v=p.filter(function(w){return u.indexOf(w)>=0});v.length===0&&(v=p);var L=v.reduce(function(w,E){return w[E]=$6(t,{placement:E,boundary:r,rootBoundary:i,padding:c})[$3(E)],w},{});return Object.keys(L).sort(function(w,E){return L[w]-L[E]})}function Bu1(t){if($3(t)===zt)return[];var e=x9(t);return[jC(t),e,jC(e)]}function Fu1(t){var e=t.state,a=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var r=a.mainAxis,i=r===void 0?!0:r,c=a.altAxis,s=c===void 0?!0:c,o=a.fallbackPlacements,u=a.padding,h=a.boundary,p=a.rootBoundary,v=a.altBoundary,L=a.flipVariations,w=L===void 0?!0:L,E=a.allowedAutoPlacements,x=e.options.placement,y=$3(x),A=y===x,B=o||(A||!w?[x9(x)]:Bu1(x)),F=[x].concat(B).reduce(function(X1,k){return X1.concat($3(k)===zt?Ou1(e,{placement:k,boundary:h,rootBoundary:p,padding:u,flipVariations:w,allowedAutoPlacements:E}):k)},[]),Q=e.rects.reference,r1=e.rects.popper,s1=new Map,T1=!0,C1=F[0],H1=0;H1<F.length;H1++){var E1=F[H1],S=$3(E1),$1=U6(E1)===B5,F1=[q2,s3].indexOf(S)>=0,c2=F1?"width":"height",v1=$6(e,{placement:E1,boundary:h,rootBoundary:p,altBoundary:v,padding:u}),Z=F1?$1?o3:j2:$1?s3:q2;Q[c2]>r1[c2]&&(Z=x9(Z));var w1=x9(Z),G1=[];if(i&&G1.push(v1[S]<=0),s&&G1.push(v1[Z]<=0,v1[w1]<=0),G1.every(function(X1){return X1})){C1=E1,T1=!1;break}s1.set(E1,G1)}if(T1)for(var g2=w?3:1,h2=function(k){var e1=F.find(function($){var J=s1.get($);if(J)return J.slice(0,k).every(function(I1){return I1})});if(e1)return C1=e1,"break"},r2=g2;r2>0;r2--){var Z1=h2(r2);if(Z1==="break")break}e.placement!==C1&&(e.modifiersData[n]._skip=!0,e.placement=C1,e.reset=!0)}}const hb={name:"flip",enabled:!0,phase:"main",fn:Fu1,requiresIfExists:["offset"],data:{_skip:!1}};function GC(t,e,a){return a===void 0&&(a={x:0,y:0}),{top:t.top-e.height-a.y,right:t.right-e.width+a.x,bottom:t.bottom-e.height+a.y,left:t.left-e.width-a.x}}function KC(t){return[q2,o3,s3,j2].some(function(e){return t[e]>=0})}function Uu1(t){var e=t.state,a=t.name,n=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,c=$6(e,{elementContext:"reference"}),s=$6(e,{altBoundary:!0}),o=GC(c,n),u=GC(s,r,i),h=KC(o),p=KC(u);e.modifiersData[a]={referenceClippingOffsets:o,popperEscapeOffsets:u,isReferenceHidden:h,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":p})}const db={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Uu1};function $u1(t,e,a){var n=$3(t),r=[j2,q2].indexOf(n)>=0?-1:1,i=typeof a=="function"?a(Object.assign({},e,{placement:t})):a,c=i[0],s=i[1];return c=c||0,s=(s||0)*r,[j2,o3].indexOf(n)>=0?{x:s,y:c}:{x:c,y:s}}function qu1(t){var e=t.state,a=t.options,n=t.name,r=a.offset,i=r===void 0?[0,0]:r,c=Is.reduce(function(h,p){return h[p]=$u1(p,e.rects,i),h},{}),s=c[e.placement],o=s.x,u=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=o,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=c}const mb={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qu1};function ju1(t){var e=t.state,a=t.name;e.modifiersData[a]=ub({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const js={name:"popperOffsets",enabled:!0,phase:"read",fn:ju1,data:{}};function Wu1(t){return t==="x"?"y":"x"}function Gu1(t){var e=t.state,a=t.options,n=t.name,r=a.mainAxis,i=r===void 0?!0:r,c=a.altAxis,s=c===void 0?!1:c,o=a.boundary,u=a.rootBoundary,h=a.altBoundary,p=a.padding,v=a.tether,L=v===void 0?!0:v,w=a.tetherOffset,E=w===void 0?0:w,x=$6(e,{boundary:o,rootBoundary:u,padding:p,altBoundary:h}),y=$3(e.placement),A=U6(e.placement),B=!A,F=Os(y),Q=Wu1(F),r1=e.modifiersData.popperOffsets,s1=e.rects.reference,T1=e.rects.popper,C1=typeof E=="function"?E(Object.assign({},e.rects,{placement:e.placement})):E,H1=typeof C1=="number"?{mainAxis:C1,altAxis:C1}:Object.assign({mainAxis:0,altAxis:0},C1),E1=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,S={x:0,y:0};if(!!r1){if(i){var $1,F1=F==="y"?q2:j2,c2=F==="y"?s3:o3,v1=F==="y"?"height":"width",Z=r1[F],w1=Z+x[F1],G1=Z-x[c2],g2=L?-T1[v1]/2:0,h2=A===B5?s1[v1]:T1[v1],r2=A===B5?-T1[v1]:-s1[v1],Z1=e.elements.arrow,X1=L&&Z1?Rs(Z1):{width:0,height:0},k=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:sb(),e1=k[F1],$=k[c2],J=J8(0,s1[v1],X1[v1]),I1=B?s1[v1]/2-g2-J-e1-H1.mainAxis:h2-J-e1-H1.mainAxis,R1=B?-s1[v1]/2+g2+J+$+H1.mainAxis:r2+J+$+H1.mainAxis,N=e.elements.arrow&&i7(e.elements.arrow),h1=N?F==="y"?N.clientTop||0:N.clientLeft||0:0,g=($1=E1==null?void 0:E1[F])!=null?$1:0,b=Z+I1-g-h1,_=Z+R1-g,D=J8(L?Ce(w1,b):w1,Z,L?w5(G1,_):G1);r1[F]=D,S[F]=D-Z}if(s){var I,U=F==="x"?q2:j2,j=F==="x"?s3:o3,P=r1[Q],G=Q==="y"?"height":"width",R=P+x[U],i1=P-x[j],t1=[q2,j2].indexOf(y)!==-1,c1=(I=E1==null?void 0:E1[Q])!=null?I:0,Y=t1?R:P-s1[G]-T1[G]-c1+H1.altAxis,m1=t1?P+s1[G]+T1[G]-c1-H1.altAxis:i1,S1=L&&t1?bu1(Y,P,m1):J8(L?Y:R,P,L?m1:i1);r1[Q]=S1,S[Q]=S1-P}e.modifiersData[n]=S}}const pb={name:"preventOverflow",enabled:!0,phase:"main",fn:Gu1,requiresIfExists:["offset"]};function Ku1(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Yu1(t){return t===_3(t)||!d3(t)?Us(t):Ku1(t)}function Xu1(t){var e=t.getBoundingClientRect(),a=B6(e.width)/t.offsetWidth||1,n=B6(e.height)/t.offsetHeight||1;return a!==1||n!==1}function Qu1(t,e,a){a===void 0&&(a=!1);var n=d3(e),r=d3(e)&&Xu1(e),i=n5(e),c=F6(t,r),s={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(n||!n&&!a)&&((W3(e)!=="body"||qs(i))&&(s=Yu1(e)),d3(e)?(o=F6(e,!0),o.x+=e.clientLeft,o.y+=e.clientTop):i&&(o.x=$s(i))),{x:c.left+s.scrollLeft-o.x,y:c.top+s.scrollTop-o.y,width:c.width,height:c.height}}function Ju1(t){var e=new Map,a=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function r(i){a.add(i.name);var c=[].concat(i.requires||[],i.requiresIfExists||[]);c.forEach(function(s){if(!a.has(s)){var o=e.get(s);o&&r(o)}}),n.push(i)}return t.forEach(function(i){a.has(i.name)||r(i)}),n}function Zu1(t){var e=Ju1(t);return ib.reduce(function(a,n){return a.concat(e.filter(function(r){return r.phase===n}))},[])}function eh1(t){var e;return function(){return e||(e=new Promise(function(a){Promise.resolve().then(function(){e=void 0,a(t())})})),e}}function th1(t){var e=t.reduce(function(a,n){var r=a[n.name];return a[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,a},{});return Object.keys(e).map(function(a){return e[a]})}var YC={placement:"bottom",modifiers:[],strategy:"absolute"};function XC(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ht(t){t===void 0&&(t={});var e=t,a=e.defaultModifiers,n=a===void 0?[]:a,r=e.defaultOptions,i=r===void 0?YC:r;return function(s,o,u){u===void 0&&(u=i);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},YC,i),modifiersData:{},elements:{reference:s,popper:o},attributes:{},styles:{}},p=[],v=!1,L={state:h,setOptions:function(y){var A=typeof y=="function"?y(h.options):y;E(),h.options=Object.assign({},i,h.options,A),h.scrollParents={reference:O6(s)?Z8(s):s.contextElement?Z8(s.contextElement):[],popper:Z8(o)};var B=Zu1(th1([].concat(n,h.options.modifiers)));return h.orderedModifiers=B.filter(function(F){return F.enabled}),w(),L.update()},forceUpdate:function(){if(!v){var y=h.elements,A=y.reference,B=y.popper;if(!!XC(A,B)){h.rects={reference:Qu1(A,i7(B),h.options.strategy==="fixed"),popper:Rs(B)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(H1){return h.modifiersData[H1.name]=Object.assign({},H1.data)});for(var F=0;F<h.orderedModifiers.length;F++){if(h.reset===!0){h.reset=!1,F=-1;continue}var Q=h.orderedModifiers[F],r1=Q.fn,s1=Q.options,T1=s1===void 0?{}:s1,C1=Q.name;typeof r1=="function"&&(h=r1({state:h,options:T1,name:C1,instance:L})||h)}}}},update:eh1(function(){return new Promise(function(x){L.forceUpdate(),x(h)})}),destroy:function(){E(),v=!0}};if(!XC(s,o))return L;L.setOptions(u).then(function(x){!v&&u.onFirstUpdate&&u.onFirstUpdate(x)});function w(){h.orderedModifiers.forEach(function(x){var y=x.name,A=x.options,B=A===void 0?{}:A,F=x.effect;if(typeof F=="function"){var Q=F({state:h,name:y,instance:L,options:B}),r1=function(){};p.push(Q||r1)}})}function E(){p.forEach(function(x){return x()}),p=[]}return L}}var ah1=Ht(),nh1=[Fs,js,Bs,Ds],rh1=Ht({defaultModifiers:nh1}),ih1=[Fs,js,Bs,Ds,mb,hb,pb,Cb,db],ch1=Ht({defaultModifiers:ih1});const sh1=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Ht,detectOverflow:$6,createPopperBase:ah1,createPopper:ch1,createPopperLite:rh1,top:q2,bottom:s3,right:o3,left:j2,auto:zt,basePlacements:n8,start:B5,end:R6,clippingParents:KV,viewport:Ts,popper:l6,reference:YV,variationPlacements:jr,placements:Is,beforeRead:XV,read:QV,afterRead:JV,beforeMain:ZV,main:eb,afterMain:tb,beforeWrite:ab,write:nb,afterWrite:rb,modifierPhases:ib,applyStyles:Ds,arrow:Cb,computeStyles:Bs,eventListeners:Fs,flip:hb,hide:db,offset:mb,popperOffsets:js,preventOverflow:pb},Symbol.toStringTag,{value:"Module"})),oh1=gu1(sh1);/*!
  * Bootstrap v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(a,n){t.exports=n(oh1)})(vu1,function(a){function n(M){if(M&&M.__esModule)return M;const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(M){for(const m in M)if(m!=="default"){const H=Object.getOwnPropertyDescriptor(M,m);Object.defineProperty(l,m,H.get?H:{enumerable:!0,get:()=>M[m]})}}return l.default=M,Object.freeze(l)}const r=n(a),i=1e6,c=1e3,s="transitionend",o=M=>M==null?`${M}`:Object.prototype.toString.call(M).match(/\s([a-z]+)/i)[1].toLowerCase(),u=M=>{do M+=Math.floor(Math.random()*i);while(document.getElementById(M));return M},h=M=>{let l=M.getAttribute("data-bs-target");if(!l||l==="#"){let m=M.getAttribute("href");if(!m||!m.includes("#")&&!m.startsWith("."))return null;m.includes("#")&&!m.startsWith("#")&&(m=`#${m.split("#")[1]}`),l=m&&m!=="#"?m.trim():null}return l},p=M=>{const l=h(M);return l&&document.querySelector(l)?l:null},v=M=>{const l=h(M);return l?document.querySelector(l):null},L=M=>{if(!M)return 0;let{transitionDuration:l,transitionDelay:m}=window.getComputedStyle(M);const H=Number.parseFloat(l),T=Number.parseFloat(m);return!H&&!T?0:(l=l.split(",")[0],m=m.split(",")[0],(Number.parseFloat(l)+Number.parseFloat(m))*c)},w=M=>{M.dispatchEvent(new Event(s))},E=M=>!M||typeof M!="object"?!1:(typeof M.jquery<"u"&&(M=M[0]),typeof M.nodeType<"u"),x=M=>E(M)?M.jquery?M[0]:M:typeof M=="string"&&M.length>0?document.querySelector(M):null,y=M=>{if(!E(M)||M.getClientRects().length===0)return!1;const l=getComputedStyle(M).getPropertyValue("visibility")==="visible",m=M.closest("details:not([open])");if(!m)return l;if(m!==M){const H=M.closest("summary");if(H&&H.parentNode!==m||H===null)return!1}return l},A=M=>!M||M.nodeType!==Node.ELEMENT_NODE||M.classList.contains("disabled")?!0:typeof M.disabled<"u"?M.disabled:M.hasAttribute("disabled")&&M.getAttribute("disabled")!=="false",B=M=>{if(!document.documentElement.attachShadow)return null;if(typeof M.getRootNode=="function"){const l=M.getRootNode();return l instanceof ShadowRoot?l:null}return M instanceof ShadowRoot?M:M.parentNode?B(M.parentNode):null},F=()=>{},Q=M=>{M.offsetHeight},r1=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,s1=[],T1=M=>{document.readyState==="loading"?(s1.length||document.addEventListener("DOMContentLoaded",()=>{for(const l of s1)l()}),s1.push(M)):M()},C1=()=>document.documentElement.dir==="rtl",H1=M=>{T1(()=>{const l=r1();if(l){const m=M.NAME,H=l.fn[m];l.fn[m]=M.jQueryInterface,l.fn[m].Constructor=M,l.fn[m].noConflict=()=>(l.fn[m]=H,M.jQueryInterface)}})},E1=M=>{typeof M=="function"&&M()},S=(M,l,m=!0)=>{if(!m){E1(M);return}const H=5,T=L(l)+H;let X=!1;const K=({target:N1})=>{N1===l&&(X=!0,l.removeEventListener(s,K),E1(M))};l.addEventListener(s,K),setTimeout(()=>{X||w(l)},T)},$1=(M,l,m,H)=>{const T=M.length;let X=M.indexOf(l);return X===-1?!m&&H?M[T-1]:M[0]:(X+=m?1:-1,H&&(X=(X+T)%T),M[Math.max(0,Math.min(X,T-1))])},F1=/[^.]*(?=\..*)\.|.*/,c2=/\..*/,v1=/::\d+$/,Z={};let w1=1;const G1={mouseenter:"mouseover",mouseleave:"mouseout"},g2=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function h2(M,l){return l&&`${l}::${w1++}`||M.uidEvent||w1++}function r2(M){const l=h2(M);return M.uidEvent=l,Z[l]=Z[l]||{},Z[l]}function Z1(M,l){return function m(H){return h1(H,{delegateTarget:M}),m.oneOff&&N.off(M,H.type,l),l.apply(M,[H])}}function X1(M,l,m){return function H(T){const X=M.querySelectorAll(l);for(let{target:K}=T;K&&K!==this;K=K.parentNode)for(const N1 of X)if(N1===K)return h1(T,{delegateTarget:K}),H.oneOff&&N.off(M,T.type,l,m),m.apply(K,[T])}}function k(M,l,m=null){return Object.values(M).find(H=>H.callable===l&&H.delegationSelector===m)}function e1(M,l,m){const H=typeof l=="string",T=H?m:l||m;let X=R1(M);return g2.has(X)||(X=M),[H,T,X]}function $(M,l,m,H,T){if(typeof l!="string"||!M)return;let[X,K,N1]=e1(l,m,H);l in G1&&(K=(wy=>function(n6){if(!n6.relatedTarget||n6.relatedTarget!==n6.delegateTarget&&!n6.delegateTarget.contains(n6.relatedTarget))return wy.call(this,n6)})(K));const G2=r2(M),a3=G2[N1]||(G2[N1]={}),l2=k(a3,K,X?m:null);if(l2){l2.oneOff=l2.oneOff&&T;return}const g3=h2(K,l.replace(F1,"")),T3=X?X1(M,m,K):Z1(M,K);T3.delegationSelector=X?m:null,T3.callable=K,T3.oneOff=T,T3.uidEvent=g3,a3[g3]=T3,M.addEventListener(N1,T3,X)}function J(M,l,m,H,T){const X=k(l[m],H,T);!X||(M.removeEventListener(m,X,Boolean(T)),delete l[m][X.uidEvent])}function I1(M,l,m,H){const T=l[m]||{};for(const X of Object.keys(T))if(X.includes(H)){const K=T[X];J(M,l,m,K.callable,K.delegationSelector)}}function R1(M){return M=M.replace(c2,""),G1[M]||M}const N={on(M,l,m,H){$(M,l,m,H,!1)},one(M,l,m,H){$(M,l,m,H,!0)},off(M,l,m,H){if(typeof l!="string"||!M)return;const[T,X,K]=e1(l,m,H),N1=K!==l,G2=r2(M),a3=G2[K]||{},l2=l.startsWith(".");if(typeof X<"u"){if(!Object.keys(a3).length)return;J(M,G2,K,X,T?m:null);return}if(l2)for(const g3 of Object.keys(G2))I1(M,G2,g3,l.slice(1));for(const g3 of Object.keys(a3)){const T3=g3.replace(v1,"");if(!N1||l.includes(T3)){const b8=a3[g3];J(M,G2,K,b8.callable,b8.delegationSelector)}}},trigger(M,l,m){if(typeof l!="string"||!M)return null;const H=r1(),T=R1(l),X=l!==T;let K=null,N1=!0,G2=!0,a3=!1;X&&H&&(K=H.Event(l,m),H(M).trigger(K),N1=!K.isPropagationStopped(),G2=!K.isImmediatePropagationStopped(),a3=K.isDefaultPrevented());let l2=new Event(l,{bubbles:N1,cancelable:!0});return l2=h1(l2,m),a3&&l2.preventDefault(),G2&&M.dispatchEvent(l2),l2.defaultPrevented&&K&&K.preventDefault(),l2}};function h1(M,l){for(const[m,H]of Object.entries(l||{}))try{M[m]=H}catch{Object.defineProperty(M,m,{configurable:!0,get(){return H}})}return M}const g=new Map,b={set(M,l,m){g.has(M)||g.set(M,new Map);const H=g.get(M);if(!H.has(l)&&H.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(H.keys())[0]}.`);return}H.set(l,m)},get(M,l){return g.has(M)&&g.get(M).get(l)||null},remove(M,l){if(!g.has(M))return;const m=g.get(M);m.delete(l),m.size===0&&g.delete(M)}};function _(M){if(M==="true")return!0;if(M==="false")return!1;if(M===Number(M).toString())return Number(M);if(M===""||M==="null")return null;if(typeof M!="string")return M;try{return JSON.parse(decodeURIComponent(M))}catch{return M}}function D(M){return M.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const I={setDataAttribute(M,l,m){M.setAttribute(`data-bs-${D(l)}`,m)},removeDataAttribute(M,l){M.removeAttribute(`data-bs-${D(l)}`)},getDataAttributes(M){if(!M)return{};const l={},m=Object.keys(M.dataset).filter(H=>H.startsWith("bs")&&!H.startsWith("bsConfig"));for(const H of m){let T=H.replace(/^bs/,"");T=T.charAt(0).toLowerCase()+T.slice(1,T.length),l[T]=_(M.dataset[H])}return l},getDataAttribute(M,l){return _(M.getAttribute(`data-bs-${D(l)}`))}};class U{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,m){const H=E(m)?I.getDataAttribute(m,"config"):{};return{...this.constructor.Default,...typeof H=="object"?H:{},...E(m)?I.getDataAttributes(m):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,m=this.constructor.DefaultType){for(const H of Object.keys(m)){const T=m[H],X=l[H],K=E(X)?"element":o(X);if(!new RegExp(T).test(K))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${H}" provided type "${K}" but expected type "${T}".`)}}}const j="5.2.0";class P extends U{constructor(l,m){super(),l=x(l),l&&(this._element=l,this._config=this._getConfig(m),b.set(this._element,this.constructor.DATA_KEY,this))}dispose(){b.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,m,H=!0){S(l,m,H)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return b.get(x(l),this.DATA_KEY)}static getOrCreateInstance(l,m={}){return this.getInstance(l)||new this(l,typeof m=="object"?m:null)}static get VERSION(){return j}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const G=(M,l="hide")=>{const m=`click.dismiss${M.EVENT_KEY}`,H=M.NAME;N.on(document,m,`[data-bs-dismiss="${H}"]`,function(T){if(["A","AREA"].includes(this.tagName)&&T.preventDefault(),A(this))return;const X=v(this)||this.closest(`.${H}`);M.getOrCreateInstance(X)[l]()})},R="alert",t1=".bs.alert",c1=`close${t1}`,Y=`closed${t1}`,m1="fade",S1="show";class k1 extends P{static get NAME(){return R}close(){if(N.trigger(this._element,c1).defaultPrevented)return;this._element.classList.remove(S1);const m=this._element.classList.contains(m1);this._queueCallback(()=>this._destroyElement(),this._element,m)}_destroyElement(){this._element.remove(),N.trigger(this._element,Y),this.dispose()}static jQueryInterface(l){return this.each(function(){const m=k1.getOrCreateInstance(this);if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l](this)}})}}G(k1,"close"),H1(k1);const L1="button",m3=".bs.button",G3=".data-api",s2="active",r5='[data-bs-toggle="button"]',L2=`click${m3}${G3}`;class d2 extends P{static get NAME(){return L1}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(s2))}static jQueryInterface(l){return this.each(function(){const m=d2.getOrCreateInstance(this);l==="toggle"&&m[l]()})}}N.on(document,L2,r5,M=>{M.preventDefault();const l=M.target.closest(r5);d2.getOrCreateInstance(l).toggle()}),H1(d2);const V1={find(M,l=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(l,M))},findOne(M,l=document.documentElement){return Element.prototype.querySelector.call(l,M)},children(M,l){return[].concat(...M.children).filter(m=>m.matches(l))},parents(M,l){const m=[];let H=M.parentNode.closest(l);for(;H;)m.push(H),H=H.parentNode.closest(l);return m},prev(M,l){let m=M.previousElementSibling;for(;m;){if(m.matches(l))return[m];m=m.previousElementSibling}return[]},next(M,l){let m=M.nextElementSibling;for(;m;){if(m.matches(l))return[m];m=m.nextElementSibling}return[]},focusableChildren(M){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(m=>`${m}:not([tabindex^="-"])`).join(",");return this.find(l,M).filter(m=>!A(m)&&y(m))}},Vt="swipe",K3=".bs.swipe",bt=`touchstart${K3}`,g1=`touchmove${K3}`,yt=`touchend${K3}`,wt=`pointerdown${K3}`,St=`pointerup${K3}`,xt="touch",Y3="pen",Nt="pointer-event",_t=40,At={endCallback:null,leftCallback:null,rightCallback:null},Et={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class W5 extends U{constructor(l,m){super(),this._element=l,!(!l||!W5.isSupported())&&(this._config=this._getConfig(m),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return At}static get DefaultType(){return Et}static get NAME(){return Vt}dispose(){N.off(this._element,K3)}_start(l){if(!this._supportPointerEvents){this._deltaX=l.touches[0].clientX;return}this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX)}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),E1(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=_t)return;const m=l/this._deltaX;this._deltaX=0,m&&E1(m>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,wt,l=>this._start(l)),N.on(this._element,St,l=>this._end(l)),this._element.classList.add(Nt)):(N.on(this._element,bt,l=>this._start(l)),N.on(this._element,g1,l=>this._move(l)),N.on(this._element,yt,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType===Y3||l.pointerType===xt)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const r8="carousel",A3=".bs.carousel",v4=".data-api",kt="ArrowLeft",Tt="ArrowRight",It=500,i5="next",E3="prev",g4="left",G5="right",Pt=`slide${A3}`,i8=`slid${A3}`,x1=`keydown${A3}`,Dt=`mouseenter${A3}`,Rt=`mouseleave${A3}`,Ot=`dragstart${A3}`,Bt=`load${A3}${v4}`,Ft=`click${A3}${v4}`,c7="carousel",L4="active",c5="slide",s7="carousel-item-end",k2="carousel-item-start",Ut="carousel-item-next",$t="carousel-item-prev",o7=".active",l7=".carousel-item",C7=o7+l7,qt=".carousel-item img",jt=".carousel-indicators",Wt="[data-bs-slide], [data-bs-slide-to]",f7='[data-bs-ride="carousel"]',Gt={[kt]:G5,[Tt]:g4},u7={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Kt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class z4 extends P{constructor(l,m){super(l,m),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=V1.findOne(jt,this._element),this._addEventListeners(),this._config.ride===c7&&this.cycle()}static get Default(){return u7}static get DefaultType(){return Kt}static get NAME(){return r8}next(){this._slide(i5)}nextWhenVisible(){!document.hidden&&y(this._element)&&this.next()}prev(){this._slide(E3)}pause(){this._isSliding&&w(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!!this._config.ride){if(this._isSliding){N.one(this._element,i8,()=>this.cycle());return}this.cycle()}}to(l){const m=this._getItems();if(l>m.length-1||l<0)return;if(this._isSliding){N.one(this._element,i8,()=>this.to(l));return}const H=this._getItemIndex(this._getActive());if(H===l)return;const T=l>H?i5:E3;this._slide(T,m[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&N.on(this._element,x1,l=>this._keydown(l)),this._config.pause==="hover"&&(N.on(this._element,Dt,()=>this.pause()),N.on(this._element,Rt,()=>this._maybeEnableCycle())),this._config.touch&&W5.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const H of V1.find(qt,this._element))N.on(H,Ot,T=>T.preventDefault());const m={leftCallback:()=>this._slide(this._directionToOrder(g4)),rightCallback:()=>this._slide(this._directionToOrder(G5)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),It+this._config.interval))}};this._swipeHelper=new W5(this._element,m)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const m=Gt[l.key];m&&(l.preventDefault(),this._slide(this._directionToOrder(m)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const m=V1.findOne(o7,this._indicatorsElement);m.classList.remove(L4),m.removeAttribute("aria-current");const H=V1.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);H&&(H.classList.add(L4),H.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const m=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=m||this._config.defaultInterval}_slide(l,m=null){if(this._isSliding)return;const H=this._getActive(),T=l===i5,X=m||$1(this._getItems(),H,T,this._config.wrap);if(X===H)return;const K=this._getItemIndex(X),N1=b8=>N.trigger(this._element,b8,{relatedTarget:X,direction:this._orderToDirection(l),from:this._getItemIndex(H),to:K});if(N1(Pt).defaultPrevented||!H||!X)return;const a3=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(K),this._activeElement=X;const l2=T?k2:s7,g3=T?Ut:$t;X.classList.add(g3),Q(X),H.classList.add(l2),X.classList.add(l2);const T3=()=>{X.classList.remove(l2,g3),X.classList.add(L4),H.classList.remove(L4,g3,l2),this._isSliding=!1,N1(i8)};this._queueCallback(T3,H,this._isAnimated()),a3&&this.cycle()}_isAnimated(){return this._element.classList.contains(c5)}_getActive(){return V1.findOne(C7,this._element)}_getItems(){return V1.find(l7,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return C1()?l===g4?E3:i5:l===g4?i5:E3}_orderToDirection(l){return C1()?l===E3?g4:G5:l===E3?G5:g4}static jQueryInterface(l){return this.each(function(){const m=z4.getOrCreateInstance(this,l);if(typeof l=="number"){m.to(l);return}if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l]()}})}}N.on(document,Ft,Wt,function(M){const l=v(this);if(!l||!l.classList.contains(c7))return;M.preventDefault();const m=z4.getOrCreateInstance(l),H=this.getAttribute("data-bs-slide-to");if(H){m.to(H),m._maybeEnableCycle();return}if(I.getDataAttribute(this,"slide")==="next"){m.next(),m._maybeEnableCycle();return}m.prev(),m._maybeEnableCycle()}),N.on(window,Bt,()=>{const M=V1.find(f7);for(const l of M)z4.getOrCreateInstance(l)}),H1(z4);const Yt="collapse",s5=".bs.collapse",Xt=".data-api",Qt=`show${s5}`,h7=`shown${s5}`,M4=`hide${s5}`,Jt=`hidden${s5}`,d7=`click${s5}${Xt}`,K5="show",H4="collapse",Y5="collapsing",Zt="collapsed",ea=`:scope .${H4} .${H4}`,ta="collapse-horizontal",aa="width",na="height",ra=".collapse.show, .collapse.collapsing",p3='[data-bs-toggle="collapse"]',m7={parent:null,toggle:!0},ia={parent:"(null|element)",toggle:"boolean"};class V4 extends P{constructor(l,m){super(l,m),this._isTransitioning=!1,this._triggerArray=[];const H=V1.find(p3);for(const T of H){const X=p(T),K=V1.find(X).filter(N1=>N1===this._element);X!==null&&K.length&&this._triggerArray.push(T)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return m7}static get DefaultType(){return ia}static get NAME(){return Yt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(ra).filter(N1=>N1!==this._element).map(N1=>V4.getOrCreateInstance(N1,{toggle:!1}))),l.length&&l[0]._isTransitioning||N.trigger(this._element,Qt).defaultPrevented)return;for(const N1 of l)N1.hide();const H=this._getDimension();this._element.classList.remove(H4),this._element.classList.add(Y5),this._element.style[H]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const T=()=>{this._isTransitioning=!1,this._element.classList.remove(Y5),this._element.classList.add(H4,K5),this._element.style[H]="",N.trigger(this._element,h7)},K=`scroll${H[0].toUpperCase()+H.slice(1)}`;this._queueCallback(T,this._element,!0),this._element.style[H]=`${this._element[K]}px`}hide(){if(this._isTransitioning||!this._isShown()||N.trigger(this._element,M4).defaultPrevented)return;const m=this._getDimension();this._element.style[m]=`${this._element.getBoundingClientRect()[m]}px`,Q(this._element),this._element.classList.add(Y5),this._element.classList.remove(H4,K5);for(const T of this._triggerArray){const X=v(T);X&&!this._isShown(X)&&this._addAriaAndCollapsedClass([T],!1)}this._isTransitioning=!0;const H=()=>{this._isTransitioning=!1,this._element.classList.remove(Y5),this._element.classList.add(H4),N.trigger(this._element,Jt)};this._element.style[m]="",this._queueCallback(H,this._element,!0)}_isShown(l=this._element){return l.classList.contains(K5)}_configAfterMerge(l){return l.toggle=Boolean(l.toggle),l.parent=x(l.parent),l}_getDimension(){return this._element.classList.contains(ta)?aa:na}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(p3);for(const m of l){const H=v(m);H&&this._addAriaAndCollapsedClass([m],this._isShown(H))}}_getFirstLevelChildren(l){const m=V1.find(ea,this._config.parent);return V1.find(l,this._config.parent).filter(H=>!m.includes(H))}_addAriaAndCollapsedClass(l,m){if(!!l.length)for(const H of l)H.classList.toggle(Zt,!m),H.setAttribute("aria-expanded",m)}static jQueryInterface(l){const m={};return typeof l=="string"&&/show|hide/.test(l)&&(m.toggle=!1),this.each(function(){const H=V4.getOrCreateInstance(this,m);if(typeof l=="string"){if(typeof H[l]>"u")throw new TypeError(`No method named "${l}"`);H[l]()}})}}N.on(document,d7,p3,function(M){(M.target.tagName==="A"||M.delegateTarget&&M.delegateTarget.tagName==="A")&&M.preventDefault();const l=p(this),m=V1.find(l);for(const H of m)V4.getOrCreateInstance(H,{toggle:!1}).toggle()}),H1(V4);const p7="dropdown",X3=".bs.dropdown",c8=".data-api",ca="Escape",v7="Tab",sa="ArrowUp",g7="ArrowDown",oa=2,la=`hide${X3}`,Ca=`hidden${X3}`,L7=`show${X3}`,fa=`shown${X3}`,s8=`click${X3}${c8}`,z7=`keydown${X3}${c8}`,ua=`keyup${X3}${c8}`,b4="show",y4="dropup",ha="dropend",da="dropstart",ma="dropup-center",pa="dropdown-center",X5='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',va=`${X5}.${b4}`,M7=".dropdown-menu",ga=".navbar",La=".navbar-nav",o8=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",H7=C1()?"top-end":"top-start",za=C1()?"top-start":"top-end",Ma=C1()?"bottom-end":"bottom-start",Ha=C1()?"bottom-start":"bottom-end",V7=C1()?"left-start":"right-start",Va=C1()?"right-start":"left-start",l8="top",b7="bottom",y7={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},C8={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class e3 extends P{constructor(l,m){super(l,m),this._popper=null,this._parent=this._element.parentNode,this._menu=V1.findOne(M7,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return y7}static get DefaultType(){return C8}static get NAME(){return p7}toggle(){return this._isShown()?this.hide():this.show()}show(){if(A(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!N.trigger(this._element,L7,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(La))for(const H of[].concat(...document.body.children))N.on(H,"mouseover",F);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(b4),this._element.classList.add(b4),N.trigger(this._element,fa,l)}}hide(){if(A(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!N.trigger(this._element,la,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const H of[].concat(...document.body.children))N.off(H,"mouseover",F);this._popper&&this._popper.destroy(),this._menu.classList.remove(b4),this._element.classList.remove(b4),this._element.setAttribute("aria-expanded","false"),I.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,Ca,l)}}_getConfig(l){if(l=super._getConfig(l),typeof l.reference=="object"&&!E(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${p7.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(typeof r>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let l=this._element;this._config.reference==="parent"?l=this._parent:E(this._config.reference)?l=x(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const m=this._getPopperConfig();this._popper=r.createPopper(l,this._menu,m)}_isShown(){return this._menu.classList.contains(b4)}_getPlacement(){const l=this._parent;if(l.classList.contains(ha))return V7;if(l.classList.contains(da))return Va;if(l.classList.contains(ma))return l8;if(l.classList.contains(pa))return b7;const m=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains(y4)?m?za:H7:m?Ha:Ma}_detectNavbar(){return this._element.closest(ga)!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(m=>Number.parseInt(m,10)):typeof l=="function"?m=>l(m,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(I.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...typeof this._config.popperConfig=="function"?this._config.popperConfig(l):this._config.popperConfig}}_selectMenuItem({key:l,target:m}){const H=V1.find(o8,this._menu).filter(T=>y(T));!H.length||$1(H,m,l===g7,!H.includes(m)).focus()}static jQueryInterface(l){return this.each(function(){const m=e3.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof m[l]>"u")throw new TypeError(`No method named "${l}"`);m[l]()}})}static clearMenus(l){if(l.button===oa||l.type==="keyup"&&l.key!==v7)return;const m=V1.find(va);for(const H of m){const T=e3.getInstance(H);if(!T||T._config.autoClose===!1)continue;const X=l.composedPath(),K=X.includes(T._menu);if(X.includes(T._element)||T._config.autoClose==="inside"&&!K||T._config.autoClose==="outside"&&K||T._menu.contains(l.target)&&(l.type==="keyup"&&l.key===v7||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const N1={relatedTarget:T._element};l.type==="click"&&(N1.clickEvent=l),T._completeHide(N1)}}static dataApiKeydownHandler(l){const m=/input|textarea/i.test(l.target.tagName),H=l.key===ca,T=[sa,g7].includes(l.key);if(!T&&!H||m&&!H)return;l.preventDefault();const X=V1.findOne(X5,l.delegateTarget.parentNode),K=e3.getOrCreateInstance(X);if(T){l.stopPropagation(),K.show(),K._selectMenuItem(l);return}K._isShown()&&(l.stopPropagation(),K.hide(),X.focus())}}N.on(document,z7,X5,e3.dataApiKeydownHandler),N.on(document,z7,M7,e3.dataApiKeydownHandler),N.on(document,s8,e3.clearMenus),N.on(document,ua,e3.clearMenus),N.on(document,s8,X5,function(M){M.preventDefault(),e3.getOrCreateInstance(this).toggle()}),H1(e3);const w7=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",S7=".sticky-top",Q3="padding-right",x7="margin-right";class f8{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Q3,m=>m+l),this._setElementAttributes(w7,Q3,m=>m+l),this._setElementAttributes(S7,x7,m=>m-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Q3),this._resetElementAttributes(w7,Q3),this._resetElementAttributes(S7,x7)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,m,H){const T=this.getWidth(),X=K=>{if(K!==this._element&&window.innerWidth>K.clientWidth+T)return;this._saveInitialAttribute(K,m);const N1=window.getComputedStyle(K).getPropertyValue(m);K.style.setProperty(m,`${H(Number.parseFloat(N1))}px`)};this._applyManipulationCallback(l,X)}_saveInitialAttribute(l,m){const H=l.style.getPropertyValue(m);H&&I.setDataAttribute(l,m,H)}_resetElementAttributes(l,m){const H=T=>{const X=I.getDataAttribute(T,m);if(X===null){T.style.removeProperty(m);return}I.removeDataAttribute(T,m),T.style.setProperty(m,X)};this._applyManipulationCallback(l,H)}_applyManipulationCallback(l,m){if(E(l)){m(l);return}for(const H of V1.find(l,this._element))m(H)}}const N7="backdrop",ba="fade",u8="show",_7=`mousedown.bs.${N7}`,ya={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},wa={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Q5 extends U{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return ya}static get DefaultType(){return wa}static get NAME(){return N7}show(l){if(!this._config.isVisible){E1(l);return}this._append();const m=this._getElement();this._config.isAnimated&&Q(m),m.classList.add(u8),this._emulateAnimation(()=>{E1(l)})}hide(l){if(!this._config.isVisible){E1(l);return}this._getElement().classList.remove(u8),this._emulateAnimation(()=>{this.dispose(),E1(l)})}dispose(){!this._isAppended||(N.off(this._element,_7),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add(ba),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=x(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),N.on(l,_7,()=>{E1(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){S(l,this._getElement(),this._config.isAnimated)}}const A7="focustrap",J5=".bs.focustrap",Sa=`focusin${J5}`,xa=`keydown.tab${J5}`,Na="Tab",_a="forward",E7="backward",k7={autofocus:!0,trapElement:null},Aa={autofocus:"boolean",trapElement:"element"};class T7 extends U{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return k7}static get DefaultType(){return Aa}static get NAME(){return A7}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,J5),N.on(document,Sa,l=>this._handleFocusin(l)),N.on(document,xa,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,N.off(document,J5))}_handleFocusin(l){const{trapElement:m}=this._config;if(l.target===document||l.target===m||m.contains(l.target))return;const H=V1.focusableChildren(m);H.length===0?m.focus():this._lastTabNavDirection===E7?H[H.length-1].focus():H[0].focus()}_handleKeydown(l){l.key===Na&&(this._lastTabNavDirection=l.shiftKey?E7:_a)}}const Ea="modal",t3=".bs.modal",I7=".data-api",ka="Escape",Ta=`hide${t3}`,Ia=`hidePrevented${t3}`,h8=`hidden${t3}`,Z5=`show${t3}`,Pa=`shown${t3}`,Da=`resize${t3}`,Ra=`mousedown.dismiss${t3}`,P7=`keydown.dismiss${t3}`,Oa=`click${t3}${I7}`,D7="modal-open",o5="fade",d8="show",m8="modal-static",e6=".modal.show",Ba=".modal-dialog",Fa=".modal-body",Ua='[data-bs-toggle="modal"]',R7={backdrop:!0,focus:!0,keyboard:!0},$a={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class J3 extends P{constructor(l,m){super(l,m),this._dialog=V1.findOne(Ba,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new f8,this._addEventListeners()}static get Default(){return R7}static get DefaultType(){return $a}static get NAME(){return Ea}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||N.trigger(this._element,Z5,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(D7),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){!this._isShown||this._isTransitioning||N.trigger(this._element,Ta).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(d8),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const l of[window,this._dialog])N.off(l,t3);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Q5({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new T7({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const m=V1.findOne(Fa,this._dialog);m&&(m.scrollTop=0),Q(this._element),this._element.classList.add(d8);const H=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,Pa,{relatedTarget:l})};this._queueCallback(H,this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,P7,l=>{if(l.key===ka){if(this._config.keyboard){l.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),N.on(window,Da,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),N.on(this._element,Ra,l=>{if(l.target===l.currentTarget){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(D7),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,h8)})}_isAnimated(){return this._element.classList.contains(o5)}_triggerBackdropTransition(){if(N.trigger(this._element,Ia).defaultPrevented)return;const m=this._element.scrollHeight>document.documentElement.clientHeight,H=this._element.style.overflowY;H==="hidden"||this._element.classList.contains(m8)||(m||(this._element.style.overflowY="hidden"),this._element.classList.add(m8),this._queueCallback(()=>{this._element.classList.remove(m8),this._queueCallback(()=>{this._element.style.overflowY=H},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,m=this._scrollBar.getWidth(),H=m>0;if(H&&!l){const T=C1()?"paddingLeft":"paddingRight";this._element.style[T]=`${m}px`}if(!H&&l){const T=C1()?"paddingRight":"paddingLeft";this._element.style[T]=`${m}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,m){return this.each(function(){const H=J3.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof H[l]>"u")throw new TypeError(`No method named "${l}"`);H[l](m)}})}}N.on(document,Oa,Ua,function(M){const l=v(this);["A","AREA"].includes(this.tagName)&&M.preventDefault(),N.one(l,Z5,T=>{T.defaultPrevented||N.one(l,h8,()=>{y(this)&&this.focus()})});const m=V1.findOne(e6);m&&J3.getInstance(m).hide(),J3.getOrCreateInstance(l).toggle(this)}),G(J3),H1(J3);const qa="offcanvas",C3=".bs.offcanvas",p8=".data-api",Wa=`load${C3}${p8}`,Ga="Escape",O7="show",B7="showing",F7="hiding",Ka="offcanvas-backdrop",U7=".offcanvas.show",Ya=`show${C3}`,Xa=`shown${C3}`,Qa=`hide${C3}`,$7=`hidePrevented${C3}`,v8=`hidden${C3}`,g8=`resize${C3}`,q7=`click${C3}${p8}`,L8=`keydown.dismiss${C3}`,w4='[data-bs-toggle="offcanvas"]',Ja={backdrop:!0,keyboard:!0,scroll:!1},Za={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class v3 extends P{constructor(l,m){super(l,m),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ja}static get DefaultType(){return Za}static get NAME(){return qa}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){if(this._isShown||N.trigger(this._element,Ya,{relatedTarget:l}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new f8().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(B7);const H=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(O7),this._element.classList.remove(B7),N.trigger(this._element,Xa,{relatedTarget:l})};this._queueCallback(H,this._element,!0)}hide(){if(!this._isShown||N.trigger(this._element,Qa).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(F7),this._backdrop.hide();const m=()=>{this._element.classList.remove(O7,F7),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new f8().reset(),N.trigger(this._element,v8)};this._queueCallback(m,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=()=>{if(this._config.backdrop==="static"){N.trigger(this._element,$7);return}this.hide()},m=Boolean(this._config.backdrop);return new Q5({className:Ka,isVisible:m,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:m?l:null})}_initializeFocusTrap(){return new T7({trapElement:this._element})}_addEventListeners(){N.on(this._element,L8,l=>{if(l.key===Ga){if(!this._config.keyboard){N.trigger(this._element,$7);return}this.hide()}})}static jQueryInterface(l){return this.each(function(){const m=v3.getOrCreateInstance(this,l);if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l](this)}})}}N.on(document,q7,w4,function(M){const l=v(this);if(["A","AREA"].includes(this.tagName)&&M.preventDefault(),A(this))return;N.one(l,v8,()=>{y(this)&&this.focus()});const m=V1.findOne(U7);m&&m!==l&&v3.getInstance(m).hide(),v3.getOrCreateInstance(l).toggle(this)}),N.on(window,Wa,()=>{for(const M of V1.find(U7))v3.getOrCreateInstance(M).show()}),N.on(window,g8,()=>{for(const M of V1.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(M).position!=="fixed"&&v3.getOrCreateInstance(M).hide()}),G(v3),H1(v3);const en=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),tn=/^aria-[\w-]*$/i,an=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,nn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,t6=(M,l)=>{const m=M.nodeName.toLowerCase();return l.includes(m)?en.has(m)?Boolean(an.test(M.nodeValue)||nn.test(M.nodeValue)):!0:l.filter(H=>H instanceof RegExp).some(H=>H.test(m))},C={"*":["class","dir","id","lang","role",tn],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function f(M,l,m){if(!M.length)return M;if(m&&typeof m=="function")return m(M);const T=new window.DOMParser().parseFromString(M,"text/html"),X=[].concat(...T.body.querySelectorAll("*"));for(const K of X){const N1=K.nodeName.toLowerCase();if(!Object.keys(l).includes(N1)){K.remove();continue}const G2=[].concat(...K.attributes),a3=[].concat(l["*"]||[],l[N1]||[]);for(const l2 of G2)t6(l2,a3)||K.removeAttribute(l2.nodeName)}return T.body.innerHTML}const d="TemplateFactory",z={allowList:C,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},O={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},l1={entry:"(string|element|function|null)",selector:"(string|element)"};class o2 extends U{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return z}static get DefaultType(){return O}static get NAME(){return d}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[T,X]of Object.entries(this._config.content))this._setContent(l,X,T);const m=l.children[0],H=this._resolvePossibleFunction(this._config.extraClass);return H&&m.classList.add(...H.split(" ")),m}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[m,H]of Object.entries(l))super._typeCheckConfig({selector:m,entry:H},l1)}_setContent(l,m,H){const T=V1.findOne(H,l);if(!!T){if(m=this._resolvePossibleFunction(m),!m){T.remove();return}if(E(m)){this._putElementInTemplate(x(m),T);return}if(this._config.html){T.innerHTML=this._maybeSanitize(m);return}T.textContent=m}}_maybeSanitize(l){return this._config.sanitize?f(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return typeof l=="function"?l(this):l}_putElementInTemplate(l,m){if(this._config.html){m.innerHTML="",m.append(l);return}m.textContent=l.textContent}}const R2="tooltip",b2=new Set(["sanitize","allowList","sanitizeFn"]),k3="fade",z8="modal",j7="show",vb=".tooltip-inner",Qs=`.${z8}`,Js="hide.bs.modal",M8="hover",rn="focus",gb="click",Lb="manual",zb="hide",Mb="hidden",Hb="show",Vb="shown",bb="inserted",yb="click",wb="focusin",Sb="focusout",xb="mouseenter",Nb="mouseleave",_b={AUTO:"auto",TOP:"top",RIGHT:C1()?"left":"right",BOTTOM:"bottom",LEFT:C1()?"right":"left"},Ab={allowList:C,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Eb={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class l5 extends P{constructor(l,m){if(typeof r>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(l,m),this._isEnabled=!0,this._timeout=0,this._isHovered=!1,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return Ab}static get DefaultType(){return Eb}static get NAME(){return R2}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(l){if(!!this._isEnabled){if(l){const m=this._initializeOnDelegatedTarget(l);m._activeTrigger.click=!m._activeTrigger.click,m._isWithActiveTrigger()?m._enter():m._leave();return}if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(Qs),Js,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const l=N.trigger(this._element,this.constructor.eventName(Hb)),H=(B(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!H)return;this.tip&&(this.tip.remove(),this.tip=null);const T=this._getTipElement();this._element.setAttribute("aria-describedby",T.getAttribute("id"));const{container:X}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(X.append(T),N.trigger(this._element,this.constructor.eventName(bb))),this._popper?this._popper.update():this._popper=this._createPopper(T),T.classList.add(j7),"ontouchstart"in document.documentElement)for(const N1 of[].concat(...document.body.children))N.on(N1,"mouseover",F);const K=()=>{const N1=this._isHovered;this._isHovered=!1,N.trigger(this._element,this.constructor.eventName(Vb)),N1&&this._leave()};this._queueCallback(K,this.tip,this._isAnimated())}hide(){if(!this._isShown()||N.trigger(this._element,this.constructor.eventName(zb)).defaultPrevented)return;const m=this._getTipElement();if(m.classList.remove(j7),"ontouchstart"in document.documentElement)for(const T of[].concat(...document.body.children))N.off(T,"mouseover",F);this._activeTrigger[gb]=!1,this._activeTrigger[rn]=!1,this._activeTrigger[M8]=!1,this._isHovered=!1;const H=()=>{this._isWithActiveTrigger()||(this._isHovered||m.remove(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName(Mb)),this._disposePopper())};this._queueCallback(H,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const m=this._getTemplateFactory(l).toHtml();if(!m)return null;m.classList.remove(k3,j7),m.classList.add(`bs-${this.constructor.NAME}-auto`);const H=u(this.constructor.NAME).toString();return m.setAttribute("id",H),this._isAnimated()&&m.classList.add(k3),m}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new o2({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[vb]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(k3)}_isShown(){return this.tip&&this.tip.classList.contains(j7)}_createPopper(l){const m=typeof this._config.placement=="function"?this._config.placement.call(this,l,this._element):this._config.placement,H=_b[m.toUpperCase()];return r.createPopper(this._element,l,this._getPopperConfig(H))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(m=>Number.parseInt(m,10)):typeof l=="function"?m=>l(m,this._element):l}_resolvePossibleFunction(l){return typeof l=="function"?l.call(this._element):l}_getPopperConfig(l){const m={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:H=>{this._getTipElement().setAttribute("data-popper-placement",H.state.placement)}}]};return{...m,...typeof this._config.popperConfig=="function"?this._config.popperConfig(m):this._config.popperConfig}}_setListeners(){const l=this._config.trigger.split(" ");for(const m of l)if(m==="click")N.on(this._element,this.constructor.eventName(yb),this._config.selector,H=>this.toggle(H));else if(m!==Lb){const H=m===M8?this.constructor.eventName(xb):this.constructor.eventName(wb),T=m===M8?this.constructor.eventName(Nb):this.constructor.eventName(Sb);N.on(this._element,H,this._config.selector,X=>{const K=this._initializeOnDelegatedTarget(X);K._activeTrigger[X.type==="focusin"?rn:M8]=!0,K._enter()}),N.on(this._element,T,this._config.selector,X=>{const K=this._initializeOnDelegatedTarget(X);K._activeTrigger[X.type==="focusout"?rn:M8]=K._element.contains(X.relatedTarget),K._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(Qs),Js,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const l=this._config.originalTitle;!l||(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",l),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,m){clearTimeout(this._timeout),this._timeout=setTimeout(l,m)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const m=I.getDataAttributes(this._element);for(const H of Object.keys(m))b2.has(H)&&delete m[H];return l={...m,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:x(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),l.originalTitle=this._element.getAttribute("title")||"",typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const m in this._config)this.constructor.Default[m]!==this._config[m]&&(l[m]=this._config[m]);return l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(l){return this.each(function(){const m=l5.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof m[l]>"u")throw new TypeError(`No method named "${l}"`);m[l]()}})}}H1(l5);const kb="popover",Tb=".popover-header",Ib=".popover-body",Pb={...l5.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Db={...l5.DefaultType,content:"(null|string|element|function)"};class W7 extends l5{static get Default(){return Pb}static get DefaultType(){return Db}static get NAME(){return kb}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Tb]:this._getTitle(),[Ib]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const m=W7.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof m[l]>"u")throw new TypeError(`No method named "${l}"`);m[l]()}})}}H1(W7);const Rb="scrollspy",cn=".bs.scrollspy",Ob=".data-api",Bb=`activate${cn}`,Zs=`click${cn}`,Fb=`load${cn}${Ob}`,Ub="dropdown-item",a6="active",$b='[data-bs-spy="scroll"]',sn="[href]",qb=".nav, .list-group",eo=".nav-link",jb=`${eo}, .nav-item > ${eo}, .list-group-item`,Wb=".dropdown",Gb=".dropdown-toggle",Kb={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null},Yb={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element"};class H8 extends P{constructor(l,m){super(l,m),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Kb}static get DefaultType(){return Yb}static get NAME(){return Rb}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=x(l.target)||document.body,l}_maybeEnableSmoothScroll(){!this._config.smoothScroll||(N.off(this._config.target,Zs),N.on(this._config.target,Zs,sn,l=>{const m=this._observableSections.get(l.target.hash);if(m){l.preventDefault();const H=this._rootElement||window,T=m.offsetTop-this._element.offsetTop;if(H.scrollTo){H.scrollTo({top:T,behavior:"smooth"});return}H.scrollTop=T}}))}_getNewObserver(){const l={root:this._rootElement,threshold:[.1,.5,1],rootMargin:this._getRootMargin()};return new IntersectionObserver(m=>this._observerCallback(m),l)}_observerCallback(l){const m=K=>this._targetLinks.get(`#${K.target.id}`),H=K=>{this._previousScrollData.visibleEntryTop=K.target.offsetTop,this._process(m(K))},T=(this._rootElement||document.documentElement).scrollTop,X=T>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=T;for(const K of l){if(!K.isIntersecting){this._activeTarget=null,this._clearActiveClass(m(K));continue}const N1=K.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(X&&N1){if(H(K),!T)return;continue}!X&&!N1&&H(K)}}_getRootMargin(){return this._config.offset?`${this._config.offset}px 0px -30%`:this._config.rootMargin}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=V1.find(sn,this._config.target);for(const m of l){if(!m.hash||A(m))continue;const H=V1.findOne(m.hash,this._element);y(H)&&(this._targetLinks.set(m.hash,m),this._observableSections.set(m.hash,H))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(a6),this._activateParents(l),N.trigger(this._element,Bb,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains(Ub)){V1.findOne(Gb,l.closest(Wb)).classList.add(a6);return}for(const m of V1.parents(l,qb))for(const H of V1.prev(m,jb))H.classList.add(a6)}_clearActiveClass(l){l.classList.remove(a6);const m=V1.find(`${sn}.${a6}`,l);for(const H of m)H.classList.remove(a6)}static jQueryInterface(l){return this.each(function(){const m=H8.getOrCreateInstance(this,l);if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l]()}})}}N.on(window,Fb,()=>{for(const M of V1.find($b))H8.getOrCreateInstance(M)}),H1(H8);const Xb="tab",C5=".bs.tab",Qb=`hide${C5}`,Jb=`hidden${C5}`,Zb=`show${C5}`,ey=`shown${C5}`,ty=`click${C5}`,ay=`keydown${C5}`,ny=`load${C5}`,ry="ArrowLeft",to="ArrowRight",iy="ArrowUp",ao="ArrowDown",S4="active",no="fade",on="show",cy="dropdown",sy=".dropdown-toggle",oy=".dropdown-menu",ly=".dropdown-item",ln=":not(.dropdown-toggle)",Cy='.list-group, .nav, [role="tablist"]',fy=".nav-item, .list-group-item",uy=`.nav-link${ln}, .list-group-item${ln}, [role="tab"]${ln}`,ro='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Cn=`${uy}, ${ro}`,hy=`.${S4}[data-bs-toggle="tab"], .${S4}[data-bs-toggle="pill"], .${S4}[data-bs-toggle="list"]`;class f5 extends P{constructor(l){super(l),this._parent=this._element.closest(Cy),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,ay,m=>this._keydown(m)))}static get NAME(){return Xb}show(){const l=this._element;if(this._elemIsActive(l))return;const m=this._getActiveElem(),H=m?N.trigger(m,Qb,{relatedTarget:l}):null;N.trigger(l,Zb,{relatedTarget:m}).defaultPrevented||H&&H.defaultPrevented||(this._deactivate(m,l),this._activate(l,m))}_activate(l,m){if(!l)return;l.classList.add(S4),this._activate(v(l));const H=()=>{if(l.getAttribute("role")!=="tab"){l.classList.add(on);return}l.focus(),l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),N.trigger(l,ey,{relatedTarget:m})};this._queueCallback(H,l,l.classList.contains(no))}_deactivate(l,m){if(!l)return;l.classList.remove(S4),l.blur(),this._deactivate(v(l));const H=()=>{if(l.getAttribute("role")!=="tab"){l.classList.remove(on);return}l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),N.trigger(l,Jb,{relatedTarget:m})};this._queueCallback(H,l,l.classList.contains(no))}_keydown(l){if(![ry,to,iy,ao].includes(l.key))return;l.stopPropagation(),l.preventDefault();const m=[to,ao].includes(l.key),H=$1(this._getChildren().filter(T=>!A(T)),l.target,m,!0);H&&f5.getOrCreateInstance(H).show()}_getChildren(){return V1.find(Cn,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,m){this._setAttributeIfNotExists(l,"role","tablist");for(const H of m)this._setInitialAttributesOnChild(H)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const m=this._elemIsActive(l),H=this._getOuterElement(l);l.setAttribute("aria-selected",m),H!==l&&this._setAttributeIfNotExists(H,"role","presentation"),m||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const m=v(l);!m||(this._setAttributeIfNotExists(m,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(m,"aria-labelledby",`#${l.id}`))}_toggleDropDown(l,m){const H=this._getOuterElement(l);if(!H.classList.contains(cy))return;const T=(X,K)=>{const N1=V1.findOne(X,H);N1&&N1.classList.toggle(K,m)};T(sy,S4),T(oy,on),T(ly,S4),H.setAttribute("aria-expanded",m)}_setAttributeIfNotExists(l,m,H){l.hasAttribute(m)||l.setAttribute(m,H)}_elemIsActive(l){return l.classList.contains(S4)}_getInnerElement(l){return l.matches(Cn)?l:V1.findOne(Cn,l)}_getOuterElement(l){return l.closest(fy)||l}static jQueryInterface(l){return this.each(function(){const m=f5.getOrCreateInstance(this);if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l]()}})}}N.on(document,ty,ro,function(M){["A","AREA"].includes(this.tagName)&&M.preventDefault(),!A(this)&&f5.getOrCreateInstance(this).show()}),N.on(window,ny,()=>{for(const M of V1.find(hy))f5.getOrCreateInstance(M)}),H1(f5);const dy="toast",x4=".bs.toast",my=`mouseover${x4}`,py=`mouseout${x4}`,vy=`focusin${x4}`,gy=`focusout${x4}`,Ly=`hide${x4}`,zy=`hidden${x4}`,My=`show${x4}`,Hy=`shown${x4}`,Vy="fade",io="hide",G7="show",K7="showing",by={animation:"boolean",autohide:"boolean",delay:"number"},yy={animation:!0,autohide:!0,delay:5e3};class V8 extends P{constructor(l,m){super(l,m),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return yy}static get DefaultType(){return by}static get NAME(){return dy}show(){if(N.trigger(this._element,My).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Vy);const m=()=>{this._element.classList.remove(K7),N.trigger(this._element,Hy),this._maybeScheduleHide()};this._element.classList.remove(io),Q(this._element),this._element.classList.add(G7,K7),this._queueCallback(m,this._element,this._config.animation)}hide(){if(!this.isShown()||N.trigger(this._element,Ly).defaultPrevented)return;const m=()=>{this._element.classList.add(io),this._element.classList.remove(K7,G7),N.trigger(this._element,zy)};this._element.classList.add(K7),this._queueCallback(m,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(G7),super.dispose()}isShown(){return this._element.classList.contains(G7)}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(l,m){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=m;break;case"focusin":case"focusout":this._hasKeyboardInteraction=m;break}if(m){this._clearTimeout();return}const H=l.relatedTarget;this._element===H||this._element.contains(H)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,my,l=>this._onInteraction(l,!0)),N.on(this._element,py,l=>this._onInteraction(l,!1)),N.on(this._element,vy,l=>this._onInteraction(l,!0)),N.on(this._element,gy,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const m=V8.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof m[l]>"u")throw new TypeError(`No method named "${l}"`);m[l](this)}})}}return G(V8),H1(V8),{Alert:k1,Button:d2,Carousel:z4,Collapse:V4,Dropdown:e3,Modal:J3,Offcanvas:v3,Popover:W7,ScrollSpy:H8,Tab:f5,Toast:V8,Tooltip:l5}})})(Lu1);GO.add(Tn1,mu1);GS(ND).use(uR).use(pu1).component("fa",lB).mount("#app");export{gh1 as A,zh1 as B,Mh1 as C,vd as D,yT as E,u3 as F,a2 as G,bT as I,Hh1 as T,j5 as _,hi as a,V as b,$2 as c,Wf as d,vh1 as e,_1 as f,w2 as g,Lh1 as h,b9 as i,Q2 as j,li as k,n2 as l,Vh1 as m,Ci as n,P2 as o,oi as p,Ef as q,e4 as r,bh1 as s,On as t,Zo as u,ph1 as v,mh1 as w,jw as x,Zx as y,mC as z};