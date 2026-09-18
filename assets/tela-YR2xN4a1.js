import{ft as e,g as t,m as n,mt as r,ot as i,st as a,ut as o,v as s,y as c}from"./index-B4lifVfd.js";import{ALVOS_MIN as l,TIPOS as u,emojiDoTipo as d,excluirSessao as ee,horasEMinutos as f,listarSessoes as p,ordenar as m,perolaComoAnotacao as h,perolaNoCaderno as g,relogio as _,rotuloDoTipo as v,salvarSessao as y,totalDeMinutos as b}from"./dados-BEo8E7-C.js";var x=90,S=2*Math.PI*x,C=`inicio`,w=`pessoal`,T=``,E=30,D=!1,O=0,k=0,A=0,j,M=``,N=null,P=!1,F=!1,I=[],L=!1,R=!1,z=null;async function B(){I=await p(),i()}function V(){L||R||z!==null||(R=!0,(async()=>{try{await B(),L=!0}catch(e){console.error(`estudo: a carga falhou.`,e),z=c(e)}finally{R=!1,i()}})())}function H(){z=null,V(),i()}function U(){D=!0,A=Date.now(),clearInterval(j),j=setInterval(()=>{O=k+Math.floor((Date.now()-A)/1e3),i()},250),i()}function W(){D&&(k+=Math.floor((Date.now()-A)/1e3),O=k,D=!1,clearInterval(j),j=void 0,i())}function G(){let e=E*60;return e<=0?0:Math.min(1,O/e)}function K(){return Math.max(0,Math.round(O/60))}function q(){C=`oracao`,i()}function J(){O=0,k=0,M=``,N=null,P=!1,F=!1,C=`cronometro`,U()}function Y(){W(),C=`perola`,i()}async function X(){let e={...N?.id===void 0?{}:{id:N.id},assunto:T===``?o.estudo.semAssunto:T,tipo_ciclo:w,duracao_minutos:K(),concluido_em:Date.now(),nota_meditacao:M,anotacao_criada:+!!P},t=await y(e);return N={...e,id:t},await B(),N}async function Z(){N===null&&await X(),T=``,C=`inicio`,a(`estudo/historico`)}function Q(){clearInterval(j),j=void 0,D=!1,T=``,O=0,k=0,C=`inicio`,i()}function $(){return r`
    <p class="intro">${o.estudo.intro}</p>

    <h2 class="secao">${o.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(u).map(([e,t])=>r`
          <button
            class="tipo"
            ?data-ativo=${w===e}
            @click=${()=>{w=e,i()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${t.emoji}</span>
            <span>${t.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${o.estudo.assunto}
      placeholder=${o.estudo.assuntoPlaceholder}
      .value=${T}
      @kk-input=${e=>{T=e.target.value}}
    ></kk-input>

    <h2 class="secao">${o.estudo.alvo}</h2>
    <div class="chips">
      ${l.map(e=>r`
          <button
            class="chip"
            ?data-ativo=${E===e}
            @click=${()=>{E=e,i()}}
          >
            ${o.estudo.minutos(e)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${q}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${o.estudo.comecar}
      </kk-button>
    </div>
  `}function te(){return r`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${o.estudo.oracaoTitulo}</h2>
      <p>${o.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${J}>${o.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{C=`inicio`,i()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ne(){let t=G(),n=O>=E*60;return r`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${x}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${x}
          ?data-completo=${n}
          stroke-dasharray=${S}
          stroke-dashoffset=${S*(1-t)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${_(O)}</span>
        <span class="cronometro__alvo">${o.estudo.de(E)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${d(w)} ${T===``?v(w):T}
    </p>

    ${n?r`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${o.estudo.alvoAtingido}
          </kk-alert>
        `:e}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>D?W():U()}>
        <kk-icon slot="prefix" name=${D?`player-pause`:`player-play`}></kk-icon>
        ${D?o.leitura.pausar:o.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${Y}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${o.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${Q}>${o.estudo.descartar}</kk-button>
    </div>
  `}function re(){return r`
    <p class="intro">${o.estudo.perolaIntro(K())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${o.estudo.perola}
      placeholder=${o.estudo.perolaPlaceholder}
      .value=${M}
      @kk-input=${e=>{M=e.target.value,i()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${M.trim()===``||P}
        @click=${async()=>{let e=N??await X();await h({...e,nota_meditacao:M}),P=!0,n(o.estudo.viraAnotacaoFeito),await B()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${P?o.estudo.viraAnotacaoFeito:o.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${M.trim()===``||F}
        @click=${async()=>{let e=N??await X();await g({...e,nota_meditacao:M}),F=!0,n(o.estudo.vaiCadernoFeito),i()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${F?o.estudo.vaiCadernoFeito:o.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void Z()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${o.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${Q}>${o.estudo.descartar}</kk-button>
    </div>
  `}function ie(){let t=m(I),n=b(I);return r`
    <p class="intro">${o.estudo.totais(t.length,f(n))}</p>

    ${t.length===0?r`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${o.estudo.semSessoes}</p>
          </div>
        `:r`
          <div class="cartoes cartoes--duas">
            ${t.map(t=>r`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${d(t.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${t.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${o.estudo.minutos(t.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${v(t.tipo_ciclo)} ·
                    ${new Date(t.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${t.nota_meditacao===``?e:r`<p class="cartao__texto">${t.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${t.nota_meditacao.trim()===``||t.anotacao_criada===1?e:r`
                          <kk-button
                            size="small"
                            @click=${async()=>{await h(t),await B()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${o.estudo.viraAnotacao}
                          </kk-button>
                        `}
                    <kk-button
                      size="small"
                      variant="danger"
                      outline
                      @click=${()=>void ae(t)}
                    >
                      <kk-icon slot="prefix" name="trash"></kk-icon>
                    </kk-button>
                  </span>
                </div>
              `)}
          </div>
        `}
  `}async function ae(e){await t({titulo:o.estudo.excluir,texto:o.acervo.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ee(e.id),await B())}var oe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return o.estudo.historico;if(C===`oracao`)return o.estudo.oracaoTitulo;if(C===`cronometro`)return o.estudo.emSessao;if(C===`perola`)return o.estudo.perola},acoes(e){if(C===`inicio`&&e.args[0]!==`historico`)return r`
      <kk-icon-button
        name="history"
        label=${o.estudo.historico}
        @click=${()=>a(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return V(),z===null?e.args[0]===`historico`?ie():C===`oracao`?te():C===`cronometro`?ne():C===`perola`?re():$():s(z,H)}};export{oe as telaEstudo};