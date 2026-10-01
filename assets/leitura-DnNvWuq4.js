import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-DQE9Hi7n.js";import{t as r}from"./html-C5yDSNPC.js";import{R as i}from"./index-DOFaeRHJ.js";var a=[.3,.6,1.2];function o(e){return a[e-1]??a[1]}function s(e,t){let n=requestAnimationFrame(function r(){let{ativo:i,pausado:a,nivel:s}=t();i&&(a||(e.scrollTop+=o(s)),n=requestAnimationFrame(r))});return()=>cancelAnimationFrame(n)}function c(){return typeof speechSynthesis<`u`}function l(e,t){if(!c()){t?.();return}let n=new SpeechSynthesisUtterance(e);n.lang=`pt-BR`,n.rate=.9,n.onend=()=>t?.(),n.onerror=()=>t?.(),speechSynthesis.cancel(),speechSynthesis.speak(n)}function u(){c()&&speechSynthesis.pause()}function d(){c()&&speechSynthesis.resume()}function f(){c()&&speechSynthesis.cancel()}function p(e){e?.scrollIntoView({behavior:`smooth`,block:`center`})}function m(e){e.querySelector(`:scope > .rodape-notas[data-montado]`)?.remove();let t=e.querySelectorAll(`.note-nota-ref[data-nota]`);if(t.length===0)return;let r=document.createElement(`div`);r.className=`rodape-notas`,r.dataset.montado=``;let i=document.createElement(`h3`);i.textContent=n.notas.titulo;let a=document.createElement(`ol`);r.append(i,a);for(let[e,r]of t.entries()){let t=r.getAttribute(`data-nota`)??``;r.textContent=String(e+1),r.href=`#`,r.title=t;let i=document.createElement(`li`);i.textContent=t;let o=document.createElement(`a`);o.className=`rodape-notas__voltar`,o.href=`#`,o.textContent=`↩`,o.setAttribute(`aria-label`,n.notas.voltar),o.addEventListener(`click`,e=>{e.preventDefault(),p(r)}),i.append(` `,o),a.append(i),r.addEventListener(`click`,e=>{e.preventDefault(),p(i)})}e.append(r)}var h=class{apresentando=!1;pausada=!1;nivel=2;falando=!1;falaPausada=!1;#e;abrir(){this.apresentando=!0,this.pausada=!1,i();let e=document.querySelector(`.apresentacao__rolagem`);e!==null&&(m(e),this.#e=s(e,()=>({ativo:this.apresentando,pausado:this.pausada,nivel:this.nivel})))}fechar(){this.apresentando=!1,this.pausada=!1,this.#e?.(),this.#e=void 0,this.calar()}ajustar(e){this.nivel=Math.min(3,Math.max(1,this.nivel+e)),i()}alternarPausa(){this.pausada=!this.pausada,i()}calar(){f(),this.falando=!1,this.falaPausada=!1}alternarFala(e){this.falando?this.falaPausada?(d(),this.falaPausada=!1):(u(),this.falaPausada=!0):(l(r(e),()=>{this.falando=!1,this.falaPausada=!1,i()}),this.falando=!0,this.falaPausada=!1),i()}botaoFala(r){if(!c())return t;let i=this.falando?this.falaPausada?`player-play`:`player-pause`:`volume`,a=this.falando?this.falaPausada?n.leitura.retomarLeitura:n.leitura.pausarLeitura:n.leitura.ler;return e`
      <kk-icon-button
        name=${i}
        label=${a}
        @click=${()=>this.alternarFala(r())}
      ></kk-icon-button>
    `}botaoApresentar(){return e`
      <kk-icon-button
        name="presentation"
        label=${n.leitura.apresentar}
        @click=${()=>this.abrir()}
      ></kk-icon-button>
    `}overlay(n,r){return this.apresentando?e`
      <div class="apresentacao">
        <div class="apresentacao__rolagem">${n}</div>
        ${this.controles(r)}
      </div>
    `:t}controles(t){return e`
      <div class="apresentacao__controles">
        <kk-icon-button
          name="minus"
          label=${n.leitura.maisDevagar}
          ?disabled=${this.nivel<=1}
          @click=${()=>this.ajustar(-1)}
        ></kk-icon-button>
        <span class="apresentacao__velocidade">${n.leitura.velocidade(this.nivel)}</span>
        <kk-icon-button
          name="plus"
          label=${n.leitura.maisRapido}
          ?disabled=${this.nivel>=3}
          @click=${()=>this.ajustar(1)}
        ></kk-icon-button>
        <kk-icon-button
          name=${this.pausada?`player-play`:`player-pause`}
          label=${this.pausada?n.leitura.continuar:n.leitura.pausar}
          @click=${()=>this.alternarPausa()}
        ></kk-icon-button>
        ${this.botaoFala(t)}
        <kk-icon-button
          name="x"
          label=${n.acoes.fechar}
          @click=${()=>{this.fechar(),i()}}
        ></kk-icon-button>
      </div>
    `}};export{m as n,h as t};