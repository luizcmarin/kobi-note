import{B as e,F as t,I as n,L as r,P as i,R as a,V as o,W as s,ct as c,et as l,g as u,it as d,m as f,ot as p,tt as m,v as h,y as g}from"./index-CFqbq_HS.js";var _=[],v=i,y=null,b,x=!1,S=null,C=null;async function w(){_=await e(),l()}function T(){let e=n();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,criado:null,aviso:``}}function E(e){let t=e.args.join(`/`);b===t||x||S!==null||(b=t,x=!0,(async()=>{try{await w();let[t]=e.args;if(t===void 0)y=null;else if(t===`novo`)y=T();else{let e=Number.parseInt(t,10),n=_.find(t=>t.id===e);if(n===void 0){m(`caderno`);return}y={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,criado:n.criado,aviso:``}}}catch(t){console.error(`caderno: a carga falhou.`,t),S=g(t),C=e}finally{x=!1,l()}})())}function D(){let e=C;S=null,C=null,b=void 0,e!==null&&E(e),l()}function O(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function k(e){let t=o(e.origem);return c`
    <div class="cartao cartao--parado" style=${`--cor:${t.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${t.icone}></kk-icon>${t.rotulo}
        </span>
        <span class="cartao__data">${O(e.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${e.titulo}</span>
      ${e.referencia===``?p:c`<span class="cartao__referencia">${e.referencia}</span>`}
      <p class="cartao__texto">${e.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>m(`caderno/${e.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${d.acoes.editar}
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
  `}async function A(e){await u({titulo:d.caderno.excluir,texto:d.acervo.excluirTexto,rotuloConfirmar:d.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await r(e.id),f(d.caderno.excluida),await w())}function j(){let e=a(_,v);return c`
    <p class="intro">${d.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${v.origem}
        @kk-change=${e=>{v={...v,origem:e.target.value},l()}}
      >
        <kk-option value="todas">${d.caderno.todasOrigens}</kk-option>
        ${Object.entries(t).map(([e,t])=>c`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${d.caderno.buscar}
        .value=${v.busca}
        @kk-input=${e=>{v={...v,busca:e.target.value},l()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?c`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${_.length===0?d.caderno.vazio:d.caderno.semFiltro}</p>
          </div>
        `:c`<div class="cartoes cartoes--duas">${e.map(e=>k(e))}</div>`}
  `}async function M(){if(y===null)return;if(y.conteudo.trim()===``){y={...y,aviso:d.caderno.semConteudo},l();return}let e=Date.now(),t={...y.id===null?{}:{id:y.id},titulo:y.titulo.trim()||o(y.origem).rotulo,conteudo:y.conteudo.trim(),origem:y.origem,referencia:y.referencia,ref_chave:y.refChave,criado:y.criado??e,atualizado:e};await s(t),f(d.caderno.salva),m(`caderno`)}function N(e){return c`
    <div class="editor">
      <kk-select
        label=${d.caderno.origem}
        .value=${e.origem}
        @kk-change=${t=>{y={...e,origem:t.target.value},l()}}
      >
        ${Object.entries(t).map(([e,t])=>c`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        label=${d.caderno.titulo}
        placeholder=${d.caderno.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{y={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${d.caderno.referencia}
        placeholder=${d.caderno.referenciaPlaceholder}
        .value=${e.referencia}
        @kk-input=${t=>{y={...e,referencia:t.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${d.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${d.caderno.conteudoPlaceholder}
        .value=${e.conteudo}
        @kk-input=${t=>{y={...e,conteudo:t.target.value}}}
      ></kk-textarea>

      ${e.aviso===``?p:c`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${e.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void M()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${d.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>m(`caderno`)}>${d.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var P={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return y?.id===null?d.caderno.nova:d.caderno.editar},acoes(e){if(!(e.args.length>0))return c`
      <kk-icon-button
        name="plus"
        label=${d.caderno.nova}
        @click=${()=>m(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){return E(e),S===null?e.args.length===0?j():y===null?c`<div class="carregando"><kk-spinner></kk-spinner></div>`:N(y):h(S,D)}};export{P as telaCaderno};