import{t as e}from"./src-CZgrja32.js";import{t}from"./strings-BbSHU1JD.js";import{d as n,f as r,n as i,x as a}from"./index-DtYgWMYC.js";var o=`https://luizcmarin.github.io/kobi-note`;function s(e=o){return`${t.convite.mensagem}\n\n${e}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(e){try{await navigator.clipboard.writeText(s(e)),n(t.convite.copiado)}catch{n(t.leitura.semCopiar,`warning`)}}async function u(n){if(typeof navigator.share!=`function`){await l(n);return}try{await navigator.share({title:e.displayName,text:t.convite.mensagem,url:n})}catch{}}function d(){let n=o;return i(),r(t.convite.titulo,void 0,(r,i)=>a`
        <div class="convite">
          <img class="convite__logo" src="icons/kobi-note.svg" alt="" aria-hidden="true" />
          <h2 class="convite__nome">${e.displayName}</h2>
          <p class="convite__lema">${t.convite.lema}</p>

          <kk-qr-code
            class="convite__qr"
            value=${n}
            size="224"
            error-correction="M"
            label=${t.convite.qrAlt}
          ></kk-qr-code>

          <p class="convite__dica">${t.convite.dica}</p>

          <div class="convite__acoes">
            <kk-button variant="success" href=${c(n)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${t.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void u(n)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${t.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void l(n)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${t.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>r(void 0)}>
            ${t.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{d as abrirConvite};