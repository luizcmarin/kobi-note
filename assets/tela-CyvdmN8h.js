import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DBL7iAb5.js";import{ct as r}from"./index-CqVs9Bsa.js";import{t as i}from"./carga-ktylQVyy.js";import{t as a}from"./busca-BVjniek8.js";import{a as o,c as s,i as c,l,o as u,r as d,s as f,t as p}from"./dados-BwVL-Xiu.js";var m=[],h=p,g=new a(`not_cronologia`),_=null,v=``,y=0,b=new i(`cronologia`,async()=>{m=await u(),v=c(o(m,h,g.achados))[0]?.chave??``});function x(e){return document.querySelector(e)?.getBoundingClientRect().height??0}function S(){return x(`.barra`)+x(`.crono__contexto`)+x(`.crono__chips`)}var C;function w(){let e=document.querySelector(`.crono__contexto`),t=document.querySelector(`.crono__chips`);e!==null&&t!==null&&(C??=new ResizeObserver(()=>{let e=document.documentElement.style;e.setProperty(`--crono-contexto-altura`,`${x(`.crono__contexto`)}px`),e.setProperty(`--crono-chips-altura`,`${x(`.crono__chips`)}px`)}),C.disconnect(),C.observe(e),C.observe(t))}function T(e){v=e,y=performance.now()+900,r();let t=document.getElementById(`crono-periodo-${e}`);if(t===null)return;let n=t.getBoundingClientRect().top+scrollY-S()-8;scrollTo({top:Math.max(n,0),behavior:`smooth`})}var E=!1;function D(){if(E)return;E=!0;let e=!1,t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;let n=document.querySelectorAll(`[data-periodo]`);if(n.length===0){removeEventListener(`scroll`,t),E=!1;return}if(performance.now()<y)return;let i=S()+12,a=``;for(let e of n)e.getBoundingClientRect().top<=i&&(a=e.dataset.periodo??``);a!==``&&a!==v&&(v=a,r())}))};addEventListener(`scroll`,t,{passive:!0})}function O(e){h={...h,trilhas:{...h.trilhas,[e]:h.trilhas[e]===!1}},r()}function k(){h=p,r()}function A(i){let a=_===i.id,o=d.includes(i.trilha)?i.trilha:`biblica`;return e`
    <li class="crono__item" id=${`crono-evento-${i.id??0}`} data-trilha=${o}>
      <span class="crono__marca" aria-hidden="true"></span>

      <div class="crono__cartao">
        <button
          class="crono__alvo"
          aria-expanded=${a?`true`:`false`}
          @click=${()=>{_=a?null:i.id??null,r()}}
        >
          <span class="crono__ano">${l(i)}</span>
          <span class="crono__titulo">${i.titulo}</span>
          <span class="crono__trilha">${s(o)}</span>
        </button>

        ${a?e`
              <div class="crono__detalhe">
                ${i.resumo===``?t:e`<p>${i.resumo}</p>`}
                ${i.referencia===``?t:e`<p class="crono__referencia">${i.referencia}</p>`}
                ${i.link_fonte===``?t:e`
                      <a class="crono__fonte" href=${i.link_fonte} target="_blank" rel="noreferrer">
                        <kk-icon name="external-link"></kk-icon>
                        ${i.obra_fonte===``?n.cronologia.fonte:i.obra_fonte}
                      </a>
                    `}
              </div>
            `:t}
      </div>
    </li>
  `}function j(t){return e`
    <section class="crono__trecho">
      <h2 class="crono__era" id=${`crono-periodo-${t.chave}`} data-periodo=${t.chave}>
        ${t.rotulo}
        <small>${n.cronologia.eventos(t.eventos.length)}</small>
      </h2>
      <ol class="crono__lista">${t.eventos.map(e=>A(e))}</ol>
    </section>
  `}var M={conteudo(){let t=b.espera();if(t!==null)return t;let i=o(m,h,g.achados),a=c(i);return a.length>0&&(queueMicrotask(D),queueMicrotask(w)),e`
      <p class="intro">${n.cronologia.intro}</p>

      <div class="crono__contexto">
        <div class="crono__paradas">
          ${f(m,a).map(t=>e`
              <button
                class="chip chip--pequeno"
                ?data-ativo=${t.chave===v}
                ?disabled=${!t.presente}
                @click=${()=>T(t.chave)}
              >
                ${t.rotulo}
              </button>
            `)}
        </div>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${n.cronologia.buscar}
          .value=${h.busca}
          @kk-input=${e=>{h={...h,busca:e.target.value},g.buscar(h.busca),r()}}
        >
          <kk-icon slot="prefix" name="search"></kk-icon>
        </kk-input>
      </div>

      <div class="chips crono__chips">
        ${d.map(t=>e`
            <button
              class="chip"
              data-trilha=${t}
              ?data-ativo=${h.trilhas[t]!==!1}
              @click=${()=>O(t)}
            >
              ${s(t)}
            </button>
          `)}
        <button class="chip" title=${n.cronologia.limpar} @click=${k}>
          <kk-icon name="filter-off"></kk-icon>
        </button>
      </div>

      ${a.length===0?e`
            <div class="vazio">
              <kk-icon class="vazio__icone" name="timeline"></kk-icon>
              <p>${m.length===0?n.cronologia.vazio:n.cronologia.semFiltro}</p>
            </div>
          `:e`<div class="crono">${a.map(e=>j(e))}</div>`}
    `}};export{M as telaCronologia};