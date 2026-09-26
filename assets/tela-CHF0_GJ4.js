import{S as e,_t as t,b as n,bt as r,ft as i,h as a,mt as o,n as s,q as ee,xt as c,y as te}from"./index-BNLfwB87.js";import{_ as l,a as u,d as ne,f as d,g as re,h as ie,i as f,l as ae,m as p,n as m,o as h,p as oe,r as se,s as ce,t as le,u as g,v as _,y as v}from"./dados-DyyWXQBW.js";var y=`lobby`,b=[],x=oe(),S=`estudo`,C=0,w=``,T=[],E=0,D=[],O=!1,k=null,A=!1,j=!1,M=0,N=0,P=0,F=!1,I=[],L=0,R=0,z=0,B=!1,V,H=!1,U=!1,W=null;function G(){H||U||W!==null||(U=!0,de(),(async()=>{try{b=await se(),x=await ce(),H=!0}catch(e){console.error(`jogo: a carga falhou.`,e),W=n(e)}finally{U=!1,i()}})())}function ue(){W=null,G(),i()}var K=!1;function de(){K||(K=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(y===`quiz`&&S===`desafio`&&!O&&(B=!0,L=Math.max(0,Math.ceil((z-Date.now())/1e3))),q())}))}function q(){clearInterval(V),V=void 0}function J(){q(),V=setInterval(()=>{if(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),L===0){q(),Z(null);return}i()},250)}function fe(){R=_(C),L=R,z=Date.now()+R*1e3,B=!1,J()}function pe(){B=!B,B?(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),q()):(z=Date.now()+L*1e3,J()),i()}function Y(){return T[E]}function X(){let e=Y();e!==void 0&&(O=!1,k=null,A=!1,j=!1,M=0,F=!1,I=[],D=m(e),q(),B=!1,S===`desafio`?fe():(R=0,L=0))}function me(){if(f(b,C).length<2){w=t.jogo.semPerguntas,i();return}w=``,T=ae(b,C,x),E=0,N=0,P=0,X(),y=`quiz`,i()}function Z(e){if(O)return;let t=Y();t!==void 0&&(q(),O=!0,j=e===null,A=e!==null&&u(t,e),A?(N+=1,x.acertosTotal+=1,x.sequenciaAtual+=1,M=v(t,x.sequenciaAtual,L,R),x.xpSaldo+=M,x.xpHistorico+=M,P+=M,p(x.perguntasAcertadas,t.id)):(x.errosTotal+=1,x.sequenciaAtual=0),p(x.perguntasRespondidas,t.id),ie(t.id??0,A),l(x),i())}function he(){if(E+1>=T.length){x.partidas+=1,l(x),y=`resultado`,i();return}E+=1,X(),i()}function ge(){q(),y=`lobby`,i()}function _e(){let e=Y();e===void 0||O||F||x.xpSaldo<15||(x.xpSaldo-=15,l(x),I=d(e,D),F=!0,i())}async function ve(){await e({titulo:t.jogo.reiniciarTitulo,texto:t.jogo.reiniciarTexto,rotuloConfirmar:t.jogo.reiniciar})&&(await h(),x.perguntasRespondidas=[],x.perguntasAcertadas=[],i())}function Q(e,t,n=`neutro`){return c`
    <div class="placar">
      <span class="placar__valor" data-tom=${n}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function ye(){let e=f(b,C),n=re(e,x),a=e.length>0&&n===0,o=b.length===0;return c`
    <div class="placares">
      ${Q(n,t.jogo.restantes,`primaria`)}
      ${Q(x.acertosTotal,t.jogo.acertos,`sucesso`)}
      ${Q(x.errosTotal,t.jogo.erros,`perigo`)}
      ${Q(x.partidas,t.jogo.partidas)}
      ${Q(x.xpSaldo,t.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${t.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>c`
          <button
            class="modo"
            ?data-ativo=${S===e}
            @click=${()=>{S=e,w=``,i()}}
          >
            <kk-icon name=${e===`estudo`?`book`:`bolt`}></kk-icon>
            ${t.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${S===`desafio`?c`<p class="discreto">${t.jogo.desafioAjuda}</p>`:r}

    <h2 class="secao">${t.jogo.dificuldade}</h2>
    <div class="chips">
      ${le.map(e=>c`
          <button
            class="chip"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,w=``,i()}}
          >
            ${t.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${o} @click=${me}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${o?t.jogo.semBanco:t.jogo.jogar}
    </kk-button>

    ${w===``?r:c`<kk-alert variant="warning" open>${w}</kk-alert>`}

    ${a?c`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${t.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void ve()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${t.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:r}
  `}var be=/(https?:\/\/[^\s<]+)/g,xe=/^https?:\/\/[^\s<]+$/;function Se(e){return c`
    <p class="jogo__referencia">
      ${e.split(be).map(e=>xe.test(e)?c`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function Ce(e,t,n){return O?u(e,t)?`certa`:n===k?`errada`:`apagada`:`neutro`}function $(e){return String.fromCharCode(65+e)}function we(){let e=T.length===0?0:Math.round(E/T.length*100),n=g(x.sequenciaAtual);return c`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${t.jogo.encerrar} @click=${ge}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${E+1}/${T.length}</span>

      ${n>1?c`<kk-badge variant="warning" pill>x${n}</kk-badge>`:r}
      ${S===`desafio`?c`
            <kk-badge variant=${L<=10?`danger`:`neutral`} pill>
              ${B?t.jogo.pausadoSelo:t.jogo.segundos(L)}
            </kk-badge>
          `:r}
    </div>
  `}function Te(){let e=Y();return e===void 0?c`<div class="carregando"><kk-spinner></kk-spinner></div>`:c`
    ${we()}

    <div class="jogo__pergunta">${a(s(e.pergunta))}</div>
    ${e.referencia===``?r:Se(e.referencia)}

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
            ${j?t.jogo.feedbackTempo:A?t.jogo.feedbackCorreto(M):t.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?r:c`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${t.jogo.explicacao}
                  </span>
                  <div class="prosa">${a(s(e.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${he}>
            ${E+1<T.length?t.jogo.proxima:t.jogo.verResultado}
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
              <kk-icon slot="prefix" name="bulb"></kk-icon>${t.jogo.dica(15)}
            </kk-button>

            ${S===`desafio`?c`
                  <kk-button size="small" outline @click=${pe}>
                    <kk-icon
                      slot="prefix"
                      name=${B?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${B?t.jogo.retomar:t.jogo.pausar}
                  </kk-button>
                `:r}
          </div>
        `}
  `}function Ee(e){return e===100?t.jogo.resultados.perfeito:e>=80?t.jogo.resultados.excelente:e>=60?t.jogo.resultados.muitoBem:e>=40?t.jogo.resultados.continue:t.jogo.resultados.naoDesista}function De(){let e=T.length,n=e===0?0:Math.round(N/e*100);return c`
    <h2 class="resultado__titulo">${Ee(n)}</h2>
    <p class="resultado__linha">${t.jogo.acertosDe(N,e,n)}</p>

    <div class="placares">
      ${Q(`+${P}`,t.jogo.xpGanho,`aviso`)}
      ${Q(`Nv ${ne(x.xpHistorico)}`,t.jogo.nivel,`primaria`)}
      ${Q(x.xpSaldo,t.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>o(ee({origem:`jogo`,titulo:t.jogo.cadernoTitulo,conteudo:t.jogo.cadernoConteudo(N,e,n)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${t.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{y=`lobby`,i()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${t.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>o(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${t.jogo.inicio}
      </kk-button>
    </div>
  `}var Oe={voltarPara(){return`home`},titulo(){return y===`resultado`?t.jogo.tituloResultado:void 0},conteudo(){return G(),W===null?H?y===`quiz`?Te():y===`resultado`?De():ye():c`<div class="carregando"><kk-spinner></kk-spinner></div>`:te(W,ue)}};export{Oe as telaJogo};