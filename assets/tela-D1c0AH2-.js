import{Z as e,_t as t,b as n,ct as r,ft as i,g as a,ht as o,it as s,lt as c,m as l,rt as u,st as d,tt as f,y as p}from"./index-C6owxr6H.js";import{AUTOMATICAS as m,CATEGORIAS as h,ajustar as g,alternarConclusao as _,alvoDoFormulario as v,alvoParaOFormulario as y,carregarFontes as b,categoriaDe as x,concluida as S,excluirMeta as C,listar as w,listarMetas as T,medida as E,percentualDaMeta as D,rotuloCategoria as O,salvarMeta as k,statusPrazo as A,sufixo as j,valorAtual as M}from"./dados-BhCE63KC.js";var N=`—`,P=[],F=null,I=[],L=`ativas`,R=``,z=null,B,V=!1,H=null,U=null;function W(){r(`metas`,()=>{B=void 0})}async function G(){let e=await T(),t=await b(e);P=e,F=t.fontes,I=t.categoriasFinanceiro,d()}function K(){return{id:0,titulo:``,item:h[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:f(),prazoFinal:s(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function q(e){W();let t=e.args.join(`/`);B===t||V||H!==null||(B=t,V=!0,(async()=>{try{await G();let[t]=e.args;if(t===void 0)z=null;else if(t===`nova`)z=K();else{let e=P.find(e=>e.id===Number.parseInt(t,10));if(e===void 0){c(`metas`);return}z={id:e.id??0,titulo:e.titulo,item:e.item,ativoId:Number(e.ativo_id)||0,ativoNome:e.ativo_nome,dataMeta:e.data_meta?f(e.data_meta):f(),prazoFinal:e.prazo_final?f(e.prazo_final):s(30),progressoAtual:e.progresso_atual,progressoAlvo:y(e.progresso_alvo,e.item),concluida:e.esta_concluida}}}catch(t){console.error(`metas: a carga falhou.`,t),H=n(t),U=e}finally{V=!1,d()}})())}function J(){let e=U;H=null,U=null,B=void 0,e!==null&&q(e),d()}function Y(n){let r=A(n,F),a=m.has(n.item),o=S(n,F);return t`
    <div class="meta" data-status=${r}>
      <div class="meta__topo">
        <span class="meta__titulo">${n.titulo}</span>
        <kk-badge variant=${o?`success`:`neutral`} pill>
          ${D(n,F)}%
        </kk-badge>
      </div>

      <span class="meta__categoria">${O(n)}</span>

      <div class="meta__barra" role="presentation">
        <div class="meta__preenchido" style=${`width:${D(n,F)}%`}></div>
      </div>

      <div class="meta__numeros">
        <span>
          ${E(M(n,F),n.item)} /
          ${E(n.progresso_alvo,n.item)}
        </span>
        <span class="meta__prazo">${i.metas.prazo(e(n.prazo_final)||N)}</span>
      </div>

      <div class="meta__acoes">
        ${a?t`
              <span class="meta__auto" title=${i.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${i.metas.automatica}
              </span>
            `:t`
              <kk-icon-button
                name="minus"
                label=${i.metas.diminuir}
                @click=${async()=>{await g(n,-1),await G()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${i.metas.aumentar}
                @click=${async()=>{await g(n,1),await G()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${o?`neutral`:`success`}
          outline
          @click=${async()=>{await _(n),await G()}}
        >
          <kk-icon slot="prefix" name=${o?`rotate`:`check`}></kk-icon>
          ${o?i.metas.reabrir:i.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${i.acoes.editar}
          @click=${()=>c(`metas/${n.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${i.metas.excluir}
          @click=${()=>void X(n)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function X(e){await a({titulo:i.metas.excluir,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await C(e.id),l(i.metas.excluida),await G())}function Z(){let e=w(P,F,L,R),n=P.filter(e=>!S(e,F)).length;return t`
    <p class="intro">${i.metas.resumo(n,P.length-n)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${i.metas.buscar}
        .value=${R}
        @kk-input=${e=>{R=e.target.value,d()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(e=>t`
          <button
            class="chip"
            ?data-ativo=${L===e}
            @click=${()=>{L=e,d()}}
          >
            ${i.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?t`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${P.length===0?i.metas.vazio:i.metas.semFiltro}</p>
          </div>
        `:t`<div class="metas">${e.map(e=>Y(e))}</div>`}
  `}async function Q(){if(z===null)return;if(z.titulo.trim()===``){l(i.metas.informeTitulo,`warning`);return}let e=m.has(z.item),t=Number(z.progressoAlvo)>0?Number(z.progressoAlvo):1,n=v(t,z.item),r=e?0:Math.max(0,Number(z.progressoAtual)),a=x(z.item).precisaAtivo===!0,o={...z.id>0?{id:z.id}:{},titulo:z.titulo,item:z.item,ativo_id:a?z.ativoId:0,ativo_nome:a?z.ativoNome:``,data_meta:z.dataMeta===``?Date.now():u(z.dataMeta),prazo_final:z.prazoFinal===``?Date.now():u(z.prazoFinal),progresso_atual:r,progresso_alvo:n,esta_concluida:+(z.concluida===1||!e&&r>=n)};await k(o),l(i.metas.salva),c(`metas`)}function $(e){let n=x(e.item);return t`
    <div class="formulario">
      <kk-input
        label=${i.metas.titulo}
        placeholder=${i.metas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{z={...z??e,titulo:t.target.value}}}
      ></kk-input>

      <kk-select
        label=${i.metas.categoria}
        help-text=${m.has(e.item)?i.metas.automaticaAjuda:``}
        .value=${e.item}
        @kk-change=${t=>{z={...z??e,item:t.target.value},d()}}
      >
        ${h.map(e=>t`<kk-option value=${e.chave}>${e.modulo}: ${e.ativo}</kk-option>`)}
      </kk-select>

      ${n.precisaAtivo===!0?t`
            <kk-select
              label=${i.metas.ativo}
              .value=${e.ativoId===0?``:String(e.ativoId)}
              @kk-change=${t=>{let n=Number(t.target.value)||0,r=I.find(e=>e.id===n);z={...z??e,ativoId:n,ativoNome:r?.nome??``},d()}}
            >
              <kk-option value="">${i.perfil.selecione}</kk-option>
              ${I.map(e=>t`<kk-option value=${String(e.id??``)}>${e.nome}</kk-option>`)}
            </kk-select>
          `:o}

      <kk-input
        type="number"
        label=${i.metas.alvo(j(e.item))}
        .value=${String(e.progressoAlvo)}
        @kk-input=${t=>{z={...z??e,progressoAlvo:Number(t.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${i.metas.inicio}
          .value=${e.dataMeta}
          @kk-change=${t=>{z={...z??e,dataMeta:t.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${i.metas.prazoFinal}
          .value=${e.prazoFinal}
          @kk-change=${t=>{z={...z??e,prazoFinal:t.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>c(`metas`)}>${i.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return z!==null&&z.id>0?i.metas.editar:i.metas.nova},acoes(e){if(!(e.args.length>0))return t`
      <kk-icon-button
        name="plus"
        label=${i.metas.nova}
        @click=${()=>c(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){return q(e),H===null?e.args.length===0?Z():z===null?t`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(z):p(H,J)}};export{ee as telaMetas};