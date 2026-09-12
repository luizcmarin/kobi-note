import{K as e,Y as t,Z as n,ct as r,et as i,g as a,it as o,m as s,ot as c,tt as l,v as ee,y as te}from"./index-CFqbq_HS.js";import{t as u}from"./compartilhar-B4R2hJiR.js";import{DIAS_DA_SEMANA as ne,MESES as d,TIPOS_PUBLICADOR as f,ajustado as re,alternarEnviado as p,carregar as m,comoHorario as h,contadorTemAtividade as g,contadorZerado as _,corDoEstudo as ie,deHorario as ae,esfriando as oe,estudosVisiveis as v,excluirEstudo as y,excluirRegistro as b,excluirRelatorio as x,horasDoContador as S,iniciais as C,lembreteDoRelatorio as w,mesEAno as T,observacoesDoContador as E,ordenarRelatorios as se,registrosDoEstudo as D,relataHoras as O,salvarContador as k,salvarEstudo as ce,salvarRegistro as le,salvarRelatorio as A,textoDoEstudo as ue,textoDoRelatorio as de,ultimoRelativo as fe,ultimoRelatorio as j}from"./dados-DQYsoAr6.js";var M=[],N=[],P=[],F=null,I=``,L=null,R=null,z=null,B=!1,V=!1,H=null;async function U(){let e=await m();M=e.relatorios,N=e.estudos,P=e.registros,F=e.contador,i()}function W(){B||V||H!==null||(V=!0,(async()=>{try{await U(),B=!0}catch(e){console.error(`ministerio: a carga falhou.`,e),H=te(e)}finally{V=!1,i()}})())}function pe(){H=null,W(),i()}function G(e,t,n,i){return r`
    <button class="atalho" @click=${()=>l(i)}>
      <kk-icon class="atalho__icone" name=${e}></kk-icon>
      <span class="atalho__rotulo">${t}</span>
      <span class="atalho__resumo">${n}</span>
    </button>
  `}function K(e,t,n,i,a,s){return r`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${t}></kk-icon>${n}</span>
      <kk-icon-button
        name="minus"
        label=${o.ministerio.diminuir(n)}
        @click=${()=>void q(e,-i)}
      ></kk-icon-button>
      <span class="tally__valor">${a}</span>
      <kk-icon-button
        name="plus"
        label=${o.ministerio.aumentar(n)}
        @click=${()=>void q(e,i)}
      ></kk-icon-button>
      ${s??c}
    </div>
  `}async function q(e,t){F!==null&&(F=await k(re(F,e,t)),i())}async function me(){F!==null&&await a({titulo:o.ministerio.zerar,texto:o.ministerio.zerarTexto,rotuloConfirmar:o.ministerio.zerar,variante:`warning`})&&F!==null&&(F=await k(_(F)),i())}async function J(e){F!==null&&F.mes===e.mes&&F.ano===e.ano&&g(F)&&(F=await k(_(F)))}function he(e){let t=g(e);return r`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${o.ministerio.contadores}
          <small>${T(e.mes,e.ano)}</small>
        </span>
        ${t?r`
              <kk-icon-button
                name="rotate-clockwise"
                label=${o.ministerio.zerar}
                @click=${()=>void me()}
              ></kk-icon-button>
            `:c}
      </div>

      ${K(`minutos`,`clock`,o.ministerio.tempo,15,h(e.minutos),r`
          <kk-button size="small" outline @click=${()=>void q(`minutos`,60)}>
            ${o.ministerio.maisUmaHora}
          </kk-button>
        `)}
      ${K(`estudos`,`book`,o.ministerio.estudos,1,String(e.estudos))}
      ${K(`revisitas`,`rotate`,o.ministerio.revisitas,1,String(e.revisitas))}
      ${K(`publicacoes`,`books`,o.ministerio.publicacoes,1,String(e.publicacoes))}
      ${K(`videos`,`player-play`,o.ministerio.videos,1,String(e.videos))}

      <kk-button variant="primary" class="tally__gerar" @click=${Y}>
        <kk-icon slot="prefix" name="file-text"></kk-icon>${o.ministerio.gerarRelatorio}
      </kk-button>
    </div>
  `}function Y(){F!==null&&(L={id:0,mes:F.mes,ano:F.ano,horas:S(F.minutos),estudos:F.estudos,participacao:+!!g(F),tipo:j(M)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:E(F),enviado:0,dataEnvio:0},l(`ministerio/relatorios`))}function ge(){let e=w(M);if(e!==null){if(F!==null&&F.mes===e.mes&&F.ano===e.ano){Y();return}L={...X(),mes:e.mes,ano:e.ano},l(`ministerio/relatorios`)}}function _e(){let e=oe(N,P),t=w(M),n=j(M);return r`
    ${e.length===0?c:r`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="temperature-snow"></kk-icon>
            ${o.ministerio.esfriando(e.length,15)}
            <a href="#/ministerio/estudos">${o.ministerio.verEstudos}</a>
          </kk-alert>
        `}

    ${t===null?c:r`
          <kk-alert variant="warning" open>
            <kk-icon slot="icon" name="bell"></kk-icon>
            ${o.ministerio.lembrete(T(t.mes,t.ano),t.existe)}
            <kk-button size="small" variant="warning" @click=${ge}>
              ${o.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${G(`file-text`,o.ministerio.atalhoRelatorios,o.ministerio.atalhoRelatoriosSub(M.length),`ministerio/relatorios`)}
      ${G(`book`,o.ministerio.atalhoEstudos,o.ministerio.atalhoEstudosSub(N.length),`ministerio/estudos`)}
      ${G(`trending-up`,o.ministerio.atalhoServico,o.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${F===null?c:he(F)}

    ${n===null?c:r`
          <div class="ultimo">
            <span class="ultimo__rotulo">${o.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${T(n.mes,n.ano)}
                <small>
                  ${n.participacao===1?o.ministerio.participou:o.ministerio.naoParticipou}
                  · ${o.ministerio.estudosDoRelatorio(n.estudos)}
                </small>
              </span>
              <kk-badge variant=${n.relatorio_enviado===1?`success`:`neutral`} pill>
                ${n.relatorio_enviado===1?o.ministerio.enviado:o.ministerio.pendente}
              </kk-badge>
            </div>
          </div>
        `}
  `}function X(){let e=new Date;return{id:0,mes:e.getMonth()+1,ano:e.getFullYear(),horas:0,estudos:0,participacao:1,tipo:`publicador`,metaHoras:0,observacoes:``,enviado:0,dataEnvio:0}}async function ve(e){await A({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)),estudos:Math.max(0,Number(e.estudos)),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),L=null,s(o.ministerio.relatorioSalvo),await U()}function ye(e){return r`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?o.ministerio.editarRelatorio:o.ministerio.novoRelatorio}
      </h2>

      <div class="formulario__par">
        <kk-select
          label=${o.ministerio.mes}
          .value=${String(e.mes)}
          @kk-change=${t=>{L={...e,mes:Number(t.target.value)}}}
        >
          ${d.map((e,t)=>t===0?c:r`<kk-option value=${t}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="number"
          label=${o.ministerio.ano}
          .value=${String(e.ano)}
          @kk-input=${t=>{L={...e,ano:Number(t.target.value)}}}
        ></kk-input>
      </div>

      <kk-select
        label=${o.ministerio.tipoPublicador}
        .value=${e.tipo}
        @kk-change=${t=>{L={...e,tipo:t.target.value},i()}}
      >
        ${Object.entries(f).map(([e,t])=>r`<kk-option value=${e}>${t}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${e.participacao===1}
        @kk-change=${t=>{L={...e,participacao:+!!t.target.checked}}}
      >
        ${o.ministerio.participacao}
      </kk-switch>

      ${O(e.tipo)?r`
            <div class="formulario__par">
              <kk-input
                type="number"
                step="0.5"
                min="0"
                label=${o.ministerio.horas}
                .value=${String(e.horas)}
                @kk-input=${t=>{L={...e,horas:Number(t.target.value)}}}
              ></kk-input>
              <kk-input
                type="number"
                min="0"
                label=${o.ministerio.metaHoras}
                .value=${String(e.metaHoras)}
                @kk-input=${t=>{L={...e,metaHoras:Number(t.target.value)}}}
              ></kk-input>
            </div>
          `:c}

      <kk-input
        type="number"
        min="0"
        label=${o.ministerio.estudosBiblicos}
        .value=${String(e.estudos)}
        @kk-input=${t=>{L={...e,estudos:Number(t.target.value)}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${o.ministerio.observacoes}
        .value=${e.observacoes}
        @kk-input=${t=>{L={...e,observacoes:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void ve(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,i()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function be(e){await u(o.ministerio.relatorioDe(T(e.mes,e.ano)),de(e)),e.relatorio_enviado!==1&&(await A({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await J(e),await U())}async function xe(e){await a({titulo:o.ministerio.excluirRelatorio,texto:o.acervo.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await x(e.id),s(o.ministerio.relatorioExcluido),await U())}function Se(e){let t=e.relatorio_enviado===1,n=f[e.tipo_publicador]??e.tipo_publicador;return r`
    <div class="registro" data-status=${t?`enviado`:`pendente`}>
      <span class="registro__avatar">${(d[e.mes]??``).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{L={id:e.id??0,mes:e.mes,ano:e.ano,horas:e.horas,estudos:e.estudos,participacao:e.participacao,tipo:e.tipo_publicador,metaHoras:e.meta_horas,observacoes:e.notas_publicacoes,enviado:e.relatorio_enviado,dataEnvio:e.data_envio_relatorio},i()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${T(e.mes,e.ano)}</span>
          <kk-badge variant=${t?`success`:`warning`} pill>
            ${t?o.ministerio.enviado:o.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${o.ministerio.resumoRelatorio(n,e.participacao===1,e.estudos,O(e.tipo_publicador)?o.ministerio.sufixoHoras(e.horas):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="share"
          label=${o.ministerio.compartilhar}
          @click=${()=>void be(e)}
        ></kk-icon-button>
        <kk-icon-button
          name=${t?`mail-check`:`send`}
          label=${t?o.ministerio.marcarPendente:o.ministerio.marcarEnviado}
          @click=${async()=>{await p(e),t||await J(e),await U()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${o.ministerio.excluirRelatorio}
          @click=${()=>void xe(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Ce(){if(L!==null)return ye(L);let e=se(M);return e.length===0?r`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${o.ministerio.semRelatorios}</p>
      </div>
    `:r`<div class="registros">${e.map(e=>Se(e))}</div>`}function we(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function Z(e){if(e.nome.trim()===``){s(o.ministerio.informeNome,`warning`);return}await ce({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:ae(e.horario),notas:e.notas}),R=null,s(o.ministerio.estudoSalvo),await U()}function Te(e){return r`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?o.ministerio.editarEstudo:o.ministerio.novoEstudo}
      </h2>

      <kk-input
        label=${o.ministerio.nome}
        .value=${e.nome}
        @kk-input=${t=>{R={...e,nome:t.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${o.ministerio.contato}
          placeholder=${o.ministerio.contatoPlaceholder}
          .value=${e.contato}
          @kk-input=${t=>{R={...e,contato:t.target.value}}}
        ></kk-input>
        <kk-input
          label=${o.ministerio.endereco}
          .value=${e.endereco}
          @kk-input=${t=>{R={...e,endereco:t.target.value}}}
        ></kk-input>
      </div>

      <kk-input
        label=${o.ministerio.publicacaoAtual}
        placeholder=${o.ministerio.publicacaoPlaceholder}
        .value=${e.publicacao}
        @kk-input=${t=>{R={...e,publicacao:t.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${o.ministerio.diaSemana}
          .value=${e.dia}
          @kk-change=${t=>{R={...e,dia:t.target.value}}}
        >
          <kk-option value="">${o.ministerio.escolhaDia}</kk-option>
          ${ne.map(e=>r`<kk-option value=${e}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${o.ministerio.horario}
          .value=${e.horario}
          @kk-change=${t=>{R={...e,horario:t.target.value}}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${o.ministerio.notas}
        .value=${e.notas}
        @kk-input=${t=>{R={...e,notas:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Z(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,i()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Ee(e){await a({titulo:o.ministerio.excluirEstudo,texto:o.ministerio.excluirEstudoTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await y(e.id,P),s(o.ministerio.estudoExcluido),await U())}function De(e){let t=fe(P,e),n=t.tom===`frio`||t.tom===`nunca`,a=D(P,e.id)[0],s=ie(e);return r`
    <div class="registro" data-status=${n?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${s} 15%, transparent);color:${s}`}
      >
        ${C(e)}
      </span>

      <button class="registro__alvo" @click=${()=>l(`ministerio/estudos/${e.id??``}`)}>
        <span class="registro__topo">
          <span class="registro__titulo">
            ${e.nome===``?o.ministerio.semNome:e.nome}
          </span>
          ${n?r`
                <kk-badge variant="danger" pill>
                  <kk-icon name="temperature-snow"></kk-icon>${o.ministerio.seloEsfriando}
                </kk-badge>
              `:c}
        </span>

        ${e.publicacao_atual===``?c:r`
              <span class="registro__resumo">
                <kk-icon name="book"></kk-icon>${e.publicacao_atual}
              </span>
            `}
        ${e.dia_semana===``?c:r`
              <span class="registro__resumo">
                <kk-icon name="calendar-week"></kk-icon>
                ${e.dia_semana} · ${h(e.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${t.tom}>
          <kk-icon name="history"></kk-icon>${o.ministerio.ultimoEstudo} ${t.texto}
        </span>

        ${a===void 0?c:r`
              <span class="registro__parou">
                <kk-icon name="bookmark"></kk-icon>${o.ministerio.parouEm} ${a.onde_parou}
              </span>
            `}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${o.ministerio.editarEstudo}
          @click=${()=>{R={id:e.id??0,nome:e.nome,contato:e.contato,endereco:e.endereco,publicacao:e.publicacao_atual,dia:e.dia_semana,horario:h(e.horario_minutos),notas:e.notas},i()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${o.ministerio.compartilhar}
          @click=${()=>void u(o.ministerio.estudoDe(e.nome),ue(e,P))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${o.ministerio.excluirEstudo}
          @click=${()=>void Ee(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Oe(){if(R!==null)return Te(R);let e=v(N,P,I);return r`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${o.ministerio.buscarEstudos}
        .value=${I}
        @kk-input=${e=>{I=e.target.value,i()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?r`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${N.length===0?o.ministerio.semEstudos:o.ministerio.semEstudosFiltro}</p>
          </div>
        `:r`<div class="registros">${e.map(e=>De(e))}</div>`}
  `}function Q(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:N.find(e=>e.id===t)}async function ke(e){if(e.ondeParou.trim()===``){z={...e,erro:!0},i();return}await le({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():n(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),z=null,s(o.ministerio.registroSalvo),await U()}function Ae(e){return r`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?o.ministerio.editarRegistro:o.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${o.ministerio.data}
        .value=${e.data}
        @kk-change=${t=>{z={...e,data:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${o.ministerio.ondeParou}
        placeholder=${o.ministerio.ondeParouPlaceholder}
        .value=${e.ondeParou}
        help-text=${e.erro?o.ministerio.informeOndeParou:``}
        @kk-input=${t=>{z={...e,ondeParou:t.target.value,erro:!1}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${o.ministerio.comentario}
        placeholder=${o.ministerio.comentarioPlaceholder}
        .value=${e.comentario}
        @kk-input=${t=>{z={...e,comentario:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void ke(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{z=null,i()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function je(e){await a({titulo:o.ministerio.excluirRegistro,texto:o.acervo.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await b(e.id),s(o.ministerio.registroExcluido),await U())}function Me(n){if(z!==null)return Ae(z);let a=D(P,n.id);return a.length===0?r`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="history"></kk-icon>
        <p>${o.ministerio.semRegistros}</p>
      </div>
    `:r`
    <div class="registros">
      ${a.map(n=>r`
          <div class="sessao">
            <span class="sessao__texto">
              <span class="sessao__data">${e(n.registrado_em)}</span>
              <span class="sessao__parou">
                <kk-icon name="bookmark"></kk-icon>${n.onde_parou}
              </span>
              ${n.comentario===``?c:r`<span class="sessao__comentario">${n.comentario}</span>`}
            </span>

            <div class="registro__acoes">
              <kk-icon-button
                name="pencil"
                label=${o.acoes.editar}
                @click=${()=>{z={id:n.id??0,estudoId:n.estudo_id,data:n.registrado_em===0?t():t(n.registrado_em),ondeParou:n.onde_parou,comentario:n.comentario,erro:!1},i()}}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${o.ministerio.excluirRegistro}
                @click=${()=>void je(n)}
              ></kk-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var Ne={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let t=$(e);if(t===`relatorios`)return o.ministerio.atalhoRelatorios;if(t===`estudos`)return o.ministerio.atalhoEstudos;if(t===`linha`)return Q(e)?.nome??o.ministerio.linhaDoTempo},acoes(e){let n=$(e);if(n===`relatorios`&&L===null)return r`
        <kk-icon-button
          name="plus"
          label=${o.ministerio.novoRelatorio}
          @click=${()=>{L=X(),i()}}
        ></kk-icon-button>
      `;if(n===`estudos`&&R===null)return r`
        <kk-icon-button
          name="plus"
          label=${o.ministerio.novoEstudo}
          @click=${()=>{R=we(),i()}}
        ></kk-icon-button>
      `;if(n===`linha`&&z===null){let n=Q(e);return n?.id===void 0?void 0:r`
        <kk-icon-button
          name="plus"
          label=${o.ministerio.registrarEstudo}
          @click=${()=>{z={id:0,estudoId:n.id??0,data:t(),ondeParou:``,comentario:``,erro:!1},i()}}
        ></kk-icon-button>
      `}},conteudo(e){if(W(),H!==null)return ee(H,pe);if(!B)return r`<div class="carregando"><kk-spinner></kk-spinner></div>`;let t=$(e);if(t===`relatorios`)return Ce();if(t===`estudos`)return Oe();if(t===`linha`){let t=Q(e);return t===void 0?(l(`ministerio/estudos`),r`<div class="carregando"><kk-spinner></kk-spinner></div>`):Me(t)}return _e()}};export{Ne as telaMinisterio};