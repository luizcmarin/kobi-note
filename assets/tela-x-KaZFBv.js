import{i as e,t}from"./lit-CI_s7elC.js";import{n}from"./strings-DpAcIQPX.js";import{ct as r}from"./index-DA5sF2fG.js";import{c as i,i as a,s as o}from"./biblia-CgCC10ts.js";import{C as s,_ as c,a as l,b as u,c as d,d as f,f as p,g as m,h,i as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as E,w as D,y as O}from"./dados-VQes4AVJ.js";var k=new Map,A=new Set,j=`canonica`,M=null,N=!1;function P(){N||(N=!0,k=f(),A=T(),j=p())}function F(e){j=e,M=null,s(e),r()}function I(t){return e`
    <div class="progresso-leitura__barra" role="presentation">
      <div class="progresso-leitura__preenchido" style=${`width:${t}%`}></div>
    </div>
  `}function L(){let t=u(k);return e`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${n.leituraBiblia.progressoGeral}</span>
        <span class="progresso-leitura__percentual">${t}%</span>
      </div>
      ${I(t)}
      <span class="progresso-leitura__detalhe">
        ${n.leituraBiblia.capitulos(D(k),i)} ·
        ${n.leituraBiblia.livros(m(k),a.length)}
      </span>
    </div>
  `}function R(t){let i=l(t);return e`
    <div class="capitulos">
      ${Array.from({length:i},(e,t)=>t+1).map(n=>e`
          <button
            type="button"
            class="capitulo"
            ?data-lido=${g(k,t,n)}
            aria-pressed=${g(k,t,n)}
            @click=${()=>{k=y(k,t,n),r()}}
          >
            ${n}
          </button>
        `)}
    </div>

    <div class="capitulos__acoes">
      <kk-button
        size="small"
        variant="success"
        outline
        @click=${()=>{k=c(k,t,!0),r()}}
      >
        <kk-icon slot="prefix" name="checks"></kk-icon>${n.leituraBiblia.livroInteiro}
      </kk-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{k=c(k,t,!1),r()}}
      >
        <kk-icon slot="prefix" name="eraser"></kk-icon>${n.leituraBiblia.limpar}
      </kk-button>
    </div>
  `}function z(n){let i=M===n,o=h(k,n),s=C(j,n);return e`
    <div class="livro" ?data-completo=${o}>
      <button
        type="button"
        class="livro__alvo"
        aria-expanded=${i}
        @click=${()=>{M=i?null:n,r()}}
      >
        <kk-icon class="livro__icone" name=${o?`circle-check`:`book`}></kk-icon>
        <span class="livro__nome">${a[n]?.nome??``}</span>
        <span class="livro__contagem">${v(k,n)}/${l(n)}</span>
        <kk-icon name=${i?`chevron-up`:`chevron-down`}></kk-icon>
      </button>

      ${s===``?t:e`<span class="livro__detalhe">${s}</span>`}
      ${I(O(k,n))}
      ${i?R(n):t}
    </div>
  `}function B(t,r){return e`
    <div class="grupo-escritor">
      <kk-icon name="user-check"></kk-icon>
      <span class="grupo-escritor__nome">${t}</span>
      <span class="grupo-escritor__contagem">
        ${n.leituraBiblia.capituloAbrev(x(k,r),b(r))}
      </span>
    </div>
  `}function V(e){return e.tipo===`grupo`?B(e.grupo.nome,e.grupo.livros):z(e.livro)}function H(){return e`
    ${L()}
    <div class="livros">${_(j).map(e=>V(e))}</div>
  `}function U(){let t=E(A);return e`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${n.leituraBiblia.roteiro}</span>
        <span class="progresso-leitura__percentual">${t}%</span>
      </div>
      ${I(t)}
      <span class="progresso-leitura__detalhe">
        ${n.leituraBiblia.trechos(d(A),o.length)}
      </span>
      <p class="progresso-leitura__nota">${n.leituraBiblia.roteiroNota}</p>
    </div>

    <div class="livros">
      ${o.map(t=>{let n=A.has(t.id);return e`
          <div class="dia" ?data-lido=${n}>
            <button
              type="button"
              class="dia__alvo"
              aria-pressed=${n}
              @click=${()=>{A=S(A,t.id),r()}}
            >
              <kk-icon class="dia__icone" name=${n?`circle-check`:`circle`}></kk-icon>
              <span class="dia__texto">
                <span class="dia__nome">${t.dia}</span>
                <span class="dia__evento">${t.evento}</span>
                <span class="dia__leituras">
                  ${t.leituras.map(t=>e`<kk-badge variant="success" pill>${t}</kk-badge>`)}
                </span>
              </span>
            </button>
          </div>
        `})}
    </div>
  `}var W={canonica:`list-numbers`,cronologica:`hourglass`,escritor:`user-check`,celebracao:`calendar-week`};function G(){return e`
    <div class="chips" role="group" aria-label=${n.leituraBiblia.visualizacao}>
      ${w.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${j===t}
            title=${n.leituraBiblia.visoesAjuda[t]}
            @click=${()=>F(t)}
          >
            <kk-icon name=${W[t]}></kk-icon>
            ${n.leituraBiblia.visoes[t]}
          </button>
        `)}
    </div>
  `}var K={voltarPara(){return`home`},conteudo(){return P(),e`
      ${G()}
      ${j===`celebracao`?U():H()}
    `}};export{K as telaLeitura};