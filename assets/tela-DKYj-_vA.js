import{_t as e,b as t,ft as n,g as r,ht as i,lt as a,m as o,st as s,y as c}from"./index-BESQMk3B.js";import{ALVOS_MIN as l,TIPOS as u,emojiDoTipo as d,excluirSessao as f,horasEMinutos as p,listarSessoes as m,ordenar as h,perolaComoAnotacao as g,perolaNoCaderno as _,relogio as v,rotuloDoTipo as y,salvarSessao as b,totalDeMinutos as x}from"./dados-DfQvOZWs.js";var S=90,C=2*Math.PI*S,w=`inicio`,T=`pessoal`,E=``,D=30,O=!1,k=0,A=0,j=0,M,N=``,P=null,F=!1,I=!1,L=[],R=!1,z=!1,B=null;async function V(){L=await m(),s()}function H(){R||z||B!==null||(z=!0,(async()=>{try{await V(),R=!0}catch(e){console.error(`estudo: a carga falhou.`,e),B=t(e)}finally{z=!1,s()}})())}function U(){B=null,H(),s()}function W(){O=!0,j=Date.now(),clearInterval(M),M=setInterval(()=>{k=A+Math.floor((Date.now()-j)/1e3),s()},250),s()}function G(){O&&(A+=Math.floor((Date.now()-j)/1e3),k=A,O=!1,clearInterval(M),M=void 0,s())}function K(){let e=D*60;return e<=0?0:Math.min(1,k/e)}function q(){return Math.max(0,Math.round(k/60))}function J(){w=`oracao`,s()}function Y(){k=0,A=0,N=``,P=null,F=!1,I=!1,w=`cronometro`,W()}function X(){G(),w=`perola`,s()}async function Z(){let e={...P?.id===void 0?{}:{id:P.id},assunto:E===``?n.estudo.semAssunto:E,tipo_ciclo:T,duracao_minutos:q(),concluido_em:Date.now(),nota_meditacao:N,anotacao_criada:+!!F},t=await b(e);return P={...e,id:t},await V(),P}async function Q(){P===null&&await Z(),E=``,w=`inicio`,a(`estudo/historico`)}function $(){clearInterval(M),M=void 0,O=!1,E=``,k=0,A=0,w=`inicio`,s()}function ee(){return e`
    <p class="intro">${n.estudo.intro}</p>

    <h2 class="secao">${n.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(u).map(([t,n])=>e`
          <button
            class="tipo"
            ?data-ativo=${T===t}
            @click=${()=>{T=t,s()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${n.emoji}</span>
            <span>${n.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${n.estudo.assunto}
      placeholder=${n.estudo.assuntoPlaceholder}
      .value=${E}
      @kk-input=${e=>{E=e.target.value}}
    ></kk-input>

    <h2 class="secao">${n.estudo.alvo}</h2>
    <div class="chips">
      ${l.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${D===t}
            @click=${()=>{D=t,s()}}
          >
            ${n.estudo.minutos(t)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${J}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${n.estudo.comecar}
      </kk-button>
    </div>
  `}function te(){return e`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${n.estudo.oracaoTitulo}</h2>
      <p>${n.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${Y}>${n.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{w=`inicio`,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ne(){let t=K(),r=k>=D*60;return e`
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
        <span class="cronometro__alvo">${n.estudo.de(D)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${d(T)} ${E===``?y(T):E}
    </p>

    ${r?e`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${n.estudo.alvoAtingido}
          </kk-alert>
        `:i}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>O?G():W()}>
        <kk-icon slot="prefix" name=${O?`player-pause`:`player-play`}></kk-icon>
        ${O?n.leitura.pausar:n.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${X}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${n.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${n.estudo.descartar}</kk-button>
    </div>
  `}function re(){return e`
    <p class="intro">${n.estudo.perolaIntro(q())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${n.estudo.perola}
      placeholder=${n.estudo.perolaPlaceholder}
      .value=${N}
      @kk-input=${e=>{N=e.target.value,s()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${N.trim()===``||F}
        @click=${async()=>{let e=P??await Z();await g({...e,nota_meditacao:N}),F=!0,o(n.estudo.viraAnotacaoFeito),await V()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${F?n.estudo.viraAnotacaoFeito:n.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${N.trim()===``||I}
        @click=${async()=>{let e=P??await Z();await _({...e,nota_meditacao:N}),I=!0,o(n.estudo.vaiCadernoFeito),s()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${I?n.estudo.vaiCadernoFeito:n.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void Q()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${n.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${n.estudo.descartar}</kk-button>
    </div>
  `}function ie(){let t=h(L),r=x(L);return e`
    <p class="intro">${n.estudo.totais(t.length,p(r))}</p>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${n.estudo.semSessoes}</p>
          </div>
        `:e`
          <div class="cartoes cartoes--duas">
            ${t.map(t=>e`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${d(t.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${t.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${n.estudo.minutos(t.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${y(t.tipo_ciclo)} ·
                    ${new Date(t.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${t.nota_meditacao===``?i:e`<p class="cartao__texto">${t.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${t.nota_meditacao.trim()===``||t.anotacao_criada===1?i:e`
                          <kk-button
                            size="small"
                            @click=${async()=>{await g(t),await V()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${n.estudo.viraAnotacao}
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
  `}async function ae(e){await r({titulo:n.estudo.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await f(e.id),await V())}var oe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return n.estudo.historico;if(w===`oracao`)return n.estudo.oracaoTitulo;if(w===`cronometro`)return n.estudo.emSessao;if(w===`perola`)return n.estudo.perola},acoes(t){if(w===`inicio`&&t.args[0]!==`historico`)return e`
      <kk-icon-button
        name="history"
        label=${n.estudo.historico}
        @click=${()=>a(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return H(),B===null?e.args[0]===`historico`?ie():w===`oracao`?te():w===`cronometro`?ne():w===`perola`?re():ee():c(B,U)}};export{oe as telaEstudo};