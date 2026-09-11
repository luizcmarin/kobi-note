import{H as e,K as t,ct as n,ft as r,it as i,ut as a}from"./index-DtxwN5g2.js";var o=500;function s(s){let c=``,l;function u(n){clearTimeout(l),l=setTimeout(()=>{(async()=>{let r=s.idDe(n);if(r===void 0)return;let a=c.trim(),o=s.chaveDe(n);a===``?(await t(o),s.lembrete().delete(r)):(await e({origem:s.origem,referencia:s.referenciaDe(n),titulo:s.tituloDe(n),conteudo:a,ref_chave:o}),s.lembrete().set(r,a)),i()})()},o)}return{get texto(){return c},abrir(e){clearTimeout(l),c=e},campo({item:e,id:t,rotulo:i,placeholder:o,apoio:s}){return r`
        <div class="rascunho">
          <div class="rascunho__cabecalho">
            <label for=${t}>${i}</label>
            <a href="#/caderno">${n.caderno.ver}</a>
          </div>
          ${s??a}
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