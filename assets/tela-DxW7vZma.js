import{r as e}from"./numero-B0JnuQJ5.js";import{c as t}from"./banco-CsCRyC2b.js";import{$ as n,S as r,X as i,_ as a,b as o,ct as s,ft as c,g as l,h as u,it as d,u as f,ut as p,v as ee,x as te,y as ne}from"./index-BBOYxO_i.js";import{CATEGORIAS as m,CATEGORIA_PADRAO as h,EMOJIS_DE_KIT as re,caloriasDoItem as ie,categoria as g}from"./dados-BgDpV8rv.js";import{FAIXAS as ae,NIVEIS as oe,alertas as se,calcularAutonomia as ce,calcularLogistica as _,carregarEstoque as v,diasParaVencer as y,excluirItem as le,lerPerfil as ue,obterItem as de,porCategoria as fe,rotuloDaFaixa as pe,rotuloDoNivel as me,salvarItem as he,salvarPerfil as ge,statusDeValidade as _e,visiveis as ve}from"./estoque-Buk0873C.js";import{alternarItem as ye,carregarKits as be,excluirKit as xe,itemMarcado as Se,kitCompleto as Ce,lerProgresso as we,marcadosDoKit as Te,obterKit as Ee,percentualDoKit as De,salvarKit as Oe}from"./kits-DYxO6GuN.js";var b=16,x=12,S=new TextEncoder().encode(`kobi-note-cofre`),C=()=>t(`documentos_cofre`);async function w(e,t){let n=await crypto.subtle.importKey(`raw`,e,`HKDF`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`HKDF`,hash:`SHA-256`,salt:t,info:S},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function T(e,t){let n=crypto.getRandomValues(new Uint8Array(b)),r=crypto.getRandomValues(new Uint8Array(x)),i=await w(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,b),o.set(new Uint8Array(a),28),o}async function ke(e,t){let n=t.slice(0,b),r=t.slice(b,28),i=t.slice(28),a=await w(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}function E(){return C().todos()}async function Ae(e,t,n){await C().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await T(e,await t.arrayBuffer()),data_criacao:Date.now()})}function je(e,t){return C().salvar({...e,rotulo:t})}function Me(e){return C().excluir(e)}async function Ne(e,t){let n=await ke(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var D=[],O={},k=[],A=ue(),j=new Set,M=new Set,N=!1,P=``,F=null,I=null,L=null,R=[],z=``,B=!1,V=null,H=!1,U=!1,W=null;async function G(){[D,k]=await Promise.all([be(),v()]),O=we(),d()}function K(){H||U||W!==null||(U=!0,Fe(),(async()=>{try{await G(),H=!0}catch(e){console.error(`prep: a carga falhou.`,e),W=r(e)}finally{U=!1,d()}})())}function Pe(){W=null,K(),d()}function q(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function J(){L=null,R=[],z=``,Y()}function Y(){V!==null&&URL.revokeObjectURL(V.url),V=null}var X=!1;function Fe(){X||(X=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&J()}))}function Ie(e,t){let n=Se(O,e,t.id),r=[t.quantidade,t.observacoes,t.data_vencimento===0?``:s.prep.vence(i(t.data_vencimento))].filter(e=>e!==``).join(` · `);return c`
    <div class="registro" ?data-marcado=${n}>
      <span class="registro__avatar">
        <kk-icon name=${n?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${n}
        @click=${()=>{O=ye(O,e,t.id),d()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${t.descricao}</span>
        </span>
        ${r===``?p:c`<span class="registro__resumo">${r}</span>`}
      </button>
    </div>
  `}function Le(){return D.length===0?c`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${s.prep.semKits}</p>
      </div>
    `:c`
    <div class="grupos">
      ${D.map(e=>{let t=String(e.id),n=j.has(t),r=Ce(O,e);return c`
          <div class="grupo" ?data-completo=${r}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${n}
              @click=${()=>{let e=new Set(j);e.delete(t)||e.add(t),j=e,d()}}
            >
              <span class="grupo__emoji">${e.icone===``?`📋`:e.icone}</span>
              <span class="grupo__nome">${e.nome}</span>
              <span class="grupo__contagem">
                ${Te(O,e)}/${e.itens.length}
              </span>
              <kk-icon name=${n?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${e.itens.length===0?p:c`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${De(O,e)}%`}
                    ></div>
                  </div>
                `}

            ${n?c`
                  <div class="registros">
                    ${e.itens.map(t=>Ie(e,t))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${s.acoes.editar}
                      @click=${()=>void Be(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${s.acoes.excluir}
                      @click=${()=>void Re(e)}
                    ></kk-icon-button>
                  </div>
                `:p}
          </div>
        `})}
    </div>
  `}async function Re(e){await u({titulo:s.prep.excluirKit,texto:s.acervo.excluirTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})&&(O=await xe(e,O),f(s.prep.kitExcluido),await G())}function Z(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function ze(){return{id:0,nome:``,icone:``,itens:[Z()],criacao:0}}async function Be(e){if(e.id===void 0)return;let t=await Ee(e.id)??e;F={id:t.id??0,nome:t.nome,icone:t.icone,criacao:t.data_criacao,itens:t.itens.length===0?[Z()]:t.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:n(e.data_vencimento)}))},d()}function Ve(e){let t=t=>{F={...F??e,...t}},n=(n,r,i)=>{t({itens:(F??e).itens.map((e,t)=>t===n?{...e,[r]:i}:e)})};return c`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?s.prep.editarKit:s.prep.novoKit}
      </h2>

      <kk-input
        label=${s.prep.nomeDoKit}
        .value=${e.nome}
        @kk-input=${e=>t({nome:e.target.value})}
      ></kk-input>

      <h3 class="secao">${s.prep.emoji}</h3>
      <p class="formulario__ajuda">${s.prep.emojiAjuda}</p>
      <div class="chips chips--em-linha">
        ${re.map(n=>c`
            <button
              type="button"
              class="chip chip--emoji"
              ?data-ativo=${e.icone===n}
              title=${n}
              @click=${()=>{t({icone:e.icone===n?``:n}),d()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h3 class="secao">${s.prep.itens}</h3>

      ${e.itens.map((e,t)=>c`
          <div class="item-editor">
            <div class="item-editor__topo">
              <kk-input
                class="item-editor__descricao"
                placeholder=${s.prep.descricaoDoItem}
                .value=${e.descricao}
                @kk-input=${e=>n(t,`descricao`,e.target.value)}
              ></kk-input>
              <kk-icon-button
                name="trash"
                label=${s.prep.removerItem}
                @click=${()=>void He(t)}
              ></kk-icon-button>
            </div>

            <div class="formulario__par">
              <kk-input
                size="small"
                placeholder=${s.prep.quantidade}
                .value=${e.quantidade}
                @kk-input=${e=>n(t,`quantidade`,e.target.value)}
              ></kk-input>
              <kk-input
                size="small"
                type="date"
                .value=${e.vencimento}
                @kk-change=${e=>n(t,`vencimento`,e.target.value)}
              ></kk-input>
            </div>

            <kk-input
              size="small"
              placeholder=${s.prep.observacoes}
              .value=${e.observacoes}
              @kk-input=${e=>n(t,`observacoes`,e.target.value)}
            ></kk-input>
          </div>
        `)}

      <kk-button
        outline
        @click=${()=>{t({itens:[...(F??e).itens,Z()]}),d()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${s.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Ue()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,d()}}
        >
          ${s.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function He(e){await u({titulo:s.prep.removerItem,texto:s.prep.removerItemTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})&&F!==null&&(F={...F,itens:F.itens.filter((t,n)=>n!==e)},d())}async function Ue(){let e=F;if(e===null)return;let t=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!t){F=null,d();return}await Oe(e),F=null,f(s.prep.kitSalvo),await G()}function We(){return{id:0,item:``,categoria:h,quantidade:1,peso:0,kcal:0,vencimento:``}}async function Ge(){let e=I;e!==null&&(await he({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?h:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:Ke(e.vencimento)}),I=null,f(s.prep.itemSalvo),await G())}function Ke(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function qe(e){let t=t=>{I={...I??e,...t}};return c`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?s.prep.editarItem:s.prep.novoItem}
      </h2>

      <kk-input
        label=${s.prep.item}
        .value=${e.item}
        @kk-input=${e=>t({item:e.target.value})}
      ></kk-input>

      <kk-select
        label=${s.prep.categoria}
        .value=${String(Math.max(0,m.findIndex(t=>t.nome===e.categoria)))}
        @kk-change=${e=>{let n=Number(e.target.value);t({categoria:m[n]?.nome??h})}}
      >
        ${m.map((e,t)=>c`
            <kk-option value=${String(t)}>${e.emoji} ${e.nome}</kk-option>
          `)}
      </kk-select>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${s.prep.quantidade}
          .value=${String(e.quantidade)}
          @kk-input=${e=>t({quantidade:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="number"
          min="0"
          label=${s.prep.pesoUnitario}
          .value=${String(e.peso)}
          @kk-input=${e=>t({peso:Number(e.target.value)})}
        ></kk-input>
      </div>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${s.prep.kcal}
          .value=${String(e.kcal)}
          @kk-input=${e=>t({kcal:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="date"
          label=${s.prep.validade}
          .value=${e.vencimento}
          @kk-change=${e=>t({vencimento:e.target.value})}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Ge()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,d()}}
        >
          ${s.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Je(t){let n=e=>{A={...A,...e,pessoas:Math.max(1,e.pessoas??A.pessoas)},ge(A),d()},r=_(k,A);return c`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="calculator"></kk-icon>
        <span class="tally__titulo">
          ${s.prep.calculadora}
          <small>${s.prep.calculadoraAjuda}</small>
        </span>
      </div>

      <div class="formulario__par">
        <kk-select
          label=${s.prep.faixaEtaria}
          size="small"
          .value=${A.idade}
          @kk-change=${e=>n({idade:e.target.value})}
        >
          ${ae.map(e=>c`<kk-option value=${e}>${pe(e)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${s.prep.atividade}
          size="small"
          .value=${A.atividade}
          @kk-change=${e=>n({atividade:e.target.value})}
        >
          ${oe.map(e=>c`<kk-option value=${e}>${me(e)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${s.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${s.prep.menosPessoas}
          @click=${()=>n({pessoas:A.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${A.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${s.prep.maisPessoas}
          @click=${()=>n({pessoas:A.pessoas+1})}
        ></kk-icon-button>
      </div>

      <div class="placares">
        <div class="placar">
          <span class="placar__valor" data-tom=${t.tom===`sucesso`?`sucesso`:t.tom===`aviso`?`aviso`:`perigo`}>
            ${t.dias}
          </span>
          <span class="placar__rotulo">${s.prep.diasDeAutonomia}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${e(t.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${s.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${e(t.pesoTotalKg)} kg</span>
          <span class="placar__rotulo">${s.prep.pesoTotal}</span>
        </div>
      </div>

      <div class="progresso-leitura__barra" role="presentation">
        <div
          class="progresso-leitura__preenchido"
          style=${`width:${t.metaPercentual}%`}
        ></div>
      </div>
      <p class="discreto">
        ${s.prep.metaAutonomia(t.metaPercentual)} ·
        ${s.prep.necessidadeDiaria(e(t.doGrupo))}
      </p>

      <h3 class="secao">${s.prep.logistica}</h3>
      <div class="placares">
        <div class="placar">
          <span class="placar__valor">${r.diasFrios}</span>
          <span class="placar__rotulo">${s.prep.diasSemFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${r.diasTotais}</span>
          <span class="placar__rotulo">${s.prep.diasComFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor" data-tom=${r.vulneravel?`perigo`:`sucesso`}>
            ${r.fibras}
          </span>
          <span class="placar__rotulo">${s.prep.itensDeFibra}</span>
        </div>
      </div>

      ${r.vulneravel?c`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${s.prep.vulneravel}
            </kk-alert>
          `:p}
    </div>
  `}function Q(e){let t=y(e);return t===null?p:t<0?c`<kk-badge variant="danger" pill>${s.prep.vencidoHa(Math.abs(t))}</kk-badge>`:t===0?c`<kk-badge variant="danger" pill>${s.prep.venceHoje}</kk-badge>`:t<7?c`<kk-badge variant="warning" pill>${s.prep.venceEm(t)}</kk-badge>`:p}function Ye(t){let n=g(t.categoria),r=ie(t);return c`
    <div class="registro" data-status=${_e(t)}>
      <span class="registro__avatar" style=${`background:color-mix(in oklab, ${n.cor} 15%, transparent)`}>
        ${n.emoji}
      </span>

      <button class="registro__alvo" @click=${()=>void $(t)}>
        <span class="registro__topo">
          <span class="registro__titulo">${t.item}</span>
          ${Q(t)}
        </span>
        <span class="registro__resumo">
          ${s.prep.resumoDoItem(t.quantidade,e(t.peso_unitario))}
          ${r===null?``:`· ${e(r)} kcal`}
        </span>
        ${t.data_vencimento===0?p:c`<span class="registro__resumo">${s.prep.vence(i(t.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${s.acoes.editar}
          @click=${()=>void $(t)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${s.prep.excluirItem}
          @click=${()=>void Xe(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function $(e){if(e.id===void 0)return;let t=await de(e.id)??e;I={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:n(t.data_vencimento)},d()}async function Xe(e){await u({titulo:s.prep.excluirItem,texto:s.acervo.excluirTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await le(e.id),f(s.prep.itemExcluido),await G())}function Ze(){if(I!==null)return qe(I);let e=ce(k,A),t=se(k),n=fe(ve(k,P));return c`
    ${t.total===0?p:c`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${N}
              @click=${()=>{N=!N,d()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${s.prep.alertas(t.total)}</span>
              <kk-icon name=${N?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${N?c`
                  <div class="alertas__lista">
                    ${[...t.vencidos,...t.aVencer].map(e=>c`
                        <span class="alertas__item">
                          ${Q(e)}
                          <span>${e.item}</span>
                        </span>
                      `)}
                  </div>
                `:p}
          </div>
        `}

    ${Je(e)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${s.prep.buscarItens}
        .value=${P}
        @kk-input=${e=>{P=e.target.value,d()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${n.length===0?c`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${k.length===0?s.prep.semEstoque:s.prep.semEstoqueFiltro}</p>
          </div>
        `:c`
          <div class="grupos">
            ${n.map(e=>{let t=M.has(e.nome);return c`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${t}
                    @click=${()=>{let t=new Set(M);t.delete(e.nome)||t.add(e.nome),M=t,d()}}
                  >
                    <span class="grupo__emoji">${e.info.emoji}</span>
                    <span class="grupo__nome">${e.nome}</span>
                    <span class="grupo__contagem">${e.itens.length}</span>
                    <kk-icon name=${t?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${t?c`
                        <div class="registros">
                          ${e.itens.map(e=>Ye(e))}
                        </div>
                      `:p}
                </div>
              `})}
          </div>
        `}
  `}function Qe(e){return e instanceof ee?s.prep.semPrf:(e instanceof a,s.prep.gestoRecusado)}async function $e(e){if(!B){B=!0,z=``,d();try{await e()}catch(e){z=Qe(e)}finally{B=!1,d()}}}function et(){return $e(async()=>{L=await ne(),R=await E()})}async function tt(e){let t=e.files?.[0];if(t===void 0||L===null)return;let n=await l({titulo:s.prep.nomeDoDocumento,valor:t.name,placeholder:s.prep.nomeDoDocumento,rotuloConfirmar:s.acoes.salvar,erroVazio:s.prep.informeNome});e.value=``,n!==null&&(await Ae(L,t,n),R=await E(),f(s.prep.documentoGuardado),d())}function nt(){let e=z===``?p:c`<p class="erro">${z}</p>`;return L===null?c`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${s.prep.cofreTrancado}</h2>
        <p class="discreto">${s.prep.destranqueAjuda}</p>
        ${o()?c`
              ${e}
              <kk-button
                variant="primary"
                ?loading=${B}
                @click=${()=>void et()}
              >
                <kk-icon slot="prefix" name="fingerprint"></kk-icon>${s.prep.destrancarComBiometria}
              </kk-button>
            `:c`<p class="erro">${s.prep.semBiometria}</p>`}
      </div>
    `:c`
    <div class="cofre__acoes">
      <label class="cofre__enviar">
        <kk-icon name="upload"></kk-icon>
        ${s.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void tt(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{J(),d()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${s.prep.trancar}
      </kk-button>
    </div>

    ${R.length===0?c`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${s.prep.semDocumentos}</p>
          </div>
        `:c`
          <div class="registros">
            ${R.map(e=>c`
                <div class="registro">
                  <span class="registro__avatar"><kk-icon name="file"></kk-icon></span>

                  <button class="registro__alvo" @click=${()=>void rt(e)}>
                    <span class="registro__titulo">${e.rotulo}</span>
                    <span class="registro__resumo">
                      ${e.tipo_mime} · ${i(e.data_criacao)}
                    </span>
                  </button>

                  <div class="registro__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${s.acoes.renomear}
                      @click=${()=>void it(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${s.prep.excluirDocumento}
                      @click=${()=>void at(e)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${V===null?p:c`
          <kk-dialog
            open
            label=${V.rotulo}
            @kk-after-hide=${()=>{Y(),d()}}
          >
            ${V.tipo.startsWith(`image/`)?c`<img class="previa" src=${V.url} alt=${V.rotulo} />`:c`
                  <p>${s.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${V.url} download=${V.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${s.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `}async function rt(e){if(L!==null)try{Y(),V={rotulo:e.rotulo,url:await Ne(L,e),tipo:e.tipo_mime},d()}catch{f(s.prep.falhaAoDecifrar,`warning`)}}async function it(e){let t=await l({titulo:s.prep.renomearDocumento,valor:e.rotulo,placeholder:s.prep.nomeDoDocumento,rotuloConfirmar:s.acoes.renomear,erroVazio:s.prep.informeNome});t!==null&&t!==e.rotulo&&(await je(e,t),R=await E(),d())}async function at(e){await u({titulo:s.prep.excluirDocumento,texto:s.prep.excluirDocumentoTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await Me(e.id),R=await E(),f(s.prep.documentoExcluido),d())}var ot={kits:s.prep.kits,estoque:s.prep.estoque,cofre:s.prep.cofre},st={voltarPara(){return`home`},aoVoltar(e){let t=q(e);return t===`estoque`&&I!==null?(I=null,d(),!0):t===`kits`&&F!==null&&(F=null,d(),!0)},titulo(e){return ot[q(e)]},acoes(e){let t=q(e);if(t===`kits`&&F===null)return c`
        <kk-icon-button
          name="plus"
          label=${s.prep.novoKit}
          @click=${()=>{F=ze(),d()}}
        ></kk-icon-button>
      `;if(t===`estoque`&&I===null)return c`
        <kk-icon-button
          name="plus"
          label=${s.prep.novoItem}
          @click=${()=>{I=We(),d()}}
        ></kk-icon-button>
      `},conteudo(e){if(K(),W!==null)return te(W,Pe);let t=q(e);return t!==`estoque`&&(I=null),t!==`kits`&&(F=null),H?t===`estoque`?Ze():t===`cofre`?nt():F===null?Le():Ve(F):c`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{st as telaPrep};