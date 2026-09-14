import{A as e,C as t,D as n,E as r,M as i,N as a,O as o,S as s,T as c,at as l,b as u,j as d,k as f,lt as p,nt as m,st as h,tt as g,v as _,w as v,x as y,y as b}from"./index-D0n52eAb.js";import{t as x}from"./unsafe-html-C_000-wi.js";import{t as S}from"./rascunho-nRtUC73T.js";var C=[],w=o(),T=new Map,E=!1,D=!1,O=null,k=-1,A=null,j=!1,M=!1,N=``,P=``,F=S({origem:`imite`,idDe:e=>e.id,chaveDe:e=>f(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${l.imite.titulo} — ${e.titulo}`,lembrete:()=>T});function I(){E||D||O!==null||(D=!0,(async()=>{try{[C,T]=await Promise.all([y(),s()]),w=n(),E=!0}catch(e){console.error(`imite: a carga falhou.`,e),O=b(e)}finally{D=!1,g()}})())}function L(){O=null,I(),g()}function R(e){return C.find(t=>t.id===e)}function z(e){k!==e.id&&(k=e.id??-1,A=null,j=!1,M=!1,N=``,P=``,F.abrir(e.id===void 0?``:T.get(e.id)??``))}function B(e){j||A===null||(v(e,A)?(j=!0,P=`ok`,N=i(e,A)||l.imite.acerto,V(e)):(P=`erro`,N=i(e,A)||l.imite.erro),g())}function V(e){M||e.id===void 0||(w=d(w,e.id),M=!0)}function H(e){return t(w,T,e)}function U(t){return p`
    <button class="imite__cartao" @click=${()=>m(`imite/${t.id}`)}>
      <kk-icon class="imite__icone" name=${t.icone===``?`eye-check`:t.icone}></kk-icon>
      <span class="imite__cartao-texto">
        <span class="imite__titulo">${t.titulo}</span>
        ${t.personagens===``?h:p`<small class="imite__personagens">${t.personagens}</small>`}
      </span>
      <span class="imite__selos">
        ${e(w,t)?p`<kk-icon name="check" class="imite__selo imite__selo--ok"></kk-icon>`:h}
        ${H(t)?p`<kk-icon
                name="eye-check"
                class="imite__selo imite__selo--espelho"
                title=${l.imite.seloEspelho}
              ></kk-icon>`:h}
      </span>
    </button>
  `}function W(e,t){return p`
    <kk-details class="imite__secao-tema" name="imite-temas" ?open=${t}>
      <span slot="summary" class="imite__tema ${e.concluido?`imite__tema--ok`:``}">
        ${e.tema}
        ${e.concluido?p`<kk-icon name="check"></kk-icon>`:h}
      </span>
      <div class="imite__cartoes">${e.cartoes.map(U)}</div>
    </kk-details>
  `}function G(){if(C.length===0)return p`<p class="vazio">${D?l.app.carregando:l.imite.vazio}</p>`;let t=C.filter(t=>e(w,t)).length,n=Math.round(t/C.length*100),r=u(C,t=>e(w,t)),i=Math.max(r.findIndex(e=>!e.concluido),0);return p`
    <div class="imite">
      <p class="imite__subtitulo">${l.imite.subtitulo}</p>
      <div class="imite__progresso">
        <kk-progress-bar value=${n}></kk-progress-bar>
        <span class="imite__contagem">${t}/${C.length}</span>
      </div>
      <kk-accordion class="imite__temas">
        ${r.map((e,t)=>W(e,t===i))}
      </kk-accordion>
    </div>
  `}function K(e){return p`
    <div class="imite">
      ${e.personagens===``?h:p`<p class="imite__personagens-cabecalho">${e.personagens}</p>`}

      <article class="imite__bloco">
        <h2 class="imite__secao">${l.imite.cenario}</h2>
        <div class="prosa">${x(e.cenario)}</div>
      </article>

      <article class="imite__bloco imite__bloco--julgamento">
        <h2 class="imite__secao">${l.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
      </article>

      <p class="imite__dica">${l.imite.espelhoDica}</p>

      <kk-button variant="primary" @click=${()=>m(`imite/${e.id}/lente`)}>
        ${l.imite.comecar}
      </kk-button>
    </div>
  `}function q(e){let t=r(e);return p`
    <div class="imite__lentes">
      ${t.map(e=>p`
          <button
            class="imite__lente ${A===e.id?`imite__lente--ativa`:``}"
            ?disabled=${j}
            @click=${()=>{A=e.id,N=``,P=``,g()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?h:p`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function J(e){return z(e),a(e)?p`
    <div class="imite">
      <article class="imite__bloco">
        <h2 class="imite__secao">${l.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
        <p class="imite__pergunta">${l.imite.pergunta}</p>

        ${q(e)}

        ${N===``?h:p`<p class="imite__feedback imite__feedback--${P}">${N}</p>`}

        ${j?h:p`
              <kk-button
                variant="primary"
                ?disabled=${A===null}
                @click=${()=>B(e)}
              >${l.imite.conferir}</kk-button>
            `}
      </article>

      ${j?X(e):h}
    </div>
  `:(M||V(e),p`<div class="imite">${X(e)}</div>`)}function Y(e){let t=c(e);return t.length===0?h:p`
    <article class="imite__bloco">
      <h2 class="imite__secao">${l.imite.exemplos}</h2>
      <ul class="imite__exemplos">
        ${t.map(e=>p`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?h:p`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function X(e){return p`
    <div class="imite__final">
      ${H(e)?p`<p class="imite__espelho-feito"><kk-icon name="eye-check"></kk-icon>${l.imite.seloFeito}</p>`:h}

      <article class="imite__bloco imite__bloco--sucesso">
        <h2 class="imite__secao">${l.imite.lente}</h2>
        <div class="prosa">${x(e.reenquadramento)}</div>
        ${e.referencia===``?h:p`<p class="imite__verso">${e.referencia}</p>`}
        ${e.link_jw===``?h:p`
              <p class="imite__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${l.imite.lerFonte}</a>
              </p>
            `}
      </article>

      ${Y(e)}

      ${F.campo({item:e,id:`imite-espelho`,rotulo:l.imite.espelhoTitulo,placeholder:l.imite.espelhoPlaceholder,apoio:e.espelho===``?h:p`<p class="rascunho__apoio">${e.espelho}</p>`})}

      <div class="imite__saidas">
        <kk-button variant="primary" @click=${()=>m(`imite`)}>
          ${l.imite.outrosCartoes}
        </kk-button>
        <kk-button @click=${()=>m(`home`)}>${l.imite.inicio}</kk-button>
      </div>
    </div>
  `}function Z(e){let t=Number(e.args[0]);return Number.isFinite(t)?R(t):void 0}function Q(e){return e.args[1]===`lente`}var $={titulo(e){return Z(e)?.titulo},voltarPara(e){let t=Z(e);return t===void 0?`home`:Q(e)?`imite/${t.id}`:`imite`},conteudo(e){if(I(),O!==null)return _(O,L);let t=Z(e);return t===void 0?(k=-1,G()):Q(e)?J(t):(k=-1,K(t))}};export{$ as telaImite};