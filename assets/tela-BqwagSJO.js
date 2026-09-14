import{r as e}from"./texto-DhKYsM3f.js";import{J as t,at as n,g as r,lt as i,m as a,n as o,nt as s,st as c,tt as l,v as u,y as d}from"./index-D0n52eAb.js";import{alternarFavorito as f,chaveFavorito as p,lerFavoritos as ee}from"./favoritos-DAEWA_Gd.js";import{t as m}from"./unsafe-html-C_000-wi.js";import{t as te}from"./leitura-BGXwNh36.js";import{t as ne}from"./compartilhar-BcYtsMyG.js";import{o as h}from"./acervo-mwj3Kh77.js";import{CATEGORIAS as g,CHAVE_FAVORITOS as _,excluirReceita as v,listarReceitas as y,obterReceita as b,salvarReceita as x}from"./dados-DwwkEHCQ.js";var S=400,re=1200,C=[],w=[],T=``,E=``,D=new Set,O=!1,k=null,A=!1,j=null,M,N=!1,P=null,F=null,I,L,R=new te;function z(e,t){return p(t?`local`:`curado`,e.id)}function B(e,t){return D.has(z(e,t))}function V(e,t){D=f(_,D,z(e,t)),l()}async function H(){let e=await y(T,E);C=e.itens,w=e.categorias,l()}async function U(e,t){A=t,k=await b(e,t)??null,k===null&&s(`receitas`)}async function W(e,t){if(e===null){j={id:null,local:!0,titulo:``,categoria:g[0]??``,ingredientes:``,instrucoes:``,status:``},l();return}let n=await b(e,t);if(n===void 0){s(`receitas`);return}j={id:n.id??null,local:t,titulo:n.titulo,categoria:n.categoria||(g[0]??``),ingredientes:n.ingredientes,instrucoes:n.instrucoes,status:``},l()}function G(e){let t=e.args.join(`/`);M===t||N||P!==null||(M=t,N=!0,R.fechar(),O||=(D=ee(_),!0),(async()=>{try{let[t,n]=e.args,r=Number.parseInt(n??``,10);t===void 0?(k=null,j=null,await H()):t===`nova`?(k=null,await W(null,!0)):t===`editar`?(k=null,await W(r,!0)):t===`editar-curada`?(k=null,await W(r,!1)):t===`local`?(j=null,await U(r,!0)):(j=null,await U(Number.parseInt(t,10),!1))}catch(t){console.error(`receitas: a carga falhou.`,t),P=d(t),F=e}finally{N=!1,l()}})())}function K(){let e=F;P=null,F=null,M=void 0,e!==null&&G(e),l()}function q(e){let[t]=e.args;return t===`nova`||t===`editar`||t===`editar-curada`}function J(e){T=e,clearTimeout(I),I=setTimeout(()=>void H(),S)}function Y(e){E=E===e?``:e,H()}function ie(e){let t=B(e,e.local);return i`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>s(e.local?`receitas/local/${e.id??``}`:`receitas/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__emoji" aria-hidden="true">${h(e.categoria)}</span>
          <span class="cartao__titulo">${e.titulo||n.acervo.semTitulo}</span>
          ${e.local?i`<kk-badge variant="success" pill>${n.acervo.meu}</kk-badge>`:c}
        </span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?n.receitas.desfavoritar:n.receitas.favoritar}
        @click=${()=>V(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function ae(){return i`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.receitas.buscar}
        .value=${T}
        @kk-input=${e=>J(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${w.length===0?c:i`
          <div class="chips">
            <button class="chip" ?data-ativo=${E===``} @click=${()=>Y(``)}>
              ${n.receitas.todas}
            </button>
            ${w.map(e=>i`
                <button
                  class="chip chip--emoji"
                  ?data-ativo=${E===e}
                  title=${e}
                  @click=${()=>Y(e)}
                >
                  ${h(e)}
                </button>
              `)}
          </div>
        `}

    ${C.length===0?i`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="chef-hat"></kk-icon>
            <p>${n.receitas.vazio}</p>
          </div>
        `:i`<div class="cartoes">${C.map(e=>ie(e))}</div>`}
  `}function X(t){return`${t.titulo}. ${n.receitas.ingredientes}. ${e(t.ingredientes)}. ${n.receitas.preparo}. ${e(t.instrucoes)}`}function Z(e){return i`
    ${e.categoria===``?c:i`<p class="receita__categoria" aria-hidden="true">${h(e.categoria)}</p>`}

    <h2 class="secao">${n.receitas.ingredientes}</h2>
    <div class="prosa prosa--linhas">${m(o(e.ingredientes))}</div>

    <h2 class="secao">${n.receitas.preparo}</h2>
    <div class="prosa prosa--linhas">${m(o(e.instrucoes))}</div>
  `}function oe(e){return i`
    ${Z(e)}
    ${R.overlay(i`
          <h1>${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function Q(){let e=k?.id;e!==void 0&&await r({titulo:n.receitas.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await v(e,A),a(n.receitas.excluida),s(`receitas`))}function $(){j!==null&&(j={...j,status:n.acervo.salvando},l(),clearTimeout(L),L=setTimeout(()=>void se(),re))}async function se(){if(j===null)return;if(j.titulo.trim()===``){j={...j,status:n.acervo.informeTitulo},l();return}let e=Date.now(),r={...j.id===null?{}:await b(j.id,j.local)??{},titulo:j.titulo,categoria:j.categoria,ingredientes:j.ingredientes,instrucoes:j.instrucoes,data_atualizacao:e,...j.id===null?{publicar:0,data_criacao:e}:{id:j.id}},i=await x(r,j.local);j.id===null&&(j={...j,id:i},history.replaceState(null,``,`#/receitas/editar/${i}`)),j={...j,status:n.acervo.salvoAs(t(e))},l()}function ce(e){let t=t=>e.categoria===t||h(e.categoria)===t;return i`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${n.receitas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{j={...e,titulo:t.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <h2 class="secao">${n.receitas.categoria}</h2>
      <div class="chips">
        ${g.map(n=>i`
            <button
              class="chip chip--emoji"
              ?data-ativo=${t(n)}
              @click=${()=>{j={...e,categoria:n},$()}}
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
        .value=${e.ingredientes}
        @kk-input=${t=>{j={...e,ingredientes:t.target.value},$()}}
      ></kk-textarea>

      <h2 class="secao">${n.receitas.preparo}</h2>
      <kk-textarea
        rows="10"
        resize="auto"
        placeholder=${n.receitas.preparoPlaceholder}
        .value=${e.instrucoes}
        @kk-input=${t=>{j={...e,instrucoes:t.target.value},$()}}
      ></kk-textarea>
    </div>
  `}function le(e){let t=B(e,A),r=A?`receitas/editar/`:`receitas/editar-curada/`;return i`
    <kk-icon-button
      name="star"
      variant=${t?`filled`:`outline`}
      label=${t?n.receitas.desfavoritar:n.receitas.favoritar}
      @click=${()=>V(e,A)}
    ></kk-icon-button>
    ${R.botaoApresentar()}
    ${R.botaoFala(()=>X(e))}
    <kk-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void ne(e.titulo,X(e))}
    ></kk-icon-button>
    <kk-icon-button
      name="pencil"
      label=${n.acoes.editar}
      @click=${()=>s(`${r}${e.id??``}`)}
    ></kk-icon-button>
    <kk-icon-button
      name="trash"
      label=${n.receitas.excluir}
      @click=${()=>void Q()}
    ></kk-icon-button>
  `}var ue={voltarPara(e){return e.args.length===0?`home`:`receitas`},titulo(e){let[t]=e.args;if(t!==void 0){if(q(e)){let e=j?.titulo.trim()??``;return e===``?n.receitas.novaTitulo:e}return k?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return i`
        <kk-icon-button
          name="plus"
          label=${n.receitas.nova}
          @click=${()=>s(`receitas/nova`)}
        ></kk-icon-button>
      `;if(!q(e))return k===null?void 0:le(k)},conteudo(e){if(G(e),P!==null)return u(P,K);let[t]=e.args;return t===void 0?ae():q(e)?j===null?i`<div class="carregando"><kk-spinner></kk-spinner></div>`:ce(j):k===null?i`<div class="carregando"><kk-spinner></kk-spinner></div>`:oe(k)}};export{ue as telaReceitas};