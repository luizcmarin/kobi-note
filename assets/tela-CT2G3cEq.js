import{s as e}from"./banco-RAWaFDfp.js";import{H as t,ct as n,et as r,g as i,it as a,n as o,ot as s,tt as c,v as ee,y as te}from"./index-BGY_4f1A.js";import{t as l}from"./unsafe-html-DKex6wD1.js";var ne={1:10,2:15,3:20},re={0:45,1:60,2:50,3:30},ie=20,ae=[0,1,2,3],u=`note_jogo_progresso`;function d(){return{xpSaldo:0,xpHistorico:0,sequenciaAtual:0,acertosTotal:0,errosTotal:0,perguntasRespondidas:[],perguntasAcertadas:[]}}function f(){try{let e=JSON.parse(localStorage.getItem(u)??`null`);return{...d(),...e}}catch{return d()}}function p(e){localStorage.setItem(u,JSON.stringify(e))}function oe(e){return Math.floor(Math.sqrt(Math.max(0,e)/100))}function m(e){return e>=20?4:e>=10?3:e>=5?2:1}function se(e){return ne[e]??10}function ce(e){return re[e]??45}function le(e,t,n,r){let i=se(Number(e.dificuldade))*m(t);return r<=0?i:i+Math.floor(n/r*ie)}function ue(e){return Math.floor((e.acertosTotal+e.errosTotal)/10)}function h(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function de(e){return h([{texto:e.resposta1,original:1},{texto:e.resposta2,original:2},{texto:e.resposta3,original:3},{texto:e.resposta4,original:4}])}function g(e,t){return t.original===Number(e.correta)}function _(e,t){return t===0?e:e.filter(e=>Number(e.dificuldade)===t)}function fe(e,t){let n=new Set(t.perguntasRespondidas);return e.filter(e=>!n.has(e.id??-1)).length}function pe(e,t,n){let r=new Set(n.perguntasRespondidas),i=_(e,t),a=h(i.filter(e=>!r.has(e.id??-1))),o=h(i.filter(e=>r.has(e.id??-1)));return[...a,...o].slice(0,10)}function me(e,t){return h(t.map((e,t)=>({alternativa:e,indice:t})).filter(({alternativa:t})=>!g(e,t))).slice(0,2).map(({indice:e})=>e)}function v(e,t){t!==void 0&&!e.includes(t)&&e.push(t)}function he(){return e(`perguntas`).todos()}var y=`lobby`,b=[],x=d(),S=`estudo`,C=0,w=``,T=[],E=0,D=[],O=!1,k=null,A=!1,j=!1,M=0,N=0,P=0,F=!1,I=[],L=0,R=0,z=0,B=!1,V,H=!1,U=!1,W=null;function G(){H||U||W!==null||(U=!0,_e(),(async()=>{try{b=await he(),x=f(),H=!0}catch(e){console.error(`jogo: a carga falhou.`,e),W=te(e)}finally{U=!1,r()}})())}function ge(){W=null,G(),r()}var K=!1;function _e(){K||(K=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(y===`quiz`&&S===`desafio`&&!O&&(B=!0,L=Math.max(0,Math.ceil((z-Date.now())/1e3))),q())}))}function q(){clearInterval(V),V=void 0}function J(){q(),V=setInterval(()=>{if(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),L===0){q(),Z(null);return}r()},250)}function ve(){R=ce(C),L=R,z=Date.now()+R*1e3,B=!1,J()}function ye(){B=!B,B?(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),q()):(z=Date.now()+L*1e3,J()),r()}function Y(){return T[E]}function X(){let e=Y();e!==void 0&&(O=!1,k=null,A=!1,j=!1,M=0,F=!1,I=[],D=de(e),q(),B=!1,S===`desafio`?ve():(R=0,L=0))}function be(){if(_(b,C).length<2){w=a.jogo.semPerguntas,r();return}w=``,T=pe(b,C,x),E=0,N=0,P=0,X(),y=`quiz`,r()}function Z(e){if(O)return;let t=Y();t!==void 0&&(q(),O=!0,j=e===null,A=e!==null&&g(t,e),A?(N+=1,x.acertosTotal+=1,x.sequenciaAtual+=1,M=le(t,x.sequenciaAtual,L,R),x.xpSaldo+=M,x.xpHistorico+=M,P+=M,v(x.perguntasAcertadas,t.id)):(x.errosTotal+=1,x.sequenciaAtual=0),v(x.perguntasRespondidas,t.id),p(x),r())}function xe(){if(E+1>=T.length){y=`resultado`,r();return}E+=1,X(),r()}function Se(){q(),y=`lobby`,r()}function Ce(){let e=Y();e===void 0||O||F||x.xpSaldo<15||(x.xpSaldo-=15,p(x),I=me(e,D),F=!0,r())}async function we(){await i({titulo:a.jogo.reiniciarTitulo,texto:a.jogo.reiniciarTexto,rotuloConfirmar:a.jogo.reiniciar})&&(x.perguntasRespondidas=[],x.perguntasAcertadas=[],p(x),r())}function Q(e,t,r=`neutro`){return n`
    <div class="placar">
      <span class="placar__valor" data-tom=${r}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function $(){let e=_(b,C),t=fe(e,x),i=e.length>0&&t===0,o=b.length===0;return n`
    <div class="placares">
      ${Q(t,a.jogo.restantes,`primaria`)}
      ${Q(x.acertosTotal,a.jogo.acertos,`sucesso`)}
      ${Q(x.errosTotal,a.jogo.erros,`perigo`)}
      ${Q(ue(x),a.jogo.partidas)}
      ${Q(x.xpSaldo,a.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${a.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>n`
          <button
            class="modo"
            ?data-ativo=${S===e}
            @click=${()=>{S=e,w=``,r()}}
          >
            <kk-icon name=${e===`estudo`?`book`:`bolt`}></kk-icon>
            ${a.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${S===`desafio`?n`<p class="discreto">${a.jogo.desafioAjuda}</p>`:s}

    <h2 class="secao">${a.jogo.dificuldade}</h2>
    <div class="chips">
      ${ae.map(e=>n`
          <button
            class="chip"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,w=``,r()}}
          >
            ${a.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${o} @click=${be}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${o?a.jogo.semBanco:a.jogo.jogar}
    </kk-button>

    ${w===``?s:n`<kk-alert variant="warning" open>${w}</kk-alert>`}

    ${i?n`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${a.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void we()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${a.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:s}
  `}var Te=/(https?:\/\/[^\s<]+)/g,Ee=/^https?:\/\/[^\s<]+$/;function De(e){return n`
    <p class="jogo__referencia">
      ${e.split(Te).map(e=>Ee.test(e)?n`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function Oe(e,t,n){return O?g(e,t)?`certa`:n===k?`errada`:`apagada`:`neutro`}function ke(e){return String.fromCharCode(65+e)}function Ae(){let e=T.length===0?0:Math.round(E/T.length*100),t=m(x.sequenciaAtual);return n`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${a.jogo.encerrar} @click=${Se}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${E+1}/${T.length}</span>

      ${t>1?n`<kk-badge variant="warning" pill>x${t}</kk-badge>`:s}
      ${S===`desafio`?n`
            <kk-badge variant=${L<=10?`danger`:`neutral`} pill>
              ${B?a.jogo.pausadoSelo:a.jogo.segundos(L)}
            </kk-badge>
          `:s}
    </div>
  `}function je(){let e=Y();return e===void 0?n`<div class="carregando"><kk-spinner></kk-spinner></div>`:n`
    ${Ae()}

    <div class="jogo__pergunta">${l(o(e.pergunta))}</div>
    ${e.referencia===``?s:De(e.referencia)}

    <div class="alternativas">
      ${D.map((t,r)=>n`
          <button
            class="alternativa"
            data-tom=${Oe(e,t,r)}
            ?data-oculta=${I.includes(r)}
            ?disabled=${O||I.includes(r)}
            @click=${()=>Z(t)}
          >
            <span class="alternativa__letra">${ke(r)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${O?n`
          <kk-alert variant=${A?`success`:`danger`} open>
            ${j?a.jogo.feedbackTempo:A?a.jogo.feedbackCorreto(M):a.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?s:n`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${a.jogo.explicacao}
                  </span>
                  <div class="prosa">${l(o(e.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${xe}>
            ${E+1<T.length?a.jogo.proxima:a.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:n`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${F||x.xpSaldo<15}
              @click=${Ce}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${a.jogo.dica(15)}
            </kk-button>

            ${S===`desafio`?n`
                  <kk-button size="small" outline @click=${ye}>
                    <kk-icon
                      slot="prefix"
                      name=${B?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${B?a.jogo.retomar:a.jogo.pausar}
                  </kk-button>
                `:s}
          </div>
        `}
  `}function Me(e){return e===100?a.jogo.resultados.perfeito:e>=80?a.jogo.resultados.excelente:e>=60?a.jogo.resultados.muitoBem:e>=40?a.jogo.resultados.continue:a.jogo.resultados.naoDesista}function Ne(){let e=T.length,i=e===0?0:Math.round(N/e*100);return n`
    <h2 class="resultado__titulo">${Me(i)}</h2>
    <p class="resultado__linha">${a.jogo.acertosDe(N,e,i)}</p>

    <div class="placares">
      ${Q(`+${P}`,a.jogo.xpGanho,`aviso`)}
      ${Q(`Nv ${oe(x.xpHistorico)}`,a.jogo.nivel,`primaria`)}
      ${Q(x.xpSaldo,a.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>c(t({origem:`jogo`,referencia:a.jogo.cadernoReferencia,titulo:a.jogo.cadernoTitulo,conteudo:a.jogo.cadernoConteudo(N,e,i)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${a.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{y=`lobby`,x=f(),r()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${a.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>c(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${a.jogo.inicio}
      </kk-button>
    </div>
  `}var Pe={voltarPara(){return`home`},titulo(){return y===`resultado`?a.jogo.tituloResultado:void 0},conteudo(){return G(),W===null?H?y===`quiz`?je():y===`resultado`?Ne():$():n`<div class="carregando"><kk-spinner></kk-spinner></div>`:ee(W,ge)}};export{Pe as telaJogo};