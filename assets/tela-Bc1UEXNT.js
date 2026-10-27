import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{t as r}from"./html-C5yDSNPC.js";import{r as i}from"./rotas-CR8kk0YZ.js";import{s as a}from"./banco-H0jShgoR.js";import{s as o}from"./dados-DajL1VQY.js";import{T as s,ct as c,w as l}from"./index-DA5sF2fG.js";import{t as u}from"./carga-M22LLosZ.js";import{t as d}from"./leitura-BxzqQUPY.js";import{a as ee,r as te,t as ne}from"./recordes-Cc5YvGyu.js";import{n as f,t as re}from"./sorteio-Bln1H9Cu.js";import{a as ie,i as ae,n as oe,o as se,r as ce}from"./note-HZ41aPeR.js";import{t as le}from"./rascunho-CakWynKC.js";import{a as ue,d as de,i as p,r as fe}from"./dados-DSTxgmlH.js";var pe=`trilhas`;function me(e){return{id:Number(e.id),titulo:String(e.titulo??``).trim(),texto:String(e.texto??``),referencia:String(e.referencia??``).trim(),obra:String(e.obra_fonte??``).trim(),link:String(e.link_fonte??``).trim()}}function he(e,t){return Number(e.ordem)-Number(t.ordem)||Number(e.id)-Number(t.id)}function ge(e,t){let n=oe[e],r=new Map,i=new Map,a=new Map,o=[];for(let n of[...t].sort(he)){if(n.id===void 0||n.trilha!==e)continue;let t=se({trilha:String(n.trilha??``),capitulo:String(n.capitulo??``),tipo:String(n.tipo??``),titulo:String(n.titulo??``),texto:String(n.texto??``),dados:String(n.dados??``),referencia:String(n.referencia??``)});if(t===null)continue;let s=me(n);switch(t.tipo){case`parte`:r.has(t.parte)||r.set(t.parte,s);break;case`abertura`:i.has(t.capitulo)||i.set(t.capitulo,{...s,dados:t.dados});break;case`item`:a.set(t.capitulo,[...a.get(t.capitulo)??[],{...s,dados:t.dados}]);break;case`pergunta`:o.push({...s,capitulo:t.capitulo,escolha:t.dados})}}let s=[];n.capitulos.forEach((t,c)=>{let l=i.get(t),u=n.fichas[t],d=a.get(t)??[];u===void 0||l===void 0||d.length<u.minimo||u.mecanica===`desafio`&&o.length<10||r.has(u.parte)&&s.push({trilha:e,chave:t,numero:c+1,ficha:u,abertura:l,itens:d})});let c=[];return n.partes.forEach((e,t)=>{let n=r.get(e),i=s.filter(t=>t.ficha.parte===e);n!==void 0&&i.length!==0&&c.push({chave:e,numero:t+1,titulo:n.titulo,texto:n.texto,referencia:n.referencia,capitulos:i})}),{trilha:e,partes:c,capitulos:s,perguntas:o}}function m(e,t,n){let r=e.find(e=>e.jogo===t&&e.modo===n);return Math.max(0,Math.min(3,Number(r?.melhor_pontos)||0))}function _e(e,t){return e.capitulos.filter(n=>m(t,e.trilha,n.chave)>0).length}function ve(e,t){return e.capitulos.find(n=>m(t,e.trilha,n.chave)===0)??null}function ye(e,t){let n=e.capitulos.findIndex(e=>e.chave===t);return n===-1?null:e.capitulos[n+1]??null}function be(e,t){let n=e.findIndex(e=>e.posicao>t);return n===-1?e.length:n}function xe(e,t=10){let n=new Map;for(let t of f(e))n.set(t.capitulo,[...n.get(t.capitulo)??[],t]);let r=[];for(;r.length<t&&n.size>0;)for(let e of f([...n.keys()])){let i=n.get(e)??[],a=i.shift();if(a!==void 0&&r.push(a),i.length===0&&n.delete(e),r.length===t)break}return r}function Se(){return a(`trilhas`).todos()}function h(t,n=``){return e`<div class="prosa ${n}">${s(t)}</div>`}function g(n){return n===``?t:e`<p class="trilhas__referencia-bloco">${n}</p>`}function Ce(e,t,n){return n===null?``:e===t?`certa`:e===n?`errada`:`apagada`}function we(t,n,r,i){return e`
    <div class="trilhas__alternativas">
      ${t.map(t=>e`
          <button
            class="trilhas__alternativa"
            data-original=${t.original}
            data-tom=${Ce(t.original,n,r)}
            ?disabled=${r!==null}
            @click=${()=>i(t.original)}
          >
            ${t.texto}
          </button>
        `)}
    </div>
  `}function Te(r,i,a){return e`
    <kk-alert open class="trilhas__retorno" variant=${r?`success`:`warning`}>
      ${r?n.trilhas.acertou:n.trilhas.errou}
      ${i===``?t:e`<span class="trilhas__referencia">— ${i}</span>`}
      ${a??t}
    </kk-alert>
  `}function _(t,r,i=n.trilhas.passo){return e`
    <div class="trilhas__passos">
      <span>${i(t,r)}</span>
      <kk-progress-bar value=${Math.round(t/Math.max(1,r)*100)}></kk-progress-bar>
    </div>
  `}function v(t,n,r=!0){return e`
    <div class="trilhas__seguir">
      <kk-button variant=${r?`primary`:`default`} @click=${n}>
        ${t}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
      </kk-button>
    </div>
  `}function y(e,t,r,i=n.trilhas.concluir){return e?v(i,t):v(n.trilhas.proximo,r)}function Ee(t){return e`
    <span class="trilhas__estrelas" role="img" aria-label=${n.trilhas.estrelas(t)}>
      ${[1,2,3].map(n=>e`<kk-icon
            name="star"
            variant=${n<=t?`filled`:`outline`}
            data-acesa=${n<=t?`sim`:`nao`}
          ></kk-icon>`)}
    </span>
  `}function De(t=``){return e`<kk-icon
    class="trilhas__selo ${t}"
    variant="filled"
    name="rosette-discount-check"
    label=${n.trilhas.comSelo}
  ></kk-icon>`}function Oe(r,i){return r===``?t:e`<p class="trilhas__fonte">
    <a href=${r} target="_blank" rel="noopener">
      <kk-icon name="external-link"></kk-icon>${i===``?n.trilhas.lerFonte:i}
    </a>
  </p>`}function b(t){return e`<p class="trilhas__chamada">${t}</p>`}var ke=e=>({trilha:e,partes:[],capitulos:[],perguntas:[]}),Ae={jesus:ke(`jesus`),organizacao:ke(`organizacao`)},x=[],je=new u(pe,async()=>{let[e,...t]=await Promise.all([Se(),...ae.map(e=>te(e))]);Ae={jesus:ge(`jesus`,e),organizacao:ge(`organizacao`,e)},x=t.flat()});function S(e){return Ae[e]}function C(){return x}async function Me(e,t,n){try{let r=await ee({jogo:e,modo:t,nivel:1},n);return x=ne(x,r.recorde),r}catch(e){return console.error(`trilhas: o fim do capítulo não foi gravado.`,e),null}}var w=[],Ne=[],T=[],E=0;function Pe(e){w=xe(S(e.trilha).perguntas),Ne=w.map(e=>re(e.escolha.alternativas)),T=w.map(()=>null),E=0}function Fe(r,i){let a=w[E],o=Ne[E];if(a===void 0||o===void 0)return e``;let s=w.length,l=T[E]??null,u=w.filter((e,t)=>T[t]===e.escolha.correta).length;return e`
    ${_(E+1,s,n.trilhas.desafio.pergunta)}
    <h2 class="trilhas__enunciado">${a.titulo}</h2>

    ${we(o,a.escolha.correta,l,e=>{T[E]===null&&(T=T.map((t,n)=>n===E?e:t),c())})}

    ${l===null?t:e`
          ${Te(l===a.escolha.correta,a.referencia)}
          ${y(E===s-1,()=>i(p(u,s)),()=>{E+=1,c()},n.trilhas.desafio.verResultado)}
        `}
  `}var Ie={reiniciar:Pe,desenhar:Fe},D=[],Le=[],O=[],k=0;function Re(e){D=f(e.itens),Le=D.map(e=>re(e.dados.alternativas)),O=D.map(()=>null),k=0}function ze(n,i){let a=D[k],o=Le[k];if(a===void 0||o===void 0)return e``;let s=D.length,l=O[k]??null,u=D.filter((e,t)=>O[t]===e.dados.correta).length;return e`
    ${_(k+1,s)}

    <h2 class="trilhas__enunciado">${a.titulo}</h2>
    ${r(a.texto)===``?t:e`<figure class="trilhas__balao">${h(a.texto)}</figure>`}

    ${we(o,a.dados.correta,l,e=>{O[k]===null&&(O=O.map((t,n)=>n===k?e:t),c())})}

    ${l===null?t:e`
          ${Te(l===a.dados.correta,a.referencia)}
          ${y(k===s-1,()=>i(p(u,s)),()=>{k+=1,c()})}
        `}
  `}var Be={reiniciar:Re,desenhar:ze},A=[],Ve=[],j=[],M=0;function He(e){A=f(e.itens),Ve=A.map(e=>re(e.dados.alternativas)),j=A.map(()=>null),M=0}function Ue(i,a){let o=A[M],s=Ve[M];if(o===void 0||s===void 0)return e``;let l=A.length,u=j[M]??null,d=A.filter((e,t)=>j[t]===e.dados.correta).length,{antes:ee,depois:te}=fe(r(o.texto),o.dados.lacuna);return e`
    ${_(M+1,l)}

    <blockquote class="trilhas__lacunado">
      <p>
        ${ee}<span class="trilhas__lacuna" data-cheia=${u===null?`nao`:`sim`}
          >${u===null?n.trilhas.lacunas.vazio:o.dados.lacuna}</span
        >${te}
      </p>
      <footer>${u===null?``:o.titulo}</footer>
    </blockquote>

    ${we(s,o.dados.correta,u,e=>{j[M]===null&&(j=j.map((t,n)=>n===M?e:t),c())})}

    ${u===null?t:e`
          ${Te(u===o.dados.correta,o.referencia)}
          ${y(M===l-1,()=>a(p(d,l)),()=>{M+=1,c()})}
        `}
  `}var We={reiniciar:He,desenhar:Ue},N=new d;function Ge(){N.fechar()}function Ke(e){return e.itens.map(e=>`<h3>${e.titulo}</h3>${e.texto}`).join(``)}function qe(t){return e`${t.itens.map(t=>e`<section class="trilhas__leitura-bloco">
      <h3>${t.titulo}</h3>
      ${h(t.texto)} ${g(t.referencia)}
    </section>`)}`}function Je(t,r){return e`
    <div class="trilhas__leitura-controles">
      ${N.botaoApresentar()} ${N.botaoFala(()=>Ke(t))}
    </div>

    <div class="trilhas__leitura">${qe(t)}</div>

    ${N.overlay(e`<div class="trilhas__leitura">${qe(t)}</div>`,()=>Ke(t))}

    ${v(n.trilhas.leitura.terminei,()=>{N.fechar(),r(1)})}
  `}function Ye(){N.fechar()}var Xe={reiniciar:Ge,desenhar:Je},P=[],F=[],Ze=0,I=null;function Qe(e){let t=f(e.itens);F=t.slice(0,1),P=t.slice(1),Ze=0,I=null}function $e(e){let t=P[0];if(t===void 0)return;let n=be(F.map(e=>e.dados),t.dados.posicao),r=e===n;r||(Ze+=1),F=[...F.slice(0,n),t,...F.slice(n)],P=P.slice(1),I={item:t,certo:r},c()}function et(r,i){return i?e`<li class="trilhas__aqui">
    <button data-lugar=${String(r)} @click=${()=>$e(r)}>
      <kk-icon name="arrow-bar-to-down"></kk-icon>${n.trilhas.linha.aqui}
    </button>
  </li>`:t}function tt(r,i){let a=P[0],o=a!==void 0;return e`
    ${o?e`
          ${b(n.trilhas.linha.chamada)}
          <article class="trilhas__marco trilhas__marco--davez" data-id=${String(a.id)}>
            <strong>${a.titulo}</strong>
          </article>
        `:t}

    ${I===null?t:e`<kk-alert open class="trilhas__retorno" variant=${I.certo?`success`:`warning`}>
            ${I.certo?n.trilhas.acertou:n.trilhas.linha.foiPara(I.item.dados.quando)}
          </kk-alert>`}

    <ol class="trilhas__linha">
      ${et(0,o)}
      ${F.map((n,r)=>e`
          <li
            class="trilhas__marco"
            data-id=${String(n.id)}
            data-recente=${I?.item.id===n.id?I.certo?`certo`:`errado`:`nao`}
          >
            <span class="trilhas__marco-quando">${n.dados.quando}</span>
            <strong>${n.titulo}</strong>
            ${o?t:h(n.texto)}
          </li>
          ${et(r+1,o)}
        `)}
    </ol>

    ${o?t:v(n.trilhas.concluir,()=>i(ue(Ze)))}
  `}var nt={reiniciar:Qe,desenhar:tt},L=0;function rt(){L=0}function it(e,t){let r=e.itens.length;L=Math.max(0,Math.min(r-1,t)),l(n.trilhas.passo(L+1,r)),c()}function at(t,r){let i=t.itens.length,a=t.itens[L];if(a===void 0)return e``;let o=L===i-1;return e`
    <ol class="trilhas__barras" aria-hidden="true">
      ${t.itens.map((t,n)=>e`<li data-estado=${n<L?`lida`:n===L?`atual`:`depois`}></li>`)}
    </ol>

    <article
      class="trilhas__pagina"
      data-pagina=${String(L)}
      @click=${e=>{if(e.target.closest(`a`)!==null)return;let n=e.currentTarget.getBoundingClientRect(),r=e.clientX-n.left>n.width/2!=(document.documentElement.dir===`rtl`);r&&o||it(t,L+(r?1:-1))}}
    >
      <h2 class="trilhas__pagina-titulo">${a.titulo}</h2>
      ${h(a.texto)} ${g(a.referencia)}
    </article>

    <div class="trilhas__navegacao">
      <kk-button outline ?disabled=${L===0} @click=${()=>it(t,L-1)}>
        <kk-icon slot="prefix" name="arrow-left"></kk-icon>${n.trilhas.anterior}
      </kk-button>
      ${o?e`<kk-button variant="primary" class="trilhas__concluir" @click=${()=>r(1)}>
              ${n.trilhas.concluir}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>`:e`<kk-button
              variant="primary"
              class="trilhas__virar"
              @click=${()=>it(t,L+1)}
            >
              ${n.trilhas.virar}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>`}
    </div>
  `}var ot={reiniciar:rt,desenhar:at},st=6,R=[],ct=[],z=null,B=new Set,V=0,H=null;function lt(e){R=f(e.itens).slice(0,st),ct=f(R),z=null,B=new Set,V=0,H=null}function ut(e){B.has(e)||(z=z===e?null:e,H=null,c())}function dt(e){z===null||B.has(e)||(e===z?(B=new Set([...B,e]),H=null):(V+=1,H=e),z=null,c())}function ft(i,a){let o=B.size===R.length;return e`
    ${b(n.trilhas.pares.chamada)}
    <p class="trilhas__conta">${n.trilhas.pares.conta(B.size,R.length,V)}</p>

    <div class="trilhas__pares">
      <ul class="trilhas__coluna" aria-label=${n.trilhas.pares.titulos}>
        ${R.map(t=>e`<li>
            <button
              class="trilhas__par"
              data-id=${String(t.id)}
              aria-pressed=${z===t.id?`true`:`false`}
              data-feito=${B.has(t.id)?`sim`:`nao`}
              ?disabled=${B.has(t.id)}
              @click=${()=>ut(t.id)}
            >
              ${t.titulo}
            </button>
          </li>`)}
      </ul>
      <ul class="trilhas__coluna" aria-label=${n.trilhas.pares.pares}>
        ${ct.map(t=>e`<li>
            <button
              class="trilhas__par trilhas__par--par"
              data-id=${String(t.id)}
              data-feito=${B.has(t.id)?`sim`:`nao`}
              data-errado=${H===t.id?`sim`:`nao`}
              ?disabled=${B.has(t.id)||z===null}
              @click=${()=>dt(t.id)}
            >
              ${t.dados.par}
            </button>
          </li>`)}
      </ul>
    </div>

    ${o?e`
          <ul class="trilhas__pares-feitos">
            ${R.map(n=>e`<li>
                <strong>${n.titulo}</strong> — ${n.dados.par}
                ${r(n.texto)===``?t:h(n.texto)}
              </li>`)}
          </ul>
          ${v(n.trilhas.concluir,()=>a(ue(V)))}
        `:t}
  `}var pt={reiniciar:lt,desenhar:ft},U=null,W=new Set;function mt(){U=null,W=new Set}function ht(e){U=U===e?null:e,W=new Set([...W,e]),c()}function gt(r,i){let a=r.itens.every(e=>W.has(e.id)),o=r.itens.find(e=>e.id===U);return e`
    ${b(n.trilhas.pastas.chamada)}
    <p class="trilhas__conta">${n.trilhas.pastas.conta(W.size,r.itens.length)}</p>

    <ul class="trilhas__pastas">
      ${r.itens.map((t,n)=>e`<li>
          <button
            class="trilhas__pasta"
            aria-expanded=${U===t.id?`true`:`false`}
            data-lida=${W.has(t.id)?`sim`:`nao`}
            @click=${()=>ht(t.id)}
          >
            <kk-icon name=${U===t.id?`folder-open`:`folder`}></kk-icon>
            <span class="trilhas__pasta-numero">${n+1}</span>
            <span class="trilhas__pasta-aba">${t.titulo}</span>
          </button>
        </li>`)}
    </ul>

    ${o===void 0?t:e`<article class="trilhas__folha" aria-live="polite">
            <h2>${o.titulo}</h2>
            ${h(o.texto)} ${g(o.referencia)}
          </article>`}

    ${a?v(n.trilhas.concluir,()=>i(1)):t}
  `}var _t={reiniciar:mt,desenhar:gt},G=0,K=new Map,vt=``;function yt(e){return`trilhas:${e}`}var bt=le({origem:`trilhas`,idDe:e=>e.id,chaveDe:e=>yt(e.id),referenciaDe:e=>e.referencia,tituloDe:e=>`${vt} — ${e.titulo}`,lembrete:()=>K});async function xt(e){let t=new Map;try{for(let e of await o()){if(e.origem!==`trilhas`||e.ref_chave===null)continue;let n=Number(e.ref_chave.split(`:`)[1]);Number.isFinite(n)&&t.set(n,e.conteudo)}}catch(e){console.error(`trilhas: o Caderno não foi lido.`,e)}K=t,St(e,G),c()}function St(e,t){G=t;let n=e.itens[G];bt.abrir(n===void 0?``:K.get(n.id)??``)}function Ct(e){G=0,K=new Map,vt=n.trilhas.nomes[e.trilha],bt.abrir(``),xt(e)}function wt(t,r){let i=t.itens[G];if(i===void 0)return e``;let a=t.itens.length,o=G===a-1;return e`
    ${_(G+1,a)}

    <article class="trilhas__meditacao">
      <h2 class="trilhas__meditacao-pergunta">${i.titulo}</h2>
      ${h(i.texto)} ${g(i.referencia)}
    </article>

    ${bt.campo({item:i,id:`trilhas-reflexao`,rotulo:n.trilhas.reflexao.escreva,placeholder:n.trilhas.reflexao.placeholder})}

    <div class="trilhas__navegacao">
      <kk-button
        outline
        ?disabled=${G===0}
        @click=${()=>{St(t,G-1),c()}}
      >
        <kk-icon slot="prefix" name="arrow-left"></kk-icon>${n.trilhas.anterior}
      </kk-button>
      ${o?v(n.trilhas.concluir,()=>r(1)):v(n.trilhas.proximo,()=>{St(t,G+1),c()})}
    </div>
  `}var Tt={reiniciar:Ct,desenhar:wt},q=[],J=[],Y=0;function Et(e){q=f(e.itens),J=q.map(()=>null),Y=0}function Dt(e){J[Y]===null&&(J=J.map((t,n)=>n===Y?e:t),c())}function Ot(t){let n=q.filter((e,t)=>J[t]!==null);return e`
    <div class="trilhas__montes">
      ${[0,1].map(r=>e`
          <section class="trilhas__monte" data-lado=${String(r)}>
            <h3>${t[r]}</h3>
            <ul>
              ${n.filter(e=>e.dados.lado===r).map(t=>e`<li>${t.titulo}</li>`)}
            </ul>
          </section>
        `)}
    </div>
  `}function kt(i,a){let o=q[Y];if(o===void 0)return e``;let{lados:s}=i.abertura.dados,l=q.length,u=J[Y]??null,d=q.filter((e,t)=>J[t]===e.dados.lado).length;return e`
    ${_(Y+1,l)}
    ${b(n.trilhas.triagem.chamada)}

    <div class="trilhas__frase" data-respondida=${u===null?`nao`:`sim`}>
      <span class="trilhas__frase-texto">${o.titulo}</span>
    </div>

    <div class="trilhas__lados">
      ${[0,1].map(t=>e`
          <button
            class="trilhas__lado"
            data-lado=${String(t)}
            data-tom=${u===null?``:t===o.dados.lado?`certa`:t===u?`errada`:`apagada`}
            ?disabled=${u!==null}
            @click=${()=>Dt(t)}
          >
            ${s[t]}
          </button>
        `)}
    </div>

    ${u===null?t:e`
          ${Te(u===o.dados.lado,o.referencia,e`<span class="trilhas__vai">${n.trilhas.triagem.vaiPara(s[o.dados.lado]??``)}</span>`)}
          ${r(o.texto)===``?t:h(o.texto,`trilhas__porque`)}
          ${y(Y===l-1,()=>a(p(d,l)),()=>{Y+=1,c()})}
        `}

    ${Ot(s)}
  `}var At={paginas:ot,pastas:_t,escolha:Be,pares:pt,lacunas:We,linha:nt,triagem:{reiniciar:Et,desenhar:kt},reflexao:Tt,leitura:Xe,desafio:Ie};function jt(e){return At[e.ficha.mecanica]}var X=`abertura`,Mt=1,Z={estado:`gravando`},Nt=null;function Q(e){let t=e.args[0];return t!==void 0&&ie(t)?t:void 0}function Pt(e){let t=Q(e),n=e.args[1];if(t!==void 0&&n!==void 0)return S(t).capitulos.find(e=>e.chave===n)}function Ft(e){return`${pe}/${e}`}function It(e){return`${pe}/${e.trilha}/${e.chave}`}function Lt(e){let t=e.args.join(`/`);t!==Nt&&(Nt=t,Ye(),X=`abertura`)}function Rt(e){jt(e).reiniciar(e),X=`atividade`,c(),window.scrollTo({top:0})}function zt(e,t){Mt=$(e)?t:1,X=`fim`,Z={estado:`gravando`},c(),window.scrollTo({top:0}),(async()=>{let t=await Me(e.trilha,e.chave,Mt);Z=t===null?{estado:`falhou`}:{estado:`pronta`,partida:t},l(n.trilhas.fim.seloAnuncio),c()})()}function $(e){return ce.has(e.ficha.mecanica)}function Bt(r){let a=S(r),o=a.capitulos.length,s=_e(a,C());return e`
    <li>
      <button
        class="trilhas__cartao"
        data-trilha=${r}
        @click=${()=>i(Ft(r))}
      >
        <span class="trilhas__cartao-nome">${n.trilhas.nomes[r]}</span>
        <span class="trilhas__cartao-resumo">${n.trilhas.subtitulos[r]}</span>
        ${o===0?t:e`<span class="trilhas__cartao-conta">${n.trilhas.trilha.conta(s,o)}</span>`}
      </button>
    </li>
  `}function Vt(){return e`
    <p class="trilhas__subtitulo">${n.trilhas.escolher}</p>
    <ul class="trilhas__cartoes">${ae.map(Bt)}</ul>
  `}function Ht(t){let r=m(C(),t.trilha,t.chave);return r===0?e`<span class="trilhas__novo">${n.trilhas.trilha.aFazer}</span>`:$(t)?Ee(r):De()}function Ut(t){let n=m(C(),t.trilha,t.chave)>0;return e`
    <li>
      <button
        class="trilhas__capitulo"
        data-capitulo=${t.chave}
        data-feito=${n?`sim`:`nao`}
        @click=${()=>i(It(t))}
      >
        <span class="trilhas__medalha" aria-hidden="true">
          <kk-icon name=${t.ficha.icone}></kk-icon>
          <span class="trilhas__numero">${t.numero}</span>
        </span>
        <span class="trilhas__capitulo-texto">
          <span class="trilhas__capitulo-titulo">${t.abertura.titulo}</span>
          <span class="trilhas__capitulo-resumo">${t.abertura.dados.resumo}</span>
        </span>
        <span class="trilhas__capitulo-estado">${Ht(t)}</span>
      </button>
    </li>
  `}function Wt(n){return e`
    <section class="trilhas__parte" data-parte=${n.chave}>
      <header class="trilhas__parte-topo">
        <span class="trilhas__parte-numero" aria-hidden="true">${de(n.numero)}</span>
        <h2 class="trilhas__parte-titulo">${n.titulo}</h2>
      </header>
      <blockquote class="trilhas__parte-versiculo">
        ${h(n.texto)}
        ${n.referencia===``?t:e`<footer>${n.referencia}</footer>`}
      </blockquote>
      <ol class="trilhas__capitulos">${n.capitulos.map(Ut)}</ol>
    </section>
  `}function Gt(t){let r=e`<p class="trilhas__subtitulo">${n.trilhas.subtitulos[t.trilha]}</p>`;if(t.capitulos.length===0)return e`${r}<p class="vazio">${n.trilhas.vazio}</p>`;let a=C(),o=_e(t,a),s=ve(t,a),c=t.capitulos.length;return e`
    ${r}
    <div class="trilhas__progresso">
      <kk-progress-bar value=${Math.round(o/c*100)}></kk-progress-bar>
      <span>${n.trilhas.trilha.conta(o,c)}</span>
    </div>

    ${s===null?e`<p class="trilhas__completa">${De()}${n.trilhas.trilha.completa}</p>`:e`<kk-button
            variant="primary"
            class="trilhas__continuar"
            @click=${()=>i(It(s))}
          >
            <kk-icon slot="prefix" name="player-play"></kk-icon>
            ${o===0?n.trilhas.trilha.comecar:n.trilhas.trilha.continuar}
          </kk-button>`}

    ${t.partes.map(Wt)}
  `}function Kt(t){return e`
    <div class="trilhas__cabecalho">
      <kk-icon name=${t.ficha.icone}></kk-icon>
      <span>${n.trilhas.capitulo(t.numero)}</span>
    </div>
  `}function qt(r){let i=m(C(),r.trilha,r.chave);return e`
    ${Kt(r)}
    <h2 class="trilhas__titulo">${r.abertura.titulo}</h2>
    ${h(r.abertura.texto,`trilhas__abertura`)}
    ${r.abertura.referencia===``?t:e`<p class="trilhas__referencia-bloco">${r.abertura.referencia}</p>`}
    ${Oe(r.abertura.link,r.abertura.obra)}

    <div class="trilhas__seguir">
      <kk-button variant="primary" class="trilhas__comecar" @click=${()=>Rt(r)}>
        <kk-icon slot="prefix" name=${i>0?`rotate`:`player-play`}></kk-icon>
        ${i>0?n.trilhas.deNovo:n.trilhas.comecar}
      </kk-button>
    </div>
  `}function Jt(r){if(Z.estado===`gravando`)return e`<div class="carregando"><kk-spinner></kk-spinner></div>`;if(Z.estado===`falhou`)return e`<kk-alert open variant="danger">${n.trilhas.fim.seloFalhou}</kk-alert>`;let{partida:i}=Z,a=i.bateu&&i.anterior>0&&$(r);return e`
    <div class="trilhas__conquista">
      ${De(`trilhas__selo--acende`)}
      <strong>
        ${i.anterior===0?n.trilhas.fim.seloNovo:n.trilhas.fim.seloJaTinha}
      </strong>
      ${a?e`<span>${n.trilhas.fim.maisEstrelas}</span>`:t}
    </div>
  `}function Yt(r){let a=ye(S(r.trilha),r.chave),o=r.ficha.mecanica===`desafio`&&Mt===3;return e`
    ${Kt(r)}
    <h2 class="trilhas__titulo">${r.abertura.titulo}</h2>

    ${Jt(r)}
    ${$(r)?e`<div class="trilhas__fim-estrelas">${Ee(Mt)}</div>`:t}
    ${o?e`<p class="trilhas__completa">${n.trilhas.fim.desafioCompleto}</p>`:t}

    ${r.abertura.dados.fecho===``?t:h(r.abertura.dados.fecho,r.ficha.mecanica===`desafio`?`trilhas__fecho trilhas__fecho--final`:`trilhas__fecho`)}

    <div class="jogo__controles">
      ${a===null?t:e`<kk-button variant="primary" @click=${()=>i(It(a))}>
              ${n.trilhas.fim.proximo}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
            </kk-button>`}
      <kk-button outline @click=${()=>Rt(r)}>
        <kk-icon slot="prefix" name="rotate"></kk-icon>${n.trilhas.deNovo}
      </kk-button>
      <kk-button outline @click=${()=>i(Ft(r.trilha))}>
        <kk-icon slot="prefix" name="route"></kk-icon>${n.trilhas.fim.trilha}
      </kk-button>
    </div>
  `}function Xt(t){return X===`abertura`?qt(t):X===`fim`?Yt(t):e`
    ${Kt(t)}
    ${jt(t).desenhar(t,e=>zt(t,e))}
  `}var Zt={titulo(e){let t=Pt(e);if(t!==void 0)return t.abertura.titulo;let r=Q(e);return r===void 0?void 0:n.trilhas.nomes[r]},voltarPara(e){let t=Q(e);return e.args.length>1&&t!==void 0?Ft(t):`home`},conteudo(t){let n=je.espera();if(n!==null)return n;Lt(t);let r=Q(t);if(r===void 0)return Vt();let i=Pt(t);return e`<div class="trilhas__raiz" data-trilha=${r}>
      ${i===void 0?Gt(S(r)):Xt(i)}
    </div>`}};export{Zt as telaTrilhas};