import{i as e}from"./numero-Elgnatu7.js";import{$ as t,C as n,Q as r,Z as i,_t as a,bt as o,d as s,et as c,f as l,ft as u,g as d,m as f,mt as p,p as m,rt as h,u as g,w as _,xt as v}from"./index-tEHw1VqD.js";var y={projetos:{bioma:{versao:`1.0.0`,build:`2026-09-26T15:34:39.027Z`},admin:{versao:`1.0.152`,build:`2026-09-26T15:34:39.027Z`},note:{versao:`0.1.252`,build:`2026-09-25T19:29:19.480Z`},ui:{versao:`1.0.105`,build:`2026-09-25T19:27:41.820Z`},dev:{versao:`1.1.114`,build:`2026-09-25T19:37:12.024Z`},flow:{versao:`0.0.102`,build:`2026-09-25T19:31:23.532Z`},sql:{versao:`3.53.4`,build:`2026-09-25T00:45:35.553Z`}},componentesUi:84,pacotes:[{nome:`@kobi/admin`,versao:`1.0.152`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.114`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.102`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`0.1.252`,caminho:`apps/note`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/kit`,versao:`1.0.105`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_criacao_modulos:63,not_cronologia_eventos:630,not_estoque_alimentos:32,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1273,not_poesias:275,not_principios:112,not_receitas:4}}.projetos.note?.versao??``,b=null,x=null,S=!1,C=!1,w=!1,T=``,E=!1,D=null,O=!1;function k(){O||(O=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``)===`sobre/backup`&&(b=null,x=null,T=``,D=null,A())}))}function A(){b!==null||E||D!==null||(E=!0,(async()=>{try{b=await i(y)}catch(e){console.error(`backup: a carga falhou.`,e),D=_(e)}finally{E=!1,u()}})())}function j(){D=null,A(),u()}async function M(){S=!0,u();try{let e=await r(y);T=a.backup.baixado(e.arquivo)}catch(e){console.error(`backup: a geração falhou.`,e),f(a.backup.falhou,`danger`)}finally{S=!1,u()}}async function N(e){let n=e.files?.[0];if(x=null,T=``,e.value=``,n===void 0){u();return}C=!0,u();try{x=t(await n.text()),x.desconhecidos.length>0&&(T=a.backup.desconhecidos(x.desconhecidos.join(`, `)))}catch(e){console.error(`backup: o arquivo não foi lido.`,e),f(a.backup.invalido,`danger`)}finally{C=!1,u()}}async function P(){if(x!==null&&await d({titulo:a.backup.confirmarTitulo,texto:a.backup.confirmarTexto(x.registros,h(x.arquivo.gerado_em)),rotuloConfirmar:a.backup.restaurar,variante:`danger`})){w=!0,u();try{let e=await c(x);f(a.backup.restaurado(e)),location.reload()}catch(e){console.error(`backup: a restauração falhou.`,e),f(a.backup.restauracaoFalhou,`danger`),w=!1,u()}}}function F(t){let n=a.backup.stores;return v`
    <section class="backup__cartao">
      <h2 class="secao">${a.backup.resumo}</h2>

      <div class="backup__placar">
        <div class="backup__numero">
          <strong>${t.registros}</strong>
          <span>${a.backup.registros}</span>
        </div>
        <div class="backup__numero">
          <strong>${e(t.bytes)}</strong>
          <span>${a.backup.tamanho}</span>
        </div>
        <div class="backup__numero">
          <strong>${t.chaves}</strong>
          <span>${a.backup.chaves}</span>
        </div>
      </div>

      <div class="backup__detalhe">
        ${t.porStore.filter(e=>e.total>0).map(e=>v`
              <span class="backup__linha">
                <span>${n[e.id]??e.id}</span>
                <strong>${e.total}</strong>
              </span>
            `)}
      </div>

      <kk-button variant="primary" ?loading=${S} @click=${()=>void M()}>
        <kk-icon slot="prefix" name="download"></kk-icon>
        ${S?a.backup.gerando:a.backup.baixar}
      </kk-button>
    </section>
  `}function I(){return v`
    <section class="backup__cartao">
      <h2 class="secao">${a.backup.restaurarTitulo}</h2>
      <p class="backup__explicacao">${a.backup.restaurarExplicacao}</p>

      <label class="backup__escolher">
        <kk-icon name="folder-open"></kk-icon>
        ${x===null?a.backup.escolher:a.backup.escolhido}
        <input
          type="file"
          accept="application/json,.json"
          @change=${e=>void N(e.target)}
        />
      </label>

      ${x===null?o:v`
            <div class="backup__previa">
              <span>${a.backup.quando}</span>
              <strong>${h(x.arquivo.gerado_em)}</strong>
              <span>${a.backup.registros}</span>
              <strong>${x.registros}</strong>
            </div>
          `}

      <kk-button
        variant="danger"
        ?disabled=${x===null}
        ?loading=${C||w}
        @click=${()=>void P()}
      >
        <kk-icon slot="prefix" name="upload"></kk-icon>
        ${C?a.backup.lendo:a.backup.restaurar}
      </kk-button>
    </section>
  `}function L(){return k(),A(),D===null?b===null?v`<div class="carregando"><kk-spinner></kk-spinner></div>`:v`
    <div class="backup">
      <p class="backup__explicacao">${a.backup.explicacao}</p>

      ${T===``?o:v`<kk-alert variant="success" open>${T}</kk-alert>`}

      ${F(b)} ${I()}
    </div>
  `:n(D,j)}function R(e){return{tipo:`paragrafo`,partes:[{texto:e}]}}function z(...e){return{tipo:`paragrafo`,partes:e.map((e,t)=>({texto:e,forte:t%2==1})).filter(e=>e.texto!==``)}}function B(e){return{tipo:`titulo`,texto:e}}function V(...e){return{tipo:`lista`,itens:e.map(e=>[{texto:e}])}}var H=[{id:`termos`,titulo:`Termos de Uso`,icone:`file-text`,subtitulo:`Última atualização: julho de 2026`,blocos:[B(`1. Aceitação dos termos`),R(`Ao instalar, acessar ou utilizar o aplicativo Kobi Note, você concorda com estes Termos de Uso. Se não concordar com qualquer parte deles, não utilize o aplicativo.`),B(`2. Descrição do serviço`),R(`O Kobi Note é um aplicativo pessoal de uso offline, voltado a organização pessoal, estudo, gestão financeira e produtividade. Ele opera integralmente no aparelho do usuário, sem dependência de servidores externos em tempo de uso.`),B(`3. Propriedade dos dados`),R(`Todos os dados inseridos no Kobi Note pertencem exclusivamente ao usuário e são armazenados localmente no aparelho. O desenvolvedor não acessa, não coleta, não transmite e não armazena qualquer informação do usuário em servidores externos. O tratamento de dados é detalhado na Política de Privacidade.`),B(`4. Responsabilidade pelos dados`),z(`Como os dados são exclusivamente locais e o aplicativo `,`não oferece backup em nuvem`,`, a preservação das informações é de inteira responsabilidade do usuário. A desinstalação do aplicativo, a limpeza do armazenamento pelo navegador ou sistema, ou a perda do aparelho resultará em `,`perda definitiva e irrecuperável`,` de todos os dados que não tenham sido guardados pelo usuário em um arquivo de backup (Sobre → Backup e restauração).`),B(`5. Uso permitido`),R(`O aplicativo destina-se exclusivamente ao uso pessoal e não comercial. É vedado:`),V(`Realizar engenharia reversa, descompilar ou desmontar o aplicativo além do permitido em lei;`,`Utilizar o aplicativo para fins ilegais ou que violem direitos de terceiros;`,`Tentar contornar mecanismos de segurança do aplicativo;`,`Redistribuir ou comercializar o aplicativo ou seu conteúdo padrão como se fosse de sua autoria.`),B(`6. Limitação de responsabilidade`),z(`O Kobi Note é fornecido `,`"no estado em que se encontra" (as is)`,`, sem garantias expressas ou implícitas. O desenvolvedor não se responsabiliza por:`),V(`Perda de dados decorrente de falha de hardware, desinstalação ou limpeza de armazenamento;`,`Decisões financeiras, de saúde, legais ou pessoais tomadas com base no conteúdo do aplicativo;`,`Danos indiretos ou consequentes relacionados ao uso do aplicativo.`),R(`O conteúdo de caráter educativo, financeiro ou de estudo tem finalidade informativa e não substitui aconselhamento profissional.`),B(`7. Propriedade intelectual`),R(`O aplicativo Kobi Note — código-fonte, design, logotipos e recursos originais — é de propriedade do desenvolvedor e protegido pelas leis de direitos autorais. O conteúdo que você insere (anotações, metas, receitas e afins) permanece de sua propriedade exclusiva.`),z(`Materiais de terceiros eventualmente referenciados no conteúdo padrão — incluindo textos bíblicos, publicações e marcas de seus respectivos titulares — pertencem a esses titulares e são citados apenas para fins de estudo pessoal. O Kobi Note é um `,`projeto independente`,`, sem afiliação com, patrocínio de ou endosso por tais organizações.`),B(`8. Alterações nos termos`),R(`Estes termos podem ser atualizados periodicamente. O uso continuado do aplicativo após a publicação de alterações constitui aceitação dos novos termos.`),B(`9. Lei aplicável`),R(`Estes termos são regidos pela legislação brasileira, em especial a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e o Código de Defesa do Consumidor (Lei nº 8.078/1990).`),B(`10. Contato`),R(`Para questões relacionadas a estes termos, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`privacidade`,`licenca`]}]},{id:`privacidade`,titulo:`Política de Privacidade`,icone:`shield-lock`,subtitulo:`Última atualização: julho de 2026`,blocos:[B(`1. Filosofia local-first`),z(`O Kobi Note foi concebido sob o princípio de Privacy by Design. Todos os dados que você insere — textos, registros, configurações, documentos e histórico — são armazenados `,`exclusivamente no banco de dados local do seu aparelho`,`. Nenhuma informação pessoal é transmitida para servidores externos, nem para o desenvolvedor.`),B(`2. Dados que coletamos`),z(``,`Nenhum.`,` O desenvolvedor não coleta, não recebe e não armazena qualquer dado seu. Tudo o que você registra permanece somente no seu aparelho, sob seu controle.`),B(`3. Transmissão de dados`),z(`O aplicativo `,`não transmite para fora do seu aparelho`,` nenhuma informação, incluindo:`),V(`Nome, endereço, e-mail ou qualquer dado de identificação pessoal;`,`Dados de localização geográfica;`,`Contatos, agenda ou arquivos do aparelho;`,`Dados biométricos;`,`Dados de saúde, financeiros, itens de estoque ou documentos do Cofre.`),z(`Recursos como Financeiro, Estoque e Cofre funcionam inteiramente no seu aparelho: os dados que você digita neles são armazenados e processados `,`apenas localmente`,` e nunca saem do aparelho.`),B(`4. Telemetria e logs`),z(`O Kobi Note `,`não envia telemetria a servidores externos`,`. Eventuais registros técnicos de depuração existem apenas em memória durante o uso e são descartados ao encerrar o aplicativo.`),B(`5. Segurança dos dados`),R(`O banco de dados local é gravado cifrado, com uma chave que só existe neste aparelho, e os documentos do Cofre recebem uma segunda cifra (AES-256-GCM), cuja chave sai da biometria do aparelho (a chave de acesso) a cada abertura. O desenvolvedor não tem acesso a nenhum dos dois. Recomendamos:`),V(`Utilizar bloqueio de tela no aparelho;`,`Manter o sistema operacional e o navegador atualizados;`,`Estar ciente de que, por serem locais, os dados dependem inteiramente do seu aparelho (ver a seção 8).`),B(`6. Direitos do usuário (LGPD)`),z(`O Kobi Note foi projetado de modo que `,`não há tratamento dos seus dados em servidores próprios`,` — não existe um controlador externo retendo suas informações. Por isso, você exerce seus direitos previstos na Lei nº 13.709/2018 `,`diretamente, sem intermediários`,`:`),{tipo:`lista`,itens:[[{texto:`Acesso: `,forte:!0},{texto:`todos os dados ficam visíveis na própria interface do app, a qualquer momento;`}],[{texto:`Correção: `,forte:!0},{texto:`edite ou remova qualquer registro diretamente nas telas do aplicativo;`}],[{texto:`Exclusão: `,forte:!0},{texto:`apague os dados locais conforme a seção 7;`}],[{texto:`Portabilidade: `,forte:!0},{texto:`em Sobre → Backup e restauração você gera um arquivo com os seus dados, legível e restaurável em outro aparelho. Como não mantemos dados sob nossa guarda, não há informação nossa a transferir a terceiros.`}]]},B(`7. Exclusão de dados`),z(`Para apagar permanentemente seus dados, use `,`"Apagar todos os dados deste aparelho"`,`, na tela Sobre — ou limpe o armazenamento do aplicativo no seu aparelho (num navegador: apagar os dados do site do Kobi Note; num app instalado: limpar o armazenamento do app nas configurações do sistema). Os dois destroem de forma definitiva o banco de dados local, a chave que o cifra e todas as preferências. `,`A operação é irreversível: só um arquivo de backup guardado antes traz os dados de volta.`),B(`8. Responsabilidade pelos dados`),z(`Como os dados são exclusivamente locais e o aplicativo `,`não oferece backup em nuvem`,`, a preservação das informações é de inteira responsabilidade do usuário. A perda do aparelho, a desinstalação do aplicativo, a limpeza do armazenamento pelo navegador ou sistema, ou uma redefinição de fábrica resultará na `,`perda definitiva e irrecuperável`,` de todos os dados que não tenham sido guardados pelo usuário em um arquivo de backup (Sobre → Backup e restauração). O arquivo de backup é gerado e restaurado localmente, e nunca é enviado a lugar nenhum.`),B(`9. Menores de idade`),R(`O Kobi Note não transmite nem armazena fora do aparelho dados de nenhum usuário, inclusive menores de idade. Se você é responsável por uma criança que utiliza o aplicativo, saiba que nenhum dado pessoal deixa o aparelho.`),B(`10. Alterações nesta política`),R(`Esta política pode ser atualizada periodicamente. Recomendamos revisitar este documento a cada atualização do aplicativo. O uso continuado após alterações constitui aceitação da nova versão.`),B(`11. Contato`),R(`Para exercer seus direitos ou relatar problemas de privacidade, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`termos`,`licenca`]}]},{id:`terceiros`,titulo:`Direitos de Terceiros`,icone:`users`,subtitulo:`Última atualização: agosto de 2026`,blocos:[R(`O Kobi Note respeita a propriedade intelectual de terceiros. Esta página reconhece os materiais e softwares de terceiros utilizados ou referenciados no aplicativo.`),B(`1. Conteúdo de estudo referenciado`),z(`Parte do conteúdo educativo do Kobi Note faz referência a publicações e textos bíblicos de terceiros, incluindo a `,`Tradução do Novo Mundo das Escrituras Sagradas`,` e materiais dos sites jw.org e wol.jw.org.`),z(`Esses textos, publicações e materiais são de `,`propriedade e direitos autorais de Watch Tower Bible and Tract Society of Pennsylvania`,` e das entidades associadas às Testemunhas de Jeová. Marcas como "jw.org", "Tradução do Novo Mundo" e "Testemunhas de Jeová" pertencem aos seus respectivos titulares.`),z(`Eventuais trechos são citados `,`exclusivamente para fins de estudo pessoal e não comercial`,`. O Kobi Note é um `,`projeto independente e pessoal`,`, `,`sem qualquer afiliação, patrocínio, autorização ou endosso oficial`,` dessas organizações. Para o conteúdo oficial e completo, consulte diretamente as fontes de seus titulares.`),R(`Se você é titular de direitos e identificar uso indevido, utilize o contato indicado na tela "Sobre" para solicitarmos a correção ou remoção.`),B(`2. Software de código aberto`),R(`O Kobi Note é construído sobre bibliotecas de código aberto, cada uma sob sua própria licença, às quais agradecemos:`),{tipo:`tabela`,colunas:[`Biblioteca`,`Licença`],linhas:[[`Lit`,`BSD-3-Clause`],[`Shoelace (base dos componentes de interface)`,`MIT`],[`PixiJS`,`MIT`],[`SQLite (o motor do banco, compilado para WebAssembly)`,`Domínio público`],[`SQLite3 Multiple Ciphers (a cifra do banco)`,`MIT`],[`sqlean (funções do banco)`,`MIT`],[`Zod (validação de formulários)`,`MIT`],[`Vite (ferramenta de build)`,`MIT`],[`Workbox (service worker)`,`MIT`]]},R(`Shoelace, SQLite, SQLite3 Multiple Ciphers, sqlean e Zod foram adaptados e são mantidos dentro do projeto, com os avisos de copyright originais preservados. Os textos completos das licenças estão disponíveis nos repositórios oficiais de cada projeto.`),B(`3. Ícones e fontes`),z(`Os ícones de interface são do conjunto `,`Tabler Icons`,` (MIT, © Paweł Kuna). A tipografia é a `,`Atkinson Hyperlegible Next`,` (SIL Open Font License 1.1), servida pelo próprio aplicativo — o Kobi Note não busca fontes, scripts ou imagens de nenhum servidor externo em tempo de uso.`),{tipo:`veja`,documentos:[`licenca`,`termos`]}]},{id:`licenca`,titulo:`Licença`,icone:`copyright`,subtitulo:`© 2026 Luiz Marin. Todos os direitos reservados.`,blocos:[z(`O aplicativo `,`Kobi Note`,` — incluindo seu código-fonte, design, identidade visual, logotipos, textos originais e demais recursos autorais — é `,`software proprietário`,`, de titularidade exclusiva de Luiz Marin.`),B(`1. Uso permitido`),z(`É concedida ao usuário final uma licença `,`pessoal, intransferível e não comercial`,` para instalar e utilizar o aplicativo, nos termos dos Termos de Uso. Nenhuma licença de código aberto é concedida.`),B(`2. Restrições`),R(`Salvo autorização expressa e por escrito do titular, é vedado:`),V(`Copiar, reproduzir ou redistribuir o aplicativo ou partes dele;`,`Vender, sublicenciar, alugar ou comercializar o aplicativo;`,`Modificar, adaptar ou criar obras derivadas;`,`Remover ou alterar avisos de direitos autorais e de titularidade.`),B(`3. Conteúdo do usuário`),z(`Os dados e o conteúdo que você cria no aplicativo (anotações, metas, registros e afins) permanecem de `,`sua propriedade exclusiva`,` e não são abrangidos por esta licença.`),B(`4. Materiais de terceiros`),R(`Bibliotecas de código aberto e conteúdos referenciados de terceiros possuem seus próprios direitos e licenças, descritos em Direitos de Terceiros.`),B(`5. Isenção de garantias`),z(`O aplicativo é fornecido `,`"no estado em que se encontra"`,`, sem garantias de qualquer natureza. O titular não se responsabiliza por danos decorrentes do uso, conforme os Termos de Uso.`),B(`6. Contato`),R(`Para solicitar autorizações ou esclarecer dúvidas sobre esta licença, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`terceiros`,`termos`]}]}],U=new Map(H.map(e=>[e.id,e]));function W(e){return U.get(e)}var G=`backup`,K={projetos:{bioma:{versao:`1.0.0`,build:`2026-09-26T15:34:39.027Z`},admin:{versao:`1.0.152`,build:`2026-09-26T15:34:39.027Z`},note:{versao:`0.1.252`,build:`2026-09-25T19:29:19.480Z`},ui:{versao:`1.0.105`,build:`2026-09-25T19:27:41.820Z`},dev:{versao:`1.1.114`,build:`2026-09-25T19:37:12.024Z`},flow:{versao:`0.0.102`,build:`2026-09-25T19:31:23.532Z`},sql:{versao:`3.53.4`,build:`2026-09-25T00:45:35.553Z`}},componentesUi:84,pacotes:[{nome:`@kobi/admin`,versao:`1.0.152`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.114`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.102`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`0.1.252`,caminho:`apps/note`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/kit`,versao:`1.0.105`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_criacao_modulos:63,not_cronologia_eventos:630,not_estoque_alimentos:32,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1273,not_poesias:275,not_principios:112,not_receitas:4}}.projetos.note?.versao??``;function q(e){return v`${e.map(e=>e.forte===!0?v`<strong>${e.texto}</strong>`:v`${e.texto}`)}`}function J(e){switch(e.tipo){case`titulo`:return v`<h2 class="doc__titulo">${e.texto}</h2>`;case`paragrafo`:return v`<p>${q(e.partes)}</p>`;case`lista`:return v`<ul class="doc__lista">
        ${e.itens.map(e=>v`<li>${q(e)}</li>`)}
      </ul>`;case`definicoes`:return v`<dl class="doc__definicoes">
        ${e.itens.map(e=>v`
            <div class="doc__definicao">
              <dt>${e.nome}</dt>
              <dd>${e.texto}</dd>
            </div>
          `)}
      </dl>`;case`tabela`:return v`
        <div class="doc__rolagem">
          <table class="doc__tabela">
            <thead>
              <tr>
                <th>${e.colunas[0]}</th>
                <th>${e.colunas[1]}</th>
              </tr>
            </thead>
            <tbody>
              ${e.linhas.map(e=>v`<tr><td>${e[0]}</td><td>${e[1]}</td></tr>`)}
            </tbody>
          </table>
        </div>
      `;case`veja`:return v`
        <nav class="doc__veja" aria-label=${a.sobre.vejaTambem}>
          <h2 class="doc__titulo">${a.sobre.vejaTambem}</h2>
          ${e.documentos.map(e=>{let t=W(e);return t===void 0?o:X(t)})}
        </nav>
      `}}function Y(e){return v`
    <article class="doc">
      <p class="doc__sub">${e.subtitulo}</p>
      ${e.blocos.map(e=>J(e))}
    </article>
  `}function X(e){return v`
    <button class="linha" @click=${()=>p(`sobre/${e.id}`)}>
      <kk-icon class="linha__icone" name=${e.icone}></kk-icon>
      <span class="linha__rotulo">${e.titulo}</span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function Z(e,t){return v`
    <span class="selo">
      <kk-icon name=${e}></kk-icon>
      ${t}
    </span>
  `}function Q(e,t,n,r){return v`
    <div class="recurso" style="--cor: ${t}">
      <kk-icon class="recurso__icone" name=${e}></kk-icon>
      <span class="recurso__titulo">${n}</span>
      <span class="recurso__texto">${r}</span>
    </div>
  `}function $(){return v`
    <section class="sobre__capa">
      <img class="sobre__logo" src="./icons/mascote-kobi-note.svg" alt="" width="640" height="768" />
      <h2 class="sobre__nome">
        <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${a.app.nome} />
      </h2>
      ${K===``?o:v`<kk-badge variant="primary" pill>${a.sobre.versao(K)}</kk-badge>`}
      <p class="sobre__lema">${a.sobre.lema}</p>
    </section>

    <div class="selos">
      ${Z(`wifi-off`,a.sobre.seloOffline)}
      ${Z(`shield-lock`,a.sobre.seloPrivado)}
      ${Z(`eye-off`,a.sobre.seloSemRastreio)}
      ${Z(`device-mobile`,a.sobre.seloInstalavel)}
    </div>

    <h2 class="secao">${a.sobre.tudoNumLugar}</h2>
    <div class="recursos">
      ${Q(`book`,`#6f42c1`,a.sobre.recEstudo,a.sobre.recEstudoTexto)}
      ${Q(`device-gamepad-2`,`#198754`,a.sobre.recJogo,a.sobre.recJogoTexto)}
      ${Q(`feather`,`#e0399a`,a.sobre.recCriar,a.sobre.recCriarTexto)}
      ${Q(`cash`,`#16a34a`,a.sobre.recFinancas,a.sobre.recFinancasTexto)}
      ${Q(`shield-check`,`#dc2626`,a.sobre.recPreparo,a.sobre.recPreparoTexto)}
      ${Q(`users`,`#0dcaf0`,a.sobre.recMinisterio,a.sobre.recMinisterioTexto)}
    </div>

    <div class="sobre__privacidade">
      <kk-icon class="sobre__cadeado" name="shield-lock"></kk-icon>
      <div>
        <strong>${a.sobre.privacidadeTitulo}</strong>
        <p>${a.sobre.privacidadeTexto}</p>
      </div>
    </div>

    <div class="lista sobre__boasvindas">
      ${l()?v`
            <button class="linha sobre__instalar" @click=${()=>void s().then(u)}>
              <kk-icon class="linha__icone" name="download"></kk-icon>
              <span class="linha__rotulo">${a.instalacao.instalar}</span>
              <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
            </button>
          `:o}

      <button class="linha sobre__reabrir" @click=${()=>void g()}>
        <kk-icon class="linha__icone" name="sparkles"></kk-icon>
        <span class="linha__rotulo">${a.boasVindas.reabrir}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>

      <button class="linha sobre__backup" @click=${()=>p(`sobre/${G}`)}>
        <kk-icon class="linha__icone" name="database-export"></kk-icon>
        <span class="linha__rotulo">${a.backup.titulo}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>

      <button class="linha linha--perigo" @click=${()=>void m()}>
        <kk-icon class="linha__icone" name="trash"></kk-icon>
        <span class="linha__rotulo">${a.armazenamento.apagarTudo}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>
    </div>

    <h2 class="secao">${a.sobre.documentos}</h2>
    <div class="lista sobre__documentos">${H.map(e=>X(e))}</div>

    <p class="sobre__contato">
      <kk-icon name="mail"></kk-icon>
      ${a.sobre.contato}
      <a href="mailto:${a.sobre.email}">${a.sobre.email}</a>
    </p>
  `}var ee={voltarPara(e){return e.args.length===0?`home`:`sobre`},aoVoltar(e){return e.args.length!==0&&(history.back(),!0)},titulo(e){let[t]=e.args;return t===G?a.backup.titulo:t===void 0?void 0:W(t)?.titulo},capaPropria(e){return e.args.length===0},conteudo(e){let[t]=e.args;if(t===void 0)return $();if(t===G)return L();let n=W(t);return n===void 0?$():Y(n)}};export{Y as documentoInteiro,B as i,R as n,z as r,V as t,ee as telaSobre};