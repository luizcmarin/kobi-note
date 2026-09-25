import{t as e}from"./texto-CFvOW6yL.js";import{ct as t,gt as n,it as r,m as i,pt as a,rt as o,tt as s,ut as c,vt as l}from"./index-sA5grpgQ.js";import{salvarMeta as u}from"./dados-BFoh9mTW.js";var d=4.348,f=[{chave:`publicador`,nome:`Publicador`,horasMes:0,resumo:`Sem cota de horas — o que se relata é a participação.`},{chave:`auxiliar-15`,nome:`Pioneiro auxiliar (15 h)`,horasMes:15,resumo:`Arranjo especial para meses diferenciados: a visita do superintendente de circuito, a Celebração ou uma campanha especial.`},{chave:`auxiliar`,nome:`Pioneiro auxiliar`,horasMes:30,resumo:`Um mês por vez, ao lado do trabalho ou do estudo.`},{chave:`regular`,nome:`Pioneiro regular`,horasMes:50,resumo:`O ano de serviço inteiro, como rotina de vida.`},{chave:`especial`,nome:`Pioneiro especial`,horasMes:100,resumo:`Designação de tempo integral, sustentada pela organização.`}];function p(e){return f.find(t=>t.chave===e)??f[0]}var m=[`Dom`,`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`];function h(e){let t=Math.max(1,e.meses),n=Math.max(0,e.totalHoras),r=e.dias.length,i=n/t,a=i/d,o=r*d,s=r===0?0:a/r;return{porMes:i,porSemana:a,porAno:i*12,porSaida:s,saidasPorMes:o,saidasTotais:Math.round(o*t),inviavel:s>10}}function g(e){if(!Number.isFinite(e)||e<=0)return`0 min`;let t=Math.round(e*60),n=Math.floor(t/60),r=t%60;return n===0?`${r} min`:r===0?`${n} h`:`${n} h ${r} min`}function _(e,t,n){let r=new Date(e,t,1),i=o(e,t+1),a=r.getDay(),s=new Set(n),c=[];for(let n=0;n<42;n++){let r=n-a+1,o=r>=1&&r<=i;c.push({dia:o?r:0,fora:!o,deServico:o&&s.has(new Date(e,t,r).getDay())})}return c}function v(t,n){let r=new Date(t,n,1).toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`});return e(r)}function y(e,t,n){return _(e,t,n).filter(e=>e.deServico).length}function b(e,t,n=new Date){let i=new Date(n.getFullYear(),n.getMonth()+Math.max(1,e.meses),0);return{titulo:t,item:`min_horas`,ativo_nome:``,data_meta:n.getTime(),prazo_final:r(s(i)),progresso_atual:0,progresso_alvo:Math.round(e.totalHoras),esta_concluida:0}}var x=[0,3],S=`regular`,C=600,w=12,T=[...x],E=0,D=!1,O=!1;function k(){return{totalHoras:C,meses:w,dias:T}}function A(e){S=e;let n=p(e).horasMes;n>0&&(C=n*w),O=!1,t()}function j(e){let n=p(S).horasMes;w=e,n>0&&(C=n*e),O=!1,t()}function M(e){T=T.includes(e)?T.filter(t=>t!==e):[...T,e].sort(),O=!1,t()}function N(e,t,n,r,i,a,o){return l`
    <div class="servico__controle">
      <label class="servico__rotulo">
        <span>${e}</span>
        <strong>${t}</strong>
      </label>
      <input
        type="range"
        min=${n}
        max=${r}
        step=${i}
        .value=${String(a)}
        @input=${e=>o(Number(e.target.value))}
      />
    </div>
  `}function P(){let e=p(S);return l`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${a.servico.modalidade}</h2>
      <div class="servico__modalidades">
        ${f.map(e=>l`
            <button
              class="servico__modalidade ${e.chave===S?`servico__modalidade--ativa`:``}"
              @click=${()=>A(e.chave)}
            >
              <strong>${e.nome}</strong>
              <span>${e.horasMes===0?a.servico.semCota:a.servico.horasMes(e.horasMes)}</span>
            </button>
          `)}
      </div>
      <p class="servico__nota">${e.resumo}</p>
    </section>
  `}function F(){return l`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${a.servico.diasTitulo}</h2>
      <div class="servico__dias">
        ${m.map((e,t)=>l`
            <button
              class="servico__dia ${T.includes(t)?`servico__dia--ativo`:``}"
              aria-pressed=${T.includes(t)}
              @click=${()=>M(t)}
            >${e}</button>
          `)}
      </div>
    </section>
  `}function I(){let e=h(k()),t=(e,t,n=!1)=>l`
    <div class="servico__linha ${n?`servico__linha--destaque`:``}">
      <span>${e}</span>
      <strong>${t}</strong>
    </div>
  `;return l`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${a.servico.gradeTitulo}</h2>

      ${T.length===0?l`<kk-alert variant="warning" open>${a.servico.semDias}</kk-alert>`:t(a.servico.porSaida,g(e.porSaida),!0)}
      ${t(a.servico.porSemana,g(e.porSemana))}
      ${t(a.servico.porMes,g(e.porMes))}
      ${t(a.servico.porAno,g(e.porAno))}
      ${t(a.servico.saidas,a.servico.saidasValor(e.saidasTotais))}

      ${e.inviavel?l`<kk-alert variant="danger" open>${a.servico.inviavel}</kk-alert>`:n}
    </section>
  `}function L(){let e=h(k()),r=new Date,i=new Date(r.getFullYear(),r.getMonth()+E,1),o=i.getFullYear(),s=i.getMonth(),c=y(o,s,T),u=c===0?0:e.porMes/c;return l`
    <section class="servico__bloco">
      <div class="servico__mesbarra">
        <kk-icon-button
          name="chevron-left"
          label=${a.servico.mesAnterior}
          ?disabled=${E===0}
          @click=${()=>{E=Math.max(0,E-1),t()}}
        ></kk-icon-button>
        <strong>${v(o,s)}</strong>
        <kk-icon-button
          name="chevron-right"
          label=${a.servico.mesSeguinte}
          ?disabled=${E>=w-1}
          @click=${()=>{E=Math.min(w-1,E+1),t()}}
        ></kk-icon-button>
      </div>

      <div class="servico__grade">
        ${m.map(e=>l`<span class="servico__cabeca">${e}</span>`)}
        ${_(o,s,T).map(e=>l`
            <span
              class="servico__cela ${e.fora?`servico__cela--fora`:``} ${e.deServico?`servico__cela--servico`:``}"
            >
              ${e.fora?``:e.dia}
              ${e.deServico?l`<small>${g(u)}</small>`:n}
            </span>
          `)}
      </div>

      <p class="servico__nota">
        ${a.servico.resumoDoMes(c,g(e.porMes))}
      </p>
    </section>
  `}function R(){D||(D=!0,t(),(async()=>{try{await u(b(k(),a.servico.tituloDaMeta(p(S).nome))),O=!0}catch(e){console.error(`servico: o registro da meta falhou.`,e),i(a.servico.naoGravada,`danger`)}finally{D=!1,t()}})())}function z(){return l`
    <section class="servico__bloco">
      <kk-button variant="primary" ?disabled=${D||C<=0} @click=${R}>
        ${D?a.servico.gravando:a.servico.registrar}
      </kk-button>

      ${O?l`
            <kk-alert variant="success" open>
              ${a.servico.gravada}
              <kk-button size="small" variant="success" @click=${()=>c(`metas`)}>
                ${a.servico.verMetas}
              </kk-button>
            </kk-alert>
          `:n}

      <p class="servico__nota servico__nota--fonte">
        ${a.servico.fonteAviso}
        ${a.servico.referencias.map(e=>l`
            <a href=${e.url} target="_blank" rel="noreferrer noopener">${e.rotulo}</a>
          `)}
      </p>
    </section>
  `}var B={voltarPara:()=>`ministerio`,conteudo(e){let n=h(k());return l`
      <div class="servico">
        <p class="servico__intro">${a.servico.intro}</p>

        ${P()}

        <section class="servico__bloco">
          ${N(a.servico.alvo,a.servico.alvoValor(C),0,2400,10,C,e=>{C=e,O=!1,t()})}
          ${N(a.servico.prazo,a.servico.prazoValor(w),1,12,1,w,e=>{j(e),E=Math.min(E,e-1)})}
          <p class="servico__nota">${a.servico.mediaMes(g(n.porMes))}</p>
        </section>

        ${F()}
        ${I()}
        ${L()}
        ${z()}
      </div>
    `}};export{B as telaServico};