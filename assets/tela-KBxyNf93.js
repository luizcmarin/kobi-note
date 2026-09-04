import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r}from"./banco-u8JVNTlT.js";import{r as i}from"./data-DRe9t3tD.js";import{D as a,E as o,n as s,o as c,r as l}from"./index-QyzyfOkc.js";import{alternarFavorito as u,chaveFavorito as d,lerFavoritos as f}from"./favoritos-DAEWA_Gd.js";import{t as ee}from"./unsafe-html-BBiWdB6b.js";import{n as te,r as p,t as m}from"./leitura-Dlv1ocwB.js";import{t as h}from"./compartilhar-DUlQMi6E.js";import{a as g,n as _,r as v,t as y}from"./acervo-lW84xSMO.js";var b=()=>r(`poesias`),x=()=>r(`poesias_local`),S=`note_fav_poesias`;async function C(e,t){let[n,r]=await Promise.all([b().todos(),x().todos()]),i=_(n,r),a=y(i,e,e=>[e.titulo,e.conteudo]);return v(a,t)}function w(e,t){return(t?x():b()).obter(e)}function T(e){return x().salvar(e)}function ne(e){return x().excluir(e)}function E(e){let t=e?.conteudo??``,n=/<p[^>]*>(?:\s|&nbsp;)*<img[^>]*>(?:\s|&nbsp;)*<\/p>/i;return n.test(t)?t.replace(n,``):t.replace(/<img[^>]*>/i,``)}function D(e){let t=e.conteudo?.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi)??[],n=/<img\s/i.test(t[0]??``),r=/^<p[^>]*>\s*(?:<em>\s*)?[“"]/i.test(t[1]??``);return n&&r?p(t[1]??``):te(e.conteudo,180)}var re=400,ie=1200,O=[],k=``,A=new Set,j=!1,M=!1,N=null,P=!1,F=null,I,L=!1,R,z,B=new m;function V(){return document.querySelector(`kk-editor`)}function H(e){let t=V();t!==null&&(t.value=e)}function U(e,t){return d(t?`local`:`curado`,e.id)}function W(e,t){return A.has(U(e,t))}async function G(e,t){A=u(S,A,U(e,t)),N===null?await K():o()}async function K(){O=await C(k,e=>W(e,e.local)),o()}async function q(e,t){P=t,N=await w(e,t)??null,N===null&&a(`poesia`)}async function J(e){if(e===null)F={id:null,titulo:``,conteudo:``,status:``};else{let t=await w(e,!0);if(t===void 0){a(`poesia`);return}F={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}o(),H(F.conteudo)}function Y(e){let t=e.args.join(`/`);I===t||L||(I=t,L=!0,B.fechar(),j||=(A=f(S),!0),(async()=>{try{let[t,n]=e.args;t===void 0?(N=null,F=null,await K()):t===`nova`?(N=null,await J(null)):t===`editar`?(N=null,await J(Number.parseInt(n??``,10))):t===`local`?(F=null,await q(Number.parseInt(n??``,10),!0)):(F=null,await q(Number.parseInt(t,10),!1))}finally{L=!1,o()}})())}function ae(e){k=e,clearTimeout(R),R=setTimeout(()=>void K(),re)}function oe(r){let i=W(r,r.local);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${i}>
      <button
        class="cartao__alvo"
        @click=${()=>a(r.local?`poesia/local/${r.id??``}`:`poesia/${r.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${r.titulo||n.acervo.semTitulo}
          </span>
          ${r.local?e`<kk-badge variant="success" pill>${n.acervo.meu}</kk-badge>`:t}
        </span>
        <span class="cartao__previa">${D(r)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${i?`filled`:`outline`}
        label=${i?n.poesia.desfavoritar:n.poesia.favoritar}
        @click=${()=>void G(r,r.local)}
      ></kk-icon-button>
    </div>
  `}function se(){return e`
    ${M?e`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${n.poesia.aviso.map(t=>e`<p>${t}</p>`)}
          </kk-alert>
        `:t}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.poesia.buscar}
        .value=${k}
        @kk-input=${e=>ae(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${O.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${n.poesia.vazio}</p>
          </div>
        `:e`<div class="cartoes cartoes--duas">${O.map(e=>oe(e))}</div>`}
  `}function X(e){return`${e.titulo}. ${E(e)}`}function Z(t){return e`
    <div class="prosa prosa--verso">    
    ${ee(s(E(t)))}
    </div>
  `}function Q(r){return e`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${Z(r)}

    ${P?t:e`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!r.anterior_id}
              @click=${()=>a(`poesia/${r.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${n.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!r.proximo_id}
              @click=${()=>a(`poesia/${r.proximo_id??``}`)}
            >
              ${n.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${B.overlay(e`
          <h1 class="titulo--serif">${r.titulo}</h1>
          ${Z(r)}
        `,()=>X(r))}
  `}async function ce(){let e=N?.id;e===void 0||!P||await c({titulo:n.poesia.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await ne(e),l(n.poesia.excluida),a(`poesia`))}function $(){F!==null&&(F={...F,status:n.acervo.salvando},o(),clearTimeout(z),z=setTimeout(()=>void le(),ie))}async function le(){if(F===null)return;if(F.titulo.trim()===``||g(F.conteudo)){F={...F,status:n.acervo.tituloEConteudo},o();return}let e=Date.now(),t=await T({titulo:F.titulo,conteudo:F.conteudo,publicar:0,data_atualizacao:e,...F.id===null?{data_criacao:e}:{id:F.id}});F.id===null&&(F={...F,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),F={...F,status:n.acervo.salvoAs(i(e))},o()}function ue(t){return e`
    <div class="editor">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${n.poesia.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{F={...t,titulo:e.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${t.status}</span>
      </div>

      <kk-editor
        @kk-input=${e=>{F={...t,conteudo:e.detail.value},$()}}
      ></kk-editor>
    </div>
  `}function de(){return e`
    <kk-icon-button
      name="info-circle"
      label=${n.poesia.sobre}
      @click=${()=>{M=!M,o()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${n.poesia.nova}
      @click=${()=>a(`poesia/nova`)}
    ></kk-icon-button>
  `}function fe(r){let i=W(r,P);return e`
    <kk-icon-button
      name="star"
      variant=${i?`filled`:`outline`}
      label=${i?n.poesia.desfavoritar:n.poesia.favoritar}
      @click=${()=>void G(r,P)}
    ></kk-icon-button>
    ${B.botaoApresentar()}
    ${B.botaoFala(()=>X(r))}
    <kk-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void h(r.titulo,p(E(r)))}
    ></kk-icon-button>
    ${P?e`
          <kk-icon-button
            name="pencil"
            label=${n.acoes.editar}
            @click=${()=>a(`poesia/editar/${r.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${n.poesia.excluir}
            @click=${()=>void ce()}
          ></kk-icon-button>
        `:t}
  `}var pe={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=F?.titulo.trim()??``;return e===``?n.poesia.novaTitulo:e}return N?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return de();if(t!==`nova`&&t!==`editar`)return N===null?void 0:fe(N)},conteudo(t){Y(t);let[n]=t.args;return n===void 0?se():n===`nova`||n===`editar`?F===null?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:ue(F):N===null?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:Q(N)}};export{pe as telaPoesia};