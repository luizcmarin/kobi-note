import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-C-U_qlgv.js";import{r}from"./rotas-D12eslN_.js";import{r as i}from"./data-7IMAkOFv.js";import{t as a}from"./html-C5yDSNPC.js";import{o,s}from"./banco-TmbtJ63a.js";import{a as c,n as l,o as u}from"./acervo-Bp775EqU.js";import{R as d,c as f,d as p,l as m,m as h,n as g}from"./index-DQ-iAe1X.js";import{n as _}from"./carga-Cl47TOz-.js";import{n as v,t as y}from"./editor-CSRQZGXQ.js";import{t as b}from"./leitura-CX65C_v8.js";import{t as x}from"./compartilhar-yiSOxGhg.js";var S=()=>s(`guias`),C=()=>s(`guias_local`);async function w(e){let[t,n,r]=await Promise.all([S().todos(),C().todos(),o(`not_guias`,`not_guias_local`,e)]);return c(l(t,n,r))}function T(e,t){return(t?C():S()).obter(e)}function E(e){return C().salvar(e)}function D(e){return C().excluir(e)}function O(e){return(e?.texto??``).replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i,``)}var k=400,A=1200,j=[],M=``,N=null,P=!1,F=null,I,L,R=new b;async function z(){j=await w(M),d()}async function B(e,t){P=t,N=await T(e,t)??null,N===null&&r(`guias`)}async function V(e){if(e===null)F={id:null,titulo:``,texto:``,status:``};else{let t=await T(e,!0);if(t===void 0){r(`guias`);return}F={id:t.id??null,titulo:t.titulo,texto:t.texto,status:``}}d(),y(F.texto)}var H=new _(`guias`,async e=>{R.fechar();let[t,n]=e.args;t===void 0?(N=null,F=null,await z()):t===`nova`?(N=null,await V(null)):t===`editar`?(N=null,await V(Number.parseInt(n??``,10))):t===`local`?(F=null,await B(Number.parseInt(n??``,10),!0)):(F=null,await B(Number.parseInt(t,10),!1))});function U(e){M=e,clearTimeout(I),I=setTimeout(()=>void z(),k)}function W(i){let a=v(i.texto,180);return e`
    <button
      class="cartao"
      @click=${()=>r(i.local?`guias/local/${i.id??``}`:`guias/${i.id??``}`)}
    >
      <span class="cartao__topo">
        <kk-icon class="cartao__icone" name="map-2"></kk-icon>
        <span class="cartao__titulo">${i.titulo||n.acervo.semTitulo}</span>
        ${i.local?e`<kk-badge variant="success" pill>${n.acervo.meu}</kk-badge>`:t}
      </span>

      ${a===``?t:e`<span class="cartao__previa">${a}</span>`}
    </button>
  `}function G(){return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.guias.buscar}
        .value=${M}
        @kk-input=${e=>U(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${j.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="map-2"></kk-icon>
            <p>${n.guias.vazio}</p>
          </div>
        `:e`<div class="cartoes">${j.map(e=>W(e))}</div>`}
  `}function K(e){return`${e.titulo}. ${O(e)}`}function q(t){return e`<div class="prosa">${m(g(O(t)))}</div>`}function J(t){return e`
    ${q(t)}
    ${R.overlay(e`
          <h1>${t.titulo}</h1>
          ${q(t)}
        `,()=>K(t))}
  `}async function Y(){let e=N?.id;e!==void 0&&P&&await h({titulo:n.guias.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await D(e),f(n.guias.excluida),r(`guias`))}function X(){F!==null&&(F={...F,status:n.acervo.salvando},d(),clearTimeout(L),L=setTimeout(()=>void Z(),A))}async function Z(){if(F===null)return;if(F.titulo.trim()===``||u(F.texto)){F={...F,status:n.acervo.tituloEConteudo},d();return}let e=Date.now(),t=await E({titulo:F.titulo,texto:F.texto,publicar:0,data_atualizacao:e,...F.id===null?{data_criacao:e}:{id:F.id}});F.id===null&&(F={...F,id:t},history.replaceState(null,``,`#/guias/editar/${t}`)),F={...F,status:n.acervo.salvoAs(i(e))},d()}function Q(t){return e`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo"
        placeholder=${n.guias.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{F={...t,titulo:e.target.value},X()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${t.status}</span>
      </div>

      <kk-editor
        @kk-input=${e=>{F={...t,texto:e.detail.value},X()}}
      ></kk-editor>
    </div>
  `}function $(i){return e`
    ${R.botaoApresentar()}
    ${R.botaoFala(()=>K(i))}
    <kk-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void x(i.titulo,a(O(i)))}
    ></kk-icon-button>
    ${P?e`
          <kk-icon-button
            name="pencil"
            label=${n.acoes.editar}
            @click=${()=>r(`guias/editar/${i.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${n.guias.excluir}
            @click=${()=>void Y()}
          ></kk-icon-button>
        `:t}
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`guias`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=F?.titulo.trim()??``;return e===``?n.guias.novaTitulo:e}return N?.titulo}},acoes(t){let[i]=t.args;if(i===void 0)return e`
        <kk-icon-button
          name="plus"
          label=${n.guias.nova}
          @click=${()=>r(`guias/nova`)}
        ></kk-icon-button>
      `;if(i!==`nova`&&i!==`editar`)return N===null?void 0:$(N)},conteudo(e){let t=H.falhou(e);if(t!==null)return t;let[n]=e.args;return n===void 0?G():n===`nova`||n===`editar`?F===null?p():Q(F):N===null?p():J(N)}};export{ee as telaGuias};