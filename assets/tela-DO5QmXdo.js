import{et as e,ft as t,m as n,mt as r,nt as i,ot as a,st as o,ut as s}from"./index-D3l2wNoD.js";import{salvarMeta as c}from"./dados-BMBT_kp2.js";var l=4.348,u=[{chave:`publicador`,nome:`Publicador`,horasMes:0,resumo:`Sem cota de horas — o que se relata é a participação.`},{chave:`auxiliar`,nome:`Pioneiro auxiliar`,horasMes:30,resumo:`Um mês por vez, ao lado do trabalho ou do estudo.`},{chave:`regular`,nome:`Pioneiro regular`,horasMes:50,resumo:`O ano de serviço inteiro, como rotina de vida.`},{chave:`especial`,nome:`Pioneiro especial`,horasMes:100,resumo:`Designação de tempo integral, sustentada pela organização.`}];function d(e){return u.find(t=>t.chave===e)??u[0]}var f=[`Dom`,`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`];function p(e){let t=Math.max(1,e.meses),n=Math.max(0,e.totalHoras),r=e.dias.length,i=n/t,a=i/l,o=r*l,s=r===0?0:a/r;return{porMes:i,porSemana:a,porAno:i*12,porSaida:s,saidasPorMes:o,saidasTotais:Math.round(o*t),inviavel:s>10}}function m(e){if(!Number.isFinite(e)||e<=0)return`0 min`;let t=Math.round(e*60),n=Math.floor(t/60),r=t%60;return n===0?`${r} min`:r===0?`${n} h`:`${n} h ${r} min`}function h(e,t,n){let r=new Date(e,t,1),i=new Date(e,t+1,0).getDate(),a=r.getDay(),o=new Set(n),s=[];for(let n=0;n<42;n++){let r=n-a+1,c=r>=1&&r<=i;s.push({dia:c?r:0,fora:!c,deServico:c&&o.has(new Date(e,t,r).getDay())})}return s}function g(e,t){let n=new Date(e,t,1).toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`});return n.charAt(0).toUpperCase()+n.slice(1)}function _(e,t,n){return h(e,t,n).filter(e=>e.deServico).length}function v(t,n,r=new Date){let a=new Date(r.getFullYear(),r.getMonth()+Math.max(1,t.meses),0);return{titulo:n,item:`min_horas`,ativo_nome:``,data_meta:r.getTime(),prazo_final:i(e(a)),progresso_atual:0,progresso_alvo:Math.round(t.totalHoras),esta_concluida:0}}var y=[0,3],b=`regular`,x=600,S=12,C=[...y],w=0,T=!1,E=!1;function D(){return{totalHoras:x,meses:S,dias:C}}function O(e){b=e;let t=d(e).horasMes;t>0&&(x=t*S),E=!1,a()}function k(e){let t=d(b).horasMes;S=e,t>0&&(x=t*e),E=!1,a()}function A(e){C=C.includes(e)?C.filter(t=>t!==e):[...C,e].sort(),E=!1,a()}function j(e,t,n,i,a,o,s){return r`
    <div class="servico__controle">
      <label class="servico__rotulo">
        <span>${e}</span>
        <strong>${t}</strong>
      </label>
      <input
        type="range"
        min=${n}
        max=${i}
        step=${a}
        .value=${String(o)}
        @input=${e=>s(Number(e.target.value))}
      />
    </div>
  `}function M(){let e=d(b);return r`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${s.servico.modalidade}</h2>
      <div class="servico__modalidades">
        ${u.map(e=>r`
            <button
              class="servico__modalidade ${e.chave===b?`servico__modalidade--ativa`:``}"
              @click=${()=>O(e.chave)}
            >
              <strong>${e.nome}</strong>
              <span>${e.horasMes===0?s.servico.semCota:s.servico.horasMes(e.horasMes)}</span>
            </button>
          `)}
      </div>
      <p class="servico__nota">${e.resumo}</p>
    </section>
  `}function N(){return r`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${s.servico.diasTitulo}</h2>
      <div class="servico__dias">
        ${f.map((e,t)=>r`
            <button
              class="servico__dia ${C.includes(t)?`servico__dia--ativo`:``}"
              aria-pressed=${C.includes(t)}
              @click=${()=>A(t)}
            >${e}</button>
          `)}
      </div>
    </section>
  `}function P(){let e=p(D()),n=(e,t,n=!1)=>r`
    <div class="servico__linha ${n?`servico__linha--destaque`:``}">
      <span>${e}</span>
      <strong>${t}</strong>
    </div>
  `;return r`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${s.servico.gradeTitulo}</h2>

      ${C.length===0?r`<kk-alert variant="warning" open>${s.servico.semDias}</kk-alert>`:n(s.servico.porSaida,m(e.porSaida),!0)}
      ${n(s.servico.porSemana,m(e.porSemana))}
      ${n(s.servico.porMes,m(e.porMes))}
      ${n(s.servico.porAno,m(e.porAno))}
      ${n(s.servico.saidas,s.servico.saidasValor(e.saidasTotais))}

      ${e.inviavel?r`<kk-alert variant="danger" open>${s.servico.inviavel}</kk-alert>`:t}
    </section>
  `}function F(){let e=p(D()),n=new Date,i=new Date(n.getFullYear(),n.getMonth()+w,1),o=i.getFullYear(),c=i.getMonth(),l=_(o,c,C),u=l===0?0:e.porMes/l;return r`
    <section class="servico__bloco">
      <div class="servico__mesbarra">
        <kk-icon-button
          name="chevron-left"
          label=${s.servico.mesAnterior}
          ?disabled=${w===0}
          @click=${()=>{w=Math.max(0,w-1),a()}}
        ></kk-icon-button>
        <strong>${g(o,c)}</strong>
        <kk-icon-button
          name="chevron-right"
          label=${s.servico.mesSeguinte}
          ?disabled=${w>=S-1}
          @click=${()=>{w=Math.min(S-1,w+1),a()}}
        ></kk-icon-button>
      </div>

      <div class="servico__grade">
        ${f.map(e=>r`<span class="servico__cabeca">${e}</span>`)}
        ${h(o,c,C).map(e=>r`
            <span
              class="servico__cela ${e.fora?`servico__cela--fora`:``} ${e.deServico?`servico__cela--servico`:``}"
            >
              ${e.fora?``:e.dia}
              ${e.deServico?r`<small>${m(u)}</small>`:t}
            </span>
          `)}
      </div>

      <p class="servico__nota">
        ${s.servico.resumoDoMes(l,m(e.porMes))}
      </p>
    </section>
  `}function I(){T||(T=!0,a(),(async()=>{try{await c(v(D(),s.servico.tituloDaMeta(d(b).nome))),E=!0}catch(e){console.error(`servico: o registro da meta falhou.`,e),n(s.servico.naoGravada,`danger`)}finally{T=!1,a()}})())}function L(){return r`
    <section class="servico__bloco">
      <kk-button variant="primary" ?disabled=${T||x<=0} @click=${I}>
        ${T?s.servico.gravando:s.servico.registrar}
      </kk-button>

      ${E?r`
            <kk-alert variant="success" open>
              ${s.servico.gravada}
              <kk-button size="small" variant="success" @click=${()=>o(`metas`)}>
                ${s.servico.verMetas}
              </kk-button>
            </kk-alert>
          `:t}

      <p class="servico__nota servico__nota--fonte">
        ${s.servico.fonteAviso}
        ${s.servico.referencias.map(e=>r`
            <a href=${e.url} target="_blank" rel="noreferrer noopener">${e.rotulo}</a>
          `)}
      </p>
    </section>
  `}var R={voltarPara:()=>`ministerio`,conteudo(e){let t=p(D());return r`
      <div class="servico">
        <p class="servico__intro">${s.servico.intro}</p>

        ${M()}

        <section class="servico__bloco">
          ${j(s.servico.alvo,s.servico.alvoValor(x),0,2400,10,x,e=>{x=e,E=!1,a()})}
          ${j(s.servico.prazo,s.servico.prazoValor(S),1,12,1,S,e=>{k(e),w=Math.min(w,e-1)})}
          <p class="servico__nota">${s.servico.mediaMes(m(t.porMes))}</p>
        </section>

        ${N()}
        ${P()}
        ${F()}
        ${L()}
      </div>
    `}};export{R as telaServico};