import{C as e,S as t,a as n,b as r,c as i,h as a,i as o,n as s,o as ee,p as te,r as ne,s as re,t as ie,v as ae,x as c,y as oe}from"./chunk.TB6E37S7-CpAr8t1b.js";import{i as l,o as u,t as d}from"./lit-CI_s7elC.js";import{n as f}from"./strings-DpAcIQPX.js";import{h as p}from"./formato-BoZO7uRM.js";import{t as se}from"./html-C5yDSNPC.js";import{r as ce}from"./rotas-CR8kk0YZ.js";import{o as le}from"./acessibilidade-0dW0_ixm.js";import{s as ue}from"./dados-DajL1VQY.js";import"./chunk.4HOXG5ZD-eln9IVGx.js";import{T as de,a as fe,c as pe,ct as m,d as me,f as he,i as ge,l as _e,o as ve,r as ye,u as be,w as xe}from"./index-DA5sF2fG.js";import{t as Se}from"./carga-M22LLosZ.js";import{t as Ce}from"./leitura-BxzqQUPY.js";import{a as we,r as Te,t as Ee}from"./recordes-Cc5YvGyu.js";import{n as h,t as g}from"./sorteio-Bln1H9Cu.js";import{t as De}from"./rascunho-CakWynKC.js";import{a as Oe,c as ke,d as Ae,f as je,i as _,l as Me,m as Ne,n as Pe,o as Fe,p as Ie,r as Le,s as Re,t as v,u as ze}from"./dados-DSTxgmlH.js";function y(e,t=``){return l`<div class="prosa ${t}">${de(e)}</div>`}function Be(e,t,n){return n===null?``:e===t?`certa`:e===n?`errada`:`apagada`}function b(e,t,n,r){return l`
    <div class="nomedivino__alternativas">
      ${e.map(e=>l`
          <button
            class="nomedivino__alternativa"
            data-original=${e.original}
            data-tom=${Be(e.original,t,n)}
            ?disabled=${n!==null}
            @click=${()=>r(e.original)}
          >
            ${e.texto}
          </button>
        `)}
    </div>
  `}function x(e,t,n){return l`
    <kk-alert open class="nomedivino__retorno" variant=${e?`success`:`warning`}>
      ${e?f.nomedivino.acertou:f.nomedivino.errou}
      ${t===``?d:l`<span class="nomedivino__referencia">— ${t}</span>`}
      ${n??d}
    </kk-alert>
  `}function S(e,t,n=f.nomedivino.passo){return l`
    <div class="nomedivino__passos">
      <span>${n(e,t)}</span>
      <kk-progress-bar value=${Math.round(e/Math.max(1,t)*100)}></kk-progress-bar>
    </div>
  `}function C(e,t,n=!0){return l`
    <div class="nomedivino__seguir">
      <kk-button variant=${n?`primary`:`default`} @click=${t}>
        ${e}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
      </kk-button>
    </div>
  `}function Ve(e){return l`
    <span class="nomedivino__estrelas" role="img" aria-label=${f.nomedivino.estrelas(e)}>
      ${[1,2,3].map(t=>l`<kk-icon
            name="star"
            variant=${t<=e?`filled`:`outline`}
            data-acesa=${t<=e?`sim`:`nao`}
          ></kk-icon>`)}
    </span>
  `}function He(e=``){return l`<kk-icon
    class="nomedivino__selo ${e}"
    variant="filled"
    name="rosette-discount-check"
    label=${f.nomedivino.comSelo}
  ></kk-icon>`}function Ue(e,t){return e===``?d:l`<p class="nomedivino__fonte">
    <a href=${e} target="_blank" rel="noopener">
      <kk-icon name="external-link"></kk-icon>${t===``?f.nomedivino.lerFonte:t}
    </a>
  </p>`}var w=[],We=[],T=[],E=0;function Ge(e){w=h(e.itens),We=w.map(e=>g(e.dados.alternativas)),T=w.map(()=>null),E=0}function Ke(e,t){let n=w[E],r=We[E];if(n===void 0||r===void 0)return l``;let i=w.length,a=T[E]??null,o=w.filter((e,t)=>T[t]===e.dados.correta).length,s=n.dados.alternativas[n.dados.correta]??``;return l`
    ${S(E+1,i)}

    <div class="nomedivino__lados" data-abertos=${a===null?`nao`:`sim`}>
      <section class="nomedivino__lado nomedivino__luz">
        <h3>${n.titulo}</h3>
        ${y(n.texto)}
      </section>
      ${a===null?d:l`<section class="nomedivino__lado nomedivino__lado--hebraico nomedivino__luz">
              <h3>${s}</h3>
              ${y(n.dados.hebraico)}
            </section>`}
    </div>

    ${a===null?l`<p class="nomedivino__chamada">${f.nomedivino.citacoes.deOnde}</p>`:d}
    ${b(r,n.dados.correta,a,e=>{T[E]===null&&(T=T.map((t,n)=>n===E?e:t),m())})}

    ${a===null?d:l`
          ${x(a===n.dados.correta,n.referencia)}
          ${E===i-1?C(f.nomedivino.concluir,()=>t(_(o,i))):C(f.nomedivino.proximo,()=>{E+=1,m()})}
        `}
  `}var qe={reiniciar:Ge,desenhar:Ke},D=0,Je=new Map;function Ye(e){return`nomedivino:${e}`}var Xe=De({origem:`nomedivino`,idDe:e=>e.id,chaveDe:e=>Ye(e.id),referenciaDe:e=>e.referencia,tituloDe:e=>`${f.modulos.nomedivino} — ${e.titulo}`,lembrete:()=>Je});async function Ze(e){let t=new Map;try{for(let e of await ue()){if(e.origem!==`nomedivino`||e.ref_chave===null)continue;let n=Number(e.ref_chave.split(`:`)[1]);Number.isFinite(n)&&t.set(n,e.conteudo)}}catch(e){console.error(`nomedivino: o Caderno não foi lido.`,e)}Je=t,Qe(e,D),m()}function Qe(e,t){D=t;let n=e.itens[D];Xe.abrir(n===void 0?``:Je.get(n.id)??``)}function $e(e){D=0,Je=new Map,Xe.abrir(``),Ze(e)}function et(e,t){let n=e.itens[D];if(n===void 0)return l``;let r=e.itens.length,i=D===r-1;return l`
    ${S(D+1,r)}

    <article class="nomedivino__meditacao">
      <h2 class="nomedivino__meditacao-pergunta">${n.titulo}</h2>
      ${y(n.texto)}
      ${n.referencia===``?``:l`<p class="nomedivino__referencia-bloco">${n.referencia}</p>`}
    </article>

    ${Xe.campo({item:n,id:`nomedivino-reflexao`,rotulo:f.nomedivino.conhecer.escreva,placeholder:f.nomedivino.conhecer.placeholder})}

    <div class="nomedivino__navegacao">
      <kk-button
        outline
        ?disabled=${D===0}
        @click=${()=>{Qe(e,D-1),m()}}
      >
        <kk-icon slot="prefix" name="arrow-left"></kk-icon>${f.nomedivino.anterior}
      </kk-button>
      ${i?C(f.nomedivino.concluir,()=>t(1)):C(f.nomedivino.proximo,()=>{Qe(e,D+1),m()})}
    </div>
  `}var tt={reiniciar:$e,desenhar:et},nt=a`
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
`,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,O,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,k=class extends (wt=ee,Ct=[re(`.range__control`)],St=[re(`.range__tooltip`)],xt=[ne()],bt=[ne()],yt=[n()],vt=[n()],_t=[n({type:Number})],gt=[n()],ht=[n({attribute:`help-text`})],mt=[n({type:Boolean,reflect:!0})],pt=[n({type:Number})],ft=[n({type:Number})],dt=[n({type:Number})],ut=[n()],lt=[n({attribute:!1})],ct=[n({reflect:!0,converter:be})],st=[s()],ot=[o({passive:!0})],at=[ie(`value`,{waitUntilFirstUpdate:!0})],it=[ie(`disabled`,{waitUntilFirstUpdate:!0})],rt=[ie(`hasTooltip`,{waitUntilFirstUpdate:!0})],wt){constructor(){super(...arguments),r(O,5,this),t(this,`validade`,new ve(this,{interacaoEm:[`kk-input`]})),t(this,`hasSlotController`,new pe(this,`help-text`,`label`)),t(this,`localize`,new he(this)),t(this,`resizeObserver`),e(this,Tt,r(O,8,this)),r(O,11,this),e(this,Et,r(O,12,this)),r(O,15,this),e(this,Dt,r(O,16,this,!1)),r(O,19,this),e(this,Ot,r(O,20,this,!1)),r(O,23,this),e(this,kt,r(O,24,this,``)),r(O,27,this),e(this,At,r(O,28,this,``)),r(O,31,this),e(this,jt,r(O,32,this,0)),r(O,35,this),e(this,Mt,r(O,36,this,``)),r(O,39,this),e(this,Nt,r(O,40,this,``)),r(O,43,this),e(this,Pt,r(O,44,this,!1)),r(O,47,this),e(this,Ft,r(O,48,this,0)),r(O,51,this),e(this,It,r(O,52,this,100)),r(O,55,this),e(this,Lt,r(O,56,this,1)),r(O,59,this),e(this,Rt,r(O,60,this,`top`)),r(O,63,this),e(this,zt,r(O,64,this,e=>e.toString())),r(O,67,this),e(this,Bt,r(O,68,this,``)),r(O,71,this),t(this,`defaultValue`,r(O,72,this,0)),r(O,75,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this._internals.setFormValue(String(this.value)),this.updateValidity()}firstUpdated(){this._internals.setFormValue(String(this.value)),this.updateValidity()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this.input)}handleChange(){this.emit(`kk-change`)}handleInput(){this.value=Number.parseFloat(this.input.value),this.emit(`kk-input`),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit(`kk-focus`)}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty(`--kk-range-percent`,`${e*100}%`)}syncTooltip(e){if(this.output!==null){let t=this.input.offsetWidth,n=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue(`--kk-range-thumb-size`),i=this.localize.dir()===`rtl`,a=t*e;if(i){let i=`${t-a}px + ${e} * ${r}`;this.output.style.translate=`calc((${i} - ${n/2}px - ${r} / 2))`}else{let t=`${a}px - ${e} * ${r}`;this.output.style.translate=`calc(${t} - ${n/2}px + ${r} / 2)`}}}handleValueChange(){this.input.value=this.value.toString(),this.value=Number.parseFloat(this.input.value),this._internals.setFormValue(String(this.value)),this.updateValidity(),this.syncRange()}handleDisabledChange(){this.input.disabled=this.disabled,this.updateValidity()}syncRange(){let e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!==`none`&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.input.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,fe(this.input),this.input)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return te`
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
            ${this.tooltip!==`none`&&!this.disabled?te`
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
    `}};O=oe(wt),Tt=new WeakMap,Et=new WeakMap,Dt=new WeakMap,Ot=new WeakMap,kt=new WeakMap,At=new WeakMap,jt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap,It=new WeakMap,Lt=new WeakMap,Rt=new WeakMap,zt=new WeakMap,Bt=new WeakMap,c(O,4,`input`,Ct,k,Tt),c(O,4,`output`,St,k,Et),c(O,4,`hasFocus`,xt,k,Dt),c(O,4,`hasTooltip`,bt,k,Ot),c(O,4,`title`,yt,k,kt),c(O,4,`name`,vt,k,At),c(O,4,`value`,_t,k,jt),c(O,4,`label`,gt,k,Mt),c(O,4,`helpText`,ht,k,Nt),c(O,4,`disabled`,mt,k,Pt),c(O,4,`min`,pt,k,Ft),c(O,4,`max`,ft,k,It),c(O,4,`step`,dt,k,Lt),c(O,4,`tooltip`,ut,k,Rt),c(O,4,`tooltipFormatter`,lt,k,zt),c(O,4,`form`,ct,k,Bt),c(O,1,`handleThumbDragStart`,ot,k),c(O,1,`handleValueChange`,at,k),c(O,1,`handleDisabledChange`,it,k),c(O,1,`syncRange`,rt,k),c(O,5,`defaultValue`,st,k),ae(O,k),t(k,`styles`,[i,ye,nt]),t(k,`formAssociated`,!0),k.define(`kk-range`);var Vt=1e4,A=3e3,Ht=!1,j=0;function Ut(){A=3e3,Ht=!1,j=0}function Wt(e){return e.itens.find(e=>e.dados.estimar)??e.itens.reduce((e,t)=>t.dados.valor>e.dados.valor?t:e)}function Gt(e){let t=!le();return l`
    <div class="nomedivino__grade" aria-hidden="true" data-animar=${t?`sim`:`nao`}>
      ${Array.from({length:Me(e)},(e,t)=>l`<span style=${`--i: ${t}`}></span>`)}
    </div>
  `}function Kt(e,t){let n=Wt(e),r=e.itens.filter(e=>e!==n);if(!Ht)return l`
      <h2 class="nomedivino__contagem-pergunta">${n.titulo}</h2>
      <p class="nomedivino__chamada">${f.nomedivino.contagem.estime}</p>
      <output class="nomedivino__palpite">${p(A)}</output>
      <kk-range
        class="nomedivino__regua"
        min="0"
        max=${Vt}
        step="50"
        .value=${A}
        label=${f.nomedivino.contagem.seuPalpite}
        tooltip="none"
        @kk-input=${e=>{A=Number(e.target.value),m()}}
      ></kk-range>
      ${C(f.nomedivino.contagem.revelar,()=>{Ht=!0,m()})}
    `;let i=j===0?void 0:r[j-1],a=Math.abs(A-n.dados.valor);return l`
    <h2 class="nomedivino__contagem-numero">${p(n.dados.valor)}</h2>
    <p class="nomedivino__contagem-rotulo">${n.titulo}</p>
    <p class="nomedivino__contagem-palpite">
      ${f.nomedivino.contagem.voceDisse(p(A),p(a))}
    </p>

    ${Gt(n.dados.valor)}
    <p class="nomedivino__legenda">${f.nomedivino.contagem.legenda(p(10))}</p>

    ${j===0?y(n.texto):d}
    ${i===void 0?d:l`<article class="nomedivino__comparado">
            <h3>
              <span class="nomedivino__comparado-numero">${p(i.dados.valor)}</span>
              ${i.titulo}
            </h3>
            ${Gt(i.dados.valor)}
            ${y(i.texto)}
          </article>`}

    ${j<r.length?C(f.nomedivino.contagem.comparar,()=>{j+=1,m()}):C(f.nomedivino.concluir,()=>t(1))}
  `}var qt={reiniciar:Ut,desenhar:Kt},Jt={partes:[],capitulos:[],perguntas:[]},Yt=[],Xt=new Se(v,async()=>{let[e,t]=await Promise.all([Pe(),Te(v)]);Jt=Re(e),Yt=t});function Zt(){return Jt}function Qt(){return Yt}async function $t(e,t){try{let n=await we({jogo:v,modo:e,nivel:1},t);return Yt=Ee(Yt,n.recorde),n}catch(e){return console.error(`nomedivino: o fim do capítulo não foi gravado.`,e),null}}var M=[],en=[],N=[],P=0;function tn(){M=Ne(Zt().perguntas),en=M.map(e=>g(e.escolha.alternativas)),N=M.map(()=>null),P=0}function nn(e,t){let n=M[P],r=en[P];if(n===void 0||r===void 0)return l``;let i=M.length,a=N[P]??null,o=M.filter((e,t)=>N[t]===e.escolha.correta).length;return l`
    ${S(P+1,i,f.nomedivino.desafio.pergunta)}
    <h2 class="nomedivino__enunciado">${n.titulo}</h2>

    ${b(r,n.escolha.correta,a,e=>{N[P]===null&&(N=N.map((t,n)=>n===P?e:t),m())})}

    ${a===null?d:l`
          ${x(a===n.escolha.correta,n.referencia)}
          ${P===i-1?C(f.nomedivino.desafio.verResultado,()=>t(_(o,i))):C(f.nomedivino.proximo,()=>{P+=1,m()})}
        `}
  `}var rn={reiniciar:tn,desenhar:nn},F=null,I=new Set;function an(){F=null,I=new Set}function on(e){F=F===e?null:e,I=new Set([...I,e]),m()}function sn(e,t){let n=e.itens.every(e=>I.has(e.id)),r=e.itens.find(e=>e.id===F);return l`
    <p class="nomedivino__chamada">${f.nomedivino.dossie.chamada}</p>
    <p class="nomedivino__conta">${f.nomedivino.dossie.conta(I.size,e.itens.length)}</p>

    <ul class="nomedivino__pastas">
      ${e.itens.map((e,t)=>l`<li>
          <button
            class="nomedivino__pasta"
            aria-expanded=${F===e.id?`true`:`false`}
            data-lida=${I.has(e.id)?`sim`:`nao`}
            @click=${()=>on(e.id)}
          >
            <kk-icon name=${F===e.id?`folder-open`:`folder`}></kk-icon>
            <span class="nomedivino__pasta-numero">${t+1}</span>
            <span class="nomedivino__pasta-aba">${e.titulo}</span>
          </button>
        </li>`)}
    </ul>

    ${r===void 0?d:l`<article class="nomedivino__folha" aria-live="polite">
            <h2>${r.titulo}</h2>
            ${y(r.texto)}
            ${r.referencia===``?d:l`<p class="nomedivino__referencia-bloco">${r.referencia}</p>`}
          </article>`}

    ${n?C(f.nomedivino.concluir,()=>t(1)):d}
  `}var cn={reiniciar:an,desenhar:sn},ln=!1,un=0;function dn(){ln=!1,un=0}function fn(e,t){let{destaque:n,sentido:r}=e.abertura.dados,i=e.itens.length;return l`
    <div class="nomedivino__palavra" data-aberta=${ln?`sim`:`nao`}>
      <span class="nomedivino__palavra-fechada">${n}</span>
      ${ln?l`<span class="nomedivino__palavra-sentido">${r}</span>`:d}
    </div>

    ${ln?l`
          <ol class="nomedivino__versiculos">
            ${e.itens.slice(0,un).map(e=>l`<li class="nomedivino__versiculo nomedivino__luz">
                <h3 class="nomedivino__versiculo-ref">${e.titulo}</h3>
                ${y(e.texto)}
              </li>`)}
          </ol>
          ${un<i?C(f.nomedivino.jah.outro(i-un),()=>{un+=1,m()}):C(f.nomedivino.concluir,()=>t(1))}
        `:l`<div class="nomedivino__seguir">
            <kk-button
              variant="primary"
              @click=${()=>{ln=!0,un=1,m()}}
            >
              <kk-icon slot="prefix" name="sparkles"></kk-icon>${f.nomedivino.jah.abrir}
            </kk-button>
          </div>`}
  `}var pn={reiniciar:dn,desenhar:fn},mn={י:[`M44 34 H56 Q62 34 62 41 V64`],ה:[`M16 34 H78 Q86 34 86 43 V118`,`M28 66 V118`],ו:[`M40 34 H54 Q60 34 60 41 V118`]},L=0;function hn(){L=0}function gn(e,t){let n=mn[e];return n===void 0?l`<span class="nomedivino__letra-texto" lang="he" dir="rtl">${e}</span>`:l`
    <svg class="nomedivino__letra-svg" viewBox="0 0 100 140" aria-hidden="true" focusable="false">
      ${n.map((e,n)=>u`<path
          d=${e}
          pathLength="1"
          style=${`--traco: ${n}; --letra: ${t}`}
        ></path>`)}
    </svg>
  `}function _n(e){if(L>=e.itens.length)return;L+=1;let t=e.itens[L-1];t!==void 0&&xe(f.nomedivino.letras.anuncio(t.dados.nome,t.dados.consoante)),m()}function vn(e,t){let n=e.itens.length,r=L===0?void 0:e.itens[L-1],i=L===n;return l`
    <div class="nomedivino__pergaminho" data-prontas=${i?`sim`:`nao`}>
      <div class="nomedivino__tetragrama" dir="rtl">
        ${e.itens.map((e,t)=>l`
            <span
              class="nomedivino__letra"
              data-escrita=${t<L?`sim`:`nao`}
              aria-hidden=${t<L?`false`:`true`}
            >
              ${t<L?gn(e.dados.letra,t):d}
            </span>
          `)}
      </div>
      ${i?l`<p class="nomedivino__consoantes" dir="ltr">
              ${e.itens.map(e=>e.dados.consoante).join(``)}
            </p>`:d}
    </div>

    ${r===void 0?l`<p class="nomedivino__chamada">${f.nomedivino.letras.comecar}</p>`:l`
          <article class="nomedivino__ficha-letra">
            <header>
              <span class="nomedivino__letra-pequena" lang="he" dir="rtl">${r.dados.letra}</span>
              <span class="nomedivino__letra-nome">${r.dados.nome}</span>
              <span class="nomedivino__letra-som">${f.nomedivino.letras.consoante(r.dados.consoante)}</span>
            </header>
            ${y(r.texto)}
          </article>
        `}

    ${i?C(f.nomedivino.concluir,()=>t(1)):l`<div class="nomedivino__seguir">
            <kk-button variant="primary" @click=${()=>_n(e)}>
              <kk-icon slot="prefix" name="writing"></kk-icon>
              ${L===0?f.nomedivino.letras.primeira:f.nomedivino.letras.proxima}
            </kk-button>
          </div>`}
  `}var yn={reiniciar:hn,desenhar:vn},bn=5,R=new Set,xn=[],z=[],B=0,Sn=!1;function Cn(e){return h(e).slice(0,bn).map(t=>{let n=h([...new Set(e.map(e=>e.dados.lingua))].filter(e=>e!==t.dados.lingua)).slice(0,2);return{item:t,alternativas:g([t.dados.lingua,...n])}})}function wn(e){R=new Set,xn=Cn(e.itens),z=xn.map(()=>null),B=0,Sn=!1}function Tn(e){let t=e.itens.every(e=>R.has(e.id));return l`
    <p class="nomedivino__chamada">${f.nomedivino.linguas.chamada}</p>
    <ul class="nomedivino__mosaico">
      ${e.itens.map(e=>{let t=R.has(e.id);return l`<li>
          <button
            class="nomedivino__ladrilho"
            aria-pressed=${t?`true`:`false`}
            @click=${()=>{R=new Set([...R,e.id]),m()}}
          >
            <span class="nomedivino__ladrilho-forma" dir="auto">${e.titulo}</span>
            <span class="nomedivino__ladrilho-lingua">${t?e.dados.lingua:`?`}</span>
          </button>
        </li>`})}
    </ul>
    ${t?C(f.nomedivino.linguas.desafiar,()=>{Sn=!0,m()}):l`<p class="nomedivino__conta">${f.nomedivino.linguas.faltam(e.itens.length-R.size)}</p>`}
  `}function En(e){let t=xn[B];if(t===void 0)return l``;let n=xn.length,r=z[B]??null,i=z.filter(e=>e===0).length;return l`
    ${S(B+1,n)}
    <p class="nomedivino__chamada">${f.nomedivino.linguas.qualLingua}</p>
    <p class="nomedivino__forma-parada nomedivino__luz" dir="auto">${t.item.titulo}</p>

    ${b(t.alternativas,0,r,e=>{z[B]===null&&(z=z.map((t,n)=>n===B?e:t),m())})}

    ${r===null?d:l`
          ${x(r===0,``)}
          ${B===n-1?C(f.nomedivino.concluir,()=>e(_(i,n))):C(f.nomedivino.proximo,()=>{B+=1,m()})}
        `}
  `}function Dn(e,t){return Sn?En(t):Tn(e)}var On={reiniciar:wn,desenhar:Dn};function kn(e,t,n,r,i=!1){let a=Math.max(2,Math.round((t-e)/14)),o=`M${e} ${n}`;for(let i=1;i<=a;i++){let s=e+(t-e)*i/a,ee=(r*7+i*13)%5-2;o+=` Q${s-(t-e)/a/2} ${n+ee} ${s} ${n}`}return u`<path class="nomedivino__escrita" d=${o} data-alvo=${i?`sim`:`nao`}></path>`}function V(e,t,n,r,i){return Array.from({length:e},(a,o)=>{let[s,ee]=r(o);return kn(s,ee,t+o*n,o+e,i.includes(o))})}var An={"pedra-moabita":{largura:200,altura:260,alvo:{x:20,y:140,l:160,a:12},corpo:()=>u`
      <path class="nomedivino__pedra" d="M18 252 V70 Q18 14 100 12 Q182 14 182 70 V252 Z"></path>
      ${V(34,40,6.2,e=>e<4?[44-e*6,156+e*6]:[26,174],[17])}
    `},caverna:{largura:220,altura:200,alvo:{x:58,y:104,l:104,a:16},corpo:()=>u`
      <path class="nomedivino__rocha" d="M6 196 V90 Q14 18 110 12 Q206 18 214 90 V196 Z"></path>
      <path class="nomedivino__sombra" d="M40 196 V120 Q46 70 110 66 Q174 70 180 120 V196 Z"></path>
      <rect class="nomedivino__placa-pedra" x="50" y="84" width="120" height="56" rx="4"></rect>
      ${V(3,96,16,()=>[60,160],[1])}
    `},"carta-laquis":{largura:200,altura:200,alvo:{x:30,y:62,l:140,a:30},corpo:()=>u`
      <path class="nomedivino__caco" d="M22 34 L74 14 L150 22 L186 70 L176 150 L120 190 L46 180 L12 118 Z"></path>
      ${V(9,48,15,e=>[30+e%3*3,168-(e>6?30:0)],[1,2])}
    `},"ostraco-arade":{largura:200,altura:180,alvo:{x:34,y:40,l:132,a:14},corpo:()=>u`
      <path class="nomedivino__caco" d="M30 24 L116 10 L184 46 L178 128 L110 172 L28 150 L14 80 Z"></path>
      ${V(7,47,16,e=>[36+(e===6?20:0),164-(e===0?4:0)],[0,6])}
    `},"peca-de-prata":{largura:220,altura:160,alvo:{x:70,y:70,l:90,a:20},corpo:()=>u`
      <path class="nomedivino__prata" d="M24 40 H190 Q206 40 206 56 V112 Q206 128 190 128 H24 Z"></path>
      <ellipse class="nomedivino__prata-rolo" cx="26" cy="84" rx="14" ry="46"></ellipse>
      ${V(5,58,14,()=>[56,188],[2])}
    `},"papiro-fouad":{largura:200,altura:220,alvo:{x:88,y:96,l:40,a:16},corpo:()=>u`
      <path class="nomedivino__papiro" d="M20 22 L60 14 L92 26 L140 12 L182 30 L176 92 L188 150 L170 206 L110 196 L70 210 L24 190 L30 130 L14 80 Z"></path>
      ${V(10,42,16,e=>[32+e%2*6,166-e%3*8],[])}
      <rect class="nomedivino__lugar-do-nome" x="94" y="98" width="28" height="12" rx="2" data-alvo="sim"></rect>
    `},"rolo-qumran":{largura:260,altura:180,alvo:{x:150,y:74,l:30,a:14},corpo:()=>u`
      <rect class="nomedivino__rolo" x="30" y="20" width="200" height="140" rx="6"></rect>
      <rect class="nomedivino__rolo-vara" x="14" y="12" width="18" height="156" rx="8"></rect>
      <rect class="nomedivino__rolo-vara" x="228" y="12" width="18" height="156" rx="8"></rect>
      ${V(8,38,15,()=>[44,124],[])}
      ${V(8,38,15,()=>[138,218],[])}
      <rect class="nomedivino__lugar-do-nome" x="152" y="76" width="26" height="10" rx="2" data-alvo="sim"></rect>
    `}},jn=null,H=new Set,U=null;function Mn(){jn=null,H=new Set,U=null}var Nn=26;function Pn(e,t,n){let{alvo:r}=e,i=Math.max(r.x,Math.min(t,r.x+r.l)),a=Math.max(r.y,Math.min(n,r.y+r.a));return(t-i)**2+(n-a)**2<=(Nn*.6)**2}function Fn(e,t,n){let r=e.currentTarget.getBoundingClientRect();if(r.width===0||r.height===0)return;let i=(e.clientX-r.left)/r.width*n.largura,a=(e.clientY-r.top)/r.height*n.altura;U={x:i,y:a},!H.has(t.id)&&Pn(n,i,a)&&In(t.id),m()}function In(e){H=new Set([...H,e]),m()}function Ln(e){let t=An[e.dados.desenho],n=H.has(e.id),{alvo:r}=t;return l`
    <h2 class="nomedivino__peca-titulo">${e.titulo}</h2>
    <p class="nomedivino__peca-quando">${e.dados.quando}</p>

    <div class="nomedivino__vitrine" data-achada=${n?`sim`:`nao`}>
      <svg
        class="nomedivino__desenho"
        viewBox=${`0 0 ${t.largura} ${t.altura}`}
        role="img"
        aria-label=${e.titulo}
        @pointermove=${n=>Fn(n,e,t)}
        @pointerdown=${n=>Fn(n,e,t)}
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
        ${U===null||n?d:u`<circle class="nomedivino__lupa" cx=${U.x} cy=${U.y} r=${Nn}></circle>`}
      </svg>
    </div>

    ${n?l`<article class="nomedivino__peca-ficha">${y(e.texto)}</article>`:l`
          <p class="nomedivino__chamada">${f.nomedivino.museu.procure}</p>
          <div class="nomedivino__seguir">
            <kk-button outline @click=${()=>In(e.id)}>
              <kk-icon slot="prefix" name="zoom-in"></kk-icon>${f.nomedivino.museu.mostrar}
            </kk-button>
          </div>
        `}

    <div class="nomedivino__navegacao">
      <kk-button
        outline
        @click=${()=>{jn=null,U=null,m()}}
      >
        <kk-icon slot="prefix" name="building-bank"></kk-icon>${f.nomedivino.museu.voltar}
      </kk-button>
    </div>
  `}function Rn(e,t){let n=H.size===e.itens.length;return l`
    <p class="nomedivino__chamada">${f.nomedivino.museu.chamada}</p>
    <p class="nomedivino__conta">${f.nomedivino.museu.conta(H.size,e.itens.length)}</p>

    <ul class="nomedivino__galeria">
      ${e.itens.map(e=>{let t=An[e.dados.desenho];return l`<li>
          <button
            class="nomedivino__peca"
            data-vista=${H.has(e.id)?`sim`:`nao`}
            @click=${()=>{jn=e.id,U=null,m()}}
          >
            <svg viewBox=${`0 0 ${t.largura} ${t.altura}`} aria-hidden="true" focusable="false">
              ${t.corpo()}
            </svg>
            <span class="nomedivino__peca-nome">${e.titulo}</span>
            <span class="nomedivino__peca-quando">${e.dados.quando}</span>
          </button>
        </li>`})}
    </ul>

    ${n?C(f.nomedivino.concluir,()=>t(1)):d}
  `}function zn(e,t){let n=jn===null?void 0:e.itens.find(e=>e.id===jn);return n===void 0?Rn(e,t):Ln(n)}var Bn={reiniciar:Mn,desenhar:zn},Vn=6,W=[],Hn=[],G=null,K=new Set,Un=0,Wn=null;function Gn(e){W=h(e.itens).slice(0,Vn),Hn=h(W),G=null,K=new Set,Un=0,Wn=null}function Kn(e){K.has(e)||(G=G===e?null:e,Wn=null,m())}function qn(e){G===null||K.has(e)||(e===G?(K=new Set([...K,e]),Wn=null):(Un+=1,Wn=e),G=null,m())}function Jn(e,t){let n=K.size===W.length;return l`
    <p class="nomedivino__chamada">${f.nomedivino.nomes.chamada}</p>
    <p class="nomedivino__conta">${f.nomedivino.nomes.conta(K.size,W.length,Un)}</p>

    <div class="nomedivino__pares">
      <ul class="nomedivino__coluna" aria-label=${f.nomedivino.nomes.nomes}>
        ${W.map(e=>l`<li>
            <button
              class="nomedivino__par"
              aria-pressed=${G===e.id?`true`:`false`}
              data-feito=${K.has(e.id)?`sim`:`nao`}
              ?disabled=${K.has(e.id)}
              @click=${()=>Kn(e.id)}
            >
              ${e.titulo}
            </button>
          </li>`)}
      </ul>
      <ul class="nomedivino__coluna" aria-label=${f.nomedivino.nomes.significados}>
        ${Hn.map(e=>l`<li>
            <button
              class="nomedivino__par nomedivino__par--significado"
              data-feito=${K.has(e.id)?`sim`:`nao`}
              data-errado=${Wn===e.id?`sim`:`nao`}
              ?disabled=${K.has(e.id)||G===null}
              @click=${()=>qn(e.id)}
            >
              ${e.dados.significado}
            </button>
          </li>`)}
      </ul>
    </div>

    ${n?l`
          <ul class="nomedivino__pares-feitos">
            ${W.map(e=>l`<li class="nomedivino__luz">
                <strong>${e.titulo}</strong> — ${e.dados.significado}
                ${e.link===``?``:l`<a href=${e.link} target="_blank" rel="noopener">${f.nomedivino.lerFonte}</a>`}
              </li>`)}
          </ul>
          ${C(f.nomedivino.concluir,()=>t(Oe(Un)))}
        `:``}
  `}var Yn={reiniciar:Gn,desenhar:Jn},q=`quadro`,Xn=0,Zn=new Set;function Qn(){q=`quadro`,Xn=0,Zn=new Set}function $n(e,t){return e.itens.filter(e=>e.dados.etapa===t)}function er(e){let t=e.itens.filter(e=>e.dados.etapa===`sabemos`||e.dados.etapa===`nao-sabemos`),n=t.slice(0,Xn),r=e=>n.filter(t=>t.dados.etapa===e);return l`
    <div class="nomedivino__quadro-duplo">
      ${[`sabemos`,`nao-sabemos`].map(e=>l`
          <section class="nomedivino__coluna-quadro" data-lado=${e}>
            <h2>
              <kk-icon name=${e===`sabemos`?`circle-check`:`help-circle`}></kk-icon>
              ${e===`sabemos`?f.nomedivino.pronuncia.sabemos:f.nomedivino.pronuncia.naoSabemos}
            </h2>
            <ul>
              ${r(e).map(e=>l`<li class="nomedivino__ficha-quadro">
                  <strong>${e.titulo}</strong>
                  ${y(e.texto)}
                </li>`)}
            </ul>
          </section>
        `)}
    </div>
    ${Xn<t.length?C(f.nomedivino.pronuncia.proximaFicha,()=>{Xn+=1,m()}):C(f.nomedivino.proximo,()=>{q=`cartas`,m()})}
  `}function tr(e){let t=$n(e,`jesus`),n=t.every(e=>Zn.has(e.id));return l`
    <p class="nomedivino__chamada">${f.nomedivino.pronuncia.vireAsCartas}</p>
    <ul class="nomedivino__cartas">
      ${t.map(e=>{let t=Zn.has(e.id);return l`<li>
          <button
            class="nomedivino__carta"
            data-virada=${t?`sim`:`nao`}
            aria-pressed=${t?`true`:`false`}
            @click=${()=>{Zn=new Set([...Zn,e.id]),m()}}
          >
            <span class="nomedivino__carta-frente">${e.dados.lingua}</span>
            <span class="nomedivino__carta-verso">
              <strong>${e.titulo}</strong>
              <small>${e.dados.lingua}</small>
            </span>
          </button>
        </li>`})}
    </ul>
    ${n?l`
          ${t.map(e=>e.texto===``?d:y(e.texto))}
          ${C(f.nomedivino.proximo,()=>{q=`conclusao`,m()})}
        `:d}
  `}function nr(e,t){return l`
    ${$n(e,`conclusao`).map(e=>l`<blockquote class="nomedivino__citacao">
        <p class="nomedivino__citacao-titulo">${e.titulo}</p>
        ${y(e.texto)}
        ${e.referencia===``?d:l`<footer>${e.referencia}</footer>`}
      </blockquote>`)}
    ${C(f.nomedivino.concluir,()=>t(1))}
  `}function rr(e,t){return q===`cartas`&&$n(e,`jesus`).length===0&&(q=`conclusao`),q===`quadro`?er(e):q===`cartas`?tr(e):nr(e,t)}var ir={reiniciar:Qn,desenhar:rr},ar=[],or=[],sr=[],J=0;function cr(e){ar=h(e.itens),or=ar.map(e=>g(e.dados.alternativas)),sr=ar.map(()=>null),J=0}function lr(e,t){let n=ar[J],r=or[J];if(n===void 0||r===void 0)return l``;let i=ar.length,a=sr[J]??null,o=ar.filter((e,t)=>sr[t]===e.dados.correta).length;return l`
    ${S(J+1,i)}

    <figure class="nomedivino__balao nomedivino__luz">
      ${y(n.texto)}
      <figcaption>${a===null?f.nomedivino.quemDisse.quem:n.referencia}</figcaption>
    </figure>

    ${b(r,n.dados.correta,a,e=>{sr[J]===null&&(sr=sr.map((t,n)=>n===J?e:t),m())})}

    ${a===null?d:l`
          ${x(a===n.dados.correta,``)}
          ${J===i-1?C(f.nomedivino.concluir,()=>t(_(o,i))):C(f.nomedivino.proximo,()=>{J+=1,m()})}
        `}
  `}var ur={reiniciar:cr,desenhar:lr},dr=new Ce;function fr(){dr.fechar()}function pr(e){return e.itens.map(e=>`<h3>${e.titulo}</h3>${e.texto}`).join(``)}function mr(e){return l`${e.itens.map(e=>l`<section class="nomedivino__leitura-bloco">
      <h3>${e.titulo}</h3>
      ${y(e.texto)}
      ${e.referencia===``?``:l`<p class="nomedivino__referencia-bloco">${e.referencia}</p>`}
    </section>`)}`}function hr(e,t){return l`
    <div class="nomedivino__leitura-controles">
      ${dr.botaoApresentar()} ${dr.botaoFala(()=>pr(e))}
    </div>

    <div class="nomedivino__leitura">${mr(e)}</div>

    ${dr.overlay(l`<div class="nomedivino__leitura">${mr(e)}</div>`,()=>pr(e))}

    ${C(f.nomedivino.santificado.terminei,()=>{dr.fechar(),t(1)})}
  `}function gr(){dr.fechar()}var _r={reiniciar:fr,desenhar:hr},vr=[],yr=[],br=0,Y=null;function xr(e){let t=h(e.itens);yr=t.slice(0,1),vr=t.slice(1),br=0,Y=null}function Sr(e){let t=vr[0];if(t===void 0)return;let n=Fe(yr.map(e=>e.dados),t.dados.ano),r=e===n;r||(br+=1),yr=[...yr.slice(0,n),t,...yr.slice(n)],vr=vr.slice(1),Y={item:t,certo:r},m()}function Cr(e,t){return t?l`<li class="nomedivino__aqui">
    <button @click=${()=>Sr(e)}>
      <kk-icon name="arrow-bar-to-down"></kk-icon>${f.nomedivino.seculos.aqui}
    </button>
  </li>`:d}function wr(e,t){let n=vr[0],r=n!==void 0;return l`
    ${r?l`
          <p class="nomedivino__chamada">${f.nomedivino.seculos.chamada}</p>
          <article class="nomedivino__marco nomedivino__marco--davez">
            <strong>${n.titulo}</strong>
          </article>
        `:d}

    ${Y===null?d:l`<kk-alert open class="nomedivino__retorno" variant=${Y.certo?`success`:`warning`}>
            ${Y.certo?f.nomedivino.acertou:f.nomedivino.seculos.foiPara(Y.item.dados.quando)}
          </kk-alert>`}

    <ol class="nomedivino__linha">
      ${Cr(0,r)}
      ${yr.map((e,t)=>l`
          <li
            class="nomedivino__marco"
            data-recente=${Y?.item.id===e.id?Y.certo?`certo`:`errado`:`nao`}
          >
            <span class="nomedivino__marco-quando">${e.dados.quando}</span>
            <strong>${e.titulo}</strong>
            ${r?d:y(e.texto)}
          </li>
          ${Cr(t+1,r)}
        `)}
    </ol>

    ${r?d:C(f.nomedivino.concluir,()=>t(Oe(br)))}
  `}var Tr={reiniciar:xr,desenhar:wr},X=0,Er=new Set;function Dr(){X=0,Er=new Set}function Or(e){Er=new Set([...Er,e]),m()}function kr(e){X=e,m()}function Ar(e,t){let n=e.itens.length,r=e.itens[X];if(r===void 0)return l``;let i=Er.has(X),a=X===n-1;return l`
    <ol class="nomedivino__fio" aria-label=${f.nomedivino.passo(X+1,n)}>
      ${e.itens.map((e,t)=>l`<li
          data-aceso=${Er.has(t)?`sim`:`nao`}
          data-atual=${t===X?`sim`:`nao`}
        ></li>`)}
    </ol>

    <article class="nomedivino__quadro" data-revelado=${i?`sim`:`nao`}>
      <h2 class="nomedivino__quadro-titulo">${r.titulo}</h2>
      ${i?l`<div class="nomedivino__quadro-texto">
              ${y(r.texto)}
              ${r.referencia===``?``:l`<p class="nomedivino__referencia-bloco">${r.referencia}</p>`}
            </div>`:l`<kk-button class="nomedivino__revelar" @click=${()=>Or(X)}>
              <kk-icon slot="prefix" name="eye"></kk-icon>${f.nomedivino.revelar}
            </kk-button>`}
    </article>

    <div class="nomedivino__navegacao">
      <kk-button outline ?disabled=${X===0} @click=${()=>kr(X-1)}>
        <kk-icon slot="prefix" name="arrow-left"></kk-icon>${f.nomedivino.anterior}
      </kk-button>
      ${i?a?C(f.nomedivino.concluir,()=>t(1)):C(f.nomedivino.proximo,()=>kr(X+1)):l``}
    </div>
  `}var jr={reiniciar:Dr,desenhar:Ar},Z=0;function Mr(){Z=0}function Nr(e,t){let n=e.itens.length;Z=Math.max(0,Math.min(n-1,t)),xe(f.nomedivino.passo(Z+1,n)),m()}function Pr(e,t){let n=e.itens.length,r=e.itens[Z];if(r===void 0)return l``;let i=Z===n-1;return l`
    <ol class="nomedivino__barras" aria-hidden="true">
      ${e.itens.map((e,t)=>l`<li data-estado=${t<Z?`lida`:t===Z?`atual`:`depois`}></li>`)}
    </ol>

    <article
      class="nomedivino__pagina"
      @click=${t=>{if(t.target.closest(`a`)!==null)return;let n=t.currentTarget.getBoundingClientRect(),r=t.clientX-n.left>n.width/2!=(document.documentElement.dir===`rtl`);r&&i||Nr(e,Z+(r?1:-1))}}
    >
      <h2 class="nomedivino__pagina-titulo">${r.titulo}</h2>
      ${y(r.texto)}
      ${r.referencia===``?``:l`<p class="nomedivino__referencia-bloco">${r.referencia}</p>`}
    </article>

    <div class="nomedivino__navegacao">
      <kk-button outline ?disabled=${Z===0} @click=${()=>Nr(e,Z-1)}>
        <kk-icon slot="prefix" name="arrow-left"></kk-icon>${f.nomedivino.anterior}
      </kk-button>
      ${i?l`<kk-button variant="primary" @click=${()=>t(1)}>
              ${f.nomedivino.concluir}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>`:l`<kk-button variant="primary" @click=${()=>Nr(e,Z+1)}>
              ${f.nomedivino.virar}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>`}
    </div>
  `}var Fr={reiniciar:Mr,desenhar:Pr},Q=0,Ir=[],Lr=[];function Rr(e){Q=0,Ir=e.itens.map(e=>g(e.dados.alternativas)),Lr=e.itens.map(()=>null)}function zr(e,t){let n=e.itens[Q],r=Ir[Q];if(n===void 0||r===void 0)return l``;let i=e.itens.length,a=Lr[Q]??null,o=e.itens.filter((e,t)=>Lr[t]===e.dados.correta).length;return l`
    ${S(Q+1,i)}

    <div class="nomedivino__placa">
      <span class="nomedivino__placa-rotulo">${f.nomedivino.titulos.placa}</span>
      <span class="nomedivino__placa-nome">${e.abertura.dados.destaque}</span>
    </div>

    <div class="nomedivino__titulo-carta" data-respondida=${a===null?`nao`:`sim`}>
      <span class="nomedivino__titulo-palavra">${n.titulo}</span>
    </div>

    <p class="nomedivino__chamada">${f.nomedivino.titulos.pergunta}</p>
    ${b(r,n.dados.correta,a,e=>{Lr[Q]===null&&(Lr=Lr.map((t,n)=>n===Q?e:t),m())})}

    ${a===null?d:l`
          ${x(a===n.dados.correta,n.referencia)}
          ${y(n.texto)}
          ${Q===i-1?C(f.nomedivino.concluir,()=>t(_(o,i))):C(f.nomedivino.proximo,()=>{Q+=1,m()})}
        `}
  `}var Br={reiniciar:Rr,desenhar:zr},Vr=[],Hr=[],Ur=[],$=0;function Wr(e){Vr=h(e.itens),Hr=Vr.map(e=>g(e.dados.alternativas)),Ur=Vr.map(()=>null),$=0}function Gr(e,t){let n=Vr[$],r=Hr[$];if(n===void 0||r===void 0)return l``;let i=Vr.length,a=Ur[$]??null,o=Vr.filter((e,t)=>Ur[t]===e.dados.correta).length,{antes:s,depois:ee}=Le(se(n.texto),n.dados.lacuna);return l`
    ${S($+1,i)}

    <blockquote class="nomedivino__lacunado">
      <p>
        ${s}<span class="nomedivino__lacuna" data-cheia=${a===null?`nao`:`sim`}
          >${a===null?f.nomedivino.versiculos.vazio:n.dados.lacuna}</span
        >${ee}
      </p>
      <footer>${a===null?``:n.titulo}</footer>
    </blockquote>

    ${b(r,n.dados.correta,a,e=>{Ur[$]===null&&(Ur=Ur.map((t,n)=>n===$?e:t),m())})}

    ${a===null?d:l`
          ${x(a===n.dados.correta,n.referencia)}
          ${$===i-1?C(f.nomedivino.concluir,()=>t(_(o,i))):C(f.nomedivino.proximo,()=>{$+=1,m()})}
        `}
  `}var Kr={letras:yn,significado:jr,titulos:Br,jah:pn,contagem:qt,"quem-disse":ur,nomes:Yn,versiculos:{reiniciar:Wr,desenhar:Gr},museu:Bn,sumiu:Fr,pronuncia:ir,seculos:Tr,citacoes:qe,dossie:cn,linguas:On,conhecer:tt,santificado:_r,desafio:rn},qr=`abertura`,Jr=1,Yr={estado:`gravando`},Xr=null;function Zr(e){let t=e.args[0];if(t!==void 0)return Zt().capitulos.find(e=>e.chave===t)}function Qr(e){let t=e.args.join(`/`);t!==Xr&&(Xr=t,gr(),qr=`abertura`)}function $r(e){Kr[e.chave].reiniciar(e),qr=`atividade`,m(),window.scrollTo({top:0})}function ei(e,t){Jr=e.ficha.estrelas?t:1,qr=`fim`,Yr={estado:`gravando`},m(),window.scrollTo({top:0}),(async()=>{let t=await $t(e.chave,Jr);Yr=t===null?{estado:`falhou`}:{estado:`pronta`,partida:t},xe(f.nomedivino.fim.seloAnuncio),m()})()}function ti(e){let t=ke(Qt(),e.chave);return t===0?l`<span class="nomedivino__novo">${f.nomedivino.trilha.aFazer}</span>`:e.ficha.estrelas?Ve(t):He()}function ni(e){let t=ke(Qt(),e.chave)>0;return l`
    <li>
      <button
        class="nomedivino__capitulo"
        data-capitulo=${e.chave}
        data-feito=${t?`sim`:`nao`}
        @click=${()=>ce(`${v}/${e.chave}`)}
      >
        <span class="nomedivino__medalha" aria-hidden="true">
          <kk-icon name=${e.ficha.icone}></kk-icon>
          <span class="nomedivino__numero">${e.numero}</span>
        </span>
        <span class="nomedivino__capitulo-texto">
          <span class="nomedivino__capitulo-titulo">${e.abertura.titulo}</span>
          <span class="nomedivino__capitulo-resumo">${e.abertura.dados.resumo}</span>
        </span>
        <span class="nomedivino__capitulo-estado">${ti(e)}</span>
      </button>
    </li>
  `}function ri(e){return l`
    <section class="nomedivino__parte" data-parte=${e.chave}>
      <header class="nomedivino__parte-topo">
        <span class="nomedivino__parte-numero" aria-hidden="true">${Ae(e.numero)}</span>
        <h2 class="nomedivino__parte-titulo">
          ${e.titulo}
        </h2>
      </header>
      <blockquote class="nomedivino__parte-versiculo">
        ${y(e.texto)}
        ${e.referencia===``?d:l`<footer>${e.referencia}</footer>`}
      </blockquote>
      <ol class="nomedivino__capitulos">${e.capitulos.map(ni)}</ol>
    </section>
  `}function ii(){let e=Zt();if(e.capitulos.length===0)return l`<p class="vazio">${f.nomedivino.vazio}</p>`;let t=Qt(),n=Ie(e,t),r=ze(e,t),i=e.capitulos.length;return l`
    <p class="nomedivino__subtitulo">${f.nomedivino.subtitulo}</p>
    <div class="nomedivino__progresso">
      <kk-progress-bar value=${Math.round(n/i*100)}></kk-progress-bar>
      <span>${f.nomedivino.trilha.conta(n,i)}</span>
    </div>

    ${r===null?l`<p class="nomedivino__completa">${He()}${f.nomedivino.trilha.completa}</p>`:l`<kk-button
            variant="primary"
            class="nomedivino__continuar"
            @click=${()=>ce(`${v}/${r.chave}`)}
          >
            <kk-icon slot="prefix" name="player-play"></kk-icon>
            ${n===0?f.nomedivino.trilha.comecar:f.nomedivino.trilha.continuar}
          </kk-button>`}

    ${e.partes.map(ri)}
  `}function ai(e){return l`
    <div class="nomedivino__cabecalho">
      <kk-icon name=${e.ficha.icone}></kk-icon>
      <span>${f.nomedivino.capitulo(e.numero)}</span>
    </div>
  `}function oi(e){let t=ke(Qt(),e.chave);return l`
    ${ai(e)}
    <h2 class="nomedivino__titulo">${e.abertura.titulo}</h2>
    ${y(e.abertura.texto,`nomedivino__abertura`)}
    ${e.abertura.referencia===``?d:l`<p class="nomedivino__referencia-bloco">${e.abertura.referencia}</p>`}
    ${Ue(e.abertura.link,e.abertura.obra)}

    <div class="nomedivino__seguir">
      <kk-button variant="primary" @click=${()=>$r(e)}>
        <kk-icon slot="prefix" name=${t>0?`rotate`:`player-play`}></kk-icon>
        ${t>0?f.nomedivino.deNovo:f.nomedivino.comecar}
      </kk-button>
    </div>
  `}function si(e){if(Yr.estado===`gravando`)return l`<div class="carregando"><kk-spinner></kk-spinner></div>`;if(Yr.estado===`falhou`)return l`<kk-alert open variant="danger">${f.nomedivino.fim.seloFalhou}</kk-alert>`;let{partida:t}=Yr,n=t.bateu&&t.anterior>0&&e.ficha.estrelas;return l`
    <div class="nomedivino__conquista">
      ${He(`nomedivino__selo--acende`)}
      <strong>
        ${t.anterior===0?f.nomedivino.fim.seloNovo:f.nomedivino.fim.seloJaTinha}
      </strong>
      ${n?l`<span>${f.nomedivino.fim.maisEstrelas}</span>`:d}
    </div>
  `}function ci(e){let t=je(Zt(),e.chave),n=e.chave===`desafio`&&Jr===3;return l`
    ${ai(e)}
    <h2 class="nomedivino__titulo">${e.abertura.titulo}</h2>

    ${si(e)}
    ${e.ficha.estrelas?l`<div class="nomedivino__fim-estrelas">${Ve(Jr)}</div>`:d}
    ${n?l`<p class="nomedivino__completa">${f.nomedivino.fim.trilhaCompleta}</p>`:d}

    ${e.abertura.dados.fecho===``?d:y(e.abertura.dados.fecho,e.chave===`desafio`?`nomedivino__fecho nomedivino__fecho--final`:`nomedivino__fecho`)}

    <div class="jogo__controles">
      ${t===null?d:l`<kk-button variant="primary" @click=${()=>ce(`${v}/${t.chave}`)}>
              ${f.nomedivino.fim.proximo}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>`}
      <kk-button outline @click=${()=>$r(e)}>
        <kk-icon slot="prefix" name="rotate"></kk-icon>${f.nomedivino.deNovo}
      </kk-button>
      <kk-button outline @click=${()=>ce(v)}>
        <kk-icon slot="prefix" name="route"></kk-icon>${f.nomedivino.fim.trilha}
      </kk-button>
    </div>
  `}function li(e){if(qr===`abertura`)return oi(e);if(qr===`fim`)return ci(e);let t=Kr[e.chave];return l`
    ${ai(e)}
    ${t.desenhar(e,t=>ei(e,t))}
  `}var ui={titulo(e){return Zr(e)?.abertura.titulo},voltarPara(e){return e.args.length===0?`home`:v},conteudo(e){let t=Xt.espera();if(t!==null)return t;Qr(e);let n=Zr(e);return n===void 0?ii():li(n)}};export{ui as telaNomeDivino};