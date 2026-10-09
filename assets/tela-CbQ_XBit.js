import{C as e,S as t,a as n,b as r,c as i,h as a,i as o,n as s,o as c,p as ee,r as te,s as ne,t as re,v as ie,x as l,y as ae}from"./chunk.TB6E37S7-CpAr8t1b.js";import{i as u,o as d,t as f}from"./lit-CI_s7elC.js";import{n as p}from"./strings-BCzNZFpV.js";import{h as m}from"./formato-BoZO7uRM.js";import{t as oe}from"./html-C5yDSNPC.js";import{r as se}from"./rotas-CR8kk0YZ.js";import{s as ce}from"./banco-BcRp8WVY.js";import{o as le}from"./acessibilidade-0dW0_ixm.js";import{s as ue}from"./dados-CySaPAga.js";import"./chunk.4HOXG5ZD-eln9IVGx.js";import{a as de,b as fe,c as pe,d as me,f as he,i as ge,it as h,l as _e,o as ve,r as ye,u as be,x as xe}from"./index-YLgIwNyG.js";import{t as Se}from"./carga-BpNfyn1x.js";import{t as Ce}from"./leitura-CpLyieR4.js";import{a as we,r as Te,t as Ee}from"./recordes-CbWDtLHD.js";import{n as g,t as _}from"./sorteio-Bln1H9Cu.js";import{a as De,i as Oe,n as ke,r as Ae}from"./note-Be9qLKb7.js";import{t as je}from"./rascunho-Bg6USnqZ.js";var v=`nomedivino`;function Me(e){return{id:Number(e.id),titulo:String(e.titulo??``).trim(),texto:String(e.texto??``),referencia:String(e.referencia??``).trim(),obra:String(e.obra_fonte??``).trim(),link:String(e.link_fonte??``).trim()}}function Ne(e,t){return Number(e.ordem)-Number(t.ordem)||Number(e.id)-Number(t.id)}function Pe(e){let t=new Map,n=new Map,r=new Map,i=[];for(let a of[...e].sort(Ne)){if(a.id===void 0)continue;let e=De({capitulo:String(a.capitulo??``),tipo:String(a.tipo??``),titulo:String(a.titulo??``),texto:String(a.texto??``),dados:String(a.dados??``),referencia:String(a.referencia??``)});if(e===null)continue;let o=Me(a);switch(e.tipo){case`parte`:t.has(e.parte)||t.set(e.parte,o);break;case`abertura`:n.has(e.capitulo)||n.set(e.capitulo,{...o,dados:e.dados});break;case`item`:r.set(e.capitulo,[...r.get(e.capitulo)??[],{...o,dados:e.dados}]);break;case`pergunta`:i.push({...o,capitulo:e.capitulo,escolha:e.dados})}}let a=[];ke.forEach((e,o)=>{let s=n.get(e),c=Ae[e],ee=r.get(e)??[];s===void 0||ee.length<c.minimo||e===`desafio`&&i.length<10||t.has(c.parte)&&a.push({chave:e,numero:o+1,ficha:c,abertura:s,itens:ee})});let o=[];return Oe.forEach((e,n)=>{let r=t.get(e),i=a.filter(t=>t.ficha.parte===e);r!==void 0&&i.length!==0&&o.push({chave:e,numero:n+1,titulo:r.titulo,texto:r.texto,referencia:r.referencia,capitulos:i})}),{partes:o,capitulos:a,perguntas:i}}function Fe(e,t){let n=e.find(e=>e.jogo===`nomedivino`&&e.modo===t);return Math.max(0,Math.min(3,Number(n?.melhor_pontos)||0))}function Ie(e,t){return e.capitulos.filter(e=>Fe(t,e.chave)>0).length}function Le(e,t){return e.capitulos.find(e=>Fe(t,e.chave)===0)??null}function Re(e,t){let n=e.capitulos.findIndex(e=>e.chave===t);return n===-1?null:e.capitulos[n+1]??null}function y(e,t){return t>0&&e>=t?3:t>0&&e/t>=.6?2:1}function ze(e){return e<=0?3:e<=2?2:1}function Be(e){return[`I`,`II`,`III`,`IV`,`V`,`VI`][e-1]??String(e)}function Ve(e,t){let n=e.findIndex(e=>e.ano>t);return n===-1?e.length:n}function He(e,t=10){let n=new Map;for(let t of g(e))n.set(t.capitulo,[...n.get(t.capitulo)??[],t]);let r=[];for(;r.length<t&&n.size>0;)for(let e of g([...n.keys()])){let i=n.get(e)??[],a=i.shift();if(a!==void 0&&r.push(a),i.length===0&&n.delete(e),r.length===t)break}return r}function Ue(e,t){let n=e.indexOf(t);return n===-1?{antes:e,depois:``}:{antes:e.slice(0,n),depois:e.slice(n+t.length)}}function We(e,t=10){return Math.max(1,Math.round(e/t))}function Ge(){return ce(`nome_divino`).todos()}function b(e,t=``){return u`<div class="prosa ${t}">${xe(e)}</div>`}function Ke(e,t,n){return n===null?``:e===t?`certa`:e===n?`errada`:`apagada`}function x(e,t,n,r){return u`
    <div class="nomedivino__alternativas">
      ${e.map(e=>u`
          <button
            class="nomedivino__alternativa"
            data-original=${e.original}
            data-tom=${Ke(e.original,t,n)}
            ?disabled=${n!==null}
            @click=${()=>r(e.original)}
          >
            ${e.texto}
          </button>
        `)}
    </div>
  `}function S(e,t,n){return u`
    <kk-alert open class="nomedivino__retorno" variant=${e?`success`:`warning`}>
      ${e?p.nomedivino.acertou:p.nomedivino.errou}
      ${t===``?f:u`<span class="nomedivino__referencia">— ${t}</span>`}
      ${n??f}
    </kk-alert>
  `}function C(e,t,n=p.nomedivino.passo){return u`
    <div class="nomedivino__passos">
      <span>${n(e,t)}</span>
      <kk-progress-bar value=${Math.round(e/Math.max(1,t)*100)}></kk-progress-bar>
    </div>
  `}function w(e,t,n=!0){return u`
    <div class="nomedivino__seguir">
      <kk-button variant=${n?`primary`:`default`} @click=${t}>
        ${e}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
      </kk-button>
    </div>
  `}function qe(e){return u`
    <span class="nomedivino__estrelas" role="img" aria-label=${p.nomedivino.estrelas(e)}>
      ${[1,2,3].map(t=>u`<kk-icon
            name="star"
            variant=${t<=e?`filled`:`outline`}
            data-acesa=${t<=e?`sim`:`nao`}
          ></kk-icon>`)}
    </span>
  `}function Je(e=``){return u`<kk-icon
    class="nomedivino__selo ${e}"
    variant="filled"
    name="rosette-discount-check"
    label=${p.nomedivino.comSelo}
  ></kk-icon>`}function Ye(e,t){return e===``?f:u`<p class="nomedivino__fonte">
    <a href=${e} target="_blank" rel="noopener">
      <kk-icon name="external-link"></kk-icon>${t===``?p.nomedivino.lerFonte:t}
    </a>
  </p>`}var Xe=[],Ze=[],Qe=[],T=0;function $e(e){Xe=g(e.itens),Ze=Xe.map(e=>_(e.dados.alternativas)),Qe=Xe.map(()=>null),T=0}function et(e,t){let n=Xe[T],r=Ze[T];if(n===void 0||r===void 0)return u``;let i=Xe.length,a=Qe[T]??null,o=Xe.filter((e,t)=>Qe[t]===e.dados.correta).length,s=n.dados.alternativas[n.dados.correta]??``;return u`
    ${C(T+1,i)}

    <div class="nomedivino__lados" data-abertos=${a===null?`nao`:`sim`}>
      <section class="nomedivino__lado nomedivino__luz">
        <h3>${n.titulo}</h3>
        ${b(n.texto)}
      </section>
      ${a===null?f:u`<section class="nomedivino__lado nomedivino__lado--hebraico nomedivino__luz">
              <h3>${s}</h3>
              ${b(n.dados.hebraico)}
            </section>`}
    </div>

    ${a===null?u`<p class="nomedivino__chamada">${p.nomedivino.citacoes.deOnde}</p>`:f}
    ${x(r,n.dados.correta,a,e=>{Qe[T]===null&&(Qe=Qe.map((t,n)=>n===T?e:t),h())})}

    ${a===null?f:u`
          ${S(a===n.dados.correta,n.referencia)}
          ${T===i-1?w(p.nomedivino.concluir,()=>t(y(o,i))):w(p.nomedivino.proximo,()=>{T+=1,h()})}
        `}
  `}var tt={reiniciar:$e,desenhar:et},E=0,nt=new Map;function rt(e){return`nomedivino:${e}`}var it=je({origem:`nomedivino`,idDe:e=>e.id,chaveDe:e=>rt(e.id),referenciaDe:e=>e.referencia,tituloDe:e=>`${p.modulos.nomedivino} — ${e.titulo}`,lembrete:()=>nt});async function at(e){let t=new Map;try{for(let e of await ue()){if(e.origem!==`nomedivino`||e.ref_chave===null)continue;let n=Number(e.ref_chave.split(`:`)[1]);Number.isFinite(n)&&t.set(n,e.conteudo)}}catch(e){console.error(`nomedivino: o Caderno não foi lido.`,e)}nt=t,ot(e,E),h()}function ot(e,t){E=t;let n=e.itens[E];it.abrir(n===void 0?``:nt.get(n.id)??``)}function st(e){E=0,nt=new Map,it.abrir(``),at(e)}function ct(e,t){let n=e.itens[E];if(n===void 0)return u``;let r=e.itens.length,i=E===r-1;return u`
    ${C(E+1,r)}

    <article class="nomedivino__meditacao">
      <h2 class="nomedivino__meditacao-pergunta">${n.titulo}</h2>
      ${b(n.texto)}
      ${n.referencia===``?``:u`<p class="nomedivino__referencia-bloco">${n.referencia}</p>`}
    </article>

    ${it.campo({item:n,id:`nomedivino-reflexao`,rotulo:p.nomedivino.conhecer.escreva,placeholder:p.nomedivino.conhecer.placeholder})}

    <div class="nomedivino__navegacao">
      <kk-button
        outline
        ?disabled=${E===0}
        @click=${()=>{ot(e,E-1),h()}}
      >
        <kk-icon slot="prefix" name="arrow-left"></kk-icon>${p.nomedivino.anterior}
      </kk-button>
      ${i?w(p.nomedivino.concluir,()=>t(1)):w(p.nomedivino.proximo,()=>{ot(e,E+1),h()})}
    </div>
  `}var lt={reiniciar:st,desenhar:ct},ut=a`
  :host {
    --kk-range-thumb-size: 20px;
    --kk-range-tooltip-offset: 10px;
    --kk-range-track-color-active: var(--kk-color-neutral-200);
    --kk-range-track-color-inactive: var(--kk-color-neutral-200);
    --kk-range-track-active-offset: 0%;
    --kk-range-track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --kk-range-percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--kk-range-track-height);
    background: transparent;
    line-height: var(--kk-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--kk-range-track-color-inactive) 0%,
      var(--kk-range-track-color-inactive) min(var(--kk-range-percent), var(--kk-range-track-active-offset)),
      var(--kk-range-track-color-active) min(var(--kk-range-percent), var(--kk-range-track-active-offset)),
      var(--kk-range-track-color-active) max(var(--kk-range-percent), var(--kk-range-track-active-offset)),
      var(--kk-range-track-color-inactive) max(var(--kk-range-percent), var(--kk-range-track-active-offset)),
      var(--kk-range-track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--kk-range-track-color-inactive) 0%,
      var(--kk-range-track-color-inactive) min(var(--kk-range-percent), var(--kk-range-track-active-offset)),
      var(--kk-range-track-color-active) min(var(--kk-range-percent), var(--kk-range-track-active-offset)),
      var(--kk-range-track-color-active) max(var(--kk-range-percent), var(--kk-range-track-active-offset)),
      var(--kk-range-track-color-inactive) max(var(--kk-range-percent), var(--kk-range-track-active-offset)),
      var(--kk-range-track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--kk-range-track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--kk-range-thumb-size);
    height: var(--kk-range-thumb-size);
    border-radius: 50%;
    background-color: var(--kk-color-primary-600);
    border: solid var(--kk-input-border-width) var(--kk-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--kk-range-thumb-size) / -2 + var(--kk-range-track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--kk-color-primary-500);
    border-color: var(--kk-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--kk-color-primary-500);
    border-color: var(--kk-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--kk-range-track-color-active);
    border-radius: 3px;
    height: var(--kk-range-track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--kk-range-track-height);
    background-color: var(--kk-range-track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--kk-range-thumb-size);
    width: var(--kk-range-thumb-size);
    border-radius: 50%;
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
    transition:
      var(--kk-transition-fast) border-color,
      var(--kk-transition-fast) background-color,
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--kk-color-primary-500);
    border-color: var(--kk-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--kk-color-primary-500);
    border-color: var(--kk-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* A saída da dica */
  .range__tooltip {
    position: absolute;
    z-index: var(--kk-z-index-tooltip);
    left: 0;
    border-radius: var(--kk-tooltip-border-radius);
    background-color: var(--kk-tooltip-background-color);
    font-family: var(--kk-tooltip-font-family);
    font-size: var(--kk-tooltip-font-size);
    font-weight: var(--kk-tooltip-font-weight);
    line-height: var(--kk-tooltip-line-height);
    color: var(--kk-tooltip-color);
    opacity: 0;
    padding: var(--kk-tooltip-padding);
    transition: var(--kk-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--kk-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Dica em cima. */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--kk-range-thumb-size) - var(--kk-range-tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--kk-tooltip-arrow-size) solid var(--kk-tooltip-background-color);
    border-left: var(--kk-tooltip-arrow-size) solid transparent;
    border-right: var(--kk-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Dica embaixo. */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--kk-range-thumb-size) - var(--kk-range-tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--kk-tooltip-arrow-size) solid var(--kk-tooltip-background-color);
    border-left: var(--kk-tooltip-arrow-size) solid transparent;
    border-right: var(--kk-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,D,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,O=class extends (Mt=c,jt=[ne(`.range__control`)],At=[ne(`.range__tooltip`)],kt=[te()],Ot=[te()],Dt=[n()],Et=[n()],Tt=[n({type:Number})],wt=[n()],Ct=[n({attribute:`help-text`})],St=[n({type:Boolean,reflect:!0})],xt=[n({type:Number})],bt=[n({type:Number})],yt=[n({type:Number})],vt=[n()],_t=[n({attribute:!1})],gt=[n({reflect:!0,converter:be})],ht=[s()],mt=[o({passive:!0})],pt=[re(`value`,{waitUntilFirstUpdate:!0})],ft=[re(`disabled`,{waitUntilFirstUpdate:!0})],dt=[re(`hasTooltip`,{waitUntilFirstUpdate:!0})],Mt){constructor(){super(...arguments),r(D,5,this),t(this,`validade`,new ve(this,{interacaoEm:[`kk-input`]})),t(this,`hasSlotController`,new pe(this,`help-text`,`label`)),t(this,`localize`,new he(this)),t(this,`resizeObserver`),e(this,Nt,r(D,8,this)),r(D,11,this),e(this,Pt,r(D,12,this)),r(D,15,this),e(this,Ft,r(D,16,this,!1)),r(D,19,this),e(this,It,r(D,20,this,!1)),r(D,23,this),e(this,Lt,r(D,24,this,``)),r(D,27,this),e(this,Rt,r(D,28,this,``)),r(D,31,this),e(this,zt,r(D,32,this,0)),r(D,35,this),e(this,Bt,r(D,36,this,``)),r(D,39,this),e(this,Vt,r(D,40,this,``)),r(D,43,this),e(this,Ht,r(D,44,this,!1)),r(D,47,this),e(this,Ut,r(D,48,this,0)),r(D,51,this),e(this,Wt,r(D,52,this,100)),r(D,55,this),e(this,Gt,r(D,56,this,1)),r(D,59,this),e(this,Kt,r(D,60,this,`top`)),r(D,63,this),e(this,qt,r(D,64,this,e=>e.toString())),r(D,67,this),e(this,Jt,r(D,68,this,``)),r(D,71,this),t(this,`defaultValue`,r(D,72,this,0)),r(D,75,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this._internals.setFormValue(String(this.value)),this.updateValidity()}firstUpdated(){this._internals.setFormValue(String(this.value)),this.updateValidity()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this.input)}handleChange(){this.emit(`kk-change`)}handleInput(){this.value=Number.parseFloat(this.input.value),this.emit(`kk-input`),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit(`kk-focus`)}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty(`--kk-range-percent`,`${e*100}%`)}syncTooltip(e){if(this.output!==null){let t=this.input.offsetWidth,n=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue(`--kk-range-thumb-size`),i=this.localize.dir()===`rtl`,a=t*e;if(i){let i=`${t-a}px + ${e} * ${r}`;this.output.style.translate=`calc((${i} - ${n/2}px - ${r} / 2))`}else{let t=`${a}px - ${e} * ${r}`;this.output.style.translate=`calc(${t} - ${n/2}px + ${r} / 2)`}}}handleValueChange(){this.input.value=this.value.toString(),this.value=Number.parseFloat(this.input.value),this._internals.setFormValue(String(this.value)),this.updateValidity(),this.syncRange()}handleDisabledChange(){this.input.disabled=this.disabled,this.updateValidity()}syncRange(){let e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!==`none`&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.input.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,de(this.input),this.input)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return ee`
      <div
        part="form-control"
        class=${me({"form-control":!0,"form-control--medium":!0,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${me({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()===`rtl`,"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip===`top`,"range--tooltip-bottom":this.tooltip===`bottom`})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${_e(this.name)}
              ?disabled=${this.disabled}
              min=${_e(this.min)}
              max=${_e(this.max)}
              step=${_e(this.step)}
              .value=${ge(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!==`none`&&!this.disabled?ee`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter==`function`?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:``}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};D=ae(Mt),Nt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap,It=new WeakMap,Lt=new WeakMap,Rt=new WeakMap,zt=new WeakMap,Bt=new WeakMap,Vt=new WeakMap,Ht=new WeakMap,Ut=new WeakMap,Wt=new WeakMap,Gt=new WeakMap,Kt=new WeakMap,qt=new WeakMap,Jt=new WeakMap,l(D,4,`input`,jt,O,Nt),l(D,4,`output`,At,O,Pt),l(D,4,`hasFocus`,kt,O,Ft),l(D,4,`hasTooltip`,Ot,O,It),l(D,4,`title`,Dt,O,Lt),l(D,4,`name`,Et,O,Rt),l(D,4,`value`,Tt,O,zt),l(D,4,`label`,wt,O,Bt),l(D,4,`helpText`,Ct,O,Vt),l(D,4,`disabled`,St,O,Ht),l(D,4,`min`,xt,O,Ut),l(D,4,`max`,bt,O,Wt),l(D,4,`step`,yt,O,Gt),l(D,4,`tooltip`,vt,O,Kt),l(D,4,`tooltipFormatter`,_t,O,qt),l(D,4,`form`,gt,O,Jt),l(D,1,`handleThumbDragStart`,mt,O),l(D,1,`handleValueChange`,pt,O),l(D,1,`handleDisabledChange`,ft,O),l(D,1,`syncRange`,dt,O),l(D,5,`defaultValue`,ht,O),ie(D,O),t(O,`styles`,[i,ye,ut]),t(O,`formAssociated`,!0),O.define(`kk-range`);var Yt=1e4,k=3e3,Xt=!1,A=0;function Zt(){k=3e3,Xt=!1,A=0}function Qt(e){return e.itens.find(e=>e.dados.estimar)??e.itens.reduce((e,t)=>t.dados.valor>e.dados.valor?t:e)}function $t(e){let t=!le();return u`
    <div class="nomedivino__grade" aria-hidden="true" data-animar=${t?`sim`:`nao`}>
      ${Array.from({length:We(e)},(e,t)=>u`<span style=${`--i: ${t}`}></span>`)}
    </div>
  `}function en(e,t){let n=Qt(e),r=e.itens.filter(e=>e!==n);if(!Xt)return u`
      <h2 class="nomedivino__contagem-pergunta">${n.titulo}</h2>
      <p class="nomedivino__chamada">${p.nomedivino.contagem.estime}</p>
      <output class="nomedivino__palpite">${m(k)}</output>
      <kk-range
        class="nomedivino__regua"
        min="0"
        max=${Yt}
        step="50"
        .value=${k}
        label=${p.nomedivino.contagem.seuPalpite}
        tooltip="none"
        @kk-input=${e=>{k=Number(e.target.value),h()}}
      ></kk-range>
      ${w(p.nomedivino.contagem.revelar,()=>{Xt=!0,h()})}
    `;let i=A===0?void 0:r[A-1],a=Math.abs(k-n.dados.valor);return u`
    <h2 class="nomedivino__contagem-numero">${m(n.dados.valor)}</h2>
    <p class="nomedivino__contagem-rotulo">${n.titulo}</p>
    <p class="nomedivino__contagem-palpite">
      ${p.nomedivino.contagem.voceDisse(m(k),m(a))}
    </p>

    ${$t(n.dados.valor)}
    <p class="nomedivino__legenda">${p.nomedivino.contagem.legenda(m(10))}</p>

    ${A===0?b(n.texto):f}
    ${i===void 0?f:u`<article class="nomedivino__comparado">
            <h3>
              <span class="nomedivino__comparado-numero">${m(i.dados.valor)}</span>
              ${i.titulo}
            </h3>
            ${$t(i.dados.valor)}
            ${b(i.texto)}
          </article>`}

    ${A<r.length?w(p.nomedivino.contagem.comparar,()=>{A+=1,h()}):w(p.nomedivino.concluir,()=>t(1))}
  `}var tn={reiniciar:Zt,desenhar:en},nn={partes:[],capitulos:[],perguntas:[]},rn=[],an=new Se(v,async()=>{let[e,t]=await Promise.all([Ge(),Te(v)]);nn=Pe(e),rn=t});function on(){return nn}function sn(){return rn}async function cn(e,t){try{let n=await we({jogo:v,modo:e,nivel:1},t);return rn=Ee(rn,n.recorde),n}catch(e){return console.error(`nomedivino: o fim do capítulo não foi gravado.`,e),null}}var j=[],ln=[],M=[],N=0;function un(){j=He(on().perguntas),ln=j.map(e=>_(e.escolha.alternativas)),M=j.map(()=>null),N=0}function dn(e,t){let n=j[N],r=ln[N];if(n===void 0||r===void 0)return u``;let i=j.length,a=M[N]??null,o=j.filter((e,t)=>M[t]===e.escolha.correta).length;return u`
    ${C(N+1,i,p.nomedivino.desafio.pergunta)}
    <h2 class="nomedivino__enunciado">${n.titulo}</h2>

    ${x(r,n.escolha.correta,a,e=>{M[N]===null&&(M=M.map((t,n)=>n===N?e:t),h())})}

    ${a===null?f:u`
          ${S(a===n.escolha.correta,n.referencia)}
          ${N===i-1?w(p.nomedivino.desafio.verResultado,()=>t(y(o,i))):w(p.nomedivino.proximo,()=>{N+=1,h()})}
        `}
  `}var fn={reiniciar:un,desenhar:dn},P=null,F=new Set;function pn(){P=null,F=new Set}function mn(e){P=P===e?null:e,F=new Set([...F,e]),h()}function hn(e,t){let n=e.itens.every(e=>F.has(e.id)),r=e.itens.find(e=>e.id===P);return u`
    <p class="nomedivino__chamada">${p.nomedivino.dossie.chamada}</p>
    <p class="nomedivino__conta">${p.nomedivino.dossie.conta(F.size,e.itens.length)}</p>

    <ul class="nomedivino__pastas">
      ${e.itens.map((e,t)=>u`<li>
          <button
            class="nomedivino__pasta"
            aria-expanded=${P===e.id?`true`:`false`}
            data-lida=${F.has(e.id)?`sim`:`nao`}
            @click=${()=>mn(e.id)}
          >
            <kk-icon name=${P===e.id?`folder-open`:`folder`}></kk-icon>
            <span class="nomedivino__pasta-numero">${t+1}</span>
            <span class="nomedivino__pasta-aba">${e.titulo}</span>
          </button>
        </li>`)}
    </ul>

    ${r===void 0?f:u`<article class="nomedivino__folha" aria-live="polite">
            <h2>${r.titulo}</h2>
            ${b(r.texto)}
            ${r.referencia===``?f:u`<p class="nomedivino__referencia-bloco">${r.referencia}</p>`}
          </article>`}

    ${n?w(p.nomedivino.concluir,()=>t(1)):f}
  `}var gn={reiniciar:pn,desenhar:hn},_n=!1,I=0;function vn(){_n=!1,I=0}function yn(e,t){let{destaque:n,sentido:r}=e.abertura.dados,i=e.itens.length;return u`
    <div class="nomedivino__palavra" data-aberta=${_n?`sim`:`nao`}>
      <span class="nomedivino__palavra-fechada">${n}</span>
      ${_n?u`<span class="nomedivino__palavra-sentido">${r}</span>`:f}
    </div>

    ${_n?u`
          <ol class="nomedivino__versiculos">
            ${e.itens.slice(0,I).map(e=>u`<li class="nomedivino__versiculo nomedivino__luz">
                <h3 class="nomedivino__versiculo-ref">${e.titulo}</h3>
                ${b(e.texto)}
              </li>`)}
          </ol>
          ${I<i?w(p.nomedivino.jah.outro(i-I),()=>{I+=1,h()}):w(p.nomedivino.concluir,()=>t(1))}
        `:u`<div class="nomedivino__seguir">
            <kk-button
              variant="primary"
              @click=${()=>{_n=!0,I=1,h()}}
            >
              <kk-icon slot="prefix" name="sparkles"></kk-icon>${p.nomedivino.jah.abrir}
            </kk-button>
          </div>`}
  `}var bn={reiniciar:vn,desenhar:yn},xn={י:[`M44 34 H56 Q62 34 62 41 V64`],ה:[`M16 34 H78 Q86 34 86 43 V118`,`M28 66 V118`],ו:[`M40 34 H54 Q60 34 60 41 V118`]},L=0;function Sn(){L=0}function Cn(e,t){let n=xn[e];return n===void 0?u`<span class="nomedivino__letra-texto" lang="he" dir="rtl">${e}</span>`:u`
    <svg class="nomedivino__letra-svg" viewBox="0 0 100 140" aria-hidden="true" focusable="false">
      ${n.map((e,n)=>d`<path
          d=${e}
          pathLength="1"
          style=${`--traco: ${n}; --letra: ${t}`}
        ></path>`)}
    </svg>
  `}function wn(e){if(L>=e.itens.length)return;L+=1;let t=e.itens[L-1];t!==void 0&&fe(p.nomedivino.letras.anuncio(t.dados.nome,t.dados.consoante)),h()}function Tn(e,t){let n=e.itens.length,r=L===0?void 0:e.itens[L-1],i=L===n;return u`
    <div class="nomedivino__pergaminho" data-prontas=${i?`sim`:`nao`}>
      <div class="nomedivino__tetragrama" dir="rtl">
        ${e.itens.map((e,t)=>u`
            <span
              class="nomedivino__letra"
              data-escrita=${t<L?`sim`:`nao`}
              aria-hidden=${t<L?`false`:`true`}
            >
              ${t<L?Cn(e.dados.letra,t):f}
            </span>
          `)}
      </div>
      ${i?u`<p class="nomedivino__consoantes" dir="ltr">
              ${e.itens.map(e=>e.dados.consoante).join(``)}
            </p>`:f}
    </div>

    ${r===void 0?u`<p class="nomedivino__chamada">${p.nomedivino.letras.comecar}</p>`:u`
          <article class="nomedivino__ficha-letra">
            <header>
              <span class="nomedivino__letra-pequena" lang="he" dir="rtl">${r.dados.letra}</span>
              <span class="nomedivino__letra-nome">${r.dados.nome}</span>
              <span class="nomedivino__letra-som">${p.nomedivino.letras.consoante(r.dados.consoante)}</span>
            </header>
            ${b(r.texto)}
          </article>
        `}

    ${i?w(p.nomedivino.concluir,()=>t(1)):u`<div class="nomedivino__seguir">
            <kk-button variant="primary" @click=${()=>wn(e)}>
              <kk-icon slot="prefix" name="writing"></kk-icon>
              ${L===0?p.nomedivino.letras.primeira:p.nomedivino.letras.proxima}
            </kk-button>
          </div>`}
  `}var En={reiniciar:Sn,desenhar:Tn},Dn=5,R=new Set,On=[],z=[],B=0,kn=!1;function An(e){return g(e).slice(0,Dn).map(t=>{let n=g([...new Set(e.map(e=>e.dados.lingua))].filter(e=>e!==t.dados.lingua)).slice(0,2);return{item:t,alternativas:_([t.dados.lingua,...n])}})}function jn(e){R=new Set,On=An(e.itens),z=On.map(()=>null),B=0,kn=!1}function Mn(e){let t=e.itens.every(e=>R.has(e.id));return u`
    <p class="nomedivino__chamada">${p.nomedivino.linguas.chamada}</p>
    <ul class="nomedivino__mosaico">
      ${e.itens.map(e=>{let t=R.has(e.id);return u`<li>
          <button
            class="nomedivino__ladrilho"
            aria-pressed=${t?`true`:`false`}
            @click=${()=>{R=new Set([...R,e.id]),h()}}
          >
            <span class="nomedivino__ladrilho-forma" dir="auto">${e.titulo}</span>
            <span class="nomedivino__ladrilho-lingua">${t?e.dados.lingua:`?`}</span>
          </button>
        </li>`})}
    </ul>
    ${t?w(p.nomedivino.linguas.desafiar,()=>{kn=!0,h()}):u`<p class="nomedivino__conta">${p.nomedivino.linguas.faltam(e.itens.length-R.size)}</p>`}
  `}function Nn(e){let t=On[B];if(t===void 0)return u``;let n=On.length,r=z[B]??null,i=z.filter(e=>e===0).length;return u`
    ${C(B+1,n)}
    <p class="nomedivino__chamada">${p.nomedivino.linguas.qualLingua}</p>
    <p class="nomedivino__forma-parada nomedivino__luz" dir="auto">${t.item.titulo}</p>

    ${x(t.alternativas,0,r,e=>{z[B]===null&&(z=z.map((t,n)=>n===B?e:t),h())})}

    ${r===null?f:u`
          ${S(r===0,``)}
          ${B===n-1?w(p.nomedivino.concluir,()=>e(y(i,n))):w(p.nomedivino.proximo,()=>{B+=1,h()})}
        `}
  `}function Pn(e,t){return kn?Nn(t):Mn(e)}var Fn={reiniciar:jn,desenhar:Pn};function In(e,t,n,r,i=!1){let a=Math.max(2,Math.round((t-e)/14)),o=`M${e} ${n}`;for(let i=1;i<=a;i++){let s=e+(t-e)*i/a,c=(r*7+i*13)%5-2;o+=` Q${s-(t-e)/a/2} ${n+c} ${s} ${n}`}return d`<path class="nomedivino__escrita" d=${o} data-alvo=${i?`sim`:`nao`}></path>`}function V(e,t,n,r,i){return Array.from({length:e},(a,o)=>{let[s,c]=r(o);return In(s,c,t+o*n,o+e,i.includes(o))})}var Ln={"pedra-moabita":{largura:200,altura:260,alvo:{x:20,y:140,l:160,a:12},corpo:()=>d`
      <path class="nomedivino__pedra" d="M18 252 V70 Q18 14 100 12 Q182 14 182 70 V252 Z"></path>
      ${V(34,40,6.2,e=>e<4?[44-e*6,156+e*6]:[26,174],[17])}
    `},caverna:{largura:220,altura:200,alvo:{x:58,y:104,l:104,a:16},corpo:()=>d`
      <path class="nomedivino__rocha" d="M6 196 V90 Q14 18 110 12 Q206 18 214 90 V196 Z"></path>
      <path class="nomedivino__sombra" d="M40 196 V120 Q46 70 110 66 Q174 70 180 120 V196 Z"></path>
      <rect class="nomedivino__placa-pedra" x="50" y="84" width="120" height="56" rx="4"></rect>
      ${V(3,96,16,()=>[60,160],[1])}
    `},"carta-laquis":{largura:200,altura:200,alvo:{x:30,y:62,l:140,a:30},corpo:()=>d`
      <path class="nomedivino__caco" d="M22 34 L74 14 L150 22 L186 70 L176 150 L120 190 L46 180 L12 118 Z"></path>
      ${V(9,48,15,e=>[30+e%3*3,168-(e>6?30:0)],[1,2])}
    `},"ostraco-arade":{largura:200,altura:180,alvo:{x:34,y:40,l:132,a:14},corpo:()=>d`
      <path class="nomedivino__caco" d="M30 24 L116 10 L184 46 L178 128 L110 172 L28 150 L14 80 Z"></path>
      ${V(7,47,16,e=>[36+(e===6?20:0),164-(e===0?4:0)],[0,6])}
    `},"peca-de-prata":{largura:220,altura:160,alvo:{x:70,y:70,l:90,a:20},corpo:()=>d`
      <path class="nomedivino__prata" d="M24 40 H190 Q206 40 206 56 V112 Q206 128 190 128 H24 Z"></path>
      <ellipse class="nomedivino__prata-rolo" cx="26" cy="84" rx="14" ry="46"></ellipse>
      ${V(5,58,14,()=>[56,188],[2])}
    `},"papiro-fouad":{largura:200,altura:220,alvo:{x:88,y:96,l:40,a:16},corpo:()=>d`
      <path class="nomedivino__papiro" d="M20 22 L60 14 L92 26 L140 12 L182 30 L176 92 L188 150 L170 206 L110 196 L70 210 L24 190 L30 130 L14 80 Z"></path>
      ${V(10,42,16,e=>[32+e%2*6,166-e%3*8],[])}
      <rect class="nomedivino__lugar-do-nome" x="94" y="98" width="28" height="12" rx="2" data-alvo="sim"></rect>
    `},"rolo-qumran":{largura:260,altura:180,alvo:{x:150,y:74,l:30,a:14},corpo:()=>d`
      <rect class="nomedivino__rolo" x="30" y="20" width="200" height="140" rx="6"></rect>
      <rect class="nomedivino__rolo-vara" x="14" y="12" width="18" height="156" rx="8"></rect>
      <rect class="nomedivino__rolo-vara" x="228" y="12" width="18" height="156" rx="8"></rect>
      ${V(8,38,15,()=>[44,124],[])}
      ${V(8,38,15,()=>[138,218],[])}
      <rect class="nomedivino__lugar-do-nome" x="152" y="76" width="26" height="10" rx="2" data-alvo="sim"></rect>
    `}},Rn=null,H=new Set,U=null;function zn(){Rn=null,H=new Set,U=null}var Bn=26;function Vn(e,t,n){let{alvo:r}=e,i=Math.max(r.x,Math.min(t,r.x+r.l)),a=Math.max(r.y,Math.min(n,r.y+r.a));return(t-i)**2+(n-a)**2<=(Bn*.6)**2}function Hn(e,t,n){let r=e.currentTarget.getBoundingClientRect();if(r.width===0||r.height===0)return;let i=(e.clientX-r.left)/r.width*n.largura,a=(e.clientY-r.top)/r.height*n.altura;U={x:i,y:a},!H.has(t.id)&&Vn(n,i,a)&&Un(t.id),h()}function Un(e){H=new Set([...H,e]),h()}function Wn(e){let t=Ln[e.dados.desenho],n=H.has(e.id),{alvo:r}=t;return u`
    <h2 class="nomedivino__peca-titulo">${e.titulo}</h2>
    <p class="nomedivino__peca-quando">${e.dados.quando}</p>

    <div class="nomedivino__vitrine" data-achada=${n?`sim`:`nao`}>
      <svg
        class="nomedivino__desenho"
        viewBox=${`0 0 ${t.largura} ${t.altura}`}
        role="img"
        aria-label=${e.titulo}
        @pointermove=${n=>Hn(n,e,t)}
        @pointerdown=${n=>Hn(n,e,t)}
      >
        ${t.corpo()}
        <rect
          class="nomedivino__alvo"
          x=${r.x-4}
          y=${r.y-4}
          width=${r.l+8}
          height=${r.a+8}
          rx="6"
        ></rect>
        ${U===null||n?f:d`<circle class="nomedivino__lupa" cx=${U.x} cy=${U.y} r=${Bn}></circle>`}
      </svg>
    </div>

    ${n?u`<article class="nomedivino__peca-ficha">${b(e.texto)}</article>`:u`
          <p class="nomedivino__chamada">${p.nomedivino.museu.procure}</p>
          <div class="nomedivino__seguir">
            <kk-button outline @click=${()=>Un(e.id)}>
              <kk-icon slot="prefix" name="zoom-in"></kk-icon>${p.nomedivino.museu.mostrar}
            </kk-button>
          </div>
        `}

    <div class="nomedivino__navegacao">
      <kk-button
        outline
        @click=${()=>{Rn=null,U=null,h()}}
      >
        <kk-icon slot="prefix" name="building-bank"></kk-icon>${p.nomedivino.museu.voltar}
      </kk-button>
    </div>
  `}function Gn(e,t){let n=H.size===e.itens.length;return u`
    <p class="nomedivino__chamada">${p.nomedivino.museu.chamada}</p>
    <p class="nomedivino__conta">${p.nomedivino.museu.conta(H.size,e.itens.length)}</p>

    <ul class="nomedivino__galeria">
      ${e.itens.map(e=>{let t=Ln[e.dados.desenho];return u`<li>
          <button
            class="nomedivino__peca"
            data-vista=${H.has(e.id)?`sim`:`nao`}
            @click=${()=>{Rn=e.id,U=null,h()}}
          >
            <svg viewBox=${`0 0 ${t.largura} ${t.altura}`} aria-hidden="true" focusable="false">
              ${t.corpo()}
            </svg>
            <span class="nomedivino__peca-nome">${e.titulo}</span>
            <span class="nomedivino__peca-quando">${e.dados.quando}</span>
          </button>
        </li>`})}
    </ul>

    ${n?w(p.nomedivino.concluir,()=>t(1)):f}
  `}function Kn(e,t){let n=Rn===null?void 0:e.itens.find(e=>e.id===Rn);return n===void 0?Gn(e,t):Wn(n)}var qn={reiniciar:zn,desenhar:Kn},Jn=6,W=[],Yn=[],G=null,K=new Set,Xn=0,Zn=null;function Qn(e){W=g(e.itens).slice(0,Jn),Yn=g(W),G=null,K=new Set,Xn=0,Zn=null}function $n(e){K.has(e)||(G=G===e?null:e,Zn=null,h())}function er(e){G===null||K.has(e)||(e===G?(K=new Set([...K,e]),Zn=null):(Xn+=1,Zn=e),G=null,h())}function tr(e,t){let n=K.size===W.length;return u`
    <p class="nomedivino__chamada">${p.nomedivino.nomes.chamada}</p>
    <p class="nomedivino__conta">${p.nomedivino.nomes.conta(K.size,W.length,Xn)}</p>

    <div class="nomedivino__pares">
      <ul class="nomedivino__coluna" aria-label=${p.nomedivino.nomes.nomes}>
        ${W.map(e=>u`<li>
            <button
              class="nomedivino__par"
              aria-pressed=${G===e.id?`true`:`false`}
              data-feito=${K.has(e.id)?`sim`:`nao`}
              ?disabled=${K.has(e.id)}
              @click=${()=>$n(e.id)}
            >
              ${e.titulo}
            </button>
          </li>`)}
      </ul>
      <ul class="nomedivino__coluna" aria-label=${p.nomedivino.nomes.significados}>
        ${Yn.map(e=>u`<li>
            <button
              class="nomedivino__par nomedivino__par--significado"
              data-feito=${K.has(e.id)?`sim`:`nao`}
              data-errado=${Zn===e.id?`sim`:`nao`}
              ?disabled=${K.has(e.id)||G===null}
              @click=${()=>er(e.id)}
            >
              ${e.dados.significado}
            </button>
          </li>`)}
      </ul>
    </div>

    ${n?u`
          <ul class="nomedivino__pares-feitos">
            ${W.map(e=>u`<li class="nomedivino__luz">
                <strong>${e.titulo}</strong> — ${e.dados.significado}
                ${e.link===``?``:u`<a href=${e.link} target="_blank" rel="noopener">${p.nomedivino.lerFonte}</a>`}
              </li>`)}
          </ul>
          ${w(p.nomedivino.concluir,()=>t(ze(Xn)))}
        `:``}
  `}var nr={reiniciar:Qn,desenhar:tr},q=`quadro`,rr=0,ir=new Set;function ar(){q=`quadro`,rr=0,ir=new Set}function or(e,t){return e.itens.filter(e=>e.dados.etapa===t)}function sr(e){let t=e.itens.filter(e=>e.dados.etapa===`sabemos`||e.dados.etapa===`nao-sabemos`),n=t.slice(0,rr),r=e=>n.filter(t=>t.dados.etapa===e);return u`
    <div class="nomedivino__quadro-duplo">
      ${[`sabemos`,`nao-sabemos`].map(e=>u`
          <section class="nomedivino__coluna-quadro" data-lado=${e}>
            <h2>
              <kk-icon name=${e===`sabemos`?`circle-check`:`help-circle`}></kk-icon>
              ${e===`sabemos`?p.nomedivino.pronuncia.sabemos:p.nomedivino.pronuncia.naoSabemos}
            </h2>
            <ul>
              ${r(e).map(e=>u`<li class="nomedivino__ficha-quadro">
                  <strong>${e.titulo}</strong>
                  ${b(e.texto)}
                </li>`)}
            </ul>
          </section>
        `)}
    </div>
    ${rr<t.length?w(p.nomedivino.pronuncia.proximaFicha,()=>{rr+=1,h()}):w(p.nomedivino.proximo,()=>{q=`cartas`,h()})}
  `}function cr(e){let t=or(e,`jesus`),n=t.every(e=>ir.has(e.id));return u`
    <p class="nomedivino__chamada">${p.nomedivino.pronuncia.vireAsCartas}</p>
    <ul class="nomedivino__cartas">
      ${t.map(e=>{let t=ir.has(e.id);return u`<li>
          <button
            class="nomedivino__carta"
            data-virada=${t?`sim`:`nao`}
            aria-pressed=${t?`true`:`false`}
            @click=${()=>{ir=new Set([...ir,e.id]),h()}}
          >
            <span class="nomedivino__carta-frente">${e.dados.lingua}</span>
            <span class="nomedivino__carta-verso">
              <strong>${e.titulo}</strong>
              <small>${e.dados.lingua}</small>
            </span>
          </button>
        </li>`})}
    </ul>
    ${n?u`
          ${t.map(e=>e.texto===``?f:b(e.texto))}
          ${w(p.nomedivino.proximo,()=>{q=`conclusao`,h()})}
        `:f}
  `}function lr(e,t){return u`
    ${or(e,`conclusao`).map(e=>u`<blockquote class="nomedivino__citacao">
        <p class="nomedivino__citacao-titulo">${e.titulo}</p>
        ${b(e.texto)}
        ${e.referencia===``?f:u`<footer>${e.referencia}</footer>`}
      </blockquote>`)}
    ${w(p.nomedivino.concluir,()=>t(1))}
  `}function ur(e,t){return q===`cartas`&&or(e,`jesus`).length===0&&(q=`conclusao`),q===`quadro`?sr(e):q===`cartas`?cr(e):lr(e,t)}var dr={reiniciar:ar,desenhar:ur},fr=[],pr=[],mr=[],J=0;function hr(e){fr=g(e.itens),pr=fr.map(e=>_(e.dados.alternativas)),mr=fr.map(()=>null),J=0}function gr(e,t){let n=fr[J],r=pr[J];if(n===void 0||r===void 0)return u``;let i=fr.length,a=mr[J]??null,o=fr.filter((e,t)=>mr[t]===e.dados.correta).length;return u`
    ${C(J+1,i)}

    <figure class="nomedivino__balao nomedivino__luz">
      ${b(n.texto)}
      <figcaption>${a===null?p.nomedivino.quemDisse.quem:n.referencia}</figcaption>
    </figure>

    ${x(r,n.dados.correta,a,e=>{mr[J]===null&&(mr=mr.map((t,n)=>n===J?e:t),h())})}

    ${a===null?f:u`
          ${S(a===n.dados.correta,``)}
          ${J===i-1?w(p.nomedivino.concluir,()=>t(y(o,i))):w(p.nomedivino.proximo,()=>{J+=1,h()})}
        `}
  `}var _r={reiniciar:hr,desenhar:gr},vr=new Ce;function yr(){vr.fechar()}function br(e){return e.itens.map(e=>`<h3>${e.titulo}</h3>${e.texto}`).join(``)}function xr(e){return u`${e.itens.map(e=>u`<section class="nomedivino__leitura-bloco">
      <h3>${e.titulo}</h3>
      ${b(e.texto)}
      ${e.referencia===``?``:u`<p class="nomedivino__referencia-bloco">${e.referencia}</p>`}
    </section>`)}`}function Sr(e,t){return u`
    <div class="nomedivino__leitura-controles">
      ${vr.botaoApresentar()} ${vr.botaoFala(()=>br(e))}
    </div>

    <div class="nomedivino__leitura">${xr(e)}</div>

    ${vr.overlay(u`<div class="nomedivino__leitura">${xr(e)}</div>`,()=>br(e))}

    ${w(p.nomedivino.santificado.terminei,()=>{vr.fechar(),t(1)})}
  `}function Cr(){vr.fechar()}var wr={reiniciar:yr,desenhar:Sr},Tr=[],Er=[],Dr=0,Y=null;function Or(e){let t=g(e.itens);Er=t.slice(0,1),Tr=t.slice(1),Dr=0,Y=null}function kr(e){let t=Tr[0];if(t===void 0)return;let n=Ve(Er.map(e=>e.dados),t.dados.ano),r=e===n;r||(Dr+=1),Er=[...Er.slice(0,n),t,...Er.slice(n)],Tr=Tr.slice(1),Y={item:t,certo:r},h()}function Ar(e,t){return t?u`<li class="nomedivino__aqui">
    <button @click=${()=>kr(e)}>
      <kk-icon name="arrow-bar-to-down"></kk-icon>${p.nomedivino.seculos.aqui}
    </button>
  </li>`:f}function jr(e,t){let n=Tr[0],r=n!==void 0;return u`
    ${r?u`
          <p class="nomedivino__chamada">${p.nomedivino.seculos.chamada}</p>
          <article class="nomedivino__marco nomedivino__marco--davez">
            <strong>${n.titulo}</strong>
          </article>
        `:f}

    ${Y===null?f:u`<kk-alert open class="nomedivino__retorno" variant=${Y.certo?`success`:`warning`}>
            ${Y.certo?p.nomedivino.acertou:p.nomedivino.seculos.foiPara(Y.item.dados.quando)}
          </kk-alert>`}

    <ol class="nomedivino__linha">
      ${Ar(0,r)}
      ${Er.map((e,t)=>u`
          <li
            class="nomedivino__marco"
            data-recente=${Y?.item.id===e.id?Y.certo?`certo`:`errado`:`nao`}
          >
            <span class="nomedivino__marco-quando">${e.dados.quando}</span>
            <strong>${e.titulo}</strong>
            ${r?f:b(e.texto)}
          </li>
          ${Ar(t+1,r)}
        `)}
    </ol>

    ${r?f:w(p.nomedivino.concluir,()=>t(ze(Dr)))}
  `}var Mr={reiniciar:Or,desenhar:jr},X=0,Nr=new Set;function Pr(){X=0,Nr=new Set}function Fr(e){Nr=new Set([...Nr,e]),h()}function Ir(e){X=e,h()}function Lr(e,t){let n=e.itens.length,r=e.itens[X];if(r===void 0)return u``;let i=Nr.has(X),a=X===n-1;return u`
    <ol class="nomedivino__fio" aria-label=${p.nomedivino.passo(X+1,n)}>
      ${e.itens.map((e,t)=>u`<li
          data-aceso=${Nr.has(t)?`sim`:`nao`}
          data-atual=${t===X?`sim`:`nao`}
        ></li>`)}
    </ol>

    <article class="nomedivino__quadro" data-revelado=${i?`sim`:`nao`}>
      <h2 class="nomedivino__quadro-titulo">${r.titulo}</h2>
      ${i?u`<div class="nomedivino__quadro-texto">
              ${b(r.texto)}
              ${r.referencia===``?``:u`<p class="nomedivino__referencia-bloco">${r.referencia}</p>`}
            </div>`:u`<kk-button class="nomedivino__revelar" @click=${()=>Fr(X)}>
              <kk-icon slot="prefix" name="eye"></kk-icon>${p.nomedivino.revelar}
            </kk-button>`}
    </article>

    <div class="nomedivino__navegacao">
      <kk-button outline ?disabled=${X===0} @click=${()=>Ir(X-1)}>
        <kk-icon slot="prefix" name="arrow-left"></kk-icon>${p.nomedivino.anterior}
      </kk-button>
      ${i?a?w(p.nomedivino.concluir,()=>t(1)):w(p.nomedivino.proximo,()=>Ir(X+1)):u``}
    </div>
  `}var Rr={reiniciar:Pr,desenhar:Lr},Z=0;function zr(){Z=0}function Br(e,t){let n=e.itens.length;Z=Math.max(0,Math.min(n-1,t)),fe(p.nomedivino.passo(Z+1,n)),h()}function Vr(e,t){let n=e.itens.length,r=e.itens[Z];if(r===void 0)return u``;let i=Z===n-1;return u`
    <ol class="nomedivino__barras" aria-hidden="true">
      ${e.itens.map((e,t)=>u`<li data-estado=${t<Z?`lida`:t===Z?`atual`:`depois`}></li>`)}
    </ol>

    <article
      class="nomedivino__pagina"
      @click=${t=>{if(t.target.closest(`a`)!==null)return;let n=t.currentTarget.getBoundingClientRect(),r=t.clientX-n.left>n.width/2!=(document.documentElement.dir===`rtl`);r&&i||Br(e,Z+(r?1:-1))}}
    >
      <h2 class="nomedivino__pagina-titulo">${r.titulo}</h2>
      ${b(r.texto)}
      ${r.referencia===``?``:u`<p class="nomedivino__referencia-bloco">${r.referencia}</p>`}
    </article>

    <div class="nomedivino__navegacao">
      <kk-button outline ?disabled=${Z===0} @click=${()=>Br(e,Z-1)}>
        <kk-icon slot="prefix" name="arrow-left"></kk-icon>${p.nomedivino.anterior}
      </kk-button>
      ${i?u`<kk-button variant="primary" @click=${()=>t(1)}>
              ${p.nomedivino.concluir}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>`:u`<kk-button variant="primary" @click=${()=>Br(e,Z+1)}>
              ${p.nomedivino.virar}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>`}
    </div>
  `}var Hr={reiniciar:zr,desenhar:Vr},Q=0,Ur=[],Wr=[];function Gr(e){Q=0,Ur=e.itens.map(e=>_(e.dados.alternativas)),Wr=e.itens.map(()=>null)}function Kr(e,t){let n=e.itens[Q],r=Ur[Q];if(n===void 0||r===void 0)return u``;let i=e.itens.length,a=Wr[Q]??null,o=e.itens.filter((e,t)=>Wr[t]===e.dados.correta).length;return u`
    ${C(Q+1,i)}

    <div class="nomedivino__placa">
      <span class="nomedivino__placa-rotulo">${p.nomedivino.titulos.placa}</span>
      <span class="nomedivino__placa-nome">${e.abertura.dados.destaque}</span>
    </div>

    <div class="nomedivino__titulo-carta" data-respondida=${a===null?`nao`:`sim`}>
      <span class="nomedivino__titulo-palavra">${n.titulo}</span>
    </div>

    <p class="nomedivino__chamada">${p.nomedivino.titulos.pergunta}</p>
    ${x(r,n.dados.correta,a,e=>{Wr[Q]===null&&(Wr=Wr.map((t,n)=>n===Q?e:t),h())})}

    ${a===null?f:u`
          ${S(a===n.dados.correta,n.referencia)}
          ${b(n.texto)}
          ${Q===i-1?w(p.nomedivino.concluir,()=>t(y(o,i))):w(p.nomedivino.proximo,()=>{Q+=1,h()})}
        `}
  `}var qr={reiniciar:Gr,desenhar:Kr},Jr=[],Yr=[],Xr=[],$=0;function Zr(e){Jr=g(e.itens),Yr=Jr.map(e=>_(e.dados.alternativas)),Xr=Jr.map(()=>null),$=0}function Qr(e,t){let n=Jr[$],r=Yr[$];if(n===void 0||r===void 0)return u``;let i=Jr.length,a=Xr[$]??null,o=Jr.filter((e,t)=>Xr[t]===e.dados.correta).length,{antes:s,depois:c}=Ue(oe(n.texto),n.dados.lacuna);return u`
    ${C($+1,i)}

    <blockquote class="nomedivino__lacunado">
      <p>
        ${s}<span class="nomedivino__lacuna" data-cheia=${a===null?`nao`:`sim`}
          >${a===null?p.nomedivino.versiculos.vazio:n.dados.lacuna}</span
        >${c}
      </p>
      <footer>${a===null?``:n.titulo}</footer>
    </blockquote>

    ${x(r,n.dados.correta,a,e=>{Xr[$]===null&&(Xr=Xr.map((t,n)=>n===$?e:t),h())})}

    ${a===null?f:u`
          ${S(a===n.dados.correta,n.referencia)}
          ${$===i-1?w(p.nomedivino.concluir,()=>t(y(o,i))):w(p.nomedivino.proximo,()=>{$+=1,h()})}
        `}
  `}var $r={letras:En,significado:Rr,titulos:qr,jah:bn,contagem:tn,"quem-disse":_r,nomes:nr,versiculos:{reiniciar:Zr,desenhar:Qr},museu:qn,sumiu:Hr,pronuncia:dr,seculos:Mr,citacoes:tt,dossie:gn,linguas:Fn,conhecer:lt,santificado:wr,desafio:fn},ei=`abertura`,ti=1,ni={estado:`gravando`},ri=null;function ii(e){let t=e.args[0];if(t!==void 0)return on().capitulos.find(e=>e.chave===t)}function ai(e){let t=e.args.join(`/`);t!==ri&&(ri=t,Cr(),ei=`abertura`)}function oi(e){$r[e.chave].reiniciar(e),ei=`atividade`,h(),window.scrollTo({top:0})}function si(e,t){ti=e.ficha.estrelas?t:1,ei=`fim`,ni={estado:`gravando`},h(),window.scrollTo({top:0}),(async()=>{let t=await cn(e.chave,ti);ni=t===null?{estado:`falhou`}:{estado:`pronta`,partida:t},fe(p.nomedivino.fim.seloAnuncio),h()})()}function ci(e){let t=Fe(sn(),e.chave);return t===0?u`<span class="nomedivino__novo">${p.nomedivino.trilha.aFazer}</span>`:e.ficha.estrelas?qe(t):Je()}function li(e){let t=Fe(sn(),e.chave)>0;return u`
    <li>
      <button
        class="nomedivino__capitulo"
        data-capitulo=${e.chave}
        data-feito=${t?`sim`:`nao`}
        @click=${()=>se(`${v}/${e.chave}`)}
      >
        <span class="nomedivino__medalha" aria-hidden="true">
          <kk-icon name=${e.ficha.icone}></kk-icon>
          <span class="nomedivino__numero">${e.numero}</span>
        </span>
        <span class="nomedivino__capitulo-texto">
          <span class="nomedivino__capitulo-titulo">${e.abertura.titulo}</span>
          <span class="nomedivino__capitulo-resumo">${e.abertura.dados.resumo}</span>
        </span>
        <span class="nomedivino__capitulo-estado">${ci(e)}</span>
      </button>
    </li>
  `}function ui(e){return u`
    <section class="nomedivino__parte" data-parte=${e.chave}>
      <header class="nomedivino__parte-topo">
        <span class="nomedivino__parte-numero" aria-hidden="true">${Be(e.numero)}</span>
        <h2 class="nomedivino__parte-titulo">
          ${e.titulo}
        </h2>
      </header>
      <blockquote class="nomedivino__parte-versiculo">
        ${b(e.texto)}
        ${e.referencia===``?f:u`<footer>${e.referencia}</footer>`}
      </blockquote>
      <ol class="nomedivino__capitulos">${e.capitulos.map(li)}</ol>
    </section>
  `}function di(){let e=on();if(e.capitulos.length===0)return u`<p class="vazio">${p.nomedivino.vazio}</p>`;let t=sn(),n=Ie(e,t),r=Le(e,t),i=e.capitulos.length;return u`
    <p class="nomedivino__subtitulo">${p.nomedivino.subtitulo}</p>
    <div class="nomedivino__progresso">
      <kk-progress-bar value=${Math.round(n/i*100)}></kk-progress-bar>
      <span>${p.nomedivino.trilha.conta(n,i)}</span>
    </div>

    ${r===null?u`<p class="nomedivino__completa">${Je()}${p.nomedivino.trilha.completa}</p>`:u`<kk-button
            variant="primary"
            class="nomedivino__continuar"
            @click=${()=>se(`${v}/${r.chave}`)}
          >
            <kk-icon slot="prefix" name="player-play"></kk-icon>
            ${n===0?p.nomedivino.trilha.comecar:p.nomedivino.trilha.continuar}
          </kk-button>`}

    ${e.partes.map(ui)}
  `}function fi(e){return u`
    <div class="nomedivino__cabecalho">
      <kk-icon name=${e.ficha.icone}></kk-icon>
      <span>${p.nomedivino.capitulo(e.numero)}</span>
    </div>
  `}function pi(e){let t=Fe(sn(),e.chave);return u`
    ${fi(e)}
    <h2 class="nomedivino__titulo">${e.abertura.titulo}</h2>
    ${b(e.abertura.texto,`nomedivino__abertura`)}
    ${e.abertura.referencia===``?f:u`<p class="nomedivino__referencia-bloco">${e.abertura.referencia}</p>`}
    ${Ye(e.abertura.link,e.abertura.obra)}

    <div class="nomedivino__seguir">
      <kk-button variant="primary" @click=${()=>oi(e)}>
        <kk-icon slot="prefix" name=${t>0?`rotate`:`player-play`}></kk-icon>
        ${t>0?p.nomedivino.deNovo:p.nomedivino.comecar}
      </kk-button>
    </div>
  `}function mi(e){if(ni.estado===`gravando`)return u`<div class="carregando"><kk-spinner></kk-spinner></div>`;if(ni.estado===`falhou`)return u`<kk-alert open variant="danger">${p.nomedivino.fim.seloFalhou}</kk-alert>`;let{partida:t}=ni,n=t.bateu&&t.anterior>0&&e.ficha.estrelas;return u`
    <div class="nomedivino__conquista">
      ${Je(`nomedivino__selo--acende`)}
      <strong>
        ${t.anterior===0?p.nomedivino.fim.seloNovo:p.nomedivino.fim.seloJaTinha}
      </strong>
      ${n?u`<span>${p.nomedivino.fim.maisEstrelas}</span>`:f}
    </div>
  `}function hi(e){let t=Re(on(),e.chave),n=e.chave===`desafio`&&ti===3;return u`
    ${fi(e)}
    <h2 class="nomedivino__titulo">${e.abertura.titulo}</h2>

    ${mi(e)}
    ${e.ficha.estrelas?u`<div class="nomedivino__fim-estrelas">${qe(ti)}</div>`:f}
    ${n?u`<p class="nomedivino__completa">${p.nomedivino.fim.trilhaCompleta}</p>`:f}

    ${e.abertura.dados.fecho===``?f:b(e.abertura.dados.fecho,e.chave===`desafio`?`nomedivino__fecho nomedivino__fecho--final`:`nomedivino__fecho`)}

    <div class="jogo__controles">
      ${t===null?f:u`<kk-button variant="primary" @click=${()=>se(`${v}/${t.chave}`)}>
              ${p.nomedivino.fim.proximo}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>`}
      <kk-button outline @click=${()=>oi(e)}>
        <kk-icon slot="prefix" name="rotate"></kk-icon>${p.nomedivino.deNovo}
      </kk-button>
      <kk-button outline @click=${()=>se(v)}>
        <kk-icon slot="prefix" name="route"></kk-icon>${p.nomedivino.fim.trilha}
      </kk-button>
    </div>
  `}function gi(e){if(ei===`abertura`)return pi(e);if(ei===`fim`)return hi(e);let t=$r[e.chave];return u`
    ${fi(e)}
    ${t.desenhar(e,t=>si(e,t))}
  `}var _i={titulo(e){return ii(e)?.abertura.titulo},voltarPara(e){return e.args.length===0?`home`:v},conteudo(e){let t=an.espera();if(t!==null)return t;ai(e);let n=ii(e);return n===void 0?di():gi(n)}};export{_i as telaNomeDivino};