import{r as e}from"./dinheiro-f7T9Mvpd.js";import{b as t,ct as n,dt as r,g as i,ht as a,m as o,st as s,y as c}from"./index-Cqu0QY4l.js";import{n as l}from"./ref-B2ECdbmK.js";import{alternarAtivo as u,alternarPago as d,carregar as f,excluirCategoria as p,excluirRecorrencia as m,excluirTransacao as h,gerarPendentes as g,paraCategoria as _,paraRecorrencia as v,paraTransacao as y,salvarCategoria as b,salvarRecorrencia as x,salvarTransacao as S}from"./dados-TYu1rANC.js";var C=[],w=[],T=[],E=!0,D=!1,O=``,k=!1,A=!1,j=!1,M=null;async function N(){let e=await f();C=e.categorias,w=e.transacoes,T=e.recorrencias,s()}function P(){A||j||M!==null||(j=!0,(async()=>{try{await N(),await g(T)&&await N(),A=!0}catch(e){console.error(`financeiro: a carga falhou.`,e),M=t(e)}finally{j=!1,s()}})())}function F(){M=null,P(),s()}function I(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function L(){D||(E=!0,D=!0,z())}var R=!1;function z(){R||(R=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`financeiro`&&(D=!1,J?.fechar(),k=!1)}))}function B(e,t){return t>0?e.find(e=>e.id===t):void 0}async function V(e){try{if(e.especie===`transacao`){await S(e.registro,B(w,e.registro.id)),o(r.financeiro.transacaoSalva),await N();return}if(e.especie===`categoria`){await b(e.registro),o(r.financeiro.categoriaSalva),await N();return}await x(e.registro,B(T,e.registro.id)),o(r.financeiro.recorrenciaSalva),await N(),await g(T)&&await N()}catch(e){console.error(`Financeiro: a gravação falhou.`,e),o(r.financeiro.naoSalvo,`danger`)}}var H={transacao:{titulo:r.financeiro.excluirTransacao,texto:r.acervo.excluirTexto,feito:r.financeiro.transacaoExcluida,excluir:h},categoria:{titulo:r.financeiro.excluirCategoria,texto:r.financeiro.excluirCategoriaTexto,feito:r.financeiro.categoriaExcluida,excluir:p},recorrencia:{titulo:r.financeiro.excluirRecorrencia,texto:r.financeiro.excluirRecorrenciaTexto,feito:r.financeiro.recorrenciaExcluida,excluir:m}};async function U(e){let t=H[e.especie];if(await i({titulo:t.titulo,texto:t.texto,rotuloConfirmar:r.acoes.excluir,variante:`danger`})){try{await t.excluir(e.registro.id)}catch(e){console.error(`Financeiro: a exclusão falhou.`,e),o(r.financeiro.naoExcluido,`danger`);return}o(t.feito),await N()}}async function W(e){try{if(e.especie===`transacao`){let t=B(w,e.registro.id);t!==void 0&&await G(t)&&await d(t)}if(e.especie===`recorrencia`){let t=B(T,e.registro.id);t!==void 0&&await u(t)}}catch(e){console.error(`Financeiro: a alteração falhou.`,e),o(r.financeiro.naoAlterado,`danger`);return}await N()}function G(t){if(t.esta_pago===1)return i({titulo:r.financeiro.estornar,texto:r.financeiro.estornarTexto(t.descricao),rotuloConfirmar:r.acoes.confirmar,variante:`warning`});let n=t.tipo===0,a=e(t.valor);return i({titulo:n?r.financeiro.receber:r.financeiro.pagar,texto:n?r.financeiro.receberTexto(t.descricao,a):r.financeiro.pagarTexto(t.descricao,a),rotuloConfirmar:r.acoes.confirmar,variante:`primary`})}var K={painel:void 0,transacoes:r.financeiro.transacoes,categorias:r.financeiro.categorias,recorrencias:r.financeiro.recorrencias},q={transacoes:r.financeiro.novaTransacao,categorias:r.financeiro.novaCategoria,recorrencias:r.financeiro.novaRecorrencia},J;function Y(e){return e.detail}var X={voltarPara(e){return I(e)===`painel`?`home`:`financeiro`},titulo(e){return K[I(e)]},acoes(e){let t=I(e);if(!(t===`painel`||k))return a`
      <kk-icon-button
        name="plus"
        label=${q[t]}
        @click=${()=>J?.novo()}
      ></kk-icon-button>
    `},conteudo(e){return P(),M===null?(L(),A?a`
      <kk-financeiro
        vista=${I(e)}
        mes=${O}
        ?oculto=${E}
        lancamento-corrente
        .categorias=${C.map(_)}
        .transacoes=${w.map(y)}
        .recorrencias=${T.map(v)}
        ${l(e=>{J=e})}
        @kk-navigate=${e=>{let{vista:t}=e.detail;n(`financeiro/${t}`)}}
        @kk-month=${e=>{O=e.detail.mes}}
        @kk-visibility=${e=>{E=e.detail.oculto}}
        @kk-form=${e=>{k=e.detail.aberto,s()}}
        @kk-save=${e=>void V(Y(e))}
        @kk-delete=${e=>void U(Y(e))}
        @kk-toggle=${e=>void W(Y(e))}
      ></kk-financeiro>
    `:a`<div class="carregando"><kk-spinner></kk-spinner></div>`):c(M,F)}};export{X as telaFinanceiro};