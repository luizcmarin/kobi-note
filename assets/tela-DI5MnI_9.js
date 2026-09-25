import{r as e}from"./numero-B0JnuQJ5.js";import{s as t}from"./banco-C984k9KX.js";import{Z as n,_ as r,_t as i,b as a,ft as o,g as s,ht as c,m as l,st as u,tt as d,y as ee}from"./index-C6owxr6H.js";import{CATEGORIAS as f,CATEGORIA_PADRAO as p,EMOJIS_DE_KIT as te,caloriasDoItem as ne,categoria as re}from"./dados-BgDpV8rv.js";import{FAIXAS as ie,NIVEIS as ae,alertas as oe,calcularAutonomia as se,calcularLogistica as ce,carregarEstoque as le,diasParaVencer as ue,excluirItem as de,lerPerfil as fe,obterItem as pe,porCategoria as me,rotuloDaFaixa as he,rotuloDoNivel as ge,salvarItem as _e,salvarPerfil as ve,statusDeValidade as ye,visiveis as be}from"./estoque-Vn1936hX.js";import{alternarItem as xe,carregarKits as Se,excluirKit as Ce,itemMarcado as we,kitCompleto as Te,lerProgresso as Ee,marcadosDoKit as De,obterKit as Oe,percentualDoKit as ke,salvarKit as Ae}from"./kits-hckHPppG.js";var m=`note_passkey`,je=32;function h(e){let t=String.fromCharCode(...new Uint8Array(e));return btoa(t).replaceAll(`+`,`-`).replaceAll(`/`,`_`).replace(/=+$/,``)}function g(e){let t=atob(e.replaceAll(`-`,`+`).replaceAll(`_`,`/`));return Uint8Array.from(t,e=>e.charCodeAt(0))}function _(){let e=localStorage.getItem(m);if(e===null)return null;try{let t=JSON.parse(e);return typeof t.id==`string`&&typeof t.sal==`string`?{id:t.id,sal:t.sal}:null}catch{return null}}function Me(){return _()!==null}function Ne(){return isSecureContext&&typeof PublicKeyCredential<`u`}var v=class extends Error{},y=class extends Error{};function b(){return location.hostname}var Pe=new TextEncoder().encode(`kobi-note`);async function Fe(){let e=crypto.getRandomValues(new Uint8Array(je)),t;try{t=await navigator.credentials.create({publicKey:{rp:{name:`Kobi Note`,id:b()},user:{id:Pe,name:`kobi-note`,displayName:`Kobi Note`},challenge:crypto.getRandomValues(new Uint8Array(32)),pubKeyCredParams:[{type:`public-key`,alg:-7},{type:`public-key`,alg:-257}],authenticatorSelection:{residentKey:`required`,userVerification:`required`},extensions:{prf:{}}}})}catch{throw new v}if(!(t instanceof PublicKeyCredential))throw new v;if(t.getClientExtensionResults().prf?.enabled!==!0)throw new y;let n={id:h(t.rawId),sal:h(e)},r=await x(n);return localStorage.setItem(m,JSON.stringify(n)),r}async function x(e){let t;try{t=await navigator.credentials.get({publicKey:{rpId:b(),challenge:crypto.getRandomValues(new Uint8Array(32)),allowCredentials:[{type:`public-key`,id:g(e.id)}],userVerification:`required`,extensions:{prf:{eval:{first:g(e.sal)}}}}})}catch{throw new v}if(!(t instanceof PublicKeyCredential))throw new v;let n=t.getClientExtensionResults().prf?.results?.first;if(n===void 0)throw new y;let r=new Uint8Array(n.byteLength);return r.set(n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)),r}async function Ie(){let e=_();if(e===null)throw new v;return x(e)}var S=16,Le=12,Re=new TextEncoder().encode(`kobi-note-cofre`),C=()=>t(`documentos_cofre`);async function w(e,t){let n=await crypto.subtle.importKey(`raw`,e,`HKDF`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`HKDF`,hash:`SHA-256`,salt:t,info:Re},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function ze(e,t){let n=crypto.getRandomValues(new Uint8Array(S)),r=crypto.getRandomValues(new Uint8Array(Le)),i=await w(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,S),o.set(new Uint8Array(a),28),o}async function Be(e,t){let n=t.slice(0,S),r=t.slice(S,28),i=t.slice(28),a=await w(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}function T(){return C().todos()}async function Ve(e,t,n){await C().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await ze(e,await t.arrayBuffer()),data_criacao:Date.now()})}function He(e,t){return C().salvar({...e,rotulo:t})}function Ue(e){return C().excluir(e)}async function We(e,t){let n=await Be(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var E=[],D={},O=[],k=fe(),A=new Set,j=new Set,M=!1,N=``,P=null,F=null,I=null,L=[],R=``,z=!1,B=null,V=!1,H=!1,U=null;async function W(){[E,O]=await Promise.all([Se(),le()]),D=Ee(),u()}function G(){V||H||U!==null||(H=!0,Ke(),(async()=>{try{await W(),V=!0}catch(e){console.error(`prep: a carga falhou.`,e),U=a(e)}finally{H=!1,u()}})())}function Ge(){U=null,G(),u()}function K(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function q(){I=null,L=[],R=``,J()}function J(){B!==null&&URL.revokeObjectURL(B.url),B=null}var Y=!1;function Ke(){Y||(Y=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&q()}))}function qe(e,t){let r=we(D,e,t.id),a=[t.quantidade,t.observacoes,t.data_vencimento===0?``:o.prep.vence(n(t.data_vencimento))].filter(e=>e!==``).join(` · `);return i`
    <div class="registro" ?data-marcado=${r}>
      <span class="registro__avatar">
        <kk-icon name=${r?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${r}
        @click=${()=>{D=xe(D,e,t.id),u()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${t.descricao}</span>
        </span>
        ${a===``?c:i`<span class="registro__resumo">${a}</span>`}
      </button>
    </div>
  `}function Je(){return E.length===0?i`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${o.prep.semKits}</p>
      </div>
    `:i`
    <div class="grupos">
      ${E.map(e=>{let t=String(e.id),n=A.has(t),r=Te(D,e);return i`
          <div class="grupo" ?data-completo=${r}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${n}
              @click=${()=>{let e=new Set(A);e.delete(t)||e.add(t),A=e,u()}}
            >
              <span class="grupo__emoji">${e.icone===``?`📋`:e.icone}</span>
              <span class="grupo__nome">${e.nome}</span>
              <span class="grupo__contagem">
                ${De(D,e)}/${e.itens.length}
              </span>
              <kk-icon name=${n?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${e.itens.length===0?c:i`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${ke(D,e)}%`}
                    ></div>
                  </div>
                `}

            ${n?i`
                  <div class="registros">
                    ${e.itens.map(t=>qe(e,t))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${o.acoes.editar}
                      @click=${()=>void Ze(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${o.acoes.excluir}
                      @click=${()=>void Ye(e)}
                    ></kk-icon-button>
                  </div>
                `:c}
          </div>
        `})}
    </div>
  `}async function Ye(e){await s({titulo:o.prep.excluirKit,texto:o.acervo.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&(D=await Ce(e,D),l(o.prep.kitExcluido),await W())}function X(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function Xe(){return{id:0,nome:``,icone:``,itens:[X()],criacao:0}}async function Ze(e){if(e.id===void 0)return;let t=await Oe(e.id)??e;P={id:t.id??0,nome:t.nome,icone:t.icone,criacao:t.data_criacao,itens:t.itens.length===0?[X()]:t.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:d(e.data_vencimento)}))},u()}function Qe(e){let t=t=>{P={...P??e,...t}},n=(n,r,i)=>{t({itens:(P??e).itens.map((e,t)=>t===n?{...e,[r]:i}:e)})};return i`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?o.prep.editarKit:o.prep.novoKit}
      </h2>

      <kk-input
        label=${o.prep.nomeDoKit}
        .value=${e.nome}
        @kk-input=${e=>t({nome:e.target.value})}
      ></kk-input>

      <h3 class="secao">${o.prep.emoji}</h3>
      <p class="formulario__ajuda">${o.prep.emojiAjuda}</p>
      <div class="chips chips--em-linha">
        ${te.map(n=>i`
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

      <h3 class="secao">${o.prep.itens}</h3>

      ${e.itens.map((e,t)=>i`
          <div class="item-editor">
            <div class="item-editor__topo">
              <kk-input
                class="item-editor__descricao"
                placeholder=${o.prep.descricaoDoItem}
                .value=${e.descricao}
                @kk-input=${e=>n(t,`descricao`,e.target.value)}
              ></kk-input>
              <kk-icon-button
                name="trash"
                label=${o.prep.removerItem}
                @click=${()=>void $e(t)}
              ></kk-icon-button>
            </div>

            <div class="formulario__par">
              <kk-input
                size="small"
                placeholder=${o.prep.quantidade}
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
              placeholder=${o.prep.observacoes}
              .value=${e.observacoes}
              @kk-input=${e=>n(t,`observacoes`,e.target.value)}
            ></kk-input>
          </div>
        `)}

      <kk-button
        outline
        @click=${()=>{t({itens:[...(P??e).itens,X()]}),u()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${o.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void et()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{P=null,u()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function $e(e){await s({titulo:o.prep.removerItem,texto:o.prep.removerItemTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&P!==null&&(P={...P,itens:P.itens.filter((t,n)=>n!==e)},u())}async function et(){let e=P;if(e===null)return;let t=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!t){P=null,u();return}await Ae(e),P=null,l(o.prep.kitSalvo),await W()}function tt(){return{id:0,item:``,categoria:p,quantidade:1,peso:0,kcal:0,vencimento:``}}async function nt(){let e=F;e!==null&&(await _e({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?p:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:rt(e.vencimento)}),F=null,l(o.prep.itemSalvo),await W())}function rt(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function it(e){let t=t=>{F={...F??e,...t}};return i`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?o.prep.editarItem:o.prep.novoItem}
      </h2>

      <kk-input
        label=${o.prep.item}
        .value=${e.item}
        @kk-input=${e=>t({item:e.target.value})}
      ></kk-input>

      <kk-select
        label=${o.prep.categoria}
        .value=${String(Math.max(0,f.findIndex(t=>t.nome===e.categoria)))}
        @kk-change=${e=>{let n=Number(e.target.value);t({categoria:f[n]?.nome??p})}}
      >
        ${f.map((e,t)=>i`
            <kk-option value=${String(t)}>${e.emoji} ${e.nome}</kk-option>
          `)}
      </kk-select>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${o.prep.quantidade}
          .value=${String(e.quantidade)}
          @kk-input=${e=>t({quantidade:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="number"
          min="0"
          label=${o.prep.pesoUnitario}
          .value=${String(e.peso)}
          @kk-input=${e=>t({peso:Number(e.target.value)})}
        ></kk-input>
      </div>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${o.prep.kcal}
          .value=${String(e.kcal)}
          @kk-input=${e=>t({kcal:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="date"
          label=${o.prep.validade}
          .value=${e.vencimento}
          @kk-change=${e=>t({vencimento:e.target.value})}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void nt()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,u()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function at(t){let n=e=>{k={...k,...e,pessoas:Math.max(1,e.pessoas??k.pessoas)},ve(k),u()},r=ce(O,k);return i`
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
          .value=${k.idade}
          @kk-change=${e=>n({idade:e.target.value})}
        >
          ${ie.map(e=>i`<kk-option value=${e}>${he(e)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${o.prep.atividade}
          size="small"
          .value=${k.atividade}
          @kk-change=${e=>n({atividade:e.target.value})}
        >
          ${ae.map(e=>i`<kk-option value=${e}>${ge(e)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${o.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${o.prep.menosPessoas}
          @click=${()=>n({pessoas:k.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${k.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${o.prep.maisPessoas}
          @click=${()=>n({pessoas:k.pessoas+1})}
        ></kk-icon-button>
      </div>

      <div class="placares">
        <div class="placar">
          <span class="placar__valor" data-tom=${t.tom===`sucesso`?`sucesso`:t.tom===`aviso`?`aviso`:`perigo`}>
            ${t.dias}
          </span>
          <span class="placar__rotulo">${o.prep.diasDeAutonomia}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${e(t.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${o.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${e(t.pesoTotalKg)} kg</span>
          <span class="placar__rotulo">${o.prep.pesoTotal}</span>
        </div>
      </div>

      <div class="progresso-leitura__barra" role="presentation">
        <div
          class="progresso-leitura__preenchido"
          style=${`width:${t.metaPercentual}%`}
        ></div>
      </div>
      <p class="discreto">
        ${o.prep.metaAutonomia(t.metaPercentual)} ·
        ${o.prep.necessidadeDiaria(e(t.doGrupo))}
      </p>

      <h3 class="secao">${o.prep.logistica}</h3>
      <div class="placares">
        <div class="placar">
          <span class="placar__valor">${r.diasFrios}</span>
          <span class="placar__rotulo">${o.prep.diasSemFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${r.diasTotais}</span>
          <span class="placar__rotulo">${o.prep.diasComFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor" data-tom=${r.vulneravel?`perigo`:`sucesso`}>
            ${r.fibras}
          </span>
          <span class="placar__rotulo">${o.prep.itensDeFibra}</span>
        </div>
      </div>

      ${r.vulneravel?i`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${o.prep.vulneravel}
            </kk-alert>
          `:c}
    </div>
  `}function Z(e){let t=ue(e);return t===null?c:t<0?i`<kk-badge variant="danger" pill>${o.prep.vencidoHa(Math.abs(t))}</kk-badge>`:t===0?i`<kk-badge variant="danger" pill>${o.prep.venceHoje}</kk-badge>`:t<7?i`<kk-badge variant="warning" pill>${o.prep.venceEm(t)}</kk-badge>`:c}function ot(t){let r=re(t.categoria),a=ne(t);return i`
    <div class="registro" data-status=${ye(t)}>
      <span class="registro__avatar" style=${`background:color-mix(in oklab, ${r.cor} 15%, transparent)`}>
        ${r.emoji}
      </span>

      <button class="registro__alvo" @click=${()=>void Q(t)}>
        <span class="registro__topo">
          <span class="registro__titulo">${t.item}</span>
          ${Z(t)}
        </span>
        <span class="registro__resumo">
          ${o.prep.resumoDoItem(t.quantidade,e(t.peso_unitario))}
          ${a===null?``:`· ${e(a)} kcal`}
        </span>
        ${t.data_vencimento===0?c:i`<span class="registro__resumo">${o.prep.vence(n(t.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${o.acoes.editar}
          @click=${()=>void Q(t)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${o.prep.excluirItem}
          @click=${()=>void st(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function Q(e){if(e.id===void 0)return;let t=await pe(e.id)??e;F={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:d(t.data_vencimento)},u()}async function st(e){await s({titulo:o.prep.excluirItem,texto:o.acervo.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await de(e.id),l(o.prep.itemExcluido),await W())}function ct(){if(F!==null)return it(F);let e=se(O,k),t=oe(O),n=me(be(O,N));return i`
    ${t.total===0?c:i`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${M}
              @click=${()=>{M=!M,u()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${o.prep.alertas(t.total)}</span>
              <kk-icon name=${M?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${M?i`
                  <div class="alertas__lista">
                    ${[...t.vencidos,...t.aVencer].map(e=>i`
                        <span class="alertas__item">
                          ${Z(e)}
                          <span>${e.item}</span>
                        </span>
                      `)}
                  </div>
                `:c}
          </div>
        `}

    ${at(e)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${o.prep.buscarItens}
        .value=${N}
        @kk-input=${e=>{N=e.target.value,u()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${n.length===0?i`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${O.length===0?o.prep.semEstoque:o.prep.semEstoqueFiltro}</p>
          </div>
        `:i`
          <div class="grupos">
            ${n.map(e=>{let t=j.has(e.nome);return i`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${t}
                    @click=${()=>{let t=new Set(j);t.delete(e.nome)||t.add(e.nome),j=t,u()}}
                  >
                    <span class="grupo__emoji">${e.info.emoji}</span>
                    <span class="grupo__nome">${e.nome}</span>
                    <span class="grupo__contagem">${e.itens.length}</span>
                    <kk-icon name=${t?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${t?i`
                        <div class="registros">
                          ${e.itens.map(e=>ot(e))}
                        </div>
                      `:c}
                </div>
              `})}
          </div>
        `}
  `}function lt(e){return e instanceof y?o.prep.semPrf:(e instanceof v,o.prep.gestoRecusado)}async function $(e){if(!z){z=!0,R=``,u();try{await e()}catch(e){R=lt(e)}finally{z=!1,u()}}}function ut(){return $(async()=>{I=await Fe(),L=await T()})}function dt(){return $(async()=>{I=await Ie(),L=await T()})}async function ft(e){let t=e.files?.[0];if(t===void 0||I===null)return;let n=await r({titulo:o.prep.nomeDoDocumento,valor:t.name,placeholder:o.prep.nomeDoDocumento,rotuloConfirmar:o.acoes.salvar,erroVazio:o.prep.informeNome});e.value=``,n!==null&&(await Ve(I,t,n),L=await T(),l(o.prep.documentoGuardado),u())}function pt(){let e=R===``?c:i`<p class="erro">${R}</p>`;return I===null&&!Me()?i`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${o.prep.configurarBiometria}</h2>
        <p class="discreto">${o.prep.biometriaAjuda}</p>
        ${Ne()?i`
              ${e}
              <kk-button variant="primary" ?loading=${z} @click=${()=>void ut()}>
                <kk-icon slot="prefix" name="fingerprint"></kk-icon>${o.prep.criarCofre}
              </kk-button>
            `:i`<p class="erro">${o.prep.semBiometria}</p>`}
      </div>
    `:I===null?i`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${o.prep.cofreTrancado}</h2>
        <p class="discreto">${o.prep.destranqueAjuda}</p>
        ${e}
        <kk-button
          variant="primary"
          ?loading=${z}
          @click=${()=>void dt()}
        >
          <kk-icon slot="prefix" name="fingerprint"></kk-icon>${o.prep.destrancarComBiometria}
        </kk-button>
      </div>
    `:i`
    <div class="cofre__acoes">
      <label class="cofre__enviar">
        <kk-icon name="upload"></kk-icon>
        ${o.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void ft(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{q(),u()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${o.prep.trancar}
      </kk-button>
    </div>

    ${L.length===0?i`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${o.prep.semDocumentos}</p>
          </div>
        `:i`
          <div class="registros">
            ${L.map(e=>i`
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
                      label=${o.acoes.renomear}
                      @click=${()=>void ht(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${o.prep.excluirDocumento}
                      @click=${()=>void gt(e)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${B===null?c:i`
          <kk-dialog
            open
            label=${B.rotulo}
            @kk-after-hide=${()=>{J(),u()}}
          >
            ${B.tipo.startsWith(`image/`)?i`<img class="previa" src=${B.url} alt=${B.rotulo} />`:i`
                  <p>${o.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${B.url} download=${B.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${o.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `}async function mt(e){if(I!==null)try{J(),B={rotulo:e.rotulo,url:await We(I,e),tipo:e.tipo_mime},u()}catch{l(o.prep.falhaAoDecifrar,`warning`)}}async function ht(e){let t=await r({titulo:o.prep.renomearDocumento,valor:e.rotulo,placeholder:o.prep.nomeDoDocumento,rotuloConfirmar:o.acoes.renomear,erroVazio:o.prep.informeNome});t!==null&&t!==e.rotulo&&(await He(e,t),L=await T(),u())}async function gt(e){await s({titulo:o.prep.excluirDocumento,texto:o.prep.excluirDocumentoTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await Ue(e.id),L=await T(),l(o.prep.documentoExcluido),u())}var _t={kits:o.prep.kits,estoque:o.prep.estoque,cofre:o.prep.cofre},vt={voltarPara(){return`home`},aoVoltar(e){let t=K(e);return t===`estoque`&&F!==null?(F=null,u(),!0):t===`kits`&&P!==null&&(P=null,u(),!0)},titulo(e){return _t[K(e)]},acoes(e){let t=K(e);if(t===`kits`&&P===null)return i`
        <kk-icon-button
          name="plus"
          label=${o.prep.novoKit}
          @click=${()=>{P=Xe(),u()}}
        ></kk-icon-button>
      `;if(t===`estoque`&&F===null)return i`
        <kk-icon-button
          name="plus"
          label=${o.prep.novoItem}
          @click=${()=>{F=tt(),u()}}
        ></kk-icon-button>
      `},conteudo(e){if(G(),U!==null)return ee(U,Ge);let t=K(e);return t!==`estoque`&&(F=null),t!==`kits`&&(P=null),V?t===`estoque`?ct():t===`cofre`?pt():P===null?Je():Qe(P):i`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{vt as telaPrep};