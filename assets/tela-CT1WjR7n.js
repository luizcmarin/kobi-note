import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-C-U_qlgv.js";import{n as r,r as i}from"./rotas-D12eslN_.js";import{a,c as o,l as s,t as c}from"./data-7IMAkOFv.js";import{R as l,c as u,d,m as f}from"./index-DQ-iAe1X.js";import{n as p}from"./carga-Cl47TOz-.js";import{AUTOMATICAS as m,CATEGORIAS as h,ajustar as g,alternarConclusao as _,alvoDoFormulario as v,alvoParaOFormulario as y,carregarFontes as b,categoriaDe as x,concluida as S,excluirMeta as C,listar as w,listarMetas as T,medida as E,nomeDaCategoria as D,percentualDaMeta as O,rotuloCategoria as k,salvarMeta as A,statusPrazo as j,sufixo as M,valorAtual as N}from"./dados-Ct2QhFRf.js";var P=`—`,F=[],I=null,L=[],R=`ativas`,z=``,B=null;async function V(){let e=await T(),t=await b(e);F=e,I=t.fontes,L=t.categoriasFinanceiro,l()}function H(){return{id:0,titulo:``,item:h[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:a(),prazoFinal:s(30),progressoAtual:0,progressoAlvo:100,concluida:0}}var U=new p(`metas`,async e=>{await V();let[t]=e.args;if(t===void 0)B=null;else if(t===`nova`)B=H();else{let e=F.find(e=>e.id===Number.parseInt(t,10));if(e===void 0){i(`metas`);return}B={id:e.id??0,titulo:e.titulo,item:e.item,ativoId:Number(e.ativo_id)||0,ativoNome:e.ativo_nome,dataMeta:e.data_meta?a(e.data_meta):a(),prazoFinal:e.prazo_final?a(e.prazo_final):s(30),progressoAtual:e.progresso_atual,progressoAlvo:y(e.progresso_alvo,e.item),concluida:e.esta_concluida}}});r(`metas`,()=>U.esquecer());function W(t){let r=j(t,I),a=m.has(t.item),o=S(t,I);return e`
    <div class="meta" data-status=${r}>
      <div class="meta__topo">
        <span class="meta__titulo">${t.titulo}</span>
        <kk-badge variant=${o?`success`:`neutral`} pill>
          ${O(t,I)}%
        </kk-badge>
      </div>

      <span class="meta__categoria">${k(t)}</span>

      <div class="meta__barra" role="presentation">
        <div class="meta__preenchido" style=${`width:${O(t,I)}%`}></div>
      </div>

      <div class="meta__numeros">
        <span>
          ${E(N(t,I),t.item)} /
          ${E(t.progresso_alvo,t.item)}
        </span>
        <span class="meta__prazo">${n.metas.prazo(c(t.prazo_final)||P)}</span>
      </div>

      <div class="meta__acoes">
        ${a?e`
              <span class="meta__auto" title=${n.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${n.metas.automatica}
              </span>
            `:e`
              <kk-icon-button
                name="minus"
                label=${n.metas.diminuir}
                @click=${async()=>{await g(t,-1),await V()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${n.metas.aumentar}
                @click=${async()=>{await g(t,1),await V()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${o?`neutral`:`success`}
          outline
          @click=${async()=>{await _(t),await V()}}
        >
          <kk-icon slot="prefix" name=${o?`rotate`:`check`}></kk-icon>
          ${o?n.metas.reabrir:n.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${n.acoes.editar}
          @click=${()=>i(`metas/${t.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.metas.excluir}
          @click=${()=>void G(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function G(e){await f({titulo:n.metas.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await C(e.id),u(n.metas.excluida),await V())}function K(){let t=w(F,I,R,z),r=F.filter(e=>!S(e,I)).length;return e`
    <p class="intro">${n.metas.resumo(r,F.length-r)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.metas.buscar}
        .value=${z}
        @kk-input=${e=>{z=e.target.value,l()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(t=>e`
          <button
            class="chip"
            ?data-ativo=${R===t}
            @click=${()=>{R=t,l()}}
          >
            ${n.metas.filtros[t]}
          </button>
        `)}
    </div>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${F.length===0?n.metas.vazio:n.metas.semFiltro}</p>
          </div>
        `:e`<div class="metas">${t.map(e=>W(e))}</div>`}
  `}async function q(){if(B===null)return;if(B.titulo.trim()===``){u(n.metas.informeTitulo,`warning`);return}let e=m.has(B.item),t=Number(B.progressoAlvo)>0?Number(B.progressoAlvo):1,r=v(t,B.item),a=e?0:Math.max(0,Number(B.progressoAtual)),s=x(B.item).precisaAtivo===!0,c={...B.id>0?{id:B.id}:{},titulo:B.titulo,item:B.item,ativo_id:s?B.ativoId:0,ativo_nome:s?B.ativoNome:``,data_meta:B.dataMeta===``?Date.now():o(B.dataMeta),prazo_final:B.prazoFinal===``?Date.now():o(B.prazoFinal),progresso_atual:a,progresso_alvo:r,esta_concluida:+(B.concluida===1||!e&&a>=r)};await A(c),u(n.metas.salva),i(`metas`)}function J(r){let a=x(r.item);return e`
    <div class="formulario">
      <kk-input
        label=${n.metas.titulo}
        placeholder=${n.metas.tituloPlaceholder}
        .value=${r.titulo}
        @kk-input=${e=>{B={...B??r,titulo:e.target.value}}}
      ></kk-input>

      <kk-select
        label=${n.metas.categoria}
        help-text=${m.has(r.item)?n.metas.automaticaAjuda:``}
        .value=${r.item}
        @kk-change=${e=>{B={...B??r,item:e.target.value},l()}}
      >
        ${h.map(t=>e`<kk-option value=${t.chave}>${D(t.chave)}</kk-option>`)}
      </kk-select>

      ${a.precisaAtivo===!0?e`
            <kk-select
              label=${n.metas.ativo}
              .value=${r.ativoId===0?``:String(r.ativoId)}
              @kk-change=${e=>{let t=Number(e.target.value)||0,n=L.find(e=>e.id===t);B={...B??r,ativoId:t,ativoNome:n?.nome??``},l()}}
            >
              <kk-option value="">${n.perfil.selecione}</kk-option>
              ${L.map(t=>e`<kk-option value=${String(t.id??``)}>${t.nome}</kk-option>`)}
            </kk-select>
          `:t}

      <kk-input
        type="number"
        label=${n.metas.alvo(M(r.item))}
        .value=${String(r.progressoAlvo)}
        @kk-input=${e=>{B={...B??r,progressoAlvo:Number(e.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${n.metas.inicio}
          .value=${r.dataMeta}
          @kk-change=${e=>{B={...B??r,dataMeta:e.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${n.metas.prazoFinal}
          .value=${r.prazoFinal}
          @kk-change=${e=>{B={...B??r,prazoFinal:e.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>i(`metas`)}>${n.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var Y={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return B!==null&&B.id>0?n.metas.editar:n.metas.nova},acoes(t){if(!(t.args.length>0))return e`
      <kk-icon-button
        name="plus"
        label=${n.metas.nova}
        @click=${()=>i(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){let t=U.falhou(e);return t===null?e.args.length===0?K():B===null?d():J(B):t}};export{Y as telaMetas};