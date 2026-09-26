import{C as e,_t as t,bt as n,ft as r,g as i,m as a,mt as o,w as s,xt as c}from"./index-tEHw1VqD.js";import{ALVOS_MIN as l,TIPOS as u,emojiDoTipo as d,excluirSessao as f,horasEMinutos as p,listarSessoes as m,ordenar as h,perolaComoAnotacao as g,perolaNoCaderno as _,relogio as v,rotuloDoTipo as y,salvarSessao as b,totalDeMinutos as x}from"./dados-DL4WD-si.js";var S=90,C=2*Math.PI*S,w=`inicio`,T=`pessoal`,E=``,D=30,O=!1,k=0,A=0,j=0,M,N=``,P=null,F=!1,I=!1,L=[],R=!1,z=!1,B=null;async function V(){L=await m(),r()}function H(){R||z||B!==null||(z=!0,(async()=>{try{await V(),R=!0}catch(e){console.error(`estudo: a carga falhou.`,e),B=s(e)}finally{z=!1,r()}})())}function U(){B=null,H(),r()}function W(){O=!0,j=Date.now(),clearInterval(M),M=setInterval(()=>{k=A+Math.floor((Date.now()-j)/1e3),r()},250),r()}function G(){O&&(A+=Math.floor((Date.now()-j)/1e3),k=A,O=!1,clearInterval(M),M=void 0,r())}function K(){let e=D*60;return e<=0?0:Math.min(1,k/e)}function q(){return Math.max(0,Math.round(k/60))}function J(){w=`oracao`,r()}function Y(){k=0,A=0,N=``,P=null,F=!1,I=!1,w=`cronometro`,W()}function X(){G(),w=`perola`,r()}async function Z(){let e={...P?.id===void 0?{}:{id:P.id},assunto:E===``?t.estudo.semAssunto:E,tipo_ciclo:T,duracao_minutos:q(),concluido_em:Date.now(),nota_meditacao:N,anotacao_criada:+!!F},n=await b(e);return P={...e,id:n},await V(),P}async function Q(){P===null&&await Z(),E=``,w=`inicio`,o(`estudo/historico`)}function $(){clearInterval(M),M=void 0,O=!1,E=``,k=0,A=0,w=`inicio`,r()}function ee(){return c`
    <p class="intro">${t.estudo.intro}</p>

    <h2 class="secao">${t.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(u).map(([e,t])=>c`
          <button
            class="tipo"
            ?data-ativo=${T===e}
            @click=${()=>{T=e,r()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${t.emoji}</span>
            <span>${t.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${t.estudo.assunto}
      placeholder=${t.estudo.assuntoPlaceholder}
      .value=${E}
      @kk-input=${e=>{E=e.target.value}}
    ></kk-input>

    <h2 class="secao">${t.estudo.alvo}</h2>
    <div class="chips">
      ${l.map(e=>c`
          <button
            class="chip"
            ?data-ativo=${D===e}
            @click=${()=>{D=e,r()}}
          >
            ${t.estudo.minutos(e)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${J}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${t.estudo.comecar}
      </kk-button>
    </div>
  `}function te(){return c`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${t.estudo.oracaoTitulo}</h2>
      <p>${t.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${Y}>${t.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{w=`inicio`,r()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ne(){let e=K(),r=k>=D*60;return c`
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
          stroke-dashoffset=${C*(1-e)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${v(k)}</span>
        <span class="cronometro__alvo">${t.estudo.de(D)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${d(T)} ${E===``?y(T):E}
    </p>

    ${r?c`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${t.estudo.alvoAtingido}
          </kk-alert>
        `:n}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>O?G():W()}>
        <kk-icon slot="prefix" name=${O?`player-pause`:`player-play`}></kk-icon>
        ${O?t.leitura.pausar:t.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${X}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${t.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${t.estudo.descartar}</kk-button>
    </div>
  `}function re(){return c`
    <p class="intro">${t.estudo.perolaIntro(q())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${t.estudo.perola}
      placeholder=${t.estudo.perolaPlaceholder}
      .value=${N}
      @kk-input=${e=>{N=e.target.value,r()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${N.trim()===``||F}
        @click=${async()=>{let e=P??await Z();await g({...e,nota_meditacao:N}),F=!0,a(t.estudo.viraAnotacaoFeito),await V()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${F?t.estudo.viraAnotacaoFeito:t.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${N.trim()===``||I}
        @click=${async()=>{let e=P??await Z();await _({...e,nota_meditacao:N}),I=!0,a(t.estudo.vaiCadernoFeito),r()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${I?t.estudo.vaiCadernoFeito:t.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void Q()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${t.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${t.estudo.descartar}</kk-button>
    </div>
  `}function ie(){let e=h(L),r=x(L);return c`
    <p class="intro">${t.estudo.totais(e.length,p(r))}</p>

    ${e.length===0?c`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${t.estudo.semSessoes}</p>
          </div>
        `:c`
          <div class="cartoes cartoes--duas">
            ${e.map(e=>c`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${d(e.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${e.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${t.estudo.minutos(e.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${y(e.tipo_ciclo)} ·
                    ${new Date(e.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${e.nota_meditacao===``?n:c`<p class="cartao__texto">${e.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${e.nota_meditacao.trim()===``||e.anotacao_criada===1?n:c`
                          <kk-button
                            size="small"
                            @click=${async()=>{await g(e),await V()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${t.estudo.viraAnotacao}
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
  `}async function ae(e){await i({titulo:t.estudo.excluir,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await f(e.id),await V())}var oe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return t.estudo.historico;if(w===`oracao`)return t.estudo.oracaoTitulo;if(w===`cronometro`)return t.estudo.emSessao;if(w===`perola`)return t.estudo.perola},acoes(e){if(w===`inicio`&&e.args[0]!==`historico`)return c`
      <kk-icon-button
        name="history"
        label=${t.estudo.historico}
        @click=${()=>o(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(t){return H(),B===null?t.args[0]===`historico`?ie():w===`oracao`?te():w===`cronometro`?ne():w===`perola`?re():ee():e(B,U)}};export{oe as telaEstudo};