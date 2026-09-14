import{at as e,g as t,lt as n,m as r,nt as i,st as a,tt as o,v as s,y as c}from"./index-D0n52eAb.js";import{ALVOS_MIN as l,TIPOS as u,emojiDoTipo as d,excluirSessao as f,horasEMinutos as p,listarSessoes as m,ordenar as h,perolaComoAnotacao as g,perolaNoCaderno as _,relogio as v,rotuloDoTipo as y,salvarSessao as b,totalDeMinutos as x}from"./dados-DcI6nXDl.js";var S=90,C=2*Math.PI*S,w=`inicio`,T=`pessoal`,E=``,D=30,O=!1,k=0,A=0,j=0,M,N=``,P=null,F=!1,I=!1,L=[],R=!1,z=!1,B=null;async function V(){L=await m(),o()}function H(){R||z||B!==null||(z=!0,(async()=>{try{await V(),R=!0}catch(e){console.error(`estudo: a carga falhou.`,e),B=c(e)}finally{z=!1,o()}})())}function U(){B=null,H(),o()}function W(){O=!0,j=Date.now(),clearInterval(M),M=setInterval(()=>{k=A+Math.floor((Date.now()-j)/1e3),o()},250),o()}function G(){O&&(A+=Math.floor((Date.now()-j)/1e3),k=A,O=!1,clearInterval(M),M=void 0,o())}function K(){let e=D*60;return e<=0?0:Math.min(1,k/e)}function q(){return Math.max(0,Math.round(k/60))}function J(){w=`oracao`,o()}function Y(){k=0,A=0,N=``,P=null,F=!1,I=!1,w=`cronometro`,W()}function X(){G(),w=`perola`,o()}async function Z(){let t={...P?.id===void 0?{}:{id:P.id},assunto:E===``?e.estudo.semAssunto:E,tipo_ciclo:T,duracao_minutos:q(),concluido_em:Date.now(),nota_meditacao:N,anotacao_criada:+!!F},n=await b(t);return P={...t,id:n},await V(),P}async function Q(){P===null&&await Z(),E=``,w=`inicio`,i(`estudo/historico`)}function $(){clearInterval(M),M=void 0,O=!1,E=``,k=0,A=0,w=`inicio`,o()}function ee(){return n`
    <p class="intro">${e.estudo.intro}</p>

    <h2 class="secao">${e.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(u).map(([e,t])=>n`
          <button
            class="tipo"
            ?data-ativo=${T===e}
            @click=${()=>{T=e,o()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${t.emoji}</span>
            <span>${t.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${e.estudo.assunto}
      placeholder=${e.estudo.assuntoPlaceholder}
      .value=${E}
      @kk-input=${e=>{E=e.target.value}}
    ></kk-input>

    <h2 class="secao">${e.estudo.alvo}</h2>
    <div class="chips">
      ${l.map(t=>n`
          <button
            class="chip"
            ?data-ativo=${D===t}
            @click=${()=>{D=t,o()}}
          >
            ${e.estudo.minutos(t)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${J}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${e.estudo.comecar}
      </kk-button>
    </div>
  `}function te(){return n`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${e.estudo.oracaoTitulo}</h2>
      <p>${e.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${Y}>${e.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{w=`inicio`,o()}}
        >
          ${e.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ne(){let t=K(),r=k>=D*60;return n`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${S}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${S}
          ?data-completo=${r}
          stroke-dasharray=${C}
          stroke-dashoffset=${C*(1-t)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${v(k)}</span>
        <span class="cronometro__alvo">${e.estudo.de(D)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${d(T)} ${E===``?y(T):E}
    </p>

    ${r?n`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${e.estudo.alvoAtingido}
          </kk-alert>
        `:a}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>O?G():W()}>
        <kk-icon slot="prefix" name=${O?`player-pause`:`player-play`}></kk-icon>
        ${O?e.leitura.pausar:e.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${X}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${e.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${e.estudo.descartar}</kk-button>
    </div>
  `}function re(){return n`
    <p class="intro">${e.estudo.perolaIntro(q())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${e.estudo.perola}
      placeholder=${e.estudo.perolaPlaceholder}
      .value=${N}
      @kk-input=${e=>{N=e.target.value,o()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${N.trim()===``||F}
        @click=${async()=>{let t=P??await Z();await g({...t,nota_meditacao:N}),F=!0,r(e.estudo.viraAnotacaoFeito),await V()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${F?e.estudo.viraAnotacaoFeito:e.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${N.trim()===``||I}
        @click=${async()=>{let t=P??await Z();await _({...t,nota_meditacao:N}),I=!0,r(e.estudo.vaiCadernoFeito),o()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${I?e.estudo.vaiCadernoFeito:e.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void Q()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${e.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${e.estudo.descartar}</kk-button>
    </div>
  `}function ie(){let t=h(L),r=x(L);return n`
    <p class="intro">${e.estudo.totais(t.length,p(r))}</p>

    ${t.length===0?n`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${e.estudo.semSessoes}</p>
          </div>
        `:n`
          <div class="cartoes cartoes--duas">
            ${t.map(t=>n`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${d(t.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${t.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${e.estudo.minutos(t.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${y(t.tipo_ciclo)} ·
                    ${new Date(t.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${t.nota_meditacao===``?a:n`<p class="cartao__texto">${t.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${t.nota_meditacao.trim()===``||t.anotacao_criada===1?a:n`
                          <kk-button
                            size="small"
                            @click=${async()=>{await g(t),await V()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${e.estudo.viraAnotacao}
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
  `}async function ae(n){await t({titulo:e.estudo.excluir,texto:e.acervo.excluirTexto,rotuloConfirmar:e.acoes.excluir,variante:`danger`})&&n.id!==void 0&&(await f(n.id),await V())}var oe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(t){if(t.args[0]===`historico`)return e.estudo.historico;if(w===`oracao`)return e.estudo.oracaoTitulo;if(w===`cronometro`)return e.estudo.emSessao;if(w===`perola`)return e.estudo.perola},acoes(t){if(w===`inicio`&&t.args[0]!==`historico`)return n`
      <kk-icon-button
        name="history"
        label=${e.estudo.historico}
        @click=${()=>i(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return H(),B===null?e.args[0]===`historico`?ie():w===`oracao`?te():w===`cronometro`?ne():w===`perola`?re():ee():s(B,U)}};export{oe as telaEstudo};