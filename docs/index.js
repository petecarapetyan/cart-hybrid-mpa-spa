/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$8=Symbol();class s$6{constructor(t,s){if(s!==e$8)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return t$3&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n$8=new Map,o$6=t=>{let o=n$8.get(t);return void 0===o&&n$8.set(t,o=new s$6(t,e$8)),o},r$4=t=>o$6("string"==typeof t?t:t+""),i$5=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,o)=>e+(t=>{if(t instanceof s$6)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1]),t[0]);return o$6(n)},S$1=(e,s)=>{t$3?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,e.appendChild(s);}));},u$1=t$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$5,e$7,h$3,r$3;const o$5={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$7=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$5,reflect:!1,hasChanged:n$7};class a$4 extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u();}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const h=this[t];this[i]=e,this.requestUpdate(t,h,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(u$1(i));}else void 0!==i&&s.push(u$1(i));return s}static Πp(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1);}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0);}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t));}attributeChangedCallback(t,i,s){this.K(t,s);}Πj(t,i,s=l$2){var e,h;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:o$5.toAttribute)(i,s.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null;}}K(t,i){var s,e,h;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:o$5.fromAttribute;this.Πh=n,this[n]=a(i,t.type),this.Πh=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$7)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq());}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo;}catch(t){Promise.reject(t);}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$();}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s);}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}Π$(){this.L=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return !0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$();}updated(t){}firstUpdated(t){}}a$4.finalized=!0,a$4.elementProperties=new Map,a$4.elementStyles=[],a$4.shadowRootOptions={mode:"open"},null===(e$7=(s$5=globalThis).reactiveElementPlatformSupport)||void 0===e$7||e$7.call(s$5,{ReactiveElement:a$4}),(null!==(h$3=(r$3=globalThis).reactiveElementVersions)&&void 0!==h$3?h$3:r$3.reactiveElementVersions=[]).push("1.0.0-rc.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2,i$4,s$4,e$6;const o$4=globalThis.trustedTypes,l$1=o$4?o$4.createPolicy("lit-html",{createHTML:t=>t}):void 0,n$6=`lit$${(Math.random()+"").slice(9)}$`,h$2="?"+n$6,r$2=`<${h$2}>`,u=document,c$2=(t="")=>u.createComment(t),d$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,a$3=t=>{var i;return v(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,g=/"/g,y=/^(?:script|style|textarea)$/i,b=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),T=b(1),w=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),P=new WeakMap,V=(t,i,s)=>{var e,o;const l=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=l._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;l._$litPart$=n=new C(i.insertBefore(c$2(),t),t,void 0,s);}return n.I(t),n},E=u.createTreeWalker(u,129,null,!1),M=(t,i)=>{const s=t.length-1,e=[];let o,h=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let l,c,d=-1,v=0;for(;v<s.length&&(u.lastIndex=v,c=u.exec(s),null!==c);)v=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(o=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=o?o:f,d=-1):void 0===c[1]?d=-2:(d=u.lastIndex-c[2].length,l=c[1],u=void 0===c[3]?p:'"'===c[3]?g:$):u===g||u===$?u=p:u===_||u===m?u=f:(u=p,o=void 0);const a=u===p&&t[i+1].startsWith("/>")?" ":"";h+=u===f?s+r$2:d>=0?(e.push(l),s.slice(0,d)+"$lit$"+s.slice(d)+n$6+a):s+n$6+(-2===d?(e.push(void 0),i):a);}const c=h+(t[s]||"<?>")+(2===i?"</svg>":"");return [void 0!==l$1?l$1.createHTML(c):c,e]};class N{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let l=0,r=0;const u=t.length-1,d=this.parts,[v,a]=M(t,i);if(this.el=N.createElement(v,s),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(e=E.nextNode())&&d.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(n$6)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(n$6),i=/([.?@])?(.*)/.exec(s);d.push({type:1,index:l,name:i[2],strings:t,ctor:"."===i[1]?I:"?"===i[1]?L:"@"===i[1]?R:H});}else d.push({type:6,index:l});}for(const i of t)e.removeAttribute(i);}if(y.test(e.tagName)){const t=e.textContent.split(n$6),i=t.length-1;if(i>0){e.textContent=o$4?o$4.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],c$2()),E.nextNode(),d.push({type:2,index:++l});e.append(t[i],c$2());}}}else if(8===e.nodeType)if(e.data===h$2)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=e.data.indexOf(n$6,t+1));)d.push({type:7,index:l}),t+=n$6.length-1;}l++;}}static createElement(t,i){const s=u.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,l,n,h;if(i===w)return i;let r=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const u=d$1(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(l=null==r?void 0:r.O)||void 0===l||l.call(r,!1),void 0===u?r=void 0:(r=new u(t),r.T(t,s,e)),void 0!==e?(null!==(n=(h=s).Σi)&&void 0!==n?n:h.Σi=[])[e]=r:s.Σo=r),void 0!==r&&(i=S(t,r.S(t,i.values),r,e)),i}class k{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i;}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:u).importNode(s,!0);E.currentNode=o;let l=E.nextNode(),n=0,h=0,r=e[0];for(;void 0!==r;){if(n===r.index){let i;2===r.type?i=new C(l,l.nextSibling,this,t):1===r.type?i=new r.ctor(l,r.name,r.strings,this,t):6===r.type&&(i=new z(l,this,t)),this.l.push(i),r=e[++h];}n!==(null==r?void 0:r.index)&&(l=E.nextNode(),n++);}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++;}}class C{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e;}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t);}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=S(this,t,i),d$1(t)?t===A||null==t||""===t?(this.H!==A&&this.R(),this.H=A):t!==this.H&&t!==w&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a$3(t)?this.g(t):this.m(t);}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t));}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(u.createTextNode(t)),this.H=t;}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=N.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else {const t=new k(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t;}}C(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new N(t)),i}g(t){v(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new C(this.k(c$2()),this.k(c$2()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e);}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i;}}}class H{constructor(t,i,s,e,o){this.type=1,this.H=A,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(A),this.strings=s):this.H=A;}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let l=!1;if(void 0===o)t=S(this,t,i,0),l=!d$1(t)||t!==this.H&&t!==w,l&&(this.H=t);else {const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=S(this,e[s+n],i,n),h===w&&(h=this.H[n]),l||(l=!d$1(h)||h!==this.H[n]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[n+1]),this.H[n]=h;}l&&!e&&this.W(t);}W(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class I extends H{constructor(){super(...arguments),this.type=3;}W(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}W(t){t&&t!==A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class R extends H{constructor(){super(...arguments),this.type=5;}I(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===w)return;const e=this.H,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,l=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),l&&this.element.addEventListener(this.name,this,t),this.H=t;}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s;}I(t){S(this,t);}}null===(i$4=(t$2=globalThis).litHtmlPlatformSupport)||void 0===i$4||i$4.call(t$2,N,C),(null!==(s$4=(e$6=globalThis).litHtmlVersions)&&void 0!==s$4?s$4:e$6.litHtmlVersions=[]).push("2.0.0-rc.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i$3,l,o$3,s$3,n$5,a$2;(null!==(i$3=(a$2=globalThis).litElementVersions)&&void 0!==i$3?i$3:a$2.litElementVersions=[]).push("3.0.0-rc.2");class h$1 extends a$4{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0;}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const r=this.render();super.update(t),this.Φt=V(r,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1);}render(){return w}}h$1.finalized=!0,h$1._$litElement$=!0,null===(o$3=(l=globalThis).litElementHydrateSupport)||void 0===o$3||o$3.call(l,{LitElement:h$1}),null===(n$5=(s$3=globalThis).litElementPlatformSupport)||void 0===n$5||n$5.call(s$3,{LitElement:h$1});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$4=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$5(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$2(e,n)}

function n$3(n){return (r={},t)=>{const o={};for(const c in n)o[c]=n[c](r[c],t);return o}}

const t$1="action",o$2="state";

const s$2=Symbol(),e$4=Symbol(),i$1=Symbol(),n$2=Symbol(),c$1=Symbol(),o$1=Symbol(),a$1=Symbol();function h(h,l){return class extends l{constructor(...t){super(...t),this[a$1]=this[a$1].bind(this),this[e$4]();}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[i$1](),this[c$1]();}disconnectedCallback(){this[o$1](),this[n$2](),super.disconnectedCallback&&super.disconnectedCallback();}[e$4](){this[s$2]=this.mapEvents?this.mapEvents():{};}[i$1](){for(const t in this[s$2])this.addEventListener(t,this[s$2][t],!1);}[n$2](){for(const t in this[s$2])this.removeEventListener(t,this[s$2][t],!1);}[c$1](){h.addEventListener(o$2,this[a$1]),this[a$1]();}[o$1](){h.removeEventListener(o$2,this[a$1]);}[a$1](){this.mapState&&Object.assign(this,this.mapState(h.state));}}}

const o=o=>o;

class s$1 extends EventTarget{constructor(t,e){super(),this.state=t,this.reducer=e,this.state=this.reducer(this.state,{});}dispatch(s){const i=new CustomEvent(t$1,{cancelable:!0,detail:{action:s}});return this.dispatchEvent(i)&&(s=i.detail.action,this.state=this.reducer(this.state,s),this.dispatchEvent(new CustomEvent(o$2,{detail:{action:s}}))),s}}

const e$3=(o,t)=>t.indexOf("/")>-1?t:o+"/"+t,s=(o,t,n)=>{const s=e$3(t,n);return o.dispatch[t][n]=t=>{const n={type:s,...void 0!==t&&{payload:t}};return o.dispatch(n)},s},c={},r$1=[],i={dispatchPlugin:{onModel(o,t,n){o.dispatch[t]={};for(const e in n.reducers)s(o,t,e);}},effectsPlugin:{onModel(o,t,n){if(!n.effects)return;const e=n.effects({getDispatch:()=>o.dispatch,getState:()=>o.state});for(const n in e){const i=s(o,t,n),d=e[n];c[i]?c[i].push(d):c[i]=[d],"init"===n&&r$1.push(d);}},onStore(o){o.addEventListener(o$2,o=>{const{action:t}=o.detail,n=c[t.type];n&&queueMicrotask(()=>n.forEach(o=>o(t.payload)));}),queueMicrotask(()=>r$1.forEach(o=>o()));}}},d=t=>{const s={...t.models},c={...i,...t.plugins};for(const o in c){const t=c[o];t.model&&(s[o]=t.model);}const r={};for(const o in s){const t=s[o],n={};for(const s in t.reducers)n[e$3(o,s)]=t.reducers[s];r[o]=(o=t.state,e)=>{const s=n[e.type];return s?s(o,e.payload):o};}const d=n$3(r),a=t&&t.state,f=new s$1(a,d);for(const o in c){const t=c[o];if(t.onModel)for(const o in s)t.onModel(f,o,s[o]);}for(const o in c){const t=c[o];t.onStore&&t.onStore(f);}return f};

const n$1=t=>"DISPATCH"===t.type;function e$2(e,s){const o=window.__REDUX_DEVTOOLS_EXTENSION__;if(o){const i=o.connect(s);e.addEventListener(o$2,t=>{const{action:s}=t.detail;n$1(s)||i.send(s,e.state);}),i.subscribe(s=>{n$1(s)&&(e.state=JSON.parse(s.state),e.dispatchEvent(new CustomEvent(o$2,{detail:{action:s}})));}),i.init(e.state);}return e}

function t(t,a){const r={name:location.hostname,storage:localStorage,serializer:JSON,filter:e=>!0,persist:e=>e,delay:0,...a},s=r.storage.getItem(r.name);s&&(t.state={...t.state,...r.serializer.parse(s)});let i=0;return t.addEventListener(o$2,e=>{const{action:a}=e.detail;r.filter(a)&&(i&&window.clearTimeout(i),i=window.setTimeout(()=>{r.storage.setItem(r.name,r.serializer.stringify(r.persist(t.state))),i=0;},r.delay));}),t}

const e$1=window.history,r=()=>dispatchEvent(new Event("popstate")),a=(a,o$1)=>{const s={transform:t=>t,...o$1};return {model:o({state:{page:void 0,params:{}},reducers:{change:(t,e)=>e},effects:t=>({back(){e$1.back(),r();},forward(){e$1.forward(),r();},go(t){e$1.go(t),r();},push(t){e$1.pushState(null,"",t),r();},replace(t){e$1.replaceState(null,"",t),r();}})}),onStore(t){const o=t.dispatch.routing,c=()=>{const t=a(location.pathname);t&&o.change(s.transform(t));};window.addEventListener("popstate",c),window.addEventListener("click",t=>{const a=n(t);a&&(t.preventDefault(),e$1.pushState(null,"",a),r());}),queueMicrotask(c);}}},n=t=>{const e=(t=>t.composedPath().find(t=>"A"===t.tagName))(t);return void 0===e||!e.href.startsWith(document.baseURI)||(t=>t.hasAttribute("download"))(e)||(t=>(t.getAttribute("rel")||"").includes("external"))(e)||(t=>t.target)(e)||(t=>t.button&&0!==t.button||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)(t)?null:e.href};

class EventTargetPolyfill {
    constructor() {
        this.listeners = {};
    }
    addEventListener(type, callback) {
        if (!(type in this.listeners)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    }
    removeEventListener(type, callback) {
        if (!(type in this.listeners)) {
            return;
        }
        const stack = this.listeners[type];
        // tslint:disable-next-line one-variable-per-declaration
        for (let i = 0, l = stack.length; i < l; i++) {
            if (stack[i] === callback) {
                stack.splice(i, 1);
                return;
            }
        }
    }
    dispatchEvent(event) {
        if (!(event.type in this.listeners)) {
            return true;
        }
        const stack = this.listeners[event.type].slice();
        // tslint:disable-next-line one-variable-per-declaration
        for (let i = 0, l = stack.length; i < l; i++) {
            stack[i].call(this, event);
        }
        return !event.defaultPrevented;
    }
}
try {
    new EventTarget();
}
catch (err) {
    window.EventTarget = EventTargetPolyfill;
}

if (typeof window.queueMicrotask !== 'function') {
    window.queueMicrotask = callback => Promise.resolve().then(callback);
}

function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

const config$1 = {
    apiKey: "AIzaSyBrsKvHRuu-7ATc5A02Ywcdqy72tYZJAeo",
    authDomain: "bella-strati.firebaseapp.com",
    projectId: "bella-strati",
    storageBucket: "bella-strati.appspot.com",
    messagingSenderId: "1049914168860",
    appId: "1:1049914168860:web:662863fabe658f4e6c31d9"
};

const loadScript = (url) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
});
const loadModule = (module) => loadScript(`https://www.gstatic.com/firebasejs/7.24.0/firebase-${module}.js`);
const loadAndInitialize = async () => {
    await loadModule('app');
    window.firebase.initializeApp(config$1);
    return window.firebase;
};
const loadFirebase = loadAndInitialize();
const app = loadFirebase.then(firebase => firebase.app());
const authLoader = app.then(app => loadModule('auth').then(() => app.auth()));
const firestoreLoader = app.then(app => loadModule('firestore').then(() => {
    const fs = app.firestore();
    fs.enablePersistence({ synchronizeTabs: true });
    return fs;
}));
// // TODO: use requestIdleCallback
// setTimeout(() => {
//   app.then(app => {
//     // Support for Google Analytics
//     //
//     // Uncomment the following line, if you want to use
//     // Firebase's integration with Google Analytics
//     // Note that you'll require the corresponding entry
//     // in config, too.
//     // loadModule('analytics').then(() => app.analytics())
//     // Support for performance measurements
//     //
//     // Uncomment the following line, if you want to use
//     // Firebase's performance metrics.
//     // loadModule('performance').then(() => app.performance())
//   })
// }, 1000)

var auth = o({
    state: {
        user: null,
        statusKnown: false,
    },
    reducers: {
        signedIn(state, user) {
            // this shouldn't be here but for now...
            for (var i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith("page")) {
                    const item = localStorage.getItem(key);
                    if (!item?.startsWith("/README")) {
                        console.log(user.displayName + " might want to buy" + item);
                    }
                }
            }
            return { ...state, user, statusKnown: true };
        },
        signedOut(state) {
            return { ...state, user: null, statusKnown: true };
        },
    },
    effects(store) {
        return {
            async signout() {
                const auth = await authLoader;
                await auth.signOut();
            },
            async signinProvider(name) {
                const auth = await authLoader;
                const provider = providerFromName(name);
                await auth.signInWithRedirect(provider);
            },
            // to support signing in with other methods:
            // async signinEmailPassword(payload: { email: string, password: string }) {
            //   const auth = await authLoader
            //   await auth.signInWithEmailAndPassword(payload.email, payload.password)
            // },
            async init() {
                const auth = await authLoader;
                const dispatch = store.getDispatch();
                auth.onAuthStateChanged(async (user) => {
                    if (user) {
                        dispatch.auth.signedIn(user);
                    }
                    else {
                        dispatch.auth.signedOut();
                    }
                });
            },
        };
    }
});
function providerFromName(name) {
    switch (name) {
        case 'google': return new window.firebase.auth.GoogleAuthProvider();
        // TODO: add whatever firebase auth providers are supported by the app
        // case 'facebook': return new window.firebase.auth.FacebookAuthProvider();
        // case 'twitter': return new window.firebase.auth.TwitterAuthProvider();
        default: throw `unknown provider ${name}`;
    }
}
const getState$1 = (state) => state.auth;
var AuthSelectors;
(function (AuthSelectors) {
    AuthSelectors.user = createSelector([getState$1], (state) => state.user);
    AuthSelectors.statusKnown = createSelector([getState$1], (state) => state.statusKnown);
    AuthSelectors.anonymous = createSelector([AuthSelectors.user], (user) => user === null);
    AuthSelectors.authenticated = createSelector([AuthSelectors.user], (user) => user !== null);
})(AuthSelectors || (AuthSelectors = {}));

var settings = o({
    state: {
        gtmId: "",
    },
    reducers: {
        gtmId(state, gtmId) {
            return { ...state, gtmId };
        },
    },
    effects: (store) => ({
        async readGtmId() {
            const dispatch = store.getDispatch();
            const db = await firestoreLoader;
            const ref = db.doc("admin/settings");
            const snapshot = await ref.get();
            const data = snapshot.data();
            dispatch.settings.gtmId(data.gtmId);
        },
        async updateGtmId(id) {
            const db = await firestoreLoader;
            const ref = db.doc("admin/settings");
            ref.set({ gtmId: id }, { merge: true });
        },
    }),
});

// Please note that this default export of createModel() is re-exported
// as foocrud in ../ index.ts, then consumed by getState() below
// as state.foocrud.
// This could be confusing, even if it does make perfect sense, eventually
var foocrud = o({
    state: {
        focusDcmnt: {},
        foocrudClctn: {},
    },
    reducers: {
        foocrudClctn(state, foocrudClctn) {
            return { ...state, foocrudClctn };
        },
        focusDcmnt(state, focusDcmnt) {
            return { ...state, focusDcmnt };
        },
        upsert(state, dcmnt) {
            const foocrudClctn = state.foocrudClctn;
            foocrudClctn[dcmnt.id] = dcmnt;
            return { ...state, foocrudClctn };
        },
        deleteDcmnt(state, key) {
            const foocrudClctn = state.foocrudClctn;
            delete foocrudClctn[key];
            return { ...state, foocrudClctn };
        }
    },
    effects: (store) => ({
        async create(data) {
            const db = await firestoreLoader;
            db.collection("foocrud")
                .add({
                yada: data.yada,
                bar: data.bar,
            })
                .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                window.location.replace("/foocrudRD");
            })
                .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        },
        async delete(key) {
            const dispatch = store.getDispatch();
            const db = await firestoreLoader;
            if (!!key) {
                const ref = db.collection("foocrud").doc(key);
                if (!!ref) {
                    ref.delete()
                        .then(function (_deleted) {
                        console.log("Deleted ID: ", key);
                        dispatch.foocrud.deleteDcmnt(key);
                    })
                        .catch(function (error) {
                        console.error("Error adding document: ", error);
                    });
                }
            }
            else {
                console.log("PETE YOU EFFED UP");
            }
        },
        async loadUpdateView(key) {
            const dispatch = store.getDispatch();
            const db = await firestoreLoader;
            let ref = db.collection("foocrud").doc(key);
            if (ref) {
                ref.get()
                    .then(doc => {
                    if (doc !== undefined &&
                        doc.data() !== null &&
                        doc.data() !== undefined) {
                        const data = doc.data();
                        if (data != undefined) {
                            const dcmnt = {
                                id: key,
                                yada: data["yada"],
                                bar: data["bar"],
                            };
                            window.location.replace("/foocrudU");
                            dispatch.foocrud.focusDcmnt(dcmnt);
                        }
                    }
                })
                    .catch(err => {
                    console.log('Error getting documents', err);
                });
            }
        },
        async updateDcmnt(data) {
            const db = await firestoreLoader;
            const key = data.id;
            if (!!key) {
                const ref = db.collection("foocrud").doc(key);
                if (!!ref) {
                    ref.update(data)
                        .then(function (_key) {
                        window.location.replace("/foocrudRD");
                    })
                        .catch(function (error) {
                        console.error("Error adding document: ", error);
                    });
                }
            }
            else {
                console.log("PETE YOU EFFED UP");
            }
        },
    })
});
// see ../index.ts for where state.foocrud below,
// is defined using default export from above
const getState = (state) => state.foocrud;
// creates methods such as `FoocrudSelectors.someval(state)`
// which would typically return state.someval
var FoocrudSelectors;
(function (FoocrudSelectors) {
    FoocrudSelectors.dcmntFocus = createSelector([getState], (state) => state.focusDcmnt);
    FoocrudSelectors.foocrudClctn = createSelector([getState], (state) => state.foocrudClctn);
})(FoocrudSelectors || (FoocrudSelectors = {}));

var models = /*#__PURE__*/Object.freeze({
    __proto__: null,
    auth: auth,
    settings: settings,
    foocrud: foocrud
});

const e=e=>{const t=[];return e=e.replace(/[\-{}\[\]+?.,\\\^$|#\s]/g,"\\$&").replace(/\((.*?)\)/g,"(?:$1)?").replace(/(\(\?)?:\w+/g,((e,r)=>(t.push(e.slice(1)),r?e:"([^/?]+)"))).replace(/\*/g,(()=>(t.push("path"),"([^?]*?)"))),[new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$"),t]};var createMatcher = t=>{const r=Object.keys(t),c=[];return s=>{for(let n=0;n<r.length;n++){const l=r[n];let p=c[n];p||(p=e(l),c[n]=p);const a=p[0].exec(s);if(a){const e=a.slice(1,-1).reduce(((e,t,r)=>(void 0!==t&&(e[p[1][r]]=t),e)),{});return {page:t[l],params:e}}}return null}};

const routes = {
    '/': 'home',
    '/about': 'about',
    '/account': 'account',
    '/view-foocrud-c': 'view-foocrud-c',
    '/view-foocrud-rd': 'view-foocrud-rd',
    '/view-foocrud-u': 'view-foocrud-u',
    '/signin': 'signin',
    '/*': '404',
};
const matcher = createMatcher(routes);
const routing = a(matcher);
const config = { models, plugins: { routing } };

const store = e$2(t(d(config)));
const dispatch = store.dispatch;

var RouteSelectors;
(function (RouteSelectors) {
    const routingSelector = (state) => state.routing;
    RouteSelectors.view = createSelector([routingSelector], (routing) => routing.page);
})(RouteSelectors || (RouteSelectors = {}));

class Connected extends h(store, h$1) {
}

const sharedStyles = i$5 `
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host([hidden]), [hidden] {
    display: none !important;
  }
`;

let ViewAccountElement = class ViewAccountElement extends Connected {
    mapState(state) {
        return {
            statusKnown: AuthSelectors.statusKnown(state),
            authenticated: AuthSelectors.authenticated(state),
            user: AuthSelectors.user(state),
        };
    }
    signOut(_e) {
        dispatch.auth.signout();
    }
    render() {
        return this.authenticated
            ? T `
          <h1>Your Account</h1>
          <h2>${this.user.displayName}</h2>
          <p>${this.user.email}</p>
          <mwc-button raised @click=${this.signOut}>
            Sign out
          </mwc-button>
          <h3>Raw Auth Data:</h3>
          <pre>${JSON.stringify(this.user, null, '  ')}</pre>
        `
            : T `
          <h1>Your Account</h1>
          <p>You need to <a href="/signin">Sign-in</a> to use this app.</p>
        `;
    }
    static get styles() {
        return [
            sharedStyles,
            i$5 `
        mwc-button {
          --mdc-theme-on-primary: #ffffff;
          --mdc-theme-primary: #f04141;
        }
      `
        ];
    }
};
__decorate([
    e$5({ type: Boolean })
], ViewAccountElement.prototype, "statusKnown", void 0);
__decorate([
    e$5({ type: Boolean })
], ViewAccountElement.prototype, "authenticated", void 0);
__decorate([
    e$5({ type: Object })
], ViewAccountElement.prototype, "user", void 0);
ViewAccountElement = __decorate([
    n$4('view-account')
], ViewAccountElement);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'.");

let ViewHomeElement = class ViewHomeElement extends h$1 {
    render() {
        return T `
      <h1>Welcome</h1>
      <p>Simple app as Web Component &hellip;</p>
      <p><a href="/view-foocrud-c">create foo</a></p>
      <p><a href="/view-foocrud-rd">read foos</a></p>
    `;
    }
    static get styles() {
        return [
            sharedStyles,
        ];
    }
};
ViewHomeElement = __decorate([
    n$4('view-home')
], ViewHomeElement);

let FoocrudC = class FoocrudC extends Connected {
    // Why this? Allows the form submit to fire submit(form) method
    firstUpdated() {
        const form = this.shadowRoot?.getElementById("foocrudForm");
        if (!!form) {
            form.onsubmit = (e) => {
                e.preventDefault();
                this.submit(form);
            };
        }
    }
    submit(form) {
        let data = {};
        data["yada"] = form["yada"].value;
        data["bar"] = form["bar"].value;
        dispatch.foocrud.create(data);
    }
    render() {
        return T `
      <h3>Add Foocrud Document to the Collection:</h3>
      <form id="foocrudForm">
        <fieldset>
          <label for="yada">Yada:</label><br/>
          <input type="text" id="yada" name="yada" value="Yada  ${Date.now()}" /><br />
                    <label for="bar">Bar:</label><br/>
          <input type="text" id="bar" name="bar" value="Bar  ${Date.now()}" /><br />
          <br />
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
      <p>A <em>'Document'</em> in Firestore is perhaps analagous to the row of a table, in SQL-land</p>
    `;
    }
    static get styles() {
        return [
            sharedStyles,
            i$5 `
        button {
          padding: 1em;
        }
        input {
          margin-bottom: 1em;
        }
      `,
        ];
    }
};
FoocrudC = __decorate([
    n$4('view-foocrud-c')
], FoocrudC);

let FoocrudRD = class FoocrudRD extends Connected {
    mapState(state) {
        return {
            foocrudClctn: FoocrudSelectors.foocrudClctn(state),
        };
    }
    delete(_e) {
        dispatch.foocrud.delete(_e?.target?.["id"]);
    }
    loadUpdateView(_e) {
        dispatch.foocrud.loadUpdateView(_e?.target?.["id"]);
    }
    render() {
        return T `
    <h3>Foocrud Collection</h3>
    <a href="/foocrudC"><button type="button">Add Foocrud Document</button></a>
    <div class="table">
        ${Object.keys(this.foocrudClctn).map(key => {
            const dcmnt = this.foocrudClctn[key];
            return T `
            <div class="row">
              <div class="cell">
                <button id=${dcmnt["id"]} @click=${this.delete}>delete</button>
                <button id=${dcmnt["id"]} @click=${this.loadUpdateView}>update</button>
              </div>
              <div class="cell">${dcmnt["yada"]}</div>
              <div class="cell">${dcmnt["bar"]}</div>
            </div>
          `;
        })}
      </div>
      <p>A <em>'Collection'</em> in Firestore is perhaps analagous to a table, in SQL-land</p>
      <p>A <em>'Document'</em> in Firestore is perhaps analagous to the <em>row</em> of a table, in SQL-land</p>
    `;
    }
    static get styles() {
        return [
            sharedStyles,
            i$5 `
        button {
          padding: 1em;
          margin-bottom: 2em;
        }
        .table .row {
          display: grid;
          grid-gap: 10px;
          padding: 0;
          list-style: none;
          grid-template-columns: auto  1fr 1fr;
        }
        .cell {
          background: #f9f7f5;
          display: block;
          text-decoration: none;
          padding: 10px;
          text-align: center;
          font-size: 10px;
        }
      `,
        ];
    }
};
__decorate([
    e$5({ type: Object,
        hasChanged(_newVal, _oldVal) {
            return true; // thus always render. No, I don't understand why, just the only way to get it to work.
        }
    })
], FoocrudRD.prototype, "foocrudClctn", void 0);
FoocrudRD = __decorate([
    n$4('view-foocrud-rd')
], FoocrudRD);

let ViewSigninElement = class ViewSigninElement extends h$1 {
    signIn(e) {
        const el = e.target;
        dispatch.auth.signinProvider(el.id);
    }
    render() {
        return T `
      <h1>Sign In</h1>
      <p>Signing in will redirect you to the firebase authentication page for this app.</p>
      <button class="auth" raised @click=${this.signIn} id="google">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg">
        Sign in with Google
      </button>
    `;
    }
    static get styles() {
        return [
            sharedStyles,
            i$5 `
        .auth {
          min-width: 240px;
          margin: 8px 0;
          width: 100%;
        }

        .auth img { 
          margin-right: 0.5em;
        }

        #google {
          --mdc-theme-on-primary: #757575;
          --mdc-theme-primary: #ffffff;
        }

        #facebook {
          --mdc-theme-on-primary: #ffffff;
          --mdc-theme-primary: #3b5998;
        }

        #twitter {
          --mdc-theme-on-primary: #ffffff;
          --mdc-theme-primary: #55acee;
        }

        img, svg {
          width: 24px;
          height: 24px;
          vertical-align: middle;
          margin-right: 10px;
        }
      `
        ];
    }
};
ViewSigninElement = __decorate([
    n$4('view-signin')
], ViewSigninElement);

let AppViewElement = class AppViewElement extends Connected {
    mapState(state) {
        return {
            view: RouteSelectors.view(state),
        };
    }
    render() {
        switch (this.view) {
            case "home":
                return T `<view-home></view-home>`;
            case "account":
                return T `<view-account></view-account>`;
            case "view-foocrud-c":
                return T `<view-foocrud-c></view-foocrud-c>`;
            case "view-foocrud-rd":
                return T `<view-foocrud-rd></view-foocrud-rd>`;
            case "signin":
                return T `<view-signin></view-signin>`;
            default:
                return T `<view-404></view-404>`;
        }
    }
    static get styles() {
        return [sharedStyles];
    }
};
__decorate([
    e$5({ type: String })
], AppViewElement.prototype, "view", void 0);
AppViewElement = __decorate([
    n$4("app-view")
], AppViewElement);

let AuthStatusElement = class AuthStatusElement extends Connected {
    mapState(state) {
        return {
            statusKnown: AuthSelectors.statusKnown(state),
            authenticated: AuthSelectors.authenticated(state),
            user: AuthSelectors.user(state),
        };
    }
    shouldUpdate() {
        return this.statusKnown;
    }
    render() {
        return this.authenticated
            ? T `
          <a href="/account" title="View Account"><img src=${this.user.photoURL}></a>
          <div>
            <h2>${this.user.displayName}</h2>
            <p>${this.user.email}</p>
          </div>
        `
            : T `
          <a href="/signin" title="Sign In">
            <svg viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </a>
          <div>
            <h2>Visitor</h2>
            <p>Sign-in to use app &hellip;</p>
          </div>`;
    }
    static get styles() {
        return [
            sharedStyles,
            i$5 `
        :host {
          width: 255px;
          height: 56px;
          padding: 3px;
          display: flex;
          box-sizing: border-box;
          contain: strict;
        }

        img, svg {
          width: 50px;
          height: 50px;
          margin-right: 5px;
          color: #444;
        }

        svg path {
          fill: #444;
        }

        h2 {
          font-size: 18px;
          line-height: 18px;
          font-weight: normal;
          margin: 8px 0 6px 0;
          color: #222;
        }

        p {
          font-size: 12px;
          line-height: 12px;
          margin: 6px 0;
          color: #666;
        }

        div {
          overflow: hidden;
        }

        h2, p {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        @media (min-width: 600px) {
          :host {
            height: 64px;
            padding: 8px;
          }
        }
      `,
        ];
    }
};
__decorate([
    e$5({ type: Boolean })
], AuthStatusElement.prototype, "statusKnown", void 0);
__decorate([
    e$5({ type: Boolean })
], AuthStatusElement.prototype, "authenticated", void 0);
__decorate([
    e$5({ type: Object })
], AuthStatusElement.prototype, "user", void 0);
AuthStatusElement = __decorate([
    n$4('auth-status')
], AuthStatusElement);

let AppShellElement = class AppShellElement extends h$1 {
    render() {
        return T `
    <app-view></app-view>
    <hr>
    <auth-status></auth-status>
    `;
    }
    static get styles() {
        return i$5 `
      app-view {
        box-sizing: border-box;
        padding: var(--min-padding);
      }

      auth-status {
        height: 56px;
        background-color: #f8f8f8;
      }

      @media (min-width: 600px) {
        auth-status {
          height: 64px;
        }
      }
    `;
    }
};
AppShellElement = __decorate([
    n$4('app-shell')
], AppShellElement);
//# sourceMappingURL=index.js.map
