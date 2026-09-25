import{ct as e,gt as t,pt as n,vt as r}from"./index-sA5grpgQ.js";import{VISOES as i,alternarCapitulo as a,alternarDia as o,capituloLido as s,capitulosDe as c,capitulosDoGrupo as l,detalheDoLivro as u,diasLidos as d,itensDaVisao as f,lerCelebracao as p,lerLidos as m,lerVisao as h,lidosDoGrupo as g,lidosDoLivro as _,livroCompleto as v,livrosConcluidos as y,marcarLivro as b,n as x,percentualCelebracao as S,percentualDoLivro as C,percentualGeral as w,r as T,salvarVisao as E,t as D,totalLidos as O}from"./dados-CrToLRPu.js";var k=new Map,A=new Set,j=`canonica`,M=null,N=!1;function P(){N||(N=!0,k=m(),A=p(),j=h())}function F(t){j=t,M=null,E(t),e()}function I(e){return r`
    <div class="progresso-leitura__barra" role="presentation">
      <div class="progresso-leitura__preenchido" style=${`width:${e}%`}></div>
    </div>
  `}function L(){let e=w(k);return r`
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
  `}function R(t){let i=c(t);return r`
    <div class="capitulos">
      ${Array.from({length:i},(e,t)=>t+1).map(n=>r`
          <button
            type="button"
            class="capitulo"
            ?data-lido=${s(k,t,n)}
            aria-pressed=${s(k,t,n)}
            @click=${()=>{k=a(k,t,n),e()}}
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
        @click=${()=>{k=b(k,t,!0),e()}}
      >
        <kk-icon slot="prefix" name="checks"></kk-icon>${n.leituraBiblia.livroInteiro}
      </kk-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{k=b(k,t,!1),e()}}
      >
        <kk-icon slot="prefix" name="eraser"></kk-icon>${n.leituraBiblia.limpar}
      </kk-button>
    </div>
  `}function z(n){let i=M===n,a=v(k,n),o=u(j,n);return r`
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

      ${o===``?t:r`<span class="livro__detalhe">${o}</span>`}
      ${I(C(k,n))}
      ${i?R(n):t}
    </div>
  `}function B(e,t){return r`
    <div class="grupo-escritor">
      <kk-icon name="user-check"></kk-icon>
      <span class="grupo-escritor__nome">${e}</span>
      <span class="grupo-escritor__contagem">
        ${n.leituraBiblia.capituloAbrev(g(k,t),l(t))}
      </span>
    </div>
  `}function V(e){return e.tipo===`grupo`?B(e.grupo.nome,e.grupo.livros):z(e.livro)}function H(){return r`
    ${L()}
    <div class="livros">${f(j).map(e=>V(e))}</div>
  `}function U(){let t=S(A);return r`
    <div class="progresso-leitura">
      <div class="progresso-leitura__topo">
        <span class="progresso-leitura__rotulo">${n.leituraBiblia.roteiro}</span>
        <span class="progresso-leitura__percentual">${t}%</span>
      </div>
      ${I(t)}
      <span class="progresso-leitura__detalhe">
        ${n.leituraBiblia.trechos(d(A),x.length)}
      </span>
      <p class="progresso-leitura__nota">${n.leituraBiblia.roteiroNota}</p>
    </div>

    <div class="livros">
      ${x.map(t=>{let n=A.has(t.id);return r`
          <div class="dia" ?data-lido=${n}>
            <button
              type="button"
              class="dia__alvo"
              aria-pressed=${n}
              @click=${()=>{A=o(A,t.id),e()}}
            >
              <kk-icon class="dia__icone" name=${n?`circle-check`:`circle`}></kk-icon>
              <span class="dia__texto">
                <span class="dia__nome">${t.dia}</span>
                <span class="dia__evento">${t.evento}</span>
                <span class="dia__leituras">
                  ${t.leituras.map(e=>r`<kk-badge variant="success" pill>${e}</kk-badge>`)}
                </span>
              </span>
            </button>
          </div>
        `})}
    </div>
  `}var W={canonica:`list-numbers`,cronologica:`hourglass`,escritor:`user-check`,celebracao:`calendar-week`};function G(){return r`
    <div class="chips" role="group" aria-label=${n.leituraBiblia.visualizacao}>
      ${i.map(e=>r`
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
  `}var K={voltarPara(){return`home`},conteudo(){return P(),r`
      ${G()}
      ${j===`celebracao`?U():H()}
    `}};export{K as telaLeitura};