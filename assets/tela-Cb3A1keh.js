import{r as e}from"./texto-DhKYsM3f.js";import{Q as t,ft as n,g as r,m as i,mt as a,n as o,ot as s,st as c,ut as l,v as u,y as d}from"./index-mkeVomMM.js";import{alternarFavorito as ee,chaveFavorito as f,lerFavoritos as p}from"./favoritos-DAEWA_Gd.js";import{t as m}from"./unsafe-html-Cb8PZ0U-.js";import{t as te}from"./leitura-CpALrt-C.js";import{t as ne}from"./compartilhar-DsUG3HEX.js";import{o as h}from"./acervo-mwj3Kh77.js";import{CATEGORIAS as g,CHAVE_FAVORITOS as _,excluirReceita as v,listarReceitas as y,obterReceita as b,salvarReceita as x}from"./dados-BuybffSD.js";var S=400,C=1200,w=[],T=[],E=``,D=``,O=new Set,k=!1,A=null,j=!1,M=null,N,P=!1,F=null,I=null,L,R,z=new te;function B(e,t){return f(t?`local`:`curado`,e.id)}function V(e,t){return O.has(B(e,t))}function H(e,t){O=ee(_,O,B(e,t)),s()}async function U(){let e=await y(E,D);w=e.itens,T=e.categorias,s()}async function W(e,t){j=t,A=await b(e,t)??null,A===null&&c(`receitas`)}async function G(e,t){if(e===null){M={id:null,local:!0,titulo:``,categoria:g[0]??``,ingredientes:``,instrucoes:``,status:``},s();return}let n=await b(e,t);if(n===void 0){c(`receitas`);return}M={id:n.id??null,local:t,titulo:n.titulo,categoria:n.categoria||(g[0]??``),ingredientes:n.ingredientes,instrucoes:n.instrucoes,status:``},s()}function K(e){let t=e.args.join(`/`);N===t||P||F!==null||(N=t,P=!0,z.fechar(),k||=(O=p(_),!0),(async()=>{try{let[t,n]=e.args,r=Number.parseInt(n??``,10);t===void 0?(A=null,M=null,await U()):t===`nova`?(A=null,await G(null,!0)):t===`editar`?(A=null,await G(r,!0)):t===`editar-curada`?(A=null,await G(r,!1)):t===`local`?(M=null,await W(r,!0)):(M=null,await W(Number.parseInt(t,10),!1))}catch(t){console.error(`receitas: a carga falhou.`,t),F=d(t),I=e}finally{P=!1,s()}})())}function q(){let e=I;F=null,I=null,N=void 0,e!==null&&K(e),s()}function J(e){let[t]=e.args;return t===`nova`||t===`editar`||t===`editar-curada`}function Y(e){E=e,clearTimeout(L),L=setTimeout(()=>void U(),S)}function X(e){D=D===e?``:e,U()}function re(e){let t=V(e,e.local);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>c(e.local?`receitas/local/${e.id??``}`:`receitas/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__emoji" aria-hidden="true">${h(e.categoria)}</span>
          <span class="cartao__titulo">${e.titulo||l.acervo.semTitulo}</span>
          ${e.local?a`<kk-badge variant="success" pill>${l.acervo.meu}</kk-badge>`:n}
        </span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?l.receitas.desfavoritar:l.receitas.favoritar}
        @click=${()=>H(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function ie(){return a`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${l.receitas.buscar}
        .value=${E}
        @kk-input=${e=>Y(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${T.length===0?n:a`
          <div class="chips">
            <button class="chip" ?data-ativo=${D===``} @click=${()=>X(``)}>
              ${l.receitas.todas}
            </button>
            ${T.map(e=>a`
                <button
                  class="chip chip--emoji"
                  ?data-ativo=${D===e}
                  title=${e}
                  @click=${()=>X(e)}
                >
                  ${h(e)}
                </button>
              `)}
          </div>
        `}

    ${w.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="chef-hat"></kk-icon>
            <p>${l.receitas.vazio}</p>
          </div>
        `:a`<div class="cartoes">${w.map(e=>re(e))}</div>`}
  `}function Z(t){return`${t.titulo}. ${l.receitas.ingredientes}. ${e(t.ingredientes)}. ${l.receitas.preparo}. ${e(t.instrucoes)}`}function Q(e){return a`
    ${e.categoria===``?n:a`<p class="receita__categoria" aria-hidden="true">${h(e.categoria)}</p>`}

    <h2 class="secao">${l.receitas.ingredientes}</h2>
    <div class="prosa prosa--linhas">${m(o(e.ingredientes))}</div>

    <h2 class="secao">${l.receitas.preparo}</h2>
    <div class="prosa prosa--linhas">${m(o(e.instrucoes))}</div>
  `}function ae(e){return a`
    ${Q(e)}
    ${z.overlay(a`
          <h1>${e.titulo}</h1>
          ${Q(e)}
        `,()=>Z(e))}
  `}async function oe(){let e=A?.id;e!==void 0&&await r({titulo:l.receitas.excluir,texto:l.acervo.excluirTexto,rotuloConfirmar:l.acoes.excluir,variante:`danger`})&&(await v(e,j),i(l.receitas.excluida),c(`receitas`))}function $(){M!==null&&(M={...M,status:l.acervo.salvando},s(),clearTimeout(R),R=setTimeout(()=>void se(),C))}async function se(){if(M===null)return;if(M.titulo.trim()===``){M={...M,status:l.acervo.informeTitulo},s();return}let e=Date.now(),n={...M.id===null?{}:await b(M.id,M.local)??{},titulo:M.titulo,categoria:M.categoria,ingredientes:M.ingredientes,instrucoes:M.instrucoes,data_atualizacao:e,...M.id===null?{publicar:0,data_criacao:e}:{id:M.id}},r=await x(n,M.local);M.id===null&&(M={...M,id:r},history.replaceState(null,``,`#/receitas/editar/${r}`)),M={...M,status:l.acervo.salvoAs(t(e))},s()}function ce(e){let t=t=>e.categoria===t||h(e.categoria)===t;return a`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${l.receitas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{M={...e,titulo:t.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <h2 class="secao">${l.receitas.categoria}</h2>
      <div class="chips">
        ${g.map(n=>a`
            <button
              class="chip chip--emoji"
              ?data-ativo=${t(n)}
              @click=${()=>{M={...e,categoria:n},$()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h2 class="secao">${l.receitas.ingredientes}</h2>
      <kk-textarea
        rows="8"
        resize="auto"
        placeholder=${l.receitas.ingredientesPlaceholder}
        .value=${e.ingredientes}
        @kk-input=${t=>{M={...e,ingredientes:t.target.value},$()}}
      ></kk-textarea>

      <h2 class="secao">${l.receitas.preparo}</h2>
      <kk-textarea
        rows="10"
        resize="auto"
        placeholder=${l.receitas.preparoPlaceholder}
        .value=${e.instrucoes}
        @kk-input=${t=>{M={...e,instrucoes:t.target.value},$()}}
      ></kk-textarea>
    </div>
  `}function le(e){let t=V(e,j),n=j?`receitas/editar/`:`receitas/editar-curada/`;return a`
    <kk-icon-button
      name="star"
      variant=${t?`filled`:`outline`}
      label=${t?l.receitas.desfavoritar:l.receitas.favoritar}
      @click=${()=>H(e,j)}
    ></kk-icon-button>
    ${z.botaoApresentar()}
    ${z.botaoFala(()=>Z(e))}
    <kk-icon-button
      name="share"
      label=${l.leitura.compartilhar}
      @click=${()=>void ne(e.titulo,Z(e))}
    ></kk-icon-button>
    <kk-icon-button
      name="pencil"
      label=${l.acoes.editar}
      @click=${()=>c(`${n}${e.id??``}`)}
    ></kk-icon-button>
    <kk-icon-button
      name="trash"
      label=${l.receitas.excluir}
      @click=${()=>void oe()}
    ></kk-icon-button>
  `}var ue={voltarPara(e){return e.args.length===0?`home`:`receitas`},titulo(e){let[t]=e.args;if(t!==void 0){if(J(e)){let e=M?.titulo.trim()??``;return e===``?l.receitas.novaTitulo:e}return A?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return a`
        <kk-icon-button
          name="plus"
          label=${l.receitas.nova}
          @click=${()=>c(`receitas/nova`)}
        ></kk-icon-button>
      `;if(!J(e))return A===null?void 0:le(A)},conteudo(e){if(K(e),F!==null)return u(F,q);let[t]=e.args;return t===void 0?ie():J(e)?M===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:ce(M):A===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:ae(A)}};export{ue as telaReceitas};