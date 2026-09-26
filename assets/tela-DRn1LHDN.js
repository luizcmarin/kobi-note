import{a as e,s as t}from"./banco-DhjAojIe.js";import{t as n}from"./catalogo-B2Z121mU.js";import{C as r,G as i,_t as a,bt as o,ft as s,mt as c,w as l,xt as u,y as d}from"./index-tEHw1VqD.js";import{alternarFavorito as f,chaveFavorito as ee,lerFavoritos as te}from"./favoritos-DAEWA_Gd.js";import{t as p}from"./rascunho-C2U3kt15.js";var m=`note_principios_favoritos`,h=`scale`;async function g(){return(await t(`principios`).todos()).sort((e,t)=>v(e.area)-v(t.area)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var _=Object.keys(n);function v(e){let t=_.indexOf(e);return t===-1?_.length:t}function y(e){return e===``?n.coracao??e:n[e]??e}function b(e){if(e===null)return[];try{let t=JSON.parse(e.reflexoes===``?`[]`:e.reflexoes);return Array.isArray(t)?t:[]}catch{return[]}}var x={busca:``};function S(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function C(e,t){let n=new Map;for(let t of e){let e=n.get(t.area);e===void 0?n.set(t.area,[t]):e.push(t)}return[...n].map(([e,n])=>({area:e,rotulo:y(e),principios:n,concluida:n.every(t)}))}var w=`note_principios_progresso`;function T(){return{lidos:{}}}function E(){try{let e=JSON.parse(localStorage.getItem(w)??`null`);return{...T(),...e}}catch{return T()}}function D(e){localStorage.setItem(w,JSON.stringify(e))}function O(e,t){let n=e.lidos[String(t)],r={...e,lidos:{...e.lidos,[String(t)]:{aberturas:(n?.aberturas??0)+1,lidoEm:Date.now()}}};return D(r),r}function k(e,t){return t?.id!==void 0&&e.lidos[String(t.id)]!==void 0}function A(e,t){return t.filter(t=>k(e,t)).length}function j(e){return`principios:${e}`}async function ne(){let e=new Map;for(let t of await i()){if(t.origem!==`principios`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function re(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var M=[],N=new Map,P=new Set,F=T(),I=!1,L=!1,R=null,z=x,B=null,V=``;function H(t){V=t,e(`not_principios`,t).then(e=>{V===t&&(B=e===null?null:new Set(e),s())})}var U=-1,W=p({origem:`principios`,idDe:e=>e.id,chaveDe:e=>j(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${a.principios.titulo} — ${e.titulo}`,lembrete:()=>N});function G(){I||L||R!==null||(L=!0,(async()=>{try{[M,N]=await Promise.all([g(),ne()]),P=te(m),F=E(),I=!0}catch(e){console.error(`principios: a carga falhou.`,e),R=l(e)}finally{L=!1,s()}})())}function K(){R=null,G(),s()}function q(e){return M.find(t=>t.id===e)}function J(e){U!==e.id&&(U=e.id??-1,W.abrir(e.id===void 0?``:N.get(e.id)??``),I&&e.id!==void 0&&(F=O(F,e.id)))}function Y(e){return ee(`curado`,e.id)}function X(e){return P.has(Y(e))}function Z(e){P=f(m,P,Y(e)),s()}function ie(e){return e.icone===``?h:e.icone}function ae(e){let t=X(e);return u`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>c(`principios/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${ie(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
        ${e.referencia===``?o:u`<small class="principios__versos">${e.referencia}</small>`}
      </button>

      <div class="principios__marcas">
        ${k(F,e)?u`<kk-icon
                class="principios__marca principios__marca--lido"
                name="check"
                title=${a.principios.lido}
              ></kk-icon>`:o}
        ${re(N,e)?u`<kk-icon
                class="principios__marca"
                name="notes"
                title=${a.principios.comAnotacao}
              ></kk-icon>`:o}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?a.principios.desfavoritar:a.principios.favoritar}
          @click=${()=>Z(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Q(e,t,n,r,i=!1){return u`
    <kk-details class="principios__secao" name="principios-areas" ?open=${n}>
      <span
        slot="summary"
        class="principios__area ${i?`principios__area--favoritos`:``} ${r?`principios__area--lida`:``}"
      >
        ${e}
        ${r?u`<kk-icon name="check" title=${a.principios.areaLida}></kk-icon>`:o}
      </span>
      <div class="cartoes cartoes--duas">${t.map(ae)}</div>
    </kk-details>
  `}function oe(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function se(){if(M.length===0)return u`<p class="vazio">${L?a.app.carregando:a.principios.vazio}</p>`;let e=S(M,B),t=z.busca.trim()===``,n=e=>k(F,e),r=C(e,n),i=A(F,M),c=Math.round(i/M.length*100),l=t?M.filter(X):[],d=oe(r);return u`
    <div class="principios">
      <p class="principios__subtitulo">${a.principios.subtitulo}</p>

      <div class="principios__progresso" title=${a.principios.progresso}>
        <kk-progress-bar value=${c}></kk-progress-bar>
        <span class="principios__contagem">${i}/${M.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${a.principios.buscar}
          .value=${z.busca}
          @kk-input=${e=>{z={...z,busca:e.target.value},H(z.busca),s()}}
        ></kk-input>
      </div>

      ${e.length===0?u`<p class="vazio">${a.principios.semResultado}</p>`:u`
            <kk-accordion class="principios__areas">
              ${l.length===0?o:Q(a.principios.favoritos,l,!0,l.every(n),!0)}
              ${r.map((e,t)=>Q(e.rotulo,e.principios,l.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function ce(e){let t=b(e);return t.length===0?o:u`
    <ul class="principios__perguntas">
      ${t.map(e=>u`
          <li>
            <span>${e.pergunta}</span>
            ${e.nota===void 0||e.nota===``?o:u`<small>${e.nota}</small>`}
          </li>
        `)}
    </ul>
  `}function le(e){return J(e),u`
    <div class="principios">
      <p class="principios__area-aberta">${y(e.area)}</p>

      <blockquote class="principios__frase">${e.principio}</blockquote>

      ${e.referencia===``?o:u`
            <p class="principios__base">
              <kk-icon name="book"></kk-icon>
              ${e.referencia}
            </p>
          `}

      ${e.explicacao===``?o:u`
            <article class="principios__bloco">
              <h2 class="principios__secao">${a.principios.porQue}</h2>
              <div class="prosa">${d(e.explicacao)}</div>
            </article>
          `}

      ${e.pratica===``?o:u`
            <article class="principios__bloco principios__bloco--pratica">
              <h2 class="principios__secao">${a.principios.naPratica}</h2>
              <div class="prosa">${d(e.pratica)}</div>
            </article>
          `}

      ${e.link_jw===``?o:u`
            <p class="principios__fonte">
              <a href=${e.link_jw} target="_blank" rel="noopener">
                ${a.principios.lerFonte}
              </a>
            </p>
          `}

      ${W.campo({item:e,id:`principios-reflexao`,rotulo:a.principios.paraRefletir,placeholder:a.principios.reflexaoPlaceholder,apoio:ce(e)})}

      <div class="principios__saidas">
        <kk-button variant="primary" @click=${()=>c(`principios`)}>
          ${a.principios.outros}
        </kk-button>
        <kk-button @click=${()=>c(`home`)}>${a.principios.inicio}</kk-button>
      </div>
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?q(t):void 0}var ue={titulo(e){return $(e)?.titulo},voltarPara(e){return $(e)===void 0?`home`:`principios`},acoes(e){let t=$(e);if(t===void 0)return;let n=X(t);return u`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?a.principios.desfavoritar:a.principios.favoritar}
        @click=${()=>Z(t)}
      ></kk-icon-button>
    `},conteudo(e){if(G(),R!==null)return r(R,K);let t=$(e);return t===void 0?(U=-1,se()):le(t)}};export{ue as telaPrincipios};