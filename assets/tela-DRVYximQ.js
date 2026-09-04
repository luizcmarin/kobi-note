import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r}from"./banco-u8JVNTlT.js";import{E as i}from"./index-CRLpDONK.js";var a={criacao:`A Criação`,pre_diluvio:`Antes do Dilúvio`,patriarcas:`Os Patriarcas`,exodo_juizes:`Êxodo e Juízes`,reis:`Os Reis`,exilio:`O Exílio`,restauracao:`A Restauração`,jesus:`Jesus na Terra`,primeiro_seculo:`O Primeiro Século`,apostasia:`A Grande Apostasia`,restauracao_moderna:`Restauração Moderna`,ultimos_dias:`Os Últimos Dias`,expansao_mundial:`Expansão Mundial`,nossos_dias:`Nossos Dias`},o=Object.keys(a),s={biblica:`Bíblica`,mundial:`Mundial`,historica:`Histórica`},c=()=>r(`cronologia`);async function l(){return(await c().todos().catch(()=>[])).sort((e,t)=>Number(e.ordem_absoluta)-Number(t.ordem_absoluta)||Number(e.ordem_no_ano??0)-Number(t.ordem_no_ano??0)||Number(e.id??0)-Number(t.id??0))}var u={trilhas:{biblica:!0,mundial:!0,historica:!0},busca:``};function d(e,t){let n=t.busca.trim().toLowerCase();return e.filter(e=>t.trilhas[e.trilha]===!1?!1:n===``||e.titulo.toLowerCase().includes(n)||e.resumo.toLowerCase().includes(n)||e.referencia.toLowerCase().includes(n))}function f(e){let t=new Map;for(let n of e){let e=a[n.periodo]===void 0?o[0]:n.periodo;if(e===void 0)continue;let r=t.get(e);r===void 0?t.set(e,[n]):r.push(n)}return o.filter(e=>(t.get(e)?.length??0)>0).map(e=>({chave:e,rotulo:a[e]??e,eventos:t.get(e)??[]}))}function p(e,t){let n=new Set(e.map(e=>e.periodo)),r=new Set(t.map(e=>e.chave));return o.filter(e=>n.has(e)).map(e=>({chave:e,rotulo:a[e]??e,presente:r.has(e)}))}function m(e){let t=e.precisao===`aprox`?`c. `:``,n=Number(e.ano_fim)>0?`–${e.ano_fim}`:``;return`${t}${e.ano_inicio}${n} ${e.era}`}var h=[],g=u,_=null,v=``,y=!1,b=!1,x=0;function S(){y||b||(b=!0,(async()=>{try{h=await l(),v=f(d(h,g))[0]?.chave??``,y=!0}finally{b=!1,i()}})())}function C(e){return document.querySelector(e)?.getBoundingClientRect().height??0}function w(){return C(`.barra`)+C(`.crono__contexto`)+C(`.crono__chips`)}var T;function E(){let e=document.querySelector(`.crono__contexto`),t=document.querySelector(`.crono__chips`);e!==null&&t!==null&&(T??=new ResizeObserver(()=>{let e=document.documentElement.style;e.setProperty(`--crono-contexto-altura`,`${C(`.crono__contexto`)}px`),e.setProperty(`--crono-chips-altura`,`${C(`.crono__chips`)}px`)}),T.disconnect(),T.observe(e),T.observe(t))}function D(e){v=e,x=performance.now()+900,i();let t=document.getElementById(`crono-periodo-${e}`);if(t===null)return;let n=t.getBoundingClientRect().top+scrollY-w()-8;scrollTo({top:Math.max(n,0),behavior:`smooth`})}var O=!1;function k(){if(O)return;O=!0;let e=!1,t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;let n=document.querySelectorAll(`[data-periodo]`);if(n.length===0){removeEventListener(`scroll`,t),O=!1;return}if(performance.now()<x)return;let r=w()+12,a=``;for(let e of n)e.getBoundingClientRect().top<=r&&(a=e.dataset.periodo??``);a!==``&&a!==v&&(v=a,i())}))};addEventListener(`scroll`,t,{passive:!0})}function A(e){g={...g,trilhas:{...g.trilhas,[e]:g.trilhas[e]===!1}},i()}function j(){g=u,i()}function M(r){let a=_===r.id,o=s[r.trilha]===void 0?`biblica`:r.trilha;return e`
    <li class="crono__item" data-trilha=${o}>
      <span class="crono__marca" aria-hidden="true"></span>

      <div class="crono__cartao">
        <button
          class="crono__alvo"
          aria-expanded=${a?`true`:`false`}
          @click=${()=>{_=a?null:r.id??null,i()}}
        >
          <span class="crono__ano">${m(r)}</span>
          <span class="crono__titulo">${r.titulo}</span>
          <span class="crono__trilha">${s[o]}</span>
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
  `}function N(t){return e`
    <section class="crono__trecho">
      <h2 class="crono__era" id=${`crono-periodo-${t.chave}`} data-periodo=${t.chave}>
        ${t.rotulo}
        <small>${n.cronologia.eventos(t.eventos.length)}</small>
      </h2>
      <ol class="crono__lista">${t.eventos.map(e=>M(e))}</ol>
    </section>
  `}var P={voltarPara(){return`home`},conteudo(t){if(S(),!y)return e`<div class="carregando"><kk-spinner></kk-spinner></div>`;let r=f(d(h,g));return r.length>0&&(queueMicrotask(k),queueMicrotask(E)),e`
      <p class="intro">${n.cronologia.intro}</p>

      <div class="crono__contexto">
        <div class="crono__paradas">
          ${p(h,r).map(t=>e`
              <button
                class="chip chip--pequeno"
                ?data-ativo=${t.chave===v}
                ?disabled=${!t.presente}
                @click=${()=>D(t.chave)}
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
          @kk-input=${e=>{g={...g,busca:e.target.value},i()}}
        >
          <kk-icon slot="prefix" name="search"></kk-icon>
        </kk-input>
      </div>

      <div class="chips crono__chips">
        ${Object.entries(s).map(([t,n])=>e`
            <button
              class="chip"
              data-trilha=${t}
              ?data-ativo=${g.trilhas[t]!==!1}
              @click=${()=>A(t)}
            >
              ${n}
            </button>
          `)}
        <button class="chip" title=${n.cronologia.limpar} @click=${j}>
          <kk-icon name="filter-off"></kk-icon>
        </button>
      </div>

      ${r.length===0?e`
            <div class="vazio">
              <kk-icon class="vazio__icone" name="timeline"></kk-icon>
              <p>${h.length===0?n.cronologia.vazio:n.cronologia.semFiltro}</p>
            </div>
          `:e`<div class="crono">${r.map(e=>N(e))}</div>`}
    `}};export{P as telaCronologia};