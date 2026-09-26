import{r as e,t}from"./leitura-CTOOy0QY.js";import{C as n,_t as r,bt as i,ft as a,g as o,m as s,mt as c,n as l,rt as u,w as d,xt as f,y as p}from"./index-tEHw1VqD.js";import{alternarFavorito as m,chaveFavorito as ee,lerFavoritos as te}from"./favoritos-DAEWA_Gd.js";import{t as ne}from"./compartilhar-C4iBpIQ9.js";import{o as h}from"./acervo-mwj3Kh77.js";import{CATEGORIAS as g,CHAVE_FAVORITOS as _,excluirReceita as v,listarReceitas as y,obterReceita as b,salvarReceita as x}from"./dados-BSHrkVx0.js";var S=400,re=1200,C=[],w=[],T=``,E=``,D=new Set,O=!1,k=null,A=!1,j=null,M,N=!1,P=null,F=null,I,L,R=new t;function z(e,t){return ee(t?`local`:`curado`,e.id)}function B(e,t){return D.has(z(e,t))}function V(e,t){D=m(_,D,z(e,t)),a()}async function H(){let e=await y(T,E);C=e.itens,w=e.categorias,a()}async function U(e,t){A=t,k=await b(e,t)??null,k===null&&c(`receitas`)}async function W(e,t){if(e===null){j={id:null,local:!0,titulo:``,categoria:g[0]??``,ingredientes:``,instrucoes:``,status:``},a();return}let n=await b(e,t);if(n===void 0){c(`receitas`);return}j={id:n.id??null,local:t,titulo:n.titulo,categoria:n.categoria||(g[0]??``),ingredientes:n.ingredientes,instrucoes:n.instrucoes,status:``},a()}function G(e){let t=e.args.join(`/`);M===t||N||P!==null||(M=t,N=!0,R.fechar(),O||=(D=te(_),!0),(async()=>{try{let[t,n]=e.args,r=Number.parseInt(n??``,10);t===void 0?(k=null,j=null,await H()):t===`nova`?(k=null,await W(null,!0)):t===`editar`?(k=null,await W(r,!0)):t===`editar-curada`?(k=null,await W(r,!1)):t===`local`?(j=null,await U(r,!0)):(j=null,await U(Number.parseInt(t,10),!1))}catch(t){console.error(`receitas: a carga falhou.`,t),P=d(t),F=e}finally{N=!1,a()}})())}function K(){let e=F;P=null,F=null,M=void 0,e!==null&&G(e),a()}function q(e){let[t]=e.args;return t===`nova`||t===`editar`||t===`editar-curada`}function J(e){T=e,clearTimeout(I),I=setTimeout(()=>void H(),S)}function Y(e){E=E===e?``:e,H()}function ie(e){let t=B(e,e.local);return f`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>c(e.local?`receitas/local/${e.id??``}`:`receitas/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__emoji" aria-hidden="true">${h(e.categoria)}</span>
          <span class="cartao__titulo">${e.titulo||r.acervo.semTitulo}</span>
          ${e.local?f`<kk-badge variant="success" pill>${r.acervo.meu}</kk-badge>`:i}
        </span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?r.receitas.desfavoritar:r.receitas.favoritar}
        @click=${()=>V(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function ae(){return f`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${r.receitas.buscar}
        .value=${T}
        @kk-input=${e=>J(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${w.length===0?i:f`
          <div class="chips">
            <button class="chip" ?data-ativo=${E===``} @click=${()=>Y(``)}>
              ${r.receitas.todas}
            </button>
            ${w.map(e=>f`
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

    ${C.length===0?f`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="chef-hat"></kk-icon>
            <p>${r.receitas.vazio}</p>
          </div>
        `:f`<div class="cartoes">${C.map(e=>ie(e))}</div>`}
  `}function X(t){return`${t.titulo}. ${r.receitas.ingredientes}. ${e(t.ingredientes)}. ${r.receitas.preparo}. ${e(t.instrucoes)}`}function Z(e){return f`
    ${e.categoria===``?i:f`<p class="receita__categoria" aria-hidden="true">${h(e.categoria)}</p>`}

    <h2 class="secao">${r.receitas.ingredientes}</h2>
    <div class="prosa prosa--linhas">${p(l(e.ingredientes))}</div>

    <h2 class="secao">${r.receitas.preparo}</h2>
    <div class="prosa prosa--linhas">${p(l(e.instrucoes))}</div>
  `}function oe(e){return f`
    ${Z(e)}
    ${R.overlay(f`
          <h1>${e.titulo}</h1>
          ${Z(e)}
        `,()=>X(e))}
  `}async function Q(){let e=k?.id;e!==void 0&&await o({titulo:r.receitas.excluir,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&(await v(e,A),s(r.receitas.excluida),c(`receitas`))}function $(){j!==null&&(j={...j,status:r.acervo.salvando},a(),clearTimeout(L),L=setTimeout(()=>void se(),re))}async function se(){if(j===null)return;if(j.titulo.trim()===``){j={...j,status:r.acervo.informeTitulo},a();return}let e=Date.now(),t={...j.id===null?{}:await b(j.id,j.local)??{},titulo:j.titulo,categoria:j.categoria,ingredientes:j.ingredientes,instrucoes:j.instrucoes,data_atualizacao:e,...j.id===null?{publicar:0,data_criacao:e}:{id:j.id}},n=await x(t,j.local);j.id===null&&(j={...j,id:n},history.replaceState(null,``,`#/receitas/editar/${n}`)),j={...j,status:r.acervo.salvoAs(u(e))},a()}function ce(e){let t=t=>e.categoria===t||h(e.categoria)===t;return f`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${r.receitas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{j={...e,titulo:t.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <h2 class="secao">${r.receitas.categoria}</h2>
      <div class="chips">
        ${g.map(n=>f`
            <button
              class="chip chip--emoji"
              ?data-ativo=${t(n)}
              @click=${()=>{j={...e,categoria:n},$()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h2 class="secao">${r.receitas.ingredientes}</h2>
      <kk-textarea
        rows="8"
        resize="auto"
        placeholder=${r.receitas.ingredientesPlaceholder}
        .value=${e.ingredientes}
        @kk-input=${t=>{j={...e,ingredientes:t.target.value},$()}}
      ></kk-textarea>

      <h2 class="secao">${r.receitas.preparo}</h2>
      <kk-textarea
        rows="10"
        resize="auto"
        placeholder=${r.receitas.preparoPlaceholder}
        .value=${e.instrucoes}
        @kk-input=${t=>{j={...e,instrucoes:t.target.value},$()}}
      ></kk-textarea>
    </div>
  `}function le(e){let t=B(e,A),n=A?`receitas/editar/`:`receitas/editar-curada/`;return f`
    <kk-icon-button
      name="star"
      variant=${t?`filled`:`outline`}
      label=${t?r.receitas.desfavoritar:r.receitas.favoritar}
      @click=${()=>V(e,A)}
    ></kk-icon-button>
    ${R.botaoApresentar()}
    ${R.botaoFala(()=>X(e))}
    <kk-icon-button
      name="share"
      label=${r.leitura.compartilhar}
      @click=${()=>void ne(e.titulo,X(e))}
    ></kk-icon-button>
    <kk-icon-button
      name="pencil"
      label=${r.acoes.editar}
      @click=${()=>c(`${n}${e.id??``}`)}
    ></kk-icon-button>
    <kk-icon-button
      name="trash"
      label=${r.receitas.excluir}
      @click=${()=>void Q()}
    ></kk-icon-button>
  `}var ue={voltarPara(e){return e.args.length===0?`home`:`receitas`},titulo(e){let[t]=e.args;if(t!==void 0){if(q(e)){let e=j?.titulo.trim()??``;return e===``?r.receitas.novaTitulo:e}return k?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return f`
        <kk-icon-button
          name="plus"
          label=${r.receitas.nova}
          @click=${()=>c(`receitas/nova`)}
        ></kk-icon-button>
      `;if(!q(e))return k===null?void 0:le(k)},conteudo(e){if(G(e),P!==null)return n(P,K);let[t]=e.args;return t===void 0?ae():q(e)?j===null?f`<div class="carregando"><kk-spinner></kk-spinner></div>`:ce(j):k===null?f`<div class="carregando"><kk-spinner></kk-spinner></div>`:oe(k)}};export{ue as telaReceitas};