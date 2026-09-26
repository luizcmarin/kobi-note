import{_t as e,bt as t,ft as n,xt as r}from"./index-tEHw1VqD.js";var i={"&nbsp;":` `,"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&apos;":`'`,"&#39;":`'`,"&ldquo;":`“`,"&rdquo;":`”`,"&lsquo;":`‘`,"&rsquo;":`’`,"&hellip;":`...`,"&mdash;":`—`,"&ndash;":`–`},a=/[​﻿­]/g,o=/ /g,s=/<(?:br|hr)\b[^>]*>|<\/(?:p|div|h[1-6]|blockquote|tr|section|article|figcaption|ul|ol)\b[^>]*>/gi,c=/<li\b[^>]*>/gi,l=/<[^>]*>/g;function u(e){return e.replace(/&[a-z]+;|&#\d+;/gi,e=>{let t=i[e.toLowerCase()];if(t!==void 0)return t;let n=/^&#(\d+);$/.exec(e);return n?.[1]===void 0?e:String.fromCodePoint(Number(n[1]))})}function d(e){return e.replace(a,``).replace(o,` `).replace(/\s+/g,` `).trim()}function f(e){return d(u((e||``).replace(c,` `).replace(s,` `).replace(l,``)))}var p=[.3,.6,1.2];function m(e){return p[e-1]??p[1]}function h(e,t){let n=requestAnimationFrame(function r(){let{ativo:i,pausado:a,nivel:o}=t();i&&(a||(e.scrollTop+=m(o)),n=requestAnimationFrame(r))});return()=>cancelAnimationFrame(n)}function g(){return typeof speechSynthesis<`u`}function _(e,t){if(!g()){t?.();return}let n=new SpeechSynthesisUtterance(e);n.lang=`pt-BR`,n.rate=.9,n.onend=()=>t?.(),n.onerror=()=>t?.(),speechSynthesis.cancel(),speechSynthesis.speak(n)}function v(){g()&&speechSynthesis.pause()}function y(){g()&&speechSynthesis.resume()}function b(){g()&&speechSynthesis.cancel()}function x(e){e?.scrollIntoView({behavior:`smooth`,block:`center`})}function S(t){t.querySelector(`:scope > .rodape-notas[data-montado]`)?.remove();let n=t.querySelectorAll(`.note-nota-ref[data-nota]`);if(n.length===0)return;let r=document.createElement(`div`);r.className=`rodape-notas`,r.dataset.montado=``;let i=document.createElement(`h3`);i.textContent=e.notas.titulo;let a=document.createElement(`ol`);r.append(i,a);for(let[t,r]of n.entries()){let n=r.getAttribute(`data-nota`)??``;r.textContent=String(t+1),r.href=`#`,r.title=n;let i=document.createElement(`li`);i.textContent=n;let o=document.createElement(`a`);o.className=`rodape-notas__voltar`,o.href=`#`,o.textContent=`↩`,o.setAttribute(`aria-label`,e.notas.voltar),o.addEventListener(`click`,e=>{e.preventDefault(),x(r)}),i.append(` `,o),a.append(i),r.addEventListener(`click`,e=>{e.preventDefault(),x(i)})}t.append(r)}var C=class{apresentando=!1;pausada=!1;nivel=2;falando=!1;falaPausada=!1;#e;abrir(){this.apresentando=!0,this.pausada=!1,n();let e=document.querySelector(`.apresentacao__rolagem`);e!==null&&(S(e),this.#e=h(e,()=>({ativo:this.apresentando,pausado:this.pausada,nivel:this.nivel})))}fechar(){this.apresentando=!1,this.pausada=!1,this.#e?.(),this.#e=void 0,this.calar()}ajustar(e){this.nivel=Math.min(3,Math.max(1,this.nivel+e)),n()}alternarPausa(){this.pausada=!this.pausada,n()}calar(){b(),this.falando=!1,this.falaPausada=!1}alternarFala(e){this.falando?this.falaPausada?(y(),this.falaPausada=!1):(v(),this.falaPausada=!0):(_(f(e),()=>{this.falando=!1,this.falaPausada=!1,n()}),this.falando=!0,this.falaPausada=!1),n()}botaoFala(n){if(!g())return t;let i=this.falando?this.falaPausada?`player-play`:`player-pause`:`volume`,a=this.falando?this.falaPausada?e.leitura.retomarLeitura:e.leitura.pausarLeitura:e.leitura.ler;return r`
      <kk-icon-button
        name=${i}
        label=${a}
        @click=${()=>this.alternarFala(n())}
      ></kk-icon-button>
    `}botaoApresentar(){return r`
      <kk-icon-button
        name="presentation"
        label=${e.leitura.apresentar}
        @click=${()=>this.abrir()}
      ></kk-icon-button>
    `}overlay(e,n){return this.apresentando?r`
      <div class="apresentacao">
        <div class="apresentacao__rolagem">${e}</div>
        ${this.controles(n)}
      </div>
    `:t}controles(t){return r`
      <div class="apresentacao__controles">
        <kk-icon-button
          name="minus"
          label=${e.leitura.maisDevagar}
          ?disabled=${this.nivel<=1}
          @click=${()=>this.ajustar(-1)}
        ></kk-icon-button>
        <span class="apresentacao__velocidade">${e.leitura.velocidade(this.nivel)}</span>
        <kk-icon-button
          name="plus"
          label=${e.leitura.maisRapido}
          ?disabled=${this.nivel>=3}
          @click=${()=>this.ajustar(1)}
        ></kk-icon-button>
        <kk-icon-button
          name=${this.pausada?`player-play`:`player-pause`}
          label=${this.pausada?e.leitura.continuar:e.leitura.pausar}
          @click=${()=>this.alternarPausa()}
        ></kk-icon-button>
        ${this.botaoFala(t)}
        <kk-icon-button
          name="x"
          label=${e.acoes.fechar}
          @click=${()=>{this.fechar(),n()}}
        ></kk-icon-button>
      </div>
    `}};export{S as n,f as r,C as t};