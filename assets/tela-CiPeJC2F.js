import{B as e,F as t,I as n,L as r,P as i,R as a,V as o,W as s,ft as c,g as l,m as u,mt as d,ot as f,st as p,ut as m,v as h,y as g}from"./index-B4lifVfd.js";var _=[],v=i,y=null,b,x=!1,S=null,C=null;async function w(){_=await e(),f()}function T(){let e=n();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,criado:null,aviso:``}}function E(e){let t=e.args.join(`/`);b===t||x||S!==null||(b=t,x=!0,(async()=>{try{await w();let[t]=e.args;if(t===void 0)y=null;else if(t===`novo`)y=T();else{let e=Number.parseInt(t,10),n=_.find(t=>t.id===e);if(n===void 0){p(`caderno`);return}y={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,criado:n.criado,aviso:``}}}catch(t){console.error(`caderno: a carga falhou.`,t),S=g(t),C=e}finally{x=!1,f()}})())}function D(){let e=C;S=null,C=null,b=void 0,e!==null&&E(e),f()}function O(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function k(e){let t=o(e.origem);return d`
    <div class="cartao cartao--parado" style=${`--cor:${t.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${t.icone}></kk-icon>${t.rotulo}
        </span>
        <span class="cartao__data">${O(e.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${e.titulo}</span>
      ${e.referencia===``?c:d`<span class="cartao__referencia">${e.referencia}</span>`}
      <p class="cartao__texto">${e.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>p(`caderno/${e.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${m.acoes.editar}
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
  `}async function A(e){await l({titulo:m.caderno.excluir,texto:m.acervo.excluirTexto,rotuloConfirmar:m.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await r(e.id),u(m.caderno.excluida),await w())}function j(){let e=a(_,v);return d`
    <p class="intro">${m.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${v.origem}
        @kk-change=${e=>{v={...v,origem:e.target.value},f()}}
      >
        <kk-option value="todas">${m.caderno.todasOrigens}</kk-option>
        ${Object.entries(t).map(([e,t])=>d`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${m.caderno.buscar}
        .value=${v.busca}
        @kk-input=${e=>{v={...v,busca:e.target.value},f()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?d`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${_.length===0?m.caderno.vazio:m.caderno.semFiltro}</p>
          </div>
        `:d`<div class="cartoes cartoes--duas">${e.map(e=>k(e))}</div>`}
  `}async function M(){if(y===null)return;if(y.conteudo.trim()===``){y={...y,aviso:m.caderno.semConteudo},f();return}let e=Date.now(),t={...y.id===null?{}:{id:y.id},titulo:y.titulo.trim()||o(y.origem).rotulo,conteudo:y.conteudo.trim(),origem:y.origem,referencia:y.referencia,ref_chave:y.refChave,criado:y.criado??e,atualizado:e};await s(t),u(m.caderno.salva),p(`caderno`)}function N(e){return d`
    <div class="editor">
      <kk-select
        label=${m.caderno.origem}
        .value=${e.origem}
        @kk-change=${t=>{y={...e,origem:t.target.value},f()}}
      >
        ${Object.entries(t).map(([e,t])=>d`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        label=${m.caderno.titulo}
        placeholder=${m.caderno.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{y={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${m.caderno.referencia}
        placeholder=${m.caderno.referenciaPlaceholder}
        .value=${e.referencia}
        @kk-input=${t=>{y={...e,referencia:t.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${m.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${m.caderno.conteudoPlaceholder}
        .value=${e.conteudo}
        @kk-input=${t=>{y={...e,conteudo:t.target.value}}}
      ></kk-textarea>

      ${e.aviso===``?c:d`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${e.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void M()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${m.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>p(`caderno`)}>${m.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var P={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return y?.id===null?m.caderno.nova:m.caderno.editar},acoes(e){if(!(e.args.length>0))return d`
      <kk-icon-button
        name="plus"
        label=${m.caderno.nova}
        @click=${()=>p(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){return E(e),S===null?e.args.length===0?j():y===null?d`<div class="carregando"><kk-spinner></kk-spinner></div>`:N(y):h(S,D)}};export{P as telaCaderno};