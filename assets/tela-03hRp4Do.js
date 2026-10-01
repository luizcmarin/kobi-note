import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{r}from"./rotas-D12eslN_.js";import{n as i}from"./texto-BZYXsRJ8.js";import{s as a}from"./banco-CGOuosq0.js";import{a as o}from"./acessibilidade-CRpcvpwG.js";import{R as s,l as c,p as l}from"./index-DYev-n2R.js";import{t as u}from"./carga-Cb65ZAc7.js";import{i as d,r as ee}from"./recordes-BcT-jc_i.js";import{t as f}from"./sorteio-Bln1H9Cu.js";function p(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function m(e){if(e.trim()===``)return[];let t;try{t=JSON.parse(e)}catch{return null}if(!Array.isArray(t))return null;let n=[];for(let e of t){if(!p(e))return null;let{enunciado:t,alternativas:r,correta:i,referencia:a}=e;if(typeof t!=`string`||typeof a!=`string`||typeof i!=`number`||!Array.isArray(r)||!r.every(e=>typeof e==`string`))return null;n.push({enunciado:t.trim(),alternativas:r.map(e=>e.trim()),correta:i,referencia:a.trim()})}return n}function h(e){return e.length===3&&e.every(e=>e.enunciado!==``&&e.referencia!==``&&e.alternativas.length===3&&e.alternativas.every(e=>e!==``)&&new Set(e.alternativas.map(e=>i(e))).size===3&&Number.isInteger(e.correta)&&e.correta>=0&&e.correta<3)}var g=`personagens`;function _(e){let t=[];for(let n of e){let e=m(String(n.perguntas??``));n.id!==void 0&&e!==null&&h(e)&&t.push({personagem:n,id:n.id,perguntas:e})}return t.sort((e,t)=>Number(e.personagem.numero)-Number(t.personagem.numero)||Number(e.id)-Number(t.id))}function v(e){return new Set(e.map(e=>Number(e.personagem_id)))}function y(e,t){return e.filter(e=>t.has(e.id)).length}var te={criacao:`plant`,pre_diluvio:`ship`,patriarcas:`tent`,exodo_juizes:`mountain`,reis:`crown`,exilio:`building-arch`,restauracao:`wall`,jesus:`fish`,primeiro_seculo:`writing`};function b(e){return te[e]??`user-star`}function x(e,t){return{personagem:e.id,alternativas:e.perguntas.map(e=>f(e.alternativas)),respostas:e.perguntas.map(()=>null),inicio:t}}function ne(e,t,n){return e.respostas[t]!==null||t<0||t>=e.respostas.length?e:{...e,respostas:e.respostas.map((e,r)=>r===t?n:e)}}function S(e){return e.respostas.filter(e=>e!==null).length}function C(e,t){return e.respostas.filter((e,n)=>e!==null&&e===t.perguntas[n]?.correta).length}function w(e,t){return S(e)===t.perguntas.length&&C(e,t)===t.perguntas.length}var T={1:`primeiro`,5:`cinco`,10:`dez`,25:`vinteECinco`};function E(e,t){return t>0&&e===t?`completo`:T[e]??null}var D=864e5;function O(e,t){return e>0&&t-e>=7*D}var k=()=>a(`personagens_selos`);function re(){return a(`personagens`).todos()}function A(){return k().todos()}async function ie(e){return!v(await A()).has(e)&&(await k().salvar({personagem_id:e,conquistado_em:Date.now()}),!0)}async function j(){let e=await ee(g);return Math.max(0,...e.map(e=>Number(e.ultima_partida_em)||0))}var M={jogo:g,modo:``,nivel:1},N=[],P=new Set,F=0,I=null,L=null,R=null,z=!1,B=new u(`personagens`,async()=>{let[e,t,n]=await Promise.all([re(),A(),j()]);N=_(e),P=v(t),F=n});function V(e){return N.find(t=>t.id===e)}function H(t){let{titulo:r,texto:i}=n.personagens.marcos[t];l(r,void 0,t=>e`
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
    `,{classe:`dialogo-personagens`})}function U(){z||(z=!0,O(F,Date.now())&&H(`volta`))}function W(e){I=x(e,Date.now()),L=null,R=null,r(`personagens/${e.id}/1`)}function G(e){return I!==null&&I.personagem===e.id?I:null}function K(e,t){I!==null&&(I=ne(I,e,t),s())}function q(e,t){L!==t.inicio&&(L=t.inicio,R=null,(async()=>{try{if(await d(M,Date.now()-t.inicio),F=Date.now(),!w(t,e)){R=`nao`;return}let n=await ie(e.id);if(R=n?`novo`:`jaTinha`,!n)return;P=new Set([...P,e.id]);let r=E(y(N,P),N.length);r!==null&&H(r)}catch(n){console.error(`personagens: a rodada não foi gravada.`,n),R=w(t,e)?`falhou`:`nao`}finally{s()}})())}function J(){return e`<kk-icon
    class="personagens__selo"
    variant="filled"
    name="rosette-discount-check"
    label=${n.personagens.comSelo}
  ></kk-icon>`}function Y(r){let{link_fonte:i,obra_fonte:a}=r.personagem;return i===``?t:e`<p class="personagens__fonte">
    <a href=${i} target="_blank" rel="noopener">
      <kk-icon name="external-link"></kk-icon>${a===``?n.personagens.lerFonte:a}
    </a>
  </p>`}function X(t){return e`<div class="prosa personagens__resumo">${c(t.personagem.resumo)}</div>`}function ae(t){l(t.personagem.nome,void 0,r=>e`
      ${X(t)}
      <kk-button slot="footer" variant="primary" @click=${()=>r()}>
        ${n.personagens.voltarAPergunta}
      </kk-button>
    `,{classe:`dialogo-personagens`})}function oe(i){let a=P.has(i.id);return e`
    <button
      class="personagens__carta"
      data-epoca=${i.personagem.periodo}
      ?data-selo=${a}
      aria-label=${`${n.personagens.numero(Number(i.personagem.numero))}, ${i.personagem.nome}, ${a?n.personagens.comSelo:n.personagens.semSelo}`}
      @click=${()=>r(`personagens/${i.id}`)}
    >
      <span class="personagens__numero">${Number(i.personagem.numero)}</span>
      <kk-icon class="personagens__icone" name=${b(i.personagem.periodo)}></kk-icon>
      <span class="personagens__nome">${i.personagem.nome}</span>
      ${a?J():t}
    </button>
  `}function se(){if(N.length===0)return e`<p class="vazio">${n.personagens.vazio}</p>`;U();let t=y(N,P);return e`
    <p class="personagens__subtitulo">${n.personagens.subtitulo}</p>
    <div class="personagens__progresso">
      <kk-progress-bar value=${Math.round(t/N.length*100)}></kk-progress-bar>
      <span class="personagens__conta">${n.personagens.conta(t,N.length)}</span>
    </div>
    <div class="personagens__album">${N.map(oe)}</div>
  `}function ce(r){return e`
    <div class="personagens__cabecalho" data-epoca=${r.personagem.periodo}>
      <kk-icon class="personagens__icone" name=${b(r.personagem.periodo)}></kk-icon>
      <span class="personagens__numero">${n.personagens.numero(Number(r.personagem.numero))}</span>
      ${P.has(r.id)?J():t}
    </div>
  `}function Z(t){return e`
    ${ce(t)}
    ${X(t)}
    ${Y(t)}
    <kk-button variant="primary" class="personagens__comecar" @click=${()=>W(t)}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>${n.personagens.comecar}
    </kk-button>
  `}function le(e,t,n){return n===null?``:e===t?`certa`:e===n?`errada`:`apagada`}function ue(i,a,o){let s=i.perguntas[o],c=a.alternativas[o];if(s===void 0||c===void 0)return Z(i);let l=a.respostas[o]??null,u=o===i.perguntas.length-1;return e`
    <div class="personagens__topo">
      <span class="personagens__passo">
        ${n.personagens.pergunta(o+1,i.perguntas.length)}
      </span>
      <kk-button size="small" outline @click=${()=>ae(i)}>
        <kk-icon slot="prefix" name="book-2"></kk-icon>${n.personagens.reverResumo}
      </kk-button>
    </div>

    <h2 class="personagens__enunciado">${s.enunciado}</h2>

    <div class="personagens__alternativas">
      ${c.map(t=>e`
          <button
            class="personagens__alternativa"
            data-original=${t.original}
            data-tom=${le(t.original,s.correta,l)}
            ?disabled=${l!==null}
            @click=${()=>K(o,t.original)}
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
            @click=${()=>r(`personagens/${i.id}/${u?`fim`:o+2}`)}
          >
            ${u?n.personagens.verResultado:n.personagens.proxima}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `}
  `}function de(t){return R===null?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:R===`falhou`?e`<kk-alert open variant="danger" class="personagens__sem-selo">
      ${n.personagens.seloFalhou}
    </kk-alert>`:R===`nao`?e`<p class="personagens__sem-selo">
      ${P.has(t.id)?n.personagens.seloJaTinha:n.personagens.semSeloAinda}
    </p>`:e`
    <div class="personagens__conquista" data-epoca=${t.personagem.periodo}>
      ${J()}
      <strong>${R===`novo`?n.personagens.seloNovo:n.personagens.seloJaTinha}</strong>
    </div>
  `}function fe(t,i){q(t,i);let a=C(i,t);return e`
    <h2 class="resultado__titulo personagens__fim">
      ${n.personagens.resultado(a,t.perguntas.length)}
    </h2>
    ${de(t)}
    ${Y(t)}

    <div class="jogo__controles">
      <kk-button outline @click=${()=>W(t)}>
        <kk-icon slot="prefix" name="rotate"></kk-icon>${n.personagens.tentarDeNovo}
      </kk-button>
      <kk-button @click=${()=>r(`personagens`)}>
        <kk-icon slot="prefix" name="layout-grid"></kk-icon>${n.personagens.voltarAoAlbum}
      </kk-button>
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?V(t):void 0}function $(e){let t=e.args[1];if(t===void 0)return`resumo`;if(t===`fim`)return`fim`;let n=Number(t);return Number.isInteger(n)&&n>=1?n-1:`resumo`}var pe={titulo(e){return Q(e)?.personagem.nome},voltarPara(e){let t=Q(e);return t===void 0?`home`:typeof $(e)==`number`?`personagens/${t.id}`:`personagens`},conteudo(e){let t=B.espera();if(t!==null)return t;let n=Q(e);if(n===void 0)return se();let r=$(e),i=G(n);return r===`resumo`||i===null?Z(n):r===`fim`?S(i)===n.perguntas.length?fe(n,i):Z(n):r<=S(i)&&r<n.perguntas.length?ue(n,i,r):Z(n)}};export{pe as telaPersonagens};