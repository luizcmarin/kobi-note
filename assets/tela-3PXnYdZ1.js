import{i as e,t}from"./lit-CL39YOSA.js";import{i as n,n as r,r as i,t as a}from"./strings-C-U_qlgv.js";import{n as o}from"./rotas-D12eslN_.js";import{i as s,r as c}from"./data-7IMAkOFv.js";import{l,o as ee,r as u,s as te,t as ne}from"./acessibilidade-CRpcvpwG.js";import{M as re,R as d,c as ie,f as ae,j as oe}from"./index-DQ-iAe1X.js";import{t as se}from"./carga-Cl47TOz-.js";import{t as ce}from"./compartilhar-yiSOxGhg.js";import{_ as le,a as ue,d as de,f as fe,g as pe,h as me,i as he,l as ge,m as _e,n as ve,o as ye,p as be,r as xe,s as Se,t as Ce,u as we,v as Te}from"./dados-B1OTfgYR.js";import{t as Ee}from"./qr-DpaV8VDE.js";function De(e){let t=e.trim();return t.length<=254&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(t)}function Oe(e){let t=Te(e);return t.length===12||t.length===13?t.startsWith(`55`)?t.slice(2):``:t.length===10||t.length===11?t:``}function f(e){let t=Oe(e);return t===``||Number(t.slice(0,2))<11?!1:t.length===11?t.startsWith(`9`,2):/^[2-5]/.test(t.slice(2))}var ke=e=>e??t;function Ae(e){ee(e),d()}function p(t,n,r){return e`
    <kk-switch
      class="a11y__opcao"
      help-text=${r}
      ?checked=${u()[t]}
      @kk-change=${e=>{Ae({[t]:e.target.checked})}}
    >
      ${n}
    </kk-switch>
  `}function je(){let t=u().texto;return e`
    <div class="a11y__opcao">
      <span class="a11y__rotulo" id="a11y-texto">${r.acessibilidade.texto}</span>
      <div class="a11y__graus" role="radiogroup" aria-labelledby="a11y-texto">
        ${l.map(n=>e`
            <button
              type="button"
              class="chip a11y__grau"
              role="radio"
              aria-checked=${n===t}
              ?data-ativo=${n===t}
              style="font-size: ${n/100}em"
              @click=${()=>Ae({texto:n})}
            >
              ${r.acessibilidade.grau(n)}
            </button>
          `)}
      </div>
      <p class="a11y__ajuda">${r.acessibilidade.textoAjuda}</p>
    </div>
  `}function Me(){return e`
    <kk-switch
      class="a11y__opcao"
      help-text=${r.acessibilidade.temaAjuda}
      ?checked=${re()===`escuro`}
      @kk-change=${e=>{oe(e.target.checked?`escuro`:`claro`),d()}}
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
  `}function Ne(){let n=matchMedia(`(prefers-reduced-motion: reduce)`).matches,i=te();return e`
    <div class="a11y">
      <p class="a11y__intro">${r.acessibilidade.intro}</p>

      <h2 class="secao">
        <kk-icon name="eye"></kk-icon>
        ${r.acessibilidade.visao}
      </h2>
      ${je()}
      ${Me()}
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
        @click=${()=>{Ae(ne),ie(r.acessibilidade.restaurado,`neutral`)}}
      >
        <kk-icon slot="prefix" name="refresh"></kk-icon>
        ${r.acessibilidade.restaurar}
      </kk-button>
    </div>
  `}var Pe={value:void 0,enumerable:!1};function h(e,t,n){function r(n,r){if(!n._bio){Pe.value={def:r,constr:o,traits:new Set};try{Object.defineProperty(n,"_bio",Pe)}finally{Pe.value=void 0}}if(n._bio.traits.has(e))return;n._bio.traits.add(e),t(n,r);let i=o.prototype;for(let e in i)Object.hasOwn(i,e)&&(e in n||(n[e]=i[e].bind(n)))}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:e});function o(e){let t=n?.Parent?new a:this;r(t,e);let i=t._bio.deferred;if(i){for(let e of i)e();t._bio.deferred=void 0}return t}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._bio?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}var g=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},Fe=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`BioEncodeError`}},Ie={};function _(e){return e&&Object.assign(Ie,e),Ie}function Le(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function Re(e,t){return typeof t==`bigint`?t.toString():t}function ze(e){return{get value(){{let t=e();return Object.defineProperty(this,"value",{value:t}),t}}}}function Be(e){return e==null}function Ve(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function He(e,t){let n=e/t,r=Math.round(n),i=2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}var Ue=Symbol(`evaluating`);function v(e,t,n){let r;Object.defineProperty(e,t,{get(){if(r!==Ue)return r===void 0&&(r=Ue,r=n()),r},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function y(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function b(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function We(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var Ge=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function Ke(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function x(e){if(Ke(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return Ke(n)!==!1&&Object.hasOwn(n,`isPrototypeOf`)!==!1}function qe(e){return x(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var Je=new Set([`string`,`number`,`symbol`]);function S(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function C(e,t,n){let r=new e._bio.constr(t??e._bio.def);return(!t||n?.parent)&&(r._bio.parent=e),r}function w(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function Ye(e){return Object.keys(e).filter(t=>e[t]._bio.optin===`optional`&&e[t]._bio.optout===`optional`)}var Xe={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function Ze(e,t){let n=e._bio.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);return C(e,b(e._bio.def,{get shape(){let e={};for(let r in t){if(!Object.hasOwn(n.shape,r))throw Error(`Unrecognized key: "${r}"`);t[r]&&y(e,r,n.shape[r])}return y(this,`shape`,e),e},checks:[]}))}function Qe(e,t){let n=e._bio.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);return C(e,b(e._bio.def,{get shape(){let r={...e._bio.def.shape};for(let e in t){if(!Object.hasOwn(n.shape,e))throw Error(`Unrecognized key: "${e}"`);t[e]&&delete r[e]}return y(this,`shape`,r),r},checks:[]}))}function $e(e,t){if(!x(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._bio.def.checks;if(n&&n.length>0){let n=e._bio.def.shape;for(let e in t)if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return C(e,b(e._bio.def,{get shape(){let n={...e._bio.def.shape,...t};return y(this,`shape`,n),n}}))}function et(e,t){if(!x(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return C(e,b(e._bio.def,{get shape(){let n={...e._bio.def.shape,...t};return y(this,`shape`,n),n}}))}function tt(e,t){if(!t?._bio?.def)throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(e._bio.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);return C(e,b(e._bio.def,{get shape(){let n={...e._bio.def.shape,...t._bio.def.shape};return y(this,`shape`,n),n},get catchall(){return t._bio.def.catchall},checks:t._bio.def.checks??[]}))}function nt(e,t,n){let r=t._bio.def.checks;if(r&&r.length>0)throw Error(`.partial() cannot be used on object schemas containing refinements`);return C(t,b(t._bio.def,{get shape(){let r=t._bio.def.shape,i={...r};if(n)for(let t in n){if(!Object.hasOwn(r,t))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t])}else for(let t in r)i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t];return y(this,`shape`,i),i},checks:[]}))}function rt(e,t,n){return C(t,b(t._bio.def,{get shape(){let r=t._bio.def.shape,i={...r};if(n)for(let t in n){if(!Object.hasOwn(i,t))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=new e({type:`nonoptional`,innerType:r[t]}))}else for(let t in r)i[t]=new e({type:`nonoptional`,innerType:r[t]});return y(this,`shape`,i),i}}))}function T(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function it(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function at(e,t){return t.map(t=>(t.path??=[],t.path.unshift(e),t))}function ot(e){return typeof e==`string`?e:e?.message}function E(e,t,n){let r=e.message?e.message:ot(e.inst?._bio.def?.error?.(e))??ot(t?.error?.(e))??ot(n.customError?.(e))??e.code,{inst:i,continue:a,input:o,...s}=e;return s.path??=[],s.message=r,t?.reportInput&&(s.input=o),s}function st(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function D(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}function ct(e,t){let n=Object.getPrototypeOf(e);return t in n?void 0:n}function lt(e,t,n){Object.defineProperty(e,t,{configurable:!0,get(){let e=n(this);return Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:!0,value:e}),e},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:!0,value:e})}})}function ut(e,t,n){let r=ct(e,t);if(!r)return;let i=n();for(let e in i){let t=i[e];lt(r,e,e=>t.bind(e))}}function dt(e,t,n){let r=ct(e,t);if(!r)return;let i=n();for(let e in i)lt(r,e,i[e])}function ft(){let e=this._bio;return e.message??=JSON.stringify(e.def,Re,2),e.message}function pt(e){this._bio.message=e}var mt={get:ft,set:pt,enumerable:!0,configurable:!0},ht={value:void 0,enumerable:!1},gt={value:void 0,enumerable:!1},_t=new WeakSet([Object.prototype,Error.prototype]),vt=(e,t)=>{e.name=`$BioError`,ht.value=e._bio,Object.defineProperty(e,"_bio",ht),gt.value=t,Object.defineProperty(e,"issues",gt),ht.value=void 0,gt.value=void 0,Object.defineProperty(e,"message",mt);let n=Object.getPrototypeOf(e);_t.has(n)||(_t.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){let e=()=>this.message;return Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0})}}))},yt=h(`$BioError`,vt);h(`$BioError`,vt,{Parent:Error});function bt(e,t,n){return Object.hasOwn(e,t)||(t===`__proto__`?Object.defineProperty(e,t,{value:n(),writable:!0,enumerable:!0,configurable:!0}):e[t]=n()),e[t]}function xt(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?bt(n,i.path[0],()=>[]).push(t(i)):r.push(t(i));return{formErrors:r,fieldErrors:n}}function St(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i],o=i===e.length-1;if(n===`_errors`){o&&r._errors.push(t(a)),i++;continue}Object.hasOwn(r,n)||Object.defineProperty(r,n,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});let s=r[n];o&&s._errors.push(t(a)),r=s,i++}}}};return r(e),n}var Ct=e=>(t,n,r,i)=>{let a=r?{...r,async:!1}:{async:!1},o=t._bio.run({value:n,issues:[]},a);if(o instanceof Promise)throw new g;if(o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>E(e,a,_())));throw Ge(t,i?.callee),t}return o.value},wt=e=>async(t,n,r,i)=>{let a=r?{...r,async:!0}:{async:!0},o=t._bio.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>E(e,a,_())));throw Ge(t,i?.callee),t}return o.value},Tt=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._bio.run({value:n,issues:[]},i);if(a instanceof Promise)throw new g;return a.issues.length?{success:!1,error:new(e??yt)(a.issues.map(e=>E(e,i,_())))}:{success:!0,data:a.value}},Et=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._bio.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>E(e,i,_())))}:{success:!0,data:a.value}},Dt=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Ct(e)(t,n,i)},Ot=e=>(t,n,r)=>Ct(e)(t,n,r),kt=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return wt(e)(t,n,i)},At=e=>async(t,n,r)=>wt(e)(t,n,r),jt=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Tt(e)(t,n,i)},Mt=e=>(t,n,r)=>Tt(e)(t,n,r),Nt=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Et(e)(t,n,i)},Pt=e=>async(t,n,r)=>Et(e)(t,n,r),Ft=/^[cC][0-9a-z]{6,}$/,It=/^[0-9a-z]+$/,Lt=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Rt=/^[0-9a-vA-V]{20}$/,zt=/^[A-Za-z0-9]{27}$/,Bt=/^[a-zA-Z0-9_-]{21}$/,Vt=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Ht=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Ut=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Wt=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/,Gt=`^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;function Kt(){return new RegExp(Gt,`u`)}var qt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Jt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Yt=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Xt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Zt=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Qt=/^[A-Za-z0-9_-]*$/,$t=/^https?$/,en=/^\+[1-9]\d{6,14}$/,tn=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;function nn(e){return RegExp(`^${e}$`)}var rn=nn(tn);function an(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function on(e){return RegExp(`^${an(e)}$`)}function sn(e){let t=an({precision:e.precision}),n=[`Z`];e.local&&n.push(``),e.offset&&n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let r=`${t}(?:${n.join(`|`)})`;return RegExp(`^${tn}T(?:${r})$`)}var cn=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??``}}`:`[\\s\\S]*`;return RegExp(`^${t}$`)},ln=/^-?\d+$/,un=/^-?\d+(?:\.\d+)?$/,dn=/^[^A-Z]*$/,fn=/^[^a-z]*$/,O=h(`$BioCheck`,(e,t)=>{e._bio??={},e._bio.def=t,e._bio.onattach??=[]}),k={number:`number`,bigint:`bigint`,object:`date`},pn=h(`$BioCheckLessThan`,(e,t)=>{O.init(e,t);let n=k[typeof t.value];e._bio.onattach.push(e=>{let n=e._bio.bag,r=(t.inclusive?n.maximum:n.exclusiveMaximum)??1/0;t.value<r&&(t.inclusive?n.maximum=t.value:n.exclusiveMaximum=t.value)}),e._bio.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:k[typeof r.value]??n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),mn=h(`$BioCheckGreaterThan`,(e,t)=>{O.init(e,t);let n=k[typeof t.value];e._bio.onattach.push(e=>{let n=e._bio.bag,r=(t.inclusive?n.minimum:n.exclusiveMinimum)??-1/0;t.value>r&&(t.inclusive?n.minimum=t.value:n.exclusiveMinimum=t.value)}),e._bio.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:k[typeof r.value]??n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),hn=h(`$BioCheckMultipleOf`,(e,t)=>{O.init(e,t),e._bio.onattach.push(e=>{e._bio.bag.multipleOf??=t.value}),e._bio.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?n.value%t.value===BigInt(0):He(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),gn=h(`$BioCheckNumberFormat`,(e,t)=>{O.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=Xe[t.format];e._bio.onattach.push(e=>{let r=e._bio.bag;r.format=t.format,r.minimum=i,r.maximum=a,n&&(r.pattern=ln)}),e._bio.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),_n=h(`$BioCheckMaxLength`,(e,t)=>{O.init(e,t),e._bio.def.when??=e=>{let t=e.value;return!Be(t)&&t.length!==void 0},e._bio.onattach.push(e=>{let n=e._bio.bag.maximum??1/0;t.maximum<n&&(e._bio.bag.maximum=t.maximum)}),e._bio.check=n=>{let r=n.value;if(r.length<=t.maximum)return;let i=st(r);n.issues.push({origin:i,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),vn=h(`$BioCheckMinLength`,(e,t)=>{O.init(e,t),e._bio.def.when??=e=>{let t=e.value;return!Be(t)&&t.length!==void 0},e._bio.onattach.push(e=>{let n=e._bio.bag.minimum??-1/0;t.minimum>n&&(e._bio.bag.minimum=t.minimum)}),e._bio.check=n=>{let r=n.value;if(r.length>=t.minimum)return;let i=st(r);n.issues.push({origin:i,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),yn=h(`$BioCheckLengthEquals`,(e,t)=>{O.init(e,t),e._bio.def.when??=e=>{let t=e.value;return!Be(t)&&t.length!==void 0},e._bio.onattach.push(e=>{let n=e._bio.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._bio.check=n=>{let r=n.value,i=r.length;if(i===t.length)return;let a=st(r),o=i>t.length;n.issues.push({origin:a,...o?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),A=h(`$BioCheckStringFormat`,(e,t)=>{O.init(e,t),e._bio.onattach.push(e=>{let n=e._bio.bag;n.format=t.format,t.pattern&&(n.patterns??=new Set,n.patterns.add(t.pattern))}),t.pattern?e._bio.check??=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}:e._bio.check??=()=>{}}),bn=h(`$BioCheckRegex`,(e,t)=>{A.init(e,t),e._bio.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),xn=h(`$BioCheckLowerCase`,(e,t)=>{t.pattern??=dn,A.init(e,t)}),Sn=h(`$BioCheckUpperCase`,(e,t)=>{t.pattern??=fn,A.init(e,t)}),Cn=h(`$BioCheckIncludes`,(e,t)=>{O.init(e,t);let n=S(t.includes),r=new RegExp(typeof t.position==`number`?`^.{${t.position}}${n}`:n);t.pattern=r,e._bio.onattach.push(e=>{let t=e._bio.bag;t.patterns??=new Set,t.patterns.add(r)}),e._bio.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),wn=h(`$BioCheckStartsWith`,(e,t)=>{O.init(e,t);let n=RegExp(`^${S(t.prefix)}.*`);t.pattern??=n,e._bio.onattach.push(e=>{let t=e._bio.bag;t.patterns??=new Set,t.patterns.add(n)}),e._bio.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),Tn=h(`$BioCheckEndsWith`,(e,t)=>{O.init(e,t);let n=RegExp(`.*${S(t.suffix)}$`);t.pattern??=n,e._bio.onattach.push(e=>{let t=e._bio.bag;t.patterns??=new Set,t.patterns.add(n)}),e._bio.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),En=h(`$BioCheckOverwrite`,(e,t)=>{O.init(e,t),e._bio.check=e=>{e.value=t.tx(e.value)}}),j=h(`$BioType`,(e,t)=>{e??={},e._bio.def=t,e._bio.bag=e._bio.bag||{};let n=e._bio.def.checks,r=e._bio.traits.has(`$BioCheck`)?[e,...n??[]]:n?.length?[...n]:[];for(let t of r)for(let n of t._bio.onattach)n(e);if(r.length===0)e._bio.deferred??=[],e._bio.deferred?.push(()=>{e._bio.run=e._bio.parse});else{let t=(e,t,n)=>{let r=T(e),i;for(let a of t){if(a._bio.def.when){if(it(e)||!a._bio.def.when(e))continue}else if(r)continue;let t=e.issues.length,o=a._bio.check(e);if(o instanceof Promise&&n?.async===!1)throw new g;if(i||o instanceof Promise)i=(i??Promise.resolve()).then(async()=>{await o,e.issues.length!==t&&(r||=T(e,t))});else{if(e.issues.length===t)continue;r||=T(e,t)}}return i?i.then(()=>e):e},n=(n,i,a)=>{if(T(n))return n.aborted=!0,n;let o=t(i,r,a);if(o instanceof Promise){if(a.async===!1)throw new g;return o.then(t=>e._bio.parse(t,a))}return e._bio.parse(o,a)};e._bio.run=(i,a)=>{if(a.skipChecks)return e._bio.parse(i,a);if(a.direction===`backward`){let t=e._bio.parse({value:i.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,i,a)):n(t,i,a)}let o=e._bio.parse(i,a);if(o instanceof Promise){if(a.async===!1)throw new g;return o.then(e=>t(e,r,a))}return t(o,r,a)}}}),Dn=h(`$BioString`,(e,t)=>{j.init(e,t),e._bio.pattern=[...e?._bio.bag?.patterns??[]].pop()??cn(e._bio.bag),e._bio.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),M=h(`$BioStringFormat`,(e,t)=>{A.init(e,t),Dn.init(e,t)}),On=h(`$BioGUID`,(e,t)=>{t.pattern??=Ht,M.init(e,t)}),kn=h(`$BioUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Ut(e)}else t.pattern??=Ut();M.init(e,t)}),An=h(`$BioEmail`,(e,t)=>{t.pattern??=Wt,M.init(e,t)}),jn=h(`$BioURL`,(e,t)=>{M.init(e,t),e._bio.check=n=>{try{let r=n.value.trim();if(!t.normalize&&t.protocol?.source===$t.source&&!/^https?:\/\//i.test(r)){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}let i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(`:`)?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),n.value=t.normalize?i.href:r;return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),Mn=h(`$BioEmoji`,(e,t)=>{t.pattern??=Kt(),M.init(e,t)}),Nn=h(`$BioNanoID`,(e,t)=>{t.pattern??=Bt,M.init(e,t)}),Pn=h(`$BioCUID`,(e,t)=>{t.pattern??=Ft,M.init(e,t)}),Fn=h(`$BioCUID2`,(e,t)=>{t.pattern??=It,M.init(e,t)}),In=h(`$BioULID`,(e,t)=>{t.pattern??=Lt,M.init(e,t)}),Ln=h(`$BioXID`,(e,t)=>{t.pattern??=Rt,M.init(e,t)}),Rn=h(`$BioKSUID`,(e,t)=>{t.pattern??=zt,M.init(e,t)}),zn=h(`$BioISODateTime`,(e,t)=>{t.pattern??=sn(t),M.init(e,t)}),Bn=h(`$BioISODate`,(e,t)=>{t.pattern??=rn,M.init(e,t)}),Vn=h(`$BioISOTime`,(e,t)=>{t.pattern??=on(t),M.init(e,t)}),Hn=h(`$BioISODuration`,(e,t)=>{t.pattern??=Vt,M.init(e,t)}),Un=h(`$BioIPv4`,(e,t)=>{t.pattern??=qt,M.init(e,t),e._bio.bag.format=`ipv4`}),Wn=h(`$BioIPv6`,(e,t)=>{t.pattern??=Jt,M.init(e,t),e._bio.bag.format=`ipv6`,e._bio.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}}),Gn=h(`$BioCIDRv4`,(e,t)=>{t.pattern??=Yt,M.init(e,t)}),Kn=h(`$BioCIDRv6`,(e,t)=>{t.pattern??=Xt,M.init(e,t),e._bio.check=n=>{let r=n.value.split(`/`);try{if(r.length!==2)throw Error();let[e,t]=r;if(!t)throw Error();let n=Number(t);if(`${n}`!==t||n<0||n>128)throw Error();new URL(`http://[${e}]`)}catch{n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}}});function qn(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var Jn=h(`$BioBase64`,(e,t)=>{t.pattern??=Zt,M.init(e,t),e._bio.bag.contentEncoding=`base64`,e._bio.check=n=>{qn(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}});function Yn(e){if(!Qt.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return qn(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var Xn=h(`$BioBase64URL`,(e,t)=>{t.pattern??=Qt,M.init(e,t),e._bio.bag.contentEncoding=`base64url`,e._bio.check=n=>{Yn(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),Zn=h(`$BioE164`,(e,t)=>{t.pattern??=en,M.init(e,t)});function Qn(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var $n=h(`$BioJWT`,(e,t)=>{M.init(e,t),e._bio.check=n=>{Qn(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),er=h(`$BioNumber`,(e,t)=>{j.init(e,t),e._bio.pattern=e._bio.bag.pattern??un,e._bio.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:String(i):void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),tr=h(`$BioNumberFormat`,(e,t)=>{gn.init(e,t),er.init(e,t)}),nr=h(`$BioUnknown`,(e,t)=>{j.init(e,t),e._bio.parse=e=>e}),rr=h(`$BioNever`,(e,t)=>{j.init(e,t),e._bio.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function ir(e,t,n){e.issues.length&&t.issues.push(...at(n,e.issues)),t.value[n]=e.value}var ar=h(`$BioArray`,(e,t)=>{j.init(e,t),e._bio.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({expected:`array`,code:`invalid_type`,input:i,inst:e}),n;n.value=Array(i.length);let a=[];for(let e=0;e<i.length;e++){let o=i[e],s=t.element._bio.run({value:o,issues:[]},r);s instanceof Promise?a.push(s.then(t=>ir(t,n,e))):ir(s,n,e)}return a.length?Promise.all(a).then(()=>n):n}});function N(e,t,n,r,i,a){let o=n in r;if(e.issues.length){if(i&&a&&!o)return;t.issues.push(...at(n,e.issues))}if(!o&&!i){e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]});return}e.value===void 0?o&&(t.value[n]=void 0):t.value[n]=e.value}function or(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._bio?.traits?.has(`$BioType`))throw Error(`Invalid element at key "${n}": expected a Bio schema`);let n=Ye(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(n)}}function sr(e,t,n,r,i,a){let o=[],s=i.keySet,c=i.catchall._bio,l=c.def.type,ee=c.optin===`optional`,u=c.optout===`optional`;for(let i in t){if(s.has(i))continue;if(i===`__proto__`){l===`never`&&o.push(i);continue}if(l===`never`){o.push(i);continue}let a=c.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>N(e,n,i,t,ee,u))):N(a,n,i,t,ee,u)}return o.length&&n.issues.push({code:`unrecognized_keys`,keys:o,input:t,inst:a,continue:!0}),e.length?Promise.all(e).then(()=>n):n}var cr=h(`$BioObject`,(e,t)=>{if(j.init(e,t),!Object.getOwnPropertyDescriptor(t,`shape`)?.get){let e=t.shape;Object.defineProperty(t,"shape",{get:()=>{let n={...e};return Object.defineProperty(t,"shape",{value:n}),n}})}let n=ze(()=>or(t));v(e._bio,`propValues`,()=>{let e=t.shape,n={};for(let t in e){let r=e[t]._bio;if(r.values){Object.hasOwn(n,t)||y(n,t,new Set);for(let e of r.values)n[t].add(e)}}return n});let r=Ke,i=t.catchall,a;e._bio.parse=(t,o)=>{a??=n.value;let s=t.value;if(!r(s))return t.issues.push({expected:`object`,code:`invalid_type`,input:s,inst:e}),t;t.value={};let c=[],l=a.shape;for(let e of a.keys){if(e===`__proto__`)continue;let n=l[e],r=n._bio.optin===`optional`,i=n._bio.optout===`optional`,a=n._bio.run({value:s[e],issues:[]},o);a instanceof Promise?c.push(a.then(n=>N(n,t,e,s,r,i))):N(a,t,e,s,r,i)}return i?sr(c,s,t,o,n.value,e):c.length?Promise.all(c).then(()=>t):t}});function lr(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!T(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>E(e,r,_())))}),t)}var ur=h(`$BioUnion`,(e,t)=>{j.init(e,t),v(e._bio,`optin`,()=>t.options.some(e=>e._bio.optin===`optional`)?`optional`:void 0),v(e._bio,`optout`,()=>t.options.some(e=>e._bio.optout===`optional`)?`optional`:void 0),v(e._bio,`values`,()=>{if(t.options.every(e=>e._bio.values))return new Set(t.options.flatMap(e=>Array.from(e._bio.values)))}),v(e._bio,`pattern`,()=>{if(t.options.every(e=>e._bio.pattern)){let e=t.options.map(e=>e._bio.pattern);return RegExp(`^(${e.map(e=>Ve(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._bio.run:null;e._bio.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._bio.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>lr(t,r,e,i)):lr(o,r,e,i)}}),dr=h(`$BioIntersection`,(e,t)=>{j.init(e,t),e._bio.parse=(e,n)=>{let r=e.value,i=t.left._bio.run({value:r,issues:[]},n),a=t.right._bio.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>pr(e,t,n)):pr(e,i,a)}});function fr(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(x(e)&&x(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};Object.hasOwn(i,`__proto__`)&&delete i.__proto__;for(let n of r){if(n===`__proto__`)continue;let r=fr(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=fr(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function pr(e,t,n){let r=new Map,i,a=new Map,o=(e,t)=>{let n;if(e.code===`unrecognized_keys`&&!e.path?.length)i??=e,n=e.keys;else if(e.code===`invalid_key`&&e.origin===`record`&&e.path?.length===1){let t=String(e.path[0]);a.has(t)||a.set(t,e),n=[t]}else return!1;for(let e of n)r.has(e)||r.set(e,{}),r.get(e)[t]=!0;return!0};for(let n of t.issues)o(n,`l`)||e.issues.push(n);for(let t of n.issues)o(t,`r`)||e.issues.push(t);let s=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(s.length){let t=i?s.filter(e=>i.keys.includes(e)):[];t.length&&e.issues.push({...i,keys:t});for(let n of s)!t.includes(n)&&a.has(n)&&e.issues.push(a.get(n))}let c=fr(t.value,n.value);if(!c.valid){if(T(e))return e;throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return e.value=c.data,e}var mr=h(`$BioEnum`,(e,t)=>{j.init(e,t);let n=Le(t.entries),r=new Set(n);e._bio.values=r,e._bio.pattern=RegExp(`^(${n.filter(e=>Je.has(typeof e)).map(e=>S(e.toString())).join(`|`)})$`),e._bio.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),hr=h(`$BioTransform`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,e._bio.parse=(n,r)=>{if(r.direction===`backward`)throw new Fe(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n.fallback=!0,n));if(i instanceof Promise)throw new g;return n.value=i,n.fallback=!0,n}});function gr(e,t){return t===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}var _r=h(`$BioOptional`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,e._bio.optout=`optional`,v(e._bio,`values`,()=>t.innerType._bio.values?new Set([...t.innerType._bio.values,void 0]):void 0),v(e._bio,`pattern`,()=>{let e=t.innerType._bio.pattern;return e?RegExp(`^(${Ve(e.source)})?$`):void 0}),e._bio.parse=(e,n)=>{if(t.innerType._bio.optin===`optional`){let r=e.value,i=t.innerType._bio.run(e,n);return i instanceof Promise?i.then(e=>gr(e,r)):gr(i,r)}return e.value===void 0?e:t.innerType._bio.run(e,n)}}),vr=h(`$BioExactOptional`,(e,t)=>{_r.init(e,t),v(e._bio,`values`,()=>t.innerType._bio.values),v(e._bio,`pattern`,()=>t.innerType._bio.pattern),e._bio.parse=(e,n)=>t.innerType._bio.run(e,n)}),yr=h(`$BioNullable`,(e,t)=>{j.init(e,t),v(e._bio,`optin`,()=>t.innerType._bio.optin),v(e._bio,`optout`,()=>t.innerType._bio.optout),v(e._bio,`pattern`,()=>{let e=t.innerType._bio.pattern;return e?RegExp(`^(${Ve(e.source)}|null)$`):void 0}),v(e._bio,`values`,()=>t.innerType._bio.values?new Set([...t.innerType._bio.values,null]):void 0),e._bio.parse=(e,n)=>e.value===null?e:t.innerType._bio.run(e,n)}),br=h(`$BioDefault`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,v(e._bio,`values`,()=>t.innerType._bio.values),e._bio.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._bio.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._bio.run(e,n);return r instanceof Promise?r.then(e=>xr(e,t)):xr(r,t)}});function xr(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var Sr=h(`$BioPrefault`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,v(e._bio,`values`,()=>t.innerType._bio.values),e._bio.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._bio.run(e,n))}),Cr=h(`$BioNonOptional`,(e,t)=>{j.init(e,t),v(e._bio,`values`,()=>{let e=t.innerType._bio.values;return e?new Set([...e].filter(e=>e!==void 0)):void 0}),e._bio.parse=(n,r)=>{let i=t.innerType._bio.run(n,r);return i instanceof Promise?i.then(t=>wr(t,e)):wr(i,e)}});function wr(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}var Tr=h(`$BioCatch`,(e,t)=>{j.init(e,t),e._bio.optin=`optional`,v(e._bio,`optout`,()=>t.innerType._bio.optout),v(e._bio,`values`,()=>t.innerType._bio.values),e._bio.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._bio.run(e,n);let r=t.innerType._bio.run(e,n);return r instanceof Promise?r.then(r=>(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>E(e,n,_()))},input:e.value}),e.issues=[],e.fallback=!0),e)):(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>E(e,n,_()))},input:e.value}),e.issues=[],e.fallback=!0),e)}}),Er=h(`$BioPipe`,(e,t)=>{j.init(e,t),v(e._bio,`values`,()=>t.in._bio.values),v(e._bio,`optin`,()=>t.in._bio.optin),v(e._bio,`optout`,()=>t.out._bio.optout),v(e._bio,`propValues`,()=>t.in._bio.propValues),e._bio.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._bio.run(e,n);return r instanceof Promise?r.then(e=>P(e,t.in,n)):P(r,t.in,n)}let r=t.in._bio.run(e,n);return r instanceof Promise?r.then(e=>P(e,t.out,n)):P(r,t.out,n)}});function P(e,t,n){return e.issues.some(e=>e.code!==`unrecognized_keys`)?(e.aborted=!0,e):t._bio.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}var Dr=h(`$BioReadonly`,(e,t)=>{j.init(e,t),v(e._bio,`propValues`,()=>t.innerType._bio.propValues),v(e._bio,`values`,()=>t.innerType._bio.values),v(e._bio,`optin`,()=>t.innerType?._bio?.optin),v(e._bio,`optout`,()=>t.innerType?._bio?.optout),e._bio.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._bio.run(e,n);let r=t.innerType._bio.run(e,n);return r instanceof Promise?r.then(Or):Or(r)}});function Or(e){return e.value=Object.freeze(e.value),e}var kr=h(`$BioCustom`,(e,t)=>{O.init(e,t),j.init(e,t),e._bio.parse=(e,t)=>e,e._bio.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>Ar(t,n,r,e));Ar(i,n,r,e)}});function Ar(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._bio.def.path??[]],continue:!r._bio.def.abort};r._bio.def.params&&(e.params=r._bio.def.params),t.issues.push(D(e))}}var jr=class{_meta;_schema;_map=new WeakMap;_idmap=new Map;add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._bio.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function Mr(){return new jr}var F=Mr();function Nr(e,t){return new e({type:`string`,...w(t)})}function Pr(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...w(t)})}function Fr(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...w(t)})}function Ir(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...w(t)})}function Lr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...w(t)})}function Rr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...w(t)})}function zr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...w(t)})}function Br(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...w(t)})}function Vr(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...w(t)})}function Hr(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...w(t)})}function Ur(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...w(t)})}function Wr(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...w(t)})}function Gr(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...w(t)})}function Kr(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...w(t)})}function qr(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...w(t)})}function Jr(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...w(t)})}function Yr(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...w(t)})}function Xr(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...w(t)})}function Zr(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...w(t)})}function Qr(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...w(t)})}function $r(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...w(t)})}function ei(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...w(t)})}function ti(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...w(t)})}function ni(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...w(t)})}function ri(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...w(t)})}function ii(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...w(t)})}function ai(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...w(t)})}function oi(e,t){return new e({type:`number`,checks:[],...w(t)})}function si(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...w(t)})}function ci(e){return new e({type:`unknown`})}function li(e,t){return new e({type:`never`,...w(t)})}function ui(e,t){return new pn({check:`less_than`,...w(t),value:e,inclusive:!1})}function di(e,t){return new pn({check:`less_than`,...w(t),value:e,inclusive:!0})}function fi(e,t){return new mn({check:`greater_than`,...w(t),value:e,inclusive:!1})}function pi(e,t){return new mn({check:`greater_than`,...w(t),value:e,inclusive:!0})}function mi(e,t){return new hn({check:`multiple_of`,...w(t),value:e})}function hi(e,t){return new _n({check:`max_length`,...w(t),maximum:e})}function I(e,t){return new vn({check:`min_length`,...w(t),minimum:e})}function gi(e,t){return new yn({check:`length_equals`,...w(t),length:e})}function _i(e,t){return new bn({check:`string_format`,format:`regex`,...w(t),pattern:e})}function vi(e){return new xn({check:`string_format`,format:`lowercase`,...w(e)})}function yi(e){return new Sn({check:`string_format`,format:`uppercase`,...w(e)})}function bi(e,t){return new Cn({check:`string_format`,format:`includes`,...w(t),includes:e})}function xi(e,t){return new wn({check:`string_format`,format:`starts_with`,...w(t),prefix:e})}function Si(e,t){return new Tn({check:`string_format`,format:`ends_with`,...w(t),suffix:e})}function L(e){return new En({check:`overwrite`,tx:e})}function Ci(e){return L(t=>t.normalize(e))}function wi(){return L(e=>e.trim())}function Ti(){return L(e=>e.toLowerCase())}function Ei(){return L(e=>e.toUpperCase())}function Di(){return L(e=>We(e))}function Oi(e,t,n){return new e({type:`array`,element:t,...w(n)})}function ki(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...w(n)})}function Ai(e,t){let n=ji(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(D(e,t.value,n._bio.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,r.input??=t.value,r.inst??=n,r.continue??=!n._bio.def.abort,t.issues.push(D(r))}},e(t.value,t)),t);return n}function ji(e,t){let n=new O({check:`custom`,...w(t)});return n._bio.check=e,n}var Mi=new WeakSet([Object.prototype,Error.prototype]);function R(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get(){let e=n(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0})}})}var z=h(`BioError`,(e,t)=>{yt.init(e,t),e.name=`BioError`;let n=Object.getPrototypeOf(e);Mi.has(n)||(Mi.add(n),R(n,`format`,e=>t=>St(e,t)),R(n,`flatten`,e=>t=>xt(e,t)),R(n,`addIssue`,e=>t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,Re,2)}),R(n,`addIssues`,e=>t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,Re,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},{Parent:Error}),Ni=Ct(z),Pi=wt(z),Fi=Tt(z),Ii=Et(z),Li=Dt(z),Ri=Ot(z),zi=kt(z),Bi=At(z),Vi=jt(z),Hi=Mt(z),Ui=Nt(z),Wi=Pt(z),B=ut,Gi=dt,V=h(`BioType`,(e,t)=>{j.init(e,t),e.def=t,e.type=t.type,B(e,`check`,Ki),Gi(e,`parse`,qi);let n=Object.getPrototypeOf(e);return`description`in n||(Object.defineProperty(n,"description",{configurable:!0,get(){return F.get(this)?.description}}),Object.defineProperty(n,"_def",{configurable:!0,get(){return this._bio.def}})),e});function Ki(){return{check(...e){let t=this.def;return this.clone(b(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_bio:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return C(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(co(e,t))},superRefine(e,t){return this.check(lo(e,t))},overwrite(e){return this.check(L(e))},optional(){return Wa(this)},exactOptional(){return Ka(this)},nullable(){return Ja(this)},nullish(){return Wa(Ja(this))},nonoptional(e){return eo(this,e)},array(){return ja(this)},or(e){return Ia([this,e])},and(e){return Ra(this,e)},transform(e){return io(this,Ha(e))},default(e){return Xa(this,e)},prefault(e){return Qa(this,e)},catch(e){return no(this,e)},pipe(e){return io(this,e)},readonly(){return oo(this)},describe(e){let t=this.clone();return F.add(t,{description:e}),t},meta(...e){if(e.length===0)return F.get(this);let t=this.clone();return F.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e){return e(this)}}}function qi(){return{parse:e=>{let t=(n,r)=>Ni(e,n,r,{callee:t});return t},parseAsync:e=>{let t=async(n,r)=>Pi(e,n,r,{callee:t});return t},safeParse:e=>(t,n)=>Fi(e,t,n),safeParseAsync:e=>async(t,n)=>Ii(e,t,n),spa:e=>e.safeParseAsync,encode:e=>(t,n)=>Li(e,t,n),decode:e=>(t,n)=>Ri(e,t,n),encodeAsync:e=>async(t,n)=>zi(e,t,n),decodeAsync:e=>async(t,n)=>Bi(e,t,n),safeEncode:e=>(t,n)=>Vi(e,t,n),safeDecode:e=>(t,n)=>Hi(e,t,n),safeEncodeAsync:e=>async(t,n)=>Ui(e,t,n),safeDecodeAsync:e=>async(t,n)=>Wi(e,t,n)}}var Ji=h(`_BioString`,(e,t)=>{Dn.init(e,t),V.init(e,t);let n=e._bio.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,B(e,`regex`,Yi)});function Yi(){return{regex(...e){return this.check(_i(...e))},includes(...e){return this.check(bi(...e))},startsWith(...e){return this.check(xi(...e))},endsWith(...e){return this.check(Si(...e))},min(...e){return this.check(I(...e))},max(...e){return this.check(hi(...e))},length(...e){return this.check(gi(...e))},nonempty(...e){return this.check(I(1,...e))},lowercase(e){return this.check(vi(e))},uppercase(e){return this.check(yi(e))},trim(){return this.check(wi())},normalize(...e){return this.check(Ci(...e))},toLowerCase(){return this.check(Ti())},toUpperCase(){return this.check(Ei())},slugify(){return this.check(Di())}}}var Xi=h(`BioString`,(e,t)=>{Dn.init(e,t),Ji.init(e,t),B(e,`email`,Zi)});function Zi(){return{email(e){return this.check(Pr(na,e))},url(e){return this.check(Br(ia,e))},jwt(e){return this.check(ti(ya,e))},emoji(e){return this.check(Vr(aa,e))},guid(e){return this.check(Fr(ra,e))},uuid(e){return this.check(Ir(W,e))},uuidv4(e){return this.check(Lr(W,e))},uuidv6(e){return this.check(Rr(W,e))},uuidv7(e){return this.check(zr(W,e))},nanoid(e){return this.check(Hr(oa,e))},cuid(e){return this.check(Ur(sa,e))},cuid2(e){return this.check(Wr(ca,e))},ulid(e){return this.check(Gr(la,e))},base64(e){return this.check(Qr(ga,e))},base64url(e){return this.check($r(_a,e))},xid(e){return this.check(Kr(ua,e))},ksuid(e){return this.check(qr(da,e))},ipv4(e){return this.check(Jr(fa,e))},ipv6(e){return this.check(Yr(pa,e))},cidrv4(e){return this.check(Xr(ma,e))},cidrv6(e){return this.check(Zr(ha,e))},e164(e){return this.check(ei(va,e))},datetime(e){return this.check(ni(Qi,e))},date(e){return this.check(ri($i,e))},time(e){return this.check(ii(ea,e))},duration(e){return this.check(ai(ta,e))}}}function H(e){return Nr(Xi,e)}var U=h(`BioStringFormat`,(e,t)=>{M.init(e,t),Ji.init(e,t)}),Qi=h(`BioISODateTime`,(e,t)=>{zn.init(e,t),U.init(e,t)}),$i=h(`BioISODate`,(e,t)=>{Bn.init(e,t),U.init(e,t)}),ea=h(`BioISOTime`,(e,t)=>{Vn.init(e,t),U.init(e,t)}),ta=h(`BioISODuration`,(e,t)=>{Hn.init(e,t),U.init(e,t)}),na=h(`BioEmail`,(e,t)=>{An.init(e,t),U.init(e,t)}),ra=h(`BioGUID`,(e,t)=>{On.init(e,t),U.init(e,t)}),W=h(`BioUUID`,(e,t)=>{kn.init(e,t),U.init(e,t)}),ia=h(`BioURL`,(e,t)=>{jn.init(e,t),U.init(e,t)}),aa=h(`BioEmoji`,(e,t)=>{Mn.init(e,t),U.init(e,t)}),oa=h(`BioNanoID`,(e,t)=>{Nn.init(e,t),U.init(e,t)}),sa=h(`BioCUID`,(e,t)=>{Pn.init(e,t),U.init(e,t)}),ca=h(`BioCUID2`,(e,t)=>{Fn.init(e,t),U.init(e,t)}),la=h(`BioULID`,(e,t)=>{In.init(e,t),U.init(e,t)}),ua=h(`BioXID`,(e,t)=>{Ln.init(e,t),U.init(e,t)}),da=h(`BioKSUID`,(e,t)=>{Rn.init(e,t),U.init(e,t)}),fa=h(`BioIPv4`,(e,t)=>{Un.init(e,t),U.init(e,t)}),pa=h(`BioIPv6`,(e,t)=>{Wn.init(e,t),U.init(e,t)}),ma=h(`BioCIDRv4`,(e,t)=>{Gn.init(e,t),U.init(e,t)}),ha=h(`BioCIDRv6`,(e,t)=>{Kn.init(e,t),U.init(e,t)}),ga=h(`BioBase64`,(e,t)=>{Jn.init(e,t),U.init(e,t)}),_a=h(`BioBase64URL`,(e,t)=>{Xn.init(e,t),U.init(e,t)}),va=h(`BioE164`,(e,t)=>{Zn.init(e,t),U.init(e,t)}),ya=h(`BioJWT`,(e,t)=>{$n.init(e,t),U.init(e,t)}),ba=h(`BioNumber`,(e,t)=>{er.init(e,t),V.init(e,t),B(e,`gt`,xa);let n=e._bio.bag;e.minValue=Math.max(n.minimum??-1/0,n.exclusiveMinimum??-1/0)??null,e.maxValue=Math.min(n.maximum??1/0,n.exclusiveMaximum??1/0)??null,e.isInt=(n.format??``).includes(`int`)||Number.isSafeInteger(n.multipleOf??.5),e.isFinite=!0,e.format=n.format??null});function xa(){return{gt(e,t){return this.check(fi(e,t))},gte(e,t){return this.check(pi(e,t))},min(e,t){return this.check(pi(e,t))},lt(e,t){return this.check(ui(e,t))},lte(e,t){return this.check(di(e,t))},max(e,t){return this.check(di(e,t))},int(e){return this.check(wa(e))},safe(e){return this.check(wa(e))},positive(e){return this.check(fi(0,e))},nonnegative(e){return this.check(pi(0,e))},negative(e){return this.check(ui(0,e))},nonpositive(e){return this.check(di(0,e))},multipleOf(e,t){return this.check(mi(e,t))},step(e,t){return this.check(mi(e,t))},finite(){return this}}}function Sa(e){return oi(ba,e)}var Ca=h(`BioNumberFormat`,(e,t)=>{tr.init(e,t),ba.init(e,t)});function wa(e){return si(Ca,e)}var Ta=h(`BioUnknown`,(e,t)=>{nr.init(e,t),V.init(e,t)});function Ea(){return ci(Ta)}var Da=h(`BioNever`,(e,t)=>{rr.init(e,t),V.init(e,t)});function Oa(e){return li(Da,e)}var ka=h(`BioArray`,(e,t)=>{ar.init(e,t),V.init(e,t),e.element=t.element,B(e,`min`,Aa)});function Aa(){return{min(e,t){return this.check(I(e,t))},nonempty(e){return this.check(I(1,e))},max(e,t){return this.check(hi(e,t))},length(e,t){return this.check(gi(e,t))},unwrap(){return this.element}}}function ja(e,t){return Oi(ka,e,t)}var Ma=h(`BioObject`,(e,t)=>{cr.init(e,t),V.init(e,t),v(e,`shape`,()=>t.shape),B(e,`keyof`,Na)});function Na(){return{keyof(){return Ba(Object.keys(this._bio.def.shape))},catchall(e){return this.clone({...this._bio.def,catchall:e})},passthrough(){return this.clone({...this._bio.def,catchall:Ea()})},loose(){return this.clone({...this._bio.def,catchall:Ea()})},strict(){return this.clone({...this._bio.def,catchall:Oa()})},strip(){return this.clone({...this._bio.def,catchall:void 0})},extend(e){return $e(this,e)},safeExtend(e){return et(this,e)},merge(e){return tt(this,e)},pick(e){return Ze(this,e)},omit(e){return Qe(this,e)},partial(...e){return nt(Ua,this,e[0])},required(...e){return rt($a,this,e[0])}}}function Pa(e,t){return new Ma({type:`object`,shape:e??{},...w(t)})}var Fa=h(`BioUnion`,(e,t)=>{ur.init(e,t),V.init(e,t),e.options=t.options});function Ia(e,t){return new Fa({type:`union`,options:e,...w(t)})}var La=h(`BioIntersection`,(e,t)=>{dr.init(e,t),V.init(e,t)});function Ra(e,t){return new La({type:`intersection`,left:e,right:t})}var za=h(`BioEnum`,(e,t)=>{mr.init(e,t),V.init(e,t),e.enum=t.entries,e.options=Object.values(t.entries);let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new za({...t,checks:[],...w(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new za({...t,checks:[],...w(r),entries:i})}});function Ba(e,t){return new za({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...w(t)})}var Va=h(`BioTransform`,(e,t)=>{hr.init(e,t),V.init(e,t),e._bio.parse=(n,r)=>{if(r.direction===`backward`)throw new Fe(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(D(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,t.input??=n.value,t.inst??=e,n.issues.push(D(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n.fallback=!0,n)):(n.value=i,n.fallback=!0,n)}});function Ha(e){return new Va({type:`transform`,transform:e})}var Ua=h(`BioOptional`,(e,t)=>{_r.init(e,t),V.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Wa(e){return new Ua({type:`optional`,innerType:e})}var Ga=h(`BioExactOptional`,(e,t)=>{vr.init(e,t),V.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Ka(e){return new Ga({type:`optional`,innerType:e})}var qa=h(`BioNullable`,(e,t)=>{yr.init(e,t),V.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Ja(e){return new qa({type:`nullable`,innerType:e})}var Ya=h(`BioDefault`,(e,t)=>{br.init(e,t),V.init(e,t),e.unwrap=()=>e._bio.def.innerType,e.removeDefault=e.unwrap});function Xa(e,t){return new Ya({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():qe(t)}})}var Za=h(`BioPrefault`,(e,t)=>{Sr.init(e,t),V.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Qa(e,t){return new Za({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():qe(t)}})}var $a=h(`BioNonOptional`,(e,t)=>{Cr.init(e,t),V.init(e,t),e.unwrap=()=>e._bio.def.innerType});function eo(e,t){return new $a({type:`nonoptional`,innerType:e,...w(t)})}var to=h(`BioCatch`,(e,t)=>{Tr.init(e,t),V.init(e,t),e.unwrap=()=>e._bio.def.innerType,e.removeCatch=e.unwrap});function no(e,t){return new to({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:()=>t})}var ro=h(`BioPipe`,(e,t)=>{Er.init(e,t),V.init(e,t),e.in=t.in,e.out=t.out});function io(e,t){return new ro({type:`pipe`,in:e,out:t})}var ao=h(`BioReadonly`,(e,t)=>{Dr.init(e,t),V.init(e,t),e.unwrap=()=>e._bio.def.innerType});function oo(e){return new ao({type:`readonly`,innerType:e})}var so=h(`BioCustom`,(e,t)=>{kr.init(e,t),V.init(e,t)});function co(e,t={}){return ki(so,e,t)}function lo(e,t){return Ai(e,t)}function uo(e){return ri($i,e)}function G(e,t){return H().refine(t=>t.trim()===``||e(t),{error:t})}var fo=Sa().int().min(0).max(1),po=Pa({id:Sa().int(),nome:H(),telefone:G(f,`telefone_duvidoso`),email:G(De,`email_duvidoso`),link:H(),comentario:H(),nome_secretario:H(),telefone_secretario:G(f,`telefone_duvidoso`),tipo_sanguineo:H(),doador_orgaos:fo,alergias:H(),medicamentos_em_uso:H(),observacoes_medicas:H(),gravida:fo,gravidez_meses:H(),data_prevista_parto:G(e=>uo().safeParse(e.trim()).success,`data_duvidosa`),recusa_transfusao:fo,fracoes_aceitas:H(),contato_emergencia:H(),contato_emergencia_telefone:G(f,`telefone_duvidoso`),nome_colih:H(),telefone_colih:G(f,`telefone_duvidoso`),cartao_sus_numero:H(),cpf_titular:G(le,`cpf_duvidoso`),upa_referencia:H(),dpa_assinado_em:G(e=>uo().safeParse(e.trim()).success,`data_duvidosa`),congregacao:H(),grupo:H()}),mo=[`telefone`,`email`,`telefone_secretario`,`data_prevista_parto`,`dpa_assinado_em`,`contato_emergencia_telefone`,`telefone_colih`,`cpf_titular`];function ho(e,t){let n=t.trim();if(n===``)return;let r=po.shape[e].safeParse(n);return r.success?void 0:r.error.issues[0]?.message}var go=1e3,K={...he},q=``,_o,vo=new se(`perfil`,async()=>{Ee(),K=await ye()});function yo(e){return e===`Desconhecido`?r.perfil.sangueDesconhecido:e}function bo(){q=r.acervo.salvando,d(),clearTimeout(_o),_o=setTimeout(()=>void xo(),go)}async function xo(){try{K=await be(K),q=r.acervo.salvoAs(c(Date.now()))}catch(e){console.error(`perfil: a gravação falhou.`,e),q=e instanceof xe?r.perfil.dataDuvidosa:e instanceof ve?r.perfil.cpfDuvidoso:ae(e)}d()}function J(e,t){K={...K,[e]:t},bo()}function So(e){return{telefone_duvidoso:r.perfil.telefoneDuvidoso,email_duvidoso:r.perfil.emailDuvidoso,cpf_duvidoso:r.perfil.cpfDuvidoso,data_duvidosa:r.perfil.dataDuvidosa}[e]??``}function Co(e){return mo.includes(e)}var wo=new Set,Y=new Map;function To(e){return Eo(e)||e===`cpf_titular`}function Eo(e){return Ce.includes(e)}function X(t,n,r=`text`,i){let a=To(t)?Y.get(t):void 0,o=a??String(K[t]??``),c=a!==void 0&&Eo(t)?`data_duvidosa`:Co(t)&&wo.has(t)?ho(t,o):void 0;return e`
    <kk-input
      type=${r}
      label=${n}
      help-text=${c===void 0?``:So(c)}
      autocomplete=${ke(i)}
      .value=${o}
      @kk-input=${e=>{let n=e.target.value;if(wo.delete(t),Eo(t)){if(n.trim()!==``&&!s(n.trim())){Y.set(t,n),d();return}Y.delete(t)}else if(t===`cpf_titular`){if(Se(n)){Y.set(t,n),d();return}Y.delete(t)}J(t,n)}}
      @kk-blur=${()=>{Co(t)&&!wo.has(t)&&(wo.add(t),d())}}
    ></kk-input>
  `}function Do(t,n){return e`
    <kk-textarea
      rows="2"
      resize="auto"
      label=${n}
      .value=${String(K[t]??``)}
      @kk-input=${e=>J(t,e.target.value)}
    ></kk-textarea>
  `}function Oo(t,n){return e`
    <kk-switch
      ?checked=${K[t]===1}
      @kk-change=${e=>J(t,+!!e.target.checked)}
    >
      ${n}
    </kk-switch>
  `}var Z=[`sobre`,`ice`,`acessibilidade`],ko={sobre:`#/perfil`,ice:`#/perfil/emergencia`,acessibilidade:`#/perfil/acessibilidade`};function Ao(e){return e===`ice`?r.perfil.abaIce:e===`acessibilidade`?r.perfil.abaAcessibilidade:r.perfil.abaSobre}var jo={sobre:`user`,ice:`heartbeat`,acessibilidade:`accessible`},Q=`sobre`,Mo=null;o(`perfil`,()=>{Mo=null});function No(e){let[t]=e.args;return t===`emergencia`?`ice`:t===`acessibilidade`?`acessibilidade`:`sobre`}function Po(e,t=!1){Q=e,history.replaceState(history.state,``,ko[e]),d(),t&&document.querySelector(`#perfil-aba-${e}`)?.focus()}function Fo(e){let t=Z.indexOf(Q),n=e.key===`ArrowRight`?Z[(t+1)%Z.length]:e.key===`ArrowLeft`?Z[(t-1+Z.length)%Z.length]:e.key===`Home`?Z[0]:e.key===`End`?Z[Z.length-1]:void 0;n!==void 0&&(e.preventDefault(),Po(n,!0))}function Io(){return e`
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
            @click=${()=>Po(t)}
            @keydown=${Fo}
          >
            <kk-icon name=${jo[t]}></kk-icon>
            ${Ao(t)}
          </button>
        `)}
    </div>
  `}function Lo(){return a.length<2?t:e`
    <h2 class="secao">${r.perfil.idiomaSecao}</h2>
    <kk-select
      label=${r.perfil.idioma}
      help-text=${r.perfil.idiomaAjuda}
      .value=${n()}
      @kk-change=${e=>{let t=e.target.value;t!==n()&&i(t).then(d)}}
    >
      ${a.map(({tag:t,nome:n})=>e`<kk-option value=${t} lang=${t}>${n}</kk-option>`)}
    </kk-select>
  `}function Ro(){return e`
    <div class="formulario">
      <p class="editor__status">${q}</p>

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

      ${Lo()}
    </div>
  `}function zo(){return e`
    <div class="formulario">
      <p class="perfil__ice-explica">
        <kk-icon name="heartbeat"></kk-icon>
        <span>${r.perfil.iceExplica}</span>
      </p>
      <p class="editor__status">${q}</p>

      <h2 class="secao">${r.perfil.saude}</h2>
      <kk-select
        label=${r.perfil.tipo_sanguineo}
        .value=${K.tipo_sanguineo}
        @kk-change=${e=>J(`tipo_sanguineo`,e.target.value)}
      >
        <kk-option value="">${r.perfil.selecione}</kk-option>
        ${ue.map(t=>e`<kk-option value=${t}>${yo(t)}</kk-option>`)}
      </kk-select>
      ${Oo(`doador_orgaos`,r.perfil.doador)}
      ${X(`alergias`,r.perfil.alergias)}
      ${Do(`medicamentos_em_uso`,r.perfil.medicamentos)}
      ${Do(`observacoes_medicas`,r.perfil.observacoes)}

      <h2 class="secao">${r.perfil.gestacao}</h2>
      ${Oo(`gravida`,r.perfil.gestante)}
      ${K.gravida===1?e`
            <div class="formulario__par">
              <kk-select
                label=${r.perfil.meses}
                .value=${K.gravidez_meses}
                @kk-change=${e=>J(`gravidez_meses`,e.target.value)}
              >
                <kk-option value="">—</kk-option>
                ${Array.from({length:9},(e,t)=>t+1).map(t=>e`<kk-option value=${String(t)}>${r.perfil.mes(t)}</kk-option>`)}
              </kk-select>
              ${X(`data_prevista_parto`,r.perfil.parto,`date`)}
            </div>
          `:t}

      <h2 class="secao">${r.perfil.dpa}</h2>
      ${ge(K)===``?t:e`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${r.perfil.dpaVencidoAviso(ge(K))}
            </kk-alert>
          `}
      ${Oo(`recusa_transfusao`,r.perfil.recusa)}
      ${K.recusa_transfusao===1?e`
            <kk-alert open variant="danger">
              <kk-icon slot="icon" name="alert-octagon"></kk-icon>
              <strong>${r.perfil.naoApliqueSangue}</strong>
            </kk-alert>
          `:t}
      ${Do(`fracoes_aceitas`,r.perfil.fracoes)}
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
  `}function Bo(t){let n=t.args.join(`/`);return n!==Mo&&(Q=No(t),Mo=n),e`
    ${Io()}
    <div id="perfil-painel" role="tabpanel" aria-labelledby=${`perfil-aba-${Q}`}>
      ${Q===`ice`?zo():Q===`acessibilidade`?Ne():Ro()}
    </div>
  `}function Vo(){let n=we(K),i=pe(K);return e`
    <div class="cartao-contato">
      <h2 class="cartao-contato__nome">${K.nome||r.perfil.semNome}</h2>
      <p class="cartao-contato__telefone">${K.telefone}</p>

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

      ${K.comentario===``?t:e`<p class="cartao-contato__nota">${K.comentario}</p>`}

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
                @click=${()=>void ce(K.nome||r.perfil.semNome,me(K))}
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
  `}function Ho(n,r,i){return r===``?t:e`
    <div class="ice__contato">
      <span><strong>${n}</strong> ${r}</span>
      ${i===``?t:e`
            <kk-button size="small" variant="success" outline href=${`tel:${i}`}>
              <kk-icon slot="prefix" name="phone"></kk-icon>${i}
            </kk-button>
          `}
    </div>
  `}function Uo(){let n=[K.gravidez_meses===``?``:r.perfil.mesesGestacao(Number(K.gravidez_meses)),de(K)===``?``:r.perfil.partoEm(de(K))].filter(e=>e!==``).join(` · `),i=fe(K);return e`
    ${K.recusa_transfusao===1?e`
          <kk-alert open variant="danger" class="ice__alerta">
            <kk-icon slot="icon" name="alert-octagon"></kk-icon>
            <strong>${r.perfil.naoApliqueSangue}</strong>
            <span>${r.perfil.portadorDiretriz}</span>
          </kk-alert>
        `:t}

    ${K.gravida===1?e`
          <kk-alert open variant="warning" class="ice__alerta">
            <kk-icon slot="icon" name="alert-triangle"></kk-icon>
            <strong>${r.perfil.gestanteMaiusculo}</strong>
            <span>${n}</span>
          </kk-alert>
        `:t}

    ${_e(K)?e`
          <div class="ice">
            <h2 class="ice__nome">${K.nome||`—`}</h2>
            <div class="ice__grade">
              ${$(r.perfil.tipo_sanguineo,yo(K.tipo_sanguineo))}
              ${$(r.perfil.doador,K.doador_orgaos===1?r.perfil.sim:``)}
              ${$(r.perfil.alergias,K.alergias)}
              ${$(r.perfil.gestante,K.gravida===1?n:``)}
            </div>
            ${$(r.perfil.medicamentos,K.medicamentos_em_uso)}
            ${$(r.perfil.observacoes,K.observacoes_medicas)}
            ${$(r.perfil.fracoes,K.fracoes_aceitas)}
          </div>

          ${K.contato_emergencia===``&&K.nome_colih===``?t:e`
                <div class="ice">
                  ${Ho(r.perfil.emergencia,K.contato_emergencia,K.contato_emergencia_telefone)}
                  ${Ho(r.perfil.colih,K.nome_colih,K.telefone_colih)}
                </div>
              `}

          <div class="ice">
            ${$(r.perfil.sus,K.cartao_sus_numero)}
            ${$(r.perfil.cpf,K.cpf_titular)}
            ${$(r.perfil.upa,K.upa_referencia)}
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
  `}var Wo={voltarPara(e){let[t]=e.args;return t===`cartao`||t===`ice`?`perfil`:`home`},aoVoltar(e){let[t]=e.args;return t!==`cartao`&&t!==`ice`?!1:(history.back(),!0)},titulo(e){let[t]=e.args;if(t===`cartao`)return r.perfil.tituloCartao;if(t===`ice`)return r.perfil.tituloFicha},conteudo(e){let t=vo.espera();if(t!==null)return t;let[n]=e.args;return n===`cartao`?Vo():n===`ice`?Uo():Bo(e)}};export{Wo as telaPerfil};