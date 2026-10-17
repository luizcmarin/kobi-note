import{C as e,S as t,a as n,b as r,c as i,g as a,h as o,o as s,p as c,v as ee,x as l,y as te}from"./chunk.TB6E37S7-CpAr8t1b.js";import{i as u,r as ne,t as d}from"./lit-CI_s7elC.js";import{n as f}from"./strings-V1DWQvwW.js";import{d as re}from"./formato-BoZO7uRM.js";import{n as ie}from"./ordem-Bz0b6nnu.js";import{r as p}from"./rotas-CR8kk0YZ.js";import{s as m}from"./banco-yW6Av386.js";import{n as ae,r as oe,t as se}from"./directive-BSZPiF1A.js";import"./chunk.4HOXG5ZD-eln9IVGx.js";import{T as ce,ct as h,d as g,f as le,g as ue,h as de,m as _,p as fe,t as v}from"./index-BQ700Bhd.js";import{t as pe}from"./carga-C4iKecgv.js";import"./note-BJV9bo_U.js";import{t as me}from"./busca-BbsPzDy7.js";import{n as he,u as ge}from"./dados-CUeKrmQs.js";function y(e){return e<0?e+1:e}function _e(e){return Number.isInteger(e)&&e!==0}function ve(e,t){return e.medida===`epoca`||t.medida===`epoca`||e.ano_inicio===e.ano_fim||t.ano_inicio===t.ano_fim}var ye={juda:`Judá e Judeia`,israel:`Israel e Samaria`,galileia:`Galileia`,alem_jordao:`Além do Jordão`,fenicia:`Fenícia`,sinai:`Sinai e o deserto`,egito:`Egito`,mesopotamia:`Mesopotâmia`,babilonia:`Babilônia`,persia:`Pérsia e Média`,siria:`Síria`,asia_menor:`Ásia Menor`,grecia:`Grécia e Macedônia`,italia:`Itália`,ilhas:`Ilhas do Mediterrâneo`,outra:`Outra região`};function be(e){return{ano:Math.abs(e),antes:e<0}}function b(e){return _e(e.ano_inicio)&&_e(e.ano_fim)&&y(e.ano_fim)>=y(e.ano_inicio)}function x(e){let t=y(e.ano_inicio);return{de:t,ate:Math.max(y(e.ano_fim),t+1)}}function xe(e){let{de:t,ate:n}=x(e);return n-t}function Se(e,t){let n=x(e),r=x(t);return Math.max(0,Math.min(n.ate,r.ate)-Math.max(n.de,r.de))}function Ce(e,t){let n=x(e),r=x(t);return Math.max(0,Math.max(n.de,r.de)-Math.min(n.ate,r.ate))}function we(e,t){if(!b(e))return[];let n=[];for(let r of t){if(r===e||e.id!==void 0&&r.id===e.id||!b(r))continue;let t=Se(e,r);t>0&&n.push({vida:r,anos:t})}return n.sort((e,t)=>t.anos-e.anos||y(e.vida.ano_inicio)-y(t.vida.ano_inicio))}function Te(e){return[...e].sort((e,t)=>y(e.ano_inicio)-y(t.ano_inicio)||y(e.ano_fim)-y(t.ano_fim))}function Ee(e,t,n){let r=new Map(n.map(e=>[Number(e.id),e]));return t.filter(t=>Number(t.vida_id)===e).sort((e,t)=>Number(e.ordem)-Number(t.ordem)).flatMap(e=>{let t=r.get(Number(e.lugar_id));return t===void 0?[]:[{lugar:t,ligacao:e}]})}function De(e,t,n){let r=new Map(n.map(e=>[Number(e.id),e])),i=new Set,a=[];for(let n of[...t].sort((e,t)=>Number(e.ordem)-Number(t.ordem))){if(Number(n.lugar_id)!==e)continue;let t=Number(n.vida_id),o=r.get(t);o===void 0||i.has(t)||(i.add(t),a.push({vida:o,ligacao:n}))}return a.sort((e,t)=>y(e.vida.ano_inicio)-y(t.vida.ano_inicio))}var Oe=o`
  :host {
    --kk-gantt-day-width: 1.75rem;
    --kk-gantt-year-width: 0.5rem;
    --kk-gantt-label-width: 14rem;
    --kk-gantt-row-height: 2.25rem;

    display: block;
  }

  /*
   * A rolagem é horizontal e é DAQUI, e a coluna dos rótulos fica parada: é o que
   * deixa ler de quem é a barra de novembro sem voltar ao começo.
   */
  /* A unidade do eixo: o dia, ou o ano na escala de anos. Tudo o que mede usa esta. */
  .gantt {
    --gantt-unidade: var(--kk-gantt-day-width);

    position: relative;
    overflow-x: auto;
    border: var(--kk-panel-border-width) solid var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-medium);
    background-color: var(--kk-panel-background-color);
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-small);
    color: var(--kk-color-neutral-700);
  }

  :host([scale='year']) .gantt {
    --gantt-unidade: var(--kk-gantt-year-width);
  }

  /* O ano se escreve como a aplicação mandou: "997 a.C." não vira "997 A.C.". */
  :host([scale='year']) .gantt__mes {
    text-transform: none;
  }

  .gantt--vazio {
    padding: var(--kk-spacing-medium);
  }

  .gantt__vazio {
    margin: 0;
    color: var(--kk-color-neutral-500);
  }

  .gantt__grade {
    position: relative;
    inline-size: calc(var(--kk-gantt-label-width) + var(--gantt-dias) * var(--gantt-unidade));
    min-inline-size: 100%;
  }

  .gantt__cabecalho,
  .gantt__linha {
    display: grid;
    grid-template-columns: var(--kk-gantt-label-width) 1fr;
  }

  .gantt__cabecalho {
    block-size: var(--kk-gantt-row-height);
    border-block-end: var(--kk-panel-border-width) solid var(--kk-panel-border-color);
  }

  /* A coluna parada: o canto da régua, o rótulo de cada linha e o de cada grupo. */
  .gantt__canto,
  .gantt__rotulo,
  .gantt__grupo span {
    position: sticky;
    inset-inline-start: 0;
    z-index: 2;
    background-color: var(--kk-panel-background-color);
  }

  .gantt__canto,
  .gantt__rotulo {
    border-inline-end: var(--kk-panel-border-width) solid var(--kk-panel-border-color);
  }

  .gantt__meses,
  .gantt__trilho {
    position: relative;
  }

  .gantt__mes {
    position: absolute;
    inset-block: 0;
    inset-inline-start: calc(var(--de) * var(--gantt-unidade));
    inline-size: calc(var(--dias) * var(--gantt-unidade));
    display: flex;
    align-items: center;
    padding-inline: var(--kk-spacing-x-small);
    overflow: hidden;
    white-space: nowrap;
    font-weight: var(--kk-font-weight-semibold);
    color: var(--kk-color-neutral-600);
    text-transform: capitalize;
  }

  /* As divisas de mês e a linha de hoje atravessam todas as linhas, por cima do fundo e por baixo das barras. */
  .gantt__divisa,
  .gantt__hoje {
    position: absolute;
    inset-block: 0;
    inset-inline-start: calc(var(--kk-gantt-label-width) + var(--de) * var(--gantt-unidade));
    border-inline-start: var(--kk-panel-border-width) solid var(--kk-panel-border-color);
    pointer-events: none;
  }

  .gantt__hoje {
    inset-inline-start: calc(var(--kk-gantt-label-width) + (var(--de) + 0.5) * var(--gantt-unidade));
    z-index: 1;
    border-inline-start: calc(2 * var(--kk-panel-border-width)) solid var(--kk-color-danger-600);
  }

  .gantt__linhas {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .gantt__linha {
    block-size: var(--kk-gantt-row-height);
  }

  .gantt__linha + .gantt__linha,
  .gantt__grupo + .gantt__linha {
    border-block-start: var(--kk-panel-border-width) solid var(--kk-surface-subtle);
  }

  .gantt__rotulo {
    display: flex;
    align-items: center;
    padding-inline: var(--kk-spacing-small);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .gantt__grupo {
    display: flex;
    align-items: center;
    block-size: var(--kk-gantt-row-height);
    border-block-start: var(--kk-panel-border-width) solid var(--kk-panel-border-color);
    background-color: var(--kk-surface-subtle);
    font-weight: var(--kk-font-weight-semibold);
    color: var(--kk-color-neutral-800);
  }

  .gantt__grupo span {
    padding-inline: var(--kk-spacing-small);
    background-color: var(--kk-surface-subtle);
  }

  .gantt__barra {
    --cor: var(--kk-color-primary-600);

    all: unset;
    position: absolute;
    inset-block: var(--kk-spacing-x-small);
    inset-inline-start: calc(var(--de) * var(--gantt-unidade) + var(--kk-spacing-3x-small));
    inline-size: calc(var(--dias) * var(--gantt-unidade) - 2 * var(--kk-spacing-3x-small));
    /* Afastado para ver séculos, um ano tem fração de pixel: a barra de um ano não some. */
    min-inline-size: var(--kk-spacing-2x-small);
    z-index: 1;
    border-radius: var(--kk-border-radius-small);
    background-color: var(--cor);
    cursor: pointer;
  }

  /*
   * A faixa de incerteza: a cor da barra, apagando para fora dela — o começo antes da
   * melhor estimativa, o fim depois. Fica atrás da barra e não recebe clique. A direção do
   * degradê não é lógica no CSS: no árabe o rumo se inverte pela classe.
   */
  .gantt__incerteza {
    position: absolute;
    inset-block: var(--kk-spacing-x-small);
    inset-inline-start: calc(var(--de) * var(--gantt-unidade));
    inline-size: calc(var(--dias) * var(--gantt-unidade));
    border-radius: var(--kk-border-radius-small);
    background-image: linear-gradient(var(--gantt-rumo), var(--cor), transparent);
    opacity: 0.45;
    pointer-events: none;
  }

  .gantt__incerteza--antes,
  .gantt--rtl .gantt__incerteza--depois {
    --gantt-rumo: to left;
  }

  .gantt__incerteza--depois,
  .gantt--rtl .gantt__incerteza--antes {
    --gantt-rumo: to right;
  }

  .gantt__barra:hover {
    filter: brightness(1.1);
  }

  .gantt__barra:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  /* O marco é um losango centrado no dia dele, e não uma barra de um dia. */
  .gantt__barra--marco {
    inset-block: auto;
    inset-block-start: 50%;
    inset-inline-start: calc((var(--de) + 0.5) * var(--gantt-unidade));
    inline-size: calc(var(--kk-gantt-row-height) / 2.5);
    block-size: calc(var(--kk-gantt-row-height) / 2.5);
    border-radius: var(--kk-border-radius-small);
    translate: -50% -50%;
    rotate: 45deg;
  }

  .gantt__barra--primary {
    --cor: var(--kk-color-primary-600);
  }

  .gantt__barra--success {
    --cor: var(--kk-color-success-600);
  }

  .gantt__barra--warning {
    --cor: var(--kk-color-warning-600);
  }

  .gantt__barra--danger {
    --cor: var(--kk-color-danger-600);
  }

  .gantt__barra--neutral {
    --cor: var(--kk-color-neutral-500);
  }

  @media (forced-colors: active) {
    .gantt__barra {
      background-color: ButtonText;
    }

    .gantt__hoje {
      border-inline-start-color: Highlight;
    }

    .gantt__incerteza {
      background-image: none;
      border: dashed var(--kk-panel-border-width) ButtonText;
    }
  }
`;function S(e){return e===void 0||!Number.isFinite(e)||e<=0?0:Math.round(e)}var C=864e5,ke=[1,5,10,25,50,100,250,500,1e3];function Ae(e){if(!/^-?\d+$/.test(e.trim()))return NaN;let t=Number(e);return ue(t)?de(t):NaN}function w(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(t===null)return NaN;let[n,r,i]=[Number(t[1]),Number(t[2]),Number(t[3])],a=Date.UTC(n,r-1,i),o=new Date(a);return o.getUTCFullYear()===n&&o.getUTCMonth()===r-1&&o.getUTCDate()===i?a/C:NaN}function je(){let e=new Date;return Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/C}function T(e){let t=new Date(e*C);return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())}var E,D,Me,Ne,Pe,Fe,Ie,Le,Re,ze,O,k,A,j,M,N,P,F,I,L,R,z,B=class extends (O=s,ze=[n({attribute:!1})],Re=[n({attribute:!1})],Le=[n()],Ie=[n()],Fe=[n()],Pe=[n()],Ne=[n()],Me=[n({reflect:!0})],D=[n({type:Number})],E=[n({attribute:!1})],O){constructor(){super(...arguments),t(this,`localize`,new le(this)),e(this,A,r(k,8,this,[])),r(k,11,this),e(this,j,r(k,12,this,[])),r(k,15,this),e(this,M,r(k,16,this,``)),r(k,19,this),e(this,N,r(k,20,this,``)),r(k,23,this),e(this,P,r(k,24,this,``)),r(k,27,this),e(this,F,r(k,28,this,``)),r(k,31,this),e(this,I,r(k,32,this,``)),r(k,35,this),e(this,L,r(k,36,this,`day`)),r(k,39,this),e(this,R,r(k,40,this,0)),r(k,43,this),e(this,z,r(k,44,this)),r(k,47,this)}get emAnos(){return this.scale===`year`}unidade(e){return this.emAnos?Ae(e):w(e)}medir(){let e=[];for(let t of this.items){let n=this.unidade(t.start);if(Number.isNaN(n))continue;let r=t.milestone===!0?n:this.unidade(t.end??t.start),i=Number.isNaN(r)?n:r,[a,o]=[Math.min(n,i),Math.max(n,i)];e.push({item:t,de:a,ate:this.emAnos?Math.max(o-1,a):o,antes:t.milestone===!0?0:S(t.startUncertainty),depois:t.milestone===!0?0:S(t.endUncertainty)})}return e}linhas(e){let t=new Set(this.groups.map(e=>e.id)),n=[];for(let t of this.groups){let r=e.filter(e=>e.item.group===t.id);r.length!==0&&n.push({grupo:t},...r)}return n.push(...e.filter(e=>e.item.group===void 0||!t.has(e.item.group))),n}intervalo(e){if(e.length===0)return;let t=e.map(e=>e.de-e.antes),n=e.map(e=>e.ate+e.depois),r=this.unidade(this.start),i=this.unidade(this.end);Number.isNaN(r)||t.push(r),Number.isNaN(i)||n.push(i);let a=Math.min(...t)-1,o=Math.max(...n)+1;return{primeiro:a,dias:Math.max(o-a+1,7)}}meses(e,t){let n=[],r=e;for(;r<e+t;){let i=new Date(r*C),a=Date.UTC(i.getUTCFullYear(),i.getUTCMonth()+1,1)/C,o=Math.min(a,e+t),s=n.length===0||i.getUTCMonth()===0;n.push({de:r-e,dias:o-r,rotulo:s?this.localize.escrita().mesCurtoEAno(i.getUTCFullYear(),i.getUTCMonth()+1):this.localize.escrita().mesCurto(i.getUTCMonth()+1)}),r=o}return n}passo(e){return this.tick>0?Math.trunc(this.tick):ke.find(t=>e/t<=20)??1e3}escreverAno(e){return this.formatYear?.(e)??String(e)}anos(e,t){let n=this.passo(t),r=e+t,i=[];for(let t=e;t<r;t++)_(t)%n===0&&i.push(t);let a=i[0]===e?i:[e,...i];return a.map((t,n)=>({de:t-e,dias:(a[n+1]??r)-t,rotulo:i.includes(t)?this.escreverAno(_(t)):``}))}descrever(e){if(this.emAnos){let t=this.escreverAno(_(e.de));return e.ate===e.de?`${e.item.label}: ${t}`:`${e.item.label}: ${t} \u2013 ${this.escreverAno(_(e.ate+1))}`}let t=this.localize.escrita(),n=t.comMes(fe(T(e.de)));return e.ate===e.de?`${e.item.label}: ${n}`:`${e.item.label}: ${n} \u2013 ${t.comMes(fe(T(e.ate)))}`}incerteza(e,t,n){let r=e[t];if(r===0)return a;let i=t===`antes`?e.de-r:e.ate+1;return c`<span
      part="uncertainty"
      class=${g({gantt__incerteza:!0,[`gantt__incerteza--${t}`]:!0,[`gantt__barra--${e.item.variant??`primary`}`]:!0})}
      aria-hidden="true"
      style=${v({"--de":String(i-n),"--dias":String(r)})}
    ></span>`}selecionar(e){this.emit(`kk-gantt-select`,{detail:{id:e}})}render(){let e=this.medir(),t=this.intervalo(e);if(t===void 0)return c`
        <div part="base" class="gantt gantt--vazio" role="group" aria-label=${this.label||a}>
          <p part="placeholder" class="gantt__vazio">${this.placeholder}</p>
        </div>
      `;let{primeiro:n,dias:r}=t,i=this.today===``?je():w(this.today),o=!this.emAnos&&!Number.isNaN(i)&&i>=n&&i<n+r,s=this.emAnos?this.anos(n,r):this.meses(n,r);return c`
      <div
        part="base"
        class=${g({gantt:!0,"gantt--rtl":this.localize.dir()===`rtl`})}
        role="group"
        aria-label=${this.label||a}
      >
        <div class="gantt__grade" style=${v({"--gantt-dias":String(r)})}>
          <div class="gantt__cabecalho" aria-hidden="true">
            <span class="gantt__canto"></span>
            <span class="gantt__meses">
              ${s.map(e=>c`
                  <span
                    class="gantt__mes"
                    style=${v({"--de":String(e.de),"--dias":String(e.dias)})}
                    >${e.rotulo}</span
                  >
                `)}
            </span>
          </div>

          ${s.slice(1).map(e=>c`
              <span
                class="gantt__divisa"
                aria-hidden="true"
                style=${v({"--de":String(e.de)})}
              ></span>
            `)}

          <ul class="gantt__linhas" role="list">
            ${this.linhas(e).map(e=>`grupo`in e?c`<li part="group" class="gantt__grupo"><span>${e.grupo.label}</span></li>`:c`
                    <li part="row" class="gantt__linha">
                      <span part="label" class="gantt__rotulo" title=${e.item.label}>${e.item.label}</span>
                      <span class="gantt__trilho">
                        ${this.incerteza(e,`antes`,n)}
                        <button
                          part="bar"
                          type="button"
                          class=${g({gantt__barra:!0,"gantt__barra--marco":e.item.milestone===!0,[`gantt__barra--${e.item.variant??`primary`}`]:!0})}
                          style=${v({"--de":String(e.de-n),"--dias":String(e.ate-e.de+1)})}
                          aria-label=${this.descrever(e)}
                          title=${this.descrever(e)}
                          @click=${()=>this.selecionar(e.item.id)}
                        ></button>
                        ${this.incerteza(e,`depois`,n)}
                      </span>
                    </li>
                  `)}
          </ul>

          ${o?c`
                  <span
                    part="today"
                    class="gantt__hoje"
                    title=${this.localize.term(`ganttToday`)}
                    style=${v({"--de":String(i-n)})}
                  ></span>
                `:a}
        </div>
      </div>
    `}};k=te(O),A=new WeakMap,j=new WeakMap,M=new WeakMap,N=new WeakMap,P=new WeakMap,F=new WeakMap,I=new WeakMap,L=new WeakMap,R=new WeakMap,z=new WeakMap,l(k,4,`items`,ze,B,A),l(k,4,`groups`,Re,B,j),l(k,4,`start`,Le,B,M),l(k,4,`end`,Ie,B,N),l(k,4,`today`,Fe,B,P),l(k,4,`label`,Pe,B,F),l(k,4,`placeholder`,Ne,B,I),l(k,4,`scale`,Me,B,L),l(k,4,`tick`,D,B,R),l(k,4,`formatYear`,E,B,z),ee(k,B),t(B,`styles`,[i,Oe]),B.define(`kk-gantt`);var Be=`important`,Ve=` !`+Be,He=se(class extends ae{constructor(e){if(super(e),e.type!==oe.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ve);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Be:``):n[e]=r}}return ne}}),V=[`vida`,`reinado`,`atividade`,`epoca`];function H(e){return V.includes(e.medida)?e.medida:`vida`}var Ue={vida:`primary`,reinado:`warning`,atividade:`success`,epoca:`neutral`};function We(e){return Te(e.map(e=>({...e,ano_inicio:Number(e.ano_inicio),ano_fim:Number(e.ano_fim),personagem_id:e.personagem_id===null||Number(e.personagem_id)<=0?null:Number(e.personagem_id)})).filter(e=>e.id!==void 0&&b(e)))}var Ge={medidas:{vida:!0,reinado:!0,atividade:!0,epoca:!0},busca:``};function Ke(e,t,n){return e.filter(e=>t.medidas[H(e)]&&(n===null||n.has(Number(e.id))))}function qe(e){let t=new Set(e.map(e=>e.periodo));return he.filter(e=>t.has(e)).map(e=>({id:e,label:ge(e)}))}function Je(e){let t=Math.min(Math.max(Math.round(xe(e)*.15),5),30);return{antes:e.inicio_precisao===`cerca`||e.inicio_precisao===`antes`?t:0,depois:e.fim_precisao===`cerca`||e.fim_precisao===`depois`?t:0}}function Ye(e){return e.map(e=>{let{antes:t,depois:n}=Je(e);return{id:String(e.id),label:e.nome,start:String(e.ano_inicio),end:String(e.ano_fim),group:e.periodo,variant:Ue[H(e)],...t>0?{startUncertainty:t}:{},...n>0?{endUncertainty:n}:{}}})}var U=[{largura:`0.1px`,passo:500},{largura:`0.4px`,passo:100},{largura:`1.5px`,passo:50},{largura:`4px`,passo:25},{largura:`10px`,passo:10}];function Xe(e){return Math.min(Math.max(Math.trunc(e),0),U.length-1)}function W(e){let t=be(e);return f.vidas.ano(re(t.ano),t.antes)}function Ze(e,t){return f.vidas.comPrecisao(W(e),t)}function G(e){let t=H(e),n=Ze(e.ano_inicio,e.inicio_precisao);return e.ano_inicio===e.ano_fim?f.vidas.em[t](n):f.vidas.de[t](n,Ze(e.ano_fim,e.fim_precisao))}function Qe(e){return H(e)===`epoca`?``:f.vidas.anos(xe(e))}function $e(e){return f.vidas.categorias[e]??e}function K(e){return f.vidas.regioes[e]??e}function et(e){return f.vidas.papeis[e]??e}function tt(e,t,n){return ve(e,t)?f.vidas.mesmaEpoca:f.vidas.emComum(n)}function nt(e){let t=Object.keys(ye),n=e=>{let n=t.indexOf(e);return n<0?t.length:n},r=new Map;for(let t of e){let e=r.get(t.lugar.regiao);e===void 0?r.set(t.lugar.regiao,[t]):e.push(t)}return[...r.entries()].sort(([e],[t])=>n(e)-n(t)).map(([e,t])=>({regiao:e,itens:t}))}function rt(e){if(e.length===0)return 0;let t=e.map(e=>y(e.ano_inicio)),n=e.map(e=>y(e.ano_fim));return Math.max(...n)-Math.min(...t)}async function it(){let[e,t,n]=await Promise.all([m(`vidas`).todos(),m(`lugares`).todos(),m(`vidas_lugares`).todos()]);return{vidas:We(e),lugares:t,ligacoes:n.map(e=>({...e,vida_id:Number(e.vida_id),lugar_id:Number(e.lugar_id),ordem:Number(e.ordem)}))}}var q=[],J=[],Y=[],X=Ge,Z=2,at=new me(`not_vidas`),Q=new pe(`vidas`,async()=>{({vidas:q,lugares:J,ligacoes:Y}=await it())});function ot(e){return q.find(t=>Number(t.id)===e)}function st(e){return J.find(t=>Number(t.id)===e)}function $(e){let[t,n]=e.args;if(t===void 0)return{tipo:`linha`};if(t===`lugares`)return{tipo:`lugares`};if(t===`lugar`){let e=st(Number(n));return e===void 0?{tipo:`lugares`}:{tipo:`lugar`,lugar:e}}let r=ot(Number(t));if(r===void 0)return{tipo:`linha`};let i=n===void 0?void 0:ot(Number(n));return i===void 0||i===r?{tipo:`ficha`,vida:r}:{tipo:`comparar`,a:r,b:i}}function ct(e,t){return e===``?d:u`<p class="vidas__fonte">
    <a href=${e} target="_blank" rel="noopener">
      <kk-icon name="external-link"></kk-icon>${t===``?f.vidas.lerFonte:t}
    </a>
  </p>`}function lt(e,t){return u`
    <li>
      <button
        class="vidas__item"
        data-medida=${H(e)}
        data-vida=${String(e.id)}
        @click=${()=>p(`vidas/${e.id}`)}
      >
        <span class="vidas__marca" aria-hidden="true"></span>
        <span class="vidas__item-nome">${e.nome}</span>
        <span class="vidas__item-tempo">${G(e)}</span>
        ${t===``?d:u`<span class="vidas__item-detalhe">${t}</span>`}
      </button>
    </li>
  `}function ut(e){let t=Math.max(rt(e),10);return`${Math.min(Math.max(320/t,.1),12)}px`}function dt(e,t){return u`
    <kk-gantt
      class="vidas__linha vidas__linha--curta"
      scale="year"
      label=${t}
      style=${He({"--kk-gantt-year-width":ut(e)})}
      .formatYear=${W}
      .items=${Ye(e)}
      @kk-gantt-select=${e=>p(`vidas/${e.detail.id}`)}
    ></kk-gantt>
  `}function ft(e){return u`
    <div class="chips vidas__abas">
      <button class="chip" ?data-ativo=${e===`linha`} @click=${()=>p(`vidas`)}>
        <kk-icon name="timeline"></kk-icon>${f.vidas.aLinha}
      </button>
      <button
        class="chip"
        ?data-ativo=${e===`lugares`}
        @click=${()=>p(`vidas/lugares`)}
      >
        <kk-icon name="map-pins"></kk-icon>${f.vidas.osLugares}
      </button>
    </div>
  `}function pt(e){X={...X,medidas:{...X.medidas,[e]:!X.medidas[e]}},h()}function mt(e){Z=Xe(Z+e),h()}function ht(){let e=Ke(q,X,at.achados),t=U[Z]??U[2];return u`
    <p class="intro">${f.vidas.intro}</p>
    ${ft(`linha`)}

    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        placeholder=${f.vidas.buscar}
        .value=${X.busca}
        @kk-input=${e=>{X={...X,busca:e.target.value},at.buscar(X.busca),h()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips vidas__chips">
      ${V.map(e=>u`
          <button
            class="chip"
            data-medida=${e}
            ?data-ativo=${X.medidas[e]}
            @click=${()=>pt(e)}
          >
            <span class="vidas__marca" aria-hidden="true"></span>${f.vidas.medidas[e]}
          </button>
        `)}
      <span class="vidas__zoom">
        <kk-icon-button
          name="zoom-out"
          label=${f.vidas.afastar}
          ?disabled=${Z===0}
          @click=${()=>mt(-1)}
        ></kk-icon-button>
        <kk-icon-button
          name="zoom-in"
          label=${f.vidas.aproximar}
          ?disabled=${Z===U.length-1}
          @click=${()=>mt(1)}
        ></kk-icon-button>
      </span>
    </div>

    ${e.length===0?u`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="timeline"></kk-icon>
            <p>${q.length===0?f.vidas.vazio:f.vidas.semResultado}</p>
          </div>
        `:u`
          <kk-gantt
            class="vidas__linha"
            scale="year"
            label=${f.vidas.rotuloDaLinha}
            .tick=${t?.passo??0}
            style=${He({"--kk-gantt-year-width":t?.largura??`1px`})}
            .formatYear=${W}
            .groups=${qe(e)}
            .items=${Ye(e)}
            @kk-gantt-select=${e=>p(`vidas/${e.detail.id}`)}
          ></kk-gantt>
          <p class="vidas__conta">${f.vidas.pessoas(e.length)}</p>
        `}
  `}function gt(e){let t=we(e,q),n=Ee(Number(e.id),Y,J),r=q.filter(t=>t!==e);return u`
    <div class="vidas__ficha" data-medida=${H(e)}>
      <p class="vidas__categoria">
        <span class="vidas__marca" aria-hidden="true"></span>
        ${$e(e.categoria)} · ${ge(e.periodo)}
      </p>
      <p class="vidas__intervalo">
        ${G(e)}
        ${Qe(e)===``?d:u`<span class="vidas__duracao">(${Qe(e)})</span>`}
      </p>
      ${e.resumo===``?d:u`<div class="prosa vidas__resumo">${ce(e.resumo)}</div>`}
      ${e.referencia===``?d:u`<p class="vidas__referencia">${e.referencia}</p>`}
      ${ct(e.link_fonte,e.obra_fonte)}
      ${e.personagem_id===null?d:u`
            <kk-button
              class="vidas__cartao"
              outline
              @click=${()=>p(`personagens/${e.personagem_id}`)}
            >
              <kk-icon slot="prefix" name="user-star"></kk-icon>${f.vidas.verCartao}
            </kk-button>
          `}
    </div>

    <section class="vidas__secao">
      <h2>${f.vidas.compararCom}</h2>
      <kk-select
        class="vidas__comparar-com"
        placeholder=${f.vidas.escolhaUmaPessoa}
        @kk-change=${t=>{let n=String(t.target.value??``);n!==``&&p(`vidas/${e.id}/${n}`)}}
      >
        ${r.map(e=>u`<kk-option value=${String(e.id)}>${e.nome}</kk-option>`)}
      </kk-select>
    </section>

    <section class="vidas__secao">
      <h2>${f.vidas.contemporaneos} <small>${t.length}</small></h2>
      ${t.length===0?u`<p class="vidas__nada">${f.vidas.semContemporaneos}</p>`:u`<ul class="vidas__lista">
            ${t.map(({vida:t,anos:n})=>lt(t,tt(e,t,n)))}
          </ul>`}
    </section>

    <section class="vidas__secao">
      <h2>${f.vidas.lugares}</h2>
      ${n.length===0?u`<p class="vidas__nada">${f.vidas.semLugares}</p>`:nt(n).map(({regiao:e,itens:t})=>u`
                <h3 class="vidas__regiao">${K(e)}</h3>
                <ul class="vidas__lista">
                  ${t.map(({lugar:e,ligacao:t})=>u`
                      <li>
                        <button
                          class="vidas__item vidas__item--lugar"
                          data-lugar=${String(e.id)}
                          @click=${()=>p(`vidas/lugar/${e.id}`)}
                        >
                          <kk-icon name="map-pin"></kk-icon>
                          <span class="vidas__item-nome">${e.nome}</span>
                          <span class="vidas__item-tempo">${et(t.papel)}</span>
                          ${t.referencia===``?d:u`<span class="vidas__item-detalhe">${t.referencia}</span>`}
                        </button>
                      </li>
                    `)}
                </ul>
              `)}
    </section>
  `}function _t(e){return u`
    <button
      class="vidas__lado"
      data-medida=${H(e)}
      @click=${()=>p(`vidas/${e.id}`)}
    >
      <span class="vidas__lado-nome">${e.nome}</span>
      <span class="vidas__lado-categoria">${$e(e.categoria)}</span>
      <span class="vidas__lado-tempo">${G(e)}</span>
    </button>
  `}function vt(e,t){let n=Se(e,t),r=Ce(e,t),i=n>0?tt(e,t,n):r===0?f.vidas.emSequencia:f.vidas.separados(r);return u`
    <div class="vidas__comparador">${_t(e)}${_t(t)}</div>
    <kk-alert open class="vidas__veredito" variant=${n>0?`success`:`neutral`}>
      <kk-icon slot="icon" name=${n>0?`arrows-left-right`:`arrows-split`}></kk-icon>
      ${n>0?f.vidas.cruzaram:f.vidas.naoCruzaram} — ${i}
    </kk-alert>
    ${dt([e,t],`${e.nome} × ${t.nome}`)}
  `}function yt(){let e=J.map(e=>({lugar:e,pessoas:De(Number(e.id),Y,q).length})).filter(e=>e.pessoas>0);return u`
    <p class="intro">${f.vidas.introDosLugares}</p>
    ${ft(`lugares`)}
    ${e.length===0?u`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="map-pins"></kk-icon>
            <p>${f.vidas.semLugaresNoAcervo}</p>
          </div>
        `:nt(e).map(({regiao:e,itens:t})=>u`
              <h2 class="vidas__regiao">${K(e)}</h2>
              <ul class="vidas__lista vidas__lista--lugares">
                ${[...t].sort((e,t)=>ie(`pt-BR`,e.lugar.nome,t.lugar.nome)).map(({lugar:e,pessoas:t})=>u`
                      <li>
                        <button
                          class="vidas__item vidas__item--lugar"
                          data-lugar=${String(e.id)}
                          @click=${()=>p(`vidas/lugar/${e.id}`)}
                        >
                          <kk-icon name="map-pin"></kk-icon>
                          <span class="vidas__item-nome">${e.nome}</span>
                          <span class="vidas__item-tempo">${f.vidas.pessoas(t)}</span>
                        </button>
                      </li>
                    `)}
              </ul>
            `)}
  `}function bt(e){let t=De(Number(e.id),Y,q);return u`
    <p class="vidas__categoria">
      <kk-icon name="map-pin"></kk-icon>${K(e.regiao)}
    </p>
    ${e.referencia===``?d:u`<p class="vidas__referencia">${e.referencia}</p>`}
    ${ct(e.link_fonte,e.obra_fonte)}

    <section class="vidas__secao">
      <h2>${f.vidas.quemEsteveAqui} <small>${t.length}</small></h2>
      ${t.length===0?u`<p class="vidas__nada">${f.vidas.ninguemAqui}</p>`:u`
            ${dt(t.map(({vida:e})=>e),e.nome)}
            <ul class="vidas__lista">
              ${t.map(({vida:e,ligacao:t})=>lt(e,et(t.papel)))}
            </ul>
          `}
    </section>
  `}var xt={titulo(e){if(!Q.terminou)return;let t=$(e);switch(t.tipo){case`linha`:return;case`lugares`:return f.vidas.osLugares;case`lugar`:return t.lugar.nome;case`ficha`:return t.vida.nome;case`comparar`:return`${t.a.nome} × ${t.b.nome}`}},voltarPara(e){if(!Q.terminou)return`home`;let t=$(e);switch(t.tipo){case`linha`:return`home`;case`lugares`:case`ficha`:return`vidas`;case`lugar`:return`vidas/lugares`;case`comparar`:return`vidas/${t.a.id}`}},conteudo(e){let t=Q.espera();if(t!==null)return t;let n=$(e);switch(n.tipo){case`linha`:return ht();case`lugares`:return yt();case`lugar`:return bt(n.lugar);case`ficha`:return gt(n.vida);case`comparar`:return vt(n.a,n.b)}}};export{xt as telaVidas};