import{a as e,s as t}from"./banco-C984k9KX.js";import{r as n}from"./catalogo-B2Z121mU.js";import{V as r,_t as i,b as a,ft as o,ht as s,lt as c,st as l,y as u}from"./index-BESQMk3B.js";import{alternarFavorito as d,chaveFavorito as ee,lerFavoritos as te}from"./favoritos-DAEWA_Gd.js";import{t as f}from"./unsafe-html-D_sD8y-f.js";import{t as ne}from"./rascunho-COu6zRf9.js";var p=`note_faq_favoritos`,re=`message-question`;async function ie(){return(await t(`faq`).todos()).sort((e,t)=>h(e.categoria)-h(t.categoria)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var m=Object.keys(n);function h(e){let t=m.indexOf(e);return t===-1?m.length:t}function g(e){return e===``?n.crencas??e:n[e]??e}function _(e){try{let t=JSON.parse(e===``?`[]`:e);return Array.isArray(t)?t:[]}catch{return[]}}function v(e){return e===null?[]:_(e.lentes)}function ae(e){return e===null?[]:_(e.exemplos)}function oe(e,t){return e===null||t===null||t===``?!1:t===e.correta&&v(e).some(e=>e.id===t)}function se(e){return e!==null&&v(e).some(t=>t.id===e.correta)}function y(e,t){return(v(e).find(e=>e.id===t)?.resposta??``).trim()}var b={busca:``};function ce(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function le(e,t){let n=new Map;for(let t of e){let e=n.get(t.categoria);e===void 0?n.set(t.categoria,[t]):e.push(t)}return[...n].map(([e,n])=>({categoria:e,rotulo:g(e),perguntas:n,concluida:n.every(t)}))}var x=`note_faq_progresso`;function S(){return{respondidos:{}}}function ue(){try{let e=JSON.parse(localStorage.getItem(x)??`null`);return{...S(),...e}}catch{return S()}}function de(e){localStorage.setItem(x,JSON.stringify(e))}function fe(e,t){let n=e.respondidos[String(t)],r={...e,respondidos:{...e.respondidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,respondidoEm:Date.now()}}};return de(r),r}function C(e,t){return t?.id!==void 0&&e.respondidos[String(t.id)]!==void 0}function w(e,t){return t.filter(t=>C(e,t)).length}function T(e){return`faq:${e}`}async function pe(){let e=new Map;for(let t of await r()){if(t.origem!==`faq`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function me(e,t,n){return n?.id!==void 0&&C(e,n)&&(t.get(n.id)??``).trim()!==``}function he(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var E=[],D=new Map,O=new Set,k=S(),A=!1,j=!1,M=null,N=b,P=null,F=``;function I(t){F=t,e(`not_faq`,t).then(e=>{F===t&&(P=e===null?null:new Set(e),l())})}var L=-1,R=null,z=!1,B=!1,V=``,H=``,U=ne({origem:`faq`,idDe:e=>e.id,chaveDe:e=>T(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${o.faq.titulo} — ${e.titulo}`,lembrete:()=>D});function W(){A||j||M!==null||(j=!0,(async()=>{try{[E,D]=await Promise.all([ie(),pe()]),O=te(p),k=ue(),A=!0}catch(e){console.error(`faq: a carga falhou.`,e),M=a(e)}finally{j=!1,l()}})())}function ge(){M=null,W(),l()}function _e(e){return E.find(t=>t.id===e)}function ve(e){L!==e.id&&(L=e.id??-1,R=null,z=!1,B=!1,V=``,H=``,U.abrir(e.id===void 0?``:D.get(e.id)??``))}function ye(e){z||R===null||(oe(e,R)?(z=!0,H=`ok`,V=y(e,R)||o.faq.acerto,G(e)):(H=`erro`,V=y(e,R)||o.faq.erro),l())}function G(e){B||e.id===void 0||(k=fe(k,e.id),B=!0)}function K(e){return ee(`curado`,e.id)}function q(e){return O.has(K(e))}function J(e){O=d(p,O,K(e)),l()}function be(e){return e.icone===``?re:e.icone}function xe(e){return me(k,D,e)}function Se(e){let t=q(e);return i`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>c(`faq/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${be(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
      </button>

      <div class="faq__marcas">
        ${C(k,e)?i`<kk-icon
                class="faq__marca faq__marca--respondida"
                name="check"
                title=${o.faq.respondida}
              ></kk-icon>`:s}
        ${he(D,e)?i`<kk-icon
                class="faq__marca"
                name="notes"
                title=${o.faq.seloPalavras}
              ></kk-icon>`:s}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?o.faq.desfavoritar:o.faq.favoritar}
          @click=${()=>J(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Y(e,t,n,r,a=!1){return i`
    <kk-details class="faq__secao" name="faq-categorias" ?open=${n}>
      <span
        slot="summary"
        class="faq__categoria ${a?`faq__categoria--favoritos`:``} ${r?`faq__categoria--respondida`:``}"
      >
        ${e}
        ${r?i`<kk-icon name="check" title=${o.faq.categoriaConcluida}></kk-icon>`:s}
      </span>
      <div class="cartoes cartoes--duas">${t.map(Se)}</div>
    </kk-details>
  `}function X(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function Ce(){if(E.length===0)return i`<p class="vazio">${j?o.app.carregando:o.faq.vazio}</p>`;let e=ce(E,P),t=N.busca.trim()===``,n=e=>C(k,e),r=le(e,n),a=w(k,E),c=Math.round(a/E.length*100),u=t?E.filter(q):[],d=X(r);return i`
    <div class="faq">
      <p class="faq__subtitulo">${o.faq.subtitulo}</p>

      <div class="faq__progresso" title=${o.faq.progresso}>
        <kk-progress-bar value=${c}></kk-progress-bar>
        <span class="faq__contagem">${a}/${E.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${o.faq.buscar}
          .value=${N.busca}
          @kk-input=${e=>{N={...N,busca:e.target.value},I(N.busca),l()}}
        ></kk-input>
      </div>

      ${e.length===0?i`<p class="vazio">${o.faq.semResultado}</p>`:i`
            <kk-accordion class="faq__categorias">
              ${u.length===0?s:Y(o.faq.favoritos,u,!0,u.every(n),!0)}
              ${r.map((e,t)=>Y(e.rotulo,e.perguntas,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function we(e){return i`
    <div class="faq">
      <p class="faq__categoria-aberta">${g(e.categoria)}</p>

      <article class="faq__bloco">
        <h2 class="faq__secao-titulo">${o.faq.cenario}</h2>
        <div class="prosa">${f(e.cenario)}</div>
      </article>

      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${o.faq.impulso}</h2>
        <div class="prosa">${f(e.impulso)}</div>
      </article>

      <p class="faq__dica">${o.faq.preparoDica}</p>

      <kk-button variant="primary" @click=${()=>c(`faq/${e.id}/lente`)}>
        ${o.faq.comecar}
      </kk-button>
    </div>
  `}function Te(e){let t=v(e);return i`
    <div class="faq__lentes">
      ${t.map(e=>i`
          <button
            class="faq__lente ${R===e.id?`faq__lente--ativa`:``}"
            ?disabled=${z}
            @click=${()=>{R=e.id,V=``,H=``,l()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?s:i`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function Ee(e){return ve(e),se(e)?i`
    <div class="faq">
      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${o.faq.impulso}</h2>
        <div class="prosa">${f(e.impulso)}</div>
        <p class="faq__enunciado">${o.faq.enunciado}</p>

        ${Te(e)}

        ${V===``?s:i`<p class="faq__feedback faq__feedback--${H}">${V}</p>`}

        ${z?s:i`
              <kk-button
                variant="primary"
                ?disabled=${R===null}
                @click=${()=>ye(e)}
              >${o.faq.conferir}</kk-button>
            `}
      </article>

      ${z?Z(e):s}
    </div>
  `:(B||G(e),i`<div class="faq">${Z(e)}</div>`)}function De(e){let t=ae(e);return t.length===0?s:i`
    <article class="faq__bloco">
      <h2 class="faq__secao-titulo">${o.faq.exemplos}</h2>
      <ul class="faq__exemplos">
        ${t.map(e=>i`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?s:i`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function Z(e){return i`
    <div class="faq__final">
      ${xe(e)?i`<p class="faq__selo-feito"><kk-icon name="notes"></kk-icon>${o.faq.seloFeito}</p>`:s}

      <article class="faq__bloco faq__bloco--sucesso">
        <h2 class="faq__secao-titulo">${o.faq.aResposta}</h2>
        <div class="prosa">${f(e.resposta)}</div>
        ${e.referencia===``?s:i`<p class="faq__base"><kk-icon name="book"></kk-icon>${e.referencia}</p>`}
        ${e.link_jw===``?s:i`
              <p class="faq__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${o.faq.lerArtigo}</a>
              </p>
            `}
      </article>

      ${De(e)}

      ${U.campo({item:e,id:`faq-preparo`,rotulo:o.faq.paraPreparar,placeholder:o.faq.respostaPlaceholder,apoio:e.preparo===``?s:i`<p class="rascunho__apoio">${e.preparo}</p>`})}

      <div class="faq__saidas">
        <kk-button variant="primary" @click=${()=>c(`faq`)}>${o.faq.outras}</kk-button>
        <kk-button @click=${()=>c(`home`)}>${o.faq.inicio}</kk-button>
      </div>
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?_e(t):void 0}function $(e){return e.args[1]===`lente`}var Oe={titulo(e){return Q(e)?.titulo},voltarPara(e){let t=Q(e);return t===void 0?`home`:$(e)?`faq/${t.id}`:`faq`},acoes(e){let t=Q(e);if(t===void 0)return;let n=q(t);return i`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?o.faq.desfavoritar:o.faq.favoritar}
        @click=${()=>J(t)}
      ></kk-icon-button>
    `},conteudo(e){if(W(),M!==null)return u(M,ge);let t=Q(e);return t===void 0?(L=-1,Ce()):$(e)?Ee(t):(L=-1,we(t))}};export{Oe as telaFaq};