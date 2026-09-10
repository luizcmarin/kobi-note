import{a as e,s as t}from"./banco-DT6T_b91.js";import{r as n}from"./catalogo-B2Z121mU.js";import{E as r,T as i,ct as a,et as o,it as s,ot as c,q as l,tt as u}from"./index-Dz7Qe9lu.js";import{alternarFavorito as d,chaveFavorito as ee,lerFavoritos as te}from"./favoritos-DAEWA_Gd.js";import{t as f}from"./unsafe-html-uBKeHs8t.js";import{t as p}from"./rascunho-fkVptIER.js";var m=`note_faq_favoritos`,ne=`message-question`;async function re(){return(await t(`faq`).todos()).sort((e,t)=>g(e.categoria)-g(t.categoria)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var h=Object.keys(n);function g(e){let t=h.indexOf(e);return t===-1?h.length:t}function _(e){return e===``?n.crencas??e:n[e]??e}function v(e){try{let t=JSON.parse(e===``?`[]`:e);return Array.isArray(t)?t:[]}catch{return[]}}function y(e){return e===null?[]:v(e.lentes)}function b(e){return e===null?[]:v(e.exemplos)}function ie(e,t){return e===null||t===null||t===``?!1:t===e.correta&&y(e).some(e=>e.id===t)}function ae(e){return e!==null&&y(e).some(t=>t.id===e.correta)}function x(e,t){return(y(e).find(e=>e.id===t)?.resposta??``).trim()}var oe={busca:``};function se(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function ce(e,t){let n=new Map;for(let t of e){let e=n.get(t.categoria);e===void 0?n.set(t.categoria,[t]):e.push(t)}return[...n].map(([e,n])=>({categoria:e,rotulo:_(e),perguntas:n,concluida:n.every(t)}))}var S=`note_faq_progresso`;function C(){return{respondidos:{}}}function le(){try{let e=JSON.parse(localStorage.getItem(S)??`null`);return{...C(),...e}}catch{return C()}}function ue(e){localStorage.setItem(S,JSON.stringify(e))}function de(e,t){let n=e.respondidos[String(t)],r={...e,respondidos:{...e.respondidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,respondidoEm:Date.now()}}};return ue(r),r}function w(e,t){return t?.id!==void 0&&e.respondidos[String(t.id)]!==void 0}function fe(e,t){return t.filter(t=>w(e,t)).length}function T(e){return`faq:${e}`}async function E(){let e=new Map;for(let t of await l()){if(t.origem!==`faq`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function pe(e,t,n){return n?.id!==void 0&&w(e,n)&&(t.get(n.id)??``).trim()!==``}function me(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var D=[],O=new Map,k=new Set,A=C(),j=!1,M=!1,N=null,P=oe,F=null,I=``;function L(t){I=t,e(`not_faq`,t).then(e=>{I===t&&(F=e===null?null:new Set(e),o())})}var R=-1,z=null,B=!1,V=!1,H=``,U=``,W=p({origem:`faq`,idDe:e=>e.id,chaveDe:e=>T(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${s.faq.titulo} — ${e.titulo}`,lembrete:()=>O});function G(){j||M||N!==null||(M=!0,(async()=>{try{[D,O]=await Promise.all([re(),E()]),k=te(m),A=le(),j=!0}catch(e){console.error(`faq: a carga falhou.`,e),N=r(e)}finally{M=!1,o()}})())}function he(){N=null,G(),o()}function ge(e){return D.find(t=>t.id===e)}function _e(e){R!==e.id&&(R=e.id??-1,z=null,B=!1,V=!1,H=``,U=``,W.abrir(e.id===void 0?``:O.get(e.id)??``))}function ve(e){B||z===null||(ie(e,z)?(B=!0,U=`ok`,H=x(e,z)||s.faq.acerto,K(e)):(U=`erro`,H=x(e,z)||s.faq.erro),o())}function K(e){V||e.id===void 0||(A=de(A,e.id),V=!0)}function q(e){return ee(`curado`,e.id)}function J(e){return k.has(q(e))}function Y(e){k=d(m,k,q(e)),o()}function ye(e){return e.icone===``?ne:e.icone}function be(e){return pe(A,O,e)}function xe(e){let t=J(e);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>u(`faq/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${ye(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
      </button>

      <div class="faq__marcas">
        ${w(A,e)?a`<kk-icon
                class="faq__marca faq__marca--respondida"
                name="check"
                title=${s.faq.respondida}
              ></kk-icon>`:c}
        ${me(O,e)?a`<kk-icon
                class="faq__marca"
                name="notes"
                title=${s.faq.seloPalavras}
              ></kk-icon>`:c}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?s.faq.desfavoritar:s.faq.favoritar}
          @click=${()=>Y(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function X(e,t,n,r,i=!1){return a`
    <kk-details class="faq__secao" name="faq-categorias" ?open=${n}>
      <span
        slot="summary"
        class="faq__categoria ${i?`faq__categoria--favoritos`:``} ${r?`faq__categoria--respondida`:``}"
      >
        ${e}
        ${r?a`<kk-icon name="check" title=${s.faq.categoriaConcluida}></kk-icon>`:c}
      </span>
      <div class="cartoes cartoes--duas">${t.map(xe)}</div>
    </kk-details>
  `}function Se(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function Ce(){if(D.length===0)return a`<p class="vazio">${M?s.app.carregando:s.faq.vazio}</p>`;let e=se(D,F),t=P.busca.trim()===``,n=e=>w(A,e),r=ce(e,n),i=fe(A,D),l=Math.round(i/D.length*100),u=t?D.filter(J):[],d=Se(r);return a`
    <div class="faq">
      <p class="faq__subtitulo">${s.faq.subtitulo}</p>

      <div class="faq__progresso" title=${s.faq.progresso}>
        <kk-progress-bar value=${l}></kk-progress-bar>
        <span class="faq__contagem">${i}/${D.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${s.faq.buscar}
          .value=${P.busca}
          @kk-input=${e=>{P={...P,busca:e.target.value},L(P.busca),o()}}
        ></kk-input>
      </div>

      ${e.length===0?a`<p class="vazio">${s.faq.semResultado}</p>`:a`
            <kk-accordion class="faq__categorias">
              ${u.length===0?c:X(s.faq.favoritos,u,!0,u.every(n),!0)}
              ${r.map((e,t)=>X(e.rotulo,e.perguntas,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function we(e){return a`
    <div class="faq">
      <p class="faq__categoria-aberta">${_(e.categoria)}</p>

      <article class="faq__bloco">
        <h2 class="faq__secao-titulo">${s.faq.cenario}</h2>
        <div class="prosa">${f(e.cenario)}</div>
      </article>

      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${s.faq.impulso}</h2>
        <div class="prosa">${f(e.impulso)}</div>
      </article>

      <p class="faq__dica">${s.faq.preparoDica}</p>

      <kk-button variant="primary" @click=${()=>u(`faq/${e.id}/lente`)}>
        ${s.faq.comecar}
      </kk-button>
    </div>
  `}function Te(e){let t=y(e);return a`
    <div class="faq__lentes">
      ${t.map(e=>a`
          <button
            class="faq__lente ${z===e.id?`faq__lente--ativa`:``}"
            ?disabled=${B}
            @click=${()=>{z=e.id,H=``,U=``,o()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?c:a`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function Ee(e){return _e(e),ae(e)?a`
    <div class="faq">
      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${s.faq.impulso}</h2>
        <div class="prosa">${f(e.impulso)}</div>
        <p class="faq__enunciado">${s.faq.enunciado}</p>

        ${Te(e)}

        ${H===``?c:a`<p class="faq__feedback faq__feedback--${U}">${H}</p>`}

        ${B?c:a`
              <kk-button
                variant="primary"
                ?disabled=${z===null}
                @click=${()=>ve(e)}
              >${s.faq.conferir}</kk-button>
            `}
      </article>

      ${B?Z(e):c}
    </div>
  `:(V||K(e),a`<div class="faq">${Z(e)}</div>`)}function De(e){let t=b(e);return t.length===0?c:a`
    <article class="faq__bloco">
      <h2 class="faq__secao-titulo">${s.faq.exemplos}</h2>
      <ul class="faq__exemplos">
        ${t.map(e=>a`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?c:a`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function Z(e){return a`
    <div class="faq__final">
      ${be(e)?a`<p class="faq__selo-feito"><kk-icon name="notes"></kk-icon>${s.faq.seloFeito}</p>`:c}

      <article class="faq__bloco faq__bloco--sucesso">
        <h2 class="faq__secao-titulo">${s.faq.aResposta}</h2>
        <div class="prosa">${f(e.resposta)}</div>
        ${e.referencia===``?c:a`<p class="faq__base"><kk-icon name="book"></kk-icon>${e.referencia}</p>`}
        ${e.link_jw===``?c:a`
              <p class="faq__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${s.faq.lerArtigo}</a>
              </p>
            `}
      </article>

      ${De(e)}

      ${W.campo({item:e,id:`faq-preparo`,rotulo:s.faq.paraPreparar,placeholder:s.faq.respostaPlaceholder,apoio:e.preparo===``?c:a`<p class="rascunho__apoio">${e.preparo}</p>`})}

      <div class="faq__saidas">
        <kk-button variant="primary" @click=${()=>u(`faq`)}>${s.faq.outras}</kk-button>
        <kk-button @click=${()=>u(`home`)}>${s.faq.inicio}</kk-button>
      </div>
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?ge(t):void 0}function $(e){return e.args[1]===`lente`}var Oe={titulo(e){return Q(e)?.titulo},voltarPara(e){let t=Q(e);return t===void 0?`home`:$(e)?`faq/${t.id}`:`faq`},acoes(e){let t=Q(e);if(t===void 0)return;let n=J(t);return a`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?s.faq.desfavoritar:s.faq.favoritar}
        @click=${()=>Y(t)}
      ></kk-icon-button>
    `},conteudo(e){if(G(),N!==null)return i(N,he);let t=Q(e);return t===void 0?(R=-1,Ce()):$(e)?Ee(t):(R=-1,we(t))}};export{Oe as telaFaq};