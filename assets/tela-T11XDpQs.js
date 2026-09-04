import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{i as r,o as i,s as a,t as o}from"./data-DRe9t3tD.js";import{D as s,E as c,o as l,r as u}from"./index-CRLpDONK.js";import{AUTOMATICAS as d,CATEGORIAS as f,ajustar as p,alternarConclusao as m,alvoDoFormulario as h,alvoParaOFormulario as g,carregarFontes as _,categoriaDe as v,concluida as y,excluirMeta as b,listar as x,listarMetas as S,medida as C,percentualDaMeta as w,rotuloCategoria as T,salvarMeta as E,statusPrazo as D,sufixo as O,valorAtual as k}from"./dados-9fqpPitU.js";var A=`—`,j=[],M=null,N=[],P=`ativas`,F=``,I=null,L,R=!1,z=!1;function B(){z||(z=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`metas`&&(L=void 0)}))}async function V(){let[e,t]=await Promise.all([S(),_()]);j=e,M=t.fontes,N=t.categoriasFinanceiro,c()}function H(){return{id:0,titulo:``,item:f[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:r(),prazoFinal:a(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function U(e){B();let t=e.args.join(`/`);L===t||R||(L=t,R=!0,(async()=>{try{await V();let[t]=e.args;if(t===void 0)I=null;else if(t===`nova`)I=H();else{let e=j.find(e=>e.id===Number.parseInt(t,10));if(e===void 0){s(`metas`);return}I={id:e.id??0,titulo:e.titulo,item:e.item,ativoId:Number(e.ativo_id)||0,ativoNome:e.ativo_nome,dataMeta:e.data_meta?r(e.data_meta):r(),prazoFinal:e.prazo_final?r(e.prazo_final):a(30),progressoAtual:e.progresso_atual,progressoAlvo:g(e.progresso_alvo,e.item),concluida:e.esta_concluida}}}finally{R=!1,c()}})())}function W(t){let r=D(t,M),i=d.has(t.item),a=y(t,M);return e`
    <div class="meta" data-status=${r}>
      <div class="meta__topo">
        <span class="meta__titulo">${t.titulo}</span>
        <kk-badge variant=${a?`success`:`neutral`} pill>
          ${w(t,M)}%
        </kk-badge>
      </div>

      <span class="meta__categoria">${T(t)}</span>

      <div class="meta__barra" role="presentation">
        <div class="meta__preenchido" style=${`width:${w(t,M)}%`}></div>
      </div>

      <div class="meta__numeros">
        <span>
          ${C(k(t,M),t.item)} /
          ${C(t.progresso_alvo,t.item)}
        </span>
        <span class="meta__prazo">${n.metas.prazo(o(t.prazo_final)||A)}</span>
      </div>

      <div class="meta__acoes">
        ${i?e`
              <span class="meta__auto" title=${n.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${n.metas.automatica}
              </span>
            `:e`
              <kk-icon-button
                name="minus"
                label=${n.metas.diminuir}
                @click=${async()=>{await p(t,-1),await V()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${n.metas.aumentar}
                @click=${async()=>{await p(t,1),await V()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${a?`neutral`:`success`}
          outline
          @click=${async()=>{await m(t),await V()}}
        >
          <kk-icon slot="prefix" name=${a?`rotate`:`check`}></kk-icon>
          ${a?n.metas.reabrir:n.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${n.acoes.editar}
          @click=${()=>s(`metas/${t.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.metas.excluir}
          @click=${()=>void G(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function G(e){!await l({titulo:n.metas.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await b(e.id),u(n.metas.excluida),await V())}function K(){let t=x(j,M,P,F),r=j.filter(e=>!y(e,M)).length;return e`
    <p class="intro">${n.metas.resumo(r,j.length-r)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.metas.buscar}
        .value=${F}
        @kk-input=${e=>{F=e.target.value,c()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(t=>e`
          <button
            class="chip"
            ?data-ativo=${P===t}
            @click=${()=>{P=t,c()}}
          >
            ${n.metas.filtros[t]}
          </button>
        `)}
    </div>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${j.length===0?n.metas.vazio:n.metas.semFiltro}</p>
          </div>
        `:e`<div class="metas">${t.map(e=>W(e))}</div>`}
  `}async function q(){if(I===null)return;if(I.titulo.trim()===``){u(n.metas.informeTitulo,`warning`);return}let e=d.has(I.item),t=Number(I.progressoAlvo)>0?Number(I.progressoAlvo):1,r=h(t,I.item),a=e?0:Math.max(0,Number(I.progressoAtual)),o=v(I.item).precisaAtivo===!0,c={...I.id>0?{id:I.id}:{},titulo:I.titulo,item:I.item,ativo_id:o?I.ativoId:0,ativo_nome:o?I.ativoNome:``,data_meta:I.dataMeta===``?Date.now():i(I.dataMeta),prazo_final:I.prazoFinal===``?Date.now():i(I.prazoFinal),progresso_atual:a,progresso_alvo:r,esta_concluida:+(I.concluida===1||!e&&a>=r)};await E(c),u(n.metas.salva),s(`metas`)}function J(r){let i=v(r.item);return e`
    <div class="formulario">
      <kk-input
        label=${n.metas.titulo}
        placeholder=${n.metas.tituloPlaceholder}
        .value=${r.titulo}
        @kk-input=${e=>{I={...r,titulo:e.target.value}}}
      ></kk-input>

      <kk-select
        label=${n.metas.categoria}
        help-text=${d.has(r.item)?n.metas.automaticaAjuda:``}
        .value=${r.item}
        @kk-change=${e=>{I={...r,item:e.target.value},c()}}
      >
        ${f.map(t=>e`<kk-option value=${t.chave}>${t.modulo}: ${t.ativo}</kk-option>`)}
      </kk-select>

      ${i.precisaAtivo===!0?e`
            <kk-select
              label=${n.metas.ativo}
              .value=${r.ativoId===0?``:String(r.ativoId)}
              @kk-change=${e=>{let t=Number(e.target.value)||0,n=N.find(e=>e.id===t);I={...r,ativoId:t,ativoNome:n?.nome??``},c()}}
            >
              <kk-option value="">${n.perfil.selecione}</kk-option>
              ${N.map(t=>e`<kk-option value=${String(t.id??``)}>${t.nome}</kk-option>`)}
            </kk-select>
          `:t}

      <kk-input
        type="number"
        label=${n.metas.alvo(O(r.item))}
        .value=${String(r.progressoAlvo)}
        @kk-input=${e=>{I={...r,progressoAlvo:Number(e.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${n.metas.inicio}
          .value=${r.dataMeta}
          @kk-change=${e=>{I={...r,dataMeta:e.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${n.metas.prazoFinal}
          .value=${r.prazoFinal}
          @kk-change=${e=>{I={...r,prazoFinal:e.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>s(`metas`)}>${n.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var Y={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return I!==null&&I.id>0?n.metas.editar:n.metas.nova},acoes(t){if(!(t.args.length>0))return e`
      <kk-icon-button
        name="plus"
        label=${n.metas.nova}
        @click=${()=>s(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(t){return U(t),t.args.length===0?K():I===null?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:J(I)}};export{Y as telaMetas};