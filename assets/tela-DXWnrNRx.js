import{c as e}from"./banco-CsCRyC2b.js";import{G as t,S as n,at as r,ct as i,ft as a,h as o,it as s,n as c,ut as l,x as ee}from"./index-BBOYxO_i.js";import{t as u}from"./unsafe-html-CwwQ3etq.js";var te={1:10,2:15,3:20},ne={0:45,1:60,2:50,3:30},re=20,ie=[0,1,2,3],d=`note_jogo_progresso`;function f(){return{xpSaldo:0,xpHistorico:0,sequenciaAtual:0,acertosTotal:0,errosTotal:0,perguntasRespondidas:[],perguntasAcertadas:[]}}function p(){try{let e=JSON.parse(localStorage.getItem(d)??`null`);return{...f(),...e}}catch{return f()}}function m(e){localStorage.setItem(d,JSON.stringify(e))}function ae(e){return Math.floor(Math.sqrt(Math.max(0,e)/100))}function h(e){return e>=20?4:e>=10?3:e>=5?2:1}function oe(e){return te[e]??10}function se(e){return ne[e]??45}function ce(e,t,n,r){let i=oe(Number(e.dificuldade))*h(t);return r<=0?i:i+Math.floor(n/r*re)}function le(e){return Math.floor((e.acertosTotal+e.errosTotal)/10)}function g(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function ue(e){return g([{texto:e.resposta1,original:1},{texto:e.resposta2,original:2},{texto:e.resposta3,original:3},{texto:e.resposta4,original:4}])}function _(e,t){return t.original===Number(e.correta)}function v(e,t){return t===0?e:e.filter(e=>Number(e.dificuldade)===t)}function de(e,t){let n=new Set(t.perguntasRespondidas);return e.filter(e=>!n.has(e.id??-1)).length}function fe(e,t,n){let r=new Set(n.perguntasRespondidas),i=v(e,t),a=g(i.filter(e=>!r.has(e.id??-1))),o=g(i.filter(e=>r.has(e.id??-1)));return[...a,...o].slice(0,10)}function pe(e,t){return g(t.map((e,t)=>({alternativa:e,indice:t})).filter(({alternativa:t})=>!_(e,t))).slice(0,2).map(({indice:e})=>e)}function y(e,t){t!==void 0&&!e.includes(t)&&e.push(t)}function me(){return e(`perguntas`).todos()}var b=`lobby`,x=[],S=f(),C=`estudo`,w=0,T=``,E=[],D=0,O=[],k=!1,A=null,j=!1,M=!1,N=0,P=0,F=0,I=!1,L=[],R=0,z=0,B=0,V=!1,H,U=!1,W=!1,G=null;function K(){U||W||G!==null||(W=!0,ge(),(async()=>{try{x=await me(),S=p(),U=!0}catch(e){console.error(`jogo: a carga falhou.`,e),G=n(e)}finally{W=!1,s()}})())}function he(){G=null,K(),s()}var q=!1;function ge(){q||(q=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`jogo`&&(b===`quiz`&&C===`desafio`&&!k&&(V=!0,R=Math.max(0,Math.ceil((B-Date.now())/1e3))),J())}))}function J(){clearInterval(H),H=void 0}function Y(){J(),H=setInterval(()=>{if(R=Math.max(0,Math.ceil((B-Date.now())/1e3)),R===0){J(),Q(null);return}s()},250)}function _e(){z=se(w),R=z,B=Date.now()+z*1e3,V=!1,Y()}function ve(){V=!V,V?(R=Math.max(0,Math.ceil((B-Date.now())/1e3)),J()):(B=Date.now()+R*1e3,Y()),s()}function X(){return E[D]}function Z(){let e=X();e!==void 0&&(k=!1,A=null,j=!1,M=!1,N=0,I=!1,L=[],O=ue(e),J(),V=!1,C===`desafio`?_e():(z=0,R=0))}function ye(){if(v(x,w).length<2){T=i.jogo.semPerguntas,s();return}T=``,E=fe(x,w,S),D=0,P=0,F=0,Z(),b=`quiz`,s()}function Q(e){if(k)return;let t=X();t!==void 0&&(J(),k=!0,M=e===null,j=e!==null&&_(t,e),j?(P+=1,S.acertosTotal+=1,S.sequenciaAtual+=1,N=ce(t,S.sequenciaAtual,R,z),S.xpSaldo+=N,S.xpHistorico+=N,F+=N,y(S.perguntasAcertadas,t.id)):(S.errosTotal+=1,S.sequenciaAtual=0),y(S.perguntasRespondidas,t.id),m(S),s())}function be(){if(D+1>=E.length){b=`resultado`,s();return}D+=1,Z(),s()}function xe(){J(),b=`lobby`,s()}function Se(){let e=X();e===void 0||k||I||S.xpSaldo<15||(S.xpSaldo-=15,m(S),L=pe(e,O),I=!0,s())}async function Ce(){await o({titulo:i.jogo.reiniciarTitulo,texto:i.jogo.reiniciarTexto,rotuloConfirmar:i.jogo.reiniciar})&&(S.perguntasRespondidas=[],S.perguntasAcertadas=[],m(S),s())}function $(e,t,n=`neutro`){return a`
    <div class="placar">
      <span class="placar__valor" data-tom=${n}>${e}</span>
      <span class="placar__rotulo">${t}</span>
    </div>
  `}function we(){let e=v(x,w),t=de(e,S),n=e.length>0&&t===0,r=x.length===0;return a`
    <div class="placares">
      ${$(t,i.jogo.restantes,`primaria`)}
      ${$(S.acertosTotal,i.jogo.acertos,`sucesso`)}
      ${$(S.errosTotal,i.jogo.erros,`perigo`)}
      ${$(le(S),i.jogo.partidas)}
      ${$(S.xpSaldo,i.jogo.xpDisponivel,`aviso`)}
    </div>

    <h2 class="secao">${i.jogo.modo}</h2>
    <div class="modos">
      ${[`estudo`,`desafio`].map(e=>a`
          <button
            class="modo"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,T=``,s()}}
          >
            <kk-icon name=${e===`estudo`?`book`:`bolt`}></kk-icon>
            ${i.jogo.modos[e]}
          </button>
        `)}
    </div>
    ${C===`desafio`?a`<p class="discreto">${i.jogo.desafioAjuda}</p>`:l}

    <h2 class="secao">${i.jogo.dificuldade}</h2>
    <div class="chips">
      ${ie.map(e=>a`
          <button
            class="chip"
            ?data-ativo=${w===e}
            @click=${()=>{w=e,T=``,s()}}
          >
            ${i.jogo.dificuldades[e]}
          </button>
        `)}
    </div>

    <kk-button variant="primary" class="jogo__jogar" ?disabled=${r} @click=${ye}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>
      ${r?i.jogo.semBanco:i.jogo.jogar}
    </kk-button>

    ${T===``?l:a`<kk-alert variant="warning" open>${T}</kk-alert>`}

    ${n?a`
          <kk-alert variant="success" open>
            <kk-icon slot="icon" name="trophy"></kk-icon>
            ${i.jogo.tudoConcluido}
            <kk-button size="small" variant="success" outline @click=${()=>void Ce()}>
              <kk-icon slot="prefix" name="rotate"></kk-icon>${i.jogo.reiniciar}
            </kk-button>
          </kk-alert>
        `:l}
  `}var Te=/(https?:\/\/[^\s<]+)/g,Ee=/^https?:\/\/[^\s<]+$/;function De(e){return a`
    <p class="jogo__referencia">
      ${e.split(Te).map(e=>Ee.test(e)?a`<a href=${e} target="_blank" rel="noopener">${e}</a>`:e)}
    </p>
  `}function Oe(e,t,n){return k?_(e,t)?`certa`:n===A?`errada`:`apagada`:`neutro`}function ke(e){return String.fromCharCode(65+e)}function Ae(){let e=E.length===0?0:Math.round(D/E.length*100),t=h(S.sequenciaAtual);return a`
    <div class="quiz__topo">
      <kk-icon-button name="x" label=${i.jogo.encerrar} @click=${xe}></kk-icon-button>

      <div class="quiz__barra" role="presentation">
        <div class="quiz__preenchido" style=${`width:${e}%`}></div>
      </div>

      <span class="quiz__contagem">${D+1}/${E.length}</span>

      ${t>1?a`<kk-badge variant="warning" pill>x${t}</kk-badge>`:l}
      ${C===`desafio`?a`
            <kk-badge variant=${R<=10?`danger`:`neutral`} pill>
              ${V?i.jogo.pausadoSelo:i.jogo.segundos(R)}
            </kk-badge>
          `:l}
    </div>
  `}function je(){let e=X();return e===void 0?a`<div class="carregando"><kk-spinner></kk-spinner></div>`:a`
    ${Ae()}

    <div class="jogo__pergunta">${u(c(e.pergunta))}</div>
    ${e.referencia===``?l:De(e.referencia)}

    <div class="alternativas">
      ${O.map((t,n)=>a`
          <button
            class="alternativa"
            data-tom=${Oe(e,t,n)}
            ?data-oculta=${L.includes(n)}
            ?disabled=${k||L.includes(n)}
            @click=${()=>Q(t)}
          >
            <span class="alternativa__letra">${ke(n)}</span>
            <span>${t.texto}</span>
          </button>
        `)}
    </div>

    ${k?a`
          <kk-alert variant=${j?`success`:`danger`} open>
            ${M?i.jogo.feedbackTempo:j?i.jogo.feedbackCorreto(N):i.jogo.feedbackIncorreto}
          </kk-alert>

          ${e.explicacao===``?l:a`
                <div class="explicacao">
                  <span class="explicacao__rotulo">
                    <kk-icon name="info-circle"></kk-icon>${i.jogo.explicacao}
                  </span>
                  <div class="prosa">${u(c(e.explicacao))}</div>
                </div>
              `}

          <kk-button variant="primary" class="jogo__jogar" @click=${be}>
            ${D+1<E.length?i.jogo.proxima:i.jogo.verResultado}
            <kk-icon slot="suffix" name="arrow-right"></kk-icon>
          </kk-button>
        `:a`
          <div class="jogo__controles">
            <kk-button
              size="small"
              variant="primary"
              outline
              ?disabled=${I||S.xpSaldo<15}
              @click=${Se}
            >
              <kk-icon slot="prefix" name="bulb"></kk-icon>${i.jogo.dica(15)}
            </kk-button>

            ${C===`desafio`?a`
                  <kk-button size="small" outline @click=${ve}>
                    <kk-icon
                      slot="prefix"
                      name=${V?`player-play`:`player-pause`}
                    ></kk-icon>
                    ${V?i.jogo.retomar:i.jogo.pausar}
                  </kk-button>
                `:l}
          </div>
        `}
  `}function Me(e){return e===100?i.jogo.resultados.perfeito:e>=80?i.jogo.resultados.excelente:e>=60?i.jogo.resultados.muitoBem:e>=40?i.jogo.resultados.continue:i.jogo.resultados.naoDesista}function Ne(){let e=E.length,n=e===0?0:Math.round(P/e*100);return a`
    <h2 class="resultado__titulo">${Me(n)}</h2>
    <p class="resultado__linha">${i.jogo.acertosDe(P,e,n)}</p>

    <div class="placares">
      ${$(`+${F}`,i.jogo.xpGanho,`aviso`)}
      ${$(`Nv ${ae(S.xpHistorico)}`,i.jogo.nivel,`primaria`)}
      ${$(S.xpSaldo,i.jogo.xpSaldo)}
    </div>

    <kk-button
      variant="primary"
      outline
      class="jogo__jogar"
      @click=${()=>r(t({origem:`jogo`,referencia:i.jogo.cadernoReferencia,titulo:i.jogo.cadernoTitulo,conteudo:i.jogo.cadernoConteudo(P,e,n)}))}
    >
      <kk-icon slot="prefix" name="bookmark"></kk-icon>${i.jogo.anotarNoCaderno}
    </kk-button>

    <div class="jogo__controles">
      <kk-button
        outline
        @click=${()=>{b=`lobby`,S=p(),s()}}
      >
        <kk-icon slot="prefix" name="rotate"></kk-icon>${i.jogo.jogarDeNovo}
      </kk-button>
      <kk-button @click=${()=>r(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${i.jogo.inicio}
      </kk-button>
    </div>
  `}var Pe={voltarPara(){return`home`},titulo(){return b===`resultado`?i.jogo.tituloResultado:void 0},conteudo(){return K(),G===null?U?b===`quiz`?je():b===`resultado`?Ne():we():a`<div class="carregando"><kk-spinner></kk-spinner></div>`:ee(G,he)}};export{Pe as telaJogo};