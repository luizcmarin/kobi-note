import{i as e,o as t,t as n}from"./lit-CI_s7elC.js";import{n as r}from"./strings-V1DWQvwW.js";import{_ as i,c as a,h as o}from"./formato-BoZO7uRM.js";import{r as s}from"./texto-BZYXsRJ8.js";import{n as c}from"./ordem-Bz0b6nnu.js";import{r as l}from"./rotas-CR8kk0YZ.js";import{s as u}from"./banco-Ddb9erT8.js";import{ct as d}from"./index-Dqmsht0l.js";import{t as f}from"./carga-yT611LUW.js";import{t as p}from"./compartilhar-BRFAtGgW.js";var m=[{chave:`auge_publicadores`,noMundo:!0,noPais:!0},{chave:`media_publicadores`,noMundo:!0,noPais:!0},{chave:`batizados`,noMundo:!0,noPais:!0},{chave:`media_pioneiros`,noMundo:!0,noPais:!0},{chave:`media_pioneiros_auxiliares`,noMundo:!0,noPais:!1},{chave:`media_estudos`,noMundo:!0,noPais:!0},{chave:`congregacoes`,noMundo:!0,noPais:!0},{chave:`assistencia_celebracao`,noMundo:!0,noPais:!0},{chave:`participantes_celebracao`,noMundo:!0,noPais:!1},{chave:`horas`,noMundo:!0,noPais:!1},{chave:`aumento_percentual`,noMundo:!0,noPais:!0,decimal:!0},{chave:`populacao`,noMundo:!1,noPais:!0},{chave:`proporcao`,noMundo:!1,noPais:!0,menorEMais:!0},{chave:`paises`,noMundo:!0,noPais:!1},{chave:`sedes`,noMundo:!0,noPais:!1}];function h(e){return m.find(t=>t.chave===e)??{chave:e,noMundo:!0,noPais:!0}}function ee(e,t){let n=[...e].sort((e,t)=>e.ano-t.ano),r=new Map,i=new Map;for(let e of[...t].sort((e,t)=>e.ano-t.ano)){if(Number(e.agrupado)===1){i.set(e.ano,e);continue}let t=r.get(e.pais);t===void 0?r.set(e.pais,[e]):t.push(e)}return{anos:n,porPais:r,nomes:[...r.keys()].sort((e,t)=>c(`pt-BR`,e,t)),outros:i}}async function te(){let[e,t]=await Promise.all([u(`relatorio_mundial`).todos(),u(`relatorio_mundial_paises`).todos()]);return ee(e,t)}function g(e){return e.anos.map(e=>e.ano)}function _(e){return typeof e==`number`&&Number.isFinite(e)?e:null}function v(e,t,n){let r=e.anos.find(e=>e.ano===t);return r===void 0?null:_(r[n])}function y(e,t,n,r){let i=e.porPais.get(t)?.find(e=>e.ano===n);return i===void 0?null:_(i[r])}function b(e,t){return g(e).map(n=>v(e,n,t))}function x(e,t,n){return g(e).map(r=>y(e,t,r,n))}function S(e,t){return e===null||t===null?null:{diferenca:t-e,percentual:e===0?null:(t-e)/e*100}}function ne(e){let t=e.find(e=>e!==null&&e!==0)??null;return e.map(e=>e===null||t===null?null:e/t*100)}function re(e,t,n,r,i){let a=h(n).menorEMais===!0,o=[];for(let a of e.nomes){let s=y(e,a,t,n);if(s===null)continue;if(r!==`crescimento`){o.push({pais:a,valor:s});continue}let c=i===void 0?null:y(e,a,i,n),l=S(c,s);c===null||c<=0||l===null||l.percentual===null||o.push({pais:a,valor:s,base:c,variacao:l})}let s=r===`menores`===a?-1:1;return o.sort((e,t)=>{if(r===`crescimento`){let n=(t.variacao?.percentual??0)-(e.variacao?.percentual??0);return n===0?t.valor-e.valor||c(`pt-BR`,e.pais,t.pais):n}return s*(e.valor-t.valor)||c(`pt-BR`,e.pais,t.pais)})}function C(e,t){return e.filter(e=>s(t,e))}function ie(e,t){let n=Math.abs(e);return n>=1e9?`${a(e/1e9,0,2)} ${t.bilhoes}`:n>=1e6?`${a(e/1e6,0,2)} ${t.milhoes}`:n>=1e4?`${a(e/1e3,0,n>=1e5?0:1)} ${t.mil}`:o(Math.round(e))}function w(e,t){return h(t).decimal===!0?a(e,0,1):o(e)}function T(e){let t=i(e);return e>0?`+${t}`:t}function E(e){let t=o(e);return e>0?`+${t}`:t}function ae(e){return e%4==0&&e%100!=0||e%400==0?366:365}function oe(e,t,n){let r=e[0]??t,i=n(t,`auge_publicadores`),a=n(t,`media_publicadores`),o=n(t,`batizados`),s=n(t,`assistencia_celebracao`),c=n(t,`media_pioneiros`),l=n(t,`media_estudos`),u=r===t?null:n(r,`auge_publicadores`),d=e.filter(e=>e<=t).map(e=>n(e,`batizados`)),f=d.length>1&&d.every(e=>e!==null)?d.reduce((e,t)=>e+(t??0),0):null,p=(e,t)=>e===null||t===null||t===0?null:e/t;return{ano:t,primeiroAno:r,auge:i,batizados:o,batizadosPorDia:o===null?null:o/ae(t),batizadosNoPeriodo:f,celebracao:s,celebracaoPorPublicador:p(s,i),pioneiros:c,pioneirosPorCento:(()=>{let e=p(c,a);return e===null?null:e*100})(),estudos:l,estudosPorPublicador:p(l,a),augeNoPrimeiroAno:u,crescimento:S(u,i)}}var se=640,D=240,O=56,ce=22,k=214;function le(e){let t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function A(e,t){if(e.length===0)return{minimo:0,maximo:1,marcas:[0,1]};let n=t?Math.min(0,...e):Math.min(...e),r=Math.max(...e);n===r&&(r=n+(Math.abs(n)||1),t||(n-=Math.abs(n)*.1||1));let i=le((r-n)/4),a=Math.floor(n/i)*i,o=Math.ceil(r/i)*i,s=[];for(let e=a;e<=o+i/2;e+=i)s.push(e);return{minimo:a,maximo:o,marcas:s}}function j(e,t,n){return k-(e-t)/(n-t||1)*192}function M(e,n,r,i){return e.map(e=>{let a=j(e,n,r);return t`
      <line class="grafico-mundial__grade" x1=${O} y1=${a} x2=${628} y2=${a} />
      <text class="grafico-mundial__marca" x=${50} y=${a} dy="0.32em" text-anchor="end">
        ${i(e)}
      </text>
    `})}function ue(e,t,n){let r=Math.min(4,t/2,Math.max(0,k-n));return`M${e},${k} V${n+r} Q${e},${n} ${e+r},${n} H${e+t-r} Q${e+t},${n} ${e+t},${n+r} V${k} Z`}function N(r){let{minimo:i,maximo:a,marcas:o}=A(r.valores.filter(e=>e!==null),!0),s=572/Math.max(1,r.anos.length),c=Math.min(s*.6,40);return e`
    <svg
      class="grafico-mundial"
      viewBox=${`0 0 ${se} ${D}`}
      role="img"
      aria-label=${r.descricao}
    >
      ${M(o,i,a,r.curto)}
      ${r.anos.map((e,o)=>{let l=r.valores[o]??null,u=O+s*o+s/2,d=o===r.destaque,f=l===null?k:j(l,i,a);return t`
          <g
            class="grafico-mundial__coluna"
            ?data-aceso=${d}
            @click=${()=>r.aoEscolher?.(o)}
          >
            <title>${e}: ${l===null?r.semNumero:r.inteiro(l)}</title>
            <rect class="grafico-mundial__alvo" x=${u-s/2} y=${ce} width=${s} height=${192} />
            ${l===null?t`<text class="grafico-mundial__marca" x=${u} y=${208} text-anchor="middle">${r.semNumero}</text>`:t`<path class="grafico-mundial__barra" d=${ue(u-c/2,c,f)} />`}
            ${d&&l!==null?t`<text class="grafico-mundial__valor" x=${u} y=${f-6} text-anchor="middle">${r.curto(l)}</text>`:n}
            <text class="grafico-mundial__ano" x=${u} y=${232} text-anchor="middle">${e}</text>
          </g>
        `})}
    </svg>
  `}function de(e){let t=[],n=[];for(let r of e)r===null?(n.length>1&&t.push(n.join(` `)),n=[]):n.push(`${n.length===0?`M`:`L`}${r.x},${r.y}`);return n.length>1&&t.push(n.join(` `)),t}function fe(r){let{minimo:i,maximo:a,marcas:o}=A(r.series.flatMap(e=>e.valores.filter(e=>e!==null)),!1),s=572/Math.max(1,r.anos.length-1),c=e=>r.anos.length===1?342:O+s*e;return e`
    <div class="grafico-mundial__legenda">
      ${r.series.map(t=>e`
          <span class="grafico-mundial__chave">
            <span class="grafico-mundial__cor" data-cor=${t.cor}></span>${t.rotulo}
          </span>
        `)}
    </div>
    <svg
      class="grafico-mundial"
      viewBox=${`0 0 ${se} ${D}`}
      role="img"
      aria-label=${r.descricao}
    >
      ${M(o,i,a,r.curto)}
      ${r.anos.map((e,n)=>t`<text class="grafico-mundial__ano" x=${c(n)} y=${232} text-anchor="middle">${e}</text>`)}
      ${r.series.map(e=>{let o=e.valores.map((e,t)=>e===null?null:{x:c(t),y:j(e,i,a)});return t`
          <g class="grafico-mundial__serie" data-cor=${e.cor}>
            ${de(o).map(e=>t`<path class="grafico-mundial__linha" d=${e} />`)}
            ${o.map((i,a)=>{let o=e.valores[a];return i===null||o==null?n:t`
                <circle class="grafico-mundial__ponto" cx=${i.x} cy=${i.y} r="4">
                  <title>${e.rotulo} · ${r.anos[a]}: ${r.inteiro(o)}</title>
                </circle>
              `})}
          </g>
        `})}
    </svg>
  `}var pe=20,P=``,F=5,I=null,L={ano:0,chave:`auge_publicadores`},R={ano:0,chave:`auge_publicadores`,ordem:`maiores`,desde:0,busca:``,todos:!1},z={ano:0,chave:`auge_publicadores`},B={escolhidos:[],chave:`auge_publicadores`,crescimento:!1,busca:``},me=new f(`mundial`,async()=>{I=await te();let e=g(I),t=e[e.length-1]??0;L.ano=t,R.ano=t,R.desde=e[0]??t});function V(e){return ie(e,r.mundial.unidades)}function H(e){return r.mundial.indicadores[e]}function U(t){let n=(n,i)=>e`
    <button
      class="chip"
      ?data-ativo=${t===n}
      aria-pressed=${t===n}
      @click=${()=>l(i)}
    >
      ${r.mundial.vistas[n]}
    </button>
  `;return e`
    <div class="chips" role="group" aria-label=${r.mundial.vista}>
      ${n(`mundo`,`mundial`)} ${n(`paises`,`mundial/paises`)}
      ${n(`comparar`,`mundial/comparar`)}
    </div>
  `}function W(t,n,i,a=r.mundial.anoDeServico){return e`
    <div class="mundial__anos" role="group" aria-label=${a}>
      ${t.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${t===n}
            aria-pressed=${t===n}
            title=${r.mundial.periodoDoAno(t)}
            @click=${()=>{i(t),d()}}
          >
            ${t}
          </button>
        `)}
    </div>
  `}function G(t,n,i){return e`
    <kk-select
      class="mundial__indicador"
      label=${r.mundial.indicador}
      .value=${n}
      @kk-change=${e=>{i(e.target.value),d()}}
    >
      ${t.map(t=>e`<kk-option value=${t}>${H(t)}</kk-option>`)}
    </kk-select>
  `}function K(t,i,a,o,s){let c=t===`aumento_percentual`?null:S(a,i),l=h(t).menorEMais===!0,u=c===null||c.diferenca===0?`igual`:c.diferenca>0===l?`pior`:`melhor`;return e`
    <button class="mundial__cartao" ?data-aceso=${o} aria-pressed=${o} @click=${s}>
      <span class="mundial__rotulo">${H(t)}</span>
      <strong class="mundial__valor">
        ${t===`aumento_percentual`?T(i):w(i,t)}
      </strong>
      ${c===null?n:e`
            <span class="mundial__variacao" data-direcao=${u}>
              <kk-icon
                name=${c.diferenca>0?`arrow-up-right`:c.diferenca<0?`arrow-down-right`:`minus`}
              ></kk-icon>
              ${r.mundial.sobreOAnterior(c.percentual===null?E(c.diferenca):T(c.percentual))}
            </span>
          `}
    </button>
  `}function q(t){return t.length===0?n:e`
    <section class="mundial__frases">
      <h2 class="secao">${r.mundial.frasesTitulo}</h2>
      <p class="mundial__ajuda">${r.mundial.frasesAjuda}</p>
      <ul>
        ${t.map(t=>e`
            <li>
              <span>${t}</span>
              <kk-icon-button
                name="share"
                label=${r.mundial.levar}
                @click=${()=>void p(``,t)}
              ></kk-icon-button>
            </li>
          `)}
      </ul>
    </section>
  `}function J(t){return t===void 0||t===``?n:e`
    <p class="mundial__fonte">
      <a href=${t} target="_blank" rel="noopener">
        <kk-icon name="external-link"></kk-icon>${r.mundial.fonte}
      </a>
    </p>
  `}function Y(e,t,n,i){let s=oe(g(e),t,n),c=e=>o(Math.round(e)),l=(e,t)=>a(e,0,t),u=e=>i===P?e:`${i} — ${e}`,d=[];if(s.batizados!==null&&s.batizadosPorDia!==null&&d.push(u(s.batizadosPorDia>=1?r.mundial.frases.batizados(t,s.batizados,c(s.batizados),l(s.batizadosPorDia,0)):r.mundial.frases.batizadosNoAno(t,s.batizados,c(s.batizados)))),s.batizadosNoPeriodo!==null&&d.push(u(r.mundial.frases.periodo(s.primeiroAno,t,s.batizadosNoPeriodo,c(s.batizadosNoPeriodo)))),s.crescimento!==null&&s.augeNoPrimeiroAno!==null&&s.auge!==null&&d.push(u(r.mundial.frases.crescimento(s.primeiroAno,t,c(s.augeNoPrimeiroAno),c(s.auge),E(s.crescimento.diferenca),s.crescimento.percentual===null?``:T(s.crescimento.percentual)))),s.celebracao!==null&&s.celebracaoPorPublicador!==null&&d.push(u(r.mundial.frases.celebracao(t,s.celebracao,c(s.celebracao),l(s.celebracaoPorPublicador,1)))),s.pioneiros!==null&&s.pioneirosPorCento!==null&&d.push(u(r.mundial.frases.pioneiros(t,s.pioneiros,c(s.pioneiros),l(s.pioneirosPorCento,0)))),s.estudos!==null&&s.estudosPorPublicador!==null&&d.push(u(r.mundial.frases.estudos(t,s.estudos,c(s.estudos),l(s.estudosPorPublicador,2)))),i!==P){let a=n(t,`auge_publicadores`),o=v(e,t,`auge_publicadores`);a!==null&&o!==null&&o>0&&d.push(r.mundial.frases.participacao(i,t,l(a/o*100,2)));let s=n(t,`proporcao`);s!==null&&d.push(r.mundial.frases.proporcao(i,t,c(s)))}return d}function he(t){let n=g(t),i=n.indexOf(L.ano),a=n[i-1],o=m.filter(e=>e.noMundo&&v(t,L.ano,e.chave)!==null).map(e=>e.chave);return o.includes(L.chave)||(L.chave=o[0]??`auge_publicadores`),e`
    ${U(`mundo`)}
    ${W(n,L.ano,e=>{L.ano=e})}
    <p class="mundial__ajuda">${r.mundial.periodoDoAno(L.ano)}</p>

    <div class="mundial__cartoes">
      ${o.map(e=>K(e,v(t,L.ano,e)??0,a===void 0?null:v(t,a,e),e===L.chave,()=>{L.chave=e,d()}))}
    </div>

    <figure class="mundial__figura">
      <figcaption>${H(L.chave)}</figcaption>
      ${N({descricao:r.mundial.descricaoColunas(H(L.chave),n[0]??0,n[n.length-1]??0),anos:n,valores:b(t,L.chave),destaque:i,curto:V,inteiro:e=>w(e,L.chave),semNumero:r.mundial.semNumero,aoEscolher:e=>{L.ano=n[e]??L.ano,d()}})}
    </figure>

    ${q(Y(t,L.ano,(e,n)=>v(t,e,n),P))}
    ${J(t.anos.find(e=>e.ano===L.ano)?.link_fonte)}
  `}var X=m.filter(e=>e.noPais).map(e=>e.chave);function ge(t,n,i){let a=t.variacao,o=a===void 0?t.valor:Math.abs(a.percentual??0),s=i>0?Math.max(2,o/i*100):0;return e`
    <li>
      <button
        class="mundial__posto"
        @click=${()=>l(`mundial/pais/${encodeURIComponent(t.pais)}`)}
      >
        <span class="mundial__numero">${n}</span>
        <span class="mundial__nome">${t.pais}</span>
        <span class="mundial__quanto">
          ${a===void 0?w(t.valor,R.chave):r.mundial.cresceu(T(a.percentual??0),w(t.base??0,R.chave),w(t.valor,R.chave))}
        </span>
        <span class="mundial__trilho" aria-hidden="true">
          <span
            class="mundial__barra"
            ?data-negativa=${(a?.diferenca??0)<0}
            style=${`inline-size: ${s}%`}
          ></span>
        </span>
      </button>
    </li>
  `}function _e(t){let i=g(t),a=i.filter(e=>e<R.ano);R.ordem===`crescimento`&&!a.includes(R.desde)&&(R.desde=a[0]??R.ano);let o=re(t,R.ano,R.chave,R.ordem,R.ordem===`crescimento`?R.desde:void 0),s=new Map(o.map((e,t)=>[e.pais,t+1])),c=new Set(C(t.nomes,R.busca)),l=o.filter(e=>c.has(e.pais)),u=R.todos||R.busca.trim()!==``?l:l.slice(0,pe),f=Math.max(0,...o.map(e=>e.variacao===void 0?e.valor:Math.abs(e.variacao.percentual??0))),p=t.outros.get(R.ano);return e`
    ${U(`paises`)}
    ${W(i,R.ano,e=>{R.ano=e})}

    <div class="mundial__controles">
      ${G(X,R.chave,e=>{R.chave=e})}
      <div class="mundial__ordem" role="group" aria-label=${r.mundial.ordenar}>
        ${[`maiores`,`menores`,`crescimento`].map(t=>e`
            <button
              class="chip"
              ?data-ativo=${R.ordem===t}
              aria-pressed=${R.ordem===t}
              ?disabled=${t===`crescimento`&&a.length===0}
              @click=${()=>{R.ordem=t,d()}}
            >
              ${r.mundial.ordens[t]}
            </button>
          `)}
      </div>
      ${R.ordem===`crescimento`&&a.length>0?W(a,R.desde,e=>{R.desde=e},r.mundial.desde):n}
      <kk-input
        type="search"
        clearable
        placeholder=${r.mundial.buscarPais}
        .value=${R.busca}
        @kk-input=${e=>{R.busca=e.target.value,d()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${R.ordem===`crescimento`?e`<p class="mundial__ajuda">${r.mundial.ajudaCrescimento(R.desde,R.ano)}</p>`:n}

    ${u.length===0?e`<p class="vazio">${r.mundial.nenhumPais}</p>`:e`
          <ol class="mundial__classificacao">
            ${u.map(e=>ge(e,s.get(e.pais)??0,f))}
          </ol>
        `}

    ${u.length<l.length?e`
          <kk-button
            class="mundial__todos"
            @click=${()=>{R.todos=!0,d()}}
          >
            ${r.mundial.mostrarTodos(l.length)}
          </kk-button>
        `:n}

    ${p===void 0?n:e`<p class="mundial__ajuda">${r.mundial.foraDaLista(p.nome_no_relatorio)}</p>`}
    ${J(t.anos.find(e=>e.ano===R.ano)?.link_paises)}
  `}var Z=[`auge_publicadores`,`batizados`,`media_pioneiros`,`congregacoes`,`media_estudos`,`assistencia_celebracao`];function ve(t,i){let a=t.porPais.get(i);if(a===void 0)return e`${U(`paises`)}<p class="vazio">${r.mundial.paisNaoEncontrado}</p>`;let o=g(t),s=a.map(e=>e.ano);s.includes(z.ano)||(z.ano=s[s.length-1]??0);let c=o[o.indexOf(z.ano)-1],u=X.filter(e=>y(t,i,z.ano,e)!==null);u.includes(z.chave)||(z.chave=u[0]??`auge_publicadores`);let f=a.find(e=>e.ano===z.ano)?.nome_no_relatorio;return e`
    ${U(`paises`)}
    ${W(s,z.ano,e=>{z.ano=e})}
    ${f!==void 0&&f!==``&&f!==i?e`<p class="mundial__ajuda">${r.mundial.escritoNoAno(z.ano,f)}</p>`:n}

    <div class="mundial__cartoes">
      ${u.map(e=>K(e,y(t,i,z.ano,e)??0,c===void 0?null:y(t,i,c,e),e===z.chave,()=>{z.chave=e,d()}))}
    </div>

    <figure class="mundial__figura">
      <figcaption>${H(z.chave)}</figcaption>
      ${N({descricao:r.mundial.descricaoColunas(`${H(z.chave)} — ${i}`,o[0]??0,o[o.length-1]??0),anos:o,valores:x(t,i,z.chave),destaque:o.indexOf(z.ano),curto:V,inteiro:e=>w(e,z.chave),semNumero:r.mundial.semNumero,aoEscolher:e=>{let t=o[e];t!==void 0&&s.includes(t)&&(z.ano=t),d()}})}
    </figure>

    <h2 class="secao">${r.mundial.anoAAno}</h2>
    <div class="mundial__tabela">
      <table>
        <thead>
          <tr>
            <th scope="col">${r.mundial.ano}</th>
            ${Z.map(t=>e`<th scope="col">${H(t)}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${o.map(n=>e`
              <tr ?data-aceso=${n===z.ano}>
                <th scope="row">${n}</th>
                ${Z.map(a=>{let o=y(t,i,n,a);return e`<td>${o===null?r.mundial.semNumero:w(o,a)}</td>`})}
              </tr>
            `)}
        </tbody>
      </table>
    </div>

    ${q(Y(t,z.ano,(e,n)=>y(t,i,e,n),i))}

    <div class="mundial__acoes">
      <kk-button
        @click=${()=>{Q(i),l(`mundial/comparar`)}}
      >
        <kk-icon slot="prefix" name="chart-line"></kk-icon>${r.mundial.comparar.botao}
      </kk-button>
    </div>
    ${J(t.anos.find(e=>e.ano===z.ano)?.link_paises)}
  `}function Q(e){if(B.escolhidos.some(t=>t.nome===e)||B.escolhidos.length>=F)return;let t=new Set(B.escolhidos.map(e=>e.cor)),n=[1,2,3,4,5].find(e=>!t.has(e))??1;B.escolhidos=[...B.escolhidos,{nome:e,cor:n}]}function $(e){return e===P?r.mundial.comparar.mundo:e}function ye(t){let i=g(t),s=B.escolhidos.length>=F,c=B.busca.trim()===``?[]:C(t.nomes,B.busca).filter(e=>!B.escolhidos.some(t=>t.nome===e)).slice(0,6),l=B.escolhidos.some(e=>e.nome===P),u=B.escolhidos.map(({nome:e,cor:n})=>{let r=e===P?b(t,B.chave):x(t,e,B.chave);return{rotulo:$(e),valores:B.crescimento?ne(r):r,cor:n}});return e`
    ${U(`comparar`)}

    <div class="mundial__escolhidos">
      ${B.escolhidos.map(({nome:t,cor:n})=>e`
          <span class="mundial__escolhido">
            <span class="grafico-mundial__cor" data-cor=${n}></span>
            ${$(t)}
            <kk-icon-button
              name="x"
              label=${r.mundial.comparar.tirar($(t))}
              @click=${()=>{B.escolhidos=B.escolhidos.filter(e=>e.nome!==t),d()}}
            ></kk-icon-button>
          </span>
        `)}
      ${l||s?n:e`
            <button
              class="chip"
              @click=${()=>{Q(P),d()}}
            >
              <kk-icon name="plus"></kk-icon>${r.mundial.comparar.mundo}
            </button>
          `}
    </div>

    ${s?e`<p class="mundial__ajuda">${r.mundial.comparar.cheia}</p>`:e`
          <kk-input
            type="search"
            clearable
            placeholder=${r.mundial.comparar.adicionar}
            .value=${B.busca}
            @kk-input=${e=>{B.busca=e.target.value,d()}}
          >
            <kk-icon slot="prefix" name="plus"></kk-icon>
          </kk-input>
          ${c.length===0?n:e`
                <div class="mundial__sugestoes">
                  ${c.map(t=>e`
                      <button
                        class="chip"
                        @click=${()=>{Q(t),B.busca=``,d()}}
                      >
                        ${t}
                      </button>
                    `)}
                </div>
              `}
        `}

    <div class="mundial__controles">
      ${G(X,B.chave,e=>{B.chave=e})}
      <div class="mundial__ordem" role="group" aria-label=${r.mundial.comparar.modo}>
        ${[!1,!0].map(t=>e`
            <button
              class="chip"
              ?data-ativo=${B.crescimento===t}
              aria-pressed=${B.crescimento===t}
              @click=${()=>{B.crescimento=t,d()}}
            >
              ${t?r.mundial.comparar.crescimento:r.mundial.comparar.numeros}
            </button>
          `)}
      </div>
    </div>

    ${u.length===0?e`<p class="vazio">${r.mundial.comparar.vazio}</p>`:e`
          ${B.crescimento?e`<p class="mundial__ajuda">${r.mundial.comparar.ajudaCrescimento}</p>`:n}
          <figure class="mundial__figura">
            <figcaption>${H(B.chave)}</figcaption>
            ${fe({descricao:r.mundial.descricaoLinhas(H(B.chave),u.map(e=>e.rotulo).join(`, `)),anos:i,series:u,curto:B.crescimento?e=>o(Math.round(e)):V,inteiro:e=>B.crescimento?a(e,0,1):w(e,B.chave)})}
          </figure>
          ${be(t,i)}
        `}
  `}function be(t,n){return e`
    <div class="mundial__tabela">
      <table>
        <thead>
          <tr>
            <th scope="col">${r.mundial.comparar.quem}</th>
            <th scope="col">${r.mundial.comparar.primeiro}</th>
            <th scope="col">${r.mundial.comparar.ultimo}</th>
            <th scope="col">${r.mundial.comparar.diferenca}</th>
          </tr>
        </thead>
        <tbody>
          ${B.escolhidos.map(({nome:i})=>{let a=e=>i===P?v(t,e,B.chave):y(t,i,e,B.chave),o=n.filter(e=>a(e)!==null),s=o[0],c=o[o.length-1],l=s===void 0?null:a(s),u=c===void 0?null:a(c),d=S(l,u);return e`
              <tr>
                <th scope="row">${$(i)}</th>
                <td>
                  ${l===null?r.mundial.semNumero:`${w(l,B.chave)} (${s})`}
                </td>
                <td>
                  ${u===null?r.mundial.semNumero:`${w(u,B.chave)} (${c})`}
                </td>
                <td>
                  ${d===null||s===c?r.mundial.semNumero:d.percentual===null?E(d.diferenca):`${E(d.diferenca)} (${T(d.percentual)})`}
                </td>
              </tr>
            `})}
        </tbody>
      </table>
    </div>
  `}function xe(e){try{return decodeURIComponent(e.args[1]??``)}catch{return e.args[1]??``}}var Se={voltarPara(e){let[t]=e.args;return t===`pais`?`mundial/paises`:t===void 0?`home`:`mundial`},titulo(e){return e.args[0]===`pais`?xe(e):void 0},conteudo(t){let n=me.espera();if(n!==null)return n;let i=I;if(i===null||i.anos.length===0)return e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="world"></kk-icon>
          <p>${r.mundial.vazio}</p>
        </div>
      `;let[a]=t.args;return e`
      <div class="mundial">
        ${a===`paises`?_e(i):a===`pais`?ve(i,xe(t)):a===`comparar`?ye(i):he(i)}
      </div>
    `}};export{Se as telaMundial};