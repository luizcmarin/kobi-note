import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{i as r,r as i}from"./rotas-CR8kk0YZ.js";import{a,l as o,n as s}from"./acessibilidade-0dW0_ixm.js";import{A as ee,T as c,ct as l,w as u}from"./index-BdGprTna.js";import{t as te}from"./carga-CWKYt6SK.js";import{o as ne,s as re,t as ie}from"./apresentacao-WLG3gnVE.js";import{i as ae,n as oe}from"./atividades-fG2rY4HL.js";import{a as se,n as ce,r as le,t as ue}from"./recordes-Cc5YvGyu.js";import{n as de}from"./sorteio-Bln1H9Cu.js";import{t as fe}from"./keyed-Bi5xBSjX.js";import{t as d}from"./chunk.GFLQWJVU-C41mMzkj.js";import{t as f}from"./martelada-vevrO_sI.js";var p=`kobi`,m=[`nome`,`faro`,`esconde`],pe=3*m.length,me={consoante:{letra:`ㅋ`,som:`k`},vogal:{letra:`ㅗ`,som:`o`}},he={consoante:{letra:`ㅂ`,som:`b`},vogal:{letra:`ㅣ`,som:`i`}},ge={consoante:{letra:`ㅇ`,som:``},vogal:{letra:`ㅑ`,som:`ya`}},h=[me,he],g=[ge],_e=`ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ`,ve=`ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ`,ye=`ㅗㅛㅜㅠㅡ`;function _(e){let t=_e.indexOf(e.consoante.letra),n=ve.indexOf(e.vogal.letra);return t<0||n<0?``:String.fromCodePoint(44032+(t*21+n)*28)}var be=h.map(_).join(``),v=[...h,...g].map(_).join(``);function xe(e){return e.consoante.som+e.vogal.som}function Se(e){return ye.includes(e.vogal.letra)?`embaixo`:`lado`}function y(e){return{blocos:e,postas:0,erros:0}}function Ce(e){return e.flatMap(e=>[e.consoante,e.vogal])}function we(e){return Ce(e.blocos)[e.postas]??null}function Te(e){return we(e)===null}function Ee(e,t){let n=we(e);return n===null?e:n.letra===t?{...e,postas:e.postas+1}:{...e,erros:e.erros+1}}function De(e,t){return Ce(e.blocos).slice(0,e.postas).some(e=>e.letra===t)}function Oe(e,t){let n=e.postas-t*2;return n>=2?`pronto`:n===1?`consoante`:`vazio`}function ke(e){return e===0?3:e<=2?2:1}var b=[`maca`,`cogumelo`,`gato`];function Ae(e,t){let n=Math.abs(e%5-t%5),r=Math.abs(Math.floor(e/5)-Math.floor(t/5));return Math.max(n,r)}function je(e,t){return Math.min(4,Ae(e,t))}function Me(e,t){return{achado:e,esconderijo:Math.min(24,Math.floor(t()*25)),farejadas:new Map}}function Ne(e){return e.farejadas.has(e.esconderijo)}function Pe(e,t){return!Number.isInteger(t)||t<0||t>=25||Ne(e)||e.farejadas.has(t)?e:{...e,farejadas:new Map([...e.farejadas,[t,je(t,e.esconderijo)]])}}function Fe(e){return e<=12?3:e<=18?2:1}var Ie=1600;function Le(e,t){return Math.min(t-1,Math.floor(e()*t))}function Re(e,t){let n=Array.from({length:6},(e,t)=>t).filter(e=>!t.includes(e));return n[Le(e,n.length)]??0}function ze(e,t){let n=Array.from({length:13},(e,t)=>t+3),r=new Set;for(;r.size<8&&n.length>0;){let[t]=n.splice(Le(e,n.length),1);t!==void 0&&r.add(t)}let i=[],a=-1;for(let n=0;n<16;n++){let o=Re(e,a<0?[]:[a]),s=r.has(n)?Re(e,[o]):null,ee=450+Math.round(e()*450);i.push({kobi:o,gato:s,duracao:t?null:Math.round(Ie-53.333333333333336*n),pausa:ee}),a=o}return i}function Be(e,t){return Math.max(0,e-t)}function Ve(e){return e>=14?3:e>=10?2:1}var He={nome:[`nome`],faro:[`faro`],esconde:[`esconde`,`esconde-calmo`]};function x(e,t){let n=0;for(let r of t){let t=He[e].find(e=>e===r.modo);if(r.jogo!==`kobi`||t===void 0||Number(r.partidas)<=0)continue;let i=Number(r.melhor_pontos)||0,a=e===`esconde`?Ve(i):Math.min(3,Math.max(1,i));a>n&&(n=a)}return n}function Ue(e){return m.find(t=>x(t,e)===0)??null}function We(e){return e.replace(/<!--[\s\S]*?-->/g,``).replace(/<style>[\s\S]*?<\/style>/g,``).replace(/<title[\s\S]*?<\/title>/g,``).replace(/\s(?:role|aria-labelledby)="[^"]*"/g,``).replace(`<svg`,`<svg aria-hidden="true" focusable="false"`)}var Ge=`./icons/kobi-note-sem-efeitos.svg`;function S(t={}){let{pose:n=`parado`,vez:r=0,animado:i=!1,rotulo:o=``}=t,s=e`<img
    class="kobi__figura"
    src=${i?a():Ge}
    alt=${o}
    draggable="false"
  />`;return i?e`<span class="kobi__ator" data-pose=${n} data-vez=${r%2}>${s}</span>`:e`${fe(r,e`<span class="kobi__ator" data-pose=${n}>${s}</span>`)}`}function C(t){return e`${fe(t,e`<p class="kobi__balao">${t}</p>`)}`}function Ke(t,r=3){return e`<span class="kobi__estrelas" role="img" aria-label=${n.kobi.estrelas(t,r)}>
    ${Array.from({length:r},(n,r)=>r<t?e`<kk-icon class="kobi__estrela kobi__estrela--ganha" variant="filled" name="star"></kk-icon>`:e`<kk-icon class="kobi__estrela" name="star"></kk-icon>`)}
  </span>`}function qe(){return e`<svg class="kobi__arbusto" viewBox="0 0 48 34" aria-hidden="true" focusable="false">
    <path
      class="kobi__copa"
      d="M5 33c-4 0-5-6-2-9 1-6 6-9 11-7 2-6 9-9 15-6 5-3 12 0 13 6 5 1 7 7 4 11 1 3-1 5-4 5Z"
    />
    <path class="kobi__brilho" d="M12 21c1-3 4-4 6-3M27 14c2-2 5-2 7 0" />
  </svg>`}var Je=!1;function Ye(){!Je&&re()&&(Je=!0,typeof speechSynthesis.addEventListener==`function`&&speechSynthesis.addEventListener(`voiceschanged`,()=>l()))}function Xe(r){return Ye(),ne(`ko`)?e`<kk-button
    size="small"
    pill
    outline
    class="kobi__ouvir"
    @click=${()=>ie(r,void 0,`ko-KR`)}
  >
    <kk-icon slot="prefix" name="volume"></kk-icon>${n.kobi.ouvir}
  </kk-button>`:t}function Ze(e){return e===null?{estado:`falhou`}:{estado:`gravada`,partida:e}}function Qe(r){if(r.estado===`gravando`)return t;if(r.estado===`falhou`)return e`<p class="discreto kobi__resumo">${n.kobi.naoGravou}</p>`;let{bateu:i,anterior:a}=r.partida;return a===0?t:e`<p class="discreto kobi__resumo">
    ${i?n.kobi.melhorou:n.kobi.melhorContinua(a)}
  </p>`}function $e(t){let r=m[m.indexOf(t.capitulo)+1];return e`
    <section class="kobi__fim" data-capitulo=${t.capitulo}>
      <h2 class="resultado__titulo">${n.kobi.concluido}</h2>
      <div class="kobi__fim-estrelas">${Ke(t.estrelas)}</div>
      <p class="resultado__linha">${t.resultado}</p>
      ${t.recorde}
      <kk-button
        variant="primary"
        class="jogo__jogar kobi__seguir"
        @click=${()=>i(`kobi/${r??`carteirinha`}`)}
      >
        ${r===void 0?n.kobi.verCarteirinha:n.kobi.proximo}
      </kk-button>
      <div class="jogo__controles">
        <kk-button outline @click=${t.aoJogarDeNovo}>
          <kk-icon slot="prefix" name="rotate"></kk-icon>${n.atividades.jogarDeNovo}
        </kk-button>
        <kk-button outline @click=${()=>i(`kobi`)}>
          <kk-icon slot="prefix" name="paw"></kk-icon>${n.kobi.trilha}
        </kk-button>
      </div>
    </section>
  `}var w=[],et=new te(p,async()=>{w=await le(p)});function tt(){return w}async function nt(e,t){try{let n=await se({jogo:p,modo:e,nivel:1},t);return w=ue(w,n.recorde),n}catch(e){return console.error(`kobi: o fim do capítulo não foi gravado.`,e),null}}var rt=We(f),it=900,at=650,ot=850,st=450,ct=700,T=`inicio`,E=`pausa`,D=[],O=0,k=0,A=0,j=!1,M,N={estado:`gravando`};function lt(){return j?`esconde-calmo`:`esconde`}function ut(){let e=r();return e.modulo===`kobi`&&e.args[0]===`esconde`}function P(){clearTimeout(M),M=void 0}function dt(){P(),T=`inicio`,E=`pausa`}function F(e,t){P(),M=setTimeout(()=>{M=void 0,!ut()||T!==`jogo`?dt():t()},e)}function ft(){dt(),N={estado:`gravando`}}function pt(){j=s(),D=ze(Math.random,j),O=0,k=0,A=0,E=`pausa`,T=`jogo`,N={estado:`gravando`},F(it,mt),l()}function mt(){let e=D[O];e===void 0?_t():(E=`espiando`,j&&u(e.gato===null?n.kobi.esconde.espiou(e.kobi+1):n.kobi.esconde.espiouComGato(e.kobi+1,e.gato+1)),e.duracao!==null&&F(e.duracao,ht),l())}function ht(){E=`fugiu`,F(st,I),l()}function gt(e){let t=D[O];if(E===`espiando`&&t!==void 0){if(e===t.kobi)k+=1,E=`achou`,F(at,I);else if(e===t.gato)A+=1,E=`gato`,o(80),F(ot,I);else return;l()}}function I(){O+=1;let e=D[O];e===void 0?_t():(E=`pausa`,F(e.pausa,mt),l())}function _t(){P(),T=`fim`,E=`pausa`;let e=Be(k,A);Ve(e)===3&&d(),N={estado:`gravando`},nt(lt(),e).then(e=>{N=Ze(e),l()}),l()}function vt(){P();let e=E;return E=`pausa`,l(),()=>{ut()&&T===`jogo`&&(e===`pausa`||e===`espiando`?F(ct,mt):F(ct,I))}}async function yt(){let e=vt();await ee({titulo:n.atividades.encerrarTitulo,texto:n.kobi.esconde.encerrarTexto,rotuloConfirmar:n.atividades.encerrar})?T===`jogo`&&(dt(),l()):e()}var bt=null;document.addEventListener(`visibilitychange`,()=>{if(document.visibilityState===`hidden`){T===`jogo`&&ut()&&M!==void 0&&(bt=vt());return}let e=bt;bt=null,e?.()});function xt(e){return e===null||E===`pausa`||E===`fugiu`?`escondido`:E===`espiando`?`espiando`:E===`achou`?e===`kobi`?`achado`:`escondido`:e===`gato`?`bravo`:`escondido`}function St(e,t,r){let i=e+1;return t!==`espiando`||r===null?n.kobi.esconde.moita(i):r===`kobi`?n.kobi.esconde.moitaComKobi(i):n.kobi.esconde.moitaComGato(i)}function Ct(n){let r=D[O],i=r?.kobi===n?`kobi`:r?.gato===n?`gato`:null,a=xt(i);return e`
    <button
      class="kobi__esconderijo"
      data-quem=${i??t}
      data-estado=${a}
      aria-label=${St(n,a,i)}
      @click=${()=>gt(n)}
    >
      <span class="kobi__toca">
        ${i===`kobi`?e`<img class="kobi__espiao" src=${Ge} alt="" draggable="false" />`:i===`gato`?e`<span class="kobi__espiao kobi__espiao--gato">${c(rt)}</span>`:t}
      </span>
      ${qe()}
    </button>
  `}function wt(){let r=E===`achou`?n.kobi.esconde.achou:E===`gato`?n.kobi.esconde.gato:E===`fugiu`?n.kobi.esconde.fugiu:``;return e`<p class="kobi__aviso" data-fase=${E} aria-live="polite">
    ${r===``?t:fe(`${O}-${E}`,e`<span>${r}</span>`)}
  </p>`}function Tt(){return e`
    <div class="kobi__topo">
      <kk-icon-button
        name="x"
        label=${n.atividades.encerrar}
        @click=${()=>void yt()}
      ></kk-icon-button>
      <span class="kobi__vez">${n.kobi.esconde.vez(Math.min(O+1,16),16)}</span>
      <kk-badge pill variant="primary" class="kobi__pontos">
        ${n.kobi.esconde.pontos(Be(k,A))}
      </kk-badge>
    </div>
    ${wt()}
    <div class="kobi__bosque" data-fase=${E}>
      ${Array.from({length:6},(e,t)=>Ct(t))}
    </div>
  `}function Et(){let r=s(),i=ce(tt(),{jogo:p,modo:r?`esconde-calmo`:`esconde`,nivel:1});return e`
    <div class="kobi__palco">
      ${C(n.kobi.esconde.convite)}
      <div class="kobi__lugar">${S({rotulo:n.kobi.mascote})}</div>
    </div>
    <p class="kobi__texto">${n.kobi.esconde.regra}</p>
    <p class="kobi__texto kobi__cuidado">
      <span class="kobi__gato-mini" aria-hidden="true">${c(rt)}</span>
      <span>${n.kobi.esconde.cuidado}</span>
    </p>
    ${r?e`<p class="discreto">${n.kobi.esconde.semRelogio}</p>`:t}
    ${ae(i===void 0||Number(i.partidas)===0?n.kobi.esconde.semRecorde:n.kobi.esconde.recorde(Number(i.melhor_pontos),Number(i.partidas)),`kobi__recorde`)}
    <kk-button variant="primary" class="jogo__jogar kobi__comecar" @click=${pt}>
      <kk-icon slot="prefix" name="player-play"></kk-icon>${n.atividades.jogar}
    </kk-button>
  `}function Dt(){if(N.estado===`gravando`)return t;if(N.estado===`falhou`)return e`<p class="discreto kobi__resumo">${n.kobi.naoGravou}</p>`;let{partida:r}=N;return oe(r,`kobi`,n.kobi.esconde.recordeMantido(r.anterior))}function Ot(){let t=Be(k,A);return e`
    <div class="kobi__palco" data-tamanho="compacto">
      ${C(n.kobi.esconde.falaDoFim)}
      <div class="kobi__lugar">${S({pose:`festa`,vez:1,rotulo:n.kobi.mascote})}</div>
    </div>
    ${$e({capitulo:`esconde`,estrelas:Ve(t),resultado:n.kobi.esconde.resultado(k,16,A),recorde:Dt(),aoJogarDeNovo:pt})}
  `}function kt(){return T===`jogo`?Tt():T===`fim`?Ot():Et()}var At=We(f),jt=[1,2,3,4],L=0,R=Me(b[0],Math.random),z=0,B={tipo:`comeco`},Mt=`parado`,Nt=0,Pt=!1,V={estado:`gravando`};function Ft(){L=0,R=Me(b[0],Math.random),z=0,B={tipo:`comeco`},Mt=`parado`,Pt=!1,V={estado:`gravando`}}function It(){switch(B.tipo){case`comeco`:return n.kobi.faro.comeco[R.achado];case`calor`:return n.kobi.faro.falaDoCalor[B.grau];case`achou`:return n.kobi.faro.achou[B.achado];case`fim`:return n.kobi.faro.falaDoFim}}function H(e){Mt=e,Nt+=1}function U(e){B=e,u(It())}function Lt(e,t){let n=Pe(R,e);if(n===R)return;R=n,z+=1;let r=n.farejadas.get(e);r===0?(H(`festa`),U({tipo:`achou`,achado:n.achado}),d({origem:t.currentTarget,quantidade:40})):(H(r===1?`pulo`:`fareja`),U({tipo:`calor`,grau:r})),l()}function Rt(){let e=b[L+1];e===void 0?zt():(L+=1,R=Me(e,Math.random),H(`pulo`),U({tipo:`comeco`}),l())}function zt(){Pt=!0,H(`festa`),U({tipo:`fim`});let e=Fe(z);V={estado:`gravando`},nt(`faro`,e).then(e=>{V=Ze(e),l()}),l()}function Bt(t){switch(t){case 1:return e`<kk-icon class="kobi__icone-do-calor" variant="filled" name="flame"></kk-icon>`;case 2:return e`<kk-icon
        class="kobi__icone-do-calor"
        variant="filled"
        name="temperature-plus"
      ></kk-icon>`;case 3:return e`<kk-icon class="kobi__icone-do-calor" name="temperature"></kk-icon>`;case 4:return e`<kk-icon class="kobi__icone-do-calor" name="snowflake"></kk-icon>`}}function Vt(t){switch(t){case`maca`:return e`<kk-icon class="kobi__achado" data-achado="maca" variant="filled" name="apple"></kk-icon>`;case`cogumelo`:return e`<kk-icon
        class="kobi__achado"
        data-achado="cogumelo"
        variant="filled"
        name="mushroom"
      ></kk-icon>`;case`gato`:return e`<span class="kobi__achado" data-achado="gato">
        ${c(At)}
      </span>`}}function Ht(e,t){let r=e+1;return t===void 0?n.kobi.faro.moita(r):t===0?n.kobi.faro.moitaComAchado(r,n.kobi.faro.nomes[R.achado]):n.kobi.faro.moitaComCalor(r,n.kobi.faro.calor[t])}function Ut(n){let r=R.farejadas.get(n),i=Ne(R);return e`
    <button
      class="kobi__moita"
      data-calor=${r??t}
      ?disabled=${r!==void 0||i}
      aria-label=${Ht(n,r)}
      @click=${e=>Lt(n,e)}
    >
      ${r===void 0?qe():r===0?Vt(R.achado):Bt(r)}
    </button>
  `}function Wt(){return e`
    <div class="kobi__palco" data-tamanho="compacto">
      ${C(It())}
      <div class="kobi__lugar">${S({pose:Mt,vez:Nt,rotulo:n.kobi.mascote})}</div>
    </div>
  `}function Gt(){return e`
    <ul class="kobi__legenda" aria-label=${n.kobi.faro.legenda}>
      ${jt.map(t=>e`<li class="kobi__grau" data-calor=${t}>
          ${Bt(t)}<span>${n.kobi.faro.calor[t]}</span>
        </li>`)}
    </ul>
  `}function Kt(){return e`
    <div class="kobi__cartao-do-gato">
      <span class="kobi__gato-grande">${c(f)}</span>
      <div>
        <h2 class="kobi__titulo">${n.kobi.faro.gatoTitulo}</h2>
        <p class="kobi__texto">${n.kobi.faro.gatoTexto}</p>
      </div>
    </div>
  `}function qt(){let r=Ne(R),i=L===b.length-1;return e`
    ${Wt()}
    <div class="kobi__topo">
      <kk-badge pill variant="neutral">${n.kobi.faro.rodada(L+1,b.length)}</kk-badge>
      <kk-badge pill variant="primary">${n.kobi.faro.farejadas(z)}</kk-badge>
    </div>
    <div class="kobi__campo" style="--kobi-lado: ${5}">
      ${Array.from({length:25},(e,t)=>Ut(t))}
    </div>
    ${r?e`
            ${R.achado===`gato`?Kt():t}
            <kk-button variant="primary" class="jogo__jogar kobi__seguir" @click=${Rt}>
              ${i?n.kobi.faro.verResultado:n.kobi.faro.proxima}
            </kk-button>
          `:e`<p class="discreto kobi__regra">${n.kobi.faro.regra}</p>
            ${Gt()}`}
  `}function Jt(){return Pt?e`
    ${Wt()}
    ${$e({capitulo:`faro`,estrelas:Fe(z),resultado:n.kobi.faro.resultado(z),recorde:Qe(V),aoJogarDeNovo:()=>{Ft(),l()}})}
  `:qt()}var W=`nome`,G=y(h),K=y(g),Yt=[],q={tipo:`montar`},Xt=`parado`,Zt=0,J=null,Y={estado:`gravando`};function Qt(e){return de(e.flatMap(e=>[{letra:e.consoante,tipo:`consoante`},{letra:e.vogal,tipo:`vogal`}]))}function $t(){W=`nome`,G=y(h),K=y(g),Yt=Qt(h),q={tipo:`montar`},Xt=`parado`,J=null,Y={estado:`gravando`}}$t();function en(e){return e.som===``?n.kobi.nome.mudo:e.som}function tn(e){return e.blocos[Math.floor(e.postas/2)]}function nn(){let e=W===`chamado`?K:G;switch(q.tipo){case`montar`:{let t=tn(e);return t===void 0?``:n.kobi.nome.montar(_(t),xe(t))}case`quase`:return n.kobi.nome.quase(q.letra.letra,en(q.letra));case`bloco`:return n.kobi.nome.bloco(_(q.bloco),xe(q.bloco));case`pronto`:return n.kobi.nome.pronto;case`nariz`:return n.kobi.nome.falaDoNariz;case`respondeu`:return n.kobi.nome.respondeu}}function X(e){Xt=e,Zt+=1}function Z(e){q=e,u(nn())}function rn(e){let t=W===`chamado`,n=t?K:G,r=we(n),i=Ee(n,e.letra.letra);if(r===null||i===n)return;if(t?K=i:G=i,i.erros>n.erros){J={letra:e.letra.letra,vez:(J?.vez??0)+1},X(`nao`),o(60),Z({tipo:`quase`,letra:r}),l();return}J=null;let a=i.postas%2==0,s=i.blocos[i.postas/2-1];Te(i)?t?W=`chamar`:(X(`festa`),Z({tipo:`pronto`})):a&&s!==void 0?(X(`pulo`),Z({tipo:`bloco`,bloco:s})):q={tipo:`montar`},l()}function an(){W=`significado`,X(`pulo`),Z({tipo:`nariz`}),l()}function on(){W=`chamado`,Yt=Qt(g),q={tipo:`montar`},J=null,u(n.kobi.nome.fugiu),l()}function sn(e){ne(`ko`)&&ie(v,void 0,`ko-KR`),W=`fim`,X(`festa`),Z({tipo:`respondeu`});let t=ke(G.erros+K.erros);t===3&&d({origem:e.currentTarget}),Y={estado:`gravando`},nt(`nome`,t).then(e=>{Y=Ze(e),l()}),l()}function Q(r,i=!1){return e`
    <div class="kobi__palco" data-cena=${W}>
      ${r?e`${C(nn())}
              <div class="kobi__lugar">
                ${S({pose:Xt,vez:Zt,rotulo:n.kobi.mascote})}
                ${i?e`<span class="kobi__nariz" aria-hidden="true"></span>`:t}
              </div>`:e`<p class="kobi__balao kobi__balao--sozinho">${n.kobi.nome.fugiu}</p>
              <div class="kobi__lugar kobi__lugar--vazio" aria-hidden="true">
                <span class="kobi__poeira"></span>
              </div>`}
    </div>
  `}function cn(n,r,i){let a=Oe(n,i);return e`
    <div class="kobi__bloco" data-estado=${a} data-encaixe=${Se(r)}>
      <span class="kobi__silaba" lang="ko">
        ${a===`pronto`?_(r):a===`consoante`?e`<span class="kobi__parte">${r.consoante.letra}</span>
                  <span class="kobi__parte kobi__parte--vaga"></span>`:t}
      </span>
      <span class="kobi__som">${a===`pronto`?xe(r):``}</span>
    </div>
  `}function ln(e){let t={blocos:e,postas:e.length*2,erros:0};return e.map((e,n)=>cn(t,e,n))}function un(n){return e`
    <div class="kobi__bandeja">
      ${Yt.map(r=>e`
          <button
            class="kobi__letra"
            data-tipo=${r.tipo}
            data-tremor=${J?.letra===r.letra.letra?J.vez%2:t}
            ?disabled=${De(n,r.letra.letra)}
            @click=${()=>rn(r)}
          >
            <span class="kobi__letra-forma" lang="ko">${r.letra.letra}</span>
            <span class="kobi__letra-som">${en(r.letra)}</span>
          </button>
        `)}
    </div>
  `}function dn(){return e`
    ${Q(!0)}
    <p class="kobi__texto">${n.kobi.nome.explica}</p>
    <div class="kobi__blocos">
      ${h.map((e,t)=>cn(G,e,t))}
    </div>
    ${Te(G)?e`
            <div class="kobi__acoes">${Xe(be)}</div>
            <kk-button variant="primary" class="jogo__jogar kobi__seguir" @click=${an}>
              ${n.kobi.continuar}
            </kk-button>
          `:un(G)}
  `}function fn(){return e`
    ${Q(!0,!0)}
    <div class="kobi__destaque">
      <span class="kobi__destaque-letra" lang="ko">${_(me)}</span>
      <span class="kobi__destaque-igual" aria-hidden="true">=</span>
      <span class="kobi__destaque-texto">${n.kobi.nome.nariz}</span>
    </div>
    <h2 class="kobi__titulo">${n.kobi.nome.significadoTitulo}</h2>
    <p class="kobi__texto">${n.kobi.nome.significado}</p>
    <kk-button variant="primary" class="jogo__jogar kobi__seguir" @click=${on}>
      ${n.kobi.continuar}
    </kk-button>
  `}function pn(){return e`
    ${Q(!1)}
    <h2 class="kobi__titulo">${n.kobi.nome.chamadoTitulo}</h2>
    <p class="kobi__texto">${n.kobi.nome.chamado}</p>
    <p class="kobi__instrucao">${nn()}</p>
    <div class="kobi__blocos">
      ${ln(h)} ${g.map((e,t)=>cn(K,e,t))}
    </div>
    ${un(K)}
  `}function mn(){return e`
    ${Q(!1)}
    <div class="kobi__blocos">${ln([...h,...g])}</div>
    <p class="kobi__texto">${n.kobi.nome.chamar}</p>
    <button class="kobi__chamar" lang="ko" dir="ltr" @click=${sn}>${v}!</button>
  `}function hn(){let t=G.erros+K.erros;return e`
    ${Q(!0)}
    <div class="kobi__acoes">${Xe(v)}</div>
    ${$e({capitulo:`nome`,estrelas:ke(t),resultado:n.kobi.nome.resultado(t),recorde:Qe(Y),aoJogarDeNovo:()=>{$t(),l()}})}
  `}function gn(){switch(W){case`nome`:return dn();case`significado`:return fn();case`chamado`:return pn();case`chamar`:return mn();case`fim`:return hn()}}var _n={nome:{desenhar:gn,reiniciar:$t},faro:{desenhar:Jt,reiniciar:Ft},esconde:{desenhar:kt,reiniciar:ft}},vn=We(f);function yn(e){let t=e.args[0];return m.find(e=>e===t)??null}var bn=null;function xn(e){let t=e.args.join(`/`);if(t===bn)return;bn=t;let n=yn(e);n!==null&&_n[n].reiniciar()}var $=0,Sn=0;function Cn(){$=($+1)%n.kobi.abertura.falas.length,Sn+=1,u(n.kobi.abertura.falas[$]??``),l()}var wn={nome:`alphabet-korean`,faro:`paw`,esconde:`eye-closed`};function Tn(t,r,a){let o=n.kobi.capitulos[t];return e`
    <li>
      <button
        class="kobi__capitulo"
        data-capitulo=${t}
        data-feito=${a>0?`sim`:`nao`}
        @click=${()=>i(`kobi/${t}`)}
      >
        <span class="kobi__medalha" aria-hidden="true">
          <kk-icon name=${wn[t]}></kk-icon>
          <span class="kobi__numero">${r}</span>
        </span>
        <span class="kobi__capitulo-texto">
          <span class="kobi__capitulo-titulo">${o.titulo}</span>
          <span class="kobi__capitulo-resumo">${o.resumo}</span>
        </span>
        <span class="kobi__capitulo-estado">
          ${a>0?Ke(a):e`<kk-badge pill variant="primary">${n.kobi.novo}</kk-badge>`}
        </span>
      </button>
    </li>
  `}function En(){let t=tt(),r=Ue(t),a=m.reduce((e,n)=>e+x(n,t),0),o=r===null?n.kobi.verCarteirinha:r===m[0]?n.atividades.jogar:n.kobi.abertura.continuar;return e`
    <div class="kobi__palco" data-cena="abertura">
      ${C(n.kobi.abertura.falas[$]??``)}
      <button class="kobi__lugar kobi__lugar--botao" aria-label=${n.kobi.abertura.tocar} @click=${Cn}>
        ${S({animado:!0,pose:Sn===0?`parado`:`pulo`,vez:Sn})}
      </button>
    </div>

    <p class="kobi__chamada" lang="ko" dir="ltr">${v}!</p>
    <p class="intro kobi__subtitulo">${n.kobi.abertura.subtitulo}</p>

    <kk-button
      variant="primary"
      class="jogo__jogar kobi__comecar"
      @click=${()=>i(`kobi/${r??`carteirinha`}`)}
    >
      <kk-icon slot="prefix" name="player-play"></kk-icon>${o}
    </kk-button>

    <h2 class="secao">${n.kobi.trilha}</h2>
    <ol class="kobi__trilha">
      ${m.map((e,n)=>Tn(e,n+1,x(e,t)))}
      <li>
        <button class="kobi__capitulo" data-capitulo="carteirinha" @click=${()=>i(`kobi/carteirinha`)}>
          <span class="kobi__medalha" aria-hidden="true"><kk-icon name="id-badge"></kk-icon></span>
          <span class="kobi__capitulo-texto">
            <span class="kobi__capitulo-titulo">${n.kobi.carteirinha.titulo}</span>
            <span class="kobi__capitulo-resumo">${n.kobi.carteirinha.resumo}</span>
          </span>
          <span class="kobi__capitulo-estado">
            <kk-badge pill variant=${a===pe?`success`:`neutral`}>
              <kk-icon name="star"></kk-icon>${n.kobi.carteirinha.conta(a,pe)}
            </kk-badge>
          </span>
        </button>
      </li>
    </ol>
  `}var Dn=!1;function On(){let t=tt(),r=m.map(e=>[e,x(e,t)]),a=r.reduce((e,[,t])=>e+t,0),o=r.filter(([,e])=>e===0).length,s=n.kobi.carteirinha;return o===0&&!Dn&&(Dn=!0,requestAnimationFrame(()=>d())),e`
    <article class="kobi__cartao" aria-labelledby="kobi-cartao-titulo">
      <header class="kobi__cartao-topo">
        <kk-icon name="id-badge"></kk-icon>
        <h2 class="kobi__cartao-titulo" id="kobi-cartao-titulo">${s.cabecalho}</h2>
      </header>

      <div class="kobi__cartao-corpo">
        <div class="kobi__retrato">${S({animado:!0,rotulo:n.kobi.mascote})}</div>
        <dl class="kobi__ficha">
          <dt>${s.nome}</dt>
          <dd><span lang="ko" dir="ltr">${be}</span> · Kobi</dd>
          <dt>${s.fala}</dt>
          <dd>${s.pronuncia}</dd>
          <dt>${s.significa}</dt>
          <dd>${s.significado}</dd>
          <dt>${s.chamar}</dt>
          <dd><span lang="ko" dir="ltr">${v}!</span> ${Xe(v)}</dd>
          <dt>${s.jeito}</dt>
          <dd>${s.jeitoTexto}</dd>
        </dl>
      </div>

      <p class="kobi__primo">
        <span class="kobi__gato-mini" aria-hidden="true">${c(vn)}</span>
        <span>${s.primo}</span>
      </p>

      <footer class="kobi__cartao-pe">
        <h3 class="kobi__cartao-subtitulo">${s.suasEstrelas}</h3>
        <ul class="kobi__placar-da-trilha">
          ${r.map(([t,r])=>e`<li>
              <span>${n.kobi.capitulos[t].titulo}</span>${Ke(r)}
            </li>`)}
        </ul>
        ${o===0?e`<p class="kobi__selo">
                <kk-icon variant="filled" name="rosette"></kk-icon>${s.selo}
              </p>`:e`<p class="discreto kobi__falta">${s.faltam(o)}</p>`}
        <p class="discreto">${n.kobi.estrelas(a,pe)}</p>
      </footer>
    </article>

    <div class="jogo__controles">
      <kk-button outline @click=${()=>i(`kobi`)}>
        <kk-icon slot="prefix" name="paw"></kk-icon>${n.kobi.trilha}
      </kk-button>
      <kk-button @click=${()=>i(`home`)}>
        <kk-icon slot="prefix" name="home"></kk-icon>${n.atividades.inicio}
      </kk-button>
    </div>
  `}var kn={titulo(e){let t=yn(e);return t===null?e.args[0]===`carteirinha`?n.kobi.carteirinha.titulo:void 0:n.kobi.tituloDoCapitulo(m.indexOf(t)+1,n.kobi.capitulos[t].titulo)},voltarPara(e){return e.args.length===0?`home`:`kobi`},conteudo(e){let t=et.espera();if(t!==null)return t;xn(e);let n=yn(e);return n===null?e.args[0]===`carteirinha`?On():En():_n[n].desenhar()}};export{kn as telaKobi};