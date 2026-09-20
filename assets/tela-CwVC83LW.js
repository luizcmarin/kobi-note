import{r as e}from"./texto-DhKYsM3f.js";import{$ as t,b as n,ct as r,dt as i,g as a,ht as o,m as s,n as c,pt as l,st as u,y as d}from"./index-Dq5pFplc.js";import{alternarFavorito as f,chaveFavorito as p,lerFavoritos as ee}from"./favoritos-DAEWA_Gd.js";import{t as m}from"./unsafe-html-D3BO6e45.js";import{t as te}from"./leitura-bogWXldD.js";import{t as ne}from"./compartilhar-Bcw-mXzA.js";import{o as h}from"./acervo-mwj3Kh77.js";import{CATEGORIAS as g,CHAVE_FAVORITOS as _,excluirReceita as v,listarReceitas as y,obterReceita as b,salvarReceita as x}from"./dados-7qK6hWo0.js";var S=400,re=1200,C=[],w=[],T=``,E=``,D=new Set,O=!1,k=null,A=!1,j=null,M,N=!1,P=null,F=null,I,L,R=new te;function z(e,t){return p(t?`local`:`curado`,e.id)}function B(e,t){return D.has(z(e,t))}function V(e,t){D=f(_,D,z(e,t)),u()}async function H(){let e=await y(T,E);C=e.itens,w=e.categorias,u()}async function U(e,t){A=t,k=await b(e,t)??null,k===null&&r(`receitas`)}async function W(e,t){if(e===null){j={id:null,local:!0,titulo:``,categoria:g[0]??``,ingredientes:``,instrucoes:``,status:``},u();return}let n=await b(e,t);if(n===void 0){r(`receitas`);return}j={id:n.id??null,local:t,titulo:n.titulo,categoria:n.categoria||(g[0]??``),ingredientes:n.ingredientes,instrucoes:n.instrucoes,status:``},u()}function G(e){let t=e.args.join(`/`);M===t||N||P!==null||(M=t,N=!0,R.fechar(),O||=(D=ee(_),!0),(async()=>{try{let[t,n]=e.args,r=Number.parseInt(n??``,10);t===void 0?(k=null,j=null,await H()):t===`nova`?(k=null,await W(null,!0)):t===`editar`?(k=null,await W(r,!0)):t===`editar-curada`?(k=null,await W(r,!1)):t===`local`?(j=null,await U(r,!0)):(j=null,await U(Number.parseInt(t,10),!1))}catch(t){console.error(`receitas: a carga falhou.`,t),P=n(t),F=e}finally{N=!1,u()}})())}function K(){let e=F;P=null,F=null,M=void 0,e!==null&&G(e),u()}function q(e){let[t]=e.args;return t===`nova`||t===`editar`||t===`editar-curada`}function J(e){T=e,clearTimeout(I),I=setTimeout(()=>void H(),S)}function Y(e){E=E===e?``:e,H()}function ie(e){let t=B(e,e.local);return o`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>r(e.local?`receitas/local/${e.id??``}`:`receitas/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__emoji" aria-hidden="true">${h(e.categoria)}</span>
          <span class="cartao__titulo">${e.titulo||i.acervo.semTitulo}</span>
          ${e.local?o`<kk-badge variant="success" pill>${i.acervo.meu}</kk-badge>`:l}
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
  `}function ae(){return o`
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

    ${w.length===0?l:o`
          <div class="chips">
            <button class="chip" ?data-ativo=${E===``} @click=${()=>Y(``)}>
              ${i.receitas.todas}
            </button>
            ${w.map(e=>o`
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

    ${C.length===0?o`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="chef-hat"></kk-icon>
            <p>${i.receitas.vazio}</p>
          </div>
        `:o`<div class="cartoes">${C.map(e=>ie(e))}</div>`}
  `}function X(t){return`${t.titulo}. ${i.receitas.ingredientes}. ${e(t.ingredientes)}. ${i.receitas.preparo}. ${e(t.instrucoes)}`}function Z(e){return o`
    ${e.categoria===``?l:o`<p class="receita__categoria" aria-hidden="true">${h(e.categoria)}</p>`}

    <h2 class="secao">${i.receitas.ingredientes}</h2>
    <div class="prosa prosa--linhas">${m(c(e.ingredientes))}</div>

    <h2 class="secao">${i.receitas.preparo}</h2>
    <div class="prosa prosa--linhas">${m(c(e.instrucoes))}</div>
  `}function oe(e){return o`
    ${Z(e)}
    ${R.overlay(o`
          <h1>${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function Q(){let e=k?.id;e!==void 0&&await a({titulo:i.receitas.excluir,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&(await v(e,A),s(i.receitas.excluida),r(`receitas`))}function $(){j!==null&&(j={...j,status:i.acervo.salvando},u(),clearTimeout(L),L=setTimeout(()=>void se(),re))}async function se(){if(j===null)return;if(j.titulo.trim()===``){j={...j,status:i.acervo.informeTitulo},u();return}let e=Date.now(),n={...j.id===null?{}:await b(j.id,j.local)??{},titulo:j.titulo,categoria:j.categoria,ingredientes:j.ingredientes,instrucoes:j.instrucoes,data_atualizacao:e,...j.id===null?{publicar:0,data_criacao:e}:{id:j.id}},r=await x(n,j.local);j.id===null&&(j={...j,id:r},history.replaceState(null,``,`#/receitas/editar/${r}`)),j={...j,status:i.acervo.salvoAs(t(e))},u()}function ce(e){let t=t=>e.categoria===t||h(e.categoria)===t;return o`
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
        ${g.map(n=>o`
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
  `}function le(e){let t=B(e,A),n=A?`receitas/editar/`:`receitas/editar-curada/`;return o`
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
      @click=${()=>void ne(e.titulo,X(e))}
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
  `}var ue={voltarPara(e){return e.args.length===0?`home`:`receitas`},titulo(e){let[t]=e.args;if(t!==void 0){if(q(e)){let e=j?.titulo.trim()??``;return e===``?i.receitas.novaTitulo:e}return k?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return o`
        <kk-icon-button
          name="plus"
          label=${i.receitas.nova}
          @click=${()=>r(`receitas/nova`)}
        ></kk-icon-button>
      `;if(!q(e))return k===null?void 0:le(k)},conteudo(e){if(G(e),P!==null)return d(P,K);let[t]=e.args;return t===void 0?ae():q(e)?j===null?o`<div class="carregando"><kk-spinner></kk-spinner></div>`:ce(j):k===null?o`<div class="carregando"><kk-spinner></kk-spinner></div>`:oe(k)}};export{ue as telaReceitas};