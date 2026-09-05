import{r as e}from"./dinheiro-BNxPMXH0.js";import{$ as t,Q as n,at as r,nt as i,p as a,u as o}from"./index-BIyMCMf-.js";import{n as s}from"./ref-y5FyU4ya.js";import{alternarAtivo as c,alternarPago as l,carregar as u,excluirCategoria as d,excluirRecorrencia as f,excluirTransacao as p,gerarPendentes as m,paraCategoria as h,paraRecorrencia as g,paraTransacao as _,salvarCategoria as v,salvarRecorrencia as y,salvarTransacao as b}from"./dados-F4Rryahh.js";var x=[],S=[],C=[],w=!0,T=!1,E=``,D=!1,O=!1,k=!1;async function A(){let e=await u();x=e.categorias,S=e.transacoes,C=e.recorrencias,n()}function j(){O||k||(k=!0,(async()=>{try{await A(),await m(C)&&await A(),O=!0}finally{k=!1,n()}})())}function M(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function N(){T||(w=!0,T=!0,F())}var P=!1;function F(){P||(P=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`financeiro`&&(T=!1,W?.fechar(),D=!1)}))}function I(e,t){return t>0?e.find(e=>e.id===t):void 0}async function L(e){if(e.especie===`transacao`){await b(e.registro,I(S,e.registro.id)),o(i.financeiro.transacaoSalva),await A();return}if(e.especie===`categoria`){await v(e.registro),o(i.financeiro.categoriaSalva),await A();return}await y(e.registro,I(C,e.registro.id)),o(i.financeiro.recorrenciaSalva),await A(),await m(C)&&await A()}var R={transacao:{titulo:i.financeiro.excluirTransacao,texto:i.acervo.excluirTexto,feito:i.financeiro.transacaoExcluida,excluir:p},categoria:{titulo:i.financeiro.excluirCategoria,texto:i.financeiro.excluirCategoriaTexto,feito:i.financeiro.categoriaExcluida,excluir:d},recorrencia:{titulo:i.financeiro.excluirRecorrencia,texto:i.financeiro.excluirRecorrenciaTexto,feito:i.financeiro.recorrenciaExcluida,excluir:f}};async function z(e){let t=R[e.especie];await a({titulo:t.titulo,texto:t.texto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})&&(await t.excluir(e.registro.id),o(t.feito),await A())}async function B(e){if(e.especie===`transacao`){let t=I(S,e.registro.id);t!==void 0&&await V(t)&&await l(t)}if(e.especie===`recorrencia`){let t=I(C,e.registro.id);t!==void 0&&await c(t)}await A()}function V(t){if(t.esta_pago===1)return a({titulo:i.financeiro.estornar,texto:i.financeiro.estornarTexto(t.descricao),rotuloConfirmar:i.acoes.confirmar,variante:`warning`});let n=t.tipo===0,r=e(t.valor);return a({titulo:n?i.financeiro.receber:i.financeiro.pagar,texto:n?i.financeiro.receberTexto(t.descricao,r):i.financeiro.pagarTexto(t.descricao,r),rotuloConfirmar:i.acoes.confirmar,variante:`primary`})}var H={painel:void 0,transacoes:i.financeiro.transacoes,categorias:i.financeiro.categorias,recorrencias:i.financeiro.recorrencias},U={transacoes:i.financeiro.novaTransacao,categorias:i.financeiro.novaCategoria,recorrencias:i.financeiro.novaRecorrencia},W;function G(e){return e.detail}var K={voltarPara(e){return M(e)===`painel`?`home`:`financeiro`},titulo(e){return H[M(e)]},acoes(e){let t=M(e);if(!(t===`painel`||D))return r`
      <kk-icon-button
        name="plus"
        label=${U[t]}
        @click=${()=>W?.novo()}
      ></kk-icon-button>
    `},conteudo(e){return j(),N(),O?r`
      <kk-financeiro
        vista=${M(e)}
        mes=${E}
        ?oculto=${w}
        .categorias=${x.map(h)}
        .transacoes=${S.map(_)}
        .recorrencias=${C.map(g)}
        ${s(e=>{W=e})}
        @kk-navigate=${e=>{let{vista:n}=e.detail;t(`financeiro/${n}`)}}
        @kk-month=${e=>{E=e.detail.mes}}
        @kk-visibility=${e=>{w=e.detail.oculto}}
        @kk-form=${e=>{D=e.detail.aberto,n()}}
        @kk-save=${e=>void L(G(e))}
        @kk-delete=${e=>void z(G(e))}
        @kk-toggle=${e=>void B(G(e))}
      ></kk-financeiro>
    `:r`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{K as telaFinanceiro};