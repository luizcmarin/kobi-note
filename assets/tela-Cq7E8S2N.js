import{i as e,t}from"./lit-CL39YOSA.js";import{a as n,n as r}from"./strings-5zCKnCyL.js";import{n as i}from"./rotas-D12eslN_.js";import{a,c as o,i as s,s as c}from"./data-7IMAkOFv.js";import{R as l,c as u,g as d,m as f}from"./index-DYev-n2R.js";import{t as ee}from"./carga-Cb65ZAc7.js";import{CORES as p,ICONES as te,ULTIMO_MINUTO as ne,agendaDosDias as m,carregar as re,comoHora as h,corDoTipo as g,deHora as _,diaFinal as v,diaInicial as y,excluirEvento as ie,excluirTipo as ae,iconeDoTipo as oe,proximaOrdem as se,salvarEvento as b,salvarTipo as ce,tipoEmUso as le,tipoPadrao as x,tipoPorId as S}from"./dados-DxeEAeZT.js";import{t as ue}from"./contraste-P2ZOpT6H.js";var de=[`dia`,`semana`,`mes`,`ano`,`agenda`];function fe(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function C(e,t){let n=fe(e);return n.setDate(n.getDate()+t),n}function w(e){return C(e,-((e.getDay()+6)%7))}function pe(e,t){if(e===`dia`){let e=a(t);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=w(t);return{de:a(e),ate:a(C(e,6))}}if(e===`mes`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth(),c(t.getFullYear(),t.getMonth()+1));return{de:a(e),ate:a(n)}}let n=new Date(t.getFullYear(),0,1),r=new Date(t.getFullYear(),11,31);return{de:a(n),ate:a(r)}}function me(e,t,n){let r=fe(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function he(e,t,n=`pt-BR`){if(e===`dia`)return t.toLocaleDateString(n,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=w(t),r=C(e,6);return new Intl.DateTimeFormat(n,{day:`numeric`,month:`short`,year:`numeric`}).formatRange(e,r)}return e===`mes`?t.toLocaleDateString(n,{month:`long`,year:`numeric`}):String(t.getFullYear())}function T(e,t){let n=w(new Date(e,t,1)),r=C(w(new Date(e,t,c(e,t+1))),6),i=[];for(let e=n;e<=r;e=C(e,1))i.push({dia:a(e),numero:e.getDate(),doMes:e.getMonth()===t});return i}function ge(e){let t=w(e);return Array.from({length:7},(e,n)=>{let r=C(t,n);return{dia:a(r),semana:n,numero:r.getDate()}})}function _e(){return Array.from({length:17},(e,t)=>6+t)}function ve(e){return Array.from({length:12},(t,n)=>({mes:n,celulas:T(e,n)}))}function ye(e){let t=[],[n=1970,r=1,i=1]=e.de.split(`-`).map(Number);for(let o=new Date(n,r-1,i);;o=C(o,1)){let n=a(o);if(n>e.ate)break;t.push(n)}return t}function be(e,t=`pt-BR`){let[n=1970,r=1,i=1]=e.split(`-`).map(Number);return new Date(n,r-1,i).toLocaleDateString(t,{weekday:`long`,day:`numeric`,month:`long`})}var xe=15;function Se(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+xe),1380)}}function E(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function Ce(e){let t=e.map(e=>Se(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var D=1439;function we(e,t){if(!(t>0)||!Number.isFinite(e))return 0;let n=e/t*17*60;return Math.round(n/15)*15||0}function O(e,t){if(t===0)return e;let n=Math.max(e.fimMin-e.inicioMin,0),r=Math.max(1380-n,360),i=Math.min(Math.max(e.inicioMin+t,360),r);return{inicioMin:i,fimMin:Math.min(i+n,D)}}function k(e,t){if(t===0)return e;let n=Math.min(e.inicioMin+15,D),r=Math.min(Math.max(1380,e.fimMin,n),D);return{inicioMin:e.inicioMin,fimMin:Math.min(Math.max(e.fimMin+t,n),r)}}function Te(e,t){if(e.length===0)return-1;let n=e.findIndex(e=>t>=e.esquerda&&t<e.direita);return n===-1?t<(e[0]?.esquerda??0)?0:e.length-1:n}var A=[],j=[],M=`semana`,N=new Date,P=null,F=!1,I=null;async function L(){let e=await re();A=e.tipos,j=e.eventos,l()}var R=new ee(`Calendário`,async()=>{await L()}),z=5;function Ee(){let e=new Date().getFullYear(),t=new Set;for(let n=e-z;n<=e+z;n+=1)t.add(n);return t.add(N.getFullYear()),[...t].sort((e,t)=>e-t)}function B(e,t){N=new Date(e,t,1),l()}function De(){return e`
    <div class="chips" role="group" aria-label=${r.calendario.vista}>
      ${de.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${M===t}
            @click=${()=>{M=t,l()}}
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
        @kk-change=${e=>B(N.getFullYear(),Number(e.target.value))}
      >
        ${r.calendario.meses.map((t,n)=>e`<kk-option value=${n}>${t}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${r.calendario.ano}
        size="small"
        .value=${String(N.getFullYear())}
        @kk-change=${e=>B(Number(e.target.value),N.getMonth())}
      >
        ${Ee().map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${r.calendario.anterior}
        @click=${()=>{N=me(M,N,-1),l()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{N=new Date,l()}}
      >
        ${r.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${r.calendario.proximo}
        @click=${()=>{N=me(M,N,1),l()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${he(M,N,n())}</span>
    </div>
  `}function V(e){P={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:y(e),horaInicio:h(e.hora_inicio_min),dataFim:v(e),horaFim:h(e.hora_fim_min),descricao:e.descricao},l()}function H(e){return e.dia_inteiro===1?`${r.calendario.diaInteiro} — ${e.titulo}`:`${h(e.hora_inicio_min)} – ${h(e.hora_fim_min)} — ${e.titulo}`}function U(n){let r=g(A,n.tipo_id);return e`
    <button
      class="pastilha"
      style=${`--cor-evento:${r};--cor-evento-texto:${ue(r)}`}
      title=${H(n)}
      @click=${()=>V(n)}
    >
      ${n.dia_inteiro===1?t:e`<span class="pastilha__hora">${h(n.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${n.titulo}</span>
    </button>
  `}function Oe(n){let i=g(A,n.tipo_id),a=S(A,n.tipo_id);return e`
    <button class="evento" style=${`--cor-evento:${i}`} @click=${()=>V(n)}>
      <span class="evento__quando">
        ${n.dia_inteiro===1?r.calendario.diaInteiro:`${h(n.hora_inicio_min)} – ${h(n.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${oe(A,n.tipo_id)}></kk-icon>${n.titulo}
      </span>
      ${a===void 0?t:e`<span class="evento__tipo">${a.nome}</span>`}
      ${n.descricao===``?t:e`<span class="evento__descricao">${n.descricao}</span>`}
    </button>
  `}function W(e,t){let n=t??480;P={id:0,titulo:``,tipoId:x(A),diaInteiro:t===void 0,dataInicio:e,horaInicio:h(n),horaFim:h(Math.min(n+60,ne)),dataFim:e,descricao:``},l()}function G(e){return e.id!==void 0&&e.dia_inteiro===0&&y(e)===v(e)}var K=null,ke,Ae=4,je=8,Me=350;function q(e,t,n){let r=o(t);return{...e,data_inicio_epoch:r,data_fim_epoch:r,hora_inicio_min:n.inicioMin,hora_fim_min:n.fimMin}}function J(e){return{inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min}}function Y(e,t){return e.data_inicio_epoch===t.data_inicio_epoch&&e.hora_inicio_min===t.hora_inicio_min&&e.hora_fim_min===t.hora_fim_min}function Ne(){if(K===null||!K.ativo)return j;let{previa:e}=K;return j.map(t=>t.id===e.id?e:t)}function Pe(e,t){if(K!==null||!t.isPrimary||t.button!==0||!G(e))return;let n=t.currentTarget,r=n.closest(`.grade__coluna`),i=n.closest(`.grade`);if(r===null||i===null)return;let a=[...i.querySelectorAll(`.grade__coluna`)].map(e=>{let t=e.getBoundingClientRect();return{dia:e.dataset.dia??``,esquerda:t.left,direita:t.right}});K={evento:e,modo:t.target.closest(`.grade__evento-alca`)===null?`mover`:`redimensionar`,ponteiro:t.pointerId,toque:t.pointerType===`touch`,x:t.clientX,y:t.pageY,alturaDaColuna:r.getBoundingClientRect().height,colunas:a,ativo:!1,desfeito:!1,previa:e},addEventListener(`pointermove`,Fe),addEventListener(`pointerup`,Ie),addEventListener(`pointercancel`,Le),addEventListener(`keydown`,Re),K.toque&&(ke=setTimeout(()=>{K!==null&&(K.ativo=!0,l())},Me))}function Fe(e){if(K===null||e.pointerId!==K.ponteiro||K.desfeito)return;let t=e.clientX-K.x,n=e.pageY-K.y,r=!1;if(!K.ativo){if(K.toque){Math.hypot(t,n)>je&&X();return}if(Math.hypot(t,n)<Ae)return;K.ativo=!0,r=!0}e.preventDefault();let{evento:i}=K,a=we(n,K.alturaDaColuna),o;o=K.modo===`redimensionar`?q(i,y(i),k(J(i),a)):q(i,K.colunas[Te(K.colunas,e.clientX)]?.dia||y(i),O(J(i),a)),(r||!Y(o,K.previa))&&(K.previa=o,l())}function Ie(e){if(K===null||e.pointerId!==K.ponteiro)return;let{ativo:t,evento:n,previa:r}=K;if(X(),t){if(ze(),Y(r,n)){l();return}We(r,!1)}}function Le(e){if(K===null||e.pointerId!==K.ponteiro)return;let t=K.ativo;X(),t&&l()}function Re(e){e.key===`Escape`&&K!==null&&K.ativo&&(e.preventDefault(),K.desfeito=!0,K.previa=K.evento,l())}function X(){clearTimeout(ke),removeEventListener(`pointermove`,Fe),removeEventListener(`pointerup`,Ie),removeEventListener(`pointercancel`,Le),removeEventListener(`keydown`,Re),K=null}function ze(){let e=e=>{e.stopPropagation(),e.preventDefault()};addEventListener(`click`,e,{capture:!0,once:!0}),setTimeout(()=>removeEventListener(`click`,e,{capture:!0}),0)}var Be={handleEvent(e){K?.ativo===!0&&e.preventDefault()},passive:!1};function Ve(e){K?.toque===!0&&e.preventDefault()}function He(e,t){if(!t.altKey||K!==null||!G(e)||t.key!==`ArrowUp`&&t.key!==`ArrowDown`)return;t.preventDefault();let n=t.key===`ArrowUp`?-15:15,r=t.shiftKey?k(J(e),n):O(J(e),n),i=q(e,y(e),r);Y(i,e)||We(i,!0)}function Ue(e){e!==void 0&&queueMicrotask(()=>{document.querySelector(`.grade__evento[data-id="${e}"]`)?.focus()})}async function We(e,t){j=j.map(t=>t.id===e.id?e:t),l(),t&&Ue(e.id);try{await b({...e.id===void 0?{}:{id:e.id},titulo:e.titulo,tipo_id:e.tipo_id,data_inicio_epoch:e.data_inicio_epoch,hora_inicio_min:e.hora_inicio_min,data_fim_epoch:e.data_fim_epoch,hora_fim_min:e.hora_fim_min,dia_inteiro:e.dia_inteiro,descricao:e.descricao})}catch(e){console.error(`Calendário: a gravação do novo horário falhou.`,e),u(r.calendario.eventoNaoMovido,`danger`)}try{await L(),t&&Ue(e.id)}catch(e){console.error(`Calendário: a releitura depois de mover o evento falhou.`,e)}}function Ge(t,n,i){let a=i.get(t.dia)??[];return e`
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
  `}function Ke(){let t=a(),n=T(N.getFullYear(),N.getMonth()),i=m(j,n.map(e=>e.dia));return e`
    <div class="mes">
      ${r.calendario.semana.map(t=>e`<span class="mes__cabecalho">${t}</span>`)}
      ${n.map(e=>Ge(e,t,i))}
    </div>
  `}var Z=null;i(`calendario`,()=>{Z=null});function qe(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function Je(e){let t=`${M}:${e.map(e=>e.dia).join(`,`)}`;if(Z===t)return;Z=t;let n=a();if(!e.some(e=>e.dia===n))return;let r=E();r!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*r-qe()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function Ye(n){let i=_e(),o=a(),s=m(Ne(),n.map(e=>e.dia)),c=E(),l=K?.ativo===!0?K.evento.id:void 0;return Je(n),e`
    <div
      class="grade"
      style=${`--colunas:${n.length}`}
      ?data-arrastando=${l!==void 0}
    >
      <span class="grade__canto"></span>
      ${n.map(t=>e`
          <span class="grade__dia" ?data-hoje=${t.dia===o}>
            ${r.calendario.semana[t.semana]} ${t.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${i.map(t=>e`<span class="grade__hora">${h(t*60)}</span>`)}
      </div>

      ${n.map(n=>{let a=s.get(n.dia)??[],u=a.filter(e=>e.dia_inteiro===1),d=a.filter(e=>e.dia_inteiro===0),f=Ce(d.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return e`
          <div class="grade__coluna" data-dia=${n.dia}>
            ${c===null||n.dia!==o?t:e`<span class="grade__agora" style=${`top:${c*100}%`}></span>`}

            ${i.map(t=>e`
                <button
                  class="grade__vaga"
                  aria-label=${r.calendario.novoAs(r.calendario.semana[n.semana]??``,h(t*60))}
                  @click=${()=>W(n.dia,t*60)}
                ></button>
              `)}

            ${u.length===0?t:e`
                  <div class="grade__inteiros">
                    ${u.map(e=>U(e))}
                  </div>
                `}

            ${d.map((n,i)=>{let a=f[i];if(a===void 0)return t;let o=100/a.colunas,s=G(n);return e`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${g(A,n.tipo_id)};--cor-evento-texto:${ue(g(A,n.tipo_id))};top:${a.topo*100}%;height:${a.altura*100}%;inset-inline-start:calc(${a.coluna*o}% + 1px);width:calc(${o}% - 2px)`}
                  data-id=${n.id??t}
                  ?data-movel=${s}
                  ?data-arrastando=${l!==void 0&&n.id===l}
                  title=${s?`${H(n)}\n${r.calendario.dicaDoArraste}`:H(n)}
                  aria-keyshortcuts=${s?`Alt+ArrowUp Alt+ArrowDown Alt+Shift+ArrowUp Alt+Shift+ArrowDown`:t}
                  @click=${()=>V(n)}
                  @pointerdown=${e=>Pe(n,e)}
                  @keydown=${e=>He(n,e)}
                  @touchmove=${Be}
                  @contextmenu=${Ve}
                >
                  <span class="grade__evento-hora">${h(n.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${n.titulo}</span>
                  ${s?e`<span class="grade__evento-alca" aria-hidden="true"></span>`:t}
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function Xe(){return Ye([{dia:a(N),semana:(N.getDay()+6)%7,numero:N.getDate()}])}function Ze(){return Ye(ge(N))}function Qe(){let t=a(),n=ve(N.getFullYear()),i=m(j,n.flatMap(e=>e.celulas.map(e=>e.dia)));return e`
    <div class="ano">
      ${n.map(n=>e`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{N=new Date(N.getFullYear(),n.mes,1),M=`mes`,l()}}
            >
              ${r.calendario.meses[n.mes]}
            </button>

            <div class="ano__grade">
              ${r.calendario.semanaInicial.map(t=>e`<span class="ano__cabecalho">${t}</span>`)}
              ${n.celulas.map(n=>{let a=(i.get(n.dia)??[]).length;return e`
                  <button
                    class="ano__dia"
                    ?data-fora=${!n.doMes}
                    ?data-hoje=${n.dia===t}
                    ?data-com-evento=${a>0}
                    title=${a===0?``:r.calendario.eventos(a)}
                    @click=${()=>{N=new Date(o(n.dia)),M=`dia`,l()}}
                  >
                    ${n.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function $e(){let t=[...m(j,ye(pe(`agenda`,N))).entries()].filter(([,e])=>e.length>0);return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${r.calendario.semEventos}</p>
      </div>
    `:e`
    <div class="calendario-agenda">
      ${t.map(([t,r])=>e`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${be(t,n())}</span>
            ${r.map(e=>Oe(e))}
          </div>
        `)}
    </div>
  `}function et(){return M===`dia`?Xe():M===`semana`?Ze():M===`mes`?Ke():M===`ano`?Qe():$e()}function Q(e){P!==null&&(P={...P,...e})}function $(e){I!==null&&(I={...I,...e})}async function tt(e){if(!s(e.dataInicio)){u(r.calendario.dataInvalida,`warning`);return}let t=!s(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,n=+!!e.diaInteiro,i=_(e.horaInicio),a=_(e.horaFim),c=t===e.dataInicio&&a<i?i:a;try{await b({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?r.acervo.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??x(A),data_inicio_epoch:o(e.dataInicio),hora_inicio_min:n===1?0:i,data_fim_epoch:o(t),hora_fim_min:n===1?ne:c,dia_inteiro:n,descricao:e.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),u(r.calendario.eventoNaoSalvo,`danger`);return}P=null,u(r.calendario.eventoSalvo),await L()}async function nt(e){if(await f({titulo:r.calendario.excluirEvento,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await ie(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),u(r.calendario.eventoNaoExcluido,`danger`);return}P=null,u(r.calendario.eventoExcluido),await L()}}function rt(n){return e`
    <kk-dialog
      open
      label=${n.id>0?r.calendario.editarEvento:r.calendario.novoEvento}
      @kk-request-close=${d}
      @kk-after-hide=${()=>{P=null,l()}}
    >
      <div class="formulario">
        <kk-input
          label=${r.calendario.titulo}
          placeholder=${r.calendario.tituloPlaceholder}
          .value=${n.titulo}
          @kk-input=${e=>{Q({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${r.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${A.map(t=>e`
                <button
                  class="tipo-chip"
                  ?data-ativo=${n.tipoId===t.id}
                  @click=${()=>{Q({tipoId:t.id??null}),l()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${p[t.cor_chave]??``}`}
                  ></span>
                  ${t.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${n.diaInteiro}
          @kk-change=${e=>{Q({diaInteiro:e.target.checked}),l()}}
        >
          ${r.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${r.calendario.dataInicio}
            .value=${n.dataInicio}
            @kk-change=${e=>{let t=e.target.value,r=P?.dataFim??n.dataFim;Q({dataInicio:t,dataFim:r<t?t:r}),l()}}
          ></kk-input>
          ${n.diaInteiro?t:e`
                <kk-input
                  type="time"
                  label=${r.calendario.horaInicio}
                  .value=${n.horaInicio}
                  @kk-change=${e=>{Q({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${r.calendario.dataFim}
            min=${n.dataInicio}
            .value=${n.dataFim}
            @kk-change=${e=>{Q({dataFim:e.target.value})}}
          ></kk-input>
          ${n.diaInteiro?t:e`
                <kk-input
                  type="time"
                  label=${r.calendario.horaFim}
                  .value=${n.horaFim}
                  @kk-change=${e=>{Q({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${r.calendario.descricao}
          placeholder=${r.calendario.descricaoPlaceholder}
          .value=${n.descricao}
          @kk-input=${e=>{Q({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id>0?e`
              <kk-button variant="danger" outline @click=${()=>void nt(n)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${r.acoes.excluir}
              </kk-button>
            `:t}
        <kk-button
          @click=${()=>{P=null,l()}}
        >
          ${r.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{P!==null&&tt(P)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function it(e){let t=e.nome.trim()===``?r.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?S(A,e.id):void 0;try{await ce({...n??{ordem:se(A)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),u(r.calendario.tipoNaoSalvo,`danger`);return}I=null,await L()}async function at(e){if(e.id!==void 0){if(le(j,e.id)){await f({titulo:r.calendario.tipoEmUsoTitulo,texto:r.calendario.tipoEmUsoTexto,rotuloConfirmar:r.acoes.fechar});return}if(await f({titulo:r.calendario.excluirTipo,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await ae(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),u(r.calendario.tipoNaoExcluido,`danger`);return}await L()}}}function ot(t){return e`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${r.calendario.tipoNome}
        .value=${t.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${r.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(p).map(([n,r])=>e`
              <button
                class="cor-chip"
                ?data-ativo=${t.cor===n}
                style=${`background:${r}`}
                aria-label=${n}
                @click=${()=>{$({cor:n}),l()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${r.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(te).map(([n,r])=>e`
              <button
                class="tipo-chip"
                ?data-ativo=${t.icone===n}
                aria-label=${n}
                @click=${()=>{$({icone:n}),l()}}
              >
                <kk-icon name=${r}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{I!==null&&it(I)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,l()}}
        >
          ${r.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function st(){return e`
    <kk-dialog
      open
      label=${r.calendario.tipos}
      @kk-request-close=${I===null?t:d}
      @kk-after-hide=${()=>{F=!1,I=null,l()}}
    >
      ${I===null?e`
            <div class="tipos-lista">
              ${A.map(t=>e`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${p[t.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${te[t.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${t.nome}</span>
                    <kk-icon-button
                      name="pencil"
                      label=${r.acoes.editar}
                      @click=${()=>{I={id:t.id??0,nome:t.nome,cor:t.cor_chave,icone:t.icone},l()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${r.calendario.excluirTipo}
                      @click=${()=>void at(t)}
                    ></kk-icon-button>
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{I={id:0,nome:``,cor:`primary`,icone:`evento`},l()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${r.calendario.novoTipo}
            </kk-button>
          `:ot(I)}
    </kk-dialog>
  `}var ct={aoVoltar(){return P===null?F?(I===null?F=!1:I=null,l(),!0):!1:(P=null,l(),!0)},acoes(){if(R.terminou)return e`
      <kk-icon-button
        name="tags"
        label=${r.calendario.tipos}
        @click=${()=>{F=!0,I=null,l()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${r.calendario.novoEvento}
        @click=${()=>W(a())}
      ></kk-icon-button>
    `},conteudo(){let n=R.espera();return n===null?e`
      ${De()}
      ${et()}
      ${P===null?t:rt(P)}
      ${F?st():t}
    `:n}};export{ct as telaCalendario};