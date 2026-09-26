import{a as e,s as t}from"./banco-B3R_YLyx.js";import{r as n}from"./catalogo-B2Z121mU.js";import{G as r,_t as i,b as a,bt as o,ft as s,h as c,mt as l,xt as u,y as d}from"./index-BNLfwB87.js";import{alternarFavorito as ee,chaveFavorito as te,lerFavoritos as ne}from"./favoritos-DAEWA_Gd.js";import{t as re}from"./rascunho-CeEzT1uK.js";var f=`note_faq_favoritos`,ie=`message-question`;async function ae(){return(await t(`faq`).todos()).sort((e,t)=>m(e.categoria)-m(t.categoria)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var p=Object.keys(n);function m(e){let t=p.indexOf(e);return t===-1?p.length:t}function h(e){return e===``?n.crencas??e:n[e]??e}function g(e){try{let t=JSON.parse(e===``?`[]`:e);return Array.isArray(t)?t:[]}catch{return[]}}function _(e){return e===null?[]:g(e.lentes)}function oe(e){return e===null?[]:g(e.exemplos)}function se(e,t){return e===null||t===null||t===``?!1:t===e.correta&&_(e).some(e=>e.id===t)}function v(e){return e!==null&&_(e).some(t=>t.id===e.correta)}function y(e,t){return(_(e).find(e=>e.id===t)?.resposta??``).trim()}var ce={busca:``};function le(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function ue(e,t){let n=new Map;for(let t of e){let e=n.get(t.categoria);e===void 0?n.set(t.categoria,[t]):e.push(t)}return[...n].map(([e,n])=>({categoria:e,rotulo:h(e),perguntas:n,concluida:n.every(t)}))}var b=`note_faq_progresso`;function x(){return{respondidos:{}}}function S(){try{let e=JSON.parse(localStorage.getItem(b)??`null`);return{...x(),...e}}catch{return x()}}function C(e){localStorage.setItem(b,JSON.stringify(e))}function w(e,t){let n=e.respondidos[String(t)],r={...e,respondidos:{...e.respondidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,respondidoEm:Date.now()}}};return C(r),r}function T(e,t){return t?.id!==void 0&&e.respondidos[String(t.id)]!==void 0}function de(e,t){return t.filter(t=>T(e,t)).length}function fe(e){return`faq:${e}`}async function pe(){let e=new Map;for(let t of await r()){if(t.origem!==`faq`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function me(e,t,n){return n?.id!==void 0&&T(e,n)&&(t.get(n.id)??``).trim()!==``}function he(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var E=[],D=new Map,O=new Set,k=x(),A=!1,j=!1,M=null,N=ce,P=null,F=``;function I(t){F=t,e(`not_faq`,t).then(e=>{F===t&&(P=e===null?null:new Set(e),s())})}var L=-1,R=null,z=!1,B=!1,V=``,H=``,U=re({origem:`faq`,idDe:e=>e.id,chaveDe:e=>fe(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${i.faq.titulo} — ${e.titulo}`,lembrete:()=>D});function W(){A||j||M!==null||(j=!0,(async()=>{try{[E,D]=await Promise.all([ae(),pe()]),O=ne(f),k=S(),A=!0}catch(e){console.error(`faq: a carga falhou.`,e),M=a(e)}finally{j=!1,s()}})())}function ge(){M=null,W(),s()}function _e(e){return E.find(t=>t.id===e)}function ve(e){L!==e.id&&(L=e.id??-1,R=null,z=!1,B=!1,V=``,H=``,U.abrir(e.id===void 0?``:D.get(e.id)??``))}function ye(e){z||R===null||(se(e,R)?(z=!0,H=`ok`,V=y(e,R)||i.faq.acerto,G(e)):(H=`erro`,V=y(e,R)||i.faq.erro),s())}function G(e){B||e.id===void 0||(k=w(k,e.id),B=!0)}function K(e){return te(`curado`,e.id)}function q(e){return O.has(K(e))}function J(e){O=ee(f,O,K(e)),s()}function Y(e){return e.icone===``?ie:e.icone}function be(e){return me(k,D,e)}function xe(e){let t=q(e);return u`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>l(`faq/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${Y(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
      </button>

      <div class="faq__marcas">
        ${T(k,e)?u`<kk-icon
                class="faq__marca faq__marca--respondida"
                name="check"
                title=${i.faq.respondida}
              ></kk-icon>`:o}
        ${he(D,e)?u`<kk-icon
                class="faq__marca"
                name="notes"
                title=${i.faq.seloPalavras}
              ></kk-icon>`:o}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?i.faq.desfavoritar:i.faq.favoritar}
          @click=${()=>J(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function X(e,t,n,r,a=!1){return u`
    <kk-details class="faq__secao" name="faq-categorias" ?open=${n}>
      <span
        slot="summary"
        class="faq__categoria ${a?`faq__categoria--favoritos`:``} ${r?`faq__categoria--respondida`:``}"
      >
        ${e}
        ${r?u`<kk-icon name="check" title=${i.faq.categoriaConcluida}></kk-icon>`:o}
      </span>
      <div class="cartoes cartoes--duas">${t.map(xe)}</div>
    </kk-details>
  `}function Se(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function Ce(){if(E.length===0)return u`<p class="vazio">${j?i.app.carregando:i.faq.vazio}</p>`;let e=le(E,P),t=N.busca.trim()===``,n=e=>T(k,e),r=ue(e,n),a=de(k,E),c=Math.round(a/E.length*100),l=t?E.filter(q):[],d=Se(r);return u`
    <div class="faq">
      <p class="faq__subtitulo">${i.faq.subtitulo}</p>

      <div class="faq__progresso" title=${i.faq.progresso}>
        <kk-progress-bar value=${c}></kk-progress-bar>
        <span class="faq__contagem">${a}/${E.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${i.faq.buscar}
          .value=${N.busca}
          @kk-input=${e=>{N={...N,busca:e.target.value},I(N.busca),s()}}
        ></kk-input>
      </div>

      ${e.length===0?u`<p class="vazio">${i.faq.semResultado}</p>`:u`
            <kk-accordion class="faq__categorias">
              ${l.length===0?o:X(i.faq.favoritos,l,!0,l.every(n),!0)}
              ${r.map((e,t)=>X(e.rotulo,e.perguntas,l.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function we(e){return u`
    <div class="faq">
      <p class="faq__categoria-aberta">${h(e.categoria)}</p>

      <article class="faq__bloco">
        <h2 class="faq__secao-titulo">${i.faq.cenario}</h2>
        <div class="prosa">${c(e.cenario)}</div>
      </article>

      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${i.faq.impulso}</h2>
        <div class="prosa">${c(e.impulso)}</div>
      </article>

      <p class="faq__dica">${i.faq.preparoDica}</p>

      <kk-button variant="primary" @click=${()=>l(`faq/${e.id}/lente`)}>
        ${i.faq.comecar}
      </kk-button>
    </div>
  `}function Te(e){let t=_(e);return u`
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
  `}function Ee(e){return ve(e),v(e)?u`
    <div class="faq">
      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${i.faq.impulso}</h2>
        <div class="prosa">${c(e.impulso)}</div>
        <p class="faq__enunciado">${i.faq.enunciado}</p>

        ${Te(e)}

        ${V===``?o:u`<p class="faq__feedback faq__feedback--${H}">${V}</p>`}

        ${z?o:u`
              <kk-button
                variant="primary"
                ?disabled=${R===null}
                @click=${()=>ye(e)}
              >${i.faq.conferir}</kk-button>
            `}
      </article>

      ${z?Z(e):o}
    </div>
  `:(B||G(e),u`<div class="faq">${Z(e)}</div>`)}function De(e){let t=oe(e);return t.length===0?o:u`
    <article class="faq__bloco">
      <h2 class="faq__secao-titulo">${i.faq.exemplos}</h2>
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
      ${be(e)?u`<p class="faq__selo-feito"><kk-icon name="notes"></kk-icon>${i.faq.seloFeito}</p>`:o}

      <article class="faq__bloco faq__bloco--sucesso">
        <h2 class="faq__secao-titulo">${i.faq.aResposta}</h2>
        <div class="prosa">${c(e.resposta)}</div>
        ${e.referencia===``?o:u`<p class="faq__base"><kk-icon name="book"></kk-icon>${e.referencia}</p>`}
        ${e.link_jw===``?o:u`
              <p class="faq__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${i.faq.lerArtigo}</a>
              </p>
            `}
      </article>

      ${De(e)}

      ${U.campo({item:e,id:`faq-preparo`,rotulo:i.faq.paraPreparar,placeholder:i.faq.respostaPlaceholder,apoio:e.preparo===``?o:u`<p class="rascunho__apoio">${e.preparo}</p>`})}

      <div class="faq__saidas">
        <kk-button variant="primary" @click=${()=>l(`faq`)}>${i.faq.outras}</kk-button>
        <kk-button @click=${()=>l(`home`)}>${i.faq.inicio}</kk-button>
      </div>
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?_e(t):void 0}function $(e){return e.args[1]===`lente`}var Oe={titulo(e){return Q(e)?.titulo},voltarPara(e){let t=Q(e);return t===void 0?`home`:$(e)?`faq/${t.id}`:`faq`},acoes(e){let t=Q(e);if(t===void 0)return;let n=q(t);return u`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?i.faq.desfavoritar:i.faq.favoritar}
        @click=${()=>J(t)}
      ></kk-icon-button>
    `},conteudo(e){if(W(),M!==null)return d(M,ge);let t=Q(e);return t===void 0?(L=-1,Ce()):$(e)?Ee(t):(L=-1,we(t))}};export{Oe as telaFaq};