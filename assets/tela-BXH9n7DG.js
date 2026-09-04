import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r,c as i,d as a,i as o,n as s,r as c,s as l,t as u}from"./dados-DZJ-rFad.js";import{D as d,E as f,o as p,r as m}from"./index-CRLpDONK.js";var h=[],g=u,_=null,v,y=!1;async function b(){h=await l(),f()}function x(){let e=c();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,criado:null,aviso:``}}function S(e){let t=e.args.join(`/`);v===t||y||(v=t,y=!0,(async()=>{try{await b();let[t]=e.args;if(t===void 0)_=null;else if(t===`novo`)_=x();else{let e=Number.parseInt(t,10),n=h.find(t=>t.id===e);if(n===void 0){d(`caderno`);return}_={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,criado:n.criado,aviso:``}}}finally{y=!1,f()}})())}function C(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function w(r){let a=i(r.origem);return e`
    <div class="cartao cartao--parado" style=${`--cor:${a.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${a.icone}></kk-icon>${a.rotulo}
        </span>
        <span class="cartao__data">${C(r.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${r.titulo}</span>
      ${r.referencia===``?t:e`<span class="cartao__referencia">${r.referencia}</span>`}
      <p class="cartao__texto">${r.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>d(`caderno/${r.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${n.acoes.editar}
        </kk-button>
        <kk-button
          size="small"
          variant="danger"
          outline
          @click=${()=>void T(r)}
        >
          <kk-icon slot="prefix" name="trash"></kk-icon>
        </kk-button>
      </span>
    </div>
  `}async function T(e){!await p({titulo:n.caderno.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await o(e.id),m(n.caderno.excluida),await b())}function E(){let t=r(h,g);return e`
    <p class="intro">${n.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${g.origem}
        @kk-change=${e=>{g={...g,origem:e.target.value},f()}}
      >
        <kk-option value="todas">${n.caderno.todasOrigens}</kk-option>
        ${Object.entries(s).map(([t,n])=>e`<kk-option value=${t}>${n.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.caderno.buscar}
        .value=${g.busca}
        @kk-input=${e=>{g={...g,busca:e.target.value},f()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${h.length===0?n.caderno.vazio:n.caderno.semFiltro}</p>
          </div>
        `:e`<div class="cartoes cartoes--duas">${t.map(e=>w(e))}</div>`}
  `}async function D(){if(_===null)return;if(_.conteudo.trim()===``){_={..._,aviso:n.caderno.semConteudo},f();return}let e=Date.now(),t={..._.id===null?{}:{id:_.id},titulo:_.titulo.trim()||i(_.origem).rotulo,conteudo:_.conteudo.trim(),origem:_.origem,referencia:_.referencia,ref_chave:_.refChave,criado:_.criado??e,atualizado:e};await a(t),m(n.caderno.salva),d(`caderno`)}function O(r){return e`
    <div class="editor">
      <kk-select
        label=${n.caderno.origem}
        .value=${r.origem}
        @kk-change=${e=>{_={...r,origem:e.target.value},f()}}
      >
        ${Object.entries(s).map(([t,n])=>e`<kk-option value=${t}>${n.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        label=${n.caderno.titulo}
        placeholder=${n.caderno.tituloPlaceholder}
        .value=${r.titulo}
        @kk-input=${e=>{_={...r,titulo:e.target.value}}}
      ></kk-input>

      <kk-input
        label=${n.caderno.referencia}
        placeholder=${n.caderno.referenciaPlaceholder}
        .value=${r.referencia}
        @kk-input=${e=>{_={...r,referencia:e.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${n.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${n.caderno.conteudoPlaceholder}
        .value=${r.conteudo}
        @kk-input=${e=>{_={...r,conteudo:e.target.value}}}
      ></kk-textarea>

      ${r.aviso===``?t:e`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${r.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void D()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>d(`caderno`)}>${n.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var k={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return _?.id===null?n.caderno.nova:n.caderno.editar},acoes(t){if(!(t.args.length>0))return e`
      <kk-icon-button
        name="plus"
        label=${n.caderno.nova}
        @click=${()=>d(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(t){return S(t),t.args.length===0?E():_===null?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:O(_)}};export{k as telaCaderno};