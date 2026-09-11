import{$ as e,S as t,X as n,at as r,ct as i,ft as a,h as o,it as s,nt as c,tt as l,u,ut as d,x as f}from"./index-BBOYxO_i.js";import{AUTOMATICAS as p,CATEGORIAS as m,ajustar as h,alternarConclusao as g,alvoDoFormulario as _,alvoParaOFormulario as v,carregarFontes as y,categoriaDe as b,concluida as x,excluirMeta as S,listar as C,listarMetas as w,medida as T,percentualDaMeta as E,rotuloCategoria as D,salvarMeta as O,statusPrazo as k,sufixo as A,valorAtual as j}from"./dados-BL0H4DC9.js";var M=`—`,N=[],P=null,F=[],I=`ativas`,L=``,R=null,z,B=!1,V=null,H=null,U=!1;function W(){U||(U=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`metas`&&(z=void 0)}))}async function G(){let[e,t]=await Promise.all([w(),y()]);N=e,P=t.fontes,F=t.categoriasFinanceiro,s()}function K(){return{id:0,titulo:``,item:m[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:e(),prazoFinal:c(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function q(n){W();let i=n.args.join(`/`);z===i||B||V!==null||(z=i,B=!0,(async()=>{try{await G();let[t]=n.args;if(t===void 0)R=null;else if(t===`nova`)R=K();else{let n=N.find(e=>e.id===Number.parseInt(t,10));if(n===void 0){r(`metas`);return}R={id:n.id??0,titulo:n.titulo,item:n.item,ativoId:Number(n.ativo_id)||0,ativoNome:n.ativo_nome,dataMeta:n.data_meta?e(n.data_meta):e(),prazoFinal:n.prazo_final?e(n.prazo_final):c(30),progressoAtual:n.progresso_atual,progressoAlvo:v(n.progresso_alvo,n.item),concluida:n.esta_concluida}}}catch(e){console.error(`metas: a carga falhou.`,e),V=t(e),H=n}finally{B=!1,s()}})())}function J(){let e=H;V=null,H=null,z=void 0,e!==null&&q(e),s()}function Y(e){let t=k(e,P),o=p.has(e.item),s=x(e,P);return a`
    <div class="meta" data-status=${t}>
      <div class="meta__topo">
        <span class="meta__titulo">${e.titulo}</span>
        <kk-badge variant=${s?`success`:`neutral`} pill>
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
        <span class="meta__prazo">${i.metas.prazo(n(e.prazo_final)||M)}</span>
      </div>

      <div class="meta__acoes">
        ${o?a`
              <span class="meta__auto" title=${i.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${i.metas.automatica}
              </span>
            `:a`
              <kk-icon-button
                name="minus"
                label=${i.metas.diminuir}
                @click=${async()=>{await h(e,-1),await G()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${i.metas.aumentar}
                @click=${async()=>{await h(e,1),await G()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${s?`neutral`:`success`}
          outline
          @click=${async()=>{await g(e),await G()}}
        >
          <kk-icon slot="prefix" name=${s?`rotate`:`check`}></kk-icon>
          ${s?i.metas.reabrir:i.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${i.acoes.editar}
          @click=${()=>r(`metas/${e.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${i.metas.excluir}
          @click=${()=>void X(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function X(e){await o({titulo:i.metas.excluir,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await S(e.id),u(i.metas.excluida),await G())}function Z(){let e=C(N,P,I,L),t=N.filter(e=>!x(e,P)).length;return a`
    <p class="intro">${i.metas.resumo(t,N.length-t)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${i.metas.buscar}
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
            ${i.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${N.length===0?i.metas.vazio:i.metas.semFiltro}</p>
          </div>
        `:a`<div class="metas">${e.map(e=>Y(e))}</div>`}
  `}async function Q(){if(R===null)return;if(R.titulo.trim()===``){u(i.metas.informeTitulo,`warning`);return}let e=p.has(R.item),t=Number(R.progressoAlvo)>0?Number(R.progressoAlvo):1,n=_(t,R.item),a=e?0:Math.max(0,Number(R.progressoAtual)),o=b(R.item).precisaAtivo===!0,s={...R.id>0?{id:R.id}:{},titulo:R.titulo,item:R.item,ativo_id:o?R.ativoId:0,ativo_nome:o?R.ativoNome:``,data_meta:R.dataMeta===``?Date.now():l(R.dataMeta),prazo_final:R.prazoFinal===``?Date.now():l(R.prazoFinal),progresso_atual:a,progresso_alvo:n,esta_concluida:+(R.concluida===1||!e&&a>=n)};await O(s),u(i.metas.salva),r(`metas`)}function $(e){let t=b(e.item);return a`
    <div class="formulario">
      <kk-input
        label=${i.metas.titulo}
        placeholder=${i.metas.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{R={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-select
        label=${i.metas.categoria}
        help-text=${p.has(e.item)?i.metas.automaticaAjuda:``}
        .value=${e.item}
        @kk-change=${t=>{R={...e,item:t.target.value},s()}}
      >
        ${m.map(e=>a`<kk-option value=${e.chave}>${e.modulo}: ${e.ativo}</kk-option>`)}
      </kk-select>

      ${t.precisaAtivo===!0?a`
            <kk-select
              label=${i.metas.ativo}
              .value=${e.ativoId===0?``:String(e.ativoId)}
              @kk-change=${t=>{let n=Number(t.target.value)||0,r=F.find(e=>e.id===n);R={...e,ativoId:n,ativoNome:r?.nome??``},s()}}
            >
              <kk-option value="">${i.perfil.selecione}</kk-option>
              ${F.map(e=>a`<kk-option value=${String(e.id??``)}>${e.nome}</kk-option>`)}
            </kk-select>
          `:d}

      <kk-input
        type="number"
        label=${i.metas.alvo(A(e.item))}
        .value=${String(e.progressoAlvo)}
        @kk-input=${t=>{R={...e,progressoAlvo:Number(t.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${i.metas.inicio}
          .value=${e.dataMeta}
          @kk-change=${t=>{R={...e,dataMeta:t.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${i.metas.prazoFinal}
          .value=${e.prazoFinal}
          @kk-change=${t=>{R={...e,prazoFinal:t.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>r(`metas`)}>${i.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return R!==null&&R.id>0?i.metas.editar:i.metas.nova},acoes(e){if(!(e.args.length>0))return a`
      <kk-icon-button
        name="plus"
        label=${i.metas.nova}
        @click=${()=>r(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){return q(e),V===null?e.args.length===0?Z():R===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:$(R):f(V,J)}};export{ee as telaMetas};