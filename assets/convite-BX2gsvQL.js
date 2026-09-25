import{Et as e,h as t,m as n,pt as r,vt as i}from"./index-sA5grpgQ.js";import{t as a}from"./qr-zGUKn460.js";var o=`https://luizcmarin.github.io/kobi-note`;function s(e=o){return`${r.convite.mensagem}\n\n${e}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(e){try{await navigator.clipboard.writeText(s(e)),n(r.convite.copiado)}catch{n(r.leitura.semCopiar,`warning`)}}async function u(t){if(typeof navigator.share!=`function`){await l(t);return}try{await navigator.share({title:e.displayName,text:r.convite.mensagem,url:t})}catch{}}function d(){let n=o;return a(),t(r.convite.titulo,void 0,(t,a)=>i`
        <div class="convite">
          <img
            class="convite__mascote"
            src="./icons/mascote-kobi-note.svg"
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
            <kk-button variant="success" href=${c(n)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${r.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void u(n)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${r.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void l(n)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${r.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>t(void 0)}>
            ${r.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{d as abrirConvite};