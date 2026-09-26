import{J as e,W as t,_t as n,bt as r,ft as i,xt as a}from"./index-tEHw1VqD.js";var o=500;function s(s){let c=``,l;function u(n){clearTimeout(l),l=setTimeout(()=>{(async()=>{let r=s.idDe(n);if(r===void 0)return;let a=c.trim(),o=s.chaveDe(n);a===``?(await e(o),s.lembrete().delete(r)):(await t({origem:s.origem,referencia:s.referenciaDe(n),titulo:s.tituloDe(n),conteudo:a,ref_chave:o}),s.lembrete().set(r,a)),i()})()},o)}return{get texto(){return c},abrir(e){clearTimeout(l),c=e},campo({item:e,id:t,rotulo:i,placeholder:o,apoio:s}){return a`
        <div class="rascunho">
          <div class="rascunho__cabecalho">
            <label for=${t}>${i}</label>
            <a href="#/caderno">${n.caderno.ver}</a>
          </div>
          ${s??r}
          <kk-textarea
            id=${t}
            rows="4"
            resize="vertical"
            placeholder=${o}
            .value=${c}
            @kk-input=${t=>{c=t.target.value,u(e)}}
          ></kk-textarea>
        </div>
      `}}}export{s as t};