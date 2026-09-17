import{a as e,s as t}from"./banco-DQ9IVRRt.js";import{r as n}from"./catalogo-B2Z121mU.js";import{B as r,ft as i,mt as a,ot as o,st as s,ut as c,v as l,y as u}from"./index-CWdQis_V.js";import{alternarFavorito as d,chaveFavorito as ee,lerFavoritos as te}from"./favoritos-DAEWA_Gd.js";import{t as f}from"./unsafe-html-B74_ovmz.js";import{t as ne}from"./rascunho-BrZb2rxr.js";var p=`note_faq_favoritos`,re=`message-question`;async function ie(){return(await t(`faq`).todos()).sort((e,t)=>h(e.categoria)-h(t.categoria)||Number(e.ordem)-Number(t.ordem)||Number(e.id??0)-Number(t.id??0))}var m=Object.keys(n);function h(e){let t=m.indexOf(e);return t===-1?m.length:t}function g(e){return e===``?n.crencas??e:n[e]??e}function _(e){try{let t=JSON.parse(e===``?`[]`:e);return Array.isArray(t)?t:[]}catch{return[]}}function v(e){return e===null?[]:_(e.lentes)}function ae(e){return e===null?[]:_(e.exemplos)}function oe(e,t){return e===null||t===null||t===``?!1:t===e.correta&&v(e).some(e=>e.id===t)}function se(e){return e!==null&&v(e).some(t=>t.id===e.correta)}function y(e,t){return(v(e).find(e=>e.id===t)?.resposta??``).trim()}var ce={busca:``};function le(e,t){return t===null?e:e.filter(e=>t.has(Number(e.id)))}function ue(e,t){let n=new Map;for(let t of e){let e=n.get(t.categoria);e===void 0?n.set(t.categoria,[t]):e.push(t)}return[...n].map(([e,n])=>({categoria:e,rotulo:g(e),perguntas:n,concluida:n.every(t)}))}var b=`note_faq_progresso`;function x(){return{respondidos:{}}}function de(){try{let e=JSON.parse(localStorage.getItem(b)??`null`);return{...x(),...e}}catch{return x()}}function S(e){localStorage.setItem(b,JSON.stringify(e))}function fe(e,t){let n=e.respondidos[String(t)],r={...e,respondidos:{...e.respondidos,[String(t)]:{tentativas:(n?.tentativas??0)+1,respondidoEm:Date.now()}}};return S(r),r}function C(e,t){return t?.id!==void 0&&e.respondidos[String(t.id)]!==void 0}function w(e,t){return t.filter(t=>C(e,t)).length}function T(e){return`faq:${e}`}async function E(){let e=new Map;for(let t of await r()){if(t.origem!==`faq`||t.ref_chave===null)continue;let n=Number(t.ref_chave.split(`:`)[1]);Number.isFinite(n)&&e.set(n,t.conteudo)}return e}function pe(e,t,n){return n?.id!==void 0&&C(e,n)&&(t.get(n.id)??``).trim()!==``}function me(e,t){return t?.id!==void 0&&(e.get(t.id)??``).trim()!==``}var D=[],O=new Map,k=new Set,A=x(),j=!1,M=!1,N=null,P=ce,F=null,I=``;function L(t){I=t,e(`not_faq`,t).then(e=>{I===t&&(F=e===null?null:new Set(e),o())})}var R=-1,z=null,B=!1,V=!1,H=``,U=``,W=ne({origem:`faq`,idDe:e=>e.id,chaveDe:e=>T(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${c.faq.titulo} — ${e.titulo}`,lembrete:()=>O});function G(){j||M||N!==null||(M=!0,(async()=>{try{[D,O]=await Promise.all([ie(),E()]),k=te(p),A=de(),j=!0}catch(e){console.error(`faq: a carga falhou.`,e),N=u(e)}finally{M=!1,o()}})())}function he(){N=null,G(),o()}function ge(e){return D.find(t=>t.id===e)}function _e(e){R!==e.id&&(R=e.id??-1,z=null,B=!1,V=!1,H=``,U=``,W.abrir(e.id===void 0?``:O.get(e.id)??``))}function ve(e){B||z===null||(oe(e,z)?(B=!0,U=`ok`,H=y(e,z)||c.faq.acerto,K(e)):(U=`erro`,H=y(e,z)||c.faq.erro),o())}function K(e){V||e.id===void 0||(A=fe(A,e.id),V=!0)}function q(e){return ee(`curado`,e.id)}function J(e){return k.has(q(e))}function Y(e){k=d(p,k,q(e)),o()}function ye(e){return e.icone===``?re:e.icone}function be(e){return pe(A,O,e)}function xe(e){let t=J(e);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button class="cartao__alvo" @click=${()=>s(`faq/${e.id??``}`)}>
        <span class="cartao__topo">
          <kk-icon class="cartao__icone" name=${ye(e)}></kk-icon>
          <span class="cartao__titulo">${e.titulo}</span>
        </span>
      </button>

      <div class="faq__marcas">
        ${C(A,e)?a`<kk-icon
                class="faq__marca faq__marca--respondida"
                name="check"
                title=${c.faq.respondida}
              ></kk-icon>`:i}
        ${me(O,e)?a`<kk-icon
                class="faq__marca"
                name="notes"
                title=${c.faq.seloPalavras}
              ></kk-icon>`:i}
        <kk-icon-button
          class="cartao__estrela"
          name="star"
          variant=${t?`filled`:`outline`}
          label=${t?c.faq.desfavoritar:c.faq.favoritar}
          @click=${()=>Y(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function X(e,t,n,r,o=!1){return a`
    <kk-details class="faq__secao" name="faq-categorias" ?open=${n}>
      <span
        slot="summary"
        class="faq__categoria ${o?`faq__categoria--favoritos`:``} ${r?`faq__categoria--respondida`:``}"
      >
        ${e}
        ${r?a`<kk-icon name="check" title=${c.faq.categoriaConcluida}></kk-icon>`:i}
      </span>
      <div class="cartoes cartoes--duas">${t.map(xe)}</div>
    </kk-details>
  `}function Se(e){return Math.max(e.findIndex(e=>!e.concluida),0)}function Ce(){if(D.length===0)return a`<p class="vazio">${M?c.app.carregando:c.faq.vazio}</p>`;let e=le(D,F),t=P.busca.trim()===``,n=e=>C(A,e),r=ue(e,n),s=w(A,D),l=Math.round(s/D.length*100),u=t?D.filter(J):[],d=Se(r);return a`
    <div class="faq">
      <p class="faq__subtitulo">${c.faq.subtitulo}</p>

      <div class="faq__progresso" title=${c.faq.progresso}>
        <kk-progress-bar value=${l}></kk-progress-bar>
        <span class="faq__contagem">${s}/${D.length}</span>
      </div>

      <div class="filtros">
        <kk-input
          class="filtros__busca"
          type="search"
          clearable
          placeholder=${c.faq.buscar}
          .value=${P.busca}
          @kk-input=${e=>{P={...P,busca:e.target.value},L(P.busca),o()}}
        ></kk-input>
      </div>

      ${e.length===0?a`<p class="vazio">${c.faq.semResultado}</p>`:a`
            <kk-accordion class="faq__categorias">
              ${u.length===0?i:X(c.faq.favoritos,u,!0,u.every(n),!0)}
              ${r.map((e,t)=>X(e.rotulo,e.perguntas,u.length===0&&t===d,e.concluida))}
            </kk-accordion>
          `}
    </div>
  `}function we(e){return a`
    <div class="faq">
      <p class="faq__categoria-aberta">${g(e.categoria)}</p>

      <article class="faq__bloco">
        <h2 class="faq__secao-titulo">${c.faq.cenario}</h2>
        <div class="prosa">${f(e.cenario)}</div>
      </article>

      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${c.faq.impulso}</h2>
        <div class="prosa">${f(e.impulso)}</div>
      </article>

      <p class="faq__dica">${c.faq.preparoDica}</p>

      <kk-button variant="primary" @click=${()=>s(`faq/${e.id}/lente`)}>
        ${c.faq.comecar}
      </kk-button>
    </div>
  `}function Te(e){let t=v(e);return a`
    <div class="faq__lentes">
      ${t.map(e=>a`
          <button
            class="faq__lente ${z===e.id?`faq__lente--ativa`:``}"
            ?disabled=${B}
            @click=${()=>{z=e.id,H=``,U=``,o()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?i:a`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function Ee(e){return _e(e),se(e)?a`
    <div class="faq">
      <article class="faq__bloco faq__bloco--impulso">
        <h2 class="faq__secao-titulo">${c.faq.impulso}</h2>
        <div class="prosa">${f(e.impulso)}</div>
        <p class="faq__enunciado">${c.faq.enunciado}</p>

        ${Te(e)}

        ${H===``?i:a`<p class="faq__feedback faq__feedback--${U}">${H}</p>`}

        ${B?i:a`
              <kk-button
                variant="primary"
                ?disabled=${z===null}
                @click=${()=>ve(e)}
              >${c.faq.conferir}</kk-button>
            `}
      </article>

      ${B?Z(e):i}
    </div>
  `:(V||K(e),a`<div class="faq">${Z(e)}</div>`)}function De(e){let t=ae(e);return t.length===0?i:a`
    <article class="faq__bloco">
      <h2 class="faq__secao-titulo">${c.faq.exemplos}</h2>
      <ul class="faq__exemplos">
        ${t.map(e=>a`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?i:a`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function Z(e){return a`
    <div class="faq__final">
      ${be(e)?a`<p class="faq__selo-feito"><kk-icon name="notes"></kk-icon>${c.faq.seloFeito}</p>`:i}

      <article class="faq__bloco faq__bloco--sucesso">
        <h2 class="faq__secao-titulo">${c.faq.aResposta}</h2>
        <div class="prosa">${f(e.resposta)}</div>
        ${e.referencia===``?i:a`<p class="faq__base"><kk-icon name="book"></kk-icon>${e.referencia}</p>`}
        ${e.link_jw===``?i:a`
              <p class="faq__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${c.faq.lerArtigo}</a>
              </p>
            `}
      </article>

      ${De(e)}

      ${W.campo({item:e,id:`faq-preparo`,rotulo:c.faq.paraPreparar,placeholder:c.faq.respostaPlaceholder,apoio:e.preparo===``?i:a`<p class="rascunho__apoio">${e.preparo}</p>`})}

      <div class="faq__saidas">
        <kk-button variant="primary" @click=${()=>s(`faq`)}>${c.faq.outras}</kk-button>
        <kk-button @click=${()=>s(`home`)}>${c.faq.inicio}</kk-button>
      </div>
    </div>
  `}function Q(e){let t=Number(e.args[0]);return Number.isFinite(t)?ge(t):void 0}function $(e){return e.args[1]===`lente`}var Oe={titulo(e){return Q(e)?.titulo},voltarPara(e){let t=Q(e);return t===void 0?`home`:$(e)?`faq/${t.id}`:`faq`},acoes(e){let t=Q(e);if(t===void 0)return;let n=J(t);return a`
      <kk-icon-button
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?c.faq.desfavoritar:c.faq.favoritar}
        @click=${()=>Y(t)}
      ></kk-icon-button>
    `},conteudo(e){if(G(),N!==null)return l(N,he);let t=Q(e);return t===void 0?(R=-1,Ce()):$(e)?Ee(t):(R=-1,we(t))}};export{Oe as telaFaq};