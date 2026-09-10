import{ct as e,f as t,gt as n,it as r,u as i}from"./index-DkLYsJTt.js";import{t as a}from"./qr-DFiOQb4Y.js";var o=`https://luizcmarin.github.io/kobi-note`;function s(e=o){return`${r.convite.mensagem}\n\n${e}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(e){try{await navigator.clipboard.writeText(s(e)),i(r.convite.copiado)}catch{i(r.leitura.semCopiar,`warning`)}}async function u(e){if(typeof navigator.share!=`function`){await l(e);return}try{await navigator.share({title:n.displayName,text:r.convite.mensagem,url:e})}catch{}}function d(){let i=o;return a(),t(r.convite.titulo,void 0,(t,a)=>e`
        <div class="convite">
          <img
            class="convite__mascote"
            src="./icons/mascote-kobi-note.svg"
            alt=${r.convite.mascote}
            width="160"
            height="160"
          />
          <h2 class="convite__nome">
            <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${n.displayName} />
          </h2>
          <p class="convite__lema">${r.convite.lema}</p>

          <kk-qr-code
            class="convite__qr"
            value=${i}
            size="224"
            error-correction="M"
            label=${r.convite.qrAlt}
          ></kk-qr-code>

          <p class="convite__dica">${r.convite.dica}</p>

          <div class="convite__acoes">
            <kk-button variant="success" href=${c(i)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${r.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void u(i)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${r.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void l(i)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${r.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>t(void 0)}>
            ${r.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{d as abrirConvite};