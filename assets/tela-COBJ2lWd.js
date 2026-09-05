import{$ as e,Q as t,at as n,nt as r,rt as i,x as a,y as o}from"./index-BIyMCMf-.js";import{salvarMeta as s}from"./dados-5z0A_ALR.js";var c=4.348,l=[{chave:`publicador`,nome:`Publicador`,horasMes:0,resumo:`Sem cota de horas — o que se relata é a participação.`},{chave:`auxiliar`,nome:`Pioneiro auxiliar`,horasMes:30,resumo:`Um mês por vez, ao lado do trabalho ou do estudo.`},{chave:`regular`,nome:`Pioneiro regular`,horasMes:50,resumo:`O ano de serviço inteiro, como rotina de vida.`},{chave:`especial`,nome:`Pioneiro especial`,horasMes:100,resumo:`Designação de tempo integral, sustentada pela organização.`}];function u(e){return l.find(t=>t.chave===e)??l[0]}var d=[`Dom`,`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`];function f(e){let t=Math.max(1,e.meses),n=Math.max(0,e.totalHoras),r=e.dias.length,i=n/t,a=i/c,o=r*c,s=r===0?0:a/r;return{porMes:i,porSemana:a,porAno:i*12,porSaida:s,saidasPorMes:o,saidasTotais:Math.round(o*t),inviavel:s>10}}function p(e){if(!Number.isFinite(e)||e<=0)return`0 min`;let t=Math.round(e*60),n=Math.floor(t/60),r=t%60;return n===0?`${r} min`:r===0?`${n} h`:`${n} h ${r} min`}function m(e,t,n){let r=new Date(e,t,1),i=new Date(e,t+1,0).getDate(),a=r.getDay(),o=new Set(n),s=[];for(let n=0;n<42;n++){let r=n-a+1,c=r>=1&&r<=i;s.push({dia:c?r:0,fora:!c,deServico:c&&o.has(new Date(e,t,r).getDay())})}return s}function h(e,t){let n=new Date(e,t,1).toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`});return n.charAt(0).toUpperCase()+n.slice(1)}function g(e,t,n){return m(e,t,n).filter(e=>e.deServico).length}function _(e,t,n=new Date){let r=new Date(n.getFullYear(),n.getMonth()+Math.max(1,e.meses),0);return{titulo:t,item:`min_horas`,ativo_nome:``,data_meta:n.getTime(),prazo_final:a(o(r)),progresso_atual:0,progresso_alvo:Math.round(e.totalHoras),esta_concluida:0}}var v=[0,3],y=`regular`,b=600,x=12,S=[...v],C=0,w=!1,T=!1;function E(){return{totalHoras:b,meses:x,dias:S}}function D(e){y=e;let n=u(e).horasMes;n>0&&(b=n*x),T=!1,t()}function O(e){let n=u(y).horasMes;x=e,n>0&&(b=n*e),T=!1,t()}function k(e){S=S.includes(e)?S.filter(t=>t!==e):[...S,e].sort(),T=!1,t()}function A(e,t,r,i,a,o,s){return n`
    <div class="servico__controle">
      <label class="servico__rotulo">
        <span>${e}</span>
        <strong>${t}</strong>
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
  `}function j(){let e=u(y);return n`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${r.servico.modalidade}</h2>
      <div class="servico__modalidades">
        ${l.map(e=>n`
            <button
              class="servico__modalidade ${e.chave===y?`servico__modalidade--ativa`:``}"
              @click=${()=>D(e.chave)}
            >
              <strong>${e.nome}</strong>
              <span>${e.horasMes===0?r.servico.semCota:r.servico.horasMes(e.horasMes)}</span>
            </button>
          `)}
      </div>
      <p class="servico__nota">${e.resumo}</p>
    </section>
  `}function M(){return n`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${r.servico.diasTitulo}</h2>
      <div class="servico__dias">
        ${d.map((e,t)=>n`
            <button
              class="servico__dia ${S.includes(t)?`servico__dia--ativo`:``}"
              aria-pressed=${S.includes(t)}
              @click=${()=>k(t)}
            >${e}</button>
          `)}
      </div>
    </section>
  `}function N(){let e=f(E()),t=(e,t,r=!1)=>n`
    <div class="servico__linha ${r?`servico__linha--destaque`:``}">
      <span>${e}</span>
      <strong>${t}</strong>
    </div>
  `;return n`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${r.servico.gradeTitulo}</h2>

      ${S.length===0?n`<kk-alert variant="warning" open>${r.servico.semDias}</kk-alert>`:t(r.servico.porSaida,p(e.porSaida),!0)}
      ${t(r.servico.porSemana,p(e.porSemana))}
      ${t(r.servico.porMes,p(e.porMes))}
      ${t(r.servico.porAno,p(e.porAno))}
      ${t(r.servico.saidas,r.servico.saidasValor(e.saidasTotais))}

      ${e.inviavel?n`<kk-alert variant="danger" open>${r.servico.inviavel}</kk-alert>`:i}
    </section>
  `}function P(){let e=f(E()),a=new Date,o=new Date(a.getFullYear(),a.getMonth()+C,1),s=o.getFullYear(),c=o.getMonth(),l=g(s,c,S),u=l===0?0:e.porMes/l;return n`
    <section class="servico__bloco">
      <div class="servico__mesbarra">
        <kk-icon-button
          name="chevron-left"
          label=${r.servico.mesAnterior}
          ?disabled=${C===0}
          @click=${()=>{C=Math.max(0,C-1),t()}}
        ></kk-icon-button>
        <strong>${h(s,c)}</strong>
        <kk-icon-button
          name="chevron-right"
          label=${r.servico.mesSeguinte}
          ?disabled=${C>=x-1}
          @click=${()=>{C=Math.min(x-1,C+1),t()}}
        ></kk-icon-button>
      </div>

      <div class="servico__grade">
        ${d.map(e=>n`<span class="servico__cabeca">${e}</span>`)}
        ${m(s,c,S).map(e=>n`
            <span
              class="servico__cela ${e.fora?`servico__cela--fora`:``} ${e.deServico?`servico__cela--servico`:``}"
            >
              ${e.fora?``:e.dia}
              ${e.deServico?n`<small>${p(u)}</small>`:i}
            </span>
          `)}
      </div>

      <p class="servico__nota">
        ${r.servico.resumoDoMes(l,p(e.porMes))}
      </p>
    </section>
  `}function F(){w||(w=!0,t(),(async()=>{try{await s(_(E(),r.servico.tituloDaMeta(u(y).nome))),T=!0}finally{w=!1,t()}})())}function I(){return n`
    <section class="servico__bloco">
      <kk-button variant="primary" ?disabled=${w||b<=0} @click=${F}>
        ${w?r.servico.gravando:r.servico.registrar}
      </kk-button>

      ${T?n`
            <kk-alert variant="success" open>
              ${r.servico.gravada}
              <kk-button size="small" variant="success" @click=${()=>e(`metas`)}>
                ${r.servico.verMetas}
              </kk-button>
            </kk-alert>
          `:i}

      <p class="servico__nota servico__nota--fonte">
        ${r.servico.fonteAviso}
        ${r.servico.referencias.map(e=>n`
            <a href=${e.url} target="_blank" rel="noreferrer noopener">${e.rotulo}</a>
          `)}
      </p>
    </section>
  `}var L={voltarPara:()=>`ministerio`,conteudo(e){let i=f(E());return n`
      <div class="servico">
        <p class="servico__intro">${r.servico.intro}</p>

        ${j()}

        <section class="servico__bloco">
          ${A(r.servico.alvo,r.servico.alvoValor(b),0,2400,10,b,e=>{b=e,T=!1,t()})}
          ${A(r.servico.prazo,r.servico.prazoValor(x),1,12,1,x,e=>{O(e),C=Math.min(C,e-1)})}
          <p class="servico__nota">${r.servico.mediaMes(p(i.porMes))}</p>
        </section>

        ${M()}
        ${N()}
        ${P()}
        ${I()}
      </div>
    `}};export{L as telaServico};