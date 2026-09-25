import{_t as e,b as t,et as n,ft as r,g as i,ht as a,m as o,rt as s,st as c,tt as l,v as u,y as d}from"./index-BESQMk3B.js";import{CORES as f,ICONES as p,ULTIMO_MINUTO as m,agendaDosDias as h,carregar as ee,comoHora as g,corDoTipo as _,deHora as te,diaFinal as v,diaInicial as y,excluirEvento as ne,excluirTipo as re,iconeDoTipo as ie,proximaOrdem as ae,salvarEvento as b,salvarTipo as oe,tipoEmUso as se,tipoPadrao as x,tipoPorId as S}from"./dados-cNmljsK2.js";var ce=[`dia`,`semana`,`mes`,`ano`,`agenda`],C=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function le(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function w(e,t){let n=le(e);return n.setDate(n.getDate()+t),n}function T(e){return w(e,-((e.getDay()+6)%7))}function ue(e,t){if(e===`dia`){let e=l(t);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=T(t);return{de:l(e),ate:l(w(e,6))}}if(e===`mes`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth()+1,0);return{de:l(e),ate:l(n)}}let n=new Date(t.getFullYear(),0,1),r=new Date(t.getFullYear(),11,31);return{de:l(n),ate:l(r)}}function de(e,t,n){let r=le(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function fe(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=T(t),n=w(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function pe(e,t){let n=T(new Date(e,t,1)),r=w(T(new Date(e,t+1,0)),6),i=[];for(let e=n;e<=r;e=w(e,1))i.push({dia:l(e),numero:e.getDate(),doMes:e.getMonth()===t});return i}function me(e){let t=T(e);return Array.from({length:7},(e,n)=>{let r=w(t,n);return{dia:l(r),rotulo:C[n]??``,numero:r.getDate()}})}function he(){return Array.from({length:17},(e,t)=>6+t)}function ge(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:pe(e,n)}))}function _e(e){let t=[],[n=1970,r=1,i=1]=e.de.split(`-`).map(Number);for(let a=new Date(n,r-1,i);;a=w(a,1)){let n=l(a);if(n>e.ate)break;t.push(n)}return t}function ve(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}var ye=15;function be(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+ye),1380)}}function E(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function xe(e){let t=e.map(e=>be(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var D=1439;function Se(e,t){if(!(t>0)||!Number.isFinite(e))return 0;let n=e/t*17*60;return Math.round(n/15)*15||0}function O(e,t){if(t===0)return e;let n=Math.max(e.fimMin-e.inicioMin,0),r=Math.max(1380-n,360),i=Math.min(Math.max(e.inicioMin+t,360),r);return{inicioMin:i,fimMin:Math.min(i+n,D)}}function k(e,t){if(t===0)return e;let n=Math.min(e.inicioMin+15,D),r=Math.min(Math.max(1380,e.fimMin,n),D);return{inicioMin:e.inicioMin,fimMin:Math.min(Math.max(e.fimMin+t,n),r)}}function Ce(e,t){if(e.length===0)return-1;let n=e.findIndex(e=>t>=e.esquerda&&t<e.direita);return n===-1?t<(e[0]?.esquerda??0)?0:e.length-1:n}var A=[],j=[],M=`semana`,N=new Date,P=null,F=!1,I=null,L=!1,R=!1,z=null;async function B(){let e=await ee();A=e.tipos,j=e.eventos,z=null,c()}function we(){L||R||z!==null||(R=!0,(async()=>{try{await B(),L=!0}catch(e){console.error(`Calendário: a carga falhou.`,e),z=t(e)}finally{R=!1,c()}})())}function Te(){z=null,we(),c()}var Ee=5;function De(){let e=new Date().getFullYear(),t=new Set;for(let n=e-Ee;n<=e+Ee;n+=1)t.add(n);return t.add(N.getFullYear()),[...t].sort((e,t)=>e-t)}function Oe(e,t){N=new Date(e,t,1),c()}function ke(){return e`
    <div class="chips" role="group" aria-label=${r.calendario.vista}>
      ${ce.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${M===t}
            @click=${()=>{M=t,c()}}
          >
            ${r.calendario.vistas[t]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${r.calendario.mes}
        size="small"
        .value=${String(N.getMonth())}
        @kk-change=${e=>Oe(N.getFullYear(),Number(e.target.value))}
      >
        ${r.calendario.meses.map((t,n)=>e`<kk-option value=${n}>${t}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${r.calendario.ano}
        size="small"
        .value=${String(N.getFullYear())}
        @kk-change=${e=>Oe(Number(e.target.value),N.getMonth())}
      >
        ${De().map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${r.calendario.anterior}
        @click=${()=>{N=de(M,N,-1),c()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{N=new Date,c()}}
      >
        ${r.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${r.calendario.proximo}
        @click=${()=>{N=de(M,N,1),c()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${fe(M,N)}</span>
    </div>
  `}function V(e){P={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:y(e),horaInicio:g(e.hora_inicio_min),dataFim:v(e),horaFim:g(e.hora_fim_min),descricao:e.descricao},c()}function H(e){return e.dia_inteiro===1?`${r.calendario.diaInteiro} — ${e.titulo}`:`${g(e.hora_inicio_min)} – ${g(e.hora_fim_min)} — ${e.titulo}`}function U(t){let n=_(A,t.tipo_id);return e`
    <button
      class="pastilha"
      style=${`--cor-evento:${n}`}
      title=${H(t)}
      @click=${()=>V(t)}
    >
      ${t.dia_inteiro===1?a:e`<span class="pastilha__hora">${g(t.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${t.titulo}</span>
    </button>
  `}function Ae(t){let n=_(A,t.tipo_id),i=S(A,t.tipo_id);return e`
    <button class="evento" style=${`--cor-evento:${n}`} @click=${()=>V(t)}>
      <span class="evento__quando">
        ${t.dia_inteiro===1?r.calendario.diaInteiro:`${g(t.hora_inicio_min)} – ${g(t.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${ie(A,t.tipo_id)}></kk-icon>${t.titulo}
      </span>
      ${i===void 0?a:e`<span class="evento__tipo">${i.nome}</span>`}
      ${t.descricao===``?a:e`<span class="evento__descricao">${t.descricao}</span>`}
    </button>
  `}function W(e,t){let n=t??480;P={id:0,titulo:``,tipoId:x(A),diaInteiro:t===void 0,dataInicio:e,horaInicio:g(n),horaFim:g(Math.min(n+60,m)),dataFim:e,descricao:``},c()}function G(e){return e.id!==void 0&&e.dia_inteiro===0&&y(e)===v(e)}var K=null,je,Me=4,Ne=8,Pe=350;function q(e,t,n){let r=s(t);return{...e,data_inicio_epoch:r,data_fim_epoch:r,hora_inicio_min:n.inicioMin,hora_fim_min:n.fimMin}}function J(e){return{inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min}}function Y(e,t){return e.data_inicio_epoch===t.data_inicio_epoch&&e.hora_inicio_min===t.hora_inicio_min&&e.hora_fim_min===t.hora_fim_min}function Fe(){if(K===null||!K.ativo)return j;let{previa:e}=K;return j.map(t=>t.id===e.id?e:t)}function Ie(e,t){if(K!==null||!t.isPrimary||t.button!==0||!G(e))return;let n=t.currentTarget,r=n.closest(`.grade__coluna`),i=n.closest(`.grade`);if(r===null||i===null)return;let a=[...i.querySelectorAll(`.grade__coluna`)].map(e=>{let t=e.getBoundingClientRect();return{dia:e.dataset.dia??``,esquerda:t.left,direita:t.right}});K={evento:e,modo:t.target.closest(`.grade__evento-alca`)===null?`mover`:`redimensionar`,ponteiro:t.pointerId,toque:t.pointerType===`touch`,x:t.clientX,y:t.pageY,alturaDaColuna:r.getBoundingClientRect().height,colunas:a,ativo:!1,desfeito:!1,previa:e},addEventListener(`pointermove`,Le),addEventListener(`pointerup`,Re),addEventListener(`pointercancel`,ze),addEventListener(`keydown`,Be),K.toque&&(je=setTimeout(()=>{K!==null&&(K.ativo=!0,c())},Pe))}function Le(e){if(K===null||e.pointerId!==K.ponteiro||K.desfeito)return;let t=e.clientX-K.x,n=e.pageY-K.y,r=!1;if(!K.ativo){if(K.toque){Math.hypot(t,n)>Ne&&X();return}if(Math.hypot(t,n)<Me)return;K.ativo=!0,r=!0}e.preventDefault();let{evento:i}=K,a=Se(n,K.alturaDaColuna),o;o=K.modo===`redimensionar`?q(i,y(i),k(J(i),a)):q(i,K.colunas[Ce(K.colunas,e.clientX)]?.dia||y(i),O(J(i),a)),(r||!Y(o,K.previa))&&(K.previa=o,c())}function Re(e){if(K===null||e.pointerId!==K.ponteiro)return;let{ativo:t,evento:n,previa:r}=K;if(X(),t){if(Ve(),Y(r,n)){c();return}Ke(r,!1)}}function ze(e){if(K===null||e.pointerId!==K.ponteiro)return;let t=K.ativo;X(),t&&c()}function Be(e){e.key===`Escape`&&K!==null&&K.ativo&&(e.preventDefault(),K.desfeito=!0,K.previa=K.evento,c())}function X(){clearTimeout(je),removeEventListener(`pointermove`,Le),removeEventListener(`pointerup`,Re),removeEventListener(`pointercancel`,ze),removeEventListener(`keydown`,Be),K=null}function Ve(){let e=e=>{e.stopPropagation(),e.preventDefault()};addEventListener(`click`,e,{capture:!0,once:!0}),setTimeout(()=>removeEventListener(`click`,e,{capture:!0}),0)}var He={handleEvent(e){K?.ativo===!0&&e.preventDefault()},passive:!1};function Ue(e){K?.toque===!0&&e.preventDefault()}function We(e,t){if(!t.altKey||K!==null||!G(e)||t.key!==`ArrowUp`&&t.key!==`ArrowDown`)return;t.preventDefault();let n=t.key===`ArrowUp`?-15:15,r=t.shiftKey?k(J(e),n):O(J(e),n),i=q(e,y(e),r);Y(i,e)||Ke(i,!0)}function Ge(e){e!==void 0&&queueMicrotask(()=>{document.querySelector(`.grade__evento[data-id="${e}"]`)?.focus()})}async function Ke(e,t){j=j.map(t=>t.id===e.id?e:t),c(),t&&Ge(e.id);try{await b({...e.id===void 0?{}:{id:e.id},titulo:e.titulo,tipo_id:e.tipo_id,data_inicio_epoch:e.data_inicio_epoch,hora_inicio_min:e.hora_inicio_min,data_fim_epoch:e.data_fim_epoch,hora_fim_min:e.hora_fim_min,dia_inteiro:e.dia_inteiro,descricao:e.descricao})}catch(e){console.error(`Calendário: a gravação do novo horário falhou.`,e),o(r.calendario.eventoNaoMovido,`danger`)}try{await B(),t&&Ge(e.id)}catch(e){console.error(`Calendário: a releitura depois de mover o evento falhou.`,e)}}function qe(t,n,i){let a=i.get(t.dia)??[];return e`
    <div class="mes__celula" ?data-fora=${!t.doMes} ?data-hoje=${t.dia===n}>
      <button
        class="mes__numero"
        aria-label=${r.calendario.novoEm(t.dia)}
        @click=${()=>W(t.dia)}
      >
        ${t.numero}
      </button>
      <div class="mes__eventos">${a.map(e=>U(e))}</div>
    </div>
  `}function Je(){let t=l(),n=pe(N.getFullYear(),N.getMonth()),r=h(j,n.map(e=>e.dia));return e`
    <div class="mes">
      ${C.map(t=>e`<span class="mes__cabecalho">${t}</span>`)}
      ${n.map(e=>qe(e,t,r))}
    </div>
  `}var Z=null,Ye=!1;function Xe(){Ye||(Ye=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`calendario`&&(Z=null)}))}function Ze(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function Qe(e){Xe();let t=`${M}:${e.map(e=>e.dia).join(`,`)}`;if(Z===t)return;Z=t;let n=l();if(!e.some(e=>e.dia===n))return;let r=E();r!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*r-Ze()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function $e(t){let n=he(),i=l(),o=h(Fe(),t.map(e=>e.dia)),s=E(),c=K?.ativo===!0?K.evento.id:void 0;return Qe(t),e`
    <div
      class="grade"
      style=${`--colunas:${t.length}`}
      ?data-arrastando=${c!==void 0}
    >
      <span class="grade__canto"></span>
      ${t.map(t=>e`
          <span class="grade__dia" ?data-hoje=${t.dia===i}>
            ${t.rotulo} ${t.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${n.map(t=>e`<span class="grade__hora">${g(t*60)}</span>`)}
      </div>

      ${t.map(t=>{let l=o.get(t.dia)??[],u=l.filter(e=>e.dia_inteiro===1),d=l.filter(e=>e.dia_inteiro===0),f=xe(d.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return e`
          <div class="grade__coluna" data-dia=${t.dia}>
            ${s===null||t.dia!==i?a:e`<span class="grade__agora" style=${`top:${s*100}%`}></span>`}

            ${n.map(n=>e`
                <button
                  class="grade__vaga"
                  aria-label=${r.calendario.novoAs(t.rotulo,g(n*60))}
                  @click=${()=>W(t.dia,n*60)}
                ></button>
              `)}

            ${u.length===0?a:e`
                  <div class="grade__inteiros">
                    ${u.map(e=>U(e))}
                  </div>
                `}

            ${d.map((t,n)=>{let i=f[n];if(i===void 0)return a;let o=100/i.colunas,s=G(t);return e`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${_(A,t.tipo_id)};top:${i.topo*100}%;height:${i.altura*100}%;inset-inline-start:calc(${i.coluna*o}% + 1px);width:calc(${o}% - 2px)`}
                  data-id=${t.id??a}
                  ?data-movel=${s}
                  ?data-arrastando=${c!==void 0&&t.id===c}
                  title=${s?`${H(t)}\n${r.calendario.dicaDoArraste}`:H(t)}
                  aria-keyshortcuts=${s?`Alt+ArrowUp Alt+ArrowDown Alt+Shift+ArrowUp Alt+Shift+ArrowDown`:a}
                  @click=${()=>V(t)}
                  @pointerdown=${e=>Ie(t,e)}
                  @keydown=${e=>We(t,e)}
                  @touchmove=${He}
                  @contextmenu=${Ue}
                >
                  <span class="grade__evento-hora">${g(t.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${t.titulo}</span>
                  ${s?e`<span class="grade__evento-alca" aria-hidden="true"></span>`:a}
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function et(){return $e([{dia:l(N),rotulo:N.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:N.getDate()}])}function tt(){return $e(me(N))}function nt(){let t=l(),n=ge(N.getFullYear()),i=h(j,n.flatMap(e=>e.celulas.map(e=>e.dia)));return e`
    <div class="ano">
      ${n.map(n=>e`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{N=new Date(N.getFullYear(),n.mes,1),M=`mes`,c()}}
            >
              ${n.rotulo}
            </button>

            <div class="ano__grade">
              ${C.map(t=>e`<span class="ano__cabecalho">${t.slice(0,1)}</span>`)}
              ${n.celulas.map(n=>{let a=(i.get(n.dia)??[]).length;return e`
                  <button
                    class="ano__dia"
                    ?data-fora=${!n.doMes}
                    ?data-hoje=${n.dia===t}
                    ?data-com-evento=${a>0}
                    title=${a===0?``:r.calendario.eventos(a)}
                    @click=${()=>{N=new Date(s(n.dia)),M=`dia`,c()}}
                  >
                    ${n.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function rt(){let t=[...h(j,_e(ue(`agenda`,N))).entries()].filter(([,e])=>e.length>0);return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${r.calendario.semEventos}</p>
      </div>
    `:e`
    <div class="calendario-agenda">
      ${t.map(([t,n])=>e`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${ve(t)}</span>
            ${n.map(e=>Ae(e))}
          </div>
        `)}
    </div>
  `}function it(){return M===`dia`?et():M===`semana`?tt():M===`mes`?Je():M===`ano`?nt():rt()}function Q(e){P!==null&&(P={...P,...e})}function $(e){I!==null&&(I={...I,...e})}async function at(e){if(!n(e.dataInicio)){o(r.calendario.dataInvalida,`warning`);return}let t=!n(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,i=+!!e.diaInteiro,a=te(e.horaInicio),c=te(e.horaFim),l=t===e.dataInicio&&c<a?a:c;try{await b({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?r.acervo.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??x(A),data_inicio_epoch:s(e.dataInicio),hora_inicio_min:i===1?0:a,data_fim_epoch:s(t),hora_fim_min:i===1?m:l,dia_inteiro:i,descricao:e.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),o(r.calendario.eventoNaoSalvo,`danger`);return}P=null,o(r.calendario.eventoSalvo),await B()}async function ot(e){if(await i({titulo:r.calendario.excluirEvento,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await ne(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),o(r.calendario.eventoNaoExcluido,`danger`);return}P=null,o(r.calendario.eventoExcluido),await B()}}function st(t){return e`
    <kk-dialog
      open
      label=${t.id>0?r.calendario.editarEvento:r.calendario.novoEvento}
      @kk-request-close=${u}
      @kk-after-hide=${()=>{P=null,c()}}
    >
      <div class="formulario">
        <kk-input
          label=${r.calendario.titulo}
          placeholder=${r.calendario.tituloPlaceholder}
          .value=${t.titulo}
          @kk-input=${e=>{Q({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${r.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${A.map(n=>e`
                <button
                  class="tipo-chip"
                  ?data-ativo=${t.tipoId===n.id}
                  @click=${()=>{Q({tipoId:n.id??null}),c()}}
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
          ?checked=${t.diaInteiro}
          @kk-change=${e=>{Q({diaInteiro:e.target.checked}),c()}}
        >
          ${r.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${r.calendario.dataInicio}
            .value=${t.dataInicio}
            @kk-change=${e=>{let n=e.target.value,r=P?.dataFim??t.dataFim;Q({dataInicio:n,dataFim:r<n?n:r}),c()}}
          ></kk-input>
          ${t.diaInteiro?a:e`
                <kk-input
                  type="time"
                  label=${r.calendario.horaInicio}
                  .value=${t.horaInicio}
                  @kk-change=${e=>{Q({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${r.calendario.dataFim}
            min=${t.dataInicio}
            .value=${t.dataFim}
            @kk-change=${e=>{Q({dataFim:e.target.value})}}
          ></kk-input>
          ${t.diaInteiro?a:e`
                <kk-input
                  type="time"
                  label=${r.calendario.horaFim}
                  .value=${t.horaFim}
                  @kk-change=${e=>{Q({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${r.calendario.descricao}
          placeholder=${r.calendario.descricaoPlaceholder}
          .value=${t.descricao}
          @kk-input=${e=>{Q({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${t.id>0?e`
              <kk-button variant="danger" outline @click=${()=>void ot(t)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${r.acoes.excluir}
              </kk-button>
            `:a}
        <kk-button
          @click=${()=>{P=null,c()}}
        >
          ${r.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{P!==null&&at(P)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function ct(e){let t=e.nome.trim()===``?r.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?S(A,e.id):void 0;try{await oe({...n??{ordem:ae(A)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),o(r.calendario.tipoNaoSalvo,`danger`);return}I=null,await B()}async function lt(e){if(e.id!==void 0){if(se(j,e.id)){await i({titulo:r.calendario.tipoEmUsoTitulo,texto:r.calendario.tipoEmUsoTexto,rotuloConfirmar:r.acoes.fechar});return}if(await i({titulo:r.calendario.excluirTipo,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await re(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),o(r.calendario.tipoNaoExcluido,`danger`);return}await B()}}}function ut(t){return e`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${r.calendario.tipoNome}
        .value=${t.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${r.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(f).map(([n,r])=>e`
              <button
                class="cor-chip"
                ?data-ativo=${t.cor===n}
                style=${`background:${r}`}
                aria-label=${n}
                @click=${()=>{$({cor:n}),c()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${r.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(p).map(([n,r])=>e`
              <button
                class="tipo-chip"
                ?data-ativo=${t.icone===n}
                aria-label=${n}
                @click=${()=>{$({icone:n}),c()}}
              >
                <kk-icon name=${r}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <kk-switch
        ?checked=${t.especial}
        @kk-change=${e=>{$({especial:e.target.checked})}}
      >
        ${r.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{I!==null&&ct(I)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,c()}}
        >
          ${r.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function dt(){return e`
    <kk-dialog
      open
      label=${r.calendario.tipos}
      @kk-request-close=${I===null?a:u}
      @kk-after-hide=${()=>{F=!1,I=null,c()}}
    >
      ${I===null?e`
            <div class="tipos-lista">
              ${A.map(t=>e`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${f[t.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${p[t.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${t.nome}</span>
                    ${t.marca_especial===1?e`<kk-badge variant="success" pill>${r.calendario.especial}</kk-badge>`:a}
                    <kk-icon-button
                      name="pencil"
                      label=${r.acoes.editar}
                      @click=${()=>{I={id:t.id??0,nome:t.nome,cor:t.cor_chave,icone:t.icone,especial:t.marca_especial===1},c()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${r.calendario.excluirTipo}
                      @click=${()=>void lt(t)}
                    ></kk-icon-button>
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{I={id:0,nome:``,cor:`primary`,icone:`evento`,especial:!1},c()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${r.calendario.novoTipo}
            </kk-button>
          `:ut(I)}
    </kk-dialog>
  `}var ft={aoVoltar(){return P===null?F?(I===null?F=!1:I=null,c(),!0):!1:(P=null,c(),!0)},acoes(){if(L)return e`
      <kk-icon-button
        name="tags"
        label=${r.calendario.tipos}
        @click=${()=>{F=!0,I=null,c()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${r.calendario.novoEvento}
        @click=${()=>W(l())}
      ></kk-icon-button>
    `},conteudo(){return we(),z===null?L?e`
      ${ke()}
      ${it()}
      ${P===null?a:st(P)}
      ${F?dt():a}
    `:e`<div class="carregando"><kk-spinner></kk-spinner></div>`:d(z,Te)}};export{ft as telaCalendario};