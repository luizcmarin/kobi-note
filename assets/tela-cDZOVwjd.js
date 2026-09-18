import{X as e,et as t,ft as n,g as r,m as i,mt as a,nt as o,ot as s,rt as c,st as l,ut as u,v as d,y as f}from"./index-D3l2wNoD.js";import{AUTOMATICAS as p,CATEGORIAS as m,ajustar as h,alternarConclusao as g,alvoDoFormulario as _,alvoParaOFormulario as v,carregarFontes as y,categoriaDe as b,concluida as x,excluirMeta as S,listar as C,listarMetas as w,medida as T,percentualDaMeta as E,rotuloCategoria as D,salvarMeta as O,statusPrazo as k,sufixo as A,valorAtual as j}from"./dados-BMBT_kp2.js";var M=`—`,N=[],P=null,F=[],I=`ativas`,L=``,R=null,z,B=!1,V=null,H=null,U=!1;function W(){U||(U=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`metas`&&(z=void 0)}))}async function G(){let e=await w(),t=await y(e);N=e,P=t.fontes,F=t.categoriasFinanceiro,s()}function K(){return{id:0,titulo:``,item:m[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:t(),prazoFinal:c(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function q(e){W();let n=e.args.join(`/`);z===n||B||V!==null||(z=n,B=!0,(async()=>{try{await G();let[n]=e.args;if(n===void 0)R=null;else if(n===`nova`)R=K();else{let e=N.find(e=>e.id===Number.parseInt(n,10));if(e===void 0){l(`metas`);return}R={id:e.id??0,titulo:e.titulo,item:e.item,ativoId:Number(e.ativo_id)||0,ativoNome:e.ativo_nome,dataMeta:e.data_meta?t(e.data_meta):t(),prazoFinal:e.prazo_final?t(e.prazo_final):c(30),progressoAtual:e.progresso_atual,progressoAlvo:v(e.progresso_alvo,e.item),concluida:e.esta_concluida}}}catch(t){console.error(`metas: a carga falhou.`,t),V=f(t),H=e}finally{B=!1,s()}})())}function J(){let e=H;V=null,H=null,z=void 0,e!==null&&q(e),s()}function Y(t){let n=k(t,P),r=p.has(t.item),i=x(t,P);return a`
    <div class="meta" data-status=${n}>
      <div class="meta__topo">
        <span class="meta__titulo">${t.titulo}</span>
        <kk-badge variant=${i?`success`:`neutral`} pill>
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
        <span class="meta__prazo">${u.metas.prazo(e(t.prazo_final)||M)}</span>
      </div>

      <div class="meta__acoes">
        ${r?a`
              <span class="meta__auto" title=${u.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${u.metas.automatica}
              </span>
            `:a`
              <kk-icon-button
                name="minus"
                label=${u.metas.diminuir}
                @click=${async()=>{await h(t,-1),await G()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${u.metas.aumentar}
                @click=${async()=>{await h(t,1),await G()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${i?`neutral`:`success`}
          outline
          @click=${async()=>{await g(t),await G()}}
        >
          <kk-icon slot="prefix" name=${i?`rotate`:`check`}></kk-icon>
          ${i?u.metas.reabrir:u.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${u.acoes.editar}
          @click=${()=>l(`metas/${t.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${u.metas.excluir}
          @click=${()=>void X(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function X(e){await r({titulo:u.metas.excluir,texto:u.acervo.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await S(e.id),i(u.metas.excluida),await G())}function Z(){let e=C(N,P,I,L),t=N.filter(e=>!x(e,P)).length;return a`
    <p class="intro">${u.metas.resumo(t,N.length-t)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${u.metas.buscar}
        .value=${L}
        @kk-input=${e=>{L=e.target.value,s()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(e=>a`
          <button
            class="chip"
            ?data-ativo=${I===e}
            @click=${()=>{I=e,s()}}
          >
            ${u.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${N.length===0?u.metas.vazio:u.metas.semFiltro}</p>
          </div>
        `:a`<div class="metas">${e.map(e=>Y(e))}</div>`}
  `}async function Q(){if(R===null)return;if(R.titulo.trim()===``){i(u.metas.informeTitulo,`warning`);return}let e=p.has(R.item),t=Number(R.progressoAlvo)>0?Number(R.progressoAlvo):1,n=_(t,R.item),r=e?0:Math.max(0,Number(R.progressoAtual)),a=b(R.item).precisaAtivo===!0,s={...R.id>0?{id:R.id}:{},titulo:R.titulo,item:R.item,ativo_id:a?R.ativoId:0,ativo_nome:a?R.ativoNome:``,data_meta:R.dataMeta===``?Date.now():o(R.dataMeta),prazo_final:R.prazoFinal===``?Date.now():o(R.prazoFinal),progresso_atual:r,progresso_alvo:n,esta_concluida:+(R.concluida===1||!e&&r>=n)};await O(s),i(u.metas.salva),l(`metas`)}function $(e){let t=b(e.item);return a`
    <div class="formulario">
      <kk-input
        label=${u.metas.titulo}
        placeholder=${u.metas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{R={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-select
        label=${u.metas.categoria}
        help-text=${p.has(e.item)?u.metas.automaticaAjuda:``}
        .value=${e.item}
        @kk-change=${t=>{R={...e,item:t.target.value},s()}}
      >
        ${m.map(e=>a`<kk-option value=${e.chave}>${e.modulo}: ${e.ativo}</kk-option>`)}
      </kk-select>

      ${t.precisaAtivo===!0?a`
            <kk-select
              label=${u.metas.ativo}
              .value=${e.ativoId===0?``:String(e.ativoId)}
              @kk-change=${t=>{let n=Number(t.target.value)||0,r=F.find(e=>e.id===n);R={...e,ativoId:n,ativoNome:r?.nome??``},s()}}
            >
              <kk-option value="">${u.perfil.selecione}</kk-option>
              ${F.map(e=>a`<kk-option value=${String(e.id??``)}>${e.nome}</kk-option>`)}
            </kk-select>
          `:n}

      <kk-input
        type="number"
        label=${u.metas.alvo(A(e.item))}
        .value=${String(e.progressoAlvo)}
        @kk-input=${t=>{R={...e,progressoAlvo:Number(t.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${u.metas.inicio}
          .value=${e.dataMeta}
          @kk-change=${t=>{R={...e,dataMeta:t.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${u.metas.prazoFinal}
          .value=${e.prazoFinal}
          @kk-change=${t=>{R={...e,prazoFinal:t.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${u.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>l(`metas`)}>${u.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return R!==null&&R.id>0?u.metas.editar:u.metas.nova},acoes(e){if(!(e.args.length>0))return a`
      <kk-icon-button
        name="plus"
        label=${u.metas.nova}
        @click=${()=>l(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){return q(e),V===null?e.args.length===0?Z():R===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(R):d(V,J)}};export{ee as telaMetas};