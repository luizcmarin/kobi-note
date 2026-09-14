import{U as e,at as t,lt as n,st as r,tt as i,z as a}from"./index-D0n52eAb.js";var o=500;function s(s){let c=``,l;function u(t){clearTimeout(l),l=setTimeout(()=>{(async()=>{let n=s.idDe(t);if(n===void 0)return;let r=c.trim(),o=s.chaveDe(t);r===``?(await e(o),s.lembrete().delete(n)):(await a({origem:s.origem,referencia:s.referenciaDe(t),titulo:s.tituloDe(t),conteudo:r,ref_chave:o}),s.lembrete().set(n,r)),i()})()},o)}return{get texto(){return c},abrir(e){clearTimeout(l),c=e},campo({item:e,id:i,rotulo:a,placeholder:o,apoio:s}){return n`
        <div class="rascunho">
          <div class="rascunho__cabecalho">
            <label for=${i}>${a}</label>
            <a href="#/caderno">${t.caderno.ver}</a>
          </div>
          ${s??r}
          <kk-textarea
            id=${i}
            rows="4"
            resize="vertical"
            placeholder=${o}
            .value=${c}
            @kk-input=${t=>{c=t.target.value,u(e)}}
          ></kk-textarea>
        </div>
      `}}}export{s as t};