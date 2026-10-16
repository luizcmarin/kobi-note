import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-V1DWQvwW.js";import{n as r,r as i}from"./rotas-CR8kk0YZ.js";import{n as a}from"./acessibilidade-0dW0_ixm.js";import{l as o}from"./dados-DHpv3lDS.js";import{A as s,T as c,ct as l,n as u}from"./index-Dqmsht0l.js";import{t as d}from"./carga-yT611LUW.js";import{_ as f,a as p,d as m,f as ee,g as te,h as ne,i as h,l as g,m as _,n as re,o as ie,p as ae,r as oe,s as v,t as y,u as b,v as x,y as S}from"./dados-hwuYLf5x.js";var C=`lobby`,w=[],T=ae(),E=`estudo`,D=0,O=``,k=[],A=0,j=[],M=!1,N=null,P=!1,F=!1,I=0,L=0,R=0,z=!1,B=[],V=0,H=0,U=0,W=!1,G,K=new d(`jogo`,async()=>{w=await oe(),T=await v()});r(`jogo`,()=>{C===`quiz`&&E===`desafio`&&!M&&(W=!0,V=Math.max(0,Math.ceil((U-Date.now())/1e3))),q()});function q(){clearInterval(G),G=void 0}function J(){q(),G=setInterval(()=>{V=Math.max(0,Math.ceil((U-Date.now())/1e3)),V===0?(q(),Z(null)):l()},250)}function se(){H=x(D),V=H,U=Date.now()+H*1e3,W=!1,J()}function ce(){W=!W,W?(V=Math.max(0,Math.ceil((U-Date.now())/1e3)),q()):(U=Date.now()+V*1e3,J()),l()}function le(){return a()?(E===`desafio`&&(E=`estudo`),[`estudo`]):[`estudo`,`desafio`]}function Y(){return k[A]}function X(){let e=Y();e!==void 0&&(M=!1,N=null,P=!1,F=!1,I=0,z=!1,B=[],j=re(e),q(),W=!1,E===`desafio`?se():(H=0,V=0))}function ue(){h(w,D).length<2?(O=n.jogo.semPerguntas,l()):(O=``,k=g(w,D,T),A=0,L=0,R=0,X(),C=`quiz`,l())}function Z(e){if(M)return;let t=Y();t!==void 0&&(q(),M=!0,F=e===null,P=e!==null&&p(t,e),P?(L+=1,T.acertosTotal+=1,T.sequenciaAtual+=1,I=S(t,T.sequenciaAtual,V,H),T.xpSaldo+=I,T.xpHistorico+=I,R+=I,_(T.perguntasAcertadas,t.id)):(T.errosTotal+=1,T.sequenciaAtual=0),_(T.perguntasRespondidas,t.id),ne(t.id??0,P),f(T),l())}function de(){A+1>=k.length?(T.partidas+=1,f(T),C=`resultado`,l()):(A+=1,X(),l())}function fe(){q(),C=`lobby`,l()}function Q(){let e=Y();e===void 0||M||z||T.xpSaldo<15||(T.xpSaldo-=15,f(T),B=ee(e,j),z=!0,l())}async function pe(){await s({titulo:n.jogo.reiniciarTitulo,texto:n.jogo.reiniciarTexto,rotuloConfirmar:n.jogo.reiniciar})&&(await ie(),T.perguntasRespondidas=[],T.perguntasAcertadas=[],l())}function $(t,n,r=`neutro`){return e`
    <div class="placar">
      <span class="placar__valor" data-tom=${r}>${t}</span>
      <span class="placar__rotulo">${n}</span>
    </div>
  `}function me(){let r=h(w,D),i=te(r,T),o=r.length>0&&i===0,s=w.length===0;return e`
    <div class="placares">
      ${$(i,n.jogo.restantes,`primaria`)}
      ${$(T.acertosTotal,n.jogo.acertos,`sucesso`)}
      ${$(T.errosTotal,n.jogo.erros,`perigo`)}
      ${$(T.partidas,n.jogo.partidas)}
      ${$(T.xpSaldo,n.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${n.jogo.modo}</h2>
    <div class="modos">
      ${le().map(t=>e`
          <button
            class="modo"
            ?data-ativo=${E===t}
            @click=${()=>{E=t,O=``,l()}}
          >
            <kk-icon name=${t===`estudo`?`book`:`bolt`}></kk-icon>
            ${n.jogo.modos[t]}
          </button>
        `)}
    </div>
    ${E===`desafio`?e`<p class="discreto">${n.jogo.desafioAjuda}</p>`:t}
    ${a()?e`<p class="discreto">${n.jogo.desafioSemRelogio}</p>`:t}

    <h2 class="secao">${n.jogo.dificuldade}</h2>
    <div class="chips">
      ${y.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${D===t}
            @click=${()=>{D=t,O=``,l()}}
          >
            ${n.jogo.dificuldades[t]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${s} @click=${ue}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${s?n.jogo.semBanco:n.jogo.jogar}
    </kk-button>

    ${O===``?t:e`<kk-alert variant="warning" open>${O}</kk-alert>`}

    ${o?e`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${n.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void pe()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${n.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:t}
  `}var he=/(https?:\/\/[^\s<]+)/g,ge=/^https?:\/\/[^\s<]+$/;function _e(t){return e`
    <p class="jogo__referencia">
      ${t.split(he).map(t=>ge.test(t)?e`<a href=${t} target="_blank" rel="noopener">${t}</a>`:t)}
    </p>
  `}function ve(e,t,n){return M?p(e,t)?`certa`:n===N?`errada`:`apagada`:`neutro`}function ye(e){return String.fromCharCode(65+e)}function be(){let r=k.length===0?0:Math.round(A/k.length*100),i=b(T.sequenciaAtual);return e`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${n.jogo.encerrar} @click=${fe}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${r}%`}></div>
      </div>

      <span class="quiz__contagem">${A+1}/${k.length}</span>

      ${i>1?e`<kk-badge variant="warning" pill>x${i}</kk-badge>`:t}
      ${E===`desafio`?e`
            <kk-badge variant=${V<=10?`danger`:`neutral`} pill>
              ${W?n.jogo.pausadoSelo:n.jogo.segundos(V)}
            </kk-badge>
          `:t}
    </div>
  `}function xe(){let r=Y();return r===void 0?e`<div class="carregando"><kk-spinner></kk-spinner></div>`:e`
    ${be()}

    <div class="jogo__pergunta">${c(u(r.pergunta))}</div>
    ${r.referencia===``?t:_e(r.referencia)}

    <div class="alternativas">
      ${j.map((t,n)=>e`
          <button
            class="alternativa"
            data-tom=${ve(r,t,n)}
            ?data-oculta=${B.includes(n)}
            ?disabled=${M||B.includes(n)}
            @click=${()=>Z(t)}
          >
            <span class="alternativa__letra">${ye(n)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${M?e`
          <kk-alert variant=${P?`success`:`danger`} open>
            ${F?n.jogo.feedbackTempo:P?n.jogo.feedbackCorreto(I):n.jogo.feedbackIncorreto}
          </kk-alert>

          ${r.explicacao===``?t:e`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${n.jogo.explicacao}
                  </span>
                  <div class="prosa">${c(u(r.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${de}>
            ${A+1<k.length?n.jogo.proxima:n.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:e`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${z||T.xpSaldo<15}
              @click=${Q}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${n.jogo.dica(15)}
            </kk-button>

            ${E===`desafio`?e`
                  <kk-button size="small" outline @click=${ce}>
                    <kk-icon
                      slot="prefix"
                      name=${W?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${W?n.jogo.retomar:n.jogo.pausar}
                  </kk-button>
                `:t}
          </div>
        `}
  `}function Se(e){return e===100?n.jogo.resultados.perfeito:e>=80?n.jogo.resultados.excelente:e>=60?n.jogo.resultados.muitoBem:e>=40?n.jogo.resultados.continue:n.jogo.resultados.naoDesista}function Ce(){let t=k.length,r=t===0?0:Math.round(L/t*100);return e`
    <h2 class="resultado__titulo">${Se(r)}</h2>
    <p class="resultado__linha">${n.jogo.acertosDe(L,t,r)}</p>

    <div class="placares">
      ${$(`+${R}`,n.jogo.xpGanho,`aviso`)}
      ${$(`Nv ${m(T.xpHistorico)}`,n.jogo.nivel,`primaria`)}
      ${$(T.xpSaldo,n.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>i(o({origem:`jogo`,titulo:n.jogo.cadernoTitulo,conteudo:n.jogo.cadernoConteudo(L,t,r)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${n.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{C=`lobby`,l()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${n.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>i(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${n.jogo.inicio}
      </kk-button>
    </div>
  `}var we={voltarPara(){return`home`},titulo(){return C===`resultado`?n.jogo.tituloResultado:void 0},conteudo(){let e=K.espera();return e===null?C===`quiz`?xe():C===`resultado`?Ce():me():e}};export{we as telaJogo};