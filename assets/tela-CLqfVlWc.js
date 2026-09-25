import{t as e}from"./leitura-CICKVXAI.js";import{$ as t,_ as n,b as r,ct as i,g as a,gt as o,lt as s,m as c,n as l,pt as u,ut as d,vt as f,y as p}from"./index-sA5grpgQ.js";import{CHAVE_LIVRE as m,FILTROS_INICIAIS as ee,criarPasta as h,excluirAnotacao as te,excluirPasta as ne,listarAnotacoes as re,listarModelos as g,listarPastas as _,modeloDaReuniao as v,obterAnotacao as y,renomearPasta as b,salvarAnotacao as x}from"./dados-BjJ9lIg7.js";import{t as S}from"./unsafe-html-Cs37CJNH.js";import{t as C}from"./texto-DrEA38Ux.js";import{t as w}from"./foco-CjOKodzX.js";var T=400,E=1200,D=[],O=[],k=[],A=ee,j=null,M,N=!1,P=null,F=null,I,L,R=!1,z=new e;function B(){return document.querySelector(`kk-editor`)}function V(e){let t=B();t!==null&&(t.value=e)}function H(e){return D.find(t=>t.chave===e)?.rotulo??e}function U(e){return D.find(t=>t.chave===e)?.conteudo}async function W(){k=await re(A),i()}async function G(e,t){if(z.fechar(),e===null){let e=U(t);j={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?m:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await y(e);if(t===void 0){d(`anotacoes`);return}j={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}i(),V(j.conteudo)}function K(e){s(`anotacoes`,()=>{M=void 0});let t=e.args.join(`/`);M===t||N||P!==null||(M=t,N=!0,(async()=>{try{[D,O]=await Promise.all([g(),_()]);let t=e.args[0];t===void 0?(j=null,await W()):t===`nova`?await G(null,e.args[1]??`LIVRE`):await G(Number.parseInt(t,10),m)}catch(t){console.error(`anotacoes: a carga falhou.`,t),P=r(t),F=e}finally{N=!1,i()}})())}function ie(){let e=F;P=null,F=null,M=void 0,e!==null&&K(e),i()}function q(e){A={...A,busca:e},clearTimeout(I),I=setTimeout(()=>void W(),T)}function J(e){A={...A,...e},W()}async function Y(){let e=await n({titulo:u.pasta.nova,texto:u.pasta.novaTexto,placeholder:u.pasta.placeholder,rotuloConfirmar:u.acoes.criar,erroVazio:u.pasta.erroVazio});e!==null&&(await h(e),O=await _(),i())}async function ae(e){let t=await n({titulo:u.pasta.renomear,valor:e.nome,placeholder:u.pasta.placeholder,rotuloConfirmar:u.acoes.renomear,erroVazio:u.pasta.erroVazio});t!==null&&t!==e.nome&&(await b(e,t),O=await _(),await W())}async function oe(e){await a({titulo:u.pasta.excluir,texto:u.pasta.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&(await ne(e),O=await _(),A.pastaId===e&&(A={...A,pastaId:null}),j?.pastaId===e&&(j={...j,pastaId:null}),await W())}function X(e){let n=C(e.conteudo,150);return f`
    <button
      class="cartao"
      ?data-fixada=${e.esta_fixada===1}
      @click=${()=>d(`anotacoes/${e.id??``}`)}
    >
      <span class="cartao__topo">
        ${e.esta_fixada===1?f`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:o}
        <span class="cartao__titulo">${e.titulo||u.anotacoes.semTitulo}</span>
      </span>

      ${n===``?o:f`<span class="cartao__previa">${n}</span>`}

      <span class="cartao__rodape">
        ${e.tipo_modelo===`LIVRE`?o:f`<kk-badge variant="neutral" pill>${H(e.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${t(e.data_modificacao)}</span>
      </span>
    </button>
  `}function se(){let e=O.find(e=>e.id===A.pastaId);return f`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${u.anotacoes.buscar}
        .value=${A.busca}
        @kk-input=${e=>q(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${A.modeloChave}
        placeholder=${u.anotacoes.todosModelos}
        @kk-change=${e=>J({modeloChave:e.target.value})}
      >
        <kk-option value="">${u.anotacoes.todosModelos}</kk-option>
        ${D.map(e=>f`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${A.pastaId===null&&!A.arquivadas}
        @click=${()=>J({pastaId:null,arquivadas:!1})}
      >
        ${u.anotacoes.todas}
      </button>

      ${O.map(e=>f`
          <button
            class="chip"
            ?data-ativo=${A.pastaId===e.id}
            @click=${()=>J({pastaId:e.id??null,arquivadas:!1})}
          >
            ${e.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${A.arquivadas}
        @click=${()=>J({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${u.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${u.pasta.nova} @click=${()=>void Y()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?o:f`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${e.nome}
            </span>
            <kk-button size="small" @click=${()=>void ae(e)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${u.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void oe(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${u.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${k.length===0?f`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${A.arquivadas?u.anotacoes.semArquivadas:u.anotacoes.semAnotacoes}</p>
          </div>
        `:f`<div class="cartoes">${k.map(e=>X(e))}</div>`}

    <kk-dialog
      label=${u.anotacoes.escolhaModelo}
      ?open=${R}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(R=!1)}}
    >
      <div class="modelos">
        ${D.map(e=>f`
            <button
              class="modelo"
              @click=${()=>{R=!1,d(`anotacoes/nova/${e.chave}`)}}
            >
              <kk-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function Z(){j!==null&&(j={...j,status:u.anotacoes.salvando},i(),clearTimeout(L),L=setTimeout(()=>void Q(),E))}async function Q(){if(j===null)return;if(j.titulo.trim()===``){j={...j,status:u.anotacoes.informeTitulo},i();return}let e=Date.now(),n={titulo:j.titulo,conteudo:j.conteudo,tipo_modelo:j.tipoModelo,pasta_id:j.pastaId,esta_fixada:+!!j.fixada,esta_arquivada:+!!j.arquivada,data_modificacao:e,...j.id===null?{data_criacao:e}:{id:j.id}},r=await x(n);j.id===null&&(j={...j,id:r},history.replaceState(null,``,`#/anotacoes/${r}`)),j={...j,status:u.anotacoes.salvoAs(t(e))},i()}async function $(e){j!==null&&(j=e===`fixada`?{...j,fixada:!j.fixada}:{...j,arquivada:!j.arquivada},i(),j.id!==null&&await Q())}async function ce(){let e=j?.id;e!=null&&await a({titulo:u.anotacoes.excluir,texto:u.anotacoes.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&(await te(e),c(u.anotacoes.excluida),d(`anotacoes`))}function le(e){return f`
    <div class="editor editor--cheio">
      <kk-input
        ${e.id===null?w:o}
        class="editor__titulo"
        placeholder=${u.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{j={...e,titulo:t.target.value},Z()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{j={...e,pastaId:null},Z()}}
        >
          ${u.anotacoes.semPasta}
        </button>

        ${O.map(t=>f`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{j={...e,pastaId:t.id??null},Z()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${u.pasta.nova} @click=${()=>void Y()}>
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{j={...e,conteudo:t.detail.value},Z()}}
      ></kk-editor>
    </div>

    ${de(e)}
  `}function ue(e){return`${e.titulo}. ${e.conteudo}`}function de(e){return z.overlay(f`
      <h1>${e.titulo||u.anotacoes.semTitulo}</h1>
      <div class="prosa">${S(l(e.conteudo))}</div>
    `,()=>ue(e))}function fe(){d(`anotacoes/nova/${v()}`)}function pe(){return f`
    <kk-icon-button
      name="calendar-check"
      label=${u.anotacoes.reuniao}
      @click=${fe}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${u.anotacoes.nova}
      @click=${async()=>{D=await g(),R=!0,i()}}
    ></kk-icon-button>
  `}function me(e){if(e.id!==null)return f`
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
    ${z.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${u.anotacoes.excluir}
      @click=${()=>void ce()}
    ></kk-icon-button>
  `}var he={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=j?.titulo.trim()??``;return t===``?u.anotacoes.nova:t},acoes(e){return e.args.length===0?pe():j===null?void 0:me(j)},conteudo(e){return K(e),P===null?e.args.length===0?se():j===null?f`<div class="carregando"><kk-spinner></kk-spinner></div>`:le(j):p(P,ie)}};export{he as telaAnotacoes};