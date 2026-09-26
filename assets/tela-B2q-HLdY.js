import{C as e,_t as t,bt as n,ft as r,g as i,m as a,mt as o,w as s,xt as c}from"./index-DZRfAs58.js";import{ALVOS_MIN as l,TIPOS as u,emojiDoTipo as d,excluirSessao as f,gravarEmAndamento as ee,horasEMinutos as p,lerEmAndamento as m,limparEmAndamento as h,listarSessoes as g,ordenar as _,perolaComoAnotacao as v,perolaNoCaderno as te,relogio as ne,rotuloDoTipo as y,salvarSessao as re,totalDeMinutos as b}from"./dados-Bx6hfDLI.js";var x=90,S=2*Math.PI*x,C=`inicio`,w=`pessoal`,T=``,E=30,D=!1,O=0,k=0,A=0,j,M=``,N=!1,P=!1,F=null,I=!1,L=!1,R=!1,z=[],B=!1,V=!1,H=null;function U(){if(C===`inicio`){h();return}ee({passo:C,tipo:w,assunto:T,alvoMin:E,rodando:D,acumuladoSeg:k,inicioMs:A,nota:M,querAnotacao:N,querCaderno:P,sessaoSalva:F,anotacaoCriada:I,cadernoSalvo:L})}function W(){let e=m();e!==null&&({passo:C,tipo:w,assunto:T,alvoMin:E,acumuladoSeg:k,nota:M,querAnotacao:N,querCaderno:P,sessaoSalva:F,anotacaoCriada:I,cadernoSalvo:L}=e,O=k,e.rodando&&(D=!0,A=e.inicioMs,X()))}async function G(){z=await g(),r()}function K(){B||V||H!==null||(V=!0,(async()=>{try{await G(),B=!0}catch(e){console.error(`estudo: a carga falhou.`,e),H=s(e)}finally{V=!1,r()}})())}function q(){H=null,K(),r()}function J(){D=!0,A=Date.now(),X(),U(),r()}function Y(){O=k+Math.max(0,Math.floor((Date.now()-A)/1e3))}function X(){Y(),clearInterval(j),j=setInterval(()=>{Y(),r()},250)}function Z(){D&&(Y(),k=O,D=!1,clearInterval(j),j=void 0,U(),r())}function ie(){let e=E*60;return e<=0?0:Math.min(1,O/e)}function Q(){return Math.max(0,Math.round(O/60))}function ae(){C=`oracao`,U(),r()}function oe(){C=`inicio`,U(),r()}function se(){O=0,k=0,M=``,N=!1,P=!1,F=null,I=!1,L=!1,C=`cronometro`,J()}function ce(){Z(),C=`perola`,U(),r()}async function le(){let e={...F?.id===void 0?{}:{id:F.id},assunto:T===``?t.estudo.semAssunto:T,tipo_ciclo:w,duracao_minutos:Q(),concluido_em:Date.now(),nota_meditacao:M,anotacao_criada:+!!I},n=await re(e);return F={...e,id:n},U(),await G(),F}async function ue(){if(!R){R=!0,r();try{let e=await le(),t=M.trim()!==``;t&&N&&!I&&(await v(e),I=!0,U()),t&&P&&!L&&(await te(e),L=!0,U())}catch(e){console.error(`estudo: a sessão não foi salva.`,e),a(t.estudo.naoSalvou,`danger`);return}finally{R=!1,r()}a(t.estudo.sessaoSalva),T=``,C=`inicio`,U(),o(`estudo/historico`)}}async function $(){await i({titulo:t.estudo.descartarTitulo,texto:t.estudo.descartarTexto,rotuloConfirmar:t.estudo.descartar,variante:`danger`})&&(clearInterval(j),j=void 0,D=!1,T=``,O=0,k=0,C=`inicio`,U(),r())}function de(){return c`
    <p class="intro">${t.estudo.intro}</p>

    <h2 class="secao">${t.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(u).map(([e,t])=>c`
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
      label=${t.estudo.assunto}
      placeholder=${t.estudo.assuntoPlaceholder}
      .value=${T}
      @kk-input=${e=>{T=e.target.value}}
    ></kk-input>

    <h2 class="secao">${t.estudo.alvo}</h2>
    <div class="chips">
      ${l.map(e=>c`
          <button
            class="chip"
            ?data-ativo=${E===e}
            @click=${()=>{E=e,r()}}
          >
            ${t.estudo.minutos(e)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${ae}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${t.estudo.comecar}
      </kk-button>
    </div>
  `}function fe(){return c`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${t.estudo.oracaoTitulo}</h2>
      <p>${t.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${se}>${t.estudo.orei}</kk-button>
        <kk-button @click=${oe}>
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function pe(){let e=ie(),r=O>=E*60;return c`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${x}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${x}
          ?data-completo=${r}
          stroke-dasharray=${S}
          stroke-dashoffset=${S*(1-e)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${ne(O)}</span>
        <span class="cronometro__alvo">${t.estudo.de(E)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${d(w)} ${T===``?y(w):T}
    </p>

    ${r?c`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${t.estudo.alvoAtingido}
          </kk-alert>
        `:n}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>D?Z():J()}>
        <kk-icon slot="prefix" name=${D?`player-pause`:`player-play`}></kk-icon>
        ${D?t.leitura.pausar:t.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${ce}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${t.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${()=>void $()}>
        ${t.estudo.descartar}
      </kk-button>
    </div>
  `}function me(){let e=M.trim()===``;return c`
    <div class="perola">
      <p class="intro">${t.estudo.perolaIntro(Q())}</p>

      <kk-textarea
        rows="5"
        resize="auto"
        label=${t.estudo.perola}
        placeholder=${t.estudo.perolaPlaceholder}
        .value=${M}
        @kk-input=${e=>{M=e.target.value,U(),r()}}
      ></kk-textarea>

      <div class="perola__destinos">
        <kk-checkbox
          ?checked=${N}
          ?disabled=${e||R}
          @kk-change=${e=>{N=e.target.checked,U(),r()}}
        >
          ${t.estudo.marcarAnotacao}
        </kk-checkbox>

        <kk-checkbox
          ?checked=${P}
          ?disabled=${e||R}
          @kk-change=${e=>{P=e.target.checked,U(),r()}}
        >
          ${t.estudo.marcarCaderno}
        </kk-checkbox>

        ${e?c`<p class="perola__ajuda">${t.estudo.semPerolaParaMarcar}</p>`:n}
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" ?loading=${R} @click=${()=>void ue()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.estudo.salvarSessao}
        </kk-button>
        <kk-button variant="danger" outline ?disabled=${R} @click=${()=>void $()}>
          ${t.estudo.descartar}
        </kk-button>
      </div>
    </div>
  `}function he(){let e=_(z),r=b(z);return c`
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
                            @click=${async()=>{await v(e),await G()}}
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
  `}async function ge(e){await i({titulo:t.estudo.excluir,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await f(e.id),await G())}W();var _e={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return t.estudo.historico;if(C===`oracao`)return t.estudo.oracaoTitulo;if(C===`cronometro`)return t.estudo.emSessao;if(C===`perola`)return t.estudo.perola},acoes(e){if(C===`inicio`&&e.args[0]!==`historico`)return c`
      <kk-icon-button
        name="history"
        label=${t.estudo.historico}
        @click=${()=>o(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(t){return K(),H===null?t.args[0]===`historico`?he():C===`oracao`?fe():C===`cronometro`?pe():C===`perola`?me():de():e(H,q)}};export{_e as telaEstudo};