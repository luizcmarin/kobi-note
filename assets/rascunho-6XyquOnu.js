import{U as e,ft as t,mt as n,ot as r,ut as i,z as a}from"./index-D3l2wNoD.js";var o=500;function s(s){let c=``,l;function u(t){clearTimeout(l),l=setTimeout(()=>{(async()=>{let n=s.idDe(t);if(n===void 0)return;let i=c.trim(),o=s.chaveDe(t);i===``?(await e(o),s.lembrete().delete(n)):(await a({origem:s.origem,referencia:s.referenciaDe(t),titulo:s.tituloDe(t),conteudo:i,ref_chave:o}),s.lembrete().set(n,i)),r()})()},o)}return{get texto(){return c},abrir(e){clearTimeout(l),c=e},campo({item:e,id:r,rotulo:a,placeholder:o,apoio:s}){return n`
        <div class="rascunho">
          <div class="rascunho__cabecalho">
            <label for=${r}>${a}</label>
            <a href="#/caderno">${i.caderno.ver}</a>
          </div>
          ${s??t}
          <kk-textarea
            id=${r}
            rows="4"
            resize="vertical"
            placeholder=${o}
            .value=${c}
            @kk-input=${t=>{c=t.target.value,u(e)}}
          ></kk-textarea>
        </div>
      `}}}export{s as t};