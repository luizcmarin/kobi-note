import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r}from"./banco-u8JVNTlT.js";import{l as i}from"./dados-DZJ-rFad.js";import{D as a,E as o,n as s,o as ee}from"./index-QyzyfOkc.js";import{t as c}from"./unsafe-html-BBiWdB6b.js";var l={1:10,2:15,3:20},te={0:45,1:60,2:50,3:30},ne=20,re=[0,1,2,3],u=`note_jogo_progresso`;function d(){return{xpSaldo:0,xpHistorico:0,sequenciaAtual:0,acertosTotal:0,errosTotal:0,perguntasRespondidas:[],perguntasAcertadas:[]}}function f(){try{let e=JSON.parse(localStorage.getItem(u)??`null`);return{...d(),...e}}catch{return d()}}function p(e){localStorage.setItem(u,JSON.stringify(e))}function m(e){return Math.floor(Math.sqrt(Math.max(0,e)/100))}function h(e){return e>=20?4:e>=10?3:e>=5?2:1}function ie(e){return l[e]??10}function ae(e){return te[e]??45}function oe(e,t,n,r){let i=ie(Number(e.dificuldade))*h(t);return r<=0?i:i+Math.floor(n/r*ne)}function se(e){return Math.floor((e.acertosTotal+e.errosTotal)/10)}function g(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function ce(e){return g([{texto:e.resposta1,original:1},{texto:e.resposta2,original:2},{texto:e.resposta3,original:3},{texto:e.resposta4,original:4}])}function _(e,t){return t.original===Number(e.correta)}function v(e,t){return t===0?e:e.filter(e=>Number(e.dificuldade)===t)}function le(e,t){let n=new Set(t.perguntasRespondidas);return e.filter(e=>!n.has(e.id??-1)).length}function y(e,t,n){let r=new Set(n.perguntasRespondidas),i=v(e,t),a=g(i.filter(e=>!r.has(e.id??-1))),o=g(i.filter(e=>r.has(e.id??-1)));return[...a,...o].slice(0,10)}function b(e,t){return g(t.map((e,t)=>({alternativa:e,indice:t})).filter(({alternativa:t})=>!_(e,t))).slice(0,2).map(({indice:e})=>e)}function x(e,t){t!==void 0&&!e.includes(t)&&e.push(t)}function ue(){return r(`perguntas`).todos()}var S=`lobby`,C=[],w=d(),T=`estudo`,E=0,D=``,O=[],k=0,A=[],j=!1,M=null,N=!1,P=!1,F=0,I=0,L=0,R=!1,z=[],B=0,V=0,H=0,U=!1,W,G=!1,K=!1;function de(){G||K||(K=!0,fe(),(async()=>{try{C=await ue(),w=f(),G=!0}finally{K=!1,o()}})())}var q=!1;function fe(){q||(q=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(S===`quiz`&&T===`desafio`&&!j&&(U=!0,B=Math.max(0,Math.ceil((H-Date.now())/1e3))),J())}))}function J(){clearInterval(W),W=void 0}function Y(){J(),W=setInterval(()=>{if(B=Math.max(0,Math.ceil((H-Date.now())/1e3)),B===0){J(),Q(null);return}o()},250)}function pe(){V=ae(E),B=V,H=Date.now()+V*1e3,U=!1,Y()}function me(){U=!U,U?(B=Math.max(0,Math.ceil((H-Date.now())/1e3)),J()):(H=Date.now()+B*1e3,Y()),o()}function X(){return O[k]}function Z(){let e=X();e!==void 0&&(j=!1,M=null,N=!1,P=!1,F=0,R=!1,z=[],A=ce(e),J(),U=!1,T===`desafio`?pe():(V=0,B=0))}function he(){if(v(C,E).length<2){D=n.jogo.semPerguntas,o();return}D=``,O=y(C,E,w),k=0,I=0,L=0,Z(),S=`quiz`,o()}function Q(e){if(j)return;let t=X();t!==void 0&&(J(),j=!0,P=e===null,N=e!==null&&_(t,e),N?(I+=1,w.acertosTotal+=1,w.sequenciaAtual+=1,F=oe(t,w.sequenciaAtual,B,V),w.xpSaldo+=F,w.xpHistorico+=F,L+=F,x(w.perguntasAcertadas,t.id)):(w.errosTotal+=1,w.sequenciaAtual=0),x(w.perguntasRespondidas,t.id),p(w),o())}function ge(){if(k+1>=O.length){S=`resultado`,o();return}k+=1,Z(),o()}function _e(){J(),S=`lobby`,o()}function ve(){let e=X();e===void 0||j||R||w.xpSaldo<15||(w.xpSaldo-=15,p(w),z=b(e,A),R=!0,o())}async function ye(){await ee({titulo:n.jogo.reiniciarTitulo,texto:n.jogo.reiniciarTexto,rotuloConfirmar:n.jogo.reiniciar})&&(w.perguntasRespondidas=[],w.perguntasAcertadas=[],p(w),o())}function $(t,n,r=`neutro`){return e`
    <div class="placar">
      <span class="placar__valor" data-tom=${r}>${t}</span>
      <span class="placar__rotulo">${n}</span>
    </div>
  `}function be(){let r=v(C,E),i=le(r,w),a=r.length>0&&i===0,s=C.length===0;return e`
    <div class="placares">
      ${$(i,n.jogo.restantes,`primaria`)}
      ${$(w.acertosTotal,n.jogo.acertos,`sucesso`)}
      ${$(w.errosTotal,n.jogo.erros,`perigo`)}
      ${$(se(w),n.jogo.partidas)}
      ${$(w.xpSaldo,n.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${n.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(t=>e`
          <button
            class="modo"
            ?data-ativo=${T===t}
            @click=${()=>{T=t,D=``,o()}}
          >
            <kk-icon name=${t===`estudo`?`book`:`bolt`}></kk-icon>
            ${n.jogo.modos[t]}
          </button>
        `)}
    </div>
    ${T===`desafio`?e`<p class="discreto">${n.jogo.desafioAjuda}</p>`:t}

    <h2 class="secao">${n.jogo.dificuldade}</h2>
    <div class="chips">
      ${re.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${E===t}
            @click=${()=>{E=t,D=``,o()}}
          >
            ${n.jogo.dificuldades[t]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${s} @click=${he}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${s?n.jogo.semBanco:n.jogo.jogar}
    </kk-button>

    ${D===``?t:e`<kk-alert variant="warning" open>${D}</kk-alert>`}

    ${a?e`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${n.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void ye()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${n.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:t}
  `}var xe=/(https?:\/\/[^\s<]+)/g,Se=/^https?:\/\/[^\s<]+$/;function Ce(t){return e`
    <p class="jogo__referencia">
      ${t.split(xe).map(t=>Se.test(t)?e`<a href=${t} target="_blank" rel="noopener">${t}</a>`:t)}
    </p>
  `}function we(e,t,n){return j?_(e,t)?`certa`:n===M?`errada`:`apagada`:`neutro`}function Te(e){return String.fromCharCode(65+e)}function Ee(){let r=O.length===0?0:Math.round(k/O.length*100),i=h(w.sequenciaAtual);return e`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${n.jogo.encerrar} @click=${_e}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${r}%`}></div>
      </div>

      <span class="quiz__contagem">${k+1}/${O.length}</span>

      ${i>1?e`<kk-badge variant="warning" pill>x${i}</kk-badge>`:t}
      ${T===`desafio`?e`
            <kk-badge variant=${B<=10?`danger`:`neutral`} pill>
              ${U?n.jogo.pausadoSelo:n.jogo.segundos(B)}
            </kk-badge>
          `:t}
    </div>
  `}function De(){let r=X();return r===void 0?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:e`
    ${Ee()}

    <div class="jogo__pergunta">${c(s(r.pergunta))}</div>
    ${r.referencia===``?t:Ce(r.referencia)}

    <div class="alternativas">
      ${A.map((t,n)=>e`
          <button
            class="alternativa"
            data-tom=${we(r,t,n)}
            ?data-oculta=${z.includes(n)}
            ?disabled=${j||z.includes(n)}
            @click=${()=>Q(t)}
          >
            <span class="alternativa__letra">${Te(n)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${j?e`
          <kk-alert variant=${N?`success`:`danger`} open>
            ${P?n.jogo.feedbackTempo:N?n.jogo.feedbackCorreto(F):n.jogo.feedbackIncorreto}
          </kk-alert>

          ${r.explicacao===``?t:e`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${n.jogo.explicacao}
                  </span>
                  <div class="prosa">${c(s(r.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${ge}>
            ${k+1<O.length?n.jogo.proxima:n.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:e`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${R||w.xpSaldo<15}
              @click=${ve}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${n.jogo.dica(15)}
            </kk-button>

            ${T===`desafio`?e`
                  <kk-button size="small" outline @click=${me}>
                    <kk-icon
                      slot="prefix"
                      name=${U?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${U?n.jogo.retomar:n.jogo.pausar}
                  </kk-button>
                `:t}
          </div>
        `}
  `}function Oe(e){return e===100?n.jogo.resultados.perfeito:e>=80?n.jogo.resultados.excelente:e>=60?n.jogo.resultados.muitoBem:e>=40?n.jogo.resultados.continue:n.jogo.resultados.naoDesista}function ke(){let t=O.length,r=t===0?0:Math.round(I/t*100);return e`
    <h2 class="resultado__titulo">${Oe(r)}</h2>
    <p class="resultado__linha">${n.jogo.acertosDe(I,t,r)}</p>

    <div class="placares">
      ${$(`+${L}`,n.jogo.xpGanho,`aviso`)}
      ${$(`Nv ${m(w.xpHistorico)}`,n.jogo.nivel,`primaria`)}
      ${$(w.xpSaldo,n.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>a(i({origem:`jogo`,referencia:n.jogo.cadernoReferencia,titulo:n.jogo.cadernoTitulo,conteudo:n.jogo.cadernoConteudo(I,t,r)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${n.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{S=`lobby`,w=f(),o()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${n.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>a(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${n.jogo.inicio}
      </kk-button>
    </div>
  `}var Ae={voltarPara(){return`home`},titulo(){return S===`resultado`?n.jogo.tituloResultado:void 0},conteudo(){return de(),G?S===`quiz`?De():S===`resultado`?ke():be():e`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{Ae as telaJogo};