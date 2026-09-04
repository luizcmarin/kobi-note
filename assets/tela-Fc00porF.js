import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r}from"./banco-u8JVNTlT.js";import{i,t as a}from"./data-DRe9t3tD.js";import{E as o,c as s,o as c,r as l,s as u}from"./index-CRLpDONK.js";import{CATEGORIAS as d,CATEGORIA_PADRAO as f,EMOJIS_DE_KIT as ee,caloriasDoItem as te,categoria as ne}from"./dados-BgDpV8rv.js";import{FAIXAS as re,NIVEIS as ie,alertas as ae,calcularAutonomia as oe,calcularLogistica as se,carregarEstoque as ce,diasParaVencer as p,excluirItem as le,lerPerfil as ue,obterItem as de,porCategoria as fe,rotuloDaFaixa as pe,rotuloDoNivel as me,salvarItem as he,salvarPerfil as ge,statusDeValidade as _e,visiveis as ve}from"./estoque-BW0Nld9G.js";import{alternarItem as m,carregarKits as h,excluirKit as ye,itemMarcado as be,kitCompleto as xe,lerProgresso as Se,marcadosDoKit as Ce,obterKit as we,percentualDoKit as Te,salvarKit as Ee}from"./kits-JEn4ZRQO.js";var g=`note_cofre_pin`,De=2e5,_=16,Oe=12,v=()=>r(`documentos_cofre`);async function y(e,t){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:De,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function b(e,t){let n=crypto.getRandomValues(new Uint8Array(_)),r=crypto.getRandomValues(new Uint8Array(Oe)),i=await y(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,_),o.set(new Uint8Array(a),28),o}async function x(e,t){let n=t.slice(0,_),r=t.slice(_,28),i=t.slice(28),a=await y(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}async function S(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function C(){return localStorage.getItem(g)!==null}async function w(e){return await S(e)===localStorage.getItem(g)}async function T(e){localStorage.setItem(g,await S(e))}function E(){return v().todos()}async function ke(e,t,n){await v().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await b(e,await t.arrayBuffer()),data_criacao:Date.now()})}function Ae(e,t){return v().salvar({...e,rotulo:t})}function je(e){return v().excluir(e)}async function Me(e,t){let n=await x(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var D=[],O={},k=[],A=ue(),j=new Set,M=new Set,N=!1,P=``,F=null,I=null,L=null,R=[],z=``,B=``,V=``,H=null,U=!1,W=!1;async function G(){[D,k]=await Promise.all([h(),ce()]),O=Se(),o()}function Ne(){U||W||(W=!0,Pe(),(async()=>{try{await G(),U=!0}finally{W=!1,o()}})())}function K(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function q(){L=null,R=[],z=``,B=``,V=``,J()}function J(){H!==null&&URL.revokeObjectURL(H.url),H=null}var Y=!1;function Pe(){Y||(Y=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&q()}))}function Fe(r,i){let s=be(O,r,i.id),c=[i.quantidade,i.observacoes,i.data_vencimento===0?``:n.prep.vence(a(i.data_vencimento))].filter(e=>e!==``).join(` · `);return e`
    <div class="registro" ?data-marcado=${s}>
      <span class="registro__avatar">
        <kk-icon name=${s?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${s}
        @click=${()=>{O=m(O,r,i.id),o()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${i.descricao}</span>
        </span>
        ${c===``?t:e`<span class="registro__resumo">${c}</span>`}
      </button>
    </div>
  `}function Ie(){return D.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${n.prep.semKits}</p>
      </div>
    `:e`
    <div class="grupos">
      ${D.map(r=>{let i=String(r.id),a=j.has(i),s=xe(O,r);return e`
          <div class="grupo" ?data-completo=${s}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${a}
              @click=${()=>{let e=new Set(j);e.delete(i)||e.add(i),j=e,o()}}
            >
              <span class="grupo__emoji">${r.icone===``?`📋`:r.icone}</span>
              <span class="grupo__nome">${r.nome}</span>
              <span class="grupo__contagem">
                ${Ce(O,r)}/${r.itens.length}
              </span>
              <kk-icon name=${a?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${r.itens.length===0?t:e`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${Te(O,r)}%`}
                    ></div>
                  </div>
                `}

            ${a?e`
                  <div class="registros">
                    ${r.itens.map(e=>Fe(r,e))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.editar}
                      @click=${()=>void ze(r)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${n.acoes.excluir}
                      @click=${()=>void Le(r)}
                    ></kk-icon-button>
                  </div>
                `:t}
          </div>
        `})}
    </div>
  `}async function Le(e){await c({titulo:n.prep.excluirKit,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(O=await ye(e,O),l(n.prep.kitExcluido),await G())}function X(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function Re(){return{id:0,nome:``,icone:``,itens:[X()],criacao:0}}async function ze(e){if(e.id===void 0)return;let t=await we(e.id)??e;F={id:t.id??0,nome:t.nome,icone:t.icone,criacao:t.data_criacao,itens:t.itens.length===0?[X()]:t.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:i(e.data_vencimento)}))},o()}function Be(t){let r=e=>{F={...F??t,...e}},i=(e,n,i)=>{r({itens:(F??t).itens.map((t,r)=>r===e?{...t,[n]:i}:t)})};return e`
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
        ${ee.map(n=>e`
            <button
              type="button"
              class="chip chip--emoji"
              ?data-ativo=${t.icone===n}
              title=${n}
              @click=${()=>{r({icone:t.icone===n?``:n}),o()}}
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
                @click=${()=>void Ve(r)}
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
        @click=${()=>{r({itens:[...(F??t).itens,X()]}),o()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${n.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void He()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,o()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Ve(e){!await c({titulo:n.prep.removerItem,texto:n.prep.removerItemTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||F===null||(F={...F,itens:F.itens.filter((t,n)=>n!==e)},o())}async function He(){let e=F;if(e===null)return;let t=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!t){F=null,o();return}await Ee(e),F=null,l(n.prep.kitSalvo),await G()}function Ue(){return{id:0,item:``,categoria:f,quantidade:1,peso:0,kcal:0,vencimento:``}}async function We(){let e=I;e!==null&&(await he({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?f:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:Ge(e.vencimento)}),I=null,l(n.prep.itemSalvo),await G())}function Ge(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function Ke(t){let r=e=>{I={...I??t,...e}};return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.prep.editarItem:n.prep.novoItem}
      </h2>

      <kk-input
        label=${n.prep.item}
        .value=${t.item}
        @kk-input=${e=>r({item:e.target.value})}
      ></kk-input>

      <!--
        O valor da opção é o ÍNDICE, não o nome. O kk-option recusa espaço no
        value e troca cada um por underscore (com console.error), o que desligava
        a opção do nome longo gravado: a categoria não aparecia ao abrir o item
        e, ao escolher uma, gravava o nome com underscores, que a busca por nome
        depois não achava. O nome longo continua sendo o que persiste.
      -->
      <kk-select
        label=${n.prep.categoria}
        .value=${String(Math.max(0,d.findIndex(e=>e.nome===t.categoria)))}
        @kk-change=${e=>{let t=Number(e.target.value);r({categoria:d[t]?.nome??f})}}
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
        <kk-button variant="primary" @click=${()=>void We()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,o()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function qe(r){let i=e=>{A={...A,...e,pessoas:Math.max(1,e.pessoas??A.pessoas)},ge(A),o()},a=se(k,A);return e`
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
          .value=${A.idade}
          @kk-change=${e=>i({idade:e.target.value})}
        >
          ${re.map(t=>e`<kk-option value=${t}>${pe(t)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${n.prep.atividade}
          size="small"
          .value=${A.atividade}
          @kk-change=${e=>i({atividade:e.target.value})}
        >
          ${ie.map(t=>e`<kk-option value=${t}>${me(t)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${n.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${n.prep.menosPessoas}
          @click=${()=>i({pessoas:A.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${A.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${n.prep.maisPessoas}
          @click=${()=>i({pessoas:A.pessoas+1})}
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
          <span class="placar__valor">${s(r.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${n.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${s(r.pesoTotalKg)} kg</span>
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
        ${n.prep.necessidadeDiaria(s(r.doGrupo))}
      </p>

      <h3 class="secao">${n.prep.logistica}</h3>
      <div class="placares">
        <div class="placar">
          <span class="placar__valor">${a.diasFrios}</span>
          <span class="placar__rotulo">${n.prep.diasSemFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${a.diasTotais}</span>
          <span class="placar__rotulo">${n.prep.diasComFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor" data-tom=${a.vulneravel?`perigo`:`sucesso`}>
            ${a.fibras}
          </span>
          <span class="placar__rotulo">${n.prep.itensDeFibra}</span>
        </div>
      </div>

      ${a.vulneravel?e`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${n.prep.vulneravel}
            </kk-alert>
          `:t}
    </div>
  `}function Z(r){let i=p(r);return i===null?t:i<0?e`<kk-badge variant="danger" pill>${n.prep.vencidoHa(Math.abs(i))}</kk-badge>`:i===0?e`<kk-badge variant="danger" pill>${n.prep.venceHoje}</kk-badge>`:i<7?e`<kk-badge variant="warning" pill>${n.prep.venceEm(i)}</kk-badge>`:t}function Je(r){let i=ne(r.categoria),o=te(r);return e`
    <div class="registro" data-status=${_e(r)}>
      <span class="registro__avatar" style=${`background:color-mix(in oklab, ${i.cor} 15%, transparent)`}>
        ${i.emoji}
      </span>

      <button class="registro__alvo" @click=${()=>void Q(r)}>
        <span class="registro__topo">
          <span class="registro__titulo">${r.item}</span>
          ${Z(r)}
        </span>
        <span class="registro__resumo">
          ${n.prep.resumoDoItem(r.quantidade,s(r.peso_unitario))}
          ${o===null?``:`· ${s(o)} kcal`}
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
          @click=${()=>void Ye(r)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function Q(e){if(e.id===void 0)return;let t=await de(e.id)??e;I={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:i(t.data_vencimento)},o()}async function Ye(e){!await c({titulo:n.prep.excluirItem,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await le(e.id),l(n.prep.itemExcluido),await G())}function Xe(){if(I!==null)return Ke(I);let r=oe(k,A),i=ae(k),a=fe(ve(k,P));return e`
    ${i.total===0?t:e`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${N}
              @click=${()=>{N=!N,o()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${n.prep.alertas(i.total)}</span>
              <kk-icon name=${N?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${N?e`
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

    ${qe(r)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.prep.buscarItens}
        .value=${P}
        @kk-input=${e=>{P=e.target.value,o()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${a.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${k.length===0?n.prep.semEstoque:n.prep.semEstoqueFiltro}</p>
          </div>
        `:e`
          <div class="grupos">
            ${a.map(n=>{let r=M.has(n.nome);return e`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${r}
                    @click=${()=>{let e=new Set(M);e.delete(n.nome)||e.add(n.nome),M=e,o()}}
                  >
                    <span class="grupo__emoji">${n.info.emoji}</span>
                    <span class="grupo__nome">${n.nome}</span>
                    <span class="grupo__contagem">${n.itens.length}</span>
                    <kk-icon name=${r?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${r?e`
                        <div class="registros">
                          ${n.itens.map(e=>Je(e))}
                        </div>
                      `:t}
                </div>
              `})}
          </div>
        `}
  `}async function $(){if(V=``,z===``){V=n.prep.digitePin,o();return}if(!await w(z)){V=n.prep.pinIncorreto,z=``,o();return}L=z,z=``,R=await E(),o()}async function Ze(){if(V=``,z.length<4){V=n.prep.pinCurto(4),o();return}if(z!==B){V=n.prep.pinNaoConfere,o();return}await T(z),L=z,z=``,B=``,R=await E(),o()}async function Qe(e){let t=e.files?.[0];if(t===void 0||L===null)return;let r=await u({titulo:n.prep.nomeDoDocumento,valor:t.name,placeholder:n.prep.nomeDoDocumento,rotuloConfirmar:n.acoes.salvar,erroVazio:n.prep.informeNome});e.value=``,r!==null&&(await ke(L,t,r),R=await E(),l(n.prep.documentoGuardado),o())}function $e(){return C()?L===null?e`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${n.prep.cofreTrancado}</h2>
        <p class="discreto">${n.prep.destranqueAjuda}</p>

        <kk-input
          type="password"
          inputmode="numeric"
          password-toggle
          label=${n.prep.pin}
          .value=${z}
          @kk-input=${e=>{z=e.target.value}}
          @keydown=${e=>{e.key===`Enter`&&$()}}
        ></kk-input>

        ${V===``?t:e`<p class="erro">${V}</p>`}

        <kk-button variant="primary" @click=${()=>void $()}>
          <kk-icon slot="prefix" name="lock-open"></kk-icon>${n.prep.destrancar}
        </kk-button>
      </div>
    `:e`
    <div class="cofre__acoes">
      <label class="cofre__enviar">
        <kk-icon name="upload"></kk-icon>
        ${n.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void Qe(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{q(),o()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${n.prep.trancar}
      </kk-button>
    </div>

    ${R.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${n.prep.semDocumentos}</p>
          </div>
        `:e`
          <div class="registros">
            ${R.map(t=>e`
                <div class="registro">
                  <span class="registro__avatar"><kk-icon name="file"></kk-icon></span>

                  <button class="registro__alvo" @click=${()=>void et(t)}>
                    <span class="registro__titulo">${t.rotulo}</span>
                    <span class="registro__resumo">
                      ${t.tipo_mime} · ${a(t.data_criacao)}
                    </span>
                  </button>

                  <div class="registro__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.renomear}
                      @click=${()=>void tt(t)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${n.prep.excluirDocumento}
                      @click=${()=>void nt(t)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${H===null?t:e`
          <kk-dialog
            open
            label=${H.rotulo}
            @kk-after-hide=${()=>{J(),o()}}
          >
            ${H.tipo.startsWith(`image/`)?e`<img class="previa" src=${H.url} alt=${H.rotulo} />`:e`
                  <p>${n.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${H.url} download=${H.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${n.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `:e`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${n.prep.configurarPin}</h2>
        <p class="discreto">${n.prep.pinAjuda}</p>

        <kk-input
          type="password"
          inputmode="numeric"
          password-toggle
          label=${n.prep.pin}
          .value=${z}
          @kk-input=${e=>{z=e.target.value}}
        ></kk-input>
        <kk-input
          type="password"
          inputmode="numeric"
          label=${n.prep.confirmarPin}
          .value=${B}
          @kk-input=${e=>{B=e.target.value}}
        ></kk-input>

        ${V===``?t:e`<p class="erro">${V}</p>`}

        <kk-button variant="primary" @click=${()=>void Ze()}>
          <kk-icon slot="prefix" name="lock"></kk-icon>${n.prep.criarCofre}
        </kk-button>
      </div>
    `}async function et(e){if(L!==null)try{J(),H={rotulo:e.rotulo,url:await Me(L,e),tipo:e.tipo_mime},o()}catch{l(n.prep.falhaAoDecifrar,`warning`)}}async function tt(e){let t=await u({titulo:n.prep.renomearDocumento,valor:e.rotulo,placeholder:n.prep.nomeDoDocumento,rotuloConfirmar:n.acoes.renomear,erroVazio:n.prep.informeNome});t!==null&&t!==e.rotulo&&(await Ae(e,t),R=await E(),o())}async function nt(e){!await c({titulo:n.prep.excluirDocumento,texto:n.prep.excluirDocumentoTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await je(e.id),R=await E(),l(n.prep.documentoExcluido),o())}var rt={kits:n.prep.kits,estoque:n.prep.estoque,cofre:n.prep.cofre},it={voltarPara(){return`home`},aoVoltar(e){let t=K(e);return t===`estoque`&&I!==null?(I=null,o(),!0):t===`kits`&&F!==null&&(F=null,o(),!0)},titulo(e){return rt[K(e)]},acoes(t){let r=K(t);if(r===`kits`&&F===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.prep.novoKit}
          @click=${()=>{F=Re(),o()}}
        ></kk-icon-button>
      `;if(r===`estoque`&&I===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.prep.novoItem}
          @click=${()=>{I=Ue(),o()}}
        ></kk-icon-button>
      `},conteudo(t){Ne();let n=K(t);return n!==`estoque`&&(I=null),n!==`kits`&&(F=null),U?n===`estoque`?Xe():n===`cofre`?$e():F===null?Ie():Be(F):e`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{it as telaPrep};