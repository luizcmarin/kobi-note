import{a as e,s as t}from"./banco-C-dosPDu.js";import{t as n}from"./catalogo-B2Z121mU.js";import{V as r,b as i,ct as a,dt as o,gt as s,mt as c,st as l,y as u}from"./index-BrLqW3t8.js";import{alternarFavorito as d,chaveFavorito as f,lerFavoritos as p}from"./favoritos-DAEWA_Gd.js";import{t as m}from"./unsafe-html-C5YYoSfR.js";import{t as ee}from"./rascunho-RnbGRSjY.js";var h=`note_principios_favoritos`,g=`scale`;async function _(){return(await t(`principios`).todos()).sort((e,t)=>y(e.area)-y(t.area)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var v=Object.keys(n);function y(e){let t=v.indexOf(e);return t===-1?v.length:t}function b(e){return e===``?n.coracao??e:n[e]??e}function x(e){if(e===null)return[];try{let t=JSON.parse(e.reflexoes===``?`[]`:e.reflexoes);return Array.isArray(t)?t:[]}catch{return[]}}var S={busca:``};function te(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function ne(e,t){let n=new Map;for(let t of e){let e=n.get(t.area);e===void 0?n.set(t.area,[t]):e.push(t)}return[...n].map(([e,n])=>({area:e,rotulo:b(e),principios:n,concluida:n.every(t)}))}var C=`note_principios_progresso`;function w(){return{lidos:{}}}function re(){try{let e=JSON.parse(localStorage.getItem(C)??`null`);return{...w(),...e}}catch{return w()}}function ie(e){localStorage.setItem(C,JSON.stringify(e))}function T(e,t){let n=e.lidos[String(t)],r={...e,lidos:{...e.lidos,[String(t)]:{aberturas:(n?.aberturas??0)+1,lidoEm:Date.now()}}};return ie(r),r}function E(e,t){return t?.id!==void 0&&e.lidos[String(t.id)]!==void 0}function D(e,t){return t.filter(t=>E(e,t)).length}function O(e){return`principios:${e}`}async function k(){let e=new Map;for(let t of await r()){if(t.origem!==`principios`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function A(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var j=[],M=new Map,N=new Set,P=w(),F=!1,I=!1,L=null,R=S,z=null,B=``;function V(t){B=t,e(`not_principios`,t).then(e=>{B===t&&(z=e===null?null:new Set(e),l())})}var H=-1,U=ee({origem:`principios`,idDe:e=>e.id,chaveDe:e=>O(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${o.principios.titulo} — ${e.titulo}`,lembrete:()=>M});function W(){F||I||L!==null||(I=!0,(async()=>{try{[j,M]=await Promise.all([_(),k()]),N=p(h),P=re(),F=!0}catch(e){console.error(`principios: a carga falhou.`,e),L=i(e)}finally{I=!1,l()}})())}function G(){L=null,W(),l()}function K(e){return j.find(t=>t.id===e)}function q(e){H!==e.id&&(H=e.id??-1,U.abrir(e.id===void 0?``:M.get(e.id)??``),F&&e.id!==void 0&&(P=T(P,e.id)))}function J(e){return f(`curado`,e.id)}function Y(e){return N.has(J(e))}function X(e){N=d(h,N,J(e)),l()}function ae(e){return e.icone===``?g:e.icone}function oe(e){let t=Y(e);return s`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>a(`principios/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${ae(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
        ${e.referencia===``?c:s`<small class="principios__versos">${e.referencia}</small>`}
      </button>

      <div class="principios__marcas">
        ${E(P,e)?s`<kk-icon
                class="principios__marca principios__marca--lido"
                name="check"
                title=${o.principios.lido}
              ></kk-icon>`:c}
        ${A(M,e)?s`<kk-icon
                class="principios__marca"
                name="notes"
                title=${o.principios.comAnotacao}
              ></kk-icon>`:c}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?o.principios.desfavoritar:o.principios.favoritar}
          @click=${()=>X(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Z(e,t,n,r,i=!1){return s`
    <kk-details class="principios__secao" name="principios-areas" ?open=${n}>
      <span
        slot="summary"
        class="principios__area ${i?`principios__area--favoritos`:``} ${r?`principios__area--lida`:``}"
      >
        ${e}
        ${r?s`<kk-icon name="check" title=${o.principios.areaLida}></kk-icon>`:c}
      </span>
      <div class="cartoes cartoes--duas">${t.map(oe)}</div>
    </kk-details>
  `}function se(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function Q(){if(j.length===0)return s`<p class="vazio">${I?o.app.carregando:o.principios.vazio}</p>`;let e=te(j,z),t=R.busca.trim()===``,n=e=>E(P,e),r=ne(e,n),i=D(P,j),a=Math.round(i/j.length*100),u=t?j.filter(Y):[],d=se(r);return s`
    <div class="principios">
      <p class="principios__subtitulo">${o.principios.subtitulo}</p>

      <div class="principios__progresso" title=${o.principios.progresso}>
        <kk-progress-bar value=${a}></kk-progress-bar>
        <span class="principios__contagem">${i}/${j.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${o.principios.buscar}
          .value=${R.busca}
          @kk-input=${e=>{R={...R,busca:e.target.value},V(R.busca),l()}}
        ></kk-input>
      </div>

      ${e.length===0?s`<p class="vazio">${o.principios.semResultado}</p>`:s`
            <kk-accordion class="principios__areas">
              ${u.length===0?c:Z(o.principios.favoritos,u,!0,u.every(n),!0)}
              ${r.map((e,t)=>Z(e.rotulo,e.principios,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function ce(e){let t=x(e);return t.length===0?c:s`
    <ul class="principios__perguntas">
      ${t.map(e=>s`
          <li>
            <span>${e.pergunta}</span>
            ${e.nota===void 0||e.nota===``?c:s`<small>${e.nota}</small>`}
          </li>
        `)}
    </ul>
  `}function le(e){return q(e),s`
    <div class="principios">
      <p class="principios__area-aberta">${b(e.area)}</p>

      <blockquote class="principios__frase">${e.principio}</blockquote>

      ${e.referencia===``?c:s`
            <p class="principios__base">
              <kk-icon name="book"></kk-icon>
              ${e.referencia}
            </p>
          `}

      ${e.explicacao===``?c:s`
            <article class="principios__bloco">
              <h2 class="principios__secao">${o.principios.porQue}</h2>
              <div class="prosa">${m(e.explicacao)}</div>
            </article>
          `}

      ${e.pratica===``?c:s`
            <article class="principios__bloco principios__bloco--pratica">
              <h2 class="principios__secao">${o.principios.naPratica}</h2>
              <div class="prosa">${m(e.pratica)}</div>
            </article>
          `}

      ${e.link_jw===``?c:s`
            <p class="principios__fonte">
              <a href=${e.link_jw} target="_blank" rel="noopener">
                ${o.principios.lerFonte}
              </a>
            </p>
          `}

      ${U.campo({item:e,id:`principios-reflexao`,rotulo:o.principios.paraRefletir,placeholder:o.principios.reflexaoPlaceholder,apoio:ce(e)})}

      <div class="principios__saidas">
        <kk-button variant="primary" @click=${()=>a(`principios`)}>
          ${o.principios.outros}
        </kk-button>
        <kk-button @click=${()=>a(`home`)}>${o.principios.inicio}</kk-button>
      </div>
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?K(t):void 0}var ue={titulo(e){return $(e)?.titulo},voltarPara(e){return $(e)===void 0?`home`:`principios`},acoes(e){let t=$(e);if(t===void 0)return;let n=Y(t);return s`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?o.principios.desfavoritar:o.principios.favoritar}
        @click=${()=>X(t)}
      ></kk-icon-button>
    `},conteudo(e){if(W(),L!==null)return u(L,G);let t=$(e);return t===void 0?(H=-1,Q()):le(t)}};export{ue as telaPrincipios};