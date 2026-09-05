import{a as e}from"./banco-u8JVNTlT.js";import{Q as t,at as n,g as r,h as i,m as a,nt as o,p as s,rt as c,u as l,y as u}from"./index-BIyMCMf-.js";import{CATEGORIAS as d,CATEGORIA_PADRAO as f,EMOJIS_DE_KIT as ee,caloriasDoItem as te,categoria as ne}from"./dados-BgDpV8rv.js";import{FAIXAS as re,NIVEIS as ie,alertas as ae,calcularAutonomia as oe,calcularLogistica as se,carregarEstoque as ce,diasParaVencer as p,excluirItem as le,lerPerfil as ue,obterItem as de,porCategoria as fe,rotuloDaFaixa as pe,rotuloDoNivel as me,salvarItem as he,salvarPerfil as ge,statusDeValidade as _e,visiveis as ve}from"./estoque-BW0Nld9G.js";import{alternarItem as m,carregarKits as h,excluirKit as ye,itemMarcado as be,kitCompleto as xe,lerProgresso as Se,marcadosDoKit as Ce,obterKit as we,percentualDoKit as Te,salvarKit as Ee}from"./kits-BSy67F7o.js";var g=`note_cofre_pin`,De=2e5,_=16,Oe=12,v=()=>e(`documentos_cofre`);async function y(e,t){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:De,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function b(e,t){let n=crypto.getRandomValues(new Uint8Array(_)),r=crypto.getRandomValues(new Uint8Array(Oe)),i=await y(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,_),o.set(new Uint8Array(a),28),o}async function x(e,t){let n=t.slice(0,_),r=t.slice(_,28),i=t.slice(28),a=await y(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}async function S(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function C(){return localStorage.getItem(g)!==null}async function w(e){return await S(e)===localStorage.getItem(g)}async function T(e){localStorage.setItem(g,await S(e))}function E(){return v().todos()}async function ke(e,t,n){await v().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await b(e,await t.arrayBuffer()),data_criacao:Date.now()})}function Ae(e,t){return v().salvar({...e,rotulo:t})}function je(e){return v().excluir(e)}async function Me(e,t){let n=await x(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var D=[],O={},k=[],A=ue(),j=new Set,M=new Set,N=!1,P=``,F=null,I=null,L=null,R=[],z=``,B=``,V=``,H=null,U=!1,W=!1;async function G(){[D,k]=await Promise.all([h(),ce()]),O=Se(),t()}function Ne(){U||W||(W=!0,Pe(),(async()=>{try{await G(),U=!0}finally{W=!1,t()}})())}function K(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function q(){L=null,R=[],z=``,B=``,V=``,J()}function J(){H!==null&&URL.revokeObjectURL(H.url),H=null}var Y=!1;function Pe(){Y||(Y=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&q()}))}function Fe(e,i){let a=be(O,e,i.id),s=[i.quantidade,i.observacoes,i.data_vencimento===0?``:o.prep.vence(r(i.data_vencimento))].filter(e=>e!==``).join(` · `);return n`
    <div class="registro" ?data-marcado=${a}>
      <span class="registro__avatar">
        <kk-icon name=${a?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${a}
        @click=${()=>{O=m(O,e,i.id),t()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${i.descricao}</span>
        </span>
        ${s===``?c:n`<span class="registro__resumo">${s}</span>`}
      </button>
    </div>
  `}function Ie(){return D.length===0?n`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${o.prep.semKits}</p>
      </div>
    `:n`
    <div class="grupos">
      ${D.map(e=>{let r=String(e.id),i=j.has(r),a=xe(O,e);return n`
          <div class="grupo" ?data-completo=${a}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${i}
              @click=${()=>{let e=new Set(j);e.delete(r)||e.add(r),j=e,t()}}
            >
              <span class="grupo__emoji">${e.icone===``?`📋`:e.icone}</span>
              <span class="grupo__nome">${e.nome}</span>
              <span class="grupo__contagem">
                ${Ce(O,e)}/${e.itens.length}
              </span>
              <kk-icon name=${i?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${e.itens.length===0?c:n`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${Te(O,e)}%`}
                    ></div>
                  </div>
                `}

            ${i?n`
                  <div class="registros">
                    ${e.itens.map(t=>Fe(e,t))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${o.acoes.editar}
                      @click=${()=>void ze(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${o.acoes.excluir}
                      @click=${()=>void Le(e)}
                    ></kk-icon-button>
                  </div>
                `:c}
          </div>
        `})}
    </div>
  `}async function Le(e){await s({titulo:o.prep.excluirKit,texto:o.acervo.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&(O=await ye(e,O),l(o.prep.kitExcluido),await G())}function X(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function Re(){return{id:0,nome:``,icone:``,itens:[X()],criacao:0}}async function ze(e){if(e.id===void 0)return;let n=await we(e.id)??e;F={id:n.id??0,nome:n.nome,icone:n.icone,criacao:n.data_criacao,itens:n.itens.length===0?[X()]:n.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:u(e.data_vencimento)}))},t()}function Be(e){let r=t=>{F={...F??e,...t}},i=(t,n,i)=>{r({itens:(F??e).itens.map((e,r)=>r===t?{...e,[n]:i}:e)})};return n`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?o.prep.editarKit:o.prep.novoKit}
      </h2>

      <kk-input
        label=${o.prep.nomeDoKit}
        .value=${e.nome}
        @kk-input=${e=>r({nome:e.target.value})}
      ></kk-input>

      <h3 class="secao">${o.prep.emoji}</h3>
      <p class="formulario__ajuda">${o.prep.emojiAjuda}</p>
      <div class="chips chips--em-linha">
        ${ee.map(i=>n`
            <button
              type="button"
              class="chip chip--emoji"
              ?data-ativo=${e.icone===i}
              title=${i}
              @click=${()=>{r({icone:e.icone===i?``:i}),t()}}
            >
              ${i}
            </button>
          `)}
      </div>

      <h3 class="secao">${o.prep.itens}</h3>

      ${e.itens.map((e,t)=>n`
          <div class="item-editor">
            <div class="item-editor__topo">
              <kk-input
                class="item-editor__descricao"
                placeholder=${o.prep.descricaoDoItem}
                .value=${e.descricao}
                @kk-input=${e=>i(t,`descricao`,e.target.value)}
              ></kk-input>
              <kk-icon-button
                name="trash"
                label=${o.prep.removerItem}
                @click=${()=>void Ve(t)}
              ></kk-icon-button>
            </div>

            <div class="formulario__par">
              <kk-input
                size="small"
                placeholder=${o.prep.quantidade}
                .value=${e.quantidade}
                @kk-input=${e=>i(t,`quantidade`,e.target.value)}
              ></kk-input>
              <kk-input
                size="small"
                type="date"
                .value=${e.vencimento}
                @kk-change=${e=>i(t,`vencimento`,e.target.value)}
              ></kk-input>
            </div>

            <kk-input
              size="small"
              placeholder=${o.prep.observacoes}
              .value=${e.observacoes}
              @kk-input=${e=>i(t,`observacoes`,e.target.value)}
            ></kk-input>
          </div>
        `)}

      <kk-button
        outline
        @click=${()=>{r({itens:[...(F??e).itens,X()]}),t()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${o.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void He()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,t()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Ve(e){await s({titulo:o.prep.removerItem,texto:o.prep.removerItemTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&F!==null&&(F={...F,itens:F.itens.filter((t,n)=>n!==e)},t())}async function He(){let e=F;if(e===null)return;let n=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!n){F=null,t();return}await Ee(e),F=null,l(o.prep.kitSalvo),await G()}function Ue(){return{id:0,item:``,categoria:f,quantidade:1,peso:0,kcal:0,vencimento:``}}async function We(){let e=I;e!==null&&(await he({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?f:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:Ge(e.vencimento)}),I=null,l(o.prep.itemSalvo),await G())}function Ge(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function Ke(e){let r=t=>{I={...I??e,...t}};return n`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?o.prep.editarItem:o.prep.novoItem}
      </h2>

      <kk-input
        label=${o.prep.item}
        .value=${e.item}
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
        label=${o.prep.categoria}
        .value=${String(Math.max(0,d.findIndex(t=>t.nome===e.categoria)))}
        @kk-change=${e=>{let t=Number(e.target.value);r({categoria:d[t]?.nome??f})}}
      >
        ${d.map((e,t)=>n`
            <kk-option value=${String(t)}>${e.emoji} ${e.nome}</kk-option>
          `)}
      </kk-select>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${o.prep.quantidade}
          .value=${String(e.quantidade)}
          @kk-input=${e=>r({quantidade:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="number"
          min="0"
          label=${o.prep.pesoUnitario}
          .value=${String(e.peso)}
          @kk-input=${e=>r({peso:Number(e.target.value)})}
        ></kk-input>
      </div>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${o.prep.kcal}
          .value=${String(e.kcal)}
          @kk-input=${e=>r({kcal:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="date"
          label=${o.prep.validade}
          .value=${e.vencimento}
          @kk-change=${e=>r({vencimento:e.target.value})}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void We()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,t()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function qe(e){let r=e=>{A={...A,...e,pessoas:Math.max(1,e.pessoas??A.pessoas)},ge(A),t()},a=se(k,A);return n`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="calculator"></kk-icon>
        <span class="tally__titulo">
          ${o.prep.calculadora}
          <small>${o.prep.calculadoraAjuda}</small>
        </span>
      </div>

      <div class="formulario__par">
        <kk-select
          label=${o.prep.faixaEtaria}
          size="small"
          .value=${A.idade}
          @kk-change=${e=>r({idade:e.target.value})}
        >
          ${re.map(e=>n`<kk-option value=${e}>${pe(e)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${o.prep.atividade}
          size="small"
          .value=${A.atividade}
          @kk-change=${e=>r({atividade:e.target.value})}
        >
          ${ie.map(e=>n`<kk-option value=${e}>${me(e)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${o.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${o.prep.menosPessoas}
          @click=${()=>r({pessoas:A.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${A.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${o.prep.maisPessoas}
          @click=${()=>r({pessoas:A.pessoas+1})}
        ></kk-icon-button>
      </div>

      <div class="placares">
        <div class="placar">
          <span class="placar__valor" data-tom=${e.tom===`sucesso`?`sucesso`:e.tom===`aviso`?`aviso`:`perigo`}>
            ${e.dias}
          </span>
          <span class="placar__rotulo">${o.prep.diasDeAutonomia}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${i(e.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${o.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${i(e.pesoTotalKg)} kg</span>
          <span class="placar__rotulo">${o.prep.pesoTotal}</span>
        </div>
      </div>

      <div class="progresso-leitura__barra" role="presentation">
        <div
          class="progresso-leitura__preenchido"
          style=${`width:${e.metaPercentual}%`}
        ></div>
      </div>
      <p class="discreto">
        ${o.prep.metaAutonomia(e.metaPercentual)} ·
        ${o.prep.necessidadeDiaria(i(e.doGrupo))}
      </p>

      <h3 class="secao">${o.prep.logistica}</h3>
      <div class="placares">
        <div class="placar">
          <span class="placar__valor">${a.diasFrios}</span>
          <span class="placar__rotulo">${o.prep.diasSemFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${a.diasTotais}</span>
          <span class="placar__rotulo">${o.prep.diasComFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor" data-tom=${a.vulneravel?`perigo`:`sucesso`}>
            ${a.fibras}
          </span>
          <span class="placar__rotulo">${o.prep.itensDeFibra}</span>
        </div>
      </div>

      ${a.vulneravel?n`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${o.prep.vulneravel}
            </kk-alert>
          `:c}
    </div>
  `}function Z(e){let t=p(e);return t===null?c:t<0?n`<kk-badge variant="danger" pill>${o.prep.vencidoHa(Math.abs(t))}</kk-badge>`:t===0?n`<kk-badge variant="danger" pill>${o.prep.venceHoje}</kk-badge>`:t<7?n`<kk-badge variant="warning" pill>${o.prep.venceEm(t)}</kk-badge>`:c}function Je(e){let t=ne(e.categoria),a=te(e);return n`
    <div class="registro" data-status=${_e(e)}>
      <span class="registro__avatar" style=${`background:color-mix(in oklab, ${t.cor} 15%, transparent)`}>
        ${t.emoji}
      </span>

      <button class="registro__alvo" @click=${()=>void Q(e)}>
        <span class="registro__topo">
          <span class="registro__titulo">${e.item}</span>
          ${Z(e)}
        </span>
        <span class="registro__resumo">
          ${o.prep.resumoDoItem(e.quantidade,i(e.peso_unitario))}
          ${a===null?``:`· ${i(a)} kcal`}
        </span>
        ${e.data_vencimento===0?c:n`<span class="registro__resumo">${o.prep.vence(r(e.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${o.acoes.editar}
          @click=${()=>void Q(e)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${o.prep.excluirItem}
          @click=${()=>void Ye(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function Q(e){if(e.id===void 0)return;let n=await de(e.id)??e;I={id:n.id??0,item:n.item,categoria:n.categoria,quantidade:n.quantidade,peso:n.peso_unitario,kcal:n.calorias_por_100g,vencimento:n.data_vencimento===0?``:u(n.data_vencimento)},t()}async function Ye(e){await s({titulo:o.prep.excluirItem,texto:o.acervo.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await le(e.id),l(o.prep.itemExcluido),await G())}function Xe(){if(I!==null)return Ke(I);let e=oe(k,A),r=ae(k),i=fe(ve(k,P));return n`
    ${r.total===0?c:n`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${N}
              @click=${()=>{N=!N,t()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${o.prep.alertas(r.total)}</span>
              <kk-icon name=${N?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${N?n`
                  <div class="alertas__lista">
                    ${[...r.vencidos,...r.aVencer].map(e=>n`
                        <span class="alertas__item">
                          ${Z(e)}
                          <span>${e.item}</span>
                        </span>
                      `)}
                  </div>
                `:c}
          </div>
        `}

    ${qe(e)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${o.prep.buscarItens}
        .value=${P}
        @kk-input=${e=>{P=e.target.value,t()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${i.length===0?n`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${k.length===0?o.prep.semEstoque:o.prep.semEstoqueFiltro}</p>
          </div>
        `:n`
          <div class="grupos">
            ${i.map(e=>{let r=M.has(e.nome);return n`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${r}
                    @click=${()=>{let n=new Set(M);n.delete(e.nome)||n.add(e.nome),M=n,t()}}
                  >
                    <span class="grupo__emoji">${e.info.emoji}</span>
                    <span class="grupo__nome">${e.nome}</span>
                    <span class="grupo__contagem">${e.itens.length}</span>
                    <kk-icon name=${r?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${r?n`
                        <div class="registros">
                          ${e.itens.map(e=>Je(e))}
                        </div>
                      `:c}
                </div>
              `})}
          </div>
        `}
  `}async function $(){if(V=``,z===``){V=o.prep.digitePin,t();return}if(!await w(z)){V=o.prep.pinIncorreto,z=``,t();return}L=z,z=``,R=await E(),t()}async function Ze(){if(V=``,z.length<4){V=o.prep.pinCurto(4),t();return}if(z!==B){V=o.prep.pinNaoConfere,t();return}await T(z),L=z,z=``,B=``,R=await E(),t()}async function Qe(e){let n=e.files?.[0];if(n===void 0||L===null)return;let r=await a({titulo:o.prep.nomeDoDocumento,valor:n.name,placeholder:o.prep.nomeDoDocumento,rotuloConfirmar:o.acoes.salvar,erroVazio:o.prep.informeNome});e.value=``,r!==null&&(await ke(L,n,r),R=await E(),l(o.prep.documentoGuardado),t())}function $e(){return C()?L===null?n`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${o.prep.cofreTrancado}</h2>
        <p class="discreto">${o.prep.destranqueAjuda}</p>

        <kk-input
          type="password"
          inputmode="numeric"
          password-toggle
          label=${o.prep.pin}
          .value=${z}
          @kk-input=${e=>{z=e.target.value}}
          @keydown=${e=>{e.key===`Enter`&&$()}}
        ></kk-input>

        ${V===``?c:n`<p class="erro">${V}</p>`}

        <kk-button variant="primary" @click=${()=>void $()}>
          <kk-icon slot="prefix" name="lock-open"></kk-icon>${o.prep.destrancar}
        </kk-button>
      </div>
    `:n`
    <div class="cofre__acoes">
      <label class="cofre__enviar">
        <kk-icon name="upload"></kk-icon>
        ${o.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void Qe(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{q(),t()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${o.prep.trancar}
      </kk-button>
    </div>

    ${R.length===0?n`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${o.prep.semDocumentos}</p>
          </div>
        `:n`
          <div class="registros">
            ${R.map(e=>n`
                <div class="registro">
                  <span class="registro__avatar"><kk-icon name="file"></kk-icon></span>

                  <button class="registro__alvo" @click=${()=>void et(e)}>
                    <span class="registro__titulo">${e.rotulo}</span>
                    <span class="registro__resumo">
                      ${e.tipo_mime} · ${r(e.data_criacao)}
                    </span>
                  </button>

                  <div class="registro__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${o.acoes.renomear}
                      @click=${()=>void tt(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${o.prep.excluirDocumento}
                      @click=${()=>void nt(e)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${H===null?c:n`
          <kk-dialog
            open
            label=${H.rotulo}
            @kk-after-hide=${()=>{J(),t()}}
          >
            ${H.tipo.startsWith(`image/`)?n`<img class="previa" src=${H.url} alt=${H.rotulo} />`:n`
                  <p>${o.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${H.url} download=${H.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${o.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `:n`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${o.prep.configurarPin}</h2>
        <p class="discreto">${o.prep.pinAjuda}</p>

        <kk-input
          type="password"
          inputmode="numeric"
          password-toggle
          label=${o.prep.pin}
          .value=${z}
          @kk-input=${e=>{z=e.target.value}}
        ></kk-input>
        <kk-input
          type="password"
          inputmode="numeric"
          label=${o.prep.confirmarPin}
          .value=${B}
          @kk-input=${e=>{B=e.target.value}}
        ></kk-input>

        ${V===``?c:n`<p class="erro">${V}</p>`}

        <kk-button variant="primary" @click=${()=>void Ze()}>
          <kk-icon slot="prefix" name="lock"></kk-icon>${o.prep.criarCofre}
        </kk-button>
      </div>
    `}async function et(e){if(L!==null)try{J(),H={rotulo:e.rotulo,url:await Me(L,e),tipo:e.tipo_mime},t()}catch{l(o.prep.falhaAoDecifrar,`warning`)}}async function tt(e){let n=await a({titulo:o.prep.renomearDocumento,valor:e.rotulo,placeholder:o.prep.nomeDoDocumento,rotuloConfirmar:o.acoes.renomear,erroVazio:o.prep.informeNome});n!==null&&n!==e.rotulo&&(await Ae(e,n),R=await E(),t())}async function nt(e){await s({titulo:o.prep.excluirDocumento,texto:o.prep.excluirDocumentoTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await je(e.id),R=await E(),l(o.prep.documentoExcluido),t())}var rt={kits:o.prep.kits,estoque:o.prep.estoque,cofre:o.prep.cofre},it={voltarPara(){return`home`},aoVoltar(e){let n=K(e);return n===`estoque`&&I!==null?(I=null,t(),!0):n===`kits`&&F!==null&&(F=null,t(),!0)},titulo(e){return rt[K(e)]},acoes(e){let r=K(e);if(r===`kits`&&F===null)return n`
        <kk-icon-button
          name="plus"
          label=${o.prep.novoKit}
          @click=${()=>{F=Re(),t()}}
        ></kk-icon-button>
      `;if(r===`estoque`&&I===null)return n`
        <kk-icon-button
          name="plus"
          label=${o.prep.novoItem}
          @click=${()=>{I=Ue(),t()}}
        ></kk-icon-button>
      `},conteudo(e){Ne();let t=K(e);return t!==`estoque`&&(I=null),t!==`kits`&&(F=null),U?t===`estoque`?Xe():t===`cofre`?$e():F===null?Ie():Be(F):n`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{it as telaPrep};