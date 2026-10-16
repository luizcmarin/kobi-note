import{t as e}from"./defineProperty-BbfpZ9Tg.js";import{i as t,t as n}from"./lit-CI_s7elC.js";import{n as r}from"./strings-V1DWQvwW.js";import{ct as i}from"./index-Dqmsht0l.js";import{m as a}from"./dados-Xtn6Dy79.js";var o=[1,2,3];function s(e,t){return new Map(e.map((e,n)=>[e,t[n]===e]))}function c(e,t){return e.size===t&&[...e.values()].every(Boolean)}function l(e){return e===null?0:[...e.values()].filter(e=>!e).length}var u=class{constructor(){e(this,`decorrido`,0),e(this,`desde`,null),e(this,`tique`,void 0),e(this,`semTempo`,!1)}comecar(e){this.pausar(),this.decorrido=0,this.semTempo=e,this.andar()}andar(){this.desde===null&&(this.desde=Date.now(),clearInterval(this.tique),this.semTempo||(this.tique=setInterval(i,1e3)))}pausar(){this.desde!==null&&(this.decorrido+=Date.now()-this.desde),this.desde=null,clearInterval(this.tique),this.tique=void 0}corrido(){return this.decorrido+(this.desde===null?0:Date.now()-this.desde)}};function d(e,r){return e.semTempo?n:t`<kk-badge pill variant="primary" class=${r}>
    <kk-icon name="clock"></kk-icon>${a(Math.floor(e.corrido()/1e3))}
  </kk-badge>`}function f(e,n){return t`
    <h2 class="secao">${r.atividades.nivel}</h2>
    <div class="chips">
      ${o.map(i=>t`
          <button class="chip" ?data-ativo=${e===i} @click=${()=>n(i)}>
            ${r.atividades.niveis[i]}
          </button>
        `)}
    </div>
  `}function p(e){return e===void 0||Number(e.partidas)===0?r.atividades.semRecorde:r.atividades.recorde(a(Math.round(Number(e.melhor_ms)/1e3)),Number(e.partidas))}function m(e,n){return t`<p class="discreto ${n}">
    <kk-icon name="trophy"></kk-icon>${e}
  </p>`}function h(e,i,a){return e?.bateu===!0?t`<kk-alert variant="success" open class="${i}__novo-recorde">
      <kk-icon slot="icon" name="trophy"></kk-icon>${r.atividades.novoRecorde}
    </kk-alert>`:e===null||a===null?n:t`<p class="discreto ${i}__resumo">${a}</p>`}export{d as a,s as c,m as i,l,h as n,p as o,f as r,o as s,u as t,c as u};