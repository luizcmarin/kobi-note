import{t as e}from"./src-BL3VMlva.js";import{i as t}from"./lit-CL39YOSA.js";import{n}from"./strings-DQE9Hi7n.js";import{a as r}from"./acessibilidade-CRpcvpwG.js";import{c as i,p as a}from"./index-DOFaeRHJ.js";import{t as o}from"./qr-8pS4M9yt.js";var s=`https://luizcmarin.github.io/kobi-note`;function c(e=s){return`${n.convite.mensagem}\n\n${e}`}function l(e){return`https://wa.me/?text=${encodeURIComponent(c(e))}`}async function u(e){try{await navigator.clipboard.writeText(c(e)),i(n.convite.copiado)}catch{i(n.leitura.semCopiar,`warning`)}}async function d(t){if(typeof navigator.share!=`function`){await u(t);return}try{await navigator.share({title:e.displayName,text:n.convite.mensagem,url:t})}catch{}}function f(){let i=s;return o(),a(n.convite.titulo,void 0,(a,o)=>t`
        <div class="convite">
          <img
            class="convite__mascote"
            src=${r()}
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
            <kk-button variant="success" href=${l(i)} target="_blank">
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${n.convite.whatsapp}
            </kk-button>
            <kk-button variant="primary" @click=${()=>void d(i)}>
              <kk-icon slot="prefix" name="share"></kk-icon>${n.convite.compartilhar}
            </kk-button>
            <kk-button @click=${()=>void u(i)}>
              <kk-icon slot="prefix" name="copy"></kk-icon>${n.convite.copiar}
            </kk-button>
          </div>

          <kk-button class="convite__fechar" @click=${()=>a(void 0)}>
            ${n.acoes.fechar}
          </kk-button>
        </div>
      `,{semCabecalho:!0,classe:`dialogo-convite`})}export{f as abrirConvite};