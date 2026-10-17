import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-V1DWQvwW.js";import{r}from"./data-DbOIIZMP.js";import{d as i,o as a}from"./formato-BoZO7uRM.js";import{A as o,C as s,ct as c,j as l}from"./index-BQ700Bhd.js";import{t as ee}from"./carga-C4iKecgv.js";import{a as te,d as ne,f as re,i as u,n as d}from"./dados-CMbokwWF.js";import{_ as ie,a as ae,c as oe,f as se,g as ce,h as f,i as le,l as ue,m as de,n as fe,o as p,p as m,r as pe,s as me,t as he,u as ge,v as _e}from"./estoque-DeaFq51a.js";import{a as ve,c as ye,i as be,l as xe,n as Se,o as Ce,r as h,s as g,t as _,u as v}from"./kits-CQILqHOd.js";import{a as y,c as b,d as x,f as S,i as C,l as w,o as T,p as E,s as D,t as O,u as k}from"./cofre--CWlNlu_.js";var A=[],j={},M=[],N=ue(),P=new Set,F=new Set,I=!1,L=``,R=null,z=null,B=null,V=[],H=``,U=!1,W=null;async function G(){[A,M]=await Promise.all([Se(),p()]),j=Ce(),c()}var we=new ee(`prep`,async()=>{Te(),await G()});function K(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function q(){B=null,V=[],H=``,J()}function J(){W!==null&&URL.revokeObjectURL(W.url),W=null}var Y=!1;function Te(){Y||(Y=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&q()}))}function Ee(r,i){let o=be(j,r,i.id),s=[i.quantidade,i.observacoes,i.data_vencimento===0?``:n.prep.vence(a(i.data_vencimento))].filter(e=>e!==``).join(` · `);return e`
    <div class="registro" ?data-marcado=${o}>
      <span class="registro__avatar">
        <kk-icon name=${o?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${o}
        @click=${()=>{j=_(j,r,i.id),c()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${i.descricao}</span>
        </span>
        ${s===``?t:e`<span class="registro__resumo">${s}</span>`}
      </button>
    </div>
  `}function De(){return A.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${n.prep.semKits}</p>
      </div>
    `:e`
    <div class="grupos">
      ${A.map(r=>{let i=String(r.id),a=P.has(i),o=ve(j,r);return e`
          <div class="grupo" ?data-completo=${o}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${a}
              @click=${()=>{let e=new Set(P);e.delete(i)||e.add(i),P=e,c()}}
            >
              <span class="grupo__emoji">${r.icone===``?`📋`:r.icone}</span>
              <span class="grupo__nome">${r.nome}</span>
              <span class="grupo__contagem">
                ${g(j,r)}/${r.itens.length}
              </span>
              <kk-icon name=${a?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${r.itens.length===0?t:e`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${xe(j,r)}%`}
                    ></div>
                  </div>
                `}

            ${a?e`
                  <div class="registros">
                    ${r.itens.map(e=>Ee(r,e))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.editar}
                      @click=${()=>void Ae(r)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${n.acoes.excluir}
                      @click=${()=>void Oe(r)}
                    ></kk-icon-button>
                  </div>
                `:t}
          </div>
        `})}
    </div>
  `}async function Oe(e){await o({titulo:n.prep.excluirKit,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(j=await h(e,j),s(n.prep.kitExcluido),await G())}function X(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function ke(){return{id:0,nome:``,icone:``,itens:[X()],criacao:0}}async function Ae(e){if(e.id===void 0)return;let t=await ye(e.id)??e;R={id:t.id??0,nome:t.nome,icone:t.icone,criacao:t.data_criacao,itens:t.itens.length===0?[X()]:t.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:r(e.data_vencimento)}))},c()}function je(t){let r=e=>{R={...R??t,...e}},i=(e,n,i)=>{r({itens:(R??t).itens.map((t,r)=>r===e?{...t,[n]:i}:t)})};return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.prep.editarKit:n.prep.novoKit}
      </h2>

      <kk-input
        label=${n.prep.nomeDoKit}
        .value=${t.nome}
        @kk-input=${e=>r({nome:e.target.value})}
      ></kk-input>

      <h3 class="secao">${n.prep.emoji}</h3>
      <p class="formulario__ajuda">${n.prep.emojiAjuda}</p>
      <div class="chips chips--em-linha">
        ${te.map(n=>e`
            <button
              type="button"
              class="chip chip--emoji"
              ?data-ativo=${t.icone===n}
              title=${n}
              @click=${()=>{r({icone:t.icone===n?``:n}),c()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h3 class="secao">${n.prep.itens}</h3>

      ${t.itens.map((t,r)=>e`
          <div class="item-editor">
            <div class="item-editor__topo">
              <kk-input
                class="item-editor__descricao"
                placeholder=${n.prep.descricaoDoItem}
                .value=${t.descricao}
                @kk-input=${e=>i(r,`descricao`,e.target.value)}
              ></kk-input>
              <kk-icon-button
                name="trash"
                label=${n.prep.removerItem}
                @click=${()=>void Me(r)}
              ></kk-icon-button>
            </div>

            <div class="formulario__par">
              <kk-input
                size="small"
                placeholder=${n.prep.quantidade}
                .value=${t.quantidade}
                @kk-input=${e=>i(r,`quantidade`,e.target.value)}
              ></kk-input>
              <kk-input
                size="small"
                type="date"
                .value=${t.vencimento}
                @kk-change=${e=>i(r,`vencimento`,e.target.value)}
              ></kk-input>
            </div>

            <kk-input
              size="small"
              placeholder=${n.prep.observacoes}
              .value=${t.observacoes}
              @kk-input=${e=>i(r,`observacoes`,e.target.value)}
            ></kk-input>
          </div>
        `)}

      <kk-button
        outline
        @click=${()=>{r({itens:[...(R??t).itens,X()]}),c()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${n.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Ne()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,c()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Me(e){await o({titulo:n.prep.removerItem,texto:n.prep.removerItemTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&R!==null&&(R={...R,itens:R.itens.filter((t,n)=>n!==e)},c())}async function Ne(){let e=R;if(e===null)return;let t=e.itens.some(e=>e.descricao.trim()!==``);e.nome.trim()===``&&!t?(R=null,c()):(await v(e),R=null,s(n.prep.kitSalvo),await G())}function Pe(){return{id:0,item:``,categoria:u,quantidade:1,peso:0,kcal:0,vencimento:``}}async function Fe(){let e=z;e!==null&&(await f({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?u:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:Ie(e.vencimento)}),z=null,s(n.prep.itemSalvo),await G())}function Ie(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function Le(t){let r=e=>{z={...z??t,...e}};return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.prep.editarItem:n.prep.novoItem}
      </h2>

      <kk-input
        label=${n.prep.item}
        .value=${t.item}
        @kk-input=${e=>r({item:e.target.value})}
      ></kk-input>

      <kk-select
        label=${n.prep.categoria}
        .value=${String(Math.max(0,d.findIndex(e=>e.nome===t.categoria)))}
        @kk-change=${e=>{let t=Number(e.target.value);r({categoria:d[t]?.nome??u})}}
      >
        ${d.map((t,n)=>e`
            <kk-option value=${String(n)}>${t.emoji} ${t.nome}</kk-option>
          `)}
      </kk-select>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${n.prep.quantidade}
          .value=${String(t.quantidade)}
          @kk-input=${e=>r({quantidade:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="number"
          min="0"
          label=${n.prep.pesoUnitario}
          .value=${String(t.peso)}
          @kk-input=${e=>r({peso:Number(e.target.value)})}
        ></kk-input>
      </div>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${n.prep.kcal}
          .value=${String(t.kcal)}
          @kk-input=${e=>r({kcal:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="date"
          label=${n.prep.validade}
          .value=${t.vencimento}
          @kk-change=${e=>r({vencimento:e.target.value})}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Fe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{z=null,c()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Re(r){let a=e=>{N={...N,...e,pessoas:Math.max(1,e.pessoas??N.pessoas)},ce(N),c()},o=ae(M,N);return e`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="calculator"></kk-icon>
        <span class="tally__titulo">
          ${n.prep.calculadora}
          <small>${n.prep.calculadoraAjuda}</small>
        </span>
      </div>

      <div class="formulario__par">
        <kk-select
          label=${n.prep.faixaEtaria}
          size="small"
          .value=${N.idade}
          @kk-change=${e=>a({idade:e.target.value})}
        >
          ${he.map(t=>e`<kk-option value=${t}>${m(t)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${n.prep.atividade}
          size="small"
          .value=${N.atividade}
          @kk-change=${e=>a({atividade:e.target.value})}
        >
          ${fe.map(t=>e`<kk-option value=${t}>${de(t)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${n.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${n.prep.menosPessoas}
          @click=${()=>a({pessoas:N.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${N.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${n.prep.maisPessoas}
          @click=${()=>a({pessoas:N.pessoas+1})}
        ></kk-icon-button>
      </div>

      <div class="placares">
        <div class="placar">
          <span class="placar__valor" data-tom=${r.tom===`sucesso`?`sucesso`:r.tom===`aviso`?`aviso`:`perigo`}>
            ${r.dias}
          </span>
          <span class="placar__rotulo">${n.prep.diasDeAutonomia}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${i(r.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${n.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${i(r.pesoTotalKg)} kg</span>
          <span class="placar__rotulo">${n.prep.pesoTotal}</span>
        </div>
      </div>

      <div class="progresso-leitura__barra" role="presentation">
        <div
          class="progresso-leitura__preenchido"
          style=${`width:${r.metaPercentual}%`}
        ></div>
      </div>
      <p class="discreto">
        ${n.prep.metaAutonomia(r.metaPercentual)} ·
        ${n.prep.necessidadeDiaria(i(r.doGrupo))}
      </p>

      <h3 class="secao">${n.prep.logistica}</h3>
      <div class="placares">
        <div class="placar">
          <span class="placar__valor">${o.diasFrios}</span>
          <span class="placar__rotulo">${n.prep.diasSemFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${o.diasTotais}</span>
          <span class="placar__rotulo">${n.prep.diasComFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor" data-tom=${o.vulneravel?`perigo`:`sucesso`}>
            ${o.fibras}
          </span>
          <span class="placar__rotulo">${n.prep.itensDeFibra}</span>
        </div>
      </div>

      ${o.vulneravel?e`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${n.prep.vulneravel}
            </kk-alert>
          `:t}
    </div>
  `}function Z(r){let i=me(r);return i===null?t:i<0?e`<kk-badge variant="danger" pill>${n.prep.vencidoHa(Math.abs(i))}</kk-badge>`:i===0?e`<kk-badge variant="danger" pill>${n.prep.venceHoje}</kk-badge>`:i<7?e`<kk-badge variant="warning" pill>${n.prep.venceEm(i)}</kk-badge>`:t}function ze(r){let o=re(r.categoria),s=ne(r);return e`
    <div class="registro" data-status=${ie(r)}>
      <span class="registro__avatar" style=${`background:color-mix(in oklab, ${o.cor} 15%, transparent)`}>
        ${o.emoji}
      </span>

      <button class="registro__alvo" @click=${()=>void Q(r)}>
        <span class="registro__topo">
          <span class="registro__titulo">${r.item}</span>
          ${Z(r)}
        </span>
        <span class="registro__resumo">
          ${n.prep.resumoDoItem(r.quantidade,i(r.peso_unitario))}
          ${s===null?``:`· ${i(s)} kcal`}
        </span>
        ${r.data_vencimento===0?t:e`<span class="registro__resumo">${n.prep.vence(a(r.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${n.acoes.editar}
          @click=${()=>void Q(r)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.prep.excluirItem}
          @click=${()=>void Be(r)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function Q(e){if(e.id===void 0)return;let t=await ge(e.id)??e;z={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:r(t.data_vencimento)},c()}async function Be(e){await o({titulo:n.prep.excluirItem,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await oe(e.id),s(n.prep.itemExcluido),await G())}function Ve(){if(z!==null)return Le(z);let r=le(M,N),i=pe(M),a=se(_e(M,L));return e`
    ${i.total===0?t:e`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${I}
              @click=${()=>{I=!I,c()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${n.prep.alertas(i.total)}</span>
              <kk-icon name=${I?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${I?e`
                  <div class="alertas__lista">
                    ${[...i.vencidos,...i.aVencer].map(t=>e`
                        <span class="alertas__item">
                          ${Z(t)}
                          <span>${t.item}</span>
                        </span>
                      `)}
                  </div>
                `:t}
          </div>
        `}

    ${Re(r)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.prep.buscarItens}
        .value=${L}
        @kk-input=${e=>{L=e.target.value,c()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${a.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${M.length===0?n.prep.semEstoque:n.prep.semEstoqueFiltro}</p>
          </div>
        `:e`
          <div class="grupos">
            ${a.map(n=>{let r=F.has(n.nome);return e`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${r}
                    @click=${()=>{let e=new Set(F);e.delete(n.nome)||e.add(n.nome),F=e,c()}}
                  >
                    <span class="grupo__emoji">${n.info.emoji}</span>
                    <span class="grupo__nome">${n.nome}</span>
                    <span class="grupo__contagem">${n.itens.length}</span>
                    <kk-icon name=${r?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${r?e`
                        <div class="registros">
                          ${n.itens.map(e=>ze(e))}
                        </div>
                      `:t}
                </div>
              `})}
          </div>
        `}
  `}function He(e){return e instanceof w?n.prep.semPrf:(e instanceof b,n.prep.gestoRecusado)}async function $(e){if(!U){U=!0,H=``,c();try{await e()}catch(e){H=He(e)}finally{U=!1,c()}}}function Ue(){return $(async()=>{B=await S(),V=await T()})}function We(){return $(async()=>{B=await k(),V=await T()})}async function Ge(e){let t=e.files?.[0];if(t===void 0||B===null)return;let r=await l({titulo:n.prep.nomeDoDocumento,valor:t.name,placeholder:n.prep.nomeDoDocumento,rotuloConfirmar:n.acoes.salvar,erroVazio:n.prep.informeNome});e.value=``,r!==null&&(await y(B,t,r),V=await T(),s(n.prep.documentoGuardado),c())}function Ke(){let r=H===``?t:e`<p class="erro">${H}</p>`;return B===null&&!E()?e`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${n.prep.configurarBiometria}</h2>
        <p class="discreto">${n.prep.biometriaAjuda}</p>
        ${x()?e`
              ${r}
              <kk-button variant="primary" ?loading=${U} @click=${()=>void Ue()}>
                <kk-icon slot="prefix" name="fingerprint"></kk-icon>${n.prep.criarCofre}
              </kk-button>
            `:e`<p class="erro">${n.prep.semBiometria}</p>`}
      </div>
    `:B===null?e`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${n.prep.cofreTrancado}</h2>
        <p class="discreto">${n.prep.destranqueAjuda}</p>
        ${r}
        <kk-button
          variant="primary"
          ?loading=${U}
          @click=${()=>void We()}
        >
          <kk-icon slot="prefix" name="fingerprint"></kk-icon>${n.prep.destrancarComBiometria}
        </kk-button>
      </div>
    `:e`
    <div class="cofre__acoes">
      <label class="escolher-arquivo">
        <kk-icon name="upload"></kk-icon>
        ${n.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void Ge(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{q(),c()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${n.prep.trancar}
      </kk-button>
    </div>

    ${V.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${n.prep.semDocumentos}</p>
          </div>
        `:e`
          <div class="registros">
            ${V.map(t=>e`
                <div class="registro">
                  <span class="registro__avatar"><kk-icon name="file"></kk-icon></span>

                  <button class="registro__alvo" @click=${()=>void qe(t)}>
                    <span class="registro__titulo">${t.rotulo}</span>
                    <span class="registro__resumo">
                      ${t.tipo_mime} · ${a(t.data_criacao)}
                    </span>
                  </button>

                  <div class="registro__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.renomear}
                      @click=${()=>void Je(t)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${n.prep.excluirDocumento}
                      @click=${()=>void Ye(t)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${W===null?t:e`
          <kk-dialog
            open
            label=${W.rotulo}
            @kk-after-hide=${()=>{J(),c()}}
          >
            ${W.tipo.startsWith(`image/`)?e`<img class="previa" src=${W.url} alt=${W.rotulo} />`:e`
                  <p>${n.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${W.url} download=${W.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${n.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `}async function qe(e){if(B!==null)try{J(),W={rotulo:e.rotulo,url:await O(B,e),tipo:e.tipo_mime},c()}catch{s(n.prep.falhaAoDecifrar,`warning`)}}async function Je(e){let t=await l({titulo:n.prep.renomearDocumento,valor:e.rotulo,placeholder:n.prep.nomeDoDocumento,rotuloConfirmar:n.acoes.renomear,erroVazio:n.prep.informeNome});t!==null&&t!==e.rotulo&&(await D(e,t),V=await T(),c())}async function Ye(e){await o({titulo:n.prep.excluirDocumento,texto:n.prep.excluirDocumentoTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await C(e.id),V=await T(),s(n.prep.documentoExcluido),c())}var Xe={kits:n.prep.kits,estoque:n.prep.estoque,cofre:n.prep.cofre},Ze={voltarPara(){return`home`},aoVoltar(e){let t=K(e);return t===`estoque`&&z!==null?(z=null,c(),!0):t===`kits`&&R!==null&&(R=null,c(),!0)},titulo(e){return Xe[K(e)]},acoes(t){let r=K(t);if(r===`kits`&&R===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.prep.novoKit}
          @click=${()=>{R=ke(),c()}}
        ></kk-icon-button>
      `;if(r===`estoque`&&z===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.prep.novoItem}
          @click=${()=>{z=Pe(),c()}}
        ></kk-icon-button>
      `},conteudo(e){let t=K(e);t!==`estoque`&&(z=null),t!==`kits`&&(R=null);let n=we.espera();return n===null?t===`estoque`?Ve():t===`cofre`?Ke():R===null?De():je(R):n}};export{Ze as telaPrep};