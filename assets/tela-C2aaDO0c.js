import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{r}from"./rotas-CR8kk0YZ.js";import{s as i}from"./banco-H0jShgoR.js";import{i as a,n as o,t as s}from"./aparelho-BsIv_N04.js";import{a as c}from"./acessibilidade-0dW0_ixm.js";import{o as l,r as u}from"./acervo-CwqE9mCZ.js";import{T as d,ct as f}from"./index-BdGprTna.js";import{n as p,r as m,t as h}from"./favoritos-DSssFOrF.js";import{t as g}from"./carga-CWKYt6SK.js";import{a as _,o as v}from"./catalogo-C5SkjWIx.js";import"./note-HZ41aPeR.js";import{t as y}from"./busca-CGdlEf3z.js";var b=`Quando eu`,x=`note_jeova_favoritos`,S=`heart-handshake`;async function C(){return w(await i(`jeova_entende`).todos())}function w(e){return[...e].sort((e,t)=>E(e.grupo)-E(t.grupo)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var T=Object.keys(_);function E(e){let t=T.indexOf(e===``?v:e);return t===-1?T.length:t}function D(e){return e===``?_.emocoes??e:_[e]??e}function O(e){return`${b} ${e.tema.trim()}`}function k(e){return e===null?[]:u(e.versiculos).map(e=>({referencia:String(e?.referencia??``).trim(),texto:String(e?.texto??``).trim()})).filter(e=>e.referencia!==``&&e.texto!==``)}function A(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function j(e){let t=new Map;for(let n of e){let e=n.grupo===``?v:n.grupo,r=t.get(e);r===void 0?t.set(e,[n]):r.push(n)}return[...t].map(([e,t])=>({grupo:e,rotulo:D(e),temas:t}))}var M=`note_jeova_lidos`;function ee(){return a(M,{})}function N(e,t,n){let r=n?s(e,t,()=>({lidoEm:Date.now()})):Object.fromEntries(Object.entries(e).filter(([e])=>e!==String(t)));return o(M,r),r}function P(e,t){return t?.id!==void 0&&e[String(t.id)]!==void 0}var F=[],I=new Set,L={},R=``,z=new y(`not_jeova_entende`),B=new g(`jeova`,async()=>{F=await C(),I=m(x),L=ee()});function V(e){return F.find(t=>t.id===e)}function H(e){return p(`curado`,e.id)}function U(e){return I.has(H(e))}function W(e){I=h(x,I,H(e)),f()}function G(e,t){e.id!==void 0&&(L=N(L,e.id,t),f())}function K(e){return e.icone===``?S:e.icone}function q(i){let a=U(i);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${a}>
      <button class="cartao__alvo" @click=${()=>r(`jeova/${i.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${K(i)}></kk-icon>
          <span class="cartao__titulo">…${i.tema}</span>
        </span>
      </button>

      <div class="jeova__marcas">
        ${P(L,i)?e`<kk-icon
                class="jeova__marca"
                name="check"
                title=${n.jeova.lido}
              ></kk-icon>`:t}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${a?`filled`:`outline`}
          label=${a?n.jeova.desfavoritar:n.jeova.favoritar}
          @click=${()=>W(i)}
        ></kk-icon-button>
      </div>
    </div>
  `}function J(t,n,r,i=!1){return e`
    <kk-details class="jeova__secao" name="jeova-grupos" ?open=${r}>
      <span
        slot="summary"
        class="jeova__grupo ${i?`jeova__grupo--favoritos`:``}"
      >${t}</span>
      <div class="cartoes cartoes--duas">${n.map(q)}</div>
    </kk-details>
  `}function Y(){return e`
    <div class="jeova__capa">
      <img class="jeova__mascote" src=${c()} alt="" width="80" height="96" />
      <p class="jeova__subtitulo">${n.jeova.subtitulo}</p>
    </div>
  `}function X(){if(F.length===0)return e`
      <div class="jeova">
        ${Y()}
        <p class="vazio">${B.emAndamento?n.app.carregando:n.jeova.vazio}</p>
      </div>
    `;let r=A(F,z.achados),i=R.trim()===``,a=j(r),o=i?F.filter(U):[];return e`
    <div class="jeova">
      ${Y()}

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${n.jeova.buscar}
          .value=${R}
          @kk-input=${e=>{R=e.target.value,z.buscar(R),f()}}
        ></kk-input>
      </div>

      ${r.length===0?e`<p class="vazio">${n.jeova.semResultado}</p>`:e`
            <p class="jeova__quando" lang="pt-BR">${b}…</p>
            <kk-accordion class="jeova__grupos">
              ${o.length===0?t:J(n.jeova.favoritos,o,!0,!0)}
              ${a.map((e,t)=>J(e.rotulo,e.temas,o.length===0&&t===0))}
            </kk-accordion>
          `}
    </div>
  `}function Z(n,r,i){return l(i)?t:e`
    <article class="jeova__bloco jeova__bloco--${n}">
      <h2 class="jeova__secao-titulo">${r}</h2>
      <div class="prosa">${d(i)}</div>
    </article>
  `}function Q(r){let i=k(r);return i.length===0?t:e`
    <article class="jeova__bloco jeova__bloco--versiculos">
      <h2 class="jeova__secao-titulo">${n.jeova.versiculos}</h2>
      ${i.map(t=>e`
          <blockquote class="jeova__versiculo" lang="pt-BR">
            <p>${t.texto}</p>
            <cite>${t.referencia}</cite>
          </blockquote>
        `)}
    </article>
  `}function te(i){let a=i.personagem_id===null||i.personagem_id===void 0;return l(i.exemplo)&&a?t:e`
    <article class="jeova__bloco jeova__bloco--exemplo">
      <h2 class="jeova__secao-titulo">${n.jeova.exemplo}</h2>
      ${l(i.exemplo)?t:e`<div class="prosa">${d(i.exemplo)}</div>`}
      ${a?t:e`
            <kk-button
              class="jeova__cartao"
              outline
              @click=${()=>r(`personagens/${i.personagem_id}`)}
            >
              <kk-icon slot="prefix" name="user-star"></kk-icon>${n.jeova.verCartao}
            </kk-button>
          `}
    </article>
  `}function ne(t){let i=P(L,t);return e`
    <div class="jeova__fim">
      ${i?e`
            <p class="jeova__lido"><kk-icon name="check"></kk-icon>${n.jeova.lido}</p>
            <kk-button variant="text" size="small" @click=${()=>G(t,!1)}>
              ${n.jeova.desmarcar}
            </kk-button>
          `:e`
            <kk-button variant="primary" @click=${()=>G(t,!0)}>
              <kk-icon slot="prefix" name="check"></kk-icon>${n.jeova.li}
            </kk-button>
          `}

      <div class="jeova__saidas">
        <kk-button @click=${()=>r(`jeova`)}>${n.jeova.outros}</kk-button>
        <kk-button @click=${()=>r(`home`)}>${n.jeova.inicio}</kk-button>
      </div>
    </div>
  `}function re(r){return e`
    <div class="jeova jeova--tema">
      <p class="jeova__grupo-aberto">${D(r.grupo)}</p>

      ${l(r.acolhida)?t:e`<div class="prosa jeova__acolhida">${d(r.acolhida)}</div>`}
      ${Q(r)}
      ${te(r)}
      ${Z(`passos`,n.jeova.passos,r.passos)}
      ${Z(`oracao`,n.jeova.oracao,r.oracao)}
      ${Z(`ajuda`,n.jeova.ajuda,r.ajuda)}

      ${r.link_jw===``?t:e`
            <p class="jeova__fonte">
              <kk-icon name="book"></kk-icon>
              <a href=${r.link_jw} target="_blank" rel="noopener">${n.jeova.lerMais}</a>
            </p>
          `}

      ${ne(r)}
    </div>
  `}function $(e){let t=Number(e.args[0]);return Number.isFinite(t)?V(t):void 0}var ie={titulo(e){let t=$(e);return t===void 0?void 0:O(t)},voltarPara(e){return $(e)===void 0?`home`:`jeova`},acoes(t){let r=$(t);if(r===void 0)return;let i=U(r);return e`
      <kk-icon-button
        name="star"
        variant=${i?`filled`:`outline`}
        label=${i?n.jeova.desfavoritar:n.jeova.favoritar}
        @click=${()=>W(r)}
      ></kk-icon-button>
    `},conteudo(e){let t=B.falhou();if(t!==null)return t;let n=$(e);return n===void 0?X():re(n)}};export{ie as telaJeova};