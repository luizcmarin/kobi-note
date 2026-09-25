import{Z as e,at as t,b as n,ct as r,g as i,gt as a,it as o,lt as s,m as c,pt as l,tt as u,ut as d,vt as f,y as p}from"./index-sA5grpgQ.js";import{AUTOMATICAS as m,CATEGORIAS as h,ajustar as g,alternarConclusao as _,alvoDoFormulario as v,alvoParaOFormulario as y,carregarFontes as b,categoriaDe as x,concluida as S,excluirMeta as C,listar as w,listarMetas as T,medida as E,percentualDaMeta as D,rotuloCategoria as O,salvarMeta as k,statusPrazo as A,sufixo as j,valorAtual as M}from"./dados-BFoh9mTW.js";var N=`—`,P=[],F=null,I=[],L=`ativas`,R=``,z=null,B,V=!1,H=null,U=null;function W(){s(`metas`,()=>{B=void 0})}async function G(){let e=await T(),t=await b(e);P=e,F=t.fontes,I=t.categoriasFinanceiro,r()}function K(){return{id:0,titulo:``,item:h[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:u(),prazoFinal:t(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function q(e){W();let i=e.args.join(`/`);B===i||V||H!==null||(B=i,V=!0,(async()=>{try{await G();let[n]=e.args;if(n===void 0)z=null;else if(n===`nova`)z=K();else{let e=P.find(e=>e.id===Number.parseInt(n,10));if(e===void 0){d(`metas`);return}z={id:e.id??0,titulo:e.titulo,item:e.item,ativoId:Number(e.ativo_id)||0,ativoNome:e.ativo_nome,dataMeta:e.data_meta?u(e.data_meta):u(),prazoFinal:e.prazo_final?u(e.prazo_final):t(30),progressoAtual:e.progresso_atual,progressoAlvo:y(e.progresso_alvo,e.item),concluida:e.esta_concluida}}}catch(t){console.error(`metas: a carga falhou.`,t),H=n(t),U=e}finally{V=!1,r()}})())}function J(){let e=U;H=null,U=null,B=void 0,e!==null&&q(e),r()}function Y(t){let n=A(t,F),r=m.has(t.item),i=S(t,F);return f`
    <div class="meta" data-status=${n}>
      <div class="meta__topo">
        <span class="meta__titulo">${t.titulo}</span>
        <kk-badge variant=${i?`success`:`neutral`} pill>
          ${D(t,F)}%
        </kk-badge>
      </div>

      <span class="meta__categoria">${O(t)}</span>

      <div class="meta__barra" role="presentation">
        <div class="meta__preenchido" style=${`width:${D(t,F)}%`}></div>
      </div>

      <div class="meta__numeros">
        <span>
          ${E(M(t,F),t.item)} /
          ${E(t.progresso_alvo,t.item)}
        </span>
        <span class="meta__prazo">${l.metas.prazo(e(t.prazo_final)||N)}</span>
      </div>

      <div class="meta__acoes">
        ${r?f`
              <span class="meta__auto" title=${l.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${l.metas.automatica}
              </span>
            `:f`
              <kk-icon-button
                name="minus"
                label=${l.metas.diminuir}
                @click=${async()=>{await g(t,-1),await G()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${l.metas.aumentar}
                @click=${async()=>{await g(t,1),await G()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${i?`neutral`:`success`}
          outline
          @click=${async()=>{await _(t),await G()}}
        >
          <kk-icon slot="prefix" name=${i?`rotate`:`check`}></kk-icon>
          ${i?l.metas.reabrir:l.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${l.acoes.editar}
          @click=${()=>d(`metas/${t.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${l.metas.excluir}
          @click=${()=>void X(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function X(e){await i({titulo:l.metas.excluir,texto:l.acervo.excluirTexto,rotuloConfirmar:l.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await C(e.id),c(l.metas.excluida),await G())}function Z(){let e=w(P,F,L,R),t=P.filter(e=>!S(e,F)).length;return f`
    <p class="intro">${l.metas.resumo(t,P.length-t)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${l.metas.buscar}
        .value=${R}
        @kk-input=${e=>{R=e.target.value,r()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(e=>f`
          <button
            class="chip"
            ?data-ativo=${L===e}
            @click=${()=>{L=e,r()}}
          >
            ${l.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?f`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${P.length===0?l.metas.vazio:l.metas.semFiltro}</p>
          </div>
        `:f`<div class="metas">${e.map(e=>Y(e))}</div>`}
  `}async function Q(){if(z===null)return;if(z.titulo.trim()===``){c(l.metas.informeTitulo,`warning`);return}let e=m.has(z.item),t=Number(z.progressoAlvo)>0?Number(z.progressoAlvo):1,n=v(t,z.item),r=e?0:Math.max(0,Number(z.progressoAtual)),i=x(z.item).precisaAtivo===!0,a={...z.id>0?{id:z.id}:{},titulo:z.titulo,item:z.item,ativo_id:i?z.ativoId:0,ativo_nome:i?z.ativoNome:``,data_meta:z.dataMeta===``?Date.now():o(z.dataMeta),prazo_final:z.prazoFinal===``?Date.now():o(z.prazoFinal),progresso_atual:r,progresso_alvo:n,esta_concluida:+(z.concluida===1||!e&&r>=n)};await k(a),c(l.metas.salva),d(`metas`)}function $(e){let t=x(e.item);return f`
    <div class="formulario">
      <kk-input
        label=${l.metas.titulo}
        placeholder=${l.metas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{z={...z??e,titulo:t.target.value}}}
      ></kk-input>

      <kk-select
        label=${l.metas.categoria}
        help-text=${m.has(e.item)?l.metas.automaticaAjuda:``}
        .value=${e.item}
        @kk-change=${t=>{z={...z??e,item:t.target.value},r()}}
      >
        ${h.map(e=>f`<kk-option value=${e.chave}>${e.modulo}: ${e.ativo}</kk-option>`)}
      </kk-select>

      ${t.precisaAtivo===!0?f`
            <kk-select
              label=${l.metas.ativo}
              .value=${e.ativoId===0?``:String(e.ativoId)}
              @kk-change=${t=>{let n=Number(t.target.value)||0,i=I.find(e=>e.id===n);z={...z??e,ativoId:n,ativoNome:i?.nome??``},r()}}
            >
              <kk-option value="">${l.perfil.selecione}</kk-option>
              ${I.map(e=>f`<kk-option value=${String(e.id??``)}>${e.nome}</kk-option>`)}
            </kk-select>
          `:a}

      <kk-input
        type="number"
        label=${l.metas.alvo(j(e.item))}
        .value=${String(e.progressoAlvo)}
        @kk-input=${t=>{z={...z??e,progressoAlvo:Number(t.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${l.metas.inicio}
          .value=${e.dataMeta}
          @kk-change=${t=>{z={...z??e,dataMeta:t.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${l.metas.prazoFinal}
          .value=${e.prazoFinal}
          @kk-change=${t=>{z={...z??e,prazoFinal:t.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${l.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>d(`metas`)}>${l.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return z!==null&&z.id>0?l.metas.editar:l.metas.nova},acoes(e){if(!(e.args.length>0))return f`
      <kk-icon-button
        name="plus"
        label=${l.metas.nova}
        @click=${()=>d(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){return q(e),H===null?e.args.length===0?Z():z===null?f`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(z):p(H,J)}};export{ee as telaMetas};