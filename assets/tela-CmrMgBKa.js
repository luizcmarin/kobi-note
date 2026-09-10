import{r as e}from"./dinheiro-BNxPMXH0.js";import{E as t,T as n,ct as r,et as i,it as a,p as o,tt as s,u as c}from"./index-DkLYsJTt.js";import{n as l}from"./ref-CL8cd2nK.js";import{alternarAtivo as u,alternarPago as d,carregar as f,excluirCategoria as p,excluirRecorrencia as m,excluirTransacao as h,gerarPendentes as g,paraCategoria as _,paraRecorrencia as v,paraTransacao as y,salvarCategoria as b,salvarRecorrencia as x,salvarTransacao as S}from"./dados-OIFprJzy.js";var C=[],w=[],T=[],E=!0,D=!1,O=``,k=!1,A=!1,j=!1,M=null;async function N(){let e=await f();C=e.categorias,w=e.transacoes,T=e.recorrencias,i()}function P(){A||j||M!==null||(j=!0,(async()=>{try{await N(),await g(T)&&await N(),A=!0}catch(e){console.error(`financeiro: a carga falhou.`,e),M=t(e)}finally{j=!1,i()}})())}function F(){M=null,P(),i()}function I(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function L(){D||(E=!0,D=!0,z())}var R=!1;function z(){R||(R=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`financeiro`&&(D=!1,J?.fechar(),k=!1)}))}function B(e,t){return t>0?e.find(e=>e.id===t):void 0}async function V(e){if(e.especie===`transacao`){await S(e.registro,B(w,e.registro.id)),c(a.financeiro.transacaoSalva),await N();return}if(e.especie===`categoria`){await b(e.registro),c(a.financeiro.categoriaSalva),await N();return}await x(e.registro,B(T,e.registro.id)),c(a.financeiro.recorrenciaSalva),await N(),await g(T)&&await N()}var H={transacao:{titulo:a.financeiro.excluirTransacao,texto:a.acervo.excluirTexto,feito:a.financeiro.transacaoExcluida,excluir:h},categoria:{titulo:a.financeiro.excluirCategoria,texto:a.financeiro.excluirCategoriaTexto,feito:a.financeiro.categoriaExcluida,excluir:p},recorrencia:{titulo:a.financeiro.excluirRecorrencia,texto:a.financeiro.excluirRecorrenciaTexto,feito:a.financeiro.recorrenciaExcluida,excluir:m}};async function U(e){let t=H[e.especie];await o({titulo:t.titulo,texto:t.texto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})&&(await t.excluir(e.registro.id),c(t.feito),await N())}async function W(e){if(e.especie===`transacao`){let t=B(w,e.registro.id);t!==void 0&&await G(t)&&await d(t)}if(e.especie===`recorrencia`){let t=B(T,e.registro.id);t!==void 0&&await u(t)}await N()}function G(t){if(t.esta_pago===1)return o({titulo:a.financeiro.estornar,texto:a.financeiro.estornarTexto(t.descricao),rotuloConfirmar:a.acoes.confirmar,variante:`warning`});let n=t.tipo===0,r=e(t.valor);return o({titulo:n?a.financeiro.receber:a.financeiro.pagar,texto:n?a.financeiro.receberTexto(t.descricao,r):a.financeiro.pagarTexto(t.descricao,r),rotuloConfirmar:a.acoes.confirmar,variante:`primary`})}var K={painel:void 0,transacoes:a.financeiro.transacoes,categorias:a.financeiro.categorias,recorrencias:a.financeiro.recorrencias},q={transacoes:a.financeiro.novaTransacao,categorias:a.financeiro.novaCategoria,recorrencias:a.financeiro.novaRecorrencia},J;function Y(e){return e.detail}var X={voltarPara(e){return I(e)===`painel`?`home`:`financeiro`},titulo(e){return K[I(e)]},acoes(e){let t=I(e);if(!(t===`painel`||k))return r`
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
        .categorias=${C.map(_)}
        .transacoes=${w.map(y)}
        .recorrencias=${T.map(v)}
        ${l(e=>{J=e})}
        @kk-navigate=${e=>{let{vista:t}=e.detail;s(`financeiro/${t}`)}}
        @kk-month=${e=>{O=e.detail.mes}}
        @kk-visibility=${e=>{E=e.detail.oculto}}
        @kk-form=${e=>{k=e.detail.aberto,i()}}
        @kk-save=${e=>void V(Y(e))}
        @kk-delete=${e=>void U(Y(e))}
        @kk-toggle=${e=>void W(Y(e))}
      ></kk-financeiro>
    `:r`<div class="carregando"><kk-spinner></kk-spinner></div>`):n(M,F)}};export{X as telaFinanceiro};