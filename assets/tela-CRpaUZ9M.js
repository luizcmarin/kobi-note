import{C as e,E as t,S as n,T as r,_ as i,b as a,ct as o,et as s,it as c,ot as l,p as u,tt as d,u as f}from"./index-DkLYsJTt.js";import{AUTOMATICAS as p,CATEGORIAS as m,ajustar as h,alternarConclusao as g,alvoDoFormulario as _,alvoParaOFormulario as v,carregarFontes as y,categoriaDe as b,concluida as x,excluirMeta as S,listar as C,listarMetas as w,medida as T,percentualDaMeta as E,rotuloCategoria as D,salvarMeta as O,statusPrazo as k,sufixo as A,valorAtual as j}from"./dados-HKgDkE22.js";var M=`—`,N=[],P=null,F=[],I=`ativas`,L=``,R=null,z,B=!1,V=null,H=null,U=!1;function W(){U||(U=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`metas`&&(z=void 0)}))}async function G(){let[e,t]=await Promise.all([w(),y()]);N=e,P=t.fontes,F=t.categoriasFinanceiro,s()}function K(){return{id:0,titulo:``,item:m[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:a(),prazoFinal:e(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function q(n){W();let r=n.args.join(`/`);z===r||B||V!==null||(z=r,B=!0,(async()=>{try{await G();let[t]=n.args;if(t===void 0)R=null;else if(t===`nova`)R=K();else{let n=N.find(e=>e.id===Number.parseInt(t,10));if(n===void 0){d(`metas`);return}R={id:n.id??0,titulo:n.titulo,item:n.item,ativoId:Number(n.ativo_id)||0,ativoNome:n.ativo_nome,dataMeta:n.data_meta?a(n.data_meta):a(),prazoFinal:n.prazo_final?a(n.prazo_final):e(30),progressoAtual:n.progresso_atual,progressoAlvo:v(n.progresso_alvo,n.item),concluida:n.esta_concluida}}}catch(e){console.error(`metas: a carga falhou.`,e),V=t(e),H=n}finally{B=!1,s()}})())}function J(){let e=H;V=null,H=null,z=void 0,e!==null&&q(e),s()}function Y(e){let t=k(e,P),n=p.has(e.item),r=x(e,P);return o`
    <div class="meta" data-status=${t}>
      <div class="meta__topo">
        <span class="meta__titulo">${e.titulo}</span>
        <kk-badge variant=${r?`success`:`neutral`} pill>
          ${E(e,P)}%
        </kk-badge>
      </div>

      <span class="meta__categoria">${D(e)}</span>

      <div class="meta__barra" role="presentation">
        <div class="meta__preenchido" style=${`width:${E(e,P)}%`}></div>
      </div>

      <div class="meta__numeros">
        <span>
          ${T(j(e,P),e.item)} /
          ${T(e.progresso_alvo,e.item)}
        </span>
        <span class="meta__prazo">${c.metas.prazo(i(e.prazo_final)||M)}</span>
      </div>

      <div class="meta__acoes">
        ${n?o`
              <span class="meta__auto" title=${c.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${c.metas.automatica}
              </span>
            `:o`
              <kk-icon-button
                name="minus"
                label=${c.metas.diminuir}
                @click=${async()=>{await h(e,-1),await G()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${c.metas.aumentar}
                @click=${async()=>{await h(e,1),await G()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${r?`neutral`:`success`}
          outline
          @click=${async()=>{await g(e),await G()}}
        >
          <kk-icon slot="prefix" name=${r?`rotate`:`check`}></kk-icon>
          ${r?c.metas.reabrir:c.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${c.acoes.editar}
          @click=${()=>d(`metas/${e.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${c.metas.excluir}
          @click=${()=>void X(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function X(e){await u({titulo:c.metas.excluir,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await S(e.id),f(c.metas.excluida),await G())}function Z(){let e=C(N,P,I,L),t=N.filter(e=>!x(e,P)).length;return o`
    <p class="intro">${c.metas.resumo(t,N.length-t)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${c.metas.buscar}
        .value=${L}
        @kk-input=${e=>{L=e.target.value,s()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(e=>o`
          <button
            class="chip"
            ?data-ativo=${I===e}
            @click=${()=>{I=e,s()}}
          >
            ${c.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?o`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${N.length===0?c.metas.vazio:c.metas.semFiltro}</p>
          </div>
        `:o`<div class="metas">${e.map(e=>Y(e))}</div>`}
  `}async function Q(){if(R===null)return;if(R.titulo.trim()===``){f(c.metas.informeTitulo,`warning`);return}let e=p.has(R.item),t=Number(R.progressoAlvo)>0?Number(R.progressoAlvo):1,r=_(t,R.item),i=e?0:Math.max(0,Number(R.progressoAtual)),a=b(R.item).precisaAtivo===!0,o={...R.id>0?{id:R.id}:{},titulo:R.titulo,item:R.item,ativo_id:a?R.ativoId:0,ativo_nome:a?R.ativoNome:``,data_meta:R.dataMeta===``?Date.now():n(R.dataMeta),prazo_final:R.prazoFinal===``?Date.now():n(R.prazoFinal),progresso_atual:i,progresso_alvo:r,esta_concluida:+(R.concluida===1||!e&&i>=r)};await O(o),f(c.metas.salva),d(`metas`)}function $(e){let t=b(e.item);return o`
    <div class="formulario">
      <kk-input
        label=${c.metas.titulo}
        placeholder=${c.metas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{R={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-select
        label=${c.metas.categoria}
        help-text=${p.has(e.item)?c.metas.automaticaAjuda:``}
        .value=${e.item}
        @kk-change=${t=>{R={...e,item:t.target.value},s()}}
      >
        ${m.map(e=>o`<kk-option value=${e.chave}>${e.modulo}: ${e.ativo}</kk-option>`)}
      </kk-select>

      ${t.precisaAtivo===!0?o`
            <kk-select
              label=${c.metas.ativo}
              .value=${e.ativoId===0?``:String(e.ativoId)}
              @kk-change=${t=>{let n=Number(t.target.value)||0,r=F.find(e=>e.id===n);R={...e,ativoId:n,ativoNome:r?.nome??``},s()}}
            >
              <kk-option value="">${c.perfil.selecione}</kk-option>
              ${F.map(e=>o`<kk-option value=${String(e.id??``)}>${e.nome}</kk-option>`)}
            </kk-select>
          `:l}

      <kk-input
        type="number"
        label=${c.metas.alvo(A(e.item))}
        .value=${String(e.progressoAlvo)}
        @kk-input=${t=>{R={...e,progressoAlvo:Number(t.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${c.metas.inicio}
          .value=${e.dataMeta}
          @kk-change=${t=>{R={...e,dataMeta:t.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${c.metas.prazoFinal}
          .value=${e.prazoFinal}
          @kk-change=${t=>{R={...e,prazoFinal:t.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>d(`metas`)}>${c.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return R!==null&&R.id>0?c.metas.editar:c.metas.nova},acoes(e){if(!(e.args.length>0))return o`
      <kk-icon-button
        name="plus"
        label=${c.metas.nova}
        @click=${()=>d(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){return q(e),V===null?e.args.length===0?Z():R===null?o`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(R):r(V,J)}};export{ee as telaMetas};