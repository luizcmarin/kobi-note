import{a as e,s as t}from"./banco-DhjAojIe.js";import{t as n}from"./catalogo-B2Z121mU.js";import{V as r,b as i,ct as a,gt as o,pt as s,ut as c,vt as l,y as u}from"./index-sA5grpgQ.js";import{alternarFavorito as d,chaveFavorito as f,lerFavoritos as p}from"./favoritos-DAEWA_Gd.js";import{t as m}from"./unsafe-html-Cs37CJNH.js";import{t as ee}from"./rascunho-10zBCZhc.js";var h=`note_principios_favoritos`,g=`scale`;async function te(){return(await t(`principios`).todos()).sort((e,t)=>v(e.area)-v(t.area)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var _=Object.keys(n);function v(e){let t=_.indexOf(e);return t===-1?_.length:t}function y(e){return e===``?n.coracao??e:n[e]??e}function b(e){if(e===null)return[];try{let t=JSON.parse(e.reflexoes===``?`[]`:e.reflexoes);return Array.isArray(t)?t:[]}catch{return[]}}var x={busca:``};function ne(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function re(e,t){let n=new Map;for(let t of e){let e=n.get(t.area);e===void 0?n.set(t.area,[t]):e.push(t)}return[...n].map(([e,n])=>({area:e,rotulo:y(e),principios:n,concluida:n.every(t)}))}var S=`note_principios_progresso`;function C(){return{lidos:{}}}function w(){try{let e=JSON.parse(localStorage.getItem(S)??`null`);return{...C(),...e}}catch{return C()}}function ie(e){localStorage.setItem(S,JSON.stringify(e))}function T(e,t){let n=e.lidos[String(t)],r={...e,lidos:{...e.lidos,[String(t)]:{aberturas:(n?.aberturas??0)+1,lidoEm:Date.now()}}};return ie(r),r}function E(e,t){return t?.id!==void 0&&e.lidos[String(t.id)]!==void 0}function D(e,t){return t.filter(t=>E(e,t)).length}function O(e){return`principios:${e}`}async function k(){let e=new Map;for(let t of await r()){if(t.origem!==`principios`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function A(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var j=[],M=new Map,N=new Set,P=C(),F=!1,I=!1,L=null,R=x,z=null,B=``;function V(t){B=t,e(`not_principios`,t).then(e=>{B===t&&(z=e===null?null:new Set(e),a())})}var H=-1,U=ee({origem:`principios`,idDe:e=>e.id,chaveDe:e=>O(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${s.principios.titulo} — ${e.titulo}`,lembrete:()=>M});function W(){F||I||L!==null||(I=!0,(async()=>{try{[j,M]=await Promise.all([te(),k()]),N=p(h),P=w(),F=!0}catch(e){console.error(`principios: a carga falhou.`,e),L=i(e)}finally{I=!1,a()}})())}function G(){L=null,W(),a()}function K(e){return j.find(t=>t.id===e)}function q(e){H!==e.id&&(H=e.id??-1,U.abrir(e.id===void 0?``:M.get(e.id)??``),F&&e.id!==void 0&&(P=T(P,e.id)))}function J(e){return f(`curado`,e.id)}function Y(e){return N.has(J(e))}function X(e){N=d(h,N,J(e)),a()}function ae(e){return e.icone===``?g:e.icone}function oe(e){let t=Y(e);return l`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>c(`principios/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${ae(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
        ${e.referencia===``?o:l`<small class="principios__versos">${e.referencia}</small>`}
      </button>

      <div class="principios__marcas">
        ${E(P,e)?l`<kk-icon
                class="principios__marca principios__marca--lido"
                name="check"
                title=${s.principios.lido}
              ></kk-icon>`:o}
        ${A(M,e)?l`<kk-icon
                class="principios__marca"
                name="notes"
                title=${s.principios.comAnotacao}
              ></kk-icon>`:o}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?s.principios.desfavoritar:s.principios.favoritar}
          @click=${()=>X(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Z(e,t,n,r,i=!1){return l`
    <kk-details class="principios__secao" name="principios-areas" ?open=${n}>
      <span
        slot="summary"
        class="principios__area ${i?`principios__area--favoritos`:``} ${r?`principios__area--lida`:``}"
      >
        ${e}
        ${r?l`<kk-icon name="check" title=${s.principios.areaLida}></kk-icon>`:o}
      </span>
      <div class="cartoes cartoes--duas">${t.map(oe)}</div>
    </kk-details>
  `}function se(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function Q(){if(j.length===0)return l`<p class="vazio">${I?s.app.carregando:s.principios.vazio}</p>`;let e=ne(j,z),t=R.busca.trim()===``,n=e=>E(P,e),r=re(e,n),i=D(P,j),c=Math.round(i/j.length*100),u=t?j.filter(Y):[],d=se(r);return l`
    <div class="principios">
      <p class="principios__subtitulo">${s.principios.subtitulo}</p>

      <div class="principios__progresso" title=${s.principios.progresso}>
        <kk-progress-bar value=${c}></kk-progress-bar>
        <span class="principios__contagem">${i}/${j.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${s.principios.buscar}
          .value=${R.busca}
          @kk-input=${e=>{R={...R,busca:e.target.value},V(R.busca),a()}}
        ></kk-input>
      </div>

      ${e.length===0?l`<p class="vazio">${s.principios.semResultado}</p>`:l`
            <kk-accordion class="principios__areas">
              ${u.length===0?o:Z(s.principios.favoritos,u,!0,u.every(n),!0)}
              ${r.map((e,t)=>Z(e.rotulo,e.principios,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function ce(e){let t=b(e);return t.length===0?o:l`
    <ul class="principios__perguntas">
      ${t.map(e=>l`
          <li>
            <span>${e.pergunta}</span>
            ${e.nota===void 0||e.nota===``?o:l`<small>${e.nota}</small>`}
          </li>
        `)}
    </ul>
  `}function le(e){return q(e),l`
    <div class="principios">
      <p class="principios__area-aberta">${y(e.area)}</p>

      <blockquote class="principios__frase">${e.principio}</blockquote>

      ${e.referencia===``?o:l`
            <p class="principios__base">
              <kk-icon name="book"></kk-icon>
              ${e.referencia}
            </p>
          `}

      ${e.explicacao===``?o:l`
            <article class="principios__bloco">
              <h2 class="principios__secao">${s.principios.porQue}</h2>
              <div class="prosa">${m(e.explicacao)}</div>
            </article>
          `}

      ${e.pratica===``?o:l`
            <article class="principios__bloco principios__bloco--pratica">
              <h2 class="principios__secao">${s.principios.naPratica}</h2>
              <div class="prosa">${m(e.pratica)}</div>
            </article>
          `}

      ${e.link_jw===``?o:l`
            <p class="principios__fonte">
              <a href=${e.link_jw} target="_blank" rel="noopener">
                ${s.principios.lerFonte}
              </a>
            </p>
          `}

      ${U.campo({item:e,id:`principios-reflexao`,rotulo:s.principios.paraRefletir,placeholder:s.principios.reflexaoPlaceholder,apoio:ce(e)})}

      <div class="principios__saidas">
        <kk-button variant="primary" @click=${()=>c(`principios`)}>
          ${s.principios.outros}
        </kk-button>
        <kk-button @click=${()=>c(`home`)}>${s.principios.inicio}</kk-button>
      </div>
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?K(t):void 0}var ue={titulo(e){return $(e)?.titulo},voltarPara(e){return $(e)===void 0?`home`:`principios`},acoes(e){let t=$(e);if(t===void 0)return;let n=Y(t);return l`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?s.principios.desfavoritar:s.principios.favoritar}
        @click=${()=>X(t)}
      ></kk-icon-button>
    `},conteudo(e){if(W(),L!==null)return u(L,G);let t=$(e);return t===void 0?(H=-1,Q()):le(t)}};export{ue as telaPrincipios};