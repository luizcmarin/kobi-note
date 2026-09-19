import{r as e}from"./numero-B0JnuQJ5.js";import{s as t}from"./banco-DQ9IVRRt.js";import{X as n,_ as r,et as i,ft as a,g as o,m as s,mt as c,ot as l,ut as u,v as ee,y as te}from"./index-mkeVomMM.js";import{CATEGORIAS as d,CATEGORIA_PADRAO as f,EMOJIS_DE_KIT as ne,caloriasDoItem as re,categoria as ie}from"./dados-BgDpV8rv.js";import{FAIXAS as ae,NIVEIS as oe,alertas as se,calcularAutonomia as ce,calcularLogistica as le,carregarEstoque as ue,diasParaVencer as de,excluirItem as fe,lerPerfil as pe,obterItem as me,porCategoria as he,rotuloDaFaixa as ge,rotuloDoNivel as _e,salvarItem as ve,salvarPerfil as ye,statusDeValidade as be,visiveis as xe}from"./estoque-1yJ7BmZZ.js";import{alternarItem as Se,carregarKits as Ce,excluirKit as we,itemMarcado as Te,kitCompleto as Ee,lerProgresso as De,marcadosDoKit as Oe,obterKit as ke,percentualDoKit as Ae,salvarKit as je}from"./kits-DlkEylNO.js";var p=`note_passkey`,Me=32;function m(e){let t=String.fromCharCode(...new Uint8Array(e));return btoa(t).replaceAll(`+`,`-`).replaceAll(`/`,`_`).replace(/=+$/,``)}function h(e){let t=atob(e.replaceAll(`-`,`+`).replaceAll(`_`,`/`));return Uint8Array.from(t,e=>e.charCodeAt(0))}function g(){let e=localStorage.getItem(p);if(e===null)return null;try{let t=JSON.parse(e);return typeof t.id==`string`&&typeof t.sal==`string`?{id:t.id,sal:t.sal}:null}catch{return null}}function Ne(){return g()!==null}function Pe(){return isSecureContext&&typeof PublicKeyCredential<`u`}var _=class extends Error{},v=class extends Error{};function y(){return location.hostname}var Fe=new TextEncoder().encode(`kobi-note`);async function Ie(){let e=crypto.getRandomValues(new Uint8Array(Me)),t;try{t=await navigator.credentials.create({publicKey:{rp:{name:`Kobi Note`,id:y()},user:{id:Fe,name:`kobi-note`,displayName:`Kobi Note`},challenge:crypto.getRandomValues(new Uint8Array(32)),pubKeyCredParams:[{type:`public-key`,alg:-7},{type:`public-key`,alg:-257}],authenticatorSelection:{residentKey:`required`,userVerification:`required`},extensions:{prf:{}}}})}catch{throw new _}if(!(t instanceof PublicKeyCredential))throw new _;if(t.getClientExtensionResults().prf?.enabled!==!0)throw new v;let n={id:m(t.rawId),sal:m(e)},r=await b(n);return localStorage.setItem(p,JSON.stringify(n)),r}async function b(e){let t;try{t=await navigator.credentials.get({publicKey:{rpId:y(),challenge:crypto.getRandomValues(new Uint8Array(32)),allowCredentials:[{type:`public-key`,id:h(e.id)}],userVerification:`required`,extensions:{prf:{eval:{first:h(e.sal)}}}}})}catch{throw new _}if(!(t instanceof PublicKeyCredential))throw new _;let n=t.getClientExtensionResults().prf?.results?.first;if(n===void 0)throw new v;let r=new Uint8Array(n.byteLength);return r.set(n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)),r}async function Le(){let e=g();if(e===null)throw new _;return b(e)}var x=16,Re=12,ze=new TextEncoder().encode(`kobi-note-cofre`),S=()=>t(`documentos_cofre`);async function C(e,t){let n=await crypto.subtle.importKey(`raw`,e,`HKDF`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`HKDF`,hash:`SHA-256`,salt:t,info:ze},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function Be(e,t){let n=crypto.getRandomValues(new Uint8Array(x)),r=crypto.getRandomValues(new Uint8Array(Re)),i=await C(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,x),o.set(new Uint8Array(a),28),o}async function Ve(e,t){let n=t.slice(0,x),r=t.slice(x,28),i=t.slice(28),a=await C(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}function w(){return S().todos()}async function He(e,t,n){await S().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await Be(e,await t.arrayBuffer()),data_criacao:Date.now()})}function Ue(e,t){return S().salvar({...e,rotulo:t})}function We(e){return S().excluir(e)}async function Ge(e,t){let n=await Ve(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var T=[],E={},D=[],O=pe(),k=new Set,A=new Set,j=!1,M=``,N=null,P=null,F=null,I=[],L=``,R=!1,z=null,B=!1,V=!1,H=null;async function U(){[T,D]=await Promise.all([Ce(),ue()]),E=De(),l()}function W(){B||V||H!==null||(V=!0,qe(),(async()=>{try{await U(),B=!0}catch(e){console.error(`prep: a carga falhou.`,e),H=te(e)}finally{V=!1,l()}})())}function Ke(){H=null,W(),l()}function G(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function K(){F=null,I=[],L=``,q()}function q(){z!==null&&URL.revokeObjectURL(z.url),z=null}var J=!1;function qe(){J||(J=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&K()}))}function Je(e,t){let r=Te(E,e,t.id),i=[t.quantidade,t.observacoes,t.data_vencimento===0?``:u.prep.vence(n(t.data_vencimento))].filter(e=>e!==``).join(` · `);return c`
    <div class="registro" ?data-marcado=${r}>
      <span class="registro__avatar">
        <kk-icon name=${r?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${r}
        @click=${()=>{E=Se(E,e,t.id),l()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${t.descricao}</span>
        </span>
        ${i===``?a:c`<span class="registro__resumo">${i}</span>`}
      </button>
    </div>
  `}function Ye(){return T.length===0?c`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${u.prep.semKits}</p>
      </div>
    `:c`
    <div class="grupos">
      ${T.map(e=>{let t=String(e.id),n=k.has(t),r=Ee(E,e);return c`
          <div class="grupo" ?data-completo=${r}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${n}
              @click=${()=>{let e=new Set(k);e.delete(t)||e.add(t),k=e,l()}}
            >
              <span class="grupo__emoji">${e.icone===``?`📋`:e.icone}</span>
              <span class="grupo__nome">${e.nome}</span>
              <span class="grupo__contagem">
                ${Oe(E,e)}/${e.itens.length}
              </span>
              <kk-icon name=${n?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${e.itens.length===0?a:c`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${Ae(E,e)}%`}
                    ></div>
                  </div>
                `}

            ${n?c`
                  <div class="registros">
                    ${e.itens.map(t=>Je(e,t))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${u.acoes.editar}
                      @click=${()=>void Qe(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${u.acoes.excluir}
                      @click=${()=>void Xe(e)}
                    ></kk-icon-button>
                  </div>
                `:a}
          </div>
        `})}
    </div>
  `}async function Xe(e){await o({titulo:u.prep.excluirKit,texto:u.acervo.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&(E=await we(e,E),s(u.prep.kitExcluido),await U())}function Y(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function Ze(){return{id:0,nome:``,icone:``,itens:[Y()],criacao:0}}async function Qe(e){if(e.id===void 0)return;let t=await ke(e.id)??e;N={id:t.id??0,nome:t.nome,icone:t.icone,criacao:t.data_criacao,itens:t.itens.length===0?[Y()]:t.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:i(e.data_vencimento)}))},l()}function $e(e){let t=t=>{N={...N??e,...t}},n=(n,r,i)=>{t({itens:(N??e).itens.map((e,t)=>t===n?{...e,[r]:i}:e)})};return c`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?u.prep.editarKit:u.prep.novoKit}
      </h2>

      <kk-input
        label=${u.prep.nomeDoKit}
        .value=${e.nome}
        @kk-input=${e=>t({nome:e.target.value})}
      ></kk-input>

      <h3 class="secao">${u.prep.emoji}</h3>
      <p class="formulario__ajuda">${u.prep.emojiAjuda}</p>
      <div class="chips chips--em-linha">
        ${ne.map(n=>c`
            <button
              type="button"
              class="chip chip--emoji"
              ?data-ativo=${e.icone===n}
              title=${n}
              @click=${()=>{t({icone:e.icone===n?``:n}),l()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h3 class="secao">${u.prep.itens}</h3>

      ${e.itens.map((e,t)=>c`
          <div class="item-editor">
            <div class="item-editor__topo">
              <kk-input
                class="item-editor__descricao"
                placeholder=${u.prep.descricaoDoItem}
                .value=${e.descricao}
                @kk-input=${e=>n(t,`descricao`,e.target.value)}
              ></kk-input>
              <kk-icon-button
                name="trash"
                label=${u.prep.removerItem}
                @click=${()=>void et(t)}
              ></kk-icon-button>
            </div>

            <div class="formulario__par">
              <kk-input
                size="small"
                placeholder=${u.prep.quantidade}
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
              placeholder=${u.prep.observacoes}
              .value=${e.observacoes}
              @kk-input=${e=>n(t,`observacoes`,e.target.value)}
            ></kk-input>
          </div>
        `)}

      <kk-button
        outline
        @click=${()=>{t({itens:[...(N??e).itens,Y()]}),l()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${u.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void tt()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${u.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{N=null,l()}}
        >
          ${u.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function et(e){await o({titulo:u.prep.removerItem,texto:u.prep.removerItemTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&N!==null&&(N={...N,itens:N.itens.filter((t,n)=>n!==e)},l())}async function tt(){let e=N;if(e===null)return;let t=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!t){N=null,l();return}await je(e),N=null,s(u.prep.kitSalvo),await U()}function nt(){return{id:0,item:``,categoria:f,quantidade:1,peso:0,kcal:0,vencimento:``}}async function rt(){let e=P;e!==null&&(await ve({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?f:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:it(e.vencimento)}),P=null,s(u.prep.itemSalvo),await U())}function it(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function X(e){let t=t=>{P={...P??e,...t}};return c`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?u.prep.editarItem:u.prep.novoItem}
      </h2>

      <kk-input
        label=${u.prep.item}
        .value=${e.item}
        @kk-input=${e=>t({item:e.target.value})}
      ></kk-input>

      <kk-select
        label=${u.prep.categoria}
        .value=${String(Math.max(0,d.findIndex(t=>t.nome===e.categoria)))}
        @kk-change=${e=>{let n=Number(e.target.value);t({categoria:d[n]?.nome??f})}}
      >
        ${d.map((e,t)=>c`
            <kk-option value=${String(t)}>${e.emoji} ${e.nome}</kk-option>
          `)}
      </kk-select>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${u.prep.quantidade}
          .value=${String(e.quantidade)}
          @kk-input=${e=>t({quantidade:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="number"
          min="0"
          label=${u.prep.pesoUnitario}
          .value=${String(e.peso)}
          @kk-input=${e=>t({peso:Number(e.target.value)})}
        ></kk-input>
      </div>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${u.prep.kcal}
          .value=${String(e.kcal)}
          @kk-input=${e=>t({kcal:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="date"
          label=${u.prep.validade}
          .value=${e.vencimento}
          @kk-change=${e=>t({vencimento:e.target.value})}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void rt()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${u.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{P=null,l()}}
        >
          ${u.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function at(t){let n=e=>{O={...O,...e,pessoas:Math.max(1,e.pessoas??O.pessoas)},ye(O),l()},r=le(D,O);return c`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="calculator"></kk-icon>
        <span class="tally__titulo">
          ${u.prep.calculadora}
          <small>${u.prep.calculadoraAjuda}</small>
        </span>
      </div>

      <div class="formulario__par">
        <kk-select
          label=${u.prep.faixaEtaria}
          size="small"
          .value=${O.idade}
          @kk-change=${e=>n({idade:e.target.value})}
        >
          ${ae.map(e=>c`<kk-option value=${e}>${ge(e)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${u.prep.atividade}
          size="small"
          .value=${O.atividade}
          @kk-change=${e=>n({atividade:e.target.value})}
        >
          ${oe.map(e=>c`<kk-option value=${e}>${_e(e)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${u.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${u.prep.menosPessoas}
          @click=${()=>n({pessoas:O.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${O.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${u.prep.maisPessoas}
          @click=${()=>n({pessoas:O.pessoas+1})}
        ></kk-icon-button>
      </div>

      <div class="placares">
        <div class="placar">
          <span class="placar__valor" data-tom=${t.tom===`sucesso`?`sucesso`:t.tom===`aviso`?`aviso`:`perigo`}>
            ${t.dias}
          </span>
          <span class="placar__rotulo">${u.prep.diasDeAutonomia}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${e(t.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${u.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${e(t.pesoTotalKg)} kg</span>
          <span class="placar__rotulo">${u.prep.pesoTotal}</span>
        </div>
      </div>

      <div class="progresso-leitura__barra" role="presentation">
        <div
          class="progresso-leitura__preenchido"
          style=${`width:${t.metaPercentual}%`}
        ></div>
      </div>
      <p class="discreto">
        ${u.prep.metaAutonomia(t.metaPercentual)} ·
        ${u.prep.necessidadeDiaria(e(t.doGrupo))}
      </p>

      <h3 class="secao">${u.prep.logistica}</h3>
      <div class="placares">
        <div class="placar">
          <span class="placar__valor">${r.diasFrios}</span>
          <span class="placar__rotulo">${u.prep.diasSemFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${r.diasTotais}</span>
          <span class="placar__rotulo">${u.prep.diasComFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor" data-tom=${r.vulneravel?`perigo`:`sucesso`}>
            ${r.fibras}
          </span>
          <span class="placar__rotulo">${u.prep.itensDeFibra}</span>
        </div>
      </div>

      ${r.vulneravel?c`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${u.prep.vulneravel}
            </kk-alert>
          `:a}
    </div>
  `}function Z(e){let t=de(e);return t===null?a:t<0?c`<kk-badge variant="danger" pill>${u.prep.vencidoHa(Math.abs(t))}</kk-badge>`:t===0?c`<kk-badge variant="danger" pill>${u.prep.venceHoje}</kk-badge>`:t<7?c`<kk-badge variant="warning" pill>${u.prep.venceEm(t)}</kk-badge>`:a}function ot(t){let r=ie(t.categoria),i=re(t);return c`
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
          ${u.prep.resumoDoItem(t.quantidade,e(t.peso_unitario))}
          ${i===null?``:`· ${e(i)} kcal`}
        </span>
        ${t.data_vencimento===0?a:c`<span class="registro__resumo">${u.prep.vence(n(t.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${u.acoes.editar}
          @click=${()=>void Q(t)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${u.prep.excluirItem}
          @click=${()=>void st(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function Q(e){if(e.id===void 0)return;let t=await me(e.id)??e;P={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:i(t.data_vencimento)},l()}async function st(e){await o({titulo:u.prep.excluirItem,texto:u.acervo.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await fe(e.id),s(u.prep.itemExcluido),await U())}function ct(){if(P!==null)return X(P);let e=ce(D,O),t=se(D),n=he(xe(D,M));return c`
    ${t.total===0?a:c`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${j}
              @click=${()=>{j=!j,l()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${u.prep.alertas(t.total)}</span>
              <kk-icon name=${j?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${j?c`
                  <div class="alertas__lista">
                    ${[...t.vencidos,...t.aVencer].map(e=>c`
                        <span class="alertas__item">
                          ${Z(e)}
                          <span>${e.item}</span>
                        </span>
                      `)}
                  </div>
                `:a}
          </div>
        `}

    ${at(e)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${u.prep.buscarItens}
        .value=${M}
        @kk-input=${e=>{M=e.target.value,l()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${n.length===0?c`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${D.length===0?u.prep.semEstoque:u.prep.semEstoqueFiltro}</p>
          </div>
        `:c`
          <div class="grupos">
            ${n.map(e=>{let t=A.has(e.nome);return c`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${t}
                    @click=${()=>{let t=new Set(A);t.delete(e.nome)||t.add(e.nome),A=t,l()}}
                  >
                    <span class="grupo__emoji">${e.info.emoji}</span>
                    <span class="grupo__nome">${e.nome}</span>
                    <span class="grupo__contagem">${e.itens.length}</span>
                    <kk-icon name=${t?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${t?c`
                        <div class="registros">
                          ${e.itens.map(e=>ot(e))}
                        </div>
                      `:a}
                </div>
              `})}
          </div>
        `}
  `}function lt(e){return e instanceof v?u.prep.semPrf:(e instanceof _,u.prep.gestoRecusado)}async function $(e){if(!R){R=!0,L=``,l();try{await e()}catch(e){L=lt(e)}finally{R=!1,l()}}}function ut(){return $(async()=>{F=await Ie(),I=await w()})}function dt(){return $(async()=>{F=await Le(),I=await w()})}async function ft(e){let t=e.files?.[0];if(t===void 0||F===null)return;let n=await r({titulo:u.prep.nomeDoDocumento,valor:t.name,placeholder:u.prep.nomeDoDocumento,rotuloConfirmar:u.acoes.salvar,erroVazio:u.prep.informeNome});e.value=``,n!==null&&(await He(F,t,n),I=await w(),s(u.prep.documentoGuardado),l())}function pt(){let e=L===``?a:c`<p class="erro">${L}</p>`;return F===null&&!Ne()?c`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${u.prep.configurarBiometria}</h2>
        <p class="discreto">${u.prep.biometriaAjuda}</p>
        ${Pe()?c`
              ${e}
              <kk-button variant="primary" ?loading=${R} @click=${()=>void ut()}>
                <kk-icon slot="prefix" name="fingerprint"></kk-icon>${u.prep.criarCofre}
              </kk-button>
            `:c`<p class="erro">${u.prep.semBiometria}</p>`}
      </div>
    `:F===null?c`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${u.prep.cofreTrancado}</h2>
        <p class="discreto">${u.prep.destranqueAjuda}</p>
        ${e}
        <kk-button
          variant="primary"
          ?loading=${R}
          @click=${()=>void dt()}
        >
          <kk-icon slot="prefix" name="fingerprint"></kk-icon>${u.prep.destrancarComBiometria}
        </kk-button>
      </div>
    `:c`
    <div class="cofre__acoes">
      <label class="cofre__enviar">
        <kk-icon name="upload"></kk-icon>
        ${u.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void ft(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{K(),l()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${u.prep.trancar}
      </kk-button>
    </div>

    ${I.length===0?c`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${u.prep.semDocumentos}</p>
          </div>
        `:c`
          <div class="registros">
            ${I.map(e=>c`
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
                      label=${u.acoes.renomear}
                      @click=${()=>void ht(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${u.prep.excluirDocumento}
                      @click=${()=>void gt(e)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${z===null?a:c`
          <kk-dialog
            open
            label=${z.rotulo}
            @kk-after-hide=${()=>{q(),l()}}
          >
            ${z.tipo.startsWith(`image/`)?c`<img class="previa" src=${z.url} alt=${z.rotulo} />`:c`
                  <p>${u.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${z.url} download=${z.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${u.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `}async function mt(e){if(F!==null)try{q(),z={rotulo:e.rotulo,url:await Ge(F,e),tipo:e.tipo_mime},l()}catch{s(u.prep.falhaAoDecifrar,`warning`)}}async function ht(e){let t=await r({titulo:u.prep.renomearDocumento,valor:e.rotulo,placeholder:u.prep.nomeDoDocumento,rotuloConfirmar:u.acoes.renomear,erroVazio:u.prep.informeNome});t!==null&&t!==e.rotulo&&(await Ue(e,t),I=await w(),l())}async function gt(e){await o({titulo:u.prep.excluirDocumento,texto:u.prep.excluirDocumentoTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await We(e.id),I=await w(),s(u.prep.documentoExcluido),l())}var _t={kits:u.prep.kits,estoque:u.prep.estoque,cofre:u.prep.cofre},vt={voltarPara(){return`home`},aoVoltar(e){let t=G(e);return t===`estoque`&&P!==null?(P=null,l(),!0):t===`kits`&&N!==null&&(N=null,l(),!0)},titulo(e){return _t[G(e)]},acoes(e){let t=G(e);if(t===`kits`&&N===null)return c`
        <kk-icon-button
          name="plus"
          label=${u.prep.novoKit}
          @click=${()=>{N=Ze(),l()}}
        ></kk-icon-button>
      `;if(t===`estoque`&&P===null)return c`
        <kk-icon-button
          name="plus"
          label=${u.prep.novoItem}
          @click=${()=>{P=nt(),l()}}
        ></kk-icon-button>
      `},conteudo(e){if(W(),H!==null)return ee(H,Ke);let t=G(e);return t!==`estoque`&&(P=null),t!==`kits`&&(N=null),B?t===`estoque`?ct():t===`cofre`?pt():N===null?Ye():$e(N):c`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{vt as telaPrep};