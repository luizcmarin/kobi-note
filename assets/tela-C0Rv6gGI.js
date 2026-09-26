import{t as e}from"./leitura-BrqgdCDR.js";import{C as t,S as n,_t as r,b as i,bt as a,ft as o,h as ee,m as te,mt as s,n as c,pt as l,rt as u,xt as d,y as ne}from"./index-BNLfwB87.js";import{CHAVE_LIVRE as f,FILTROS_INICIAIS as p,criarPasta as m,excluirAnotacao as h,excluirPasta as g,listarAnotacoes as _,listarModelos as v,listarPastas as y,modeloDaReuniao as b,obterAnotacao as x,renomearPasta as S,salvarAnotacao as C}from"./dados-SGVQpx2e.js";import{t as re}from"./texto-owtuDXsS.js";import{t as w}from"./foco-CnUS-Btn.js";var T=400,ie=1200,E=[],D=[],O=[],k=p,A=null,j,M=!1,N=null,P=null,F,I,L=!1,R=new e;function z(){return document.querySelector(`kk-editor`)}function B(e){let t=z();t!==null&&(t.value=e)}function V(e){return E.find(t=>t.chave===e)?.rotulo??e}function H(e){return E.find(t=>t.chave===e)?.conteudo}async function U(){O=await _(k),o()}async function W(e,t){if(R.fechar(),e===null){let e=H(t);A={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?f:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await x(e);if(t===void 0){s(`anotacoes`);return}A={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}o(),B(A.conteudo)}function G(e){l(`anotacoes`,()=>{j=void 0});let t=e.args.join(`/`);j===t||M||N!==null||(j=t,M=!0,(async()=>{try{[E,D]=await Promise.all([v(),y()]);let t=e.args[0];t===void 0?(A=null,await U()):t===`nova`?await W(null,e.args[1]??`LIVRE`):await W(Number.parseInt(t,10),f)}catch(t){console.error(`anotacoes: a carga falhou.`,t),N=i(t),P=e}finally{M=!1,o()}})())}function K(){let e=P;N=null,P=null,j=void 0,e!==null&&G(e),o()}function q(e){k={...k,busca:e},clearTimeout(F),F=setTimeout(()=>void U(),T)}function J(e){k={...k,...e},U()}async function Y(){let e=await t({titulo:r.pasta.nova,texto:r.pasta.novaTexto,placeholder:r.pasta.placeholder,rotuloConfirmar:r.acoes.criar,erroVazio:r.pasta.erroVazio});e!==null&&(await m(e),D=await y(),o())}async function ae(e){let n=await t({titulo:r.pasta.renomear,valor:e.nome,placeholder:r.pasta.placeholder,rotuloConfirmar:r.acoes.renomear,erroVazio:r.pasta.erroVazio});n!==null&&n!==e.nome&&(await S(e,n),D=await y(),await U())}async function oe(e){await n({titulo:r.pasta.excluir,texto:r.pasta.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&(await g(e),D=await y(),k.pastaId===e&&(k={...k,pastaId:null}),A?.pastaId===e&&(A={...A,pastaId:null}),await U())}function se(e){let t=re(e.conteudo,150);return d`
    <button
      class="cartao"
      ?data-fixada=${e.esta_fixada===1}
      @click=${()=>s(`anotacoes/${e.id??``}`)}
    >
      <span class="cartao__topo">
        ${e.esta_fixada===1?d`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:a}
        <span class="cartao__titulo">${e.titulo||r.anotacoes.semTitulo}</span>
      </span>

      ${t===``?a:d`<span class="cartao__previa">${t}</span>`}

      <span class="cartao__rodape">
        ${e.tipo_modelo===`LIVRE`?a:d`<kk-badge variant="neutral" pill>${V(e.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${u(e.data_modificacao)}</span>
      </span>
    </button>
  `}function ce(){let e=D.find(e=>e.id===k.pastaId);return d`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${r.anotacoes.buscar}
        .value=${k.busca}
        @kk-input=${e=>q(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${k.modeloChave}
        placeholder=${r.anotacoes.todosModelos}
        @kk-change=${e=>J({modeloChave:e.target.value})}
      >
        <kk-option value="">${r.anotacoes.todosModelos}</kk-option>
        ${E.map(e=>d`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${k.pastaId===null&&!k.arquivadas}
        @click=${()=>J({pastaId:null,arquivadas:!1})}
      >
        ${r.anotacoes.todas}
      </button>

      ${D.map(e=>d`
          <button
            class="chip"
            ?data-ativo=${k.pastaId===e.id}
            @click=${()=>J({pastaId:e.id??null,arquivadas:!1})}
          >
            ${e.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${k.arquivadas}
        @click=${()=>J({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${r.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${r.pasta.nova} @click=${()=>void Y()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?a:d`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${e.nome}
            </span>
            <kk-button size="small" @click=${()=>void ae(e)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${r.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void oe(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${r.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${O.length===0?d`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${k.arquivadas?r.anotacoes.semArquivadas:r.anotacoes.semAnotacoes}</p>
          </div>
        `:d`<div class="cartoes">${O.map(e=>se(e))}</div>`}

    <kk-dialog
      label=${r.anotacoes.escolhaModelo}
      ?open=${L}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(L=!1)}}
    >
      <div class="modelos">
        ${E.map(e=>d`
            <button
              class="modelo"
              @click=${()=>{L=!1,s(`anotacoes/nova/${e.chave}`)}}
            >
              <kk-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function X(){A!==null&&(A={...A,status:r.anotacoes.salvando},o(),clearTimeout(I),I=setTimeout(()=>void Z(),ie))}async function Z(){if(A===null)return;if(A.titulo.trim()===``){A={...A,status:r.anotacoes.informeTitulo},o();return}let e=Date.now(),t={titulo:A.titulo,conteudo:A.conteudo,tipo_modelo:A.tipoModelo,pasta_id:A.pastaId,esta_fixada:+!!A.fixada,esta_arquivada:+!!A.arquivada,data_modificacao:e,...A.id===null?{data_criacao:e}:{id:A.id}},n=await C(t);A.id===null&&(A={...A,id:n},history.replaceState(null,``,`#/anotacoes/${n}`)),A={...A,status:r.anotacoes.salvoAs(u(e))},o()}async function Q(e){A!==null&&(A=e===`fixada`?{...A,fixada:!A.fixada}:{...A,arquivada:!A.arquivada},o(),A.id!==null&&await Z())}async function le(){let e=A?.id;e!=null&&await n({titulo:r.anotacoes.excluir,texto:r.anotacoes.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&(await h(e),te(r.anotacoes.excluida),s(`anotacoes`))}function $(e){return d`
    <div class="editor editor--cheio">
      <kk-input
        ${e.id===null?w:a}
        class="editor__titulo"
        placeholder=${r.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{A={...e,titulo:t.target.value},X()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{A={...e,pastaId:null},X()}}
        >
          ${r.anotacoes.semPasta}
        </button>

        ${D.map(t=>d`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{A={...e,pastaId:t.id??null},X()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${r.pasta.nova} @click=${()=>void Y()}>
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{A={...e,conteudo:t.detail.value},X()}}
      ></kk-editor>
    </div>

    ${de(e)}
  `}function ue(e){return`${e.titulo}. ${e.conteudo}`}function de(e){return R.overlay(d`
      <h1>${e.titulo||r.anotacoes.semTitulo}</h1>
      <div class="prosa">${ee(c(e.conteudo))}</div>
    `,()=>ue(e))}function fe(){s(`anotacoes/nova/${b()}`)}function pe(){return d`
    <kk-icon-button
      name="calendar-check"
      label=${r.anotacoes.reuniao}
      @click=${fe}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${r.anotacoes.nova}
      @click=${async()=>{E=await v(),L=!0,o()}}
    ></kk-icon-button>
  `}function me(e){if(e.id!==null)return d`
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
    ${R.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${r.anotacoes.excluir}
      @click=${()=>void le()}
    ></kk-icon-button>
  `}var he={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=A?.titulo.trim()??``;return t===``?r.anotacoes.nova:t},acoes(e){return e.args.length===0?pe():A===null?void 0:me(A)},conteudo(e){return G(e),N===null?e.args.length===0?ce():A===null?d`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(A):ne(N,K)}};export{he as telaAnotacoes};