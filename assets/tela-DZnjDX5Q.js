import{a as e,s as t}from"./banco-WSl22mr6.js";import{t as n}from"./catalogo-B2Z121mU.js";import{B as r,at as i,lt as a,nt as o,st as s,tt as c,v as l,y as u}from"./index-D0n52eAb.js";import{alternarFavorito as d,chaveFavorito as f,lerFavoritos as p}from"./favoritos-DAEWA_Gd.js";import{t as m}from"./unsafe-html-C_000-wi.js";import{t as ee}from"./rascunho-nRtUC73T.js";var h=`note_principios_favoritos`,g=`scale`;async function _(){return(await t(`principios`).todos()).sort((e,t)=>y(e.area)-y(t.area)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var v=Object.keys(n);function y(e){let t=v.indexOf(e);return t===-1?v.length:t}function b(e){return e===``?n.coracao??e:n[e]??e}function te(e){if(e===null)return[];try{let t=JSON.parse(e.reflexoes===``?`[]`:e.reflexoes);return Array.isArray(t)?t:[]}catch{return[]}}var ne={busca:``};function re(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function x(e,t){let n=new Map;for(let t of e){let e=n.get(t.area);e===void 0?n.set(t.area,[t]):e.push(t)}return[...n].map(([e,n])=>({area:e,rotulo:b(e),principios:n,concluida:n.every(t)}))}var S=`note_principios_progresso`;function C(){return{lidos:{}}}function w(){try{let e=JSON.parse(localStorage.getItem(S)??`null`);return{...C(),...e}}catch{return C()}}function ie(e){localStorage.setItem(S,JSON.stringify(e))}function T(e,t){let n=e.lidos[String(t)],r={...e,lidos:{...e.lidos,[String(t)]:{aberturas:(n?.aberturas??0)+1,lidoEm:Date.now()}}};return ie(r),r}function E(e,t){return t?.id!==void 0&&e.lidos[String(t.id)]!==void 0}function D(e,t){return t.filter(t=>E(e,t)).length}function O(e){return`principios:${e}`}async function k(){let e=new Map;for(let t of await r()){if(t.origem!==`principios`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function A(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var j=[],M=new Map,N=new Set,P=C(),F=!1,I=!1,L=null,R=ne,z=null,B=``;function V(t){B=t,e(`not_principios`,t).then(e=>{B===t&&(z=e===null?null:new Set(e),c())})}var H=-1,U=ee({origem:`principios`,idDe:e=>e.id,chaveDe:e=>O(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${i.principios.titulo} — ${e.titulo}`,lembrete:()=>M});function W(){F||I||L!==null||(I=!0,(async()=>{try{[j,M]=await Promise.all([_(),k()]),N=p(h),P=w(),F=!0}catch(e){console.error(`principios: a carga falhou.`,e),L=u(e)}finally{I=!1,c()}})())}function G(){L=null,W(),c()}function K(e){return j.find(t=>t.id===e)}function q(e){H!==e.id&&(H=e.id??-1,U.abrir(e.id===void 0?``:M.get(e.id)??``),F&&e.id!==void 0&&(P=T(P,e.id)))}function J(e){return f(`curado`,e.id)}function Y(e){return N.has(J(e))}function X(e){N=d(h,N,J(e)),c()}function ae(e){return e.icone===``?g:e.icone}function oe(e){let t=Y(e);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>o(`principios/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${ae(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
        ${e.referencia===``?s:a`<small class="principios__versos">${e.referencia}</small>`}
      </button>

      <div class="principios__marcas">
        ${E(P,e)?a`<kk-icon
                class="principios__marca principios__marca--lido"
                name="check"
                title=${i.principios.lido}
              ></kk-icon>`:s}
        ${A(M,e)?a`<kk-icon
                class="principios__marca"
                name="notes"
                title=${i.principios.comAnotacao}
              ></kk-icon>`:s}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?i.principios.desfavoritar:i.principios.favoritar}
          @click=${()=>X(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Z(e,t,n,r,o=!1){return a`
    <kk-details class="principios__secao" name="principios-areas" ?open=${n}>
      <span
        slot="summary"
        class="principios__area ${o?`principios__area--favoritos`:``} ${r?`principios__area--lida`:``}"
      >
        ${e}
        ${r?a`<kk-icon name="check" title=${i.principios.areaLida}></kk-icon>`:s}
      </span>
      <div class="cartoes cartoes--duas">${t.map(oe)}</div>
    </kk-details>
  `}function Q(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function se(){if(j.length===0)return a`<p class="vazio">${I?i.app.carregando:i.principios.vazio}</p>`;let e=re(j,z),t=R.busca.trim()===``,n=e=>E(P,e),r=x(e,n),o=D(P,j),l=Math.round(o/j.length*100),u=t?j.filter(Y):[],d=Q(r);return a`
    <div class="principios">
      <p class="principios__subtitulo">${i.principios.subtitulo}</p>

      <div class="principios__progresso" title=${i.principios.progresso}>
        <kk-progress-bar value=${l}></kk-progress-bar>
        <span class="principios__contagem">${o}/${j.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${i.principios.buscar}
          .value=${R.busca}
          @kk-input=${e=>{R={...R,busca:e.target.value},V(R.busca),c()}}
        ></kk-input>
      </div>

      ${e.length===0?a`<p class="vazio">${i.principios.semResultado}</p>`:a`
            <kk-accordion class="principios__areas">
              ${u.length===0?s:Z(i.principios.favoritos,u,!0,u.every(n),!0)}
              ${r.map((e,t)=>Z(e.rotulo,e.principios,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function ce(e){let t=te(e);return t.length===0?s:a`
    <ul class="principios__perguntas">
      ${t.map(e=>a`
          <li>
            <span>${e.pergunta}</span>
            ${e.nota===void 0||e.nota===``?s:a`<small>${e.nota}</small>`}
          </li>
        `)}
    </ul>
  `}function le(e){return q(e),a`
    <div class="principios">
      <p class="principios__area-aberta">${b(e.area)}</p>

      <blockquote class="principios__frase">${e.principio}</blockquote>

      ${e.referencia===``?s:a`
            <p class="principios__base">
              <kk-icon name="book"></kk-icon>
              ${e.referencia}
            </p>
          `}

      ${e.explicacao===``?s:a`
            <article class="principios__bloco">
              <h2 class="principios__secao">${i.principios.porQue}</h2>
              <div class="prosa">${m(e.explicacao)}</div>
            </article>
          `}

      ${e.pratica===``?s:a`
            <article class="principios__bloco principios__bloco--pratica">
              <h2 class="principios__secao">${i.principios.naPratica}</h2>
              <div class="prosa">${m(e.pratica)}</div>
            </article>
          `}

      ${e.link_jw===``?s:a`
            <p class="principios__fonte">
              <a href=${e.link_jw} target="_blank" rel="noopener">
                ${i.principios.lerFonte}
              </a>
            </p>
          `}

      ${U.campo({item:e,id:`principios-reflexao`,rotulo:i.principios.paraRefletir,placeholder:i.principios.reflexaoPlaceholder,apoio:ce(e)})}

      <div class="principios__saidas">
        <kk-button variant="primary" @click=${()=>o(`principios`)}>
          ${i.principios.outros}
        </kk-button>
        <kk-button @click=${()=>o(`home`)}>${i.principios.inicio}</kk-button>
      </div>
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?K(t):void 0}var ue={titulo(e){return $(e)?.titulo},voltarPara(e){return $(e)===void 0?`home`:`principios`},acoes(e){let t=$(e);if(t===void 0)return;let n=Y(t);return a`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?i.principios.desfavoritar:i.principios.favoritar}
        @click=${()=>X(t)}
      ></kk-icon-button>
    `},conteudo(e){if(W(),L!==null)return l(L,G);let t=$(e);return t===void 0?(H=-1,se()):le(t)}};export{ue as telaPrincipios};