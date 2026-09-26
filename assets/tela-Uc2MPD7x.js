import{S as e,_t as t,b as n,bt as r,ft as i,m as a,mt as o,xt as s,y as c}from"./index-BNLfwB87.js";import{ALVOS_MIN as ee,TIPOS as te,emojiDoTipo as l,excluirSessao as u,gravarEmAndamento as d,horasEMinutos as ne,lerEmAndamento as re,limparEmAndamento as f,listarSessoes as ie,ordenar as p,perolaComoAnotacao as m,perolaNoCaderno as h,relogio as g,rotuloDoTipo as _,salvarSessao as v,totalDeMinutos as y}from"./dados-DiXquFuM.js";var b=90,x=2*Math.PI*b,S=`inicio`,C=`pessoal`,w=``,T=30,E=!1,D=0,O=0,k=0,A,j=``,M=!1,N=!1,P=null,F=!1,I=!1,L=!1,R=[],z=!1,B=!1,V=null;function H(){if(S===`inicio`){f();return}d({passo:S,tipo:C,assunto:w,alvoMin:T,rodando:E,acumuladoSeg:O,inicioMs:k,nota:j,querAnotacao:M,querCaderno:N,sessaoSalva:P,anotacaoCriada:F,cadernoSalvo:I})}function U(){let e=re();e!==null&&({passo:S,tipo:C,assunto:w,alvoMin:T,acumuladoSeg:O,nota:j,querAnotacao:M,querCaderno:N,sessaoSalva:P,anotacaoCriada:F,cadernoSalvo:I}=e,D=O,e.rodando&&(E=!0,k=e.inicioMs,Y()))}async function W(){R=await ie(),i()}function G(){z||B||V!==null||(B=!0,(async()=>{try{await W(),z=!0}catch(e){console.error(`estudo: a carga falhou.`,e),V=n(e)}finally{B=!1,i()}})())}function K(){V=null,G(),i()}function q(){E=!0,k=Date.now(),Y(),H(),i()}function J(){D=O+Math.max(0,Math.floor((Date.now()-k)/1e3))}function Y(){J(),clearInterval(A),A=setInterval(()=>{J(),i()},250)}function X(){E&&(J(),O=D,E=!1,clearInterval(A),A=void 0,H(),i())}function ae(){let e=T*60;return e<=0?0:Math.min(1,D/e)}function Z(){return Math.max(0,Math.round(D/60))}function oe(){S=`oracao`,H(),i()}function Q(){S=`inicio`,H(),i()}function se(){D=0,O=0,j=``,M=!1,N=!1,P=null,F=!1,I=!1,S=`cronometro`,q()}function ce(){X(),S=`perola`,H(),i()}async function le(){let e={...P?.id===void 0?{}:{id:P.id},assunto:w===``?t.estudo.semAssunto:w,tipo_ciclo:C,duracao_minutos:Z(),concluido_em:Date.now(),nota_meditacao:j,anotacao_criada:+!!F},n=await v(e);return P={...e,id:n},H(),await W(),P}async function ue(){if(!L){L=!0,i();try{let e=await le(),t=j.trim()!==``;t&&M&&!F&&(await m(e),F=!0,H()),t&&N&&!I&&(await h(e),I=!0,H())}catch(e){console.error(`estudo: a sessão não foi salva.`,e),a(t.estudo.naoSalvou,`danger`);return}finally{L=!1,i()}a(t.estudo.sessaoSalva),w=``,S=`inicio`,H(),o(`estudo/historico`)}}async function $(){await e({titulo:t.estudo.descartarTitulo,texto:t.estudo.descartarTexto,rotuloConfirmar:t.estudo.descartar,variante:`danger`})&&(clearInterval(A),A=void 0,E=!1,w=``,D=0,O=0,S=`inicio`,H(),i())}function de(){return s`
    <p class="intro">${t.estudo.intro}</p>

    <h2 class="secao">${t.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(te).map(([e,t])=>s`
          <button
            class="tipo"
            ?data-ativo=${C===e}
            @click=${()=>{C=e,i()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${t.emoji}</span>
            <span>${t.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${t.estudo.assunto}
      placeholder=${t.estudo.assuntoPlaceholder}
      .value=${w}
      @kk-input=${e=>{w=e.target.value}}
    ></kk-input>

    <h2 class="secao">${t.estudo.alvo}</h2>
    <div class="chips">
      ${ee.map(e=>s`
          <button
            class="chip"
            ?data-ativo=${T===e}
            @click=${()=>{T=e,i()}}
          >
            ${t.estudo.minutos(e)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${oe}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${t.estudo.comecar}
      </kk-button>
    </div>
  `}function fe(){return s`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${t.estudo.oracaoTitulo}</h2>
      <p>${t.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${se}>${t.estudo.orei}</kk-button>
        <kk-button @click=${Q}>
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function pe(){let e=ae(),n=D>=T*60;return s`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${b}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${b}
          ?data-completo=${n}
          stroke-dasharray=${x}
          stroke-dashoffset=${x*(1-e)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${g(D)}</span>
        <span class="cronometro__alvo">${t.estudo.de(T)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${l(C)} ${w===``?_(C):w}
    </p>

    ${n?s`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${t.estudo.alvoAtingido}
          </kk-alert>
        `:r}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>E?X():q()}>
        <kk-icon slot="prefix" name=${E?`player-pause`:`player-play`}></kk-icon>
        ${E?t.leitura.pausar:t.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${ce}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${t.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${()=>void $()}>
        ${t.estudo.descartar}
      </kk-button>
    </div>
  `}function me(){let e=j.trim()===``;return s`
    <div class="perola">
      <p class="intro">${t.estudo.perolaIntro(Z())}</p>

      <kk-textarea
        rows="5"
        resize="auto"
        label=${t.estudo.perola}
        placeholder=${t.estudo.perolaPlaceholder}
        .value=${j}
        @kk-input=${e=>{j=e.target.value,H(),i()}}
      ></kk-textarea>

      <div class="perola__destinos">
        <kk-checkbox
          ?checked=${M}
          ?disabled=${e||L}
          @kk-change=${e=>{M=e.target.checked,H(),i()}}
        >
          ${t.estudo.marcarAnotacao}
        </kk-checkbox>

        <kk-checkbox
          ?checked=${N}
          ?disabled=${e||L}
          @kk-change=${e=>{N=e.target.checked,H(),i()}}
        >
          ${t.estudo.marcarCaderno}
        </kk-checkbox>

        ${e?s`<p class="perola__ajuda">${t.estudo.semPerolaParaMarcar}</p>`:r}
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" ?loading=${L} @click=${()=>void ue()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.estudo.salvarSessao}
        </kk-button>
        <kk-button variant="danger" outline ?disabled=${L} @click=${()=>void $()}>
          ${t.estudo.descartar}
        </kk-button>
      </div>
    </div>
  `}function he(){let e=p(R),n=y(R);return s`
    <p class="intro">${t.estudo.totais(e.length,ne(n))}</p>

    ${e.length===0?s`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${t.estudo.semSessoes}</p>
          </div>
        `:s`
          <div class="cartoes cartoes--duas">
            ${e.map(e=>s`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${l(e.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${e.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${t.estudo.minutos(e.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${_(e.tipo_ciclo)} ·
                    ${new Date(e.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${e.nota_meditacao===``?r:s`<p class="cartao__texto">${e.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${e.nota_meditacao.trim()===``||e.anotacao_criada===1?r:s`
                          <kk-button
                            size="small"
                            @click=${async()=>{await m(e),await W()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${t.estudo.viraAnotacao}
                          </kk-button>
                        `}
                    <kk-button
                      size="small"
                      variant="danger"
                      outline
                      @click=${()=>void ge(e)}
                    >
                      <kk-icon slot="prefix" name="trash"></kk-icon>
                    </kk-button>
                  </span>
                </div>
              `)}
          </div>
        `}
  `}async function ge(n){await e({titulo:t.estudo.excluir,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&n.id!==void 0&&(await u(n.id),await W())}U();var _e={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return t.estudo.historico;if(S===`oracao`)return t.estudo.oracaoTitulo;if(S===`cronometro`)return t.estudo.emSessao;if(S===`perola`)return t.estudo.perola},acoes(e){if(S===`inicio`&&e.args[0]!==`historico`)return s`
      <kk-icon-button
        name="history"
        label=${t.estudo.historico}
        @click=${()=>o(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return G(),V===null?e.args[0]===`historico`?he():S===`oracao`?fe():S===`cronometro`?pe():S===`perola`?me():de():c(V,K)}};export{_e as telaEstudo};