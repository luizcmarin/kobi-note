import{$ as e,et as t,ft as n,g as r,m as i,mt as a,nt as o,ot as s,ut as c,v as l,y as u}from"./index-mkeVomMM.js";import{CORES as d,ICONES as f,ULTIMO_MINUTO as p,agendaDosDias as m,carregar as ee,comoHora as h,corDoTipo as g,deHora as _,diaFinal as te,diaInicial as ne,excluirEvento as re,excluirTipo as ie,iconeDoTipo as ae,proximaOrdem as v,salvarEvento as y,salvarTipo as b,tipoEmUso as oe,tipoPadrao as x,tipoPorId as S}from"./dados-Byw941ER.js";var se=[`dia`,`semana`,`mes`,`ano`,`agenda`],C=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function w(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function T(e,t){let n=w(e);return n.setDate(n.getDate()+t),n}function E(e){return T(e,-((e.getDay()+6)%7))}function ce(e,n){if(e===`dia`){let e=t(n);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=E(n);return{de:t(e),ate:t(T(e,6))}}if(e===`mes`){let e=new Date(n.getFullYear(),n.getMonth(),1),r=new Date(n.getFullYear(),n.getMonth()+1,0);return{de:t(e),ate:t(r)}}let r=new Date(n.getFullYear(),0,1),i=new Date(n.getFullYear(),11,31);return{de:t(r),ate:t(i)}}function D(e,t,n){let r=w(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function le(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=E(t),n=T(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function O(e,n){let r=E(new Date(e,n,1)),i=T(E(new Date(e,n+1,0)),6),a=[];for(let e=r;e<=i;e=T(e,1))a.push({dia:t(e),numero:e.getDate(),doMes:e.getMonth()===n});return a}function ue(e){let n=E(e);return Array.from({length:7},(e,r)=>{let i=T(n,r);return{dia:t(i),rotulo:C[r]??``,numero:i.getDate()}})}function de(){return Array.from({length:17},(e,t)=>6+t)}function fe(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:O(e,n)}))}function pe(e){let n=[],[r=1970,i=1,a=1]=e.de.split(`-`).map(Number);for(let o=new Date(r,i-1,a);;o=T(o,1)){let r=t(o);if(r>e.ate)break;n.push(r)}return n}function me(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}var he=15;function ge(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+he),1380)}}function k(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function _e(e){let t=e.map(e=>ge(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var A=[],j=[],M=`semana`,N=new Date,P=null,F=!1,I=null,L=!1,R=!1,z=null;async function B(){let e=await ee();A=e.tipos,j=e.eventos,z=null,s()}function V(){L||R||z!==null||(R=!0,(async()=>{try{await B(),L=!0}catch(e){console.error(`Calendário: a carga falhou.`,e),z=u(e)}finally{R=!1,s()}})())}function ve(){z=null,V(),s()}var H=5;function ye(){let e=new Date().getFullYear(),t=new Set;for(let n=e-H;n<=e+H;n+=1)t.add(n);return t.add(N.getFullYear()),[...t].sort((e,t)=>e-t)}function U(e,t){N=new Date(e,t,1),s()}function be(){return a`
    <div class="chips" role="group" aria-label=${c.calendario.vista}>
      ${se.map(e=>a`
          <button
            class="chip"
            ?data-ativo=${M===e}
            @click=${()=>{M=e,s()}}
          >
            ${c.calendario.vistas[e]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${c.calendario.mes}
        size="small"
        .value=${String(N.getMonth())}
        @kk-change=${e=>U(N.getFullYear(),Number(e.target.value))}
      >
        ${c.calendario.meses.map((e,t)=>a`<kk-option value=${t}>${e}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${c.calendario.ano}
        size="small"
        .value=${String(N.getFullYear())}
        @kk-change=${e=>U(Number(e.target.value),N.getMonth())}
      >
        ${ye().map(e=>a`<kk-option value=${e}>${e}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${c.calendario.anterior}
        @click=${()=>{N=D(M,N,-1),s()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{N=new Date,s()}}
      >
        ${c.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${c.calendario.proximo}
        @click=${()=>{N=D(M,N,1),s()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${le(M,N)}</span>
    </div>
  `}function W(e){P={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:ne(e),horaInicio:h(e.hora_inicio_min),dataFim:te(e),horaFim:h(e.hora_fim_min),descricao:e.descricao},s()}function G(e){return e.dia_inteiro===1?`${c.calendario.diaInteiro} — ${e.titulo}`:`${h(e.hora_inicio_min)} – ${h(e.hora_fim_min)} — ${e.titulo}`}function K(e){let t=g(A,e.tipo_id);return a`
    <button
      class="pastilha"
      style=${`--cor-evento:${t}`}
      title=${G(e)}
      @click=${()=>W(e)}
    >
      ${e.dia_inteiro===1?n:a`<span class="pastilha__hora">${h(e.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${e.titulo}</span>
    </button>
  `}function xe(e){let t=g(A,e.tipo_id),r=S(A,e.tipo_id);return a`
    <button class="evento" style=${`--cor-evento:${t}`} @click=${()=>W(e)}>
      <span class="evento__quando">
        ${e.dia_inteiro===1?c.calendario.diaInteiro:`${h(e.hora_inicio_min)} – ${h(e.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${ae(A,e.tipo_id)}></kk-icon>${e.titulo}
      </span>
      ${r===void 0?n:a`<span class="evento__tipo">${r.nome}</span>`}
      ${e.descricao===``?n:a`<span class="evento__descricao">${e.descricao}</span>`}
    </button>
  `}function q(e,t){let n=t??480;P={id:0,titulo:``,tipoId:x(A),diaInteiro:t===void 0,dataInicio:e,horaInicio:h(n),horaFim:h(Math.min(n+60,p)),dataFim:e,descricao:``},s()}function J(e,t,n){let r=n.get(e.dia)??[];return a`
    <div class="mes__celula" ?data-fora=${!e.doMes} ?data-hoje=${e.dia===t}>
      <button
        class="mes__numero"
        aria-label=${c.calendario.novoEm(e.dia)}
        @click=${()=>q(e.dia)}
      >
        ${e.numero}
      </button>
      <div class="mes__eventos">${r.map(e=>K(e))}</div>
    </div>
  `}function Se(){let e=t(),n=O(N.getFullYear(),N.getMonth()),r=m(j,n.map(e=>e.dia));return a`
    <div class="mes">
      ${C.map(e=>a`<span class="mes__cabecalho">${e}</span>`)}
      ${n.map(t=>J(t,e,r))}
    </div>
  `}var Y=null,X=!1;function Ce(){X||(X=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`calendario`&&(Y=null)}))}function we(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function Te(e){Ce();let n=`${M}:${e.map(e=>e.dia).join(`,`)}`;if(Y===n)return;Y=n;let r=t();if(!e.some(e=>e.dia===r))return;let i=k();i!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*i-we()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function Z(e){let r=de(),i=t(),o=m(j,e.map(e=>e.dia)),s=k();return Te(e),a`
    <div class="grade" style=${`--colunas:${e.length}`}>
      <span class="grade__canto"></span>
      ${e.map(e=>a`
          <span class="grade__dia" ?data-hoje=${e.dia===i}>
            ${e.rotulo} ${e.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${r.map(e=>a`<span class="grade__hora">${h(e*60)}</span>`)}
      </div>

      ${e.map(e=>{let t=o.get(e.dia)??[],l=t.filter(e=>e.dia_inteiro===1),u=t.filter(e=>e.dia_inteiro===0),d=_e(u.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return a`
          <div class="grade__coluna">
            ${s===null||e.dia!==i?n:a`<span class="grade__agora" style=${`top:${s*100}%`}></span>`}

            ${r.map(t=>a`
                <button
                  class="grade__vaga"
                  aria-label=${c.calendario.novoAs(e.rotulo,h(t*60))}
                  @click=${()=>q(e.dia,t*60)}
                ></button>
              `)}

            ${l.length===0?n:a`
                  <div class="grade__inteiros">
                    ${l.map(e=>K(e))}
                  </div>
                `}

            ${u.map((e,t)=>{let r=d[t];if(r===void 0)return n;let i=100/r.colunas;return a`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${g(A,e.tipo_id)};top:${r.topo*100}%;height:${r.altura*100}%;inset-inline-start:calc(${r.coluna*i}% + 1px);width:calc(${i}% - 2px)`}
                  title=${G(e)}
                  @click=${()=>W(e)}
                >
                  <span class="grade__evento-hora">${h(e.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${e.titulo}</span>
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function Ee(){return Z([{dia:t(N),rotulo:N.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:N.getDate()}])}function De(){return Z(ue(N))}function Oe(){let e=t(),n=fe(N.getFullYear()),r=m(j,n.flatMap(e=>e.celulas.map(e=>e.dia)));return a`
    <div class="ano">
      ${n.map(t=>a`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{N=new Date(N.getFullYear(),t.mes,1),M=`mes`,s()}}
            >
              ${t.rotulo}
            </button>

            <div class="ano__grade">
              ${C.map(e=>a`<span class="ano__cabecalho">${e.slice(0,1)}</span>`)}
              ${t.celulas.map(t=>{let n=(r.get(t.dia)??[]).length;return a`
                  <button
                    class="ano__dia"
                    ?data-fora=${!t.doMes}
                    ?data-hoje=${t.dia===e}
                    ?data-com-evento=${n>0}
                    title=${n===0?``:c.calendario.eventos(n)}
                    @click=${()=>{N=new Date(o(t.dia)),M=`dia`,s()}}
                  >
                    ${t.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function ke(){let e=[...m(j,pe(ce(`agenda`,N))).entries()].filter(([,e])=>e.length>0);return e.length===0?a`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${c.calendario.semEventos}</p>
      </div>
    `:a`
    <div class="calendario-agenda">
      ${e.map(([e,t])=>a`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${me(e)}</span>
            ${t.map(e=>xe(e))}
          </div>
        `)}
    </div>
  `}function Ae(){return M===`dia`?Ee():M===`semana`?De():M===`mes`?Se():M===`ano`?Oe():ke()}function Q(e){P!==null&&(P={...P,...e})}function $(e){I!==null&&(I={...I,...e})}async function je(t){if(!e(t.dataInicio)){i(c.calendario.dataInvalida,`warning`);return}let n=!e(t.dataFim)||t.dataFim<t.dataInicio?t.dataInicio:t.dataFim,r=+!!t.diaInteiro,a=_(t.horaInicio),s=_(t.horaFim),l=n===t.dataInicio&&s<a?a:s;try{await y({...t.id>0?{id:t.id}:{},titulo:t.titulo.trim()===``?c.acervo.semTitulo:t.titulo.trim(),tipo_id:t.tipoId??x(A),data_inicio_epoch:o(t.dataInicio),hora_inicio_min:r===1?0:a,data_fim_epoch:o(n),hora_fim_min:r===1?p:l,dia_inteiro:r,descricao:t.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),i(c.calendario.eventoNaoSalvo,`danger`);return}P=null,i(c.calendario.eventoSalvo),await B()}async function Me(e){if(await r({titulo:c.calendario.excluirEvento,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})){try{await re(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),i(c.calendario.eventoNaoExcluido,`danger`);return}P=null,i(c.calendario.eventoExcluido),await B()}}function Ne(e){return a`
    <kk-dialog
      open
      label=${e.id>0?c.calendario.editarEvento:c.calendario.novoEvento}
      @kk-after-hide=${()=>{P=null,s()}}
    >
      <div class="formulario">
        <kk-input
          label=${c.calendario.titulo}
          placeholder=${c.calendario.tituloPlaceholder}
          .value=${e.titulo}
          @kk-input=${e=>{Q({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${c.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${A.map(t=>a`
                <button
                  class="tipo-chip"
                  ?data-ativo=${e.tipoId===t.id}
                  @click=${()=>{Q({tipoId:t.id??null}),s()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${d[t.cor_chave]??``}`}
                  ></span>
                  ${t.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${e.diaInteiro}
          @kk-change=${e=>{Q({diaInteiro:e.target.checked}),s()}}
        >
          ${c.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${c.calendario.dataInicio}
            .value=${e.dataInicio}
            @kk-change=${t=>{let n=t.target.value,r=P?.dataFim??e.dataFim;Q({dataInicio:n,dataFim:r<n?n:r}),s()}}
          ></kk-input>
          ${e.diaInteiro?n:a`
                <kk-input
                  type="time"
                  label=${c.calendario.horaInicio}
                  .value=${e.horaInicio}
                  @kk-change=${e=>{Q({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${c.calendario.dataFim}
            min=${e.dataInicio}
            .value=${e.dataFim}
            @kk-change=${e=>{Q({dataFim:e.target.value})}}
          ></kk-input>
          ${e.diaInteiro?n:a`
                <kk-input
                  type="time"
                  label=${c.calendario.horaFim}
                  .value=${e.horaFim}
                  @kk-change=${e=>{Q({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${c.calendario.descricao}
          placeholder=${c.calendario.descricaoPlaceholder}
          .value=${e.descricao}
          @kk-input=${e=>{Q({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${e.id>0?a`
              <kk-button variant="danger" outline @click=${()=>void Me(e)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${c.acoes.excluir}
              </kk-button>
            `:n}
        <kk-button
          @click=${()=>{P=null,s()}}
        >
          ${c.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{P!==null&&je(P)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function Pe(e){let t=e.nome.trim()===``?c.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?S(A,e.id):void 0;try{await b({...n??{ordem:v(A)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),i(c.calendario.tipoNaoSalvo,`danger`);return}I=null,await B()}async function Fe(e){if(e.id!==void 0){if(oe(j,e.id)){await r({titulo:c.calendario.tipoEmUsoTitulo,texto:c.calendario.tipoEmUsoTexto,rotuloConfirmar:c.acoes.fechar});return}if(await r({titulo:c.calendario.excluirTipo,texto:c.acervo.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})){try{await ie(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),i(c.calendario.tipoNaoExcluido,`danger`);return}await B()}}}function Ie(e){return a`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${c.calendario.tipoNome}
        .value=${e.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${c.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(d).map(([t,n])=>a`
              <button
                class="cor-chip"
                ?data-ativo=${e.cor===t}
                style=${`background:${n}`}
                aria-label=${t}
                @click=${()=>{$({cor:t}),s()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${c.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(f).map(([t,n])=>a`
              <button
                class="tipo-chip"
                ?data-ativo=${e.icone===t}
                aria-label=${t}
                @click=${()=>{$({icone:t}),s()}}
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
        ${c.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{I!==null&&Pe(I)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{I=null,s()}}
        >
          ${c.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Le(){return a`
    <kk-dialog
      open
      label=${c.calendario.tipos}
      @kk-after-hide=${()=>{F=!1,I=null,s()}}
    >
      ${I===null?a`
            <div class="tipos-lista">
              ${A.map(e=>a`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${d[e.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${f[e.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${e.nome}</span>
                    ${e.marca_especial===1?a`<kk-badge variant="success" pill>${c.calendario.especial}</kk-badge>`:n}
                    <kk-icon-button
                      name="pencil"
                      label=${c.acoes.editar}
                      @click=${()=>{I={id:e.id??0,nome:e.nome,cor:e.cor_chave,icone:e.icone,especial:e.marca_especial===1},s()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${c.calendario.excluirTipo}
                      @click=${()=>void Fe(e)}
                    ></kk-icon-button>
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{I={id:0,nome:``,cor:`primary`,icone:`evento`,especial:!1},s()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${c.calendario.novoTipo}
            </kk-button>
          `:Ie(I)}
    </kk-dialog>
  `}var Re={aoVoltar(){return P===null?F?(I===null?F=!1:I=null,s(),!0):!1:(P=null,s(),!0)},acoes(){if(L)return a`
      <kk-icon-button
        name="tags"
        label=${c.calendario.tipos}
        @click=${()=>{F=!0,I=null,s()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${c.calendario.novoEvento}
        @click=${()=>q(t())}
      ></kk-icon-button>
    `},conteudo(){return V(),z===null?L?a`
      ${be()}
      ${Ae()}
      ${P===null?n:Ne(P)}
      ${F?Le():n}
    `:a`<div class="carregando"><kk-spinner></kk-spinner></div>`:l(z,ve)}};export{Re as telaCalendario};