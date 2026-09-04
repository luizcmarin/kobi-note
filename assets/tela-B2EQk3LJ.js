import{i as e}from"./lit-CL39YOSA.js";import{t}from"./strings-BU-HmFix.js";import{r as n}from"./dinheiro-BNxPMXH0.js";import{D as r,E as i,o as a,r as o}from"./index-QyzyfOkc.js";import{n as s}from"./ref-9J_G_2te.js";import{alternarAtivo as c,alternarPago as l,carregar as u,excluirCategoria as d,excluirRecorrencia as f,excluirTransacao as p,gerarPendentes as m,paraCategoria as h,paraRecorrencia as g,paraTransacao as _,salvarCategoria as v,salvarRecorrencia as y,salvarTransacao as b}from"./dados-DInWvoq6.js";var x=[],S=[],C=[],w=!0,T=!1,E=``,D=!1,O=!1,k=!1;async function A(){let e=await u();x=e.categorias,S=e.transacoes,C=e.recorrencias,i()}function j(){O||k||(k=!0,(async()=>{try{await A(),await m(C)&&await A(),O=!0}finally{k=!1,i()}})())}function M(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function N(){T||(w=!0,T=!0,F())}var P=!1;function F(){P||(P=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`financeiro`&&(T=!1,W?.fechar(),D=!1)}))}function I(e,t){return t>0?e.find(e=>e.id===t):void 0}async function L(e){if(e.especie===`transacao`){await b(e.registro,I(S,e.registro.id)),o(t.financeiro.transacaoSalva),await A();return}if(e.especie===`categoria`){await v(e.registro),o(t.financeiro.categoriaSalva),await A();return}await y(e.registro,I(C,e.registro.id)),o(t.financeiro.recorrenciaSalva),await A(),await m(C)&&await A()}var R={transacao:{titulo:t.financeiro.excluirTransacao,texto:t.acervo.excluirTexto,feito:t.financeiro.transacaoExcluida,excluir:p},categoria:{titulo:t.financeiro.excluirCategoria,texto:t.financeiro.excluirCategoriaTexto,feito:t.financeiro.categoriaExcluida,excluir:d},recorrencia:{titulo:t.financeiro.excluirRecorrencia,texto:t.financeiro.excluirRecorrenciaTexto,feito:t.financeiro.recorrenciaExcluida,excluir:f}};async function z(e){let n=R[e.especie];await a({titulo:n.titulo,texto:n.texto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&(await n.excluir(e.registro.id),o(n.feito),await A())}async function B(e){if(e.especie===`transacao`){let t=I(S,e.registro.id);t!==void 0&&await V(t)&&await l(t)}if(e.especie===`recorrencia`){let t=I(C,e.registro.id);t!==void 0&&await c(t)}await A()}function V(e){if(e.esta_pago===1)return a({titulo:t.financeiro.estornar,texto:t.financeiro.estornarTexto(e.descricao),rotuloConfirmar:t.acoes.confirmar,variante:`warning`});let r=e.tipo===0,i=n(e.valor);return a({titulo:r?t.financeiro.receber:t.financeiro.pagar,texto:r?t.financeiro.receberTexto(e.descricao,i):t.financeiro.pagarTexto(e.descricao,i),rotuloConfirmar:t.acoes.confirmar,variante:`primary`})}var H={painel:void 0,transacoes:t.financeiro.transacoes,categorias:t.financeiro.categorias,recorrencias:t.financeiro.recorrencias},U={transacoes:t.financeiro.novaTransacao,categorias:t.financeiro.novaCategoria,recorrencias:t.financeiro.novaRecorrencia},W;function G(e){return e.detail}var K={voltarPara(e){return M(e)===`painel`?`home`:`financeiro`},titulo(e){return H[M(e)]},acoes(t){let n=M(t);if(!(n===`painel`||D))return e`
      <kk-icon-button
        name="plus"
        label=${U[n]}
        @click=${()=>W?.novo()}
      ></kk-icon-button>
    `},conteudo(t){return j(),N(),O?e`
      <kk-financeiro
        vista=${M(t)}
        mes=${E}
        ?oculto=${w}
        .categorias=${x.map(h)}
        .transacoes=${S.map(_)}
        .recorrencias=${C.map(g)}
        ${s(e=>{W=e})}
        @kk-navigate=${e=>{let{vista:t}=e.detail;r(`financeiro/${t}`)}}
        @kk-month=${e=>{E=e.detail.mes}}
        @kk-visibility=${e=>{w=e.detail.oculto}}
        @kk-form=${e=>{D=e.detail.aberto,i()}}
        @kk-save=${e=>void L(G(e))}
        @kk-delete=${e=>void z(G(e))}
        @kk-toggle=${e=>void B(G(e))}
      ></kk-financeiro>
    `:e`<div class="carregando"><kk-spinner></kk-spinner></div>`}};export{K as telaFinanceiro};