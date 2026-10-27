import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{r,s as i}from"./data-DbOIIZMP.js";import{o as a}from"./formato-BoZO7uRM.js";import{r as o}from"./rotas-CR8kk0YZ.js";import{A as s,C as c,T as l,ct as u}from"./index-BdGprTna.js";import{t as d}from"./carga-CWKYt6SK.js";import{t as f}from"./foco-XyxwbeU0.js";import{t as p}from"./compartilhar-CxYAJEvF.js";import{t as m}from"./martelada-vevrO_sI.js";import{v as h}from"./dados-D9CHnHYn.js";import{A as ee,B as g,C as te,D as _,E as ne,F as re,G as ie,H as v,I as y,J as ae,K as b,M as x,N as oe,P as se,Q as S,R as ce,S as le,T as ue,U as C,V as w,W as de,Y as fe,Z as pe,_ as me,a as he,b as ge,c as _e,d as T,g as ve,h as ye,i as be,j as xe,k as E,l as Se,m as Ce,n as we,o as Te,p as Ee,r as De,s as Oe,u as D,v as ke,w as Ae,x as je,z as Me}from"./dados-frpey0BV.js";var O=[],k=[],A=[],j=null,M=[],N=be,P=we,F=null,I=``,L=null,R=null,z=null;function B(e){L!==null&&(L={...L,...e})}function V(e){R!==null&&(R={...R,...e})}function H(e){z!==null&&(z={...z,...e})}async function U(){let e=await Se();O=e.relatorios,k=e.estudos,A=e.registros,j=e.contador,M=e.contadores,N=e.publicador,P=e.secretario,u()}var Ne=new d(`ministerio`,async()=>{await U()});function W(t,n,r,i){return e`
    <button class="atalho" @click=${()=>o(i)}>
      <kk-icon class="atalho__icone" name=${t}></kk-icon>
      <span class="atalho__rotulo">${n}</span>
      <span class="atalho__resumo">${r}</span>
    </button>
  `}function G(r,i,a,o,s,c){return e`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${i}></kk-icon>${a}</span>
      <kk-icon-button
        name="minus"
        label=${n.ministerio.diminuir(a)}
        @click=${()=>void K(r,-o)}
      ></kk-icon-button>
      <span class="tally__valor">${s}</span>
      <kk-icon-button
        name="plus"
        label=${n.ministerio.aumentar(a)}
        @click=${()=>void K(r,o)}
      ></kk-icon-button>
      ${c??t}
    </div>
  `}async function K(e,t){j!==null&&(j=await C(Te(j,e,t)),u())}async function Pe(){j!==null&&await s({titulo:n.ministerio.zerar,texto:n.ministerio.zerarTexto,rotuloConfirmar:n.ministerio.zerar,variante:`warning`})&&j!==null&&(j=await C(Ee(j)),u())}function q(e,t){return j!==null&&j.mes===e&&j.ano===t?j:M.find(n=>n.mes===e&&n.ano===t)}async function J(e){let t=q(e.mes,e.ano);if(t===void 0)return;let n=ee(e.mes,e.ano),r=Ae(t,e.tipo_publicador,q(n.mes,n.ano));for(let e of r){let t=await C(e);j!==null&&t.mes===j.mes&&t.ano===j.ano&&(j=t)}}function Fe(r){let i=T(r);return e`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${n.ministerio.contadores}
          <small>${E(r.mes,r.ano)}</small>
        </span>
        ${i?e`
              <kk-icon-button
                name="rotate-clockwise"
                label=${n.ministerio.zerar}
                @click=${()=>void Pe()}
              ></kk-icon-button>
            `:t}
      </div>

      ${G(`minutos`,`clock`,n.ministerio.tempo,15,D(r.minutos),e`
          <kk-button size="small" outline @click=${()=>void K(`minutos`,60)}>
            ${n.ministerio.maisUmaHora}
          </kk-button>
        `)}
      ${G(`estudos`,`book`,n.ministerio.estudos,1,String(r.estudos))}
      ${G(`revisitas`,`rotate`,n.ministerio.revisitas,1,String(r.revisitas))}
      ${G(`publicacoes`,`books`,n.ministerio.publicacoes,1,String(r.publicacoes))}
      ${G(`videos`,`player-play`,n.ministerio.videos,1,String(r.videos))}

      <kk-button variant="primary" class="tally__gerar" @click=${()=>Ie(r)}>
        <kk-icon slot="prefix" name="file-text"></kk-icon>${n.ministerio.gerarRelatorio}
      </kk-button>
    </div>
  `}function Ie(e){L=X(e.mes,e.ano),o(`ministerio/relatorios`)}function Le(e){if(e.id>0)return e;let t=q(e.mes,e.ano),n=t===void 0?``:oe(t,e.tipo);return{...e,horas:t===void 0?0:ue(t.minutos,e.tipo),estudos:t?.estudos??0,observacoes:e.observacoes===e.geradas?n:e.observacoes,geradas:n}}function Y(e){if(L===null)return;let t=L.observacoes;L=Le({...L,...e}),L.observacoes!==t&&u()}function Re(){let e=_(O);if(e===null)return;let t=t=>t.mes===e.mes&&t.ano===e.ano,n=O.find(t);if(n!==void 0){Ke(n);return}let r=M.find(t);r!==void 0&&T(r)?Ie(r):(L=X(e.mes,e.ano),o(`ministerio/relatorios`))}function ze(){let r=ke(k,A),i=_(O),a=Me(O),o=S(O);return e`
    ${a.length===0?t:e`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="calendar-x"></kk-icon>
            ${n.ministerio.atrasados(a.length,a.map(e=>E(e.mes,e.ano)).join(`, `))}
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
            ${e`<span slot="icon" class="lembrete__mascote">${l(m)}</span>`}
            ${n.ministerio.lembrete(E(i.mes,i.ano),i.existe)}
            <kk-button size="small" variant="warning" @click=${Re}>
              ${i.existe?n.ministerio.enviar:n.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${W(`file-text`,n.ministerio.atalhoRelatorios,n.ministerio.atalhoRelatoriosSub(O.length),`ministerio/relatorios`)}
      ${W(`book`,n.ministerio.atalhoEstudos,n.ministerio.atalhoEstudosSub(k.length),`ministerio/estudos`)}
      ${W(`trending-up`,n.ministerio.atalhoServico,n.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${j===null?t:Fe(j)}

    ${o===null?t:e`
          <div class="ultimo">
            <span class="ultimo__rotulo">${n.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${E(o.mes,o.ano)}
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
        ${i.map((r,i)=>{let a=c[i]??null,d=E(r.mes,r.ano),f=new Date(r.ano,r.mes-1,1)>=s,p=a===null?f?`aberto`:`vazio`:`relatado`,m=a===null?f?n.ministerio.mesEmAberto(d):n.ministerio.mesSemRelatorio(d):n.ministerio.valorNoMes(d,o(a)),h=a===null||a<=0?0:Math.max(4,a/l*100);return e`
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
              <span class="anual__mes" aria-hidden="true">${x(r.mes).slice(0,3)}</span>
            </div>
          `})}
      </div>
    </figure>
  `}function Ve(r){return e`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${n.ministerio.graficoParticipacao}</figcaption>
      <div class="anual__colunas anual__colunas--faixa">
        ${r.map(r=>{let i=E(r.mes,r.ano),a=r.relatorio?.participacao===1,o=r.relatorio===null?n.ministerio.mesSemRelatorio(i):n.ministerio.participacaoNoMes(i,a);return e`
            <div
              class="anual__sinal"
              role="img"
              aria-label=${o}
              title=${o}
              data-estado=${r.relatorio===null?`vazio`:a?`sim`:`nao`}
            >
              ${r.relatorio===null?t:e`<kk-icon name=${a?`circle-check`:`circle-x`}></kk-icon>`}
              <span class="anual__mes" aria-hidden="true">${x(r.mes).slice(0,3)}</span>
            </div>
          `})}
      </div>
    </figure>
  `}function He(){let r=g(O),i=r.map(e=>e.anoServico),a=F!==null&&i.includes(F)?F:i[0],o=r.find(e=>e.anoServico===a);if(a===void 0||o===void 0)return t;let s=i.indexOf(a),c=i[s+1],l=i[s-1],d=xe(O,a),f=d.some(e=>(Number(e.relatorio?.horas)||0)>0),p=e=>{e!==void 0&&(F=e,u())};return e`
    <section class="anual">
      <header class="anual__topo">
        <kk-icon-button
          name="chevron-left"
          label=${n.ministerio.anoAnterior}
          ?disabled=${c===void 0}
          @click=${()=>p(c)}
        ></kk-icon-button>
        <h2 class="anual__titulo">
          ${n.ministerio.anoDeServico(a)}
          <small>${n.ministerio.periodoDoAno(a)}</small>
        </h2>
        <kk-icon-button
          name="chevron-right"
          label=${n.ministerio.anoSeguinte}
          ?disabled=${l===void 0}
          @click=${()=>p(l)}
        ></kk-icon-button>
      </header>
      <p class="anual__resumo">${n.ministerio.resumoDoAno(o)}</p>

      ${Be(n.ministerio.graficoEstudos,d,e=>e.estudos,e=>String(e))}
      ${f?Be(n.ministerio.graficoHoras,d,e=>e.horas,e=>n.ministerio.emHoras(e)):t}
      ${Ve(d)}
      ${Ue(a)}
    </section>
  `}function Ue(r){let i=j===null?M:[...M.filter(e=>e.mes!==j?.mes||e.ano!==j?.ano),j],a=Ce(i,r);if(a.meses===0)return t;let o=[[n.ministerio.tempo,D(a.minutos)],[n.ministerio.revisitas,String(a.revisitas)],[n.ministerio.publicacoes,String(a.publicacoes)],[n.ministerio.videos,String(a.videos)]];return e`
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
  `}function X(e,t){let n=q(e,t);return Le({id:0,mes:e,ano:t,horas:0,estudos:0,participacao:n===void 0||T(n)?1:0,tipo:S(O)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:``,geradas:``,enviado:0,dataEnvio:0})}async function We(){let e=L;e!==null&&(await b({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)||0),estudos:Math.max(0,Number(e.estudos)||0),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)||0),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),L=null,c(n.ministerio.relatorioSalvo),await U())}function Ge(t){return e`
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
        ${he.map(t=>e`<kk-option value=${t}>${v(t)}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${t.participacao===1}
        @kk-change=${e=>{B({participacao:+!!e.target.checked})}}
      >
        ${n.ministerio.participacao}
      </kk-switch>

      <kk-textarea
        rows="6"
        label=${n.ministerio.observacoes}
        .value=${t.observacoes}
        @kk-input=${e=>{B({observacoes:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void We()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,u()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Z(){return h(P.telefone)!==``}async function Ke(e){let t=n.ministerio.relatorioDe(E(e.mes,e.ano)),r=fe(e,N),i;Z()?(window.open(me(P,r),`_blank`,`noopener`),i=await s({titulo:n.ministerio.confirmarEnvioTitulo,texto:n.ministerio.confirmarEnvio(P.nome.trim()),rotuloConfirmar:n.ministerio.foiEnviado})):i=await p(t,r,n.ministerio.copiadoParaEnviar)===`compartilhado`,i&&e.relatorio_enviado!==1&&(await b({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await J(e),c(n.ministerio.marcadoEnviado),await U())}async function qe(e){await s({titulo:n.ministerio.excluirRelatorio,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await te(e.id),c(n.ministerio.relatorioExcluido),await U())}function Je(t){let r=t.relatorio_enviado===1,i=v(t.tipo_publicador);return e`
    <div class="registro" data-status=${r?`enviado`:`pendente`}>
      <span class="registro__avatar">${x(t.mes).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{L={id:t.id??0,mes:t.mes,ano:t.ano,horas:t.horas,estudos:t.estudos,participacao:t.participacao,tipo:t.tipo_publicador,metaHoras:t.meta_horas,observacoes:t.notas_publicacoes,geradas:``,enviado:t.relatorio_enviado,dataEnvio:t.data_envio_relatorio},u()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${E(t.mes,t.ano)}</span>
          <kk-badge variant=${r?`success`:`warning`} pill>
            ${r?n.ministerio.enviado:n.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${n.ministerio.resumoRelatorio(i,t.participacao===1,t.estudos,ce(t.tipo_publicador)?n.ministerio.sufixoHoras(...re(t.horas)):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name=${Z()?`brand-whatsapp`:`share`}
          label=${Z()?n.ministerio.enviarAo(P.nome.trim()):n.ministerio.compartilhar}
          @click=${()=>void Ke(t)}
        ></kk-icon-button>
        <kk-icon-button
          name=${r?`arrow-back-up`:`circle-check`}
          label=${r?n.ministerio.marcarPendente:n.ministerio.marcarEnviado}
          @click=${async()=>{await Oe(t),r||await J(t),await U()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.ministerio.excluirRelatorio}
          @click=${()=>void qe(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Ye(){return e`
    ${N.nome.trim()===``?e`
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
  `}function Xe(){if(L!==null)return Ge(L);let t=se(O);if(t.length===0)return e`
      ${Ye()}
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${n.ministerio.semRelatorios}</p>
      </div>
    `;let r=g(t);return e`
    ${Ye()}
    ${r.map(r=>e`
        <section class="ano-servico">
          <header class="ano-servico__topo">
            <h3 class="ano-servico__titulo">${n.ministerio.anoDeServico(r.anoServico)}</h3>
            <p class="ano-servico__resumo">${n.ministerio.resumoDoAno(r)}</p>
          </header>
          <div class="registros">
            ${t.filter(e=>_e(e.mes,e.ano)===r.anoServico).map(e=>Je(e))}
          </div>
        </section>
      `)}
  `}function Ze(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function Qe(){let e=R;e!==null&&(e.nome.trim()===``?c(n.ministerio.informeNome,`warning`):(await de({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:ve(e.horario),notas:e.notas}),R=null,c(n.ministerio.estudoSalvo),await U()))}function $e(t){return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.ministerio.editarEstudo:n.ministerio.novoEstudo}
      </h2>

      <kk-input
        ${f}
        label=${n.ministerio.nome}
        .value=${t.nome}
        @kk-input=${e=>{V({nome:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${n.ministerio.contato}
          placeholder=${n.ministerio.contatoPlaceholder}
          .value=${t.contato}
          @kk-input=${e=>{V({contato:e.target.value})}}
        ></kk-input>
        <kk-input
          label=${n.ministerio.endereco}
          .value=${t.endereco}
          @kk-input=${e=>{V({endereco:e.target.value})}}
        ></kk-input>
      </div>

      <kk-input
        label=${n.ministerio.publicacaoAtual}
        placeholder=${n.ministerio.publicacaoPlaceholder}
        .value=${t.publicacao}
        @kk-input=${e=>{V({publicacao:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${n.ministerio.diaSemana}
          .value=${t.dia}
          @kk-change=${e=>{V({dia:e.target.value})}}
        >
          <kk-option value="">${n.ministerio.escolhaDia}</kk-option>
          ${De.map(t=>e`<kk-option value=${t}>${w(t)}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${n.ministerio.horario}
          .value=${t.horario}
          @kk-change=${e=>{V({horario:e.target.value})}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${n.ministerio.notas}
        .value=${t.notas}
        @kk-input=${e=>{V({notas:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Qe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,u()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function et(e){await s({titulo:n.ministerio.excluirEstudo,texto:n.ministerio.excluirEstudoTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await je(e.id,A),c(n.ministerio.estudoExcluido),await U())}function tt(r){let i=pe(A,r),a=i.tom===`frio`||i.tom===`nunca`,s=y(A,r.id)[0],c=ye(r);return e`
    <div class="registro" data-status=${a?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${c} 15%, transparent);color:color-mix(in oklab, ${c} 55%, var(--kk-color-neutral-1000))`}
      >
        ${ne(r)}
      </span>

      <button class="registro__alvo" @click=${()=>o(`ministerio/estudos/${r.id??``}`)}>
        <span class="registro__topo">
          <span class="registro__titulo">
            ${r.nome===``?n.ministerio.semNome:r.nome}
          </span>
          ${a?e`
                <kk-badge variant="danger" pill>
                  <kk-icon name="temperature-snow"></kk-icon>${n.ministerio.seloEsfriando}
                </kk-badge>
              `:t}
        </span>

        ${r.publicacao_atual===``?t:e`
              <span class="registro__resumo">
                <kk-icon name="book"></kk-icon>${r.publicacao_atual}
              </span>
            `}
        ${r.dia_semana===``?t:e`
              <span class="registro__resumo">
                <kk-icon name="calendar-week"></kk-icon>
                ${w(r.dia_semana)} · ${D(r.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${i.tom}>
          <kk-icon name="history"></kk-icon>${n.ministerio.ultimoEstudo} ${i.texto}
        </span>

        ${s===void 0?t:e`
              <span class="registro__parou">
                <kk-icon name="bookmark"></kk-icon>${n.ministerio.parouEm} ${s.onde_parou}
              </span>
            `}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${n.ministerio.editarEstudo}
          @click=${()=>{R={id:r.id??0,nome:r.nome,contato:r.contato,endereco:r.endereco,publicacao:r.publicacao_atual,dia:r.dia_semana,horario:D(r.horario_minutos),notas:r.notas},u()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${n.ministerio.compartilhar}
          @click=${()=>void p(n.ministerio.estudoDe(r.nome),ae(r,A))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.ministerio.excluirEstudo}
          @click=${()=>void et(r)}
        ></kk-icon-button>
      </div>
    </div>
  `}function nt(){if(R!==null)return $e(R);let t=ge(k,A,I);return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.ministerio.buscarEstudos}
        .value=${I}
        @kk-input=${e=>{I=e.target.value,u()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${k.length===0?n.ministerio.semEstudos:n.ministerio.semEstudosFiltro}</p>
          </div>
        `:e`<div class="registros">${t.map(e=>tt(e))}</div>`}
  `}function Q(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:k.find(e=>e.id===t)}async function rt(){let e=z;e!==null&&(e.ondeParou.trim()===``?(H({erro:!0}),u()):(await ie({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():i(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),z=null,c(n.ministerio.registroSalvo),await U()))}function it(t){return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.ministerio.editarRegistro:n.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${n.ministerio.data}
        .value=${t.data}
        @kk-change=${e=>{H({data:e.target.value})}}
      ></kk-input>

      <kk-input
        label=${n.ministerio.ondeParou}
        placeholder=${n.ministerio.ondeParouPlaceholder}
        .value=${t.ondeParou}
        help-text=${t.erro?n.ministerio.informeOndeParou:``}
        @kk-input=${e=>{H({ondeParou:e.target.value,erro:!1})}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${n.ministerio.comentario}
        placeholder=${n.ministerio.comentarioPlaceholder}
        .value=${t.comentario}
        @kk-input=${e=>{H({comentario:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void rt()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{z=null,u()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function at(e){await s({titulo:n.ministerio.excluirRegistro,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await le(e.id),c(n.ministerio.registroExcluido),await U())}function ot(i){if(z!==null)return it(z);let o=y(A,i.id);return o.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="history"></kk-icon>
        <p>${n.ministerio.semRegistros}</p>
      </div>
    `:e`
    <div class="registros">
      ${o.map(i=>e`
          <div class="sessao">
            <span class="sessao__texto">
              <span class="sessao__data">${a(i.registrado_em)}</span>
              <span class="sessao__parou">
                <kk-icon name="bookmark"></kk-icon>${i.onde_parou}
              </span>
              ${i.comentario===``?t:e`<span class="sessao__comentario">${i.comentario}</span>`}
            </span>

            <div class="registro__acoes">
              <kk-icon-button
                name="pencil"
                label=${n.acoes.editar}
                @click=${()=>{z={id:i.id??0,estudoId:i.estudo_id,data:i.registrado_em===0?r():r(i.registrado_em),ondeParou:i.onde_parou,comentario:i.comentario,erro:!1},u()}}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${n.ministerio.excluirRegistro}
                @click=${()=>void at(i)}
              ></kk-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var st={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let t=$(e);if(t===`relatorios`)return n.ministerio.atalhoRelatorios;if(t===`estudos`)return n.ministerio.atalhoEstudos;if(t===`linha`)return Q(e)?.nome??n.ministerio.linhaDoTempo},acoes(t){let i=$(t);if(i===`relatorios`&&L===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.ministerio.novoRelatorio}
          @click=${()=>{let e=new Date;L=X(e.getMonth()+1,e.getFullYear()),u()}}
        ></kk-icon-button>
      `;if(i===`estudos`&&R===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.ministerio.novoEstudo}
          @click=${()=>{R=Ze(),u()}}
        ></kk-icon-button>
      `;if(i===`linha`&&z===null){let i=Q(t);return i?.id===void 0?void 0:e`
        <kk-icon-button
          name="plus"
          label=${n.ministerio.registrarEstudo}
          @click=${()=>{z={id:0,estudoId:i.id??0,data:r(),ondeParou:``,comentario:``,erro:!1},u()}}
        ></kk-icon-button>
      `}},conteudo(t){let n=Ne.espera();if(n!==null)return n;let r=$(t);if(r===`relatorios`)return Xe();if(r===`estudos`)return nt();if(r===`linha`){let n=Q(t);return n===void 0?(o(`ministerio/estudos`),e`<div class="carregando"><kk-spinner></kk-spinner></div>`):ot(n)}return ze()}};export{st as telaMinisterio};