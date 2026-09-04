import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{r}from"./data-DRe9t3tD.js";import{D as i,E as a,n as o,o as s,r as c}from"./index-CRLpDONK.js";import{alternarFavorito as l,chaveFavorito as u,lerFavoritos as d}from"./favoritos-DAEWA_Gd.js";import{t as f}from"./unsafe-html-BBiWdB6b.js";import{r as p,t as m}from"./leitura-CkT3q2bF.js";import{t as h}from"./compartilhar-CFzJczAF.js";import{o as g}from"./acervo-lW84xSMO.js";import{CATEGORIAS as _,CHAVE_FAVORITOS as v,excluirReceita as ee,listarReceitas as y,obterReceita as b,salvarReceita as x}from"./dados-kvD4k07A.js";var S=400,C=1200,w=[],T=[],E=``,D=``,O=new Set,k=!1,A=null,j=!1,M=null,N,P=!1,F,I,L=new m;function R(e,t){return u(t?`local`:`curado`,e.id)}function z(e,t){return O.has(R(e,t))}function B(e,t){O=l(v,O,R(e,t)),a()}async function V(){let e=await y(E,D);w=e.itens,T=e.categorias,a()}async function H(e,t){j=t,A=await b(e,t)??null,A===null&&i(`receitas`)}async function U(e,t){if(e===null){M={id:null,local:!0,titulo:``,categoria:_[0]??``,ingredientes:``,instrucoes:``,status:``},a();return}let n=await b(e,t);if(n===void 0){i(`receitas`);return}M={id:n.id??null,local:t,titulo:n.titulo,categoria:n.categoria||(_[0]??``),ingredientes:n.ingredientes,instrucoes:n.instrucoes,status:``},a()}function W(e){let t=e.args.join(`/`);N===t||P||(N=t,P=!0,L.fechar(),k||=(O=d(v),!0),(async()=>{try{let[t,n]=e.args,r=Number.parseInt(n??``,10);t===void 0?(A=null,M=null,await V()):t===`nova`?(A=null,await U(null,!0)):t===`editar`?(A=null,await U(r,!0)):t===`editar-curada`?(A=null,await U(r,!1)):t===`local`?(M=null,await H(r,!0)):(M=null,await H(Number.parseInt(t,10),!1))}finally{P=!1,a()}})())}function G(e){let[t]=e.args;return t===`nova`||t===`editar`||t===`editar-curada`}function K(e){E=e,clearTimeout(F),F=setTimeout(()=>void V(),S)}function q(e){D=D===e?``:e,V()}function J(r){let a=z(r,r.local);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${a}>
      <button
        class="cartao__alvo"
        @click=${()=>i(r.local?`receitas/local/${r.id??``}`:`receitas/${r.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__emoji" aria-hidden="true">${g(r.categoria)}</span>
          <span class="cartao__titulo">${r.titulo||n.acervo.semTitulo}</span>
          ${r.local?e`<kk-badge variant="success" pill>${n.acervo.meu}</kk-badge>`:t}
        </span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${a?`filled`:`outline`}
        label=${a?n.receitas.desfavoritar:n.receitas.favoritar}
        @click=${()=>B(r,r.local)}
      ></kk-icon-button>
    </div>
  `}function Y(){return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.receitas.buscar}
        .value=${E}
        @kk-input=${e=>K(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${T.length===0?t:e`
          <div class="chips">
            <button class="chip" ?data-ativo=${D===``} @click=${()=>q(``)}>
              ${n.receitas.todas}
            </button>
            ${T.map(t=>e`
                <button
                  class="chip chip--emoji"
                  ?data-ativo=${D===t}
                  title=${t}
                  @click=${()=>q(t)}
                >
                  ${g(t)}
                </button>
              `)}
          </div>
        `}

    ${w.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="chef-hat"></kk-icon>
            <p>${n.receitas.vazio}</p>
          </div>
        `:e`<div class="cartoes">${w.map(e=>J(e))}</div>`}
  `}function X(e){return`${e.titulo}. ${n.receitas.ingredientes}. ${p(e.ingredientes)}. ${n.receitas.preparo}. ${p(e.instrucoes)}`}function Z(r){return e`
    ${r.categoria===``?t:e`<p class="receita__categoria" aria-hidden="true">${g(r.categoria)}</p>`}

    <h2 class="secao">${n.receitas.ingredientes}</h2>
    <div class="prosa prosa--linhas">${f(o(r.ingredientes))}</div>

    <h2 class="secao">${n.receitas.preparo}</h2>
    <div class="prosa prosa--linhas">${f(o(r.instrucoes))}</div>
  `}function Q(t){return e`
    ${Z(t)}
    ${L.overlay(e`
          <h1>${t.titulo}</h1>
          ${Z(t)}
        `,()=>X(t))}
  `}async function te(){let e=A?.id;e!==void 0&&await s({titulo:n.receitas.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await ee(e,j),c(n.receitas.excluida),i(`receitas`))}function $(){M!==null&&(M={...M,status:n.acervo.salvando},a(),clearTimeout(I),I=setTimeout(()=>void ne(),C))}async function ne(){if(M===null)return;if(M.titulo.trim()===``){M={...M,status:n.acervo.informeTitulo},a();return}let e=Date.now(),t={...M.id===null?{}:await b(M.id,M.local)??{},titulo:M.titulo,categoria:M.categoria,ingredientes:M.ingredientes,instrucoes:M.instrucoes,data_atualizacao:e,...M.id===null?{publicar:0,data_criacao:e}:{id:M.id}},i=await x(t,M.local);M.id===null&&(M={...M,id:i},history.replaceState(null,``,`#/receitas/editar/${i}`)),M={...M,status:n.acervo.salvoAs(r(e))},a()}function re(t){let r=e=>t.categoria===e||g(t.categoria)===e;return e`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${n.receitas.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{M={...t,titulo:e.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${t.status}</span>
      </div>

      <h2 class="secao">${n.receitas.categoria}</h2>
      <div class="chips">
        ${_.map(n=>e`
            <button
              class="chip chip--emoji"
              ?data-ativo=${r(n)}
              @click=${()=>{M={...t,categoria:n},$()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h2 class="secao">${n.receitas.ingredientes}</h2>
      <kk-textarea
        rows="8"
        resize="auto"
        placeholder=${n.receitas.ingredientesPlaceholder}
        .value=${t.ingredientes}
        @kk-input=${e=>{M={...t,ingredientes:e.target.value},$()}}
      ></kk-textarea>

      <h2 class="secao">${n.receitas.preparo}</h2>
      <kk-textarea
        rows="10"
        resize="auto"
        placeholder=${n.receitas.preparoPlaceholder}
        .value=${t.instrucoes}
        @kk-input=${e=>{M={...t,instrucoes:e.target.value},$()}}
      ></kk-textarea>
    </div>
  `}function ie(t){let r=z(t,j),a=j?`receitas/editar/`:`receitas/editar-curada/`;return e`
    <kk-icon-button
      name="star"
      variant=${r?`filled`:`outline`}
      label=${r?n.receitas.desfavoritar:n.receitas.favoritar}
      @click=${()=>B(t,j)}
    ></kk-icon-button>
    ${L.botaoApresentar()}
    ${L.botaoFala(()=>X(t))}
    <kk-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void h(t.titulo,X(t))}
    ></kk-icon-button>
    <kk-icon-button
      name="pencil"
      label=${n.acoes.editar}
      @click=${()=>i(`${a}${t.id??``}`)}
    ></kk-icon-button>
    <kk-icon-button
      name="trash"
      label=${n.receitas.excluir}
      @click=${()=>void te()}
    ></kk-icon-button>
  `}var ae={voltarPara(e){return e.args.length===0?`home`:`receitas`},titulo(e){let[t]=e.args;if(t!==void 0){if(G(e)){let e=M?.titulo.trim()??``;return e===``?n.receitas.novaTitulo:e}return A?.titulo}},acoes(t){let[r]=t.args;if(r===void 0)return e`
        <kk-icon-button
          name="plus"
          label=${n.receitas.nova}
          @click=${()=>i(`receitas/nova`)}
        ></kk-icon-button>
      `;if(!G(t))return A===null?void 0:ie(A)},conteudo(t){W(t);let[n]=t.args;return n===void 0?Y():G(t)?M===null?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:re(M):A===null?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:Q(A)}};export{ae as telaReceitas};