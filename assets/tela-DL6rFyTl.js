import{E as e,G as t,H as n,J as r,T as i,U as a,V as o,W as s,Z as c,ct as l,et as u,h as d,it as f,ot as p,q as m,tt as h,u as g}from"./index-EsbOy3qu.js";var _=[],v=o,y=null,b,x=!1,S=null,C=null;async function w(){_=await m(),u()}function T(){let e=a();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,criado:null,aviso:``}}function E(t){let n=t.args.join(`/`);b===n||x||S!==null||(b=n,x=!0,(async()=>{try{await w();let[e]=t.args;if(e===void 0)y=null;else if(e===`novo`)y=T();else{let t=Number.parseInt(e,10),n=_.find(e=>e.id===t);if(n===void 0){h(`caderno`);return}y={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,criado:n.criado,aviso:``}}}catch(n){console.error(`caderno: a carga falhou.`,n),S=e(n),C=t}finally{x=!1,u()}})())}function D(){let e=C;S=null,C=null,b=void 0,e!==null&&E(e),u()}function O(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function k(e){let t=r(e.origem);return l`
    <div class="cartao cartao--parado" style=${`--cor:${t.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${t.icone}></kk-icon>${t.rotulo}
        </span>
        <span class="cartao__data">${O(e.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${e.titulo}</span>
      ${e.referencia===``?p:l`<span class="cartao__referencia">${e.referencia}</span>`}
      <p class="cartao__texto">${e.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>h(`caderno/${e.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${f.acoes.editar}
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
  `}async function A(e){await d({titulo:f.caderno.excluir,texto:f.acervo.excluirTexto,rotuloConfirmar:f.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await s(e.id),g(f.caderno.excluida),await w())}function j(){let e=t(_,v);return l`
    <p class="intro">${f.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${v.origem}
        @kk-change=${e=>{v={...v,origem:e.target.value},u()}}
      >
        <kk-option value="todas">${f.caderno.todasOrigens}</kk-option>
        ${Object.entries(n).map(([e,t])=>l`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${f.caderno.buscar}
        .value=${v.busca}
        @kk-input=${e=>{v={...v,busca:e.target.value},u()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?l`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${_.length===0?f.caderno.vazio:f.caderno.semFiltro}</p>
          </div>
        `:l`<div class="cartoes cartoes--duas">${e.map(e=>k(e))}</div>`}
  `}async function M(){if(y===null)return;if(y.conteudo.trim()===``){y={...y,aviso:f.caderno.semConteudo},u();return}let e=Date.now(),t={...y.id===null?{}:{id:y.id},titulo:y.titulo.trim()||r(y.origem).rotulo,conteudo:y.conteudo.trim(),origem:y.origem,referencia:y.referencia,ref_chave:y.refChave,criado:y.criado??e,atualizado:e};await c(t),g(f.caderno.salva),h(`caderno`)}function N(e){return l`
    <div class="editor">
      <kk-select
        label=${f.caderno.origem}
        .value=${e.origem}
        @kk-change=${t=>{y={...e,origem:t.target.value},u()}}
      >
        ${Object.entries(n).map(([e,t])=>l`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        label=${f.caderno.titulo}
        placeholder=${f.caderno.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{y={...e,titulo:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${f.caderno.referencia}
        placeholder=${f.caderno.referenciaPlaceholder}
        .value=${e.referencia}
        @kk-input=${t=>{y={...e,referencia:t.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${f.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${f.caderno.conteudoPlaceholder}
        .value=${e.conteudo}
        @kk-input=${t=>{y={...e,conteudo:t.target.value}}}
      ></kk-textarea>

      ${e.aviso===``?p:l`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${e.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void M()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${f.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>h(`caderno`)}>${f.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var P={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return y?.id===null?f.caderno.nova:f.caderno.editar},acoes(e){if(!(e.args.length>0))return l`
      <kk-icon-button
        name="plus"
        label=${f.caderno.nova}
        @click=${()=>h(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){return E(e),S===null?e.args.length===0?j():y===null?l`<div class="carregando"><kk-spinner></kk-spinner></div>`:N(y):i(S,D)}};export{P as telaCaderno};