import{Y as e,Z as t,ct as n,et as r,g as i,it as a,m as o,ot as s,v as c,y as l}from"./index-CFqbq_HS.js";import{CORES as u,ICONES as d,ULTIMO_MINUTO as f,agendaDosDias as p,carregar as ee,comoHora as m,corDoTipo as h,deHora as g,diaFinal as te,diaInicial as ne,excluirEvento as re,excluirTipo as ie,iconeDoTipo as ae,proximaOrdem as oe,salvarEvento as se,salvarTipo as _,tipoEmUso as v,tipoPadrao as y,tipoPorId as b}from"./dados-DQCnYYxb.js";var ce=[`dia`,`semana`,`mes`,`ano`,`agenda`],x=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function S(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function C(e,t){let n=S(e);return n.setDate(n.getDate()+t),n}function w(e){return C(e,-((e.getDay()+6)%7))}function T(t,n){if(t===`dia`){let t=e(n);return{de:t,ate:t}}if(t===`semana`||t===`agenda`){let t=w(n);return{de:e(t),ate:e(C(t,6))}}if(t===`mes`){let t=new Date(n.getFullYear(),n.getMonth(),1),r=new Date(n.getFullYear(),n.getMonth()+1,0);return{de:e(t),ate:e(r)}}let r=new Date(n.getFullYear(),0,1),i=new Date(n.getFullYear(),11,31);return{de:e(r),ate:e(i)}}function E(e,t,n){let r=S(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function le(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=w(t),n=C(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function D(t,n){let r=w(new Date(t,n,1)),i=C(w(new Date(t,n+1,0)),6),a=[];for(let t=r;t<=i;t=C(t,1))a.push({dia:e(t),numero:t.getDate(),doMes:t.getMonth()===n});return a}function ue(t){let n=w(t);return Array.from({length:7},(t,r)=>{let i=C(n,r);return{dia:e(i),rotulo:x[r]??``,numero:i.getDate()}})}function de(){return Array.from({length:17},(e,t)=>6+t)}function fe(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:D(e,n)}))}function pe(t){let n=[],[r=1970,i=1,a=1]=t.de.split(`-`).map(Number);for(let o=new Date(r,i-1,a);;o=C(o,1)){let r=e(o);if(r>t.ate)break;n.push(r)}return n}function me(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}var he=15;function ge(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+he),1380)}}function O(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function _e(e){let t=e.map(e=>ge(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var k=[],A=[],j=`semana`,M=new Date,N=null,P=!1,F=null,I=!1,L=!1,R=null;async function z(){let e=await ee();k=e.tipos,A=e.eventos,R=null,r()}function B(){I||L||R!==null||(L=!0,(async()=>{try{await z(),I=!0}catch(e){console.error(`Calendário: a carga falhou.`,e),R=l(e)}finally{L=!1,r()}})())}function ve(){R=null,B(),r()}var V=5;function ye(){let e=new Date().getFullYear(),t=new Set;for(let n=e-V;n<=e+V;n+=1)t.add(n);return t.add(M.getFullYear()),[...t].sort((e,t)=>e-t)}function H(e,t){M=new Date(e,t,1),r()}function be(){return n`
    <div class="chips" role="group" aria-label=${a.calendario.vista}>
      ${ce.map(e=>n`
          <button
            class="chip"
            ?data-ativo=${j===e}
            @click=${()=>{j=e,r()}}
          >
            ${a.calendario.vistas[e]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${a.calendario.mes}
        size="small"
        .value=${String(M.getMonth())}
        @kk-change=${e=>H(M.getFullYear(),Number(e.target.value))}
      >
        ${a.calendario.meses.map((e,t)=>n`<kk-option value=${t}>${e}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${a.calendario.ano}
        size="small"
        .value=${String(M.getFullYear())}
        @kk-change=${e=>H(Number(e.target.value),M.getMonth())}
      >
        ${ye().map(e=>n`<kk-option value=${e}>${e}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${a.calendario.anterior}
        @click=${()=>{M=E(j,M,-1),r()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{M=new Date,r()}}
      >
        ${a.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${a.calendario.proximo}
        @click=${()=>{M=E(j,M,1),r()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${le(j,M)}</span>
    </div>
  `}function U(e){N={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:ne(e),horaInicio:m(e.hora_inicio_min),dataFim:te(e),horaFim:m(e.hora_fim_min),descricao:e.descricao},r()}function W(e){return e.dia_inteiro===1?`${a.calendario.diaInteiro} — ${e.titulo}`:`${m(e.hora_inicio_min)} – ${m(e.hora_fim_min)} — ${e.titulo}`}function G(e){let t=h(k,e.tipo_id);return n`
    <button
      class="pastilha"
      style=${`--cor-evento:${t}`}
      title=${W(e)}
      @click=${()=>U(e)}
    >
      ${e.dia_inteiro===1?s:n`<span class="pastilha__hora">${m(e.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${e.titulo}</span>
    </button>
  `}function xe(e){let t=h(k,e.tipo_id),r=b(k,e.tipo_id);return n`
    <button class="evento" style=${`--cor-evento:${t}`} @click=${()=>U(e)}>
      <span class="evento__quando">
        ${e.dia_inteiro===1?a.calendario.diaInteiro:`${m(e.hora_inicio_min)} – ${m(e.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${ae(k,e.tipo_id)}></kk-icon>${e.titulo}
      </span>
      ${r===void 0?s:n`<span class="evento__tipo">${r.nome}</span>`}
      ${e.descricao===``?s:n`<span class="evento__descricao">${e.descricao}</span>`}
    </button>
  `}function K(e,t){let n=t??480;N={id:0,titulo:``,tipoId:y(k),diaInteiro:t===void 0,dataInicio:e,horaInicio:m(n),horaFim:m(Math.min(n+60,f)),dataFim:e,descricao:``},r()}function Se(e,t,r){let i=r.get(e.dia)??[];return n`
    <div class="mes__celula" ?data-fora=${!e.doMes} ?data-hoje=${e.dia===t}>
      <button
        class="mes__numero"
        aria-label=${a.calendario.novoEm(e.dia)}
        @click=${()=>K(e.dia)}
      >
        ${e.numero}
      </button>
      <div class="mes__eventos">${i.map(e=>G(e))}</div>
    </div>
  `}function Ce(){let t=e(),r=D(M.getFullYear(),M.getMonth()),i=p(A,r.map(e=>e.dia));return n`
    <div class="mes">
      ${x.map(e=>n`<span class="mes__cabecalho">${e}</span>`)}
      ${r.map(e=>Se(e,t,i))}
    </div>
  `}var q=null,J=!1;function we(){J||(J=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`calendario`&&(q=null)}))}function Te(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function Ee(t){we();let n=`${j}:${t.map(e=>e.dia).join(`,`)}`;if(q===n)return;q=n;let r=e();if(!t.some(e=>e.dia===r))return;let i=O();i!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*i-Te()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function Y(t){let r=de(),i=e(),o=p(A,t.map(e=>e.dia)),c=O();return Ee(t),n`
    <div class="grade" style=${`--colunas:${t.length}`}>
      <span class="grade__canto"></span>
      ${t.map(e=>n`
          <span class="grade__dia" ?data-hoje=${e.dia===i}>
            ${e.rotulo} ${e.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${r.map(e=>n`<span class="grade__hora">${m(e*60)}</span>`)}
      </div>

      ${t.map(e=>{let t=o.get(e.dia)??[],l=t.filter(e=>e.dia_inteiro===1),u=t.filter(e=>e.dia_inteiro===0),d=_e(u.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return n`
          <div class="grade__coluna">
            ${c===null||e.dia!==i?s:n`<span class="grade__agora" style=${`top:${c*100}%`}></span>`}

            ${r.map(t=>n`
                <button
                  class="grade__vaga"
                  aria-label=${a.calendario.novoAs(e.rotulo,m(t*60))}
                  @click=${()=>K(e.dia,t*60)}
                ></button>
              `)}

            ${l.length===0?s:n`
                  <div class="grade__inteiros">
                    ${l.map(e=>G(e))}
                  </div>
                `}

            ${u.map((e,t)=>{let r=d[t];if(r===void 0)return s;let i=100/r.colunas;return n`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${h(k,e.tipo_id)};top:${r.topo*100}%;height:${r.altura*100}%;inset-inline-start:calc(${r.coluna*i}% + 1px);width:calc(${i}% - 2px)`}
                  title=${W(e)}
                  @click=${()=>U(e)}
                >
                  <span class="grade__evento-hora">${m(e.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${e.titulo}</span>
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function De(){return Y([{dia:e(M),rotulo:M.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:M.getDate()}])}function Oe(){return Y(ue(M))}function ke(){let i=e(),o=fe(M.getFullYear()),s=p(A,o.flatMap(e=>e.celulas.map(e=>e.dia)));return n`
    <div class="ano">
      ${o.map(e=>n`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{M=new Date(M.getFullYear(),e.mes,1),j=`mes`,r()}}
            >
              ${e.rotulo}
            </button>

            <div class="ano__grade">
              ${x.map(e=>n`<span class="ano__cabecalho">${e.slice(0,1)}</span>`)}
              ${e.celulas.map(e=>{let o=(s.get(e.dia)??[]).length;return n`
                  <button
                    class="ano__dia"
                    ?data-fora=${!e.doMes}
                    ?data-hoje=${e.dia===i}
                    ?data-com-evento=${o>0}
                    title=${o===0?``:a.calendario.eventos(o)}
                    @click=${()=>{M=new Date(t(e.dia)),j=`dia`,r()}}
                  >
                    ${e.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function Ae(){let e=[...p(A,pe(T(`agenda`,M))).entries()].filter(([,e])=>e.length>0);return e.length===0?n`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${a.calendario.semEventos}</p>
      </div>
    `:n`
    <div class="calendario-agenda">
      ${e.map(([e,t])=>n`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${me(e)}</span>
            ${t.map(e=>xe(e))}
          </div>
        `)}
    </div>
  `}function je(){return j===`dia`?De():j===`semana`?Oe():j===`mes`?Ce():j===`ano`?ke():Ae()}function X(e){N!==null&&(N={...N,...e})}function Z(e){F!==null&&(F={...F,...e})}function Q(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t=0,n=0,r=0]=e.split(`-`).map(Number),i=new Date(t,n-1,r);return i.getFullYear()===t&&i.getMonth()===n-1&&i.getDate()===r}async function $(e){if(!Q(e.dataInicio)){o(a.calendario.dataInvalida,`warning`);return}let n=!Q(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,r=+!!e.diaInteiro,i=g(e.horaInicio),s=g(e.horaFim),c=n===e.dataInicio&&s<i?i:s;try{await se({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?a.acervo.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??y(k),data_inicio_epoch:t(e.dataInicio),hora_inicio_min:r===1?0:i,data_fim_epoch:t(n),hora_fim_min:r===1?f:c,dia_inteiro:r,descricao:e.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),o(a.calendario.eventoNaoSalvo,`danger`);return}N=null,o(a.calendario.eventoSalvo),await z()}async function Me(e){if(await i({titulo:a.calendario.excluirEvento,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})){try{await re(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),o(a.calendario.eventoNaoExcluido,`danger`);return}N=null,o(a.calendario.eventoExcluido),await z()}}function Ne(e){return n`
    <kk-dialog
      open
      label=${e.id>0?a.calendario.editarEvento:a.calendario.novoEvento}
      @kk-after-hide=${()=>{N=null,r()}}
    >
      <div class="formulario">
        <kk-input
          label=${a.calendario.titulo}
          placeholder=${a.calendario.tituloPlaceholder}
          .value=${e.titulo}
          @kk-input=${e=>{X({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${a.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${k.map(t=>n`
                <button
                  class="tipo-chip"
                  ?data-ativo=${e.tipoId===t.id}
                  @click=${()=>{X({tipoId:t.id??null}),r()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${u[t.cor_chave]??``}`}
                  ></span>
                  ${t.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${e.diaInteiro}
          @kk-change=${e=>{X({diaInteiro:e.target.checked}),r()}}
        >
          ${a.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${a.calendario.dataInicio}
            .value=${e.dataInicio}
            @kk-change=${t=>{let n=t.target.value,i=N?.dataFim??e.dataFim;X({dataInicio:n,dataFim:i<n?n:i}),r()}}
          ></kk-input>
          ${e.diaInteiro?s:n`
                <kk-input
                  type="time"
                  label=${a.calendario.horaInicio}
                  .value=${e.horaInicio}
                  @kk-change=${e=>{X({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${a.calendario.dataFim}
            min=${e.dataInicio}
            .value=${e.dataFim}
            @kk-change=${e=>{X({dataFim:e.target.value})}}
          ></kk-input>
          ${e.diaInteiro?s:n`
                <kk-input
                  type="time"
                  label=${a.calendario.horaFim}
                  .value=${e.horaFim}
                  @kk-change=${e=>{X({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${a.calendario.descricao}
          placeholder=${a.calendario.descricaoPlaceholder}
          .value=${e.descricao}
          @kk-input=${e=>{X({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${e.id>0?n`
              <kk-button variant="danger" outline @click=${()=>void Me(e)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${a.acoes.excluir}
              </kk-button>
            `:s}
        <kk-button
          @click=${()=>{N=null,r()}}
        >
          ${a.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{N!==null&&$(N)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${a.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function Pe(e){let t=e.nome.trim()===``?a.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?b(k,e.id):void 0;try{await _({...n??{ordem:oe(k)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),o(a.calendario.tipoNaoSalvo,`danger`);return}F=null,await z()}async function Fe(e){if(e.id!==void 0){if(v(A,e.id)){await i({titulo:a.calendario.tipoEmUsoTitulo,texto:a.calendario.tipoEmUsoTexto,rotuloConfirmar:a.acoes.fechar});return}if(await i({titulo:a.calendario.excluirTipo,texto:a.acervo.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})){try{await ie(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),o(a.calendario.tipoNaoExcluido,`danger`);return}await z()}}}function Ie(e){return n`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${a.calendario.tipoNome}
        .value=${e.nome}
        @kk-input=${e=>{Z({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${a.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(u).map(([t,i])=>n`
              <button
                class="cor-chip"
                ?data-ativo=${e.cor===t}
                style=${`background:${i}`}
                aria-label=${t}
                @click=${()=>{Z({cor:t}),r()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${a.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(d).map(([t,i])=>n`
              <button
                class="tipo-chip"
                ?data-ativo=${e.icone===t}
                aria-label=${t}
                @click=${()=>{Z({icone:t}),r()}}
              >
                <kk-icon name=${i}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <kk-switch
        ?checked=${e.especial}
        @kk-change=${e=>{Z({especial:e.target.checked})}}
      >
        ${a.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{F!==null&&Pe(F)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${a.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,r()}}
        >
          ${a.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Le(){return n`
    <kk-dialog
      open
      label=${a.calendario.tipos}
      @kk-after-hide=${()=>{P=!1,F=null,r()}}
    >
      ${F===null?n`
            <div class="tipos-lista">
              ${k.map(e=>n`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${u[e.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${d[e.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${e.nome}</span>
                    ${e.marca_especial===1?n`<kk-badge variant="success" pill>${a.calendario.especial}</kk-badge>`:s}
                    <kk-icon-button
                      name="pencil"
                      label=${a.acoes.editar}
                      @click=${()=>{F={id:e.id??0,nome:e.nome,cor:e.cor_chave,icone:e.icone,especial:e.marca_especial===1},r()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${a.calendario.excluirTipo}
                      @click=${()=>void Fe(e)}
                    ></kk-icon-button>
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{F={id:0,nome:``,cor:`primary`,icone:`evento`,especial:!1},r()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${a.calendario.novoTipo}
            </kk-button>
          `:Ie(F)}
    </kk-dialog>
  `}var Re={aoVoltar(){return N===null?P?(F===null?P=!1:F=null,r(),!0):!1:(N=null,r(),!0)},acoes(){if(I)return n`
      <kk-icon-button
        name="tags"
        label=${a.calendario.tipos}
        @click=${()=>{P=!0,F=null,r()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${a.calendario.novoEvento}
        @click=${()=>K(e())}
      ></kk-icon-button>
    `},conteudo(){return B(),R===null?I?n`
      ${be()}
      ${je()}
      ${N===null?s:Ne(N)}
      ${P?Le():s}
    `:n`<div class="carregando"><kk-spinner></kk-spinner></div>`:c(R,ve)}};export{Re as telaCalendario};