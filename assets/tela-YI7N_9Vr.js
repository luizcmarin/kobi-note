import{a as e}from"./banco-wLWgzTAl.js";import{Q as t,at as n,nt as r,rt as i}from"./index-BQ2FB00A.js";var a={criacao:`A Criação`,pre_diluvio:`Antes do Dilúvio`,patriarcas:`Os Patriarcas`,exodo_juizes:`Êxodo e Juízes`,reis:`Os Reis`,exilio:`O Exílio`,restauracao:`A Restauração`,jesus:`Jesus na Terra`,primeiro_seculo:`O Primeiro Século`,apostasia:`A Grande Apostasia`,restauracao_moderna:`Restauração Moderna`,ultimos_dias:`Os Últimos Dias`,expansao_mundial:`Expansão Mundial`,nossos_dias:`Nossos Dias`},o=Object.keys(a),s={biblica:`Bíblica`,mundial:`Mundial`,historica:`Histórica`},c=()=>e(`cronologia`);async function l(){return(await c().todos().catch(()=>[])).sort((e,t)=>Number(e.ordem_absoluta)-Number(t.ordem_absoluta)||Number(e.ordem_no_ano??0)-Number(t.ordem_no_ano??0)||Number(e.id??0)-Number(t.id??0))}var u={trilhas:{biblica:!0,mundial:!0,historica:!0},busca:``};function d(e,t){let n=t.busca.trim().toLowerCase();return e.filter(e=>t.trilhas[e.trilha]===!1?!1:n===``||e.titulo.toLowerCase().includes(n)||e.resumo.toLowerCase().includes(n)||e.referencia.toLowerCase().includes(n))}function f(e){let t=new Map;for(let n of e){let e=a[n.periodo]===void 0?o[0]:n.periodo;if(e===void 0)continue;let r=t.get(e);r===void 0?t.set(e,[n]):r.push(n)}return o.filter(e=>(t.get(e)?.length??0)>0).map(e=>({chave:e,rotulo:a[e]??e,eventos:t.get(e)??[]}))}function p(e,t){let n=new Set(e.map(e=>e.periodo)),r=new Set(t.map(e=>e.chave));return o.filter(e=>n.has(e)).map(e=>({chave:e,rotulo:a[e]??e,presente:r.has(e)}))}function m(e){let t=e.precisao===`aprox`?`c. `:``,n=Number(e.ano_fim)>0?`–${e.ano_fim}`:``;return`${t}${e.ano_inicio}${n} ${e.era}`}var h=[],g=u,_=null,v=``,y=!1,b=!1,x=0;function S(){y||b||(b=!0,(async()=>{try{h=await l(),v=f(d(h,g))[0]?.chave??``,y=!0}finally{b=!1,t()}})())}function C(e){return document.querySelector(e)?.getBoundingClientRect().height??0}function w(){return C(`.barra`)+C(`.crono__contexto`)+C(`.crono__chips`)}var T;function E(){let e=document.querySelector(`.crono__contexto`),t=document.querySelector(`.crono__chips`);e!==null&&t!==null&&(T??=new ResizeObserver(()=>{let e=document.documentElement.style;e.setProperty(`--crono-contexto-altura`,`${C(`.crono__contexto`)}px`),e.setProperty(`--crono-chips-altura`,`${C(`.crono__chips`)}px`)}),T.disconnect(),T.observe(e),T.observe(t))}function D(e){v=e,x=performance.now()+900,t();let n=document.getElementById(`crono-periodo-${e}`);if(n===null)return;let r=n.getBoundingClientRect().top+scrollY-w()-8;scrollTo({top:Math.max(r,0),behavior:`smooth`})}var O=!1;function k(){if(O)return;O=!0;let e=!1,n=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;let r=document.querySelectorAll(`[data-periodo]`);if(r.length===0){removeEventListener(`scroll`,n),O=!1;return}if(performance.now()<x)return;let i=w()+12,a=``;for(let e of r)e.getBoundingClientRect().top<=i&&(a=e.dataset.periodo??``);a!==``&&a!==v&&(v=a,t())}))};addEventListener(`scroll`,n,{passive:!0})}function A(e){g={...g,trilhas:{...g.trilhas,[e]:g.trilhas[e]===!1}},t()}function j(){g=u,t()}function M(e){let a=_===e.id,o=s[e.trilha]===void 0?`biblica`:e.trilha;return n`
    <li class="crono__item" data-trilha=${o}>
      <span class="crono__marca" aria-hidden="true"></span>

      <div class="crono__cartao">
        <button
          class="crono__alvo"
          aria-expanded=${a?`true`:`false`}
          @click=${()=>{_=a?null:e.id??null,t()}}
        >
          <span class="crono__ano">${m(e)}</span>
          <span class="crono__titulo">${e.titulo}</span>
          <span class="crono__trilha">${s[o]}</span>
        </button>

        ${a?n`
              <div class="crono__detalhe">
                ${e.resumo===``?i:n`<p>${e.resumo}</p>`}
                ${e.referencia===``?i:n`<p class="crono__referencia">${e.referencia}</p>`}
                ${e.link_fonte===``?i:n`
                      <a class="crono__fonte" href=${e.link_fonte} target="_blank" rel="noreferrer">
                        <kk-icon name="external-link"></kk-icon>
                        ${e.obra_fonte===``?r.cronologia.fonte:e.obra_fonte}
                      </a>
                    `}
              </div>
            `:i}
      </div>
    </li>
  `}function N(e){return n`
    <section class="crono__trecho">
      <h2 class="crono__era" id=${`crono-periodo-${e.chave}`} data-periodo=${e.chave}>
        ${e.rotulo}
        <small>${r.cronologia.eventos(e.eventos.length)}</small>
      </h2>
      <ol class="crono__lista">${e.eventos.map(e=>M(e))}</ol>
    </section>
  `}var P={voltarPara(){return`home`},conteudo(e){if(S(),!y)return n`<div class="carregando"><kk-spinner></kk-spinner></div>`;let i=f(d(h,g));return i.length>0&&(queueMicrotask(k),queueMicrotask(E)),n`
      <p class="intro">${r.cronologia.intro}</p>

      <div class="crono__contexto">
        <div class="crono__paradas">
          ${p(h,i).map(e=>n`
              <button
                class="chip chip--pequeno"
                ?data-ativo=${e.chave===v}
                ?disabled=${!e.presente}
                @click=${()=>D(e.chave)}
              >
                ${e.rotulo}
              </button>
            `)}
        </div>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${r.cronologia.buscar}
          .value=${g.busca}
          @kk-input=${e=>{g={...g,busca:e.target.value},t()}}
        >
          <kk-icon slot="prefix" name="search"></kk-icon>
        </kk-input>
      </div>

      <div class="chips crono__chips">
        ${Object.entries(s).map(([e,t])=>n`
            <button
              class="chip"
              data-trilha=${e}
              ?data-ativo=${g.trilhas[e]!==!1}
              @click=${()=>A(e)}
            >
              ${t}
            </button>
          `)}
        <button class="chip" title=${r.cronologia.limpar} @click=${j}>
          <kk-icon name="filter-off"></kk-icon>
        </button>
      </div>

      ${i.length===0?n`
            <div class="vazio">
              <kk-icon class="vazio__icone" name="timeline"></kk-icon>
              <p>${h.length===0?r.cronologia.vazio:r.cronologia.semFiltro}</p>
            </div>
          `:n`<div class="crono">${i.map(e=>N(e))}</div>`}
    `}};export{P as telaCronologia};