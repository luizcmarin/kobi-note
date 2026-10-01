import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{r}from"./rotas-D12eslN_.js";import{s as i}from"./banco-CGOuosq0.js";import{t as a}from"./catalogo-B2Z121mU.js";import{i as o,n as s,t as c}from"./aparelho-BsIv_N04.js";import{s as l}from"./dados-H13bY8CF.js";import{r as u}from"./acervo-Bp775EqU.js";import{R as d,l as f}from"./index-DYev-n2R.js";import{alternarFavorito as ee,chaveFavorito as p,lerFavoritos as m}from"./favoritos-BACwLqIZ.js";import{t as h}from"./carga-Cb65ZAc7.js";import{t as g}from"./rascunho-kL2aOgFQ.js";import{t as _}from"./busca-yzwzD290.js";var v=`note_principios_favoritos`,y=`scale`;async function b(){return(await i(`principios`).todos()).sort((e,t)=>S(e.area)-S(t.area)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var x=Object.keys(a);function S(e){let t=x.indexOf(e);return t===-1?x.length:t}function C(e){return e===``?a.coracao??e:a[e]??e}function w(e){return e===null?[]:u(e.reflexoes)}var T={busca:``};function E(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function D(e,t){let n=new Map;for(let t of e){let e=n.get(t.area);e===void 0?n.set(t.area,[t]):e.push(t)}return[...n].map(([e,n])=>({area:e,rotulo:C(e),principios:n,concluida:n.every(t)}))}var O=`note_principios_progresso`;function k(){return{lidos:{}}}function A(){return o(O,k())}function j(e){s(O,e)}function te(e,t){let n={...e,lidos:c(e.lidos,t,e=>({aberturas:(e?.aberturas??0)+1,lidoEm:Date.now()}))};return j(n),n}function M(e,t){return t?.id!==void 0&&e.lidos[String(t.id)]!==void 0}function N(e,t){return t.filter(t=>M(e,t)).length}function P(e){return`principios:${e}`}async function F(){let e=new Map;for(let t of await l()){if(t.origem!==`principios`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function I(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var L=[],R=new Map,z=new Set,B=k(),V=T,H=new _(`not_principios`),U=-1,W=g({origem:`principios`,idDe:e=>e.id,chaveDe:e=>P(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${n.principios.titulo} — ${e.titulo}`,lembrete:()=>R}),G=new h(`principios`,async()=>{[L,R]=await Promise.all([b(),F()]),z=m(v),B=A()});function K(e){return L.find(t=>t.id===e)}function q(e){U!==e.id&&(U=e.id??-1,W.abrir(e.id===void 0?``:R.get(e.id)??``),G.terminou&&e.id!==void 0&&(B=te(B,e.id)))}function J(e){return p(`curado`,e.id)}function Y(e){return z.has(J(e))}function X(e){z=ee(v,z,J(e)),d()}function Z(e){return e.icone===``?y:e.icone}function ne(i){let a=Y(i);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${a}>
      <button class="cartao__alvo" @click=${()=>r(`principios/${i.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${Z(i)}></kk-icon>
          <span class="cartao__titulo">${i.titulo}</span>
        </span>
        ${i.referencia===``?t:e`<small class="principios__versos">${i.referencia}</small>`}
      </button>

      <div class="principios__marcas">
        ${M(B,i)?e`<kk-icon
                class="principios__marca principios__marca--lido"
                name="check"
                title=${n.principios.lido}
              ></kk-icon>`:t}
        ${I(R,i)?e`<kk-icon
                class="principios__marca"
                name="notes"
                title=${n.principios.comAnotacao}
              ></kk-icon>`:t}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${a?`filled`:`outline`}
          label=${a?n.principios.desfavoritar:n.principios.favoritar}
          @click=${()=>X(i)}
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
      <div class="cartoes cartoes--duas">${i.map(ne)}</div>
    </kk-details>
  `}function re(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function ie(){if(L.length===0)return e`<p class="vazio">${G.emAndamento?n.app.carregando:n.principios.vazio}</p>`;let r=E(L,H.achados),i=V.busca.trim()===``,a=e=>M(B,e),o=D(r,a),s=N(B,L),c=Math.round(s/L.length*100),l=i?L.filter(Y):[],u=re(o);return e`
    <div class="principios">
      <p class="principios__subtitulo">${n.principios.subtitulo}</p>

      <div class="principios__progresso" title=${n.principios.progresso}>
        <kk-progress-bar value=${c}></kk-progress-bar>
        <span class="principios__contagem">${s}/${L.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${n.principios.buscar}
          .value=${V.busca}
          @kk-input=${e=>{V={...V,busca:e.target.value},H.buscar(V.busca),d()}}
        ></kk-input>
      </div>

      ${r.length===0?e`<p class="vazio">${n.principios.semResultado}</p>`:e`
            <kk-accordion class="principios__areas">
              ${l.length===0?t:Q(n.principios.favoritos,l,!0,l.every(a),!0)}
              ${o.map((e,t)=>Q(e.rotulo,e.principios,l.length===0&&t===u,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function ae(n){let r=w(n);return r.length===0?t:e`
    <ul class="principios__perguntas">
      ${r.map(n=>e`
          <li>
            <span>${n.pergunta}</span>
            ${n.nota===void 0||n.nota===``?t:e`<small>${n.nota}</small>`}
          </li>
        `)}
    </ul>
  `}function oe(i){return q(i),e`
    <div class="principios">
      <p class="principios__area-aberta">${C(i.area)}</p>

      <blockquote class="principios__frase">${i.principio}</blockquote>

      ${i.referencia===``?t:e`
            <p class="principios__base">
              <kk-icon name="book"></kk-icon>
              ${i.referencia}
            </p>
          `}

      ${i.explicacao===``?t:e`
            <article class="principios__bloco">
              <h2 class="principios__secao">${n.principios.porQue}</h2>
              <div class="prosa">${f(i.explicacao)}</div>
            </article>
          `}

      ${i.pratica===``?t:e`
            <article class="principios__bloco principios__bloco--pratica">
              <h2 class="principios__secao">${n.principios.naPratica}</h2>
              <div class="prosa">${f(i.pratica)}</div>
            </article>
          `}

      ${i.link_jw===``?t:e`
            <p class="principios__fonte">
              <a href=${i.link_jw} target="_blank" rel="noopener">
                ${n.principios.lerFonte}
              </a>
            </p>
          `}

      ${W.campo({item:i,id:`principios-reflexao`,rotulo:n.principios.paraRefletir,placeholder:n.principios.reflexaoPlaceholder,apoio:ae(i)})}

      <div class="principios__saidas">
        <kk-button variant="primary" @click=${()=>r(`principios`)}>
          ${n.principios.outros}
        </kk-button>
        <kk-button @click=${()=>r(`home`)}>${n.principios.inicio}</kk-button>
      </div>
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?K(t):void 0}var se={titulo(e){return $(e)?.titulo},voltarPara(e){return $(e)===void 0?`home`:`principios`},acoes(t){let r=$(t);if(r===void 0)return;let i=Y(r);return e`
      <kk-icon-button
        name="star"
        variant=${i?`filled`:`outline`}
        label=${i?n.principios.desfavoritar:n.principios.favoritar}
        @click=${()=>X(r)}
      ></kk-icon-button>
    `},conteudo(e){let t=G.falhou();if(t!==null)return t;let n=$(e);return n===void 0?(U=-1,ie()):oe(n)}};export{se as telaPrincipios};