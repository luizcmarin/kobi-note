import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-C-U_qlgv.js";import{r}from"./rotas-D12eslN_.js";import{R as i,m as a,p as o}from"./index-DQ-iAe1X.js";import{t as s}from"./carga-Cl47TOz-.js";import{i as ee,n as c,r as l}from"./atividades-7ZarHUB2.js";import{a as u,n as d,r as f,t as p}from"./recordes-C0b-yqzG.js";import{n as m}from"./sorteio-Bln1H9Cu.js";import{l as h,n as g,o as te}from"./dados-BWL-IcGQ.js";var ne=[`biblia`,`moderna`],_=g.indexOf(`apostasia`),v={biblia:g.slice(0,_),moderna:g.slice(_)},y=`linhadotempo`;function b(e,t,n){let r=v[n];return e.filter(e=>e.trilha===`biblica`&&e.id!==void 0&&r.includes(e.periodo)&&(t!==1||Number(e.destaque)===1))}function x(e){return e!==3}function S(e){return[...e].sort((e,t)=>Number(e.ordem_absoluta)-Number(t.ordem_absoluta))}function C(e,t,n){let r=new Set,i=[];for(let a of m(b(e,t,n))){let e=Number(a.ordem_absoluta);r.has(e)||(r.add(e),i.push(a))}return i.length<=2?null:{modo:n,nivel:t,linha:S(i.slice(0,2)),baralho:i.slice(2)}}function w(e,t){let n=Number(t.ordem_absoluta);return e.filter(e=>Number(e.ordem_absoluta)<n).length}function T(e,t){let n=w(e,t);return[...e.slice(0,n),t,...e.slice(n)]}function E(e){return e.replace(/\b(?:c\.\s*)?\d{1,4}\s*(?:AEC|EC)\b/g,`[ano]`).replace(/\b(?:1\d{3}|20\d{2})\b/g,`[ano]`)}var D=`inicio`,O=`biblia`,k=1,A=[],j=[],M=!1,N=null,P=[],F=0,I=0,L=null,R=null,z=null,B=new s(`linhadotempo`,async()=>{[A,j]=await Promise.all([te(),f(y)])});function V(){return N?.baralho[F]}function H(){let e=C(A,k,O);if(M=e===null,e===null){D=`inicio`,i();return}N=e,P=[...e.linha],F=0,I=0,L=null,R=null,z=null,D=`mesa`,i()}async function U(){I>0&&!await a({titulo:n.atividades.encerrarTitulo,texto:n.linhadotempo.encerrarTexto,rotuloConfirmar:n.atividades.encerrar})||(N=null,D=`inicio`,i())}function W(e){let t=V();if(N===null||t===void 0)return;let n=w(P,t);if(P=T(P,t),e!==n){R=t,G();return}I+=1,L=t,F+=1,V()===void 0?G():i()}function G(){if(N===null)return;let e={jogo:y,modo:N.modo,nivel:N.nivel};D=`fim`,i(),u(e,I).then(e=>{z=e,j=p(j,e.recorde)}).catch(e=>console.error(`linhadotempo: o recorde não foi gravado.`,e)).finally(i)}function K(){let e=d(j,{jogo:y,modo:O,nivel:k});return e===void 0||Number(e.melhor_pontos)===0?n.atividades.semRecorde:n.linhadotempo.recorde(Number(e.melhor_pontos),Number(e.partidas))}function q(){return e`
    <h2 class="secao">${n.linhadotempo.modo}</h2>
    <div class="modos">
      ${ne.map(t=>e`
          <button
            class="modo"
            ?data-ativo=${O===t}
            @click=${()=>{O=t,M=!1,i()}}
          >
            <kk-icon name=${t===`biblia`?`book-2`:`world`}></kk-icon>
            ${n.linhadotempo.modos[t]}
          </button>
        `)}
    </div>
    <p class="discreto">${n.linhadotempo.modosAjuda[O]}</p>

    ${l(k,e=>{k=e,M=!1,i()})}
    <p class="discreto">${n.linhadotempo.detalhes[k]}</p>
    <p>${n.linhadotempo.regra}</p>

    ${ee(K(),`linhadotempo__recorde`)}

    ${M?e`<kk-alert variant="warning" open class="linhadotempo__sem-eventos">
            ${n.linhadotempo.semEventos}
          </kk-alert>`:t}

    <kk-button variant="primary" class="jogo__jogar linhadotempo__comecar" @click=${H}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>${n.atividades.jogar}
    </kk-button>
  `}function J(r){o(E(r.titulo),void 0,i=>e`
      ${r.referencia===``?t:e`<p class="discreto linhadotempo__referencia">${E(r.referencia)}</p>`}
      ${r.resumo===``?t:e`<p>${E(r.resumo)}</p>`}
      <kk-button slot="footer" variant="primary" @click=${()=>i()}>
        ${n.linhadotempo.voltarAoJogo}
      </kk-button>
    `,{classe:`dialogo-linhadotempo`})}function Y(e){return N!==null&&x(N.nivel)?e.titulo:E(e.titulo)}function X(e){let t=P[e-1],r=P[e];return t===void 0&&r!==void 0?n.linhadotempo.antesDe(Y(r)):r===void 0&&t!==void 0?n.linhadotempo.depoisDe(Y(t)):n.linhadotempo.entre(Y(t),Y(r))}function re(e){if(N===null||!x(N.nivel))return n.linhadotempo.entraAqui;let t=P[e-1],r=P[e];return t===void 0&&r!==void 0?n.linhadotempo.antesDoAno(h(r)):r===void 0&&t!==void 0?n.linhadotempo.depoisDoAno(h(t)):n.linhadotempo.entreOsAnos(h(t),h(r))}function Z(t){return e`<span class="linhadotempo__trilho" aria-hidden="true">${t}</span>`}function Q(t){let r=re(t),i=X(t),a=r===n.linhadotempo.entraAqui?i:`${r}: ${i}`;return e`<button
    class="linhadotempo__entra"
    data-casa=${t}
    aria-label=${a}
    title=${i}
    @click=${()=>W(t)}
  >
    <span></span>
    ${Z(e`<span class="linhadotempo__mais"><kk-icon name="plus"></kk-icon></span>`)}
    <span class="linhadotempo__onde">${r}</span>
  </button>`}function ie(n){let r=N!==null&&x(N.nivel);return e`<div
    class="linhadotempo__carta"
    data-id=${String(n.id)}
    ?data-nova=${n===L}
  >
    <span class="linhadotempo__ano">${r?h(n):t}</span>
    ${Z(e`<span class="linhadotempo__ponto"></span>`)}
    <span class="linhadotempo__nome">${Y(n)}</span>
  </div>`}function $(t){return e`<p class="linhadotempo__ponta" data-lado=${t}>
    <span></span>
    ${Z(e`<kk-icon name=${t===`inicio`?`arrow-up`:`arrow-down`}></kk-icon>`)}
    <span>${t===`inicio`?n.linhadotempo.maisAntigo:n.linhadotempo.maisRecente}</span>
  </p>`}function ae(){if(L===null||N===null)return t;let r=x(N.nivel)?n.linhadotempo.certo(L.titulo,h(L)):n.linhadotempo.certoSemAno(E(L.titulo));return e`<p class="linhadotempo__certo" role="status">
    <kk-icon name="check"></kk-icon><span>${r}</span>
  </p>`}function oe(){let r=N,i=V();if(r===null||i===void 0)return q();let a=r.baralho.length-F;return e`
    <div class="linhadotempo__topo">
      <kk-icon-button
        name="x"
        label=${n.atividades.encerrar}
        @click=${()=>void U()}
      ></kk-icon-button>
      <span class="linhadotempo__titulo">
        ${n.linhadotempo.modos[r.modo]} · ${n.atividades.niveis[r.nivel]}
      </span>
      <kk-badge pill variant="primary" class="linhadotempo__placar">
        ${n.linhadotempo.placar(I)}
      </kk-badge>
    </div>

    <div class="linhadotempo__vez-fixa">
      ${ae()}
      <p class="linhadotempo__rodada">
        ${n.linhadotempo.daVez} · ${n.linhadotempo.restam(a)}
      </p>
      <div class="linhadotempo__vez" data-id=${String(i.id)} aria-live="polite">
        <strong class="linhadotempo__vez-nome">${E(i.titulo)}</strong>
        <button
          class="linhadotempo__info"
          aria-label=${n.linhadotempo.sobreOEvento}
          title=${n.linhadotempo.sobreOEvento}
          @click=${()=>J(i)}
        >
          <kk-icon name="info-circle"></kk-icon>
        </button>
      </div>
      ${I===0?e`<p class="linhadotempo__rodada">${n.linhadotempo.dica}</p>`:t}
    </div>

    <div
      class="linhadotempo__linha"
      role="group"
      aria-label=${n.linhadotempo.linha}
      ?data-sem-ano=${!x(r.nivel)}
    >
      ${$(`inicio`)}
      ${Q(0)}
      ${P.map((t,n)=>e`${ie(t)}${Q(n+1)}`)}
      ${$(`fim`)}
    </div>
  `}function se(){let a=c(z,`linhadotempo`,z!==null&&z.anterior>0?n.linhadotempo.recordeMantido(z.anterior):null),o=R;return e`
    <h2 class="resultado__titulo linhadotempo__fim">
      ${o===null?n.linhadotempo.tituloVitoria:n.linhadotempo.tituloDerrota}
    </h2>
    <div class="placares linhadotempo__placares">
      <div class="placar">
        <span class="placar__valor" data-tom="primaria">${I}</span>
        <span class="placar__rotulo">${n.linhadotempo.encaixadas}</span>
      </div>
    </div>
    ${o===null?t:e`<p class="linhadotempo__resumo linhadotempo__errou">
            ${n.linhadotempo.errou(o.titulo,h(o))}
          </p>`}
    ${a}

    <h2 class="secao">${n.linhadotempo.aLinha}</h2>
    <ol class="linhadotempo__ordem">
      ${P.map(t=>e`<li>
          <a
            class="linhadotempo__evento"
            ?data-errada=${t===o}
            href=${`#/cronologia/${t.id}?volta=${y}`}
            title=${n.linhadotempo.verNaCronologia}
          >
            <span class="linhadotempo__ano">${h(t)}</span>
            <span>${t.titulo}</span>
            <kk-icon name=${t===o?`x`:`chevron-right`}></kk-icon>
          </a>
        </li>`)}
    </ol>

    <div class="jogo__controles">
      <kk-button variant="primary" class="linhadotempo__de-novo" @click=${H}>
        <kk-icon slot="prefix" name="rotate"></kk-icon>${n.atividades.jogarDeNovo}
      </kk-button>
      <kk-button
        outline
        @click=${()=>{D=`inicio`,i()}}
      >
        <kk-icon slot="prefix" name="adjustments"></kk-icon>${n.linhadotempo.mudar}
      </kk-button>
      <kk-button @click=${()=>r(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${n.atividades.inicio}
      </kk-button>
    </div>
  `}var ce={voltarPara(){return`home`},conteudo(){let e=B.espera();return e===null?D===`mesa`?oe():D===`fim`?se():q():e}};export{ce as telaLinhaDoTempo};