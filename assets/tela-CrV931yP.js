import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-C-U_qlgv.js";import{r}from"./rotas-D12eslN_.js";import{r as i}from"./data-7IMAkOFv.js";import{t as a}from"./html-C5yDSNPC.js";import{s as o}from"./acervo-Bp775EqU.js";import{R as s,c,d as l,l as u,m as d,n as f}from"./index-DQ-iAe1X.js";import{alternarFavorito as p,chaveFavorito as m,lerFavoritos as ee}from"./favoritos-BACwLqIZ.js";import{n as h}from"./carga-Cl47TOz-.js";import{t as g}from"./leitura-CX65C_v8.js";import{t as _}from"./compartilhar-yiSOxGhg.js";import{CATEGORIAS as v,CHAVE_FAVORITOS as y,excluirReceita as b,listarReceitas as x,obterReceita as S,salvarReceita as C}from"./dados-U5-YBWXk.js";var w=400,T=1200,E=[],D=[],O=``,k=``,A=new Set,j=!1,M=null,N=!1,P=null,F,I,L=new g;function R(e,t){return m(t?`local`:`curado`,e.id)}function z(e,t){return A.has(R(e,t))}function B(e,t){A=p(y,A,R(e,t)),s()}async function V(){let e=await x(O,k);E=e.itens,D=e.categorias,s()}async function H(e,t){N=t,M=await S(e,t)??null,M===null&&r(`receitas`)}async function U(e,t){if(e===null){P={id:null,local:!0,titulo:``,categoria:v[0]??``,ingredientes:``,instrucoes:``,status:``},s();return}let n=await S(e,t);if(n===void 0){r(`receitas`);return}P={id:n.id??null,local:t,titulo:n.titulo,categoria:n.categoria||(v[0]??``),ingredientes:n.ingredientes,instrucoes:n.instrucoes,status:``},s()}var W=new h(`receitas`,async e=>{L.fechar(),j||=(A=ee(y),!0);let[t,n]=e.args,r=Number.parseInt(n??``,10);t===void 0?(M=null,P=null,await V()):t===`nova`?(M=null,await U(null,!0)):t===`editar`?(M=null,await U(r,!0)):t===`editar-curada`?(M=null,await U(r,!1)):t===`local`?(P=null,await H(r,!0)):(P=null,await H(Number.parseInt(t,10),!1))});function G(e){let[t]=e.args;return t===`nova`||t===`editar`||t===`editar-curada`}function K(e){O=e,clearTimeout(F),F=setTimeout(()=>void V(),w)}function q(e){k=k===e?``:e,V()}function J(i){let a=z(i,i.local);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${a}>
      <button
        class="cartao__alvo"
        @click=${()=>r(i.local?`receitas/local/${i.id??``}`:`receitas/${i.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__emoji" aria-hidden="true">${o(i.categoria)}</span>
          <span class="cartao__titulo">${i.titulo||n.acervo.semTitulo}</span>
          ${i.local?e`<kk-badge variant="success" pill>${n.acervo.meu}</kk-badge>`:t}
        </span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${a?`filled`:`outline`}
        label=${a?n.receitas.desfavoritar:n.receitas.favoritar}
        @click=${()=>B(i,i.local)}
      ></kk-icon-button>
    </div>
  `}function Y(){return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.receitas.buscar}
        .value=${O}
        @kk-input=${e=>K(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${D.length===0?t:e`
          <div class="chips">
            <button class="chip" ?data-ativo=${k===``} @click=${()=>q(``)}>
              ${n.receitas.todas}
            </button>
            ${D.map(t=>e`
                <button
                  class="chip chip--emoji"
                  ?data-ativo=${k===t}
                  title=${t}
                  @click=${()=>q(t)}
                >
                  ${o(t)}
                </button>
              `)}
          </div>
        `}

    ${E.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="chef-hat"></kk-icon>
            <p>${n.receitas.vazio}</p>
          </div>
        `:e`<div class="cartoes">${E.map(e=>J(e))}</div>`}
  `}function X(e){return`${e.titulo}. ${n.receitas.ingredientes}. ${a(e.ingredientes)}. ${n.receitas.preparo}. ${a(e.instrucoes)}`}function Z(r){return e`
    ${r.categoria===``?t:e`<p class="receita__categoria" aria-hidden="true">${o(r.categoria)}</p>`}

    <h2 class="secao">${n.receitas.ingredientes}</h2>
    <div class="prosa prosa--linhas">${u(f(r.ingredientes))}</div>

    <h2 class="secao">${n.receitas.preparo}</h2>
    <div class="prosa prosa--linhas">${u(f(r.instrucoes))}</div>
  `}function Q(t){return e`
    ${Z(t)}
    ${L.overlay(e`
          <h1>${t.titulo}</h1>
          ${Z(t)}
        `,()=>X(t))}
  `}async function te(){let e=M?.id;e!==void 0&&await d({titulo:n.receitas.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await b(e,N),c(n.receitas.excluida),r(`receitas`))}function $(){P!==null&&(P={...P,status:n.acervo.salvando},s(),clearTimeout(I),I=setTimeout(()=>void ne(),T))}async function ne(){if(P===null)return;if(P.titulo.trim()===``){P={...P,status:n.acervo.informeTitulo},s();return}let e=Date.now(),t={...P.id===null?{}:await S(P.id,P.local)??{},titulo:P.titulo,categoria:P.categoria,ingredientes:P.ingredientes,instrucoes:P.instrucoes,data_atualizacao:e,...P.id===null?{publicar:0,data_criacao:e}:{id:P.id}},r=await C(t,P.local);P.id===null&&(P={...P,id:r},history.replaceState(null,``,`#/receitas/editar/${r}`)),P={...P,status:n.acervo.salvoAs(i(e))},s()}function re(t){let r=e=>t.categoria===e||o(t.categoria)===e;return e`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${n.receitas.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{P={...t,titulo:e.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${t.status}</span>
      </div>

      <h2 class="secao">${n.receitas.categoria}</h2>
      <div class="chips">
        ${v.map(n=>e`
            <button
              class="chip chip--emoji"
              ?data-ativo=${r(n)}
              @click=${()=>{P={...t,categoria:n},$()}}
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
        @kk-input=${e=>{P={...t,ingredientes:e.target.value},$()}}
      ></kk-textarea>

      <h2 class="secao">${n.receitas.preparo}</h2>
      <kk-textarea
        rows="10"
        resize="auto"
        placeholder=${n.receitas.preparoPlaceholder}
        .value=${t.instrucoes}
        @kk-input=${e=>{P={...t,instrucoes:e.target.value},$()}}
      ></kk-textarea>
    </div>
  `}function ie(t){let i=z(t,N),a=N?`receitas/editar/`:`receitas/editar-curada/`;return e`
    <kk-icon-button
      name="star"
      variant=${i?`filled`:`outline`}
      label=${i?n.receitas.desfavoritar:n.receitas.favoritar}
      @click=${()=>B(t,N)}
    ></kk-icon-button>
    ${L.botaoApresentar()}
    ${L.botaoFala(()=>X(t))}
    <kk-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void _(t.titulo,X(t))}
    ></kk-icon-button>
    <kk-icon-button
      name="pencil"
      label=${n.acoes.editar}
      @click=${()=>r(`${a}${t.id??``}`)}
    ></kk-icon-button>
    <kk-icon-button
      name="trash"
      label=${n.receitas.excluir}
      @click=${()=>void te()}
    ></kk-icon-button>
  `}var ae={voltarPara(e){return e.args.length===0?`home`:`receitas`},titulo(e){let[t]=e.args;if(t!==void 0){if(G(e)){let e=P?.titulo.trim()??``;return e===``?n.receitas.novaTitulo:e}return M?.titulo}},acoes(t){let[i]=t.args;if(i===void 0)return e`
        <kk-icon-button
          name="plus"
          label=${n.receitas.nova}
          @click=${()=>r(`receitas/nova`)}
        ></kk-icon-button>
      `;if(!G(t))return M===null?void 0:ie(M)},conteudo(e){let t=W.falhou(e);if(t!==null)return t;let[n]=e.args;return n===void 0?Y():G(e)?P===null?l():re(P):M===null?l():Q(M)}};export{ae as telaReceitas};