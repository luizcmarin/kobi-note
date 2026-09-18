import{o as e,s as t}from"./banco-DQ9IVRRt.js";import{n,r}from"./texto-DhKYsM3f.js";import{Q as i,ft as a,g as o,m as s,mt as c,n as l,ot as u,st as d,ut as f,v as ee,y as te}from"./index-D3l2wNoD.js";import{alternarFavorito as ne,chaveFavorito as re,lerFavoritos as p}from"./favoritos-DAEWA_Gd.js";import{t as m}from"./unsafe-html-B2SvIKo9.js";import{n as h,t as ie}from"./leitura-DylfuAMa.js";import{t as g}from"./compartilhar-BWot3PXd.js";import{a as ae,n as oe,r as se}from"./acervo-mwj3Kh77.js";var _=()=>t(`poesias`),v=()=>t(`poesias_local`),y=`note_fav_poesias`;async function ce(t,n){let[r,i,a]=await Promise.all([_().todos(),v().todos(),e(`not_poesias`,`not_poesias_local`,t)]);return se(oe(r,i,a),n)}function b(e,t){return(t?v():_()).obter(e)}function le(e){return v().salvar(e)}function ue(e){return v().excluir(e)}var x=/<p\b[^>]*\bclass="[^"]*\bpoesia--tema\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i;function S(e){let t=x.exec(e.conteudo??``)?.[1];return t===void 0?n(e.conteudo,180):r(t)}var de=[[`Gênesis`,`Gên`],[`Êxodo`,`Êxo`],[`Levítico`,`Lev`],[`Números`,`Núm`],[`Deuteronômio`,`Deu`],[`Josué`,`Jos`],[`Juízes`,`Juí`],[`Rute`],[`1 Samuel`,`1Sa`],[`2 Samuel`,`2Sa`],[`1 Reis`,`1Rs`],[`2 Reis`,`2Rs`],[`1 Crônicas`,`1Cr`],[`2 Crônicas`,`2Cr`],[`Esdras`,`Esd`],[`Neemias`,`Nee`],[`Ester`,`Est`],[`Jó`],[`Salmo`,`Sal`],[`Provérbios`,`Pro`],[`Eclesiastes`,`Ecl`],[`Cântico de Salomão`,`Cân`],[`Isaías`,`Isa`],[`Jeremias`,`Jer`],[`Lamentações`,`Lam`],[`Ezequiel`,`Eze`],[`Daniel`,`Dan`],[`Oseias`,`Os`],[`Joel`],[`Amós`],[`Obadias`,`Oba`],[`Jonas`,`Jon`],[`Miqueias`,`Miq`],[`Naum`],[`Habacuque`,`Hab`],[`Sofonias`,`Sof`],[`Ageu`],[`Zacarias`,`Zac`],[`Malaquias`,`Mal`],[`Mateus`,`Mat`],[`Marcos`,`Mar`],[`Lucas`,`Luc`],[`João`],[`Atos`],[`Romanos`,`Rom`],[`1 Coríntios`,`1Co`],[`2 Coríntios`,`2Co`],[`Gálatas`,`Gál`],[`Efésios`,`Efé`],[`Filipenses`,`Fil`],[`Colossenses`,`Col`],[`1 Tessalonicenses`,`1Te`],[`2 Tessalonicenses`,`2Te`],[`1 Timóteo`,`1Ti`],[`2 Timóteo`,`2Ti`],[`Tito`],[`Filêmon`,`Flm`],[`Hebreus`,`Heb`],[`Tiago`,`Tia`],[`1 Pedro`,`1Pe`],[`2 Pedro`,`2Pe`],[`1 João`,`1Jo`],[`2 João`,`2Jo`],[`3 João`,`3Jo`],[`Judas`,`Jud`],[`Apocalipse`,`Apo`]],C=new Map;for(let[e,t]of de.entries())for(let n of t)C.set(n,e);var w=[...C.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),fe=RegExp(`(?<![\\p{L}\\p{N}])(${w})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`gu`);function T(e,t){let n=C.get(e);return n===void 0?[]:t.split(`;`).map(e=>e.replace(/\s+/g,``)).filter(e=>e!==``).map(e=>`${n}:${e}`)}var pe=/<p\b[^>]*>[\s\S]*?<\/p>/gi,E=e=>e.replace(/<[^>]*>/g,``).replace(/&nbsp;/g,` `).trim(),me=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`),D=RegExp(`^(?:${w})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*[“"]`,`u`);function he(e){let t=(e.match(pe)??[]).filter(e=>E(e)!==``),n=t.map((e,t)=>({i:t,texto:E(e)})).filter(({texto:e})=>e.length<30&&!/[.:”"]$/.test(e)&&!D.test(e)),r=n[0],i=n[1];if(r===void 0||i===void 0||i.i!==r.i+1)return null;let a=[],o=[];for(let e of t.slice(i.i+1)){let t=E(e);if(D.test(t)){let n=RegExp(`^(${w})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`u`).exec(t),r=n===null?void 0:T(n[1]??``,n[2]??``)[0];if(r!==void 0&&n!==null){a.push({chave:r,rotulo:`${n[1]} ${n[2]}`,html:e.replace(/^(<p\b[^>]*>)([\s\S]*)(<\/p>)$/i,(e,t,n,r)=>`${t}${n.replace(RegExp(`^((?:<[^>]*>)*)\\s*(?:${w})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*`,`u`),`$1`)}${r}`)});continue}}o.push(e)}let s=new Set(a.map(e=>e.chave));return{abertura:t.slice(0,r.i),vistas:[r.texto,i.texto],pesquisa:o.map(e=>ge(e,s)),citadas:a}}function ge(e,t){return e.replace(fe,(n,r,i,a)=>{if(/<[^>]*$/.test(e.slice(0,a)))return n;let o=T(r,i).filter(e=>t.has(e));return o.length===0?n:`<button type="button" class="ensaio__ref" data-chaves="${me(o.join(` `))}" aria-expanded="false">${n}</button>`})}var _e=400,ve=1200,O=[],k=``,A=new Set,ye=!1,j=!1,M=null,N=!1,P=null,F,I=!1,L=null,R=null,z,B,V=new ie;function be(){return document.querySelector(`kk-editor`)}function xe(e){let t=be();t!==null&&(t.value=e)}function H(e,t){return re(t?`local`:`curado`,e.id)}function U(e,t){return A.has(H(e,t))}async function W(e,t){A=ne(y,A,H(e,t)),M===null?await G():u()}async function G(){O=await ce(k,e=>U(e,e.local)),u()}async function K(e,t){N=t,M=await b(e,t)??null,M===null&&d(`poesia`)}async function q(e){if(e===null)P={id:null,titulo:``,conteudo:``,status:``};else{let t=await b(e,!0);if(t===void 0){d(`poesia`);return}P={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}u(),xe(P.conteudo)}function J(e){let t=e.args.join(`/`);F===t||I||L!==null||(F=t,I=!0,V.fechar(),ye||=(A=p(y),!0),(async()=>{try{let[t,n]=e.args;t===void 0?(M=null,P=null,await G()):t===`nova`?(M=null,await q(null)):t===`editar`?(M=null,await q(Number.parseInt(n??``,10))):t===`local`?(P=null,await K(Number.parseInt(n??``,10),!0)):(P=null,await K(Number.parseInt(t,10),!1))}catch(t){console.error(`poesia: a carga falhou.`,t),L=te(t),R=e}finally{I=!1,u()}})())}function Se(){let e=R;L=null,R=null,F=void 0,e!==null&&J(e),u()}function Ce(e){k=e,clearTimeout(z),z=setTimeout(()=>void G(),_e)}function we(e){let t=U(e,e.local);return c`
    <div class="cartao cartao--com-acao" ?data-favorito=${t}>
      <button
        class="cartao__alvo"
        @click=${()=>d(e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`)}
      >
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${e.titulo||f.acervo.semTitulo}
          </span>
          ${e.local?c`<kk-badge variant="success" pill>${f.acervo.meu}</kk-badge>`:a}
        </span>
        <span class="cartao__previa">${S(e)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${t?`filled`:`outline`}
        label=${t?f.poesia.desfavoritar:f.poesia.favoritar}
        @click=${()=>void W(e,e.local)}
      ></kk-icon-button>
    </div>
  `}function Te(){return c`
    ${j?c`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${f.poesia.aviso.map(e=>c`<p>${e}</p>`)}
          </kk-alert>
        `:a}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${f.poesia.buscar}
        .value=${k}
        @kk-input=${e=>Ce(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${O.length===0?c`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="feather"></kk-icon>
            <p>${f.poesia.vazio}</p>
          </div>
        `:c`<div class="cartoes cartoes--duas">${O.map(e=>we(e))}</div>`}
  `}function Y(e){return`${e.titulo}. ${e.conteudo}`}function X(e){let t=e.id===175&&!N?he(e.conteudo):null;return t===null?c`
    <article class="poema">
      <div class="prosa poema__corpo">${m(l(e.conteudo))}</div>
    </article>
  `:De(t)}var Z=0;function Ee(e){let t=e.target?.closest(`.ensaio__ref`);if(t==null)return;let n=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,String(n));let r=t.closest(`.ensaio`);for(let e of(t.dataset.chaves??``).split(` `)){let t=r?.querySelector(`.ensaio__citada[data-chave="${CSS.escape(e)}"]`);t!=null&&(t.hidden=!n)}}function Q(e,t){return c`
    <div
      class="ensaio__citada"
      data-chave=${e.chave}
      ?hidden=${t}
    >
      <cite class="poesia--fonte">${e.rotulo}</cite>
      ${m(l(e.html))}
    </div>
  `}function De(e){return c`
    <article class="ensaio prosa" @click=${Ee}>
      <div class="ensaio__abertura">
        ${e.abertura.map(e=>m(l(e)))}
      </div>

      <div class="ensaio__vistas" role="tablist">
        ${e.vistas.map((e,t)=>c`
            <button
              type="button"
              role="tab"
              class="ensaio__vista"
              aria-selected=${Z===t}
              @click=${()=>{Z=t,u()}}
            >
              ${e}
            </button>
          `)}
      </div>

      ${Z===0?c`
            <div class="ensaio__pesquisa">
              ${e.pesquisa.map(e=>m(l(e)))}
              ${e.citadas.map(e=>Q(e,!0))}
            </div>
          `:c`
            <div class="ensaio__citadas">
              ${e.citadas.map(e=>Q(e,!1))}
            </div>
          `}
    </article>
  `}function Oe(){queueMicrotask(()=>{let e=document.querySelector(`.poema__corpo, .ensaio`);e!==null&&h(e)})}function ke(e){return Oe(),c`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${X(e)}

    ${N?a:c`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!e.anterior_id}
              @click=${()=>d(`poesia/${e.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${f.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!e.proximo_id}
              @click=${()=>d(`poesia/${e.proximo_id??``}`)}
            >
              ${f.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${V.overlay(c`
          <h1 class="titulo--serif">${e.titulo}</h1>
          ${X(e)}
        `,()=>Y(e))}
  `}async function Ae(){let e=M?.id;e!==void 0&&N&&await o({titulo:f.poesia.excluir,texto:f.acervo.excluirTexto,rotuloConfirmar:f.acoes.excluir,variante:`danger`})&&(await ue(e),s(f.poesia.excluida),d(`poesia`))}function $(){P!==null&&(P={...P,status:f.acervo.salvando},u(),clearTimeout(B),B=setTimeout(()=>void je(),ve))}async function je(){if(P===null)return;if(P.titulo.trim()===``||ae(P.conteudo)){P={...P,status:f.acervo.tituloEConteudo},u();return}let e=Date.now(),t=await le({titulo:P.titulo,conteudo:P.conteudo,publicar:0,data_atualizacao:e,...P.id===null?{data_criacao:e}:{id:P.id}});P.id===null&&(P={...P,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),P={...P,status:f.acervo.salvoAs(i(e))},u()}function Me(e){return c`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${f.poesia.tituloPlaceholder}
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
  `}function Ne(){return c`
    <kk-icon-button
      name="info-circle"
      label=${f.poesia.sobre}
      @click=${()=>{j=!j,u()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${f.poesia.nova}
      @click=${()=>d(`poesia/nova`)}
    ></kk-icon-button>
  `}function Pe(e){let t=U(e,N);return c`
    <kk-icon-button
      name="star"
      variant=${t?`filled`:`outline`}
      label=${t?f.poesia.desfavoritar:f.poesia.favoritar}
      @click=${()=>void W(e,N)}
    ></kk-icon-button>
    ${V.botaoApresentar()}
    ${V.botaoFala(()=>Y(e))}
    <kk-icon-button
      name="share"
      label=${f.leitura.compartilhar}
      @click=${()=>void g(e.titulo,r(e.conteudo))}
    ></kk-icon-button>
    ${N?c`
          <kk-icon-button
            name="pencil"
            label=${f.acoes.editar}
            @click=${()=>d(`poesia/editar/${e.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${f.poesia.excluir}
            @click=${()=>void Ae()}
          ></kk-icon-button>
        `:a}
  `}var Fe={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=P?.titulo.trim()??``;return e===``?f.poesia.novaTitulo:e}return M?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return Ne();if(t!==`nova`&&t!==`editar`)return M===null?void 0:Pe(M)},conteudo(e){if(J(e),L!==null)return ee(L,Se);let[t]=e.args;return t===void 0?Te():t===`nova`||t===`editar`?P===null?c`<div class="carregando"><kk-spinner></kk-spinner></div>`:Me(P):M===null?c`<div class="carregando"><kk-spinner></kk-spinner></div>`:ke(M)}};export{Fe as telaPoesia};