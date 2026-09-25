import{B as e,W as t,ct as n,gt as r,pt as i,vt as a}from"./index-sA5grpgQ.js";var o=500;function s(s){let c=``,l;function u(r){clearTimeout(l),l=setTimeout(()=>{(async()=>{let i=s.idDe(r);if(i===void 0)return;let a=c.trim(),o=s.chaveDe(r);a===``?(await t(o),s.lembrete().delete(i)):(await e({origem:s.origem,referencia:s.referenciaDe(r),titulo:s.tituloDe(r),conteudo:a,ref_chave:o}),s.lembrete().set(i,a)),n()})()},o)}return{get texto(){return c},abrir(e){clearTimeout(l),c=e},campo({item:e,id:t,rotulo:n,placeholder:o,apoio:s}){return a`
        <div class="rascunho">
          <div class="rascunho__cabecalho">
            <label for=${t}>${n}</label>
            <a href="#/caderno">${i.caderno.ver}</a>
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