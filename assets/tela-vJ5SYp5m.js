import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{i as r}from"./formato-BoZO7uRM.js";import{i,n as a,r as o}from"./rotas-CR8kk0YZ.js";import{A as s,C as c,D as l,O as u,T as d,ct as f,j as p,n as m}from"./index-MKiA380r.js";import{_ as h,c as g,d as _,f as v,g as y,i as ee,m as te,n as b,o as x,p as S,s as C,u as w}from"./dados-CFGCaYrs.js";import{n as T}from"./carga-Cbwm268_.js";import{n as E,t as D}from"./editor-CSRQZGXQ.js";import{t as O}from"./foco-XyxwbeU0.js";import{t as ne}from"./leitura-RFI0wnC4.js";var re=400,k=1200,A=[],j=[],M=[],N=ee,P=null,F,I,L=!1,R=new ne;function z(e){return A.find(t=>t.chave===e)?.rotulo??e}function B(e){return A.find(t=>t.chave===e)?.conteudo}async function V(){M=await w(N),f()}async function H(e,t){if(R.fechar(),e===null){let e=B(t);P={id:null,titulo:``,conteudo:e??``,tipoModelo:e===void 0?b:t,pastaId:null,fixada:!1,arquivada:!1,status:``}}else{let t=await te(e);if(t===void 0){o(`anotacoes`);return}P={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,tipoModelo:t.tipo_modelo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}f(),D(P.conteudo)}var U=new T(`anotacoes`,async e=>{await Z(),[A,j]=await Promise.all([_(),v()]);let t=e.args[0];t===void 0?(P=null,await V()):t===`nova`?await H(null,e.args[1]??`LIVRE`):await H(Number.parseInt(t,10),b)});a(`anotacoes`,()=>{Z(),U.esquecer()}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&Z()});function ie(e){N={...N,busca:e},clearTimeout(F),F=setTimeout(()=>void V(),re)}function W(e){N={...N,...e},V()}async function G(){let e=await p({titulo:n.pasta.nova,texto:n.pasta.novaTexto,placeholder:n.pasta.placeholder,rotuloConfirmar:n.acoes.criar,erroVazio:n.pasta.erroVazio});e!==null&&(await x(e),j=await v(),f())}async function K(e){let t=await p({titulo:n.pasta.renomear,valor:e.nome,placeholder:n.pasta.placeholder,rotuloConfirmar:n.acoes.renomear,erroVazio:n.pasta.erroVazio});t!==null&&t!==e.nome&&(await y(e,t),j=await v(),await V())}async function q(e){await s({titulo:n.pasta.excluir,texto:n.pasta.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await g(e),j=await v(),N.pastaId===e&&(N={...N,pastaId:null}),P?.pastaId===e&&(P={...P,pastaId:null}),await V())}function J(i){let a=E(i.conteudo,150);return e`
    <button
      class="cartao"
      ?data-fixada=${i.esta_fixada===1}
      @click=${()=>o(`anotacoes/${i.id??``}`)}
    >
      <span class="cartao__topo">
        ${i.esta_fixada===1?e`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:t}
        <span class="cartao__titulo">${i.titulo||n.anotacoes.semTitulo}</span>
      </span>

      ${a===``?t:e`<span class="cartao__previa">${a}</span>`}

      <span class="cartao__rodape">
        ${i.tipo_modelo===`LIVRE`?t:e`<kk-badge variant="neutral" pill>${z(i.tipo_modelo)}</kk-badge>`}
        <span class="cartao__data">${r(i.data_modificacao)}</span>
      </span>
    </button>
  `}function Y(){let r=j.find(e=>e.id===N.pastaId);return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.anotacoes.buscar}
        .value=${N.busca}
        @kk-input=${e=>ie(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        .value=${N.modeloChave}
        placeholder=${n.anotacoes.todosModelos}
        @kk-change=${e=>W({modeloChave:e.target.value})}
      >
        <kk-option value="">${n.anotacoes.todosModelos}</kk-option>
        ${A.map(t=>e`<kk-option value=${t.chave}>${t.rotulo}</kk-option>`)}
      </kk-select>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${N.pastaId===null&&!N.arquivadas}
        @click=${()=>W({pastaId:null,arquivadas:!1})}
      >
        ${n.anotacoes.todas}
      </button>

      ${j.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${N.pastaId===t.id}
            @click=${()=>W({pastaId:t.id??null,arquivadas:!1})}
          >
            ${t.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${N.arquivadas}
        @click=${()=>W({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${n.anotacoes.arquivadas}
      </button>

      <button class="chip" title=${n.pasta.nova} @click=${()=>void G()}>
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${r===void 0?t:e`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome">
              <kk-icon name="folder"></kk-icon>${r.nome}
            </span>
            <kk-button size="small" @click=${()=>void K(r)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${n.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void q(r.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${M.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${N.arquivadas?n.anotacoes.semArquivadas:n.anotacoes.semAnotacoes}</p>
          </div>
        `:e`<div class="cartoes">${M.map(e=>J(e))}</div>`}

    <kk-dialog
      label=${n.anotacoes.escolhaModelo}
      ?open=${L}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&(L=!1)}}
    >
      <div class="modelos">
        ${A.map(t=>e`
            <button
              class="modelo"
              @click=${()=>{L=!1,o(`anotacoes/nova/${t.chave}`)}}
            >
              <kk-icon name=${t.chave===`LIVRE`?`file-text`:`template`}></kk-icon>
              <span>${t.rotulo}</span>
            </button>
          `)}
      </div>
    </kk-dialog>
  `}function X(){P!==null&&(P={...P,status:n.anotacoes.salvando},f(),clearTimeout(I),I=setTimeout(()=>{I=void 0,Q()},k))}async function Z(){I!==void 0&&(clearTimeout(I),I=void 0,await Q())}async function Q(){if(P===null)return;if(P.titulo.trim()===``){P={...P,status:n.anotacoes.informeTitulo},f();return}let e=Date.now(),t={titulo:P.titulo,conteudo:P.conteudo,tipo_modelo:P.tipoModelo,pasta_id:P.pastaId,esta_fixada:+!!P.fixada,esta_arquivada:+!!P.arquivada,data_modificacao:e,...P.id===null?{data_criacao:e}:{id:P.id}},a;try{a=await h(t)}catch(e){console.error(`Anotações: a gravação falhou.`,e),P!==null&&(P={...P,status:u(e)}),f();return}if(P!==null){if(P.id===null){P={...P,id:a};let e=i();e.modulo===`anotacoes`&&e.args[0]===`nova`&&history.replaceState(null,``,`#/anotacoes/${a}`)}P={...P,status:n.anotacoes.salvoAs(r(e))},f()}}async function $(e){P!==null&&(P=e===`fixada`?{...P,fixada:!P.fixada}:{...P,arquivada:!P.arquivada},f(),P.id!==null&&await Q())}async function ae(){let e=P?.id;e!=null&&await s({titulo:n.anotacoes.excluir,texto:n.anotacoes.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(clearTimeout(I),I=void 0,await C(e),c(n.anotacoes.excluida),o(`anotacoes`))}function oe(r){return e`
    <div class="editor editor--cheio">
      <kk-input
        ${r.id===null?O:t}
        class="editor__titulo"
        placeholder=${n.anotacoes.tituloPlaceholder}
        .value=${r.titulo}
        @kk-input=${e=>{P={...r,titulo:e.target.value},X()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${r.pastaId===null}
          @click=${()=>{P={...r,pastaId:null},X()}}
        >
          ${n.anotacoes.semPasta}
        </button>

        ${j.map(t=>e`
            <button
              class="chip"
              ?data-ativo=${r.pastaId===t.id}
              @click=${()=>{P={...r,pastaId:t.id??null},X()}}
            >
              ${t.nome}
            </button>
          `)}

        <button class="chip" title=${n.pasta.nova} @click=${()=>void G()}>
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <div class="editor__linha">
        <span class="editor__status">${r.status}</span>
      </div>

      <kk-editor
        @kk-input=${e=>{P={...r,conteudo:e.detail.value},X()}}
      ></kk-editor>
    </div>

    ${ce(r)}
  `}function se(e){return`${e.titulo}. ${e.conteudo}`}function ce(t){return R.overlay(e`
      <h1>${t.titulo||n.anotacoes.semTitulo}</h1>
      <div class="prosa">${d(m(t.conteudo))}</div>
    `,()=>se(t))}function le(){o(`anotacoes/nova/${S()}`)}function ue(){return e`
    <kk-icon-button
      name="calendar-check"
      label=${n.anotacoes.reuniao}
      @click=${le}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${n.anotacoes.nova}
      @click=${async()=>{A=await _(),L=!0,f()}}
    ></kk-icon-button>
  `}function de(t){if(t.id!==null)return e`
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
    ${R.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${n.anotacoes.excluir}
      @click=${()=>void ae()}
    ></kk-icon-button>
  `}var fe={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=P?.titulo.trim()??``;return t===``?n.anotacoes.nova:t},acoes(e){return e.args.length===0?ue():P===null?void 0:de(P)},conteudo(e){let t=U.falhou(e);return t===null?e.args.length===0?Y():P===null?l():oe(P):t}};export{fe as telaAnotacoes};