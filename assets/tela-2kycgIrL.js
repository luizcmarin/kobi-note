import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./strings-DQE9Hi7n.js";import{r}from"./rotas-D12eslN_.js";import{r as i}from"./data-7IMAkOFv.js";import{i as a}from"./numero-Elgnatu7.js";import{a as o}from"./acessibilidade-CRpcvpwG.js";import{F as s,I as c,L as l,P as u,R as d,a as f,c as p,d as m,i as h,m as g,o as _,p as v,r as y,s as b}from"./index-DOFaeRHJ.js";import{t as x}from"./carga-FJ-D8QI_.js";var S={projetos:{bioma:{versao:`1.0.0`,build:`2026-10-01T19:46:22.426Z`},admin:{versao:`1.0.169`,build:`2026-10-01T19:46:22.426Z`},note:{versao:`0.1.270`,build:`2026-10-01T19:42:38.664Z`},ui:{versao:`1.0.114`,build:`2026-10-01T19:46:10.520Z`},dev:{versao:`1.1.129`,build:`2026-10-01T13:48:56.376Z`},flow:{versao:`0.0.111`,build:`2026-10-01T13:48:35.996Z`},sql:{versao:`3.53.4`,build:`2026-09-30T19:39:20.508Z`}},componentesUi:87,pacotes:[{nome:`@kobi/admin`,versao:`1.0.169`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.129`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.111`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`0.1.270`,caminho:`apps/note`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/kit`,versao:`1.0.114`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_conexoes_grupos:39,not_criacao_modulos:63,not_cronologia_eventos:630,not_estoque_alimentos:32,not_faq:63,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1273,not_personagens:24,not_poesias:275,not_principios:112,not_receitas:4}}.projetos.note?.versao??``,C=null,w=null,T=!1,E=!1,D=!1,O=``,k=!1;function A(){k||(k=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``)===`sobre/backup`&&(C=null,w=null,O=``,j.esquecer(),j.garantir())}))}var j=new x(`backup`,async()=>{C=await u(S)});async function M(){T=!0,d();try{let e=await s(S);O=n.backup.baixado(e.arquivo)}catch(e){console.error(`backup: a geração falhou.`,e),p(n.backup.falhou,`danger`)}finally{T=!1,d()}}async function N(e){let t=e.files?.[0];if(w=null,O=``,e.value=``,t===void 0){d();return}E=!0,d();try{w=c(await t.text()),w.desconhecidos.length>0&&(O=n.backup.desconhecidos(w.desconhecidos.join(`, `)))}catch(e){console.error(`backup: o arquivo não foi lido.`,e),p(n.backup.invalido,`danger`)}finally{E=!1,d()}}async function P(){if(w!==null&&await g({titulo:n.backup.confirmarTitulo,texto:n.backup.confirmarTexto(w.registros,i(w.arquivo.gerado_em)),rotuloConfirmar:n.backup.restaurar,variante:`danger`})){D=!0,d();try{let e=await l(w);p(n.backup.restaurado(e)),location.reload()}catch(e){console.error(`backup: a restauração falhou.`,e),p(n.backup.restauracaoFalhou,`danger`),D=!1,d()}}}function F(t){let r=n.backup.stores;return e`
    <section class="backup__cartao">
      <h2 class="secao">${n.backup.resumo}</h2>

      <div class="backup__placar">
        <div class="backup__numero">
          <strong>${t.registros}</strong>
          <span>${n.backup.registros}</span>
        </div>
        <div class="backup__numero">
          <strong>${a(t.bytes)}</strong>
          <span>${n.backup.tamanho}</span>
        </div>
        <div class="backup__numero">
          <strong>${t.chaves}</strong>
          <span>${n.backup.chaves}</span>
        </div>
      </div>

      <div class="backup__detalhe">
        ${t.porStore.filter(e=>e.total>0).map(t=>e`
              <span class="backup__linha">
                <span>${r[t.id]??t.id}</span>
                <strong>${t.total}</strong>
              </span>
            `)}
      </div>

      <kk-button variant="primary" ?loading=${T} @click=${()=>void M()}>
        <kk-icon slot="prefix" name="download"></kk-icon>
        ${T?n.backup.gerando:n.backup.baixar}
      </kk-button>
    </section>
  `}function ee(){return e`
    <section class="backup__cartao">
      <h2 class="secao">${n.backup.restaurarTitulo}</h2>
      <p class="backup__explicacao">${n.backup.restaurarExplicacao}</p>

      <label class="escolher-arquivo">
        <kk-icon name="folder-open"></kk-icon>
        ${w===null?n.backup.escolher:n.backup.escolhido}
        <input
          type="file"
          accept="application/json,.json"
          @change=${e=>void N(e.target)}
        />
      </label>

      ${w===null?t:e`
            <div class="backup__previa">
              <span>${n.backup.quando}</span>
              <strong>${i(w.arquivo.gerado_em)}</strong>
              <span>${n.backup.registros}</span>
              <strong>${w.registros}</strong>
            </div>
          `}

      <kk-button
        variant="danger"
        ?disabled=${w===null}
        ?loading=${E||D}
        @click=${()=>void P()}
      >
        <kk-icon slot="prefix" name="upload"></kk-icon>
        ${E?n.backup.lendo:n.backup.restaurar}
      </kk-button>
    </section>
  `}function I(){A();let r=j.espera();return r===null?C===null?m():e`
    <div class="backup">
      <p class="backup__explicacao">${n.backup.explicacao}</p>

      ${O===``?t:e`<kk-alert variant="success" open>${O}</kk-alert>`}

      ${F(C)} ${ee()}
    </div>
  `:r}function L(e){return{tipo:`paragrafo`,partes:[{texto:e}]}}function R(...e){return{tipo:`paragrafo`,partes:e.map((e,t)=>({texto:e,forte:t%2==1})).filter(e=>e.texto!==``)}}function z(e){return{tipo:`titulo`,texto:e}}function B(...e){return{tipo:`lista`,itens:e.map(e=>[{texto:e}])}}var V=[{id:`termos`,titulo:`Termos de Uso`,icone:`file-text`,subtitulo:`Última atualização: julho de 2026`,blocos:[z(`1. Aceitação dos termos`),L(`Ao instalar, acessar ou utilizar o aplicativo Kobi Note, você concorda com estes Termos de Uso. Se não concordar com qualquer parte deles, não utilize o aplicativo.`),z(`2. Descrição do serviço`),L(`O Kobi Note é um aplicativo pessoal de uso offline, voltado a organização pessoal, estudo, gestão financeira e produtividade. Ele opera integralmente no aparelho do usuário, sem dependência de servidores externos em tempo de uso.`),z(`3. Propriedade dos dados`),L(`Todos os dados inseridos no Kobi Note pertencem exclusivamente ao usuário e são armazenados localmente no aparelho. O desenvolvedor não acessa, não coleta, não transmite e não armazena qualquer informação do usuário em servidores externos. O tratamento de dados é detalhado na Política de Privacidade.`),z(`4. Responsabilidade pelos dados`),R(`Como os dados são exclusivamente locais e o aplicativo `,`não oferece backup em nuvem`,`, a preservação das informações é de inteira responsabilidade do usuário. A desinstalação do aplicativo, a limpeza do armazenamento pelo navegador ou sistema, ou a perda do aparelho resultará em `,`perda definitiva e irrecuperável`,` de todos os dados que não tenham sido guardados pelo usuário em um arquivo de backup (Sobre → Backup e restauração).`),z(`5. Uso permitido`),L(`O aplicativo destina-se exclusivamente ao uso pessoal e não comercial. É vedado:`),B(`Realizar engenharia reversa, descompilar ou desmontar o aplicativo além do permitido em lei;`,`Utilizar o aplicativo para fins ilegais ou que violem direitos de terceiros;`,`Tentar contornar mecanismos de segurança do aplicativo;`,`Redistribuir ou comercializar o aplicativo ou seu conteúdo padrão como se fosse de sua autoria.`),z(`6. Limitação de responsabilidade`),R(`O Kobi Note é fornecido `,`"no estado em que se encontra" (as is)`,`, sem garantias expressas ou implícitas. O desenvolvedor não se responsabiliza por:`),B(`Perda de dados decorrente de falha de hardware, desinstalação ou limpeza de armazenamento;`,`Decisões financeiras, de saúde, legais ou pessoais tomadas com base no conteúdo do aplicativo;`,`Danos indiretos ou consequentes relacionados ao uso do aplicativo.`),L(`O conteúdo de caráter educativo, financeiro ou de estudo tem finalidade informativa e não substitui aconselhamento profissional.`),z(`7. Propriedade intelectual`),L(`O aplicativo Kobi Note — código-fonte, design, logotipos e recursos originais — é de propriedade do desenvolvedor e protegido pelas leis de direitos autorais. O conteúdo que você insere (anotações, metas, receitas e afins) permanece de sua propriedade exclusiva.`),R(`Materiais de terceiros eventualmente referenciados no conteúdo padrão — incluindo textos bíblicos, publicações e marcas de seus respectivos titulares — pertencem a esses titulares e são citados apenas para fins de estudo pessoal. O Kobi Note é um `,`projeto independente`,`, sem afiliação com, patrocínio de ou endosso por tais organizações.`),z(`8. Alterações nos termos`),L(`Estes termos podem ser atualizados periodicamente. O uso continuado do aplicativo após a publicação de alterações constitui aceitação dos novos termos.`),z(`9. Lei aplicável`),L(`Estes termos são regidos pela legislação brasileira, em especial a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e o Código de Defesa do Consumidor (Lei nº 8.078/1990).`),z(`10. Contato`),L(`Para questões relacionadas a estes termos, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`privacidade`,`licenca`]}]},{id:`privacidade`,titulo:`Política de Privacidade`,icone:`shield-lock`,subtitulo:`Última atualização: julho de 2026`,blocos:[z(`1. Filosofia local-first`),R(`O Kobi Note foi concebido sob o princípio de Privacy by Design. Todos os dados que você insere — textos, registros, configurações, documentos e histórico — são armazenados `,`exclusivamente no banco de dados local do seu aparelho`,`. Nenhuma informação pessoal é transmitida para servidores externos, nem para o desenvolvedor.`),z(`2. Dados que coletamos`),R(``,`Nenhum.`,` O desenvolvedor não coleta, não recebe e não armazena qualquer dado seu. Tudo o que você registra permanece somente no seu aparelho, sob seu controle.`),z(`3. Transmissão de dados`),R(`O aplicativo `,`não transmite para fora do seu aparelho`,` nenhuma informação, incluindo:`),B(`Nome, endereço, e-mail ou qualquer dado de identificação pessoal;`,`Dados de localização geográfica;`,`Contatos, agenda ou arquivos do aparelho;`,`Dados biométricos;`,`Dados de saúde, financeiros, itens de estoque ou documentos do Cofre.`),R(`Recursos como Financeiro, Estoque e Cofre funcionam inteiramente no seu aparelho: os dados que você digita neles são armazenados e processados `,`apenas localmente`,` e nunca saem do aparelho.`),z(`4. Telemetria e logs`),R(`O Kobi Note `,`não envia telemetria a servidores externos`,`. Eventuais registros técnicos de depuração existem apenas em memória durante o uso e são descartados ao encerrar o aplicativo.`),z(`5. Segurança dos dados`),L(`O banco de dados local é gravado cifrado, com uma chave que só existe neste aparelho, e os documentos do Cofre recebem uma segunda cifra (AES-256-GCM), cuja chave sai da biometria do aparelho (a chave de acesso) a cada abertura. O desenvolvedor não tem acesso a nenhum dos dois. Recomendamos:`),B(`Utilizar bloqueio de tela no aparelho;`,`Manter o sistema operacional e o navegador atualizados;`,`Estar ciente de que, por serem locais, os dados dependem inteiramente do seu aparelho (ver a seção 8).`),z(`6. Direitos do usuário (LGPD)`),R(`O Kobi Note foi projetado de modo que `,`não há tratamento dos seus dados em servidores próprios`,` — não existe um controlador externo retendo suas informações. Por isso, você exerce seus direitos previstos na Lei nº 13.709/2018 `,`diretamente, sem intermediários`,`:`),{tipo:`lista`,itens:[[{texto:`Acesso: `,forte:!0},{texto:`todos os dados ficam visíveis na própria interface do app, a qualquer momento;`}],[{texto:`Correção: `,forte:!0},{texto:`edite ou remova qualquer registro diretamente nas telas do aplicativo;`}],[{texto:`Exclusão: `,forte:!0},{texto:`apague os dados locais conforme a seção 7;`}],[{texto:`Portabilidade: `,forte:!0},{texto:`em Sobre → Backup e restauração você gera um arquivo com os seus dados, legível e restaurável em outro aparelho. Como não mantemos dados sob nossa guarda, não há informação nossa a transferir a terceiros.`}]]},z(`7. Exclusão de dados`),R(`Para apagar permanentemente seus dados, use `,`"Apagar todos os dados deste aparelho"`,`, na tela Sobre — ou limpe o armazenamento do aplicativo no seu aparelho (num navegador: apagar os dados do site do Kobi Note; num app instalado: limpar o armazenamento do app nas configurações do sistema). Os dois destroem de forma definitiva o banco de dados local, a chave que o cifra e todas as preferências. `,`A operação é irreversível: só um arquivo de backup guardado antes traz os dados de volta.`),z(`8. Responsabilidade pelos dados`),R(`Como os dados são exclusivamente locais e o aplicativo `,`não oferece backup em nuvem`,`, a preservação das informações é de inteira responsabilidade do usuário. A perda do aparelho, a desinstalação do aplicativo, a limpeza do armazenamento pelo navegador ou sistema, ou uma redefinição de fábrica resultará na `,`perda definitiva e irrecuperável`,` de todos os dados que não tenham sido guardados pelo usuário em um arquivo de backup (Sobre → Backup e restauração). O arquivo de backup é gerado e restaurado localmente, e nunca é enviado a lugar nenhum.`),z(`9. Menores de idade`),L(`O Kobi Note não transmite nem armazena fora do aparelho dados de nenhum usuário, inclusive menores de idade. Se você é responsável por uma criança que utiliza o aplicativo, saiba que nenhum dado pessoal deixa o aparelho.`),z(`10. Alterações nesta política`),L(`Esta política pode ser atualizada periodicamente. Recomendamos revisitar este documento a cada atualização do aplicativo. O uso continuado após alterações constitui aceitação da nova versão.`),z(`11. Contato`),L(`Para exercer seus direitos ou relatar problemas de privacidade, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`termos`,`licenca`]}]},{id:`terceiros`,titulo:`Direitos de Terceiros`,icone:`users`,subtitulo:`Última atualização: agosto de 2026`,blocos:[L(`O Kobi Note respeita a propriedade intelectual de terceiros. Esta página reconhece os materiais e softwares de terceiros utilizados ou referenciados no aplicativo.`),z(`1. Conteúdo de estudo referenciado`),R(`Parte do conteúdo educativo do Kobi Note faz referência a publicações e textos bíblicos de terceiros, incluindo a `,`Tradução do Novo Mundo das Escrituras Sagradas`,` e materiais dos sites jw.org e wol.jw.org.`),R(`Esses textos, publicações e materiais são de `,`propriedade e direitos autorais de Watch Tower Bible and Tract Society of Pennsylvania`,` e das entidades associadas às Testemunhas de Jeová. Marcas como "jw.org", "Tradução do Novo Mundo" e "Testemunhas de Jeová" pertencem aos seus respectivos titulares.`),R(`Eventuais trechos são citados `,`exclusivamente para fins de estudo pessoal e não comercial`,`. O Kobi Note é um `,`projeto independente e pessoal`,`, `,`sem qualquer afiliação, patrocínio, autorização ou endosso oficial`,` dessas organizações. Para o conteúdo oficial e completo, consulte diretamente as fontes de seus titulares.`),L(`Se você é titular de direitos e identificar uso indevido, utilize o contato indicado na tela "Sobre" para solicitarmos a correção ou remoção.`),z(`2. Software de código aberto`),L(`O Kobi Note é construído sobre bibliotecas de código aberto, cada uma sob sua própria licença, às quais agradecemos:`),{tipo:`tabela`,colunas:[`Biblioteca`,`Licença`],linhas:[[`Lit`,`BSD-3-Clause`],[`Shoelace (base dos componentes de interface)`,`MIT`],[`PixiJS`,`MIT`],[`SQLite (o motor do banco, compilado para WebAssembly)`,`Domínio público`],[`SQLite3 Multiple Ciphers (a cifra do banco)`,`MIT`],[`sqlean (funções do banco)`,`MIT`],[`Zod (validação de formulários)`,`MIT`],[`Vite (ferramenta de build)`,`MIT`],[`Workbox (service worker)`,`MIT`]]},L(`Shoelace, SQLite, SQLite3 Multiple Ciphers, sqlean e Zod foram adaptados e são mantidos dentro do projeto, com os avisos de copyright originais preservados. Os textos completos das licenças estão disponíveis nos repositórios oficiais de cada projeto.`),z(`3. Ícones e fontes`),R(`Os ícones de interface são do conjunto `,`Tabler Icons`,` (MIT, © Paweł Kuna). A tipografia é a `,`Atkinson Hyperlegible Next`,` (SIL Open Font License 1.1), servida pelo próprio aplicativo — o Kobi Note não busca fontes, scripts ou imagens de nenhum servidor externo em tempo de uso.`),{tipo:`veja`,documentos:[`licenca`,`termos`]}]},{id:`licenca`,titulo:`Licença`,icone:`copyright`,subtitulo:`© 2026 Luiz Marin. Todos os direitos reservados.`,blocos:[R(`O aplicativo `,`Kobi Note`,` — incluindo seu código-fonte, design, identidade visual, logotipos, textos originais e demais recursos autorais — é `,`software proprietário`,`, de titularidade exclusiva de Luiz Marin.`),z(`1. Uso permitido`),R(`É concedida ao usuário final uma licença `,`pessoal, intransferível e não comercial`,` para instalar e utilizar o aplicativo, nos termos dos Termos de Uso. Nenhuma licença de código aberto é concedida.`),z(`2. Restrições`),L(`Salvo autorização expressa e por escrito do titular, é vedado:`),B(`Copiar, reproduzir ou redistribuir o aplicativo ou partes dele;`,`Vender, sublicenciar, alugar ou comercializar o aplicativo;`,`Modificar, adaptar ou criar obras derivadas;`,`Remover ou alterar avisos de direitos autorais e de titularidade.`),z(`3. Conteúdo do usuário`),R(`Os dados e o conteúdo que você cria no aplicativo (anotações, metas, registros e afins) permanecem de `,`sua propriedade exclusiva`,` e não são abrangidos por esta licença.`),z(`4. Materiais de terceiros`),L(`Bibliotecas de código aberto e conteúdos referenciados de terceiros possuem seus próprios direitos e licenças, descritos em Direitos de Terceiros.`),z(`5. Isenção de garantias`),R(`O aplicativo é fornecido `,`"no estado em que se encontra"`,`, sem garantias de qualquer natureza. O titular não se responsabiliza por danos decorrentes do uso, conforme os Termos de Uso.`),z(`6. Contato`),L(`Para solicitar autorizações ou esclarecer dúvidas sobre esta licença, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`terceiros`,`termos`]}]}],H=new Map(V.map(e=>[e.id,e]));function U(e){return H.get(e)}var W=`backup`,G={projetos:{bioma:{versao:`1.0.0`,build:`2026-10-01T19:46:22.426Z`},admin:{versao:`1.0.169`,build:`2026-10-01T19:46:22.426Z`},note:{versao:`0.1.270`,build:`2026-10-01T19:42:38.664Z`},ui:{versao:`1.0.114`,build:`2026-10-01T19:46:10.520Z`},dev:{versao:`1.1.129`,build:`2026-10-01T13:48:56.376Z`},flow:{versao:`0.0.111`,build:`2026-10-01T13:48:35.996Z`},sql:{versao:`3.53.4`,build:`2026-09-30T19:39:20.508Z`}},componentesUi:87,pacotes:[{nome:`@kobi/admin`,versao:`1.0.169`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.129`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.111`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`0.1.270`,caminho:`apps/note`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/kit`,versao:`1.0.114`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_conexoes_grupos:39,not_criacao_modulos:63,not_cronologia_eventos:630,not_estoque_alimentos:32,not_faq:63,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1273,not_personagens:24,not_poesias:275,not_principios:112,not_receitas:4}}.projetos.note?.versao??``;function K(t){return e`${t.map(t=>t.forte===!0?e`<strong>${t.texto}</strong>`:e`${t.texto}`)}`}function q(r){switch(r.tipo){case`titulo`:return e`<h2 class="doc__titulo">${r.texto}</h2>`;case`paragrafo`:return e`<p>${K(r.partes)}</p>`;case`lista`:return e`<ul class="doc__lista">
        ${r.itens.map(t=>e`<li>${K(t)}</li>`)}
      </ul>`;case`definicoes`:return e`<dl class="doc__definicoes">
        ${r.itens.map(t=>e`
            <div class="doc__definicao">
              <dt>${t.nome}</dt>
              <dd>${t.texto}</dd>
            </div>
          `)}
      </dl>`;case`tabela`:return e`
        <div class="doc__rolagem">
          <table class="doc__tabela">
            <thead>
              <tr>
                <th>${r.colunas[0]}</th>
                <th>${r.colunas[1]}</th>
              </tr>
            </thead>
            <tbody>
              ${r.linhas.map(t=>e`<tr><td>${t[0]}</td><td>${t[1]}</td></tr>`)}
            </tbody>
          </table>
        </div>
      `;case`veja`:return e`
        <nav class="doc__veja" aria-label=${n.sobre.vejaTambem}>
          <h2 class="doc__titulo">${n.sobre.vejaTambem}</h2>
          ${r.documentos.map(e=>{let n=U(e);return n===void 0?t:Y(n)})}
        </nav>
      `}}function J(t){return e`
    <article class="doc">
      <p class="doc__sub">${t.subtitulo}</p>
      ${t.blocos.map(e=>q(e))}
    </article>
  `}function Y(t){return e`
    <button class="linha" @click=${()=>r(`sobre/${t.id}`)}>
      <kk-icon class="linha__icone" name=${t.icone}></kk-icon>
      <span class="linha__rotulo">${t.titulo}</span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function X(t,n){return e`
    <span class="selo">
      <kk-icon name=${t}></kk-icon>
      ${n}
    </span>
  `}function Z(t,n,r,i){return e`
    <div class="recurso" style="--cor: ${n}">
      <kk-icon class="recurso__icone" name=${t}></kk-icon>
      <span class="recurso__titulo">${r}</span>
      <span class="recurso__texto">${i}</span>
    </div>
  `}function Q(){return v(n.instalacao.instalarIos,void 0,t=>e`
    <p>${n.boasVindas.passos.instalar.textoIos}</p>
    <kk-button slot="footer" variant="primary" @click=${()=>t(void 0)}>
      ${n.acoes.fechar}
    </kk-button>
  `)}var te=[{icone:`book`,cor:`#6f42c1`},{icone:`device-gamepad-2`,cor:`#198754`},{icone:`feather`,cor:`#e0399a`},{icone:`cash`,cor:`#16a34a`},{icone:`shield-check`,cor:`#dc2626`},{icone:`users`,cor:`#0dcaf0`}];function $(){let[i,a,s,c,l,u]=te;return e`
    <section class="sobre__capa">
      <img class="sobre__logo" src=${o()} alt="" width="640" height="768" />
      <h2 class="sobre__nome">
        <img class="escrito" src="./icons/kobi-note-escrito.svg" alt=${n.app.nome} />
      </h2>
      ${G===``?t:e`<kk-badge variant="primary" pill>${n.sobre.versao(G)}</kk-badge>`}
      <p class="sobre__lema">${n.sobre.lema}</p>
    </section>

    <div class="selos">
      ${X(`wifi-off`,n.sobre.seloOffline)}
      ${X(`shield-lock`,n.sobre.seloPrivado)}
      ${X(`eye-off`,n.sobre.seloSemRastreio)}
      ${X(`device-mobile`,n.sobre.seloInstalavel)}
      ${X(`accessible`,n.sobre.seloAcessivel)}
    </div>

    <h2 class="secao">${n.sobre.tudoNumLugar}</h2>
    <div class="recursos">
      ${Z(i.icone,i.cor,n.sobre.recEstudo,n.sobre.recEstudoTexto)}
      ${Z(a.icone,a.cor,n.sobre.recJogo,n.sobre.recJogoTexto)}
      ${Z(s.icone,s.cor,n.sobre.recCriar,n.sobre.recCriarTexto)}
      ${Z(c.icone,c.cor,n.sobre.recFinancas,n.sobre.recFinancasTexto)}
      ${Z(l.icone,l.cor,n.sobre.recPreparo,n.sobre.recPreparoTexto)}
      ${Z(u.icone,u.cor,n.sobre.recMinisterio,n.sobre.recMinisterioTexto)}
    </div>

    <div class="sobre__privacidade">
      <kk-icon class="sobre__cadeado" name="shield-lock"></kk-icon>
      <div>
        <strong>${n.sobre.privacidadeTitulo}</strong>
        <p>${n.sobre.privacidadeTexto}</p>
      </div>
    </div>

    <button class="sobre__privacidade sobre__acessibilidade" @click=${()=>r(`perfil/acessibilidade`)}>
      <kk-icon class="sobre__cadeado" name="accessible"></kk-icon>
      <div>
        <strong>${n.sobre.acessibilidadeTitulo}</strong>
        <p>${n.sobre.acessibilidadeTexto}</p>
      </div>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>

    <div class="lista sobre__boasvindas">
      ${h()?e`
            <button class="linha sobre__instalar" @click=${()=>void Q()}>
              <kk-icon class="linha__icone" name="brand-apple"></kk-icon>
              <span class="linha__rotulo">${n.instalacao.instalarIos}</span>
              <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
            </button>
          `:t}
      ${_()?e`
            <button class="linha sobre__instalar" @click=${()=>void f().then(d)}>
              <kk-icon class="linha__icone" name="download"></kk-icon>
              <span class="linha__rotulo">${n.instalacao.instalar}</span>
              <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
            </button>
          `:t}

      <button class="linha sobre__reabrir" @click=${()=>void y()}>
        <kk-icon class="linha__icone" name="sparkles"></kk-icon>
        <span class="linha__rotulo">${n.boasVindas.reabrir}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>

      <button class="linha sobre__backup" @click=${()=>r(`sobre/${W}`)}>
        <kk-icon class="linha__icone" name="database-export"></kk-icon>
        <span class="linha__rotulo">${n.backup.titulo}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>

      <button class="linha linha--perigo" @click=${()=>void b()}>
        <kk-icon class="linha__icone" name="trash"></kk-icon>
        <span class="linha__rotulo">${n.armazenamento.apagarTudo}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>
    </div>

    <h2 class="secao">${n.sobre.documentos}</h2>
    <div class="lista sobre__documentos">${V.map(e=>Y(e))}</div>

    <p class="sobre__contato">
      <kk-icon name="mail"></kk-icon>
      ${n.sobre.contato}
      <a href="mailto:${n.sobre.email}">${n.sobre.email}</a>
    </p>
  `}var ne={voltarPara(e){return e.args.length===0?`home`:`sobre`},aoVoltar(e){return e.args.length!==0&&(history.back(),!0)},titulo(e){let[t]=e.args;return t===W?n.backup.titulo:t===void 0?void 0:U(t)?.titulo},capaPropria(e){return e.args.length===0},conteudo(e){let[t]=e.args;if(t===void 0)return $();if(t===W)return I();let n=U(t);return n===void 0?$():J(n)}};export{J as documentoInteiro,z as i,L as n,R as r,B as t,ne as telaSobre};