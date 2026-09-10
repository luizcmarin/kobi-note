import{K as e,X as t,ct as n,et as r,it as i,ot as a}from"./index-B9OuHCA8.js";var o=500;function s(s){let c=``,l;function u(n){clearTimeout(l),l=setTimeout(()=>{(async()=>{let i=s.idDe(n);if(i===void 0)return;let a=c.trim(),o=s.chaveDe(n);a===``?(await t(o),s.lembrete().delete(i)):(await e({origem:s.origem,referencia:s.referenciaDe(n),titulo:s.tituloDe(n),conteudo:a,ref_chave:o}),s.lembrete().set(i,a)),r()})()},o)}return{get texto(){return c},abrir(e){clearTimeout(l),c=e},campo({item:e,id:t,rotulo:r,placeholder:o,apoio:s}){return n`
        <div class="rascunho">
          <div class="rascunho__cabecalho">
            <label for=${t}>${r}</label>
            <a href="#/caderno">${i.caderno.ver}</a>
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