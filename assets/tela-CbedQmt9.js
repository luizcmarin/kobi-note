import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-V1DWQvwW.js";import{n as r}from"./texto-BZYXsRJ8.js";import{r as i}from"./rotas-CR8kk0YZ.js";import{s as a}from"./banco-yW6Av386.js";import{a as o}from"./acessibilidade-0dW0_ixm.js";import{T as s,ct as c,k as l}from"./index-CW5w8p1d.js";import{t as u}from"./carga-Dsykr7zz.js";import{i as ee,r as te}from"./recordes-DcnaXP8v.js";import{t as d}from"./sorteio-Bln1H9Cu.js";import"./note-BJV9bo_U.js";import{n as f,u as p}from"./dados-CUeKrmQs.js";function m(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function h(e){if(e.trim()===``)return[];let t;try{t=JSON.parse(e)}catch{return null}if(!Array.isArray(t))return null;let n=[];for(let e of t){if(!m(e))return null;let{enunciado:t,alternativas:r,correta:i,referencia:a}=e;if(typeof t!=`string`||typeof a!=`string`||typeof i!=`number`||!Array.isArray(r)||!r.every(e=>typeof e==`string`))return null;n.push({enunciado:t.trim(),alternativas:r.map(e=>e.trim()),correta:i,referencia:a.trim()})}return n}function g(e){return e.length===3&&e.every(e=>e.enunciado!==``&&e.referencia!==``&&e.alternativas.length===3&&e.alternativas.every(e=>e!==``)&&new Set(e.alternativas.map(e=>r(e))).size===3&&Number.isInteger(e.correta)&&e.correta>=0&&e.correta<3)}var _=`personagens`;function v(e){let t=[];for(let n of e){let e=h(String(n.perguntas??``));n.id!==void 0&&e!==null&&g(e)&&t.push({personagem:n,id:n.id,perguntas:e})}return t.sort((e,t)=>Number(e.personagem.numero)-Number(t.personagem.numero)||Number(e.id)-Number(t.id))}function y(e){return new Set(e.map(e=>Number(e.personagem_id)))}function b(e,t){return e.filter(e=>t.has(e.id)).length}var ne={criacao:`plant`,pre_diluvio:`ship`,patriarcas:`tent`,exodo_juizes:`mountain`,reis:`crown`,exilio:`building-arch`,restauracao:`wall`,jesus:`fish`,primeiro_seculo:`writing`};function x(e){return ne[e]??`user-star`}function S(e,t){let n=new Map;for(let t of e){let e=String(t.personagem.periodo??``),r=n.get(e)??[];r.push(t),n.set(e,r)}let r=e=>{let t=f.indexOf(e);return t===-1?f.length:t};return[...n.entries()].map(([e,t],n)=>({periodo:e,doPeriodo:t,ordemDeChegada:n})).sort((e,t)=>r(e.periodo)-r(t.periodo)||e.ordemDeChegada-t.ordemDeChegada).map(({periodo:e,doPeriodo:n})=>({periodo:e,cartas:n,selos:b(n,t)}))}function C(e){return Math.max(e.findIndex(e=>e.selos<e.cartas.length),0)}function w(e,t){return{personagem:e.id,alternativas:e.perguntas.map(e=>d(e.alternativas)),respostas:e.perguntas.map(()=>null),inicio:t}}function re(e,t,n){return e.respostas[t]!==null||t<0||t>=e.respostas.length?e:{...e,respostas:e.respostas.map((e,r)=>r===t?n:e)}}function T(e){return e.respostas.filter(e=>e!==null).length}function E(e,t){return e.respostas.filter((e,n)=>e!==null&&e===t.perguntas[n]?.correta).length}function D(e,t){return T(e)===t.perguntas.length&&E(e,t)===t.perguntas.length}var O={1:`primeiro`,5:`cinco`,10:`dez`,25:`vinteECinco`};function ie(e,t){return t>0&&e===t?`completo`:O[e]??null}var ae=864e5;function oe(e,t){return e>0&&t-e>=7*ae}var k=()=>a(`personagens_selos`);function se(){return a(`personagens`).todos()}function A(){return k().todos()}async function j(e){return!y(await A()).has(e)&&(await k().salvar({personagem_id:e,conquistado_em:Date.now()}),!0)}async function M(){let e=await te(_);return Math.max(0,...e.map(e=>Number(e.ultima_partida_em)||0))}var N={jogo:_,modo:``,nivel:1},P=[],F=new Set,I=0,L=null,R=null,z=null,B=!1,V=new u(`personagens`,async()=>{let[e,t,n]=await Promise.all([se(),A(),M()]);P=v(e),F=y(t),I=n});function H(e){return P.find(t=>t.id===e)}function U(t){let{titulo:r,texto:i}=n.personagens.marcos[t];l(r,void 0,t=>e`
      <div class="personagens__kobi">
        <img
          class="personagens__mascote"
          src=${o()}
          alt=${n.personagens.mascote}
          width="160"
          height="160"
        />
        <p class="personagens__kobi-texto">${i}</p>
      </div>
      <kk-button slot="footer" variant="primary" @click=${()=>t()}>
        ${n.personagens.continuar}
      </kk-button>
    `,{classe:`dialogo-personagens`})}function W(){B||(B=!0,oe(I,Date.now())&&U(`volta`))}function G(e){L=w(e,Date.now()),R=null,z=null,i(`personagens/${e.id}/1`)}function K(e){return L!==null&&L.personagem===e.id?L:null}function ce(e,t){L!==null&&(L=re(L,e,t),c())}function le(e,t){R!==t.inicio&&(R=t.inicio,z=null,(async()=>{try{if(await ee(N,Date.now()-t.inicio),I=Date.now(),!D(t,e)){z=`nao`;return}let n=await j(e.id);if(z=n?`novo`:`jaTinha`,!n)return;F=new Set([...F,e.id]);let r=ie(b(P,F),P.length);r!==null&&U(r)}catch(n){console.error(`personagens: a rodada não foi gravada.`,n),z=D(t,e)?`falhou`:`nao`}finally{c()}})())}function q(){return e`<kk-icon
    class="personagens__selo"
    variant="filled"
    name="rosette-discount-check"
    label=${n.personagens.comSelo}
  ></kk-icon>`}function J(r){let{link_fonte:i,obra_fonte:a}=r.personagem;return i===``?t:e`<p class="personagens__fonte">
    <a href=${i} target="_blank" rel="noopener">
      <kk-icon name="external-link"></kk-icon>${a===``?n.personagens.lerFonte:a}
    </a>
  </p>`}function Y(t){return e`<div class="prosa personagens__resumo">${s(t.personagem.resumo)}</div>`}function ue(t){l(t.personagem.nome,void 0,r=>e`
      ${Y(t)}
      <kk-button slot="footer" variant="primary" @click=${()=>r()}>
        ${n.personagens.voltarAPergunta}
      </kk-button>
    `,{classe:`dialogo-personagens`})}function de(r){let a=F.has(r.id);return e`
    <button
      class="personagens__carta"
      data-epoca=${r.personagem.periodo}
      ?data-selo=${a}
      aria-label=${`${n.personagens.numero(Number(r.personagem.numero))}, ${r.personagem.nome}, ${a?n.personagens.comSelo:n.personagens.semSelo}`}
      @click=${()=>i(`personagens/${r.id}`)}
    >
      <span class="personagens__numero">${Number(r.personagem.numero)}</span>
      <kk-icon class="personagens__icone" name=${x(r.personagem.periodo)}></kk-icon>
      <span class="personagens__nome">${r.personagem.nome}</span>
      ${a?q():t}
    </button>
  `}function fe(r,i){let a=r.selos===r.cartas.length;return e`
    <kk-details class="personagens__epoca" name="personagens-epocas" ?open=${i}>
      <span
        slot="summary"
        class="personagens__epoca-resumo"
        data-epoca=${r.periodo}
        ?data-completa=${a}
      >
        <kk-icon class="personagens__epoca-icone" name=${x(r.periodo)}></kk-icon>
        <span class="personagens__epoca-nome">${p(r.periodo)}</span>
        <span class="personagens__epoca-conta">${n.personagens.conta(r.selos,r.cartas.length)}</span>
        ${a?e`<kk-icon class="personagens__epoca-visto" name="check" label=${n.personagens.epocaCompleta}></kk-icon>`:t}
      </span>
      <div class="personagens__album">${r.cartas.map(de)}</div>
    </kk-details>
  `}function pe(){if(P.length===0)return e`<p class="vazio">${n.personagens.vazio}</p>`;W();let t=b(P,F),r=S(P,F),i=C(r);return e`
    <p class="personagens__subtitulo">${n.personagens.subtitulo}</p>
    <div class="personagens__progresso">
      <kk-progress-bar value=${Math.round(t/P.length*100)}></kk-progress-bar>
      <span class="personagens__conta">${n.personagens.conta(t,P.length)}</span>
    </div>
    <kk-accordion class="personagens__epocas">
      ${r.map((e,t)=>fe(e,t===i))}
    </kk-accordion>
  `}function me(r){return e`
    <div class="personagens__cabecalho" data-epoca=${r.personagem.periodo}>
      <kk-icon class="personagens__icone" name=${x(r.personagem.periodo)}></kk-icon>
      <span class="personagens__numero">${n.personagens.numero(Number(r.personagem.numero))}</span>
      ${F.has(r.id)?q():t}
    </div>
  `}function X(t){return e`
    ${me(t)}
    ${Y(t)}
    ${J(t)}
    <kk-button variant="primary" class="personagens__comecar" @click=${()=>G(t)}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>${n.personagens.comecar}
    </kk-button>
  `}function Z(e,t,n){return n===null?``:e===t?`certa`:e===n?`errada`:`apagada`}function he(r,a,o){let s=r.perguntas[o],c=a.alternativas[o];if(s===void 0||c===void 0)return X(r);let l=a.respostas[o]??null,u=o===r.perguntas.length-1;return e`
    <div class="personagens__topo">
      <span class="personagens__passo">
        ${n.personagens.pergunta(o+1,r.perguntas.length)}
      </span>
      <kk-button size="small" outline @click=${()=>ue(r)}>
        <kk-icon slot="prefix" name="book-2"></kk-icon>${n.personagens.reverResumo}
      </kk-button>
    </div>

    <h2 class="personagens__enunciado">${s.enunciado}</h2>

    <div class="personagens__alternativas">
      ${c.map(t=>e`
          <button
            class="personagens__alternativa"
            data-original=${t.original}
            data-tom=${Z(t.original,s.correta,l)}
            ?disabled=${l!==null}
            @click=${()=>ce(o,t.original)}
          >
            ${t.texto}
          </button>
        `)}
    </div>

    ${l===null?t:e`
          <kk-alert
            open
            class="personagens__retorno"
            variant=${l===s.correta?`success`:`warning`}
          >
            ${l===s.correta?n.personagens.acertou:n.personagens.errou}
            <span class="personagens__referencia">— ${s.referencia}</span>
          </kk-alert>
          <kk-button
            variant="primary"
            class="personagens__seguir"
            @click=${()=>i(`personagens/${r.id}/${u?`fim`:o+2}`)}
          >
            ${u?n.personagens.verResultado:n.personagens.proxima}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `}
  `}function ge(t){return z===null?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:z===`falhou`?e`<kk-alert open variant="danger" class="personagens__sem-selo">
      ${n.personagens.seloFalhou}
    </kk-alert>`:z===`nao`?e`<p class="personagens__sem-selo">
      ${F.has(t.id)?n.personagens.seloJaTinha:n.personagens.semSeloAinda}
    </p>`:e`
    <div class="personagens__conquista" data-epoca=${t.personagem.periodo}>
      ${q()}
      <strong>${z===`novo`?n.personagens.seloNovo:n.personagens.seloJaTinha}</strong>
    </div>
  `}function _e(t,r){le(t,r);let a=E(r,t);return e`
    <h2 class="resultado__titulo personagens__fim">
      ${n.personagens.resultado(a,t.perguntas.length)}
    </h2>
    ${ge(t)}
    ${J(t)}

    <div class="jogo__controles">
      <kk-button outline @click=${()=>G(t)}>
        <kk-icon slot="prefix" name="rotate"></kk-icon>${n.personagens.tentarDeNovo}
      </kk-button>
      <kk-button @click=${()=>i(`personagens`)}>
        <kk-icon slot="prefix" name="layout-grid"></kk-icon>${n.personagens.voltarAoAlbum}
      </kk-button>
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?H(t):void 0}function $(e){let t=e.args[1];if(t===void 0)return`resumo`;if(t===`fim`)return`fim`;let n=Number(t);return Number.isInteger(n)&&n>=1?n-1:`resumo`}var ve={titulo(e){return Q(e)?.personagem.nome},voltarPara(e){let t=Q(e);return t===void 0?`home`:typeof $(e)==`number`?`personagens/${t.id}`:`personagens`},conteudo(e){let t=V.espera();if(t!==null)return t;let n=Q(e);if(n===void 0)return pe();let r=$(e),i=K(n);return r===`resumo`||i===null?X(n):r===`fim`?T(i)===n.perguntas.length?_e(n,i):X(n):r<=T(i)&&r<n.perguntas.length?he(n,i,r):X(n)}};export{ve as telaPersonagens};