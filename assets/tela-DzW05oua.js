import{s as e}from"./banco-WSl22mr6.js";import{H as t,at as n,g as r,lt as i,n as a,nt as o,st as s,tt as c,v as ee,y as te}from"./index-D0n52eAb.js";import{t as l}from"./unsafe-html-C_000-wi.js";var ne={1:10,2:15,3:20},re={0:45,1:60,2:50,3:30},ie=20,ae=[0,1,2,3],u=`note_jogo_progresso`;function d(){return{xpSaldo:0,xpHistorico:0,sequenciaAtual:0,acertosTotal:0,errosTotal:0,perguntasRespondidas:[],perguntasAcertadas:[]}}function f(){try{let e=JSON.parse(localStorage.getItem(u)??`null`);return{...d(),...e}}catch{return d()}}function p(e){localStorage.setItem(u,JSON.stringify(e))}function oe(e){return Math.floor(Math.sqrt(Math.max(0,e)/100))}function m(e){return e>=20?4:e>=10?3:e>=5?2:1}function se(e){return ne[e]??10}function ce(e){return re[e]??45}function le(e,t,n,r){let i=se(Number(e.dificuldade))*m(t);return r<=0?i:i+Math.floor(n/r*ie)}function ue(e){return Math.floor((e.acertosTotal+e.errosTotal)/10)}function h(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function de(e){return h([{texto:e.resposta1,original:1},{texto:e.resposta2,original:2},{texto:e.resposta3,original:3},{texto:e.resposta4,original:4}])}function g(e,t){return t.original===Number(e.correta)}function _(e,t){return t===0?e:e.filter(e=>Number(e.dificuldade)===t)}function fe(e,t){let n=new Set(t.perguntasRespondidas);return e.filter(e=>!n.has(e.id??-1)).length}function pe(e,t,n){let r=new Set(n.perguntasRespondidas),i=_(e,t),a=h(i.filter(e=>!r.has(e.id??-1))),o=h(i.filter(e=>r.has(e.id??-1)));return[...a,...o].slice(0,10)}function me(e,t){return h(t.map((e,t)=>({alternativa:e,indice:t})).filter(({alternativa:t})=>!g(e,t))).slice(0,2).map(({indice:e})=>e)}function v(e,t){t!==void 0&&!e.includes(t)&&e.push(t)}function he(){return e(`perguntas`).todos()}var y=`lobby`,b=[],x=d(),S=`estudo`,C=0,w=``,T=[],E=0,D=[],O=!1,k=null,A=!1,j=!1,M=0,N=0,P=0,F=!1,I=[],L=0,R=0,z=0,B=!1,V,H=!1,U=!1,W=null;function G(){H||U||W!==null||(U=!0,_e(),(async()=>{try{b=await he(),x=f(),H=!0}catch(e){console.error(`jogo: a carga falhou.`,e),W=te(e)}finally{U=!1,c()}})())}function ge(){W=null,G(),c()}var K=!1;function _e(){K||(K=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(y===`quiz`&&S===`desafio`&&!O&&(B=!0,L=Math.max(0,Math.ceil((z-Date.now())/1e3))),q())}))}function q(){clearInterval(V),V=void 0}function J(){q(),V=setInterval(()=>{if(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),L===0){q(),Z(null);return}c()},250)}function ve(){R=ce(C),L=R,z=Date.now()+R*1e3,B=!1,J()}function ye(){B=!B,B?(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),q()):(z=Date.now()+L*1e3,J()),c()}function Y(){return T[E]}function X(){let e=Y();e!==void 0&&(O=!1,k=null,A=!1,j=!1,M=0,F=!1,I=[],D=de(e),q(),B=!1,S===`desafio`?ve():(R=0,L=0))}function be(){if(_(b,C).length<2){w=n.jogo.semPerguntas,c();return}w=``,T=pe(b,C,x),E=0,N=0,P=0,X(),y=`quiz`,c()}function Z(e){if(O)return;let t=Y();t!==void 0&&(q(),O=!0,j=e===null,A=e!==null&&g(t,e),A?(N+=1,x.acertosTotal+=1,x.sequenciaAtual+=1,M=le(t,x.sequenciaAtual,L,R),x.xpSaldo+=M,x.xpHistorico+=M,P+=M,v(x.perguntasAcertadas,t.id)):(x.errosTotal+=1,x.sequenciaAtual=0),v(x.perguntasRespondidas,t.id),p(x),c())}function xe(){if(E+1>=T.length){y=`resultado`,c();return}E+=1,X(),c()}function Se(){q(),y=`lobby`,c()}function Ce(){let e=Y();e===void 0||O||F||x.xpSaldo<15||(x.xpSaldo-=15,p(x),I=me(e,D),F=!0,c())}async function we(){await r({titulo:n.jogo.reiniciarTitulo,texto:n.jogo.reiniciarTexto,rotuloConfirmar:n.jogo.reiniciar})&&(x.perguntasRespondidas=[],x.perguntasAcertadas=[],p(x),c())}function Q(e,t,n=`neutro`){return i`
    <div class="placar">
      <span class="placar__valor" data-tom=${n}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function $(){let e=_(b,C),t=fe(e,x),r=e.length>0&&t===0,a=b.length===0;return i`
    <div class="placares">
      ${Q(t,n.jogo.restantes,`primaria`)}
      ${Q(x.acertosTotal,n.jogo.acertos,`sucesso`)}
      ${Q(x.errosTotal,n.jogo.erros,`perigo`)}
      ${Q(ue(x),n.jogo.partidas)}
      ${Q(x.xpSaldo,n.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${n.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>i`
          <button
            class="modo"
            ?data-ativo=${S===e}
            @click=${()=>{S=e,w=``,c()}}
          >
            <kk-icon name=${e===`estudo`?`book`:`bolt`}></kk-icon>
            ${n.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${S===`desafio`?i`<p class="discreto">${n.jogo.desafioAjuda}</p>`:s}

    <h2 class="secao">${n.jogo.dificuldade}</h2>
    <div class="chips">
      ${ae.map(e=>i`
          <button
            class="chip"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,w=``,c()}}
          >
            ${n.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${a} @click=${be}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${a?n.jogo.semBanco:n.jogo.jogar}
    </kk-button>

    ${w===``?s:i`<kk-alert variant="warning" open>${w}</kk-alert>`}

    ${r?i`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${n.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void we()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${n.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:s}
  `}var Te=/(https?:\/\/[^\s<]+)/g,Ee=/^https?:\/\/[^\s<]+$/;function De(e){return i`
    <p class="jogo__referencia">
      ${e.split(Te).map(e=>Ee.test(e)?i`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function Oe(e,t,n){return O?g(e,t)?`certa`:n===k?`errada`:`apagada`:`neutro`}function ke(e){return String.fromCharCode(65+e)}function Ae(){let e=T.length===0?0:Math.round(E/T.length*100),t=m(x.sequenciaAtual);return i`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${n.jogo.encerrar} @click=${Se}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${E+1}/${T.length}</span>

      ${t>1?i`<kk-badge variant="warning" pill>x${t}</kk-badge>`:s}
      ${S===`desafio`?i`
            <kk-badge variant=${L<=10?`danger`:`neutral`} pill>
              ${B?n.jogo.pausadoSelo:n.jogo.segundos(L)}
            </kk-badge>
          `:s}
    </div>
  `}function je(){let e=Y();return e===void 0?i`<div class="carregando"><kk-spinner></kk-spinner></div>`:i`
    ${Ae()}

    <div class="jogo__pergunta">${l(a(e.pergunta))}</div>
    ${e.referencia===``?s:De(e.referencia)}

    <div class="alternativas">
      ${D.map((t,n)=>i`
          <button
            class="alternativa"
            data-tom=${Oe(e,t,n)}
            ?data-oculta=${I.includes(n)}
            ?disabled=${O||I.includes(n)}
            @click=${()=>Z(t)}
          >
            <span class="alternativa__letra">${ke(n)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${O?i`
          <kk-alert variant=${A?`success`:`danger`} open>
            ${j?n.jogo.feedbackTempo:A?n.jogo.feedbackCorreto(M):n.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?s:i`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${n.jogo.explicacao}
                  </span>
                  <div class="prosa">${l(a(e.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${xe}>
            ${E+1<T.length?n.jogo.proxima:n.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:i`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${F||x.xpSaldo<15}
              @click=${Ce}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${n.jogo.dica(15)}
            </kk-button>

            ${S===`desafio`?i`
                  <kk-button size="small" outline @click=${ye}>
                    <kk-icon
                      slot="prefix"
                      name=${B?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${B?n.jogo.retomar:n.jogo.pausar}
                  </kk-button>
                `:s}
          </div>
        `}
  `}function Me(e){return e===100?n.jogo.resultados.perfeito:e>=80?n.jogo.resultados.excelente:e>=60?n.jogo.resultados.muitoBem:e>=40?n.jogo.resultados.continue:n.jogo.resultados.naoDesista}function Ne(){let e=T.length,r=e===0?0:Math.round(N/e*100);return i`
    <h2 class="resultado__titulo">${Me(r)}</h2>
    <p class="resultado__linha">${n.jogo.acertosDe(N,e,r)}</p>

    <div class="placares">
      ${Q(`+${P}`,n.jogo.xpGanho,`aviso`)}
      ${Q(`Nv ${oe(x.xpHistorico)}`,n.jogo.nivel,`primaria`)}
      ${Q(x.xpSaldo,n.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>o(t({origem:`jogo`,referencia:n.jogo.cadernoReferencia,titulo:n.jogo.cadernoTitulo,conteudo:n.jogo.cadernoConteudo(N,e,r)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${n.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{y=`lobby`,x=f(),c()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${n.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>o(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${n.jogo.inicio}
      </kk-button>
    </div>
  `}var Pe={voltarPara(){return`home`},titulo(){return y===`resultado`?n.jogo.tituloResultado:void 0},conteudo(){return G(),W===null?H?y===`quiz`?je():y===`resultado`?Ne():$():i`<div class="carregando"><kk-spinner></kk-spinner></div>`:ee(W,ge)}};export{Pe as telaJogo};