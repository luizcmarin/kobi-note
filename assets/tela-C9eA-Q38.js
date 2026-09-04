import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{i as r,o as i}from"./data-DRe9t3tD.js";import{D as a,E as o}from"./index-QyzyfOkc.js";import{salvarMeta as s}from"./dados-CFGJlYWv.js";var c=4.348,l=[{chave:`publicador`,nome:`Publicador`,horasMes:0,resumo:`Sem cota de horas — o que se relata é a participação.`},{chave:`auxiliar`,nome:`Pioneiro auxiliar`,horasMes:30,resumo:`Um mês por vez, ao lado do trabalho ou do estudo.`},{chave:`regular`,nome:`Pioneiro regular`,horasMes:50,resumo:`O ano de serviço inteiro, como rotina de vida.`},{chave:`especial`,nome:`Pioneiro especial`,horasMes:100,resumo:`Designação de tempo integral, sustentada pela organização.`}];function u(e){return l.find(t=>t.chave===e)??l[0]}var d=[`Dom`,`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`];function f(e){let t=Math.max(1,e.meses),n=Math.max(0,e.totalHoras),r=e.dias.length,i=n/t,a=i/c,o=r*c,s=r===0?0:a/r;return{porMes:i,porSemana:a,porAno:i*12,porSaida:s,saidasPorMes:o,saidasTotais:Math.round(o*t),inviavel:s>10}}function p(e){if(!Number.isFinite(e)||e<=0)return`0 min`;let t=Math.round(e*60),n=Math.floor(t/60),r=t%60;return n===0?`${r} min`:r===0?`${n} h`:`${n} h ${r} min`}function m(e,t,n){let r=new Date(e,t,1),i=new Date(e,t+1,0).getDate(),a=r.getDay(),o=new Set(n),s=[];for(let n=0;n<42;n++){let r=n-a+1,c=r>=1&&r<=i;s.push({dia:c?r:0,fora:!c,deServico:c&&o.has(new Date(e,t,r).getDay())})}return s}function h(e,t){let n=new Date(e,t,1).toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`});return n.charAt(0).toUpperCase()+n.slice(1)}function g(e,t,n){return m(e,t,n).filter(e=>e.deServico).length}function _(e,t,n=new Date){let a=new Date(n.getFullYear(),n.getMonth()+Math.max(1,e.meses),0);return{titulo:t,item:`min_horas`,ativo_nome:``,data_meta:n.getTime(),prazo_final:i(r(a)),progresso_atual:0,progresso_alvo:Math.round(e.totalHoras),esta_concluida:0}}var v=[0,3],y=`regular`,b=600,x=12,S=[...v],C=0,w=!1,T=!1;function E(){return{totalHoras:b,meses:x,dias:S}}function D(e){y=e;let t=u(e).horasMes;t>0&&(b=t*x),T=!1,o()}function O(e){let t=u(y).horasMes;x=e,t>0&&(b=t*e),T=!1,o()}function k(e){S=S.includes(e)?S.filter(t=>t!==e):[...S,e].sort(),T=!1,o()}function A(t,n,r,i,a,o,s){return e`
    <div class="servico__controle">
      <label class="servico__rotulo">
        <span>${t}</span>
        <strong>${n}</strong>
      </label>
      <input
        type="range"
        min=${r}
        max=${i}
        step=${a}
        .value=${String(o)}
        @input=${e=>s(Number(e.target.value))}
      />
    </div>
  `}function j(){let t=u(y);return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${n.servico.modalidade}</h2>
      <div class="servico__modalidades">
        ${l.map(t=>e`
            <button
              class="servico__modalidade ${t.chave===y?`servico__modalidade--ativa`:``}"
              @click=${()=>D(t.chave)}
            >
              <strong>${t.nome}</strong>
              <span>${t.horasMes===0?n.servico.semCota:n.servico.horasMes(t.horasMes)}</span>
            </button>
          `)}
      </div>
      <p class="servico__nota">${t.resumo}</p>
    </section>
  `}function M(){return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${n.servico.diasTitulo}</h2>
      <div class="servico__dias">
        ${d.map((t,n)=>e`
            <button
              class="servico__dia ${S.includes(n)?`servico__dia--ativo`:``}"
              aria-pressed=${S.includes(n)}
              @click=${()=>k(n)}
            >${t}</button>
          `)}
      </div>
    </section>
  `}function N(){let r=f(E()),i=(t,n,r=!1)=>e`
    <div class="servico__linha ${r?`servico__linha--destaque`:``}">
      <span>${t}</span>
      <strong>${n}</strong>
    </div>
  `;return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${n.servico.gradeTitulo}</h2>

      ${S.length===0?e`<kk-alert variant="warning" open>${n.servico.semDias}</kk-alert>`:i(n.servico.porSaida,p(r.porSaida),!0)}
      ${i(n.servico.porSemana,p(r.porSemana))}
      ${i(n.servico.porMes,p(r.porMes))}
      ${i(n.servico.porAno,p(r.porAno))}
      ${i(n.servico.saidas,n.servico.saidasValor(r.saidasTotais))}

      ${r.inviavel?e`<kk-alert variant="danger" open>${n.servico.inviavel}</kk-alert>`:t}
    </section>
  `}function P(){let r=f(E()),i=new Date,a=new Date(i.getFullYear(),i.getMonth()+C,1),s=a.getFullYear(),c=a.getMonth(),l=g(s,c,S),u=l===0?0:r.porMes/l;return e`
    <section class="servico__bloco">
      <div class="servico__mesbarra">
        <kk-icon-button
          name="chevron-left"
          label=${n.servico.mesAnterior}
          ?disabled=${C===0}
          @click=${()=>{C=Math.max(0,C-1),o()}}
        ></kk-icon-button>
        <strong>${h(s,c)}</strong>
        <kk-icon-button
          name="chevron-right"
          label=${n.servico.mesSeguinte}
          ?disabled=${C>=x-1}
          @click=${()=>{C=Math.min(x-1,C+1),o()}}
        ></kk-icon-button>
      </div>

      <div class="servico__grade">
        ${d.map(t=>e`<span class="servico__cabeca">${t}</span>`)}
        ${m(s,c,S).map(n=>e`
            <span
              class="servico__cela ${n.fora?`servico__cela--fora`:``} ${n.deServico?`servico__cela--servico`:``}"
            >
              ${n.fora?``:n.dia}
              ${n.deServico?e`<small>${p(u)}</small>`:t}
            </span>
          `)}
      </div>

      <p class="servico__nota">
        ${n.servico.resumoDoMes(l,p(r.porMes))}
      </p>
    </section>
  `}function F(){w||(w=!0,o(),(async()=>{try{await s(_(E(),n.servico.tituloDaMeta(u(y).nome))),T=!0}finally{w=!1,o()}})())}function I(){return e`
    <section class="servico__bloco">
      <kk-button variant="primary" ?disabled=${w||b<=0} @click=${F}>
        ${w?n.servico.gravando:n.servico.registrar}
      </kk-button>

      ${T?e`
            <kk-alert variant="success" open>
              ${n.servico.gravada}
              <kk-button size="small" variant="success" @click=${()=>a(`metas`)}>
                ${n.servico.verMetas}
              </kk-button>
            </kk-alert>
          `:t}

      <p class="servico__nota servico__nota--fonte">
        ${n.servico.fonteAviso}
        ${n.servico.referencias.map(t=>e`
            <a href=${t.url} target="_blank" rel="noreferrer noopener">${t.rotulo}</a>
          `)}
      </p>
    </section>
  `}var L={voltarPara:()=>`ministerio`,conteudo(t){let r=f(E());return e`
      <div class="servico">
        <p class="servico__intro">${n.servico.intro}</p>

        ${j()}

        <section class="servico__bloco">
          ${A(n.servico.alvo,n.servico.alvoValor(b),0,2400,10,b,e=>{b=e,T=!1,o()})}
          ${A(n.servico.prazo,n.servico.prazoValor(x),1,12,1,x,e=>{O(e),C=Math.min(C,e-1)})}
          <p class="servico__nota">${n.servico.mediaMes(p(r.porMes))}</p>
        </section>

        ${M()}
        ${N()}
        ${P()}
        ${I()}
      </div>
    `}};export{L as telaServico};