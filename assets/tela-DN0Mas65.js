import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-V1DWQvwW.js";import{i as r}from"./formato-BoZO7uRM.js";import{r as i}from"./rotas-CR8kk0YZ.js";import{s as a}from"./banco-Ddb9erT8.js";import{A as o,C as s,F as c,I as l,N as u,P as d,at as f,ct as p,dt as m,ft as h,gt as g,ht as _,mt as v,ot as y,pt as b,rt as x,st as ee,tt as te}from"./index-DjPQ20Ch.js";import{t as ne}from"./carga-4VW0gvij.js";import{c as re,d as S,f as C,l as w,n as ie,o as T,p as E,r as D,u as O}from"./cofre-CiWKtjpm.js";async function k(){return(await T()).length}async function A(){let e=await T();if(e.length===0)return[];let t=await O(),n=[];for(let r of e)n.push({rotulo:r.rotulo,tipo_mime:r.tipo_mime,data_criacao:r.data_criacao,conteudo:await D(t,r.blob_criptografado)});return n}function j(e){return`${e.rotulo}\u0000${e.tipo_mime}\u0000${e.data_criacao}`}async function M(e){let t=E()?await O():await C(),n=new Set((await T()).map(j)),r=a(`documentos_cofre`),i=0;for(let a of e)n.has(j(a))||(await r.salvar({rotulo:a.rotulo,tipo_mime:a.tipo_mime,blob_criptografado:await ie(t,a.conteudo),data_criacao:a.data_criacao}),i+=1);return i}var N={projetos:{bioma:{versao:`1.0.0`,build:`2026-10-15T20:01:59.698Z`},admin:{versao:`1.0.205`,build:`2026-10-15T20:01:59.698Z`},note:{versao:`1.1.311`,build:`2026-10-15T11:08:03.098Z`},ui:{versao:`1.0.167`,build:`2026-10-15T19:58:55.211Z`},dev:{versao:`1.1.153`,build:`2026-10-15T11:12:15.089Z`},flow:{versao:`0.0.135`,build:`2026-10-15T11:11:29.400Z`},org:{versao:`1.1.38`,build:`2026-10-15T15:45:46.039Z`},sql:{versao:`3.53.4`,build:`2026-10-14T18:46:08.096Z`}},componentesUi:93,pacotes:[{nome:`@kobi/admin`,versao:`1.0.205`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.153`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.135`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`1.1.311`,caminho:`apps/note`},{nome:`@kobi/org`,versao:`1.1.38`,caminho:`apps/org`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/idiomas`,versao:`0.1.0`,caminho:`packages/idiomas`},{nome:`@kobi/kit`,versao:`1.0.167`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_conexoes_grupos:39,not_criacao_modulos:63,not_cronologia_eventos:645,not_estoque_alimentos:32,not_faq:63,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1337,not_personagens:110,not_poesias:273,not_principios:112,not_receitas:4},codigo:{admin:{arquivos:56,linhas:16212,testes:10},note:{arquivos:289,linhas:103418,testes:34},org:{arquivos:127,linhas:50645,testes:32},flow:{arquivos:143,linhas:61047,testes:46},dev:{arquivos:49,linhas:13790,testes:21},ui:{arquivos:390,linhas:49548,testes:106},bioma:{arquivos:142,linhas:49906,testes:69}},atividade:{admin:[0,0,0,0,0,0,14,4,13,31,25,18],note:[0,0,0,0,0,0,19,17,13,46,46,32],org:[0,0,0,0,0,0,0,0,0,0,62,18],flow:[0,0,0,0,0,0,9,5,19,19,21,9],dev:[0,0,0,0,0,0,13,3,5,19,22,10],ui:[0,0,0,0,0,0,4,18,11,18,36,15],bioma:[0,0,0,0,0,0,27,12,17,38,68,25]}}.projetos.note?.versao??``,P=2e4;function F(e){let{[te]:t,...n}=e.stores;return{...e,stores:n}}function I(e){return e instanceof w?n.prep.semPrf:e instanceof re?n.prep.gestoRecusado:n.app.acaoFalhou}var L=`inicio`,R=0,z=null,B=null,V=!1,H=!1,U=!1,W=``,G=null,K=new ne(`mudança`,async()=>{R=await k(),z=l()});async function q(){V=!0,p();try{B=await A()}catch(e){console.error(`mudança: o cofre não abriu.`,e),s(I(e),`danger`)}finally{V=!1,p()}}function ae(){let e=open(`${u.novo}/#/mudanca`,`_blank`);if(e===null){W=n.mudanca.bloqueada,p();return}W=``,U=!1,L=`esperando`,G=new AbortController;let t=setTimeout(()=>{U=!0,p()},P);p(),v(u,{janela:e,sinal:G.signal,montar:async()=>({backup:F(await f(N)),cofre:B??[]})}).then(()=>{c(),z=l(),L=`feito`}).catch(e=>{L=`inicio`,G?.signal.aborted!==!0&&(console.error(`mudança: não terminou.`,e),W=e instanceof _&&e.motivo===`recusado`?n.mudanca.recusado:n.mudanca.falhou)}).finally(()=>{clearTimeout(t),G=null,p()})}function J(){G?.abort()}async function oe(){H=!0,p();try{let e=await x(N);s(n.backup.baixado(e.arquivo))}catch(e){console.error(`mudança: o backup não saiu.`,e),s(n.backup.falhou,`danger`)}finally{H=!1,p()}}function se(){return e`
    <kk-button variant="primary" href=${`${u.novo}/`} target="_blank">
      <kk-icon slot="prefix" name="external-link"></kk-icon>
      ${n.mudanca.abrirNovo}
    </kk-button>
  `}function ce(){return R===0?t:B===null?e`
    <section class="mudanca__cartao">
      <p>${n.mudanca.cofreTem(R)}</p>
      <kk-button ?loading=${V} @click=${()=>void q()}>
        <kk-icon slot="prefix" name="lock-open"></kk-icon>
        ${n.mudanca.abrirCofre}
      </kk-button>
      <p class="mudanca__ajuda">${n.mudanca.cofreFica}</p>
    </section>
  `:e`<kk-alert variant="success" open>${n.mudanca.cofrePronto(B.length)}</kk-alert>`}function le(){return L===`esperando`?e`
      <section class="mudanca__cartao" aria-live="polite">
        <p class="mudanca__esperando"><kk-spinner></kk-spinner> ${n.mudanca.aguardando}</p>
        <p class="mudanca__ajuda">${n.mudanca.aguardandoAjuda}</p>
        ${U?e`<p class="mudanca__ajuda">${n.mudanca.naoAbriu}</p>`:t}
        <kk-button @click=${J}>${n.acoes.cancelar}</kk-button>
      </section>
    `:e`
    ${ce()}
    <section class="mudanca__cartao">
      <p>${n.mudanca.comoVai}</p>
      <kk-button variant=${z===null?`primary`:`default`} @click=${ae}>
        <kk-icon slot="prefix" name="arrow-right"></kk-icon>
        ${z===null?n.mudanca.levar:n.mudanca.levarDeNovo}
      </kk-button>
      ${z===null?t:e`<p class="mudanca__ajuda">${n.mudanca.levarDeNovoAjuda}</p>`}
    </section>
  `}function ue(r){return e`
    <section class="mudanca__cartao">
      <h2 class="secao">${n.mudanca.arquivoTitulo}</h2>
      <p>${r?n.mudanca.iphone(d):n.mudanca.arquivoPassos(d)}</p>
      ${R>0?e`<p class="mudanca__ajuda">${n.mudanca.cofreArquivo}</p>`:t}
      <kk-button
        variant=${r?`primary`:`default`}
        ?loading=${H}
        @click=${()=>void oe()}
      >
        <kk-icon slot="prefix" name="download"></kk-icon>
        ${n.backup.baixar}
      </kk-button>
    </section>
  `}function de(){let a=K.espera();if(a!==null)return a;let o=b();return e`
    <div class="mudanca">
      <p class="mudanca__destaque">${n.mudanca.mudou(`Kobi Note`,d)}</p>
      <p>${n.mudanca.porque}</p>

      ${L===`feito`?e`<kk-alert variant="success" open>
              ${n.mudanca.feito(`Kobi Note`)} ${n.mudanca.desinstalar}
            </kk-alert>`:z===null?t:e`<kk-alert variant="success" open>${n.mudanca.jaLevou(r(z))}</kk-alert>`}
      ${W===``?t:e`<kk-alert variant="danger" open>${W}</kk-alert>`}
      ${z===null?t:se()}

      ${o?t:le()} ${ue(o)}

      <kk-button variant="text" @click=${()=>i(`home`)}>${n.mudanca.ficarAqui}</kk-button>
    </div>
  `}var Y=`esperando`,X=!1,Z=[],Q=!1,$=null;function fe(e){if(typeof e!=`object`||!e)throw Error(`pacote`);let{backup:t,cofre:n}=e;return{backup:t,cofre:Array.isArray(n)?n:[]}}async function pe(e){let t=fe(e),r=y(t.backup);if(!await o({titulo:n.mudanca.trazerTitulo,texto:n.mudanca.trazerTexto(r.registros),rotuloConfirmar:n.mudanca.trazer,variante:`danger`}))throw new g;Y=`gravando`,p(),await ee(r),Z=t.cofre}async function me(){Z.length!==0&&(Y=`cofre`,p(),await new Promise(e=>{$=e}))}async function he(){Q=!0,p();try{await M(Z),$?.()}catch(e){console.error(`mudança: o cofre não foi guardado.`,e),s(I(e),`danger`)}finally{Q=!1,p()}}function ge(){X||(X=!0,h(u,{aplicar:pe,aoChegar:()=>{Y=`gravando`,p()}}).then(async e=>{e===`feito`?(await me(),Y=`chegou`,setTimeout(()=>{location.hash=`#/home`,location.reload()},1500)):Y=`sem-origem`}).catch(e=>{e instanceof g?Y=`cancelada`:(console.error(`mudança: o que chegou não foi gravado.`,e),Y=`erro`)}).finally(p))}function _e(){let t=S();return e`
    <section class="mudanca__cartao">
      <p>${n.mudanca.cofreFalta(Z.length)}</p>
      ${t?e`<kk-button variant="primary" ?loading=${Q} @click=${()=>void he()}>
              <kk-icon slot="prefix" name="lock"></kk-icon>
              ${n.mudanca.cofreGuardar}
            </kk-button>`:e`<p class="mudanca__ajuda">${n.prep.semBiometria}</p>`}
      <kk-button variant="text" ?disabled=${Q} @click=${()=>$?.()}>
        ${n.mudanca.cofreDepois}
      </kk-button>
      <p class="mudanca__ajuda">${n.mudanca.cofreDepoisAjuda}</p>
    </section>
  `}function ve(){return ge(),e`<div class="mudanca">${(()=>{switch(Y){case`esperando`:case`gravando`:return e`<p class="mudanca__esperando" aria-live="polite">
          <kk-spinner></kk-spinner> ${Y===`esperando`?n.mudanca.recebendo:n.mudanca.gravando}
        </p>`;case`cofre`:return _e();case`chegou`:return e`<kk-alert variant="success" open>${n.mudanca.chegou}</kk-alert>`;case`cancelada`:return e`<kk-alert variant="warning" open>${n.mudanca.cancelada}</kk-alert>`;case`erro`:return e`<kk-alert variant="danger" open>${n.backup.restauracaoFalhou}</kk-alert>`;default:return e`
          <p>${n.mudanca.semOrigem(`Kobi Note`)}</p>
          <kk-button @click=${()=>i(`sobre/backup`)}>
            <kk-icon slot="prefix" name="upload"></kk-icon>
            ${n.mudanca.irParaBackup}
          </kk-button>
        `}})()}</div>`}var ye={titulo:()=>n.mudanca.titulo,conteudo:()=>m(u)?de():ve()};export{ye as telaMudanca};