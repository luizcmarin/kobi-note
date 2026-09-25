import{U as e,b as t,ct as n,g as r,gt as i,n as a,pt as o,ut as s,vt as c,y as ee}from"./index-sA5grpgQ.js";import{t as l}from"./unsafe-html-Cs37CJNH.js";import{_ as u,a as d,d as te,f,g as ne,h as re,i as p,l as ie,m,n as h,o as g,p as _,r as v,s as ae,t as oe,u as se,v as ce,y as le}from"./dados-DQfEDGgo.js";var y=`lobby`,b=[],x=_(),S=`estudo`,C=0,w=``,T=[],E=0,D=[],O=!1,k=null,A=!1,j=!1,M=0,N=0,P=0,F=!1,I=[],L=0,R=0,z=0,B=!1,V,H=!1,U=!1,W=null;function G(){H||U||W!==null||(U=!0,de(),(async()=>{try{b=await v(),x=await ae(),H=!0}catch(e){console.error(`jogo: a carga falhou.`,e),W=t(e)}finally{U=!1,n()}})())}function ue(){W=null,G(),n()}var K=!1;function de(){K||(K=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(y===`quiz`&&S===`desafio`&&!O&&(B=!0,L=Math.max(0,Math.ceil((z-Date.now())/1e3))),q())}))}function q(){clearInterval(V),V=void 0}function J(){q(),V=setInterval(()=>{if(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),L===0){q(),Z(null);return}n()},250)}function fe(){R=ce(C),L=R,z=Date.now()+R*1e3,B=!1,J()}function pe(){B=!B,B?(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),q()):(z=Date.now()+L*1e3,J()),n()}function Y(){return T[E]}function X(){let e=Y();e!==void 0&&(O=!1,k=null,A=!1,j=!1,M=0,F=!1,I=[],D=h(e),q(),B=!1,S===`desafio`?fe():(R=0,L=0))}function me(){if(p(b,C).length<2){w=o.jogo.semPerguntas,n();return}w=``,T=ie(b,C,x),E=0,N=0,P=0,X(),y=`quiz`,n()}function Z(e){if(O)return;let t=Y();t!==void 0&&(q(),O=!0,j=e===null,A=e!==null&&d(t,e),A?(N+=1,x.acertosTotal+=1,x.sequenciaAtual+=1,M=le(t,x.sequenciaAtual,L,R),x.xpSaldo+=M,x.xpHistorico+=M,P+=M,m(x.perguntasAcertadas,t.id)):(x.errosTotal+=1,x.sequenciaAtual=0),m(x.perguntasRespondidas,t.id),re(t.id??0,A),u(x),n())}function he(){if(E+1>=T.length){x.partidas+=1,u(x),y=`resultado`,n();return}E+=1,X(),n()}function ge(){q(),y=`lobby`,n()}function _e(){let e=Y();e===void 0||O||F||x.xpSaldo<15||(x.xpSaldo-=15,u(x),I=f(e,D),F=!0,n())}async function ve(){await r({titulo:o.jogo.reiniciarTitulo,texto:o.jogo.reiniciarTexto,rotuloConfirmar:o.jogo.reiniciar})&&(await g(),x.perguntasRespondidas=[],x.perguntasAcertadas=[],n())}function Q(e,t,n=`neutro`){return c`
    <div class="placar">
      <span class="placar__valor" data-tom=${n}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function ye(){let e=p(b,C),t=ne(e,x),r=e.length>0&&t===0,a=b.length===0;return c`
    <div class="placares">
      ${Q(t,o.jogo.restantes,`primaria`)}
      ${Q(x.acertosTotal,o.jogo.acertos,`sucesso`)}
      ${Q(x.errosTotal,o.jogo.erros,`perigo`)}
      ${Q(x.partidas,o.jogo.partidas)}
      ${Q(x.xpSaldo,o.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${o.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>c`
          <button
            class="modo"
            ?data-ativo=${S===e}
            @click=${()=>{S=e,w=``,n()}}
          >
            <kk-icon name=${e===`estudo`?`book`:`bolt`}></kk-icon>
            ${o.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${S===`desafio`?c`<p class="discreto">${o.jogo.desafioAjuda}</p>`:i}

    <h2 class="secao">${o.jogo.dificuldade}</h2>
    <div class="chips">
      ${oe.map(e=>c`
          <button
            class="chip"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,w=``,n()}}
          >
            ${o.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${a} @click=${me}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${a?o.jogo.semBanco:o.jogo.jogar}
    </kk-button>

    ${w===``?i:c`<kk-alert variant="warning" open>${w}</kk-alert>`}

    ${r?c`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${o.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void ve()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${o.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:i}
  `}var be=/(https?:\/\/[^\s<]+)/g,xe=/^https?:\/\/[^\s<]+$/;function Se(e){return c`
    <p class="jogo__referencia">
      ${e.split(be).map(e=>xe.test(e)?c`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function Ce(e,t,n){return O?d(e,t)?`certa`:n===k?`errada`:`apagada`:`neutro`}function $(e){return String.fromCharCode(65+e)}function we(){let e=T.length===0?0:Math.round(E/T.length*100),t=se(x.sequenciaAtual);return c`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${o.jogo.encerrar} @click=${ge}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${E+1}/${T.length}</span>

      ${t>1?c`<kk-badge variant="warning" pill>x${t}</kk-badge>`:i}
      ${S===`desafio`?c`
            <kk-badge variant=${L<=10?`danger`:`neutral`} pill>
              ${B?o.jogo.pausadoSelo:o.jogo.segundos(L)}
            </kk-badge>
          `:i}
    </div>
  `}function Te(){let e=Y();return e===void 0?c`<div class="carregando"><kk-spinner></kk-spinner></div>`:c`
    ${we()}

    <div class="jogo__pergunta">${l(a(e.pergunta))}</div>
    ${e.referencia===``?i:Se(e.referencia)}

    <div class="alternativas">
      ${D.map((t,n)=>c`
          <button
            class="alternativa"
            data-tom=${Ce(e,t,n)}
            ?data-oculta=${I.includes(n)}
            ?disabled=${O||I.includes(n)}
            @click=${()=>Z(t)}
          >
            <span class="alternativa__letra">${$(n)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${O?c`
          <kk-alert variant=${A?`success`:`danger`} open>
            ${j?o.jogo.feedbackTempo:A?o.jogo.feedbackCorreto(M):o.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?i:c`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${o.jogo.explicacao}
                  </span>
                  <div class="prosa">${l(a(e.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${he}>
            ${E+1<T.length?o.jogo.proxima:o.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:c`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${F||x.xpSaldo<15}
              @click=${_e}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${o.jogo.dica(15)}
            </kk-button>

            ${S===`desafio`?c`
                  <kk-button size="small" outline @click=${pe}>
                    <kk-icon
                      slot="prefix"
                      name=${B?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${B?o.jogo.retomar:o.jogo.pausar}
                  </kk-button>
                `:i}
          </div>
        `}
  `}function Ee(e){return e===100?o.jogo.resultados.perfeito:e>=80?o.jogo.resultados.excelente:e>=60?o.jogo.resultados.muitoBem:e>=40?o.jogo.resultados.continue:o.jogo.resultados.naoDesista}function De(){let t=T.length,r=t===0?0:Math.round(N/t*100);return c`
    <h2 class="resultado__titulo">${Ee(r)}</h2>
    <p class="resultado__linha">${o.jogo.acertosDe(N,t,r)}</p>

    <div class="placares">
      ${Q(`+${P}`,o.jogo.xpGanho,`aviso`)}
      ${Q(`Nv ${te(x.xpHistorico)}`,o.jogo.nivel,`primaria`)}
      ${Q(x.xpSaldo,o.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>s(e({origem:`jogo`,titulo:o.jogo.cadernoTitulo,conteudo:o.jogo.cadernoConteudo(N,t,r)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${o.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{y=`lobby`,n()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${o.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>s(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${o.jogo.inicio}
      </kk-button>
    </div>
  `}var Oe={voltarPara(){return`home`},titulo(){return y===`resultado`?o.jogo.tituloResultado:void 0},conteudo(){return G(),W===null?H?y===`quiz`?Te():y===`resultado`?De():ye():c`<div class="carregando"><kk-spinner></kk-spinner></div>`:ee(W,ue)}};export{Oe as telaJogo};