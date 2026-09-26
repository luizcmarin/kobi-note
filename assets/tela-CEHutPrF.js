import{a as e,s as t}from"./banco-DhjAojIe.js";import{r as n}from"./catalogo-B2Z121mU.js";import{C as r,G as i,_t as a,bt as o,ft as s,mt as c,w as l,xt as u,y as d}from"./index-tEHw1VqD.js";import{alternarFavorito as ee,chaveFavorito as te,lerFavoritos as ne}from"./favoritos-DAEWA_Gd.js";import{t as re}from"./rascunho-C2U3kt15.js";var f=`note_faq_favoritos`,p=`message-question`;async function ie(){return(await t(`faq`).todos()).sort((e,t)=>h(e.categoria)-h(t.categoria)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var m=Object.keys(n);function h(e){let t=m.indexOf(e);return t===-1?m.length:t}function g(e){return e===``?n.crencas??e:n[e]??e}function _(e){try{let t=JSON.parse(e===``?`[]`:e);return Array.isArray(t)?t:[]}catch{return[]}}function v(e){return e===null?[]:_(e.lentes)}function ae(e){return e===null?[]:_(e.exemplos)}function y(e,t){return e===null||t===null||t===``?!1:t===e.correta&&v(e).some(e=>e.id===t)}function oe(e){return e!==null&&v(e).some(t=>t.id===e.correta)}function b(e,t){return(v(e).find(e=>e.id===t)?.resposta??``).trim()}var x={busca:``};function se(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function ce(e,t){let n=new Map;for(let t of e){let e=n.get(t.categoria);e===void 0?n.set(t.categoria,[t]):e.push(t)}return[...n].map(([e,n])=>({categoria:e,rotulo:g(e),perguntas:n,concluida:n.every(t)}))}var S=`note_faq_progresso`;function C(){return{respondidos:{}}}function le(){try{let e=JSON.parse(localStorage.getItem(S)??`null`);return{...C(),...e}}catch{return C()}}function ue(e){localStorage.setItem(S,JSON.stringify(e))}function de(e,t){let n=e.respondidos[String(t)],r={...e,respondidos:{...e.respondidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,respondidoEm:Date.now()}}};return ue(r),r}function w(e,t){return t?.id!==void 0&&e.respondidos[String(t.id)]!==void 0}function T(e,t){return t.filter(t=>w(e,t)).length}function fe(e){return`faq:${e}`}async function pe(){let e=new Map;for(let t of await i()){if(t.origem!==`faq`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function me(e,t,n){return n?.id!==void 0&&w(e,n)&&(t.get(n.id)??``).trim()!==``}function he(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var E=[],D=new Map,O=new Set,k=C(),A=!1,j=!1,M=null,N=x,P=null,F=``;function I(t){F=t,e(`not_faq`,t).then(e=>{F===t&&(P=e===null?null:new Set(e),s())})}var L=-1,R=null,z=!1,B=!1,V=``,H=``,U=re({origem:`faq`,idDe:e=>e.id,chaveDe:e=>fe(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${a.faq.titulo} — ${e.titulo}`,lembrete:()=>D});function W(){A||j||M!==null||(j=!0,(async()=>{try{[E,D]=await Promise.all([ie(),pe()]),O=ne(f),k=le(),A=!0}catch(e){console.error(`faq: a carga falhou.`,e),M=l(e)}finally{j=!1,s()}})())}function ge(){M=null,W(),s()}function _e(e){return E.find(t=>t.id===e)}function ve(e){L!==e.id&&(L=e.id??-1,R=null,z=!1,B=!1,V=``,H=``,U.abrir(e.id===void 0?``:D.get(e.id)??``))}function ye(e){z||R===null||(y(e,R)?(z=!0,H=`ok`,V=b(e,R)||a.faq.acerto,G(e)):(H=`erro`,V=b(e,R)||a.faq.erro),s())}function G(e){B||e.id===void 0||(k=de(k,e.id),B=!0)}function K(e){return te(`curado`,e.id)}function q(e){return O.has(K(e))}function J(e){O=ee(f,O,K(e)),s()}function be(e){return e.icone===``?p:e.icone}function xe(e){return me(k,D,e)}function Se(e){let t=q(e);return u`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>c(`faq/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${be(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
      </button>

      <div class="faq__marcas">
        ${w(k,e)?u`<kk-icon
                class="faq__marca faq__marca--respondida"
                name="check"
                title=${a.faq.respondida}
              ></kk-icon>`:o}
        ${he(D,e)?u`<kk-icon
                class="faq__marca"
                name="notes"
                title=${a.faq.seloPalavras}
              ></kk-icon>`:o}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?a.faq.desfavoritar:a.faq.favoritar}
          @click=${()=>J(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Y(e,t,n,r,i=!1){return u`
    <kk-details class="faq__secao" name="faq-categorias" ?open=${n}>
      <span
        slot="summary"
        class="faq__categoria ${i?`faq__categoria--favoritos`:``} ${r?`faq__categoria--respondida`:``}"
      >
        ${e}
        ${r?u`<kk-icon name="check" title=${a.faq.categoriaConcluida}></kk-icon>`:o}
      </span>
      <div class="cartoes cartoes--duas">${t.map(Se)}</div>
    </kk-details>
  `}function X(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function Ce(){if(E.length===0)return u`<p class="vazio">${j?a.app.carregando:a.faq.vazio}</p>`;let e=se(E,P),t=N.busca.trim()===``,n=e=>w(k,e),r=ce(e,n),i=T(k,E),c=Math.round(i/E.length*100),l=t?E.filter(q):[],d=X(r);return u`
    <div class="faq">
      <p class="faq__subtitulo">${a.faq.subtitulo}</p>

      <div class="faq__progresso" title=${a.faq.progresso}>
        <kk-progress-bar value=${c}></kk-progress-bar>
        <span class="faq__contagem">${i}/${E.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${a.faq.buscar}
          .value=${N.busca}
          @kk-input=${e=>{N={...N,busca:e.target.value},I(N.busca),s()}}
        ></kk-input>
      </div>

      ${e.length===0?u`<p class="vazio">${a.faq.semResultado}</p>`:u`
            <kk-accordion class="faq__categorias">
              ${l.length===0?o:Y(a.faq.favoritos,l,!0,l.every(n),!0)}
              ${r.map((e,t)=>Y(e.rotulo,e.perguntas,l.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function we(e){return u`
    <div class="faq">
      <p class="faq__categoria-aberta">${g(e.categoria)}</p>

      <article class="faq__bloco">
        <h2 class="faq__secao-titulo">${a.faq.cenario}</h2>
        <div class="prosa">${d(e.cenario)}</div>
      </article>

      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${a.faq.impulso}</h2>
        <div class="prosa">${d(e.impulso)}</div>
      </article>

      <p class="faq__dica">${a.faq.preparoDica}</p>

      <kk-button variant="primary" @click=${()=>c(`faq/${e.id}/lente`)}>
        ${a.faq.comecar}
      </kk-button>
    </div>
  `}function Te(e){let t=v(e);return u`
    <div class="faq__lentes">
      ${t.map(e=>u`
          <button
            class="faq__lente ${R===e.id?`faq__lente--ativa`:``}"
            ?disabled=${z}
            @click=${()=>{R=e.id,V=``,H=``,s()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?o:u`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function Ee(e){return ve(e),oe(e)?u`
    <div class="faq">
      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${a.faq.impulso}</h2>
        <div class="prosa">${d(e.impulso)}</div>
        <p class="faq__enunciado">${a.faq.enunciado}</p>

        ${Te(e)}

        ${V===``?o:u`<p class="faq__feedback faq__feedback--${H}">${V}</p>`}

        ${z?o:u`
              <kk-button
                variant="primary"
                ?disabled=${R===null}
                @click=${()=>ye(e)}
              >${a.faq.conferir}</kk-button>
            `}
      </article>

      ${z?Z(e):o}
    </div>
  `:(B||G(e),u`<div class="faq">${Z(e)}</div>`)}function De(e){let t=ae(e);return t.length===0?o:u`
    <article class="faq__bloco">
      <h2 class="faq__secao-titulo">${a.faq.exemplos}</h2>
      <ul class="faq__exemplos">
        ${t.map(e=>u`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?o:u`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function Z(e){return u`
    <div class="faq__final">
      ${xe(e)?u`<p class="faq__selo-feito"><kk-icon name="notes"></kk-icon>${a.faq.seloFeito}</p>`:o}

      <article class="faq__bloco faq__bloco--sucesso">
        <h2 class="faq__secao-titulo">${a.faq.aResposta}</h2>
        <div class="prosa">${d(e.resposta)}</div>
        ${e.referencia===``?o:u`<p class="faq__base"><kk-icon name="book"></kk-icon>${e.referencia}</p>`}
        ${e.link_jw===``?o:u`
              <p class="faq__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${a.faq.lerArtigo}</a>
              </p>
            `}
      </article>

      ${De(e)}

      ${U.campo({item:e,id:`faq-preparo`,rotulo:a.faq.paraPreparar,placeholder:a.faq.respostaPlaceholder,apoio:e.preparo===``?o:u`<p class="rascunho__apoio">${e.preparo}</p>`})}

      <div class="faq__saidas">
        <kk-button variant="primary" @click=${()=>c(`faq`)}>${a.faq.outras}</kk-button>
        <kk-button @click=${()=>c(`home`)}>${a.faq.inicio}</kk-button>
      </div>
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?_e(t):void 0}function $(e){return e.args[1]===`lente`}var Oe={titulo(e){return Q(e)?.titulo},voltarPara(e){let t=Q(e);return t===void 0?`home`:$(e)?`faq/${t.id}`:`faq`},acoes(e){let t=Q(e);if(t===void 0)return;let n=q(t);return u`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?a.faq.desfavoritar:a.faq.favoritar}
        @click=${()=>J(t)}
      ></kk-icon-button>
    `},conteudo(e){if(W(),M!==null)return r(M,ge);let t=Q(e);return t===void 0?(L=-1,Ce()):$(e)?Ee(t):(L=-1,we(t))}};export{Oe as telaFaq};