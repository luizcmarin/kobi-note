import{$ as e,Q as t,at as n,g as r,nt as i,p as a,rt as o,u as s,x as c,y as l}from"./index-BQ2FB00A.js";import{t as u}from"./compartilhar-Bm69ost8.js";import{DIAS_DA_SEMANA as ee,MESES as d,TIPOS_PUBLICADOR as f,ajustado as p,alternarEnviado as m,carregar as h,comoHorario as g,contadorTemAtividade as _,contadorZerado as v,corDoEstudo as te,deHorario as ne,esfriando as re,estudosVisiveis as ie,excluirEstudo as ae,excluirRegistro as oe,excluirRelatorio as y,horasDoContador as b,iniciais as x,lembreteDoRelatorio as S,mesEAno as C,observacoesDoContador as w,ordenarRelatorios as T,registrosDoEstudo as E,relataHoras as D,salvarContador as O,salvarEstudo as k,salvarRegistro as A,salvarRelatorio as j,textoDoEstudo as se,textoDoRelatorio as ce,ultimoRelativo as le,ultimoRelatorio as M}from"./dados-Ce8ktMs7.js";var N=[],P=[],F=[],I=null,L=``,R=null,z=null,B=null,V=!1,H=!1;async function U(){let e=await h();N=e.relatorios,P=e.estudos,F=e.registros,I=e.contador,t()}function W(){V||H||(H=!0,(async()=>{try{await U(),V=!0}finally{H=!1,t()}})())}function G(t,r,i,a){return n`
    <button class="atalho" @click=${()=>e(a)}>
      <kk-icon class="atalho__icone" name=${t}></kk-icon>
      <span class="atalho__rotulo">${r}</span>
      <span class="atalho__resumo">${i}</span>
    </button>
  `}function K(e,t,r,a,s,c){return n`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${t}></kk-icon>${r}</span>
      <kk-icon-button
        name="minus"
        label=${i.ministerio.diminuir(r)}
        @click=${()=>void q(e,-a)}
      ></kk-icon-button>
      <span class="tally__valor">${s}</span>
      <kk-icon-button
        name="plus"
        label=${i.ministerio.aumentar(r)}
        @click=${()=>void q(e,a)}
      ></kk-icon-button>
      ${c??o}
    </div>
  `}async function q(e,n){I!==null&&(I=await O(p(I,e,n)),t())}async function ue(){I!==null&&await a({titulo:i.ministerio.zerar,texto:i.ministerio.zerarTexto,rotuloConfirmar:i.ministerio.zerar,variante:`warning`})&&I!==null&&(I=await O(v(I)),t())}async function J(e){I!==null&&I.mes===e.mes&&I.ano===e.ano&&_(I)&&(I=await O(v(I)))}function de(e){let t=_(e);return n`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${i.ministerio.contadores}
          <small>${C(e.mes,e.ano)}</small>
        </span>
        ${t?n`
              <kk-icon-button
                name="rotate-clockwise"
                label=${i.ministerio.zerar}
                @click=${()=>void ue()}
              ></kk-icon-button>
            `:o}
      </div>

      ${K(`minutos`,`clock`,i.ministerio.tempo,15,g(e.minutos),n`
          <kk-button size="small" outline @click=${()=>void q(`minutos`,60)}>
            ${i.ministerio.maisUmaHora}
          </kk-button>
        `)}
      ${K(`estudos`,`book`,i.ministerio.estudos,1,String(e.estudos))}
      ${K(`revisitas`,`rotate`,i.ministerio.revisitas,1,String(e.revisitas))}
      ${K(`publicacoes`,`books`,i.ministerio.publicacoes,1,String(e.publicacoes))}
      ${K(`videos`,`player-play`,i.ministerio.videos,1,String(e.videos))}

      <kk-button variant="primary" class="tally__gerar" @click=${Y}>
        <kk-icon slot="prefix" name="file-text"></kk-icon>${i.ministerio.gerarRelatorio}
      </kk-button>
    </div>
  `}function Y(){I!==null&&(R={id:0,mes:I.mes,ano:I.ano,horas:b(I.minutos),estudos:I.estudos,participacao:+!!_(I),tipo:M(N)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:w(I),enviado:0,dataEnvio:0},e(`ministerio/relatorios`))}function fe(){let t=S(N);if(t!==null){if(I!==null&&I.mes===t.mes&&I.ano===t.ano){Y();return}R={...X(),mes:t.mes,ano:t.ano},e(`ministerio/relatorios`)}}function pe(){let e=re(P,F),t=S(N),r=M(N);return n`
    ${e.length===0?o:n`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="temperature-snow"></kk-icon>
            ${i.ministerio.esfriando(e.length,15)}
            <a href="#/ministerio/estudos">${i.ministerio.verEstudos}</a>
          </kk-alert>
        `}

    ${t===null?o:n`
          <kk-alert variant="warning" open>
            <kk-icon slot="icon" name="bell"></kk-icon>
            ${i.ministerio.lembrete(C(t.mes,t.ano),t.existe)}
            <kk-button size="small" variant="warning" @click=${fe}>
              ${i.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${G(`file-text`,i.ministerio.atalhoRelatorios,i.ministerio.atalhoRelatoriosSub(N.length),`ministerio/relatorios`)}
      ${G(`book`,i.ministerio.atalhoEstudos,i.ministerio.atalhoEstudosSub(P.length),`ministerio/estudos`)}
      ${G(`trending-up`,i.ministerio.atalhoServico,i.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${I===null?o:de(I)}

    ${r===null?o:n`
          <div class="ultimo">
            <span class="ultimo__rotulo">${i.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${C(r.mes,r.ano)}
                <small>
                  ${r.participacao===1?i.ministerio.participou:i.ministerio.naoParticipou}
                  · ${i.ministerio.estudosDoRelatorio(r.estudos)}
                </small>
              </span>
              <kk-badge variant=${r.relatorio_enviado===1?`success`:`neutral`} pill>
                ${r.relatorio_enviado===1?i.ministerio.enviado:i.ministerio.pendente}
              </kk-badge>
            </div>
          </div>
        `}
  `}function X(){let e=new Date;return{id:0,mes:e.getMonth()+1,ano:e.getFullYear(),horas:0,estudos:0,participacao:1,tipo:`publicador`,metaHoras:0,observacoes:``,enviado:0,dataEnvio:0}}async function me(e){await j({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)),estudos:Math.max(0,Number(e.estudos)),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),R=null,s(i.ministerio.relatorioSalvo),await U()}function he(e){return n`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?i.ministerio.editarRelatorio:i.ministerio.novoRelatorio}
      </h2>

      <div class="formulario__par">
        <kk-select
          label=${i.ministerio.mes}
          .value=${String(e.mes)}
          @kk-change=${t=>{R={...e,mes:Number(t.target.value)}}}
        >
          ${d.map((e,t)=>t===0?o:n`<kk-option value=${t}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="number"
          label=${i.ministerio.ano}
          .value=${String(e.ano)}
          @kk-input=${t=>{R={...e,ano:Number(t.target.value)}}}
        ></kk-input>
      </div>

      <kk-select
        label=${i.ministerio.tipoPublicador}
        .value=${e.tipo}
        @kk-change=${n=>{R={...e,tipo:n.target.value},t()}}
      >
        ${Object.entries(f).map(([e,t])=>n`<kk-option value=${e}>${t}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${e.participacao===1}
        @kk-change=${t=>{R={...e,participacao:+!!t.target.checked}}}
      >
        ${i.ministerio.participacao}
      </kk-switch>

      ${D(e.tipo)?n`
            <div class="formulario__par">
              <kk-input
                type="number"
                step="0.5"
                min="0"
                label=${i.ministerio.horas}
                .value=${String(e.horas)}
                @kk-input=${t=>{R={...e,horas:Number(t.target.value)}}}
              ></kk-input>
              <kk-input
                type="number"
                min="0"
                label=${i.ministerio.metaHoras}
                .value=${String(e.metaHoras)}
                @kk-input=${t=>{R={...e,metaHoras:Number(t.target.value)}}}
              ></kk-input>
            </div>
          `:o}

      <kk-input
        type="number"
        min="0"
        label=${i.ministerio.estudosBiblicos}
        .value=${String(e.estudos)}
        @kk-input=${t=>{R={...e,estudos:Number(t.target.value)}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${i.ministerio.observacoes}
        .value=${e.observacoes}
        @kk-input=${t=>{R={...e,observacoes:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void me(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,t()}}
        >
          ${i.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function ge(e){await u(i.ministerio.relatorioDe(C(e.mes,e.ano)),ce(e)),e.relatorio_enviado!==1&&(await j({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await J(e),await U())}async function _e(e){await a({titulo:i.ministerio.excluirRelatorio,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await y(e.id),s(i.ministerio.relatorioExcluido),await U())}function ve(e){let r=e.relatorio_enviado===1,a=f[e.tipo_publicador]??e.tipo_publicador;return n`
    <div class="registro" data-status=${r?`enviado`:`pendente`}>
      <span class="registro__avatar">${(d[e.mes]??``).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{R={id:e.id??0,mes:e.mes,ano:e.ano,horas:e.horas,estudos:e.estudos,participacao:e.participacao,tipo:e.tipo_publicador,metaHoras:e.meta_horas,observacoes:e.notas_publicacoes,enviado:e.relatorio_enviado,dataEnvio:e.data_envio_relatorio},t()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${C(e.mes,e.ano)}</span>
          <kk-badge variant=${r?`success`:`warning`} pill>
            ${r?i.ministerio.enviado:i.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${i.ministerio.resumoRelatorio(a,e.participacao===1,e.estudos,D(e.tipo_publicador)?i.ministerio.sufixoHoras(e.horas):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="share"
          label=${i.ministerio.compartilhar}
          @click=${()=>void ge(e)}
        ></kk-icon-button>
        <kk-icon-button
          name=${r?`mail-check`:`send`}
          label=${r?i.ministerio.marcarPendente:i.ministerio.marcarEnviado}
          @click=${async()=>{await m(e),r||await J(e),await U()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${i.ministerio.excluirRelatorio}
          @click=${()=>void _e(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function ye(){if(R!==null)return he(R);let e=T(N);return e.length===0?n`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${i.ministerio.semRelatorios}</p>
      </div>
    `:n`<div class="registros">${e.map(e=>ve(e))}</div>`}function Z(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function be(e){if(e.nome.trim()===``){s(i.ministerio.informeNome,`warning`);return}await k({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:ne(e.horario),notas:e.notas}),z=null,s(i.ministerio.estudoSalvo),await U()}function xe(e){return n`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?i.ministerio.editarEstudo:i.ministerio.novoEstudo}
      </h2>

      <kk-input
        label=${i.ministerio.nome}
        .value=${e.nome}
        @kk-input=${t=>{z={...e,nome:t.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${i.ministerio.contato}
          placeholder=${i.ministerio.contatoPlaceholder}
          .value=${e.contato}
          @kk-input=${t=>{z={...e,contato:t.target.value}}}
        ></kk-input>
        <kk-input
          label=${i.ministerio.endereco}
          .value=${e.endereco}
          @kk-input=${t=>{z={...e,endereco:t.target.value}}}
        ></kk-input>
      </div>

      <kk-input
        label=${i.ministerio.publicacaoAtual}
        placeholder=${i.ministerio.publicacaoPlaceholder}
        .value=${e.publicacao}
        @kk-input=${t=>{z={...e,publicacao:t.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${i.ministerio.diaSemana}
          .value=${e.dia}
          @kk-change=${t=>{z={...e,dia:t.target.value}}}
        >
          <kk-option value="">${i.ministerio.escolhaDia}</kk-option>
          ${ee.map(e=>n`<kk-option value=${e}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${i.ministerio.horario}
          .value=${e.horario}
          @kk-change=${t=>{z={...e,horario:t.target.value}}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${i.ministerio.notas}
        .value=${e.notas}
        @kk-input=${t=>{z={...e,notas:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void be(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{z=null,t()}}
        >
          ${i.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Se(e){await a({titulo:i.ministerio.excluirEstudo,texto:i.ministerio.excluirEstudoTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ae(e.id,F),s(i.ministerio.estudoExcluido),await U())}function Ce(r){let a=le(F,r),s=a.tom===`frio`||a.tom===`nunca`,c=E(F,r.id)[0],l=te(r);return n`
    <div class="registro" data-status=${s?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${l} 15%, transparent);color:${l}`}
      >
        ${x(r)}
      </span>

      <button class="registro__alvo" @click=${()=>e(`ministerio/estudos/${r.id??``}`)}>
        <span class="registro__topo">
          <span class="registro__titulo">
            ${r.nome===``?i.ministerio.semNome:r.nome}
          </span>
          ${s?n`
                <kk-badge variant="danger" pill>
                  <kk-icon name="temperature-snow"></kk-icon>${i.ministerio.seloEsfriando}
                </kk-badge>
              `:o}
        </span>

        ${r.publicacao_atual===``?o:n`
              <span class="registro__resumo">
                <kk-icon name="book"></kk-icon>${r.publicacao_atual}
              </span>
            `}
        ${r.dia_semana===``?o:n`
              <span class="registro__resumo">
                <kk-icon name="calendar-week"></kk-icon>
                ${r.dia_semana} · ${g(r.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${a.tom}>
          <kk-icon name="history"></kk-icon>${i.ministerio.ultimoEstudo} ${a.texto}
        </span>

        ${c===void 0?o:n`
              <span class="registro__parou">
                <kk-icon name="bookmark"></kk-icon>${i.ministerio.parouEm} ${c.onde_parou}
              </span>
            `}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${i.ministerio.editarEstudo}
          @click=${()=>{z={id:r.id??0,nome:r.nome,contato:r.contato,endereco:r.endereco,publicacao:r.publicacao_atual,dia:r.dia_semana,horario:g(r.horario_minutos),notas:r.notas},t()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${i.ministerio.compartilhar}
          @click=${()=>void u(i.ministerio.estudoDe(r.nome),se(r,F))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${i.ministerio.excluirEstudo}
          @click=${()=>void Se(r)}
        ></kk-icon-button>
      </div>
    </div>
  `}function we(){if(z!==null)return xe(z);let e=ie(P,F,L);return n`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${i.ministerio.buscarEstudos}
        .value=${L}
        @kk-input=${e=>{L=e.target.value,t()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?n`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${P.length===0?i.ministerio.semEstudos:i.ministerio.semEstudosFiltro}</p>
          </div>
        `:n`<div class="registros">${e.map(e=>Ce(e))}</div>`}
  `}function Q(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:P.find(e=>e.id===t)}async function Te(e){if(e.ondeParou.trim()===``){B={...e,erro:!0},t();return}await A({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():c(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),B=null,s(i.ministerio.registroSalvo),await U()}function Ee(e){return n`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?i.ministerio.editarRegistro:i.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${i.ministerio.data}
        .value=${e.data}
        @kk-change=${t=>{B={...e,data:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${i.ministerio.ondeParou}
        placeholder=${i.ministerio.ondeParouPlaceholder}
        .value=${e.ondeParou}
        help-text=${e.erro?i.ministerio.informeOndeParou:``}
        @kk-input=${t=>{B={...e,ondeParou:t.target.value,erro:!1}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${i.ministerio.comentario}
        placeholder=${i.ministerio.comentarioPlaceholder}
        .value=${e.comentario}
        @kk-input=${t=>{B={...e,comentario:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Te(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{B=null,t()}}
        >
          ${i.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function De(e){await a({titulo:i.ministerio.excluirRegistro,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await oe(e.id),s(i.ministerio.registroExcluido),await U())}function Oe(e){if(B!==null)return Ee(B);let a=E(F,e.id);return a.length===0?n`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="history"></kk-icon>
        <p>${i.ministerio.semRegistros}</p>
      </div>
    `:n`
    <div class="registros">
      ${a.map(e=>n`
          <div class="sessao">
            <span class="sessao__texto">
              <span class="sessao__data">${r(e.registrado_em)}</span>
              <span class="sessao__parou">
                <kk-icon name="bookmark"></kk-icon>${e.onde_parou}
              </span>
              ${e.comentario===``?o:n`<span class="sessao__comentario">${e.comentario}</span>`}
            </span>

            <div class="registro__acoes">
              <kk-icon-button
                name="pencil"
                label=${i.acoes.editar}
                @click=${()=>{B={id:e.id??0,estudoId:e.estudo_id,data:e.registrado_em===0?l():l(e.registrado_em),ondeParou:e.onde_parou,comentario:e.comentario,erro:!1},t()}}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${i.ministerio.excluirRegistro}
                @click=${()=>void De(e)}
              ></kk-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var ke={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let t=$(e);if(t===`relatorios`)return i.ministerio.atalhoRelatorios;if(t===`estudos`)return i.ministerio.atalhoEstudos;if(t===`linha`)return Q(e)?.nome??i.ministerio.linhaDoTempo},acoes(e){let r=$(e);if(r===`relatorios`&&R===null)return n`
        <kk-icon-button
          name="plus"
          label=${i.ministerio.novoRelatorio}
          @click=${()=>{R=X(),t()}}
        ></kk-icon-button>
      `;if(r===`estudos`&&z===null)return n`
        <kk-icon-button
          name="plus"
          label=${i.ministerio.novoEstudo}
          @click=${()=>{z=Z(),t()}}
        ></kk-icon-button>
      `;if(r===`linha`&&B===null){let r=Q(e);return r?.id===void 0?void 0:n`
        <kk-icon-button
          name="plus"
          label=${i.ministerio.registrarEstudo}
          @click=${()=>{B={id:0,estudoId:r.id??0,data:l(),ondeParou:``,comentario:``,erro:!1},t()}}
        ></kk-icon-button>
      `}},conteudo(t){if(W(),!V)return n`<div class="carregando"><kk-spinner></kk-spinner></div>`;let r=$(t);if(r===`relatorios`)return ye();if(r===`estudos`)return we();if(r===`linha`){let r=Q(t);return r===void 0?(e(`ministerio/estudos`),n`<div class="carregando"><kk-spinner></kk-spinner></div>`):Oe(r)}return pe()}};export{ke as telaMinisterio};