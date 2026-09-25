import{_t as e,b as t,et as n,ft as r,g as i,ht as a,m as o,rt as s,st as c,tt as l,v as u,y as d}from"./index-C6owxr6H.js";import{CORES as f,ICONES as p,ULTIMO_MINUTO as m,agendaDosDias as h,carregar as ee,comoHora as g,corDoTipo as _,deHora as v,diaFinal as te,diaInicial as y,excluirEvento as b,excluirTipo as ne,iconeDoTipo as re,proximaOrdem as ie,salvarEvento as ae,salvarTipo as oe,tipoEmUso as se,tipoPadrao as x,tipoPorId as S}from"./dados-CnITsiF_.js";var ce=[`dia`,`semana`,`mes`,`ano`,`agenda`],C=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function w(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function T(e,t){let n=w(e);return n.setDate(n.getDate()+t),n}function E(e){return T(e,-((e.getDay()+6)%7))}function le(e,t){if(e===`dia`){let e=l(t);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=E(t);return{de:l(e),ate:l(T(e,6))}}if(e===`mes`){let e=new Date(t.getFullYear(),t.getMonth(),1),n=new Date(t.getFullYear(),t.getMonth()+1,0);return{de:l(e),ate:l(n)}}let n=new Date(t.getFullYear(),0,1),r=new Date(t.getFullYear(),11,31);return{de:l(n),ate:l(r)}}function D(e,t,n){let r=w(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function ue(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=E(t),n=T(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function O(e,t){let n=E(new Date(e,t,1)),r=T(E(new Date(e,t+1,0)),6),i=[];for(let e=n;e<=r;e=T(e,1))i.push({dia:l(e),numero:e.getDate(),doMes:e.getMonth()===t});return i}function de(e){let t=E(e);return Array.from({length:7},(e,n)=>{let r=T(t,n);return{dia:l(r),rotulo:C[n]??``,numero:r.getDate()}})}function fe(){return Array.from({length:17},(e,t)=>6+t)}function pe(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:O(e,n)}))}function me(e){let t=[],[n=1970,r=1,i=1]=e.de.split(`-`).map(Number);for(let a=new Date(n,r-1,i);;a=T(a,1)){let n=l(a);if(n>e.ate)break;t.push(n)}return t}function he(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}var ge=15;function _e(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+ge),1380)}}function k(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function ve(e){let t=e.map(e=>_e(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var A=[],j=[],M=`semana`,N=new Date,P=null,F=!1,I=null,L=!1,R=!1,z=null;async function B(){let e=await ee();A=e.tipos,j=e.eventos,z=null,c()}function V(){L||R||z!==null||(R=!0,(async()=>{try{await B(),L=!0}catch(e){console.error(`Calendário: a carga falhou.`,e),z=t(e)}finally{R=!1,c()}})())}function ye(){z=null,V(),c()}var H=5;function be(){let e=new Date().getFullYear(),t=new Set;for(let n=e-H;n<=e+H;n+=1)t.add(n);return t.add(N.getFullYear()),[...t].sort((e,t)=>e-t)}function U(e,t){N=new Date(e,t,1),c()}function xe(){return e`
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
        @kk-change=${e=>U(N.getFullYear(),Number(e.target.value))}
      >
        ${r.calendario.meses.map((t,n)=>e`<kk-option value=${n}>${t}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${r.calendario.ano}
        size="small"
        .value=${String(N.getFullYear())}
        @kk-change=${e=>U(Number(e.target.value),N.getMonth())}
      >
        ${be().map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${r.calendario.anterior}
        @click=${()=>{N=D(M,N,-1),c()}}
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
        @click=${()=>{N=D(M,N,1),c()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${ue(M,N)}</span>
    </div>
  `}function W(e){P={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:y(e),horaInicio:g(e.hora_inicio_min),dataFim:te(e),horaFim:g(e.hora_fim_min),descricao:e.descricao},c()}function G(e){return e.dia_inteiro===1?`${r.calendario.diaInteiro} — ${e.titulo}`:`${g(e.hora_inicio_min)} – ${g(e.hora_fim_min)} — ${e.titulo}`}function K(t){let n=_(A,t.tipo_id);return e`
    <button
      class="pastilha"
      style=${`--cor-evento:${n}`}
      title=${G(t)}
      @click=${()=>W(t)}
    >
      ${t.dia_inteiro===1?a:e`<span class="pastilha__hora">${g(t.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${t.titulo}</span>
    </button>
  `}function Se(t){let n=_(A,t.tipo_id),i=S(A,t.tipo_id);return e`
    <button class="evento" style=${`--cor-evento:${n}`} @click=${()=>W(t)}>
      <span class="evento__quando">
        ${t.dia_inteiro===1?r.calendario.diaInteiro:`${g(t.hora_inicio_min)} – ${g(t.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${re(A,t.tipo_id)}></kk-icon>${t.titulo}
      </span>
      ${i===void 0?a:e`<span class="evento__tipo">${i.nome}</span>`}
      ${t.descricao===``?a:e`<span class="evento__descricao">${t.descricao}</span>`}
    </button>
  `}function q(e,t){let n=t??480;P={id:0,titulo:``,tipoId:x(A),diaInteiro:t===void 0,dataInicio:e,horaInicio:g(n),horaFim:g(Math.min(n+60,m)),dataFim:e,descricao:``},c()}function Ce(t,n,i){let a=i.get(t.dia)??[];return e`
    <div class="mes__celula" ?data-fora=${!t.doMes} ?data-hoje=${t.dia===n}>
      <button
        class="mes__numero"
        aria-label=${r.calendario.novoEm(t.dia)}
        @click=${()=>q(t.dia)}
      >
        ${t.numero}
      </button>
      <div class="mes__eventos">${a.map(e=>K(e))}</div>
    </div>
  `}function we(){let t=l(),n=O(N.getFullYear(),N.getMonth()),r=h(j,n.map(e=>e.dia));return e`
    <div class="mes">
      ${C.map(t=>e`<span class="mes__cabecalho">${t}</span>`)}
      ${n.map(e=>Ce(e,t,r))}
    </div>
  `}var J=null,Y=!1;function Te(){Y||(Y=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`calendario`&&(J=null)}))}function Ee(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function De(e){Te();let t=`${M}:${e.map(e=>e.dia).join(`,`)}`;if(J===t)return;J=t;let n=l();if(!e.some(e=>e.dia===n))return;let r=k();r!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*r-Ee()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function X(t){let n=fe(),i=l(),o=h(j,t.map(e=>e.dia)),s=k();return De(t),e`
    <div class="grade" style=${`--colunas:${t.length}`}>
      <span class="grade__canto"></span>
      ${t.map(t=>e`
          <span class="grade__dia" ?data-hoje=${t.dia===i}>
            ${t.rotulo} ${t.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${n.map(t=>e`<span class="grade__hora">${g(t*60)}</span>`)}
      </div>

      ${t.map(t=>{let c=o.get(t.dia)??[],l=c.filter(e=>e.dia_inteiro===1),u=c.filter(e=>e.dia_inteiro===0),d=ve(u.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return e`
          <div class="grade__coluna">
            ${s===null||t.dia!==i?a:e`<span class="grade__agora" style=${`top:${s*100}%`}></span>`}

            ${n.map(n=>e`
                <button
                  class="grade__vaga"
                  aria-label=${r.calendario.novoAs(t.rotulo,g(n*60))}
                  @click=${()=>q(t.dia,n*60)}
                ></button>
              `)}

            ${l.length===0?a:e`
                  <div class="grade__inteiros">
                    ${l.map(e=>K(e))}
                  </div>
                `}

            ${u.map((t,n)=>{let r=d[n];if(r===void 0)return a;let i=100/r.colunas;return e`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${_(A,t.tipo_id)};top:${r.topo*100}%;height:${r.altura*100}%;inset-inline-start:calc(${r.coluna*i}% + 1px);width:calc(${i}% - 2px)`}
                  title=${G(t)}
                  @click=${()=>W(t)}
                >
                  <span class="grade__evento-hora">${g(t.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${t.titulo}</span>
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function Oe(){return X([{dia:l(N),rotulo:N.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:N.getDate()}])}function ke(){return X(de(N))}function Z(){let t=l(),n=pe(N.getFullYear()),i=h(j,n.flatMap(e=>e.celulas.map(e=>e.dia)));return e`
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
  `}function Ae(){let t=[...h(j,me(le(`agenda`,N))).entries()].filter(([,e])=>e.length>0);return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${r.calendario.semEventos}</p>
      </div>
    `:e`
    <div class="calendario-agenda">
      ${t.map(([t,n])=>e`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${he(t)}</span>
            ${n.map(e=>Se(e))}
          </div>
        `)}
    </div>
  `}function je(){return M===`dia`?Oe():M===`semana`?ke():M===`mes`?we():M===`ano`?Z():Ae()}function Q(e){P!==null&&(P={...P,...e})}function $(e){I!==null&&(I={...I,...e})}async function Me(e){if(!n(e.dataInicio)){o(r.calendario.dataInvalida,`warning`);return}let t=!n(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,i=+!!e.diaInteiro,a=v(e.horaInicio),c=v(e.horaFim),l=t===e.dataInicio&&c<a?a:c;try{await ae({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?r.acervo.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??x(A),data_inicio_epoch:s(e.dataInicio),hora_inicio_min:i===1?0:a,data_fim_epoch:s(t),hora_fim_min:i===1?m:l,dia_inteiro:i,descricao:e.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),o(r.calendario.eventoNaoSalvo,`danger`);return}P=null,o(r.calendario.eventoSalvo),await B()}async function Ne(e){if(await i({titulo:r.calendario.excluirEvento,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await b(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),o(r.calendario.eventoNaoExcluido,`danger`);return}P=null,o(r.calendario.eventoExcluido),await B()}}function Pe(t){return e`
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
              <kk-button variant="danger" outline @click=${()=>void Ne(t)}>
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
          @click=${()=>{P!==null&&Me(P)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function Fe(e){let t=e.nome.trim()===``?r.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?S(A,e.id):void 0;try{await oe({...n??{ordem:ie(A)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),o(r.calendario.tipoNaoSalvo,`danger`);return}I=null,await B()}async function Ie(e){if(e.id!==void 0){if(se(j,e.id)){await i({titulo:r.calendario.tipoEmUsoTitulo,texto:r.calendario.tipoEmUsoTexto,rotuloConfirmar:r.acoes.fechar});return}if(await i({titulo:r.calendario.excluirTipo,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await ne(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),o(r.calendario.tipoNaoExcluido,`danger`);return}await B()}}}function Le(t){return e`
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
          @click=${()=>{I!==null&&Fe(I)}}
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
  `}function Re(){return e`
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
                      @click=${()=>void Ie(t)}
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
          `:Le(I)}
    </kk-dialog>
  `}var ze={aoVoltar(){return P===null?F?(I===null?F=!1:I=null,c(),!0):!1:(P=null,c(),!0)},acoes(){if(L)return e`
      <kk-icon-button
        name="tags"
        label=${r.calendario.tipos}
        @click=${()=>{F=!0,I=null,c()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${r.calendario.novoEvento}
        @click=${()=>q(l())}
      ></kk-icon-button>
    `},conteudo(){return V(),z===null?L?e`
      ${xe()}
      ${je()}
      ${P===null?a:Pe(P)}
      ${F?Re():a}
    `:e`<div class="carregando"><kk-spinner></kk-spinner></div>`:d(z,ye)}};export{ze as telaCalendario};