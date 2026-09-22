import{dt as e,ht as t,pt as n,st as r}from"./index-BfZj77hg.js";import{VISOES as i,alternarCapitulo as a,alternarDia as o,capituloLido as s,capitulosDe as c,capitulosDoGrupo as l,detalheDoLivro as u,diasLidos as d,itensDaVisao as f,lerCelebracao as p,lerLidos as m,lerVisao as h,lidosDoGrupo as g,lidosDoLivro as _,livroCompleto as v,livrosConcluidos as y,marcarLivro as b,n as x,percentualCelebracao as S,percentualDoLivro as C,percentualGeral as w,r as T,salvarVisao as E,t as D,totalLidos as O}from"./dados-CrToLRPu.js";var k=new Map,A=new Set,j=`canonica`,M=null,N=!1;function P(){N||(N=!0,k=m(),A=p(),j=h())}function F(e){j=e,M=null,E(e),r()}function I(e){return t`
    <div class="progresso-leitura__barra" role="presentation">
      <div class="progresso-leitura__preenchido" style=${`width:${e}%`}></div>
    </div>
  `}function L(){let n=w(k);return t`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${e.leituraBiblia.progressoGeral}</span>
        <span class="progresso-leitura__percentual">${n}%</span>
      </div>
      ${I(n)}
      <span class="progresso-leitura__detalhe">
        ${e.leituraBiblia.capitulos(O(k),T)} ·
        ${e.leituraBiblia.livros(y(k),D.length)}
      </span>
    </div>
  `}function R(n){let i=c(n);return t`
    <div class="capitulos">
      ${Array.from({length:i},(e,t)=>t+1).map(e=>t`
          <button
            type="button"
            class="capitulo"
            ?data-lido=${s(k,n,e)}
            aria-pressed=${s(k,n,e)}
            @click=${()=>{k=a(k,n,e),r()}}
          >
            ${e}
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
        <kk-icon slot="prefix" name="checks"></kk-icon>${e.leituraBiblia.livroInteiro}
      </kk-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{k=b(k,n,!1),r()}}
      >
        <kk-icon slot="prefix" name="eraser"></kk-icon>${e.leituraBiblia.limpar}
      </kk-button>
    </div>
  `}function z(e){let i=M===e,a=v(k,e),o=u(j,e);return t`
    <div class="livro" ?data-completo=${a}>
      <button
        type="button"
        class="livro__alvo"
        aria-expanded=${i}
        @click=${()=>{M=i?null:e,r()}}
      >
        <kk-icon class="livro__icone" name=${a?`circle-check`:`book`}></kk-icon>
        <span class="livro__nome">${D[e]?.nome??``}</span>
        <span class="livro__contagem">${_(k,e)}/${c(e)}</span>
        <kk-icon name=${i?`chevron-up`:`chevron-down`}></kk-icon>
      </button>

      ${o===``?n:t`<span class="livro__detalhe">${o}</span>`}
      ${I(C(k,e))}
      ${i?R(e):n}
    </div>
  `}function B(n,r){return t`
    <div class="grupo-escritor">
      <kk-icon name="user-check"></kk-icon>
      <span class="grupo-escritor__nome">${n}</span>
      <span class="grupo-escritor__contagem">
        ${e.leituraBiblia.capituloAbrev(g(k,r),l(r))}
      </span>
    </div>
  `}function V(e){return e.tipo===`grupo`?B(e.grupo.nome,e.grupo.livros):z(e.livro)}function H(){return t`
    ${L()}
    <div class="livros">${f(j).map(e=>V(e))}</div>
  `}function U(){let n=S(A);return t`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${e.leituraBiblia.roteiro}</span>
        <span class="progresso-leitura__percentual">${n}%</span>
      </div>
      ${I(n)}
      <span class="progresso-leitura__detalhe">
        ${e.leituraBiblia.trechos(d(A),x.length)}
      </span>
      <p class="progresso-leitura__nota">${e.leituraBiblia.roteiroNota}</p>
    </div>

    <div class="livros">
      ${x.map(e=>{let n=A.has(e.id);return t`
          <div class="dia" ?data-lido=${n}>
            <button
              type="button"
              class="dia__alvo"
              aria-pressed=${n}
              @click=${()=>{A=o(A,e.id),r()}}
            >
              <kk-icon class="dia__icone" name=${n?`circle-check`:`circle`}></kk-icon>
              <span class="dia__texto">
                <span class="dia__nome">${e.dia}</span>
                <span class="dia__evento">${e.evento}</span>
                <span class="dia__leituras">
                  ${e.leituras.map(e=>t`<kk-badge variant="success" pill>${e}</kk-badge>`)}
                </span>
              </span>
            </button>
          </div>
        `})}
    </div>
  `}var W={canonica:`list-numbers`,cronologica:`hourglass`,escritor:`user-check`,celebracao:`calendar-week`};function G(){return t`
    <div class="chips" role="group" aria-label=${e.leituraBiblia.visualizacao}>
      ${i.map(n=>t`
          <button
            class="chip"
            ?data-ativo=${j===n}
            title=${e.leituraBiblia.visoesAjuda[n]}
            @click=${()=>F(n)}
          >
            <kk-icon name=${W[n]}></kk-icon>
            ${e.leituraBiblia.visoes[n]}
          </button>
        `)}
    </div>
  `}var K={voltarPara(){return`home`},conteudo(){return P(),t`
      ${G()}
      ${j===`celebracao`?U():H()}
    `}};export{K as telaLeitura};