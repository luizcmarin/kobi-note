import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-V1DWQvwW.js";import{l as r,n as i,r as a,s as o}from"./data-DbOIIZMP.js";import{A as s,C as c,D as l,E as u,M as d,O as f,S as ee,T as te,a as ne,b as re,g as ie,j as ae,k as oe,w as se,x as ce,y as le}from"./formato-BoZO7uRM.js";import{n as ue}from"./rotas-CR8kk0YZ.js";import{A as p,C as m,M as h,ct as g}from"./index-DjPQ20Ch.js";import{t as de}from"./carga-4VW0gvij.js";import{_ as fe,a as pe,b as _,c as v,f as me,g as y,h as he,i as b,l as x,m as ge,n as _e,o as S,p as ve,r as C,s as w,t as T,u as E,v as ye,y as D}from"./dados-DvT2oH_D.js";import{t as O}from"./contraste-P2ZOpT6H.js";var k=[],A=[],j=`semana`,M=new Date,N=null,P=!1,F=null;async function I(){let e=await pe();k=e.tipos,A=e.eventos,g()}var L=new de(`Calendário`,async()=>{await I()}),R=5;function be(){let e=new Date().getFullYear(),t=new Set;for(let n=e-R;n<=e+R;n+=1)t.add(n);return t.add(M.getFullYear()),[...t].sort((e,t)=>e-t)}function z(e,t){M=new Date(e,t,1),g()}function xe(){return e`
    <div class="chips" role="group" aria-label=${n.calendario.vista}>
      ${le.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${j===t}
            @click=${()=>{j=t,g()}}
          >
            ${n.calendario.vistas[t]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${n.calendario.mes}
        size="small"
        .value=${String(M.getMonth())}
        @kk-change=${e=>z(M.getFullYear(),Number(e.target.value))}
      >
        ${n.calendario.meses.map((t,n)=>e`<kk-option value=${n}>${t}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${n.calendario.ano}
        size="small"
        .value=${String(M.getFullYear())}
        @kk-change=${e=>z(Number(e.target.value),M.getMonth())}
      >
        ${be().map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${n.calendario.anterior}
        @click=${()=>{M=s(j,M,-1),g()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{M=new Date,g()}}
      >
        ${n.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${n.calendario.proximo}
        @click=${()=>{M=s(j,M,1),g()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${ie(j,M)}</span>
    </div>
  `}function B(e){N={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:E(e),horaInicio:S(e.hora_inicio_min),dataFim:x(e),horaFim:S(e.hora_fim_min),descricao:e.descricao},g()}function V(e){return e.dia_inteiro===1?`${n.calendario.diaInteiro} — ${e.titulo}`:`${S(e.hora_inicio_min)} – ${S(e.hora_fim_min)} — ${e.titulo}`}function H(n){let r=w(k,n.tipo_id);return e`
    <button
      class="pastilha"
      style=${`--cor-evento:${r};--cor-evento-texto:${O(r)}`}
      title=${V(n)}
      @click=${()=>B(n)}
    >
      ${n.dia_inteiro===1?t:e`<span class="pastilha__hora">${S(n.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${n.titulo}</span>
    </button>
  `}function Se(r){let i=w(k,r.tipo_id),a=_(k,r.tipo_id);return e`
    <button class="evento" style=${`--cor-evento:${i}`} @click=${()=>B(r)}>
      <span class="evento__quando">
        ${r.dia_inteiro===1?n.calendario.diaInteiro:`${S(r.hora_inicio_min)} – ${S(r.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${ge(k,r.tipo_id)}></kk-icon>${r.titulo}
      </span>
      ${a===void 0?t:e`<span class="evento__tipo">${a.nome}</span>`}
      ${r.descricao===``?t:e`<span class="evento__descricao">${r.descricao}</span>`}
    </button>
  `}function U(e,t){let n=t??480;N={id:0,titulo:``,tipoId:D(k),diaInteiro:t===void 0,dataInicio:e,horaInicio:S(n),horaFim:S(Math.min(n+60,C)),dataFim:e,descricao:``},g()}function W(e){return e.id!==void 0&&e.dia_inteiro===0&&E(e)===x(e)}var G=null,K,Ce=4,we=8,Te=350;function q(e,t,n){let r=o(t);return{...e,data_inicio_epoch:r,data_fim_epoch:r,hora_inicio_min:n.inicioMin,hora_fim_min:n.fimMin}}function J(e){return{inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min}}function Y(e,t){return e.data_inicio_epoch===t.data_inicio_epoch&&e.hora_inicio_min===t.hora_inicio_min&&e.hora_fim_min===t.hora_fim_min}function Ee(){if(G===null||!G.ativo)return A;let{previa:e}=G;return A.map(t=>t.id===e.id?e:t)}function De(e,t){if(G!==null||!t.isPrimary||t.button!==0||!W(e))return;let n=t.currentTarget,r=n.closest(`.grade__coluna`),i=n.closest(`.grade`);if(r===null||i===null)return;let a=[...i.querySelectorAll(`.grade__coluna`)].map(e=>{let t=e.getBoundingClientRect();return{dia:e.dataset.dia??``,esquerda:t.left,direita:t.right}});G={evento:e,modo:t.target.closest(`.grade__evento-alca`)===null?`mover`:`redimensionar`,ponteiro:t.pointerId,toque:t.pointerType===`touch`,x:t.clientX,y:t.pageY,alturaDaColuna:r.getBoundingClientRect().height,colunas:a,ativo:!1,desfeito:!1,previa:e},addEventListener(`pointermove`,Oe),addEventListener(`pointerup`,ke),addEventListener(`pointercancel`,Ae),addEventListener(`keydown`,je),G.toque&&(K=setTimeout(()=>{G!==null&&(G.ativo=!0,g())},Te))}function Oe(e){if(G===null||e.pointerId!==G.ponteiro||G.desfeito)return;let t=e.clientX-G.x,n=e.pageY-G.y,r=!1;if(!G.ativo){if(G.toque){Math.hypot(t,n)>we&&X();return}if(Math.hypot(t,n)<Ce)return;G.ativo=!0,r=!0}e.preventDefault();let{evento:i}=G,a=oe(n,G.alturaDaColuna),o;o=G.modo===`redimensionar`?q(i,E(i),l(J(i),a)):q(i,G.colunas[ee(G.colunas,e.clientX)]?.dia||E(i),u(J(i),a)),(r||!Y(o,G.previa))&&(G.previa=o,g())}function ke(e){if(G===null||e.pointerId!==G.ponteiro)return;let{ativo:t,evento:n,previa:r}=G;X(),t&&(Me(),Y(r,n)?g():Le(r,!1))}function Ae(e){if(G===null||e.pointerId!==G.ponteiro)return;let t=G.ativo;X(),t&&g()}function je(e){e.key===`Escape`&&G!==null&&G.ativo&&(e.preventDefault(),G.desfeito=!0,G.previa=G.evento,g())}function X(){clearTimeout(K),removeEventListener(`pointermove`,Oe),removeEventListener(`pointerup`,ke),removeEventListener(`pointercancel`,Ae),removeEventListener(`keydown`,je),G=null}function Me(){let e=e=>{e.stopPropagation(),e.preventDefault()};addEventListener(`click`,e,{capture:!0,once:!0}),setTimeout(()=>removeEventListener(`click`,e,{capture:!0}),0)}var Ne={handleEvent(e){G?.ativo===!0&&e.preventDefault()},passive:!1};function Pe(e){G?.toque===!0&&e.preventDefault()}function Fe(e,t){if(!t.altKey||G!==null||!W(e)||t.key!==`ArrowUp`&&t.key!==`ArrowDown`)return;t.preventDefault();let n=t.key===`ArrowUp`?-15:15,r=t.shiftKey?l(J(e),n):u(J(e),n),i=q(e,E(e),r);Y(i,e)||Le(i,!0)}function Ie(e){e!==void 0&&queueMicrotask(()=>{document.querySelector(`.grade__evento[data-id="${e}"]`)?.focus()})}async function Le(e,t){A=A.map(t=>t.id===e.id?e:t),g(),t&&Ie(e.id);try{await y({...e.id===void 0?{}:{id:e.id},titulo:e.titulo,tipo_id:e.tipo_id,data_inicio_epoch:e.data_inicio_epoch,hora_inicio_min:e.hora_inicio_min,data_fim_epoch:e.data_fim_epoch,hora_fim_min:e.hora_fim_min,dia_inteiro:e.dia_inteiro,descricao:e.descricao})}catch(e){console.error(`Calendário: a gravação do novo horário falhou.`,e),m(n.calendario.eventoNaoMovido,`danger`)}try{await I(),t&&Ie(e.id)}catch(e){console.error(`Calendário: a releitura depois de mover o evento falhou.`,e)}}function Re(t,r,i){let a=i.get(t.dia)??[];return e`
    <div class="mes__celula" ?data-fora=${!t.doMes} ?data-hoje=${t.dia===r}>
      <button
        class="mes__numero"
        aria-label=${n.calendario.novoEm(t.dia)}
        @click=${()=>U(t.dia)}
      >
        ${t.numero}
      </button>
      <div class="mes__eventos">${a.map(e=>H(e))}</div>
    </div>
  `}function ze(){let t=a(),i=ce(r(M)),o=b(A,i.map(e=>e.dia));return e`
    <div class="mes">
      ${n.calendario.semana.map(t=>e`<span class="mes__cabecalho">${t}</span>`)}
      ${i.map(e=>Re(e,t,o))}
    </div>
  `}var Z=null;ue(`calendario`,()=>{Z=null});function Be(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function Ve(e){let t=`${j}:${e.map(e=>e.dia).join(`,`)}`;if(Z===t)return;Z=t;let n=a();if(!e.some(e=>e.dia===n))return;let r=d();r!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*r-Be()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function He(r){let i=f(),o=a(),s=b(Ee(),r.map(e=>e.dia)),c=d(),l=G?.ativo===!0?G.evento.id:void 0;return Ve(r),e`
    <div
      class="grade"
      style=${`--colunas:${r.length}`}
      ?data-arrastando=${l!==void 0}
    >
      <span class="grade__canto"></span>
      ${r.map(t=>e`
          <span class="grade__dia" ?data-hoje=${t.dia===o}>
            ${n.calendario.semana[t.semana]} ${t.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${i.map(t=>e`<span class="grade__hora">${S(t*60)}</span>`)}
      </div>

      ${r.map(r=>{let a=s.get(r.dia)??[],u=a.filter(e=>e.dia_inteiro===1),d=a.filter(e=>e.dia_inteiro===0),f=te(d.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return e`
          <div class="grade__coluna" data-dia=${r.dia}>
            ${c===null||r.dia!==o?t:e`<span class="grade__agora" style=${`top:${c*100}%`}></span>`}

            ${i.map(t=>e`
                <button
                  class="grade__vaga"
                  aria-label=${n.calendario.novoAs(n.calendario.semana[r.semana]??``,S(t*60))}
                  @click=${()=>U(r.dia,t*60)}
                ></button>
              `)}

            ${u.length===0?t:e`
                  <div class="grade__inteiros">
                    ${u.map(e=>H(e))}
                  </div>
                `}

            ${d.map((r,i)=>{let a=f[i];if(a===void 0)return t;let o=100/a.colunas,s=W(r);return e`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${w(k,r.tipo_id)};--cor-evento-texto:${O(w(k,r.tipo_id))};top:${a.topo*100}%;height:${a.altura*100}%;inset-inline-start:calc(${a.coluna*o}% + 1px);width:calc(${o}% - 2px)`}
                  data-id=${r.id??t}
                  ?data-movel=${s}
                  ?data-arrastando=${l!==void 0&&r.id===l}
                  title=${s?`${V(r)}\n${n.calendario.dicaDoArraste}`:V(r)}
                  aria-keyshortcuts=${s?`Alt+ArrowUp Alt+ArrowDown Alt+Shift+ArrowUp Alt+Shift+ArrowDown`:t}
                  @click=${()=>B(r)}
                  @pointerdown=${e=>De(r,e)}
                  @keydown=${e=>Fe(r,e)}
                  @touchmove=${Ne}
                  @contextmenu=${Pe}
                >
                  <span class="grade__evento-hora">${S(r.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${r.titulo}</span>
                  ${s?e`<span class="grade__evento-alca" aria-hidden="true"></span>`:t}
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function Ue(){let e=a(M);return He(c(M).filter(t=>t.dia===e))}function We(){return He(c(M))}function Ge(){let t=a(),r=re(M.getFullYear()),i=b(A,r.flatMap(e=>e.celulas.map(e=>e.dia)));return e`
    <div class="ano">
      ${r.map((r,a)=>e`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{M=new Date(o(`${r.mes}-01`)),j=`mes`,g()}}
            >
              ${n.calendario.meses[a]}
            </button>

            <div class="ano__grade">
              ${n.calendario.semanaInicial.map(t=>e`<span class="ano__cabecalho">${t}</span>`)}
              ${r.celulas.map(r=>{let a=(i.get(r.dia)??[]).length;return e`
                  <button
                    class="ano__dia"
                    ?data-fora=${!r.doMes}
                    ?data-hoje=${r.dia===t}
                    ?data-com-evento=${a>0}
                    title=${a===0?``:n.calendario.eventos(a)}
                    @click=${()=>{M=new Date(o(r.dia)),j=`dia`,g()}}
                  >
                    ${r.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function Ke(){let t=[...b(A,se(ae(`agenda`,M))).entries()].filter(([,e])=>e.length>0);return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${n.calendario.semEventos}</p>
      </div>
    `:e`
    <div class="calendario-agenda">
      ${t.map(([t,n])=>e`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${ne(t)}</span>
            ${n.map(e=>Se(e))}
          </div>
        `)}
    </div>
  `}function qe(){return j===`dia`?Ue():j===`semana`?We():j===`mes`?ze():j===`ano`?Ge():Ke()}function Q(e){N!==null&&(N={...N,...e})}function $(e){F!==null&&(F={...F,...e})}async function Je(e){if(!i(e.dataInicio)){m(n.calendario.dataInvalida,`warning`);return}let t=!i(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,r=+!!e.diaInteiro,a=v(e.horaInicio),s=v(e.horaFim),c=t===e.dataInicio&&s<a?a:s;try{await y({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?n.acervo.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??D(k),data_inicio_epoch:o(e.dataInicio),hora_inicio_min:r===1?0:a,data_fim_epoch:o(t),hora_fim_min:r===1?C:c,dia_inteiro:r,descricao:e.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),m(n.calendario.eventoNaoSalvo,`danger`);return}N=null,m(n.calendario.eventoSalvo),await I()}async function Ye(e){if(await p({titulo:n.calendario.excluirEvento,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})){try{await me(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),m(n.calendario.eventoNaoExcluido,`danger`);return}N=null,m(n.calendario.eventoExcluido),await I()}}function Xe(r){return e`
    <kk-dialog
      open
      label=${r.id>0?n.calendario.editarEvento:n.calendario.novoEvento}
      @kk-request-close=${h}
      @kk-after-hide=${()=>{N=null,g()}}
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
            ${k.map(t=>e`
                <button
                  class="tipo-chip"
                  ?data-ativo=${r.tipoId===t.id}
                  @click=${()=>{Q({tipoId:t.id??null}),g()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${T[t.cor_chave]??``}`}
                  ></span>
                  ${t.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${r.diaInteiro}
          @kk-change=${e=>{Q({diaInteiro:e.target.checked}),g()}}
        >
          ${n.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${n.calendario.dataInicio}
            .value=${r.dataInicio}
            @kk-change=${e=>{let t=e.target.value,n=N?.dataFim??r.dataFim;Q({dataInicio:t,dataFim:n<t?t:n}),g()}}
          ></kk-input>
          ${r.diaInteiro?t:e`
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
          ${r.diaInteiro?t:e`
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
        ${r.id>0?e`
              <kk-button variant="danger" outline @click=${()=>void Ye(r)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
              </kk-button>
            `:t}
        <kk-button
          @click=${()=>{N=null,g()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{N!==null&&Je(N)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function Ze(e){let t=e.nome.trim()===``?n.calendario.tipoSemNome:e.nome.trim(),r=e.id>0?_(k,e.id):void 0;try{await fe({...r??{ordem:he(k)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),m(n.calendario.tipoNaoSalvo,`danger`);return}F=null,await I()}async function Qe(e){if(e.id!==void 0){if(ye(A,e.id))await p({titulo:n.calendario.tipoEmUsoTitulo,texto:n.calendario.tipoEmUsoTexto,rotuloConfirmar:n.acoes.fechar});else if(await p({titulo:n.calendario.excluirTipo,texto:n.acervo.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})){try{await ve(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),m(n.calendario.tipoNaoExcluido,`danger`);return}await I()}}}function $e(t){return e`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${n.calendario.tipoNome}
        .value=${t.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${n.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(T).map(([n,r])=>e`
              <button
                class="cor-chip"
                ?data-ativo=${t.cor===n}
                style=${`background:${r}`}
                aria-label=${n}
                @click=${()=>{$({cor:n}),g()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${n.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(_e).map(([n,r])=>e`
              <button
                class="tipo-chip"
                ?data-ativo=${t.icone===n}
                aria-label=${n}
                @click=${()=>{$({icone:n}),g()}}
              >
                <kk-icon name=${r}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{F!==null&&Ze(F)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,g()}}
        >
          ${n.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function et(){return e`
    <kk-dialog
      open
      label=${n.calendario.tipos}
      @kk-request-close=${F===null?t:h}
      @kk-after-hide=${()=>{P=!1,F=null,g()}}
    >
      ${F===null?e`
            <div class="tipos-lista">
              ${k.map(t=>e`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${T[t.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${_e[t.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${t.nome}</span>
                    <kk-icon-button
                      name="pencil"
                      label=${n.acoes.editar}
                      @click=${()=>{F={id:t.id??0,nome:t.nome,cor:t.cor_chave,icone:t.icone},g()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${n.calendario.excluirTipo}
                      @click=${()=>void Qe(t)}
                    ></kk-icon-button>
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{F={id:0,nome:``,cor:`primary`,icone:`evento`},g()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${n.calendario.novoTipo}
            </kk-button>
          `:$e(F)}
    </kk-dialog>
  `}var tt={aoVoltar(){return N===null?P?(F===null?P=!1:F=null,g(),!0):!1:(N=null,g(),!0)},acoes(){if(L.terminou)return e`
      <kk-icon-button
        name="tags"
        label=${n.calendario.tipos}
        @click=${()=>{P=!0,F=null,g()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${n.calendario.novoEvento}
        @click=${()=>U(a())}
      ></kk-icon-button>
    `},conteudo(){let n=L.espera();return n===null?e`
      ${xe()}
      ${qe()}
      ${N===null?t:Xe(N)}
      ${P?et():t}
    `:n}};export{tt as telaCalendario};