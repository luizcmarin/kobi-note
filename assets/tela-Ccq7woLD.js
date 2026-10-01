import{i as e,t}from"./lit-CL39YOSA.js";import{a as n,n as r}from"./strings-5zCKnCyL.js";import{n as i,r as a}from"./rotas-D12eslN_.js";import{a as o,c as s,t as c,u as l}from"./data-7IMAkOFv.js";import{a as u,i as d,n as f}from"./dinheiro-CGWI9aWD.js";import{R as p,c as m,m as h}from"./index-DYev-n2R.js";import{t as ee}from"./carga-Cb65ZAc7.js";import{alternarAtivo as te,alternarPago as ne,carregar as re,excluirCategoria as ie,excluirRecorrencia as ae,excluirTransacao as g,gerarPendentes as _,paraCategoria as oe,paraRecorrencia as se,paraTransacao as ce,salvarCategoria as le,salvarRecorrencia as v,salvarTransacao as ue}from"./dados-DYQvINEM.js";var de=`🛒.🍕.☕.🏠.💡.💧.🔌.🚌.⛽.🚗.💊.🏥.🩺.👕.🎁.🎮.🎵.📚.🎓.🏖️.💰.💳.🧾.🐾.📱.💼.💇.🧴.🧺.🏋️.🛡️.🧸`.split(`.`);function y(){let e=new Date;return e.setHours(0,0,0,0),e.getTime()}function b(e){return e===``?l():e}function x(e,t){return e.filter(e=>e.vencimento!==0&&l(e.vencimento)===t)}function S(e,t=y()){return e.pago||e.vencimento===0?!1:e.vencimento<t}function C(e){return e===`vencidas`||e===`a-vencer`}function fe(e,t,n=y()){return t===`pagas`?e.pago:t===`vencidas`?S(e,n):t!==`a-vencer`||!e.pago&&!S(e,n)}function w(e,t,n,r=y()){return(C(n)?e:x(e,t)).filter(e=>fe(e,n,r))}function pe(e,t,n,r=y()){let i=w(e,t,n,r);if(!C(n))return i.sort((e,t)=>t.vencimento-e.vencimento);let a=2**53-1;return i.sort((e,t)=>(e.vencimento===0?a:e.vencimento)-(t.vencimento===0?a:t.vencimento))}function T(e){return e.reduce((e,t)=>e+t.valor,0)}function E(e){return e.reduce((e,t)=>e+(t.tipo===`receita`?t.valor:-t.valor),0)}function me(e){return{realizado:E(e.filter(e=>e.pago)),previsto:E(e)}}function he(e){return{receitas:T(e.filter(e=>e.tipo===`receita`)),despesas:T(e.filter(e=>e.tipo===`despesa`)),aReceber:T(e.filter(e=>e.tipo===`receita`&&!e.pago)),aPagar:T(e.filter(e=>e.tipo===`despesa`&&!e.pago))}}function ge(e){let t=new Map;for(let n of e){let e=t.get(n.categoria)??{receita:0,despesa:0};n.tipo===`receita`?e.receita+=n.valor:e.despesa+=n.valor,t.set(n.categoria,e)}return[...t].map(([e,t])=>({categoria:e,...t})).sort((e,t)=>t.receita+t.despesa-(e.receita+e.despesa))}function _e(e){let t=new Map;for(let n of e)n.tipo===`despesa`&&t.set(n.categoria,(t.get(n.categoria)??0)+n.valor);return[...t].map(([e,t])=>({categoria:e,total:t})).sort((e,t)=>t.total-e.total)}function ve(e,t){let n=new Set([new Date().getFullYear(),Number(t.slice(0,4))]);for(let t of e)t.vencimento!==0&&n.add(new Date(t.vencimento).getFullYear());return[...n].sort((e,t)=>t-e)}function D(e){return o(e===0?Date.now():e)}var ye=`••••`,be=`R$`,O={descricao:!1,valor:!1,diaMes:!1},k={vista:null,formulario:null,situacao:`vencidas`,pagina:1,mes:``,oculto:!0};function A(e){k.vista!==e&&(k.vista!==null&&(k.formulario=null,k.situacao=`vencidas`,k.pagina=1),k.vista=e)}function j(){return k.formulario!==null}function M(){k.formulario=null}function N(){k.oculto=!0}function xe(){k.vista===`transacoes`&&P({especie:`transacao`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,vencimento:D(0),pago:!1}}),k.vista===`categorias`&&P({especie:`categoria`,dados:{id:0,nome:``,icone:``,cor:`#0d6efd`,limite:``,erroNome:!1}}),k.vista===`recorrencias`&&P({especie:`recorrencia`,dados:{id:0,descricao:``,valor:``,tipo:`despesa`,categoria:0,periodicidade:`mensal`,diaMes:1,diaSemana:1,gerarComoPago:!1,ativa:!0,lancarCorrente:!1,erros:O}})}function P(e){k.formulario=e,p()}function F(e){return k.oculto?ye:d(e)}function I(e){return e===0?`—`:c(e)}function Se(e){return u(Number(e.replace(/\D/g,``)))}function L(e){return[...e].sort((e,t)=>e.nome.localeCompare(t.nome,n(),{sensitivity:`base`}))}function Ce(e){return new Date(2001,e-1,1).toLocaleDateString(n(),{month:`long`})}function R(e){return new Date(2001,0,e).toLocaleDateString(n(),{weekday:`long`})}function z(e){return e===`diaria`?r.financeiro.diaria:e===`semanal`?r.financeiro.semanal:e===`anual`?r.financeiro.anual:r.financeiro.mensal}var we=[`diaria`,`semanal`,`mensal`,`anual`];function Te(t){let{realizado:n,previsto:i}=me(t.transacoes);return e`
    <div class="financeiro-saldo">
      <div class="financeiro-saldo__topo">
        <span class="financeiro-saldo__rotulo">${r.financeiro.saldo}</span>
        <kk-button
          class="financeiro-saldo__olho"
          size="small"
          pill
          variant="primary"
          ?outline=${!k.oculto}
          @click=${()=>{k.oculto=!k.oculto,p()}}
        >
          <kk-icon slot="prefix" name=${k.oculto?`eye`:`eye-off`}></kk-icon>
          ${k.oculto?r.financeiro.mostrarValores:r.financeiro.ocultarValores}
        </kk-button>
      </div>
      <span class="financeiro-saldo__valor" ?data-negativo=${n<0}>
        ${F(n)}
      </span>
      <span class="financeiro-saldo__previsto">
        ${r.financeiro.previsto}
        <strong ?data-negativo=${i<0}>${F(i)}</strong>
      </span>
    </div>
  `}function B(t){let n=b(k.mes),[i=0,a=1]=n.split(`-`).map(Number),o=(e,t)=>{k.mes=`${e}-${String(t).padStart(2,`0`)}`,k.pagina=1,p()};return e`
    <div class="financeiro-periodo">
      <kk-select
        label=${r.financeiro.mes}
        size="small"
        .value=${String(a)}
        @kk-change=${e=>o(i,Number(e.target.value))}
      >
        ${Array.from({length:12},(e,t)=>t+1).map(t=>e`<kk-option value=${t}>${Ce(t)}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${r.financeiro.ano}
        size="small"
        .value=${String(i)}
        @kk-change=${e=>o(Number(e.target.value),a)}
      >
        ${ve(t.transacoes,n).map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
      </kk-select>
    </div>
  `}function Ee(t){let{receitas:n,despesas:i,aReceber:a,aPagar:o}=he(t),s=[[n,`receita`,r.financeiro.receitas],[i,`despesa`,r.financeiro.despesas],[a,`aviso`,r.financeiro.aReceber],[o,`aviso`,r.financeiro.aPagar]];return e`
    <div class="financeiro-placares">
      ${s.map(([t,n,r])=>e`
          <div class="financeiro-placar">
            <span class="financeiro-placar__valor" data-tom=${n}>${F(t)}</span>
            <span class="financeiro-placar__rotulo">${r}</span>
          </div>
        `)}
    </div>
  `}function De(e,t){return e.categorias.find(e=>e.id===t)?.nome??r.financeiro.semCategoria}function Oe(n,i){let a=ge(i);if(a.length===0)return V(`chart-bar`,r.financeiro.semMovimento);let o=Math.max(...a.map(e=>Math.max(e.receita,e.despesa))),s=e=>o<=0||e<=0?`0%`:`${Math.max(1.5,e/o*100)}%`,c=(t,n)=>e`
    <div class="financeiro-barra" data-tom=${n}>
      <div class="financeiro-barra__trilho">
        <div class="financeiro-barra__preenchido" style=${`width:${s(t)}`}></div>
      </div>
      <span class="financeiro-barra__valor">${d(t)}</span>
    </div>
  `;return e`
    <h2 class="financeiro__secao">${r.financeiro.porCategoria}</h2>
    <figure class="financeiro-grafico">
      <div class="financeiro-grafico__legenda">
        <span class="financeiro-legenda" data-tom="receita">
          <span class="financeiro-legenda__marca"></span>${r.financeiro.receitas}
        </span>
        <span class="financeiro-legenda" data-tom="despesa">
          <span class="financeiro-legenda__marca"></span>${r.financeiro.despesas}
        </span>
      </div>

      <div class="financeiro-grafico__linhas">
        ${a.map(r=>e`
            <div class="financeiro-grafico__grupo">
              <span class="financeiro-grafico__categoria">
                ${De(n,r.categoria)}
              </span>
              ${r.receita>0?c(r.receita,`receita`):t}
              ${r.despesa>0?c(r.despesa,`despesa`):t}
            </div>
          `)}
      </div>
    </figure>
  `}function ke(n,i){let a=_e(i).map(({categoria:e,total:t})=>{let i=n.categorias.find(t=>t.id===e);return{nome:i?.nome??r.financeiro.semCategoria,cor:i?.cor??`var(--kk-color-expense)`,icone:i?.icone??``,limite:i?.limite??0,total:t}});return a.length===0?t:e`
    <h2 class="financeiro__secao">${r.financeiro.limites}</h2>
    <div class="financeiro-limites">
      ${a.map(n=>{let i=n.limite>0&&n.total>n.limite,a=n.limite>0?Math.min(100,n.total/n.limite*100):0;return e`
          <div class="financeiro-limite" ?data-estourou=${i}>
            <span class="financeiro-limite__topo">
              <span class="financeiro-limite__nome">
                ${n.icone===``?t:e`<span>${n.icone}</span>`} ${n.nome}
              </span>
              <span class="financeiro-limite__valores">
                ${F(n.total)}
                ${n.limite===0?t:e`<small>${r.financeiro.deLimite(F(n.limite))}</small>`}
              </span>
            </span>

            ${n.limite===0?t:e`
                  <span class="financeiro-limite__barra" role="presentation">
                    <span
                      class="financeiro-limite__preenchido"
                      style=${`width:${a}%;background:${i?`var(--kk-color-expense)`:n.cor}`}
                    ></span>
                  </span>
                `}
          </div>
        `})}
    </div>
  `}function Ae(t,n){let i=[[`transacoes`,`receipt`,r.financeiro.transacoes,t.transacoes.length],[`categorias`,`tags`,r.financeiro.categorias,t.categorias.length],[`recorrencias`,`repeat`,r.financeiro.recorrencias,t.recorrencias.length]];return e`
    <div class="financeiro-atalhos">
      ${i.map(([t,i,a,o])=>e`
          <button class="financeiro-atalho" type="button" @click=${()=>n.navegar(t)}>
            <kk-icon class="financeiro-atalho__icone" name=${i}></kk-icon>
            <span class="financeiro-atalho__rotulo">${a}</span>
            <span class="financeiro-atalho__resumo">${r.financeiro.registros(o)}</span>
          </button>
        `)}
    </div>
  `}function je(t,n){let i=x(t.transacoes,b(k.mes));return e`
    ${Ae(t,n)} ${Te(t)} ${B(t)}
    ${Ee(i)} ${ke(t,i)}
    ${k.oculto?e`<p class="financeiro__discreto">${r.financeiro.valoresOcultos}</p>`:Oe(t,i)}
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
      @kk-input=${e=>{let t=e.target,n=Se(t.value);t.value=n,r(n)}}
    >
      <span slot="prefix">${be}</span>
    </kk-input>
  `}function U(t,n){let i=[[`receita`,`arrow-up`,r.financeiro.receita],[`despesa`,`arrow-down`,r.financeiro.despesa]];return e`
    <div>
      <span class="financeiro-formulario__rotulo">${r.financeiro.tipo}</span>
      <div class="financeiro-pastilhas">
        ${i.map(([r,i,a])=>e`
            <button
              class="financeiro-pastilha"
              type="button"
              aria-pressed=${t===r}
              @click=${()=>n(r)}
            >
              <kk-icon name=${i}></kk-icon>${a}
            </button>
          `)}
      </div>
    </div>
  `}function W(t,n,i){return e`
    <kk-select
      label=${r.financeiro.categoria}
      .value=${String(n)}
      @kk-change=${e=>i(Number(e.target.value))}
    >
      <kk-option value="0">${r.financeiro.semCategoria}</kk-option>
      ${L(t.categorias).map(t=>e`
          <kk-option value=${t.id}>
            ${t.icone===``?``:`${t.icone} `}${t.nome}
          </kk-option>
        `)}
    </kk-select>
  `}function G(t){return e`
    <div class="financeiro-formulario__acoes">
      <kk-button variant="primary" @click=${t}>
        <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
      </kk-button>
      <kk-button
        @click=${()=>{M(),p()}}
      >
        ${r.acoes.cancelar}
      </kk-button>
    </div>
  `}function K(e,t){M(),p(),e.salvar(t)}function Me(t,n,i){let a=e=>{k.formulario={especie:`transacao`,dados:{...i,...e}},p()};return e`
    <div class="financeiro-formulario">
      <h2 class="financeiro-formulario__titulo">
        ${i.id>0?r.financeiro.editarTransacao:r.financeiro.novaTransacao}
      </h2>

      <kk-input
        label=${r.financeiro.descricao}
        .value=${i.descricao}
        @kk-input=${e=>a({descricao:e.target.value})}
      ></kk-input>

      ${H(i.valor,r.financeiro.valor,e=>a({valor:e}))}
      ${U(i.tipo,e=>a({tipo:e}))}
      ${W(t,i.categoria,e=>a({categoria:e}))}

      <kk-input
        type="date"
        label=${r.financeiro.vencimento}
        .value=${i.vencimento}
        @kk-change=${e=>a({vencimento:e.target.value})}
      ></kk-input>

      <kk-switch
        ?checked=${i.pago}
        @kk-change=${e=>a({pago:e.target.checked})}
      >
        ${r.financeiro.pago}
      </kk-switch>

      ${G(()=>K(n,{especie:`transacao`,registro:{id:i.id,descricao:i.descricao.trim(),valor:f(i.valor),tipo:i.tipo,categoria:Number(i.categoria),vencimento:i.vencimento===``?Date.now():s(i.vencimento),pago:i.pago}}))}
    </div>
  `}function Ne(t){let n=b(k.mes),i=[[`vencidas`,r.financeiro.vencidas],[`a-vencer`,r.financeiro.aVencer],[`pagas`,r.financeiro.pagas],[`todas`,r.financeiro.todas]];return e`
    <div class="financeiro-filtros">
      <div class="financeiro-pastilhas" role="group" aria-label=${r.financeiro.situacao}>
        ${i.map(([r,i])=>e`
            <button
              class="financeiro-pastilha"
              type="button"
              data-situacao=${r}
              aria-pressed=${k.situacao===r}
              @click=${()=>{k.situacao=r,k.pagina=1,p()}}
            >
              ${i}
              <span class="financeiro-pastilha__conta">
                ${w(t.transacoes,n,r).length}
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
      @kk-change=${e=>{e.stopPropagation(),k.pagina=e.detail.page,p(),requestAnimationFrame(()=>document.querySelector(`.financeiro-filtros`)?.scrollIntoView({block:`nearest`}))}}
    ></kk-pagination>
  `}function Fe(e){return k.situacao===`vencidas`?r.financeiro.nenhumaVencida:k.situacao===`a-vencer`?r.financeiro.nadaAVencer:x(e.transacoes,b(k.mes)).length===0?r.financeiro.nenhumaNoMes:r.financeiro.nadaPagoNoMes}function Ie(n,i){if(n.transacoes.length===0)return V(`receipt`,r.financeiro.nenhumaTransacao);let a=e`
    ${Ne(n)}
    ${C(k.situacao)?t:B(n)}
  `,o=pe(n.transacoes,b(k.mes),k.situacao);if(o.length===0)return e`${a} ${V(`filter`,Fe(n))}`;let s=Math.ceil(o.length/20),c=Math.min(k.pagina,s),l=o.slice((c-1)*20,c*20);return e`
    ${a}
    <div class="registros">
      ${l.map(t=>{let a=t.tipo===`receita`,o=n.categorias.find(e=>e.id===t.categoria),s=o!==void 0&&o.cor!==``?o.cor:a?`var(--kk-color-income)`:`var(--kk-color-expense)`;return e`
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
              @click=${()=>P({especie:`transacao`,dados:{id:t.id,descricao:t.descricao,valor:u(t.valor),tipo:t.tipo,categoria:t.categoria,vencimento:D(t.vencimento),pago:t.pago}})}
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
                label=${t.pago?r.financeiro.desmarcarPago:r.financeiro.marcarPago}
                @click=${()=>i.alternar({especie:`transacao`,registro:{...t,pago:!t.pago}})}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${r.acoes.excluir}
                @click=${()=>i.excluir({especie:`transacao`,registro:t})}
              ></kk-icon-button>
            </div>
          </div>
        `})}
    </div>
    ${Pe(o.length,c)}
  `}function Le(t,n){let i=e=>{k.formulario={especie:`categoria`,dados:{...n,...e}},p()};return e`
    <div class="financeiro-formulario">
      <h2 class="financeiro-formulario__titulo">
        ${n.id>0?r.financeiro.editarCategoria:r.financeiro.novaCategoria}
      </h2>

      <kk-input
        label=${r.financeiro.nome}
        .value=${n.nome}
        help-text=${n.erroNome?r.financeiro.nomeObrigatorio:``}
        @kk-input=${e=>i({nome:e.target.value,erroNome:!1})}
      ></kk-input>

      <div>
        <span class="financeiro-formulario__rotulo">${r.financeiro.icone}</span>
        <div class="financeiro-icones">
          ${de.map(t=>e`
              <button
                class="financeiro-icone"
                type="button"
                aria-label=${t}
                aria-pressed=${n.icone===t}
                @click=${()=>i({icone:n.icone===t?``:t})}
              >
                ${t}
              </button>
            `)}
        </div>
      </div>

      <kk-input
        type="color"
        label=${r.financeiro.cor}
        .value=${n.cor}
        @kk-input=${e=>i({cor:e.target.value})}
      ></kk-input>

      ${H(n.limite,r.financeiro.limiteMensal,e=>i({limite:e}))}
      <p class="financeiro__discreto">${r.financeiro.limiteAjuda}</p>

      ${G(()=>{if(n.nome.trim()===``){i({erroNome:!0});return}K(t,{especie:`categoria`,registro:{id:n.id,nome:n.nome.trim(),icone:n.icone,cor:n.cor,limite:f(n.limite)}})})}
    </div>
  `}function Re(n,i){return n.categorias.length===0?V(`tags`,r.financeiro.nenhumaCategoria):e`
    <div class="financeiro-categorias">
      ${L(n.categorias).map(n=>e`
          <div class="financeiro-categoria">
            <span class="financeiro-categoria__cor" style=${`background:${n.cor}`}></span>
            <span>${n.icone}</span>
            <span class="financeiro-categoria__nome">${n.nome}</span>
            ${n.limite>0?e`
                  <span class="financeiro__discreto">
                    ${r.financeiro.limiteDe(F(n.limite))}
                  </span>
                `:t}
            <kk-icon-button
              name="pencil"
              label=${r.acoes.editar}
              @click=${()=>P({especie:`categoria`,dados:{id:n.id,nome:n.nome,icone:n.icone,cor:n.cor,limite:u(n.limite),erroNome:!1}})}
            ></kk-icon-button>
            <kk-icon-button
              name="trash"
              label=${r.acoes.excluir}
              @click=${()=>i.excluir({especie:`categoria`,registro:n})}
            ></kk-icon-button>
          </div>
        `)}
    </div>
  `}function ze(e){let t=z(e.periodicidade);return e.periodicidade===`mensal`?`${t} · ${r.financeiro.diaN(e.diaMes)}`:e.periodicidade===`semanal`?`${t} · ${R(e.diaSemana)}`:t}function Be(n,i,a){let o=e=>{k.formulario={especie:`recorrencia`,dados:{...a,...e}},p()};return e`
    <div class="financeiro-formulario">
      <h2 class="financeiro-formulario__titulo">
        ${a.id>0?r.financeiro.editarRecorrencia:r.financeiro.novaRecorrencia}
      </h2>

      <kk-input
        label=${r.financeiro.descricao}
        .value=${a.descricao}
        help-text=${a.erros.descricao?r.financeiro.descricaoObrigatoria:``}
        @kk-input=${e=>o({descricao:e.target.value,erros:{...a.erros,descricao:!1}})}
      ></kk-input>

      ${H(a.valor,r.financeiro.valor,e=>o({valor:e,erros:{...a.erros,valor:!1}}))}
      ${a.erros.valor?e`<p class="financeiro__erro">${r.financeiro.valorObrigatorio}</p>`:t}
      ${U(a.tipo,e=>o({tipo:e}))}
      ${W(n,a.categoria,e=>o({categoria:e}))}

      <kk-select
        label=${r.financeiro.periodicidade}
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
              label=${r.financeiro.diaDoMes}
              .value=${String(a.diaMes)}
              help-text=${a.erros.diaMes?r.financeiro.diaDoMesObrigatorio:r.financeiro.diaDoMesAjuda}
              @kk-input=${e=>o({diaMes:Number(e.target.value),erros:{...a.erros,diaMes:!1}})}
            ></kk-input>
          `:t}
      ${a.periodicidade===`semanal`?e`
            <kk-select
              label=${r.financeiro.diaDaSemana}
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
        ${r.financeiro.lancarJaPago}
      </kk-switch>

      ${a.id===0?e`
            <kk-switch
              ?checked=${a.lancarCorrente}
              help-text=${r.financeiro.lancarCorrenteAjuda}
              @kk-change=${e=>o({lancarCorrente:e.target.checked})}
            >
              ${r.financeiro.lancarCorrente}
            </kk-switch>
          `:t}

      <kk-switch
        ?checked=${a.ativa}
        @kk-change=${e=>o({ativa:e.target.checked})}
      >
        ${r.financeiro.ativa}
      </kk-switch>

      ${G(()=>{let e={descricao:a.descricao.trim()===``,valor:f(a.valor)<=0,diaMes:a.periodicidade===`mensal`&&!(a.diaMes>=1&&a.diaMes<=31)};if(e.descricao||e.valor||e.diaMes){o({erros:e});return}K(i,{especie:`recorrencia`,registro:{id:a.id,descricao:a.descricao.trim(),valor:f(a.valor),tipo:a.tipo,categoria:Number(a.categoria),periodicidade:a.periodicidade,diaMes:Math.min(31,Math.max(1,Number(a.diaMes))),diaSemana:Math.min(7,Math.max(1,Number(a.diaSemana))),gerarComoPago:a.gerarComoPago,ativa:a.ativa,proxima:0,...a.id===0?{lancarCorrente:a.lancarCorrente}:{}}})})}
    </div>
  `}function Ve(t,n){return t.recorrencias.length===0?V(`repeat`,r.financeiro.nenhumaRecorrencia):e`
    <div class="registros">
      ${t.recorrencias.map(t=>{let i=t.tipo===`receita`;return e`
          <div class="registro" data-status=${t.ativa?`ok`:`pendente`}>
            <span class="registro__avatar">
              <kk-icon name=${i?`arrow-up`:`arrow-down`}></kk-icon>
            </span>

            <button
              class="registro__alvo"
              type="button"
              @click=${()=>P({especie:`recorrencia`,dados:{id:t.id,descricao:t.descricao,valor:u(t.valor),tipo:t.tipo,categoria:t.categoria,periodicidade:t.periodicidade,diaMes:t.diaMes,diaSemana:t.diaSemana,gerarComoPago:t.gerarComoPago,ativa:t.ativa,lancarCorrente:!1,erros:O}})}
            >
              <span class="registro__topo">
                <span class="registro__titulo">${t.descricao}</span>
                <span class="financeiro-valor" data-tom=${t.tipo}>
                  ${i?`+`:`−`} ${F(t.valor)}
                </span>
              </span>
              <span class="registro__resumo">${ze(t)}</span>
              <span class="registro__resumo">
                ${r.financeiro.proxima(I(t.proxima))}
              </span>
            </button>

            <div class="registro__acoes">
              <kk-icon-button
                name=${t.ativa?`player-pause`:`player-play`}
                label=${t.ativa?r.financeiro.pausar:r.financeiro.retomar}
                @click=${()=>n.alternar({especie:`recorrencia`,registro:{...t,ativa:!t.ativa}})}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${r.acoes.excluir}
                @click=${()=>n.excluir({especie:`recorrencia`,registro:t})}
              ></kk-icon-button>
            </div>
          </div>
        `})}
    </div>
  `}function He(e,t){let n=k.formulario;return n===null?e.vista===`transacoes`?Ie(e,t):e.vista===`categorias`?Re(e,t):e.vista===`recorrencias`?Ve(e,t):je(e,t):n.especie===`transacao`?Me(e,t,n.dados):n.especie===`categoria`?Le(t,n.dados):Be(e,t,n.dados)}function Ue(t,n){return A(t.vista),e`<div class="financeiro">${He(t,n)}</div>`}var q=[],J=[],Y=[],X=!1;async function Z(){let e=await re();q=e.categorias,J=e.transacoes,Y=e.recorrencias,p()}var We=new ee(`financeiro`,async()=>{await Z(),await _(Y)&&await Z()});function Q(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function Ge(){X||=(N(),!0)}i(`financeiro`,()=>{X=!1,M()});function $(e,t){return t>0?e.find(e=>e.id===t):void 0}async function Ke(e){try{if(e.especie===`transacao`){await ue(e.registro,$(J,e.registro.id)),m(r.financeiro.transacaoSalva),await Z();return}if(e.especie===`categoria`){await le(e.registro),m(r.financeiro.categoriaSalva),await Z();return}await v(e.registro,$(Y,e.registro.id)),m(r.financeiro.recorrenciaSalva),await Z(),await _(Y)&&await Z()}catch(e){console.error(`Financeiro: a gravação falhou.`,e),m(r.financeiro.naoSalvo,`danger`)}}function qe(e){return e===`transacao`?{titulo:r.financeiro.excluirTransacao,texto:r.acervo.excluirTexto,feito:r.financeiro.transacaoExcluida,excluir:g}:e===`categoria`?{titulo:r.financeiro.excluirCategoria,texto:r.financeiro.excluirCategoriaTexto,feito:r.financeiro.categoriaExcluida,excluir:ie}:{titulo:r.financeiro.excluirRecorrencia,texto:r.financeiro.excluirRecorrenciaTexto,feito:r.financeiro.recorrenciaExcluida,excluir:ae}}async function Je(e){let t=qe(e.especie);if(await h({titulo:t.titulo,texto:t.texto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await t.excluir(e.registro.id)}catch(e){console.error(`Financeiro: a exclusão falhou.`,e),m(r.financeiro.naoExcluido,`danger`);return}m(t.feito),await Z()}}async function Ye(e){try{if(e.especie===`transacao`){let t=$(J,e.registro.id);t!==void 0&&await Xe(t)&&await ne(t)}if(e.especie===`recorrencia`){let t=$(Y,e.registro.id);t!==void 0&&await te(t)}}catch(e){console.error(`Financeiro: a alteração falhou.`,e),m(r.financeiro.naoAlterado,`danger`);return}await Z()}function Xe(e){if(e.esta_pago===1)return h({titulo:r.financeiro.estornar,texto:r.financeiro.estornarTexto(e.descricao),rotuloConfirmar:r.acoes.confirmar,variante:`warning`});let t=e.tipo===0,n=d(e.valor);return h({titulo:t?r.financeiro.receber:r.financeiro.pagar,texto:t?r.financeiro.receberTexto(e.descricao,n):r.financeiro.pagarTexto(e.descricao,n),rotuloConfirmar:r.acoes.confirmar,variante:`primary`})}function Ze(e){if(e===`transacoes`)return r.financeiro.transacoes;if(e===`categorias`)return r.financeiro.categorias;if(e===`recorrencias`)return r.financeiro.recorrencias}function Qe(e){return e===`transacoes`?r.financeiro.novaTransacao:e===`categorias`?r.financeiro.novaCategoria:r.financeiro.novaRecorrencia}var $e={voltarPara(e){return Q(e)===`painel`?`home`:`financeiro`},titulo(e){return Ze(Q(e))},acoes(t){let n=Q(t);if(A(n),!(n===`painel`||j()))return e`
      <kk-icon-button name="plus" label=${Qe(n)} @click=${xe}></kk-icon-button>
    `},conteudo(e){Ge();let t=We.espera();return t===null?Ue({vista:Q(e),categorias:q.map(oe),transacoes:J.map(ce),recorrencias:Y.map(se)},{navegar:e=>a(`financeiro/${e}`),salvar:e=>void Ke(e),excluir:e=>void Je(e),alternar:e=>void Ye(e)}):t}};export{$e as telaFinanceiro};