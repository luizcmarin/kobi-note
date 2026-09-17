import{H as e,ft as t,g as n,mt as r,n as i,ot as a,st as o,ut as s,v as ee,y as te}from"./index-CWdQis_V.js";import{t as c}from"./unsafe-html-B74_ovmz.js";import{_ as l,a as u,d as ne,f as d,g as re,h as ie,i as f,l as ae,m as p,n as m,o as h,p as oe,r as se,s as ce,t as le,u as g,v as _,y as v}from"./dados-DN14487s.js";var y=`lobby`,b=[],x=oe(),S=`estudo`,C=0,w=``,T=[],E=0,D=[],O=!1,k=null,A=!1,j=!1,M=0,N=0,P=0,F=!1,I=[],L=0,R=0,z=0,B=!1,V,H=!1,U=!1,W=null;function G(){H||U||W!==null||(U=!0,de(),(async()=>{try{b=await se(),x=await ce(),H=!0}catch(e){console.error(`jogo: a carga falhou.`,e),W=te(e)}finally{U=!1,a()}})())}function ue(){W=null,G(),a()}var K=!1;function de(){K||(K=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(y===`quiz`&&S===`desafio`&&!O&&(B=!0,L=Math.max(0,Math.ceil((z-Date.now())/1e3))),q())}))}function q(){clearInterval(V),V=void 0}function J(){q(),V=setInterval(()=>{if(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),L===0){q(),Z(null);return}a()},250)}function fe(){R=_(C),L=R,z=Date.now()+R*1e3,B=!1,J()}function pe(){B=!B,B?(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),q()):(z=Date.now()+L*1e3,J()),a()}function Y(){return T[E]}function X(){let e=Y();e!==void 0&&(O=!1,k=null,A=!1,j=!1,M=0,F=!1,I=[],D=m(e),q(),B=!1,S===`desafio`?fe():(R=0,L=0))}function me(){if(f(b,C).length<2){w=s.jogo.semPerguntas,a();return}w=``,T=ae(b,C,x),E=0,N=0,P=0,X(),y=`quiz`,a()}function Z(e){if(O)return;let t=Y();t!==void 0&&(q(),O=!0,j=e===null,A=e!==null&&u(t,e),A?(N+=1,x.acertosTotal+=1,x.sequenciaAtual+=1,M=v(t,x.sequenciaAtual,L,R),x.xpSaldo+=M,x.xpHistorico+=M,P+=M,p(x.perguntasAcertadas,t.id)):(x.errosTotal+=1,x.sequenciaAtual=0),p(x.perguntasRespondidas,t.id),ie(t.id??0,A),l(x),a())}function he(){if(E+1>=T.length){x.partidas+=1,l(x),y=`resultado`,a();return}E+=1,X(),a()}function ge(){q(),y=`lobby`,a()}function _e(){let e=Y();e===void 0||O||F||x.xpSaldo<15||(x.xpSaldo-=15,l(x),I=d(e,D),F=!0,a())}async function ve(){await n({titulo:s.jogo.reiniciarTitulo,texto:s.jogo.reiniciarTexto,rotuloConfirmar:s.jogo.reiniciar})&&(await h(),x.perguntasRespondidas=[],x.perguntasAcertadas=[],a())}function Q(e,t,n=`neutro`){return r`
    <div class="placar">
      <span class="placar__valor" data-tom=${n}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function ye(){let e=f(b,C),n=re(e,x),i=e.length>0&&n===0,o=b.length===0;return r`
    <div class="placares">
      ${Q(n,s.jogo.restantes,`primaria`)}
      ${Q(x.acertosTotal,s.jogo.acertos,`sucesso`)}
      ${Q(x.errosTotal,s.jogo.erros,`perigo`)}
      ${Q(x.partidas,s.jogo.partidas)}
      ${Q(x.xpSaldo,s.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${s.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>r`
          <button
            class="modo"
            ?data-ativo=${S===e}
            @click=${()=>{S=e,w=``,a()}}
          >
            <kk-icon name=${e===`estudo`?`book`:`bolt`}></kk-icon>
            ${s.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${S===`desafio`?r`<p class="discreto">${s.jogo.desafioAjuda}</p>`:t}

    <h2 class="secao">${s.jogo.dificuldade}</h2>
    <div class="chips">
      ${le.map(e=>r`
          <button
            class="chip"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,w=``,a()}}
          >
            ${s.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${o} @click=${me}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${o?s.jogo.semBanco:s.jogo.jogar}
    </kk-button>

    ${w===``?t:r`<kk-alert variant="warning" open>${w}</kk-alert>`}

    ${i?r`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${s.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void ve()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${s.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:t}
  `}var be=/(https?:\/\/[^\s<]+)/g,xe=/^https?:\/\/[^\s<]+$/;function Se(e){return r`
    <p class="jogo__referencia">
      ${e.split(be).map(e=>xe.test(e)?r`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function Ce(e,t,n){return O?u(e,t)?`certa`:n===k?`errada`:`apagada`:`neutro`}function $(e){return String.fromCharCode(65+e)}function we(){let e=T.length===0?0:Math.round(E/T.length*100),n=g(x.sequenciaAtual);return r`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${s.jogo.encerrar} @click=${ge}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${E+1}/${T.length}</span>

      ${n>1?r`<kk-badge variant="warning" pill>x${n}</kk-badge>`:t}
      ${S===`desafio`?r`
            <kk-badge variant=${L<=10?`danger`:`neutral`} pill>
              ${B?s.jogo.pausadoSelo:s.jogo.segundos(L)}
            </kk-badge>
          `:t}
    </div>
  `}function Te(){let e=Y();return e===void 0?r`<div class="carregando"><kk-spinner></kk-spinner></div>`:r`
    ${we()}

    <div class="jogo__pergunta">${c(i(e.pergunta))}</div>
    ${e.referencia===``?t:Se(e.referencia)}

    <div class="alternativas">
      ${D.map((t,n)=>r`
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

    ${O?r`
          <kk-alert variant=${A?`success`:`danger`} open>
            ${j?s.jogo.feedbackTempo:A?s.jogo.feedbackCorreto(M):s.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?t:r`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${s.jogo.explicacao}
                  </span>
                  <div class="prosa">${c(i(e.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${he}>
            ${E+1<T.length?s.jogo.proxima:s.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:r`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${F||x.xpSaldo<15}
              @click=${_e}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${s.jogo.dica(15)}
            </kk-button>

            ${S===`desafio`?r`
                  <kk-button size="small" outline @click=${pe}>
                    <kk-icon
                      slot="prefix"
                      name=${B?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${B?s.jogo.retomar:s.jogo.pausar}
                  </kk-button>
                `:t}
          </div>
        `}
  `}function Ee(e){return e===100?s.jogo.resultados.perfeito:e>=80?s.jogo.resultados.excelente:e>=60?s.jogo.resultados.muitoBem:e>=40?s.jogo.resultados.continue:s.jogo.resultados.naoDesista}function De(){let t=T.length,n=t===0?0:Math.round(N/t*100);return r`
    <h2 class="resultado__titulo">${Ee(n)}</h2>
    <p class="resultado__linha">${s.jogo.acertosDe(N,t,n)}</p>

    <div class="placares">
      ${Q(`+${P}`,s.jogo.xpGanho,`aviso`)}
      ${Q(`Nv ${ne(x.xpHistorico)}`,s.jogo.nivel,`primaria`)}
      ${Q(x.xpSaldo,s.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>o(e({origem:`jogo`,referencia:s.jogo.cadernoReferencia,titulo:s.jogo.cadernoTitulo,conteudo:s.jogo.cadernoConteudo(N,t,n)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${s.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{y=`lobby`,a()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${s.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>o(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${s.jogo.inicio}
      </kk-button>
    </div>
  `}var Oe={voltarPara(){return`home`},titulo(){return y===`resultado`?s.jogo.tituloResultado:void 0},conteudo(){return G(),W===null?H?y===`quiz`?Te():y===`resultado`?De():ye():r`<div class="carregando"><kk-spinner></kk-spinner></div>`:ee(W,ue)}};export{Oe as telaJogo};