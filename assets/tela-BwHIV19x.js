import{a as e}from"./banco-DuSJp2UL.js";import{$ as t,Q as n,U as r,W as i,at as a,nt as o,q as s,rt as c}from"./index-nhXlEhbh.js";import{alternarFavorito as l,chaveFavorito as u,lerFavoritos as d}from"./favoritos-DAEWA_Gd.js";import{t as f}from"./unsafe-html-CEQvTww4.js";import"./src-DLgB_IBf.js";import{r as p}from"./catalogo-B2Z121mU.js";var m=`note_faq_favoritos`,ee=`message-question`;async function h(){return(await e(`faq`).todos()).sort((e,t)=>_(e.categoria)-_(t.categoria)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var g=Object.keys(p);function _(e){let t=g.indexOf(e);return t===-1?g.length:t}function v(e){return e===``?p.crencas??e:p[e]??e}function y(e){try{let t=JSON.parse(e===``?`[]`:e);return Array.isArray(t)?t:[]}catch{return[]}}function b(e){return e===null?[]:y(e.lentes)}function te(e){return e===null?[]:y(e.exemplos)}function ne(e,t){return e===null||t===null||t===``?!1:t===e.correta&&b(e).some(e=>e.id===t)}function x(e){return e!==null&&b(e).some(t=>t.id===e.correta)}function S(e,t){return(b(e).find(e=>e.id===t)?.resposta??``).trim()}function C(e){return e.normalize(`NFD`).replace(/[̀-ͯ]/g,``).toLowerCase()}var re={busca:``};function ie(e,t){let n=C(t.busca.trim());return n===``?e:e.filter(e=>C(`${e.titulo} ${e.referencia}`).includes(n))}function ae(e,t){let n=new Map;for(let t of e){let e=n.get(t.categoria);e===void 0?n.set(t.categoria,[t]):e.push(t)}return[...n].map(([e,n])=>({categoria:e,rotulo:v(e),perguntas:n,concluida:n.every(t)}))}var w=`note_faq_progresso`;function T(){return{respondidos:{}}}function oe(){try{let e=JSON.parse(localStorage.getItem(w)??`null`);return{...T(),...e}}catch{return T()}}function se(e){localStorage.setItem(w,JSON.stringify(e))}function ce(e,t){let n=e.respondidos[String(t)],r={...e,respondidos:{...e.respondidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,respondidoEm:Date.now()}}};return se(r),r}function E(e,t){return t?.id!==void 0&&e.respondidos[String(t.id)]!==void 0}function D(e,t){return t.filter(t=>E(e,t)).length}function O(e){return`faq:${e}`}async function k(){let e=new Map;for(let t of await i()){if(t.origem!==`faq`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function le(e,t,n){return n?.id!==void 0&&E(e,n)&&(t.get(n.id)??``).trim()!==``}function ue(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var A=[],j=new Map,M=new Set,N=T(),P=!1,F=!1,I=re,L=-1,R=null,z=!1,B=!1,V=``,H=``,U=``;function de(){P||F||(F=!0,(async()=>{try{[A,j]=await Promise.all([h(),k()]),M=d(m),N=oe(),P=!0}finally{F=!1,n()}})())}function fe(e){return A.find(t=>t.id===e)}function pe(e){L!==e.id&&(L=e.id??-1,R=null,z=!1,B=!1,V=``,H=``,U=e.id===void 0?``:j.get(e.id)??``)}function me(e){z||R===null||(ne(e,R)?(z=!0,H=`ok`,V=S(e,R)||o.faq.acerto,W(e)):(H=`erro`,V=S(e,R)||o.faq.erro),n())}function W(e){B||e.id===void 0||(N=ce(N,e.id),B=!0)}function G(e){return u(`curado`,e.id)}function K(e){return M.has(G(e))}function q(e){M=l(m,M,G(e)),n()}var J;function he(e){clearTimeout(J),J=setTimeout(()=>{(async()=>{if(e.id===void 0)return;let t=U.trim();t===``?(await s(O(e.id)),j.delete(e.id)):(await r({origem:`faq`,referencia:e.referencia,titulo:`${o.faq.titulo} — ${e.titulo}`,conteudo:t,ref_chave:O(e.id)}),j.set(e.id,t)),n()})()},500)}function ge(e){return e.icone===``?ee:e.icone}function _e(e){return le(N,j,e)}function ve(e){let n=K(e);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${n}>
      <button class="cartao__alvo" @click=${()=>t(`faq/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${ge(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
      </button>

      <div class="faq__marcas">
        ${E(N,e)?a`<kk-icon
                class="faq__marca faq__marca--respondida"
                name="check"
                title=${o.faq.respondida}
              ></kk-icon>`:c}
        ${ue(j,e)?a`<kk-icon
                class="faq__marca"
                name="notes"
                title=${o.faq.seloPalavras}
              ></kk-icon>`:c}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${n?`filled`:`outline`}
          label=${n?o.faq.desfavoritar:o.faq.favoritar}
          @click=${()=>q(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Y(e,t,n,r,i=!1){return a`
    <kk-details class="faq__secao" name="faq-categorias" ?open=${n}>
      <span
        slot="summary"
        class="faq__categoria ${i?`faq__categoria--favoritos`:``} ${r?`faq__categoria--respondida`:``}"
      >
        ${e}
        ${r?a`<kk-icon name="check" title=${o.faq.categoriaConcluida}></kk-icon>`:c}
      </span>
      <div class="cartoes cartoes--duas">${t.map(ve)}</div>
    </kk-details>
  `}function ye(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function X(){if(A.length===0)return a`<p class="vazio">${F?o.app.carregando:o.faq.vazio}</p>`;let e=ie(A,I),t=I.busca.trim()===``,r=e=>E(N,e),i=ae(e,r),s=D(N,A),l=Math.round(s/A.length*100),u=t?A.filter(K):[],d=ye(i);return a`
    <div class="faq">
      <p class="faq__subtitulo">${o.faq.subtitulo}</p>

      <div class="faq__progresso" title=${o.faq.progresso}>
        <kk-progress-bar value=${l}></kk-progress-bar>
        <span class="faq__contagem">${s}/${A.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${o.faq.buscar}
          .value=${I.busca}
          @kk-input=${e=>{I={...I,busca:e.target.value},n()}}
        ></kk-input>
      </div>

      ${e.length===0?a`<p class="vazio">${o.faq.semResultado}</p>`:a`
            <kk-accordion class="faq__categorias">
              ${u.length===0?c:Y(o.faq.favoritos,u,!0,u.every(r),!0)}
              ${i.map((e,t)=>Y(e.rotulo,e.perguntas,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function be(e){return a`
    <div class="faq">
      <p class="faq__categoria-aberta">${v(e.categoria)}</p>

      <article class="faq__bloco">
        <h2 class="faq__secao-titulo">${o.faq.cenario}</h2>
        <div class="prosa">${f(e.cenario)}</div>
      </article>

      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${o.faq.impulso}</h2>
        <div class="prosa">${f(e.impulso)}</div>
      </article>

      <p class="faq__dica">${o.faq.preparoDica}</p>

      <kk-button variant="primary" @click=${()=>t(`faq/${e.id}/lente`)}>
        ${o.faq.comecar}
      </kk-button>
    </div>
  `}function xe(e){let t=b(e);return a`
    <div class="faq__lentes">
      ${t.map(e=>a`
          <button
            class="faq__lente ${R===e.id?`faq__lente--ativa`:``}"
            ?disabled=${z}
            @click=${()=>{R=e.id,V=``,H=``,n()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?c:a`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function Se(e){return pe(e),x(e)?a`
    <div class="faq">
      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${o.faq.impulso}</h2>
        <div class="prosa">${f(e.impulso)}</div>
        <p class="faq__enunciado">${o.faq.enunciado}</p>

        ${xe(e)}

        ${V===``?c:a`<p class="faq__feedback faq__feedback--${H}">${V}</p>`}

        ${z?c:a`
              <kk-button
                variant="primary"
                ?disabled=${R===null}
                @click=${()=>me(e)}
              >${o.faq.conferir}</kk-button>
            `}
      </article>

      ${z?Z(e):c}
    </div>
  `:(B||W(e),a`<div class="faq">${Z(e)}</div>`)}function Ce(e){let t=te(e);return t.length===0?c:a`
    <article class="faq__bloco">
      <h2 class="faq__secao-titulo">${o.faq.exemplos}</h2>
      <ul class="faq__exemplos">
        ${t.map(e=>a`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?c:a`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function Z(e){return a`
    <div class="faq__final">
      ${_e(e)?a`<p class="faq__selo-feito"><kk-icon name="notes"></kk-icon>${o.faq.seloFeito}</p>`:c}

      <article class="faq__bloco faq__bloco--sucesso">
        <h2 class="faq__secao-titulo">${o.faq.aResposta}</h2>
        <div class="prosa">${f(e.resposta)}</div>
        ${e.referencia===``?c:a`<p class="faq__base"><kk-icon name="book"></kk-icon>${e.referencia}</p>`}
        ${e.link_jw===``?c:a`
              <p class="faq__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${o.faq.lerArtigo}</a>
              </p>
            `}
      </article>

      ${Ce(e)}

      <div class="faq__caderno">
        <div class="faq__cabecalho-lista">
          <label for="faq-preparo">${o.faq.paraPreparar}</label>
          <a href="#/caderno">${o.faq.cadernoVer}</a>
        </div>
        ${e.preparo===``?c:a`<p class="faq__preparo-pergunta">${e.preparo}</p>`}
        <textarea
          id="faq-preparo"
          rows="4"
          placeholder=${o.faq.respostaPlaceholder}
          .value=${U}
          @input=${t=>{U=t.target.value,he(e)}}
        ></textarea>
      </div>

      <div class="faq__saidas">
        <kk-button variant="primary" @click=${()=>t(`faq`)}>${o.faq.outras}</kk-button>
        <kk-button @click=${()=>t(`home`)}>${o.faq.inicio}</kk-button>
      </div>
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?fe(t):void 0}function $(e){return e.args[1]===`lente`}var we={titulo(e){return Q(e)?.titulo},voltarPara(e){let t=Q(e);return t===void 0?`home`:$(e)?`faq/${t.id}`:`faq`},acoes(e){let t=Q(e);if(t===void 0)return;let n=K(t);return a`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?o.faq.desfavoritar:o.faq.favoritar}
        @click=${()=>q(t)}
      ></kk-icon-button>
    `},conteudo(e){de();let t=Q(e);return t===void 0?(L=-1,X()):$(e)?Se(t):(L=-1,be(t))}};export{we as telaFaq};