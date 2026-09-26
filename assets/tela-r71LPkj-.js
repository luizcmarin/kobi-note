import{t as e}from"./leitura-CTOOy0QY.js";import{C as t,_ as n,_t as r,bt as i,ft as a,g as o,m as s,mt as c,n as ee,pt as l,rt as u,w as d,xt as f,y as te}from"./index-tEHw1VqD.js";import{CHAVE_LIVRE as p,FILTROS_INICIAIS as m,criarPasta as h,excluirAnotacao as ne,excluirPasta as re,listarAnotacoes as g,listarModelos as _,listarPastas as v,modeloDaReuniao as y,obterAnotacao as b,renomearPasta as x,salvarAnotacao as S}from"./dados-BjJ9lIg7.js";import{t as C}from"./texto-hE_APE8D.js";import{t as w}from"./foco-D25XPHyz.js";var T=400,E=1200,D=[],O=[],k=[],A=m,j=null,M,N=!1,P=null,F=null,I,L,R=!1,z=new e;function B(){return document.querySelector(`kk-editor`)}function V(e){let t=B();t!==null&&(t.value=e)}function H(e){return D.find(t=>t.chave===e)?.rotulo??e}function U(e){return D.find(t=>t.chave===e)?.conteudo}async function W(){k=await g(A),a()}async function G(e,t){if(z.fechar(),e===null){let e=U(t);j={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?p:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await b(e);if(t===void 0){c(`anotacoes`);return}j={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}a(),V(j.conteudo)}function K(e){l(`anotacoes`,()=>{M=void 0});let t=e.args.join(`/`);M===t||N||P!==null||(M=t,N=!0,(async()=>{try{[D,O]=await Promise.all([_(),v()]);let t=e.args[0];t===void 0?(j=null,await W()):t===`nova`?await G(null,e.args[1]??`LIVRE`):await G(Number.parseInt(t,10),p)}catch(t){console.error(`anotacoes: a carga falhou.`,t),P=d(t),F=e}finally{N=!1,a()}})())}function ie(){let e=F;P=null,F=null,M=void 0,e!==null&&K(e),a()}function q(e){A={...A,busca:e},clearTimeout(I),I=setTimeout(()=>void W(),T)}function J(e){A={...A,...e},W()}async function Y(){let e=await n({titulo:r.pasta.nova,texto:r.pasta.novaTexto,placeholder:r.pasta.placeholder,rotuloConfirmar:r.acoes.criar,erroVazio:r.pasta.erroVazio});e!==null&&(await h(e),O=await v(),a())}async function ae(e){let t=await n({titulo:r.pasta.renomear,valor:e.nome,placeholder:r.pasta.placeholder,rotuloConfirmar:r.acoes.renomear,erroVazio:r.pasta.erroVazio});t!==null&&t!==e.nome&&(await x(e,t),O=await v(),await W())}async function oe(e){await o({titulo:r.pasta.excluir,texto:r.pasta.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&(await re(e),O=await v(),A.pastaId===e&&(A={...A,pastaId:null}),j?.pastaId===e&&(j={...j,pastaId:null}),await W())}function se(e){let t=C(e.conteudo,150);return f`
    <button
      class="cartao"
      ?data-fixada=${e.esta_fixada===1}
      @click=${()=>c(`anotacoes/${e.id??``}`)}
    >
      <span class="cartao__topo">
        ${e.esta_fixada===1?f`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:i}
        <span class="cartao__titulo">${e.titulo||r.anotacoes.semTitulo}</span>
      </span>

      ${t===``?i:f`<span class="cartao__previa">${t}</span>`}

      <span class="cartao__rodape">
        ${e.tipo_modelo===`LIVRE`?i:f`<kk-badge variant="neutral" pill>${H(e.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${u(e.data_modificacao)}</span>
      </span>
    </button>
  `}function ce(){let e=O.find(e=>e.id===A.pastaId);return f`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${r.anotacoes.buscar}
        .value=${A.busca}
        @kk-input=${e=>q(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${A.modeloChave}
        placeholder=${r.anotacoes.todosModelos}
        @kk-change=${e=>J({modeloChave:e.target.value})}
      >
        <kk-option value="">${r.anotacoes.todosModelos}</kk-option>
        ${D.map(e=>f`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${A.pastaId===null&&!A.arquivadas}
        @click=${()=>J({pastaId:null,arquivadas:!1})}
      >
        ${r.anotacoes.todas}
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
        <kk-icon name="archive"></kk-icon>${r.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${r.pasta.nova} @click=${()=>void Y()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?i:f`
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

    ${k.length===0?f`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${A.arquivadas?r.anotacoes.semArquivadas:r.anotacoes.semAnotacoes}</p>
          </div>
        `:f`<div class="cartoes">${k.map(e=>se(e))}</div>`}

    <kk-dialog
      label=${r.anotacoes.escolhaModelo}
      ?open=${R}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(R=!1)}}
    >
      <div class="modelos">
        ${D.map(e=>f`
            <button
              class="modelo"
              @click=${()=>{R=!1,c(`anotacoes/nova/${e.chave}`)}}
            >
              <kk-icon name=${e.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${e.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function X(){j!==null&&(j={...j,status:r.anotacoes.salvando},a(),clearTimeout(L),L=setTimeout(()=>void Z(),E))}async function Z(){if(j===null)return;if(j.titulo.trim()===``){j={...j,status:r.anotacoes.informeTitulo},a();return}let e=Date.now(),t={titulo:j.titulo,conteudo:j.conteudo,tipo_modelo:j.tipoModelo,pasta_id:j.pastaId,esta_fixada:+!!j.fixada,esta_arquivada:+!!j.arquivada,data_modificacao:e,...j.id===null?{data_criacao:e}:{id:j.id}},n=await S(t);j.id===null&&(j={...j,id:n},history.replaceState(null,``,`#/anotacoes/${n}`)),j={...j,status:r.anotacoes.salvoAs(u(e))},a()}async function Q(e){j!==null&&(j=e===`fixada`?{...j,fixada:!j.fixada}:{...j,arquivada:!j.arquivada},a(),j.id!==null&&await Z())}async function le(){let e=j?.id;e!=null&&await o({titulo:r.anotacoes.excluir,texto:r.anotacoes.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&(await ne(e),s(r.anotacoes.excluida),c(`anotacoes`))}function $(e){return f`
    <div class="editor editor--cheio">
      <kk-input
        ${e.id===null?w:i}
        class="editor__titulo"
        placeholder=${r.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{j={...e,titulo:t.target.value},X()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{j={...e,pastaId:null},X()}}
        >
          ${r.anotacoes.semPasta}
        </button>

        ${O.map(t=>f`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{j={...e,pastaId:t.id??null},X()}}
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
        @kk-input=${t=>{j={...e,conteudo:t.detail.value},X()}}
      ></kk-editor>
    </div>

    ${de(e)}
  `}function ue(e){return`${e.titulo}. ${e.conteudo}`}function de(e){return z.overlay(f`
      <h1>${e.titulo||r.anotacoes.semTitulo}</h1>
      <div class="prosa">${te(ee(e.conteudo))}</div>
    `,()=>ue(e))}function fe(){c(`anotacoes/nova/${y()}`)}function pe(){return f`
    <kk-icon-button
      name="calendar-check"
      label=${r.anotacoes.reuniao}
      @click=${fe}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${r.anotacoes.nova}
      @click=${async()=>{D=await _(),R=!0,a()}}
    ></kk-icon-button>
  `}function me(e){if(e.id!==null)return f`
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
    ${z.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${r.anotacoes.excluir}
      @click=${()=>void le()}
    ></kk-icon-button>
  `}var he={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=j?.titulo.trim()??``;return t===``?r.anotacoes.nova:t},acoes(e){return e.args.length===0?pe():j===null?void 0:me(j)},conteudo(e){return K(e),P===null?e.args.length===0?ce():j===null?f`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(j):t(P,ie)}};export{he as telaAnotacoes};