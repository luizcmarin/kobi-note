import{Q as e,at as t,nt as n,rt as r}from"./index-qggyvcH6.js";var i={"&nbsp;":` `,"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&apos;":`'`,"&#39;":`'`,"&ldquo;":`“`,"&rdquo;":`”`,"&lsquo;":`‘`,"&rsquo;":`’`,"&hellip;":`…`,"&mdash;":`—`,"&ndash;":`–`};function a(e){return e.replace(/&[a-z]+;|&#\d+;/gi,e=>{let t=i[e.toLowerCase()];if(t!==void 0)return t;let n=/^&#(\d+);$/.exec(e);return n?.[1]===void 0?e:String.fromCodePoint(Number(n[1]))}).replace(/&amp;/g,`&`)}function o(e){return a((e||``).replace(/<br\s*\/?>/gi,` `).replace(/<\/(p|div|h[1-6]|li|blockquote|tr|section|article)>/gi,` `).replace(/<[^>]+>/g,``)).replace(/\s+/g,` `).trim()}function s(e,t=180){let n=o(e);return n.length>t?`${n.slice(0,t)}…`:n}var c=[.3,.6,1.2];function l(e){return c[e-1]??c[1]}function u(e,t){let n=requestAnimationFrame(function r(){let{ativo:i,pausado:a,nivel:o}=t();i&&(a||(e.scrollTop+=l(o)),n=requestAnimationFrame(r))});return()=>cancelAnimationFrame(n)}function d(){return typeof speechSynthesis<`u`}function f(e,t){if(!d()){t?.();return}let n=new SpeechSynthesisUtterance(e);n.lang=`pt-BR`,n.rate=.9,n.onend=()=>t?.(),n.onerror=()=>t?.(),speechSynthesis.cancel(),speechSynthesis.speak(n)}function p(){d()&&speechSynthesis.pause()}function m(){d()&&speechSynthesis.resume()}function h(){d()&&speechSynthesis.cancel()}function g(e){e?.scrollIntoView({behavior:`smooth`,block:`center`})}function _(e){e.querySelector(`:scope > .rodape-notas`)?.remove();let t=e.querySelectorAll(`.note-nota-ref[data-nota]`);if(t.length===0)return;let r=document.createElement(`div`);r.className=`rodape-notas`;let i=document.createElement(`h3`);i.textContent=n.notas.titulo;let a=document.createElement(`ol`);r.append(i,a);for(let[e,r]of t.entries()){let t=r.getAttribute(`data-nota`)??``;r.textContent=String(e+1),r.href=`#`,r.title=t;let i=document.createElement(`li`);i.textContent=t;let o=document.createElement(`a`);o.className=`rodape-notas__voltar`,o.href=`#`,o.textContent=`↩`,o.setAttribute(`aria-label`,n.notas.voltar),o.addEventListener(`click`,e=>{e.preventDefault(),g(r)}),i.append(` `,o),a.append(i),r.addEventListener(`click`,e=>{e.preventDefault(),g(i)})}e.append(r)}var v=class{apresentando=!1;pausada=!1;nivel=2;falando=!1;falaPausada=!1;#e;abrir(){this.apresentando=!0,this.pausada=!1,e();let t=document.querySelector(`.apresentacao__rolagem`);t!==null&&(_(t),this.#e=u(t,()=>({ativo:this.apresentando,pausado:this.pausada,nivel:this.nivel})))}fechar(){this.apresentando=!1,this.pausada=!1,this.#e?.(),this.#e=void 0,this.calar()}ajustar(t){this.nivel=Math.min(3,Math.max(1,this.nivel+t)),e()}alternarPausa(){this.pausada=!this.pausada,e()}calar(){h(),this.falando=!1,this.falaPausada=!1}alternarFala(t){this.falando?this.falaPausada?(m(),this.falaPausada=!1):(p(),this.falaPausada=!0):(f(o(t),()=>{this.falando=!1,this.falaPausada=!1,e()}),this.falando=!0,this.falaPausada=!1),e()}botaoFala(e){if(!d())return r;let i=this.falando?this.falaPausada?`player-play`:`player-pause`:`volume`,a=this.falando?this.falaPausada?n.leitura.retomarLeitura:n.leitura.pausarLeitura:n.leitura.ler;return t`
      <kk-icon-button
        name=${i}
        label=${a}
        @click=${()=>this.alternarFala(e())}
      ></kk-icon-button>
    `}botaoApresentar(){return t`
      <kk-icon-button
        name="presentation"
        label=${n.leitura.apresentar}
        @click=${()=>this.abrir()}
      ></kk-icon-button>
    `}overlay(e,n){return this.apresentando?t`
      <div class="apresentacao">
        <div class="apresentacao__rolagem">${e}</div>
        ${this.controles(n)}
      </div>
    `:r}controles(r){return t`
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
        ${this.botaoFala(r)}
        <kk-icon-button
          name="x"
          label=${n.acoes.fechar}
          @click=${()=>{this.fechar(),e()}}
        ></kk-icon-button>
      </div>
    `}};export{s as n,o as r,v as t};