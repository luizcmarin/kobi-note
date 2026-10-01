import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{t as r}from"./html-C5yDSNPC.js";import{t as i}from"./defineProperty-BbfpZ9Tg.js";import{n as a,r as o,t as s}from"./classPrivateFieldGet2-BgUkuw-u.js";import{R as c}from"./index-DYev-n2R.js";var l=[.3,.6,1.2];function u(e){return l[e-1]??l[1]}function d(e,t){let n=requestAnimationFrame(function r(){let{ativo:i,pausado:a,nivel:o}=t();i&&(a||(e.scrollTop+=u(o)),n=requestAnimationFrame(r))});return()=>cancelAnimationFrame(n)}function f(){return typeof speechSynthesis<`u`}function p(e,t){if(!f()){t?.();return}let n=new SpeechSynthesisUtterance(e);n.lang=`pt-BR`,n.rate=.9,n.onend=()=>t?.(),n.onerror=()=>t?.(),speechSynthesis.cancel(),speechSynthesis.speak(n)}function m(){f()&&speechSynthesis.pause()}function h(){f()&&speechSynthesis.resume()}function g(){f()&&speechSynthesis.cancel()}function _(e){e?.scrollIntoView({behavior:`smooth`,block:`center`})}function v(e){e.querySelector(`:scope > .rodape-notas[data-montado]`)?.remove();let t=e.querySelectorAll(`.note-nota-ref[data-nota]`);if(t.length===0)return;let r=document.createElement(`div`);r.className=`rodape-notas`,r.dataset.montado=``;let i=document.createElement(`h3`);i.textContent=n.notas.titulo;let a=document.createElement(`ol`);r.append(i,a);for(let[e,r]of t.entries()){let t=r.getAttribute(`data-nota`)??``;r.textContent=String(e+1),r.href=`#`,r.title=t;let i=document.createElement(`li`);i.textContent=t;let o=document.createElement(`a`);o.className=`rodape-notas__voltar`,o.href=`#`,o.textContent=`↩`,o.setAttribute(`aria-label`,n.notas.voltar),o.addEventListener(`click`,e=>{e.preventDefault(),_(r)}),i.append(` `,o),a.append(i),r.addEventListener(`click`,e=>{e.preventDefault(),_(i)})}e.append(r)}var y=new WeakMap,b=class{constructor(){i(this,`apresentando`,!1),i(this,`pausada`,!1),i(this,`nivel`,2),i(this,`falando`,!1),i(this,`falaPausada`,!1),o(this,y,void 0)}abrir(){this.apresentando=!0,this.pausada=!1,c();let e=document.querySelector(`.apresentacao__rolagem`);e!==null&&(v(e),a(y,this,d(e,()=>({ativo:this.apresentando,pausado:this.pausada,nivel:this.nivel}))))}fechar(){this.apresentando=!1,this.pausada=!1,s(y,this)?.call(this),a(y,this,void 0),this.calar()}ajustar(e){this.nivel=Math.min(3,Math.max(1,this.nivel+e)),c()}alternarPausa(){this.pausada=!this.pausada,c()}calar(){g(),this.falando=!1,this.falaPausada=!1}alternarFala(e){this.falando?this.falaPausada?(h(),this.falaPausada=!1):(m(),this.falaPausada=!0):(p(r(e),()=>{this.falando=!1,this.falaPausada=!1,c()}),this.falando=!0,this.falaPausada=!1),c()}botaoFala(r){if(!f())return t;let i=this.falando?this.falaPausada?`player-play`:`player-pause`:`volume`,a=this.falando?this.falaPausada?n.leitura.retomarLeitura:n.leitura.pausarLeitura:n.leitura.ler;return e`
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
          @click=${()=>{this.fechar(),c()}}
        ></kk-icon-button>
      </div>
    `}};export{v as n,b as t};