import{t as e}from"./defineProperty-BbfpZ9Tg.js";import{i as t,t as n}from"./lit-CI_s7elC.js";import{n as r}from"./strings-V1DWQvwW.js";import{t as i}from"./html-C5yDSNPC.js";import{n as a,r as o,t as s}from"./classPrivateFieldGet2-BgUkuw-u.js";import{ct as c}from"./index-DjPQ20Ch.js";import{a as l,i as u,n as d,r as f,s as p,t as m}from"./apresentacao-WLG3gnVE.js";function h(e){e?.scrollIntoView({behavior:`smooth`,block:`center`})}function g(e){e.querySelector(`:scope > .rodape-notas[data-montado]`)?.remove();let t=e.querySelectorAll(`.note-nota-ref[data-nota]`);if(t.length===0)return;let n=document.createElement(`div`);n.className=`rodape-notas`,n.dataset.montado=``;let i=document.createElement(`h3`);i.textContent=r.notas.titulo;let a=document.createElement(`ol`);n.append(i,a);for(let[e,n]of t.entries()){let t=n.getAttribute(`data-nota`)??``;n.textContent=String(e+1),n.href=`#`,n.title=t;let i=document.createElement(`li`);i.textContent=t;let o=document.createElement(`a`);o.className=`rodape-notas__voltar`,o.href=`#`,o.textContent=`↩`,o.setAttribute(`aria-label`,r.notas.voltar),o.addEventListener(`click`,e=>{e.preventDefault(),h(n)}),i.append(` `,o),a.append(i),n.addEventListener(`click`,e=>{e.preventDefault(),h(i)})}e.append(n)}var _=new WeakMap,v=class{constructor(){e(this,`apresentando`,!1),e(this,`pausada`,!1),e(this,`nivel`,2),e(this,`falando`,!1),e(this,`falaPausada`,!1),o(this,_,void 0)}abrir(){this.apresentando=!0,this.pausada=!1,c();let e=document.querySelector(`.apresentacao__rolagem`);e!==null&&(g(e),a(_,this,d(e,()=>({ativo:this.apresentando,pausado:this.pausada,nivel:this.nivel}))))}fechar(){this.apresentando=!1,this.pausada=!1,s(_,this)?.call(this),a(_,this,void 0),this.calar()}ajustar(e){this.nivel=Math.min(3,Math.max(1,this.nivel+e)),c()}alternarPausa(){this.pausada=!this.pausada,c()}calar(){f(),this.falando=!1,this.falaPausada=!1}alternarFala(e){this.falando?this.falaPausada?(l(),this.falaPausada=!1):(u(),this.falaPausada=!0):(m(i(e),()=>{this.falando=!1,this.falaPausada=!1,c()}),this.falando=!0,this.falaPausada=!1),c()}botaoFala(e){if(!p())return n;let i=this.falando?this.falaPausada?`player-play`:`player-pause`:`volume`,a=this.falando?this.falaPausada?r.leitura.retomarLeitura:r.leitura.pausarLeitura:r.leitura.ler;return t`
      <kk-icon-button
        name=${i}
        label=${a}
        @click=${()=>this.alternarFala(e())}
      ></kk-icon-button>
    `}botaoApresentar(){return t`
      <kk-icon-button
        name="presentation"
        label=${r.leitura.apresentar}
        @click=${()=>this.abrir()}
      ></kk-icon-button>
    `}overlay(e,r){return this.apresentando?t`
      <div class="apresentacao">
        <div class="apresentacao__rolagem">${e}</div>
        ${this.controles(r)}
      </div>
    `:n}controles(e){return t`
      <div class="apresentacao__controles">
        <kk-icon-button
          name="minus"
          label=${r.leitura.maisDevagar}
          ?disabled=${this.nivel<=1}
          @click=${()=>this.ajustar(-1)}
        ></kk-icon-button>
        <span class="apresentacao__velocidade">${r.leitura.velocidade(this.nivel)}</span>
        <kk-icon-button
          name="plus"
          label=${r.leitura.maisRapido}
          ?disabled=${this.nivel>=3}
          @click=${()=>this.ajustar(1)}
        ></kk-icon-button>
        <kk-icon-button
          name=${this.pausada?`player-play`:`player-pause`}
          label=${this.pausada?r.leitura.continuar:r.leitura.pausar}
          @click=${()=>this.alternarPausa()}
        ></kk-icon-button>
        ${this.botaoFala(e)}
        <kk-icon-button
          name="x"
          label=${r.acoes.fechar}
          @click=${()=>{this.fechar(),c()}}
        ></kk-icon-button>
      </div>
    `}};export{g as n,v as t};