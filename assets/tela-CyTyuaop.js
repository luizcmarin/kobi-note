import{C as e,_t as t,at as n,bt as r,ct as i,ft as a,g as o,m as s,mt as c,tt as l,w as u,xt as d,y as f}from"./index-DZRfAs58.js";import{t as p}from"./foco-DE5EZ3jk.js";import{t as m}from"./compartilhar-o6L4L4LI.js";import{DESTINATARIO_VAZIO as h,DIAS_DA_SEMANA as ee,MESES as g,PUBLICADOR_VAZIO as te,TIPOS_PUBLICADOR as ne,ajustado as re,alternarEnviado as ie,anoDeServico as ae,carregar as oe,comoHorario as _,contadorTemAtividade as v,contadorZerado as se,contagemDoAno as ce,corDoEstudo as le,deHorario as ue,enderecoDoEnvio as de,esfriando as fe,estudosVisiveis as pe,excluirEstudo as me,excluirRegistro as he,excluirRelatorio as ge,fechamentoDoMes as _e,horasDoContador as ve,iniciais as ye,lembreteDoRelatorio as be,mesEAno as y,mesSeguinte as xe,mesesDoAnoDeServico as Se,numeroDoWhatsApp as Ce,observacoesDoContador as we,ordenarRelatorios as Te,partesDasHoras as Ee,registrosDoEstudo as b,relataHoras as De,relatoriosEmAtraso as Oe,resumosPorAnoDeServico as x,salvarContador as S,salvarEstudo as ke,salvarRegistro as Ae,salvarRelatorio as C,textoDoEstudo as je,textoDoRelatorio as Me,ultimoRelativo as Ne,ultimoRelatorio as w}from"./dados-BHyQe4Ak.js";import Pe from"./martelada-Cm7NO4R0.js";var T=[],E=[],D=[],O=null,k=[],A=te,j=h,M=null,N=``,P=null,F=null,I=null;function L(e){P!==null&&(P={...P,...e})}function R(e){F!==null&&(F={...F,...e})}function z(e){I!==null&&(I={...I,...e})}var B=!1,V=!1,H=null;async function U(){let e=await oe();T=e.relatorios,E=e.estudos,D=e.registros,O=e.contador,k=e.contadores,A=e.publicador,j=e.secretario,a()}function W(){B||V||H!==null||(V=!0,(async()=>{try{await U(),B=!0}catch(e){console.error(`ministerio: a carga falhou.`,e),H=u(e)}finally{V=!1,a()}})())}function Fe(){H=null,W(),a()}function G(e,t,n,r){return d`
    <button class="atalho" @click=${()=>c(r)}>
      <kk-icon class="atalho__icone" name=${e}></kk-icon>
      <span class="atalho__rotulo">${t}</span>
      <span class="atalho__resumo">${n}</span>
    </button>
  `}function K(e,n,i,a,o,s){return d`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${n}></kk-icon>${i}</span>
      <kk-icon-button
        name="minus"
        label=${t.ministerio.diminuir(i)}
        @click=${()=>void q(e,-a)}
      ></kk-icon-button>
      <span class="tally__valor">${o}</span>
      <kk-icon-button
        name="plus"
        label=${t.ministerio.aumentar(i)}
        @click=${()=>void q(e,a)}
      ></kk-icon-button>
      ${s??r}
    </div>
  `}async function q(e,t){O!==null&&(O=await S(re(O,e,t)),a())}async function Ie(){O!==null&&await o({titulo:t.ministerio.zerar,texto:t.ministerio.zerarTexto,rotuloConfirmar:t.ministerio.zerar,variante:`warning`})&&O!==null&&(O=await S(se(O)),a())}function J(e,t){return O!==null&&O.mes===e&&O.ano===t?O:k.find(n=>n.mes===e&&n.ano===t)}async function Le(e){let t=J(e.mes,e.ano);if(t===void 0)return;let n=xe(e.mes,e.ano),r=_e(t,e.tipo_publicador,J(n.mes,n.ano));for(let e of r){let t=await S(e);O!==null&&t.mes===O.mes&&t.ano===O.ano&&(O=t)}}function Re(e){let n=v(e);return d`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${t.ministerio.contadores}
          <small>${y(e.mes,e.ano)}</small>
        </span>
        ${n?d`
              <kk-icon-button
                name="rotate-clockwise"
                label=${t.ministerio.zerar}
                @click=${()=>void Ie()}
              ></kk-icon-button>
            `:r}
      </div>

      ${K(`minutos`,`clock`,t.ministerio.tempo,15,_(e.minutos),d`
          <kk-button size="small" outline @click=${()=>void q(`minutos`,60)}>
            ${t.ministerio.maisUmaHora}
          </kk-button>
        `)}
      ${K(`estudos`,`book`,t.ministerio.estudos,1,String(e.estudos))}
      ${K(`revisitas`,`rotate`,t.ministerio.revisitas,1,String(e.revisitas))}
      ${K(`publicacoes`,`books`,t.ministerio.publicacoes,1,String(e.publicacoes))}
      ${K(`videos`,`player-play`,t.ministerio.videos,1,String(e.videos))}

      <kk-button variant="primary" class="tally__gerar" @click=${()=>ze(e)}>
        <kk-icon slot="prefix" name="file-text"></kk-icon>${t.ministerio.gerarRelatorio}
      </kk-button>
    </div>
  `}function ze(e){P=X(e.mes,e.ano),c(`ministerio/relatorios`)}function Be(e){if(e.id>0)return e;let t=J(e.mes,e.ano),n=t===void 0?``:we(t,e.tipo);return{...e,horas:t===void 0?0:ve(t.minutos,e.tipo),estudos:t?.estudos??0,observacoes:e.observacoes===e.geradas?n:e.observacoes,geradas:n}}function Y(e){if(P===null)return;let t=P.observacoes;P=Be({...P,...e}),P.observacoes!==t&&a()}function Ve(){let e=be(T);if(e===null)return;let t=t=>t.mes===e.mes&&t.ano===e.ano,n=T.find(t);if(n!==void 0){Ye(n);return}let r=k.find(t);if(r!==void 0&&v(r)){ze(r);return}P=X(e.mes,e.ano),c(`ministerio/relatorios`)}function He(){let e=fe(E,D),n=be(T),i=Oe(T),a=w(T);return d`
    ${i.length===0?r:d`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="calendar-x"></kk-icon>
            ${t.ministerio.atrasados(i.length,i.map(e=>y(e.mes,e.ano)).join(`, `))}
            <a href="#/ministerio/relatorios">${t.ministerio.verRelatorios}</a>
          </kk-alert>
        `}
    ${e.length===0?r:d`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="temperature-snow"></kk-icon>
            ${t.ministerio.esfriando(e.length,15)}
            <a href="#/ministerio/estudos">${t.ministerio.verEstudos}</a>
          </kk-alert>
        `}

    ${n===null?r:d`
          <kk-alert variant="warning" open class="lembrete">
            ${d`<span slot="icon" class="lembrete__mascote">${f(Pe)}</span>`}
            ${t.ministerio.lembrete(y(n.mes,n.ano),n.existe)}
            <kk-button size="small" variant="warning" @click=${Ve}>
              ${n.existe?t.ministerio.enviar:t.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${G(`file-text`,t.ministerio.atalhoRelatorios,t.ministerio.atalhoRelatoriosSub(T.length),`ministerio/relatorios`)}
      ${G(`book`,t.ministerio.atalhoEstudos,t.ministerio.atalhoEstudosSub(E.length),`ministerio/estudos`)}
      ${G(`trending-up`,t.ministerio.atalhoServico,t.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${O===null?r:Re(O)}

    ${a===null?r:d`
          <div class="ultimo">
            <span class="ultimo__rotulo">${t.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${y(a.mes,a.ano)}
                <small>
                  ${a.participacao===1?t.ministerio.participou:t.ministerio.naoParticipou}
                  · ${t.ministerio.estudosDoRelatorio(a.estudos)}
                </small>
              </span>
              <kk-badge variant=${a.relatorio_enviado===1?`success`:`neutral`} pill>
                ${a.relatorio_enviado===1?t.ministerio.enviado:t.ministerio.pendente}
              </kk-badge>
            </div>
          </div>
        `}

    ${Ge()}
  `}function Ue(e,n,i,a){let o=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=n.map(e=>e.relatorio===null?null:Math.max(0,Number(i(e.relatorio))||0)),c=Math.max(0,...s.map(e=>e??0)),l=c>0?s.indexOf(c):-1;return d`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${e}</figcaption>
      <div class="anual__colunas">
        ${n.map((e,n)=>{let i=s[n]??null,u=y(e.mes,e.ano),f=new Date(e.ano,e.mes-1,1)>=o,p=i===null?f?`aberto`:`vazio`:`relatado`,m=i===null?f?t.ministerio.mesEmAberto(u):t.ministerio.mesSemRelatorio(u):t.ministerio.valorNoMes(u,a(i)),h=i===null||i<=0?0:Math.max(4,i/c*100);return d`
            <div
              class="anual__coluna"
              tabindex="0"
              role="img"
              aria-label=${m}
              title=${m}
              data-estado=${p}
              ?data-maior=${n===l}
            >
              <span class="anual__area">
                <span class="anual__barra" style=${`block-size:${h}%`}>
                  ${i===null?r:d`<span class="anual__valor">${a(i)}</span>`}
                </span>
              </span>
              <span class="anual__mes" aria-hidden="true">${(g[e.mes]??``).slice(0,3)}</span>
            </div>
          `})}
      </div>
    </figure>
  `}function We(e){return d`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${t.ministerio.graficoParticipacao}</figcaption>
      <div class="anual__colunas anual__colunas--faixa">
        ${e.map(e=>{let n=y(e.mes,e.ano),i=e.relatorio?.participacao===1,a=e.relatorio===null?t.ministerio.mesSemRelatorio(n):t.ministerio.participacaoNoMes(n,i);return d`
            <div
              class="anual__sinal"
              role="img"
              aria-label=${a}
              title=${a}
              data-estado=${e.relatorio===null?`vazio`:i?`sim`:`nao`}
            >
              ${e.relatorio===null?r:d`<kk-icon name=${i?`circle-check`:`circle-x`}></kk-icon>`}
              <span class="anual__mes" aria-hidden="true">${(g[e.mes]??``).slice(0,3)}</span>
            </div>
          `})}
      </div>
    </figure>
  `}function Ge(){let e=x(T),n=e.map(e=>e.anoServico),i=M!==null&&n.includes(M)?M:n[0],o=e.find(e=>e.anoServico===i);if(i===void 0||o===void 0)return r;let s=n.indexOf(i),c=n[s+1],l=n[s-1],u=Se(T,i),f=u.some(e=>(Number(e.relatorio?.horas)||0)>0),p=e=>{e!==void 0&&(M=e,a())};return d`
    <section class="anual">
      <header class="anual__topo">
        <kk-icon-button
          name="chevron-left"
          label=${t.ministerio.anoAnterior}
          ?disabled=${c===void 0}
          @click=${()=>p(c)}
        ></kk-icon-button>
        <h2 class="anual__titulo">
          ${t.ministerio.anoDeServico(i)}
          <small>${t.ministerio.periodoDoAno(i)}</small>
        </h2>
        <kk-icon-button
          name="chevron-right"
          label=${t.ministerio.anoSeguinte}
          ?disabled=${l===void 0}
          @click=${()=>p(l)}
        ></kk-icon-button>
      </header>
      <p class="anual__resumo">${t.ministerio.resumoDoAno(o)}</p>

      ${Ue(t.ministerio.graficoEstudos,u,e=>e.estudos,e=>String(e))}
      ${f?Ue(t.ministerio.graficoHoras,u,e=>e.horas,e=>t.ministerio.emHoras(e)):r}
      ${We(u)}
      ${Ke(i)}
    </section>
  `}function Ke(e){let n=O===null?k:[...k.filter(e=>e.mes!==O?.mes||e.ano!==O?.ano),O],i=ce(n,e);if(i.meses===0)return r;let a=[[t.ministerio.tempo,_(i.minutos)],[t.ministerio.revisitas,String(i.revisitas)],[t.ministerio.publicacoes,String(i.publicacoes)],[t.ministerio.videos,String(i.videos)]];return d`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${t.ministerio.contagemDoAno}</figcaption>
      <dl class="anual__contagem">
        ${a.map(([e,t])=>d`
            <div class="anual__numero">
              <dt>${e}</dt>
              <dd>${t}</dd>
            </div>
          `)}
      </dl>
      <p class="anual__nota">${t.ministerio.contagemNota}</p>
    </figure>
  `}function X(e,t){let n=J(e,t);return Be({id:0,mes:e,ano:t,horas:0,estudos:0,participacao:n===void 0||v(n)?1:0,tipo:w(T)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:``,geradas:``,enviado:0,dataEnvio:0})}async function qe(){let e=P;e!==null&&(await C({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)||0),estudos:Math.max(0,Number(e.estudos)||0),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)||0),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),P=null,s(t.ministerio.relatorioSalvo),await U())}function Je(e){return d`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?t.ministerio.editarRelatorio:t.ministerio.novoRelatorio}
      </h2>

      <div class="formulario__par">
        <kk-select
          label=${t.ministerio.mes}
          .value=${String(e.mes)}
          @kk-change=${e=>{Y({mes:Number(e.target.value)})}}
        >
          ${g.map((e,t)=>t===0?r:d`<kk-option value=${t}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="number"
          label=${t.ministerio.ano}
          .value=${String(e.ano)}
          @kk-input=${e=>{Y({ano:Number(e.target.value)})}}
        ></kk-input>
      </div>

      <kk-select
        label=${t.ministerio.tipoPublicador}
        .value=${e.tipo}
        @kk-change=${e=>{Y({tipo:e.target.value})}}
      >
        ${Object.entries(ne).map(([e,t])=>d`<kk-option value=${e}>${t}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${e.participacao===1}
        @kk-change=${e=>{L({participacao:+!!e.target.checked})}}
      >
        ${t.ministerio.participacao}
      </kk-switch>

      <kk-textarea
        rows="6"
        label=${t.ministerio.observacoes}
        .value=${e.observacoes}
        @kk-input=${e=>{L({observacoes:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void qe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{P=null,a()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Z(){return Ce(j.telefone)!==``}async function Ye(e){let n=t.ministerio.relatorioDe(y(e.mes,e.ano)),r=Me(e,A),i;Z()?(window.open(de(j,r),`_blank`,`noopener`),i=await o({titulo:t.ministerio.confirmarEnvioTitulo,texto:t.ministerio.confirmarEnvio(j.nome.trim()),rotuloConfirmar:t.ministerio.foiEnviado})):i=await m(n,r,t.ministerio.copiadoParaEnviar)===`compartilhado`,i&&e.relatorio_enviado!==1&&(await C({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await Le(e),s(t.ministerio.marcadoEnviado),await U())}async function Xe(e){await o({titulo:t.ministerio.excluirRelatorio,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ge(e.id),s(t.ministerio.relatorioExcluido),await U())}function Ze(e){let n=e.relatorio_enviado===1,r=ne[e.tipo_publicador]??e.tipo_publicador;return d`
    <div class="registro" data-status=${n?`enviado`:`pendente`}>
      <span class="registro__avatar">${(g[e.mes]??``).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{P={id:e.id??0,mes:e.mes,ano:e.ano,horas:e.horas,estudos:e.estudos,participacao:e.participacao,tipo:e.tipo_publicador,metaHoras:e.meta_horas,observacoes:e.notas_publicacoes,geradas:``,enviado:e.relatorio_enviado,dataEnvio:e.data_envio_relatorio},a()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${y(e.mes,e.ano)}</span>
          <kk-badge variant=${n?`success`:`warning`} pill>
            ${n?t.ministerio.enviado:t.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${t.ministerio.resumoRelatorio(r,e.participacao===1,e.estudos,De(e.tipo_publicador)?t.ministerio.sufixoHoras(...Ee(e.horas)):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name=${Z()?`brand-whatsapp`:`share`}
          label=${Z()?t.ministerio.enviarAo(j.nome.trim()):t.ministerio.compartilhar}
          @click=${()=>void Ye(e)}
        ></kk-icon-button>
        <kk-icon-button
          name=${n?`arrow-back-up`:`circle-check`}
          label=${n?t.ministerio.marcarPendente:t.ministerio.marcarEnviado}
          @click=${async()=>{await ie(e),n||await Le(e),await U()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${t.ministerio.excluirRelatorio}
          @click=${()=>void Xe(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Qe(){return d`
    ${A.nome.trim()===``?d`
          <kk-alert variant="warning" open>
            <kk-icon slot="icon" name="user"></kk-icon>
            ${t.ministerio.semPublicador}
            <a href="#/perfil">${t.ministerio.irAoPerfil}</a>
          </kk-alert>
        `:r}
    ${Z()?r:d`
          <kk-alert variant="neutral" open>
            <kk-icon slot="icon" name="brand-whatsapp"></kk-icon>
            ${t.ministerio.semSecretario}
            <a href="#/perfil">${t.ministerio.irAoPerfil}</a>
          </kk-alert>
        `}
  `}function $e(){if(P!==null)return Je(P);let e=Te(T);if(e.length===0)return d`
      ${Qe()}
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${t.ministerio.semRelatorios}</p>
      </div>
    `;let n=x(e);return d`
    ${Qe()}
    ${n.map(n=>d`
        <section class="ano-servico">
          <header class="ano-servico__topo">
            <h3 class="ano-servico__titulo">${t.ministerio.anoDeServico(n.anoServico)}</h3>
            <p class="ano-servico__resumo">${t.ministerio.resumoDoAno(n)}</p>
          </header>
          <div class="registros">
            ${e.filter(e=>ae(e.mes,e.ano)===n.anoServico).map(e=>Ze(e))}
          </div>
        </section>
      `)}
  `}function et(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function tt(){let e=F;if(e!==null){if(e.nome.trim()===``){s(t.ministerio.informeNome,`warning`);return}await ke({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:ue(e.horario),notas:e.notas}),F=null,s(t.ministerio.estudoSalvo),await U()}}function nt(e){return d`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?t.ministerio.editarEstudo:t.ministerio.novoEstudo}
      </h2>

      <kk-input
        ${p}
        label=${t.ministerio.nome}
        .value=${e.nome}
        @kk-input=${e=>{R({nome:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${t.ministerio.contato}
          placeholder=${t.ministerio.contatoPlaceholder}
          .value=${e.contato}
          @kk-input=${e=>{R({contato:e.target.value})}}
        ></kk-input>
        <kk-input
          label=${t.ministerio.endereco}
          .value=${e.endereco}
          @kk-input=${e=>{R({endereco:e.target.value})}}
        ></kk-input>
      </div>

      <kk-input
        label=${t.ministerio.publicacaoAtual}
        placeholder=${t.ministerio.publicacaoPlaceholder}
        .value=${e.publicacao}
        @kk-input=${e=>{R({publicacao:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${t.ministerio.diaSemana}
          .value=${e.dia}
          @kk-change=${e=>{R({dia:e.target.value})}}
        >
          <kk-option value="">${t.ministerio.escolhaDia}</kk-option>
          ${ee.map(e=>d`<kk-option value=${e}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${t.ministerio.horario}
          .value=${e.horario}
          @kk-change=${e=>{R({horario:e.target.value})}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${t.ministerio.notas}
        .value=${e.notas}
        @kk-input=${e=>{R({notas:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void tt()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,a()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function rt(e){await o({titulo:t.ministerio.excluirEstudo,texto:t.ministerio.excluirEstudoTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await me(e.id,D),s(t.ministerio.estudoExcluido),await U())}function it(e){let n=Ne(D,e),i=n.tom===`frio`||n.tom===`nunca`,o=b(D,e.id)[0],s=le(e);return d`
    <div class="registro" data-status=${i?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${s} 15%, transparent);color:${s}`}
      >
        ${ye(e)}
      </span>

      <button class="registro__alvo" @click=${()=>c(`ministerio/estudos/${e.id??``}`)}>
        <span class="registro__topo">
          <span class="registro__titulo">
            ${e.nome===``?t.ministerio.semNome:e.nome}
          </span>
          ${i?d`
                <kk-badge variant="danger" pill>
                  <kk-icon name="temperature-snow"></kk-icon>${t.ministerio.seloEsfriando}
                </kk-badge>
              `:r}
        </span>

        ${e.publicacao_atual===``?r:d`
              <span class="registro__resumo">
                <kk-icon name="book"></kk-icon>${e.publicacao_atual}
              </span>
            `}
        ${e.dia_semana===``?r:d`
              <span class="registro__resumo">
                <kk-icon name="calendar-week"></kk-icon>
                ${e.dia_semana} · ${_(e.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${n.tom}>
          <kk-icon name="history"></kk-icon>${t.ministerio.ultimoEstudo} ${n.texto}
        </span>

        ${o===void 0?r:d`
              <span class="registro__parou">
                <kk-icon name="bookmark"></kk-icon>${t.ministerio.parouEm} ${o.onde_parou}
              </span>
            `}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${t.ministerio.editarEstudo}
          @click=${()=>{F={id:e.id??0,nome:e.nome,contato:e.contato,endereco:e.endereco,publicacao:e.publicacao_atual,dia:e.dia_semana,horario:_(e.horario_minutos),notas:e.notas},a()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${t.ministerio.compartilhar}
          @click=${()=>void m(t.ministerio.estudoDe(e.nome),je(e,D))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${t.ministerio.excluirEstudo}
          @click=${()=>void rt(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function at(){if(F!==null)return nt(F);let e=pe(E,D,N);return d`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${t.ministerio.buscarEstudos}
        .value=${N}
        @kk-input=${e=>{N=e.target.value,a()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?d`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${E.length===0?t.ministerio.semEstudos:t.ministerio.semEstudosFiltro}</p>
          </div>
        `:d`<div class="registros">${e.map(e=>it(e))}</div>`}
  `}function Q(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:E.find(e=>e.id===t)}async function ot(){let e=I;if(e!==null){if(e.ondeParou.trim()===``){z({erro:!0}),a();return}await Ae({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():i(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),I=null,s(t.ministerio.registroSalvo),await U()}}function st(e){return d`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?t.ministerio.editarRegistro:t.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${t.ministerio.data}
        .value=${e.data}
        @kk-change=${e=>{z({data:e.target.value})}}
      ></kk-input>

      <kk-input
        label=${t.ministerio.ondeParou}
        placeholder=${t.ministerio.ondeParouPlaceholder}
        .value=${e.ondeParou}
        help-text=${e.erro?t.ministerio.informeOndeParou:``}
        @kk-input=${e=>{z({ondeParou:e.target.value,erro:!1})}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${t.ministerio.comentario}
        placeholder=${t.ministerio.comentarioPlaceholder}
        .value=${e.comentario}
        @kk-input=${e=>{z({comentario:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void ot()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,a()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function ct(e){await o({titulo:t.ministerio.excluirRegistro,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await he(e.id),s(t.ministerio.registroExcluido),await U())}function lt(e){if(I!==null)return st(I);let i=b(D,e.id);return i.length===0?d`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="history"></kk-icon>
        <p>${t.ministerio.semRegistros}</p>
      </div>
    `:d`
    <div class="registros">
      ${i.map(e=>d`
          <div class="sessao">
            <span class="sessao__texto">
              <span class="sessao__data">${l(e.registrado_em)}</span>
              <span class="sessao__parou">
                <kk-icon name="bookmark"></kk-icon>${e.onde_parou}
              </span>
              ${e.comentario===``?r:d`<span class="sessao__comentario">${e.comentario}</span>`}
            </span>

            <div class="registro__acoes">
              <kk-icon-button
                name="pencil"
                label=${t.acoes.editar}
                @click=${()=>{I={id:e.id??0,estudoId:e.estudo_id,data:e.registrado_em===0?n():n(e.registrado_em),ondeParou:e.onde_parou,comentario:e.comentario,erro:!1},a()}}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${t.ministerio.excluirRegistro}
                @click=${()=>void ct(e)}
              ></kk-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var ut={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let n=$(e);if(n===`relatorios`)return t.ministerio.atalhoRelatorios;if(n===`estudos`)return t.ministerio.atalhoEstudos;if(n===`linha`)return Q(e)?.nome??t.ministerio.linhaDoTempo},acoes(e){let r=$(e);if(r===`relatorios`&&P===null)return d`
        <kk-icon-button
          name="plus"
          label=${t.ministerio.novoRelatorio}
          @click=${()=>{let e=new Date;P=X(e.getMonth()+1,e.getFullYear()),a()}}
        ></kk-icon-button>
      `;if(r===`estudos`&&F===null)return d`
        <kk-icon-button
          name="plus"
          label=${t.ministerio.novoEstudo}
          @click=${()=>{F=et(),a()}}
        ></kk-icon-button>
      `;if(r===`linha`&&I===null){let r=Q(e);return r?.id===void 0?void 0:d`
        <kk-icon-button
          name="plus"
          label=${t.ministerio.registrarEstudo}
          @click=${()=>{I={id:0,estudoId:r.id??0,data:n(),ondeParou:``,comentario:``,erro:!1},a()}}
        ></kk-icon-button>
      `}},conteudo(t){if(W(),H!==null)return e(H,Fe);if(!B)return d`<div class="carregando"><kk-spinner></kk-spinner></div>`;let n=$(t);if(n===`relatorios`)return $e();if(n===`estudos`)return at();if(n===`linha`){let e=Q(t);return e===void 0?(c(`ministerio/estudos`),d`<div class="carregando"><kk-spinner></kk-spinner></div>`):lt(e)}return He()}};export{ut as telaMinisterio};