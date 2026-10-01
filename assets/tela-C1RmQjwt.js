import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-DQE9Hi7n.js";import{r}from"./rotas-D12eslN_.js";import{r as i}from"./data-7IMAkOFv.js";import{t as a}from"./html-C5yDSNPC.js";import{i as o}from"./texto-BZYXsRJ8.js";import{o as s,s as c}from"./banco-C3Dzhq4B.js";import{i as ee,n as l,o as u}from"./acervo-Bp775EqU.js";import{R as d,c as te,d as f,l as p,m,n as h}from"./index-DOFaeRHJ.js";import{alternarFavorito as g,chaveFavorito as _,lerFavoritos as v}from"./favoritos-BACwLqIZ.js";import{n as y}from"./carga-FJ-D8QI_.js";import{n as ne,t as re}from"./editor-CSRQZGXQ.js";import{n as ie,t as ae}from"./leitura-DnNvWuq4.js";import{t as oe}from"./compartilhar-CBAYF5NK.js";var b=()=>c(`poesias`),x=()=>c(`poesias_local`),S=`note_fav_poesias`;async function C(e,t){let[n,r,i]=await Promise.all([b().todos(),x().todos(),s(`not_poesias`,`not_poesias_local`,e)]);return ee(l(n,r,i),t)}function w(e,t){return(t?x():b()).obter(e)}function se(e){return x().salvar(e)}function ce(e){return x().excluir(e)}var le=/<p\b[^>]*\bclass="[^"]*\bpoesia--tema\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i;function ue(e){let t=le.exec(e.conteudo??``)?.[1];return t===void 0?ne(e.conteudo,180):a(t)}var de=[[`Gênesis`,`Gên`],[`Êxodo`,`Êxo`],[`Levítico`,`Lev`],[`Números`,`Núm`],[`Deuteronômio`,`Deu`],[`Josué`,`Jos`],[`Juízes`,`Juí`],[`Rute`],[`1 Samuel`,`1Sa`],[`2 Samuel`,`2Sa`],[`1 Reis`,`1Rs`],[`2 Reis`,`2Rs`],[`1 Crônicas`,`1Cr`],[`2 Crônicas`,`2Cr`],[`Esdras`,`Esd`],[`Neemias`,`Nee`],[`Ester`,`Est`],[`Jó`],[`Salmo`,`Sal`],[`Provérbios`,`Pro`],[`Eclesiastes`,`Ecl`],[`Cântico de Salomão`,`Cân`],[`Isaías`,`Isa`],[`Jeremias`,`Jer`],[`Lamentações`,`Lam`],[`Ezequiel`,`Eze`],[`Daniel`,`Dan`],[`Oseias`,`Os`],[`Joel`],[`Amós`],[`Obadias`,`Oba`],[`Jonas`,`Jon`],[`Miqueias`,`Miq`],[`Naum`],[`Habacuque`,`Hab`],[`Sofonias`,`Sof`],[`Ageu`],[`Zacarias`,`Zac`],[`Malaquias`,`Mal`],[`Mateus`,`Mat`],[`Marcos`,`Mar`],[`Lucas`,`Luc`],[`João`],[`Atos`],[`Romanos`,`Rom`],[`1 Coríntios`,`1Co`],[`2 Coríntios`,`2Co`],[`Gálatas`,`Gál`],[`Efésios`,`Efé`],[`Filipenses`,`Fil`],[`Colossenses`,`Col`],[`1 Tessalonicenses`,`1Te`],[`2 Tessalonicenses`,`2Te`],[`1 Timóteo`,`1Ti`],[`2 Timóteo`,`2Ti`],[`Tito`],[`Filêmon`,`Flm`],[`Hebreus`,`Heb`],[`Tiago`,`Tia`],[`1 Pedro`,`1Pe`],[`2 Pedro`,`2Pe`],[`1 João`,`1Jo`],[`2 João`,`2Jo`],[`3 João`,`3Jo`],[`Judas`,`Jud`],[`Apocalipse`,`Apo`]],T=new Map;for(let[e,t]of de.entries())for(let n of t)T.set(n,e);var E=[...T.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),fe=RegExp(`(?<![\\p{L}\\p{N}])(${E})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`gu`);function D(e,t){let n=T.get(e);return n===void 0?[]:t.split(`;`).map(e=>e.replace(/\s+/g,``)).filter(e=>e!==``).map(e=>`${n}:${e}`)}var pe=/<p\b[^>]*>[\s\S]*?<\/p>/gi,O=RegExp(`^(?:${E})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*[“"]`,`u`);function me(e){let t=(e.match(pe)??[]).filter(e=>a(e)!==``),n=t.map((e,t)=>({i:t,texto:a(e)})).filter(({texto:e})=>e.length<30&&!/[.:”"]$/.test(e)&&!O.test(e)),r=n[0],i=n[1];if(r===void 0||i===void 0||i.i!==r.i+1)return null;let o=[],s=[];for(let e of t.slice(i.i+1)){let t=a(e);if(O.test(t)){let n=RegExp(`^(${E})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`u`).exec(t),r=n===null?void 0:D(n[1]??``,n[2]??``)[0];if(r!==void 0&&n!==null){o.push({chave:r,rotulo:`${n[1]} ${n[2]}`,html:e.replace(/^(<p\b[^>]*>)([\s\S]*)(<\/p>)$/i,(e,t,n,r)=>`${t}${n.replace(RegExp(`^((?:<[^>]*>)*)\\s*(?:${E})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*`,`u`),`$1`)}${r}`)});continue}}s.push(e)}let c=new Set(o.map(e=>e.chave));return{abertura:t.slice(0,r.i),vistas:[r.texto,i.texto],pesquisa:s.map(e=>k(e,c)),citadas:o}}function k(e,t){return e.replace(fe,(n,r,i,a)=>{if(/<[^>]*$/.test(e.slice(0,a)))return n;let s=D(r,i).filter(e=>t.has(e));return s.length===0?n:`<button type="button" class="ensaio__ref" data-chaves="${o(s.join(` `))}" aria-expanded="false">${n}</button>`})}var A=400,j=1200,M=[],N=``,P=new Set,F=!1,I=!1,L=null,R=!1,z=null,B,V,H=new ae;function U(e,t){return _(t?`local`:`curado`,e.id)}function W(e,t){return P.has(U(e,t))}async function G(e,t){P=g(S,P,U(e,t)),L===null?await K():d()}async function K(){M=await C(N,e=>W(e,e.local)),d()}async function q(e,t){R=t,L=await w(e,t)??null,L===null&&r(`poesia`)}async function J(e){if(e===null)z={id:null,titulo:``,conteudo:``,status:``};else{let t=await w(e,!0);if(t===void 0){r(`poesia`);return}z={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}d(),re(z.conteudo)}var he=new y(`poesia`,async e=>{H.fechar(),F||=(P=v(S),!0);let[t,n]=e.args;t===void 0?(L=null,z=null,await K()):t===`nova`?(L=null,await J(null)):t===`editar`?(L=null,await J(Number.parseInt(n??``,10))):t===`local`?(z=null,await q(Number.parseInt(n??``,10),!0)):(z=null,await q(Number.parseInt(t,10),!1))});function ge(e){N=e,clearTimeout(B),B=setTimeout(()=>void K(),A)}function _e(i){let a=W(i,i.local);return e`
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
  `}function Y(e){return`${e.titulo}. ${e.conteudo}`}function X(t){let n=t.id===175&&!R?me(t.conteudo):null;return n===null?e`
    <article class="poema">
      <div class="prosa poema__corpo">${p(h(t.conteudo))}</div>
    </article>
  `:be(n)}var Z=0;function ye(e){let t=e.target?.closest(`.ensaio__ref`);if(t==null)return;let n=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,String(n));let r=t.closest(`.ensaio`);for(let e of(t.dataset.chaves??``).split(` `)){let t=r?.querySelector(`.ensaio__citada[data-chave="${CSS.escape(e)}"]`);t!=null&&(t.hidden=!n)}}function Q(t,n){return e`
    <div
      class="ensaio__citada"
      data-chave=${t.chave}
      ?hidden=${n}
    >
      <cite class="poesia--fonte">${t.rotulo}</cite>
      ${p(h(t.html))}
    </div>
  `}function be(t){return e`
    <article class="ensaio prosa" @click=${ye}>
      <div class="ensaio__abertura">
        ${t.abertura.map(e=>p(h(e)))}
      </div>

      <div class="ensaio__vistas" role="tablist">
        ${t.vistas.map((t,n)=>e`
            <button
              type="button"
              role="tab"
              class="ensaio__vista"
              aria-selected=${Z===n}
              @click=${()=>{Z=n,d()}}
            >
              ${t}
            </button>
          `)}
      </div>

      ${Z===0?e`
            <div class="ensaio__pesquisa">
              ${t.pesquisa.map(e=>p(h(e)))}
              ${t.citadas.map(e=>Q(e,!0))}
            </div>
          `:e`
            <div class="ensaio__citadas">
              ${t.citadas.map(e=>Q(e,!1))}
            </div>
          `}
    </article>
  `}function xe(){queueMicrotask(()=>{let e=document.querySelector(`.poema__corpo, .ensaio`);e!==null&&ie(e)})}function Se(i){return xe(),e`
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
  `}async function Ce(){let e=L?.id;e!==void 0&&R&&await m({titulo:n.poesia.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await ce(e),te(n.poesia.excluida),r(`poesia`))}function $(){z!==null&&(z={...z,status:n.acervo.salvando},d(),clearTimeout(V),V=setTimeout(()=>void we(),j))}async function we(){if(z===null)return;if(z.titulo.trim()===``||u(z.conteudo)){z={...z,status:n.acervo.tituloEConteudo},d();return}let e=Date.now(),t=await se({titulo:z.titulo,conteudo:z.conteudo,publicar:0,data_atualizacao:e,...z.id===null?{data_criacao:e}:{id:z.id}});z.id===null&&(z={...z,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),z={...z,status:n.acervo.salvoAs(i(e))},d()}function Te(t){return e`
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
      @click=${()=>{I=!I,d()}}
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
      @click=${()=>void oe(i.titulo,a(i.conteudo))}
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
  `}var Oe={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=z?.titulo.trim()??``;return e===``?n.poesia.novaTitulo:e}return L?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return Ee();if(t!==`nova`&&t!==`editar`)return L===null?void 0:De(L)},conteudo(e){let t=he.falhou(e);if(t!==null)return t;let[n]=e.args;return n===void 0?ve():n===`nova`||n===`editar`?z===null?f():Te(z):L===null?f():Se(L)}};export{Oe as telaPoesia};