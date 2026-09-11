import{E as e,S as t,T as n,_ as r,b as i,ct as a,et as o,h as s,it as c,ot as l,tt as u,u as d}from"./index-EsbOy3qu.js";import{t as f}from"./compartilhar-DMC9J1_d.js";import{DIAS_DA_SEMANA as p,MESES as m,TIPOS_PUBLICADOR as h,ajustado as ee,alternarEnviado as te,carregar as g,comoHorario as _,contadorTemAtividade as v,contadorZerado as y,corDoEstudo as b,deHorario as x,esfriando as S,estudosVisiveis as ne,excluirEstudo as re,excluirRegistro as ie,excluirRelatorio as ae,horasDoContador as oe,iniciais as se,lembreteDoRelatorio as C,mesEAno as w,observacoesDoContador as T,ordenarRelatorios as E,registrosDoEstudo as D,relataHoras as O,salvarContador as k,salvarEstudo as ce,salvarRegistro as le,salvarRelatorio as A,textoDoEstudo as ue,textoDoRelatorio as de,ultimoRelativo as fe,ultimoRelatorio as j}from"./dados-BbZtaqn0.js";var M=[],N=[],P=[],F=null,I=``,L=null,R=null,z=null,B=!1,V=!1,H=null;async function U(){let e=await g();M=e.relatorios,N=e.estudos,P=e.registros,F=e.contador,o()}function W(){B||V||H!==null||(V=!0,(async()=>{try{await U(),B=!0}catch(t){console.error(`ministerio: a carga falhou.`,t),H=e(t)}finally{V=!1,o()}})())}function pe(){H=null,W(),o()}function G(e,t,n,r){return a`
    <button class="atalho" @click=${()=>u(r)}>
      <kk-icon class="atalho__icone" name=${e}></kk-icon>
      <span class="atalho__rotulo">${t}</span>
      <span class="atalho__resumo">${n}</span>
    </button>
  `}function K(e,t,n,r,i,o){return a`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${t}></kk-icon>${n}</span>
      <kk-icon-button
        name="minus"
        label=${c.ministerio.diminuir(n)}
        @click=${()=>void q(e,-r)}
      ></kk-icon-button>
      <span class="tally__valor">${i}</span>
      <kk-icon-button
        name="plus"
        label=${c.ministerio.aumentar(n)}
        @click=${()=>void q(e,r)}
      ></kk-icon-button>
      ${o??l}
    </div>
  `}async function q(e,t){F!==null&&(F=await k(ee(F,e,t)),o())}async function me(){F!==null&&await s({titulo:c.ministerio.zerar,texto:c.ministerio.zerarTexto,rotuloConfirmar:c.ministerio.zerar,variante:`warning`})&&F!==null&&(F=await k(y(F)),o())}async function J(e){F!==null&&F.mes===e.mes&&F.ano===e.ano&&v(F)&&(F=await k(y(F)))}function he(e){let t=v(e);return a`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${c.ministerio.contadores}
          <small>${w(e.mes,e.ano)}</small>
        </span>
        ${t?a`
              <kk-icon-button
                name="rotate-clockwise"
                label=${c.ministerio.zerar}
                @click=${()=>void me()}
              ></kk-icon-button>
            `:l}
      </div>

      ${K(`minutos`,`clock`,c.ministerio.tempo,15,_(e.minutos),a`
          <kk-button size="small" outline @click=${()=>void q(`minutos`,60)}>
            ${c.ministerio.maisUmaHora}
          </kk-button>
        `)}
      ${K(`estudos`,`book`,c.ministerio.estudos,1,String(e.estudos))}
      ${K(`revisitas`,`rotate`,c.ministerio.revisitas,1,String(e.revisitas))}
      ${K(`publicacoes`,`books`,c.ministerio.publicacoes,1,String(e.publicacoes))}
      ${K(`videos`,`player-play`,c.ministerio.videos,1,String(e.videos))}

      <kk-button variant="primary" class="tally__gerar" @click=${Y}>
        <kk-icon slot="prefix" name="file-text"></kk-icon>${c.ministerio.gerarRelatorio}
      </kk-button>
    </div>
  `}function Y(){F!==null&&(L={id:0,mes:F.mes,ano:F.ano,horas:oe(F.minutos),estudos:F.estudos,participacao:+!!v(F),tipo:j(M)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:T(F),enviado:0,dataEnvio:0},u(`ministerio/relatorios`))}function ge(){let e=C(M);if(e!==null){if(F!==null&&F.mes===e.mes&&F.ano===e.ano){Y();return}L={...X(),mes:e.mes,ano:e.ano},u(`ministerio/relatorios`)}}function _e(){let e=S(N,P),t=C(M),n=j(M);return a`
    ${e.length===0?l:a`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="temperature-snow"></kk-icon>
            ${c.ministerio.esfriando(e.length,15)}
            <a href="#/ministerio/estudos">${c.ministerio.verEstudos}</a>
          </kk-alert>
        `}

    ${t===null?l:a`
          <kk-alert variant="warning" open>
            <kk-icon slot="icon" name="bell"></kk-icon>
            ${c.ministerio.lembrete(w(t.mes,t.ano),t.existe)}
            <kk-button size="small" variant="warning" @click=${ge}>
              ${c.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${G(`file-text`,c.ministerio.atalhoRelatorios,c.ministerio.atalhoRelatoriosSub(M.length),`ministerio/relatorios`)}
      ${G(`book`,c.ministerio.atalhoEstudos,c.ministerio.atalhoEstudosSub(N.length),`ministerio/estudos`)}
      ${G(`trending-up`,c.ministerio.atalhoServico,c.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${F===null?l:he(F)}

    ${n===null?l:a`
          <div class="ultimo">
            <span class="ultimo__rotulo">${c.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${w(n.mes,n.ano)}
                <small>
                  ${n.participacao===1?c.ministerio.participou:c.ministerio.naoParticipou}
                  · ${c.ministerio.estudosDoRelatorio(n.estudos)}
                </small>
              </span>
              <kk-badge variant=${n.relatorio_enviado===1?`success`:`neutral`} pill>
                ${n.relatorio_enviado===1?c.ministerio.enviado:c.ministerio.pendente}
              </kk-badge>
            </div>
          </div>
        `}
  `}function X(){let e=new Date;return{id:0,mes:e.getMonth()+1,ano:e.getFullYear(),horas:0,estudos:0,participacao:1,tipo:`publicador`,metaHoras:0,observacoes:``,enviado:0,dataEnvio:0}}async function ve(e){await A({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)),estudos:Math.max(0,Number(e.estudos)),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),L=null,d(c.ministerio.relatorioSalvo),await U()}function ye(e){return a`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?c.ministerio.editarRelatorio:c.ministerio.novoRelatorio}
      </h2>

      <div class="formulario__par">
        <kk-select
          label=${c.ministerio.mes}
          .value=${String(e.mes)}
          @kk-change=${t=>{L={...e,mes:Number(t.target.value)}}}
        >
          ${m.map((e,t)=>t===0?l:a`<kk-option value=${t}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="number"
          label=${c.ministerio.ano}
          .value=${String(e.ano)}
          @kk-input=${t=>{L={...e,ano:Number(t.target.value)}}}
        ></kk-input>
      </div>

      <kk-select
        label=${c.ministerio.tipoPublicador}
        .value=${e.tipo}
        @kk-change=${t=>{L={...e,tipo:t.target.value},o()}}
      >
        ${Object.entries(h).map(([e,t])=>a`<kk-option value=${e}>${t}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${e.participacao===1}
        @kk-change=${t=>{L={...e,participacao:+!!t.target.checked}}}
      >
        ${c.ministerio.participacao}
      </kk-switch>

      ${O(e.tipo)?a`
            <div class="formulario__par">
              <kk-input
                type="number"
                step="0.5"
                min="0"
                label=${c.ministerio.horas}
                .value=${String(e.horas)}
                @kk-input=${t=>{L={...e,horas:Number(t.target.value)}}}
              ></kk-input>
              <kk-input
                type="number"
                min="0"
                label=${c.ministerio.metaHoras}
                .value=${String(e.metaHoras)}
                @kk-input=${t=>{L={...e,metaHoras:Number(t.target.value)}}}
              ></kk-input>
            </div>
          `:l}

      <kk-input
        type="number"
        min="0"
        label=${c.ministerio.estudosBiblicos}
        .value=${String(e.estudos)}
        @kk-input=${t=>{L={...e,estudos:Number(t.target.value)}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${c.ministerio.observacoes}
        .value=${e.observacoes}
        @kk-input=${t=>{L={...e,observacoes:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void ve(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,o()}}
        >
          ${c.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function be(e){await f(c.ministerio.relatorioDe(w(e.mes,e.ano)),de(e)),e.relatorio_enviado!==1&&(await A({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await J(e),await U())}async function xe(e){await s({titulo:c.ministerio.excluirRelatorio,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ae(e.id),d(c.ministerio.relatorioExcluido),await U())}function Se(e){let t=e.relatorio_enviado===1,n=h[e.tipo_publicador]??e.tipo_publicador;return a`
    <div class="registro" data-status=${t?`enviado`:`pendente`}>
      <span class="registro__avatar">${(m[e.mes]??``).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{L={id:e.id??0,mes:e.mes,ano:e.ano,horas:e.horas,estudos:e.estudos,participacao:e.participacao,tipo:e.tipo_publicador,metaHoras:e.meta_horas,observacoes:e.notas_publicacoes,enviado:e.relatorio_enviado,dataEnvio:e.data_envio_relatorio},o()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${w(e.mes,e.ano)}</span>
          <kk-badge variant=${t?`success`:`warning`} pill>
            ${t?c.ministerio.enviado:c.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${c.ministerio.resumoRelatorio(n,e.participacao===1,e.estudos,O(e.tipo_publicador)?c.ministerio.sufixoHoras(e.horas):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="share"
          label=${c.ministerio.compartilhar}
          @click=${()=>void be(e)}
        ></kk-icon-button>
        <kk-icon-button
          name=${t?`mail-check`:`send`}
          label=${t?c.ministerio.marcarPendente:c.ministerio.marcarEnviado}
          @click=${async()=>{await te(e),t||await J(e),await U()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${c.ministerio.excluirRelatorio}
          @click=${()=>void xe(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Ce(){if(L!==null)return ye(L);let e=E(M);return e.length===0?a`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${c.ministerio.semRelatorios}</p>
      </div>
    `:a`<div class="registros">${e.map(e=>Se(e))}</div>`}function we(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function Te(e){if(e.nome.trim()===``){d(c.ministerio.informeNome,`warning`);return}await ce({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:x(e.horario),notas:e.notas}),R=null,d(c.ministerio.estudoSalvo),await U()}function Ee(e){return a`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?c.ministerio.editarEstudo:c.ministerio.novoEstudo}
      </h2>

      <kk-input
        label=${c.ministerio.nome}
        .value=${e.nome}
        @kk-input=${t=>{R={...e,nome:t.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${c.ministerio.contato}
          placeholder=${c.ministerio.contatoPlaceholder}
          .value=${e.contato}
          @kk-input=${t=>{R={...e,contato:t.target.value}}}
        ></kk-input>
        <kk-input
          label=${c.ministerio.endereco}
          .value=${e.endereco}
          @kk-input=${t=>{R={...e,endereco:t.target.value}}}
        ></kk-input>
      </div>

      <kk-input
        label=${c.ministerio.publicacaoAtual}
        placeholder=${c.ministerio.publicacaoPlaceholder}
        .value=${e.publicacao}
        @kk-input=${t=>{R={...e,publicacao:t.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${c.ministerio.diaSemana}
          .value=${e.dia}
          @kk-change=${t=>{R={...e,dia:t.target.value}}}
        >
          <kk-option value="">${c.ministerio.escolhaDia}</kk-option>
          ${p.map(e=>a`<kk-option value=${e}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${c.ministerio.horario}
          .value=${e.horario}
          @kk-change=${t=>{R={...e,horario:t.target.value}}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${c.ministerio.notas}
        .value=${e.notas}
        @kk-input=${t=>{R={...e,notas:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Te(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,o()}}
        >
          ${c.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function De(e){await s({titulo:c.ministerio.excluirEstudo,texto:c.ministerio.excluirEstudoTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await re(e.id,P),d(c.ministerio.estudoExcluido),await U())}function Oe(e){let t=fe(P,e),n=t.tom===`frio`||t.tom===`nunca`,r=D(P,e.id)[0],i=b(e);return a`
    <div class="registro" data-status=${n?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${i} 15%, transparent);color:${i}`}
      >
        ${se(e)}
      </span>

      <button class="registro__alvo" @click=${()=>u(`ministerio/estudos/${e.id??``}`)}>
        <span class="registro__topo">
          <span class="registro__titulo">
            ${e.nome===``?c.ministerio.semNome:e.nome}
          </span>
          ${n?a`
                <kk-badge variant="danger" pill>
                  <kk-icon name="temperature-snow"></kk-icon>${c.ministerio.seloEsfriando}
                </kk-badge>
              `:l}
        </span>

        ${e.publicacao_atual===``?l:a`
              <span class="registro__resumo">
                <kk-icon name="book"></kk-icon>${e.publicacao_atual}
              </span>
            `}
        ${e.dia_semana===``?l:a`
              <span class="registro__resumo">
                <kk-icon name="calendar-week"></kk-icon>
                ${e.dia_semana} · ${_(e.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${t.tom}>
          <kk-icon name="history"></kk-icon>${c.ministerio.ultimoEstudo} ${t.texto}
        </span>

        ${r===void 0?l:a`
              <span class="registro__parou">
                <kk-icon name="bookmark"></kk-icon>${c.ministerio.parouEm} ${r.onde_parou}
              </span>
            `}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${c.ministerio.editarEstudo}
          @click=${()=>{R={id:e.id??0,nome:e.nome,contato:e.contato,endereco:e.endereco,publicacao:e.publicacao_atual,dia:e.dia_semana,horario:_(e.horario_minutos),notas:e.notas},o()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${c.ministerio.compartilhar}
          @click=${()=>void f(c.ministerio.estudoDe(e.nome),ue(e,P))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${c.ministerio.excluirEstudo}
          @click=${()=>void De(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function ke(){if(R!==null)return Ee(R);let e=ne(N,P,I);return a`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${c.ministerio.buscarEstudos}
        .value=${I}
        @kk-input=${e=>{I=e.target.value,o()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${N.length===0?c.ministerio.semEstudos:c.ministerio.semEstudosFiltro}</p>
          </div>
        `:a`<div class="registros">${e.map(e=>Oe(e))}</div>`}
  `}function Z(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:N.find(e=>e.id===t)}async function Ae(e){if(e.ondeParou.trim()===``){z={...e,erro:!0},o();return}await le({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():t(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),z=null,d(c.ministerio.registroSalvo),await U()}function Q(e){return a`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?c.ministerio.editarRegistro:c.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${c.ministerio.data}
        .value=${e.data}
        @kk-change=${t=>{z={...e,data:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${c.ministerio.ondeParou}
        placeholder=${c.ministerio.ondeParouPlaceholder}
        .value=${e.ondeParou}
        help-text=${e.erro?c.ministerio.informeOndeParou:``}
        @kk-input=${t=>{z={...e,ondeParou:t.target.value,erro:!1}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${c.ministerio.comentario}
        placeholder=${c.ministerio.comentarioPlaceholder}
        .value=${e.comentario}
        @kk-input=${t=>{z={...e,comentario:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Ae(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{z=null,o()}}
        >
          ${c.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function je(e){await s({titulo:c.ministerio.excluirRegistro,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await ie(e.id),d(c.ministerio.registroExcluido),await U())}function Me(e){if(z!==null)return Q(z);let t=D(P,e.id);return t.length===0?a`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="history"></kk-icon>
        <p>${c.ministerio.semRegistros}</p>
      </div>
    `:a`
    <div class="registros">
      ${t.map(e=>a`
          <div class="sessao">
            <span class="sessao__texto">
              <span class="sessao__data">${r(e.registrado_em)}</span>
              <span class="sessao__parou">
                <kk-icon name="bookmark"></kk-icon>${e.onde_parou}
              </span>
              ${e.comentario===``?l:a`<span class="sessao__comentario">${e.comentario}</span>`}
            </span>

            <div class="registro__acoes">
              <kk-icon-button
                name="pencil"
                label=${c.acoes.editar}
                @click=${()=>{z={id:e.id??0,estudoId:e.estudo_id,data:e.registrado_em===0?i():i(e.registrado_em),ondeParou:e.onde_parou,comentario:e.comentario,erro:!1},o()}}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${c.ministerio.excluirRegistro}
                @click=${()=>void je(e)}
              ></kk-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var Ne={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let t=$(e);if(t===`relatorios`)return c.ministerio.atalhoRelatorios;if(t===`estudos`)return c.ministerio.atalhoEstudos;if(t===`linha`)return Z(e)?.nome??c.ministerio.linhaDoTempo},acoes(e){let t=$(e);if(t===`relatorios`&&L===null)return a`
        <kk-icon-button
          name="plus"
          label=${c.ministerio.novoRelatorio}
          @click=${()=>{L=X(),o()}}
        ></kk-icon-button>
      `;if(t===`estudos`&&R===null)return a`
        <kk-icon-button
          name="plus"
          label=${c.ministerio.novoEstudo}
          @click=${()=>{R=we(),o()}}
        ></kk-icon-button>
      `;if(t===`linha`&&z===null){let t=Z(e);return t?.id===void 0?void 0:a`
        <kk-icon-button
          name="plus"
          label=${c.ministerio.registrarEstudo}
          @click=${()=>{z={id:0,estudoId:t.id??0,data:i(),ondeParou:``,comentario:``,erro:!1},o()}}
        ></kk-icon-button>
      `}},conteudo(e){if(W(),H!==null)return n(H,pe);if(!B)return a`<div class="carregando"><kk-spinner></kk-spinner></div>`;let t=$(e);if(t===`relatorios`)return Ce();if(t===`estudos`)return ke();if(t===`linha`){let t=Z(e);return t===void 0?(u(`ministerio/estudos`),a`<div class="carregando"><kk-spinner></kk-spinner></div>`):Me(t)}return _e()}};export{Ne as telaMinisterio};