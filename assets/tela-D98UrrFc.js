import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r}from"./banco-u8JVNTlT.js";import{o as i,s as a,u as o}from"./dados-DZJ-rFad.js";import{D as s,E as c}from"./index-QyzyfOkc.js";import{alternarFavorito as l,chaveFavorito as u,lerFavoritos as d}from"./favoritos-DAEWA_Gd.js";import{t as f}from"./unsafe-html-BBiWdB6b.js";import"./src-aIzvNydw.js";var p={familia:`Família e casamento`,amizades:`Amizades e convivência`,trabalho:`Trabalho e estudo`,dinheiro:`Dinheiro e bens`,fala:`O que sai da boca`,conflitos:`Conflitos e mágoas`,lazer:`Lazer e diversão`,coracao:`O coração e os pensamentos`},m=`note_principios_favoritos`,ee=`scale`;async function h(){return(await r(`principios`).todos()).sort((e,t)=>_(e.area)-_(t.area)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var g=Object.keys(p);function _(e){let t=g.indexOf(e);return t===-1?g.length:t}function v(e){return e===``?p.coracao??e:p[e]??e}function y(e){if(e===null)return[];try{let t=JSON.parse(e.reflexoes===``?`[]`:e.reflexoes);return Array.isArray(t)?t:[]}catch{return[]}}function b(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase()}var x={busca:``};function S(e,t){let n=b(t.busca.trim());return n===``?e:e.filter(e=>b(`${e.titulo} ${e.principio} ${e.referencia}`).includes(n))}function te(e,t){let n=new Map;for(let t of e){let e=n.get(t.area);e===void 0?n.set(t.area,[t]):e.push(t)}return[...n].map(([e,n])=>({area:e,rotulo:v(e),principios:n,concluida:n.every(t)}))}var C=`note_principios_progresso`;function w(){return{lidos:{}}}function T(){try{let e=JSON.parse(localStorage.getItem(C)??`null`);return{...w(),...e}}catch{return w()}}function E(e){localStorage.setItem(C,JSON.stringify(e))}function D(e,t){let n=e.lidos[String(t)],r={...e,lidos:{...e.lidos,[String(t)]:{aberturas:(n?.aberturas??0)+1,lidoEm:Date.now()}}};return E(r),r}function O(e,t){return t?.id!==void 0&&e.lidos[String(t.id)]!==void 0}function k(e,t){return t.filter(t=>O(e,t)).length}function A(e){return`principios:${e}`}async function j(){let e=new Map;for(let t of await a()){if(t.origem!==`principios`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function M(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var N=[],P=new Map,F=new Set,I=w(),L=!1,R=!1,z=x,B=-1,V=``;function H(){L||R||(R=!0,(async()=>{try{[N,P]=await Promise.all([h(),j()]),F=d(m),I=T(),L=!0}finally{R=!1,c()}})())}function U(e){return N.find(t=>t.id===e)}function W(e){B!==e.id&&(B=e.id??-1,V=e.id===void 0?``:P.get(e.id)??``,L&&e.id!==void 0&&(I=D(I,e.id)))}function G(e){return u(`curado`,e.id)}function K(e){return F.has(G(e))}function q(e){F=l(m,F,G(e)),c()}var J;function Y(e){clearTimeout(J),J=setTimeout(()=>{(async()=>{if(e.id===void 0)return;let t=V.trim();t===``?(await o(A(e.id)),P.delete(e.id)):(await i({origem:`principios`,referencia:e.referencia,titulo:`${n.principios.titulo} — ${e.titulo}`,conteudo:t,ref_chave:A(e.id)}),P.set(e.id,t)),c()})()},500)}function X(e){return e.icone===``?ee:e.icone}function Z(r){let i=K(r);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${i}>
      <button class="cartao__alvo" @click=${()=>s(`principios/${r.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${X(r)}></kk-icon>
          <span class="cartao__titulo">${r.titulo}</span>
        </span>
        ${r.referencia===``?t:e`<small class="principios__versos">${r.referencia}</small>`}
      </button>

      <div class="principios__marcas">
        ${O(I,r)?e`<kk-icon
                class="principios__marca principios__marca--lido"
                name="check"
                title=${n.principios.lido}
              ></kk-icon>`:t}
        ${M(P,r)?e`<kk-icon
                class="principios__marca"
                name="notes"
                title=${n.principios.comAnotacao}
              ></kk-icon>`:t}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${i?`filled`:`outline`}
          label=${i?n.principios.desfavoritar:n.principios.favoritar}
          @click=${()=>q(r)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Q(r,i,a,o,s=!1){return e`
    <kk-details class="principios__secao" name="principios-areas" ?open=${a}>
      <span
        slot="summary"
        class="principios__area ${s?`principios__area--favoritos`:``} ${o?`principios__area--lida`:``}"
      >
        ${r}
        ${o?e`<kk-icon name="check" title=${n.principios.areaLida}></kk-icon>`:t}
      </span>
      <div class="cartoes cartoes--duas">${i.map(Z)}</div>
    </kk-details>
  `}function ne(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function re(){if(N.length===0)return e`<p class="vazio">${R?n.app.carregando:n.principios.vazio}</p>`;let r=S(N,z),i=z.busca.trim()===``,a=e=>O(I,e),o=te(r,a),s=k(I,N),l=Math.round(s/N.length*100),u=i?N.filter(K):[],d=ne(o);return e`
    <div class="principios">
      <p class="principios__subtitulo">${n.principios.subtitulo}</p>

      <div class="principios__progresso" title=${n.principios.progresso}>
        <kk-progress-bar value=${l}></kk-progress-bar>
        <span class="principios__contagem">${s}/${N.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${n.principios.buscar}
          .value=${z.busca}
          @kk-input=${e=>{z={...z,busca:e.target.value},c()}}
        ></kk-input>
      </div>

      ${r.length===0?e`<p class="vazio">${n.principios.semResultado}</p>`:e`
            <kk-accordion class="principios__areas">
              ${u.length===0?t:Q(n.principios.favoritos,u,!0,u.every(a),!0)}
              ${o.map((e,t)=>Q(e.rotulo,e.principios,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function ie(n){let r=y(n);return r.length===0?t:e`
    <ul class="principios__perguntas">
      ${r.map(n=>e`
          <li>
            <span>${n.pergunta}</span>
            ${n.nota===void 0||n.nota===``?t:e`<small>${n.nota}</small>`}
          </li>
        `)}
    </ul>
  `}function ae(r){return W(r),e`
    <div class="principios">
      <p class="principios__area-aberta">${v(r.area)}</p>

      <blockquote class="principios__frase">${r.principio}</blockquote>

      ${r.referencia===``?t:e`
            <p class="principios__base">
              <kk-icon name="book"></kk-icon>
              ${r.referencia}
            </p>
          `}

      ${r.explicacao===``?t:e`
            <article class="principios__bloco">
              <h2 class="principios__secao">${n.principios.porQue}</h2>
              <div class="prosa">${f(r.explicacao)}</div>
            </article>
          `}

      ${r.pratica===``?t:e`
            <article class="principios__bloco principios__bloco--pratica">
              <h2 class="principios__secao">${n.principios.naPratica}</h2>
              <div class="prosa">${f(r.pratica)}</div>
            </article>
          `}

      ${r.link_jw===``?t:e`
            <p class="principios__fonte">
              <a href=${r.link_jw} target="_blank" rel="noopener">
                ${n.principios.lerFonte}
              </a>
            </p>
          `}

      <div class="principios__caderno">
        <div class="principios__cabecalho-lista">
          <label for="principios-reflexao">${n.principios.paraRefletir}</label>
          <a href="#/caderno">${n.principios.cadernoVer}</a>
        </div>
        ${ie(r)}
        <textarea
          id="principios-reflexao"
          rows="4"
          placeholder=${n.principios.reflexaoPlaceholder}
          .value=${V}
          @input=${e=>{V=e.target.value,Y(r)}}
        ></textarea>
      </div>

      <div class="principios__saidas">
        <kk-button variant="primary" @click=${()=>s(`principios`)}>
          ${n.principios.outros}
        </kk-button>
        <kk-button @click=${()=>s(`home`)}>${n.principios.inicio}</kk-button>
      </div>
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?U(t):void 0}var oe={titulo(e){return $(e)?.titulo},voltarPara(e){return $(e)===void 0?`home`:`principios`},acoes(t){let r=$(t);if(r===void 0)return;let i=K(r);return e`
      <kk-icon-button
        name="star"
        variant=${i?`filled`:`outline`}
        label=${i?n.principios.desfavoritar:n.principios.favoritar}
        @click=${()=>q(r)}
      ></kk-icon-button>
    `},conteudo(e){H();let t=$(e);return t===void 0?(B=-1,re()):ae(t)}};export{oe as telaPrincipios};