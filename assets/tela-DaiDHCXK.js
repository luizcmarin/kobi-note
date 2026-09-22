import{U as e,b as t,ct as n,dt as r,g as i,gt as a,mt as o,n as s,st as c,y as ee}from"./index-BrLqW3t8.js";import{t as l}from"./unsafe-html-C5YYoSfR.js";import{_ as u,a as d,d as f,f as te,g as p,h as ne,i as m,l as re,m as h,n as g,o as _,p as ie,r as ae,s as oe,t as se,u as ce,v as le,y as v}from"./dados-5rmx66_p.js";var y=`lobby`,b=[],x=ie(),S=`estudo`,C=0,w=``,T=[],E=0,D=[],O=!1,k=null,A=!1,j=!1,M=0,N=0,P=0,F=!1,I=[],L=0,R=0,z=0,B=!1,V,H=!1,U=!1,W=null;function G(){H||U||W!==null||(U=!0,de(),(async()=>{try{b=await ae(),x=await oe(),H=!0}catch(e){console.error(`jogo: a carga falhou.`,e),W=t(e)}finally{U=!1,c()}})())}function ue(){W=null,G(),c()}var K=!1;function de(){K||(K=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(y===`quiz`&&S===`desafio`&&!O&&(B=!0,L=Math.max(0,Math.ceil((z-Date.now())/1e3))),q())}))}function q(){clearInterval(V),V=void 0}function J(){q(),V=setInterval(()=>{if(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),L===0){q(),Z(null);return}c()},250)}function fe(){R=le(C),L=R,z=Date.now()+R*1e3,B=!1,J()}function pe(){B=!B,B?(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),q()):(z=Date.now()+L*1e3,J()),c()}function Y(){return T[E]}function X(){let e=Y();e!==void 0&&(O=!1,k=null,A=!1,j=!1,M=0,F=!1,I=[],D=g(e),q(),B=!1,S===`desafio`?fe():(R=0,L=0))}function me(){if(m(b,C).length<2){w=r.jogo.semPerguntas,c();return}w=``,T=re(b,C,x),E=0,N=0,P=0,X(),y=`quiz`,c()}function Z(e){if(O)return;let t=Y();t!==void 0&&(q(),O=!0,j=e===null,A=e!==null&&d(t,e),A?(N+=1,x.acertosTotal+=1,x.sequenciaAtual+=1,M=v(t,x.sequenciaAtual,L,R),x.xpSaldo+=M,x.xpHistorico+=M,P+=M,h(x.perguntasAcertadas,t.id)):(x.errosTotal+=1,x.sequenciaAtual=0),h(x.perguntasRespondidas,t.id),ne(t.id??0,A),u(x),c())}function he(){if(E+1>=T.length){x.partidas+=1,u(x),y=`resultado`,c();return}E+=1,X(),c()}function ge(){q(),y=`lobby`,c()}function _e(){let e=Y();e===void 0||O||F||x.xpSaldo<15||(x.xpSaldo-=15,u(x),I=te(e,D),F=!0,c())}async function ve(){await i({titulo:r.jogo.reiniciarTitulo,texto:r.jogo.reiniciarTexto,rotuloConfirmar:r.jogo.reiniciar})&&(await _(),x.perguntasRespondidas=[],x.perguntasAcertadas=[],c())}function Q(e,t,n=`neutro`){return a`
    <div class="placar">
      <span class="placar__valor" data-tom=${n}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function ye(){let e=m(b,C),t=p(e,x),n=e.length>0&&t===0,i=b.length===0;return a`
    <div class="placares">
      ${Q(t,r.jogo.restantes,`primaria`)}
      ${Q(x.acertosTotal,r.jogo.acertos,`sucesso`)}
      ${Q(x.errosTotal,r.jogo.erros,`perigo`)}
      ${Q(x.partidas,r.jogo.partidas)}
      ${Q(x.xpSaldo,r.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${r.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>a`
          <button
            class="modo"
            ?data-ativo=${S===e}
            @click=${()=>{S=e,w=``,c()}}
          >
            <kk-icon name=${e===`estudo`?`book`:`bolt`}></kk-icon>
            ${r.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${S===`desafio`?a`<p class="discreto">${r.jogo.desafioAjuda}</p>`:o}

    <h2 class="secao">${r.jogo.dificuldade}</h2>
    <div class="chips">
      ${se.map(e=>a`
          <button
            class="chip"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,w=``,c()}}
          >
            ${r.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${i} @click=${me}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${i?r.jogo.semBanco:r.jogo.jogar}
    </kk-button>

    ${w===``?o:a`<kk-alert variant="warning" open>${w}</kk-alert>`}

    ${n?a`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${r.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void ve()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${r.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:o}
  `}var be=/(https?:\/\/[^\s<]+)/g,xe=/^https?:\/\/[^\s<]+$/;function Se(e){return a`
    <p class="jogo__referencia">
      ${e.split(be).map(e=>xe.test(e)?a`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function Ce(e,t,n){return O?d(e,t)?`certa`:n===k?`errada`:`apagada`:`neutro`}function we(e){return String.fromCharCode(65+e)}function $(){let e=T.length===0?0:Math.round(E/T.length*100),t=ce(x.sequenciaAtual);return a`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${r.jogo.encerrar} @click=${ge}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${E+1}/${T.length}</span>

      ${t>1?a`<kk-badge variant="warning" pill>x${t}</kk-badge>`:o}
      ${S===`desafio`?a`
            <kk-badge variant=${L<=10?`danger`:`neutral`} pill>
              ${B?r.jogo.pausadoSelo:r.jogo.segundos(L)}
            </kk-badge>
          `:o}
    </div>
  `}function Te(){let e=Y();return e===void 0?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:a`
    ${$()}

    <div class="jogo__pergunta">${l(s(e.pergunta))}</div>
    ${e.referencia===``?o:Se(e.referencia)}

    <div class="alternativas">
      ${D.map((t,n)=>a`
          <button
            class="alternativa"
            data-tom=${Ce(e,t,n)}
            ?data-oculta=${I.includes(n)}
            ?disabled=${O||I.includes(n)}
            @click=${()=>Z(t)}
          >
            <span class="alternativa__letra">${we(n)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${O?a`
          <kk-alert variant=${A?`success`:`danger`} open>
            ${j?r.jogo.feedbackTempo:A?r.jogo.feedbackCorreto(M):r.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?o:a`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${r.jogo.explicacao}
                  </span>
                  <div class="prosa">${l(s(e.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${he}>
            ${E+1<T.length?r.jogo.proxima:r.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:a`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${F||x.xpSaldo<15}
              @click=${_e}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${r.jogo.dica(15)}
            </kk-button>

            ${S===`desafio`?a`
                  <kk-button size="small" outline @click=${pe}>
                    <kk-icon
                      slot="prefix"
                      name=${B?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${B?r.jogo.retomar:r.jogo.pausar}
                  </kk-button>
                `:o}
          </div>
        `}
  `}function Ee(e){return e===100?r.jogo.resultados.perfeito:e>=80?r.jogo.resultados.excelente:e>=60?r.jogo.resultados.muitoBem:e>=40?r.jogo.resultados.continue:r.jogo.resultados.naoDesista}function De(){let t=T.length,i=t===0?0:Math.round(N/t*100);return a`
    <h2 class="resultado__titulo">${Ee(i)}</h2>
    <p class="resultado__linha">${r.jogo.acertosDe(N,t,i)}</p>

    <div class="placares">
      ${Q(`+${P}`,r.jogo.xpGanho,`aviso`)}
      ${Q(`Nv ${f(x.xpHistorico)}`,r.jogo.nivel,`primaria`)}
      ${Q(x.xpSaldo,r.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>n(e({origem:`jogo`,referencia:r.jogo.cadernoReferencia,titulo:r.jogo.cadernoTitulo,conteudo:r.jogo.cadernoConteudo(N,t,i)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${r.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{y=`lobby`,c()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${r.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>n(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${r.jogo.inicio}
      </kk-button>
    </div>
  `}var Oe={voltarPara(){return`home`},titulo(){return y===`resultado`?r.jogo.tituloResultado:void 0},conteudo(){return G(),W===null?H?y===`quiz`?Te():y===`resultado`?De():ye():a`<div class="carregando"><kk-spinner></kk-spinner></div>`:ee(W,ue)}};export{Oe as telaJogo};