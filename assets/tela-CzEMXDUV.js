import{a as e}from"./banco-u8JVNTlT.js";import{$ as t,Q as n,at as r,n as i,nt as a,p as o,rt as s,u as c,v as l}from"./index-BIyMCMf-.js";import{alternarFavorito as u,chaveFavorito as d,lerFavoritos as f}from"./favoritos-DAEWA_Gd.js";import{t as ee}from"./unsafe-html-CBce81BY.js";import{n as te,r as p,t as m}from"./leitura-Br0vb6wn.js";import{t as h}from"./compartilhar-D4Ir9B6Q.js";import{a as g,n as _,r as v,t as y}from"./acervo-lW84xSMO.js";var b=()=>e(`poesias`),x=()=>e(`poesias_local`),S=`note_fav_poesias`;async function C(e,t){let[n,r]=await Promise.all([b().todos(),x().todos()]),i=_(n,r),a=y(i,e,e=>[e.titulo,e.conteudo]);return v(a,t)}function w(e,t){return(t?x():b()).obter(e)}function T(e){return x().salvar(e)}function ne(e){return x().excluir(e)}function E(e){let t=e?.conteudo??``,n=/<p[^>]*>(?:\s|&nbsp;)*<img[^>]*>(?:\s|&nbsp;)*<\/p>/i;return n.test(t)?t.replace(n,``):t.replace(/<img[^>]*>/i,``)}function D(e){let t=e.conteudo?.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi)??[],n=/<img\s/i.test(t[0]??``),r=/^<p[^>]*>\s*(?:<em>\s*)?[“"]/i.test(t[1]??``);return n&&r?p(t[1]??``):te(e.conteudo,180)}var re=400,ie=1200,O=[],k=``,A=new Set,j=!1,M=!1,N=null,P=!1,F=null,I,L=!1,R,z,B=new m;function V(){return document.querySelector(`kk-editor`)}function H(e){let t=V();t!==null&&(t.value=e)}function U(e,t){return d(t?`local`:`curado`,e.id)}function W(e,t){return A.has(U(e,t))}async function G(e,t){A=u(S,A,U(e,t)),N===null?await K():n()}async function K(){O=await C(k,e=>W(e,e.local)),n()}async function q(e,n){P=n,N=await w(e,n)??null,N===null&&t(`poesia`)}async function J(e){if(e===null)F={id:null,titulo:``,conteudo:``,status:``};else{let n=await w(e,!0);if(n===void 0){t(`poesia`);return}F={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,status:``}}n(),H(F.conteudo)}function Y(e){let t=e.args.join(`/`);I===t||L||(I=t,L=!0,B.fechar(),j||=(A=f(S),!0),(async()=>{try{let[t,n]=e.args;t===void 0?(N=null,F=null,await K()):t===`nova`?(N=null,await J(null)):t===`editar`?(N=null,await J(Number.parseInt(n??``,10))):t===`local`?(F=null,await q(Number.parseInt(n??``,10),!0)):(F=null,await q(Number.parseInt(t,10),!1))}finally{L=!1,n()}})())}function ae(e){k=e,clearTimeout(R),R=setTimeout(()=>void K(),re)}function oe(e){let n=W(e,e.local);return r`
    <div class="cartao cartao--com-acao" ?data-favorito=${n}>
      <button
        class="cartao__alvo"
        @click=${()=>t(e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${e.titulo||a.acervo.semTitulo}
          </span>
          ${e.local?r`<kk-badge variant="success" pill>${a.acervo.meu}</kk-badge>`:s}
        </span>
        <span class="cartao__previa">${D(e)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?a.poesia.desfavoritar:a.poesia.favoritar}
        @click=${()=>void G(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function se(){return r`
    ${M?r`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${a.poesia.aviso.map(e=>r`<p>${e}</p>`)}
          </kk-alert>
        `:s}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${a.poesia.buscar}
        .value=${k}
        @kk-input=${e=>ae(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${O.length===0?r`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${a.poesia.vazio}</p>
          </div>
        `:r`<div class="cartoes cartoes--duas">${O.map(e=>oe(e))}</div>`}
  `}function X(e){return`${e.titulo}. ${E(e)}`}function Z(e){return r`
    <div class="prosa prosa--verso">    
    ${ee(i(E(e)))}
    </div>
  `}function Q(e){return r`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${Z(e)}

    ${P?s:r`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!e.anterior_id}
              @click=${()=>t(`poesia/${e.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${a.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!e.proximo_id}
              @click=${()=>t(`poesia/${e.proximo_id??``}`)}
            >
              ${a.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${B.overlay(r`
          <h1 class="titulo--serif">${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function ce(){let e=N?.id;e!==void 0&&P&&await o({titulo:a.poesia.excluir,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await ne(e),c(a.poesia.excluida),t(`poesia`))}function $(){F!==null&&(F={...F,status:a.acervo.salvando},n(),clearTimeout(z),z=setTimeout(()=>void le(),ie))}async function le(){if(F===null)return;if(F.titulo.trim()===``||g(F.conteudo)){F={...F,status:a.acervo.tituloEConteudo},n();return}let e=Date.now(),t=await T({titulo:F.titulo,conteudo:F.conteudo,publicar:0,data_atualizacao:e,...F.id===null?{data_criacao:e}:{id:F.id}});F.id===null&&(F={...F,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),F={...F,status:a.acervo.salvoAs(l(e))},n()}function ue(e){return r`
    <div class="editor">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${a.poesia.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{F={...e,titulo:t.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{F={...e,conteudo:t.detail.value},$()}}
      ></kk-editor>
    </div>
  `}function de(){return r`
    <kk-icon-button
      name="info-circle"
      label=${a.poesia.sobre}
      @click=${()=>{M=!M,n()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${a.poesia.nova}
      @click=${()=>t(`poesia/nova`)}
    ></kk-icon-button>
  `}function fe(e){let n=W(e,P);return r`
    <kk-icon-button
      name="star"
      variant=${n?`filled`:`outline`}
      label=${n?a.poesia.desfavoritar:a.poesia.favoritar}
      @click=${()=>void G(e,P)}
    ></kk-icon-button>
    ${B.botaoApresentar()}
    ${B.botaoFala(()=>X(e))}
    <kk-icon-button
      name="share"
      label=${a.leitura.compartilhar}
      @click=${()=>void h(e.titulo,p(E(e)))}
    ></kk-icon-button>
    ${P?r`
          <kk-icon-button
            name="pencil"
            label=${a.acoes.editar}
            @click=${()=>t(`poesia/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${a.poesia.excluir}
            @click=${()=>void ce()}
          ></kk-icon-button>
        `:s}
  `}var pe={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=F?.titulo.trim()??``;return e===``?a.poesia.novaTitulo:e}return N?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return de();if(t!==`nova`&&t!==`editar`)return N===null?void 0:fe(N)},conteudo(e){Y(e);let[t]=e.args;return t===void 0?se():t===`nova`||t===`editar`?F===null?r`<div class="carregando"><kk-spinner></kk-spinner></div>`:ue(F):N===null?r`<div class="carregando"><kk-spinner></kk-spinner></div>`:Q(N)}};export{pe as telaPoesia};