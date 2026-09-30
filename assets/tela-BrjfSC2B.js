import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-C-U_qlgv.js";import{n as r}from"./rotas-D12eslN_.js";import{R as i}from"./index-DQ-iAe1X.js";import{t as a}from"./carga-Cl47TOz-.js";import{t as o}from"./busca-CGUE5juP.js";import{a as s,c,i as l,l as u,o as d,r as f,s as p,t as m}from"./dados-BWL-IcGQ.js";var h=[],g=m,_=new o(`not_cronologia`),v=null,y=``,b=null,x=0,S=new a(`cronologia`,async()=>{h=await d(),y=l(s(h,g,_.achados))[0]?.chave??``});function C(e){return document.querySelector(e)?.getBoundingClientRect().height??0}function w(){return C(`.barra`)+C(`.crono__contexto`)+C(`.crono__chips`)}var T;function E(){let e=document.querySelector(`.crono__contexto`),t=document.querySelector(`.crono__chips`);e!==null&&t!==null&&(T??=new ResizeObserver(()=>{let e=document.documentElement.style;e.setProperty(`--crono-contexto-altura`,`${C(`.crono__contexto`)}px`),e.setProperty(`--crono-chips-altura`,`${C(`.crono__chips`)}px`)}),T.disconnect(),T.observe(e),T.observe(t))}function D(e){let t=Number(e.args[0]);if(!Number.isInteger(t)||t<=0){b=null;return}t!==b&&(r(`cronologia`,()=>{b=null}),b=t,v=t,g=m,_.limpar(),requestAnimationFrame(()=>{let e=document.getElementById(`crono-evento-${t}`);if(e===null)return;x=performance.now()+900;let n=e.getBoundingClientRect().top+scrollY-w()-C(`.crono__era`)-8;scrollTo({top:Math.max(n,0),behavior:`smooth`})}))}function O(e){y=e,x=performance.now()+900,i();let t=document.getElementById(`crono-periodo-${e}`);if(t===null)return;let n=t.getBoundingClientRect().top+scrollY-w()-8;scrollTo({top:Math.max(n,0),behavior:`smooth`})}var k=!1;function A(){if(k)return;k=!0;let e=!1,t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;let n=document.querySelectorAll(`[data-periodo]`);if(n.length===0){removeEventListener(`scroll`,t),k=!1;return}if(performance.now()<x)return;let r=w()+12,a=``;for(let e of n)e.getBoundingClientRect().top<=r&&(a=e.dataset.periodo??``);a!==``&&a!==y&&(y=a,i())}))};addEventListener(`scroll`,t,{passive:!0})}function j(e){g={...g,trilhas:{...g.trilhas,[e]:g.trilhas[e]===!1}},i()}function M(){g=m,i()}function N(r){let a=v===r.id,o=f.includes(r.trilha)?r.trilha:`biblica`;return e`
    <li class="crono__item" id=${`crono-evento-${r.id??0}`} data-trilha=${o}>
      <span class="crono__marca" aria-hidden="true"></span>

      <div class="crono__cartao">
        <button
          class="crono__alvo"
          aria-expanded=${a?`true`:`false`}
          @click=${()=>{v=a?null:r.id??null,i()}}
        >
          <span class="crono__ano">${u(r)}</span>
          <span class="crono__titulo">${r.titulo}</span>
          <span class="crono__trilha">${c(o)}</span>
        </button>

        ${a?e`
              <div class="crono__detalhe">
                ${r.resumo===``?t:e`<p>${r.resumo}</p>`}
                ${r.referencia===``?t:e`<p class="crono__referencia">${r.referencia}</p>`}
                ${r.link_fonte===``?t:e`
                      <a class="crono__fonte" href=${r.link_fonte} target="_blank" rel="noreferrer">
                        <kk-icon name="external-link"></kk-icon>
                        ${r.obra_fonte===``?n.cronologia.fonte:r.obra_fonte}
                      </a>
                    `}
              </div>
            `:t}
      </div>
    </li>
  `}function P(t){return e`
    <section class="crono__trecho">
      <h2 class="crono__era" id=${`crono-periodo-${t.chave}`} data-periodo=${t.chave}>
        ${t.rotulo}
        <small>${n.cronologia.eventos(t.eventos.length)}</small>
      </h2>
      <ol class="crono__lista">${t.eventos.map(e=>N(e))}</ol>
    </section>
  `}var F={voltarPara(e){return e.query.get(`volta`)||`home`},conteudo(t){let r=S.espera();if(r!==null)return r;D(t);let a=s(h,g,_.achados),o=l(a);return o.length>0&&(queueMicrotask(A),queueMicrotask(E)),e`
      <p class="intro">${n.cronologia.intro}</p>

      <div class="crono__contexto">
        <div class="crono__paradas">
          ${p(h,o).map(t=>e`
              <button
                class="chip chip--pequeno"
                ?data-ativo=${t.chave===y}
                ?disabled=${!t.presente}
                @click=${()=>O(t.chave)}
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
          .value=${g.busca}
          @kk-input=${e=>{g={...g,busca:e.target.value},_.buscar(g.busca),i()}}
        >
          <kk-icon slot="prefix" name="search"></kk-icon>
        </kk-input>
      </div>

      <div class="chips crono__chips">
        ${f.map(t=>e`
            <button
              class="chip"
              data-trilha=${t}
              ?data-ativo=${g.trilhas[t]!==!1}
              @click=${()=>j(t)}
            >
              ${c(t)}
            </button>
          `)}
        <button class="chip" title=${n.cronologia.limpar} @click=${M}>
          <kk-icon name="filter-off"></kk-icon>
        </button>
      </div>

      ${o.length===0?e`
            <div class="vazio">
              <kk-icon class="vazio__icone" name="timeline"></kk-icon>
              <p>${h.length===0?n.cronologia.vazio:n.cronologia.semFiltro}</p>
            </div>
          `:e`<div class="crono">${o.map(e=>P(e))}</div>`}
    `}};export{F as telaCronologia};