import{r as e}from"./texto-DhKYsM3f.js";import{Q as t,S as n,at as r,ct as i,ft as a,h as o,it as s,n as c,u as ee,ut as l,x as u}from"./index-BBOYxO_i.js";import{alternarFavorito as d,chaveFavorito as f,lerFavoritos as te}from"./favoritos-DAEWA_Gd.js";import{t as p}from"./unsafe-html-CwwQ3etq.js";import{t as ne}from"./leitura-BsLIk1kE.js";import{t as re}from"./compartilhar-ByzKQFji.js";import{o as m}from"./acervo-mwj3Kh77.js";import{CATEGORIAS as h,CHAVE_FAVORITOS as g,excluirReceita as _,listarReceitas as v,obterReceita as y,salvarReceita as b}from"./dados-DndfAb6P.js";var x=400,S=1200,C=[],w=[],T=``,E=``,D=new Set,O=!1,k=null,A=!1,j=null,M,N=!1,P=null,F=null,I,L,R=new ne;function z(e,t){return f(t?`local`:`curado`,e.id)}function B(e,t){return D.has(z(e,t))}function V(e,t){D=d(g,D,z(e,t)),s()}async function H(){let e=await v(T,E);C=e.itens,w=e.categorias,s()}async function U(e,t){A=t,k=await y(e,t)??null,k===null&&r(`receitas`)}async function W(e,t){if(e===null){j={id:null,local:!0,titulo:``,categoria:h[0]??``,ingredientes:``,instrucoes:``,status:``},s();return}let n=await y(e,t);if(n===void 0){r(`receitas`);return}j={id:n.id??null,local:t,titulo:n.titulo,categoria:n.categoria||(h[0]??``),ingredientes:n.ingredientes,instrucoes:n.instrucoes,status:``},s()}function G(e){let t=e.args.join(`/`);M===t||N||P!==null||(M=t,N=!0,R.fechar(),O||=(D=te(g),!0),(async()=>{try{let[t,n]=e.args,r=Number.parseInt(n??``,10);t===void 0?(k=null,j=null,await H()):t===`nova`?(k=null,await W(null,!0)):t===`editar`?(k=null,await W(r,!0)):t===`editar-curada`?(k=null,await W(r,!1)):t===`local`?(j=null,await U(r,!0)):(j=null,await U(Number.parseInt(t,10),!1))}catch(t){console.error(`receitas: a carga falhou.`,t),P=n(t),F=e}finally{N=!1,s()}})())}function K(){let e=F;P=null,F=null,M=void 0,e!==null&&G(e),s()}function q(e){let[t]=e.args;return t===`nova`||t===`editar`||t===`editar-curada`}function J(e){T=e,clearTimeout(I),I=setTimeout(()=>void H(),x)}function Y(e){E=E===e?``:e,H()}function ie(e){let t=B(e,e.local);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>r(e.local?`receitas/local/${e.id??``}`:`receitas/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__emoji" aria-hidden="true">${m(e.categoria)}</span>
          <span class="cartao__titulo">${e.titulo||i.acervo.semTitulo}</span>
          ${e.local?a`<kk-badge variant="success" pill>${i.acervo.meu}</kk-badge>`:l}
        </span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?i.receitas.desfavoritar:i.receitas.favoritar}
        @click=${()=>V(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function ae(){return a`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${i.receitas.buscar}
        .value=${T}
        @kk-input=${e=>J(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${w.length===0?l:a`
          <div class="chips">
            <button class="chip" ?data-ativo=${E===``} @click=${()=>Y(``)}>
              ${i.receitas.todas}
            </button>
            ${w.map(e=>a`
                <button
                  class="chip chip--emoji"
                  ?data-ativo=${E===e}
                  title=${e}
                  @click=${()=>Y(e)}
                >
                  ${m(e)}
                </button>
              `)}
          </div>
        `}

    ${C.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="chef-hat"></kk-icon>
            <p>${i.receitas.vazio}</p>
          </div>
        `:a`<div class="cartoes">${C.map(e=>ie(e))}</div>`}
  `}function X(t){return`${t.titulo}. ${i.receitas.ingredientes}. ${e(t.ingredientes)}. ${i.receitas.preparo}. ${e(t.instrucoes)}`}function Z(e){return a`
    ${e.categoria===``?l:a`<p class="receita__categoria" aria-hidden="true">${m(e.categoria)}</p>`}

    <h2 class="secao">${i.receitas.ingredientes}</h2>
    <div class="prosa prosa--linhas">${p(c(e.ingredientes))}</div>

    <h2 class="secao">${i.receitas.preparo}</h2>
    <div class="prosa prosa--linhas">${p(c(e.instrucoes))}</div>
  `}function oe(e){return a`
    ${Z(e)}
    ${R.overlay(a`
          <h1>${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function Q(){let e=k?.id;e!==void 0&&await o({titulo:i.receitas.excluir,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&(await _(e,A),ee(i.receitas.excluida),r(`receitas`))}function $(){j!==null&&(j={...j,status:i.acervo.salvando},s(),clearTimeout(L),L=setTimeout(()=>void se(),S))}async function se(){if(j===null)return;if(j.titulo.trim()===``){j={...j,status:i.acervo.informeTitulo},s();return}let e=Date.now(),n={...j.id===null?{}:await y(j.id,j.local)??{},titulo:j.titulo,categoria:j.categoria,ingredientes:j.ingredientes,instrucoes:j.instrucoes,data_atualizacao:e,...j.id===null?{publicar:0,data_criacao:e}:{id:j.id}},r=await b(n,j.local);j.id===null&&(j={...j,id:r},history.replaceState(null,``,`#/receitas/editar/${r}`)),j={...j,status:i.acervo.salvoAs(t(e))},s()}function ce(e){let t=t=>e.categoria===t||m(e.categoria)===t;return a`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${i.receitas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{j={...e,titulo:t.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <h2 class="secao">${i.receitas.categoria}</h2>
      <div class="chips">
        ${h.map(n=>a`
            <button
              class="chip chip--emoji"
              ?data-ativo=${t(n)}
              @click=${()=>{j={...e,categoria:n},$()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h2 class="secao">${i.receitas.ingredientes}</h2>
      <kk-textarea
        rows="8"
        resize="auto"
        placeholder=${i.receitas.ingredientesPlaceholder}
        .value=${e.ingredientes}
        @kk-input=${t=>{j={...e,ingredientes:t.target.value},$()}}
      ></kk-textarea>

      <h2 class="secao">${i.receitas.preparo}</h2>
      <kk-textarea
        rows="10"
        resize="auto"
        placeholder=${i.receitas.preparoPlaceholder}
        .value=${e.instrucoes}
        @kk-input=${t=>{j={...e,instrucoes:t.target.value},$()}}
      ></kk-textarea>
    </div>
  `}function le(e){let t=B(e,A),n=A?`receitas/editar/`:`receitas/editar-curada/`;return a`
    <kk-icon-button
      name="star"
      variant=${t?`filled`:`outline`}
      label=${t?i.receitas.desfavoritar:i.receitas.favoritar}
      @click=${()=>V(e,A)}
    ></kk-icon-button>
    ${R.botaoApresentar()}
    ${R.botaoFala(()=>X(e))}
    <kk-icon-button
      name="share"
      label=${i.leitura.compartilhar}
      @click=${()=>void re(e.titulo,X(e))}
    ></kk-icon-button>
    <kk-icon-button
      name="pencil"
      label=${i.acoes.editar}
      @click=${()=>r(`${n}${e.id??``}`)}
    ></kk-icon-button>
    <kk-icon-button
      name="trash"
      label=${i.receitas.excluir}
      @click=${()=>void Q()}
    ></kk-icon-button>
  `}var ue={voltarPara(e){return e.args.length===0?`home`:`receitas`},titulo(e){let[t]=e.args;if(t!==void 0){if(q(e)){let e=j?.titulo.trim()??``;return e===``?i.receitas.novaTitulo:e}return k?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return a`
        <kk-icon-button
          name="plus"
          label=${i.receitas.nova}
          @click=${()=>r(`receitas/nova`)}
        ></kk-icon-button>
      `;if(!q(e))return k===null?void 0:le(k)},conteudo(e){if(G(e),P!==null)return u(P,K);let[t]=e.args;return t===void 0?ae():q(e)?j===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:ce(j):k===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:oe(k)}};export{ue as telaReceitas};