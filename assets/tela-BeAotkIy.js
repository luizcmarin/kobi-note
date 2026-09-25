import{F as e,G as t,H as n,I as r,L as i,R as a,V as o,_t as s,b as c,ct as l,ft as u,g as d,ht as f,lt as p,m,st as h,y as g,z as _}from"./index-C6owxr6H.js";var v=[],y=e,b=null,x,S=!1,C=null,w=null;async function T(){v=await o(),h()}function E(){let e=i();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,origemFixa:e.origem!==void 0,criado:null,aviso:``}}function D(e){l(`caderno`,()=>{x=void 0});let t=e.args.join(`/`);x===t||S||C!==null||(x=t,S=!0,(async()=>{try{await T();let[t]=e.args;if(t===void 0)b=null;else if(t===`novo`)b=E();else{let e=Number.parseInt(t,10),n=v.find(t=>t.id===e);if(n===void 0){p(`caderno`);return}b={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,origemFixa:!1,criado:n.criado,aviso:``}}}catch(t){console.error(`caderno: a carga falhou.`,t),C=c(t),w=e}finally{S=!1,h()}})())}function O(){let e=w;C=null,w=null,x=void 0,e!==null&&D(e),h()}function k(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function A(e){let t=n(e.origem);return s`
    <div class="cartao cartao--parado" style=${`--cor:${t.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${t.icone}></kk-icon>${t.rotulo}
        </span>
        <span class="cartao__data">${k(e.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${e.titulo}</span>
      ${e.referencia===``?f:s`<span class="cartao__referencia">${e.referencia}</span>`}
      <p class="cartao__texto">${e.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>p(`caderno/${e.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${u.acoes.editar}
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
  `}async function j(e){await d({titulo:u.caderno.excluir,texto:u.acervo.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await a(e.id),m(u.caderno.excluida),await T())}function M(){let e=_(v,y);return s`
    <p class="intro">${u.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${y.origem}
        @kk-change=${e=>{y={...y,origem:e.target.value},h()}}
      >
        <kk-option value="todas">${u.caderno.todasOrigens}</kk-option>
        ${Object.entries(r).map(([e,t])=>s`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${u.caderno.buscar}
        .value=${y.busca}
        @kk-input=${e=>{y={...y,busca:e.target.value},h()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?s`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${v.length===0?u.caderno.vazio:u.caderno.semFiltro}</p>
          </div>
        `:s`<div class="cartoes cartoes--duas">${e.map(e=>A(e))}</div>`}
  `}async function N(){if(b===null)return;if(b.conteudo.trim()===``){b={...b,aviso:u.caderno.semConteudo},h();return}let e=Date.now(),r={...b.id===null?{}:{id:b.id},titulo:b.titulo.trim()||n(b.origem).rotulo,conteudo:b.conteudo.trim(),origem:b.origem,referencia:b.referencia,ref_chave:b.refChave,criado:b.criado??e,atualizado:e};await t(r),m(u.caderno.salva),p(`caderno`)}function P(e){return s`
    <div class="editor">
      ${e.origemFixa?f:s`
          <kk-select
            label=${u.caderno.origem}
            .value=${e.origem}
            @kk-change=${t=>{b={...b??e,origem:t.target.value},h()}}
          >
            ${Object.entries(r).map(([e,t])=>s`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
          </kk-select>
          `}

      <kk-input
        label=${u.caderno.titulo}
        placeholder=${u.caderno.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{b={...b??e,titulo:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${u.caderno.referencia}
        placeholder=${u.caderno.referenciaPlaceholder}
        .value=${e.referencia}
        @kk-input=${t=>{b={...b??e,referencia:t.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${u.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${u.caderno.conteudoPlaceholder}
        .value=${e.conteudo}
        @kk-input=${t=>{b={...b??e,conteudo:t.target.value}}}
      ></kk-textarea>

      ${e.aviso===``?f:s`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${e.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void N()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${u.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>p(`caderno`)}>${u.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var F={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return b?.id===null?u.caderno.nova:u.caderno.editar},acoes(e){if(!(e.args.length>0))return s`
      <kk-icon-button
        name="plus"
        label=${u.caderno.nova}
        @click=${()=>p(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){return D(e),C===null?e.args.length===0?M():b===null?s`<div class="carregando"><kk-spinner></kk-spinner></div>`:P(b):g(C,O)}};export{F as telaCaderno};