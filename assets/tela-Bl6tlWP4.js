import{s as e}from"./banco-_B-1AUgO.js";import{r as t}from"./numero-B0JnuQJ5.js";import{E as n,T as r,_ as i,b as a,ct as o,et as s,g as c,h as l,it as u,ot as d,u as f}from"./index-EsbOy3qu.js";import{CATEGORIAS as p,CATEGORIA_PADRAO as m,EMOJIS_DE_KIT as ee,caloriasDoItem as te,categoria as ne}from"./dados-BgDpV8rv.js";import{FAIXAS as re,NIVEIS as ie,alertas as ae,calcularAutonomia as oe,calcularLogistica as se,carregarEstoque as ce,diasParaVencer as le,excluirItem as ue,lerPerfil as de,obterItem as fe,porCategoria as pe,rotuloDaFaixa as me,rotuloDoNivel as he,salvarItem as ge,salvarPerfil as _e,statusDeValidade as ve,visiveis as ye}from"./estoque-CvfiN4ff.js";import{alternarItem as be,carregarKits as xe,excluirKit as Se,itemMarcado as Ce,kitCompleto as we,lerProgresso as Te,marcadosDoKit as Ee,obterKit as De,percentualDoKit as Oe,salvarKit as ke}from"./kits-C3dsFJIL.js";var h=`note_cofre_pin`,g=`note_cofre_passkey`,Ae=2e5,_=16,je=12,Me=32,Ne=new TextEncoder().encode(`kobi-note-cofre`),v=()=>e(`documentos_cofre`);async function y(e,t){if(`pin`in e){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e.pin),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:Ae,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}let n=await crypto.subtle.importKey(`raw`,e.prf,`HKDF`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`HKDF`,hash:`SHA-256`,salt:t,info:Ne},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function b(e,t){let n=crypto.getRandomValues(new Uint8Array(_)),r=crypto.getRandomValues(new Uint8Array(je)),i=await y(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,_),o.set(new Uint8Array(a),28),o}async function x(e,t){let n=t.slice(0,_),r=t.slice(_,28),i=t.slice(28),a=await y(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}async function Pe(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Fe(){return localStorage.getItem(h)!==null}async function Ie(e){return await Pe(e)===localStorage.getItem(h)}function S(e){let t=String.fromCharCode(...new Uint8Array(e));return btoa(t).replaceAll(`+`,`-`).replaceAll(`/`,`_`).replace(/=+$/,``)}function C(e){let t=atob(e.replaceAll(`-`,`+`).replaceAll(`_`,`/`));return Uint8Array.from(t,e=>e.charCodeAt(0))}function w(){let e=localStorage.getItem(g);if(e===null)return null;try{let t=JSON.parse(e);return typeof t.id==`string`&&typeof t.sal==`string`?{id:t.id,sal:t.sal}:null}catch{return null}}function Le(){return w()!==null}function T(){return isSecureContext&&typeof PublicKeyCredential<`u`}var E=class extends Error{},D=class extends Error{};function Re(){return location.hostname}async function ze(){let e=crypto.getRandomValues(new Uint8Array(Me)),t;try{t=await navigator.credentials.create({publicKey:{rp:{name:`Kobi Note`,id:Re()},user:{id:crypto.getRandomValues(new Uint8Array(16)),name:`cofre`,displayName:`Cofre do Kobi Note`},challenge:crypto.getRandomValues(new Uint8Array(32)),pubKeyCredParams:[{type:`public-key`,alg:-7},{type:`public-key`,alg:-257}],authenticatorSelection:{residentKey:`required`,userVerification:`required`},extensions:{prf:{}}}})}catch{throw new E}if(!(t instanceof PublicKeyCredential))throw new E;if(t.getClientExtensionResults().prf?.enabled!==!0)throw new D;let n={id:S(t.rawId),sal:S(e)},r=await Be(n);return localStorage.setItem(g,JSON.stringify(n)),r}async function Be(e){let t;try{t=await navigator.credentials.get({publicKey:{rpId:Re(),challenge:crypto.getRandomValues(new Uint8Array(32)),allowCredentials:[{type:`public-key`,id:C(e.id)}],userVerification:`required`,extensions:{prf:{eval:{first:C(e.sal)}}}}})}catch{throw new E}if(!(t instanceof PublicKeyCredential))throw new E;let n=t.getClientExtensionResults().prf?.results?.first;if(n===void 0)throw new D;let r=new Uint8Array(n.byteLength);return r.set(n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)),{prf:r}}async function Ve(){let e=w();if(e===null)throw new E;return Be(e)}async function He(e,t){for(let n of await O()){let r=await x({pin:e},n.blob_criptografado);await v().salvar({...n,blob_criptografado:await b(t,r)})}localStorage.removeItem(h)}function O(){return v().todos()}async function Ue(e,t,n){await v().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await b(e,await t.arrayBuffer()),data_criacao:Date.now()})}function We(e,t){return v().salvar({...e,rotulo:t})}function Ge(e){return v().excluir(e)}async function Ke(e,t){let n=await x(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var k=[],A={},j=[],M=de(),N=new Set,P=new Set,F=!1,I=``,L=null,R=null,z=null,B=[],V=``,H=``,U=!1,W=null,G=!1,K=!1,q=null;async function J(){[k,j]=await Promise.all([xe(),ce()]),A=Te(),s()}function qe(){G||K||q!==null||(K=!0,Ze(),(async()=>{try{await J(),G=!0}catch(e){console.error(`prep: a carga falhou.`,e),q=n(e)}finally{K=!1,s()}})())}function Je(){q=null,qe(),s()}function Y(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function Ye(){z=null,B=[],V=``,H=``,X()}function X(){W!==null&&URL.revokeObjectURL(W.url),W=null}var Xe=!1;function Ze(){Xe||(Xe=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&Ye()}))}function Qe(e,t){let n=Ce(A,e,t.id),r=[t.quantidade,t.observacoes,t.data_vencimento===0?``:u.prep.vence(i(t.data_vencimento))].filter(e=>e!==``).join(` · `);return o`
    <div class="registro" ?data-marcado=${n}>
      <span class="registro__avatar">
        <kk-icon name=${n?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${n}
        @click=${()=>{A=be(A,e,t.id),s()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${t.descricao}</span>
        </span>
        ${r===``?d:o`<span class="registro__resumo">${r}</span>`}
      </button>
    </div>
  `}function $e(){return k.length===0?o`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${u.prep.semKits}</p>
      </div>
    `:o`
    <div class="grupos">
      ${k.map(e=>{let t=String(e.id),n=N.has(t),r=we(A,e);return o`
          <div class="grupo" ?data-completo=${r}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${n}
              @click=${()=>{let e=new Set(N);e.delete(t)||e.add(t),N=e,s()}}
            >
              <span class="grupo__emoji">${e.icone===``?`📋`:e.icone}</span>
              <span class="grupo__nome">${e.nome}</span>
              <span class="grupo__contagem">
                ${Ee(A,e)}/${e.itens.length}
              </span>
              <kk-icon name=${n?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${e.itens.length===0?d:o`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${Oe(A,e)}%`}
                    ></div>
                  </div>
                `}

            ${n?o`
                  <div class="registros">
                    ${e.itens.map(t=>Qe(e,t))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${u.acoes.editar}
                      @click=${()=>void nt(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${u.acoes.excluir}
                      @click=${()=>void et(e)}
                    ></kk-icon-button>
                  </div>
                `:d}
          </div>
        `})}
    </div>
  `}async function et(e){await l({titulo:u.prep.excluirKit,texto:u.acervo.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&(A=await Se(e,A),f(u.prep.kitExcluido),await J())}function Z(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function tt(){return{id:0,nome:``,icone:``,itens:[Z()],criacao:0}}async function nt(e){if(e.id===void 0)return;let t=await De(e.id)??e;L={id:t.id??0,nome:t.nome,icone:t.icone,criacao:t.data_criacao,itens:t.itens.length===0?[Z()]:t.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:a(e.data_vencimento)}))},s()}function rt(e){let t=t=>{L={...L??e,...t}},n=(n,r,i)=>{t({itens:(L??e).itens.map((e,t)=>t===n?{...e,[r]:i}:e)})};return o`
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
        ${ee.map(n=>o`
            <button
              type="button"
              class="chip chip--emoji"
              ?data-ativo=${e.icone===n}
              title=${n}
              @click=${()=>{t({icone:e.icone===n?``:n}),s()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h3 class="secao">${u.prep.itens}</h3>

      ${e.itens.map((e,t)=>o`
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
                @click=${()=>void it(t)}
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
        @click=${()=>{t({itens:[...(L??e).itens,Z()]}),s()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${u.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void at()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${u.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,s()}}
        >
          ${u.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function it(e){await l({titulo:u.prep.removerItem,texto:u.prep.removerItemTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&L!==null&&(L={...L,itens:L.itens.filter((t,n)=>n!==e)},s())}async function at(){let e=L;if(e===null)return;let t=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!t){L=null,s();return}await ke(e),L=null,f(u.prep.kitSalvo),await J()}function ot(){return{id:0,item:``,categoria:m,quantidade:1,peso:0,kcal:0,vencimento:``}}async function st(){let e=R;e!==null&&(await ge({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?m:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:ct(e.vencimento)}),R=null,f(u.prep.itemSalvo),await J())}function ct(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function lt(e){let t=t=>{R={...R??e,...t}};return o`
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
        .value=${String(Math.max(0,p.findIndex(t=>t.nome===e.categoria)))}
        @kk-change=${e=>{let n=Number(e.target.value);t({categoria:p[n]?.nome??m})}}
      >
        ${p.map((e,t)=>o`
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
        <kk-button variant="primary" @click=${()=>void st()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${u.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,s()}}
        >
          ${u.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ut(e){let n=e=>{M={...M,...e,pessoas:Math.max(1,e.pessoas??M.pessoas)},_e(M),s()},r=se(j,M);return o`
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
          .value=${M.idade}
          @kk-change=${e=>n({idade:e.target.value})}
        >
          ${re.map(e=>o`<kk-option value=${e}>${me(e)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${u.prep.atividade}
          size="small"
          .value=${M.atividade}
          @kk-change=${e=>n({atividade:e.target.value})}
        >
          ${ie.map(e=>o`<kk-option value=${e}>${he(e)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${u.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${u.prep.menosPessoas}
          @click=${()=>n({pessoas:M.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${M.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${u.prep.maisPessoas}
          @click=${()=>n({pessoas:M.pessoas+1})}
        ></kk-icon-button>
      </div>

      <div class="placares">
        <div class="placar">
          <span class="placar__valor" data-tom=${e.tom===`sucesso`?`sucesso`:e.tom===`aviso`?`aviso`:`perigo`}>
            ${e.dias}
          </span>
          <span class="placar__rotulo">${u.prep.diasDeAutonomia}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${t(e.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${u.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${t(e.pesoTotalKg)} kg</span>
          <span class="placar__rotulo">${u.prep.pesoTotal}</span>
        </div>
      </div>

      <div class="progresso-leitura__barra" role="presentation">
        <div
          class="progresso-leitura__preenchido"
          style=${`width:${e.metaPercentual}%`}
        ></div>
      </div>
      <p class="discreto">
        ${u.prep.metaAutonomia(e.metaPercentual)} ·
        ${u.prep.necessidadeDiaria(t(e.doGrupo))}
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

      ${r.vulneravel?o`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${u.prep.vulneravel}
            </kk-alert>
          `:d}
    </div>
  `}function dt(e){let t=le(e);return t===null?d:t<0?o`<kk-badge variant="danger" pill>${u.prep.vencidoHa(Math.abs(t))}</kk-badge>`:t===0?o`<kk-badge variant="danger" pill>${u.prep.venceHoje}</kk-badge>`:t<7?o`<kk-badge variant="warning" pill>${u.prep.venceEm(t)}</kk-badge>`:d}function ft(e){let n=ne(e.categoria),r=te(e);return o`
    <div class="registro" data-status=${ve(e)}>
      <span class="registro__avatar" style=${`background:color-mix(in oklab, ${n.cor} 15%, transparent)`}>
        ${n.emoji}
      </span>

      <button class="registro__alvo" @click=${()=>void pt(e)}>
        <span class="registro__topo">
          <span class="registro__titulo">${e.item}</span>
          ${dt(e)}
        </span>
        <span class="registro__resumo">
          ${u.prep.resumoDoItem(e.quantidade,t(e.peso_unitario))}
          ${r===null?``:`· ${t(r)} kcal`}
        </span>
        ${e.data_vencimento===0?d:o`<span class="registro__resumo">${u.prep.vence(i(e.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${u.acoes.editar}
          @click=${()=>void pt(e)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${u.prep.excluirItem}
          @click=${()=>void mt(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function pt(e){if(e.id===void 0)return;let t=await fe(e.id)??e;R={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:a(t.data_vencimento)},s()}async function mt(e){await l({titulo:u.prep.excluirItem,texto:u.acervo.excluirTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ue(e.id),f(u.prep.itemExcluido),await J())}function ht(){if(R!==null)return lt(R);let e=oe(j,M),t=ae(j),n=pe(ye(j,I));return o`
    ${t.total===0?d:o`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${F}
              @click=${()=>{F=!F,s()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${u.prep.alertas(t.total)}</span>
              <kk-icon name=${F?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${F?o`
                  <div class="alertas__lista">
                    ${[...t.vencidos,...t.aVencer].map(e=>o`
                        <span class="alertas__item">
                          ${dt(e)}
                          <span>${e.item}</span>
                        </span>
                      `)}
                  </div>
                `:d}
          </div>
        `}

    ${ut(e)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${u.prep.buscarItens}
        .value=${I}
        @kk-input=${e=>{I=e.target.value,s()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${n.length===0?o`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${j.length===0?u.prep.semEstoque:u.prep.semEstoqueFiltro}</p>
          </div>
        `:o`
          <div class="grupos">
            ${n.map(e=>{let t=P.has(e.nome);return o`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${t}
                    @click=${()=>{let t=new Set(P);t.delete(e.nome)||t.add(e.nome),P=t,s()}}
                  >
                    <span class="grupo__emoji">${e.info.emoji}</span>
                    <span class="grupo__nome">${e.nome}</span>
                    <span class="grupo__contagem">${e.itens.length}</span>
                    <kk-icon name=${t?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${t?o`
                        <div class="registros">
                          ${e.itens.map(e=>ft(e))}
                        </div>
                      `:d}
                </div>
              `})}
          </div>
        `}
  `}function gt(e){return e instanceof D?u.prep.semPrf:(e instanceof E,u.prep.gestoRecusado)}async function Q(e){if(!U){U=!0,H=``,s();try{await e()}catch(e){H=gt(e)}finally{U=!1,s()}}}function _t(){return Q(async()=>{z=await ze(),B=await O()})}function vt(){return Q(async()=>{z=await Ve(),B=await O()})}async function $(){if(H=``,V===``){H=u.prep.digitePin,s();return}if(!await Ie(V)){H=u.prep.pinIncorreto,V=``,s();return}z={pin:V},V=``,B=await O(),s()}function yt(){let e=z;return e===null||!(`pin`in e)?Promise.resolve():Q(async()=>{let t=await ze();await He(e.pin,t),z=t,B=await O(),f(u.prep.cofreMigrado)})}async function bt(e){let t=e.files?.[0];if(t===void 0||z===null)return;let n=await c({titulo:u.prep.nomeDoDocumento,valor:t.name,placeholder:u.prep.nomeDoDocumento,rotuloConfirmar:u.acoes.salvar,erroVazio:u.prep.informeNome});e.value=``,n!==null&&(await Ue(z,t,n),B=await O(),f(u.prep.documentoGuardado),s())}function xt(){let e=H===``?d:o`<p class="erro">${H}</p>`;return z===null&&Le()?o`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${u.prep.cofreTrancado}</h2>
        <p class="discreto">${u.prep.destranqueAjuda}</p>
        ${e}
        <kk-button
          variant="primary"
          ?loading=${U}
          @click=${()=>void vt()}
        >
          <kk-icon slot="prefix" name="fingerprint"></kk-icon>${u.prep.destrancarComBiometria}
        </kk-button>
      </div>
    `:z===null&&Fe()?o`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${u.prep.cofreTrancado}</h2>
        <p class="discreto">${u.prep.destranqueAjuda}</p>

        <kk-input
          type="password"
          inputmode="numeric"
          password-toggle
          label=${u.prep.pin}
          .value=${V}
          @kk-input=${e=>{V=e.target.value}}
          @keydown=${e=>{e.key===`Enter`&&$()}}
        ></kk-input>
        ${e}
        <kk-button variant="primary" @click=${()=>void $()}>
          <kk-icon slot="prefix" name="lock-open"></kk-icon>${u.prep.destrancar}
        </kk-button>
      </div>
    `:z===null?o`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${u.prep.configurarBiometria}</h2>
        <p class="discreto">${u.prep.biometriaAjuda}</p>
        ${T()?o`
              ${e}
              <kk-button variant="primary" ?loading=${U} @click=${()=>void _t()}>
                <kk-icon slot="prefix" name="fingerprint"></kk-icon>${u.prep.criarCofre}
              </kk-button>
            `:o`<p class="erro">${u.prep.semBiometria}</p>`}
      </div>
    `:o`
    ${`pin`in z?o`
          <kk-alert variant="warning" open>
            <kk-icon slot="icon" name="fingerprint"></kk-icon>
            <strong>${u.prep.migrarTitulo}</strong> ${u.prep.migrarTexto}
            ${T()?o`
                  <kk-button
                    size="small"
                    variant="primary"
                    ?loading=${U}
                    @click=${()=>void yt()}
                  >
                    ${u.prep.migrar}
                  </kk-button>
                `:d}
          </kk-alert>
          ${e}
        `:d}
    <div class="cofre__acoes">
      <label class="cofre__enviar">
        <kk-icon name="upload"></kk-icon>
        ${u.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void bt(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{Ye(),s()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${u.prep.trancar}
      </kk-button>
    </div>

    ${B.length===0?o`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${u.prep.semDocumentos}</p>
          </div>
        `:o`
          <div class="registros">
            ${B.map(e=>o`
                <div class="registro">
                  <span class="registro__avatar"><kk-icon name="file"></kk-icon></span>

                  <button class="registro__alvo" @click=${()=>void St(e)}>
                    <span class="registro__titulo">${e.rotulo}</span>
                    <span class="registro__resumo">
                      ${e.tipo_mime} · ${i(e.data_criacao)}
                    </span>
                  </button>

                  <div class="registro__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${u.acoes.renomear}
                      @click=${()=>void Ct(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${u.prep.excluirDocumento}
                      @click=${()=>void wt(e)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${W===null?d:o`
          <kk-dialog
            open
            label=${W.rotulo}
            @kk-after-hide=${()=>{X(),s()}}
          >
            ${W.tipo.startsWith(`image/`)?o`<img class="previa" src=${W.url} alt=${W.rotulo} />`:o`
                  <p>${u.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${W.url} download=${W.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${u.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `}async function St(e){if(z!==null)try{X(),W={rotulo:e.rotulo,url:await Ke(z,e),tipo:e.tipo_mime},s()}catch{f(u.prep.falhaAoDecifrar,`warning`)}}async function Ct(e){let t=await c({titulo:u.prep.renomearDocumento,valor:e.rotulo,placeholder:u.prep.nomeDoDocumento,rotuloConfirmar:u.acoes.renomear,erroVazio:u.prep.informeNome});t!==null&&t!==e.rotulo&&(await We(e,t),B=await O(),s())}async function wt(e){await l({titulo:u.prep.excluirDocumento,texto:u.prep.excluirDocumentoTexto,rotuloConfirmar:u.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await Ge(e.id),B=await O(),f(u.prep.documentoExcluido),s())}var Tt={kits:u.prep.kits,estoque:u.prep.estoque,cofre:u.prep.cofre},Et={voltarPara(){return`home`},aoVoltar(e){let t=Y(e);return t===`estoque`&&R!==null?(R=null,s(),!0):t===`kits`&&L!==null&&(L=null,s(),!0)},titulo(e){return Tt[Y(e)]},acoes(e){let t=Y(e);if(t===`kits`&&L===null)return o`
        <kk-icon-button
          name="plus"
          label=${u.prep.novoKit}
          @click=${()=>{L=tt(),s()}}
        ></kk-icon-button>
      `;if(t===`estoque`&&R===null)return o`
        <kk-icon-button
          name="plus"
          label=${u.prep.novoItem}
          @click=${()=>{R=ot(),s()}}
        ></kk-icon-button>
      `},conteudo(e){if(qe(),q!==null)return r(q,Je);let t=Y(e);return t!==`estoque`&&(R=null),t!==`kits`&&(L=null),G?t===`estoque`?ht():t===`cofre`?xt():L===null?$e():rt(L):o`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{Et as telaPrep};