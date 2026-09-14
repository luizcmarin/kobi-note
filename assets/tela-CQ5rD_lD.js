import{Q as e,X as t,Y as n,at as r,g as i,lt as a,m as o,st as s,tt as c,v as l,y as u}from"./index-D0n52eAb.js";import{CORES as d,ICONES as f,ULTIMO_MINUTO as p,agendaDosDias as m,carregar as ee,comoHora as h,corDoTipo as g,deHora as _,diaFinal as v,diaInicial as te,excluirEvento as ne,excluirTipo as re,iconeDoTipo as ie,proximaOrdem as y,salvarEvento as b,salvarTipo as ae,tipoEmUso as oe,tipoPadrao as x,tipoPorId as S}from"./dados-PeJuDTqT.js";var se=[`dia`,`semana`,`mes`,`ano`,`agenda`],C=[`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`,`Dom`];function w(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function T(e,t){let n=w(e);return n.setDate(n.getDate()+t),n}function E(e){return T(e,-((e.getDay()+6)%7))}function ce(e,n){if(e===`dia`){let e=t(n);return{de:e,ate:e}}if(e===`semana`||e===`agenda`){let e=E(n);return{de:t(e),ate:t(T(e,6))}}if(e===`mes`){let e=new Date(n.getFullYear(),n.getMonth(),1),r=new Date(n.getFullYear(),n.getMonth()+1,0);return{de:t(e),ate:t(r)}}let r=new Date(n.getFullYear(),0,1),i=new Date(n.getFullYear(),11,31);return{de:t(r),ate:t(i)}}function D(e,t,n){let r=w(t);return e===`dia`?r.setDate(r.getDate()+n):e===`semana`||e===`agenda`?r.setDate(r.getDate()+n*7):e===`mes`?r.setMonth(r.getMonth()+n,1):r.setFullYear(r.getFullYear()+n,0,1),r}function le(e,t){if(e===`dia`)return t.toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(e===`semana`||e===`agenda`){let e=E(t),n=T(e,6),r={day:`numeric`,month:`short`};return`${e.toLocaleDateString(`pt-BR`,r)} – ${n.toLocaleDateString(`pt-BR`,r)} de ${n.getFullYear()}`}return e===`mes`?t.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}):String(t.getFullYear())}function O(e,n){let r=E(new Date(e,n,1)),i=T(E(new Date(e,n+1,0)),6),a=[];for(let e=r;e<=i;e=T(e,1))a.push({dia:t(e),numero:e.getDate(),doMes:e.getMonth()===n});return a}function k(e){let n=E(e);return Array.from({length:7},(e,r)=>{let i=T(n,r);return{dia:t(i),rotulo:C[r]??``,numero:i.getDate()}})}function ue(){return Array.from({length:17},(e,t)=>6+t)}function de(e){return Array.from({length:12},(t,n)=>({mes:n,rotulo:new Date(e,n,1).toLocaleDateString(`pt-BR`,{month:`long`}),celulas:O(e,n)}))}function fe(e){let n=[],[r=1970,i=1,a=1]=e.de.split(`-`).map(Number);for(let o=new Date(r,i-1,a);;o=T(o,1)){let r=t(o);if(r>e.ate)break;n.push(r)}return n}function pe(e){let[t=1970,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`pt-BR`,{weekday:`long`,day:`numeric`,month:`long`})}var me=15;function he(e,t){let n=Math.min(Math.max(e,360),1365);return{de:n,ate:Math.min(Math.max(t,n+me),1380)}}function A(e=new Date){let t=e.getHours()*60+e.getMinutes();return t<360||t>1380?null:(t-360)/1020}function ge(e){let t=e.map(e=>he(e.inicioMin,e.fimMin)),n=1020,r=t.map((e,t)=>({...e,indice:t})).sort((e,t)=>e.de-t.de||e.ate-t.ate||e.indice-t.indice),i=Array(e.length).fill(0),a=Array(e.length).fill(1),o=[],s=[],c=-1/0,l=()=>{for(let e of o)a[e]=s.length;o=[],s=[],c=-1/0};for(let e of r){e.de>=c&&l();let t=s.findIndex(t=>t<=e.de);t===-1?t=s.push(e.ate)-1:s[t]=e.ate,i[e.indice]=t,o.push(e.indice),c=Math.max(c,e.ate)}return l(),t.map((e,t)=>({topo:(e.de-360)/n,altura:(e.ate-e.de)/n,coluna:i[t]??0,colunas:a[t]??1}))}var j=[],M=[],N=`semana`,P=new Date,F=null,I=!1,L=null,R=!1,z=!1,B=null;async function V(){let e=await ee();j=e.tipos,M=e.eventos,B=null,c()}function H(){R||z||B!==null||(z=!0,(async()=>{try{await V(),R=!0}catch(e){console.error(`Calendário: a carga falhou.`,e),B=u(e)}finally{z=!1,c()}})())}function _e(){B=null,H(),c()}var U=5;function ve(){let e=new Date().getFullYear(),t=new Set;for(let n=e-U;n<=e+U;n+=1)t.add(n);return t.add(P.getFullYear()),[...t].sort((e,t)=>e-t)}function W(e,t){P=new Date(e,t,1),c()}function ye(){return a`
    <div class="chips" role="group" aria-label=${r.calendario.vista}>
      ${se.map(e=>a`
          <button
            class="chip"
            ?data-ativo=${N===e}
            @click=${()=>{N=e,c()}}
          >
            ${r.calendario.vistas[e]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${r.calendario.mes}
        size="small"
        .value=${String(P.getMonth())}
        @kk-change=${e=>W(P.getFullYear(),Number(e.target.value))}
      >
        ${r.calendario.meses.map((e,t)=>a`<kk-option value=${t}>${e}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${r.calendario.ano}
        size="small"
        .value=${String(P.getFullYear())}
        @kk-change=${e=>W(Number(e.target.value),P.getMonth())}
      >
        ${ve().map(e=>a`<kk-option value=${e}>${e}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${r.calendario.anterior}
        @click=${()=>{P=D(N,P,-1),c()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{P=new Date,c()}}
      >
        ${r.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${r.calendario.proximo}
        @click=${()=>{P=D(N,P,1),c()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${le(N,P)}</span>
    </div>
  `}function G(e){F={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:te(e),horaInicio:h(e.hora_inicio_min),dataFim:v(e),horaFim:h(e.hora_fim_min),descricao:e.descricao},c()}function K(e){return e.dia_inteiro===1?`${r.calendario.diaInteiro} — ${e.titulo}`:`${h(e.hora_inicio_min)} – ${h(e.hora_fim_min)} — ${e.titulo}`}function q(e){let t=g(j,e.tipo_id);return a`
    <button
      class="pastilha"
      style=${`--cor-evento:${t}`}
      title=${K(e)}
      @click=${()=>G(e)}
    >
      ${e.dia_inteiro===1?s:a`<span class="pastilha__hora">${h(e.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${e.titulo}</span>
    </button>
  `}function be(e){let t=g(j,e.tipo_id),n=S(j,e.tipo_id);return a`
    <button class="evento" style=${`--cor-evento:${t}`} @click=${()=>G(e)}>
      <span class="evento__quando">
        ${e.dia_inteiro===1?r.calendario.diaInteiro:`${h(e.hora_inicio_min)} – ${h(e.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${ie(j,e.tipo_id)}></kk-icon>${e.titulo}
      </span>
      ${n===void 0?s:a`<span class="evento__tipo">${n.nome}</span>`}
      ${e.descricao===``?s:a`<span class="evento__descricao">${e.descricao}</span>`}
    </button>
  `}function J(e,t){let n=t??480;F={id:0,titulo:``,tipoId:x(j),diaInteiro:t===void 0,dataInicio:e,horaInicio:h(n),horaFim:h(Math.min(n+60,p)),dataFim:e,descricao:``},c()}function xe(e,t,n){let i=n.get(e.dia)??[];return a`
    <div class="mes__celula" ?data-fora=${!e.doMes} ?data-hoje=${e.dia===t}>
      <button
        class="mes__numero"
        aria-label=${r.calendario.novoEm(e.dia)}
        @click=${()=>J(e.dia)}
      >
        ${e.numero}
      </button>
      <div class="mes__eventos">${i.map(e=>q(e))}</div>
    </div>
  `}function Se(){let e=t(),n=O(P.getFullYear(),P.getMonth()),r=m(M,n.map(e=>e.dia));return a`
    <div class="mes">
      ${C.map(e=>a`<span class="mes__cabecalho">${e}</span>`)}
      ${n.map(t=>xe(t,e,r))}
    </div>
  `}var Y=null,X=!1;function Ce(){X||(X=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`calendario`&&(Y=null)}))}function we(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function Te(e){Ce();let n=`${N}:${e.map(e=>e.dia).join(`,`)}`;if(Y===n)return;Y=n;let r=t();if(!e.some(e=>e.dia===r))return;let i=A();i!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*i-we()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function Z(e){let n=ue(),i=t(),o=m(M,e.map(e=>e.dia)),c=A();return Te(e),a`
    <div class="grade" style=${`--colunas:${e.length}`}>
      <span class="grade__canto"></span>
      ${e.map(e=>a`
          <span class="grade__dia" ?data-hoje=${e.dia===i}>
            ${e.rotulo} ${e.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${n.map(e=>a`<span class="grade__hora">${h(e*60)}</span>`)}
      </div>

      ${e.map(e=>{let t=o.get(e.dia)??[],l=t.filter(e=>e.dia_inteiro===1),u=t.filter(e=>e.dia_inteiro===0),d=ge(u.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return a`
          <div class="grade__coluna">
            ${c===null||e.dia!==i?s:a`<span class="grade__agora" style=${`top:${c*100}%`}></span>`}

            ${n.map(t=>a`
                <button
                  class="grade__vaga"
                  aria-label=${r.calendario.novoAs(e.rotulo,h(t*60))}
                  @click=${()=>J(e.dia,t*60)}
                ></button>
              `)}

            ${l.length===0?s:a`
                  <div class="grade__inteiros">
                    ${l.map(e=>q(e))}
                  </div>
                `}

            ${u.map((e,t)=>{let n=d[t];if(n===void 0)return s;let r=100/n.colunas;return a`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${g(j,e.tipo_id)};top:${n.topo*100}%;height:${n.altura*100}%;inset-inline-start:calc(${n.coluna*r}% + 1px);width:calc(${r}% - 2px)`}
                  title=${K(e)}
                  @click=${()=>G(e)}
                >
                  <span class="grade__evento-hora">${h(e.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${e.titulo}</span>
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function Ee(){return Z([{dia:t(P),rotulo:P.toLocaleDateString(`pt-BR`,{weekday:`short`}),numero:P.getDate()}])}function De(){return Z(k(P))}function Oe(){let n=t(),i=de(P.getFullYear()),o=m(M,i.flatMap(e=>e.celulas.map(e=>e.dia)));return a`
    <div class="ano">
      ${i.map(t=>a`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{P=new Date(P.getFullYear(),t.mes,1),N=`mes`,c()}}
            >
              ${t.rotulo}
            </button>

            <div class="ano__grade">
              ${C.map(e=>a`<span class="ano__cabecalho">${e.slice(0,1)}</span>`)}
              ${t.celulas.map(t=>{let i=(o.get(t.dia)??[]).length;return a`
                  <button
                    class="ano__dia"
                    ?data-fora=${!t.doMes}
                    ?data-hoje=${t.dia===n}
                    ?data-com-evento=${i>0}
                    title=${i===0?``:r.calendario.eventos(i)}
                    @click=${()=>{P=new Date(e(t.dia)),N=`dia`,c()}}
                  >
                    ${t.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function ke(){let e=[...m(M,fe(ce(`agenda`,P))).entries()].filter(([,e])=>e.length>0);return e.length===0?a`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${r.calendario.semEventos}</p>
      </div>
    `:a`
    <div class="calendario-agenda">
      ${e.map(([e,t])=>a`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${pe(e)}</span>
            ${t.map(e=>be(e))}
          </div>
        `)}
    </div>
  `}function Ae(){return N===`dia`?Ee():N===`semana`?De():N===`mes`?Se():N===`ano`?Oe():ke()}function Q(e){F!==null&&(F={...F,...e})}function $(e){L!==null&&(L={...L,...e})}async function je(t){if(!n(t.dataInicio)){o(r.calendario.dataInvalida,`warning`);return}let i=!n(t.dataFim)||t.dataFim<t.dataInicio?t.dataInicio:t.dataFim,a=+!!t.diaInteiro,s=_(t.horaInicio),c=_(t.horaFim),l=i===t.dataInicio&&c<s?s:c;try{await b({...t.id>0?{id:t.id}:{},titulo:t.titulo.trim()===``?r.acervo.semTitulo:t.titulo.trim(),tipo_id:t.tipoId??x(j),data_inicio_epoch:e(t.dataInicio),hora_inicio_min:a===1?0:s,data_fim_epoch:e(i),hora_fim_min:a===1?p:l,dia_inteiro:a,descricao:t.descricao.trim()})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),o(r.calendario.eventoNaoSalvo,`danger`);return}F=null,o(r.calendario.eventoSalvo),await V()}async function Me(e){if(await i({titulo:r.calendario.excluirEvento,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await ne(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),o(r.calendario.eventoNaoExcluido,`danger`);return}F=null,o(r.calendario.eventoExcluido),await V()}}function Ne(e){return a`
    <kk-dialog
      open
      label=${e.id>0?r.calendario.editarEvento:r.calendario.novoEvento}
      @kk-after-hide=${()=>{F=null,c()}}
    >
      <div class="formulario">
        <kk-input
          label=${r.calendario.titulo}
          placeholder=${r.calendario.tituloPlaceholder}
          .value=${e.titulo}
          @kk-input=${e=>{Q({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${r.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${j.map(t=>a`
                <button
                  class="tipo-chip"
                  ?data-ativo=${e.tipoId===t.id}
                  @click=${()=>{Q({tipoId:t.id??null}),c()}}
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
          @kk-change=${e=>{Q({diaInteiro:e.target.checked}),c()}}
        >
          ${r.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${r.calendario.dataInicio}
            .value=${e.dataInicio}
            @kk-change=${t=>{let n=t.target.value,r=F?.dataFim??e.dataFim;Q({dataInicio:n,dataFim:r<n?n:r}),c()}}
          ></kk-input>
          ${e.diaInteiro?s:a`
                <kk-input
                  type="time"
                  label=${r.calendario.horaInicio}
                  .value=${e.horaInicio}
                  @kk-change=${e=>{Q({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${r.calendario.dataFim}
            min=${e.dataInicio}
            .value=${e.dataFim}
            @kk-change=${e=>{Q({dataFim:e.target.value})}}
          ></kk-input>
          ${e.diaInteiro?s:a`
                <kk-input
                  type="time"
                  label=${r.calendario.horaFim}
                  .value=${e.horaFim}
                  @kk-change=${e=>{Q({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${r.calendario.descricao}
          placeholder=${r.calendario.descricaoPlaceholder}
          .value=${e.descricao}
          @kk-input=${e=>{Q({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${e.id>0?a`
              <kk-button variant="danger" outline @click=${()=>void Me(e)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${r.acoes.excluir}
              </kk-button>
            `:s}
        <kk-button
          @click=${()=>{F=null,c()}}
        >
          ${r.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{F!==null&&je(F)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function Pe(e){let t=e.nome.trim()===``?r.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?S(j,e.id):void 0;try{await ae({...n??{ordem:y(j)},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone,marca_especial:+!!e.especial})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),o(r.calendario.tipoNaoSalvo,`danger`);return}L=null,await V()}async function Fe(e){if(e.id!==void 0){if(oe(M,e.id)){await i({titulo:r.calendario.tipoEmUsoTitulo,texto:r.calendario.tipoEmUsoTexto,rotuloConfirmar:r.acoes.fechar});return}if(await i({titulo:r.calendario.excluirTipo,texto:r.acervo.excluirTexto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await re(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),o(r.calendario.tipoNaoExcluido,`danger`);return}await V()}}}function Ie(e){return a`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${r.calendario.tipoNome}
        .value=${e.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${r.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(d).map(([t,n])=>a`
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
        <span class="formulario__rotulo">${r.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(f).map(([t,n])=>a`
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
        ${r.calendario.marcaEspecial}
      </kk-switch>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{L!==null&&Pe(L)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${r.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{L=null,c()}}
        >
          ${r.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function Le(){return a`
    <kk-dialog
      open
      label=${r.calendario.tipos}
      @kk-after-hide=${()=>{I=!1,L=null,c()}}
    >
      ${L===null?a`
            <div class="tipos-lista">
              ${j.map(e=>a`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${d[e.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${f[e.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${e.nome}</span>
                    ${e.marca_especial===1?a`<kk-badge variant="success" pill>${r.calendario.especial}</kk-badge>`:s}
                    <kk-icon-button
                      name="pencil"
                      label=${r.acoes.editar}
                      @click=${()=>{L={id:e.id??0,nome:e.nome,cor:e.cor_chave,icone:e.icone,especial:e.marca_especial===1},c()}}
                    ></kk-icon-button>
                    <kk-icon-button
                      name="trash"
                      label=${r.calendario.excluirTipo}
                      @click=${()=>void Fe(e)}
                    ></kk-icon-button>
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{L={id:0,nome:``,cor:`primary`,icone:`evento`,especial:!1},c()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${r.calendario.novoTipo}
            </kk-button>
          `:Ie(L)}
    </kk-dialog>
  `}var Re={aoVoltar(){return F===null?I?(L===null?I=!1:L=null,c(),!0):!1:(F=null,c(),!0)},acoes(){if(R)return a`
      <kk-icon-button
        name="tags"
        label=${r.calendario.tipos}
        @click=${()=>{I=!0,L=null,c()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${r.calendario.novoEvento}
        @click=${()=>J(t())}
      ></kk-icon-button>
    `},conteudo(){return H(),B===null?R?a`
      ${ye()}
      ${Ae()}
      ${F===null?s:Ne(F)}
      ${I?Le():s}
    `:a`<div class="carregando"><kk-spinner></kk-spinner></div>`:l(B,_e)}};export{Re as telaCalendario};