import{o as e,s as t}from"./banco-DT6T_b91.js";import{n,r}from"./texto-DhKYsM3f.js";import{E as i,T as a,ct as o,et as s,it as c,n as l,ot as u,p as d,tt as f,u as p,y as m}from"./index-CUq-xowH.js";import{t as h}from"./unsafe-html-C4j4ejq_.js";import{t as g}from"./leitura-JJX3EDLA.js";import{t as ee}from"./compartilhar-DP5Lr6k_.js";import{a as te,i as _,n as v}from"./acervo-mwj3Kh77.js";var y=()=>t(`guias`),b=()=>t(`guias_local`);async function x(t){let[n,r,i]=await Promise.all([y().todos(),b().todos(),e(`not_guias`,`not_guias_local`,t)]);return _(v(n,r,i))}function S(e,t){return(t?b():y()).obter(e)}function C(e){return b().salvar(e)}function w(e){return b().excluir(e)}function T(e){return(e?.texto??``).replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i,``)}var E=400,D=1200,O=[],k=``,A=null,j=!1,M=null,N,P=!1,F=null,I=null,L,R,z=new g;function B(){return document.querySelector(`kk-editor`)}function V(e){let t=B();t!==null&&(t.value=e)}async function H(){O=await x(k),s()}async function U(e,t){j=t,A=await S(e,t)??null,A===null&&f(`guias`)}async function W(e){if(e===null)M={id:null,titulo:``,texto:``,status:``};else{let t=await S(e,!0);if(t===void 0){f(`guias`);return}M={id:t.id??null,titulo:t.titulo,texto:t.texto,status:``}}s(),V(M.texto)}function G(e){let t=e.args.join(`/`);N===t||P||F!==null||(N=t,P=!0,z.fechar(),(async()=>{try{let[t,n]=e.args;t===void 0?(A=null,M=null,await H()):t===`nova`?(A=null,await W(null)):t===`editar`?(A=null,await W(Number.parseInt(n??``,10))):t===`local`?(M=null,await U(Number.parseInt(n??``,10),!0)):(M=null,await U(Number.parseInt(t,10),!1))}catch(t){console.error(`guias: a carga falhou.`,t),F=i(t),I=e}finally{P=!1,s()}})())}function K(){let e=I;F=null,I=null,N=void 0,e!==null&&G(e),s()}function q(e){k=e,clearTimeout(L),L=setTimeout(()=>void H(),E)}function J(e){let t=n(e.texto,180);return o`
    <button
      class="cartao"
      @click=${()=>f(e.local?`guias/local/${e.id??``}`:`guias/${e.id??``}`)}
    >
      <span class="cartao__topo">
        <kk-icon class="cartao__icone" name="map-2"></kk-icon>
        <span class="cartao__titulo">${e.titulo||c.acervo.semTitulo}</span>
        ${e.local?o`<kk-badge variant="success" pill>${c.acervo.meu}</kk-badge>`:u}
      </span>

      ${t===``?u:o`<span class="cartao__previa">${t}</span>`}
    </button>
  `}function Y(){return o`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${c.guias.buscar}
        .value=${k}
        @kk-input=${e=>q(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${O.length===0?o`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="map-2"></kk-icon>
            <p>${c.guias.vazio}</p>
          </div>
        `:o`<div class="cartoes">${O.map(e=>J(e))}</div>`}
  `}function X(e){return`${e.titulo}. ${T(e)}`}function Z(e){return o`<div class="prosa">${h(l(T(e)))}</div>`}function ne(e){return o`
    ${Z(e)}
    ${z.overlay(o`
          <h1>${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function re(){let e=A?.id;e!==void 0&&j&&await d({titulo:c.guias.excluir,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&(await w(e),p(c.guias.excluida),f(`guias`))}function Q(){M!==null&&(M={...M,status:c.acervo.salvando},s(),clearTimeout(R),R=setTimeout(()=>void ie(),D))}async function ie(){if(M===null)return;if(M.titulo.trim()===``||te(M.texto)){M={...M,status:c.acervo.tituloEConteudo},s();return}let e=Date.now(),t=await C({titulo:M.titulo,texto:M.texto,publicar:0,data_atualizacao:e,...M.id===null?{data_criacao:e}:{id:M.id}});M.id===null&&(M={...M,id:t},history.replaceState(null,``,`#/guias/editar/${t}`)),M={...M,status:c.acervo.salvoAs(m(e))},s()}function ae(e){return o`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${c.guias.tituloPlaceholder}
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
  `}function oe(e){return o`
    ${z.botaoApresentar()}
    ${z.botaoFala(()=>X(e))}
    <kk-icon-button
      name="share"
      label=${c.leitura.compartilhar}
      @click=${()=>void ee(e.titulo,r(T(e)))}
    ></kk-icon-button>
    ${j?o`
          <kk-icon-button
            name="pencil"
            label=${c.acoes.editar}
            @click=${()=>f(`guias/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${c.guias.excluir}
            @click=${()=>void re()}
          ></kk-icon-button>
        `:u}
  `}var se={voltarPara(e){return e.args.length===0?`home`:`guias`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=M?.titulo.trim()??``;return e===``?c.guias.novaTitulo:e}return A?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return o`
        <kk-icon-button
          name="plus"
          label=${c.guias.nova}
          @click=${()=>f(`guias/nova`)}
        ></kk-icon-button>
      `;if(t!==`nova`&&t!==`editar`)return A===null?void 0:oe(A)},conteudo(e){if(G(e),F!==null)return a(F,K);let[t]=e.args;return t===void 0?Y():t===`nova`||t===`editar`?M===null?$():ae(M):A===null?$():ne(A)}};function $(){return o`<div class="carregando"><kk-spinner></kk-spinner></div>`}export{se as telaGuias};