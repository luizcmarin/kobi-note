import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-BCzNZFpV.js";import{l as r,r as i,s as a}from"./data-DbOIIZMP.js";import{f as o,m as s,n as c,o as l,t as u,u as d}from"./formato-BoZO7uRM.js";import{r as ee}from"./ordem-DarhJGRe.js";import{n as te,r as ne}from"./rotas-CR8kk0YZ.js";import{E as f,it as p,y as m}from"./index-YLgIwNyG.js";import{t as re}from"./carga-BpNfyn1x.js";import{_ as h,c as g,d as ie,f as ae,g as _,h as oe,l as v,n as se,o as ce,p as le,r as ue,s as de,t as fe}from"./dados-e0cv1hmQ.js";var pe=`🛒.🍕.☕.🏠.💡.💧.🔌.🚌.⛽.🚗.💊.🏥.🩺.👕.🎁.🎮.🎵.📚.🎓.🏖️.💰.💳.🧾.🐾.📱.💼.💇.🧴.🧺.🏋️.🛡️.🧸`.split(`.`);function y(){let e=new Date;return e.setHours(0,0,0,0),e.getTime()}function b(e){return e===``?r():e}function x(e,t){return e.filter(e=>e.vencimento!==0&&r(e.vencimento)===t)}function S(e,t=y()){return e.pago||e.vencimento===0?!1:e.vencimento<t}function C(e){return e===`vencidas`||e===`a-vencer`}function me(e,t,n=y()){return t===`pagas`?e.pago:t===`vencidas`?S(e,n):t!==`a-vencer`||!e.pago&&!S(e,n)}function w(e,t,n,r=y()){return(C(n)?e:x(e,t)).filter(e=>me(e,n,r))}function T(e,t,n,r=y()){let i=w(e,t,n,r);if(!C(n))return i.sort((e,t)=>t.vencimento-e.vencimento);let a=2**53-1;return i.sort((e,t)=>(e.vencimento===0?a:e.vencimento)-(t.vencimento===0?a:t.vencimento))}function E(e){return e.reduce((e,t)=>e+t.valor,0)}function D(e){return e.reduce((e,t)=>e+(t.tipo===`receita`?t.valor:-t.valor),0)}function he(e){return{realizado:D(e.filter(e=>e.pago)),previsto:D(e)}}function ge(e){return{receitas:E(e.filter(e=>e.tipo===`receita`)),despesas:E(e.filter(e=>e.tipo===`despesa`)),aReceber:E(e.filter(e=>e.tipo===`receita`&&!e.pago)),aPagar:E(e.filter(e=>e.tipo===`despesa`&&!e.pago))}}function _e(e){let t=new Map;for(let n of e){let e=t.get(n.categoria)??{receita:0,despesa:0};n.tipo===`receita`?e.receita+=n.valor:e.despesa+=n.valor,t.set(n.categoria,e)}return[...t].map(([e,t])=>({categoria:e,...t})).sort((e,t)=>t.receita+t.despesa-(e.receita+e.despesa))}function ve(e){let t=new Map;for(let n of e)n.tipo===`despesa`&&t.set(n.categoria,(t.get(n.categoria)??0)+n.valor);return[...t].map(([e,t])=>({categoria:e,total:t})).sort((e,t)=>t.total-e.total)}function ye(e,t){let n=new Set([new Date().getFullYear(),Number(t.slice(0,4))]);for(let t of e)t.vencimento!==0&&n.add(new Date(t.vencimento).getFullYear());return[...n].sort((e,t)=>t-e)}function O(e){return i(e===0?Date.now():e)}var be=`••••`,k={descricao:!1,valor:!1,diaMes:!1},A={vista:null,formulario:null,situacao:`vencidas`,pagina:1,mes:``,oculto:!0};function j(e){A.vista!==e&&(A.vista!==null&&(A.formulario=null,A.situacao=`vencidas`,A.pagina=1),A.vista=e)}function M(){return A.formulario!==null}function N(){A.formulario=null}function xe(){A.oculto=!0}function Se(){A.vista===`transacoes`&&P({especie:`transacao`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,vencimento:O(0),pago:!1}}),A.vista===`categorias`&&P({especie:`categoria`,dados:{id:0,nome:``,icone:``,cor:`#0d6efd`,limite:``,erroNome:!1}}),A.vista===`recorrencias`&&P({especie:`recorrencia`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,periodicidade:`mensal`,diaMes:1,diaSemana:1,gerarComoPago:!1,ativa:!0,lancarCorrente:!1,erros:k}})}function P(e){A.formulario=e,p()}function F(e){return A.oculto?be:d(e)}function I(e){return e===0?`—`:l(e)}function L(e){return[...e].sort((e,t)=>ee(e.nome,t.nome))}function Ce(e){return n.calendario.meses[e-1]??``}function R(e){return n.calendario.diasDaSemana[e-1]??``}function z(e){return e===`diaria`?n.financeiro.diaria:e===`semanal`?n.financeiro.semanal:e===`anual`?n.financeiro.anual:n.financeiro.mensal}var we=[`diaria`,`semanal`,`mensal`,`anual`];function Te(t){let{realizado:r,previsto:i}=he(t.transacoes);return e`
    <div class="financeiro-saldo">
      <div class="financeiro-saldo__topo">
        <span class="financeiro-saldo__rotulo">${n.financeiro.saldo}</span>
        <kk-button
          class="financeiro-saldo__olho"
          size="small"
          pill
          variant="primary"
          ?outline=${!A.oculto}
          @click=${()=>{A.oculto=!A.oculto,p()}}
        >
          <kk-icon slot="prefix" name=${A.oculto?`eye`:`eye-off`}></kk-icon>
          ${A.oculto?n.financeiro.mostrarValores:n.financeiro.ocultarValores}
        </kk-button>
      </div>
      <span class="financeiro-saldo__valor" ?data-negativo=${r<0}>
        ${F(r)}
      </span>
      <span class="financeiro-saldo__previsto">
        ${n.financeiro.previsto}
        <strong ?data-negativo=${i<0}>${F(i)}</strong>
      </span>
    </div>
  `}function B(t){let r=b(A.mes),[i=0,a=1]=r.split(`-`).map(Number),o=(e,t)=>{A.mes=`${e}-${String(t).padStart(2,`0`)}`,A.pagina=1,p()};return e`
    <div class="financeiro-periodo">
      <kk-select
        label=${n.financeiro.mes}
        size="small"
        .value=${String(a)}
        @kk-change=${e=>o(i,Number(e.target.value))}
      >
        ${Array.from({length:12},(e,t)=>t+1).map(t=>e`<kk-option value=${t}>${Ce(t)}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${n.financeiro.ano}
        size="small"
        .value=${String(i)}
        @kk-change=${e=>o(Number(e.target.value),a)}
      >
        ${ye(t.transacoes,r).map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
      </kk-select>
    </div>
  `}function Ee(t){let{receitas:r,despesas:i,aReceber:a,aPagar:o}=ge(t),s=[[r,`receita`,n.financeiro.receitas],[i,`despesa`,n.financeiro.despesas],[a,`aviso`,n.financeiro.aReceber],[o,`aviso`,n.financeiro.aPagar]];return e`
    <div class="financeiro-placares">
      ${s.map(([t,n,r])=>e`
          <div class="financeiro-placar">
            <span class="financeiro-placar__valor" data-tom=${n}>${F(t)}</span>
            <span class="financeiro-placar__rotulo">${r}</span>
          </div>
        `)}
    </div>
  `}function De(e,t){return e.categorias.find(e=>e.id===t)?.nome??n.financeiro.semCategoria}function Oe(r,i){let a=_e(i);if(a.length===0)return V(`chart-bar`,n.financeiro.semMovimento);let o=Math.max(...a.map(e=>Math.max(e.receita,e.despesa))),s=e=>o<=0||e<=0?`0%`:`${Math.max(1.5,e/o*100)}%`,c=(t,n)=>e`
    <div class="financeiro-barra" data-tom=${n}>
      <div class="financeiro-barra__trilho">
        <div class="financeiro-barra__preenchido" style=${`width:${s(t)}`}></div>
      </div>
      <span class="financeiro-barra__valor">${d(t)}</span>
    </div>
  `;return e`
    <h2 class="financeiro__secao">${n.financeiro.porCategoria}</h2>
    <figure class="financeiro-grafico">
      <div class="financeiro-grafico__legenda">
        <span class="financeiro-legenda" data-tom="receita">
          <span class="financeiro-legenda__marca"></span>${n.financeiro.receitas}
        </span>
        <span class="financeiro-legenda" data-tom="despesa">
          <span class="financeiro-legenda__marca"></span>${n.financeiro.despesas}
        </span>
      </div>

      <div class="financeiro-grafico__linhas">
        ${a.map(n=>e`
            <div class="financeiro-grafico__grupo">
              <span class="financeiro-grafico__categoria">
                ${De(r,n.categoria)}
              </span>
              ${n.receita>0?c(n.receita,`receita`):t}
              ${n.despesa>0?c(n.despesa,`despesa`):t}
            </div>
          `)}
      </div>
    </figure>
  `}function ke(r,i){let a=ve(i).map(({categoria:e,total:t})=>{let i=r.categorias.find(t=>t.id===e);return{nome:i?.nome??n.financeiro.semCategoria,cor:i?.cor??`var(--kk-color-expense)`,icone:i?.icone??``,limite:i?.limite??0,total:t}});return a.length===0?t:e`
    <h2 class="financeiro__secao">${n.financeiro.limites}</h2>
    <div class="financeiro-limites">
      ${a.map(r=>{let i=r.limite>0&&r.total>r.limite,a=r.limite>0?Math.min(100,r.total/r.limite*100):0;return e`
          <div class="financeiro-limite" ?data-estourou=${i}>
            <span class="financeiro-limite__topo">
              <span class="financeiro-limite__nome">
                ${r.icone===``?t:e`<span>${r.icone}</span>`} ${r.nome}
              </span>
              <span class="financeiro-limite__valores">
                ${F(r.total)}
                ${r.limite===0?t:e`<small>${n.financeiro.deLimite(F(r.limite))}</small>`}
              </span>
            </span>

            ${r.limite===0?t:e`
                  <span class="financeiro-limite__barra" role="presentation">
                    <span
                      class="financeiro-limite__preenchido"
                      style=${`width:${a}%;background:${i?`var(--kk-color-expense)`:r.cor}`}
                    ></span>
                  </span>
                `}
          </div>
        `})}
    </div>
  `}function Ae(t,r){let i=[[`transacoes`,`receipt`,n.financeiro.transacoes,t.transacoes.length],[`categorias`,`tags`,n.financeiro.categorias,t.categorias.length],[`recorrencias`,`repeat`,n.financeiro.recorrencias,t.recorrencias.length]];return e`
    <div class="financeiro-atalhos">
      ${i.map(([t,i,a,o])=>e`
          <button class="financeiro-atalho" type="button" @click=${()=>r.navegar(t)}>
            <kk-icon class="financeiro-atalho__icone" name=${i}></kk-icon>
            <span class="financeiro-atalho__rotulo">${a}</span>
            <span class="financeiro-atalho__resumo">${n.financeiro.registros(o)}</span>
          </button>
        `)}
    </div>
  `}function je(t,r){let i=x(t.transacoes,b(A.mes));return e`
    ${Ae(t,r)} ${Te(t)} ${B(t)}
    ${Ee(i)} ${ke(t,i)}
    ${A.oculto?e`<p class="financeiro__discreto">${n.financeiro.valoresOcultos}</p>`:Oe(t,i)}
  `}function V(t,n){return e`
    <div class="financeiro-vazio">
      <kk-icon class="financeiro-vazio__icone" name=${t}></kk-icon>
      <p>${n}</p>
    </div>
  `}function H(t,n,r){return e`
    <kk-input
      label=${n}
      inputmode="numeric"
      .value=${t}
      @kk-input=${e=>{let t=e.target,n=o(t.value);t.value=n,r(n)}}
    >
      <span slot=${s().depois?`suffix`:`prefix`}>${s().simbolo}</span>
    </kk-input>
  `}function U(t,r){let i=[[`receita`,`arrow-up`,n.financeiro.receita],[`despesa`,`arrow-down`,n.financeiro.despesa]];return e`
    <div>
      <span class="financeiro-formulario__rotulo">${n.financeiro.tipo}</span>
      <div class="financeiro-pastilhas">
        ${i.map(([n,i,a])=>e`
            <button
              class="financeiro-pastilha"
              type="button"
              aria-pressed=${t===n}
              @click=${()=>r(n)}
            >
              <kk-icon name=${i}></kk-icon>${a}
            </button>
          `)}
      </div>
    </div>
  `}function W(t,r,i){return e`
    <kk-select
      label=${n.financeiro.categoria}
      .value=${String(r)}
      @kk-change=${e=>i(Number(e.target.value))}
    >
      <kk-option value="0">${n.financeiro.semCategoria}</kk-option>
      ${L(t.categorias).map(t=>e`
          <kk-option value=${t.id}>
            ${t.icone===``?``:`${t.icone} `}${t.nome}
          </kk-option>
        `)}
    </kk-select>
  `}function G(t){return e`
    <div class="financeiro-formulario__acoes">
      <kk-button variant="primary" @click=${t}>
        <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
      </kk-button>
      <kk-button
        @click=${()=>{N(),p()}}
      >
        ${n.acoes.cancelar}
      </kk-button>
    </div>
  `}function K(e,t){N(),p(),e.salvar(t)}function Me(t,r,i){let o=e=>{A.formulario={especie:`transacao`,dados:{...i,...e}},p()};return e`
    <div class="financeiro-formulario">
      <h2 class="financeiro-formulario__titulo">
        ${i.id>0?n.financeiro.editarTransacao:n.financeiro.novaTransacao}
      </h2>

      <kk-input
        label=${n.financeiro.descricao}
        .value=${i.descricao}
        @kk-input=${e=>o({descricao:e.target.value})}
      ></kk-input>

      ${H(i.valor,n.financeiro.valor,e=>o({valor:e}))}
      ${U(i.tipo,e=>o({tipo:e}))}
      ${W(t,i.categoria,e=>o({categoria:e}))}

      <kk-input
        type="date"
        label=${n.financeiro.vencimento}
        .value=${i.vencimento}
        @kk-change=${e=>o({vencimento:e.target.value})}
      ></kk-input>

      <kk-switch
        ?checked=${i.pago}
        @kk-change=${e=>o({pago:e.target.checked})}
      >
        ${n.financeiro.pago}
      </kk-switch>

      ${G(()=>K(r,{especie:`transacao`,registro:{id:i.id,descricao:i.descricao.trim(),valor:c(i.valor),tipo:i.tipo,categoria:Number(i.categoria),vencimento:i.vencimento===``?Date.now():a(i.vencimento),pago:i.pago}}))}
    </div>
  `}function Ne(t){let r=b(A.mes),i=[[`vencidas`,n.financeiro.vencidas],[`a-vencer`,n.financeiro.aVencer],[`pagas`,n.financeiro.pagas],[`todas`,n.financeiro.todas]];return e`
    <div class="financeiro-filtros">
      <div class="financeiro-pastilhas" role="group" aria-label=${n.financeiro.situacao}>
        ${i.map(([n,i])=>e`
            <button
              class="financeiro-pastilha"
              type="button"
              data-situacao=${n}
              aria-pressed=${A.situacao===n}
              @click=${()=>{A.situacao=n,A.pagina=1,p()}}
            >
              ${i}
              <span class="financeiro-pastilha__conta">
                ${w(t.transacoes,r,n).length}
              </span>
            </button>
          `)}
      </div>
    </div>
  `}function Pe(n,r){return n<=20?t:e`
    <kk-pagination
      class="financeiro-paginacao"
      size="small"
      show-info
      .value=${r}
      .pageSize=${20}
      total-items=${n}
      @kk-change=${e=>{e.stopPropagation(),A.pagina=e.detail.page,p(),requestAnimationFrame(()=>document.querySelector(`.financeiro-filtros`)?.scrollIntoView({block:`nearest`}))}}
    ></kk-pagination>
  `}function Fe(e){return A.situacao===`vencidas`?n.financeiro.nenhumaVencida:A.situacao===`a-vencer`?n.financeiro.nadaAVencer:x(e.transacoes,b(A.mes)).length===0?n.financeiro.nenhumaNoMes:n.financeiro.nadaPagoNoMes}function Ie(r,i){if(r.transacoes.length===0)return V(`receipt`,n.financeiro.nenhumaTransacao);let a=e`
    ${Ne(r)}
    ${C(A.situacao)?t:B(r)}
  `,o=T(r.transacoes,b(A.mes),A.situacao);if(o.length===0)return e`${a} ${V(`filter`,Fe(r))}`;let s=Math.ceil(o.length/20),c=Math.min(A.pagina,s),l=o.slice((c-1)*20,c*20);return e`
    ${a}
    <div class="registros">
      ${l.map(t=>{let a=t.tipo===`receita`,o=r.categorias.find(e=>e.id===t.categoria),s=o!==void 0&&o.cor!==``?o.cor:a?`var(--kk-color-income)`:`var(--kk-color-expense)`;return e`
          <div class="registro" data-status=${t.pago?`ok`:`pendente`}>
            <span
              class="registro__avatar"
              style=${`background:color-mix(in oklab, ${s} 15%, transparent);color:color-mix(in oklab, ${s} 70%, var(--kk-color-neutral-1000))`}
            >
              ${o===void 0||o.icone===``?e`<kk-icon name=${a?`arrow-up`:`arrow-down`}></kk-icon>`:o.icone}
            </span>

            <button
              class="registro__alvo"
              type="button"
              @click=${()=>P({especie:`transacao`,dados:{id:t.id,descricao:t.descricao,valor:u(t.valor),tipo:t.tipo,categoria:t.categoria,vencimento:O(t.vencimento),pago:t.pago}})}
            >
              <span class="registro__topo">
                <span class="registro__titulo">${t.descricao}</span>
                <span class="financeiro-valor" data-tom=${t.tipo}>
                  ${a?`+`:`−`} ${F(t.valor)}
                </span>
              </span>
              <span class="registro__resumo">
                ${I(t.vencimento)}
                ${o===void 0?``:`· ${o.nome}`}
              </span>
            </button>

            <div class="registro__acoes">
              <kk-icon-button
                name=${t.pago?`circle-check`:`circle`}
                label=${t.pago?n.financeiro.desmarcarPago:n.financeiro.marcarPago}
                @click=${()=>i.alternar({especie:`transacao`,registro:{...t,pago:!t.pago}})}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${n.acoes.excluir}
                @click=${()=>i.excluir({especie:`transacao`,registro:t})}
              ></kk-icon-button>
            </div>
          </div>
        `})}
    </div>
    ${Pe(o.length,c)}
  `}function Le(t,r){let i=e=>{A.formulario={especie:`categoria`,dados:{...r,...e}},p()};return e`
    <div class="financeiro-formulario">
      <h2 class="financeiro-formulario__titulo">
        ${r.id>0?n.financeiro.editarCategoria:n.financeiro.novaCategoria}
      </h2>

      <kk-input
        label=${n.financeiro.nome}
        .value=${r.nome}
        help-text=${r.erroNome?n.financeiro.nomeObrigatorio:``}
        @kk-input=${e=>i({nome:e.target.value,erroNome:!1})}
      ></kk-input>

      <div>
        <span class="financeiro-formulario__rotulo">${n.financeiro.icone}</span>
        <div class="financeiro-icones">
          ${pe.map(t=>e`
              <button
                class="financeiro-icone"
                type="button"
                aria-label=${t}
                aria-pressed=${r.icone===t}
                @click=${()=>i({icone:r.icone===t?``:t})}
              >
                ${t}
              </button>
            `)}
        </div>
      </div>

      <kk-input
        type="color"
        label=${n.financeiro.cor}
        .value=${r.cor}
        @kk-input=${e=>i({cor:e.target.value})}
      ></kk-input>

      ${H(r.limite,n.financeiro.limiteMensal,e=>i({limite:e}))}
      <p class="financeiro__discreto">${n.financeiro.limiteAjuda}</p>

      ${G(()=>{r.nome.trim()===``?i({erroNome:!0}):K(t,{especie:`categoria`,registro:{id:r.id,nome:r.nome.trim(),icone:r.icone,cor:r.cor,limite:c(r.limite)}})})}
    </div>
  `}function Re(r,i){return r.categorias.length===0?V(`tags`,n.financeiro.nenhumaCategoria):e`
    <div class="financeiro-categorias">
      ${L(r.categorias).map(r=>e`
          <div class="financeiro-categoria">
            <span class="financeiro-categoria__cor" style=${`background:${r.cor}`}></span>
            <span>${r.icone}</span>
            <span class="financeiro-categoria__nome">${r.nome}</span>
            ${r.limite>0?e`
                  <span class="financeiro__discreto">
                    ${n.financeiro.limiteDe(F(r.limite))}
                  </span>
                `:t}
            <kk-icon-button
              name="pencil"
              label=${n.acoes.editar}
              @click=${()=>P({especie:`categoria`,dados:{id:r.id,nome:r.nome,icone:r.icone,cor:r.cor,limite:u(r.limite),erroNome:!1}})}
            ></kk-icon-button>
            <kk-icon-button
              name="trash"
              label=${n.acoes.excluir}
              @click=${()=>i.excluir({especie:`categoria`,registro:r})}
            ></kk-icon-button>
          </div>
        `)}
    </div>
  `}function ze(e){let t=z(e.periodicidade);return e.periodicidade===`mensal`?`${t} · ${n.financeiro.diaN(e.diaMes)}`:e.periodicidade===`semanal`?`${t} · ${R(e.diaSemana)}`:t}function Be(r,i,a){let o=e=>{A.formulario={especie:`recorrencia`,dados:{...a,...e}},p()};return e`
    <div class="financeiro-formulario">
      <h2 class="financeiro-formulario__titulo">
        ${a.id>0?n.financeiro.editarRecorrencia:n.financeiro.novaRecorrencia}
      </h2>

      <kk-input
        label=${n.financeiro.descricao}
        .value=${a.descricao}
        help-text=${a.erros.descricao?n.financeiro.descricaoObrigatoria:``}
        @kk-input=${e=>o({descricao:e.target.value,erros:{...a.erros,descricao:!1}})}
      ></kk-input>

      ${H(a.valor,n.financeiro.valor,e=>o({valor:e,erros:{...a.erros,valor:!1}}))}
      ${a.erros.valor?e`<p class="financeiro__erro">${n.financeiro.valorObrigatorio}</p>`:t}
      ${U(a.tipo,e=>o({tipo:e}))}
      ${W(r,a.categoria,e=>o({categoria:e}))}

      <kk-select
        label=${n.financeiro.periodicidade}
        .value=${a.periodicidade}
        @kk-change=${e=>o({periodicidade:e.target.value,erros:{...a.erros,diaMes:!1}})}
      >
        ${we.map(t=>e`<kk-option value=${t}>${z(t)}</kk-option>`)}
      </kk-select>

      ${a.periodicidade===`mensal`?e`
            <kk-input
              type="number"
              min="1"
              max="31"
              label=${n.financeiro.diaDoMes}
              .value=${String(a.diaMes)}
              help-text=${a.erros.diaMes?n.financeiro.diaDoMesObrigatorio:n.financeiro.diaDoMesAjuda}
              @kk-input=${e=>o({diaMes:Number(e.target.value),erros:{...a.erros,diaMes:!1}})}
            ></kk-input>
          `:t}
      ${a.periodicidade===`semanal`?e`
            <kk-select
              label=${n.financeiro.diaDaSemana}
              .value=${String(a.diaSemana)}
              @kk-change=${e=>o({diaSemana:Number(e.target.value)})}
            >
              ${[1,2,3,4,5,6,7].map(t=>e`<kk-option value=${t}>${R(t)}</kk-option>`)}
            </kk-select>
          `:t}

      <kk-switch
        ?checked=${a.gerarComoPago}
        @kk-change=${e=>o({gerarComoPago:e.target.checked})}
      >
        ${n.financeiro.lancarJaPago}
      </kk-switch>

      ${a.id===0?e`
            <kk-switch
              ?checked=${a.lancarCorrente}
              help-text=${n.financeiro.lancarCorrenteAjuda}
              @kk-change=${e=>o({lancarCorrente:e.target.checked})}
            >
              ${n.financeiro.lancarCorrente}
            </kk-switch>
          `:t}

      <kk-switch
        ?checked=${a.ativa}
        @kk-change=${e=>o({ativa:e.target.checked})}
      >
        ${n.financeiro.ativa}
      </kk-switch>

      ${G(()=>{let e={descricao:a.descricao.trim()===``,valor:c(a.valor)<=0,diaMes:a.periodicidade===`mensal`&&!(a.diaMes>=1&&a.diaMes<=31)};e.descricao||e.valor||e.diaMes?o({erros:e}):K(i,{especie:`recorrencia`,registro:{id:a.id,descricao:a.descricao.trim(),valor:c(a.valor),tipo:a.tipo,categoria:Number(a.categoria),periodicidade:a.periodicidade,diaMes:Math.min(31,Math.max(1,Number(a.diaMes))),diaSemana:Math.min(7,Math.max(1,Number(a.diaSemana))),gerarComoPago:a.gerarComoPago,ativa:a.ativa,proxima:0,...a.id===0?{lancarCorrente:a.lancarCorrente}:{}}})})}
    </div>
  `}function Ve(t,r){return t.recorrencias.length===0?V(`repeat`,n.financeiro.nenhumaRecorrencia):e`
    <div class="registros">
      ${t.recorrencias.map(t=>{let i=t.tipo===`receita`;return e`
          <div class="registro" data-status=${t.ativa?`ok`:`pendente`}>
            <span class="registro__avatar">
              <kk-icon name=${i?`arrow-up`:`arrow-down`}></kk-icon>
            </span>

            <button
              class="registro__alvo"
              type="button"
              @click=${()=>P({especie:`recorrencia`,dados:{id:t.id,descricao:t.descricao,valor:u(t.valor),tipo:t.tipo,categoria:t.categoria,periodicidade:t.periodicidade,diaMes:t.diaMes,diaSemana:t.diaSemana,gerarComoPago:t.gerarComoPago,ativa:t.ativa,lancarCorrente:!1,erros:k}})}
            >
              <span class="registro__topo">
                <span class="registro__titulo">${t.descricao}</span>
                <span class="financeiro-valor" data-tom=${t.tipo}>
                  ${i?`+`:`−`} ${F(t.valor)}
                </span>
              </span>
              <span class="registro__resumo">${ze(t)}</span>
              <span class="registro__resumo">
                ${n.financeiro.proxima(I(t.proxima))}
              </span>
            </button>

            <div class="registro__acoes">
              <kk-icon-button
                name=${t.ativa?`player-pause`:`player-play`}
                label=${t.ativa?n.financeiro.pausar:n.financeiro.retomar}
                @click=${()=>r.alternar({especie:`recorrencia`,registro:{...t,ativa:!t.ativa}})}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${n.acoes.excluir}
                @click=${()=>r.excluir({especie:`recorrencia`,registro:t})}
              ></kk-icon-button>
            </div>
          </div>
        `})}
    </div>
  `}function He(e,t){let n=A.formulario;return n===null?e.vista===`transacoes`?Ie(e,t):e.vista===`categorias`?Re(e,t):e.vista===`recorrencias`?Ve(e,t):je(e,t):n.especie===`transacao`?Me(e,t,n.dados):n.especie===`categoria`?Le(t,n.dados):Be(e,t,n.dados)}function Ue(t,n){return j(t.vista),e`<div class="financeiro">${He(t,n)}</div>`}var q=[],J=[],Y=[],X=!1;async function Z(){let e=await ue();q=e.categorias,J=e.transacoes,Y=e.recorrencias,p()}var We=new re(`financeiro`,async()=>{await Z(),await v(Y)&&await Z()});function Q(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function Ge(){X||=(xe(),!0)}te(`financeiro`,()=>{X=!1,N()});function $(e,t){return t>0?e.find(e=>e.id===t):void 0}async function Ke(e){try{if(e.especie===`transacao`){await h(e.registro,$(J,e.registro.id)),m(n.financeiro.transacaoSalva),await Z();return}if(e.especie===`categoria`){await oe(e.registro),m(n.financeiro.categoriaSalva),await Z();return}await _(e.registro,$(Y,e.registro.id)),m(n.financeiro.recorrenciaSalva),await Z(),await v(Y)&&await Z()}catch(e){console.error(`Financeiro: a gravação falhou.`,e),m(n.financeiro.naoSalvo,`danger`)}}function qe(e){return e===`transacao`?{titulo:n.financeiro.excluirTransacao,texto:n.acervo.excluirTexto,feito:n.financeiro.transacaoExcluida,excluir:g}:e===`categoria`?{titulo:n.financeiro.excluirCategoria,texto:n.financeiro.excluirCategoriaTexto,feito:n.financeiro.categoriaExcluida,excluir:ce}:{titulo:n.financeiro.excluirRecorrencia,texto:n.financeiro.excluirRecorrenciaTexto,feito:n.financeiro.recorrenciaExcluida,excluir:de}}async function Je(e){let t=qe(e.especie);if(await f({titulo:t.titulo,texto:t.texto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})){try{await t.excluir(e.registro.id)}catch(e){console.error(`Financeiro: a exclusão falhou.`,e),m(n.financeiro.naoExcluido,`danger`);return}m(t.feito),await Z()}}async function Ye(e){try{if(e.especie===`transacao`){let t=$(J,e.registro.id);t!==void 0&&await Xe(t)&&await se(t)}if(e.especie===`recorrencia`){let t=$(Y,e.registro.id);t!==void 0&&await fe(t)}}catch(e){console.error(`Financeiro: a alteração falhou.`,e),m(n.financeiro.naoAlterado,`danger`);return}await Z()}function Xe(e){if(e.esta_pago===1)return f({titulo:n.financeiro.estornar,texto:n.financeiro.estornarTexto(e.descricao),rotuloConfirmar:n.acoes.confirmar,variante:`warning`});let t=e.tipo===0,r=d(e.valor);return f({titulo:t?n.financeiro.receber:n.financeiro.pagar,texto:t?n.financeiro.receberTexto(e.descricao,r):n.financeiro.pagarTexto(e.descricao,r),rotuloConfirmar:n.acoes.confirmar,variante:`primary`})}function Ze(e){if(e===`transacoes`)return n.financeiro.transacoes;if(e===`categorias`)return n.financeiro.categorias;if(e===`recorrencias`)return n.financeiro.recorrencias}function Qe(e){return e===`transacoes`?n.financeiro.novaTransacao:e===`categorias`?n.financeiro.novaCategoria:n.financeiro.novaRecorrencia}var $e={voltarPara(e){return Q(e)===`painel`?`home`:`financeiro`},titulo(e){return Ze(Q(e))},acoes(t){let n=Q(t);if(j(n),!(n===`painel`||M()))return e`
      <kk-icon-button name="plus" label=${Qe(n)} @click=${Se}></kk-icon-button>
    `},conteudo(e){Ge();let t=We.espera();return t===null?Ue({vista:Q(e),categorias:q.map(ie),transacoes:J.map(le),recorrencias:Y.map(ae)},{navegar:e=>ne(`financeiro/${e}`),salvar:e=>void Ke(e),excluir:e=>void Je(e),alternar:e=>void Ye(e)}):t}};export{$e as telaFinanceiro};