import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{i as r}from"./formato-BoZO7uRM.js";import{r as i}from"./rotas-CR8kk0YZ.js";import{A as a,C as o,ct as s}from"./index-BdGprTna.js";import{t as c}from"./carga-CWKYt6SK.js";import{_ as l,a as u,c as ee,d as te,f as d,g as f,h as p,i as m,l as h,m as g,o as _,p as v,r as y,s as b,t as x,u as S}from"./dados-BzXRL2uq.js";var C=90,w=2*Math.PI*C,T=`inicio`,E=`pessoal`,D=``,O=30,k=!1,A=0,j=0,M=0,N,P=``,F=!1,I=!1,L=null,R=!1,z=!1,B=!1,V=[];function H(){T===`inicio`?h():_({passo:T,tipo:E,assunto:D,alvoMin:O,rodando:k,acumuladoSeg:j,inicioMs:M,nota:P,querAnotacao:F,querCaderno:I,sessaoSalva:L,anotacaoCriada:R,cadernoSalvo:z})}function U(){let e=ee();e!==null&&({passo:T,tipo:E,assunto:D,alvoMin:O,acumuladoSeg:j,nota:P,querAnotacao:F,querCaderno:I,sessaoSalva:L,anotacaoCriada:R,cadernoSalvo:z}=e,A=j,e.rodando&&(k=!0,M=e.inicioMs,J()))}async function W(){V=await S(),s()}var G=new c(`estudo`,async()=>{await W()});function K(){k=!0,M=Date.now(),J(),H(),s()}function q(){A=j+Math.max(0,Math.floor((Date.now()-M)/1e3))}function J(){q(),clearInterval(N),N=setInterval(()=>{q(),s()},250)}function Y(){k&&(q(),j=A,k=!1,clearInterval(N),N=void 0,H(),s())}function X(){let e=O*60;return e<=0?0:Math.min(1,A/e)}function Z(){return Math.max(0,Math.round(A/60))}function ne(){T=`oracao`,H(),s()}function re(){T=`inicio`,H(),s()}function ie(){A=0,j=0,P=``,F=!1,I=!1,L=null,R=!1,z=!1,T=`cronometro`,K()}function ae(){Y(),T=`perola`,H(),s()}async function Q(){let e={...L?.id===void 0?{}:{id:L.id},assunto:D===``?n.estudo.semAssunto:D,tipo_ciclo:E,duracao_minutos:Z(),concluido_em:Date.now(),nota_meditacao:P,anotacao_criada:+!!R},t=await f(e);return L={...e,id:t},H(),await W(),L}async function oe(){if(!B){B=!0,s();try{let e=await Q(),t=P.trim()!==``;t&&F&&!R&&(await d(e),R=!0,H()),t&&I&&!z&&(await v(e),z=!0,H())}catch(e){console.error(`estudo: a sessão não foi salva.`,e),o(n.estudo.naoSalvou,`danger`);return}finally{B=!1,s()}o(n.estudo.sessaoSalva),D=``,T=`inicio`,H(),i(`estudo/historico`)}}async function $(){await a({titulo:n.estudo.descartarTitulo,texto:n.estudo.descartarTexto,rotuloConfirmar:n.estudo.descartar,variante:`danger`})&&(clearInterval(N),N=void 0,k=!1,D=``,A=0,j=0,T=`inicio`,H(),s())}function se(){return e`
    <p class="intro">${n.estudo.intro}</p>

    <h2 class="secao">${n.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(y).map(([t,n])=>e`
          <button
            class="tipo"
            ?data-ativo=${E===t}
            @click=${()=>{E=t,s()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${n}</span>
            <span>${p(t)}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${n.estudo.assunto}
      placeholder=${n.estudo.assuntoPlaceholder}
      .value=${D}
      @kk-input=${e=>{D=e.target.value}}
    ></kk-input>

    <h2 class="secao">${n.estudo.alvo}</h2>
    <div class="chips">
      ${x.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${O===t}
            @click=${()=>{O=t,s()}}
          >
            ${n.estudo.minutos(t)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${ne}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${n.estudo.comecar}
      </kk-button>
    </div>
  `}function ce(){return e`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${n.estudo.oracaoTitulo}</h2>
      <p>${n.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${ie}>${n.estudo.orei}</kk-button>
        <kk-button @click=${re}>
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function le(){let r=X(),i=A>=O*60;return e`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${C}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${C}
          ?data-completo=${i}
          stroke-dasharray=${w}
          stroke-dashoffset=${w*(1-r)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${g(A)}</span>
        <span class="cronometro__alvo">${n.estudo.de(O)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${m(E)} ${D===``?p(E):D}
    </p>

    ${i?e`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${n.estudo.alvoAtingido}
          </kk-alert>
        `:t}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>k?Y():K()}>
        <kk-icon slot="prefix" name=${k?`player-pause`:`player-play`}></kk-icon>
        ${k?n.leitura.pausar:n.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${ae}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${n.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${()=>void $()}>
        ${n.estudo.descartar}
      </kk-button>
    </div>
  `}function ue(){let r=P.trim()===``;return e`
    <div class="perola">
      <p class="intro">${n.estudo.perolaIntro(Z())}</p>

      <kk-textarea
        rows="5"
        resize="auto"
        label=${n.estudo.perola}
        placeholder=${n.estudo.perolaPlaceholder}
        .value=${P}
        @kk-input=${e=>{P=e.target.value,H(),s()}}
      ></kk-textarea>

      <div class="perola__destinos">
        <kk-checkbox
          ?checked=${F}
          ?disabled=${r||B}
          @kk-change=${e=>{F=e.target.checked,H(),s()}}
        >
          ${n.estudo.marcarAnotacao}
        </kk-checkbox>

        <kk-checkbox
          ?checked=${I}
          ?disabled=${r||B}
          @kk-change=${e=>{I=e.target.checked,H(),s()}}
        >
          ${n.estudo.marcarCaderno}
        </kk-checkbox>

        ${r?e`<p class="perola__ajuda">${n.estudo.semPerolaParaMarcar}</p>`:t}
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" ?loading=${B} @click=${()=>void oe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.estudo.salvarSessao}
        </kk-button>
        <kk-button variant="danger" outline ?disabled=${B} @click=${()=>void $()}>
          ${n.estudo.descartar}
        </kk-button>
      </div>
    </div>
  `}function de(){let i=te(V),a=l(V);return e`
    <p class="intro">${n.estudo.totais(i.length,b(a))}</p>

    ${i.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${n.estudo.semSessoes}</p>
          </div>
        `:e`
          <div class="cartoes cartoes--duas">
            ${i.map(i=>e`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${m(i.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${i.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${n.estudo.minutos(i.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${p(i.tipo_ciclo)} ·
                    ${r(i.concluido_em)}
                  </span>

                  ${i.nota_meditacao===``?t:e`<p class="cartao__texto">${i.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${i.nota_meditacao.trim()===``||i.anotacao_criada===1?t:e`
                          <kk-button
                            size="small"
                            @click=${async()=>{await d(i),await W()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${n.estudo.viraAnotacao}
                          </kk-button>
                        `}
                    <kk-button
                      size="small"
                      variant="danger"
                      outline
                      @click=${()=>void fe(i)}
                    >
                      <kk-icon slot="prefix" name="trash"></kk-icon>
                    </kk-button>
                  </span>
                </div>
              `)}
          </div>
        `}
  `}async function fe(e){await a({titulo:n.estudo.excluir,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await u(e.id),await W())}U();var pe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return n.estudo.historico;if(T===`oracao`)return n.estudo.oracaoTitulo;if(T===`cronometro`)return n.estudo.emSessao;if(T===`perola`)return n.estudo.perola},acoes(t){if(T===`inicio`&&t.args[0]!==`historico`)return e`
      <kk-icon-button
        name="history"
        label=${n.estudo.historico}
        @click=${()=>i(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){let t=G.falhou();return t===null?e.args[0]===`historico`?de():T===`oracao`?ce():T===`cronometro`?le():T===`perola`?ue():se():t}};export{pe as telaEstudo};