import{St as e,h as t,m as n,mt as r,ut as i}from"./index-D3l2wNoD.js";import{t as a}from"./qr-UIt20_pd.js";var o=`https://luizcmarin.github.io/kobi-note`;function s(e=o){return`${i.convite.mensagem}\n\n${e}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(e){try{await navigator.clipboard.writeText(s(e)),n(i.convite.copiado)}catch{n(i.leitura.semCopiar,`warning`)}}async function u(t){if(typeof navigator.share!=`function`){await l(t);return}try{await navigator.share({title:e.displayName,text:i.convite.mensagem,url:t})}catch{}}function d(){let n=o;return a(),t(i.convite.titulo,void 0,(t,a)=>r`
        <div class="convite">
          <img
            class="convite__mascote"
            src="./icons/mascote-kobi-note.svg"
            alt=${i.convite.mascote}
            width="160"
            height="160"
          />
          <h2 class="convite__nome">
            <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${e.displayName} />
          </h2>
          <p class="convite__lema">${i.convite.lema}</p>

          <kk-qr-code
            class="convite__qr"
            value=${n}
            size="224"
            error-correction="M"
            label=${i.convite.qrAlt}
          ></kk-qr-code>

          <p class="convite__dica">${i.convite.dica}</p>

          <div class="convite__acoes">
            <kk-button variant="success" href=${c(n)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${i.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void u(n)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${i.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void l(n)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${i.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>t(void 0)}>
            ${i.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{d as abrirConvite};