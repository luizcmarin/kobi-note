import{dt as e,gt as t,h as n,m as r,wt as i}from"./index-DGzM8AUH.js";import{t as a}from"./qr-D7LGDGUJ.js";var o=`https://luizcmarin.github.io/kobi-note`;function s(t=o){return`${e.convite.mensagem}\n\n${t}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(t){try{await navigator.clipboard.writeText(s(t)),r(e.convite.copiado)}catch{r(e.leitura.semCopiar,`warning`)}}async function u(t){if(typeof navigator.share!=`function`){await l(t);return}try{await navigator.share({title:i.displayName,text:e.convite.mensagem,url:t})}catch{}}function d(){let r=o;return a(),n(e.convite.titulo,void 0,(n,a)=>t`
        <div class="convite">
          <img
            class="convite__mascote"
            src="./icons/mascote-kobi-note.svg"
            alt=${e.convite.mascote}
            width="160"
            height="160"
          />
          <h2 class="convite__nome">
            <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${i.displayName} />
          </h2>
          <p class="convite__lema">${e.convite.lema}</p>

          <kk-qr-code
            class="convite__qr"
            value=${r}
            size="224"
            error-correction="M"
            label=${e.convite.qrAlt}
          ></kk-qr-code>

          <p class="convite__dica">${e.convite.dica}</p>

          <div class="convite__acoes">
            <kk-button variant="success" href=${c(r)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${e.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void u(r)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${e.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void l(r)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${e.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>n(void 0)}>
            ${e.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{d as abrirConvite};