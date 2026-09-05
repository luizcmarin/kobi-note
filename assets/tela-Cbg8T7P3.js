import{$ as e,A as t,D as n,E as r,F as i,I as a,L as o,M as s,N as c,O as l,P as u,Q as d,T as f,U as p,at as m,j as h,k as g,nt as _,q as v,rt as y,w as b}from"./index-BIyMCMf-.js";import{t as x}from"./unsafe-html-CBce81BY.js";var S=[],C=s(),w=new Map,T=!1,E=!1,D=-1,O=null,k=!1,A=!1,j=``,M=``,N=``;function P(){T||E||(E=!0,(async()=>{try{[S,w]=await Promise.all([f(),r()]),C=h(),T=!0}finally{E=!1,d()}})())}function F(e){return S.find(t=>t.id===e)}function I(e){D!==e.id&&(D=e.id??-1,O=null,k=!1,A=!1,j=``,M=``,N=e.id===void 0?``:w.get(e.id)??``)}function L(e){k||O===null||(l(e,O)?(k=!0,M=`ok`,j=a(e,O)||_.imite.acerto,R(e)):(M=`erro`,j=a(e,O)||_.imite.erro),d())}function R(e){A||e.id===void 0||(C=i(C,e.id),A=!0)}var z;function B(e){clearTimeout(z),z=setTimeout(()=>{(async()=>{if(e.id===void 0)return;let t=N.trim();t===``?(await v(c(e.id)),w.delete(e.id)):(await p({origem:`imite`,referencia:e.referencia,titulo:`${_.imite.titulo} — ${e.titulo}`,conteudo:t,ref_chave:c(e.id)}),w.set(e.id,t)),d()})()},500)}function V(e){return n(C,w,e)}function H(t){return m`
    <button class="imite__cartao" @click=${()=>e(`imite/${t.id}`)}>
      <kk-icon class="imite__icone" name=${t.icone===``?`eye-check`:t.icone}></kk-icon>
      <span class="imite__cartao-texto">
        <span class="imite__titulo">${t.titulo}</span>
        ${t.personagens===``?y:m`<small class="imite__personagens">${t.personagens}</small>`}
      </span>
      <span class="imite__selos">
        ${u(C,t)?m`<kk-icon name="check" class="imite__selo imite__selo--ok"></kk-icon>`:y}
        ${V(t)?m`<kk-icon
                name="eye-check"
                class="imite__selo imite__selo--espelho"
                title=${_.imite.seloEspelho}
              ></kk-icon>`:y}
      </span>
    </button>
  `}function U(e,t){return m`
    <kk-details class="imite__secao-tema" name="imite-temas" ?open=${t}>
      <span slot="summary" class="imite__tema ${e.concluido?`imite__tema--ok`:``}">
        ${e.tema}
        ${e.concluido?m`<kk-icon name="check"></kk-icon>`:y}
      </span>
      <div class="imite__cartoes">${e.cartoes.map(H)}</div>
    </kk-details>
  `}function W(){if(S.length===0)return m`<p class="vazio">${E?_.app.carregando:_.imite.vazio}</p>`;let e=S.filter(e=>u(C,e)).length,t=Math.round(e/S.length*100),n=b(S,e=>u(C,e)),r=Math.max(n.findIndex(e=>!e.concluido),0);return m`
    <div class="imite">
      <p class="imite__subtitulo">${_.imite.subtitulo}</p>
      <div class="imite__progresso">
        <kk-progress-bar value=${t}></kk-progress-bar>
        <span class="imite__contagem">${e}/${S.length}</span>
      </div>
      <kk-accordion class="imite__temas">
        ${n.map((e,t)=>U(e,t===r))}
      </kk-accordion>
    </div>
  `}function G(t){return m`
    <div class="imite">
      ${t.personagens===``?y:m`<p class="imite__personagens-cabecalho">${t.personagens}</p>`}

      <article class="imite__bloco">
        <h2 class="imite__secao">${_.imite.cenario}</h2>
        <div class="prosa">${x(t.cenario)}</div>
      </article>

      <article class="imite__bloco imite__bloco--julgamento">
        <h2 class="imite__secao">${_.imite.julgamento}</h2>
        <div class="prosa">${x(t.julgamento)}</div>
      </article>

      <p class="imite__dica">${_.imite.espelhoDica}</p>

      <kk-button variant="primary" @click=${()=>e(`imite/${t.id}/lente`)}>
        ${_.imite.comecar}
      </kk-button>
    </div>
  `}function K(e){let n=t(e);return m`
    <div class="imite__lentes">
      ${n.map(e=>m`
          <button
            class="imite__lente ${O===e.id?`imite__lente--ativa`:``}"
            ?disabled=${k}
            @click=${()=>{O=e.id,j=``,M=``,d()}}
          >
            <strong>${e.rotulo}</strong>
            ${e.nota===void 0||e.nota===``?y:m`<small>${e.nota}</small>`}
          </button>
        `)}
    </div>
  `}function q(e){return I(e),o(e)?m`
    <div class="imite">
      <article class="imite__bloco">
        <h2 class="imite__secao">${_.imite.julgamento}</h2>
        <div class="prosa">${x(e.julgamento)}</div>
        <p class="imite__pergunta">${_.imite.pergunta}</p>

        ${K(e)}

        ${j===``?y:m`<p class="imite__feedback imite__feedback--${M}">${j}</p>`}

        ${k?y:m`
              <kk-button
                variant="primary"
                ?disabled=${O===null}
                @click=${()=>L(e)}
              >${_.imite.conferir}</kk-button>
            `}
      </article>

      ${k?Y(e):y}
    </div>
  `:(A||R(e),m`<div class="imite">${Y(e)}</div>`)}function J(e){let t=g(e);return t.length===0?y:m`
    <article class="imite__bloco">
      <h2 class="imite__secao">${_.imite.exemplos}</h2>
      <ul class="imite__exemplos">
        ${t.map(e=>m`
            <li>
              <strong>${e.nome}</strong>
              ${e.nota===void 0||e.nota===``?y:m`<span>${e.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function Y(t){return m`
    <div class="imite__final">
      ${V(t)?m`<p class="imite__espelho-feito"><kk-icon name="eye-check"></kk-icon>${_.imite.seloFeito}</p>`:y}

      <article class="imite__bloco imite__bloco--sucesso">
        <h2 class="imite__secao">${_.imite.lente}</h2>
        <div class="prosa">${x(t.reenquadramento)}</div>
        ${t.referencia===``?y:m`<p class="imite__verso">${t.referencia}</p>`}
        ${t.link_jw===``?y:m`
              <p class="imite__fonte">
                <a href=${t.link_jw} target="_blank" rel="noopener">${_.imite.lerFonte}</a>
              </p>
            `}
      </article>

      ${J(t)}

      <div class="imite__caderno">
        <div class="imite__cabecalho-lista">
          <label for="imite-espelho">${_.imite.espelhoTitulo}</label>
          <a href="#/caderno">${_.imite.cadernoVer}</a>
        </div>
        ${t.espelho===``?y:m`<p class="imite__espelho-pergunta">${t.espelho}</p>`}
        <textarea
          id="imite-espelho"
          rows="4"
          placeholder=${_.imite.espelhoPlaceholder}
          .value=${N}
          @input=${e=>{N=e.target.value,B(t)}}
        ></textarea>
      </div>

      <div class="imite__saidas">
        <kk-button variant="primary" @click=${()=>e(`imite`)}>
          ${_.imite.outrosCartoes}
        </kk-button>
        <kk-button @click=${()=>e(`home`)}>${_.imite.inicio}</kk-button>
      </div>
    </div>
  `}function X(e){let t=Number(e.args[0]);return Number.isFinite(t)?F(t):void 0}function Z(e){return e.args[1]===`lente`}var Q={titulo(e){return X(e)?.titulo},voltarPara(e){let t=X(e);return t===void 0?`home`:Z(e)?`imite/${t.id}`:`imite`},conteudo(e){P();let t=X(e);return t===void 0?(D=-1,W()):Z(e)?q(t):(D=-1,G(t))}};export{Q as telaImite};