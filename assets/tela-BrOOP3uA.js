import{n as e,r as t,t as n}from"./leitura-CTOOy0QY.js";import{r}from"./texto-CFvOW6yL.js";import{o as i,s as a}from"./banco-DhjAojIe.js";import{C as o,_t as s,bt as c,ft as l,g as ee,m as te,mt as u,n as d,rt as f,w as p,xt as m,y as h}from"./index-tEHw1VqD.js";import{alternarFavorito as ne,chaveFavorito as re,lerFavoritos as ie}from"./favoritos-DAEWA_Gd.js";import{t as ae}from"./texto-hE_APE8D.js";import{t as g}from"./compartilhar-C4iBpIQ9.js";import{a as oe,n as se,r as ce}from"./acervo-mwj3Kh77.js";var _=()=>a(`poesias`),v=()=>a(`poesias_local`),y=`note_fav_poesias`;async function b(e,t){let[n,r,a]=await Promise.all([_().todos(),v().todos(),i(`not_poesias`,`not_poesias_local`,e)]);return ce(se(n,r,a),t)}function x(e,t){return(t?v():_()).obter(e)}function S(e){return v().salvar(e)}function le(e){return v().excluir(e)}var ue=/<p\b[^>]*\bclass="[^"]*\bpoesia--tema\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i;function de(e){let n=ue.exec(e.conteudo??``)?.[1];return n===void 0?ae(e.conteudo,180):t(n)}var fe=[[`Gênesis`,`Gên`],[`Êxodo`,`Êxo`],[`Levítico`,`Lev`],[`Números`,`Núm`],[`Deuteronômio`,`Deu`],[`Josué`,`Jos`],[`Juízes`,`Juí`],[`Rute`],[`1 Samuel`,`1Sa`],[`2 Samuel`,`2Sa`],[`1 Reis`,`1Rs`],[`2 Reis`,`2Rs`],[`1 Crônicas`,`1Cr`],[`2 Crônicas`,`2Cr`],[`Esdras`,`Esd`],[`Neemias`,`Nee`],[`Ester`,`Est`],[`Jó`],[`Salmo`,`Sal`],[`Provérbios`,`Pro`],[`Eclesiastes`,`Ecl`],[`Cântico de Salomão`,`Cân`],[`Isaías`,`Isa`],[`Jeremias`,`Jer`],[`Lamentações`,`Lam`],[`Ezequiel`,`Eze`],[`Daniel`,`Dan`],[`Oseias`,`Os`],[`Joel`],[`Amós`],[`Obadias`,`Oba`],[`Jonas`,`Jon`],[`Miqueias`,`Miq`],[`Naum`],[`Habacuque`,`Hab`],[`Sofonias`,`Sof`],[`Ageu`],[`Zacarias`,`Zac`],[`Malaquias`,`Mal`],[`Mateus`,`Mat`],[`Marcos`,`Mar`],[`Lucas`,`Luc`],[`João`],[`Atos`],[`Romanos`,`Rom`],[`1 Coríntios`,`1Co`],[`2 Coríntios`,`2Co`],[`Gálatas`,`Gál`],[`Efésios`,`Efé`],[`Filipenses`,`Fil`],[`Colossenses`,`Col`],[`1 Tessalonicenses`,`1Te`],[`2 Tessalonicenses`,`2Te`],[`1 Timóteo`,`1Ti`],[`2 Timóteo`,`2Ti`],[`Tito`],[`Filêmon`,`Flm`],[`Hebreus`,`Heb`],[`Tiago`,`Tia`],[`1 Pedro`,`1Pe`],[`2 Pedro`,`2Pe`],[`1 João`,`1Jo`],[`2 João`,`2Jo`],[`3 João`,`3Jo`],[`Judas`,`Jud`],[`Apocalipse`,`Apo`]],C=new Map;for(let[e,t]of fe.entries())for(let n of t)C.set(n,e);var w=[...C.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),pe=RegExp(`(?<![\\p{L}\\p{N}])(${w})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`gu`);function T(e,t){let n=C.get(e);return n===void 0?[]:t.split(`;`).map(e=>e.replace(/\s+/g,``)).filter(e=>e!==``).map(e=>`${n}:${e}`)}var me=/<p\b[^>]*>[\s\S]*?<\/p>/gi,E=RegExp(`^(?:${w})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*[“"]`,`u`);function he(e){let n=(e.match(me)??[]).filter(e=>t(e)!==``),r=n.map((e,n)=>({i:n,texto:t(e)})).filter(({texto:e})=>e.length<30&&!/[.:”"]$/.test(e)&&!E.test(e)),i=r[0],a=r[1];if(i===void 0||a===void 0||a.i!==i.i+1)return null;let o=[],s=[];for(let e of n.slice(a.i+1)){let n=t(e);if(E.test(n)){let t=RegExp(`^(${w})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`u`).exec(n),r=t===null?void 0:T(t[1]??``,t[2]??``)[0];if(r!==void 0&&t!==null){o.push({chave:r,rotulo:`${t[1]} ${t[2]}`,html:e.replace(/^(<p\b[^>]*>)([\s\S]*)(<\/p>)$/i,(e,t,n,r)=>`${t}${n.replace(RegExp(`^((?:<[^>]*>)*)\\s*(?:${w})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*`,`u`),`$1`)}${r}`)});continue}}s.push(e)}let c=new Set(o.map(e=>e.chave));return{abertura:n.slice(0,i.i),vistas:[i.texto,a.texto],pesquisa:s.map(e=>ge(e,c)),citadas:o}}function ge(e,t){return e.replace(pe,(n,i,a,o)=>{if(/<[^>]*$/.test(e.slice(0,o)))return n;let s=T(i,a).filter(e=>t.has(e));return s.length===0?n:`<button type="button" class="ensaio__ref" data-chaves="${r(s.join(` `))}" aria-expanded="false">${n}</button>`})}var _e=400,ve=1200,D=[],O=``,k=new Set,ye=!1,A=!1,j=null,M=!1,N=null,P,F=!1,I=null,L=null,R,z,B=new n;function be(){return document.querySelector(`kk-editor`)}function xe(e){let t=be();t!==null&&(t.value=e)}function V(e,t){return re(t?`local`:`curado`,e.id)}function H(e,t){return k.has(V(e,t))}async function U(e,t){k=ne(y,k,V(e,t)),j===null?await W():l()}async function W(){D=await b(O,e=>H(e,e.local)),l()}async function G(e,t){M=t,j=await x(e,t)??null,j===null&&u(`poesia`)}async function K(e){if(e===null)N={id:null,titulo:``,conteudo:``,status:``};else{let t=await x(e,!0);if(t===void 0){u(`poesia`);return}N={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}l(),xe(N.conteudo)}function q(e){let t=e.args.join(`/`);P===t||F||I!==null||(P=t,F=!0,B.fechar(),ye||=(k=ie(y),!0),(async()=>{try{let[t,n]=e.args;t===void 0?(j=null,N=null,await W()):t===`nova`?(j=null,await K(null)):t===`editar`?(j=null,await K(Number.parseInt(n??``,10))):t===`local`?(N=null,await G(Number.parseInt(n??``,10),!0)):(N=null,await G(Number.parseInt(t,10),!1))}catch(t){console.error(`poesia: a carga falhou.`,t),I=p(t),L=e}finally{F=!1,l()}})())}function Se(){let e=L;I=null,L=null,P=void 0,e!==null&&q(e),l()}function Ce(e){O=e,clearTimeout(R),R=setTimeout(()=>void W(),_e)}function we(e){let t=H(e,e.local);return m`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>u(e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${e.titulo||s.acervo.semTitulo}
          </span>
          ${e.local?m`<kk-badge variant="success" pill>${s.acervo.meu}</kk-badge>`:c}
        </span>
        <span class="cartao__previa">${de(e)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?s.poesia.desfavoritar:s.poesia.favoritar}
        @click=${()=>void U(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function Te(){return m`
    ${A?m`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${s.poesia.aviso.map(e=>m`<p>${e}</p>`)}
          </kk-alert>
        `:c}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${s.poesia.buscar}
        .value=${O}
        @kk-input=${e=>Ce(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${D.length===0?m`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${s.poesia.vazio}</p>
          </div>
        `:m`<div class="cartoes cartoes--duas">${D.map(e=>we(e))}</div>`}
  `}function J(e){return`${e.titulo}. ${e.conteudo}`}function Y(e){let t=e.id===175&&!M?he(e.conteudo):null;return t===null?m`
    <article class="poema">
      <div class="prosa poema__corpo">${h(d(e.conteudo))}</div>
    </article>
  `:De(t)}var X=0;function Ee(e){let t=e.target?.closest(`.ensaio__ref`);if(t==null)return;let n=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,String(n));let r=t.closest(`.ensaio`);for(let e of(t.dataset.chaves??``).split(` `)){let t=r?.querySelector(`.ensaio__citada[data-chave="${CSS.escape(e)}"]`);t!=null&&(t.hidden=!n)}}function Z(e,t){return m`
    <div
      class="ensaio__citada"
      data-chave=${e.chave}
      ?hidden=${t}
    >
      <cite class="poesia--fonte">${e.rotulo}</cite>
      ${h(d(e.html))}
    </div>
  `}function De(e){return m`
    <article class="ensaio prosa" @click=${Ee}>
      <div class="ensaio__abertura">
        ${e.abertura.map(e=>h(d(e)))}
      </div>

      <div class="ensaio__vistas" role="tablist">
        ${e.vistas.map((e,t)=>m`
            <button
              type="button"
              role="tab"
              class="ensaio__vista"
              aria-selected=${X===t}
              @click=${()=>{X=t,l()}}
            >
              ${e}
            </button>
          `)}
      </div>

      ${X===0?m`
            <div class="ensaio__pesquisa">
              ${e.pesquisa.map(e=>h(d(e)))}
              ${e.citadas.map(e=>Z(e,!0))}
            </div>
          `:m`
            <div class="ensaio__citadas">
              ${e.citadas.map(e=>Z(e,!1))}
            </div>
          `}
    </article>
  `}function Oe(){queueMicrotask(()=>{let t=document.querySelector(`.poema__corpo, .ensaio`);t!==null&&e(t)})}function ke(e){return Oe(),m`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${Y(e)}

    ${M?c:m`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!e.anterior_id}
              @click=${()=>u(`poesia/${e.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${s.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!e.proximo_id}
              @click=${()=>u(`poesia/${e.proximo_id??``}`)}
            >
              ${s.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${B.overlay(m`
          <h1 class="titulo--serif">${e.titulo}</h1>
          ${Y(e)}
        `,()=>J(e))}
  `}async function Ae(){let e=j?.id;e!==void 0&&M&&await ee({titulo:s.poesia.excluir,texto:s.acervo.excluirTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})&&(await le(e),te(s.poesia.excluida),u(`poesia`))}function Q(){N!==null&&(N={...N,status:s.acervo.salvando},l(),clearTimeout(z),z=setTimeout(()=>void $(),ve))}async function $(){if(N===null)return;if(N.titulo.trim()===``||oe(N.conteudo)){N={...N,status:s.acervo.tituloEConteudo},l();return}let e=Date.now(),t=await S({titulo:N.titulo,conteudo:N.conteudo,publicar:0,data_atualizacao:e,...N.id===null?{data_criacao:e}:{id:N.id}});N.id===null&&(N={...N,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),N={...N,status:s.acervo.salvoAs(f(e))},l()}function je(e){return m`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${s.poesia.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{N={...e,titulo:t.target.value},Q()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{N={...e,conteudo:t.detail.value},Q()}}
      ></kk-editor>
    </div>
  `}function Me(){return m`
    <kk-icon-button
      name="info-circle"
      label=${s.poesia.sobre}
      @click=${()=>{A=!A,l()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${s.poesia.nova}
      @click=${()=>u(`poesia/nova`)}
    ></kk-icon-button>
  `}function Ne(e){let n=H(e,M);return m`
    <kk-icon-button
      name="star"
      variant=${n?`filled`:`outline`}
      label=${n?s.poesia.desfavoritar:s.poesia.favoritar}
      @click=${()=>void U(e,M)}
    ></kk-icon-button>
    ${B.botaoApresentar()}
    ${B.botaoFala(()=>J(e))}
    <kk-icon-button
      name="share"
      label=${s.leitura.compartilhar}
      @click=${()=>void g(e.titulo,t(e.conteudo))}
    ></kk-icon-button>
    ${M?m`
          <kk-icon-button
            name="pencil"
            label=${s.acoes.editar}
            @click=${()=>u(`poesia/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${s.poesia.excluir}
            @click=${()=>void Ae()}
          ></kk-icon-button>
        `:c}
  `}var Pe={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=N?.titulo.trim()??``;return e===``?s.poesia.novaTitulo:e}return j?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return Me();if(t!==`nova`&&t!==`editar`)return j===null?void 0:Ne(j)},conteudo(e){if(q(e),I!==null)return o(I,Se);let[t]=e.args;return t===void 0?Te():t===`nova`||t===`editar`?N===null?m`<div class="carregando"><kk-spinner></kk-spinner></div>`:je(N):j===null?m`<div class="carregando"><kk-spinner></kk-spinner></div>`:ke(j)}};export{Pe as telaPoesia};