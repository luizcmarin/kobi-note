import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-V1DWQvwW.js";import{o as r,u as i}from"./dados-DHpv3lDS.js";import{ct as a}from"./index-DjPQ20Ch.js";var o=500;function s(s){let c=``,l;function u(e){clearTimeout(l),l=setTimeout(()=>{(async()=>{let t=s.idDe(e);if(t===void 0)return;let n=c.trim(),o=s.chaveDe(e);n===``?(await i(o),s.lembrete().delete(t)):(await r({origem:s.origem,referencia:s.referenciaDe(e),titulo:s.tituloDe(e),conteudo:n,ref_chave:o}),s.lembrete().set(t,n)),a()})()},o)}return{get texto(){return c},abrir(e){clearTimeout(l),c=e},campo({item:r,id:i,rotulo:a,placeholder:o,apoio:s}){return e`
        <div class="rascunho">
          <div class="rascunho__cabecalho">
            <label for=${i}>${a}</label>
            <a href="#/caderno">${n.caderno.ver}</a>
          </div>
          ${s??t}
          <kk-textarea
            id=${i}
            rows="4"
            resize="vertical"
            placeholder=${o}
            .value=${c}
            @kk-input=${e=>{c=e.target.value,u(r)}}
          ></kk-textarea>
        </div>
      `}}}export{s as t};