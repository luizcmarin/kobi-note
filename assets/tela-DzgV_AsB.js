import{o as e,s as t}from"./banco-WSl22mr6.js";import{n,r}from"./texto-DhKYsM3f.js";import{J as i,at as a,g as o,lt as s,m as c,n as l,nt as u,st as d,tt as f,v as p,y as m}from"./index-D0n52eAb.js";import{t as h}from"./unsafe-html-C_000-wi.js";import{t as g}from"./leitura-BGXwNh36.js";import{t as ee}from"./compartilhar-BcYtsMyG.js";import{a as te,i as _,n as v}from"./acervo-mwj3Kh77.js";var y=()=>t(`guias`),b=()=>t(`guias_local`);async function x(t){let[n,r,i]=await Promise.all([y().todos(),b().todos(),e(`not_guias`,`not_guias_local`,t)]);return _(v(n,r,i))}function S(e,t){return(t?b():y()).obter(e)}function C(e){return b().salvar(e)}function w(e){return b().excluir(e)}function T(e){return(e?.texto??``).replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i,``)}var E=400,D=1200,O=[],k=``,A=null,j=!1,M=null,N,P=!1,F=null,I=null,L,R,z=new g;function B(){return document.querySelector(`kk-editor`)}function V(e){let t=B();t!==null&&(t.value=e)}async function H(){O=await x(k),f()}async function U(e,t){j=t,A=await S(e,t)??null,A===null&&u(`guias`)}async function W(e){if(e===null)M={id:null,titulo:``,texto:``,status:``};else{let t=await S(e,!0);if(t===void 0){u(`guias`);return}M={id:t.id??null,titulo:t.titulo,texto:t.texto,status:``}}f(),V(M.texto)}function G(e){let t=e.args.join(`/`);N===t||P||F!==null||(N=t,P=!0,z.fechar(),(async()=>{try{let[t,n]=e.args;t===void 0?(A=null,M=null,await H()):t===`nova`?(A=null,await W(null)):t===`editar`?(A=null,await W(Number.parseInt(n??``,10))):t===`local`?(M=null,await U(Number.parseInt(n??``,10),!0)):(M=null,await U(Number.parseInt(t,10),!1))}catch(t){console.error(`guias: a carga falhou.`,t),F=m(t),I=e}finally{P=!1,f()}})())}function K(){let e=I;F=null,I=null,N=void 0,e!==null&&G(e),f()}function q(e){k=e,clearTimeout(L),L=setTimeout(()=>void H(),E)}function J(e){let t=n(e.texto,180);return s`
    <button
      class="cartao"
      @click=${()=>u(e.local?`guias/local/${e.id??``}`:`guias/${e.id??``}`)}
    >
      <span class="cartao__topo">
        <kk-icon class="cartao__icone" name="map-2"></kk-icon>
        <span class="cartao__titulo">${e.titulo||a.acervo.semTitulo}</span>
        ${e.local?s`<kk-badge variant="success" pill>${a.acervo.meu}</kk-badge>`:d}
      </span>

      ${t===``?d:s`<span class="cartao__previa">${t}</span>`}
    </button>
  `}function Y(){return s`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${a.guias.buscar}
        .value=${k}
        @kk-input=${e=>q(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${O.length===0?s`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="map-2"></kk-icon>
            <p>${a.guias.vazio}</p>
          </div>
        `:s`<div class="cartoes">${O.map(e=>J(e))}</div>`}
  `}function X(e){return`${e.titulo}. ${T(e)}`}function Z(e){return s`<div class="prosa">${h(l(T(e)))}</div>`}function ne(e){return s`
    ${Z(e)}
    ${z.overlay(s`
          <h1>${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function re(){let e=A?.id;e!==void 0&&j&&await o({titulo:a.guias.excluir,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await w(e),c(a.guias.excluida),u(`guias`))}function Q(){M!==null&&(M={...M,status:a.acervo.salvando},f(),clearTimeout(R),R=setTimeout(()=>void ie(),D))}async function ie(){if(M===null)return;if(M.titulo.trim()===``||te(M.texto)){M={...M,status:a.acervo.tituloEConteudo},f();return}let e=Date.now(),t=await C({titulo:M.titulo,texto:M.texto,publicar:0,data_atualizacao:e,...M.id===null?{data_criacao:e}:{id:M.id}});M.id===null&&(M={...M,id:t},history.replaceState(null,``,`#/guias/editar/${t}`)),M={...M,status:a.acervo.salvoAs(i(e))},f()}function ae(e){return s`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo"
        placeholder=${a.guias.tituloPlaceholder}
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
  `}function oe(e){return s`
    ${z.botaoApresentar()}
    ${z.botaoFala(()=>X(e))}
    <kk-icon-button
      name="share"
      label=${a.leitura.compartilhar}
      @click=${()=>void ee(e.titulo,r(T(e)))}
    ></kk-icon-button>
    ${j?s`
          <kk-icon-button
            name="pencil"
            label=${a.acoes.editar}
            @click=${()=>u(`guias/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${a.guias.excluir}
            @click=${()=>void re()}
          ></kk-icon-button>
        `:d}
  `}var se={voltarPara(e){return e.args.length===0?`home`:`guias`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=M?.titulo.trim()??``;return e===``?a.guias.novaTitulo:e}return A?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return s`
        <kk-icon-button
          name="plus"
          label=${a.guias.nova}
          @click=${()=>u(`guias/nova`)}
        ></kk-icon-button>
      `;if(t!==`nova`&&t!==`editar`)return A===null?void 0:oe(A)},conteudo(e){if(G(e),F!==null)return p(F,K);let[t]=e.args;return t===void 0?Y():t===`nova`||t===`editar`?M===null?$():ae(M):A===null?$():ne(A)}};function $(){return s`<div class="carregando"><kk-spinner></kk-spinner></div>`}export{se as telaGuias};