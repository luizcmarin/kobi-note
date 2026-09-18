import{ft as e,mt as t,ot as n,ut as r}from"./index-D3l2wNoD.js";import{VISOES as i,alternarCapitulo as a,alternarDia as o,capituloLido as s,capitulosDe as c,capitulosDoGrupo as l,detalheDoLivro as u,diasLidos as d,itensDaVisao as f,lerCelebracao as p,lerLidos as m,lerVisao as h,lidosDoGrupo as g,lidosDoLivro as _,livroCompleto as v,livrosConcluidos as y,marcarLivro as b,n as x,percentualCelebracao as S,percentualDoLivro as C,percentualGeral as w,r as T,salvarVisao as E,t as D,totalLidos as O}from"./dados-CrToLRPu.js";var k=new Map,A=new Set,j=`canonica`,M=null,N=!1;function P(){N||(N=!0,k=m(),A=p(),j=h())}function F(e){j=e,M=null,E(e),n()}function I(e){return t`
    <div class="progresso-leitura__barra" role="presentation">
      <div class="progresso-leitura__preenchido" style=${`width:${e}%`}></div>
    </div>
  `}function L(){let e=w(k);return t`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${r.leituraBiblia.progressoGeral}</span>
        <span class="progresso-leitura__percentual">${e}%</span>
      </div>
      ${I(e)}
      <span class="progresso-leitura__detalhe">
        ${r.leituraBiblia.capitulos(O(k),T)} ·
        ${r.leituraBiblia.livros(y(k),D.length)}
      </span>
    </div>
  `}function R(e){let i=c(e);return t`
    <div class="capitulos">
      ${Array.from({length:i},(e,t)=>t+1).map(r=>t`
          <button
            type="button"
            class="capitulo"
            ?data-lido=${s(k,e,r)}
            aria-pressed=${s(k,e,r)}
            @click=${()=>{k=a(k,e,r),n()}}
          >
            ${r}
          </button>
        `)}
    </div>

    <div class="capitulos__acoes">
      <kk-button
        size="small"
        variant="success"
        outline
        @click=${()=>{k=b(k,e,!0),n()}}
      >
        <kk-icon slot="prefix" name="checks"></kk-icon>${r.leituraBiblia.livroInteiro}
      </kk-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{k=b(k,e,!1),n()}}
      >
        <kk-icon slot="prefix" name="eraser"></kk-icon>${r.leituraBiblia.limpar}
      </kk-button>
    </div>
  `}function z(r){let i=M===r,a=v(k,r),o=u(j,r);return t`
    <div class="livro" ?data-completo=${a}>
      <button
        type="button"
        class="livro__alvo"
        aria-expanded=${i}
        @click=${()=>{M=i?null:r,n()}}
      >
        <kk-icon class="livro__icone" name=${a?`circle-check`:`book`}></kk-icon>
        <span class="livro__nome">${D[r]?.nome??``}</span>
        <span class="livro__contagem">${_(k,r)}/${c(r)}</span>
        <kk-icon name=${i?`chevron-up`:`chevron-down`}></kk-icon>
      </button>

      ${o===``?e:t`<span class="livro__detalhe">${o}</span>`}
      ${I(C(k,r))}
      ${i?R(r):e}
    </div>
  `}function B(e,n){return t`
    <div class="grupo-escritor">
      <kk-icon name="user-check"></kk-icon>
      <span class="grupo-escritor__nome">${e}</span>
      <span class="grupo-escritor__contagem">
        ${r.leituraBiblia.capituloAbrev(g(k,n),l(n))}
      </span>
    </div>
  `}function V(e){return e.tipo===`grupo`?B(e.grupo.nome,e.grupo.livros):z(e.livro)}function H(){return t`
    ${L()}
    <div class="livros">${f(j).map(e=>V(e))}</div>
  `}function U(){let e=S(A);return t`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${r.leituraBiblia.roteiro}</span>
        <span class="progresso-leitura__percentual">${e}%</span>
      </div>
      ${I(e)}
      <span class="progresso-leitura__detalhe">
        ${r.leituraBiblia.trechos(d(A),x.length)}
      </span>
      <p class="progresso-leitura__nota">${r.leituraBiblia.roteiroNota}</p>
    </div>

    <div class="livros">
      ${x.map(e=>{let r=A.has(e.id);return t`
          <div class="dia" ?data-lido=${r}>
            <button
              type="button"
              class="dia__alvo"
              aria-pressed=${r}
              @click=${()=>{A=o(A,e.id),n()}}
            >
              <kk-icon class="dia__icone" name=${r?`circle-check`:`circle`}></kk-icon>
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
    <div class="chips" role="group" aria-label=${r.leituraBiblia.visualizacao}>
      ${i.map(e=>t`
          <button
            class="chip"
            ?data-ativo=${j===e}
            title=${r.leituraBiblia.visoesAjuda[e]}
            @click=${()=>F(e)}
          >
            <kk-icon name=${W[e]}></kk-icon>
            ${r.leituraBiblia.visoes[e]}
          </button>
        `)}
    </div>
  `}var K={voltarPara(){return`home`},conteudo(){return P(),t`
      ${G()}
      ${j===`celebracao`?U():H()}
    `}};export{K as telaLeitura};