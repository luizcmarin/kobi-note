import{a as e,s as t}from"./banco-C-dosPDu.js";import{b as n,dt as r,gt as i,mt as a,st as o,y as s}from"./index-BrLqW3t8.js";var c={criacao:`A Criação`,pre_diluvio:`Antes do Dilúvio`,patriarcas:`Os Patriarcas`,exodo_juizes:`Êxodo e Juízes`,reis:`Os Reis`,exilio:`O Exílio`,restauracao:`A Restauração`,jesus:`Jesus na Terra`,primeiro_seculo:`O Primeiro Século`,apostasia:`A Grande Apostasia`,restauracao_moderna:`Restauração Moderna`,ultimos_dias:`Os Últimos Dias`,expansao_mundial:`Expansão Mundial`,nossos_dias:`Nossos Dias`},l=Object.keys(c),u={biblica:`Bíblica`,mundial:`Mundial`,historica:`Histórica`},d=()=>t(`cronologia`);async function f(){return(await d().todos().catch(()=>[])).sort((e,t)=>Number(e.ordem_absoluta)-Number(t.ordem_absoluta)||Number(e.ordem_no_ano??0)-Number(t.ordem_no_ano??0)||Number(e.id??0)-Number(t.id??0))}var p={trilhas:{biblica:!0,mundial:!0,historica:!0},busca:``};function m(e,t,n){return e.filter(e=>t.trilhas[e.trilha]===!1?!1:n===null||n.has(Number(e.id)))}function h(e){let t=new Map;for(let n of e){let e=c[n.periodo]===void 0?l[0]:n.periodo;if(e===void 0)continue;let r=t.get(e);r===void 0?t.set(e,[n]):r.push(n)}return l.filter(e=>(t.get(e)?.length??0)>0).map(e=>({chave:e,rotulo:c[e]??e,eventos:t.get(e)??[]}))}function g(e,t){let n=new Set(e.map(e=>e.periodo)),r=new Set(t.map(e=>e.chave));return l.filter(e=>n.has(e)).map(e=>({chave:e,rotulo:c[e]??e,presente:r.has(e)}))}function _(e){let t=e.precisao===`aprox`?`c. `:``,n=Number(e.ano_fim)>0?`–${e.ano_fim}`:``;return`${t}${e.ano_inicio}${n} ${e.era}`}var v=[],y=p,b=null,x=``;function S(t){x=t,e(`not_cronologia`,t).then(e=>{x===t&&(b=e===null?null:new Set(e),o())})}var C=null,w=``,T=!1,E=!1,D=null,O=0;function k(){T||E||D!==null||(E=!0,(async()=>{try{v=await f(),w=h(m(v,y,b))[0]?.chave??``,T=!0}catch(e){console.error(`cronologia: a carga falhou.`,e),D=n(e)}finally{E=!1,o()}})())}function A(){D=null,k(),o()}function j(e){return document.querySelector(e)?.getBoundingClientRect().height??0}function M(){return j(`.barra`)+j(`.crono__contexto`)+j(`.crono__chips`)}var N;function P(){let e=document.querySelector(`.crono__contexto`),t=document.querySelector(`.crono__chips`);e!==null&&t!==null&&(N??=new ResizeObserver(()=>{let e=document.documentElement.style;e.setProperty(`--crono-contexto-altura`,`${j(`.crono__contexto`)}px`),e.setProperty(`--crono-chips-altura`,`${j(`.crono__chips`)}px`)}),N.disconnect(),N.observe(e),N.observe(t))}function F(e){w=e,O=performance.now()+900,o();let t=document.getElementById(`crono-periodo-${e}`);if(t===null)return;let n=t.getBoundingClientRect().top+scrollY-M()-8;scrollTo({top:Math.max(n,0),behavior:`smooth`})}var I=!1;function L(){if(I)return;I=!0;let e=!1,t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;let n=document.querySelectorAll(`[data-periodo]`);if(n.length===0){removeEventListener(`scroll`,t),I=!1;return}if(performance.now()<O)return;let r=M()+12,i=``;for(let e of n)e.getBoundingClientRect().top<=r&&(i=e.dataset.periodo??``);i!==``&&i!==w&&(w=i,o())}))};addEventListener(`scroll`,t,{passive:!0})}function R(e){y={...y,trilhas:{...y.trilhas,[e]:y.trilhas[e]===!1}},o()}function z(){y=p,o()}function B(e){let t=C===e.id,n=u[e.trilha]===void 0?`biblica`:e.trilha;return i`
    <li class="crono__item" data-trilha=${n}>
      <span class="crono__marca" aria-hidden="true"></span>

      <div class="crono__cartao">
        <button
          class="crono__alvo"
          aria-expanded=${t?`true`:`false`}
          @click=${()=>{C=t?null:e.id??null,o()}}
        >
          <span class="crono__ano">${_(e)}</span>
          <span class="crono__titulo">${e.titulo}</span>
          <span class="crono__trilha">${u[n]}</span>
        </button>

        ${t?i`
              <div class="crono__detalhe">
                ${e.resumo===``?a:i`<p>${e.resumo}</p>`}
                ${e.referencia===``?a:i`<p class="crono__referencia">${e.referencia}</p>`}
                ${e.link_fonte===``?a:i`
                      <a class="crono__fonte" href=${e.link_fonte} target="_blank" rel="noreferrer">
                        <kk-icon name="external-link"></kk-icon>
                        ${e.obra_fonte===``?r.cronologia.fonte:e.obra_fonte}
                      </a>
                    `}
              </div>
            `:a}
      </div>
    </li>
  `}function V(e){return i`
    <section class="crono__trecho">
      <h2 class="crono__era" id=${`crono-periodo-${e.chave}`} data-periodo=${e.chave}>
        ${e.rotulo}
        <small>${r.cronologia.eventos(e.eventos.length)}</small>
      </h2>
      <ol class="crono__lista">${e.eventos.map(e=>B(e))}</ol>
    </section>
  `}var H={voltarPara(){return`home`},conteudo(e){if(k(),D!==null)return s(D,A);if(!T)return i`<div class="carregando"><kk-spinner></kk-spinner></div>`;let t=h(m(v,y,b));return t.length>0&&(queueMicrotask(L),queueMicrotask(P)),i`
      <p class="intro">${r.cronologia.intro}</p>

      <div class="crono__contexto">
        <div class="crono__paradas">
          ${g(v,t).map(e=>i`
              <button
                class="chip chip--pequeno"
                ?data-ativo=${e.chave===w}
                ?disabled=${!e.presente}
                @click=${()=>F(e.chave)}
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
          .value=${y.busca}
          @kk-input=${e=>{y={...y,busca:e.target.value},S(y.busca),o()}}
        >
          <kk-icon slot="prefix" name="search"></kk-icon>
        </kk-input>
      </div>

      <div class="chips crono__chips">
        ${Object.entries(u).map(([e,t])=>i`
            <button
              class="chip"
              data-trilha=${e}
              ?data-ativo=${y.trilhas[e]!==!1}
              @click=${()=>R(e)}
            >
              ${t}
            </button>
          `)}
        <button class="chip" title=${r.cronologia.limpar} @click=${z}>
          <kk-icon name="filter-off"></kk-icon>
        </button>
      </div>

      ${t.length===0?i`
            <div class="vazio">
              <kk-icon class="vazio__icone" name="timeline"></kk-icon>
              <p>${v.length===0?r.cronologia.vazio:r.cronologia.semFiltro}</p>
            </div>
          `:i`<div class="crono">${t.map(e=>V(e))}</div>`}
    `}};export{H as telaCronologia};