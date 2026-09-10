import{A as e,B as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,O as l,P as u,R as d,T as f,ct as p,et as m,it as h,j as g,k as _,ot as v,tt as y,z as b}from"./index-B9OuHCA8.js";import{t as x}from"./unsafe-html-BmBBduHn.js";import{t as S}from"./rascunho-CkVSuZVj.js";var C=[],w=i(),T=new Map,E=!1,D=!1,O=null,k=-1,A=null,j=!1,M=!1,N=``,P=``,F=S({origem:`imite`,idDe:e=>e.id,chaveDe:e=>a(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${h.imite.titulo} — ${e.titulo}`,lembrete:()=>T});function I(){E||D||O!==null||(D=!0,(async()=>{try{[C,T]=await Promise.all([l(),_()]),w=u(),E=!0}catch(e){console.error(`imite: a carga falhou.`,e),O=r(e)}finally{D=!1,m()}})())}function L(){O=null,I(),m()}function R(e){return C.find(t=>t.id===e)}function z(e){k!==e.id&&(k=e.id??-1,A=null,j=!1,M=!1,N=``,P=``,F.abrir(e.id===void 0?``:T.get(e.id)??``))}function B(e){j||A===null||(g(e,A)?(j=!0,P=`ok`,N=b(e,A)||h.imite.acerto,V(e)):(P=`erro`,N=b(e,A)||h.imite.erro),m())}function V(e){M||e.id===void 0||(w=d(w,e.id),M=!0)}function H(t){return e(w,T,t)}function U(e){return p`
    <button class="imite__cartao" @click=${()=>y(`imite/${e.id}`)}>
      <kk-icon class="imite__icone" name=${e.icone===``?`eye-check`:e.icone}></kk-icon>
      <span class="imite__cartao-texto">
        <span class="imite__titulo">${e.titulo}</span>
        ${e.personagens===``?v:p`<small class="imite__personagens">${e.personagens}</small>`}
      </span>
      <span class="imite__selos">
        ${o(w,e)?p`<kk-icon name="check" class="imite__selo imite__selo--ok"></kk-icon>`:v}
        ${H(e)?p`<kk-icon
                name="eye-check"
                class="imite__selo imite__selo--espelho"
                title=${h.imite.seloEspelho}
              ></kk-icon>`:v}
      </span>
    </button>
  `}function W(e,t){return p`
    <kk-details class="imite__secao-tema" name="imite-temas" ?open=${t}>
      <span slot="summary" class="imite__tema ${e.concluido?`imite__tema--ok`:``}">
        ${e.tema}
        ${e.concluido?p`<kk-icon name="check"></kk-icon>`:v}
      </span>
      <div class="imite__cartoes">${e.cartoes.map(U)}</div>
    </kk-details>
  `}function G(){if(C.length===0)return p`<p class="vazio">${D?h.app.carregando:h.imite.vazio}</p>`;let e=C.filter(e=>o(w,e)).length,t=Math.round(e/C.length*100),r=n(C,e=>o(w,e)),i=Math.max(r.findIndex(e=>!e.concluido),0);return p`
    <div class="imite">
      <p class="imite__subtitulo">${h.imite.subtitulo}</p>
      <div class="imite__progresso">
        <kk-progress-bar value=${t}></kk-progress-bar>
        <span class="imite__contagem">${e}/${C.length}</span>
      </div>
      <kk-accordion class="imite__temas">
        ${r.map((e,t)=>W(e,t===i))}
      </kk-accordion>
    </div>
  `}function K(e){return p`
    <div class="imite">
      ${e.personagens===``?v:p`<p class="imite__personagens-cabecalho">${e.personagens}</p>`}

      <article class="imite__bloco">
        <h2 class="imite__secao">${h.imite.cenario}</h2>
        <div class="prosa">${x(e.cenario)}</div>
      </article>

      <article class="imite__bloco imite__bloco--julgamento">
        <h2 class="imite__secao">${h.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
      </article>

      <p class="imite__dica">${h.imite.espelhoDica}</p>

      <kk-button variant="primary" @click=${()=>y(`imite/${e.id}/lente`)}>
        ${h.imite.comecar}
      </kk-button>
    </div>
  `}function q(e){let t=c(e);return p`
    <div class="imite__lentes">
      ${t.map(e=>p`
          <button
            class="imite__lente ${A===e.id?`imite__lente--ativa`:``}"
            ?disabled=${j}
            @click=${()=>{A=e.id,N=``,P=``,m()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?v:p`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function J(e){return z(e),t(e)?p`
    <div class="imite">
      <article class="imite__bloco">
        <h2 class="imite__secao">${h.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
        <p class="imite__pergunta">${h.imite.pergunta}</p>

        ${q(e)}

        ${N===``?v:p`<p class="imite__feedback imite__feedback--${P}">${N}</p>`}

        ${j?v:p`
              <kk-button
                variant="primary"
                ?disabled=${A===null}
                @click=${()=>B(e)}
              >${h.imite.conferir}</kk-button>
            `}
      </article>

      ${j?X(e):v}
    </div>
  `:(M||V(e),p`<div class="imite">${X(e)}</div>`)}function Y(e){let t=s(e);return t.length===0?v:p`
    <article class="imite__bloco">
      <h2 class="imite__secao">${h.imite.exemplos}</h2>
      <ul class="imite__exemplos">
        ${t.map(e=>p`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?v:p`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function X(e){return p`
    <div class="imite__final">
      ${H(e)?p`<p class="imite__espelho-feito"><kk-icon name="eye-check"></kk-icon>${h.imite.seloFeito}</p>`:v}

      <article class="imite__bloco imite__bloco--sucesso">
        <h2 class="imite__secao">${h.imite.lente}</h2>
        <div class="prosa">${x(e.reenquadramento)}</div>
        ${e.referencia===``?v:p`<p class="imite__verso">${e.referencia}</p>`}
        ${e.link_jw===``?v:p`
              <p class="imite__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${h.imite.lerFonte}</a>
              </p>
            `}
      </article>

      ${Y(e)}

      ${F.campo({item:e,id:`imite-espelho`,rotulo:h.imite.espelhoTitulo,placeholder:h.imite.espelhoPlaceholder,apoio:e.espelho===``?v:p`<p class="rascunho__apoio">${e.espelho}</p>`})}

      <div class="imite__saidas">
        <kk-button variant="primary" @click=${()=>y(`imite`)}>
          ${h.imite.outrosCartoes}
        </kk-button>
        <kk-button @click=${()=>y(`home`)}>${h.imite.inicio}</kk-button>
      </div>
    </div>
  `}function Z(e){let t=Number(e.args[0]);return Number.isFinite(t)?R(t):void 0}function Q(e){return e.args[1]===`lente`}var $={titulo(e){return Z(e)?.titulo},voltarPara(e){let t=Z(e);return t===void 0?`home`:Q(e)?`imite/${t.id}`:`imite`},conteudo(e){if(I(),O!==null)return f(O,L);let t=Z(e);return t===void 0?(k=-1,G()):Q(e)?J(t):(k=-1,K(t))}};export{$ as telaImite};