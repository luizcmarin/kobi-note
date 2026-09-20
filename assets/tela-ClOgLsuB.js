import{A as e,C as t,D as n,E as r,M as i,N as a,O as o,P as s,S as c,T as l,b as u,ct as d,dt as f,ht as p,j as m,k as h,pt as g,st as _,w as v,x as y,y as b}from"./index-C99xAqzg.js";import{t as x}from"./unsafe-html-DbOKRXS9.js";import{t as S}from"./rascunho-DRwtnvka.js";var C=[],w=h(),T=new Map,E=!1,D=!1,O=null,k=-1,A=null,j=!1,M=!1,N=``,P=``,F=S({origem:`imite`,idDe:e=>e.id,chaveDe:t=>e(t.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${f.imite.titulo} — ${e.titulo}`,lembrete:()=>T});function I(){E||D||O!==null||(D=!0,(async()=>{try{[C,T]=await Promise.all([c(),t()]),w=o(),E=!0}catch(e){console.error(`imite: a carga falhou.`,e),O=u(e)}finally{D=!1,_()}})())}function L(){O=null,I(),_()}function R(e){return C.find(t=>t.id===e)}function z(e){k!==e.id&&(k=e.id??-1,A=null,j=!1,M=!1,N=``,P=``,F.abrir(e.id===void 0?``:T.get(e.id)??``))}function B(e){j||A===null||(l(e,A)?(j=!0,P=`ok`,N=a(e,A)||f.imite.acerto,V(e)):(P=`erro`,N=a(e,A)||f.imite.erro),_())}function V(e){M||e.id===void 0||(w=i(w,e.id),M=!0)}function H(e){return v(w,T,e)}function U(e){return p`
    <button class="imite__cartao" @click=${()=>d(`imite/${e.id}`)}>
      <kk-icon class="imite__icone" name=${e.icone===``?`eye-check`:e.icone}></kk-icon>
      <span class="imite__cartao-texto">
        <span class="imite__titulo">${e.titulo}</span>
        ${e.personagens===``?g:p`<small class="imite__personagens">${e.personagens}</small>`}
      </span>
      <span class="imite__selos">
        ${m(w,e)?p`<kk-icon name="check" class="imite__selo imite__selo--ok"></kk-icon>`:g}
        ${H(e)?p`<kk-icon
                name="eye-check"
                class="imite__selo imite__selo--espelho"
                title=${f.imite.seloEspelho}
              ></kk-icon>`:g}
      </span>
    </button>
  `}function W(e,t){return p`
    <kk-details class="imite__secao-tema" name="imite-temas" ?open=${t}>
      <span slot="summary" class="imite__tema ${e.concluido?`imite__tema--ok`:``}">
        ${e.tema}
        ${e.concluido?p`<kk-icon name="check"></kk-icon>`:g}
      </span>
      <div class="imite__cartoes">${e.cartoes.map(U)}</div>
    </kk-details>
  `}function G(){if(C.length===0)return p`<p class="vazio">${D?f.app.carregando:f.imite.vazio}</p>`;let e=C.filter(e=>m(w,e)).length,t=Math.round(e/C.length*100),n=y(C,e=>m(w,e)),r=Math.max(n.findIndex(e=>!e.concluido),0);return p`
    <div class="imite">
      <p class="imite__subtitulo">${f.imite.subtitulo}</p>
      <div class="imite__progresso">
        <kk-progress-bar value=${t}></kk-progress-bar>
        <span class="imite__contagem">${e}/${C.length}</span>
      </div>
      <kk-accordion class="imite__temas">
        ${n.map((e,t)=>W(e,t===r))}
      </kk-accordion>
    </div>
  `}function K(e){return p`
    <div class="imite">
      ${e.personagens===``?g:p`<p class="imite__personagens-cabecalho">${e.personagens}</p>`}

      <article class="imite__bloco">
        <h2 class="imite__secao">${f.imite.cenario}</h2>
        <div class="prosa">${x(e.cenario)}</div>
      </article>

      <article class="imite__bloco imite__bloco--julgamento">
        <h2 class="imite__secao">${f.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
      </article>

      <p class="imite__dica">${f.imite.espelhoDica}</p>

      <kk-button variant="primary" @click=${()=>d(`imite/${e.id}/lente`)}>
        ${f.imite.comecar}
      </kk-button>
    </div>
  `}function q(e){let t=n(e);return p`
    <div class="imite__lentes">
      ${t.map(e=>p`
          <button
            class="imite__lente ${A===e.id?`imite__lente--ativa`:``}"
            ?disabled=${j}
            @click=${()=>{A=e.id,N=``,P=``,_()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?g:p`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function J(e){return z(e),s(e)?p`
    <div class="imite">
      <article class="imite__bloco">
        <h2 class="imite__secao">${f.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
        <p class="imite__pergunta">${f.imite.pergunta}</p>

        ${q(e)}

        ${N===``?g:p`<p class="imite__feedback imite__feedback--${P}">${N}</p>`}

        ${j?g:p`
              <kk-button
                variant="primary"
                ?disabled=${A===null}
                @click=${()=>B(e)}
              >${f.imite.conferir}</kk-button>
            `}
      </article>

      ${j?X(e):g}
    </div>
  `:(M||V(e),p`<div class="imite">${X(e)}</div>`)}function Y(e){let t=r(e);return t.length===0?g:p`
    <article class="imite__bloco">
      <h2 class="imite__secao">${f.imite.exemplos}</h2>
      <ul class="imite__exemplos">
        ${t.map(e=>p`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?g:p`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function X(e){return p`
    <div class="imite__final">
      ${H(e)?p`<p class="imite__espelho-feito"><kk-icon name="eye-check"></kk-icon>${f.imite.seloFeito}</p>`:g}

      <article class="imite__bloco imite__bloco--sucesso">
        <h2 class="imite__secao">${f.imite.lente}</h2>
        <div class="prosa">${x(e.reenquadramento)}</div>
        ${e.referencia===``?g:p`<p class="imite__verso">${e.referencia}</p>`}
        ${e.link_jw===``?g:p`
              <p class="imite__fonte">
                <a href=${e.link_jw} target="_blank" rel="noopener">${f.imite.lerFonte}</a>
              </p>
            `}
      </article>

      ${Y(e)}

      ${F.campo({item:e,id:`imite-espelho`,rotulo:f.imite.espelhoTitulo,placeholder:f.imite.espelhoPlaceholder,apoio:e.espelho===``?g:p`<p class="rascunho__apoio">${e.espelho}</p>`})}

      <div class="imite__saidas">
        <kk-button variant="primary" @click=${()=>d(`imite`)}>
          ${f.imite.outrosCartoes}
        </kk-button>
        <kk-button @click=${()=>d(`home`)}>${f.imite.inicio}</kk-button>
      </div>
    </div>
  `}function Z(e){let t=Number(e.args[0]);return Number.isFinite(t)?R(t):void 0}function Q(e){return e.args[1]===`lente`}var $={titulo(e){return Z(e)?.titulo},voltarPara(e){let t=Z(e);return t===void 0?`home`:Q(e)?`imite/${t.id}`:`imite`},conteudo(e){if(I(),O!==null)return b(O,L);let t=Z(e);return t===void 0?(k=-1,G()):Q(e)?J(t):(k=-1,K(t))}};export{$ as telaImite};