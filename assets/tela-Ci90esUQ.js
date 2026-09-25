import{n as e}from"./texto-DhKYsM3f.js";import{$ as t,_ as n,_t as r,b as i,ct as ee,ft as a,g as o,ht as s,lt as c,m as l,n as te,st as u,y as d}from"./index-BESQMk3B.js";import{CHAVE_LIVRE as f,FILTROS_INICIAIS as p,criarPasta as m,excluirAnotacao as h,excluirPasta as g,listarAnotacoes as ne,listarModelos as _,listarPastas as v,modeloDaReuniao as re,obterAnotacao as y,renomearPasta as b,salvarAnotacao as x}from"./dados-CJmzOvOm.js";import{t as S}from"./unsafe-html-D_sD8y-f.js";import{t as C}from"./foco-Bm1MsQvX.js";import{t as w}from"./leitura-D3M_XvUl.js";var T=400,E=1200,D=[],O=[],k=[],A=p,j=null,M,N=!1,P=null,F=null,I,L,R=!1,z=new w;function B(){return document.querySelector(`kk-editor`)}function V(e){let t=B();t!==null&&(t.value=e)}function H(e){return D.find(t=>t.chave===e)?.rotulo??e}function U(e){return D.find(t=>t.chave===e)?.conteudo}async function W(){k=await ne(A),u()}async function G(e,t){if(z.fechar(),e===null){let e=U(t);j={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?f:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await y(e);if(t===void 0){c(`anotacoes`);return}j={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}u(),V(j.conteudo)}function K(e){ee(`anotacoes`,()=>{M=void 0});let t=e.args.join(`/`);M===t||N||P!==null||(M=t,N=!0,(async()=>{try{[D,O]=await Promise.all([_(),v()]);let t=e.args[0];t===void 0?(j=null,await W()):t===`nova`?await G(null,e.args[1]??`LIVRE`):await G(Number.parseInt(t,10),f)}catch(t){console.error(`anotacoes: a carga falhou.`,t),P=i(t),F=e}finally{N=!1,u()}})())}function ie(){let e=F;P=null,F=null,M=void 0,e!==null&&K(e),u()}function q(e){A={...A,busca:e},clearTimeout(I),I=setTimeout(()=>void W(),T)}function J(e){A={...A,...e},W()}async function Y(){let e=await n({titulo:a.pasta.nova,texto:a.pasta.novaTexto,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.criar,erroVazio:a.pasta.erroVazio});e!==null&&(await m(e),O=await v(),u())}async function ae(e){let t=await n({titulo:a.pasta.renomear,valor:e.nome,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.renomear,erroVazio:a.pasta.erroVazio});t!==null&&t!==e.nome&&(await b(e,t),O=await v(),await W())}async function oe(e){await o({titulo:a.pasta.excluir,texto:a.pasta.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await g(e),O=await v(),A.pastaId===e&&(A={...A,pastaId:null}),j?.pastaId===e&&(j={...j,pastaId:null}),await W())}function se(n){let i=e(n.conteudo,150);return r`
    <button
      class="cartao"
      ?data-fixada=${n.esta_fixada===1}
      @click=${()=>c(`anotacoes/${n.id??``}`)}
    >
      <span class="cartao__topo">
        ${n.esta_fixada===1?r`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:s}
        <span class="cartao__titulo">${n.titulo||a.anotacoes.semTitulo}</span>
      </span>

      ${i===``?s:r`<span class="cartao__previa">${i}</span>`}

      <span class="cartao__rodape">
        ${n.tipo_modelo===`LIVRE`?s:r`<kk-badge variant="neutral" pill>${H(n.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${t(n.data_modificacao)}</span>
      </span>
    </button>
  `}function ce(){let e=O.find(e=>e.id===A.pastaId);return r`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${a.anotacoes.buscar}
        .value=${A.busca}
        @kk-input=${e=>q(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${A.modeloChave}
        placeholder=${a.anotacoes.todosModelos}
        @kk-change=${e=>J({modeloChave:e.target.value})}
      >
        <kk-option value="">${a.anotacoes.todosModelos}</kk-option>
        ${D.map(e=>r`<kk-option value=${e.chave}>${e.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${A.pastaId===null&&!A.arquivadas}
        @click=${()=>J({pastaId:null,arquivadas:!1})}
      >
        ${a.anotacoes.todas}
      </button>

      ${O.map(e=>r`
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
        <kk-icon name="archive"></kk-icon>${a.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${a.pasta.nova} @click=${()=>void Y()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?s:r`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${e.nome}
            </span>
            <kk-button size="small" @click=${()=>void ae(e)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${a.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void oe(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${a.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${k.length===0?r`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${A.arquivadas?a.anotacoes.semArquivadas:a.anotacoes.semAnotacoes}</p>
          </div>
        `:r`<div class="cartoes">${k.map(e=>se(e))}</div>`}

    <kk-dialog
      label=${a.anotacoes.escolhaModelo}
      ?open=${R}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(R=!1)}}
    >
      <div class="modelos">
        ${D.map(e=>r`
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
  `}function X(){j!==null&&(j={...j,status:a.anotacoes.salvando},u(),clearTimeout(L),L=setTimeout(()=>void Z(),E))}async function Z(){if(j===null)return;if(j.titulo.trim()===``){j={...j,status:a.anotacoes.informeTitulo},u();return}let e=Date.now(),n={titulo:j.titulo,conteudo:j.conteudo,tipo_modelo:j.tipoModelo,pasta_id:j.pastaId,esta_fixada:+!!j.fixada,esta_arquivada:+!!j.arquivada,data_modificacao:e,...j.id===null?{data_criacao:e}:{id:j.id}},r=await x(n);j.id===null&&(j={...j,id:r},history.replaceState(null,``,`#/anotacoes/${r}`)),j={...j,status:a.anotacoes.salvoAs(t(e))},u()}async function Q(e){j!==null&&(j=e===`fixada`?{...j,fixada:!j.fixada}:{...j,arquivada:!j.arquivada},u(),j.id!==null&&await Z())}async function $(){let e=j?.id;e!=null&&await o({titulo:a.anotacoes.excluir,texto:a.anotacoes.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await h(e),l(a.anotacoes.excluida),c(`anotacoes`))}function le(e){return r`
    <div class="editor editor--cheio">
      <kk-input
        ${e.id===null?C:s}
        class="editor__titulo"
        placeholder=${a.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{j={...e,titulo:t.target.value},X()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{j={...e,pastaId:null},X()}}
        >
          ${a.anotacoes.semPasta}
        </button>

        ${O.map(t=>r`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===t.id}
              @click=${()=>{j={...e,pastaId:t.id??null},X()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${a.pasta.nova} @click=${()=>void Y()}>
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
  `}function ue(e){return`${e.titulo}. ${e.conteudo}`}function de(e){return z.overlay(r`
      <h1>${e.titulo||a.anotacoes.semTitulo}</h1>
      <div class="prosa">${S(te(e.conteudo))}</div>
    `,()=>ue(e))}function fe(){c(`anotacoes/nova/${re()}`)}function pe(){return r`
    <kk-icon-button
      name="calendar-check"
      label=${a.anotacoes.reuniao}
      @click=${fe}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${a.anotacoes.nova}
      @click=${async()=>{D=await _(),R=!0,u()}}
    ></kk-icon-button>
  `}function me(e){if(e.id!==null)return r`
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
    ${z.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${a.anotacoes.excluir}
      @click=${()=>void $()}
    ></kk-icon-button>
  `}var he={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=j?.titulo.trim()??``;return t===``?a.anotacoes.nova:t},acoes(e){return e.args.length===0?pe():j===null?void 0:me(j)},conteudo(e){return K(e),P===null?e.args.length===0?ce():j===null?r`<div class="carregando"><kk-spinner></kk-spinner></div>`:le(j):d(P,ie)}};export{he as telaAnotacoes};