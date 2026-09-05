import{$ as e,Q as t,at as n,m as r,n as i,nt as a,p as o,rt as s,u as c,v as l}from"./index-CrGkgQIm.js";import{CHAVE_LIVRE as u,FILTROS_INICIAIS as d,criarPasta as f,excluirAnotacao as p,excluirPasta as m,listarAnotacoes as h,listarModelos as g,listarPastas as _,modeloDaReuniao as v,obterAnotacao as y,renomearPasta as b,salvarAnotacao as x}from"./dados-R5F-5aE_.js";import{t as S}from"./unsafe-html-DqNkPOsE.js";import{n as C,t as w}from"./leitura-B2K4tT1h.js";var ee=400,T=1200,E=[],D=[],O=[],k=d,A=null,j,M=!1,N,P,F=!1,I=new w;function L(){return document.querySelector(`kk-editor`)}function R(e){let t=L();t!==null&&(t.value=e)}function z(e){return E.find(t=>t.chave===e)?.rotulo??e}function B(e){return E.find(t=>t.chave===e)?.conteudo}async function V(){O=await h(k),t()}async function H(n,r){if(I.fechar(),n===null){let e=B(r);A={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?u:r,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await y(n);if(t===void 0){e(`anotacoes`);return}A={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}t(),R(A.conteudo)}function U(e){let n=e.args.join(`/`);j===n||M||(j=n,M=!0,(async()=>{try{[E,D]=await Promise.all([g(),_()]);let t=e.args[0];t===void 0?(A=null,await V()):t===`nova`?await H(null,e.args[1]??`LIVRE`):await H(Number.parseInt(t,10),u)}finally{M=!1,t()}})())}function W(e){k={...k,busca:e},clearTimeout(N),N=setTimeout(()=>void V(),ee)}function G(e){k={...k,...e},V()}async function K(){let e=await r({titulo:a.pasta.nova,texto:a.pasta.novaTexto,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.criar,erroVazio:a.pasta.erroVazio});e!==null&&(await f(e),D=await _(),t())}async function q(e){let t=await r({titulo:a.pasta.renomear,valor:e.nome,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.renomear,erroVazio:a.pasta.erroVazio});t!==null&&t!==e.nome&&(await b(e,t),D=await _(),await V())}async function J(e){await o({titulo:a.pasta.excluir,texto:a.pasta.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await m(e),D=await _(),k.pastaId===e&&(k={...k,pastaId:null}),A?.pastaId===e&&(A={...A,pastaId:null}),await V())}function Y(t){let r=C(t.conteudo,150);return n`
    <button
      class="cartao"
      ?data-fixada=${t.esta_fixada===1}
      @click=${()=>e(`anotacoes/${t.id??``}`)}
    >
      <span class="cartao__topo">
        ${t.esta_fixada===1?n`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:s}
        <span class="cartao__titulo">${t.titulo||a.anotacoes.semTitulo}</span>
      </span>

      ${r===``?s:n`<span class="cartao__previa">${r}</span>`}

      <span class="cartao__rodape">
        ${t.tipo_modelo===`LIVRE`?s:n`<kk-badge variant="neutral" pill>${z(t.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${l(t.data_modificacao)}</span>
      </span>
    </button>
  `}function X(){let t=D.find(e=>e.id===k.pastaId);return n`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${a.anotacoes.buscar}
        .value=${k.busca}
        @kk-input=${e=>W(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${k.modeloChave}
        placeholder=${a.anotacoes.todosModelos}
        @kk-change=${e=>G({modeloChave:e.target.value})}
      >
        <kk-option value="">${a.anotacoes.todosModelos}</kk-option>
        ${E.map(e=>n`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${k.pastaId===null&&!k.arquivadas}
        @click=${()=>G({pastaId:null,arquivadas:!1})}
      >
        ${a.anotacoes.todas}
      </button>

      ${D.map(e=>n`
          <button
            class="chip"
            ?data-ativo=${k.pastaId===e.id}
            @click=${()=>G({pastaId:e.id??null,arquivadas:!1})}
          >
            ${e.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${k.arquivadas}
        @click=${()=>G({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${a.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${a.pasta.nova} @click=${()=>void K()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${t===void 0?s:n`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${t.nome}
            </span>
            <kk-button size="small" @click=${()=>void q(t)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${a.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void J(t.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${a.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${O.length===0?n`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${k.arquivadas?a.anotacoes.semArquivadas:a.anotacoes.semAnotacoes}</p>
          </div>
        `:n`<div class="cartoes">${O.map(e=>Y(e))}</div>`}

    <kk-dialog
      label=${a.anotacoes.escolhaModelo}
      ?open=${F}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(F=!1)}}
    >
      <div class="modelos">
        ${E.map(t=>n`
            <button
              class="modelo"
              @click=${()=>{F=!1,e(`anotacoes/nova/${t.chave}`)}}
            >
              <kk-icon name=${t.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${t.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function Z(){A!==null&&(A={...A,status:a.anotacoes.salvando},t(),clearTimeout(P),P=setTimeout(()=>void Q(),T))}async function Q(){if(A===null)return;if(A.titulo.trim()===``){A={...A,status:a.anotacoes.informeTitulo},t();return}let e=Date.now(),n={titulo:A.titulo,conteudo:A.conteudo,tipo_modelo:A.tipoModelo,pasta_id:A.pastaId,esta_fixada:+!!A.fixada,esta_arquivada:+!!A.arquivada,data_modificacao:e,...A.id===null?{data_criacao:e}:{id:A.id}},r=await x(n);A.id===null&&(A={...A,id:r},history.replaceState(null,``,`#/anotacoes/${r}`)),A={...A,status:a.anotacoes.salvoAs(l(e))},t()}async function $(e){A!==null&&(A=e===`fixada`?{...A,fixada:!A.fixada}:{...A,arquivada:!A.arquivada},t(),A.id!==null&&await Q())}async function te(){let t=A?.id;t!=null&&await o({titulo:a.anotacoes.excluir,texto:a.anotacoes.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await p(t),c(a.anotacoes.excluida),e(`anotacoes`))}function ne(e){return n`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${a.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{A={...e,titulo:t.target.value},Z()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{A={...e,pastaId:null},Z()}}
        >
          ${a.anotacoes.semPasta}
        </button>

        ${D.map(t=>n`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{A={...e,pastaId:t.id??null},Z()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${a.pasta.nova} @click=${()=>void K()}>
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{A={...e,conteudo:t.detail.value},Z()}}
      ></kk-editor>
    </div>

    ${ie(e)}
  `}function re(e){return`${e.titulo}. ${e.conteudo}`}function ie(e){return I.overlay(n`
      <h1>${e.titulo||a.anotacoes.semTitulo}</h1>
      <div class="prosa">${S(i(e.conteudo))}</div>
    `,()=>re(e))}function ae(){e(`anotacoes/nova/${v()}`)}function oe(){return n`
    <kk-icon-button
      name="calendar-check"
      label=${a.anotacoes.reuniao}
      @click=${ae}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${a.anotacoes.nova}
      @click=${async()=>{E=await g(),F=!0,t()}}
    ></kk-icon-button>
  `}function se(e){if(e.id!==null)return n`
    <kk-icon-button
      name="pin"
      variant=${e.fixada?`filled`:`outline`}
      label=${e.fixada?a.anotacoes.desafixar:a.anotacoes.fixar}
      @click=${()=>void $(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${e.arquivada?`filled`:`outline`}
      label=${e.arquivada?a.anotacoes.restaurar:a.anotacoes.arquivar}
      @click=${()=>void $(`arquivada`)}
    ></kk-icon-button>
    ${I.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${a.anotacoes.excluir}
      @click=${()=>void te()}
    ></kk-icon-button>
  `}var ce={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=A?.titulo.trim()??``;return t===``?a.anotacoes.nova:t},acoes(e){return e.args.length===0?oe():A===null?void 0:se(A)},conteudo(e){return U(e),e.args.length===0?X():A===null?n`<div class="carregando"><kk-spinner></kk-spinner></div>`:ne(A)}};export{ce as telaAnotacoes};