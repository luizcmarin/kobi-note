import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-DQE9Hi7n.js";import{n as r,r as i}from"./rotas-D12eslN_.js";import{n as a}from"./texto-BZYXsRJ8.js";import{s as o}from"./banco-C3Dzhq4B.js";import{n as s}from"./acessibilidade-CRpcvpwG.js";import{R as c,m as l}from"./index-DOFaeRHJ.js";import{t as u}from"./carga-FJ-D8QI_.js";import{m as d}from"./dados-BKVBdvMA.js";import{a as f,i as p,n as ee,o as te,r as m,s as h,t as g}from"./atividades-BDzeqT8G.js";import{i as _,n as v,r as y,t as b}from"./recordes-DLrvqt03.js";import{n as x}from"./sorteio-Bln1H9Cu.js";var S={minimo:4,maximo:6};function C(e){if(e.trim()===``)return[];try{let t=JSON.parse(e);return!Array.isArray(t)||!t.every(e=>typeof e==`string`)?null:t.map(e=>e.trim())}catch{return null}}function w(e){return e.length<S.minimo||e.length>S.maximo||e.some(e=>e===``)?!1:new Set(e.map(e=>a(e))).size===e.length}var T=`conexoes`;function E(e,t){return[t,...h.filter(e=>e<t).reverse(),...h.filter(e=>e>t)].flatMap(t=>x(e.filter(e=>Number(e.nivel)===t)))}function D(e,t){let n=[],r=new Set,i=new Set;for(let o of E(e,t)){let e=C(o.itens);if(o.id===void 0||e===null||!w(e))continue;let t=new Set(e.map(e=>a(e)));if([...i].some(e=>t.has(e)))continue;let s=x(e).filter(e=>!r.has(a(e)));if(s.length<4)continue;let c=s.slice(0,4);for(let e of t)r.add(e);for(let e of c)i.add(a(e));if(n.push({id:o.id,rotulo:o.rotulo,referencia:o.referencia,link_fonte:o.link_fonte,nomes:c}),n.length===4)break}if(n.length<4)return null;let o=n.flatMap(e=>e.nomes.map(t=>({chave:a(t),nome:t,grupo:e.id})));return{nivel:t,grupos:n,cartas:x(o)}}function O(e,t){let n=new Map;for(let r of e){let e=t.cartas.find(e=>e.chave===r);e!==void 0&&n.set(e.grupo,(n.get(e.grupo)??0)+1)}let[r,i]=[...n].sort((e,t)=>t[1]-e[1])[0]??[0,0];return i===4&&e.length===4?{grupo:t.grupos.find(e=>e.id===r)??null,quase:!1}:{grupo:null,quase:i===3}}function k(){return o(`conexoes_grupos`).todos()}var A=``,j=`inicio`,M=1,N=[],P=[],F=!1,I=null,L=[],R=new Set,z=[],B=0,V=null,H=!1,U=new g,W=null,G=0,K=new u(`conexoes`,async()=>{r(T,()=>U.pausar()),[N,P]=await Promise.all([k(),y(T)])});function q(){let e=D(N,M);if(F=e===null,e===null){c();return}I=e,L=[...e.cartas],R=new Set,z=[],B=0,V=null,H=!1,W=null,U.comecar(s()),j=`mesa`,c()}async function J(){(z.length>0||B>0)&&!await l({titulo:n.atividades.encerrarTitulo,texto:n.atividades.encerrarTexto,rotuloConfirmar:n.atividades.encerrar})||(U.pausar(),I=null,j=`inicio`,c())}function Y(e){R.has(e.chave)?R.delete(e.chave):R.size<4&&R.add(e.chave),V=null,c()}function X(){if(I===null||R.size!==4)return;let{grupo:e,quase:t}=O([...R],I);if(e!==null){z=[...z,e],L=L.filter(t=>t.grupo!==e.id),R=new Set,V=null,z.length===I.grupos.length&&Z(!0),c();return}B+=1,V=t?`quase`:`errou`,B>=4&&Z(!1),c()}function Z(e){if(U.pausar(),H=e,G=U.corrido(),j=`fim`,!e||I===null||U.semTempo)return;let t={jogo:T,modo:A,nivel:I.nivel};_(t,G).then(e=>{W=e,P=b(P,e.recorde)}).catch(e=>console.error(`conexoes: o recorde não foi gravado.`,e)).finally(c)}function Q(){return e`
    ${m(M,e=>{M=e,F=!1,c()})}
    <p class="discreto">${n.conexoes.detalhes[M]}</p>
    <p>${n.conexoes.regra}</p>

    ${p(te(v(P,{jogo:T,modo:A,nivel:M})),`conexoes__recorde`)}

    ${F?e`<kk-alert variant="warning" open class="conexoes__sem-grupos">
            ${n.conexoes.semGrupos(N.length)}
          </kk-alert>`:t}

    <kk-button variant="primary" class="jogo__jogar conexoes__comecar" @click=${q}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>${n.atividades.jogar}
    </kk-button>
  `}function $(r,i,a){return e`
    <div class="conexoes__grupo" data-cor=${i}>
      <strong class="conexoes__rotulo">${r.rotulo}</strong>
      <span class="conexoes__nomes">${r.nomes.join(`, `)}</span>
      ${r.referencia===``?t:e`<small>${r.referencia}</small>`}
      ${a&&r.link_fonte!==``?e`<a
              class="conexoes__fonte"
              href=${r.link_fonte}
              target="_blank"
              rel="noreferrer"
            >
              <kk-icon name="external-link"></kk-icon>${n.conexoes.lerNoWol}
            </a>`:t}
    </div>
  `}function ne(){let r=I;return r===null?Q():e`
    <div class="conexoes__topo">
      <kk-icon-button
        name="x"
        label=${n.atividades.encerrar}
        @click=${()=>void J()}
      ></kk-icon-button>
      <span class="conexoes__titulo">${n.atividades.niveis[r.nivel]}</span>
      <kk-badge pill variant=${B===3?`danger`:`neutral`}>
        ${n.conexoes.erros(4-B)}
      </kk-badge>
      ${f(U,`conexoes__relogio`)}
    </div>

    <p class="discreto">${n.conexoes.dica}</p>

    <div class="conexoes__descobertos">
      ${z.map((e,t)=>$(e,t+1,!1))}
    </div>

    <div class="conexoes__mesa">
      ${L.map(t=>e`
          <button
            class="conexoes__carta"
            data-chave=${t.chave}
            aria-pressed=${R.has(t.chave)?`true`:`false`}
            @click=${()=>Y(t)}
          >
            ${t.nome}
          </button>
        `)}
    </div>

    ${V===null?t:e`<kk-alert
            variant=${V===`quase`?`warning`:`danger`}
            open
            class="conexoes__aviso"
          >
            ${V===`quase`?n.conexoes.quase:n.conexoes.errou}
          </kk-alert>`}

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{L=x(L),c()}}
      >
        <kk-icon slot="prefix" name="arrows-shuffle"></kk-icon>${n.conexoes.embaralhar}
      </kk-button>
      <kk-button
        outline
        ?disabled=${R.size===0}
        @click=${()=>{R=new Set,V=null,c()}}
      >
        ${n.conexoes.desmarcar}
      </kk-button>
    </div>

    <kk-button
      variant="primary"
      class="jogo__jogar conexoes__conferir"
      ?disabled=${R.size!==4}
      @click=${X}
    >
      <kk-icon slot="prefix" name="check"></kk-icon>${n.atividades.conferir}
    </kk-button>
  `}function re(){let t=I?.grupos??[],r=[...z,...t.filter(e=>!z.includes(e))],a=ee(W,`conexoes`,W===null?null:n.atividades.recordeMantido(d(Math.round(W.anterior/1e3))));return e`
    <h2 class="resultado__titulo conexoes__fim" data-venceu=${H?`sim`:`nao`}>
      ${H?n.conexoes.tituloFim:n.conexoes.tituloDerrota}
    </h2>
    ${H&&U.semTempo?e`<p class="discreto conexoes__resumo">${n.atividades.semRelogioFim}</p>`:H?e`
          <div class="placares conexoes__placares">
            <div class="placar">
              <span class="placar__valor" data-tom="primaria">
                ${d(Math.round(G/1e3))}
              </span>
              <span class="placar__rotulo">${n.atividades.tempo}</span>
            </div>
          </div>
          ${a}
        `:e`<p class="resultado__linha">${n.conexoes.textoDerrota}</p>`}

    <h2 class="secao">${n.conexoes.grupos}</h2>
    <div class="conexoes__descobertos">
      ${r.map((e,t)=>$(e,t+1,!0))}
    </div>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{j=`inicio`,c()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${n.atividades.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>i(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${n.atividades.inicio}
      </kk-button>
    </div>
  `}var ie={voltarPara(){return`home`},conteudo(){let e=K.espera();return e===null?j===`mesa`?(U.andar(),ne()):j===`fim`?re():Q():e}};export{ie as telaConexoes};