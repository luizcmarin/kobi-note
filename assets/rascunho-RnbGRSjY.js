import{B as e,W as t,dt as n,gt as r,mt as i,st as a}from"./index-BrLqW3t8.js";var o=500;function s(s){let c=``,l;function u(n){clearTimeout(l),l=setTimeout(()=>{(async()=>{let r=s.idDe(n);if(r===void 0)return;let i=c.trim(),o=s.chaveDe(n);i===``?(await t(o),s.lembrete().delete(r)):(await e({origem:s.origem,referencia:s.referenciaDe(n),titulo:s.tituloDe(n),conteudo:i,ref_chave:o}),s.lembrete().set(r,i)),a()})()},o)}return{get texto(){return c},abrir(e){clearTimeout(l),c=e},campo({item:e,id:t,rotulo:a,placeholder:o,apoio:s}){return r`
        <div class="rascunho">
          <div class="rascunho__cabecalho">
            <label for=${t}>${a}</label>
            <a href="#/caderno">${n.caderno.ver}</a>
          </div>
          ${s??i}
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