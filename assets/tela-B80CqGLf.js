import{i as e,t}from"./lit-CL39YOSA.js";import{a as n,n as r}from"./strings-5zCKnCyL.js";import{r as i}from"./rotas-D12eslN_.js";import{a,c as o,s}from"./data-7IMAkOFv.js";import{t as c}from"./texto-BZYXsRJ8.js";import{R as l,c as u}from"./index-DYev-n2R.js";import{salvarMeta as d}from"./dados-DOg_OraH.js";var f=4.348,p=[{chave:`publicador`,horasMes:0},{chave:`auxiliar-15`,horasMes:15},{chave:`auxiliar`,horasMes:30},{chave:`regular`,horasMes:50},{chave:`especial`,horasMes:100}];function m(e){return p.find(t=>t.chave===e)??p[0]}function h(e){let t=Math.max(1,e.meses),n=Math.max(0,e.totalHoras),r=e.dias.length,i=n/t,a=i/f,o=r*f,s=r===0?0:a/r;return{porMes:i,porSemana:a,porAno:i*12,porSaida:s,saidasPorMes:o,saidasTotais:Math.round(o*t),inviavel:s>10}}function g(e){if(!Number.isFinite(e)||e<=0)return`0 min`;let t=Math.round(e*60),n=Math.floor(t/60),r=t%60;return n===0?`${r} min`:r===0?`${n} h`:`${n} h ${r} min`}function _(e,t,n){let r=new Date(e,t,1),i=s(e,t+1),a=r.getDay(),o=new Set(n),c=[];for(let n=0;n<42;n++){let r=n-a+1,s=r>=1&&r<=i;c.push({dia:s?r:0,fora:!s,deServico:s&&o.has(new Date(e,t,r).getDay())})}return c}function v(e,t,n=`pt-BR`){let r=new Date(e,t,1).toLocaleDateString(n,{month:`long`,year:`numeric`});return c(r)}function y(e,t,n){return _(e,t,n).filter(e=>e.deServico).length}function b(e,t,n=new Date){let r=new Date(n.getFullYear(),n.getMonth()+Math.max(1,e.meses),0);return{titulo:t,item:`min_horas`,ativo_nome:``,data_meta:n.getTime(),prazo_final:o(a(r)),progresso_atual:0,progresso_alvo:Math.round(e.totalHoras),esta_concluida:0}}var x=[0,3],S=`regular`,C=600,w=12,T=[...x],E=0,D=!1,O=!1;function k(){return{totalHoras:C,meses:w,dias:T}}function A(e){S=e;let t=m(e).horasMes;t>0&&(C=t*w),O=!1,l()}function j(e){let t=m(S).horasMes;w=e,t>0&&(C=t*e),O=!1,l()}function M(e){T=T.includes(e)?T.filter(t=>t!==e):[...T,e].sort(),O=!1,l()}function N(t,n,r,i,a,o,s){return e`
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
  `}function P(){let t=m(S);return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${r.servico.modalidade}</h2>
      <div class="servico__modalidades">
        ${p.map(t=>e`
            <button
              class="servico__modalidade ${t.chave===S?`servico__modalidade--ativa`:``}"
              @click=${()=>A(t.chave)}
            >
              <strong>${r.servico.modalidades[t.chave].nome}</strong>
              <span>${t.horasMes===0?r.servico.semCota:r.servico.horasMes(t.horasMes)}</span>
            </button>
          `)}
      </div>
      <p class="servico__nota">${r.servico.modalidades[t.chave].resumo}</p>
    </section>
  `}function F(){let e=r.calendario.semana;return[e[6]??``,...e.slice(0,6)]}function I(){return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${r.servico.diasTitulo}</h2>
      <div class="servico__dias">
        ${F().map((t,n)=>e`
            <button
              class="servico__dia ${T.includes(n)?`servico__dia--ativo`:``}"
              aria-pressed=${T.includes(n)}
              @click=${()=>M(n)}
            >${t}</button>
          `)}
      </div>
    </section>
  `}function L(){let n=h(k()),i=(t,n,r=!1)=>e`
    <div class="servico__linha ${r?`servico__linha--destaque`:``}">
      <span>${t}</span>
      <strong>${n}</strong>
    </div>
  `;return e`
    <section class="servico__bloco">
      <h2 class="servico__titulo">${r.servico.gradeTitulo}</h2>

      ${T.length===0?e`<kk-alert variant="warning" open>${r.servico.semDias}</kk-alert>`:i(r.servico.porSaida,g(n.porSaida),!0)}
      ${i(r.servico.porSemana,g(n.porSemana))}
      ${i(r.servico.porMes,g(n.porMes))}
      ${i(r.servico.porAno,g(n.porAno))}
      ${i(r.servico.saidas,r.servico.saidasValor(n.saidasTotais))}

      ${n.inviavel?e`<kk-alert variant="danger" open>${r.servico.inviavel}</kk-alert>`:t}
    </section>
  `}function R(){let i=h(k()),a=new Date,o=new Date(a.getFullYear(),a.getMonth()+E,1),s=o.getFullYear(),c=o.getMonth(),u=y(s,c,T),d=u===0?0:i.porMes/u;return e`
    <section class="servico__bloco">
      <div class="servico__mesbarra">
        <kk-icon-button
          name="chevron-left"
          label=${r.servico.mesAnterior}
          ?disabled=${E===0}
          @click=${()=>{E=Math.max(0,E-1),l()}}
        ></kk-icon-button>
        <strong>${v(s,c,n())}</strong>
        <kk-icon-button
          name="chevron-right"
          label=${r.servico.mesSeguinte}
          ?disabled=${E>=w-1}
          @click=${()=>{E=Math.min(w-1,E+1),l()}}
        ></kk-icon-button>
      </div>

      <div class="servico__grade">
        ${F().map(t=>e`<span class="servico__cabeca">${t}</span>`)}
        ${_(s,c,T).map(n=>e`
            <span
              class="servico__cela ${n.fora?`servico__cela--fora`:``} ${n.deServico?`servico__cela--servico`:``}"
            >
              ${n.fora?``:n.dia}
              ${n.deServico?e`<small>${g(d)}</small>`:t}
            </span>
          `)}
      </div>

      <p class="servico__nota">
        ${r.servico.resumoDoMes(u,g(i.porMes))}
      </p>
    </section>
  `}function z(){D||(D=!0,l(),(async()=>{try{await d(b(k(),r.servico.tituloDaMeta(r.servico.modalidades[m(S).chave].nome))),O=!0}catch(e){console.error(`servico: o registro da meta falhou.`,e),u(r.servico.naoGravada,`danger`)}finally{D=!1,l()}})())}function B(){return e`
    <section class="servico__bloco">
      <kk-button variant="primary" ?disabled=${D||C<=0} @click=${z}>
        ${D?r.servico.gravando:r.servico.registrar}
      </kk-button>

      ${O?e`
            <kk-alert variant="success" open>
              ${r.servico.gravada}
              <kk-button size="small" variant="success" @click=${()=>i(`metas`)}>
                ${r.servico.verMetas}
              </kk-button>
            </kk-alert>
          `:t}

      <p class="servico__nota servico__nota--fonte">
        ${r.servico.fonteAviso}
        ${r.servico.referencias.map(t=>e`
            <a href=${t.url} target="_blank" rel="noreferrer noopener">${t.rotulo}</a>
          `)}
      </p>
    </section>
  `}var V={voltarPara:()=>`ministerio`,conteudo(t){let n=h(k());return e`
      <div class="servico">
        <p class="servico__intro">${r.servico.intro}</p>

        ${P()}

        <section class="servico__bloco">
          ${N(r.servico.alvo,r.servico.alvoValor(C),0,2400,10,C,e=>{C=e,O=!1,l()})}
          ${N(r.servico.prazo,r.servico.prazoValor(w),1,12,1,w,e=>{j(e),E=Math.min(E,e-1)})}
          <p class="servico__nota">${r.servico.mediaMes(g(n.porMes))}</p>
        </section>

        ${I()}
        ${L()}
        ${R()}
        ${B()}
      </div>
    `}};export{V as telaServico};