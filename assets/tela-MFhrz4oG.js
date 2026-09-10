import{E as e,S as t,T as n,b as r,ct as i,et as a,it as o,ot as s,p as c,u as l}from"./index-B9OuHCA8.js";import{CORES as u,ICONES as d,ULTIMO_MINUTO as f,agendaDosDias as p,carregar as ee,comoHora as m,corDoTipo as h,deHora as g,diaFinal as te,diaInicial as ne,excluirEvento as re,excluirTipo as _,iconeDoTipo as ie,proximaOrdem as ae,salvarEvento as oe,salvarTipo as se,tipoEmUso as ce,tipoPadrao as v,tipoPorId as y}from"./dados-jZ6FuaHi.js";var le=[`dia`,`semana`,`mes`,`ano`,`agenda`],b=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function x(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function S(e,t){let n=x(e);return n.setDate(n.getDate()+t),n}function C(e){return S(e,-((e.getDay()+6)%7))}function w(e,t){if(e===`dia`){let e=r(t);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=C(t);return{de:r(e),ate:r(S(e,6))}}if(e===`mes`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth()+1,0);return{de:r(e),ate:r(n)}}let n=new Date(t.getFullYear(),0,1),i=new Date(t.getFullYear(),11,31);return{de:r(n),ate:r(i)}}function T(e,t,n){let r=x(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function E(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=C(t),n=S(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function D(e,t){let n=C(new Date(e,t,1)),i=S(C(new Date(e,t+1,0)),6),a=[];for(let e=n;e<=i;e=S(e,1))a.push({dia:r(e),numero:e.getDate(),doMes:e.getMonth()===t});return a}function ue(e){let t=C(e);return Array.from({length:7},(e,n)=>{let i=S(t,n);return{dia:r(i),rotulo:b[n]??``,numero:i.getDate()}})}function de(){return Array.from({length:17},(e,t)=>6+t)}function fe(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:D(e,n)}))}function pe(e){let t=[],[n=1970,i=1,a=1]=e.de.split(`-`).map(Number);for(let o=new Date(n,i-1,a);;o=S(o,1)){let n=r(o);if(n>e.ate)break;t.push(n)}return t}function me(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}var he=15;function ge(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+he),1380)}}function O(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function _e(e){let t=e.map(e=>ge(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var k=[],A=[],j=`semana`,M=new Date,N=null,P=!1,F=null,I=!1,L=!1,R=null;async function z(){let e=await ee();k=e.tipos,A=e.eventos,R=null,a()}function B(){I||L||R!==null||(L=!0,(async()=>{try{await z(),I=!0}catch(t){console.error(`Calendário: a carga falhou.`,t),R=e(t)}finally{L=!1,a()}})())}function ve(){R=null,B(),a()}var V=5;function ye(){let e=new Date().getFullYear(),t=new Set;for(let n=e-V;n<=e+V;n+=1)t.add(n);return t.add(M.getFullYear()),[...t].sort((e,t)=>e-t)}function H(e,t){M=new Date(e,t,1),a()}function be(){return i`
    <div class="chips" role="group" aria-label=${o.calendario.vista}>
      ${le.map(e=>i`
          <button
            class="chip"
            ?data-ativo=${j===e}
            @click=${()=>{j=e,a()}}
          >
            ${o.calendario.vistas[e]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${o.calendario.mes}
        size="small"
        .value=${String(M.getMonth())}
        @kk-change=${e=>H(M.getFullYear(),Number(e.target.value))}
      >
        ${o.calendario.meses.map((e,t)=>i`<kk-option value=${t}>${e}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${o.calendario.ano}
        size="small"
        .value=${String(M.getFullYear())}
        @kk-change=${e=>H(Number(e.target.value),M.getMonth())}
      >
        ${ye().map(e=>i`<kk-option value=${e}>${e}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${o.calendario.anterior}
        @click=${()=>{M=T(j,M,-1),a()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{M=new Date,a()}}
      >
        ${o.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${o.calendario.proximo}
        @click=${()=>{M=T(j,M,1),a()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${E(j,M)}</span>
    </div>
  `}function U(e){N={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:ne(e),horaInicio:m(e.hora_inicio_min),dataFim:te(e),horaFim:m(e.hora_fim_min),descricao:e.descricao},a()}function W(e){return e.dia_inteiro===1?`${o.calendario.diaInteiro} — ${e.titulo}`:`${m(e.hora_inicio_min)} – ${m(e.hora_fim_min)} — ${e.titulo}`}function G(e){let t=h(k,e.tipo_id);return i`
    <button
      class="pastilha"
      style=${`--cor-evento:${t}`}
      title=${W(e)}
      @click=${()=>U(e)}
    >
      ${e.dia_inteiro===1?s:i`<span class="pastilha__hora">${m(e.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${e.titulo}</span>
    </button>
  `}function xe(e){let t=h(k,e.tipo_id),n=y(k,e.tipo_id);return i`
    <button class="evento" style=${`--cor-evento:${t}`} @click=${()=>U(e)}>
      <span class="evento__quando">
        ${e.dia_inteiro===1?o.calendario.diaInteiro:`${m(e.hora_inicio_min)} – ${m(e.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${ie(k,e.tipo_id)}></kk-icon>${e.titulo}
      </span>
      ${n===void 0?s:i`<span class="evento__tipo">${n.nome}</span>`}
      ${e.descricao===``?s:i`<span class="evento__descricao">${e.descricao}</span>`}
    </button>
  `}function K(e,t){let n=t??480;N={id:0,titulo:``,tipoId:v(k),diaInteiro:t===void 0,dataInicio:e,horaInicio:m(n),horaFim:m(Math.min(n+60,f)),dataFim:e,descricao:``},a()}function Se(e,t,n){let r=n.get(e.dia)??[];return i`
    <div class="mes__celula" ?data-fora=${!e.doMes} ?data-hoje=${e.dia===t}>
      <button
        class="mes__numero"
        aria-label=${o.calendario.novoEm(e.dia)}
        @click=${()=>K(e.dia)}
      >
        ${e.numero}
      </button>
      <div class="mes__eventos">${r.map(e=>G(e))}</div>
    </div>
  `}function Ce(){let e=r(),t=D(M.getFullYear(),M.getMonth()),n=p(A,t.map(e=>e.dia));return i`
    <div class="mes">
      ${b.map(e=>i`<span class="mes__cabecalho">${e}</span>`)}
      ${t.map(t=>Se(t,e,n))}
    </div>
  `}var q=null,J=!1;function we(){J||(J=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`calendario`&&(q=null)}))}function Te(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function Ee(e){we();let t=`${j}:${e.map(e=>e.dia).join(`,`)}`;if(q===t)return;q=t;let n=r();if(!e.some(e=>e.dia===n))return;let i=O();i!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*i-Te()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function Y(e){let t=de(),n=r(),a=p(A,e.map(e=>e.dia)),c=O();return Ee(e),i`
    <div class="grade" style=${`--colunas:${e.length}`}>
      <span class="grade__canto"></span>
      ${e.map(e=>i`
          <span class="grade__dia" ?data-hoje=${e.dia===n}>
            ${e.rotulo} ${e.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${t.map(e=>i`<span class="grade__hora">${m(e*60)}</span>`)}
      </div>

      ${e.map(e=>{let r=a.get(e.dia)??[],l=r.filter(e=>e.dia_inteiro===1),u=r.filter(e=>e.dia_inteiro===0),d=_e(u.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return i`
          <div class="grade__coluna">
            ${c===null||e.dia!==n?s:i`<span class="grade__agora" style=${`top:${c*100}%`}></span>`}

            ${t.map(t=>i`
                <button
                  class="grade__vaga"
                  aria-label=${o.calendario.novoAs(e.rotulo,m(t*60))}
                  @click=${()=>K(e.dia,t*60)}
                ></button>
              `)}

            ${l.length===0?s:i`
                  <div class="grade__inteiros">
                    ${l.map(e=>G(e))}
                  </div>
                `}

            ${u.map((e,t)=>{let n=d[t];if(n===void 0)return s;let r=100/n.colunas;return i`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${h(k,e.tipo_id)};top:${n.topo*100}%;height:${n.altura*100}%;inset-inline-start:calc(${n.coluna*r}% + 1px);width:calc(${r}% - 2px)`}
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
  `}function De(){return Y([{dia:r(M),rotulo:M.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:M.getDate()}])}function Oe(){return Y(ue(M))}function ke(){let e=r(),n=fe(M.getFullYear()),s=p(A,n.flatMap(e=>e.celulas.map(e=>e.dia)));return i`
    <div class="ano">
      ${n.map(n=>i`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{M=new Date(M.getFullYear(),n.mes,1),j=`mes`,a()}}
            >
              ${n.rotulo}
            </button>

            <div class="ano__grade">
              ${b.map(e=>i`<span class="ano__cabecalho">${e.slice(0,1)}</span>`)}
              ${n.celulas.map(n=>{let r=(s.get(n.dia)??[]).length;return i`
                  <button
                    class="ano__dia"
                    ?data-fora=${!n.doMes}
                    ?data-hoje=${n.dia===e}
                    ?data-com-evento=${r>0}
                    title=${r===0?``:o.calendario.eventos(r)}
                    @click=${()=>{M=new Date(t(n.dia)),j=`dia`,a()}}
                  >
                    ${n.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function Ae(){let e=[...p(A,pe(w(`agenda`,M))).entries()].filter(([,e])=>e.length>0);return e.length===0?i`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${o.calendario.semEventos}</p>
      </div>
    `:i`
    <div class="calendario-agenda">
      ${e.map(([e,t])=>i`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${me(e)}</span>
            ${t.map(e=>xe(e))}
          </div>
        `)}
    </div>
  `}function je(){return j===`dia`?De():j===`semana`?Oe():j===`mes`?Ce():j===`ano`?ke():Ae()}function X(e){N!==null&&(N={...N,...e})}function Z(e){F!==null&&(F={...F,...e})}function Q(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t=0,n=0,r=0]=e.split(`-`).map(Number),i=new Date(t,n-1,r);return i.getFullYear()===t&&i.getMonth()===n-1&&i.getDate()===r}async function Me(e){if(!Q(e.dataInicio)){l(o.calendario.dataInvalida,`warning`);return}let n=!Q(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,r=+!!e.diaInteiro,i=g(e.horaInicio),a=g(e.horaFim),s=n===e.dataInicio&&a<i?i:a;try{await oe({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?o.acervo.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??v(k),data_inicio_epoch:t(e.dataInicio),hora_inicio_min:r===1?0:i,data_fim_epoch:t(n),hora_fim_min:r===1?f:s,dia_inteiro:r,descricao:e.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),l(o.calendario.eventoNaoSalvo,`danger`);return}N=null,l(o.calendario.eventoSalvo),await z()}async function $(e){if(await c({titulo:o.calendario.excluirEvento,texto:o.acervo.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await re(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),l(o.calendario.eventoNaoExcluido,`danger`);return}N=null,l(o.calendario.eventoExcluido),await z()}}function Ne(e){return i`
    <kk-dialog
      open
      label=${e.id>0?o.calendario.editarEvento:o.calendario.novoEvento}
      @kk-after-hide=${()=>{N=null,a()}}
    >
      <div class="formulario">
        <kk-input
          label=${o.calendario.titulo}
          placeholder=${o.calendario.tituloPlaceholder}
          .value=${e.titulo}
          @kk-input=${e=>{X({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${o.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${k.map(t=>i`
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
          ${o.calendario.diaInteiro}
        </kk-switch>

        <!--
          Data e hora escutam \`kk-change\`, e não \`kk-input\`: enquanto a data
          está sendo digitada o \`<input type="date">\` responde \`''\`, e o
          \`kk-input\` de cada tecla apagaria a data que já estava lá. O
          \`change\` nativo, que é o que o \`kk-change\` reemite, só fala quando o
          campo tem uma data inteira.
        -->
        <div class="formulario__par">
          <kk-input
            type="date"
            label=${o.calendario.dataInicio}
            .value=${e.dataInicio}
            @kk-change=${t=>{let n=t.target.value,r=N?.dataFim??e.dataFim;X({dataInicio:n,dataFim:r<n?n:r}),a()}}
          ></kk-input>
          ${e.diaInteiro?s:i`
                <kk-input
                  type="time"
                  label=${o.calendario.horaInicio}
                  .value=${e.horaInicio}
                  @kk-change=${e=>{X({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${o.calendario.dataFim}
            min=${e.dataInicio}
            .value=${e.dataFim}
            @kk-change=${e=>{X({dataFim:e.target.value})}}
          ></kk-input>
          ${e.diaInteiro?s:i`
                <kk-input
                  type="time"
                  label=${o.calendario.horaFim}
                  .value=${e.horaFim}
                  @kk-change=${e=>{X({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${o.calendario.descricao}
          placeholder=${o.calendario.descricaoPlaceholder}
          .value=${e.descricao}
          @kk-input=${e=>{X({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${e.id>0?i`
              <kk-button variant="danger" outline @click=${()=>void $(e)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
              </kk-button>
            `:s}
        <kk-button
          @click=${()=>{N=null,a()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{N!==null&&Me(N)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function Pe(e){let t=e.nome.trim()===``?o.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?y(k,e.id):void 0;try{await se({...n??{ordem:ae(k)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),l(o.calendario.tipoNaoSalvo,`danger`);return}F=null,await z()}async function Fe(e){if(e.id!==void 0){if(ce(A,e.id)){await c({titulo:o.calendario.tipoEmUsoTitulo,texto:o.calendario.tipoEmUsoTexto,rotuloConfirmar:o.acoes.fechar});return}if(await c({titulo:o.calendario.excluirTipo,texto:o.acervo.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await _(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),l(o.calendario.tipoNaoExcluido,`danger`);return}await z()}}}function Ie(e){return i`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${o.calendario.tipoNome}
        .value=${e.nome}
        @kk-input=${e=>{Z({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${o.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(u).map(([t,n])=>i`
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
        <span class="formulario__rotulo">${o.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(d).map(([t,n])=>i`
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
        ${o.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{F!==null&&Pe(F)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,a()}}
        >
          ${o.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Le(){return i`
    <kk-dialog
      open
      label=${o.calendario.tipos}
      @kk-after-hide=${()=>{P=!1,F=null,a()}}
    >
      ${F===null?i`
            <div class="tipos-lista">
              ${k.map(e=>i`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${u[e.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${d[e.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${e.nome}</span>
                    ${e.marca_especial===1?i`<kk-badge variant="success" pill>${o.calendario.especial}</kk-badge>`:s}
                    <kk-icon-button
                      name="pencil"
                      label=${o.acoes.editar}
                      @click=${()=>{F={id:e.id??0,nome:e.nome,cor:e.cor_chave,icone:e.icone,especial:e.marca_especial===1},a()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${o.calendario.excluirTipo}
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
              <kk-icon slot="prefix" name="plus"></kk-icon>${o.calendario.novoTipo}
            </kk-button>
          `:Ie(F)}
    </kk-dialog>
  `}var Re={aoVoltar(){return N===null?P?(F===null?P=!1:F=null,a(),!0):!1:(N=null,a(),!0)},acoes(){if(I)return i`
      <kk-icon-button
        name="tags"
        label=${o.calendario.tipos}
        @click=${()=>{P=!0,F=null,a()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${o.calendario.novoEvento}
        @click=${()=>K(r())}
      ></kk-icon-button>
    `},conteudo(){return B(),R===null?I?i`
      ${be()}
      ${je()}
      ${N===null?s:Ne(N)}
      ${P?Le():s}
    `:i`<div class="carregando"><kk-spinner></kk-spinner></div>`:n(R,ve)}};export{Re as telaCalendario};