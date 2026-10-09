import{i as e,r as t,t as n}from"./lit-CI_s7elC.js";import{n as r}from"./strings-BCzNZFpV.js";import{n as i,r as a}from"./rotas-CR8kk0YZ.js";import{n as o}from"./acessibilidade-0dW0_ixm.js";import{n as s,r as c,t as l}from"./directive-BSZPiF1A.js";import{E as u,it as d}from"./index-YLgIwNyG.js";import{t as f}from"./carga-BpNfyn1x.js";import{a as p,n as m,o as h,r as g,t as ee}from"./directive-helpers-cMfXoJS9.js";import{m as _}from"./dados-BV5Lwoje.js";import{a as v,c as y,i as b,l as x,n as S,o as C,r as w,t as te,u as ne}from"./atividades-DcNM461i.js";import{i as re,n as ie,r as ae,t as T}from"./recordes-CbWDtLHD.js";import{n as E}from"./sorteio-Bln1H9Cu.js";import{t as D}from"./chunk.GFLQWJVU-DR45ZgUT.js";import{i as O,n as oe,o as k}from"./biblia-jl8lr4A3.js";var A=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},se=l(class extends s{constructor(e){if(super(e),e.type!==c.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[n,r,i]){let a=ee(e),{values:o,keys:s}=this.dt(n,r,i);if(!Array.isArray(a))return this.ut=s,o;let c=this.ut??=[],l=[],u,d,f=0,_=a.length-1,v=0,y=o.length-1;for(;f<=_&&v<=y;)if(a[f]===null)f++;else if(a[_]===null)_--;else if(c[f]===s[v])l[v]=p(a[f],o[v]),f++,v++;else if(c[_]===s[y])l[y]=p(a[_],o[y]),_--,y--;else if(c[f]===s[y])l[y]=p(a[f],o[y]),h(e,l[y+1],a[f]),f++,y--;else if(c[_]===s[v])l[v]=p(a[_],o[v]),h(e,a[f],a[_]),_--,v++;else if(u===void 0&&(u=A(s,v,y),d=A(c,f,_)),u.has(c[f])){if(u.has(c[_])){let t=d.get(s[v]),n=t===void 0?null:a[t];if(n===null){let t=h(e,a[f]);p(t,o[v]),l[v]=t}else l[v]=p(n,o[v]),h(e,a[f],n),a[t]=null;v++}else m(a[_]),_--}else m(a[f]),f++;for(;v<=y;){let t=h(e,l[y+1]);p(t,o[v]),l[v++]=t}for(;f<=_;){let e=a[f++];e!==null&&m(e)}return this.ut=s,g(e,l),t}}),ce=[`ordem`,`grupo`],j=`livros`,M=6,le={1:12,2:20,3:O.length};function N(e,t){return Array.from({length:t},(t,n)=>e+n)}function P(e){let t=[...e].sort((e,t)=>e-t);for(let n=0;n<10;n++){let n=E(e);if(n.some((e,n)=>e!==t[n]))return n}return[...t].reverse()}function F(e,t){return e===1?N(Math.floor(t()*(O.length-M+1)),M):e===2?[...(k[Math.floor(t()*k.length)]??k[0])?.livros??[]]:N(0,O.length)}function I(e,t,n=Math.random){if(e===`ordem`){let r=F(t,n);return{modo:e,nivel:t,cartas:P(r),gabarito:[...r].sort((e,t)=>e-t),caixas:[]}}let r=N(0,O.length);return{modo:e,nivel:t,cartas:E(r).slice(0,le[t]),gabarito:[],caixas:t===1?k:oe}}function L(e,t){let n=new Map;for(let r of t)for(let t of e[r.id]??[])n.set(t,r.livros.includes(t));return n}var R=`pilha`,z=`resposta`,B=`inicio`,V=`ordem`,H=1,U=[],W=null,G={},K=null,q=0,J=new te,Y=null,X=0,ue=new f(`livros`,async()=>{i(j,()=>J.pausar()),U=await ae(j)});function de(){W=I(V,H),G={[R]:[...W.cartas]},W.modo===`ordem`&&(G[z]=[]);for(let e of W.caixas)G[e.id]=[];K=null,q=0,Y=null,J.comecar(o()),B=`mesa`,d()}async function fe(){(G[R]?.length??0)<(W?.cartas.length??0)&&!await u({titulo:r.atividades.encerrarTitulo,texto:r.atividades.encerrarTexto,rotuloConfirmar:r.atividades.encerrar})||(J.pausar(),W=null,B=`inicio`,d())}function pe(e){let{item:t,from:n,to:r,order:i}=e.detail,a=Number(t);G[n]=(G[n]??[]).filter(e=>e!==a),G[r]=i.map(Number),K=null,d()}function me(){if(W===null)return;let e=W.modo===`ordem`?y(G[z]??[],W.gabarito):L(G,W.caixas);if(!ne(e,W.cartas.length)){q+=1,K=e,d();return}J.pausar(),X=J.corrido();let t={jogo:j,modo:W.modo,nivel:W.nivel};B=`fim`,d(),D(),!J.semTempo&&re(t,X).then(e=>{Y=e,U=T(U,e.recorde)}).catch(e=>console.error(`livros: o recorde não foi gravado.`,e)).finally(d)}function Z(){return e`
    <h2 class="secao">${r.livros.modo}</h2>
    <div class="modos">
      ${ce.map(t=>e`
          <button
            class="modo"
            ?data-ativo=${V===t}
            @click=${()=>{V=t,d()}}
          >
            <kk-icon name=${t===`ordem`?`sort-ascending-numbers`:`category`}></kk-icon>
            ${r.livros.modos[t]}
          </button>
        `)}
    </div>
    <p class="discreto">${r.livros.modosAjuda[V]}</p>

    ${w(H,e=>{H=e,d()})}
    <p class="discreto">${r.livros.detalhes[V][H]}</p>

    ${b(C(ie(U,{jogo:j,modo:V,nivel:H})),`livros__recorde`)}

    <kk-button variant="primary" class="jogo__jogar livros__comecar" @click=${de}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>${r.atividades.jogar}
    </kk-button>
  `}function he(t){let n=K?.get(t);return e`<kk-sortable-item value=${String(t)} variant=${n===void 0?`neutral`:n?`success`:`danger`}>
    ${O[t]?.nome??``}
  </kk-sortable-item>`}function Q(t){return e`${se(G[t]??[],e=>e,e=>he(e))}`}function $(t){return e`
    <h2 class="secao">${r.livros.pilha}</h2>
    <kk-sortable
      class="livros__pilha"
      name=${R}
      label=${r.livros.pilha}
      group=${j}
      orientation="horizontal"
      tap-target=${t}
    >
      ${Q(R)}
    </kk-sortable>
  `}function ge(t){return e`
    <p class="discreto">${r.livros.dicaOrdem}</p>
    <h2 class="secao">${r.livros.resposta}</h2>
    <kk-sortable
      class="livros__resposta"
      name=${z}
      label=${r.livros.resposta}
      group=${j}
      orientation="horizontal"
      capacity=${t.cartas.length}
      tap-target=${R}
    >
      ${Q(z)}
    </kk-sortable>
    ${$(z)}
  `}function _e(t){return e`
    <p class="discreto">${r.livros.dicaGrupo}</p>
    <div class="livros__caixas">
      ${t.caixas.map(t=>e`
          <section class="livros__caixa">
            <h3 class="livros__caixa-titulo">${t.nome}</h3>
            <kk-sortable
              name=${t.id}
              label=${t.nome}
              group=${j}
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
  `}function ve(){let t=W;if(t===null)return Z();let i=t.cartas.length,a=G[R]?.length??0,o=x(K);return e`
    <div class="livros__topo">
      <kk-icon-button
        name="x"
        label=${r.atividades.encerrar}
        @click=${()=>void fe()}
      ></kk-icon-button>
      <span class="livros__titulo">
        ${r.livros.modos[t.modo]} · ${r.atividades.niveis[t.nivel]}
      </span>
      <kk-badge pill>${r.atividades.postos(i-a,i)}</kk-badge>
      ${v(J,`livros__relogio`)}
    </div>

    <div class="livros__mesa" @kk-sortable-move=${pe}>
      ${t.modo===`ordem`?ge(t):_e(t)}
    </div>

    ${o>0?e`<kk-alert variant="danger" open class="livros__aviso">
            ${r.livros.foraDoLugar(o)}
          </kk-alert>`:n}

    <kk-button
      variant="primary"
      class="jogo__jogar livros__conferir"
      ?disabled=${a>0}
      @click=${me}
    >
      <kk-icon slot="prefix" name="check"></kk-icon>${r.atividades.conferir}
    </kk-button>
  `}function ye(){let t=_(Math.round(X/1e3)),n=S(Y,`livros`,Y===null?null:r.atividades.recordeMantido(_(Math.round(Y.anterior/1e3))));return e`
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
        @click=${()=>{B=`inicio`,d()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${r.atividades.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>a(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${r.atividades.inicio}
      </kk-button>
    </div>
  `}var be={voltarPara(){return`home`},conteudo(){let e=ue.espera();return e===null?B===`mesa`?(J.andar(),ve()):B===`fim`?ye():Z():e}};export{be as telaLivros};