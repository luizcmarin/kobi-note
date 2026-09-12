import{o as e,s as t}from"./banco-RAWaFDfp.js";import{n,r}from"./texto-DhKYsM3f.js";import{J as i,ct as a,et as o,g as s,it as c,m as l,n as u,ot as d,tt as f,v as ee,y as te}from"./index-BGY_4f1A.js";import{alternarFavorito as ne,chaveFavorito as p,lerFavoritos as m}from"./favoritos-DAEWA_Gd.js";import{t as h}from"./unsafe-html-DKex6wD1.js";import{n as g,t as re}from"./leitura-Bg_AxSq3.js";import{t as ie}from"./compartilhar-BoSMErxz.js";import{a as ae,n as oe,r as se}from"./acervo-mwj3Kh77.js";var _=()=>t(`poesias`),v=()=>t(`poesias_local`),y=`note_fav_poesias`;async function ce(t,n){let[r,i,a]=await Promise.all([_().todos(),v().todos(),e(`not_poesias`,`not_poesias_local`,t)]);return se(oe(r,i,a),n)}function b(e,t){return(t?v():_()).obter(e)}function le(e){return v().salvar(e)}function ue(e){return v().excluir(e)}var x=/<p\b[^>]*\bclass="[^"]*\bpoesia--tema\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i;function de(e){let t=x.exec(e.conteudo??``)?.[1];return t===void 0?n(e.conteudo,180):r(t)}var fe=[[`Gênesis`,`Gên`],[`Êxodo`,`Êxo`],[`Levítico`,`Lev`],[`Números`,`Núm`],[`Deuteronômio`,`Deu`],[`Josué`,`Jos`],[`Juízes`,`Juí`],[`Rute`],[`1 Samuel`,`1Sa`],[`2 Samuel`,`2Sa`],[`1 Reis`,`1Rs`],[`2 Reis`,`2Rs`],[`1 Crônicas`,`1Cr`],[`2 Crônicas`,`2Cr`],[`Esdras`,`Esd`],[`Neemias`,`Nee`],[`Ester`,`Est`],[`Jó`],[`Salmo`,`Sal`],[`Provérbios`,`Pro`],[`Eclesiastes`,`Ecl`],[`Cântico de Salomão`,`Cân`],[`Isaías`,`Isa`],[`Jeremias`,`Jer`],[`Lamentações`,`Lam`],[`Ezequiel`,`Eze`],[`Daniel`,`Dan`],[`Oseias`,`Os`],[`Joel`],[`Amós`],[`Obadias`,`Oba`],[`Jonas`,`Jon`],[`Miqueias`,`Miq`],[`Naum`],[`Habacuque`,`Hab`],[`Sofonias`,`Sof`],[`Ageu`],[`Zacarias`,`Zac`],[`Malaquias`,`Mal`],[`Mateus`,`Mat`],[`Marcos`,`Mar`],[`Lucas`,`Luc`],[`João`],[`Atos`],[`Romanos`,`Rom`],[`1 Coríntios`,`1Co`],[`2 Coríntios`,`2Co`],[`Gálatas`,`Gál`],[`Efésios`,`Efé`],[`Filipenses`,`Fil`],[`Colossenses`,`Col`],[`1 Tessalonicenses`,`1Te`],[`2 Tessalonicenses`,`2Te`],[`1 Timóteo`,`1Ti`],[`2 Timóteo`,`2Ti`],[`Tito`],[`Filêmon`,`Flm`],[`Hebreus`,`Heb`],[`Tiago`,`Tia`],[`1 Pedro`,`1Pe`],[`2 Pedro`,`2Pe`],[`1 João`,`1Jo`],[`2 João`,`2Jo`],[`3 João`,`3Jo`],[`Judas`,`Jud`],[`Apocalipse`,`Apo`]],S=new Map;for(let[e,t]of fe.entries())for(let n of t)S.set(n,e);var C=[...S.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),pe=RegExp(`(?<![\\p{L}\\p{N}])(${C})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`gu`);function w(e,t){let n=S.get(e);return n===void 0?[]:t.split(`;`).map(e=>e.replace(/\s+/g,``)).filter(e=>e!==``).map(e=>`${n}:${e}`)}var me=/<p\b[^>]*>[\s\S]*?<\/p>/gi,T=e=>e.replace(/<[^>]*>/g,``).replace(/&nbsp;/g,` `).trim(),he=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`),E=RegExp(`^(?:${C})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*[“"]`,`u`);function ge(e){let t=(e.match(me)??[]).filter(e=>T(e)!==``),n=t.map((e,t)=>({i:t,texto:T(e)})).filter(({texto:e})=>e.length<30&&!/[.:”"]$/.test(e)&&!E.test(e)),r=n[0],i=n[1];if(r===void 0||i===void 0||i.i!==r.i+1)return null;let a=[],o=[];for(let e of t.slice(i.i+1)){let t=T(e);if(E.test(t)){let n=RegExp(`^(${C})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`u`).exec(t),r=n===null?void 0:w(n[1]??``,n[2]??``)[0];if(r!==void 0&&n!==null){a.push({chave:r,rotulo:`${n[1]} ${n[2]}`,html:e.replace(/^(<p\b[^>]*>)([\s\S]*)(<\/p>)$/i,(e,t,n,r)=>`${t}${n.replace(RegExp(`^((?:<[^>]*>)*)\\s*(?:${C})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*`,`u`),`$1`)}${r}`)});continue}}o.push(e)}let s=new Set(a.map(e=>e.chave));return{abertura:t.slice(0,r.i),vistas:[r.texto,i.texto],pesquisa:o.map(e=>_e(e,s)),citadas:a}}function _e(e,t){return e.replace(pe,(n,r,i,a)=>{if(/<[^>]*$/.test(e.slice(0,a)))return n;let o=w(r,i).filter(e=>t.has(e));return o.length===0?n:`<button type="button" class="ensaio__ref" data-chaves="${he(o.join(` `))}" aria-expanded="false">${n}</button>`})}var ve=400,ye=1200,D=[],O=``,k=new Set,A=!1,j=!1,M=null,N=!1,P=null,F,I=!1,L=null,R=null,z,B,V=new re;function be(){return document.querySelector(`kk-editor`)}function xe(e){let t=be();t!==null&&(t.value=e)}function H(e,t){return p(t?`local`:`curado`,e.id)}function U(e,t){return k.has(H(e,t))}async function W(e,t){k=ne(y,k,H(e,t)),M===null?await G():o()}async function G(){D=await ce(O,e=>U(e,e.local)),o()}async function K(e,t){N=t,M=await b(e,t)??null,M===null&&f(`poesia`)}async function q(e){if(e===null)P={id:null,titulo:``,conteudo:``,status:``};else{let t=await b(e,!0);if(t===void 0){f(`poesia`);return}P={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}o(),xe(P.conteudo)}function J(e){let t=e.args.join(`/`);F===t||I||L!==null||(F=t,I=!0,V.fechar(),A||=(k=m(y),!0),(async()=>{try{let[t,n]=e.args;t===void 0?(M=null,P=null,await G()):t===`nova`?(M=null,await q(null)):t===`editar`?(M=null,await q(Number.parseInt(n??``,10))):t===`local`?(P=null,await K(Number.parseInt(n??``,10),!0)):(P=null,await K(Number.parseInt(t,10),!1))}catch(t){console.error(`poesia: a carga falhou.`,t),L=te(t),R=e}finally{I=!1,o()}})())}function Se(){let e=R;L=null,R=null,F=void 0,e!==null&&J(e),o()}function Ce(e){O=e,clearTimeout(z),z=setTimeout(()=>void G(),ve)}function we(e){let t=U(e,e.local);return a`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>f(e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${e.titulo||c.acervo.semTitulo}
          </span>
          ${e.local?a`<kk-badge variant="success" pill>${c.acervo.meu}</kk-badge>`:d}
        </span>
        <span class="cartao__previa">${de(e)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?c.poesia.desfavoritar:c.poesia.favoritar}
        @click=${()=>void W(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function Te(){return a`
    ${j?a`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${c.poesia.aviso.map(e=>a`<p>${e}</p>`)}
          </kk-alert>
        `:d}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${c.poesia.buscar}
        .value=${O}
        @kk-input=${e=>Ce(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${D.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${c.poesia.vazio}</p>
          </div>
        `:a`<div class="cartoes cartoes--duas">${D.map(e=>we(e))}</div>`}
  `}function Y(e){return`${e.titulo}. ${e.conteudo}`}function X(e){let t=e.id===175&&!N?ge(e.conteudo):null;return t===null?a`
    <article class="poema">
      <div class="prosa poema__corpo">${h(u(e.conteudo))}</div>
    </article>
  `:De(t)}var Z=0;function Ee(e){let t=e.target?.closest(`.ensaio__ref`);if(t==null)return;let n=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,String(n));let r=t.closest(`.ensaio`);for(let e of(t.dataset.chaves??``).split(` `)){let t=r?.querySelector(`.ensaio__citada[data-chave="${CSS.escape(e)}"]`);t!=null&&(t.hidden=!n)}}function Q(e,t){return a`
    <div
      class="ensaio__citada"
      data-chave=${e.chave}
      ?hidden=${t}
    >
      <cite class="poesia--fonte">${e.rotulo}</cite>
      ${h(u(e.html))}
    </div>
  `}function De(e){return a`
    <article class="ensaio prosa" @click=${Ee}>
      <div class="ensaio__abertura">
        ${e.abertura.map(e=>h(u(e)))}
      </div>

      <div class="ensaio__vistas" role="tablist">
        ${e.vistas.map((e,t)=>a`
            <button
              type="button"
              role="tab"
              class="ensaio__vista"
              aria-selected=${Z===t}
              @click=${()=>{Z=t,o()}}
            >
              ${e}
            </button>
          `)}
      </div>

      ${Z===0?a`
            <div class="ensaio__pesquisa">
              ${e.pesquisa.map(e=>h(u(e)))}
              ${e.citadas.map(e=>Q(e,!0))}
            </div>
          `:a`
            <div class="ensaio__citadas">
              ${e.citadas.map(e=>Q(e,!1))}
            </div>
          `}
    </article>
  `}function Oe(){queueMicrotask(()=>{let e=document.querySelector(`.poema__corpo, .ensaio`);e!==null&&g(e)})}function ke(e){return Oe(),a`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${X(e)}

    ${N?d:a`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!e.anterior_id}
              @click=${()=>f(`poesia/${e.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${c.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!e.proximo_id}
              @click=${()=>f(`poesia/${e.proximo_id??``}`)}
            >
              ${c.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${V.overlay(a`
          <h1 class="titulo--serif">${e.titulo}</h1>
          ${X(e)}
        `,()=>Y(e))}
  `}async function Ae(){let e=M?.id;e!==void 0&&N&&await s({titulo:c.poesia.excluir,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&(await ue(e),l(c.poesia.excluida),f(`poesia`))}function $(){P!==null&&(P={...P,status:c.acervo.salvando},o(),clearTimeout(B),B=setTimeout(()=>void je(),ye))}async function je(){if(P===null)return;if(P.titulo.trim()===``||ae(P.conteudo)){P={...P,status:c.acervo.tituloEConteudo},o();return}let e=Date.now(),t=await le({titulo:P.titulo,conteudo:P.conteudo,publicar:0,data_atualizacao:e,...P.id===null?{data_criacao:e}:{id:P.id}});P.id===null&&(P={...P,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),P={...P,status:c.acervo.salvoAs(i(e))},o()}function Me(e){return a`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${c.poesia.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{P={...e,titulo:t.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{P={...e,conteudo:t.detail.value},$()}}
      ></kk-editor>
    </div>
  `}function Ne(){return a`
    <kk-icon-button
      name="info-circle"
      label=${c.poesia.sobre}
      @click=${()=>{j=!j,o()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${c.poesia.nova}
      @click=${()=>f(`poesia/nova`)}
    ></kk-icon-button>
  `}function Pe(e){let t=U(e,N);return a`
    <kk-icon-button
      name="star"
      variant=${t?`filled`:`outline`}
      label=${t?c.poesia.desfavoritar:c.poesia.favoritar}
      @click=${()=>void W(e,N)}
    ></kk-icon-button>
    ${V.botaoApresentar()}
    ${V.botaoFala(()=>Y(e))}
    <kk-icon-button
      name="share"
      label=${c.leitura.compartilhar}
      @click=${()=>void ie(e.titulo,r(e.conteudo))}
    ></kk-icon-button>
    ${N?a`
          <kk-icon-button
            name="pencil"
            label=${c.acoes.editar}
            @click=${()=>f(`poesia/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${c.poesia.excluir}
            @click=${()=>void Ae()}
          ></kk-icon-button>
        `:d}
  `}var Fe={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=P?.titulo.trim()??``;return e===``?c.poesia.novaTitulo:e}return M?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return Ne();if(t!==`nova`&&t!==`editar`)return M===null?void 0:Pe(M)},conteudo(e){if(J(e),L!==null)return ee(L,Se);let[t]=e.args;return t===void 0?Te():t===`nova`||t===`editar`?P===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:Me(P):M===null?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:ke(M)}};export{Fe as telaPoesia};