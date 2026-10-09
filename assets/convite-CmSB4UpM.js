import{t as e}from"./src-DEJyrks9.js";import{i as t}from"./lit-CI_s7elC.js";import{i as n,n as r}from"./strings-BCzNZFpV.js";import{a as i}from"./acessibilidade-0dW0_ixm.js";import{T as a,y as o}from"./index-DI1RkrLP.js";import{t as s}from"./qr-BlHEVdVw.js";var c=`https://note.luizcmarin.com.br`;function l(e=n()){return`${c}/instalar.html#${e}`}function u(e=l()){return`${r.convite.mensagem}\n\n${e}`}function d(e){return`https://wa.me/?text=${encodeURIComponent(u(e))}`}async function f(e){try{await navigator.clipboard.writeText(u(e)),o(r.convite.copiado)}catch{o(r.convite.naoCopiou,`warning`)}}async function p(t){if(typeof navigator.share!=`function`)await f(t);else try{await navigator.share({title:e.displayName,text:r.convite.mensagem,url:t})}catch{}}function m(){let n=l();return s(),a(r.convite.titulo,void 0,(a,o)=>t`
        <div class="convite">
          <img
            class="convite__mascote"
            src=${i()}
            alt=${r.convite.mascote}
            width="160"
            height="160"
          />
          <h2 class="convite__nome">
            <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${e.displayName} />
          </h2>
          <p class="convite__lema">${r.convite.lema}</p>

          <kk-qr-code
            class="convite__qr"
            value=${n}
            size="224"
            error-correction="M"
            label=${r.convite.qrAlt}
          ></kk-qr-code>

          <p class="convite__dica">${r.convite.dica}</p>

          <div class="convite__acoes">
            <kk-button variant="success" href=${d(n)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${r.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void p(n)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${r.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void f(n)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${r.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>a(void 0)}>
            ${r.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{m as abrirConvite};