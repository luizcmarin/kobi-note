import{i as e,r as t,t as n}from"./lit-CL39YOSA.js";import{n as r}from"./strings-C-U_qlgv.js";import{n as i,r as a}from"./rotas-D12eslN_.js";import{n as o}from"./acessibilidade-CRpcvpwG.js";import{n as s,r as c,t as l}from"./directive-BSZPiF1A.js";import{R as u,m as d}from"./index-DQ-iAe1X.js";import{t as f}from"./carga-Cl47TOz-.js";import{a as p,n as m,o as h,r as ee,t as te}from"./directive-helpers-Bm_bOAtk.js";import{m as g}from"./dados-BmXN5UQw.js";import{a as _,c as v,i as ne,l as y,n as re,o as b,r as x,t as S,u as C}from"./atividades-7ZarHUB2.js";import{i as w,n as T,r as E,t as D}from"./recordes-C0b-yqzG.js";import{n as O}from"./sorteio-Bln1H9Cu.js";import{i as k,n as ie,o as A}from"./biblia-jl8lr4A3.js";var j=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},ae=l(class extends s{constructor(e){if(super(e),e.type!==c.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[n,r,i]){let a=te(e),{values:o,keys:s}=this.dt(n,r,i);if(!Array.isArray(a))return this.ut=s,o;let c=this.ut??=[],l=[],u,d,f=0,g=a.length-1,_=0,v=o.length-1;for(;f<=g&&_<=v;)if(a[f]===null)f++;else if(a[g]===null)g--;else if(c[f]===s[_])l[_]=p(a[f],o[_]),f++,_++;else if(c[g]===s[v])l[v]=p(a[g],o[v]),g--,v--;else if(c[f]===s[v])l[v]=p(a[f],o[v]),h(e,l[v+1],a[f]),f++,v--;else if(c[g]===s[_])l[_]=p(a[g],o[_]),h(e,a[f],a[g]),g--,_++;else if(u===void 0&&(u=j(s,_,v),d=j(c,f,g)),u.has(c[f])){if(u.has(c[g])){let t=d.get(s[_]),n=t===void 0?null:a[t];if(n===null){let t=h(e,a[f]);p(t,o[_]),l[_]=t}else l[_]=p(n,o[_]),h(e,a[f],n),a[t]=null;_++}else m(a[g]),g--}else m(a[f]),f++;for(;_<=v;){let t=h(e,l[v+1]);p(t,o[_]),l[_++]=t}for(;f<=g;){let e=a[f++];e!==null&&m(e)}return this.ut=s,ee(e,l),t}}),oe=[`ordem`,`grupo`],M=`livros`,N=6,se={1:12,2:20,3:k.length};function P(e,t){return Array.from({length:t},(t,n)=>e+n)}function ce(e){let t=[...e].sort((e,t)=>e-t);for(let n=0;n<10;n++){let n=O(e);if(n.some((e,n)=>e!==t[n]))return n}return[...t].reverse()}function F(e,t){return e===1?P(Math.floor(t()*(k.length-N+1)),N):e===2?[...(A[Math.floor(t()*A.length)]??A[0])?.livros??[]]:P(0,k.length)}function I(e,t,n=Math.random){if(e===`ordem`){let r=F(t,n);return{modo:e,nivel:t,cartas:ce(r),gabarito:[...r].sort((e,t)=>e-t),caixas:[]}}let r=P(0,k.length);return{modo:e,nivel:t,cartas:O(r).slice(0,se[t]),gabarito:[],caixas:t===1?A:ie}}function L(e,t){let n=new Map;for(let r of t)for(let t of e[r.id]??[])n.set(t,r.livros.includes(t));return n}var R=`pilha`,z=`resposta`,B=`inicio`,V=`ordem`,H=1,U=[],W=null,G={},K=null,q=0,J=new S,Y=null,X=0,le=new f(`livros`,async()=>{i(M,()=>J.pausar()),U=await E(M)});function ue(){W=I(V,H),G={[R]:[...W.cartas]},W.modo===`ordem`&&(G[z]=[]);for(let e of W.caixas)G[e.id]=[];K=null,q=0,Y=null,J.comecar(o()),B=`mesa`,u()}async function de(){(G[R]?.length??0)<(W?.cartas.length??0)&&!await d({titulo:r.atividades.encerrarTitulo,texto:r.atividades.encerrarTexto,rotuloConfirmar:r.atividades.encerrar})||(J.pausar(),W=null,B=`inicio`,u())}function fe(e){let{item:t,from:n,to:r,order:i}=e.detail,a=Number(t);G[n]=(G[n]??[]).filter(e=>e!==a),G[r]=i.map(Number),K=null,u()}function pe(){if(W===null)return;let e=W.modo===`ordem`?v(G[z]??[],W.gabarito):L(G,W.caixas);if(!C(e,W.cartas.length)){q+=1,K=e,u();return}J.pausar(),X=J.corrido();let t={jogo:M,modo:W.modo,nivel:W.nivel};B=`fim`,u(),!J.semTempo&&w(t,X).then(e=>{Y=e,U=D(U,e.recorde)}).catch(e=>console.error(`livros: o recorde não foi gravado.`,e)).finally(u)}function Z(){return e`
    <h2 class="secao">${r.livros.modo}</h2>
    <div class="modos">
      ${oe.map(t=>e`
          <button
            class="modo"
            ?data-ativo=${V===t}
            @click=${()=>{V=t,u()}}
          >
            <kk-icon name=${t===`ordem`?`sort-ascending-numbers`:`category`}></kk-icon>
            ${r.livros.modos[t]}
          </button>
        `)}
    </div>
    <p class="discreto">${r.livros.modosAjuda[V]}</p>

    ${x(H,e=>{H=e,u()})}
    <p class="discreto">${r.livros.detalhes[V][H]}</p>

    ${ne(b(T(U,{jogo:M,modo:V,nivel:H})),`livros__recorde`)}

    <kk-button variant="primary" class="jogo__jogar livros__comecar" @click=${ue}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>${r.atividades.jogar}
    </kk-button>
  `}function me(t){let n=K?.get(t);return e`<kk-sortable-item value=${String(t)} variant=${n===void 0?`neutral`:n?`success`:`danger`}>
    ${k[t]?.nome??``}
  </kk-sortable-item>`}function Q(t){return e`${ae(G[t]??[],e=>e,e=>me(e))}`}function $(t){return e`
    <h2 class="secao">${r.livros.pilha}</h2>
    <kk-sortable
      class="livros__pilha"
      name=${R}
      label=${r.livros.pilha}
      group=${M}
      orientation="horizontal"
      tap-target=${t}
    >
      ${Q(R)}
    </kk-sortable>
  `}function he(t){return e`
    <p class="discreto">${r.livros.dicaOrdem}</p>
    <h2 class="secao">${r.livros.resposta}</h2>
    <kk-sortable
      class="livros__resposta"
      name=${z}
      label=${r.livros.resposta}
      group=${M}
      orientation="horizontal"
      capacity=${t.cartas.length}
      tap-target=${R}
    >
      ${Q(z)}
    </kk-sortable>
    ${$(z)}
  `}function ge(t){return e`
    <p class="discreto">${r.livros.dicaGrupo}</p>
    <div class="livros__caixas">
      ${t.caixas.map(t=>e`
          <section class="livros__caixa">
            <h3 class="livros__caixa-titulo">${t.nome}</h3>
            <kk-sortable
              name=${t.id}
              label=${t.nome}
              group=${M}
              orientation="horizontal"
              tap-target=${R}
              placeholder=${r.livros.soltarAqui}
            >
              ${Q(t.id)}
            </kk-sortable>
          </section>
        `)}
    </div>
    ${$(``)}
  `}function _e(){let t=W;if(t===null)return Z();let i=t.cartas.length,a=G[R]?.length??0,o=y(K);return e`
    <div class="livros__topo">
      <kk-icon-button
        name="x"
        label=${r.atividades.encerrar}
        @click=${()=>void de()}
      ></kk-icon-button>
      <span class="livros__titulo">
        ${r.livros.modos[t.modo]} · ${r.atividades.niveis[t.nivel]}
      </span>
      <kk-badge pill>${r.atividades.postos(i-a,i)}</kk-badge>
      ${_(J,`livros__relogio`)}
    </div>

    <div class="livros__mesa" @kk-sortable-move=${fe}>
      ${t.modo===`ordem`?he(t):ge(t)}
    </div>

    ${o>0?e`<kk-alert variant="danger" open class="livros__aviso">
            ${r.livros.foraDoLugar(o)}
          </kk-alert>`:n}

    <kk-button
      variant="primary"
      class="jogo__jogar livros__conferir"
      ?disabled=${a>0}
      @click=${pe}
    >
      <kk-icon slot="prefix" name="check"></kk-icon>${r.atividades.conferir}
    </kk-button>
  `}function ve(){let t=g(Math.round(X/1e3)),n=re(Y,`livros`,Y===null?null:r.atividades.recordeMantido(g(Math.round(Y.anterior/1e3))));return e`
    <h2 class="resultado__titulo livros__fim">${r.livros.tituloFim}</h2>
    ${J.semTempo?e`<p class="discreto livros__resumo">${r.atividades.semRelogioFim}</p>`:e`
          <div class="placares livros__placares">
            <div class="placar">
              <span class="placar__valor" data-tom="primaria">${t}</span>
              <span class="placar__rotulo">${r.atividades.tempo}</span>
            </div>
          </div>
        `}
    <p class="discreto livros__resumo">${r.atividades.conferencias(q)}</p>
    ${n}

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{B=`inicio`,u()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${r.atividades.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>a(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${r.atividades.inicio}
      </kk-button>
    </div>
  `}var ye={voltarPara(){return`home`},conteudo(){let e=le.espera();return e===null?B===`mesa`?(J.andar(),_e()):B===`fim`?ve():Z():e}};export{ye as telaLivros};