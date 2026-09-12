import{K as e,Q as t,Y as n,Z as r,ct as i,et as a,g as o,it as s,m as c,ot as l,tt as u,v as d,y as f}from"./index-CFqbq_HS.js";import{AUTOMATICAS as p,CATEGORIAS as m,ajustar as h,alternarConclusao as g,alvoDoFormulario as _,alvoParaOFormulario as v,carregarFontes as y,categoriaDe as b,concluida as x,excluirMeta as S,listar as C,listarMetas as w,medida as T,percentualDaMeta as E,rotuloCategoria as D,salvarMeta as O,statusPrazo as k,sufixo as A,valorAtual as j}from"./dados-DRfDGN3d.js";var M=`—`,N=[],P=null,F=[],I=`ativas`,L=``,R=null,z,B=!1,V=null,H=null,U=!1;function W(){U||(U=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`metas`&&(z=void 0)}))}async function G(){let[e,t]=await Promise.all([w(),y()]);N=e,P=t.fontes,F=t.categoriasFinanceiro,a()}function K(){return{id:0,titulo:``,item:m[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:n(),prazoFinal:t(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function q(e){W();let r=e.args.join(`/`);z===r||B||V!==null||(z=r,B=!0,(async()=>{try{await G();let[r]=e.args;if(r===void 0)R=null;else if(r===`nova`)R=K();else{let e=N.find(e=>e.id===Number.parseInt(r,10));if(e===void 0){u(`metas`);return}R={id:e.id??0,titulo:e.titulo,item:e.item,ativoId:Number(e.ativo_id)||0,ativoNome:e.ativo_nome,dataMeta:e.data_meta?n(e.data_meta):n(),prazoFinal:e.prazo_final?n(e.prazo_final):t(30),progressoAtual:e.progresso_atual,progressoAlvo:v(e.progresso_alvo,e.item),concluida:e.esta_concluida}}}catch(t){console.error(`metas: a carga falhou.`,t),V=f(t),H=e}finally{B=!1,a()}})())}function J(){let e=H;V=null,H=null,z=void 0,e!==null&&q(e),a()}function Y(t){let n=k(t,P),r=p.has(t.item),a=x(t,P);return i`
    <div class="meta" data-status=${n}>
      <div class="meta__topo">
        <span class="meta__titulo">${t.titulo}</span>
        <kk-badge variant=${a?`success`:`neutral`} pill>
          ${E(t,P)}%
        </kk-badge>
      </div>

      <span class="meta__categoria">${D(t)}</span>

      <div class="meta__barra" role="presentation">
        <div class="meta__preenchido" style=${`width:${E(t,P)}%`}></div>
      </div>

      <div class="meta__numeros">
        <span>
          ${T(j(t,P),t.item)} /
          ${T(t.progresso_alvo,t.item)}
        </span>
        <span class="meta__prazo">${s.metas.prazo(e(t.prazo_final)||M)}</span>
      </div>

      <div class="meta__acoes">
        ${r?i`
              <span class="meta__auto" title=${s.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${s.metas.automatica}
              </span>
            `:i`
              <kk-icon-button
                name="minus"
                label=${s.metas.diminuir}
                @click=${async()=>{await h(t,-1),await G()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${s.metas.aumentar}
                @click=${async()=>{await h(t,1),await G()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${a?`neutral`:`success`}
          outline
          @click=${async()=>{await g(t),await G()}}
        >
          <kk-icon slot="prefix" name=${a?`rotate`:`check`}></kk-icon>
          ${a?s.metas.reabrir:s.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${s.acoes.editar}
          @click=${()=>u(`metas/${t.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${s.metas.excluir}
          @click=${()=>void X(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function X(e){await o({titulo:s.metas.excluir,texto:s.acervo.excluirTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await S(e.id),c(s.metas.excluida),await G())}function Z(){let e=C(N,P,I,L),t=N.filter(e=>!x(e,P)).length;return i`
    <p class="intro">${s.metas.resumo(t,N.length-t)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${s.metas.buscar}
        .value=${L}
        @kk-input=${e=>{L=e.target.value,a()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(e=>i`
          <button
            class="chip"
            ?data-ativo=${I===e}
            @click=${()=>{I=e,a()}}
          >
            ${s.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?i`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${N.length===0?s.metas.vazio:s.metas.semFiltro}</p>
          </div>
        `:i`<div class="metas">${e.map(e=>Y(e))}</div>`}
  `}async function Q(){if(R===null)return;if(R.titulo.trim()===``){c(s.metas.informeTitulo,`warning`);return}let e=p.has(R.item),t=Number(R.progressoAlvo)>0?Number(R.progressoAlvo):1,n=_(t,R.item),i=e?0:Math.max(0,Number(R.progressoAtual)),a=b(R.item).precisaAtivo===!0,o={...R.id>0?{id:R.id}:{},titulo:R.titulo,item:R.item,ativo_id:a?R.ativoId:0,ativo_nome:a?R.ativoNome:``,data_meta:R.dataMeta===``?Date.now():r(R.dataMeta),prazo_final:R.prazoFinal===``?Date.now():r(R.prazoFinal),progresso_atual:i,progresso_alvo:n,esta_concluida:+(R.concluida===1||!e&&i>=n)};await O(o),c(s.metas.salva),u(`metas`)}function $(e){let t=b(e.item);return i`
    <div class="formulario">
      <kk-input
        label=${s.metas.titulo}
        placeholder=${s.metas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{R={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-select
        label=${s.metas.categoria}
        help-text=${p.has(e.item)?s.metas.automaticaAjuda:``}
        .value=${e.item}
        @kk-change=${t=>{R={...e,item:t.target.value},a()}}
      >
        ${m.map(e=>i`<kk-option value=${e.chave}>${e.modulo}: ${e.ativo}</kk-option>`)}
      </kk-select>

      ${t.precisaAtivo===!0?i`
            <kk-select
              label=${s.metas.ativo}
              .value=${e.ativoId===0?``:String(e.ativoId)}
              @kk-change=${t=>{let n=Number(t.target.value)||0,r=F.find(e=>e.id===n);R={...e,ativoId:n,ativoNome:r?.nome??``},a()}}
            >
              <kk-option value="">${s.perfil.selecione}</kk-option>
              ${F.map(e=>i`<kk-option value=${String(e.id??``)}>${e.nome}</kk-option>`)}
            </kk-select>
          `:l}

      <kk-input
        type="number"
        label=${s.metas.alvo(A(e.item))}
        .value=${String(e.progressoAlvo)}
        @kk-input=${t=>{R={...e,progressoAlvo:Number(t.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${s.metas.inicio}
          .value=${e.dataMeta}
          @kk-change=${t=>{R={...e,dataMeta:t.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${s.metas.prazoFinal}
          .value=${e.prazoFinal}
          @kk-change=${t=>{R={...e,prazoFinal:t.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>u(`metas`)}>${s.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return R!==null&&R.id>0?s.metas.editar:s.metas.nova},acoes(e){if(!(e.args.length>0))return i`
      <kk-icon-button
        name="plus"
        label=${s.metas.nova}
        @click=${()=>u(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){return q(e),V===null?e.args.length===0?Z():R===null?i`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(R):d(V,J)}};export{ee as telaMetas};