import{n as e}from"./texto-DhKYsM3f.js";import{Q as t,_ as n,ft as r,g as i,m as a,mt as o,n as s,ot as c,st as l,ut as u,v as d,y as ee}from"./index-CWdQis_V.js";import{CHAVE_LIVRE as f,FILTROS_INICIAIS as p,criarPasta as m,excluirAnotacao as h,excluirPasta as g,listarAnotacoes as _,listarModelos as v,listarPastas as y,modeloDaReuniao as b,obterAnotacao as x,renomearPasta as S,salvarAnotacao as C}from"./dados-7r_qWVvu.js";import{t as te}from"./unsafe-html-B74_ovmz.js";import{t as w}from"./leitura-DBfLCzae.js";var ne=400,T=1200,E=[],D=[],O=[],k=p,A=null,j,M=!1,N=null,P=null,F,I,L=!1,R=new w;function z(){return document.querySelector(`kk-editor`)}function B(e){let t=z();t!==null&&(t.value=e)}function V(e){return E.find(t=>t.chave===e)?.rotulo??e}function H(e){return E.find(t=>t.chave===e)?.conteudo}async function U(){O=await _(k),c()}async function W(e,t){if(R.fechar(),e===null){let e=H(t);A={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?f:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await x(e);if(t===void 0){l(`anotacoes`);return}A={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}c(),B(A.conteudo)}function G(e){let t=e.args.join(`/`);j===t||M||N!==null||(j=t,M=!0,(async()=>{try{[E,D]=await Promise.all([v(),y()]);let t=e.args[0];t===void 0?(A=null,await U()):t===`nova`?await W(null,e.args[1]??`LIVRE`):await W(Number.parseInt(t,10),f)}catch(t){console.error(`anotacoes: a carga falhou.`,t),N=ee(t),P=e}finally{M=!1,c()}})())}function K(){let e=P;N=null,P=null,j=void 0,e!==null&&G(e),c()}function re(e){k={...k,busca:e},clearTimeout(F),F=setTimeout(()=>void U(),ne)}function q(e){k={...k,...e},U()}async function J(){let e=await n({titulo:u.pasta.nova,texto:u.pasta.novaTexto,placeholder:u.pasta.placeholder,rotuloConfirmar:u.acoes.criar,erroVazio:u.pasta.erroVazio});e!==null&&(await m(e),D=await y(),c())}async function Y(e){let t=await n({titulo:u.pasta.renomear,valor:e.nome,placeholder:u.pasta.placeholder,rotuloConfirmar:u.acoes.renomear,erroVazio:u.pasta.erroVazio});t!==null&&t!==e.nome&&(await S(e,t),D=await y(),await U())}async function X(e){await i({titulo:u.pasta.excluir,texto:u.pasta.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&(await g(e),D=await y(),k.pastaId===e&&(k={...k,pastaId:null}),A?.pastaId===e&&(A={...A,pastaId:null}),await U())}function ie(n){let i=e(n.conteudo,150);return o`
    <button
      class="cartao"
      ?data-fixada=${n.esta_fixada===1}
      @click=${()=>l(`anotacoes/${n.id??``}`)}
    >
      <span class="cartao__topo">
        ${n.esta_fixada===1?o`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:r}
        <span class="cartao__titulo">${n.titulo||u.anotacoes.semTitulo}</span>
      </span>

      ${i===``?r:o`<span class="cartao__previa">${i}</span>`}

      <span class="cartao__rodape">
        ${n.tipo_modelo===`LIVRE`?r:o`<kk-badge variant="neutral" pill>${V(n.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${t(n.data_modificacao)}</span>
      </span>
    </button>
  `}function ae(){let e=D.find(e=>e.id===k.pastaId);return o`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${u.anotacoes.buscar}
        .value=${k.busca}
        @kk-input=${e=>re(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${k.modeloChave}
        placeholder=${u.anotacoes.todosModelos}
        @kk-change=${e=>q({modeloChave:e.target.value})}
      >
        <kk-option value="">${u.anotacoes.todosModelos}</kk-option>
        ${E.map(e=>o`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${k.pastaId===null&&!k.arquivadas}
        @click=${()=>q({pastaId:null,arquivadas:!1})}
      >
        ${u.anotacoes.todas}
      </button>

      ${D.map(e=>o`
          <button
            class="chip"
            ?data-ativo=${k.pastaId===e.id}
            @click=${()=>q({pastaId:e.id??null,arquivadas:!1})}
          >
            ${e.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${k.arquivadas}
        @click=${()=>q({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${u.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${u.pasta.nova} @click=${()=>void J()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?r:o`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${e.nome}
            </span>
            <kk-button size="small" @click=${()=>void Y(e)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${u.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void X(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${u.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${O.length===0?o`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${k.arquivadas?u.anotacoes.semArquivadas:u.anotacoes.semAnotacoes}</p>
          </div>
        `:o`<div class="cartoes">${O.map(e=>ie(e))}</div>`}

    <kk-dialog
      label=${u.anotacoes.escolhaModelo}
      ?open=${L}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(L=!1)}}
    >
      <div class="modelos">
        ${E.map(e=>o`
            <button
              class="modelo"
              @click=${()=>{L=!1,l(`anotacoes/nova/${e.chave}`)}}
            >
              <kk-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function Z(){A!==null&&(A={...A,status:u.anotacoes.salvando},c(),clearTimeout(I),I=setTimeout(()=>void Q(),T))}async function Q(){if(A===null)return;if(A.titulo.trim()===``){A={...A,status:u.anotacoes.informeTitulo},c();return}let e=Date.now(),n={titulo:A.titulo,conteudo:A.conteudo,tipo_modelo:A.tipoModelo,pasta_id:A.pastaId,esta_fixada:+!!A.fixada,esta_arquivada:+!!A.arquivada,data_modificacao:e,...A.id===null?{data_criacao:e}:{id:A.id}},r=await C(n);A.id===null&&(A={...A,id:r},history.replaceState(null,``,`#/anotacoes/${r}`)),A={...A,status:u.anotacoes.salvoAs(t(e))},c()}async function $(e){A!==null&&(A=e===`fixada`?{...A,fixada:!A.fixada}:{...A,arquivada:!A.arquivada},c(),A.id!==null&&await Q())}async function oe(){let e=A?.id;e!=null&&await i({titulo:u.anotacoes.excluir,texto:u.anotacoes.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&(await h(e),a(u.anotacoes.excluida),l(`anotacoes`))}function se(e){return o`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo"
        placeholder=${u.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{A={...e,titulo:t.target.value},Z()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{A={...e,pastaId:null},Z()}}
        >
          ${u.anotacoes.semPasta}
        </button>

        ${D.map(t=>o`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{A={...e,pastaId:t.id??null},Z()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${u.pasta.nova} @click=${()=>void J()}>
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

    ${le(e)}
  `}function ce(e){return`${e.titulo}. ${e.conteudo}`}function le(e){return R.overlay(o`
      <h1>${e.titulo||u.anotacoes.semTitulo}</h1>
      <div class="prosa">${te(s(e.conteudo))}</div>
    `,()=>ce(e))}function ue(){l(`anotacoes/nova/${b()}`)}function de(){return o`
    <kk-icon-button
      name="calendar-check"
      label=${u.anotacoes.reuniao}
      @click=${ue}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${u.anotacoes.nova}
      @click=${async()=>{E=await v(),L=!0,c()}}
    ></kk-icon-button>
  `}function fe(e){if(e.id!==null)return o`
    <kk-icon-button
      name="pin"
      variant=${e.fixada?`filled`:`outline`}
      label=${e.fixada?u.anotacoes.desafixar:u.anotacoes.fixar}
      @click=${()=>void $(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${e.arquivada?`filled`:`outline`}
      label=${e.arquivada?u.anotacoes.restaurar:u.anotacoes.arquivar}
      @click=${()=>void $(`arquivada`)}
    ></kk-icon-button>
    ${R.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${u.anotacoes.excluir}
      @click=${()=>void oe()}
    ></kk-icon-button>
  `}var pe={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=A?.titulo.trim()??``;return t===``?u.anotacoes.nova:t},acoes(e){return e.args.length===0?de():A===null?void 0:fe(A)},conteudo(e){return G(e),N===null?e.args.length===0?ae():A===null?o`<div class="carregando"><kk-spinner></kk-spinner></div>`:se(A):d(N,K)}};export{pe as telaAnotacoes};