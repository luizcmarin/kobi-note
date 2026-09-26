import{_t as e,kt as t,m as n,x as r,xt as i}from"./index-BNLfwB87.js";import{t as a}from"./qr-DsXuttD8.js";var o=`https://luizcmarin.github.io/kobi-note`;function s(t=o){return`${e.convite.mensagem}\n\n${t}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(t){try{await navigator.clipboard.writeText(s(t)),n(e.convite.copiado)}catch{n(e.leitura.semCopiar,`warning`)}}async function u(n){if(typeof navigator.share!=`function`){await l(n);return}try{await navigator.share({title:t.displayName,text:e.convite.mensagem,url:n})}catch{}}function d(){let n=o;return a(),r(e.convite.titulo,void 0,(r,a)=>i`
        <div class="convite">
          <img
            class="convite__mascote"
            src="./icons/mascote-kobi-note.svg"
            alt=${e.convite.mascote}
            width="160"
            height="160"
          />
          <h2 class="convite__nome">
            <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${t.displayName} />
          </h2>
          <p class="convite__lema">${e.convite.lema}</p>

          <kk-qr-code
            class="convite__qr"
            value=${n}
            size="224"
            error-correction="M"
            label=${e.convite.qrAlt}
          ></kk-qr-code>

          <p class="convite__dica">${e.convite.dica}</p>

          <div class="convite__acoes">
            <kk-button variant="success" href=${c(n)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${e.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void u(n)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${e.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void l(n)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${e.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>r(void 0)}>
            ${e.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{d as abrirConvite};