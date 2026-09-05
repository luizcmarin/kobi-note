import{a as e}from"./banco-u8JVNTlT.js";import{$ as t,Q as n,at as r,n as i,nt as a,p as ee,rt as o,u as s,v as c}from"./index-BIyMCMf-.js";import{t as l}from"./unsafe-html-CBce81BY.js";import{n as u,r as d,t as f}from"./leitura-Br0vb6wn.js";import{t as p}from"./compartilhar-D4Ir9B6Q.js";import{a as m,i as h,n as g,t as _}from"./acervo-lW84xSMO.js";var v=()=>e(`guias`),y=()=>e(`guias_local`);async function b(e){let[t,n]=await Promise.all([v().todos(),y().todos()]),r=g(t,n);return h(_(r,e,e=>[e.titulo,e.texto]))}function x(e,t){return(t?y():v()).obter(e)}function S(e){return y().salvar(e)}function C(e){return y().excluir(e)}function w(e){return(e?.texto??``).replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i,``)}var T=400,E=1200,D=[],O=``,k=null,A=!1,j=null,M,N=!1,P,F,I=new f;function L(){return document.querySelector(`kk-editor`)}function R(e){let t=L();t!==null&&(t.value=e)}async function z(){D=await b(O),n()}async function B(e,n){A=n,k=await x(e,n)??null,k===null&&t(`guias`)}async function V(e){if(e===null)j={id:null,titulo:``,texto:``,status:``};else{let n=await x(e,!0);if(n===void 0){t(`guias`);return}j={id:n.id??null,titulo:n.titulo,texto:n.texto,status:``}}n(),R(j.texto)}function H(e){let t=e.args.join(`/`);M===t||N||(M=t,N=!0,I.fechar(),(async()=>{try{let[t,n]=e.args;t===void 0?(k=null,j=null,await z()):t===`nova`?(k=null,await V(null)):t===`editar`?(k=null,await V(Number.parseInt(n??``,10))):t===`local`?(j=null,await B(Number.parseInt(n??``,10),!0)):(j=null,await B(Number.parseInt(t,10),!1))}finally{N=!1,n()}})())}function U(e){O=e,clearTimeout(P),P=setTimeout(()=>void z(),T)}function W(e){let n=u(e.texto,180);return r`
    <button
      class="cartao"
      @click=${()=>t(e.local?`guias/local/${e.id??``}`:`guias/${e.id??``}`)}
    >
      <span class="cartao__topo">
        <kk-icon class="cartao__icone" name="map-2"></kk-icon>
        <span class="cartao__titulo">${e.titulo||a.acervo.semTitulo}</span>
        ${e.local?r`<kk-badge variant="success" pill>${a.acervo.meu}</kk-badge>`:o}
      </span>

      ${n===``?o:r`<span class="cartao__previa">${n}</span>`}
    </button>
  `}function G(){return r`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${a.guias.buscar}
        .value=${O}
        @kk-input=${e=>U(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${D.length===0?r`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="map-2"></kk-icon>
            <p>${a.guias.vazio}</p>
          </div>
        `:r`<div class="cartoes">${D.map(e=>W(e))}</div>`}
  `}function K(e){return`${e.titulo}. ${w(e)}`}function q(e){return r`<div class="prosa">${l(i(w(e)))}</div>`}function J(e){return r`
    ${q(e)}
    ${I.overlay(r`
          <h1>${e.titulo}</h1>
          ${q(e)}
        `,()=>K(e))}
  `}async function Y(){let e=k?.id;e!==void 0&&A&&await ee({titulo:a.guias.excluir,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await C(e),s(a.guias.excluida),t(`guias`))}function X(){j!==null&&(j={...j,status:a.acervo.salvando},n(),clearTimeout(F),F=setTimeout(()=>void Z(),E))}async function Z(){if(j===null)return;if(j.titulo.trim()===``||m(j.texto)){j={...j,status:a.acervo.tituloEConteudo},n();return}let e=Date.now(),t=await S({titulo:j.titulo,texto:j.texto,publicar:0,data_atualizacao:e,...j.id===null?{data_criacao:e}:{id:j.id}});j.id===null&&(j={...j,id:t},history.replaceState(null,``,`#/guias/editar/${t}`)),j={...j,status:a.acervo.salvoAs(c(e))},n()}function Q(e){return r`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${a.guias.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{j={...e,titulo:t.target.value},X()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{j={...e,texto:t.detail.value},X()}}
      ></kk-editor>
    </div>
  `}function te(e){return r`
    ${I.botaoApresentar()}
    ${I.botaoFala(()=>K(e))}
    <kk-icon-button
      name="share"
      label=${a.leitura.compartilhar}
      @click=${()=>void p(e.titulo,d(w(e)))}
    ></kk-icon-button>
    ${A?r`
          <kk-icon-button
            name="pencil"
            label=${a.acoes.editar}
            @click=${()=>t(`guias/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${a.guias.excluir}
            @click=${()=>void Y()}
          ></kk-icon-button>
        `:o}
  `}var ne={voltarPara(e){return e.args.length===0?`home`:`guias`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=j?.titulo.trim()??``;return e===``?a.guias.novaTitulo:e}return k?.titulo}},acoes(e){let[n]=e.args;if(n===void 0)return r`
        <kk-icon-button
          name="plus"
          label=${a.guias.nova}
          @click=${()=>t(`guias/nova`)}
        ></kk-icon-button>
      `;if(n!==`nova`&&n!==`editar`)return k===null?void 0:te(k)},conteudo(e){H(e);let[t]=e.args;return t===void 0?G():t===`nova`||t===`editar`?j===null?$():Q(j):k===null?$():J(k)}};function $(){return r`<div class="carregando"><kk-spinner></kk-spinner></div>`}export{ne as telaGuias};