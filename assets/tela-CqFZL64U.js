import{i as e,t}from"./lit-CL39YOSA.js";import{a as n,n as r,r as i,t as a}from"./strings-5zCKnCyL.js";import{n as o}from"./rotas-D12eslN_.js";import{i as s,r as c}from"./data-7IMAkOFv.js";import{l as ee,o as te,r as l,s as ne,t as re}from"./acessibilidade-CRpcvpwG.js";import{t as u}from"./defineProperty-BbfpZ9Tg.js";import{M as ie,R as d,c as ae,f as oe,j as se}from"./index-DYev-n2R.js";import{t as ce}from"./carga-Cb65ZAc7.js";import{t as le}from"./compartilhar-DUGOD5xo.js";import{_ as ue,a as de,d as fe,f as pe,g as me,h as he,i as ge,l as _e,m as ve,n as ye,o as be,p as xe,r as Se,s as Ce,t as we,u as Te,v as Ee}from"./dados-eNXH3u-f.js";import{t as De}from"./qr-D7lNfOUG.js";function Oe(e){let t=e.trim();return t.length<=254&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(t)}function ke(e){let t=Ee(e);return t.length===12||t.length===13?t.startsWith(`55`)?t.slice(2):``:t.length===10||t.length===11?t:``}function f(e){let t=ke(e);return t===``||Number(t.slice(0,2))<11?!1:t.length===11?t.startsWith(`9`,2):/^[2-5]/.test(t.slice(2))}var Ae=e=>e??t;function je(e){te(e),d()}function p(t,n,r){return e`
    <kk-switch
      class="a11y__opcao"
      help-text=${r}
      ?checked=${l()[t]}
      @kk-change=${e=>{je({[t]:e.target.checked})}}
    >
      ${n}
    </kk-switch>
  `}function Me(){let t=l().texto;return e`
    <div class="a11y__opcao">
      <span class="a11y__rotulo" id="a11y-texto">${r.acessibilidade.texto}</span>
      <div class="a11y__graus" role="radiogroup" aria-labelledby="a11y-texto">
        ${ee.map(n=>e`
            <button
              type="button"
              class="chip a11y__grau"
              role="radio"
              aria-checked=${n===t}
              ?data-ativo=${n===t}
              style="font-size: ${n/100}em"
              @click=${()=>je({texto:n})}
            >
              ${r.acessibilidade.grau(n)}
            </button>
          `)}
      </div>
      <p class="a11y__ajuda">${r.acessibilidade.textoAjuda}</p>
    </div>
  `}function Ne(){return e`
    <kk-switch
      class="a11y__opcao"
      help-text=${r.acessibilidade.temaAjuda}
      ?checked=${ie()===`escuro`}
      @kk-change=${e=>{se(e.target.checked?`escuro`:`claro`),d()}}
    >
      ${r.acessibilidade.tema}
    </kk-switch>
  `}function m(t,n,r){return e`
    <div class="a11y__sistema">
      <kk-icon name=${t}></kk-icon>
      <div>
        <strong>${n}</strong>
        <p>${r}</p>
      </div>
    </div>
  `}function Pe(){let n=matchMedia(`(prefers-reduced-motion: reduce)`).matches,i=ne();return e`
    <div class="a11y">
      <p class="a11y__intro">${r.acessibilidade.intro}</p>

      <h2 class="secao">
        <kk-icon name="eye"></kk-icon>
        ${r.acessibilidade.visao}
      </h2>
      ${Me()}
      ${Ne()}
      ${p(`contraste`,r.acessibilidade.contraste,r.acessibilidade.contrasteAjuda)}
      ${p(`sublinhar`,r.acessibilidade.sublinhar,r.acessibilidade.sublinharAjuda)}
      ${p(`espacamento`,r.acessibilidade.espacamento,r.acessibilidade.espacamentoAjuda)}

      <h2 class="secao">
        <kk-icon name="player-pause"></kk-icon>
        ${r.acessibilidade.movimentoSecao}
      </h2>
      ${p(`movimento`,r.acessibilidade.movimento,r.acessibilidade.movimentoAjuda)}
      ${p(`semRelogio`,r.acessibilidade.semRelogio,r.acessibilidade.semRelogioAjuda)}
      ${n?e`<p class="a11y__nota">${r.acessibilidade.movimentoSistema}</p>`:t}

      <h2 class="secao">
        <kk-icon name="hand-finger"></kk-icon>
        ${r.acessibilidade.toqueSecao}
      </h2>
      ${p(`alvos`,r.acessibilidade.alvos,r.acessibilidade.alvosAjuda)}
      ${p(`foco`,r.acessibilidade.foco,r.acessibilidade.focoAjuda)}

      <h2 class="secao">
        <kk-icon name="ear"></kk-icon>
        ${r.acessibilidade.avisosSecao}
      </h2>
      ${i?p(`vibrar`,r.acessibilidade.vibrar,r.acessibilidade.vibrarAjuda):e`<p class="a11y__nota">${r.acessibilidade.semVibracao}</p>`}

      <h2 class="secao">
        <kk-icon name="device-mobile"></kk-icon>
        ${r.acessibilidade.sistemaSecao}
      </h2>
      ${m(`speakerphone`,r.acessibilidade.leitorTitulo,r.acessibilidade.leitorTexto)}
      ${m(`volume`,r.acessibilidade.ouvirTitulo,r.acessibilidade.ouvirTexto)}
      ${m(`typography`,r.acessibilidade.fonteTitulo,r.acessibilidade.fonteTexto)}
      ${m(`zoom-in`,r.acessibilidade.zoomTitulo,r.acessibilidade.zoomTexto)}

      <div class="a11y__normas">
        <kk-icon name="accessible"></kk-icon>
        <p>${r.acessibilidade.normas}</p>
      </div>

      <kk-button
        class="a11y__restaurar"
        variant="neutral"
        outline
        @click=${()=>{je(re),ae(r.acessibilidade.restaurado,`neutral`)}}
      >
        <kk-icon slot="prefix" name="refresh"></kk-icon>
        ${r.acessibilidade.restaurar}
      </kk-button>
    </div>
  `}var Fe={value:void 0,enumerable:!1};function h(e,t,n){function r(n,r){if(!n._bio){Fe.value={def:r,constr:o,traits:new Set};try{Object.defineProperty(n,"_bio",Fe)}finally{Fe.value=void 0}}if(n._bio.traits.has(e))return;n._bio.traits.add(e),t(n,r);let i=o.prototype;for(let e in i)Object.hasOwn(i,e)&&(e in n||(n[e]=i[e].bind(n)))}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:e});function o(e){let t=n?.Parent?new a:this;r(t,e);let i=t._bio.deferred;if(i){for(let e of i)e();t._bio.deferred=void 0}return t}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._bio?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}var g=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},Ie=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`BioEncodeError`}},Le={};function _(e){return e&&Object.assign(Le,e),Le}function Re(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function ze(e,t){return typeof t==`bigint`?t.toString():t}function Be(e){return{get value(){{let t=e();return Object.defineProperty(this,"value",{value:t}),t}}}}function Ve(e){return e==null}function He(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function Ue(e,t){let n=e/t,r=Math.round(n),i=2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}var We=Symbol(`evaluating`);function v(e,t,n){let r;Object.defineProperty(e,t,{get(){if(r!==We)return r===void 0&&(r=We,r=n()),r},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function y(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function b(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function Ge(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var Ke=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function qe(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function x(e){if(qe(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return qe(n)!==!1&&Object.hasOwn(n,`isPrototypeOf`)!==!1}function Je(e){return x(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var Ye=new Set([`string`,`number`,`symbol`]);function S(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function C(e,t,n){let r=new e._bio.constr(t??e._bio.def);return(!t||n?.parent)&&(r._bio.parent=e),r}function w(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function Xe(e){return Object.keys(e).filter(t=>e[t]._bio.optin===`optional`&&e[t]._bio.optout===`optional`)}var Ze={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function Qe(e,t){let n=e._bio.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);return C(e,b(e._bio.def,{get shape(){let e={};for(let r in t){if(!Object.hasOwn(n.shape,r))throw Error(`Unrecognized key: "${r}"`);t[r]&&y(e,r,n.shape[r])}return y(this,`shape`,e),e},checks:[]}))}function $e(e,t){let n=e._bio.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);return C(e,b(e._bio.def,{get shape(){let r={...e._bio.def.shape};for(let e in t){if(!Object.hasOwn(n.shape,e))throw Error(`Unrecognized key: "${e}"`);t[e]&&delete r[e]}return y(this,`shape`,r),r},checks:[]}))}function et(e,t){if(!x(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._bio.def.checks;if(n&&n.length>0){let n=e._bio.def.shape;for(let e in t)if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return C(e,b(e._bio.def,{get shape(){let n={...e._bio.def.shape,...t};return y(this,`shape`,n),n}}))}function tt(e,t){if(!x(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return C(e,b(e._bio.def,{get shape(){let n={...e._bio.def.shape,...t};return y(this,`shape`,n),n}}))}function nt(e,t){if(!t?._bio?.def)throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(e._bio.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);return C(e,b(e._bio.def,{get shape(){let n={...e._bio.def.shape,...t._bio.def.shape};return y(this,`shape`,n),n},get catchall(){return t._bio.def.catchall},checks:t._bio.def.checks??[]}))}function rt(e,t,n){let r=t._bio.def.checks;if(r&&r.length>0)throw Error(`.partial() cannot be used on object schemas containing refinements`);return C(t,b(t._bio.def,{get shape(){let r=t._bio.def.shape,i={...r};if(n)for(let t in n){if(!Object.hasOwn(r,t))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t])}else for(let t in r)i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t];return y(this,`shape`,i),i},checks:[]}))}function it(e,t,n){return C(t,b(t._bio.def,{get shape(){let r=t._bio.def.shape,i={...r};if(n)for(let t in n){if(!Object.hasOwn(i,t))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=new e({type:`nonoptional`,innerType:r[t]}))}else for(let t in r)i[t]=new e({type:`nonoptional`,innerType:r[t]});return y(this,`shape`,i),i}}))}function T(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function at(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function ot(e,t){return t.map(t=>(t.path??=[],t.path.unshift(e),t))}function st(e){return typeof e==`string`?e:e?.message}function E(e,t,n){let r=e.message?e.message:st(e.inst?._bio.def?.error?.(e))??st(t?.error?.(e))??st(n.customError?.(e))??e.code,{inst:i,continue:a,input:o,...s}=e;return s.path??=[],s.message=r,t?.reportInput&&(s.input=o),s}function ct(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function D(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}function lt(e,t){let n=Object.getPrototypeOf(e);return t in n?void 0:n}function ut(e,t,n){Object.defineProperty(e,t,{configurable:!0,get(){let e=n(this);return Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:!0,value:e}),e},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:!0,value:e})}})}function dt(e,t,n){let r=lt(e,t);if(!r)return;let i=n();for(let e in i){let t=i[e];ut(r,e,e=>t.bind(e))}}function ft(e,t,n){let r=lt(e,t);if(!r)return;let i=n();for(let e in i)ut(r,e,i[e])}function pt(){let e=this._bio;return e.message??=JSON.stringify(e.def,ze,2),e.message}function mt(e){this._bio.message=e}var ht={get:pt,set:mt,enumerable:!0,configurable:!0},gt={value:void 0,enumerable:!1},_t={value:void 0,enumerable:!1},vt=new WeakSet([Object.prototype,Error.prototype]),yt=(e,t)=>{e.name=`$BioError`,gt.value=e._bio,Object.defineProperty(e,"_bio",gt),_t.value=t,Object.defineProperty(e,"issues",_t),gt.value=void 0,_t.value=void 0,Object.defineProperty(e,"message",ht);let n=Object.getPrototypeOf(e);vt.has(n)||(vt.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){let e=()=>this.message;return Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0})}}))},bt=h(`$BioError`,yt);h(`$BioError`,yt,{Parent:Error});function xt(e,t,n){return Object.hasOwn(e,t)||(t===`__proto__`?Object.defineProperty(e,t,{value:n(),writable:!0,enumerable:!0,configurable:!0}):e[t]=n()),e[t]}function St(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?xt(n,i.path[0],()=>[]).push(t(i)):r.push(t(i));return{formErrors:r,fieldErrors:n}}function Ct(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i],o=i===e.length-1;if(n===`_errors`){o&&r._errors.push(t(a)),i++;continue}Object.hasOwn(r,n)||Object.defineProperty(r,n,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});let s=r[n];o&&s._errors.push(t(a)),r=s,i++}}}};return r(e),n}var wt=e=>(t,n,r,i)=>{let a=r?{...r,async:!1}:{async:!1},o=t._bio.run({value:n,issues:[]},a);if(o instanceof Promise)throw new g;if(o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>E(e,a,_())));throw Ke(t,i?.callee),t}return o.value},Tt=e=>async(t,n,r,i)=>{let a=r?{...r,async:!0}:{async:!0},o=t._bio.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>E(e,a,_())));throw Ke(t,i?.callee),t}return o.value},Et=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._bio.run({value:n,issues:[]},i);if(a instanceof Promise)throw new g;return a.issues.length?{success:!1,error:new(e??bt)(a.issues.map(e=>E(e,i,_())))}:{success:!0,data:a.value}},Dt=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._bio.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>E(e,i,_())))}:{success:!0,data:a.value}},Ot=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return wt(e)(t,n,i)},kt=e=>(t,n,r)=>wt(e)(t,n,r),At=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Tt(e)(t,n,i)},jt=e=>async(t,n,r)=>Tt(e)(t,n,r),Mt=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Et(e)(t,n,i)},Nt=e=>(t,n,r)=>Et(e)(t,n,r),Pt=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Dt(e)(t,n,i)},Ft=e=>async(t,n,r)=>Dt(e)(t,n,r),It=/^[cC][0-9a-z]{6,}$/,Lt=/^[0-9a-z]+$/,Rt=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,zt=/^[0-9a-vA-V]{20}$/,Bt=/^[A-Za-z0-9]{27}$/,Vt=/^[a-zA-Z0-9_-]{21}$/,Ht=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Ut=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Wt=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Gt=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/,Kt=`^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;function qt(){return new RegExp(Kt,`u`)}var Jt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Yt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Xt=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Zt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Qt=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,$t=/^[A-Za-z0-9_-]*$/,en=/^https?$/,tn=/^\+[1-9]\d{6,14}$/,nn=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;function rn(e){return RegExp(`^${e}$`)}var an=rn(nn);function on(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function sn(e){return RegExp(`^${on(e)}$`)}function cn(e){let t=on({precision:e.precision}),n=[`Z`];e.local&&n.push(``),e.offset&&n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let r=`${t}(?:${n.join(`|`)})`;return RegExp(`^${nn}T(?:${r})$`)}var ln=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??``}}`:`[\\s\\S]*`;return RegExp(`^${t}$`)},un=/^-?\d+$/,dn=/^-?\d+(?:\.\d+)?$/,fn=/^[^A-Z]*$/,pn=/^[^a-z]*$/,O=h(`$BioCheck`,(e,t)=>{e._bio??={},e._bio.def=t,e._bio.onattach??=[]}),k={number:`number`,bigint:`bigint`,object:`date`},mn=h(`$BioCheckLessThan`,(e,t)=>{O.init(e,t);let n=k[typeof t.value];e._bio.onattach.push(e=>{let n=e._bio.bag,r=(t.inclusive?n.maximum:n.exclusiveMaximum)??1/0;t.value<r&&(t.inclusive?n.maximum=t.value:n.exclusiveMaximum=t.value)}),e._bio.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:k[typeof r.value]??n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),hn=h(`$BioCheckGreaterThan`,(e,t)=>{O.init(e,t);let n=k[typeof t.value];e._bio.onattach.push(e=>{let n=e._bio.bag,r=(t.inclusive?n.minimum:n.exclusiveMinimum)??-1/0;t.value>r&&(t.inclusive?n.minimum=t.value:n.exclusiveMinimum=t.value)}),e._bio.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:k[typeof r.value]??n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),gn=h(`$BioCheckMultipleOf`,(e,t)=>{O.init(e,t),e._bio.onattach.push(e=>{e._bio.bag.multipleOf??=t.value}),e._bio.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?n.value%t.value===BigInt(0):Ue(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),_n=h(`$BioCheckNumberFormat`,(e,t)=>{O.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=Ze[t.format];e._bio.onattach.push(e=>{let r=e._bio.bag;r.format=t.format,r.minimum=i,r.maximum=a,n&&(r.pattern=un)}),e._bio.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),vn=h(`$BioCheckMaxLength`,(e,t)=>{O.init(e,t),e._bio.def.when??=e=>{let t=e.value;return!Ve(t)&&t.length!==void 0},e._bio.onattach.push(e=>{let n=e._bio.bag.maximum??1/0;t.maximum<n&&(e._bio.bag.maximum=t.maximum)}),e._bio.check=n=>{let r=n.value;if(r.length<=t.maximum)return;let i=ct(r);n.issues.push({origin:i,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),yn=h(`$BioCheckMinLength`,(e,t)=>{O.init(e,t),e._bio.def.when??=e=>{let t=e.value;return!Ve(t)&&t.length!==void 0},e._bio.onattach.push(e=>{let n=e._bio.bag.minimum??-1/0;t.minimum>n&&(e._bio.bag.minimum=t.minimum)}),e._bio.check=n=>{let r=n.value;if(r.length>=t.minimum)return;let i=ct(r);n.issues.push({origin:i,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),bn=h(`$BioCheckLengthEquals`,(e,t)=>{O.init(e,t),e._bio.def.when??=e=>{let t=e.value;return!Ve(t)&&t.length!==void 0},e._bio.onattach.push(e=>{let n=e._bio.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._bio.check=n=>{let r=n.value,i=r.length;if(i===t.length)return;let a=ct(r),o=i>t.length;n.issues.push({origin:a,...o?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),A=h(`$BioCheckStringFormat`,(e,t)=>{O.init(e,t),e._bio.onattach.push(e=>{let n=e._bio.bag;n.format=t.format,t.pattern&&(n.patterns??=new Set,n.patterns.add(t.pattern))}),t.pattern?e._bio.check??=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}:e._bio.check??=()=>{}}),xn=h(`$BioCheckRegex`,(e,t)=>{A.init(e,t),e._bio.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Sn=h(`$BioCheckLowerCase`,(e,t)=>{t.pattern??=fn,A.init(e,t)}),Cn=h(`$BioCheckUpperCase`,(e,t)=>{t.pattern??=pn,A.init(e,t)}),wn=h(`$BioCheckIncludes`,(e,t)=>{O.init(e,t);let n=S(t.includes),r=new RegExp(typeof t.position==`number`?`^.{${t.position}}${n}`:n);t.pattern=r,e._bio.onattach.push(e=>{let t=e._bio.bag;t.patterns??=new Set,t.patterns.add(r)}),e._bio.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),Tn=h(`$BioCheckStartsWith`,(e,t)=>{O.init(e,t);let n=RegExp(`^${S(t.prefix)}.*`);t.pattern??=n,e._bio.onattach.push(e=>{let t=e._bio.bag;t.patterns??=new Set,t.patterns.add(n)}),e._bio.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),En=h(`$BioCheckEndsWith`,(e,t)=>{O.init(e,t);let n=RegExp(`.*${S(t.suffix)}$`);t.pattern??=n,e._bio.onattach.push(e=>{let t=e._bio.bag;t.patterns??=new Set,t.patterns.add(n)}),e._bio.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),Dn=h(`$BioCheckOverwrite`,(e,t)=>{O.init(e,t),e._bio.check=e=>{e.value=t.tx(e.value)}}),j=h(`$BioType`,(e,t)=>{e??={},e._bio.def=t,e._bio.bag=e._bio.bag||{};let n=e._bio.def.checks,r=e._bio.traits.has(`$BioCheck`)?[e,...n??[]]:n?.length?[...n]:[];for(let t of r)for(let n of t._bio.onattach)n(e);if(r.length===0)e._bio.deferred??=[],e._bio.deferred?.push(()=>{e._bio.run=e._bio.parse});else{let t=(e,t,n)=>{let r=T(e),i;for(let a of t){if(a._bio.def.when){if(at(e)||!a._bio.def.when(e))continue}else if(r)continue;let t=e.issues.length,o=a._bio.check(e);if(o instanceof Promise&&n?.async===!1)throw new g;if(i||o instanceof Promise)i=(i??Promise.resolve()).then(async()=>{await o,e.issues.length!==t&&(r||=T(e,t))});else{if(e.issues.length===t)continue;r||=T(e,t)}}return i?i.then(()=>e):e},n=(n,i,a)=>{if(T(n))return n.aborted=!0,n;let o=t(i,r,a);if(o instanceof Promise){if(a.async===!1)throw new g;return o.then(t=>e._bio.parse(t,a))}return e._bio.parse(o,a)};e._bio.run=(i,a)=>{if(a.skipChecks)return e._bio.parse(i,a);if(a.direction===`backward`){let t=e._bio.parse({value:i.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,i,a)):n(t,i,a)}let o=e._bio.parse(i,a);if(o instanceof Promise){if(a.async===!1)throw new g;return o.then(e=>t(e,r,a))}return t(o,r,a)}}}),On=h(`$BioString`,(e,t)=>{j.init(e,t),e._bio.pattern=[...e?._bio.bag?.patterns??[]].pop()??ln(e._bio.bag),e._bio.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),M=h(`$BioStringFormat`,(e,t)=>{A.init(e,t),On.init(e,t)}),kn=h(`$BioGUID`,(e,t)=>{t.pattern??=Ut,M.init(e,t)}),An=h(`$BioUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Wt(e)}else t.pattern??=Wt();M.init(e,t)}),jn=h(`$BioEmail`,(e,t)=>{t.pattern??=Gt,M.init(e,t)}),Mn=h(`$BioURL`,(e,t)=>{M.init(e,t),e._bio.check=n=>{try{let r=n.value.trim();if(!t.normalize&&t.protocol?.source===en.source&&!/^https?:\/\//i.test(r)){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}let i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(`:`)?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),n.value=t.normalize?i.href:r;return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),Nn=h(`$BioEmoji`,(e,t)=>{t.pattern??=qt(),M.init(e,t)}),Pn=h(`$BioNanoID`,(e,t)=>{t.pattern??=Vt,M.init(e,t)}),Fn=h(`$BioCUID`,(e,t)=>{t.pattern??=It,M.init(e,t)}),In=h(`$BioCUID2`,(e,t)=>{t.pattern??=Lt,M.init(e,t)}),Ln=h(`$BioULID`,(e,t)=>{t.pattern??=Rt,M.init(e,t)}),Rn=h(`$BioXID`,(e,t)=>{t.pattern??=zt,M.init(e,t)}),zn=h(`$BioKSUID`,(e,t)=>{t.pattern??=Bt,M.init(e,t)}),Bn=h(`$BioISODateTime`,(e,t)=>{t.pattern??=cn(t),M.init(e,t)}),Vn=h(`$BioISODate`,(e,t)=>{t.pattern??=an,M.init(e,t)}),Hn=h(`$BioISOTime`,(e,t)=>{t.pattern??=sn(t),M.init(e,t)}),Un=h(`$BioISODuration`,(e,t)=>{t.pattern??=Ht,M.init(e,t)}),Wn=h(`$BioIPv4`,(e,t)=>{t.pattern??=Jt,M.init(e,t),e._bio.bag.format=`ipv4`}),Gn=h(`$BioIPv6`,(e,t)=>{t.pattern??=Yt,M.init(e,t),e._bio.bag.format=`ipv6`,e._bio.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}}),Kn=h(`$BioCIDRv4`,(e,t)=>{t.pattern??=Xt,M.init(e,t)}),qn=h(`$BioCIDRv6`,(e,t)=>{t.pattern??=Zt,M.init(e,t),e._bio.check=n=>{let r=n.value.split(`/`);try{if(r.length!==2)throw Error();let[e,t]=r;if(!t)throw Error();let n=Number(t);if(`${n}`!==t||n<0||n>128)throw Error();new URL(`http://[${e}]`)}catch{n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}}});function Jn(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var Yn=h(`$BioBase64`,(e,t)=>{t.pattern??=Qt,M.init(e,t),e._bio.bag.contentEncoding=`base64`,e._bio.check=n=>{Jn(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}});function Xn(e){if(!$t.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return Jn(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var Zn=h(`$BioBase64URL`,(e,t)=>{t.pattern??=$t,M.init(e,t),e._bio.bag.contentEncoding=`base64url`,e._bio.check=n=>{Xn(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),Qn=h(`$BioE164`,(e,t)=>{t.pattern??=tn,M.init(e,t)});function $n(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var er=h(`$BioJWT`,(e,t)=>{M.init(e,t),e._bio.check=n=>{$n(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),tr=h(`$BioNumber`,(e,t)=>{j.init(e,t),e._bio.pattern=e._bio.bag.pattern??dn,e._bio.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:String(i):void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),nr=h(`$BioNumberFormat`,(e,t)=>{_n.init(e,t),tr.init(e,t)}),rr=h(`$BioUnknown`,(e,t)=>{j.init(e,t),e._bio.parse=e=>e}),ir=h(`$BioNever`,(e,t)=>{j.init(e,t),e._bio.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function ar(e,t,n){e.issues.length&&t.issues.push(...ot(n,e.issues)),t.value[n]=e.value}var or=h(`$BioArray`,(e,t)=>{j.init(e,t),e._bio.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({expected:`array`,code:`invalid_type`,input:i,inst:e}),n;n.value=Array(i.length);let a=[];for(let e=0;e<i.length;e++){let o=i[e],s=t.element._bio.run({value:o,issues:[]},r);s instanceof Promise?a.push(s.then(t=>ar(t,n,e))):ar(s,n,e)}return a.length?Promise.all(a).then(()=>n):n}});function N(e,t,n,r,i,a){let o=n in r;if(e.issues.length){if(i&&a&&!o)return;t.issues.push(...ot(n,e.issues))}if(!o&&!i){e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]});return}e.value===void 0?o&&(t.value[n]=void 0):t.value[n]=e.value}function sr(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._bio?.traits?.has(`$BioType`))throw Error(`Invalid element at key "${n}": expected a Bio schema`);let n=Xe(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(n)}}function cr(e,t,n,r,i,a){let o=[],s=i.keySet,c=i.catchall._bio,ee=c.def.type,te=c.optin===`optional`,l=c.optout===`optional`;for(let i in t){if(s.has(i))continue;if(i===`__proto__`){ee===`never`&&o.push(i);continue}if(ee===`never`){o.push(i);continue}let a=c.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>N(e,n,i,t,te,l))):N(a,n,i,t,te,l)}return o.length&&n.issues.push({code:`unrecognized_keys`,keys:o,input:t,inst:a,continue:!0}),e.length?Promise.all(e).then(()=>n):n}var lr=h(`$BioObject`,(e,t)=>{if(j.init(e,t),!Object.getOwnPropertyDescriptor(t,`shape`)?.get){let e=t.shape;Object.defineProperty(t,"shape",{get:()=>{let n={...e};return Object.defineProperty(t,"shape",{value:n}),n}})}let n=Be(()=>sr(t));v(e._bio,`propValues`,()=>{let e=t.shape,n={};for(let t in e){let r=e[t]._bio;if(r.values){Object.hasOwn(n,t)||y(n,t,new Set);for(let e of r.values)n[t].add(e)}}return n});let r=qe,i=t.catchall,a;e._bio.parse=(t,o)=>{a??=n.value;let s=t.value;if(!r(s))return t.issues.push({expected:`object`,code:`invalid_type`,input:s,inst:e}),t;t.value={};let c=[],ee=a.shape;for(let e of a.keys){if(e===`__proto__`)continue;let n=ee[e],r=n._bio.optin===`optional`,i=n._bio.optout===`optional`,a=n._bio.run({value:s[e],issues:[]},o);a instanceof Promise?c.push(a.then(n=>N(n,t,e,s,r,i))):N(a,t,e,s,r,i)}return i?cr(c,s,t,o,n.value,e):c.length?Promise.all(c).then(()=>t):t}});function ur(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!T(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>E(e,r,_())))}),t)}var dr=h(`$BioUnion`,(e,t)=>{j.init(e,t),v(e._bio,`optin`,()=>t.options.some(e=>e._bio.optin===`optional`)?`optional`:void 0),v(e._bio,`optout`,()=>t.options.some(e=>e._bio.optout===`optional`)?`optional`:void 0),v(e._bio,`values`,()=>{if(t.options.every(e=>e._bio.values))return new Set(t.options.flatMap(e=>Array.from(e._bio.values)))}),v(e._bio,`pattern`,()=>{if(t.options.every(e=>e._bio.pattern)){let e=t.options.map(e=>e._bio.pattern);return RegExp(`^(${e.map(e=>He(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._bio.run:null;e._bio.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._bio.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>ur(t,r,e,i)):ur(o,r,e,i)}}),fr=h(`$BioIntersection`,(e,t)=>{j.init(e,t),e._bio.parse=(e,n)=>{let r=e.value,i=t.left._bio.run({value:r,issues:[]},n),a=t.right._bio.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>mr(e,t,n)):mr(e,i,a)}});function pr(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(x(e)&&x(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};Object.hasOwn(i,`__proto__`)&&delete i.__proto__;for(let n of r){if(n===`__proto__`)continue;let r=pr(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=pr(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function mr(e,t,n){let r=new Map,i,a=new Map,o=(e,t)=>{let n;if(e.code===`unrecognized_keys`&&!e.path?.length)i??=e,n=e.keys;else if(e.code===`invalid_key`&&e.origin===`record`&&e.path?.length===1){let t=String(e.path[0]);a.has(t)||a.set(t,e),n=[t]}else return!1;for(let e of n)r.has(e)||r.set(e,{}),r.get(e)[t]=!0;return!0};for(let n of t.issues)o(n,`l`)||e.issues.push(n);for(let t of n.issues)o(t,`r`)||e.issues.push(t);let s=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(s.length){let t=i?s.filter(e=>i.keys.includes(e)):[];t.length&&e.issues.push({...i,keys:t});for(let n of s)!t.includes(n)&&a.has(n)&&e.issues.push(a.get(n))}let c=pr(t.value,n.value);if(!c.valid){if(T(e))return e;throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return e.value=c.data,e}var hr=h(`$BioEnum`,(e,t)=>{j.init(e,t);let n=Re(t.entries),r=new Set(n);e._bio.values=r,e._bio.pattern=RegExp(`^(${n.filter(e=>Ye.has(typeof e)).map(e=>S(e.toString())).join(`|`)})$`),e._bio.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),gr=h(`$BioTransform`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,e._bio.parse=(n,r)=>{if(r.direction===`backward`)throw new Ie(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n.fallback=!0,n));if(i instanceof Promise)throw new g;return n.value=i,n.fallback=!0,n}});function _r(e,t){return t===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}var vr=h(`$BioOptional`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,e._bio.optout=`optional`,v(e._bio,`values`,()=>t.innerType._bio.values?new Set([...t.innerType._bio.values,void 0]):void 0),v(e._bio,`pattern`,()=>{let e=t.innerType._bio.pattern;return e?RegExp(`^(${He(e.source)})?$`):void 0}),e._bio.parse=(e,n)=>{if(t.innerType._bio.optin===`optional`){let r=e.value,i=t.innerType._bio.run(e,n);return i instanceof Promise?i.then(e=>_r(e,r)):_r(i,r)}return e.value===void 0?e:t.innerType._bio.run(e,n)}}),yr=h(`$BioExactOptional`,(e,t)=>{vr.init(e,t),v(e._bio,`values`,()=>t.innerType._bio.values),v(e._bio,`pattern`,()=>t.innerType._bio.pattern),e._bio.parse=(e,n)=>t.innerType._bio.run(e,n)}),br=h(`$BioNullable`,(e,t)=>{j.init(e,t),v(e._bio,`optin`,()=>t.innerType._bio.optin),v(e._bio,`optout`,()=>t.innerType._bio.optout),v(e._bio,`pattern`,()=>{let e=t.innerType._bio.pattern;return e?RegExp(`^(${He(e.source)}|null)$`):void 0}),v(e._bio,`values`,()=>t.innerType._bio.values?new Set([...t.innerType._bio.values,null]):void 0),e._bio.parse=(e,n)=>e.value===null?e:t.innerType._bio.run(e,n)}),xr=h(`$BioDefault`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,v(e._bio,`values`,()=>t.innerType._bio.values),e._bio.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._bio.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._bio.run(e,n);return r instanceof Promise?r.then(e=>Sr(e,t)):Sr(r,t)}});function Sr(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var Cr=h(`$BioPrefault`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,v(e._bio,`values`,()=>t.innerType._bio.values),e._bio.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._bio.run(e,n))}),wr=h(`$BioNonOptional`,(e,t)=>{j.init(e,t),v(e._bio,`values`,()=>{let e=t.innerType._bio.values;return e?new Set([...e].filter(e=>e!==void 0)):void 0}),e._bio.parse=(n,r)=>{let i=t.innerType._bio.run(n,r);return i instanceof Promise?i.then(t=>Tr(t,e)):Tr(i,e)}});function Tr(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}var Er=h(`$BioCatch`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,v(e._bio,`optout`,()=>t.innerType._bio.optout),v(e._bio,`values`,()=>t.innerType._bio.values),e._bio.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._bio.run(e,n);let r=t.innerType._bio.run(e,n);return r instanceof Promise?r.then(r=>(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>E(e,n,_()))},input:e.value}),e.issues=[],e.fallback=!0),e)):(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>E(e,n,_()))},input:e.value}),e.issues=[],e.fallback=!0),e)}}),Dr=h(`$BioPipe`,(e,t)=>{j.init(e,t),v(e._bio,`values`,()=>t.in._bio.values),v(e._bio,`optin`,()=>t.in._bio.optin),v(e._bio,`optout`,()=>t.out._bio.optout),v(e._bio,`propValues`,()=>t.in._bio.propValues),e._bio.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._bio.run(e,n);return r instanceof Promise?r.then(e=>P(e,t.in,n)):P(r,t.in,n)}let r=t.in._bio.run(e,n);return r instanceof Promise?r.then(e=>P(e,t.out,n)):P(r,t.out,n)}});function P(e,t,n){return e.issues.some(e=>e.code!==`unrecognized_keys`)?(e.aborted=!0,e):t._bio.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}var Or=h(`$BioReadonly`,(e,t)=>{j.init(e,t),v(e._bio,`propValues`,()=>t.innerType._bio.propValues),v(e._bio,`values`,()=>t.innerType._bio.values),v(e._bio,`optin`,()=>t.innerType?._bio?.optin),v(e._bio,`optout`,()=>t.innerType?._bio?.optout),e._bio.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._bio.run(e,n);let r=t.innerType._bio.run(e,n);return r instanceof Promise?r.then(kr):kr(r)}});function kr(e){return e.value=Object.freeze(e.value),e}var Ar=h(`$BioCustom`,(e,t)=>{O.init(e,t),j.init(e,t),e._bio.parse=(e,t)=>e,e._bio.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>jr(t,n,r,e));jr(i,n,r,e)}});function jr(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._bio.def.path??[]],continue:!r._bio.def.abort};r._bio.def.params&&(e.params=r._bio.def.params),t.issues.push(D(e))}}var Mr=class{constructor(){u(this,`_meta`,void 0),u(this,`_schema`,void 0),u(this,`_map`,new WeakMap),u(this,`_idmap`,new Map)}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._bio.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function Nr(){return new Mr}var F=Nr();function Pr(e,t){return new e({type:`string`,...w(t)})}function Fr(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...w(t)})}function Ir(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...w(t)})}function Lr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...w(t)})}function Rr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...w(t)})}function zr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...w(t)})}function Br(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...w(t)})}function Vr(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...w(t)})}function Hr(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...w(t)})}function Ur(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...w(t)})}function Wr(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...w(t)})}function Gr(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...w(t)})}function Kr(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...w(t)})}function qr(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...w(t)})}function Jr(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...w(t)})}function Yr(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...w(t)})}function Xr(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...w(t)})}function Zr(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...w(t)})}function Qr(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...w(t)})}function $r(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...w(t)})}function ei(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...w(t)})}function ti(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...w(t)})}function ni(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...w(t)})}function ri(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...w(t)})}function ii(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...w(t)})}function ai(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...w(t)})}function oi(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...w(t)})}function si(e,t){return new e({type:`number`,checks:[],...w(t)})}function ci(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...w(t)})}function li(e){return new e({type:`unknown`})}function ui(e,t){return new e({type:`never`,...w(t)})}function di(e,t){return new mn({check:`less_than`,...w(t),value:e,inclusive:!1})}function fi(e,t){return new mn({check:`less_than`,...w(t),value:e,inclusive:!0})}function pi(e,t){return new hn({check:`greater_than`,...w(t),value:e,inclusive:!1})}function mi(e,t){return new hn({check:`greater_than`,...w(t),value:e,inclusive:!0})}function hi(e,t){return new gn({check:`multiple_of`,...w(t),value:e})}function gi(e,t){return new vn({check:`max_length`,...w(t),maximum:e})}function _i(e,t){return new yn({check:`min_length`,...w(t),minimum:e})}function vi(e,t){return new bn({check:`length_equals`,...w(t),length:e})}function yi(e,t){return new xn({check:`string_format`,format:`regex`,...w(t),pattern:e})}function bi(e){return new Sn({check:`string_format`,format:`lowercase`,...w(e)})}function xi(e){return new Cn({check:`string_format`,format:`uppercase`,...w(e)})}function Si(e,t){return new wn({check:`string_format`,format:`includes`,...w(t),includes:e})}function Ci(e,t){return new Tn({check:`string_format`,format:`starts_with`,...w(t),prefix:e})}function wi(e,t){return new En({check:`string_format`,format:`ends_with`,...w(t),suffix:e})}function I(e){return new Dn({check:`overwrite`,tx:e})}function Ti(e){return I(t=>t.normalize(e))}function Ei(){return I(e=>e.trim())}function Di(){return I(e=>e.toLowerCase())}function Oi(){return I(e=>e.toUpperCase())}function ki(){return I(e=>Ge(e))}function Ai(e,t,n){return new e({type:`array`,element:t,...w(n)})}function ji(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...w(n)})}function Mi(e,t){let n=Ni(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(D(e,t.value,n._bio.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,r.input??=t.value,r.inst??=n,r.continue??=!n._bio.def.abort,t.issues.push(D(r))}},e(t.value,t)),t);return n}function Ni(e,t){let n=new O({check:`custom`,...w(t)});return n._bio.check=e,n}var Pi=new WeakSet([Object.prototype,Error.prototype]);function L(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get(){let e=n(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0})}})}var R=h(`BioError`,(e,t)=>{bt.init(e,t),e.name=`BioError`;let n=Object.getPrototypeOf(e);Pi.has(n)||(Pi.add(n),L(n,`format`,e=>t=>Ct(e,t)),L(n,`flatten`,e=>t=>St(e,t)),L(n,`addIssue`,e=>t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,ze,2)}),L(n,`addIssues`,e=>t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,ze,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},{Parent:Error}),Fi=wt(R),Ii=Tt(R),Li=Et(R),Ri=Dt(R),zi=Ot(R),Bi=kt(R),Vi=At(R),Hi=jt(R),Ui=Mt(R),Wi=Nt(R),Gi=Pt(R),Ki=Ft(R),z=dt,qi=ft,B=h(`BioType`,(e,t)=>{j.init(e,t),e.def=t,e.type=t.type,z(e,`check`,Ji),qi(e,`parse`,Yi);let n=Object.getPrototypeOf(e);return`description`in n||(Object.defineProperty(n,"description",{configurable:!0,get(){return F.get(this)?.description}}),Object.defineProperty(n,"_def",{configurable:!0,get(){return this._bio.def}})),e});function Ji(){return{check(...e){let t=this.def;return this.clone(b(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_bio:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return C(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(uo(e,t))},superRefine(e,t){return this.check(fo(e,t))},overwrite(e){return this.check(I(e))},optional(){return Ka(this)},exactOptional(){return Ja(this)},nullable(){return Xa(this)},nullish(){return Ka(Xa(this))},nonoptional(e){return no(this,e)},array(){return Na(this)},or(e){return Ra([this,e])},and(e){return Ba(this,e)},transform(e){return oo(this,Wa(e))},default(e){return Qa(this,e)},prefault(e){return eo(this,e)},catch(e){return io(this,e)},pipe(e){return oo(this,e)},readonly(){return co(this)},describe(e){let t=this.clone();return F.add(t,{description:e}),t},meta(...e){if(e.length===0)return F.get(this);let t=this.clone();return F.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e){return e(this)}}}function Yi(){return{parse:e=>{let t=(n,r)=>Fi(e,n,r,{callee:t});return t},parseAsync:e=>{let t=async(n,r)=>Ii(e,n,r,{callee:t});return t},safeParse:e=>(t,n)=>Li(e,t,n),safeParseAsync:e=>async(t,n)=>Ri(e,t,n),spa:e=>e.safeParseAsync,encode:e=>(t,n)=>zi(e,t,n),decode:e=>(t,n)=>Bi(e,t,n),encodeAsync:e=>async(t,n)=>Vi(e,t,n),decodeAsync:e=>async(t,n)=>Hi(e,t,n),safeEncode:e=>(t,n)=>Ui(e,t,n),safeDecode:e=>(t,n)=>Wi(e,t,n),safeEncodeAsync:e=>async(t,n)=>Gi(e,t,n),safeDecodeAsync:e=>async(t,n)=>Ki(e,t,n)}}var Xi=h(`_BioString`,(e,t)=>{On.init(e,t),B.init(e,t);let n=e._bio.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,z(e,`regex`,Zi)});function Zi(){return{regex(...e){return this.check(yi(...e))},includes(...e){return this.check(Si(...e))},startsWith(...e){return this.check(Ci(...e))},endsWith(...e){return this.check(wi(...e))},min(...e){return this.check(_i(...e))},max(...e){return this.check(gi(...e))},length(...e){return this.check(vi(...e))},nonempty(...e){return this.check(_i(1,...e))},lowercase(e){return this.check(bi(e))},uppercase(e){return this.check(xi(e))},trim(){return this.check(Ei())},normalize(...e){return this.check(Ti(...e))},toLowerCase(){return this.check(Di())},toUpperCase(){return this.check(Oi())},slugify(){return this.check(ki())}}}var Qi=h(`BioString`,(e,t)=>{On.init(e,t),Xi.init(e,t),z(e,`email`,$i)});function $i(){return{email(e){return this.check(Fr(ia,e))},url(e){return this.check(Vr(oa,e))},jwt(e){return this.check(ni(xa,e))},emoji(e){return this.check(Hr(sa,e))},guid(e){return this.check(Ir(aa,e))},uuid(e){return this.check(Lr(U,e))},uuidv4(e){return this.check(Rr(U,e))},uuidv6(e){return this.check(zr(U,e))},uuidv7(e){return this.check(Br(U,e))},nanoid(e){return this.check(Ur(ca,e))},cuid(e){return this.check(Wr(la,e))},cuid2(e){return this.check(Gr(ua,e))},ulid(e){return this.check(Kr(da,e))},base64(e){return this.check($r(va,e))},base64url(e){return this.check(ei(ya,e))},xid(e){return this.check(qr(fa,e))},ksuid(e){return this.check(Jr(pa,e))},ipv4(e){return this.check(Yr(ma,e))},ipv6(e){return this.check(Xr(ha,e))},cidrv4(e){return this.check(Zr(ga,e))},cidrv6(e){return this.check(Qr(_a,e))},e164(e){return this.check(ti(ba,e))},datetime(e){return this.check(ri(ea,e))},date(e){return this.check(ii(ta,e))},time(e){return this.check(ai(na,e))},duration(e){return this.check(oi(ra,e))}}}function V(e){return Pr(Qi,e)}var H=h(`BioStringFormat`,(e,t)=>{M.init(e,t),Xi.init(e,t)}),ea=h(`BioISODateTime`,(e,t)=>{Bn.init(e,t),H.init(e,t)}),ta=h(`BioISODate`,(e,t)=>{Vn.init(e,t),H.init(e,t)}),na=h(`BioISOTime`,(e,t)=>{Hn.init(e,t),H.init(e,t)}),ra=h(`BioISODuration`,(e,t)=>{Un.init(e,t),H.init(e,t)}),ia=h(`BioEmail`,(e,t)=>{jn.init(e,t),H.init(e,t)}),aa=h(`BioGUID`,(e,t)=>{kn.init(e,t),H.init(e,t)}),U=h(`BioUUID`,(e,t)=>{An.init(e,t),H.init(e,t)}),oa=h(`BioURL`,(e,t)=>{Mn.init(e,t),H.init(e,t)}),sa=h(`BioEmoji`,(e,t)=>{Nn.init(e,t),H.init(e,t)}),ca=h(`BioNanoID`,(e,t)=>{Pn.init(e,t),H.init(e,t)}),la=h(`BioCUID`,(e,t)=>{Fn.init(e,t),H.init(e,t)}),ua=h(`BioCUID2`,(e,t)=>{In.init(e,t),H.init(e,t)}),da=h(`BioULID`,(e,t)=>{Ln.init(e,t),H.init(e,t)}),fa=h(`BioXID`,(e,t)=>{Rn.init(e,t),H.init(e,t)}),pa=h(`BioKSUID`,(e,t)=>{zn.init(e,t),H.init(e,t)}),ma=h(`BioIPv4`,(e,t)=>{Wn.init(e,t),H.init(e,t)}),ha=h(`BioIPv6`,(e,t)=>{Gn.init(e,t),H.init(e,t)}),ga=h(`BioCIDRv4`,(e,t)=>{Kn.init(e,t),H.init(e,t)}),_a=h(`BioCIDRv6`,(e,t)=>{qn.init(e,t),H.init(e,t)}),va=h(`BioBase64`,(e,t)=>{Yn.init(e,t),H.init(e,t)}),ya=h(`BioBase64URL`,(e,t)=>{Zn.init(e,t),H.init(e,t)}),ba=h(`BioE164`,(e,t)=>{Qn.init(e,t),H.init(e,t)}),xa=h(`BioJWT`,(e,t)=>{er.init(e,t),H.init(e,t)}),Sa=h(`BioNumber`,(e,t)=>{tr.init(e,t),B.init(e,t),z(e,`gt`,Ca);let n=e._bio.bag;e.minValue=Math.max(n.minimum??-1/0,n.exclusiveMinimum??-1/0)??null,e.maxValue=Math.min(n.maximum??1/0,n.exclusiveMaximum??1/0)??null,e.isInt=(n.format??``).includes(`int`)||Number.isSafeInteger(n.multipleOf??.5),e.isFinite=!0,e.format=n.format??null});function Ca(){return{gt(e,t){return this.check(pi(e,t))},gte(e,t){return this.check(mi(e,t))},min(e,t){return this.check(mi(e,t))},lt(e,t){return this.check(di(e,t))},lte(e,t){return this.check(fi(e,t))},max(e,t){return this.check(fi(e,t))},int(e){return this.check(Ea(e))},safe(e){return this.check(Ea(e))},positive(e){return this.check(pi(0,e))},nonnegative(e){return this.check(mi(0,e))},negative(e){return this.check(di(0,e))},nonpositive(e){return this.check(fi(0,e))},multipleOf(e,t){return this.check(hi(e,t))},step(e,t){return this.check(hi(e,t))},finite(){return this}}}function wa(e){return si(Sa,e)}var Ta=h(`BioNumberFormat`,(e,t)=>{nr.init(e,t),Sa.init(e,t)});function Ea(e){return ci(Ta,e)}var Da=h(`BioUnknown`,(e,t)=>{rr.init(e,t),B.init(e,t)});function Oa(){return li(Da)}var ka=h(`BioNever`,(e,t)=>{ir.init(e,t),B.init(e,t)});function Aa(e){return ui(ka,e)}var ja=h(`BioArray`,(e,t)=>{or.init(e,t),B.init(e,t),e.element=t.element,z(e,`min`,Ma)});function Ma(){return{min(e,t){return this.check(_i(e,t))},nonempty(e){return this.check(_i(1,e))},max(e,t){return this.check(gi(e,t))},length(e,t){return this.check(vi(e,t))},unwrap(){return this.element}}}function Na(e,t){return Ai(ja,e,t)}var Pa=h(`BioObject`,(e,t)=>{lr.init(e,t),B.init(e,t),v(e,`shape`,()=>t.shape),z(e,`keyof`,Fa)});function Fa(){return{keyof(){return Ha(Object.keys(this._bio.def.shape))},catchall(e){return this.clone({...this._bio.def,catchall:e})},passthrough(){return this.clone({...this._bio.def,catchall:Oa()})},loose(){return this.clone({...this._bio.def,catchall:Oa()})},strict(){return this.clone({...this._bio.def,catchall:Aa()})},strip(){return this.clone({...this._bio.def,catchall:void 0})},extend(e){return et(this,e)},safeExtend(e){return tt(this,e)},merge(e){return nt(this,e)},pick(e){return Qe(this,e)},omit(e){return $e(this,e)},partial(...e){return rt(Ga,this,e[0])},required(...e){return it(to,this,e[0])}}}function Ia(e,t){return new Pa({type:`object`,shape:e??{},...w(t)})}var La=h(`BioUnion`,(e,t)=>{dr.init(e,t),B.init(e,t),e.options=t.options});function Ra(e,t){return new La({type:`union`,options:e,...w(t)})}var za=h(`BioIntersection`,(e,t)=>{fr.init(e,t),B.init(e,t)});function Ba(e,t){return new za({type:`intersection`,left:e,right:t})}var Va=h(`BioEnum`,(e,t)=>{hr.init(e,t),B.init(e,t),e.enum=t.entries,e.options=Object.values(t.entries);let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new Va({...t,checks:[],...w(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new Va({...t,checks:[],...w(r),entries:i})}});function Ha(e,t){return new Va({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...w(t)})}var Ua=h(`BioTransform`,(e,t)=>{gr.init(e,t),B.init(e,t),e._bio.parse=(n,r)=>{if(r.direction===`backward`)throw new Ie(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(D(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,t.input??=n.value,t.inst??=e,n.issues.push(D(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n.fallback=!0,n)):(n.value=i,n.fallback=!0,n)}});function Wa(e){return new Ua({type:`transform`,transform:e})}var Ga=h(`BioOptional`,(e,t)=>{vr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Ka(e){return new Ga({type:`optional`,innerType:e})}var qa=h(`BioExactOptional`,(e,t)=>{yr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Ja(e){return new qa({type:`optional`,innerType:e})}var Ya=h(`BioNullable`,(e,t)=>{br.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Xa(e){return new Ya({type:`nullable`,innerType:e})}var Za=h(`BioDefault`,(e,t)=>{xr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType,e.removeDefault=e.unwrap});function Qa(e,t){return new Za({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():Je(t)}})}var $a=h(`BioPrefault`,(e,t)=>{Cr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function eo(e,t){return new $a({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():Je(t)}})}var to=h(`BioNonOptional`,(e,t)=>{wr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function no(e,t){return new to({type:`nonoptional`,innerType:e,...w(t)})}var ro=h(`BioCatch`,(e,t)=>{Er.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType,e.removeCatch=e.unwrap});function io(e,t){return new ro({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:()=>t})}var ao=h(`BioPipe`,(e,t)=>{Dr.init(e,t),B.init(e,t),e.in=t.in,e.out=t.out});function oo(e,t){return new ao({type:`pipe`,in:e,out:t})}var so=h(`BioReadonly`,(e,t)=>{Or.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function co(e){return new so({type:`readonly`,innerType:e})}var lo=h(`BioCustom`,(e,t)=>{Ar.init(e,t),B.init(e,t)});function uo(e,t={}){return ji(lo,e,t)}function fo(e,t){return Mi(e,t)}function po(e){return ii(ta,e)}function W(e,t){return V().refine(t=>t.trim()===``||e(t),{error:t})}var mo=wa().int().min(0).max(1),ho=Ia({id:wa().int(),nome:V(),telefone:W(f,`telefone_duvidoso`),email:W(Oe,`email_duvidoso`),link:V(),comentario:V(),nome_secretario:V(),telefone_secretario:W(f,`telefone_duvidoso`),tipo_sanguineo:V(),doador_orgaos:mo,alergias:V(),medicamentos_em_uso:V(),observacoes_medicas:V(),gravida:mo,gravidez_meses:V(),data_prevista_parto:W(e=>po().safeParse(e.trim()).success,`data_duvidosa`),recusa_transfusao:mo,fracoes_aceitas:V(),contato_emergencia:V(),contato_emergencia_telefone:W(f,`telefone_duvidoso`),nome_colih:V(),telefone_colih:W(f,`telefone_duvidoso`),cartao_sus_numero:V(),cpf_titular:W(ue,`cpf_duvidoso`),upa_referencia:V(),dpa_assinado_em:W(e=>po().safeParse(e.trim()).success,`data_duvidosa`),congregacao:V(),grupo:V()}),go=[`telefone`,`email`,`telefone_secretario`,`data_prevista_parto`,`dpa_assinado_em`,`contato_emergencia_telefone`,`telefone_colih`,`cpf_titular`];function _o(e,t){let n=t.trim();if(n===``)return;let r=ho.shape[e].safeParse(n);return r.success?void 0:r.error.issues[0]?.message}var vo=1e3,G={...ge},K=``,yo,bo=new ce(`perfil`,async()=>{De(),G=await be()});function xo(e){return e===`Desconhecido`?r.perfil.sangueDesconhecido:e}function So(){K=r.acervo.salvando,d(),clearTimeout(yo),yo=setTimeout(()=>void Co(),vo)}async function Co(){try{G=await xe(G),K=r.acervo.salvoAs(c(Date.now()))}catch(e){console.error(`perfil: a gravação falhou.`,e),K=e instanceof Se?r.perfil.dataDuvidosa:e instanceof ye?r.perfil.cpfDuvidoso:oe(e)}d()}function q(e,t){G={...G,[e]:t},So()}function wo(e){return{telefone_duvidoso:r.perfil.telefoneDuvidoso,email_duvidoso:r.perfil.emailDuvidoso,cpf_duvidoso:r.perfil.cpfDuvidoso,data_duvidosa:r.perfil.dataDuvidosa}[e]??``}function To(e){return go.includes(e)}var J=new Set,Y=new Map;function Eo(e){return Do(e)||e===`cpf_titular`}function Do(e){return we.includes(e)}function X(t,n,r=`text`,i){let a=Eo(t)?Y.get(t):void 0,o=a??String(G[t]??``),c=a!==void 0&&Do(t)?`data_duvidosa`:To(t)&&J.has(t)?_o(t,o):void 0;return e`
    <kk-input
      type=${r}
      label=${n}
      help-text=${c===void 0?``:wo(c)}
      autocomplete=${Ae(i)}
      .value=${o}
      @kk-input=${e=>{let n=e.target.value;if(J.delete(t),Do(t)){if(n.trim()!==``&&!s(n.trim())){Y.set(t,n),d();return}Y.delete(t)}else if(t===`cpf_titular`){if(Ce(n)){Y.set(t,n),d();return}Y.delete(t)}q(t,n)}}
      @kk-blur=${()=>{To(t)&&!J.has(t)&&(J.add(t),d())}}
    ></kk-input>
  `}function Oo(t,n){return e`
    <kk-textarea
      rows="2"
      resize="auto"
      label=${n}
      .value=${String(G[t]??``)}
      @kk-input=${e=>q(t,e.target.value)}
    ></kk-textarea>
  `}function ko(t,n){return e`
    <kk-switch
      ?checked=${G[t]===1}
      @kk-change=${e=>q(t,+!!e.target.checked)}
    >
      ${n}
    </kk-switch>
  `}var Z=[`sobre`,`ice`,`acessibilidade`],Ao={sobre:`#/perfil`,ice:`#/perfil/emergencia`,acessibilidade:`#/perfil/acessibilidade`};function jo(e){return e===`ice`?r.perfil.abaIce:e===`acessibilidade`?r.perfil.abaAcessibilidade:r.perfil.abaSobre}var Mo={sobre:`user`,ice:`heartbeat`,acessibilidade:`accessible`},Q=`sobre`,No=null;o(`perfil`,()=>{No=null});function Po(e){let[t]=e.args;return t===`emergencia`?`ice`:t===`acessibilidade`?`acessibilidade`:`sobre`}function Fo(e,t=!1){Q=e,history.replaceState(history.state,``,Ao[e]),d(),t&&document.querySelector(`#perfil-aba-${e}`)?.focus()}function Io(e){let t=Z.indexOf(Q),n=e.key===`ArrowRight`?Z[(t+1)%Z.length]:e.key===`ArrowLeft`?Z[(t-1+Z.length)%Z.length]:e.key===`Home`?Z[0]:e.key===`End`?Z[Z.length-1]:void 0;n!==void 0&&(e.preventDefault(),Fo(n,!0))}function Lo(){return e`
    <div class="chips perfil__abas" role="tablist" aria-label=${r.perfil.abas}>
      ${Z.map(t=>e`
          <button
            type="button"
            class="chip"
            role="tab"
            id=${`perfil-aba-${t}`}
            aria-controls="perfil-painel"
            aria-selected=${Q===t}
            tabindex=${Q===t?0:-1}
            ?data-ativo=${Q===t}
            @click=${()=>Fo(t)}
            @keydown=${Io}
          >
            <kk-icon name=${Mo[t]}></kk-icon>
            ${jo(t)}
          </button>
        `)}
    </div>
  `}function Ro(){return a.length<2?t:e`
    <h2 class="secao">${r.perfil.idiomaSecao}</h2>
    <kk-select
      label=${r.perfil.idioma}
      help-text=${r.perfil.idiomaAjuda}
      .value=${n()}
      @kk-change=${e=>{let t=e.target.value;t!==n()&&i(t).then(d)}}
    >
      ${a.map(({tag:t,nome:n})=>e`<kk-option value=${t} lang=${t}>${n}</kk-option>`)}
    </kk-select>
  `}function zo(){return e`
    <div class="formulario">
      <p class="editor__status">${K}</p>

      <h2 class="secao">${r.perfil.cartao}</h2>
      ${X(`nome`,r.perfil.nome,`text`,`name`)}
      ${X(`telefone`,r.perfil.telefone,`tel`,`tel`)}
      ${X(`email`,r.perfil.email,`email`,`email`)}
      ${X(`link`,r.perfil.link,`text`,`url`)}
      ${X(`comentario`,r.perfil.comentario)}

      <h2 class="secao">${r.perfil.congregacaoSecao}</h2>
      ${X(`congregacao`,r.perfil.congregacao)}
      ${X(`grupo`,r.perfil.grupo)}

      <h2 class="secao">${r.perfil.secretario}</h2>
      ${X(`nome_secretario`,r.perfil.nome)}
      ${X(`telefone_secretario`,r.perfil.telefone,`tel`)}

      ${Ro()}
    </div>
  `}function Bo(){return e`
    <div class="formulario">
      <p class="perfil__ice-explica">
        <kk-icon name="heartbeat"></kk-icon>
        <span>${r.perfil.iceExplica}</span>
      </p>
      <p class="editor__status">${K}</p>

      <h2 class="secao">${r.perfil.saude}</h2>
      <kk-select
        label=${r.perfil.tipo_sanguineo}
        .value=${G.tipo_sanguineo}
        @kk-change=${e=>q(`tipo_sanguineo`,e.target.value)}
      >
        <kk-option value="">${r.perfil.selecione}</kk-option>
        ${de.map(t=>e`<kk-option value=${t}>${xo(t)}</kk-option>`)}
      </kk-select>
      ${ko(`doador_orgaos`,r.perfil.doador)}
      ${X(`alergias`,r.perfil.alergias)}
      ${Oo(`medicamentos_em_uso`,r.perfil.medicamentos)}
      ${Oo(`observacoes_medicas`,r.perfil.observacoes)}

      <h2 class="secao">${r.perfil.gestacao}</h2>
      ${ko(`gravida`,r.perfil.gestante)}
      ${G.gravida===1?e`
            <div class="formulario__par">
              <kk-select
                label=${r.perfil.meses}
                .value=${G.gravidez_meses}
                @kk-change=${e=>q(`gravidez_meses`,e.target.value)}
              >
                <kk-option value="">—</kk-option>
                ${Array.from({length:9},(e,t)=>t+1).map(t=>e`<kk-option value=${String(t)}>${r.perfil.mes(t)}</kk-option>`)}
              </kk-select>
              ${X(`data_prevista_parto`,r.perfil.parto,`date`)}
            </div>
          `:t}

      <h2 class="secao">${r.perfil.dpa}</h2>
      ${_e(G)===``?t:e`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${r.perfil.dpaVencidoAviso(_e(G))}
            </kk-alert>
          `}
      ${ko(`recusa_transfusao`,r.perfil.recusa)}
      ${G.recusa_transfusao===1?e`
            <kk-alert open variant="danger">
              <kk-icon slot="icon" name="alert-octagon"></kk-icon>
              <strong>${r.perfil.naoApliqueSangue}</strong>
            </kk-alert>
          `:t}
      ${Oo(`fracoes_aceitas`,r.perfil.fracoes)}
      ${X(`dpa_assinado_em`,r.perfil.dpaAssinado,`date`)}

      <h2 class="secao">${r.perfil.emergencia}</h2>
      ${X(`contato_emergencia`,r.perfil.contatoNome)}
      ${X(`contato_emergencia_telefone`,r.perfil.contatoTelefone,`tel`)}

      <h2 class="secao">${r.perfil.colih}</h2>
      ${X(`nome_colih`,r.perfil.contatoNome)}
      ${X(`telefone_colih`,r.perfil.contatoTelefone,`tel`)}

      <h2 class="secao">${r.perfil.identificacao}</h2>
      ${X(`cartao_sus_numero`,r.perfil.sus)}
      ${X(`cpf_titular`,r.perfil.cpf)}
      ${X(`upa_referencia`,r.perfil.upa)}
    </div>
  `}function Vo(t){let n=t.args.join(`/`);return n!==No&&(Q=Po(t),No=n),e`
    ${Lo()}
    <div id="perfil-painel" role="tabpanel" aria-labelledby=${`perfil-aba-${Q}`}>
      ${Q===`ice`?Bo():Q===`acessibilidade`?Pe():zo()}
    </div>
  `}function Ho(){let n=Te(G),i=me(G);return e`
    <div class="cartao-contato">
      <h2 class="cartao-contato__nome">${G.nome||r.perfil.semNome}</h2>
      <p class="cartao-contato__telefone">${G.telefone}</p>

      ${i===``?e`
            <div class="vazio">
              <kk-icon class="vazio__icone" name="qrcode"></kk-icon>
              <p>${r.perfil.semCartao}</p>
            </div>
          `:e`
            <kk-qr-code
              class="cartao-contato__qr"
              value=${i}
              size="224"
              error-correction="M"
              label=${r.perfil.qrAlt}
            ></kk-qr-code>
          `}

      ${G.comentario===``?t:e`<p class="cartao-contato__nota">${G.comentario}</p>`}

      ${i===``?t:e`
            <div class="cartao-contato__acoes">
              ${n===``?t:e`
                    <kk-button variant="success" href=${n} target="_blank">
                      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>WhatsApp
                    </kk-button>
                  `}
              <kk-button
                variant="primary"
                outline
                @click=${()=>void le(G.nome||r.perfil.semNome,he(G))}
              >
                <kk-icon slot="prefix" name="share"></kk-icon>${r.leitura.compartilhar}
              </kk-button>
            </div>
          `}
    </div>
  `}function $(n,r){return r===``?t:e`
    <div class="ice__dado">
      <span class="ice__rotulo">${n}</span>
      <span class="ice__valor">${r}</span>
    </div>
  `}function Uo(n,r,i){return r===``?t:e`
    <div class="ice__contato">
      <span><strong>${n}</strong> ${r}</span>
      ${i===``?t:e`
            <kk-button size="small" variant="success" outline href=${`tel:${i}`}>
              <kk-icon slot="prefix" name="phone"></kk-icon>${i}
            </kk-button>
          `}
    </div>
  `}function Wo(){let n=[G.gravidez_meses===``?``:r.perfil.mesesGestacao(Number(G.gravidez_meses)),fe(G)===``?``:r.perfil.partoEm(fe(G))].filter(e=>e!==``).join(` · `),i=pe(G);return e`
    ${G.recusa_transfusao===1?e`
          <kk-alert open variant="danger" class="ice__alerta">
            <kk-icon slot="icon" name="alert-octagon"></kk-icon>
            <strong>${r.perfil.naoApliqueSangue}</strong>
            <span>${r.perfil.portadorDiretriz}</span>
          </kk-alert>
        `:t}

    ${G.gravida===1?e`
          <kk-alert open variant="warning" class="ice__alerta">
            <kk-icon slot="icon" name="alert-triangle"></kk-icon>
            <strong>${r.perfil.gestanteMaiusculo}</strong>
            <span>${n}</span>
          </kk-alert>
        `:t}

    ${ve(G)?e`
          <div class="ice">
            <h2 class="ice__nome">${G.nome||`—`}</h2>
            <div class="ice__grade">
              ${$(r.perfil.tipo_sanguineo,xo(G.tipo_sanguineo))}
              ${$(r.perfil.doador,G.doador_orgaos===1?r.perfil.sim:``)}
              ${$(r.perfil.alergias,G.alergias)}
              ${$(r.perfil.gestante,G.gravida===1?n:``)}
            </div>
            ${$(r.perfil.medicamentos,G.medicamentos_em_uso)}
            ${$(r.perfil.observacoes,G.observacoes_medicas)}
            ${$(r.perfil.fracoes,G.fracoes_aceitas)}
          </div>

          ${G.contato_emergencia===``&&G.nome_colih===``?t:e`
                <div class="ice">
                  ${Uo(r.perfil.emergencia,G.contato_emergencia,G.contato_emergencia_telefone)}
                  ${Uo(r.perfil.colih,G.nome_colih,G.telefone_colih)}
                </div>
              `}

          <div class="ice">
            ${$(r.perfil.sus,G.cartao_sus_numero)}
            ${$(r.perfil.cpf,G.cpf_titular)}
            ${$(r.perfil.upa,G.upa_referencia)}
            ${i===null?t:e`
                  <p class="ice__dpa" ?data-vencido=${i.dias<0}>
                    <kk-icon name="calendar-check"></kk-icon>
                    ${r.perfil.dpa_assinado_em(i.data)}
                    ${i.dias<0?r.perfil.dpaVencido:r.perfil.dpaRenovar(i.dias)}
                  </p>
                `}
          </div>
        `:e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="heartbeat"></kk-icon>
            <p>${r.perfil.semFicha}</p>
          </div>
        `}
  `}var Go={voltarPara(e){let[t]=e.args;return t===`cartao`||t===`ice`?`perfil`:`home`},aoVoltar(e){let[t]=e.args;return t!==`cartao`&&t!==`ice`?!1:(history.back(),!0)},titulo(e){let[t]=e.args;if(t===`cartao`)return r.perfil.tituloCartao;if(t===`ice`)return r.perfil.tituloFicha},conteudo(e){let t=bo.espera();if(t!==null)return t;let[n]=e.args;return n===`cartao`?Ho():n===`ice`?Wo():Vo(e)}};export{Go as telaPerfil};