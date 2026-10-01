import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{r}from"./rotas-D12eslN_.js";import{s as i}from"./banco-CGOuosq0.js";import{r as a}from"./catalogo-B2Z121mU.js";import{i as o,n as s,t as c}from"./aparelho-BsIv_N04.js";import{s as l}from"./dados-H13bY8CF.js";import{r as u}from"./acervo-Bp775EqU.js";import{R as d,l as f}from"./index-DYev-n2R.js";import{alternarFavorito as ee,chaveFavorito as te,lerFavoritos as ne}from"./favoritos-BACwLqIZ.js";import{t as p}from"./carga-Cb65ZAc7.js";import{t as m}from"./rascunho-kL2aOgFQ.js";import{t as h}from"./busca-yzwzD290.js";var g=`note_faq_favoritos`,re=`message-question`;async function ie(){return(await i(`faq`).todos()).sort((e,t)=>v(e.categoria)-v(t.categoria)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var _=Object.keys(a);function v(e){let t=_.indexOf(e);return t===-1?_.length:t}function y(e){return e===``?a.crencas??e:a[e]??e}function b(e){return e===null?[]:u(e.lentes)}function x(e){return e===null?[]:u(e.exemplos)}function S(e,t){return e===null||t===null||t===``?!1:t===e.correta&&b(e).some(e=>e.id===t)}function C(e){return e!==null&&b(e).some(t=>t.id===e.correta)}function w(e,t){return(b(e).find(e=>e.id===t)?.resposta??``).trim()}var T={busca:``};function E(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function D(e,t){let n=new Map;for(let t of e){let e=n.get(t.categoria);e===void 0?n.set(t.categoria,[t]):e.push(t)}return[...n].map(([e,n])=>({categoria:e,rotulo:y(e),perguntas:n,concluida:n.every(t)}))}var O=`note_faq_progresso`;function k(){return{respondidos:{}}}function ae(){return o(O,k())}function oe(e){s(O,e)}function se(e,t){let n={...e,respondidos:c(e.respondidos,t,e=>({tentativas:(e?.tentativas??0)+1,respondidoEm:Date.now()}))};return oe(n),n}function A(e,t){return t?.id!==void 0&&e.respondidos[String(t.id)]!==void 0}function ce(e,t){return t.filter(t=>A(e,t)).length}function le(e){return`faq:${e}`}async function ue(){let e=new Map;for(let t of await l()){if(t.origem!==`faq`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function de(e,t,n){return n?.id!==void 0&&A(e,n)&&(t.get(n.id)??``).trim()!==``}function fe(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var j=[],M=new Map,N=new Set,P=k(),F=T,I=new h(`not_faq`),L=-1,R=null,z=!1,B=!1,V=``,H=``,U=m({origem:`faq`,idDe:e=>e.id,chaveDe:e=>le(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${n.faq.titulo} — ${e.titulo}`,lembrete:()=>M}),W=new p(`faq`,async()=>{[j,M]=await Promise.all([ie(),ue()]),N=ne(g),P=ae()});function pe(e){return j.find(t=>t.id===e)}function me(e){L!==e.id&&(L=e.id??-1,R=null,z=!1,B=!1,V=``,H=``,U.abrir(e.id===void 0?``:M.get(e.id)??``))}function he(e){z||R===null||(S(e,R)?(z=!0,H=`ok`,V=w(e,R)||n.faq.acerto,G(e)):(H=`erro`,V=w(e,R)||n.faq.erro),d())}function G(e){B||e.id===void 0||(P=se(P,e.id),B=!0)}function K(e){return te(`curado`,e.id)}function q(e){return N.has(K(e))}function J(e){N=ee(g,N,K(e)),d()}function ge(e){return e.icone===``?re:e.icone}function _e(e){return de(P,M,e)}function ve(i){let a=q(i);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${a}>
      <button class="cartao__alvo" @click=${()=>r(`faq/${i.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${ge(i)}></kk-icon>
          <span class="cartao__titulo">${i.titulo}</span>
        </span>
      </button>

      <div class="faq__marcas">
        ${A(P,i)?e`<kk-icon
                class="faq__marca faq__marca--respondida"
                name="check"
                title=${n.faq.respondida}
              ></kk-icon>`:t}
        ${fe(M,i)?e`<kk-icon
                class="faq__marca"
                name="notes"
                title=${n.faq.seloPalavras}
              ></kk-icon>`:t}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${a?`filled`:`outline`}
          label=${a?n.faq.desfavoritar:n.faq.favoritar}
          @click=${()=>J(i)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Y(r,i,a,o,s=!1){return e`
    <kk-details class="faq__secao" name="faq-categorias" ?open=${a}>
      <span
        slot="summary"
        class="faq__categoria ${s?`faq__categoria--favoritos`:``} ${o?`faq__categoria--respondida`:``}"
      >
        ${r}
        ${o?e`<kk-icon name="check" title=${n.faq.categoriaConcluida}></kk-icon>`:t}
      </span>
      <div class="cartoes cartoes--duas">${i.map(ve)}</div>
    </kk-details>
  `}function ye(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function X(){if(j.length===0)return e`<p class="vazio">${W.emAndamento?n.app.carregando:n.faq.vazio}</p>`;let r=E(j,I.achados),i=F.busca.trim()===``,a=e=>A(P,e),o=D(r,a),s=ce(P,j),c=Math.round(s/j.length*100),l=i?j.filter(q):[],u=ye(o);return e`
    <div class="faq">
      <p class="faq__subtitulo">${n.faq.subtitulo}</p>

      <div class="faq__progresso" title=${n.faq.progresso}>
        <kk-progress-bar value=${c}></kk-progress-bar>
        <span class="faq__contagem">${s}/${j.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${n.faq.buscar}
          .value=${F.busca}
          @kk-input=${e=>{F={...F,busca:e.target.value},I.buscar(F.busca),d()}}
        ></kk-input>
      </div>

      ${r.length===0?e`<p class="vazio">${n.faq.semResultado}</p>`:e`
            <kk-accordion class="faq__categorias">
              ${l.length===0?t:Y(n.faq.favoritos,l,!0,l.every(a),!0)}
              ${o.map((e,t)=>Y(e.rotulo,e.perguntas,l.length===0&&t===u,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function be(t){return e`
    <div class="faq">
      <p class="faq__categoria-aberta">${y(t.categoria)}</p>

      <article class="faq__bloco">
        <h2 class="faq__secao-titulo">${n.faq.cenario}</h2>
        <div class="prosa">${f(t.cenario)}</div>
      </article>

      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${n.faq.impulso}</h2>
        <div class="prosa">${f(t.impulso)}</div>
      </article>

      <p class="faq__dica">${n.faq.preparoDica}</p>

      <kk-button variant="primary" @click=${()=>r(`faq/${t.id}/lente`)}>
        ${n.faq.comecar}
      </kk-button>
    </div>
  `}function xe(n){let r=b(n);return e`
    <div class="faq__lentes">
      ${r.map(n=>e`
          <button
            class="faq__lente ${R===n.id?`faq__lente--ativa`:``}"
            ?disabled=${z}
            @click=${()=>{R=n.id,V=``,H=``,d()}}
          >
            <strong>${n.rotulo}</strong>
            ${n.nota===void 0||n.nota===``?t:e`<small>${n.nota}</small>`}
          </button>
        `)}
    </div>
  `}function Se(r){return me(r),C(r)?e`
    <div class="faq">
      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${n.faq.impulso}</h2>
        <div class="prosa">${f(r.impulso)}</div>
        <p class="faq__enunciado">${n.faq.enunciado}</p>

        ${xe(r)}

        ${V===``?t:e`<p class="faq__feedback faq__feedback--${H}">${V}</p>`}

        ${z?t:e`
              <kk-button
                variant="primary"
                ?disabled=${R===null}
                @click=${()=>he(r)}
              >${n.faq.conferir}</kk-button>
            `}
      </article>

      ${z?Z(r):t}
    </div>
  `:(B||G(r),e`<div class="faq">${Z(r)}</div>`)}function Ce(r){let i=x(r);return i.length===0?t:e`
    <article class="faq__bloco">
      <h2 class="faq__secao-titulo">${n.faq.exemplos}</h2>
      <ul class="faq__exemplos">
        ${i.map(n=>e`
            <li>
              <strong>${n.nome}</strong>
              ${n.nota===void 0||n.nota===``?t:e`<span>${n.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function Z(i){return e`
    <div class="faq__final">
      ${_e(i)?e`<p class="faq__selo-feito"><kk-icon name="notes"></kk-icon>${n.faq.seloFeito}</p>`:t}

      <article class="faq__bloco faq__bloco--sucesso">
        <h2 class="faq__secao-titulo">${n.faq.aResposta}</h2>
        <div class="prosa">${f(i.resposta)}</div>
        ${i.referencia===``?t:e`<p class="faq__base"><kk-icon name="book"></kk-icon>${i.referencia}</p>`}
        ${i.link_jw===``?t:e`
              <p class="faq__fonte">
                <a href=${i.link_jw} target="_blank" rel="noopener">${n.faq.lerArtigo}</a>
              </p>
            `}
      </article>

      ${Ce(i)}

      ${U.campo({item:i,id:`faq-preparo`,rotulo:n.faq.paraPreparar,placeholder:n.faq.respostaPlaceholder,apoio:i.preparo===``?t:e`<p class="rascunho__apoio">${i.preparo}</p>`})}

      <div class="faq__saidas">
        <kk-button variant="primary" @click=${()=>r(`faq`)}>${n.faq.outras}</kk-button>
        <kk-button @click=${()=>r(`home`)}>${n.faq.inicio}</kk-button>
      </div>
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?pe(t):void 0}function $(e){return e.args[1]===`lente`}var we={titulo(e){return Q(e)?.titulo},voltarPara(e){let t=Q(e);return t===void 0?`home`:$(e)?`faq/${t.id}`:`faq`},acoes(t){let r=Q(t);if(r===void 0)return;let i=q(r);return e`
      <kk-icon-button
        name="star"
        variant=${i?`filled`:`outline`}
        label=${i?n.faq.desfavoritar:n.faq.favoritar}
        @click=${()=>J(r)}
      ></kk-icon-button>
    `},conteudo(e){let t=W.falhou();if(t!==null)return t;let n=Q(e);return n===void 0?(L=-1,X()):$(e)?Se(n):(L=-1,be(n))}};export{we as telaFaq};