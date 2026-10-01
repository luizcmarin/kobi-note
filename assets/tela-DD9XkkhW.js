import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{r}from"./rotas-D12eslN_.js";import{r as i}from"./data-7IMAkOFv.js";import{t as a}from"./html-C5yDSNPC.js";import{i as o}from"./texto-BZYXsRJ8.js";import{o as s,s as c}from"./banco-CGOuosq0.js";import{i as l,n as u,o as d}from"./acervo-Bp775EqU.js";import{R as f,c as ee,d as p,l as m,m as h,n as g}from"./index-DYev-n2R.js";import{alternarFavorito as _,chaveFavorito as v,lerFavoritos as y}from"./favoritos-BACwLqIZ.js";import{n as b}from"./carga-Cb65ZAc7.js";import{n as te,t as ne}from"./editor-CSRQZGXQ.js";import{n as re,t as ie}from"./leitura-CD6tSIAL.js";import{t as ae}from"./compartilhar-DUGOD5xo.js";var x=()=>c(`poesias`),S=()=>c(`poesias_local`),C=`note_fav_poesias`;async function oe(e,t){let[n,r,i]=await Promise.all([x().todos(),S().todos(),s(`not_poesias`,`not_poesias_local`,e)]);return l(u(n,r,i),t)}function w(e,t){return(t?S():x()).obter(e)}function se(e){return S().salvar(e)}function ce(e){return S().excluir(e)}var le=/<p\b[^>]*\bclass="[^"]*\bpoesia--tema\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i;function ue(e){let t=le.exec(e.conteudo??``)?.[1];return t===void 0?te(e.conteudo,180):a(t)}var de=[[`Gênesis`,`Gên`],[`Êxodo`,`Êxo`],[`Levítico`,`Lev`],[`Números`,`Núm`],[`Deuteronômio`,`Deu`],[`Josué`,`Jos`],[`Juízes`,`Juí`],[`Rute`],[`1 Samuel`,`1Sa`],[`2 Samuel`,`2Sa`],[`1 Reis`,`1Rs`],[`2 Reis`,`2Rs`],[`1 Crônicas`,`1Cr`],[`2 Crônicas`,`2Cr`],[`Esdras`,`Esd`],[`Neemias`,`Nee`],[`Ester`,`Est`],[`Jó`],[`Salmo`,`Sal`],[`Provérbios`,`Pro`],[`Eclesiastes`,`Ecl`],[`Cântico de Salomão`,`Cân`],[`Isaías`,`Isa`],[`Jeremias`,`Jer`],[`Lamentações`,`Lam`],[`Ezequiel`,`Eze`],[`Daniel`,`Dan`],[`Oseias`,`Os`],[`Joel`],[`Amós`],[`Obadias`,`Oba`],[`Jonas`,`Jon`],[`Miqueias`,`Miq`],[`Naum`],[`Habacuque`,`Hab`],[`Sofonias`,`Sof`],[`Ageu`],[`Zacarias`,`Zac`],[`Malaquias`,`Mal`],[`Mateus`,`Mat`],[`Marcos`,`Mar`],[`Lucas`,`Luc`],[`João`],[`Atos`],[`Romanos`,`Rom`],[`1 Coríntios`,`1Co`],[`2 Coríntios`,`2Co`],[`Gálatas`,`Gál`],[`Efésios`,`Efé`],[`Filipenses`,`Fil`],[`Colossenses`,`Col`],[`1 Tessalonicenses`,`1Te`],[`2 Tessalonicenses`,`2Te`],[`1 Timóteo`,`1Ti`],[`2 Timóteo`,`2Ti`],[`Tito`],[`Filêmon`,`Flm`],[`Hebreus`,`Heb`],[`Tiago`,`Tia`],[`1 Pedro`,`1Pe`],[`2 Pedro`,`2Pe`],[`1 João`,`1Jo`],[`2 João`,`2Jo`],[`3 João`,`3Jo`],[`Judas`,`Jud`],[`Apocalipse`,`Apo`]],T=new Map;for(let[e,t]of de.entries())for(let n of t)T.set(n,e);var E=[...T.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),D=RegExp(`(^|[^\\p{L}\\p{N}])(${E})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`gu`);function O(e,t){let n=T.get(e);return n===void 0?[]:t.split(`;`).map(e=>e.replace(/\s+/g,``)).filter(e=>e!==``).map(e=>`${n}:${e}`)}var fe=/<p\b[^>]*>[\s\S]*?<\/p>/gi,k=RegExp(`^(?:${E})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*[“"]`,`u`);function pe(e){let t=(e.match(fe)??[]).filter(e=>a(e)!==``),n=t.map((e,t)=>({i:t,texto:a(e)})).filter(({texto:e})=>e.length<30&&!/[.:”"]$/.test(e)&&!k.test(e)),r=n[0],i=n[1];if(r===void 0||i===void 0||i.i!==r.i+1)return null;let o=[],s=[];for(let e of t.slice(i.i+1)){let t=a(e);if(k.test(t)){let n=RegExp(`^(${E})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`u`).exec(t),r=n===null?void 0:O(n[1]??``,n[2]??``)[0];if(r!==void 0&&n!==null){o.push({chave:r,rotulo:`${n[1]} ${n[2]}`,html:e.replace(/^(<p\b[^>]*>)([\s\S]*)(<\/p>)$/i,(e,t,n,r)=>`${t}${n.replace(RegExp(`^((?:<[^>]*>)*)\\s*(?:${E})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*`,`u`),`$1`)}${r}`)});continue}}s.push(e)}let c=new Set(o.map(e=>e.chave));return{abertura:t.slice(0,r.i),vistas:[r.texto,i.texto],pesquisa:s.map(e=>me(e,c)),citadas:o}}function me(e,t){return e.replace(D,(n,r,i,a,s)=>{if(/<[^>]*$/.test(e.slice(0,s+r.length)))return n;let c=O(i,a).filter(e=>t.has(e));if(c.length===0)return n;let l=n.slice(r.length);return`${r}<button type="button" class="ensaio__ref" data-chaves="${o(c.join(` `))}" aria-expanded="false">${l}</button>`})}var A=400,j=1200,M=[],N=``,P=new Set,F=!1,I=!1,L=null,R=!1,z=null,B,V,H=new ie;function U(e,t){return v(t?`local`:`curado`,e.id)}function W(e,t){return P.has(U(e,t))}async function G(e,t){P=_(C,P,U(e,t)),L===null?await K():f()}async function K(){M=await oe(N,e=>W(e,e.local)),f()}async function q(e,t){R=t,L=await w(e,t)??null,L===null&&r(`poesia`)}async function J(e){if(e===null)z={id:null,titulo:``,conteudo:``,status:``};else{let t=await w(e,!0);if(t===void 0){r(`poesia`);return}z={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}f(),ne(z.conteudo)}var he=new b(`poesia`,async e=>{H.fechar(),F||=(P=y(C),!0);let[t,n]=e.args;t===void 0?(L=null,z=null,await K()):t===`nova`?(L=null,await J(null)):t===`editar`?(L=null,await J(Number.parseInt(n??``,10))):t===`local`?(z=null,await q(Number.parseInt(n??``,10),!0)):(z=null,await q(Number.parseInt(t,10),!1))});function ge(e){N=e,clearTimeout(B),B=setTimeout(()=>void K(),A)}function _e(i){let a=W(i,i.local);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${a}>
      <button
        class="cartao__alvo"
        @click=${()=>r(i.local?`poesia/local/${i.id??``}`:`poesia/${i.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${i.titulo||n.acervo.semTitulo}
          </span>
          ${i.local?e`<kk-badge variant="success" pill>${n.acervo.meu}</kk-badge>`:t}
        </span>
        <span class="cartao__previa">${ue(i)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${a?`filled`:`outline`}
        label=${a?n.poesia.desfavoritar:n.poesia.favoritar}
        @click=${()=>void G(i,i.local)}
      ></kk-icon-button>
    </div>
  `}function ve(){return e`
    ${I?e`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${n.poesia.aviso.map(t=>e`<p>${t}</p>`)}
          </kk-alert>
        `:t}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.poesia.buscar}
        .value=${N}
        @kk-input=${e=>ge(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${M.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${n.poesia.vazio}</p>
          </div>
        `:e`<div class="cartoes cartoes--duas">${M.map(e=>_e(e))}</div>`}
  `}function Y(e){return`${e.titulo}. ${e.conteudo}`}function X(t){let n=t.id===175&&!R?pe(t.conteudo):null;return n===null?e`
    <article class="poema">
      <div class="prosa poema__corpo">${m(g(t.conteudo))}</div>
    </article>
  `:be(n)}var Z=0;function ye(e){let t=e.target?.closest(`.ensaio__ref`);if(t==null)return;let n=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,String(n));let r=t.closest(`.ensaio`);for(let e of(t.dataset.chaves??``).split(` `)){let t=r?.querySelector(`.ensaio__citada[data-chave="${CSS.escape(e)}"]`);t!=null&&(t.hidden=!n)}}function Q(t,n){return e`
    <div
      class="ensaio__citada"
      data-chave=${t.chave}
      ?hidden=${n}
    >
      <cite class="poesia--fonte">${t.rotulo}</cite>
      ${m(g(t.html))}
    </div>
  `}function be(t){return e`
    <article class="ensaio prosa" @click=${ye}>
      <div class="ensaio__abertura">
        ${t.abertura.map(e=>m(g(e)))}
      </div>

      <div class="ensaio__vistas" role="tablist">
        ${t.vistas.map((t,n)=>e`
            <button
              type="button"
              role="tab"
              class="ensaio__vista"
              aria-selected=${Z===n}
              @click=${()=>{Z=n,f()}}
            >
              ${t}
            </button>
          `)}
      </div>

      ${Z===0?e`
            <div class="ensaio__pesquisa">
              ${t.pesquisa.map(e=>m(g(e)))}
              ${t.citadas.map(e=>Q(e,!0))}
            </div>
          `:e`
            <div class="ensaio__citadas">
              ${t.citadas.map(e=>Q(e,!1))}
            </div>
          `}
    </article>
  `}function xe(){queueMicrotask(()=>{let e=document.querySelector(`.poema__corpo, .ensaio`);e!==null&&re(e)})}function Se(i){return xe(),e`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${X(i)}

    ${R?t:e`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!i.anterior_id}
              @click=${()=>r(`poesia/${i.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${n.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!i.proximo_id}
              @click=${()=>r(`poesia/${i.proximo_id??``}`)}
            >
              ${n.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${H.overlay(e`
          <h1 class="titulo--serif">${i.titulo}</h1>
          ${X(i)}
        `,()=>Y(i))}
  `}async function Ce(){let e=L?.id;e!==void 0&&R&&await h({titulo:n.poesia.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await ce(e),ee(n.poesia.excluida),r(`poesia`))}function $(){z!==null&&(z={...z,status:n.acervo.salvando},f(),clearTimeout(V),V=setTimeout(()=>void we(),j))}async function we(){if(z===null)return;if(z.titulo.trim()===``||d(z.conteudo)){z={...z,status:n.acervo.tituloEConteudo},f();return}let e=Date.now(),t=await se({titulo:z.titulo,conteudo:z.conteudo,publicar:0,data_atualizacao:e,...z.id===null?{data_criacao:e}:{id:z.id}});z.id===null&&(z={...z,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),z={...z,status:n.acervo.salvoAs(i(e))},f()}function Te(t){return e`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${n.poesia.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{z={...t,titulo:e.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${t.status}</span>
      </div>

      <kk-editor
        @kk-input=${e=>{z={...t,conteudo:e.detail.value},$()}}
      ></kk-editor>
    </div>
  `}function Ee(){return e`
    <kk-icon-button
      name="info-circle"
      label=${n.poesia.sobre}
      @click=${()=>{I=!I,f()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${n.poesia.nova}
      @click=${()=>r(`poesia/nova`)}
    ></kk-icon-button>
  `}function De(i){let o=W(i,R);return e`
    <kk-icon-button
      name="star"
      variant=${o?`filled`:`outline`}
      label=${o?n.poesia.desfavoritar:n.poesia.favoritar}
      @click=${()=>void G(i,R)}
    ></kk-icon-button>
    ${H.botaoApresentar()}
    ${H.botaoFala(()=>Y(i))}
    <kk-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void ae(i.titulo,a(i.conteudo))}
    ></kk-icon-button>
    ${R?e`
          <kk-icon-button
            name="pencil"
            label=${n.acoes.editar}
            @click=${()=>r(`poesia/editar/${i.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${n.poesia.excluir}
            @click=${()=>void Ce()}
          ></kk-icon-button>
        `:t}
  `}var Oe={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=z?.titulo.trim()??``;return e===``?n.poesia.novaTitulo:e}return L?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return Ee();if(t!==`nova`&&t!==`editar`)return L===null?void 0:De(L)},conteudo(e){let t=he.falhou(e);if(t!==null)return t;let[n]=e.args;return n===void 0?ve():n===`nova`||n===`editar`?z===null?p():Te(z):L===null?p():Se(L)}};export{Oe as telaPoesia};