import{$ as e,S as t,ct as n,ft as r,h as i,it as a,tt as o,u as s,ut as c,x as l}from"./index-DtxwN5g2.js";import{CORES as u,ICONES as d,ULTIMO_MINUTO as f,agendaDosDias as p,carregar as ee,comoHora as m,corDoTipo as h,deHora as g,diaFinal as te,diaInicial as ne,excluirEvento as re,excluirTipo as ie,iconeDoTipo as ae,proximaOrdem as oe,salvarEvento as se,salvarTipo as _,tipoEmUso as v,tipoPadrao as y,tipoPorId as b}from"./dados-CZCwgwuE.js";var ce=[`dia`,`semana`,`mes`,`ano`,`agenda`],x=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function S(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function C(e,t){let n=S(e);return n.setDate(n.getDate()+t),n}function w(e){return C(e,-((e.getDay()+6)%7))}function T(t,n){if(t===`dia`){let t=e(n);return{de:t,ate:t}}if(t===`semana`||t===`agenda`){let t=w(n);return{de:e(t),ate:e(C(t,6))}}if(t===`mes`){let t=new Date(n.getFullYear(),n.getMonth(),1),r=new Date(n.getFullYear(),n.getMonth()+1,0);return{de:e(t),ate:e(r)}}let r=new Date(n.getFullYear(),0,1),i=new Date(n.getFullYear(),11,31);return{de:e(r),ate:e(i)}}function E(e,t,n){let r=S(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function le(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=w(t),n=C(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function D(t,n){let r=w(new Date(t,n,1)),i=C(w(new Date(t,n+1,0)),6),a=[];for(let t=r;t<=i;t=C(t,1))a.push({dia:e(t),numero:t.getDate(),doMes:t.getMonth()===n});return a}function ue(t){let n=w(t);return Array.from({length:7},(t,r)=>{let i=C(n,r);return{dia:e(i),rotulo:x[r]??``,numero:i.getDate()}})}function de(){return Array.from({length:17},(e,t)=>6+t)}function fe(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:D(e,n)}))}function pe(t){let n=[],[r=1970,i=1,a=1]=t.de.split(`-`).map(Number);for(let o=new Date(r,i-1,a);;o=C(o,1)){let r=e(o);if(r>t.ate)break;n.push(r)}return n}function me(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}var he=15;function ge(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+he),1380)}}function O(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function _e(e){let t=e.map(e=>ge(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var k=[],A=[],j=`semana`,M=new Date,N=null,P=!1,F=null,I=!1,L=!1,R=null;async function z(){let e=await ee();k=e.tipos,A=e.eventos,R=null,a()}function B(){I||L||R!==null||(L=!0,(async()=>{try{await z(),I=!0}catch(e){console.error(`Calendário: a carga falhou.`,e),R=t(e)}finally{L=!1,a()}})())}function ve(){R=null,B(),a()}var V=5;function ye(){let e=new Date().getFullYear(),t=new Set;for(let n=e-V;n<=e+V;n+=1)t.add(n);return t.add(M.getFullYear()),[...t].sort((e,t)=>e-t)}function H(e,t){M=new Date(e,t,1),a()}function be(){return r`
    <div class="chips" role="group" aria-label=${n.calendario.vista}>
      ${ce.map(e=>r`
          <button
            class="chip"
            ?data-ativo=${j===e}
            @click=${()=>{j=e,a()}}
          >
            ${n.calendario.vistas[e]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${n.calendario.mes}
        size="small"
        .value=${String(M.getMonth())}
        @kk-change=${e=>H(M.getFullYear(),Number(e.target.value))}
      >
        ${n.calendario.meses.map((e,t)=>r`<kk-option value=${t}>${e}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${n.calendario.ano}
        size="small"
        .value=${String(M.getFullYear())}
        @kk-change=${e=>H(Number(e.target.value),M.getMonth())}
      >
        ${ye().map(e=>r`<kk-option value=${e}>${e}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${n.calendario.anterior}
        @click=${()=>{M=E(j,M,-1),a()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{M=new Date,a()}}
      >
        ${n.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${n.calendario.proximo}
        @click=${()=>{M=E(j,M,1),a()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${le(j,M)}</span>
    </div>
  `}function U(e){N={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:ne(e),horaInicio:m(e.hora_inicio_min),dataFim:te(e),horaFim:m(e.hora_fim_min),descricao:e.descricao},a()}function W(e){return e.dia_inteiro===1?`${n.calendario.diaInteiro} — ${e.titulo}`:`${m(e.hora_inicio_min)} – ${m(e.hora_fim_min)} — ${e.titulo}`}function G(e){let t=h(k,e.tipo_id);return r`
    <button
      class="pastilha"
      style=${`--cor-evento:${t}`}
      title=${W(e)}
      @click=${()=>U(e)}
    >
      ${e.dia_inteiro===1?c:r`<span class="pastilha__hora">${m(e.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${e.titulo}</span>
    </button>
  `}function xe(e){let t=h(k,e.tipo_id),i=b(k,e.tipo_id);return r`
    <button class="evento" style=${`--cor-evento:${t}`} @click=${()=>U(e)}>
      <span class="evento__quando">
        ${e.dia_inteiro===1?n.calendario.diaInteiro:`${m(e.hora_inicio_min)} – ${m(e.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${ae(k,e.tipo_id)}></kk-icon>${e.titulo}
      </span>
      ${i===void 0?c:r`<span class="evento__tipo">${i.nome}</span>`}
      ${e.descricao===``?c:r`<span class="evento__descricao">${e.descricao}</span>`}
    </button>
  `}function K(e,t){let n=t??480;N={id:0,titulo:``,tipoId:y(k),diaInteiro:t===void 0,dataInicio:e,horaInicio:m(n),horaFim:m(Math.min(n+60,f)),dataFim:e,descricao:``},a()}function Se(e,t,i){let a=i.get(e.dia)??[];return r`
    <div class="mes__celula" ?data-fora=${!e.doMes} ?data-hoje=${e.dia===t}>
      <button
        class="mes__numero"
        aria-label=${n.calendario.novoEm(e.dia)}
        @click=${()=>K(e.dia)}
      >
        ${e.numero}
      </button>
      <div class="mes__eventos">${a.map(e=>G(e))}</div>
    </div>
  `}function Ce(){let t=e(),n=D(M.getFullYear(),M.getMonth()),i=p(A,n.map(e=>e.dia));return r`
    <div class="mes">
      ${x.map(e=>r`<span class="mes__cabecalho">${e}</span>`)}
      ${n.map(e=>Se(e,t,i))}
    </div>
  `}var q=null,J=!1;function we(){J||(J=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`calendario`&&(q=null)}))}function Te(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function Ee(t){we();let n=`${j}:${t.map(e=>e.dia).join(`,`)}`;if(q===n)return;q=n;let r=e();if(!t.some(e=>e.dia===r))return;let i=O();i!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*i-Te()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function Y(t){let i=de(),a=e(),o=p(A,t.map(e=>e.dia)),s=O();return Ee(t),r`
    <div class="grade" style=${`--colunas:${t.length}`}>
      <span class="grade__canto"></span>
      ${t.map(e=>r`
          <span class="grade__dia" ?data-hoje=${e.dia===a}>
            ${e.rotulo} ${e.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${i.map(e=>r`<span class="grade__hora">${m(e*60)}</span>`)}
      </div>

      ${t.map(e=>{let t=o.get(e.dia)??[],l=t.filter(e=>e.dia_inteiro===1),u=t.filter(e=>e.dia_inteiro===0),d=_e(u.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return r`
          <div class="grade__coluna">
            ${s===null||e.dia!==a?c:r`<span class="grade__agora" style=${`top:${s*100}%`}></span>`}

            ${i.map(t=>r`
                <button
                  class="grade__vaga"
                  aria-label=${n.calendario.novoAs(e.rotulo,m(t*60))}
                  @click=${()=>K(e.dia,t*60)}
                ></button>
              `)}

            ${l.length===0?c:r`
                  <div class="grade__inteiros">
                    ${l.map(e=>G(e))}
                  </div>
                `}

            ${u.map((e,t)=>{let n=d[t];if(n===void 0)return c;let i=100/n.colunas;return r`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${h(k,e.tipo_id)};top:${n.topo*100}%;height:${n.altura*100}%;inset-inline-start:calc(${n.coluna*i}% + 1px);width:calc(${i}% - 2px)`}
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
  `}function De(){return Y([{dia:e(M),rotulo:M.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:M.getDate()}])}function Oe(){return Y(ue(M))}function ke(){let t=e(),i=fe(M.getFullYear()),s=p(A,i.flatMap(e=>e.celulas.map(e=>e.dia)));return r`
    <div class="ano">
      ${i.map(e=>r`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{M=new Date(M.getFullYear(),e.mes,1),j=`mes`,a()}}
            >
              ${e.rotulo}
            </button>

            <div class="ano__grade">
              ${x.map(e=>r`<span class="ano__cabecalho">${e.slice(0,1)}</span>`)}
              ${e.celulas.map(e=>{let i=(s.get(e.dia)??[]).length;return r`
                  <button
                    class="ano__dia"
                    ?data-fora=${!e.doMes}
                    ?data-hoje=${e.dia===t}
                    ?data-com-evento=${i>0}
                    title=${i===0?``:n.calendario.eventos(i)}
                    @click=${()=>{M=new Date(o(e.dia)),j=`dia`,a()}}
                  >
                    ${e.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function Ae(){let e=[...p(A,pe(T(`agenda`,M))).entries()].filter(([,e])=>e.length>0);return e.length===0?r`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${n.calendario.semEventos}</p>
      </div>
    `:r`
    <div class="calendario-agenda">
      ${e.map(([e,t])=>r`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${me(e)}</span>
            ${t.map(e=>xe(e))}
          </div>
        `)}
    </div>
  `}function je(){return j===`dia`?De():j===`semana`?Oe():j===`mes`?Ce():j===`ano`?ke():Ae()}function X(e){N!==null&&(N={...N,...e})}function Z(e){F!==null&&(F={...F,...e})}function Q(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t=0,n=0,r=0]=e.split(`-`).map(Number),i=new Date(t,n-1,r);return i.getFullYear()===t&&i.getMonth()===n-1&&i.getDate()===r}async function $(e){if(!Q(e.dataInicio)){s(n.calendario.dataInvalida,`warning`);return}let t=!Q(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,r=+!!e.diaInteiro,i=g(e.horaInicio),a=g(e.horaFim),c=t===e.dataInicio&&a<i?i:a;try{await se({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?n.acervo.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??y(k),data_inicio_epoch:o(e.dataInicio),hora_inicio_min:r===1?0:i,data_fim_epoch:o(t),hora_fim_min:r===1?f:c,dia_inteiro:r,descricao:e.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),s(n.calendario.eventoNaoSalvo,`danger`);return}N=null,s(n.calendario.eventoSalvo),await z()}async function Me(e){if(await i({titulo:n.calendario.excluirEvento,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})){try{await re(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),s(n.calendario.eventoNaoExcluido,`danger`);return}N=null,s(n.calendario.eventoExcluido),await z()}}function Ne(e){return r`
    <kk-dialog
      open
      label=${e.id>0?n.calendario.editarEvento:n.calendario.novoEvento}
      @kk-after-hide=${()=>{N=null,a()}}
    >
      <div class="formulario">
        <kk-input
          label=${n.calendario.titulo}
          placeholder=${n.calendario.tituloPlaceholder}
          .value=${e.titulo}
          @kk-input=${e=>{X({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${n.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${k.map(t=>r`
                <button
                  class="tipo-chip"
                  ?data-ativo=${e.tipoId===t.id}
                  @click=${()=>{X({tipoId:t.id??null}),a()}}
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
          @kk-change=${e=>{X({diaInteiro:e.target.checked}),a()}}
        >
          ${n.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${n.calendario.dataInicio}
            .value=${e.dataInicio}
            @kk-change=${t=>{let n=t.target.value,r=N?.dataFim??e.dataFim;X({dataInicio:n,dataFim:r<n?n:r}),a()}}
          ></kk-input>
          ${e.diaInteiro?c:r`
                <kk-input
                  type="time"
                  label=${n.calendario.horaInicio}
                  .value=${e.horaInicio}
                  @kk-change=${e=>{X({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${n.calendario.dataFim}
            min=${e.dataInicio}
            .value=${e.dataFim}
            @kk-change=${e=>{X({dataFim:e.target.value})}}
          ></kk-input>
          ${e.diaInteiro?c:r`
                <kk-input
                  type="time"
                  label=${n.calendario.horaFim}
                  .value=${e.horaFim}
                  @kk-change=${e=>{X({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${n.calendario.descricao}
          placeholder=${n.calendario.descricaoPlaceholder}
          .value=${e.descricao}
          @kk-input=${e=>{X({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${e.id>0?r`
              <kk-button variant="danger" outline @click=${()=>void Me(e)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
              </kk-button>
            `:c}
        <kk-button
          @click=${()=>{N=null,a()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{N!==null&&$(N)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function Pe(e){let t=e.nome.trim()===``?n.calendario.tipoSemNome:e.nome.trim(),r=e.id>0?b(k,e.id):void 0;try{await _({...r??{ordem:oe(k)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),s(n.calendario.tipoNaoSalvo,`danger`);return}F=null,await z()}async function Fe(e){if(e.id!==void 0){if(v(A,e.id)){await i({titulo:n.calendario.tipoEmUsoTitulo,texto:n.calendario.tipoEmUsoTexto,rotuloConfirmar:n.acoes.fechar});return}if(await i({titulo:n.calendario.excluirTipo,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})){try{await ie(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),s(n.calendario.tipoNaoExcluido,`danger`);return}await z()}}}function Ie(e){return r`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${n.calendario.tipoNome}
        .value=${e.nome}
        @kk-input=${e=>{Z({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${n.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(u).map(([t,n])=>r`
              <button
                class="cor-chip"
                ?data-ativo=${e.cor===t}
                style=${`background:${n}`}
                aria-label=${t}
                @click=${()=>{Z({cor:t}),a()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${n.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(d).map(([t,n])=>r`
              <button
                class="tipo-chip"
                ?data-ativo=${e.icone===t}
                aria-label=${t}
                @click=${()=>{Z({icone:t}),a()}}
              >
                <kk-icon name=${n}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <kk-switch
        ?checked=${e.especial}
        @kk-change=${e=>{Z({especial:e.target.checked})}}
      >
        ${n.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{F!==null&&Pe(F)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,a()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Le(){return r`
    <kk-dialog
      open
      label=${n.calendario.tipos}
      @kk-after-hide=${()=>{P=!1,F=null,a()}}
    >
      ${F===null?r`
            <div class="tipos-lista">
              ${k.map(e=>r`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${u[e.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${d[e.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${e.nome}</span>
                    ${e.marca_especial===1?r`<kk-badge variant="success" pill>${n.calendario.especial}</kk-badge>`:c}
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.editar}
                      @click=${()=>{F={id:e.id??0,nome:e.nome,cor:e.cor_chave,icone:e.icone,especial:e.marca_especial===1},a()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${n.calendario.excluirTipo}
                      @click=${()=>void Fe(e)}
                    ></kk-icon-button>
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{F={id:0,nome:``,cor:`primary`,icone:`evento`,especial:!1},a()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${n.calendario.novoTipo}
            </kk-button>
          `:Ie(F)}
    </kk-dialog>
  `}var Re={aoVoltar(){return N===null?P?(F===null?P=!1:F=null,a(),!0):!1:(N=null,a(),!0)},acoes(){if(I)return r`
      <kk-icon-button
        name="tags"
        label=${n.calendario.tipos}
        @click=${()=>{P=!0,F=null,a()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${n.calendario.novoEvento}
        @click=${()=>K(e())}
      ></kk-icon-button>
    `},conteudo(){return B(),R===null?I?r`
      ${be()}
      ${je()}
      ${N===null?c:Ne(N)}
      ${P?Le():c}
    `:r`<div class="carregando"><kk-spinner></kk-spinner></div>`:l(R,ve)}};export{Re as telaCalendario};