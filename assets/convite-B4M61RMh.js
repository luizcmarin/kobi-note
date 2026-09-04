import{t as e}from"./src-Bmp9x5Vh.js";import{i as t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r,r as i}from"./index-CRLpDONK.js";import{t as a}from"./qr-DLfV24vS.js";var o=`https://luizcmarin.github.io/kobi-note`;function s(e=o){return`${n.convite.mensagem}\n\n${e}`}function c(e){return`https://wa.me/?text=${encodeURIComponent(s(e))}`}async function l(e){try{await navigator.clipboard.writeText(s(e)),i(n.convite.copiado)}catch{i(n.leitura.semCopiar,`warning`)}}async function u(t){if(typeof navigator.share!=`function`){await l(t);return}try{await navigator.share({title:e.displayName,text:n.convite.mensagem,url:t})}catch{}}function d(){let i=o;return a(),r(n.convite.titulo,void 0,(r,a)=>t`
        <div class="convite">
          <img
            class="convite__mascote"
            src="./icons/mascote-kobi-note.svg"
            alt=${n.convite.mascote}
            width="160"
            height="160"
          />
          <h2 class="convite__nome">
            <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${e.displayName} />
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

          <kk-button class="convite__fechar" @click=${()=>r(void 0)}>
            ${n.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{d as abrirConvite};