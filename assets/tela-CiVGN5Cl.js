import{$ as e,Q as t,at as n,n as r,nt as i,p as a,rt as o,u as s,v as c}from"./index-BIyMCMf-.js";import{alternarFavorito as l,chaveFavorito as u,lerFavoritos as d}from"./favoritos-DAEWA_Gd.js";import{t as f}from"./unsafe-html-CBce81BY.js";import{r as p,t as ee}from"./leitura-Br0vb6wn.js";import{t as m}from"./compartilhar-D4Ir9B6Q.js";import{o as h}from"./acervo-lW84xSMO.js";import{CATEGORIAS as g,CHAVE_FAVORITOS as _,excluirReceita as v,listarReceitas as y,obterReceita as b,salvarReceita as x}from"./dados-kvD4k07A.js";var S=400,C=1200,w=[],T=[],E=``,D=``,O=new Set,k=!1,A=null,j=!1,M=null,N,P=!1,F,I,L=new ee;function R(e,t){return u(t?`local`:`curado`,e.id)}function z(e,t){return O.has(R(e,t))}function B(e,n){O=l(_,O,R(e,n)),t()}async function V(){let e=await y(E,D);w=e.itens,T=e.categorias,t()}async function H(t,n){j=n,A=await b(t,n)??null,A===null&&e(`receitas`)}async function U(n,r){if(n===null){M={id:null,local:!0,titulo:``,categoria:g[0]??``,ingredientes:``,instrucoes:``,status:``},t();return}let i=await b(n,r);if(i===void 0){e(`receitas`);return}M={id:i.id??null,local:r,titulo:i.titulo,categoria:i.categoria||(g[0]??``),ingredientes:i.ingredientes,instrucoes:i.instrucoes,status:``},t()}function W(e){let n=e.args.join(`/`);N===n||P||(N=n,P=!0,L.fechar(),k||=(O=d(_),!0),(async()=>{try{let[t,n]=e.args,r=Number.parseInt(n??``,10);t===void 0?(A=null,M=null,await V()):t===`nova`?(A=null,await U(null,!0)):t===`editar`?(A=null,await U(r,!0)):t===`editar-curada`?(A=null,await U(r,!1)):t===`local`?(M=null,await H(r,!0)):(M=null,await H(Number.parseInt(t,10),!1))}finally{P=!1,t()}})())}function G(e){let[t]=e.args;return t===`nova`||t===`editar`||t===`editar-curada`}function K(e){E=e,clearTimeout(F),F=setTimeout(()=>void V(),S)}function q(e){D=D===e?``:e,V()}function J(t){let r=z(t,t.local);return n`
    <div class="cartao cartao--com-acao" ?data-favorito=${r}>
      <button
        class="cartao__alvo"
        @click=${()=>e(t.local?`receitas/local/${t.id??``}`:`receitas/${t.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__emoji" aria-hidden="true">${h(t.categoria)}</span>
          <span class="cartao__titulo">${t.titulo||i.acervo.semTitulo}</span>
          ${t.local?n`<kk-badge variant="success" pill>${i.acervo.meu}</kk-badge>`:o}
        </span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${r?`filled`:`outline`}
        label=${r?i.receitas.desfavoritar:i.receitas.favoritar}
        @click=${()=>B(t,t.local)}
      ></kk-icon-button>
    </div>
  `}function Y(){return n`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${i.receitas.buscar}
        .value=${E}
        @kk-input=${e=>K(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${T.length===0?o:n`
          <div class="chips">
            <button class="chip" ?data-ativo=${D===``} @click=${()=>q(``)}>
              ${i.receitas.todas}
            </button>
            ${T.map(e=>n`
                <button
                  class="chip chip--emoji"
                  ?data-ativo=${D===e}
                  title=${e}
                  @click=${()=>q(e)}
                >
                  ${h(e)}
                </button>
              `)}
          </div>
        `}

    ${w.length===0?n`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="chef-hat"></kk-icon>
            <p>${i.receitas.vazio}</p>
          </div>
        `:n`<div class="cartoes">${w.map(e=>J(e))}</div>`}
  `}function X(e){return`${e.titulo}. ${i.receitas.ingredientes}. ${p(e.ingredientes)}. ${i.receitas.preparo}. ${p(e.instrucoes)}`}function Z(e){return n`
    ${e.categoria===``?o:n`<p class="receita__categoria" aria-hidden="true">${h(e.categoria)}</p>`}

    <h2 class="secao">${i.receitas.ingredientes}</h2>
    <div class="prosa prosa--linhas">${f(r(e.ingredientes))}</div>

    <h2 class="secao">${i.receitas.preparo}</h2>
    <div class="prosa prosa--linhas">${f(r(e.instrucoes))}</div>
  `}function Q(e){return n`
    ${Z(e)}
    ${L.overlay(n`
          <h1>${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function te(){let t=A?.id;t!==void 0&&await a({titulo:i.receitas.excluir,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&(await v(t,j),s(i.receitas.excluida),e(`receitas`))}function $(){M!==null&&(M={...M,status:i.acervo.salvando},t(),clearTimeout(I),I=setTimeout(()=>void ne(),C))}async function ne(){if(M===null)return;if(M.titulo.trim()===``){M={...M,status:i.acervo.informeTitulo},t();return}let e=Date.now(),n={...M.id===null?{}:await b(M.id,M.local)??{},titulo:M.titulo,categoria:M.categoria,ingredientes:M.ingredientes,instrucoes:M.instrucoes,data_atualizacao:e,...M.id===null?{publicar:0,data_criacao:e}:{id:M.id}},r=await x(n,M.local);M.id===null&&(M={...M,id:r},history.replaceState(null,``,`#/receitas/editar/${r}`)),M={...M,status:i.acervo.salvoAs(c(e))},t()}function re(e){let t=t=>e.categoria===t||h(e.categoria)===t;return n`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${i.receitas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{M={...e,titulo:t.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <h2 class="secao">${i.receitas.categoria}</h2>
      <div class="chips">
        ${g.map(r=>n`
            <button
              class="chip chip--emoji"
              ?data-ativo=${t(r)}
              @click=${()=>{M={...e,categoria:r},$()}}
            >
              ${r}
            </button>
          `)}
      </div>

      <h2 class="secao">${i.receitas.ingredientes}</h2>
      <kk-textarea
        rows="8"
        resize="auto"
        placeholder=${i.receitas.ingredientesPlaceholder}
        .value=${e.ingredientes}
        @kk-input=${t=>{M={...e,ingredientes:t.target.value},$()}}
      ></kk-textarea>

      <h2 class="secao">${i.receitas.preparo}</h2>
      <kk-textarea
        rows="10"
        resize="auto"
        placeholder=${i.receitas.preparoPlaceholder}
        .value=${e.instrucoes}
        @kk-input=${t=>{M={...e,instrucoes:t.target.value},$()}}
      ></kk-textarea>
    </div>
  `}function ie(t){let r=z(t,j),a=j?`receitas/editar/`:`receitas/editar-curada/`;return n`
    <kk-icon-button
      name="star"
      variant=${r?`filled`:`outline`}
      label=${r?i.receitas.desfavoritar:i.receitas.favoritar}
      @click=${()=>B(t,j)}
    ></kk-icon-button>
    ${L.botaoApresentar()}
    ${L.botaoFala(()=>X(t))}
    <kk-icon-button
      name="share"
      label=${i.leitura.compartilhar}
      @click=${()=>void m(t.titulo,X(t))}
    ></kk-icon-button>
    <kk-icon-button
      name="pencil"
      label=${i.acoes.editar}
      @click=${()=>e(`${a}${t.id??``}`)}
    ></kk-icon-button>
    <kk-icon-button
      name="trash"
      label=${i.receitas.excluir}
      @click=${()=>void te()}
    ></kk-icon-button>
  `}var ae={voltarPara(e){return e.args.length===0?`home`:`receitas`},titulo(e){let[t]=e.args;if(t!==void 0){if(G(e)){let e=M?.titulo.trim()??``;return e===``?i.receitas.novaTitulo:e}return A?.titulo}},acoes(t){let[r]=t.args;if(r===void 0)return n`
        <kk-icon-button
          name="plus"
          label=${i.receitas.nova}
          @click=${()=>e(`receitas/nova`)}
        ></kk-icon-button>
      `;if(!G(t))return A===null?void 0:ie(A)},conteudo(e){W(e);let[t]=e.args;return t===void 0?Y():G(e)?M===null?n`<div class="carregando"><kk-spinner></kk-spinner></div>`:re(M):A===null?n`<div class="carregando"><kk-spinner></kk-spinner></div>`:Q(A)}};export{ae as telaReceitas};