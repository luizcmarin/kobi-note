import{r as e}from"./dinheiro-f7T9Mvpd.js";import{at as t,g as n,lt as r,m as i,nt as a,tt as o,v as s,y as c}from"./index-D0n52eAb.js";import{n as l}from"./ref-Ci5mtwJq.js";import{alternarAtivo as u,alternarPago as d,carregar as f,excluirCategoria as p,excluirRecorrencia as m,excluirTransacao as h,gerarPendentes as g,paraCategoria as _,paraRecorrencia as v,paraTransacao as y,salvarCategoria as b,salvarRecorrencia as x,salvarTransacao as S}from"./dados-B6A37GIf.js";var C=[],w=[],T=[],E=!0,D=!1,O=``,k=!1,A=!1,j=!1,M=null;async function N(){let e=await f();C=e.categorias,w=e.transacoes,T=e.recorrencias,o()}function P(){A||j||M!==null||(j=!0,(async()=>{try{await N(),await g(T)&&await N(),A=!0}catch(e){console.error(`financeiro: a carga falhou.`,e),M=c(e)}finally{j=!1,o()}})())}function F(){M=null,P(),o()}function I(e){let t=e.args[0];return t===`transacoes`||t===`categorias`||t===`recorrencias`?t:`painel`}function L(){D||(E=!0,D=!0,z())}var R=!1;function z(){R||(R=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``).split(`/`)[0]!==`financeiro`&&(D=!1,J?.fechar(),k=!1)}))}function B(e,t){return t>0?e.find(e=>e.id===t):void 0}async function V(e){if(e.especie===`transacao`){await S(e.registro,B(w,e.registro.id)),i(t.financeiro.transacaoSalva),await N();return}if(e.especie===`categoria`){await b(e.registro),i(t.financeiro.categoriaSalva),await N();return}await x(e.registro,B(T,e.registro.id)),i(t.financeiro.recorrenciaSalva),await N(),await g(T)&&await N()}var H={transacao:{titulo:t.financeiro.excluirTransacao,texto:t.acervo.excluirTexto,feito:t.financeiro.transacaoExcluida,excluir:h},categoria:{titulo:t.financeiro.excluirCategoria,texto:t.financeiro.excluirCategoriaTexto,feito:t.financeiro.categoriaExcluida,excluir:p},recorrencia:{titulo:t.financeiro.excluirRecorrencia,texto:t.financeiro.excluirRecorrenciaTexto,feito:t.financeiro.recorrenciaExcluida,excluir:m}};async function U(e){let r=H[e.especie];await n({titulo:r.titulo,texto:r.texto,rotuloConfirmar:t.acoes.excluir,variante:`danger`})&&(await r.excluir(e.registro.id),i(r.feito),await N())}async function W(e){if(e.especie===`transacao`){let t=B(w,e.registro.id);t!==void 0&&await G(t)&&await d(t)}if(e.especie===`recorrencia`){let t=B(T,e.registro.id);t!==void 0&&await u(t)}await N()}function G(r){if(r.esta_pago===1)return n({titulo:t.financeiro.estornar,texto:t.financeiro.estornarTexto(r.descricao),rotuloConfirmar:t.acoes.confirmar,variante:`warning`});let i=r.tipo===0,a=e(r.valor);return n({titulo:i?t.financeiro.receber:t.financeiro.pagar,texto:i?t.financeiro.receberTexto(r.descricao,a):t.financeiro.pagarTexto(r.descricao,a),rotuloConfirmar:t.acoes.confirmar,variante:`primary`})}var K={painel:void 0,transacoes:t.financeiro.transacoes,categorias:t.financeiro.categorias,recorrencias:t.financeiro.recorrencias},q={transacoes:t.financeiro.novaTransacao,categorias:t.financeiro.novaCategoria,recorrencias:t.financeiro.novaRecorrencia},J;function Y(e){return e.detail}var X={voltarPara(e){return I(e)===`painel`?`home`:`financeiro`},titulo(e){return K[I(e)]},acoes(e){let t=I(e);if(!(t===`painel`||k))return r`
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
        @kk-navigate=${e=>{let{vista:t}=e.detail;a(`financeiro/${t}`)}}
        @kk-month=${e=>{O=e.detail.mes}}
        @kk-visibility=${e=>{E=e.detail.oculto}}
        @kk-form=${e=>{k=e.detail.aberto,o()}}
        @kk-save=${e=>void V(Y(e))}
        @kk-delete=${e=>void U(Y(e))}
        @kk-toggle=${e=>void W(Y(e))}
      ></kk-financeiro>
    `:r`<div class="carregando"><kk-spinner></kk-spinner></div>`):s(M,F)}};export{X as telaFinanceiro};