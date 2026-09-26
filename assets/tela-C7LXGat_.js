import{r as e,t}from"./leitura-CTOOy0QY.js";import{o as n,s as r}from"./banco-DhjAojIe.js";import{C as i,_t as a,bt as o,ft as s,g as c,m as l,mt as u,n as d,rt as f,w as p,xt as m,y as h}from"./index-tEHw1VqD.js";import{t as g}from"./texto-hE_APE8D.js";import{t as ee}from"./compartilhar-C4iBpIQ9.js";import{a as te,i as _,n as v}from"./acervo-mwj3Kh77.js";var y=()=>r(`guias`),b=()=>r(`guias_local`);async function x(e){let[t,r,i]=await Promise.all([y().todos(),b().todos(),n(`not_guias`,`not_guias_local`,e)]);return _(v(t,r,i))}function S(e,t){return(t?b():y()).obter(e)}function C(e){return b().salvar(e)}function w(e){return b().excluir(e)}function T(e){return(e?.texto??``).replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i,``)}var E=400,D=1200,O=[],k=``,A=null,j=!1,M=null,N,P=!1,F=null,I=null,L,R,z=new t;function B(){return document.querySelector(`kk-editor`)}function V(e){let t=B();t!==null&&(t.value=e)}async function H(){O=await x(k),s()}async function U(e,t){j=t,A=await S(e,t)??null,A===null&&u(`guias`)}async function W(e){if(e===null)M={id:null,titulo:``,texto:``,status:``};else{let t=await S(e,!0);if(t===void 0){u(`guias`);return}M={id:t.id??null,titulo:t.titulo,texto:t.texto,status:``}}s(),V(M.texto)}function G(e){let t=e.args.join(`/`);N===t||P||F!==null||(N=t,P=!0,z.fechar(),(async()=>{try{let[t,n]=e.args;t===void 0?(A=null,M=null,await H()):t===`nova`?(A=null,await W(null)):t===`editar`?(A=null,await W(Number.parseInt(n??``,10))):t===`local`?(M=null,await U(Number.parseInt(n??``,10),!0)):(M=null,await U(Number.parseInt(t,10),!1))}catch(t){console.error(`guias: a carga falhou.`,t),F=p(t),I=e}finally{P=!1,s()}})())}function K(){let e=I;F=null,I=null,N=void 0,e!==null&&G(e),s()}function q(e){k=e,clearTimeout(L),L=setTimeout(()=>void H(),E)}function J(e){let t=g(e.texto,180);return m`
    <button
      class="cartao"
      @click=${()=>u(e.local?`guias/local/${e.id??``}`:`guias/${e.id??``}`)}
    >
      <span class="cartao__topo">
        <kk-icon class="cartao__icone" name="map-2"></kk-icon>
        <span class="cartao__titulo">${e.titulo||a.acervo.semTitulo}</span>
        ${e.local?m`<kk-badge variant="success" pill>${a.acervo.meu}</kk-badge>`:o}
      </span>

      ${t===``?o:m`<span class="cartao__previa">${t}</span>`}
    </button>
  `}function Y(){return m`
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

    ${O.length===0?m`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="map-2"></kk-icon>
            <p>${a.guias.vazio}</p>
          </div>
        `:m`<div class="cartoes">${O.map(e=>J(e))}</div>`}
  `}function X(e){return`${e.titulo}. ${T(e)}`}function Z(e){return m`<div class="prosa">${h(d(T(e)))}</div>`}function ne(e){return m`
    ${Z(e)}
    ${z.overlay(m`
          <h1>${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function re(){let e=A?.id;e!==void 0&&j&&await c({titulo:a.guias.excluir,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await w(e),l(a.guias.excluida),u(`guias`))}function Q(){M!==null&&(M={...M,status:a.acervo.salvando},s(),clearTimeout(R),R=setTimeout(()=>void ie(),D))}async function ie(){if(M===null)return;if(M.titulo.trim()===``||te(M.texto)){M={...M,status:a.acervo.tituloEConteudo},s();return}let e=Date.now(),t=await C({titulo:M.titulo,texto:M.texto,publicar:0,data_atualizacao:e,...M.id===null?{data_criacao:e}:{id:M.id}});M.id===null&&(M={...M,id:t},history.replaceState(null,``,`#/guias/editar/${t}`)),M={...M,status:a.acervo.salvoAs(f(e))},s()}function ae(e){return m`
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
  `}function oe(t){return m`
    ${z.botaoApresentar()}
    ${z.botaoFala(()=>X(t))}
    <kk-icon-button
      name="share"
      label=${a.leitura.compartilhar}
      @click=${()=>void ee(t.titulo,e(T(t)))}
    ></kk-icon-button>
    ${j?m`
          <kk-icon-button
            name="pencil"
            label=${a.acoes.editar}
            @click=${()=>u(`guias/editar/${t.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${a.guias.excluir}
            @click=${()=>void re()}
          ></kk-icon-button>
        `:o}
  `}var se={voltarPara(e){return e.args.length===0?`home`:`guias`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=M?.titulo.trim()??``;return e===``?a.guias.novaTitulo:e}return A?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return m`
        <kk-icon-button
          name="plus"
          label=${a.guias.nova}
          @click=${()=>u(`guias/nova`)}
        ></kk-icon-button>
      `;if(t!==`nova`&&t!==`editar`)return A===null?void 0:oe(A)},conteudo(e){if(G(e),F!==null)return i(F,K);let[t]=e.args;return t===void 0?Y():t===`nova`||t===`editar`?M===null?$():ae(M):A===null?$():ne(A)}};function $(){return m`<div class="carregando"><kk-spinner></kk-spinner></div>`}export{se as telaGuias};