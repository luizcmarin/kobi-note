import{s as e}from"./banco-_B-1AUgO.js";import{E as t,T as n,_ as r,b as i,ct as a,et as o,g as s,it as c,m as l,ot as u,p as d,u as f}from"./index-7-UXbWO3.js";import{CATEGORIAS as p,CATEGORIA_PADRAO as m,EMOJIS_DE_KIT as ee,caloriasDoItem as te,categoria as ne}from"./dados-BgDpV8rv.js";import{FAIXAS as re,NIVEIS as h,alertas as ie,calcularAutonomia as ae,calcularLogistica as oe,carregarEstoque as se,diasParaVencer as ce,excluirItem as le,lerPerfil as ue,obterItem as de,porCategoria as fe,rotuloDaFaixa as pe,rotuloDoNivel as me,salvarItem as he,salvarPerfil as ge,statusDeValidade as _e,visiveis as ve}from"./estoque-CvfiN4ff.js";import{alternarItem as ye,carregarKits as be,excluirKit as xe,itemMarcado as Se,kitCompleto as Ce,lerProgresso as we,marcadosDoKit as Te,obterKit as Ee,percentualDoKit as De,salvarKit as Oe}from"./kits-D34j6ob3.js";var g=`note_cofre_pin`,ke=2e5,_=16,Ae=12,v=()=>e(`documentos_cofre`);async function y(e,t){let n=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:ke,hash:`SHA-256`},n,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function je(e,t){let n=crypto.getRandomValues(new Uint8Array(_)),r=crypto.getRandomValues(new Uint8Array(Ae)),i=await y(e,n),a=await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,t),o=new Uint8Array(28+a.byteLength);return o.set(n,0),o.set(r,_),o.set(new Uint8Array(a),28),o}async function b(e,t){let n=t.slice(0,_),r=t.slice(_,28),i=t.slice(28),a=await y(e,n);return crypto.subtle.decrypt({name:`AES-GCM`,iv:r},a,i)}async function x(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function S(){return localStorage.getItem(g)!==null}async function Me(e){return await x(e)===localStorage.getItem(g)}async function Ne(e){localStorage.setItem(g,await x(e))}function C(){return v().todos()}async function Pe(e,t,n){await v().salvar({rotulo:n,tipo_mime:t.type===``?`application/octet-stream`:t.type,blob_criptografado:await je(e,await t.arrayBuffer()),data_criacao:Date.now()})}function Fe(e,t){return v().salvar({...e,rotulo:t})}function Ie(e){return v().excluir(e)}async function Le(e,t){let n=await b(e,t.blob_criptografado);return URL.createObjectURL(new Blob([n],{type:t.tipo_mime}))}var w=[],T={},E=[],D=ue(),O=new Set,k=new Set,A=!1,j=``,M=null,N=null,P=null,F=[],I=``,L=``,R=``,z=null,B=!1,V=!1,H=null;async function U(){[w,E]=await Promise.all([be(),se()]),T=we(),o()}function W(){B||V||H!==null||(V=!0,ze(),(async()=>{try{await U(),B=!0}catch(e){console.error(`prep: a carga falhou.`,e),H=t(e)}finally{V=!1,o()}})())}function Re(){H=null,W(),o()}function G(e){let t=e.args[0];return t===`estoque`||t===`cofre`?t:`kits`}function K(){P=null,F=[],I=``,L=``,R=``,q()}function q(){z!==null&&URL.revokeObjectURL(z.url),z=null}var J=!1;function ze(){J||(J=!0,addEventListener(`hashchange`,()=>{let e=location.hash.replace(/^#\/?/,``).split(`/`);(e[0]!==`prep`||e[1]!==`cofre`)&&K()}))}function Be(e,t){let n=Se(T,e,t.id),i=[t.quantidade,t.observacoes,t.data_vencimento===0?``:c.prep.vence(r(t.data_vencimento))].filter(e=>e!==``).join(` · `);return a`
    <div class="registro" ?data-marcado=${n}>
      <span class="registro__avatar">
        <kk-icon name=${n?`circle-check`:`circle`}></kk-icon>
      </span>

      <button
        class="registro__alvo"
        aria-pressed=${n}
        @click=${()=>{T=ye(T,e,t.id),o()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${t.descricao}</span>
        </span>
        ${i===``?u:a`<span class="registro__resumo">${i}</span>`}
      </button>
    </div>
  `}function Ve(){return w.length===0?a`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <p>${c.prep.semKits}</p>
      </div>
    `:a`
    <div class="grupos">
      ${w.map(e=>{let t=String(e.id),n=O.has(t),r=Ce(T,e);return a`
          <div class="grupo" ?data-completo=${r}>
            <button
              type="button"
              class="grupo__alvo"
              aria-expanded=${n}
              @click=${()=>{let e=new Set(O);e.delete(t)||e.add(t),O=e,o()}}
            >
              <span class="grupo__emoji">${e.icone===``?`📋`:e.icone}</span>
              <span class="grupo__nome">${e.nome}</span>
              <span class="grupo__contagem">
                ${Te(T,e)}/${e.itens.length}
              </span>
              <kk-icon name=${n?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${e.itens.length===0?u:a`
                  <div class="progresso-leitura__barra" role="presentation">
                    <div
                      class="progresso-leitura__preenchido"
                      style=${`width:${De(T,e)}%`}
                    ></div>
                  </div>
                `}

            ${n?a`
                  <div class="registros">
                    ${e.itens.map(t=>Be(e,t))}
                  </div>

                  <div class="grupo__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${c.acoes.editar}
                      @click=${()=>void We(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${c.acoes.excluir}
                      @click=${()=>void He(e)}
                    ></kk-icon-button>
                  </div>
                `:u}
          </div>
        `})}
    </div>
  `}async function He(e){await d({titulo:c.prep.excluirKit,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&(T=await xe(e,T),f(c.prep.kitExcluido),await U())}function Y(){return{id:0,descricao:``,quantidade:``,observacoes:``,vencimento:``}}function Ue(){return{id:0,nome:``,icone:``,itens:[Y()],criacao:0}}async function We(e){if(e.id===void 0)return;let t=await Ee(e.id)??e;M={id:t.id??0,nome:t.nome,icone:t.icone,criacao:t.data_criacao,itens:t.itens.length===0?[Y()]:t.itens.map(e=>({id:e.id,descricao:e.descricao,quantidade:e.quantidade,observacoes:e.observacoes,vencimento:e.data_vencimento===0?``:i(e.data_vencimento)}))},o()}function Ge(e){let t=t=>{M={...M??e,...t}},n=(n,r,i)=>{t({itens:(M??e).itens.map((e,t)=>t===n?{...e,[r]:i}:e)})};return a`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?c.prep.editarKit:c.prep.novoKit}
      </h2>

      <kk-input
        label=${c.prep.nomeDoKit}
        .value=${e.nome}
        @kk-input=${e=>t({nome:e.target.value})}
      ></kk-input>

      <h3 class="secao">${c.prep.emoji}</h3>
      <p class="formulario__ajuda">${c.prep.emojiAjuda}</p>
      <div class="chips chips--em-linha">
        ${ee.map(n=>a`
            <button
              type="button"
              class="chip chip--emoji"
              ?data-ativo=${e.icone===n}
              title=${n}
              @click=${()=>{t({icone:e.icone===n?``:n}),o()}}
            >
              ${n}
            </button>
          `)}
      </div>

      <h3 class="secao">${c.prep.itens}</h3>

      ${e.itens.map((e,t)=>a`
          <div class="item-editor">
            <div class="item-editor__topo">
              <kk-input
                class="item-editor__descricao"
                placeholder=${c.prep.descricaoDoItem}
                .value=${e.descricao}
                @kk-input=${e=>n(t,`descricao`,e.target.value)}
              ></kk-input>
              <kk-icon-button
                name="trash"
                label=${c.prep.removerItem}
                @click=${()=>void Ke(t)}
              ></kk-icon-button>
            </div>

            <div class="formulario__par">
              <kk-input
                size="small"
                placeholder=${c.prep.quantidade}
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
              placeholder=${c.prep.observacoes}
              .value=${e.observacoes}
              @kk-input=${e=>n(t,`observacoes`,e.target.value)}
            ></kk-input>
          </div>
        `)}

      <kk-button
        outline
        @click=${()=>{t({itens:[...(M??e).itens,Y()]}),o()}}
      >
        <kk-icon slot="prefix" name="plus"></kk-icon>${c.prep.adicionarItem}
      </kk-button>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void qe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{M=null,o()}}
        >
          ${c.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Ke(e){await d({titulo:c.prep.removerItem,texto:c.prep.removerItemTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&M!==null&&(M={...M,itens:M.itens.filter((t,n)=>n!==e)},o())}async function qe(){let e=M;if(e===null)return;let t=e.itens.some(e=>e.descricao.trim()!==``);if(e.nome.trim()===``&&!t){M=null,o();return}await Oe(e),M=null,f(c.prep.kitSalvo),await U()}function Je(){return{id:0,item:``,categoria:m,quantidade:1,peso:0,kcal:0,vencimento:``}}async function Ye(){let e=N;e!==null&&(await he({...e.id>0?{id:e.id}:{},item:e.item.trim(),categoria:e.categoria===``?m:e.categoria,quantidade:Number(e.quantidade),peso_unitario:Number(e.peso),calorias_por_100g:Number(e.kcal),data_vencimento:e.vencimento===``?0:Xe(e.vencimento)}),N=null,f(c.prep.itemSalvo),await U())}function Xe(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getTime()}function Ze(e){let t=t=>{N={...N??e,...t}};return a`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?c.prep.editarItem:c.prep.novoItem}
      </h2>

      <kk-input
        label=${c.prep.item}
        .value=${e.item}
        @kk-input=${e=>t({item:e.target.value})}
      ></kk-input>

      <kk-select
        label=${c.prep.categoria}
        .value=${String(Math.max(0,p.findIndex(t=>t.nome===e.categoria)))}
        @kk-change=${e=>{let n=Number(e.target.value);t({categoria:p[n]?.nome??m})}}
      >
        ${p.map((e,t)=>a`
            <kk-option value=${String(t)}>${e.emoji} ${e.nome}</kk-option>
          `)}
      </kk-select>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${c.prep.quantidade}
          .value=${String(e.quantidade)}
          @kk-input=${e=>t({quantidade:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="number"
          min="0"
          label=${c.prep.pesoUnitario}
          .value=${String(e.peso)}
          @kk-input=${e=>t({peso:Number(e.target.value)})}
        ></kk-input>
      </div>

      <div class="formulario__par">
        <kk-input
          type="number"
          min="0"
          label=${c.prep.kcal}
          .value=${String(e.kcal)}
          @kk-input=${e=>t({kcal:Number(e.target.value)})}
        ></kk-input>
        <kk-input
          type="date"
          label=${c.prep.validade}
          .value=${e.vencimento}
          @kk-change=${e=>t({vencimento:e.target.value})}
        ></kk-input>
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Ye()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{N=null,o()}}
        >
          ${c.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function X(e){let t=e=>{D={...D,...e,pessoas:Math.max(1,e.pessoas??D.pessoas)},ge(D),o()},n=oe(E,D);return a`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="calculator"></kk-icon>
        <span class="tally__titulo">
          ${c.prep.calculadora}
          <small>${c.prep.calculadoraAjuda}</small>
        </span>
      </div>

      <div class="formulario__par">
        <kk-select
          label=${c.prep.faixaEtaria}
          size="small"
          .value=${D.idade}
          @kk-change=${e=>t({idade:e.target.value})}
        >
          ${re.map(e=>a`<kk-option value=${e}>${pe(e)}</kk-option>`)}
        </kk-select>

        <kk-select
          label=${c.prep.atividade}
          size="small"
          .value=${D.atividade}
          @kk-change=${e=>t({atividade:e.target.value})}
        >
          ${h.map(e=>a`<kk-option value=${e}>${me(e)}</kk-option>`)}
        </kk-select>
      </div>

      <div class="tally__linha">
        <span class="tally__nome"><kk-icon name="users"></kk-icon>${c.prep.pessoas}</span>
        <kk-icon-button
          name="minus"
          label=${c.prep.menosPessoas}
          @click=${()=>t({pessoas:D.pessoas-1})}
        ></kk-icon-button>
        <span class="tally__valor">${D.pessoas}</span>
        <kk-icon-button
          name="plus"
          label=${c.prep.maisPessoas}
          @click=${()=>t({pessoas:D.pessoas+1})}
        ></kk-icon-button>
      </div>

      <div class="placares">
        <div class="placar">
          <span class="placar__valor" data-tom=${e.tom===`sucesso`?`sucesso`:e.tom===`aviso`?`aviso`:`perigo`}>
            ${e.dias}
          </span>
          <span class="placar__rotulo">${c.prep.diasDeAutonomia}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${s(e.litrosDeAgua)} L</span>
          <span class="placar__rotulo">${c.prep.aguaSugerida}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${s(e.pesoTotalKg)} kg</span>
          <span class="placar__rotulo">${c.prep.pesoTotal}</span>
        </div>
      </div>

      <div class="progresso-leitura__barra" role="presentation">
        <div
          class="progresso-leitura__preenchido"
          style=${`width:${e.metaPercentual}%`}
        ></div>
      </div>
      <p class="discreto">
        ${c.prep.metaAutonomia(e.metaPercentual)} ·
        ${c.prep.necessidadeDiaria(s(e.doGrupo))}
      </p>

      <h3 class="secao">${c.prep.logistica}</h3>
      <div class="placares">
        <div class="placar">
          <span class="placar__valor">${n.diasFrios}</span>
          <span class="placar__rotulo">${c.prep.diasSemFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor">${n.diasTotais}</span>
          <span class="placar__rotulo">${c.prep.diasComFogo}</span>
        </div>
        <div class="placar">
          <span class="placar__valor" data-tom=${n.vulneravel?`perigo`:`sucesso`}>
            ${n.fibras}
          </span>
          <span class="placar__rotulo">${c.prep.itensDeFibra}</span>
        </div>
      </div>

      ${n.vulneravel?a`
            <kk-alert variant="warning" open>
              <kk-icon slot="icon" name="alert-triangle"></kk-icon>
              ${c.prep.vulneravel}
            </kk-alert>
          `:u}
    </div>
  `}function Z(e){let t=ce(e);return t===null?u:t<0?a`<kk-badge variant="danger" pill>${c.prep.vencidoHa(Math.abs(t))}</kk-badge>`:t===0?a`<kk-badge variant="danger" pill>${c.prep.venceHoje}</kk-badge>`:t<7?a`<kk-badge variant="warning" pill>${c.prep.venceEm(t)}</kk-badge>`:u}function Qe(e){let t=ne(e.categoria),n=te(e);return a`
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
          ${c.prep.resumoDoItem(e.quantidade,s(e.peso_unitario))}
          ${n===null?``:`· ${s(n)} kcal`}
        </span>
        ${e.data_vencimento===0?u:a`<span class="registro__resumo">${c.prep.vence(r(e.data_vencimento))}</span>`}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${c.acoes.editar}
          @click=${()=>void Q(e)}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${c.prep.excluirItem}
          @click=${()=>void $e(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}async function Q(e){if(e.id===void 0)return;let t=await de(e.id)??e;N={id:t.id??0,item:t.item,categoria:t.categoria,quantidade:t.quantidade,peso:t.peso_unitario,kcal:t.calorias_por_100g,vencimento:t.data_vencimento===0?``:i(t.data_vencimento)},o()}async function $e(e){await d({titulo:c.prep.excluirItem,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await le(e.id),f(c.prep.itemExcluido),await U())}function et(){if(N!==null)return Ze(N);let e=ae(E,D),t=ie(E),n=fe(ve(E,j));return a`
    ${t.total===0?u:a`
          <div class="alertas">
            <button
              class="alertas__alvo"
              aria-expanded=${A}
              @click=${()=>{A=!A,o()}}
            >
              <kk-icon name="alert-triangle"></kk-icon>
              <span class="alertas__titulo">${c.prep.alertas(t.total)}</span>
              <kk-icon name=${A?`chevron-up`:`chevron-down`}></kk-icon>
            </button>

            ${A?a`
                  <div class="alertas__lista">
                    ${[...t.vencidos,...t.aVencer].map(e=>a`
                        <span class="alertas__item">
                          ${Z(e)}
                          <span>${e.item}</span>
                        </span>
                      `)}
                  </div>
                `:u}
          </div>
        `}

    ${X(e)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${c.prep.buscarItens}
        .value=${j}
        @kk-input=${e=>{j=e.target.value,o()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${n.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="package"></kk-icon>
            <p>${E.length===0?c.prep.semEstoque:c.prep.semEstoqueFiltro}</p>
          </div>
        `:a`
          <div class="grupos">
            ${n.map(e=>{let t=k.has(e.nome);return a`
                <div class="grupo">
                  <button
                    class="grupo__alvo"
                    aria-expanded=${t}
                    @click=${()=>{let t=new Set(k);t.delete(e.nome)||t.add(e.nome),k=t,o()}}
                  >
                    <span class="grupo__emoji">${e.info.emoji}</span>
                    <span class="grupo__nome">${e.nome}</span>
                    <span class="grupo__contagem">${e.itens.length}</span>
                    <kk-icon name=${t?`chevron-up`:`chevron-down`}></kk-icon>
                  </button>

                  ${t?a`
                        <div class="registros">
                          ${e.itens.map(e=>Qe(e))}
                        </div>
                      `:u}
                </div>
              `})}
          </div>
        `}
  `}async function $(){if(R=``,I===``){R=c.prep.digitePin,o();return}if(!await Me(I)){R=c.prep.pinIncorreto,I=``,o();return}P=I,I=``,F=await C(),o()}async function tt(){if(R=``,I.length<4){R=c.prep.pinCurto(4),o();return}if(I!==L){R=c.prep.pinNaoConfere,o();return}await Ne(I),P=I,I=``,L=``,F=await C(),o()}async function nt(e){let t=e.files?.[0];if(t===void 0||P===null)return;let n=await l({titulo:c.prep.nomeDoDocumento,valor:t.name,placeholder:c.prep.nomeDoDocumento,rotuloConfirmar:c.acoes.salvar,erroVazio:c.prep.informeNome});e.value=``,n!==null&&(await Pe(P,t,n),F=await C(),f(c.prep.documentoGuardado),o())}function rt(){return S()?P===null?a`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${c.prep.cofreTrancado}</h2>
        <p class="discreto">${c.prep.destranqueAjuda}</p>

        <kk-input
          type="password"
          inputmode="numeric"
          password-toggle
          label=${c.prep.pin}
          .value=${I}
          @kk-input=${e=>{I=e.target.value}}
          @keydown=${e=>{e.key===`Enter`&&$()}}
        ></kk-input>

        ${R===``?u:a`<p class="erro">${R}</p>`}

        <kk-button variant="primary" @click=${()=>void $()}>
          <kk-icon slot="prefix" name="lock-open"></kk-icon>${c.prep.destrancar}
        </kk-button>
      </div>
    `:a`
    <div class="cofre__acoes">
      <label class="cofre__enviar">
        <kk-icon name="upload"></kk-icon>
        ${c.prep.guardarDocumento}
        <input
          type="file"
          @change=${e=>void nt(e.target)}
        />
      </label>
      <kk-button
        outline
        @click=${()=>{K(),o()}}
      >
        <kk-icon slot="prefix" name="lock"></kk-icon>${c.prep.trancar}
      </kk-button>
    </div>

    ${F.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="lock"></kk-icon>
            <p>${c.prep.semDocumentos}</p>
          </div>
        `:a`
          <div class="registros">
            ${F.map(e=>a`
                <div class="registro">
                  <span class="registro__avatar"><kk-icon name="file"></kk-icon></span>

                  <button class="registro__alvo" @click=${()=>void it(e)}>
                    <span class="registro__titulo">${e.rotulo}</span>
                    <span class="registro__resumo">
                      ${e.tipo_mime} · ${r(e.data_criacao)}
                    </span>
                  </button>

                  <div class="registro__acoes">
                    <kk-icon-button
                      name="pencil"
                      label=${c.acoes.renomear}
                      @click=${()=>void at(e)}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${c.prep.excluirDocumento}
                      @click=${()=>void ot(e)}
                    ></kk-icon-button>
                  </div>
                </div>
              `)}
          </div>
        `}

    ${z===null?u:a`
          <kk-dialog
            open
            label=${z.rotulo}
            @kk-after-hide=${()=>{q(),o()}}
          >
            ${z.tipo.startsWith(`image/`)?a`<img class="previa" src=${z.url} alt=${z.rotulo} />`:a`
                  <p>${c.prep.semPreVisualizacao}</p>
                  <kk-button variant="primary" href=${z.url} download=${z.rotulo}>
                    <kk-icon slot="prefix" name="download"></kk-icon>${c.prep.baixar}
                  </kk-button>
                `}
          </kk-dialog>
        `}
  `:a`
      <div class="formulario formulario--cartao">
        <h2 class="formulario__titulo">${c.prep.configurarPin}</h2>
        <p class="discreto">${c.prep.pinAjuda}</p>

        <kk-input
          type="password"
          inputmode="numeric"
          password-toggle
          label=${c.prep.pin}
          .value=${I}
          @kk-input=${e=>{I=e.target.value}}
        ></kk-input>
        <kk-input
          type="password"
          inputmode="numeric"
          label=${c.prep.confirmarPin}
          .value=${L}
          @kk-input=${e=>{L=e.target.value}}
        ></kk-input>

        ${R===``?u:a`<p class="erro">${R}</p>`}

        <kk-button variant="primary" @click=${()=>void tt()}>
          <kk-icon slot="prefix" name="lock"></kk-icon>${c.prep.criarCofre}
        </kk-button>
      </div>
    `}async function it(e){if(P!==null)try{q(),z={rotulo:e.rotulo,url:await Le(P,e),tipo:e.tipo_mime},o()}catch{f(c.prep.falhaAoDecifrar,`warning`)}}async function at(e){let t=await l({titulo:c.prep.renomearDocumento,valor:e.rotulo,placeholder:c.prep.nomeDoDocumento,rotuloConfirmar:c.acoes.renomear,erroVazio:c.prep.informeNome});t!==null&&t!==e.rotulo&&(await Fe(e,t),F=await C(),o())}async function ot(e){await d({titulo:c.prep.excluirDocumento,texto:c.prep.excluirDocumentoTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await Ie(e.id),F=await C(),f(c.prep.documentoExcluido),o())}var st={kits:c.prep.kits,estoque:c.prep.estoque,cofre:c.prep.cofre},ct={voltarPara(){return`home`},aoVoltar(e){let t=G(e);return t===`estoque`&&N!==null?(N=null,o(),!0):t===`kits`&&M!==null&&(M=null,o(),!0)},titulo(e){return st[G(e)]},acoes(e){let t=G(e);if(t===`kits`&&M===null)return a`
        <kk-icon-button
          name="plus"
          label=${c.prep.novoKit}
          @click=${()=>{M=Ue(),o()}}
        ></kk-icon-button>
      `;if(t===`estoque`&&N===null)return a`
        <kk-icon-button
          name="plus"
          label=${c.prep.novoItem}
          @click=${()=>{N=Je(),o()}}
        ></kk-icon-button>
      `},conteudo(e){if(W(),H!==null)return n(H,Re);let t=G(e);return t!==`estoque`&&(N=null),t!==`kits`&&(M=null),B?t===`estoque`?et():t===`cofre`?rt():M===null?Ve():Ge(M):a`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{ct as telaPrep};