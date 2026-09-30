import{i as e,t}from"./lit-CL39YOSA.js";import{i as n,n as r}from"./strings-C-U_qlgv.js";import{n as i,r as a}from"./rotas-D12eslN_.js";import{a as o,c as s,d as c,i as l,n as u,r as d,s as f,t as p}from"./dados-C5hnBh9D.js";import{R as m,c as h,d as g,m as _}from"./index-DQ-iAe1X.js";import{n as v}from"./carga-Cl47TOz-.js";var y=[],b=p,x=null;async function S(){y=await f(),m()}function C(){let e=d();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,origemFixa:e.origem!==void 0,criado:null,aviso:``}}var w=new v(`caderno`,async e=>{await S();let[t]=e.args;if(t===void 0)x=null;else if(t===`novo`)x=C();else{let e=Number.parseInt(t,10),n=y.find(t=>t.id===e);if(n===void 0){a(`caderno`);return}x={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,origemFixa:!1,criado:n.criado,aviso:``}}});i(`caderno`,()=>w.esquecer());function T(e){return e===void 0||e===0?`—`:new Date(e).toLocaleDateString(n(),{day:`2-digit`,month:`short`,year:`numeric`})}function E(n){let i=s(n.origem);return e`
    <div class="cartao cartao--parado" style=${`--cor:${i.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${i.icone}></kk-icon>${i.rotulo}
        </span>
        <span class="cartao__data">${T(n.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${n.titulo}</span>
      ${n.referencia===``?t:e`<span class="cartao__referencia">${n.referencia}</span>`}
      <p class="cartao__texto">${n.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>a(`caderno/${n.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${r.acoes.editar}
        </kk-button>
        <kk-button
          size="small"
          variant="danger"
          outline
          @click=${()=>void D(n)}
        >
          <kk-icon slot="prefix" name="trash"></kk-icon>
        </kk-button>
      </span>
    </div>
  `}async function D(e){await _({titulo:r.caderno.excluir,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await l(e.id),h(r.caderno.excluida),await S())}function O(){let t=o(y,b);return e`
    <p class="intro">${r.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${b.origem}
        @kk-change=${e=>{b={...b,origem:e.target.value},m()}}
      >
        <kk-option value="todas">${r.caderno.todasOrigens}</kk-option>
        ${Object.keys(u).map(t=>e`<kk-option value=${t}>${s(t).rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${r.caderno.buscar}
        .value=${b.busca}
        @kk-input=${e=>{b={...b,busca:e.target.value},m()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${y.length===0?r.caderno.vazio:r.caderno.semFiltro}</p>
          </div>
        `:e`<div class="cartoes cartoes--duas">${t.map(e=>E(e))}</div>`}
  `}async function k(){if(x===null)return;if(x.conteudo.trim()===``){x={...x,aviso:r.caderno.semConteudo},m();return}let e=Date.now(),t={...x.id===null?{}:{id:x.id},titulo:x.titulo.trim()||s(x.origem).rotulo,conteudo:x.conteudo.trim(),origem:x.origem,referencia:x.referencia,ref_chave:x.refChave,criado:x.criado??e,atualizado:e};await c(t),h(r.caderno.salva),a(`caderno`)}function A(n){return e`
    <div class="editor">
      ${n.origemFixa?t:e`
          <kk-select
            label=${r.caderno.origem}
            .value=${n.origem}
            @kk-change=${e=>{x={...x??n,origem:e.target.value},m()}}
          >
            ${Object.keys(u).map(t=>e`<kk-option value=${t}>${s(t).rotulo}</kk-option>`)}
          </kk-select>
          `}

      <kk-input
        label=${r.caderno.titulo}
        placeholder=${r.caderno.tituloPlaceholder}
        .value=${n.titulo}
        @kk-input=${e=>{x={...x??n,titulo:e.target.value}}}
      ></kk-input>

      <kk-input
        label=${r.caderno.referencia}
        placeholder=${r.caderno.referenciaPlaceholder}
        .value=${n.referencia}
        @kk-input=${e=>{x={...x??n,referencia:e.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${r.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${r.caderno.conteudoPlaceholder}
        .value=${n.conteudo}
        @kk-input=${e=>{x={...x??n,conteudo:e.target.value}}}
      ></kk-textarea>

      ${n.aviso===``?t:e`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${n.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void k()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>a(`caderno`)}>${r.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var j={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return x?.id===null?r.caderno.nova:r.caderno.editar},acoes(t){if(!(t.args.length>0))return e`
      <kk-icon-button
        name="plus"
        label=${r.caderno.nova}
        @click=${()=>a(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){let t=w.falhou(e);return t===null?e.args.length===0?O():x===null?g():A(x):t}};export{j as telaCaderno};