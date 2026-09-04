import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{i as r,o as i,t as a}from"./data-DRe9t3tD.js";import{D as o,E as s,o as c,r as l}from"./index-CRLpDONK.js";import{t as u}from"./compartilhar-CFzJczAF.js";import{DIAS_DA_SEMANA as ee,MESES as d,TIPOS_PUBLICADOR as f,ajustado as p,alternarEnviado as m,carregar as h,comoHorario as g,contadorTemAtividade as _,contadorZerado as v,corDoEstudo as te,deHorario as ne,esfriando as re,estudosVisiveis as ie,excluirEstudo as ae,excluirRegistro as oe,excluirRelatorio as y,horasDoContador as b,iniciais as x,lembreteDoRelatorio as S,mesEAno as C,observacoesDoContador as w,ordenarRelatorios as T,registrosDoEstudo as E,relataHoras as D,salvarContador as O,salvarEstudo as k,salvarRegistro as A,salvarRelatorio as j,textoDoEstudo as se,textoDoRelatorio as ce,ultimoRelativo as le,ultimoRelatorio as M}from"./dados-Djzs-wDh.js";var N=[],P=[],F=[],I=null,L=``,R=null,z=null,B=null,V=!1,H=!1;async function U(){let e=await h();N=e.relatorios,P=e.estudos,F=e.registros,I=e.contador,s()}function W(){V||H||(H=!0,(async()=>{try{await U(),V=!0}finally{H=!1,s()}})())}function G(t,n,r,i){return e`
    <button class="atalho" @click=${()=>o(i)}>
      <kk-icon class="atalho__icone" name=${t}></kk-icon>
      <span class="atalho__rotulo">${n}</span>
      <span class="atalho__resumo">${r}</span>
    </button>
  `}function K(r,i,a,o,s,c){return e`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${i}></kk-icon>${a}</span>
      <kk-icon-button
        name="minus"
        label=${n.ministerio.diminuir(a)}
        @click=${()=>void q(r,-o)}
      ></kk-icon-button>
      <span class="tally__valor">${s}</span>
      <kk-icon-button
        name="plus"
        label=${n.ministerio.aumentar(a)}
        @click=${()=>void q(r,o)}
      ></kk-icon-button>
      ${c??t}
    </div>
  `}async function q(e,t){I!==null&&(I=await O(p(I,e,t)),s())}async function ue(){I!==null&&(!await c({titulo:n.ministerio.zerar,texto:n.ministerio.zerarTexto,rotuloConfirmar:n.ministerio.zerar,variante:`warning`})||I===null||(I=await O(v(I)),s()))}async function J(e){I===null||I.mes!==e.mes||I.ano!==e.ano||!_(I)||(I=await O(v(I)))}function de(r){let i=_(r);return e`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${n.ministerio.contadores}
          <small>${C(r.mes,r.ano)}</small>
        </span>
        ${i?e`
              <kk-icon-button
                name="rotate-clockwise"
                label=${n.ministerio.zerar}
                @click=${()=>void ue()}
              ></kk-icon-button>
            `:t}
      </div>

      ${K(`minutos`,`clock`,n.ministerio.tempo,15,g(r.minutos),e`
          <kk-button size="small" outline @click=${()=>void q(`minutos`,60)}>
            ${n.ministerio.maisUmaHora}
          </kk-button>
        `)}
      ${K(`estudos`,`book`,n.ministerio.estudos,1,String(r.estudos))}
      ${K(`revisitas`,`rotate`,n.ministerio.revisitas,1,String(r.revisitas))}
      ${K(`publicacoes`,`books`,n.ministerio.publicacoes,1,String(r.publicacoes))}
      ${K(`videos`,`player-play`,n.ministerio.videos,1,String(r.videos))}

      <kk-button variant="primary" class="tally__gerar" @click=${Y}>
        <kk-icon slot="prefix" name="file-text"></kk-icon>${n.ministerio.gerarRelatorio}
      </kk-button>
    </div>
  `}function Y(){I!==null&&(R={id:0,mes:I.mes,ano:I.ano,horas:b(I.minutos),estudos:I.estudos,participacao:+!!_(I),tipo:M(N)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:w(I),enviado:0,dataEnvio:0},o(`ministerio/relatorios`))}function fe(){let e=S(N);if(e!==null){if(I!==null&&I.mes===e.mes&&I.ano===e.ano){Y();return}R={...X(),mes:e.mes,ano:e.ano},o(`ministerio/relatorios`)}}function pe(){let r=re(P,F),i=S(N),a=M(N);return e`
    ${r.length===0?t:e`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="temperature-snow"></kk-icon>
            ${n.ministerio.esfriando(r.length,15)}
            <a href="#/ministerio/estudos">${n.ministerio.verEstudos}</a>
          </kk-alert>
        `}

    ${i===null?t:e`
          <kk-alert variant="warning" open>
            <kk-icon slot="icon" name="bell"></kk-icon>
            ${n.ministerio.lembrete(C(i.mes,i.ano),i.existe)}
            <kk-button size="small" variant="warning" @click=${fe}>
              ${n.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${G(`file-text`,n.ministerio.atalhoRelatorios,n.ministerio.atalhoRelatoriosSub(N.length),`ministerio/relatorios`)}
      ${G(`book`,n.ministerio.atalhoEstudos,n.ministerio.atalhoEstudosSub(P.length),`ministerio/estudos`)}
      ${G(`trending-up`,n.ministerio.atalhoServico,n.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${I===null?t:de(I)}

    ${a===null?t:e`
          <div class="ultimo">
            <span class="ultimo__rotulo">${n.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${C(a.mes,a.ano)}
                <small>
                  ${a.participacao===1?n.ministerio.participou:n.ministerio.naoParticipou}
                  · ${n.ministerio.estudosDoRelatorio(a.estudos)}
                </small>
              </span>
              <kk-badge variant=${a.relatorio_enviado===1?`success`:`neutral`} pill>
                ${a.relatorio_enviado===1?n.ministerio.enviado:n.ministerio.pendente}
              </kk-badge>
            </div>
          </div>
        `}
  `}function X(){let e=new Date;return{id:0,mes:e.getMonth()+1,ano:e.getFullYear(),horas:0,estudos:0,participacao:1,tipo:`publicador`,metaHoras:0,observacoes:``,enviado:0,dataEnvio:0}}async function me(e){await j({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)),estudos:Math.max(0,Number(e.estudos)),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),R=null,l(n.ministerio.relatorioSalvo),await U()}function he(r){return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${r.id>0?n.ministerio.editarRelatorio:n.ministerio.novoRelatorio}
      </h2>

      <div class="formulario__par">
        <kk-select
          label=${n.ministerio.mes}
          .value=${String(r.mes)}
          @kk-change=${e=>{R={...r,mes:Number(e.target.value)}}}
        >
          ${d.map((n,r)=>r===0?t:e`<kk-option value=${r}>${n}</kk-option>`)}
        </kk-select>

        <kk-input
          type="number"
          label=${n.ministerio.ano}
          .value=${String(r.ano)}
          @kk-input=${e=>{R={...r,ano:Number(e.target.value)}}}
        ></kk-input>
      </div>

      <kk-select
        label=${n.ministerio.tipoPublicador}
        .value=${r.tipo}
        @kk-change=${e=>{R={...r,tipo:e.target.value},s()}}
      >
        ${Object.entries(f).map(([t,n])=>e`<kk-option value=${t}>${n}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${r.participacao===1}
        @kk-change=${e=>{R={...r,participacao:+!!e.target.checked}}}
      >
        ${n.ministerio.participacao}
      </kk-switch>

      ${D(r.tipo)?e`
            <div class="formulario__par">
              <kk-input
                type="number"
                step="0.5"
                min="0"
                label=${n.ministerio.horas}
                .value=${String(r.horas)}
                @kk-input=${e=>{R={...r,horas:Number(e.target.value)}}}
              ></kk-input>
              <kk-input
                type="number"
                min="0"
                label=${n.ministerio.metaHoras}
                .value=${String(r.metaHoras)}
                @kk-input=${e=>{R={...r,metaHoras:Number(e.target.value)}}}
              ></kk-input>
            </div>
          `:t}

      <kk-input
        type="number"
        min="0"
        label=${n.ministerio.estudosBiblicos}
        .value=${String(r.estudos)}
        @kk-input=${e=>{R={...r,estudos:Number(e.target.value)}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${n.ministerio.observacoes}
        .value=${r.observacoes}
        @kk-input=${e=>{R={...r,observacoes:e.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void me(r)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function ge(e){await u(n.ministerio.relatorioDe(C(e.mes,e.ano)),ce(e)),e.relatorio_enviado!==1&&(await j({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await J(e),await U())}async function _e(e){!await c({titulo:n.ministerio.excluirRelatorio,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await y(e.id),l(n.ministerio.relatorioExcluido),await U())}function ve(t){let r=t.relatorio_enviado===1,i=f[t.tipo_publicador]??t.tipo_publicador;return e`
    <div class="registro" data-status=${r?`enviado`:`pendente`}>
      <span class="registro__avatar">${(d[t.mes]??``).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{R={id:t.id??0,mes:t.mes,ano:t.ano,horas:t.horas,estudos:t.estudos,participacao:t.participacao,tipo:t.tipo_publicador,metaHoras:t.meta_horas,observacoes:t.notas_publicacoes,enviado:t.relatorio_enviado,dataEnvio:t.data_envio_relatorio},s()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${C(t.mes,t.ano)}</span>
          <kk-badge variant=${r?`success`:`warning`} pill>
            ${r?n.ministerio.enviado:n.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${n.ministerio.resumoRelatorio(i,t.participacao===1,t.estudos,D(t.tipo_publicador)?n.ministerio.sufixoHoras(t.horas):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="share"
          label=${n.ministerio.compartilhar}
          @click=${()=>void ge(t)}
        ></kk-icon-button>
        <kk-icon-button
          name=${r?`mail-check`:`send`}
          label=${r?n.ministerio.marcarPendente:n.ministerio.marcarEnviado}
          @click=${async()=>{await m(t),r||await J(t),await U()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.ministerio.excluirRelatorio}
          @click=${()=>void _e(t)}
        ></kk-icon-button>
      </div>
    </div>
  `}function ye(){if(R!==null)return he(R);let t=T(N);return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${n.ministerio.semRelatorios}</p>
      </div>
    `:e`<div class="registros">${t.map(e=>ve(e))}</div>`}function Z(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function be(e){if(e.nome.trim()===``){l(n.ministerio.informeNome,`warning`);return}await k({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:ne(e.horario),notas:e.notas}),z=null,l(n.ministerio.estudoSalvo),await U()}function xe(t){return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.ministerio.editarEstudo:n.ministerio.novoEstudo}
      </h2>

      <kk-input
        label=${n.ministerio.nome}
        .value=${t.nome}
        @kk-input=${e=>{z={...t,nome:e.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${n.ministerio.contato}
          placeholder=${n.ministerio.contatoPlaceholder}
          .value=${t.contato}
          @kk-input=${e=>{z={...t,contato:e.target.value}}}
        ></kk-input>
        <kk-input
          label=${n.ministerio.endereco}
          .value=${t.endereco}
          @kk-input=${e=>{z={...t,endereco:e.target.value}}}
        ></kk-input>
      </div>

      <kk-input
        label=${n.ministerio.publicacaoAtual}
        placeholder=${n.ministerio.publicacaoPlaceholder}
        .value=${t.publicacao}
        @kk-input=${e=>{z={...t,publicacao:e.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${n.ministerio.diaSemana}
          .value=${t.dia}
          @kk-change=${e=>{z={...t,dia:e.target.value}}}
        >
          <kk-option value="">${n.ministerio.escolhaDia}</kk-option>
          ${ee.map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${n.ministerio.horario}
          .value=${t.horario}
          @kk-change=${e=>{z={...t,horario:e.target.value}}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${n.ministerio.notas}
        .value=${t.notas}
        @kk-input=${e=>{z={...t,notas:e.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void be(t)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{z=null,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Se(e){!await c({titulo:n.ministerio.excluirEstudo,texto:n.ministerio.excluirEstudoTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await ae(e.id,F),l(n.ministerio.estudoExcluido),await U())}function Ce(r){let i=le(F,r),a=i.tom===`frio`||i.tom===`nunca`,c=E(F,r.id)[0],l=te(r);return e`
    <div class="registro" data-status=${a?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${l} 15%, transparent);color:${l}`}
      >
        ${x(r)}
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
                ${r.dia_semana} · ${g(r.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${i.tom}>
          <kk-icon name="history"></kk-icon>${n.ministerio.ultimoEstudo} ${i.texto}
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
          @click=${()=>{z={id:r.id??0,nome:r.nome,contato:r.contato,endereco:r.endereco,publicacao:r.publicacao_atual,dia:r.dia_semana,horario:g(r.horario_minutos),notas:r.notas},s()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${n.ministerio.compartilhar}
          @click=${()=>void u(n.ministerio.estudoDe(r.nome),se(r,F))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${n.ministerio.excluirEstudo}
          @click=${()=>void Se(r)}
        ></kk-icon-button>
      </div>
    </div>
  `}function we(){if(z!==null)return xe(z);let t=ie(P,F,L);return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${n.ministerio.buscarEstudos}
        .value=${L}
        @kk-input=${e=>{L=e.target.value,s()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${t.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${P.length===0?n.ministerio.semEstudos:n.ministerio.semEstudosFiltro}</p>
          </div>
        `:e`<div class="registros">${t.map(e=>Ce(e))}</div>`}
  `}function Q(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:P.find(e=>e.id===t)}async function Te(e){if(e.ondeParou.trim()===``){B={...e,erro:!0},s();return}await A({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():i(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),B=null,l(n.ministerio.registroSalvo),await U()}function Ee(t){return e`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${t.id>0?n.ministerio.editarRegistro:n.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${n.ministerio.data}
        .value=${t.data}
        @kk-change=${e=>{B={...t,data:e.target.value}}}
      ></kk-input>

      <kk-input
        label=${n.ministerio.ondeParou}
        placeholder=${n.ministerio.ondeParouPlaceholder}
        .value=${t.ondeParou}
        help-text=${t.erro?n.ministerio.informeOndeParou:``}
        @kk-input=${e=>{B={...t,ondeParou:e.target.value,erro:!1}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${n.ministerio.comentario}
        placeholder=${n.ministerio.comentarioPlaceholder}
        .value=${t.comentario}
        @kk-input=${e=>{B={...t,comentario:e.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Te(t)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{B=null,s()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function De(e){!await c({titulo:n.ministerio.excluirRegistro,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})||e.id===void 0||(await oe(e.id),l(n.ministerio.registroExcluido),await U())}function Oe(i){if(B!==null)return Ee(B);let o=E(F,i.id);return o.length===0?e`
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
                @click=${()=>{B={id:i.id??0,estudoId:i.estudo_id,data:i.registrado_em===0?r():r(i.registrado_em),ondeParou:i.onde_parou,comentario:i.comentario,erro:!1},s()}}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${n.ministerio.excluirRegistro}
                @click=${()=>void De(i)}
              ></kk-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var ke={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let t=$(e);if(t===`relatorios`)return n.ministerio.atalhoRelatorios;if(t===`estudos`)return n.ministerio.atalhoEstudos;if(t===`linha`)return Q(e)?.nome??n.ministerio.linhaDoTempo},acoes(t){let i=$(t);if(i===`relatorios`&&R===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.ministerio.novoRelatorio}
          @click=${()=>{R=X(),s()}}
        ></kk-icon-button>
      `;if(i===`estudos`&&z===null)return e`
        <kk-icon-button
          name="plus"
          label=${n.ministerio.novoEstudo}
          @click=${()=>{z=Z(),s()}}
        ></kk-icon-button>
      `;if(i===`linha`&&B===null){let i=Q(t);return i?.id===void 0?void 0:e`
        <kk-icon-button
          name="plus"
          label=${n.ministerio.registrarEstudo}
          @click=${()=>{B={id:0,estudoId:i.id??0,data:r(),ondeParou:``,comentario:``,erro:!1},s()}}
        ></kk-icon-button>
      `}},conteudo(t){if(W(),!V)return e`<div class="carregando"><kk-spinner></kk-spinner></div>`;let n=$(t);if(n===`relatorios`)return ye();if(n===`estudos`)return we();if(n===`linha`){let n=Q(t);return n===void 0?(o(`ministerio/estudos`),e`<div class="carregando"><kk-spinner></kk-spinner></div>`):Oe(n)}return pe()}};export{ke as telaMinisterio};