import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{t as r}from"./defineProperty-BbfpZ9Tg.js";import{R as i}from"./index-DYev-n2R.js";import{m as a}from"./dados-BckH-niL.js";var o=[1,2,3];function s(e,t){return new Map(e.map((e,n)=>[e,t[n]===e]))}function c(e,t){return e.size===t&&[...e.values()].every(Boolean)}function l(e){return e===null?0:[...e.values()].filter(e=>!e).length}var u=class{constructor(){r(this,`decorrido`,0),r(this,`desde`,null),r(this,`tique`,void 0),r(this,`semTempo`,!1)}comecar(e){this.pausar(),this.decorrido=0,this.semTempo=e,this.andar()}andar(){this.desde===null&&(this.desde=Date.now(),clearInterval(this.tique),this.semTempo||(this.tique=setInterval(i,1e3)))}pausar(){this.desde!==null&&(this.decorrido+=Date.now()-this.desde),this.desde=null,clearInterval(this.tique),this.tique=void 0}corrido(){return this.decorrido+(this.desde===null?0:Date.now()-this.desde)}};function d(n,r){return n.semTempo?t:e`<kk-badge pill variant="primary" class=${r}>
    <kk-icon name="clock"></kk-icon>${a(Math.floor(n.corrido()/1e3))}
  </kk-badge>`}function f(t,r){return e`
    <h2 class="secao">${n.atividades.nivel}</h2>
    <div class="chips">
      ${o.map(i=>e`
          <button class="chip" ?data-ativo=${t===i} @click=${()=>r(i)}>
            ${n.atividades.niveis[i]}
          </button>
        `)}
    </div>
  `}function p(e){return e===void 0||Number(e.partidas)===0?n.atividades.semRecorde:n.atividades.recorde(a(Math.round(Number(e.melhor_ms)/1e3)),Number(e.partidas))}function m(t,n){return e`<p class="discreto ${n}">
    <kk-icon name="trophy"></kk-icon>${t}
  </p>`}function h(r,i,a){return r?.bateu===!0?e`<kk-alert variant="success" open class="${i}__novo-recorde">
      <kk-icon slot="icon" name="trophy"></kk-icon>${n.atividades.novoRecorde}
    </kk-alert>`:r===null||a===null?t:e`<p class="discreto ${i}__resumo">${a}</p>`}export{d as a,s as c,m as i,l,h as n,p as o,f as r,o as s,u as t,c as u};