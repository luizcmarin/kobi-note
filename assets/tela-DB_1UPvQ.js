import{$ as e,Q as t,at as n,nt as r,p as i,rt as a,u as o}from"./index-CrGkgQIm.js";import{ALVOS_MIN as s,TIPOS as c,emojiDoTipo as l,excluirSessao as u,horasEMinutos as d,listarSessoes as f,ordenar as p,perolaComoAnotacao as m,perolaNoCaderno as h,relogio as g,rotuloDoTipo as _,salvarSessao as v,totalDeMinutos as y}from"./dados-C8c7r-Ww.js";var b=90,x=2*Math.PI*b,S=`inicio`,C=`pessoal`,w=``,T=30,E=!1,D=0,O=0,k=0,A,j=``,M=null,N=!1,P=!1,F=[],I=!1,L=!1;async function R(){F=await f(),t()}function z(){I||L||(L=!0,(async()=>{try{await R(),I=!0}finally{L=!1,t()}})())}function B(){E=!0,k=Date.now(),clearInterval(A),A=setInterval(()=>{D=O+Math.floor((Date.now()-k)/1e3),t()},250),t()}function V(){E&&(O+=Math.floor((Date.now()-k)/1e3),D=O,E=!1,clearInterval(A),A=void 0,t())}function H(){let e=T*60;return e<=0?0:Math.min(1,D/e)}function U(){return Math.max(0,Math.round(D/60))}function W(){S=`oracao`,t()}function G(){D=0,O=0,j=``,M=null,N=!1,P=!1,S=`cronometro`,B()}function K(){V(),S=`perola`,t()}async function q(){let e={...M?.id===void 0?{}:{id:M.id},assunto:w===``?r.estudo.semAssunto:w,tipo_ciclo:C,duracao_minutos:U(),concluido_em:Date.now(),nota_meditacao:j,anotacao_criada:+!!N},t=await v(e);return M={...e,id:t},await R(),M}async function J(){M===null&&await q(),w=``,S=`inicio`,e(`estudo/historico`)}function Y(){clearInterval(A),A=void 0,E=!1,w=``,D=0,O=0,S=`inicio`,t()}function X(){return n`
    <p class="intro">${r.estudo.intro}</p>

    <h2 class="secao">${r.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(c).map(([e,r])=>n`
          <button
            class="tipo"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,t()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${r.emoji}</span>
            <span>${r.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${r.estudo.assunto}
      placeholder=${r.estudo.assuntoPlaceholder}
      .value=${w}
      @kk-input=${e=>{w=e.target.value}}
    ></kk-input>

    <h2 class="secao">${r.estudo.alvo}</h2>
    <div class="chips">
      ${s.map(e=>n`
          <button
            class="chip"
            ?data-ativo=${T===e}
            @click=${()=>{T=e,t()}}
          >
            ${r.estudo.minutos(e)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${W}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${r.estudo.comecar}
      </kk-button>
    </div>
  `}function Z(){return n`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${r.estudo.oracaoTitulo}</h2>
      <p>${r.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${G}>${r.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{S=`inicio`,t()}}
        >
          ${r.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Q(){let e=H(),t=D>=T*60;return n`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${b}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${b}
          ?data-completo=${t}
          stroke-dasharray=${x}
          stroke-dashoffset=${x*(1-e)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${g(D)}</span>
        <span class="cronometro__alvo">${r.estudo.de(T)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${l(C)} ${w===``?_(C):w}
    </p>

    ${t?n`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${r.estudo.alvoAtingido}
          </kk-alert>
        `:a}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>E?V():B()}>
        <kk-icon slot="prefix" name=${E?`player-pause`:`player-play`}></kk-icon>
        ${E?r.leitura.pausar:r.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${K}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${r.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${Y}>${r.estudo.descartar}</kk-button>
    </div>
  `}function $(){return n`
    <p class="intro">${r.estudo.perolaIntro(U())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${r.estudo.perola}
      placeholder=${r.estudo.perolaPlaceholder}
      .value=${j}
      @kk-input=${e=>{j=e.target.value,t()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${j.trim()===``||N}
        @click=${async()=>{let e=M??await q();await m({...e,nota_meditacao:j}),N=!0,o(r.estudo.viraAnotacaoFeito),await R()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${N?r.estudo.viraAnotacaoFeito:r.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${j.trim()===``||P}
        @click=${async()=>{let e=M??await q();await h({...e,nota_meditacao:j}),P=!0,o(r.estudo.vaiCadernoFeito),t()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${P?r.estudo.vaiCadernoFeito:r.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void J()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${r.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${Y}>${r.estudo.descartar}</kk-button>
    </div>
  `}function ee(){let e=p(F),t=y(F);return n`
    <p class="intro">${r.estudo.totais(e.length,d(t))}</p>

    ${e.length===0?n`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${r.estudo.semSessoes}</p>
          </div>
        `:n`
          <div class="cartoes cartoes--duas">
            ${e.map(e=>n`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${l(e.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${e.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${r.estudo.minutos(e.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${_(e.tipo_ciclo)} ·
                    ${new Date(e.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${e.nota_meditacao===``?a:n`<p class="cartao__texto">${e.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${e.nota_meditacao.trim()===``||e.anotacao_criada===1?a:n`
                          <kk-button
                            size="small"
                            @click=${async()=>{await m(e),await R()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${r.estudo.viraAnotacao}
                          </kk-button>
                        `}
                    <kk-button
                      size="small"
                      variant="danger"
                      outline
                      @click=${()=>void te(e)}
                    >
                      <kk-icon slot="prefix" name="trash"></kk-icon>
                    </kk-button>
                  </span>
                </div>
              `)}
          </div>
        `}
  `}async function te(e){await i({titulo:r.estudo.excluir,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await u(e.id),await R())}var ne={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return r.estudo.historico;if(S===`oracao`)return r.estudo.oracaoTitulo;if(S===`cronometro`)return r.estudo.emSessao;if(S===`perola`)return r.estudo.perola},acoes(t){if(S===`inicio`&&t.args[0]!==`historico`)return n`
      <kk-icon-button
        name="history"
        label=${r.estudo.historico}
        @click=${()=>e(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return z(),e.args[0]===`historico`?ee():S===`oracao`?Z():S===`cronometro`?Q():S===`perola`?$():X()}};export{ne as telaEstudo};