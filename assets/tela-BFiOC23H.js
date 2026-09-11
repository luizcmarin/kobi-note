import{B as e,L as t,R as n,S as r,U as i,V as a,W as o,at as s,ct as c,ft as l,h as u,it as d,q as f,u as p,ut as m,x as h,z as g}from"./index-BBOYxO_i.js";var _=[],v=t,y=null,b,x=!1,S=null,C=null;async function w(){_=await i(),d()}function T(){let e=g();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,criado:null,aviso:``}}function E(e){let t=e.args.join(`/`);b===t||x||S!==null||(b=t,x=!0,(async()=>{try{await w();let[t]=e.args;if(t===void 0)y=null;else if(t===`novo`)y=T();else{let e=Number.parseInt(t,10),n=_.find(t=>t.id===e);if(n===void 0){s(`caderno`);return}y={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,criado:n.criado,aviso:``}}}catch(t){console.error(`caderno: a carga falhou.`,t),S=r(t),C=e}finally{x=!1,d()}})())}function D(){let e=C;S=null,C=null,b=void 0,e!==null&&E(e),d()}function O(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function k(e){let t=o(e.origem);return l`
    <div class="cartao cartao--parado" style=${`--cor:${t.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${t.icone}></kk-icon>${t.rotulo}
        </span>
        <span class="cartao__data">${O(e.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${e.titulo}</span>
      ${e.referencia===``?m:l`<span class="cartao__referencia">${e.referencia}</span>`}
      <p class="cartao__texto">${e.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>s(`caderno/${e.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${c.acoes.editar}
        </kk-button>
        <kk-button
          size="small"
          variant="danger"
          outline
          @click=${()=>void A(e)}
        >
          <kk-icon slot="prefix" name="trash"></kk-icon>
        </kk-button>
      </span>
    </div>
  `}async function A(t){await u({titulo:c.caderno.excluir,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&t.id!==void 0&&(await e(t.id),p(c.caderno.excluida),await w())}function j(){let e=a(_,v);return l`
    <p class="intro">${c.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${v.origem}
        @kk-change=${e=>{v={...v,origem:e.target.value},d()}}
      >
        <kk-option value="todas">${c.caderno.todasOrigens}</kk-option>
        ${Object.entries(n).map(([e,t])=>l`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${c.caderno.buscar}
        .value=${v.busca}
        @kk-input=${e=>{v={...v,busca:e.target.value},d()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?l`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${_.length===0?c.caderno.vazio:c.caderno.semFiltro}</p>
          </div>
        `:l`<div class="cartoes cartoes--duas">${e.map(e=>k(e))}</div>`}
  `}async function M(){if(y===null)return;if(y.conteudo.trim()===``){y={...y,aviso:c.caderno.semConteudo},d();return}let e=Date.now(),t={...y.id===null?{}:{id:y.id},titulo:y.titulo.trim()||o(y.origem).rotulo,conteudo:y.conteudo.trim(),origem:y.origem,referencia:y.referencia,ref_chave:y.refChave,criado:y.criado??e,atualizado:e};await f(t),p(c.caderno.salva),s(`caderno`)}function N(e){return l`
    <div class="editor">
      <kk-select
        label=${c.caderno.origem}
        .value=${e.origem}
        @kk-change=${t=>{y={...e,origem:t.target.value},d()}}
      >
        ${Object.entries(n).map(([e,t])=>l`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        label=${c.caderno.titulo}
        placeholder=${c.caderno.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{y={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${c.caderno.referencia}
        placeholder=${c.caderno.referenciaPlaceholder}
        .value=${e.referencia}
        @kk-input=${t=>{y={...e,referencia:t.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${c.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${c.caderno.conteudoPlaceholder}
        .value=${e.conteudo}
        @kk-input=${t=>{y={...e,conteudo:t.target.value}}}
      ></kk-textarea>

      ${e.aviso===``?m:l`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${e.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void M()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>s(`caderno`)}>${c.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var P={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return y?.id===null?c.caderno.nova:c.caderno.editar},acoes(e){if(!(e.args.length>0))return l`
      <kk-icon-button
        name="plus"
        label=${c.caderno.nova}
        @click=${()=>s(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){return E(e),S===null?e.args.length===0?j():y===null?l`<div class="carregando"><kk-spinner></kk-spinner></div>`:N(y):h(S,D)}};export{P as telaCaderno};