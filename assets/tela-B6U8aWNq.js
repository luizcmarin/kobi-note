import{a as e}from"./banco-wLWgzTAl.js";import{$ as t,K as n,Q as r,at as i,n as a,nt as o,p as s,rt as c}from"./index-BQ2FB00A.js";import{t as l}from"./unsafe-html-9nTeeUn_.js";var ee={1:10,2:15,3:20},te={0:45,1:60,2:50,3:30},ne=20,re=[0,1,2,3],u=`note_jogo_progresso`;function d(){return{xpSaldo:0,xpHistorico:0,sequenciaAtual:0,acertosTotal:0,errosTotal:0,perguntasRespondidas:[],perguntasAcertadas:[]}}function f(){try{let e=JSON.parse(localStorage.getItem(u)??`null`);return{...d(),...e}}catch{return d()}}function p(e){localStorage.setItem(u,JSON.stringify(e))}function ie(e){return Math.floor(Math.sqrt(Math.max(0,e)/100))}function m(e){return e>=20?4:e>=10?3:e>=5?2:1}function ae(e){return ee[e]??10}function oe(e){return te[e]??45}function se(e,t,n,r){let i=ae(Number(e.dificuldade))*m(t);return r<=0?i:i+Math.floor(n/r*ne)}function ce(e){return Math.floor((e.acertosTotal+e.errosTotal)/10)}function h(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function g(e){return h([{texto:e.resposta1,original:1},{texto:e.resposta2,original:2},{texto:e.resposta3,original:3},{texto:e.resposta4,original:4}])}function _(e,t){return t.original===Number(e.correta)}function v(e,t){return t===0?e:e.filter(e=>Number(e.dificuldade)===t)}function le(e,t){let n=new Set(t.perguntasRespondidas);return e.filter(e=>!n.has(e.id??-1)).length}function ue(e,t,n){let r=new Set(n.perguntasRespondidas),i=v(e,t),a=h(i.filter(e=>!r.has(e.id??-1))),o=h(i.filter(e=>r.has(e.id??-1)));return[...a,...o].slice(0,10)}function de(e,t){return h(t.map((e,t)=>({alternativa:e,indice:t})).filter(({alternativa:t})=>!_(e,t))).slice(0,2).map(({indice:e})=>e)}function y(e,t){t!==void 0&&!e.includes(t)&&e.push(t)}function b(){return e(`perguntas`).todos()}var x=`lobby`,S=[],C=d(),w=`estudo`,T=0,E=``,D=[],O=0,k=[],A=!1,j=null,M=!1,N=!1,P=0,F=0,I=0,L=!1,R=[],z=0,B=0,V=0,H=!1,U,W=!1,G=!1;function fe(){W||G||(G=!0,pe(),(async()=>{try{S=await b(),C=f(),W=!0}finally{G=!1,r()}})())}var K=!1;function pe(){K||(K=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(x===`quiz`&&w===`desafio`&&!A&&(H=!0,z=Math.max(0,Math.ceil((V-Date.now())/1e3))),q())}))}function q(){clearInterval(U),U=void 0}function J(){q(),U=setInterval(()=>{if(z=Math.max(0,Math.ceil((V-Date.now())/1e3)),z===0){q(),Z(null);return}r()},250)}function me(){B=oe(T),z=B,V=Date.now()+B*1e3,H=!1,J()}function he(){H=!H,H?(z=Math.max(0,Math.ceil((V-Date.now())/1e3)),q()):(V=Date.now()+z*1e3,J()),r()}function Y(){return D[O]}function X(){let e=Y();e!==void 0&&(A=!1,j=null,M=!1,N=!1,P=0,L=!1,R=[],k=g(e),q(),H=!1,w===`desafio`?me():(B=0,z=0))}function ge(){if(v(S,T).length<2){E=o.jogo.semPerguntas,r();return}E=``,D=ue(S,T,C),O=0,F=0,I=0,X(),x=`quiz`,r()}function Z(e){if(A)return;let t=Y();t!==void 0&&(q(),A=!0,N=e===null,M=e!==null&&_(t,e),M?(F+=1,C.acertosTotal+=1,C.sequenciaAtual+=1,P=se(t,C.sequenciaAtual,z,B),C.xpSaldo+=P,C.xpHistorico+=P,I+=P,y(C.perguntasAcertadas,t.id)):(C.errosTotal+=1,C.sequenciaAtual=0),y(C.perguntasRespondidas,t.id),p(C),r())}function _e(){if(O+1>=D.length){x=`resultado`,r();return}O+=1,X(),r()}function ve(){q(),x=`lobby`,r()}function Q(){let e=Y();e===void 0||A||L||C.xpSaldo<15||(C.xpSaldo-=15,p(C),R=de(e,k),L=!0,r())}async function ye(){await s({titulo:o.jogo.reiniciarTitulo,texto:o.jogo.reiniciarTexto,rotuloConfirmar:o.jogo.reiniciar})&&(C.perguntasRespondidas=[],C.perguntasAcertadas=[],p(C),r())}function $(e,t,n=`neutro`){return i`
    <div class="placar">
      <span class="placar__valor" data-tom=${n}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function be(){let e=v(S,T),t=le(e,C),n=e.length>0&&t===0,a=S.length===0;return i`
    <div class="placares">
      ${$(t,o.jogo.restantes,`primaria`)}
      ${$(C.acertosTotal,o.jogo.acertos,`sucesso`)}
      ${$(C.errosTotal,o.jogo.erros,`perigo`)}
      ${$(ce(C),o.jogo.partidas)}
      ${$(C.xpSaldo,o.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${o.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>i`
          <button
            class="modo"
            ?data-ativo=${w===e}
            @click=${()=>{w=e,E=``,r()}}
          >
            <kk-icon name=${e===`estudo`?`book`:`bolt`}></kk-icon>
            ${o.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${w===`desafio`?i`<p class="discreto">${o.jogo.desafioAjuda}</p>`:c}

    <h2 class="secao">${o.jogo.dificuldade}</h2>
    <div class="chips">
      ${re.map(e=>i`
          <button
            class="chip"
            ?data-ativo=${T===e}
            @click=${()=>{T=e,E=``,r()}}
          >
            ${o.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${a} @click=${ge}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${a?o.jogo.semBanco:o.jogo.jogar}
    </kk-button>

    ${E===``?c:i`<kk-alert variant="warning" open>${E}</kk-alert>`}

    ${n?i`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${o.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void ye()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${o.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:c}
  `}var xe=/(https?:\/\/[^\s<]+)/g,Se=/^https?:\/\/[^\s<]+$/;function Ce(e){return i`
    <p class="jogo__referencia">
      ${e.split(xe).map(e=>Se.test(e)?i`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function we(e,t,n){return A?_(e,t)?`certa`:n===j?`errada`:`apagada`:`neutro`}function Te(e){return String.fromCharCode(65+e)}function Ee(){let e=D.length===0?0:Math.round(O/D.length*100),t=m(C.sequenciaAtual);return i`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${o.jogo.encerrar} @click=${ve}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${O+1}/${D.length}</span>

      ${t>1?i`<kk-badge variant="warning" pill>x${t}</kk-badge>`:c}
      ${w===`desafio`?i`
            <kk-badge variant=${z<=10?`danger`:`neutral`} pill>
              ${H?o.jogo.pausadoSelo:o.jogo.segundos(z)}
            </kk-badge>
          `:c}
    </div>
  `}function De(){let e=Y();return e===void 0?i`<div class="carregando"><kk-spinner></kk-spinner></div>`:i`
    ${Ee()}

    <div class="jogo__pergunta">${l(a(e.pergunta))}</div>
    ${e.referencia===``?c:Ce(e.referencia)}

    <div class="alternativas">
      ${k.map((t,n)=>i`
          <button
            class="alternativa"
            data-tom=${we(e,t,n)}
            ?data-oculta=${R.includes(n)}
            ?disabled=${A||R.includes(n)}
            @click=${()=>Z(t)}
          >
            <span class="alternativa__letra">${Te(n)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${A?i`
          <kk-alert variant=${M?`success`:`danger`} open>
            ${N?o.jogo.feedbackTempo:M?o.jogo.feedbackCorreto(P):o.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?c:i`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${o.jogo.explicacao}
                  </span>
                  <div class="prosa">${l(a(e.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${_e}>
            ${O+1<D.length?o.jogo.proxima:o.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:i`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${L||C.xpSaldo<15}
              @click=${Q}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${o.jogo.dica(15)}
            </kk-button>

            ${w===`desafio`?i`
                  <kk-button size="small" outline @click=${he}>
                    <kk-icon
                      slot="prefix"
                      name=${H?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${H?o.jogo.retomar:o.jogo.pausar}
                  </kk-button>
                `:c}
          </div>
        `}
  `}function Oe(e){return e===100?o.jogo.resultados.perfeito:e>=80?o.jogo.resultados.excelente:e>=60?o.jogo.resultados.muitoBem:e>=40?o.jogo.resultados.continue:o.jogo.resultados.naoDesista}function ke(){let e=D.length,a=e===0?0:Math.round(F/e*100);return i`
    <h2 class="resultado__titulo">${Oe(a)}</h2>
    <p class="resultado__linha">${o.jogo.acertosDe(F,e,a)}</p>

    <div class="placares">
      ${$(`+${I}`,o.jogo.xpGanho,`aviso`)}
      ${$(`Nv ${ie(C.xpHistorico)}`,o.jogo.nivel,`primaria`)}
      ${$(C.xpSaldo,o.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>t(n({origem:`jogo`,referencia:o.jogo.cadernoReferencia,titulo:o.jogo.cadernoTitulo,conteudo:o.jogo.cadernoConteudo(F,e,a)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${o.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{x=`lobby`,C=f(),r()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${o.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>t(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${o.jogo.inicio}
      </kk-button>
    </div>
  `}var Ae={voltarPara(){return`home`},titulo(){return x===`resultado`?o.jogo.tituloResultado:void 0},conteudo(){return fe(),W?x===`quiz`?De():x===`resultado`?ke():be():i`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{Ae as telaJogo};