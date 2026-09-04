import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{i as r,o as i}from"./data-DRe9t3tD.js";import{E as a,o,r as s}from"./index-CRLpDONK.js";import{CORES as c,ICONES as l,carregar as ee,comoHora as u,corDoTipo as d,deHora as f,diaFinal as te,diaInicial as ne,eventosDoDia as p,excluirEvento as re,excluirTipo as m,iconeDoTipo as h,proximaOrdem as g,salvarEvento as _,salvarTipo as v,tipoEmUso as y,tipoPorId as b}from"./dados-zuuTSEAF.js";var x=[`dia`,`semana`,`mes`,`ano`,`agenda`],ie=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function S(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function C(e,t){let n=S(e);return n.setDate(n.getDate()+t),n}function w(e){return C(e,-((e.getDay()+6)%7))}function ae(e,t){if(e===`dia`){let e=r(t);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=w(t);return{de:r(e),ate:r(C(e,6))}}if(e===`mes`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth()+1,0);return{de:r(e),ate:r(n)}}let n=new Date(t.getFullYear(),0,1),i=new Date(t.getFullYear(),11,31);return{de:r(n),ate:r(i)}}function T(e,t,n){let r=S(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function E(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=w(t),n=C(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function D(e,t){let n=w(new Date(e,t,1)),i=C(w(new Date(e,t+1,0)),6),a=[];for(let e=n;e<=i;e=C(e,1))a.push({dia:r(e),numero:e.getDate(),doMes:e.getMonth()===t});return a}function O(e){let t=w(e);return Array.from({length:7},(e,n)=>{let i=C(t,n);return{dia:r(i),rotulo:ie[n]??``,numero:i.getDate()}})}function k(){return Array.from({length:17},(e,t)=>6+t)}function A(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:D(e,n)}))}function j(e){let t=[],[n=1970,i=1,a=1]=e.de.split(`-`).map(Number);for(let o=new Date(n,i-1,a);;o=C(o,1)){let n=r(o);if(n>e.ate)break;t.push(n)}return t}function oe(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}function se(e,t){let n=1380,r=1020,i=Math.min(Math.max(e,360),n),a=Math.min(Math.max(t>e?t:n,i+15),n);return{topo:(i-360)/r,altura:(a-i)/r}}var M=[],N=[],P=`semana`,F=new Date,I=null,L=!1,R=null,z=!1,B=!1;async function V(){let e=await ee();M=e.tipos,N=e.eventos,a()}function H(){z||B||(B=!0,(async()=>{try{await V(),z=!0}finally{B=!1,a()}})())}var U=5;function W(){let e=new Date().getFullYear(),t=new Set;for(let n=e-U;n<=e+U;n+=1)t.add(n);return t.add(F.getFullYear()),[...t].sort((e,t)=>e-t)}function G(e,t){F=new Date(e,t,1),a()}function K(){return e`
    <div class="chips" role="group" aria-label=${n.calendario.vista}>
      ${x.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${P===t}
            @click=${()=>{P=t,a()}}
          >
            ${n.calendario.vistas[t]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${n.calendario.mes}
        size="small"
        .value=${String(F.getMonth())}
        @kk-change=${e=>G(F.getFullYear(),Number(e.target.value))}
      >
        ${n.calendario.meses.map((t,n)=>e`<kk-option value=${n}>${t}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${n.calendario.ano}
        size="small"
        .value=${String(F.getFullYear())}
        @kk-change=${e=>G(Number(e.target.value),F.getMonth())}
      >
        ${W().map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${n.calendario.anterior}
        @click=${()=>{F=T(P,F,-1),a()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{F=new Date,a()}}
      >
        ${n.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${n.calendario.proximo}
        @click=${()=>{F=T(P,F,1),a()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${E(P,F)}</span>
    </div>
  `}function q(e){I={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:ne(e),horaInicio:u(e.hora_inicio_min),dataFim:te(e),horaFim:u(e.hora_fim_min),descricao:e.descricao},a()}function J(n){let r=d(M,n.tipo_id);return e`
    <button
      class="pastilha"
      style=${`--cor-evento:${r}`}
      title=${n.titulo}
      @click=${()=>q(n)}
    >
      ${n.dia_inteiro===1?t:e`<span class="pastilha__hora">${u(n.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${n.titulo}</span>
    </button>
  `}function ce(r){let i=d(M,r.tipo_id),a=b(M,r.tipo_id);return e`
    <button class="evento" style=${`--cor-evento:${i}`} @click=${()=>q(r)}>
      <span class="evento__quando">
        ${r.dia_inteiro===1?n.calendario.diaInteiro:`${u(r.hora_inicio_min)} – ${u(r.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${h(M,r.tipo_id)}></kk-icon>${r.titulo}
      </span>
      ${a===void 0?t:e`<span class="evento__tipo">${a.nome}</span>`}
      ${r.descricao===``?t:e`<span class="evento__descricao">${r.descricao}</span>`}
    </button>
  `}function Y(e,t){I={id:0,titulo:``,tipoId:M[0]?.id??0,diaInteiro:t===void 0,dataInicio:e,horaInicio:u(t??480),dataFim:e,horaFim:u((t??480)+60),descricao:``},a()}function le(t,r){let i=p(N,t.dia);return e`
    <div class="mes__celula" ?data-fora=${!t.doMes} ?data-hoje=${t.dia===r}>
      <button
        class="mes__numero"
        aria-label=${n.calendario.novoEm(t.dia)}
        @click=${()=>Y(t.dia)}
      >
        ${t.numero}
      </button>
      <div class="mes__eventos">${i.map(e=>J(e))}</div>
    </div>
  `}function ue(){let t=r();return e`
    <div class="mes">
      ${O(F).map(t=>e`<span class="mes__cabecalho">${t.rotulo}</span>`)}
      ${D(F.getFullYear(),F.getMonth()).map(e=>le(e,t))}
    </div>
  `}function X(t){let i=k(),a=r();return e`
    <div class="grade" style=${`--colunas:${t.length}`}>
      <span class="grade__canto"></span>
      ${t.map(t=>e`
          <span class="grade__dia" ?data-hoje=${t.dia===a}>
            ${t.rotulo} ${t.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${i.map(t=>e`<span class="grade__hora">${u(t*60)}</span>`)}
      </div>

      ${t.map(t=>{let r=p(N,t.dia),a=r.filter(e=>e.dia_inteiro===1),o=r.filter(e=>e.dia_inteiro===0);return e`
          <div class="grade__coluna">
            ${i.map(r=>e`
                <button
                  class="grade__vaga"
                  aria-label=${n.calendario.novoAs(t.rotulo,u(r*60))}
                  @click=${()=>Y(t.dia,r*60)}
                ></button>
              `)}

            ${a.map(t=>e`
                <span class="grade__inteiro" style=${`--cor-evento:${d(M,t.tipo_id)}`}>
                  ${J(t)}
                </span>
              `)}

            ${o.map(t=>{let n=se(t.hora_inicio_min,t.hora_fim_min);return e`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${d(M,t.tipo_id)};top:${n.topo*100}%;height:${n.altura*100}%`}
                  @click=${()=>q(t)}
                >
                  <span class="grade__evento-hora">${u(t.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${t.titulo}</span>
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function de(){return X([{dia:r(F),rotulo:F.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:F.getDate()}])}function fe(){return X(O(F))}function pe(){let t=r();return e`
    <div class="ano">
      ${A(F.getFullYear()).map(r=>e`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{F=new Date(F.getFullYear(),r.mes,1),P=`mes`,a()}}
            >
              ${r.rotulo}
            </button>

            <div class="ano__grade">
              ${O(F).map(t=>e`<span class="ano__cabecalho">${t.rotulo.slice(0,1)}</span>`)}
              ${r.celulas.map(r=>{let o=p(N,r.dia).length;return e`
                  <button
                    class="ano__dia"
                    ?data-fora=${!r.doMes}
                    ?data-hoje=${r.dia===t}
                    ?data-com-evento=${o>0}
                    title=${o===0?``:n.calendario.eventos(o)}
                    @click=${()=>{F=new Date(i(r.dia)),P=`dia`,a()}}
                  >
                    ${r.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function me(){let t=j(ae(`agenda`,F)).filter(e=>p(N,e).length>0);return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${n.calendario.semEventos}</p>
      </div>
    `:e`
    <div class="agenda">
      ${t.map(t=>e`
          <div class="agenda__dia">
            <span class="agenda__data">${oe(t)}</span>
            ${p(N,t).map(e=>ce(e))}
          </div>
        `)}
    </div>
  `}function he(){return P===`dia`?de():P===`semana`?fe():P===`mes`?ue():P===`ano`?pe():me()}function Z(e){I!==null&&(I={...I,...e})}function Q(e){R!==null&&(R={...R,...e})}async function ge(e){let t=e.dataFim===``||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,r=+!!e.diaInteiro;await _({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?n.acervo.semTitulo:e.titulo.trim(),tipo_id:Number(e.tipoId)||(M[0]?.id??0),data_inicio_epoch:i(e.dataInicio),hora_inicio_min:r===1?0:f(e.horaInicio),data_fim_epoch:i(t),hora_fim_min:r===1?1439:f(e.horaFim),dia_inteiro:r,descricao:e.descricao.trim()}),I=null,s(n.calendario.eventoSalvo),await V()}async function _e(e){await o({titulo:n.calendario.excluirEvento,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await re(e.id),I=null,s(n.calendario.eventoExcluido),await V())}function $(r){return e`
    <kk-dialog
      open
      label=${r.id>0?n.calendario.editarEvento:n.calendario.novoEvento}
      @kk-after-hide=${()=>{I=null,a()}}
    >
      <div class="formulario">
        <kk-input
          label=${n.calendario.titulo}
          placeholder=${n.calendario.tituloPlaceholder}
          .value=${r.titulo}
          @kk-input=${e=>{Z({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${n.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${M.map(t=>e`
                <button
                  class="tipo-chip"
                  ?data-ativo=${r.tipoId===t.id}
                  @click=${()=>{Z({tipoId:t.id??0}),a()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${c[t.cor_chave]??``}`}
                  ></span>
                  ${t.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${r.diaInteiro}
          @kk-change=${e=>{Z({diaInteiro:e.target.checked}),a()}}
        >
          ${n.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${n.calendario.dataInicio}
            .value=${r.dataInicio}
            @kk-change=${e=>{let t=e.target.value,n=I?.dataFim??r.dataFim;Z({dataInicio:t,dataFim:n<t?t:n}),a()}}
          ></kk-input>
          ${r.diaInteiro?t:e`
                <kk-input
                  type="time"
                  label=${n.calendario.horaInicio}
                  .value=${r.horaInicio}
                  @kk-change=${e=>{Z({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${n.calendario.dataFim}
            min=${r.dataInicio}
            .value=${r.dataFim}
            @kk-change=${e=>{Z({dataFim:e.target.value})}}
          ></kk-input>
          ${r.diaInteiro?t:e`
                <kk-input
                  type="time"
                  label=${n.calendario.horaFim}
                  .value=${r.horaFim}
                  @kk-change=${e=>{Z({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${n.calendario.descricao}
          placeholder=${n.calendario.descricaoPlaceholder}
          .value=${r.descricao}
          @kk-input=${e=>{Z({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${r.id>0?e`
              <kk-button variant="danger" outline @click=${()=>void _e(r)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
              </kk-button>
            `:t}
        <kk-button
          @click=${()=>{I=null,a()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{I!==null&&ge(I)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function ve(e){let t=e.nome.trim()===``?n.calendario.tipoSemNome:e.nome.trim(),r=e.id>0?b(M,e.id):void 0;await v({...r??{ordem:g(M)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial}),R=null,await V()}async function ye(e){if(e.id!==void 0){if(y(N,e.id)){await o({titulo:n.calendario.tipoEmUsoTitulo,texto:n.calendario.tipoEmUsoTexto,rotuloConfirmar:n.acoes.fechar});return}await o({titulo:n.calendario.excluirTipo,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})&&(await m(e.id),await V())}}function be(t){return e`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${n.calendario.tipoNome}
        .value=${t.nome}
        @kk-input=${e=>{Q({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${n.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(c).map(([n,r])=>e`
              <button
                class="cor-chip"
                ?data-ativo=${t.cor===n}
                style=${`background:${r}`}
                aria-label=${n}
                @click=${()=>{Q({cor:n}),a()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${n.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(l).map(([n,r])=>e`
              <button
                class="tipo-chip"
                ?data-ativo=${t.icone===n}
                aria-label=${n}
                @click=${()=>{Q({icone:n}),a()}}
              >
                <kk-icon name=${r}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <kk-switch
        ?checked=${t.especial}
        @kk-change=${e=>{Q({especial:e.target.checked})}}
      >
        ${n.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{R!==null&&ve(R)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,a()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function xe(){return e`
    <kk-dialog
      open
      label=${n.calendario.tipos}
      @kk-after-hide=${()=>{L=!1,R=null,a()}}
    >
      ${R===null?e`
            <div class="tipos-lista">
              ${M.map(r=>e`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${c[r.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${l[r.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${r.nome}</span>
                    ${r.marca_especial===1?e`<kk-badge variant="success" pill>${n.calendario.especial}</kk-badge>`:t}
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.editar}
                      @click=${()=>{R={id:r.id??0,nome:r.nome,cor:r.cor_chave,icone:r.icone,especial:r.marca_especial===1},a()}}
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
              @click=${()=>{R={id:0,nome:``,cor:`primary`,icone:`evento`,especial:!1},a()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${n.calendario.novoTipo}
            </kk-button>
          `:be(R)}
    </kk-dialog>
  `}var Se={acoes(){return e`
      <kk-icon-button
        name="tags"
        label=${n.calendario.tipos}
        @click=${()=>{L=!0,R=null,a()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${n.calendario.novoEvento}
        @click=${()=>Y(r())}
      ></kk-icon-button>
    `},conteudo(){return H(),z?e`
      ${K()}
      ${he()}
      ${I===null?t:$(I)}
      ${L?xe():t}
    `:e`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{Se as telaCalendario};