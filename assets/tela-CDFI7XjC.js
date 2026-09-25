import{U as e,_t as t,b as n,ft as r,g as i,ht as a,lt as o,n as s,st as c,y as ee}from"./index-BESQMk3B.js";import{t as l}from"./unsafe-html-D_sD8y-f.js";import{_ as u,a as d,d as te,f as ne,g as f,h as p,i as m,l as h,m as g,n as re,o as ie,p as ae,r as oe,s as _,t as v,u as se,v as ce,y as le}from"./dados-BC5aR2oM.js";var y=`lobby`,b=[],x=ae(),S=`estudo`,C=0,w=``,T=[],E=0,D=[],O=!1,k=null,A=!1,j=!1,M=0,N=0,P=0,F=!1,I=[],L=0,R=0,z=0,B=!1,V,H=!1,U=!1,W=null;function G(){H||U||W!==null||(U=!0,de(),(async()=>{try{b=await oe(),x=await _(),H=!0}catch(e){console.error(`jogo: a carga falhou.`,e),W=n(e)}finally{U=!1,c()}})())}function ue(){W=null,G(),c()}var K=!1;function de(){K||(K=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(y===`quiz`&&S===`desafio`&&!O&&(B=!0,L=Math.max(0,Math.ceil((z-Date.now())/1e3))),q())}))}function q(){clearInterval(V),V=void 0}function J(){q(),V=setInterval(()=>{if(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),L===0){q(),Z(null);return}c()},250)}function fe(){R=ce(C),L=R,z=Date.now()+R*1e3,B=!1,J()}function pe(){B=!B,B?(L=Math.max(0,Math.ceil((z-Date.now())/1e3)),q()):(z=Date.now()+L*1e3,J()),c()}function Y(){return T[E]}function X(){let e=Y();e!==void 0&&(O=!1,k=null,A=!1,j=!1,M=0,F=!1,I=[],D=re(e),q(),B=!1,S===`desafio`?fe():(R=0,L=0))}function me(){if(m(b,C).length<2){w=r.jogo.semPerguntas,c();return}w=``,T=h(b,C,x),E=0,N=0,P=0,X(),y=`quiz`,c()}function Z(e){if(O)return;let t=Y();t!==void 0&&(q(),O=!0,j=e===null,A=e!==null&&d(t,e),A?(N+=1,x.acertosTotal+=1,x.sequenciaAtual+=1,M=le(t,x.sequenciaAtual,L,R),x.xpSaldo+=M,x.xpHistorico+=M,P+=M,g(x.perguntasAcertadas,t.id)):(x.errosTotal+=1,x.sequenciaAtual=0),g(x.perguntasRespondidas,t.id),p(t.id??0,A),u(x),c())}function he(){if(E+1>=T.length){x.partidas+=1,u(x),y=`resultado`,c();return}E+=1,X(),c()}function ge(){q(),y=`lobby`,c()}function _e(){let e=Y();e===void 0||O||F||x.xpSaldo<15||(x.xpSaldo-=15,u(x),I=ne(e,D),F=!0,c())}async function Q(){await i({titulo:r.jogo.reiniciarTitulo,texto:r.jogo.reiniciarTexto,rotuloConfirmar:r.jogo.reiniciar})&&(await ie(),x.perguntasRespondidas=[],x.perguntasAcertadas=[],c())}function $(e,n,r=`neutro`){return t`
    <div class="placar">
      <span class="placar__valor" data-tom=${r}>${e}</span>
      <span class="placar__rotulo">${n}</span>
    </div>
  `}function ve(){let e=m(b,C),n=f(e,x),i=e.length>0&&n===0,o=b.length===0;return t`
    <div class="placares">
      ${$(n,r.jogo.restantes,`primaria`)}
      ${$(x.acertosTotal,r.jogo.acertos,`sucesso`)}
      ${$(x.errosTotal,r.jogo.erros,`perigo`)}
      ${$(x.partidas,r.jogo.partidas)}
      ${$(x.xpSaldo,r.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${r.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>t`
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
    ${S===`desafio`?t`<p class="discreto">${r.jogo.desafioAjuda}</p>`:a}

    <h2 class="secao">${r.jogo.dificuldade}</h2>
    <div class="chips">
      ${v.map(e=>t`
          <button
            class="chip"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,w=``,c()}}
          >
            ${r.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${o} @click=${me}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${o?r.jogo.semBanco:r.jogo.jogar}
    </kk-button>

    ${w===``?a:t`<kk-alert variant="warning" open>${w}</kk-alert>`}

    ${i?t`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${r.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void Q()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${r.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:a}
  `}var ye=/(https?:\/\/[^\s<]+)/g,be=/^https?:\/\/[^\s<]+$/;function xe(e){return t`
    <p class="jogo__referencia">
      ${e.split(ye).map(e=>be.test(e)?t`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function Se(e,t,n){return O?d(e,t)?`certa`:n===k?`errada`:`apagada`:`neutro`}function Ce(e){return String.fromCharCode(65+e)}function we(){let e=T.length===0?0:Math.round(E/T.length*100),n=se(x.sequenciaAtual);return t`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${r.jogo.encerrar} @click=${ge}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${E+1}/${T.length}</span>

      ${n>1?t`<kk-badge variant="warning" pill>x${n}</kk-badge>`:a}
      ${S===`desafio`?t`
            <kk-badge variant=${L<=10?`danger`:`neutral`} pill>
              ${B?r.jogo.pausadoSelo:r.jogo.segundos(L)}
            </kk-badge>
          `:a}
    </div>
  `}function Te(){let e=Y();return e===void 0?t`<div class="carregando"><kk-spinner></kk-spinner></div>`:t`
    ${we()}

    <div class="jogo__pergunta">${l(s(e.pergunta))}</div>
    ${e.referencia===``?a:xe(e.referencia)}

    <div class="alternativas">
      ${D.map((n,r)=>t`
          <button
            class="alternativa"
            data-tom=${Se(e,n,r)}
            ?data-oculta=${I.includes(r)}
            ?disabled=${O||I.includes(r)}
            @click=${()=>Z(n)}
          >
            <span class="alternativa__letra">${Ce(r)}</span>
            <span>${n.texto}</span>
          </button>
        `)}
    </div>

    ${O?t`
          <kk-alert variant=${A?`success`:`danger`} open>
            ${j?r.jogo.feedbackTempo:A?r.jogo.feedbackCorreto(M):r.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?a:t`
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
        `:t`
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

            ${S===`desafio`?t`
                  <kk-button size="small" outline @click=${pe}>
                    <kk-icon
                      slot="prefix"
                      name=${B?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${B?r.jogo.retomar:r.jogo.pausar}
                  </kk-button>
                `:a}
          </div>
        `}
  `}function Ee(e){return e===100?r.jogo.resultados.perfeito:e>=80?r.jogo.resultados.excelente:e>=60?r.jogo.resultados.muitoBem:e>=40?r.jogo.resultados.continue:r.jogo.resultados.naoDesista}function De(){let n=T.length,i=n===0?0:Math.round(N/n*100);return t`
    <h2 class="resultado__titulo">${Ee(i)}</h2>
    <p class="resultado__linha">${r.jogo.acertosDe(N,n,i)}</p>

    <div class="placares">
      ${$(`+${P}`,r.jogo.xpGanho,`aviso`)}
      ${$(`Nv ${te(x.xpHistorico)}`,r.jogo.nivel,`primaria`)}
      ${$(x.xpSaldo,r.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>o(e({origem:`jogo`,titulo:r.jogo.cadernoTitulo,conteudo:r.jogo.cadernoConteudo(N,n,i)}))}
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
      <kk-button @click=${()=>o(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${r.jogo.inicio}
      </kk-button>
    </div>
  `}var Oe={voltarPara(){return`home`},titulo(){return y===`resultado`?r.jogo.tituloResultado:void 0},conteudo(){return G(),W===null?H?y===`quiz`?Te():y===`resultado`?De():ve():t`<div class="carregando"><kk-spinner></kk-spinner></div>`:ee(W,ue)}};export{Oe as telaJogo};