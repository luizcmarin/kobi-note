import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{r}from"./formato-BoZO7uRM.js";import{n as i,r as a}from"./rotas-CR8kk0YZ.js";import{a as o,c as s,d as c,i as l,n as u,r as d,s as f,t as p}from"./dados-DajL1VQY.js";import{A as m,C as h,D as g,ct as _}from"./index-DA5sF2fG.js";import{n as v}from"./carga-M22LLosZ.js";var y=[],b=p,x=null;async function S(){y=await f(),_()}function C(){let e=d();return{id:null,titulo:e.titulo??``,conteudo:e.conteudo??``,origem:e.origem??`avulso`,referencia:e.referencia??``,refChave:e.ref_chave??null,origemFixa:e.origem!==void 0,criado:null,aviso:``}}var w=new v(`caderno`,async e=>{await S();let[t]=e.args;if(t===void 0)x=null;else if(t===`novo`)x=C();else{let e=Number.parseInt(t,10),n=y.find(t=>t.id===e);if(n===void 0){a(`caderno`);return}x={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,origem:n.origem,referencia:n.referencia,refChave:n.ref_chave,origemFixa:!1,criado:n.criado,aviso:``}}});i(`caderno`,()=>w.esquecer());function T(e){return e===void 0||e===0?`—`:r(e)}function E(r){let i=s(r.origem);return e`
    <div class="cartao cartao--parado" style=${`--cor:${i.cor}`}>
      <span class="cartao__topo">
        <span class="cartao__selo">
          <kk-icon name=${i.icone}></kk-icon>${i.rotulo}
        </span>
        <span class="cartao__data">${T(r.atualizado)}</span>
      </span>

      <span class="cartao__titulo">${r.titulo}</span>
      ${r.referencia===``?t:e`<span class="cartao__referencia">${r.referencia}</span>`}
      <p class="cartao__texto">${r.conteudo}</p>

      <span class="cartao__rodape">
        <kk-button size="small" @click=${()=>a(`caderno/${r.id??``}`)}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${n.acoes.editar}
        </kk-button>
        <kk-button
          size="small"
          variant="danger"
          outline
          @click=${()=>void D(r)}
        >
          <kk-icon slot="prefix" name="trash"></kk-icon>
        </kk-button>
      </span>
    </div>
  `}async function D(e){await m({titulo:n.caderno.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await l(e.id),h(n.caderno.excluida),await S())}function O(){let t=o(y,b);return e`
    <p class="intro">${n.caderno.intro}</p>

    <div class="filtros">
      <kk-select
        .value=${b.origem}
        @kk-change=${e=>{b={...b,origem:e.target.value},_()}}
      >
        <kk-option value="todas">${n.caderno.todasOrigens}</kk-option>
        ${Object.keys(u).map(t=>e`<kk-option value=${t}>${s(t).rotulo}</kk-option>`)}
      </kk-select>

      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.caderno.buscar}
        .value=${b.busca}
        @kk-input=${e=>{b={...b,busca:e.target.value},_()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book-2"></kk-icon>
            <p>${y.length===0?n.caderno.vazio:n.caderno.semFiltro}</p>
          </div>
        `:e`<div class="cartoes cartoes--duas">${t.map(e=>E(e))}</div>`}
  `}async function k(){if(x===null)return;if(x.conteudo.trim()===``){x={...x,aviso:n.caderno.semConteudo},_();return}let e=Date.now(),t={...x.id===null?{}:{id:x.id},titulo:x.titulo.trim()||s(x.origem).rotulo,conteudo:x.conteudo.trim(),origem:x.origem,referencia:x.referencia,ref_chave:x.refChave,criado:x.criado??e,atualizado:e};await c(t),h(n.caderno.salva),a(`caderno`)}function A(r){return e`
    <div class="editor">
      ${r.origemFixa?t:e`
          <kk-select
            label=${n.caderno.origem}
            .value=${r.origem}
            @kk-change=${e=>{x={...x??r,origem:e.target.value},_()}}
          >
            ${Object.keys(u).map(t=>e`<kk-option value=${t}>${s(t).rotulo}</kk-option>`)}
          </kk-select>
          `}

      <kk-input
        label=${n.caderno.titulo}
        placeholder=${n.caderno.tituloPlaceholder}
        .value=${r.titulo}
        @kk-input=${e=>{x={...x??r,titulo:e.target.value}}}
      ></kk-input>

      <kk-input
        label=${n.caderno.referencia}
        placeholder=${n.caderno.referenciaPlaceholder}
        .value=${r.referencia}
        @kk-input=${e=>{x={...x??r,referencia:e.target.value}}}
      ></kk-input>

      <kk-textarea
        label=${n.caderno.conteudo}
        rows="6"
        resize="auto"
        placeholder=${n.caderno.conteudoPlaceholder}
        .value=${r.conteudo}
        @kk-input=${e=>{x={...x??r,conteudo:e.target.value}}}
      ></kk-textarea>

      ${r.aviso===``?t:e`
            <kk-alert open variant="warning">
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>${r.aviso}
            </kk-alert>
          `}

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void k()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button @click=${()=>a(`caderno`)}>${n.acoes.cancelar}</kk-button>
      </div>
    </div>
  `}var j={voltarPara(e){return e.args.length===0?`home`:`caderno`},titulo(e){if(e.args.length!==0)return x?.id===null?n.caderno.nova:n.caderno.editar},acoes(t){if(!(t.args.length>0))return e`
      <kk-icon-button
        name="plus"
        label=${n.caderno.nova}
        @click=${()=>a(`caderno/novo`)}
      ></kk-icon-button>
    `},conteudo(e){let t=w.falhou(e);return t===null?e.args.length===0?O():x===null?g():A(x):t}};export{j as telaCaderno};