import{o as e,s as t}from"./banco-DT6T_b91.js";import{n,r}from"./texto-DhKYsM3f.js";import{E as i,T as a,ct as o,et as s,it as c,n as l,ot as u,p as ee,tt as d,u as te,y as ne}from"./index-CUq-xowH.js";import{alternarFavorito as re,chaveFavorito as ie,lerFavoritos as ae}from"./favoritos-DAEWA_Gd.js";import{t as f}from"./unsafe-html-C4j4ejq_.js";import{n as oe,t as se}from"./leitura-JJX3EDLA.js";import{t as ce}from"./compartilhar-DP5Lr6k_.js";import{a as le,n as ue,r as de}from"./acervo-mwj3Kh77.js";var fe=/<p\b[^>]*>[\s\S]*?<\/p>/gi,p=e=>e.replace(/<[^>]*>/g,``).replace(/&nbsp;/g,` `).replace(/&amp;/g,`&`).trim(),pe=/(?:<br\s*\/?>|<\/[a-z]+>|&nbsp;|\s)*[—–-]\s*((?:[123]\s?)?[\p{Lu}][\p{L}]*(?:\s+de\s+\p{Lu}[\p{L}]*)?\.?\s+\d[\d\s:,;.\-–]*)((?:<\/[a-z]+>|\s)*)$/u,me=/^[“"].*[”"][\s.,;]*$/su,he=/^[—–-]\s*((?:[123]\s?)?[\p{Lu}][\p{L}]*(?:\s+de\s+\p{Lu}[\p{L}]*)?\.?\s+\d[\d\s:,;.\-–]*)$/u;function ge(e){let t=/^<p\b[^>]*>([\s\S]*)<\/p>$/i.exec(e)?.[1]??e,n=pe.exec(t),r=n===null?t:t.slice(0,n.index)+(n[2]??``),i=p(r);return{html:r,classe:/^<p\b[^>]*\sclass="([^"]*)"/i.exec(e)?.[1]??``,fonte:n===null?null:p(n[1]??``).replace(/\.$/,``),escritura:me.test(i)}}function _e(e){let t=e.split(/<br\s*\/?>|<\/p>/i).map(e=>p(e)).filter(e=>e!==``);if(t.length===0)return 0;let n=t.map(e=>e.length).sort((e,t)=>e-t),r=Math.floor(n.length/2);return n.length%2==1?n[r]??0:((n[r-1]??0)+(n[r]??0))/2}function m(e){let t=_e(e)<100?`verso`:`prosa`,n=ve((e.match(fe)??[]).map(ge)),r=n.findIndex(e=>p(e.html)!==``),i=r>=0&&(n[r]?.escritura??!1);return{forma:t,tema:i?n[r]??null:null,corpo:i?n.filter((e,t)=>t!==r):n}}function ve(e){let t=[];for(let n of e){let e=t.at(-1),r=p(n.html),i=r===``&&n.fonte!==null?n.fonte:he.exec(r)?.[1]?.replace(/\.$/,``)??null;if(i!==null&&e!==void 0&&e.fonte===null){t[t.length-1]={...e,fonte:i};continue}t.push(n)}return t}var h=()=>t(`poesias`),g=()=>t(`poesias_local`),_=`note_fav_poesias`;async function ye(t,n){let[r,i,a]=await Promise.all([h().todos(),g().todos(),e(`not_poesias`,`not_poesias_local`,t)]);return de(ue(r,i,a),n)}function v(e,t){return(t?g():h()).obter(e)}function be(e){return g().salvar(e)}function xe(e){return g().excluir(e)}function Se(e){let t=m(e.conteudo??``).tema;return t===null?n(e.conteudo,180):r(t.html)}var Ce=[[`Gênesis`,`Gên`],[`Êxodo`,`Êxo`],[`Levítico`,`Lev`],[`Números`,`Núm`],[`Deuteronômio`,`Deu`],[`Josué`,`Jos`],[`Juízes`,`Juí`],[`Rute`],[`1 Samuel`,`1Sa`],[`2 Samuel`,`2Sa`],[`1 Reis`,`1Rs`],[`2 Reis`,`2Rs`],[`1 Crônicas`,`1Cr`],[`2 Crônicas`,`2Cr`],[`Esdras`,`Esd`],[`Neemias`,`Nee`],[`Ester`,`Est`],[`Jó`],[`Salmo`,`Sal`],[`Provérbios`,`Pro`],[`Eclesiastes`,`Ecl`],[`Cântico de Salomão`,`Cân`],[`Isaías`,`Isa`],[`Jeremias`,`Jer`],[`Lamentações`,`Lam`],[`Ezequiel`,`Eze`],[`Daniel`,`Dan`],[`Oseias`,`Os`],[`Joel`],[`Amós`],[`Obadias`,`Oba`],[`Jonas`,`Jon`],[`Miqueias`,`Miq`],[`Naum`],[`Habacuque`,`Hab`],[`Sofonias`,`Sof`],[`Ageu`],[`Zacarias`,`Zac`],[`Malaquias`,`Mal`],[`Mateus`,`Mat`],[`Marcos`,`Mar`],[`Lucas`,`Luc`],[`João`],[`Atos`],[`Romanos`,`Rom`],[`1 Coríntios`,`1Co`],[`2 Coríntios`,`2Co`],[`Gálatas`,`Gál`],[`Efésios`,`Efé`],[`Filipenses`,`Fil`],[`Colossenses`,`Col`],[`1 Tessalonicenses`,`1Te`],[`2 Tessalonicenses`,`2Te`],[`1 Timóteo`,`1Ti`],[`2 Timóteo`,`2Ti`],[`Tito`],[`Filêmon`,`Flm`],[`Hebreus`,`Heb`],[`Tiago`,`Tia`],[`1 Pedro`,`1Pe`],[`2 Pedro`,`2Pe`],[`1 João`,`1Jo`],[`2 João`,`2Jo`],[`3 João`,`3Jo`],[`Judas`,`Jud`],[`Apocalipse`,`Apo`]],y=new Map;for(let[e,t]of Ce.entries())for(let n of t)y.set(n,e);var b=[...y.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),we=RegExp(`(?<![\\p{L}\\p{N}])(${b})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`gu`);function x(e,t){let n=y.get(e);return n===void 0?[]:t.split(`;`).map(e=>e.replace(/\s+/g,``)).filter(e=>e!==``).map(e=>`${n}:${e}`)}var Te=/<p\b[^>]*>[\s\S]*?<\/p>/gi,S=e=>e.replace(/<[^>]*>/g,``).replace(/&nbsp;/g,` `).trim(),Ee=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`),C=RegExp(`^(?:${b})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*[“"]`,`u`);function De(e){let t=(e.match(Te)??[]).filter(e=>S(e)!==``),n=t.map((e,t)=>({i:t,texto:S(e)})).filter(({texto:e})=>e.length<30&&!/[.:”"]$/.test(e)&&!C.test(e)),r=n[0],i=n[1];if(r===void 0||i===void 0||i.i!==r.i+1)return null;let a=[],o=[];for(let e of t.slice(i.i+1)){let t=S(e);if(C.test(t)){let n=RegExp(`^(${b})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`u`).exec(t),r=n===null?void 0:x(n[1]??``,n[2]??``)[0];if(r!==void 0&&n!==null){a.push({chave:r,rotulo:`${n[1]} ${n[2]}`,html:e.replace(/^(<p\b[^>]*>)([\s\S]*)(<\/p>)$/i,(e,t,n,r)=>`${t}${n.replace(RegExp(`^((?:<[^>]*>)*)\\s*(?:${b})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*`,`u`),`$1`)}${r}`)});continue}}o.push(e)}let s=new Set(a.map(e=>e.chave));return{abertura:t.slice(0,r.i),vistas:[r.texto,i.texto],pesquisa:o.map(e=>w(e,s)),citadas:a}}function w(e,t){return e.replace(we,(n,r,i,a)=>{if(/<[^>]*$/.test(e.slice(0,a)))return n;let o=x(r,i).filter(e=>t.has(e));return o.length===0?n:`<button type="button" class="ensaio__ref" data-chaves="${Ee(o.join(` `))}" aria-expanded="false">${n}</button>`})}var T=400,E=1200,D=[],O=``,k=new Set,Oe=!1,A=!1,j=null,M=!1,N=null,P,F=!1,I=null,L=null,R,z,B=new se;function V(){return document.querySelector(`kk-editor`)}function ke(e){let t=V();t!==null&&(t.value=e)}function H(e,t){return ie(t?`local`:`curado`,e.id)}function U(e,t){return k.has(H(e,t))}async function W(e,t){k=re(_,k,H(e,t)),j===null?await G():s()}async function G(){D=await ye(O,e=>U(e,e.local)),s()}async function K(e,t){M=t,j=await v(e,t)??null,j===null&&d(`poesia`)}async function q(e){if(e===null)N={id:null,titulo:``,conteudo:``,status:``};else{let t=await v(e,!0);if(t===void 0){d(`poesia`);return}N={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}s(),ke(N.conteudo)}function J(e){let t=e.args.join(`/`);P===t||F||I!==null||(P=t,F=!0,B.fechar(),Oe||=(k=ae(_),!0),(async()=>{try{let[t,n]=e.args;t===void 0?(j=null,N=null,await G()):t===`nova`?(j=null,await q(null)):t===`editar`?(j=null,await q(Number.parseInt(n??``,10))):t===`local`?(N=null,await K(Number.parseInt(n??``,10),!0)):(N=null,await K(Number.parseInt(t,10),!1))}catch(t){console.error(`poesia: a carga falhou.`,t),I=i(t),L=e}finally{F=!1,s()}})())}function Ae(){let e=L;I=null,L=null,P=void 0,e!==null&&J(e),s()}function je(e){O=e,clearTimeout(R),R=setTimeout(()=>void G(),T)}function Me(e){let t=U(e,e.local);return o`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>d(e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${e.titulo||c.acervo.semTitulo}
          </span>
          ${e.local?o`<kk-badge variant="success" pill>${c.acervo.meu}</kk-badge>`:u}
        </span>
        <span class="cartao__previa">${Se(e)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?c.poesia.desfavoritar:c.poesia.favoritar}
        @click=${()=>void W(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function Ne(){return o`
    ${A?o`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${c.poesia.aviso.map(e=>o`<p>${e}</p>`)}
          </kk-alert>
        `:u}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${c.poesia.buscar}
        .value=${O}
        @kk-input=${e=>je(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${D.length===0?o`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${c.poesia.vazio}</p>
          </div>
        `:o`<div class="cartoes cartoes--duas">${D.map(e=>Me(e))}</div>`}
  `}function Y(e){return`${e.titulo}. ${e.conteudo}`}function Pe(e){let t=[e.classe,e.escritura?`poema__escritura`:``].filter(e=>e!==``).join(` `);return o`
    <p class=${t||u}>
      ${f(l(e.html))}
      ${e.fonte===null?u:o`<cite class="poema__fonte">${e.fonte}</cite>`}
    </p>
  `}function X(e){let t=e.id===175&&!M?De(e.conteudo):null;if(t!==null)return Ie(t);let n=m(e.conteudo);return o`
    <article class="poema poema--${n.forma}">
      ${n.tema===null?u:o`
            <div class="poema__tema">
              <p>${f(l(n.tema.html))}</p>
              ${n.tema.fonte===null?u:o`<cite class="poema__fonte">${n.tema.fonte}</cite>`}
            </div>
          `}
      <div class="prosa poema__corpo">${n.corpo.map(e=>Pe(e))}</div>
    </article>
  `}var Z=0;function Fe(e){let t=e.target?.closest(`.ensaio__ref`);if(t==null)return;let n=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,String(n));let r=t.closest(`.ensaio`);for(let e of(t.dataset.chaves??``).split(` `)){let t=r?.querySelector(`.ensaio__citada[data-chave="${CSS.escape(e)}"]`);t!=null&&(t.hidden=!n)}}function Q(e,t){return o`
    <div
      class="ensaio__citada"
      data-chave=${e.chave}
      ?hidden=${t}
    >
      <cite class="poema__fonte">${e.rotulo}</cite>
      ${f(l(e.html))}
    </div>
  `}function Ie(e){return o`
    <article class="ensaio prosa" @click=${Fe}>
      <div class="ensaio__abertura">
        ${e.abertura.map(e=>f(l(e)))}
      </div>

      <div class="ensaio__vistas" role="tablist">
        ${e.vistas.map((e,t)=>o`
            <button
              type="button"
              role="tab"
              class="ensaio__vista"
              aria-selected=${Z===t}
              @click=${()=>{Z=t,s()}}
            >
              ${e}
            </button>
          `)}
      </div>

      ${Z===0?o`
            <div class="ensaio__pesquisa">
              ${e.pesquisa.map(e=>f(l(e)))}
              ${e.citadas.map(e=>Q(e,!0))}
            </div>
          `:o`
            <div class="ensaio__citadas">
              ${e.citadas.map(e=>Q(e,!1))}
            </div>
          `}
    </article>
  `}function Le(){queueMicrotask(()=>{let e=document.querySelector(`.poema__corpo, .ensaio`);e!==null&&oe(e)})}function Re(e){return Le(),o`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${X(e)}

    ${M?u:o`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!e.anterior_id}
              @click=${()=>d(`poesia/${e.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${c.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!e.proximo_id}
              @click=${()=>d(`poesia/${e.proximo_id??``}`)}
            >
              ${c.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${B.overlay(o`
          <h1 class="titulo--serif">${e.titulo}</h1>
          ${X(e)}
        `,()=>Y(e))}
  `}async function ze(){let e=j?.id;e!==void 0&&M&&await ee({titulo:c.poesia.excluir,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&(await xe(e),te(c.poesia.excluida),d(`poesia`))}function $(){N!==null&&(N={...N,status:c.acervo.salvando},s(),clearTimeout(z),z=setTimeout(()=>void Be(),E))}async function Be(){if(N===null)return;if(N.titulo.trim()===``||le(N.conteudo)){N={...N,status:c.acervo.tituloEConteudo},s();return}let e=Date.now(),t=await be({titulo:N.titulo,conteudo:N.conteudo,publicar:0,data_atualizacao:e,...N.id===null?{data_criacao:e}:{id:N.id}});N.id===null&&(N={...N,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),N={...N,status:c.acervo.salvoAs(ne(e))},s()}function Ve(e){return o`
    <div class="editor">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${c.poesia.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{N={...e,titulo:t.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${e.status}</span>
      </div>

      <kk-editor
        @kk-input=${t=>{N={...e,conteudo:t.detail.value},$()}}
      ></kk-editor>
    </div>
  `}function He(){return o`
    <kk-icon-button
      name="info-circle"
      label=${c.poesia.sobre}
      @click=${()=>{A=!A,s()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${c.poesia.nova}
      @click=${()=>d(`poesia/nova`)}
    ></kk-icon-button>
  `}function Ue(e){let t=U(e,M);return o`
    <kk-icon-button
      name="star"
      variant=${t?`filled`:`outline`}
      label=${t?c.poesia.desfavoritar:c.poesia.favoritar}
      @click=${()=>void W(e,M)}
    ></kk-icon-button>
    ${B.botaoApresentar()}
    ${B.botaoFala(()=>Y(e))}
    <kk-icon-button
      name="share"
      label=${c.leitura.compartilhar}
      @click=${()=>void ce(e.titulo,r(e.conteudo))}
    ></kk-icon-button>
    ${M?o`
          <kk-icon-button
            name="pencil"
            label=${c.acoes.editar}
            @click=${()=>d(`poesia/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${c.poesia.excluir}
            @click=${()=>void ze()}
          ></kk-icon-button>
        `:u}
  `}var We={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=N?.titulo.trim()??``;return e===``?c.poesia.novaTitulo:e}return j?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return He();if(t!==`nova`&&t!==`editar`)return j===null?void 0:Ue(j)},conteudo(e){if(J(e),I!==null)return a(I,Ae);let[t]=e.args;return t===void 0?Ne():t===`nova`||t===`editar`?N===null?o`<div class="carregando"><kk-spinner></kk-spinner></div>`:Ve(N):j===null?o`<div class="carregando"><kk-spinner></kk-spinner></div>`:Re(j)}};export{We as telaPoesia};