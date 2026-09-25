import{n as e,r as t,t as n}from"./leitura-CICKVXAI.js";import{r}from"./texto-CFvOW6yL.js";import{o as i,s as a}from"./banco-DhjAojIe.js";import{$ as o,b as s,ct as c,g as l,gt as u,m as d,n as f,pt as p,ut as m,vt as h,y as ee}from"./index-sA5grpgQ.js";import{alternarFavorito as te,chaveFavorito as ne,lerFavoritos as re}from"./favoritos-DAEWA_Gd.js";import{t as g}from"./unsafe-html-Cs37CJNH.js";import{t as ie}from"./texto-DrEA38Ux.js";import{t as ae}from"./compartilhar-BT_LE4gp.js";import{a as oe,n as se,r as ce}from"./acervo-mwj3Kh77.js";var _=()=>a(`poesias`),v=()=>a(`poesias_local`),y=`note_fav_poesias`;async function le(e,t){let[n,r,a]=await Promise.all([_().todos(),v().todos(),i(`not_poesias`,`not_poesias_local`,e)]);return ce(se(n,r,a),t)}function b(e,t){return(t?v():_()).obter(e)}function ue(e){return v().salvar(e)}function x(e){return v().excluir(e)}var S=/<p\b[^>]*\bclass="[^"]*\bpoesia--tema\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i;function de(e){let n=S.exec(e.conteudo??``)?.[1];return n===void 0?ie(e.conteudo,180):t(n)}var fe=[[`Gênesis`,`Gên`],[`Êxodo`,`Êxo`],[`Levítico`,`Lev`],[`Números`,`Núm`],[`Deuteronômio`,`Deu`],[`Josué`,`Jos`],[`Juízes`,`Juí`],[`Rute`],[`1 Samuel`,`1Sa`],[`2 Samuel`,`2Sa`],[`1 Reis`,`1Rs`],[`2 Reis`,`2Rs`],[`1 Crônicas`,`1Cr`],[`2 Crônicas`,`2Cr`],[`Esdras`,`Esd`],[`Neemias`,`Nee`],[`Ester`,`Est`],[`Jó`],[`Salmo`,`Sal`],[`Provérbios`,`Pro`],[`Eclesiastes`,`Ecl`],[`Cântico de Salomão`,`Cân`],[`Isaías`,`Isa`],[`Jeremias`,`Jer`],[`Lamentações`,`Lam`],[`Ezequiel`,`Eze`],[`Daniel`,`Dan`],[`Oseias`,`Os`],[`Joel`],[`Amós`],[`Obadias`,`Oba`],[`Jonas`,`Jon`],[`Miqueias`,`Miq`],[`Naum`],[`Habacuque`,`Hab`],[`Sofonias`,`Sof`],[`Ageu`],[`Zacarias`,`Zac`],[`Malaquias`,`Mal`],[`Mateus`,`Mat`],[`Marcos`,`Mar`],[`Lucas`,`Luc`],[`João`],[`Atos`],[`Romanos`,`Rom`],[`1 Coríntios`,`1Co`],[`2 Coríntios`,`2Co`],[`Gálatas`,`Gál`],[`Efésios`,`Efé`],[`Filipenses`,`Fil`],[`Colossenses`,`Col`],[`1 Tessalonicenses`,`1Te`],[`2 Tessalonicenses`,`2Te`],[`1 Timóteo`,`1Ti`],[`2 Timóteo`,`2Ti`],[`Tito`],[`Filêmon`,`Flm`],[`Hebreus`,`Heb`],[`Tiago`,`Tia`],[`1 Pedro`,`1Pe`],[`2 Pedro`,`2Pe`],[`1 João`,`1Jo`],[`2 João`,`2Jo`],[`3 João`,`3Jo`],[`Judas`,`Jud`],[`Apocalipse`,`Apo`]],C=new Map;for(let[e,t]of fe.entries())for(let n of t)C.set(n,e);var w=[...C.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),pe=RegExp(`(?<![\\p{L}\\p{N}])(${w})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`gu`);function T(e,t){let n=C.get(e);return n===void 0?[]:t.split(`;`).map(e=>e.replace(/\s+/g,``)).filter(e=>e!==``).map(e=>`${n}:${e}`)}var me=/<p\b[^>]*>[\s\S]*?<\/p>/gi,E=RegExp(`^(?:${w})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*[“"]`,`u`);function he(e){let n=(e.match(me)??[]).filter(e=>t(e)!==``),r=n.map((e,n)=>({i:n,texto:t(e)})).filter(({texto:e})=>e.length<30&&!/[.:”"]$/.test(e)&&!E.test(e)),i=r[0],a=r[1];if(i===void 0||a===void 0||a.i!==i.i+1)return null;let o=[],s=[];for(let e of n.slice(a.i+1)){let n=t(e);if(E.test(n)){let t=RegExp(`^(${w})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`u`).exec(n),r=t===null?void 0:T(t[1]??``,t[2]??``)[0];if(r!==void 0&&t!==null){o.push({chave:r,rotulo:`${t[1]} ${t[2]}`,html:e.replace(/^(<p\b[^>]*>)([\s\S]*)(<\/p>)$/i,(e,t,n,r)=>`${t}${n.replace(RegExp(`^((?:<[^>]*>)*)\\s*(?:${w})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*`,`u`),`$1`)}${r}`)});continue}}s.push(e)}let c=new Set(o.map(e=>e.chave));return{abertura:n.slice(0,i.i),vistas:[i.texto,a.texto],pesquisa:s.map(e=>ge(e,c)),citadas:o}}function ge(e,t){return e.replace(pe,(n,i,a,o)=>{if(/<[^>]*$/.test(e.slice(0,o)))return n;let s=T(i,a).filter(e=>t.has(e));return s.length===0?n:`<button type="button" class="ensaio__ref" data-chaves="${r(s.join(` `))}" aria-expanded="false">${n}</button>`})}var _e=400,ve=1200,D=[],O=``,k=new Set,ye=!1,A=!1,j=null,M=!1,N=null,P,F=!1,I=null,L=null,R,z,B=new n;function be(){return document.querySelector(`kk-editor`)}function xe(e){let t=be();t!==null&&(t.value=e)}function V(e,t){return ne(t?`local`:`curado`,e.id)}function H(e,t){return k.has(V(e,t))}async function U(e,t){k=te(y,k,V(e,t)),j===null?await W():c()}async function W(){D=await le(O,e=>H(e,e.local)),c()}async function G(e,t){M=t,j=await b(e,t)??null,j===null&&m(`poesia`)}async function K(e){if(e===null)N={id:null,titulo:``,conteudo:``,status:``};else{let t=await b(e,!0);if(t===void 0){m(`poesia`);return}N={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}c(),xe(N.conteudo)}function q(e){let t=e.args.join(`/`);P===t||F||I!==null||(P=t,F=!0,B.fechar(),ye||=(k=re(y),!0),(async()=>{try{let[t,n]=e.args;t===void 0?(j=null,N=null,await W()):t===`nova`?(j=null,await K(null)):t===`editar`?(j=null,await K(Number.parseInt(n??``,10))):t===`local`?(N=null,await G(Number.parseInt(n??``,10),!0)):(N=null,await G(Number.parseInt(t,10),!1))}catch(t){console.error(`poesia: a carga falhou.`,t),I=s(t),L=e}finally{F=!1,c()}})())}function Se(){let e=L;I=null,L=null,P=void 0,e!==null&&q(e),c()}function Ce(e){O=e,clearTimeout(R),R=setTimeout(()=>void W(),_e)}function we(e){let t=H(e,e.local);return h`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>m(e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${e.titulo||p.acervo.semTitulo}
          </span>
          ${e.local?h`<kk-badge variant="success" pill>${p.acervo.meu}</kk-badge>`:u}
        </span>
        <span class="cartao__previa">${de(e)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?p.poesia.desfavoritar:p.poesia.favoritar}
        @click=${()=>void U(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function Te(){return h`
    ${A?h`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${p.poesia.aviso.map(e=>h`<p>${e}</p>`)}
          </kk-alert>
        `:u}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${p.poesia.buscar}
        .value=${O}
        @kk-input=${e=>Ce(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${D.length===0?h`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${p.poesia.vazio}</p>
          </div>
        `:h`<div class="cartoes cartoes--duas">${D.map(e=>we(e))}</div>`}
  `}function J(e){return`${e.titulo}. ${e.conteudo}`}function Y(e){let t=e.id===175&&!M?he(e.conteudo):null;return t===null?h`
    <article class="poema">
      <div class="prosa poema__corpo">${g(f(e.conteudo))}</div>
    </article>
  `:De(t)}var X=0;function Ee(e){let t=e.target?.closest(`.ensaio__ref`);if(t==null)return;let n=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,String(n));let r=t.closest(`.ensaio`);for(let e of(t.dataset.chaves??``).split(` `)){let t=r?.querySelector(`.ensaio__citada[data-chave="${CSS.escape(e)}"]`);t!=null&&(t.hidden=!n)}}function Z(e,t){return h`
    <div
      class="ensaio__citada"
      data-chave=${e.chave}
      ?hidden=${t}
    >
      <cite class="poesia--fonte">${e.rotulo}</cite>
      ${g(f(e.html))}
    </div>
  `}function De(e){return h`
    <article class="ensaio prosa" @click=${Ee}>
      <div class="ensaio__abertura">
        ${e.abertura.map(e=>g(f(e)))}
      </div>

      <div class="ensaio__vistas" role="tablist">
        ${e.vistas.map((e,t)=>h`
            <button
              type="button"
              role="tab"
              class="ensaio__vista"
              aria-selected=${X===t}
              @click=${()=>{X=t,c()}}
            >
              ${e}
            </button>
          `)}
      </div>

      ${X===0?h`
            <div class="ensaio__pesquisa">
              ${e.pesquisa.map(e=>g(f(e)))}
              ${e.citadas.map(e=>Z(e,!0))}
            </div>
          `:h`
            <div class="ensaio__citadas">
              ${e.citadas.map(e=>Z(e,!1))}
            </div>
          `}
    </article>
  `}function Oe(){queueMicrotask(()=>{let t=document.querySelector(`.poema__corpo, .ensaio`);t!==null&&e(t)})}function ke(e){return Oe(),h`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${Y(e)}

    ${M?u:h`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!e.anterior_id}
              @click=${()=>m(`poesia/${e.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${p.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!e.proximo_id}
              @click=${()=>m(`poesia/${e.proximo_id??``}`)}
            >
              ${p.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${B.overlay(h`
          <h1 class="titulo--serif">${e.titulo}</h1>
          ${Y(e)}
        `,()=>J(e))}
  `}async function Ae(){let e=j?.id;e!==void 0&&M&&await l({titulo:p.poesia.excluir,texto:p.acervo.excluirTexto,rotuloConfirmar:p.acoes.excluir,variante:`danger`})&&(await x(e),d(p.poesia.excluida),m(`poesia`))}function Q(){N!==null&&(N={...N,status:p.acervo.salvando},c(),clearTimeout(z),z=setTimeout(()=>void $(),ve))}async function $(){if(N===null)return;if(N.titulo.trim()===``||oe(N.conteudo)){N={...N,status:p.acervo.tituloEConteudo},c();return}let e=Date.now(),t=await ue({titulo:N.titulo,conteudo:N.conteudo,publicar:0,data_atualizacao:e,...N.id===null?{data_criacao:e}:{id:N.id}});N.id===null&&(N={...N,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),N={...N,status:p.acervo.salvoAs(o(e))},c()}function je(e){return h`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${p.poesia.tituloPlaceholder}
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
  `}function Me(){return h`
    <kk-icon-button
      name="info-circle"
      label=${p.poesia.sobre}
      @click=${()=>{A=!A,c()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${p.poesia.nova}
      @click=${()=>m(`poesia/nova`)}
    ></kk-icon-button>
  `}function Ne(e){let n=H(e,M);return h`
    <kk-icon-button
      name="star"
      variant=${n?`filled`:`outline`}
      label=${n?p.poesia.desfavoritar:p.poesia.favoritar}
      @click=${()=>void U(e,M)}
    ></kk-icon-button>
    ${B.botaoApresentar()}
    ${B.botaoFala(()=>J(e))}
    <kk-icon-button
      name="share"
      label=${p.leitura.compartilhar}
      @click=${()=>void ae(e.titulo,t(e.conteudo))}
    ></kk-icon-button>
    ${M?h`
          <kk-icon-button
            name="pencil"
            label=${p.acoes.editar}
            @click=${()=>m(`poesia/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${p.poesia.excluir}
            @click=${()=>void Ae()}
          ></kk-icon-button>
        `:u}
  `}var Pe={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=N?.titulo.trim()??``;return e===``?p.poesia.novaTitulo:e}return j?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return Me();if(t!==`nova`&&t!==`editar`)return j===null?void 0:Ne(j)},conteudo(e){if(q(e),I!==null)return ee(I,Se);let[t]=e.args;return t===void 0?Te():t===`nova`||t===`editar`?N===null?h`<div class="carregando"><kk-spinner></kk-spinner></div>`:je(N):j===null?h`<div class="carregando"><kk-spinner></kk-spinner></div>`:ke(j)}};export{Pe as telaPoesia};