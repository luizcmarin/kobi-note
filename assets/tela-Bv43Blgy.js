import{S as e,_t as t,at as n,b as r,bt as i,ct as a,ft as o,h as s,m as c,mt as l,tt as u,xt as d,y as f}from"./index-BNLfwB87.js";import{t as p}from"./foco-CnUS-Btn.js";import{t as m}from"./compartilhar-BkknPwlS.js";import{DESTINATARIO_VAZIO as h,DIAS_DA_SEMANA as ee,MESES as g,PUBLICADOR_VAZIO as te,TIPOS_PUBLICADOR as _,ajustado as ne,alternarEnviado as re,anoDeServico as ie,carregar as ae,comoHorario as v,contadorTemAtividade as y,contadorZerado as oe,contagemDoAno as se,corDoEstudo as ce,deHorario as le,enderecoDoEnvio as ue,esfriando as de,estudosVisiveis as fe,excluirEstudo as pe,excluirRegistro as me,excluirRelatorio as he,fechamentoDoMes as ge,horasDoContador as _e,iniciais as ve,lembreteDoRelatorio as ye,mesEAno as b,mesSeguinte as be,mesesDoAnoDeServico as xe,numeroDoWhatsApp as Se,observacoesDoContador as Ce,ordenarRelatorios as we,partesDasHoras as Te,registrosDoEstudo as x,relataHoras as Ee,relatoriosEmAtraso as De,resumosPorAnoDeServico as S,salvarContador as C,salvarEstudo as Oe,salvarRegistro as ke,salvarRelatorio as w,textoDoEstudo as Ae,textoDoRelatorio as je,ultimoRelativo as Me,ultimoRelatorio as T}from"./dados-DLtEPQPo.js";import Ne from"./martelada-Cm7NO4R0.js";var E=[],D=[],O=[],k=null,A=[],j=te,M=h,N=null,P=``,F=null,I=null,L=null;function R(e){F!==null&&(F={...F,...e})}function z(e){I!==null&&(I={...I,...e})}function B(e){L!==null&&(L={...L,...e})}var V=!1,H=!1,U=null;async function W(){let e=await ae();E=e.relatorios,D=e.estudos,O=e.registros,k=e.contador,A=e.contadores,j=e.publicador,M=e.secretario,o()}function Pe(){V||H||U!==null||(H=!0,(async()=>{try{await W(),V=!0}catch(e){console.error(`ministerio: a carga falhou.`,e),U=r(e)}finally{H=!1,o()}})())}function Fe(){U=null,Pe(),o()}function G(e,t,n,r){return d`
    <button class="atalho" @click=${()=>l(r)}>
      <kk-icon class="atalho__icone" name=${e}></kk-icon>
      <span class="atalho__rotulo">${t}</span>
      <span class="atalho__resumo">${n}</span>
    </button>
  `}function K(e,n,r,a,o,s){return d`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${n}></kk-icon>${r}</span>
      <kk-icon-button
        name="minus"
        label=${t.ministerio.diminuir(r)}
        @click=${()=>void q(e,-a)}
      ></kk-icon-button>
      <span class="tally__valor">${o}</span>
      <kk-icon-button
        name="plus"
        label=${t.ministerio.aumentar(r)}
        @click=${()=>void q(e,a)}
      ></kk-icon-button>
      ${s??i}
    </div>
  `}async function q(e,t){k!==null&&(k=await C(ne(k,e,t)),o())}async function Ie(){k!==null&&await e({titulo:t.ministerio.zerar,texto:t.ministerio.zerarTexto,rotuloConfirmar:t.ministerio.zerar,variante:`warning`})&&k!==null&&(k=await C(oe(k)),o())}function J(e,t){return k!==null&&k.mes===e&&k.ano===t?k:A.find(n=>n.mes===e&&n.ano===t)}async function Le(e){let t=J(e.mes,e.ano);if(t===void 0)return;let n=be(e.mes,e.ano),r=ge(t,e.tipo_publicador,J(n.mes,n.ano));for(let e of r){let t=await C(e);k!==null&&t.mes===k.mes&&t.ano===k.ano&&(k=t)}}function Re(e){let n=y(e);return d`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${t.ministerio.contadores}
          <small>${b(e.mes,e.ano)}</small>
        </span>
        ${n?d`
              <kk-icon-button
                name="rotate-clockwise"
                label=${t.ministerio.zerar}
                @click=${()=>void Ie()}
              ></kk-icon-button>
            `:i}
      </div>

      ${K(`minutos`,`clock`,t.ministerio.tempo,15,v(e.minutos),d`
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
  `}function ze(e){F=X(e.mes,e.ano),l(`ministerio/relatorios`)}function Be(e){if(e.id>0)return e;let t=J(e.mes,e.ano),n=t===void 0?``:Ce(t,e.tipo);return{...e,horas:t===void 0?0:_e(t.minutos,e.tipo),estudos:t?.estudos??0,observacoes:e.observacoes===e.geradas?n:e.observacoes,geradas:n}}function Y(e){if(F===null)return;let t=F.observacoes;F=Be({...F,...e}),F.observacoes!==t&&o()}function Ve(){let e=ye(E);if(e===null)return;let t=t=>t.mes===e.mes&&t.ano===e.ano,n=E.find(t);if(n!==void 0){Ye(n);return}let r=A.find(t);if(r!==void 0&&y(r)){ze(r);return}F=X(e.mes,e.ano),l(`ministerio/relatorios`)}function He(){let e=de(D,O),n=ye(E),r=De(E),a=T(E);return d`
    ${r.length===0?i:d`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="calendar-x"></kk-icon>
            ${t.ministerio.atrasados(r.length,r.map(e=>b(e.mes,e.ano)).join(`, `))}
            <a href="#/ministerio/relatorios">${t.ministerio.verRelatorios}</a>
          </kk-alert>
        `}
    ${e.length===0?i:d`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="temperature-snow"></kk-icon>
            ${t.ministerio.esfriando(e.length,15)}
            <a href="#/ministerio/estudos">${t.ministerio.verEstudos}</a>
          </kk-alert>
        `}

    ${n===null?i:d`
          <kk-alert variant="warning" open class="lembrete">
            ${d`<span slot="icon" class="lembrete__mascote">${s(Ne)}</span>`}
            ${t.ministerio.lembrete(b(n.mes,n.ano),n.existe)}
            <kk-button size="small" variant="warning" @click=${Ve}>
              ${n.existe?t.ministerio.enviar:t.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${G(`file-text`,t.ministerio.atalhoRelatorios,t.ministerio.atalhoRelatoriosSub(E.length),`ministerio/relatorios`)}
      ${G(`book`,t.ministerio.atalhoEstudos,t.ministerio.atalhoEstudosSub(D.length),`ministerio/estudos`)}
      ${G(`trending-up`,t.ministerio.atalhoServico,t.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${k===null?i:Re(k)}

    ${a===null?i:d`
          <div class="ultimo">
            <span class="ultimo__rotulo">${t.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${b(a.mes,a.ano)}
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
  `}function Ue(e,n,r,a){let o=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=n.map(e=>e.relatorio===null?null:Math.max(0,Number(r(e.relatorio))||0)),c=Math.max(0,...s.map(e=>e??0)),l=c>0?s.indexOf(c):-1;return d`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${e}</figcaption>
      <div class="anual__colunas">
        ${n.map((e,n)=>{let r=s[n]??null,u=b(e.mes,e.ano),f=new Date(e.ano,e.mes-1,1)>=o,p=r===null?f?`aberto`:`vazio`:`relatado`,m=r===null?f?t.ministerio.mesEmAberto(u):t.ministerio.mesSemRelatorio(u):t.ministerio.valorNoMes(u,a(r)),h=r===null||r<=0?0:Math.max(4,r/c*100);return d`
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
                  ${r===null?i:d`<span class="anual__valor">${a(r)}</span>`}
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
        ${e.map(e=>{let n=b(e.mes,e.ano),r=e.relatorio?.participacao===1,a=e.relatorio===null?t.ministerio.mesSemRelatorio(n):t.ministerio.participacaoNoMes(n,r);return d`
            <div
              class="anual__sinal"
              role="img"
              aria-label=${a}
              title=${a}
              data-estado=${e.relatorio===null?`vazio`:r?`sim`:`nao`}
            >
              ${e.relatorio===null?i:d`<kk-icon name=${r?`circle-check`:`circle-x`}></kk-icon>`}
              <span class="anual__mes" aria-hidden="true">${(g[e.mes]??``).slice(0,3)}</span>
            </div>
          `})}
      </div>
    </figure>
  `}function Ge(){let e=S(E),n=e.map(e=>e.anoServico),r=N!==null&&n.includes(N)?N:n[0],a=e.find(e=>e.anoServico===r);if(r===void 0||a===void 0)return i;let s=n.indexOf(r),c=n[s+1],l=n[s-1],u=xe(E,r),f=u.some(e=>(Number(e.relatorio?.horas)||0)>0),p=e=>{e!==void 0&&(N=e,o())};return d`
    <section class="anual">
      <header class="anual__topo">
        <kk-icon-button
          name="chevron-left"
          label=${t.ministerio.anoAnterior}
          ?disabled=${c===void 0}
          @click=${()=>p(c)}
        ></kk-icon-button>
        <h2 class="anual__titulo">
          ${t.ministerio.anoDeServico(r)}
          <small>${t.ministerio.periodoDoAno(r)}</small>
        </h2>
        <kk-icon-button
          name="chevron-right"
          label=${t.ministerio.anoSeguinte}
          ?disabled=${l===void 0}
          @click=${()=>p(l)}
        ></kk-icon-button>
      </header>
      <p class="anual__resumo">${t.ministerio.resumoDoAno(a)}</p>

      ${Ue(t.ministerio.graficoEstudos,u,e=>e.estudos,e=>String(e))}
      ${f?Ue(t.ministerio.graficoHoras,u,e=>e.horas,e=>t.ministerio.emHoras(e)):i}
      ${We(u)}
      ${Ke(r)}
    </section>
  `}function Ke(e){let n=k===null?A:[...A.filter(e=>e.mes!==k?.mes||e.ano!==k?.ano),k],r=se(n,e);if(r.meses===0)return i;let a=[[t.ministerio.tempo,v(r.minutos)],[t.ministerio.revisitas,String(r.revisitas)],[t.ministerio.publicacoes,String(r.publicacoes)],[t.ministerio.videos,String(r.videos)]];return d`
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
  `}function X(e,t){let n=J(e,t);return Be({id:0,mes:e,ano:t,horas:0,estudos:0,participacao:n===void 0||y(n)?1:0,tipo:T(E)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:``,geradas:``,enviado:0,dataEnvio:0})}async function qe(){let e=F;e!==null&&(await w({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)||0),estudos:Math.max(0,Number(e.estudos)||0),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)||0),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),F=null,c(t.ministerio.relatorioSalvo),await W())}function Je(e){return d`
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
          ${g.map((e,t)=>t===0?i:d`<kk-option value=${t}>${e}</kk-option>`)}
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
        ${Object.entries(_).map(([e,t])=>d`<kk-option value=${e}>${t}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${e.participacao===1}
        @kk-change=${e=>{R({participacao:+!!e.target.checked})}}
      >
        ${t.ministerio.participacao}
      </kk-switch>

      <kk-textarea
        rows="6"
        label=${t.ministerio.observacoes}
        .value=${e.observacoes}
        @kk-input=${e=>{R({observacoes:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void qe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,o()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Z(){return Se(M.telefone)!==``}async function Ye(n){let r=t.ministerio.relatorioDe(b(n.mes,n.ano)),i=je(n,j),a;Z()?(window.open(ue(M,i),`_blank`,`noopener`),a=await e({titulo:t.ministerio.confirmarEnvioTitulo,texto:t.ministerio.confirmarEnvio(M.nome.trim()),rotuloConfirmar:t.ministerio.foiEnviado})):a=await m(r,i,t.ministerio.copiadoParaEnviar)===`compartilhado`,a&&n.relatorio_enviado!==1&&(await w({...n,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await Le(n),c(t.ministerio.marcadoEnviado),await W())}async function Xe(n){await e({titulo:t.ministerio.excluirRelatorio,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&n.id!==void 0&&(await he(n.id),c(t.ministerio.relatorioExcluido),await W())}function Ze(e){let n=e.relatorio_enviado===1,r=_[e.tipo_publicador]??e.tipo_publicador;return d`
    <div class="registro" data-status=${n?`enviado`:`pendente`}>
      <span class="registro__avatar">${(g[e.mes]??``).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{F={id:e.id??0,mes:e.mes,ano:e.ano,horas:e.horas,estudos:e.estudos,participacao:e.participacao,tipo:e.tipo_publicador,metaHoras:e.meta_horas,observacoes:e.notas_publicacoes,geradas:``,enviado:e.relatorio_enviado,dataEnvio:e.data_envio_relatorio},o()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${b(e.mes,e.ano)}</span>
          <kk-badge variant=${n?`success`:`warning`} pill>
            ${n?t.ministerio.enviado:t.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${t.ministerio.resumoRelatorio(r,e.participacao===1,e.estudos,Ee(e.tipo_publicador)?t.ministerio.sufixoHoras(...Te(e.horas)):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name=${Z()?`brand-whatsapp`:`share`}
          label=${Z()?t.ministerio.enviarAo(M.nome.trim()):t.ministerio.compartilhar}
          @click=${()=>void Ye(e)}
        ></kk-icon-button>
        <kk-icon-button
          name=${n?`arrow-back-up`:`circle-check`}
          label=${n?t.ministerio.marcarPendente:t.ministerio.marcarEnviado}
          @click=${async()=>{await re(e),n||await Le(e),await W()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${t.ministerio.excluirRelatorio}
          @click=${()=>void Xe(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Qe(){return d`
    ${j.nome.trim()===``?d`
          <kk-alert variant="warning" open>
            <kk-icon slot="icon" name="user"></kk-icon>
            ${t.ministerio.semPublicador}
            <a href="#/perfil">${t.ministerio.irAoPerfil}</a>
          </kk-alert>
        `:i}
    ${Z()?i:d`
          <kk-alert variant="neutral" open>
            <kk-icon slot="icon" name="brand-whatsapp"></kk-icon>
            ${t.ministerio.semSecretario}
            <a href="#/perfil">${t.ministerio.irAoPerfil}</a>
          </kk-alert>
        `}
  `}function $e(){if(F!==null)return Je(F);let e=we(E);if(e.length===0)return d`
      ${Qe()}
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${t.ministerio.semRelatorios}</p>
      </div>
    `;let n=S(e);return d`
    ${Qe()}
    ${n.map(n=>d`
        <section class="ano-servico">
          <header class="ano-servico__topo">
            <h3 class="ano-servico__titulo">${t.ministerio.anoDeServico(n.anoServico)}</h3>
            <p class="ano-servico__resumo">${t.ministerio.resumoDoAno(n)}</p>
          </header>
          <div class="registros">
            ${e.filter(e=>ie(e.mes,e.ano)===n.anoServico).map(e=>Ze(e))}
          </div>
        </section>
      `)}
  `}function et(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function tt(){let e=I;if(e!==null){if(e.nome.trim()===``){c(t.ministerio.informeNome,`warning`);return}await Oe({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:le(e.horario),notas:e.notas}),I=null,c(t.ministerio.estudoSalvo),await W()}}function nt(e){return d`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?t.ministerio.editarEstudo:t.ministerio.novoEstudo}
      </h2>

      <kk-input
        ${p}
        label=${t.ministerio.nome}
        .value=${e.nome}
        @kk-input=${e=>{z({nome:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${t.ministerio.contato}
          placeholder=${t.ministerio.contatoPlaceholder}
          .value=${e.contato}
          @kk-input=${e=>{z({contato:e.target.value})}}
        ></kk-input>
        <kk-input
          label=${t.ministerio.endereco}
          .value=${e.endereco}
          @kk-input=${e=>{z({endereco:e.target.value})}}
        ></kk-input>
      </div>

      <kk-input
        label=${t.ministerio.publicacaoAtual}
        placeholder=${t.ministerio.publicacaoPlaceholder}
        .value=${e.publicacao}
        @kk-input=${e=>{z({publicacao:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${t.ministerio.diaSemana}
          .value=${e.dia}
          @kk-change=${e=>{z({dia:e.target.value})}}
        >
          <kk-option value="">${t.ministerio.escolhaDia}</kk-option>
          ${ee.map(e=>d`<kk-option value=${e}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${t.ministerio.horario}
          .value=${e.horario}
          @kk-change=${e=>{z({horario:e.target.value})}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${t.ministerio.notas}
        .value=${e.notas}
        @kk-input=${e=>{z({notas:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void tt()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,o()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function rt(n){await e({titulo:t.ministerio.excluirEstudo,texto:t.ministerio.excluirEstudoTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&n.id!==void 0&&(await pe(n.id,O),c(t.ministerio.estudoExcluido),await W())}function it(e){let n=Me(O,e),r=n.tom===`frio`||n.tom===`nunca`,a=x(O,e.id)[0],s=ce(e);return d`
    <div class="registro" data-status=${r?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${s} 15%, transparent);color:${s}`}
      >
        ${ve(e)}
      </span>

      <button class="registro__alvo" @click=${()=>l(`ministerio/estudos/${e.id??``}`)}>
        <span class="registro__topo">
          <span class="registro__titulo">
            ${e.nome===``?t.ministerio.semNome:e.nome}
          </span>
          ${r?d`
                <kk-badge variant="danger" pill>
                  <kk-icon name="temperature-snow"></kk-icon>${t.ministerio.seloEsfriando}
                </kk-badge>
              `:i}
        </span>

        ${e.publicacao_atual===``?i:d`
              <span class="registro__resumo">
                <kk-icon name="book"></kk-icon>${e.publicacao_atual}
              </span>
            `}
        ${e.dia_semana===``?i:d`
              <span class="registro__resumo">
                <kk-icon name="calendar-week"></kk-icon>
                ${e.dia_semana} · ${v(e.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${n.tom}>
          <kk-icon name="history"></kk-icon>${t.ministerio.ultimoEstudo} ${n.texto}
        </span>

        ${a===void 0?i:d`
              <span class="registro__parou">
                <kk-icon name="bookmark"></kk-icon>${t.ministerio.parouEm} ${a.onde_parou}
              </span>
            `}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${t.ministerio.editarEstudo}
          @click=${()=>{I={id:e.id??0,nome:e.nome,contato:e.contato,endereco:e.endereco,publicacao:e.publicacao_atual,dia:e.dia_semana,horario:v(e.horario_minutos),notas:e.notas},o()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${t.ministerio.compartilhar}
          @click=${()=>void m(t.ministerio.estudoDe(e.nome),Ae(e,O))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${t.ministerio.excluirEstudo}
          @click=${()=>void rt(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function at(){if(I!==null)return nt(I);let e=fe(D,O,P);return d`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${t.ministerio.buscarEstudos}
        .value=${P}
        @kk-input=${e=>{P=e.target.value,o()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?d`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${D.length===0?t.ministerio.semEstudos:t.ministerio.semEstudosFiltro}</p>
          </div>
        `:d`<div class="registros">${e.map(e=>it(e))}</div>`}
  `}function Q(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:D.find(e=>e.id===t)}async function ot(){let e=L;if(e!==null){if(e.ondeParou.trim()===``){B({erro:!0}),o();return}await ke({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():a(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),L=null,c(t.ministerio.registroSalvo),await W()}}function st(e){return d`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?t.ministerio.editarRegistro:t.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${t.ministerio.data}
        .value=${e.data}
        @kk-change=${e=>{B({data:e.target.value})}}
      ></kk-input>

      <kk-input
        label=${t.ministerio.ondeParou}
        placeholder=${t.ministerio.ondeParouPlaceholder}
        .value=${e.ondeParou}
        help-text=${e.erro?t.ministerio.informeOndeParou:``}
        @kk-input=${e=>{B({ondeParou:e.target.value,erro:!1})}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${t.ministerio.comentario}
        placeholder=${t.ministerio.comentarioPlaceholder}
        .value=${e.comentario}
        @kk-input=${e=>{B({comentario:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void ot()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,o()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function ct(n){await e({titulo:t.ministerio.excluirRegistro,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&n.id!==void 0&&(await me(n.id),c(t.ministerio.registroExcluido),await W())}function lt(e){if(L!==null)return st(L);let r=x(O,e.id);return r.length===0?d`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="history"></kk-icon>
        <p>${t.ministerio.semRegistros}</p>
      </div>
    `:d`
    <div class="registros">
      ${r.map(e=>d`
          <div class="sessao">
            <span class="sessao__texto">
              <span class="sessao__data">${u(e.registrado_em)}</span>
              <span class="sessao__parou">
                <kk-icon name="bookmark"></kk-icon>${e.onde_parou}
              </span>
              ${e.comentario===``?i:d`<span class="sessao__comentario">${e.comentario}</span>`}
            </span>

            <div class="registro__acoes">
              <kk-icon-button
                name="pencil"
                label=${t.acoes.editar}
                @click=${()=>{L={id:e.id??0,estudoId:e.estudo_id,data:e.registrado_em===0?n():n(e.registrado_em),ondeParou:e.onde_parou,comentario:e.comentario,erro:!1},o()}}
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
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var ut={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let n=$(e);if(n===`relatorios`)return t.ministerio.atalhoRelatorios;if(n===`estudos`)return t.ministerio.atalhoEstudos;if(n===`linha`)return Q(e)?.nome??t.ministerio.linhaDoTempo},acoes(e){let r=$(e);if(r===`relatorios`&&F===null)return d`
        <kk-icon-button
          name="plus"
          label=${t.ministerio.novoRelatorio}
          @click=${()=>{let e=new Date;F=X(e.getMonth()+1,e.getFullYear()),o()}}
        ></kk-icon-button>
      `;if(r===`estudos`&&I===null)return d`
        <kk-icon-button
          name="plus"
          label=${t.ministerio.novoEstudo}
          @click=${()=>{I=et(),o()}}
        ></kk-icon-button>
      `;if(r===`linha`&&L===null){let r=Q(e);return r?.id===void 0?void 0:d`
        <kk-icon-button
          name="plus"
          label=${t.ministerio.registrarEstudo}
          @click=${()=>{L={id:0,estudoId:r.id??0,data:n(),ondeParou:``,comentario:``,erro:!1},o()}}
        ></kk-icon-button>
      `}},conteudo(e){if(Pe(),U!==null)return f(U,Fe);if(!V)return d`<div class="carregando"><kk-spinner></kk-spinner></div>`;let t=$(e);if(t===`relatorios`)return $e();if(t===`estudos`)return at();if(t===`linha`){let t=Q(e);return t===void 0?(l(`ministerio/estudos`),d`<div class="carregando"><kk-spinner></kk-spinner></div>`):lt(t)}return He()}};export{ut as telaMinisterio};