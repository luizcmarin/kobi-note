import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{r}from"./data-DRe9t3tD.js";import{D as i,E as a,n as o,o as s,r as c,s as l}from"./index-QyzyfOkc.js";import{CHAVE_LIVRE as u,FILTROS_INICIAIS as d,criarPasta as f,excluirAnotacao as p,excluirPasta as ee,listarAnotacoes as m,listarModelos as h,listarPastas as g,modeloDaReuniao as _,obterAnotacao as v,renomearPasta as y,salvarAnotacao as b}from"./dados-DvkBVRWY.js";import{t as x}from"./unsafe-html-BBiWdB6b.js";import{n as S,t as C}from"./leitura-Dlv1ocwB.js";var w=400,T=1200,E=[],D=[],O=[],k=d,A=null,j,M=!1,N,P,F=!1,I=new C;function L(){return document.querySelector(`kk-editor`)}function R(e){let t=L();t!==null&&(t.value=e)}function z(e){return E.find(t=>t.chave===e)?.rotulo??e}function B(e){return E.find(t=>t.chave===e)?.conteudo}async function V(){O=await m(k),a()}async function H(e,t){if(I.fechar(),e===null){let e=B(t);A={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?u:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await v(e);if(t===void 0){i(`anotacoes`);return}A={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}a(),R(A.conteudo)}function U(e){let t=e.args.join(`/`);j===t||M||(j=t,M=!0,(async()=>{try{[E,D]=await Promise.all([h(),g()]);let t=e.args[0];t===void 0?(A=null,await V()):t===`nova`?await H(null,e.args[1]??`LIVRE`):await H(Number.parseInt(t,10),u)}finally{M=!1,a()}})())}function W(e){k={...k,busca:e},clearTimeout(N),N=setTimeout(()=>void V(),w)}function G(e){k={...k,...e},V()}async function K(){let e=await l({titulo:n.pasta.nova,texto:n.pasta.novaTexto,placeholder:n.pasta.placeholder,rotuloConfirmar:n.acoes.criar,erroVazio:n.pasta.erroVazio});e!==null&&(await f(e),D=await g(),a())}async function q(e){let t=await l({titulo:n.pasta.renomear,valor:e.nome,placeholder:n.pasta.placeholder,rotuloConfirmar:n.acoes.renomear,erroVazio:n.pasta.erroVazio});t!==null&&t!==e.nome&&(await y(e,t),D=await g(),await V())}async function J(e){await s({titulo:n.pasta.excluir,texto:n.pasta.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await ee(e),D=await g(),k.pastaId===e&&(k={...k,pastaId:null}),A?.pastaId===e&&(A={...A,pastaId:null}),await V())}function Y(a){let o=S(a.conteudo,150);return e`
    <button
      class="cartao"
      ?data-fixada=${a.esta_fixada===1}
      @click=${()=>i(`anotacoes/${a.id??``}`)}
    >
      <span class="cartao__topo">
        ${a.esta_fixada===1?e`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:t}
        <span class="cartao__titulo">${a.titulo||n.anotacoes.semTitulo}</span>
      </span>

      ${o===``?t:e`<span class="cartao__previa">${o}</span>`}

      <span class="cartao__rodape">
        ${a.tipo_modelo===`LIVRE`?t:e`<kk-badge variant="neutral" pill>${z(a.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${r(a.data_modificacao)}</span>
      </span>
    </button>
  `}function X(){let r=D.find(e=>e.id===k.pastaId);return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.anotacoes.buscar}
        .value=${k.busca}
        @kk-input=${e=>W(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${k.modeloChave}
        placeholder=${n.anotacoes.todosModelos}
        @kk-change=${e=>G({modeloChave:e.target.value})}
      >
        <kk-option value="">${n.anotacoes.todosModelos}</kk-option>
        ${E.map(t=>e`<kk-option value=${t.chave}>${t.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${k.pastaId===null&&!k.arquivadas}
        @click=${()=>G({pastaId:null,arquivadas:!1})}
      >
        ${n.anotacoes.todas}
      </button>

      ${D.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${k.pastaId===t.id}
            @click=${()=>G({pastaId:t.id??null,arquivadas:!1})}
          >
            ${t.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${k.arquivadas}
        @click=${()=>G({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${n.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${n.pasta.nova} @click=${()=>void K()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${r===void 0?t:e`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${r.nome}
            </span>
            <kk-button size="small" @click=${()=>void q(r)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${n.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void J(r.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${O.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${k.arquivadas?n.anotacoes.semArquivadas:n.anotacoes.semAnotacoes}</p>
          </div>
        `:e`<div class="cartoes">${O.map(e=>Y(e))}</div>`}

    <kk-dialog
      label=${n.anotacoes.escolhaModelo}
      ?open=${F}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(F=!1)}}
    >
      <div class="modelos">
        ${E.map(t=>e`
            <button
              class="modelo"
              @click=${()=>{F=!1,i(`anotacoes/nova/${t.chave}`)}}
            >
              <kk-icon name=${t.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${t.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function Z(){A!==null&&(A={...A,status:n.anotacoes.salvando},a(),clearTimeout(P),P=setTimeout(()=>void Q(),T))}async function Q(){if(A===null)return;if(A.titulo.trim()===``){A={...A,status:n.anotacoes.informeTitulo},a();return}let e=Date.now(),t={titulo:A.titulo,conteudo:A.conteudo,tipo_modelo:A.tipoModelo,pasta_id:A.pastaId,esta_fixada:+!!A.fixada,esta_arquivada:+!!A.arquivada,data_modificacao:e,...A.id===null?{data_criacao:e}:{id:A.id}},i=await b(t);A.id===null&&(A={...A,id:i},history.replaceState(null,``,`#/anotacoes/${i}`)),A={...A,status:n.anotacoes.salvoAs(r(e))},a()}async function $(e){A!==null&&(A=e===`fixada`?{...A,fixada:!A.fixada}:{...A,arquivada:!A.arquivada},a(),A.id!==null&&await Q())}async function te(){let e=A?.id;e!=null&&await s({titulo:n.anotacoes.excluir,texto:n.anotacoes.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await p(e),c(n.anotacoes.excluida),i(`anotacoes`))}function ne(t){return e`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${n.anotacoes.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{A={...t,titulo:e.target.value},Z()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${t.pastaId===null}
          @click=${()=>{A={...t,pastaId:null},Z()}}
        >
          ${n.anotacoes.semPasta}
        </button>

        ${D.map(n=>e`
            <button
              class="chip"
              ?data-ativo=${t.pastaId===n.id}
              @click=${()=>{A={...t,pastaId:n.id??null},Z()}}
            >
              ${n.nome}
            </button>
          `)}

        <button class="chip" title=${n.pasta.nova} @click=${()=>void K()}>
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <div class="editor__linha">
        <span class="editor__status">${t.status}</span>
      </div>

      <kk-editor
        @kk-input=${e=>{A={...t,conteudo:e.detail.value},Z()}}
      ></kk-editor>
    </div>

    ${ie(t)}
  `}function re(e){return`${e.titulo}. ${e.conteudo}`}function ie(t){return I.overlay(e`
      <h1>${t.titulo||n.anotacoes.semTitulo}</h1>
      <div class="prosa">${x(o(t.conteudo))}</div>
    `,()=>re(t))}function ae(){i(`anotacoes/nova/${_()}`)}function oe(){return e`
    <kk-icon-button
      name="calendar-check"
      label=${n.anotacoes.reuniao}
      @click=${ae}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${n.anotacoes.nova}
      @click=${async()=>{E=await h(),F=!0,a()}}
    ></kk-icon-button>
  `}function se(t){if(t.id!==null)return e`
    <kk-icon-button
      name="pin"
      variant=${t.fixada?`filled`:`outline`}
      label=${t.fixada?n.anotacoes.desafixar:n.anotacoes.fixar}
      @click=${()=>void $(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${t.arquivada?`filled`:`outline`}
      label=${t.arquivada?n.anotacoes.restaurar:n.anotacoes.arquivar}
      @click=${()=>void $(`arquivada`)}
    ></kk-icon-button>
    ${I.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${n.anotacoes.excluir}
      @click=${()=>void te()}
    ></kk-icon-button>
  `}var ce={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=A?.titulo.trim()??``;return t===``?n.anotacoes.nova:t},acoes(e){return e.args.length===0?oe():A===null?void 0:se(A)},conteudo(t){return U(t),t.args.length===0?X():A===null?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:ne(A)}};export{ce as telaAnotacoes};