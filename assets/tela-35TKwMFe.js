import{a as e}from"./banco-wLWgzTAl.js";import{$ as t,Q as n,U as r,W as i,at as a,nt as o,q as s,rt as c}from"./index-CrGkgQIm.js";import{alternarFavorito as l,chaveFavorito as u,lerFavoritos as d}from"./favoritos-DAEWA_Gd.js";import{t as ee}from"./unsafe-html-DqNkPOsE.js";import"./src-Q65fww-X.js";import{r as f}from"./catalogo-B2Z121mU.js";var p=`note_faq_favoritos`,m=`message-question`;async function h(){return(await e(`faq`).todos()).sort((e,t)=>_(e.categoria)-_(t.categoria)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var g=Object.keys(f);function _(e){let t=g.indexOf(e);return t===-1?g.length:t}function v(e){return e===``?f.crencas??e:f[e]??e}function y(e){if(e===null)return[];try{let t=JSON.parse(e.pontos===``?`[]`:e.pontos);return Array.isArray(t)?t:[]}catch{return[]}}function b(e){return e.normalize(`NFD`).replace(/[̀-ͯ]/g,``).toLowerCase()}var x={busca:``};function S(e,t){let n=b(t.busca.trim());return n===``?e:e.filter(e=>b(`${e.titulo} ${e.resposta_curta} ${e.referencia}`).includes(n))}function C(e,t){let n=new Map;for(let t of e){let e=n.get(t.categoria);e===void 0?n.set(t.categoria,[t]):e.push(t)}return[...n].map(([e,n])=>({categoria:e,rotulo:v(e),perguntas:n,concluida:n.every(t)}))}var w=`note_faq_progresso`;function T(){return{revisados:{}}}function E(){try{let e=JSON.parse(localStorage.getItem(w)??`null`);return{...T(),...e}}catch{return T()}}function D(e){localStorage.setItem(w,JSON.stringify(e))}function te(e,t){let n={...e,revisados:{...e.revisados,[String(t)]:{visto_em:Date.now()}}};return D(n),n}function O(e,t){return t?.id!==void 0&&e.revisados[String(t.id)]!==void 0}function k(e,t){return t.filter(t=>O(e,t)).length}function A(e){return`faq:${e}`}async function j(){let e=new Map;for(let t of await i()){if(t.origem!==`faq`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function M(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var N=[],P=new Map,F=new Set,I=T(),L=!1,R=!1,z=x,B=-1,V=``;function H(){L||R||(R=!0,(async()=>{try{[N,P]=await Promise.all([h(),j()]),F=d(p),I=E(),L=!0}finally{R=!1,n()}})())}function U(e){return N.find(t=>t.id===e)}function W(e){B!==e.id&&(B=e.id??-1,V=e.id===void 0?``:P.get(e.id)??``)}function G(e){L&&e.id!==void 0&&!O(I,e)&&(I=te(I,e.id),n())}function K(e){return u(`curado`,e.id)}function q(e){return F.has(K(e))}function J(e){F=l(p,F,K(e)),n()}var Y;function X(e){clearTimeout(Y),Y=setTimeout(()=>{(async()=>{if(e.id===void 0)return;let t=V.trim();t===``?(await s(A(e.id)),P.delete(e.id)):(await r({origem:`faq`,referencia:e.referencia,titulo:`${o.faq.titulo} — ${e.titulo}`,conteudo:t,ref_chave:A(e.id)}),P.set(e.id,t)),n()})()},500)}function Z(e){return e.icone===``?m:e.icone}function ne(e){let n=q(e);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${n}>
      <button class="cartao__alvo" @click=${()=>t(`faq/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${Z(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
        ${e.resposta_curta===``?c:a`<small class="faq__resumo">${e.resposta_curta}</small>`}
      </button>

      <div class="faq__marcas">
        ${O(I,e)?a`<kk-icon
                class="faq__marca faq__marca--revisada"
                name="check"
                title=${o.faq.revisada}
              ></kk-icon>`:c}
        ${M(P,e)?a`<kk-icon
                class="faq__marca"
                name="notes"
                title=${o.faq.comAnotacao}
              ></kk-icon>`:c}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${n?`filled`:`outline`}
          label=${n?o.faq.desfavoritar:o.faq.favoritar}
          @click=${()=>J(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Q(e,t,n,r,i=!1){return a`
    <kk-details class="faq__secao" name="faq-categorias" ?open=${n}>
      <span
        slot="summary"
        class="faq__categoria ${i?`faq__categoria--favoritos`:``} ${r?`faq__categoria--revisada`:``}"
      >
        ${e}
        ${r?a`<kk-icon name="check" title=${o.faq.categoriaRevisada}></kk-icon>`:c}
      </span>
      <div class="cartoes cartoes--duas">${t.map(ne)}</div>
    </kk-details>
  `}function re(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function ie(){if(N.length===0)return a`<p class="vazio">${R?o.app.carregando:o.faq.vazio}</p>`;let e=S(N,z),t=z.busca.trim()===``,r=e=>O(I,e),i=C(e,r),s=k(I,N),l=Math.round(s/N.length*100),u=t?N.filter(q):[],d=re(i);return a`
    <div class="faq">
      <p class="faq__subtitulo">${o.faq.subtitulo}</p>

      <div class="faq__progresso" title=${o.faq.progresso}>
        <kk-progress-bar value=${l}></kk-progress-bar>
        <span class="faq__contagem">${s}/${N.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${o.faq.buscar}
          .value=${z.busca}
          @kk-input=${e=>{z={...z,busca:e.target.value},n()}}
        ></kk-input>
      </div>

      ${e.length===0?a`<p class="vazio">${o.faq.semResultado}</p>`:a`
            <kk-accordion class="faq__categorias">
              ${u.length===0?c:Q(o.faq.favoritos,u,!0,u.every(r),!0)}
              ${i.map((e,t)=>Q(e.rotulo,e.perguntas,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function ae(e){let t=y(e);return t.length===0?c:a`
    <article class="faq__bloco">
      <h2 class="faq__secao-titulo">${o.faq.paraExplicar}</h2>
      <ul class="faq__pontos">
        ${t.map(e=>a`
            <li>
              <span>${e.texto}</span>
              ${e.referencia===void 0||e.referencia===``?c:a`<small>${e.referencia}</small>`}
            </li>
          `)}
      </ul>
    </article>
  `}function oe(e){return W(e),a`
    <div class="faq">
      <p class="faq__categoria-aberta">${v(e.categoria)}</p>

      <h1 class="faq__pergunta">${e.titulo}</h1>

      ${e.resposta_curta===``?c:a`<p class="faq__resposta-curta">${e.resposta_curta}</p>`}

      ${e.resposta===``?c:a`
            <article class="faq__bloco">
              <h2 class="faq__secao-titulo">${o.faq.aResposta}</h2>
              <div class="prosa">${ee(e.resposta)}</div>
            </article>
          `}

      ${ae(e)}

      ${e.referencia===``?c:a`
            <p class="faq__base">
              <kk-icon name="book"></kk-icon>
              ${e.referencia}
            </p>
          `}

      ${e.link_jw===``?c:a`
            <p class="faq__fonte">
              <a href=${e.link_jw} target="_blank" rel="noopener">${o.faq.lerArtigo}</a>
            </p>
          `}

      <div class="faq__caderno">
        <div class="faq__cabecalho-lista">
          <label for="faq-preparo">${o.faq.paraPreparar}</label>
          <a href="#/caderno">${o.faq.cadernoVer}</a>
        </div>
        <textarea
          id="faq-preparo"
          rows="4"
          placeholder=${o.faq.respostaPlaceholder}
          .value=${V}
          @input=${t=>{V=t.target.value,X(e)}}
        ></textarea>
        <label class="faq__revisar">
          <kk-checkbox
            ?checked=${O(I,e)}
            ?disabled=${O(I,e)}
            @kk-change=${()=>G(e)}
          ></kk-checkbox>
          ${o.faq.marcarRevisada}
        </label>
      </div>

      <div class="faq__saidas">
        <kk-button variant="primary" @click=${()=>t(`faq`)}>${o.faq.outras}</kk-button>
        <kk-button @click=${()=>t(`home`)}>${o.faq.inicio}</kk-button>
      </div>
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?U(t):void 0}var se={titulo(e){return $(e)?.titulo},voltarPara(e){return $(e)===void 0?`home`:`faq`},acoes(e){let t=$(e);if(t===void 0)return;let n=q(t);return a`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?o.faq.desfavoritar:o.faq.favoritar}
        @click=${()=>J(t)}
      ></kk-icon-button>
    `},conteudo(e){H();let t=$(e);return t===void 0?(B=-1,ie()):oe(t)}};export{se as telaFaq};