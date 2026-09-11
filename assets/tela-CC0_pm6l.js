import{c as e,s as t}from"./banco-CsCRyC2b.js";import{n,r}from"./texto-DhKYsM3f.js";import{Q as i,S as a,at as o,ct as s,ft as c,h as l,it as u,n as d,u as f,ut as p,x as m}from"./index-BBOYxO_i.js";import{t as h}from"./unsafe-html-CwwQ3etq.js";import{t as g}from"./leitura-BsLIk1kE.js";import{t as ee}from"./compartilhar-ByzKQFji.js";import{a as te,i as _,n as v}from"./acervo-mwj3Kh77.js";var y=()=>e(`guias`),b=()=>e(`guias_local`);async function x(e){let[n,r,i]=await Promise.all([y().todos(),b().todos(),t(`not_guias`,`not_guias_local`,e)]);return _(v(n,r,i))}function S(e,t){return(t?b():y()).obter(e)}function C(e){return b().salvar(e)}function w(e){return b().excluir(e)}function T(e){return(e?.texto??``).replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i,``)}var E=400,D=1200,O=[],k=``,A=null,j=!1,M=null,N,P=!1,F=null,I=null,L,R,z=new g;function B(){return document.querySelector(`kk-editor`)}function V(e){let t=B();t!==null&&(t.value=e)}async function H(){O=await x(k),u()}async function U(e,t){j=t,A=await S(e,t)??null,A===null&&o(`guias`)}async function W(e){if(e===null)M={id:null,titulo:``,texto:``,status:``};else{let t=await S(e,!0);if(t===void 0){o(`guias`);return}M={id:t.id??null,titulo:t.titulo,texto:t.texto,status:``}}u(),V(M.texto)}function G(e){let t=e.args.join(`/`);N===t||P||F!==null||(N=t,P=!0,z.fechar(),(async()=>{try{let[t,n]=e.args;t===void 0?(A=null,M=null,await H()):t===`nova`?(A=null,await W(null)):t===`editar`?(A=null,await W(Number.parseInt(n??``,10))):t===`local`?(M=null,await U(Number.parseInt(n??``,10),!0)):(M=null,await U(Number.parseInt(t,10),!1))}catch(t){console.error(`guias: a carga falhou.`,t),F=a(t),I=e}finally{P=!1,u()}})())}function K(){let e=I;F=null,I=null,N=void 0,e!==null&&G(e),u()}function q(e){k=e,clearTimeout(L),L=setTimeout(()=>void H(),E)}function J(e){let t=n(e.texto,180);return c`
    <button
      class="cartao"
      @click=${()=>o(e.local?`guias/local/${e.id??``}`:`guias/${e.id??``}`)}
    >
      <span class="cartao__topo">
        <kk-icon class="cartao__icone" name="map-2"></kk-icon>
        <span class="cartao__titulo">${e.titulo||s.acervo.semTitulo}</span>
        ${e.local?c`<kk-badge variant="success" pill>${s.acervo.meu}</kk-badge>`:p}
      </span>

      ${t===``?p:c`<span class="cartao__previa">${t}</span>`}
    </button>
  `}function Y(){return c`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${s.guias.buscar}
        .value=${k}
        @kk-input=${e=>q(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${O.length===0?c`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="map-2"></kk-icon>
            <p>${s.guias.vazio}</p>
          </div>
        `:c`<div class="cartoes">${O.map(e=>J(e))}</div>`}
  `}function X(e){return`${e.titulo}. ${T(e)}`}function Z(e){return c`<div class="prosa">${h(d(T(e)))}</div>`}function ne(e){return c`
    ${Z(e)}
    ${z.overlay(c`
          <h1>${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function re(){let e=A?.id;e!==void 0&&j&&await l({titulo:s.guias.excluir,texto:s.acervo.excluirTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})&&(await w(e),f(s.guias.excluida),o(`guias`))}function Q(){M!==null&&(M={...M,status:s.acervo.salvando},u(),clearTimeout(R),R=setTimeout(()=>void ie(),D))}async function ie(){if(M===null)return;if(M.titulo.trim()===``||te(M.texto)){M={...M,status:s.acervo.tituloEConteudo},u();return}let e=Date.now(),t=await C({titulo:M.titulo,texto:M.texto,publicar:0,data_atualizacao:e,...M.id===null?{data_criacao:e}:{id:M.id}});M.id===null&&(M={...M,id:t},history.replaceState(null,``,`#/guias/editar/${t}`)),M={...M,status:s.acervo.salvoAs(i(e))},u()}function ae(e){return c`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo"
        placeholder=${s.guias.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{M={...e,titulo:t.target.value},Q()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{M={...e,texto:t.detail.value},Q()}}
      ></kk-editor>
    </div>
  `}function oe(e){return c`
    ${z.botaoApresentar()}
    ${z.botaoFala(()=>X(e))}
    <kk-icon-button
      name="share"
      label=${s.leitura.compartilhar}
      @click=${()=>void ee(e.titulo,r(T(e)))}
    ></kk-icon-button>
    ${j?c`
          <kk-icon-button
            name="pencil"
            label=${s.acoes.editar}
            @click=${()=>o(`guias/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${s.guias.excluir}
            @click=${()=>void re()}
          ></kk-icon-button>
        `:p}
  `}var se={voltarPara(e){return e.args.length===0?`home`:`guias`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=M?.titulo.trim()??``;return e===``?s.guias.novaTitulo:e}return A?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return c`
        <kk-icon-button
          name="plus"
          label=${s.guias.nova}
          @click=${()=>o(`guias/nova`)}
        ></kk-icon-button>
      `;if(t!==`nova`&&t!==`editar`)return A===null?void 0:oe(A)},conteudo(e){if(G(e),F!==null)return m(F,K);let[t]=e.args;return t===void 0?Y():t===`nova`||t===`editar`?M===null?$():ae(M):A===null?$():ne(A)}};function $(){return c`<div class="carregando"><kk-spinner></kk-spinner></div>`}export{se as telaGuias};