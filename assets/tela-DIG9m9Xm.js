import{b as e,ct as t,g as n,gt as r,m as i,pt as a,ut as o,vt as s,y as c}from"./index-sA5grpgQ.js";import{ALVOS_MIN as l,TIPOS as u,emojiDoTipo as d,excluirSessao as f,horasEMinutos as p,listarSessoes as m,ordenar as h,perolaComoAnotacao as g,perolaNoCaderno as _,relogio as v,rotuloDoTipo as y,salvarSessao as b,totalDeMinutos as x}from"./dados-lSUsrYm9.js";var S=90,C=2*Math.PI*S,w=`inicio`,T=`pessoal`,E=``,D=30,O=!1,k=0,A=0,j=0,M,N=``,P=null,F=!1,I=!1,L=[],R=!1,z=!1,B=null;async function V(){L=await m(),t()}function H(){R||z||B!==null||(z=!0,(async()=>{try{await V(),R=!0}catch(t){console.error(`estudo: a carga falhou.`,t),B=e(t)}finally{z=!1,t()}})())}function U(){B=null,H(),t()}function W(){O=!0,j=Date.now(),clearInterval(M),M=setInterval(()=>{k=A+Math.floor((Date.now()-j)/1e3),t()},250),t()}function G(){O&&(A+=Math.floor((Date.now()-j)/1e3),k=A,O=!1,clearInterval(M),M=void 0,t())}function K(){let e=D*60;return e<=0?0:Math.min(1,k/e)}function q(){return Math.max(0,Math.round(k/60))}function J(){w=`oracao`,t()}function Y(){k=0,A=0,N=``,P=null,F=!1,I=!1,w=`cronometro`,W()}function X(){G(),w=`perola`,t()}async function Z(){let e={...P?.id===void 0?{}:{id:P.id},assunto:E===``?a.estudo.semAssunto:E,tipo_ciclo:T,duracao_minutos:q(),concluido_em:Date.now(),nota_meditacao:N,anotacao_criada:+!!F},t=await b(e);return P={...e,id:t},await V(),P}async function Q(){P===null&&await Z(),E=``,w=`inicio`,o(`estudo/historico`)}function $(){clearInterval(M),M=void 0,O=!1,E=``,k=0,A=0,w=`inicio`,t()}function ee(){return s`
    <p class="intro">${a.estudo.intro}</p>

    <h2 class="secao">${a.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(u).map(([e,n])=>s`
          <button
            class="tipo"
            ?data-ativo=${T===e}
            @click=${()=>{T=e,t()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${n.emoji}</span>
            <span>${n.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${a.estudo.assunto}
      placeholder=${a.estudo.assuntoPlaceholder}
      .value=${E}
      @kk-input=${e=>{E=e.target.value}}
    ></kk-input>

    <h2 class="secao">${a.estudo.alvo}</h2>
    <div class="chips">
      ${l.map(e=>s`
          <button
            class="chip"
            ?data-ativo=${D===e}
            @click=${()=>{D=e,t()}}
          >
            ${a.estudo.minutos(e)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${J}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${a.estudo.comecar}
      </kk-button>
    </div>
  `}function te(){return s`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${a.estudo.oracaoTitulo}</h2>
      <p>${a.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${Y}>${a.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{w=`inicio`,t()}}
        >
          ${a.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ne(){let e=K(),t=k>=D*60;return s`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${S}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${S}
          ?data-completo=${t}
          stroke-dasharray=${C}
          stroke-dashoffset=${C*(1-e)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${v(k)}</span>
        <span class="cronometro__alvo">${a.estudo.de(D)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${d(T)} ${E===``?y(T):E}
    </p>

    ${t?s`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${a.estudo.alvoAtingido}
          </kk-alert>
        `:r}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>O?G():W()}>
        <kk-icon slot="prefix" name=${O?`player-pause`:`player-play`}></kk-icon>
        ${O?a.leitura.pausar:a.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${X}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${a.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${a.estudo.descartar}</kk-button>
    </div>
  `}function re(){return s`
    <p class="intro">${a.estudo.perolaIntro(q())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${a.estudo.perola}
      placeholder=${a.estudo.perolaPlaceholder}
      .value=${N}
      @kk-input=${e=>{N=e.target.value,t()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${N.trim()===``||F}
        @click=${async()=>{let e=P??await Z();await g({...e,nota_meditacao:N}),F=!0,i(a.estudo.viraAnotacaoFeito),await V()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${F?a.estudo.viraAnotacaoFeito:a.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${N.trim()===``||I}
        @click=${async()=>{let e=P??await Z();await _({...e,nota_meditacao:N}),I=!0,i(a.estudo.vaiCadernoFeito),t()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${I?a.estudo.vaiCadernoFeito:a.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void Q()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${a.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${a.estudo.descartar}</kk-button>
    </div>
  `}function ie(){let e=h(L),t=x(L);return s`
    <p class="intro">${a.estudo.totais(e.length,p(t))}</p>

    ${e.length===0?s`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${a.estudo.semSessoes}</p>
          </div>
        `:s`
          <div class="cartoes cartoes--duas">
            ${e.map(e=>s`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${d(e.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${e.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${a.estudo.minutos(e.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${y(e.tipo_ciclo)} ·
                    ${new Date(e.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${e.nota_meditacao===``?r:s`<p class="cartao__texto">${e.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${e.nota_meditacao.trim()===``||e.anotacao_criada===1?r:s`
                          <kk-button
                            size="small"
                            @click=${async()=>{await g(e),await V()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${a.estudo.viraAnotacao}
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
  `}async function ae(e){await n({titulo:a.estudo.excluir,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await f(e.id),await V())}var oe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return a.estudo.historico;if(w===`oracao`)return a.estudo.oracaoTitulo;if(w===`cronometro`)return a.estudo.emSessao;if(w===`perola`)return a.estudo.perola},acoes(e){if(w===`inicio`&&e.args[0]!==`historico`)return s`
      <kk-icon-button
        name="history"
        label=${a.estudo.historico}
        @click=${()=>o(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return H(),B===null?e.args[0]===`historico`?ie():w===`oracao`?te():w===`cronometro`?ne():w===`perola`?re():ee():c(B,U)}};export{oe as telaEstudo};