import{n as e}from"./texto-DhKYsM3f.js";import{Q as t,S as n,at as r,ct as i,ft as a,g as o,h as s,it as c,n as ee,u as te,ut as l,x as ne}from"./index-DtxwN5g2.js";import{CHAVE_LIVRE as u,FILTROS_INICIAIS as re,criarPasta as d,excluirAnotacao as f,excluirPasta as ie,listarAnotacoes as p,listarModelos as m,listarPastas as h,modeloDaReuniao as g,obterAnotacao as _,renomearPasta as v,salvarAnotacao as y}from"./dados-BVOaoWLs.js";import{t as b}from"./unsafe-html-e5X31ccZ.js";import{t as x}from"./leitura-w5B6dokf.js";var S=400,C=1200,w=[],T=[],E=[],D=re,O=null,k,A=!1,j=null,M=null,N,P,F=!1,I=new x;function L(){return document.querySelector(`kk-editor`)}function R(e){let t=L();t!==null&&(t.value=e)}function z(e){return w.find(t=>t.chave===e)?.rotulo??e}function B(e){return w.find(t=>t.chave===e)?.conteudo}async function V(){E=await p(D),c()}async function H(e,t){if(I.fechar(),e===null){let e=B(t);O={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?u:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await _(e);if(t===void 0){r(`anotacoes`);return}O={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}c(),R(O.conteudo)}function U(e){let t=e.args.join(`/`);k===t||A||j!==null||(k=t,A=!0,(async()=>{try{[w,T]=await Promise.all([m(),h()]);let t=e.args[0];t===void 0?(O=null,await V()):t===`nova`?await H(null,e.args[1]??`LIVRE`):await H(Number.parseInt(t,10),u)}catch(t){console.error(`anotacoes: a carga falhou.`,t),j=n(t),M=e}finally{A=!1,c()}})())}function W(){let e=M;j=null,M=null,k=void 0,e!==null&&U(e),c()}function G(e){D={...D,busca:e},clearTimeout(N),N=setTimeout(()=>void V(),S)}function K(e){D={...D,...e},V()}async function q(){let e=await o({titulo:i.pasta.nova,texto:i.pasta.novaTexto,placeholder:i.pasta.placeholder,rotuloConfirmar:i.acoes.criar,erroVazio:i.pasta.erroVazio});e!==null&&(await d(e),T=await h(),c())}async function J(e){let t=await o({titulo:i.pasta.renomear,valor:e.nome,placeholder:i.pasta.placeholder,rotuloConfirmar:i.acoes.renomear,erroVazio:i.pasta.erroVazio});t!==null&&t!==e.nome&&(await v(e,t),T=await h(),await V())}async function Y(e){await s({titulo:i.pasta.excluir,texto:i.pasta.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&(await ie(e),T=await h(),D.pastaId===e&&(D={...D,pastaId:null}),O?.pastaId===e&&(O={...O,pastaId:null}),await V())}function ae(n){let o=e(n.conteudo,150);return a`
    <button
      class="cartao"
      ?data-fixada=${n.esta_fixada===1}
      @click=${()=>r(`anotacoes/${n.id??``}`)}
    >
      <span class="cartao__topo">
        ${n.esta_fixada===1?a`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:l}
        <span class="cartao__titulo">${n.titulo||i.anotacoes.semTitulo}</span>
      </span>

      ${o===``?l:a`<span class="cartao__previa">${o}</span>`}

      <span class="cartao__rodape">
        ${n.tipo_modelo===`LIVRE`?l:a`<kk-badge variant="neutral" pill>${z(n.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${t(n.data_modificacao)}</span>
      </span>
    </button>
  `}function oe(){let e=T.find(e=>e.id===D.pastaId);return a`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${i.anotacoes.buscar}
        .value=${D.busca}
        @kk-input=${e=>G(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${D.modeloChave}
        placeholder=${i.anotacoes.todosModelos}
        @kk-change=${e=>K({modeloChave:e.target.value})}
      >
        <kk-option value="">${i.anotacoes.todosModelos}</kk-option>
        ${w.map(e=>a`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${D.pastaId===null&&!D.arquivadas}
        @click=${()=>K({pastaId:null,arquivadas:!1})}
      >
        ${i.anotacoes.todas}
      </button>

      ${T.map(e=>a`
          <button
            class="chip"
            ?data-ativo=${D.pastaId===e.id}
            @click=${()=>K({pastaId:e.id??null,arquivadas:!1})}
          >
            ${e.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${D.arquivadas}
        @click=${()=>K({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${i.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${i.pasta.nova} @click=${()=>void q()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?l:a`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${e.nome}
            </span>
            <kk-button size="small" @click=${()=>void J(e)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${i.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void Y(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${i.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${E.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${D.arquivadas?i.anotacoes.semArquivadas:i.anotacoes.semAnotacoes}</p>
          </div>
        `:a`<div class="cartoes">${E.map(e=>ae(e))}</div>`}

    <kk-dialog
      label=${i.anotacoes.escolhaModelo}
      ?open=${F}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(F=!1)}}
    >
      <div class="modelos">
        ${w.map(e=>a`
            <button
              class="modelo"
              @click=${()=>{F=!1,r(`anotacoes/nova/${e.chave}`)}}
            >
              <kk-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function X(){O!==null&&(O={...O,status:i.anotacoes.salvando},c(),clearTimeout(P),P=setTimeout(()=>void Z(),C))}async function Z(){if(O===null)return;if(O.titulo.trim()===``){O={...O,status:i.anotacoes.informeTitulo},c();return}let e=Date.now(),n={titulo:O.titulo,conteudo:O.conteudo,tipo_modelo:O.tipoModelo,pasta_id:O.pastaId,esta_fixada:+!!O.fixada,esta_arquivada:+!!O.arquivada,data_modificacao:e,...O.id===null?{data_criacao:e}:{id:O.id}},r=await y(n);O.id===null&&(O={...O,id:r},history.replaceState(null,``,`#/anotacoes/${r}`)),O={...O,status:i.anotacoes.salvoAs(t(e))},c()}async function Q(e){O!==null&&(O=e===`fixada`?{...O,fixada:!O.fixada}:{...O,arquivada:!O.arquivada},c(),O.id!==null&&await Z())}async function se(){let e=O?.id;e!=null&&await s({titulo:i.anotacoes.excluir,texto:i.anotacoes.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&(await f(e),te(i.anotacoes.excluida),r(`anotacoes`))}function $(e){return a`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo"
        placeholder=${i.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{O={...e,titulo:t.target.value},X()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{O={...e,pastaId:null},X()}}
        >
          ${i.anotacoes.semPasta}
        </button>

        ${T.map(t=>a`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{O={...e,pastaId:t.id??null},X()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${i.pasta.nova} @click=${()=>void q()}>
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{O={...e,conteudo:t.detail.value},X()}}
      ></kk-editor>
    </div>

    ${le(e)}
  `}function ce(e){return`${e.titulo}. ${e.conteudo}`}function le(e){return I.overlay(a`
      <h1>${e.titulo||i.anotacoes.semTitulo}</h1>
      <div class="prosa">${b(ee(e.conteudo))}</div>
    `,()=>ce(e))}function ue(){r(`anotacoes/nova/${g()}`)}function de(){return a`
    <kk-icon-button
      name="calendar-check"
      label=${i.anotacoes.reuniao}
      @click=${ue}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${i.anotacoes.nova}
      @click=${async()=>{w=await m(),F=!0,c()}}
    ></kk-icon-button>
  `}function fe(e){if(e.id!==null)return a`
    <kk-icon-button
      name="pin"
      variant=${e.fixada?`filled`:`outline`}
      label=${e.fixada?i.anotacoes.desafixar:i.anotacoes.fixar}
      @click=${()=>void Q(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${e.arquivada?`filled`:`outline`}
      label=${e.arquivada?i.anotacoes.restaurar:i.anotacoes.arquivar}
      @click=${()=>void Q(`arquivada`)}
    ></kk-icon-button>
    ${I.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${i.anotacoes.excluir}
      @click=${()=>void se()}
    ></kk-icon-button>
  `}var pe={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=O?.titulo.trim()??``;return t===``?i.anotacoes.nova:t},acoes(e){return e.args.length===0?de():O===null?void 0:fe(O)},conteudo(e){return U(e),j===null?e.args.length===0?oe():O===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(O):ne(j,W)}};export{pe as telaAnotacoes};