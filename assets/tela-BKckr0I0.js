import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{a as r,t as i}from"./data-7IMAkOFv.js";import{r as a}from"./numero-Elgnatu7.js";import{s as o}from"./banco-CGOuosq0.js";import{R as s,c,h as l,m as u}from"./index-DYev-n2R.js";import{t as ee}from"./carga-Cb65ZAc7.js";import{CATEGORIAS as d,CATEGORIA_PADRAO as f,EMOJIS_DE_KIT as te,caloriasDoItem as ne,categoria as re}from"./dados-DT_pQ2FR.js";import{FAIXAS as p,NIVEIS as m,alertas as h,calcularAutonomia as ie,calcularLogistica as ae,carregarEstoque as oe,diasParaVencer as se,excluirItem as ce,lerPerfil as le,obterItem as ue,porCategoria as de,rotuloDaFaixa as fe,rotuloDoNivel as pe,salvarItem as me,salvarPerfil as he,statusDeValidade as ge,visiveis as _e}from"./estoque-EUiWjTIz.js";import{alternarItem as ve,carregarKits as ye,excluirKit as be,itemMarcado as xe,kitCompleto as Se,lerProgresso as Ce,marcadosDoKit as we,obterKit as Te,percentualDoKit as Ee,salvarKit as De}from"./kits-DRUv-DcI.js";var g=`note_passkey`,Oe=32;function _(e){let t=String.fromCharCode(...new Uint8Array(e));return btoa(t).replaceAll(`+`,`-`).replaceAll(`/`,`_`).replace(/=+$/,``)}function v(e){let t=atob(e.replaceAll(`-`,`+`).replaceAll(`_`,`/`));return Uint8Array.from(t,e=>e.charCodeAt(0))}function y(){let e=localStorage.getItem(g);if(e===null)return null;try{let t=JSON.parse(e);return typeof t.id==`string`&&typeof t.sal==`string`?{id:t.id,sal:t.sal}:null}catch{return null}}function ke(){return y()!==null}function Ae(){return isSecureContext&&typeof PublicKeyCredential<`u`}var b=class extends Error{},x=class extends Error{};function S(){return location.hostname}var C=new TextEncoder().encode(`kobi-note`);async function je(){let e=crypto.getRandomValues(new Uint8Array(Oe)),t;try{t=await navigator.credentials.create({publicKey:{rp:{name:`Kobi Note`,id:S()},user:{id:C,name:`kobi-note`,displayName:`Kobi Note`},challenge:crypto.getRandomValues(new Uint8Array(32)),pubKeyCredParams:[{type:`public-key`,alg:-7},{type:`public-key`,alg:-257}],authenticatorSelection:{residentKey:`required`,userVerification:`required`},extensions:{prf:{}}}})}catch{throw new b}if(!(t instanceof PublicKeyCredential))throw new b;if(t.getClientExtensionResults().prf?.enabled!==!0)throw new x;let n={id:_(t.rawId),sal:_(e)},r=await w(n);return localStorage.setItem(g,JSON.stringify(n)),r}async function w(e){let t;try{t=await navigator.credentials.get({publicKey:{rpId:S(),challenge:crypto.getRandomValues(new Uint8Array(32)),allowCredentials:[{type:`public-key`,id:v(e.id)}],userVerification:`required`,extensions:{prf:{eval:{first:v(e.sal)}}}}})}catch{throw new b}if(!(t instanceof PublicKeyCredential))throw new b;let n=t.getClientExtensionResults().prf?.results?.first;if(n===void 0)throw new x;let r=new Uint8Array(n.byteLength);return r.set(n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)),r}async function Me(){let e=y();if(e===null)throw new b;return w(e)}var T=16,Ne=12,Pe=new TextEncoder().encode(`kobi-note-cofre`),E=()=>o(`documentos_cofre`);async function D(e,t){let n=await crypto.subtle.importKey(`raw`,e,`HKDF`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`HKDF`,hash:`SHA-256`,salt:t,info:Pe},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function Fe(e,t){let n=crypto.getRandomValues(new Uint8Array(T)),r=crypto.getRandomValues(new Uint8Array(Ne)),i=await D(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,T),o.set(new Uint8Array(a),28),o}async function Ie(e,t){let n=t.slice(0,T),r=t.slice(T,28),i=t.slice(28),a=await D(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}function O(){return E().todos()}async function Le(e,t,n){await E().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await Fe(e,await t.arrayBuffer()),data_criacao:Date.now()})}function Re(e,t){return E().salvar({...e,rotulo:t})}function ze(e){return E().excluir(e)}async function Be(e,t){let n=await Ie(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var k=[],A={},j=[],M=le(),N=new Set,P=new Set,F=!1,I=``,L=null,R=null,z=null,B=[],V=``,H=!1,U=null;async function W(){[k,j]=await Promise.all([ye(),oe()]),A=Ce(),s()}var Ve=new ee(`prep`,async()=>{He(),await W()});function G(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function K(){z=null,B=[],V=``,q()}function q(){U!==null&&URL.revokeObjectURL(U.url),U=null}var J=!1;function He(){J||(J=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&K()}))}function Ue(r,a){let o=xe(A,r,a.id),c=[a.quantidade,a.observacoes,a.data_vencimento===0?``:n.prep.vence(i(a.data_vencimento))].filter(e=>e!==``).join(` · `);return e`
    <div class="registro" ?data-marcado=${o}>
      <span class="registro__avatar">
        <kk-icon name=${o?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${o}
        @click=${()=>{A=ve(A,r,a.id),s()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${a.descricao}</span>
        </span>
        ${c===``?t:e`<span class="registro__resumo">${c}</span>`}
      </button>
    </div>
  `}function We(){return k.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${n.prep.semKits}</p>
      </div>
    `:e`
    <div class="grupos">
      ${k.map(r=>{let i=String(r.id),a=N.has(i),o=Se(A,r);return e`
          <div class="grupo" ?data-completo=${o}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${a}
              @click=${()=>{let e=new Set(N);e.delete(i)||e.add(i),N=e,s()}}
            >
              <span class="grupo__emoji">${r.icone===``?`📋`:r.icone}</span>
              <span class="grupo__nome">${r.nome}</span>
              <span class="grupo__contagem">
                ${we(A,r)}/${r.itens.length}
              </span>
              <kk-icon name=${a?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${r.itens.length===0?t:e`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${Ee(A,r)}%`}
                    ></div>
                  </div>
                `}

            ${a?e`
                  <div class="registros">
                    ${r.itens.map(e=>Ue(r,e))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.editar}
                      @click=${()=>void qe(r)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${n.acoes.excluir}
                      @click=${()=>void Ge(r)}
                    ></kk-icon-button>
                  </div>
                `:t}
          </div>
        `})}
    </div>
  `}async function Ge(e){await u({titulo:n.prep.excluirKit,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(A=await be(e,A),c(n.prep.kitExcluido),await W())}function Y(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function Ke(){return{id:0,nome:``,icone:``,itens:[Y()],criacao:0}}async function qe(e){if(e.id===void 0)return;let t=await Te(e.id)??e;L={id:t.id??0,nome:t.nome,icone:t.icone,criacao:t.data_criacao,itens:t.itens.length===0?[Y()]:t.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:r(e.data_vencimento)}))},s()}function Je(t){let r=e=>{L={...L??t,...e}},i=(e,n,i)=>{r({itens:(L??t).itens.map((t,r)=>r===e?{...t,[n]:i}:t)})};return e`
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
              @click=${()=>{r({icone:t.icone===n?``:n}),s()}}
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
                @click=${()=>void Ye(r)}
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
        @click=${()=>{r({itens:[...(L??t).itens,Y()]}),s()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${n.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Xe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Ye(e){await u({titulo:n.prep.removerItem,texto:n.prep.removerItemTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&L!==null&&(L={...L,itens:L.itens.filter((t,n)=>n!==e)},s())}async function Xe(){let e=L;if(e===null)return;let t=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!t){L=null,s();return}await De(e),L=null,c(n.prep.kitSalvo),await W()}function Ze(){return{id:0,item:``,categoria:f,quantidade:1,peso:0,kcal:0,vencimento:``}}async function Qe(){let e=R;e!==null&&(await me({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?f:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:$e(e.vencimento)}),R=null,c(n.prep.itemSalvo),await W())}function $e(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function et(t){let r=e=>{R={...R??t,...e}};return e`
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
        <kk-button variant="primary" @click=${()=>void Qe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function tt(r){let i=e=>{M={...M,...e,pessoas:Math.max(1,e.pessoas??M.pessoas)},he(M),s()},o=ae(j,M);return e`
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
          .value=${M.idade}
          @kk-change=${e=>i({idade:e.target.value})}
        >
          ${p.map(t=>e`<kk-option value=${t}>${fe(t)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${n.prep.atividade}
          size="small"
          .value=${M.atividade}
          @kk-change=${e=>i({atividade:e.target.value})}
        >
          ${m.map(t=>e`<kk-option value=${t}>${pe(t)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${n.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${n.prep.menosPessoas}
          @click=${()=>i({pessoas:M.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${M.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${n.prep.maisPessoas}
          @click=${()=>i({pessoas:M.pessoas+1})}
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
          <span class="placar__valor">${a(r.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${n.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${a(r.pesoTotalKg)} kg</span>
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
        ${n.prep.necessidadeDiaria(a(r.doGrupo))}
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
  `}function X(r){let i=se(r);return i===null?t:i<0?e`<kk-badge variant="danger" pill>${n.prep.vencidoHa(Math.abs(i))}</kk-badge>`:i===0?e`<kk-badge variant="danger" pill>${n.prep.venceHoje}</kk-badge>`:i<7?e`<kk-badge variant="warning" pill>${n.prep.venceEm(i)}</kk-badge>`:t}function nt(r){let o=re(r.categoria),s=ne(r);return e`
    <div class="registro" data-status=${ge(r)}>
      <span class="registro__avatar" style=${`background:color-mix(in oklab, ${o.cor} 15%, transparent)`}>
        ${o.emoji}
      </span>

      <button class="registro__alvo" @click=${()=>void Z(r)}>
        <span class="registro__topo">
          <span class="registro__titulo">${r.item}</span>
          ${X(r)}
        </span>
        <span class="registro__resumo">
          ${n.prep.resumoDoItem(r.quantidade,a(r.peso_unitario))}
          ${s===null?``:`· ${a(s)} kcal`}
        </span>
        ${r.data_vencimento===0?t:e`<span class="registro__resumo">${n.prep.vence(i(r.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${n.acoes.editar}
          @click=${()=>void Z(r)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.prep.excluirItem}
          @click=${()=>void Q(r)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function Z(e){if(e.id===void 0)return;let t=await ue(e.id)??e;R={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:r(t.data_vencimento)},s()}async function Q(e){await u({titulo:n.prep.excluirItem,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ce(e.id),c(n.prep.itemExcluido),await W())}function rt(){if(R!==null)return et(R);let r=ie(j,M),i=h(j),a=de(_e(j,I));return e`
    ${i.total===0?t:e`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${F}
              @click=${()=>{F=!F,s()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${n.prep.alertas(i.total)}</span>
              <kk-icon name=${F?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${F?e`
                  <div class="alertas__lista">
                    ${[...i.vencidos,...i.aVencer].map(t=>e`
                        <span class="alertas__item">
                          ${X(t)}
                          <span>${t.item}</span>
                        </span>
                      `)}
                  </div>
                `:t}
          </div>
        `}

    ${tt(r)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.prep.buscarItens}
        .value=${I}
        @kk-input=${e=>{I=e.target.value,s()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${a.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${j.length===0?n.prep.semEstoque:n.prep.semEstoqueFiltro}</p>
          </div>
        `:e`
          <div class="grupos">
            ${a.map(n=>{let r=P.has(n.nome);return e`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${r}
                    @click=${()=>{let e=new Set(P);e.delete(n.nome)||e.add(n.nome),P=e,s()}}
                  >
                    <span class="grupo__emoji">${n.info.emoji}</span>
                    <span class="grupo__nome">${n.nome}</span>
                    <span class="grupo__contagem">${n.itens.length}</span>
                    <kk-icon name=${r?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${r?e`
                        <div class="registros">
                          ${n.itens.map(e=>nt(e))}
                        </div>
                      `:t}
                </div>
              `})}
          </div>
        `}
  `}function it(e){return e instanceof x?n.prep.semPrf:(e instanceof b,n.prep.gestoRecusado)}async function $(e){if(!H){H=!0,V=``,s();try{await e()}catch(e){V=it(e)}finally{H=!1,s()}}}function at(){return $(async()=>{z=await je(),B=await O()})}function ot(){return $(async()=>{z=await Me(),B=await O()})}async function st(e){let t=e.files?.[0];if(t===void 0||z===null)return;let r=await l({titulo:n.prep.nomeDoDocumento,valor:t.name,placeholder:n.prep.nomeDoDocumento,rotuloConfirmar:n.acoes.salvar,erroVazio:n.prep.informeNome});e.value=``,r!==null&&(await Le(z,t,r),B=await O(),c(n.prep.documentoGuardado),s())}function ct(){let r=V===``?t:e`<p class="erro">${V}</p>`;return z===null&&!ke()?e`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${n.prep.configurarBiometria}</h2>
        <p class="discreto">${n.prep.biometriaAjuda}</p>
        ${Ae()?e`
              ${r}
              <kk-button variant="primary" ?loading=${H} @click=${()=>void at()}>
                <kk-icon slot="prefix" name="fingerprint"></kk-icon>${n.prep.criarCofre}
              </kk-button>
            `:e`<p class="erro">${n.prep.semBiometria}</p>`}
      </div>
    `:z===null?e`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${n.prep.cofreTrancado}</h2>
        <p class="discreto">${n.prep.destranqueAjuda}</p>
        ${r}
        <kk-button
          variant="primary"
          ?loading=${H}
          @click=${()=>void ot()}
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
          @change=${e=>void st(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{K(),s()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${n.prep.trancar}
      </kk-button>
    </div>

    ${B.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${n.prep.semDocumentos}</p>
          </div>
        `:e`
          <div class="registros">
            ${B.map(t=>e`
                <div class="registro">
                  <span class="registro__avatar"><kk-icon name="file"></kk-icon></span>

                  <button class="registro__alvo" @click=${()=>void lt(t)}>
                    <span class="registro__titulo">${t.rotulo}</span>
                    <span class="registro__resumo">
                      ${t.tipo_mime} · ${i(t.data_criacao)}
                    </span>
                  </button>

                  <div class="registro__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.renomear}
                      @click=${()=>void ut(t)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${n.prep.excluirDocumento}
                      @click=${()=>void dt(t)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${U===null?t:e`
          <kk-dialog
            open
            label=${U.rotulo}
            @kk-after-hide=${()=>{q(),s()}}
          >
            ${U.tipo.startsWith(`image/`)?e`<img class="previa" src=${U.url} alt=${U.rotulo} />`:e`
                  <p>${n.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${U.url} download=${U.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${n.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `}async function lt(e){if(z!==null)try{q(),U={rotulo:e.rotulo,url:await Be(z,e),tipo:e.tipo_mime},s()}catch{c(n.prep.falhaAoDecifrar,`warning`)}}async function ut(e){let t=await l({titulo:n.prep.renomearDocumento,valor:e.rotulo,placeholder:n.prep.nomeDoDocumento,rotuloConfirmar:n.acoes.renomear,erroVazio:n.prep.informeNome});t!==null&&t!==e.rotulo&&(await Re(e,t),B=await O(),s())}async function dt(e){await u({titulo:n.prep.excluirDocumento,texto:n.prep.excluirDocumentoTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ze(e.id),B=await O(),c(n.prep.documentoExcluido),s())}var ft={kits:n.prep.kits,estoque:n.prep.estoque,cofre:n.prep.cofre},pt={voltarPara(){return`home`},aoVoltar(e){let t=G(e);return t===`estoque`&&R!==null?(R=null,s(),!0):t===`kits`&&L!==null&&(L=null,s(),!0)},titulo(e){return ft[G(e)]},acoes(t){let r=G(t);if(r===`kits`&&L===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.prep.novoKit}
          @click=${()=>{L=Ke(),s()}}
        ></kk-icon-button>
      `;if(r===`estoque`&&R===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.prep.novoItem}
          @click=${()=>{R=Ze(),s()}}
        ></kk-icon-button>
      `},conteudo(e){let t=G(e);t!==`estoque`&&(R=null),t!==`kits`&&(L=null);let n=Ve.espera();return n===null?t===`estoque`?rt():t===`cofre`?ct():L===null?We():Je(L):n}};export{pt as telaPrep};