import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r}from"./banco-u8JVNTlT.js";import{r as i}from"./data-DRe9t3tD.js";import{D as a,E as o,n as s,o as c,r as l}from"./index-QyzyfOkc.js";import{t as u}from"./unsafe-html-BBiWdB6b.js";import{n as d,r as f,t as p}from"./leitura-Dlv1ocwB.js";import{t as m}from"./compartilhar-DUlQMi6E.js";import{a as h,i as g,n as ee,t as _}from"./acervo-lW84xSMO.js";var v=()=>r(`guias`),y=()=>r(`guias_local`);async function b(e){let[t,n]=await Promise.all([v().todos(),y().todos()]),r=ee(t,n);return g(_(r,e,e=>[e.titulo,e.texto]))}function x(e,t){return(t?y():v()).obter(e)}function S(e){return y().salvar(e)}function C(e){return y().excluir(e)}function w(e){return(e?.texto??``).replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i,``)}var T=400,E=1200,D=[],O=``,k=null,A=!1,j=null,M,N=!1,P,F,I=new p;function L(){return document.querySelector(`kk-editor`)}function R(e){let t=L();t!==null&&(t.value=e)}async function z(){D=await b(O),o()}async function B(e,t){A=t,k=await x(e,t)??null,k===null&&a(`guias`)}async function V(e){if(e===null)j={id:null,titulo:``,texto:``,status:``};else{let t=await x(e,!0);if(t===void 0){a(`guias`);return}j={id:t.id??null,titulo:t.titulo,texto:t.texto,status:``}}o(),R(j.texto)}function H(e){let t=e.args.join(`/`);M===t||N||(M=t,N=!0,I.fechar(),(async()=>{try{let[t,n]=e.args;t===void 0?(k=null,j=null,await z()):t===`nova`?(k=null,await V(null)):t===`editar`?(k=null,await V(Number.parseInt(n??``,10))):t===`local`?(j=null,await B(Number.parseInt(n??``,10),!0)):(j=null,await B(Number.parseInt(t,10),!1))}finally{N=!1,o()}})())}function U(e){O=e,clearTimeout(P),P=setTimeout(()=>void z(),T)}function W(r){let i=d(r.texto,180);return e`
    <button
      class="cartao"
      @click=${()=>a(r.local?`guias/local/${r.id??``}`:`guias/${r.id??``}`)}
    >
      <span class="cartao__topo">
        <kk-icon class="cartao__icone" name="map-2"></kk-icon>
        <span class="cartao__titulo">${r.titulo||n.acervo.semTitulo}</span>
        ${r.local?e`<kk-badge variant="success" pill>${n.acervo.meu}</kk-badge>`:t}
      </span>

      ${i===``?t:e`<span class="cartao__previa">${i}</span>`}
    </button>
  `}function G(){return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.guias.buscar}
        .value=${O}
        @kk-input=${e=>U(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${D.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="map-2"></kk-icon>
            <p>${n.guias.vazio}</p>
          </div>
        `:e`<div class="cartoes">${D.map(e=>W(e))}</div>`}
  `}function K(e){return`${e.titulo}. ${w(e)}`}function q(t){return e`<div class="prosa">${u(s(w(t)))}</div>`}function J(t){return e`
    ${q(t)}
    ${I.overlay(e`
          <h1>${t.titulo}</h1>
          ${q(t)}
        `,()=>K(t))}
  `}async function Y(){let e=k?.id;e===void 0||!A||await c({titulo:n.guias.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await C(e),l(n.guias.excluida),a(`guias`))}function X(){j!==null&&(j={...j,status:n.acervo.salvando},o(),clearTimeout(F),F=setTimeout(()=>void Z(),E))}async function Z(){if(j===null)return;if(j.titulo.trim()===``||h(j.texto)){j={...j,status:n.acervo.tituloEConteudo},o();return}let e=Date.now(),t=await S({titulo:j.titulo,texto:j.texto,publicar:0,data_atualizacao:e,...j.id===null?{data_criacao:e}:{id:j.id}});j.id===null&&(j={...j,id:t},history.replaceState(null,``,`#/guias/editar/${t}`)),j={...j,status:n.acervo.salvoAs(i(e))},o()}function Q(t){return e`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${n.guias.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{j={...t,titulo:e.target.value},X()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${t.status}</span>
      </div>

      <kk-editor
        @kk-input=${e=>{j={...t,texto:e.detail.value},X()}}
      ></kk-editor>
    </div>
  `}function te(r){return e`
    ${I.botaoApresentar()}
    ${I.botaoFala(()=>K(r))}
    <kk-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void m(r.titulo,f(w(r)))}
    ></kk-icon-button>
    ${A?e`
          <kk-icon-button
            name="pencil"
            label=${n.acoes.editar}
            @click=${()=>a(`guias/editar/${r.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${n.guias.excluir}
            @click=${()=>void Y()}
          ></kk-icon-button>
        `:t}
  `}var ne={voltarPara(e){return e.args.length===0?`home`:`guias`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=j?.titulo.trim()??``;return e===``?n.guias.novaTitulo:e}return k?.titulo}},acoes(t){let[r]=t.args;if(r===void 0)return e`
        <kk-icon-button
          name="plus"
          label=${n.guias.nova}
          @click=${()=>a(`guias/nova`)}
        ></kk-icon-button>
      `;if(r!==`nova`&&r!==`editar`)return k===null?void 0:te(k)},conteudo(e){H(e);let[t]=e.args;return t===void 0?G():t===`nova`||t===`editar`?j===null?$():Q(j):k===null?$():J(k)}};function $(){return e`<div class="carregando"><kk-spinner></kk-spinner></div>`}export{ne as telaGuias};