import{n as e}from"./texto-DhKYsM3f.js";import{J as t,_ as n,ct as r,et as i,g as a,it as o,m as s,n as ee,ot as c,tt as l,v as te,y as u}from"./index-CFqbq_HS.js";import{CHAVE_LIVRE as d,FILTROS_INICIAIS as ne,criarPasta as f,excluirAnotacao as p,excluirPasta as m,listarAnotacoes as re,listarModelos as h,listarPastas as g,modeloDaReuniao as _,obterAnotacao as v,renomearPasta as y,salvarAnotacao as b}from"./dados-Vl9m1oPA.js";import{t as x}from"./unsafe-html-QuUKS8vu.js";import{t as S}from"./leitura-BR63cPZS.js";var C=400,w=1200,T=[],E=[],D=[],O=ne,k=null,A,j=!1,M=null,N=null,P,F,I=!1,L=new S;function R(){return document.querySelector(`kk-editor`)}function z(e){let t=R();t!==null&&(t.value=e)}function B(e){return T.find(t=>t.chave===e)?.rotulo??e}function V(e){return T.find(t=>t.chave===e)?.conteudo}async function H(){D=await re(O),i()}async function U(e,t){if(L.fechar(),e===null){let e=V(t);k={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?d:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await v(e);if(t===void 0){l(`anotacoes`);return}k={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}i(),z(k.conteudo)}function W(e){let t=e.args.join(`/`);A===t||j||M!==null||(A=t,j=!0,(async()=>{try{[T,E]=await Promise.all([h(),g()]);let t=e.args[0];t===void 0?(k=null,await H()):t===`nova`?await U(null,e.args[1]??`LIVRE`):await U(Number.parseInt(t,10),d)}catch(t){console.error(`anotacoes: a carga falhou.`,t),M=u(t),N=e}finally{j=!1,i()}})())}function G(){let e=N;M=null,N=null,A=void 0,e!==null&&W(e),i()}function ie(e){O={...O,busca:e},clearTimeout(P),P=setTimeout(()=>void H(),C)}function K(e){O={...O,...e},H()}async function q(){let e=await n({titulo:o.pasta.nova,texto:o.pasta.novaTexto,placeholder:o.pasta.placeholder,rotuloConfirmar:o.acoes.criar,erroVazio:o.pasta.erroVazio});e!==null&&(await f(e),E=await g(),i())}async function J(e){let t=await n({titulo:o.pasta.renomear,valor:e.nome,placeholder:o.pasta.placeholder,rotuloConfirmar:o.acoes.renomear,erroVazio:o.pasta.erroVazio});t!==null&&t!==e.nome&&(await y(e,t),E=await g(),await H())}async function Y(e){await a({titulo:o.pasta.excluir,texto:o.pasta.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&(await m(e),E=await g(),O.pastaId===e&&(O={...O,pastaId:null}),k?.pastaId===e&&(k={...k,pastaId:null}),await H())}function ae(n){let i=e(n.conteudo,150);return r`
    <button
      class="cartao"
      ?data-fixada=${n.esta_fixada===1}
      @click=${()=>l(`anotacoes/${n.id??``}`)}
    >
      <span class="cartao__topo">
        ${n.esta_fixada===1?r`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:c}
        <span class="cartao__titulo">${n.titulo||o.anotacoes.semTitulo}</span>
      </span>

      ${i===``?c:r`<span class="cartao__previa">${i}</span>`}

      <span class="cartao__rodape">
        ${n.tipo_modelo===`LIVRE`?c:r`<kk-badge variant="neutral" pill>${B(n.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${t(n.data_modificacao)}</span>
      </span>
    </button>
  `}function oe(){let e=E.find(e=>e.id===O.pastaId);return r`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${o.anotacoes.buscar}
        .value=${O.busca}
        @kk-input=${e=>ie(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${O.modeloChave}
        placeholder=${o.anotacoes.todosModelos}
        @kk-change=${e=>K({modeloChave:e.target.value})}
      >
        <kk-option value="">${o.anotacoes.todosModelos}</kk-option>
        ${T.map(e=>r`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${O.pastaId===null&&!O.arquivadas}
        @click=${()=>K({pastaId:null,arquivadas:!1})}
      >
        ${o.anotacoes.todas}
      </button>

      ${E.map(e=>r`
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
        <kk-icon name="archive"></kk-icon>${o.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${o.pasta.nova} @click=${()=>void q()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?c:r`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${e.nome}
            </span>
            <kk-button size="small" @click=${()=>void J(e)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${o.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void Y(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${D.length===0?r`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${O.arquivadas?o.anotacoes.semArquivadas:o.anotacoes.semAnotacoes}</p>
          </div>
        `:r`<div class="cartoes">${D.map(e=>ae(e))}</div>`}

    <kk-dialog
      label=${o.anotacoes.escolhaModelo}
      ?open=${I}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(I=!1)}}
    >
      <div class="modelos">
        ${T.map(e=>r`
            <button
              class="modelo"
              @click=${()=>{I=!1,l(`anotacoes/nova/${e.chave}`)}}
            >
              <kk-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function X(){k!==null&&(k={...k,status:o.anotacoes.salvando},i(),clearTimeout(F),F=setTimeout(()=>void Z(),w))}async function Z(){if(k===null)return;if(k.titulo.trim()===``){k={...k,status:o.anotacoes.informeTitulo},i();return}let e=Date.now(),n={titulo:k.titulo,conteudo:k.conteudo,tipo_modelo:k.tipoModelo,pasta_id:k.pastaId,esta_fixada:+!!k.fixada,esta_arquivada:+!!k.arquivada,data_modificacao:e,...k.id===null?{data_criacao:e}:{id:k.id}},r=await b(n);k.id===null&&(k={...k,id:r},history.replaceState(null,``,`#/anotacoes/${r}`)),k={...k,status:o.anotacoes.salvoAs(t(e))},i()}async function Q(e){k!==null&&(k=e===`fixada`?{...k,fixada:!k.fixada}:{...k,arquivada:!k.arquivada},i(),k.id!==null&&await Z())}async function $(){let e=k?.id;e!=null&&await a({titulo:o.anotacoes.excluir,texto:o.anotacoes.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&(await p(e),s(o.anotacoes.excluida),l(`anotacoes`))}function se(e){return r`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo"
        placeholder=${o.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{k={...e,titulo:t.target.value},X()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{k={...e,pastaId:null},X()}}
        >
          ${o.anotacoes.semPasta}
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

        <button class="chip" title=${o.pasta.nova} @click=${()=>void q()}>
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
      <h1>${e.titulo||o.anotacoes.semTitulo}</h1>
      <div class="prosa">${x(ee(e.conteudo))}</div>
    `,()=>ce(e))}function ue(){l(`anotacoes/nova/${_()}`)}function de(){return r`
    <kk-icon-button
      name="calendar-check"
      label=${o.anotacoes.reuniao}
      @click=${ue}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${o.anotacoes.nova}
      @click=${async()=>{T=await h(),I=!0,i()}}
    ></kk-icon-button>
  `}function fe(e){if(e.id!==null)return r`
    <kk-icon-button
      name="pin"
      variant=${e.fixada?`filled`:`outline`}
      label=${e.fixada?o.anotacoes.desafixar:o.anotacoes.fixar}
      @click=${()=>void Q(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${e.arquivada?`filled`:`outline`}
      label=${e.arquivada?o.anotacoes.restaurar:o.anotacoes.arquivar}
      @click=${()=>void Q(`arquivada`)}
    ></kk-icon-button>
    ${L.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${o.anotacoes.excluir}
      @click=${()=>void $()}
    ></kk-icon-button>
  `}var pe={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=k?.titulo.trim()??``;return t===``?o.anotacoes.nova:t},acoes(e){return e.args.length===0?de():k===null?void 0:fe(k)},conteudo(e){return W(e),M===null?e.args.length===0?oe():k===null?r`<div class="carregando"><kk-spinner></kk-spinner></div>`:se(k):te(M,G)}};export{pe as telaAnotacoes};