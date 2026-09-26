import{_t as e,bt as t,ft as n,xt as r}from"./index-tEHw1VqD.js";import{VISOES as i,alternarCapitulo as a,alternarDia as o,capituloLido as s,capitulosDe as c,capitulosDoGrupo as l,detalheDoLivro as u,diasLidos as d,itensDaVisao as f,lerCelebracao as p,lerLidos as m,lerVisao as h,lidosDoGrupo as g,lidosDoLivro as _,livroCompleto as v,livrosConcluidos as y,marcarLivro as b,n as x,percentualCelebracao as S,percentualDoLivro as C,percentualGeral as w,r as T,salvarVisao as E,t as D,totalLidos as O}from"./dados-CrToLRPu.js";var k=new Map,A=new Set,j=`canonica`,M=null,N=!1;function P(){N||(N=!0,k=m(),A=p(),j=h())}function F(e){j=e,M=null,E(e),n()}function I(e){return r`
    <div class="progresso-leitura__barra" role="presentation">
      <div class="progresso-leitura__preenchido" style=${`width:${e}%`}></div>
    </div>
  `}function L(){let t=w(k);return r`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${e.leituraBiblia.progressoGeral}</span>
        <span class="progresso-leitura__percentual">${t}%</span>
      </div>
      ${I(t)}
      <span class="progresso-leitura__detalhe">
        ${e.leituraBiblia.capitulos(O(k),T)} ·
        ${e.leituraBiblia.livros(y(k),D.length)}
      </span>
    </div>
  `}function R(t){let i=c(t);return r`
    <div class="capitulos">
      ${Array.from({length:i},(e,t)=>t+1).map(e=>r`
          <button
            type="button"
            class="capitulo"
            ?data-lido=${s(k,t,e)}
            aria-pressed=${s(k,t,e)}
            @click=${()=>{k=a(k,t,e),n()}}
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
        @click=${()=>{k=b(k,t,!0),n()}}
      >
        <kk-icon slot="prefix" name="checks"></kk-icon>${e.leituraBiblia.livroInteiro}
      </kk-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{k=b(k,t,!1),n()}}
      >
        <kk-icon slot="prefix" name="eraser"></kk-icon>${e.leituraBiblia.limpar}
      </kk-button>
    </div>
  `}function z(e){let i=M===e,a=v(k,e),o=u(j,e);return r`
    <div class="livro" ?data-completo=${a}>
      <button
        type="button"
        class="livro__alvo"
        aria-expanded=${i}
        @click=${()=>{M=i?null:e,n()}}
      >
        <kk-icon class="livro__icone" name=${a?`circle-check`:`book`}></kk-icon>
        <span class="livro__nome">${D[e]?.nome??``}</span>
        <span class="livro__contagem">${_(k,e)}/${c(e)}</span>
        <kk-icon name=${i?`chevron-up`:`chevron-down`}></kk-icon>
      </button>

      ${o===``?t:r`<span class="livro__detalhe">${o}</span>`}
      ${I(C(k,e))}
      ${i?R(e):t}
    </div>
  `}function B(t,n){return r`
    <div class="grupo-escritor">
      <kk-icon name="user-check"></kk-icon>
      <span class="grupo-escritor__nome">${t}</span>
      <span class="grupo-escritor__contagem">
        ${e.leituraBiblia.capituloAbrev(g(k,n),l(n))}
      </span>
    </div>
  `}function V(e){return e.tipo===`grupo`?B(e.grupo.nome,e.grupo.livros):z(e.livro)}function H(){return r`
    ${L()}
    <div class="livros">${f(j).map(e=>V(e))}</div>
  `}function U(){let t=S(A);return r`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${e.leituraBiblia.roteiro}</span>
        <span class="progresso-leitura__percentual">${t}%</span>
      </div>
      ${I(t)}
      <span class="progresso-leitura__detalhe">
        ${e.leituraBiblia.trechos(d(A),x.length)}
      </span>
      <p class="progresso-leitura__nota">${e.leituraBiblia.roteiroNota}</p>
    </div>

    <div class="livros">
      ${x.map(e=>{let t=A.has(e.id);return r`
          <div class="dia" ?data-lido=${t}>
            <button
              type="button"
              class="dia__alvo"
              aria-pressed=${t}
              @click=${()=>{A=o(A,e.id),n()}}
            >
              <kk-icon class="dia__icone" name=${t?`circle-check`:`circle`}></kk-icon>
              <span class="dia__texto">
                <span class="dia__nome">${e.dia}</span>
                <span class="dia__evento">${e.evento}</span>
                <span class="dia__leituras">
                  ${e.leituras.map(e=>r`<kk-badge variant="success" pill>${e}</kk-badge>`)}
                </span>
              </span>
            </button>
          </div>
        `})}
    </div>
  `}var W={canonica:`list-numbers`,cronologica:`hourglass`,escritor:`user-check`,celebracao:`calendar-week`};function G(){return r`
    <div class="chips" role="group" aria-label=${e.leituraBiblia.visualizacao}>
      ${i.map(t=>r`
          <button
            class="chip"
            ?data-ativo=${j===t}
            title=${e.leituraBiblia.visoesAjuda[t]}
            @click=${()=>F(t)}
          >
            <kk-icon name=${W[t]}></kk-icon>
            ${e.leituraBiblia.visoes[t]}
          </button>
        `)}
    </div>
  `}var K={voltarPara(){return`home`},conteudo(){return P(),r`
      ${G()}
      ${j===`celebracao`?U():H()}
    `}};export{K as telaLeitura};