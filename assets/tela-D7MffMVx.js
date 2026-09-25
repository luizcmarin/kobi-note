import{_t as e,ft as t,ht as n,lt as r,m as i,rt as a,st as o,tt as s}from"./index-C6owxr6H.js";import{salvarMeta as c}from"./dados-BhCE63KC.js";var l=4.348,u=[{chave:`publicador`,nome:`Publicador`,horasMes:0,resumo:`Sem cota de horas — o que se relata é a participação.`},{chave:`auxiliar-15`,nome:`Pioneiro auxiliar (15 h)`,horasMes:15,resumo:`Arranjo especial para meses diferenciados: a visita do superintendente de circuito, a Celebração ou uma campanha especial.`},{chave:`auxiliar`,nome:`Pioneiro auxiliar`,horasMes:30,resumo:`Um mês por vez, ao lado do trabalho ou do estudo.`},{chave:`regular`,nome:`Pioneiro regular`,horasMes:50,resumo:`O ano de serviço inteiro, como rotina de vida.`},{chave:`especial`,nome:`Pioneiro especial`,horasMes:100,resumo:`Designação de tempo integral, sustentada pela organização.`}];function d(e){return u.find(t=>t.chave===e)??u[0]}var f=[`Dom`,`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`];function p(e){let t=Math.max(1,e.meses),n=Math.max(0,e.totalHoras),r=e.dias.length,i=n/t,a=i/l,o=r*l,s=r===0?0:a/r;return{porMes:i,porSemana:a,porAno:i*12,porSaida:s,saidasPorMes:o,saidasTotais:Math.round(o*t),inviavel:s>10}}function m(e){if(!Number.isFinite(e)||e<=0)return`0 min`;let t=Math.round(e*60),n=Math.floor(t/60),r=t%60;return n===0?`${r} min`:r===0?`${n} h`:`${n} h ${r} min`}function h(e,t,n){let r=new Date(e,t,1),i=new Date(e,t+1,0).getDate(),a=r.getDay(),o=new Set(n),s=[];for(let n=0;n<42;n++){let r=n-a+1,c=r>=1&&r<=i;s.push({dia:c?r:0,fora:!c,deServico:c&&o.has(new Date(e,t,r).getDay())})}return s}function g(e,t){let n=new Date(e,t,1).toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`});return n.charAt(0).toUpperCase()+n.slice(1)}function _(e,t,n){return h(e,t,n).filter(e=>e.deServico).length}function v(e,t,n=new Date){let r=new Date(n.getFullYear(),n.getMonth()+Math.max(1,e.meses),0);return{titulo:t,item:`min_horas`,ativo_nome:``,data_meta:n.getTime(),prazo_final:a(s(r)),progresso_atual:0,progresso_alvo:Math.round(e.totalHoras),esta_concluida:0}}var y=[0,3],b=`regular`,x=600,S=12,C=[...y],w=0,T=!1,E=!1;function D(){return{totalHoras:x,meses:S,dias:C}}function O(e){b=e;let t=d(e).horasMes;t>0&&(x=t*S),E=!1,o()}function k(e){let t=d(b).horasMes;S=e,t>0&&(x=t*e),E=!1,o()}function A(e){C=C.includes(e)?C.filter(t=>t!==e):[...C,e].sort(),E=!1,o()}function j(t,n,r,i,a,o,s){return e`
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
  `}function M(){let n=d(b);return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${t.servico.modalidade}</h2>
      <div class="servico__modalidades">
        ${u.map(n=>e`
            <button
              class="servico__modalidade ${n.chave===b?`servico__modalidade--ativa`:``}"
              @click=${()=>O(n.chave)}
            >
              <strong>${n.nome}</strong>
              <span>${n.horasMes===0?t.servico.semCota:t.servico.horasMes(n.horasMes)}</span>
            </button>
          `)}
      </div>
      <p class="servico__nota">${n.resumo}</p>
    </section>
  `}function N(){return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${t.servico.diasTitulo}</h2>
      <div class="servico__dias">
        ${f.map((t,n)=>e`
            <button
              class="servico__dia ${C.includes(n)?`servico__dia--ativo`:``}"
              aria-pressed=${C.includes(n)}
              @click=${()=>A(n)}
            >${t}</button>
          `)}
      </div>
    </section>
  `}function P(){let r=p(D()),i=(t,n,r=!1)=>e`
    <div class="servico__linha ${r?`servico__linha--destaque`:``}">
      <span>${t}</span>
      <strong>${n}</strong>
    </div>
  `;return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${t.servico.gradeTitulo}</h2>

      ${C.length===0?e`<kk-alert variant="warning" open>${t.servico.semDias}</kk-alert>`:i(t.servico.porSaida,m(r.porSaida),!0)}
      ${i(t.servico.porSemana,m(r.porSemana))}
      ${i(t.servico.porMes,m(r.porMes))}
      ${i(t.servico.porAno,m(r.porAno))}
      ${i(t.servico.saidas,t.servico.saidasValor(r.saidasTotais))}

      ${r.inviavel?e`<kk-alert variant="danger" open>${t.servico.inviavel}</kk-alert>`:n}
    </section>
  `}function F(){let r=p(D()),i=new Date,a=new Date(i.getFullYear(),i.getMonth()+w,1),s=a.getFullYear(),c=a.getMonth(),l=_(s,c,C),u=l===0?0:r.porMes/l;return e`
    <section class="servico__bloco">
      <div class="servico__mesbarra">
        <kk-icon-button
          name="chevron-left"
          label=${t.servico.mesAnterior}
          ?disabled=${w===0}
          @click=${()=>{w=Math.max(0,w-1),o()}}
        ></kk-icon-button>
        <strong>${g(s,c)}</strong>
        <kk-icon-button
          name="chevron-right"
          label=${t.servico.mesSeguinte}
          ?disabled=${w>=S-1}
          @click=${()=>{w=Math.min(S-1,w+1),o()}}
        ></kk-icon-button>
      </div>

      <div class="servico__grade">
        ${f.map(t=>e`<span class="servico__cabeca">${t}</span>`)}
        ${h(s,c,C).map(t=>e`
            <span
              class="servico__cela ${t.fora?`servico__cela--fora`:``} ${t.deServico?`servico__cela--servico`:``}"
            >
              ${t.fora?``:t.dia}
              ${t.deServico?e`<small>${m(u)}</small>`:n}
            </span>
          `)}
      </div>

      <p class="servico__nota">
        ${t.servico.resumoDoMes(l,m(r.porMes))}
      </p>
    </section>
  `}function I(){T||(T=!0,o(),(async()=>{try{await c(v(D(),t.servico.tituloDaMeta(d(b).nome))),E=!0}catch(e){console.error(`servico: o registro da meta falhou.`,e),i(t.servico.naoGravada,`danger`)}finally{T=!1,o()}})())}function L(){return e`
    <section class="servico__bloco">
      <kk-button variant="primary" ?disabled=${T||x<=0} @click=${I}>
        ${T?t.servico.gravando:t.servico.registrar}
      </kk-button>

      ${E?e`
            <kk-alert variant="success" open>
              ${t.servico.gravada}
              <kk-button size="small" variant="success" @click=${()=>r(`metas`)}>
                ${t.servico.verMetas}
              </kk-button>
            </kk-alert>
          `:n}

      <p class="servico__nota servico__nota--fonte">
        ${t.servico.fonteAviso}
        ${t.servico.referencias.map(t=>e`
            <a href=${t.url} target="_blank" rel="noreferrer noopener">${t.rotulo}</a>
          `)}
      </p>
    </section>
  `}var R={voltarPara:()=>`ministerio`,conteudo(n){let r=p(D());return e`
      <div class="servico">
        <p class="servico__intro">${t.servico.intro}</p>

        ${M()}

        <section class="servico__bloco">
          ${j(t.servico.alvo,t.servico.alvoValor(x),0,2400,10,x,e=>{x=e,E=!1,o()})}
          ${j(t.servico.prazo,t.servico.prazoValor(S),1,12,1,S,e=>{k(e),w=Math.min(w,e-1)})}
          <p class="servico__nota">${t.servico.mediaMes(m(r.porMes))}</p>
        </section>

        ${N()}
        ${P()}
        ${F()}
        ${L()}
      </div>
    `}};export{R as telaServico};