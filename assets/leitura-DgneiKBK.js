import{r as e}from"./texto-DhKYsM3f.js";import{ct as t,et as n,it as r,ot as i}from"./index-EsbOy3qu.js";var a=[.3,.6,1.2];function o(e){return a[e-1]??a[1]}function s(e,t){let n=requestAnimationFrame(function r(){let{ativo:i,pausado:a,nivel:s}=t();i&&(a||(e.scrollTop+=o(s)),n=requestAnimationFrame(r))});return()=>cancelAnimationFrame(n)}function c(){return typeof speechSynthesis<`u`}function l(e,t){if(!c()){t?.();return}let n=new SpeechSynthesisUtterance(e);n.lang=`pt-BR`,n.rate=.9,n.onend=()=>t?.(),n.onerror=()=>t?.(),speechSynthesis.cancel(),speechSynthesis.speak(n)}function u(){c()&&speechSynthesis.pause()}function d(){c()&&speechSynthesis.resume()}function f(){c()&&speechSynthesis.cancel()}function p(e){e?.scrollIntoView({behavior:`smooth`,block:`center`})}function m(e){e.querySelector(`:scope > .rodape-notas`)?.remove();let t=e.querySelectorAll(`.note-nota-ref[data-nota]`);if(t.length===0)return;let n=document.createElement(`div`);n.className=`rodape-notas`;let i=document.createElement(`h3`);i.textContent=r.notas.titulo;let a=document.createElement(`ol`);n.append(i,a);for(let[e,n]of t.entries()){let t=n.getAttribute(`data-nota`)??``;n.textContent=String(e+1),n.href=`#`,n.title=t;let i=document.createElement(`li`);i.textContent=t;let o=document.createElement(`a`);o.className=`rodape-notas__voltar`,o.href=`#`,o.textContent=`↩`,o.setAttribute(`aria-label`,r.notas.voltar),o.addEventListener(`click`,e=>{e.preventDefault(),p(n)}),i.append(` `,o),a.append(i),n.addEventListener(`click`,e=>{e.preventDefault(),p(i)})}e.append(n)}var h=class{apresentando=!1;pausada=!1;nivel=2;falando=!1;falaPausada=!1;#e;abrir(){this.apresentando=!0,this.pausada=!1,n();let e=document.querySelector(`.apresentacao__rolagem`);e!==null&&(m(e),this.#e=s(e,()=>({ativo:this.apresentando,pausado:this.pausada,nivel:this.nivel})))}fechar(){this.apresentando=!1,this.pausada=!1,this.#e?.(),this.#e=void 0,this.calar()}ajustar(e){this.nivel=Math.min(3,Math.max(1,this.nivel+e)),n()}alternarPausa(){this.pausada=!this.pausada,n()}calar(){f(),this.falando=!1,this.falaPausada=!1}alternarFala(t){this.falando?this.falaPausada?(d(),this.falaPausada=!1):(u(),this.falaPausada=!0):(l(e(t),()=>{this.falando=!1,this.falaPausada=!1,n()}),this.falando=!0,this.falaPausada=!1),n()}botaoFala(e){if(!c())return i;let n=this.falando?this.falaPausada?`player-play`:`player-pause`:`volume`,a=this.falando?this.falaPausada?r.leitura.retomarLeitura:r.leitura.pausarLeitura:r.leitura.ler;return t`
      <kk-icon-button
        name=${n}
        label=${a}
        @click=${()=>this.alternarFala(e())}
      ></kk-icon-button>
    `}botaoApresentar(){return t`
      <kk-icon-button
        name="presentation"
        label=${r.leitura.apresentar}
        @click=${()=>this.abrir()}
      ></kk-icon-button>
    `}overlay(e,n){return this.apresentando?t`
      <div class="apresentacao">
        <div class="apresentacao__rolagem">${e}</div>
        ${this.controles(n)}
      </div>
    `:i}controles(e){return t`
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
          @click=${()=>{this.fechar(),n()}}
        ></kk-icon-button>
      </div>
    `}};export{m as n,h as t};