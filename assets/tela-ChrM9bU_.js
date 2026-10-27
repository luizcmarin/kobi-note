import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{l as r,r as i,s as a}from"./data-DbOIIZMP.js";import{N as o,P as s,p as c}from"./formato-BoZO7uRM.js";import{v as l}from"./dados-FqZlOVir.js";import{t as u}from"./texto-BZYXsRJ8.js";import{r as d}from"./rotas-CR8kk0YZ.js";import{C as f,ct as p}from"./index-BdGprTna.js";var m=4.348,h=[{chave:`publicador`,horasMes:0},{chave:`auxiliar-15`,horasMes:15},{chave:`auxiliar`,horasMes:30},{chave:`regular`,horasMes:50},{chave:`especial`,horasMes:100}];function g(e){return h.find(t=>t.chave===e)??h[0]}function _(e){let t=Math.max(1,e.meses),n=Math.max(0,e.totalHoras),r=e.dias.length,i=n/t,a=i/m,o=r*m,s=r===0?0:a/r;return{porMes:i,porSemana:a,porAno:i*12,porSaida:s,saidasPorMes:o,saidasTotais:Math.round(o*t),inviavel:s>10}}function v(e){if(!Number.isFinite(e)||e<=0)return`0 min`;let t=Math.round(e*60),n=Math.floor(t/60),r=t%60;return n===0?`${r} min`:r===0?`${n} h`:`${n} h ${r} min`}function y(e,t,n){let i=r(new Date(e,t,1)),a=new Set(n);return s(i,0).flat().map(e=>{let t=e.startsWith(i);return{dia:t?Number(e.slice(8)):0,fora:!t,deServico:t&&a.has(o(e))}})}function b(e,t){return u(c(e,t+1))}function x(e,t,n){return y(e,t,n).filter(e=>e.deServico).length}function S(e,t,n=new Date){let r=new Date(n.getFullYear(),n.getMonth()+Math.max(1,e.meses),0);return{titulo:t,item:`min_horas`,ativo_nome:``,data_meta:n.getTime(),prazo_final:a(i(r)),progresso_atual:0,progresso_alvo:Math.round(e.totalHoras),esta_concluida:0}}var C=[0,3],w=`regular`,T=600,E=12,D=[...C],O=0,k=!1,A=!1;function j(){return{totalHoras:T,meses:E,dias:D}}function M(e){w=e;let t=g(e).horasMes;t>0&&(T=t*E),A=!1,p()}function N(e){let t=g(w).horasMes;E=e,t>0&&(T=t*e),A=!1,p()}function P(e){D=D.includes(e)?D.filter(t=>t!==e):[...D,e].sort(),A=!1,p()}function F(t,n,r,i,a,o,s){return e`
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
  `}function I(){let t=g(w);return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${n.servico.modalidade}</h2>
      <div class="servico__modalidades">
        ${h.map(t=>e`
            <button
              class="servico__modalidade ${t.chave===w?`servico__modalidade--ativa`:``}"
              @click=${()=>M(t.chave)}
            >
              <strong>${n.servico.modalidades[t.chave].nome}</strong>
              <span>${t.horasMes===0?n.servico.semCota:n.servico.horasMes(t.horasMes)}</span>
            </button>
          `)}
      </div>
      <p class="servico__nota">${n.servico.modalidades[t.chave].resumo}</p>
    </section>
  `}function L(){let e=n.calendario.semana;return[e[6]??``,...e.slice(0,6)]}function R(){return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${n.servico.diasTitulo}</h2>
      <div class="servico__dias">
        ${L().map((t,n)=>e`
            <button
              class="servico__dia ${D.includes(n)?`servico__dia--ativo`:``}"
              aria-pressed=${D.includes(n)}
              @click=${()=>P(n)}
            >${t}</button>
          `)}
      </div>
    </section>
  `}function z(){let r=_(j()),i=(t,n,r=!1)=>e`
    <div class="servico__linha ${r?`servico__linha--destaque`:``}">
      <span>${t}</span>
      <strong>${n}</strong>
    </div>
  `;return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${n.servico.gradeTitulo}</h2>

      ${D.length===0?e`<kk-alert variant="warning" open>${n.servico.semDias}</kk-alert>`:i(n.servico.porSaida,v(r.porSaida),!0)}
      ${i(n.servico.porSemana,v(r.porSemana))}
      ${i(n.servico.porMes,v(r.porMes))}
      ${i(n.servico.porAno,v(r.porAno))}
      ${i(n.servico.saidas,n.servico.saidasValor(r.saidasTotais))}

      ${r.inviavel?e`<kk-alert variant="danger" open>${n.servico.inviavel}</kk-alert>`:t}
    </section>
  `}function B(){let r=_(j()),i=new Date,a=new Date(i.getFullYear(),i.getMonth()+O,1),o=a.getFullYear(),s=a.getMonth(),c=x(o,s,D),l=c===0?0:r.porMes/c;return e`
    <section class="servico__bloco">
      <div class="servico__mesbarra">
        <kk-icon-button
          name="chevron-left"
          label=${n.servico.mesAnterior}
          ?disabled=${O===0}
          @click=${()=>{O=Math.max(0,O-1),p()}}
        ></kk-icon-button>
        <strong>${b(o,s)}</strong>
        <kk-icon-button
          name="chevron-right"
          label=${n.servico.mesSeguinte}
          ?disabled=${O>=E-1}
          @click=${()=>{O=Math.min(E-1,O+1),p()}}
        ></kk-icon-button>
      </div>

      <div class="servico__grade">
        ${L().map(t=>e`<span class="servico__cabeca">${t}</span>`)}
        ${y(o,s,D).map(n=>e`
            <span
              class="servico__cela ${n.fora?`servico__cela--fora`:``} ${n.deServico?`servico__cela--servico`:``}"
            >
              ${n.fora?``:n.dia}
              ${n.deServico?e`<small>${v(l)}</small>`:t}
            </span>
          `)}
      </div>

      <p class="servico__nota">
        ${n.servico.resumoDoMes(c,v(r.porMes))}
      </p>
    </section>
  `}function V(){k||(k=!0,p(),(async()=>{try{await l(S(j(),n.servico.tituloDaMeta(n.servico.modalidades[g(w).chave].nome))),A=!0}catch(e){console.error(`servico: o registro da meta falhou.`,e),f(n.servico.naoGravada,`danger`)}finally{k=!1,p()}})())}function H(){return e`
    <section class="servico__bloco">
      <kk-button variant="primary" ?disabled=${k||T<=0} @click=${V}>
        ${k?n.servico.gravando:n.servico.registrar}
      </kk-button>

      ${A?e`
            <kk-alert variant="success" open>
              ${n.servico.gravada}
              <kk-button size="small" variant="success" @click=${()=>d(`metas`)}>
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
  `}var U={voltarPara:()=>`ministerio`,conteudo(t){let r=_(j());return e`
      <div class="servico">
        <p class="servico__intro">${n.servico.intro}</p>

        ${I()}

        <section class="servico__bloco">
          ${F(n.servico.alvo,n.servico.alvoValor(T),0,2400,10,T,e=>{T=e,A=!1,p()})}
          ${F(n.servico.prazo,n.servico.prazoValor(E),1,12,1,E,e=>{N(e),O=Math.min(O,e-1)})}
          <p class="servico__nota">${n.servico.mediaMes(v(r.porMes))}</p>
        </section>

        ${R()}
        ${z()}
        ${B()}
        ${H()}
      </div>
    `}};export{U as telaServico};