import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{n as r,r as i}from"./rotas-D12eslN_.js";import{r as a}from"./data-7IMAkOFv.js";import{R as o,c as s,d as c,h as l,l as u,m as d,n as f}from"./index-DYev-n2R.js";import{CHAVE_LIVRE as p,FILTROS_INICIAIS as m,criarPasta as h,excluirAnotacao as g,excluirPasta as _,listarAnotacoes as v,listarModelos as y,listarPastas as b,modeloDaReuniao as x,obterAnotacao as S,renomearPasta as C,salvarAnotacao as w}from"./dados-DGf4vrXK.js";import{n as T}from"./carga-Cb65ZAc7.js";import{n as E,t as D}from"./editor-CSRQZGXQ.js";import{t as O}from"./foco-DYWgFl_h.js";import{t as ee}from"./leitura-CD6tSIAL.js";var k=400,A=1200,j=[],M=[],N=[],P=m,F=null,I,L,R=!1,z=new ee;function B(e){return j.find(t=>t.chave===e)?.rotulo??e}function V(e){return j.find(t=>t.chave===e)?.conteudo}async function H(){N=await v(P),o()}async function U(e,t){if(z.fechar(),e===null){let e=V(t);F={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?p:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await S(e);if(t===void 0){i(`anotacoes`);return}F={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}o(),D(F.conteudo)}var W=new T(`anotacoes`,async e=>{[j,M]=await Promise.all([y(),b()]);let t=e.args[0];t===void 0?(F=null,await H()):t===`nova`?await U(null,e.args[1]??`LIVRE`):await U(Number.parseInt(t,10),p)});r(`anotacoes`,()=>W.esquecer());function te(e){P={...P,busca:e},clearTimeout(I),I=setTimeout(()=>void H(),k)}function G(e){P={...P,...e},H()}async function K(){let e=await l({titulo:n.pasta.nova,texto:n.pasta.novaTexto,placeholder:n.pasta.placeholder,rotuloConfirmar:n.acoes.criar,erroVazio:n.pasta.erroVazio});e!==null&&(await h(e),M=await b(),o())}async function q(e){let t=await l({titulo:n.pasta.renomear,valor:e.nome,placeholder:n.pasta.placeholder,rotuloConfirmar:n.acoes.renomear,erroVazio:n.pasta.erroVazio});t!==null&&t!==e.nome&&(await C(e,t),M=await b(),await H())}async function J(e){await d({titulo:n.pasta.excluir,texto:n.pasta.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await _(e),M=await b(),P.pastaId===e&&(P={...P,pastaId:null}),F?.pastaId===e&&(F={...F,pastaId:null}),await H())}function Y(r){let o=E(r.conteudo,150);return e`
    <button
      class="cartao"
      ?data-fixada=${r.esta_fixada===1}
      @click=${()=>i(`anotacoes/${r.id??``}`)}
    >
      <span class="cartao__topo">
        ${r.esta_fixada===1?e`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:t}
        <span class="cartao__titulo">${r.titulo||n.anotacoes.semTitulo}</span>
      </span>

      ${o===``?t:e`<span class="cartao__previa">${o}</span>`}

      <span class="cartao__rodape">
        ${r.tipo_modelo===`LIVRE`?t:e`<kk-badge variant="neutral" pill>${B(r.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${a(r.data_modificacao)}</span>
      </span>
    </button>
  `}function X(){let r=M.find(e=>e.id===P.pastaId);return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.anotacoes.buscar}
        .value=${P.busca}
        @kk-input=${e=>te(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${P.modeloChave}
        placeholder=${n.anotacoes.todosModelos}
        @kk-change=${e=>G({modeloChave:e.target.value})}
      >
        <kk-option value="">${n.anotacoes.todosModelos}</kk-option>
        ${j.map(t=>e`<kk-option value=${t.chave}>${t.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${P.pastaId===null&&!P.arquivadas}
        @click=${()=>G({pastaId:null,arquivadas:!1})}
      >
        ${n.anotacoes.todas}
      </button>

      ${M.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${P.pastaId===t.id}
            @click=${()=>G({pastaId:t.id??null,arquivadas:!1})}
          >
            ${t.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${P.arquivadas}
        @click=${()=>G({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${n.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${n.pasta.nova} @click=${()=>void K()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${r===void 0?t:e`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${r.nome}
            </span>
            <kk-button size="small" @click=${()=>void q(r)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${n.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void J(r.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${N.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${P.arquivadas?n.anotacoes.semArquivadas:n.anotacoes.semAnotacoes}</p>
          </div>
        `:e`<div class="cartoes">${N.map(e=>Y(e))}</div>`}

    <kk-dialog
      label=${n.anotacoes.escolhaModelo}
      ?open=${R}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(R=!1)}}
    >
      <div class="modelos">
        ${j.map(t=>e`
            <button
              class="modelo"
              @click=${()=>{R=!1,i(`anotacoes/nova/${t.chave}`)}}
            >
              <kk-icon name=${t.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${t.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function Z(){F!==null&&(F={...F,status:n.anotacoes.salvando},o(),clearTimeout(L),L=setTimeout(()=>void Q(),A))}async function Q(){if(F===null)return;if(F.titulo.trim()===``){F={...F,status:n.anotacoes.informeTitulo},o();return}let e=Date.now(),t={titulo:F.titulo,conteudo:F.conteudo,tipo_modelo:F.tipoModelo,pasta_id:F.pastaId,esta_fixada:+!!F.fixada,esta_arquivada:+!!F.arquivada,data_modificacao:e,...F.id===null?{data_criacao:e}:{id:F.id}},r=await w(t);F.id===null&&(F={...F,id:r},history.replaceState(null,``,`#/anotacoes/${r}`)),F={...F,status:n.anotacoes.salvoAs(a(e))},o()}async function $(e){F!==null&&(F=e===`fixada`?{...F,fixada:!F.fixada}:{...F,arquivada:!F.arquivada},o(),F.id!==null&&await Q())}async function ne(){let e=F?.id;e!=null&&await d({titulo:n.anotacoes.excluir,texto:n.anotacoes.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await g(e),s(n.anotacoes.excluida),i(`anotacoes`))}function re(r){return e`
    <div class="editor editor--cheio">
      <kk-input
        ${r.id===null?O:t}
        class="editor__titulo"
        placeholder=${n.anotacoes.tituloPlaceholder}
        .value=${r.titulo}
        @kk-input=${e=>{F={...r,titulo:e.target.value},Z()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${r.pastaId===null}
          @click=${()=>{F={...r,pastaId:null},Z()}}
        >
          ${n.anotacoes.semPasta}
        </button>

        ${M.map(t=>e`
            <button
              class="chip"
              ?data-ativo=${r.pastaId===t.id}
              @click=${()=>{F={...r,pastaId:t.id??null},Z()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${n.pasta.nova} @click=${()=>void K()}>
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <div class="editor__linha">
        <span class="editor__status">${r.status}</span>
      </div>

      <kk-editor
        @kk-input=${e=>{F={...r,conteudo:e.detail.value},Z()}}
      ></kk-editor>
    </div>

    ${ae(r)}
  `}function ie(e){return`${e.titulo}. ${e.conteudo}`}function ae(t){return z.overlay(e`
      <h1>${t.titulo||n.anotacoes.semTitulo}</h1>
      <div class="prosa">${u(f(t.conteudo))}</div>
    `,()=>ie(t))}function oe(){i(`anotacoes/nova/${x()}`)}function se(){return e`
    <kk-icon-button
      name="calendar-check"
      label=${n.anotacoes.reuniao}
      @click=${oe}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${n.anotacoes.nova}
      @click=${async()=>{j=await y(),R=!0,o()}}
    ></kk-icon-button>
  `}function ce(t){if(t.id!==null)return e`
    <kk-icon-button
      name="pin"
      variant=${t.fixada?`filled`:`outline`}
      label=${t.fixada?n.anotacoes.desafixar:n.anotacoes.fixar}
      @click=${()=>void $(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${t.arquivada?`filled`:`outline`}
      label=${t.arquivada?n.anotacoes.restaurar:n.anotacoes.arquivar}
      @click=${()=>void $(`arquivada`)}
    ></kk-icon-button>
    ${z.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${n.anotacoes.excluir}
      @click=${()=>void ne()}
    ></kk-icon-button>
  `}var le={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=F?.titulo.trim()??``;return t===``?n.anotacoes.nova:t},acoes(e){return e.args.length===0?se():F===null?void 0:ce(F)},conteudo(e){let t=W.falhou(e);return t===null?e.args.length===0?X():F===null?c():re(F):t}};export{le as telaAnotacoes};