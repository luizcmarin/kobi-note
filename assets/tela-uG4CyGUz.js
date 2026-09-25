import{b as e,ct as t,et as n,g as r,gt as i,it as a,m as o,pt as s,rt as c,tt as l,v as u,vt as d,y as ee}from"./index-sA5grpgQ.js";import{CORES as f,ICONES as te,ULTIMO_MINUTO as ne,agendaDosDias as p,carregar as re,comoHora as m,corDoTipo as h,deHora as g,diaFinal as _,diaInicial as v,excluirEvento as ie,excluirTipo as ae,iconeDoTipo as oe,proximaOrdem as se,salvarEvento as y,salvarTipo as ce,tipoEmUso as le,tipoPadrao as ue,tipoPorId as de}from"./dados-DzudY-4c.js";var fe=[`dia`,`semana`,`mes`,`ano`,`agenda`],b=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function x(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function S(e,t){let n=x(e);return n.setDate(n.getDate()+t),n}function C(e){return S(e,-((e.getDay()+6)%7))}function pe(e,t){if(e===`dia`){let e=l(t);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=C(t);return{de:l(e),ate:l(S(e,6))}}if(e===`mes`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth(),c(t.getFullYear(),t.getMonth()+1));return{de:l(e),ate:l(n)}}let n=new Date(t.getFullYear(),0,1),r=new Date(t.getFullYear(),11,31);return{de:l(n),ate:l(r)}}function me(e,t,n){let r=x(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function he(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=C(t),n=S(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function ge(e,t){let n=C(new Date(e,t,1)),r=S(C(new Date(e,t,c(e,t+1))),6),i=[];for(let e=n;e<=r;e=S(e,1))i.push({dia:l(e),numero:e.getDate(),doMes:e.getMonth()===t});return i}function _e(e){let t=C(e);return Array.from({length:7},(e,n)=>{let r=S(t,n);return{dia:l(r),rotulo:b[n]??``,numero:r.getDate()}})}function ve(){return Array.from({length:17},(e,t)=>6+t)}function ye(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:ge(e,n)}))}function be(e){let t=[],[n=1970,r=1,i=1]=e.de.split(`-`).map(Number);for(let a=new Date(n,r-1,i);;a=S(a,1)){let n=l(a);if(n>e.ate)break;t.push(n)}return t}function xe(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}var Se=15;function Ce(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+Se),1380)}}function we(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function Te(e){let t=e.map(e=>Ce(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var w=1439;function Ee(e,t){if(!(t>0)||!Number.isFinite(e))return 0;let n=e/t*17*60;return Math.round(n/15)*15||0}function T(e,t){if(t===0)return e;let n=Math.max(e.fimMin-e.inicioMin,0),r=Math.max(1380-n,360),i=Math.min(Math.max(e.inicioMin+t,360),r);return{inicioMin:i,fimMin:Math.min(i+n,w)}}function E(e,t){if(t===0)return e;let n=Math.min(e.inicioMin+15,w),r=Math.min(Math.max(1380,e.fimMin,n),w);return{inicioMin:e.inicioMin,fimMin:Math.min(Math.max(e.fimMin+t,n),r)}}function De(e,t){if(e.length===0)return-1;let n=e.findIndex(e=>t>=e.esquerda&&t<e.direita);return n===-1?t<(e[0]?.esquerda??0)?0:e.length-1:n}var D=[],O=[],k=`semana`,A=new Date,j=null,M=!1,N=null,P=!1,F=!1,I=null;async function L(){let e=await re();D=e.tipos,O=e.eventos,I=null,t()}function R(){P||F||I!==null||(F=!0,(async()=>{try{await L(),P=!0}catch(t){console.error(`Calendário: a carga falhou.`,t),I=e(t)}finally{F=!1,t()}})())}function Oe(){I=null,R(),t()}var z=5;function ke(){let e=new Date().getFullYear(),t=new Set;for(let n=e-z;n<=e+z;n+=1)t.add(n);return t.add(A.getFullYear()),[...t].sort((e,t)=>e-t)}function B(e,n){A=new Date(e,n,1),t()}function Ae(){return d`
    <div class="chips" role="group" aria-label=${s.calendario.vista}>
      ${fe.map(e=>d`
          <button
            class="chip"
            ?data-ativo=${k===e}
            @click=${()=>{k=e,t()}}
          >
            ${s.calendario.vistas[e]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${s.calendario.mes}
        size="small"
        .value=${String(A.getMonth())}
        @kk-change=${e=>B(A.getFullYear(),Number(e.target.value))}
      >
        ${s.calendario.meses.map((e,t)=>d`<kk-option value=${t}>${e}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${s.calendario.ano}
        size="small"
        .value=${String(A.getFullYear())}
        @kk-change=${e=>B(Number(e.target.value),A.getMonth())}
      >
        ${ke().map(e=>d`<kk-option value=${e}>${e}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${s.calendario.anterior}
        @click=${()=>{A=me(k,A,-1),t()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{A=new Date,t()}}
      >
        ${s.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${s.calendario.proximo}
        @click=${()=>{A=me(k,A,1),t()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${he(k,A)}</span>
    </div>
  `}function V(e){j={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:v(e),horaInicio:m(e.hora_inicio_min),dataFim:_(e),horaFim:m(e.hora_fim_min),descricao:e.descricao},t()}function H(e){return e.dia_inteiro===1?`${s.calendario.diaInteiro} — ${e.titulo}`:`${m(e.hora_inicio_min)} – ${m(e.hora_fim_min)} — ${e.titulo}`}function U(e){let t=h(D,e.tipo_id);return d`
    <button
      class="pastilha"
      style=${`--cor-evento:${t}`}
      title=${H(e)}
      @click=${()=>V(e)}
    >
      ${e.dia_inteiro===1?i:d`<span class="pastilha__hora">${m(e.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${e.titulo}</span>
    </button>
  `}function je(e){let t=h(D,e.tipo_id),n=de(D,e.tipo_id);return d`
    <button class="evento" style=${`--cor-evento:${t}`} @click=${()=>V(e)}>
      <span class="evento__quando">
        ${e.dia_inteiro===1?s.calendario.diaInteiro:`${m(e.hora_inicio_min)} – ${m(e.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${oe(D,e.tipo_id)}></kk-icon>${e.titulo}
      </span>
      ${n===void 0?i:d`<span class="evento__tipo">${n.nome}</span>`}
      ${e.descricao===``?i:d`<span class="evento__descricao">${e.descricao}</span>`}
    </button>
  `}function W(e,n){let r=n??480;j={id:0,titulo:``,tipoId:ue(D),diaInteiro:n===void 0,dataInicio:e,horaInicio:m(r),horaFim:m(Math.min(r+60,ne)),dataFim:e,descricao:``},t()}function G(e){return e.id!==void 0&&e.dia_inteiro===0&&v(e)===_(e)}var K=null,Me,Ne=4,Pe=8,Fe=350;function q(e,t,n){let r=a(t);return{...e,data_inicio_epoch:r,data_fim_epoch:r,hora_inicio_min:n.inicioMin,hora_fim_min:n.fimMin}}function J(e){return{inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min}}function Y(e,t){return e.data_inicio_epoch===t.data_inicio_epoch&&e.hora_inicio_min===t.hora_inicio_min&&e.hora_fim_min===t.hora_fim_min}function Ie(){if(K===null||!K.ativo)return O;let{previa:e}=K;return O.map(t=>t.id===e.id?e:t)}function Le(e,n){if(K!==null||!n.isPrimary||n.button!==0||!G(e))return;let r=n.currentTarget,i=r.closest(`.grade__coluna`),a=r.closest(`.grade`);if(i===null||a===null)return;let o=[...a.querySelectorAll(`.grade__coluna`)].map(e=>{let t=e.getBoundingClientRect();return{dia:e.dataset.dia??``,esquerda:t.left,direita:t.right}});K={evento:e,modo:n.target.closest(`.grade__evento-alca`)===null?`mover`:`redimensionar`,ponteiro:n.pointerId,toque:n.pointerType===`touch`,x:n.clientX,y:n.pageY,alturaDaColuna:i.getBoundingClientRect().height,colunas:o,ativo:!1,desfeito:!1,previa:e},addEventListener(`pointermove`,Re),addEventListener(`pointerup`,ze),addEventListener(`pointercancel`,Be),addEventListener(`keydown`,Ve),K.toque&&(Me=setTimeout(()=>{K!==null&&(K.ativo=!0,t())},Fe))}function Re(e){if(K===null||e.pointerId!==K.ponteiro||K.desfeito)return;let n=e.clientX-K.x,r=e.pageY-K.y,i=!1;if(!K.ativo){if(K.toque){Math.hypot(n,r)>Pe&&X();return}if(Math.hypot(n,r)<Ne)return;K.ativo=!0,i=!0}e.preventDefault();let{evento:a}=K,o=Ee(r,K.alturaDaColuna),s;s=K.modo===`redimensionar`?q(a,v(a),E(J(a),o)):q(a,K.colunas[De(K.colunas,e.clientX)]?.dia||v(a),T(J(a),o)),(i||!Y(s,K.previa))&&(K.previa=s,t())}function ze(e){if(K===null||e.pointerId!==K.ponteiro)return;let{ativo:n,evento:r,previa:i}=K;if(X(),n){if(He(),Y(i,r)){t();return}qe(i,!1)}}function Be(e){if(K===null||e.pointerId!==K.ponteiro)return;let n=K.ativo;X(),n&&t()}function Ve(e){e.key===`Escape`&&K!==null&&K.ativo&&(e.preventDefault(),K.desfeito=!0,K.previa=K.evento,t())}function X(){clearTimeout(Me),removeEventListener(`pointermove`,Re),removeEventListener(`pointerup`,ze),removeEventListener(`pointercancel`,Be),removeEventListener(`keydown`,Ve),K=null}function He(){let e=e=>{e.stopPropagation(),e.preventDefault()};addEventListener(`click`,e,{capture:!0,once:!0}),setTimeout(()=>removeEventListener(`click`,e,{capture:!0}),0)}var Ue={handleEvent(e){K?.ativo===!0&&e.preventDefault()},passive:!1};function We(e){K?.toque===!0&&e.preventDefault()}function Ge(e,t){if(!t.altKey||K!==null||!G(e)||t.key!==`ArrowUp`&&t.key!==`ArrowDown`)return;t.preventDefault();let n=t.key===`ArrowUp`?-15:15,r=t.shiftKey?E(J(e),n):T(J(e),n),i=q(e,v(e),r);Y(i,e)||qe(i,!0)}function Ke(e){e!==void 0&&queueMicrotask(()=>{document.querySelector(`.grade__evento[data-id="${e}"]`)?.focus()})}async function qe(e,n){O=O.map(t=>t.id===e.id?e:t),t(),n&&Ke(e.id);try{await y({...e.id===void 0?{}:{id:e.id},titulo:e.titulo,tipo_id:e.tipo_id,data_inicio_epoch:e.data_inicio_epoch,hora_inicio_min:e.hora_inicio_min,data_fim_epoch:e.data_fim_epoch,hora_fim_min:e.hora_fim_min,dia_inteiro:e.dia_inteiro,descricao:e.descricao})}catch(e){console.error(`Calendário: a gravação do novo horário falhou.`,e),o(s.calendario.eventoNaoMovido,`danger`)}try{await L(),n&&Ke(e.id)}catch(e){console.error(`Calendário: a releitura depois de mover o evento falhou.`,e)}}function Je(e,t,n){let r=n.get(e.dia)??[];return d`
    <div class="mes__celula" ?data-fora=${!e.doMes} ?data-hoje=${e.dia===t}>
      <button
        class="mes__numero"
        aria-label=${s.calendario.novoEm(e.dia)}
        @click=${()=>W(e.dia)}
      >
        ${e.numero}
      </button>
      <div class="mes__eventos">${r.map(e=>U(e))}</div>
    </div>
  `}function Ye(){let e=l(),t=ge(A.getFullYear(),A.getMonth()),n=p(O,t.map(e=>e.dia));return d`
    <div class="mes">
      ${b.map(e=>d`<span class="mes__cabecalho">${e}</span>`)}
      ${t.map(t=>Je(t,e,n))}
    </div>
  `}var Z=null,Xe=!1;function Ze(){Xe||(Xe=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`calendario`&&(Z=null)}))}function Qe(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function $e(e){Ze();let t=`${k}:${e.map(e=>e.dia).join(`,`)}`;if(Z===t)return;Z=t;let n=l();if(!e.some(e=>e.dia===n))return;let r=we();r!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*r-Qe()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function et(e){let t=ve(),n=l(),r=p(Ie(),e.map(e=>e.dia)),a=we(),o=K?.ativo===!0?K.evento.id:void 0;return $e(e),d`
    <div
      class="grade"
      style=${`--colunas:${e.length}`}
      ?data-arrastando=${o!==void 0}
    >
      <span class="grade__canto"></span>
      ${e.map(e=>d`
          <span class="grade__dia" ?data-hoje=${e.dia===n}>
            ${e.rotulo} ${e.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${t.map(e=>d`<span class="grade__hora">${m(e*60)}</span>`)}
      </div>

      ${e.map(e=>{let c=r.get(e.dia)??[],l=c.filter(e=>e.dia_inteiro===1),u=c.filter(e=>e.dia_inteiro===0),ee=Te(u.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return d`
          <div class="grade__coluna" data-dia=${e.dia}>
            ${a===null||e.dia!==n?i:d`<span class="grade__agora" style=${`top:${a*100}%`}></span>`}

            ${t.map(t=>d`
                <button
                  class="grade__vaga"
                  aria-label=${s.calendario.novoAs(e.rotulo,m(t*60))}
                  @click=${()=>W(e.dia,t*60)}
                ></button>
              `)}

            ${l.length===0?i:d`
                  <div class="grade__inteiros">
                    ${l.map(e=>U(e))}
                  </div>
                `}

            ${u.map((e,t)=>{let n=ee[t];if(n===void 0)return i;let r=100/n.colunas,a=G(e);return d`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${h(D,e.tipo_id)};top:${n.topo*100}%;height:${n.altura*100}%;inset-inline-start:calc(${n.coluna*r}% + 1px);width:calc(${r}% - 2px)`}
                  data-id=${e.id??i}
                  ?data-movel=${a}
                  ?data-arrastando=${o!==void 0&&e.id===o}
                  title=${a?`${H(e)}\n${s.calendario.dicaDoArraste}`:H(e)}
                  aria-keyshortcuts=${a?`Alt+ArrowUp Alt+ArrowDown Alt+Shift+ArrowUp Alt+Shift+ArrowDown`:i}
                  @click=${()=>V(e)}
                  @pointerdown=${t=>Le(e,t)}
                  @keydown=${t=>Ge(e,t)}
                  @touchmove=${Ue}
                  @contextmenu=${We}
                >
                  <span class="grade__evento-hora">${m(e.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${e.titulo}</span>
                  ${a?d`<span class="grade__evento-alca" aria-hidden="true"></span>`:i}
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function tt(){return et([{dia:l(A),rotulo:A.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:A.getDate()}])}function nt(){return et(_e(A))}function rt(){let e=l(),n=ye(A.getFullYear()),r=p(O,n.flatMap(e=>e.celulas.map(e=>e.dia)));return d`
    <div class="ano">
      ${n.map(n=>d`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{A=new Date(A.getFullYear(),n.mes,1),k=`mes`,t()}}
            >
              ${n.rotulo}
            </button>

            <div class="ano__grade">
              ${b.map(e=>d`<span class="ano__cabecalho">${e.slice(0,1)}</span>`)}
              ${n.celulas.map(n=>{let i=(r.get(n.dia)??[]).length;return d`
                  <button
                    class="ano__dia"
                    ?data-fora=${!n.doMes}
                    ?data-hoje=${n.dia===e}
                    ?data-com-evento=${i>0}
                    title=${i===0?``:s.calendario.eventos(i)}
                    @click=${()=>{A=new Date(a(n.dia)),k=`dia`,t()}}
                  >
                    ${n.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function it(){let e=[...p(O,be(pe(`agenda`,A))).entries()].filter(([,e])=>e.length>0);return e.length===0?d`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${s.calendario.semEventos}</p>
      </div>
    `:d`
    <div class="calendario-agenda">
      ${e.map(([e,t])=>d`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${xe(e)}</span>
            ${t.map(e=>je(e))}
          </div>
        `)}
    </div>
  `}function at(){return k===`dia`?tt():k===`semana`?nt():k===`mes`?Ye():k===`ano`?rt():it()}function Q(e){j!==null&&(j={...j,...e})}function $(e){N!==null&&(N={...N,...e})}async function ot(e){if(!n(e.dataInicio)){o(s.calendario.dataInvalida,`warning`);return}let t=!n(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,r=+!!e.diaInteiro,i=g(e.horaInicio),c=g(e.horaFim),l=t===e.dataInicio&&c<i?i:c;try{await y({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?s.acervo.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??ue(D),data_inicio_epoch:a(e.dataInicio),hora_inicio_min:r===1?0:i,data_fim_epoch:a(t),hora_fim_min:r===1?ne:l,dia_inteiro:r,descricao:e.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),o(s.calendario.eventoNaoSalvo,`danger`);return}j=null,o(s.calendario.eventoSalvo),await L()}async function st(e){if(await r({titulo:s.calendario.excluirEvento,texto:s.acervo.excluirTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})){try{await ie(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),o(s.calendario.eventoNaoExcluido,`danger`);return}j=null,o(s.calendario.eventoExcluido),await L()}}function ct(e){return d`
    <kk-dialog
      open
      label=${e.id>0?s.calendario.editarEvento:s.calendario.novoEvento}
      @kk-request-close=${u}
      @kk-after-hide=${()=>{j=null,t()}}
    >
      <div class="formulario">
        <kk-input
          label=${s.calendario.titulo}
          placeholder=${s.calendario.tituloPlaceholder}
          .value=${e.titulo}
          @kk-input=${e=>{Q({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${s.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${D.map(n=>d`
                <button
                  class="tipo-chip"
                  ?data-ativo=${e.tipoId===n.id}
                  @click=${()=>{Q({tipoId:n.id??null}),t()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${f[n.cor_chave]??``}`}
                  ></span>
                  ${n.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${e.diaInteiro}
          @kk-change=${e=>{Q({diaInteiro:e.target.checked}),t()}}
        >
          ${s.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${s.calendario.dataInicio}
            .value=${e.dataInicio}
            @kk-change=${n=>{let r=n.target.value,i=j?.dataFim??e.dataFim;Q({dataInicio:r,dataFim:i<r?r:i}),t()}}
          ></kk-input>
          ${e.diaInteiro?i:d`
                <kk-input
                  type="time"
                  label=${s.calendario.horaInicio}
                  .value=${e.horaInicio}
                  @kk-change=${e=>{Q({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${s.calendario.dataFim}
            min=${e.dataInicio}
            .value=${e.dataFim}
            @kk-change=${e=>{Q({dataFim:e.target.value})}}
          ></kk-input>
          ${e.diaInteiro?i:d`
                <kk-input
                  type="time"
                  label=${s.calendario.horaFim}
                  .value=${e.horaFim}
                  @kk-change=${e=>{Q({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${s.calendario.descricao}
          placeholder=${s.calendario.descricaoPlaceholder}
          .value=${e.descricao}
          @kk-input=${e=>{Q({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${e.id>0?d`
              <kk-button variant="danger" outline @click=${()=>void st(e)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${s.acoes.excluir}
              </kk-button>
            `:i}
        <kk-button
          @click=${()=>{j=null,t()}}
        >
          ${s.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{j!==null&&ot(j)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function lt(e){let t=e.nome.trim()===``?s.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?de(D,e.id):void 0;try{await ce({...n??{ordem:se(D)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),o(s.calendario.tipoNaoSalvo,`danger`);return}N=null,await L()}async function ut(e){if(e.id!==void 0){if(le(O,e.id)){await r({titulo:s.calendario.tipoEmUsoTitulo,texto:s.calendario.tipoEmUsoTexto,rotuloConfirmar:s.acoes.fechar});return}if(await r({titulo:s.calendario.excluirTipo,texto:s.acervo.excluirTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})){try{await ae(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),o(s.calendario.tipoNaoExcluido,`danger`);return}await L()}}}function dt(e){return d`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${s.calendario.tipoNome}
        .value=${e.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${s.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(f).map(([n,r])=>d`
              <button
                class="cor-chip"
                ?data-ativo=${e.cor===n}
                style=${`background:${r}`}
                aria-label=${n}
                @click=${()=>{$({cor:n}),t()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${s.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(te).map(([n,r])=>d`
              <button
                class="tipo-chip"
                ?data-ativo=${e.icone===n}
                aria-label=${n}
                @click=${()=>{$({icone:n}),t()}}
              >
                <kk-icon name=${r}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <kk-switch
        ?checked=${e.especial}
        @kk-change=${e=>{$({especial:e.target.checked})}}
      >
        ${s.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{N!==null&&lt(N)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{N=null,t()}}
        >
          ${s.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ft(){return d`
    <kk-dialog
      open
      label=${s.calendario.tipos}
      @kk-request-close=${N===null?i:u}
      @kk-after-hide=${()=>{M=!1,N=null,t()}}
    >
      ${N===null?d`
            <div class="tipos-lista">
              ${D.map(e=>d`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${f[e.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${te[e.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${e.nome}</span>
                    ${e.marca_especial===1?d`<kk-badge variant="success" pill>${s.calendario.especial}</kk-badge>`:i}
                    <kk-icon-button
                      name="pencil"
                      label=${s.acoes.editar}
                      @click=${()=>{N={id:e.id??0,nome:e.nome,cor:e.cor_chave,icone:e.icone,especial:e.marca_especial===1},t()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${s.calendario.excluirTipo}
                      @click=${()=>void ut(e)}
                    ></kk-icon-button>
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{N={id:0,nome:``,cor:`primary`,icone:`evento`,especial:!1},t()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${s.calendario.novoTipo}
            </kk-button>
          `:dt(N)}
    </kk-dialog>
  `}var pt={aoVoltar(){return j===null?M?(N===null?M=!1:N=null,t(),!0):!1:(j=null,t(),!0)},acoes(){if(P)return d`
      <kk-icon-button
        name="tags"
        label=${s.calendario.tipos}
        @click=${()=>{M=!0,N=null,t()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${s.calendario.novoEvento}
        @click=${()=>W(l())}
      ></kk-icon-button>
    `},conteudo(){return R(),I===null?P?d`
      ${Ae()}
      ${at()}
      ${j===null?i:ct(j)}
      ${M?ft():i}
    `:d`<div class="carregando"><kk-spinner></kk-spinner></div>`:ee(I,Oe)}};export{pt as telaCalendario};