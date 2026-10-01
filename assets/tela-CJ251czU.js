import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{r}from"./rotas-D12eslN_.js";import{A as i,C as a,D as o,E as s,O as c,R as l,S as u,T as d,_ as f,b as p,k as m,l as h,v as g,w as _,x as v,y}from"./index-DYev-n2R.js";import{t as b}from"./carga-Cb65ZAc7.js";import{t as x}from"./rascunho-kL2aOgFQ.js";var S=[],C=d(),w=new Map,T=-1,E=null,D=!1,O=!1,k=``,A=``,j=x({origem:`imite`,idDe:e=>e.id,chaveDe:e=>s(e.id??0),referenciaDe:e=>e.referencia,tituloDe:e=>`${n.imite.titulo} — ${e.titulo}`,lembrete:()=>w}),M=new b(`imite`,async()=>{[S,w]=await Promise.all([g(),y()]),C=_()});function N(e){return S.find(t=>t.id===e)}function P(e){T!==e.id&&(T=e.id??-1,E=null,D=!1,O=!1,k=``,A=``,j.abrir(e.id===void 0?``:w.get(e.id)??``))}function F(e){D||E===null||(v(e,E)?(D=!0,A=`ok`,k=m(e,E)||n.imite.acerto,I(e)):(A=`erro`,k=m(e,E)||n.imite.erro),l())}function I(e){O||e.id===void 0||(C=c(C,e.id),O=!0)}function L(e){return p(C,w,e)}function R(i){return e`
    <button class="imite__cartao" @click=${()=>r(`imite/${i.id}`)}>
      <kk-icon class="imite__icone" name=${i.icone===``?`eye-check`:i.icone}></kk-icon>
      <span class="imite__cartao-texto">
        <span class="imite__titulo">${i.titulo}</span>
        ${i.personagens===``?t:e`<small class="imite__personagens">${i.personagens}</small>`}
      </span>
      <span class="imite__selos">
        ${o(C,i)?e`<kk-icon name="check" class="imite__selo imite__selo--ok"></kk-icon>`:t}
        ${L(i)?e`<kk-icon
                name="eye-check"
                class="imite__selo imite__selo--espelho"
                title=${n.imite.seloEspelho}
              ></kk-icon>`:t}
      </span>
    </button>
  `}function z(n,r){return e`
    <kk-details class="imite__secao-tema" name="imite-temas" ?open=${r}>
      <span slot="summary" class="imite__tema ${n.concluido?`imite__tema--ok`:``}">
        ${n.tema}
        ${n.concluido?e`<kk-icon name="check"></kk-icon>`:t}
      </span>
      <div class="imite__cartoes">${n.cartoes.map(R)}</div>
    </kk-details>
  `}function B(){if(S.length===0)return e`<p class="vazio">${M.emAndamento?n.app.carregando:n.imite.vazio}</p>`;let t=S.filter(e=>o(C,e)).length,r=Math.round(t/S.length*100),i=f(S,e=>o(C,e)),a=Math.max(i.findIndex(e=>!e.concluido),0);return e`
    <div class="imite">
      <p class="imite__subtitulo">${n.imite.subtitulo}</p>
      <div class="imite__progresso">
        <kk-progress-bar value=${r}></kk-progress-bar>
        <span class="imite__contagem">${t}/${S.length}</span>
      </div>
      <kk-accordion class="imite__temas">
        ${i.map((e,t)=>z(e,t===a))}
      </kk-accordion>
    </div>
  `}function V(i){return e`
    <div class="imite">
      ${i.personagens===``?t:e`<p class="imite__personagens-cabecalho">${i.personagens}</p>`}

      <article class="imite__bloco">
        <h2 class="imite__secao">${n.imite.cenario}</h2>
        <div class="prosa">${h(i.cenario)}</div>
      </article>

      <article class="imite__bloco imite__bloco--julgamento">
        <h2 class="imite__secao">${n.imite.julgamento}</h2>
        <div class="prosa">${h(i.julgamento)}</div>
      </article>

      <p class="imite__dica">${n.imite.espelhoDica}</p>

      <kk-button variant="primary" @click=${()=>r(`imite/${i.id}/lente`)}>
        ${n.imite.comecar}
      </kk-button>
    </div>
  `}function H(n){let r=a(n);return e`
    <div class="imite__lentes">
      ${r.map(n=>e`
          <button
            class="imite__lente ${E===n.id?`imite__lente--ativa`:``}"
            ?disabled=${D}
            @click=${()=>{E=n.id,k=``,A=``,l()}}
          >
            <strong>${n.rotulo}</strong>
            ${n.nota===void 0||n.nota===``?t:e`<small>${n.nota}</small>`}
          </button>
        `)}
    </div>
  `}function U(r){return P(r),i(r)?e`
    <div class="imite">
      <article class="imite__bloco">
        <h2 class="imite__secao">${n.imite.julgamento}</h2>
        <div class="prosa">${h(r.julgamento)}</div>
        <p class="imite__pergunta">${n.imite.pergunta}</p>

        ${H(r)}

        ${k===``?t:e`<p class="imite__feedback imite__feedback--${A}">${k}</p>`}

        ${D?t:e`
              <kk-button
                variant="primary"
                ?disabled=${E===null}
                @click=${()=>F(r)}
              >${n.imite.conferir}</kk-button>
            `}
      </article>

      ${D?G(r):t}
    </div>
  `:(O||I(r),e`<div class="imite">${G(r)}</div>`)}function W(r){let i=u(r);return i.length===0?t:e`
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
  `}function G(i){return e`
    <div class="imite__final">
      ${L(i)?e`<p class="imite__espelho-feito"><kk-icon name="eye-check"></kk-icon>${n.imite.seloFeito}</p>`:t}

      <article class="imite__bloco imite__bloco--sucesso">
        <h2 class="imite__secao">${n.imite.lente}</h2>
        <div class="prosa">${h(i.reenquadramento)}</div>
        ${i.referencia===``?t:e`<p class="imite__verso">${i.referencia}</p>`}
        ${i.link_jw===``?t:e`
              <p class="imite__fonte">
                <a href=${i.link_jw} target="_blank" rel="noopener">${n.imite.lerFonte}</a>
              </p>
            `}
      </article>

      ${W(i)}

      ${j.campo({item:i,id:`imite-espelho`,rotulo:n.imite.espelhoTitulo,placeholder:n.imite.espelhoPlaceholder,apoio:i.espelho===``?t:e`<p class="rascunho__apoio">${i.espelho}</p>`})}

      <div class="imite__saidas">
        <kk-button variant="primary" @click=${()=>r(`imite`)}>
          ${n.imite.outrosCartoes}
        </kk-button>
        <kk-button @click=${()=>r(`home`)}>${n.imite.inicio}</kk-button>
      </div>
    </div>
  `}function K(e){let t=Number(e.args[0]);return Number.isFinite(t)?N(t):void 0}function q(e){return e.args[1]===`lente`}var J={titulo(e){return K(e)?.titulo},voltarPara(e){let t=K(e);return t===void 0?`home`:q(e)?`imite/${t.id}`:`imite`},conteudo(e){let t=M.falhou();if(t!==null)return t;let n=K(e);return n===void 0?(T=-1,B()):q(e)?U(n):(T=-1,V(n))}};export{J as telaImite};