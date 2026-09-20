import{n as e}from"./texto-DhKYsM3f.js";import{$ as t,_ as n,b as r,ct as i,dt as a,g as o,ht as s,m as c,n as l,pt as u,st as d,y as f}from"./index-CRHxduAl.js";import{CHAVE_LIVRE as p,FILTROS_INICIAIS as m,criarPasta as h,excluirAnotacao as ee,excluirPasta as te,listarAnotacoes as g,listarModelos as _,listarPastas as v,modeloDaReuniao as y,obterAnotacao as b,renomearPasta as x,salvarAnotacao as ne}from"./dados-DmrSQMqn.js";import{t as re}from"./unsafe-html-D0pFEAyA.js";import{t as S}from"./leitura-4vfP5Wgi.js";var C=400,w=1200,T=[],E=[],D=[],O=m,k=null,A,j=!1,M=null,N=null,P,F,I=!1,L=new S;function R(){return document.querySelector(`kk-editor`)}function z(e){let t=R();t!==null&&(t.value=e)}function B(e){return T.find(t=>t.chave===e)?.rotulo??e}function V(e){return T.find(t=>t.chave===e)?.conteudo}async function H(){D=await g(O),d()}async function U(e,t){if(L.fechar(),e===null){let e=V(t);k={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?p:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await b(e);if(t===void 0){i(`anotacoes`);return}k={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}d(),z(k.conteudo)}function W(e){let t=e.args.join(`/`);A===t||j||M!==null||(A=t,j=!0,(async()=>{try{[T,E]=await Promise.all([_(),v()]);let t=e.args[0];t===void 0?(k=null,await H()):t===`nova`?await U(null,e.args[1]??`LIVRE`):await U(Number.parseInt(t,10),p)}catch(t){console.error(`anotacoes: a carga falhou.`,t),M=r(t),N=e}finally{j=!1,d()}})())}function G(){let e=N;M=null,N=null,A=void 0,e!==null&&W(e),d()}function K(e){O={...O,busca:e},clearTimeout(P),P=setTimeout(()=>void H(),C)}function q(e){O={...O,...e},H()}async function J(){let e=await n({titulo:a.pasta.nova,texto:a.pasta.novaTexto,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.criar,erroVazio:a.pasta.erroVazio});e!==null&&(await h(e),E=await v(),d())}async function Y(e){let t=await n({titulo:a.pasta.renomear,valor:e.nome,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.renomear,erroVazio:a.pasta.erroVazio});t!==null&&t!==e.nome&&(await x(e,t),E=await v(),await H())}async function X(e){await o({titulo:a.pasta.excluir,texto:a.pasta.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await te(e),E=await v(),O.pastaId===e&&(O={...O,pastaId:null}),k?.pastaId===e&&(k={...k,pastaId:null}),await H())}function ie(n){let r=e(n.conteudo,150);return s`
    <button
      class="cartao"
      ?data-fixada=${n.esta_fixada===1}
      @click=${()=>i(`anotacoes/${n.id??``}`)}
    >
      <span class="cartao__topo">
        ${n.esta_fixada===1?s`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:u}
        <span class="cartao__titulo">${n.titulo||a.anotacoes.semTitulo}</span>
      </span>

      ${r===``?u:s`<span class="cartao__previa">${r}</span>`}

      <span class="cartao__rodape">
        ${n.tipo_modelo===`LIVRE`?u:s`<kk-badge variant="neutral" pill>${B(n.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${t(n.data_modificacao)}</span>
      </span>
    </button>
  `}function ae(){let e=E.find(e=>e.id===O.pastaId);return s`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${a.anotacoes.buscar}
        .value=${O.busca}
        @kk-input=${e=>K(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${O.modeloChave}
        placeholder=${a.anotacoes.todosModelos}
        @kk-change=${e=>q({modeloChave:e.target.value})}
      >
        <kk-option value="">${a.anotacoes.todosModelos}</kk-option>
        ${T.map(e=>s`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${O.pastaId===null&&!O.arquivadas}
        @click=${()=>q({pastaId:null,arquivadas:!1})}
      >
        ${a.anotacoes.todas}
      </button>

      ${E.map(e=>s`
          <button
            class="chip"
            ?data-ativo=${O.pastaId===e.id}
            @click=${()=>q({pastaId:e.id??null,arquivadas:!1})}
          >
            ${e.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${O.arquivadas}
        @click=${()=>q({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${a.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${a.pasta.nova} @click=${()=>void J()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?u:s`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${e.nome}
            </span>
            <kk-button size="small" @click=${()=>void Y(e)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${a.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void X(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${a.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${D.length===0?s`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${O.arquivadas?a.anotacoes.semArquivadas:a.anotacoes.semAnotacoes}</p>
          </div>
        `:s`<div class="cartoes">${D.map(e=>ie(e))}</div>`}

    <kk-dialog
      label=${a.anotacoes.escolhaModelo}
      ?open=${I}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(I=!1)}}
    >
      <div class="modelos">
        ${T.map(e=>s`
            <button
              class="modelo"
              @click=${()=>{I=!1,i(`anotacoes/nova/${e.chave}`)}}
            >
              <kk-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function Z(){k!==null&&(k={...k,status:a.anotacoes.salvando},d(),clearTimeout(F),F=setTimeout(()=>void Q(),w))}async function Q(){if(k===null)return;if(k.titulo.trim()===``){k={...k,status:a.anotacoes.informeTitulo},d();return}let e=Date.now(),n={titulo:k.titulo,conteudo:k.conteudo,tipo_modelo:k.tipoModelo,pasta_id:k.pastaId,esta_fixada:+!!k.fixada,esta_arquivada:+!!k.arquivada,data_modificacao:e,...k.id===null?{data_criacao:e}:{id:k.id}},r=await ne(n);k.id===null&&(k={...k,id:r},history.replaceState(null,``,`#/anotacoes/${r}`)),k={...k,status:a.anotacoes.salvoAs(t(e))},d()}async function $(e){k!==null&&(k=e===`fixada`?{...k,fixada:!k.fixada}:{...k,arquivada:!k.arquivada},d(),k.id!==null&&await Q())}async function oe(){let e=k?.id;e!=null&&await o({titulo:a.anotacoes.excluir,texto:a.anotacoes.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await ee(e),c(a.anotacoes.excluida),i(`anotacoes`))}function se(e){return s`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo"
        placeholder=${a.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{k={...e,titulo:t.target.value},Z()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{k={...e,pastaId:null},Z()}}
        >
          ${a.anotacoes.semPasta}
        </button>

        ${E.map(t=>s`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{k={...e,pastaId:t.id??null},Z()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${a.pasta.nova} @click=${()=>void J()}>
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{k={...e,conteudo:t.detail.value},Z()}}
      ></kk-editor>
    </div>

    ${le(e)}
  `}function ce(e){return`${e.titulo}. ${e.conteudo}`}function le(e){return L.overlay(s`
      <h1>${e.titulo||a.anotacoes.semTitulo}</h1>
      <div class="prosa">${re(l(e.conteudo))}</div>
    `,()=>ce(e))}function ue(){i(`anotacoes/nova/${y()}`)}function de(){return s`
    <kk-icon-button
      name="calendar-check"
      label=${a.anotacoes.reuniao}
      @click=${ue}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${a.anotacoes.nova}
      @click=${async()=>{T=await _(),I=!0,d()}}
    ></kk-icon-button>
  `}function fe(e){if(e.id!==null)return s`
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
    ${L.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${a.anotacoes.excluir}
      @click=${()=>void oe()}
    ></kk-icon-button>
  `}var pe={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=k?.titulo.trim()??``;return t===``?a.anotacoes.nova:t},acoes(e){return e.args.length===0?de():k===null?void 0:fe(k)},conteudo(e){return W(e),M===null?e.args.length===0?ae():k===null?s`<div class="carregando"><kk-spinner></kk-spinner></div>`:se(k):f(M,G)}};export{pe as telaAnotacoes};