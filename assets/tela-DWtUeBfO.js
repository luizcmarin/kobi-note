import{A as e,D as t,E as n,F as r,I as i,L as a,M as o,N as s,O as c,P as l,R as u,T as d,_t as f,b as p,bt as m,ft as h,h as g,j as _,k as v,mt as y,xt as b,y as x}from"./index-BNLfwB87.js";import{t as S}from"./rascunho-CeEzT1uK.js";var C=[],w=s(),T=new Map,E=!1,D=!1,O=null,k=-1,A=null,j=!1,M=!1,N=``,P=``,F=S({origem:`imite`,idDe:e=>e.id,chaveDe:e=>l(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${f.imite.titulo} — ${e.titulo}`,lembrete:()=>T});function I(){E||D||O!==null||(D=!0,(async()=>{try{[C,T]=await Promise.all([n(),t()]),w=o(),E=!0}catch(e){console.error(`imite: a carga falhou.`,e),O=p(e)}finally{D=!1,h()}})())}function L(){O=null,I(),h()}function R(e){return C.find(t=>t.id===e)}function z(e){k!==e.id&&(k=e.id??-1,A=null,j=!1,M=!1,N=``,P=``,F.abrir(e.id===void 0?``:T.get(e.id)??``))}function B(e){j||A===null||(v(e,A)?(j=!0,P=`ok`,N=a(e,A)||f.imite.acerto,V(e)):(P=`erro`,N=a(e,A)||f.imite.erro),h())}function V(e){M||e.id===void 0||(w=i(w,e.id),M=!0)}function H(e){return c(w,T,e)}function U(e){return b`
    <button class="imite__cartao" @click=${()=>y(`imite/${e.id}`)}>
      <kk-icon class="imite__icone" name=${e.icone===``?`eye-check`:e.icone}></kk-icon>
      <span class="imite__cartao-texto">
        <span class="imite__titulo">${e.titulo}</span>
        ${e.personagens===``?m:b`<small class="imite__personagens">${e.personagens}</small>`}
      </span>
      <span class="imite__selos">
        ${r(w,e)?b`<kk-icon name="check" class="imite__selo imite__selo--ok"></kk-icon>`:m}
        ${H(e)?b`<kk-icon
                name="eye-check"
                class="imite__selo imite__selo--espelho"
                title=${f.imite.seloEspelho}
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
  `}function G(){if(C.length===0)return b`<p class="vazio">${D?f.app.carregando:f.imite.vazio}</p>`;let e=C.filter(e=>r(w,e)).length,t=Math.round(e/C.length*100),n=d(C,e=>r(w,e)),i=Math.max(n.findIndex(e=>!e.concluido),0);return b`
    <div class="imite">
      <p class="imite__subtitulo">${f.imite.subtitulo}</p>
      <div class="imite__progresso">
        <kk-progress-bar value=${t}></kk-progress-bar>
        <span class="imite__contagem">${e}/${C.length}</span>
      </div>
      <kk-accordion class="imite__temas">
        ${n.map((e,t)=>W(e,t===i))}
      </kk-accordion>
    </div>
  `}function K(e){return b`
    <div class="imite">
      ${e.personagens===``?m:b`<p class="imite__personagens-cabecalho">${e.personagens}</p>`}

      <article class="imite__bloco">
        <h2 class="imite__secao">${f.imite.cenario}</h2>
        <div class="prosa">${g(e.cenario)}</div>
      </article>

      <article class="imite__bloco imite__bloco--julgamento">
        <h2 class="imite__secao">${f.imite.julgamento}</h2>
        <div class="prosa">${g(e.julgamento)}</div>
      </article>

      <p class="imite__dica">${f.imite.espelhoDica}</p>

      <kk-button variant="primary" @click=${()=>y(`imite/${e.id}/lente`)}>
        ${f.imite.comecar}
      </kk-button>
    </div>
  `}function q(e){let t=_(e);return b`
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
  `}function J(e){return z(e),u(e)?b`
    <div class="imite">
      <article class="imite__bloco">
        <h2 class="imite__secao">${f.imite.julgamento}</h2>
        <div class="prosa">${g(e.julgamento)}</div>
        <p class="imite__pergunta">${f.imite.pergunta}</p>

        ${q(e)}

        ${N===``?m:b`<p class="imite__feedback imite__feedback--${P}">${N}</p>`}

        ${j?m:b`
              <kk-button
                variant="primary"
                ?disabled=${A===null}
                @click=${()=>B(e)}
              >${f.imite.conferir}</kk-button>
            `}
      </article>

      ${j?X(e):m}
    </div>
  `:(M||V(e),b`<div class="imite">${X(e)}</div>`)}function Y(t){let n=e(t);return n.length===0?m:b`
    <article class="imite__bloco">
      <h2 class="imite__secao">${f.imite.exemplos}</h2>
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
      ${H(e)?b`<p class="imite__espelho-feito"><kk-icon name="eye-check"></kk-icon>${f.imite.seloFeito}</p>`:m}

      <article class="imite__bloco imite__bloco--sucesso">
        <h2 class="imite__secao">${f.imite.lente}</h2>
        <div class="prosa">${g(e.reenquadramento)}</div>
        ${e.referencia===``?m:b`<p class="imite__verso">${e.referencia}</p>`}
        ${e.link_jw===``?m:b`
              <p class="imite__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${f.imite.lerFonte}</a>
              </p>
            `}
      </article>

      ${Y(e)}

      ${F.campo({item:e,id:`imite-espelho`,rotulo:f.imite.espelhoTitulo,placeholder:f.imite.espelhoPlaceholder,apoio:e.espelho===``?m:b`<p class="rascunho__apoio">${e.espelho}</p>`})}

      <div class="imite__saidas">
        <kk-button variant="primary" @click=${()=>y(`imite`)}>
          ${f.imite.outrosCartoes}
        </kk-button>
        <kk-button @click=${()=>y(`home`)}>${f.imite.inicio}</kk-button>
      </div>
    </div>
  `}function Z(e){let t=Number(e.args[0]);return Number.isFinite(t)?R(t):void 0}function Q(e){return e.args[1]===`lente`}var $={titulo(e){return Z(e)?.titulo},voltarPara(e){let t=Z(e);return t===void 0?`home`:Q(e)?`imite/${t.id}`:`imite`},conteudo(e){if(I(),O!==null)return x(O,L);let t=Z(e);return t===void 0?(k=-1,G()):Q(e)?J(t):(k=-1,K(t))}};export{$ as telaImite};