import{$ as e,B as t,G as n,H as r,J as i,Q as a,R as o,V as s,W as c,at as l,nt as u,p as d,rt as f,u as p,z as m}from"./index-qggyvcH6.js";var h=[],g=o,_=null,v,y=!1;async function b(){h=await c(),a()}function x(){let e=t();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,criado:null,aviso:``}}function S(t){let n=t.args.join(`/`);v===n||y||(v=n,y=!0,(async()=>{try{await b();let[n]=t.args;if(n===void 0)_=null;else if(n===`novo`)_=x();else{let t=Number.parseInt(n,10),r=h.find(e=>e.id===t);if(r===void 0){e(`caderno`);return}_={id:r.id??null,titulo:r.titulo,conteudo:r.conteudo,origem:r.origem,referencia:r.referencia,refChave:r.ref_chave,criado:r.criado,aviso:``}}}finally{y=!1,a()}})())}function C(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}function w(t){let r=n(t.origem);return l`
    <div class="cartao cartao--parado" style=${`--cor:${r.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${r.icone}></kk-icon>${r.rotulo}
        </span>
        <span class="cartao__data">${C(t.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${t.titulo}</span>
      ${t.referencia===``?f:l`<span class="cartao__referencia">${t.referencia}</span>`}
      <p class="cartao__texto">${t.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>e(`caderno/${t.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${u.acoes.editar}
        </kk-button>
        <kk-button
          size="small"
          variant="danger"
          outline
          @click=${()=>void T(t)}
        >
          <kk-icon slot="prefix" name="trash"></kk-icon>
        </kk-button>
      </span>
    </div>
  `}async function T(e){await d({titulo:u.caderno.excluir,texto:u.acervo.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await s(e.id),p(u.caderno.excluida),await b())}function E(){let e=r(h,g);return l`
    <p class="intro">${u.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${g.origem}
        @kk-change=${e=>{g={...g,origem:e.target.value},a()}}
      >
        <kk-option value="todas">${u.caderno.todasOrigens}</kk-option>
        ${Object.entries(m).map(([e,t])=>l`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${u.caderno.buscar}
        .value=${g.busca}
        @kk-input=${e=>{g={...g,busca:e.target.value},a()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?l`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${h.length===0?u.caderno.vazio:u.caderno.semFiltro}</p>
          </div>
        `:l`<div class="cartoes cartoes--duas">${e.map(e=>w(e))}</div>`}
  `}async function D(){if(_===null)return;if(_.conteudo.trim()===``){_={..._,aviso:u.caderno.semConteudo},a();return}let t=Date.now(),r={..._.id===null?{}:{id:_.id},titulo:_.titulo.trim()||n(_.origem).rotulo,conteudo:_.conteudo.trim(),origem:_.origem,referencia:_.referencia,ref_chave:_.refChave,criado:_.criado??t,atualizado:t};await i(r),p(u.caderno.salva),e(`caderno`)}function O(t){return l`
    <div class="editor">
      <kk-select
        label=${u.caderno.origem}
        .value=${t.origem}
        @kk-change=${e=>{_={...t,origem:e.target.value},a()}}
      >
        ${Object.entries(m).map(([e,t])=>l`<kk-option value=${e}>${t.rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        label=${u.caderno.titulo}
        placeholder=${u.caderno.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{_={...t,titulo:e.target.value}}}
      ></kk-input>

      <kk-input
        label=${u.caderno.referencia}
        placeholder=${u.caderno.referenciaPlaceholder}
        .value=${t.referencia}
        @kk-input=${e=>{_={...t,referencia:e.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${u.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${u.caderno.conteudoPlaceholder}
        .value=${t.conteudo}
        @kk-input=${e=>{_={...t,conteudo:e.target.value}}}
      ></kk-textarea>

      ${t.aviso===``?f:l`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${t.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void D()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${u.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>e(`caderno`)}>${u.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var k={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return _?.id===null?u.caderno.nova:u.caderno.editar},acoes(t){if(!(t.args.length>0))return l`
      <kk-icon-button
        name="plus"
        label=${u.caderno.nova}
        @click=${()=>e(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){return S(e),e.args.length===0?E():_===null?l`<div class="carregando"><kk-spinner></kk-spinner></div>`:O(_)}};export{k as telaCaderno};