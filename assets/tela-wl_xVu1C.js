import{B as e,G as t,H as n,K as r,S as i,U as a,V as o,Y as s,_t as c,b as l,bt as u,ft as d,m as f,mt as p,pt as m,xt as h,y as g,z as _}from"./index-BNLfwB87.js";var v=[],y=_,b=null,x,S=!1,C=null,w=null;async function T(){v=await t(),d()}function E(){let e=o();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,origemFixa:e.origem!==void 0,criado:null,aviso:``}}function D(e){m(`caderno`,()=>{x=void 0});let t=e.args.join(`/`);x===t||S||C!==null||(x=t,S=!0,(async()=>{try{await T();let[t]=e.args;if(t===void 0)b=null;else if(t===`novo`)b=E();else{let e=Number.parseInt(t,10),n=v.find(t=>t.id===e);if(n===void 0){p(`caderno`);return}b={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,origemFixa:!1,criado:n.criado,aviso:``}}}catch(t){console.error(`caderno: a carga falhou.`,t),C=l(t),w=e}finally{S=!1,d()}})())}function O(){let e=w;C=null,w=null,x=void 0,e!==null&&D(e),d()}function k(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function A(e){let t=r(e.origem);return h`
    <div class="cartao cartao--parado" style=${`--cor:${t.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${t.icone}></kk-icon>${t.rotulo}
        </span>
        <span class="cartao__data">${k(e.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${e.titulo}</span>
      ${e.referencia===``?u:h`<span class="cartao__referencia">${e.referencia}</span>`}
      <p class="cartao__texto">${e.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>p(`caderno/${e.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${c.acoes.editar}
        </kk-button>
        <kk-button
          size="small"
          variant="danger"
          outline
          @click=${()=>void j(e)}
        >
          <kk-icon slot="prefix" name="trash"></kk-icon>
        </kk-button>
      </span>
    </div>
  `}async function j(e){await i({titulo:c.caderno.excluir,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await n(e.id),f(c.caderno.excluida),await T())}function M(){let t=a(v,y);return h`
    <p class="intro">${c.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${y.origem}
        @kk-change=${e=>{y={...y,origem:e.target.value},d()}}
      >
        <kk-option value="todas">${c.caderno.todasOrigens}</kk-option>
        ${Object.entries(e).map(([e,t])=>h`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${c.caderno.buscar}
        .value=${y.busca}
        @kk-input=${e=>{y={...y,busca:e.target.value},d()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${t.length===0?h`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${v.length===0?c.caderno.vazio:c.caderno.semFiltro}</p>
          </div>
        `:h`<div class="cartoes cartoes--duas">${t.map(e=>A(e))}</div>`}
  `}async function N(){if(b===null)return;if(b.conteudo.trim()===``){b={...b,aviso:c.caderno.semConteudo},d();return}let e=Date.now(),t={...b.id===null?{}:{id:b.id},titulo:b.titulo.trim()||r(b.origem).rotulo,conteudo:b.conteudo.trim(),origem:b.origem,referencia:b.referencia,ref_chave:b.refChave,criado:b.criado??e,atualizado:e};await s(t),f(c.caderno.salva),p(`caderno`)}function P(t){return h`
    <div class="editor">
      ${t.origemFixa?u:h`
          <kk-select
            label=${c.caderno.origem}
            .value=${t.origem}
            @kk-change=${e=>{b={...b??t,origem:e.target.value},d()}}
          >
            ${Object.entries(e).map(([e,t])=>h`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
          </kk-select>
          `}

      <kk-input
        label=${c.caderno.titulo}
        placeholder=${c.caderno.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{b={...b??t,titulo:e.target.value}}}
      ></kk-input>

      <kk-input
        label=${c.caderno.referencia}
        placeholder=${c.caderno.referenciaPlaceholder}
        .value=${t.referencia}
        @kk-input=${e=>{b={...b??t,referencia:e.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${c.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${c.caderno.conteudoPlaceholder}
        .value=${t.conteudo}
        @kk-input=${e=>{b={...b??t,conteudo:e.target.value}}}
      ></kk-textarea>

      ${t.aviso===``?u:h`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${t.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void N()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>p(`caderno`)}>${c.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var F={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return b?.id===null?c.caderno.nova:c.caderno.editar},acoes(e){if(!(e.args.length>0))return h`
      <kk-icon-button
        name="plus"
        label=${c.caderno.nova}
        @click=${()=>p(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){return D(e),C===null?e.args.length===0?M():b===null?h`<div class="carregando"><kk-spinner></kk-spinner></div>`:P(b):g(C,O)}};export{F as telaCaderno};