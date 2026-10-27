import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{i as r,r as i}from"./formato-BoZO7uRM.js";import{t as a}from"./html-C5yDSNPC.js";import{i as o,n as ee,r as s}from"./rotas-CR8kk0YZ.js";import{o as te,s as c}from"./banco-H0jShgoR.js";import{i as ne,n as re,o as ie,t as ae}from"./acervo-CwqE9mCZ.js";import{A as oe,C as l,D as u,T as se,ct as d,n as ce}from"./index-DA5sF2fG.js";import{n as le,r as ue,t as de}from"./favoritos-DSssFOrF.js";import{n as fe}from"./carga-M22LLosZ.js";import{n as pe,t as me}from"./editor-CSRQZGXQ.js";import{n as he,t as ge}from"./leitura-BxzqQUPY.js";import{t as _e}from"./compartilhar-C3iOl3nO.js";import{a as ve,c as ye,d as be,f,l as xe,n as Se,o as Ce,r as we,s as Te,t as Ee,u as De}from"./progresso-fH1dG5W9.js";var p=()=>c(`poesias`),m=()=>c(`poesias_local`),h=`note_fav_poesias`;async function Oe(e,t){let[n,r,i]=await Promise.all([p().todos(),m().todos(),te(`not_poesias`,`not_poesias_local`,e)]);return{todas:ae(n,r),achadas:ne(re(n,r,i),t)}}function g(e,t){return(t?m():p()).obter(e)}function ke(e){return m().salvar(e)}function Ae(e){return m().excluir(e)}var je=/<p\b[^>]*\bclass="[^"]*\bpoesia--tema\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i;function Me(e){let t=je.exec(e.conteudo??``)?.[1];return t===void 0?pe(e.conteudo,180):a(t)}var Ne=400,Pe=1200,Fe=400,Ie=3e3,_=[],v=[],y=``,b=`todas`,x=ye(),S=new Set,Le=!1,C=!1,w=null,T=!1,E=null,D,O,k=null,A=null,j=!1,M,N,P=new ge;function F(e,t){return le(t?`local`:`curado`,e.id)}function I(e,t){return S.has(F(e,t))}async function L(e,t){S=de(h,S,F(e,t)),w===null?await K():d()}function R(){return Math.max(document.documentElement.scrollHeight-innerHeight,0)}function z(){let e=o();return k!==null&&e.modulo===`poesia`&&e.args.join(`/`)===k.rota}function B(e){e!==x&&(x=e,be(x))}function V(){clearTimeout(M),A!==null&&(B(De(x,A.chave,A.fracao,Date.now())),A=null)}function Re(e,t){return f(x.poesias[F(e,t)])}function H(){let e=document.querySelector(`.poesia__fim`);return e!==null&&e.getBoundingClientRect().top<=innerHeight}function U(){let e=k?.chave;e===void 0||j||f(x.poesias[e])===`lida`||!H()?(clearTimeout(N),N=void 0):N===void 0&&(N=setTimeout(()=>{N=void 0,z()&&k?.chave===e&&!j&&H()&&W(e,!0)},Ie))}function ze(){if(!z()||k===null)return;let e=R();A={chave:k.chave,fracao:e===0?0:scrollY/e},clearTimeout(M),M=setTimeout(V,Fe),U()}function W(e,t,r=!1){r&&(j=!0),B(ve(x,e,t,Date.now())),l(t?n.poesia.marcadaLida:n.poesia.desmarcadaLida),d()}var G=!1;function Be(){G||(G=!0,addEventListener(`scroll`,ze,{passive:!0}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&V()}))}function Ve(e,t,r){let i=F(e,t),a=x.poesias[i]?.ponto;B(xe(x,i,Date.now())),k={chave:i,rota:r},j=!1,Be(),requestAnimationFrame(()=>{k?.chave===i&&(a!==void 0&&(scrollTo({top:a*R()}),l(n.poesia.retomada,`neutral`)),U())})}async function K(){let e=await Oe(y,e=>I(e,e.local));v=e.todas,_=e.achadas,d()}async function q(e,t,n){T=t,w=await g(e,t)??null,w===null?s(`poesia`):Ve(w,t,n)}async function J(e){if(e===null)E={id:null,titulo:``,conteudo:``,status:``};else{let t=await g(e,!0);if(t===void 0){s(`poesia`);return}E={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}d(),me(E.conteudo)}var Y=new fe(`poesia`,async e=>{P.fechar(),V(),k=null,clearTimeout(N),N=void 0,x=we(),Le||=(S=ue(h),!0);let[t,n]=e.args,r=e.args.join(`/`);t===void 0?(w=null,E=null,await K()):t===`nova`?(w=null,await J(null)):t===`editar`?(w=null,await J(Number.parseInt(n??``,10))):t===`local`?(E=null,await q(Number.parseInt(n??``,10),!0,r)):(E=null,await q(Number.parseInt(t,10),!1,r))});ee(`poesia`,()=>{V(),k=null,Y.esquecer()});function He(e){y=e,clearTimeout(D),D=setTimeout(()=>void K(),Ne)}function X(e){return e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`}function Ue(r){let i=x.poesias[F(r,r.local)];switch(f(i)){case`lida`:return e`<kk-icon
        class="poesia__marca poesia__marca--lida"
        name="circle-check"
        label=${n.poesia.lida}
      ></kk-icon>`;case`andamento`:return e`<span class="poesia__marca">${n.poesia.percentual(Math.round((i?.ponto??0)*100))}</span>`;case`nova`:return t}}function We(r){let i=I(r,r.local);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${i}>
      <button class="cartao__alvo" @click=${()=>s(X(r))}>
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${r.titulo||n.acervo.semTitulo}
          </span>
          ${r.local?e`<kk-badge variant="success" pill>${n.acervo.meu}</kk-badge>`:t}
          ${Ue(r)}
        </span>
        <span class="cartao__previa">${Me(r)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${i?`filled`:`outline`}
        label=${i?n.poesia.desfavoritar:n.poesia.favoritar}
        @click=${()=>void L(r,r.local)}
      ></kk-icon-button>
    </div>
  `}function Ge(r){if(y.trim()!==``||b!==`todas`&&b!==`andamento`)return t;let i=Ce(x,r),a=i===null?void 0:v.find(e=>F(e,e.local)===i);if(a===void 0||i===null)return t;let o=Math.round((x.poesias[i]?.ponto??0)*100);return e`
    <button class="poesia__continuar" @click=${()=>s(X(a))}>
      <kk-icon name="bookmark"></kk-icon>
      <span class="poesia__continuar-texto">
        <small>${n.poesia.continuar}</small>
        <strong class="titulo--serif">${a.titulo||n.acervo.semTitulo}</strong>
      </span>
      <span class="poesia__marca">${n.poesia.percentual(o)}</span>
    </button>
  `}function Ke(){let r=v.map(e=>F(e,e.local)),i=Se(x,r),a=_.filter(e=>Te(b,Re(e,e.local)));return e`
    ${C?e`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${n.poesia.aviso.map(t=>e`<p>${t}</p>`)}
          </kk-alert>
        `:t}

    ${v.length===0?t:e`
          <div class="poesia__progresso" title=${n.poesia.progresso}>
            <kk-progress-bar
              value=${Math.round(i.lidas/i.todas*100)}
            ></kk-progress-bar>
            <span class="poesia__contagem">${n.poesia.lidasDe(i.lidas,i.todas)}</span>
          </div>
        `}

    ${Ge(r)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.poesia.buscar}
        .value=${y}
        @kk-input=${e=>He(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${v.length===0?t:e`
          <div class="chips" role="group" aria-label=${n.poesia.filtrar}>
            ${Ee.map(t=>e`
                <button
                  class="chip"
                  ?data-ativo=${b===t}
                  aria-pressed=${b===t}
                  @click=${()=>{b=t,d()}}
                >
                  ${n.poesia.filtros[t]}
                  <span class="poesia__quantos">${i[t]}</span>
                </button>
              `)}
          </div>
        `}

    ${a.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${_.length===0?n.poesia.vazio:n.poesia.vazioNoFiltro}</p>
          </div>
        `:e`<div class="cartoes cartoes--duas">
          ${a.map(e=>We(e))}
        </div>`}
  `}function Z(e){return`${e.titulo}. ${e.conteudo}`}function Q(t){return e`
    <article class="poema">
      <div class="prosa poema__corpo">${se(ce(t.conteudo))}</div>
    </article>
  `}function qe(){queueMicrotask(()=>{let e=document.querySelector(`.poema__corpo`);e!==null&&he(e)})}function Je(r){let a=F(r,T),o=x.poesias[a]?.lidaEm;return e`
    <div class="poesia__fim">
      ${o===void 0?t:e`
            <span class="poesia__lida">
              <kk-icon name="circle-check"></kk-icon>
              ${n.poesia.lidaEm(i(o))}
            </span>
          `}
      <kk-button size="small" @click=${()=>W(a,o===void 0,!0)}>
        ${o===void 0?n.poesia.marcarLida:n.poesia.desmarcarLida}
      </kk-button>
    </div>
  `}function Ye(r){return qe(),e`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${Q(r)}

    ${Je(r)}

    ${T?t:e`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!r.anterior_id}
              @click=${()=>s(`poesia/${r.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${n.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!r.proximo_id}
              @click=${()=>s(`poesia/${r.proximo_id??``}`)}
            >
              ${n.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${P.overlay(e`
          <h1 class="titulo--serif">${r.titulo}</h1>
          ${Q(r)}
        `,()=>Z(r))}
  `}async function Xe(){let e=w?.id;e!==void 0&&T&&await oe({titulo:n.poesia.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await Ae(e),l(n.poesia.excluida),s(`poesia`))}function $(){E!==null&&(E={...E,status:n.acervo.salvando},d(),clearTimeout(O),O=setTimeout(()=>void Ze(),Pe))}async function Ze(){if(E===null)return;if(E.titulo.trim()===``||ie(E.conteudo)){E={...E,status:n.acervo.tituloEConteudo},d();return}let e=Date.now(),t=await ke({titulo:E.titulo,conteudo:E.conteudo,publicar:0,data_atualizacao:e,...E.id===null?{data_criacao:e}:{id:E.id}});E.id===null&&(E={...E,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),E={...E,status:n.acervo.salvoAs(r(e))},d()}function Qe(t){return e`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${n.poesia.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{E={...t,titulo:e.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${t.status}</span>
      </div>

      <kk-editor
        @kk-input=${e=>{E={...t,conteudo:e.detail.value},$()}}
      ></kk-editor>
    </div>
  `}function $e(){return e`
    <kk-icon-button
      name="info-circle"
      label=${n.poesia.sobre}
      @click=${()=>{C=!C,d()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${n.poesia.nova}
      @click=${()=>s(`poesia/nova`)}
    ></kk-icon-button>
  `}function et(r){let i=I(r,T);return e`
    <kk-icon-button
      name="star"
      variant=${i?`filled`:`outline`}
      label=${i?n.poesia.desfavoritar:n.poesia.favoritar}
      @click=${()=>void L(r,T)}
    ></kk-icon-button>
    ${P.botaoApresentar()}
    ${P.botaoFala(()=>Z(r))}
    <kk-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void _e(r.titulo,a(r.conteudo))}
    ></kk-icon-button>
    ${T?e`
          <kk-icon-button
            name="pencil"
            label=${n.acoes.editar}
            @click=${()=>s(`poesia/editar/${r.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${n.poesia.excluir}
            @click=${()=>void Xe()}
          ></kk-icon-button>
        `:t}
  `}var tt={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=E?.titulo.trim()??``;return e===``?n.poesia.novaTitulo:e}return w?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return $e();if(t!==`nova`&&t!==`editar`)return w===null?void 0:et(w)},conteudo(e){let t=Y.falhou(e);if(t!==null)return t;let[n]=e.args;return n===void 0?Ke():n===`nova`||n===`editar`?E===null?u():Qe(E):w===null?u():Ye(w)}};export{tt as telaPoesia};