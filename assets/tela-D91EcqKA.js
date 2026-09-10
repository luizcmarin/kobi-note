import{E as e,T as t,ct as n,et as r,it as i,ot as a,p as o,tt as s,u as c}from"./index-Dz7Qe9lu.js";import{ALVOS_MIN as l,TIPOS as u,emojiDoTipo as d,excluirSessao as ee,horasEMinutos as f,listarSessoes as p,ordenar as m,perolaComoAnotacao as h,perolaNoCaderno as g,relogio as _,rotuloDoTipo as v,salvarSessao as y,totalDeMinutos as b}from"./dados-WJ3760JK.js";var x=90,S=2*Math.PI*x,C=`inicio`,w=`pessoal`,T=``,E=30,D=!1,O=0,k=0,A=0,j,M=``,N=null,P=!1,F=!1,I=[],L=!1,R=!1,z=null;async function B(){I=await p(),r()}function V(){L||R||z!==null||(R=!0,(async()=>{try{await B(),L=!0}catch(t){console.error(`estudo: a carga falhou.`,t),z=e(t)}finally{R=!1,r()}})())}function H(){z=null,V(),r()}function U(){D=!0,A=Date.now(),clearInterval(j),j=setInterval(()=>{O=k+Math.floor((Date.now()-A)/1e3),r()},250),r()}function W(){D&&(k+=Math.floor((Date.now()-A)/1e3),O=k,D=!1,clearInterval(j),j=void 0,r())}function G(){let e=E*60;return e<=0?0:Math.min(1,O/e)}function K(){return Math.max(0,Math.round(O/60))}function q(){C=`oracao`,r()}function J(){O=0,k=0,M=``,N=null,P=!1,F=!1,C=`cronometro`,U()}function Y(){W(),C=`perola`,r()}async function X(){let e={...N?.id===void 0?{}:{id:N.id},assunto:T===``?i.estudo.semAssunto:T,tipo_ciclo:w,duracao_minutos:K(),concluido_em:Date.now(),nota_meditacao:M,anotacao_criada:+!!P},t=await y(e);return N={...e,id:t},await B(),N}async function Z(){N===null&&await X(),T=``,C=`inicio`,s(`estudo/historico`)}function Q(){clearInterval(j),j=void 0,D=!1,T=``,O=0,k=0,C=`inicio`,r()}function $(){return n`
    <p class="intro">${i.estudo.intro}</p>

    <h2 class="secao">${i.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(u).map(([e,t])=>n`
          <button
            class="tipo"
            ?data-ativo=${w===e}
            @click=${()=>{w=e,r()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${t.emoji}</span>
            <span>${t.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${i.estudo.assunto}
      placeholder=${i.estudo.assuntoPlaceholder}
      .value=${T}
      @kk-input=${e=>{T=e.target.value}}
    ></kk-input>

    <h2 class="secao">${i.estudo.alvo}</h2>
    <div class="chips">
      ${l.map(e=>n`
          <button
            class="chip"
            ?data-ativo=${E===e}
            @click=${()=>{E=e,r()}}
          >
            ${i.estudo.minutos(e)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${q}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${i.estudo.comecar}
      </kk-button>
    </div>
  `}function te(){return n`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${i.estudo.oracaoTitulo}</h2>
      <p>${i.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${J}>${i.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{C=`inicio`,r()}}
        >
          ${i.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ne(){let e=G(),t=O>=E*60;return n`
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
        <span class="cronometro__alvo">${i.estudo.de(E)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${d(w)} ${T===``?v(w):T}
    </p>

    ${t?n`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${i.estudo.alvoAtingido}
          </kk-alert>
        `:a}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>D?W():U()}>
        <kk-icon slot="prefix" name=${D?`player-pause`:`player-play`}></kk-icon>
        ${D?i.leitura.pausar:i.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${Y}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${i.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${Q}>${i.estudo.descartar}</kk-button>
    </div>
  `}function re(){return n`
    <p class="intro">${i.estudo.perolaIntro(K())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${i.estudo.perola}
      placeholder=${i.estudo.perolaPlaceholder}
      .value=${M}
      @kk-input=${e=>{M=e.target.value,r()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${M.trim()===``||P}
        @click=${async()=>{let e=N??await X();await h({...e,nota_meditacao:M}),P=!0,c(i.estudo.viraAnotacaoFeito),await B()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${P?i.estudo.viraAnotacaoFeito:i.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${M.trim()===``||F}
        @click=${async()=>{let e=N??await X();await g({...e,nota_meditacao:M}),F=!0,c(i.estudo.vaiCadernoFeito),r()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${F?i.estudo.vaiCadernoFeito:i.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void Z()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${i.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${Q}>${i.estudo.descartar}</kk-button>
    </div>
  `}function ie(){let e=m(I),t=b(I);return n`
    <p class="intro">${i.estudo.totais(e.length,f(t))}</p>

    ${e.length===0?n`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${i.estudo.semSessoes}</p>
          </div>
        `:n`
          <div class="cartoes cartoes--duas">
            ${e.map(e=>n`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${d(e.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${e.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${i.estudo.minutos(e.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${v(e.tipo_ciclo)} ·
                    ${new Date(e.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${e.nota_meditacao===``?a:n`<p class="cartao__texto">${e.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${e.nota_meditacao.trim()===``||e.anotacao_criada===1?a:n`
                          <kk-button
                            size="small"
                            @click=${async()=>{await h(e),await B()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${i.estudo.viraAnotacao}
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
  `}async function ae(e){await o({titulo:i.estudo.excluir,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ee(e.id),await B())}var oe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return i.estudo.historico;if(C===`oracao`)return i.estudo.oracaoTitulo;if(C===`cronometro`)return i.estudo.emSessao;if(C===`perola`)return i.estudo.perola},acoes(e){if(C===`inicio`&&e.args[0]!==`historico`)return n`
      <kk-icon-button
        name="history"
        label=${i.estudo.historico}
        @click=${()=>s(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return V(),z===null?e.args[0]===`historico`?ie():C===`oracao`?te():C===`cronometro`?ne():C===`perola`?re():$():t(z,H)}};export{oe as telaEstudo};