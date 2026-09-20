import{F as e,G as t,H as n,I as r,L as i,R as a,V as o,b as s,ct as c,dt as l,g as u,ht as d,m as f,pt as p,st as m,y as h,z as g}from"./index-C99xAqzg.js";var _=[],v=e,y=null,b,x=!1,S=null,C=null;async function w(){_=await o(),m()}function T(){let e=i();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,criado:null,aviso:``}}function E(e){let t=e.args.join(`/`);b===t||x||S!==null||(b=t,x=!0,(async()=>{try{await w();let[t]=e.args;if(t===void 0)y=null;else if(t===`novo`)y=T();else{let e=Number.parseInt(t,10),n=_.find(t=>t.id===e);if(n===void 0){c(`caderno`);return}y={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,criado:n.criado,aviso:``}}}catch(t){console.error(`caderno: a carga falhou.`,t),S=s(t),C=e}finally{x=!1,m()}})())}function D(){let e=C;S=null,C=null,b=void 0,e!==null&&E(e),m()}function O(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function k(e){let t=n(e.origem);return d`
    <div class="cartao cartao--parado" style=${`--cor:${t.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${t.icone}></kk-icon>${t.rotulo}
        </span>
        <span class="cartao__data">${O(e.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${e.titulo}</span>
      ${e.referencia===``?p:d`<span class="cartao__referencia">${e.referencia}</span>`}
      <p class="cartao__texto">${e.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>c(`caderno/${e.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${l.acoes.editar}
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
  `}async function A(e){await u({titulo:l.caderno.excluir,texto:l.acervo.excluirTexto,rotuloConfirmar:l.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await a(e.id),f(l.caderno.excluida),await w())}function j(){let e=g(_,v);return d`
    <p class="intro">${l.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${v.origem}
        @kk-change=${e=>{v={...v,origem:e.target.value},m()}}
      >
        <kk-option value="todas">${l.caderno.todasOrigens}</kk-option>
        ${Object.entries(r).map(([e,t])=>d`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${l.caderno.buscar}
        .value=${v.busca}
        @kk-input=${e=>{v={...v,busca:e.target.value},m()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?d`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${_.length===0?l.caderno.vazio:l.caderno.semFiltro}</p>
          </div>
        `:d`<div class="cartoes cartoes--duas">${e.map(e=>k(e))}</div>`}
  `}async function M(){if(y===null)return;if(y.conteudo.trim()===``){y={...y,aviso:l.caderno.semConteudo},m();return}let e=Date.now(),r={...y.id===null?{}:{id:y.id},titulo:y.titulo.trim()||n(y.origem).rotulo,conteudo:y.conteudo.trim(),origem:y.origem,referencia:y.referencia,ref_chave:y.refChave,criado:y.criado??e,atualizado:e};await t(r),f(l.caderno.salva),c(`caderno`)}function N(e){return d`
    <div class="editor">
      <kk-select
        label=${l.caderno.origem}
        .value=${e.origem}
        @kk-change=${t=>{y={...e,origem:t.target.value},m()}}
      >
        ${Object.entries(r).map(([e,t])=>d`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        label=${l.caderno.titulo}
        placeholder=${l.caderno.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{y={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${l.caderno.referencia}
        placeholder=${l.caderno.referenciaPlaceholder}
        .value=${e.referencia}
        @kk-input=${t=>{y={...e,referencia:t.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${l.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${l.caderno.conteudoPlaceholder}
        .value=${e.conteudo}
        @kk-input=${t=>{y={...e,conteudo:t.target.value}}}
      ></kk-textarea>

      ${e.aviso===``?p:d`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${e.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void M()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${l.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>c(`caderno`)}>${l.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var P={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return y?.id===null?l.caderno.nova:l.caderno.editar},acoes(e){if(!(e.args.length>0))return d`
      <kk-icon-button
        name="plus"
        label=${l.caderno.nova}
        @click=${()=>c(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){return E(e),S===null?e.args.length===0?j():y===null?d`<div class="carregando"><kk-spinner></kk-spinner></div>`:N(y):h(S,D)}};export{P as telaCaderno};