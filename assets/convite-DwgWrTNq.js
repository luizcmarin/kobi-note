import{at as e,f as t,nt as n,pt as r,u as i}from"./index-BQ2FB00A.js";import{t as a}from"./qr-1Tu7LaaB.js";var o=`https://luizcmarin.github.io/kobi-note`;function s(e=o){return`${n.convite.mensagem}\n\n${e}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(e){try{await navigator.clipboard.writeText(s(e)),i(n.convite.copiado)}catch{i(n.leitura.semCopiar,`warning`)}}async function u(e){if(typeof navigator.share!=`function`){await l(e);return}try{await navigator.share({title:r.displayName,text:n.convite.mensagem,url:e})}catch{}}function d(){let i=o;return a(),t(n.convite.titulo,void 0,(t,a)=>e`
        <div class="convite">
          <img
            class="convite__mascote"
            src="./icons/mascote-kobi-note.svg"
            alt=${n.convite.mascote}
            width="160"
            height="160"
          />
          <h2 class="convite__nome">
            <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${r.displayName} />
          </h2>
          <p class="convite__lema">${n.convite.lema}</p>

          <kk-qr-code
            class="convite__qr"
            value=${i}
            size="224"
            error-correction="M"
            label=${n.convite.qrAlt}
          ></kk-qr-code>

          <p class="convite__dica">${n.convite.dica}</p>

          <div class="convite__acoes">
            <kk-button variant="success" href=${c(i)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${n.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void u(i)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${n.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void l(i)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${n.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>t(void 0)}>
            ${n.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{d as abrirConvite};