import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{o as r,u as i}from"./dados-DZJ-rFad.js";import{D as a,E as o,S as s,_ as c,b as l,d as u,f as d,g as f,h as p,l as m,m as h,p as g,u as _,v,x as y,y as b}from"./index-CRLpDONK.js";import{t as x}from"./unsafe-html-BBiWdB6b.js";var S=[],C=c(),w=new Map,T=!1,E=!1,D=-1,O=null,k=!1,A=!1,j=``,M=``,N=``;function P(){T||E||(E=!0,(async()=>{try{[S,w]=await Promise.all([_(),u()]),C=f(),T=!0}finally{E=!1,o()}})())}function F(e){return S.find(t=>t.id===e)}function I(e){D!==e.id&&(D=e.id??-1,O=null,k=!1,A=!1,j=``,M=``,N=e.id===void 0?``:w.get(e.id)??``)}function L(e){k||O===null||(g(e,O)?(k=!0,M=`ok`,j=y(e,O)||n.imite.acerto,R(e)):(M=`erro`,j=y(e,O)||n.imite.erro),o())}function R(e){A||e.id===void 0||(C=l(C,e.id),A=!0)}var z;function B(e){clearTimeout(z),z=setTimeout(()=>{(async()=>{if(e.id===void 0)return;let t=N.trim();t===``?(await i(v(e.id)),w.delete(e.id)):(await r({origem:`imite`,referencia:e.referencia,titulo:`${n.imite.titulo} — ${e.titulo}`,conteudo:t,ref_chave:v(e.id)}),w.set(e.id,t)),o()})()},500)}function V(e){return d(C,w,e)}function H(r){return e`
    <button class="imite__cartao" @click=${()=>a(`imite/${r.id}`)}>
      <kk-icon class="imite__icone" name=${r.icone===``?`eye-check`:r.icone}></kk-icon>
      <span class="imite__cartao-texto">
        <span class="imite__titulo">${r.titulo}</span>
        ${r.personagens===``?t:e`<small class="imite__personagens">${r.personagens}</small>`}
      </span>
      <span class="imite__selos">
        ${b(C,r)?e`<kk-icon name="check" class="imite__selo imite__selo--ok"></kk-icon>`:t}
        ${V(r)?e`<kk-icon
                name="eye-check"
                class="imite__selo imite__selo--espelho"
                title=${n.imite.seloEspelho}
              ></kk-icon>`:t}
      </span>
    </button>
  `}function U(n,r){return e`
    <kk-details class="imite__secao-tema" name="imite-temas" ?open=${r}>
      <span slot="summary" class="imite__tema ${n.concluido?`imite__tema--ok`:``}">
        ${n.tema}
        ${n.concluido?e`<kk-icon name="check"></kk-icon>`:t}
      </span>
      <div class="imite__cartoes">${n.cartoes.map(H)}</div>
    </kk-details>
  `}function W(){if(S.length===0)return e`<p class="vazio">${E?n.app.carregando:n.imite.vazio}</p>`;let t=S.filter(e=>b(C,e)).length,r=Math.round(t/S.length*100),i=m(S,e=>b(C,e)),a=Math.max(i.findIndex(e=>!e.concluido),0);return e`
    <div class="imite">
      <p class="imite__subtitulo">${n.imite.subtitulo}</p>
      <div class="imite__progresso">
        <kk-progress-bar value=${r}></kk-progress-bar>
        <span class="imite__contagem">${t}/${S.length}</span>
      </div>
      <kk-accordion class="imite__temas">
        ${i.map((e,t)=>U(e,t===a))}
      </kk-accordion>
    </div>
  `}function G(r){return e`
    <div class="imite">
      ${r.personagens===``?t:e`<p class="imite__personagens-cabecalho">${r.personagens}</p>`}

      <article class="imite__bloco">
        <h2 class="imite__secao">${n.imite.cenario}</h2>
        <div class="prosa">${x(r.cenario)}</div>
      </article>

      <article class="imite__bloco imite__bloco--julgamento">
        <h2 class="imite__secao">${n.imite.julgamento}</h2>
        <div class="prosa">${x(r.julgamento)}</div>
      </article>

      <p class="imite__dica">${n.imite.espelhoDica}</p>

      <kk-button variant="primary" @click=${()=>a(`imite/${r.id}/lente`)}>
        ${n.imite.comecar}
      </kk-button>
    </div>
  `}function K(n){let r=p(n);return e`
    <div class="imite__lentes">
      ${r.map(n=>e`
          <button
            class="imite__lente ${O===n.id?`imite__lente--ativa`:``}"
            ?disabled=${k}
            @click=${()=>{O=n.id,j=``,M=``,o()}}
          >
            <strong>${n.rotulo}</strong>
            ${n.nota===void 0||n.nota===``?t:e`<small>${n.nota}</small>`}
          </button>
        `)}
    </div>
  `}function q(r){return I(r),s(r)?e`
    <div class="imite">
      <article class="imite__bloco">
        <h2 class="imite__secao">${n.imite.julgamento}</h2>
        <div class="prosa">${x(r.julgamento)}</div>
        <p class="imite__pergunta">${n.imite.pergunta}</p>

        ${K(r)}

        ${j===``?t:e`<p class="imite__feedback imite__feedback--${M}">${j}</p>`}

        ${k?t:e`
              <kk-button
                variant="primary"
                ?disabled=${O===null}
                @click=${()=>L(r)}
              >${n.imite.conferir}</kk-button>
            `}
      </article>

      ${k?Y(r):t}
    </div>
  `:(A||R(r),e`<div class="imite">${Y(r)}</div>`)}function J(r){let i=h(r);return i.length===0?t:e`
    <article class="imite__bloco">
      <h2 class="imite__secao">${n.imite.exemplos}</h2>
      <ul class="imite__exemplos">
        ${i.map(n=>e`
            <li>
              <strong>${n.nome}</strong>
              ${n.nota===void 0||n.nota===``?t:e`<span>${n.nota}</span>`}
            </li>
          `)}
      </ul>
    </article>
  `}function Y(r){return e`
    <div class="imite__final">
      ${V(r)?e`<p class="imite__espelho-feito"><kk-icon name="eye-check"></kk-icon>${n.imite.seloFeito}</p>`:t}

      <article class="imite__bloco imite__bloco--sucesso">
        <h2 class="imite__secao">${n.imite.lente}</h2>
        <div class="prosa">${x(r.reenquadramento)}</div>
        ${r.referencia===``?t:e`<p class="imite__verso">${r.referencia}</p>`}
        ${r.link_jw===``?t:e`
              <p class="imite__fonte">
                <a href=${r.link_jw} target="_blank" rel="noopener">${n.imite.lerFonte}</a>
              </p>
            `}
      </article>

      ${J(r)}

      <div class="imite__caderno">
        <div class="imite__cabecalho-lista">
          <label for="imite-espelho">${n.imite.espelhoTitulo}</label>
          <a href="#/caderno">${n.imite.cadernoVer}</a>
        </div>
        ${r.espelho===``?t:e`<p class="imite__espelho-pergunta">${r.espelho}</p>`}
        <textarea
          id="imite-espelho"
          rows="4"
          placeholder=${n.imite.espelhoPlaceholder}
          .value=${N}
          @input=${e=>{N=e.target.value,B(r)}}
        ></textarea>
      </div>

      <div class="imite__saidas">
        <kk-button variant="primary" @click=${()=>a(`imite`)}>
          ${n.imite.outrosCartoes}
        </kk-button>
        <kk-button @click=${()=>a(`home`)}>${n.imite.inicio}</kk-button>
      </div>
    </div>
  `}function X(e){let t=Number(e.args[0]);return Number.isFinite(t)?F(t):void 0}function Z(e){return e.args[1]===`lente`}var Q={titulo(e){return X(e)?.titulo},voltarPara(e){let t=X(e);return t===void 0?`home`:Z(e)?`imite/${t.id}`:`imite`},conteudo(e){P();let t=X(e);return t===void 0?(D=-1,W()):Z(e)?q(t):(D=-1,G(t))}};export{Q as telaImite};