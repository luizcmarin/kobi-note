import{A as e,C as t,D as n,E as r,F as i,I as a,M as o,N as s,O as c,P as l,S as u,T as d,at as f,ct as p,ft as m,it as h,j as g,k as _,ut as v,w as y,x as b}from"./index-BBOYxO_i.js";import{t as x}from"./unsafe-html-CwwQ3etq.js";import{t as S}from"./rascunho-l4xW0YM_.js";var C=[],w=g(),T=new Map,E=!1,D=!1,O=null,k=-1,A=null,j=!1,M=!1,N=``,P=``,F=S({origem:`imite`,idDe:e=>e.id,chaveDe:e=>o(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${p.imite.titulo} — ${e.titulo}`,lembrete:()=>T});function I(){E||D||O!==null||(D=!0,(async()=>{try{[C,T]=await Promise.all([y(),d()]),w=e(),E=!0}catch(e){console.error(`imite: a carga falhou.`,e),O=u(e)}finally{D=!1,h()}})())}function L(){O=null,I(),h()}function R(e){return C.find(t=>t.id===e)}function z(e){k!==e.id&&(k=e.id??-1,A=null,j=!1,M=!1,N=``,P=``,F.abrir(e.id===void 0?``:T.get(e.id)??``))}function B(e){j||A===null||(n(e,A)?(j=!0,P=`ok`,N=i(e,A)||p.imite.acerto,V(e)):(P=`erro`,N=i(e,A)||p.imite.erro),h())}function V(e){M||e.id===void 0||(w=l(w,e.id),M=!0)}function H(e){return r(w,T,e)}function U(e){return m`
    <button class="imite__cartao" @click=${()=>f(`imite/${e.id}`)}>
      <kk-icon class="imite__icone" name=${e.icone===``?`eye-check`:e.icone}></kk-icon>
      <span class="imite__cartao-texto">
        <span class="imite__titulo">${e.titulo}</span>
        ${e.personagens===``?v:m`<small class="imite__personagens">${e.personagens}</small>`}
      </span>
      <span class="imite__selos">
        ${s(w,e)?m`<kk-icon name="check" class="imite__selo imite__selo--ok"></kk-icon>`:v}
        ${H(e)?m`<kk-icon
                name="eye-check"
                class="imite__selo imite__selo--espelho"
                title=${p.imite.seloEspelho}
              ></kk-icon>`:v}
      </span>
    </button>
  `}function W(e,t){return m`
    <kk-details class="imite__secao-tema" name="imite-temas" ?open=${t}>
      <span slot="summary" class="imite__tema ${e.concluido?`imite__tema--ok`:``}">
        ${e.tema}
        ${e.concluido?m`<kk-icon name="check"></kk-icon>`:v}
      </span>
      <div class="imite__cartoes">${e.cartoes.map(U)}</div>
    </kk-details>
  `}function G(){if(C.length===0)return m`<p class="vazio">${D?p.app.carregando:p.imite.vazio}</p>`;let e=C.filter(e=>s(w,e)).length,n=Math.round(e/C.length*100),r=t(C,e=>s(w,e)),i=Math.max(r.findIndex(e=>!e.concluido),0);return m`
    <div class="imite">
      <p class="imite__subtitulo">${p.imite.subtitulo}</p>
      <div class="imite__progresso">
        <kk-progress-bar value=${n}></kk-progress-bar>
        <span class="imite__contagem">${e}/${C.length}</span>
      </div>
      <kk-accordion class="imite__temas">
        ${r.map((e,t)=>W(e,t===i))}
      </kk-accordion>
    </div>
  `}function K(e){return m`
    <div class="imite">
      ${e.personagens===``?v:m`<p class="imite__personagens-cabecalho">${e.personagens}</p>`}

      <article class="imite__bloco">
        <h2 class="imite__secao">${p.imite.cenario}</h2>
        <div class="prosa">${x(e.cenario)}</div>
      </article>

      <article class="imite__bloco imite__bloco--julgamento">
        <h2 class="imite__secao">${p.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
      </article>

      <p class="imite__dica">${p.imite.espelhoDica}</p>

      <kk-button variant="primary" @click=${()=>f(`imite/${e.id}/lente`)}>
        ${p.imite.comecar}
      </kk-button>
    </div>
  `}function q(e){let t=_(e);return m`
    <div class="imite__lentes">
      ${t.map(e=>m`
          <button
            class="imite__lente ${A===e.id?`imite__lente--ativa`:``}"
            ?disabled=${j}
            @click=${()=>{A=e.id,N=``,P=``,h()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?v:m`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function J(e){return z(e),a(e)?m`
    <div class="imite">
      <article class="imite__bloco">
        <h2 class="imite__secao">${p.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
        <p class="imite__pergunta">${p.imite.pergunta}</p>

        ${q(e)}

        ${N===``?v:m`<p class="imite__feedback imite__feedback--${P}">${N}</p>`}

        ${j?v:m`
              <kk-button
                variant="primary"
                ?disabled=${A===null}
                @click=${()=>B(e)}
              >${p.imite.conferir}</kk-button>
            `}
      </article>

      ${j?X(e):v}
    </div>
  `:(M||V(e),m`<div class="imite">${X(e)}</div>`)}function Y(e){let t=c(e);return t.length===0?v:m`
    <article class="imite__bloco">
      <h2 class="imite__secao">${p.imite.exemplos}</h2>
      <ul class="imite__exemplos">
        ${t.map(e=>m`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?v:m`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function X(e){return m`
    <div class="imite__final">
      ${H(e)?m`<p class="imite__espelho-feito"><kk-icon name="eye-check"></kk-icon>${p.imite.seloFeito}</p>`:v}

      <article class="imite__bloco imite__bloco--sucesso">
        <h2 class="imite__secao">${p.imite.lente}</h2>
        <div class="prosa">${x(e.reenquadramento)}</div>
        ${e.referencia===``?v:m`<p class="imite__verso">${e.referencia}</p>`}
        ${e.link_jw===``?v:m`
              <p class="imite__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${p.imite.lerFonte}</a>
              </p>
            `}
      </article>

      ${Y(e)}

      ${F.campo({item:e,id:`imite-espelho`,rotulo:p.imite.espelhoTitulo,placeholder:p.imite.espelhoPlaceholder,apoio:e.espelho===``?v:m`<p class="rascunho__apoio">${e.espelho}</p>`})}

      <div class="imite__saidas">
        <kk-button variant="primary" @click=${()=>f(`imite`)}>
          ${p.imite.outrosCartoes}
        </kk-button>
        <kk-button @click=${()=>f(`home`)}>${p.imite.inicio}</kk-button>
      </div>
    </div>
  `}function Z(e){let t=Number(e.args[0]);return Number.isFinite(t)?R(t):void 0}function Q(e){return e.args[1]===`lente`}var $={titulo(e){return Z(e)?.titulo},voltarPara(e){let t=Z(e);return t===void 0?`home`:Q(e)?`imite/${t.id}`:`imite`},conteudo(e){if(I(),O!==null)return b(O,L);let t=Z(e);return t===void 0?(k=-1,G()):Q(e)?J(t):(k=-1,K(t))}};export{$ as telaImite};