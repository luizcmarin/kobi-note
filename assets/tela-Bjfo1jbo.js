import{n as e}from"./texto-DhKYsM3f.js";import{J as t,_ as n,at as r,g as i,lt as a,m as ee,n as o,nt as s,st as c,tt as l,v as u,y as te}from"./index-D0n52eAb.js";import{CHAVE_LIVRE as d,FILTROS_INICIAIS as f,criarPasta as p,excluirAnotacao as m,excluirPasta as ne,listarAnotacoes as re,listarModelos as h,listarPastas as g,modeloDaReuniao as _,obterAnotacao as v,renomearPasta as y,salvarAnotacao as b}from"./dados-Vl9m1oPA.js";import{t as x}from"./unsafe-html-C_000-wi.js";import{t as S}from"./leitura-BGXwNh36.js";var C=400,w=1200,T=[],E=[],D=[],O=f,k=null,A,j=!1,M=null,N=null,P,F,I=!1,L=new S;function R(){return document.querySelector(`kk-editor`)}function z(e){let t=R();t!==null&&(t.value=e)}function B(e){return T.find(t=>t.chave===e)?.rotulo??e}function V(e){return T.find(t=>t.chave===e)?.conteudo}async function H(){D=await re(O),l()}async function U(e,t){if(L.fechar(),e===null){let e=V(t);k={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?d:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await v(e);if(t===void 0){s(`anotacoes`);return}k={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}l(),z(k.conteudo)}function W(e){let t=e.args.join(`/`);A===t||j||M!==null||(A=t,j=!0,(async()=>{try{[T,E]=await Promise.all([h(),g()]);let t=e.args[0];t===void 0?(k=null,await H()):t===`nova`?await U(null,e.args[1]??`LIVRE`):await U(Number.parseInt(t,10),d)}catch(t){console.error(`anotacoes: a carga falhou.`,t),M=te(t),N=e}finally{j=!1,l()}})())}function G(){let e=N;M=null,N=null,A=void 0,e!==null&&W(e),l()}function ie(e){O={...O,busca:e},clearTimeout(P),P=setTimeout(()=>void H(),C)}function K(e){O={...O,...e},H()}async function q(){let e=await n({titulo:r.pasta.nova,texto:r.pasta.novaTexto,placeholder:r.pasta.placeholder,rotuloConfirmar:r.acoes.criar,erroVazio:r.pasta.erroVazio});e!==null&&(await p(e),E=await g(),l())}async function J(e){let t=await n({titulo:r.pasta.renomear,valor:e.nome,placeholder:r.pasta.placeholder,rotuloConfirmar:r.acoes.renomear,erroVazio:r.pasta.erroVazio});t!==null&&t!==e.nome&&(await y(e,t),E=await g(),await H())}async function Y(e){await i({titulo:r.pasta.excluir,texto:r.pasta.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&(await ne(e),E=await g(),O.pastaId===e&&(O={...O,pastaId:null}),k?.pastaId===e&&(k={...k,pastaId:null}),await H())}function ae(n){let i=e(n.conteudo,150);return a`
    <button
      class="cartao"
      ?data-fixada=${n.esta_fixada===1}
      @click=${()=>s(`anotacoes/${n.id??``}`)}
    >
      <span class="cartao__topo">
        ${n.esta_fixada===1?a`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:c}
        <span class="cartao__titulo">${n.titulo||r.anotacoes.semTitulo}</span>
      </span>

      ${i===``?c:a`<span class="cartao__previa">${i}</span>`}

      <span class="cartao__rodape">
        ${n.tipo_modelo===`LIVRE`?c:a`<kk-badge variant="neutral" pill>${B(n.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${t(n.data_modificacao)}</span>
      </span>
    </button>
  `}function oe(){let e=E.find(e=>e.id===O.pastaId);return a`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${r.anotacoes.buscar}
        .value=${O.busca}
        @kk-input=${e=>ie(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${O.modeloChave}
        placeholder=${r.anotacoes.todosModelos}
        @kk-change=${e=>K({modeloChave:e.target.value})}
      >
        <kk-option value="">${r.anotacoes.todosModelos}</kk-option>
        ${T.map(e=>a`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${O.pastaId===null&&!O.arquivadas}
        @click=${()=>K({pastaId:null,arquivadas:!1})}
      >
        ${r.anotacoes.todas}
      </button>

      ${E.map(e=>a`
          <button
            class="chip"
            ?data-ativo=${O.pastaId===e.id}
            @click=${()=>K({pastaId:e.id??null,arquivadas:!1})}
          >
            ${e.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${O.arquivadas}
        @click=${()=>K({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${r.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${r.pasta.nova} @click=${()=>void q()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?c:a`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${e.nome}
            </span>
            <kk-button size="small" @click=${()=>void J(e)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${r.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void Y(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${r.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${D.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${O.arquivadas?r.anotacoes.semArquivadas:r.anotacoes.semAnotacoes}</p>
          </div>
        `:a`<div class="cartoes">${D.map(e=>ae(e))}</div>`}

    <kk-dialog
      label=${r.anotacoes.escolhaModelo}
      ?open=${I}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(I=!1)}}
    >
      <div class="modelos">
        ${T.map(e=>a`
            <button
              class="modelo"
              @click=${()=>{I=!1,s(`anotacoes/nova/${e.chave}`)}}
            >
              <kk-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function X(){k!==null&&(k={...k,status:r.anotacoes.salvando},l(),clearTimeout(F),F=setTimeout(()=>void Z(),w))}async function Z(){if(k===null)return;if(k.titulo.trim()===``){k={...k,status:r.anotacoes.informeTitulo},l();return}let e=Date.now(),n={titulo:k.titulo,conteudo:k.conteudo,tipo_modelo:k.tipoModelo,pasta_id:k.pastaId,esta_fixada:+!!k.fixada,esta_arquivada:+!!k.arquivada,data_modificacao:e,...k.id===null?{data_criacao:e}:{id:k.id}},i=await b(n);k.id===null&&(k={...k,id:i},history.replaceState(null,``,`#/anotacoes/${i}`)),k={...k,status:r.anotacoes.salvoAs(t(e))},l()}async function Q(e){k!==null&&(k=e===`fixada`?{...k,fixada:!k.fixada}:{...k,arquivada:!k.arquivada},l(),k.id!==null&&await Z())}async function se(){let e=k?.id;e!=null&&await i({titulo:r.anotacoes.excluir,texto:r.anotacoes.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&(await m(e),ee(r.anotacoes.excluida),s(`anotacoes`))}function $(e){return a`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo"
        placeholder=${r.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{k={...e,titulo:t.target.value},X()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{k={...e,pastaId:null},X()}}
        >
          ${r.anotacoes.semPasta}
        </button>

        ${E.map(t=>a`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{k={...e,pastaId:t.id??null},X()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${r.pasta.nova} @click=${()=>void q()}>
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{k={...e,conteudo:t.detail.value},X()}}
      ></kk-editor>
    </div>

    ${le(e)}
  `}function ce(e){return`${e.titulo}. ${e.conteudo}`}function le(e){return L.overlay(a`
      <h1>${e.titulo||r.anotacoes.semTitulo}</h1>
      <div class="prosa">${x(o(e.conteudo))}</div>
    `,()=>ce(e))}function ue(){s(`anotacoes/nova/${_()}`)}function de(){return a`
    <kk-icon-button
      name="calendar-check"
      label=${r.anotacoes.reuniao}
      @click=${ue}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${r.anotacoes.nova}
      @click=${async()=>{T=await h(),I=!0,l()}}
    ></kk-icon-button>
  `}function fe(e){if(e.id!==null)return a`
    <kk-icon-button
      name="pin"
      variant=${e.fixada?`filled`:`outline`}
      label=${e.fixada?r.anotacoes.desafixar:r.anotacoes.fixar}
      @click=${()=>void Q(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${e.arquivada?`filled`:`outline`}
      label=${e.arquivada?r.anotacoes.restaurar:r.anotacoes.arquivar}
      @click=${()=>void Q(`arquivada`)}
    ></kk-icon-button>
    ${L.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${r.anotacoes.excluir}
      @click=${()=>void se()}
    ></kk-icon-button>
  `}var pe={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=k?.titulo.trim()??``;return t===``?r.anotacoes.nova:t},acoes(e){return e.args.length===0?de():k===null?void 0:fe(k)},conteudo(e){return W(e),M===null?e.args.length===0?oe():k===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(k):u(M,G)}};export{pe as telaAnotacoes};