import{Ct as e,dt as t,h as n,ht as r,m as i}from"./index-CRHxduAl.js";import{t as a}from"./qr-_OKXDUdP.js";var o=`https://luizcmarin.github.io/kobi-note`;function s(e=o){return`${t.convite.mensagem}\n\n${e}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(e){try{await navigator.clipboard.writeText(s(e)),i(t.convite.copiado)}catch{i(t.leitura.semCopiar,`warning`)}}async function u(n){if(typeof navigator.share!=`function`){await l(n);return}try{await navigator.share({title:e.displayName,text:t.convite.mensagem,url:n})}catch{}}function d(){let i=o;return a(),n(t.convite.titulo,void 0,(n,a)=>r`
        <div class="convite">
          <img
            class="convite__mascote"
            src="./icons/mascote-kobi-note.svg"
            alt=${t.convite.mascote}
            width="160"
            height="160"
          />
          <h2 class="convite__nome">
            <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${e.displayName} />
          </h2>
          <p class="convite__lema">${t.convite.lema}</p>

          <kk-qr-code
            class="convite__qr"
            value=${i}
            size="224"
            error-correction="M"
            label=${t.convite.qrAlt}
          ></kk-qr-code>

          <p class="convite__dica">${t.convite.dica}</p>

          <div class="convite__acoes">
            <kk-button variant="success" href=${c(i)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${t.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void u(i)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${t.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void l(i)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${t.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>n(void 0)}>
            ${t.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{d as abrirConvite};