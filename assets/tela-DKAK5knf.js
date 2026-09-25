import{a as e,i as t,n}from"./dinheiro-CwI0T249.js";import{Z as r,_t as i,at as a,b as o,ft as s,g as c,ht as l,lt as u,m as d,pt as f,rt as ee,st as p,tt as te,y as ne}from"./index-C6owxr6H.js";import{alternarAtivo as re,alternarPago as ie,carregar as ae,excluirCategoria as oe,excluirRecorrencia as se,excluirTransacao as ce,gerarPendentes as m,paraCategoria as le,paraRecorrencia as ue,paraTransacao as de,salvarCategoria as fe,salvarRecorrencia as pe,salvarTransacao as me}from"./dados-Cg9M6zJH.js";var he=`🛒.🍕.☕.🏠.💡.💧.🔌.🚌.⛽.🚗.💊.🏥.🩺.👕.🎁.🎮.🎵.📚.🎓.🏖️.💰.💳.🧾.🐾.📱.💼.💇.🧴.🧺.🏋️.🛡️.🧸`.split(`.`);function h(){let e=new Date;return e.setHours(0,0,0,0),e.getTime()}function g(e){return e===``?a():e}function _(e,t){return e.filter(e=>e.vencimento!==0&&a(e.vencimento)===t)}function v(e,t=h()){return e.pago||e.vencimento===0?!1:e.vencimento<t}function y(e){return e===`vencidas`||e===`a-vencer`}function ge(e,t,n=h()){return t===`pagas`?e.pago:t===`vencidas`?v(e,n):t!==`a-vencer`||!e.pago&&!v(e,n)}function b(e,t,n,r=h()){return(y(n)?e:_(e,t)).filter(e=>ge(e,n,r))}function _e(e,t,n,r=h()){let i=b(e,t,n,r);if(!y(n))return i.sort((e,t)=>t.vencimento-e.vencimento);let a=2**53-1;return i.sort((e,t)=>(e.vencimento===0?a:e.vencimento)-(t.vencimento===0?a:t.vencimento))}function x(e){return e.reduce((e,t)=>e+t.valor,0)}function S(e){return e.reduce((e,t)=>e+(t.tipo===`receita`?t.valor:-t.valor),0)}function ve(e){return{realizado:S(e.filter(e=>e.pago)),previsto:S(e)}}function ye(e){return{receitas:x(e.filter(e=>e.tipo===`receita`)),despesas:x(e.filter(e=>e.tipo===`despesa`)),aReceber:x(e.filter(e=>e.tipo===`receita`&&!e.pago)),aPagar:x(e.filter(e=>e.tipo===`despesa`&&!e.pago))}}function be(e){let t=new Map;for(let n of e){let e=t.get(n.categoria)??{receita:0,despesa:0};n.tipo===`receita`?e.receita+=n.valor:e.despesa+=n.valor,t.set(n.categoria,e)}return[...t].map(([e,t])=>({categoria:e,...t})).sort((e,t)=>t.receita+t.despesa-(e.receita+e.despesa))}function xe(e){let t=new Map;for(let n of e)n.tipo===`despesa`&&t.set(n.categoria,(t.get(n.categoria)??0)+n.valor);return[...t].map(([e,t])=>({categoria:e,total:t})).sort((e,t)=>t.total-e.total)}function Se(e,t){let n=new Set([new Date().getFullYear(),Number(t.slice(0,4))]);for(let t of e)t.vencimento!==0&&n.add(new Date(t.vencimento).getFullYear());return[...n].sort((e,t)=>t-e)}function C(e){return te(e===0?Date.now():e)}var Ce=`••••`,we=`R$`,w={descricao:!1,valor:!1,diaMes:!1},T={vista:null,formulario:null,situacao:`vencidas`,pagina:1,mes:``,oculto:!0};function E(e){T.vista!==e&&(T.vista!==null&&(T.formulario=null,T.situacao=`vencidas`,T.pagina=1),T.vista=e)}function Te(){return T.formulario!==null}function D(){T.formulario=null}function Ee(){T.oculto=!0}function De(){T.vista===`transacoes`&&O({especie:`transacao`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,vencimento:C(0),pago:!1}}),T.vista===`categorias`&&O({especie:`categoria`,dados:{id:0,nome:``,icone:``,cor:`#0d6efd`,limite:``,erroNome:!1}}),T.vista===`recorrencias`&&O({especie:`recorrencia`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,periodicidade:`mensal`,diaMes:1,diaSemana:1,gerarComoPago:!1,ativa:!0,lancarCorrente:!1,erros:w}})}function O(e){T.formulario=e,p()}function k(e){return T.oculto?Ce:t(e)}function A(e){return e===0?`—`:r(e)}function Oe(t){return e(Number(t.replace(/\D/g,``)))}function j(e){return[...e].sort((e,t)=>e.nome.localeCompare(t.nome,f(),{sensitivity:`base`}))}function ke(e){return new Date(2001,e-1,1).toLocaleDateString(f(),{month:`long`})}function M(e){return new Date(2001,0,e).toLocaleDateString(f(),{weekday:`long`})}function N(e){return e===`diaria`?s.financeiro.diaria:e===`semanal`?s.financeiro.semanal:e===`anual`?s.financeiro.anual:s.financeiro.mensal}var Ae=[`diaria`,`semanal`,`mensal`,`anual`];function je(e){let{realizado:t,previsto:n}=ve(e.transacoes);return i`
    <div class="financeiro-saldo">
      <div class="financeiro-saldo__topo">
        <span class="financeiro-saldo__rotulo">${s.financeiro.saldo}</span>
        <kk-icon-button
          name=${T.oculto?`eye`:`eye-off`}
          label=${T.oculto?s.financeiro.mostrarValores:s.financeiro.ocultarValores}
          @click=${()=>{T.oculto=!T.oculto,p()}}
        ></kk-icon-button>
      </div>
      <span class="financeiro-saldo__valor" ?data-negativo=${t<0}>
        ${k(t)}
      </span>
      <span class="financeiro-saldo__previsto">
        ${s.financeiro.previsto}
        <strong ?data-negativo=${n<0}>${k(n)}</strong>
      </span>
    </div>
  `}function P(e){let t=g(T.mes),[n=0,r=1]=t.split(`-`).map(Number),a=(e,t)=>{T.mes=`${e}-${String(t).padStart(2,`0`)}`,T.pagina=1,p()};return i`
    <div class="financeiro-periodo">
      <kk-select
        label=${s.financeiro.mes}
        size="small"
        .value=${String(r)}
        @kk-change=${e=>a(n,Number(e.target.value))}
      >
        ${Array.from({length:12},(e,t)=>t+1).map(e=>i`<kk-option value=${e}>${ke(e)}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${s.financeiro.ano}
        size="small"
        .value=${String(n)}
        @kk-change=${e=>a(Number(e.target.value),r)}
      >
        ${Se(e.transacoes,t).map(e=>i`<kk-option value=${e}>${e}</kk-option>`)}
      </kk-select>
    </div>
  `}function Me(e){let{receitas:t,despesas:n,aReceber:r,aPagar:a}=ye(e),o=[[t,`receita`,s.financeiro.receitas],[n,`despesa`,s.financeiro.despesas],[r,`aviso`,s.financeiro.aReceber],[a,`aviso`,s.financeiro.aPagar]];return i`
    <div class="financeiro-placares">
      ${o.map(([e,t,n])=>i`
          <div class="financeiro-placar">
            <span class="financeiro-placar__valor" data-tom=${t}>${k(e)}</span>
            <span class="financeiro-placar__rotulo">${n}</span>
          </div>
        `)}
    </div>
  `}function Ne(e,t){return e.categorias.find(e=>e.id===t)?.nome??s.financeiro.semCategoria}function F(e,n){let r=be(n);if(r.length===0)return I(`chart-bar`,s.financeiro.semMovimento);let a=Math.max(...r.map(e=>Math.max(e.receita,e.despesa))),o=e=>a<=0||e<=0?`0%`:`${Math.max(1.5,e/a*100)}%`,c=(e,n)=>i`
    <div class="financeiro-barra" data-tom=${n}>
      <div class="financeiro-barra__trilho">
        <div class="financeiro-barra__preenchido" style=${`width:${o(e)}`}></div>
      </div>
      <span class="financeiro-barra__valor">${t(e)}</span>
    </div>
  `;return i`
    <h2 class="financeiro__secao">${s.financeiro.porCategoria}</h2>
    <figure class="financeiro-grafico">
      <div class="financeiro-grafico__legenda">
        <span class="financeiro-legenda" data-tom="receita">
          <span class="financeiro-legenda__marca"></span>${s.financeiro.receitas}
        </span>
        <span class="financeiro-legenda" data-tom="despesa">
          <span class="financeiro-legenda__marca"></span>${s.financeiro.despesas}
        </span>
      </div>

      <div class="financeiro-grafico__linhas">
        ${r.map(t=>i`
            <div class="financeiro-grafico__grupo">
              <span class="financeiro-grafico__categoria">
                ${Ne(e,t.categoria)}
              </span>
              ${t.receita>0?c(t.receita,`receita`):l}
              ${t.despesa>0?c(t.despesa,`despesa`):l}
            </div>
          `)}
      </div>
    </figure>
  `}function Pe(e,t){let n=xe(t).map(({categoria:t,total:n})=>{let r=e.categorias.find(e=>e.id===t);return{nome:r?.nome??s.financeiro.semCategoria,cor:r?.cor??`var(--kk-color-expense)`,icone:r?.icone??``,limite:r?.limite??0,total:n}});return n.length===0?l:i`
    <h2 class="financeiro__secao">${s.financeiro.limites}</h2>
    <div class="financeiro-limites">
      ${n.map(e=>{let t=e.limite>0&&e.total>e.limite,n=e.limite>0?Math.min(100,e.total/e.limite*100):0;return i`
          <div class="financeiro-limite" ?data-estourou=${t}>
            <span class="financeiro-limite__topo">
              <span class="financeiro-limite__nome">
                ${e.icone===``?l:i`<span>${e.icone}</span>`} ${e.nome}
              </span>
              <span class="financeiro-limite__valores">
                ${k(e.total)}
                ${e.limite===0?l:i`<small>${s.financeiro.deLimite(k(e.limite))}</small>`}
              </span>
            </span>

            ${e.limite===0?l:i`
                  <span class="financeiro-limite__barra" role="presentation">
                    <span
                      class="financeiro-limite__preenchido"
                      style=${`width:${n}%;background:${t?`var(--kk-color-expense)`:e.cor}`}
                    ></span>
                  </span>
                `}
          </div>
        `})}
    </div>
  `}function Fe(e,t){let n=[[`transacoes`,`receipt`,s.financeiro.transacoes,e.transacoes.length],[`categorias`,`tags`,s.financeiro.categorias,e.categorias.length],[`recorrencias`,`repeat`,s.financeiro.recorrencias,e.recorrencias.length]];return i`
    <div class="financeiro-atalhos">
      ${n.map(([e,n,r,a])=>i`
          <button class="financeiro-atalho" type="button" @click=${()=>t.navegar(e)}>
            <kk-icon class="financeiro-atalho__icone" name=${n}></kk-icon>
            <span class="financeiro-atalho__rotulo">${r}</span>
            <span class="financeiro-atalho__resumo">${s.financeiro.registros(a)}</span>
          </button>
        `)}
    </div>
  `}function Ie(e,t){let n=_(e.transacoes,g(T.mes));return i`
    ${Fe(e,t)} ${je(e)} ${P(e)}
    ${Me(n)} ${Pe(e,n)}
    ${T.oculto?i`<p class="financeiro__discreto">${s.financeiro.valoresOcultos}</p>`:F(e,n)}
  `}function I(e,t){return i`
    <div class="financeiro-vazio">
      <kk-icon class="financeiro-vazio__icone" name=${e}></kk-icon>
      <p>${t}</p>
    </div>
  `}function L(e,t,n){return i`
    <kk-input
      label=${t}
      inputmode="numeric"
      .value=${e}
      @kk-input=${e=>{let t=e.target,r=Oe(t.value);t.value=r,n(r)}}
    >
      <span slot="prefix">${we}</span>
    </kk-input>
  `}function R(e,t){let n=[[`receita`,`arrow-up`,s.financeiro.receita],[`despesa`,`arrow-down`,s.financeiro.despesa]];return i`
    <div>
      <span class="financeiro-formulario__rotulo">${s.financeiro.tipo}</span>
      <div class="financeiro-pastilhas">
        ${n.map(([n,r,a])=>i`
            <button
              class="financeiro-pastilha"
              type="button"
              aria-pressed=${e===n}
              @click=${()=>t(n)}
            >
              <kk-icon name=${r}></kk-icon>${a}
            </button>
          `)}
      </div>
    </div>
  `}function z(e,t,n){return i`
    <kk-select
      label=${s.financeiro.categoria}
      .value=${String(t)}
      @kk-change=${e=>n(Number(e.target.value))}
    >
      <kk-option value="0">${s.financeiro.semCategoria}</kk-option>
      ${j(e.categorias).map(e=>i`
          <kk-option value=${e.id}>
            ${e.icone===``?``:`${e.icone} `}${e.nome}
          </kk-option>
        `)}
    </kk-select>
  `}function B(e){return i`
    <div class="financeiro-formulario__acoes">
      <kk-button variant="primary" @click=${e}>
        <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
      </kk-button>
      <kk-button
        @click=${()=>{D(),p()}}
      >
        ${s.acoes.cancelar}
      </kk-button>
    </div>
  `}function V(e,t){D(),p(),e.salvar(t)}function Le(e,t,r){let a=e=>{T.formulario={especie:`transacao`,dados:{...r,...e}},p()};return i`
    <div class="financeiro-formulario">
      <h2 class="financeiro-formulario__titulo">
        ${r.id>0?s.financeiro.editarTransacao:s.financeiro.novaTransacao}
      </h2>

      <kk-input
        label=${s.financeiro.descricao}
        .value=${r.descricao}
        @kk-input=${e=>a({descricao:e.target.value})}
      ></kk-input>

      ${L(r.valor,s.financeiro.valor,e=>a({valor:e}))}
      ${R(r.tipo,e=>a({tipo:e}))}
      ${z(e,r.categoria,e=>a({categoria:e}))}

      <kk-input
        type="date"
        label=${s.financeiro.vencimento}
        .value=${r.vencimento}
        @kk-change=${e=>a({vencimento:e.target.value})}
      ></kk-input>

      <kk-switch
        ?checked=${r.pago}
        @kk-change=${e=>a({pago:e.target.checked})}
      >
        ${s.financeiro.pago}
      </kk-switch>

      ${B(()=>V(t,{especie:`transacao`,registro:{id:r.id,descricao:r.descricao.trim(),valor:n(r.valor),tipo:r.tipo,categoria:Number(r.categoria),vencimento:r.vencimento===``?Date.now():ee(r.vencimento),pago:r.pago}}))}
    </div>
  `}function Re(e){let t=g(T.mes),n=[[`vencidas`,s.financeiro.vencidas],[`a-vencer`,s.financeiro.aVencer],[`pagas`,s.financeiro.pagas],[`todas`,s.financeiro.todas]];return i`
    <div class="financeiro-filtros">
      <div class="financeiro-pastilhas" role="group" aria-label=${s.financeiro.situacao}>
        ${n.map(([n,r])=>i`
            <button
              class="financeiro-pastilha"
              type="button"
              data-situacao=${n}
              aria-pressed=${T.situacao===n}
              @click=${()=>{T.situacao=n,T.pagina=1,p()}}
            >
              ${r}
              <span class="financeiro-pastilha__conta">
                ${b(e.transacoes,t,n).length}
              </span>
            </button>
          `)}
      </div>
    </div>
  `}function ze(e,t){return e<=20?l:i`
    <kk-pagination
      class="financeiro-paginacao"
      size="small"
      show-info
      .value=${t}
      .pageSize=${20}
      total-items=${e}
      @kk-change=${e=>{e.stopPropagation(),T.pagina=e.detail.page,p(),requestAnimationFrame(()=>document.querySelector(`.financeiro-filtros`)?.scrollIntoView({block:`nearest`}))}}
    ></kk-pagination>
  `}function Be(e){return T.situacao===`vencidas`?s.financeiro.nenhumaVencida:T.situacao===`a-vencer`?s.financeiro.nadaAVencer:_(e.transacoes,g(T.mes)).length===0?s.financeiro.nenhumaNoMes:s.financeiro.nadaPagoNoMes}function Ve(t,n){if(t.transacoes.length===0)return I(`receipt`,s.financeiro.nenhumaTransacao);let r=i`
    ${Re(t)}
    ${y(T.situacao)?l:P(t)}
  `,a=_e(t.transacoes,g(T.mes),T.situacao);if(a.length===0)return i`${r} ${I(`filter`,Be(t))}`;let o=Math.ceil(a.length/20),c=Math.min(T.pagina,o),u=a.slice((c-1)*20,c*20);return i`
    ${r}
    <div class="financeiro-registros">
      ${u.map(r=>{let a=r.tipo===`receita`,o=t.categorias.find(e=>e.id===r.categoria),c=o!==void 0&&o.cor!==``?o.cor:a?`var(--kk-color-income)`:`var(--kk-color-expense)`;return i`
          <div class="financeiro-registro" data-status=${r.pago?`ok`:`pendente`}>
            <span
              class="financeiro-registro__avatar"
              style=${`background:color-mix(in oklab, ${c} 15%, transparent);color:${c}`}
            >
              ${o===void 0||o.icone===``?i`<kk-icon name=${a?`arrow-up`:`arrow-down`}></kk-icon>`:o.icone}
            </span>

            <button
              class="financeiro-registro__alvo"
              type="button"
              @click=${()=>O({especie:`transacao`,dados:{id:r.id,descricao:r.descricao,valor:e(r.valor),tipo:r.tipo,categoria:r.categoria,vencimento:C(r.vencimento),pago:r.pago}})}
            >
              <span class="financeiro-registro__topo">
                <span class="financeiro-registro__titulo">${r.descricao}</span>
                <span class="financeiro-registro__valor" data-tom=${r.tipo}>
                  ${a?`+`:`−`} ${k(r.valor)}
                </span>
              </span>
              <span class="financeiro-registro__resumo">
                ${A(r.vencimento)}
                ${o===void 0?``:`· ${o.nome}`}
              </span>
            </button>

            <div class="financeiro-registro__acoes">
              <kk-icon-button
                name=${r.pago?`circle-check`:`circle`}
                label=${r.pago?s.financeiro.desmarcarPago:s.financeiro.marcarPago}
                @click=${()=>n.alternar({especie:`transacao`,registro:{...r,pago:!r.pago}})}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${s.acoes.excluir}
                @click=${()=>n.excluir({especie:`transacao`,registro:r})}
              ></kk-icon-button>
            </div>
          </div>
        `})}
    </div>
    ${ze(a.length,c)}
  `}function He(e,t){let r=e=>{T.formulario={especie:`categoria`,dados:{...t,...e}},p()};return i`
    <div class="financeiro-formulario">
      <h2 class="financeiro-formulario__titulo">
        ${t.id>0?s.financeiro.editarCategoria:s.financeiro.novaCategoria}
      </h2>

      <kk-input
        label=${s.financeiro.nome}
        .value=${t.nome}
        help-text=${t.erroNome?s.financeiro.nomeObrigatorio:``}
        @kk-input=${e=>r({nome:e.target.value,erroNome:!1})}
      ></kk-input>

      <div>
        <span class="financeiro-formulario__rotulo">${s.financeiro.icone}</span>
        <div class="financeiro-icones">
          ${he.map(e=>i`
              <button
                class="financeiro-icone"
                type="button"
                aria-label=${e}
                aria-pressed=${t.icone===e}
                @click=${()=>r({icone:t.icone===e?``:e})}
              >
                ${e}
              </button>
            `)}
        </div>
      </div>

      <kk-input
        type="color"
        label=${s.financeiro.cor}
        .value=${t.cor}
        @kk-input=${e=>r({cor:e.target.value})}
      ></kk-input>

      ${L(t.limite,s.financeiro.limiteMensal,e=>r({limite:e}))}
      <p class="financeiro__discreto">${s.financeiro.limiteAjuda}</p>

      ${B(()=>{if(t.nome.trim()===``){r({erroNome:!0});return}V(e,{especie:`categoria`,registro:{id:t.id,nome:t.nome.trim(),icone:t.icone,cor:t.cor,limite:n(t.limite)}})})}
    </div>
  `}function Ue(t,n){return t.categorias.length===0?I(`tags`,s.financeiro.nenhumaCategoria):i`
    <div class="financeiro-categorias">
      ${j(t.categorias).map(t=>i`
          <div class="financeiro-categoria">
            <span class="financeiro-categoria__cor" style=${`background:${t.cor}`}></span>
            <span>${t.icone}</span>
            <span class="financeiro-categoria__nome">${t.nome}</span>
            ${t.limite>0?i`
                  <span class="financeiro__discreto">
                    ${s.financeiro.limiteDe(k(t.limite))}
                  </span>
                `:l}
            <kk-icon-button
              name="pencil"
              label=${s.acoes.editar}
              @click=${()=>O({especie:`categoria`,dados:{id:t.id,nome:t.nome,icone:t.icone,cor:t.cor,limite:e(t.limite),erroNome:!1}})}
            ></kk-icon-button>
            <kk-icon-button
              name="trash"
              label=${s.acoes.excluir}
              @click=${()=>n.excluir({especie:`categoria`,registro:t})}
            ></kk-icon-button>
          </div>
        `)}
    </div>
  `}function We(e){let t=N(e.periodicidade);return e.periodicidade===`mensal`?`${t} · ${s.financeiro.diaN(e.diaMes)}`:e.periodicidade===`semanal`?`${t} · ${M(e.diaSemana)}`:t}function Ge(e,t,r){let a=e=>{T.formulario={especie:`recorrencia`,dados:{...r,...e}},p()};return i`
    <div class="financeiro-formulario">
      <h2 class="financeiro-formulario__titulo">
        ${r.id>0?s.financeiro.editarRecorrencia:s.financeiro.novaRecorrencia}
      </h2>

      <kk-input
        label=${s.financeiro.descricao}
        .value=${r.descricao}
        help-text=${r.erros.descricao?s.financeiro.descricaoObrigatoria:``}
        @kk-input=${e=>a({descricao:e.target.value,erros:{...r.erros,descricao:!1}})}
      ></kk-input>

      ${L(r.valor,s.financeiro.valor,e=>a({valor:e,erros:{...r.erros,valor:!1}}))}
      ${r.erros.valor?i`<p class="financeiro__erro">${s.financeiro.valorObrigatorio}</p>`:l}
      ${R(r.tipo,e=>a({tipo:e}))}
      ${z(e,r.categoria,e=>a({categoria:e}))}

      <kk-select
        label=${s.financeiro.periodicidade}
        .value=${r.periodicidade}
        @kk-change=${e=>a({periodicidade:e.target.value,erros:{...r.erros,diaMes:!1}})}
      >
        ${Ae.map(e=>i`<kk-option value=${e}>${N(e)}</kk-option>`)}
      </kk-select>

      ${r.periodicidade===`mensal`?i`
            <kk-input
              type="number"
              min="1"
              max="31"
              label=${s.financeiro.diaDoMes}
              .value=${String(r.diaMes)}
              help-text=${r.erros.diaMes?s.financeiro.diaDoMesObrigatorio:s.financeiro.diaDoMesAjuda}
              @kk-input=${e=>a({diaMes:Number(e.target.value),erros:{...r.erros,diaMes:!1}})}
            ></kk-input>
          `:l}
      ${r.periodicidade===`semanal`?i`
            <kk-select
              label=${s.financeiro.diaDaSemana}
              .value=${String(r.diaSemana)}
              @kk-change=${e=>a({diaSemana:Number(e.target.value)})}
            >
              ${[1,2,3,4,5,6,7].map(e=>i`<kk-option value=${e}>${M(e)}</kk-option>`)}
            </kk-select>
          `:l}

      <kk-switch
        ?checked=${r.gerarComoPago}
        @kk-change=${e=>a({gerarComoPago:e.target.checked})}
      >
        ${s.financeiro.lancarJaPago}
      </kk-switch>

      ${r.id===0?i`
            <kk-switch
              ?checked=${r.lancarCorrente}
              help-text=${s.financeiro.lancarCorrenteAjuda}
              @kk-change=${e=>a({lancarCorrente:e.target.checked})}
            >
              ${s.financeiro.lancarCorrente}
            </kk-switch>
          `:l}

      <kk-switch
        ?checked=${r.ativa}
        @kk-change=${e=>a({ativa:e.target.checked})}
      >
        ${s.financeiro.ativa}
      </kk-switch>

      ${B(()=>{let e={descricao:r.descricao.trim()===``,valor:n(r.valor)<=0,diaMes:r.periodicidade===`mensal`&&!(r.diaMes>=1&&r.diaMes<=31)};if(e.descricao||e.valor||e.diaMes){a({erros:e});return}V(t,{especie:`recorrencia`,registro:{id:r.id,descricao:r.descricao.trim(),valor:n(r.valor),tipo:r.tipo,categoria:Number(r.categoria),periodicidade:r.periodicidade,diaMes:Math.min(31,Math.max(1,Number(r.diaMes))),diaSemana:Math.min(7,Math.max(1,Number(r.diaSemana))),gerarComoPago:r.gerarComoPago,ativa:r.ativa,proxima:0,...r.id===0?{lancarCorrente:r.lancarCorrente}:{}}})})}
    </div>
  `}function Ke(t,n){return t.recorrencias.length===0?I(`repeat`,s.financeiro.nenhumaRecorrencia):i`
    <div class="financeiro-registros">
      ${t.recorrencias.map(t=>{let r=t.tipo===`receita`;return i`
          <div class="financeiro-registro" data-status=${t.ativa?`ok`:`pendente`}>
            <span class="financeiro-registro__avatar">
              <kk-icon name=${r?`arrow-up`:`arrow-down`}></kk-icon>
            </span>

            <button
              class="financeiro-registro__alvo"
              type="button"
              @click=${()=>O({especie:`recorrencia`,dados:{id:t.id,descricao:t.descricao,valor:e(t.valor),tipo:t.tipo,categoria:t.categoria,periodicidade:t.periodicidade,diaMes:t.diaMes,diaSemana:t.diaSemana,gerarComoPago:t.gerarComoPago,ativa:t.ativa,lancarCorrente:!1,erros:w}})}
            >
              <span class="financeiro-registro__topo">
                <span class="financeiro-registro__titulo">${t.descricao}</span>
                <span class="financeiro-registro__valor" data-tom=${t.tipo}>
                  ${r?`+`:`−`} ${k(t.valor)}
                </span>
              </span>
              <span class="financeiro-registro__resumo">${We(t)}</span>
              <span class="financeiro-registro__resumo">
                ${s.financeiro.proxima(A(t.proxima))}
              </span>
            </button>

            <div class="financeiro-registro__acoes">
              <kk-icon-button
                name=${t.ativa?`player-pause`:`player-play`}
                label=${t.ativa?s.financeiro.pausar:s.financeiro.retomar}
                @click=${()=>n.alternar({especie:`recorrencia`,registro:{...t,ativa:!t.ativa}})}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${s.acoes.excluir}
                @click=${()=>n.excluir({especie:`recorrencia`,registro:t})}
              ></kk-icon-button>
            </div>
          </div>
        `})}
    </div>
  `}function qe(e,t){let n=T.formulario;return n===null?e.vista===`transacoes`?Ve(e,t):e.vista===`categorias`?Ue(e,t):e.vista===`recorrencias`?Ke(e,t):Ie(e,t):n.especie===`transacao`?Le(e,t,n.dados):n.especie===`categoria`?He(t,n.dados):Ge(e,t,n.dados)}function Je(e,t){return E(e.vista),i`<div class="financeiro">${qe(e,t)}</div>`}var H=[],U=[],W=[],G=!1,K=!1,q=!1,J=null;async function Y(){let e=await ae();H=e.categorias,U=e.transacoes,W=e.recorrencias,p()}function X(){K||q||J!==null||(q=!0,(async()=>{try{await Y(),await m(W)&&await Y(),K=!0}catch(e){console.error(`financeiro: a carga falhou.`,e),J=o(e)}finally{q=!1,p()}})())}function Ye(){J=null,X(),p()}function Z(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function Xe(){G||(Ee(),G=!0,Ze())}var Q=!1;function Ze(){Q||(Q=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`financeiro`&&(G=!1,D())}))}function $(e,t){return t>0?e.find(e=>e.id===t):void 0}async function Qe(e){try{if(e.especie===`transacao`){await me(e.registro,$(U,e.registro.id)),d(s.financeiro.transacaoSalva),await Y();return}if(e.especie===`categoria`){await fe(e.registro),d(s.financeiro.categoriaSalva),await Y();return}await pe(e.registro,$(W,e.registro.id)),d(s.financeiro.recorrenciaSalva),await Y(),await m(W)&&await Y()}catch(e){console.error(`Financeiro: a gravação falhou.`,e),d(s.financeiro.naoSalvo,`danger`)}}function $e(e){return e===`transacao`?{titulo:s.financeiro.excluirTransacao,texto:s.acervo.excluirTexto,feito:s.financeiro.transacaoExcluida,excluir:ce}:e===`categoria`?{titulo:s.financeiro.excluirCategoria,texto:s.financeiro.excluirCategoriaTexto,feito:s.financeiro.categoriaExcluida,excluir:oe}:{titulo:s.financeiro.excluirRecorrencia,texto:s.financeiro.excluirRecorrenciaTexto,feito:s.financeiro.recorrenciaExcluida,excluir:se}}async function et(e){let t=$e(e.especie);if(await c({titulo:t.titulo,texto:t.texto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})){try{await t.excluir(e.registro.id)}catch(e){console.error(`Financeiro: a exclusão falhou.`,e),d(s.financeiro.naoExcluido,`danger`);return}d(t.feito),await Y()}}async function tt(e){try{if(e.especie===`transacao`){let t=$(U,e.registro.id);t!==void 0&&await nt(t)&&await ie(t)}if(e.especie===`recorrencia`){let t=$(W,e.registro.id);t!==void 0&&await re(t)}}catch(e){console.error(`Financeiro: a alteração falhou.`,e),d(s.financeiro.naoAlterado,`danger`);return}await Y()}function nt(e){if(e.esta_pago===1)return c({titulo:s.financeiro.estornar,texto:s.financeiro.estornarTexto(e.descricao),rotuloConfirmar:s.acoes.confirmar,variante:`warning`});let n=e.tipo===0,r=t(e.valor);return c({titulo:n?s.financeiro.receber:s.financeiro.pagar,texto:n?s.financeiro.receberTexto(e.descricao,r):s.financeiro.pagarTexto(e.descricao,r),rotuloConfirmar:s.acoes.confirmar,variante:`primary`})}function rt(e){if(e===`transacoes`)return s.financeiro.transacoes;if(e===`categorias`)return s.financeiro.categorias;if(e===`recorrencias`)return s.financeiro.recorrencias}function it(e){return e===`transacoes`?s.financeiro.novaTransacao:e===`categorias`?s.financeiro.novaCategoria:s.financeiro.novaRecorrencia}var at={voltarPara(e){return Z(e)===`painel`?`home`:`financeiro`},titulo(e){return rt(Z(e))},acoes(e){let t=Z(e);if(E(t),!(t===`painel`||Te()))return i`
      <kk-icon-button name="plus" label=${it(t)} @click=${De}></kk-icon-button>
    `},conteudo(e){return X(),J===null?(Xe(),K?Je({vista:Z(e),categorias:H.map(le),transacoes:U.map(de),recorrencias:W.map(ue)},{navegar:e=>u(`financeiro/${e}`),salvar:e=>void Qe(e),excluir:e=>void et(e),alternar:e=>void tt(e)}):i`<div class="carregando"><kk-spinner></kk-spinner></div>`):ne(J,Ye)}};export{at as telaFinanceiro};