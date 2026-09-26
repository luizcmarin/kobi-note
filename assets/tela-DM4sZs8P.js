import{A as e,C as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,O as l,P as u,R as d,T as f,_t as p,bt as m,ft as h,j as g,k as _,mt as v,w as y,xt as b,y as x}from"./index-tEHw1VqD.js";import{t as S}from"./rascunho-C2U3kt15.js";var C=[],w=c(),T=new Map,E=!1,D=!1,O=null,k=-1,A=null,j=!1,M=!1,N=``,P=``,F=S({origem:`imite`,idDe:e=>e.id,chaveDe:e=>u(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${p.imite.titulo} — ${e.titulo}`,lembrete:()=>T});function I(){E||D||O!==null||(D=!0,(async()=>{try{[C,T]=await Promise.all([r(),n()]),w=s(),E=!0}catch(e){console.error(`imite: a carga falhou.`,e),O=y(e)}finally{D=!1,h()}})())}function L(){O=null,I(),h()}function R(e){return C.find(t=>t.id===e)}function z(e){k!==e.id&&(k=e.id??-1,A=null,j=!1,M=!1,N=``,P=``,F.abrir(e.id===void 0?``:T.get(e.id)??``))}function B(e){j||A===null||(_(e,A)?(j=!0,P=`ok`,N=o(e,A)||p.imite.acerto,V(e)):(P=`erro`,N=o(e,A)||p.imite.erro),h())}function V(e){M||e.id===void 0||(w=a(w,e.id),M=!0)}function H(e){return l(w,T,e)}function U(e){return b`
    <button class="imite__cartao" @click=${()=>v(`imite/${e.id}`)}>
      <kk-icon class="imite__icone" name=${e.icone===``?`eye-check`:e.icone}></kk-icon>
      <span class="imite__cartao-texto">
        <span class="imite__titulo">${e.titulo}</span>
        ${e.personagens===``?m:b`<small class="imite__personagens">${e.personagens}</small>`}
      </span>
      <span class="imite__selos">
        ${i(w,e)?b`<kk-icon name="check" class="imite__selo imite__selo--ok"></kk-icon>`:m}
        ${H(e)?b`<kk-icon
                name="eye-check"
                class="imite__selo imite__selo--espelho"
                title=${p.imite.seloEspelho}
              ></kk-icon>`:m}
      </span>
    </button>
  `}function W(e,t){return b`
    <kk-details class="imite__secao-tema" name="imite-temas" ?open=${t}>
      <span slot="summary" class="imite__tema ${e.concluido?`imite__tema--ok`:``}">
        ${e.tema}
        ${e.concluido?b`<kk-icon name="check"></kk-icon>`:m}
      </span>
      <div class="imite__cartoes">${e.cartoes.map(U)}</div>
    </kk-details>
  `}function G(){if(C.length===0)return b`<p class="vazio">${D?p.app.carregando:p.imite.vazio}</p>`;let e=C.filter(e=>i(w,e)).length,t=Math.round(e/C.length*100),n=f(C,e=>i(w,e)),r=Math.max(n.findIndex(e=>!e.concluido),0);return b`
    <div class="imite">
      <p class="imite__subtitulo">${p.imite.subtitulo}</p>
      <div class="imite__progresso">
        <kk-progress-bar value=${t}></kk-progress-bar>
        <span class="imite__contagem">${e}/${C.length}</span>
      </div>
      <kk-accordion class="imite__temas">
        ${n.map((e,t)=>W(e,t===r))}
      </kk-accordion>
    </div>
  `}function K(e){return b`
    <div class="imite">
      ${e.personagens===``?m:b`<p class="imite__personagens-cabecalho">${e.personagens}</p>`}

      <article class="imite__bloco">
        <h2 class="imite__secao">${p.imite.cenario}</h2>
        <div class="prosa">${x(e.cenario)}</div>
      </article>

      <article class="imite__bloco imite__bloco--julgamento">
        <h2 class="imite__secao">${p.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
      </article>

      <p class="imite__dica">${p.imite.espelhoDica}</p>

      <kk-button variant="primary" @click=${()=>v(`imite/${e.id}/lente`)}>
        ${p.imite.comecar}
      </kk-button>
    </div>
  `}function q(e){let t=g(e);return b`
    <div class="imite__lentes">
      ${t.map(e=>b`
          <button
            class="imite__lente ${A===e.id?`imite__lente--ativa`:``}"
            ?disabled=${j}
            @click=${()=>{A=e.id,N=``,P=``,h()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?m:b`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function J(e){return z(e),d(e)?b`
    <div class="imite">
      <article class="imite__bloco">
        <h2 class="imite__secao">${p.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
        <p class="imite__pergunta">${p.imite.pergunta}</p>

        ${q(e)}

        ${N===``?m:b`<p class="imite__feedback imite__feedback--${P}">${N}</p>`}

        ${j?m:b`
              <kk-button
                variant="primary"
                ?disabled=${A===null}
                @click=${()=>B(e)}
              >${p.imite.conferir}</kk-button>
            `}
      </article>

      ${j?X(e):m}
    </div>
  `:(M||V(e),b`<div class="imite">${X(e)}</div>`)}function Y(t){let n=e(t);return n.length===0?m:b`
    <article class="imite__bloco">
      <h2 class="imite__secao">${p.imite.exemplos}</h2>
      <ul class="imite__exemplos">
        ${n.map(e=>b`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?m:b`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function X(e){return b`
    <div class="imite__final">
      ${H(e)?b`<p class="imite__espelho-feito"><kk-icon name="eye-check"></kk-icon>${p.imite.seloFeito}</p>`:m}

      <article class="imite__bloco imite__bloco--sucesso">
        <h2 class="imite__secao">${p.imite.lente}</h2>
        <div class="prosa">${x(e.reenquadramento)}</div>
        ${e.referencia===``?m:b`<p class="imite__verso">${e.referencia}</p>`}
        ${e.link_jw===``?m:b`
              <p class="imite__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${p.imite.lerFonte}</a>
              </p>
            `}
      </article>

      ${Y(e)}

      ${F.campo({item:e,id:`imite-espelho`,rotulo:p.imite.espelhoTitulo,placeholder:p.imite.espelhoPlaceholder,apoio:e.espelho===``?m:b`<p class="rascunho__apoio">${e.espelho}</p>`})}

      <div class="imite__saidas">
        <kk-button variant="primary" @click=${()=>v(`imite`)}>
          ${p.imite.outrosCartoes}
        </kk-button>
        <kk-button @click=${()=>v(`home`)}>${p.imite.inicio}</kk-button>
      </div>
    </div>
  `}function Z(e){let t=Number(e.args[0]);return Number.isFinite(t)?R(t):void 0}function Q(e){return e.args[1]===`lente`}var $={titulo(e){return Z(e)?.titulo},voltarPara(e){let t=Z(e);return t===void 0?`home`:Q(e)?`imite/${t.id}`:`imite`},conteudo(e){if(I(),O!==null)return t(O,L);let n=Z(e);return n===void 0?(k=-1,G()):Q(e)?J(n):(k=-1,K(n))}};export{$ as telaImite};