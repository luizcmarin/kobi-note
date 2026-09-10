import{n as e}from"./texto-DhKYsM3f.js";import{E as t,T as n,ct as r,et as i,it as a,m as o,n as s,ot as c,p as l,tt as u,u as ee,y as d}from"./index-Co1o08g7.js";import{CHAVE_LIVRE as f,FILTROS_INICIAIS as te,criarPasta as ne,excluirAnotacao as p,excluirPasta as m,listarAnotacoes as h,listarModelos as g,listarPastas as _,modeloDaReuniao as re,obterAnotacao as v,renomearPasta as y,salvarAnotacao as b}from"./dados-Crs6vui7.js";import{t as x}from"./unsafe-html-DxbCfdWm.js";import{t as S}from"./leitura-CBCR8yqz.js";var C=400,w=1200,T=[],E=[],D=[],O=te,k=null,A,j=!1,M=null,N=null,P,F,I=!1,L=new S;function R(){return document.querySelector(`kk-editor`)}function z(e){let t=R();t!==null&&(t.value=e)}function B(e){return T.find(t=>t.chave===e)?.rotulo??e}function V(e){return T.find(t=>t.chave===e)?.conteudo}async function H(){D=await h(O),i()}async function U(e,t){if(L.fechar(),e===null){let e=V(t);k={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?f:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await v(e);if(t===void 0){u(`anotacoes`);return}k={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}i(),z(k.conteudo)}function W(e){let n=e.args.join(`/`);A===n||j||M!==null||(A=n,j=!0,(async()=>{try{[T,E]=await Promise.all([g(),_()]);let t=e.args[0];t===void 0?(k=null,await H()):t===`nova`?await U(null,e.args[1]??`LIVRE`):await U(Number.parseInt(t,10),f)}catch(n){console.error(`anotacoes: a carga falhou.`,n),M=t(n),N=e}finally{j=!1,i()}})())}function G(){let e=N;M=null,N=null,A=void 0,e!==null&&W(e),i()}function K(e){O={...O,busca:e},clearTimeout(P),P=setTimeout(()=>void H(),C)}function q(e){O={...O,...e},H()}async function J(){let e=await o({titulo:a.pasta.nova,texto:a.pasta.novaTexto,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.criar,erroVazio:a.pasta.erroVazio});e!==null&&(await ne(e),E=await _(),i())}async function Y(e){let t=await o({titulo:a.pasta.renomear,valor:e.nome,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.renomear,erroVazio:a.pasta.erroVazio});t!==null&&t!==e.nome&&(await y(e,t),E=await _(),await H())}async function ie(e){await l({titulo:a.pasta.excluir,texto:a.pasta.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await m(e),E=await _(),O.pastaId===e&&(O={...O,pastaId:null}),k?.pastaId===e&&(k={...k,pastaId:null}),await H())}function ae(t){let n=e(t.conteudo,150);return r`
    <button
      class="cartao"
      ?data-fixada=${t.esta_fixada===1}
      @click=${()=>u(`anotacoes/${t.id??``}`)}
    >
      <span class="cartao__topo">
        ${t.esta_fixada===1?r`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:c}
        <span class="cartao__titulo">${t.titulo||a.anotacoes.semTitulo}</span>
      </span>

      ${n===``?c:r`<span class="cartao__previa">${n}</span>`}

      <span class="cartao__rodape">
        ${t.tipo_modelo===`LIVRE`?c:r`<kk-badge variant="neutral" pill>${B(t.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${d(t.data_modificacao)}</span>
      </span>
    </button>
  `}function oe(){let e=E.find(e=>e.id===O.pastaId);return r`
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
        ${T.map(e=>r`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
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

      ${E.map(e=>r`
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

    ${e===void 0?c:r`
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
              @click=${()=>void ie(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${a.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${D.length===0?r`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${O.arquivadas?a.anotacoes.semArquivadas:a.anotacoes.semAnotacoes}</p>
          </div>
        `:r`<div class="cartoes">${D.map(e=>ae(e))}</div>`}

    <kk-dialog
      label=${a.anotacoes.escolhaModelo}
      ?open=${I}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(I=!1)}}
    >
      <div class="modelos">
        ${T.map(e=>r`
            <button
              class="modelo"
              @click=${()=>{I=!1,u(`anotacoes/nova/${e.chave}`)}}
            >
              <kk-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function X(){k!==null&&(k={...k,status:a.anotacoes.salvando},i(),clearTimeout(F),F=setTimeout(()=>void Z(),w))}async function Z(){if(k===null)return;if(k.titulo.trim()===``){k={...k,status:a.anotacoes.informeTitulo},i();return}let e=Date.now(),t={titulo:k.titulo,conteudo:k.conteudo,tipo_modelo:k.tipoModelo,pasta_id:k.pastaId,esta_fixada:+!!k.fixada,esta_arquivada:+!!k.arquivada,data_modificacao:e,...k.id===null?{data_criacao:e}:{id:k.id}},n=await b(t);k.id===null&&(k={...k,id:n},history.replaceState(null,``,`#/anotacoes/${n}`)),k={...k,status:a.anotacoes.salvoAs(d(e))},i()}async function Q(e){k!==null&&(k=e===`fixada`?{...k,fixada:!k.fixada}:{...k,arquivada:!k.arquivada},i(),k.id!==null&&await Z())}async function $(){let e=k?.id;e!=null&&await l({titulo:a.anotacoes.excluir,texto:a.anotacoes.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await p(e),ee(a.anotacoes.excluida),u(`anotacoes`))}function se(e){return r`
    <div class="editor">
      <kk-input
        class="editor__titulo"
        placeholder=${a.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{k={...e,titulo:t.target.value},X()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{k={...e,pastaId:null},X()}}
        >
          ${a.anotacoes.semPasta}
        </button>

        ${E.map(t=>r`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{k={...e,pastaId:t.id??null},X()}}
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
        @kk-input=${t=>{k={...e,conteudo:t.detail.value},X()}}
      ></kk-editor>
    </div>

    ${le(e)}
  `}function ce(e){return`${e.titulo}. ${e.conteudo}`}function le(e){return L.overlay(r`
      <h1>${e.titulo||a.anotacoes.semTitulo}</h1>
      <div class="prosa">${x(s(e.conteudo))}</div>
    `,()=>ce(e))}function ue(){u(`anotacoes/nova/${re()}`)}function de(){return r`
    <kk-icon-button
      name="calendar-check"
      label=${a.anotacoes.reuniao}
      @click=${ue}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${a.anotacoes.nova}
      @click=${async()=>{T=await g(),I=!0,i()}}
    ></kk-icon-button>
  `}function fe(e){if(e.id!==null)return r`
    <kk-icon-button
      name="pin"
      variant=${e.fixada?`filled`:`outline`}
      label=${e.fixada?a.anotacoes.desafixar:a.anotacoes.fixar}
      @click=${()=>void Q(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${e.arquivada?`filled`:`outline`}
      label=${e.arquivada?a.anotacoes.restaurar:a.anotacoes.arquivar}
      @click=${()=>void Q(`arquivada`)}
    ></kk-icon-button>
    ${L.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${a.anotacoes.excluir}
      @click=${()=>void $()}
    ></kk-icon-button>
  `}var pe={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=k?.titulo.trim()??``;return t===``?a.anotacoes.nova:t},acoes(e){return e.args.length===0?de():k===null?void 0:fe(k)},conteudo(e){return W(e),M===null?e.args.length===0?oe():k===null?r`<div class="carregando"><kk-spinner></kk-spinner></div>`:se(k):n(M,G)}};export{pe as telaAnotacoes};