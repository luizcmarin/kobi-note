import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-V1DWQvwW.js";import{i as r,r as i}from"./formato-BoZO7uRM.js";import{t as a}from"./html-C5yDSNPC.js";import{i as o}from"./texto-BZYXsRJ8.js";import{i as s,n as c,r as l}from"./rotas-CR8kk0YZ.js";import{o as ee,s as u}from"./banco-yW6Av386.js";import{i as te,n as ne,o as re,t as ie}from"./acervo-CwqE9mCZ.js";import{A as ae,C as d,D as oe,T as f,ct as p,n as m}from"./index-BQ700Bhd.js";import{n as se,r as ce,t as le}from"./favoritos-DSssFOrF.js";import{n as ue}from"./carga-C4iKecgv.js";import{n as de,t as fe}from"./editor-CSRQZGXQ.js";import{n as pe,t as me}from"./leitura-CcPb0cCf.js";import{t as he}from"./compartilhar-BsDY4mOT.js";import{a as ge,c as _e,d as ve,f as h,l as ye,n as be,o as xe,r as Se,s as Ce,t as we,u as Te}from"./progresso-fH1dG5W9.js";var g=()=>u(`poesias`),_=()=>u(`poesias_local`),Ee=`note_fav_poesias`;async function De(e,t){let[n,r,i]=await Promise.all([g().todos(),_().todos(),ee(`not_poesias`,`not_poesias_local`,e)]);return{todas:ie(n,r),achadas:te(ne(n,r,i),t)}}function v(e,t){return(t?_():g()).obter(e)}function Oe(e){return _().salvar(e)}function ke(e){return _().excluir(e)}var Ae=/<p\b[^>]*\bclass="[^"]*\bpoesia--tema\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i;function je(e){let t=Ae.exec(e.conteudo??``)?.[1];return t===void 0?de(e.conteudo,180):a(t)}var Me=[[`Gênesis`,`Gên`],[`Êxodo`,`Êxo`],[`Levítico`,`Lev`],[`Números`,`Núm`],[`Deuteronômio`,`Deu`],[`Josué`,`Jos`],[`Juízes`,`Juí`],[`Rute`],[`1 Samuel`,`1Sa`],[`2 Samuel`,`2Sa`],[`1 Reis`,`1Rs`],[`2 Reis`,`2Rs`],[`1 Crônicas`,`1Cr`],[`2 Crônicas`,`2Cr`],[`Esdras`,`Esd`],[`Neemias`,`Nee`],[`Ester`,`Est`],[`Jó`],[`Salmo`,`Sal`],[`Provérbios`,`Pro`],[`Eclesiastes`,`Ecl`],[`Cântico de Salomão`,`Cân`],[`Isaías`,`Isa`],[`Jeremias`,`Jer`],[`Lamentações`,`Lam`],[`Ezequiel`,`Eze`],[`Daniel`,`Dan`],[`Oseias`,`Os`],[`Joel`],[`Amós`],[`Obadias`,`Oba`],[`Jonas`,`Jon`],[`Miqueias`,`Miq`],[`Naum`],[`Habacuque`,`Hab`],[`Sofonias`,`Sof`],[`Ageu`],[`Zacarias`,`Zac`],[`Malaquias`,`Mal`],[`Mateus`,`Mat`],[`Marcos`,`Mar`],[`Lucas`,`Luc`],[`João`],[`Atos`],[`Romanos`,`Rom`],[`1 Coríntios`,`1Co`],[`2 Coríntios`,`2Co`],[`Gálatas`,`Gál`],[`Efésios`,`Efé`],[`Filipenses`,`Fil`],[`Colossenses`,`Col`],[`1 Tessalonicenses`,`1Te`],[`2 Tessalonicenses`,`2Te`],[`1 Timóteo`,`1Ti`],[`2 Timóteo`,`2Ti`],[`Tito`],[`Filêmon`,`Flm`],[`Hebreus`,`Heb`],[`Tiago`,`Tia`],[`1 Pedro`,`1Pe`],[`2 Pedro`,`2Pe`],[`1 João`,`1Jo`],[`2 João`,`2Jo`],[`3 João`,`3Jo`],[`Judas`,`Jud`],[`Apocalipse`,`Apo`]],y=new Map;for(let[e,t]of Me.entries())for(let n of t)y.set(n,e);var b=[...y.keys()].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),Ne=RegExp(`(^|[^\\p{L}\\p{N}])(${b})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`gu`);function x(e,t){let n=y.get(e);return n===void 0?[]:t.split(`;`).map(e=>e.replace(/\s+/g,``)).filter(e=>e!==``).map(e=>`${n}:${e}`)}var Pe=/<p\b[^>]*>[\s\S]*?<\/p>/gi,S=RegExp(`^(?:${b})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*[“"]`,`u`);function Fe(e){let t=(e.match(Pe)??[]).filter(e=>a(e)!==``),n=t.map((e,t)=>({i:t,texto:a(e)})).filter(({texto:e})=>e.length<30&&!/[.:”"]$/.test(e)&&!S.test(e)),r=n[0],i=n[1];if(r===void 0||i===void 0||i.i!==r.i+1)return null;let o=[],s=[];for(let e of t.slice(i.i+1)){let t=a(e);if(S.test(t)){let n=RegExp(`^(${b})\\.?\\s+(\\d+:[\\d\\s,;:.\\-–]*\\d)`,`u`).exec(t),r=n===null?void 0:x(n[1]??``,n[2]??``)[0];if(r!==void 0&&n!==null){o.push({chave:r,rotulo:`${n[1]} ${n[2]}`,html:e.replace(/^(<p\b[^>]*>)([\s\S]*)(<\/p>)$/i,(e,t,n,r)=>`${t}${n.replace(RegExp(`^((?:<[^>]*>)*)\\s*(?:${b})\\.?\\s+\\d+:[\\d\\s,;:.\\-–]*\\d\\s*:?\\s*`,`u`),`$1`)}${r}`)});continue}}s.push(e)}let c=new Set(o.map(e=>e.chave));return{abertura:t.slice(0,r.i),vistas:[r.texto,i.texto],pesquisa:s.map(e=>Ie(e,c)),citadas:o}}function Ie(e,t){return e.replace(Ne,(n,r,i,a,s)=>{if(/<[^>]*$/.test(e.slice(0,s+r.length)))return n;let c=x(i,a).filter(e=>t.has(e));if(c.length===0)return n;let l=n.slice(r.length);return`${r}<button type="button" class="ensaio__ref" data-chaves="${o(c.join(` `))}" aria-expanded="false">${l}</button>`})}var Le=400,Re=1200,ze=400,Be=3e3,C=[],w=[],T=``,E=`todas`,D=_e(),O=new Set,Ve=!1,k=!1,A=null,j=!1,M=null,N,P,F=null,I=null,L=!1,R,z,B=new me;function V(e,t){return se(t?`local`:`curado`,e.id)}function H(e,t){return O.has(V(e,t))}async function U(e,t){O=le(Ee,O,V(e,t)),A===null?await Z():p()}function W(){return Math.max(document.documentElement.scrollHeight-innerHeight,0)}function G(){let e=s();return F!==null&&e.modulo===`poesia`&&e.args.join(`/`)===F.rota}function K(e){e!==D&&(D=e,ve(D))}function q(){clearTimeout(R),I!==null&&(K(Te(D,I.chave,I.fracao,Date.now())),I=null)}function He(e,t){return h(D.poesias[V(e,t)])}function J(){let e=document.querySelector(`.poesia__fim`);return e!==null&&e.getBoundingClientRect().top<=innerHeight}function Y(){let e=F?.chave;e===void 0||L||h(D.poesias[e])===`lida`||!J()?(clearTimeout(z),z=void 0):z===void 0&&(z=setTimeout(()=>{z=void 0,G()&&F?.chave===e&&!L&&J()&&X(e,!0)},Be))}function Ue(){if(!G()||F===null)return;let e=W();I={chave:F.chave,fracao:e===0?0:scrollY/e},clearTimeout(R),R=setTimeout(q,ze),Y()}function X(e,t,r=!1){r&&(L=!0),K(ge(D,e,t,Date.now())),d(t?n.poesia.marcadaLida:n.poesia.desmarcadaLida),p()}var We=!1;function Ge(){We||(We=!0,addEventListener(`scroll`,Ue,{passive:!0}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&q()}))}function Ke(e,t,r){let i=V(e,t),a=D.poesias[i]?.ponto;K(ye(D,i,Date.now())),F={chave:i,rota:r},L=!1,Ge(),requestAnimationFrame(()=>{F?.chave===i&&(a!==void 0&&(scrollTo({top:a*W()}),d(n.poesia.retomada,`neutral`)),Y())})}async function Z(){let e=await De(T,e=>H(e,e.local));w=e.todas,C=e.achadas,p()}async function qe(e,t,n){j=t,A=await v(e,t)??null,A===null?l(`poesia`):Ke(A,t,n)}async function Je(e){if(e===null)M={id:null,titulo:``,conteudo:``,status:``};else{let t=await v(e,!0);if(t===void 0){l(`poesia`);return}M={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,status:``}}p(),fe(M.conteudo)}var Ye=new ue(`poesia`,async e=>{B.fechar(),q(),F=null,clearTimeout(z),z=void 0,D=Se(),Ve||=(O=ce(Ee),!0);let[t,n]=e.args,r=e.args.join(`/`);t===void 0?(A=null,M=null,await Z()):t===`nova`?(A=null,await Je(null)):t===`editar`?(A=null,await Je(Number.parseInt(n??``,10))):t===`local`?(M=null,await qe(Number.parseInt(n??``,10),!0,r)):(M=null,await qe(Number.parseInt(t,10),!1,r))});c(`poesia`,()=>{q(),F=null,Ye.esquecer()});function Xe(e){T=e,clearTimeout(N),N=setTimeout(()=>void Z(),Le)}function Ze(e){return e.local?`poesia/local/${e.id??``}`:`poesia/${e.id??``}`}function Qe(r){let i=D.poesias[V(r,r.local)];switch(h(i)){case`lida`:return e`<kk-icon
        class="poesia__marca poesia__marca--lida"
        name="circle-check"
        label=${n.poesia.lida}
      ></kk-icon>`;case`andamento`:return e`<span class="poesia__marca">${n.poesia.percentual(Math.round((i?.ponto??0)*100))}</span>`;case`nova`:return t}}function $e(r){let i=H(r,r.local);return e`
    <div class="cartao cartao--com-acao" ?data-favorito=${i}>
      <button class="cartao__alvo" @click=${()=>l(Ze(r))}>
        <span class="cartao__topo">
          <span class="cartao__titulo cartao__titulo--serif">
            ${r.titulo||n.acervo.semTitulo}
          </span>
          ${r.local?e`<kk-badge variant="success" pill>${n.acervo.meu}</kk-badge>`:t}
          ${Qe(r)}
        </span>
        <span class="cartao__previa">${je(r)}</span>
      </button>

      <kk-icon-button
        class="cartao__estrela"
        name="star"
        variant=${i?`filled`:`outline`}
        label=${i?n.poesia.desfavoritar:n.poesia.favoritar}
        @click=${()=>void U(r,r.local)}
      ></kk-icon-button>
    </div>
  `}function et(r){if(T.trim()!==``||E!==`todas`&&E!==`andamento`)return t;let i=xe(D,r),a=i===null?void 0:w.find(e=>V(e,e.local)===i);if(a===void 0||i===null)return t;let o=Math.round((D.poesias[i]?.ponto??0)*100);return e`
    <button class="poesia__continuar" @click=${()=>l(Ze(a))}>
      <kk-icon name="bookmark"></kk-icon>
      <span class="poesia__continuar-texto">
        <small>${n.poesia.continuar}</small>
        <strong class="titulo--serif">${a.titulo||n.acervo.semTitulo}</strong>
      </span>
      <span class="poesia__marca">${n.poesia.percentual(o)}</span>
    </button>
  `}function tt(){let r=w.map(e=>V(e,e.local)),i=be(D,r),a=C.filter(e=>Ce(E,He(e,e.local)));return e`
    ${k?e`
          <kk-alert open variant="primary" class="aviso-acervo">
            <kk-icon slot="icon" name="info-circle"></kk-icon>
            ${n.poesia.aviso.map(t=>e`<p>${t}</p>`)}
          </kk-alert>
        `:t}

    ${w.length===0?t:e`
          <div class="poesia__progresso" title=${n.poesia.progresso}>
            <kk-progress-bar
              value=${Math.round(i.lidas/i.todas*100)}
            ></kk-progress-bar>
            <span class="poesia__contagem">${n.poesia.lidasDe(i.lidas,i.todas)}</span>
          </div>
        `}

    ${et(r)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.poesia.buscar}
        .value=${T}
        @kk-input=${e=>Xe(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${w.length===0?t:e`
          <div class="chips" role="group" aria-label=${n.poesia.filtrar}>
            ${we.map(t=>e`
                <button
                  class="chip"
                  ?data-ativo=${E===t}
                  aria-pressed=${E===t}
                  @click=${()=>{E=t,p()}}
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
            <p>${C.length===0?n.poesia.vazio:n.poesia.vazioNoFiltro}</p>
          </div>
        `:e`<div class="cartoes cartoes--duas">
          ${a.map(e=>$e(e))}
        </div>`}
  `}function nt(e){return`${e.titulo}. ${e.conteudo}`}function rt(t){let n=t.id===175&&!j?Fe(t.conteudo):null;return n===null?e`
    <article class="poema">
      <div class="prosa poema__corpo">${f(m(t.conteudo))}</div>
    </article>
  `:ot(n)}var Q=0;function it(e){let t=e.target?.closest(`.ensaio__ref`);if(t==null)return;let n=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,String(n));let r=t.closest(`.ensaio`);for(let e of(t.dataset.chaves??``).split(` `)){let t=r?.querySelector(`.ensaio__citada[data-chave="${CSS.escape(e)}"]`);t!=null&&(t.hidden=!n)}}function at(t,n){return e`
    <div
      class="ensaio__citada"
      data-chave=${t.chave}
      ?hidden=${n}
    >
      <cite class="poesia--fonte">${t.rotulo}</cite>
      ${f(m(t.html))}
    </div>
  `}function ot(t){return e`
    <article class="ensaio prosa" @click=${it}>
      <div class="ensaio__abertura">
        ${t.abertura.map(e=>f(m(e)))}
      </div>

      <div class="ensaio__vistas" role="tablist">
        ${t.vistas.map((t,n)=>e`
            <button
              type="button"
              role="tab"
              class="ensaio__vista"
              aria-selected=${Q===n}
              @click=${()=>{Q=n,p()}}
            >
              ${t}
            </button>
          `)}
      </div>

      ${Q===0?e`
            <div class="ensaio__pesquisa">
              ${t.pesquisa.map(e=>f(m(e)))}
              ${t.citadas.map(e=>at(e,!0))}
            </div>
          `:e`
            <div class="ensaio__citadas">
              ${t.citadas.map(e=>at(e,!1))}
            </div>
          `}
    </article>
  `}function st(){queueMicrotask(()=>{let e=document.querySelector(`.poema__corpo, .ensaio`);e!==null&&pe(e)})}function ct(r){let a=V(r,j),o=D.poesias[a]?.lidaEm;return e`
    <div class="poesia__fim">
      ${o===void 0?t:e`
            <span class="poesia__lida">
              <kk-icon name="circle-check"></kk-icon>
              ${n.poesia.lidaEm(i(o))}
            </span>
          `}
      <kk-button size="small" @click=${()=>X(a,o===void 0,!0)}>
        ${o===void 0?n.poesia.marcarLida:n.poesia.desmarcarLida}
      </kk-button>
    </div>
  `}function lt(r){return st(),e`
    <div class="progresso" aria-hidden="true"><div class="progresso__barra"></div></div>

    ${rt(r)}

    ${ct(r)}

    ${j?t:e`
          <nav class="sequencia">
            <kk-button
              size="small"
              ?disabled=${!r.anterior_id}
              @click=${()=>l(`poesia/${r.anterior_id??``}`)}
            >
              <kk-icon slot="prefix" name="chevron-left"></kk-icon>${n.poesia.anterior}
            </kk-button>
            <kk-button
              size="small"
              ?disabled=${!r.proximo_id}
              @click=${()=>l(`poesia/${r.proximo_id??``}`)}
            >
              ${n.poesia.proxima}<kk-icon slot="suffix" name="chevron-right"></kk-icon>
            </kk-button>
          </nav>
        `}

    ${B.overlay(e`
          <h1 class="titulo--serif">${r.titulo}</h1>
          ${rt(r)}
        `,()=>nt(r))}
  `}async function ut(){let e=A?.id;e!==void 0&&j&&await ae({titulo:n.poesia.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await ke(e),d(n.poesia.excluida),l(`poesia`))}function $(){M!==null&&(M={...M,status:n.acervo.salvando},p(),clearTimeout(P),P=setTimeout(()=>void dt(),Re))}async function dt(){if(M===null)return;if(M.titulo.trim()===``||re(M.conteudo)){M={...M,status:n.acervo.tituloEConteudo},p();return}let e=Date.now(),t=await Oe({titulo:M.titulo,conteudo:M.conteudo,publicar:0,data_atualizacao:e,...M.id===null?{data_criacao:e}:{id:M.id}});M.id===null&&(M={...M,id:t},history.replaceState(null,``,`#/poesia/editar/${t}`)),M={...M,status:n.acervo.salvoAs(r(e))},p()}function ft(t){return e`
    <div class="editor editor--cheio">
      <kk-input
        class="editor__titulo editor__titulo--serif"
        placeholder=${n.poesia.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{M={...t,titulo:e.target.value},$()}}
      ></kk-input>

      <div class="editor__linha">
        <span class="editor__status">${t.status}</span>
      </div>

      <kk-editor
        @kk-input=${e=>{M={...t,conteudo:e.detail.value},$()}}
      ></kk-editor>
    </div>
  `}function pt(){return e`
    <kk-icon-button
      name="info-circle"
      label=${n.poesia.sobre}
      @click=${()=>{k=!k,p()}}
    ></kk-icon-button>
    <kk-icon-button
      name="plus"
      label=${n.poesia.nova}
      @click=${()=>l(`poesia/nova`)}
    ></kk-icon-button>
  `}function mt(r){let i=H(r,j);return e`
    <kk-icon-button
      name="star"
      variant=${i?`filled`:`outline`}
      label=${i?n.poesia.desfavoritar:n.poesia.favoritar}
      @click=${()=>void U(r,j)}
    ></kk-icon-button>
    ${B.botaoApresentar()}
    ${B.botaoFala(()=>nt(r))}
    <kk-icon-button
      name="share"
      label=${n.leitura.compartilhar}
      @click=${()=>void he(r.titulo,a(r.conteudo))}
    ></kk-icon-button>
    ${j?e`
          <kk-icon-button
            name="pencil"
            label=${n.acoes.editar}
            @click=${()=>l(`poesia/editar/${r.id??``}`)}
          ></kk-icon-button>
          <kk-icon-button
            name="trash"
            label=${n.poesia.excluir}
            @click=${()=>void ut()}
          ></kk-icon-button>
        `:t}
  `}var ht={voltarPara(e){return e.args.length===0?`home`:`poesia`},titulo(e){let[t]=e.args;if(t!==void 0){if(t===`nova`||t===`editar`){let e=M?.titulo.trim()??``;return e===``?n.poesia.novaTitulo:e}return A?.titulo}},acoes(e){let[t]=e.args;if(t===void 0)return pt();if(t!==`nova`&&t!==`editar`)return A===null?void 0:mt(A)},conteudo(e){let t=Ye.falhou(e);if(t!==null)return t;let[n]=e.args;return n===void 0?tt():n===`nova`||n===`editar`?M===null?oe():ft(M):A===null?oe():lt(A)}};export{ht as telaPoesia};