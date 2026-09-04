import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{D as r,E as i,o as a,r as o}from"./index-QyzyfOkc.js";import{ALVOS_MIN as s,TIPOS as c,emojiDoTipo as l,excluirSessao as u,horasEMinutos as d,listarSessoes as f,ordenar as p,perolaComoAnotacao as m,perolaNoCaderno as h,relogio as g,rotuloDoTipo as _,salvarSessao as v,totalDeMinutos as y}from"./dados-BUUqrqWC.js";var b=90,x=2*Math.PI*b,S=`inicio`,C=`pessoal`,w=``,T=30,E=!1,D=0,O=0,k=0,A,j=``,M=null,N=!1,P=!1,F=[],I=!1,L=!1;async function R(){F=await f(),i()}function z(){I||L||(L=!0,(async()=>{try{await R(),I=!0}finally{L=!1,i()}})())}function B(){E=!0,k=Date.now(),clearInterval(A),A=setInterval(()=>{D=O+Math.floor((Date.now()-k)/1e3),i()},250),i()}function V(){E&&(O+=Math.floor((Date.now()-k)/1e3),D=O,E=!1,clearInterval(A),A=void 0,i())}function H(){let e=T*60;return e<=0?0:Math.min(1,D/e)}function U(){return Math.max(0,Math.round(D/60))}function W(){S=`oracao`,i()}function G(){D=0,O=0,j=``,M=null,N=!1,P=!1,S=`cronometro`,B()}function K(){V(),S=`perola`,i()}async function q(){let e={...M?.id===void 0?{}:{id:M.id},assunto:w===``?n.estudo.semAssunto:w,tipo_ciclo:C,duracao_minutos:U(),concluido_em:Date.now(),nota_meditacao:j,anotacao_criada:+!!N},t=await v(e);return M={...e,id:t},await R(),M}async function J(){M===null&&await q(),w=``,S=`inicio`,r(`estudo/historico`)}function Y(){clearInterval(A),A=void 0,E=!1,w=``,D=0,O=0,S=`inicio`,i()}function X(){return e`
    <p class="intro">${n.estudo.intro}</p>

    <h2 class="secao">${n.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(c).map(([t,n])=>e`
          <button
            class="tipo"
            ?data-ativo=${C===t}
            @click=${()=>{C=t,i()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${n.emoji}</span>
            <span>${n.rotulo}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${n.estudo.assunto}
      placeholder=${n.estudo.assuntoPlaceholder}
      .value=${w}
      @kk-input=${e=>{w=e.target.value}}
    ></kk-input>

    <h2 class="secao">${n.estudo.alvo}</h2>
    <div class="chips">
      ${s.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${T===t}
            @click=${()=>{T=t,i()}}
          >
            ${n.estudo.minutos(t)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${W}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${n.estudo.comecar}
      </kk-button>
    </div>
  `}function Z(){return e`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${n.estudo.oracaoTitulo}</h2>
      <p>${n.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${G}>${n.estudo.orei}</kk-button>
        <kk-button
          @click=${()=>{S=`inicio`,i()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Q(){let r=H(),i=D>=T*60;return e`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${b}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${b}
          ?data-completo=${i}
          stroke-dasharray=${x}
          stroke-dashoffset=${x*(1-r)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${g(D)}</span>
        <span class="cronometro__alvo">${n.estudo.de(T)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${l(C)} ${w===``?_(C):w}
    </p>

    ${i?e`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${n.estudo.alvoAtingido}
          </kk-alert>
        `:t}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>E?V():B()}>
        <kk-icon slot="prefix" name=${E?`player-pause`:`player-play`}></kk-icon>
        ${E?n.leitura.pausar:n.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${K}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${n.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${Y}>${n.estudo.descartar}</kk-button>
    </div>
  `}function $(){return e`
    <p class="intro">${n.estudo.perolaIntro(U())}</p>

    <kk-textarea
      rows="5"
      resize="auto"
      label=${n.estudo.perola}
      placeholder=${n.estudo.perolaPlaceholder}
      .value=${j}
      @kk-input=${e=>{j=e.target.value,i()}}
    ></kk-textarea>

    <div class="editor__acoes">
      <kk-button
        ?disabled=${j.trim()===``||N}
        @click=${async()=>{let e=M??await q();await m({...e,nota_meditacao:j}),N=!0,o(n.estudo.viraAnotacaoFeito),await R()}}
      >
        <kk-icon slot="prefix" name="notes"></kk-icon>
        ${N?n.estudo.viraAnotacaoFeito:n.estudo.viraAnotacao}
      </kk-button>

      <kk-button
        ?disabled=${j.trim()===``||P}
        @click=${async()=>{let e=M??await q();await h({...e,nota_meditacao:j}),P=!0,o(n.estudo.vaiCadernoFeito),i()}}
      >
        <kk-icon slot="prefix" name="book-2"></kk-icon>
        ${P?n.estudo.vaiCadernoFeito:n.estudo.vaiCaderno}
      </kk-button>
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>void J()}>
        <kk-icon slot="prefix" name="check"></kk-icon>${n.estudo.salvarSessao}
      </kk-button>
      <kk-button variant="danger" outline @click=${Y}>${n.estudo.descartar}</kk-button>
    </div>
  `}function ee(){let r=p(F),i=y(F);return e`
    <p class="intro">${n.estudo.totais(r.length,d(i))}</p>

    ${r.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${n.estudo.semSessoes}</p>
          </div>
        `:e`
          <div class="cartoes cartoes--duas">
            ${r.map(r=>e`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${l(r.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${r.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${n.estudo.minutos(r.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${_(r.tipo_ciclo)} ·
                    ${new Date(r.concluido_em).toLocaleString(`pt-BR`,{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${r.nota_meditacao===``?t:e`<p class="cartao__texto">${r.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${r.nota_meditacao.trim()===``||r.anotacao_criada===1?t:e`
                          <kk-button
                            size="small"
                            @click=${async()=>{await m(r),await R()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${n.estudo.viraAnotacao}
                          </kk-button>
                        `}
                    <kk-button
                      size="small"
                      variant="danger"
                      outline
                      @click=${()=>void te(r)}
                    >
                      <kk-icon slot="prefix" name="trash"></kk-icon>
                    </kk-button>
                  </span>
                </div>
              `)}
          </div>
        `}
  `}async function te(e){!await a({titulo:n.estudo.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await u(e.id),await R())}var ne={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return n.estudo.historico;if(S===`oracao`)return n.estudo.oracaoTitulo;if(S===`cronometro`)return n.estudo.emSessao;if(S===`perola`)return n.estudo.perola},acoes(t){if(S===`inicio`&&t.args[0]!==`historico`)return e`
      <kk-icon-button
        name="history"
        label=${n.estudo.historico}
        @click=${()=>r(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){return z(),e.args[0]===`historico`?ee():S===`oracao`?Z():S===`cronometro`?Q():S===`perola`?$():X()}};export{ne as telaEstudo};