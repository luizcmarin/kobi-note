import{g as e,p as t}from"./chunk.TB6E37S7-CpAr8t1b.js";import{t as n}from"./defineProperty-BbfpZ9Tg.js";import{i as r,t as i}from"./lit-CI_s7elC.js";import{n as a}from"./strings-V1DWQvwW.js";import{t as o}from"./html-C5yDSNPC.js";import{r as s}from"./ordem-Bz0b6nnu.js";import{r as c}from"./rotas-CR8kk0YZ.js";import{s as l}from"./banco-Ddb9erT8.js";import{T as u,lt as d,n as f,t as p,ut as m}from"./index-DjPQ20Ch.js";import{t as h}from"./carga-4VW0gvij.js";import{t as g}from"./note-BJV9bo_U.js";import{a as _,i as v,n as y,o as b,s as x}from"./tela-D-KVrfbO.js";function S(e,t={}){return p(e===void 0?t:{"--kk-guia-cor":e,...t})}function C(n){let{progresso:r}=n,i=r===void 0||r.total===0?0:Math.min(r.lidos/r.total,1);return t`
    <header class="kk-guia-capa" style=${S(n.cor)}>
      <span class="kk-guia-capa__selo"><kk-icon name=${n.icone}></kk-icon></span>
      <div>
        <h2 class="kk-guia-capa__titulo">${n.titulo}</h2>
        <p class="kk-guia-capa__texto">${n.texto}</p>
      </div>
      ${r===void 0?e:t`
            <div class="kk-guia-capa__progresso">
              <span>${r.rotulo}</span>
              <span
                class="kk-guia-barra"
                role="progressbar"
                aria-label=${r.rotulo}
                aria-valuemin="0"
                aria-valuemax=${r.total}
                aria-valuenow=${r.lidos}
              >
                <span
                  class="kk-guia-barra__cheio"
                  style=${p({"--kk-guia-progresso":`${Math.round(i*100)}%`})}
                ></span>
              </span>
            </div>
          `}
    </header>
  `}function w(e){return t`<h2 class="kk-guia-secao">${e}</h2>`}function T(n){let r=n.lido!==void 0;return t`
    <button
      class="kk-guia-cartao"
      style=${S(n.cor)}
      data-topico=${n.id}
      ?data-lido=${r}
      @click=${()=>n.aoTocar()}
    >
      <span class="kk-guia-cartao__icone"><kk-icon name=${n.icone}></kk-icon></span>
      <span class="kk-guia-cartao__texto">
        ${n.sobre===void 0?e:t`<span class="kk-guia-cartao__sobre">${n.sobre}</span>`}
        <span class="kk-guia-cartao__titulo">${n.titulo}</span>
        ${n.resumo===void 0||n.resumo===``?e:t`<span class="kk-guia-cartao__resumo">${n.resumo}</span>`}
      </span>
      ${r?t`<kk-icon class="kk-guia-cartao__marca" name="circle-check" label=${n.lido??``}></kk-icon>`:t`<kk-icon class="kk-guia-cartao__marca" name="chevron-right"></kk-icon>`}
    </button>
  `}function E(n){return t`
    <header class="kk-guia-cabeca">
      <span class="kk-guia-cabeca__icone"><kk-icon name=${n.icone}></kk-icon></span>
      <div>
        <p class="kk-guia-cabeca__resumo">${n.resumo}</p>
        ${n.meta===void 0||n.meta.length===0?e:t`<div class="kk-guia-cabeca__meta">${n.meta.map(e=>t`<span>${e}</span>`)}</div>`}
      </div>
    </header>
  `}function D(e){return S(e)}function O(e){let t=e.trim();if(t===``)return 1;let n=t.split(/\s+/).length,r=n<t.length/20?t.length/500:n/200;return Math.max(1,Math.ceil(r))}var k=class{constructor(e){n(this,`chave`,void 0),this.chave=e}ler(){try{let e=JSON.parse(localStorage.getItem(this.chave)??`[]`);return new Set(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}catch{return new Set}}tem(e){return this.ler().has(e)}quantos(e){let t=this.ler();return e.filter(e=>t.has(e)).length}marcar(e){let t=this.ler();if(t.has(e))return!1;t.add(e);try{localStorage.setItem(this.chave,JSON.stringify([...t]))}catch{}return!0}},A=()=>l(`tutorial`);async function j(){let e=await A().todos().catch(()=>[]);return[...e.length===0?g:e].filter(e=>e.publicar!==0).sort((e,t)=>(e.ordem??0)-(t.ordem??0))}function M(e){return e.find(e=>e.modulo_id===``)}function N(e){return new Map(e.filter(e=>e.modulo_id!==``).map(e=>[e.modulo_id,e]))}var P={id:`guia`,titulo:`Guia do Usuário`,icone:`book-2`,subtitulo:`Como aproveitar o Kobi Note, seu companheiro pessoal offline-first.`,blocos:[x(`1. O que é o Kobi Note`),b(`O Kobi Note é um aplicativo pessoal que reúne, num só lugar, ferramentas de estudo, organização e preparo — funcionando `,`inteiramente no seu dispositivo`,`, mesmo sem internet. Tudo o que você cria fica guardado localmente e é só seu.`),x(`2. Instalar no aparelho`),_(`O Kobi Note é um app instalável. Instalar deixa tudo mais rápido e disponível offline:`),{tipo:`lista`,itens:[[{texto:`Celular (Android/Chrome): `,forte:!0},{texto:`abra o menu do navegador e toque em "Instalar app" ou "Adicionar à tela inicial".`}],[{texto:`iPhone/iPad (Safari): `,forte:!0},{texto:`toque em Compartilhar e depois em "Adicionar à Tela de Início".`}],[{texto:`Computador (Chrome/Edge): `,forte:!0},{texto:`clique no ícone de instalar na barra de endereço.`}]]},b(`Na primeira vez, abra o app `,`com internet`,` por alguns segundos: ele baixa o conteúdo de estudo e guarda tudo para uso offline. Depois disso, funciona sem rede.`),x(`3. Navegando pelo app`),{tipo:`lista`,itens:[[{texto:`Tela inicial: `,forte:!0},{texto:`mostra os módulos em uma grade e um resumo do dia. Toque em um card para abrir.`}],[{texto:`Seções: `,forte:!0},{texto:`os cards são agrupados por assunto (Estudo Pessoal, Trilhas, Atividades, Esteja Preparado, Extras, Pessoal, O Aplicativo). Não há tela intermediária: o card abre a área direto.`}],[{texto:`Números do mês: `,forte:!0},{texto:`a faixa logo abaixo do dia mostra o tempo de estudo do mês, as contas vencidas e as que vencem hoje, os estudos bíblicos esfriando e os relatórios a entregar, quando houver. O card Minhas Metas está sempre lá — toque nele para abrir seus objetivos.`}],[{texto:`Voltar: `,forte:!0},{texto:`use a seta no topo de cada tela para retornar.`}],[{texto:`Barra de topo: `,forte:!0},{texto:`os botões à direita abrem, de qualquer tela, o cartão de contato e a ficha de emergência, e trocam o tema claro ou escuro.`}],[{texto:`Ajuda: `,forte:!0},{texto:`o Tutorial, na seção O Aplicativo, tem um tópico por módulo. Este guia é a primeira leitura dele.`}],[{texto:`Sobre o Kobi Note: `,forte:!0},{texto:`o rodapé leva à tela Sobre, com os documentos legais e o contato.`}]]},x(`4. Os módulos`),_(`Na ordem em que aparecem na tela inicial:`),{tipo:`definicoes`,itens:[{nome:`Anotações`,texto:`Escreva e organize suas notas pessoais, em pastas.`},{nome:`Calendário`,texto:`Registre eventos e compromissos, em cinco vistas.`},{nome:`Vida e Ministério`,texto:`O contador do mês, o relatório enviado ao secretário pelo WhatsApp, o resumo do ano de serviço e os estudos bíblicos com a linha do tempo de cada um. Por dentro dele fica o "Quero Fazer Mais", que transforma uma meta de horas em compromisso semanal.`},{nome:`Minhas Metas`,texto:`Defina objetivos e acompanhe o progresso. Abre pelo card de metas na faixa de números da tela inicial.`},{nome:`Leitura da Bíblia`,texto:`Acompanhe sua leitura capítulo por capítulo, em quatro visões.`},{nome:`Meu Estudo Pessoal`,texto:`Sessões de estudo com tempo de alvo e cronômetro, que continuam de onde você parou mesmo se o app for fechado. No fim, a pérola, que pode ir também para as Anotações e para o Caderno.`},{nome:`Imite a Sua Fé`,texto:`Atritos da convivência vistos por outras lentes, até enxergar a boa intenção do outro.`},{nome:`Princípios Bíblicos`,texto:`Consulta: o que a Bíblia diz sobre as decisões do dia a dia.`},{nome:`Respostas Frequentes`,texto:`Treino para responder, com base na Bíblia, o que perguntam a você.`},{nome:`Relatório Mundial`,texto:`Os números do relatório anual das Testemunhas de Jeová desde 2017, em gráficos: o mundo ano a ano, a classificação dos países, comparações e frases prontas para um discurso.`},{nome:`Cronologia Comparada`,texto:`A linha do tempo bíblica, mundial e histórica, lado a lado.`},{nome:`Vidas Cruzadas`,texto:`Os personagens da Bíblia numa linha só de tempo: quem viveu na mesma época que quem, a comparação de duas pessoas e os lugares por onde cada uma passou.`},{nome:`Caderno de Estudo`,texto:`Tudo o que você escreveu nos módulos de estudo, com suas palavras, num lugar só.`},{nome:`O Nome Divino`,texto:`Uma trilha de dezoito capítulos sobre o nome de Deus, cada um com um jeito próprio de aprender, e um selo para cada capítulo concluído.`},{nome:`Jesus Cristo`,texto:`Uma trilha sobre o Filho de Deus: quem ele é, os passos dele na Terra, o que ensinou, o resgate e o Reino, cada capítulo com um jeito próprio de aprender e um selo no fim.`},{nome:`A Organização de Jeová`,texto:`Uma trilha sobre o povo de Jeová, do primeiro século aos nossos dias: o corpo governante, a congregação, as reuniões e o que cada um faz.`},{nome:`Você se lembra?`,texto:`Um jogo de perguntas para aprender e fixar, com base no estudo das Escrituras.`},{nome:`Entenda Melhor`,texto:`Explicações com gráficos para assuntos que pedem mais do que um parágrafo.`},{nome:`Teve um Projeto?`,texto:`Desafios interativos que mostram o design na criação por meio da matemática — sequências, geometria dos favos, órbitas, DNA e mais.`},{nome:`Nossas verdades em poesia`,texto:`Uma coletânea de poesias para leitura e meditação, e as que você escrever. O app marca as que você já leu e lembra onde você parou em cada uma.`},{nome:`Conheça os Personagens`,texto:`O álbum dos personagens da Bíblia: leia a história, responda a três perguntas e ganhe o selo.`},{nome:`Livros da Bíblia`,texto:`Um jogo de pôr os 66 livros da Bíblia em ordem, ou cada um no grupo dele.`},{nome:`Conexões`,texto:`Um jogo de achar os quatro grupos escondidos entre 16 nomes da Bíblia.`},{nome:`Conheça o Kobi`,texto:`Três brincadeiras com o mascote do app: o nome dele em coreano, o faro e o esconde-esconde.`},{nome:`Esteja Preparado`,texto:`Preparo pessoal e familiar (detalhado abaixo).`},{nome:`Guias Táticos`,texto:`Checklists e guias práticos, com os conteúdos básicos e os que você mesmo criar.`},{nome:`Receitas`,texto:`Guarde e consulte suas receitas preferidas.`},{nome:`Financeiro`,texto:`Acompanhe receitas e despesas por categoria, com o saldo realizado e o previsto.`},{nome:`Perfil / ICE / Acessibilidade`,texto:`Seus dados, as informações de emergência (ICE — In Case of Emergency), úteis a quem precisar ajudá-lo, e a acessibilidade: texto maior, contraste, menos movimento, jogos sem relógio.`},{nome:`Tutorial`,texto:`Este guia e um tópico por módulo, explicando o que ele faz e como usar.`},{nome:`Sobre`,texto:`Os documentos do app, o backup e a opção de apagar tudo deste aparelho.`}]},x(`5. Esteja Preparado`),_(`O módulo de preparo tem sub-telas próprias:`),{tipo:`lista`,itens:[[{texto:`Kits — `,forte:!0},{texto:`checklists de itens (mochila de emergência, primeiros socorros, documentos...). Marque cada item conforme reúne, e acompanhe o percentual de cada kit. Você pode editar, criar e apagar seus próprios kits; se apagar todos, os kits padrão retornam.`}],[{texto:`Estoque — `,forte:!0},{texto:`controle de alimentos e itens, com validade.`}],[{texto:`Cofre — `,forte:!0},{texto:`um espaço cifrado para guardar documentos e informações sensíveis, sempre no seu aparelho. Ele só abre com a biometria (a chave de acesso do aparelho) e se tranca de novo quando você sai. Não há senha de reserva: perder a chave de acesso é perder o cofre.`}]]},b(`Kits, Estoque e Cofre são cards da própria tela inicial, na seção "Esteja Preparado", e o `,`índice de prontidão`,` que abre essa seção resume o quanto você está preparado.`),x(`6. Conteúdo e atualizações`),_(`Os conteúdos básicos (guias, poesias, receitas, perguntas e afins) são baixados quando você abre o app com internet e ficam guardados para uso offline. Quando houver novidades, elas chegam automaticamente na próxima vez que você abrir o app conectado — ou quando você toca em "Sincronizar", na tela inicial.`),x(`7. Seus dados`),b(`Tudo o que você cria fica `,`somente no seu aparelho`,` — nada é enviado para servidores. Isso significa que:`),v(`Você tem privacidade total: ninguém além de você acessa seus dados.`,`A responsabilidade pela preservação é sua: como não há backup em nuvem, desinstalar o app, limpar os dados do navegador ou perder o aparelho apaga tudo de forma definitiva.`,`O caminho de volta é o backup: em Sobre → "Backup e restauração" você baixa um arquivo com tudo o que é seu e, no mesmo lugar, o restaura neste ou em outro aparelho. Guarde o arquivo fora do aparelho.`,`O endereço do app é note.luizcmarin.com.br. Quem ainda o abre pelo endereço antigo vê a tela "Novo endereço", que leva os dados para lá dentro do próprio aparelho.`,`Para apagar seus dados, use "Apagar todos os dados deste aparelho", no Sobre — ver a Política de Privacidade.`),{tipo:`veja`,documentos:[`termos`,`privacidade`,`terceiros`,`licenca`]}]},F=`visao-geral`,I=`guia`,L=[],R=new k(`note_tutorial_lidos`),z=new h(`tutorial`,async()=>{L=await j()});function B(e){return e===`visao-geral`?M(L):N(L).get(e)}function V(e){return e.modulo_id===``?F:e.modulo_id}function H(e,t){let n=m(e.modulo_id),r=V(e);return T({id:r,icone:n?.icone??`help-circle`,titulo:e.titulo,resumo:e.resumo,...n===void 0?{}:{cor:n.cor},...t===void 0?{}:{sobre:t},...R.tem(r)?{lido:a.guia.lido}:{},aoTocar:()=>c(`tutorial/${r}`)})}function U(){return T({id:I,icone:P.icone,titulo:P.titulo,resumo:P.subtitulo,...R.tem(`guia`)?{lido:a.guia.lido}:{},aoTocar:()=>c(`tutorial/${I}`)})}function W(){let e=N(L);return d.map(t=>e.get(t.id)).filter(e=>e!==void 0).sort((e,t)=>s(e.titulo,t.titulo))}function G(){let e=M(L);return[...e===void 0?[]:[e],...W()]}function K(){if(L.length===0)return r`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="help-circle"></kk-icon>
        <p>${a.tutorial.vazio}</p>
      </div>
    `;let e=M(L),t=m(`tutorial`),n=[...G().map(V),I],o=R.quantos(n);return r`
    ${C({titulo:t?.rotulo??a.tutorial.visaoGeral,texto:a.tutorial.intro,icone:t?.icone??`help-circle`,...t===void 0?{}:{cor:t.cor},progresso:{lidos:o,total:n.length,rotulo:o===n.length?a.guia.tudoLido:a.guia.lidos(o,n.length)}})}

    ${w(a.tutorial.visaoGeral)}
    <div class="kk-guia-grade">
      ${e===void 0?i:H(e)} ${U()}
    </div>

    ${w(a.tutorial.modulos)}
    <div class="kk-guia-grade">${W().map(e=>H(e))}</div>
  `}function q(e){let t=m(e.modulo_id),n=G(),s=n[n.indexOf(e)+1],l=f(e.conteudo);return R.marcar(V(e)),r`
    <article class="kk-guia-topico" style=${D(t?.cor??m(`tutorial`)?.cor)}>
      ${e.resumo===``?i:E({icone:t?.icone??`help-circle`,resumo:e.resumo,meta:[a.guia.leitura(O(o(l)))]})}
      <div class="kk-guia-corpo">${u(l)}</div>

      <div class="kk-guia-acoes">
        ${t===void 0?i:r`
              <kk-button variant="primary" name="abrir" @click=${()=>c(t.id)}>
                <kk-icon slot="prefix" name=${t.icone}></kk-icon>${a.guia.abrir(t.rotulo)}
              </kk-button>
            `}
        <kk-button name="indice" @click=${()=>c(`tutorial`)}>
          <kk-icon slot="prefix" name="list"></kk-icon>${a.guia.todos}
        </kk-button>
      </div>

      ${s===void 0?i:r`<div class="kk-guia-proximo">${H(s,a.guia.proximo)}</div>`}
    </article>
  `}var J={voltarPara(e){return e.args.length===0?`home`:`tutorial`},aoVoltar(e){return e.args.length!==0&&(history.back(),!0)},titulo(e){let[t]=e.args;if(t!==void 0)return t===`guia`?P.titulo:B(t)?.titulo},conteudo(e){let t=z.falhou();if(t!==null)return t;let[n]=e.args;if(n===void 0)return K();if(n===`guia`)return R.marcar(I),y(P);let i=B(n);if(i!==void 0)return q(i);let o=z.espera();return o===null?r`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="help-circle"></kk-icon>
        <p>${a.tutorial.semTopico}</p>
      </div>
    `:o}};export{J as telaTutorial};