import{r as e}from"./dinheiro-f7T9Mvpd.js";import{g as t,m as n,mt as r,ot as i,st as a,ut as o,v as s,y as c}from"./index-B4lifVfd.js";import{n as l}from"./ref-BUOR5B2f.js";import{alternarAtivo as u,alternarPago as d,carregar as f,excluirCategoria as p,excluirRecorrencia as m,excluirTransacao as h,gerarPendentes as g,paraCategoria as _,paraRecorrencia as v,paraTransacao as y,salvarCategoria as b,salvarRecorrencia as x,salvarTransacao as S}from"./dados-TYu1rANC.js";var C=[],w=[],T=[],E=!0,D=!1,O=``,k=!1,A=!1,j=!1,M=null;async function N(){let e=await f();C=e.categorias,w=e.transacoes,T=e.recorrencias,i()}function P(){A||j||M!==null||(j=!0,(async()=>{try{await N(),await g(T)&&await N(),A=!0}catch(e){console.error(`financeiro: a carga falhou.`,e),M=c(e)}finally{j=!1,i()}})())}function F(){M=null,P(),i()}function I(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function L(){D||(E=!0,D=!0,z())}var R=!1;function z(){R||(R=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`financeiro`&&(D=!1,J?.fechar(),k=!1)}))}function B(e,t){return t>0?e.find(e=>e.id===t):void 0}async function V(e){try{if(e.especie===`transacao`){await S(e.registro,B(w,e.registro.id)),n(o.financeiro.transacaoSalva),await N();return}if(e.especie===`categoria`){await b(e.registro),n(o.financeiro.categoriaSalva),await N();return}await x(e.registro,B(T,e.registro.id)),n(o.financeiro.recorrenciaSalva),await N(),await g(T)&&await N()}catch(e){console.error(`Financeiro: a gravação falhou.`,e),n(o.financeiro.naoSalvo,`danger`)}}var H={transacao:{titulo:o.financeiro.excluirTransacao,texto:o.acervo.excluirTexto,feito:o.financeiro.transacaoExcluida,excluir:h},categoria:{titulo:o.financeiro.excluirCategoria,texto:o.financeiro.excluirCategoriaTexto,feito:o.financeiro.categoriaExcluida,excluir:p},recorrencia:{titulo:o.financeiro.excluirRecorrencia,texto:o.financeiro.excluirRecorrenciaTexto,feito:o.financeiro.recorrenciaExcluida,excluir:m}};async function U(e){let r=H[e.especie];if(await t({titulo:r.titulo,texto:r.texto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await r.excluir(e.registro.id)}catch(e){console.error(`Financeiro: a exclusão falhou.`,e),n(o.financeiro.naoExcluido,`danger`);return}n(r.feito),await N()}}async function W(e){try{if(e.especie===`transacao`){let t=B(w,e.registro.id);t!==void 0&&await G(t)&&await d(t)}if(e.especie===`recorrencia`){let t=B(T,e.registro.id);t!==void 0&&await u(t)}}catch(e){console.error(`Financeiro: a alteração falhou.`,e),n(o.financeiro.naoAlterado,`danger`);return}await N()}function G(n){if(n.esta_pago===1)return t({titulo:o.financeiro.estornar,texto:o.financeiro.estornarTexto(n.descricao),rotuloConfirmar:o.acoes.confirmar,variante:`warning`});let r=n.tipo===0,i=e(n.valor);return t({titulo:r?o.financeiro.receber:o.financeiro.pagar,texto:r?o.financeiro.receberTexto(n.descricao,i):o.financeiro.pagarTexto(n.descricao,i),rotuloConfirmar:o.acoes.confirmar,variante:`primary`})}var K={painel:void 0,transacoes:o.financeiro.transacoes,categorias:o.financeiro.categorias,recorrencias:o.financeiro.recorrencias},q={transacoes:o.financeiro.novaTransacao,categorias:o.financeiro.novaCategoria,recorrencias:o.financeiro.novaRecorrencia},J;function Y(e){return e.detail}var X={voltarPara(e){return I(e)===`painel`?`home`:`financeiro`},titulo(e){return K[I(e)]},acoes(e){let t=I(e);if(!(t===`painel`||k))return r`
      <kk-icon-button
        name="plus"
        label=${q[t]}
        @click=${()=>J?.novo()}
      ></kk-icon-button>
    `},conteudo(e){return P(),M===null?(L(),A?r`
      <kk-financeiro
        vista=${I(e)}
        mes=${O}
        ?oculto=${E}
        lancamento-corrente
        .categorias=${C.map(_)}
        .transacoes=${w.map(y)}
        .recorrencias=${T.map(v)}
        ${l(e=>{J=e})}
        @kk-navigate=${e=>{let{vista:t}=e.detail;a(`financeiro/${t}`)}}
        @kk-month=${e=>{O=e.detail.mes}}
        @kk-visibility=${e=>{E=e.detail.oculto}}
        @kk-form=${e=>{k=e.detail.aberto,i()}}
        @kk-save=${e=>void V(Y(e))}
        @kk-delete=${e=>void U(Y(e))}
        @kk-toggle=${e=>void W(Y(e))}
      ></kk-financeiro>
    `:r`<div class="carregando"><kk-spinner></kk-spinner></div>`):s(M,F)}};export{X as telaFinanceiro};