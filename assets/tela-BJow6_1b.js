import{r as e}from"./dinheiro-f7T9Mvpd.js";import{ct as t,et as n,g as r,it as i,m as a,tt as o,v as s,y as c}from"./index-CFqbq_HS.js";import{n as l}from"./ref-DEA1AXPP.js";import{alternarAtivo as u,alternarPago as d,carregar as f,excluirCategoria as p,excluirRecorrencia as m,excluirTransacao as h,gerarPendentes as g,paraCategoria as _,paraRecorrencia as v,paraTransacao as y,salvarCategoria as b,salvarRecorrencia as x,salvarTransacao as S}from"./dados-B6A37GIf.js";var C=[],w=[],T=[],E=!0,D=!1,O=``,k=!1,A=!1,j=!1,M=null;async function N(){let e=await f();C=e.categorias,w=e.transacoes,T=e.recorrencias,n()}function P(){A||j||M!==null||(j=!0,(async()=>{try{await N(),await g(T)&&await N(),A=!0}catch(e){console.error(`financeiro: a carga falhou.`,e),M=c(e)}finally{j=!1,n()}})())}function F(){M=null,P(),n()}function I(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function L(){D||(E=!0,D=!0,z())}var R=!1;function z(){R||(R=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`financeiro`&&(D=!1,J?.fechar(),k=!1)}))}function B(e,t){return t>0?e.find(e=>e.id===t):void 0}async function V(e){if(e.especie===`transacao`){await S(e.registro,B(w,e.registro.id)),a(i.financeiro.transacaoSalva),await N();return}if(e.especie===`categoria`){await b(e.registro),a(i.financeiro.categoriaSalva),await N();return}await x(e.registro,B(T,e.registro.id)),a(i.financeiro.recorrenciaSalva),await N(),await g(T)&&await N()}var H={transacao:{titulo:i.financeiro.excluirTransacao,texto:i.acervo.excluirTexto,feito:i.financeiro.transacaoExcluida,excluir:h},categoria:{titulo:i.financeiro.excluirCategoria,texto:i.financeiro.excluirCategoriaTexto,feito:i.financeiro.categoriaExcluida,excluir:p},recorrencia:{titulo:i.financeiro.excluirRecorrencia,texto:i.financeiro.excluirRecorrenciaTexto,feito:i.financeiro.recorrenciaExcluida,excluir:m}};async function U(e){let t=H[e.especie];await r({titulo:t.titulo,texto:t.texto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&(await t.excluir(e.registro.id),a(t.feito),await N())}async function W(e){if(e.especie===`transacao`){let t=B(w,e.registro.id);t!==void 0&&await G(t)&&await d(t)}if(e.especie===`recorrencia`){let t=B(T,e.registro.id);t!==void 0&&await u(t)}await N()}function G(t){if(t.esta_pago===1)return r({titulo:i.financeiro.estornar,texto:i.financeiro.estornarTexto(t.descricao),rotuloConfirmar:i.acoes.confirmar,variante:`warning`});let n=t.tipo===0,a=e(t.valor);return r({titulo:n?i.financeiro.receber:i.financeiro.pagar,texto:n?i.financeiro.receberTexto(t.descricao,a):i.financeiro.pagarTexto(t.descricao,a),rotuloConfirmar:i.acoes.confirmar,variante:`primary`})}var K={painel:void 0,transacoes:i.financeiro.transacoes,categorias:i.financeiro.categorias,recorrencias:i.financeiro.recorrencias},q={transacoes:i.financeiro.novaTransacao,categorias:i.financeiro.novaCategoria,recorrencias:i.financeiro.novaRecorrencia},J;function Y(e){return e.detail}var X={voltarPara(e){return I(e)===`painel`?`home`:`financeiro`},titulo(e){return K[I(e)]},acoes(e){let n=I(e);if(!(n===`painel`||k))return t`
      <kk-icon-button
        name="plus"
        label=${q[n]}
        @click=${()=>J?.novo()}
      ></kk-icon-button>
    `},conteudo(e){return P(),M===null?(L(),A?t`
      <kk-financeiro
        vista=${I(e)}
        mes=${O}
        ?oculto=${E}
        .categorias=${C.map(_)}
        .transacoes=${w.map(y)}
        .recorrencias=${T.map(v)}
        ${l(e=>{J=e})}
        @kk-navigate=${e=>{let{vista:t}=e.detail;o(`financeiro/${t}`)}}
        @kk-month=${e=>{O=e.detail.mes}}
        @kk-visibility=${e=>{E=e.detail.oculto}}
        @kk-form=${e=>{k=e.detail.aberto,n()}}
        @kk-save=${e=>void V(Y(e))}
        @kk-delete=${e=>void U(Y(e))}
        @kk-toggle=${e=>void W(Y(e))}
      ></kk-financeiro>
    `:t`<div class="carregando"><kk-spinner></kk-spinner></div>`):s(M,F)}};export{X as telaFinanceiro};