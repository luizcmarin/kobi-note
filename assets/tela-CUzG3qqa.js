import{C as e,_t as t,bt as n,ft as r,g as i,mt as a,n as o,q as ee,w as te,xt as s,y as c}from"./index-tEHw1VqD.js";import{_ as l,a as u,d,f as ne,g as f,h as re,i as p,l as m,m as h,n as ie,o as ae,p as oe,r as g,s as _,t as v,u as se,v as ce,y}from"./dados-DQfEDGgo.js";var b=`lobby`,x=[],S=oe(),C=`estudo`,w=0,T=``,E=[],D=0,O=[],k=!1,A=null,j=!1,M=!1,N=0,P=0,F=0,I=!1,L=[],R=0,z=0,B=0,V=!1,H,U=!1,W=!1,G=null;function K(){U||W||G!==null||(W=!0,ue(),(async()=>{try{x=await g(),S=await _(),U=!0}catch(e){console.error(`jogo: a carga falhou.`,e),G=te(e)}finally{W=!1,r()}})())}function le(){G=null,K(),r()}var q=!1;function ue(){q||(q=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(b===`quiz`&&C===`desafio`&&!k&&(V=!0,R=Math.max(0,Math.ceil((B-Date.now())/1e3))),J())}))}function J(){clearInterval(H),H=void 0}function Y(){J(),H=setInterval(()=>{if(R=Math.max(0,Math.ceil((B-Date.now())/1e3)),R===0){J(),Q(null);return}r()},250)}function de(){z=ce(w),R=z,B=Date.now()+z*1e3,V=!1,Y()}function fe(){V=!V,V?(R=Math.max(0,Math.ceil((B-Date.now())/1e3)),J()):(B=Date.now()+R*1e3,Y()),r()}function X(){return E[D]}function Z(){let e=X();e!==void 0&&(k=!1,A=null,j=!1,M=!1,N=0,I=!1,L=[],O=ie(e),J(),V=!1,C===`desafio`?de():(z=0,R=0))}function pe(){if(p(x,w).length<2){T=t.jogo.semPerguntas,r();return}T=``,E=m(x,w,S),D=0,P=0,F=0,Z(),b=`quiz`,r()}function Q(e){if(k)return;let t=X();t!==void 0&&(J(),k=!0,M=e===null,j=e!==null&&u(t,e),j?(P+=1,S.acertosTotal+=1,S.sequenciaAtual+=1,N=y(t,S.sequenciaAtual,R,z),S.xpSaldo+=N,S.xpHistorico+=N,F+=N,h(S.perguntasAcertadas,t.id)):(S.errosTotal+=1,S.sequenciaAtual=0),h(S.perguntasRespondidas,t.id),re(t.id??0,j),l(S),r())}function me(){if(D+1>=E.length){S.partidas+=1,l(S),b=`resultado`,r();return}D+=1,Z(),r()}function he(){J(),b=`lobby`,r()}function ge(){let e=X();e===void 0||k||I||S.xpSaldo<15||(S.xpSaldo-=15,l(S),L=ne(e,O),I=!0,r())}async function _e(){await i({titulo:t.jogo.reiniciarTitulo,texto:t.jogo.reiniciarTexto,rotuloConfirmar:t.jogo.reiniciar})&&(await ae(),S.perguntasRespondidas=[],S.perguntasAcertadas=[],r())}function $(e,t,n=`neutro`){return s`
    <div class="placar">
      <span class="placar__valor" data-tom=${n}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function ve(){let e=p(x,w),i=f(e,S),a=e.length>0&&i===0,o=x.length===0;return s`
    <div class="placares">
      ${$(i,t.jogo.restantes,`primaria`)}
      ${$(S.acertosTotal,t.jogo.acertos,`sucesso`)}
      ${$(S.errosTotal,t.jogo.erros,`perigo`)}
      ${$(S.partidas,t.jogo.partidas)}
      ${$(S.xpSaldo,t.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${t.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>s`
          <button
            class="modo"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,T=``,r()}}
          >
            <kk-icon name=${e===`estudo`?`book`:`bolt`}></kk-icon>
            ${t.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${C===`desafio`?s`<p class="discreto">${t.jogo.desafioAjuda}</p>`:n}

    <h2 class="secao">${t.jogo.dificuldade}</h2>
    <div class="chips">
      ${v.map(e=>s`
          <button
            class="chip"
            ?data-ativo=${w===e}
            @click=${()=>{w=e,T=``,r()}}
          >
            ${t.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${o} @click=${pe}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${o?t.jogo.semBanco:t.jogo.jogar}
    </kk-button>

    ${T===``?n:s`<kk-alert variant="warning" open>${T}</kk-alert>`}

    ${a?s`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${t.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void _e()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${t.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:n}
  `}var ye=/(https?:\/\/[^\s<]+)/g,be=/^https?:\/\/[^\s<]+$/;function xe(e){return s`
    <p class="jogo__referencia">
      ${e.split(ye).map(e=>be.test(e)?s`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function Se(e,t,n){return k?u(e,t)?`certa`:n===A?`errada`:`apagada`:`neutro`}function Ce(e){return String.fromCharCode(65+e)}function we(){let e=E.length===0?0:Math.round(D/E.length*100),r=se(S.sequenciaAtual);return s`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${t.jogo.encerrar} @click=${he}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${D+1}/${E.length}</span>

      ${r>1?s`<kk-badge variant="warning" pill>x${r}</kk-badge>`:n}
      ${C===`desafio`?s`
            <kk-badge variant=${R<=10?`danger`:`neutral`} pill>
              ${V?t.jogo.pausadoSelo:t.jogo.segundos(R)}
            </kk-badge>
          `:n}
    </div>
  `}function Te(){let e=X();return e===void 0?s`<div class="carregando"><kk-spinner></kk-spinner></div>`:s`
    ${we()}

    <div class="jogo__pergunta">${c(o(e.pergunta))}</div>
    ${e.referencia===``?n:xe(e.referencia)}

    <div class="alternativas">
      ${O.map((t,n)=>s`
          <button
            class="alternativa"
            data-tom=${Se(e,t,n)}
            ?data-oculta=${L.includes(n)}
            ?disabled=${k||L.includes(n)}
            @click=${()=>Q(t)}
          >
            <span class="alternativa__letra">${Ce(n)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${k?s`
          <kk-alert variant=${j?`success`:`danger`} open>
            ${M?t.jogo.feedbackTempo:j?t.jogo.feedbackCorreto(N):t.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?n:s`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${t.jogo.explicacao}
                  </span>
                  <div class="prosa">${c(o(e.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${me}>
            ${D+1<E.length?t.jogo.proxima:t.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:s`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${I||S.xpSaldo<15}
              @click=${ge}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${t.jogo.dica(15)}
            </kk-button>

            ${C===`desafio`?s`
                  <kk-button size="small" outline @click=${fe}>
                    <kk-icon
                      slot="prefix"
                      name=${V?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${V?t.jogo.retomar:t.jogo.pausar}
                  </kk-button>
                `:n}
          </div>
        `}
  `}function Ee(e){return e===100?t.jogo.resultados.perfeito:e>=80?t.jogo.resultados.excelente:e>=60?t.jogo.resultados.muitoBem:e>=40?t.jogo.resultados.continue:t.jogo.resultados.naoDesista}function De(){let e=E.length,n=e===0?0:Math.round(P/e*100);return s`
    <h2 class="resultado__titulo">${Ee(n)}</h2>
    <p class="resultado__linha">${t.jogo.acertosDe(P,e,n)}</p>

    <div class="placares">
      ${$(`+${F}`,t.jogo.xpGanho,`aviso`)}
      ${$(`Nv ${d(S.xpHistorico)}`,t.jogo.nivel,`primaria`)}
      ${$(S.xpSaldo,t.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>a(ee({origem:`jogo`,titulo:t.jogo.cadernoTitulo,conteudo:t.jogo.cadernoConteudo(P,e,n)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${t.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{b=`lobby`,r()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${t.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>a(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${t.jogo.inicio}
      </kk-button>
    </div>
  `}var Oe={voltarPara(){return`home`},titulo(){return b===`resultado`?t.jogo.tituloResultado:void 0},conteudo(){return K(),G===null?U?b===`quiz`?Te():b===`resultado`?De():ve():s`<div class="carregando"><kk-spinner></kk-spinner></div>`:e(G,le)}};export{Oe as telaJogo};