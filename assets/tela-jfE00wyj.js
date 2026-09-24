import{b as e,ct as t,dt as n,g as r,gt as i,m as a,mt as o,st as s,y as c}from"./index-AmOVZYC7.js";import{ALVOS_MIN as l,TIPOS as u,emojiDoTipo as d,excluirSessao as ee,horasEMinutos as f,listarSessoes as p,ordenar as m,perolaComoAnotacao as h,perolaNoCaderno as g,relogio as _,rotuloDoTipo as v,salvarSessao as y,totalDeMinutos as b}from"./dados--XKqJtp7.js";var x=90,S=2*Math.PI*x,C=`inicio`,w=`pessoal`,T=``,E=30,D=!1,O=0,k=0,A=0,j,M=``,N=null,P=!1,F=!1,I=[],L=!1,R=!1,z=null;async function B(){I=await p(),s()}function V(){L||R||z!==null||(R=!0,(async()=>{try{await B(),L=!0}catch(t){console.error(`estudo: a carga falhou.`,t),z=e(t)}finally{R=!1,s()}})())}function H(){z=null,V(),s()}function U(){D=!0,A=Date.now(),clearInterval(j),j=setInterval(()=>{O=k+Math.floor((Date.now()-A)/1e3),s()},250),s()}function W(){D&&(k+=Math.floor((Date.now()-A)/1e3),O=k,D=!1,clearInterval(j),j=void 0,s())}function G(){let e=E*60;return e<=0?0:Math.min(1,O/e)}function K(){return Math.max(0,Math.round(O/60))}function q(){C=`oracao`,s()}function J(){O=0,k=0,M=``,N=null,P=!1,F=!1,C=`cronometro`,U()}function Y(){W(),C=`perola`,s()}async function X(){let e={...N?.id===void 0?{}:{id:N.id},assunto:T===``?n.estudo.semAssunto:T,tipo_ciclo:w,duracao_minutos:K(),concluido_em:Date.now(),nota_meditacao:M,anotacao_criada:+!!P},t=await y(e);return N={...e,id:t},await B(),N}async function Z(){N===null&&await X(),T=``,C=`inicio`,t(`estudo/historico`)}function Q(){clearInterval(j),j=void 0,D=!1,T=``,O=0,k=0,C=`inicio`,s()}function $(){return i`
    <p class="intro">${n.estudo.intro}</p>

    <h2 class="secao">${n.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(u).map(([e,t])=>i`
          <button
            class="tipo"
            ?data-ativo=${w===e}
            @click=${()=>{w=e,s()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${t.emoji}</span>
            <span>${t.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${n.estudo.assunto}
      placeholder=${n.estudo.assuntoPlaceholder}
      .value=${T}
      @kk-input=${e=>{T=e.target.value}}
    ></kk-input>

    <h2 class="secao">${n.estudo.alvo}</h2>
    <div class="chips">
      ${l.map(e=>i`
          <button
            class="chip"
            ?data-ativo=${E===e}
            @click=${()=>{E=e,s()}}
          >
            ${n.estudo.minutos(e)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${q}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${n.estudo.comecar}
      </kk-button>
    </div>
  `}function te(){return i`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${n.estudo.oracaoTitulo}</h2>
      <p>${n.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${J}>${n.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{C=`inicio`,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ne(){let e=G(),t=O>=E*60;return i`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${x}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${x}
          ?data-completo=${t}
          stroke-dasharray=${S}
          stroke-dashoffset=${S*(1-e)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${_(O)}</span>
        <span class="cronometro__alvo">${n.estudo.de(E)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${d(w)} ${T===``?v(w):T}
    </p>

    ${t?i`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${n.estudo.alvoAtingido}
          </kk-alert>
        `:o}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>D?W():U()}>
        <kk-icon slot="prefix" name=${D?`player-pause`:`player-play`}></kk-icon>
        ${D?n.leitura.pausar:n.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${Y}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${n.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${Q}>${n.estudo.descartar}</kk-button>
    </div>
  `}function re(){return i`
    <p class="intro">${n.estudo.perolaIntro(K())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${n.estudo.perola}
      placeholder=${n.estudo.perolaPlaceholder}
      .value=${M}
      @kk-input=${e=>{M=e.target.value,s()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${M.trim()===``||P}
        @click=${async()=>{let e=N??await X();await h({...e,nota_meditacao:M}),P=!0,a(n.estudo.viraAnotacaoFeito),await B()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${P?n.estudo.viraAnotacaoFeito:n.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${M.trim()===``||F}
        @click=${async()=>{let e=N??await X();await g({...e,nota_meditacao:M}),F=!0,a(n.estudo.vaiCadernoFeito),s()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${F?n.estudo.vaiCadernoFeito:n.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void Z()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${n.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${Q}>${n.estudo.descartar}</kk-button>
    </div>
  `}function ie(){let e=m(I),t=b(I);return i`
    <p class="intro">${n.estudo.totais(e.length,f(t))}</p>

    ${e.length===0?i`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${n.estudo.semSessoes}</p>
          </div>
        `:i`
          <div class="cartoes cartoes--duas">
            ${e.map(e=>i`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${d(e.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${e.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${n.estudo.minutos(e.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${v(e.tipo_ciclo)} ·
                    ${new Date(e.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${e.nota_meditacao===``?o:i`<p class="cartao__texto">${e.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${e.nota_meditacao.trim()===``||e.anotacao_criada===1?o:i`
                          <kk-button
                            size="small"
                            @click=${async()=>{await h(e),await B()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${n.estudo.viraAnotacao}
                          </kk-button>
                        `}
                    <kk-button
                      size="small"
                      variant="danger"
                      outline
                      @click=${()=>void ae(e)}
                    >
                      <kk-icon slot="prefix" name="trash"></kk-icon>
                    </kk-button>
                  </span>
                </div>
              `)}
          </div>
        `}
  `}async function ae(e){await r({titulo:n.estudo.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ee(e.id),await B())}var oe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return n.estudo.historico;if(C===`oracao`)return n.estudo.oracaoTitulo;if(C===`cronometro`)return n.estudo.emSessao;if(C===`perola`)return n.estudo.perola},acoes(e){if(C===`inicio`&&e.args[0]!==`historico`)return i`
      <kk-icon-button
        name="history"
        label=${n.estudo.historico}
        @click=${()=>t(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return V(),z===null?e.args[0]===`historico`?ie():C===`oracao`?te():C===`cronometro`?ne():C===`perola`?re():$():c(z,H)}};export{oe as telaEstudo};