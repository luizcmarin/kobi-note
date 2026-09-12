import{ct as e,et as t,g as n,it as r,m as i,ot as a,tt as o,v as s,y as c}from"./index-BGY_4f1A.js";import{ALVOS_MIN as l,TIPOS as u,emojiDoTipo as d,excluirSessao as f,horasEMinutos as p,listarSessoes as m,ordenar as h,perolaComoAnotacao as g,perolaNoCaderno as _,relogio as v,rotuloDoTipo as y,salvarSessao as b,totalDeMinutos as x}from"./dados-Bn5aCRaX.js";var S=90,C=2*Math.PI*S,w=`inicio`,T=`pessoal`,E=``,D=30,O=!1,k=0,A=0,j=0,M,N=``,P=null,F=!1,I=!1,L=[],R=!1,z=!1,B=null;async function V(){L=await m(),t()}function H(){R||z||B!==null||(z=!0,(async()=>{try{await V(),R=!0}catch(e){console.error(`estudo: a carga falhou.`,e),B=c(e)}finally{z=!1,t()}})())}function U(){B=null,H(),t()}function W(){O=!0,j=Date.now(),clearInterval(M),M=setInterval(()=>{k=A+Math.floor((Date.now()-j)/1e3),t()},250),t()}function G(){O&&(A+=Math.floor((Date.now()-j)/1e3),k=A,O=!1,clearInterval(M),M=void 0,t())}function K(){let e=D*60;return e<=0?0:Math.min(1,k/e)}function q(){return Math.max(0,Math.round(k/60))}function J(){w=`oracao`,t()}function Y(){k=0,A=0,N=``,P=null,F=!1,I=!1,w=`cronometro`,W()}function X(){G(),w=`perola`,t()}async function Z(){let e={...P?.id===void 0?{}:{id:P.id},assunto:E===``?r.estudo.semAssunto:E,tipo_ciclo:T,duracao_minutos:q(),concluido_em:Date.now(),nota_meditacao:N,anotacao_criada:+!!F},t=await b(e);return P={...e,id:t},await V(),P}async function Q(){P===null&&await Z(),E=``,w=`inicio`,o(`estudo/historico`)}function $(){clearInterval(M),M=void 0,O=!1,E=``,k=0,A=0,w=`inicio`,t()}function ee(){return e`
    <p class="intro">${r.estudo.intro}</p>

    <h2 class="secao">${r.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(u).map(([n,r])=>e`
          <button
            class="tipo"
            ?data-ativo=${T===n}
            @click=${()=>{T=n,t()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${r.emoji}</span>
            <span>${r.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${r.estudo.assunto}
      placeholder=${r.estudo.assuntoPlaceholder}
      .value=${E}
      @kk-input=${e=>{E=e.target.value}}
    ></kk-input>

    <h2 class="secao">${r.estudo.alvo}</h2>
    <div class="chips">
      ${l.map(n=>e`
          <button
            class="chip"
            ?data-ativo=${D===n}
            @click=${()=>{D=n,t()}}
          >
            ${r.estudo.minutos(n)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${J}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${r.estudo.comecar}
      </kk-button>
    </div>
  `}function te(){return e`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${r.estudo.oracaoTitulo}</h2>
      <p>${r.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${Y}>${r.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{w=`inicio`,t()}}
        >
          ${r.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ne(){let t=K(),n=k>=D*60;return e`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${S}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${S}
          ?data-completo=${n}
          stroke-dasharray=${C}
          stroke-dashoffset=${C*(1-t)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${v(k)}</span>
        <span class="cronometro__alvo">${r.estudo.de(D)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${d(T)} ${E===``?y(T):E}
    </p>

    ${n?e`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${r.estudo.alvoAtingido}
          </kk-alert>
        `:a}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>O?G():W()}>
        <kk-icon slot="prefix" name=${O?`player-pause`:`player-play`}></kk-icon>
        ${O?r.leitura.pausar:r.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${X}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${r.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${r.estudo.descartar}</kk-button>
    </div>
  `}function re(){return e`
    <p class="intro">${r.estudo.perolaIntro(q())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${r.estudo.perola}
      placeholder=${r.estudo.perolaPlaceholder}
      .value=${N}
      @kk-input=${e=>{N=e.target.value,t()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${N.trim()===``||F}
        @click=${async()=>{let e=P??await Z();await g({...e,nota_meditacao:N}),F=!0,i(r.estudo.viraAnotacaoFeito),await V()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${F?r.estudo.viraAnotacaoFeito:r.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${N.trim()===``||I}
        @click=${async()=>{let e=P??await Z();await _({...e,nota_meditacao:N}),I=!0,i(r.estudo.vaiCadernoFeito),t()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${I?r.estudo.vaiCadernoFeito:r.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void Q()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${r.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${$}>${r.estudo.descartar}</kk-button>
    </div>
  `}function ie(){let t=h(L),n=x(L);return e`
    <p class="intro">${r.estudo.totais(t.length,p(n))}</p>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${r.estudo.semSessoes}</p>
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
                      ${r.estudo.minutos(t.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${y(t.tipo_ciclo)} ·
                    ${new Date(t.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${t.nota_meditacao===``?a:e`<p class="cartao__texto">${t.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${t.nota_meditacao.trim()===``||t.anotacao_criada===1?a:e`
                          <kk-button
                            size="small"
                            @click=${async()=>{await g(t),await V()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${r.estudo.viraAnotacao}
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
  `}async function ae(e){await n({titulo:r.estudo.excluir,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await f(e.id),await V())}var oe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return r.estudo.historico;if(w===`oracao`)return r.estudo.oracaoTitulo;if(w===`cronometro`)return r.estudo.emSessao;if(w===`perola`)return r.estudo.perola},acoes(t){if(w===`inicio`&&t.args[0]!==`historico`)return e`
      <kk-icon-button
        name="history"
        label=${r.estudo.historico}
        @click=${()=>o(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return H(),B===null?e.args[0]===`historico`?ie():w===`oracao`?te():w===`cronometro`?ne():w===`perola`?re():ee():s(B,U)}};export{oe as telaEstudo};