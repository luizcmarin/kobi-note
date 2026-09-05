import{$ as e,Q as t,S as n,at as r,g as i,nt as a,p as o,rt as s,u as c,x as l,y as u}from"./index-BIyMCMf-.js";import{AUTOMATICAS as d,CATEGORIAS as f,ajustar as p,alternarConclusao as m,alvoDoFormulario as h,alvoParaOFormulario as g,carregarFontes as _,categoriaDe as v,concluida as y,excluirMeta as b,listar as x,listarMetas as S,medida as C,percentualDaMeta as w,rotuloCategoria as T,salvarMeta as E,statusPrazo as D,sufixo as O,valorAtual as k}from"./dados-5z0A_ALR.js";var A=`—`,j=[],M=null,N=[],P=`ativas`,F=``,I=null,L,R=!1,z=!1;function B(){z||(z=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`metas`&&(L=void 0)}))}async function V(){let[e,n]=await Promise.all([S(),_()]);j=e,M=n.fontes,N=n.categoriasFinanceiro,t()}function H(){return{id:0,titulo:``,item:f[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:u(),prazoFinal:n(30),progressoAtual:0,progressoAlvo:100,concluida:0}}function U(r){B();let i=r.args.join(`/`);L===i||R||(L=i,R=!0,(async()=>{try{await V();let[t]=r.args;if(t===void 0)I=null;else if(t===`nova`)I=H();else{let r=j.find(e=>e.id===Number.parseInt(t,10));if(r===void 0){e(`metas`);return}I={id:r.id??0,titulo:r.titulo,item:r.item,ativoId:Number(r.ativo_id)||0,ativoNome:r.ativo_nome,dataMeta:r.data_meta?u(r.data_meta):u(),prazoFinal:r.prazo_final?u(r.prazo_final):n(30),progressoAtual:r.progresso_atual,progressoAlvo:g(r.progresso_alvo,r.item),concluida:r.esta_concluida}}}finally{R=!1,t()}})())}function W(t){let n=D(t,M),o=d.has(t.item),s=y(t,M);return r`
    <div class="meta" data-status=${n}>
      <div class="meta__topo">
        <span class="meta__titulo">${t.titulo}</span>
        <kk-badge variant=${s?`success`:`neutral`} pill>
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
        <span class="meta__prazo">${a.metas.prazo(i(t.prazo_final)||A)}</span>
      </div>

      <div class="meta__acoes">
        ${o?r`
              <span class="meta__auto" title=${a.metas.automaticaAjuda}>
                <kk-icon name="refresh"></kk-icon>${a.metas.automatica}
              </span>
            `:r`
              <kk-icon-button
                name="minus"
                label=${a.metas.diminuir}
                @click=${async()=>{await p(t,-1),await V()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${a.metas.aumentar}
                @click=${async()=>{await p(t,1),await V()}}
              ></kk-icon-button>
            `}

        <kk-button
          size="small"
          variant=${s?`neutral`:`success`}
          outline
          @click=${async()=>{await m(t),await V()}}
        >
          <kk-icon slot="prefix" name=${s?`rotate`:`check`}></kk-icon>
          ${s?a.metas.reabrir:a.metas.concluir}
        </kk-button>

        <kk-icon-button
          name="pencil"
          label=${a.acoes.editar}
          @click=${()=>e(`metas/${t.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${a.metas.excluir}
          @click=${()=>void G(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function G(e){await o({titulo:a.metas.excluir,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await b(e.id),c(a.metas.excluida),await V())}function K(){let e=x(j,M,P,F),n=j.filter(e=>!y(e,M)).length;return r`
    <p class="intro">${a.metas.resumo(n,j.length-n)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${a.metas.buscar}
        .value=${F}
        @kk-input=${e=>{F=e.target.value,t()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(e=>r`
          <button
            class="chip"
            ?data-ativo=${P===e}
            @click=${()=>{P=e,t()}}
          >
            ${a.metas.filtros[e]}
          </button>
        `)}
    </div>

    ${e.length===0?r`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${j.length===0?a.metas.vazio:a.metas.semFiltro}</p>
          </div>
        `:r`<div class="metas">${e.map(e=>W(e))}</div>`}
  `}async function q(){if(I===null)return;if(I.titulo.trim()===``){c(a.metas.informeTitulo,`warning`);return}let t=d.has(I.item),n=Number(I.progressoAlvo)>0?Number(I.progressoAlvo):1,r=h(n,I.item),i=t?0:Math.max(0,Number(I.progressoAtual)),o=v(I.item).precisaAtivo===!0,s={...I.id>0?{id:I.id}:{},titulo:I.titulo,item:I.item,ativo_id:o?I.ativoId:0,ativo_nome:o?I.ativoNome:``,data_meta:I.dataMeta===``?Date.now():l(I.dataMeta),prazo_final:I.prazoFinal===``?Date.now():l(I.prazoFinal),progresso_atual:i,progresso_alvo:r,esta_concluida:+(I.concluida===1||!t&&i>=r)};await E(s),c(a.metas.salva),e(`metas`)}function J(n){let i=v(n.item);return r`
    <div class="formulario">
      <kk-input
        label=${a.metas.titulo}
        placeholder=${a.metas.tituloPlaceholder}
        .value=${n.titulo}
        @kk-input=${e=>{I={...n,titulo:e.target.value}}}
      ></kk-input>

      <kk-select
        label=${a.metas.categoria}
        help-text=${d.has(n.item)?a.metas.automaticaAjuda:``}
        .value=${n.item}
        @kk-change=${e=>{I={...n,item:e.target.value},t()}}
      >
        ${f.map(e=>r`<kk-option value=${e.chave}>${e.modulo}: ${e.ativo}</kk-option>`)}
      </kk-select>

      ${i.precisaAtivo===!0?r`
            <kk-select
              label=${a.metas.ativo}
              .value=${n.ativoId===0?``:String(n.ativoId)}
              @kk-change=${e=>{let r=Number(e.target.value)||0,i=N.find(e=>e.id===r);I={...n,ativoId:r,ativoNome:i?.nome??``},t()}}
            >
              <kk-option value="">${a.perfil.selecione}</kk-option>
              ${N.map(e=>r`<kk-option value=${String(e.id??``)}>${e.nome}</kk-option>`)}
            </kk-select>
          `:s}

      <kk-input
        type="number"
        label=${a.metas.alvo(O(n.item))}
        .value=${String(n.progressoAlvo)}
        @kk-input=${e=>{I={...n,progressoAlvo:Number(e.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${a.metas.inicio}
          .value=${n.dataMeta}
          @kk-change=${e=>{I={...n,dataMeta:e.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${a.metas.prazoFinal}
          .value=${n.prazoFinal}
          @kk-change=${e=>{I={...n,prazoFinal:e.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${a.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>e(`metas`)}>${a.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var Y={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return I!==null&&I.id>0?a.metas.editar:a.metas.nova},acoes(t){if(!(t.args.length>0))return r`
      <kk-icon-button
        name="plus"
        label=${a.metas.nova}
        @click=${()=>e(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){return U(e),e.args.length===0?K():I===null?r`<div class="carregando"><kk-spinner></kk-spinner></div>`:J(I)}};export{Y as telaMetas};