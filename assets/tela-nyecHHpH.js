import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-5zCKnCyL.js";import{r}from"./rotas-D12eslN_.js";import{a as i,c as a,t as o}from"./data-7IMAkOFv.js";import{R as s,c,l,m as u}from"./index-DYev-n2R.js";import{t as d}from"./carga-Cb65ZAc7.js";import{t as f}from"./foco-DYWgFl_h.js";import{t as p}from"./compartilhar-DUGOD5xo.js";import{DESTINATARIO_VAZIO as m,DIAS_DA_SEMANA as h,PUBLICADOR_VAZIO as ee,TIPOS_PUBLICADOR as te,ajustado as ne,alternarEnviado as re,anoDeServico as ie,carregar as ae,comoHorario as g,contadorTemAtividade as _,contadorZerado as oe,contagemDoAno as se,corDoEstudo as ce,deHorario as le,enderecoDoEnvio as ue,esfriando as de,estudosVisiveis as fe,excluirEstudo as pe,excluirRegistro as me,excluirRelatorio as he,fechamentoDoMes as ge,horasDoContador as _e,iniciais as ve,lembreteDoRelatorio as v,mesEAno as y,mesSeguinte as ye,mesesDoAnoDeServico as be,nomeDoMes as b,numeroDoWhatsApp as xe,observacoesDoContador as Se,ordenarRelatorios as Ce,partesDasHoras as we,registrosDoEstudo as x,relataHoras as Te,relatoriosEmAtraso as Ee,resumosPorAnoDeServico as De,rotuloDoDia as Oe,rotuloDoTipo as S,salvarContador as C,salvarEstudo as ke,salvarRegistro as Ae,salvarRelatorio as w,textoDoEstudo as je,textoDoRelatorio as Me,ultimoRelativo as Ne,ultimoRelatorio as T}from"./dados-Z3AK-n0l.js";import Pe from"./martelada-Cm7NO4R0.js";var E=[],D=[],O=[],k=null,A=[],j=ee,M=m,N=null,P=``,F=null,I=null,L=null;function R(e){F!==null&&(F={...F,...e})}function z(e){I!==null&&(I={...I,...e})}function B(e){L!==null&&(L={...L,...e})}async function V(){let e=await ae();E=e.relatorios,D=e.estudos,O=e.registros,k=e.contador,A=e.contadores,j=e.publicador,M=e.secretario,s()}var Fe=new d(`ministerio`,async()=>{await V()});function H(t,n,i,a){return e`
    <button class="atalho" @click=${()=>r(a)}>
      <kk-icon class="atalho__icone" name=${t}></kk-icon>
      <span class="atalho__rotulo">${n}</span>
      <span class="atalho__resumo">${i}</span>
    </button>
  `}function U(r,i,a,o,s,c){return e`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${i}></kk-icon>${a}</span>
      <kk-icon-button
        name="minus"
        label=${n.ministerio.diminuir(a)}
        @click=${()=>void W(r,-o)}
      ></kk-icon-button>
      <span class="tally__valor">${s}</span>
      <kk-icon-button
        name="plus"
        label=${n.ministerio.aumentar(a)}
        @click=${()=>void W(r,o)}
      ></kk-icon-button>
      ${c??t}
    </div>
  `}async function W(e,t){k!==null&&(k=await C(ne(k,e,t)),s())}async function Ie(){k!==null&&await u({titulo:n.ministerio.zerar,texto:n.ministerio.zerarTexto,rotuloConfirmar:n.ministerio.zerar,variante:`warning`})&&k!==null&&(k=await C(oe(k)),s())}function G(e,t){return k!==null&&k.mes===e&&k.ano===t?k:A.find(n=>n.mes===e&&n.ano===t)}async function K(e){let t=G(e.mes,e.ano);if(t===void 0)return;let n=ye(e.mes,e.ano),r=ge(t,e.tipo_publicador,G(n.mes,n.ano));for(let e of r){let t=await C(e);k!==null&&t.mes===k.mes&&t.ano===k.ano&&(k=t)}}function Le(r){let i=_(r);return e`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${n.ministerio.contadores}
          <small>${y(r.mes,r.ano)}</small>
        </span>
        ${i?e`
              <kk-icon-button
                name="rotate-clockwise"
                label=${n.ministerio.zerar}
                @click=${()=>void Ie()}
              ></kk-icon-button>
            `:t}
      </div>

      ${U(`minutos`,`clock`,n.ministerio.tempo,15,g(r.minutos),e`
          <kk-button size="small" outline @click=${()=>void W(`minutos`,60)}>
            ${n.ministerio.maisUmaHora}
          </kk-button>
        `)}
      ${U(`estudos`,`book`,n.ministerio.estudos,1,String(r.estudos))}
      ${U(`revisitas`,`rotate`,n.ministerio.revisitas,1,String(r.revisitas))}
      ${U(`publicacoes`,`books`,n.ministerio.publicacoes,1,String(r.publicacoes))}
      ${U(`videos`,`player-play`,n.ministerio.videos,1,String(r.videos))}

      <kk-button variant="primary" class="tally__gerar" @click=${()=>q(r)}>
        <kk-icon slot="prefix" name="file-text"></kk-icon>${n.ministerio.gerarRelatorio}
      </kk-button>
    </div>
  `}function q(e){F=X(e.mes,e.ano),r(`ministerio/relatorios`)}function J(e){if(e.id>0)return e;let t=G(e.mes,e.ano),n=t===void 0?``:Se(t,e.tipo);return{...e,horas:t===void 0?0:_e(t.minutos,e.tipo),estudos:t?.estudos??0,observacoes:e.observacoes===e.geradas?n:e.observacoes,geradas:n}}function Y(e){if(F===null)return;let t=F.observacoes;F=J({...F,...e}),F.observacoes!==t&&s()}function Re(){let e=v(E);if(e===null)return;let t=t=>t.mes===e.mes&&t.ano===e.ano,n=E.find(t);if(n!==void 0){Ke(n);return}let i=A.find(t);if(i!==void 0&&_(i)){q(i);return}F=X(e.mes,e.ano),r(`ministerio/relatorios`)}function ze(){let r=de(D,O),i=v(E),a=Ee(E),o=T(E);return e`
    ${a.length===0?t:e`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="calendar-x"></kk-icon>
            ${n.ministerio.atrasados(a.length,a.map(e=>y(e.mes,e.ano)).join(`, `))}
            <a href="#/ministerio/relatorios">${n.ministerio.verRelatorios}</a>
          </kk-alert>
        `}
    ${r.length===0?t:e`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="temperature-snow"></kk-icon>
            ${n.ministerio.esfriando(r.length,15)}
            <a href="#/ministerio/estudos">${n.ministerio.verEstudos}</a>
          </kk-alert>
        `}

    ${i===null?t:e`
          <kk-alert variant="warning" open class="lembrete">
            ${e`<span slot="icon" class="lembrete__mascote">${l(Pe)}</span>`}
            ${n.ministerio.lembrete(y(i.mes,i.ano),i.existe)}
            <kk-button size="small" variant="warning" @click=${Re}>
              ${i.existe?n.ministerio.enviar:n.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${H(`file-text`,n.ministerio.atalhoRelatorios,n.ministerio.atalhoRelatoriosSub(E.length),`ministerio/relatorios`)}
      ${H(`book`,n.ministerio.atalhoEstudos,n.ministerio.atalhoEstudosSub(D.length),`ministerio/estudos`)}
      ${H(`trending-up`,n.ministerio.atalhoServico,n.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${k===null?t:Le(k)}

    ${o===null?t:e`
          <div class="ultimo">
            <span class="ultimo__rotulo">${n.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${y(o.mes,o.ano)}
                <small>
                  ${o.participacao===1?n.ministerio.participou:n.ministerio.naoParticipou}
                  · ${n.ministerio.estudosDoRelatorio(o.estudos)}
                </small>
              </span>
              <kk-badge variant=${o.relatorio_enviado===1?`success`:`neutral`} pill>
                ${o.relatorio_enviado===1?n.ministerio.enviado:n.ministerio.pendente}
              </kk-badge>
            </div>
          </div>
        `}

    ${He()}
  `}function Be(r,i,a,o){let s=new Date(new Date().getFullYear(),new Date().getMonth(),1),c=i.map(e=>e.relatorio===null?null:Math.max(0,Number(a(e.relatorio))||0)),l=Math.max(0,...c.map(e=>e??0)),u=l>0?c.indexOf(l):-1;return e`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${r}</figcaption>
      <div class="anual__colunas">
        ${i.map((r,i)=>{let a=c[i]??null,d=y(r.mes,r.ano),f=new Date(r.ano,r.mes-1,1)>=s,p=a===null?f?`aberto`:`vazio`:`relatado`,m=a===null?f?n.ministerio.mesEmAberto(d):n.ministerio.mesSemRelatorio(d):n.ministerio.valorNoMes(d,o(a)),h=a===null||a<=0?0:Math.max(4,a/l*100);return e`
            <div
              class="anual__coluna"
              tabindex="0"
              role="img"
              aria-label=${m}
              title=${m}
              data-estado=${p}
              ?data-maior=${i===u}
            >
              <span class="anual__area">
                <span class="anual__barra" style=${`block-size:${h}%`}>
                  ${a===null?t:e`<span class="anual__valor">${o(a)}</span>`}
                </span>
              </span>
              <span class="anual__mes" aria-hidden="true">${b(r.mes).slice(0,3)}</span>
            </div>
          `})}
      </div>
    </figure>
  `}function Ve(r){return e`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${n.ministerio.graficoParticipacao}</figcaption>
      <div class="anual__colunas anual__colunas--faixa">
        ${r.map(r=>{let i=y(r.mes,r.ano),a=r.relatorio?.participacao===1,o=r.relatorio===null?n.ministerio.mesSemRelatorio(i):n.ministerio.participacaoNoMes(i,a);return e`
            <div
              class="anual__sinal"
              role="img"
              aria-label=${o}
              title=${o}
              data-estado=${r.relatorio===null?`vazio`:a?`sim`:`nao`}
            >
              ${r.relatorio===null?t:e`<kk-icon name=${a?`circle-check`:`circle-x`}></kk-icon>`}
              <span class="anual__mes" aria-hidden="true">${b(r.mes).slice(0,3)}</span>
            </div>
          `})}
      </div>
    </figure>
  `}function He(){let r=De(E),i=r.map(e=>e.anoServico),a=N!==null&&i.includes(N)?N:i[0],o=r.find(e=>e.anoServico===a);if(a===void 0||o===void 0)return t;let c=i.indexOf(a),l=i[c+1],u=i[c-1],d=be(E,a),f=d.some(e=>(Number(e.relatorio?.horas)||0)>0),p=e=>{e!==void 0&&(N=e,s())};return e`
    <section class="anual">
      <header class="anual__topo">
        <kk-icon-button
          name="chevron-left"
          label=${n.ministerio.anoAnterior}
          ?disabled=${l===void 0}
          @click=${()=>p(l)}
        ></kk-icon-button>
        <h2 class="anual__titulo">
          ${n.ministerio.anoDeServico(a)}
          <small>${n.ministerio.periodoDoAno(a)}</small>
        </h2>
        <kk-icon-button
          name="chevron-right"
          label=${n.ministerio.anoSeguinte}
          ?disabled=${u===void 0}
          @click=${()=>p(u)}
        ></kk-icon-button>
      </header>
      <p class="anual__resumo">${n.ministerio.resumoDoAno(o)}</p>

      ${Be(n.ministerio.graficoEstudos,d,e=>e.estudos,e=>String(e))}
      ${f?Be(n.ministerio.graficoHoras,d,e=>e.horas,e=>n.ministerio.emHoras(e)):t}
      ${Ve(d)}
      ${Ue(a)}
    </section>
  `}function Ue(r){let i=k===null?A:[...A.filter(e=>e.mes!==k?.mes||e.ano!==k?.ano),k],a=se(i,r);if(a.meses===0)return t;let o=[[n.ministerio.tempo,g(a.minutos)],[n.ministerio.revisitas,String(a.revisitas)],[n.ministerio.publicacoes,String(a.publicacoes)],[n.ministerio.videos,String(a.videos)]];return e`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${n.ministerio.contagemDoAno}</figcaption>
      <dl class="anual__contagem">
        ${o.map(([t,n])=>e`
            <div class="anual__numero">
              <dt>${t}</dt>
              <dd>${n}</dd>
            </div>
          `)}
      </dl>
      <p class="anual__nota">${n.ministerio.contagemNota}</p>
    </figure>
  `}function X(e,t){let n=G(e,t);return J({id:0,mes:e,ano:t,horas:0,estudos:0,participacao:n===void 0||_(n)?1:0,tipo:T(E)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:``,geradas:``,enviado:0,dataEnvio:0})}async function We(){let e=F;e!==null&&(await w({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)||0),estudos:Math.max(0,Number(e.estudos)||0),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)||0),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),F=null,c(n.ministerio.relatorioSalvo),await V())}function Ge(t){return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.ministerio.editarRelatorio:n.ministerio.novoRelatorio}
      </h2>

      <div class="formulario__par">
        <kk-select
          label=${n.ministerio.mes}
          .value=${String(t.mes)}
          @kk-change=${e=>{Y({mes:Number(e.target.value)})}}
        >
          ${n.calendario.meses.map((t,n)=>e`<kk-option value=${n+1}>${t}</kk-option>`)}
        </kk-select>

        <kk-input
          type="number"
          label=${n.ministerio.ano}
          .value=${String(t.ano)}
          @kk-input=${e=>{Y({ano:Number(e.target.value)})}}
        ></kk-input>
      </div>

      <kk-select
        label=${n.ministerio.tipoPublicador}
        .value=${t.tipo}
        @kk-change=${e=>{Y({tipo:e.target.value})}}
      >
        ${te.map(t=>e`<kk-option value=${t}>${S(t)}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${t.participacao===1}
        @kk-change=${e=>{R({participacao:+!!e.target.checked})}}
      >
        ${n.ministerio.participacao}
      </kk-switch>

      <kk-textarea
        rows="6"
        label=${n.ministerio.observacoes}
        .value=${t.observacoes}
        @kk-input=${e=>{R({observacoes:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void We()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Z(){return xe(M.telefone)!==``}async function Ke(e){let t=n.ministerio.relatorioDe(y(e.mes,e.ano)),r=Me(e,j),i;Z()?(window.open(ue(M,r),`_blank`,`noopener`),i=await u({titulo:n.ministerio.confirmarEnvioTitulo,texto:n.ministerio.confirmarEnvio(M.nome.trim()),rotuloConfirmar:n.ministerio.foiEnviado})):i=await p(t,r,n.ministerio.copiadoParaEnviar)===`compartilhado`,i&&e.relatorio_enviado!==1&&(await w({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await K(e),c(n.ministerio.marcadoEnviado),await V())}async function qe(e){await u({titulo:n.ministerio.excluirRelatorio,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await he(e.id),c(n.ministerio.relatorioExcluido),await V())}function Je(t){let r=t.relatorio_enviado===1,i=S(t.tipo_publicador);return e`
    <div class="registro" data-status=${r?`enviado`:`pendente`}>
      <span class="registro__avatar">${b(t.mes).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{F={id:t.id??0,mes:t.mes,ano:t.ano,horas:t.horas,estudos:t.estudos,participacao:t.participacao,tipo:t.tipo_publicador,metaHoras:t.meta_horas,observacoes:t.notas_publicacoes,geradas:``,enviado:t.relatorio_enviado,dataEnvio:t.data_envio_relatorio},s()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${y(t.mes,t.ano)}</span>
          <kk-badge variant=${r?`success`:`warning`} pill>
            ${r?n.ministerio.enviado:n.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${n.ministerio.resumoRelatorio(i,t.participacao===1,t.estudos,Te(t.tipo_publicador)?n.ministerio.sufixoHoras(...we(t.horas)):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name=${Z()?`brand-whatsapp`:`share`}
          label=${Z()?n.ministerio.enviarAo(M.nome.trim()):n.ministerio.compartilhar}
          @click=${()=>void Ke(t)}
        ></kk-icon-button>
        <kk-icon-button
          name=${r?`arrow-back-up`:`circle-check`}
          label=${r?n.ministerio.marcarPendente:n.ministerio.marcarEnviado}
          @click=${async()=>{await re(t),r||await K(t),await V()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.ministerio.excluirRelatorio}
          @click=${()=>void qe(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Ye(){return e`
    ${j.nome.trim()===``?e`
          <kk-alert variant="warning" open>
            <kk-icon slot="icon" name="user"></kk-icon>
            ${n.ministerio.semPublicador}
            <a href="#/perfil">${n.ministerio.irAoPerfil}</a>
          </kk-alert>
        `:t}
    ${Z()?t:e`
          <kk-alert variant="neutral" open>
            <kk-icon slot="icon" name="brand-whatsapp"></kk-icon>
            ${n.ministerio.semSecretario}
            <a href="#/perfil">${n.ministerio.irAoPerfil}</a>
          </kk-alert>
        `}
  `}function Xe(){if(F!==null)return Ge(F);let t=Ce(E);if(t.length===0)return e`
      ${Ye()}
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${n.ministerio.semRelatorios}</p>
      </div>
    `;let r=De(t);return e`
    ${Ye()}
    ${r.map(r=>e`
        <section class="ano-servico">
          <header class="ano-servico__topo">
            <h3 class="ano-servico__titulo">${n.ministerio.anoDeServico(r.anoServico)}</h3>
            <p class="ano-servico__resumo">${n.ministerio.resumoDoAno(r)}</p>
          </header>
          <div class="registros">
            ${t.filter(e=>ie(e.mes,e.ano)===r.anoServico).map(e=>Je(e))}
          </div>
        </section>
      `)}
  `}function Ze(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function Qe(){let e=I;if(e!==null){if(e.nome.trim()===``){c(n.ministerio.informeNome,`warning`);return}await ke({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:le(e.horario),notas:e.notas}),I=null,c(n.ministerio.estudoSalvo),await V()}}function $e(t){return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.ministerio.editarEstudo:n.ministerio.novoEstudo}
      </h2>

      <kk-input
        ${f}
        label=${n.ministerio.nome}
        .value=${t.nome}
        @kk-input=${e=>{z({nome:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${n.ministerio.contato}
          placeholder=${n.ministerio.contatoPlaceholder}
          .value=${t.contato}
          @kk-input=${e=>{z({contato:e.target.value})}}
        ></kk-input>
        <kk-input
          label=${n.ministerio.endereco}
          .value=${t.endereco}
          @kk-input=${e=>{z({endereco:e.target.value})}}
        ></kk-input>
      </div>

      <kk-input
        label=${n.ministerio.publicacaoAtual}
        placeholder=${n.ministerio.publicacaoPlaceholder}
        .value=${t.publicacao}
        @kk-input=${e=>{z({publicacao:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${n.ministerio.diaSemana}
          .value=${t.dia}
          @kk-change=${e=>{z({dia:e.target.value})}}
        >
          <kk-option value="">${n.ministerio.escolhaDia}</kk-option>
          ${h.map(t=>e`<kk-option value=${t}>${Oe(t)}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${n.ministerio.horario}
          .value=${t.horario}
          @kk-change=${e=>{z({horario:e.target.value})}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${n.ministerio.notas}
        .value=${t.notas}
        @kk-input=${e=>{z({notas:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Qe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function et(e){await u({titulo:n.ministerio.excluirEstudo,texto:n.ministerio.excluirEstudoTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await pe(e.id,O),c(n.ministerio.estudoExcluido),await V())}function tt(i){let a=Ne(O,i),o=a.tom===`frio`||a.tom===`nunca`,c=x(O,i.id)[0],l=ce(i);return e`
    <div class="registro" data-status=${o?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${l} 15%, transparent);color:color-mix(in oklab, ${l} 55%, var(--kk-color-neutral-1000))`}
      >
        ${ve(i)}
      </span>

      <button class="registro__alvo" @click=${()=>r(`ministerio/estudos/${i.id??``}`)}>
        <span class="registro__topo">
          <span class="registro__titulo">
            ${i.nome===``?n.ministerio.semNome:i.nome}
          </span>
          ${o?e`
                <kk-badge variant="danger" pill>
                  <kk-icon name="temperature-snow"></kk-icon>${n.ministerio.seloEsfriando}
                </kk-badge>
              `:t}
        </span>

        ${i.publicacao_atual===``?t:e`
              <span class="registro__resumo">
                <kk-icon name="book"></kk-icon>${i.publicacao_atual}
              </span>
            `}
        ${i.dia_semana===``?t:e`
              <span class="registro__resumo">
                <kk-icon name="calendar-week"></kk-icon>
                ${Oe(i.dia_semana)} · ${g(i.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${a.tom}>
          <kk-icon name="history"></kk-icon>${n.ministerio.ultimoEstudo} ${a.texto}
        </span>

        ${c===void 0?t:e`
              <span class="registro__parou">
                <kk-icon name="bookmark"></kk-icon>${n.ministerio.parouEm} ${c.onde_parou}
              </span>
            `}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${n.ministerio.editarEstudo}
          @click=${()=>{I={id:i.id??0,nome:i.nome,contato:i.contato,endereco:i.endereco,publicacao:i.publicacao_atual,dia:i.dia_semana,horario:g(i.horario_minutos),notas:i.notas},s()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${n.ministerio.compartilhar}
          @click=${()=>void p(n.ministerio.estudoDe(i.nome),je(i,O))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.ministerio.excluirEstudo}
          @click=${()=>void et(i)}
        ></kk-icon-button>
      </div>
    </div>
  `}function nt(){if(I!==null)return $e(I);let t=fe(D,O,P);return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.ministerio.buscarEstudos}
        .value=${P}
        @kk-input=${e=>{P=e.target.value,s()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${D.length===0?n.ministerio.semEstudos:n.ministerio.semEstudosFiltro}</p>
          </div>
        `:e`<div class="registros">${t.map(e=>tt(e))}</div>`}
  `}function Q(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:D.find(e=>e.id===t)}async function rt(){let e=L;if(e!==null){if(e.ondeParou.trim()===``){B({erro:!0}),s();return}await Ae({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():a(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),L=null,c(n.ministerio.registroSalvo),await V()}}function it(t){return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.ministerio.editarRegistro:n.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${n.ministerio.data}
        .value=${t.data}
        @kk-change=${e=>{B({data:e.target.value})}}
      ></kk-input>

      <kk-input
        label=${n.ministerio.ondeParou}
        placeholder=${n.ministerio.ondeParouPlaceholder}
        .value=${t.ondeParou}
        help-text=${t.erro?n.ministerio.informeOndeParou:``}
        @kk-input=${e=>{B({ondeParou:e.target.value,erro:!1})}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${n.ministerio.comentario}
        placeholder=${n.ministerio.comentarioPlaceholder}
        .value=${t.comentario}
        @kk-input=${e=>{B({comentario:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void rt()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function at(e){await u({titulo:n.ministerio.excluirRegistro,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await me(e.id),c(n.ministerio.registroExcluido),await V())}function ot(r){if(L!==null)return it(L);let a=x(O,r.id);return a.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="history"></kk-icon>
        <p>${n.ministerio.semRegistros}</p>
      </div>
    `:e`
    <div class="registros">
      ${a.map(r=>e`
          <div class="sessao">
            <span class="sessao__texto">
              <span class="sessao__data">${o(r.registrado_em)}</span>
              <span class="sessao__parou">
                <kk-icon name="bookmark"></kk-icon>${r.onde_parou}
              </span>
              ${r.comentario===``?t:e`<span class="sessao__comentario">${r.comentario}</span>`}
            </span>

            <div class="registro__acoes">
              <kk-icon-button
                name="pencil"
                label=${n.acoes.editar}
                @click=${()=>{L={id:r.id??0,estudoId:r.estudo_id,data:r.registrado_em===0?i():i(r.registrado_em),ondeParou:r.onde_parou,comentario:r.comentario,erro:!1},s()}}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${n.ministerio.excluirRegistro}
                @click=${()=>void at(r)}
              ></kk-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var st={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let t=$(e);if(t===`relatorios`)return n.ministerio.atalhoRelatorios;if(t===`estudos`)return n.ministerio.atalhoEstudos;if(t===`linha`)return Q(e)?.nome??n.ministerio.linhaDoTempo},acoes(t){let r=$(t);if(r===`relatorios`&&F===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.ministerio.novoRelatorio}
          @click=${()=>{let e=new Date;F=X(e.getMonth()+1,e.getFullYear()),s()}}
        ></kk-icon-button>
      `;if(r===`estudos`&&I===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.ministerio.novoEstudo}
          @click=${()=>{I=Ze(),s()}}
        ></kk-icon-button>
      `;if(r===`linha`&&L===null){let r=Q(t);return r?.id===void 0?void 0:e`
        <kk-icon-button
          name="plus"
          label=${n.ministerio.registrarEstudo}
          @click=${()=>{L={id:0,estudoId:r.id??0,data:i(),ondeParou:``,comentario:``,erro:!1},s()}}
        ></kk-icon-button>
      `}},conteudo(t){let n=Fe.espera();if(n!==null)return n;let i=$(t);if(i===`relatorios`)return Xe();if(i===`estudos`)return nt();if(i===`linha`){let n=Q(t);return n===void 0?(r(`ministerio/estudos`),e`<div class="carregando"><kk-spinner></kk-spinner></div>`):ot(n)}return ze()}};export{st as telaMinisterio};