import{U as e,ct as t,et as n,it as r,ot as i,z as a}from"./index-CFqbq_HS.js";var o=500;function s(s){let c=``,l;function u(t){clearTimeout(l),l=setTimeout(()=>{(async()=>{let r=s.idDe(t);if(r===void 0)return;let i=c.trim(),o=s.chaveDe(t);i===``?(await e(o),s.lembrete().delete(r)):(await a({origem:s.origem,referencia:s.referenciaDe(t),titulo:s.tituloDe(t),conteudo:i,ref_chave:o}),s.lembrete().set(r,i)),n()})()},o)}return{get texto(){return c},abrir(e){clearTimeout(l),c=e},campo({item:e,id:n,rotulo:a,placeholder:o,apoio:s}){return t`
        <div class="rascunho">
          <div class="rascunho__cabecalho">
            <label for=${n}>${a}</label>
            <a href="#/caderno">${r.caderno.ver}</a>
          </div>
          ${s??i}
          <kk-textarea
            id=${n}
            rows="4"
            resize="vertical"
            placeholder=${o}
            .value=${c}
            @kk-input=${t=>{c=t.target.value,u(e)}}
          ></kk-textarea>
        </div>
      `}}}export{s as t};