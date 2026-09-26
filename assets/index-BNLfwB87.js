const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./en-fBkXxoNE.js","./plural-0_xhPFb3.js","./es-ES-DDYRF0Zv.js","./dados-SGVQpx2e.js","./texto-CFvOW6yL.js","./banco-B3R_YLyx.js","./dados-CGbbgLOs.js","./dados-cm2L_edG.js","./dados-B2pORBos.js","./numero-Elgnatu7.js","./dinheiro-CGWI9aWD.js","./dados-DyyWXQBW.js","./dados-DiXquFuM.js","./dados-DLtEPQPo.js","./dados-CH7WmXEH.js","./CanvasPool-BmlGEVWD.js","./dados-D1WWRlPG.js","./acervo-mwj3Kh77.js","./kits-xm4F3-DO.js","./estoque-BiEiYfqX.js","./dados-BgDpV8rv.js","./convite-Bq5DdNFQ.js","./qr-DsXuttD8.js","./tela-C0Rv6gGI.js","./leitura-BrqgdCDR.js","./texto-owtuDXsS.js","./foco-CnUS-Btn.js","./ref-BIlETQiV.js","./tela-YCdLb6iX.js","./tela-BPXXYZqq.js","./rascunho-CeEzT1uK.js","./base-fqnUcJw4.js","./tela-X1VVh7Av.js","./catalogo-B2Z121mU.js","./favoritos-DAEWA_Gd.js","./tela-DWtUeBfO.js","./tela-DwyziNBR.js","./tela-Uc2MPD7x.js","./tela-DECCwrud.js","./tela-B8GK825D.js","./compartilhar-BkknPwlS.js","./tela-CHF0_GJ4.js","./tela-YO86tGMi.js","./dados-CrToLRPu.js","./tela-C_IpxkBY.js","./tela-Bv43Blgy.js","./martelada-Cm7NO4R0.js","./tela-ThGE2Y__.js","./tela-DT88RgX6.js","./tela-CBv5Q8OV.js","./tela-DhuAh3oC.js","./tela-BbsYIyhv.js","./tela-XmmV1ap3.js","./tela-DLNviEBd.js","./tela-CDfbKmNe.js"])))=>i.map(i=>d[i]);
import{n as e,t}from"./plural-0_xhPFb3.js";import{n}from"./texto-CFvOW6yL.js";import{c as r,i,n as a,r as o,s,t as c}from"./banco-B3R_YLyx.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function l(e){return e}var u=l({name:`note`,displayName:`Kobi Note`,apiEndpoint:`./dados`,themeColor:`#0d6efd`,targets:[`pwa`],features:{anotacoes:!0,guias:!0,poesia:!0,receitas:!0,jogo:!0,criacao:!0,entenda:!0,imite:!0,principios:!0,faq:!0,cronologia:!0,caderno:!0,prep:!0,financeiro:!0,metas:!0,ministerio:!0,servico:!0,estudo:!0,leitura:!0,calendario:!0,perfil:!0,tutorial:!0,sobre:!0}}),d=Symbol.for(`kobi.basePath`),ee=globalThis;function te(e){ee[d]=e}function ne(e=``){if(!ee[d]){let e=[...document.scripts],t=e.find(e=>e.hasAttribute(`data-kobi`));te(t?t.getAttribute(`data-kobi`):(e.find(e=>/\/ui(-autoloader|\.min)?\.js($|\?)/.test(e.src))?.getAttribute(`src`)??``).split(`/`).slice(0,-1).join(`/`))}return(ee[d]??``).replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var re=Object.create,ie=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,oe=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),se=e=>{throw TypeError(e)},ce=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,le=(e,t)=>ie(e,`name`,{value:t,configurable:!0}),f=e=>[,,,re(e?.[oe(`metadata`)]??null)],ue=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],de=e=>e!==void 0&&typeof e!=`function`?se(`Function expected`):e,fe=(e,t,n,r,i)=>({kind:ue[e],name:t,metadata:r,addInitializer:e=>n._?se(`Already initialized`):i.push(de(e||null))}),p=(e,t)=>ce(t,oe(`metadata`),e[3]),m=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},h=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,ee=!!(t&8),te=!!(t&16),ne=d>3?e.length+1:d?ee?1:2:0,re=ue[d+5],oe=d>3&&(e[ne-1]=[]),ce=e[ne]||(e[ne]=[]),f=d&&(!te&&!ee&&(i=i.prototype),d<5&&(d>3||!te)&&ae(d<4?i:{get[n](){return he(this,a)},set[n](e){return ge(this,a,e)}},n));d?te&&d<4&&le(a,(d>2?`set `:d>1?`get `:``)+n):le(i,n);for(var m=r.length-1;m>=0;m--)l=fe(d,n,c={},e[3],ce),d&&(l.static=ee,l.private=te,u=l.access={has:te?e=>me(i,e):e=>n in e},d^3&&(u.get=te?e=>(d^1?he:_e)(e,i,d^4?a:f.get):e=>e[n]),d>2&&(u.set=te?(e,t)=>ge(e,i,t,d^4?a:f.set):(e,t)=>e[n]=t)),s=(0,r[m])(d?d<4?te?a:f[re]:d>4?void 0:{get:f.get,set:f.set}:i,l),c._=1,d^4||s===void 0?de(s)&&(d>4?oe.unshift(s):d?te?a=s:f[re]=s:i=s):typeof s!=`object`||!s?se(`Object expected`):(de(o=s.get)&&(f.get=o),de(o=s.set)&&(f.set=o),de(o=s.init)&&oe.unshift(o));return d||p(e,i),f&&ie(i,n,f),te?d^4?a:f:i},g=(e,t,n)=>ce(e,typeof t==`symbol`?t:t+``,n),pe=(e,t,n)=>t.has(e)||se(`Cannot `+n),me=(e,t)=>Object(t)===t?e.has(t):se(`Cannot use the "in" operator on this value`),he=(e,t,n)=>(pe(e,t,`read from private field`),n?n.call(e):t.get(e)),_=(e,t,n)=>t.has(e)?se(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ge=(e,t,n,r)=>(pe(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),_e=(e,t,n)=>(pe(e,t,`access private method`),n),ve=globalThis,ye=ve.ShadowRoot&&(ve.ShadyCSS===void 0||ve.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,be=Symbol(),xe=new WeakMap,Se=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ye&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&xe.set(t,e))}return e}toString(){return this.cssText}},Ce=e=>new Se(typeof e==`string`?e:e+``,void 0,be),we=(e,t)=>{if(ye)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=ve.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Te=ye?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Ce(t)})(e):e,{is:Ee,defineProperty:De,getOwnPropertyDescriptor:Oe,getOwnPropertyNames:ke,getOwnPropertySymbols:Ae,getPrototypeOf:je}=Object,Me=globalThis,Ne=Me.trustedTypes,Pe=Ne?Ne.emptyScript:``,Fe=Me.reactiveElementPolyfillSupport,Ie=(e,t)=>e,Le={toAttribute(e,t){switch(t){case Boolean:e=e?Pe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Re=(e,t)=>!Ee(e,t),ze={attribute:!0,type:String,converter:Le,reflect:!1,useDefault:!1,hasChanged:Re};Symbol.metadata??=Symbol(`metadata`),Me.litPropertyMetadata??=new WeakMap;var Be=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ze){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&De(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Oe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ze}static _$Ei(){if(this.hasOwnProperty(Ie(`elementProperties`)))return;let e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ie(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ie(`properties`))){let e=this.properties,t=[...ke(e),...Ae(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Te(e))}else e!==void 0&&t.push(Te(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return we(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Le:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Le:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Re)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Be.elementStyles=[],Be.shadowRootOptions={mode:`open`},Be[Ie(`elementProperties`)]=new Map,Be[Ie(`finalized`)]=new Map,Fe?.({ReactiveElement:Be}),(Me.reactiveElementVersions??=[]).push(`2.1.2`);var Ve=globalThis,He=e=>e,Ue=Ve.trustedTypes,We=Ue?Ue.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Ge=`$lit$`,Ke=`lit$${Math.random().toFixed(9).slice(2)}$`,qe=`?`+Ke,Je=`<${qe}>`,Ye=document,Xe=()=>Ye.createComment(``),Ze=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Qe=Array.isArray,$e=e=>Qe(e)||typeof e?.[Symbol.iterator]==`function`,et=`[ 	
\f\r]`,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,it=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),at=/'/g,ot=/"/g,st=/^(?:script|style|textarea|title)$/i,v=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ct=Symbol.for(`lit-noChange`),y=Symbol.for(`lit-nothing`),lt=new WeakMap,ut=Ye.createTreeWalker(Ye,129);function dt(e,t){if(!Qe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return We===void 0?t:We.createHTML(t)}var ft=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=tt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===tt?c[1]===`!--`?o=nt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=it):(st.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=it):o=rt:o===it?c[0]===`>`?(o=i??tt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?it:c[3]===`"`?ot:at):o===ot||o===at?o=it:o===nt||o===rt?o=tt:(o=it,i=void 0);let d=o===it&&e[t+1].startsWith(`/>`)?` `:``;a+=o===tt?n+Je:l>=0?(r.push(s),n.slice(0,l)+Ge+n.slice(l)+Ke+d):n+Ke+(l===-2?t:d)}return[dt(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},pt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ft(t,n);if(this.el=e.createElement(l,r),ut.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ut.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Ge)){let t=u[o++],n=i.getAttribute(e).split(Ke),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?vt:r[1]===`?`?yt:r[1]===`@`?bt:_t}),i.removeAttribute(e)}else e.startsWith(Ke)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(st.test(i.tagName)){let e=i.textContent.split(Ke),t=e.length-1;if(t>0){i.textContent=Ue?Ue.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Xe()),ut.nextNode(),c.push({type:2,index:++a});i.append(e[t],Xe())}}}else if(i.nodeType===8){if(i.data===qe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ke,e+1))!==-1;)c.push({type:7,index:a}),e+=Ke.length-1}}a++}}static createElement(e,t){let n=Ye.createElement(`template`);return n.innerHTML=e,n}};function mt(e,t,n=e,r){if(t===ct)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ze(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=mt(e,i._$AS(e,t.values),i,r)),t}var ht=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ye).importNode(t,!0);ut.currentNode=r;let i=ut.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new gt(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new xt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ut.nextNode(),a++)}return ut.currentNode=Ye,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},gt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=mt(this,e,t),Ze(e)?e===y||e==null||e===``?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==ct&&this._(e):e._$litType$===void 0?e.nodeType===void 0?$e(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ye.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=pt.createElement(dt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ht(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=lt.get(e.strings);return t===void 0&&lt.set(e.strings,t=new pt(e)),t}k(t){Qe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Xe()),this.O(Xe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=He(e).nextSibling;He(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},_t=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=mt(this,e,t,0),a=!Ze(e)||e!==this._$AH&&e!==ct,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=mt(this,r[n+o],t,o),s===ct&&(s=this._$AH[o]),a||=!Ze(s)||s!==this._$AH[o],s===y?e=y:e!==y&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},vt=class extends _t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},yt=class extends _t{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},bt=class extends _t{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=mt(this,e,t,0)??y)===ct)return;let n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){mt(this,e)}},St={M:Ge,P:Ke,A:qe,C:1,L:ft,R:ht,D:$e,V:mt,I:gt,H:_t,N:yt,U:bt,B:vt,F:xt},Ct=Ve.litHtmlPolyfillSupport;Ct?.(pt,gt),(Ve.litHtmlVersions??=[]).push(`3.3.3`);var wt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new gt(t.insertBefore(Xe(),e),e,void 0,n??{})}return i._$AI(e),i},Tt=globalThis,Et=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ct}};Et._$litElement$=!0,Et.finalized=!0,Tt.litElementHydrateSupport?.({LitElement:Et});var Dt=Tt.litElementPolyfillSupport;Dt?.({LitElement:Et}),(Tt.litElementVersions??=[]).push(`4.2.2`);var Ot=`Sua mente fora da nuvem. Estudo pessoal, criatividade, finanças e preparo tático reunidos em um espaço sob seu domínio absoluto com zero distrações.`,kt={app:{nome:`Kobi Note`,carregando:`Carregando...`,acaoFalhou:`Não foi possível concluir. Tente de novo.`},home:{saudacao:`Kobi Note`,sub:Ot,modulos:`Módulos`,sincronizar:`Sincronizar conteúdo`,sincronizando:`Sincronizando...`,emDia:`Nenhuma novidade: o conteúdo já está em dia.`,semRede:`Sem conexão — o app continua funcionando com o que já está no aparelho.`,semManifesto:`O servidor de conteúdo não respondeu com um manifesto válido.`,sincronizacaoFalhou:`A sincronização não terminou — o que já estava no aparelho continua lá.`},modulos:{anotacoes:`Anotações`,guias:`Guias Táticos`,poesia:`A Verdade, em Poesia`,receitas:`Receitas`,jogo:`Você se lembra?`,criacao:`Teve um Projeto?`,entenda:`Entenda Melhor`,imite:`Imite a Sua Fé`,principios:`Princípios Bíblicos`,faq:`Respostas Frequentes`,cronologia:`Cronologia Comparada`,caderno:`Caderno de Estudo`,prep:`Esteja Preparado`,financeiro:`Financeiro`,metas:`Minhas Metas`,ministerio:`Vida e Ministério`,servico:`Quero Fazer Mais`,estudo:`Meu Estudo Pessoal`,leitura:`Leitura da Bíblia`,calendario:`Calendário`,perfil:`Perfil / ICE`,tutorial:`Tutorial`,sobre:`Sobre`},secoes:{estudo:`Estudo Pessoal`,prep:`Esteja Preparado`,extras:`Extras`,pessoal:`Pessoal`,aplicativo:`O Aplicativo`},painel:{semEventos:`Nada marcado para hoje.`,diaInteiro:`Dia inteiro`,anotacoes:t=>e(t,{one:`1 anotação`,other:`${t} anotações`}),eventosHoje:t=>e(t,{one:`1 evento hoje`,other:`${t} eventos hoje`}),contas:t=>[t.vencidas>0?e(t.vencidas,{one:`1 vencida`,other:`${t.vencidas} vencidas`}):``,t.hoje>0?e(t.hoje,{one:`1 vence hoje`,other:`${t.hoje} vencem hoje`}):``,t.aVencer>0?e(t.aVencer,{one:`1 a vencer`,other:`${t.aVencer} a vencer`}):``].filter(e=>e!==``).join(`, `),leitura:e=>`${e}% da Bíblia`,metas:t=>e(t,{one:`1 meta em andamento`,other:`${t} metas em andamento`}),horas:t=>e(t,{one:`1 hora este mês`,other:`${t} horas este mês`}),foco:e=>`${Math.round(e/60)} h de foco no mês`,favoritas:t=>e(t,{one:`1 favorita`,other:`${t} favoritas`}),rotuloVencidas:`Contas vencidas`,rotuloVencemHoje:`Vencem hoje`,rotuloAVencer:`A vencer em 7 dias`,rotuloFoco:`Estudo focado`,rotuloEsfriando:`Estudos esfriando`,rotuloRelatorios:`Relatórios a entregar`,rotuloMetas:`Minhas Metas`,emHoras:e=>`${Math.round(e/60*10)/10} h`},convite:{titulo:`Compartilhar o Kobi Note`,tile:`Compartilhar`,tileResumo:`Convide alguém`,lema:`Compartilhe o Kobi Note com seus amigos!`,mascote:`Kobi, o mascote do Kobi Note`,mensagem:`Oi! Descobri o Kobi Note para organizar meu estudo pessoal, leitura da Bíblia, anotações, finanças e preparo tático — tudo fica no meu próprio aparelho, sem conta e sem nuvem, e funciona sem internet. Acho que você vai gostar:`,qrAlt:`QR com o endereço do Kobi Note`,dica:`Aponte a câmera para o código, ou use um dos botões abaixo.`,whatsapp:`WhatsApp`,compartilhar:`Compartilhar`,copiar:`Copiar`,copiado:`Convite copiado. É só colar onde quiser.`},rodape:{termos:`Termos de uso`,privacidade:`Privacidade`,direitos:e=>`© ${e} Luiz Marin`,feitoPara:`Feito com ❤️ para você.`},boasVindas:{titulo:`Boas-vindas`,reabrir:`Rever as boas-vindas`,mascote:`Kobi, o mascote do Kobi Note, dando boas-vindas`,pular:`Pular`,voltar:`Voltar`,proximo:`Próximo`,comecar:`Começar a usar`,passo:(e,t)=>`Passo ${e} de ${t}`,passos:{bemVindo:{titulo:`Bem-vindo ao Kobi Note`,texto:Ot,dica:`Leva um minuto para conhecer o básico.`},painel:{titulo:`A tela inicial é o seu painel`,texto:`Cada cartão abre uma área do app e mostra um resumo do que está acontecendo nela. A tela é dividida em seções intuitivas — Estudo Pessoal, Esteja Preparado, Extras e Pessoal.`,dica:`O botão ← sempre traz você de volta.`},offline:{titulo:`Funciona sem internet`,texto:`O Kobi Note guarda tudo no próprio aparelho. Você pode usar no ônibus, no campo ou em qualquer lugar sem sinal.`,dica:`Conteúdo novo é baixado quando houver internet.`},privado:{titulo:`Seus dados são só seus`,texto:`Não há nuvem, conta nem rastreador. Tudo fica apenas no seu aparelho inclusive o conteúdo do cofre.`,dica:`Ninguém — nem nós — consegue ver o que você faz aqui.`},instalar:{titulo:`Instale na tela inicial`,texto:`Pelo menu do navegador, escolha “Instalar aplicativo” ou “Adicionar à tela inicial”. O Kobi Note será instalado como um aplicativo, oferecendo uma experiência imersiva e nativa.`,dica:`Consulte o Tutorial para saber mais.`,botao:`Instalar agora`}}},instalacao:{instalar:`Instalar na tela inicial`},sobre:{titulo:`Sobre`,versao:e=>`Versão ${e}`,lema:Ot,seloOffline:`100% offline`,seloPrivado:`Privado`,seloSemRastreio:`Sem rastreadores`,seloInstalavel:`Instalável`,tudoNumLugar:`Tudo em um só lugar`,recEstudo:`Estudo e leitura`,recEstudoTexto:`Estudo pessoal, leitura da Bíblia, Princípios Bíblicos, Respostas Frequentes, cronologia e caderno de estudo`,recJogo:`Aprender brincando`,recJogoTexto:`Você se lembra?, Entenda Melhor, Imite a Sua Fé e Teve um Projeto?`,recCriar:`Criatividade`,recCriarTexto:`Poesia, receitas e anotações`,recFinancas:`Finanças e metas`,recFinancasTexto:`Orçamento, objetivos e calendário`,recPreparo:`Esteja Preparado`,recPreparoTexto:`Kits, estoque, cofre protegido e guias de sobrevivência`,recMinisterio:`Ministério e você`,recMinisterioTexto:`Seu ministério, estudos, relatórios, perfil e ICE`,privacidadeTitulo:`Seus dados são só seus`,privacidadeTexto:`Espaço para pensar, silêncio para criar. Apenas você e Kobi Note.`,documentos:`Documentos`,vejaTambem:`Veja também`,contato:`Contato:`,email:`kobinote.app@gmail.com`},emBreve:{titulo:`Em breve`,texto:e=>`O módulo “${e}” ainda não foi liberado para esta versão do Kobi Note.`,ajuda:`Ele ainda está em desenvolvimento... espere mais um pouquinho.`,voltar:`Voltar ao início`},erro:{banco:`Não foi possível abrir o banco local`,naoEncontrado:`Não encontramos esta tela`,naoEncontradoTexto:`O endereço não corresponde a nenhum módulo do Kobi Note.`,telaNaoVeio:`Não foi possível abrir este módulo`,telaNaoVeioTexto:`A tela é baixada na primeira vez que você entra nela, e desta vez ela não chegou. Verifique a conexão e tente de novo; se o app foi atualizado agora há pouco, recarregar a página resolve.`,telaNaoVeioRecarregar:`Recarregar`,cargaFalhou:`Este módulo não abriu`,cargaFalhouTexto:`Alguma coisa deu errado ao ler os dados deste módulo. O que já estava salvo continua no aparelho — nada foi perdido.`,cargaTentarDeNovo:`Tentar de novo`},armazenamento:{memoriaOrigemInsegura:`Este endereço não é uma origem confiável: os dados ficam num armazenamento de reserva. Abra o app por HTTPS para usar o armazenamento definitivo.`,memoriaInstanciaDupla:`O Kobi Note já está aberto em outra janela, e só uma por vez pode usar o armazenamento definitivo. Feche a outra janela e recarregue esta — o que você escrever aqui até lá não será guardado.`,memoriaIndisponivel:`O navegador não liberou o armazenamento definitivo neste aparelho: os dados ficam num armazenamento de reserva e podem se perder. Verifique o espaço livre e as permissões de dados do site.`,apagarTudo:`Apagar todos os dados deste aparelho`,apagarTudoTitulo:`Apagar tudo deste aparelho?`,apagarTudoTexto:`Isto remove o banco, as anotações, o progresso, os favoritos e as preferências guardados neste aparelho. O conteúdo original volta na próxima sincronização; o que é seu, não. Desinstalar o app não faz esta limpeza — o navegador guarda os dados mesmo sem o atalho.`,apagarTudoConfirmar:`Apagar tudo`,apagarTudoFeito:`Dados apagados. Recarregando...`,apagarTudoFalhou:`Não foi possível apagar tudo. Tente de novo.`},backup:{titulo:`Backup e restauração`,explicacao:`O backup é um arquivo com tudo o que é seu neste aparelho: anotações, caderno, finanças, metas, ministério, calendário, cofre, progresso e favoritos. O acervo (poesias, perguntas, princípios) fica de fora, porque volta sozinho na próxima sincronização. Guarde o arquivo fora do aparelho — desinstalar o app ou limpar o navegador apaga tudo, e este arquivo é o único caminho de volta.`,resumo:`O que vai no arquivo`,registros:`Registros`,tamanho:`Tamanho`,chaves:`Preferências`,baixar:`Baixar backup`,gerando:`Gerando...`,baixado:e=>`Backup gerado: ${e}. Guarde o arquivo em lugar seguro.`,falhou:`Não foi possível gerar o backup. Tente de novo.`,restaurarTitulo:`Restaurar`,restaurarExplicacao:`Escolha um arquivo de backup do Kobi Note. O que está neste aparelho será SUBSTITUÍDO pelo que vier do arquivo, e não há como desfazer — faça um backup do estado atual antes.`,escolher:`Escolher arquivo`,escolhido:`Arquivo lido`,quando:`Gerado em`,lendo:`Lendo...`,restaurar:`Restaurar`,confirmarTitulo:`Restaurar este backup?`,confirmarTexto:(t,n)=>`${e(t,{one:`1 registro`,other:`${t} registros`})}, gerados em ${n}, vão substituir o que está neste aparelho. Não há como desfazer.`,restaurado:t=>`${e(t,{one:`1 registro restaurado`,other:`${t} registros restaurados`})}. Recarregando...`,restauracaoFalhou:`A restauração falhou. Nada foi alterado.`,invalido:`Este arquivo não é um backup do Kobi Note.`,desconhecidos:e=>`O arquivo traz dados que esta versão não conhece e vai ignorar: ${e}.`,stores:{pasta:`Pastas de anotações`,anotacao:`Anotações`,not_caderno_estudo:`Caderno de estudo`,sessoes_estudo:`Sessões de estudo`,categorias_financeiro:`Categorias do Financeiro`,transacoes:`Lançamentos`,recorrencias_financeiro:`Recorrências`,meta:`Minhas Metas`,kits_local:`Checklists de Prontidão`,documentos_cofre:`Documentos do cofre`,estoque_alimentos:`Estoque`,relatorios_ministerio:`Relatórios do ministério`,contadores_ministerio:`Contadores do ministério`,estudos_biblicos:`Estudos bíblicos`,estudo_registros:`Registros de estudo`,meu_perfil:`Perfil`,calendario_tipos:`Tipos do calendário`,calendario_eventos:`Eventos do calendário`,poesias_local:`Poesias suas`,guias_local:`Guias seus`,receitas_local:`Receitas suas`,jogo_progresso:`Progresso do Você se lembra?`,jogo_respostas:`Respostas do Você se lembra?`}},atualizacao:{titulo:`Kobi Note atualizado`,texto:`Uma versão nova do Kobi Note foi baixada.`,acao:`Recarregar`},novidades:{titulo:`O que há de novo`,noApp:`No aplicativo`,noAcervo:`Conteúdo novo`,abrir:`Abrir`,entendi:`Entendi`,acervo:{poesia:t=>e(t,{one:`1 poesia nova`,other:`${t} poesias novas`}),jogo:t=>e(t,{one:`1 pergunta nova`,other:`${t} perguntas novas`}),imite:t=>e(t,{one:`1 cartão novo`,other:`${t} cartões novos`}),principios:t=>e(t,{one:`1 princípio novo`,other:`${t} princípios novos`}),faq:t=>e(t,{one:`1 pergunta nova`,other:`${t} perguntas novas`}),criacao:t=>e(t,{one:`1 módulo novo`,other:`${t} módulos novos`}),entenda:t=>e(t,{one:`1 módulo novo`,other:`${t} módulos novos`}),cronologia:t=>e(t,{one:`1 evento novo`,other:`${t} eventos novos`}),guias:t=>e(t,{one:`1 guia nova`,other:`${t} guias novas`}),kits:t=>e(t,{one:`1 kit novo`,other:`${t} kits novos`}),receitas:t=>e(t,{one:`1 receita nova`,other:`${t} receitas novas`}),modelos:t=>e(t,{one:`1 modelo de anotação novo`,other:`${t} modelos de anotação novos`})}},recursos:{},acoes:{voltar:`Voltar`,tema:`Alternar tema`,idioma:`Idioma`,fechar:`Fechar`,cancelar:`Cancelar`,confirmar:`Confirmar`,salvar:`Salvar`,criar:`Criar`,renomear:`Renomear`,excluir:`Excluir`,editar:`Editar`,substituir:`Substituir`,obrigatorio:`Preencha este campo.`},leitura:{apresentar:`Apresentar (rolagem automática)`,ler:`Ler em voz alta`,pausarLeitura:`Pausar leitura`,retomarLeitura:`Retomar leitura`,pausar:`Pausar`,continuar:`Continuar`,maisDevagar:`Mais devagar`,maisRapido:`Mais rápido`,velocidade:e=>`Vel. ${e}`,compartilhar:`Compartilhar`,copiado:`Conteúdo copiado para a área de transferência.`,semCopiar:`Não foi possível copiar o conteúdo.`},acervo:{meu:`Minha`,semTitulo:`Sem título`,salvando:`Salvando...`,salvoAs:e=>`Salvo às ${e}`,informeTitulo:`Informe um título para salvar`,tituloEConteudo:`Informe o título e o conteúdo para salvar`,excluirTexto:`A ação não pode ser desfeita.`},pasta:{nova:`Nova pasta`,novaTexto:`Como quer chamar a pasta?`,placeholder:`Nome da pasta`,renomear:`Renomear pasta`,excluir:`Excluir pasta`,excluirTexto:`As anotações dela voltam para “Sem pasta”.`,erroVazio:`Dê um nome à pasta.`},anotacoes:{nova:`Nova anotação`,buscar:`Buscar anotações...`,todosModelos:`Todos os modelos`,todas:`Todas`,arquivadas:`Arquivadas`,semAnotacoes:`Nenhuma anotação por aqui. Toque em + para criar a primeira.`,semArquivadas:`Nada arquivado.`,semTitulo:`(sem título)`,semPasta:`Sem pasta`,escolhaModelo:`Escolha um modelo`,tituloPlaceholder:`Título...`,salvando:`Salvando...`,informeTitulo:`Informe um título para salvar`,salvoAs:e=>`Salvo às ${e}`,fixar:`Fixar`,desafixar:`Desafixar`,arquivar:`Arquivar`,restaurar:`Restaurar`,reuniao:`Ir para a reunião (abre a anotação com o modelo do dia)`,excluir:`Excluir anotação`,excluirTexto:`A ação não pode ser desfeita.`,excluida:`Anotação excluída.`},guias:{nova:`Nova guia`,buscar:`Buscar guias...`,vazio:`Nenhuma guia ainda. Toque em + para criar a primeira, ou sincronize.`,tituloPlaceholder:`Título da guia...`,novaTitulo:`Nova guia`,excluir:`Excluir guia`,excluida:`Guia excluída.`},poesia:{nova:`Nova poesia`,buscar:`Buscar poesias...`,vazio:`Nenhuma poesia ainda. Toque em + para criar a primeira, ou sincronize.`,tituloPlaceholder:`Título da poesia...`,novaTitulo:`Nova poesia`,excluir:`Excluir poesia`,excluida:`Poesia excluída.`,favoritar:`Adicionar aos favoritos`,desfavoritar:`Remover dos favoritos`,anterior:`Anterior`,proxima:`Próxima`,sobre:`Sobre estas obras`,referencia:e=>`#${e??``}`,aviso:[`As obras aqui expostas têm um valor artístico, literário, baseado nas crenças das Testemunhas de Jeová. Seu objetivo é enaltecer a Jeová, o verdadeiro Deus e legítimo Soberano Universal, fortalecer a esperança em Suas maravilhosas e incomparáveis promessas, ocupar nossos pensamentos com “tudo que é verdadeiro, tudo que é de séria preocupação, tudo que é justo, tudo que é casto, tudo que é amável, tudo de que se fala bem, tudo que é virtuoso e tudo que é digno de louvor.” (Fil 4:8) A glória por qualquer benefício daqui derivado cabe a Jeová, o dador de todo presente perfeito, inclusive nossa capacidade de pensar e amar.`,`Todos os personagens usados nesta obra são fictícios. Quaisquer nomes de personagens originam-se de nomes de raças felinas e imagens são meramente ilustrativas.`,`Para saber mais sobre as crenças das Testemunhas de Jeová acesse o site jw.org.`]},receitas:{nova:`Nova receita`,buscar:`Buscar receitas...`,vazio:`Nenhuma receita disponível. Toque em + para criar a primeira, ou sincronize.`,tituloPlaceholder:`Título da receita...`,novaTitulo:`Nova receita`,excluir:`Excluir receita`,excluida:`Receita excluída.`,todas:`Todas`,categoria:`Categoria`,ingredientes:`Ingredientes`,preparo:`Modo de preparo`,ingredientesPlaceholder:`Um ingrediente por linha...`,preparoPlaceholder:`Um passo por linha...`,favoritar:`Adicionar aos favoritos`,desfavoritar:`Remover dos favoritos`},estudo:{intro:`Uma sessão de estudo: escolha o tipo, ore, cronometre e guarde o que aprendeu.`,tipo:`Tipo de estudo`,assunto:`Assunto`,assuntoPlaceholder:`O que você vai estudar...`,semAssunto:`(sem assunto)`,alvo:`Alvo de tempo`,minutos:e=>`${e} min`,de:e=>`de ${e} min`,comecar:`Começar`,oracaoTitulo:`Antes de começar`,oracaoTexto:`"Portanto, se falta sabedoria a algum de vocês, que ele persista em pedi-la a Deus — pois ele dá a todos generosamente, sem censurar —, e ela lhe será dada." (Tiago 1:5)`,orei:`Já orei — Quero começar`,emSessao:`Em estudo`,alvoAtingido:`Alvo de tempo atingido. Siga enquanto o assunto render.`,encerrar:`Encerrar`,descartar:`Descartar`,descartarTitulo:`Descartar esta sessão?`,descartarTexto:`O tempo, o assunto e a pérola desta sessão são apagados, e nada vai para o histórico. Não há como desfazer.`,perola:`Pérola`,perolaIntro:e=>`${e} min de estudo. O que você leva daqui?`,perolaPlaceholder:`Uma ideia, um texto, uma aplicação...`,viraAnotacao:`Virar anotação`,salvarSessao:`Salvar sessão`,marcarAnotacao:`Virar anotação, na pasta Pérolas`,marcarCaderno:`Guardar no Caderno de Estudo`,semPerolaParaMarcar:`Escreva a pérola para guardá-la também em outro lugar.`,sessaoSalva:`Sessão salva`,naoSalvou:`Não foi possível salvar a sessão. Tente de novo.`,historico:`Histórico`,totais:(t,n)=>`${e(t,{one:`${t} sessão`,other:`${t} sessões`})} · ${n} de estudo.`,semSessoes:`Nenhuma sessão registrada ainda.`,excluir:`Excluir sessão`},prep:{indice:`Índice de prontidão`,indiceAjuda:`Checklists + autonomia de alimentos`,kits:`Checklists de Prontidão`,estoque:`Estoque de alimentos`,cofre:`Cofre de documentos`,guias:`Guias Táticos`,guiasResumo:`Orientações e procedimentos`,cofreResumo:`Documentos criptografados`,contagemKits:t=>e(t,{one:`${t} kit`,other:`${t} kits`}),diasAutonomia:t=>e(t,{one:`${t} dia de autonomia`,other:`${t} dias de autonomia`}),semKits:`Nenhum kit ainda. Toque em + para criar o primeiro checklist.`,novoKit:`Novo checklist`,editarKit:`Editar checklist`,kitSemNome:`Sem nome`,nomeDoKit:`Nome do checklist`,emoji:`Emoji`,emojiAjuda:`Um emoji para reconhecer o kit na lista (opcional).`,itens:`Itens`,descricaoDoItem:`O que levar...`,quantidade:`Quantidade`,observacoes:`Observações`,adicionarItem:`Adicionar item`,removerItem:`Remover item`,removerItemTexto:`O item sai deste checklist.`,kitSalvo:`Checklist salvo.`,excluirKit:`Excluir checklist`,kitExcluido:`Checklist excluído.`,vence:e=>`vence ${e}`,novoItem:`Novo item`,editarItem:`Editar item`,item:`Item`,categoria:`Categoria`,pesoUnitario:`Peso unitário (g)`,kcal:`Calorias por 100 g`,validade:`Validade`,itemSalvo:`Item salvo.`,excluirItem:`Excluir item`,itemExcluido:`Item excluído.`,buscarItens:`Buscar no estoque...`,semEstoque:`O estoque está vazio.`,semEstoqueFiltro:`Nenhum item para esta busca.`,resumoDoItem:(e,t)=>`${e} × ${t} g`,alertas:t=>e(t,{one:`${t} alerta de validade`,other:`${t} alertas de validade`}),vencidoHa:e=>`Vencido há ${e} d`,venceHoje:`Vence hoje`,venceEm:e=>`Vence em ${e} d`,calculadora:`Calculadora de autonomia`,calculadoraAjuda:`Quem come, quanto gasta e quantos são`,faixaEtaria:`Faixa etária`,atividade:`Atividade física`,pessoas:`Pessoas`,maisPessoas:`Mais uma pessoa`,menosPessoas:`Menos uma pessoa`,diasDeAutonomia:`Dias de autonomia`,aguaSugerida:`Água sugerida`,pesoTotal:`Peso total`,metaAutonomia:e=>`${e}% da meta de 30 dias`,necessidadeDiaria:e=>`${e} kcal por dia para o grupo`,logistica:`Logística tática`,diasSemFogo:`Dias sem água/fogo`,diasComFogo:`Dias com cozimento`,itensDeFibra:`Itens de fibra`,vulneravel:`Poucos itens de fibras e vitaminas. Numa autonomia longa isso vira problema de saúde antes de virar problema de caloria.`,semBiometria:`Este navegador não oferece passkey. O cofre precisa dele para existir.`,configurarBiometria:`Proteger o cofre com a biometria`,biometriaAjuda:`O cofre abre pela biometria do aparelho (a mesma da tela de bloqueio), por um passkey criado só para ele. A chave que cifra cada documento nasce assim e não é gravada em lugar nenhum. Sem o passkey — aparelho trocado, dados do navegador apagados — não há como recuperar o que está guardado aqui. O resto do Kobi Note não depende dele.`,criarCofre:`Criar o cofre`,semPrf:`O autenticador deste aparelho não entrega a chave necessária. Tente outro autenticador, como o celular pelo QR.`,gestoRecusado:`O gesto foi cancelado.`,destrancarComBiometria:`Destrancar com a biometria`,cofreTrancado:`Cofre trancado`,destranqueAjuda:`Ele volta a trancar sozinho quando você sai desta tela.`,destrancar:`Destrancar`,trancar:`Trancar`,guardarDocumento:`Guardar um documento`,nomeDoDocumento:`Nome do documento`,informeNome:`Informe um nome.`,documentoGuardado:`Documento guardado e cifrado.`,semDocumentos:`Nenhum documento guardado ainda.`,renomearDocumento:`Renomear documento`,excluirDocumento:`Excluir documento`,excluirDocumentoTexto:`O documento cifrado é apagado do aparelho. Não há como recuperá-lo.`,documentoExcluido:`Documento excluído.`,falhaAoDecifrar:`Não foi possível decifrar: este documento foi guardado com outra chave.`,semPreVisualizacao:`Este tipo de arquivo não abre aqui. Baixe para ver.`,baixar:`Baixar`},financeiro:{transacoes:`Transações`,novaTransacao:`Nova transação`,transacaoSalva:`Transação salva.`,excluirTransacao:`Excluir transação`,transacaoExcluida:`Transação excluída.`,categorias:`Categorias`,novaCategoria:`Nova categoria`,categoriaSalva:`Categoria salva.`,excluirCategoria:`Excluir categoria`,excluirCategoriaTexto:`As transações dela continuam existindo, mas ficam sem categoria.`,categoriaExcluida:`Categoria excluída.`,recorrencias:`Recorrências`,novaRecorrencia:`Nova recorrência`,recorrenciaSalva:`Recorrência salva.`,excluirRecorrencia:`Excluir recorrência`,excluirRecorrenciaTexto:`Os lançamentos já gerados por ela continuam onde estão.`,recorrenciaExcluida:`Recorrência excluída.`,naoSalvo:`Não foi possível salvar. Confira os campos e tente de novo.`,naoExcluido:`Não foi possível excluir.`,naoAlterado:`Não foi possível alterar. Tente de novo.`,receber:`Confirmar recebimento`,receberTexto:(e,t)=>`Marcar “${e}” como recebida, no valor de ${t}?`,pagar:`Confirmar pagamento`,pagarTexto:(e,t)=>`Marcar “${e}” como paga, no valor de ${t}?`,estornar:`Desfazer a baixa`,estornarTexto:e=>`“${e}” volta a constar como em aberto.`,saldo:`Saldo realizado`,previsto:`Previsto`,mostrarValores:`Mostrar valores`,ocultarValores:`Ocultar valores`,valoresOcultos:`Os valores estão ocultos.`,mes:`Mês`,ano:`Ano`,receitas:`Receitas`,despesas:`Despesas`,aReceber:`A receber`,aPagar:`A pagar`,porCategoria:`Por categoria`,semMovimento:`Sem movimento no mês.`,limites:`Limites do mês`,deLimite:e=>`de ${e}`,limiteDe:e=>`Limite ${e}`,registros:t=>e(t,{one:`1 registro`,other:`${t} registros`}),situacao:`Situação`,vencidas:`Vencidas`,aVencer:`A vencer`,pagas:`Pagas`,todas:`Todas`,nenhumaTransacao:`Nenhuma transação ainda.`,nenhumaVencida:`Nenhuma conta vencida.`,nadaAVencer:`Nada a vencer.`,nenhumaNoMes:`Nenhuma transação neste mês.`,nadaPagoNoMes:`Nada pago neste mês.`,marcarPago:`Marcar como pago`,desmarcarPago:`Desmarcar pago`,editarTransacao:`Editar transação`,editarCategoria:`Editar categoria`,editarRecorrencia:`Editar recorrência`,descricao:`Descrição`,descricaoObrigatoria:`Informe a descrição.`,valor:`Valor`,valorObrigatorio:`Informe um valor maior que zero.`,tipo:`Tipo`,receita:`Receita`,despesa:`Despesa`,categoria:`Categoria`,semCategoria:`Sem categoria`,vencimento:`Vencimento`,pago:`Pago`,nome:`Nome`,nomeObrigatorio:`Informe o nome.`,icone:`Ícone`,cor:`Cor`,limiteMensal:`Limite mensal`,limiteAjuda:`Zero significa sem limite.`,nenhumaCategoria:`Nenhuma categoria ainda.`,periodicidade:`Periodicidade`,diaria:`Diária`,semanal:`Semanal`,mensal:`Mensal`,anual:`Anual`,diaN:e=>`dia ${e}`,diaDoMes:`Dia do mês`,diaDoMesAjuda:`O dia 31 cai no último dia dos meses mais curtos.`,diaDoMesObrigatorio:`Informe um dia entre 1 e 31.`,diaDaSemana:`Dia da semana`,lancarJaPago:`Lançar já pago`,lancarCorrente:`Lançar o vencimento deste período agora`,lancarCorrenteAjuda:`Desligado, o primeiro lançamento nasce na próxima data.`,ativa:`Ativa`,pausar:`Pausar`,retomar:`Retomar`,proxima:e=>`Próxima: ${e}`,nenhumaRecorrencia:`Nenhuma recorrência ainda.`},calendario:{vista:`Visualização`,vistas:{dia:`Dia`,semana:`Semana`,mes:`Mês`,ano:`Ano`,agenda:`Agenda`},meses:[`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Junho`,`Julho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`],mes:`Mês`,ano:`Ano`,anterior:`Período anterior`,proximo:`Próximo período`,hoje:`Hoje`,novoEvento:`Novo evento`,editarEvento:`Editar evento`,novoAs:(e,t)=>`Novo evento em ${e}, ${t}`,novoEm:e=>`Novo evento em ${e}`,dicaDoArraste:`Arraste para mudar o horário ou o dia, e puxe a borda de baixo para mudar a duração. No teclado: Alt+↑/↓ move, Alt+Shift+↑/↓ muda a duração.`,titulo:`Título`,tituloPlaceholder:`Ex.: Reunião do meio de semana`,tipo:`Tipo`,diaInteiro:`Dia inteiro`,dataInicio:`Data de início`,horaInicio:`Hora de início`,dataFim:`Data de fim`,horaFim:`Hora de fim`,descricao:`Descrição`,descricaoPlaceholder:`Detalhes (opcional)...`,eventoSalvo:`Evento salvo.`,excluirEvento:`Excluir evento`,eventoExcluido:`Evento excluído.`,eventos:t=>e(t,{one:`${t} evento`,other:`${t} eventos`}),semEventos:`Nenhum evento nesta semana.`,tipos:`Tipos de evento`,novoTipo:`Novo tipo`,tipoNome:`Nome`,cor:`Cor`,icone:`Ícone`,tipoSemNome:`Sem nome`,excluirTipo:`Excluir tipo`,tipoEmUsoTitulo:`Tipo em uso`,tipoEmUsoTexto:`Este tipo tem eventos e não pode ser excluído.`,dataInvalida:`A data de início não é uma data válida.`,eventoNaoSalvo:`O evento não pôde ser salvo. Confira os campos e tente de novo.`,eventoNaoExcluido:`O evento não pôde ser excluído.`,eventoNaoMovido:`O novo horário não pôde ser gravado, e o evento voltou para onde estava.`,tipoNaoSalvo:`O tipo não pôde ser salvo.`,tipoNaoExcluido:`O tipo não pôde ser excluído. Ele pode ter ganhado eventos agora há pouco.`},ministerio:{esfriando:(t,n)=>e(t,{one:`${t} estudo está esfriando (${n}+ dias).`,other:`${t} estudos estão esfriando (${n}+ dias).`}),verEstudos:`Ver`,lembrete:(e,t)=>`Relatório de ${e} ainda ${t?`não foi enviado`:`não foi feito`}.`,preencher:`Preencher`,atrasados:(t,n)=>e(t,{one:`Relatório em atraso: ${n}.`,other:`${t} relatórios em atraso: ${n}.`}),verRelatorios:`Ver`,anoDeServico:e=>`Ano de serviço ${e}`,resumoDoAno:t=>[e(t.meses,{one:`1 mês relatado`,other:`${t.meses} meses relatados`}),`${t.enviados} enviados`,e(t.participacoes,{one:`1 mês com participação`,other:`${t.participacoes} meses com participação`}),t.horas>0?`${t.horas} h`:``,t.maisEstudos>0?`${t.mediaEstudos} estudos por mês (máx. ${t.maisEstudos})`:``].filter(e=>e!==``).join(` · `),periodoDoAno:e=>`setembro de ${e-1} a agosto de ${e}`,anoAnterior:`Ano de serviço anterior`,anoSeguinte:`Ano de serviço seguinte`,graficoEstudos:`Estudos bíblicos por mês`,graficoHoras:`Horas por mês`,graficoParticipacao:`Participação no ministério`,contagemDoAno:`Contagem do ano`,contagemNota:`Somada do contador de cada mês. Só estatística: não vai no relatório.`,emHoras:e=>`${e} h`,valorNoMes:(e,t)=>`${e}: ${t}`,mesSemRelatorio:e=>`${e}: sem relatório`,mesEmAberto:e=>`${e}: o mês ainda não terminou`,participacaoNoMes:(e,t)=>`${e}: ${t?`participou`:`não participou`}`,atalhoRelatorios:`Relatórios`,atalhoRelatoriosSub:e=>`${e} no total`,atalhoEstudos:`Estudos`,atalhoEstudosSub:e=>`${e} ativos`,atalhoServico:`Quero fazer mais`,atalhoServicoSub:`Planejar as horas e virar meta`,ultimoRelatorio:`Último relatório`,participou:`Participou`,naoParticipou:`Não participou`,estudosDoRelatorio:e=>`${e} estudos`,enviado:`Enviado`,pendente:`Pendente`,contadores:`Contadores do mês`,zerar:`Zerar contadores`,zerarTexto:`Os cinco contadores deste mês voltam a zero. Quer continuar?`,tempo:`Tempo`,estudos:`Estudos`,revisitas:`Revisitas`,publicacoes:`Publicações`,videos:`Vídeos`,maisUmaHora:`+1h`,aumentar:e=>`Aumentar ${e}`,diminuir:e=>`Diminuir ${e}`,gerarRelatorio:`Gerar relatório do mês`,obsHoras:(e,t)=>`Horas: ${t===0?e:`${e}h${String(t).padStart(2,`0`)}`}`,obsEstudos:e=>`Estudos bíblicos: ${e}`,obsRevisitas:e=>`Revisitas: ${e}`,obsPublicacoes:e=>`Publicações: ${e}`,obsVideos:e=>`Vídeos: ${e}`,novoRelatorio:`Novo relatório`,editarRelatorio:`Editar relatório`,semRelatorios:`Nenhum relatório ainda.`,mes:`Mês`,ano:`Ano`,tipoPublicador:`Tipo de publicador`,participacao:`Participou no ministério`,observacoes:`Observações`,compartilhar:`Compartilhar`,enviar:`Enviar`,enviarAo:e=>e===``?`Enviar ao secretário`:`Enviar a ${e}`,confirmarEnvioTitulo:`O relatório foi enviado?`,confirmarEnvio:e=>`O WhatsApp abriu a conversa com ${e===``?`o secretário`:e} com o relatório já escrito. Depois de mandar a mensagem, confirme aqui para marcá-lo como enviado.`,foiEnviado:`Foi enviado`,marcadoEnviado:`Relatório marcado como enviado.`,copiadoParaEnviar:`Relatório copiado. Cole na conversa com o secretário e, depois de mandar, marque-o como enviado.`,semSecretario:`Sem o telefone do secretário no Perfil, o relatório vai pelo compartilhamento do aparelho, e é você quem escolhe para onde.`,marcarEnviado:`Marcar como enviado`,marcarPendente:`Marcar como pendente`,excluirRelatorio:`Excluir relatório`,relatorioSalvo:`Relatório salvo.`,relatorioExcluido:`Relatório excluído.`,resumoRelatorio:(e,t,n,r)=>`${e} · ${t?`participou`:`não participou`} · ${n} estudos${r}`,sufixoHoras:(e,t)=>` · ${e}h${t===0?``:String(t).padStart(2,`0`)}`,semPublicador:`O relatório sai sem dizer de quem é: o seu nome não está no Perfil.`,irAoPerfil:`Preencher o Perfil`,relatorioDe:e=>`Relatório — ${e}`,linhaPublicador:e=>`Publicador: ${e}`,linhaTelefone:e=>`Telefone: ${e}`,linhaEmail:e=>`E-mail: ${e}`,linhaCongregacao:e=>`Congregação: ${e}`,linhaGrupo:e=>`Grupo: ${e}`,linhaTipo:e=>`Tipo: ${e}`,linhaParticipacao:e=>`Participou no ministério: ${e?`Sim`:`Não`}`,linhaObservacoes:e=>`Observações:\n${e}`,novoEstudo:`Novo estudo`,editarEstudo:`Editar estudo`,buscarEstudos:`Buscar estudos...`,semEstudos:`Nenhum estudo aqui.`,semEstudosFiltro:`Nenhum estudo para esta busca.`,nome:`Nome`,semNome:`Sem nome`,contato:`Contato`,contatoPlaceholder:`Telefone, e-mail...`,endereco:`Endereço`,publicacaoAtual:`Publicação atual`,publicacaoPlaceholder:`Publicação usada no estudo`,diaSemana:`Dia da semana`,escolhaDia:`Escolha o dia...`,horario:`Horário`,notas:`Notas`,excluirEstudo:`Excluir estudo`,excluirEstudoTexto:`A linha do tempo deste estudo é apagada junto.`,estudoSalvo:`Estudo salvo.`,estudoExcluido:`Estudo excluído.`,informeNome:`Dê um nome ao estudo.`,seloEsfriando:`Esfriando`,ultimoEstudo:`Último estudo:`,parouEm:`Parou em:`,nenhumRegistro:`Nenhum registro. Clique aqui para registrar o primeiro estudo.`,hoje:`Hoje`,ontem:`Ontem`,haDias:e=>`Há ${e} dias`,estudoDe:e=>`📖 ${e}`,linhaPublicacao:e=>`Publicação: ${e}`,linhaOndeParou:e=>`Onde parou: ${e}`,linhaDia:(e,t)=>`Dia: ${e} ${t}`,linhaContato:e=>`Contato: ${e}`,linhaEndereco:e=>`Endereço: ${e}`,linhaDoTempo:`Linha do tempo`,registrarEstudo:`Registrar estudo`,editarRegistro:`Editar registro`,semRegistros:`Nenhum registro ainda. Toque em + após cada estudo.`,data:`Data`,ondeParou:`Onde parou`,ondeParouPlaceholder:`Ex.: lição 12, parágrafo 5`,informeOndeParou:`Informe onde o estudo parou.`,comentario:`Comentário`,comentarioPlaceholder:`Como foi o estudo, dúvidas, próximos passos...`,excluirRegistro:`Excluir registro`,registroSalvo:`Registro salvo.`,registroExcluido:`Registro excluído.`},jogo:{restantes:`Restantes`,acertos:`Acertos`,erros:`Erros`,partidas:`Partidas`,xpDisponivel:`XP disponível`,modo:`Modo`,modos:{estudo:`Estudo`,desafio:`Desafio`},desafioAjuda:`Timer por pergunta · bônus de XP por velocidade e sequência`,dificuldade:`Dificuldade`,dificuldades:[`Todas`,`Fácil`,`Médio`,`Difícil`],jogar:`Começar`,semBanco:`Sem perguntas — sincronize`,semPerguntas:`Esta dificuldade não tem perguntas suficientes (mínimo 2). Escolha outra ou sincronize mais perguntas.`,tudoConcluido:`Você já respondeu todas as perguntas desta dificuldade!`,reiniciar:`Reiniciar`,reiniciarTitulo:`Reiniciar perguntas`,reiniciarTexto:`Zera as perguntas já respondidas (seu XP é mantido). Quer continuar?`,encerrar:`Encerrar jogo`,segundos:e=>`${e}s`,pausadoSelo:`pausado`,pausar:`Pausar`,retomar:`Retomar`,dica:e=>`Dica (${e} XP)`,explicacao:`Explicação`,feedbackCorreto:e=>`Correto! +${e} XP`,feedbackIncorreto:`Resposta incorreta`,feedbackTempo:`Tempo esgotado!`,proxima:`Próxima`,verResultado:`Ver resultado`,tituloResultado:`Resultado`,resultados:{perfeito:`Perfeito! 🎉`,excelente:`Excelente!`,muitoBem:`Muito bem!`,continue:`Continue praticando!`,naoDesista:`Não desista, tente de novo!`},acertosDe:(e,t,n)=>`${e} de ${t} acertos (${n}%)`,xpGanho:`XP ganho`,nivel:`Nível`,xpSaldo:`XP saldo`,anotarNoCaderno:`Anotar no Caderno de Estudo`,cadernoTitulo:`Jogo Você se lembra?`,cadernoConteudo:(e,t,n)=>`Acertei ${e} de ${t} (${n}%). O que aprendi:\n`,jogarDeNovo:`Jogar de novo`,inicio:`Início`},leituraBiblia:{visualizacao:`Visualização`,visoes:{canonica:`Canônica`,cronologica:`Cronológica`,escritor:`Escritor`,celebracao:`Celebração`},visoesAjuda:{canonica:`Ordem canônica: Gênesis a Apocalipse`,cronologica:`Pela estimativa de quando cada livro foi escrito`,escritor:`Agrupada por escritor`,celebracao:`Leitura para a época da Celebração da morte de Cristo`},progressoGeral:`Progresso geral`,capitulos:(e,t)=>`${e} de ${t} capítulos`,capituloAbrev:(e,t)=>`${e}/${t} cap.`,livros:(e,t)=>`${e} de ${t} livros`,livroInteiro:`Livro inteiro`,limpar:`Limpar`,roteiro:`Roteiro da Celebração`,roteiroNota:`Acontecimentos da última semana de Jesus na Terra (Nisã 8 a 16) — leitura para a época da Celebração da morte de Cristo.`,trechos:(e,t)=>`${e} de ${t} trechos lidos`},servico:{intro:`Uma meta anual não cabe na cabeça de ninguém; "duas horas e meia, três vezes por semana" cabe. Escolha o alvo e os dias, e veja o que ele pede de cada saída.`,modalidade:`Modalidade de serviço`,semCota:`sem cota de horas`,horasMes:e=>`${e} h por mês`,alvo:`Alvo de horas no período`,alvoValor:e=>`${e} h`,prazo:`Período`,prazoValor:t=>e(t,{one:`${t} mês`,other:`${t} meses`}),mediaMes:e=>`Média de ${e} por mês.`,diasTitulo:`Dias em que pretendo sair`,semDias:`Escolha ao menos um dia da semana para a conta ter onde cair.`,gradeTitulo:`O que isso significa`,porSaida:`Em cada saída`,porSemana:`Por semana`,porMes:`Por mês`,porAno:`No ritmo de um ano`,saidas:`Saídas no período`,saidasValor:t=>e(t,{one:`${t} saída`,other:`${t} saídas`}),inviavel:`Mais de dez horas numa só saída — o alvo não cabe nos dias escolhidos. Acrescente dias, alongue o período ou reduza o alvo.`,mesAnterior:`Mês anterior`,mesSeguinte:`Próximo mês`,resumoDoMes:(t,n)=>e(t,{one:`${t} saída neste mês, para ${n}.`,other:`${t} saídas neste mês, para ${n}.`}),registrar:`Registrar como meta`,gravando:`Gravando...`,gravada:`Meta registrada. Ela acompanha sozinha as horas dos seus relatórios.`,naoGravada:`A meta não pôde ser registrada. Tente de novo.`,verMetas:`Ver metas`,tituloDaMeta:e=>`${e}: horas de campo`,fonteAviso:`As horas de cada modalidade são um ponto de partida para preencher o campo, não uma exigência afirmada por este app: confirme sempre a instrução vigente. Referências no jw.org:`,referencias:[{rotulo:`🌐 Alcance mais no serviço a Jeová`,url:`https://www.jw.org/finder?wtlocale=T&docid=201999284`},{rotulo:`🌐 Você pode aumentar sua participação?`,url:`https://www.jw.org/finder?wtlocale=T&docid=201998083`}]},metas:{nova:`Nova meta`,editar:`Editar meta`,buscar:`Buscar metas...`,filtros:{ativas:`Ativas`,concluidas:`Concluídas`,todas:`Todas`},resumo:(t,n)=>`${t} em andamento · ${e(n,{one:`${n} concluída`,other:`${n} concluídas`})}.`,vazio:`Nenhuma meta ainda. Toque em + para criar a primeira.`,semFiltro:`Nenhuma meta para este filtro.`,titulo:`Título`,tituloPlaceholder:`O que você quer alcançar...`,informeTitulo:`Dê um título à meta.`,categoria:`Categoria`,ativo:`Categoria do Financeiro`,alvo:e=>`Alvo (${e})`,automatica:`Automática`,automaticaAjuda:`O progresso vem do módulo de origem — não é digitado aqui.`,inicio:`Início`,prazoFinal:`Prazo final`,prazo:e=>`prazo ${e}`,aumentar:`Aumentar o progresso`,diminuir:`Diminuir o progresso`,concluir:`Concluir`,reabrir:`Reabrir`,salva:`Meta salva.`,excluir:`Excluir meta`,excluida:`Meta excluída.`},perfil:{cartao:`Cartão de visita`,congregacaoSecao:`Congregação`,congregacao:`Congregação`,grupo:`Grupo de campo`,secretario:`Secretário da Congregação`,saude:`Saúde (ICE — Em Caso de Emergência)`,gestacao:`Gestação`,dpa:`Diretrizes de sangue (DPA)`,emergencia:`Contato de emergência`,colih:`CoLiH`,identificacao:`Identificação complementar`,nome:`Nome completo`,telefone:`Telefone`,email:`E-mail`,link:`Link pessoal`,comentario:`Observação (nota aparece no contato)`,telefoneDuvidoso:`Este telefone não parece completo — dá para salvar assim mesmo.`,emailDuvidoso:`Este e-mail não parece completo — dá para salvar assim mesmo.`,cpfDuvidoso:`Este CPF não confere e não foi salvo. Corrija-o.`,dataDuvidosa:`Esta data não existe no calendário e não foi salva. Corrija-a.`,tipo_sanguineo:`Tipo sanguíneo`,selecione:`Selecione...`,doador:`Doador de órgãos`,alergias:`Alergias`,medicamentos:`Medicamentos em uso`,observacoes:`Observações médicas`,gestante:`Gestante`,meses:`Meses de gestação`,mes:t=>e(t,{one:`${t} mês`,other:`${t} meses`}),mesesGestacao:t=>e(t,{one:`${t} mês de gestação`,other:`${t} meses de gestação`}),parto:`Data prevista do parto`,partoEm:e=>`parto previsto ${e}`,recusa:`Recuso transfusão de sangue`,naoApliqueSangue:`NÃO APLIQUE SANGUE`,portadorDiretriz:`Portador de cartão de diretrizes de recusa de transfusão de sangue.`,fracoes:`Frações aceitas por consciência`,dpaAssinado:`Cartão DPA físico atualizado e assinado em`,dpa_assinado_em:e=>`DPA assinado em ${e}`,dpaRenovar:e=>`· renovar em ${e} dias`,dpaVencido:`· vencido`,dpaVencidoAviso:e=>`O cartão DPA venceu em ${e}. Renove-o e atualize a data da assinatura.`,dpaVencidoResumo:`DPA vencido`,abrirPerfil:`Abrir o Perfil`,contatoNome:`Nome do contato`,contatoTelefone:`Telefone do contato`,sus:`Cartão SUS`,cpf:`CPF do titular`,upa:`UPA / hospital de referência`,sim:`Sim`,gestanteMaiusculo:`GESTANTE`,tituloCartao:`Cartão de contato`,tituloFicha:`Ficha de emergência`,semNome:`Sem nome`,semCartao:`Preencha nome e telefone no perfil para gerar o cartão.`,qrAlt:`QR com o cartão de contato (vCard)`,semFicha:`Sem dados de emergência. Preencha no perfil.`},cronologia:{intro:`De um lado a cronologia bíblica, do outro os fatos da história. Cada evento tem o link da fonte de onde saiu. Os cards históricos vêm de acervos oficiais fora de jw.org (UNESCO, Louvre, ONU, arquivos, museus, etc.) e seguem a datação acadêmica convencional.`,buscar:`Buscar na linha do tempo...`,limpar:`Limpar filtros`,fonte:`Ver a fonte`,eventos:t=>e(t,{one:`${t} evento`,other:`${t} eventos`}),vazio:`A linha do tempo ainda não foi sincronizada. Aguarde novidades em breve.`,semFiltro:`Nenhum evento para este filtro.`},imite:{titulo:`Imite a Sua Fé`,subtitulo:`Um atrito por cartão, e a pergunta que o desarma: e se a intenção dele fosse boa? Olhar pela lente certa muda a história que contamos a nós mesmos. Errar a lente não custa nada — é nas lentes erradas que está o ensino.`,vazio:`Nenhum cartão disponível ainda. Aguarde novidades em breve.`,cenario:`O atrito`,julgamento:`O que passa pela cabeça`,pergunta:`Qual destas lentes explica melhor a intenção do outro?`,espelhoDica:`No fim do cartão há uma pergunta sobre você. O que você escrever ali fica no Caderno de Estudo.`,comecar:`Escolher a lente`,conferir:`Confirmar a lente`,acerto:`É essa. Repare no que muda quando a intenção é lida assim.`,erro:`Essa lente ainda julga a pessoa, e não a intenção. Olhe de novo.`,lente:`A lente da boa intenção`,exemplos:`Quem mais fez isso na Bíblia`,lerFonte:`Ler a fonte no jw.org`,espelhoTitulo:`Seu Reflexo no Espelho`,espelhoPlaceholder:`Responda com sinceridade — ninguém além de você vai ler...`,seloEspelho:`Espelho Escrito`,seloFeito:`Selo do Espelho Escrito conquistado!`,outrosCartoes:`Outros cartões`,inicio:`Início`},principios:{titulo:`Princípios Bíblicos`,subtitulo:`O que a Bíblia diz sobre as decisões do dia a dia — a frase que resume, os textos que a sustentam e como ela se parece numa terça-feira comum.`,vazio:`Nenhum princípio disponível ainda. Aguarde novidades em breve.`,semResultado:`Nenhum princípio para esta busca.`,buscar:`Buscar por assunto ou texto bíblico...`,favoritos:`Seus favoritos`,favoritar:`Marcar como favorito`,desfavoritar:`Tirar dos favoritos`,comAnotacao:`Você escreveu sobre este princípio`,lido:`Você já leu este princípio`,areaLida:`Você leu todos os princípios desta área`,progresso:`Quantos princípios do acervo você já leu`,porQue:`Por que isso existe`,naPratica:`Como isso se parece num dia comum`,lerFonte:`Ler o texto na Bíblia on-line`,paraRefletir:`Para refletir`,reflexaoPlaceholder:`Responda com sinceridade — ninguém além de você vai ler...`,outros:`Outros princípios`,inicio:`Início`},faq:{titulo:`Respostas Frequentes`,subtitulo:`Uma pergunta por vez, das que aparecem na porta, no trabalho, na mesa de domingo. Primeiro a cena e a resposta que vem de impulso; depois as lentes — os ângulos por onde dá para responder. Errar a lente não custa nada: é nelas que está o ensino.`,vazio:`Nenhuma pergunta disponível ainda. Aguarde novidades em breve.`,semResultado:`Nenhuma pergunta para esta busca.`,buscar:`Buscar por pergunta ou texto bíblico...`,favoritos:`Seus favoritos`,favoritar:`Marcar como favorito`,desfavoritar:`Tirar dos favoritos`,respondida:`Você já fez esta pergunta`,categoriaConcluida:`Você fez todas as perguntas desta categoria`,progresso:`Quantas perguntas do acervo você já fez`,cenario:`Onde a pergunta aparece`,impulso:`O que vem primeiro à cabeça`,enunciado:`Qual destas lentes responde de verdade o que foi perguntado?`,preparoDica:`No fim há um espaço para a sua resposta, com as suas palavras. O que você escrever ali fica no Caderno de Estudo.`,comecar:`Escolher a lente`,conferir:`Confirmar a lente`,acerto:`É essa. Repare no que ela abre em vez de fechar.`,erro:`Essa lente responde outra coisa, ou encerra a conversa. Olhe de novo.`,aResposta:`A resposta pela Bíblia`,exemplos:`Quem respondeu assim na Bíblia`,lerArtigo:`Ler o assunto no jw.org`,paraPreparar:`Com as suas palavras`,respostaPlaceholder:`Escreva como você diria isso em suas próprias palavras...`,seloPalavras:`Você escreveu a sua resposta`,seloFeito:`Selo “Com as Suas Palavras” conquistado!`,outras:`Outras perguntas`,inicio:`Início`},criacao:{vazio:`Nenhum módulo disponível ainda. Aguarde novidades em breve.`,acerto:`Isso mesmo!`,erro:`Ainda não. Observe e tente de novo.`,ajuste:`Quase lá — ajuste até alcançar a meta.`,escolha:`Escolha uma opção antes de verificar.`,equilValorX:`Valor do x`,equilPendeDir:`A balança pende para a direita: o lado do x está leve. Aumente o x.`,equilPendeEsq:`A balança pende para a esquerda: o lado do x está pesado. Diminua o x.`,equilOk:e=>`Equilíbrio! Os dois lados pesam ${e}. Você achou o x que nivela a balança.`,paresErro:`Reveja: marque exatamente as colunas com pareamento errado (A-T, C-G).`,rotaIncompleta:`Visite todas as flores antes de verificar.`,rotaOtima:`Rota mais curta encontrada!`,rotaLonga:`Há um caminho mais curto. Tente recomeçar.`,orbInforme:`Ajuste a velocidade de impulso e toque em Lançar.`,orbVoando:`Em trajetória...`,orbCai:`Velocidade baixa demais: o corpo caiu em direção ao Sol.`,orbEscapa:`Velocidade alta demais: o corpo escapou para o espaço.`,orbAjuste:`Ainda não. Ajuste a velocidade e lance de novo até obter uma órbita estável.`,escudoFraco:`Campo fraco: o vento solar ainda atinge a Terra.`,escudoOk:`Campo forte: as partículas são desviadas para os polos (auroras) ✔`,conceito:`Conceito`,desafio:`Desafio`,ampliar:`Toque para ampliar`,fechar:`Fechar`,fonte:`Fonte: jw.org`,lerFonte:`Ler a fonte no jw.org`,comecar:`Começar`,verificar:`Verificar`,avancar:`Confirmar e avançar`,concluirMapa:`Concluir o mapa`,concluir:`Concluir`,leiaReflexao:`Leia a reflexão a seguir.`,concluido:`Módulo concluído — leia a reflexão abaixo.`,diligenteSelo:`Estudo Diligente`,diligenteDica:`Ao concluir, escreva no Caderno o que você aprendeu para ganhar o selo de Estudo Diligente.`,diligenteFeito:`Selo de Estudo Diligente conquistado!`,reflexaoTitulo:`Teve um Projeto?`,reflexaoEntenda:`O que você acabou de entender`,cadernoTitulo:`Caderno do Investigador`,cadernoPlaceholder:`Escreva, com suas palavras, o que este módulo lhe ensinou sobre a sabedoria do Criador...`,outrosModulos:`Outros módulos`,inicio:`Início`,recomecar:`Recomeçar`,lancar:`Lançar`,girar:`Arraste para girar · pinça/scroll para aproximar.`,atomoDica:`Um próton por vez: veja as camadas se refazerem a cada elemento.`,proximoNumero:`Escolha o próximo número`,ordenarDica:`Toque os eventos na ordem em que aconteceram (toque de novo para tirar).`,paresDica:`Toque nas colunas cujo pareamento está errado (válidos: A-T e C-G).`,rotaDica:`A abelha sai da colmeia, visita todas as flores e volta. Toque nas flores na ordem que faz o caminho mais curto (toque de novo para desfazer).`,rotaMedida:(e,t)=>`Seu caminho: ${e}  ·  menor possível: ${t}`,ciclosRecomecar:`Começar de novo`,explorarDica:`Toque cada visão para abri-la.`,explorarDesdobra:`desdobra`,gaivotaMesmo:`Mesma direção`,gaivotaOposto:`Direções opostas`,gaivotaVolta:`Volta ao corpo`,gaivotaPe:`Chega ao pé`,gaivotaCalor:`Calor recuperado`,proteinaRecorde:`Recorde`,proteinaAgora:`Agora`,proteinaRelogio:`Relógio da improbabilidade`,proteinaNecessarias:`Tentativas necessárias`,proteinaFaltam:`Ainda faltam`,proteinaTempo:`A 1 bilhão de tentativas por segundo, o cálculo levaria`,proteinaAnos:`anos para concluir.`,ciclosFechados:`ciclos fechados`,visoes:`visões`,camadas:`camadas`},caderno:{ver:`Ver no Caderno de Estudo`,intro:`Reúne o que você escreve em Entenda Melhor, Teve um Projeto?, Estudo Pessoal e outros módulos — e as suas anotações avulsas.`,nova:`Nova anotação`,editar:`Editar anotação`,buscar:`Buscar...`,todasOrigens:`Todas as origens`,origem:`Origem`,titulo:`Título`,tituloPlaceholder:`Um título curto (opcional)`,referencia:`Referência`,referenciaPlaceholder:`Módulo, texto bíblico, assunto... (opcional)`,conteudo:`O que você aprendeu`,conteudoPlaceholder:`Escreva, com suas palavras, o que este estudo lhe ensinou...`,semConteudo:`Escreva o que você aprendeu antes de salvar.`,vazio:`Seu caderno está vazio. Anote o que aprender nos estudos.`,semFiltro:`Nenhuma anotação para este filtro.`,salva:`Anotação salva.`,excluir:`Excluir anotação`,excluida:`Anotação excluída.`},tutorial:{intro:`Como usar o Kobi Note — uma explicação por módulo.`,visaoGeral:`Visão geral`,modulos:`Módulos`,vazio:`O tutorial ainda não foi sincronizado. Aguarde novidades em breve.`,semTopico:`Este módulo ainda não tem um tópico escrito no tutorial.`},notas:{titulo:`Notas de rodapé`,voltar:`Voltar ao ponto da nota`}},At=`modulepreload`,jt=function(e,t){return new URL(e,t).href},Mt={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=jt(t,n),t=s(t),t in Mt)return;Mt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:At,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Nt=[{tag:`pt-BR`,nome:`Português (Brasil)`},{tag:`en`,nome:`English`,carregar:()=>b(()=>import(`./en-fBkXxoNE.js`),__vite__mapDeps([0,1]),import.meta.url)},{tag:`es-ES`,nome:`Español (España)`,carregar:()=>b(()=>import(`./es-ES-DDYRF0Zv.js`),__vite__mapDeps([2,1]),import.meta.url)}],Pt=`note_idioma`,Ft=kt,It=Nt[0]?.tag??`pt-BR`,x=Ft;function Lt(){return It}function Rt(){let e=null;try{e=localStorage.getItem(Pt)}catch{}if(e!==null&&Nt.some(({tag:t})=>t===e))return e;let t=navigator.language?.toLowerCase()??``;return Nt.find(({tag:e})=>e.toLowerCase().split(`-`)[0]===t.split(`-`)[0])?.tag??It}function zt(e,t){let n={...e};for(let[r,i]of Object.entries(t)){let t=e[r];n[r]=typeof t==`object`&&t&&!Array.isArray(t)?{...t,...i}:i}return n}async function Bt(e){let n=Nt.find(t=>t.tag===e);if(n===void 0)throw Error(`idioma desconhecido: ${e} (ver src/i18n/idioma.ts)`);Ft=n.carregar===void 0?kt:zt(kt,(await n.carregar()).default),x=Ft,It=n.tag,t(n.tag),document.documentElement.lang=n.tag;try{localStorage.setItem(Pt,n.tag)}catch{}}var Vt=[{id:`prep-kits`,get rotulo(){return x.prep.kits},icone:`clipboard-list`,cor:`#dc3545`,rota:`prep/kits`},{id:`prep-estoque`,get rotulo(){return x.prep.estoque},icone:`package`,cor:`#e8590c`,rota:`prep/estoque`},{id:`prep-cofre`,get rotulo(){return x.prep.cofre},icone:`lock`,cor:`#495057`,rota:`prep/cofre`}],Ht=[{id:`anotacoes`,get rotulo(){return x.modulos.anotacoes},icone:`notes`,cor:`#0d6efd`},{id:`guias`,get rotulo(){return x.modulos.guias},icone:`map-2`,cor:`#20c997`},{id:`poesia`,get rotulo(){return x.modulos.poesia},icone:`feather`,cor:`#0dcaf0`},{id:`receitas`,get rotulo(){return x.modulos.receitas},icone:`chef-hat`,cor:`#fd7e14`},{id:`jogo`,get rotulo(){return x.modulos.jogo},icone:`device-gamepad-2`,cor:`#2f9e44`},{id:`criacao`,get rotulo(){return x.modulos.criacao},icone:`compass`,cor:`#0ca678`},{id:`entenda`,get rotulo(){return x.modulos.entenda},icone:`bulb`,cor:`#fd7e14`},{id:`imite`,get rotulo(){return x.modulos.imite},icone:`heart-handshake`,cor:`#d63384`},{id:`principios`,get rotulo(){return x.modulos.principios},icone:`scale`,cor:`#c92a2a`},{id:`faq`,get rotulo(){return x.modulos.faq},icone:`message-question`,cor:`#4263eb`},{id:`cronologia`,get rotulo(){return x.modulos.cronologia},icone:`timeline`,cor:`#82c91e`},{id:`caderno`,get rotulo(){return x.modulos.caderno},icone:`book-2`,cor:`#f59f00`},{id:`prep`,get rotulo(){return x.modulos.prep},icone:`shield-check`,cor:`#dc3545`},{id:`financeiro`,get rotulo(){return x.modulos.financeiro},icone:`cash`,cor:`#198754`},{id:`metas`,get rotulo(){return x.modulos.metas},icone:`target`,cor:`#0d6efd`,noPainel:!0},{id:`ministerio`,get rotulo(){return x.modulos.ministerio},icone:`users`,cor:`#0ca678`},{id:`servico`,get rotulo(){return x.modulos.servico},icone:`trending-up`,cor:`#0dcaf0`,dentroDe:`ministerio`},{id:`estudo`,get rotulo(){return x.modulos.estudo},icone:`hourglass`,cor:`#7048e8`},{id:`leitura`,get rotulo(){return x.modulos.leitura},icone:`book`,cor:`#1c7ed6`},{id:`calendario`,get rotulo(){return x.modulos.calendario},icone:`calendar`,cor:`#0dcaf0`},{id:`perfil`,get rotulo(){return x.modulos.perfil},icone:`id-badge-2`,cor:`#dc3545`},{id:`tutorial`,get rotulo(){return x.modulos.tutorial},icone:`help-circle`,cor:`#f59f00`},{id:`sobre`,get rotulo(){return x.modulos.sobre},icone:`info-circle`,cor:`#6c757d`}],Ut=[{id:`dia`,painel:`hoje`,itens:[{tipo:`modulo`,id:`anotacoes`},{tipo:`modulo`,id:`calendario`},{tipo:`modulo`,id:`ministerio`}]},{id:`numeros`,painel:`indicadores`,itens:[]},{id:`estudo`,get titulo(){return x.secoes.estudo},itens:[{tipo:`modulo`,id:`leitura`},{tipo:`modulo`,id:`estudo`},{tipo:`modulo`,id:`imite`},{tipo:`modulo`,id:`principios`},{tipo:`modulo`,id:`faq`},{tipo:`modulo`,id:`jogo`},{tipo:`modulo`,id:`entenda`},{tipo:`modulo`,id:`criacao`},{tipo:`modulo`,id:`cronologia`},{tipo:`modulo`,id:`poesia`},{tipo:`modulo`,id:`caderno`}]},{id:`prep`,get titulo(){return x.secoes.prep},painel:`prontidao`,itens:[{tipo:`atalho`,id:`prep-kits`},{tipo:`atalho`,id:`prep-estoque`},{tipo:`atalho`,id:`prep-cofre`},{tipo:`modulo`,id:`guias`}]},{id:`extras`,get titulo(){return x.secoes.extras},itens:[{tipo:`modulo`,id:`receitas`}]},{id:`pessoal`,get titulo(){return x.secoes.pessoal},itens:[{tipo:`modulo`,id:`financeiro`},{tipo:`modulo`,id:`perfil`}]},{id:`aplicativo`,get titulo(){return x.secoes.aplicativo},itens:[{tipo:`modulo`,id:`tutorial`},{tipo:`acao`,id:`sincronizar`},{tipo:`acao`,id:`convite`},{tipo:`modulo`,id:`sobre`}]}],Wt=new Map(Ht.map(e=>[e.id,e])),Gt=new Map(Vt.map(e=>[e.id,e]));function Kt(e){return Wt.get(e)}function qt(e){return Gt.get(e)}function Jt(e){return u.features[e]===!0}function Yt(){let[e=``,t=``]=location.hash.replace(/^#\/?/,``).split(`?`),n=e.split(`/`).filter(e=>e!==``);return{modulo:n[0]??`home`,args:n.slice(1),query:new URLSearchParams(t)}}function Xt(e){location.hash=e.startsWith(`#`)?e:`#/${e.replace(/^\//,``)}`}function Zt(e){addEventListener(`hashchange`,()=>e(Yt())),e(Yt())}var Qt=new Set;function $t(e,t){Qt.has(e)||(Qt.add(e),addEventListener(`hashchange`,()=>{Yt().modulo!==e&&t()}))}var en=()=>{};function tn(e){en=e}function nn(){en()}var rn=`false`,an=`false`,on=rn===`true`,sn=an===`true`;function cn(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,on||u?.()};async function ee(){if(`serviceWorker`in navigator){if(c=await b(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[],import.meta.url).then(({Workbox:e})=>new e(`./sw.js`,{scope:`./`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!sn){if(on)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`./sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=ee(),d}function ln(){let e=cn({onNeedRefresh(){un(()=>{e(!0)})}})}function un(e){let t=Object.assign(document.createElement(`kk-alert`),{variant:`primary`,closable:!0}),n=document.createElement(`kk-icon`);n.setAttribute(`slot`,`icon`),n.setAttribute(`name`,`sparkles`);let r=document.createElement(`strong`);r.textContent=x.atualizacao.titulo;let i=document.createElement(`kk-button`);i.setAttribute(`size`,`small`),i.setAttribute(`variant`,`primary`),i.textContent=x.atualizacao.acao,i.addEventListener(`click`,e),t.append(n,r,document.createTextNode(` ${x.atualizacao.texto} `),i),document.body.append(t),t.toast()}var dn=864e5;function fn(e=new Date){let t=e instanceof Date?e:new Date(e),n=String(t.getMonth()+1).padStart(2,`0`),r=String(t.getDate()).padStart(2,`0`);return`${t.getFullYear()}-${n}-${r}`}function pn(e=new Date){return fn(e).slice(0,7)}function mn(e){return fn(new Date(Date.now()+e*dn))}function hn(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t=0,n=0,r=0]=e.split(`-`).map(Number),i=new Date(t,n-1,r);return i.getFullYear()===t&&i.getMonth()===n-1&&i.getDate()===r}function gn(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t??1970,(n??1)-1,r??1,0,0,0,0).getTime()}var _n=e=>String(e).padStart(2,`0`);function vn(e){return`${_n(e.getDate())}/${_n(e.getMonth()+1)}/${e.getFullYear()}`}function yn(e){return e===void 0||e===0||Number.isNaN(e)?``:vn(new Date(e))}function bn(e){if(e===void 0||e===0||Number.isNaN(e))return``;let t=new Date(e);return`${vn(t)}, ${_n(t.getHours())}:${_n(t.getMinutes())}`}function xn(e){if(e===void 0||e===``)return``;let[t,n,r]=e.split(`-`);return t===void 0||n===void 0||r===void 0?e:`${r}/${n}/${t}`}function Sn(e,t){let[n=0,r=1,i=1]=e.split(`-`).map(Number);return fn(new Date(n,r-1,i+t))}function Cn(e,t){let[n=0,r=1,i=1]=e.split(`-`).map(Number);return Tn(pn(new Date(n,r-1+t,1)),i)}function wn(e,t){return new Date(e,t,0).getDate()}function Tn(e,t){let[n=0,r=1]=e.split(`-`).map(Number),i=Math.min(Math.max(1,Math.trunc(t)),wn(n,r));return`${e}-${String(i).padStart(2,`0`)}`}function En(e,t){if(e===``||t===``)return 0;let[n=0,r=1,i=1]=e.split(`-`).map(Number),[a=0,o=1,s=1]=t.split(`-`).map(Number),c=new Date(a,o-1,s).getTime()-new Date(n,r-1,i).getTime();return Math.round(c/dn)}function Dn(){let e=fn();return{inicio:gn(e),fim:gn(Sn(e,1))-1}}async function On(){let{inicio:e,fim:t}=Dn(),[n]=await o(`eventosDoDia`,[t,e]);return Number(n?.total??0)}async function kn(){if(typeof navigator.setAppBadge==`function`)try{let e=await On();await(e>0?navigator.setAppBadge(e):navigator.clearAppBadge())}catch{}}var An=!1;function jn(){kn(),!An&&(An=!0,document.addEventListener(`visibilitychange`,()=>{kn()}))}function Mn(e){return new Promise(t=>setTimeout(t,e))}var Nn=10,Pn=100;async function Fn(){let e=await navigator.storage?.getDirectory?.();if(e!==void 0)for(let t=0;t<Nn;t++){let t=[];for await(let n of e.keys())t.push(n);if(t.length===0)return;let n=!1;for(let r of t)try{await e.removeEntry(r,{recursive:!0})}catch{n=!0}if(!n)return;await Mn(Pn)}}function In(e){return new Promise(t=>{let n=indexedDB.deleteDatabase(e);n.onsuccess=()=>t(!0),n.onerror=()=>t(!1),n.onblocked=()=>t(!1)})}async function Ln(){for(let e=0;e<Nn;e++){let e=(await indexedDB.databases?.()??[]).map(({name:e})=>e).filter(e=>e!==void 0);if(e.length===0||(await Promise.all(e.map(In))).every(Boolean))return;await Mn(Pn)}}async function Rn(){let e=await navigator.serviceWorker?.getRegistrations?.()??[];await Promise.all(e.map(e=>e.unregister()));let t=await caches?.keys?.()??[];await Promise.all(t.map(e=>caches.delete(e)))}async function zn(){i(),await Fn(),await Rn(),await Ln(),localStorage.clear(),sessionStorage.clear()}function Bn(e,t,n=`application/json`){let r=t instanceof Blob?t:typeof t==`string`?new Blob([t],{type:`${n};charset=utf-8`}):new Blob([t.slice()],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,document.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}var Vn=`kobi-note`,Hn=Object.entries(r).filter(([,e])=>e.familia===`privado`).map(([e])=>e),Un=`note_`,Wn=new Set([`note_versoes_curado`,`note_estudo_em_andamento`,`note_novidades_vistas`,`note_novidades_acervo`]);function Gn(e){return Hn.includes(e)}function Kn(e){return e.startsWith(Un)&&!Wn.has(e)}function qn(e){let{id_global:t,...n}=e;return n}async function Jn(){let e={};for(let t of Hn)e[t]=(await s(t).todos()).map(qn);return e}function Yn(){let e={};try{for(let t=0;t<localStorage.length;t+=1){let n=localStorage.key(t);if(n===null||!Kn(n))continue;let r=localStorage.getItem(n);r!==null&&(e[n]=r)}}catch{}return e}async function Xn(e){return{app:Vn,formato:1,versao:e,gerado_em:Date.now(),stores:await Jn(),local:Yn()}}async function Zn(e){let t=await Xn(e),n=Hn.map(e=>({id:e,total:t.stores[e]?.length??0}));return{porStore:n,registros:n.reduce((e,t)=>e+t.total,0),chaves:Object.keys(t.local).length,bytes:new Blob([JSON.stringify(t)]).size}}function Qn(e=new Date){return`kobi-note-backup-${fn(e)}.json`}async function $n(e){let t=await Xn(e),n=new Blob([JSON.stringify(t)],{type:`application/json`}),r=Qn();return Bn(r,n),{arquivo:r,bytes:n.size}}function er(e){let t=JSON.parse(e);if(typeof t!=`object`||!t)throw Error(Vn);let n=t;if(n.app!==`kobi-note`||typeof n.stores!=`object`||n.stores===null)throw Error(Vn);let r=n.stores,i=Object.keys(r).filter(e=>Array.isArray(r[e])),a=i.filter(Gn).reduce((e,t)=>e+r[t].length,0);return{arquivo:{...n,local:n.local??{}},registros:a,desconhecidos:i.filter(e=>!Gn(e))}}async function tr(e){let t=e.arquivo.stores,n=0;for(let[e,r]of Object.entries(t))Gn(e)&&Array.isArray(r)&&(await s(e).substituirTudo(r.map(qn)),n+=r.length);for(let[t,n]of Object.entries(e.arquivo.local))Kn(t)&&typeof n==`string`&&localStorage.setItem(t,n);return n}var nr=[],rr=[`poesia`,`jogo`,`imite`,`principios`,`faq`,`criacao`,`entenda`,`cronologia`,`guias`,`kits`,`receitas`,`modelos`],ir={poesia:{modulo:`poesia`,rota:`poesia`},jogo:{modulo:`jogo`,rota:`jogo`},imite:{modulo:`imite`,rota:`imite`},principios:{modulo:`principios`,rota:`principios`},faq:{modulo:`faq`,rota:`faq`},criacao:{modulo:`criacao`,rota:`criacao`},entenda:{modulo:`entenda`,rota:`entenda`},cronologia:{modulo:`cronologia`,rota:`cronologia`},guias:{modulo:`guias`,rota:`guias`},kits:{modulo:`prep`,rota:`prep/kits`},receitas:{modulo:`receitas`,rota:`receitas`},modelos:{modulo:`anotacoes`,rota:`anotacoes`}},ar={poesias:()=>`poesia`,perguntas:()=>`jogo`,imite_cartoes:()=>`imite`,principios:()=>`principios`,faq:()=>`faq`,criacao_modulos:e=>e.categoria===`entenda`?`entenda`:`criacao`,cronologia:()=>`cronologia`,guias:()=>`guias`,kits:()=>`kits`,receitas:()=>`receitas`,anotacao_modelos:()=>`modelos`};function or(e,t,n){let r=ar[e];if(r===void 0||t.size===0)return{};let i={};for(let e of n){if(t.has(Number(e.id)))continue;let n=r(e);i[n]=(i[n]??0)+1}return i}function sr(e,t,n=1){let r={...e};for(let e of rr){let i=(r[e]??0)+n*(t[e]??0);i>0?r[e]=i:delete r[e]}return r}function cr(e){return rr.every(t=>(e[t]??0)===0)}function lr(e,t){return e.filter(e=>!t.has(e.id))}var ur=`note_novidades_vistas`,dr=`note_novidades_acervo`;function fr(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function pr(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function mr(){let e=fr(ur);return new Set(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}function hr(e){pr(ur,nr.map(e=>e.id).filter(t=>e.has(t)))}function gr(){return lr(nr,mr())}function _r(){let e=fr(dr);if(typeof e!=`object`||!e)return{};let t={};for(let n of rr){let r=e[n];typeof r==`number`&&r>0&&(t[n]=r)}return t}function vr(e){cr(e)||pr(dr,sr(_r(),e))}function yr(e,t){let n=mr();for(let t of e)n.add(t.id);hr(n);let r=sr(_r(),t,-1);if(cr(r))try{localStorage.removeItem(dr)}catch{}else pr(dr,r)}function br(){hr(new Set(nr.map(e=>e.id)))}var xr=`note_versoes_curado`,Sr={perguntas:`perguntas`,poesias:`poesias`,receitas:`receitas`,guias:`guias`,kits:`kits`,criacao_modulos:`criacao_modulos`,imite_cartoes:`imite_cartoes`,principios:`principios`,faq:`faq`,cronologia:`cronologia`,anotacao_modelos:`anotacao_modelos`,estoque_catalogo:`estoque_catalogo`,tutorial:`tutorial`};async function Cr(e,t){return t.registros===void 0||t.registros===0||await s(e).contar().then(e=>e>0).catch(()=>!0)}function wr(){try{return JSON.parse(localStorage.getItem(xr)??`{}`)}catch{return{}}}async function Tr(e){return await s(e).todos().then(e=>new Set(e.map(e=>Number(e.id)))).catch(()=>new Set)}async function Er(e){try{let t=await fetch(`${u.apiEndpoint}/${e}`,{cache:`no-cache`});return t.ok?await t.json():void 0}catch{return}}async function Dr(){let e=await Er(`manifesto.json`);if(e===void 0)return{ok:!1,motivo:`offline`};let t=e.modulos;if(t===void 0)return{ok:!1,motivo:`sem-manifesto`};let n=wr(),r={};for(let[e,i]of Object.entries(t)){let t=Sr[e];if(t===void 0||!c.includes(t)||i.versao!==void 0&&n[e]===i.versao&&await Cr(t,i))continue;let a=await Er(`${e}.json`);if(a===void 0)continue;let o=await Tr(t);await s(t).substituirTudo(a),i.versao!==void 0&&(n[e]=i.versao),r=sr(r,or(t,o,a))}return localStorage.setItem(xr,JSON.stringify(n)),vr(r),await kr(`categorias_financeiro`,`categorias.json`).catch(Or),await jr().catch(Or),{ok:!0,novos:r}}function Or(e){console.warn(`semeadura do padrão de fábrica falhou:`,e)}async function kr(e,t){let n=s(e);if((await n.todos().catch(()=>[])).length>0)return;let r=await Er(t);if(r!==void 0)for(let e of r){let{publicar:t,...r}=e;await n.salvar(r)}}var Ar;function jr(){return Ar??=kr(`calendario_tipos`,`calendario_tipos.json`).catch(e=>{throw Ar=void 0,e}),Ar}var Mr=`note_tema`,Nr=`#ffffff`,Pr=`#0f1115`;function Fr(){return document.documentElement.classList.contains(`kk-theme-dark`)?`escuro`:`claro`}function Ir(e){let t=e===`escuro`,n=document.documentElement.classList;n.toggle(`kk-theme-dark`,t),n.toggle(`kk-theme-light`,!t),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,t?Pr:Nr),localStorage.setItem(Mr,e)}function Lr(){let e=Fr()===`escuro`?`claro`:`escuro`;return Ir(e),e}var Rr,zr;function Br(){let e=document.querySelector(`.barra`);e!==null&&e!==zr&&(Rr??=new ResizeObserver(e=>{let t=e[e.length-1]?.target;if(t===void 0)return;let n=t.getBoundingClientRect().height;document.documentElement.style.setProperty(`--note-barra-altura`,`${n}px`)}),zr!==void 0&&Rr.unobserve(zr),Rr.observe(e),zr=e)}var Vr={projetos:{bioma:{versao:`1.0.0`,build:`2026-09-26T21:09:45.690Z`},admin:{versao:`1.0.154`,build:`2026-09-26T21:09:45.690Z`},note:{versao:`0.1.255`,build:`2026-09-26T19:55:42.724Z`},ui:{versao:`1.0.106`,build:`2026-09-26T19:13:42.140Z`},dev:{versao:`1.1.119`,build:`2026-09-26T21:06:48.396Z`},flow:{versao:`0.0.105`,build:`2026-09-26T21:08:55.156Z`},sql:{versao:`3.53.4`,build:`2026-09-25T00:45:35.553Z`}},componentesUi:84,pacotes:[{nome:`@kobi/admin`,versao:`1.0.154`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.119`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.105`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`0.1.255`,caminho:`apps/note`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/kit`,versao:`1.0.106`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_criacao_modulos:63,not_cronologia_eventos:630,not_estoque_alimentos:32,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1273,not_poesias:275,not_principios:112,not_receitas:4}}.projetos.note?.build.slice(0,4)??``;function Hr(){return v`
    <kk-icon-button
      name="qrcode"
      label=${x.perfil.tituloCartao}
      @click=${()=>Xt(`perfil/cartao`)}
    ></kk-icon-button>
    <kk-icon-button
      name="heartbeat"
      label=${x.perfil.tituloFicha}
      @click=${()=>Xt(`perfil/ice`)}
    ></kk-icon-button>
  `}function Ur(){return v`
    <footer class="rodape">
      <nav class="rodape__links">
        <button class="rodape__link" @click=${()=>Xt(`sobre/termos`)}>${x.rodape.termos}</button>
        <button class="rodape__link" @click=${()=>Xt(`sobre/privacidade`)}>
          ${x.rodape.privacidade}
        </button>
      </nav>
      <p class="rodape__nota">
        ${Vr===``?y:v`<span>${x.rodape.direitos(Vr)}</span>`}
        <span>${x.rodape.feitoPara}</span>
      </p>
    </footer>
  `}function Wr(e,t,n){let r=Fr()===`escuro`;return v`
    <header class="barra">
      ${e.voltarPara===void 0?v`<img class="barra__logo" src="./icons/kobi-note.svg" alt="" width="30"/>`:v`
            <kk-icon-button
              name="arrow-left"
              label=${x.acoes.voltar}
              @click=${()=>{e.aoVoltar?.()!==!0&&Xt(e.voltarPara??`home`)}}
            ></kk-icon-button>
          `}

      <h1 class="barra__titulo">${x.app.nome}</h1>

      <div class="barra__acoes">
        ${e.acoes??y}
        ${Hr()}
        ${y}
        <kk-icon-button
          name=${r?`sun`:`moon`}
          label=${x.acoes.tema}
          @click=${()=>{Lr(),n()}}
        ></kk-icon-button>
      </div>
    </header>

    <main class="conteudo">
      ${e.capaPropria===!0||e.titulo===x.app.nome?y:v`<h2 class="conteudo__titulo">${e.titulo}</h2>`}
      ${t}
    </main>

    ${Ur()}
  `}var Gr={criacao:{rotulo:`Teve um Projeto?`,icone:`compass`,cor:`#6610f2`},estudo:{rotulo:`Estudo Pessoal`,icone:`hourglass`,cor:`#6f42c1`},imite:{rotulo:`Imite a Sua Fé`,icone:`heart-handshake`,cor:`#d63384`},jogo:{rotulo:`Você se lembra?`,icone:`device-gamepad-2`,cor:`#198754`},principios:{rotulo:`Princípios Bíblicos`,icone:`scale`,cor:`#c92a2a`},faq:{rotulo:`Respostas Frequentes`,icone:`message-question`,cor:`#4263eb`},avulso:{rotulo:`Avulso`,icone:`notes`,cor:`#0d6efd`}};function Kr(e){return Gr[e]??Gr.avulso}var qr=()=>s(`not_caderno_estudo`);function Jr(){return qr().todos()}var Yr={origem:`todas`,busca:``};function Xr(e,t){return e.filter(e=>t.origem===`todas`||e.origem===t.origem).filter(e=>n(t.busca,e.titulo,e.conteudo,e.referencia)).sort((e,t)=>(t.atualizado||0)-(e.atualizado||0))}function Zr(e){return qr().salvar(e)}function Qr(e){return qr().excluir(e)}var $r=`note_caderno_rascunho`;function ei(e){return sessionStorage.setItem($r,JSON.stringify(e)),`caderno/novo`}function ti(){try{let e=sessionStorage.getItem($r);return sessionStorage.removeItem($r),e===null?{}:JSON.parse(e)}catch{return{}}}async function ni(e){let t=Date.now(),n=e.ref_chave??null;return Zr({...(n===null?void 0:(await Jr()).find(e=>e.ref_chave===n))??{criado:t,ref_chave:n},titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,atualizado:t})}async function ri(e){if(e===null||e===``)return;let t=(await Jr()).find(t=>t.ref_chave===e);t?.id!==void 0&&await Qr(t.id)}var ii=`Geral`;async function ai(){return(await s(`imite_cartoes`).todos()).sort((e,t)=>Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}function oi(e){try{let t=JSON.parse(e===``?`[]`:e);return Array.isArray(t)?t:[]}catch{return[]}}function si(e){return e===null?[]:oi(e.lentes)}function ci(e){return e===null?[]:oi(e.exemplos)}function li(e,t){return e===null||t===null||t===``?!1:t===e.correta&&si(e).some(e=>e.id===t)}function ui(e){return e!==null&&si(e).some(t=>t.id===e.correta)}function di(e,t){return(si(e).find(e=>e.id===t)?.resposta??``).trim()}function fi(e,t){let n=new Map;for(let t of e){let e=t.tema.trim()===``?ii:t.tema.trim(),r=n.get(e);r===void 0?n.set(e,[t]):r.push(t)}return[...n].map(([e,n])=>({tema:e,cartoes:n,concluido:n.every(t)}))}var pi=`note_imite_progresso`;function mi(){return{refletidos:{}}}function hi(){try{let e=JSON.parse(localStorage.getItem(pi)??`null`);return{...mi(),...e}}catch{return mi()}}function gi(e){localStorage.setItem(pi,JSON.stringify(e))}function _i(e,t){let n=e.refletidos[String(t)],r={...e,refletidos:{...e.refletidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,refletidoEm:Date.now()}}};return gi(r),r}function vi(e,t){return t?.id!==void 0&&e.refletidos[String(t.id)]!==void 0}function yi(e){return`imite:${e}`}async function bi(){let e=new Map;for(let t of await Jr()){if(t.origem!==`imite`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function xi(e,t,n){return n?.id!==void 0&&vi(e,n)&&(t.get(n.id)??``).trim()!==``}function Si(e){if(e.target!==e.currentTarget)return;let{source:t}=e.detail;t===`overlay`&&e.preventDefault()}function Ci(e,t,n,r={}){let i=document.createElement(`kk-dialog`);return i.setAttribute(`label`,e),r.semCabecalho===!0&&i.setAttribute(`no-header`,``),r.classe!==void 0&&(i.className=r.classe),r.formulario===!0&&i.addEventListener(`kk-request-close`,Si),document.body.append(i),new Promise(e=>{let r=t,a=e=>{r=e,i.open=!1},o=()=>{wt(n(a,i,o),i)};i.addEventListener(`kk-after-hide`,t=>{t.target===i&&(i.remove(),e(r))}),o(),i.updateComplete.then(()=>{i.open=!0})})}function wi(e){return Ci(e.titulo,!1,t=>v`
      ${e.texto??``}
      <kk-button slot="footer" @click=${()=>t(!1)}>${x.acoes.cancelar}</kk-button>
      <kk-button
        slot="footer"
        variant=${e.variante??`primary`}
        @click=${()=>t(!0)}
      >
        ${e.rotuloConfirmar??x.acoes.confirmar}
      </kk-button>
    `)}function Ti(e){return Ci(e.titulo,null,(t,n)=>{let r=()=>{let r=n.querySelector(`kk-input`),i=r?.value.trim()??``;if(i===``){r!=null&&(r.helpText=e.erroVazio??x.acoes.obrigatorio,r.focus());return}t(i)};return v`
      ${e.texto===void 0?``:v`<p class="dialogo__texto">${e.texto}</p>`}
      <kk-input
        autofocus
        placeholder=${e.placeholder??``}
        .value=${e.valor??``}
        @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),r())}}
      ></kk-input>
      <kk-button slot="footer" @click=${()=>t(null)}>${x.acoes.cancelar}</kk-button>
      <kk-button slot="footer" variant="primary" @click=${r}>
        ${e.rotuloConfirmar??x.acoes.salvar}
      </kk-button>
    `},{formulario:!0})}var Ei=!1;function Di(e){return x.recursos[e.id]}function Oi(e,t){let n=Di(e);return n===void 0?v``:v`
    <li class="novidades__recurso">
      <strong>${n.titulo}</strong>
      <p>${n.texto}</p>
      ${e.rota===void 0?y:v`
            <kk-button size="small" @click=${()=>t(e.rota??``)}>
              ${x.novidades.abrir}
              <kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>
          `}
    </li>
  `}function ki(e,t,n){let r=ir[e],i=Kt(r.modulo);return i===void 0?y:v`
    <li>
      <button class="novidades__item" style="--cor: ${i.cor}" @click=${()=>n(r.rota)}>
        <kk-icon class="novidades__icone" name=${i.icone}></kk-icon>
        <span class="novidades__texto">
          <strong>${i.rotulo}</strong>
          <span>${x.novidades.acervo[e](t)}</span>
        </span>
        <kk-icon name="chevron-right"></kk-icon>
      </button>
    </li>
  `}async function Ai(){if(Ei)return!0;let e=gr().filter(e=>Di(e)!==void 0),t=_r(),n=rr.filter(e=>(t[e]??0)>0&&Kt(ir[e].modulo)!==void 0);if(e.length===0&&n.length===0||document.querySelector(`kk-dialog[open]`)!==null)return!1;Ei=!0;try{let r=await Ci(x.novidades.titulo,void 0,r=>v`
        ${e.length===0?y:v`
              <section class="novidades__secao">
                <h3>${x.novidades.noApp}</h3>
                <ul class="novidades__lista">
                  ${e.map(e=>Oi(e,r))}
                </ul>
              </section>
            `}
        ${n.length===0?y:v`
              <section class="novidades__secao">
                <h3>${x.novidades.noAcervo}</h3>
                <ul class="novidades__lista">
                  ${n.map(e=>ki(e,t[e]??0,r))}
                </ul>
              </section>
            `}
        <kk-button slot="footer" variant="primary" @click=${()=>r(void 0)}>
          ${x.novidades.entendi}
        </kk-button>
      `,{classe:`novidades__dialogo`});yr(e,t),r!==void 0&&Xt(r)}finally{Ei=!1}return!0}function ji(e){return v`
    <div class="aviso">
      <kk-icon class="aviso__icone" style="color: ${e.cor}" name=${e.icone}></kk-icon>
      <h2>${x.emBreve.titulo}</h2>
      <p>${x.emBreve.texto(e.rotulo)}</p>
      <p class="discreto">${x.emBreve.ajuda}</p>
      <kk-button variant="primary" @click=${()=>Xt(`home`)}>
        ${x.emBreve.voltar}
      </kk-button>
    </div>
  `}function Mi(){return v`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="map-question"></kk-icon>
      <h2>${x.erro.naoEncontrado}</h2>
      <p>${x.erro.naoEncontradoTexto}</p>
      <kk-button variant="primary" @click=${()=>Xt(`home`)}>
        ${x.emBreve.voltar}
      </kk-button>
    </div>
  `}function Ni(){return v`
    <div class="carregando">
      <kk-spinner></kk-spinner>
      <p>${x.app.carregando}</p>
    </div>
  `}function Pi(e){return v`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="cloud-off"></kk-icon>
      <h2>${x.erro.telaNaoVeio}</h2>
      <p>${x.erro.telaNaoVeioTexto}</p>
      <pre class="detalhe">${e}</pre>
      <kk-button variant="primary" @click=${()=>location.reload()}>
        ${x.erro.telaNaoVeioRecarregar}
      </kk-button>
    </div>
  `}function Fi(e,t){return v`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
      <h2>${x.erro.cargaFalhou}</h2>
      <p>${x.erro.cargaFalhouTexto}</p>
      <pre class="detalhe">${e}</pre>
      <kk-button variant="primary" @click=${t}>
        <kk-icon slot="prefix" name="refresh"></kk-icon>${x.erro.cargaTentarDeNovo}
      </kk-button>
    </div>
  `}function Ii(e){return e instanceof Error?e.message:String(e)}var Li={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ri=e=>(...t)=>({_$litDirective$:e,values:t}),zi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Bi=class extends zi{constructor(e){if(super(e),this.it=y,e.type!==Li.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===ct)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Bi.directiveName=`unsafeHTML`,Bi.resultType=1;var Vi=Ri(Bi),S={anotacoes:0,eventosHoje:[],contas:{vencidas:0,hoje:0,aVencer:0},leituraPercentual:0,metasAtivas:0,metasConcluidas:0,focoMinutos:0,horasDoMes:0,estudosEsfriando:0,relatoriosPendentes:0,martelada:``,receitasFavoritas:0,prontidao:0,prontidaoTom:`perigo`,kits:0,autonomiaDias:0,dpaVencidoEm:``},Hi=!1,Ui=!1,Wi=!0;function Gi(){$t(`home`,()=>{Wi=!0})}async function Ki(e,t){try{return await e()}catch{return t}}async function qi(){let e=fn(),t=pn(),[n,r,i,a,o,s,c,l,u,d]=await Promise.all([Ki(async()=>{let{FILTROS_INICIAIS:e,listarAnotacoes:t}=await b(async()=>{let{FILTROS_INICIAIS:e,listarAnotacoes:t}=await import(`./dados-SGVQpx2e.js`);return{FILTROS_INICIAIS:e,listarAnotacoes:t}},__vite__mapDeps([3,4,5]),import.meta.url);return(await t(e)).length},0),Ki(async()=>{let t=await b(()=>import(`./dados-CGbbgLOs.js`),__vite__mapDeps([6,5]),import.meta.url),{eventos:n,tipos:r}=await t.carregar();return t.eventosDoDia(n,e).map(e=>({titulo:e.titulo,quando:e.dia_inteiro===1?x.painel.diaInteiro:t.comoHora(e.hora_inicio_min),cor:t.corDoTipo(r,e.tipo_id)}))},[]),Ki(async()=>{let{carregar:e,contasPorPrazo:t}=await b(async()=>{let{carregar:e,contasPorPrazo:t}=await import(`./dados-cm2L_edG.js`);return{carregar:e,contasPorPrazo:t}},__vite__mapDeps([7,5]),import.meta.url),{transacoes:n}=await e();return t(n)},{vencidas:0,hoje:0,aVencer:0}),Ki(async()=>{let{lerLidos:e,percentualGeral:t}=await b(async()=>{let{lerLidos:e,percentualGeral:t}=await import(`./dados-CrToLRPu.js`);return{lerLidos:e,percentualGeral:t}},[],import.meta.url);return t(e())},0),Ki(async()=>{let{listarMetas:e}=await b(async()=>{let{listarMetas:e}=await import(`./dados-B2pORBos.js`);return{listarMetas:e}},__vite__mapDeps([8,9,10,4,5,11]),import.meta.url),t=await e();return{ativas:t.filter(e=>e.esta_concluida!==1).length,concluidas:t.filter(e=>e.esta_concluida===1).length}},{ativas:0,concluidas:0}),Ki(async()=>{let{listarSessoes:e,totalDeMinutos:n}=await b(async()=>{let{listarSessoes:e,totalDeMinutos:t}=await import(`./dados-DiXquFuM.js`);return{listarSessoes:e,totalDeMinutos:t}},__vite__mapDeps([12,4,5]),import.meta.url);return n((await e()).filter(e=>pn(e.concluido_em)===t))},0),Ki(async()=>{let{carregar:e,esfriando:t,lembreteDoRelatorio:n,relatoriosEmAtraso:r}=await b(async()=>{let{carregar:e,esfriando:t,lembreteDoRelatorio:n,relatoriosEmAtraso:r}=await import(`./dados-DLtEPQPo.js`);return{carregar:e,esfriando:t,lembreteDoRelatorio:n,relatoriosEmAtraso:r}},__vite__mapDeps([13,4,5,14,15]),import.meta.url),{contador:i,estudos:a,registros:o,relatorios:s}=await e(),c=(n(s)===null?0:1)+r(s).length,l=c===0?``:(await b(async()=>{let{default:e}=await import(`./martelada-Cm7NO4R0.js`);return{default:e}},[],import.meta.url)).default;return{horas:Math.floor(i.minutos/60),esfriando:t(a,o).length,pendentes:c,martelada:l}},{horas:0,esfriando:0,pendentes:0,martelada:``}),Ki(async()=>{let{lerFavoritos:e}=await b(async()=>{let{lerFavoritos:e}=await import(`./favoritos-DAEWA_Gd.js`);return{lerFavoritos:e}},[],import.meta.url),{CHAVE_FAVORITOS:t}=await b(async()=>{let{CHAVE_FAVORITOS:e}=await import(`./dados-D1WWRlPG.js`);return{CHAVE_FAVORITOS:e}},__vite__mapDeps([16,5,17]),import.meta.url);return e(t).size},0),Ki(async()=>{let{calcularProntidao:e,tomDaProntidao:t}=await b(async()=>{let{calcularProntidao:e,tomDaProntidao:t}=await import(`./dados-BgDpV8rv.js`);return{calcularProntidao:e,tomDaProntidao:t}},[],import.meta.url),{carregarKits:n,lerProgresso:r}=await b(async()=>{let{carregarKits:e,lerProgresso:t}=await import(`./kits-xm4F3-DO.js`);return{carregarKits:e,lerProgresso:t}},__vite__mapDeps([18,5]),import.meta.url),{calcularAutonomia:i,carregarEstoque:a,lerPerfil:o}=await b(async()=>{let{calcularAutonomia:e,carregarEstoque:t,lerPerfil:n}=await import(`./estoque-BiEiYfqX.js`);return{calcularAutonomia:e,carregarEstoque:t,lerPerfil:n}},__vite__mapDeps([19,4,5,20]),import.meta.url),[s,c]=await Promise.all([n(),a()]),l=o(),u=e({kits:s,progresso:r(),estoque:c,perfil:l});return{prontidao:u,tom:t(u),kits:s.length,autonomiaDias:i(c,l).dias}},{prontidao:0,tom:`perigo`,kits:0,autonomiaDias:0}),Ki(async()=>{let{carregarPerfil:e,dpaVencidoEm:t}=await b(async()=>{let{carregarPerfil:e,dpaVencidoEm:t}=await import(`./dados-CH7WmXEH.js`).then(e=>e.c);return{carregarPerfil:e,dpaVencidoEm:t}},__vite__mapDeps([14,15,5]),import.meta.url);return t(await e())},``)]);return{anotacoes:n,eventosHoje:r,contas:i,leituraPercentual:a,metasAtivas:o.ativas,metasConcluidas:o.concluidas,focoMinutos:s,horasDoMes:c.horas,estudosEsfriando:c.esfriando,relatoriosPendentes:c.pendentes,martelada:c.martelada,receitasFavoritas:l,prontidao:u.prontidao,prontidaoTom:u.tom,kits:u.kits,autonomiaDias:u.autonomiaDias,dpaVencidoEm:d}}function Ji(){Gi(),!Ui&&Wi&&(Wi=!1,Ui=!0,(async()=>{try{S=await qi(),Hi=!0}catch(e){console.error(`Painel: a leitura do resumo falhou.`,e)}finally{Ui=!1,nn()}})())}function Yi(e){if(Hi&&Jt(e)){if(e===`anotacoes`&&S.anotacoes>0)return x.painel.anotacoes(S.anotacoes);if(e===`calendario`&&S.eventosHoje.length>0)return x.painel.eventosHoje(S.eventosHoje.length);if(e===`financeiro`){let e=x.painel.contas(S.contas);if(e!==``)return e}if(e===`leitura`&&S.leituraPercentual>0)return x.painel.leitura(S.leituraPercentual);if(e===`metas`&&S.metasAtivas>0)return x.painel.metas(S.metasAtivas);if(e===`ministerio`&&S.horasDoMes>0)return x.painel.horas(S.horasDoMes);if(e===`perfil`&&S.dpaVencidoEm!==``)return x.perfil.dpaVencidoResumo;if(e===`estudo`&&S.focoMinutos>0)return x.painel.foco(S.focoMinutos);if(e===`receitas`&&S.receitasFavoritas>0)return x.painel.favoritas(S.receitasFavoritas);if(e===`guias`)return x.prep.guiasResumo}}function Xi(e){if(Hi&&Jt(`prep`)){if(e===`prep-kits`)return x.prep.contagemKits(S.kits);if(e===`prep-estoque`)return x.prep.diasAutonomia(S.autonomiaDias);if(e===`prep-cofre`)return x.prep.cofreResumo}}function Zi(e,t,n,r=``){let i=Kt(e);return v`
    <button
      class="indicador"
      data-modulo=${e}
      style="--cor: ${i?.cor??`var(--kk-color-primary-600)`}"
      @click=${()=>Xt(e)}
    >
      <kk-card class="indicador__cartao" orientation="horizontal">
        ${r===``?v`
              <kk-icon
                slot="image"
                class="indicador__icone"
                name=${i?.icone??`chart-bar`}
              ></kk-icon>
            `:v`<span slot="image" class="indicador__figura">${Vi(r)}</span>`}
        <span class="indicador__texto">
          <span class="indicador__valor">${t}</span>
          <span class="indicador__rotulo">${n}</span>
        </span>
        <kk-icon class="indicador__seta" name="chevron-right"></kk-icon>
      </kk-card>
    </button>
  `}function Qi(){let e=new Date().toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`});return v`
    ${S.dpaVencidoEm===``?y:v`
          <kk-alert variant="warning" open class="painel__aviso">
            <kk-icon slot="icon" name="alert-triangle"></kk-icon>
            ${x.perfil.dpaVencidoAviso(S.dpaVencidoEm)}
            <kk-button size="small" variant="warning" @click=${()=>Xt(`perfil`)}>
              ${x.perfil.abrirPerfil}
            </kk-button>
          </kk-alert>
        `}

    <section class="painel__hoje">
      <header class="painel__topo">
        <span class="painel__data">${e}</span>
      </header>

      ${S.eventosHoje.length===0?v`<p class="discreto">${x.painel.semEventos}</p>`:v`
            <ul class="agenda">
              ${S.eventosHoje.map(e=>v`
                  <li class="agenda__linha">
                    <span class="agenda__hora">${e.quando}</span>
                    <span class="agenda__titulo">${e.titulo}</span>
                  </li>
                `)}
            </ul>
          `}
    </section>
  `}function $i(){return v`<div class="indicadores">${[S.focoMinutos>0?Zi(`estudo`,x.painel.emHoras(S.focoMinutos),x.painel.rotuloFoco):y,S.contas.vencidas>0?Zi(`financeiro`,String(S.contas.vencidas),x.painel.rotuloVencidas):y,S.contas.hoje>0?Zi(`financeiro`,String(S.contas.hoje),x.painel.rotuloVencemHoje):y,S.contas.aVencer>0?Zi(`financeiro`,String(S.contas.aVencer),x.painel.rotuloAVencer):y,S.estudosEsfriando>0?Zi(`ministerio`,String(S.estudosEsfriando),x.painel.rotuloEsfriando):y,S.relatoriosPendentes>0?Zi(`ministerio`,String(S.relatoriosPendentes),x.painel.rotuloRelatorios,S.martelada):y,Zi(`metas`,`${S.metasConcluidas}/${S.metasAtivas+S.metasConcluidas}`,x.painel.rotuloMetas)].filter(e=>e!==y)}</div>`}function ea(){if(!Jt(`prep`))return y;let e=S.prontidao;return v`
    <div class="prontidao" data-tom=${S.prontidaoTom}>
      <div class="prontidao__topo">
        <span class="prontidao__texto">
          ${x.prep.indice}
          <small>${x.prep.indiceAjuda}</small>
        </span>
        <span class="prontidao__percentual">${e}%</span>
      </div>
      <div class="prontidao__barra" role="presentation">
        <div class="prontidao__preenchido" style=${`width:${e}%`}></div>
      </div>
    </div>
  `}function ta(e){return Ji(),Hi?e===`hoje`?Qi():e===`indicadores`?$i():ea():e===`hoje`?v`<p class="intro">${x.home.sub}</p>`:y}var na=`#82c91e`,ra=`#ae3ec9`;function ia(e){let t=Jt(e.id);return ca({cor:e.cor,icone:e.icone,rotulo:e.rotulo,resumo:Yi(e.id),emBreve:!t,aoTocar:()=>Xt(e.id)})}function aa(e){let t=Jt(e.rota.split(`/`)[0]??``);return ca({cor:e.cor,icone:e.icone,rotulo:e.rotulo,resumo:Xi(e.id),emBreve:!t,aoTocar:()=>Xt(e.rota)})}function oa(e){return ca({cor:na,icone:`refresh`,rotulo:x.home.sincronizar,resumo:e.ocupado?x.home.sincronizando:void 0,ocupado:e.ocupado,aoTocar:()=>e.executar()})}function sa(){return ca({cor:ra,icone:`share`,rotulo:x.convite.tile,resumo:x.convite.tileResumo,aoTocar:()=>{(async()=>{let{abrirConvite:e}=await b(async()=>{let{abrirConvite:e}=await import(`./convite-Bq5DdNFQ.js`);return{abrirConvite:e}},__vite__mapDeps([21,22]),import.meta.url);await e()})()}})}function ca(e){return v`
    <button
      class="tile"
      style="--cor: ${e.cor}"
      ?data-em-breve=${e.emBreve===!0}
      ?disabled=${e.ocupado===!0}
      @click=${()=>e.aoTocar()}
    >
      <kk-icon class="tile__icone" name=${e.icone}></kk-icon>
      <span class="tile__rotulo">${e.rotulo}</span>
      ${e.emBreve===!0?v`<span class="tile__selo">${x.emBreve.titulo}</span>`:y}
      ${e.resumo===void 0?y:v`<span class="tile__resumo">${e.resumo}</span>`}
    </button>
  `}function la(e,t){return t?y:v`
    <hr class="divisor" />
    ${e.titulo===void 0?y:v`<h2 class="secao">${e.titulo}</h2>`}
  `}function ua(e,t){return e.itens.map(e=>{if(e.tipo===`acao`)return e.id===`sincronizar`?oa(t):e.id===`convite`?sa():y;if(e.tipo===`atalho`){let t=qt(e.id);return t===void 0?y:aa(t)}let n=Kt(e.id);return n===void 0?y:ia(n)}).filter(e=>e!==y)}function da(e){return v`
    ${Ut.map((t,n)=>{let r=t.painel===void 0?y:ta(t.painel),i=ua(t,e);return r===y&&i.length===0?y:v`
        ${la(t,n===0)}
        ${r}
        ${i.length===0?y:v`<div class="tiles">${i}</div>`}
      `})}
  `}var fa=4e3,pa={success:`circle-check`,danger:`alert-triangle`,warning:`alert-triangle`,neutral:`info-circle`};function ma(e,t=`success`){let n=Object.assign(document.createElement(`kk-alert`),{variant:t,closable:!0,duration:fa}),r=document.createElement(`kk-icon`);r.setAttribute(`slot`,`icon`),r.setAttribute(`name`,pa[t]),n.append(r,document.createTextNode(e)),document.body.append(n),n.toast()}async function ha(){if(await wi({titulo:x.armazenamento.apagarTudoTitulo,texto:x.armazenamento.apagarTudoTexto,rotuloConfirmar:x.armazenamento.apagarTudoConfirmar,variante:`danger`})){try{await zn()}catch{ma(x.armazenamento.apagarTudoFalhou,`warning`);return}ma(x.armazenamento.apagarTudoFeito),location.reload()}}var ga=null,_a=new Set;function va(){for(let e of[..._a])e()}function ya(e){e.preventDefault(),ga=e,va()}typeof window<`u`&&(window.addEventListener(`beforeinstallprompt`,ya),window.addEventListener(`appinstalled`,()=>{ga=null,va()}));function ba(){return ga!==null}async function xa(){let e=ga;if(e===null)return!1;ga=null,va();let{outcome:t}=await e.prompt();return t===`accepted`}function Sa(e){return _a.add(e),()=>_a.delete(e)}var Ca=`note_boas_vindas_visto`,wa=[{id:`bemVindo`,cor:`#fdf10d`},{id:`painel`,cor:`#6f42c1`},{id:`offline`,cor:`#198754`},{id:`privado`,cor:`#dc3545`},{id:`instalar`,cor:`#fd7e14`}];function Ta(){try{return localStorage.getItem(Ca)!==null}catch{return!0}}function Ea(){try{localStorage.setItem(Ca,`1`)}catch{}}function Da(e){let t=wa[e];if(t===void 0)return v``;let n=x.boasVindas.passos[t.id];return v`
    <div class="bv" style="--cor: ${t.cor}">
      ${t.icone===void 0?y:v`
            <span class="bv__icone">
              <kk-icon name=${t.icone}></kk-icon>
            </span>
          `}

      <h2 class="bv__titulo">${n.titulo}</h2>
      <p class="bv__texto">${n.texto}</p>

      ${t.id===`instalar`&&ba()?v`
            <kk-button class="bv__instalar" variant="primary" @click=${()=>void xa()}>
              <kk-icon slot="prefix" name="download"></kk-icon>
              ${x.boasVindas.passos.instalar.botao}
            </kk-button>
          `:y}

      <p class="bv__dica">
        <kk-icon name="bulb"></kk-icon>
        ${n.dica}
      </p>

      <div
        class="bv__passos"
        role="progressbar"
        aria-valuemin="1"
        aria-valuemax=${wa.length}
        aria-valuenow=${e+1}
        aria-valuetext=${x.boasVindas.passo(e+1,wa.length)}
      >
        ${wa.map((t,n)=>v`<span class="bv__ponto ${n===e?`bv__ponto--atual`:``}"></span>`)}
      </div>
    </div>
  `}function Oa(){let e=0,t,n=Sa(()=>t?.());return Ci(x.boasVindas.passos.bemVindo.titulo,void 0,(n,r,i)=>{t=i;let a=e===wa.length-1;return v`
        <figure class="bv__capa">
          <img
            class="bv__mascote"
            src="./icons/mascote-kobi-note.svg"
            alt=${x.boasVindas.mascote}
            width="200"
            height="200"
          />
          <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${x.app.nome} />
        </figure>

        ${Da(e)}

        ${e===0?y:v`
              <kk-button slot="footer" @click=${()=>{e!==0&&(--e,i())}}>
                <kk-icon slot="prefix" name="arrow-left"></kk-icon>
                ${x.boasVindas.voltar}
              </kk-button>
            `}
        ${a?y:v`
              <kk-button slot="footer" variant="text" @click=${()=>n(void 0)}>
                ${x.boasVindas.pular}
              </kk-button>
            `}
        <kk-button slot="footer" variant="primary" @click=${()=>{if(a){n(void 0);return}e+=1,i()}}>
          ${a?x.boasVindas.comecar:x.boasVindas.proximo}
          <kk-icon slot="suffix" name=${a?`check`:`arrow-right`}></kk-icon>
        </kk-button>
      `},{semCabecalho:!0,classe:`bv__dialogo`}).then(()=>{n(),Ea()})}async function ka(){Ta()||await Oa()}var Aa=new Set,ja=new Map,Ma,Na=`ltr`,Pa=`en`,Fa=typeof MutationObserver<`u`&&typeof document<`u`&&typeof document.documentElement<`u`;Fa&&(Na=document.documentElement.dir||`ltr`,Pa=document.documentElement.lang||navigator.language,new MutationObserver(()=>La()).observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]}));function Ia(...e){for(let t of e){let e=t.$code.toLowerCase(),n=ja.get(e);ja.set(e,n?{...n,...t}:t),Ma??=t}La()}function La(){Fa&&(Na=document.documentElement.dir||`ltr`,Pa=document.documentElement.lang||navigator.language);for(let e of Aa)e.requestUpdate()}function Ra(e){let t;try{t=new Intl.Locale(e.replaceAll(`_`,`-`))}catch{return{regional:void 0,idioma:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``;return{regional:r?ja.get(`${n}-${r}`):void 0,idioma:ja.get(n)}}var za=class{constructor(e){this.host=e,this.host.addController(this)}host;hostConnected(){Aa.add(this.host)}hostDisconnected(){Aa.delete(this.host)}dir(){return`${this.host.dir||Na}`.toLowerCase()}lang(){return`${this.host.lang||Pa}`.toLowerCase()}exists(e,t){let{includeFallback:n=!1,lang:r=this.lang()}=t??{},{regional:i,idioma:a}=Ra(r);return!!(i?.[e]??a?.[e]??(n?Ma?.[e]:void 0))}term(e,...t){let{regional:n,idioma:r}=Ra(this.lang()),i=n?.[e]??r?.[e]??Ma?.[e];return i===void 0?(console.error(`Nenhuma tradu\xE7\xE3o encontrada para: ${String(e)}`),String(e)):typeof i==`function`?i(...t):String(i)}date(e,t){return new Intl.DateTimeFormat(this.lang(),t).format(new Date(e))}number(e,t){let n=Number(e);return Number.isNaN(n)?``:new Intl.NumberFormat(this.lang(),t).format(n)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ba={$code:`en`,$name:`English`,$dir:`ltr`,actions:`Actions`,alpha:`Alpha`,browseFiles:`Browse files`,cancel:`Cancel`,carousel:`Carousel`,clearEntry:`Clear entry`,clearFilters:`Clear filters`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,deleteItem:`Delete item`,dropFiles:`Drop files here`,editItem:`Edit item`,editorAlignCenter:`Align center`,editorAlignJustify:`Justify`,editorAlignLeft:`Align left`,editorAlignRight:`Align right`,editorArea:`Editing area`,editorBackgroundColor:`Background color`,editorBlockType:`Block type`,editorBold:`Bold`,editorBulletList:`Bulleted list`,editorClearFormat:`Clear formatting`,editorColorBlue:`Blue`,editorColorCyan:`Cyan`,editorColorDefault:`Default`,editorColorGray:`Gray`,editorColorGreen:`Green`,editorColorLime:`Lime`,editorColorOrange:`Orange`,editorColorPink:`Pink`,editorColorRed:`Red`,editorColorTeal:`Teal`,editorColorViolet:`Violet`,editorColorYellow:`Yellow`,editorFootnote:`Footnote`,editorFootnotePlaceholder:`Note text`,editorFootnoteText:`The text appears at the foot of the page, numbered when read.`,editorHeading1:`Heading 1`,editorHeading2:`Heading 2`,editorHeading3:`Heading 3`,editorHeading4:`Heading 4`,editorHighlight:`Highlight`,editorHorizontalRule:`Horizontal rule`,editorImage:`Image`,editorInsert:`Insert`,editorItalic:`Italic`,editorLineBreak:`Line break`,editorLink:`Link`,editorLinkText:`Link address.`,editorNoColor:`No color`,editorNumberedList:`Numbered list`,editorParagraph:`Paragraph`,editorParagraphBordered:`Bordered`,editorParagraphColumns:`Two columns`,editorParagraphDropCap:`Drop cap`,editorParagraphEpigraph:`Epigraph`,editorParagraphEpigraphSubtitle:`Epigraph subtitle`,editorParagraphFinePrint:`Fine print`,editorParagraphFootnotes:`Footnotes`,editorParagraphIndented:`Indented`,editorParagraphSmallCaps:`Small caps`,editorParagraphSmallCapsSubtitle:`Small caps subtitle`,editorParagraphSpaced:`Spaced`,editorParagraphStyle:`Paragraph style`,editorPoetry:`Poetry block`,editorPoetryDedication:`Dedication`,editorPoetryRefrain:`Refrain`,editorPoetryScripture:`Scripture`,editorPoetrySource:`Source`,editorPoetryTheme:`Theme text`,editorPoetryVerse:`Verse`,editorQuote:`Quote`,editorRedo:`Redo`,editorSource:`Source code`,editorStrikethrough:`Strikethrough`,editorTable:`Table`,editorTableColumnAfter:`Insert column right`,editorTableColumnBefore:`Insert column left`,editorTableColumnDelete:`Delete column`,editorTableDelete:`Delete table`,editorTableHeader:`Header row`,editorTableRowAbove:`Insert row above`,editorTableRowBelow:`Insert row below`,editorTableRowDelete:`Delete row`,editorTableSize:`Table size`,editorTextColor:`Text color`,editorToolbar:`Formatting toolbar`,editorTypoDoubleQuotes:`Double quotes`,editorTypoEmDash:`Em dash`,editorTypoEnDash:`En dash`,editorTypography:`Typography`,editorTypoNbsp:`Non-breaking space`,editorTypoSingleQuotes:`Single quotes`,editorUnderline:`Underline`,editorUndo:`Undo`,error:`Error`,finish:`Finish`,firstPage:`First page`,ganttToday:`Today`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,hsv:`HSV`,hue:`Hue`,lastPage:`Last page`,loading:`Loading`,menu:`Menu`,newItem:`New item`,next:`Next`,nextPage:`Next page`,nextSlide:`Next slide`,no:`No`,noResults:`No results found`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,page:e=>`Page ${e}`,pagination:`Pagination`,previous:`Previous`,previousPage:`Previous page`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,resultsPerPage:`Results per page`,save:`Save`,search:`Search`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,selectAll:`Select all`,selectRow:`Select row`,showingResults:(e,t,n)=>`Showing ${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortClear:`Clear sorting`,sortDescending:`Sort descending`,stepNum:(e,t)=>`Step ${e} of ${t}`,toggleColorFormat:`Toggle color format`,valueMissing:`Please fill out this field.`,yes:`Yes`};Ia(Ba);var Va=Ba,Ha=class extends za{static{Ia(Va)}};Ia({$code:`pt`,$name:`Português (Brasil)`,$dir:`ltr`,actions:`Ações`,browseFiles:`Escolher arquivos`,cancel:`Cancelar`,carousel:`Carrossel`,clearEntry:`Limpar entrada`,clearFilters:`Limpar filtros`,close:`Fechar`,copied:`Copiado`,copy:`Copiar`,currentValue:`Valor atual`,deleteItem:`Excluir registro`,dropFiles:`Solte os arquivos aqui`,editItem:`Editar registro`,editorAlignCenter:`Centralizar`,editorAlignJustify:`Justificar`,editorAlignLeft:`Alinhar à esquerda`,editorAlignRight:`Alinhar à direita`,editorArea:`Área de edição`,editorBackgroundColor:`Cor de fundo`,editorBlockType:`Tipo de bloco`,editorBold:`Negrito`,editorBulletList:`Lista`,editorClearFormat:`Limpar formatação`,editorColorBlue:`Azul`,editorColorCyan:`Ciano`,editorColorDefault:`Padrão`,editorColorGray:`Cinza`,editorColorGreen:`Verde`,editorColorLime:`Limão`,editorColorOrange:`Laranja`,editorColorPink:`Rosa`,editorColorRed:`Vermelho`,editorColorTeal:`Azul-petróleo`,editorColorViolet:`Violeta`,editorColorYellow:`Amarelo`,editorFootnote:`Nota de rodapé`,editorFootnotePlaceholder:`Texto da nota`,editorFootnoteText:`O texto aparece no rodapé, numerado na leitura.`,editorHeading1:`Título 1`,editorHeading2:`Título 2`,editorHeading3:`Título 3`,editorHeading4:`Título 4`,editorHighlight:`Destaque`,editorHorizontalRule:`Linha horizontal`,editorImage:`Imagem`,editorInsert:`Inserir`,editorItalic:`Itálico`,editorLineBreak:`Quebra de linha`,editorLink:`Link`,editorLinkText:`Endereço do link.`,editorNoColor:`Sem cor`,editorNumberedList:`Lista numerada`,editorParagraph:`Parágrafo`,editorParagraphBordered:`Emoldurado`,editorParagraphColumns:`Duas colunas`,editorParagraphDropCap:`Capitular`,editorParagraphEpigraph:`Epígrafe`,editorParagraphEpigraphSubtitle:`Subtítulo da epígrafe`,editorParagraphFinePrint:`Letra miúda`,editorParagraphFootnotes:`Nota de rodapé`,editorParagraphIndented:`Recuado`,editorParagraphSmallCaps:`Versaletes`,editorParagraphSmallCapsSubtitle:`Subtítulo dos versaletes`,editorParagraphSpaced:`Espaçado`,editorParagraphStyle:`Estilo de parágrafo`,editorPoetry:`Bloco de poesia`,editorPoetryDedication:`Dedicatória`,editorPoetryRefrain:`Refrão`,editorPoetryScripture:`Escritura`,editorPoetrySource:`Fonte`,editorPoetryTheme:`Texto tema`,editorPoetryVerse:`Verso`,editorQuote:`Citação`,editorRedo:`Refazer`,editorSource:`Código-fonte`,editorStrikethrough:`Tachado`,editorTable:`Tabela`,editorTableColumnAfter:`Inserir coluna à direita`,editorTableColumnBefore:`Inserir coluna à esquerda`,editorTableColumnDelete:`Excluir coluna`,editorTableDelete:`Excluir tabela`,editorTableHeader:`Linha de cabeçalho`,editorTableRowAbove:`Inserir linha acima`,editorTableRowBelow:`Inserir linha abaixo`,editorTableRowDelete:`Excluir linha`,editorTableSize:`Tamanho da tabela`,editorTextColor:`Cor do texto`,editorToolbar:`Barra de formatação`,editorTypoDoubleQuotes:`Aspas duplas`,editorTypoEmDash:`Travessão`,editorTypoEnDash:`Meia-risca`,editorTypography:`Tipografia`,editorTypoNbsp:`Espaço inseparável`,editorTypoSingleQuotes:`Aspas simples`,editorUnderline:`Sublinhado`,editorUndo:`Desfazer`,error:`Erro`,finish:`Concluir`,firstPage:`Primeira página`,ganttToday:`Hoje`,goToSlide:(e,t)=>`V\xE1 para o slide ${e} de ${t}`,hidePassword:`Esconder a senha`,alpha:`Alfa`,hsv:`HSV`,hue:`Matiz`,lastPage:`Última página`,loading:`Carregando`,menu:`Menu`,newItem:`Novo registro`,next:`Avançar`,nextPage:`Próxima página`,nextSlide:`Próximo slide`,no:`Não`,noResults:`Nenhum resultado encontrado`,numOptionsSelected:e=>e===0?`Nenhuma opção selecionada`:e===1?`1 opção selecionada`:`${e} op\xE7\xF5es selecionadas`,page:e=>`P\xE1gina ${e}`,pagination:`Paginação`,previous:`Voltar`,previousPage:`Página anterior`,previousSlide:`Slide anterior`,progress:`Progresso`,remove:`Remover`,resize:`Mudar o tamanho`,resultsPerPage:`Registros por página`,save:`Salvar`,search:`Pesquisar`,scrollToEnd:`Rolar até o final`,scrollToStart:`Rolar até o início`,selectAColorFromTheScreen:`Selecionar uma cor da tela`,selectAll:`Selecionar tudo`,selectRow:`Selecionar a linha`,showingResults:(e,t,n)=>`Mostrando ${e}\u2013${t} de ${n}`,showPassword:`Mostrar senha`,slideNum:e=>`Slide ${e}`,sortAscending:`Ordenar em ordem crescente`,sortClear:`Remover ordenação`,sortDescending:`Ordenar em ordem decrescente`,stepNum:(e,t)=>`Etapa ${e} de ${t}`,toggleColorFormat:`Trocar o formato de cor`,valueMissing:`Preencha este campo.`,yes:`Sim`});var Ua=globalThis,Wa=Ua.ShadowRoot&&(Ua.ShadyCSS===void 0||Ua.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Ga=Symbol(),Ka=new WeakMap,qa=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ga)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Wa&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ka.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ka.set(t,e))}return e}toString(){return this.cssText}},Ja=e=>new qa(typeof e==`string`?e:e+``,void 0,Ga),C=(e,...t)=>new qa(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(e._$cssResult$===!0)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Ga),Ya=(e,t)=>{if(Wa)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Ua.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Xa=Wa?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Ja(t)})(e):e,{is:Za,defineProperty:Qa,getOwnPropertyDescriptor:$a,getOwnPropertyNames:eo,getOwnPropertySymbols:to,getPrototypeOf:no}=Object,ro=globalThis,io=ro.trustedTypes,ao=io?io.emptyScript:``,oo=ro.reactiveElementPolyfillSupport,so=(e,t)=>e,co={toAttribute(e,t){switch(t){case Boolean:e=e?ao:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},lo=(e,t)=>!Za(e,t),uo={attribute:!0,type:String,converter:co,reflect:!1,useDefault:!1,hasChanged:lo};Symbol.metadata??=Symbol(`metadata`),ro.litPropertyMetadata??=new WeakMap;var fo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=uo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Qa(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=$a(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??uo}static _$Ei(){if(this.hasOwnProperty(so(`elementProperties`)))return;let e=no(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(so(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(so(`properties`))){let e=this.properties,t=[...eo(e),...to(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Xa(e))}else e!==void 0&&t.push(Xa(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ya(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute===void 0?co:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?co:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(r===!1&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??lo)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];e!==!0||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};fo.elementStyles=[],fo.shadowRootOptions={mode:`open`},fo[so(`elementProperties`)]=new Map,fo[so(`finalized`)]=new Map,oo?.({ReactiveElement:fo}),(ro.reactiveElementVersions??=[]).push(`2.1.2`);var po=globalThis,mo=e=>e,ho=po.trustedTypes,go=ho?ho.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,_o=`$lit$`,vo=`lit$${Math.random().toFixed(9).slice(2)}$`,yo=`?`+vo,bo=`<${yo}>`,xo=document,So=()=>xo.createComment(``),Co=e=>e===null||typeof e!=`object`&&typeof e!=`function`,wo=Array.isArray,To=e=>wo(e)||typeof e?.[Symbol.iterator]==`function`,Eo=`[ 	
\f\r]`,Do=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oo=/-->/g,ko=/>/g,Ao=RegExp(`>|${Eo}(?:([^\\s"'>=/]+)(${Eo}*=${Eo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,`g`),jo=/'/g,Mo=/"/g,No=/^(?:script|style|textarea|title)$/i,w=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Po=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),Fo=new WeakMap,Io=xo.createTreeWalker(xo,129);function Lo(e,t){if(!wo(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return go===void 0?t:go.createHTML(t)}var Ro=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Do;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Do?c[1]===`!--`?o=Oo:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ao):(No.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ao):o=ko:o===Ao?c[0]===`>`?(o=i??Do,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ao:c[3]===`"`?Mo:jo):o===Mo||o===jo?o=Ao:o===Oo||o===ko?o=Do:(o=Ao,i=void 0);let d=o===Ao&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Do?n+bo:l>=0?(r.push(s),n.slice(0,l)+_o+n.slice(l)+vo+d):n+vo+(l===-2?t:d)}return[Lo(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},zo=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ro(t,n);if(this.el=e.createElement(l,r),Io.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Io.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(_o)){let t=u[o++],n=i.getAttribute(e).split(vo),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Wo:r[1]===`?`?Go:r[1]===`@`?Ko:Uo}),i.removeAttribute(e)}else e.startsWith(vo)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(No.test(i.tagName)){let e=i.textContent.split(vo),t=e.length-1;if(t>0){i.textContent=ho?ho.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],So()),Io.nextNode(),c.push({type:2,index:++a});i.append(e[t],So())}}}else if(i.nodeType===8){if(i.data===yo)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(vo,e+1))!==-1;)c.push({type:7,index:a}),e+=vo.length-1}}a++}}static createElement(e,t){let n=xo.createElement(`template`);return n.innerHTML=e,n}};function Bo(e,t,n=e,r){if(t===Po)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Co(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Bo(e,i._$AS(e,t.values),i,r)),t}var Vo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??xo).importNode(t,!0);Io.currentNode=r;let i=Io.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ho(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new qo(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Io.nextNode(),a++)}return Io.currentNode=xo,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ho=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Bo(this,e,t),Co(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Po&&this._(e):e._$litType$===void 0?e.nodeType===void 0?To(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&Co(this._$AH)?this._$AA.nextSibling.data=e:this.T(xo.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=zo.createElement(Lo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Vo(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Fo.get(e.strings);return t===void 0&&Fo.set(e.strings,t=new zo(e)),t}k(t){wo(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(So()),this.O(So()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=mo(e).nextSibling;mo(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Uo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Bo(this,e,t,0),a=!Co(e)||e!==this._$AH&&e!==Po,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Bo(this,r[n+o],t,o),s===Po&&(s=this._$AH[o]),a||=!Co(s)||s!==this._$AH[o],s===T?e=T:e!==T&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Wo=class extends Uo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},Go=class extends Uo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Ko=class extends Uo{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Bo(this,e,t,0)??T)===Po)return;let n=this._$AH,r=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qo=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Bo(this,e)}},Jo={M:_o,P:vo,A:yo,C:1,L:Ro,R:Vo,D:To,V:Bo,I:Ho,H:Uo,N:Go,U:Ko,B:Wo,F:qo},Yo=po.litHtmlPolyfillSupport;Yo?.(zo,Ho),(po.litHtmlVersions??=[]).push(`3.3.3`);var Xo=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ho(t.insertBefore(So(),e),e,void 0,n??{})}return i._$AI(e),i},Zo=globalThis,Qo=class extends fo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Po}};Qo._$litElement$=!0,Qo.finalized=!0,Zo.litElementHydrateSupport?.({LitElement:Qo});var $o=Zo.litElementPolyfillSupport;$o?.({LitElement:Qo}),(Zo.litElementVersions??=[]).push(`4.2.2`);var es=C`
  :host {
    --kk-accordion-gap: var(--kk-spacing-x-small);

    display: block;
  }

  .accordion--grouped {
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-medium);
    overflow: hidden;
  }

  .accordion--spaced {
    display: flex;
    flex-direction: column;
    gap: var(--kk-accordion-gap);
  }

  /*
   * A moldura de cada seção só é apagada quando o acordeão dá a sua. Em spaced cada
   * kk-details continua sendo um cartão inteiro — é justamente esse o efeito.
   */
  .accordion--grouped ::slotted(kk-details),
  .accordion--flush ::slotted(kk-details) {
    --kk-details-border-width: 0;
    --kk-details-border-radius: 0;
  }

  .accordion--grouped ::slotted(kk-details:not(:last-of-type)),
  .accordion--flush ::slotted(kk-details:not(:last-of-type)) {
    border-block-end: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
  }
`,ts={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ns=e=>(...t)=>({_$litDirective$:e,values:t}),rs=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},E=ns(class extends rs{constructor(e){if(super(e),e.type!==ts.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Po}}),D=C`
  @layer kobi.components {
    :host {
      box-sizing: border-box;
    }

    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }

    [hidden] {
      display: none !important;
    }
  }
`,is={attribute:!0,type:String,converter:co,reflect:!1,hasChanged:lo},as=(e=is,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function O(e){return(t,n)=>typeof n==`object`?as(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function k(e){return O({...e,state:!0,attribute:!1})}var os=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function A(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return os(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return os(n,r,{get(){return a(this)}})}}var ss=new WeakMap,cs=(e=`value`)=>(t,n)=>{n.addInitializer(function(){let t={observada:e,destino:String(n.name)},r=ss.get(this);r?r.push(t):ss.set(this,[t])})};function ls(e,t,n){let r=ss.get(e);if(!r)return;let i=e.constructor,a=e;for(let{observada:e,destino:o}of r){let r=i.getPropertyOptions(e);if(t!==(typeof r.attribute==`string`?r.attribute:e))continue;let s=r.converter||co,c=(typeof s==`function`?s:s?.fromAttribute??co.fromAttribute)(n,r.type);a[e]!==c&&(a[o]=c)}}var us=new WeakMap;function j(e,t){let n=Array.isArray(e)?e:[e],r=t?.waitUntilFirstUpdate??!1;return(e,t)=>{t.addInitializer(function(){let t={propriedades:n,handler:e,esperarPrimeiroRender:r},i=us.get(this);i?i.push(t):us.set(this,[t])})}}function ds(e,t){let n=us.get(e);if(!n)return;let r=e,i=new Set;for(let a=0;a<10;a++){let a=!1;for(let[o,{propriedades:s,handler:c,esperarPrimeiroRender:l}]of n.entries())if(!l||e.hasUpdated)for(let n of s){if(!t.has(n))continue;let s=`${o}:${n}`;if(i.has(s))continue;let l=t.get(n),u=r[n];l!==u&&(i.add(s),a=!0,c.call(e,l,u))}if(!a)return}}var fs,ps,ms,hs,gs,_s,vs,M=class extends (ms=Qo,ps=[O()],fs=[O()],ms){constructor(){super(),g(this,`_internals`),_(this,gs,m(hs,8,this)),m(hs,11,this),_(this,_s,m(hs,12,this)),m(hs,15,this),_(this,vs,!1),g(this,`initialReflectedProperties`,new Map),this._internals=this.attachInternals(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v${t.version}`),`version`in r&&r.version&&(a=` v${r.version}`),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}addState(e){this._internals.states&&this._internals.states.add(e.startsWith(`--`)?e:`--${e}`)}removeState(e){this._internals.states&&this._internals.states.delete(e.startsWith(`--`)?e:`--${e}`)}toggleState(e,t){let n=e.startsWith(`--`)?e:`--${e}`;this._internals.states&&(typeof t==`boolean`?t?this._internals.states.add(n):this._internals.states.delete(n):this._internals.states.has(n)?this._internals.states.delete(n):this._internals.states.add(n))}attributeChangedCallback(e,t,n){he(this,vs)||(this.constructor.elementProperties.forEach((e,t)=>{let n=t;e.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),ge(this,vs,!0)),ls(this,e,n),super.attributeChangedCallback(e,t,n)}update(e){ds(this,e),super.update(e)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{let r=n;e.has(r)&&this[r]==null&&(this[r]=t)})}};hs=f(ms),gs=new WeakMap,_s=new WeakMap,vs=new WeakMap,h(hs,4,`dir`,ps,M,gs),h(hs,4,`lang`,fs,M,_s),p(hs,M),g(M,`version`,`0.0.0`),g(M,`dependencies`,{});var ys,bs,xs,Ss,Cs=class extends (bs=M,ys=[O({reflect:!0})],bs){constructor(){super(...arguments),_(this,Ss,m(xs,8,this,`grouped`)),m(xs,11,this),g(this,`aoAbrirSecao`,e=>{let t=this.secoes(),n=t.find(t=>t===e.target);if(n?.name)for(let e of t)e!==n&&e.name===n.name&&e.open&&e.hide()}),g(this,`aoTrocarSecoes`,()=>{let e=new Set;for(let t of this.secoes())!t.name||!t.open||(e.has(t.name)?t.open=!1:e.add(t.name))})}connectedCallback(){super.connectedCallback(),this.addEventListener(`kk-show`,this.aoAbrirSecao)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`kk-show`,this.aoAbrirSecao)}secoes(){return[...this.querySelectorAll(`:scope > kk-details`)]}render(){return w`
      <div
        part="base"
        class=${E({accordion:!0,"accordion--grouped":this.appearance===`grouped`,"accordion--spaced":this.appearance===`spaced`,"accordion--flush":this.appearance===`flush`})}
      >
        <slot @slotchange=${this.aoTrocarSecoes}></slot>
      </div>
    `}};xs=f(bs),Ss=new WeakMap,h(xs,4,`appearance`,ys,Cs,Ss),p(xs,Cs),g(Cs,`styles`,[D,es]),Cs.define(`kk-accordion`);var ws=e=>{let{activeElement:t}=document;t&&e.contains(t)&&document.activeElement?.blur()},Ts=C`
  :host {
    display: inline-block;
    color: var(--kk-color-neutral-600);
    font-size: x-medium;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--kk-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--kk-spacing-x-small);
    cursor: pointer;
    transition: var(--kk-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--kk-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--kk-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Es=Symbol.for(``),Ds=e=>{if(e?.r===Es)return e?._$litStatic$},Os=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Es}),ks=new Map,As=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Ds(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=ks.get(e))===void 0&&(o.raw=o,ks.set(e,t=o)),n=s}return e(t,...n)})(w),js={fromAttribute:e=>e??``,toAttribute:e=>e===``?null:e},Ms=new WeakMap,Ns=new WeakMap,Ps=new WeakMap,Fs=new WeakSet,Is=new WeakMap,Ls=class{host;form;options;constructor(e,t){this.host=e,e.addController(this),this.options={form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity!=`function`||e.reportValidity(),checkValidity:e=>typeof e.checkValidity!=`function`||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:[`kk-input`],...t}}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),Is.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Is.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ms.has(this.form)?Ms.get(this.form).add(this.host):Ms.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),Ns.has(this.form)||(Ns.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ps.has(this.form)||(Ps.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=Ms.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),Ns.has(this.form)&&(this.form.reportValidity=Ns.get(this.form),Ns.delete(this.form)),Ps.has(this.form)&&(this.form.checkValidity=Ps.get(this.form),Ps.delete(this.form)),this.form=void 0))}handleFormData=e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`kk-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&typeof r<`u`&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))};handleFormSubmit=e=>{let t=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&Ms.get(this.form)?.forEach(e=>{this.setUserInteracted(e,!0)}),this.form&&!this.form.noValidate&&!t&&!n(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())};handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Is.set(this.host,[])};handleInteraction=e=>{let t=Is.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)};checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0};reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0};setUserInteracted(e,t){t?Fs.add(e):Fs.delete(e),e.requestUpdate()}doAction(e,t){this.form&&zs(this.form,e,t)}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!Fs.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Rs=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze({...Rs,valid:!1,valueMissing:!0}),Object.freeze({...Rs,valid:!1,customError:!0});function zs(e,t,n){let r=document.createElement(`button`);r.type=t,r.style.position=`absolute`,r.style.width=`0`,r.style.height=`0`,r.style.clipPath=`inset(50%)`,r.style.overflow=`hidden`,r.style.whiteSpace=`nowrap`,n&&(r.name=n.name,r.value=n.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{n.hasAttribute(e)&&r.setAttribute(e,n.getAttribute(e))})),e.append(r),r.click(),r.remove()}var N=e=>e??T,{I:Bs}=Jo,Vs=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Hs=e=>e.strings===void 0,Us={},Ws=(e,t=Us)=>e._$AH=t,Gs=C`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ks={name:`default`,resolver:(e,t)=>ne(`assets/icons/${t}/${e}.svg`)},qs={caret:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 9l6 6l6 -6" /> </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 9l6 6l6 -6" /> </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M15 6l-6 6l6 6" /> </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 6l6 6l-6 6" /> </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /> <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /> </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /> </svg>
  `,"eye-off":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /> <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /> <path d="M3 3l18 18" /> </svg>
  `,"color-picker":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M11 7l6 6" /> <path d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4" /> </svg>
  `,menu:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 6l16 0" /> <path d="M4 12l16 0" /> <path d="M4 18l16 0" /> </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> </svg>
  `,user:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /> </svg>
  `,"player-play":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /> </svg>
  `,"player-pause":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> </svg>
  `,star:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /> </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6l-12 12" /> <path d="M6 6l12 12" /> </svg>
  `,"circle-x":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" /> </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `},Js=[Ks,{name:`system`,resolver:e=>e in qs?`data:image/svg+xml,${encodeURIComponent(qs[e])}`:``}],Ys=[];function Xs(e){Ys.push(e)}function Zs(e){Ys=Ys.filter(t=>t!==e)}function Qs(e){return Js.find(t=>t.name===e)}var $s=Symbol(),ec=Symbol(),tc,nc=new Map,rc,ic,ac,oc,sc,cc,lc,uc,dc,P,fc,pc,mc,hc,gc,_c,vc=class extends (dc=M,uc=[k()],lc=[O({reflect:!0})],cc=[O()],sc=[O()],oc=[O({reflect:!0})],ac=[O({reflect:!0})],ic=[j(`label`)],rc=[j([`name`,`src`,`library`,`variant`])],dc){constructor(){super(...arguments),m(P,5,this),g(this,`initialRender`,!1),_(this,fc,m(P,8,this,null)),m(P,11,this),_(this,pc,m(P,12,this)),m(P,15,this),_(this,mc,m(P,16,this)),m(P,19,this),_(this,hc,m(P,20,this,``)),m(P,23,this),_(this,gc,m(P,24,this,`default`)),m(P,27,this),_(this,_c,m(P,28,this,`outline`)),m(P,31,this)}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=w`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?$s:ec}catch{return ec}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return $s;tc||=new DOMParser;let r=tc.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):$s}catch{return $s}}connectedCallback(){super.connectedCallback(),Xs(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Zs(this)}getIconSource(){let e=Qs(this.library);return this.name&&e?{url:e.resolver(this.name,this.variant),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?Qs(this.library):void 0;if(!e){this.svg=null;return}let r=nc.get(e);if(r||(r=this.resolveIcon(e,n),nc.set(e,r)),!this.initialRender)return;let i=await r;if(i===ec&&nc.delete(e),e===this.getIconSource().url){if(Vs(i)){if(this.svg=i,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(i){case ec:case $s:this.svg=null,this.emit(`kk-error`);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`kk-load`)}}}render(){return this.svg}};P=f(dc),fc=new WeakMap,pc=new WeakMap,mc=new WeakMap,hc=new WeakMap,gc=new WeakMap,_c=new WeakMap,h(P,4,`svg`,uc,vc,fc),h(P,4,`name`,lc,vc,pc),h(P,4,`src`,cc,vc,mc),h(P,4,`label`,sc,vc,hc),h(P,4,`library`,oc,vc,gc),h(P,4,`variant`,ac,vc,_c),h(P,1,`handleLabelChange`,ic,vc),h(P,1,`setIcon`,rc,vc),p(P,vc),g(vc,`styles`,[D,Gs]);var yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,F,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc=class extends (Mc=M,jc=[A(`.icon-button`)],Ac=[k()],kc=[O()],Oc=[O()],Dc=[O()],Ec=[O()],Tc=[O()],wc=[O()],Cc=[O()],Sc=[O()],xc=[O({type:Boolean,reflect:!0})],bc=[O()],yc=[O({reflect:!0})],Mc){constructor(){super(...arguments),_(this,Nc,m(F,8,this)),m(F,11,this),_(this,Pc,m(F,12,this,!1)),m(F,15,this),_(this,Fc,m(F,16,this)),m(F,19,this),_(this,Ic,m(F,20,this)),m(F,23,this),_(this,Lc,m(F,24,this,`outline`)),m(F,27,this),_(this,Rc,m(F,28,this)),m(F,31,this),_(this,zc,m(F,32,this)),m(F,35,this),_(this,Bc,m(F,36,this)),m(F,39,this),_(this,Vc,m(F,40,this)),m(F,43,this),_(this,Hc,m(F,44,this,``)),m(F,47,this),_(this,Uc,m(F,48,this,!1)),m(F,51,this),_(this,Wc,m(F,52,this,`button`)),m(F,55,this),_(this,Gc,m(F,56,this)),m(F,59,this)}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}if(this.type!==`button`){let e=this.form?this.getRootNode().querySelector(`#${this.form}`):this.closest(`form`);e&&zs(e,this.type)}}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?Os`a`:Os`button`;return As`
      <${t}
        part="base"
        class=${E({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${N(e?void 0:this.type)}
        href=${N(e?this.href:void 0)}
        target=${N(e?this.target:void 0)}
        download=${N(e?this.download:void 0)}
        rel=${N(e&&this.target?`noreferrer noopener`:void 0)}
        role=${N(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <kk-icon
          class="icon-button__icon"
          name=${N(this.name)}
          library=${N(this.library)}
          variant=${this.variant}
          src=${N(this.src)}
          aria-hidden="true"
        ></kk-icon>
      </${t}>
    `}};F=f(Mc),Nc=new WeakMap,Pc=new WeakMap,Fc=new WeakMap,Ic=new WeakMap,Lc=new WeakMap,Rc=new WeakMap,zc=new WeakMap,Bc=new WeakMap,Vc=new WeakMap,Hc=new WeakMap,Uc=new WeakMap,Wc=new WeakMap,Gc=new WeakMap,h(F,4,`button`,jc,Kc,Nc),h(F,4,`hasFocus`,Ac,Kc,Pc),h(F,4,`name`,kc,Kc,Fc),h(F,4,`library`,Oc,Kc,Ic),h(F,4,`variant`,Dc,Kc,Lc),h(F,4,`src`,Ec,Kc,Rc),h(F,4,`href`,Tc,Kc,zc),h(F,4,`target`,wc,Kc,Bc),h(F,4,`download`,Cc,Kc,Vc),h(F,4,`label`,Sc,Kc,Hc),h(F,4,`disabled`,xc,Kc,Uc),h(F,4,`type`,bc,Kc,Wc),h(F,4,`form`,yc,Kc,Gc),p(F,Kc),g(Kc,`styles`,[D,Ts]),g(Kc,`dependencies`,{"kk-icon":vc});function qc(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}var Jc=class{host;slotNames=[];constructor(e,...t){this.host=e,e.addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`kk-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function Yc(e){if(!e)return``;let t=e.assignedNodes({flatten:!0}),n=``;return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)}),n}var Xc=C`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;

    /*
     * A cor da variante, e a tinta que sai dela. O padrão é o da variante padrão
     * do componente (primary): as cinco classes .alert--* trocam só esta linha, e
     * a barra, o ícone, a contagem regressiva e a tinta seguem juntos por
     * construção. Um token por peça seria uma chance a mais de eles discordarem.
     *
     * **A tinta é chapada, e a barra é lateral.** Foi o desenho pedido nas quatro
     * referências de packages/kit/referencias/: um bloco de aviso é lido de
     * relance, e um véu que desbota tira do corpo justamente a cor que diz de que
     * tipo de aviso se trata — a metade de baixo de um alerta longo ficava igual à
     * de um alerta de outra variante. A barra à esquerda corre a altura inteira e
     * responde a mesma pergunta sem depender de o topo estar visível.
     *
     * O kk-card e o kk-stat continuam com a faixa no topo e o véu que desce: lá o
     * conteúdo é painel, não aviso, e o degradê é o que separa o cabeçalho do
     * corpo. É por isso que a força da tinta ainda vem do tema — o
     * --kk-tint-strength é o mesmo dos três — e só o alcance saiu: sem degradê
     * não há até onde descer.
     */
    --kk-alert-accent-color: var(--kk-color-primary-600);
    --kk-alert-tint-strength: var(--kk-tint-strength);
  }

  .alert {
    /*
     * A mistura é com o fundo do painel, e não com transparent: chapada, ela é
     * uma cor só, e uma cor com alfa por cima de um fundo que já pode ser
     * translúcido (o alerta flutuante empilhado) mudaria de tom conforme o que
     * estivesse atrás dele.
     */
    --kk-alert-tint-color: color-mix(
      in oklab,
      var(--kk-alert-accent-color) var(--kk-alert-tint-strength),
      var(--kk-panel-background-color)
    );

    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--kk-alert-tint-color);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-inline-start-width: calc(var(--kk-panel-border-width) * 3);
    border-inline-start-color: var(--kk-alert-accent-color);
    border-radius: var(--kk-border-radius-medium);
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-small);
    font-weight: var(--kk-font-weight-normal);
    line-height: 1.6;
    color: var(--kk-color-neutral-700);
    margin: inherit;
    overflow: hidden;

    /*
     * Abrir e fechar é CSS: opacidade e escala, com o display saindo de none pelo
     * allow-discrete — ele entra no começo ao abrir e só sai no FIM ao fechar — e o
     * @starting-style dando o ponto de partida. Ele vale também para o PRIMEIRO desenho,
     * e é isso que a classe alert--transicao segura: um <kk-alert open> nasceria a 80 % e
     * cresceria à vista — e o botão de fechar andaria debaixo de quem já foi clicá-lo. Ela
     * só entra depois do primeiro desenho, na primeira troca de open. Quem espera o fim é
     * o componente, pelo getAnimations().
     */
    opacity: 1;
    scale: 1;
    transition:
      opacity var(--kk-alert-transition, var(--kk-transition-medium)) ease,
      scale var(--kk-alert-transition, var(--kk-transition-medium)) ease,
      display var(--kk-alert-transition, var(--kk-transition-medium)) allow-discrete;

    /*
     * NÃO declare container-type aqui. Como o :host é display: contents, é este .alert
     * que participa do layout do avô — e com contenção de tamanho inline ele para de
     * tirar a largura do próprio conteúdo. Em contexto de bloco ainda funcionava, mas
     * dentro de um flex o alerta encolhia para 2px e virava um risco na tela. Vale o
     * mesmo raciocínio do card.styles.ts, onde isto está explicado por extenso.
     */
  }

  .alert:not(.alert--open) {
    display: none;
    opacity: 0;
    scale: 0.8;
  }

  @starting-style {
    .alert--open.alert--transicao {
      opacity: 0;
      scale: 0.8;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .alert {
      transition: none;
    }
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--kk-font-size-large);
    padding-inline-start: var(--kk-spacing-large);
    color: var(--kk-alert-accent-color);
  }

  .alert--has-countdown {
    border-block-end: none;
  }

  .alert--primary {
    --kk-alert-accent-color: var(--kk-color-primary-600);
  }

  .alert--success {
    --kk-alert-accent-color: var(--kk-color-success-600);
  }

  .alert--neutral {
    --kk-alert-accent-color: var(--kk-color-neutral-600);
  }

  .alert--warning {
    --kk-alert-accent-color: var(--kk-color-warning-600);
  }

  .alert--danger {
    --kk-alert-accent-color: var(--kk-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--kk-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--kk-font-size-medium);
    margin-inline-end: var(--kk-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    width: 100%;
    height: calc(var(--kk-panel-border-width) * 3);
    background-color: var(--kk-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
    background-color: var(--kk-alert-accent-color);
  }

  .alert__timer {
    display: none;
  }
`,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,I,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl=class e extends (cl=M,sl=[A(`[part~="base"]`)],ol=[A(`.alert__countdown-elapsed`)],al=[O({type:Boolean,reflect:!0})],il=[O({type:Boolean,reflect:!0})],rl=[O({reflect:!0})],nl=[O({type:Number})],tl=[O({type:String,reflect:!0})],el=[k()],$c=[k()],Qc=[j(`open`,{waitUntilFirstUpdate:!0})],Zc=[j(`duration`)],cl){constructor(){super(...arguments),m(I,5,this),g(this,`autoHideTimeout`),g(this,`remainingTimeInterval`),g(this,`countdownAnimation`),g(this,`hasSlotController`,new Jc(this,`icon`,`suffix`)),g(this,`localize`,new Ha(this)),_(this,ll,m(I,8,this)),m(I,11,this),_(this,ul,m(I,12,this)),m(I,15,this),_(this,dl,m(I,16,this,!1)),m(I,19,this),_(this,fl,m(I,20,this,!1)),m(I,23,this),_(this,pl,m(I,24,this,`primary`)),m(I,27,this),_(this,ml,m(I,28,this,1/0)),m(I,31,this),_(this,hl,m(I,32,this)),m(I,35,this),_(this,gl,m(I,36,this,this.duration)),m(I,39,this),_(this,_l,m(I,40,this,!1)),m(I,43,this)}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`kk-toast-stack`}),this.currentToastStack}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleCloseClick(){this.hide()}async handleOpenChange(){this.transicao=!0,this.open?(this.emit(`kk-show`),this.duration<1/0&&this.restartAutoHide(),await this.esperarTransicao(),this.emit(`kk-after-show`)):(ws(this),this.emit(`kk-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await this.esperarTransicao(),this.emit(`kk-after-hide`))}async esperarTransicao(){await this.updateComplete,await Promise.allSettled(this.base.getAnimations().map(e=>e.finished))}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,qc(this,`kk-after-show`)}async hide(){if(this.open)return this.open=!1,qc(this,`kk-after-hide`)}async toast(){return new Promise(t=>{this.handleCountdownChange(),e.toastStack.parentElement===null&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`kk-after-hide`,()=>{e.toastStack.removeChild(this),t(),e.toastStack.querySelector(`kk-alert`)===null&&e.toastStack.remove()},{once:!0})})}render(){return w`
      <div
        part="base"
        class=${E({alert:!0,"alert--open":this.open,"alert--transicao":this.transicao,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--primary":this.variant===`primary`,"alert--success":this.variant===`success`,"alert--neutral":this.variant===`neutral`,"alert--warning":this.variant===`warning`,"alert--danger":this.variant===`danger`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?w`
              <kk-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></kk-icon-button>
            `:``}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?w`
              <div
                class=${E({alert__countdown:!0,"alert__countdown--ltr":this.countdown===`ltr`})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:``}
      </div>
    `}};I=f(cl),ll=new WeakMap,ul=new WeakMap,dl=new WeakMap,fl=new WeakMap,pl=new WeakMap,ml=new WeakMap,hl=new WeakMap,gl=new WeakMap,_l=new WeakMap,h(I,4,`base`,sl,vl,ll),h(I,4,`countdownElement`,ol,vl,ul),h(I,4,`open`,al,vl,dl),h(I,4,`closable`,il,vl,fl),h(I,4,`variant`,rl,vl,pl),h(I,4,`duration`,nl,vl,ml),h(I,4,`countdown`,tl,vl,hl),h(I,4,`remainingTime`,el,vl,gl),h(I,4,`transicao`,$c,vl,_l),h(I,1,`handleOpenChange`,Qc,vl),h(I,1,`handleDurationChange`,Zc,vl),p(I,vl),g(vl,`styles`,[D,Xc]),g(vl,`dependencies`,{"kk-icon-button":Kc}),g(vl,`currentToastStack`),vl.define(`kk-alert`);var yl=C`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--kk-font-weight-semibold);
    letter-spacing: var(--kk-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--kk-border-radius-small);
    border: solid 1px var(--kk-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  .badge--success {
    background-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--kk-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --kk-badge-pulse-color: var(--kk-color-primary-600);
  }

  .badge--pulse.badge--success {
    --kk-badge-pulse-color: var(--kk-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --kk-badge-pulse-color: var(--kk-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --kk-badge-pulse-color: var(--kk-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --kk-badge-pulse-color: var(--kk-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--kk-badge-pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol=class extends (Cl=M,Sl=[O({reflect:!0})],xl=[O({type:Boolean,reflect:!0})],bl=[O({type:Boolean,reflect:!0})],Cl){constructor(){super(...arguments),_(this,Tl,m(wl,8,this,`primary`)),m(wl,11,this),_(this,El,m(wl,12,this,!1)),m(wl,15,this),_(this,Dl,m(wl,16,this,!1)),m(wl,19,this)}render(){return w`
      <span
        part="base"
        class=${E({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};wl=f(Cl),Tl=new WeakMap,El=new WeakMap,Dl=new WeakMap,h(wl,4,`variant`,Sl,Ol,Tl),h(wl,4,`pill`,xl,Ol,El),h(wl,4,`pulse`,bl,Ol,Dl),p(wl,Ol),g(Ol,`styles`,[D,yl]),Ol.define(`kk-badge`);var kl=C`
  :host {
    --kk-spinner-track-width: 2px;
    --kk-spinner-track-color: var(--kk-color-neutral-agnostic);
    --kk-spinner-indicator-color: var(--kk-color-primary-600);
    --kk-spinner-speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--kk-spinner-track-width);
    r: calc(0.5em - var(--kk-spinner-track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--kk-spinner-track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--kk-spinner-indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--kk-spinner-speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Al=class extends M{static styles=[D,kl];localize=new Ha(this);render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}},jl=C`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--kk-input-border-width);
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--kk-transition-x-fast) background-color,
      var(--kk-transition-x-fast) color,
      var(--kk-transition-x-fast) border,
      var(--kk-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  :host(:state(--disabled)) .button {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  :host(:state(--disabled)) .button * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(kk-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-input-border-color);
    color: var(--kk-color-neutral-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--default:hover {
    background-color: var(--kk-color-primary-50);
    border-color: var(--kk-color-primary-300);
    color: var(--kk-color-primary-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--default:active {
    background-color: var(--kk-color-primary-100);
    border-color: var(--kk-color-primary-400);
    color: var(--kk-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--primary:hover {
    background-color: var(--kk-color-primary-500);
    border-color: var(--kk-color-primary-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--primary:active {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--kk-color-success-600);
    border-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--success:hover {
    background-color: var(--kk-color-success-500);
    border-color: var(--kk-color-success-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--success:active {
    background-color: var(--kk-color-success-600);
    border-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--kk-color-neutral-600);
    border-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--neutral:hover {
    background-color: var(--kk-color-text-muted);
    border-color: var(--kk-color-text-muted);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--neutral:active {
    background-color: var(--kk-color-neutral-600);
    border-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--kk-color-warning-600);
    border-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--warning:hover {
    background-color: var(--kk-color-warning-500);
    border-color: var(--kk-color-warning-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--warning:active {
    background-color: var(--kk-color-warning-600);
    border-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--kk-color-danger-600);
    border-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--danger:hover {
    background-color: var(--kk-color-danger-500);
    border-color: var(--kk-color-danger-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--danger:active {
    background-color: var(--kk-color-danger-600);
    border-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--kk-input-border-color);
    color: var(--kk-color-neutral-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default.button--checked {
    border-color: var(--kk-color-primary-600);
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default:active {
    border-color: var(--kk-color-primary-700);
    background-color: var(--kk-color-primary-700);
    color: var(--kk-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--kk-color-primary-600);
    color: var(--kk-color-primary-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary.button--checked {
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary:active {
    border-color: var(--kk-color-primary-700);
    background-color: var(--kk-color-primary-700);
    color: var(--kk-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--kk-color-success-600);
    color: var(--kk-color-success-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success.button--checked {
    background-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success:active {
    border-color: var(--kk-color-success-700);
    background-color: var(--kk-color-success-700);
    color: var(--kk-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral.button--checked {
    background-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral:active {
    border-color: var(--kk-color-neutral-700);
    background-color: var(--kk-color-neutral-700);
    color: var(--kk-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--kk-color-warning-600);
    color: var(--kk-color-warning-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning.button--checked {
    background-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning:active {
    border-color: var(--kk-color-warning-700);
    background-color: var(--kk-color-warning-700);
    color: var(--kk-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--kk-color-danger-600);
    color: var(--kk-color-danger-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger.button--checked {
    background-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger:active {
    border-color: var(--kk-color-danger-700);
    background-color: var(--kk-color-danger-700);
    color: var(--kk-color-neutral-0);
  }

  @media (forced-colors: active) {
    :host(:not(:state(--disabled))) .button.button--outline.button--checked {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:hover {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-500);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:focus-visible {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-500);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:active {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--kk-input-height-small);
    font-size: var(--kk-button-font-size-small);
    line-height: calc(var(--kk-input-height-small) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--kk-input-height-medium);
    font-size: var(--kk-button-font-size-medium);
    line-height: calc(var(--kk-input-height-medium) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--kk-input-height-large);
    font-size: var(--kk-button-font-size-large);
    line-height: calc(var(--kk-input-height-large) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--kk-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--kk-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--kk-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-inline: 0;
  }

  .button--circle.button--small {
    width: var(--kk-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--kk-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--kk-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  :host(:state(--loading)) .button {
    position: relative;
    cursor: wait;
  }

  :host(:state(--loading)) .button .button__prefix,
  :host(:state(--loading)) .button .button__label,
  :host(:state(--loading)) .button .button__suffix,
  :host(:state(--loading)) .button .button__caret {
    visibility: hidden;
  }

  :host(:state(--loading)) .button kk-spinner {
    --kk-spinner-indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    inset-block-start: calc(50% - 0.5em);
    inset-inline-start: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(kk-badge) {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(kk-badge) {
    inset-inline-end: auto;
    inset-inline-start: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding-inline: var(--kk-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding-inline: var(--kk-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding-inline: var(--kk-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--kk-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--kk-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--kk-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--kk-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--kk-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--kk-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--kk-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--kk-spacing-small);
  }

  /*
   * Modificador swipe
   *
   * Placa de ícone na cor da variante encostada na borda, corpo claro, e um
   * painel da mesma cor que entra deslizando da esquerda no hover.
   *
   * swipe é FORMA, não é cor: quem escolhe a cor continua sendo o variant. Daí
   * o alias local — os seletores por variante trocam só ele, e o resto do bloco
   * não repete nada.
   *
   * Os seletores levam .button junto (.button.button--swipe) porque as regras
   * de variant lá em cima têm duas classes; sem isso o swipe perde a disputa
   * de especificidade em vez de vencer por vir depois.
   */

  .button--swipe {
    --kk-button-accent-color: var(--kk-color-primary-600);
  }

  .button--swipe.button--success {
    --kk-button-accent-color: var(--kk-color-success-600);
  }

  .button--swipe.button--neutral {
    --kk-button-accent-color: var(--kk-color-neutral-600);
  }

  .button--swipe.button--warning {
    --kk-button-accent-color: var(--kk-color-warning-600);
  }

  .button--swipe.button--danger {
    --kk-button-accent-color: var(--kk-color-danger-600);
  }

  .button.button--swipe {
    position: relative;
    overflow: hidden;
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-button-accent-color);
    color: var(--kk-color-neutral-700);
    box-shadow: var(--kk-shadow-large);
    /*
     * A cor do rótulo acompanha o painel: no x-fast herdado o texto ficaria
     * branco no branco enquanto o painel ainda estivesse a caminho.
     */
    transition:
      var(--kk-transition-x-fast) background-color,
      var(--kk-transition-x-fast) border-color,
      var(--kk-transition-medium) color;
  }

  /* A placa encosta na borda — o respiro do prefixo é dela, não do botão. */
  .button.button--swipe.button--has-prefix {
    padding-inline-start: 0;
  }

  .button--swipe .button__decor {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: var(--kk-button-accent-color);
    translate: -100% 0;
    transition: var(--kk-transition-medium) translate;
  }

  /* Tudo o que é conteúdo passa por cima do painel. */
  .button--swipe .button__prefix,
  .button--swipe .button__label,
  .button--swipe .button__suffix,
  .button--swipe .button__caret,
  .button--swipe kk-spinner {
    position: relative;
    z-index: 1;
  }

  .button--swipe .button__prefix {
    align-self: stretch;
    justify-content: center;
    padding-inline: var(--kk-spacing-small);
    background-color: var(--kk-button-accent-color);
    color: var(--kk-color-neutral-0);
  }

  .button--swipe.button--has-label .button__label,
  .button--swipe.button--has-prefix .button__label {
    padding-inline: var(--kk-spacing-small) var(--kk-spacing-large);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button.button--swipe:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button.button--swipe:focus-visible {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-button-accent-color);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--swipe:hover .button__decor,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--swipe:focus-visible .button__decor {
    translate: 0 0;
  }

  /*
   * Modificador expand
   *
   * Fechado é um círculo com o ícone do slot prefix; no hover — e no foco de
   * teclado, que o original não previa — cresce em pílula, o ícone sobe para
   * fora de vista e o rótulo ocupa o lugar. O rótulo está sempre no DOM, só
   * recortado: quem usa leitor de tela ouve o botão fechado do mesmo jeito.
   *
   * A largura não é animada — não há como transicionar até "auto". Quem cresce
   * é a coluna do rótulo (0fr → 1fr) e o botão vai atrás; o min-width segura o
   * círculo enquanto ela está fechada. É também por isso que o ícone sai do
   * fluxo: no estado fechado ele não pode ter voto na largura.
   */

  .button.button--expand {
    position: relative;
    overflow: hidden;
    padding-inline: 0;
    /* Raio de pílula numa caixa quadrada é um círculo — sem animar o raio. */
    border-radius: var(--kk-border-radius-pill);
  }

  .button--expand.button--small {
    min-width: var(--kk-input-height-small);
  }

  .button--expand.button--medium {
    min-width: var(--kk-input-height-medium);
  }

  .button--expand.button--large {
    min-width: var(--kk-input-height-large);
  }

  /* O circle fixa a largura e esconde o prefixo; com expand os dois têm de ceder. */
  .button--expand.button--circle {
    width: auto;
  }

  .button--expand .button__prefix {
    display: flex;
    position: absolute;
    inset: 0;
    justify-content: center;
    transition: var(--kk-transition-medium) translate;
  }

  .button--expand .button__reveal {
    display: grid;
    grid-template-columns: 0fr;
    padding-inline: 0;
    transition:
      var(--kk-transition-medium) grid-template-columns,
      var(--kk-transition-medium) padding-inline;
  }

  .button--expand .button__label {
    min-width: 0;
    overflow: hidden;
  }

  /* O respiro do rótulo é do invólucro, que fecha junto com a coluna. */
  .button--expand.button--has-label .button__label,
  .button--expand.button--has-prefix .button__label {
    padding-inline: 0;
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:hover .button__prefix,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:focus-visible .button__prefix {
    translate: 0 -200%;
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:hover .button__reveal,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:focus-visible .button__reveal {
    grid-template-columns: 1fr;
    padding-inline: var(--kk-spacing-large);
  }

  /*
   * Sem movimento: os dois estados continuam existindo, o caminho entre eles é
   * que deixa de ser desenhado.
   */
  @media (prefers-reduced-motion: reduce) {
    .button--swipe .button__decor,
    .button--expand .button__prefix,
    .button--expand .button__reveal {
      transition: none;
    }
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-kk-button-group__button--first]:not([data-kk-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-kk-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-kk-button-group__button--last]:not([data-kk-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-kk-button-group__button]:not([data-kk-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--kk-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-kk-button-group__button]:not(
          [data-kk-button-group__button--first],
          [data-kk-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    border-inline-start: solid 1px var(--kk-color-neutral-agnostic-strong);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-kk-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-kk-button-group__button--focus]),
  :host([data-kk-button-group__button][checked]) {
    z-index: 2;
  }
`,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,L,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,R=class extends (su=M,ou=[A(`.button`)],au=[k()],iu=[k()],ru=[O()],nu=[O({reflect:!0})],tu=[O({reflect:!0})],eu=[O({type:Boolean,reflect:!0})],$l=[O({type:Boolean,reflect:!0})],Ql=[O({type:Boolean,reflect:!0})],Zl=[O({type:Boolean,reflect:!0})],Xl=[O({type:Boolean,reflect:!0})],Yl=[O({type:Boolean,reflect:!0})],Jl=[O({type:Boolean,reflect:!0})],ql=[O({type:Boolean,reflect:!0})],Kl=[O()],Gl=[O()],Wl=[O()],Ul=[O()],Hl=[O()],Vl=[O()],Bl=[O()],zl=[O()],Rl=[O({attribute:`formaction`})],Ll=[O({attribute:`formenctype`})],Il=[O({attribute:`formmethod`})],Fl=[O({attribute:`formnovalidate`,type:Boolean})],Pl=[O({attribute:`formtarget`})],Nl=[j(`disabled`,{waitUntilFirstUpdate:!0})],Ml=[j(`loading`,{waitUntilFirstUpdate:!0})],su){constructor(){super(...arguments),m(L,5,this),g(this,`formControlController`,new Ls(this,{assumeInteractionOn:[`click`]})),g(this,`hasSlotController`,new Jc(this,`[default]`,`prefix`,`suffix`)),g(this,`localize`,new Ha(this)),_(this,cu,m(L,8,this)),m(L,11,this),_(this,lu,m(L,12,this,!1)),m(L,15,this),_(this,uu,m(L,16,this,!1)),m(L,19,this),_(this,du,m(L,20,this,``)),m(L,23,this),_(this,fu,m(L,24,this,`default`)),m(L,27,this),_(this,pu,m(L,28,this,`medium`)),m(L,31,this),_(this,mu,m(L,32,this,!1)),m(L,35,this),_(this,hu,m(L,36,this,!1)),m(L,39,this),_(this,gu,m(L,40,this,!1)),m(L,43,this),_(this,_u,m(L,44,this,!1)),m(L,47,this),_(this,vu,m(L,48,this,!1)),m(L,51,this),_(this,yu,m(L,52,this,!1)),m(L,55,this),_(this,bu,m(L,56,this,!1)),m(L,59,this),_(this,xu,m(L,60,this,!1)),m(L,63,this),_(this,Su,m(L,64,this,`button`)),m(L,67,this),_(this,Cu,m(L,68,this,``)),m(L,71,this),_(this,wu,m(L,72,this,``)),m(L,75,this),_(this,Tu,m(L,76,this,``)),m(L,79,this),_(this,Eu,m(L,80,this)),m(L,83,this),_(this,Du,m(L,84,this,`noreferrer noopener`)),m(L,87,this),_(this,Ou,m(L,88,this)),m(L,91,this),_(this,ku,m(L,92,this)),m(L,95,this),_(this,Au,m(L,96,this)),m(L,99,this),_(this,ju,m(L,100,this)),m(L,103,this),_(this,Mu,m(L,104,this)),m(L,107,this),_(this,Nu,m(L,108,this)),m(L,111,this),_(this,Pu,m(L,112,this)),m(L,115,this)}get validity(){return this.isButton()?this.button.validity:Rs}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`kk-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.isButton()&&this.formControlController.updateValidity()}handleLoadingChange(){this.toggleState(`--loading`,this.loading)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?Os`a`:Os`button`;return As`
      <${t}
        part="base"
        class=${E({button:!0,"button--default":this.variant==="default","button--primary":this.variant===`primary`,"button--success":this.variant===`success`,"button--neutral":this.variant===`neutral`,"button--warning":this.variant===`warning`,"button--danger":this.variant===`danger`,"button--text":this.variant===`text`,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--swipe":this.swipe,"button--expand":this.expand,"button--rtl":this.localize.dir()===`rtl`,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
        ?disabled=${N(e?void 0:this.disabled)}
        type=${N(e?void 0:this.type)}
        title=${this.title}
        name=${N(e?void 0:this.name)}
        value=${N(e?void 0:this.value)}
        href=${N(e&&!this.disabled?this.href:void 0)}
        target=${N(e?this.target:void 0)}
        download=${N(e?this.download:void 0)}
        rel=${N(e?this.rel:void 0)}
        role=${N(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        ${this.swipe?As`<span part="decor" class="button__decor"></span>`:``}
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        ${this.expand?As`<span class="button__reveal"><slot part="label" class="button__label"></slot></span>`:As`<slot part="label" class="button__label"></slot>`}
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?As` <kk-icon part="caret" class="button__caret" library="system" name="caret"></kk-icon> `:``}
        ${this.loading?As`<kk-spinner part="spinner"></kk-spinner>`:``}
      </${t}>
    `}};L=f(su),cu=new WeakMap,lu=new WeakMap,uu=new WeakMap,du=new WeakMap,fu=new WeakMap,pu=new WeakMap,mu=new WeakMap,hu=new WeakMap,gu=new WeakMap,_u=new WeakMap,vu=new WeakMap,yu=new WeakMap,bu=new WeakMap,xu=new WeakMap,Su=new WeakMap,Cu=new WeakMap,wu=new WeakMap,Tu=new WeakMap,Eu=new WeakMap,Du=new WeakMap,Ou=new WeakMap,ku=new WeakMap,Au=new WeakMap,ju=new WeakMap,Mu=new WeakMap,Nu=new WeakMap,Pu=new WeakMap,h(L,4,`button`,ou,R,cu),h(L,4,`hasFocus`,au,R,lu),h(L,4,`invalid`,iu,R,uu),h(L,4,`title`,ru,R,du),h(L,4,`variant`,nu,R,fu),h(L,4,`size`,tu,R,pu),h(L,4,`caret`,eu,R,mu),h(L,4,`disabled`,$l,R,hu),h(L,4,`loading`,Ql,R,gu),h(L,4,`outline`,Zl,R,_u),h(L,4,`pill`,Xl,R,vu),h(L,4,`circle`,Yl,R,yu),h(L,4,`swipe`,Jl,R,bu),h(L,4,`expand`,ql,R,xu),h(L,4,`type`,Kl,R,Su),h(L,4,`name`,Gl,R,Cu),h(L,4,`value`,Wl,R,wu),h(L,4,`href`,Ul,R,Tu),h(L,4,`target`,Hl,R,Eu),h(L,4,`rel`,Vl,R,Du),h(L,4,`download`,Bl,R,Ou),h(L,4,`form`,zl,R,ku),h(L,4,`formAction`,Rl,R,Au),h(L,4,`formEnctype`,Ll,R,ju),h(L,4,`formMethod`,Il,R,Mu),h(L,4,`formNoValidate`,Fl,R,Nu),h(L,4,`formTarget`,Pl,R,Pu),h(L,1,`handleDisabledChange`,Nl,R),h(L,1,`handleLoadingChange`,Ml,R),p(L,R),g(R,`styles`,[D,jl]),g(R,`dependencies`,{"kk-icon":vc,"kk-spinner":Al}),R.define(`kk-button`);var Fu=C`
  :host {
    --kk-card-border-color: var(--kk-color-neutral-200);
    --kk-card-border-radius: var(--kk-border-radius-medium);
    --kk-card-border-width: 1px;
    --kk-card-padding: var(--kk-spacing-large);
    --kk-card-image-size: 12rem;
    /*
     * A tinta da variante sai da folha de tema, onde a receita é única para cartão,
     * alerta e indicador. Ficam como botões do componente para quem precise de um
     * cartão mais ou menos tingido que os irmãos — o que não pode é cada componente
     * escolher a própria força e a família se desfazer.
     */
    --kk-card-tint-extent: var(--kk-tint-extent);
    --kk-card-tint-strength: var(--kk-tint-strength);

    /*
     * NÃO declare container-type aqui.
     *
     * Houve uma tentativa de pôr container-type: inline-size neste :host, para uma
     * consulta @container que reduzia o padding abaixo de 300px. Só que essa
     * propriedade aplica contenção de tamanho inline — o conteúdo deixa de contribuir
     * para a largura do próprio elemento —, e num elemento dimensionado pelo conteúdo,
     * como este, as duas coisas juntas resolvem para ZERO. O cartão sumia da tela: 0px
     * em bloco comum, 0px como item de flex, 0px até com max-width declarado, porque
     * max-width limita mas não define largura. Sobrava um risco vertical.
     *
     * Contenção inline só é segura em elemento de largura definida — e um cartão, que
     * tanto ocupa a linha inteira quanto fica lado a lado num flex, não é um deles. Se
     * o padding responsivo voltar a fazer falta, ele tem de vir de outro mecanismo (um
     * atributo size, por exemplo), não de container query no host.
     */
    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--kk-panel-background-color);
    box-shadow: var(--kk-shadow-x-small);
    border: solid var(--kk-card-border-width) var(--kk-card-border-color);
    border-radius: var(--kk-card-border-radius);
  }

  /*
   * O cartão com variante: uma faixa de acento no topo e o corpo tingido pela mesma
   * cor, desbotando para o fundo do painel.
   *
   * É a mesma gramática de kk-alert e kk-stat — faixa de acento e véu da mesma cor —,
   * e isso é de propósito: um alerta, um cartão de destaque e um indicador lado a
   * lado têm de parecer da mesma família. A receita do véu (força e alcance) está em
   * themes/kobi.css, com o porquê escrito lá; aqui fica só a montagem.
   *
   * Cada variante declara só a cor de acento; a tinta sai dela. Um segundo token por
   * variante seria uma segunda chance de as duas discordarem.
   *
   * --kk-card-accent-color fica sem valor no cartão comum: sem variante nenhuma
   * regra daqui se aplica, e a aparência é exatamente a de antes.
   */
  .card--variant {
    --kk-card-tint-color: color-mix(
      in oklab,
      var(--kk-card-accent-color) var(--kk-card-tint-strength),
      transparent
    );

    border-block-start-width: calc(var(--kk-card-border-width) * 3);
    border-block-start-color: var(--kk-card-accent-color);
    background-image: linear-gradient(
      to bottom,
      var(--kk-card-tint-color),
      transparent var(--kk-card-tint-extent)
    );
  }

  .card--primary {
    --kk-card-accent-color: var(--kk-color-primary-600);
  }

  .card--success {
    --kk-card-accent-color: var(--kk-color-success-600);
  }

  .card--neutral {
    --kk-card-accent-color: var(--kk-color-neutral-600);
  }

  .card--warning {
    --kk-card-accent-color: var(--kk-color-warning-600);
  }

  .card--danger {
    --kk-card-accent-color: var(--kk-color-danger-600);
  }

  .card__image {
    display: flex;
    border-start-start-radius: var(--kk-card-border-radius);
    border-start-end-radius: var(--kk-card-border-radius);
    margin: calc(-1 * var(--kk-card-border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-block-end: solid var(--kk-card-border-width) var(--kk-card-border-color);
    padding: calc(var(--kk-card-padding) / 2) var(--kk-card-padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-start-start-radius: var(--kk-card-border-radius);
    border-start-end-radius: var(--kk-card-border-radius);
  }

  .card__body {
    display: block;
    padding: var(--kk-card-padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-block-start: solid var(--kk-card-border-width) var(--kk-card-border-color);
    padding: var(--kk-card-padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }

  /*
   * O cartão horizontal é uma grade de duas colunas — imagem e conteúdo —, e não um
   * flex em linha: o conteúdo precisa empilhar cabeçalho, corpo e rodapé por dentro,
   * o que exige uma coluna própria em vez de virar mais um irmão da imagem.
   */
  .card--horizontal {
    display: grid;
    grid-template-columns: var(--kk-card-image-size) minmax(0, 1fr);
    grid-template-rows: auto 1fr auto;
  }

  .card--horizontal .card__image {
    grid-row: 1 / -1;
    block-size: 100%;
    margin: calc(-1 * var(--kk-card-border-width));
    margin-inline-end: 0;
    border-radius: 0;
    border-start-start-radius: var(--kk-card-border-radius);
    border-end-start-radius: var(--kk-card-border-radius);
  }

  .card--horizontal .card__image::slotted(img) {
    block-size: 100%;
    object-fit: cover;
  }

  /* Sem imagem, o conteúdo toma a largura toda em vez de deixar a coluna vazia. */
  .card--horizontal:not(.card--has-image) {
    grid-template-columns: minmax(0, 1fr);
  }

  .card--horizontal .card__header,
  .card--horizontal .card__body,
  .card--horizontal .card__footer {
    grid-column: -2;
  }
`,Iu,Lu,Ru,zu,Bu,Vu,Hu=class extends (Ru=M,Lu=[O({reflect:!0})],Iu=[O({reflect:!0})],Ru){constructor(){super(...arguments),g(this,`hasSlotController`,new Jc(this,`footer`,`header`,`image`)),_(this,Bu,m(zu,8,this,`vertical`)),m(zu,11,this),_(this,Vu,m(zu,12,this,`default`)),m(zu,15,this)}render(){return w`
      <div
        part="base"
        class=${E({card:!0,"card--horizontal":this.orientation===`horizontal`,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-image":this.hasSlotController.test(`image`),"card--has-header":this.hasSlotController.test(`header`),"card--variant":this.variant!=="default",[`card--${this.variant}`]:this.variant!=="default"})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};zu=f(Ru),Bu=new WeakMap,Vu=new WeakMap,h(zu,4,`orientation`,Lu,Hu,Bu),h(zu,4,`variant`,Iu,Hu,Vu),p(zu,Hu),g(Hu,`styles`,[D,Fu]),Hu.define(`kk-card`);var Uu=C`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-input-font-weight);
    color: var(--kk-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --kk-checkbox-toggle-size: var(--kk-toggle-size-small);
    font-size: var(--kk-input-font-size-small);
  }

  .checkbox--medium {
    --kk-checkbox-toggle-size: var(--kk-toggle-size-medium);
    font-size: var(--kk-input-font-size-medium);
  }

  .checkbox--large {
    --kk-checkbox-toggle-size: var(--kk-toggle-size-large);
    font-size: var(--kk-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--kk-checkbox-toggle-size);
    height: var(--kk-checkbox-toggle-size);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
    border-radius: 2px;
    background-color: var(--kk-input-background-color);
    color: var(--kk-color-neutral-0);
    transition:
      var(--kk-transition-fast) border-color,
      var(--kk-transition-fast) background-color,
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--kk-checkbox-toggle-size);
    height: var(--kk-checkbox-toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--kk-input-border-color-hover);
    background-color: var(--kk-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--kk-color-primary-600);
    background-color: var(--kk-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--kk-color-primary-500);
    background-color: var(--kk-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--kk-input-label-color);
    line-height: var(--kk-checkbox-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--kk-input-required-content);
    color: var(--kk-input-required-content-color);
    margin-inline-start: var(--kk-input-required-content-offset);
  }
`,Wu=ns(class extends rs{constructor(e){if(super(e),e.type!==ts.PROPERTY&&e.type!==ts.ATTRIBUTE&&e.type!==ts.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Hs(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Po||t===T)return t;let n=e.element,r=e.name;if(e.type===ts.PROPERTY){if(t===n[r])return Po}else if(e.type===ts.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Po}else if(e.type===ts.ATTRIBUTE&&n.getAttribute(r)===t+``)return Po;return Ws(e),t}}),Gu=C`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--kk-input-label-color);
    margin-block-end: var(--kk-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--kk-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--kk-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--kk-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--kk-input-required-content);
    margin-inline-start: var(--kk-input-required-content-offset);
    color: var(--kk-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--kk-input-help-text-color);
    margin-block-start: var(--kk-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--kk-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--kk-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--kk-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-block-start: var(--kk-spacing-2x-small);
  }

  /* Validation */
  :host(:state(--invalid)) .form-control__label {
    color: var(--kk-color-danger-700);
  }

  :host(:state(--invalid)) .form-control__help-text {
    color: var(--kk-color-danger-700);
  }
`;function Ku(e){return e.validity.valid?``:e.validationMessage===``?` `:e.validationMessage}var qu=class{host;interacaoEm;vistos=new Set;interagiu=!1;constructor(e,t){this.host=e,this.interacaoEm=t?.interacaoEm??[`kk-blur`,`kk-input`],e.addController(this)}hostConnected(){this.host.addEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.addEventListener(e,this.aoInteragir)}hostDisconnected(){this.host.removeEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.removeEventListener(e,this.aoInteragir)}aoInvalidar=e=>{this.conferindo||this.marcarInteragido(),this.host.emitInvalidEvent(e)};conferindo=!1;conferir(e){this.conferindo=!0;try{return e()}finally{this.conferindo=!1}}aoInteragir=e=>{this.vistos.add(e.type),!(this.vistos.size<this.interacaoEm.length)&&this.marcarInteragido()};marcarInteragido(){this.interagiu||(this.interagiu=!0,this.host.updateValidity())}esquecerInteracao(){this.vistos.clear(),this.interagiu=!1}aplicar(e,t){let n=this.host.required===!0;t(`--required`,n),t(`--optional`,!n),t(`--valid`,e),t(`--invalid`,!e),t(`--user-valid`,e&&this.interagiu),t(`--user-invalid`,!e&&this.interagiu)}},Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,z,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd=class extends (ld=M,cd=[A(`input[type="checkbox"]`)],sd=[k()],od=[O()],ad=[O()],id=[O()],rd=[O({reflect:!0})],nd=[O({type:Boolean,reflect:!0})],td=[O({type:Boolean,reflect:!0})],ed=[O({type:Boolean,reflect:!0})],$u=[cs(`checked`)],Qu=[O({reflect:!0,converter:js})],Zu=[O({type:Boolean,reflect:!0})],Xu=[O({attribute:`help-text`})],Yu=[j(`disabled`,{waitUntilFirstUpdate:!0})],Ju=[j([`checked`,`indeterminate`,`value`],{waitUntilFirstUpdate:!0})],ld){constructor(){super(...arguments),m(z,5,this),g(this,`validade`,new qu(this,{interacaoEm:[`kk-input`]})),g(this,`hasSlotController`,new Jc(this,`help-text`)),_(this,ud,m(z,8,this)),m(z,11,this),_(this,dd,m(z,12,this,!1)),m(z,15,this),_(this,fd,m(z,16,this,``)),m(z,19,this),_(this,pd,m(z,20,this,``)),m(z,23,this),_(this,md,m(z,24,this)),m(z,27,this),_(this,hd,m(z,28,this,`medium`)),m(z,31,this),_(this,gd,m(z,32,this,!1)),m(z,35,this),_(this,_d,m(z,36,this,!1)),m(z,39,this),_(this,vd,m(z,40,this,!1)),m(z,43,this),g(this,`defaultChecked`,m(z,56,this,!1)),m(z,59,this),_(this,yd,m(z,44,this,``)),m(z,47,this),_(this,bd,m(z,48,this,!1)),m(z,51,this),_(this,xd,m(z,52,this,``)),m(z,55,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.checked=this.defaultChecked,this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.checked?this.value||`on`:null),this.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit(`kk-change`)}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleInput(){this.emit(`kk-input`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleDisabledChange(){this.input.disabled=this.disabled,this.updateValidity()}handleStateChange(){this._internals.setFormValue(this.checked?this.value||`on`:null),this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.input.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,Ku(this.input),this.input)}emitInvalidEvent(e){let t=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.dispatchEvent(t)||e?.preventDefault()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return w`
      <div
        class=${E({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${E({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size===`small`,"checkbox--medium":this.size===`medium`,"checkbox--large":this.size===`large`})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${N(this.value)}
            .indeterminate=${Wu(this.indeterminate)}
            .checked=${Wu(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?` control--checked`:``}${this.indeterminate?` control--indeterminate`:``}"
            class="checkbox__control"
          >
            ${this.checked?w`
                  <kk-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></kk-icon>
                `:``}
            ${!this.checked&&this.indeterminate?w`
                  <kk-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></kk-icon>
                `:``}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};z=f(ld),ud=new WeakMap,dd=new WeakMap,fd=new WeakMap,pd=new WeakMap,md=new WeakMap,hd=new WeakMap,gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,yd=new WeakMap,bd=new WeakMap,xd=new WeakMap,h(z,4,`input`,cd,Sd,ud),h(z,4,`hasFocus`,sd,Sd,dd),h(z,4,`title`,od,Sd,fd),h(z,4,`name`,ad,Sd,pd),h(z,4,`value`,id,Sd,md),h(z,4,`size`,rd,Sd,hd),h(z,4,`disabled`,nd,Sd,gd),h(z,4,`checked`,td,Sd,_d),h(z,4,`indeterminate`,ed,Sd,vd),h(z,4,`form`,Qu,Sd,yd),h(z,4,`required`,Zu,Sd,bd),h(z,4,`helpText`,Xu,Sd,xd),h(z,1,`handleDisabledChange`,Yu,Sd),h(z,1,`handleStateChange`,Ju,Sd),h(z,5,`defaultChecked`,$u,Sd),p(z,Sd),g(Sd,`styles`,[D,Gu,Uu]),g(Sd,`dependencies`,{"kk-icon":vc}),g(Sd,`formAssociated`,!0),Sd.define(`kk-checkbox`);var Cd=C`
  :host {
    display: block;
  }

  .details {
    border: solid var(--kk-details-border-width, 1px) var(--kk-details-border-color, var(--kk-color-neutral-200));
    border-radius: var(--kk-details-border-radius, var(--kk-border-radius-medium));
    background-color: var(--kk-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--kk-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: calc(1px + var(--kk-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--kk-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  /*
   * A abertura é CSS, e não uma animação medindo o scrollHeight: o interpolate-size deixa
   * o height ir de 0 a auto, e o @starting-style dá o ponto de partida — dentro de um
   * <details> fechado o corpo não é desenhado, então ao abrir não há "valor de antes" de
   * onde transicionar, e sem ele o corpo simplesmente aparece. O @starting-style vale
   * também para o PRIMEIRO desenho, e é isso que a classe details--transicao segura: um
   * <kk-details open> nasceria fechado e abriria à vista. Ela só entra depois do primeiro
   * desenho, na primeira troca de open. Quem espera o fim é o componente, pelo
   * getAnimations().
   */
  .details__body {
    interpolate-size: allow-keywords;
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition:
      height var(--kk-details-transition, var(--kk-transition-medium)) linear,
      opacity var(--kk-details-transition, var(--kk-transition-medium)) linear;
  }

  .details--open .details__body {
    height: auto;
    opacity: 1;
  }

  @starting-style {
    .details--open.details--transicao .details__body {
      height: 0;
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .details__body {
      transition: none;
    }
  }

  .details__content {
    display: block;
    padding: var(--kk-spacing-medium);
  }
`,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,B,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd=class extends (Pd=M,Nd=[A(`.details`)],Md=[A(`.details__header`)],jd=[A(`.details__body`)],Ad=[A(`.details__expand-icon-slot`)],kd=[k()],Od=[O({type:Boolean,reflect:!0})],Dd=[O()],Ed=[O({type:Boolean,reflect:!0})],Td=[O({reflect:!0})],wd=[j(`open`,{waitUntilFirstUpdate:!0})],Pd){constructor(){super(...arguments),m(B,5,this),g(this,`localize`,new Ha(this)),_(this,Fd,m(B,8,this)),m(B,11,this),_(this,Id,m(B,12,this)),m(B,15,this),_(this,Ld,m(B,16,this)),m(B,19,this),_(this,Rd,m(B,20,this)),m(B,23,this),g(this,`detailsObserver`),_(this,zd,m(B,24,this,!1)),m(B,27,this),_(this,Bd,m(B,28,this,!1)),m(B,31,this),_(this,Vd,m(B,32,this)),m(B,35,this),_(this,Hd,m(B,36,this,!1)),m(B,39,this),_(this,Ud,m(B,40,this)),m(B,43,this)}firstUpdated(){this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`open`&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key===`ArrowUp`||e.key===`ArrowLeft`)&&(e.preventDefault(),this.hide()),(e.key===`ArrowDown`||e.key===`ArrowRight`)&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.transicao=!0,this.open){if(this.details.open=!0,this.emit(`kk-show`,{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await this.esperarTransicao(),this.emit(`kk-after-show`)}else{if(this.emit(`kk-hide`,{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await this.esperarTransicao(),this.open||(this.details.open=!1),this.emit(`kk-after-hide`)}}async esperarTransicao(){await this.updateComplete,await Promise.allSettled(this.body.getAnimations().map(e=>e.finished))}async show(){if(!(this.open||this.disabled))return this.open=!0,qc(this,`kk-after-show`)}async hide(){if(this.open&&!this.disabled)return this.open=!1,qc(this,`kk-after-hide`)}render(){let e=this.localize.dir()===`rtl`;return w`
      <details
        part="base"
        class=${E({details:!0,"details--open":this.open,"details--transicao":this.transicao,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?`true`:`false`}
          aria-controls="content"
          aria-disabled=${this.disabled?`true`:`false`}
          tabindex=${this.disabled?`-1`:`0`}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <kk-icon library="system" name=${e?`chevron-left`:`chevron-right`}></kk-icon>
            </slot>
            <slot name="collapse-icon">
              <kk-icon library="system" name=${e?`chevron-left`:`chevron-right`}></kk-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};B=f(Pd),Fd=new WeakMap,Id=new WeakMap,Ld=new WeakMap,Rd=new WeakMap,zd=new WeakMap,Bd=new WeakMap,Vd=new WeakMap,Hd=new WeakMap,Ud=new WeakMap,h(B,4,`details`,Nd,Wd,Fd),h(B,4,`header`,Md,Wd,Id),h(B,4,`body`,jd,Wd,Ld),h(B,4,`expandIconSlot`,Ad,Wd,Rd),h(B,4,`transicao`,kd,Wd,zd),h(B,4,`open`,Od,Wd,Bd),h(B,4,`summary`,Dd,Wd,Vd),h(B,4,`disabled`,Ed,Wd,Hd),h(B,4,`name`,Td,Wd,Ud),h(B,1,`handleOpenChange`,wd,Wd),p(B,Wd),g(Wd,`styles`,[D,Cd]),g(Wd,`dependencies`,{"kk-icon":vc}),Wd.define(`kk-details`);var Gd=C`
  :host {
    display: contents;
  }

  .dialog {
    padding: 0;
    border: none;
    background: none;
    max-width: 100vw;
    max-height: 100vh;
    overflow: visible;
  }

  .dialog::backdrop {
    background-color: var(--kk-overlay-background-color);
    transition:
      opacity var(--kk-dialog-transition, var(--kk-transition-slow)),
      display var(--kk-dialog-transition, var(--kk-transition-slow)) allow-discrete,
      overlay var(--kk-dialog-transition, var(--kk-transition-slow)) allow-discrete;
    opacity: 0;
  }

  /*
   * :modal, e não :show-modal — o segundo não existe em CSS, e um seletor
   * inválido derruba a regra inteira em silêncio. Era o que deixava o painel
   * parado em opacity 0 depois do showModal(): o diálogo abria de fato,
   * prendendo o foco inclusive, mas invisível.
   */
  .dialog:modal::backdrop {
    opacity: 1;
  }

  @starting-style {
    .dialog:modal::backdrop {
      opacity: 0;
    }
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--kk-dialog-width, auto);
    max-width: calc(100vw - var(--kk-spacing-2x-large));
    max-height: calc(100vh - var(--kk-spacing-2x-large));
    background-color: var(--kk-panel-background-color);
    border-radius: var(--kk-border-radius-large);
    box-shadow: var(--kk-shadow-x-large);
    overflow: hidden;

    /* Animation starting state */
    opacity: 0;
    scale: 0.9;
    transition:
      opacity var(--kk-dialog-transition, var(--kk-transition-slow)),
      scale var(--kk-dialog-transition, var(--kk-transition-slow)),
      display var(--kk-dialog-transition, var(--kk-transition-slow)) allow-discrete,
      overlay var(--kk-dialog-transition, var(--kk-transition-slow)) allow-discrete;
  }

  .dialog:modal .dialog__panel {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    .dialog:modal .dialog__panel {
      opacity: 0;
      scale: 0.9;
    }
  }

  .dialog__header {
    display: flex;
    align-items: center;
    padding: var(--kk-spacing-large);
  }

  .dialog__title {
    flex: 1 1 auto;
    font-size: var(--kk-font-size-large);
    line-height: var(--kk-line-height-dense);
    margin: 0;
  }

  .dialog__header-actions {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: var(--kk-spacing-x-small);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--kk-spacing-large);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    padding: var(--kk-spacing-large);
    text-align: end;
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
  }
`,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf=class extends (Zd=M,Xd=[A(`.dialog`)],Yd=[O({type:Boolean,reflect:!0})],Jd=[O({reflect:!0})],qd=[O({attribute:`no-header`,type:Boolean,reflect:!0})],Kd=[j(`open`,{waitUntilFirstUpdate:!0})],Zd){constructor(){super(...arguments),m(Qd,5,this),g(this,`hasSlotController`,new Jc(this,`footer`)),g(this,`localize`,new Ha(this)),_(this,$d,m(Qd,8,this)),m(Qd,11,this),_(this,ef,m(Qd,12,this,!1)),m(Qd,15,this),_(this,tf,m(Qd,16,this,``)),m(Qd,19,this),_(this,nf,m(Qd,20,this,!1)),m(Qd,23,this)}requestClose(e){this.emit(`kk-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented||this.hide()}firstUpdated(){this.open&&this.abrir()}abrir(){this.dialog.open||(this.dialog.showModal(),this.emit(`kk-initial-focus`,{cancelable:!0}))}fechar(){this.dialog.open&&this.dialog.close()}handleOpenChange(){this.open?(this.emit(`kk-show`),this.abrir(),this.emit(`kk-after-show`)):(this.emit(`kk-hide`),this.fechar(),this.emit(`kk-after-hide`))}async show(){this.open||=!0}async hide(){this.open&&=!1}handleCancel(e){e.preventDefault(),this.requestClose(`keyboard`)}handleClose(){this.open=!1}render(){return w`
      <dialog
        part="base"
        class="dialog"
        @cancel=${this.handleCancel}
        @close=${this.handleClose}
        @click=${e=>e.target===this.dialog&&this.requestClose(`overlay`)}
      >
        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-label=${N(this.noHeader?this.label:void 0)}
          aria-labelledby=${N(this.noHeader?void 0:`title`)}
        >
          ${this.noHeader?``:w`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <kk-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></kk-icon-button>
                  </div>
                </header>
              `}
          <div part="body" class="dialog__body"><slot></slot></div>

          ${this.hasSlotController.test(`footer`)?w`
                <footer part="footer" class="dialog__footer">
                  <slot name="footer"></slot>
                </footer>
              `:``}
        </div>
      </dialog>
    `}};Qd=f(Zd),$d=new WeakMap,ef=new WeakMap,tf=new WeakMap,nf=new WeakMap,h(Qd,4,`dialog`,Xd,rf,$d),h(Qd,4,`open`,Yd,rf,ef),h(Qd,4,`label`,Jd,rf,tf),h(Qd,4,`noHeader`,qd,rf,nf),h(Qd,1,`handleOpenChange`,Kd,rf),p(Qd,rf),g(rf,`styles`,[D,Gd]),g(rf,`dependencies`,{"kk-icon-button":Kc}),rf.define(`kk-dialog`);var af=C`
  :host {
    --kk-popup-arrow-color: var(--kk-color-neutral-1000);
    --kk-popup-arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --kk-popup-arrow-size-diagonal: calc(var(--kk-popup-arrow-size) * 0.7071);
    --kk-popup-arrow-padding-offset: calc(var(--kk-popup-arrow-size-diagonal) - var(--kk-popup-arrow-size));

    display: contents;
  }

  /*
   * The popup and the hover bridge both live in the top layer via the Popover API, which is what keeps them from being
   * clipped by an ancestor's overflow or trapped inside an ancestor's transform. The browser's default popover styles
   * are meant for standalone panels, so both elements have to be stripped back down first.
   */
  .popup,
  .popup-hover-bridge {
    margin: 0;
    border: none;
    padding: 0;
    width: auto;
    height: auto;
    overflow: visible;
    color: inherit;
    background: transparent;
  }

  .popup {
    position: fixed;
    inset: auto;
    isolation: isolate;
    max-width: var(--kk-popup-auto-size-available-width, none);
    max-height: var(--kk-popup-auto-size-available-height, none);
  }

  /* Once the anchor has scrolled out of view there's nothing left to point at, so the popup gets out of the way */
  :host([data-anchor-hidden]) .popup,
  :host([data-anchor-hidden]) .popup-hover-bridge {
    visibility: hidden;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--kk-popup-arrow-size-diagonal) * 2);
    height: calc(var(--kk-popup-arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--kk-popup-arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge {
    position: fixed;
    inset: 0;
    clip-path: polygon(
      var(--kk-popup-hover-bridge-top-left-x, 0) var(--kk-popup-hover-bridge-top-left-y, 0),
      var(--kk-popup-hover-bridge-top-right-x, 0) var(--kk-popup-hover-bridge-top-right-y, 0),
      var(--kk-popup-hover-bridge-bottom-right-x, 0) var(--kk-popup-hover-bridge-bottom-right-y, 0),
      var(--kk-popup-hover-bridge-bottom-left-x, 0) var(--kk-popup-hover-bridge-bottom-left-y, 0)
    );
  }
`,of={top:`bottom`,bottom:`top`,left:`right`,right:`left`};function sf(e){return e.split(`-`)[0]}function cf(e){return e.split(`-`)[1]}function lf(e){return e===`top`||e===`bottom`}function uf(e){let t=cf(e),n=of[sf(e)];return t===void 0?n:`${n}-${t}`}function df(e,t){let n={esquerda:0,topo:0,direita:window.innerWidth,base:window.innerHeight},r=e===void 0?[]:Array.isArray(e)?e:[e];for(let e of r){let t=e.getBoundingClientRect();n.esquerda=Math.max(n.esquerda,t.left),n.topo=Math.max(n.topo,t.top),n.direita=Math.min(n.direita,t.right),n.base=Math.min(n.base,t.bottom)}return{esquerda:n.esquerda+t,topo:n.topo+t,direita:n.direita-t,base:n.base-t}}function ff(e,t,n,r,i,a){let o=sf(r),s=cf(r),c=0,l=0;return lf(o)?(l=o===`top`?e.top-n-i:e.bottom+i,c=s===`start`?e.left:s===`end`?e.right-t:e.left+(e.width-t)/2,c+=a):(c=o===`left`?e.left-t-i:e.right+i,l=s===`start`?e.top:s===`end`?e.bottom-n:e.top+(e.height-n)/2,l+=a),{x:c,y:l}}function pf(e,t,n,r,i){return Math.max(0,i.esquerda-e)+Math.max(0,i.topo-t)+Math.max(0,e+n-i.direita)+Math.max(0,t+r-i.base)}function mf(e,t,n,r,i,a){switch(i){case`top`:return Math.max(0,a.topo-t);case`bottom`:return Math.max(0,t+r-a.base);case`left`:return Math.max(0,a.esquerda-e);case`right`:return Math.max(0,e+n-a.direita)}}function hf(e,t,n,r){let i=r.direita-r.esquerda,a=r.base-r.topo;switch(t){case`top`:return{largura:i,altura:e.top-r.topo-n};case`bottom`:return{largura:i,altura:r.base-e.bottom-n};case`left`:return{largura:e.left-r.esquerda-n,altura:a};case`right`:return{largura:r.direita-e.right-n,altura:a}}}function gf(e){let t=e.contextElement??(e instanceof Element?e:void 0);if(t===void 0)return!1;let n=t.getBoundingClientRect();if(n.width===0&&n.height===0)return!0;for(let e=t.parentElement;e!==null;e=e.parentElement){let t=getComputedStyle(e);if(!/auto|scroll|hidden|clip/.test(t.overflow+t.overflowX+t.overflowY))continue;let r=e.getBoundingClientRect();if(n.bottom<=r.top||n.top>=r.bottom||n.right<=r.left||n.left>=r.right)return!0}return!1}function _f(e,t,n){let r=n.distancia??0,i=n.desvio??0,a=e.getBoundingClientRect();if(n.espelhar!==void 0){let e=n.espelhar===`width`||n.espelhar===`both`,r=n.espelhar===`height`||n.espelhar===`both`;t.style.width=e?`${a.width}px`:``,t.style.height=r?`${a.height}px`:``}else t.style.width=``,t.style.height=``;let o=t.offsetWidth,s=t.offsetHeight,c=n.posicionamento,l=df(n.virarLimite,n.virarPreenchimento??0);if(n.virar===!0){let e=[n.posicionamento,...n.virarAlternativas??[uf(n.posicionamento)]],t=n.posicionamento,u=1/0,d=!1;for(let n of e){let{x:e,y:c}=ff(a,o,s,n,r,i);if(mf(e,c,o,s,sf(n),l)===0){t=n,d=!0;break}let ee=pf(e,c,o,s,l);ee<u&&(u=ee,t=n)}c=d||(n.virarEstrategia??`melhor-encaixe`)===`melhor-encaixe`?t:n.posicionamento}let u=sf(c),{x:d,y:ee}=ff(a,o,s,c,r,i);if(n.deslizar===!0){let e=df(n.deslizarLimite,n.deslizarPreenchimento??0);lf(u)?d=Math.min(Math.max(d,e.esquerda),Math.max(e.esquerda,e.direita-o)):ee=Math.min(Math.max(ee,e.topo),Math.max(e.topo,e.base-s))}let te=n.medirEspaco===!0?hf(a,u,r,df(n.medirLimite,n.medirPreenchimento??0)):{largura:1/0,altura:1/0},ne={};if(n.seta!==void 0){let e=n.setaPreenchimento??0,t=lf(u)?n.seta.offsetWidth:n.seta.offsetHeight;if(lf(u)){let n=a.left+a.width/2-d-t/2;ne.x=Math.min(Math.max(n,e),o-t-e)}else{let n=a.top+a.height/2-ee-t/2;ne.y=Math.min(Math.max(n,e),s-t-e)}}return{x:Math.round(d),y:Math.round(ee),posicionamento:c,espacoLivre:te,ancoraOculta:gf(e),seta:ne}}function vf(e,t,n){let r=e.contextElement??(e instanceof Element?e:void 0),i=[window];for(let e=r?.parentElement??null;e!==null;e=e.parentElement){let t=getComputedStyle(e);/auto|scroll|overlay/.test(t.overflow+t.overflowX+t.overflowY)&&i.push(e)}for(let e of i)e.addEventListener(`scroll`,n,{passive:!0,capture:!0});window.addEventListener(`resize`,n,{passive:!0});let a=new ResizeObserver(n);return r!==void 0&&a.observe(r),a.observe(t),n(),()=>{for(let e of i)e.removeEventListener(`scroll`,n,{capture:!0});window.removeEventListener(`resize`,n),a.disconnect()}}function yf(e){return(Array.isArray(e)?e:String(e).split(` `)).map(e=>e.trim()).filter(e=>e!==``)}function bf(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e.contextElement instanceof Element:!0)}var xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,V,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,H=class extends (Gf=M,Wf=[A(`.popup`)],Uf=[A(`.popup__arrow`)],Hf=[A(`.popup-hover-bridge`)],Vf=[O()],Bf=[O({type:Boolean,reflect:!0})],zf=[O({reflect:!0})],Rf=[O({type:Number})],Lf=[O({type:Number})],If=[O({type:Boolean})],Ff=[O({attribute:`arrow-placement`})],Pf=[O({attribute:`arrow-padding`,type:Number})],Nf=[O({type:Boolean})],Mf=[O({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],jf=[O({attribute:`flip-fallback-strategy`})],Af=[O({type:Object})],kf=[O({attribute:`flip-padding`,type:Number})],Of=[O({type:Boolean})],Df=[O({type:Object})],Ef=[O({attribute:`shift-padding`,type:Number})],Tf=[O({attribute:`auto-size`})],wf=[O()],Cf=[O({type:Object})],Sf=[O({attribute:`auto-size-padding`,type:Number})],xf=[O({attribute:`hover-bridge`,type:Boolean})],Gf){constructor(){super(...arguments),g(this,`anchorEl`),g(this,`cleanup`),g(this,`localize`,new Ha(this)),_(this,Kf,m(V,8,this)),m(V,11,this),_(this,qf,m(V,12,this)),m(V,15,this),_(this,Jf,m(V,16,this)),m(V,19,this),_(this,Yf,m(V,20,this)),m(V,23,this),_(this,Xf,m(V,24,this,!1)),m(V,27,this),_(this,Zf,m(V,28,this,`top`)),m(V,31,this),_(this,Qf,m(V,32,this,0)),m(V,35,this),_(this,$f,m(V,36,this,0)),m(V,39,this),_(this,ep,m(V,40,this,!1)),m(V,43,this),_(this,tp,m(V,44,this,`anchor`)),m(V,47,this),_(this,np,m(V,48,this,10)),m(V,51,this),_(this,rp,m(V,52,this,!1)),m(V,55,this),_(this,ip,m(V,56,this,``)),m(V,59,this),_(this,ap,m(V,60,this,`best-fit`)),m(V,63,this),_(this,op,m(V,64,this)),m(V,67,this),_(this,sp,m(V,68,this,0)),m(V,71,this),_(this,cp,m(V,72,this,!1)),m(V,75,this),_(this,lp,m(V,76,this)),m(V,79,this),_(this,up,m(V,80,this,0)),m(V,83,this),_(this,dp,m(V,84,this)),m(V,87,this),_(this,fp,m(V,88,this)),m(V,91,this),_(this,pp,m(V,92,this)),m(V,95,this),_(this,mp,m(V,96,this,0)),m(V,99,this),_(this,hp,m(V,100,this,!1)),m(V,103,this),g(this,`updateHoverBridge`,()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--kk-popup-hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--kk-popup-hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--kk-popup-hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--kk-popup-hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-right-y`,`${u}px`)}})}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),(e.has(`active`)||e.has(`hoverBridge`))&&this.syncTopLayer(),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}syncTopLayer(){if(!this.isConnected||!this.popup||!this.hoverBridgeEl)return;let e=this.active&&this.hoverBridge;e&&!this.hoverBridgeEl.matches(`:popover-open`)&&this.popup.matches(`:popover-open`)&&this.popup.hidePopover(),e!==this.hoverBridgeEl.matches(`:popover-open`)&&(e?this.hoverBridgeEl.showPopover():this.hoverBridgeEl.hidePopover()),this.active!==this.popup.matches(`:popover-open`)&&(this.active?this.popup.showPopover():this.popup.hidePopover())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||bf(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=vf(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.removeAttribute(`data-anchor-hidden`),this.style.removeProperty(`--kk-popup-auto-size-available-width`),this.style.removeProperty(`--kk-popup-auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let{x:e,y:t,posicionamento:n,espacoLivre:r,ancoraOculta:i,seta:a}=_f(this.anchorEl,this.popup,{posicionamento:this.placement,distancia:this.distance,desvio:this.skidding,virar:this.flip,...this.flipFallbackPlacements.length>0?{virarAlternativas:yf(this.flipFallbackPlacements)}:{},virarEstrategia:this.flipFallbackStrategy===`best-fit`?`melhor-encaixe`:`inicial`,virarLimite:this.flipBoundary,virarPreenchimento:this.flipPadding,deslizar:this.shift,deslizarLimite:this.shiftBoundary,deslizarPreenchimento:this.shiftPadding,medirEspaco:!!this.autoSize,medirLimite:this.autoSizeBoundary,medirPreenchimento:this.autoSizePadding,...this.sync?{espelhar:this.sync}:{},...this.arrow?{seta:this.arrowEl,setaPreenchimento:this.arrowPadding}:{}});if(this.setAttribute(`data-current-placement`,n),this.toggleAttribute(`data-anchor-hidden`,i),this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--kk-popup-auto-size-available-height`,`${r.altura}px`):this.style.removeProperty(`--kk-popup-auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--kk-popup-auto-size-available-width`,`${r.largura}px`):this.style.removeProperty(`--kk-popup-auto-size-available-width`),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=this.localize.dir()===`rtl`,t={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[n.split(`-`)[0]],r=``,i=``,o=``,s=``;if(this.arrowPlacement===`start`){let t=typeof a.x==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``;r=typeof a.y==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``,i=e?t:``,s=e?``:t}else if(this.arrowPlacement===`end`){let t=typeof a.x==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``;i=e?``:t,s=e?t:``,o=typeof a.y==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(s=typeof a.x==`number`?`calc(50% - var(--kk-popup-arrow-size-diagonal))`:``,r=typeof a.y==`number`?`calc(50% - var(--kk-popup-arrow-size-diagonal))`:``):(s=typeof a.x==`number`?`${a.x}px`:``,r=typeof a.y==`number`?`${a.y}px`:``);Object.assign(this.arrowEl.style,{top:r,right:i,bottom:o,left:s,[t]:`calc(var(--kk-popup-arrow-size-diagonal) * -1)`})}requestAnimationFrame(()=>this.updateHoverBridge()),this.emit(`kk-reposition`)}render(){return w`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span part="hover-bridge" class="popup-hover-bridge" popover="manual"></span>

      <div
        part="popup"
        popover="manual"
        class=${E({popup:!0,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?w`<div part="arrow" class="popup__arrow" role="presentation"></div>`:``}
      </div>
    `}};V=f(Gf),Kf=new WeakMap,qf=new WeakMap,Jf=new WeakMap,Yf=new WeakMap,Xf=new WeakMap,Zf=new WeakMap,Qf=new WeakMap,$f=new WeakMap,ep=new WeakMap,tp=new WeakMap,np=new WeakMap,rp=new WeakMap,ip=new WeakMap,ap=new WeakMap,op=new WeakMap,sp=new WeakMap,cp=new WeakMap,lp=new WeakMap,up=new WeakMap,dp=new WeakMap,fp=new WeakMap,pp=new WeakMap,mp=new WeakMap,hp=new WeakMap,h(V,4,`popup`,Wf,H,Kf),h(V,4,`arrowEl`,Uf,H,qf),h(V,4,`hoverBridgeEl`,Hf,H,Jf),h(V,4,`anchor`,Vf,H,Yf),h(V,4,`active`,Bf,H,Xf),h(V,4,`placement`,zf,H,Zf),h(V,4,`distance`,Rf,H,Qf),h(V,4,`skidding`,Lf,H,$f),h(V,4,`arrow`,If,H,ep),h(V,4,`arrowPlacement`,Ff,H,tp),h(V,4,`arrowPadding`,Pf,H,np),h(V,4,`flip`,Nf,H,rp),h(V,4,`flipFallbackPlacements`,Mf,H,ip),h(V,4,`flipFallbackStrategy`,jf,H,ap),h(V,4,`flipBoundary`,Af,H,op),h(V,4,`flipPadding`,kf,H,sp),h(V,4,`shift`,Of,H,cp),h(V,4,`shiftBoundary`,Df,H,lp),h(V,4,`shiftPadding`,Ef,H,up),h(V,4,`autoSize`,Tf,H,dp),h(V,4,`sync`,wf,H,fp),h(V,4,`autoSizeBoundary`,Cf,H,pp),h(V,4,`autoSizePadding`,Sf,H,mp),h(V,4,`hoverBridge`,xf,H,hp),p(V,H),g(H,`styles`,[D,af]);function*gp(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*gp(e.shadowRoot.activeElement)))}function _p(){return[...gp()].pop()}var vp=new WeakMap;function yp(e){let t=vp.get(e);return t||(t=window.getComputedStyle(e,null),vp.set(e,t)),t}function bp(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=yp(e);return t.visibility!==`hidden`&&t.display!==`none`}function xp(e){let{overflowY:t,overflowX:n}=yp(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function Sp(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));if(e.hasAttribute(`tabindex`)&&(Number.isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`))return!1;if(t===`input`&&e.getAttribute(`type`)===`radio`){let t=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute(`name`)}"]`,r=t.querySelector(`${n}:checked`);return r?r===e:t.querySelector(n)===e}return bp(e)?(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:xp(e):!1}function Cp(e){let t=Tp(e);return{start:t[0]??null,end:t.at(-1)??null}}function wp(e,t){return e.getRootNode({composed:!0})?.host!==t}function Tp(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),i instanceof HTMLElement&&!n.includes(i)&&Sp(i)&&n.push(i),i instanceof HTMLSlotElement&&wp(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of i.children)r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}var Ep=C`
  :host {
    display: inline-block;
  }

  /*
   * Abrir e fechar é CSS: opacidade e escala no painel do popup, com o @starting-style dando
   * o ponto de partida quando ele entra no top layer. A origem da escala vem do lado que o
   * posicionador escolheu (data-current-placement), e é por isso que o componente só desativa
   * o popup depois da transição. Quem espera o fim é o componente, pelo getAnimations().
   */
  .dropdown::part(popup) {
    opacity: 0;
    scale: 0.9;
    transition:
      opacity var(--kk-dropdown-transition, var(--kk-transition-fast)) ease,
      scale var(--kk-dropdown-transition, var(--kk-transition-fast)) ease;
  }

  .dropdown--open::part(popup) {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    .dropdown--open::part(popup) {
      opacity: 0;
      scale: 0.9;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dropdown::part(popup) {
      transition: none;
    }
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-normal);
    box-shadow: var(--kk-shadow-large);
    border-radius: var(--kk-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* Quando um menu é passado por slot, ele precisa respeitar o auto-size do popup. */
  ::slotted(kk-menu) {
    max-width: var(--kk-popup-auto-size-available-width) !important;
    max-height: var(--kk-popup-auto-size-available-height) !important;
  }
`,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,U,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp=class extends (zp=M,Rp=[A(`.dropdown`)],Lp=[A(`.dropdown__trigger`)],Ip=[A(`.dropdown__panel`)],Fp=[O({type:Boolean,reflect:!0})],Pp=[O({reflect:!0})],Np=[O({type:Boolean,reflect:!0})],Mp=[O({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],jp=[O({attribute:!1})],Ap=[O({type:Number})],kp=[O({type:Number})],Op=[O({reflect:!0})],Dp=[j(`open`,{waitUntilFirstUpdate:!0})],zp){constructor(){super(...arguments),m(U,5,this),_(this,Bp,m(U,8,this)),m(U,11,this),_(this,Vp,m(U,12,this)),m(U,15,this),_(this,Hp,m(U,16,this)),m(U,19,this),g(this,`closeWatcher`),_(this,Up,m(U,20,this,!1)),m(U,23,this),_(this,Wp,m(U,24,this,`bottom-start`)),m(U,27,this),_(this,Gp,m(U,28,this,!1)),m(U,31,this),_(this,Kp,m(U,32,this,!1)),m(U,35,this),_(this,qp,m(U,36,this)),m(U,39,this),_(this,Jp,m(U,40,this,0)),m(U,43,this),_(this,Yp,m(U,44,this,0)),m(U,47,this),_(this,Xp,m(U,48,this)),m(U,51,this),g(this,`handleKeyDown`,e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}),g(this,`handleDocumentKeyDown`,e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`kk-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?_p():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}}),g(this,`handleDocumentMouseDown`,e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}),g(this,`handlePanelSelect`,e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`kk-menu`&&(this.hide(),this.focusOnTrigger())})}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`kk-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems();if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){e.preventDefault(),this.open||(this.show(),await this.updateComplete);let r=e.key===`ArrowDown`||e.key===`Home`?n.at(0):n.at(-1);r&&this.updateComplete.then(()=>{t.setCurrentItem(r),r.focus()})}}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>Cp(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`kk-button`:case`kk-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,qc(this,`kk-after-show`)}painelTemFoco(){let e=this.panel?.assignedElements({flatten:!0})??[];for(let t of gp())if(e.some(e=>e===t||e.contains(t)))return!0;return!1}async hide(){if(this.open)return this.painelTemFoco()&&this.focusOnTrigger(),this.open=!1,qc(this,`kk-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener(`kk-select`,this.handlePanelSelect),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener(`kk-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.emit(`kk-show`),this.addOpenListeners(),this.popup.active=!0,await this.esperarTransicao(),this.emit(`kk-after-show`)):(this.emit(`kk-hide`),this.removeOpenListeners(),await this.esperarTransicao(),this.open||(this.popup.active=!1),this.emit(`kk-after-hide`))}async esperarTransicao(){await this.updateComplete,await Promise.allSettled(this.popup.popup.getAnimations().map(e=>e.finished))}render(){return w`
      <kk-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${N(this.sync?this.sync:void 0)}
        class=${E({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?`false`:`true`} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </kk-popup>
    `}};U=f(zp),Bp=new WeakMap,Vp=new WeakMap,Hp=new WeakMap,Up=new WeakMap,Wp=new WeakMap,Gp=new WeakMap,Kp=new WeakMap,qp=new WeakMap,Jp=new WeakMap,Yp=new WeakMap,Xp=new WeakMap,h(U,4,`popup`,Rp,Zp,Bp),h(U,4,`trigger`,Lp,Zp,Vp),h(U,4,`panel`,Ip,Zp,Hp),h(U,4,`open`,Fp,Zp,Up),h(U,4,`placement`,Pp,Zp,Wp),h(U,4,`disabled`,Np,Zp,Gp),h(U,4,`stayOpenOnSelect`,Mp,Zp,Kp),h(U,4,`containingElement`,jp,Zp,qp),h(U,4,`distance`,Ap,Zp,Jp),h(U,4,`skidding`,kp,Zp,Yp),h(U,4,`sync`,Op,Zp,Xp),h(U,1,`handleOpenChange`,Dp,Zp),p(U,Zp),g(Zp,`styles`,[D,Ep]),g(Zp,`dependencies`,{"kk-popup":H}),Zp.define(`kk-dropdown`);var Qp=C`
  :host {
    --kk-menu-item-submenu-offset: -2px;
    --kk-menu-item-check-width: 1.5em;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-normal);
    line-height: var(--kk-line-height-normal);
    letter-spacing: var(--kk-letter-spacing-normal);
    color: var(--kk-color-neutral-700);
    padding: var(--kk-spacing-2x-small) var(--kk-spacing-2x-small);
    transition: var(--kk-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(kk-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading kk-spinner {
    --kk-spinner-indicator-color: currentColor;
    --kk-spinner-track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .menu-item .menu-item__label {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  /*
   * A descrição é a segunda linha, menor e apagada. O item com ela deixa de
   * ser de uma linha só: o texto quebra, e o prefixo — que o menu-item já
   * centra — fica no meio das duas linhas, que é onde um ícone de destino fica.
   */
  .menu-item .menu-item__description {
    display: none;
    font-size: var(--kk-font-size-small);
    line-height: var(--kk-line-height-dense);
    color: var(--kk-color-text-muted);
  }

  .menu-item--has-description {
    white-space: normal;
  }

  .menu-item--has-description .menu-item__description {
    display: block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--kk-menu-item-prefix-size, 1em);
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--kk-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--kk-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--kk-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--kk-menu-item-safe-triangle-cursor-x, 0) var(--kk-menu-item-safe-triangle-cursor-y, 0),
      var(--kk-menu-item-safe-triangle-submenu-start-x, 0) var(--kk-menu-item-safe-triangle-submenu-start-y, 0),
      var(--kk-menu-item-safe-triangle-submenu-end-x, 0) var(--kk-menu-item-safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--kk-color-neutral-100);
    color: var(--kk-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--kk-menu-item-check-width);
    visibility: hidden;
  }

  /* O chevron do submenu não obedece à largura do visto: ele fica do outro lado. */
  .menu-item .menu-item__chevron {
    width: 1.5em;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation to submenus */
  kk-popup::part(popup) {
    box-shadow: var(--kk-shadow-large);
    margin-left: var(--kk-menu-item-submenu-offset);
  }

  .menu-item--rtl kk-popup::part(popup) {
    margin-left: calc(-1 * var(--kk-menu-item-submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(kk-menu) {
    max-width: var(--kk-popup-auto-size-available-width) !important;
    max-height: var(--kk-popup-auto-size-available-height) !important;
  }
`,$p=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),$p(e,t);return!0},em=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},tm=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),im(t)}};function nm(e){this._$AN===void 0?this._$AM=e:(em(this),this._$AM=e,tm(this))}function rm(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)$p(r[e],!1),em(r[e]);else r!=null&&($p(r,!1),em(r))}else $p(this,e)}}var im=e=>{e.type==ts.CHILD&&(e._$AP??=rm,e._$AQ??=nm)},am=class extends rs{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),tm(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&($p(this,e),em(this))}setValue(e){if(Hs(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},om=()=>new sm,sm=class{},cm=new WeakMap,lm=ns(class extends am{render(e){return T}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),T}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=cm.get(t);n===void 0&&(n=new WeakMap,cm.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?cm.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),um=class{host;popupRef=om();enableSubmenuTimer=-1;isConnected=!1;isPopupConnected=!1;skidding=0;hasSlotController;submenuOpenDelay=100;constructor(e,t){this.host=e,e.addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`kk-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`kk-reposition`,this.handlePopupReposition),this.isPopupConnected=!1)}handleMouseMove=e=>{this.host.style.setProperty(`--kk-menu-item-safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-cursor-y`,`${e.clientY}px`)};handleMouseOver=()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()};handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`kk-menu-item, [role^='menuitem']`),n.length!==0)break;if(n&&n.length!==0){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}handleKeyDown=e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e)}};handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`kk-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()};handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()};handlePopupMouseover=e=>{e.stopPropagation()};handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`kk-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-end-y`,`${r+a}px`)};setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap(),t=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?w`
      <kk-popup
        ${lm(this.popupRef)}
        placement=${e?`left-start`:`right-start`}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </kk-popup>
    `:w` <slot name="submenu" hidden></slot> `}},dm,fm,pm,mm,hm,gm,_m,vm,ym,bm,xm,W,Sm,Cm,wm,Tm,Em,Dm,Om,km=class extends (xm=M,bm=[A(`slot:not([name])`)],ym=[A(`.menu-item`)],vm=[O()],_m=[O({type:Boolean,reflect:!0})],gm=[O()],hm=[O({type:Boolean,reflect:!0})],mm=[O({type:Boolean,reflect:!0})],pm=[j(`checked`)],fm=[j(`disabled`)],dm=[j(`type`)],xm){constructor(){super(...arguments),m(W,5,this),g(this,`cachedTextLabel`),g(this,`localize`,new Ha(this)),_(this,Sm,m(W,8,this)),m(W,11,this),_(this,Cm,m(W,12,this)),m(W,15,this),_(this,wm,m(W,16,this,`normal`)),m(W,19,this),_(this,Tm,m(W,20,this,!1)),m(W,23,this),_(this,Em,m(W,24,this,``)),m(W,27,this),_(this,Dm,m(W,28,this,!1)),m(W,31,this),_(this,Om,m(W,32,this,!1)),m(W,35,this),g(this,`hasSlotController`,new Jc(this,`submenu`,`description`)),g(this,`submenuController`,new um(this,this.hasSlotController)),g(this,`handleHostClick`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),g(this,`handleMouseOver`,e=>{this.focus(),e.stopPropagation()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseover`,this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseover`,this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();if(typeof this.cachedTextLabel>`u`){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!==`checkbox`){this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this);return}this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return Yc(this.defaultSlot).trim()}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return w`
      <div
        id="anchor"
        part="base"
        class=${E({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t,"menu-item--has-description":this.hasSlotController.test(`description`)})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <kk-icon name="check" library="system" aria-hidden="true"></kk-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <div part="text" class="menu-item__text">
          <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>
          <slot name="description" part="description" class="menu-item__description"></slot>
        </div>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <kk-icon name=${e?`chevron-left`:`chevron-right`} library="system" aria-hidden="true"></kk-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?w` <kk-spinner part="spinner" exportparts="base:spinner__base"></kk-spinner> `:``}
      </div>
    `}};W=f(xm),Sm=new WeakMap,Cm=new WeakMap,wm=new WeakMap,Tm=new WeakMap,Em=new WeakMap,Dm=new WeakMap,Om=new WeakMap,h(W,4,`defaultSlot`,bm,km,Sm),h(W,4,`menuItem`,ym,km,Cm),h(W,4,`type`,vm,km,wm),h(W,4,`checked`,_m,km,Tm),h(W,4,`value`,gm,km,Em),h(W,4,`loading`,hm,km,Dm),h(W,4,`disabled`,mm,km,Om),h(W,1,`handleCheckedChange`,pm,km),h(W,1,`handleDisabledChange`,fm,km),h(W,1,`handleTypeChange`,dm,km),p(W,km),g(km,`styles`,[D,Qp]),g(km,`dependencies`,{"kk-icon":vc,"kk-popup":H,"kk-spinner":Al});var Am=C`
  :host {
    display: block;
    position: relative;
    background: var(--kk-panel-background-color);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-medium);
    padding: var(--kk-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(kk-divider) {
    --kk-divider-spacing: var(--kk-spacing-x-small);
  }
`,jm,Mm,Nm,Pm,Fm=class extends (Mm=M,jm=[A(`slot`)],Mm){constructor(){super(...arguments),_(this,Pm,m(Nm,8,this)),m(Nm,11,this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`)}handleClick(e){let t=[`menuitem`,`menuitemcheckbox`],n=e.composedPath(),r=n.find(e=>e instanceof Element&&t.includes(e.getAttribute(`role`)??``));if(!r||n.find(e=>e instanceof Element&&e.getAttribute(`role`)===`menu`)!==this)return;let i=r;i.type===`checkbox`&&(i.checked=!i.checked),this.emit(`kk-select`,{detail:{item:i}})}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`kk-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getAllItems(){return this.defaultSlot.assignedElements({flatten:!0}).filter(e=>!(!(e instanceof HTMLElement)||e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return w`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Nm=f(Mm),Pm=new WeakMap,h(Nm,4,`defaultSlot`,jm,Fm,Pm),p(Nm,Fm),g(Fm,`styles`,[D,Am]);var Im=C`
  /*
   * O editor é um campo de entrada, e tem de parecer um.
   *
   * Ele nasceu sobre os tokens de painel — fundo, borda e sombra de cartão —, e
   * o resultado era um branco diferente do de todo kk-input e kk-textarea da
   * mesma tela, com direito a sombra e a um pulo de dois pixels no foco que
   * nenhum outro campo dá. Agora a moldura sai dos mesmos tokens de campo que
   * os outros usam: mesmo fundo, mesma borda, mesmo anel de foco.
   */
  /*
   * A caixa tem altura fechada, e quem rola é o conteúdo — não a página.
   *
   * Ela crescia com o texto, e a barra grudenta não salvava: o overflow: hidden
   * daqui faz do próprio kk-editor o scrollport dela, e um scrollport que não
   * rola nunca gruda coisa nenhuma. Numa nota de duas telas a barra subia junto
   * com o texto e formatar o último parágrafo pedia rolar até o começo.
   */
  kk-editor {
    display: flex;
    flex-direction: column;
    max-height: var(--kk-editor-max-height, 80vh);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
    border-radius: var(--kk-input-border-radius-medium);
    overflow: hidden !important;
    background: var(--kk-input-background-color) !important;
    transition:
      var(--kk-transition-medium) border-color,
      var(--kk-transition-medium) box-shadow !important;
  }

  /* Estado de Foco (quando o usuário clica para escrever) */
  kk-editor:focus-within {
    border-color: var(--kk-input-border-color-focus) !important;
    box-shadow: 0 0 0 var(--kk-focus-ring-width) var(--kk-input-focus-ring-color) !important;
  }

  /*
   * A barra fica parada no topo da caixa, e não entra na rolagem: flex: none é
   * o que a impede de ser espremida quando o conteúdo cresce.
   *
   * O sticky continua como rede para quem soltar o teto da caixa
   * (--kk-editor-max-height: none) e deixar a página rolar o editor inteiro —
   * é aí que o deslocamento serve, para quem já tem barra própria no topo.
   */
  .kk-editor__toolbar {
    flex: none;
    position: sticky !important;
    top: 0 !important;
    z-index: 20 !important;
    inset-block-start: var(--kk-editor-toolbar-offset, 0);
    border-start-start-radius: var(--kk-border-radius-medium);
    border-start-end-radius: var(--kk-border-radius-medium);
    display: flex !important;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--kk-spacing-2x-small);
    padding: var(--kk-spacing-2x-small);
    background-color: var(--kk-input-background-color);
    border-block-end: solid var(--kk-input-border-width) var(--kk-input-border-color);
    min-height: var(--kk-input-height-medium);
    backdrop-filter: blur(8px) !important;
  }

  /*
   * Os grupos são ilhas, não pedaços de uma fita.
   *
   * A barra tem sete grupos e dezoito botões, e cabe inteira numa linha só num
   * monitor. Dentro de um diálogo estreito ela quebra — e quebrava mal: os grupos se
   * separavam por uma margem, que some justamente quando o grupo cai no começo de uma
   * fileira, então o resultado eram cinco fileiras de botões soltos, sem nada dizendo
   * quais pertencem juntos. Era o que a captura do backlog mostrava.
   *
   * Duas mudanças resolvem, e as duas valem em qualquer largura: cada grupo ganha uma
   * superfície própria (o desenho do agrupamento deixa de depender de espaço vazio e
   * sobrevive à quebra de linha), e a quebra passa a ser permitida DENTRO do grupo —
   * sem isso um grupo de quatro botões que não coubesse empurrava os quatro para a
   * fileira seguinte, e era daí que vinham os buracos.
   */
  .kk-editor__group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--kk-spacing-3x-small);
    padding: var(--kk-spacing-3x-small);
    border-radius: var(--kk-border-radius-medium);
    background-color: var(--kk-input-filled-background-color);
  }

  .kk-editor__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* 2rem é o alvo mínimo de toque que ainda deixa a barra caber num telefone. */
    min-width: 2rem;
    min-height: 2rem;
    padding: 0;
    border: none;
    border-radius: var(--kk-border-radius-small);
    background: none;
    color: var(--kk-color-neutral-700);
    font-size: var(--kk-font-size-medium);
    cursor: pointer;
    transition:
      var(--kk-transition-fast) background-color,
      var(--kk-transition-fast) color;
  }

  .kk-editor__button:hover:not(:disabled) {
    background-color: var(--kk-input-background-color);
    color: var(--kk-color-neutral-900);
  }

  .kk-editor__button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kk-editor__button[aria-pressed='true'] {
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  /*
   * ── OS PAINÉIS DOS MENUS SUSPENSOS ────────────────────────────────────────
   *
   * A paleta e o seletor de tamanho da tabela não são menus: são conteúdo solto
   * dentro do painel do kk-dropdown, e o painel do kk-dropdown é só um slot — a
   * superfície de cartão quem traz é o kk-menu. Sem estas regras, a paleta
   * aparece flutuando sobre o texto, sem fundo e sem borda.
   */
  .kk-editor__panel {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-2x-small);
    padding: var(--kk-spacing-2x-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-medium);
    background-color: var(--kk-panel-background-color);
    box-shadow: var(--kk-shadow-large);
  }

  /*
   * O kk-menu que entra no painel da tabela já é um cartão, e cartão dentro de
   * cartão desenha duas molduras concêntricas a um espaço de distância. Ele
   * perde a própria superfície e fica sendo só a lista.
   */
  .kk-editor__panel kk-menu {
    --kk-panel-border-width: 0;
    --kk-panel-background-color: transparent;
  }

  .kk-editor__panel-action {
    display: flex;
    align-items: center;
    gap: var(--kk-spacing-2x-small);
    padding: var(--kk-spacing-2x-small);
    border: none;
    border-radius: var(--kk-border-radius-small);
    background: none;
    color: var(--kk-color-neutral-700);
    font: inherit;
    text-align: start;
    cursor: pointer;
  }

  .kk-editor__panel-action:hover {
    background-color: var(--kk-input-filled-background-color);
  }

  /*
   * ── AS PALETAS ────────────────────────────────────────────────────────────
   *
   * Seis colunas nas duas: a do texto tem doze amostras e a do fundo também, e
   * as duas fecham em dois retângulos do mesmo tamanho. A amostra é o próprio
   * botão — pintar um quadrado dentro dele daria à cor uma moldura que ela não
   * tem no texto.
   */
  .kk-editor__swatches {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: var(--kk-spacing-3x-small);
  }

  .kk-editor__swatch {
    width: var(--kk-spacing-large);
    height: var(--kk-spacing-large);
    padding: 0;
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-small);
    cursor: pointer;
  }

  .kk-editor__swatch[aria-pressed='true'] {
    outline: solid var(--kk-focus-ring-width) var(--kk-color-primary-600);
    outline-offset: var(--kk-spacing-3x-small);
  }

  /*
   * A faixa de cor no gatilho das duas paletas — é ela que diz, sem abrir o
   * menu, com que cor o cursor está escrevendo. Vazia, ela fica sendo a moldura
   * de um retângulo transparente, que é o desenho de "sem cor".
   */
  .kk-editor__button:has(.kk-editor__ink) {
    flex-direction: column;
    gap: var(--kk-spacing-3x-small);
  }

  .kk-editor__ink {
    width: var(--kk-spacing-large);
    height: var(--kk-spacing-3x-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-small);
  }

  /*
   * ── O SELETOR DE TAMANHO DA TABELA ────────────────────────────────────────
   *
   * O número de colunas vem do componente, e não está cravado aqui: quem sabe
   * quantas células foram desenhadas é quem as desenhou, e as duas contas
   * discordarem deixaria a grade torta sem erro nenhum.
   */
  .kk-editor__grid {
    display: grid;
    grid-template-columns: repeat(var(--kk-editor-grade-colunas, 10), 1fr);
    gap: var(--kk-spacing-3x-small);
  }

  .kk-editor__grid-cell {
    width: var(--kk-spacing-medium);
    height: var(--kk-spacing-medium);
    padding: 0;
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-small);
    background-color: var(--kk-input-background-color);
    cursor: pointer;
  }

  .kk-editor__grid-cell--marcada {
    border-color: var(--kk-color-primary-600);
    background-color: var(--kk-color-primary-600);
  }

  .kk-editor__grid-label {
    text-align: center;
    font-size: var(--kk-font-size-small);
    color: var(--kk-color-neutral-600);
  }

  /*
   * O seletor de bloco é o único botão da barra com duas peças — o ícone do bloco
   * corrente e a seta do menu. Sem folga entre elas, e sem respiro nas laterais,
   * os dois desenhos se encostam dentro dos mesmos 2rem dos botões de uma peça só.
   */
  .kk-editor__button--select {
    gap: var(--kk-spacing-3x-small);
    padding-inline: var(--kk-spacing-2x-small);
  }

  /* Ensure icons within buttons are rendered */
  .kk-editor__button kk-icon {
    display: inline-block;
    width: var(--kk-spacing-large);
    height: var(--kk-spacing-large);
  }

  /*
   * A altura pedida é a BASE do item flex, e não um min-height: com o mínimo,
   * um item flex não encolhe abaixo dele, e uma barra que quebrasse em cinco
   * fileiras num telefone empurraria o texto para fora do teto da caixa — que
   * corta, porque o host é overflow: hidden. Como base, a altura é a mesma
   * quando há espaço e cede quando não há, e o que sobra é rolagem.
   */
  .kk-editor__content,
  .kk-editor__source {
    flex: 1 1 var(--kk-editor-min-height, 45vh);
    min-height: 0;
    overflow-y: auto;
  }

  .kk-editor__content {
    padding: var(--kk-spacing-medium) var(--kk-spacing-large) !important;
    overflow-wrap: break-word;
    line-height: var(--kk-line-height-normal) !important;
    font-size: var(--kk-font-size-large) !important;
  }

  .kk-editor__content:focus {
    outline: none;
  }

  /*
   * O código-fonte ocupa exatamente o lugar da área de edição — mesma caixa,
   * mesma rolagem —, e é o único texto do editor em monoespaçada: o que se lê
   * aqui é marcação, e alinhar tag com tag é o que torna a leitura possível.
   */
  .kk-editor__source {
    padding: var(--kk-spacing-medium) var(--kk-spacing-large);
    border: none;
    background: none;
    color: inherit;
    font-family: var(--kk-font-mono);
    font-size: var(--kk-font-size-small);
    line-height: var(--kk-line-height-normal);
    resize: none;
    white-space: pre-wrap;
    tab-size: 2;
  }

  .kk-editor__source:focus {
    outline: none;
  }

  /*
   * Os destaques e a âncora de nota são a SAÍDA do editor: as classes ficam
   * gravadas no HTML e quem exibe o texto depois precisa delas pintadas. Por isso
   * moram aqui, e não no CSS de cada app — a folha é adotada no documento assim
   * que o componente é importado, e vale tanto para a edição quanto para a leitura.
   *
   * O destaque é aplicado ao BLOCO corrente (veja destacar()), e o desenho é o do
   * kk-alert À RISCA — a MESMA receita, os MESMOS valores: tinta chapada no corpo
   * (a força kk-tint-strength do tema, misturada com o fundo do painel), moldura
   * fina de painel e barra na borda de início, as duas últimas saindo do acento.
   * Um token por peça seria uma chance a mais de elas discordarem.
   *
   * O acento é o degrau 600, como as cinco variantes de alerta, e sai do tema em
   * vez de um hex: a rampa espelha no escuro, então o mesmo destaque continua
   * legível nos dois temas.
   */
  .destaque--azul,
  .destaque--verde,
  .destaque--vermelho,
  .destaque--amarelo,
  .destaque--ciano {
    --kk-editor-highlight-color: var(--kk-color-primary-600);

    padding: var(--kk-spacing-large);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-inline-start-width: calc(var(--kk-panel-border-width) * 3);
    border-inline-start-color: var(--kk-editor-highlight-color);
    border-radius: var(--kk-border-radius-medium);
    font-size: var(--kk-font-size-small);
    font-weight: var(--kk-font-weight-normal);
    line-height: 1.6;
    color: var(--kk-color-neutral-700);
    background-color: color-mix(
      in oklab,
      var(--kk-editor-highlight-color) var(--kk-tint-strength),
      var(--kk-panel-background-color)
    );
  }

  .destaque--azul {
    --kk-editor-highlight-color: var(--kk-color-primary-600);
  }

  .destaque--verde {
    --kk-editor-highlight-color: var(--kk-color-success-600);
  }

  .destaque--vermelho {
    --kk-editor-highlight-color: var(--kk-color-danger-600);
  }

  .destaque--amarelo {
    --kk-editor-highlight-color: var(--kk-color-warning-600);
  }

  .destaque--ciano {
    --kk-editor-highlight-color: var(--kk-color-sky-600);
  }

  /*
   * ── OS ESTILOS DE PARÁGRAFO ───────────────────────────────────────────────
   *
   * Como os destaques, eles são SAÍDA do editor: a classe fica gravada no HTML e
   * quem exibe o texto depois precisa dela desenhada. Por isso moram aqui, na
   * folha que é adotada no documento assim que o componente é importado, e não
   * no CSS de cada app.
   *
   * Todos desenham só com token, e é o que os faz atravessar a troca de tema —
   * foi por não fazer isso que o neon do SunEditor ficou de fora.
   */
  .paragrafo--espacado {
    line-height: var(--kk-line-height-loose);
    letter-spacing: var(--kk-letter-spacing-loose);
  }

  .paragrafo--emoldurado {
    padding-block: var(--kk-spacing-small);
    border-block: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
  }

  .paragrafo--recuado {
    text-indent: var(--kk-spacing-2x-large);
  }

  /*
   * A capitular é a única medida em em da folha, e tem de ser: ela é três vezes
   * a letra do parágrafo em que cai, e um degrau fixo da escala a deixaria do
   * mesmo tamanho num título e num pé de página.
   */
  .paragrafo--capitular::first-letter {
    float: inline-start;
    padding-inline-end: var(--kk-spacing-2x-small);
    font-size: 3em;
    font-weight: var(--kk-font-weight-bold);
    line-height: 1;
    color: var(--kk-color-primary-600);
  }

  /*
   * A epígrafe é o CABEÇALHO poético que abre um texto (desde 11/09/2026 —
   * antes era uma citação miúda recuada para o fim): centrada, em serifa, com a
   * aspa grande acima e um fio curto abaixo. **O subtítulo é o bloco seguinte,
   * com a classe própria**, e não a segunda linha do mesmo bloco: não há seletor
   * de CSS para "o texto depois do <br>", e o ::first-line que tentou fazer isso
   * desenhava como subtítulo o rabo de um título que quebrava a linha. É a
   * convenção da fonte da poesia, e a mecânica é a mesma: o título perde o fio e
   * a margem quando o subtítulo vem logo abaixo, e o fio passa para ele.
   *
   * A aspa e o fio saem do texto, não da caixa: são ::before e ::after, na cor
   * primária apagada por color-mix. O fio tem largura máxima, e não fixa — numa
   * coluna estreita ele encolhe com ela.
   */
  .paragrafo--epigrafe,
  .paragrafo--epigrafe-subtitulo {
    max-width: 40rem;
    margin-inline: auto;
    font-family: var(--kk-font-serif);
    line-height: var(--kk-line-height-dense);
    text-align: center;
    text-indent: 0;
    text-wrap: balance;
  }

  .paragrafo--epigrafe {
    position: relative;
    margin-block: var(--kk-spacing-2x-large);
    padding-block-start: var(--kk-spacing-2x-large);
    font-size: var(--kk-font-size-x-large);
    font-weight: var(--kk-font-weight-normal);
    letter-spacing: var(--kk-letter-spacing-dense);
    color: var(--kk-color-neutral-900);
  }

  .paragrafo--epigrafe::before {
    content: '“';
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 50%;
    transform: translateX(-50%);
    font-size: var(--kk-font-size-4x-large);
    line-height: 1;
    color: color-mix(in srgb, var(--kk-color-primary-600) 40%, transparent);
    user-select: none;
    pointer-events: none;
  }

  .paragrafo--epigrafe-subtitulo {
    margin-block: 0 var(--kk-spacing-2x-large);
    font-size: var(--kk-font-size-medium);
    font-style: italic;
    font-weight: var(--kk-font-weight-light);
    color: var(--kk-color-text-muted);
  }

  .paragrafo--epigrafe::after,
  .paragrafo--epigrafe-subtitulo::after {
    content: '';
    display: block;
    width: 100%;
    max-width: var(--kk-spacing-7x-large);
    height: var(--kk-panel-border-width);
    margin-block-start: var(--kk-spacing-medium);
    margin-inline: auto;
    background-color: color-mix(in srgb, var(--kk-color-primary-600) 50%, transparent);
  }

  /* Com o subtítulo logo abaixo, o fio e a margem são dele. */
  .paragrafo--epigrafe:has(+ .paragrafo--epigrafe-subtitulo) {
    margin-block-end: var(--kk-spacing-x-small);
  }

  .paragrafo--epigrafe:has(+ .paragrafo--epigrafe-subtitulo)::after {
    content: none;
  }

  /*
   * Versaletes de verdade (small-caps), e não maiúsculas encolhidas: a
   * inicial maiúscula do texto continua maior que as outras, que é o que
   * distingue um nome próprio de uma sigla. O espaço entre letras é o folgado
   * da escala, que é o que versalete pede para não fechar.
   */
  .paragrafo--versaletes {
    font-variant-caps: small-caps;
    letter-spacing: var(--kk-letter-spacing-loose);
    line-height: var(--kk-line-height-dense);
  }

  /*
   * O bloco de baixo dos versaletes — a referência atrás do travessão, como a
   * fonte da poesia: menor, apagada, em itálico, sem versalete e sem o espaço
   * folgado, colada ao bloco de cima. É o par que a quebra de linha de dentro
   * do bloco desfaz (ver BLOCO_DE_BAIXO, no componente).
   */
  .paragrafo--versaletes-subtitulo {
    margin-block: calc(-1 * var(--kk-spacing-small)) var(--kk-spacing-medium);
    font-size: var(--kk-font-size-small);
    font-style: italic;
    font-variant-caps: normal;
    letter-spacing: 0.02em;
    text-indent: 0;
    color: var(--kk-color-text-muted);
  }

  /* A letra miúda de fim de página: menor e apagada, sem fio nenhum. */
  .paragrafo--miudo {
    font-size: var(--kk-font-size-small);
    line-height: var(--kk-line-height-dense);
    color: var(--kk-color-text-muted);
  }

  /*
   * Duas colunas para a lista longa e curta de linha — nomes, versículos,
   * vocabulário. É column-count, e não uma grade: o texto continua UM
   * parágrafo, e a quebra entre as colunas é do navegador, que a refaz na
   * largura de quem lê. Numa coluna estreita ele cai para uma sozinho, pelo
   * column-width, sem media query nenhuma.
   */
  .paragrafo--colunas {
    column-count: 2;
    column-width: 14rem;
    column-gap: var(--kk-spacing-large);
  }

  /*
   * O rodapé de notas: fio acima, corpo pequeno e cor apagada. É a MESMA classe
   * que o Kobi Note escreve no bloco que ele monta a partir das âncoras de nota
   * na leitura, e a receita mora aqui — e só aqui — para que um rodapé escrito à
   * mão no acervo e um montado pelo app não saiam de dois desenhos. O que é do
   * bloco montado (o título e a seta de voltar) continua no app.
   */
  .rodape-notas {
    margin-block-start: var(--kk-spacing-2x-large);
    padding-block-start: var(--kk-spacing-small);
    border-block-start: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    font-size: var(--kk-font-size-small);
    color: var(--kk-color-text-muted);
  }

  .note-nota-ref {
    font-size: 0.72em;
    font-weight: var(--kk-font-weight-bold);
    vertical-align: super;
    color: var(--kk-color-primary-600);
    text-decoration: none;
  }

  /*
   * ── OS BLOCOS DE POESIA ───────────────────────────────────────────────────
   *
   * Saída do editor como os estilos de parágrafo, e pelo mesmo motivo moram
   * aqui: quem cura no Kobi Admin precisa ver a poesia como o Kobi Note a
   * desenha, e a folha do app não chega ao editor do admin. O que é do
   * CONTÊINER — serifa, corpo, largura de coluna — continua no app; aqui está
   * o que cada bloco é.
   */

  /*
   * O texto tema: a escritura que abre a peça. Centrado, em itálico e apagado,
   * para não disputar com a primeira estrofe, e com um fio embaixo que o separa
   * do corpo. O fio desce para a fonte quando ela vem logo abaixo — é o par
   * tema + fonte que se fecha, e não o tema sozinho.
   */
  .poesia--tema {
    margin-block: 0 var(--kk-spacing-x-large);
    padding-block-end: var(--kk-spacing-medium);
    border-block-end: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    font-style: italic;
    line-height: var(--kk-line-height-normal);
    text-align: center;
    text-wrap: balance;
    color: var(--kk-color-text-muted);
  }

  .poesia--tema:has(+ .poesia--fonte) {
    margin-block-end: 0;
    padding-block-end: 0;
    border-block-end: none;
  }

  .poesia--tema + .poesia--fonte {
    margin-block-end: var(--kk-spacing-x-large);
    padding-block-end: var(--kk-spacing-medium);
    border-block-end: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    text-align: center;
  }

  /*
   * O verso: uma linha da poesia, um bloco por linha, coladas — a estrofe é o
   * bloco vazio entre elas. O recuo pendente é o que diz que a linha que não
   * coube na largura da tela é continuação, e não um verso novo.
   */
  .poesia--verso {
    margin-block: 0;
    padding-inline-start: var(--kk-spacing-large);
    text-indent: calc(-1 * var(--kk-spacing-large));
    line-height: var(--kk-line-height-dense);
  }

  /* A escritura citada no meio do corpo: o cartão que a separa do verso. */
  .poesia--escritura {
    margin-block: var(--kk-spacing-medium);
    padding: var(--kk-spacing-small) var(--kk-spacing-medium);
    border-inline-start: solid 3px var(--kk-color-gray-600);
    border-radius: 0 var(--kk-border-radius-medium) var(--kk-border-radius-medium) 0;
    background-color: var(--kk-color-gray-100);
    font-style: italic;
    text-indent: 0;
  }

  /*
   * A fonte da citação — a referência atrás do travessão, no bloco de baixo.
   * Corpo pequeno, apagada, alinhada ao fim, e colada ao bloco de cima: é dele
   * que ela fala.
   */
  .poesia--fonte {
    margin-block: calc(-1 * var(--kk-spacing-2x-small)) var(--kk-spacing-medium);
    font-size: var(--kk-font-size-small);
    font-style: normal;
    letter-spacing: 0.02em;
    text-align: end;
    text-indent: 0;
    color: var(--kk-color-text-muted);
  }

  /*
   * Colada à escritura: o cartão perde a margem de baixo, e a fonte entra logo
   * abaixo dele, alinhada ao texto de dentro (o recuo é o do cartão) — sem a
   * margem negativa, que a poria sobre a tinta.
   */
  .poesia--escritura:has(+ .poesia--fonte) {
    margin-block-end: 0;
  }

  .poesia--escritura + .poesia--fonte {
    margin-block-start: var(--kk-spacing-2x-small);
    padding-inline-end: var(--kk-spacing-medium);
  }

  /* O refrão: recuado e em itálico, como se canta. */
  .poesia--refrao {
    margin-inline-start: var(--kk-spacing-x-large);
    font-style: italic;
  }

  /* A dedicatória: pequena, em itálico, no canto do fim. */
  .poesia--dedicatoria {
    margin-block-end: var(--kk-spacing-large);
    font-size: var(--kk-font-size-small);
    font-style: italic;
    text-align: end;
    color: var(--kk-color-text-muted);
  }

  /*
   * ── AS AMOSTRAS DO MENU ───────────────────────────────────────────────────
   *
   * Cada item dos três menus de classe (estilo de parágrafo, bloco de poesia,
   * destaque) desenha o próprio rótulo COM a classe que vai aplicar — é o que
   * faz "Versaletes" aparecer em versaletes antes do clique. A amostra herda a
   * regra de verdade, e o que se desfaz aqui é só o que não cabe numa linha de
   * menu: margem, coluna, recuo de um quarto, o fio de cima. A moldura de alerta
   * do destaque vira só a tinta e a barra de início, que é o que distingue as
   * cinco de relance. A capitular fica, menor.
   */
  .kk-editor__sample {
    display: block;
    min-width: 11rem;
    margin: 0;
    padding: var(--kk-spacing-3x-small) var(--kk-spacing-2x-small);
    border-width: 0;
    border-radius: var(--kk-border-radius-small);
    column-count: auto;
    column-width: auto;
    text-indent: 0;
    line-height: var(--kk-line-height-dense);
    text-align: start;
  }

  .kk-editor__sample[class*='destaque--'],
  .kk-editor__sample.poesia--escritura {
    border-inline-start-width: 3px;
  }

  .kk-editor__sample.paragrafo--recuado {
    text-indent: var(--kk-spacing-medium);
  }

  .kk-editor__sample.paragrafo--emoldurado,
  .kk-editor__sample.rodape-notas,
  .kk-editor__sample.poesia--tema {
    padding-block: var(--kk-spacing-3x-small);
    border-block-width: var(--kk-panel-border-width);
  }

  .kk-editor__sample.poesia--refrao {
    margin-inline-start: 0;
  }

  /* No menu a epígrafe é uma linha: sem a aspa, sem o fio e no corpo do menu — e o subtítulo dos versaletes também vira uma. */
  .kk-editor__sample.paragrafo--epigrafe,
  .kk-editor__sample.paragrafo--epigrafe-subtitulo,
  .kk-editor__sample.paragrafo--versaletes-subtitulo {
    margin: 0;
    padding: 0;
    font-size: inherit;
    letter-spacing: inherit;
  }

  .kk-editor__sample.paragrafo--epigrafe::before,
  .kk-editor__sample.paragrafo--epigrafe::after,
  .kk-editor__sample.paragrafo--epigrafe-subtitulo::after {
    content: none;
  }

  .kk-editor__sample.paragrafo--capitular::first-letter {
    font-size: 1.6em;
    line-height: 0.9;
  }

  /* O caractere do menu de tipografia, no lugar do ícone. */
  .kk-editor__glyph {
    display: inline-block;
    min-width: 1.5em;
    font-size: var(--kk-font-size-large);
    text-align: center;
  }

  /*
   * A tipografia do texto rico. Vale para a área de edição e para qualquer
   * elemento marcado com a mesma classe na leitura — é o que faz o que se escreve
   * ter, no editor, a mesma forma que terá depois de gravado.
   */
  .kk-prose h1 {
    margin-block: var(--kk-spacing-large) var(--kk-spacing-small);
    font-size: var(--kk-font-size-x-large);
  }

  .kk-prose h2 {
    margin-block: var(--kk-spacing-large) var(--kk-spacing-x-small);
    font-size: var(--kk-font-size-large);
  }

  .kk-prose h3 {
    margin-block: var(--kk-spacing-medium) var(--kk-spacing-2x-small);
    font-size: var(--kk-font-size-medium);
  }

  .kk-prose h4 {
    margin-block: var(--kk-spacing-medium) var(--kk-spacing-3x-small);
    font-size: var(--kk-font-size-small);
  }

  .kk-prose p {
    margin-block: 0 var(--kk-spacing-small);
  }

  .kk-prose img {
    max-width: 100%;
    height: auto;
    border-radius: var(--kk-border-radius-medium);
  }

  .kk-prose blockquote {
    margin-inline: 0;
    padding-inline-start: var(--kk-spacing-medium);
    border-inline-start: solid 3px var(--kk-color-neutral-300);
    color: var(--kk-color-neutral-600);
  }

  .kk-prose table {
    width: 100%;
    border-collapse: collapse;
  }

  .kk-prose th,
  .kk-prose td {
    padding: var(--kk-spacing-2x-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
  }
`,Lm=/[̀-ͯ]/g;function Rm(e){return e.normalize(`NFD`).replace(Lm,``)}function zm(e){return Rm(e).toLowerCase().trim()}function Bm(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}var Vm=C`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-input-font-weight);
    letter-spacing: var(--kk-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) border,
      var(--kk-transition-fast) box-shadow,
      var(--kk-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--kk-input-background-color);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
  }

  :host(:not(:state(--disabled))) .input--standard:hover {
    background-color: var(--kk-input-background-color-hover);
    border-color: var(--kk-input-border-color-hover);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--standard {
    background-color: var(--kk-input-background-color-focus);
    border-color: var(--kk-input-border-color-focus);
    box-shadow: 0 0 0 var(--kk-focus-ring-width) var(--kk-input-focus-ring-color);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--standard .input__control {
    color: var(--kk-input-color-focus);
  }

  :host(:state(--disabled)) .input.input--standard {
    background-color: var(--kk-input-background-color-disabled);
    border-color: var(--kk-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  :host(:state(--disabled)) .input.input--standard .input__control {
    color: var(--kk-input-color-disabled);
  }

  :host(:state(--disabled)) .input.input--standard .input__control::placeholder {
    color: var(--kk-input-placeholder-color-disabled);
  }

  /* Validation */
  :host(:state(--invalid)) .input--standard {
    border-color: var(--kk-color-danger-600);
  }

  :host(:state(--invalid):state(--focused)) .input--standard {
    box-shadow: 0 0 0 var(--kk-focus-ring-width) light-dark(color-mix(in srgb, var(--kk-color-danger-600), transparent 60%), color-mix(in srgb, var(--kk-color-danger-600), transparent 40%));
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--kk-input-filled-background-color);
    color: var(--kk-input-color);
  }

  :host(:not(:state(--disabled))) .input--filled:hover {
    background-color: var(--kk-input-filled-background-color-hover);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--filled {
    background-color: var(--kk-input-filled-background-color-focus);
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  :host(:state(--disabled)) .input.input--filled {
    background-color: var(--kk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--kk-input-color);
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--kk-input-height-large) var(--kk-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--kk-color-primary-500);
    caret-color: var(--kk-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--kk-input-height-large) var(--kk-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--kk-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:not(:state(--disabled))) .input:hover .input__control {
    color: var(--kk-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  /*
   * Sem fundo próprio: prefixo e sufixo são partes do campo, não etiquetas
   * grudadas nele. Pintá-los com um tom seu os separava do miolo — e separava
   * de um jeito que nenhum ajuste de token consertava, porque o campo tem três
   * fundos (normal, preenchido, desabilitado) e um tom fixo só podia acertar
   * um. Transparente, os três acertam sozinhos.
   */
  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
    background-color: transparent;
  }

  .input__prefix ::slotted(kk-icon),
  .input__suffix ::slotted(kk-icon) {
    color: var(--kk-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--kk-input-border-radius-small);
    font-size: var(--kk-input-font-size-small);
    height: var(--kk-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--kk-input-height-small) - var(--kk-input-border-width) * 2);
    padding: 0 var(--kk-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--kk-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-small);
    padding-inline-end: var(--kk-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--kk-input-border-radius-medium);
    font-size: var(--kk-input-font-size-medium);
    height: var(--kk-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--kk-input-height-medium) - var(--kk-input-border-width) * 2);
    padding: 0 var(--kk-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--kk-input-spacing-medium) * 2); */
    padding-inline-end: 10px;
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-medium);
    padding-inline-end: var(--kk-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-medium); 
  }

  .input--large {
    border-radius: var(--kk-input-border-radius-large);
    font-size: var(--kk-input-font-size-large);
    height: var(--kk-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--kk-input-height-large) - var(--kk-input-border-width) * 2);
    padding: 0 var(--kk-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--kk-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-large);
    padding-inline-end: var(--kk-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--kk-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--kk-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--kk-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--kk-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--kk-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--kk-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,G,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,K=class extends (Th=M,wh=[A(`.input__control`)],Ch=[k()],Sh=[O()],xh=[O({reflect:!0})],bh=[O()],yh=[O()],vh=[cs()],_h=[O({reflect:!0})],gh=[O({type:Boolean,reflect:!0})],hh=[O({type:Boolean,reflect:!0})],mh=[O()],ph=[O({attribute:`help-text`})],fh=[O({type:Boolean})],dh=[O({type:Boolean,reflect:!0})],uh=[O()],lh=[O({type:Boolean,reflect:!0})],ch=[O({attribute:`password-toggle`,type:Boolean})],sh=[O({attribute:`password-visible`,type:Boolean})],oh=[O({attribute:`no-spin-buttons`,type:Boolean})],ah=[O({reflect:!0,converter:js})],ih=[O({type:Boolean,reflect:!0})],rh=[O()],nh=[O({type:Number})],th=[O({type:Number})],eh=[O()],$m=[O()],Qm=[O()],Zm=[O()],Xm=[O({converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],Ym=[O()],Jm=[O({type:Boolean})],qm=[O()],Km=[O({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],Gm=[O()],Wm=[j(`disabled`,{waitUntilFirstUpdate:!0})],Um=[j(`step`,{waitUntilFirstUpdate:!0})],Hm=[j(`value`,{waitUntilFirstUpdate:!0})],Th){constructor(){super(...arguments),m(G,5,this),g(this,`validade`,new qu(this,{interacaoEm:[`kk-blur`,`kk-input`]})),g(this,`hasSlotController`,new Jc(this,`help-text`,`label`)),g(this,`localize`,new Ha(this)),_(this,Eh,m(G,8,this)),m(G,11,this),_(this,Dh,m(G,12,this,!1)),m(G,15,this),_(this,Oh,m(G,16,this,``)),m(G,19,this),g(this,`__numberInput`,Object.assign(document.createElement(`input`),{type:`number`})),g(this,`__dateInput`,Object.assign(document.createElement(`input`),{type:`date`})),_(this,kh,m(G,20,this,`text`)),m(G,23,this),_(this,Ah,m(G,24,this,``)),m(G,27,this),_(this,jh,m(G,28,this,``)),m(G,31,this),g(this,`defaultValue`,m(G,140,this,``)),m(G,143,this),_(this,Mh,m(G,32,this,`medium`)),m(G,35,this),_(this,Nh,m(G,36,this,!1)),m(G,39,this),_(this,Ph,m(G,40,this,!1)),m(G,43,this),_(this,Fh,m(G,44,this,``)),m(G,47,this),_(this,Ih,m(G,48,this,``)),m(G,51,this),_(this,Lh,m(G,52,this,!1)),m(G,55,this),_(this,Rh,m(G,56,this,!1)),m(G,59,this),_(this,zh,m(G,60,this,``)),m(G,63,this),_(this,Bh,m(G,64,this,!1)),m(G,67,this),_(this,Vh,m(G,68,this,!1)),m(G,71,this),_(this,Hh,m(G,72,this,!1)),m(G,75,this),_(this,Uh,m(G,76,this,!1)),m(G,79,this),_(this,Wh,m(G,80,this,``)),m(G,83,this),_(this,Gh,m(G,84,this,!1)),m(G,87,this),_(this,Kh,m(G,88,this)),m(G,91,this),_(this,qh,m(G,92,this)),m(G,95,this),_(this,Jh,m(G,96,this)),m(G,99,this),_(this,Yh,m(G,100,this)),m(G,103,this),_(this,Xh,m(G,104,this)),m(G,107,this),_(this,Zh,m(G,108,this)),m(G,111,this),_(this,Qh,m(G,112,this)),m(G,115,this),_(this,$h,m(G,116,this,!0)),m(G,119,this),_(this,eg,m(G,120,this)),m(G,123,this),_(this,tg,m(G,124,this)),m(G,127,this),_(this,ng,m(G,128,this)),m(G,131,this),_(this,rg,m(G,132,this,!0)),m(G,135,this),_(this,ig,m(G,136,this)),m(G,139,this)}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.value),this.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`kk-blur`)}handleChange(){this.value=this.input.value,this.emit(`kk-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`kk-clear`),this.emit(`kk-input`),this.emit(`kk-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`kk-focus`)}handleInput(){this.value=this.input.value,this.updateValidity(),this.emit(`kk-input`)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this._internals.form?.requestSubmit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.input.disabled=this.disabled,this.updateValidity()}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}async handleValueChange(){this._internals.setFormValue(this.value),await this.updateComplete,this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){let e=this.input.validity.valid;this.toggleState(`--empty`,!this.value),this.validade.aplicar(e,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,Ku(this.input),this.input)}emitInvalidEvent(e){let t=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.dispatchEvent(t)||e?.preventDefault()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return w`
      <div
        part="form-control"
        class=${E({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${E({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${N(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              min=${N(this.min)}
              max=${N(this.max)}
              step=${N(this.step)}
              .value=${Wu(this.value)}
              autocapitalize=${N(this.autocapitalize)}
              autocomplete=${N(this.autocomplete)}
              autocorrect=${this.autocorrect?`on`:`off`}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${N(this.pattern)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?w`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <kk-icon name="circle-x" library="system"></kk-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?w`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?w`
                          <slot name="show-password-icon">
                            <kk-icon name="eye-off" library="system"></kk-icon>
                          </slot>
                        `:w`
                          <slot name="hide-password-icon">
                            <kk-icon name="eye" library="system"></kk-icon>
                          </slot>
                        `}
                  </button>
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};G=f(Th),Eh=new WeakMap,Dh=new WeakMap,Oh=new WeakMap,kh=new WeakMap,Ah=new WeakMap,jh=new WeakMap,Mh=new WeakMap,Nh=new WeakMap,Ph=new WeakMap,Fh=new WeakMap,Ih=new WeakMap,Lh=new WeakMap,Rh=new WeakMap,zh=new WeakMap,Bh=new WeakMap,Vh=new WeakMap,Hh=new WeakMap,Uh=new WeakMap,Wh=new WeakMap,Gh=new WeakMap,Kh=new WeakMap,qh=new WeakMap,Jh=new WeakMap,Yh=new WeakMap,Xh=new WeakMap,Zh=new WeakMap,Qh=new WeakMap,$h=new WeakMap,eg=new WeakMap,tg=new WeakMap,ng=new WeakMap,rg=new WeakMap,ig=new WeakMap,h(G,4,`input`,wh,K,Eh),h(G,4,`hasFocus`,Ch,K,Dh),h(G,4,`title`,Sh,K,Oh),h(G,4,`type`,xh,K,kh),h(G,4,`name`,bh,K,Ah),h(G,4,`value`,yh,K,jh),h(G,4,`size`,_h,K,Mh),h(G,4,`filled`,gh,K,Nh),h(G,4,`pill`,hh,K,Ph),h(G,4,`label`,mh,K,Fh),h(G,4,`helpText`,ph,K,Ih),h(G,4,`clearable`,fh,K,Lh),h(G,4,`disabled`,dh,K,Rh),h(G,4,`placeholder`,uh,K,zh),h(G,4,`readonly`,lh,K,Bh),h(G,4,`passwordToggle`,ch,K,Vh),h(G,4,`passwordVisible`,sh,K,Hh),h(G,4,`noSpinButtons`,oh,K,Uh),h(G,4,`form`,ah,K,Wh),h(G,4,`required`,ih,K,Gh),h(G,4,`pattern`,rh,K,Kh),h(G,4,`minlength`,nh,K,qh),h(G,4,`maxlength`,th,K,Jh),h(G,4,`min`,eh,K,Yh),h(G,4,`max`,$m,K,Xh),h(G,4,`step`,Qm,K,Zh),h(G,4,`autocapitalize`,Zm,K,Qh),h(G,4,`autocorrect`,Xm,K,$h),h(G,4,`autocomplete`,Ym,K,eg),h(G,4,`autofocus`,Jm,K,tg),h(G,4,`enterkeyhint`,qm,K,ng),h(G,4,`spellcheck`,Km,K,rg),h(G,4,`inputmode`,Gm,K,ig),h(G,1,`handleDisabledChange`,Wm,K),h(G,1,`handleStepChange`,Um,K),h(G,1,`handleValueChange`,Hm,K),h(G,5,`defaultValue`,vh,K),p(G,K),g(K,`styles`,[D,Gu,Vm]),g(K,`dependencies`,{"kk-icon":vc}),g(K,`formAssociated`,!0);function ag(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}var og=new Set(`p.br.div.span.h1.h2.h3.h4.strong.b.em.i.u.s.strike.sub.sup.mark.ul.ol.li.blockquote.hr.a.img.table.thead.tbody.tr.th.td`.split(`.`)),sg={"*":[`class`,`style`],a:[`href`,`title`,`data-nota`],img:[`src`,`alt`],td:[`colspan`,`rowspan`],th:[`colspan`,`rowspan`]},cg=new Set([`script`,`style`,`iframe`,`object`,`embed`,`template`]),lg=[{classe:`destaque--azul`,termo:`editorColorBlue`,icone:`highlight`},{classe:`destaque--verde`,termo:`editorColorGreen`,icone:`highlight`},{classe:`destaque--vermelho`,termo:`editorColorRed`,icone:`highlight`},{classe:`destaque--amarelo`,termo:`editorColorYellow`,icone:`highlight`},{classe:`destaque--ciano`,termo:`editorColorCyan`,icone:`highlight`}],ug=lg.map(e=>e.classe),dg=[{classe:`paragrafo--espacado`,termo:`editorParagraphSpaced`,icone:`line-height`},{classe:`paragrafo--emoldurado`,termo:`editorParagraphBordered`,icone:`border-horizontal`},{classe:`paragrafo--recuado`,termo:`editorParagraphIndented`,icone:`indent-increase`},{classe:`paragrafo--capitular`,termo:`editorParagraphDropCap`,icone:`letter-a`},{classe:`paragrafo--epigrafe`,termo:`editorParagraphEpigraph`,icone:`quote`},{classe:`paragrafo--epigrafe-subtitulo`,termo:`editorParagraphEpigraphSubtitle`,icone:`text-caption`},{classe:`paragrafo--versaletes`,termo:`editorParagraphSmallCaps`,icone:`letter-case-upper`},{classe:`paragrafo--versaletes-subtitulo`,termo:`editorParagraphSmallCapsSubtitle`,icone:`text-caption`},{classe:`paragrafo--miudo`,termo:`editorParagraphFinePrint`,icone:`text-decrease`},{classe:`paragrafo--colunas`,termo:`editorParagraphColumns`,icone:`columns-2`},{classe:`rodape-notas`,termo:`editorParagraphFootnotes`,icone:`notes`}],fg=dg.map(e=>e.classe),pg={"paragrafo--epigrafe":`paragrafo--epigrafe-subtitulo`,"paragrafo--versaletes":`paragrafo--versaletes-subtitulo`,"poesia--escritura":`poesia--fonte`},mg=Object.keys(pg).map(e=>`.${e}`).join(`, `);function hg(e){let t=[...e.querySelectorAll(`br`)];if(t.length===0)return null;for(let n of t){let t=document.createRange();if(t.setStartAfter(n),t.setEnd(e,e.childNodes.length),/^[\s\u00a0]*[—–]/.test(t.toString()))return n}return t[t.length-1]??null}function gg(e,t){let n=hg(e);if(n===null)return;let r=document.createRange();r.setStartAfter(n),r.setEnd(e,e.childNodes.length);let i=r.extractContents();n.remove();let a=document.createElement(`p`);a.className=t,a.append(i),_g(a),_g(e),a.textContent?.trim()!==``&&e.after(a)}function _g(e){let t=e.querySelector(`:not(br, img, hr):empty`);for(;t!==null;)t.remove(),t=e.querySelector(`:not(br, img, hr):empty`)}function vg(e){if(!Object.keys(pg).some(t=>e.includes(t)))return e;let t=document.createElement(`div`);t.innerHTML=e;for(let e of t.querySelectorAll(mg))for(let[t,n]of Object.entries(pg))e.classList.contains(t)&&gg(e,n);return t.innerHTML}var yg=[{classe:`poesia--tema`,termo:`editorPoetryTheme`,icone:`book-2`},{classe:`poesia--verso`,termo:`editorPoetryVerse`,icone:`text-wrap`},{classe:`poesia--escritura`,termo:`editorPoetryScripture`,icone:`quote`},{classe:`poesia--fonte`,termo:`editorPoetrySource`,icone:`signature`},{classe:`poesia--refrao`,termo:`editorPoetryRefrain`,icone:`repeat`},{classe:`poesia--dedicatoria`,termo:`editorPoetryDedication`,icone:`gift`}],bg=yg.map(e=>e.classe),xg=[{termo:`editorTypoEmDash`,amostra:`—`,abre:`— `},{termo:`editorTypoEnDash`,amostra:`–`,abre:`–`},{termo:`editorTypoDoubleQuotes`,amostra:`“ ”`,abre:`“`,fecha:`”`},{termo:`editorTypoSingleQuotes`,amostra:`‘ ’`,abre:`‘`,fecha:`’`},{termo:`editorTypoNbsp`,amostra:`␣`,abre:`\xA0`}],Sg=new Set([...ug,...fg,...bg,`note-nota-ref`]),Cg=/^var\(--kk-color-[a-z0-9-]+\)$/,wg={"text-align":/^(left|center|right|justify)$/,color:Cg,"background-color":Cg};function Tg(e){let t=[];for(let n of e.split(`;`)){let e=n.indexOf(`:`);if(e<0)continue;let r=n.slice(0,e).trim().toLowerCase(),i=n.slice(e+1).replace(/!\s*important/i,``).toLowerCase().replace(/\s+/g,``),a=wg[r];a===void 0||!a.test(i)||t.push(`${r}: ${i}`)}return t.join(`; `)}var Eg=/^data:image\/(?:png|jpeg|jpg|gif|webp|avif|bmp);base64,[A-Za-z0-9+/=]+$/,Dg=[`image/png`,`image/jpeg`,`image/gif`,`image/webp`,`image/avif`,`image/bmp`],Og=`http://www.w3.org/1999/xhtml`;function kg(e){let t=new DOMParser().parseFromString(e,`text/html`),n=t.createTreeWalker(t.body,NodeFilter.SHOW_COMMENT),r=[];for(let e=n.nextNode();e!==null;e=n.nextNode())r.push(e);for(let e of r)e.remove();for(let e of[...t.body.querySelectorAll(`*`)]){if(e.namespaceURI!==Og){e.remove();continue}let t=e.tagName.toLowerCase();if(cg.has(t)){e.remove();continue}if(!og.has(t)){e.replaceWith(...e.childNodes);continue}let n=[...sg[`*`]??[],...sg[t]??[]];for(let t of[...e.attributes]){if(!n.includes(t.name)){e.removeAttribute(t.name);continue}if(t.name===`style`){let n=Tg(t.value);n===``?e.removeAttribute(`style`):e.setAttribute(`style`,n)}if(t.name===`class`){let n=t.value.split(/\s+/).filter(e=>Sg.has(e));n.length===0?e.removeAttribute(`class`):e.setAttribute(`class`,n.join(` `))}if(t.name===`href`||t.name===`src`){let n=t.value.trim();/^(https?:|mailto:|#|\/|\.)/i.test(n)||t.name===`src`&&Eg.test(n)||e.removeAttribute(t.name)}}}return t.body.innerHTML}function Ag(e){let t=e??``;for(let e=0;e<3;e+=1){let e=kg(t);if(e===t)return e;t=e}return Bm(new DOMParser().parseFromString(t,`text/html`).body.textContent??``)}var jg=[{rampa:`neutral`,termo:`editorColorGray`},{rampa:`red`,termo:`editorColorRed`},{rampa:`orange`,termo:`editorColorOrange`},{rampa:`yellow`,termo:`editorColorYellow`},{rampa:`lime`,termo:`editorColorLime`},{rampa:`green`,termo:`editorColorGreen`},{rampa:`teal`,termo:`editorColorTeal`},{rampa:`cyan`,termo:`editorColorCyan`},{rampa:`blue`,termo:`editorColorBlue`},{rampa:`violet`,termo:`editorColorViolet`},{rampa:`pink`,termo:`editorColorPink`}],Mg=[{valor:`var(--kk-color-neutral-900)`,termo:`editorColorDefault`},...jg.map(e=>({valor:`var(--kk-color-${e.rampa}-600)`,termo:e.termo}))],Ng=[{valor:`var(--kk-color-neutral-0)`,termo:`editorColorDefault`},...jg.map(e=>({valor:`var(--kk-color-${e.rampa}-200)`,termo:e.termo}))],Pg={color:`#010203`,"background-color":`#040506`};function Fg(e,t){let n=document.createElement(`span`);return n.style.setProperty(e,t),n.style.getPropertyValue(e)}var Ig=`p, h1, h2, h3, h4, li, blockquote, div, td, th`,Lg=8,Rg=10,zg=Array.from({length:Lg*Rg},(e,t)=>({linha:Math.floor(t/Rg)+1,coluna:t%Rg+1}));function Bg(e){let t=document.createElement(e);return t.append(document.createElement(`br`)),t}function Vg(e,t){return`<table><tbody>${`<tr>${`<td><br></td>`.repeat(t)}</tr>`.repeat(e)}</tbody></table><p><br></p>`}function Hg(e,t){if(e.tagName.toLowerCase()===t)return;let n=document.createElement(t);for(let t of[...e.attributes])n.setAttribute(t.name,t.value);n.append(...e.childNodes),e.replaceWith(n)}function Ug(e,t){let n=e.closest(`tr`),r=n?.parentElement;if(n===null||r==null)return;let i=document.createElement(`tr`),a=r.tagName===`THEAD`?`th`:`td`;for(let e=0;e<n.cells.length;e+=1)i.append(Bg(a));r.insertBefore(i,t?n.nextSibling:n)}function Wg(e){let t=e.closest(`tr`),n=e.closest(`table`);if(t===null||n===null)return;if(n.rows.length<=1){n.remove();return}let r=t.parentElement;t.remove(),r!==null&&r.children.length===0&&r.remove()}function Gg(e,t){let n=e.closest(`table`);if(n===null)return;let r=e.cellIndex;for(let e of[...n.rows]){let n=e.cells[r],i=Bg(n?.tagName===`TH`?`th`:`td`);n===void 0?e.append(i):e.insertBefore(i,t?n.nextSibling:n)}}function Kg(e){let t=e.closest(`table`);if(t===null)return;let n=e.cellIndex;if(Math.max(...[...t.rows].map(e=>e.cells.length))<=1){t.remove();return}for(let e of[...t.rows])e.cells[n]?.remove()}function qg(e){let t=e.closest(`table`);if(t===null)return;let n=t.tHead;if(n!==null){let e=t.tBodies[0]??t.createTBody();for(let t of[...n.rows].reverse()){for(let e of[...t.cells])Hg(e,`td`);e.insertBefore(t,e.firstChild)}n.remove();return}let r=t.rows[0];if(r===void 0)return;for(let e of[...r.cells])Hg(e,`th`);let i=r.parentElement;t.createTHead().append(r),i!==null&&i.children.length===0&&i.remove()}function Jg(e){e.closest(`table`)?.remove()}var Yg=[{termo:`editorTableRowAbove`,icone:`row-insert-top`,executar:e=>Ug(e,!1)},{termo:`editorTableRowBelow`,icone:`row-insert-bottom`,executar:e=>Ug(e,!0)},{termo:`editorTableRowDelete`,icone:`row-remove`,executar:Wg},{termo:`editorTableColumnBefore`,icone:`column-insert-left`,executar:e=>Gg(e,!1)},{termo:`editorTableColumnAfter`,icone:`column-insert-right`,executar:e=>Gg(e,!0)},{termo:`editorTableColumnDelete`,icone:`column-remove`,executar:Kg},{termo:`editorTableHeader`,icone:`layout-navbar`,executar:qg},{termo:`editorTableDelete`,icone:`trash`,executar:Jg}],Xg=[{icone:`arrow-back-up`,termo:`editorUndo`,comando:`undo`},{icone:`arrow-forward-up`,termo:`editorRedo`,comando:`redo`}],Zg=[[{icone:`bold`,termo:`editorBold`,comando:`bold`,alterna:!0},{icone:`italic`,termo:`editorItalic`,comando:`italic`,alterna:!0},{icone:`underline`,termo:`editorUnderline`,comando:`underline`,alterna:!0},{icone:`strikethrough`,termo:`editorStrikethrough`,comando:`strikeThrough`,alterna:!0}],[{icone:`list`,termo:`editorBulletList`,comando:`insertUnorderedList`,alterna:!0},{icone:`list-numbers`,termo:`editorNumberedList`,comando:`insertOrderedList`,alterna:!0}],[{icone:`align-left`,termo:`editorAlignLeft`,comando:`justifyLeft`,alterna:!0},{icone:`align-center`,termo:`editorAlignCenter`,comando:`justifyCenter`,alterna:!0},{icone:`align-right`,termo:`editorAlignRight`,comando:`justifyRight`,alterna:!0},{icone:`align-justified`,termo:`editorAlignJustify`,comando:`justifyFull`,alterna:!0}],[{icone:`corner-down-left`,termo:`editorLineBreak`,comando:`insertLineBreak`},{icone:`separator-horizontal`,termo:`editorHorizontalRule`,comando:`insertHorizontalRule`}]],Qg=[Xg,...Zg].flat().filter(e=>e.alterna===!0).map(e=>e.comando),$g={tag:`p`,termo:`editorParagraph`,icone:`pilcrow`},e_=[$g,{tag:`h1`,termo:`editorHeading1`,icone:`h-1`},{tag:`h2`,termo:`editorHeading2`,icone:`h-2`},{tag:`h3`,termo:`editorHeading3`,icone:`h-3`},{tag:`h4`,termo:`editorHeading4`,icone:`h-4`},{tag:`blockquote`,termo:`editorQuote`,icone:`blockquote`}];typeof document<`u`&&Im.styleSheet!==void 0&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,Im.styleSheet]);function t_(e){let t=e.getRootNode(),n=Im.styleSheet;n===void 0||!(t instanceof ShadowRoot)||t.adoptedStyleSheets.includes(n)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,n])}var n_,r_,i_,a_,o_,s_,c_,l_,u_=class e extends (a_=M,i_=[k()],r_=[k()],n_=[O({type:Boolean,reflect:!0})],a_){constructor(){super(...arguments),g(this,`localize`,new Ha(this)),g(this,`area`,document.createElement(`div`)),g(this,`fonte`,document.createElement(`textarea`)),g(this,`conteudo`,``),_(this,s_,m(o_,8,this,!1)),m(o_,11,this),_(this,c_,m(o_,12,this,0)),m(o_,15,this),g(this,`assinaturaDaBarra`,``),g(this,`ultimaFaixa`,null),g(this,`quadro`,0),_(this,l_,m(o_,16,this,!1)),m(o_,19,this),g(this,`handleFonteInput`,()=>{this.conteudo=this.fonte.value,this.emit(`kk-input`,{detail:{value:this.conteudo}})}),g(this,`handleInput`,()=>{this.conteudo=this.area.innerHTML,this.emit(`kk-input`,{detail:{value:this.conteudo}}),this.sincronizarBarra()}),g(this,`sincronizarBarra`,()=>{this.guardarSelecao(),this.quadro===0&&(this.quadro=requestAnimationFrame(()=>{this.quadro=0;let e=[this.tagDoBlocoCorrente(),...Qg.map(e=>this.comandoLigado(e)?`1`:`0`),this.corCorrente(`color`)??``,this.corCorrente(`background-color`)??``,this.blocoCorrente()?.className??``,this.celulaCorrente()===void 0?``:`tabela`].join(`|`);e!==this.assinaturaDaBarra&&(this.assinaturaDaBarra=e,this.selecao+=1)}))}),g(this,`handlePaste`,e=>{e.preventDefault();let t=e.clipboardData;if(t===null)return;let n=t.getData(`text/html`),r=t.getData(`text/plain`);n===``?document.execCommand(`insertText`,!1,r):document.execCommand(`insertHTML`,!1,Ag(n)),this.handleInput()}),g(this,`aoApontarNaGrade`,e=>{let t=e.target.closest(`[data-linha]`);t!==null&&this.marcarGrade(Number(t.dataset.linha),Number(t.dataset.coluna))}),g(this,`aoTeclarNaGrade`,e=>{let t={ArrowUp:[-1,0],ArrowDown:[1,0],ArrowLeft:[0,-1],ArrowRight:[0,1]}[e.key],n=e.target.closest(`[data-linha]`);if(t===void 0||n===null)return;e.preventDefault();let r=ag(Number(n.dataset.linha)+t[0],1,Lg),i=ag(Number(n.dataset.coluna)+t[1],1,Rg);this.querySelector(`[data-linha="${r}"][data-coluna="${i}"]`)?.focus()})}get value(){return this.conteudo}set value(e){let t=vg(Ag(e??``));t===this.conteudo||t===vg(Ag(this.conteudo))||(this.conteudo=t,this.area.innerHTML=t,this.codigo&&(this.fonte.value=t))}connectedCallback(){super.connectedCallback(),t_(this),this.area.className=`kk-editor__content kk-prose`,this.area.contentEditable=this.readonly?`false`:`true`,this.area.spellcheck=!0,this.area.setAttribute(`role`,`textbox`),this.area.setAttribute(`aria-multiline`,`true`),this.area.setAttribute(`aria-label`,this.localize.term(`editorArea`)),this.area.innerHTML=this.conteudo,document.execCommand(`styleWithCSS`,!1,`false`),this.fonte.className=`kk-editor__source`,this.fonte.spellcheck=!1,this.fonte.setAttribute(`aria-label`,this.localize.term(`editorSource`)),this.area.addEventListener(`input`,this.handleInput),this.area.addEventListener(`paste`,this.handlePaste),this.area.addEventListener(`keyup`,this.sincronizarBarra),this.area.addEventListener(`mouseup`,this.sincronizarBarra),this.area.addEventListener(`focus`,this.sincronizarBarra),this.fonte.addEventListener(`input`,this.handleFonteInput)}disconnectedCallback(){super.disconnectedCallback(),this.area.removeEventListener(`input`,this.handleInput),this.area.removeEventListener(`paste`,this.handlePaste),this.area.removeEventListener(`keyup`,this.sincronizarBarra),this.area.removeEventListener(`mouseup`,this.sincronizarBarra),this.area.removeEventListener(`focus`,this.sincronizarBarra),this.fonte.removeEventListener(`input`,this.handleFonteInput),this.quadro!==0&&(cancelAnimationFrame(this.quadro),this.quadro=0)}createRenderRoot(){return this}focus(e){(this.codigo?this.fonte:this.area).focus(e)}get travado(){return this.readonly||this.codigo}alternarCodigo(){if(this.codigo){let e=vg(Ag(this.fonte.value)),t=e!==this.conteudo;this.conteudo=e,this.area.innerHTML=e,this.codigo=!1,t&&this.emit(`kk-input`,{detail:{value:e}})}else this.conteudo=this.area.innerHTML,this.fonte.value=this.conteudo,this.fonte.readOnly=this.readonly,this.codigo=!0;this.updateComplete.then(()=>this.focus())}aplicar(e,t){this.area.focus(),this.restaurarSelecao(),document.execCommand(e,!1,t),this.handleInput()}selecaoAtual(){let e=this.getRootNode();return`getSelection`in e?e.getSelection():getSelection()}guardarSelecao(){let e=this.selecaoAtual();if(e===null||e.rangeCount===0)return;let t=e.getRangeAt(0);this.area.contains(t.commonAncestorContainer)&&(this.ultimaFaixa=t.cloneRange())}restaurarSelecao(){let e=this.ultimaFaixa,t=this.selecaoAtual();e===null||t===null||this.area.contains(e.commonAncestorContainer)&&(t.removeAllRanges(),t.addRange(e))}faixaCorrente(){let e=this.selecaoAtual();if(e!==null&&e.rangeCount>0){let t=e.getRangeAt(0);if(this.area.contains(t.commonAncestorContainer))return t}let t=this.ultimaFaixa;if(t!==null&&this.area.contains(t.commonAncestorContainer))return t}elementoCorrente(){let e=this.faixaCorrente()?.startContainer;return e===void 0?void 0:(e.nodeType===Node.ELEMENT_NODE?e:e.parentElement)??void 0}blocoCorrente(){let e=this.elementoCorrente()?.closest(Ig);return e!=null&&this.area.contains(e)?e:void 0}celulaCorrente(){let e=this.elementoCorrente()?.closest(`td, th`);return e!=null&&this.area.contains(e)?e:void 0}blocosDaSelecao(){let e=this.faixaCorrente();if(e===void 0)return[];if(e.collapsed){let e=this.blocoCorrente();return e===void 0?[]:[e]}return[...this.area.querySelectorAll(Ig)].filter(t=>t.querySelector(Ig)===null&&e.intersectsNode(t))}marcarBlocos(e,t){this.area.focus(),this.restaurarSelecao();let n=this.blocosDaSelecao();if(n.length===0)return;let r=n[0]?.classList.contains(e)===!0;for(let i of n){i.classList.remove(...t),i.classList.toggle(e,!r),i.className===``&&i.removeAttribute(`class`);let n=pg[e];!r&&n!==void 0&&gg(i,n)}this.handleInput()}limparFormatacao(){this.area.focus(),this.restaurarSelecao(),document.execCommand(`removeFormat`),document.execCommand(`unlink`);for(let e of this.blocosDaSelecao())e.removeAttribute(`class`),e.removeAttribute(`style`);let e=this.tagDoBlocoCorrente();e!==`p`&&e!==`li`&&e!==`td`&&e!==`th`&&document.execCommand(`formatBlock`,!1,`p`),this.handleInput()}inserirTipografia(e,t){this.area.focus(),this.restaurarSelecao();let n=t===void 0?``:this.faixaCorrente()?.toString()??``;if(document.execCommand(`insertText`,!1,`${e}${n}${t??``}`),t!==void 0&&n===``){let e=this.selecaoAtual()?.getRangeAt(0);e!==void 0&&e.startContainer.nodeType===Node.TEXT_NODE&&(e.setStart(e.startContainer,e.startOffset-t.length),e.collapse(!0),this.ultimaFaixa=e.cloneRange())}this.handleInput()}corCorrente(e){let t=this.elementoCorrente();for(;t!==void 0&&t!==this.area;){let n=t.style?.getPropertyValue(e)??``;if(n!==``)return n;t=t.parentElement??void 0}}pintar(e,t){this.area.focus(),this.restaurarSelecao();let n=Pg[e];document.execCommand(`styleWithCSS`,!1,`true`),document.execCommand(e===`color`?`foreColor`:`hiliteColor`,!1,n),document.execCommand(`styleWithCSS`,!1,`false`);let r=Fg(e,n);for(let n of[...this.area.querySelectorAll(`[style]`)])n.style.getPropertyValue(e)===r&&(t===null?n.style.removeProperty(e):n.style.setProperty(e,t),n.getAttribute(`style`)===``&&n.removeAttribute(`style`),n.tagName===`SPAN`&&n.attributes.length===0&&n.replaceWith(...n.childNodes));this.handleInput()}pedirTexto(e){let t=document.createElement(`kk-dialog`);return t.label=e.rotulo,document.body.append(t),new Promise(n=>{let r=null,i=e=>{r=e,t.open=!1},a=()=>{let e=t.querySelector(`kk-input`),n=e?.value.trim()??``;if(n===``){e?.focus();return}i(n)};t.addEventListener(`kk-after-hide`,e=>{e.target===t&&(t.remove(),n(r))}),t.addEventListener(`kk-request-close`,e=>{e.target===t&&e.detail.source===`overlay`&&e.preventDefault()}),Xo(w`
          <p>${e.texto}</p>
          <kk-input
            autofocus
            placeholder=${e.placeholder??``}
            .value=${e.valor??``}
            @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),a())}}
          ></kk-input>
          <kk-button slot="footer" @click=${()=>i(null)}>${this.localize.term(`cancel`)}</kk-button>
          <kk-button slot="footer" variant="primary" @click=${a}>
            ${this.localize.term(`editorInsert`)}
          </kk-button>
        `,t),t.updateComplete.then(()=>{t.open=!0})})}async inserirLink(){let e=await this.pedirTexto({rotulo:this.localize.term(`editorLink`),texto:this.localize.term(`editorLinkText`),placeholder:`https://`});e!==null&&this.aplicar(`createLink`,e)}inserirImagem(){let e=document.createElement(`input`);e.type=`file`,e.accept=Dg.join(`,`),e.addEventListener(`change`,()=>{let t=e.files?.[0];if(t===void 0)return;if(!Dg.includes(t.type)){this.emit(`kk-error`,{detail:{file:t,reason:`type`}});return}let n=new FileReader;n.addEventListener(`load`,()=>{this.aplicar(`insertImage`,String(n.result))}),n.readAsDataURL(t)}),e.click()}async inserirNota(){let e=this.selecaoAtual()?.anchorNode,t=(e?.nodeType===Node.ELEMENT_NODE?e:e?.parentElement)?.closest(`a.note-nota-ref`),n=await this.pedirTexto({rotulo:this.localize.term(`editorFootnote`),texto:this.localize.term(`editorFootnoteText`),placeholder:this.localize.term(`editorFootnotePlaceholder`),valor:t?.getAttribute(`data-nota`)??``});if(n!==null){if(t!=null){t.setAttribute(`data-nota`,n),this.handleInput();return}this.aplicar(`insertHTML`,`<a class="note-nota-ref" data-nota="${Bm(n)}">*</a>&nbsp;`)}}comandoLigado(e){try{return document.queryCommandState(e)}catch{return!1}}tagDoBlocoCorrente(){try{let e=document.queryCommandValue(`formatBlock`).toLowerCase().replace(/[<>]/g,``);return e===``?$g.tag:e}catch{return $g.tag}}inserirTabela(e,t){this.aplicar(`insertHTML`,Vg(e,t))}cursorEm(e){let t=document.createRange();t.selectNodeContents(e),t.collapse(!0);let n=this.selecaoAtual();n?.removeAllRanges(),n?.addRange(t),this.ultimaFaixa=t.cloneRange()}naTabela(e){let t=this.celulaCorrente();if(t===void 0)return;let n=t.closest(`table`);if(e(t),!this.area.contains(t)){let e=n!==null&&this.area.contains(n)?n.rows[0]?.cells[0]:void 0;e!==void 0&&this.cursorEm(e)}this.handleInput()}marcarGrade(e,t){let n=this.querySelector(`.kk-editor__grid`);if(n===null)return;for(let r of[...n.children]){let n=r,i=Number(n.dataset.linha)<=e&&Number(n.dataset.coluna)<=t;n.classList.toggle(`kk-editor__grid-cell--marcada`,i)}let r=this.querySelector(`.kk-editor__grid-label`);r!==null&&(r.textContent=`${t} \xD7 ${e}`)}static fechar(e){e.currentTarget.closest(`kk-dropdown`)?.hide()}renderBotao(e){let t=this.localize.term(e.termo);return w`
      <button
        type="button"
        class="kk-editor__button"
        title=${t}
        aria-label=${t}
        aria-pressed=${N(e.alterna===!0?String(this.comandoLigado(e.comando)):void 0)}
        ?disabled=${this.travado}
        @mousedown=${e=>e.preventDefault()}
        @click=${()=>this.aplicar(e.comando)}
      >
        <kk-icon name=${e.icone}></kk-icon>
      </button>
    `}renderGrupo(e){return w`<div class="kk-editor__group">
      ${e.map(e=>this.renderBotao(e))}
    </div>`}renderSeletorDeBloco(){let e=this.tagDoBlocoCorrente(),t=e_.find(t=>t.tag===e)??$g,n=`${this.localize.term(`editorBlockType`)}: ${this.localize.term(t.termo)}`;return w`
      <div class="kk-editor__group">
        <kk-dropdown hoist>
          <button
            slot="trigger"
            type="button"
            class="kk-editor__button kk-editor__button--select"
            title=${n}
            aria-label=${n}
            ?disabled=${this.travado}
            @mousedown=${e=>e.preventDefault()}
          >
            <kk-icon name=${t.icone}></kk-icon>
            <kk-icon name="chevron-down"></kk-icon>
          </button>
          <kk-menu>
            ${e_.map(t=>w`
                <kk-menu-item
                  type="checkbox"
                  ?checked=${t.tag===e}
                  @click=${()=>this.aplicar(`formatBlock`,t.tag)}
                >
                  <kk-icon slot="prefix" name=${t.icone}></kk-icon>
                  ${this.localize.term(t.termo)}
                </kk-menu-item>
              `)}
          </kk-menu>
        </kk-dropdown>
      </div>
    `}renderGatilho(e,t,n){return w`
      <button
        slot="trigger"
        type="button"
        class="kk-editor__button"
        title=${t}
        aria-label=${t}
        ?disabled=${this.travado}
        @mousedown=${e=>e.preventDefault()}
      >
        <kk-icon name=${e}></kk-icon>${n??``}
      </button>
    `}renderPaleta(t,n,r,i){let a=this.localize.term(i),o=this.corCorrente(t),s=w`<span
      class="kk-editor__ink"
      style="background-color: ${o??`transparent`}"
    ></span>`;return w`
      <kk-dropdown hoist>
        ${this.renderGatilho(r,a,s)}
        <div class="kk-editor__panel">
          <div class="kk-editor__swatches" role="group" aria-label=${a}>
            ${n.map(n=>{let r=this.localize.term(n.termo);return w`
                <button
                  type="button"
                  class="kk-editor__swatch"
                  title=${r}
                  aria-label=${r}
                  aria-pressed=${String(n.valor===o)}
                  style="background-color: ${n.valor}"
                  @mousedown=${e=>e.preventDefault()}
                  @click=${r=>{this.pintar(t,n.valor),e.fechar(r)}}
                ></button>
              `})}
          </div>

          <button
            type="button"
            class="kk-editor__panel-action"
            @mousedown=${e=>e.preventDefault()}
            @click=${n=>{this.pintar(t,null),e.fechar(n)}}
          >
            <kk-icon name="droplet-off"></kk-icon>
            ${this.localize.term(`editorNoColor`)}
          </button>
        </div>
      </kk-dropdown>
    `}renderMenuDeClasses(e,t,n,r){let i=this.blocoCorrente();return w`
      <kk-dropdown hoist>
        ${this.renderGatilho(e,this.localize.term(t))}
        <kk-menu>
          ${n.map(e=>w`
              <kk-menu-item
                type="checkbox"
                ?checked=${i?.classList.contains(e.classe)===!0}
                @click=${()=>this.marcarBlocos(e.classe,r)}
              >
                <kk-icon slot="prefix" name=${e.icone}></kk-icon>
                <span class="kk-editor__sample ${e.classe}">${this.localize.term(e.termo)}</span>
              </kk-menu-item>
            `)}
        </kk-menu>
      </kk-dropdown>
    `}renderTipografia(){return w`
      <kk-dropdown hoist>
        ${this.renderGatilho(`typography`,this.localize.term(`editorTypography`))}
        <kk-menu>
          ${xg.map(e=>w`
              <kk-menu-item @click=${()=>this.inserirTipografia(e.abre,e.fecha)}>
                <span slot="prefix" class="kk-editor__glyph" aria-hidden="true">${e.amostra}</span>
                ${this.localize.term(e.termo)}
              </kk-menu-item>
            `)}
        </kk-menu>
      </kk-dropdown>
    `}renderTabela(){let t=this.localize.term(`editorTable`),n=this.celulaCorrente();return w`
      <kk-dropdown hoist @kk-show=${()=>this.marcarGrade(1,1)}>
        ${this.renderGatilho(`table`,t)}
        <div class="kk-editor__panel">
          <div
            class="kk-editor__grid"
            role="grid"
            aria-label=${this.localize.term(`editorTableSize`)}
            style="--kk-editor-grade-colunas: ${Rg}"
            @mouseover=${this.aoApontarNaGrade}
            @focusin=${this.aoApontarNaGrade}
            @keydown=${this.aoTeclarNaGrade}
          >
            ${zg.map(({linha:t,coluna:n})=>w`
                <button
                  type="button"
                  role="gridcell"
                  class="kk-editor__grid-cell"
                  data-linha=${t}
                  data-coluna=${n}
                  tabindex=${t===1&&n===1?0:-1}
                  aria-label="${n} × ${t}"
                  @mousedown=${e=>e.preventDefault()}
                  @click=${r=>{this.inserirTabela(t,n),e.fechar(r)}}
                ></button>
              `)}
          </div>

          <div class="kk-editor__grid-label" aria-hidden="true">1 × 1</div>

          ${n===void 0?``:w`
                <kk-menu>
                  ${Yg.map(e=>w`
                      <kk-menu-item @click=${()=>this.naTabela(e.executar)}>
                        <kk-icon slot="prefix" name=${e.icone}></kk-icon>
                        ${this.localize.term(e.termo)}
                      </kk-menu-item>
                    `)}
                </kk-menu>
              `}
        </div>
      </kk-dropdown>
    `}renderBotaoDeAcao(e,t,n){let r=this.localize.term(t);return w`
      <button
        type="button"
        class="kk-editor__button"
        title=${r}
        aria-label=${r}
        ?disabled=${this.travado}
        @mousedown=${e=>e.preventDefault()}
        @click=${n}
      >
        <kk-icon name=${e}></kk-icon>
      </button>
    `}render(){return this.selecao,w`
      <div class="kk-editor__toolbar" role="toolbar" aria-label=${this.localize.term(`editorToolbar`)}>
        ${this.renderGrupo(Xg)} ${this.renderSeletorDeBloco()}
        ${Zg.map(e=>this.renderGrupo(e))}

        <div class="kk-editor__group">
          ${this.renderPaleta(`color`,Mg,`text-color`,`editorTextColor`)}
          ${this.renderPaleta(`background-color`,Ng,`background`,`editorBackgroundColor`)}
          ${this.renderMenuDeClasses(`article`,`editorParagraphStyle`,dg,fg)}
          ${this.renderMenuDeClasses(`feather`,`editorPoetry`,yg,bg)}
          ${this.renderMenuDeClasses(`highlight`,`editorHighlight`,lg,ug)}
          ${this.renderBotaoDeAcao(`clear-formatting`,`editorClearFormat`,()=>this.limparFormatacao())}
        </div>

        <div class="kk-editor__group">
          ${this.renderTipografia()}
          ${this.renderBotaoDeAcao(`link`,`editorLink`,()=>{this.inserirLink()})}
          ${this.renderBotaoDeAcao(`photo`,`editorImage`,()=>this.inserirImagem())}
          ${this.renderBotaoDeAcao(`superscript`,`editorFootnote`,()=>{this.inserirNota()})}
          ${this.renderTabela()}
        </div>

        <div class="kk-editor__group">
          <button
            type="button"
            class="kk-editor__button"
            title=${this.localize.term(`editorSource`)}
            aria-label=${this.localize.term(`editorSource`)}
            aria-pressed=${String(this.codigo)}
            @mousedown=${e=>e.preventDefault()}
            @click=${()=>this.alternarCodigo()}
          >
            <kk-icon name="code"></kk-icon>
          </button>
        </div>
      </div>

      ${this.codigo?this.fonte:this.area}
    `}};o_=f(a_),s_=new WeakMap,c_=new WeakMap,l_=new WeakMap,h(o_,4,`codigo`,i_,u_,s_),h(o_,4,`selecao`,r_,u_,c_),h(o_,4,`readonly`,n_,u_,l_),p(o_,u_),g(u_,`dependencies`,{"kk-button":R,"kk-dialog":rf,"kk-dropdown":Zp,"kk-icon":vc,"kk-input":K,"kk-menu":Fm,"kk-menu-item":km}),u_.define(`kk-editor`),vc.define(`kk-icon`),Kc.define(`kk-icon-button`),K.define(`kk-input`),Fm.define(`kk-menu`),km.define(`kk-menu-item`);var d_=C`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-normal);
    line-height: var(--kk-line-height-normal);
    letter-spacing: var(--kk-letter-spacing-normal);
    color: var(--kk-color-neutral-700);
    padding: var(--kk-spacing-x-small) var(--kk-spacing-medium) var(--kk-spacing-x-small) var(--kk-spacing-x-small);
    transition: var(--kk-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--kk-color-neutral-100);
    color: var(--kk-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--kk-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--kk-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--kk-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--kk-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,q,S_,C_,w_,T_,E_,D_,O_=class extends (x_=M,b_=[A(`.option__label`)],y_=[k()],v_=[k()],__=[k()],g_=[O({reflect:!0})],h_=[O({type:Boolean,reflect:!0})],m_=[j(`disabled`)],p_=[j(`selected`)],f_=[j(`value`)],x_){constructor(){super(...arguments),m(q,5,this),g(this,`localize`,new Ha(this)),g(this,`isInitialized`,!1),_(this,S_,m(q,8,this)),m(q,11,this),_(this,C_,m(q,12,this,!1)),m(q,15,this),_(this,w_,m(q,16,this,!1)),m(q,19,this),_(this,T_,m(q,20,this,!1)),m(q,23,this),_(this,E_,m(q,24,this,``)),m(q,27,this),_(this,D_,m(q,28,this,!1)),m(q,31,this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined(`kk-select`).then(()=>{let e=this.closest(`kk-select`);e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleValueChange(){typeof this.value!=`string`&&(this.value=String(this.value)),this.value.includes(` `)&&(console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`,this),this.value=this.value.replaceAll(` `,`_`))}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return w`
      <div
        part="base"
        class=${E({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <kk-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></kk-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};q=f(x_),S_=new WeakMap,C_=new WeakMap,w_=new WeakMap,T_=new WeakMap,E_=new WeakMap,D_=new WeakMap,h(q,4,`defaultSlot`,b_,O_,S_),h(q,4,`current`,y_,O_,C_),h(q,4,`selected`,v_,O_,w_),h(q,4,`hasHover`,__,O_,T_),h(q,4,`value`,g_,O_,E_),h(q,4,`disabled`,h_,O_,D_),h(q,1,`handleDisabledChange`,m_,O_),h(q,1,`handleSelectedChange`,p_,O_),h(q,1,`handleValueChange`,f_,O_),p(q,O_),g(O_,`styles`,[D,d_]),g(O_,`dependencies`,{"kk-icon":vc}),O_.define(`kk-option`);var k_=C`
  :host {
    display: block;
  }

  .pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--kk-spacing-medium);
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-small);
    color: var(--kk-color-neutral-700);
  }

  .pagination__info {
    margin-inline-end: auto;
  }

  .pagination__page-size {
    display: flex;
    align-items: center;
    gap: var(--kk-spacing-x-small);
    white-space: nowrap;
  }

  /*
   * O seletor mostra números de até três dígitos; deixá-lo crescer com o conteúdo
   * faria a barra inteira dançar a cada troca de tamanho de página.
   */
  .pagination__page-size kk-select {
    inline-size: 6rem;
  }

  .pagination__controls {
    display: flex;
    align-items: center;
    gap: var(--kk-spacing-x-small);
    margin-inline-start: auto;
  }

  .pagination__pages {
    display: flex;
    align-items: center;
    gap: var(--kk-spacing-3x-small);
  }

  .pagination__ellipsis {
    padding-inline: var(--kk-spacing-2x-small);
    color: var(--kk-color-text-muted);
    user-select: none;
    -webkit-user-select: none;
  }

  /* Sem espaço para a numeração, a barra fica só com anterior e próxima. */
  @media (max-width: 30rem) {
    .pagination__pages {
      display: none;
    }
  }
`,A_=C`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  /*
   * Abrir e fechar a lista é CSS: opacidade e escala no painel do popup, com o @starting-style
   * dando o ponto de partida quando ele entra no top layer. A origem da escala vem do lado que
   * o posicionador escolheu (data-current-placement), e é por isso que o componente só desativa
   * o popup depois da transição. Quem espera o fim é o componente, pelo getAnimations().
   */
  .select::part(popup) {
    opacity: 0;
    scale: 0.9;
    transition:
      opacity var(--kk-select-transition, var(--kk-transition-fast)) ease,
      scale var(--kk-select-transition, var(--kk-transition-fast)) ease;
  }

  .select--open::part(popup) {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    .select--open::part(popup) {
      opacity: 0;
      scale: 0.9;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .select::part(popup) {
      transition: none;
    }
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-input-font-weight);
    letter-spacing: var(--kk-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) border,
      var(--kk-transition-fast) box-shadow,
      var(--kk-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--kk-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--kk-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--kk-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--kk-spacing-2x-small);
  }

  .select__tags::slotted(kk-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(kk-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--kk-input-background-color);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--kk-input-background-color-disabled);
    border-color: var(--kk-input-border-color-disabled);
    color: var(--kk-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--kk-input-background-color-focus);
    border-color: var(--kk-input-border-color-focus);
    box-shadow: 0 0 0 var(--kk-focus-ring-width) var(--kk-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--kk-input-filled-background-color);
    color: var(--kk-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--kk-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--kk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--kk-input-filled-background-color-focus);
    outline: var(--kk-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--kk-input-border-radius-small);
    font-size: var(--kk-input-font-size-small);
    min-height: var(--kk-input-height-small);
    padding-block: 0;
    padding-inline: var(--kk-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--kk-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--kk-input-border-radius-medium);
    font-size: var(--kk-input-font-size-medium);
    min-height: var(--kk-input-height-medium);
    padding-block: 0;
    padding-inline: var(--kk-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--kk-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--kk-input-border-radius-large);
    font-size: var(--kk-input-font-size-large);
    min-height: var(--kk-input-height-large);
    padding-block: 0;
    padding-inline: var(--kk-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--kk-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--kk-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--kk-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--kk-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--kk-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--kk-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--kk-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--kk-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--kk-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--kk-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--kk-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-normal);
    box-shadow: var(--kk-shadow-large);
    background: var(--kk-panel-background-color);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-medium);
    padding-block: var(--kk-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--kk-popup-auto-size-available-width);
    max-height: var(--kk-popup-auto-size-available-height);
  }

  .select__listbox ::slotted(kk-divider) {
    --kk-divider-spacing: var(--kk-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--kk-font-size-small);
    font-weight: var(--kk-font-weight-semibold);
    color: var(--kk-color-text-muted);
    padding-block: var(--kk-spacing-2x-small);
    padding-inline: var(--kk-spacing-x-large);
  }
`,j_=class extends rs{constructor(e){if(super(e),this.it=T,e.type!==ts.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===Po)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};j_.directiveName=`unsafeHTML`,j_.resultType=1;var M_=ns(j_);function N_(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function P_(e,t,n=`vertical`,r=`smooth`){let i=N_(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var F_=C`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--kk-color-primary-50);
    border-color: var(--kk-color-primary-200);
    color: var(--kk-color-primary-800);
  }

  .tag--primary:active > kk-icon-button {
    color: var(--kk-color-primary-600);
  }

  .tag--success {
    background-color: var(--kk-color-success-50);
    border-color: var(--kk-color-success-200);
    color: var(--kk-color-success-800);
  }

  .tag--success:active > kk-icon-button {
    color: var(--kk-color-success-600);
  }

  .tag--neutral {
    background-color: var(--kk-color-neutral-50);
    border-color: var(--kk-color-neutral-200);
    color: var(--kk-color-neutral-800);
  }

  .tag--neutral:active > kk-icon-button {
    color: var(--kk-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--kk-color-warning-50);
    border-color: var(--kk-color-warning-200);
    color: var(--kk-color-warning-800);
  }

  .tag--warning:active > kk-icon-button {
    color: var(--kk-color-warning-600);
  }

  .tag--danger {
    background-color: var(--kk-color-danger-50);
    border-color: var(--kk-color-danger-200);
    color: var(--kk-color-danger-800);
  }

  .tag--danger:active > kk-icon-button {
    color: var(--kk-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--kk-button-font-size-small);
    height: calc(var(--kk-input-height-small) * 0.8);
    line-height: calc(var(--kk-input-height-small) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-small);
    padding: 0 var(--kk-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--kk-button-font-size-medium);
    height: calc(var(--kk-input-height-medium) * 0.8);
    line-height: calc(var(--kk-input-height-medium) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-medium);
    padding: 0 var(--kk-spacing-small);
  }

  .tag--large {
    font-size: var(--kk-button-font-size-large);
    height: calc(var(--kk-input-height-large) * 0.8);
    line-height: calc(var(--kk-input-height-large) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-large);
    padding: 0 var(--kk-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--kk-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--kk-border-radius-pill);
  }
`,I_,L_,R_,z_,B_,V_,H_,U_,W_,G_,K_=class extends (B_=M,z_=[O({reflect:!0})],R_=[O({reflect:!0})],L_=[O({type:Boolean,reflect:!0})],I_=[O({type:Boolean})],B_){constructor(){super(...arguments),g(this,`localize`,new Ha(this)),_(this,H_,m(V_,8,this,`neutral`)),m(V_,11,this),_(this,U_,m(V_,12,this,`medium`)),m(V_,15,this),_(this,W_,m(V_,16,this,!1)),m(V_,19,this),_(this,G_,m(V_,20,this,!1)),m(V_,23,this)}handleRemoveClick(){this.emit(`kk-remove`)}render(){return w`
      <span
        part="base"
        class=${E({tag:!0,"tag--primary":this.variant===`primary`,"tag--success":this.variant===`success`,"tag--neutral":this.variant===`neutral`,"tag--warning":this.variant===`warning`,"tag--danger":this.variant===`danger`,"tag--text":this.variant===`text`,"tag--small":this.size===`small`,"tag--medium":this.size===`medium`,"tag--large":this.size===`large`,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?w`
              <kk-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term(`remove`)}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></kk-icon-button>
            `:``}
      </span>
    `}};V_=f(B_),H_=new WeakMap,U_=new WeakMap,W_=new WeakMap,G_=new WeakMap,h(V_,4,`variant`,z_,K_,H_),h(V_,4,`size`,R_,K_,U_),h(V_,4,`pill`,L_,K_,W_),h(V_,4,`removable`,I_,K_,G_),p(V_,K_),g(K_,`styles`,[D,F_]),g(K_,`dependencies`,{"kk-icon-button":Kc});var q_,J_,Y_,X_,Z_,Q_,$_,ev,tv,nv,rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv,yv,bv,xv,Sv,Cv,wv,J,Tv,Ev,Dv,Ov,kv,Av,jv,Mv,Nv,Pv,Fv,Iv,Lv,Rv,zv,Bv,Vv,Hv,Uv,Wv,Gv,Kv,qv,Jv,Yv,Xv,Zv,Y=class extends (wv=M,Cv=[A(`.select`)],Sv=[A(`.select__combobox`)],xv=[A(`.select__display-input`)],bv=[A(`.select__value-input`)],yv=[A(`.select__listbox`)],vv=[k()],_v=[k()],gv=[k()],hv=[k()],mv=[k()],pv=[O()],fv=[k()],dv=[O({attribute:`value`})],uv=[O({reflect:!0})],lv=[O()],cv=[O({type:Boolean,reflect:!0})],sv=[O({attribute:`max-options-visible`,type:Number})],ov=[O({type:Boolean,reflect:!0})],av=[O({type:Boolean})],iv=[O({type:Boolean,reflect:!0})],rv=[O({type:Boolean,reflect:!0})],nv=[O({type:Boolean,reflect:!0})],tv=[O()],ev=[O({reflect:!0})],$_=[O({attribute:`help-text`})],Q_=[O({reflect:!0,converter:js})],Z_=[O({type:Boolean,reflect:!0})],X_=[O()],Y_=[j(`disabled`,{waitUntilFirstUpdate:!0})],J_=[j([`defaultValue`,`value`],{waitUntilFirstUpdate:!0})],q_=[j(`open`,{waitUntilFirstUpdate:!0})],wv){constructor(){super(...arguments),m(J,5,this),g(this,`validade`,new qu(this,{interacaoEm:[`kk-blur`,`kk-input`]})),g(this,`hasSlotController`,new Jc(this,`help-text`,`label`)),g(this,`localize`,new Ha(this)),g(this,`typeToSelectString`,``),g(this,`typeToSelectTimeout`),g(this,`closeWatcher`),_(this,Tv,m(J,8,this)),m(J,11,this),_(this,Ev,m(J,12,this)),m(J,15,this),_(this,Dv,m(J,16,this)),m(J,19,this),_(this,Ov,m(J,20,this)),m(J,23,this),_(this,kv,m(J,24,this)),m(J,27,this),_(this,Av,m(J,28,this,!1)),m(J,31,this),_(this,jv,m(J,32,this,``)),m(J,35,this),_(this,Mv,m(J,36,this)),m(J,39,this),_(this,Nv,m(J,40,this,[])),m(J,43,this),_(this,Pv,m(J,44,this,!1)),m(J,47,this),_(this,Fv,m(J,48,this,``)),m(J,51,this),g(this,`_value`,``),_(this,Iv,m(J,52,this,``)),m(J,55,this),_(this,Lv,m(J,56,this,`medium`)),m(J,59,this),_(this,Rv,m(J,60,this,``)),m(J,63,this),_(this,zv,m(J,64,this,!1)),m(J,67,this),_(this,Bv,m(J,68,this,3)),m(J,71,this),_(this,Vv,m(J,72,this,!1)),m(J,75,this),_(this,Hv,m(J,76,this,!1)),m(J,79,this),_(this,Uv,m(J,80,this,!1)),m(J,83,this),_(this,Wv,m(J,84,this,!1)),m(J,87,this),_(this,Gv,m(J,88,this,!1)),m(J,91,this),_(this,Kv,m(J,92,this,``)),m(J,95,this),_(this,qv,m(J,96,this,`bottom`)),m(J,99,this),_(this,Jv,m(J,100,this,``)),m(J,103,this),_(this,Yv,m(J,104,this,``)),m(J,107,this),_(this,Xv,m(J,108,this,!1)),m(J,111,this),_(this,Zv,m(J,112,this,e=>w`
      <kk-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @kk-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </kk-tag>
    `)),m(J,115,this),g(this,`handleDocumentFocusIn`,e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}),g(this,`handleDocumentKeyDown`,e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`kk-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`kk-input`),this.emit(`kk-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();let n=zm(this.typeToSelectString);for(let e of t)if(zm(e.getTextLabel()).startsWith(n)){this.setCurrentOption(e);break}}}}),g(this,`handleDocumentMouseDown`,e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()})}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(` `):Array.isArray(e)?e.join(` `):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.updateValidity()}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`kk-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`kk-icon-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`kk-clear`),this.emit(`kk-input`),this.emit(`kk-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`kk-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`kk-input`),this.emit(`kk-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`kk-option`)||customElements.whenDefined(`kk-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,n=Array.isArray(t)?t:[t],r=[];e.forEach(e=>{r.push(e.value)}),this.setSelectedOptions(e.filter(e=>n.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`kk-input`),this.emit(`kk-change`)}))}getAllOptions(){return[...this.querySelectorAll(`kk-option`)]}getFirstOption(){return this.querySelector(`kk-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{e.selected=!1}),n.length&&n.forEach(e=>{e.selected=!0}),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions();this.selectedOptions=e.filter(e=>e.selected);let t=this.valueHasChanged;if(this.multiple){let e=this.selectedOptions.map(e=>e.value);this.value=e,this.displayLabel=this.placeholder&&this.value.length===0?``:this.localize.term(`numOptionsSelected`,this.selectedOptions.length);let t=new FormData;e.forEach(e=>{t.append(this.name,e)}),this._internals.setFormValue(t)}else{let e=this.selectedOptions[0],t=e?.value??``;this.value=t,this.displayLabel=e?.getTextLabel?.()??``,this._internals.setFormValue(t)}this.valueHasChanged=t,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return w`<div @kk-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?M_(n):n}
        </div>`}return t===this.maxOptionsVisible?w`<kk-tag size=${this.size}>+${this.selectedOptions.length-t}</kk-tag>`:w``})}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){this.open&&!this.disabled?(this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`kk-show`),this.addOpenListeners(),this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await this.esperarTransicao(),this.currentOption&&P_(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`kk-after-show`)):(this.emit(`kk-hide`),this.removeOpenListeners(),await this.esperarTransicao(),this.open||(this.popup.active=!1),this.emit(`kk-after-hide`))}async esperarTransicao(){await this.updateComplete,await Promise.allSettled(this.popup.popup.getAnimations().map(e=>e.finished))}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,qc(this,`kk-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,qc(this,`kk-after-hide`)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.valueInput.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.valueInput.validity,Ku(this.valueInput),this.valueInput)}emitInvalidEvent(e){let t=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.dispatchEvent(t)||e?.preventDefault()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return w`
      <div
        part="form-control"
        class=${E({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <kk-popup
            class=${E({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement===`top`,"select--bottom":this.placement===`bottom`,"select--small":this.size===`small`,"select--medium":this.size===`medium`,"select--large":this.size===`large`})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?w`<div part="tags" class="select__tags">${this.tags}</div>`:``}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${i?w`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <kk-icon name="circle-x" library="system"></kk-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <kk-icon library="system" name="chevron-down"></kk-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </kk-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};J=f(wv),Tv=new WeakMap,Ev=new WeakMap,Dv=new WeakMap,Ov=new WeakMap,kv=new WeakMap,Av=new WeakMap,jv=new WeakMap,Mv=new WeakMap,Nv=new WeakMap,Pv=new WeakMap,Fv=new WeakMap,Iv=new WeakMap,Lv=new WeakMap,Rv=new WeakMap,zv=new WeakMap,Bv=new WeakMap,Vv=new WeakMap,Hv=new WeakMap,Uv=new WeakMap,Wv=new WeakMap,Gv=new WeakMap,Kv=new WeakMap,qv=new WeakMap,Jv=new WeakMap,Yv=new WeakMap,Xv=new WeakMap,Zv=new WeakMap,h(J,4,`popup`,Cv,Y,Tv),h(J,4,`combobox`,Sv,Y,Ev),h(J,4,`displayInput`,xv,Y,Dv),h(J,4,`valueInput`,bv,Y,Ov),h(J,4,`listbox`,yv,Y,kv),h(J,4,`hasFocus`,vv,Y,Av),h(J,4,`displayLabel`,_v,Y,jv),h(J,4,`currentOption`,gv,Y,Mv),h(J,4,`selectedOptions`,hv,Y,Nv),h(J,4,`valueHasChanged`,mv,Y,Pv),h(J,4,`name`,pv,Y,Fv),h(J,3,`value`,fv,Y),h(J,4,`defaultValue`,dv,Y,Iv),h(J,4,`size`,uv,Y,Lv),h(J,4,`placeholder`,lv,Y,Rv),h(J,4,`multiple`,cv,Y,zv),h(J,4,`maxOptionsVisible`,sv,Y,Bv),h(J,4,`disabled`,ov,Y,Vv),h(J,4,`clearable`,av,Y,Hv),h(J,4,`open`,iv,Y,Uv),h(J,4,`filled`,rv,Y,Wv),h(J,4,`pill`,nv,Y,Gv),h(J,4,`label`,tv,Y,Kv),h(J,4,`placement`,ev,Y,qv),h(J,4,`helpText`,$_,Y,Jv),h(J,4,`form`,Q_,Y,Yv),h(J,4,`required`,Z_,Y,Xv),h(J,4,`getTag`,X_,Y,Zv),h(J,1,`handleDisabledChange`,Y_,Y),h(J,1,`handleValueChange`,J_,Y),h(J,1,`handleOpenChange`,q_,Y),p(J,Y),g(Y,`styles`,[D,Gu,A_]),g(Y,`dependencies`,{"kk-icon":vc,"kk-popup":H,"kk-tag":K_}),g(Y,`formAssociated`,!0);function Qv(e){let t=document;if(typeof t.startViewTransition!=`function`){e();return}t.startViewTransition(()=>e()).finished?.catch(()=>{})}var $v=`…`,ey,ty,ny,ry,iy,ay,oy,sy,cy,ly,uy,dy,fy,X,py,my,hy,gy,_y,vy,yy,by,xy,Sy,Cy,wy,Ty=class extends (fy=M,dy=[O({type:Number,reflect:!0})],uy=[O({type:Number,reflect:!0})],ly=[O({attribute:`total-items`,type:Number})],cy=[O({attribute:`page-size`,type:Number})],sy=[O({attribute:`page-size-options`,type:Array})],oy=[O({type:Number})],ay=[O({type:Number})],iy=[O({reflect:!0})],ry=[O({type:Boolean,reflect:!0})],ny=[O({attribute:`show-edges`,type:Boolean})],ty=[O({attribute:`show-page-size`,type:Boolean})],ey=[O({attribute:`show-info`,type:Boolean})],fy){constructor(){super(...arguments),g(this,`localize`,new Ha(this)),_(this,py,m(X,8,this,1)),m(X,11,this),_(this,my,m(X,12,this,1)),m(X,15,this),_(this,hy,m(X,16,this)),m(X,19,this),_(this,gy,m(X,20,this,10)),m(X,23,this),_(this,_y,m(X,24,this,[10,25,50,100])),m(X,27,this),_(this,vy,m(X,28,this,1)),m(X,31,this),_(this,yy,m(X,32,this,1)),m(X,35,this),_(this,by,m(X,36,this,`medium`)),m(X,39,this),_(this,xy,m(X,40,this,!1)),m(X,43,this),_(this,Sy,m(X,44,this,!1)),m(X,47,this),_(this,Cy,m(X,48,this,!1)),m(X,51,this),_(this,wy,m(X,52,this,!1)),m(X,55,this)}get pages(){return this.totalItems===void 0?Math.max(1,this.total):Math.max(1,Math.ceil(this.totalItems/this.pageSize))}goTo(e){e===this.value||e<1||e>this.pages||Qv(()=>{this.value=e,this.emit(`kk-change`,{detail:{page:this.value,pageSize:this.pageSize}})})}handlePageSizeChange(e){e.stopPropagation();let t=Number(e.target.value);if(!Number.isFinite(t)||t<=0)return;let n=(this.value-1)*this.pageSize;this.pageSize=t,this.value=Math.min(Math.floor(n/t)+1,this.pages),this.emit(`kk-change`,{detail:{page:this.value,pageSize:this.pageSize}})}janela(){let e=this.pages,t=Math.max(0,this.boundaries),n=Math.max(0,this.siblings),r=(e,t)=>t<e?[]:Array.from({length:t-e+1},(t,n)=>e+n);if(e<=t*2+n*2+3)return r(1,e);let i=Math.max(this.value-n,t+1),a=Math.min(this.value+n,e-t),o=i>t+2,s=a<e-t-1;return!o&&s?[...r(1,n*2+t+2),$v,...r(e-t+1,e)]:o&&!s?[...r(1,t),$v,...r(e-(t+1+n*2),e)]:[...r(1,t),$v,...r(i,a),$v,...r(e-t+1,e)]}renderInfo(){if(!this.showInfo||this.totalItems===void 0)return T;let e=this.totalItems===0?0:(this.value-1)*this.pageSize+1,t=Math.min(this.value*this.pageSize,this.totalItems);return w`
      <div part="info" class="pagination__info">
        ${this.localize.term(`showingResults`,e,t,this.totalItems)}
      </div>
    `}renderSeletorDeTamanho(){return this.showPageSize?w`
      <label part="page-size" class="pagination__page-size">
        <span>${this.localize.term(`resultsPerPage`)}</span>
        <kk-select
          size=${this.size}
          .value=${String(this.pageSize)}
          ?pill=${this.pill}
          @kk-change=${this.handlePageSizeChange}
        >
          ${this.pageSizeOptions.map(e=>w`<kk-option value=${String(e)}>${e}</kk-option>`)}
        </kk-select>
      </label>
    `:T}render(){let e=this.pages;return w`
      <nav
        part="base"
        class=${E({pagination:!0,"pagination--small":this.size===`small`,"pagination--medium":this.size===`medium`,"pagination--large":this.size===`large`})}
        role="navigation"
        aria-label=${this.localize.term(`pagination`)}
      >
        ${this.renderInfo()} ${this.renderSeletorDeTamanho()}

        <div class="pagination__controls">
          ${this.showEdges?w`
                <kk-icon-button
                  name="chevrons-left"
                  label=${this.localize.term(`firstPage`)}
                  ?disabled=${this.value<=1}
                  @click=${()=>this.goTo(1)}
                ></kk-icon-button>
              `:T}

          <kk-icon-button
            name="chevron-left"
            library="system"
            label=${this.localize.term(`previousPage`)}
            ?disabled=${this.value<=1}
            @click=${()=>this.goTo(this.value-1)}
          ></kk-icon-button>

          <div part="pages" class="pagination__pages">
            ${this.janela().map(e=>e===$v?w`<span class="pagination__ellipsis" aria-hidden="true">${$v}</span>`:w`
                    <kk-button
                      part="page"
                      variant=${e===this.value?`primary`:`default`}
                      size=${this.size}
                      ?pill=${this.pill}
                      aria-label=${this.localize.term(`page`,e)}
                      aria-current=${e===this.value?`page`:`false`}
                      @click=${()=>this.goTo(e)}
                    >
                      ${e}
                    </kk-button>
                  `)}
          </div>

          <kk-icon-button
            name="chevron-right"
            library="system"
            label=${this.localize.term(`nextPage`)}
            ?disabled=${this.value>=e}
            @click=${()=>this.goTo(this.value+1)}
          ></kk-icon-button>

          ${this.showEdges?w`
                <kk-icon-button
                  name="chevrons-right"
                  label=${this.localize.term(`lastPage`)}
                  ?disabled=${this.value>=e}
                  @click=${()=>this.goTo(e)}
                ></kk-icon-button>
              `:T}
        </div>
      </nav>
    `}};X=f(fy),py=new WeakMap,my=new WeakMap,hy=new WeakMap,gy=new WeakMap,_y=new WeakMap,vy=new WeakMap,yy=new WeakMap,by=new WeakMap,xy=new WeakMap,Sy=new WeakMap,Cy=new WeakMap,wy=new WeakMap,h(X,4,`value`,dy,Ty,py),h(X,4,`total`,uy,Ty,my),h(X,4,`totalItems`,ly,Ty,hy),h(X,4,`pageSize`,cy,Ty,gy),h(X,4,`pageSizeOptions`,sy,Ty,_y),h(X,4,`siblings`,oy,Ty,vy),h(X,4,`boundaries`,ay,Ty,yy),h(X,4,`size`,iy,Ty,by),h(X,4,`pill`,ry,Ty,xy),h(X,4,`showEdges`,ny,Ty,Sy),h(X,4,`showPageSize`,ty,Ty,Cy),h(X,4,`showInfo`,ey,Ty,wy),p(X,Ty),g(Ty,`styles`,[D,k_]),g(Ty,`dependencies`,{"kk-button":R,"kk-icon-button":Kc,"kk-option":O_,"kk-select":Y}),Ty.define(`kk-pagination`);var Ey=C`
  :host {
    --kk-progress-bar-height: 1rem;
    --kk-progress-bar-track-color: var(--kk-color-neutral-200);
    --kk-progress-bar-indicator-color: var(--kk-color-primary-600);
    --kk-progress-bar-label-color: var(--kk-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--kk-progress-bar-track-color);
    height: var(--kk-progress-bar-height);
    border-radius: var(--kk-border-radius-pill);
    box-shadow: inset var(--kk-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--kk-font-sans);
    font-size: 12px;
    font-weight: var(--kk-font-weight-normal);
    background-color: var(--kk-progress-bar-indicator-color);
    color: var(--kk-progress-bar-label-color);
    text-align: center;
    line-height: var(--kk-progress-bar-height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--kk-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Dy=`important`,Oy=` !`+Dy,ky=ns(class extends rs{constructor(e){if(super(e),e.type!==ts.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Oy);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Dy:``):n[e]=r}}return Po}}),Ay,jy,My,Ny,Py,Fy,Iy,Ly,Ry=class extends (Ny=M,My=[O({type:Number,reflect:!0})],jy=[O({type:Boolean,reflect:!0})],Ay=[O()],Ny){constructor(){super(...arguments),g(this,`localize`,new Ha(this)),_(this,Fy,m(Py,8,this,0)),m(Py,11,this),_(this,Iy,m(Py,12,this,!1)),m(Py,15,this),_(this,Ly,m(Py,16,this,``)),m(Py,19,this)}render(){return w`
      <div
        part="base"
        class=${E({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()===`rtl`})}
        role="progressbar"
        title=${N(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ky({width:`${this.value}%`})}>
          ${this.indeterminate?``:w` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Py=f(Ny),Fy=new WeakMap,Iy=new WeakMap,Ly=new WeakMap,h(Py,4,`value`,My,Ry,Fy),h(Py,4,`indeterminate`,jy,Ry,Iy),h(Py,4,`label`,Ay,Ry,Ly),p(Py,Ry),g(Ry,`styles`,[D,Ey]),Ry.define(`kk-progress-bar`),Y.define(`kk-select`),Al.define(`kk-spinner`);var zy=C`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --kk-switch-height: var(--kk-toggle-size-small);
    --kk-switch-thumb-size: calc(var(--kk-toggle-size-small) + 4px);
    --kk-switch-width: calc(var(--kk-switch-height) * 2);

    font-size: var(--kk-input-font-size-small);
  }

  :host([size='medium']) {
    --kk-switch-height: var(--kk-toggle-size-medium);
    --kk-switch-thumb-size: calc(var(--kk-toggle-size-medium) + 4px);
    --kk-switch-width: calc(var(--kk-switch-height) * 2);

    font-size: var(--kk-input-font-size-medium);
  }

  :host([size='large']) {
    --kk-switch-height: var(--kk-toggle-size-large);
    --kk-switch-thumb-size: calc(var(--kk-toggle-size-large) + 4px);
    --kk-switch-width: calc(var(--kk-switch-height) * 2);

    font-size: var(--kk-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--kk-input-font-family);
    font-size: inherit;
    font-weight: var(--kk-input-font-weight);
    color: var(--kk-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--kk-switch-width);
    height: var(--kk-switch-height);
    background-color: var(--kk-color-neutral-400);
    border: solid var(--kk-input-border-width) var(--kk-color-neutral-400);
    border-radius: var(--kk-switch-height);
    transition:
      var(--kk-transition-fast) border-color,
      var(--kk-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--kk-switch-thumb-size);
    height: var(--kk-switch-thumb-size);
    background-color: var(--kk-color-neutral-0);
    border-radius: 50%;
    border: solid var(--kk-input-border-width) var(--kk-color-neutral-400);
    translate: calc((var(--kk-switch-width) - var(--kk-switch-height)) / -2);
    transition:
      var(--kk-transition-fast) translate ease,
      var(--kk-transition-fast) background-color,
      var(--kk-transition-fast) border-color,
      var(--kk-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--kk-color-neutral-400);
    border-color: var(--kk-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--kk-color-neutral-400);
    border-color: var(--kk-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-primary-600);
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-primary-600);
    translate: calc((var(--kk-switch-width) - var(--kk-switch-height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-primary-600);
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--kk-switch-height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--kk-input-required-content);
    color: var(--kk-input-required-content-color);
    margin-inline-start: var(--kk-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,By,Vy,Hy,Uy,Wy,Gy,Ky,qy,Jy,Yy,Xy,Zy,Qy,$y,eb,Z,tb,nb,rb,ib,ab,ob,sb,cb,lb,ub,db,fb=class extends (eb=M,$y=[A(`input[type="checkbox"]`)],Qy=[k()],Zy=[O()],Xy=[O()],Yy=[O()],Jy=[O({reflect:!0})],qy=[O({type:Boolean,reflect:!0})],Ky=[O({type:Boolean,reflect:!0})],Gy=[cs(`checked`)],Wy=[O({reflect:!0,converter:js})],Uy=[O({type:Boolean,reflect:!0})],Hy=[O({attribute:`help-text`})],Vy=[j([`checked`,`value`],{waitUntilFirstUpdate:!0})],By=[j(`disabled`,{waitUntilFirstUpdate:!0})],eb){constructor(){super(...arguments),m(Z,5,this),g(this,`validade`,new qu(this,{interacaoEm:[`kk-input`]})),g(this,`hasSlotController`,new Jc(this,`help-text`)),_(this,tb,m(Z,8,this)),m(Z,11,this),_(this,nb,m(Z,12,this,!1)),m(Z,15,this),_(this,rb,m(Z,16,this,``)),m(Z,19,this),_(this,ib,m(Z,20,this,``)),m(Z,23,this),_(this,ab,m(Z,24,this)),m(Z,27,this),_(this,ob,m(Z,28,this,`medium`)),m(Z,31,this),_(this,sb,m(Z,32,this,!1)),m(Z,35,this),_(this,cb,m(Z,36,this,!1)),m(Z,39,this),g(this,`defaultChecked`,m(Z,52,this,!1)),m(Z,55,this),_(this,lb,m(Z,40,this,``)),m(Z,43,this),_(this,ub,m(Z,44,this,!1)),m(Z,47,this),_(this,db,m(Z,48,this,``)),m(Z,51,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.checked=this.defaultChecked,this._internals.setFormValue(this.checked?this.value||`on`:null),this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.checked?this.value||`on`:null),this.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleInput(){this.emit(`kk-input`)}handleClick(){this.checked=!this.checked,this.emit(`kk-change`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleKeyDown(e){e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.emit(`kk-change`),this.emit(`kk-input`)),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.emit(`kk-change`),this.emit(`kk-input`))}handleStateChange(){this._internals.setFormValue(this.checked?this.value||`on`:null),this.input.checked=this.checked,this.updateValidity()}handleDisabledChange(){this.input.disabled=this.disabled,this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.input.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,Ku(this.input),this.input)}emitInvalidEvent(e){let t=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.dispatchEvent(t)||e?.preventDefault()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return w`
      <div
        class=${E({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${E({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size===`small`,"switch--medium":this.size===`medium`,"switch--large":this.size===`large`})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${N(this.value)}
            .checked=${Wu(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Z=f(eb),tb=new WeakMap,nb=new WeakMap,rb=new WeakMap,ib=new WeakMap,ab=new WeakMap,ob=new WeakMap,sb=new WeakMap,cb=new WeakMap,lb=new WeakMap,ub=new WeakMap,db=new WeakMap,h(Z,4,`input`,$y,fb,tb),h(Z,4,`hasFocus`,Qy,fb,nb),h(Z,4,`title`,Zy,fb,rb),h(Z,4,`name`,Xy,fb,ib),h(Z,4,`value`,Yy,fb,ab),h(Z,4,`size`,Jy,fb,ob),h(Z,4,`disabled`,qy,fb,sb),h(Z,4,`checked`,Ky,fb,cb),h(Z,4,`form`,Wy,fb,lb),h(Z,4,`required`,Uy,fb,ub),h(Z,4,`helpText`,Hy,fb,db),h(Z,1,`handleStateChange`,Vy,fb),h(Z,1,`handleDisabledChange`,By,fb),h(Z,5,`defaultChecked`,Gy,fb),p(Z,fb),g(fb,`styles`,[D,Gu,zy]),g(fb,`formAssociated`,!0),fb.define(`kk-switch`);var pb=C`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-input-font-weight);
    line-height: var(--kk-line-height-normal);
    letter-spacing: var(--kk-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) border,
      var(--kk-transition-fast) box-shadow,
      var(--kk-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--kk-input-background-color);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--kk-input-background-color-hover);
    border-color: var(--kk-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--kk-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--kk-input-background-color-focus);
    border-color: var(--kk-input-border-color-focus);
    color: var(--kk-input-color-focus);
    box-shadow: 0 0 0 var(--kk-focus-ring-width) var(--kk-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--kk-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--kk-input-background-color-disabled);
    border-color: var(--kk-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--kk-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--kk-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--kk-input-filled-background-color);
    color: var(--kk-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--kk-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--kk-input-filled-background-color-focus);
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--kk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--kk-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--kk-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--kk-input-border-radius-small);
    font-size: var(--kk-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--kk-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--kk-input-border-radius-medium);
    font-size: var(--kk-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--kk-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--kk-input-border-radius-large);
    font-size: var(--kk-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--kk-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  /*
   * Quem cresce com o texto é o CSS (field-sizing: content), e não um ResizeObserver
   * medindo o scrollHeight a cada tecla. Com ele o navegador ignora o atributo rows,
   * então o mínimo volta pelo lh: --rows linhas mais o padding vertical, que é 0.5em de
   * cada lado em todos os tamanhos.
   */
  .textarea--resize-auto .textarea__control {
    field-sizing: content;
    min-height: calc(var(--rows) * 1lh + 1em);
    resize: none;
  }
`,mb,hb,gb,_b,vb,yb,bb,xb,Sb,Cb,wb,Tb,Eb,Db,Ob,kb,Ab,jb,Mb,Nb,Pb,Fb,Ib,Lb,Rb,zb,Bb,Vb,Hb,Q,Ub,Wb,Gb,Kb,qb,Jb,Yb,Xb,Zb,Qb,$b,ex,tx,nx,rx,ix,ax,ox,sx,cx,lx,ux,dx,fx,px,$=class extends (Hb=M,Vb=[A(`.textarea__control`)],Bb=[k()],zb=[O()],Rb=[O()],Lb=[O()],Ib=[O({reflect:!0})],Fb=[O({type:Boolean,reflect:!0})],Pb=[O()],Nb=[O({attribute:`help-text`})],Mb=[O()],jb=[O({type:Number})],Ab=[O()],kb=[O({type:Boolean,reflect:!0})],Ob=[O({type:Boolean,reflect:!0})],Db=[O({reflect:!0,converter:js})],Eb=[O({type:Boolean,reflect:!0})],Tb=[O({type:Number})],wb=[O({type:Number})],Cb=[O()],Sb=[O({converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],xb=[O()],bb=[O({type:Boolean})],yb=[O()],vb=[O({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],_b=[O()],gb=[cs()],hb=[j(`disabled`,{waitUntilFirstUpdate:!0})],mb=[j(`value`,{waitUntilFirstUpdate:!0})],Hb){constructor(){super(...arguments),m(Q,5,this),g(this,`validade`,new qu(this,{interacaoEm:[`kk-blur`,`kk-input`]})),g(this,`hasSlotController`,new Jc(this,`help-text`,`label`)),_(this,Ub,m(Q,8,this)),m(Q,11,this),_(this,Wb,m(Q,12,this,!1)),m(Q,15,this),_(this,Gb,m(Q,16,this,``)),m(Q,19,this),_(this,Kb,m(Q,20,this,``)),m(Q,23,this),_(this,qb,m(Q,24,this,``)),m(Q,27,this),_(this,Jb,m(Q,28,this,`medium`)),m(Q,31,this),_(this,Yb,m(Q,32,this,!1)),m(Q,35,this),_(this,Xb,m(Q,36,this,``)),m(Q,39,this),_(this,Zb,m(Q,40,this,``)),m(Q,43,this),_(this,Qb,m(Q,44,this,``)),m(Q,47,this),_(this,$b,m(Q,48,this,4)),m(Q,51,this),_(this,ex,m(Q,52,this,`vertical`)),m(Q,55,this),_(this,tx,m(Q,56,this,!1)),m(Q,59,this),_(this,nx,m(Q,60,this,!1)),m(Q,63,this),_(this,rx,m(Q,64,this,``)),m(Q,67,this),_(this,ix,m(Q,68,this,!1)),m(Q,71,this),_(this,ax,m(Q,72,this)),m(Q,75,this),_(this,ox,m(Q,76,this)),m(Q,79,this),_(this,sx,m(Q,80,this)),m(Q,83,this),_(this,cx,m(Q,84,this,!0)),m(Q,87,this),_(this,lx,m(Q,88,this)),m(Q,91,this),_(this,ux,m(Q,92,this)),m(Q,95,this),_(this,dx,m(Q,96,this)),m(Q,99,this),_(this,fx,m(Q,100,this,!0)),m(Q,103,this),_(this,px,m(Q,104,this)),m(Q,107,this),g(this,`defaultValue`,m(Q,108,this,``)),m(Q,111,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this._internals.setFormValue(this.value),this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.value),this.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleChange(){this.value=this.input.value,this.emit(`kk-change`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleInput(){this.value=this.input.value,this.emit(`kk-input`)}handleDisabledChange(){this.input.disabled=this.disabled,this.updateValidity()}handleValueChange(){this._internals.setFormValue(this.value)}updated(e){super.updated(e),e.has(`value`)&&this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){this.toggleState(`--empty`,!this.value),this.validade.aplicar(this.input.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,Ku(this.input),this.input)}emitInvalidEvent(e){let t=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.dispatchEvent(t)||e?.preventDefault()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return w`
      <div
        part="form-control"
        class=${E({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${E({textarea:!0,"textarea--small":this.size===`small`,"textarea--medium":this.size===`medium`,"textarea--large":this.size===`large`,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize===`none`,"textarea--resize-vertical":this.resize===`vertical`,"textarea--resize-auto":this.resize===`auto`})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${N(this.name)}
              .value=${Wu(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              rows=${N(this.rows)}
              style=${ky({"--rows":String(this.rows)})}
              minlength=${N(this.minlength)}
              maxlength=${N(this.maxlength)}
              autocapitalize=${N(this.autocapitalize)}
              autocorrect=${this.autocorrect?`on`:`off`}
              ?autofocus=${this.autofocus}
              spellcheck=${N(this.spellcheck)}
              enterkeyhint=${N(this.enterkeyhint)}
              inputmode=${N(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Q=f(Hb),Ub=new WeakMap,Wb=new WeakMap,Gb=new WeakMap,Kb=new WeakMap,qb=new WeakMap,Jb=new WeakMap,Yb=new WeakMap,Xb=new WeakMap,Zb=new WeakMap,Qb=new WeakMap,$b=new WeakMap,ex=new WeakMap,tx=new WeakMap,nx=new WeakMap,rx=new WeakMap,ix=new WeakMap,ax=new WeakMap,ox=new WeakMap,sx=new WeakMap,cx=new WeakMap,lx=new WeakMap,ux=new WeakMap,dx=new WeakMap,fx=new WeakMap,px=new WeakMap,h(Q,4,`input`,Vb,$,Ub),h(Q,4,`hasFocus`,Bb,$,Wb),h(Q,4,`title`,zb,$,Gb),h(Q,4,`name`,Rb,$,Kb),h(Q,4,`value`,Lb,$,qb),h(Q,4,`size`,Ib,$,Jb),h(Q,4,`filled`,Fb,$,Yb),h(Q,4,`label`,Pb,$,Xb),h(Q,4,`helpText`,Nb,$,Zb),h(Q,4,`placeholder`,Mb,$,Qb),h(Q,4,`rows`,jb,$,$b),h(Q,4,`resize`,Ab,$,ex),h(Q,4,`disabled`,kb,$,tx),h(Q,4,`readonly`,Ob,$,nx),h(Q,4,`form`,Db,$,rx),h(Q,4,`required`,Eb,$,ix),h(Q,4,`minlength`,Tb,$,ax),h(Q,4,`maxlength`,wb,$,ox),h(Q,4,`autocapitalize`,Cb,$,sx),h(Q,4,`autocorrect`,Sb,$,cx),h(Q,4,`autocomplete`,xb,$,lx),h(Q,4,`autofocus`,bb,$,ux),h(Q,4,`enterkeyhint`,yb,$,dx),h(Q,4,`spellcheck`,vb,$,fx),h(Q,4,`inputmode`,_b,$,px),h(Q,1,`handleDisabledChange`,hb,$),h(Q,1,`handleValueChange`,mb,$),h(Q,5,`defaultValue`,gb,$),p(Q,$),g($,`styles`,[D,Gu,pb]),g($,`formAssociated`,!0),$.define(`kk-textarea`),te(`./ui`);var mx=document.querySelector(`#app`);function hx(e){if(e.modulo===`home`)return{cabecalho:{titulo:x.home.saudacao},conteudo:da({executar:()=>void Tx(!0),ocupado:xx})};let t=Kt(e.modulo);if(t===void 0)return{cabecalho:{titulo:x.erro.naoEncontrado,voltarPara:`home`},conteudo:Mi()};if(gx[t.id]===void 0||!Jt(t.id))return{cabecalho:{titulo:t.rotulo,voltarPara:`home`},conteudo:ji(t)};let n=bx.get(t.id);if(n!==void 0)return{cabecalho:{titulo:t.rotulo,voltarPara:`home`},conteudo:Pi(n)};let r=_x.get(t.id);return r===void 0?(yx(t.id),{cabecalho:{titulo:t.rotulo,voltarPara:`home`},conteudo:Ni()}):{cabecalho:{titulo:r.titulo?.(e)??t.rotulo,capaPropria:r.capaPropria?.(e)??!1,voltarPara:r.voltarPara?.(e)??`home`,aoVoltar:()=>r.aoVoltar?.(e)??!1,acoes:r.acoes?.(e)},conteudo:r.conteudo(e)}}var gx={anotacoes:async()=>(await b(async()=>{let{telaAnotacoes:e}=await import(`./tela-C0Rv6gGI.js`);return{telaAnotacoes:e}},__vite__mapDeps([23,24,3,4,5,25,26,27]),import.meta.url)).telaAnotacoes,caderno:async()=>(await b(async()=>{let{telaCaderno:e}=await import(`./tela-wl_xVu1C.js`);return{telaCaderno:e}},[],import.meta.url)).telaCaderno,calendario:async()=>(await b(async()=>{let{telaCalendario:e}=await import(`./tela-YCdLb6iX.js`);return{telaCalendario:e}},__vite__mapDeps([28,6,5]),import.meta.url)).telaCalendario,criacao:async()=>(await b(async()=>{let{telaCriacao:e}=await import(`./tela-BPXXYZqq.js`);return{telaCriacao:e}},__vite__mapDeps([29,5,27,30,31,9]),import.meta.url)).telaCriacao,entenda:async()=>(await b(async()=>{let{telaCriacao:e}=await import(`./tela-BPXXYZqq.js`);return{telaCriacao:e}},__vite__mapDeps([29,5,27,30,31,9]),import.meta.url)).telaCriacao,faq:async()=>(await b(async()=>{let{telaFaq:e}=await import(`./tela-X1VVh7Av.js`);return{telaFaq:e}},__vite__mapDeps([32,5,33,34,30]),import.meta.url)).telaFaq,imite:async()=>(await b(async()=>{let{telaImite:e}=await import(`./tela-DWtUeBfO.js`);return{telaImite:e}},__vite__mapDeps([35,30]),import.meta.url)).telaImite,cronologia:async()=>(await b(async()=>{let{telaCronologia:e}=await import(`./tela-DwyziNBR.js`);return{telaCronologia:e}},__vite__mapDeps([36,5]),import.meta.url)).telaCronologia,estudo:async()=>(await b(async()=>{let{telaEstudo:e}=await import(`./tela-Uc2MPD7x.js`);return{telaEstudo:e}},__vite__mapDeps([37,12,4,5]),import.meta.url)).telaEstudo,financeiro:async()=>(await b(async()=>{let{telaFinanceiro:e}=await import(`./tela-DECCwrud.js`);return{telaFinanceiro:e}},__vite__mapDeps([38,10,9,7,5]),import.meta.url)).telaFinanceiro,guias:async()=>(await b(async()=>{let{telaGuias:e}=await import(`./tela-B8GK825D.js`);return{telaGuias:e}},__vite__mapDeps([39,24,5,25,40,17]),import.meta.url)).telaGuias,jogo:async()=>(await b(async()=>{let{telaJogo:e}=await import(`./tela-CHF0_GJ4.js`);return{telaJogo:e}},__vite__mapDeps([41,11,5]),import.meta.url)).telaJogo,leitura:async()=>(await b(async()=>{let{telaLeitura:e}=await import(`./tela-YO86tGMi.js`);return{telaLeitura:e}},__vite__mapDeps([42,43]),import.meta.url)).telaLeitura,metas:async()=>(await b(async()=>{let{telaMetas:e}=await import(`./tela-C_IpxkBY.js`);return{telaMetas:e}},__vite__mapDeps([44,8,9,10,4,5,11]),import.meta.url)).telaMetas,ministerio:async()=>(await b(async()=>{let{telaMinisterio:e}=await import(`./tela-Bv43Blgy.js`);return{telaMinisterio:e}},__vite__mapDeps([45,26,27,40,13,4,5,14,15,46]),import.meta.url)).telaMinisterio,perfil:async()=>(await b(async()=>{let{telaPerfil:e}=await import(`./tela-ThGE2Y__.js`);return{telaPerfil:e}},__vite__mapDeps([47,40,14,15,5,22]),import.meta.url)).telaPerfil,poesia:async()=>(await b(async()=>{let{telaPoesia:e}=await import(`./tela-DT88RgX6.js`);return{telaPoesia:e}},__vite__mapDeps([48,24,4,5,34,25,40,17]),import.meta.url)).telaPoesia,prep:async()=>(await b(async()=>{let{telaPrep:e}=await import(`./tela-CBv5Q8OV.js`);return{telaPrep:e}},__vite__mapDeps([49,9,5,20,19,4,18]),import.meta.url)).telaPrep,principios:async()=>(await b(async()=>{let{telaPrincipios:e}=await import(`./tela-DhuAh3oC.js`);return{telaPrincipios:e}},__vite__mapDeps([50,5,33,34,30]),import.meta.url)).telaPrincipios,receitas:async()=>(await b(async()=>{let{telaReceitas:e}=await import(`./tela-BbsYIyhv.js`);return{telaReceitas:e}},__vite__mapDeps([51,24,34,40,17,16,5]),import.meta.url)).telaReceitas,servico:async()=>(await b(async()=>{let{telaServico:e}=await import(`./tela-XmmV1ap3.js`);return{telaServico:e}},__vite__mapDeps([52,4,8,9,10,5,11]),import.meta.url)).telaServico,sobre:async()=>(await b(async()=>{let{telaSobre:e}=await import(`./tela-DLNviEBd.js`);return{telaSobre:e}},__vite__mapDeps([53,9]),import.meta.url)).telaSobre,tutorial:async()=>(await b(async()=>{let{telaTutorial:e}=await import(`./tela-CDfbKmNe.js`);return{telaTutorial:e}},__vite__mapDeps([54,5,53,9]),import.meta.url)).telaTutorial},_x=new Map,vx=new Set;function yx(e){let t=gx[e];t===void 0||_x.has(e)||vx.has(e)||(vx.add(e),t().then(t=>{_x.set(e,t),Cx()}).catch(t=>{vx.delete(e),bx.set(e,String(t)),Cx()}))}var bx=new Map,xx=!1,Sx=!1;function Cx(){if(mx===null)return;let e=wx,{cabecalho:t,conteudo:n}=hx(e);document.title=e.modulo===`home`?u.displayName:`${t.titulo} — ${u.displayName}`,document.documentElement.dataset.modulo=e.modulo,wt(Wr(t,n,Cx),mx),Br()}var wx={modulo:`home`,args:[],query:new URLSearchParams};async function Tx(e){if(!xx){xx=!0,Cx();try{let t=await Dr();if(!e)return;t.ok?await Ai()||ma(x.home.emDia):ma(t.motivo===`offline`?x.home.semRede:x.home.semManifesto,`warning`)}catch(t){console.error(`Sincronização: não terminou.`,t),e&&ma(x.home.sincronizacaoFalhou,`danger`)}finally{xx=!1,Cx()}}}function Ex(){mx!==null&&wt(v`
      <div class="carregando">
        <kk-spinner></kk-spinner>
        <p>${x.app.carregando}</p>
      </div>
    `,mx)}function Dx(e){mx!==null&&wt(v`
      <div class="aviso">
        <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
        <h2>${x.erro.banco}</h2>
        <pre class="detalhe">${e}</pre>
        <kk-button variant="danger" outline @click=${()=>void ha()}>
          <kk-icon slot="prefix" name="trash"></kk-icon>
          ${x.armazenamento.apagarTudo}
        </kk-button>
      </div>
    `,mx)}function Ox(e){switch(e){case`instancia-dupla`:return x.armazenamento.memoriaInstanciaDupla;case`indisponivel`:return x.armazenamento.memoriaIndisponivel;default:return x.armazenamento.memoriaOrigemInsegura}}async function kx(){await Bt(Rt()),Ex(),tn(Cx);try{let e=await a();e.persistente||ma(Ox(e.motivo),`warning`)}catch(e){Dx(String(e));return}mx?.removeAttribute(`aria-busy`),addEventListener(`unhandledrejection`,e=>{e.preventDefault(),console.error(`Kobi Note: uma ação falhou.`,e.reason),ma(x.app.acaoFalhou,`danger`)}),Ta()||br(),Zt(e=>{wx=e,Cx(),scrollTo({top:0}),e.modulo===`home`&&Sx&&Ai()}),ln(),Tx(!1).then(()=>{Sx=!0,wx.modulo===`home`&&Ai()}),jn(),Sa(Cx),ka()}window.__note={repositorio:s,apagarDados:zn,navegacao:{MODULOS:Ht,ATALHOS:Vt,HOME:Ut},imite:{carregarCartoes:ai,lerLentes:si},caderno:{listarAnotacoes:Jr},badge:{atualizar:kn},backup:{montar:Xn,ler:er,restaurar:tr}},location.hash===``&&Xt(`home`),kx();export{er as $,ci as A,Gr as B,Ti as C,p as Ct,bi as D,g as Dt,ai as E,h as Et,vi as F,Jr as G,Qr as H,_i as I,ri as J,Kr as K,di as L,hi as M,mi as N,xi as O,_ as Ot,yi as P,$n as Q,ui as R,wi as S,St,fi as T,m as Tt,Xr as U,ti as V,ni as W,jr as X,Zr as Y,Zn as Z,zi as _,x as _t,O as a,fn as at,Ii as b,y as bt,w as c,gn as ct,xa as d,Cn as dt,tr as et,ba as f,nn as ft,Ri as g,Kt as gt,Vi as h,Ht as ht,A as i,hn as it,si as j,li as k,u as kt,C as l,mn as lt,ma as m,Xt as mt,Ag as n,xn as nt,M as o,En as ot,ha as p,$t as pt,ei as q,j as r,bn as rt,D as s,wn as st,ky as t,yn as tt,Oa as u,pn as ut,Li as v,Lt as vt,Si as w,f as wt,Ci as x,v as xt,Fi as y,b as yt,Yr as z};