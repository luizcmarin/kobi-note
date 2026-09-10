import{a as e,s as t}from"./banco-DT6T_b91.js";import{t as n}from"./catalogo-B2Z121mU.js";import{E as r,T as i,ct as a,et as o,it as s,ot as c,q as l,tt as u}from"./index-Dz7Qe9lu.js";import{alternarFavorito as d,chaveFavorito as f,lerFavoritos as ee}from"./favoritos-DAEWA_Gd.js";import{t as p}from"./unsafe-html-uBKeHs8t.js";import{t as te}from"./rascunho-fkVptIER.js";var m=`note_principios_favoritos`,h=`scale`;async function g(){return(await t(`principios`).todos()).sort((e,t)=>v(e.area)-v(t.area)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var _=Object.keys(n);function v(e){let t=_.indexOf(e);return t===-1?_.length:t}function y(e){return e===``?n.coracao??e:n[e]??e}function ne(e){if(e===null)return[];try{let t=JSON.parse(e.reflexoes===``?`[]`:e.reflexoes);return Array.isArray(t)?t:[]}catch{return[]}}var b={busca:``};function x(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function S(e,t){let n=new Map;for(let t of e){let e=n.get(t.area);e===void 0?n.set(t.area,[t]):e.push(t)}return[...n].map(([e,n])=>({area:e,rotulo:y(e),principios:n,concluida:n.every(t)}))}var C=`note_principios_progresso`;function w(){return{lidos:{}}}function T(){try{let e=JSON.parse(localStorage.getItem(C)??`null`);return{...w(),...e}}catch{return w()}}function E(e){localStorage.setItem(C,JSON.stringify(e))}function D(e,t){let n=e.lidos[String(t)],r={...e,lidos:{...e.lidos,[String(t)]:{aberturas:(n?.aberturas??0)+1,lidoEm:Date.now()}}};return E(r),r}function O(e,t){return t?.id!==void 0&&e.lidos[String(t.id)]!==void 0}function k(e,t){return t.filter(t=>O(e,t)).length}function A(e){return`principios:${e}`}async function j(){let e=new Map;for(let t of await l()){if(t.origem!==`principios`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function re(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var M=[],N=new Map,P=new Set,F=w(),I=!1,L=!1,R=null,z=b,B=null,V=``;function H(t){V=t,e(`not_principios`,t).then(e=>{V===t&&(B=e===null?null:new Set(e),o())})}var U=-1,W=te({origem:`principios`,idDe:e=>e.id,chaveDe:e=>A(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${s.principios.titulo} — ${e.titulo}`,lembrete:()=>N});function G(){I||L||R!==null||(L=!0,(async()=>{try{[M,N]=await Promise.all([g(),j()]),P=ee(m),F=T(),I=!0}catch(e){console.error(`principios: a carga falhou.`,e),R=r(e)}finally{L=!1,o()}})())}function K(){R=null,G(),o()}function q(e){return M.find(t=>t.id===e)}function J(e){U!==e.id&&(U=e.id??-1,W.abrir(e.id===void 0?``:N.get(e.id)??``),I&&e.id!==void 0&&(F=D(F,e.id)))}function Y(e){return f(`curado`,e.id)}function X(e){return P.has(Y(e))}function Z(e){P=d(m,P,Y(e)),o()}function ie(e){return e.icone===``?h:e.icone}function ae(e){let t=X(e);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>u(`principios/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${ie(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
        ${e.referencia===``?c:a`<small class="principios__versos">${e.referencia}</small>`}
      </button>

      <div class="principios__marcas">
        ${O(F,e)?a`<kk-icon
                class="principios__marca principios__marca--lido"
                name="check"
                title=${s.principios.lido}
              ></kk-icon>`:c}
        ${re(N,e)?a`<kk-icon
                class="principios__marca"
                name="notes"
                title=${s.principios.comAnotacao}
              ></kk-icon>`:c}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?s.principios.desfavoritar:s.principios.favoritar}
          @click=${()=>Z(e)}
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
        ${r?a`<kk-icon name="check" title=${s.principios.areaLida}></kk-icon>`:c}
      </span>
      <div class="cartoes cartoes--duas">${t.map(ae)}</div>
    </kk-details>
  `}function oe(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function se(){if(M.length===0)return a`<p class="vazio">${L?s.app.carregando:s.principios.vazio}</p>`;let e=x(M,B),t=z.busca.trim()===``,n=e=>O(F,e),r=S(e,n),i=k(F,M),l=Math.round(i/M.length*100),u=t?M.filter(X):[],d=oe(r);return a`
    <div class="principios">
      <p class="principios__subtitulo">${s.principios.subtitulo}</p>

      <div class="principios__progresso" title=${s.principios.progresso}>
        <kk-progress-bar value=${l}></kk-progress-bar>
        <span class="principios__contagem">${i}/${M.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${s.principios.buscar}
          .value=${z.busca}
          @kk-input=${e=>{z={...z,busca:e.target.value},H(z.busca),o()}}
        ></kk-input>
      </div>

      ${e.length===0?a`<p class="vazio">${s.principios.semResultado}</p>`:a`
            <kk-accordion class="principios__areas">
              ${u.length===0?c:Q(s.principios.favoritos,u,!0,u.every(n),!0)}
              ${r.map((e,t)=>Q(e.rotulo,e.principios,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function ce(e){let t=ne(e);return t.length===0?c:a`
    <ul class="principios__perguntas">
      ${t.map(e=>a`
          <li>
            <span>${e.pergunta}</span>
            ${e.nota===void 0||e.nota===``?c:a`<small>${e.nota}</small>`}
          </li>
        `)}
    </ul>
  `}function le(e){return J(e),a`
    <div class="principios">
      <p class="principios__area-aberta">${y(e.area)}</p>

      <blockquote class="principios__frase">${e.principio}</blockquote>

      ${e.referencia===``?c:a`
            <p class="principios__base">
              <kk-icon name="book"></kk-icon>
              ${e.referencia}
            </p>
          `}

      ${e.explicacao===``?c:a`
            <article class="principios__bloco">
              <h2 class="principios__secao">${s.principios.porQue}</h2>
              <div class="prosa">${p(e.explicacao)}</div>
            </article>
          `}

      ${e.pratica===``?c:a`
            <article class="principios__bloco principios__bloco--pratica">
              <h2 class="principios__secao">${s.principios.naPratica}</h2>
              <div class="prosa">${p(e.pratica)}</div>
            </article>
          `}

      ${e.link_jw===``?c:a`
            <p class="principios__fonte">
              <a href=${e.link_jw} target="_blank" rel="noopener">
                ${s.principios.lerFonte}
              </a>
            </p>
          `}

      ${W.campo({item:e,id:`principios-reflexao`,rotulo:s.principios.paraRefletir,placeholder:s.principios.reflexaoPlaceholder,apoio:ce(e)})}

      <div class="principios__saidas">
        <kk-button variant="primary" @click=${()=>u(`principios`)}>
          ${s.principios.outros}
        </kk-button>
        <kk-button @click=${()=>u(`home`)}>${s.principios.inicio}</kk-button>
      </div>
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?q(t):void 0}var ue={titulo(e){return $(e)?.titulo},voltarPara(e){return $(e)===void 0?`home`:`principios`},acoes(e){let t=$(e);if(t===void 0)return;let n=X(t);return a`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?s.principios.desfavoritar:s.principios.favoritar}
        @click=${()=>Z(t)}
      ></kk-icon-button>
    `},conteudo(e){if(G(),R!==null)return i(R,K);let t=$(e);return t===void 0?(U=-1,se()):le(t)}};export{ue as telaPrincipios};