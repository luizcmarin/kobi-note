import{Q as e,at as t,nt as n,p as r,rt as i,u as a,x as o,y as s}from"./index-BQ2FB00A.js";import{CORES as c,ICONES as l,carregar as u,comoHora as d,corDoTipo as f,deHora as p,diaFinal as ee,diaInicial as te,eventosDoDia as m,excluirEvento as ne,excluirTipo as h,iconeDoTipo as g,proximaOrdem as _,salvarEvento as v,salvarTipo as y,tipoEmUso as b,tipoPorId as x}from"./dados-BTutfnFt.js";var S=[`dia`,`semana`,`mes`,`ano`,`agenda`],C=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function w(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function T(e,t){let n=w(e);return n.setDate(n.getDate()+t),n}function E(e){return T(e,-((e.getDay()+6)%7))}function re(e,t){if(e===`dia`){let e=s(t);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=E(t);return{de:s(e),ate:s(T(e,6))}}if(e===`mes`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth()+1,0);return{de:s(e),ate:s(n)}}let n=new Date(t.getFullYear(),0,1),r=new Date(t.getFullYear(),11,31);return{de:s(n),ate:s(r)}}function D(e,t,n){let r=w(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function O(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=E(t),n=T(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function k(e,t){let n=E(new Date(e,t,1)),r=T(E(new Date(e,t+1,0)),6),i=[];for(let e=n;e<=r;e=T(e,1))i.push({dia:s(e),numero:e.getDate(),doMes:e.getMonth()===t});return i}function A(e){let t=E(e);return Array.from({length:7},(e,n)=>{let r=T(t,n);return{dia:s(r),rotulo:C[n]??``,numero:r.getDate()}})}function j(){return Array.from({length:17},(e,t)=>6+t)}function M(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:k(e,n)}))}function ie(e){let t=[],[n=1970,r=1,i=1]=e.de.split(`-`).map(Number);for(let a=new Date(n,r-1,i);;a=T(a,1)){let n=s(a);if(n>e.ate)break;t.push(n)}return t}function ae(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}function oe(e,t){let n=1380,r=1020,i=Math.min(Math.max(e,360),n),a=Math.min(Math.max(t>e?t:n,i+15),n);return{topo:(i-360)/r,altura:(a-i)/r}}var N=[],P=[],F=`semana`,I=new Date,L=null,R=!1,z=null,B=!1,V=!1;async function H(){let t=await u();N=t.tipos,P=t.eventos,e()}function U(){B||V||(V=!0,(async()=>{try{await H(),B=!0}finally{V=!1,e()}})())}var W=5;function G(){let e=new Date().getFullYear(),t=new Set;for(let n=e-W;n<=e+W;n+=1)t.add(n);return t.add(I.getFullYear()),[...t].sort((e,t)=>e-t)}function K(t,n){I=new Date(t,n,1),e()}function q(){return t`
    <div class="chips" role="group" aria-label=${n.calendario.vista}>
      ${S.map(r=>t`
          <button
            class="chip"
            ?data-ativo=${F===r}
            @click=${()=>{F=r,e()}}
          >
            ${n.calendario.vistas[r]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${n.calendario.mes}
        size="small"
        .value=${String(I.getMonth())}
        @kk-change=${e=>K(I.getFullYear(),Number(e.target.value))}
      >
        ${n.calendario.meses.map((e,n)=>t`<kk-option value=${n}>${e}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${n.calendario.ano}
        size="small"
        .value=${String(I.getFullYear())}
        @kk-change=${e=>K(Number(e.target.value),I.getMonth())}
      >
        ${G().map(e=>t`<kk-option value=${e}>${e}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${n.calendario.anterior}
        @click=${()=>{I=D(F,I,-1),e()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{I=new Date,e()}}
      >
        ${n.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${n.calendario.proximo}
        @click=${()=>{I=D(F,I,1),e()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${O(F,I)}</span>
    </div>
  `}function J(t){L={id:t.id??0,titulo:t.titulo,tipoId:t.tipo_id,diaInteiro:t.dia_inteiro===1,dataInicio:te(t),horaInicio:d(t.hora_inicio_min),dataFim:ee(t),horaFim:d(t.hora_fim_min),descricao:t.descricao},e()}function Y(e){let n=f(N,e.tipo_id);return t`
    <button
      class="pastilha"
      style=${`--cor-evento:${n}`}
      title=${e.titulo}
      @click=${()=>J(e)}
    >
      ${e.dia_inteiro===1?i:t`<span class="pastilha__hora">${d(e.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${e.titulo}</span>
    </button>
  `}function se(e){let r=f(N,e.tipo_id),a=x(N,e.tipo_id);return t`
    <button class="evento" style=${`--cor-evento:${r}`} @click=${()=>J(e)}>
      <span class="evento__quando">
        ${e.dia_inteiro===1?n.calendario.diaInteiro:`${d(e.hora_inicio_min)} – ${d(e.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${g(N,e.tipo_id)}></kk-icon>${e.titulo}
      </span>
      ${a===void 0?i:t`<span class="evento__tipo">${a.nome}</span>`}
      ${e.descricao===``?i:t`<span class="evento__descricao">${e.descricao}</span>`}
    </button>
  `}function X(t,n){L={id:0,titulo:``,tipoId:N[0]?.id??0,diaInteiro:n===void 0,dataInicio:t,horaInicio:d(n??480),dataFim:t,horaFim:d((n??480)+60),descricao:``},e()}function ce(e,r){let i=m(P,e.dia);return t`
    <div class="mes__celula" ?data-fora=${!e.doMes} ?data-hoje=${e.dia===r}>
      <button
        class="mes__numero"
        aria-label=${n.calendario.novoEm(e.dia)}
        @click=${()=>X(e.dia)}
      >
        ${e.numero}
      </button>
      <div class="mes__eventos">${i.map(e=>Y(e))}</div>
    </div>
  `}function le(){let e=s();return t`
    <div class="mes">
      ${A(I).map(e=>t`<span class="mes__cabecalho">${e.rotulo}</span>`)}
      ${k(I.getFullYear(),I.getMonth()).map(t=>ce(t,e))}
    </div>
  `}function Z(e){let r=j(),i=s();return t`
    <div class="grade" style=${`--colunas:${e.length}`}>
      <span class="grade__canto"></span>
      ${e.map(e=>t`
          <span class="grade__dia" ?data-hoje=${e.dia===i}>
            ${e.rotulo} ${e.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${r.map(e=>t`<span class="grade__hora">${d(e*60)}</span>`)}
      </div>

      ${e.map(e=>{let i=m(P,e.dia),a=i.filter(e=>e.dia_inteiro===1),o=i.filter(e=>e.dia_inteiro===0);return t`
          <div class="grade__coluna">
            ${r.map(r=>t`
                <button
                  class="grade__vaga"
                  aria-label=${n.calendario.novoAs(e.rotulo,d(r*60))}
                  @click=${()=>X(e.dia,r*60)}
                ></button>
              `)}

            ${a.map(e=>t`
                <span class="grade__inteiro" style=${`--cor-evento:${f(N,e.tipo_id)}`}>
                  ${Y(e)}
                </span>
              `)}

            ${o.map(e=>{let n=oe(e.hora_inicio_min,e.hora_fim_min);return t`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${f(N,e.tipo_id)};top:${n.topo*100}%;height:${n.altura*100}%`}
                  @click=${()=>J(e)}
                >
                  <span class="grade__evento-hora">${d(e.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${e.titulo}</span>
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function ue(){return Z([{dia:s(I),rotulo:I.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:I.getDate()}])}function de(){return Z(A(I))}function fe(){let r=s();return t`
    <div class="ano">
      ${M(I.getFullYear()).map(i=>t`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{I=new Date(I.getFullYear(),i.mes,1),F=`mes`,e()}}
            >
              ${i.rotulo}
            </button>

            <div class="ano__grade">
              ${A(I).map(e=>t`<span class="ano__cabecalho">${e.rotulo.slice(0,1)}</span>`)}
              ${i.celulas.map(i=>{let a=m(P,i.dia).length;return t`
                  <button
                    class="ano__dia"
                    ?data-fora=${!i.doMes}
                    ?data-hoje=${i.dia===r}
                    ?data-com-evento=${a>0}
                    title=${a===0?``:n.calendario.eventos(a)}
                    @click=${()=>{I=new Date(o(i.dia)),F=`dia`,e()}}
                  >
                    ${i.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function pe(){let e=ie(re(`agenda`,I)).filter(e=>m(P,e).length>0);return e.length===0?t`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${n.calendario.semEventos}</p>
      </div>
    `:t`
    <div class="agenda">
      ${e.map(e=>t`
          <div class="agenda__dia">
            <span class="agenda__data">${ae(e)}</span>
            ${m(P,e).map(e=>se(e))}
          </div>
        `)}
    </div>
  `}function me(){return F===`dia`?ue():F===`semana`?de():F===`mes`?le():F===`ano`?fe():pe()}function Q(e){L!==null&&(L={...L,...e})}function $(e){z!==null&&(z={...z,...e})}async function he(e){let t=e.dataFim===``||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,r=+!!e.diaInteiro;await v({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?n.acervo.semTitulo:e.titulo.trim(),tipo_id:Number(e.tipoId)||(N[0]?.id??0),data_inicio_epoch:o(e.dataInicio),hora_inicio_min:r===1?0:p(e.horaInicio),data_fim_epoch:o(t),hora_fim_min:r===1?1439:p(e.horaFim),dia_inteiro:r,descricao:e.descricao.trim()}),L=null,a(n.calendario.eventoSalvo),await H()}async function ge(e){await r({titulo:n.calendario.excluirEvento,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await ne(e.id),L=null,a(n.calendario.eventoExcluido),await H())}function _e(r){return t`
    <kk-dialog
      open
      label=${r.id>0?n.calendario.editarEvento:n.calendario.novoEvento}
      @kk-after-hide=${()=>{L=null,e()}}
    >
      <div class="formulario">
        <kk-input
          label=${n.calendario.titulo}
          placeholder=${n.calendario.tituloPlaceholder}
          .value=${r.titulo}
          @kk-input=${e=>{Q({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${n.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${N.map(n=>t`
                <button
                  class="tipo-chip"
                  ?data-ativo=${r.tipoId===n.id}
                  @click=${()=>{Q({tipoId:n.id??0}),e()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${c[n.cor_chave]??``}`}
                  ></span>
                  ${n.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${r.diaInteiro}
          @kk-change=${t=>{Q({diaInteiro:t.target.checked}),e()}}
        >
          ${n.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${n.calendario.dataInicio}
            .value=${r.dataInicio}
            @kk-change=${t=>{let n=t.target.value,i=L?.dataFim??r.dataFim;Q({dataInicio:n,dataFim:i<n?n:i}),e()}}
          ></kk-input>
          ${r.diaInteiro?i:t`
                <kk-input
                  type="time"
                  label=${n.calendario.horaInicio}
                  .value=${r.horaInicio}
                  @kk-change=${e=>{Q({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${n.calendario.dataFim}
            min=${r.dataInicio}
            .value=${r.dataFim}
            @kk-change=${e=>{Q({dataFim:e.target.value})}}
          ></kk-input>
          ${r.diaInteiro?i:t`
                <kk-input
                  type="time"
                  label=${n.calendario.horaFim}
                  .value=${r.horaFim}
                  @kk-change=${e=>{Q({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${n.calendario.descricao}
          placeholder=${n.calendario.descricaoPlaceholder}
          .value=${r.descricao}
          @kk-input=${e=>{Q({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${r.id>0?t`
              <kk-button variant="danger" outline @click=${()=>void ge(r)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
              </kk-button>
            `:i}
        <kk-button
          @click=${()=>{L=null,e()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{L!==null&&he(L)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function ve(e){let t=e.nome.trim()===``?n.calendario.tipoSemNome:e.nome.trim(),r=e.id>0?x(N,e.id):void 0;await y({...r??{ordem:_(N)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial}),z=null,await H()}async function ye(e){if(e.id!==void 0){if(b(P,e.id)){await r({titulo:n.calendario.tipoEmUsoTitulo,texto:n.calendario.tipoEmUsoTexto,rotuloConfirmar:n.acoes.fechar});return}await r({titulo:n.calendario.excluirTipo,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await h(e.id),await H())}}function be(r){return t`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${n.calendario.tipoNome}
        .value=${r.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${n.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(c).map(([n,i])=>t`
              <button
                class="cor-chip"
                ?data-ativo=${r.cor===n}
                style=${`background:${i}`}
                aria-label=${n}
                @click=${()=>{$({cor:n}),e()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${n.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(l).map(([n,i])=>t`
              <button
                class="tipo-chip"
                ?data-ativo=${r.icone===n}
                aria-label=${n}
                @click=${()=>{$({icone:n}),e()}}
              >
                <kk-icon name=${i}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <kk-switch
        ?checked=${r.especial}
        @kk-change=${e=>{$({especial:e.target.checked})}}
      >
        ${n.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{z!==null&&ve(z)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{z=null,e()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function xe(){return t`
    <kk-dialog
      open
      label=${n.calendario.tipos}
      @kk-after-hide=${()=>{R=!1,z=null,e()}}
    >
      ${z===null?t`
            <div class="tipos-lista">
              ${N.map(r=>t`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${c[r.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${l[r.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${r.nome}</span>
                    ${r.marca_especial===1?t`<kk-badge variant="success" pill>${n.calendario.especial}</kk-badge>`:i}
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.editar}
                      @click=${()=>{z={id:r.id??0,nome:r.nome,cor:r.cor_chave,icone:r.icone,especial:r.marca_especial===1},e()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${n.calendario.excluirTipo}
                      @click=${()=>void ye(r)}
                    ></kk-icon-button>
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{z={id:0,nome:``,cor:`primary`,icone:`evento`,especial:!1},e()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${n.calendario.novoTipo}
            </kk-button>
          `:be(z)}
    </kk-dialog>
  `}var Se={acoes(){return t`
      <kk-icon-button
        name="tags"
        label=${n.calendario.tipos}
        @click=${()=>{R=!0,z=null,e()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${n.calendario.novoEvento}
        @click=${()=>X(s())}
      ></kk-icon-button>
    `},conteudo(){return U(),B?t`
      ${q()}
      ${me()}
      ${L===null?i:_e(L)}
      ${R?xe():i}
    `:t`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{Se as telaCalendario};