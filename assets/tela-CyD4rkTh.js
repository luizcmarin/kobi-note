import{C as e,_t as t,at as n,bt as r,ct as i,ft as a,g as o,lt as s,m as c,mt as l,pt as u,tt as d,w as f,xt as p}from"./index-tEHw1VqD.js";import{AUTOMATICAS as m,CATEGORIAS as h,ajustar as g,alternarConclusao as _,alvoDoFormulario as v,alvoParaOFormulario as y,carregarFontes as b,categoriaDe as x,concluida as S,excluirMeta as C,listar as w,listarMetas as T,medida as E,percentualDaMeta as D,rotuloCategoria as O,salvarMeta as k,statusPrazo as A,sufixo as j,valorAtual as M}from"./dados-CQNY3TQH.js";var N=`—`,P=[],F=null,I=[],L=`ativas`,R=``,z=null,B,V=!1,H=null,U=null;function W(){u(`metas`,()=>{B=void 0})}async function G(){let e=await T(),t=await b(e);P=e,F=t.fontes,I=t.categoriasFinanceiro,a()}function K(){return{id:0,titulo:``,item:h[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:n(),prazoFinal:s(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function q(e){W();let t=e.args.join(`/`);B===t||V||H!==null||(B=t,V=!0,(async()=>{try{await G();let[t]=e.args;if(t===void 0)z=null;else if(t===`nova`)z=K();else{let e=P.find(e=>e.id===Number.parseInt(t,10));if(e===void 0){l(`metas`);return}z={id:e.id??0,titulo:e.titulo,item:e.item,ativoId:Number(e.ativo_id)||0,ativoNome:e.ativo_nome,dataMeta:e.data_meta?n(e.data_meta):n(),prazoFinal:e.prazo_final?n(e.prazo_final):s(30),progressoAtual:e.progresso_atual,progressoAlvo:y(e.progresso_alvo,e.item),concluida:e.esta_concluida}}}catch(t){console.error(`metas: a carga falhou.`,t),H=f(t),U=e}finally{V=!1,a()}})())}function J(){let e=U;H=null,U=null,B=void 0,e!==null&&q(e),a()}function Y(e){let n=A(e,F),r=m.has(e.item),i=S(e,F);return p`
    <div class="meta" data-status=${n}>
      <div class="meta__topo">
        <span class="meta__titulo">${e.titulo}</span>
        <kk-badge variant=${i?`success`:`neutral`} pill>
          ${D(e,F)}%
        </kk-badge>
      </div>

      <span class="meta__categoria">${O(e)}</span>

      <div class="meta__barra" role="presentation">
        <div class="meta__preenchido" style=${`width:${D(e,F)}%`}></div>
      </div>

      <div class="meta__numeros">
        <span>
          ${E(M(e,F),e.item)} /
          ${E(e.progresso_alvo,e.item)}
        </span>
        <span class="meta__prazo">${t.metas.prazo(d(e.prazo_final)||N)}</span>
      </div>

      <div class="meta__acoes">
        ${r?p`
              <span class="meta__auto" title=${t.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${t.metas.automatica}
              </span>
            `:p`
              <kk-icon-button
                name="minus"
                label=${t.metas.diminuir}
                @click=${async()=>{await g(e,-1),await G()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${t.metas.aumentar}
                @click=${async()=>{await g(e,1),await G()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${i?`neutral`:`success`}
          outline
          @click=${async()=>{await _(e),await G()}}
        >
          <kk-icon slot="prefix" name=${i?`rotate`:`check`}></kk-icon>
          ${i?t.metas.reabrir:t.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${t.acoes.editar}
          @click=${()=>l(`metas/${e.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${t.metas.excluir}
          @click=${()=>void X(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function X(e){await o({titulo:t.metas.excluir,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await C(e.id),c(t.metas.excluida),await G())}function Z(){let e=w(P,F,L,R),n=P.filter(e=>!S(e,F)).length;return p`
    <p class="intro">${t.metas.resumo(n,P.length-n)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${t.metas.buscar}
        .value=${R}
        @kk-input=${e=>{R=e.target.value,a()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(e=>p`
          <button
            class="chip"
            ?data-ativo=${L===e}
            @click=${()=>{L=e,a()}}
          >
            ${t.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?p`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${P.length===0?t.metas.vazio:t.metas.semFiltro}</p>
          </div>
        `:p`<div class="metas">${e.map(e=>Y(e))}</div>`}
  `}async function Q(){if(z===null)return;if(z.titulo.trim()===``){c(t.metas.informeTitulo,`warning`);return}let e=m.has(z.item),n=Number(z.progressoAlvo)>0?Number(z.progressoAlvo):1,r=v(n,z.item),a=e?0:Math.max(0,Number(z.progressoAtual)),o=x(z.item).precisaAtivo===!0,s={...z.id>0?{id:z.id}:{},titulo:z.titulo,item:z.item,ativo_id:o?z.ativoId:0,ativo_nome:o?z.ativoNome:``,data_meta:z.dataMeta===``?Date.now():i(z.dataMeta),prazo_final:z.prazoFinal===``?Date.now():i(z.prazoFinal),progresso_atual:a,progresso_alvo:r,esta_concluida:+(z.concluida===1||!e&&a>=r)};await k(s),c(t.metas.salva),l(`metas`)}function $(e){let n=x(e.item);return p`
    <div class="formulario">
      <kk-input
        label=${t.metas.titulo}
        placeholder=${t.metas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{z={...z??e,titulo:t.target.value}}}
      ></kk-input>

      <kk-select
        label=${t.metas.categoria}
        help-text=${m.has(e.item)?t.metas.automaticaAjuda:``}
        .value=${e.item}
        @kk-change=${t=>{z={...z??e,item:t.target.value},a()}}
      >
        ${h.map(e=>p`<kk-option value=${e.chave}>${e.modulo}: ${e.ativo}</kk-option>`)}
      </kk-select>

      ${n.precisaAtivo===!0?p`
            <kk-select
              label=${t.metas.ativo}
              .value=${e.ativoId===0?``:String(e.ativoId)}
              @kk-change=${t=>{let n=Number(t.target.value)||0,r=I.find(e=>e.id===n);z={...z??e,ativoId:n,ativoNome:r?.nome??``},a()}}
            >
              <kk-option value="">${t.perfil.selecione}</kk-option>
              ${I.map(e=>p`<kk-option value=${String(e.id??``)}>${e.nome}</kk-option>`)}
            </kk-select>
          `:r}

      <kk-input
        type="number"
        label=${t.metas.alvo(j(e.item))}
        .value=${String(e.progressoAlvo)}
        @kk-input=${t=>{z={...z??e,progressoAlvo:Number(t.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${t.metas.inicio}
          .value=${e.dataMeta}
          @kk-change=${t=>{z={...z??e,dataMeta:t.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${t.metas.prazoFinal}
          .value=${e.prazoFinal}
          @kk-change=${t=>{z={...z??e,prazoFinal:t.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>l(`metas`)}>${t.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return z!==null&&z.id>0?t.metas.editar:t.metas.nova},acoes(e){if(!(e.args.length>0))return p`
      <kk-icon-button
        name="plus"
        label=${t.metas.nova}
        @click=${()=>l(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(t){return q(t),H===null?t.args.length===0?Z():z===null?p`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(z):e(H,J)}};export{ee as telaMetas};