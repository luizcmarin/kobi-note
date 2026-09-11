const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./en-CJ6AFmXZ.js","./plural-0_xhPFb3.js","./es-ES-DiVHTD8f.js","./dados-z1ZK372g.js","./banco-_B-1AUgO.js","./texto-DhKYsM3f.js","./dados-DeTaREhN.js","./dados-DTU2IgUt.js","./dinheiro-f7T9Mvpd.js","./numero-B0JnuQJ5.js","./dados-Cf3KGV0w.js","./dados-Ce9ECU8O.js","./dados-BbZtaqn0.js","./dados-7Nm7wVki.js","./acervo-mwj3Kh77.js","./kits-C3dsFJIL.js","./estoque-CvfiN4ff.js","./dados-BgDpV8rv.js","./convite-CloxE-5d.js","./qr-BWyZ-des.js","./tela-BPjsTdjC.js","./unsafe-html-KMHoX6eQ.js","./directive-BSZPiF1A.js","./leitura-DgneiKBK.js","./tela-DLcwRaVV.js","./tela-DP5XNtw6.js","./ref-BHK_13c7.js","./rascunho-CqmDZJv5.js","./base-BAutaeuR.js","./tela-DtecdLg7.js","./catalogo-B2Z121mU.js","./favoritos-DAEWA_Gd.js","./tela-C7cCwKT5.js","./tela-CRGC_lF8.js","./tela-DlZVSVTG.js","./tela-BPf8P0ro.js","./tela-BMocs8bO.js","./compartilhar-DMC9J1_d.js","./tela-WULJ33tz.js","./tela-C5oFHwA8.js","./dados-CrToLRPu.js","./tela-CwpDTVWz.js","./tela-DQkMT42b.js","./tela-B4bt9OwS.js","./tela-CLq0QjLu.js","./tela-Bl6tlWP4.js","./tela-CDGBP3DI.js","./tela-D-BXsv3y.js","./tela-BGooFVPY.js","./tela-Dav3EY3Q.js","./tela-BOh_FLfH.js"])))=>i.map(i=>d[i]);
import{n as e,t}from"./plural-0_xhPFb3.js";import{i as n,n as r,s as i,t as a}from"./banco-_B-1AUgO.js";import{t as o}from"./texto-DhKYsM3f.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function s(e){return e}var c=s({name:`note`,displayName:`Kobi Note`,apiEndpoint:`./dados`,themeColor:`#0d6efd`,targets:[`pwa`],features:{anotacoes:!0,guias:!0,poesia:!0,receitas:!0,jogo:!0,criacao:!0,entenda:!0,imite:!0,principios:!0,faq:!0,cronologia:!0,caderno:!0,prep:!0,financeiro:!0,metas:!0,ministerio:!0,servico:!0,estudo:!0,leitura:!0,calendario:!0,perfil:!0,tutorial:!0,sobre:!0}}),l=Symbol.for(`kobi.basePath`),u=globalThis;function d(e){u[l]=e}function ee(e=``){if(!u[l]){let e=[...document.scripts],t=e.find(e=>e.hasAttribute(`data-kobi`));d(t?t.getAttribute(`data-kobi`):(e.find(e=>/\/ui(-autoloader|\.min)?\.js($|\?)/.test(e.src))?.getAttribute(`src`)??``).split(`/`).slice(0,-1).join(`/`))}return(u[l]??``).replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var te=Object.create,ne=Object.defineProperty,re=Object.getOwnPropertyDescriptor,ie=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),ae=e=>{throw TypeError(e)},oe=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t)=>ne(e,`name`,{value:t,configurable:!0}),f=e=>[,,,te(e?.[ie(`metadata`)]??null)],ce=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],le=e=>e!==void 0&&typeof e!=`function`?ae(`Function expected`):e,ue=(e,t,n,r,i)=>({kind:ce[e],name:t,metadata:r,addInitializer:e=>n._?ae(`Already initialized`):i.push(le(e||null))}),p=(e,t)=>oe(t,ie(`metadata`),e[3]),m=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},h=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,ee=!!(t&8),te=!!(t&16),ie=d>3?e.length+1:d?ee?1:2:0,oe=ce[d+5],f=d>3&&(e[ie-1]=[]),m=e[ie]||(e[ie]=[]),h=d&&(!te&&!ee&&(i=i.prototype),d<5&&(d>3||!te)&&re(d<4?i:{get[n](){return pe(this,a)},set[n](e){return me(this,a,e)}},n));d?te&&d<4&&se(a,(d>2?`set `:d>1?`get `:``)+n):se(i,n);for(var g=r.length-1;g>=0;g--)l=ue(d,n,c={},e[3],m),d&&(l.static=ee,l.private=te,u=l.access={has:te?e=>fe(i,e):e=>n in e},d^3&&(u.get=te?e=>(d^1?pe:he)(e,i,d^4?a:h.get):e=>e[n]),d>2&&(u.set=te?(e,t)=>me(e,i,t,d^4?a:h.set):(e,t)=>e[n]=t)),s=(0,r[g])(d?d<4?te?a:h[oe]:d>4?void 0:{get:h.get,set:h.set}:i,l),c._=1,d^4||s===void 0?le(s)&&(d>4?f.unshift(s):d?te?a=s:h[oe]=s:i=s):typeof s!=`object`||!s?ae(`Object expected`):(le(o=s.get)&&(h.get=o),le(o=s.set)&&(h.set=o),le(o=s.init)&&f.unshift(o));return d||p(e,i),h&&ne(i,n,h),te?d^4?a:h:i},g=(e,t,n)=>oe(e,typeof t==`symbol`?t:t+``,n),de=(e,t,n)=>t.has(e)||ae(`Cannot `+n),fe=(e,t)=>Object(t)===t?e.has(t):ae(`Cannot use the "in" operator on this value`),pe=(e,t,n)=>(de(e,t,`read from private field`),n?n.call(e):t.get(e)),_=(e,t,n)=>t.has(e)?ae(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),me=(e,t,n,r)=>(de(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),he=(e,t,n)=>(de(e,t,`access private method`),n),ge=globalThis,_e=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,ve=Symbol(),ye=new WeakMap,be=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(_e&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ye.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ye.set(t,e))}return e}toString(){return this.cssText}},xe=e=>new be(typeof e==`string`?e:e+``,void 0,ve),Se=(e,t)=>{if(_e)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=ge.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Ce=_e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return xe(t)})(e):e,{is:we,defineProperty:Te,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:De,getOwnPropertySymbols:Oe,getPrototypeOf:ke}=Object,Ae=globalThis,je=Ae.trustedTypes,Me=je?je.emptyScript:``,Ne=Ae.reactiveElementPolyfillSupport,Pe=(e,t)=>e,Fe={toAttribute(e,t){switch(t){case Boolean:e=e?Me:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ie=(e,t)=>!we(e,t),Le={attribute:!0,type:String,converter:Fe,reflect:!1,useDefault:!1,hasChanged:Ie};Symbol.metadata??=Symbol(`metadata`),Ae.litPropertyMetadata??=new WeakMap;var Re=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Te(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Le}static _$Ei(){if(this.hasOwnProperty(Pe(`elementProperties`)))return;let e=ke(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pe(`properties`))){let e=this.properties,t=[...De(e),...Oe(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Ce(e))}else e!==void 0&&t.push(Ce(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Se(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Fe:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Fe:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ie)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Re.elementStyles=[],Re.shadowRootOptions={mode:`open`},Re[Pe(`elementProperties`)]=new Map,Re[Pe(`finalized`)]=new Map,Ne?.({ReactiveElement:Re}),(Ae.reactiveElementVersions??=[]).push(`2.1.2`);var ze=globalThis,Be=e=>e,Ve=ze.trustedTypes,He=Ve?Ve.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Ue=`$lit$`,We=`lit$${Math.random().toFixed(9).slice(2)}$`,Ge=`?`+We,Ke=`<${Ge}>`,qe=document,Je=()=>qe.createComment(``),Ye=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Xe=Array.isArray,Ze=e=>Xe(e)||typeof e?.[Symbol.iterator]==`function`,Qe=`[ 	
\f\r]`,$e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,tt=/>/g,nt=RegExp(`>|${Qe}(?:([^\\s"'>=/]+)(${Qe}*=${Qe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),rt=/'/g,it=/"/g,at=/^(?:script|style|textarea|title)$/i,v=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ot=Symbol.for(`lit-noChange`),y=Symbol.for(`lit-nothing`),st=new WeakMap,ct=qe.createTreeWalker(qe,129);function lt(e,t){if(!Xe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return He===void 0?t:He.createHTML(t)}var ut=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=$e;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===$e?c[1]===`!--`?o=et:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=nt):(at.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=nt):o=tt:o===nt?c[0]===`>`?(o=i??$e,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?nt:c[3]===`"`?it:rt):o===it||o===rt?o=nt:o===et||o===tt?o=$e:(o=nt,i=void 0);let d=o===nt&&e[t+1].startsWith(`/>`)?` `:``;a+=o===$e?n+Ke:l>=0?(r.push(s),n.slice(0,l)+Ue+n.slice(l)+We+d):n+We+(l===-2?t:d)}return[lt(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},dt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ut(t,n);if(this.el=e.createElement(l,r),ct.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ct.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Ue)){let t=u[o++],n=i.getAttribute(e).split(We),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?gt:r[1]===`?`?_t:r[1]===`@`?vt:ht}),i.removeAttribute(e)}else e.startsWith(We)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(at.test(i.tagName)){let e=i.textContent.split(We),t=e.length-1;if(t>0){i.textContent=Ve?Ve.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Je()),ct.nextNode(),c.push({type:2,index:++a});i.append(e[t],Je())}}}else if(i.nodeType===8){if(i.data===Ge)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(We,e+1))!==-1;)c.push({type:7,index:a}),e+=We.length-1}}a++}}static createElement(e,t){let n=qe.createElement(`template`);return n.innerHTML=e,n}};function ft(e,t,n=e,r){if(t===ot)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ye(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ft(e,i._$AS(e,t.values),i,r)),t}var pt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??qe).importNode(t,!0);ct.currentNode=r;let i=ct.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new mt(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new yt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ct.nextNode(),a++)}return ct.currentNode=qe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},mt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ft(this,e,t),Ye(e)?e===y||e==null||e===``?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==ot&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ze(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(qe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=dt.createElement(lt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new pt(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=st.get(e.strings);return t===void 0&&st.set(e.strings,t=new dt(e)),t}k(t){Xe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Je()),this.O(Je()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Be(e).nextSibling;Be(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ht=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ft(this,e,t,0),a=!Ye(e)||e!==this._$AH&&e!==ot,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ft(this,r[n+o],t,o),s===ot&&(s=this._$AH[o]),a||=!Ye(s)||s!==this._$AH[o],s===y?e=y:e!==y&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},gt=class extends ht{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},_t=class extends ht{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},vt=class extends ht{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ft(this,e,t,0)??y)===ot)return;let n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},yt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ft(this,e)}},bt={M:Ue,P:We,A:Ge,C:1,L:ut,R:pt,D:Ze,V:ft,I:mt,H:ht,N:_t,U:vt,B:gt,F:yt},xt=ze.litHtmlPolyfillSupport;xt?.(dt,mt),(ze.litHtmlVersions??=[]).push(`3.3.3`);var St=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new mt(t.insertBefore(Je(),e),e,void 0,n??{})}return i._$AI(e),i},Ct=globalThis,wt=class extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=St(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ot}};wt._$litElement$=!0,wt.finalized=!0,Ct.litElementHydrateSupport?.({LitElement:wt});var Tt=Ct.litElementPolyfillSupport;Tt?.({LitElement:wt}),(Ct.litElementVersions??=[]).push(`4.2.2`);var Et=`Sua mente fora da nuvem. Estudo pessoal, criatividade, finanças e preparo tático reunidos em um espaço sob seu domínio absoluto com zero distrações.`,Dt={app:{nome:`Kobi Note`,carregando:`Carregando...`},home:{saudacao:`Kobi Note`,sub:Et,modulos:`Módulos`,sincronizar:`Sincronizar conteúdo`,sincronizando:`Sincronizando...`,sincronizado:e=>e===0?`Nenhuma novidade para hoje.`:`Conteúdo atualizado (${e} módulo(s)).`,semRede:`Sem conexão — o app continua funcionando com o que já está no aparelho.`,semManifesto:`O servidor de conteúdo não respondeu com um manifesto válido.`},modulos:{anotacoes:`Anotações`,guias:`Guias`,poesia:`Poesia`,receitas:`Receitas`,jogo:`Exercitando a Língua Pura`,criacao:`Teve um Projeto?`,entenda:`Entenda Melhor`,imite:`Imite a Sua Fé`,principios:`Fazendo as Contas...`,faq:`Perguntas Frequentes`,cronologia:`Cronologia`,caderno:`Caderno de Estudo`,prep:`Esteja Preparado`,financeiro:`Financeiro`,metas:`Metas`,ministerio:`Vida e Ministério`,servico:`Fazer Mais`,estudo:`Meu Momento de Estudo`,leitura:`Leitura da Bíblia`,calendario:`Calendário`,perfil:`Perfil / ICE`,tutorial:`Tutorial`,sobre:`Sobre`},secoes:{estudo:`Estudo Pessoal`,prep:`Esteja Preparado`,extras:`Extras`,pessoal:`Pessoal`,aplicativo:`O Aplicativo`},painel:{semEventos:`Nada marcado para hoje.`,diaInteiro:`Dia inteiro`,anotacoes:t=>e(t,{one:`1 anotação`,other:`${t} anotações`}),eventosHoje:t=>e(t,{one:`1 evento hoje`,other:`${t} eventos hoje`}),contasVencendo:t=>e(t,{one:`1 conta a vencer`,other:`${t} contas a vencer`}),leitura:e=>`${e}% da Bíblia`,metas:t=>e(t,{one:`1 meta em andamento`,other:`${t} metas em andamento`}),horas:t=>e(t,{one:`1 hora este mês`,other:`${t} horas este mês`}),foco:e=>`${Math.round(e/60)} h de foco no mês`,favoritas:t=>e(t,{one:`1 favorita`,other:`${t} favoritas`}),rotuloContas:`Contas a vencer`,rotuloFoco:`Estudo focado`,rotuloMetas:`Metas`,emHoras:e=>`${Math.round(e/60*10)/10} h`},convite:{titulo:`Compartilhar o Kobi Note`,tile:`Compartilhar`,tileResumo:`Convide alguém`,lema:`Compartilhe o Kobi Note com seus amigos. Eles vão gostar!`,mascote:`Kobi, a raposa do Kobi Note`,mensagem:`Oi! Descobri o Kobi Note para organizar meu estudo pessoal, anotações, finanças e preparo tático — tudo fica no meu próprio aparelho, sem conta e sem nuvem, e funciona sem internet. Acho que você vai gostar:`,qrAlt:`QR com o endereço do Kobi Note`,dica:`Aponte a câmera para o código, ou use um dos botões abaixo.`,whatsapp:`WhatsApp`,compartilhar:`Compartilhar`,copiar:`Copiar`,copiado:`Convite copiado. É só colar onde quiser.`},rodape:{termos:`Termos de uso`,privacidade:`Privacidade`,direitos:e=>`© ${e} Luiz Marin`,feitoPara:`Feito com ❤️ para você.`},boasVindas:{titulo:`Boas-vindas`,reabrir:`Rever as boas-vindas`,mascote:`Kobi, a raposa do Kobi Note, acenando boas-vindas`,pular:`Pular`,voltar:`Voltar`,proximo:`Próximo`,comecar:`Começar a usar`,passo:(e,t)=>`Passo ${e} de ${t}`,passos:{bemVindo:{titulo:`Bem-vindo ao Kobi Note`,texto:Et,dica:`Leva um minuto para conhecer o básico.`},painel:{titulo:`A tela inicial é o seu painel`,texto:`Cada cartão abre uma área do app e mostra um resumo do que está acontecendo nela. A tela é dividida em seções — Estudo Pessoal, Esteja Preparado, Pessoal — e não há tela intermediária: o cartão já abre a área.`,dica:`O botão ← sempre traz você de volta.`},offline:{titulo:`Funciona sem internet`,texto:`O Kobi Note guarda tudo no próprio aparelho. Você pode usar no ônibus, no campo ou em qualquer lugar sem sinal.`,dica:`Conteúdo novo é baixado sozinho quando houver internet.`},privado:{titulo:`Seus dados são só seus`,texto:`Não há nuvem, conta nem rastreador. Tudo fica apenas no seu aparelho.`,dica:`Ninguém — nem nós — consegue ver o que você faz aqui.`},instalar:{titulo:`Instale na tela inicial`,texto:`Pelo menu do navegador, escolha “Instalar aplicativo” ou “Adicionar à tela inicial”. O Kobi Note abrirá em tela cheia, oferecendo uma experiência imersiva e nativa.`,dica:`Quer saber mais? Veja o Tutorial.`,botao:`Instalar agora`}}},instalacao:{instalar:`Instalar na tela inicial`},sobre:{titulo:`Sobre`,versao:e=>`Versão ${e}`,lema:Et,seloOffline:`100% offline`,seloPrivado:`Privado`,seloSemRastreio:`Sem rastreadores`,seloInstalavel:`Instalável`,tudoNumLugar:`Tudo em um só lugar`,recEstudo:`Estudo e leitura`,recEstudoTexto:`Momento de Estudo, leitura, caderno e guias`,recJogo:`Aprender brincando`,recJogoTexto:`Jogo Língua Pura, Entenda Melhor, Imite a Sua Fé e "Teve um Projeto?"`,recCriar:`Criatividade`,recCriarTexto:`Poesia, receitas e anotações`,recFinancas:`Finanças e metas`,recFinancasTexto:`Orçamento, objetivos e calendário`,recPreparo:`Esteja Preparado`,recPreparoTexto:`Kits, estoque e cofre protegido`,recMinisterio:`Ministério e você`,recMinisterioTexto:`Vida e ministério, perfil e ICE`,privacidadeTitulo:`Seus dados são só seus`,privacidadeTexto:`Para quem não precisa de notificações, mas de espaço: estude, crie e organize sua rotina com total privacidade no seu dispositivo — sem anúncios, sem assinaturas. Apenas você e o Kobi Note.`,documentos:`Documentos`,vejaTambem:`Veja também`,contato:`Contato:`,email:`luizcmarin@gmail.com`},emBreve:{titulo:`Em breve`,texto:e=>`O módulo “${e}” ainda não foi liberado para esta versão do Kobi Note.`,ajuda:`Ele ainda está em desenvolvimento... espere mais um pouquinho.`,voltar:`Voltar ao início`},erro:{banco:`Não foi possível abrir o banco local`,naoEncontrado:`Não encontramos esta tela`,naoEncontradoTexto:`O endereço não corresponde a nenhum módulo do Kobi Note.`,telaNaoVeio:`Não foi possível abrir este módulo`,telaNaoVeioTexto:`A tela é baixada na primeira vez que você entra nela, e desta vez ela não chegou. Verifique a conexão e tente de novo; se o app foi atualizado agora há pouco, recarregar a página resolve.`,telaNaoVeioRecarregar:`Recarregar`,cargaFalhou:`Este módulo não abriu`,cargaFalhouTexto:`Alguma coisa deu errado ao ler os dados deste módulo. O que já estava salvo continua no aparelho — nada foi perdido.`,cargaTentarDeNovo:`Tentar de novo`},armazenamento:{memoriaOrigemInsegura:`Este endereço não é uma origem confiável: os dados ficam num armazenamento de reserva. Abra o app por HTTPS para usar o armazenamento definitivo.`,memoriaInstanciaDupla:`O Kobi Note já está aberto em outra janela, e só uma por vez pode usar o armazenamento definitivo. Feche a outra janela e recarregue esta — o que você escrever aqui até lá não será guardado.`,memoriaIndisponivel:`O navegador não liberou o armazenamento definitivo neste aparelho: os dados ficam num armazenamento de reserva e podem se perder. Verifique o espaço livre e as permissões de dados do site.`,apagarTudo:`Apagar todos os dados deste aparelho`,apagarTudoTitulo:`Apagar tudo deste aparelho?`,apagarTudoTexto:`Isto remove o banco, as anotações, o progresso, os favoritos e as preferências guardados neste aparelho. O conteúdo curado volta na próxima sincronização; o que é seu, não. Desinstalar o app não faz esta limpeza — o navegador guarda os dados mesmo sem o atalho.`,apagarTudoConfirmar:`Apagar tudo`,apagarTudoFeito:`Dados apagados. Recarregando...`,apagarTudoFalhou:`Não foi possível apagar tudo. Tente de novo.`},atualizacao:{titulo:`Kobi Note atualizado`,texto:`Uma versão nova do app foi baixada.`,acao:`Recarregar`},acoes:{voltar:`Voltar`,tema:`Alternar tema`,idioma:`Idioma`,fechar:`Fechar`,cancelar:`Cancelar`,confirmar:`Confirmar`,salvar:`Salvar`,criar:`Criar`,renomear:`Renomear`,excluir:`Excluir`,editar:`Editar`,substituir:`Substituir`,obrigatorio:`Preencha este campo.`},leitura:{apresentar:`Apresentar (rolagem automática)`,ler:`Ler em voz alta`,pausarLeitura:`Pausar leitura`,retomarLeitura:`Retomar leitura`,pausar:`Pausar`,continuar:`Continuar`,maisDevagar:`Mais devagar`,maisRapido:`Mais rápido`,velocidade:e=>`Vel. ${e}`,compartilhar:`Compartilhar`,copiado:`Conteúdo copiado para a área de transferência.`,semCopiar:`Não foi possível copiar o conteúdo.`},acervo:{meu:`Minha`,semTitulo:`Sem título`,salvando:`Salvando...`,salvoAs:e=>`Salvo às ${e}`,informeTitulo:`Informe um título para salvar`,tituloEConteudo:`Informe o título e o conteúdo para salvar`,excluirTexto:`A ação não pode ser desfeita.`},pasta:{nova:`Nova pasta`,novaTexto:`Como quer chamar a pasta?`,placeholder:`Nome da pasta`,renomear:`Renomear pasta`,excluir:`Excluir pasta`,excluirTexto:`As anotações dela voltam para “Sem pasta”.`,erroVazio:`Dê um nome à pasta.`},anotacoes:{nova:`Nova anotação`,buscar:`Buscar anotações...`,todosModelos:`Todos os modelos`,todas:`Todas`,arquivadas:`Arquivadas`,semAnotacoes:`Nenhuma anotação por aqui. Toque em + para criar a primeira.`,semArquivadas:`Nada arquivado.`,semTitulo:`(sem título)`,semPasta:`Sem pasta`,escolhaModelo:`Escolha um modelo`,tituloPlaceholder:`Título...`,salvando:`Salvando...`,informeTitulo:`Informe um título para salvar`,salvoAs:e=>`Salvo às ${e}`,fixar:`Fixar`,desafixar:`Desafixar`,arquivar:`Arquivar`,restaurar:`Restaurar`,reuniao:`Ir para a reunião (abre a anotação com o modelo do dia)`,excluir:`Excluir anotação`,excluirTexto:`A ação não pode ser desfeita.`,excluida:`Anotação excluída.`},guias:{nova:`Nova guia`,buscar:`Buscar guias...`,vazio:`Nenhuma guia ainda. Toque em + para criar a primeira, ou sincronize.`,tituloPlaceholder:`Título da guia...`,novaTitulo:`Nova guia`,excluir:`Excluir guia`,excluida:`Guia excluída.`},poesia:{nova:`Nova poesia`,buscar:`Buscar poesias...`,vazio:`Nenhuma poesia ainda. Toque em + para criar a primeira, ou sincronize.`,tituloPlaceholder:`Título da poesia...`,novaTitulo:`Nova poesia`,excluir:`Excluir poesia`,excluida:`Poesia excluída.`,favoritar:`Adicionar aos favoritos`,desfavoritar:`Remover dos favoritos`,anterior:`Anterior`,proxima:`Próxima`,sobre:`Sobre estas obras`,referencia:e=>`#${e??``}`,aviso:[`As obras aqui expostas têm um valor artístico, literário, baseado nas crenças das Testemunhas de Jeová. Seu objetivo é enaltecer a Jeová, o verdadeiro Deus e legítimo Soberano Universal, fortalecer a esperança em Suas maravilhosas e incomparáveis promessas, ocupar nossos pensamentos com “tudo que é verdadeiro, tudo que é de séria preocupação, tudo que é justo, tudo que é casto, tudo que é amável, tudo de que se fala bem, tudo que é virtuoso e tudo que é digno de louvor.” (Fil 4:8) A glória por qualquer benefício daqui derivado cabe a Jeová, o dador de todo presente perfeito, inclusive nossa capacidade de pensar e amar.`,`Todos os personagens usados nesta obra são fictícios. Quaisquer nomes de personagens originam-se de nomes de raças felinas e as imagens são meramente ilustrativas.`,`Para saber mais sobre as crenças das Testemunhas de Jeová acesse o site jw.org.`]},receitas:{nova:`Nova receita`,buscar:`Buscar receitas...`,vazio:`Nenhuma receita disponível. Toque em + para criar a primeira, ou sincronize.`,tituloPlaceholder:`Título da receita...`,novaTitulo:`Nova receita`,excluir:`Excluir receita`,excluida:`Receita excluída.`,todas:`Todas`,categoria:`Categoria`,ingredientes:`Ingredientes`,preparo:`Modo de preparo`,ingredientesPlaceholder:`Um ingrediente por linha...`,preparoPlaceholder:`Um passo por linha...`,favoritar:`Adicionar aos favoritos`,desfavoritar:`Remover dos favoritos`},estudo:{intro:`Uma sessão de estudo: escolha o tipo, ore, cronometre e guarde a pérola.`,tipo:`Tipo de estudo`,assunto:`Assunto`,assuntoPlaceholder:`O que você vai estudar...`,semAssunto:`(sem assunto)`,alvo:`Alvo de tempo`,minutos:e=>`${e} min`,de:e=>`de ${e} min`,comecar:`Começar`,oracaoTitulo:`Antes de começar`,oracaoTexto:`Peça a Jeová o espírito santo para entender o que vai ler e para aplicar o que aprender.`,orei:`Orei — começar`,emSessao:`Em estudo`,alvoAtingido:`Alvo de tempo atingido. Siga enquanto o assunto render.`,encerrar:`Encerrar`,descartar:`Descartar`,perola:`Pérola`,perolaIntro:e=>`${e} min de estudo. O que você leva daqui?`,perolaPlaceholder:`Uma ideia, um texto, uma aplicação...`,viraAnotacao:`Virar anotação`,viraAnotacaoFeito:`Anotação criada`,vaiCaderno:`Salvar no caderno`,vaiCadernoFeito:`Salvo no caderno`,salvarSessao:`Salvar sessão`,historico:`Histórico`,totais:(t,n)=>`${e(t,{one:`${t} sessão`,other:`${t} sessões`})} · ${n} de estudo.`,semSessoes:`Nenhuma sessão registrada ainda.`,excluir:`Excluir sessão`},prep:{indice:`Índice de prontidão`,indiceAjuda:`Checklists + autonomia de alimentos`,kits:`Kits de checklist`,estoque:`Estoque de alimentos`,cofre:`Cofre de documentos`,guias:`Guias`,guiasResumo:`Orientações e procedimentos`,cofreResumo:`Documentos criptografados`,contagemKits:t=>e(t,{one:`${t} kit`,other:`${t} kits`}),diasAutonomia:t=>e(t,{one:`${t} dia de autonomia`,other:`${t} dias de autonomia`}),semKits:`Nenhum kit ainda. Toque em + para criar o primeiro checklist.`,novoKit:`Novo checklist`,editarKit:`Editar checklist`,kitSemNome:`Sem nome`,nomeDoKit:`Nome do checklist`,emoji:`Emoji`,emojiAjuda:`Um emoji para reconhecer o kit na lista (opcional).`,itens:`Itens`,descricaoDoItem:`O que levar...`,quantidade:`Quantidade`,observacoes:`Observações`,adicionarItem:`Adicionar item`,removerItem:`Remover item`,removerItemTexto:`O item sai deste checklist.`,kitSalvo:`Checklist salvo.`,excluirKit:`Excluir checklist`,kitExcluido:`Checklist excluído.`,vence:e=>`vence ${e}`,novoItem:`Novo item`,editarItem:`Editar item`,item:`Item`,categoria:`Categoria`,pesoUnitario:`Peso unitário (g)`,kcal:`Calorias por 100 g`,validade:`Validade`,itemSalvo:`Item salvo.`,excluirItem:`Excluir item`,itemExcluido:`Item excluído.`,buscarItens:`Buscar no estoque...`,semEstoque:`O estoque está vazio.`,semEstoqueFiltro:`Nenhum item para esta busca.`,resumoDoItem:(e,t)=>`${e} × ${t} g`,alertas:t=>e(t,{one:`${t} alerta de validade`,other:`${t} alertas de validade`}),vencidoHa:e=>`Vencido há ${e} d`,venceHoje:`Vence hoje`,venceEm:e=>`Vence em ${e} d`,calculadora:`Calculadora de autonomia`,calculadoraAjuda:`Quem come, quanto gasta e quantos são`,faixaEtaria:`Faixa etária`,atividade:`Atividade física`,pessoas:`Pessoas`,maisPessoas:`Mais uma pessoa`,menosPessoas:`Menos uma pessoa`,diasDeAutonomia:`Dias de autonomia`,aguaSugerida:`Água sugerida`,pesoTotal:`Peso total`,metaAutonomia:e=>`${e}% da meta de 30 dias`,necessidadeDiaria:e=>`${e} kcal por dia para o grupo`,logistica:`Logística tática`,diasSemFogo:`Dias sem água/fogo`,diasComFogo:`Dias com cozimento`,itensDeFibra:`Itens de fibra`,vulneravel:`Poucos itens de fibras e vitaminas. Numa autonomia longa isso vira problema de saúde antes de virar problema de caloria.`,configurarBiometria:`Proteger o cofre com a biometria`,biometriaAjuda:`O cofre abre pela biometria do aparelho (a mesma da tela de bloqueio), por um passkey criado só para ele. A chave que cifra cada documento nasce desse gesto e não é gravada em lugar nenhum. Sem o passkey — aparelho trocado, dados do navegador apagados — não há como recuperar o que está guardado aqui.`,semBiometria:`Este navegador não oferece passkey. O cofre precisa dele para existir.`,semPrf:`O autenticador deste aparelho não entrega a chave (extensão PRF). O cofre não pôde ser criado.`,gestoRecusado:`O gesto foi cancelado.`,criarCofre:`Criar o cofre`,destrancarComBiometria:`Destrancar com a biometria`,pin:`PIN`,digitePin:`Digite o PIN.`,pinIncorreto:`PIN incorreto.`,migrarTitulo:`Este cofre ainda abre por PIN.`,migrarTexto:`Passe-o para a biometria: os documentos são recifrados pelo passkey e o PIN deixa de existir.`,migrar:`Passar para a biometria`,cofreMigrado:`Cofre protegido pela biometria. O PIN não existe mais.`,cofreTrancado:`Cofre trancado`,destranqueAjuda:`Ele volta a trancar sozinho quando você sai desta tela.`,destrancar:`Destrancar`,trancar:`Trancar`,guardarDocumento:`Guardar um documento`,nomeDoDocumento:`Nome do documento`,informeNome:`Informe um nome.`,documentoGuardado:`Documento guardado e cifrado.`,semDocumentos:`Nenhum documento guardado ainda.`,renomearDocumento:`Renomear documento`,excluirDocumento:`Excluir documento`,excluirDocumentoTexto:`O documento cifrado é apagado do aparelho. Não há como recuperá-lo.`,documentoExcluido:`Documento excluído.`,falhaAoDecifrar:`Não foi possível decifrar: este documento foi guardado com outra chave.`,semPreVisualizacao:`Este tipo de arquivo não abre aqui. Baixe para ver.`,baixar:`Baixar`},financeiro:{transacoes:`Transações`,novaTransacao:`Nova transação`,transacaoSalva:`Transação salva.`,excluirTransacao:`Excluir transação`,transacaoExcluida:`Transação excluída.`,categorias:`Categorias`,novaCategoria:`Nova categoria`,categoriaSalva:`Categoria salva.`,excluirCategoria:`Excluir categoria`,excluirCategoriaTexto:`As transações dela continuam existindo, mas ficam sem categoria.`,categoriaExcluida:`Categoria excluída.`,recorrencias:`Recorrências`,novaRecorrencia:`Nova recorrência`,recorrenciaSalva:`Recorrência salva.`,excluirRecorrencia:`Excluir recorrência`,excluirRecorrenciaTexto:`Os lançamentos já gerados por ela continuam onde estão.`,recorrenciaExcluida:`Recorrência excluída.`,receber:`Confirmar recebimento`,receberTexto:(e,t)=>`Marcar “${e}” como recebida, no valor de ${t}?`,pagar:`Confirmar pagamento`,pagarTexto:(e,t)=>`Marcar “${e}” como paga, no valor de ${t}?`,estornar:`Desfazer a baixa`,estornarTexto:e=>`“${e}” volta a constar como em aberto.`},calendario:{vista:`Visualização`,vistas:{dia:`Dia`,semana:`Semana`,mes:`Mês`,ano:`Ano`,agenda:`Agenda`},meses:[`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Junho`,`Julho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`],mes:`Mês`,ano:`Ano`,anterior:`Período anterior`,proximo:`Próximo período`,hoje:`Hoje`,novoEvento:`Novo evento`,editarEvento:`Editar evento`,novoAs:(e,t)=>`Novo evento em ${e}, ${t}`,novoEm:e=>`Novo evento em ${e}`,titulo:`Título`,tituloPlaceholder:`Ex.: Reunião do meio de semana`,tipo:`Tipo`,diaInteiro:`Dia inteiro`,dataInicio:`Data de início`,horaInicio:`Hora de início`,dataFim:`Data de fim`,horaFim:`Hora de fim`,descricao:`Descrição`,descricaoPlaceholder:`Detalhes (opcional)...`,eventoSalvo:`Evento salvo.`,excluirEvento:`Excluir evento`,eventoExcluido:`Evento excluído.`,eventos:t=>e(t,{one:`${t} evento`,other:`${t} eventos`}),semEventos:`Nenhum evento nesta semana.`,tipos:`Tipos de evento`,novoTipo:`Novo tipo`,tipoNome:`Nome`,cor:`Cor`,icone:`Ícone`,marcaEspecial:`Contar no “próximo especial”`,especial:`Especial`,tipoSemNome:`Sem nome`,excluirTipo:`Excluir tipo`,tipoEmUsoTitulo:`Tipo em uso`,tipoEmUsoTexto:`Este tipo tem eventos e não pode ser excluído.`,dataInvalida:`A data de início não é uma data válida.`,eventoNaoSalvo:`O evento não pôde ser salvo. Confira os campos e tente de novo.`,eventoNaoExcluido:`O evento não pôde ser excluído.`,tipoNaoSalvo:`O tipo não pôde ser salvo.`,tipoNaoExcluido:`O tipo não pôde ser excluído. Ele pode ter ganhado eventos agora há pouco.`},ministerio:{esfriando:(t,n)=>e(t,{one:`${t} estudo está esfriando (${n}+ dias).`,other:`${t} estudos estão esfriando (${n}+ dias).`}),verEstudos:`Ver`,lembrete:(e,t)=>`Relatório de ${e} ainda ${t?`não foi enviado`:`não foi feito`}.`,preencher:`Preencher`,atalhoRelatorios:`Relatórios`,atalhoRelatoriosSub:e=>`${e} no total`,atalhoEstudos:`Estudos`,atalhoEstudosSub:e=>`${e} ativos`,atalhoServico:`Fazer mais`,atalhoServicoSub:`Planejar as horas e virar meta`,ultimoRelatorio:`Último relatório`,participou:`Participou`,naoParticipou:`Não participou`,estudosDoRelatorio:e=>`${e} estudos`,enviado:`Enviado`,pendente:`Pendente`,contadores:`Contadores do mês`,zerar:`Zerar contadores`,zerarTexto:`Os cinco contadores deste mês voltam a zero. Quer continuar?`,tempo:`Tempo`,estudos:`Estudos`,revisitas:`Revisitas`,publicacoes:`Publicações`,videos:`Vídeos`,maisUmaHora:`+1h`,aumentar:e=>`Aumentar ${e}`,diminuir:e=>`Diminuir ${e}`,gerarRelatorio:`Gerar relatório do mês`,obsRevisitas:e=>`Revisitas: ${e}`,obsPublicacoes:e=>`Publicações: ${e}`,obsVideos:e=>`Vídeos: ${e}`,obsTempo:e=>`Tempo: ${e}`,novoRelatorio:`Novo relatório`,editarRelatorio:`Editar relatório`,semRelatorios:`Nenhum relatório ainda.`,mes:`Mês`,ano:`Ano`,tipoPublicador:`Tipo de publicador`,participacao:`Participou no ministério`,horas:`Horas`,metaHoras:`Meta de horas`,estudosBiblicos:`Estudos bíblicos`,observacoes:`Observações`,compartilhar:`Compartilhar`,marcarEnviado:`Marcar como enviado`,marcarPendente:`Marcar como pendente`,excluirRelatorio:`Excluir relatório`,relatorioSalvo:`Relatório salvo.`,relatorioExcluido:`Relatório excluído.`,resumoRelatorio:(e,t,n,r)=>`${e} · ${t?`participou`:`não participou`} · ${n} estudos${r}`,sufixoHoras:e=>` · ${e}h`,relatorioDe:e=>`📋 Relatório — ${e}`,linhaTipo:e=>`Tipo: ${e}`,linhaParticipacao:e=>`Participou no ministério: ${e?`Sim`:`Não`}`,linhaHoras:e=>`Horas: ${e}`,linhaEstudos:e=>`Estudos bíblicos: ${e}`,linhaObservacoes:e=>`Observações: ${e}`,novoEstudo:`Novo estudo`,editarEstudo:`Editar estudo`,buscarEstudos:`Buscar estudos...`,semEstudos:`Nenhum estudo aqui.`,semEstudosFiltro:`Nenhum estudo para esta busca.`,nome:`Nome`,semNome:`Sem nome`,contato:`Contato`,contatoPlaceholder:`Telefone, e-mail...`,endereco:`Endereço`,publicacaoAtual:`Publicação atual`,publicacaoPlaceholder:`Publicação usada no estudo`,diaSemana:`Dia da semana`,escolhaDia:`Escolha o dia...`,horario:`Horário`,notas:`Notas`,excluirEstudo:`Excluir estudo`,excluirEstudoTexto:`A linha do tempo deste estudo é apagada junto.`,estudoSalvo:`Estudo salvo.`,estudoExcluido:`Estudo excluído.`,informeNome:`Dê um nome ao estudo.`,seloEsfriando:`Esfriando`,ultimoEstudo:`Último estudo:`,parouEm:`Parou em:`,nenhumRegistro:`Nenhum registro`,hoje:`Hoje`,ontem:`Ontem`,haDias:e=>`Há ${e} dias`,estudoDe:e=>`📖 ${e}`,linhaPublicacao:e=>`Publicação: ${e}`,linhaOndeParou:e=>`Onde parou: ${e}`,linhaDia:(e,t)=>`Dia: ${e} ${t}`,linhaContato:e=>`Contato: ${e}`,linhaEndereco:e=>`Endereço: ${e}`,linhaDoTempo:`Linha do tempo`,registrarEstudo:`Registrar estudo`,editarRegistro:`Editar registro`,semRegistros:`Nenhum registro ainda. Toque em + após cada estudo.`,data:`Data`,ondeParou:`Onde parou`,ondeParouPlaceholder:`Ex.: lição 12, parágrafo 5`,informeOndeParou:`Informe onde o estudo parou.`,comentario:`Comentário`,comentarioPlaceholder:`Como foi o estudo, dúvidas, próximos passos...`,excluirRegistro:`Excluir registro`,registroSalvo:`Registro salvo.`,registroExcluido:`Registro excluído.`},jogo:{restantes:`Restantes`,acertos:`Acertos`,erros:`Erros`,partidas:`Partidas`,xpDisponivel:`XP disponível`,modo:`Modo`,modos:{estudo:`Estudo`,desafio:`Desafio`},desafioAjuda:`Timer por pergunta · bônus de XP por velocidade e sequência`,dificuldade:`Dificuldade`,dificuldades:[`Todas`,`Fácil`,`Médio`,`Difícil`],jogar:`Jogar`,semBanco:`Sem perguntas — sincronize`,semPerguntas:`Esta dificuldade não tem perguntas suficientes (mínimo 2). Escolha outra ou sincronize mais perguntas.`,tudoConcluido:`Você já respondeu todas as perguntas desta dificuldade!`,reiniciar:`Reiniciar`,reiniciarTitulo:`Reiniciar perguntas`,reiniciarTexto:`Zera as perguntas já respondidas (seu XP é mantido). Quer continuar?`,encerrar:`Encerrar quiz`,segundos:e=>`${e}s`,pausadoSelo:`pausado`,pausar:`Pausar`,retomar:`Retomar`,dica:e=>`Dica (${e} XP)`,explicacao:`Explicação`,feedbackCorreto:e=>`Correto! +${e} XP`,feedbackIncorreto:`Resposta incorreta`,feedbackTempo:`Tempo esgotado!`,proxima:`Próxima`,verResultado:`Ver resultado`,tituloResultado:`Resultado`,resultados:{perfeito:`Perfeito! 🎉`,excelente:`Excelente!`,muitoBem:`Muito bem!`,continue:`Continue praticando!`,naoDesista:`Não desista, tente de novo!`},acertosDe:(e,t,n)=>`${e} de ${t} acertos (${n}%)`,xpGanho:`XP ganho`,nivel:`Nível`,xpSaldo:`XP saldo`,anotarNoCaderno:`Anotar no Caderno de Estudo`,cadernoReferencia:`Jogo Língua Pura`,cadernoTitulo:`Jogo Língua Pura`,cadernoConteudo:(e,t,n)=>`Acertei ${e} de ${t} (${n}%). O que aprendi:\n`,jogarDeNovo:`Jogar de novo`,inicio:`Início`},leituraBiblia:{visualizacao:`Visualização`,visoes:{canonica:`Canônica`,cronologica:`Cronológica`,escritor:`Escritor`,celebracao:`Celebração`},visoesAjuda:{canonica:`Ordem canônica: Gênesis a Apocalipse`,cronologica:`Pela estimativa de quando cada livro foi escrito`,escritor:`Agrupada por escritor`,celebracao:`Leitura para a época da Celebração da morte de Cristo`},progressoGeral:`Progresso geral`,capitulos:(e,t)=>`${e} de ${t} capítulos`,capituloAbrev:(e,t)=>`${e}/${t} cap.`,livros:(e,t)=>`${e} de ${t} livros`,livroInteiro:`Livro inteiro`,limpar:`Limpar`,roteiro:`Roteiro da Celebração`,roteiroNota:`Acontecimentos da última semana de Jesus na Terra (Nisã 8 a 16) — leitura para a época da Celebração da morte de Cristo.`,trechos:(e,t)=>`${e} de ${t} trechos lidos`},servico:{intro:`Uma meta anual não cabe na cabeça de ninguém; "duas horas e meia, três vezes por semana" cabe. Escolha o alvo e os dias, e veja o que ele pede de cada saída.`,modalidade:`Modalidade de serviço`,semCota:`sem cota de horas`,horasMes:e=>`${e} h por mês`,alvo:`Alvo de horas no período`,alvoValor:e=>`${e} h`,prazo:`Período`,prazoValor:t=>e(t,{one:`${t} mês`,other:`${t} meses`}),mediaMes:e=>`Média de ${e} por mês.`,diasTitulo:`Dias em que pretendo sair`,semDias:`Escolha ao menos um dia da semana para a conta ter onde cair.`,gradeTitulo:`O que isso significa`,porSaida:`Em cada saída`,porSemana:`Por semana`,porMes:`Por mês`,porAno:`No ritmo de um ano`,saidas:`Saídas no período`,saidasValor:t=>e(t,{one:`${t} saída`,other:`${t} saídas`}),inviavel:`Mais de dez horas numa só saída — o alvo não cabe nos dias escolhidos. Acrescente dias, alongue o período ou reduza o alvo.`,mesAnterior:`Mês anterior`,mesSeguinte:`Próximo mês`,resumoDoMes:(t,n)=>e(t,{one:`${t} saída neste mês, para ${n}.`,other:`${t} saídas neste mês, para ${n}.`}),registrar:`Registrar como meta`,gravando:`Gravando...`,gravada:`Meta registrada. Ela acompanha sozinha as horas dos seus relatórios.`,naoGravada:`A meta não pôde ser registrada. Tente de novo.`,verMetas:`Ver metas`,tituloDaMeta:e=>`${e}: horas de campo`,fonteAviso:`As horas de cada modalidade são um ponto de partida para preencher o campo, não uma exigência afirmada por este app: confirme sempre a instrução vigente. Referências no jw.org:`,referencias:[{rotulo:`🌐 Alcance mais no serviço a Jeová`,url:`https://www.jw.org/finder?wtlocale=T&docid=201999284`},{rotulo:`🌐 Você pode aumentar sua participação?`,url:`https://www.jw.org/finder?wtlocale=T&docid=201998083`}]},metas:{nova:`Nova meta`,editar:`Editar meta`,buscar:`Buscar metas...`,filtros:{ativas:`Ativas`,concluidas:`Concluídas`,todas:`Todas`},resumo:(t,n)=>`${t} em andamento · ${e(n,{one:`${n} concluída`,other:`${n} concluídas`})}.`,vazio:`Nenhuma meta ainda. Toque em + para criar a primeira.`,semFiltro:`Nenhuma meta para este filtro.`,titulo:`Título`,tituloPlaceholder:`O que você quer alcançar...`,informeTitulo:`Dê um título à meta.`,categoria:`Categoria`,ativo:`Categoria do Financeiro`,alvo:e=>`Alvo (${e})`,automatica:`Automática`,automaticaAjuda:`O progresso vem do módulo de origem — não é digitado aqui.`,inicio:`Início`,prazoFinal:`Prazo final`,prazo:e=>`prazo ${e}`,aumentar:`Aumentar o progresso`,diminuir:`Diminuir o progresso`,concluir:`Concluir`,reabrir:`Reabrir`,salva:`Meta salva.`,excluir:`Excluir meta`,excluida:`Meta excluída.`},perfil:{cartao:`Cartão de visita`,secretario:`Secretário da Congregação`,saude:`Saúde (ICE)`,gestacao:`Gestação`,dpa:`Diretrizes de sangue (DPA)`,emergencia:`Contato de emergência`,colih:`CoLiH`,identificacao:`Identificação complementar`,nome:`Nome completo`,telefone:`Telefone`,email:`E-mail`,link:`Link pessoal`,comentario:`Observação (nota aparece no contato)`,telefoneDuvidoso:`Este telefone não parece completo — dá para salvar assim mesmo.`,emailDuvidoso:`Este e-mail não parece completo — dá para salvar assim mesmo.`,cpfDuvidoso:`Este CPF não confere — dá para salvar assim mesmo.`,dataDuvidosa:`Esta data não existe no calendário — dá para salvar assim mesmo.`,tipo_sanguineo:`Tipo sanguíneo`,selecione:`Selecione...`,doador:`Doador de órgãos`,alergias:`Alergias`,medicamentos:`Medicamentos em uso`,observacoes:`Observações médicas`,gestante:`Gestante`,meses:`Meses de gestação`,mes:t=>e(t,{one:`${t} mês`,other:`${t} meses`}),mesesGestacao:t=>e(t,{one:`${t} mês de gestação`,other:`${t} meses de gestação`}),parto:`Data prevista do parto`,partoEm:e=>`parto previsto ${e}`,recusa:`Recuso transfusão de sangue`,naoApliqueSangue:`NÃO APLIQUE SANGUE`,portadorDiretriz:`Portador de diretriz de recusa de transfusão.`,fracoes:`Frações aceitas por consciência`,dpaAssinado:`Cartão DPA físico atualizado e assinado em`,dpa_assinado_em:e=>`DPA assinado em ${e}`,dpaRenovar:e=>`· renovar em ${e} dias`,dpaVencido:`· vencido`,contatoNome:`Nome do contato`,contatoTelefone:`Telefone do contato`,sus:`Cartão SUS`,cpf:`CPF do titular`,upa:`UPA / hospital de referência`,sim:`Sim`,gestanteMaiusculo:`GESTANTE`,tituloCartao:`Cartão de contato`,tituloFicha:`Ficha de emergência`,semNome:`Sem nome`,semCartao:`Preencha nome e telefone no perfil para gerar o cartão.`,qrAlt:`QR com o cartão de contato (vCard)`,semFicha:`Sem dados de emergência. Preencha no perfil.`},cronologia:{intro:`De um lado a cronologia bíblica, do outro os fatos da história. Cada evento tem o link da fonte de onde saiu. Os cards “históricos” vêm de acervos oficiais fora de jw.org (UNESCO, Louvre, ONU, arquivos, museus, etc.) e seguem a datação acadêmica convencional.`,buscar:`Buscar na linha do tempo...`,limpar:`Limpar filtros`,fonte:`Ver a fonte`,eventos:t=>e(t,{one:`${t} evento`,other:`${t} eventos`}),vazio:`A linha do tempo ainda não foi sincronizada. Aguarde novidades em breve.`,semFiltro:`Nenhum evento para este filtro.`},imite:{titulo:`Imite a Sua Fé`,subtitulo:`Um atrito por cartão, e a pergunta que o desarma: e se a intenção dele fosse boa? A lente certa (o modo como vemos as coisas) muda a história que contamos a nós mesmos. Errar a lente não custa nada — é nas lentes erradas que está o ensino.`,vazio:`Nenhum cartão disponível ainda. Aguarde novidades em breve.`,cenario:`O atrito`,julgamento:`O que passa pela cabeça`,pergunta:`Qual destas lentes explica melhor a intenção do outro?`,espelhoDica:`No fim do cartão há uma pergunta sobre você. O que você escrever ali fica no Caderno de Estudo.`,comecar:`Escolher a lente`,conferir:`Confirmar a lente`,acerto:`É essa. Repare no que muda quando a intenção é lida assim.`,erro:`Essa lente ainda julga a pessoa, e não a intenção. Olhe de novo.`,lente:`A lente da boa intenção`,exemplos:`Quem mais fez isso na Bíblia`,lerFonte:`Ler a fonte no jw.org`,espelhoTitulo:`O Reflexo no Espelho`,espelhoPlaceholder:`Responda com sinceridade — ninguém além de você vai ler...`,seloEspelho:`Espelho Escrito`,seloFeito:`Selo do Espelho Escrito conquistado!`,outrosCartoes:`Outros cartões`,inicio:`Início`},principios:{titulo:`Princípios Bíblicos`,subtitulo:`O que a Bíblia diz sobre as decisões do dia a dia — a frase que resume, os textos que a sustentam e como ela se parece numa terça-feira comum.`,vazio:`Nenhum princípio disponível ainda. Aguarde novidades em breve.`,semResultado:`Nenhum princípio para esta busca.`,buscar:`Buscar por assunto ou texto bíblico...`,favoritos:`Seus favoritos`,favoritar:`Marcar como favorito`,desfavoritar:`Tirar dos favoritos`,comAnotacao:`Você escreveu sobre este princípio`,lido:`Você já leu este princípio`,areaLida:`Você leu todos os princípios desta área`,progresso:`Quantos princípios do acervo você já leu`,porQue:`Por que isso existe`,naPratica:`Como isso se parece num dia comum`,lerFonte:`Ler o texto na Bíblia on-line`,paraRefletir:`Para refletir`,reflexaoPlaceholder:`Responda com sinceridade — ninguém além de você vai ler...`,outros:`Outros princípios`,inicio:`Início`},faq:{titulo:`Perguntas Frequentes`,subtitulo:`Uma pergunta por vez, das que aparecem na porta, no trabalho, na mesa de domingo. Primeiro a cena e a resposta que vem de impulso; depois as lentes — os ângulos por onde dá para responder. Errar a lente não custa nada: é nelas que está o ensino.`,vazio:`Nenhuma pergunta disponível ainda. Aguarde novidades em breve.`,semResultado:`Nenhuma pergunta para esta busca.`,buscar:`Buscar por pergunta ou texto bíblico...`,favoritos:`Seus favoritos`,favoritar:`Marcar como favorito`,desfavoritar:`Tirar dos favoritos`,respondida:`Você já fez esta pergunta`,categoriaConcluida:`Você fez todas as perguntas desta categoria`,progresso:`Quantas perguntas do acervo você já fez`,cenario:`Onde a pergunta aparece`,impulso:`O que vem primeiro à cabeça`,enunciado:`Qual destas lentes responde de verdade o que foi perguntado?`,preparoDica:`No fim há um espaço para a sua resposta, com as suas palavras. O que você escrever ali fica no Caderno de Estudo.`,comecar:`Escolher a lente`,conferir:`Confirmar a lente`,acerto:`É essa. Repare no que ela abre em vez de fechar.`,erro:`Essa lente responde outra coisa, ou encerra a conversa. Olhe de novo.`,aResposta:`A resposta pela Bíblia`,exemplos:`Quem respondeu assim na Bíblia`,lerArtigo:`Ler o assunto no jw.org`,paraPreparar:`Com as suas palavras`,respostaPlaceholder:`Escreva como você diria isso — ninguém além de você vai ler...`,seloPalavras:`Você escreveu a sua resposta`,seloFeito:`Selo “Com as Suas Palavras” conquistado!`,outras:`Outras perguntas`,inicio:`Início`},criacao:{vazio:`Nenhum módulo disponível ainda. Aguarde novidades em breve.`,acerto:`Isso mesmo!`,erro:`Ainda não. Observe e tente de novo.`,ajuste:`Quase lá — ajuste até alcançar a meta.`,escolha:`Escolha uma opção antes de verificar.`,equilValorX:`Valor do x`,equilPendeDir:`A balança pende para a direita: o lado do x está leve. Aumente o x.`,equilPendeEsq:`A balança pende para a esquerda: o lado do x está pesado. Diminua o x.`,equilOk:e=>`Equilíbrio! Os dois lados pesam ${e}. Você achou o x que nivela a balança.`,paresErro:`Reveja: marque exatamente as colunas com pareamento errado (A-T, C-G).`,rotaIncompleta:`Visite todas as flores antes de verificar.`,rotaOtima:`Rota mais curta encontrada!`,rotaLonga:`Há um caminho mais curto. Tente recomeçar.`,orbInforme:`Ajuste a velocidade de impulso e toque em Lançar.`,orbVoando:`Em trajetória...`,orbCai:`Velocidade baixa demais: o corpo caiu em direção ao Sol.`,orbEscapa:`Velocidade alta demais: o corpo escapou para o espaço.`,orbAjuste:`Ainda não. Ajuste a velocidade e lance de novo até obter uma órbita estável.`,escudoFraco:`Campo fraco: o vento solar ainda atinge a Terra.`,escudoOk:`Campo forte: as partículas são desviadas para os polos (auroras) ✔`,conceito:`Conceito`,desafio:`Desafio`,ampliar:`Toque para ampliar`,fechar:`Fechar`,fonte:`Fonte: jw.org`,lerFonte:`Ler a fonte no jw.org`,comecar:`Começar`,verificar:`Verificar`,avancar:`Confirmar e avançar`,concluirMapa:`Concluir o mapa`,concluir:`Concluir`,leiaReflexao:`Leia a reflexão a seguir.`,concluido:`Módulo concluído — leia a reflexão abaixo.`,diligenteSelo:`Estudo Diligente`,diligenteDica:`Ao concluir, escreva no Caderno o que você aprendeu para ganhar o selo de Estudo Diligente.`,diligenteFeito:`Selo de Estudo Diligente conquistado!`,reflexaoTitulo:`Teve um Projeto?`,reflexaoEntenda:`O que você acabou de entender`,cadernoTitulo:`Caderno do Investigador`,cadernoPlaceholder:`Escreva, com suas palavras, o que este módulo lhe ensinou sobre a sabedoria do Criador...`,outrosModulos:`Outros módulos`,inicio:`Início`,recomecar:`Recomeçar`,lancar:`Lançar`,girar:`Arraste para girar · pinça/scroll para aproximar.`,atomoDica:`Um próton por vez: veja as camadas se refazerem a cada elemento.`,proximoNumero:`Escolha o próximo número`,ordenarDica:`Toque os eventos na ordem em que aconteceram (toque de novo para tirar).`,paresDica:`Toque nas colunas cujo pareamento está errado (válidos: A-T e C-G).`,rotaDica:`A abelha sai da colmeia, visita todas as flores e volta. Toque nas flores na ordem que faz o caminho mais curto (toque de novo para desfazer).`,rotaMedida:(e,t)=>`Seu caminho: ${e}  ·  menor possível: ${t}`,ciclosRecomecar:`Começar de novo`,explorarDica:`Toque cada visão para abri-la.`,explorarDesdobra:`desdobra`,gaivotaMesmo:`Mesma direção`,gaivotaOposto:`Direções opostas`,gaivotaVolta:`Volta ao corpo`,gaivotaPe:`Chega ao pé`,gaivotaCalor:`Calor recuperado`,proteinaRecorde:`Recorde`,proteinaAgora:`Agora`,proteinaRelogio:`Relógio da improbabilidade`,proteinaNecessarias:`Tentativas necessárias`,proteinaFaltam:`Ainda faltam`,proteinaTempo:`A 1 bilhão de tentativas por segundo, o cálculo levaria`,proteinaAnos:`anos para concluir.`,ciclosFechados:`ciclos fechados`,visoes:`visões`,camadas:`camadas`},caderno:{ver:`Ver no Caderno de Estudo`,intro:`Reúne o que você escreve em Entenda Melhor, Teve um Projeto?, Momento de Estudo e o jogo Língua Pura — e as suas anotações avulsas.`,nova:`Nova anotação`,editar:`Editar anotação`,buscar:`Buscar...`,todasOrigens:`Todas as origens`,origem:`Origem`,titulo:`Título`,tituloPlaceholder:`Um título curto (opcional)`,referencia:`Referência`,referenciaPlaceholder:`Módulo, texto bíblico, assunto... (opcional)`,conteudo:`O que você aprendeu`,conteudoPlaceholder:`Escreva, com suas palavras, o que este estudo lhe ensinou...`,semConteudo:`Escreva o que você aprendeu antes de salvar.`,vazio:`Seu caderno está vazio. Anote o que aprender nos estudos.`,semFiltro:`Nenhuma anotação para este filtro.`,salva:`Anotação salva.`,excluir:`Excluir anotação`,excluida:`Anotação excluída.`},tutorial:{intro:`Como usar o Kobi Note — uma explicação por módulo.`,visaoGeral:`Visão geral`,modulos:`Módulos`,vazio:`O tutorial ainda não foi sincronizado. Aguarde novidades em breve.`,semTopico:`Este módulo ainda não tem um tópico escrito no tutorial.`},notas:{titulo:`Notas de rodapé`,voltar:`Voltar ao ponto da nota`}},Ot=`modulepreload`,kt=function(e,t){return new URL(e,t).href},At={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=kt(t,n),t=s(t),t in At)return;At[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ot,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},jt=[{tag:`pt-BR`,nome:`Português (Brasil)`},{tag:`en`,nome:`English`,carregar:()=>b(()=>import(`./en-CJ6AFmXZ.js`),__vite__mapDeps([0,1]),import.meta.url)},{tag:`es-ES`,nome:`Español (España)`,carregar:()=>b(()=>import(`./es-ES-DiVHTD8f.js`),__vite__mapDeps([2,1]),import.meta.url)}],Mt=`note_idioma`,Nt=Dt,Pt=jt[0]?.tag??`pt-BR`,x=Nt;function Ft(){let e=null;try{e=localStorage.getItem(Mt)}catch{}if(e!==null&&jt.some(({tag:t})=>t===e))return e;let t=navigator.language?.toLowerCase()??``;return jt.find(({tag:e})=>e.toLowerCase().split(`-`)[0]===t.split(`-`)[0])?.tag??Pt}function It(e,t){let n={...e};for(let[r,i]of Object.entries(t)){let t=e[r];n[r]=typeof t==`object`&&t&&!Array.isArray(t)?{...t,...i}:i}return n}async function Lt(e){let n=jt.find(t=>t.tag===e);if(n===void 0)throw Error(`idioma desconhecido: ${e} (ver src/i18n/idioma.ts)`);Nt=n.carregar===void 0?Dt:It(Dt,(await n.carregar()).default),x=Nt,Pt=n.tag,t(n.tag),document.documentElement.lang=n.tag;try{localStorage.setItem(Mt,n.tag)}catch{}}var Rt=[{id:`prep-kits`,get rotulo(){return x.prep.kits},icone:`clipboard-list`,cor:`#dc3545`,rota:`prep/kits`},{id:`prep-estoque`,get rotulo(){return x.prep.estoque},icone:`package`,cor:`#e8590c`,rota:`prep/estoque`},{id:`prep-cofre`,get rotulo(){return x.prep.cofre},icone:`lock`,cor:`#495057`,rota:`prep/cofre`}],zt=[{id:`anotacoes`,get rotulo(){return x.modulos.anotacoes},icone:`notes`,cor:`#0d6efd`},{id:`guias`,get rotulo(){return x.modulos.guias},icone:`map-2`,cor:`#20c997`},{id:`poesia`,get rotulo(){return x.modulos.poesia},icone:`feather`,cor:`#0dcaf0`},{id:`receitas`,get rotulo(){return x.modulos.receitas},icone:`chef-hat`,cor:`#fd7e14`},{id:`jogo`,get rotulo(){return x.modulos.jogo},icone:`device-gamepad-2`,cor:`#2f9e44`},{id:`criacao`,get rotulo(){return x.modulos.criacao},icone:`compass`,cor:`#0ca678`},{id:`entenda`,get rotulo(){return x.modulos.entenda},icone:`bulb`,cor:`#fd7e14`},{id:`imite`,get rotulo(){return x.modulos.imite},icone:`heart-handshake`,cor:`#d63384`},{id:`principios`,get rotulo(){return x.modulos.principios},icone:`scale`,cor:`#c92a2a`},{id:`faq`,get rotulo(){return x.modulos.faq},icone:`message-question`,cor:`#4263eb`},{id:`cronologia`,get rotulo(){return x.modulos.cronologia},icone:`timeline`,cor:`#82c91e`},{id:`caderno`,get rotulo(){return x.modulos.caderno},icone:`book-2`,cor:`#f59f00`},{id:`prep`,get rotulo(){return x.modulos.prep},icone:`shield-check`,cor:`#dc3545`},{id:`financeiro`,get rotulo(){return x.modulos.financeiro},icone:`cash`,cor:`#198754`},{id:`metas`,get rotulo(){return x.modulos.metas},icone:`target`,cor:`#0d6efd`,noPainel:!0},{id:`ministerio`,get rotulo(){return x.modulos.ministerio},icone:`users`,cor:`#0ca678`},{id:`servico`,get rotulo(){return x.modulos.servico},icone:`trending-up`,cor:`#0dcaf0`,dentroDe:`ministerio`},{id:`estudo`,get rotulo(){return x.modulos.estudo},icone:`hourglass`,cor:`#7048e8`},{id:`leitura`,get rotulo(){return x.modulos.leitura},icone:`book`,cor:`#1c7ed6`},{id:`calendario`,get rotulo(){return x.modulos.calendario},icone:`calendar`,cor:`#0dcaf0`},{id:`perfil`,get rotulo(){return x.modulos.perfil},icone:`id-badge-2`,cor:`#dc3545`},{id:`tutorial`,get rotulo(){return x.modulos.tutorial},icone:`help-circle`,cor:`#f59f00`},{id:`sobre`,get rotulo(){return x.modulos.sobre},icone:`info-circle`,cor:`#6c757d`}],Bt=[{id:`dia`,painel:`hoje`,itens:[{tipo:`modulo`,id:`anotacoes`},{tipo:`modulo`,id:`calendario`},{tipo:`modulo`,id:`ministerio`}]},{id:`numeros`,painel:`indicadores`,itens:[]},{id:`estudo`,get titulo(){return x.secoes.estudo},itens:[{tipo:`modulo`,id:`leitura`},{tipo:`modulo`,id:`estudo`},{tipo:`modulo`,id:`imite`},{tipo:`modulo`,id:`principios`},{tipo:`modulo`,id:`faq`},{tipo:`modulo`,id:`jogo`},{tipo:`modulo`,id:`entenda`},{tipo:`modulo`,id:`criacao`},{tipo:`modulo`,id:`cronologia`},{tipo:`modulo`,id:`poesia`},{tipo:`modulo`,id:`caderno`}]},{id:`prep`,get titulo(){return x.secoes.prep},painel:`prontidao`,itens:[{tipo:`atalho`,id:`prep-kits`},{tipo:`atalho`,id:`prep-estoque`},{tipo:`atalho`,id:`prep-cofre`},{tipo:`modulo`,id:`guias`}]},{id:`extras`,get titulo(){return x.secoes.extras},itens:[{tipo:`modulo`,id:`receitas`}]},{id:`pessoal`,get titulo(){return x.secoes.pessoal},itens:[{tipo:`modulo`,id:`financeiro`},{tipo:`modulo`,id:`perfil`}]},{id:`aplicativo`,get titulo(){return x.secoes.aplicativo},itens:[{tipo:`modulo`,id:`tutorial`},{tipo:`acao`,id:`sincronizar`},{tipo:`acao`,id:`convite`},{tipo:`modulo`,id:`sobre`}]}],Vt=new Map(zt.map(e=>[e.id,e])),Ht=new Map(Rt.map(e=>[e.id,e]));function Ut(e){return Vt.get(e)}function Wt(e){return Ht.get(e)}function Gt(e){return c.features[e]===!0}function Kt(){let[e=``,t=``]=location.hash.replace(/^#\/?/,``).split(`?`),n=e.split(`/`).filter(e=>e!==``);return{modulo:n[0]??`home`,args:n.slice(1),query:new URLSearchParams(t)}}function qt(e){location.hash=e.startsWith(`#`)?e:`#/${e.replace(/^\//,``)}`}function Jt(e){addEventListener(`hashchange`,()=>e(Kt())),e(Kt())}var Yt=()=>{};function Xt(e){Yt=e}function Zt(){Yt()}var Qt=`false`,$t=`false`,en=Qt===`true`,tn=$t===`true`;function nn(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,en||u?.()};async function ee(){if(`serviceWorker`in navigator){if(c=await b(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[],import.meta.url).then(({Workbox:e})=>new e(`./sw.js`,{scope:`./`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!tn){if(en)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`./sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=ee(),d}function rn(){let e=nn({onNeedRefresh(){an(()=>{e(!0)})}})}function an(e){let t=Object.assign(document.createElement(`kk-alert`),{variant:`primary`,closable:!0}),n=document.createElement(`kk-icon`);n.setAttribute(`slot`,`icon`),n.setAttribute(`name`,`sparkles`);let r=document.createElement(`strong`);r.textContent=x.atualizacao.titulo;let i=document.createElement(`kk-button`);i.setAttribute(`size`,`small`),i.setAttribute(`variant`,`primary`),i.textContent=x.atualizacao.acao,i.addEventListener(`click`,e),t.append(n,r,document.createTextNode(` ${x.atualizacao.texto} `),i),document.body.append(t),t.toast()}var on=10,sn=100,cn=e=>new Promise(t=>setTimeout(t,e));async function ln(){let e=await navigator.storage?.getDirectory?.();if(e!==void 0)for(let t=0;t<on;t++){let t=[];for await(let n of e.keys())t.push(n);if(t.length===0)return;let n=!1;for(let r of t)try{await e.removeEntry(r,{recursive:!0})}catch{n=!0}if(!n)return;await cn(sn)}}function un(e){return new Promise(t=>{let n=indexedDB.deleteDatabase(e);n.onsuccess=()=>t(!0),n.onerror=()=>t(!1),n.onblocked=()=>t(!1)})}async function dn(){for(let e=0;e<on;e++){let e=(await indexedDB.databases?.()??[]).map(({name:e})=>e).filter(e=>e!==void 0);if(e.length===0||(await Promise.all(e.map(un))).every(Boolean))return;await cn(sn)}}async function fn(){let e=await navigator.serviceWorker?.getRegistrations?.()??[];await Promise.all(e.map(e=>e.unregister()));let t=await caches?.keys?.()??[];await Promise.all(t.map(e=>caches.delete(e)))}async function pn(){n(),await ln(),await fn(),await dn(),localStorage.clear(),sessionStorage.clear()}var mn=`note_versoes_curado`,hn={perguntas:`perguntas`,poesias:`poesias`,receitas:`receitas`,guias:`guias`,kits:`kits`,criacao_modulos:`criacao_modulos`,imite_cartoes:`imite_cartoes`,principios:`principios`,faq:`faq`,cronologia:`cronologia`,anotacao_modelos:`anotacao_modelos`,estoque_catalogo:`estoque_catalogo`,tutorial:`tutorial`};async function gn(e,t){return t.registros===void 0||t.registros===0||await i(e).contar().then(e=>e>0).catch(()=>!0)}function _n(){try{return JSON.parse(localStorage.getItem(mn)??`{}`)}catch{return{}}}async function vn(e){try{let t=await fetch(`${c.apiEndpoint}/${e}`,{cache:`no-cache`});return t.ok?await t.json():void 0}catch{return}}async function yn(){let e=await vn(`manifesto.json`);if(e===void 0)return{ok:!1,motivo:`offline`};let t=e.modulos;if(t===void 0)return{ok:!1,motivo:`sem-manifesto`};let n=_n(),r=[];for(let[e,o]of Object.entries(t)){let t=hn[e];if(t===void 0||!a.includes(t)||o.versao!==void 0&&n[e]===o.versao&&await gn(t,o))continue;let s=await vn(`${e}.json`);s!==void 0&&(await i(t).substituirTudo(s),o.versao!==void 0&&(n[e]=o.versao),r.push(e))}return localStorage.setItem(mn,JSON.stringify(n)),await xn(`categorias_financeiro`,`categorias.json`).catch(bn),await Cn().catch(bn),{ok:!0,atualizados:r}}function bn(e){console.warn(`semeadura do padrão de fábrica falhou:`,e)}async function xn(e,t){let n=i(e);if((await n.todos().catch(()=>[])).length>0)return;let r=await vn(t);if(r!==void 0)for(let e of r){let{publicar:t,...r}=e;await n.salvar(r)}}var Sn;function Cn(){return Sn??=xn(`calendario_tipos`,`calendario_tipos.json`).catch(e=>{throw Sn=void 0,e}),Sn}var wn=`note_tema`,Tn=`#ffffff`,En=`#0f1115`;function Dn(){return document.documentElement.classList.contains(`kk-theme-dark`)?`escuro`:`claro`}function On(e){let t=e===`escuro`,n=document.documentElement.classList;n.toggle(`kk-theme-dark`,t),n.toggle(`kk-theme-light`,!t),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,t?En:Tn),localStorage.setItem(wn,e)}function kn(){let e=Dn()===`escuro`?`claro`:`escuro`;return On(e),e}var An,jn;function Mn(){let e=document.querySelector(`.barra`);e!==null&&e!==jn&&(An??=new ResizeObserver(e=>{let t=e[e.length-1]?.target;if(t===void 0)return;let n=t.getBoundingClientRect().height;document.documentElement.style.setProperty(`--note-barra-altura`,`${n}px`)}),jn!==void 0&&An.unobserve(jn),An.observe(e),jn=e)}var Nn={projetos:{bioma:{versao:`1.0.0`,build:`2026-09-11T16:07:46.709Z`},admin:{versao:`1.0.123`,build:`2026-09-11T16:07:46.709Z`},note:{versao:`0.0.223`,build:`2026-09-11T15:48:05.668Z`},ui:{versao:`1.0.71`,build:`2026-09-11T16:05:49.360Z`},dev:{versao:`1.1.102`,build:`2026-09-10T23:17:21.120Z`},flow:{versao:`0.0.84`,build:`2026-09-10T23:40:16.940Z`},bin:{versao:`0.0.0`,build:`2026-09-04T17:43:53.952Z`},sql:{versao:`3.53.4`,build:`2026-09-04T17:18:39.584Z`}},componentesUi:81,pacotes:[{nome:`@kobi/admin`,versao:`1.0.123`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.102`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.84`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`0.0.223`,caminho:`apps/note`},{nome:`@bioma/bin`,versao:`0.0.0`,caminho:`packages/bin`},{nome:`@bioma/core`,versao:`0.0.0`,caminho:`packages/core`},{nome:`@bioma/js`,versao:`0.1.0`,caminho:`packages/js`},{nome:`@kobi/kit`,versao:`1.0.71`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.0.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_criacao_modulos:63,not_cronologia_eventos:594,not_estoque_alimentos:32,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1273,not_poesias:275,not_principios:112,not_receitas:4}}.projetos.note?.build.slice(0,4)??``;function Pn(){return v`
    <kk-icon-button
      name="qrcode"
      label=${x.perfil.tituloCartao}
      @click=${()=>qt(`perfil/cartao`)}
    ></kk-icon-button>
    <kk-icon-button
      name="heartbeat"
      label=${x.perfil.tituloFicha}
      @click=${()=>qt(`perfil/ice`)}
    ></kk-icon-button>
  `}function Fn(){return v`
    <footer class="rodape">
      <nav class="rodape__links">
        <button class="rodape__link" @click=${()=>qt(`sobre/termos`)}>${x.rodape.termos}</button>
        <button class="rodape__link" @click=${()=>qt(`sobre/privacidade`)}>
          ${x.rodape.privacidade}
        </button>
      </nav>
      <p class="rodape__nota">
        ${Nn===``?y:v`<span>${x.rodape.direitos(Nn)}</span>`}
        <span>${x.rodape.feitoPara}</span>
      </p>
    </footer>
  `}function In(e,t,n){let r=Dn()===`escuro`;return v`
    <header class="barra">
      ${e.voltarPara===void 0?v`<img class="barra__logo" src="./icons/kobi-note.svg" alt="" width="30"/>`:v`
            <kk-icon-button
              name="arrow-left"
              label=${x.acoes.voltar}
              @click=${()=>{e.aoVoltar?.()!==!0&&qt(e.voltarPara??`home`)}}
            ></kk-icon-button>
          `}

      <h1 class="barra__titulo">${x.app.nome}</h1>

      <div class="barra__acoes">
        ${e.acoes??y}
        ${Pn()}
        ${y}
        <kk-icon-button
          name=${r?`sun`:`moon`}
          label=${x.acoes.tema}
          @click=${()=>{kn(),n()}}
        ></kk-icon-button>
      </div>
    </header>

    <main class="conteudo">
      ${e.capaPropria===!0||e.titulo===x.app.nome?y:v`<h2 class="conteudo__titulo">${e.titulo}</h2>`}
      ${t}
    </main>

    ${Fn()}
  `}var Ln={criacao:{rotulo:`Teve um Projeto?`,icone:`compass`,cor:`#6610f2`},estudo:{rotulo:`Momento de Estudo`,icone:`hourglass`,cor:`#6f42c1`},imite:{rotulo:`Imite a Sua Fé`,icone:`heart-handshake`,cor:`#d63384`},jogo:{rotulo:`Língua Pura`,icone:`device-gamepad-2`,cor:`#198754`},principios:{rotulo:`Princípios Bíblicos`,icone:`scale`,cor:`#c92a2a`},faq:{rotulo:`Perguntas Frequentes`,icone:`message-question`,cor:`#4263eb`},avulso:{rotulo:`Avulso`,icone:`notes`,cor:`#0d6efd`}};function Rn(e){return Ln[e]??Ln.avulso}var zn=()=>i(`not_caderno_estudo`);function Bn(){return zn().todos()}var Vn={origem:`todas`,busca:``};function Hn(e,t){let n=o(t.busca.trim());return e.filter(e=>t.origem===`todas`||e.origem===t.origem).filter(e=>n===``||o(e.titulo).includes(n)||o(e.conteudo).includes(n)||o(e.referencia).includes(n)).sort((e,t)=>(t.atualizado||0)-(e.atualizado||0))}function Un(e){return zn().salvar(e)}function Wn(e){return zn().excluir(e)}var Gn=`note_caderno_rascunho`;function Kn(e){return sessionStorage.setItem(Gn,JSON.stringify(e)),`caderno/novo`}function qn(){try{let e=sessionStorage.getItem(Gn);return sessionStorage.removeItem(Gn),e===null?{}:JSON.parse(e)}catch{return{}}}async function Jn(e){let t=Date.now(),n=e.ref_chave??null;return Un({...(n===null?void 0:(await Bn()).find(e=>e.ref_chave===n))??{criado:t,ref_chave:n},titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,atualizado:t})}async function Yn(e){if(e===null||e===``)return;let t=(await Bn()).find(t=>t.ref_chave===e);t?.id!==void 0&&await Wn(t.id)}var Xn=`Geral`;async function Zn(){return(await i(`imite_cartoes`).todos()).sort((e,t)=>Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}function Qn(e){try{let t=JSON.parse(e===``?`[]`:e);return Array.isArray(t)?t:[]}catch{return[]}}function $n(e){return e===null?[]:Qn(e.lentes)}function er(e){return e===null?[]:Qn(e.exemplos)}function tr(e,t){return e===null||t===null||t===``?!1:t===e.correta&&$n(e).some(e=>e.id===t)}function nr(e){return e!==null&&$n(e).some(t=>t.id===e.correta)}function rr(e,t){return($n(e).find(e=>e.id===t)?.resposta??``).trim()}function ir(e,t){let n=new Map;for(let t of e){let e=t.tema.trim()===``?Xn:t.tema.trim(),r=n.get(e);r===void 0?n.set(e,[t]):r.push(t)}return[...n].map(([e,n])=>({tema:e,cartoes:n,concluido:n.every(t)}))}var ar=`note_imite_progresso`;function or(){return{refletidos:{}}}function sr(){try{let e=JSON.parse(localStorage.getItem(ar)??`null`);return{...or(),...e}}catch{return or()}}function cr(e){localStorage.setItem(ar,JSON.stringify(e))}function lr(e,t){let n=e.refletidos[String(t)],r={...e,refletidos:{...e.refletidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,refletidoEm:Date.now()}}};return cr(r),r}function ur(e,t){return t?.id!==void 0&&e.refletidos[String(t.id)]!==void 0}function dr(e){return`imite:${e}`}async function fr(){let e=new Map;for(let t of await Bn()){if(t.origem!==`imite`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function pr(e,t,n){return n?.id!==void 0&&ur(e,n)&&(t.get(n.id)??``).trim()!==``}function mr(e){return v`
    <div class="aviso">
      <kk-icon class="aviso__icone" style="color: ${e.cor}" name=${e.icone}></kk-icon>
      <h2>${x.emBreve.titulo}</h2>
      <p>${x.emBreve.texto(e.rotulo)}</p>
      <p class="discreto">${x.emBreve.ajuda}</p>
      <kk-button variant="primary" @click=${()=>qt(`home`)}>
        ${x.emBreve.voltar}
      </kk-button>
    </div>
  `}function hr(){return v`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="map-question"></kk-icon>
      <h2>${x.erro.naoEncontrado}</h2>
      <p>${x.erro.naoEncontradoTexto}</p>
      <kk-button variant="primary" @click=${()=>qt(`home`)}>
        ${x.emBreve.voltar}
      </kk-button>
    </div>
  `}function gr(){return v`
    <div class="carregando">
      <kk-spinner></kk-spinner>
      <p>${x.app.carregando}</p>
    </div>
  `}function _r(e){return v`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="cloud-off"></kk-icon>
      <h2>${x.erro.telaNaoVeio}</h2>
      <p>${x.erro.telaNaoVeioTexto}</p>
      <pre class="detalhe">${e}</pre>
      <kk-button variant="primary" @click=${()=>location.reload()}>
        ${x.erro.telaNaoVeioRecarregar}
      </kk-button>
    </div>
  `}function vr(e,t){return v`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
      <h2>${x.erro.cargaFalhou}</h2>
      <p>${x.erro.cargaFalhouTexto}</p>
      <pre class="detalhe">${e}</pre>
      <kk-button variant="primary" @click=${t}>
        <kk-icon slot="prefix" name="refresh"></kk-icon>${x.erro.cargaTentarDeNovo}
      </kk-button>
    </div>
  `}function yr(e){return e instanceof Error?e.message:String(e)}var br=864e5;function xr(e=new Date){let t=e instanceof Date?e:new Date(e),n=String(t.getMonth()+1).padStart(2,`0`),r=String(t.getDate()).padStart(2,`0`);return`${t.getFullYear()}-${n}-${r}`}function Sr(e=new Date){return xr(e).slice(0,7)}function Cr(e){return xr(new Date(Date.now()+e*br))}function wr(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t??1970,(n??1)-1,r??1,0,0,0,0).getTime()}var Tr=e=>String(e).padStart(2,`0`);function Er(e){return`${Tr(e.getDate())}/${Tr(e.getMonth()+1)}/${e.getFullYear()}`}function Dr(e){return e===void 0||e===0||Number.isNaN(e)?``:Er(new Date(e))}function Or(e){if(e===void 0||e===0||Number.isNaN(e))return``;let t=new Date(e);return`${Er(t)}, ${Tr(t.getHours())}:${Tr(t.getMinutes())}`}function kr(e){if(e===void 0||e===``)return``;let[t,n,r]=e.split(`-`);return t===void 0||n===void 0||r===void 0?e:`${r}/${n}/${t}`}function Ar(e,t){let[n=0,r=1,i=1]=e.split(`-`).map(Number),a=new Date(n,r-1+t,1),o=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();return xr(new Date(a.getFullYear(),a.getMonth(),Math.min(i,o)))}function jr(e,t){if(e===``||t===``)return 0;let[n=0,r=1,i=1]=e.split(`-`).map(Number),[a=0,o=1,s=1]=t.split(`-`).map(Number),c=new Date(a,o-1,s).getTime()-new Date(n,r-1,i).getTime();return Math.round(c/br)}var S={anotacoes:0,eventosHoje:[],contasVencendo:0,leituraPercentual:0,metasAtivas:0,metasConcluidas:0,focoMinutos:0,horasDoMes:0,receitasFavoritas:0,prontidao:0,prontidaoTom:`perigo`,kits:0,autonomiaDias:0},Mr=!1,Nr=!1,Pr=!0,Fr=!1;function Ir(){Fr||(Fr=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`home`&&(Pr=!0)}))}async function Lr(e,t){try{return await e()}catch{return t}}async function Rr(){let e=xr(),t=Sr(),[n,r,i,a,o,s,c,l,u]=await Promise.all([Lr(async()=>{let{FILTROS_INICIAIS:e,listarAnotacoes:t}=await b(async()=>{let{FILTROS_INICIAIS:e,listarAnotacoes:t}=await import(`./dados-z1ZK372g.js`);return{FILTROS_INICIAIS:e,listarAnotacoes:t}},__vite__mapDeps([3,4,5]),import.meta.url);return(await t(e)).length},0),Lr(async()=>{let t=await b(()=>import(`./dados-DeTaREhN.js`),__vite__mapDeps([6,4]),import.meta.url),{eventos:n,tipos:r}=await t.carregar();return t.eventosDoDia(n,e).map(e=>({titulo:e.titulo,quando:e.dia_inteiro===1?x.painel.diaInteiro:t.comoHora(e.hora_inicio_min),cor:t.corDoTipo(r,e.tipo_id)}))},[]),Lr(async()=>{let{carregar:t,TIPO_DESPESA:n}=await b(async()=>{let{carregar:e,TIPO_DESPESA:t}=await import(`./dados-DTU2IgUt.js`);return{carregar:e,TIPO_DESPESA:t}},__vite__mapDeps([7,4,8,9]),import.meta.url),{transacoes:r}=await t(),i=new Date(`${e}T23:59:59`).getTime();return r.filter(e=>e.tipo===n&&e.esta_pago!==1&&e.data_vencimento!==0&&e.data_vencimento<=i).length},0),Lr(async()=>{let{lerLidos:e,percentualGeral:t}=await b(async()=>{let{lerLidos:e,percentualGeral:t}=await import(`./dados-CrToLRPu.js`);return{lerLidos:e,percentualGeral:t}},[],import.meta.url);return t(e())},0),Lr(async()=>{let{listarMetas:e}=await b(async()=>{let{listarMetas:e}=await import(`./dados-Cf3KGV0w.js`);return{listarMetas:e}},__vite__mapDeps([10,4,5,9,8]),import.meta.url),t=await e();return{ativas:t.filter(e=>e.esta_concluida!==1).length,concluidas:t.filter(e=>e.esta_concluida===1).length}},{ativas:0,concluidas:0}),Lr(async()=>{let{listarSessoes:e,totalDeMinutos:n}=await b(async()=>{let{listarSessoes:e,totalDeMinutos:t}=await import(`./dados-Ce9ECU8O.js`);return{listarSessoes:e,totalDeMinutos:t}},__vite__mapDeps([11,4]),import.meta.url);return n((await e()).filter(e=>Sr(e.concluido_em)===t))},0),Lr(async()=>{let{carregar:e}=await b(async()=>{let{carregar:e}=await import(`./dados-BbZtaqn0.js`);return{carregar:e}},__vite__mapDeps([12,4,5]),import.meta.url),{contador:t}=await e();return Math.floor(t.minutos/60)},0),Lr(async()=>{let{lerFavoritos:e}=await b(async()=>{let{lerFavoritos:e}=await import(`./favoritos-DAEWA_Gd.js`);return{lerFavoritos:e}},[],import.meta.url),{CHAVE_FAVORITOS:t}=await b(async()=>{let{CHAVE_FAVORITOS:e}=await import(`./dados-7Nm7wVki.js`);return{CHAVE_FAVORITOS:e}},__vite__mapDeps([13,4,14]),import.meta.url);return e(t).size},0),Lr(async()=>{let{calcularProntidao:e,tomDaProntidao:t}=await b(async()=>{let{calcularProntidao:e,tomDaProntidao:t}=await import(`./dados-BgDpV8rv.js`);return{calcularProntidao:e,tomDaProntidao:t}},[],import.meta.url),{carregarKits:n,lerProgresso:r}=await b(async()=>{let{carregarKits:e,lerProgresso:t}=await import(`./kits-C3dsFJIL.js`);return{carregarKits:e,lerProgresso:t}},__vite__mapDeps([15,4]),import.meta.url),{calcularAutonomia:i,carregarEstoque:a,lerPerfil:o}=await b(async()=>{let{calcularAutonomia:e,carregarEstoque:t,lerPerfil:n}=await import(`./estoque-CvfiN4ff.js`);return{calcularAutonomia:e,carregarEstoque:t,lerPerfil:n}},__vite__mapDeps([16,4,5,17]),import.meta.url),[s,c]=await Promise.all([n(),a()]),l=o(),u=e({kits:s,progresso:r(),estoque:c,perfil:l});return{prontidao:u,tom:t(u),kits:s.length,autonomiaDias:i(c,l).dias}},{prontidao:0,tom:`perigo`,kits:0,autonomiaDias:0})]);return{anotacoes:n,eventosHoje:r,contasVencendo:i,leituraPercentual:a,metasAtivas:o.ativas,metasConcluidas:o.concluidas,focoMinutos:s,horasDoMes:c,receitasFavoritas:l,prontidao:u.prontidao,prontidaoTom:u.tom,kits:u.kits,autonomiaDias:u.autonomiaDias}}function zr(){Ir(),!Nr&&Pr&&(Pr=!1,Nr=!0,(async()=>{try{S=await Rr(),Mr=!0}finally{Nr=!1,Zt()}})())}function Br(e){if(Mr&&Gt(e)){if(e===`anotacoes`&&S.anotacoes>0)return x.painel.anotacoes(S.anotacoes);if(e===`calendario`&&S.eventosHoje.length>0)return x.painel.eventosHoje(S.eventosHoje.length);if(e===`financeiro`&&S.contasVencendo>0)return x.painel.contasVencendo(S.contasVencendo);if(e===`leitura`&&S.leituraPercentual>0)return x.painel.leitura(S.leituraPercentual);if(e===`metas`&&S.metasAtivas>0)return x.painel.metas(S.metasAtivas);if(e===`ministerio`&&S.horasDoMes>0)return x.painel.horas(S.horasDoMes);if(e===`estudo`&&S.focoMinutos>0)return x.painel.foco(S.focoMinutos);if(e===`receitas`&&S.receitasFavoritas>0)return x.painel.favoritas(S.receitasFavoritas);if(e===`guias`)return x.prep.guiasResumo}}function Vr(e){if(Mr&&Gt(`prep`)){if(e===`prep-kits`)return x.prep.contagemKits(S.kits);if(e===`prep-estoque`)return x.prep.diasAutonomia(S.autonomiaDias);if(e===`prep-cofre`)return x.prep.cofreResumo}}function Hr(e,t,n){let r=Ut(e);return v`
    <button
      class="indicador"
      data-modulo=${e}
      style="--cor: ${r?.cor??`var(--kk-color-primary-600)`}"
      @click=${()=>qt(e)}
    >
      <kk-card class="indicador__cartao" orientation="horizontal">
        <kk-icon
          slot="image"
          class="indicador__icone"
          name=${r?.icone??`chart-bar`}
        ></kk-icon>
        <span class="indicador__texto">
          <span class="indicador__valor">${t}</span>
          <span class="indicador__rotulo">${n}</span>
        </span>
        <kk-icon class="indicador__seta" name="chevron-right"></kk-icon>
      </kk-card>
    </button>
  `}function Ur(){return v`
    <section class="painel__hoje">
      <header class="painel__topo">
        <span class="painel__data">${new Date().toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}</span>
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
  `}function Wr(){return v`<div class="indicadores">${[S.focoMinutos>0?Hr(`estudo`,x.painel.emHoras(S.focoMinutos),x.painel.rotuloFoco):y,S.contasVencendo>0?Hr(`financeiro`,String(S.contasVencendo),x.painel.rotuloContas):y,Hr(`metas`,`${S.metasConcluidas}/${S.metasAtivas+S.metasConcluidas}`,x.painel.rotuloMetas)].filter(e=>e!==y)}</div>`}function Gr(){if(!Gt(`prep`))return y;let e=S.prontidao;return v`
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
  `}function Kr(e){return zr(),Mr?e===`hoje`?Ur():e===`indicadores`?Wr():Gr():e===`hoje`?v`<p class="intro">${x.home.sub}</p>`:y}var qr=`#82c91e`,Jr=`#ae3ec9`;function Yr(e){let t=Gt(e.id);return $r({cor:e.cor,icone:e.icone,rotulo:e.rotulo,resumo:Br(e.id),emBreve:!t,aoTocar:()=>qt(e.id)})}function Xr(e){let t=Gt(e.rota.split(`/`)[0]??``);return $r({cor:e.cor,icone:e.icone,rotulo:e.rotulo,resumo:Vr(e.id),emBreve:!t,aoTocar:()=>qt(e.rota)})}function Zr(e){return $r({cor:qr,icone:`refresh`,rotulo:x.home.sincronizar,resumo:e.ocupado?x.home.sincronizando:void 0,ocupado:e.ocupado,aoTocar:()=>e.executar()})}function Qr(){return $r({cor:Jr,icone:`share`,rotulo:x.convite.tile,resumo:x.convite.tileResumo,aoTocar:()=>{(async()=>{let{abrirConvite:e}=await b(async()=>{let{abrirConvite:e}=await import(`./convite-CloxE-5d.js`);return{abrirConvite:e}},__vite__mapDeps([18,19]),import.meta.url);await e()})()}})}function $r(e){return v`
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
  `}function ei(e,t){return t?y:v`
    <hr class="divisor" />
    ${e.titulo===void 0?y:v`<h2 class="secao">${e.titulo}</h2>`}
  `}function ti(e,t){return e.itens.map(e=>{if(e.tipo===`acao`)return e.id===`sincronizar`?Zr(t):e.id===`convite`?Qr():y;if(e.tipo===`atalho`){let t=Wt(e.id);return t===void 0?y:Xr(t)}let n=Ut(e.id);return n===void 0?y:Yr(n)}).filter(e=>e!==y)}function ni(e){return v`
    ${Bt.map((t,n)=>{let r=t.painel===void 0?y:Kr(t.painel),i=ti(t,e);return r===y&&i.length===0?y:v`
        ${ei(t,n===0)}
        ${r}
        ${i.length===0?y:v`<div class="tiles">${i}</div>`}
      `})}
  `}function ri(e,t,n,r={}){let i=document.createElement(`kk-dialog`);return i.setAttribute(`label`,e),r.semCabecalho===!0&&i.setAttribute(`no-header`,``),r.classe!==void 0&&(i.className=r.classe),document.body.append(i),new Promise(e=>{let r=t,a=e=>{r=e,i.open=!1},o=()=>{St(n(a,i,o),i)};i.addEventListener(`kk-after-hide`,t=>{t.target===i&&(i.remove(),e(r))}),o(),i.updateComplete.then(()=>{i.open=!0})})}function ii(e){return ri(e.titulo,!1,t=>v`
      ${e.texto??``}
      <kk-button slot="footer" @click=${()=>t(!1)}>${x.acoes.cancelar}</kk-button>
      <kk-button
        slot="footer"
        variant=${e.variante??`primary`}
        @click=${()=>t(!0)}
      >
        ${e.rotuloConfirmar??x.acoes.confirmar}
      </kk-button>
    `)}function ai(e){return ri(e.titulo,null,(t,n)=>{let r=()=>{let r=n.querySelector(`kk-input`),i=r?.value.trim()??``;if(i===``){r!=null&&(r.helpText=e.erroVazio??x.acoes.obrigatorio,r.focus());return}t(i)};return v`
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
    `})}var oi=null,si=new Set;function ci(){for(let e of si)e()}typeof window<`u`&&(window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),oi=e,ci()}),window.addEventListener(`appinstalled`,()=>{oi=null,ci()}));function li(){return oi!==null}async function ui(){let e=oi;if(e===null)return!1;oi=null,ci();let{outcome:t}=await e.prompt();return t===`accepted`}function di(e){return si.add(e),()=>si.delete(e)}var fi=`note_boas_vindas_visto`,pi=[{id:`bemVindo`,cor:`#fdf10d`},{id:`painel`,icone:`layout-grid`,cor:`#6f42c1`},{id:`offline`,icone:`wifi-off`,cor:`#198754`},{id:`privado`,icone:`shield-lock`,cor:`#dc3545`},{id:`instalar`,icone:`device-mobile`,cor:`#fd7e14`}];function mi(){try{return localStorage.getItem(fi)!==null}catch{return!0}}function hi(){try{localStorage.setItem(fi,`1`)}catch{}}function gi(e){let t=pi[e];if(t===void 0)return v``;let n=x.boasVindas.passos[t.id];return v`
    <div class="bv" style="--cor: ${t.cor}">
      ${t.icone===void 0?y:v`
            <span class="bv__icone">
              <kk-icon name=${t.icone}></kk-icon>
            </span>
          `}

      <h2 class="bv__titulo">${n.titulo}</h2>
      <p class="bv__texto">${n.texto}</p>

      ${t.id===`instalar`&&li()?v`
            <kk-button class="bv__instalar" variant="primary" @click=${()=>void ui()}>
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
        aria-valuemax=${pi.length}
        aria-valuenow=${e+1}
        aria-valuetext=${x.boasVindas.passo(e+1,pi.length)}
      >
        ${pi.map((t,n)=>v`<span class="bv__ponto ${n===e?`bv__ponto--atual`:``}"></span>`)}
      </div>
    </div>
  `}function _i(){let e=0,t=()=>{};return ri(x.boasVindas.passos.bemVindo.titulo,void 0,(n,r,i)=>{t(),t=di(i);let a=e===pi.length-1;return v`
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

        ${gi(e)}

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
      `},{semCabecalho:!0,classe:`bv__dialogo`}).then(()=>{t(),hi()})}async function vi(){mi()||await _i()}var yi=4e3,bi={success:`circle-check`,danger:`alert-triangle`,warning:`alert-triangle`,neutral:`info-circle`};function xi(e,t=`success`){let n=Object.assign(document.createElement(`kk-alert`),{variant:t,closable:!0,duration:yi}),r=document.createElement(`kk-icon`);r.setAttribute(`slot`,`icon`),r.setAttribute(`name`,bi[t]),n.append(r,document.createTextNode(e)),document.body.append(n),n.toast()}var Si=new Set,Ci=new Map,wi,Ti=`ltr`,Ei=`en`,Di=typeof MutationObserver<`u`&&typeof document<`u`&&typeof document.documentElement<`u`;Di&&(Ti=document.documentElement.dir||`ltr`,Ei=document.documentElement.lang||navigator.language,new MutationObserver(()=>ki()).observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]}));function Oi(...e){for(let t of e){let e=t.$code.toLowerCase(),n=Ci.get(e);Ci.set(e,n?{...n,...t}:t),wi??=t}ki()}function ki(){Di&&(Ti=document.documentElement.dir||`ltr`,Ei=document.documentElement.lang||navigator.language);for(let e of Si)e.requestUpdate()}function Ai(e){let t;try{t=new Intl.Locale(e.replaceAll(`_`,`-`))}catch{return{regional:void 0,idioma:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``;return{regional:r?Ci.get(`${n}-${r}`):void 0,idioma:Ci.get(n)}}var ji=class{constructor(e){this.host=e,this.host.addController(this)}host;hostConnected(){Si.add(this.host)}hostDisconnected(){Si.delete(this.host)}dir(){return`${this.host.dir||Ti}`.toLowerCase()}lang(){return`${this.host.lang||Ei}`.toLowerCase()}exists(e,t){let{includeFallback:n=!1,lang:r=this.lang()}=t??{},{regional:i,idioma:a}=Ai(r);return!!(i?.[e]??a?.[e]??(n?wi?.[e]:void 0))}term(e,...t){let{regional:n,idioma:r}=Ai(this.lang()),i=n?.[e]??r?.[e]??wi?.[e];return i===void 0?(console.error(`Nenhuma tradu\xE7\xE3o encontrada para: ${String(e)}`),String(e)):typeof i==`function`?i(...t):String(i)}date(e,t){return new Intl.DateTimeFormat(this.lang(),t).format(new Date(e))}number(e,t){let n=Number(e);return Number.isNaN(n)?``:new Intl.NumberFormat(this.lang(),t).format(n)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Mi={$code:`en`,$name:`English`,$dir:`ltr`,actions:`Actions`,alpha:`Alpha`,browseFiles:`Browse files`,cancel:`Cancel`,carousel:`Carousel`,clearEntry:`Clear entry`,clearFilters:`Clear filters`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,deleteItem:`Delete item`,dropFiles:`Drop files here`,editItem:`Edit item`,editorAlignCenter:`Align center`,editorAlignJustify:`Justify`,editorAlignLeft:`Align left`,editorAlignRight:`Align right`,editorArea:`Editing area`,editorBackgroundColor:`Background color`,editorBlockType:`Block type`,editorBold:`Bold`,editorBulletList:`Bulleted list`,editorClearFormat:`Clear formatting`,editorColorBlue:`Blue`,editorColorCyan:`Cyan`,editorColorDefault:`Default`,editorColorGray:`Gray`,editorColorGreen:`Green`,editorColorLime:`Lime`,editorColorOrange:`Orange`,editorColorPink:`Pink`,editorColorRed:`Red`,editorColorTeal:`Teal`,editorColorViolet:`Violet`,editorColorYellow:`Yellow`,editorFootnote:`Footnote`,editorFootnotePlaceholder:`Note text`,editorFootnoteText:`The text appears at the foot of the page, numbered when read.`,editorHeading1:`Heading 1`,editorHeading2:`Heading 2`,editorHeading3:`Heading 3`,editorHeading4:`Heading 4`,editorHighlight:`Highlight`,editorHorizontalRule:`Horizontal rule`,editorImage:`Image`,editorInsert:`Insert`,editorItalic:`Italic`,editorLineBreak:`Line break`,editorLink:`Link`,editorLinkText:`Link address.`,editorNoColor:`No color`,editorNumberedList:`Numbered list`,editorParagraph:`Paragraph`,editorParagraphBordered:`Bordered`,editorParagraphColumns:`Two columns`,editorParagraphDropCap:`Drop cap`,editorParagraphEpigraph:`Epigraph`,editorParagraphFinePrint:`Fine print`,editorParagraphFootnotes:`Footnotes`,editorParagraphIndented:`Indented`,editorParagraphSmallCaps:`Small caps`,editorParagraphSpaced:`Spaced`,editorParagraphStyle:`Paragraph style`,editorPoetry:`Poetry block`,editorPoetryDedication:`Dedication`,editorPoetryRefrain:`Refrain`,editorPoetryScripture:`Scripture`,editorPoetrySource:`Source`,editorPoetryTheme:`Theme text`,editorPoetryVerse:`Verse`,editorQuote:`Quote`,editorRedo:`Redo`,editorSource:`Source code`,editorStrikethrough:`Strikethrough`,editorTable:`Table`,editorTableColumnAfter:`Insert column right`,editorTableColumnBefore:`Insert column left`,editorTableColumnDelete:`Delete column`,editorTableDelete:`Delete table`,editorTableHeader:`Header row`,editorTableRowAbove:`Insert row above`,editorTableRowBelow:`Insert row below`,editorTableRowDelete:`Delete row`,editorTableSize:`Table size`,editorTextColor:`Text color`,editorToolbar:`Formatting toolbar`,editorTypoDoubleQuotes:`Double quotes`,editorTypoEmDash:`Em dash`,editorTypoEnDash:`En dash`,editorTypography:`Typography`,editorTypoNbsp:`Non-breaking space`,editorTypoSingleQuotes:`Single quotes`,editorUnderline:`Underline`,editorUndo:`Undo`,error:`Error`,financeActive:`Active`,financeAmount:`Amount`,financeAmountRequired:`Enter an amount greater than zero.`,financeBalance:`Total balance`,financeByCategory:`By category`,financeCategories:`Categories`,financeCategory:`Category`,financeColor:`Colour`,financeCount:e=>e===1?`1 record`:`${e} records`,financeDaily:`Daily`,financeDayNum:e=>`day ${e}`,financeDayOfMonth:`Day of the month`,financeDayOfMonthHelp:`The 31st falls on the last day of shorter months.`,financeDayOfMonthRequired:`Enter a day between 1 and 31.`,financeDescription:`Description`,financeDescriptionRequired:`Enter a description.`,financeDueDate:`Due date`,financeEditCategory:`Edit category`,financeEditRecurrence:`Edit recurrence`,financeEditTransaction:`Edit transaction`,financeExpenseOne:`Expense`,financeExpenses:`Expenses`,financeGenerateAsPaid:`Create already paid`,financeHiddenValues:`Amounts are hidden.`,financeHide:`Hide amounts`,financeIcon:`Icon`,financeIncome:`Income`,financeIncomeOne:`Income`,financeLimitHelp:`Zero means no limit.`,financeLimitOf:e=>`Limit ${e}`,financeLimits:`Limits for the month`,financeMarkPaid:`Mark as paid`,financeMonth:`Month`,financeMonthly:`Monthly`,financeMonthlyLimit:`Monthly limit`,financeName:`Name`,financeNameRequired:`Enter a name.`,financeNewCategory:`New category`,financeNewRecurrence:`New recurrence`,financeNewTransaction:`New transaction`,financeNext:e=>`Next: ${e}`,financeNoActivity:`Nothing moved this month.`,financeNoCategories:`No categories yet.`,financeNoCategory:`No category`,financeNoParty:`Unlinked`,financeNoRecurrences:`No recurrences yet.`,financeNoTransactions:`No transactions yet.`,financeNoTransactionsInMonth:`Nothing recorded in this month.`,financeOfLimit:e=>`of ${e}`,financePaid:`Paid`,financeParty:`Client or supplier`,financePause:`Pause`,financePeriodicity:`Repeats`,financeRecurrences:`Recurrences`,financeResume:`Resume`,financeShow:`Show amounts`,financeToPay:`To pay`,financeToReceive:`To receive`,financeTransactions:`Transactions`,financeType:`Type`,financeUnmarkPaid:`Mark as unpaid`,financeWeekday:`Day of the week`,financeWeekly:`Weekly`,financeYear:`Year`,financeYearly:`Yearly`,finish:`Finish`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,hsv:`HSV`,hue:`Hue`,lastPage:`Last page`,loading:`Loading`,menu:`Menu`,newItem:`New item`,next:`Next`,nextPage:`Next page`,nextSlide:`Next slide`,noResults:`No results found`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,page:e=>`Page ${e}`,pagination:`Pagination`,previous:`Previous`,previousPage:`Previous page`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,resultsPerPage:`Results per page`,save:`Save`,search:`Search`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,selectAll:`Select all`,selectRow:`Select row`,showingResults:(e,t,n)=>`Showing ${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortClear:`Clear sorting`,sortDescending:`Sort descending`,stepNum:(e,t)=>`Step ${e} of ${t}`,toggleColorFormat:`Toggle color format`};Oi(Mi);var Ni=Mi,Pi=class extends ji{static{Oi(Ni)}};Oi({$code:`pt`,$name:`Português (Brasil)`,$dir:`ltr`,actions:`Ações`,browseFiles:`Escolher arquivos`,cancel:`Cancelar`,carousel:`Carrossel`,clearEntry:`Limpar entrada`,clearFilters:`Limpar filtros`,close:`Fechar`,copied:`Copiado`,copy:`Copiar`,currentValue:`Valor atual`,deleteItem:`Excluir registro`,dropFiles:`Solte os arquivos aqui`,editItem:`Editar registro`,editorAlignCenter:`Centralizar`,editorAlignJustify:`Justificar`,editorAlignLeft:`Alinhar à esquerda`,editorAlignRight:`Alinhar à direita`,editorArea:`Área de edição`,editorBackgroundColor:`Cor de fundo`,editorBlockType:`Tipo de bloco`,editorBold:`Negrito`,editorBulletList:`Lista`,editorClearFormat:`Limpar formatação`,editorColorBlue:`Azul`,editorColorCyan:`Ciano`,editorColorDefault:`Padrão`,editorColorGray:`Cinza`,editorColorGreen:`Verde`,editorColorLime:`Limão`,editorColorOrange:`Laranja`,editorColorPink:`Rosa`,editorColorRed:`Vermelho`,editorColorTeal:`Azul-petróleo`,editorColorViolet:`Violeta`,editorColorYellow:`Amarelo`,editorFootnote:`Nota de rodapé`,editorFootnotePlaceholder:`Texto da nota`,editorFootnoteText:`O texto aparece no rodapé, numerado na leitura.`,editorHeading1:`Título 1`,editorHeading2:`Título 2`,editorHeading3:`Título 3`,editorHeading4:`Título 4`,editorHighlight:`Destaque`,editorHorizontalRule:`Linha horizontal`,editorImage:`Imagem`,editorInsert:`Inserir`,editorItalic:`Itálico`,editorLineBreak:`Quebra de linha`,editorLink:`Link`,editorLinkText:`Endereço do link.`,editorNoColor:`Sem cor`,editorNumberedList:`Lista numerada`,editorParagraph:`Parágrafo`,editorParagraphBordered:`Emoldurado`,editorParagraphColumns:`Duas colunas`,editorParagraphDropCap:`Capitular`,editorParagraphEpigraph:`Epígrafe`,editorParagraphFinePrint:`Letra miúda`,editorParagraphFootnotes:`Notas de rodapé`,editorParagraphIndented:`Recuado`,editorParagraphSmallCaps:`Versaletes`,editorParagraphSpaced:`Espaçado`,editorParagraphStyle:`Estilo de parágrafo`,editorPoetry:`Bloco de poesia`,editorPoetryDedication:`Dedicatória`,editorPoetryRefrain:`Refrão`,editorPoetryScripture:`Escritura`,editorPoetrySource:`Fonte`,editorPoetryTheme:`Texto tema`,editorPoetryVerse:`Verso`,editorQuote:`Citação`,editorRedo:`Refazer`,editorSource:`Código-fonte`,editorStrikethrough:`Tachado`,editorTable:`Tabela`,editorTableColumnAfter:`Inserir coluna à direita`,editorTableColumnBefore:`Inserir coluna à esquerda`,editorTableColumnDelete:`Excluir coluna`,editorTableDelete:`Excluir tabela`,editorTableHeader:`Linha de cabeçalho`,editorTableRowAbove:`Inserir linha acima`,editorTableRowBelow:`Inserir linha abaixo`,editorTableRowDelete:`Excluir linha`,editorTableSize:`Tamanho da tabela`,editorTextColor:`Cor do texto`,editorToolbar:`Barra de formatação`,editorTypoDoubleQuotes:`Aspas duplas`,editorTypoEmDash:`Travessão`,editorTypoEnDash:`Meia-risca`,editorTypography:`Tipografia`,editorTypoNbsp:`Espaço inseparável`,editorTypoSingleQuotes:`Aspas simples`,editorUnderline:`Sublinhado`,editorUndo:`Desfazer`,error:`Erro`,financeActive:`Ativa`,financeAmount:`Valor`,financeAmountRequired:`Informe um valor maior que zero.`,financeBalance:`Saldo total`,financeByCategory:`Por categoria`,financeCategories:`Categorias`,financeCategory:`Categoria`,financeColor:`Cor`,financeCount:e=>e===1?`1 registro`:`${e} registros`,financeDaily:`Diária`,financeDayNum:e=>`dia ${e}`,financeDayOfMonth:`Dia do mês`,financeDayOfMonthHelp:`O dia 31 cai no último dia dos meses mais curtos.`,financeDayOfMonthRequired:`Informe um dia entre 1 e 31.`,financeDescription:`Descrição`,financeDescriptionRequired:`Informe a descrição.`,financeDueDate:`Vencimento`,financeEditCategory:`Editar categoria`,financeEditRecurrence:`Editar recorrência`,financeEditTransaction:`Editar lançamento`,financeExpenseOne:`Despesa`,financeExpenses:`Despesas`,financeGenerateAsPaid:`Lançar já pago`,financeHiddenValues:`Os valores estão ocultos.`,financeHide:`Ocultar valores`,financeIcon:`Ícone`,financeIncome:`Receitas`,financeIncomeOne:`Receita`,financeLimitHelp:`Zero significa sem limite.`,financeLimitOf:e=>`Limite ${e}`,financeLimits:`Limites do mês`,financeMarkPaid:`Marcar como pago`,financeMonth:`Mês`,financeMonthly:`Mensal`,financeMonthlyLimit:`Limite mensal`,financeName:`Nome`,financeNameRequired:`Informe o nome.`,financeNewCategory:`Nova categoria`,financeNewRecurrence:`Nova recorrência`,financeNewTransaction:`Novo lançamento`,financeNext:e=>`Pr\xF3xima: ${e}`,financeNoActivity:`Sem movimento no mês.`,financeNoCategories:`Nenhuma categoria ainda.`,financeNoCategory:`Sem categoria`,financeNoParty:`Sem vínculo`,financeNoRecurrences:`Nenhuma recorrência ainda.`,financeNoTransactions:`Nenhum lançamento ainda.`,financeNoTransactionsInMonth:`Nenhum lançamento neste mês.`,financeOfLimit:e=>`de ${e}`,financePaid:`Pago`,financeParty:`Cliente ou fornecedor`,financePause:`Pausar`,financePeriodicity:`Periodicidade`,financeRecurrences:`Recorrências`,financeResume:`Retomar`,financeShow:`Mostrar valores`,financeToPay:`A pagar`,financeToReceive:`A receber`,financeTransactions:`Lançamentos`,financeType:`Tipo`,financeUnmarkPaid:`Desmarcar pago`,financeWeekday:`Dia da semana`,financeWeekly:`Semanal`,financeYear:`Ano`,financeYearly:`Anual`,finish:`Concluir`,firstPage:`Primeira página`,goToSlide:(e,t)=>`V\xE1 para o slide ${e} de ${t}`,hidePassword:`Esconder a senha`,alpha:`Alfa`,hsv:`HSV`,hue:`Matiz`,lastPage:`Última página`,loading:`Carregando`,menu:`Menu`,newItem:`Novo registro`,next:`Avançar`,nextPage:`Próxima página`,nextSlide:`Próximo slide`,noResults:`Nenhum resultado encontrado`,numOptionsSelected:e=>e===0?`Nenhuma opção selecionada`:e===1?`1 opção selecionada`:`${e} op\xE7\xF5es selecionadas`,page:e=>`P\xE1gina ${e}`,pagination:`Paginação`,previous:`Voltar`,previousPage:`Página anterior`,previousSlide:`Slide anterior`,progress:`Progresso`,remove:`Remover`,resize:`Mudar o tamanho`,resultsPerPage:`Registros por página`,save:`Salvar`,search:`Pesquisar`,scrollToEnd:`Rolar até o final`,scrollToStart:`Rolar até o início`,selectAColorFromTheScreen:`Selecionar uma cor da tela`,selectAll:`Selecionar tudo`,selectRow:`Selecionar a linha`,showingResults:(e,t,n)=>`Mostrando ${e}\u2013${t} de ${n}`,showPassword:`Mostrar senha`,slideNum:e=>`Slide ${e}`,sortAscending:`Ordenar em ordem crescente`,sortClear:`Remover ordenação`,sortDescending:`Ordenar em ordem decrescente`,stepNum:(e,t)=>`Etapa ${e} de ${t}`,toggleColorFormat:`Trocar o formato de cor`});var Fi=globalThis,Ii=Fi.ShadowRoot&&(Fi.ShadyCSS===void 0||Fi.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Li=Symbol(),Ri=new WeakMap,zi=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Li)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ii&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ri.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ri.set(t,e))}return e}toString(){return this.cssText}},Bi=e=>new zi(typeof e==`string`?e:e+``,void 0,Li),C=(e,...t)=>new zi(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(e._$cssResult$===!0)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Li),Vi=(e,t)=>{if(Ii)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Fi.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Hi=Ii?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Bi(t)})(e):e,{is:Ui,defineProperty:Wi,getOwnPropertyDescriptor:Gi,getOwnPropertyNames:Ki,getOwnPropertySymbols:qi,getPrototypeOf:Ji}=Object,Yi=globalThis,Xi=Yi.trustedTypes,Zi=Xi?Xi.emptyScript:``,Qi=Yi.reactiveElementPolyfillSupport,$i=(e,t)=>e,ea={toAttribute(e,t){switch(t){case Boolean:e=e?Zi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ta=(e,t)=>!Ui(e,t),na={attribute:!0,type:String,converter:ea,reflect:!1,useDefault:!1,hasChanged:ta};Symbol.metadata??=Symbol(`metadata`),Yi.litPropertyMetadata??=new WeakMap;var ra=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=na){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Wi(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Gi(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??na}static _$Ei(){if(this.hasOwnProperty($i(`elementProperties`)))return;let e=Ji(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($i(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($i(`properties`))){let e=this.properties,t=[...Ki(e),...qi(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Hi(e))}else e!==void 0&&t.push(Hi(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute===void 0?ea:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ea:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(r===!1&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ta)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];e!==!0||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ra.elementStyles=[],ra.shadowRootOptions={mode:`open`},ra[$i(`elementProperties`)]=new Map,ra[$i(`finalized`)]=new Map,Qi?.({ReactiveElement:ra}),(Yi.reactiveElementVersions??=[]).push(`2.1.2`);var ia=globalThis,aa=e=>e,oa=ia.trustedTypes,sa=oa?oa.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ca=`$lit$`,la=`lit$${Math.random().toFixed(9).slice(2)}$`,ua=`?`+la,da=`<${ua}>`,fa=document,pa=()=>fa.createComment(``),ma=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ha=Array.isArray,ga=e=>ha(e)||typeof e?.[Symbol.iterator]==`function`,_a=`[ 	
\f\r]`,va=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ya=/-->/g,ba=/>/g,xa=RegExp(`>|${_a}(?:([^\\s"'>=/]+)(${_a}*=${_a}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,`g`),Sa=/'/g,Ca=/"/g,wa=/^(?:script|style|textarea|title)$/i,w=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ta=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),Ea=new WeakMap,Da=fa.createTreeWalker(fa,129);function Oa(e,t){if(!ha(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return sa===void 0?t:sa.createHTML(t)}var ka=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=va;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===va?c[1]===`!--`?o=ya:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=xa):(wa.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=xa):o=ba:o===xa?c[0]===`>`?(o=i??va,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?xa:c[3]===`"`?Ca:Sa):o===Ca||o===Sa?o=xa:o===ya||o===ba?o=va:(o=xa,i=void 0);let d=o===xa&&e[t+1].startsWith(`/>`)?` `:``;a+=o===va?n+da:l>=0?(r.push(s),n.slice(0,l)+ca+n.slice(l)+la+d):n+la+(l===-2?t:d)}return[Oa(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Aa=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ka(t,n);if(this.el=e.createElement(l,r),Da.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Da.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ca)){let t=u[o++],n=i.getAttribute(e).split(la),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Fa:r[1]===`?`?Ia:r[1]===`@`?La:Pa}),i.removeAttribute(e)}else e.startsWith(la)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(wa.test(i.tagName)){let e=i.textContent.split(la),t=e.length-1;if(t>0){i.textContent=oa?oa.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],pa()),Da.nextNode(),c.push({type:2,index:++a});i.append(e[t],pa())}}}else if(i.nodeType===8){if(i.data===ua)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(la,e+1))!==-1;)c.push({type:7,index:a}),e+=la.length-1}}a++}}static createElement(e,t){let n=fa.createElement(`template`);return n.innerHTML=e,n}};function ja(e,t,n=e,r){if(t===Ta)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ma(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ja(e,i._$AS(e,t.values),i,r)),t}var Ma=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??fa).importNode(t,!0);Da.currentNode=r;let i=Da.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Na(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ra(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Da.nextNode(),a++)}return Da.currentNode=fa,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Na=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ja(this,e,t),ma(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Ta&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ga(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&ma(this._$AH)?this._$AA.nextSibling.data=e:this.T(fa.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Aa.createElement(Oa(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ma(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ea.get(e.strings);return t===void 0&&Ea.set(e.strings,t=new Aa(e)),t}k(t){ha(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(pa()),this.O(pa()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=aa(e).nextSibling;aa(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Pa=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ja(this,e,t,0),a=!ma(e)||e!==this._$AH&&e!==Ta,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ja(this,r[n+o],t,o),s===Ta&&(s=this._$AH[o]),a||=!ma(s)||s!==this._$AH[o],s===T?e=T:e!==T&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Fa=class extends Pa{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},Ia=class extends Pa{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},La=class extends Pa{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ja(this,e,t,0)??T)===Ta)return;let n=this._$AH,r=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ra=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ja(this,e)}},za={M:ca,P:la,A:ua,C:1,L:ka,R:Ma,D:ga,V:ja,I:Na,H:Pa,N:Ia,U:La,B:Fa,F:Ra},Ba=ia.litHtmlPolyfillSupport;Ba?.(Aa,Na),(ia.litHtmlVersions??=[]).push(`3.3.3`);var Va=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Na(t.insertBefore(pa(),e),e,void 0,n??{})}return i._$AI(e),i},Ha=globalThis,Ua=class extends ra{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Va(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ta}};Ua._$litElement$=!0,Ua.finalized=!0,Ha.litElementHydrateSupport?.({LitElement:Ua});var Wa=Ha.litElementPolyfillSupport;Wa?.({LitElement:Ua}),(Ha.litElementVersions??=[]).push(`4.2.2`);var Ga=C`
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
`,Ka={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qa=e=>(...t)=>({_$litDirective$:e,values:t}),Ja=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},E=qa(class extends Ja{constructor(e){if(super(e),e.type!==Ka.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ta}}),D=C`
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
`,Ya={attribute:!0,type:String,converter:ea,reflect:!1,hasChanged:ta},Xa=(e=Ya,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function O(e){return(t,n)=>typeof n==`object`?Xa(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function k(e){return O({...e,state:!0,attribute:!1})}var Za=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function A(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Za(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Za(n,r,{get(){return a(this)}})}}var Qa=new WeakMap,$a=(e=`value`)=>(t,n)=>{n.addInitializer(function(){let t={observada:e,destino:String(n.name)},r=Qa.get(this);r?r.push(t):Qa.set(this,[t])})};function eo(e,t,n){let r=Qa.get(e);if(!r)return;let i=e.constructor,a=e;for(let{observada:e,destino:o}of r){let r=i.getPropertyOptions(e);if(t!==(typeof r.attribute==`string`?r.attribute:e))continue;let s=r.converter||ea,c=(typeof s==`function`?s:s?.fromAttribute??ea.fromAttribute)(n,r.type);a[e]!==c&&(a[o]=c)}}var to=new WeakMap;function j(e,t){let n=Array.isArray(e)?e:[e],r=t?.waitUntilFirstUpdate??!1;return(e,t)=>{t.addInitializer(function(){let t={propriedades:n,handler:e,esperarPrimeiroRender:r},i=to.get(this);i?i.push(t):to.set(this,[t])})}}function no(e,t){let n=to.get(e);if(!n)return;let r=e,i=new Set;for(let a=0;a<10;a++){let a=!1;for(let[o,{propriedades:s,handler:c,esperarPrimeiroRender:l}]of n.entries())if(!l||e.hasUpdated)for(let n of s){if(!t.has(n))continue;let s=`${o}:${n}`;if(i.has(s))continue;let l=t.get(n),u=r[n];l!==u&&(i.add(s),a=!0,c.call(e,l,u))}if(!a)return}}var ro,io,ao,oo,so,co,lo,M=class extends (ao=Ua,io=[O()],ro=[O()],ao){constructor(){super(),g(this,`_internals`),_(this,so,m(oo,8,this)),m(oo,11,this),_(this,co,m(oo,12,this)),m(oo,15,this),_(this,lo,!1),g(this,`initialReflectedProperties`,new Map),this._internals=this.attachInternals(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v${t.version}`),`version`in r&&r.version&&(a=` v${r.version}`),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}addState(e){this._internals.states&&this._internals.states.add(e.startsWith(`--`)?e:`--${e}`)}removeState(e){this._internals.states&&this._internals.states.delete(e.startsWith(`--`)?e:`--${e}`)}toggleState(e,t){let n=e.startsWith(`--`)?e:`--${e}`;this._internals.states&&(typeof t==`boolean`?t?this._internals.states.add(n):this._internals.states.delete(n):this._internals.states.has(n)?this._internals.states.delete(n):this._internals.states.add(n))}attributeChangedCallback(e,t,n){pe(this,lo)||(this.constructor.elementProperties.forEach((e,t)=>{let n=t;e.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),me(this,lo,!0)),eo(this,e,n),super.attributeChangedCallback(e,t,n)}update(e){no(this,e),super.update(e)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{let r=n;e.has(r)&&this[r]==null&&(this[r]=t)})}};oo=f(ao),so=new WeakMap,co=new WeakMap,lo=new WeakMap,h(oo,4,`dir`,io,M,so),h(oo,4,`lang`,ro,M,co),p(oo,M),g(M,`version`,`0.0.0`),g(M,`dependencies`,{});var uo,fo,po,mo,ho=class extends (fo=M,uo=[O({reflect:!0})],fo){constructor(){super(...arguments),_(this,mo,m(po,8,this,`grouped`)),m(po,11,this),g(this,`aoAbrirSecao`,e=>{let t=this.secoes(),n=t.find(t=>t===e.target);if(n?.name)for(let e of t)e!==n&&e.name===n.name&&e.open&&e.hide()}),g(this,`aoTrocarSecoes`,()=>{let e=new Set;for(let t of this.secoes())!t.name||!t.open||(e.has(t.name)?t.open=!1:e.add(t.name))})}connectedCallback(){super.connectedCallback(),this.addEventListener(`kk-show`,this.aoAbrirSecao)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`kk-show`,this.aoAbrirSecao)}secoes(){return[...this.querySelectorAll(`:scope > kk-details`)]}render(){return w`
      <div
        part="base"
        class=${E({accordion:!0,"accordion--grouped":this.appearance===`grouped`,"accordion--spaced":this.appearance===`spaced`,"accordion--flush":this.appearance===`flush`})}
      >
        <slot @slotchange=${this.aoTrocarSecoes}></slot>
      </div>
    `}};po=f(fo),mo=new WeakMap,h(po,4,`appearance`,uo,ho,mo),p(po,ho),g(ho,`styles`,[D,Ga]),ho.define(`kk-accordion`);var go=e=>{let{activeElement:t}=document;t&&e.contains(t)&&document.activeElement?.blur()},_o=C`
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
`,vo=Symbol.for(``),yo=e=>{if(e?.r===vo)return e?._$litStatic$},bo=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:vo}),xo=new Map,So=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=yo(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=xo.get(e))===void 0&&(o.raw=o,xo.set(e,t=o)),n=s}return e(t,...n)})(w),Co={fromAttribute:e=>e??``,toAttribute:e=>e===``?null:e},wo=new WeakMap,To=new WeakMap,Eo=new WeakMap,Do=new WeakSet,Oo=new WeakMap,ko=class{host;form;options;constructor(e,t){this.host=e,e.addController(this),this.options={form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity!=`function`||e.reportValidity(),checkValidity:e=>typeof e.checkValidity!=`function`||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:[`kk-input`],...t}}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),Oo.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Oo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,wo.has(this.form)?wo.get(this.form).add(this.host):wo.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),To.has(this.form)||(To.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Eo.has(this.form)||(Eo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=wo.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),To.has(this.form)&&(this.form.reportValidity=To.get(this.form),To.delete(this.form)),Eo.has(this.form)&&(this.form.checkValidity=Eo.get(this.form),Eo.delete(this.form)),this.form=void 0))}handleFormData=e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`kk-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&typeof r<`u`&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))};handleFormSubmit=e=>{let t=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&wo.get(this.form)?.forEach(e=>{this.setUserInteracted(e,!0)}),this.form&&!this.form.noValidate&&!t&&!n(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())};handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Oo.set(this.host,[])};handleInteraction=e=>{let t=Oo.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)};checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0};reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0};setUserInteracted(e,t){t?Do.add(e):Do.delete(e),e.requestUpdate()}doAction(e,t){this.form&&jo(this.form,e,t)}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!Do.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Ao=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze({...Ao,valid:!1,valueMissing:!0}),Object.freeze({...Ao,valid:!1,customError:!0});function jo(e,t,n){let r=document.createElement(`button`);r.type=t,r.style.position=`absolute`,r.style.width=`0`,r.style.height=`0`,r.style.clipPath=`inset(50%)`,r.style.overflow=`hidden`,r.style.whiteSpace=`nowrap`,n&&(r.name=n.name,r.value=n.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{n.hasAttribute(e)&&r.setAttribute(e,n.getAttribute(e))})),e.append(r),r.click(),r.remove()}var N=e=>e??T,{I:Mo}=za,No=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Po=e=>e.strings===void 0,Fo={},Io=(e,t=Fo)=>e._$AH=t,Lo=C`
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
`,Ro={name:`default`,resolver:(e,t)=>ee(`assets/icons/${t}/${e}.svg`)},zo={caret:`
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
  `},Bo=[Ro,{name:`system`,resolver:e=>e in zo?`data:image/svg+xml,${encodeURIComponent(zo[e])}`:``}],Vo=[];function Ho(e){Vo.push(e)}function Uo(e){Vo=Vo.filter(t=>t!==e)}function Wo(e){return Bo.find(t=>t.name===e)}var Go=Symbol(),Ko=Symbol(),qo,Jo=new Map,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,P,is,as,os,ss,cs,ls,us=class extends (rs=M,ns=[k()],ts=[O({reflect:!0})],es=[O()],$o=[O()],Qo=[O({reflect:!0})],Zo=[O({reflect:!0})],Xo=[j(`label`)],Yo=[j([`name`,`src`,`library`,`variant`])],rs){constructor(){super(...arguments),m(P,5,this),g(this,`initialRender`,!1),_(this,is,m(P,8,this,null)),m(P,11,this),_(this,as,m(P,12,this)),m(P,15,this),_(this,os,m(P,16,this)),m(P,19,this),_(this,ss,m(P,20,this,``)),m(P,23,this),_(this,cs,m(P,24,this,`default`)),m(P,27,this),_(this,ls,m(P,28,this,`outline`)),m(P,31,this)}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=w`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Go:Ko}catch{return Ko}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Go;qo||=new DOMParser;let r=qo.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Go}catch{return Go}}connectedCallback(){super.connectedCallback(),Ho(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Uo(this)}getIconSource(){let e=Wo(this.library);return this.name&&e?{url:e.resolver(this.name,this.variant),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?Wo(this.library):void 0;if(!e){this.svg=null;return}let r=Jo.get(e);if(r||(r=this.resolveIcon(e,n),Jo.set(e,r)),!this.initialRender)return;let i=await r;if(i===Ko&&Jo.delete(e),e===this.getIconSource().url){if(No(i)){if(this.svg=i,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(i){case Ko:case Go:this.svg=null,this.emit(`kk-error`);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`kk-load`)}}}render(){return this.svg}};P=f(rs),is=new WeakMap,as=new WeakMap,os=new WeakMap,ss=new WeakMap,cs=new WeakMap,ls=new WeakMap,h(P,4,`svg`,ns,us,is),h(P,4,`name`,ts,us,as),h(P,4,`src`,es,us,os),h(P,4,`label`,$o,us,ss),h(P,4,`library`,Qo,us,cs),h(P,4,`variant`,Zo,us,ls),h(P,1,`handleLabelChange`,Xo,us),h(P,1,`setIcon`,Yo,us),p(P,us),g(us,`styles`,[D,Lo]);var ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,F,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,I=class extends (ws=M,Cs=[A(`.icon-button`)],Ss=[k()],xs=[O()],bs=[O()],ys=[O()],vs=[O()],_s=[O()],gs=[O()],hs=[O()],ms=[O()],ps=[O({type:Boolean,reflect:!0})],fs=[O()],ds=[O({reflect:!0})],ws){constructor(){super(...arguments),_(this,Ts,m(F,8,this)),m(F,11,this),_(this,Es,m(F,12,this,!1)),m(F,15,this),_(this,Ds,m(F,16,this)),m(F,19,this),_(this,Os,m(F,20,this)),m(F,23,this),_(this,ks,m(F,24,this,`outline`)),m(F,27,this),_(this,As,m(F,28,this)),m(F,31,this),_(this,js,m(F,32,this)),m(F,35,this),_(this,Ms,m(F,36,this)),m(F,39,this),_(this,Ns,m(F,40,this)),m(F,43,this),_(this,Ps,m(F,44,this,``)),m(F,47,this),_(this,Fs,m(F,48,this,!1)),m(F,51,this),_(this,Is,m(F,52,this,`button`)),m(F,55,this),_(this,Ls,m(F,56,this)),m(F,59,this)}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}if(this.type!==`button`){let e=this.form?this.getRootNode().querySelector(`#${this.form}`):this.closest(`form`);e&&jo(e,this.type)}}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?bo`a`:bo`button`;return So`
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
    `}};F=f(ws),Ts=new WeakMap,Es=new WeakMap,Ds=new WeakMap,Os=new WeakMap,ks=new WeakMap,As=new WeakMap,js=new WeakMap,Ms=new WeakMap,Ns=new WeakMap,Ps=new WeakMap,Fs=new WeakMap,Is=new WeakMap,Ls=new WeakMap,h(F,4,`button`,Cs,I,Ts),h(F,4,`hasFocus`,Ss,I,Es),h(F,4,`name`,xs,I,Ds),h(F,4,`library`,bs,I,Os),h(F,4,`variant`,ys,I,ks),h(F,4,`src`,vs,I,As),h(F,4,`href`,_s,I,js),h(F,4,`target`,gs,I,Ms),h(F,4,`download`,hs,I,Ns),h(F,4,`label`,ms,I,Ps),h(F,4,`disabled`,ps,I,Fs),h(F,4,`type`,fs,I,Is),h(F,4,`form`,ds,I,Ls),p(F,I),g(I,`styles`,[D,_o]),g(I,`dependencies`,{"kk-icon":us});function Rs(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}var zs=class{host;slotNames=[];constructor(e,...t){this.host=e,e.addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`kk-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function Bs(e){if(!e)return``;let t=e.assignedNodes({flatten:!0}),n=``;return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)}),n}var Vs=C`
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
`,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,L,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc=class e extends ($s=M,Qs=[A(`[part~="base"]`)],Zs=[A(`.alert__countdown-elapsed`)],Xs=[O({type:Boolean,reflect:!0})],Ys=[O({type:Boolean,reflect:!0})],Js=[O({reflect:!0})],qs=[O({type:Number})],Ks=[O({type:String,reflect:!0})],Gs=[k()],Ws=[k()],Us=[j(`open`,{waitUntilFirstUpdate:!0})],Hs=[j(`duration`)],$s){constructor(){super(...arguments),m(L,5,this),g(this,`autoHideTimeout`),g(this,`remainingTimeInterval`),g(this,`countdownAnimation`),g(this,`hasSlotController`,new zs(this,`icon`,`suffix`)),g(this,`localize`,new Pi(this)),_(this,ec,m(L,8,this)),m(L,11,this),_(this,tc,m(L,12,this)),m(L,15,this),_(this,nc,m(L,16,this,!1)),m(L,19,this),_(this,rc,m(L,20,this,!1)),m(L,23,this),_(this,ic,m(L,24,this,`primary`)),m(L,27,this),_(this,ac,m(L,28,this,1/0)),m(L,31,this),_(this,oc,m(L,32,this)),m(L,35,this),_(this,sc,m(L,36,this,this.duration)),m(L,39,this),_(this,cc,m(L,40,this,!1)),m(L,43,this)}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`kk-toast-stack`}),this.currentToastStack}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleCloseClick(){this.hide()}async handleOpenChange(){this.transicao=!0,this.open?(this.emit(`kk-show`),this.duration<1/0&&this.restartAutoHide(),await this.esperarTransicao(),this.emit(`kk-after-show`)):(go(this),this.emit(`kk-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await this.esperarTransicao(),this.emit(`kk-after-hide`))}async esperarTransicao(){await this.updateComplete,await Promise.allSettled(this.base.getAnimations().map(e=>e.finished))}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Rs(this,`kk-after-show`)}async hide(){if(this.open)return this.open=!1,Rs(this,`kk-after-hide`)}async toast(){return new Promise(t=>{this.handleCountdownChange(),e.toastStack.parentElement===null&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`kk-after-hide`,()=>{e.toastStack.removeChild(this),t(),e.toastStack.querySelector(`kk-alert`)===null&&e.toastStack.remove()},{once:!0})})}render(){return w`
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
    `}};L=f($s),ec=new WeakMap,tc=new WeakMap,nc=new WeakMap,rc=new WeakMap,ic=new WeakMap,ac=new WeakMap,oc=new WeakMap,sc=new WeakMap,cc=new WeakMap,h(L,4,`base`,Qs,lc,ec),h(L,4,`countdownElement`,Zs,lc,tc),h(L,4,`open`,Xs,lc,nc),h(L,4,`closable`,Ys,lc,rc),h(L,4,`variant`,Js,lc,ic),h(L,4,`duration`,qs,lc,ac),h(L,4,`countdown`,Ks,lc,oc),h(L,4,`remainingTime`,Gs,lc,sc),h(L,4,`transicao`,Ws,lc,cc),h(L,1,`handleOpenChange`,Us,lc),h(L,1,`handleDurationChange`,Hs,lc),p(L,lc),g(lc,`styles`,[D,Vs]),g(lc,`dependencies`,{"kk-icon-button":I}),g(lc,`currentToastStack`),lc.define(`kk-alert`);var uc=C`
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
`,dc,fc,pc,mc,hc,gc,_c,vc,yc=class extends (mc=M,pc=[O({reflect:!0})],fc=[O({type:Boolean,reflect:!0})],dc=[O({type:Boolean,reflect:!0})],mc){constructor(){super(...arguments),_(this,gc,m(hc,8,this,`primary`)),m(hc,11,this),_(this,_c,m(hc,12,this,!1)),m(hc,15,this),_(this,vc,m(hc,16,this,!1)),m(hc,19,this)}render(){return w`
      <span
        part="base"
        class=${E({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};hc=f(mc),gc=new WeakMap,_c=new WeakMap,vc=new WeakMap,h(hc,4,`variant`,pc,yc,gc),h(hc,4,`pill`,fc,yc,_c),h(hc,4,`pulse`,dc,yc,vc),p(hc,yc),g(yc,`styles`,[D,uc]),yc.define(`kk-badge`);var bc=C`
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
`,xc=class extends M{static styles=[D,bc];localize=new Pi(this);render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}},Sc=C`
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
`,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,R,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,z=class extends (Qc=M,Zc=[A(`.button`)],Xc=[k()],Yc=[k()],Jc=[O()],qc=[O({reflect:!0})],Kc=[O({reflect:!0})],Gc=[O({type:Boolean,reflect:!0})],Wc=[O({type:Boolean,reflect:!0})],Uc=[O({type:Boolean,reflect:!0})],Hc=[O({type:Boolean,reflect:!0})],Vc=[O({type:Boolean,reflect:!0})],Bc=[O({type:Boolean,reflect:!0})],zc=[O({type:Boolean,reflect:!0})],Rc=[O({type:Boolean,reflect:!0})],Lc=[O()],Ic=[O()],Fc=[O()],Pc=[O()],Nc=[O()],Mc=[O()],jc=[O()],Ac=[O()],kc=[O({attribute:`formaction`})],Oc=[O({attribute:`formenctype`})],Dc=[O({attribute:`formmethod`})],Ec=[O({attribute:`formnovalidate`,type:Boolean})],Tc=[O({attribute:`formtarget`})],wc=[j(`disabled`,{waitUntilFirstUpdate:!0})],Cc=[j(`loading`,{waitUntilFirstUpdate:!0})],Qc){constructor(){super(...arguments),m(R,5,this),g(this,`formControlController`,new ko(this,{assumeInteractionOn:[`click`]})),g(this,`hasSlotController`,new zs(this,`[default]`,`prefix`,`suffix`)),g(this,`localize`,new Pi(this)),_(this,$c,m(R,8,this)),m(R,11,this),_(this,el,m(R,12,this,!1)),m(R,15,this),_(this,tl,m(R,16,this,!1)),m(R,19,this),_(this,nl,m(R,20,this,``)),m(R,23,this),_(this,rl,m(R,24,this,`default`)),m(R,27,this),_(this,il,m(R,28,this,`medium`)),m(R,31,this),_(this,al,m(R,32,this,!1)),m(R,35,this),_(this,ol,m(R,36,this,!1)),m(R,39,this),_(this,sl,m(R,40,this,!1)),m(R,43,this),_(this,cl,m(R,44,this,!1)),m(R,47,this),_(this,ll,m(R,48,this,!1)),m(R,51,this),_(this,ul,m(R,52,this,!1)),m(R,55,this),_(this,dl,m(R,56,this,!1)),m(R,59,this),_(this,fl,m(R,60,this,!1)),m(R,63,this),_(this,pl,m(R,64,this,`button`)),m(R,67,this),_(this,ml,m(R,68,this,``)),m(R,71,this),_(this,hl,m(R,72,this,``)),m(R,75,this),_(this,gl,m(R,76,this,``)),m(R,79,this),_(this,_l,m(R,80,this)),m(R,83,this),_(this,vl,m(R,84,this,`noreferrer noopener`)),m(R,87,this),_(this,yl,m(R,88,this)),m(R,91,this),_(this,bl,m(R,92,this)),m(R,95,this),_(this,xl,m(R,96,this)),m(R,99,this),_(this,Sl,m(R,100,this)),m(R,103,this),_(this,Cl,m(R,104,this)),m(R,107,this),_(this,wl,m(R,108,this)),m(R,111,this),_(this,Tl,m(R,112,this)),m(R,115,this)}get validity(){return this.isButton()?this.button.validity:Ao}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`kk-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.isButton()&&this.formControlController.updateValidity()}handleLoadingChange(){this.toggleState(`--loading`,this.loading)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?bo`a`:bo`button`;return So`
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
        ${this.swipe?So`<span part="decor" class="button__decor"></span>`:``}
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        ${this.expand?So`<span class="button__reveal"><slot part="label" class="button__label"></slot></span>`:So`<slot part="label" class="button__label"></slot>`}
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?So` <kk-icon part="caret" class="button__caret" library="system" name="caret"></kk-icon> `:``}
        ${this.loading?So`<kk-spinner part="spinner"></kk-spinner>`:``}
      </${t}>
    `}};R=f(Qc),$c=new WeakMap,el=new WeakMap,tl=new WeakMap,nl=new WeakMap,rl=new WeakMap,il=new WeakMap,al=new WeakMap,ol=new WeakMap,sl=new WeakMap,cl=new WeakMap,ll=new WeakMap,ul=new WeakMap,dl=new WeakMap,fl=new WeakMap,pl=new WeakMap,ml=new WeakMap,hl=new WeakMap,gl=new WeakMap,_l=new WeakMap,vl=new WeakMap,yl=new WeakMap,bl=new WeakMap,xl=new WeakMap,Sl=new WeakMap,Cl=new WeakMap,wl=new WeakMap,Tl=new WeakMap,h(R,4,`button`,Zc,z,$c),h(R,4,`hasFocus`,Xc,z,el),h(R,4,`invalid`,Yc,z,tl),h(R,4,`title`,Jc,z,nl),h(R,4,`variant`,qc,z,rl),h(R,4,`size`,Kc,z,il),h(R,4,`caret`,Gc,z,al),h(R,4,`disabled`,Wc,z,ol),h(R,4,`loading`,Uc,z,sl),h(R,4,`outline`,Hc,z,cl),h(R,4,`pill`,Vc,z,ll),h(R,4,`circle`,Bc,z,ul),h(R,4,`swipe`,zc,z,dl),h(R,4,`expand`,Rc,z,fl),h(R,4,`type`,Lc,z,pl),h(R,4,`name`,Ic,z,ml),h(R,4,`value`,Fc,z,hl),h(R,4,`href`,Pc,z,gl),h(R,4,`target`,Nc,z,_l),h(R,4,`rel`,Mc,z,vl),h(R,4,`download`,jc,z,yl),h(R,4,`form`,Ac,z,bl),h(R,4,`formAction`,kc,z,xl),h(R,4,`formEnctype`,Oc,z,Sl),h(R,4,`formMethod`,Dc,z,Cl),h(R,4,`formNoValidate`,Ec,z,wl),h(R,4,`formTarget`,Tc,z,Tl),h(R,1,`handleDisabledChange`,wc,z),h(R,1,`handleLoadingChange`,Cc,z),p(R,z),g(z,`styles`,[D,Sc]),g(z,`dependencies`,{"kk-icon":us,"kk-spinner":xc}),z.define(`kk-button`);var El=C`
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
`,Dl,Ol,kl,Al,jl,Ml,Nl=class extends (kl=M,Ol=[O({reflect:!0})],Dl=[O({reflect:!0})],kl){constructor(){super(...arguments),g(this,`hasSlotController`,new zs(this,`footer`,`header`,`image`)),_(this,jl,m(Al,8,this,`vertical`)),m(Al,11,this),_(this,Ml,m(Al,12,this,`default`)),m(Al,15,this)}render(){return w`
      <div
        part="base"
        class=${E({card:!0,"card--horizontal":this.orientation===`horizontal`,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-image":this.hasSlotController.test(`image`),"card--has-header":this.hasSlotController.test(`header`),"card--variant":this.variant!=="default",[`card--${this.variant}`]:this.variant!=="default"})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Al=f(kl),jl=new WeakMap,Ml=new WeakMap,h(Al,4,`orientation`,Ol,Nl,jl),h(Al,4,`variant`,Dl,Nl,Ml),p(Al,Nl),g(Nl,`styles`,[D,El]),Nl.define(`kk-card`);var Pl=C`
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
`,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,B,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu=class extends (Gl=M,Wl=[A(`.details`)],Ul=[A(`.details__header`)],Hl=[A(`.details__body`)],Vl=[A(`.details__expand-icon-slot`)],Bl=[k()],zl=[O({type:Boolean,reflect:!0})],Rl=[O()],Ll=[O({type:Boolean,reflect:!0})],Il=[O({reflect:!0})],Fl=[j(`open`,{waitUntilFirstUpdate:!0})],Gl){constructor(){super(...arguments),m(B,5,this),g(this,`localize`,new Pi(this)),_(this,Kl,m(B,8,this)),m(B,11,this),_(this,ql,m(B,12,this)),m(B,15,this),_(this,Jl,m(B,16,this)),m(B,19,this),_(this,Yl,m(B,20,this)),m(B,23,this),g(this,`detailsObserver`),_(this,Xl,m(B,24,this,!1)),m(B,27,this),_(this,Zl,m(B,28,this,!1)),m(B,31,this),_(this,Ql,m(B,32,this)),m(B,35,this),_(this,$l,m(B,36,this,!1)),m(B,39,this),_(this,eu,m(B,40,this)),m(B,43,this)}firstUpdated(){this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`open`&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key===`ArrowUp`||e.key===`ArrowLeft`)&&(e.preventDefault(),this.hide()),(e.key===`ArrowDown`||e.key===`ArrowRight`)&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.transicao=!0,this.open){if(this.details.open=!0,this.emit(`kk-show`,{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await this.esperarTransicao(),this.emit(`kk-after-show`)}else{if(this.emit(`kk-hide`,{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await this.esperarTransicao(),this.open||(this.details.open=!1),this.emit(`kk-after-hide`)}}async esperarTransicao(){await this.updateComplete,await Promise.allSettled(this.body.getAnimations().map(e=>e.finished))}async show(){if(!(this.open||this.disabled))return this.open=!0,Rs(this,`kk-after-show`)}async hide(){if(this.open&&!this.disabled)return this.open=!1,Rs(this,`kk-after-hide`)}render(){let e=this.localize.dir()===`rtl`;return w`
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
    `}};B=f(Gl),Kl=new WeakMap,ql=new WeakMap,Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakMap,eu=new WeakMap,h(B,4,`details`,Wl,tu,Kl),h(B,4,`header`,Ul,tu,ql),h(B,4,`body`,Hl,tu,Jl),h(B,4,`expandIconSlot`,Vl,tu,Yl),h(B,4,`transicao`,Bl,tu,Xl),h(B,4,`open`,zl,tu,Zl),h(B,4,`summary`,Rl,tu,Ql),h(B,4,`disabled`,Ll,tu,$l),h(B,4,`name`,Il,tu,eu),h(B,1,`handleOpenChange`,Fl,tu),p(B,tu),g(tu,`styles`,[D,Pl]),g(tu,`dependencies`,{"kk-icon":us}),tu.define(`kk-details`);var nu=C`
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
`,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu=class extends (cu=M,su=[A(`.dialog`)],ou=[O({type:Boolean,reflect:!0})],au=[O({reflect:!0})],iu=[O({attribute:`no-header`,type:Boolean,reflect:!0})],ru=[j(`open`,{waitUntilFirstUpdate:!0})],cu){constructor(){super(...arguments),m(lu,5,this),g(this,`hasSlotController`,new zs(this,`footer`)),g(this,`localize`,new Pi(this)),_(this,uu,m(lu,8,this)),m(lu,11,this),_(this,du,m(lu,12,this,!1)),m(lu,15,this),_(this,fu,m(lu,16,this,``)),m(lu,19,this),_(this,pu,m(lu,20,this,!1)),m(lu,23,this)}requestClose(e){this.emit(`kk-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented||this.hide()}firstUpdated(){this.open&&this.abrir()}abrir(){this.dialog.open||(this.dialog.showModal(),this.emit(`kk-initial-focus`,{cancelable:!0}))}fechar(){this.dialog.open&&this.dialog.close()}handleOpenChange(){this.open?(this.emit(`kk-show`),this.abrir(),this.emit(`kk-after-show`)):(this.emit(`kk-hide`),this.fechar(),this.emit(`kk-after-hide`))}async show(){this.open||=!0}async hide(){this.open&&=!1}handleCancel(e){e.preventDefault(),this.requestClose(`keyboard`)}handleClose(){this.open=!1}render(){return w`
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
    `}};lu=f(cu),uu=new WeakMap,du=new WeakMap,fu=new WeakMap,pu=new WeakMap,h(lu,4,`dialog`,su,mu,uu),h(lu,4,`open`,ou,mu,du),h(lu,4,`label`,au,mu,fu),h(lu,4,`noHeader`,iu,mu,pu),h(lu,1,`handleOpenChange`,ru,mu),p(lu,mu),g(mu,`styles`,[D,nu]),g(mu,`dependencies`,{"kk-icon-button":I}),mu.define(`kk-dialog`);var hu=C`
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
`,gu={top:`bottom`,bottom:`top`,left:`right`,right:`left`};function _u(e){return e.split(`-`)[0]}function vu(e){return e.split(`-`)[1]}function yu(e){return e===`top`||e===`bottom`}function bu(e){let t=vu(e),n=gu[_u(e)];return t===void 0?n:`${n}-${t}`}function xu(e,t){let n={esquerda:0,topo:0,direita:window.innerWidth,base:window.innerHeight},r=e===void 0?[]:Array.isArray(e)?e:[e];for(let e of r){let t=e.getBoundingClientRect();n.esquerda=Math.max(n.esquerda,t.left),n.topo=Math.max(n.topo,t.top),n.direita=Math.min(n.direita,t.right),n.base=Math.min(n.base,t.bottom)}return{esquerda:n.esquerda+t,topo:n.topo+t,direita:n.direita-t,base:n.base-t}}function Su(e,t,n,r,i,a){let o=_u(r),s=vu(r),c=0,l=0;return yu(o)?(l=o===`top`?e.top-n-i:e.bottom+i,c=s===`start`?e.left:s===`end`?e.right-t:e.left+(e.width-t)/2,c+=a):(c=o===`left`?e.left-t-i:e.right+i,l=s===`start`?e.top:s===`end`?e.bottom-n:e.top+(e.height-n)/2,l+=a),{x:c,y:l}}function Cu(e,t,n,r,i){return Math.max(0,i.esquerda-e)+Math.max(0,i.topo-t)+Math.max(0,e+n-i.direita)+Math.max(0,t+r-i.base)}function wu(e,t,n,r,i,a){switch(i){case`top`:return Math.max(0,a.topo-t);case`bottom`:return Math.max(0,t+r-a.base);case`left`:return Math.max(0,a.esquerda-e);case`right`:return Math.max(0,e+n-a.direita)}}function Tu(e,t,n,r){let i=r.direita-r.esquerda,a=r.base-r.topo;switch(t){case`top`:return{largura:i,altura:e.top-r.topo-n};case`bottom`:return{largura:i,altura:r.base-e.bottom-n};case`left`:return{largura:e.left-r.esquerda-n,altura:a};case`right`:return{largura:r.direita-e.right-n,altura:a}}}function Eu(e){let t=e.contextElement??(e instanceof Element?e:void 0);if(t===void 0)return!1;let n=t.getBoundingClientRect();if(n.width===0&&n.height===0)return!0;for(let e=t.parentElement;e!==null;e=e.parentElement){let t=getComputedStyle(e);if(!/auto|scroll|hidden|clip/.test(t.overflow+t.overflowX+t.overflowY))continue;let r=e.getBoundingClientRect();if(n.bottom<=r.top||n.top>=r.bottom||n.right<=r.left||n.left>=r.right)return!0}return!1}function Du(e,t,n){let r=n.distancia??0,i=n.desvio??0,a=e.getBoundingClientRect();if(n.espelhar!==void 0){let e=n.espelhar===`width`||n.espelhar===`both`,r=n.espelhar===`height`||n.espelhar===`both`;t.style.width=e?`${a.width}px`:``,t.style.height=r?`${a.height}px`:``}else t.style.width=``,t.style.height=``;let o=t.offsetWidth,s=t.offsetHeight,c=n.posicionamento,l=xu(n.virarLimite,n.virarPreenchimento??0);if(n.virar===!0){let e=[n.posicionamento,...n.virarAlternativas??[bu(n.posicionamento)]],t=n.posicionamento,u=1/0,d=!1;for(let n of e){let{x:e,y:c}=Su(a,o,s,n,r,i);if(wu(e,c,o,s,_u(n),l)===0){t=n,d=!0;break}let ee=Cu(e,c,o,s,l);ee<u&&(u=ee,t=n)}c=d||(n.virarEstrategia??`melhor-encaixe`)===`melhor-encaixe`?t:n.posicionamento}let u=_u(c),{x:d,y:ee}=Su(a,o,s,c,r,i);if(n.deslizar===!0){let e=xu(n.deslizarLimite,n.deslizarPreenchimento??0);yu(u)?d=Math.min(Math.max(d,e.esquerda),Math.max(e.esquerda,e.direita-o)):ee=Math.min(Math.max(ee,e.topo),Math.max(e.topo,e.base-s))}let te=n.medirEspaco===!0?Tu(a,u,r,xu(n.medirLimite,n.medirPreenchimento??0)):{largura:1/0,altura:1/0},ne={};if(n.seta!==void 0){let e=n.setaPreenchimento??0,t=yu(u)?n.seta.offsetWidth:n.seta.offsetHeight;if(yu(u)){let n=a.left+a.width/2-d-t/2;ne.x=Math.min(Math.max(n,e),o-t-e)}else{let n=a.top+a.height/2-ee-t/2;ne.y=Math.min(Math.max(n,e),s-t-e)}}return{x:Math.round(d),y:Math.round(ee),posicionamento:c,espacoLivre:te,ancoraOculta:Eu(e),seta:ne}}function Ou(e,t,n){let r=e.contextElement??(e instanceof Element?e:void 0),i=[window];for(let e=r?.parentElement??null;e!==null;e=e.parentElement){let t=getComputedStyle(e);/auto|scroll|overlay/.test(t.overflow+t.overflowX+t.overflowY)&&i.push(e)}for(let e of i)e.addEventListener(`scroll`,n,{passive:!0,capture:!0});window.addEventListener(`resize`,n,{passive:!0});let a=new ResizeObserver(n);return r!==void 0&&a.observe(r),a.observe(t),n(),()=>{for(let e of i)e.removeEventListener(`scroll`,n,{capture:!0});window.removeEventListener(`resize`,n),a.disconnect()}}function ku(e){return(Array.isArray(e)?e:String(e).split(` `)).map(e=>e.trim()).filter(e=>e!==``)}function Au(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e.contextElement instanceof Element:!0)}var ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,V,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,H=class extends (td=M,ed=[A(`.popup`)],$u=[A(`.popup__arrow`)],Qu=[A(`.popup-hover-bridge`)],Zu=[O()],Xu=[O({type:Boolean,reflect:!0})],Yu=[O({reflect:!0})],Ju=[O({type:Number})],qu=[O({type:Number})],Ku=[O({type:Boolean})],Gu=[O({attribute:`arrow-placement`})],Wu=[O({attribute:`arrow-padding`,type:Number})],Uu=[O({type:Boolean})],Hu=[O({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],Vu=[O({attribute:`flip-fallback-strategy`})],Bu=[O({type:Object})],zu=[O({attribute:`flip-padding`,type:Number})],Ru=[O({type:Boolean})],Lu=[O({type:Object})],Iu=[O({attribute:`shift-padding`,type:Number})],Fu=[O({attribute:`auto-size`})],Pu=[O()],Nu=[O({type:Object})],Mu=[O({attribute:`auto-size-padding`,type:Number})],ju=[O({attribute:`hover-bridge`,type:Boolean})],td){constructor(){super(...arguments),g(this,`anchorEl`),g(this,`cleanup`),g(this,`localize`,new Pi(this)),_(this,nd,m(V,8,this)),m(V,11,this),_(this,rd,m(V,12,this)),m(V,15,this),_(this,id,m(V,16,this)),m(V,19,this),_(this,ad,m(V,20,this)),m(V,23,this),_(this,od,m(V,24,this,!1)),m(V,27,this),_(this,sd,m(V,28,this,`top`)),m(V,31,this),_(this,cd,m(V,32,this,0)),m(V,35,this),_(this,ld,m(V,36,this,0)),m(V,39,this),_(this,ud,m(V,40,this,!1)),m(V,43,this),_(this,dd,m(V,44,this,`anchor`)),m(V,47,this),_(this,fd,m(V,48,this,10)),m(V,51,this),_(this,pd,m(V,52,this,!1)),m(V,55,this),_(this,md,m(V,56,this,``)),m(V,59,this),_(this,hd,m(V,60,this,`best-fit`)),m(V,63,this),_(this,gd,m(V,64,this)),m(V,67,this),_(this,_d,m(V,68,this,0)),m(V,71,this),_(this,vd,m(V,72,this,!1)),m(V,75,this),_(this,yd,m(V,76,this)),m(V,79,this),_(this,bd,m(V,80,this,0)),m(V,83,this),_(this,xd,m(V,84,this)),m(V,87,this),_(this,Sd,m(V,88,this)),m(V,91,this),_(this,Cd,m(V,92,this)),m(V,95,this),_(this,wd,m(V,96,this,0)),m(V,99,this),_(this,Td,m(V,100,this,!1)),m(V,103,this),g(this,`updateHoverBridge`,()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--kk-popup-hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--kk-popup-hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--kk-popup-hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--kk-popup-hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-right-y`,`${u}px`)}})}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),(e.has(`active`)||e.has(`hoverBridge`))&&this.syncTopLayer(),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}syncTopLayer(){if(!this.isConnected||!this.popup||!this.hoverBridgeEl)return;let e=this.active&&this.hoverBridge;e&&!this.hoverBridgeEl.matches(`:popover-open`)&&this.popup.matches(`:popover-open`)&&this.popup.hidePopover(),e!==this.hoverBridgeEl.matches(`:popover-open`)&&(e?this.hoverBridgeEl.showPopover():this.hoverBridgeEl.hidePopover()),this.active!==this.popup.matches(`:popover-open`)&&(this.active?this.popup.showPopover():this.popup.hidePopover())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||Au(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Ou(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.removeAttribute(`data-anchor-hidden`),this.style.removeProperty(`--kk-popup-auto-size-available-width`),this.style.removeProperty(`--kk-popup-auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let{x:e,y:t,posicionamento:n,espacoLivre:r,ancoraOculta:i,seta:a}=Du(this.anchorEl,this.popup,{posicionamento:this.placement,distancia:this.distance,desvio:this.skidding,virar:this.flip,...this.flipFallbackPlacements.length>0?{virarAlternativas:ku(this.flipFallbackPlacements)}:{},virarEstrategia:this.flipFallbackStrategy===`best-fit`?`melhor-encaixe`:`inicial`,virarLimite:this.flipBoundary,virarPreenchimento:this.flipPadding,deslizar:this.shift,deslizarLimite:this.shiftBoundary,deslizarPreenchimento:this.shiftPadding,medirEspaco:!!this.autoSize,medirLimite:this.autoSizeBoundary,medirPreenchimento:this.autoSizePadding,...this.sync?{espelhar:this.sync}:{},...this.arrow?{seta:this.arrowEl,setaPreenchimento:this.arrowPadding}:{}});if(this.setAttribute(`data-current-placement`,n),this.toggleAttribute(`data-anchor-hidden`,i),this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--kk-popup-auto-size-available-height`,`${r.altura}px`):this.style.removeProperty(`--kk-popup-auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--kk-popup-auto-size-available-width`,`${r.largura}px`):this.style.removeProperty(`--kk-popup-auto-size-available-width`),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=this.localize.dir()===`rtl`,t={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[n.split(`-`)[0]],r=``,i=``,o=``,s=``;if(this.arrowPlacement===`start`){let t=typeof a.x==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``;r=typeof a.y==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``,i=e?t:``,s=e?``:t}else if(this.arrowPlacement===`end`){let t=typeof a.x==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``;i=e?``:t,s=e?t:``,o=typeof a.y==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(s=typeof a.x==`number`?`calc(50% - var(--kk-popup-arrow-size-diagonal))`:``,r=typeof a.y==`number`?`calc(50% - var(--kk-popup-arrow-size-diagonal))`:``):(s=typeof a.x==`number`?`${a.x}px`:``,r=typeof a.y==`number`?`${a.y}px`:``);Object.assign(this.arrowEl.style,{top:r,right:i,bottom:o,left:s,[t]:`calc(var(--kk-popup-arrow-size-diagonal) * -1)`})}requestAnimationFrame(()=>this.updateHoverBridge()),this.emit(`kk-reposition`)}render(){return w`
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
    `}};V=f(td),nd=new WeakMap,rd=new WeakMap,id=new WeakMap,ad=new WeakMap,od=new WeakMap,sd=new WeakMap,cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,dd=new WeakMap,fd=new WeakMap,pd=new WeakMap,md=new WeakMap,hd=new WeakMap,gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,yd=new WeakMap,bd=new WeakMap,xd=new WeakMap,Sd=new WeakMap,Cd=new WeakMap,wd=new WeakMap,Td=new WeakMap,h(V,4,`popup`,ed,H,nd),h(V,4,`arrowEl`,$u,H,rd),h(V,4,`hoverBridgeEl`,Qu,H,id),h(V,4,`anchor`,Zu,H,ad),h(V,4,`active`,Xu,H,od),h(V,4,`placement`,Yu,H,sd),h(V,4,`distance`,Ju,H,cd),h(V,4,`skidding`,qu,H,ld),h(V,4,`arrow`,Ku,H,ud),h(V,4,`arrowPlacement`,Gu,H,dd),h(V,4,`arrowPadding`,Wu,H,fd),h(V,4,`flip`,Uu,H,pd),h(V,4,`flipFallbackPlacements`,Hu,H,md),h(V,4,`flipFallbackStrategy`,Vu,H,hd),h(V,4,`flipBoundary`,Bu,H,gd),h(V,4,`flipPadding`,zu,H,_d),h(V,4,`shift`,Ru,H,vd),h(V,4,`shiftBoundary`,Lu,H,yd),h(V,4,`shiftPadding`,Iu,H,bd),h(V,4,`autoSize`,Fu,H,xd),h(V,4,`sync`,Pu,H,Sd),h(V,4,`autoSizeBoundary`,Nu,H,Cd),h(V,4,`autoSizePadding`,Mu,H,wd),h(V,4,`hoverBridge`,ju,H,Td),p(V,H),g(H,`styles`,[D,hu]);function*Ed(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Ed(e.shadowRoot.activeElement)))}function Dd(){return[...Ed()].pop()}var Od=new WeakMap;function kd(e){let t=Od.get(e);return t||(t=window.getComputedStyle(e,null),Od.set(e,t)),t}function Ad(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=kd(e);return t.visibility!==`hidden`&&t.display!==`none`}function jd(e){let{overflowY:t,overflowX:n}=kd(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function Md(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));if(e.hasAttribute(`tabindex`)&&(Number.isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`))return!1;if(t===`input`&&e.getAttribute(`type`)===`radio`){let t=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute(`name`)}"]`,r=t.querySelector(`${n}:checked`);return r?r===e:t.querySelector(n)===e}return Ad(e)?(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:jd(e):!1}function Nd(e){let t=Fd(e);return{start:t[0]??null,end:t.at(-1)??null}}function Pd(e,t){return e.getRootNode({composed:!0})?.host!==t}function Fd(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),i instanceof HTMLElement&&!n.includes(i)&&Md(i)&&n.push(i),i instanceof HTMLSlotElement&&Pd(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of i.children)r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}var Id=C`
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
`,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,U,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf=class extends (Yd=M,Jd=[A(`.dropdown`)],qd=[A(`.dropdown__trigger`)],Kd=[A(`.dropdown__panel`)],Gd=[O({type:Boolean,reflect:!0})],Wd=[O({reflect:!0})],Ud=[O({type:Boolean,reflect:!0})],Hd=[O({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],Vd=[O({attribute:!1})],Bd=[O({type:Number})],zd=[O({type:Number})],Rd=[O({reflect:!0})],Ld=[j(`open`,{waitUntilFirstUpdate:!0})],Yd){constructor(){super(...arguments),m(U,5,this),_(this,Xd,m(U,8,this)),m(U,11,this),_(this,Zd,m(U,12,this)),m(U,15,this),_(this,Qd,m(U,16,this)),m(U,19,this),g(this,`closeWatcher`),_(this,$d,m(U,20,this,!1)),m(U,23,this),_(this,ef,m(U,24,this,`bottom-start`)),m(U,27,this),_(this,tf,m(U,28,this,!1)),m(U,31,this),_(this,nf,m(U,32,this,!1)),m(U,35,this),_(this,rf,m(U,36,this)),m(U,39,this),_(this,af,m(U,40,this,0)),m(U,43,this),_(this,of,m(U,44,this,0)),m(U,47,this),_(this,sf,m(U,48,this)),m(U,51,this),g(this,`handleKeyDown`,e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}),g(this,`handleDocumentKeyDown`,e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`kk-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?Dd():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}}),g(this,`handleDocumentMouseDown`,e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}),g(this,`handlePanelSelect`,e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`kk-menu`&&(this.hide(),this.focusOnTrigger())})}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`kk-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems();if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){e.preventDefault(),this.open||(this.show(),await this.updateComplete);let r=e.key===`ArrowDown`||e.key===`Home`?n.at(0):n.at(-1);r&&this.updateComplete.then(()=>{t.setCurrentItem(r),r.focus()})}}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>Nd(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`kk-button`:case`kk-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,Rs(this,`kk-after-show`)}async hide(){if(this.open)return this.open=!1,Rs(this,`kk-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener(`kk-select`,this.handlePanelSelect),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener(`kk-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.emit(`kk-show`),this.addOpenListeners(),this.popup.active=!0,await this.esperarTransicao(),this.emit(`kk-after-show`)):(this.emit(`kk-hide`),this.removeOpenListeners(),await this.esperarTransicao(),this.open||(this.popup.active=!1),this.emit(`kk-after-hide`))}async esperarTransicao(){await this.updateComplete,await Promise.allSettled(this.popup.popup.getAnimations().map(e=>e.finished))}render(){return w`
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
    `}};U=f(Yd),Xd=new WeakMap,Zd=new WeakMap,Qd=new WeakMap,$d=new WeakMap,ef=new WeakMap,tf=new WeakMap,nf=new WeakMap,rf=new WeakMap,af=new WeakMap,of=new WeakMap,sf=new WeakMap,h(U,4,`popup`,Jd,cf,Xd),h(U,4,`trigger`,qd,cf,Zd),h(U,4,`panel`,Kd,cf,Qd),h(U,4,`open`,Gd,cf,$d),h(U,4,`placement`,Wd,cf,ef),h(U,4,`disabled`,Ud,cf,tf),h(U,4,`stayOpenOnSelect`,Hd,cf,nf),h(U,4,`containingElement`,Vd,cf,rf),h(U,4,`distance`,Bd,cf,af),h(U,4,`skidding`,zd,cf,of),h(U,4,`sync`,Rd,cf,sf),h(U,1,`handleOpenChange`,Ld,cf),p(U,cf),g(cf,`styles`,[D,Id]),g(cf,`dependencies`,{"kk-popup":H}),cf.define(`kk-dropdown`);var lf=C`
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
`,uf,df,ff,pf,mf=class extends (df=M,uf=[A(`slot`)],df){constructor(){super(...arguments),_(this,pf,m(ff,8,this)),m(ff,11,this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`)}handleClick(e){let t=[`menuitem`,`menuitemcheckbox`],n=e.composedPath(),r=n.find(e=>e instanceof Element&&t.includes(e.getAttribute(`role`)??``));if(!r||n.find(e=>e instanceof Element&&e.getAttribute(`role`)===`menu`)!==this)return;let i=r;i.type===`checkbox`&&(i.checked=!i.checked),this.emit(`kk-select`,{detail:{item:i}})}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`kk-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getAllItems(){return this.defaultSlot.assignedElements({flatten:!0}).filter(e=>!(!(e instanceof HTMLElement)||e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return w`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ff=f(df),pf=new WeakMap,h(ff,4,`defaultSlot`,uf,mf,pf),p(ff,mf),g(mf,`styles`,[D,lf]);var hf=C`
  :host {
    --kk-menu-item-submenu-offset: -2px;

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

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
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
    width: 1.5em;
    visibility: hidden;
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
`,gf=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),gf(e,t);return!0},_f=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},vf=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),xf(t)}};function yf(e){this._$AN===void 0?this._$AM=e:(_f(this),this._$AM=e,vf(this))}function bf(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)gf(r[e],!1),_f(r[e]);else r!=null&&(gf(r,!1),_f(r))}else gf(this,e)}}var xf=e=>{e.type==Ka.CHILD&&(e._$AP??=bf,e._$AQ??=yf)},Sf=class extends Ja{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),vf(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(gf(this,e),_f(this))}setValue(e){if(Po(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Cf=()=>new wf,wf=class{},Tf=new WeakMap,Ef=qa(class extends Sf{render(e){return T}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),T}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Tf.get(t);n===void 0&&(n=new WeakMap,Tf.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?Tf.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Df=class{host;popupRef=Cf();enableSubmenuTimer=-1;isConnected=!1;isPopupConnected=!1;skidding=0;hasSlotController;submenuOpenDelay=100;constructor(e,t){this.host=e,e.addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`kk-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`kk-reposition`,this.handlePopupReposition),this.isPopupConnected=!1)}handleMouseMove=e=>{this.host.style.setProperty(`--kk-menu-item-safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-cursor-y`,`${e.clientY}px`)};handleMouseOver=()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()};handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`kk-menu-item, [role^='menuitem']`),n.length!==0)break;if(n&&n.length!==0){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}handleKeyDown=e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e)}};handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`kk-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()};handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()};handlePopupMouseover=e=>{e.stopPropagation()};handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`kk-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-end-y`,`${r+a}px`)};setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap(),t=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?w`
      <kk-popup
        ${Ef(this.popupRef)}
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
    `:w` <slot name="submenu" hidden></slot> `}},Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,W,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf=class extends (Rf=M,Lf=[A(`slot:not([name])`)],If=[A(`.menu-item`)],Ff=[O()],Pf=[O({type:Boolean,reflect:!0})],Nf=[O()],Mf=[O({type:Boolean,reflect:!0})],jf=[O({type:Boolean,reflect:!0})],Af=[j(`checked`)],kf=[j(`disabled`)],Of=[j(`type`)],Rf){constructor(){super(...arguments),m(W,5,this),g(this,`cachedTextLabel`),g(this,`localize`,new Pi(this)),_(this,zf,m(W,8,this)),m(W,11,this),_(this,Bf,m(W,12,this)),m(W,15,this),_(this,Vf,m(W,16,this,`normal`)),m(W,19,this),_(this,Hf,m(W,20,this,!1)),m(W,23,this),_(this,Uf,m(W,24,this,``)),m(W,27,this),_(this,Wf,m(W,28,this,!1)),m(W,31,this),_(this,Gf,m(W,32,this,!1)),m(W,35,this),g(this,`hasSlotController`,new zs(this,`submenu`)),g(this,`submenuController`,new Df(this,this.hasSlotController)),g(this,`handleHostClick`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),g(this,`handleMouseOver`,e=>{this.focus(),e.stopPropagation()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseover`,this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseover`,this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();if(typeof this.cachedTextLabel>`u`){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!==`checkbox`){this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this);return}this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return Bs(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return w`
      <div
        id="anchor"
        part="base"
        class=${E({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <kk-icon name="check" library="system" aria-hidden="true"></kk-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <kk-icon name=${e?`chevron-left`:`chevron-right`} library="system" aria-hidden="true"></kk-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?w` <kk-spinner part="spinner" exportparts="base:spinner__base"></kk-spinner> `:``}
      </div>
    `}};W=f(Rf),zf=new WeakMap,Bf=new WeakMap,Vf=new WeakMap,Hf=new WeakMap,Uf=new WeakMap,Wf=new WeakMap,Gf=new WeakMap,h(W,4,`defaultSlot`,Lf,Kf,zf),h(W,4,`menuItem`,If,Kf,Bf),h(W,4,`type`,Ff,Kf,Vf),h(W,4,`checked`,Pf,Kf,Hf),h(W,4,`value`,Nf,Kf,Uf),h(W,4,`loading`,Mf,Kf,Wf),h(W,4,`disabled`,jf,Kf,Gf),h(W,1,`handleCheckedChange`,Af,Kf),h(W,1,`handleDisabledChange`,kf,Kf),h(W,1,`handleTypeChange`,Of,Kf),p(W,Kf),g(Kf,`styles`,[D,hf]),g(Kf,`dependencies`,{"kk-icon":us,"kk-popup":H,"kk-spinner":xc});var qf=C`
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
   * A epígrafe é a citação curta que abre um texto: menor, em itálico, recuada
   * para o lado do fim e em cor apagada, para não disputar com o primeiro
   * parágrafo. O recuo é do lado do início, e não uma largura fixa — numa coluna
   * estreita uma largura cravada cortaria a frase.
   */
  .paragrafo--epigrafe {
    margin-inline-start: 25%;
    font-size: var(--kk-font-size-small);
    font-style: italic;
    text-align: end;
    color: var(--kk-color-text-muted);
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
    border-inline-start: solid 3px var(--kk-color-primary-600);
    border-radius: 0 var(--kk-border-radius-medium) var(--kk-border-radius-medium) 0;
    background-color: var(--kk-color-primary-50);
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

  .kk-editor__sample.paragrafo--epigrafe,
  .kk-editor__sample.poesia--refrao {
    margin-inline-start: 0;
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
`,Jf=C`
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
`,Yf=qa(class extends Ja{constructor(e){if(super(e),e.type!==Ka.PROPERTY&&e.type!==Ka.ATTRIBUTE&&e.type!==Ka.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Po(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ta||t===T)return t;let n=e.element,r=e.name;if(e.type===Ka.PROPERTY){if(t===n[r])return Ta}else if(e.type===Ka.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Ta}else if(e.type===Ka.ATTRIBUTE&&n.getAttribute(r)===t+``)return Ta;return Io(e),t}});function Xf(e){return e.validity.valid?``:e.validationMessage===``?` `:e.validationMessage}var Zf=class{host;interacaoEm;vistos=new Set;interagiu=!1;constructor(e,t){this.host=e,this.interacaoEm=t?.interacaoEm??[`kk-blur`,`kk-input`],e.addController(this)}hostConnected(){this.host.addEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.addEventListener(e,this.aoInteragir)}hostDisconnected(){this.host.removeEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.removeEventListener(e,this.aoInteragir)}aoInvalidar=e=>{this.conferindo||this.marcarInteragido(),this.host.emitInvalidEvent(e)};conferindo=!1;conferir(e){this.conferindo=!0;try{return e()}finally{this.conferindo=!1}}aoInteragir=e=>{this.vistos.add(e.type),!(this.vistos.size<this.interacaoEm.length)&&this.marcarInteragido()};marcarInteragido(){this.interagiu||(this.interagiu=!0,this.host.updateValidity())}esquecerInteracao(){this.vistos.clear(),this.interagiu=!1}aplicar(e,t){let n=this.host.required===!0;t(`--required`,n),t(`--optional`,!n),t(`--valid`,e),t(`--invalid`,!e),t(`--user-valid`,e&&this.interagiu),t(`--user-invalid`,!e&&this.interagiu)}},Qf=C`
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
`,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,G,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,K=class extends (Ip=M,Fp=[A(`.input__control`)],Pp=[k()],Np=[O()],Mp=[O({reflect:!0})],jp=[O()],Ap=[O()],kp=[$a()],Op=[O({reflect:!0})],Dp=[O({type:Boolean,reflect:!0})],Ep=[O({type:Boolean,reflect:!0})],Tp=[O()],wp=[O({attribute:`help-text`})],Cp=[O({type:Boolean})],Sp=[O({type:Boolean,reflect:!0})],xp=[O()],bp=[O({type:Boolean,reflect:!0})],yp=[O({attribute:`password-toggle`,type:Boolean})],vp=[O({attribute:`password-visible`,type:Boolean})],_p=[O({attribute:`no-spin-buttons`,type:Boolean})],gp=[O({reflect:!0,converter:Co})],hp=[O({type:Boolean,reflect:!0})],mp=[O()],pp=[O({type:Number})],fp=[O({type:Number})],dp=[O()],up=[O()],lp=[O()],cp=[O()],sp=[O({converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],op=[O()],ap=[O({type:Boolean})],ip=[O()],rp=[O({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],np=[O()],tp=[j(`disabled`,{waitUntilFirstUpdate:!0})],ep=[j(`step`,{waitUntilFirstUpdate:!0})],$f=[j(`value`,{waitUntilFirstUpdate:!0})],Ip){constructor(){super(...arguments),m(G,5,this),g(this,`validade`,new Zf(this,{interacaoEm:[`kk-blur`,`kk-input`]})),g(this,`hasSlotController`,new zs(this,`help-text`,`label`)),g(this,`localize`,new Pi(this)),_(this,Lp,m(G,8,this)),m(G,11,this),_(this,Rp,m(G,12,this,!1)),m(G,15,this),_(this,zp,m(G,16,this,``)),m(G,19,this),g(this,`__numberInput`,Object.assign(document.createElement(`input`),{type:`number`})),g(this,`__dateInput`,Object.assign(document.createElement(`input`),{type:`date`})),_(this,Bp,m(G,20,this,`text`)),m(G,23,this),_(this,Vp,m(G,24,this,``)),m(G,27,this),_(this,Hp,m(G,28,this,``)),m(G,31,this),g(this,`defaultValue`,m(G,140,this,``)),m(G,143,this),_(this,Up,m(G,32,this,`medium`)),m(G,35,this),_(this,Wp,m(G,36,this,!1)),m(G,39,this),_(this,Gp,m(G,40,this,!1)),m(G,43,this),_(this,Kp,m(G,44,this,``)),m(G,47,this),_(this,qp,m(G,48,this,``)),m(G,51,this),_(this,Jp,m(G,52,this,!1)),m(G,55,this),_(this,Yp,m(G,56,this,!1)),m(G,59,this),_(this,Xp,m(G,60,this,``)),m(G,63,this),_(this,Zp,m(G,64,this,!1)),m(G,67,this),_(this,Qp,m(G,68,this,!1)),m(G,71,this),_(this,$p,m(G,72,this,!1)),m(G,75,this),_(this,em,m(G,76,this,!1)),m(G,79,this),_(this,tm,m(G,80,this,``)),m(G,83,this),_(this,nm,m(G,84,this,!1)),m(G,87,this),_(this,rm,m(G,88,this)),m(G,91,this),_(this,im,m(G,92,this)),m(G,95,this),_(this,am,m(G,96,this)),m(G,99,this),_(this,om,m(G,100,this)),m(G,103,this),_(this,sm,m(G,104,this)),m(G,107,this),_(this,cm,m(G,108,this)),m(G,111,this),_(this,lm,m(G,112,this)),m(G,115,this),_(this,um,m(G,116,this,!0)),m(G,119,this),_(this,dm,m(G,120,this)),m(G,123,this),_(this,fm,m(G,124,this)),m(G,127,this),_(this,pm,m(G,128,this)),m(G,131,this),_(this,mm,m(G,132,this,!0)),m(G,135,this),_(this,hm,m(G,136,this)),m(G,139,this)}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.value),this.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`kk-blur`)}handleChange(){this.value=this.input.value,this.emit(`kk-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`kk-clear`),this.emit(`kk-input`),this.emit(`kk-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`kk-focus`)}handleInput(){this.value=this.input.value,this.updateValidity(),this.emit(`kk-input`)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this._internals.form?.requestSubmit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.input.disabled=this.disabled,this.updateValidity()}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}async handleValueChange(){this._internals.setFormValue(this.value),await this.updateComplete,this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){let e=this.input.validity.valid;this.toggleState(`--empty`,!this.value),this.validade.aplicar(e,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,Xf(this.input),this.input)}emitInvalidEvent(e){let t=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.dispatchEvent(t)||e?.preventDefault()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return w`
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
              .value=${Yf(this.value)}
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
    `}};G=f(Ip),Lp=new WeakMap,Rp=new WeakMap,zp=new WeakMap,Bp=new WeakMap,Vp=new WeakMap,Hp=new WeakMap,Up=new WeakMap,Wp=new WeakMap,Gp=new WeakMap,Kp=new WeakMap,qp=new WeakMap,Jp=new WeakMap,Yp=new WeakMap,Xp=new WeakMap,Zp=new WeakMap,Qp=new WeakMap,$p=new WeakMap,em=new WeakMap,tm=new WeakMap,nm=new WeakMap,rm=new WeakMap,im=new WeakMap,am=new WeakMap,om=new WeakMap,sm=new WeakMap,cm=new WeakMap,lm=new WeakMap,um=new WeakMap,dm=new WeakMap,fm=new WeakMap,pm=new WeakMap,mm=new WeakMap,hm=new WeakMap,h(G,4,`input`,Fp,K,Lp),h(G,4,`hasFocus`,Pp,K,Rp),h(G,4,`title`,Np,K,zp),h(G,4,`type`,Mp,K,Bp),h(G,4,`name`,jp,K,Vp),h(G,4,`value`,Ap,K,Hp),h(G,4,`size`,Op,K,Up),h(G,4,`filled`,Dp,K,Wp),h(G,4,`pill`,Ep,K,Gp),h(G,4,`label`,Tp,K,Kp),h(G,4,`helpText`,wp,K,qp),h(G,4,`clearable`,Cp,K,Jp),h(G,4,`disabled`,Sp,K,Yp),h(G,4,`placeholder`,xp,K,Xp),h(G,4,`readonly`,bp,K,Zp),h(G,4,`passwordToggle`,yp,K,Qp),h(G,4,`passwordVisible`,vp,K,$p),h(G,4,`noSpinButtons`,_p,K,em),h(G,4,`form`,gp,K,tm),h(G,4,`required`,hp,K,nm),h(G,4,`pattern`,mp,K,rm),h(G,4,`minlength`,pp,K,im),h(G,4,`maxlength`,fp,K,am),h(G,4,`min`,dp,K,om),h(G,4,`max`,up,K,sm),h(G,4,`step`,lp,K,cm),h(G,4,`autocapitalize`,cp,K,lm),h(G,4,`autocorrect`,sp,K,um),h(G,4,`autocomplete`,op,K,dm),h(G,4,`autofocus`,ap,K,fm),h(G,4,`enterkeyhint`,ip,K,pm),h(G,4,`spellcheck`,rp,K,mm),h(G,4,`inputmode`,np,K,hm),h(G,1,`handleDisabledChange`,tp,K),h(G,1,`handleStepChange`,ep,K),h(G,1,`handleValueChange`,$f,K),h(G,5,`defaultValue`,kp,K),p(G,K),g(K,`styles`,[D,Qf,Jf]),g(K,`dependencies`,{"kk-icon":us}),g(K,`formAssociated`,!0);function gm(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}var _m=new Set(`p.br.div.span.h1.h2.h3.h4.strong.b.em.i.u.s.strike.sub.sup.mark.ul.ol.li.blockquote.hr.a.img.table.thead.tbody.tr.th.td`.split(`.`)),vm={"*":[`class`,`style`],a:[`href`,`title`,`data-nota`],img:[`src`,`alt`],td:[`colspan`,`rowspan`],th:[`colspan`,`rowspan`]},ym=new Set([`script`,`style`,`iframe`,`object`,`embed`,`template`]),bm=[{classe:`destaque--azul`,termo:`editorColorBlue`,icone:`highlight`},{classe:`destaque--verde`,termo:`editorColorGreen`,icone:`highlight`},{classe:`destaque--vermelho`,termo:`editorColorRed`,icone:`highlight`},{classe:`destaque--amarelo`,termo:`editorColorYellow`,icone:`highlight`},{classe:`destaque--ciano`,termo:`editorColorCyan`,icone:`highlight`}],xm=bm.map(e=>e.classe),Sm=[{classe:`paragrafo--espacado`,termo:`editorParagraphSpaced`,icone:`line-height`},{classe:`paragrafo--emoldurado`,termo:`editorParagraphBordered`,icone:`border-horizontal`},{classe:`paragrafo--recuado`,termo:`editorParagraphIndented`,icone:`indent-increase`},{classe:`paragrafo--capitular`,termo:`editorParagraphDropCap`,icone:`letter-a`},{classe:`paragrafo--epigrafe`,termo:`editorParagraphEpigraph`,icone:`quote`},{classe:`paragrafo--versaletes`,termo:`editorParagraphSmallCaps`,icone:`letter-case-upper`},{classe:`paragrafo--miudo`,termo:`editorParagraphFinePrint`,icone:`text-decrease`},{classe:`paragrafo--colunas`,termo:`editorParagraphColumns`,icone:`columns-2`},{classe:`rodape-notas`,termo:`editorParagraphFootnotes`,icone:`notes`}],Cm=Sm.map(e=>e.classe),wm=[{classe:`poesia--tema`,termo:`editorPoetryTheme`,icone:`book-2`},{classe:`poesia--verso`,termo:`editorPoetryVerse`,icone:`text-wrap`},{classe:`poesia--escritura`,termo:`editorPoetryScripture`,icone:`quote`},{classe:`poesia--fonte`,termo:`editorPoetrySource`,icone:`signature`},{classe:`poesia--refrao`,termo:`editorPoetryRefrain`,icone:`repeat`},{classe:`poesia--dedicatoria`,termo:`editorPoetryDedication`,icone:`gift`}],Tm=wm.map(e=>e.classe),Em=[{termo:`editorTypoEmDash`,amostra:`—`,abre:`— `},{termo:`editorTypoEnDash`,amostra:`–`,abre:`–`},{termo:`editorTypoDoubleQuotes`,amostra:`“ ”`,abre:`“`,fecha:`”`},{termo:`editorTypoSingleQuotes`,amostra:`‘ ’`,abre:`‘`,fecha:`’`},{termo:`editorTypoNbsp`,amostra:`␣`,abre:`\xA0`}],Dm=new Set([...xm,...Cm,...Tm,`note-nota-ref`]),Om=/^var\(--kk-color-[a-z0-9-]+\)$/,km={"text-align":/^(left|center|right|justify)$/,color:Om,"background-color":Om};function Am(e){let t=[];for(let n of e.split(`;`)){let e=n.indexOf(`:`);if(e<0)continue;let r=n.slice(0,e).trim().toLowerCase(),i=n.slice(e+1).replace(/!\s*important/i,``).toLowerCase().replace(/\s+/g,``),a=km[r];a===void 0||!a.test(i)||t.push(`${r}: ${i}`)}return t.join(`; `)}var jm=/^data:image\/(?:png|jpeg|jpg|gif|webp|avif|bmp);base64,[A-Za-z0-9+/=]+$/,Mm=[`image/png`,`image/jpeg`,`image/gif`,`image/webp`,`image/avif`,`image/bmp`],Nm=`http://www.w3.org/1999/xhtml`;function Pm(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Fm(e){let t=new DOMParser().parseFromString(e,`text/html`),n=t.createTreeWalker(t.body,NodeFilter.SHOW_COMMENT),r=[];for(let e=n.nextNode();e!==null;e=n.nextNode())r.push(e);for(let e of r)e.remove();for(let e of[...t.body.querySelectorAll(`*`)]){if(e.namespaceURI!==Nm){e.remove();continue}let t=e.tagName.toLowerCase();if(ym.has(t)){e.remove();continue}if(!_m.has(t)){e.replaceWith(...e.childNodes);continue}let n=[...vm[`*`]??[],...vm[t]??[]];for(let t of[...e.attributes]){if(!n.includes(t.name)){e.removeAttribute(t.name);continue}if(t.name===`style`){let n=Am(t.value);n===``?e.removeAttribute(`style`):e.setAttribute(`style`,n)}if(t.name===`class`){let n=t.value.split(/\s+/).filter(e=>Dm.has(e));n.length===0?e.removeAttribute(`class`):e.setAttribute(`class`,n.join(` `))}if(t.name===`href`||t.name===`src`){let n=t.value.trim();/^(https?:|mailto:|#|\/|\.)/i.test(n)||t.name===`src`&&jm.test(n)||e.removeAttribute(t.name)}}}return t.body.innerHTML}function Im(e){let t=e??``;for(let e=0;e<3;e+=1){let e=Fm(t);if(e===t)return e;t=e}return Pm(new DOMParser().parseFromString(t,`text/html`).body.textContent??``)}var Lm=[{rampa:`neutral`,termo:`editorColorGray`},{rampa:`red`,termo:`editorColorRed`},{rampa:`orange`,termo:`editorColorOrange`},{rampa:`yellow`,termo:`editorColorYellow`},{rampa:`lime`,termo:`editorColorLime`},{rampa:`green`,termo:`editorColorGreen`},{rampa:`teal`,termo:`editorColorTeal`},{rampa:`cyan`,termo:`editorColorCyan`},{rampa:`blue`,termo:`editorColorBlue`},{rampa:`violet`,termo:`editorColorViolet`},{rampa:`pink`,termo:`editorColorPink`}],Rm=[{valor:`var(--kk-color-neutral-900)`,termo:`editorColorDefault`},...Lm.map(e=>({valor:`var(--kk-color-${e.rampa}-600)`,termo:e.termo}))],zm=[{valor:`var(--kk-color-neutral-0)`,termo:`editorColorDefault`},...Lm.map(e=>({valor:`var(--kk-color-${e.rampa}-200)`,termo:e.termo}))],Bm={color:`#010203`,"background-color":`#040506`};function Vm(e,t){let n=document.createElement(`span`);return n.style.setProperty(e,t),n.style.getPropertyValue(e)}var Hm=`p, h1, h2, h3, h4, li, blockquote, div, td, th`,Um=8,Wm=10,Gm=Array.from({length:Um*Wm},(e,t)=>({linha:Math.floor(t/Wm)+1,coluna:t%Wm+1}));function Km(e){let t=document.createElement(e);return t.append(document.createElement(`br`)),t}function qm(e,t){return`<table><tbody>${`<tr>${`<td><br></td>`.repeat(t)}</tr>`.repeat(e)}</tbody></table><p><br></p>`}function Jm(e,t){if(e.tagName.toLowerCase()===t)return;let n=document.createElement(t);for(let t of[...e.attributes])n.setAttribute(t.name,t.value);n.append(...e.childNodes),e.replaceWith(n)}function Ym(e,t){let n=e.closest(`tr`),r=n?.parentElement;if(n===null||r==null)return;let i=document.createElement(`tr`),a=r.tagName===`THEAD`?`th`:`td`;for(let e=0;e<n.cells.length;e+=1)i.append(Km(a));r.insertBefore(i,t?n.nextSibling:n)}function Xm(e){let t=e.closest(`tr`),n=e.closest(`table`);if(t===null||n===null)return;if(n.rows.length<=1){n.remove();return}let r=t.parentElement;t.remove(),r!==null&&r.children.length===0&&r.remove()}function Zm(e,t){let n=e.closest(`table`);if(n===null)return;let r=e.cellIndex;for(let e of[...n.rows]){let n=e.cells[r],i=Km(n?.tagName===`TH`?`th`:`td`);n===void 0?e.append(i):e.insertBefore(i,t?n.nextSibling:n)}}function Qm(e){let t=e.closest(`table`);if(t===null)return;let n=e.cellIndex;if(Math.max(...[...t.rows].map(e=>e.cells.length))<=1){t.remove();return}for(let e of[...t.rows])e.cells[n]?.remove()}function $m(e){let t=e.closest(`table`);if(t===null)return;let n=t.tHead;if(n!==null){let e=t.tBodies[0]??t.createTBody();for(let t of[...n.rows].reverse()){for(let e of[...t.cells])Jm(e,`td`);e.insertBefore(t,e.firstChild)}n.remove();return}let r=t.rows[0];if(r===void 0)return;for(let e of[...r.cells])Jm(e,`th`);let i=r.parentElement;t.createTHead().append(r),i!==null&&i.children.length===0&&i.remove()}function eh(e){e.closest(`table`)?.remove()}var th=[{termo:`editorTableRowAbove`,icone:`row-insert-top`,executar:e=>Ym(e,!1)},{termo:`editorTableRowBelow`,icone:`row-insert-bottom`,executar:e=>Ym(e,!0)},{termo:`editorTableRowDelete`,icone:`row-remove`,executar:Xm},{termo:`editorTableColumnBefore`,icone:`column-insert-left`,executar:e=>Zm(e,!1)},{termo:`editorTableColumnAfter`,icone:`column-insert-right`,executar:e=>Zm(e,!0)},{termo:`editorTableColumnDelete`,icone:`column-remove`,executar:Qm},{termo:`editorTableHeader`,icone:`layout-navbar`,executar:$m},{termo:`editorTableDelete`,icone:`trash`,executar:eh}],nh=[{icone:`arrow-back-up`,termo:`editorUndo`,comando:`undo`},{icone:`arrow-forward-up`,termo:`editorRedo`,comando:`redo`}],rh=[[{icone:`bold`,termo:`editorBold`,comando:`bold`,alterna:!0},{icone:`italic`,termo:`editorItalic`,comando:`italic`,alterna:!0},{icone:`underline`,termo:`editorUnderline`,comando:`underline`,alterna:!0},{icone:`strikethrough`,termo:`editorStrikethrough`,comando:`strikeThrough`,alterna:!0}],[{icone:`list`,termo:`editorBulletList`,comando:`insertUnorderedList`,alterna:!0},{icone:`list-numbers`,termo:`editorNumberedList`,comando:`insertOrderedList`,alterna:!0}],[{icone:`align-left`,termo:`editorAlignLeft`,comando:`justifyLeft`,alterna:!0},{icone:`align-center`,termo:`editorAlignCenter`,comando:`justifyCenter`,alterna:!0},{icone:`align-right`,termo:`editorAlignRight`,comando:`justifyRight`,alterna:!0},{icone:`align-justified`,termo:`editorAlignJustify`,comando:`justifyFull`,alterna:!0}],[{icone:`corner-down-left`,termo:`editorLineBreak`,comando:`insertLineBreak`},{icone:`separator-horizontal`,termo:`editorHorizontalRule`,comando:`insertHorizontalRule`}]],ih=[nh,...rh].flat().filter(e=>e.alterna===!0).map(e=>e.comando),ah={tag:`p`,termo:`editorParagraph`,icone:`pilcrow`},oh=[ah,{tag:`h1`,termo:`editorHeading1`,icone:`h-1`},{tag:`h2`,termo:`editorHeading2`,icone:`h-2`},{tag:`h3`,termo:`editorHeading3`,icone:`h-3`},{tag:`h4`,termo:`editorHeading4`,icone:`h-4`},{tag:`blockquote`,termo:`editorQuote`,icone:`blockquote`}];typeof document<`u`&&qf.styleSheet!==void 0&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,qf.styleSheet]);function sh(e){let t=e.getRootNode(),n=qf.styleSheet;n===void 0||!(t instanceof ShadowRoot)||t.adoptedStyleSheets.includes(n)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,n])}var ch,lh,uh,dh,fh,ph,mh,hh,gh=class e extends (dh=M,uh=[k()],lh=[k()],ch=[O({type:Boolean,reflect:!0})],dh){constructor(){super(...arguments),g(this,`localize`,new Pi(this)),g(this,`area`,document.createElement(`div`)),g(this,`fonte`,document.createElement(`textarea`)),g(this,`conteudo`,``),_(this,ph,m(fh,8,this,!1)),m(fh,11,this),_(this,mh,m(fh,12,this,0)),m(fh,15,this),g(this,`assinaturaDaBarra`,``),g(this,`ultimaFaixa`,null),g(this,`quadro`,0),_(this,hh,m(fh,16,this,!1)),m(fh,19,this),g(this,`handleFonteInput`,()=>{this.conteudo=this.fonte.value,this.emit(`kk-input`,{detail:{value:this.conteudo}})}),g(this,`handleInput`,()=>{this.conteudo=this.area.innerHTML,this.emit(`kk-input`,{detail:{value:this.conteudo}}),this.sincronizarBarra()}),g(this,`sincronizarBarra`,()=>{this.guardarSelecao(),this.quadro===0&&(this.quadro=requestAnimationFrame(()=>{this.quadro=0;let e=[this.tagDoBlocoCorrente(),...ih.map(e=>this.comandoLigado(e)?`1`:`0`),this.corCorrente(`color`)??``,this.corCorrente(`background-color`)??``,this.blocoCorrente()?.className??``,this.celulaCorrente()===void 0?``:`tabela`].join(`|`);e!==this.assinaturaDaBarra&&(this.assinaturaDaBarra=e,this.selecao+=1)}))}),g(this,`handlePaste`,e=>{e.preventDefault();let t=e.clipboardData;if(t===null)return;let n=t.getData(`text/html`),r=t.getData(`text/plain`);n===``?document.execCommand(`insertText`,!1,r):document.execCommand(`insertHTML`,!1,Im(n)),this.handleInput()}),g(this,`aoApontarNaGrade`,e=>{let t=e.target.closest(`[data-linha]`);t!==null&&this.marcarGrade(Number(t.dataset.linha),Number(t.dataset.coluna))}),g(this,`aoTeclarNaGrade`,e=>{let t={ArrowUp:[-1,0],ArrowDown:[1,0],ArrowLeft:[0,-1],ArrowRight:[0,1]}[e.key],n=e.target.closest(`[data-linha]`);if(t===void 0||n===null)return;e.preventDefault();let r=gm(Number(n.dataset.linha)+t[0],1,Um),i=gm(Number(n.dataset.coluna)+t[1],1,Wm);this.querySelector(`[data-linha="${r}"][data-coluna="${i}"]`)?.focus()})}get value(){return this.conteudo}set value(e){let t=Im(e??``);t===this.conteudo||t===Im(this.conteudo)||(this.conteudo=t,this.area.innerHTML=t,this.codigo&&(this.fonte.value=t))}connectedCallback(){super.connectedCallback(),sh(this),this.area.className=`kk-editor__content kk-prose`,this.area.contentEditable=this.readonly?`false`:`true`,this.area.spellcheck=!0,this.area.setAttribute(`role`,`textbox`),this.area.setAttribute(`aria-multiline`,`true`),this.area.setAttribute(`aria-label`,this.localize.term(`editorArea`)),this.area.innerHTML=this.conteudo,document.execCommand(`styleWithCSS`,!1,`false`),this.fonte.className=`kk-editor__source`,this.fonte.spellcheck=!1,this.fonte.setAttribute(`aria-label`,this.localize.term(`editorSource`)),this.area.addEventListener(`input`,this.handleInput),this.area.addEventListener(`paste`,this.handlePaste),this.area.addEventListener(`keyup`,this.sincronizarBarra),this.area.addEventListener(`mouseup`,this.sincronizarBarra),this.area.addEventListener(`focus`,this.sincronizarBarra),this.fonte.addEventListener(`input`,this.handleFonteInput)}disconnectedCallback(){super.disconnectedCallback(),this.area.removeEventListener(`input`,this.handleInput),this.area.removeEventListener(`paste`,this.handlePaste),this.area.removeEventListener(`keyup`,this.sincronizarBarra),this.area.removeEventListener(`mouseup`,this.sincronizarBarra),this.area.removeEventListener(`focus`,this.sincronizarBarra),this.fonte.removeEventListener(`input`,this.handleFonteInput),this.quadro!==0&&(cancelAnimationFrame(this.quadro),this.quadro=0)}createRenderRoot(){return this}focus(e){(this.codigo?this.fonte:this.area).focus(e)}get travado(){return this.readonly||this.codigo}alternarCodigo(){if(this.codigo){let e=Im(this.fonte.value),t=e!==this.conteudo;this.conteudo=e,this.area.innerHTML=e,this.codigo=!1,t&&this.emit(`kk-input`,{detail:{value:e}})}else this.conteudo=this.area.innerHTML,this.fonte.value=this.conteudo,this.fonte.readOnly=this.readonly,this.codigo=!0;this.updateComplete.then(()=>this.focus())}aplicar(e,t){this.area.focus(),this.restaurarSelecao(),document.execCommand(e,!1,t),this.handleInput()}selecaoAtual(){let e=this.getRootNode();return`getSelection`in e?e.getSelection():getSelection()}guardarSelecao(){let e=this.selecaoAtual();if(e===null||e.rangeCount===0)return;let t=e.getRangeAt(0);this.area.contains(t.commonAncestorContainer)&&(this.ultimaFaixa=t.cloneRange())}restaurarSelecao(){let e=this.ultimaFaixa,t=this.selecaoAtual();e===null||t===null||this.area.contains(e.commonAncestorContainer)&&(t.removeAllRanges(),t.addRange(e))}faixaCorrente(){let e=this.selecaoAtual();if(e!==null&&e.rangeCount>0){let t=e.getRangeAt(0);if(this.area.contains(t.commonAncestorContainer))return t}let t=this.ultimaFaixa;if(t!==null&&this.area.contains(t.commonAncestorContainer))return t}elementoCorrente(){let e=this.faixaCorrente()?.startContainer;return e===void 0?void 0:(e.nodeType===Node.ELEMENT_NODE?e:e.parentElement)??void 0}blocoCorrente(){let e=this.elementoCorrente()?.closest(Hm);return e!=null&&this.area.contains(e)?e:void 0}celulaCorrente(){let e=this.elementoCorrente()?.closest(`td, th`);return e!=null&&this.area.contains(e)?e:void 0}blocosDaSelecao(){let e=this.faixaCorrente();if(e===void 0)return[];if(e.collapsed){let e=this.blocoCorrente();return e===void 0?[]:[e]}return[...this.area.querySelectorAll(Hm)].filter(t=>t.querySelector(Hm)===null&&e.intersectsNode(t))}marcarBlocos(e,t){this.area.focus(),this.restaurarSelecao();let n=this.blocosDaSelecao();if(n.length===0)return;let r=n[0]?.classList.contains(e)===!0;for(let i of n)i.classList.remove(...t),i.classList.toggle(e,!r),i.className===``&&i.removeAttribute(`class`);this.handleInput()}limparFormatacao(){this.area.focus(),this.restaurarSelecao(),document.execCommand(`removeFormat`),document.execCommand(`unlink`);for(let e of this.blocosDaSelecao())e.removeAttribute(`class`),e.removeAttribute(`style`);let e=this.tagDoBlocoCorrente();e!==`p`&&e!==`li`&&e!==`td`&&e!==`th`&&document.execCommand(`formatBlock`,!1,`p`),this.handleInput()}inserirTipografia(e,t){this.area.focus(),this.restaurarSelecao();let n=t===void 0?``:this.faixaCorrente()?.toString()??``;if(document.execCommand(`insertText`,!1,`${e}${n}${t??``}`),t!==void 0&&n===``){let e=this.selecaoAtual()?.getRangeAt(0);e!==void 0&&e.startContainer.nodeType===Node.TEXT_NODE&&(e.setStart(e.startContainer,e.startOffset-t.length),e.collapse(!0),this.ultimaFaixa=e.cloneRange())}this.handleInput()}corCorrente(e){let t=this.elementoCorrente();for(;t!==void 0&&t!==this.area;){let n=t.style?.getPropertyValue(e)??``;if(n!==``)return n;t=t.parentElement??void 0}}pintar(e,t){this.area.focus(),this.restaurarSelecao();let n=Bm[e];document.execCommand(`styleWithCSS`,!1,`true`),document.execCommand(e===`color`?`foreColor`:`hiliteColor`,!1,n),document.execCommand(`styleWithCSS`,!1,`false`);let r=Vm(e,n);for(let n of[...this.area.querySelectorAll(`[style]`)])n.style.getPropertyValue(e)===r&&(t===null?n.style.removeProperty(e):n.style.setProperty(e,t),n.getAttribute(`style`)===``&&n.removeAttribute(`style`),n.tagName===`SPAN`&&n.attributes.length===0&&n.replaceWith(...n.childNodes));this.handleInput()}pedirTexto(e){let t=document.createElement(`kk-dialog`);return t.label=e.rotulo,document.body.append(t),new Promise(n=>{let r=null,i=e=>{r=e,t.open=!1},a=()=>{let e=t.querySelector(`kk-input`),n=e?.value.trim()??``;if(n===``){e?.focus();return}i(n)};t.addEventListener(`kk-after-hide`,e=>{e.target===t&&(t.remove(),n(r))}),Va(w`
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
        `,t),t.updateComplete.then(()=>{t.open=!0})})}async inserirLink(){let e=await this.pedirTexto({rotulo:this.localize.term(`editorLink`),texto:this.localize.term(`editorLinkText`),placeholder:`https://`});e!==null&&this.aplicar(`createLink`,e)}inserirImagem(){let e=document.createElement(`input`);e.type=`file`,e.accept=Mm.join(`,`),e.addEventListener(`change`,()=>{let t=e.files?.[0];if(t===void 0)return;if(!Mm.includes(t.type)){this.emit(`kk-error`,{detail:{file:t,reason:`type`}});return}let n=new FileReader;n.addEventListener(`load`,()=>{this.aplicar(`insertImage`,String(n.result))}),n.readAsDataURL(t)}),e.click()}async inserirNota(){let e=this.selecaoAtual()?.anchorNode,t=(e?.nodeType===Node.ELEMENT_NODE?e:e?.parentElement)?.closest(`a.note-nota-ref`),n=await this.pedirTexto({rotulo:this.localize.term(`editorFootnote`),texto:this.localize.term(`editorFootnoteText`),placeholder:this.localize.term(`editorFootnotePlaceholder`),valor:t?.getAttribute(`data-nota`)??``});if(n!==null){if(t!=null){t.setAttribute(`data-nota`,n),this.handleInput();return}this.aplicar(`insertHTML`,`<a class="note-nota-ref" data-nota="${Pm(n)}">*</a>&nbsp;`)}}comandoLigado(e){try{return document.queryCommandState(e)}catch{return!1}}tagDoBlocoCorrente(){try{let e=document.queryCommandValue(`formatBlock`).toLowerCase().replace(/[<>]/g,``);return e===``?ah.tag:e}catch{return ah.tag}}inserirTabela(e,t){this.aplicar(`insertHTML`,qm(e,t))}cursorEm(e){let t=document.createRange();t.selectNodeContents(e),t.collapse(!0);let n=this.selecaoAtual();n?.removeAllRanges(),n?.addRange(t),this.ultimaFaixa=t.cloneRange()}naTabela(e){let t=this.celulaCorrente();if(t===void 0)return;let n=t.closest(`table`);if(e(t),!this.area.contains(t)){let e=n!==null&&this.area.contains(n)?n.rows[0]?.cells[0]:void 0;e!==void 0&&this.cursorEm(e)}this.handleInput()}marcarGrade(e,t){let n=this.querySelector(`.kk-editor__grid`);if(n===null)return;for(let r of[...n.children]){let n=r,i=Number(n.dataset.linha)<=e&&Number(n.dataset.coluna)<=t;n.classList.toggle(`kk-editor__grid-cell--marcada`,i)}let r=this.querySelector(`.kk-editor__grid-label`);r!==null&&(r.textContent=`${t} \xD7 ${e}`)}static fechar(e){e.currentTarget.closest(`kk-dropdown`)?.hide()}renderBotao(e){let t=this.localize.term(e.termo);return w`
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
    </div>`}renderSeletorDeBloco(){let e=this.tagDoBlocoCorrente(),t=oh.find(t=>t.tag===e)??ah,n=`${this.localize.term(`editorBlockType`)}: ${this.localize.term(t.termo)}`;return w`
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
            ${oh.map(t=>w`
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
          ${Em.map(e=>w`
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
            style="--kk-editor-grade-colunas: ${Wm}"
            @mouseover=${this.aoApontarNaGrade}
            @focusin=${this.aoApontarNaGrade}
            @keydown=${this.aoTeclarNaGrade}
          >
            ${Gm.map(({linha:t,coluna:n})=>w`
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
                  ${th.map(e=>w`
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
        ${this.renderGrupo(nh)} ${this.renderSeletorDeBloco()}
        ${rh.map(e=>this.renderGrupo(e))}

        <div class="kk-editor__group">
          ${this.renderPaleta(`color`,Rm,`text-color`,`editorTextColor`)}
          ${this.renderPaleta(`background-color`,zm,`background`,`editorBackgroundColor`)}
          ${this.renderMenuDeClasses(`article`,`editorParagraphStyle`,Sm,Cm)}
          ${this.renderMenuDeClasses(`feather`,`editorPoetry`,wm,Tm)}
          ${this.renderMenuDeClasses(`highlight`,`editorHighlight`,bm,xm)}
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
    `}};fh=f(dh),ph=new WeakMap,mh=new WeakMap,hh=new WeakMap,h(fh,4,`codigo`,uh,gh,ph),h(fh,4,`selecao`,lh,gh,mh),h(fh,4,`readonly`,ch,gh,hh),p(fh,gh),g(gh,`dependencies`,{"kk-button":z,"kk-dialog":mu,"kk-dropdown":cf,"kk-icon":us,"kk-input":K,"kk-menu":mf,"kk-menu-item":Kf}),gh.define(`kk-editor`);var _h=C`
  :host {
    display: block;

    /*
     * Entrou e saiu são verde e vermelho porque em dinheiro isso significa algo —
     * mas a cor nunca é a única pista: todo valor vem escrito, a ordem dentro do
     * grupo é sempre a mesma e o sinal (+/−) acompanha o número. Verde e vermelho
     * são justamente o par que um leitor com deuteranopia não separa.
     *
     * Por isso o padrão NÃO é success-600/danger-600, que era o que estava aqui:
     * esse par simétrico marca ΔE 5,9 em deuteranopia. Os tokens abaixo escolhem
     * os degraus que marcam 16,9 — ver a seção 4 de themes/kobi.css.
     */
    --kk-financeiro-receita: var(--kk-color-income);
    --kk-financeiro-despesa: var(--kk-color-expense);
  }

  .financeiro {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-medium);
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-medium);
    color: var(--kk-color-neutral-700);
  }

  .discreto {
    margin: 0;
    color: var(--kk-color-text-muted);
    font-size: var(--kk-font-size-small);
  }

  .erro {
    margin: 0;
    color: var(--kk-color-danger-600);
    font-size: var(--kk-font-size-small);
  }

  .secao {
    margin: 0;
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-semibold);
  }

  .vazio {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--kk-spacing-x-small);
    padding: var(--kk-spacing-2x-large) var(--kk-spacing-medium);
    color: var(--kk-color-text-muted);
    text-align: center;
  }

  .vazio__icone {
    font-size: 2.5rem;
  }

  /* ── Saldo ────────────────────────────────────────────────────────────── */

  .saldo {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-2x-small);
    padding: var(--kk-spacing-medium);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-large);
  }

  .saldo__topo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--kk-spacing-x-small);
  }

  .saldo__rotulo {
    color: var(--kk-color-text-muted);
    font-size: var(--kk-font-size-small);
  }

  .saldo__valor {
    font-size: var(--kk-font-size-x-large);
    font-weight: var(--kk-font-weight-bold);
    font-variant-numeric: tabular-nums;
  }

  .saldo__valor[data-negativo] {
    color: var(--kk-financeiro-despesa);
  }

  /* ── Período ──────────────────────────────────────────────────────────── */

  .periodo {
    display: grid;
    grid-template-columns: 1fr 8rem;
    gap: var(--kk-spacing-x-small);
  }

  /* ── Placares ─────────────────────────────────────────────────────────── */

  /*
   * Quantos couberem por linha, e não um número fixo: os placares são quatro
   * (receitas, despesas, a receber, a pagar) e num painel estreito quatro
   * colunas espremeriam o valor até ele quebrar no meio do número.
   */
  .placares {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: var(--kk-spacing-x-small);
  }

  .placar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--kk-spacing-3x-small);
    padding-block: var(--kk-spacing-x-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-large);
  }

  .placar__valor {
    font-size: var(--kk-font-size-small);
    font-weight: var(--kk-font-weight-bold);
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  .placar__valor[data-tom='receita'] {
    color: var(--kk-financeiro-receita);
  }

  .placar__valor[data-tom='despesa'] {
    color: var(--kk-financeiro-despesa);
  }

  .placar__valor[data-tom='aviso'] {
    color: var(--kk-color-warning-600);
  }

  .placar__rotulo {
    color: var(--kk-color-text-muted);
    font-size: var(--kk-font-size-x-small);
    text-align: center;
  }

  /* ── Gráfico ──────────────────────────────────────────────────────────── */

  /*
   * Barras horizontais em HTML: os nomes das categorias ficam deitados e
   * legíveis, as duas séries dividem a mesma escala (um eixo só) e não há
   * biblioteca de desenho no caminho — o que também é o que faz o gráfico
   * responder ao tema em vez de ao tema de outra biblioteca.
   */
  .grafico {
    margin: 0;
    padding: var(--kk-spacing-medium);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-large);
  }

  .grafico__titulo {
    margin-block-end: var(--kk-spacing-x-small);
    font-size: var(--kk-font-size-small);
    font-weight: var(--kk-font-weight-semibold);
  }

  .grafico__legenda {
    display: flex;
    flex-wrap: wrap;
    gap: var(--kk-spacing-small);
    margin-block-end: var(--kk-spacing-small);
  }

  .legenda__item {
    display: inline-flex;
    align-items: center;
    gap: var(--kk-spacing-3x-small);
    color: var(--kk-color-text-muted);
    font-size: var(--kk-font-size-x-small);
  }

  .legenda__marca {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: var(--kk-border-radius-small);
  }

  .legenda__item[data-tom='receita'] .legenda__marca {
    background-color: var(--kk-financeiro-receita);
  }

  .legenda__item[data-tom='despesa'] .legenda__marca {
    background-color: var(--kk-financeiro-despesa);
  }

  .grafico__linhas {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-small);
  }

  .grafico__grupo {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .grafico__categoria {
    font-size: var(--kk-font-size-small);
  }

  .barra {
    display: flex;
    align-items: center;
    gap: var(--kk-spacing-x-small);
  }

  .barra__trilho {
    flex: 1;
    min-width: 0;
    height: 0.6rem;
    border-radius: var(--kk-border-radius-pill);
    background-color: var(--kk-color-neutral-100);
  }

  .barra__preenchido {
    height: 100%;
    /* Só a ponta é arredondada: a base fica ancorada no zero do eixo. */
    border-start-end-radius: 4px;
    border-end-end-radius: 4px;
    transition: width var(--kk-transition-medium) ease;
  }

  .barra[data-tom='receita'] .barra__preenchido {
    background-color: var(--kk-financeiro-receita);
  }

  .barra[data-tom='despesa'] .barra__preenchido {
    background-color: var(--kk-financeiro-despesa);
  }

  /* O valor vai em cor de texto, nunca na cor da série. */
  .barra__valor {
    flex-shrink: 0;
    min-width: 5.5rem;
    color: var(--kk-color-text-muted);
    font-size: var(--kk-font-size-x-small);
    font-variant-numeric: tabular-nums;
    text-align: end;
  }

  /* ── Limites por categoria ────────────────────────────────────────────── */

  .limites {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-x-small);
  }

  .limite {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-3x-small);
    padding: var(--kk-spacing-x-small) var(--kk-spacing-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-large);
  }

  .limite[data-estourou] {
    border-color: var(--kk-financeiro-despesa);
  }

  .limite__topo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--kk-spacing-x-small);
  }

  .limite__nome {
    display: inline-flex;
    align-items: center;
    gap: var(--kk-spacing-3x-small);
    min-width: 0;
  }

  .limite__valores {
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  .limite__valores small {
    color: var(--kk-color-text-muted);
  }

  .limite__barra {
    display: block;
    height: 0.4rem;
    border-radius: var(--kk-border-radius-pill);
    background-color: var(--kk-color-neutral-100);
    overflow: hidden;
  }

  .limite__preenchido {
    display: block;
    height: 100%;
    border-radius: var(--kk-border-radius-pill);
    transition: width var(--kk-transition-medium) ease;
  }

  /* ── Atalhos do painel ────────────────────────────────────────────────── */

  .atalhos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--kk-spacing-x-small);
  }

  .atalho {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-3x-small);
    padding: var(--kk-spacing-medium);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-large);
    background: none;
    color: inherit;
    font: inherit;
    text-align: start;
    cursor: pointer;
  }

  .atalho:hover {
    border-color: var(--kk-color-primary-600);
  }

  .atalho__icone {
    font-size: 1.5rem;
    color: var(--kk-color-primary-600);
  }

  .atalho__rotulo {
    font-weight: var(--kk-font-weight-semibold);
  }

  .atalho__resumo {
    color: var(--kk-color-text-muted);
    font-size: var(--kk-font-size-x-small);
  }

  /* ── Registros ────────────────────────────────────────────────────────── */

  .registros {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-x-small);
  }

  .registro {
    display: flex;
    align-items: flex-start;
    gap: var(--kk-spacing-small);
    padding: var(--kk-spacing-x-small) var(--kk-spacing-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-inline-start: solid 3px var(--kk-financeiro-status-color, transparent);
    border-radius: var(--kk-border-radius-large);
  }

  .registro[data-status='ok'] {
    --kk-financeiro-status-color: var(--kk-color-success-600);
  }

  .registro[data-status='pendente'] {
    --kk-financeiro-status-color: var(--kk-color-warning-600);
  }

  .registro__avatar {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: var(--kk-border-radius-circle);
    background-color: color-mix(in oklab, var(--kk-color-primary-600) 12%, transparent);
    color: var(--kk-color-primary-700);
    font-size: var(--kk-font-size-small);
  }

  /*
   * O corpo é o alvo da ação do dia a dia — abrir o lançamento para editar. As
   * ações laterais são botões próprios, fora dele.
   */
  .registro__alvo {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--kk-spacing-3x-small);
    min-width: 0;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    text-align: start;
    cursor: pointer;
  }

  .registro__topo {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--kk-spacing-2x-small);
  }

  .registro__titulo {
    font-weight: var(--kk-font-weight-semibold);
  }

  .registro__valor {
    font-variant-numeric: tabular-nums;
  }

  .registro__valor[data-tom='receita'] {
    color: var(--kk-financeiro-receita);
  }

  .registro__valor[data-tom='despesa'] {
    color: var(--kk-financeiro-despesa);
  }

  .registro__resumo {
    color: var(--kk-color-text-muted);
    font-size: var(--kk-font-size-small);
  }

  .registro__acoes {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: var(--kk-spacing-3x-small);
  }

  /* ── Categorias ───────────────────────────────────────────────────────── */

  .categorias {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-2x-small);
  }

  .categoria {
    display: flex;
    align-items: center;
    gap: var(--kk-spacing-x-small);
    padding: var(--kk-spacing-2x-small) var(--kk-spacing-x-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-medium);
  }

  .categoria__cor {
    display: inline-block;
    flex-shrink: 0;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: var(--kk-border-radius-circle);
  }

  .categoria__nome {
    flex: 1;
    min-width: 0;
  }

  /* ── Formulário ───────────────────────────────────────────────────────── */

  .formulario {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-small);
    padding: var(--kk-spacing-medium);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-large);
  }

  .formulario__titulo {
    margin-block: 0;
    font-size: var(--kk-font-size-medium);
  }

  .formulario__rotulo {
    display: block;
    margin-block-end: var(--kk-spacing-3x-small);
    color: var(--kk-color-text-muted);
    font-size: var(--kk-font-size-small);
  }

  .formulario__acoes {
    display: flex;
    gap: var(--kk-spacing-x-small);
  }

  .tipos {
    display: flex;
    flex-wrap: wrap;
    gap: var(--kk-spacing-2x-small);
  }

  .tipo {
    display: inline-flex;
    align-items: center;
    gap: var(--kk-spacing-3x-small);
    padding: var(--kk-spacing-3x-small) var(--kk-spacing-x-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-pill);
    background: none;
    color: inherit;
    font: inherit;
    font-size: var(--kk-font-size-small);
    cursor: pointer;
  }

  .tipo[aria-pressed='true'] {
    border-color: var(--kk-color-primary-600);
    background-color: color-mix(in oklab, var(--kk-color-primary-600) 12%, transparent);
  }

  .icones {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2.5rem, 1fr));
    gap: var(--kk-spacing-3x-small);
  }

  .icone {
    aspect-ratio: var(--kk-ratio-square);
    padding: 0;
    border: solid var(--kk-panel-border-width) transparent;
    border-radius: var(--kk-border-radius-medium);
    background: none;
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
  }

  .icone:hover {
    background-color: var(--kk-color-neutral-100);
  }

  .icone[aria-pressed='true'] {
    border-color: var(--kk-color-primary-600);
    background-color: color-mix(in oklab, var(--kk-color-primary-600) 12%, transparent);
  }
`,vh=C`
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
`,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,q,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh=class extends (Nh=M,Mh=[A(`input[type="checkbox"]`)],jh=[k()],Ah=[O()],kh=[O()],Oh=[O()],Dh=[O({reflect:!0})],Eh=[O({type:Boolean,reflect:!0})],Th=[O({type:Boolean,reflect:!0})],wh=[$a(`checked`)],Ch=[O({reflect:!0})],Sh=[O({type:Boolean,reflect:!0})],xh=[O({attribute:`help-text`})],bh=[j(`checked`,{waitUntilFirstUpdate:!0})],yh=[j(`disabled`,{waitUntilFirstUpdate:!0})],Nh){constructor(){super(...arguments),m(q,5,this),g(this,`formControlController`,new ko(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=!!t})),g(this,`hasSlotController`,new zs(this,`help-text`)),_(this,Ph,m(q,8,this)),m(q,11,this),_(this,Fh,m(q,12,this,!1)),m(q,15,this),_(this,Ih,m(q,16,this,``)),m(q,19,this),_(this,Lh,m(q,20,this,``)),m(q,23,this),_(this,Rh,m(q,24,this)),m(q,27,this),_(this,zh,m(q,28,this,`medium`)),m(q,31,this),_(this,Bh,m(q,32,this,!1)),m(q,35,this),_(this,Vh,m(q,36,this,!1)),m(q,39,this),g(this,`defaultChecked`,m(q,52,this,!1)),m(q,55,this),_(this,Hh,m(q,40,this,``)),m(q,43,this),_(this,Uh,m(q,44,this,!1)),m(q,47,this),_(this,Wh,m(q,48,this,``)),m(q,51,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleInput(){this.emit(`kk-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit(`kk-change`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleKeyDown(e){e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.emit(`kk-change`),this.emit(`kk-input`)),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.emit(`kk-change`),this.emit(`kk-input`))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return w`
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
            .checked=${Yf(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
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
    `}};q=f(Nh),Ph=new WeakMap,Fh=new WeakMap,Ih=new WeakMap,Lh=new WeakMap,Rh=new WeakMap,zh=new WeakMap,Bh=new WeakMap,Vh=new WeakMap,Hh=new WeakMap,Uh=new WeakMap,Wh=new WeakMap,h(q,4,`input`,Mh,Gh,Ph),h(q,4,`hasFocus`,jh,Gh,Fh),h(q,4,`title`,Ah,Gh,Ih),h(q,4,`name`,kh,Gh,Lh),h(q,4,`value`,Oh,Gh,Rh),h(q,4,`size`,Dh,Gh,zh),h(q,4,`disabled`,Eh,Gh,Bh),h(q,4,`checked`,Th,Gh,Vh),h(q,4,`form`,Ch,Gh,Hh),h(q,4,`required`,Sh,Gh,Uh),h(q,4,`helpText`,xh,Gh,Wh),h(q,1,`handleCheckedChange`,bh,Gh),h(q,1,`handleDisabledChange`,yh,Gh),h(q,5,`defaultChecked`,wh,Gh),p(q,Gh),g(Gh,`styles`,[D,Qf,vh]);var Kh=C`
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
`,qh=class extends Ja{constructor(e){if(super(e),this.it=T,e.type!==Ka.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===Ta)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};qh.directiveName=`unsafeHTML`,qh.resultType=1;var Jh=qa(qh);function Yh(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function Xh(e,t,n=`vertical`,r=`smooth`){let i=Yh(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var Zh=C`
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
`,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg=class extends (ng=M,tg=[O({reflect:!0})],eg=[O({reflect:!0})],$h=[O({type:Boolean,reflect:!0})],Qh=[O({type:Boolean})],ng){constructor(){super(...arguments),g(this,`localize`,new Pi(this)),_(this,ig,m(rg,8,this,`neutral`)),m(rg,11,this),_(this,ag,m(rg,12,this,`medium`)),m(rg,15,this),_(this,og,m(rg,16,this,!1)),m(rg,19,this),_(this,sg,m(rg,20,this,!1)),m(rg,23,this)}handleRemoveClick(){this.emit(`kk-remove`)}render(){return w`
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
    `}};rg=f(ng),ig=new WeakMap,ag=new WeakMap,og=new WeakMap,sg=new WeakMap,h(rg,4,`variant`,tg,cg,ig),h(rg,4,`size`,eg,cg,ag),h(rg,4,`pill`,$h,cg,og),h(rg,4,`removable`,Qh,cg,sg),p(rg,cg),g(cg,`styles`,[D,Zh]),g(cg,`dependencies`,{"kk-icon-button":I});var lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg,J,Vg,Hg,Ug,Wg,Gg,Kg,qg,Jg,Yg,Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_,p_,Y=class extends (Bg=M,zg=[A(`.select`)],Rg=[A(`.select__combobox`)],Lg=[A(`.select__display-input`)],Ig=[A(`.select__value-input`)],Fg=[A(`.select__listbox`)],Pg=[k()],Ng=[k()],Mg=[k()],jg=[k()],Ag=[k()],kg=[O()],Og=[k()],Dg=[O({attribute:`value`})],Eg=[O({reflect:!0})],Tg=[O()],wg=[O({type:Boolean,reflect:!0})],Cg=[O({attribute:`max-options-visible`,type:Number})],Sg=[O({type:Boolean,reflect:!0})],xg=[O({type:Boolean})],bg=[O({type:Boolean,reflect:!0})],yg=[O({type:Boolean,reflect:!0})],vg=[O({type:Boolean,reflect:!0})],_g=[O()],gg=[O({reflect:!0})],hg=[O({attribute:`help-text`})],mg=[O({reflect:!0,converter:Co})],pg=[O({type:Boolean,reflect:!0})],fg=[O()],dg=[j(`disabled`,{waitUntilFirstUpdate:!0})],ug=[j([`defaultValue`,`value`],{waitUntilFirstUpdate:!0})],lg=[j(`open`,{waitUntilFirstUpdate:!0})],Bg){constructor(){super(...arguments),m(J,5,this),g(this,`validade`,new Zf(this,{interacaoEm:[`kk-blur`,`kk-input`]})),g(this,`hasSlotController`,new zs(this,`help-text`,`label`)),g(this,`localize`,new Pi(this)),g(this,`typeToSelectString`,``),g(this,`typeToSelectTimeout`),g(this,`closeWatcher`),_(this,Vg,m(J,8,this)),m(J,11,this),_(this,Hg,m(J,12,this)),m(J,15,this),_(this,Ug,m(J,16,this)),m(J,19,this),_(this,Wg,m(J,20,this)),m(J,23,this),_(this,Gg,m(J,24,this)),m(J,27,this),_(this,Kg,m(J,28,this,!1)),m(J,31,this),_(this,qg,m(J,32,this,``)),m(J,35,this),_(this,Jg,m(J,36,this)),m(J,39,this),_(this,Yg,m(J,40,this,[])),m(J,43,this),_(this,Xg,m(J,44,this,!1)),m(J,47,this),_(this,Zg,m(J,48,this,``)),m(J,51,this),g(this,`_value`,``),_(this,Qg,m(J,52,this,``)),m(J,55,this),_(this,$g,m(J,56,this,`medium`)),m(J,59,this),_(this,e_,m(J,60,this,``)),m(J,63,this),_(this,t_,m(J,64,this,!1)),m(J,67,this),_(this,n_,m(J,68,this,3)),m(J,71,this),_(this,r_,m(J,72,this,!1)),m(J,75,this),_(this,i_,m(J,76,this,!1)),m(J,79,this),_(this,a_,m(J,80,this,!1)),m(J,83,this),_(this,o_,m(J,84,this,!1)),m(J,87,this),_(this,s_,m(J,88,this,!1)),m(J,91,this),_(this,c_,m(J,92,this,``)),m(J,95,this),_(this,l_,m(J,96,this,`bottom`)),m(J,99,this),_(this,u_,m(J,100,this,``)),m(J,103,this),_(this,d_,m(J,104,this,``)),m(J,107,this),_(this,f_,m(J,108,this,!1)),m(J,111,this),_(this,p_,m(J,112,this,e=>w`
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
    `)),m(J,115,this),g(this,`handleDocumentFocusIn`,e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}),g(this,`handleDocumentKeyDown`,e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`kk-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`kk-input`),this.emit(`kk-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}}),g(this,`handleDocumentMouseDown`,e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()})}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(` `):Array.isArray(e)?e.join(` `):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.updateValidity()}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`kk-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`kk-icon-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`kk-clear`),this.emit(`kk-input`),this.emit(`kk-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`kk-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`kk-input`),this.emit(`kk-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`kk-option`)||customElements.whenDefined(`kk-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,n=Array.isArray(t)?t:[t],r=[];e.forEach(e=>{r.push(e.value)}),this.setSelectedOptions(e.filter(e=>n.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`kk-input`),this.emit(`kk-change`)}))}getAllOptions(){return[...this.querySelectorAll(`kk-option`)]}getFirstOption(){return this.querySelector(`kk-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{e.selected=!1}),n.length&&n.forEach(e=>{e.selected=!0}),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions();this.selectedOptions=e.filter(e=>e.selected);let t=this.valueHasChanged;if(this.multiple){let e=this.selectedOptions.map(e=>e.value);this.value=e,this.displayLabel=this.placeholder&&this.value.length===0?``:this.localize.term(`numOptionsSelected`,this.selectedOptions.length);let t=new FormData;e.forEach(e=>{t.append(this.name,e)}),this._internals.setFormValue(t)}else{let e=this.selectedOptions[0],t=e?.value??``;this.value=t,this.displayLabel=e?.getTextLabel?.()??``,this._internals.setFormValue(t)}this.valueHasChanged=t,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return w`<div @kk-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?Jh(n):n}
        </div>`}return t===this.maxOptionsVisible?w`<kk-tag size=${this.size}>+${this.selectedOptions.length-t}</kk-tag>`:w``})}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){this.open&&!this.disabled?(this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`kk-show`),this.addOpenListeners(),this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await this.esperarTransicao(),this.currentOption&&Xh(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`kk-after-show`)):(this.emit(`kk-hide`),this.removeOpenListeners(),await this.esperarTransicao(),this.open||(this.popup.active=!1),this.emit(`kk-after-hide`))}async esperarTransicao(){await this.updateComplete,await Promise.allSettled(this.popup.popup.getAnimations().map(e=>e.finished))}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Rs(this,`kk-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Rs(this,`kk-after-hide`)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.valueInput.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.valueInput.validity,Xf(this.valueInput),this.valueInput)}emitInvalidEvent(e){let t=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.dispatchEvent(t)||e?.preventDefault()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return w`
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
    `}};J=f(Bg),Vg=new WeakMap,Hg=new WeakMap,Ug=new WeakMap,Wg=new WeakMap,Gg=new WeakMap,Kg=new WeakMap,qg=new WeakMap,Jg=new WeakMap,Yg=new WeakMap,Xg=new WeakMap,Zg=new WeakMap,Qg=new WeakMap,$g=new WeakMap,e_=new WeakMap,t_=new WeakMap,n_=new WeakMap,r_=new WeakMap,i_=new WeakMap,a_=new WeakMap,o_=new WeakMap,s_=new WeakMap,c_=new WeakMap,l_=new WeakMap,u_=new WeakMap,d_=new WeakMap,f_=new WeakMap,p_=new WeakMap,h(J,4,`popup`,zg,Y,Vg),h(J,4,`combobox`,Rg,Y,Hg),h(J,4,`displayInput`,Lg,Y,Ug),h(J,4,`valueInput`,Ig,Y,Wg),h(J,4,`listbox`,Fg,Y,Gg),h(J,4,`hasFocus`,Pg,Y,Kg),h(J,4,`displayLabel`,Ng,Y,qg),h(J,4,`currentOption`,Mg,Y,Jg),h(J,4,`selectedOptions`,jg,Y,Yg),h(J,4,`valueHasChanged`,Ag,Y,Xg),h(J,4,`name`,kg,Y,Zg),h(J,3,`value`,Og,Y),h(J,4,`defaultValue`,Dg,Y,Qg),h(J,4,`size`,Eg,Y,$g),h(J,4,`placeholder`,Tg,Y,e_),h(J,4,`multiple`,wg,Y,t_),h(J,4,`maxOptionsVisible`,Cg,Y,n_),h(J,4,`disabled`,Sg,Y,r_),h(J,4,`clearable`,xg,Y,i_),h(J,4,`open`,bg,Y,a_),h(J,4,`filled`,yg,Y,o_),h(J,4,`pill`,vg,Y,s_),h(J,4,`label`,_g,Y,c_),h(J,4,`placement`,gg,Y,l_),h(J,4,`helpText`,hg,Y,u_),h(J,4,`form`,mg,Y,d_),h(J,4,`required`,pg,Y,f_),h(J,4,`getTag`,fg,Y,p_),h(J,1,`handleDisabledChange`,dg,Y),h(J,1,`handleValueChange`,ug,Y),h(J,1,`handleOpenChange`,lg,Y),p(J,Y),g(Y,`styles`,[D,Qf,Kh]),g(Y,`dependencies`,{"kk-icon":us,"kk-popup":H,"kk-tag":cg}),g(Y,`formAssociated`,!0);var m_=C`
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
`,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,X,T_,E_,D_,O_,k_,A_,j_=class extends (w_=M,C_=[A(`.option__label`)],S_=[k()],x_=[k()],b_=[k()],y_=[O({reflect:!0})],v_=[O({type:Boolean,reflect:!0})],__=[j(`disabled`)],g_=[j(`selected`)],h_=[j(`value`)],w_){constructor(){super(...arguments),m(X,5,this),g(this,`localize`,new Pi(this)),g(this,`isInitialized`,!1),_(this,T_,m(X,8,this)),m(X,11,this),_(this,E_,m(X,12,this,!1)),m(X,15,this),_(this,D_,m(X,16,this,!1)),m(X,19,this),_(this,O_,m(X,20,this,!1)),m(X,23,this),_(this,k_,m(X,24,this,``)),m(X,27,this),_(this,A_,m(X,28,this,!1)),m(X,31,this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined(`kk-select`).then(()=>{let e=this.closest(`kk-select`);e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleValueChange(){typeof this.value!=`string`&&(this.value=String(this.value)),this.value.includes(` `)&&(console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`,this),this.value=this.value.replaceAll(` `,`_`))}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return w`
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
    `}};X=f(w_),T_=new WeakMap,E_=new WeakMap,D_=new WeakMap,O_=new WeakMap,k_=new WeakMap,A_=new WeakMap,h(X,4,`defaultSlot`,C_,j_,T_),h(X,4,`current`,S_,j_,E_),h(X,4,`selected`,x_,j_,D_),h(X,4,`hasHover`,b_,j_,O_),h(X,4,`value`,y_,j_,k_),h(X,4,`disabled`,v_,j_,A_),h(X,1,`handleDisabledChange`,__,j_),h(X,1,`handleSelectedChange`,g_,j_),h(X,1,`handleValueChange`,h_,j_),p(X,j_),g(j_,`styles`,[D,m_]),g(j_,`dependencies`,{"kk-icon":us});var M_=`🛒.🍕.☕.🏠.💡.💧.🔌.🚌.⛽.🚗.💊.🏥.🩺.👕.🎁.🎮.🎵.📚.🎓.🏖️.💰.💳.🧾.🐾.📱.💼.💇.🧴.🧺.🏋️.🛡️.🧸`.split(`.`),N_=[[`diaria`,`financeDaily`],[`semanal`,`financeWeekly`],[`mensal`,`financeMonthly`],[`anual`,`financeYearly`]],P_=`••••`,F_={descricao:!1,valor:!1,diaMes:!1};function I_(e){let t=new Date(e),n=String(t.getMonth()+1).padStart(2,`0`),r=String(t.getDate()).padStart(2,`0`);return`${t.getFullYear()}-${n}-${r}`}function L_(e){return I_(e).slice(0,7)}function R_(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t??1970,(n??1)-1,r??1).getTime()}var z_,B_,V_,H_,U_,W_,G_,K_,q_,J_,Y_,Z,X_,Z_,Q_,$_,ev,tv,nv,rv,iv,av=class e extends (Y_=M,J_=[O({reflect:!0})],q_=[O({type:Array})],K_=[O({type:Array})],G_=[O({type:Array})],W_=[O({type:Array})],U_=[O({reflect:!0})],H_=[O({type:Boolean,reflect:!0})],V_=[O()],B_=[k()],z_=[j(`vista`,{waitUntilFirstUpdate:!0})],Y_){constructor(){super(...arguments),m(Z,5,this),g(this,`localize`,new Pi(this)),_(this,X_,m(Z,8,this,`painel`)),m(Z,11,this),_(this,Z_,m(Z,12,this,[])),m(Z,15,this),_(this,Q_,m(Z,16,this,[])),m(Z,19,this),_(this,$_,m(Z,20,this,[])),m(Z,23,this),_(this,ev,m(Z,24,this,[])),m(Z,27,this),_(this,tv,m(Z,28,this,``)),m(Z,31,this),_(this,nv,m(Z,32,this,!1)),m(Z,35,this),_(this,rv,m(Z,36,this,`BRL`)),m(Z,39,this),_(this,iv,m(Z,40,this,null)),m(Z,43,this)}get aberto(){return this.formulario!==null}novo(){this.vista===`transacoes`&&this.abrir({especie:`transacao`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,vencimento:I_(Date.now()),pago:!1,parte:0}}),this.vista===`categorias`&&this.abrir({especie:`categoria`,dados:{id:0,nome:``,icone:``,cor:`#0d6efd`,limite:``,erroNome:!1}}),this.vista===`recorrencias`&&this.abrir({especie:`recorrencia`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,periodicidade:`mensal`,diaMes:1,diaSemana:1,gerarComoPago:!1,ativa:!0,erros:F_}})}fechar(){this.formulario!==null&&(this.formulario=null,this.emit(`kk-form`,{detail:{aberto:!1}}))}handleVistaChange(){this.fechar()}abrir(e){this.formulario=e,this.emit(`kk-form`,{detail:{aberto:!0}})}get mesCorrente(){return this.mes===``?L_(Date.now()):this.mes}dinheiro(e){return this.localize.number(e,{style:`currency`,currency:this.moeda,minimumFractionDigits:2,maximumFractionDigits:2})}cifra(e){return this.oculto?P_:this.dinheiro(e)}data(e){return e===0?`—`:this.localize.date(new Date(e),{dateStyle:`short`})}get simboloDaMoeda(){return new Intl.NumberFormat(this.localize.lang(),{style:`currency`,currency:this.moeda}).formatToParts(0).find(e=>e.type===`currency`)?.value??this.moeda}get separadores(){let e=new Intl.NumberFormat(this.localize.lang(),{minimumFractionDigits:2}).formatToParts(1234.5);return{grupo:e.find(e=>e.type===`group`)?.value??`.`,decimal:e.find(e=>e.type===`decimal`)?.value??`,`}}mascarar(e){let t=e.replace(/\D/g,``).replace(/^0+(?=\d)/,``);if(t===``)return``;let n=t.padStart(3,`0`),r=Number(n.slice(0,-2));return`${this.localize.number(r)}${this.separadores.decimal}${n.slice(-2)}`}desmascarar(e){let{grupo:t,decimal:n}=this.separadores,r=Number(e.split(t).join(``).replace(n,`.`));return Number.isFinite(r)?Math.abs(r):0}valorEmTexto(e){return e===0?``:this.localize.number(e,{minimumFractionDigits:2,maximumFractionDigits:2})}categoriaPorId(e){return this.categorias.find(t=>t.id===e)}partePorId(e){return e===void 0||e===0?void 0:this.partes.find(t=>t.id===e)}get partesOrdenadas(){return[...this.partes].sort((e,t)=>e.nome.localeCompare(t.nome,this.localize.lang(),{sensitivity:`base`}))}get categoriasOrdenadas(){return[...this.categorias].sort((e,t)=>e.nome.localeCompare(t.nome,this.localize.lang(),{sensitivity:`base`}))}get doMes(){return this.transacoes.filter(e=>e.vencimento!==0&&L_(e.vencimento)===this.mesCorrente)}static soma(e){return e.reduce((e,t)=>e+Number(t.valor),0)}corDa(e){let t=this.categoriaPorId(e.categoria);return t!==void 0&&t.cor!==``?t.cor:e.tipo===`receita`?`var(--kk-financeiro-receita)`:`var(--kk-financeiro-despesa)`}get anosComMovimento(){let e=new Set([new Date().getFullYear(),Number(this.mesCorrente.slice(0,4))]);for(let t of this.transacoes)t.vencimento!==0&&e.add(new Date(t.vencimento).getFullYear());return[...e].sort((e,t)=>t-e)}renderSaldo(){let e=this.transacoes.reduce((e,t)=>e+(t.tipo===`receita`?Number(t.valor):-Number(t.valor)),0);return w`
      <div class="saldo">
        <div class="saldo__topo">
          <span class="saldo__rotulo">${this.localize.term(`financeBalance`)}</span>
          <kk-icon-button
            name=${this.oculto?`eye`:`eye-off`}
            label=${this.localize.term(this.oculto?`financeShow`:`financeHide`)}
            @click=${()=>{this.oculto=!this.oculto,this.emit(`kk-visibility`,{detail:{oculto:this.oculto}})}}
          ></kk-icon-button>
        </div>
        <span class="saldo__valor" ?data-negativo=${e<0}>${this.cifra(e)}</span>
      </div>
    `}renderPeriodo(){let[e=0,t=1]=this.mesCorrente.split(`-`).map(Number),n=(e,t)=>{this.mes=`${e}-${String(t).padStart(2,`0`)}`,this.emit(`kk-month`,{detail:{mes:this.mes}})};return w`
      <div class="periodo">
        <kk-select
          label=${this.localize.term(`financeMonth`)}
          size="small"
          .value=${String(t)}
          @kk-change=${t=>n(e,Number(t.target.value))}
        >
          ${Array.from({length:12},(e,t)=>t).map(e=>w`
              <kk-option value=${e+1}>
                ${this.localize.date(new Date(2001,e,1),{month:`long`})}
              </kk-option>
            `)}
        </kk-select>

        <kk-select
          label=${this.localize.term(`financeYear`)}
          size="small"
          .value=${String(e)}
          @kk-change=${e=>n(Number(e.target.value),t)}
        >
          ${this.anosComMovimento.map(e=>w`<kk-option value=${e}>${e}</kk-option>`)}
        </kk-select>
      </div>
    `}renderPlacares(){let t=this.doMes,n=e.soma(t.filter(e=>e.tipo===`receita`)),r=e.soma(t.filter(e=>e.tipo===`despesa`)),i=e.soma(t.filter(e=>e.tipo===`despesa`&&!e.pago)),a=e.soma(t.filter(e=>e.tipo===`receita`&&!e.pago));return w`
      <div class="placares">
        ${[[n,`receita`,this.localize.term(`financeIncome`)],[r,`despesa`,this.localize.term(`financeExpenses`)],[a,`aviso`,this.localize.term(`financeToReceive`)],[i,`aviso`,this.localize.term(`financeToPay`)]].map(([e,t,n])=>w`
            <div class="placar">
              <span class="placar__valor" data-tom=${t}>${this.cifra(e)}</span>
              <span class="placar__rotulo">${n}</span>
            </div>
          `)}
      </div>
    `}renderGrafico(){let e=new Map;for(let t of this.doMes){let n=e.get(t.categoria)??{receita:0,despesa:0};t.tipo===`receita`?n.receita+=Number(t.valor):n.despesa+=Number(t.valor),e.set(t.categoria,n)}let t=[...e].map(([e,t])=>({nome:this.categoriaPorId(e)?.nome??this.localize.term(`financeNoCategory`),...t})).sort((e,t)=>t.receita+t.despesa-(e.receita+e.despesa));if(t.length===0)return this.renderVazio(`chart-bar`,this.localize.term(`financeNoActivity`));let n=Math.max(...t.map(e=>Math.max(e.receita,e.despesa))),r=e=>n<=0||e<=0?`0%`:`${Math.max(1.5,e/n*100)}%`,i=(e,t)=>w`
      <div class="barra" data-tom=${t}>
        <div class="barra__trilho">
          <div class="barra__preenchido" style=${`width:${r(e)}`}></div>
        </div>
        <span class="barra__valor">${this.dinheiro(e)}</span>
      </div>
    `;return w`
      <h2 class="secao">${this.localize.term(`financeByCategory`)}</h2>
      <figure class="grafico">
        <div class="grafico__legenda">
          <span class="legenda__item" data-tom="receita">
            <span class="legenda__marca"></span>${this.localize.term(`financeIncome`)}
          </span>
          <span class="legenda__item" data-tom="despesa">
            <span class="legenda__marca"></span>${this.localize.term(`financeExpenses`)}
          </span>
        </div>

        <div class="grafico__linhas">
          ${t.map(e=>w`
              <div class="grafico__grupo">
                <span class="grafico__categoria">${e.nome}</span>
                ${e.receita>0?i(e.receita,`receita`):T}
                ${e.despesa>0?i(e.despesa,`despesa`):T}
              </div>
            `)}
        </div>
      </figure>
    `}renderLimites(){let e=new Map;for(let t of this.doMes)t.tipo===`despesa`&&e.set(t.categoria,(e.get(t.categoria)??0)+Number(t.valor));let t=[...e].map(([e,t])=>{let n=this.categoriaPorId(e);return{nome:n?.nome??this.localize.term(`financeNoCategory`),cor:n?.cor??`var(--kk-financeiro-despesa)`,icone:n?.icone??``,limite:n?.limite??0,total:t}}).sort((e,t)=>t.total-e.total);return t.length===0?T:w`
      <h2 class="secao">${this.localize.term(`financeLimits`)}</h2>
      <div class="limites">
        ${t.map(e=>{let t=e.limite>0&&e.total>e.limite,n=e.limite>0?Math.min(100,e.total/e.limite*100):0;return w`
            <div class="limite" ?data-estourou=${t}>
              <span class="limite__topo">
                <span class="limite__nome">
                  ${e.icone===``?T:w`<span>${e.icone}</span>`} ${e.nome}
                </span>
                <span class="limite__valores">
                  ${this.cifra(e.total)}
                  ${e.limite===0?T:w`<small>
                        ${this.localize.term(`financeOfLimit`,this.oculto?P_:this.dinheiro(e.limite))}
                      </small>`}
                </span>
              </span>

              ${e.limite===0?T:w`
                    <span class="limite__barra" role="presentation">
                      <span
                        class="limite__preenchido"
                        style=${`width:${n}%;background:${t?`var(--kk-financeiro-despesa)`:e.cor}`}
                      ></span>
                    </span>
                  `}
            </div>
          `})}
      </div>
    `}renderAtalhos(){return w`
      <div class="atalhos">
        ${[[`transacoes`,`receipt`,this.localize.term(`financeTransactions`),this.transacoes.length],[`categorias`,`tags`,this.localize.term(`financeCategories`),this.categorias.length],[`recorrencias`,`repeat`,this.localize.term(`financeRecurrences`),this.recorrencias.length]].map(([e,t,n,r])=>w`
            <button
              class="atalho"
              type="button"
              @click=${()=>this.emit(`kk-navigate`,{detail:{vista:e}})}
            >
              <kk-icon class="atalho__icone" name=${t}></kk-icon>
              <span class="atalho__rotulo">${n}</span>
              <span class="atalho__resumo">${this.localize.term(`financeCount`,r)}</span>
            </button>
          `)}
      </div>
    `}renderPainel(){return w`
      ${this.renderAtalhos()} ${this.renderSaldo()} ${this.renderPeriodo()}
      ${this.renderPlacares()} ${this.renderLimites()}
      ${this.oculto?w`<p class="discreto">${this.localize.term(`financeHiddenValues`)}</p>`:this.renderGrafico()}
    `}renderVazio(e,t){return w`
      <div class="vazio">
        <kk-icon class="vazio__icone" name=${e}></kk-icon>
        <p>${t}</p>
      </div>
    `}renderCampoValor(e,t,n){return w`
      <kk-input
        label=${t}
        inputmode="numeric"
        .value=${e}
        @kk-input=${e=>{let t=e.target,r=this.mascarar(t.value);t.value=r,n(r)}}
      >
        <span slot="prefix">${this.simboloDaMoeda}</span>
      </kk-input>
    `}renderTipos(e,t){let n=[[`receita`,`arrow-up`,this.localize.term(`financeIncomeOne`)],[`despesa`,`arrow-down`,this.localize.term(`financeExpenseOne`)]];return w`
      <div>
        <span class="formulario__rotulo">${this.localize.term(`financeType`)}</span>
        <div class="tipos">
          ${n.map(([n,r,i])=>w`
              <button
                class="tipo"
                type="button"
                aria-pressed=${e===n}
                @click=${()=>t(n)}
              >
                <kk-icon name=${r}></kk-icon>${i}
              </button>
            `)}
        </div>
      </div>
    `}renderSeletorDeCategoria(e,t){return w`
      <kk-select
        label=${this.localize.term(`financeCategory`)}
        .value=${String(e)}
        @kk-change=${e=>t(Number(e.target.value))}
      >
        <kk-option value="0">${this.localize.term(`financeNoCategory`)}</kk-option>
        ${this.categoriasOrdenadas.map(e=>w`
            <kk-option value=${e.id}>
              ${e.icone===``?``:`${e.icone} `}${e.nome}
            </kk-option>
          `)}
      </kk-select>
    `}renderSeletorDeParte(e,t){return this.partes.length===0?T:w`
      <kk-select
        label=${this.localize.term(`financeParty`)}
        .value=${String(e)}
        @kk-change=${e=>t(Number(e.target.value))}
      >
        <kk-option value="0">${this.localize.term(`financeNoParty`)}</kk-option>
        ${this.partesOrdenadas.map(e=>w`<kk-option value=${e.id}>${e.nome}</kk-option>`)}
      </kk-select>
    `}renderAcoes(e){return w`
      <div class="formulario__acoes">
        <kk-button variant="primary" @click=${e}>
          <kk-icon slot="prefix" name="check"></kk-icon>${this.localize.term(`save`)}
        </kk-button>
        <kk-button @click=${()=>this.fechar()}>${this.localize.term(`cancel`)}</kk-button>
      </div>
    `}salvar(e,t){this.formulario=null,this.emit(`kk-form`,{detail:{aberto:!1}}),this.emit(`kk-save`,{detail:{especie:e,registro:t}})}renderFormTransacao(e){let t=t=>{this.formulario={especie:`transacao`,dados:{...e,...t}}};return w`
      <div class="formulario">
        <h2 class="formulario__titulo">
          ${this.localize.term(e.id>0?`financeEditTransaction`:`financeNewTransaction`)}
        </h2>

        <kk-input
          label=${this.localize.term(`financeDescription`)}
          .value=${e.descricao}
          @kk-input=${e=>t({descricao:e.target.value})}
        ></kk-input>

        ${this.renderCampoValor(e.valor,this.localize.term(`financeAmount`),e=>t({valor:e}))}
        ${this.renderTipos(e.tipo,e=>t({tipo:e}))}
        ${this.renderSeletorDeCategoria(e.categoria,e=>t({categoria:e}))}
        ${this.renderSeletorDeParte(e.parte,e=>t({parte:e}))}

        <kk-input
          type="date"
          label=${this.localize.term(`financeDueDate`)}
          .value=${e.vencimento}
          @kk-change=${e=>t({vencimento:e.target.value})}
        ></kk-input>

        <kk-switch
          ?checked=${e.pago}
          @kk-change=${e=>t({pago:e.target.checked})}
        >
          ${this.localize.term(`financePaid`)}
        </kk-switch>

        ${this.renderAcoes(()=>this.salvar(`transacao`,{id:e.id,descricao:e.descricao.trim(),valor:this.desmascarar(e.valor),tipo:e.tipo,categoria:Number(e.categoria),vencimento:e.vencimento===``?Date.now():R_(e.vencimento),pago:e.pago,parte:Number(e.parte)}))}
      </div>
    `}renderTransacoes(){if(this.transacoes.length===0)return this.renderVazio(`receipt`,this.localize.term(`financeNoTransactions`));let e=this.doMes.sort((e,t)=>t.vencimento-e.vencimento);return e.length===0?w`
        ${this.renderPeriodo()}
        ${this.renderVazio(`receipt`,this.localize.term(`financeNoTransactionsInMonth`))}
      `:w`
      ${this.renderPeriodo()}
      <div class="registros">
        ${e.map(e=>{let t=e.tipo===`receita`,n=this.categoriaPorId(e.categoria),r=this.partePorId(e.parte),i=this.corDa(e);return w`
            <div class="registro" data-status=${e.pago?`ok`:`pendente`}>
              <span
                class="registro__avatar"
                style=${`background:color-mix(in oklab, ${i} 15%, transparent);color:${i}`}
              >
                ${n===void 0||n.icone===``?w`<kk-icon name=${t?`arrow-up`:`arrow-down`}></kk-icon>`:n.icone}
              </span>

              <button
                class="registro__alvo"
                type="button"
                @click=${()=>this.abrir({especie:`transacao`,dados:{id:e.id,descricao:e.descricao,valor:this.valorEmTexto(e.valor),tipo:e.tipo,categoria:e.categoria,vencimento:I_(e.vencimento===0?Date.now():e.vencimento),pago:e.pago,parte:e.parte??0}})}
              >
                <span class="registro__topo">
                  <span class="registro__titulo">${e.descricao}</span>
                  <span class="registro__valor" data-tom=${e.tipo}>
                    ${t?`+`:`−`} ${this.cifra(e.valor)}
                  </span>
                </span>
                <span class="registro__resumo">
                  ${this.data(e.vencimento)}
                  ${n===void 0?``:`\xB7 ${n.nome}`}
                  ${r===void 0?``:`\xB7 ${r.nome}`}
                </span>
              </button>

              <div class="registro__acoes">
                <kk-icon-button
                  name=${e.pago?`circle-check`:`circle`}
                  label=${this.localize.term(e.pago?`financeUnmarkPaid`:`financeMarkPaid`)}
                  @click=${()=>this.emit(`kk-toggle`,{detail:{especie:`transacao`,registro:{...e,pago:!e.pago}}})}
                ></kk-icon-button>
                <kk-icon-button
                  name="trash"
                  label=${this.localize.term(`deleteItem`)}
                  @click=${()=>this.emit(`kk-delete`,{detail:{especie:`transacao`,registro:e}})}
                ></kk-icon-button>
              </div>
            </div>
          `})}
      </div>
    `}renderFormCategoria(e){let t=t=>{this.formulario={especie:`categoria`,dados:{...e,...t}}};return w`
      <div class="formulario">
        <h2 class="formulario__titulo">
          ${this.localize.term(e.id>0?`financeEditCategory`:`financeNewCategory`)}
        </h2>

        <kk-input
          label=${this.localize.term(`financeName`)}
          .value=${e.nome}
          help-text=${e.erroNome?this.localize.term(`financeNameRequired`):``}
          @kk-input=${e=>t({nome:e.target.value,erroNome:!1})}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${this.localize.term(`financeIcon`)}</span>
          <div class="icones">
            ${M_.map(n=>w`
                <button
                  class="icone"
                  type="button"
                  aria-label=${n}
                  aria-pressed=${e.icone===n}
                  @click=${()=>t({icone:e.icone===n?``:n})}
                >
                  ${n}
                </button>
              `)}
          </div>
        </div>

        <kk-input
          type="color"
          label=${this.localize.term(`financeColor`)}
          .value=${e.cor}
          @kk-input=${e=>t({cor:e.target.value})}
        ></kk-input>

        ${this.renderCampoValor(e.limite,this.localize.term(`financeMonthlyLimit`),e=>t({limite:e}))}
        <p class="discreto">${this.localize.term(`financeLimitHelp`)}</p>

        ${this.renderAcoes(()=>{if(e.nome.trim()===``){t({erroNome:!0});return}this.salvar(`categoria`,{id:e.id,nome:e.nome.trim(),icone:e.icone,cor:e.cor,limite:this.desmascarar(e.limite)})})}
      </div>
    `}renderCategorias(){return this.categorias.length===0?this.renderVazio(`tags`,this.localize.term(`financeNoCategories`)):w`
      <div class="categorias">
        ${this.categoriasOrdenadas.map(e=>w`
            <div class="categoria">
              <span class="categoria__cor" style=${`background:${e.cor}`}></span>
              <span>${e.icone}</span>
              <span class="categoria__nome">${e.nome}</span>
              ${e.limite>0?w`
                    <span class="discreto">
                      ${this.localize.term(`financeLimitOf`,this.oculto?P_:this.dinheiro(e.limite))}
                    </span>
                  `:T}
              <kk-icon-button
                name="pencil"
                label=${this.localize.term(`editItem`)}
                @click=${()=>this.abrir({especie:`categoria`,dados:{id:e.id,nome:e.nome,icone:e.icone,cor:e.cor,limite:this.valorEmTexto(e.limite),erroNome:!1}})}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${this.localize.term(`deleteItem`)}
                @click=${()=>this.emit(`kk-delete`,{detail:{especie:`categoria`,registro:e}})}
              ></kk-icon-button>
            </div>
          `)}
      </div>
    `}nomeDaPeriodicidade(e){let t=N_.find(([t])=>t===e);return t===void 0?e:this.localize.term(t[1])}descreverPeriodo(e){let t=this.nomeDaPeriodicidade(e.periodicidade);return e.periodicidade===`mensal`?`${t} \xB7 ${this.localize.term(`financeDayNum`,e.diaMes)}`:e.periodicidade===`semanal`?`${t} \xB7 ${this.nomeDoDia(e.diaSemana)}`:t}nomeDoDia(e){return this.localize.date(new Date(2001,0,e),{weekday:`long`})}renderFormRecorrencia(e){let t=t=>{this.formulario={especie:`recorrencia`,dados:{...e,...t}}};return w`
      <div class="formulario">
        <h2 class="formulario__titulo">
          ${this.localize.term(e.id>0?`financeEditRecurrence`:`financeNewRecurrence`)}
        </h2>

        <kk-input
          label=${this.localize.term(`financeDescription`)}
          .value=${e.descricao}
          help-text=${e.erros.descricao?this.localize.term(`financeDescriptionRequired`):``}
          @kk-input=${n=>t({descricao:n.target.value,erros:{...e.erros,descricao:!1}})}
        ></kk-input>

        ${this.renderCampoValor(e.valor,this.localize.term(`financeAmount`),n=>t({valor:n,erros:{...e.erros,valor:!1}}))}
        ${e.erros.valor?w`<p class="erro">${this.localize.term(`financeAmountRequired`)}</p>`:T}
        ${this.renderTipos(e.tipo,e=>t({tipo:e}))}
        ${this.renderSeletorDeCategoria(e.categoria,e=>t({categoria:e}))}

        <kk-select
          label=${this.localize.term(`financePeriodicity`)}
          .value=${e.periodicidade}
          @kk-change=${n=>t({periodicidade:n.target.value,erros:{...e.erros,diaMes:!1}})}
        >
          ${N_.map(([e,t])=>w`<kk-option value=${e}>${this.localize.term(t)}</kk-option>`)}
        </kk-select>

        ${e.periodicidade===`mensal`?w`
              <kk-input
                type="number"
                min="1"
                max="31"
                label=${this.localize.term(`financeDayOfMonth`)}
                .value=${String(e.diaMes)}
                help-text=${this.localize.term(e.erros.diaMes?`financeDayOfMonthRequired`:`financeDayOfMonthHelp`)}
                @kk-input=${n=>t({diaMes:Number(n.target.value),erros:{...e.erros,diaMes:!1}})}
              ></kk-input>
            `:T}
        ${e.periodicidade===`semanal`?w`
              <kk-select
                label=${this.localize.term(`financeWeekday`)}
                .value=${String(e.diaSemana)}
                @kk-change=${e=>t({diaSemana:Number(e.target.value)})}
              >
                ${[1,2,3,4,5,6,7].map(e=>w`<kk-option value=${e}>${this.nomeDoDia(e)}</kk-option>`)}
              </kk-select>
            `:T}

        <kk-switch
          ?checked=${e.gerarComoPago}
          @kk-change=${e=>t({gerarComoPago:e.target.checked})}
        >
          ${this.localize.term(`financeGenerateAsPaid`)}
        </kk-switch>

        <kk-switch
          ?checked=${e.ativa}
          @kk-change=${e=>t({ativa:e.target.checked})}
        >
          ${this.localize.term(`financeActive`)}
        </kk-switch>

        ${this.renderAcoes(()=>{let n={descricao:e.descricao.trim()===``,valor:this.desmascarar(e.valor)<=0,diaMes:e.periodicidade===`mensal`&&!(e.diaMes>=1&&e.diaMes<=31)};if(n.descricao||n.valor||n.diaMes){t({erros:n});return}this.salvar(`recorrencia`,{id:e.id,descricao:e.descricao.trim(),valor:this.desmascarar(e.valor),tipo:e.tipo,categoria:Number(e.categoria),periodicidade:e.periodicidade,diaMes:Math.min(31,Math.max(1,Number(e.diaMes))),diaSemana:Math.min(7,Math.max(1,Number(e.diaSemana))),gerarComoPago:e.gerarComoPago,ativa:e.ativa,proxima:0})})}
      </div>
    `}renderRecorrencias(){return this.recorrencias.length===0?this.renderVazio(`repeat`,this.localize.term(`financeNoRecurrences`)):w`
      <div class="registros">
        ${this.recorrencias.map(e=>{let t=e.tipo===`receita`;return w`
            <div class="registro" data-status=${e.ativa?`ok`:`pendente`}>
              <span class="registro__avatar">
                <kk-icon name=${t?`arrow-up`:`arrow-down`}></kk-icon>
              </span>

              <button
                class="registro__alvo"
                type="button"
                @click=${()=>this.abrir({especie:`recorrencia`,dados:{id:e.id,descricao:e.descricao,valor:this.valorEmTexto(e.valor),tipo:e.tipo,categoria:e.categoria,periodicidade:e.periodicidade,diaMes:e.diaMes,diaSemana:e.diaSemana,gerarComoPago:e.gerarComoPago,ativa:e.ativa,erros:F_}})}
              >
                <span class="registro__topo">
                  <span class="registro__titulo">${e.descricao}</span>
                  <span class="registro__valor" data-tom=${e.tipo}>
                    ${t?`+`:`−`} ${this.cifra(e.valor)}
                  </span>
                </span>
                <span class="registro__resumo">${this.descreverPeriodo(e)}</span>
                <span class="registro__resumo">
                  ${this.localize.term(`financeNext`,this.data(e.proxima))}
                </span>
              </button>

              <div class="registro__acoes">
                <kk-icon-button
                  name=${e.ativa?`player-pause`:`player-play`}
                  label=${this.localize.term(e.ativa?`financePause`:`financeResume`)}
                  @click=${()=>this.emit(`kk-toggle`,{detail:{especie:`recorrencia`,registro:{...e,ativa:!e.ativa}}})}
                ></kk-icon-button>
                <kk-icon-button
                  name="trash"
                  label=${this.localize.term(`deleteItem`)}
                  @click=${()=>this.emit(`kk-delete`,{detail:{especie:`recorrencia`,registro:e}})}
                ></kk-icon-button>
              </div>
            </div>
          `})}
      </div>
    `}renderVista(){let e=this.formulario;return e===null?this.vista===`transacoes`?this.renderTransacoes():this.vista===`categorias`?this.renderCategorias():this.vista===`recorrencias`?this.renderRecorrencias():this.renderPainel():e.especie===`transacao`?this.renderFormTransacao(e.dados):e.especie===`categoria`?this.renderFormCategoria(e.dados):this.renderFormRecorrencia(e.dados)}render(){return w`<div part="base" class="financeiro">${this.renderVista()}</div>`}};Z=f(Y_),X_=new WeakMap,Z_=new WeakMap,Q_=new WeakMap,$_=new WeakMap,ev=new WeakMap,tv=new WeakMap,nv=new WeakMap,rv=new WeakMap,iv=new WeakMap,h(Z,4,`vista`,J_,av,X_),h(Z,4,`categorias`,q_,av,Z_),h(Z,4,`partes`,K_,av,Q_),h(Z,4,`transacoes`,G_,av,$_),h(Z,4,`recorrencias`,W_,av,ev),h(Z,4,`mes`,U_,av,tv),h(Z,4,`oculto`,H_,av,nv),h(Z,4,`moeda`,V_,av,rv),h(Z,4,`formulario`,B_,av,iv),h(Z,1,`handleVistaChange`,z_,av),p(Z,av),g(av,`styles`,[D,_h]),g(av,`dependencies`,{"kk-button":z,"kk-icon":us,"kk-icon-button":I,"kk-input":K,"kk-option":j_,"kk-select":Y,"kk-switch":Gh}),av.define(`kk-financeiro`),us.define(`kk-icon`),I.define(`kk-icon-button`),K.define(`kk-input`),mf.define(`kk-menu`),Kf.define(`kk-menu-item`),j_.define(`kk-option`);var ov=C`
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
`,sv=`important`,cv=` !`+sv,lv=qa(class extends Ja{constructor(e){if(super(e),e.type!==Ka.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(cv);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?sv:``):n[e]=r}}return Ta}}),uv,dv,fv,pv,mv,hv,gv,_v,vv=class extends (pv=M,fv=[O({type:Number,reflect:!0})],dv=[O({type:Boolean,reflect:!0})],uv=[O()],pv){constructor(){super(...arguments),g(this,`localize`,new Pi(this)),_(this,hv,m(mv,8,this,0)),m(mv,11,this),_(this,gv,m(mv,12,this,!1)),m(mv,15,this),_(this,_v,m(mv,16,this,``)),m(mv,19,this)}render(){return w`
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
        <div part="indicator" class="progress-bar__indicator" style=${lv({width:`${this.value}%`})}>
          ${this.indeterminate?``:w` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};mv=f(pv),hv=new WeakMap,gv=new WeakMap,_v=new WeakMap,h(mv,4,`value`,fv,vv,hv),h(mv,4,`indeterminate`,dv,vv,gv),h(mv,4,`label`,uv,vv,_v),p(mv,vv),g(vv,`styles`,[D,ov]),vv.define(`kk-progress-bar`),Y.define(`kk-select`),xc.define(`kk-spinner`),Gh.define(`kk-switch`);var yv=C`
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
`,bv,xv,Sv,Cv,wv,Tv,Ev,Dv,Ov,kv,Av,jv,Mv,Nv,Pv,Fv,Iv,Lv,Rv,zv,Bv,Vv,Hv,Uv,Wv,Gv,Kv,qv,Jv,Q,Yv,Xv,Zv,Qv,$v,ey,ty,ny,ry,iy,ay,oy,sy,cy,ly,uy,dy,fy,py,my,hy,gy,_y,vy,yy,$=class extends (Jv=M,qv=[A(`.textarea__control`)],Kv=[k()],Gv=[O()],Wv=[O()],Uv=[O()],Hv=[O({reflect:!0})],Vv=[O({type:Boolean,reflect:!0})],Bv=[O()],zv=[O({attribute:`help-text`})],Rv=[O()],Lv=[O({type:Number})],Iv=[O()],Fv=[O({type:Boolean,reflect:!0})],Pv=[O({type:Boolean,reflect:!0})],Nv=[O({reflect:!0})],Mv=[O({type:Boolean,reflect:!0})],jv=[O({type:Number})],Av=[O({type:Number})],kv=[O()],Ov=[O({converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],Dv=[O()],Ev=[O({type:Boolean})],Tv=[O()],wv=[O({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],Cv=[O()],Sv=[$a()],xv=[j(`disabled`,{waitUntilFirstUpdate:!0})],bv=[j(`value`,{waitUntilFirstUpdate:!0})],Jv){constructor(){super(...arguments),m(Q,5,this),g(this,`formControlController`,new ko(this,{assumeInteractionOn:[`kk-blur`,`kk-input`]})),g(this,`hasSlotController`,new zs(this,`help-text`,`label`)),_(this,Yv,m(Q,8,this)),m(Q,11,this),_(this,Xv,m(Q,12,this,!1)),m(Q,15,this),_(this,Zv,m(Q,16,this,``)),m(Q,19,this),_(this,Qv,m(Q,20,this,``)),m(Q,23,this),_(this,$v,m(Q,24,this,``)),m(Q,27,this),_(this,ey,m(Q,28,this,`medium`)),m(Q,31,this),_(this,ty,m(Q,32,this,!1)),m(Q,35,this),_(this,ny,m(Q,36,this,``)),m(Q,39,this),_(this,ry,m(Q,40,this,``)),m(Q,43,this),_(this,iy,m(Q,44,this,``)),m(Q,47,this),_(this,ay,m(Q,48,this,4)),m(Q,51,this),_(this,oy,m(Q,52,this,`vertical`)),m(Q,55,this),_(this,sy,m(Q,56,this,!1)),m(Q,59,this),_(this,cy,m(Q,60,this,!1)),m(Q,63,this),_(this,ly,m(Q,64,this,``)),m(Q,67,this),_(this,uy,m(Q,68,this,!1)),m(Q,71,this),_(this,dy,m(Q,72,this)),m(Q,75,this),_(this,fy,m(Q,76,this)),m(Q,79,this),_(this,py,m(Q,80,this)),m(Q,83,this),_(this,my,m(Q,84,this,!0)),m(Q,87,this),_(this,hy,m(Q,88,this)),m(Q,91,this),_(this,gy,m(Q,92,this)),m(Q,95,this),_(this,_y,m(Q,96,this)),m(Q,99,this),_(this,vy,m(Q,100,this,!0)),m(Q,103,this),_(this,yy,m(Q,104,this)),m(Q,107,this),g(this,`defaultValue`,m(Q,108,this,``)),m(Q,111,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleChange(){this.value=this.input.value,this.emit(`kk-change`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleInput(){this.value=this.input.value,this.emit(`kk-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return w`
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
              .value=${Yf(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${N(this.placeholder)}
              rows=${N(this.rows)}
              style=${lv({"--rows":String(this.rows)})}
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
              @invalid=${this.handleInvalid}
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
    `}};Q=f(Jv),Yv=new WeakMap,Xv=new WeakMap,Zv=new WeakMap,Qv=new WeakMap,$v=new WeakMap,ey=new WeakMap,ty=new WeakMap,ny=new WeakMap,ry=new WeakMap,iy=new WeakMap,ay=new WeakMap,oy=new WeakMap,sy=new WeakMap,cy=new WeakMap,ly=new WeakMap,uy=new WeakMap,dy=new WeakMap,fy=new WeakMap,py=new WeakMap,my=new WeakMap,hy=new WeakMap,gy=new WeakMap,_y=new WeakMap,vy=new WeakMap,yy=new WeakMap,h(Q,4,`input`,qv,$,Yv),h(Q,4,`hasFocus`,Kv,$,Xv),h(Q,4,`title`,Gv,$,Zv),h(Q,4,`name`,Wv,$,Qv),h(Q,4,`value`,Uv,$,$v),h(Q,4,`size`,Hv,$,ey),h(Q,4,`filled`,Vv,$,ty),h(Q,4,`label`,Bv,$,ny),h(Q,4,`helpText`,zv,$,ry),h(Q,4,`placeholder`,Rv,$,iy),h(Q,4,`rows`,Lv,$,ay),h(Q,4,`resize`,Iv,$,oy),h(Q,4,`disabled`,Fv,$,sy),h(Q,4,`readonly`,Pv,$,cy),h(Q,4,`form`,Nv,$,ly),h(Q,4,`required`,Mv,$,uy),h(Q,4,`minlength`,jv,$,dy),h(Q,4,`maxlength`,Av,$,fy),h(Q,4,`autocapitalize`,kv,$,py),h(Q,4,`autocorrect`,Ov,$,my),h(Q,4,`autocomplete`,Dv,$,hy),h(Q,4,`autofocus`,Ev,$,gy),h(Q,4,`enterkeyhint`,Tv,$,_y),h(Q,4,`spellcheck`,wv,$,vy),h(Q,4,`inputmode`,Cv,$,yy),h(Q,1,`handleDisabledChange`,xv,$),h(Q,1,`handleValueChange`,bv,$),h(Q,5,`defaultValue`,Sv,$),p(Q,$),g($,`styles`,[D,Qf,yv]),$.define(`kk-textarea`),d(`./ui`);var by=document.querySelector(`#app`);function xy(e){if(e.modulo===`home`)return{cabecalho:{titulo:x.home.saudacao},conteudo:ni({executar:()=>void Ay(!0),ocupado:Dy})};let t=Ut(e.modulo);if(t===void 0)return{cabecalho:{titulo:x.erro.naoEncontrado,voltarPara:`home`},conteudo:hr()};if(Sy[t.id]===void 0||!Gt(t.id))return{cabecalho:{titulo:t.rotulo,voltarPara:`home`},conteudo:mr(t)};let n=Ey.get(t.id);if(n!==void 0)return{cabecalho:{titulo:t.rotulo,voltarPara:`home`},conteudo:_r(n)};let r=Cy.get(t.id);return r===void 0?(Ty(t.id),{cabecalho:{titulo:t.rotulo,voltarPara:`home`},conteudo:gr()}):{cabecalho:{titulo:r.titulo?.(e)??t.rotulo,capaPropria:r.capaPropria?.(e)??!1,voltarPara:r.voltarPara?.(e)??`home`,aoVoltar:()=>r.aoVoltar?.(e)??!1,acoes:r.acoes?.(e)},conteudo:r.conteudo(e)}}var Sy={anotacoes:async()=>(await b(async()=>{let{telaAnotacoes:e}=await import(`./tela-BPjsTdjC.js`);return{telaAnotacoes:e}},__vite__mapDeps([20,5,3,4,21,22,23]),import.meta.url)).telaAnotacoes,caderno:async()=>(await b(async()=>{let{telaCaderno:e}=await import(`./tela-DL6rFyTl.js`);return{telaCaderno:e}},[],import.meta.url)).telaCaderno,calendario:async()=>(await b(async()=>{let{telaCalendario:e}=await import(`./tela-DLcwRaVV.js`);return{telaCalendario:e}},__vite__mapDeps([24,6,4]),import.meta.url)).telaCalendario,criacao:async()=>(await b(async()=>{let{telaCriacao:e}=await import(`./tela-DP5XNtw6.js`);return{telaCriacao:e}},__vite__mapDeps([25,4,22,21,26,27,28,9]),import.meta.url)).telaCriacao,entenda:async()=>(await b(async()=>{let{telaCriacao:e}=await import(`./tela-DP5XNtw6.js`);return{telaCriacao:e}},__vite__mapDeps([25,4,22,21,26,27,28,9]),import.meta.url)).telaCriacao,faq:async()=>(await b(async()=>{let{telaFaq:e}=await import(`./tela-DtecdLg7.js`);return{telaFaq:e}},__vite__mapDeps([29,4,30,31,21,22,27]),import.meta.url)).telaFaq,imite:async()=>(await b(async()=>{let{telaImite:e}=await import(`./tela-C7cCwKT5.js`);return{telaImite:e}},__vite__mapDeps([32,21,22,27]),import.meta.url)).telaImite,cronologia:async()=>(await b(async()=>{let{telaCronologia:e}=await import(`./tela-CRGC_lF8.js`);return{telaCronologia:e}},__vite__mapDeps([33,4]),import.meta.url)).telaCronologia,estudo:async()=>(await b(async()=>{let{telaEstudo:e}=await import(`./tela-DlZVSVTG.js`);return{telaEstudo:e}},__vite__mapDeps([34,11,4]),import.meta.url)).telaEstudo,financeiro:async()=>(await b(async()=>{let{telaFinanceiro:e}=await import(`./tela-BPf8P0ro.js`);return{telaFinanceiro:e}},__vite__mapDeps([35,8,9,26,22,7,4]),import.meta.url)).telaFinanceiro,guias:async()=>(await b(async()=>{let{telaGuias:e}=await import(`./tela-BMocs8bO.js`);return{telaGuias:e}},__vite__mapDeps([36,4,5,21,22,23,37,14]),import.meta.url)).telaGuias,jogo:async()=>(await b(async()=>{let{telaJogo:e}=await import(`./tela-WULJ33tz.js`);return{telaJogo:e}},__vite__mapDeps([38,4,21,22]),import.meta.url)).telaJogo,leitura:async()=>(await b(async()=>{let{telaLeitura:e}=await import(`./tela-C5oFHwA8.js`);return{telaLeitura:e}},__vite__mapDeps([39,40]),import.meta.url)).telaLeitura,metas:async()=>(await b(async()=>{let{telaMetas:e}=await import(`./tela-CwpDTVWz.js`);return{telaMetas:e}},__vite__mapDeps([41,10,4,5,9,8]),import.meta.url)).telaMetas,ministerio:async()=>(await b(async()=>{let{telaMinisterio:e}=await import(`./tela-DQkMT42b.js`);return{telaMinisterio:e}},__vite__mapDeps([42,37,12,4,5]),import.meta.url)).telaMinisterio,perfil:async()=>(await b(async()=>{let{telaPerfil:e}=await import(`./tela-B4bt9OwS.js`);return{telaPerfil:e}},__vite__mapDeps([43,4,37,19]),import.meta.url)).telaPerfil,poesia:async()=>(await b(async()=>{let{telaPoesia:e}=await import(`./tela-CLq0QjLu.js`);return{telaPoesia:e}},__vite__mapDeps([44,4,5,31,21,22,23,37,14]),import.meta.url)).telaPoesia,prep:async()=>(await b(async()=>{let{telaPrep:e}=await import(`./tela-Bl6tlWP4.js`);return{telaPrep:e}},__vite__mapDeps([45,4,9,17,16,5,15]),import.meta.url)).telaPrep,principios:async()=>(await b(async()=>{let{telaPrincipios:e}=await import(`./tela-CDGBP3DI.js`);return{telaPrincipios:e}},__vite__mapDeps([46,4,30,31,21,22,27]),import.meta.url)).telaPrincipios,receitas:async()=>(await b(async()=>{let{telaReceitas:e}=await import(`./tela-D-BXsv3y.js`);return{telaReceitas:e}},__vite__mapDeps([47,5,31,21,22,23,37,14,13,4]),import.meta.url)).telaReceitas,servico:async()=>(await b(async()=>{let{telaServico:e}=await import(`./tela-BGooFVPY.js`);return{telaServico:e}},__vite__mapDeps([48,10,4,5,9,8]),import.meta.url)).telaServico,sobre:async()=>(await b(async()=>{let{telaSobre:e}=await import(`./tela-BOh_FLfH.js`);return{telaSobre:e}},[],import.meta.url)).telaSobre,tutorial:async()=>(await b(async()=>{let{telaTutorial:e}=await import(`./tela-Dav3EY3Q.js`);return{telaTutorial:e}},__vite__mapDeps([49,4,21,22,50]),import.meta.url)).telaTutorial},Cy=new Map,wy=new Set;function Ty(e){let t=Sy[e];t===void 0||Cy.has(e)||wy.has(e)||(wy.add(e),t().then(t=>{Cy.set(e,t),Oy()}).catch(t=>{wy.delete(e),Ey.set(e,String(t)),Oy()}))}var Ey=new Map,Dy=!1;function Oy(){if(by===null)return;let e=ky,{cabecalho:t,conteudo:n}=xy(e);document.title=e.modulo===`home`?c.displayName:`${t.titulo} — ${c.displayName}`,St(In(t,n,Oy),by),Mn()}var ky={modulo:`home`,args:[],query:new URLSearchParams};async function Ay(e){if(!Dy){Dy=!0,Oy();try{let t=await yn();if(!e)return;t.ok?xi(x.home.sincronizado(t.atualizados.length)):xi(t.motivo===`offline`?x.home.semRede:x.home.semManifesto,`warning`)}finally{Dy=!1,Oy()}}}function jy(){by!==null&&St(v`
      <div class="carregando">
        <kk-spinner></kk-spinner>
        <p>${x.app.carregando}</p>
      </div>
    `,by)}function My(e){by!==null&&St(v`
      <div class="aviso">
        <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
        <h2>${x.erro.banco}</h2>
        <pre class="detalhe">${e}</pre>
      </div>
    `,by)}function Ny(e){switch(e){case`instancia-dupla`:return x.armazenamento.memoriaInstanciaDupla;case`indisponivel`:return x.armazenamento.memoriaIndisponivel;default:return x.armazenamento.memoriaOrigemInsegura}}async function Py(){await Lt(Ft()),jy(),Xt(Oy);try{let e=await r();e.persistente||xi(Ny(e.motivo),`warning`)}catch(e){My(String(e));return}by?.removeAttribute(`aria-busy`),Jt(e=>{ky=e,Oy(),scrollTo({top:0})}),rn(),Ay(!1),di(Oy),vi()}window.__note={repositorio:i,apagarDados:pn,navegacao:{MODULOS:zt,ATALHOS:Rt,HOME:Bt},imite:{carregarCartoes:Zn,lerLentes:$n},caderno:{listarAnotacoes:Bn}},location.hash===``&&qt(`home`),Py();export{pn as $,pr as A,nr as B,Cr as C,ir as D,yr as E,or as F,Hn as G,Ln as H,dr as I,Rn as J,Jn as K,ur as L,er as M,$n as N,Zn as O,sr as P,Cn as Q,lr as R,wr as S,vr as T,qn as U,Vn as V,Wn as W,Yn as X,Kn as Y,Un as Z,Dr as _,O as a,b as at,xr as b,w as c,v as ct,_i as d,f as dt,Zt as et,ui as f,m as ft,ai as g,c as gt,ii as h,_ as ht,A as i,x as it,tr as j,fr as k,C as l,bt as lt,ri as m,g as mt,Im as n,zt as nt,M as o,y as ot,li as p,h as pt,Bn as q,j as r,Ut as rt,D as s,ot as st,lv as t,qt as tt,xi as u,p as ut,kr as v,Ar as w,jr as x,Or as y,rr as z};