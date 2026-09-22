import{Z as e,b as t,ct as n,dt as r,g as i,ht as a,it as o,m as s,pt as c,rt as l,st as u,tt as d,y as f}from"./index-BfZj77hg.js";import{AUTOMATICAS as p,CATEGORIAS as m,ajustar as h,alternarConclusao as g,alvoDoFormulario as _,alvoParaOFormulario as v,carregarFontes as y,categoriaDe as b,concluida as x,excluirMeta as S,listar as C,listarMetas as w,medida as T,percentualDaMeta as E,rotuloCategoria as D,salvarMeta as O,statusPrazo as k,sufixo as A,valorAtual as j}from"./dados-CdAOFfRh.js";var M=`—`,N=[],P=null,F=[],I=`ativas`,L=``,R=null,z,B=!1,V=null,H=null,U=!1;function W(){U||(U=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`metas`&&(z=void 0)}))}async function G(){let e=await w(),t=await y(e);N=e,P=t.fontes,F=t.categoriasFinanceiro,u()}function K(){return{id:0,titulo:``,item:m[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:d(),prazoFinal:o(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function q(e){W();let r=e.args.join(`/`);z===r||B||V!==null||(z=r,B=!0,(async()=>{try{await G();let[t]=e.args;if(t===void 0)R=null;else if(t===`nova`)R=K();else{let e=N.find(e=>e.id===Number.parseInt(t,10));if(e===void 0){n(`metas`);return}R={id:e.id??0,titulo:e.titulo,item:e.item,ativoId:Number(e.ativo_id)||0,ativoNome:e.ativo_nome,dataMeta:e.data_meta?d(e.data_meta):d(),prazoFinal:e.prazo_final?d(e.prazo_final):o(30),progressoAtual:e.progresso_atual,progressoAlvo:v(e.progresso_alvo,e.item),concluida:e.esta_concluida}}}catch(n){console.error(`metas: a carga falhou.`,n),V=t(n),H=e}finally{B=!1,u()}})())}function J(){let e=H;V=null,H=null,z=void 0,e!==null&&q(e),u()}function Y(t){let i=k(t,P),o=p.has(t.item),s=x(t,P);return a`
    <div class="meta" data-status=${i}>
      <div class="meta__topo">
        <span class="meta__titulo">${t.titulo}</span>
        <kk-badge variant=${s?`success`:`neutral`} pill>
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
        <span class="meta__prazo">${r.metas.prazo(e(t.prazo_final)||M)}</span>
      </div>

      <div class="meta__acoes">
        ${o?a`
              <span class="meta__auto" title=${r.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${r.metas.automatica}
              </span>
            `:a`
              <kk-icon-button
                name="minus"
                label=${r.metas.diminuir}
                @click=${async()=>{await h(t,-1),await G()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${r.metas.aumentar}
                @click=${async()=>{await h(t,1),await G()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${s?`neutral`:`success`}
          outline
          @click=${async()=>{await g(t),await G()}}
        >
          <kk-icon slot="prefix" name=${s?`rotate`:`check`}></kk-icon>
          ${s?r.metas.reabrir:r.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${r.acoes.editar}
          @click=${()=>n(`metas/${t.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${r.metas.excluir}
          @click=${()=>void X(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function X(e){await i({titulo:r.metas.excluir,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await S(e.id),s(r.metas.excluida),await G())}function Z(){let e=C(N,P,I,L),t=N.filter(e=>!x(e,P)).length;return a`
    <p class="intro">${r.metas.resumo(t,N.length-t)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${r.metas.buscar}
        .value=${L}
        @kk-input=${e=>{L=e.target.value,u()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(e=>a`
          <button
            class="chip"
            ?data-ativo=${I===e}
            @click=${()=>{I=e,u()}}
          >
            ${r.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${N.length===0?r.metas.vazio:r.metas.semFiltro}</p>
          </div>
        `:a`<div class="metas">${e.map(e=>Y(e))}</div>`}
  `}async function Q(){if(R===null)return;if(R.titulo.trim()===``){s(r.metas.informeTitulo,`warning`);return}let e=p.has(R.item),t=Number(R.progressoAlvo)>0?Number(R.progressoAlvo):1,i=_(t,R.item),a=e?0:Math.max(0,Number(R.progressoAtual)),o=b(R.item).precisaAtivo===!0,c={...R.id>0?{id:R.id}:{},titulo:R.titulo,item:R.item,ativo_id:o?R.ativoId:0,ativo_nome:o?R.ativoNome:``,data_meta:R.dataMeta===``?Date.now():l(R.dataMeta),prazo_final:R.prazoFinal===``?Date.now():l(R.prazoFinal),progresso_atual:a,progresso_alvo:i,esta_concluida:+(R.concluida===1||!e&&a>=i)};await O(c),s(r.metas.salva),n(`metas`)}function $(e){let t=b(e.item);return a`
    <div class="formulario">
      <kk-input
        label=${r.metas.titulo}
        placeholder=${r.metas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{R={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-select
        label=${r.metas.categoria}
        help-text=${p.has(e.item)?r.metas.automaticaAjuda:``}
        .value=${e.item}
        @kk-change=${t=>{R={...e,item:t.target.value},u()}}
      >
        ${m.map(e=>a`<kk-option value=${e.chave}>${e.modulo}: ${e.ativo}</kk-option>`)}
      </kk-select>

      ${t.precisaAtivo===!0?a`
            <kk-select
              label=${r.metas.ativo}
              .value=${e.ativoId===0?``:String(e.ativoId)}
              @kk-change=${t=>{let n=Number(t.target.value)||0,r=F.find(e=>e.id===n);R={...e,ativoId:n,ativoNome:r?.nome??``},u()}}
            >
              <kk-option value="">${r.perfil.selecione}</kk-option>
              ${F.map(e=>a`<kk-option value=${String(e.id??``)}>${e.nome}</kk-option>`)}
            </kk-select>
          `:c}

      <kk-input
        type="number"
        label=${r.metas.alvo(A(e.item))}
        .value=${String(e.progressoAlvo)}
        @kk-input=${t=>{R={...e,progressoAlvo:Number(t.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${r.metas.inicio}
          .value=${e.dataMeta}
          @kk-change=${t=>{R={...e,dataMeta:t.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${r.metas.prazoFinal}
          .value=${e.prazoFinal}
          @kk-change=${t=>{R={...e,prazoFinal:t.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>n(`metas`)}>${r.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return R!==null&&R.id>0?r.metas.editar:r.metas.nova},acoes(e){if(!(e.args.length>0))return a`
      <kk-icon-button
        name="plus"
        label=${r.metas.nova}
        @click=${()=>n(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){return q(e),V===null?e.args.length===0?Z():R===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(R):f(V,J)}};export{ee as telaMetas};