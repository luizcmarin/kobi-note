import{a as e}from"./banco-wLWgzTAl.js";import{$ as t,Q as n,U as r,W as i,at as a,nt as o,q as s,rt as c}from"./index-CrGkgQIm.js";import{alternarFavorito as l,chaveFavorito as u,lerFavoritos as d}from"./favoritos-DAEWA_Gd.js";import{t as f}from"./unsafe-html-DqNkPOsE.js";import"./src-Q65fww-X.js";import{t as p}from"./catalogo-B2Z121mU.js";var m=`note_principios_favoritos`,ee=`scale`;async function h(){return(await e(`principios`).todos()).sort((e,t)=>_(e.area)-_(t.area)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var g=Object.keys(p);function _(e){let t=g.indexOf(e);return t===-1?g.length:t}function v(e){return e===``?p.coracao??e:p[e]??e}function y(e){if(e===null)return[];try{let t=JSON.parse(e.reflexoes===``?`[]`:e.reflexoes);return Array.isArray(t)?t:[]}catch{return[]}}function b(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase()}var x={busca:``};function S(e,t){let n=b(t.busca.trim());return n===``?e:e.filter(e=>b(`${e.titulo} ${e.principio} ${e.referencia}`).includes(n))}function te(e,t){let n=new Map;for(let t of e){let e=n.get(t.area);e===void 0?n.set(t.area,[t]):e.push(t)}return[...n].map(([e,n])=>({area:e,rotulo:v(e),principios:n,concluida:n.every(t)}))}var C=`note_principios_progresso`;function w(){return{lidos:{}}}function T(){try{let e=JSON.parse(localStorage.getItem(C)??`null`);return{...w(),...e}}catch{return w()}}function E(e){localStorage.setItem(C,JSON.stringify(e))}function D(e,t){let n=e.lidos[String(t)],r={...e,lidos:{...e.lidos,[String(t)]:{aberturas:(n?.aberturas??0)+1,lidoEm:Date.now()}}};return E(r),r}function O(e,t){return t?.id!==void 0&&e.lidos[String(t.id)]!==void 0}function k(e,t){return t.filter(t=>O(e,t)).length}function A(e){return`principios:${e}`}async function j(){let e=new Map;for(let t of await i()){if(t.origem!==`principios`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function M(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var N=[],P=new Map,F=new Set,I=w(),L=!1,R=!1,z=x,B=-1,V=``;function H(){L||R||(R=!0,(async()=>{try{[N,P]=await Promise.all([h(),j()]),F=d(m),I=T(),L=!0}finally{R=!1,n()}})())}function U(e){return N.find(t=>t.id===e)}function W(e){B!==e.id&&(B=e.id??-1,V=e.id===void 0?``:P.get(e.id)??``,L&&e.id!==void 0&&(I=D(I,e.id)))}function G(e){return u(`curado`,e.id)}function K(e){return F.has(G(e))}function q(e){F=l(m,F,G(e)),n()}var J;function Y(e){clearTimeout(J),J=setTimeout(()=>{(async()=>{if(e.id===void 0)return;let t=V.trim();t===``?(await s(A(e.id)),P.delete(e.id)):(await r({origem:`principios`,referencia:e.referencia,titulo:`${o.principios.titulo} — ${e.titulo}`,conteudo:t,ref_chave:A(e.id)}),P.set(e.id,t)),n()})()},500)}function X(e){return e.icone===``?ee:e.icone}function Z(e){let n=K(e);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${n}>
      <button class="cartao__alvo" @click=${()=>t(`principios/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${X(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
        ${e.referencia===``?c:a`<small class="principios__versos">${e.referencia}</small>`}
      </button>

      <div class="principios__marcas">
        ${O(I,e)?a`<kk-icon
                class="principios__marca principios__marca--lido"
                name="check"
                title=${o.principios.lido}
              ></kk-icon>`:c}
        ${M(P,e)?a`<kk-icon
                class="principios__marca"
                name="notes"
                title=${o.principios.comAnotacao}
              ></kk-icon>`:c}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${n?`filled`:`outline`}
          label=${n?o.principios.desfavoritar:o.principios.favoritar}
          @click=${()=>q(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Q(e,t,n,r,i=!1){return a`
    <kk-details class="principios__secao" name="principios-areas" ?open=${n}>
      <span
        slot="summary"
        class="principios__area ${i?`principios__area--favoritos`:``} ${r?`principios__area--lida`:``}"
      >
        ${e}
        ${r?a`<kk-icon name="check" title=${o.principios.areaLida}></kk-icon>`:c}
      </span>
      <div class="cartoes cartoes--duas">${t.map(Z)}</div>
    </kk-details>
  `}function ne(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function re(){if(N.length===0)return a`<p class="vazio">${R?o.app.carregando:o.principios.vazio}</p>`;let e=S(N,z),t=z.busca.trim()===``,r=e=>O(I,e),i=te(e,r),s=k(I,N),l=Math.round(s/N.length*100),u=t?N.filter(K):[],d=ne(i);return a`
    <div class="principios">
      <p class="principios__subtitulo">${o.principios.subtitulo}</p>

      <div class="principios__progresso" title=${o.principios.progresso}>
        <kk-progress-bar value=${l}></kk-progress-bar>
        <span class="principios__contagem">${s}/${N.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${o.principios.buscar}
          .value=${z.busca}
          @kk-input=${e=>{z={...z,busca:e.target.value},n()}}
        ></kk-input>
      </div>

      ${e.length===0?a`<p class="vazio">${o.principios.semResultado}</p>`:a`
            <kk-accordion class="principios__areas">
              ${u.length===0?c:Q(o.principios.favoritos,u,!0,u.every(r),!0)}
              ${i.map((e,t)=>Q(e.rotulo,e.principios,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function ie(e){let t=y(e);return t.length===0?c:a`
    <ul class="principios__perguntas">
      ${t.map(e=>a`
          <li>
            <span>${e.pergunta}</span>
            ${e.nota===void 0||e.nota===``?c:a`<small>${e.nota}</small>`}
          </li>
        `)}
    </ul>
  `}function ae(e){return W(e),a`
    <div class="principios">
      <p class="principios__area-aberta">${v(e.area)}</p>

      <blockquote class="principios__frase">${e.principio}</blockquote>

      ${e.referencia===``?c:a`
            <p class="principios__base">
              <kk-icon name="book"></kk-icon>
              ${e.referencia}
            </p>
          `}

      ${e.explicacao===``?c:a`
            <article class="principios__bloco">
              <h2 class="principios__secao">${o.principios.porQue}</h2>
              <div class="prosa">${f(e.explicacao)}</div>
            </article>
          `}

      ${e.pratica===``?c:a`
            <article class="principios__bloco principios__bloco--pratica">
              <h2 class="principios__secao">${o.principios.naPratica}</h2>
              <div class="prosa">${f(e.pratica)}</div>
            </article>
          `}

      ${e.link_jw===``?c:a`
            <p class="principios__fonte">
              <a href=${e.link_jw} target="_blank" rel="noopener">
                ${o.principios.lerFonte}
              </a>
            </p>
          `}

      <div class="principios__caderno">
        <div class="principios__cabecalho-lista">
          <label for="principios-reflexao">${o.principios.paraRefletir}</label>
          <a href="#/caderno">${o.principios.cadernoVer}</a>
        </div>
        ${ie(e)}
        <textarea
          id="principios-reflexao"
          rows="4"
          placeholder=${o.principios.reflexaoPlaceholder}
          .value=${V}
          @input=${t=>{V=t.target.value,Y(e)}}
        ></textarea>
      </div>

      <div class="principios__saidas">
        <kk-button variant="primary" @click=${()=>t(`principios`)}>
          ${o.principios.outros}
        </kk-button>
        <kk-button @click=${()=>t(`home`)}>${o.principios.inicio}</kk-button>
      </div>
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?U(t):void 0}var oe={titulo(e){return $(e)?.titulo},voltarPara(e){return $(e)===void 0?`home`:`principios`},acoes(e){let t=$(e);if(t===void 0)return;let n=K(t);return a`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?o.principios.desfavoritar:o.principios.favoritar}
        @click=${()=>q(t)}
      ></kk-icon-button>
    `},conteudo(e){H();let t=$(e);return t===void 0?(B=-1,re()):ae(t)}};export{oe as telaPrincipios};