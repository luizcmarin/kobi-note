import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-BCzNZFpV.js";import{c as r,r as i,s as a}from"./data-DbOIIZMP.js";import{o}from"./formato-BoZO7uRM.js";import{_ as s,a as c,b as l,c as u,f as d,g as f,h as p,i as m,l as h,m as g,n as _,o as v,p as y,r as b,s as x,t as S,u as C,v as w,x as T,y as E}from"./dados-CadJYtCy.js";import{n as D,r as O}from"./rotas-CR8kk0YZ.js";import{C as k,E as A,it as j,y as M}from"./index-DI1RkrLP.js";import{n as N}from"./carga-DmEPYWOI.js";var P=`—`,F=[],I=null,L=[],R=`ativas`,z=``,B=null;async function V(){let e=await y(),t=await x(e);F=e,I=t.fontes,L=t.categoriasFinanceiro,j()}function H(){return{id:0,titulo:``,item:_[0]?.chave??``,ativoId:0,ativoNome:``,dataMeta:i(),prazoFinal:r(30),progressoAtual:0,progressoAlvo:100,concluida:0}}var U=new N(`metas`,async e=>{await V();let[t]=e.args;if(t===void 0)B=null;else if(t===`nova`)B=H();else{let e=F.find(e=>e.id===Number.parseInt(t,10));if(e===void 0){O(`metas`);return}B={id:e.id??0,titulo:e.titulo,item:e.item,ativoId:Number(e.ativo_id)||0,ativoNome:e.ativo_nome,dataMeta:e.data_meta?i(e.data_meta):i(),prazoFinal:e.prazo_final?i(e.prazo_final):r(30),progressoAtual:e.progresso_atual,progressoAlvo:v(e.progresso_alvo,e.item),concluida:e.esta_concluida}}});D(`metas`,()=>U.esquecer());function W(t){let r=E(t,I),i=S.has(t.item),a=h(t,I);return e`
    <div class="meta" data-status=${r}>
      <div class="meta__topo">
        <span class="meta__titulo">${t.titulo}</span>
        <kk-badge variant=${a?`success`:`neutral`} pill>
          ${f(t,I)}%
        </kk-badge>
      </div>

      <span class="meta__categoria">${s(t)}</span>

      <div class="meta__barra" role="presentation">
        <div class="meta__preenchido" style=${`width:${f(t,I)}%`}></div>
      </div>

      <div class="meta__numeros">
        <span>
          ${g(T(t,I),t.item)} /
          ${g(t.progresso_alvo,t.item)}
        </span>
        <span class="meta__prazo">${n.metas.prazo(o(t.prazo_final)||P)}</span>
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
                @click=${async()=>{await b(t,-1),await V()}}
              ></kk-icon-button>
              <kk-icon-button
                name="plus"
                label=${n.metas.aumentar}
                @click=${async()=>{await b(t,1),await V()}}
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
          @click=${()=>O(`metas/${t.id??``}`)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.metas.excluir}
          @click=${()=>void G(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function G(e){await A({titulo:n.metas.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await C(e.id),M(n.metas.excluida),await V())}function K(){let t=d(F,I,R,z),r=F.filter(e=>!h(e,I)).length;return e`
    <p class="intro">${n.metas.resumo(r,F.length-r)}</p>

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.metas.buscar}
        .value=${z}
        @kk-input=${e=>{z=e.target.value,j()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      ${[`ativas`,`concluidas`,`todas`].map(t=>e`
          <button
            class="chip"
            ?data-ativo=${R===t}
            @click=${()=>{R=t,j()}}
          >
            ${n.metas.filtros[t]}
          </button>
        `)}
    </div>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="target"></kk-icon>
            <p>${F.length===0?n.metas.vazio:n.metas.semFiltro}</p>
          </div>
        `:e`<div class="metas">${t.map(e=>W(e))}</div>`}
  `}async function q(){if(B===null)return;if(B.titulo.trim()===``){M(n.metas.informeTitulo,`warning`);return}let e=S.has(B.item),t=Number(B.progressoAlvo)>0?Number(B.progressoAlvo):1,r=c(t,B.item),i=e?0:Math.max(0,Number(B.progressoAtual)),o=u(B.item).precisaAtivo===!0,s={...B.id>0?{id:B.id}:{},titulo:B.titulo,item:B.item,ativo_id:o?B.ativoId:0,ativo_nome:o?B.ativoNome:``,data_meta:B.dataMeta===``?Date.now():a(B.dataMeta),prazo_final:B.prazoFinal===``?Date.now():a(B.prazoFinal),progresso_atual:i,progresso_alvo:r,esta_concluida:+(B.concluida===1||!e&&i>=r)};await w(s),M(n.metas.salva),O(`metas`)}function J(r){let i=u(r.item);return e`
    <div class="formulario">
      <kk-input
        label=${n.metas.titulo}
        placeholder=${n.metas.tituloPlaceholder}
        .value=${r.titulo}
        @kk-input=${e=>{B={...B??r,titulo:e.target.value}}}
      ></kk-input>

      <kk-select
        label=${n.metas.categoria}
        help-text=${S.has(r.item)?n.metas.automaticaAjuda:``}
        .value=${r.item}
        @kk-change=${e=>{B={...B??r,item:e.target.value},j()}}
      >
        ${_.map(t=>e`<kk-option value=${t.chave}>${p(t.chave)}</kk-option>`)}
      </kk-select>

      ${i.precisaAtivo===!0?e`
            <kk-select
              label=${n.metas.ativo}
              .value=${r.ativoId===0?``:String(r.ativoId)}
              @kk-change=${e=>{let t=Number(e.target.value)||0,n=L.find(e=>e.id===t);B={...B??r,ativoId:t,ativoNome:n?.nome??``},j()}}
            >
              <kk-option value="">${n.perfil.selecione}</kk-option>
              ${L.map(t=>e`<kk-option value=${String(t.id??``)}>${t.nome}</kk-option>`)}
            </kk-select>
          `:t}

      <kk-input
        type="number"
        label=${n.metas.alvo(l(r.item))}
        .value=${String(r.progressoAlvo)}
        @kk-input=${e=>{B={...B??r,progressoAlvo:Number(e.target.value)}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          type="date"
          label=${n.metas.inicio}
          .value=${r.dataMeta}
          @kk-change=${e=>{B={...B??r,dataMeta:e.target.value}}}
        ></kk-input>
        <kk-input
          type="date"
          label=${n.metas.prazoFinal}
          .value=${r.prazoFinal}
          @kk-change=${e=>{B={...B??r,prazoFinal:e.target.value}}}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void q()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>O(`metas`)}>${n.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var Y={voltarPara(e){return e.args.length===0?`home`:`metas`},titulo(e){if(e.args.length!==0)return B!==null&&B.id>0?n.metas.editar:n.metas.nova},acoes(t){if(!(t.args.length>0))return e`
      <kk-icon-button
        name="plus"
        label=${n.metas.nova}
        @click=${()=>O(`metas/nova`)}
      ></kk-icon-button>
    `},conteudo(e){let t=U.falhou(e);return t===null?e.args.length===0?K():B===null?k():J(B):t}};export{Y as telaMetas};