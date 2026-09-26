import{C as e,_t as t,at as n,bt as r,ct as i,ft as a,g as o,m as s,mt as c,tt as l,w as u,xt as d,y as f}from"./index-tEHw1VqD.js";import{t as p}from"./foco-D25XPHyz.js";import{t as m}from"./compartilhar-C4iBpIQ9.js";import{DESTINATARIO_VAZIO as h,DIAS_DA_SEMANA as ee,MESES as g,PUBLICADOR_VAZIO as te,TIPOS_PUBLICADOR as _,ajustado as ne,alternarEnviado as re,anoDeServico as ie,carregar as ae,comoHorario as v,contadorTemAtividade as y,contadorZerado as b,corDoEstudo as oe,deHorario as se,enderecoDoEnvio as ce,esfriando as le,estudosVisiveis as ue,excluirEstudo as de,excluirRegistro as fe,excluirRelatorio as pe,horasDoContador as me,iniciais as he,lembreteDoRelatorio as x,mesEAno as S,mesesDoAnoDeServico as ge,numeroDoWhatsApp as _e,observacoesDoContador as ve,ordenarRelatorios as ye,registrosDoEstudo as be,relataHoras as xe,relatoriosEmAtraso as Se,resumosPorAnoDeServico as C,salvarContador as w,salvarEstudo as Ce,salvarRegistro as we,salvarRelatorio as T,textoDoEstudo as Te,textoDoRelatorio as Ee,ultimoRelativo as De,ultimoRelatorio as E}from"./dados-8xZGTJVQ.js";import Oe from"./martelada-Cm7NO4R0.js";var D=[],O=[],k=[],A=null,j=[],M=te,N=h,P=null,F=``,I=null,L=null,R=null;function z(e){I!==null&&(I={...I,...e})}function B(e){L!==null&&(L={...L,...e})}function V(e){R!==null&&(R={...R,...e})}var H=!1,U=!1,W=null;async function G(){let e=await ae();D=e.relatorios,O=e.estudos,k=e.registros,A=e.contador,j=e.contadores,M=e.publicador,N=e.secretario,a()}function K(){H||U||W!==null||(U=!0,(async()=>{try{await G(),H=!0}catch(e){console.error(`ministerio: a carga falhou.`,e),W=u(e)}finally{U=!1,a()}})())}function ke(){W=null,K(),a()}function q(e,t,n,r){return d`
    <button class="atalho" @click=${()=>c(r)}>
      <kk-icon class="atalho__icone" name=${e}></kk-icon>
      <span class="atalho__rotulo">${t}</span>
      <span class="atalho__resumo">${n}</span>
    </button>
  `}function J(e,n,i,a,o,s){return d`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${n}></kk-icon>${i}</span>
      <kk-icon-button
        name="minus"
        label=${t.ministerio.diminuir(i)}
        @click=${()=>void Y(e,-a)}
      ></kk-icon-button>
      <span class="tally__valor">${o}</span>
      <kk-icon-button
        name="plus"
        label=${t.ministerio.aumentar(i)}
        @click=${()=>void Y(e,a)}
      ></kk-icon-button>
      ${s??r}
    </div>
  `}async function Y(e,t){A!==null&&(A=await w(ne(A,e,t)),a())}async function Ae(){A!==null&&await o({titulo:t.ministerio.zerar,texto:t.ministerio.zerarTexto,rotuloConfirmar:t.ministerio.zerar,variante:`warning`})&&A!==null&&(A=await w(b(A)),a())}async function X(e){A!==null&&A.mes===e.mes&&A.ano===e.ano&&y(A)&&(A=await w(b(A)))}function je(e){let n=y(e);return d`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${t.ministerio.contadores}
          <small>${S(e.mes,e.ano)}</small>
        </span>
        ${n?d`
              <kk-icon-button
                name="rotate-clockwise"
                label=${t.ministerio.zerar}
                @click=${()=>void Ae()}
              ></kk-icon-button>
            `:r}
      </div>

      ${J(`minutos`,`clock`,t.ministerio.tempo,15,v(e.minutos),d`
          <kk-button size="small" outline @click=${()=>void Y(`minutos`,60)}>
            ${t.ministerio.maisUmaHora}
          </kk-button>
        `)}
      ${J(`estudos`,`book`,t.ministerio.estudos,1,String(e.estudos))}
      ${J(`revisitas`,`rotate`,t.ministerio.revisitas,1,String(e.revisitas))}
      ${J(`publicacoes`,`books`,t.ministerio.publicacoes,1,String(e.publicacoes))}
      ${J(`videos`,`player-play`,t.ministerio.videos,1,String(e.videos))}

      <kk-button variant="primary" class="tally__gerar" @click=${()=>Me(e)}>
        <kk-icon slot="prefix" name="file-text"></kk-icon>${t.ministerio.gerarRelatorio}
      </kk-button>
    </div>
  `}function Me(e){I={id:0,mes:e.mes,ano:e.ano,horas:me(e.minutos),estudos:e.estudos,participacao:+!!y(e),tipo:E(D)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:ve(e),enviado:0,dataEnvio:0},c(`ministerio/relatorios`)}function Ne(){let e=x(D);if(e===null)return;let t=t=>t.mes===e.mes&&t.ano===e.ano,n=D.find(t);if(n!==void 0){Ve(n);return}let r=j.find(t);if(r!==void 0&&y(r)){Me(r);return}I={...Re(),mes:e.mes,ano:e.ano},c(`ministerio/relatorios`)}function Pe(){let e=le(O,k),n=x(D),i=Se(D),a=E(D);return d`
    ${i.length===0?r:d`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="calendar-x"></kk-icon>
            ${t.ministerio.atrasados(i.length,i.map(e=>S(e.mes,e.ano)).join(`, `))}
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
            ${d`<span slot="icon" class="lembrete__mascote">${f(Oe)}</span>`}
            ${t.ministerio.lembrete(S(n.mes,n.ano),n.existe)}
            <kk-button size="small" variant="warning" @click=${Ne}>
              ${n.existe?t.ministerio.enviar:t.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${q(`file-text`,t.ministerio.atalhoRelatorios,t.ministerio.atalhoRelatoriosSub(D.length),`ministerio/relatorios`)}
      ${q(`book`,t.ministerio.atalhoEstudos,t.ministerio.atalhoEstudosSub(O.length),`ministerio/estudos`)}
      ${q(`trending-up`,t.ministerio.atalhoServico,t.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${A===null?r:je(A)}

    ${a===null?r:d`
          <div class="ultimo">
            <span class="ultimo__rotulo">${t.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${S(a.mes,a.ano)}
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

    ${Le()}
  `}function Fe(e,n,i,a){let o=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=n.map(e=>e.relatorio===null?null:Math.max(0,Number(i(e.relatorio))||0)),c=Math.max(0,...s.map(e=>e??0)),l=c>0?s.indexOf(c):-1;return d`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${e}</figcaption>
      <div class="anual__colunas">
        ${n.map((e,n)=>{let i=s[n]??null,u=S(e.mes,e.ano),f=new Date(e.ano,e.mes-1,1)>=o,p=i===null?f?`aberto`:`vazio`:`relatado`,m=i===null?f?t.ministerio.mesEmAberto(u):t.ministerio.mesSemRelatorio(u):t.ministerio.valorNoMes(u,a(i)),h=i===null||i<=0?0:Math.max(4,i/c*100);return d`
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
  `}function Ie(e){return d`
    <figure class="anual__grafico">
      <figcaption class="anual__legenda">${t.ministerio.graficoParticipacao}</figcaption>
      <div class="anual__colunas anual__colunas--faixa">
        ${e.map(e=>{let n=S(e.mes,e.ano),i=e.relatorio?.participacao===1,a=e.relatorio===null?t.ministerio.mesSemRelatorio(n):t.ministerio.participacaoNoMes(n,i);return d`
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
  `}function Le(){let e=C(D),n=e.map(e=>e.anoServico),i=P!==null&&n.includes(P)?P:n[0],o=e.find(e=>e.anoServico===i);if(i===void 0||o===void 0)return r;let s=n.indexOf(i),c=n[s+1],l=n[s-1],u=ge(D,i),f=u.some(e=>(Number(e.relatorio?.horas)||0)>0),p=e=>{e!==void 0&&(P=e,a())};return d`
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

      ${Fe(t.ministerio.graficoEstudos,u,e=>e.estudos,e=>String(e))}
      ${f?Fe(t.ministerio.graficoHoras,u,e=>e.horas,e=>t.ministerio.emHoras(e)):r}
      ${Ie(u)}
    </section>
  `}function Re(){let e=new Date;return{id:0,mes:e.getMonth()+1,ano:e.getFullYear(),horas:0,estudos:0,participacao:1,tipo:`publicador`,metaHoras:0,observacoes:``,enviado:0,dataEnvio:0}}async function ze(){let e=I;e!==null&&(await T({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)),estudos:Math.max(0,Number(e.estudos)),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),I=null,s(t.ministerio.relatorioSalvo),await G())}function Be(e){return d`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?t.ministerio.editarRelatorio:t.ministerio.novoRelatorio}
      </h2>

      <div class="formulario__par">
        <kk-select
          label=${t.ministerio.mes}
          .value=${String(e.mes)}
          @kk-change=${e=>{z({mes:Number(e.target.value)})}}
        >
          ${g.map((e,t)=>t===0?r:d`<kk-option value=${t}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="number"
          label=${t.ministerio.ano}
          .value=${String(e.ano)}
          @kk-input=${e=>{z({ano:Number(e.target.value)})}}
        ></kk-input>
      </div>

      <kk-select
        label=${t.ministerio.tipoPublicador}
        .value=${e.tipo}
        @kk-change=${e=>{z({tipo:e.target.value}),a()}}
      >
        ${Object.entries(_).map(([e,t])=>d`<kk-option value=${e}>${t}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${e.participacao===1}
        @kk-change=${e=>{z({participacao:+!!e.target.checked})}}
      >
        ${t.ministerio.participacao}
      </kk-switch>

      ${xe(e.tipo)?d`
            <div class="formulario__par">
              <kk-input
                type="number"
                step="0.5"
                min="0"
                label=${t.ministerio.horas}
                .value=${String(e.horas)}
                @kk-input=${e=>{z({horas:Number(e.target.value)})}}
              ></kk-input>
              <kk-input
                type="number"
                min="0"
                label=${t.ministerio.metaHoras}
                .value=${String(e.metaHoras)}
                @kk-input=${e=>{z({metaHoras:Number(e.target.value)})}}
              ></kk-input>
            </div>
          `:r}

      <kk-input
        type="number"
        min="0"
        label=${t.ministerio.estudosBiblicos}
        .value=${String(e.estudos)}
        @kk-input=${e=>{z({estudos:Number(e.target.value)})}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${t.ministerio.observacoes}
        .value=${e.observacoes}
        @kk-input=${e=>{z({observacoes:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void ze()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,a()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Z(){return _e(N.telefone)!==``}async function Ve(e){let n=t.ministerio.relatorioDe(S(e.mes,e.ano)),r=Ee(e,M),i;Z()?(window.open(ce(N,`${n}\n\n${r}`),`_blank`,`noopener`),i=await o({titulo:t.ministerio.confirmarEnvioTitulo,texto:t.ministerio.confirmarEnvio(N.nome.trim()),rotuloConfirmar:t.ministerio.foiEnviado})):i=await m(n,r,t.ministerio.copiadoParaEnviar)===`compartilhado`,i&&e.relatorio_enviado!==1&&(await T({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await X(e),s(t.ministerio.marcadoEnviado),await G())}async function He(e){await o({titulo:t.ministerio.excluirRelatorio,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await pe(e.id),s(t.ministerio.relatorioExcluido),await G())}function Ue(e){let n=e.relatorio_enviado===1,r=_[e.tipo_publicador]??e.tipo_publicador;return d`
    <div class="registro" data-status=${n?`enviado`:`pendente`}>
      <span class="registro__avatar">${(g[e.mes]??``).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{I={id:e.id??0,mes:e.mes,ano:e.ano,horas:e.horas,estudos:e.estudos,participacao:e.participacao,tipo:e.tipo_publicador,metaHoras:e.meta_horas,observacoes:e.notas_publicacoes,enviado:e.relatorio_enviado,dataEnvio:e.data_envio_relatorio},a()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${S(e.mes,e.ano)}</span>
          <kk-badge variant=${n?`success`:`warning`} pill>
            ${n?t.ministerio.enviado:t.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${t.ministerio.resumoRelatorio(r,e.participacao===1,e.estudos,xe(e.tipo_publicador)?t.ministerio.sufixoHoras(e.horas):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name=${Z()?`brand-whatsapp`:`share`}
          label=${Z()?t.ministerio.enviarAo(N.nome.trim()):t.ministerio.compartilhar}
          @click=${()=>void Ve(e)}
        ></kk-icon-button>
        <kk-icon-button
          name=${n?`arrow-back-up`:`circle-check`}
          label=${n?t.ministerio.marcarPendente:t.ministerio.marcarEnviado}
          @click=${async()=>{await re(e),n||await X(e),await G()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${t.ministerio.excluirRelatorio}
          @click=${()=>void He(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function We(){return d`
    ${M.nome.trim()===``?d`
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
  `}function Ge(){if(I!==null)return Be(I);let e=ye(D);if(e.length===0)return d`
      ${We()}
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${t.ministerio.semRelatorios}</p>
      </div>
    `;let n=C(e);return d`
    ${We()}
    ${n.map(n=>d`
        <section class="ano-servico">
          <header class="ano-servico__topo">
            <h3 class="ano-servico__titulo">${t.ministerio.anoDeServico(n.anoServico)}</h3>
            <p class="ano-servico__resumo">${t.ministerio.resumoDoAno(n)}</p>
          </header>
          <div class="registros">
            ${e.filter(e=>ie(e.mes,e.ano)===n.anoServico).map(e=>Ue(e))}
          </div>
        </section>
      `)}
  `}function Ke(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function qe(){let e=L;if(e!==null){if(e.nome.trim()===``){s(t.ministerio.informeNome,`warning`);return}await Ce({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:se(e.horario),notas:e.notas}),L=null,s(t.ministerio.estudoSalvo),await G()}}function Je(e){return d`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?t.ministerio.editarEstudo:t.ministerio.novoEstudo}
      </h2>

      <kk-input
        ${p}
        label=${t.ministerio.nome}
        .value=${e.nome}
        @kk-input=${e=>{B({nome:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${t.ministerio.contato}
          placeholder=${t.ministerio.contatoPlaceholder}
          .value=${e.contato}
          @kk-input=${e=>{B({contato:e.target.value})}}
        ></kk-input>
        <kk-input
          label=${t.ministerio.endereco}
          .value=${e.endereco}
          @kk-input=${e=>{B({endereco:e.target.value})}}
        ></kk-input>
      </div>

      <kk-input
        label=${t.ministerio.publicacaoAtual}
        placeholder=${t.ministerio.publicacaoPlaceholder}
        .value=${e.publicacao}
        @kk-input=${e=>{B({publicacao:e.target.value})}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${t.ministerio.diaSemana}
          .value=${e.dia}
          @kk-change=${e=>{B({dia:e.target.value})}}
        >
          <kk-option value="">${t.ministerio.escolhaDia}</kk-option>
          ${ee.map(e=>d`<kk-option value=${e}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${t.ministerio.horario}
          .value=${e.horario}
          @kk-change=${e=>{B({horario:e.target.value})}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${t.ministerio.notas}
        .value=${e.notas}
        @kk-input=${e=>{B({notas:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void qe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,a()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Ye(e){await o({titulo:t.ministerio.excluirEstudo,texto:t.ministerio.excluirEstudoTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await de(e.id,k),s(t.ministerio.estudoExcluido),await G())}function Xe(e){let n=De(k,e),i=n.tom===`frio`||n.tom===`nunca`,o=be(k,e.id)[0],s=oe(e);return d`
    <div class="registro" data-status=${i?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${s} 15%, transparent);color:${s}`}
      >
        ${he(e)}
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
                ${e.dia_semana} · ${v(e.horario_minutos)}
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
          @click=${()=>{L={id:e.id??0,nome:e.nome,contato:e.contato,endereco:e.endereco,publicacao:e.publicacao_atual,dia:e.dia_semana,horario:v(e.horario_minutos),notas:e.notas},a()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${t.ministerio.compartilhar}
          @click=${()=>void m(t.ministerio.estudoDe(e.nome),Te(e,k))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${t.ministerio.excluirEstudo}
          @click=${()=>void Ye(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Ze(){if(L!==null)return Je(L);let e=ue(O,k,F);return d`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${t.ministerio.buscarEstudos}
        .value=${F}
        @kk-input=${e=>{F=e.target.value,a()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?d`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${O.length===0?t.ministerio.semEstudos:t.ministerio.semEstudosFiltro}</p>
          </div>
        `:d`<div class="registros">${e.map(e=>Xe(e))}</div>`}
  `}function Q(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:O.find(e=>e.id===t)}async function Qe(){let e=R;if(e!==null){if(e.ondeParou.trim()===``){V({erro:!0}),a();return}await we({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():i(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),R=null,s(t.ministerio.registroSalvo),await G()}}function $e(e){return d`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?t.ministerio.editarRegistro:t.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${t.ministerio.data}
        .value=${e.data}
        @kk-change=${e=>{V({data:e.target.value})}}
      ></kk-input>

      <kk-input
        label=${t.ministerio.ondeParou}
        placeholder=${t.ministerio.ondeParouPlaceholder}
        .value=${e.ondeParou}
        help-text=${e.erro?t.ministerio.informeOndeParou:``}
        @kk-input=${e=>{V({ondeParou:e.target.value,erro:!1})}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${t.ministerio.comentario}
        placeholder=${t.ministerio.comentarioPlaceholder}
        .value=${e.comentario}
        @kk-input=${e=>{V({comentario:e.target.value})}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Qe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,a()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function et(e){await o({titulo:t.ministerio.excluirRegistro,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await fe(e.id),s(t.ministerio.registroExcluido),await G())}function tt(e){if(R!==null)return $e(R);let i=be(k,e.id);return i.length===0?d`
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
                @click=${()=>{R={id:e.id??0,estudoId:e.estudo_id,data:e.registrado_em===0?n():n(e.registrado_em),ondeParou:e.onde_parou,comentario:e.comentario,erro:!1},a()}}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${t.ministerio.excluirRegistro}
                @click=${()=>void et(e)}
              ></kk-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var nt={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let n=$(e);if(n===`relatorios`)return t.ministerio.atalhoRelatorios;if(n===`estudos`)return t.ministerio.atalhoEstudos;if(n===`linha`)return Q(e)?.nome??t.ministerio.linhaDoTempo},acoes(e){let r=$(e);if(r===`relatorios`&&I===null)return d`
        <kk-icon-button
          name="plus"
          label=${t.ministerio.novoRelatorio}
          @click=${()=>{I=Re(),a()}}
        ></kk-icon-button>
      `;if(r===`estudos`&&L===null)return d`
        <kk-icon-button
          name="plus"
          label=${t.ministerio.novoEstudo}
          @click=${()=>{L=Ke(),a()}}
        ></kk-icon-button>
      `;if(r===`linha`&&R===null){let r=Q(e);return r?.id===void 0?void 0:d`
        <kk-icon-button
          name="plus"
          label=${t.ministerio.registrarEstudo}
          @click=${()=>{R={id:0,estudoId:r.id??0,data:n(),ondeParou:``,comentario:``,erro:!1},a()}}
        ></kk-icon-button>
      `}},conteudo(t){if(K(),W!==null)return e(W,ke);if(!H)return d`<div class="carregando"><kk-spinner></kk-spinner></div>`;let n=$(t);if(n===`relatorios`)return Ge();if(n===`estudos`)return Ze();if(n===`linha`){let e=Q(t);return e===void 0?(c(`ministerio/estudos`),d`<div class="carregando"><kk-spinner></kk-spinner></div>`):tt(e)}return Pe()}};export{nt as telaMinisterio};