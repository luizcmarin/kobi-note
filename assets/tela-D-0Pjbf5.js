import{$ as e,S as t,X as n,at as r,ct as i,ft as a,h as o,it as s,tt as c,u as l,ut as u,x as ee}from"./index-BBOYxO_i.js";import{t as d}from"./compartilhar-ByzKQFji.js";import{DIAS_DA_SEMANA as te,MESES as f,TIPOS_PUBLICADOR as p,ajustado as ne,alternarEnviado as m,carregar as h,comoHorario as g,contadorTemAtividade as _,contadorZerado as v,corDoEstudo as re,deHorario as ie,esfriando as ae,estudosVisiveis as oe,excluirEstudo as y,excluirRegistro as b,excluirRelatorio as x,horasDoContador as S,iniciais as C,lembreteDoRelatorio as w,mesEAno as T,observacoesDoContador as E,ordenarRelatorios as se,registrosDoEstudo as D,relataHoras as O,salvarContador as k,salvarEstudo as ce,salvarRegistro as le,salvarRelatorio as A,textoDoEstudo as ue,textoDoRelatorio as de,ultimoRelativo as fe,ultimoRelatorio as j}from"./dados-C5OcgWIr.js";var M=[],N=[],P=[],F=null,I=``,L=null,R=null,z=null,B=!1,V=!1,H=null;async function U(){let e=await h();M=e.relatorios,N=e.estudos,P=e.registros,F=e.contador,s()}function W(){B||V||H!==null||(V=!0,(async()=>{try{await U(),B=!0}catch(e){console.error(`ministerio: a carga falhou.`,e),H=t(e)}finally{V=!1,s()}})())}function pe(){H=null,W(),s()}function G(e,t,n,i){return a`
    <button class="atalho" @click=${()=>r(i)}>
      <kk-icon class="atalho__icone" name=${e}></kk-icon>
      <span class="atalho__rotulo">${t}</span>
      <span class="atalho__resumo">${n}</span>
    </button>
  `}function K(e,t,n,r,o,s){return a`
    <div class="tally__linha">
      <span class="tally__nome"><kk-icon name=${t}></kk-icon>${n}</span>
      <kk-icon-button
        name="minus"
        label=${i.ministerio.diminuir(n)}
        @click=${()=>void q(e,-r)}
      ></kk-icon-button>
      <span class="tally__valor">${o}</span>
      <kk-icon-button
        name="plus"
        label=${i.ministerio.aumentar(n)}
        @click=${()=>void q(e,r)}
      ></kk-icon-button>
      ${s??u}
    </div>
  `}async function q(e,t){F!==null&&(F=await k(ne(F,e,t)),s())}async function me(){F!==null&&await o({titulo:i.ministerio.zerar,texto:i.ministerio.zerarTexto,rotuloConfirmar:i.ministerio.zerar,variante:`warning`})&&F!==null&&(F=await k(v(F)),s())}async function J(e){F!==null&&F.mes===e.mes&&F.ano===e.ano&&_(F)&&(F=await k(v(F)))}function he(e){let t=_(e);return a`
    <div class="tally">
      <div class="tally__topo">
        <kk-icon class="tally__icone" name="stopwatch"></kk-icon>
        <span class="tally__titulo">
          ${i.ministerio.contadores}
          <small>${T(e.mes,e.ano)}</small>
        </span>
        ${t?a`
              <kk-icon-button
                name="rotate-clockwise"
                label=${i.ministerio.zerar}
                @click=${()=>void me()}
              ></kk-icon-button>
            `:u}
      </div>

      ${K(`minutos`,`clock`,i.ministerio.tempo,15,g(e.minutos),a`
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
  `}function Y(){F!==null&&(L={id:0,mes:F.mes,ano:F.ano,horas:S(F.minutos),estudos:F.estudos,participacao:+!!_(F),tipo:j(M)?.tipo_publicador??`publicador`,metaHoras:0,observacoes:E(F),enviado:0,dataEnvio:0},r(`ministerio/relatorios`))}function ge(){let e=w(M);if(e!==null){if(F!==null&&F.mes===e.mes&&F.ano===e.ano){Y();return}L={...X(),mes:e.mes,ano:e.ano},r(`ministerio/relatorios`)}}function _e(){let e=ae(N,P),t=w(M),n=j(M);return a`
    ${e.length===0?u:a`
          <kk-alert variant="danger" open>
            <kk-icon slot="icon" name="temperature-snow"></kk-icon>
            ${i.ministerio.esfriando(e.length,15)}
            <a href="#/ministerio/estudos">${i.ministerio.verEstudos}</a>
          </kk-alert>
        `}

    ${t===null?u:a`
          <kk-alert variant="warning" open>
            <kk-icon slot="icon" name="bell"></kk-icon>
            ${i.ministerio.lembrete(T(t.mes,t.ano),t.existe)}
            <kk-button size="small" variant="warning" @click=${ge}>
              ${i.ministerio.preencher}
            </kk-button>
          </kk-alert>
        `}

    <div class="atalhos">
      ${G(`file-text`,i.ministerio.atalhoRelatorios,i.ministerio.atalhoRelatoriosSub(M.length),`ministerio/relatorios`)}
      ${G(`book`,i.ministerio.atalhoEstudos,i.ministerio.atalhoEstudosSub(N.length),`ministerio/estudos`)}
      ${G(`trending-up`,i.ministerio.atalhoServico,i.ministerio.atalhoServicoSub,`servico`)}
    </div>

    ${F===null?u:he(F)}

    ${n===null?u:a`
          <div class="ultimo">
            <span class="ultimo__rotulo">${i.ministerio.ultimoRelatorio}</span>
            <div class="ultimo__linha">
              <span class="ultimo__mes">
                ${T(n.mes,n.ano)}
                <small>
                  ${n.participacao===1?i.ministerio.participou:i.ministerio.naoParticipou}
                  · ${i.ministerio.estudosDoRelatorio(n.estudos)}
                </small>
              </span>
              <kk-badge variant=${n.relatorio_enviado===1?`success`:`neutral`} pill>
                ${n.relatorio_enviado===1?i.ministerio.enviado:i.ministerio.pendente}
              </kk-badge>
            </div>
          </div>
        `}
  `}function X(){let e=new Date;return{id:0,mes:e.getMonth()+1,ano:e.getFullYear(),horas:0,estudos:0,participacao:1,tipo:`publicador`,metaHoras:0,observacoes:``,enviado:0,dataEnvio:0}}async function ve(e){await A({...e.id>0?{id:e.id}:{},mes:Number(e.mes),ano:Number(e.ano),ano_servico:0,horas:Math.max(0,Number(e.horas)),estudos:Math.max(0,Number(e.estudos)),participacao:+(e.participacao===1),tipo_publicador:e.tipo,meta_horas:Math.max(0,Number(e.metaHoras)),notas_publicacoes:e.observacoes,telefone_dirigente:``,nome_dirigente:``,relatorio_enviado:+(e.enviado===1),data_envio_relatorio:e.dataEnvio}),L=null,l(i.ministerio.relatorioSalvo),await U()}function ye(e){return a`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?i.ministerio.editarRelatorio:i.ministerio.novoRelatorio}
      </h2>

      <div class="formulario__par">
        <kk-select
          label=${i.ministerio.mes}
          .value=${String(e.mes)}
          @kk-change=${t=>{L={...e,mes:Number(t.target.value)}}}
        >
          ${f.map((e,t)=>t===0?u:a`<kk-option value=${t}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="number"
          label=${i.ministerio.ano}
          .value=${String(e.ano)}
          @kk-input=${t=>{L={...e,ano:Number(t.target.value)}}}
        ></kk-input>
      </div>

      <kk-select
        label=${i.ministerio.tipoPublicador}
        .value=${e.tipo}
        @kk-change=${t=>{L={...e,tipo:t.target.value},s()}}
      >
        ${Object.entries(p).map(([e,t])=>a`<kk-option value=${e}>${t}</kk-option>`)}
      </kk-select>

      <kk-switch
        ?checked=${e.participacao===1}
        @kk-change=${t=>{L={...e,participacao:+!!t.target.checked}}}
      >
        ${i.ministerio.participacao}
      </kk-switch>

      ${O(e.tipo)?a`
            <div class="formulario__par">
              <kk-input
                type="number"
                step="0.5"
                min="0"
                label=${i.ministerio.horas}
                .value=${String(e.horas)}
                @kk-input=${t=>{L={...e,horas:Number(t.target.value)}}}
              ></kk-input>
              <kk-input
                type="number"
                min="0"
                label=${i.ministerio.metaHoras}
                .value=${String(e.metaHoras)}
                @kk-input=${t=>{L={...e,metaHoras:Number(t.target.value)}}}
              ></kk-input>
            </div>
          `:u}

      <kk-input
        type="number"
        min="0"
        label=${i.ministerio.estudosBiblicos}
        .value=${String(e.estudos)}
        @kk-input=${t=>{L={...e,estudos:Number(t.target.value)}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${i.ministerio.observacoes}
        .value=${e.observacoes}
        @kk-input=${t=>{L={...e,observacoes:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void ve(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,s()}}
        >
          ${i.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function be(e){await d(i.ministerio.relatorioDe(T(e.mes,e.ano)),de(e)),e.relatorio_enviado!==1&&(await A({...e,relatorio_enviado:1,data_envio_relatorio:Date.now()}),await J(e),await U())}async function xe(e){await o({titulo:i.ministerio.excluirRelatorio,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await x(e.id),l(i.ministerio.relatorioExcluido),await U())}function Se(e){let t=e.relatorio_enviado===1,n=p[e.tipo_publicador]??e.tipo_publicador;return a`
    <div class="registro" data-status=${t?`enviado`:`pendente`}>
      <span class="registro__avatar">${(f[e.mes]??``).slice(0,3)}</span>

      <button
        class="registro__alvo"
        @click=${()=>{L={id:e.id??0,mes:e.mes,ano:e.ano,horas:e.horas,estudos:e.estudos,participacao:e.participacao,tipo:e.tipo_publicador,metaHoras:e.meta_horas,observacoes:e.notas_publicacoes,enviado:e.relatorio_enviado,dataEnvio:e.data_envio_relatorio},s()}}
      >
        <span class="registro__topo">
          <span class="registro__titulo">${T(e.mes,e.ano)}</span>
          <kk-badge variant=${t?`success`:`warning`} pill>
            ${t?i.ministerio.enviado:i.ministerio.pendente}
          </kk-badge>
        </span>
        <span class="registro__resumo">
          ${i.ministerio.resumoRelatorio(n,e.participacao===1,e.estudos,O(e.tipo_publicador)?i.ministerio.sufixoHoras(e.horas):``)}
        </span>
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="share"
          label=${i.ministerio.compartilhar}
          @click=${()=>void be(e)}
        ></kk-icon-button>
        <kk-icon-button
          name=${t?`mail-check`:`send`}
          label=${t?i.ministerio.marcarPendente:i.ministerio.marcarEnviado}
          @click=${async()=>{await m(e),t||await J(e),await U()}}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${i.ministerio.excluirRelatorio}
          @click=${()=>void xe(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Ce(){if(L!==null)return ye(L);let e=se(M);return e.length===0?a`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="file-text"></kk-icon>
        <p>${i.ministerio.semRelatorios}</p>
      </div>
    `:a`<div class="registros">${e.map(e=>Se(e))}</div>`}function we(){return{id:0,nome:``,contato:``,endereco:``,publicacao:``,dia:``,horario:`19:00`,notas:``}}async function Z(e){if(e.nome.trim()===``){l(i.ministerio.informeNome,`warning`);return}await ce({...e.id>0?{id:e.id}:{},nome:e.nome.trim(),contato:e.contato,endereco:e.endereco,publicacao_atual:e.publicacao,dia_semana:e.dia,horario_minutos:ie(e.horario),notas:e.notas}),R=null,l(i.ministerio.estudoSalvo),await U()}function Te(e){return a`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?i.ministerio.editarEstudo:i.ministerio.novoEstudo}
      </h2>

      <kk-input
        label=${i.ministerio.nome}
        .value=${e.nome}
        @kk-input=${t=>{R={...e,nome:t.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-input
          label=${i.ministerio.contato}
          placeholder=${i.ministerio.contatoPlaceholder}
          .value=${e.contato}
          @kk-input=${t=>{R={...e,contato:t.target.value}}}
        ></kk-input>
        <kk-input
          label=${i.ministerio.endereco}
          .value=${e.endereco}
          @kk-input=${t=>{R={...e,endereco:t.target.value}}}
        ></kk-input>
      </div>

      <kk-input
        label=${i.ministerio.publicacaoAtual}
        placeholder=${i.ministerio.publicacaoPlaceholder}
        .value=${e.publicacao}
        @kk-input=${t=>{R={...e,publicacao:t.target.value}}}
      ></kk-input>

      <div class="formulario__par">
        <kk-select
          label=${i.ministerio.diaSemana}
          .value=${e.dia}
          @kk-change=${t=>{R={...e,dia:t.target.value}}}
        >
          <kk-option value="">${i.ministerio.escolhaDia}</kk-option>
          ${te.map(e=>a`<kk-option value=${e}>${e}</kk-option>`)}
        </kk-select>

        <kk-input
          type="time"
          label=${i.ministerio.horario}
          .value=${e.horario}
          @kk-change=${t=>{R={...e,horario:t.target.value}}}
        ></kk-input>
      </div>

      <kk-textarea
        rows="2"
        label=${i.ministerio.notas}
        .value=${e.notas}
        @kk-input=${t=>{R={...e,notas:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void Z(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,s()}}
        >
          ${i.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function Ee(e){await o({titulo:i.ministerio.excluirEstudo,texto:i.ministerio.excluirEstudoTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await y(e.id,P),l(i.ministerio.estudoExcluido),await U())}function De(e){let t=fe(P,e),n=t.tom===`frio`||t.tom===`nunca`,o=D(P,e.id)[0],c=re(e);return a`
    <div class="registro" data-status=${n?`frio`:`ok`}>
      <span
        class="registro__avatar"
        style=${`background:color-mix(in oklab, ${c} 15%, transparent);color:${c}`}
      >
        ${C(e)}
      </span>

      <button class="registro__alvo" @click=${()=>r(`ministerio/estudos/${e.id??``}`)}>
        <span class="registro__topo">
          <span class="registro__titulo">
            ${e.nome===``?i.ministerio.semNome:e.nome}
          </span>
          ${n?a`
                <kk-badge variant="danger" pill>
                  <kk-icon name="temperature-snow"></kk-icon>${i.ministerio.seloEsfriando}
                </kk-badge>
              `:u}
        </span>

        ${e.publicacao_atual===``?u:a`
              <span class="registro__resumo">
                <kk-icon name="book"></kk-icon>${e.publicacao_atual}
              </span>
            `}
        ${e.dia_semana===``?u:a`
              <span class="registro__resumo">
                <kk-icon name="calendar-week"></kk-icon>
                ${e.dia_semana} · ${g(e.horario_minutos)}
              </span>
            `}

        <span class="registro__relativo" data-tom=${t.tom}>
          <kk-icon name="history"></kk-icon>${i.ministerio.ultimoEstudo} ${t.texto}
        </span>

        ${o===void 0?u:a`
              <span class="registro__parou">
                <kk-icon name="bookmark"></kk-icon>${i.ministerio.parouEm} ${o.onde_parou}
              </span>
            `}
      </button>

      <div class="registro__acoes">
        <kk-icon-button
          name="pencil"
          label=${i.ministerio.editarEstudo}
          @click=${()=>{R={id:e.id??0,nome:e.nome,contato:e.contato,endereco:e.endereco,publicacao:e.publicacao_atual,dia:e.dia_semana,horario:g(e.horario_minutos),notas:e.notas},s()}}
        ></kk-icon-button>
        <kk-icon-button
          name="share"
          label=${i.ministerio.compartilhar}
          @click=${()=>void d(i.ministerio.estudoDe(e.nome),ue(e,P))}
        ></kk-icon-button>
        <kk-icon-button
          name="trash"
          label=${i.ministerio.excluirEstudo}
          @click=${()=>void Ee(e)}
        ></kk-icon-button>
      </div>
    </div>
  `}function Oe(){if(R!==null)return Te(R);let e=oe(N,P,I);return a`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${i.ministerio.buscarEstudos}
        .value=${I}
        @kk-input=${e=>{I=e.target.value,s()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${e.length===0?a`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="book"></kk-icon>
            <p>${N.length===0?i.ministerio.semEstudos:i.ministerio.semEstudosFiltro}</p>
          </div>
        `:a`<div class="registros">${e.map(e=>De(e))}</div>`}
  `}function Q(e){let t=Number.parseInt(e.args[1]??``,10);return Number.isNaN(t)?void 0:N.find(e=>e.id===t)}async function ke(e){if(e.ondeParou.trim()===``){z={...e,erro:!0},s();return}await le({...e.id>0?{id:e.id}:{},estudo_id:e.estudoId,registrado_em:e.data===``?Date.now():c(e.data),onde_parou:e.ondeParou.trim(),comentario:e.comentario.trim()}),z=null,l(i.ministerio.registroSalvo),await U()}function Ae(e){return a`
    <div class="formulario formulario--cartao">
      <h2 class="formulario__titulo">
        ${e.id>0?i.ministerio.editarRegistro:i.ministerio.registrarEstudo}
      </h2>

      <kk-input
        type="date"
        label=${i.ministerio.data}
        .value=${e.data}
        @kk-change=${t=>{z={...e,data:t.target.value}}}
      ></kk-input>

      <kk-input
        label=${i.ministerio.ondeParou}
        placeholder=${i.ministerio.ondeParouPlaceholder}
        .value=${e.ondeParou}
        help-text=${e.erro?i.ministerio.informeOndeParou:``}
        @kk-input=${t=>{z={...e,ondeParou:t.target.value,erro:!1}}}
      ></kk-input>

      <kk-textarea
        rows="2"
        label=${i.ministerio.comentario}
        placeholder=${i.ministerio.comentarioPlaceholder}
        .value=${e.comentario}
        @kk-input=${t=>{z={...e,comentario:t.target.value}}}
      ></kk-textarea>

      <div class="editor__acoes">
        <kk-button variant="primary" @click=${()=>void ke(e)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{z=null,s()}}
        >
          ${i.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}async function je(e){await o({titulo:i.ministerio.excluirRegistro,texto:i.acervo.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&e.id!==void 0&&(await b(e.id),l(i.ministerio.registroExcluido),await U())}function Me(t){if(z!==null)return Ae(z);let r=D(P,t.id);return r.length===0?a`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="history"></kk-icon>
        <p>${i.ministerio.semRegistros}</p>
      </div>
    `:a`
    <div class="registros">
      ${r.map(t=>a`
          <div class="sessao">
            <span class="sessao__texto">
              <span class="sessao__data">${n(t.registrado_em)}</span>
              <span class="sessao__parou">
                <kk-icon name="bookmark"></kk-icon>${t.onde_parou}
              </span>
              ${t.comentario===``?u:a`<span class="sessao__comentario">${t.comentario}</span>`}
            </span>

            <div class="registro__acoes">
              <kk-icon-button
                name="pencil"
                label=${i.acoes.editar}
                @click=${()=>{z={id:t.id??0,estudoId:t.estudo_id,data:t.registrado_em===0?e():e(t.registrado_em),ondeParou:t.onde_parou,comentario:t.comentario,erro:!1},s()}}
              ></kk-icon-button>
              <kk-icon-button
                name="trash"
                label=${i.ministerio.excluirRegistro}
                @click=${()=>void je(t)}
              ></kk-icon-button>
            </div>
          </div>
        `)}
    </div>
  `}function $(e){return e.args[0]===`relatorios`?`relatorios`:e.args[0]===`estudos`?e.args[1]===void 0?`estudos`:`linha`:`home`}var Ne={voltarPara(e){let t=$(e);return t===`home`?`home`:t===`linha`?`ministerio/estudos`:`ministerio`},titulo(e){let t=$(e);if(t===`relatorios`)return i.ministerio.atalhoRelatorios;if(t===`estudos`)return i.ministerio.atalhoEstudos;if(t===`linha`)return Q(e)?.nome??i.ministerio.linhaDoTempo},acoes(t){let n=$(t);if(n===`relatorios`&&L===null)return a`
        <kk-icon-button
          name="plus"
          label=${i.ministerio.novoRelatorio}
          @click=${()=>{L=X(),s()}}
        ></kk-icon-button>
      `;if(n===`estudos`&&R===null)return a`
        <kk-icon-button
          name="plus"
          label=${i.ministerio.novoEstudo}
          @click=${()=>{R=we(),s()}}
        ></kk-icon-button>
      `;if(n===`linha`&&z===null){let n=Q(t);return n?.id===void 0?void 0:a`
        <kk-icon-button
          name="plus"
          label=${i.ministerio.registrarEstudo}
          @click=${()=>{z={id:0,estudoId:n.id??0,data:e(),ondeParou:``,comentario:``,erro:!1},s()}}
        ></kk-icon-button>
      `}},conteudo(e){if(W(),H!==null)return ee(H,pe);if(!B)return a`<div class="carregando"><kk-spinner></kk-spinner></div>`;let t=$(e);if(t===`relatorios`)return Ce();if(t===`estudos`)return Oe();if(t===`linha`){let t=Q(e);return t===void 0?(r(`ministerio/estudos`),a`<div class="carregando"><kk-spinner></kk-spinner></div>`):Me(t)}return _e()}};export{Ne as telaMinisterio};