import{_t as e,ft as t,ht as n,st as r}from"./index-BESQMk3B.js";import{VISOES as i,alternarCapitulo as a,alternarDia as o,capituloLido as s,capitulosDe as c,capitulosDoGrupo as l,detalheDoLivro as u,diasLidos as d,itensDaVisao as f,lerCelebracao as p,lerLidos as m,lerVisao as h,lidosDoGrupo as g,lidosDoLivro as _,livroCompleto as v,livrosConcluidos as y,marcarLivro as b,n as x,percentualCelebracao as S,percentualDoLivro as C,percentualGeral as w,r as T,salvarVisao as E,t as D,totalLidos as O}from"./dados-CrToLRPu.js";var k=new Map,A=new Set,j=`canonica`,M=null,N=!1;function P(){N||(N=!0,k=m(),A=p(),j=h())}function F(e){j=e,M=null,E(e),r()}function I(t){return e`
    <div class="progresso-leitura__barra" role="presentation">
      <div class="progresso-leitura__preenchido" style=${`width:${t}%`}></div>
    </div>
  `}function L(){let n=w(k);return e`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${t.leituraBiblia.progressoGeral}</span>
        <span class="progresso-leitura__percentual">${n}%</span>
      </div>
      ${I(n)}
      <span class="progresso-leitura__detalhe">
        ${t.leituraBiblia.capitulos(O(k),T)} ·
        ${t.leituraBiblia.livros(y(k),D.length)}
      </span>
    </div>
  `}function R(n){let i=c(n);return e`
    <div class="capitulos">
      ${Array.from({length:i},(e,t)=>t+1).map(t=>e`
          <button
            type="button"
            class="capitulo"
            ?data-lido=${s(k,n,t)}
            aria-pressed=${s(k,n,t)}
            @click=${()=>{k=a(k,n,t),r()}}
          >
            ${t}
          </button>
        `)}
    </div>

    <div class="capitulos__acoes">
      <kk-button
        size="small"
        variant="success"
        outline
        @click=${()=>{k=b(k,n,!0),r()}}
      >
        <kk-icon slot="prefix" name="checks"></kk-icon>${t.leituraBiblia.livroInteiro}
      </kk-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{k=b(k,n,!1),r()}}
      >
        <kk-icon slot="prefix" name="eraser"></kk-icon>${t.leituraBiblia.limpar}
      </kk-button>
    </div>
  `}function z(t){let i=M===t,a=v(k,t),o=u(j,t);return e`
    <div class="livro" ?data-completo=${a}>
      <button
        type="button"
        class="livro__alvo"
        aria-expanded=${i}
        @click=${()=>{M=i?null:t,r()}}
      >
        <kk-icon class="livro__icone" name=${a?`circle-check`:`book`}></kk-icon>
        <span class="livro__nome">${D[t]?.nome??``}</span>
        <span class="livro__contagem">${_(k,t)}/${c(t)}</span>
        <kk-icon name=${i?`chevron-up`:`chevron-down`}></kk-icon>
      </button>

      ${o===``?n:e`<span class="livro__detalhe">${o}</span>`}
      ${I(C(k,t))}
      ${i?R(t):n}
    </div>
  `}function B(n,r){return e`
    <div class="grupo-escritor">
      <kk-icon name="user-check"></kk-icon>
      <span class="grupo-escritor__nome">${n}</span>
      <span class="grupo-escritor__contagem">
        ${t.leituraBiblia.capituloAbrev(g(k,r),l(r))}
      </span>
    </div>
  `}function V(e){return e.tipo===`grupo`?B(e.grupo.nome,e.grupo.livros):z(e.livro)}function H(){return e`
    ${L()}
    <div class="livros">${f(j).map(e=>V(e))}</div>
  `}function U(){let n=S(A);return e`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${t.leituraBiblia.roteiro}</span>
        <span class="progresso-leitura__percentual">${n}%</span>
      </div>
      ${I(n)}
      <span class="progresso-leitura__detalhe">
        ${t.leituraBiblia.trechos(d(A),x.length)}
      </span>
      <p class="progresso-leitura__nota">${t.leituraBiblia.roteiroNota}</p>
    </div>

    <div class="livros">
      ${x.map(t=>{let n=A.has(t.id);return e`
          <div class="dia" ?data-lido=${n}>
            <button
              type="button"
              class="dia__alvo"
              aria-pressed=${n}
              @click=${()=>{A=o(A,t.id),r()}}
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
    <div class="chips" role="group" aria-label=${t.leituraBiblia.visualizacao}>
      ${i.map(n=>e`
          <button
            class="chip"
            ?data-ativo=${j===n}
            title=${t.leituraBiblia.visoesAjuda[n]}
            @click=${()=>F(n)}
          >
            <kk-icon name=${W[n]}></kk-icon>
            ${t.leituraBiblia.visoes[n]}
          </button>
        `)}
    </div>
  `}var K={voltarPara(){return`home`},conteudo(){return P(),e`
      ${G()}
      ${j===`celebracao`?U():H()}
    `}};export{K as telaLeitura};