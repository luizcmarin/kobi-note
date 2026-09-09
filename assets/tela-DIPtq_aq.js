import{a as e}from"./banco-DuSJp2UL.js";import{$ as t,Q as n,at as r,n as i,nt as a,p as o,rt as s,u as ee,v as te}from"./index-nhXlEhbh.js";import{alternarFavorito as c,chaveFavorito as ne,lerFavoritos as re}from"./favoritos-DAEWA_Gd.js";import{t as l}from"./unsafe-html-CEQvTww4.js";import{i as u,n as d,r as f,t as ie}from"./leitura-C0cTiPcI.js";import{t as ae}from"./compartilhar-CAh9T-yt.js";import{a as oe,n as se,r as ce,t as le}from"./acervo-lW84xSMO.js";var ue=/<p\b[^>]*>[\s\S]*?<\/p>/gi,p=e=>e.replace(/<[^>]*>/g,``).replace(/&nbsp;/g,` `).replace(/&amp;/g,`&`).trim(),de=/(?:<br\s*\/?>|<\/[a-z]+>|&nbsp;|\s)*[—–-]\s*((?:[123]\s?)?[\p{Lu}][\p{L}]*(?:\s+de\s+\p{Lu}[\p{L}]*)?\.?\s+\d[\d\s:,;.\-–]*)((?:<\/[a-z]+>|\s)*)$/u,fe=/^[“"].*[”"][\s.,;]*$/su,pe=/^[—–-]\s*((?:[123]\s?)?[\p{Lu}][\p{L}]*(?:\s+de\s+\p{Lu}[\p{L}]*)?\.?\s+\d[\d\s:,;.\-–]*)$/u;function me(e){let t=/^<p\b[^>]*>([\s\S]*)<\/p>$/i.exec(e)?.[1]??e,n=de.exec(t),r=n===null?t:t.slice(0,n.index)+(n[2]??``),i=p(r);return{html:r,classe:/^<p\b[^>]*\sclass="([^"]*)"/i.exec(e)?.[1]??``,fonte:n===null?null:p(n[1]??``).replace(/\.$/,``),escritura:fe.test(i)}}function he(e){let t=e.split(/<br\s*\/?>|<\/p>/i).map(e=>p(e)).filter(e=>e!==``);if(t.length===0)return 0;let n=t.map(e=>e.length).sort((e,t)=>e-t),r=Math.floor(n.length/2);return n.length%2==1?n[r]??0:((n[r-1]??0)+(n[r]??0))/2}function m(e){let t=he(e)<100?`verso`:`prosa`,n=h((e.match(ue)??[]).map(me)),r=n.findIndex(e=>p(e.html)!==``),i=r>=0&&(n[r]?.escritura??!1);return{forma:t,tema:i?n[r]??null:null,corpo:i?n.filter((e,t)=>t!==r):n}}function h(e){let t=[];for(let n of e){let e=t.at(-1),r=p(n.html),i=r===``&&n.fonte!==null?n.fonte:pe.exec(r)?.[1]?.replace(/\.$/,``)??null;if(i!==null&&e!==void 0&&e.fonte===null){t[t.length-1]={...e,fonte:i};continue}t.push(n)}return t}var g=()=>e(`poesias`),_=()=>e(`poesias_local`),v=`note_fav_poesias`;async function ge(e,t){let[n,r]=await Promise.all([g().todos(),_().todos()]),i=se(n,r),a=le(i,e,e=>[e.titulo,e.conteudo]);return ce(a,t)}function y(e,t){return(t?_():g()).obter(e)}function _e(e){return _().salvar(e)}function ve(e){return _().excluir(e)}function ye(e){let t=m(e.conteudo??``).tema;return t===null?f(e.conteudo,180):u(t.html)}var be=[[`Gênesis`,`Gên`],[`Êxodo`,`Êxo`],[`Levítico`,`Lev`],[`Números`,`Núm`],[`Deuteronômio`,`Deu`],[`Josué`,`Jos`],[`Juízes`,`Juí`],[`Rute`],[`1 Samuel`,`1Sa`],[`2 Samuel`,`2Sa`],[`1 Reis`,`1Rs`],[`2 Reis`,`2Rs`],[`1 Crônicas`,`1Cr`],[`2 Crônicas`,`2Cr`],[`Esdras`,`Esd`],[`Neemias`,`Nee`],[`Ester`,`Est`],[`Jó`],[`Salmo`,`Sal`],[`Provérbios`,`Pro`],[`Eclesiastes`,`Ecl`],[`Cântico de Salomão`,`Cân`],[`Isaías`,`Isa`],[`Jeremias`,`Jer`],[`Lamentações`,`Lam`],[`Ezequiel`,`Eze`],[`Daniel`,`Dan`],[`Oseias`,`Os`],[`Joel`],[`Amós`],[`Obadias`,`Oba`],[`Jonas`,`Jon`],[`Miqueias`,`Miq`],[`Naum`],[`Habacuque`,`Hab`],[`Sofonias`,`Sof`],[`Ageu`],[`Zacarias`,`Zac`],[`Malaquias`,`Mal`],[`Mateus`,`Mat`],[`Marcos`,`Mar`],[`Lucas`,`Luc`],[`João`],[`Atos`],[`Romanos`,`Rom`],[`1 Coríntios`,`1Co`],[`2 Coríntios`,`2Co`],[`Gálatas`,`Gál`],[`Efésios`,`Efé`],[`Filipenses`,`Fil`],[`Colossenses`,`Col`],[`1 Tessalonicenses`,`1Te`],[`2 Tessalonicenses`,`2Te`],[`1 Timóteo`,`1Ti`],[`2 Timóteo`,`2Ti`],[`Tito`],[`Filêmon`,`Flm`],[`Hebreus`,`Heb`],[`Tiago`,`Tia`],[`1 Pedro`,`1Pe`],[`2 Pedro`,`2Pe`],[`1 João`,`1Jo`],[`2 João`,`2Jo`],[`3 João`,`3Jo`],[`Judas`,`Jud`],[`Apocalipse`,`Apo`]],b=new Map;for(let[e,t]of be.entries())for(let n of t)b.set(n,e);var x=[...b.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),xe=RegExp(`(?<![\\p{L}\\p{N}])(${x})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`gu`);function S(e,t){let n=b.get(e);return n===void 0?[]:t.split(`;`).map(e=>e.replace(/\s+/g,``)).filter(e=>e!==``).map(e=>`${n}:${e}`)}var Se=/<p\b[^>]*>[\s\S]*?<\/p>/gi,C=e=>e.replace(/<[^>]*>/g,``).replace(/&nbsp;/g,` `).trim(),w=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`),T=RegExp(`^(?:${x})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*[“"]`,`u`);function E(e){let t=(e.match(Se)??[]).filter(e=>C(e)!==``),n=t.map((e,t)=>({i:t,texto:C(e)})).filter(({texto:e})=>e.length<30&&!/[.:”"]$/.test(e)&&!T.test(e)),r=n[0],i=n[1];if(r===void 0||i===void 0||i.i!==r.i+1)return null;let a=[],o=[];for(let e of t.slice(i.i+1)){let t=C(e);if(T.test(t)){let n=RegExp(`^(${x})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`u`).exec(t),r=n===null?void 0:S(n[1]??``,n[2]??``)[0];if(r!==void 0&&n!==null){a.push({chave:r,rotulo:`${n[1]} ${n[2]}`,html:e.replace(/^(<p\b[^>]*>)([\s\S]*)(<\/p>)$/i,(e,t,n,r)=>`${t}${n.replace(RegExp(`^((?:<[^>]*>)*)\\s*(?:${x})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*`,`u`),`$1`)}${r}`)});continue}}o.push(e)}let s=new Set(a.map(e=>e.chave));return{abertura:t.slice(0,r.i),vistas:[r.texto,i.texto],pesquisa:o.map(e=>D(e,s)),citadas:a}}function D(e,t){return e.replace(xe,(n,r,i,a)=>{if(/<[^>]*$/.test(e.slice(0,a)))return n;let o=S(r,i).filter(e=>t.has(e));return o.length===0?n:`<button type="button" class="ensaio__ref" data-chaves="${w(o.join(` `))}" aria-expanded="false">${n}</button>`})}var O=400,k=1200,A=[],j=``,M=new Set,Ce=!1,N=!1,P=null,F=!1,I=null,L,R=!1,z,B,V=new ie;function H(){return document.querySelector(`kk-editor`)}function we(e){let t=H();t!==null&&(t.value=e)}function U(e,t){return ne(t?`local`:`curado`,e.id)}function W(e,t){return M.has(U(e,t))}async function G(e,t){M=c(v,M,U(e,t)),P===null?await K():n()}async function K(){A=await ge(j,e=>W(e,e.local)),n()}async function q(e,n){F=n,P=await y(e,n)??null,P===null&&t(`poesia`)}async function J(e){if(e===null)I={id:null,titulo:``,conteudo:``,status:``};else{let n=await y(e,!0);if(n===void 0){t(`poesia`);return}I={id:n.id??null,titulo:n.titulo,conteudo:n.conteudo,status:``}}n(),we(I.conteudo)}function Te(e){let t=e.args.join(`/`);L===t||R||(L=t,R=!0,V.fechar(),Ce||=(M=re(v),!0),(async()=>{try{let[t,n]=e.args;t===void 0?(P=null,I=null,await K()):t===`nova`?(P=null,await J(null)):t===`editar`?(P=null,await J(Number.parseInt(n??``,10))):t===`local`?(I=null,await q(Number.parseInt(n??``,10),!0)):(I=null,await q(Number.parseInt(t,10),!1))}finally{R=!1,n()}})())}function Ee(e){j=e,clearTimeout(z),z=setTimeout(()=>void K(),O)}function De(e){let n=W(e,e.local);return r`
    <div class="cartao cartao--com-acao" ?data-favorito=${n}>
      <button
        class="cartao__alvo"
        @click=${()=>t(e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${e.titulo||a.acervo.semTitulo}
          </span>
          ${e.local?r`<kk-badge variant="success" pill>${a.acervo.meu}</kk-badge>`:s}
        </span>
        <span class="cartao__previa">${ye(e)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${n?`filled`:`outline`}
        label=${n?a.poesia.desfavoritar:a.poesia.favoritar}
        @click=${()=>void G(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function Oe(){return r`
    ${N?r`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${a.poesia.aviso.map(e=>r`<p>${e}</p>`)}
          </kk-alert>
        `:s}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${a.poesia.buscar}
        .value=${j}
        @kk-input=${e=>Ee(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${A.length===0?r`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${a.poesia.vazio}</p>
          </div>
        `:r`<div class="cartoes cartoes--duas">${A.map(e=>De(e))}</div>`}
  `}function Y(e){return`${e.titulo}. ${e.conteudo}`}function ke(e){let t=[e.classe,e.escritura?`poema__escritura`:``].filter(e=>e!==``).join(` `);return r`
    <p class=${t||s}>
      ${l(i(e.html))}
      ${e.fonte===null?s:r`<cite class="poema__fonte">${e.fonte}</cite>`}
    </p>
  `}function X(e){let t=e.id===175&&!F?E(e.conteudo):null;if(t!==null)return je(t);let n=m(e.conteudo);return r`
    <article class="poema poema--${n.forma}">
      ${n.tema===null?s:r`
            <div class="poema__tema">
              <p>${l(i(n.tema.html))}</p>
              ${n.tema.fonte===null?s:r`<cite class="poema__fonte">${n.tema.fonte}</cite>`}
            </div>
          `}
      <div class="prosa poema__corpo">${n.corpo.map(e=>ke(e))}</div>
    </article>
  `}var Z=0;function Ae(e){let t=e.target?.closest(`.ensaio__ref`);if(t==null)return;let n=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,String(n));let r=t.closest(`.ensaio`);for(let e of(t.dataset.chaves??``).split(` `)){let t=r?.querySelector(`.ensaio__citada[data-chave="${CSS.escape(e)}"]`);t!=null&&(t.hidden=!n)}}function Q(e,t){return r`
    <div
      class="ensaio__citada"
      data-chave=${e.chave}
      ?hidden=${t}
    >
      <cite class="poema__fonte">${e.rotulo}</cite>
      ${l(i(e.html))}
    </div>
  `}function je(e){return r`
    <article class="ensaio prosa" @click=${Ae}>
      <div class="ensaio__abertura">
        ${e.abertura.map(e=>l(i(e)))}
      </div>

      <div class="ensaio__vistas" role="tablist">
        ${e.vistas.map((e,t)=>r`
            <button
              type="button"
              role="tab"
              class="ensaio__vista"
              aria-selected=${Z===t}
              @click=${()=>{Z=t,n()}}
            >
              ${e}
            </button>
          `)}
      </div>

      ${Z===0?r`
            <div class="ensaio__pesquisa">
              ${e.pesquisa.map(e=>l(i(e)))}
              ${e.citadas.map(e=>Q(e,!0))}
            </div>
          `:r`
            <div class="ensaio__citadas">
              ${e.citadas.map(e=>Q(e,!1))}
            </div>
          `}
    </article>
  `}function Me(){queueMicrotask(()=>{let e=document.querySelector(`.poema__corpo, .ensaio`);e!==null&&d(e)})}function Ne(e){return Me(),r`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${X(e)}

    ${F?s:r`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!e.anterior_id}
              @click=${()=>t(`poesia/${e.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${a.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!e.proximo_id}
              @click=${()=>t(`poesia/${e.proximo_id??``}`)}
            >
              ${a.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${V.overlay(r`
          <h1 class="titulo--serif">${e.titulo}</h1>
          ${X(e)}
        `,()=>Y(e))}
  `}async function Pe(){let e=P?.id;e!==void 0&&F&&await o({titulo:a.poesia.excluir,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await ve(e),ee(a.poesia.excluida),t(`poesia`))}function $(){I!==null&&(I={...I,status:a.acervo.salvando},n(),clearTimeout(B),B=setTimeout(()=>void Fe(),k))}async function Fe(){if(I===null)return;if(I.titulo.trim()===``||oe(I.conteudo)){I={...I,status:a.acervo.tituloEConteudo},n();return}let e=Date.now(),t=await _e({titulo:I.titulo,conteudo:I.conteudo,publicar:0,data_atualizacao:e,...I.id===null?{data_criacao:e}:{id:I.id}});I.id===null&&(I={...I,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),I={...I,status:a.acervo.salvoAs(te(e))},n()}function Ie(e){return r`
    <div class="editor">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${a.poesia.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{I={...e,titulo:t.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{I={...e,conteudo:t.detail.value},$()}}
      ></kk-editor>
    </div>
  `}function Le(){return r`
    <kk-icon-button
      name="info-circle"
      label=${a.poesia.sobre}
      @click=${()=>{N=!N,n()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${a.poesia.nova}
      @click=${()=>t(`poesia/nova`)}
    ></kk-icon-button>
  `}function Re(e){let n=W(e,F);return r`
    <kk-icon-button
      name="star"
      variant=${n?`filled`:`outline`}
      label=${n?a.poesia.desfavoritar:a.poesia.favoritar}
      @click=${()=>void G(e,F)}
    ></kk-icon-button>
    ${V.botaoApresentar()}
    ${V.botaoFala(()=>Y(e))}
    <kk-icon-button
      name="share"
      label=${a.leitura.compartilhar}
      @click=${()=>void ae(e.titulo,u(e.conteudo))}
    ></kk-icon-button>
    ${F?r`
          <kk-icon-button
            name="pencil"
            label=${a.acoes.editar}
            @click=${()=>t(`poesia/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${a.poesia.excluir}
            @click=${()=>void Pe()}
          ></kk-icon-button>
        `:s}
  `}var ze={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=I?.titulo.trim()??``;return e===``?a.poesia.novaTitulo:e}return P?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return Le();if(t!==`nova`&&t!==`editar`)return P===null?void 0:Re(P)},conteudo(e){Te(e);let[t]=e.args;return t===void 0?Oe():t===`nova`||t===`editar`?I===null?r`<div class="carregando"><kk-spinner></kk-spinner></div>`:Ie(I):P===null?r`<div class="carregando"><kk-spinner></kk-spinner></div>`:Ne(P)}};export{ze as telaPoesia};