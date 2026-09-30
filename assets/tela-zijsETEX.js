import{i as e,t}from"./lit-CL39YOSA.js";import{i as n,n as r}from"./strings-C-U_qlgv.js";import{r as i}from"./rotas-D12eslN_.js";import{R as a,c as o,m as s}from"./index-DQ-iAe1X.js";import{t as c}from"./carga-Cl47TOz-.js";import{_ as l,a as u,c as ee,d,f,g as p,h as m,i as h,l as g,m as _,n as v,o as y,p as b,s as x,t as S,u as C}from"./dados-BmXN5UQw.js";var w=90,T=2*Math.PI*w,E=`inicio`,D=`pessoal`,O=``,k=30,A=!1,j=0,M=0,N=0,P,F=``,I=!1,L=!1,R=null,z=!1,B=!1,V=!1,H=[];function U(){if(E===`inicio`){g();return}y({passo:E,tipo:D,assunto:O,alvoMin:k,rodando:A,acumuladoSeg:M,inicioMs:N,nota:F,querAnotacao:I,querCaderno:L,sessaoSalva:R,anotacaoCriada:z,cadernoSalvo:B})}function W(){let e=ee();e!==null&&({passo:E,tipo:D,assunto:O,alvoMin:k,acumuladoSeg:M,nota:F,querAnotacao:I,querCaderno:L,sessaoSalva:R,anotacaoCriada:z,cadernoSalvo:B}=e,j=M,e.rodando&&(A=!0,N=e.inicioMs,Y()))}async function G(){H=await C(),a()}var K=new c(`estudo`,async()=>{await G()});function q(){A=!0,N=Date.now(),Y(),U(),a()}function J(){j=M+Math.max(0,Math.floor((Date.now()-N)/1e3))}function Y(){J(),clearInterval(P),P=setInterval(()=>{J(),a()},250)}function X(){A&&(J(),M=j,A=!1,clearInterval(P),P=void 0,U(),a())}function Z(){let e=k*60;return e<=0?0:Math.min(1,j/e)}function Q(){return Math.max(0,Math.round(j/60))}function te(){E=`oracao`,U(),a()}function ne(){E=`inicio`,U(),a()}function re(){j=0,M=0,F=``,I=!1,L=!1,R=null,z=!1,B=!1,E=`cronometro`,q()}function ie(){X(),E=`perola`,U(),a()}async function ae(){let e={...R?.id===void 0?{}:{id:R.id},assunto:O===``?r.estudo.semAssunto:O,tipo_ciclo:D,duracao_minutos:Q(),concluido_em:Date.now(),nota_meditacao:F,anotacao_criada:+!!z},t=await p(e);return R={...e,id:t},U(),await G(),R}async function oe(){if(!V){V=!0,a();try{let e=await ae(),t=F.trim()!==``;t&&I&&!z&&(await f(e),z=!0,U()),t&&L&&!B&&(await b(e),B=!0,U())}catch(e){console.error(`estudo: a sessão não foi salva.`,e),o(r.estudo.naoSalvou,`danger`);return}finally{V=!1,a()}o(r.estudo.sessaoSalva),O=``,E=`inicio`,U(),i(`estudo/historico`)}}async function $(){await s({titulo:r.estudo.descartarTitulo,texto:r.estudo.descartarTexto,rotuloConfirmar:r.estudo.descartar,variante:`danger`})&&(clearInterval(P),P=void 0,A=!1,O=``,j=0,M=0,E=`inicio`,U(),a())}function se(){return e`
    <p class="intro">${r.estudo.intro}</p>

    <h2 class="secao">${r.estudo.tipo}</h2>
    <div class="tipos">
      ${Object.entries(v).map(([t,n])=>e`
          <button
            class="tipo"
            ?data-ativo=${D===t}
            @click=${()=>{D=t,a()}}
          >
            <span class="tipo__emoji" aria-hidden="true">${n}</span>
            <span>${m(t)}</span>
          </button>
        `)}
    </div>

    <kk-input
      label=${r.estudo.assunto}
      placeholder=${r.estudo.assuntoPlaceholder}
      .value=${O}
      @kk-input=${e=>{O=e.target.value}}
    ></kk-input>

    <h2 class="secao">${r.estudo.alvo}</h2>
    <div class="chips">
      ${S.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${k===t}
            @click=${()=>{k=t,a()}}
          >
            ${r.estudo.minutos(t)}
          </button>
        `)}
    </div>

    <div class="editor__acoes">
      <kk-button variant="primary" size="large" @click=${te}>
        <kk-icon slot="prefix" name="player-play"></kk-icon>${r.estudo.comecar}
      </kk-button>
    </div>
  `}function ce(){return e`
    <div class="oracao">
      <kk-icon class="oracao__icone" name="pray"></kk-icon>
      <h2>${r.estudo.oracaoTitulo}</h2>
      <p>${r.estudo.oracaoTexto}</p>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${re}>${r.estudo.orei}</kk-button>
        <kk-button @click=${ne}>
          ${r.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function le(){let n=Z(),i=j>=k*60;return e`
    <div class="cronometro">
      <svg class="cronometro__anel" viewBox="0 0 200 200" aria-hidden="true">
        <circle class="cronometro__trilho" cx="100" cy="100" r=${w}></circle>
        <circle
          class="cronometro__arco"
          cx="100"
          cy="100"
          r=${w}
          ?data-completo=${i}
          stroke-dasharray=${T}
          stroke-dashoffset=${T*(1-n)}
        ></circle>
      </svg>

      <div class="cronometro__centro">
        <span class="cronometro__tempo">${_(j)}</span>
        <span class="cronometro__alvo">${r.estudo.de(k)}</span>
      </div>
    </div>

    <p class="cronometro__assunto">
      ${h(D)} ${O===``?m(D):O}
    </p>

    ${i?e`
          <kk-alert open variant="success">
            <kk-icon slot="icon" name="circle-check"></kk-icon>${r.estudo.alvoAtingido}
          </kk-alert>
        `:t}

    <div class="editor__acoes">
      <kk-button variant="primary" @click=${()=>A?X():q()}>
        <kk-icon slot="prefix" name=${A?`player-pause`:`player-play`}></kk-icon>
        ${A?r.leitura.pausar:r.leitura.continuar}
      </kk-button>
      <kk-button variant="success" outline @click=${ie}>
        <kk-icon slot="prefix" name="flag"></kk-icon>${r.estudo.encerrar}
      </kk-button>
      <kk-button variant="danger" outline @click=${()=>void $()}>
        ${r.estudo.descartar}
      </kk-button>
    </div>
  `}function ue(){let n=F.trim()===``;return e`
    <div class="perola">
      <p class="intro">${r.estudo.perolaIntro(Q())}</p>

      <kk-textarea
        rows="5"
        resize="auto"
        label=${r.estudo.perola}
        placeholder=${r.estudo.perolaPlaceholder}
        .value=${F}
        @kk-input=${e=>{F=e.target.value,U(),a()}}
      ></kk-textarea>

      <div class="perola__destinos">
        <kk-checkbox
          ?checked=${I}
          ?disabled=${n||V}
          @kk-change=${e=>{I=e.target.checked,U(),a()}}
        >
          ${r.estudo.marcarAnotacao}
        </kk-checkbox>

        <kk-checkbox
          ?checked=${L}
          ?disabled=${n||V}
          @kk-change=${e=>{L=e.target.checked,U(),a()}}
        >
          ${r.estudo.marcarCaderno}
        </kk-checkbox>

        ${n?e`<p class="perola__ajuda">${r.estudo.semPerolaParaMarcar}</p>`:t}
      </div>

      <div class="editor__acoes">
        <kk-button variant="primary" ?loading=${V} @click=${()=>void oe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${r.estudo.salvarSessao}
        </kk-button>
        <kk-button variant="danger" outline ?disabled=${V} @click=${()=>void $()}>
          ${r.estudo.descartar}
        </kk-button>
      </div>
    </div>
  `}function de(){let i=d(H),a=l(H);return e`
    <p class="intro">${r.estudo.totais(i.length,x(a))}</p>

    ${i.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="hourglass"></kk-icon>
            <p>${r.estudo.semSessoes}</p>
          </div>
        `:e`
          <div class="cartoes cartoes--duas">
            ${i.map(i=>e`
                <div class="cartao cartao--parado">
                  <span class="cartao__topo">
                    <span class="cartao__emoji" aria-hidden="true">
                      ${h(i.tipo_ciclo)}
                    </span>
                    <span class="cartao__titulo">${i.assunto}</span>
                    <kk-badge variant="neutral" pill>
                      ${r.estudo.minutos(i.duracao_minutos)}
                    </kk-badge>
                  </span>

                  <span class="cartao__referencia">
                    ${m(i.tipo_ciclo)} ·
                    ${new Date(i.concluido_em).toLocaleString(n(),{dateStyle:`short`,timeStyle:`short`})}
                  </span>

                  ${i.nota_meditacao===``?t:e`<p class="cartao__texto">${i.nota_meditacao}</p>`}

                  <span class="cartao__rodape">
                    ${i.nota_meditacao.trim()===``||i.anotacao_criada===1?t:e`
                          <kk-button
                            size="small"
                            @click=${async()=>{await f(i),await G()}}
                          >
                            <kk-icon slot="prefix" name="notes"></kk-icon>${r.estudo.viraAnotacao}
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
  `}async function fe(e){await s({titulo:r.estudo.excluir,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await u(e.id),await G())}W();var pe={voltarPara(e){return e.args[0]===`historico`?`estudo`:`home`},titulo(e){if(e.args[0]===`historico`)return r.estudo.historico;if(E===`oracao`)return r.estudo.oracaoTitulo;if(E===`cronometro`)return r.estudo.emSessao;if(E===`perola`)return r.estudo.perola},acoes(t){if(E===`inicio`&&t.args[0]!==`historico`)return e`
      <kk-icon-button
        name="history"
        label=${r.estudo.historico}
        @click=${()=>i(`estudo/historico`)}
      ></kk-icon-button>
    `},conteudo(e){let t=K.falhou();return t===null?e.args[0]===`historico`?de():E===`oracao`?ce():E===`cronometro`?le():E===`perola`?ue():se():t}};export{pe as telaEstudo};