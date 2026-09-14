import{r as e}from"./numero-B0JnuQJ5.js";import{s as t}from"./banco-WSl22mr6.js";import{K as n,X as r,_ as i,at as a,g as o,lt as s,m as c,st as l,tt as u,v as ee,y as te}from"./index-D0n52eAb.js";import{CATEGORIAS as d,CATEGORIA_PADRAO as f,EMOJIS_DE_KIT as ne,caloriasDoItem as re,categoria as ie}from"./dados-BgDpV8rv.js";import{FAIXAS as ae,NIVEIS as oe,alertas as se,calcularAutonomia as ce,calcularLogistica as le,carregarEstoque as ue,diasParaVencer as de,excluirItem as fe,lerPerfil as pe,obterItem as me,porCategoria as he,rotuloDaFaixa as ge,rotuloDoNivel as _e,salvarItem as ve,salvarPerfil as ye,statusDeValidade as be,visiveis as xe}from"./estoque-CiELC02y.js";import{alternarItem as Se,carregarKits as Ce,excluirKit as we,itemMarcado as Te,kitCompleto as Ee,lerProgresso as De,marcadosDoKit as Oe,obterKit as ke,percentualDoKit as Ae,salvarKit as je}from"./kits-CDPhdmZ8.js";var p=`note_passkey`,Me=32;function m(e){let t=String.fromCharCode(...new Uint8Array(e));return btoa(t).replaceAll(`+`,`-`).replaceAll(`/`,`_`).replace(/=+$/,``)}function h(e){let t=atob(e.replaceAll(`-`,`+`).replaceAll(`_`,`/`));return Uint8Array.from(t,e=>e.charCodeAt(0))}function g(){let e=localStorage.getItem(p);if(e===null)return null;try{let t=JSON.parse(e);return typeof t.id==`string`&&typeof t.sal==`string`?{id:t.id,sal:t.sal}:null}catch{return null}}function Ne(){return g()!==null}function Pe(){return isSecureContext&&typeof PublicKeyCredential<`u`}var _=class extends Error{},v=class extends Error{};function y(){return location.hostname}var Fe=new TextEncoder().encode(`kobi-note`);async function Ie(){let e=crypto.getRandomValues(new Uint8Array(Me)),t;try{t=await navigator.credentials.create({publicKey:{rp:{name:`Kobi Note`,id:y()},user:{id:Fe,name:`kobi-note`,displayName:`Kobi Note`},challenge:crypto.getRandomValues(new Uint8Array(32)),pubKeyCredParams:[{type:`public-key`,alg:-7},{type:`public-key`,alg:-257}],authenticatorSelection:{residentKey:`required`,userVerification:`required`},extensions:{prf:{}}}})}catch{throw new _}if(!(t instanceof PublicKeyCredential))throw new _;if(t.getClientExtensionResults().prf?.enabled!==!0)throw new v;let n={id:m(t.rawId),sal:m(e)},r=await b(n);return localStorage.setItem(p,JSON.stringify(n)),r}async function b(e){let t;try{t=await navigator.credentials.get({publicKey:{rpId:y(),challenge:crypto.getRandomValues(new Uint8Array(32)),allowCredentials:[{type:`public-key`,id:h(e.id)}],userVerification:`required`,extensions:{prf:{eval:{first:h(e.sal)}}}}})}catch{throw new _}if(!(t instanceof PublicKeyCredential))throw new _;let n=t.getClientExtensionResults().prf?.results?.first;if(n===void 0)throw new v;let r=new Uint8Array(n.byteLength);return r.set(n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)),r}async function Le(){let e=g();if(e===null)throw new _;return b(e)}var x=16,Re=12,ze=new TextEncoder().encode(`kobi-note-cofre`),S=()=>t(`documentos_cofre`);async function C(e,t){let n=await crypto.subtle.importKey(`raw`,e,`HKDF`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`HKDF`,hash:`SHA-256`,salt:t,info:ze},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function Be(e,t){let n=crypto.getRandomValues(new Uint8Array(x)),r=crypto.getRandomValues(new Uint8Array(Re)),i=await C(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,x),o.set(new Uint8Array(a),28),o}async function Ve(e,t){let n=t.slice(0,x),r=t.slice(x,28),i=t.slice(28),a=await C(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}function w(){return S().todos()}async function He(e,t,n){await S().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await Be(e,await t.arrayBuffer()),data_criacao:Date.now()})}function Ue(e,t){return S().salvar({...e,rotulo:t})}function We(e){return S().excluir(e)}async function Ge(e,t){let n=await Ve(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var T=[],E={},D=[],O=pe(),k=new Set,A=new Set,j=!1,M=``,N=null,P=null,F=null,I=[],L=``,R=!1,z=null,B=!1,V=!1,H=null;async function U(){[T,D]=await Promise.all([Ce(),ue()]),E=De(),u()}function W(){B||V||H!==null||(V=!0,qe(),(async()=>{try{await U(),B=!0}catch(e){console.error(`prep: a carga falhou.`,e),H=te(e)}finally{V=!1,u()}})())}function Ke(){H=null,W(),u()}function G(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function K(){F=null,I=[],L=``,q()}function q(){z!==null&&URL.revokeObjectURL(z.url),z=null}var J=!1;function qe(){J||(J=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&K()}))}function Je(e,t){let r=Te(E,e,t.id),i=[t.quantidade,t.observacoes,t.data_vencimento===0?``:a.prep.vence(n(t.data_vencimento))].filter(e=>e!==``).join(` · `);return s`
    <div class="registro" ?data-marcado=${r}>
      <span class="registro__avatar">
        <kk-icon name=${r?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${r}
        @click=${()=>{E=Se(E,e,t.id),u()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${t.descricao}</span>
        </span>
        ${i===``?l:s`<span class="registro__resumo">${i}</span>`}
      </button>
    </div>
  `}function Ye(){return T.length===0?s`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${a.prep.semKits}</p>
      </div>
    `:s`
    <div class="grupos">
      ${T.map(e=>{let t=String(e.id),n=k.has(t),r=Ee(E,e);return s`
          <div class="grupo" ?data-completo=${r}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${n}
              @click=${()=>{let e=new Set(k);e.delete(t)||e.add(t),k=e,u()}}
            >
              <span class="grupo__emoji">${e.icone===``?`📋`:e.icone}</span>
              <span class="grupo__nome">${e.nome}</span>
              <span class="grupo__contagem">
                ${Oe(E,e)}/${e.itens.length}
              </span>
              <kk-icon name=${n?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${e.itens.length===0?l:s`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${Ae(E,e)}%`}
                    ></div>
                  </div>
                `}

            ${n?s`
                  <div class="registros">
                    ${e.itens.map(t=>Je(e,t))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${a.acoes.editar}
                      @click=${()=>void Qe(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${a.acoes.excluir}
                      @click=${()=>void Xe(e)}
                    ></kk-icon-button>
                  </div>
                `:l}
          </div>
        `})}
    </div>
  `}async function Xe(e){await o({titulo:a.prep.excluirKit,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(E=await we(e,E),c(a.prep.kitExcluido),await U())}function Y(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function Ze(){return{id:0,nome:``,icone:``,itens:[Y()],criacao:0}}async function Qe(e){if(e.id===void 0)return;let t=await ke(e.id)??e;N={id:t.id??0,nome:t.nome,icone:t.icone,criacao:t.data_criacao,itens:t.itens.length===0?[Y()]:t.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:r(e.data_vencimento)}))},u()}function $e(e){let t=t=>{N={...N??e,...t}},n=(n,r,i)=>{t({itens:(N??e).itens.map((e,t)=>t===n?{...e,[r]:i}:e)})};return s`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?a.prep.editarKit:a.prep.novoKit}
      </h2>

      <kk-input
        label=${a.prep.nomeDoKit}
        .value=${e.nome}
        @kk-input=${e=>t({nome:e.target.value})}
      ></kk-input>

      <h3 class="secao">${a.prep.emoji}</h3>
      <p class="formulario__ajuda">${a.prep.emojiAjuda}</p>
      <div class="chips chips--em-linha">
        ${ne.map(n=>s`
            <button
              type="button"
              class="chip chip--emoji"
              ?data-ativo=${e.icone===n}
              title=${n}
              @click=${()=>{t({icone:e.icone===n?``:n}),u()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h3 class="secao">${a.prep.itens}</h3>

      ${e.itens.map((e,t)=>s`
          <div class="item-editor">
            <div class="item-editor__topo">
              <kk-input
                class="item-editor__descricao"
                placeholder=${a.prep.descricaoDoItem}
                .value=${e.descricao}
                @kk-input=${e=>n(t,`descricao`,e.target.value)}
              ></kk-input>
              <kk-icon-button
                name="trash"
                label=${a.prep.removerItem}
                @click=${()=>void et(t)}
              ></kk-icon-button>
            </div>

            <div class="formulario__par">
              <kk-input
                size="small"
                placeholder=${a.prep.quantidade}
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
              placeholder=${a.prep.observacoes}
              .value=${e.observacoes}
              @kk-input=${e=>n(t,`observacoes`,e.target.value)}
            ></kk-input>
          </div>
        `)}

      <kk-button
        outline
        @click=${()=>{t({itens:[...(N??e).itens,Y()]}),u()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${a.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void tt()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${a.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{N=null,u()}}
        >
          ${a.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function et(e){await o({titulo:a.prep.removerItem,texto:a.prep.removerItemTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&N!==null&&(N={...N,itens:N.itens.filter((t,n)=>n!==e)},u())}async function tt(){let e=N;if(e===null)return;let t=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!t){N=null,u();return}await je(e),N=null,c(a.prep.kitSalvo),await U()}function nt(){return{id:0,item:``,categoria:f,quantidade:1,peso:0,kcal:0,vencimento:``}}async function rt(){let e=P;e!==null&&(await ve({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?f:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:it(e.vencimento)}),P=null,c(a.prep.itemSalvo),await U())}function it(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function X(e){let t=t=>{P={...P??e,...t}};return s`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?a.prep.editarItem:a.prep.novoItem}
      </h2>

      <kk-input
        label=${a.prep.item}
        .value=${e.item}
        @kk-input=${e=>t({item:e.target.value})}
      ></kk-input>

      <kk-select
        label=${a.prep.categoria}
        .value=${String(Math.max(0,d.findIndex(t=>t.nome===e.categoria)))}
        @kk-change=${e=>{let n=Number(e.target.value);t({categoria:d[n]?.nome??f})}}
      >
        ${d.map((e,t)=>s`
            <kk-option value=${String(t)}>${e.emoji} ${e.nome}</kk-option>
          `)}
      </kk-select>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${a.prep.quantidade}
          .value=${String(e.quantidade)}
          @kk-input=${e=>t({quantidade:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="number"
          min="0"
          label=${a.prep.pesoUnitario}
          .value=${String(e.peso)}
          @kk-input=${e=>t({peso:Number(e.target.value)})}
        ></kk-input>
      </div>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${a.prep.kcal}
          .value=${String(e.kcal)}
          @kk-input=${e=>t({kcal:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="date"
          label=${a.prep.validade}
          .value=${e.vencimento}
          @kk-change=${e=>t({vencimento:e.target.value})}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void rt()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${a.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{P=null,u()}}
        >
          ${a.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function at(t){let n=e=>{O={...O,...e,pessoas:Math.max(1,e.pessoas??O.pessoas)},ye(O),u()},r=le(D,O);return s`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="calculator"></kk-icon>
        <span class="tally__titulo">
          ${a.prep.calculadora}
          <small>${a.prep.calculadoraAjuda}</small>
        </span>
      </div>

      <div class="formulario__par">
        <kk-select
          label=${a.prep.faixaEtaria}
          size="small"
          .value=${O.idade}
          @kk-change=${e=>n({idade:e.target.value})}
        >
          ${ae.map(e=>s`<kk-option value=${e}>${ge(e)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${a.prep.atividade}
          size="small"
          .value=${O.atividade}
          @kk-change=${e=>n({atividade:e.target.value})}
        >
          ${oe.map(e=>s`<kk-option value=${e}>${_e(e)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${a.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${a.prep.menosPessoas}
          @click=${()=>n({pessoas:O.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${O.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${a.prep.maisPessoas}
          @click=${()=>n({pessoas:O.pessoas+1})}
        ></kk-icon-button>
      </div>

      <div class="placares">
        <div class="placar">
          <span class="placar__valor" data-tom=${t.tom===`sucesso`?`sucesso`:t.tom===`aviso`?`aviso`:`perigo`}>
            ${t.dias}
          </span>
          <span class="placar__rotulo">${a.prep.diasDeAutonomia}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${e(t.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${a.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${e(t.pesoTotalKg)} kg</span>
          <span class="placar__rotulo">${a.prep.pesoTotal}</span>
        </div>
      </div>

      <div class="progresso-leitura__barra" role="presentation">
        <div
          class="progresso-leitura__preenchido"
          style=${`width:${t.metaPercentual}%`}
        ></div>
      </div>
      <p class="discreto">
        ${a.prep.metaAutonomia(t.metaPercentual)} ·
        ${a.prep.necessidadeDiaria(e(t.doGrupo))}
      </p>

      <h3 class="secao">${a.prep.logistica}</h3>
      <div class="placares">
        <div class="placar">
          <span class="placar__valor">${r.diasFrios}</span>
          <span class="placar__rotulo">${a.prep.diasSemFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${r.diasTotais}</span>
          <span class="placar__rotulo">${a.prep.diasComFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor" data-tom=${r.vulneravel?`perigo`:`sucesso`}>
            ${r.fibras}
          </span>
          <span class="placar__rotulo">${a.prep.itensDeFibra}</span>
        </div>
      </div>

      ${r.vulneravel?s`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${a.prep.vulneravel}
            </kk-alert>
          `:l}
    </div>
  `}function Z(e){let t=de(e);return t===null?l:t<0?s`<kk-badge variant="danger" pill>${a.prep.vencidoHa(Math.abs(t))}</kk-badge>`:t===0?s`<kk-badge variant="danger" pill>${a.prep.venceHoje}</kk-badge>`:t<7?s`<kk-badge variant="warning" pill>${a.prep.venceEm(t)}</kk-badge>`:l}function ot(t){let r=ie(t.categoria),i=re(t);return s`
    <div class="registro" data-status=${be(t)}>
      <span class="registro__avatar" style=${`background:color-mix(in oklab, ${r.cor} 15%, transparent)`}>
        ${r.emoji}
      </span>

      <button class="registro__alvo" @click=${()=>void Q(t)}>
        <span class="registro__topo">
          <span class="registro__titulo">${t.item}</span>
          ${Z(t)}
        </span>
        <span class="registro__resumo">
          ${a.prep.resumoDoItem(t.quantidade,e(t.peso_unitario))}
          ${i===null?``:`· ${e(i)} kcal`}
        </span>
        ${t.data_vencimento===0?l:s`<span class="registro__resumo">${a.prep.vence(n(t.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${a.acoes.editar}
          @click=${()=>void Q(t)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${a.prep.excluirItem}
          @click=${()=>void st(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function Q(e){if(e.id===void 0)return;let t=await me(e.id)??e;P={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:r(t.data_vencimento)},u()}async function st(e){await o({titulo:a.prep.excluirItem,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await fe(e.id),c(a.prep.itemExcluido),await U())}function ct(){if(P!==null)return X(P);let e=ce(D,O),t=se(D),n=he(xe(D,M));return s`
    ${t.total===0?l:s`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${j}
              @click=${()=>{j=!j,u()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${a.prep.alertas(t.total)}</span>
              <kk-icon name=${j?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${j?s`
                  <div class="alertas__lista">
                    ${[...t.vencidos,...t.aVencer].map(e=>s`
                        <span class="alertas__item">
                          ${Z(e)}
                          <span>${e.item}</span>
                        </span>
                      `)}
                  </div>
                `:l}
          </div>
        `}

    ${at(e)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${a.prep.buscarItens}
        .value=${M}
        @kk-input=${e=>{M=e.target.value,u()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${n.length===0?s`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${D.length===0?a.prep.semEstoque:a.prep.semEstoqueFiltro}</p>
          </div>
        `:s`
          <div class="grupos">
            ${n.map(e=>{let t=A.has(e.nome);return s`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${t}
                    @click=${()=>{let t=new Set(A);t.delete(e.nome)||t.add(e.nome),A=t,u()}}
                  >
                    <span class="grupo__emoji">${e.info.emoji}</span>
                    <span class="grupo__nome">${e.nome}</span>
                    <span class="grupo__contagem">${e.itens.length}</span>
                    <kk-icon name=${t?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${t?s`
                        <div class="registros">
                          ${e.itens.map(e=>ot(e))}
                        </div>
                      `:l}
                </div>
              `})}
          </div>
        `}
  `}function lt(e){return e instanceof v?a.prep.semPrf:(e instanceof _,a.prep.gestoRecusado)}async function $(e){if(!R){R=!0,L=``,u();try{await e()}catch(e){L=lt(e)}finally{R=!1,u()}}}function ut(){return $(async()=>{F=await Ie(),I=await w()})}function dt(){return $(async()=>{F=await Le(),I=await w()})}async function ft(e){let t=e.files?.[0];if(t===void 0||F===null)return;let n=await i({titulo:a.prep.nomeDoDocumento,valor:t.name,placeholder:a.prep.nomeDoDocumento,rotuloConfirmar:a.acoes.salvar,erroVazio:a.prep.informeNome});e.value=``,n!==null&&(await He(F,t,n),I=await w(),c(a.prep.documentoGuardado),u())}function pt(){let e=L===``?l:s`<p class="erro">${L}</p>`;return F===null&&!Ne()?s`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${a.prep.configurarBiometria}</h2>
        <p class="discreto">${a.prep.biometriaAjuda}</p>
        ${Pe()?s`
              ${e}
              <kk-button variant="primary" ?loading=${R} @click=${()=>void ut()}>
                <kk-icon slot="prefix" name="fingerprint"></kk-icon>${a.prep.criarCofre}
              </kk-button>
            `:s`<p class="erro">${a.prep.semBiometria}</p>`}
      </div>
    `:F===null?s`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${a.prep.cofreTrancado}</h2>
        <p class="discreto">${a.prep.destranqueAjuda}</p>
        ${e}
        <kk-button
          variant="primary"
          ?loading=${R}
          @click=${()=>void dt()}
        >
          <kk-icon slot="prefix" name="fingerprint"></kk-icon>${a.prep.destrancarComBiometria}
        </kk-button>
      </div>
    `:s`
    <div class="cofre__acoes">
      <label class="cofre__enviar">
        <kk-icon name="upload"></kk-icon>
        ${a.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void ft(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{K(),u()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${a.prep.trancar}
      </kk-button>
    </div>

    ${I.length===0?s`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${a.prep.semDocumentos}</p>
          </div>
        `:s`
          <div class="registros">
            ${I.map(e=>s`
                <div class="registro">
                  <span class="registro__avatar"><kk-icon name="file"></kk-icon></span>

                  <button class="registro__alvo" @click=${()=>void mt(e)}>
                    <span class="registro__titulo">${e.rotulo}</span>
                    <span class="registro__resumo">
                      ${e.tipo_mime} · ${n(e.data_criacao)}
                    </span>
                  </button>

                  <div class="registro__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${a.acoes.renomear}
                      @click=${()=>void ht(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${a.prep.excluirDocumento}
                      @click=${()=>void gt(e)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${z===null?l:s`
          <kk-dialog
            open
            label=${z.rotulo}
            @kk-after-hide=${()=>{q(),u()}}
          >
            ${z.tipo.startsWith(`image/`)?s`<img class="previa" src=${z.url} alt=${z.rotulo} />`:s`
                  <p>${a.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${z.url} download=${z.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${a.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `}async function mt(e){if(F!==null)try{q(),z={rotulo:e.rotulo,url:await Ge(F,e),tipo:e.tipo_mime},u()}catch{c(a.prep.falhaAoDecifrar,`warning`)}}async function ht(e){let t=await i({titulo:a.prep.renomearDocumento,valor:e.rotulo,placeholder:a.prep.nomeDoDocumento,rotuloConfirmar:a.acoes.renomear,erroVazio:a.prep.informeNome});t!==null&&t!==e.rotulo&&(await Ue(e,t),I=await w(),u())}async function gt(e){await o({titulo:a.prep.excluirDocumento,texto:a.prep.excluirDocumentoTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await We(e.id),I=await w(),c(a.prep.documentoExcluido),u())}var _t={kits:a.prep.kits,estoque:a.prep.estoque,cofre:a.prep.cofre},vt={voltarPara(){return`home`},aoVoltar(e){let t=G(e);return t===`estoque`&&P!==null?(P=null,u(),!0):t===`kits`&&N!==null&&(N=null,u(),!0)},titulo(e){return _t[G(e)]},acoes(e){let t=G(e);if(t===`kits`&&N===null)return s`
        <kk-icon-button
          name="plus"
          label=${a.prep.novoKit}
          @click=${()=>{N=Ze(),u()}}
        ></kk-icon-button>
      `;if(t===`estoque`&&P===null)return s`
        <kk-icon-button
          name="plus"
          label=${a.prep.novoItem}
          @click=${()=>{P=nt(),u()}}
        ></kk-icon-button>
      `},conteudo(e){if(W(),H!==null)return ee(H,Ke);let t=G(e);return t!==`estoque`&&(P=null),t!==`kits`&&(N=null),B?t===`estoque`?ct():t===`cofre`?pt():N===null?Ye():$e(N):s`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{vt as telaPrep};