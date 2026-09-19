import{b as e,dt as t,et as n,g as r,ht as i,m as a,pt as o,rt as s,st as c,tt as l,v as u,y as d}from"./index-B-XjbcbU.js";import{CORES as f,ICONES as p,ULTIMO_MINUTO as m,agendaDosDias as h,carregar as ee,comoHora as g,corDoTipo as _,deHora as v,diaFinal as te,diaInicial as y,excluirEvento as b,excluirTipo as ne,iconeDoTipo as re,proximaOrdem as ie,salvarEvento as ae,salvarTipo as oe,tipoEmUso as se,tipoPadrao as x,tipoPorId as S}from"./dados-CvM_lCU2.js";var ce=[`dia`,`semana`,`mes`,`ano`,`agenda`],C=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function w(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function T(e,t){let n=w(e);return n.setDate(n.getDate()+t),n}function E(e){return T(e,-((e.getDay()+6)%7))}function le(e,t){if(e===`dia`){let e=l(t);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=E(t);return{de:l(e),ate:l(T(e,6))}}if(e===`mes`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth()+1,0);return{de:l(e),ate:l(n)}}let n=new Date(t.getFullYear(),0,1),r=new Date(t.getFullYear(),11,31);return{de:l(n),ate:l(r)}}function D(e,t,n){let r=w(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function ue(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=E(t),n=T(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function O(e,t){let n=E(new Date(e,t,1)),r=T(E(new Date(e,t+1,0)),6),i=[];for(let e=n;e<=r;e=T(e,1))i.push({dia:l(e),numero:e.getDate(),doMes:e.getMonth()===t});return i}function de(e){let t=E(e);return Array.from({length:7},(e,n)=>{let r=T(t,n);return{dia:l(r),rotulo:C[n]??``,numero:r.getDate()}})}function fe(){return Array.from({length:17},(e,t)=>6+t)}function pe(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:O(e,n)}))}function me(e){let t=[],[n=1970,r=1,i=1]=e.de.split(`-`).map(Number);for(let a=new Date(n,r-1,i);;a=T(a,1)){let n=l(a);if(n>e.ate)break;t.push(n)}return t}function he(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}var ge=15;function _e(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+ge),1380)}}function k(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function ve(e){let t=e.map(e=>_e(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var A=[],j=[],M=`semana`,N=new Date,P=null,F=!1,I=null,L=!1,R=!1,z=null;async function B(){let e=await ee();A=e.tipos,j=e.eventos,z=null,c()}function V(){L||R||z!==null||(R=!0,(async()=>{try{await B(),L=!0}catch(t){console.error(`Calendário: a carga falhou.`,t),z=e(t)}finally{R=!1,c()}})())}function ye(){z=null,V(),c()}var H=5;function be(){let e=new Date().getFullYear(),t=new Set;for(let n=e-H;n<=e+H;n+=1)t.add(n);return t.add(N.getFullYear()),[...t].sort((e,t)=>e-t)}function U(e,t){N=new Date(e,t,1),c()}function xe(){return i`
    <div class="chips" role="group" aria-label=${t.calendario.vista}>
      ${ce.map(e=>i`
          <button
            class="chip"
            ?data-ativo=${M===e}
            @click=${()=>{M=e,c()}}
          >
            ${t.calendario.vistas[e]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${t.calendario.mes}
        size="small"
        .value=${String(N.getMonth())}
        @kk-change=${e=>U(N.getFullYear(),Number(e.target.value))}
      >
        ${t.calendario.meses.map((e,t)=>i`<kk-option value=${t}>${e}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${t.calendario.ano}
        size="small"
        .value=${String(N.getFullYear())}
        @kk-change=${e=>U(Number(e.target.value),N.getMonth())}
      >
        ${be().map(e=>i`<kk-option value=${e}>${e}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${t.calendario.anterior}
        @click=${()=>{N=D(M,N,-1),c()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{N=new Date,c()}}
      >
        ${t.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${t.calendario.proximo}
        @click=${()=>{N=D(M,N,1),c()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${ue(M,N)}</span>
    </div>
  `}function W(e){P={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:y(e),horaInicio:g(e.hora_inicio_min),dataFim:te(e),horaFim:g(e.hora_fim_min),descricao:e.descricao},c()}function G(e){return e.dia_inteiro===1?`${t.calendario.diaInteiro} — ${e.titulo}`:`${g(e.hora_inicio_min)} – ${g(e.hora_fim_min)} — ${e.titulo}`}function K(e){let t=_(A,e.tipo_id);return i`
    <button
      class="pastilha"
      style=${`--cor-evento:${t}`}
      title=${G(e)}
      @click=${()=>W(e)}
    >
      ${e.dia_inteiro===1?o:i`<span class="pastilha__hora">${g(e.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${e.titulo}</span>
    </button>
  `}function Se(e){let n=_(A,e.tipo_id),r=S(A,e.tipo_id);return i`
    <button class="evento" style=${`--cor-evento:${n}`} @click=${()=>W(e)}>
      <span class="evento__quando">
        ${e.dia_inteiro===1?t.calendario.diaInteiro:`${g(e.hora_inicio_min)} – ${g(e.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${re(A,e.tipo_id)}></kk-icon>${e.titulo}
      </span>
      ${r===void 0?o:i`<span class="evento__tipo">${r.nome}</span>`}
      ${e.descricao===``?o:i`<span class="evento__descricao">${e.descricao}</span>`}
    </button>
  `}function q(e,t){let n=t??480;P={id:0,titulo:``,tipoId:x(A),diaInteiro:t===void 0,dataInicio:e,horaInicio:g(n),horaFim:g(Math.min(n+60,m)),dataFim:e,descricao:``},c()}function Ce(e,n,r){let a=r.get(e.dia)??[];return i`
    <div class="mes__celula" ?data-fora=${!e.doMes} ?data-hoje=${e.dia===n}>
      <button
        class="mes__numero"
        aria-label=${t.calendario.novoEm(e.dia)}
        @click=${()=>q(e.dia)}
      >
        ${e.numero}
      </button>
      <div class="mes__eventos">${a.map(e=>K(e))}</div>
    </div>
  `}function we(){let e=l(),t=O(N.getFullYear(),N.getMonth()),n=h(j,t.map(e=>e.dia));return i`
    <div class="mes">
      ${C.map(e=>i`<span class="mes__cabecalho">${e}</span>`)}
      ${t.map(t=>Ce(t,e,n))}
    </div>
  `}var J=null,Y=!1;function Te(){Y||(Y=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`calendario`&&(J=null)}))}function Ee(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function De(e){Te();let t=`${M}:${e.map(e=>e.dia).join(`,`)}`;if(J===t)return;J=t;let n=l();if(!e.some(e=>e.dia===n))return;let r=k();r!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*r-Ee()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function X(e){let n=fe(),r=l(),a=h(j,e.map(e=>e.dia)),s=k();return De(e),i`
    <div class="grade" style=${`--colunas:${e.length}`}>
      <span class="grade__canto"></span>
      ${e.map(e=>i`
          <span class="grade__dia" ?data-hoje=${e.dia===r}>
            ${e.rotulo} ${e.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${n.map(e=>i`<span class="grade__hora">${g(e*60)}</span>`)}
      </div>

      ${e.map(e=>{let c=a.get(e.dia)??[],l=c.filter(e=>e.dia_inteiro===1),u=c.filter(e=>e.dia_inteiro===0),d=ve(u.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return i`
          <div class="grade__coluna">
            ${s===null||e.dia!==r?o:i`<span class="grade__agora" style=${`top:${s*100}%`}></span>`}

            ${n.map(n=>i`
                <button
                  class="grade__vaga"
                  aria-label=${t.calendario.novoAs(e.rotulo,g(n*60))}
                  @click=${()=>q(e.dia,n*60)}
                ></button>
              `)}

            ${l.length===0?o:i`
                  <div class="grade__inteiros">
                    ${l.map(e=>K(e))}
                  </div>
                `}

            ${u.map((e,t)=>{let n=d[t];if(n===void 0)return o;let r=100/n.colunas;return i`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${_(A,e.tipo_id)};top:${n.topo*100}%;height:${n.altura*100}%;inset-inline-start:calc(${n.coluna*r}% + 1px);width:calc(${r}% - 2px)`}
                  title=${G(e)}
                  @click=${()=>W(e)}
                >
                  <span class="grade__evento-hora">${g(e.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${e.titulo}</span>
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function Oe(){return X([{dia:l(N),rotulo:N.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:N.getDate()}])}function ke(){return X(de(N))}function Z(){let e=l(),n=pe(N.getFullYear()),r=h(j,n.flatMap(e=>e.celulas.map(e=>e.dia)));return i`
    <div class="ano">
      ${n.map(n=>i`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{N=new Date(N.getFullYear(),n.mes,1),M=`mes`,c()}}
            >
              ${n.rotulo}
            </button>

            <div class="ano__grade">
              ${C.map(e=>i`<span class="ano__cabecalho">${e.slice(0,1)}</span>`)}
              ${n.celulas.map(n=>{let a=(r.get(n.dia)??[]).length;return i`
                  <button
                    class="ano__dia"
                    ?data-fora=${!n.doMes}
                    ?data-hoje=${n.dia===e}
                    ?data-com-evento=${a>0}
                    title=${a===0?``:t.calendario.eventos(a)}
                    @click=${()=>{N=new Date(s(n.dia)),M=`dia`,c()}}
                  >
                    ${n.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function Ae(){let e=[...h(j,me(le(`agenda`,N))).entries()].filter(([,e])=>e.length>0);return e.length===0?i`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${t.calendario.semEventos}</p>
      </div>
    `:i`
    <div class="calendario-agenda">
      ${e.map(([e,t])=>i`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${he(e)}</span>
            ${t.map(e=>Se(e))}
          </div>
        `)}
    </div>
  `}function je(){return M===`dia`?Oe():M===`semana`?ke():M===`mes`?we():M===`ano`?Z():Ae()}function Q(e){P!==null&&(P={...P,...e})}function $(e){I!==null&&(I={...I,...e})}async function Me(e){if(!n(e.dataInicio)){a(t.calendario.dataInvalida,`warning`);return}let r=!n(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,i=+!!e.diaInteiro,o=v(e.horaInicio),c=v(e.horaFim),l=r===e.dataInicio&&c<o?o:c;try{await ae({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?t.acervo.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??x(A),data_inicio_epoch:s(e.dataInicio),hora_inicio_min:i===1?0:o,data_fim_epoch:s(r),hora_fim_min:i===1?m:l,dia_inteiro:i,descricao:e.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),a(t.calendario.eventoNaoSalvo,`danger`);return}P=null,a(t.calendario.eventoSalvo),await B()}async function Ne(e){if(await r({titulo:t.calendario.excluirEvento,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})){try{await b(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),a(t.calendario.eventoNaoExcluido,`danger`);return}P=null,a(t.calendario.eventoExcluido),await B()}}function Pe(e){return i`
    <kk-dialog
      open
      label=${e.id>0?t.calendario.editarEvento:t.calendario.novoEvento}
      @kk-request-close=${u}
      @kk-after-hide=${()=>{P=null,c()}}
    >
      <div class="formulario">
        <kk-input
          label=${t.calendario.titulo}
          placeholder=${t.calendario.tituloPlaceholder}
          .value=${e.titulo}
          @kk-input=${e=>{Q({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${t.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${A.map(t=>i`
                <button
                  class="tipo-chip"
                  ?data-ativo=${e.tipoId===t.id}
                  @click=${()=>{Q({tipoId:t.id??null}),c()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${f[t.cor_chave]??``}`}
                  ></span>
                  ${t.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${e.diaInteiro}
          @kk-change=${e=>{Q({diaInteiro:e.target.checked}),c()}}
        >
          ${t.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${t.calendario.dataInicio}
            .value=${e.dataInicio}
            @kk-change=${t=>{let n=t.target.value,r=P?.dataFim??e.dataFim;Q({dataInicio:n,dataFim:r<n?n:r}),c()}}
          ></kk-input>
          ${e.diaInteiro?o:i`
                <kk-input
                  type="time"
                  label=${t.calendario.horaInicio}
                  .value=${e.horaInicio}
                  @kk-change=${e=>{Q({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${t.calendario.dataFim}
            min=${e.dataInicio}
            .value=${e.dataFim}
            @kk-change=${e=>{Q({dataFim:e.target.value})}}
          ></kk-input>
          ${e.diaInteiro?o:i`
                <kk-input
                  type="time"
                  label=${t.calendario.horaFim}
                  .value=${e.horaFim}
                  @kk-change=${e=>{Q({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${t.calendario.descricao}
          placeholder=${t.calendario.descricaoPlaceholder}
          .value=${e.descricao}
          @kk-input=${e=>{Q({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${e.id>0?i`
              <kk-button variant="danger" outline @click=${()=>void Ne(e)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${t.acoes.excluir}
              </kk-button>
            `:o}
        <kk-button
          @click=${()=>{P=null,c()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{P!==null&&Me(P)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function Fe(e){let n=e.nome.trim()===``?t.calendario.tipoSemNome:e.nome.trim(),r=e.id>0?S(A,e.id):void 0;try{await oe({...r??{ordem:ie(A)},...e.id>0?{id:e.id}:{},nome:n,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),a(t.calendario.tipoNaoSalvo,`danger`);return}I=null,await B()}async function Ie(e){if(e.id!==void 0){if(se(j,e.id)){await r({titulo:t.calendario.tipoEmUsoTitulo,texto:t.calendario.tipoEmUsoTexto,rotuloConfirmar:t.acoes.fechar});return}if(await r({titulo:t.calendario.excluirTipo,texto:t.acervo.excluirTexto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})){try{await ne(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),a(t.calendario.tipoNaoExcluido,`danger`);return}await B()}}}function Le(e){return i`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${t.calendario.tipoNome}
        .value=${e.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${t.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(f).map(([t,n])=>i`
              <button
                class="cor-chip"
                ?data-ativo=${e.cor===t}
                style=${`background:${n}`}
                aria-label=${t}
                @click=${()=>{$({cor:t}),c()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${t.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(p).map(([t,n])=>i`
              <button
                class="tipo-chip"
                ?data-ativo=${e.icone===t}
                aria-label=${t}
                @click=${()=>{$({icone:t}),c()}}
              >
                <kk-icon name=${n}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <kk-switch
        ?checked=${e.especial}
        @kk-change=${e=>{$({especial:e.target.checked})}}
      >
        ${t.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{I!==null&&Fe(I)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${t.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,c()}}
        >
          ${t.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Re(){return i`
    <kk-dialog
      open
      label=${t.calendario.tipos}
      @kk-request-close=${I===null?o:u}
      @kk-after-hide=${()=>{F=!1,I=null,c()}}
    >
      ${I===null?i`
            <div class="tipos-lista">
              ${A.map(e=>i`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${f[e.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${p[e.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${e.nome}</span>
                    ${e.marca_especial===1?i`<kk-badge variant="success" pill>${t.calendario.especial}</kk-badge>`:o}
                    <kk-icon-button
                      name="pencil"
                      label=${t.acoes.editar}
                      @click=${()=>{I={id:e.id??0,nome:e.nome,cor:e.cor_chave,icone:e.icone,especial:e.marca_especial===1},c()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${t.calendario.excluirTipo}
                      @click=${()=>void Ie(e)}
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
              <kk-icon slot="prefix" name="plus"></kk-icon>${t.calendario.novoTipo}
            </kk-button>
          `:Le(I)}
    </kk-dialog>
  `}var ze={aoVoltar(){return P===null?F?(I===null?F=!1:I=null,c(),!0):!1:(P=null,c(),!0)},acoes(){if(L)return i`
      <kk-icon-button
        name="tags"
        label=${t.calendario.tipos}
        @click=${()=>{F=!0,I=null,c()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${t.calendario.novoEvento}
        @click=${()=>q(l())}
      ></kk-icon-button>
    `},conteudo(){return V(),z===null?L?i`
      ${xe()}
      ${je()}
      ${P===null?o:Pe(P)}
      ${F?Re():o}
    `:i`<div class="carregando"><kk-spinner></kk-spinner></div>`:d(z,ye)}};export{ze as telaCalendario};