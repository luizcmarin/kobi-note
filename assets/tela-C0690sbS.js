import{F as e,G as t,H as n,I as r,L as i,R as a,V as o,b as s,ct as c,g as l,gt as u,lt as d,m as f,pt as p,ut as m,vt as h,y as g,z as _}from"./index-sA5grpgQ.js";var v=[],y=e,b=null,x,S=!1,C=null,w=null;async function T(){v=await o(),c()}function E(){let e=i();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,origemFixa:e.origem!==void 0,criado:null,aviso:``}}function D(e){d(`caderno`,()=>{x=void 0});let t=e.args.join(`/`);x===t||S||C!==null||(x=t,S=!0,(async()=>{try{await T();let[t]=e.args;if(t===void 0)b=null;else if(t===`novo`)b=E();else{let e=Number.parseInt(t,10),n=v.find(t=>t.id===e);if(n===void 0){m(`caderno`);return}b={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,origemFixa:!1,criado:n.criado,aviso:``}}}catch(t){console.error(`caderno: a carga falhou.`,t),C=s(t),w=e}finally{S=!1,c()}})())}function O(){let e=w;C=null,w=null,x=void 0,e!==null&&D(e),c()}function k(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function A(e){let t=n(e.origem);return h`
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
        <kk-button size="small" @click=${()=>m(`caderno/${e.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${p.acoes.editar}
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
  `}async function j(e){await l({titulo:p.caderno.excluir,texto:p.acervo.excluirTexto,rotuloConfirmar:p.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await a(e.id),f(p.caderno.excluida),await T())}function M(){let e=_(v,y);return h`
    <p class="intro">${p.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${y.origem}
        @kk-change=${e=>{y={...y,origem:e.target.value},c()}}
      >
        <kk-option value="todas">${p.caderno.todasOrigens}</kk-option>
        ${Object.entries(r).map(([e,t])=>h`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${p.caderno.buscar}
        .value=${y.busca}
        @kk-input=${e=>{y={...y,busca:e.target.value},c()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?h`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${v.length===0?p.caderno.vazio:p.caderno.semFiltro}</p>
          </div>
        `:h`<div class="cartoes cartoes--duas">${e.map(e=>A(e))}</div>`}
  `}async function N(){if(b===null)return;if(b.conteudo.trim()===``){b={...b,aviso:p.caderno.semConteudo},c();return}let e=Date.now(),r={...b.id===null?{}:{id:b.id},titulo:b.titulo.trim()||n(b.origem).rotulo,conteudo:b.conteudo.trim(),origem:b.origem,referencia:b.referencia,ref_chave:b.refChave,criado:b.criado??e,atualizado:e};await t(r),f(p.caderno.salva),m(`caderno`)}function P(e){return h`
    <div class="editor">
      ${e.origemFixa?u:h`
          <kk-select
            label=${p.caderno.origem}
            .value=${e.origem}
            @kk-change=${t=>{b={...b??e,origem:t.target.value},c()}}
          >
            ${Object.entries(r).map(([e,t])=>h`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
          </kk-select>
          `}

      <kk-input
        label=${p.caderno.titulo}
        placeholder=${p.caderno.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{b={...b??e,titulo:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${p.caderno.referencia}
        placeholder=${p.caderno.referenciaPlaceholder}
        .value=${e.referencia}
        @kk-input=${t=>{b={...b??e,referencia:t.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${p.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${p.caderno.conteudoPlaceholder}
        .value=${e.conteudo}
        @kk-input=${t=>{b={...b??e,conteudo:t.target.value}}}
      ></kk-textarea>

      ${e.aviso===``?u:h`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${e.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void N()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${p.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>m(`caderno`)}>${p.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var F={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return b?.id===null?p.caderno.nova:p.caderno.editar},acoes(e){if(!(e.args.length>0))return h`
      <kk-icon-button
        name="plus"
        label=${p.caderno.nova}
        @click=${()=>m(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){return D(e),C===null?e.args.length===0?M():b===null?h`<div class="carregando"><kk-spinner></kk-spinner></div>`:P(b):g(C,O)}};export{F as telaCaderno};