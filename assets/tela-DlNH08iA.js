import{Q as e,at as t,nt as n,rt as r}from"./index-CrGkgQIm.js";import{VISOES as i,alternarCapitulo as a,alternarDia as o,capituloLido as s,capitulosDe as c,capitulosDoGrupo as l,detalheDoLivro as u,diasLidos as d,itensDaVisao as f,lerCelebracao as p,lerLidos as m,lerVisao as h,lidosDoGrupo as g,lidosDoLivro as _,livroCompleto as v,livrosConcluidos as y,marcarLivro as b,n as x,percentualCelebracao as S,percentualDoLivro as C,percentualGeral as w,r as T,salvarVisao as E,t as D,totalLidos as O}from"./dados-CrToLRPu.js";var k=new Map,A=new Set,j=`canonica`,M=null,N=!1;function P(){N||(N=!0,k=m(),A=p(),j=h())}function F(t){j=t,M=null,E(t),e()}function I(e){return t`
    <div class="progresso-leitura__barra" role="presentation">
      <div class="progresso-leitura__preenchido" style=${`width:${e}%`}></div>
    </div>
  `}function L(){let e=w(k);return t`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${n.leituraBiblia.progressoGeral}</span>
        <span class="progresso-leitura__percentual">${e}%</span>
      </div>
      ${I(e)}
      <span class="progresso-leitura__detalhe">
        ${n.leituraBiblia.capitulos(O(k),T)} ·
        ${n.leituraBiblia.livros(y(k),D.length)}
      </span>
    </div>
  `}function R(r){let i=c(r);return t`
    <div class="capitulos">
      ${Array.from({length:i},(e,t)=>t+1).map(n=>t`
          <button
            type="button"
            class="capitulo"
            ?data-lido=${s(k,r,n)}
            aria-pressed=${s(k,r,n)}
            @click=${()=>{k=a(k,r,n),e()}}
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
        @click=${()=>{k=b(k,r,!0),e()}}
      >
        <kk-icon slot="prefix" name="checks"></kk-icon>${n.leituraBiblia.livroInteiro}
      </kk-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{k=b(k,r,!1),e()}}
      >
        <kk-icon slot="prefix" name="eraser"></kk-icon>${n.leituraBiblia.limpar}
      </kk-button>
    </div>
  `}function z(n){let i=M===n,a=v(k,n),o=u(j,n);return t`
    <div class="livro" ?data-completo=${a}>
      <button
        type="button"
        class="livro__alvo"
        aria-expanded=${i}
        @click=${()=>{M=i?null:n,e()}}
      >
        <kk-icon class="livro__icone" name=${a?`circle-check`:`book`}></kk-icon>
        <span class="livro__nome">${D[n]?.nome??``}</span>
        <span class="livro__contagem">${_(k,n)}/${c(n)}</span>
        <kk-icon name=${i?`chevron-up`:`chevron-down`}></kk-icon>
      </button>

      ${o===``?r:t`<span class="livro__detalhe">${o}</span>`}
      ${I(C(k,n))}
      ${i?R(n):r}
    </div>
  `}function B(e,r){return t`
    <div class="grupo-escritor">
      <kk-icon name="user-check"></kk-icon>
      <span class="grupo-escritor__nome">${e}</span>
      <span class="grupo-escritor__contagem">
        ${n.leituraBiblia.capituloAbrev(g(k,r),l(r))}
      </span>
    </div>
  `}function V(e){return e.tipo===`grupo`?B(e.grupo.nome,e.grupo.livros):z(e.livro)}function H(){return t`
    ${L()}
    <div class="livros">${f(j).map(e=>V(e))}</div>
  `}function U(){let r=S(A);return t`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${n.leituraBiblia.roteiro}</span>
        <span class="progresso-leitura__percentual">${r}%</span>
      </div>
      ${I(r)}
      <span class="progresso-leitura__detalhe">
        ${n.leituraBiblia.trechos(d(A),x.length)}
      </span>
      <p class="progresso-leitura__nota">${n.leituraBiblia.roteiroNota}</p>
    </div>

    <div class="livros">
      ${x.map(n=>{let r=A.has(n.id);return t`
          <div class="dia" ?data-lido=${r}>
            <button
              type="button"
              class="dia__alvo"
              aria-pressed=${r}
              @click=${()=>{A=o(A,n.id),e()}}
            >
              <kk-icon class="dia__icone" name=${r?`circle-check`:`circle`}></kk-icon>
              <span class="dia__texto">
                <span class="dia__nome">${n.dia}</span>
                <span class="dia__evento">${n.evento}</span>
                <span class="dia__leituras">
                  ${n.leituras.map(e=>t`<kk-badge variant="success" pill>${e}</kk-badge>`)}
                </span>
              </span>
            </button>
          </div>
        `})}
    </div>
  `}var W={canonica:`list-numbers`,cronologica:`hourglass`,escritor:`user-check`,celebracao:`calendar-week`};function G(){return t`
    <div class="chips" role="group" aria-label=${n.leituraBiblia.visualizacao}>
      ${i.map(e=>t`
          <button
            class="chip"
            ?data-ativo=${j===e}
            title=${n.leituraBiblia.visoesAjuda[e]}
            @click=${()=>F(e)}
          >
            <kk-icon name=${W[e]}></kk-icon>
            ${n.leituraBiblia.visoes[e]}
          </button>
        `)}
    </div>
  `}var K={voltarPara(){return`home`},conteudo(){return P(),t`
      ${G()}
      ${j===`celebracao`?U():H()}
    `}};export{K as telaLeitura};