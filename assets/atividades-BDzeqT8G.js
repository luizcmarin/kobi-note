import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-DQE9Hi7n.js";import{R as r}from"./index-DOFaeRHJ.js";import{m as i}from"./dados-BKVBdvMA.js";var a=[1,2,3];function o(e,t){return new Map(e.map((e,n)=>[e,t[n]===e]))}function s(e,t){return e.size===t&&[...e.values()].every(Boolean)}function c(e){return e===null?0:[...e.values()].filter(e=>!e).length}var l=class{decorrido=0;desde=null;tique;semTempo=!1;comecar(e){this.pausar(),this.decorrido=0,this.semTempo=e,this.andar()}andar(){this.desde===null&&(this.desde=Date.now(),clearInterval(this.tique),this.semTempo||(this.tique=setInterval(r,1e3)))}pausar(){this.desde!==null&&(this.decorrido+=Date.now()-this.desde),this.desde=null,clearInterval(this.tique),this.tique=void 0}corrido(){return this.decorrido+(this.desde===null?0:Date.now()-this.desde)}};function u(n,r){return n.semTempo?t:e`<kk-badge pill variant="primary" class=${r}>
    <kk-icon name="clock"></kk-icon>${i(Math.floor(n.corrido()/1e3))}
  </kk-badge>`}function d(t,r){return e`
    <h2 class="secao">${n.atividades.nivel}</h2>
    <div class="chips">
      ${a.map(i=>e`
          <button class="chip" ?data-ativo=${t===i} @click=${()=>r(i)}>
            ${n.atividades.niveis[i]}
          </button>
        `)}
    </div>
  `}function f(e){return e===void 0||Number(e.partidas)===0?n.atividades.semRecorde:n.atividades.recorde(i(Math.round(Number(e.melhor_ms)/1e3)),Number(e.partidas))}function p(t,n){return e`<p class="discreto ${n}">
    <kk-icon name="trophy"></kk-icon>${t}
  </p>`}function m(r,i,a){return r?.bateu===!0?e`<kk-alert variant="success" open class="${i}__novo-recorde">
      <kk-icon slot="icon" name="trophy"></kk-icon>${n.atividades.novoRecorde}
    </kk-alert>`:r===null||a===null?t:e`<p class="discreto ${i}__resumo">${a}</p>`}export{u as a,o as c,p as i,c as l,m as n,f as o,d as r,a as s,l as t,s as u};