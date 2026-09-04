import{i as e,t}from"./lit-CL39YOSA.js";import{t as n}from"./strings-BU-HmFix.js";import{a as r}from"./banco-u8JVNTlT.js";import{D as i,E as a,O as o,k as s,n as c}from"./index-CRLpDONK.js";import{t as l}from"./unsafe-html-BBiWdB6b.js";import{t as u}from"./src-aIzvNydw.js";import{documentoInteiro as d,i as f,n as p,r as m,t as h}from"./tela-VrjVlbJ4.js";var g=()=>r(`tutorial`);async function _(){let e=await g().todos().catch(()=>[]);return[...e.length===0?u:e].filter(e=>e.publicar!==0).sort((e,t)=>(e.ordem??0)-(t.ordem??0))}function v(e){return e.find(e=>e.modulo_id===``)}function y(e){return new Map(e.filter(e=>e.modulo_id!==``).map(e=>[e.modulo_id,e]))}var b={id:`guia`,titulo:`Guia do Usuário`,icone:`book-2`,subtitulo:`Como aproveitar o Kobi Note, seu companheiro pessoal offline-first.`,blocos:[f(`1. O que é o Kobi Note`),m(`O Kobi Note é um aplicativo pessoal que reúne, num só lugar, ferramentas de estudo, organização e preparo — funcionando `,`inteiramente no seu dispositivo`,`, mesmo sem internet. Tudo o que você cria fica guardado localmente e é só seu.`),f(`2. Instalar no aparelho`),p(`O Kobi Note é um app instalável. Instalar deixa tudo mais rápido e disponível offline:`),{tipo:`lista`,itens:[[{texto:`Celular (Android/Chrome): `,forte:!0},{texto:`abra o menu do navegador e toque em "Instalar app" ou "Adicionar à tela inicial".`}],[{texto:`iPhone/iPad (Safari): `,forte:!0},{texto:`toque em Compartilhar e depois em "Adicionar à Tela de Início".`}],[{texto:`Computador (Chrome/Edge): `,forte:!0},{texto:`clique no ícone de instalar na barra de endereço.`}]]},m(`Na primeira vez, abra o app `,`com internet`,` por alguns segundos: ele baixa o conteúdo de estudo e guarda tudo para uso offline. Depois disso, funciona sem rede.`),f(`3. Navegando pelo app`),{tipo:`lista`,itens:[[{texto:`Tela inicial: `,forte:!0},{texto:`mostra os módulos em uma grade e um resumo do dia. Toque em um card para abrir.`}],[{texto:`Seções: `,forte:!0},{texto:`os cards são agrupados por assunto (Estudo Pessoal, Esteja Preparado, Extras, Pessoal, O Aplicativo). Não há tela intermediária: o card abre a área direto.`}],[{texto:`Números do mês: `,forte:!0},{texto:`a faixa logo abaixo do dia resume leitura, horas, estudo e metas. O card de Metas é um botão — toque nele para abrir seus objetivos.`}],[{texto:`Voltar: `,forte:!0},{texto:`use a seta no topo de cada tela para retornar.`}],[{texto:`Cartão e ficha: `,forte:!0},{texto:`os dois botões à direita da barra de topo abrem, de qualquer tela, o cartão de contato e a ficha de emergência.`}],[{texto:`Ajuda: `,forte:!0},{texto:`o botão "?" no cabeçalho de cada módulo abre, aqui no Tutorial, o tópico daquele módulo. Este guia é a primeira leitura do Tutorial.`}],[{texto:`Sobre: `,forte:!0},{texto:`o rodapé leva à tela Sobre, com os documentos legais e o contato.`}]]},f(`4. Os módulos`),{tipo:`definicoes`,itens:[{nome:`Anotações`,texto:`Escreva e organize suas notas pessoais.`},{nome:`Guias`,texto:`Checklists e guias práticos, com os conteúdos básicos e os que você mesmo criar.`},{nome:`Poesia`,texto:`Uma coletânea de poesias para leitura e meditação.`},{nome:`Receitas`,texto:`Guarde e consulte suas receitas preferidas.`},{nome:`Língua Pura`,texto:`Um jogo de perguntas para aprender e fixar, com base no estudo das Escrituras.`},{nome:`Teve um Projeto?`,texto:`Desafios interativos que mostram o design na criação por meio da matemática — sequências, geometria dos favos, órbitas, DNA e mais.`},{nome:`Entenda Melhor`,texto:`Explicações com gráficos para assuntos que pedem mais do que um parágrafo.`},{nome:`Cronologia`,texto:`A linha do tempo bíblica, mundial e histórica, lado a lado.`},{nome:`Caderno de Estudo`,texto:`Registre, com suas palavras, o que cada estudo lhe ensinou.`},{nome:`Esteja Preparado`,texto:`Preparo pessoal e familiar (detalhado abaixo).`},{nome:`Financeiro`,texto:`Acompanhe receitas e despesas por categoria, com uma visão geral do seu orçamento.`},{nome:`Metas`,texto:`Defina objetivos e acompanhe o progresso. Abre pelo card de metas na faixa de números da tela inicial.`},{nome:`Vida e Ministério`,texto:`Organize suas atividades ministeriais.`},{nome:`Momento de Estudo`,texto:`Sessões de estudo com foco e tempo, para se concentrar.`},{nome:`Leitura da Bíblia`,texto:`Acompanhe seu progresso de leitura da Bíblia.`},{nome:`Calendário`,texto:`Registre eventos e compromissos.`},{nome:`Perfil / ICE`,texto:`Seus dados de perfil e as informações de emergência (ICE — In Case of Emergency), úteis a quem precisar ajudá-lo.`},{nome:`Tutorial`,texto:`Este guia e um tópico por módulo, explicando o que ele faz e como usar.`}]},f(`5. Esteja Preparado`),p(`O módulo de preparo tem sub-telas próprias:`),{tipo:`lista`,itens:[[{texto:`Kits — `,forte:!0},{texto:`checklists de itens (mochila de emergência, primeiros socorros, documentos…). Marque cada item conforme reúne, e acompanhe o percentual de cada kit. Você pode editar, criar e apagar seus próprios kits; se apagar todos, os kits padrão retornam.`}],[{texto:`Estoque — `,forte:!0},{texto:`controle de alimentos e itens, com validade.`}],[{texto:`Cofre — `,forte:!0},{texto:`um espaço protegido por senha para guardar documentos e informações sensíveis, sempre no seu aparelho.`}]]},m(`Kits, Estoque e Cofre são cards da própria tela inicial, na seção "Esteja Preparado", e o `,`índice de prontidão`,` que abre essa seção resume o quanto você está preparado.`),f(`6. Conteúdo e atualizações`),p(`Os conteúdos básicos (guias, poesias, receitas, perguntas e afins) são baixados quando você abre o app com internet e ficam guardados para uso offline. Quando houver novidades, elas chegam automaticamente na próxima vez que você abrir o app conectado — ou quando você toca em "Sincronizar", na tela inicial.`),f(`7. Seus dados`),m(`Tudo o que você cria fica `,`somente no seu aparelho`,` — nada é enviado para servidores. Isso significa que:`),h(`Você tem privacidade total: ninguém além de você acessa seus dados.`,`A responsabilidade pela preservação é sua: como não há backup em nuvem, desinstalar o app, limpar os dados do navegador ou perder o aparelho apaga tudo de forma definitiva.`,`Para apagar seus dados, limpe o armazenamento do app — ver a Política de Privacidade.`),{tipo:`veja`,documentos:[`termos`,`privacidade`,`terceiros`,`licenca`]}]},x=`visao-geral`,S=`guia`,C=[],w=!1,T=!1;function E(){w||T||(T=!0,(async()=>{try{C=await _(),w=!0}finally{T=!1,a()}})())}function D(e){return e===`visao-geral`?v(C):y(C).get(e)}function O(n){let r=s(n.modulo_id),a=n.modulo_id===``?x:n.modulo_id;return e`
    <button
      class="linha"
      style=${r===void 0?``:`--cor:${r.cor}`}
      @click=${()=>i(`tutorial/${a}`)}
    >
      <kk-icon class="linha__icone" name=${r?.icone??`help-circle`}></kk-icon>
      <span class="linha__rotulo">
        ${n.titulo}
        ${n.resumo===``?t:e`<small class="linha__resumo">${n.resumo}</small>`}
      </span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function k(){return e`
    <button class="linha" @click=${()=>i(`tutorial/${S}`)}>
      <kk-icon class="linha__icone" name=${b.icone}></kk-icon>
      <span class="linha__rotulo">
        ${b.titulo}
        <small class="linha__resumo">${b.subtitulo}</small>
      </span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function A(){if(C.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="help-circle"></kk-icon>
        <p>${n.tutorial.vazio}</p>
      </div>
    `;let r=v(C),i=y(C),a=o.map(e=>i.get(e.id)).filter(e=>e!==void 0).sort((e,t)=>e.titulo.localeCompare(t.titulo,`pt-BR`,{sensitivity:`base`}));return e`
    <p class="intro">${n.tutorial.intro}</p>

    <h2 class="secao">${n.tutorial.visaoGeral}</h2>
    <div class="lista">
      ${r===void 0?t:O(r)}
      ${k()}
    </div>

    <h2 class="secao">${n.tutorial.modulos}</h2>
    <div class="lista">${a.map(e=>O(e))}</div>
  `}function j(t){return e`<div class="prosa">${l(c(t.conteudo))}</div>`}var M={voltarPara(e){return e.args.length===0?`home`:`tutorial`},aoVoltar(e){return e.args.length!==0&&(history.back(),!0)},titulo(e){let[t]=e.args;if(t!==void 0)return t===`guia`?b.titulo:D(t)?.titulo},conteudo(t){E();let[r]=t.args;if(r===void 0)return A();if(r===`guia`)return d(b);let i=D(r);return i===void 0?w?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="help-circle"></kk-icon>
        <p>${n.tutorial.semTopico}</p>
      </div>
    `:e`<div class="carregando"><kk-spinner></kk-spinner></div>`:j(i)}};export{M as telaTutorial};