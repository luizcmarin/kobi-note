import{t as e}from"./defineProperty-BbfpZ9Tg.js";import{i as t,t as n}from"./lit-CI_s7elC.js";import{i as r,n as i,r as a,t as o}from"./strings-V1DWQvwW.js";import{n as s}from"./data-DbOIIZMP.js";import{i as c}from"./formato-BoZO7uRM.js";import{n as l}from"./rotas-CR8kk0YZ.js";import{c as ee,r as u,s as te,t as ne,u as re}from"./acessibilidade-0dW0_ixm.js";import{C as ie,O as ae,Q as oe,Z as se,ct as d}from"./index-DjPQ20Ch.js";import{t as ce}from"./carga-4VW0gvij.js";import{t as le}from"./compartilhar-BxWhJPuO.js";import{_ as ue,a as de,b as f,d as fe,f as pe,g as me,h as he,i as ge,l as _e,m as ve,n as ye,o as be,p as xe,r as Se,s as Ce,t as we,u as Te,y as Ee}from"./dados-DQrL_1Up.js";import{t as De}from"./qr-Bm_SiCtQ.js";var Oe=e=>e??n;function ke(e){te(e),d()}function p(e,n,r){return t`
    <kk-switch
      class="a11y__opcao"
      help-text=${r}
      ?checked=${u()[e]}
      @kk-change=${t=>{ke({[e]:t.target.checked})}}
    >
      ${n}
    </kk-switch>
  `}function Ae(){let e=u().texto;return t`
    <div class="a11y__opcao">
      <span class="a11y__rotulo" id="a11y-texto">${i.acessibilidade.texto}</span>
      <div class="a11y__graus" role="radiogroup" aria-labelledby="a11y-texto">
        ${re.map(n=>t`
            <button
              type="button"
              class="chip a11y__grau"
              role="radio"
              aria-checked=${n===e}
              ?data-ativo=${n===e}
              style="font-size: ${n/100}em"
              @click=${()=>ke({texto:n})}
            >
              ${i.acessibilidade.grau(n)}
            </button>
          `)}
      </div>
      <p class="a11y__ajuda">${i.acessibilidade.textoAjuda}</p>
    </div>
  `}function je(){return t`
    <kk-switch
      class="a11y__opcao"
      help-text=${i.acessibilidade.temaAjuda}
      ?checked=${oe()===`escuro`}
      @kk-change=${e=>{se(e.target.checked?`escuro`:`claro`),d()}}
    >
      ${i.acessibilidade.tema}
    </kk-switch>
  `}function Me(e,n,r){return t`
    <div class="a11y__sistema">
      <kk-icon name=${e}></kk-icon>
      <div>
        <strong>${n}</strong>
        <p>${r}</p>
      </div>
    </div>
  `}function Ne(){let e=matchMedia(`(prefers-reduced-motion: reduce)`).matches,r=ee();return t`
    <div class="a11y">
      <p class="a11y__intro">${i.acessibilidade.intro}</p>

      <h2 class="secao">
        <kk-icon name="eye"></kk-icon>
        ${i.acessibilidade.visao}
      </h2>
      ${Ae()}
      ${je()}
      ${p(`contraste`,i.acessibilidade.contraste,i.acessibilidade.contrasteAjuda)}
      ${p(`sublinhar`,i.acessibilidade.sublinhar,i.acessibilidade.sublinharAjuda)}
      ${p(`espacamento`,i.acessibilidade.espacamento,i.acessibilidade.espacamentoAjuda)}

      <h2 class="secao">
        <kk-icon name="player-pause"></kk-icon>
        ${i.acessibilidade.movimentoSecao}
      </h2>
      ${p(`movimento`,i.acessibilidade.movimento,i.acessibilidade.movimentoAjuda)}
      ${p(`semRelogio`,i.acessibilidade.semRelogio,i.acessibilidade.semRelogioAjuda)}
      ${e?t`<p class="a11y__nota">${i.acessibilidade.movimentoSistema}</p>`:n}

      <h2 class="secao">
        <kk-icon name="hand-finger"></kk-icon>
        ${i.acessibilidade.toqueSecao}
      </h2>
      ${p(`alvos`,i.acessibilidade.alvos,i.acessibilidade.alvosAjuda)}
      ${p(`foco`,i.acessibilidade.foco,i.acessibilidade.focoAjuda)}

      <h2 class="secao">
        <kk-icon name="ear"></kk-icon>
        ${i.acessibilidade.avisosSecao}
      </h2>
      ${r?p(`vibrar`,i.acessibilidade.vibrar,i.acessibilidade.vibrarAjuda):t`<p class="a11y__nota">${i.acessibilidade.semVibracao}</p>`}

      <h2 class="secao">
        <kk-icon name="device-mobile"></kk-icon>
        ${i.acessibilidade.sistemaSecao}
      </h2>
      ${Me(`speakerphone`,i.acessibilidade.leitorTitulo,i.acessibilidade.leitorTexto)}
      ${Me(`volume`,i.acessibilidade.ouvirTitulo,i.acessibilidade.ouvirTexto)}
      ${Me(`typography`,i.acessibilidade.fonteTitulo,i.acessibilidade.fonteTexto)}
      ${Me(`zoom-in`,i.acessibilidade.zoomTitulo,i.acessibilidade.zoomTexto)}

      <div class="a11y__normas">
        <kk-icon name="accessible"></kk-icon>
        <p>${i.acessibilidade.normas}</p>
      </div>

      <kk-button
        class="a11y__restaurar"
        variant="neutral"
        outline
        @click=${()=>{ke(ne),ie(i.acessibilidade.restaurado,`neutral`)}}
      >
        <kk-icon slot="prefix" name="refresh"></kk-icon>
        ${i.acessibilidade.restaurar}
      </kk-button>
    </div>
  `}var Pe={value:void 0,enumerable:!1};function m(e,t,n){function r(n,r){if(!n._bio){Pe.value={def:r,constr:o,traits:new Set};try{Object.defineProperty(n,"_bio",Pe)}finally{Pe.value=void 0}}if(n._bio.traits.has(e))return;n._bio.traits.add(e),t(n,r);let i=o.prototype;for(let e in i)Object.hasOwn(i,e)&&(e in n||(n[e]=i[e].bind(n)))}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:e});function o(e){let t=n?.Parent?new a:this;r(t,e);let i=t._bio.deferred;if(i){for(let e of i)e();t._bio.deferred=void 0}return t}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._bio?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}var h=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},Fe=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`BioEncodeError`}},Ie={};function g(e){return e&&Object.assign(Ie,e),Ie}function Le(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function Re(e,t){return typeof t==`bigint`?t.toString():t}function ze(e){return{get value(){{let t=e();return Object.defineProperty(this,"value",{value:t}),t}}}}function Be(e){return e==null}function Ve(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function He(e,t){let n=e/t,r=Math.round(n),i=2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}var Ue=Symbol(`evaluating`);function _(e,t,n){let r;Object.defineProperty(e,t,{get(){if(r!==Ue)return r===void 0&&(r=Ue,r=n()),r},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function v(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function y(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function We(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var Ge=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function Ke(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function b(e){if(Ke(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return Ke(n)!==!1&&Object.hasOwn(n,`isPrototypeOf`)!==!1}function qe(e){return b(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var Je=new Set([`string`,`number`,`symbol`]);function x(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function S(e,t,n){let r=new e._bio.constr(t??e._bio.def);return(!t||n?.parent)&&(r._bio.parent=e),r}function C(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function Ye(e){return Object.keys(e).filter(t=>e[t]._bio.optin===`optional`&&e[t]._bio.optout===`optional`)}var Xe={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function Ze(e,t){let n=e._bio.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);return S(e,y(e._bio.def,{get shape(){let e={};for(let r in t){if(!Object.hasOwn(n.shape,r))throw Error(`Unrecognized key: "${r}"`);t[r]&&v(e,r,n.shape[r])}return v(this,`shape`,e),e},checks:[]}))}function Qe(e,t){let n=e._bio.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);return S(e,y(e._bio.def,{get shape(){let r={...e._bio.def.shape};for(let e in t){if(!Object.hasOwn(n.shape,e))throw Error(`Unrecognized key: "${e}"`);t[e]&&delete r[e]}return v(this,`shape`,r),r},checks:[]}))}function $e(e,t){if(!b(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._bio.def.checks;if(n&&n.length>0){let n=e._bio.def.shape;for(let e in t)if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return S(e,y(e._bio.def,{get shape(){let n={...e._bio.def.shape,...t};return v(this,`shape`,n),n}}))}function et(e,t){if(!b(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return S(e,y(e._bio.def,{get shape(){let n={...e._bio.def.shape,...t};return v(this,`shape`,n),n}}))}function tt(e,t){if(!t?._bio?.def)throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(e._bio.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);return S(e,y(e._bio.def,{get shape(){let n={...e._bio.def.shape,...t._bio.def.shape};return v(this,`shape`,n),n},get catchall(){return t._bio.def.catchall},checks:t._bio.def.checks??[]}))}function nt(e,t,n){let r=t._bio.def.checks;if(r&&r.length>0)throw Error(`.partial() cannot be used on object schemas containing refinements`);return S(t,y(t._bio.def,{get shape(){let r=t._bio.def.shape,i={...r};if(n)for(let t in n){if(!Object.hasOwn(r,t))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t])}else for(let t in r)i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t];return v(this,`shape`,i),i},checks:[]}))}function rt(e,t,n){return S(t,y(t._bio.def,{get shape(){let r=t._bio.def.shape,i={...r};if(n)for(let t in n){if(!Object.hasOwn(i,t))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=new e({type:`nonoptional`,innerType:r[t]}))}else for(let t in r)i[t]=new e({type:`nonoptional`,innerType:r[t]});return v(this,`shape`,i),i}}))}function w(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function it(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function at(e,t){return t.map(t=>(t.path??=[],t.path.unshift(e),t))}function ot(e){return typeof e==`string`?e:e?.message}function T(e,t,n){let r=e.message?e.message:ot(e.inst?._bio.def?.error?.(e))??ot(t?.error?.(e))??ot(n.customError?.(e))??e.code,{inst:i,continue:a,input:o,...s}=e;return s.path??=[],s.message=r,t?.reportInput&&(s.input=o),s}function st(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function E(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}function ct(e,t){let n=Object.getPrototypeOf(e);return t in n?void 0:n}function lt(e,t,n){Object.defineProperty(e,t,{configurable:!0,get(){let e=n(this);return Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:!0,value:e}),e},set(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,enumerable:!0,value:e})}})}function ut(e,t,n){let r=ct(e,t);if(!r)return;let i=n();for(let e in i){let t=i[e];lt(r,e,e=>t.bind(e))}}function dt(e,t,n){let r=ct(e,t);if(!r)return;let i=n();for(let e in i)lt(r,e,i[e])}function ft(){let e=this._bio;return e.message??=JSON.stringify(e.def,Re,2),e.message}function pt(e){this._bio.message=e}var mt={get:ft,set:pt,enumerable:!0,configurable:!0},ht={value:void 0,enumerable:!1},gt={value:void 0,enumerable:!1},_t=new WeakSet([Object.prototype,Error.prototype]),vt=m(`$BioError`,(e,t)=>{e.name=`$BioError`,ht.value=e._bio,Object.defineProperty(e,"_bio",ht),gt.value=t,Object.defineProperty(e,"issues",gt),ht.value=void 0,gt.value=void 0,Object.defineProperty(e,"message",mt);let n=Object.getPrototypeOf(e);_t.has(n)||(_t.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){let e=()=>this.message;return Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,"toString",{value:e,configurable:!0,writable:!0})}}))});function yt(e,t,n){return Object.hasOwn(e,t)||(t===`__proto__`?Object.defineProperty(e,t,{value:n(),writable:!0,enumerable:!0,configurable:!0}):e[t]=n()),e[t]}function bt(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?yt(n,i.path[0],()=>[]).push(t(i)):r.push(t(i));return{formErrors:r,fieldErrors:n}}function xt(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i],o=i===e.length-1;if(n===`_errors`){o&&r._errors.push(t(a)),i++;continue}Object.hasOwn(r,n)||Object.defineProperty(r,n,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});let s=r[n];o&&s._errors.push(t(a)),r=s,i++}}}};return r(e),n}var St=e=>(t,n,r,i)=>{let a=r?{...r,async:!1}:{async:!1},o=t._bio.run({value:n,issues:[]},a);if(o instanceof Promise)throw new h;if(o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>T(e,a,g())));throw Ge(t,i?.callee),t}return o.value},Ct=e=>async(t,n,r,i)=>{let a=r?{...r,async:!0}:{async:!0},o=t._bio.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>T(e,a,g())));throw Ge(t,i?.callee),t}return o.value},wt=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._bio.run({value:n,issues:[]},i);if(a instanceof Promise)throw new h;return a.issues.length?{success:!1,error:new(e??vt)(a.issues.map(e=>T(e,i,g())))}:{success:!0,data:a.value}},Tt=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._bio.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>T(e,i,g())))}:{success:!0,data:a.value}},Et=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return St(e)(t,n,i)},Dt=e=>(t,n,r)=>St(e)(t,n,r),Ot=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Ct(e)(t,n,i)},kt=e=>async(t,n,r)=>Ct(e)(t,n,r),At=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return wt(e)(t,n,i)},jt=e=>(t,n,r)=>wt(e)(t,n,r),Mt=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Tt(e)(t,n,i)},Nt=e=>async(t,n,r)=>Tt(e)(t,n,r),Pt=/^[cC][0-9a-z]{6,}$/,Ft=/^[0-9a-z]+$/,It=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Lt=/^[0-9a-vA-V]{20}$/,Rt=/^[A-Za-z0-9]{27}$/,zt=/^[a-zA-Z0-9_-]{21}$/,Bt=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Vt=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Ht=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Ut=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/,Wt=`^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;function Gt(){return new RegExp(Wt,`u`)}var Kt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,qt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Jt=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Yt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Xt=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Zt=/^[A-Za-z0-9_-]*$/,Qt=/^https?$/,$t=/^\+[1-9]\d{6,14}$/,en=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;function tn(e){return RegExp(`^${e}$`)}var nn=tn(en);function rn(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function an(e){return RegExp(`^${rn(e)}$`)}function on(e){let t=rn({precision:e.precision}),n=[`Z`];e.local&&n.push(``),e.offset&&n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let r=`${t}(?:${n.join(`|`)})`;return RegExp(`^${en}T(?:${r})$`)}var sn=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??``}}`:`[\\s\\S]*`;return RegExp(`^${t}$`)},cn=/^-?\d+$/,ln=/^-?\d+(?:\.\d+)?$/,un=/^[^A-Z]*$/,dn=/^[^a-z]*$/,D=m(`$BioCheck`,(e,t)=>{e._bio??={},e._bio.def=t,e._bio.onattach??=[]}),O={number:`number`,bigint:`bigint`,object:`date`},fn=m(`$BioCheckLessThan`,(e,t)=>{D.init(e,t);let n=O[typeof t.value];e._bio.onattach.push(e=>{let n=e._bio.bag,r=(t.inclusive?n.maximum:n.exclusiveMaximum)??1/0;t.value<r&&(t.inclusive?n.maximum=t.value:n.exclusiveMaximum=t.value)}),e._bio.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:O[typeof r.value]??n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),pn=m(`$BioCheckGreaterThan`,(e,t)=>{D.init(e,t);let n=O[typeof t.value];e._bio.onattach.push(e=>{let n=e._bio.bag,r=(t.inclusive?n.minimum:n.exclusiveMinimum)??-1/0;t.value>r&&(t.inclusive?n.minimum=t.value:n.exclusiveMinimum=t.value)}),e._bio.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:O[typeof r.value]??n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),mn=m(`$BioCheckMultipleOf`,(e,t)=>{D.init(e,t),e._bio.onattach.push(e=>{e._bio.bag.multipleOf??=t.value}),e._bio.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?n.value%t.value===BigInt(0):He(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),hn=m(`$BioCheckNumberFormat`,(e,t)=>{D.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=Xe[t.format];e._bio.onattach.push(e=>{let r=e._bio.bag;r.format=t.format,r.minimum=i,r.maximum=a,n&&(r.pattern=cn)}),e._bio.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),gn=m(`$BioCheckMaxLength`,(e,t)=>{D.init(e,t),e._bio.def.when??=e=>{let t=e.value;return!Be(t)&&t.length!==void 0},e._bio.onattach.push(e=>{let n=e._bio.bag.maximum??1/0;t.maximum<n&&(e._bio.bag.maximum=t.maximum)}),e._bio.check=n=>{let r=n.value;if(r.length<=t.maximum)return;let i=st(r);n.issues.push({origin:i,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),_n=m(`$BioCheckMinLength`,(e,t)=>{D.init(e,t),e._bio.def.when??=e=>{let t=e.value;return!Be(t)&&t.length!==void 0},e._bio.onattach.push(e=>{let n=e._bio.bag.minimum??-1/0;t.minimum>n&&(e._bio.bag.minimum=t.minimum)}),e._bio.check=n=>{let r=n.value;if(r.length>=t.minimum)return;let i=st(r);n.issues.push({origin:i,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),vn=m(`$BioCheckLengthEquals`,(e,t)=>{D.init(e,t),e._bio.def.when??=e=>{let t=e.value;return!Be(t)&&t.length!==void 0},e._bio.onattach.push(e=>{let n=e._bio.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._bio.check=n=>{let r=n.value,i=r.length;if(i===t.length)return;let a=st(r),o=i>t.length;n.issues.push({origin:a,...o?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),k=m(`$BioCheckStringFormat`,(e,t)=>{D.init(e,t),e._bio.onattach.push(e=>{let n=e._bio.bag;n.format=t.format,t.pattern&&(n.patterns??=new Set,n.patterns.add(t.pattern))}),t.pattern?e._bio.check??=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}:e._bio.check??=()=>{}}),yn=m(`$BioCheckRegex`,(e,t)=>{k.init(e,t),e._bio.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),bn=m(`$BioCheckLowerCase`,(e,t)=>{t.pattern??=un,k.init(e,t)}),xn=m(`$BioCheckUpperCase`,(e,t)=>{t.pattern??=dn,k.init(e,t)}),Sn=m(`$BioCheckIncludes`,(e,t)=>{D.init(e,t);let n=x(t.includes),r=new RegExp(typeof t.position==`number`?`^.{${t.position}}${n}`:n);t.pattern=r,e._bio.onattach.push(e=>{let t=e._bio.bag;t.patterns??=new Set,t.patterns.add(r)}),e._bio.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),Cn=m(`$BioCheckStartsWith`,(e,t)=>{D.init(e,t);let n=RegExp(`^${x(t.prefix)}.*`);t.pattern??=n,e._bio.onattach.push(e=>{let t=e._bio.bag;t.patterns??=new Set,t.patterns.add(n)}),e._bio.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),wn=m(`$BioCheckEndsWith`,(e,t)=>{D.init(e,t);let n=RegExp(`.*${x(t.suffix)}$`);t.pattern??=n,e._bio.onattach.push(e=>{let t=e._bio.bag;t.patterns??=new Set,t.patterns.add(n)}),e._bio.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),Tn=m(`$BioCheckOverwrite`,(e,t)=>{D.init(e,t),e._bio.check=e=>{e.value=t.tx(e.value)}}),A=m(`$BioType`,(e,t)=>{e??={},e._bio.def=t,e._bio.bag=e._bio.bag||{};let n=e._bio.def.checks,r=e._bio.traits.has(`$BioCheck`)?[e,...n??[]]:n?.length?[...n]:[];for(let t of r)for(let n of t._bio.onattach)n(e);if(r.length===0)e._bio.deferred??=[],e._bio.deferred?.push(()=>{e._bio.run=e._bio.parse});else{let t=(e,t,n)=>{let r=w(e),i;for(let a of t){if(a._bio.def.when){if(it(e)||!a._bio.def.when(e))continue}else if(r)continue;let t=e.issues.length,o=a._bio.check(e);if(o instanceof Promise&&n?.async===!1)throw new h;if(i||o instanceof Promise)i=(i??Promise.resolve()).then(async()=>{await o,e.issues.length!==t&&(r||=w(e,t))});else{if(e.issues.length===t)continue;r||=w(e,t)}}return i?i.then(()=>e):e},n=(n,i,a)=>{if(w(n))return n.aborted=!0,n;let o=t(i,r,a);if(o instanceof Promise){if(a.async===!1)throw new h;return o.then(t=>e._bio.parse(t,a))}return e._bio.parse(o,a)};e._bio.run=(i,a)=>{if(a.skipChecks)return e._bio.parse(i,a);if(a.direction===`backward`){let t=e._bio.parse({value:i.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,i,a)):n(t,i,a)}let o=e._bio.parse(i,a);if(o instanceof Promise){if(a.async===!1)throw new h;return o.then(e=>t(e,r,a))}return t(o,r,a)}}}),En=m(`$BioString`,(e,t)=>{A.init(e,t),e._bio.pattern=[...e?._bio.bag?.patterns??[]].pop()??sn(e._bio.bag),e._bio.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),j=m(`$BioStringFormat`,(e,t)=>{k.init(e,t),En.init(e,t)}),Dn=m(`$BioGUID`,(e,t)=>{t.pattern??=Vt,j.init(e,t)}),On=m(`$BioUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Ht(e)}else t.pattern??=Ht();j.init(e,t)}),kn=m(`$BioEmail`,(e,t)=>{t.pattern??=Ut,j.init(e,t)}),An=m(`$BioURL`,(e,t)=>{j.init(e,t),e._bio.check=n=>{try{let r=n.value.trim();if(!t.normalize&&t.protocol?.source===Qt.source&&!/^https?:\/\//i.test(r)){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}let i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(`:`)?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),n.value=t.normalize?i.href:r;return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),jn=m(`$BioEmoji`,(e,t)=>{t.pattern??=Gt(),j.init(e,t)}),Mn=m(`$BioNanoID`,(e,t)=>{t.pattern??=zt,j.init(e,t)}),Nn=m(`$BioCUID`,(e,t)=>{t.pattern??=Pt,j.init(e,t)}),Pn=m(`$BioCUID2`,(e,t)=>{t.pattern??=Ft,j.init(e,t)}),Fn=m(`$BioULID`,(e,t)=>{t.pattern??=It,j.init(e,t)}),In=m(`$BioXID`,(e,t)=>{t.pattern??=Lt,j.init(e,t)}),Ln=m(`$BioKSUID`,(e,t)=>{t.pattern??=Rt,j.init(e,t)}),Rn=m(`$BioISODateTime`,(e,t)=>{t.pattern??=on(t),j.init(e,t)}),zn=m(`$BioISODate`,(e,t)=>{t.pattern??=nn,j.init(e,t)}),Bn=m(`$BioISOTime`,(e,t)=>{t.pattern??=an(t),j.init(e,t)}),Vn=m(`$BioISODuration`,(e,t)=>{t.pattern??=Bt,j.init(e,t)}),Hn=m(`$BioIPv4`,(e,t)=>{t.pattern??=Kt,j.init(e,t),e._bio.bag.format=`ipv4`}),Un=m(`$BioIPv6`,(e,t)=>{t.pattern??=qt,j.init(e,t),e._bio.bag.format=`ipv6`,e._bio.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}}),Wn=m(`$BioCIDRv4`,(e,t)=>{t.pattern??=Jt,j.init(e,t)}),Gn=m(`$BioCIDRv6`,(e,t)=>{t.pattern??=Yt,j.init(e,t),e._bio.check=n=>{let r=n.value.split(`/`);try{if(r.length!==2)throw Error();let[e,t]=r;if(!t)throw Error();let n=Number(t);if(`${n}`!==t||n<0||n>128)throw Error();new URL(`http://[${e}]`)}catch{n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}}});function Kn(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var qn=m(`$BioBase64`,(e,t)=>{t.pattern??=Xt,j.init(e,t),e._bio.bag.contentEncoding=`base64`,e._bio.check=n=>{Kn(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}});function Jn(e){if(!Zt.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return Kn(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var Yn=m(`$BioBase64URL`,(e,t)=>{t.pattern??=Zt,j.init(e,t),e._bio.bag.contentEncoding=`base64url`,e._bio.check=n=>{Jn(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),Xn=m(`$BioE164`,(e,t)=>{t.pattern??=$t,j.init(e,t)});function Zn(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var Qn=m(`$BioJWT`,(e,t)=>{j.init(e,t),e._bio.check=n=>{Zn(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),$n=m(`$BioNumber`,(e,t)=>{A.init(e,t),e._bio.pattern=e._bio.bag.pattern??ln,e._bio.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:String(i):void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),er=m(`$BioNumberFormat`,(e,t)=>{hn.init(e,t),$n.init(e,t)}),tr=m(`$BioUnknown`,(e,t)=>{A.init(e,t),e._bio.parse=e=>e}),nr=m(`$BioNever`,(e,t)=>{A.init(e,t),e._bio.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function rr(e,t,n){e.issues.length&&t.issues.push(...at(n,e.issues)),t.value[n]=e.value}var ir=m(`$BioArray`,(e,t)=>{A.init(e,t),e._bio.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({expected:`array`,code:`invalid_type`,input:i,inst:e}),n;n.value=Array(i.length);let a=[];for(let e=0;e<i.length;e++){let o=i[e],s=t.element._bio.run({value:o,issues:[]},r);s instanceof Promise?a.push(s.then(t=>rr(t,n,e))):rr(s,n,e)}return a.length?Promise.all(a).then(()=>n):n}});function M(e,t,n,r,i,a){let o=n in r;if(e.issues.length){if(i&&a&&!o)return;t.issues.push(...at(n,e.issues))}!o&&!i?e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]}):e.value===void 0?o&&(t.value[n]=void 0):t.value[n]=e.value}function ar(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._bio?.traits?.has(`$BioType`))throw Error(`Invalid element at key "${n}": expected a Bio schema`);let n=Ye(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(n)}}function or(e,t,n,r,i,a){let o=[],s=i.keySet,c=i.catchall._bio,l=c.def.type,ee=c.optin===`optional`,u=c.optout===`optional`;for(let i in t){if(s.has(i))continue;if(i===`__proto__`){l===`never`&&o.push(i);continue}if(l===`never`){o.push(i);continue}let a=c.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>M(e,n,i,t,ee,u))):M(a,n,i,t,ee,u)}return o.length&&n.issues.push({code:`unrecognized_keys`,keys:o,input:t,inst:a,continue:!0}),e.length?Promise.all(e).then(()=>n):n}var sr=m(`$BioObject`,(e,t)=>{if(A.init(e,t),!Object.getOwnPropertyDescriptor(t,`shape`)?.get){let e=t.shape;Object.defineProperty(t,"shape",{get:()=>{let n={...e};return Object.defineProperty(t,"shape",{value:n}),n}})}let n=ze(()=>ar(t));_(e._bio,`propValues`,()=>{let e=t.shape,n={};for(let t in e){let r=e[t]._bio;if(r.values){Object.hasOwn(n,t)||v(n,t,new Set);for(let e of r.values)n[t].add(e)}}return n});let r=Ke,i=t.catchall,a;e._bio.parse=(t,o)=>{a??=n.value;let s=t.value;if(!r(s))return t.issues.push({expected:`object`,code:`invalid_type`,input:s,inst:e}),t;t.value={};let c=[],l=a.shape;for(let e of a.keys){if(e===`__proto__`)continue;let n=l[e],r=n._bio.optin===`optional`,i=n._bio.optout===`optional`,a=n._bio.run({value:s[e],issues:[]},o);a instanceof Promise?c.push(a.then(n=>M(n,t,e,s,r,i))):M(a,t,e,s,r,i)}return i?or(c,s,t,o,n.value,e):c.length?Promise.all(c).then(()=>t):t}});function cr(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!w(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>T(e,r,g())))}),t)}var lr=m(`$BioUnion`,(e,t)=>{A.init(e,t),_(e._bio,`optin`,()=>t.options.some(e=>e._bio.optin===`optional`)?`optional`:void 0),_(e._bio,`optout`,()=>t.options.some(e=>e._bio.optout===`optional`)?`optional`:void 0),_(e._bio,`values`,()=>{if(t.options.every(e=>e._bio.values))return new Set(t.options.flatMap(e=>Array.from(e._bio.values)))}),_(e._bio,`pattern`,()=>{if(t.options.every(e=>e._bio.pattern)){let e=t.options.map(e=>e._bio.pattern);return RegExp(`^(${e.map(e=>Ve(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._bio.run:null;e._bio.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._bio.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>cr(t,r,e,i)):cr(o,r,e,i)}}),ur=m(`$BioIntersection`,(e,t)=>{A.init(e,t),e._bio.parse=(e,n)=>{let r=e.value,i=t.left._bio.run({value:r,issues:[]},n),a=t.right._bio.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>fr(e,t,n)):fr(e,i,a)}});function dr(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(b(e)&&b(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};Object.hasOwn(i,`__proto__`)&&delete i.__proto__;for(let n of r){if(n===`__proto__`)continue;let r=dr(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=dr(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function fr(e,t,n){let r=new Map,i,a=new Map,o=(e,t)=>{let n;if(e.code===`unrecognized_keys`&&!e.path?.length)i??=e,n=e.keys;else if(e.code===`invalid_key`&&e.origin===`record`&&e.path?.length===1){let t=String(e.path[0]);a.has(t)||a.set(t,e),n=[t]}else return!1;for(let e of n)r.has(e)||r.set(e,{}),r.get(e)[t]=!0;return!0};for(let n of t.issues)o(n,`l`)||e.issues.push(n);for(let t of n.issues)o(t,`r`)||e.issues.push(t);let s=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(s.length){let t=i?s.filter(e=>i.keys.includes(e)):[];t.length&&e.issues.push({...i,keys:t});for(let n of s)!t.includes(n)&&a.has(n)&&e.issues.push(a.get(n))}let c=dr(t.value,n.value);if(!c.valid){if(w(e))return e;throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return e.value=c.data,e}var pr=m(`$BioEnum`,(e,t)=>{A.init(e,t);let n=Le(t.entries),r=new Set(n);e._bio.values=r,e._bio.pattern=RegExp(`^(${n.filter(e=>Je.has(typeof e)).map(e=>x(e.toString())).join(`|`)})$`),e._bio.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),mr=m(`$BioTransform`,(e,t)=>{A.init(e,t),e._bio.optin=`optional`,e._bio.parse=(n,r)=>{if(r.direction===`backward`)throw new Fe(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n.fallback=!0,n));if(i instanceof Promise)throw new h;return n.value=i,n.fallback=!0,n}});function hr(e,t){return t===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}var gr=m(`$BioOptional`,(e,t)=>{A.init(e,t),e._bio.optin=`optional`,e._bio.optout=`optional`,_(e._bio,`values`,()=>t.innerType._bio.values?new Set([...t.innerType._bio.values,void 0]):void 0),_(e._bio,`pattern`,()=>{let e=t.innerType._bio.pattern;return e?RegExp(`^(${Ve(e.source)})?$`):void 0}),e._bio.parse=(e,n)=>{if(t.innerType._bio.optin===`optional`){let r=e.value,i=t.innerType._bio.run(e,n);return i instanceof Promise?i.then(e=>hr(e,r)):hr(i,r)}return e.value===void 0?e:t.innerType._bio.run(e,n)}}),_r=m(`$BioExactOptional`,(e,t)=>{gr.init(e,t),_(e._bio,`values`,()=>t.innerType._bio.values),_(e._bio,`pattern`,()=>t.innerType._bio.pattern),e._bio.parse=(e,n)=>t.innerType._bio.run(e,n)}),vr=m(`$BioNullable`,(e,t)=>{A.init(e,t),_(e._bio,`optin`,()=>t.innerType._bio.optin),_(e._bio,`optout`,()=>t.innerType._bio.optout),_(e._bio,`pattern`,()=>{let e=t.innerType._bio.pattern;return e?RegExp(`^(${Ve(e.source)}|null)$`):void 0}),_(e._bio,`values`,()=>t.innerType._bio.values?new Set([...t.innerType._bio.values,null]):void 0),e._bio.parse=(e,n)=>e.value===null?e:t.innerType._bio.run(e,n)}),yr=m(`$BioDefault`,(e,t)=>{A.init(e,t),e._bio.optin=`optional`,_(e._bio,`values`,()=>t.innerType._bio.values),e._bio.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._bio.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._bio.run(e,n);return r instanceof Promise?r.then(e=>br(e,t)):br(r,t)}});function br(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var xr=m(`$BioPrefault`,(e,t)=>{A.init(e,t),e._bio.optin=`optional`,_(e._bio,`values`,()=>t.innerType._bio.values),e._bio.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._bio.run(e,n))}),Sr=m(`$BioNonOptional`,(e,t)=>{A.init(e,t),_(e._bio,`values`,()=>{let e=t.innerType._bio.values;return e?new Set([...e].filter(e=>e!==void 0)):void 0}),e._bio.parse=(n,r)=>{let i=t.innerType._bio.run(n,r);return i instanceof Promise?i.then(t=>Cr(t,e)):Cr(i,e)}});function Cr(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}var wr=m(`$BioCatch`,(e,t)=>{A.init(e,t),e._bio.optin=`optional`,_(e._bio,`optout`,()=>t.innerType._bio.optout),_(e._bio,`values`,()=>t.innerType._bio.values),e._bio.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._bio.run(e,n);let r=t.innerType._bio.run(e,n);return r instanceof Promise?r.then(r=>(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>T(e,n,g()))},input:e.value}),e.issues=[],e.fallback=!0),e)):(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>T(e,n,g()))},input:e.value}),e.issues=[],e.fallback=!0),e)}}),Tr=m(`$BioPipe`,(e,t)=>{A.init(e,t),_(e._bio,`values`,()=>t.in._bio.values),_(e._bio,`optin`,()=>t.in._bio.optin),_(e._bio,`optout`,()=>t.out._bio.optout),_(e._bio,`propValues`,()=>t.in._bio.propValues),e._bio.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._bio.run(e,n);return r instanceof Promise?r.then(e=>N(e,t.in,n)):N(r,t.in,n)}let r=t.in._bio.run(e,n);return r instanceof Promise?r.then(e=>N(e,t.out,n)):N(r,t.out,n)}});function N(e,t,n){return e.issues.some(e=>e.code!==`unrecognized_keys`)?(e.aborted=!0,e):t._bio.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}var Er=m(`$BioReadonly`,(e,t)=>{A.init(e,t),_(e._bio,`propValues`,()=>t.innerType._bio.propValues),_(e._bio,`values`,()=>t.innerType._bio.values),_(e._bio,`optin`,()=>t.innerType?._bio?.optin),_(e._bio,`optout`,()=>t.innerType?._bio?.optout),e._bio.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._bio.run(e,n);let r=t.innerType._bio.run(e,n);return r instanceof Promise?r.then(Dr):Dr(r)}});function Dr(e){return e.value=Object.freeze(e.value),e}var Or=m(`$BioCustom`,(e,t)=>{D.init(e,t),A.init(e,t),e._bio.parse=(e,t)=>e,e._bio.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>kr(t,n,r,e));kr(i,n,r,e)}});function kr(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._bio.def.path??[]],continue:!r._bio.def.abort};r._bio.def.params&&(e.params=r._bio.def.params),t.issues.push(E(e))}}var Ar=class{constructor(){e(this,`_meta`,void 0),e(this,`_schema`,void 0),e(this,`_map`,new WeakMap),e(this,`_idmap`,new Map)}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._bio.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function jr(){return new Ar}var P=jr();function Mr(e,t){return new e({type:`string`,...C(t)})}function Nr(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...C(t)})}function Pr(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...C(t)})}function Fr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...C(t)})}function Ir(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...C(t)})}function Lr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...C(t)})}function Rr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...C(t)})}function zr(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...C(t)})}function Br(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...C(t)})}function Vr(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...C(t)})}function Hr(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...C(t)})}function Ur(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...C(t)})}function Wr(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...C(t)})}function Gr(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...C(t)})}function Kr(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...C(t)})}function qr(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...C(t)})}function Jr(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...C(t)})}function Yr(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...C(t)})}function Xr(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...C(t)})}function Zr(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...C(t)})}function Qr(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...C(t)})}function $r(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...C(t)})}function ei(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...C(t)})}function ti(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...C(t)})}function ni(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...C(t)})}function ri(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...C(t)})}function ii(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...C(t)})}function ai(e,t){return new e({type:`number`,checks:[],...C(t)})}function oi(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...C(t)})}function si(e){return new e({type:`unknown`})}function ci(e,t){return new e({type:`never`,...C(t)})}function li(e,t){return new fn({check:`less_than`,...C(t),value:e,inclusive:!1})}function ui(e,t){return new fn({check:`less_than`,...C(t),value:e,inclusive:!0})}function di(e,t){return new pn({check:`greater_than`,...C(t),value:e,inclusive:!1})}function fi(e,t){return new pn({check:`greater_than`,...C(t),value:e,inclusive:!0})}function pi(e,t){return new mn({check:`multiple_of`,...C(t),value:e})}function mi(e,t){return new gn({check:`max_length`,...C(t),maximum:e})}function F(e,t){return new _n({check:`min_length`,...C(t),minimum:e})}function hi(e,t){return new vn({check:`length_equals`,...C(t),length:e})}function gi(e,t){return new yn({check:`string_format`,format:`regex`,...C(t),pattern:e})}function _i(e){return new bn({check:`string_format`,format:`lowercase`,...C(e)})}function vi(e){return new xn({check:`string_format`,format:`uppercase`,...C(e)})}function yi(e,t){return new Sn({check:`string_format`,format:`includes`,...C(t),includes:e})}function bi(e,t){return new Cn({check:`string_format`,format:`starts_with`,...C(t),prefix:e})}function xi(e,t){return new wn({check:`string_format`,format:`ends_with`,...C(t),suffix:e})}function I(e){return new Tn({check:`overwrite`,tx:e})}function Si(e){return I(t=>t.normalize(e))}function Ci(){return I(e=>e.trim())}function wi(){return I(e=>e.toLowerCase())}function Ti(){return I(e=>e.toUpperCase())}function Ei(){return I(e=>We(e))}function Di(e,t,n){return new e({type:`array`,element:t,...C(n)})}function Oi(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...C(n)})}function ki(e,t){let n=Ai(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(E(e,t.value,n._bio.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,r.input??=t.value,r.inst??=n,r.continue??=!n._bio.def.abort,t.issues.push(E(r))}},e(t.value,t)),t);return n}function Ai(e,t){let n=new D({check:`custom`,...C(t)});return n._bio.check=e,n}var ji=new WeakSet([Object.prototype,Error.prototype]);function L(e,t,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get(){let e=n(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e},set(e){Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0})}})}var R=m(`BioError`,(e,t)=>{vt.init(e,t),e.name=`BioError`;let n=Object.getPrototypeOf(e);ji.has(n)||(ji.add(n),L(n,`format`,e=>t=>xt(e,t)),L(n,`flatten`,e=>t=>bt(e,t)),L(n,`addIssue`,e=>t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,Re,2)}),L(n,`addIssues`,e=>t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,Re,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},{Parent:Error}),Mi=St(R),Ni=Ct(R),Pi=wt(R),Fi=Tt(R),Ii=Et(R),Li=Dt(R),Ri=Ot(R),zi=kt(R),Bi=At(R),Vi=jt(R),Hi=Mt(R),Ui=Nt(R),z=ut,Wi=dt,B=m(`BioType`,(e,t)=>{A.init(e,t),e.def=t,e.type=t.type,z(e,`check`,Gi),Wi(e,`parse`,Ki);let n=Object.getPrototypeOf(e);return`description`in n||(Object.defineProperty(n,"description",{configurable:!0,get(){return P.get(this)?.description}}),Object.defineProperty(n,"_def",{configurable:!0,get(){return this._bio.def}})),e});function Gi(){return{check(...e){let t=this.def;return this.clone(y(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_bio:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return S(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(so(e,t))},superRefine(e,t){return this.check(co(e,t))},overwrite(e){return this.check(I(e))},optional(){return Ua(this)},exactOptional(){return Ga(this)},nullable(){return qa(this)},nullish(){return Ua(qa(this))},nonoptional(e){return $a(this,e)},array(){return Aa(this)},or(e){return Fa([this,e])},and(e){return La(this,e)},transform(e){return ro(this,Va(e))},default(e){return Ya(this,e)},prefault(e){return Za(this,e)},catch(e){return to(this,e)},pipe(e){return ro(this,e)},readonly(){return ao(this)},describe(e){let t=this.clone();return P.add(t,{description:e}),t},meta(...e){if(e.length===0)return P.get(this);let t=this.clone();return P.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e){return e(this)}}}function Ki(){return{parse:e=>{let t=(n,r)=>Mi(e,n,r,{callee:t});return t},parseAsync:e=>{let t=async(n,r)=>Ni(e,n,r,{callee:t});return t},safeParse:e=>(t,n)=>Pi(e,t,n),safeParseAsync:e=>async(t,n)=>Fi(e,t,n),spa:e=>e.safeParseAsync,encode:e=>(t,n)=>Ii(e,t,n),decode:e=>(t,n)=>Li(e,t,n),encodeAsync:e=>async(t,n)=>Ri(e,t,n),decodeAsync:e=>async(t,n)=>zi(e,t,n),safeEncode:e=>(t,n)=>Bi(e,t,n),safeDecode:e=>(t,n)=>Vi(e,t,n),safeEncodeAsync:e=>async(t,n)=>Hi(e,t,n),safeDecodeAsync:e=>async(t,n)=>Ui(e,t,n)}}var qi=m(`_BioString`,(e,t)=>{En.init(e,t),B.init(e,t);let n=e._bio.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,z(e,`regex`,Ji)});function Ji(){return{regex(...e){return this.check(gi(...e))},includes(...e){return this.check(yi(...e))},startsWith(...e){return this.check(bi(...e))},endsWith(...e){return this.check(xi(...e))},min(...e){return this.check(F(...e))},max(...e){return this.check(mi(...e))},length(...e){return this.check(hi(...e))},nonempty(...e){return this.check(F(1,...e))},lowercase(e){return this.check(_i(e))},uppercase(e){return this.check(vi(e))},trim(){return this.check(Ci())},normalize(...e){return this.check(Si(...e))},toLowerCase(){return this.check(wi())},toUpperCase(){return this.check(Ti())},slugify(){return this.check(Ei())}}}var Yi=m(`BioString`,(e,t)=>{En.init(e,t),qi.init(e,t),z(e,`email`,Xi)});function Xi(){return{email(e){return this.check(Nr(ta,e))},url(e){return this.check(zr(ra,e))},jwt(e){return this.check(ei(va,e))},emoji(e){return this.check(Br(ia,e))},guid(e){return this.check(Pr(na,e))},uuid(e){return this.check(Fr(U,e))},uuidv4(e){return this.check(Ir(U,e))},uuidv6(e){return this.check(Lr(U,e))},uuidv7(e){return this.check(Rr(U,e))},nanoid(e){return this.check(Vr(aa,e))},cuid(e){return this.check(Hr(oa,e))},cuid2(e){return this.check(Ur(sa,e))},ulid(e){return this.check(Wr(ca,e))},base64(e){return this.check(Zr(ha,e))},base64url(e){return this.check(Qr(ga,e))},xid(e){return this.check(Gr(la,e))},ksuid(e){return this.check(Kr(ua,e))},ipv4(e){return this.check(qr(da,e))},ipv6(e){return this.check(Jr(fa,e))},cidrv4(e){return this.check(Yr(pa,e))},cidrv6(e){return this.check(Xr(ma,e))},e164(e){return this.check($r(_a,e))},datetime(e){return this.check(ti(Zi,e))},date(e){return this.check(ni(Qi,e))},time(e){return this.check(ri($i,e))},duration(e){return this.check(ii(ea,e))}}}function V(e){return Mr(Yi,e)}var H=m(`BioStringFormat`,(e,t)=>{j.init(e,t),qi.init(e,t)}),Zi=m(`BioISODateTime`,(e,t)=>{Rn.init(e,t),H.init(e,t)}),Qi=m(`BioISODate`,(e,t)=>{zn.init(e,t),H.init(e,t)}),$i=m(`BioISOTime`,(e,t)=>{Bn.init(e,t),H.init(e,t)}),ea=m(`BioISODuration`,(e,t)=>{Vn.init(e,t),H.init(e,t)}),ta=m(`BioEmail`,(e,t)=>{kn.init(e,t),H.init(e,t)}),na=m(`BioGUID`,(e,t)=>{Dn.init(e,t),H.init(e,t)}),U=m(`BioUUID`,(e,t)=>{On.init(e,t),H.init(e,t)}),ra=m(`BioURL`,(e,t)=>{An.init(e,t),H.init(e,t)}),ia=m(`BioEmoji`,(e,t)=>{jn.init(e,t),H.init(e,t)}),aa=m(`BioNanoID`,(e,t)=>{Mn.init(e,t),H.init(e,t)}),oa=m(`BioCUID`,(e,t)=>{Nn.init(e,t),H.init(e,t)}),sa=m(`BioCUID2`,(e,t)=>{Pn.init(e,t),H.init(e,t)}),ca=m(`BioULID`,(e,t)=>{Fn.init(e,t),H.init(e,t)}),la=m(`BioXID`,(e,t)=>{In.init(e,t),H.init(e,t)}),ua=m(`BioKSUID`,(e,t)=>{Ln.init(e,t),H.init(e,t)}),da=m(`BioIPv4`,(e,t)=>{Hn.init(e,t),H.init(e,t)}),fa=m(`BioIPv6`,(e,t)=>{Un.init(e,t),H.init(e,t)}),pa=m(`BioCIDRv4`,(e,t)=>{Wn.init(e,t),H.init(e,t)}),ma=m(`BioCIDRv6`,(e,t)=>{Gn.init(e,t),H.init(e,t)}),ha=m(`BioBase64`,(e,t)=>{qn.init(e,t),H.init(e,t)}),ga=m(`BioBase64URL`,(e,t)=>{Yn.init(e,t),H.init(e,t)}),_a=m(`BioE164`,(e,t)=>{Xn.init(e,t),H.init(e,t)}),va=m(`BioJWT`,(e,t)=>{Qn.init(e,t),H.init(e,t)}),ya=m(`BioNumber`,(e,t)=>{$n.init(e,t),B.init(e,t),z(e,`gt`,ba);let n=e._bio.bag;e.minValue=Math.max(n.minimum??-1/0,n.exclusiveMinimum??-1/0)??null,e.maxValue=Math.min(n.maximum??1/0,n.exclusiveMaximum??1/0)??null,e.isInt=(n.format??``).includes(`int`)||Number.isSafeInteger(n.multipleOf??.5),e.isFinite=!0,e.format=n.format??null});function ba(){return{gt(e,t){return this.check(di(e,t))},gte(e,t){return this.check(fi(e,t))},min(e,t){return this.check(fi(e,t))},lt(e,t){return this.check(li(e,t))},lte(e,t){return this.check(ui(e,t))},max(e,t){return this.check(ui(e,t))},int(e){return this.check(Ca(e))},safe(e){return this.check(Ca(e))},positive(e){return this.check(di(0,e))},nonnegative(e){return this.check(fi(0,e))},negative(e){return this.check(li(0,e))},nonpositive(e){return this.check(ui(0,e))},multipleOf(e,t){return this.check(pi(e,t))},step(e,t){return this.check(pi(e,t))},finite(){return this}}}function xa(e){return ai(ya,e)}var Sa=m(`BioNumberFormat`,(e,t)=>{er.init(e,t),ya.init(e,t)});function Ca(e){return oi(Sa,e)}var wa=m(`BioUnknown`,(e,t)=>{tr.init(e,t),B.init(e,t)});function Ta(){return si(wa)}var Ea=m(`BioNever`,(e,t)=>{nr.init(e,t),B.init(e,t)});function Da(e){return ci(Ea,e)}var Oa=m(`BioArray`,(e,t)=>{ir.init(e,t),B.init(e,t),e.element=t.element,z(e,`min`,ka)});function ka(){return{min(e,t){return this.check(F(e,t))},nonempty(e){return this.check(F(1,e))},max(e,t){return this.check(mi(e,t))},length(e,t){return this.check(hi(e,t))},unwrap(){return this.element}}}function Aa(e,t){return Di(Oa,e,t)}var ja=m(`BioObject`,(e,t)=>{sr.init(e,t),B.init(e,t),_(e,`shape`,()=>t.shape),z(e,`keyof`,Ma)});function Ma(){return{keyof(){return za(Object.keys(this._bio.def.shape))},catchall(e){return this.clone({...this._bio.def,catchall:e})},passthrough(){return this.clone({...this._bio.def,catchall:Ta()})},loose(){return this.clone({...this._bio.def,catchall:Ta()})},strict(){return this.clone({...this._bio.def,catchall:Da()})},strip(){return this.clone({...this._bio.def,catchall:void 0})},extend(e){return $e(this,e)},safeExtend(e){return et(this,e)},merge(e){return tt(this,e)},pick(e){return Ze(this,e)},omit(e){return Qe(this,e)},partial(...e){return nt(Ha,this,e[0])},required(...e){return rt(Qa,this,e[0])}}}function Na(e,t){return new ja({type:`object`,shape:e??{},...C(t)})}var Pa=m(`BioUnion`,(e,t)=>{lr.init(e,t),B.init(e,t),e.options=t.options});function Fa(e,t){return new Pa({type:`union`,options:e,...C(t)})}var Ia=m(`BioIntersection`,(e,t)=>{ur.init(e,t),B.init(e,t)});function La(e,t){return new Ia({type:`intersection`,left:e,right:t})}var Ra=m(`BioEnum`,(e,t)=>{pr.init(e,t),B.init(e,t),e.enum=t.entries,e.options=Object.values(t.entries);let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new Ra({...t,checks:[],...C(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new Ra({...t,checks:[],...C(r),entries:i})}});function za(e,t){return new Ra({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...C(t)})}var Ba=m(`BioTransform`,(e,t)=>{mr.init(e,t),B.init(e,t),e._bio.parse=(n,r)=>{if(r.direction===`backward`)throw new Fe(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(E(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,t.input??=n.value,t.inst??=e,n.issues.push(E(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n.fallback=!0,n)):(n.value=i,n.fallback=!0,n)}});function Va(e){return new Ba({type:`transform`,transform:e})}var Ha=m(`BioOptional`,(e,t)=>{gr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Ua(e){return new Ha({type:`optional`,innerType:e})}var Wa=m(`BioExactOptional`,(e,t)=>{_r.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Ga(e){return new Wa({type:`optional`,innerType:e})}var Ka=m(`BioNullable`,(e,t)=>{vr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function qa(e){return new Ka({type:`nullable`,innerType:e})}var Ja=m(`BioDefault`,(e,t)=>{yr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType,e.removeDefault=e.unwrap});function Ya(e,t){return new Ja({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():qe(t)}})}var Xa=m(`BioPrefault`,(e,t)=>{xr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function Za(e,t){return new Xa({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():qe(t)}})}var Qa=m(`BioNonOptional`,(e,t)=>{Sr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function $a(e,t){return new Qa({type:`nonoptional`,innerType:e,...C(t)})}var eo=m(`BioCatch`,(e,t)=>{wr.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType,e.removeCatch=e.unwrap});function to(e,t){return new eo({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:()=>t})}var no=m(`BioPipe`,(e,t)=>{Tr.init(e,t),B.init(e,t),e.in=t.in,e.out=t.out});function ro(e,t){return new no({type:`pipe`,in:e,out:t})}var io=m(`BioReadonly`,(e,t)=>{Er.init(e,t),B.init(e,t),e.unwrap=()=>e._bio.def.innerType});function ao(e){return new io({type:`readonly`,innerType:e})}var oo=m(`BioCustom`,(e,t)=>{Or.init(e,t),B.init(e,t)});function so(e,t={}){return Oi(oo,e,t)}function co(e,t){return ki(e,t)}function lo(e){return ni(Qi,e)}function W(e,t){return V().refine(t=>t.trim()===``||e(t),{error:t})}var uo=xa().int().min(0).max(1),fo=Na({id:xa().int(),nome:V(),telefone:W(f,`telefone_duvidoso`),email:W(Ee,`email_duvidoso`),link:V(),comentario:V(),nome_secretario:V(),telefone_secretario:W(f,`telefone_duvidoso`),tipo_sanguineo:V(),doador_orgaos:uo,alergias:V(),medicamentos_em_uso:V(),observacoes_medicas:V(),gravida:uo,gravidez_meses:V(),data_prevista_parto:W(e=>lo().safeParse(e.trim()).success,`data_duvidosa`),recusa_transfusao:uo,fracoes_aceitas:V(),contato_emergencia:V(),contato_emergencia_telefone:W(f,`telefone_duvidoso`),nome_colih:V(),telefone_colih:W(f,`telefone_duvidoso`),cartao_sus_numero:V(),cpf_titular:W(ue,`cpf_duvidoso`),upa_referencia:V(),dpa_assinado_em:W(e=>lo().safeParse(e.trim()).success,`data_duvidosa`),congregacao:V(),grupo:V()}),po=[`telefone`,`email`,`telefone_secretario`,`data_prevista_parto`,`dpa_assinado_em`,`contato_emergencia_telefone`,`telefone_colih`,`cpf_titular`];function mo(e,t){let n=t.trim();if(n===``)return;let r=fo.shape[e].safeParse(n);return r.success?void 0:r.error.issues[0]?.message}var ho=1e3,G={...ge},K=``,go,_o=new ce(`perfil`,async()=>{De(),G=await be()});function vo(e){return e===`Desconhecido`?i.perfil.sangueDesconhecido:e}function yo(){K=i.acervo.salvando,d(),clearTimeout(go),go=setTimeout(()=>void bo(),ho)}async function bo(){try{G=await xe(G),K=i.acervo.salvoAs(c(Date.now()))}catch(e){console.error(`perfil: a gravação falhou.`,e),K=e instanceof Se?i.perfil.dataDuvidosa:e instanceof ye?i.perfil.cpfDuvidoso:ae(e)}d()}function q(e,t){G={...G,[e]:t},yo()}function xo(e){return{telefone_duvidoso:i.perfil.telefoneDuvidoso,email_duvidoso:i.perfil.emailDuvidoso,cpf_duvidoso:i.perfil.cpfDuvidoso,data_duvidosa:i.perfil.dataDuvidosa}[e]??``}function So(e){return po.includes(e)}var J=new Set,Y=new Map;function Co(e){return wo(e)||e===`cpf_titular`}function wo(e){return we.includes(e)}function X(e,n,r=`text`,i){let a=Co(e)?Y.get(e):void 0,o=a??String(G[e]??``),c=a!==void 0&&wo(e)?`data_duvidosa`:So(e)&&J.has(e)?mo(e,o):void 0;return t`
    <kk-input
      type=${r}
      label=${n}
      help-text=${c===void 0?``:xo(c)}
      autocomplete=${Oe(i)}
      .value=${o}
      @kk-input=${t=>{let n=t.target.value;if(J.delete(e),wo(e)){if(n.trim()!==``&&!s(n.trim())){Y.set(e,n),d();return}Y.delete(e)}else if(e===`cpf_titular`){if(Ce(n)){Y.set(e,n),d();return}Y.delete(e)}q(e,n)}}
      @kk-blur=${()=>{So(e)&&!J.has(e)&&(J.add(e),d())}}
    ></kk-input>
  `}function To(e,n){return t`
    <kk-textarea
      rows="2"
      resize="auto"
      label=${n}
      .value=${String(G[e]??``)}
      @kk-input=${t=>q(e,t.target.value)}
    ></kk-textarea>
  `}function Eo(e,n){return t`
    <kk-switch
      ?checked=${G[e]===1}
      @kk-change=${t=>q(e,+!!t.target.checked)}
    >
      ${n}
    </kk-switch>
  `}var Z=[`sobre`,`ice`,`acessibilidade`],Do={sobre:`#/perfil`,ice:`#/perfil/emergencia`,acessibilidade:`#/perfil/acessibilidade`};function Oo(e){return e===`ice`?i.perfil.abaIce:e===`acessibilidade`?i.perfil.abaAcessibilidade:i.perfil.abaSobre}var ko={sobre:`user`,ice:`heartbeat`,acessibilidade:`accessible`},Q=`sobre`,Ao=null;l(`perfil`,()=>{Ao=null});function jo(e){let[t]=e.args;return t===`emergencia`?`ice`:t===`acessibilidade`?`acessibilidade`:`sobre`}function Mo(e,t=!1){Q=e,history.replaceState(history.state,``,Do[e]),d(),t&&document.querySelector(`#perfil-aba-${e}`)?.focus()}function No(e){let t=Z.indexOf(Q),n=e.key===`ArrowRight`?Z[(t+1)%Z.length]:e.key===`ArrowLeft`?Z[(t-1+Z.length)%Z.length]:e.key===`Home`?Z[0]:e.key===`End`?Z[Z.length-1]:void 0;n!==void 0&&(e.preventDefault(),Mo(n,!0))}function Po(){return t`
    <div class="chips perfil__abas" role="tablist" aria-label=${i.perfil.abas}>
      ${Z.map(e=>t`
          <button
            type="button"
            class="chip"
            role="tab"
            id=${`perfil-aba-${e}`}
            aria-controls="perfil-painel"
            aria-selected=${Q===e}
            tabindex=${Q===e?0:-1}
            ?data-ativo=${Q===e}
            @click=${()=>Mo(e)}
            @keydown=${No}
          >
            <kk-icon name=${ko[e]}></kk-icon>
            ${Oo(e)}
          </button>
        `)}
    </div>
  `}function Fo(){return o.length<2?n:t`
    <h2 class="secao">${i.perfil.idiomaSecao}</h2>
    <kk-select
      label=${i.perfil.idioma}
      help-text=${i.perfil.idiomaAjuda}
      .value=${r()}
      @kk-change=${e=>{let t=e.target.value;t!==r()&&a(t).then(d)}}
    >
      ${o.map(({tag:e,nome:n})=>t`<kk-option value=${e} lang=${e}>${n}</kk-option>`)}
    </kk-select>
  `}function Io(){return t`
    <div class="formulario">
      <p class="editor__status">${K}</p>

      <h2 class="secao">${i.perfil.cartao}</h2>
      ${X(`nome`,i.perfil.nome,`text`,`name`)}
      ${X(`telefone`,i.perfil.telefone,`tel`,`tel`)}
      ${X(`email`,i.perfil.email,`email`,`email`)}
      ${X(`link`,i.perfil.link,`text`,`url`)}
      ${X(`comentario`,i.perfil.comentario)}

      <h2 class="secao">${i.perfil.congregacaoSecao}</h2>
      ${X(`congregacao`,i.perfil.congregacao)}
      ${X(`grupo`,i.perfil.grupo)}

      <h2 class="secao">${i.perfil.secretario}</h2>
      ${X(`nome_secretario`,i.perfil.nome)}
      ${X(`telefone_secretario`,i.perfil.telefone,`tel`)}

      ${Fo()}
    </div>
  `}function Lo(){return t`
    <div class="formulario">
      <p class="perfil__ice-explica">
        <kk-icon name="heartbeat"></kk-icon>
        <span>${i.perfil.iceExplica}</span>
      </p>
      <p class="editor__status">${K}</p>

      <h2 class="secao">${i.perfil.saude}</h2>
      <kk-select
        label=${i.perfil.tipo_sanguineo}
        .value=${G.tipo_sanguineo}
        @kk-change=${e=>q(`tipo_sanguineo`,e.target.value)}
      >
        <kk-option value="">${i.perfil.selecione}</kk-option>
        ${de.map(e=>t`<kk-option value=${e}>${vo(e)}</kk-option>`)}
      </kk-select>
      ${Eo(`doador_orgaos`,i.perfil.doador)}
      ${X(`alergias`,i.perfil.alergias)}
      ${To(`medicamentos_em_uso`,i.perfil.medicamentos)}
      ${To(`observacoes_medicas`,i.perfil.observacoes)}

      <h2 class="secao">${i.perfil.gestacao}</h2>
      ${Eo(`gravida`,i.perfil.gestante)}
      ${G.gravida===1?t`
            <div class="formulario__par">
              <kk-select
                label=${i.perfil.meses}
                .value=${G.gravidez_meses}
                @kk-change=${e=>q(`gravidez_meses`,e.target.value)}
              >
                <kk-option value="">—</kk-option>
                ${Array.from({length:9},(e,t)=>t+1).map(e=>t`<kk-option value=${String(e)}>${i.perfil.mes(e)}</kk-option>`)}
              </kk-select>
              ${X(`data_prevista_parto`,i.perfil.parto,`date`)}
            </div>
          `:n}

      <h2 class="secao">${i.perfil.dpa}</h2>
      ${_e(G)===``?n:t`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${i.perfil.dpaVencidoAviso(_e(G))}
            </kk-alert>
          `}
      ${Eo(`recusa_transfusao`,i.perfil.recusa)}
      ${G.recusa_transfusao===1?t`
            <kk-alert open variant="danger">
              <kk-icon slot="icon" name="alert-octagon"></kk-icon>
              <strong>${i.perfil.naoApliqueSangue}</strong>
            </kk-alert>
          `:n}
      ${To(`fracoes_aceitas`,i.perfil.fracoes)}
      ${X(`dpa_assinado_em`,i.perfil.dpaAssinado,`date`)}

      <h2 class="secao">${i.perfil.emergencia}</h2>
      ${X(`contato_emergencia`,i.perfil.contatoNome)}
      ${X(`contato_emergencia_telefone`,i.perfil.contatoTelefone,`tel`)}

      <h2 class="secao">${i.perfil.colih}</h2>
      ${X(`nome_colih`,i.perfil.contatoNome)}
      ${X(`telefone_colih`,i.perfil.contatoTelefone,`tel`)}

      <h2 class="secao">${i.perfil.identificacao}</h2>
      ${X(`cartao_sus_numero`,i.perfil.sus)}
      ${X(`cpf_titular`,i.perfil.cpf)}
      ${X(`upa_referencia`,i.perfil.upa)}
    </div>
  `}function Ro(e){let n=e.args.join(`/`);return n!==Ao&&(Q=jo(e),Ao=n),t`
    ${Po()}
    <div id="perfil-painel" role="tabpanel" aria-labelledby=${`perfil-aba-${Q}`}>
      ${Q===`ice`?Lo():Q===`acessibilidade`?Ne():Io()}
    </div>
  `}function zo(){let e=Te(G),r=me(G);return t`
    <div class="cartao-contato">
      <h2 class="cartao-contato__nome">${G.nome||i.perfil.semNome}</h2>
      <p class="cartao-contato__telefone">${G.telefone}</p>

      ${r===``?t`
            <div class="vazio">
              <kk-icon class="vazio__icone" name="qrcode"></kk-icon>
              <p>${i.perfil.semCartao}</p>
            </div>
          `:t`
            <kk-qr-code
              class="cartao-contato__qr"
              value=${r}
              size="224"
              error-correction="M"
              label=${i.perfil.qrAlt}
            ></kk-qr-code>
          `}

      ${G.comentario===``?n:t`<p class="cartao-contato__nota">${G.comentario}</p>`}

      ${r===``?n:t`
            <div class="cartao-contato__acoes">
              ${e===``?n:t`
                    <kk-button variant="success" href=${e} target="_blank">
                      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>WhatsApp
                    </kk-button>
                  `}
              <kk-button
                variant="primary"
                outline
                @click=${()=>void le(G.nome||i.perfil.semNome,he(G))}
              >
                <kk-icon slot="prefix" name="share"></kk-icon>${i.leitura.compartilhar}
              </kk-button>
            </div>
          `}
    </div>
  `}function $(e,r){return r===``?n:t`
    <div class="ice__dado">
      <span class="ice__rotulo">${e}</span>
      <span class="ice__valor">${r}</span>
    </div>
  `}function Bo(e,r,i){return r===``?n:t`
    <div class="ice__contato">
      <span><strong>${e}</strong> ${r}</span>
      ${i===``?n:t`
            <kk-button size="small" variant="success" outline href=${`tel:${i}`}>
              <kk-icon slot="prefix" name="phone"></kk-icon>${i}
            </kk-button>
          `}
    </div>
  `}function Vo(){let e=[G.gravidez_meses===``?``:i.perfil.mesesGestacao(Number(G.gravidez_meses)),fe(G)===``?``:i.perfil.partoEm(fe(G))].filter(e=>e!==``).join(` · `),r=pe(G);return t`
    ${G.recusa_transfusao===1?t`
          <kk-alert open variant="danger" class="ice__alerta">
            <kk-icon slot="icon" name="alert-octagon"></kk-icon>
            <strong>${i.perfil.naoApliqueSangue}</strong>
            <span>${i.perfil.portadorDiretriz}</span>
          </kk-alert>
        `:n}

    ${G.gravida===1?t`
          <kk-alert open variant="warning" class="ice__alerta">
            <kk-icon slot="icon" name="alert-triangle"></kk-icon>
            <strong>${i.perfil.gestanteMaiusculo}</strong>
            <span>${e}</span>
          </kk-alert>
        `:n}

    ${ve(G)?t`
          <div class="ice">
            <h2 class="ice__nome">${G.nome||`—`}</h2>
            <div class="ice__grade">
              ${$(i.perfil.tipo_sanguineo,vo(G.tipo_sanguineo))}
              ${$(i.perfil.doador,G.doador_orgaos===1?i.perfil.sim:``)}
              ${$(i.perfil.alergias,G.alergias)}
              ${$(i.perfil.gestante,G.gravida===1?e:``)}
            </div>
            ${$(i.perfil.medicamentos,G.medicamentos_em_uso)}
            ${$(i.perfil.observacoes,G.observacoes_medicas)}
            ${$(i.perfil.fracoes,G.fracoes_aceitas)}
          </div>

          ${G.contato_emergencia===``&&G.nome_colih===``?n:t`
                <div class="ice">
                  ${Bo(i.perfil.emergencia,G.contato_emergencia,G.contato_emergencia_telefone)}
                  ${Bo(i.perfil.colih,G.nome_colih,G.telefone_colih)}
                </div>
              `}

          <div class="ice">
            ${$(i.perfil.sus,G.cartao_sus_numero)}
            ${$(i.perfil.cpf,G.cpf_titular)}
            ${$(i.perfil.upa,G.upa_referencia)}
            ${r===null?n:t`
                  <p class="ice__dpa" ?data-vencido=${r.dias<0}>
                    <kk-icon name="calendar-check"></kk-icon>
                    ${i.perfil.dpa_assinado_em(r.data)}
                    ${r.dias<0?i.perfil.dpaVencido:i.perfil.dpaRenovar(r.dias)}
                  </p>
                `}
          </div>
        `:t`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="heartbeat"></kk-icon>
            <p>${i.perfil.semFicha}</p>
          </div>
        `}
  `}var Ho={voltarPara(e){let[t]=e.args;return t===`cartao`||t===`ice`?`perfil`:`home`},aoVoltar(e){let[t]=e.args;return t!==`cartao`&&t!==`ice`?!1:(history.back(),!0)},titulo(e){let[t]=e.args;if(t===`cartao`)return i.perfil.tituloCartao;if(t===`ice`)return i.perfil.tituloFicha},conteudo(e){let t=_o.espera();if(t!==null)return t;let[n]=e.args;return n===`cartao`?zo():n===`ice`?Vo():Ro(e)}};export{Ho as telaPerfil};